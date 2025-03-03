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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5574K4D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtw5X7PMLpGC9c7Nnvidc92fCV8BocikQ9GYBua8wepwIhALdzdFRAhoPsqFXvAVgVb%2BQEvrhWY7J5hHHQn5fRahwmKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPQfdUCBMAg1z2vB0q3AM3FGHe6UNVAoUTLxBzw2RGDGwzUvIbO8OW%2FV9I%2FmmqyNE%2FMpes4AMIkdlFW%2FgNYOceO0gBjhBDM6s9PGd7kXzFmptHAcAMSMkqnPBhUi4A%2FxLzi0gunKVAS0Vf9t7mpRIVMWtTJIoh9%2FYG3%2BWsB4SFTVdhv6nSWoUfBHAOXa3lqc13yXGi%2BzJe0ykDQ8SsK2eEXu0wcCGmRVuvYeBnCl0nfDDr1wSbmzdl2XAjlW50kHWWaGUfi6iQ35svXnwhHHhxFicQxry7GtcUYwQEQA%2Fxq93LE7OWEf1jRdureyrkap%2BqHNb9jX42AmEC1%2Bd6Z1czV55o624UnLvSVlGyVn90ZOHlY9%2FRXomSJ0TNYMNflHeb8%2BDdoJA7oMqj6jzK1jgEB5NQWVJq9en2vDs0jvaMZp5noBSSLqnY0XhqRJo2%2FrKg3tAQVaJBqRHTWKQLPsMq1W535ML%2Fv0YMq8q7lsybp2VqXyiCiOpC2%2BfFiHqMbr099g%2FVxH4SfxnIFFq9gWojNMKHxwzqPqtRDJQcyYvq0g9b9yTRwlSyKAU9G1LU0gbrfRUzqwSAi%2FM6cbg2mCHS9dmTtvmif3V7F4BTQE7FNGJk3rfOhbIqYhnUICc14xdsbwC8sIFyLsKtozCe2ZS%2BBjqkARpYmDJCAYVzzNS%2B4d45Ef6jGFcHDUKc8pY8N642bL39xRcZPvvcSWdbj%2F%2FvC0QXfebVZHBTjCQmNS%2BOM3ASMDL5FUpz6dCKE5SWbW542qEg3c2RO3w68UTIz3cU0xZD8Lkz4rhar8dHZuhrEcgtyZY6YNIX0epFG4VCXZmhPaR4MpM8O2jk5%2FS8cI3hnJoJzBNiEG7feztHXWlOPZBLhQvAoY9X&X-Amz-Signature=ea85dfdcd1e9a2d32acc28be3b5450c2dfc37a8e6a106e86fd669ed76e70006a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5574K4D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtw5X7PMLpGC9c7Nnvidc92fCV8BocikQ9GYBua8wepwIhALdzdFRAhoPsqFXvAVgVb%2BQEvrhWY7J5hHHQn5fRahwmKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPQfdUCBMAg1z2vB0q3AM3FGHe6UNVAoUTLxBzw2RGDGwzUvIbO8OW%2FV9I%2FmmqyNE%2FMpes4AMIkdlFW%2FgNYOceO0gBjhBDM6s9PGd7kXzFmptHAcAMSMkqnPBhUi4A%2FxLzi0gunKVAS0Vf9t7mpRIVMWtTJIoh9%2FYG3%2BWsB4SFTVdhv6nSWoUfBHAOXa3lqc13yXGi%2BzJe0ykDQ8SsK2eEXu0wcCGmRVuvYeBnCl0nfDDr1wSbmzdl2XAjlW50kHWWaGUfi6iQ35svXnwhHHhxFicQxry7GtcUYwQEQA%2Fxq93LE7OWEf1jRdureyrkap%2BqHNb9jX42AmEC1%2Bd6Z1czV55o624UnLvSVlGyVn90ZOHlY9%2FRXomSJ0TNYMNflHeb8%2BDdoJA7oMqj6jzK1jgEB5NQWVJq9en2vDs0jvaMZp5noBSSLqnY0XhqRJo2%2FrKg3tAQVaJBqRHTWKQLPsMq1W535ML%2Fv0YMq8q7lsybp2VqXyiCiOpC2%2BfFiHqMbr099g%2FVxH4SfxnIFFq9gWojNMKHxwzqPqtRDJQcyYvq0g9b9yTRwlSyKAU9G1LU0gbrfRUzqwSAi%2FM6cbg2mCHS9dmTtvmif3V7F4BTQE7FNGJk3rfOhbIqYhnUICc14xdsbwC8sIFyLsKtozCe2ZS%2BBjqkARpYmDJCAYVzzNS%2B4d45Ef6jGFcHDUKc8pY8N642bL39xRcZPvvcSWdbj%2F%2FvC0QXfebVZHBTjCQmNS%2BOM3ASMDL5FUpz6dCKE5SWbW542qEg3c2RO3w68UTIz3cU0xZD8Lkz4rhar8dHZuhrEcgtyZY6YNIX0epFG4VCXZmhPaR4MpM8O2jk5%2FS8cI3hnJoJzBNiEG7feztHXWlOPZBLhQvAoY9X&X-Amz-Signature=0640ed684b06e740b761f5919939ac4c09bb2cede05ddb6c20790aa12b96e370&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5574K4D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtw5X7PMLpGC9c7Nnvidc92fCV8BocikQ9GYBua8wepwIhALdzdFRAhoPsqFXvAVgVb%2BQEvrhWY7J5hHHQn5fRahwmKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPQfdUCBMAg1z2vB0q3AM3FGHe6UNVAoUTLxBzw2RGDGwzUvIbO8OW%2FV9I%2FmmqyNE%2FMpes4AMIkdlFW%2FgNYOceO0gBjhBDM6s9PGd7kXzFmptHAcAMSMkqnPBhUi4A%2FxLzi0gunKVAS0Vf9t7mpRIVMWtTJIoh9%2FYG3%2BWsB4SFTVdhv6nSWoUfBHAOXa3lqc13yXGi%2BzJe0ykDQ8SsK2eEXu0wcCGmRVuvYeBnCl0nfDDr1wSbmzdl2XAjlW50kHWWaGUfi6iQ35svXnwhHHhxFicQxry7GtcUYwQEQA%2Fxq93LE7OWEf1jRdureyrkap%2BqHNb9jX42AmEC1%2Bd6Z1czV55o624UnLvSVlGyVn90ZOHlY9%2FRXomSJ0TNYMNflHeb8%2BDdoJA7oMqj6jzK1jgEB5NQWVJq9en2vDs0jvaMZp5noBSSLqnY0XhqRJo2%2FrKg3tAQVaJBqRHTWKQLPsMq1W535ML%2Fv0YMq8q7lsybp2VqXyiCiOpC2%2BfFiHqMbr099g%2FVxH4SfxnIFFq9gWojNMKHxwzqPqtRDJQcyYvq0g9b9yTRwlSyKAU9G1LU0gbrfRUzqwSAi%2FM6cbg2mCHS9dmTtvmif3V7F4BTQE7FNGJk3rfOhbIqYhnUICc14xdsbwC8sIFyLsKtozCe2ZS%2BBjqkARpYmDJCAYVzzNS%2B4d45Ef6jGFcHDUKc8pY8N642bL39xRcZPvvcSWdbj%2F%2FvC0QXfebVZHBTjCQmNS%2BOM3ASMDL5FUpz6dCKE5SWbW542qEg3c2RO3w68UTIz3cU0xZD8Lkz4rhar8dHZuhrEcgtyZY6YNIX0epFG4VCXZmhPaR4MpM8O2jk5%2FS8cI3hnJoJzBNiEG7feztHXWlOPZBLhQvAoY9X&X-Amz-Signature=04f5b79dff7e3d3738d4f9ff32f4333cf32e3f9157e05d97cd4af938635927b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5574K4D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtw5X7PMLpGC9c7Nnvidc92fCV8BocikQ9GYBua8wepwIhALdzdFRAhoPsqFXvAVgVb%2BQEvrhWY7J5hHHQn5fRahwmKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPQfdUCBMAg1z2vB0q3AM3FGHe6UNVAoUTLxBzw2RGDGwzUvIbO8OW%2FV9I%2FmmqyNE%2FMpes4AMIkdlFW%2FgNYOceO0gBjhBDM6s9PGd7kXzFmptHAcAMSMkqnPBhUi4A%2FxLzi0gunKVAS0Vf9t7mpRIVMWtTJIoh9%2FYG3%2BWsB4SFTVdhv6nSWoUfBHAOXa3lqc13yXGi%2BzJe0ykDQ8SsK2eEXu0wcCGmRVuvYeBnCl0nfDDr1wSbmzdl2XAjlW50kHWWaGUfi6iQ35svXnwhHHhxFicQxry7GtcUYwQEQA%2Fxq93LE7OWEf1jRdureyrkap%2BqHNb9jX42AmEC1%2Bd6Z1czV55o624UnLvSVlGyVn90ZOHlY9%2FRXomSJ0TNYMNflHeb8%2BDdoJA7oMqj6jzK1jgEB5NQWVJq9en2vDs0jvaMZp5noBSSLqnY0XhqRJo2%2FrKg3tAQVaJBqRHTWKQLPsMq1W535ML%2Fv0YMq8q7lsybp2VqXyiCiOpC2%2BfFiHqMbr099g%2FVxH4SfxnIFFq9gWojNMKHxwzqPqtRDJQcyYvq0g9b9yTRwlSyKAU9G1LU0gbrfRUzqwSAi%2FM6cbg2mCHS9dmTtvmif3V7F4BTQE7FNGJk3rfOhbIqYhnUICc14xdsbwC8sIFyLsKtozCe2ZS%2BBjqkARpYmDJCAYVzzNS%2B4d45Ef6jGFcHDUKc8pY8N642bL39xRcZPvvcSWdbj%2F%2FvC0QXfebVZHBTjCQmNS%2BOM3ASMDL5FUpz6dCKE5SWbW542qEg3c2RO3w68UTIz3cU0xZD8Lkz4rhar8dHZuhrEcgtyZY6YNIX0epFG4VCXZmhPaR4MpM8O2jk5%2FS8cI3hnJoJzBNiEG7feztHXWlOPZBLhQvAoY9X&X-Amz-Signature=955c992b747e34405de5e7d92ad5721dd45dcffa13c24aa7c266677b4d3480c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5574K4D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtw5X7PMLpGC9c7Nnvidc92fCV8BocikQ9GYBua8wepwIhALdzdFRAhoPsqFXvAVgVb%2BQEvrhWY7J5hHHQn5fRahwmKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPQfdUCBMAg1z2vB0q3AM3FGHe6UNVAoUTLxBzw2RGDGwzUvIbO8OW%2FV9I%2FmmqyNE%2FMpes4AMIkdlFW%2FgNYOceO0gBjhBDM6s9PGd7kXzFmptHAcAMSMkqnPBhUi4A%2FxLzi0gunKVAS0Vf9t7mpRIVMWtTJIoh9%2FYG3%2BWsB4SFTVdhv6nSWoUfBHAOXa3lqc13yXGi%2BzJe0ykDQ8SsK2eEXu0wcCGmRVuvYeBnCl0nfDDr1wSbmzdl2XAjlW50kHWWaGUfi6iQ35svXnwhHHhxFicQxry7GtcUYwQEQA%2Fxq93LE7OWEf1jRdureyrkap%2BqHNb9jX42AmEC1%2Bd6Z1czV55o624UnLvSVlGyVn90ZOHlY9%2FRXomSJ0TNYMNflHeb8%2BDdoJA7oMqj6jzK1jgEB5NQWVJq9en2vDs0jvaMZp5noBSSLqnY0XhqRJo2%2FrKg3tAQVaJBqRHTWKQLPsMq1W535ML%2Fv0YMq8q7lsybp2VqXyiCiOpC2%2BfFiHqMbr099g%2FVxH4SfxnIFFq9gWojNMKHxwzqPqtRDJQcyYvq0g9b9yTRwlSyKAU9G1LU0gbrfRUzqwSAi%2FM6cbg2mCHS9dmTtvmif3V7F4BTQE7FNGJk3rfOhbIqYhnUICc14xdsbwC8sIFyLsKtozCe2ZS%2BBjqkARpYmDJCAYVzzNS%2B4d45Ef6jGFcHDUKc8pY8N642bL39xRcZPvvcSWdbj%2F%2FvC0QXfebVZHBTjCQmNS%2BOM3ASMDL5FUpz6dCKE5SWbW542qEg3c2RO3w68UTIz3cU0xZD8Lkz4rhar8dHZuhrEcgtyZY6YNIX0epFG4VCXZmhPaR4MpM8O2jk5%2FS8cI3hnJoJzBNiEG7feztHXWlOPZBLhQvAoY9X&X-Amz-Signature=441e56b0a448f5e272d7ee25c66545f31c1c2de6be699a92ae5cfa2e5481e922&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5574K4D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtw5X7PMLpGC9c7Nnvidc92fCV8BocikQ9GYBua8wepwIhALdzdFRAhoPsqFXvAVgVb%2BQEvrhWY7J5hHHQn5fRahwmKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPQfdUCBMAg1z2vB0q3AM3FGHe6UNVAoUTLxBzw2RGDGwzUvIbO8OW%2FV9I%2FmmqyNE%2FMpes4AMIkdlFW%2FgNYOceO0gBjhBDM6s9PGd7kXzFmptHAcAMSMkqnPBhUi4A%2FxLzi0gunKVAS0Vf9t7mpRIVMWtTJIoh9%2FYG3%2BWsB4SFTVdhv6nSWoUfBHAOXa3lqc13yXGi%2BzJe0ykDQ8SsK2eEXu0wcCGmRVuvYeBnCl0nfDDr1wSbmzdl2XAjlW50kHWWaGUfi6iQ35svXnwhHHhxFicQxry7GtcUYwQEQA%2Fxq93LE7OWEf1jRdureyrkap%2BqHNb9jX42AmEC1%2Bd6Z1czV55o624UnLvSVlGyVn90ZOHlY9%2FRXomSJ0TNYMNflHeb8%2BDdoJA7oMqj6jzK1jgEB5NQWVJq9en2vDs0jvaMZp5noBSSLqnY0XhqRJo2%2FrKg3tAQVaJBqRHTWKQLPsMq1W535ML%2Fv0YMq8q7lsybp2VqXyiCiOpC2%2BfFiHqMbr099g%2FVxH4SfxnIFFq9gWojNMKHxwzqPqtRDJQcyYvq0g9b9yTRwlSyKAU9G1LU0gbrfRUzqwSAi%2FM6cbg2mCHS9dmTtvmif3V7F4BTQE7FNGJk3rfOhbIqYhnUICc14xdsbwC8sIFyLsKtozCe2ZS%2BBjqkARpYmDJCAYVzzNS%2B4d45Ef6jGFcHDUKc8pY8N642bL39xRcZPvvcSWdbj%2F%2FvC0QXfebVZHBTjCQmNS%2BOM3ASMDL5FUpz6dCKE5SWbW542qEg3c2RO3w68UTIz3cU0xZD8Lkz4rhar8dHZuhrEcgtyZY6YNIX0epFG4VCXZmhPaR4MpM8O2jk5%2FS8cI3hnJoJzBNiEG7feztHXWlOPZBLhQvAoY9X&X-Amz-Signature=01e23c64568e69a4850ca8a1055d2ba51fd4cfaa0097cbecb18069d09fda06af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5574K4D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtw5X7PMLpGC9c7Nnvidc92fCV8BocikQ9GYBua8wepwIhALdzdFRAhoPsqFXvAVgVb%2BQEvrhWY7J5hHHQn5fRahwmKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPQfdUCBMAg1z2vB0q3AM3FGHe6UNVAoUTLxBzw2RGDGwzUvIbO8OW%2FV9I%2FmmqyNE%2FMpes4AMIkdlFW%2FgNYOceO0gBjhBDM6s9PGd7kXzFmptHAcAMSMkqnPBhUi4A%2FxLzi0gunKVAS0Vf9t7mpRIVMWtTJIoh9%2FYG3%2BWsB4SFTVdhv6nSWoUfBHAOXa3lqc13yXGi%2BzJe0ykDQ8SsK2eEXu0wcCGmRVuvYeBnCl0nfDDr1wSbmzdl2XAjlW50kHWWaGUfi6iQ35svXnwhHHhxFicQxry7GtcUYwQEQA%2Fxq93LE7OWEf1jRdureyrkap%2BqHNb9jX42AmEC1%2Bd6Z1czV55o624UnLvSVlGyVn90ZOHlY9%2FRXomSJ0TNYMNflHeb8%2BDdoJA7oMqj6jzK1jgEB5NQWVJq9en2vDs0jvaMZp5noBSSLqnY0XhqRJo2%2FrKg3tAQVaJBqRHTWKQLPsMq1W535ML%2Fv0YMq8q7lsybp2VqXyiCiOpC2%2BfFiHqMbr099g%2FVxH4SfxnIFFq9gWojNMKHxwzqPqtRDJQcyYvq0g9b9yTRwlSyKAU9G1LU0gbrfRUzqwSAi%2FM6cbg2mCHS9dmTtvmif3V7F4BTQE7FNGJk3rfOhbIqYhnUICc14xdsbwC8sIFyLsKtozCe2ZS%2BBjqkARpYmDJCAYVzzNS%2B4d45Ef6jGFcHDUKc8pY8N642bL39xRcZPvvcSWdbj%2F%2FvC0QXfebVZHBTjCQmNS%2BOM3ASMDL5FUpz6dCKE5SWbW542qEg3c2RO3w68UTIz3cU0xZD8Lkz4rhar8dHZuhrEcgtyZY6YNIX0epFG4VCXZmhPaR4MpM8O2jk5%2FS8cI3hnJoJzBNiEG7feztHXWlOPZBLhQvAoY9X&X-Amz-Signature=743918c75ac03089dc0dba3ebbef35b45dbabd32f866262b7c67a685c2c96e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
