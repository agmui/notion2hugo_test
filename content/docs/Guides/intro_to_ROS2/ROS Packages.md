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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PJVZUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7r3E5g4UrFVfGLtWZqOYyK08zDcjXXlW77tdk1pFrbAiEAoo%2Bd6uJGE3Ck1EMW9HjPQIVppsvOqOBXY3xX%2BifFqmQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOZlXRuzN88PRkeSyrcA6zNGA0o3k7p00g4IYiTFLkA8KahFeVgpyssLwFAOCiUCs57dpbnfvYTtgr9z5mZ8BtuDNdleXATQIWE%2Fp5h8f58PNOTIo%2ByHoCmUf6DM3QpIChAiVB586tmGz8VMTP0PWPsliZDY8Nt1h%2FJSB7B2RoNpcAOIQLBiSdUU57yX12heF6c%2Fb3IUJaDb4vEjnA2fwkuhCv2c6D5nzpbDHQqIxfO0hMGqlps3jzuGI6OpDx37da1G29Er%2FBJI3LN%2F7wwcw5u06knUrHyIhDksUtuP4HPOhUmjtOwgAJSoXQBsIEXaPDGbDg0QhuNcN2nwgWOD395YAzELcY%2Fu%2BEoJq%2F1pGG2VLQj8pub2NOcFWH9mGFSLK2wGmKlQ32oTMne3y70oZby4HoMMsVERX507lVl9nFn627%2BCzgEKAWBwbQzXda3gIQYKCtEUF3oPDEY13UnEpR5sdOERzRfTtooMvUBPuXMo2lppxNVBRPOPTed0sg8w620kprXdPEItHePa9bL6IBBw%2B5RoxeBbZz2bdS1VQEKEw3XooD0XJVs15mz5kA%2FUggeAtfZbkZLU05qjjRQ853GK6GStn1e%2FsaHyztXv8eDBq5tIIyTzlYCD3xPfPFtM51%2Bw5nJTUUK6PDgMILOp74GOqUBqAF%2F3qsadm%2FmlR61jJ9v0GHCVHtgUlNd0l81gA5SNXtxnDbLoezY0wjUDX5GzV34SGPK5SSAC3%2Bs9oHsHJ2ccs1hobMZOURUBI2pvzHEhGgT9OcZGzDrlr%2FUA6QFVyIQapNwFCCqUYxtPStKm0da5UZJeTH7WFZ5IC9iLj9isft9W%2BWMzr8ydXjnKw6CuEZ8CpNBotmgw0GgIV%2BUrLgBsIj73Gjm&X-Amz-Signature=d8e1c47ddfa1310fdf33bc3ff273c140ea3070dd2e180853b2df15b87e760ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PJVZUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7r3E5g4UrFVfGLtWZqOYyK08zDcjXXlW77tdk1pFrbAiEAoo%2Bd6uJGE3Ck1EMW9HjPQIVppsvOqOBXY3xX%2BifFqmQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOZlXRuzN88PRkeSyrcA6zNGA0o3k7p00g4IYiTFLkA8KahFeVgpyssLwFAOCiUCs57dpbnfvYTtgr9z5mZ8BtuDNdleXATQIWE%2Fp5h8f58PNOTIo%2ByHoCmUf6DM3QpIChAiVB586tmGz8VMTP0PWPsliZDY8Nt1h%2FJSB7B2RoNpcAOIQLBiSdUU57yX12heF6c%2Fb3IUJaDb4vEjnA2fwkuhCv2c6D5nzpbDHQqIxfO0hMGqlps3jzuGI6OpDx37da1G29Er%2FBJI3LN%2F7wwcw5u06knUrHyIhDksUtuP4HPOhUmjtOwgAJSoXQBsIEXaPDGbDg0QhuNcN2nwgWOD395YAzELcY%2Fu%2BEoJq%2F1pGG2VLQj8pub2NOcFWH9mGFSLK2wGmKlQ32oTMne3y70oZby4HoMMsVERX507lVl9nFn627%2BCzgEKAWBwbQzXda3gIQYKCtEUF3oPDEY13UnEpR5sdOERzRfTtooMvUBPuXMo2lppxNVBRPOPTed0sg8w620kprXdPEItHePa9bL6IBBw%2B5RoxeBbZz2bdS1VQEKEw3XooD0XJVs15mz5kA%2FUggeAtfZbkZLU05qjjRQ853GK6GStn1e%2FsaHyztXv8eDBq5tIIyTzlYCD3xPfPFtM51%2Bw5nJTUUK6PDgMILOp74GOqUBqAF%2F3qsadm%2FmlR61jJ9v0GHCVHtgUlNd0l81gA5SNXtxnDbLoezY0wjUDX5GzV34SGPK5SSAC3%2Bs9oHsHJ2ccs1hobMZOURUBI2pvzHEhGgT9OcZGzDrlr%2FUA6QFVyIQapNwFCCqUYxtPStKm0da5UZJeTH7WFZ5IC9iLj9isft9W%2BWMzr8ydXjnKw6CuEZ8CpNBotmgw0GgIV%2BUrLgBsIj73Gjm&X-Amz-Signature=6c2aef8d2d75feac3596e51fb27a2ff0bfe99b485ced83e4ac55fbb5a73dcc93&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PJVZUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7r3E5g4UrFVfGLtWZqOYyK08zDcjXXlW77tdk1pFrbAiEAoo%2Bd6uJGE3Ck1EMW9HjPQIVppsvOqOBXY3xX%2BifFqmQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOZlXRuzN88PRkeSyrcA6zNGA0o3k7p00g4IYiTFLkA8KahFeVgpyssLwFAOCiUCs57dpbnfvYTtgr9z5mZ8BtuDNdleXATQIWE%2Fp5h8f58PNOTIo%2ByHoCmUf6DM3QpIChAiVB586tmGz8VMTP0PWPsliZDY8Nt1h%2FJSB7B2RoNpcAOIQLBiSdUU57yX12heF6c%2Fb3IUJaDb4vEjnA2fwkuhCv2c6D5nzpbDHQqIxfO0hMGqlps3jzuGI6OpDx37da1G29Er%2FBJI3LN%2F7wwcw5u06knUrHyIhDksUtuP4HPOhUmjtOwgAJSoXQBsIEXaPDGbDg0QhuNcN2nwgWOD395YAzELcY%2Fu%2BEoJq%2F1pGG2VLQj8pub2NOcFWH9mGFSLK2wGmKlQ32oTMne3y70oZby4HoMMsVERX507lVl9nFn627%2BCzgEKAWBwbQzXda3gIQYKCtEUF3oPDEY13UnEpR5sdOERzRfTtooMvUBPuXMo2lppxNVBRPOPTed0sg8w620kprXdPEItHePa9bL6IBBw%2B5RoxeBbZz2bdS1VQEKEw3XooD0XJVs15mz5kA%2FUggeAtfZbkZLU05qjjRQ853GK6GStn1e%2FsaHyztXv8eDBq5tIIyTzlYCD3xPfPFtM51%2Bw5nJTUUK6PDgMILOp74GOqUBqAF%2F3qsadm%2FmlR61jJ9v0GHCVHtgUlNd0l81gA5SNXtxnDbLoezY0wjUDX5GzV34SGPK5SSAC3%2Bs9oHsHJ2ccs1hobMZOURUBI2pvzHEhGgT9OcZGzDrlr%2FUA6QFVyIQapNwFCCqUYxtPStKm0da5UZJeTH7WFZ5IC9iLj9isft9W%2BWMzr8ydXjnKw6CuEZ8CpNBotmgw0GgIV%2BUrLgBsIj73Gjm&X-Amz-Signature=83d5e7adb63e65b5382bb6a8a15fe4e3f9ba016e82aec083f07b57af9b720206&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PJVZUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7r3E5g4UrFVfGLtWZqOYyK08zDcjXXlW77tdk1pFrbAiEAoo%2Bd6uJGE3Ck1EMW9HjPQIVppsvOqOBXY3xX%2BifFqmQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOZlXRuzN88PRkeSyrcA6zNGA0o3k7p00g4IYiTFLkA8KahFeVgpyssLwFAOCiUCs57dpbnfvYTtgr9z5mZ8BtuDNdleXATQIWE%2Fp5h8f58PNOTIo%2ByHoCmUf6DM3QpIChAiVB586tmGz8VMTP0PWPsliZDY8Nt1h%2FJSB7B2RoNpcAOIQLBiSdUU57yX12heF6c%2Fb3IUJaDb4vEjnA2fwkuhCv2c6D5nzpbDHQqIxfO0hMGqlps3jzuGI6OpDx37da1G29Er%2FBJI3LN%2F7wwcw5u06knUrHyIhDksUtuP4HPOhUmjtOwgAJSoXQBsIEXaPDGbDg0QhuNcN2nwgWOD395YAzELcY%2Fu%2BEoJq%2F1pGG2VLQj8pub2NOcFWH9mGFSLK2wGmKlQ32oTMne3y70oZby4HoMMsVERX507lVl9nFn627%2BCzgEKAWBwbQzXda3gIQYKCtEUF3oPDEY13UnEpR5sdOERzRfTtooMvUBPuXMo2lppxNVBRPOPTed0sg8w620kprXdPEItHePa9bL6IBBw%2B5RoxeBbZz2bdS1VQEKEw3XooD0XJVs15mz5kA%2FUggeAtfZbkZLU05qjjRQ853GK6GStn1e%2FsaHyztXv8eDBq5tIIyTzlYCD3xPfPFtM51%2Bw5nJTUUK6PDgMILOp74GOqUBqAF%2F3qsadm%2FmlR61jJ9v0GHCVHtgUlNd0l81gA5SNXtxnDbLoezY0wjUDX5GzV34SGPK5SSAC3%2Bs9oHsHJ2ccs1hobMZOURUBI2pvzHEhGgT9OcZGzDrlr%2FUA6QFVyIQapNwFCCqUYxtPStKm0da5UZJeTH7WFZ5IC9iLj9isft9W%2BWMzr8ydXjnKw6CuEZ8CpNBotmgw0GgIV%2BUrLgBsIj73Gjm&X-Amz-Signature=7e48fd996bb9320446f408435f74e623e9e8663ec4834e9499170a4dd3d7acf9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PJVZUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7r3E5g4UrFVfGLtWZqOYyK08zDcjXXlW77tdk1pFrbAiEAoo%2Bd6uJGE3Ck1EMW9HjPQIVppsvOqOBXY3xX%2BifFqmQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOZlXRuzN88PRkeSyrcA6zNGA0o3k7p00g4IYiTFLkA8KahFeVgpyssLwFAOCiUCs57dpbnfvYTtgr9z5mZ8BtuDNdleXATQIWE%2Fp5h8f58PNOTIo%2ByHoCmUf6DM3QpIChAiVB586tmGz8VMTP0PWPsliZDY8Nt1h%2FJSB7B2RoNpcAOIQLBiSdUU57yX12heF6c%2Fb3IUJaDb4vEjnA2fwkuhCv2c6D5nzpbDHQqIxfO0hMGqlps3jzuGI6OpDx37da1G29Er%2FBJI3LN%2F7wwcw5u06knUrHyIhDksUtuP4HPOhUmjtOwgAJSoXQBsIEXaPDGbDg0QhuNcN2nwgWOD395YAzELcY%2Fu%2BEoJq%2F1pGG2VLQj8pub2NOcFWH9mGFSLK2wGmKlQ32oTMne3y70oZby4HoMMsVERX507lVl9nFn627%2BCzgEKAWBwbQzXda3gIQYKCtEUF3oPDEY13UnEpR5sdOERzRfTtooMvUBPuXMo2lppxNVBRPOPTed0sg8w620kprXdPEItHePa9bL6IBBw%2B5RoxeBbZz2bdS1VQEKEw3XooD0XJVs15mz5kA%2FUggeAtfZbkZLU05qjjRQ853GK6GStn1e%2FsaHyztXv8eDBq5tIIyTzlYCD3xPfPFtM51%2Bw5nJTUUK6PDgMILOp74GOqUBqAF%2F3qsadm%2FmlR61jJ9v0GHCVHtgUlNd0l81gA5SNXtxnDbLoezY0wjUDX5GzV34SGPK5SSAC3%2Bs9oHsHJ2ccs1hobMZOURUBI2pvzHEhGgT9OcZGzDrlr%2FUA6QFVyIQapNwFCCqUYxtPStKm0da5UZJeTH7WFZ5IC9iLj9isft9W%2BWMzr8ydXjnKw6CuEZ8CpNBotmgw0GgIV%2BUrLgBsIj73Gjm&X-Amz-Signature=d0c57ff66870593378b9656b56f714c0ea33c2b1b1f6aadc742a683d19ba4f58&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PJVZUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7r3E5g4UrFVfGLtWZqOYyK08zDcjXXlW77tdk1pFrbAiEAoo%2Bd6uJGE3Ck1EMW9HjPQIVppsvOqOBXY3xX%2BifFqmQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOZlXRuzN88PRkeSyrcA6zNGA0o3k7p00g4IYiTFLkA8KahFeVgpyssLwFAOCiUCs57dpbnfvYTtgr9z5mZ8BtuDNdleXATQIWE%2Fp5h8f58PNOTIo%2ByHoCmUf6DM3QpIChAiVB586tmGz8VMTP0PWPsliZDY8Nt1h%2FJSB7B2RoNpcAOIQLBiSdUU57yX12heF6c%2Fb3IUJaDb4vEjnA2fwkuhCv2c6D5nzpbDHQqIxfO0hMGqlps3jzuGI6OpDx37da1G29Er%2FBJI3LN%2F7wwcw5u06knUrHyIhDksUtuP4HPOhUmjtOwgAJSoXQBsIEXaPDGbDg0QhuNcN2nwgWOD395YAzELcY%2Fu%2BEoJq%2F1pGG2VLQj8pub2NOcFWH9mGFSLK2wGmKlQ32oTMne3y70oZby4HoMMsVERX507lVl9nFn627%2BCzgEKAWBwbQzXda3gIQYKCtEUF3oPDEY13UnEpR5sdOERzRfTtooMvUBPuXMo2lppxNVBRPOPTed0sg8w620kprXdPEItHePa9bL6IBBw%2B5RoxeBbZz2bdS1VQEKEw3XooD0XJVs15mz5kA%2FUggeAtfZbkZLU05qjjRQ853GK6GStn1e%2FsaHyztXv8eDBq5tIIyTzlYCD3xPfPFtM51%2Bw5nJTUUK6PDgMILOp74GOqUBqAF%2F3qsadm%2FmlR61jJ9v0GHCVHtgUlNd0l81gA5SNXtxnDbLoezY0wjUDX5GzV34SGPK5SSAC3%2Bs9oHsHJ2ccs1hobMZOURUBI2pvzHEhGgT9OcZGzDrlr%2FUA6QFVyIQapNwFCCqUYxtPStKm0da5UZJeTH7WFZ5IC9iLj9isft9W%2BWMzr8ydXjnKw6CuEZ8CpNBotmgw0GgIV%2BUrLgBsIj73Gjm&X-Amz-Signature=a3568045c0bda2eb5fd070afee20c6713fe563e958e5f2098090429b621f916f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645PJVZUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7r3E5g4UrFVfGLtWZqOYyK08zDcjXXlW77tdk1pFrbAiEAoo%2Bd6uJGE3Ck1EMW9HjPQIVppsvOqOBXY3xX%2BifFqmQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOZlXRuzN88PRkeSyrcA6zNGA0o3k7p00g4IYiTFLkA8KahFeVgpyssLwFAOCiUCs57dpbnfvYTtgr9z5mZ8BtuDNdleXATQIWE%2Fp5h8f58PNOTIo%2ByHoCmUf6DM3QpIChAiVB586tmGz8VMTP0PWPsliZDY8Nt1h%2FJSB7B2RoNpcAOIQLBiSdUU57yX12heF6c%2Fb3IUJaDb4vEjnA2fwkuhCv2c6D5nzpbDHQqIxfO0hMGqlps3jzuGI6OpDx37da1G29Er%2FBJI3LN%2F7wwcw5u06knUrHyIhDksUtuP4HPOhUmjtOwgAJSoXQBsIEXaPDGbDg0QhuNcN2nwgWOD395YAzELcY%2Fu%2BEoJq%2F1pGG2VLQj8pub2NOcFWH9mGFSLK2wGmKlQ32oTMne3y70oZby4HoMMsVERX507lVl9nFn627%2BCzgEKAWBwbQzXda3gIQYKCtEUF3oPDEY13UnEpR5sdOERzRfTtooMvUBPuXMo2lppxNVBRPOPTed0sg8w620kprXdPEItHePa9bL6IBBw%2B5RoxeBbZz2bdS1VQEKEw3XooD0XJVs15mz5kA%2FUggeAtfZbkZLU05qjjRQ853GK6GStn1e%2FsaHyztXv8eDBq5tIIyTzlYCD3xPfPFtM51%2Bw5nJTUUK6PDgMILOp74GOqUBqAF%2F3qsadm%2FmlR61jJ9v0GHCVHtgUlNd0l81gA5SNXtxnDbLoezY0wjUDX5GzV34SGPK5SSAC3%2Bs9oHsHJ2ccs1hobMZOURUBI2pvzHEhGgT9OcZGzDrlr%2FUA6QFVyIQapNwFCCqUYxtPStKm0da5UZJeTH7WFZ5IC9iLj9isft9W%2BWMzr8ydXjnKw6CuEZ8CpNBotmgw0GgIV%2BUrLgBsIj73Gjm&X-Amz-Signature=41f4754470959a2b2610d9760707b9373403487f1a5117dcdf5e81181055bae4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
