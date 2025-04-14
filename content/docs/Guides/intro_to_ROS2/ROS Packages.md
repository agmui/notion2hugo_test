---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKY7G2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kQ5jcBzXdGt7I56WgAUkTQpgp5nShvmaGa3Hk8RIywIhAMDYuc%2BUKtD5koO3RxxYt3oDrNvrYDn%2BfFyPqG9hN4uQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyfgIU9kGLP43nb0xIq3APrhVea%2F91UnwS0uBb6Alkpar71%2BEn4%2BGdSyYAnbHWCGf6vWYblYE2D3nP1HGqi%2F0qeZJyfxA1tt6A0gtQGdmlndAzLeorrFDMzNs0KhoAhXPsvmdAmUeMEcoQ4jqdK2AevLD8GZANYjAffMmtOIX4XlBrPNhMuuPcxbFXaXdos1Tsu%2BXlrAnk0fUqgiE7JOluwen8feAtuCWn61SmgK0bsuUisAy5jv51mg40QLf%2BT53aYBkScSK%2F%2F2CgqRdHVUbnlt%2B7Scm263muIHAR8mgNXFdddqyF6qRbBgUAn0oVyxNSTmsLDBLQ9SMqRHo%2BsyEPz%2BsYRd0tARgBuUlUDVM8sVwE83pj5D2aVVIFtpNVN4PNYXNoyG96kf7Jshg4LDXU%2BLMLBUuSFoRN1sewPPAVuqATFfL7al3r2Er7kH5EORjf6pi%2FJCf0Sz%2BTZq8STysxrXiv14dwpiok%2FaKIS085UGx4C6ddRjh8iFGpIQZdKH0V2oEKI9RpR7DDeLQPmIBQT8OlYLF6aGx1zbxT9V4NifzQr7DwhzecK5fxAXLL4WLgO24J8FDDgN35w8zy8n6%2B0659Nd6ma1aj8N2zDyLYqiYcCExsbWe5Ia%2FfSeSZzozLrhBOdSKkMydNTkDCelfW%2FBjqkAfSv2MKhd4NyigU1jdoEKAErWoP0h4L8AzI8bhyGUSJdF7Ufa1HjBd7hCUvG2iFq66M8evL5H88oje9pdfy4GACT8XowUjgPm5hBn7W8XTGDT5kSeIj7oREfYypv9fHxtVMuud%2BTdiKHWLrhA%2Bf1%2BT73TTN0VRP9Sd51%2Bokqsr25bG%2FUZ%2BQiXJLwIwlpg39299Yg1rnuHBzvxKJ900qrqcAImw%2Bo&X-Amz-Signature=d2f5f7d7e04791d2645143dc17d5bde47894011174387e628ea38539f7f6dd95&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKY7G2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kQ5jcBzXdGt7I56WgAUkTQpgp5nShvmaGa3Hk8RIywIhAMDYuc%2BUKtD5koO3RxxYt3oDrNvrYDn%2BfFyPqG9hN4uQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyfgIU9kGLP43nb0xIq3APrhVea%2F91UnwS0uBb6Alkpar71%2BEn4%2BGdSyYAnbHWCGf6vWYblYE2D3nP1HGqi%2F0qeZJyfxA1tt6A0gtQGdmlndAzLeorrFDMzNs0KhoAhXPsvmdAmUeMEcoQ4jqdK2AevLD8GZANYjAffMmtOIX4XlBrPNhMuuPcxbFXaXdos1Tsu%2BXlrAnk0fUqgiE7JOluwen8feAtuCWn61SmgK0bsuUisAy5jv51mg40QLf%2BT53aYBkScSK%2F%2F2CgqRdHVUbnlt%2B7Scm263muIHAR8mgNXFdddqyF6qRbBgUAn0oVyxNSTmsLDBLQ9SMqRHo%2BsyEPz%2BsYRd0tARgBuUlUDVM8sVwE83pj5D2aVVIFtpNVN4PNYXNoyG96kf7Jshg4LDXU%2BLMLBUuSFoRN1sewPPAVuqATFfL7al3r2Er7kH5EORjf6pi%2FJCf0Sz%2BTZq8STysxrXiv14dwpiok%2FaKIS085UGx4C6ddRjh8iFGpIQZdKH0V2oEKI9RpR7DDeLQPmIBQT8OlYLF6aGx1zbxT9V4NifzQr7DwhzecK5fxAXLL4WLgO24J8FDDgN35w8zy8n6%2B0659Nd6ma1aj8N2zDyLYqiYcCExsbWe5Ia%2FfSeSZzozLrhBOdSKkMydNTkDCelfW%2FBjqkAfSv2MKhd4NyigU1jdoEKAErWoP0h4L8AzI8bhyGUSJdF7Ufa1HjBd7hCUvG2iFq66M8evL5H88oje9pdfy4GACT8XowUjgPm5hBn7W8XTGDT5kSeIj7oREfYypv9fHxtVMuud%2BTdiKHWLrhA%2Bf1%2BT73TTN0VRP9Sd51%2Bokqsr25bG%2FUZ%2BQiXJLwIwlpg39299Yg1rnuHBzvxKJ900qrqcAImw%2Bo&X-Amz-Signature=178e60bc918c685f7804497a878b58b243e523c8f7e053ccc0d5c6c2ea45dd62&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKY7G2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kQ5jcBzXdGt7I56WgAUkTQpgp5nShvmaGa3Hk8RIywIhAMDYuc%2BUKtD5koO3RxxYt3oDrNvrYDn%2BfFyPqG9hN4uQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyfgIU9kGLP43nb0xIq3APrhVea%2F91UnwS0uBb6Alkpar71%2BEn4%2BGdSyYAnbHWCGf6vWYblYE2D3nP1HGqi%2F0qeZJyfxA1tt6A0gtQGdmlndAzLeorrFDMzNs0KhoAhXPsvmdAmUeMEcoQ4jqdK2AevLD8GZANYjAffMmtOIX4XlBrPNhMuuPcxbFXaXdos1Tsu%2BXlrAnk0fUqgiE7JOluwen8feAtuCWn61SmgK0bsuUisAy5jv51mg40QLf%2BT53aYBkScSK%2F%2F2CgqRdHVUbnlt%2B7Scm263muIHAR8mgNXFdddqyF6qRbBgUAn0oVyxNSTmsLDBLQ9SMqRHo%2BsyEPz%2BsYRd0tARgBuUlUDVM8sVwE83pj5D2aVVIFtpNVN4PNYXNoyG96kf7Jshg4LDXU%2BLMLBUuSFoRN1sewPPAVuqATFfL7al3r2Er7kH5EORjf6pi%2FJCf0Sz%2BTZq8STysxrXiv14dwpiok%2FaKIS085UGx4C6ddRjh8iFGpIQZdKH0V2oEKI9RpR7DDeLQPmIBQT8OlYLF6aGx1zbxT9V4NifzQr7DwhzecK5fxAXLL4WLgO24J8FDDgN35w8zy8n6%2B0659Nd6ma1aj8N2zDyLYqiYcCExsbWe5Ia%2FfSeSZzozLrhBOdSKkMydNTkDCelfW%2FBjqkAfSv2MKhd4NyigU1jdoEKAErWoP0h4L8AzI8bhyGUSJdF7Ufa1HjBd7hCUvG2iFq66M8evL5H88oje9pdfy4GACT8XowUjgPm5hBn7W8XTGDT5kSeIj7oREfYypv9fHxtVMuud%2BTdiKHWLrhA%2Bf1%2BT73TTN0VRP9Sd51%2Bokqsr25bG%2FUZ%2BQiXJLwIwlpg39299Yg1rnuHBzvxKJ900qrqcAImw%2Bo&X-Amz-Signature=89f52902b1a790ef6ea7d8bf16eb684c50e963231bfacd83f9f5abc611281713&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKY7G2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kQ5jcBzXdGt7I56WgAUkTQpgp5nShvmaGa3Hk8RIywIhAMDYuc%2BUKtD5koO3RxxYt3oDrNvrYDn%2BfFyPqG9hN4uQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyfgIU9kGLP43nb0xIq3APrhVea%2F91UnwS0uBb6Alkpar71%2BEn4%2BGdSyYAnbHWCGf6vWYblYE2D3nP1HGqi%2F0qeZJyfxA1tt6A0gtQGdmlndAzLeorrFDMzNs0KhoAhXPsvmdAmUeMEcoQ4jqdK2AevLD8GZANYjAffMmtOIX4XlBrPNhMuuPcxbFXaXdos1Tsu%2BXlrAnk0fUqgiE7JOluwen8feAtuCWn61SmgK0bsuUisAy5jv51mg40QLf%2BT53aYBkScSK%2F%2F2CgqRdHVUbnlt%2B7Scm263muIHAR8mgNXFdddqyF6qRbBgUAn0oVyxNSTmsLDBLQ9SMqRHo%2BsyEPz%2BsYRd0tARgBuUlUDVM8sVwE83pj5D2aVVIFtpNVN4PNYXNoyG96kf7Jshg4LDXU%2BLMLBUuSFoRN1sewPPAVuqATFfL7al3r2Er7kH5EORjf6pi%2FJCf0Sz%2BTZq8STysxrXiv14dwpiok%2FaKIS085UGx4C6ddRjh8iFGpIQZdKH0V2oEKI9RpR7DDeLQPmIBQT8OlYLF6aGx1zbxT9V4NifzQr7DwhzecK5fxAXLL4WLgO24J8FDDgN35w8zy8n6%2B0659Nd6ma1aj8N2zDyLYqiYcCExsbWe5Ia%2FfSeSZzozLrhBOdSKkMydNTkDCelfW%2FBjqkAfSv2MKhd4NyigU1jdoEKAErWoP0h4L8AzI8bhyGUSJdF7Ufa1HjBd7hCUvG2iFq66M8evL5H88oje9pdfy4GACT8XowUjgPm5hBn7W8XTGDT5kSeIj7oREfYypv9fHxtVMuud%2BTdiKHWLrhA%2Bf1%2BT73TTN0VRP9Sd51%2Bokqsr25bG%2FUZ%2BQiXJLwIwlpg39299Yg1rnuHBzvxKJ900qrqcAImw%2Bo&X-Amz-Signature=1bd9ac75c4d901d5fbb093a0c978c7549ff8ce8c8087f42bae922521c9e26af3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKY7G2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kQ5jcBzXdGt7I56WgAUkTQpgp5nShvmaGa3Hk8RIywIhAMDYuc%2BUKtD5koO3RxxYt3oDrNvrYDn%2BfFyPqG9hN4uQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyfgIU9kGLP43nb0xIq3APrhVea%2F91UnwS0uBb6Alkpar71%2BEn4%2BGdSyYAnbHWCGf6vWYblYE2D3nP1HGqi%2F0qeZJyfxA1tt6A0gtQGdmlndAzLeorrFDMzNs0KhoAhXPsvmdAmUeMEcoQ4jqdK2AevLD8GZANYjAffMmtOIX4XlBrPNhMuuPcxbFXaXdos1Tsu%2BXlrAnk0fUqgiE7JOluwen8feAtuCWn61SmgK0bsuUisAy5jv51mg40QLf%2BT53aYBkScSK%2F%2F2CgqRdHVUbnlt%2B7Scm263muIHAR8mgNXFdddqyF6qRbBgUAn0oVyxNSTmsLDBLQ9SMqRHo%2BsyEPz%2BsYRd0tARgBuUlUDVM8sVwE83pj5D2aVVIFtpNVN4PNYXNoyG96kf7Jshg4LDXU%2BLMLBUuSFoRN1sewPPAVuqATFfL7al3r2Er7kH5EORjf6pi%2FJCf0Sz%2BTZq8STysxrXiv14dwpiok%2FaKIS085UGx4C6ddRjh8iFGpIQZdKH0V2oEKI9RpR7DDeLQPmIBQT8OlYLF6aGx1zbxT9V4NifzQr7DwhzecK5fxAXLL4WLgO24J8FDDgN35w8zy8n6%2B0659Nd6ma1aj8N2zDyLYqiYcCExsbWe5Ia%2FfSeSZzozLrhBOdSKkMydNTkDCelfW%2FBjqkAfSv2MKhd4NyigU1jdoEKAErWoP0h4L8AzI8bhyGUSJdF7Ufa1HjBd7hCUvG2iFq66M8evL5H88oje9pdfy4GACT8XowUjgPm5hBn7W8XTGDT5kSeIj7oREfYypv9fHxtVMuud%2BTdiKHWLrhA%2Bf1%2BT73TTN0VRP9Sd51%2Bokqsr25bG%2FUZ%2BQiXJLwIwlpg39299Yg1rnuHBzvxKJ900qrqcAImw%2Bo&X-Amz-Signature=4436b9ce3304b99179aa3c45ad916dd727771871bec68eaf1b0acc7b7a9abfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKY7G2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kQ5jcBzXdGt7I56WgAUkTQpgp5nShvmaGa3Hk8RIywIhAMDYuc%2BUKtD5koO3RxxYt3oDrNvrYDn%2BfFyPqG9hN4uQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyfgIU9kGLP43nb0xIq3APrhVea%2F91UnwS0uBb6Alkpar71%2BEn4%2BGdSyYAnbHWCGf6vWYblYE2D3nP1HGqi%2F0qeZJyfxA1tt6A0gtQGdmlndAzLeorrFDMzNs0KhoAhXPsvmdAmUeMEcoQ4jqdK2AevLD8GZANYjAffMmtOIX4XlBrPNhMuuPcxbFXaXdos1Tsu%2BXlrAnk0fUqgiE7JOluwen8feAtuCWn61SmgK0bsuUisAy5jv51mg40QLf%2BT53aYBkScSK%2F%2F2CgqRdHVUbnlt%2B7Scm263muIHAR8mgNXFdddqyF6qRbBgUAn0oVyxNSTmsLDBLQ9SMqRHo%2BsyEPz%2BsYRd0tARgBuUlUDVM8sVwE83pj5D2aVVIFtpNVN4PNYXNoyG96kf7Jshg4LDXU%2BLMLBUuSFoRN1sewPPAVuqATFfL7al3r2Er7kH5EORjf6pi%2FJCf0Sz%2BTZq8STysxrXiv14dwpiok%2FaKIS085UGx4C6ddRjh8iFGpIQZdKH0V2oEKI9RpR7DDeLQPmIBQT8OlYLF6aGx1zbxT9V4NifzQr7DwhzecK5fxAXLL4WLgO24J8FDDgN35w8zy8n6%2B0659Nd6ma1aj8N2zDyLYqiYcCExsbWe5Ia%2FfSeSZzozLrhBOdSKkMydNTkDCelfW%2FBjqkAfSv2MKhd4NyigU1jdoEKAErWoP0h4L8AzI8bhyGUSJdF7Ufa1HjBd7hCUvG2iFq66M8evL5H88oje9pdfy4GACT8XowUjgPm5hBn7W8XTGDT5kSeIj7oREfYypv9fHxtVMuud%2BTdiKHWLrhA%2Bf1%2BT73TTN0VRP9Sd51%2Bokqsr25bG%2FUZ%2BQiXJLwIwlpg39299Yg1rnuHBzvxKJ900qrqcAImw%2Bo&X-Amz-Signature=1202a1c987eb9cc76197ee07628c8f919661d4847f4a601113ac5e80f4e01d09&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKY7G2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7kQ5jcBzXdGt7I56WgAUkTQpgp5nShvmaGa3Hk8RIywIhAMDYuc%2BUKtD5koO3RxxYt3oDrNvrYDn%2BfFyPqG9hN4uQKv8DCBsQABoMNjM3NDIzMTgzODA1IgyfgIU9kGLP43nb0xIq3APrhVea%2F91UnwS0uBb6Alkpar71%2BEn4%2BGdSyYAnbHWCGf6vWYblYE2D3nP1HGqi%2F0qeZJyfxA1tt6A0gtQGdmlndAzLeorrFDMzNs0KhoAhXPsvmdAmUeMEcoQ4jqdK2AevLD8GZANYjAffMmtOIX4XlBrPNhMuuPcxbFXaXdos1Tsu%2BXlrAnk0fUqgiE7JOluwen8feAtuCWn61SmgK0bsuUisAy5jv51mg40QLf%2BT53aYBkScSK%2F%2F2CgqRdHVUbnlt%2B7Scm263muIHAR8mgNXFdddqyF6qRbBgUAn0oVyxNSTmsLDBLQ9SMqRHo%2BsyEPz%2BsYRd0tARgBuUlUDVM8sVwE83pj5D2aVVIFtpNVN4PNYXNoyG96kf7Jshg4LDXU%2BLMLBUuSFoRN1sewPPAVuqATFfL7al3r2Er7kH5EORjf6pi%2FJCf0Sz%2BTZq8STysxrXiv14dwpiok%2FaKIS085UGx4C6ddRjh8iFGpIQZdKH0V2oEKI9RpR7DDeLQPmIBQT8OlYLF6aGx1zbxT9V4NifzQr7DwhzecK5fxAXLL4WLgO24J8FDDgN35w8zy8n6%2B0659Nd6ma1aj8N2zDyLYqiYcCExsbWe5Ia%2FfSeSZzozLrhBOdSKkMydNTkDCelfW%2FBjqkAfSv2MKhd4NyigU1jdoEKAErWoP0h4L8AzI8bhyGUSJdF7Ufa1HjBd7hCUvG2iFq66M8evL5H88oje9pdfy4GACT8XowUjgPm5hBn7W8XTGDT5kSeIj7oREfYypv9fHxtVMuud%2BTdiKHWLrhA%2Bf1%2BT73TTN0VRP9Sd51%2Bokqsr25bG%2FUZ%2BQiXJLwIwlpg39299Yg1rnuHBzvxKJ900qrqcAImw%2Bo&X-Amz-Signature=8a956afa27427ac05d3b511ab1602e46ee671deef29c57a889d8882eba06c467&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
