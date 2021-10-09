import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EmailField, EditButton, DeleteButton, TextInput, DateInput } from 'react-admin';
import PersonIcon from '@mui/icons-material/Person';
export const MemberIcon = PersonIcon;

export const MemberList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <DateField label="Birth Date" source="birthdate" />
            <EditButton basePath="/members" />
            <DeleteButton basePath="/members" />
        </Datagrid>
    </List>
);

const MemberTitle = ({ record }) => {
    return <span>Member {record ? `${record.name}` : ''}</span>;
};

export const MemberEdit = (props) => (
    <Edit title={<MemberTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <DateInput label="Birth Date" source="birthdate" />
        </SimpleForm>
    </Edit>
);

export const MemberCreate = (props) => (
    <Create title="Create a Member" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <DateInput label="Birth Date" source="birthdate" />
        </SimpleForm>
    </Create>
);