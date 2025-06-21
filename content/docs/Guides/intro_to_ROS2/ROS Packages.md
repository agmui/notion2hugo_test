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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEL4MH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY83594eMNs9L5DIlpGsKsYsd3ct3zvzQEQGNMZzYA6AiAaB3cW%2Fw%2B4qlSTtB9nMz9xLhCS%2F71VR5SH2%2BkO2UMcliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFkerlQ0%2BmIQl1NmKtwDh9Hv%2BXN8zfSrdRxe5nzi7tRtDs4DzuzzTJRee0UBoytJfSxNT7oZZobgSaB8YXFLzsawRokFbOzKew6ipRm0BCzf4hqWp6QP%2BtyPDBb10vRix7MX643d68s6A84i0lNaer3SbGV6P2%2BjrfSQJOPTB%2FV5WFGsRnvgE%2FiQNU%2BLUfI0hpwhcOURRqhfdBp7WLsMct2wNK3KibQlZasyc6vU0pHuaFLqQv7Ql1XUPbkVx8BOecgqppFh0AZ0KSgf6hAoFtZi%2BU%2B78TX4YstAtVAEDkOs0b7evxt%2B%2FQAva%2FnOUFMXpOsn6FX3GaZhRohBRZBsgIJZkzciJENdY8i767zMkUMgjyTzJdgBNuZS%2Bq2zoOlTAPIHq5g%2BOR4%2BDRw7E00NFkqZbOLMKoy4rqZPYEUFYVlDjsqp8EfGPlcL4G7DC5vtzzzlSHyM0ktrudQFxI1UYW16Kg4b%2BMVj6FaVTV1ZgXDfxxrjwts8J3o5zdHL2Lhiar5hpTDvNZkx7x4E9Y%2BmNZ9jL%2BFEPT48sk8xl3feqIVCsdA6XFFkuilGfSBc1WTSAx31CDhKI4eeoM%2BRdYkBqpvUP7vAvjRknmvAfLGgN1oX48JA1Dxhru9YBmkL0RCFJmwXY1ohanmQC64wg5vawgY6pgGy757jswZoqqFXRbU%2FguTu3LUJGp%2BTzWzKcUGaroq1t69FVwmBmN%2B6P%2BCCbpBC%2BTUGuQLP%2F7PnLWzeOIbtYn%2FbEpxmoRVzjrAXCHMeiu6EnemCAXpCF%2BS%2Br8AVWso54oTlmIOFBw%2BnWw8Mt8s5Fp51Dkfw%2BvFKwcMumpFUH6AOfiMbSAkRbf0eLlSgI%2BujhCPyxCis31xn0asNjhGHXFtiR841%2FjNG&X-Amz-Signature=5c439765aa9fde39692fb1787b2e35939ab7949cfea25eb9dc7d308182a994cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEL4MH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY83594eMNs9L5DIlpGsKsYsd3ct3zvzQEQGNMZzYA6AiAaB3cW%2Fw%2B4qlSTtB9nMz9xLhCS%2F71VR5SH2%2BkO2UMcliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFkerlQ0%2BmIQl1NmKtwDh9Hv%2BXN8zfSrdRxe5nzi7tRtDs4DzuzzTJRee0UBoytJfSxNT7oZZobgSaB8YXFLzsawRokFbOzKew6ipRm0BCzf4hqWp6QP%2BtyPDBb10vRix7MX643d68s6A84i0lNaer3SbGV6P2%2BjrfSQJOPTB%2FV5WFGsRnvgE%2FiQNU%2BLUfI0hpwhcOURRqhfdBp7WLsMct2wNK3KibQlZasyc6vU0pHuaFLqQv7Ql1XUPbkVx8BOecgqppFh0AZ0KSgf6hAoFtZi%2BU%2B78TX4YstAtVAEDkOs0b7evxt%2B%2FQAva%2FnOUFMXpOsn6FX3GaZhRohBRZBsgIJZkzciJENdY8i767zMkUMgjyTzJdgBNuZS%2Bq2zoOlTAPIHq5g%2BOR4%2BDRw7E00NFkqZbOLMKoy4rqZPYEUFYVlDjsqp8EfGPlcL4G7DC5vtzzzlSHyM0ktrudQFxI1UYW16Kg4b%2BMVj6FaVTV1ZgXDfxxrjwts8J3o5zdHL2Lhiar5hpTDvNZkx7x4E9Y%2BmNZ9jL%2BFEPT48sk8xl3feqIVCsdA6XFFkuilGfSBc1WTSAx31CDhKI4eeoM%2BRdYkBqpvUP7vAvjRknmvAfLGgN1oX48JA1Dxhru9YBmkL0RCFJmwXY1ohanmQC64wg5vawgY6pgGy757jswZoqqFXRbU%2FguTu3LUJGp%2BTzWzKcUGaroq1t69FVwmBmN%2B6P%2BCCbpBC%2BTUGuQLP%2F7PnLWzeOIbtYn%2FbEpxmoRVzjrAXCHMeiu6EnemCAXpCF%2BS%2Br8AVWso54oTlmIOFBw%2BnWw8Mt8s5Fp51Dkfw%2BvFKwcMumpFUH6AOfiMbSAkRbf0eLlSgI%2BujhCPyxCis31xn0asNjhGHXFtiR841%2FjNG&X-Amz-Signature=bbbc417ae898768c02fffdbaa741388aea73bd818bd5ca1b00c90011c8bbee6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEL4MH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY83594eMNs9L5DIlpGsKsYsd3ct3zvzQEQGNMZzYA6AiAaB3cW%2Fw%2B4qlSTtB9nMz9xLhCS%2F71VR5SH2%2BkO2UMcliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFkerlQ0%2BmIQl1NmKtwDh9Hv%2BXN8zfSrdRxe5nzi7tRtDs4DzuzzTJRee0UBoytJfSxNT7oZZobgSaB8YXFLzsawRokFbOzKew6ipRm0BCzf4hqWp6QP%2BtyPDBb10vRix7MX643d68s6A84i0lNaer3SbGV6P2%2BjrfSQJOPTB%2FV5WFGsRnvgE%2FiQNU%2BLUfI0hpwhcOURRqhfdBp7WLsMct2wNK3KibQlZasyc6vU0pHuaFLqQv7Ql1XUPbkVx8BOecgqppFh0AZ0KSgf6hAoFtZi%2BU%2B78TX4YstAtVAEDkOs0b7evxt%2B%2FQAva%2FnOUFMXpOsn6FX3GaZhRohBRZBsgIJZkzciJENdY8i767zMkUMgjyTzJdgBNuZS%2Bq2zoOlTAPIHq5g%2BOR4%2BDRw7E00NFkqZbOLMKoy4rqZPYEUFYVlDjsqp8EfGPlcL4G7DC5vtzzzlSHyM0ktrudQFxI1UYW16Kg4b%2BMVj6FaVTV1ZgXDfxxrjwts8J3o5zdHL2Lhiar5hpTDvNZkx7x4E9Y%2BmNZ9jL%2BFEPT48sk8xl3feqIVCsdA6XFFkuilGfSBc1WTSAx31CDhKI4eeoM%2BRdYkBqpvUP7vAvjRknmvAfLGgN1oX48JA1Dxhru9YBmkL0RCFJmwXY1ohanmQC64wg5vawgY6pgGy757jswZoqqFXRbU%2FguTu3LUJGp%2BTzWzKcUGaroq1t69FVwmBmN%2B6P%2BCCbpBC%2BTUGuQLP%2F7PnLWzeOIbtYn%2FbEpxmoRVzjrAXCHMeiu6EnemCAXpCF%2BS%2Br8AVWso54oTlmIOFBw%2BnWw8Mt8s5Fp51Dkfw%2BvFKwcMumpFUH6AOfiMbSAkRbf0eLlSgI%2BujhCPyxCis31xn0asNjhGHXFtiR841%2FjNG&X-Amz-Signature=2918e9218360700d8968816517da7b9a7fb3e3c6f0fb062f5d71773f2cde1164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEL4MH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY83594eMNs9L5DIlpGsKsYsd3ct3zvzQEQGNMZzYA6AiAaB3cW%2Fw%2B4qlSTtB9nMz9xLhCS%2F71VR5SH2%2BkO2UMcliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFkerlQ0%2BmIQl1NmKtwDh9Hv%2BXN8zfSrdRxe5nzi7tRtDs4DzuzzTJRee0UBoytJfSxNT7oZZobgSaB8YXFLzsawRokFbOzKew6ipRm0BCzf4hqWp6QP%2BtyPDBb10vRix7MX643d68s6A84i0lNaer3SbGV6P2%2BjrfSQJOPTB%2FV5WFGsRnvgE%2FiQNU%2BLUfI0hpwhcOURRqhfdBp7WLsMct2wNK3KibQlZasyc6vU0pHuaFLqQv7Ql1XUPbkVx8BOecgqppFh0AZ0KSgf6hAoFtZi%2BU%2B78TX4YstAtVAEDkOs0b7evxt%2B%2FQAva%2FnOUFMXpOsn6FX3GaZhRohBRZBsgIJZkzciJENdY8i767zMkUMgjyTzJdgBNuZS%2Bq2zoOlTAPIHq5g%2BOR4%2BDRw7E00NFkqZbOLMKoy4rqZPYEUFYVlDjsqp8EfGPlcL4G7DC5vtzzzlSHyM0ktrudQFxI1UYW16Kg4b%2BMVj6FaVTV1ZgXDfxxrjwts8J3o5zdHL2Lhiar5hpTDvNZkx7x4E9Y%2BmNZ9jL%2BFEPT48sk8xl3feqIVCsdA6XFFkuilGfSBc1WTSAx31CDhKI4eeoM%2BRdYkBqpvUP7vAvjRknmvAfLGgN1oX48JA1Dxhru9YBmkL0RCFJmwXY1ohanmQC64wg5vawgY6pgGy757jswZoqqFXRbU%2FguTu3LUJGp%2BTzWzKcUGaroq1t69FVwmBmN%2B6P%2BCCbpBC%2BTUGuQLP%2F7PnLWzeOIbtYn%2FbEpxmoRVzjrAXCHMeiu6EnemCAXpCF%2BS%2Br8AVWso54oTlmIOFBw%2BnWw8Mt8s5Fp51Dkfw%2BvFKwcMumpFUH6AOfiMbSAkRbf0eLlSgI%2BujhCPyxCis31xn0asNjhGHXFtiR841%2FjNG&X-Amz-Signature=e5035b5c413514452f77cd4b8c2be4fd1fae42ec7c7f8b9e684a627abc23c6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEL4MH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY83594eMNs9L5DIlpGsKsYsd3ct3zvzQEQGNMZzYA6AiAaB3cW%2Fw%2B4qlSTtB9nMz9xLhCS%2F71VR5SH2%2BkO2UMcliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFkerlQ0%2BmIQl1NmKtwDh9Hv%2BXN8zfSrdRxe5nzi7tRtDs4DzuzzTJRee0UBoytJfSxNT7oZZobgSaB8YXFLzsawRokFbOzKew6ipRm0BCzf4hqWp6QP%2BtyPDBb10vRix7MX643d68s6A84i0lNaer3SbGV6P2%2BjrfSQJOPTB%2FV5WFGsRnvgE%2FiQNU%2BLUfI0hpwhcOURRqhfdBp7WLsMct2wNK3KibQlZasyc6vU0pHuaFLqQv7Ql1XUPbkVx8BOecgqppFh0AZ0KSgf6hAoFtZi%2BU%2B78TX4YstAtVAEDkOs0b7evxt%2B%2FQAva%2FnOUFMXpOsn6FX3GaZhRohBRZBsgIJZkzciJENdY8i767zMkUMgjyTzJdgBNuZS%2Bq2zoOlTAPIHq5g%2BOR4%2BDRw7E00NFkqZbOLMKoy4rqZPYEUFYVlDjsqp8EfGPlcL4G7DC5vtzzzlSHyM0ktrudQFxI1UYW16Kg4b%2BMVj6FaVTV1ZgXDfxxrjwts8J3o5zdHL2Lhiar5hpTDvNZkx7x4E9Y%2BmNZ9jL%2BFEPT48sk8xl3feqIVCsdA6XFFkuilGfSBc1WTSAx31CDhKI4eeoM%2BRdYkBqpvUP7vAvjRknmvAfLGgN1oX48JA1Dxhru9YBmkL0RCFJmwXY1ohanmQC64wg5vawgY6pgGy757jswZoqqFXRbU%2FguTu3LUJGp%2BTzWzKcUGaroq1t69FVwmBmN%2B6P%2BCCbpBC%2BTUGuQLP%2F7PnLWzeOIbtYn%2FbEpxmoRVzjrAXCHMeiu6EnemCAXpCF%2BS%2Br8AVWso54oTlmIOFBw%2BnWw8Mt8s5Fp51Dkfw%2BvFKwcMumpFUH6AOfiMbSAkRbf0eLlSgI%2BujhCPyxCis31xn0asNjhGHXFtiR841%2FjNG&X-Amz-Signature=05cdca93d2a110cfb437208474b1a4455b6b4c4fdd96087089d2ac74f04fb13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEL4MH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY83594eMNs9L5DIlpGsKsYsd3ct3zvzQEQGNMZzYA6AiAaB3cW%2Fw%2B4qlSTtB9nMz9xLhCS%2F71VR5SH2%2BkO2UMcliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFkerlQ0%2BmIQl1NmKtwDh9Hv%2BXN8zfSrdRxe5nzi7tRtDs4DzuzzTJRee0UBoytJfSxNT7oZZobgSaB8YXFLzsawRokFbOzKew6ipRm0BCzf4hqWp6QP%2BtyPDBb10vRix7MX643d68s6A84i0lNaer3SbGV6P2%2BjrfSQJOPTB%2FV5WFGsRnvgE%2FiQNU%2BLUfI0hpwhcOURRqhfdBp7WLsMct2wNK3KibQlZasyc6vU0pHuaFLqQv7Ql1XUPbkVx8BOecgqppFh0AZ0KSgf6hAoFtZi%2BU%2B78TX4YstAtVAEDkOs0b7evxt%2B%2FQAva%2FnOUFMXpOsn6FX3GaZhRohBRZBsgIJZkzciJENdY8i767zMkUMgjyTzJdgBNuZS%2Bq2zoOlTAPIHq5g%2BOR4%2BDRw7E00NFkqZbOLMKoy4rqZPYEUFYVlDjsqp8EfGPlcL4G7DC5vtzzzlSHyM0ktrudQFxI1UYW16Kg4b%2BMVj6FaVTV1ZgXDfxxrjwts8J3o5zdHL2Lhiar5hpTDvNZkx7x4E9Y%2BmNZ9jL%2BFEPT48sk8xl3feqIVCsdA6XFFkuilGfSBc1WTSAx31CDhKI4eeoM%2BRdYkBqpvUP7vAvjRknmvAfLGgN1oX48JA1Dxhru9YBmkL0RCFJmwXY1ohanmQC64wg5vawgY6pgGy757jswZoqqFXRbU%2FguTu3LUJGp%2BTzWzKcUGaroq1t69FVwmBmN%2B6P%2BCCbpBC%2BTUGuQLP%2F7PnLWzeOIbtYn%2FbEpxmoRVzjrAXCHMeiu6EnemCAXpCF%2BS%2Br8AVWso54oTlmIOFBw%2BnWw8Mt8s5Fp51Dkfw%2BvFKwcMumpFUH6AOfiMbSAkRbf0eLlSgI%2BujhCPyxCis31xn0asNjhGHXFtiR841%2FjNG&X-Amz-Signature=2f32cab97a7bc56971b06e93535bcdf499246a6acfc0eabcceb39f07f889ac73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEL4MH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY83594eMNs9L5DIlpGsKsYsd3ct3zvzQEQGNMZzYA6AiAaB3cW%2Fw%2B4qlSTtB9nMz9xLhCS%2F71VR5SH2%2BkO2UMcliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFkerlQ0%2BmIQl1NmKtwDh9Hv%2BXN8zfSrdRxe5nzi7tRtDs4DzuzzTJRee0UBoytJfSxNT7oZZobgSaB8YXFLzsawRokFbOzKew6ipRm0BCzf4hqWp6QP%2BtyPDBb10vRix7MX643d68s6A84i0lNaer3SbGV6P2%2BjrfSQJOPTB%2FV5WFGsRnvgE%2FiQNU%2BLUfI0hpwhcOURRqhfdBp7WLsMct2wNK3KibQlZasyc6vU0pHuaFLqQv7Ql1XUPbkVx8BOecgqppFh0AZ0KSgf6hAoFtZi%2BU%2B78TX4YstAtVAEDkOs0b7evxt%2B%2FQAva%2FnOUFMXpOsn6FX3GaZhRohBRZBsgIJZkzciJENdY8i767zMkUMgjyTzJdgBNuZS%2Bq2zoOlTAPIHq5g%2BOR4%2BDRw7E00NFkqZbOLMKoy4rqZPYEUFYVlDjsqp8EfGPlcL4G7DC5vtzzzlSHyM0ktrudQFxI1UYW16Kg4b%2BMVj6FaVTV1ZgXDfxxrjwts8J3o5zdHL2Lhiar5hpTDvNZkx7x4E9Y%2BmNZ9jL%2BFEPT48sk8xl3feqIVCsdA6XFFkuilGfSBc1WTSAx31CDhKI4eeoM%2BRdYkBqpvUP7vAvjRknmvAfLGgN1oX48JA1Dxhru9YBmkL0RCFJmwXY1ohanmQC64wg5vawgY6pgGy757jswZoqqFXRbU%2FguTu3LUJGp%2BTzWzKcUGaroq1t69FVwmBmN%2B6P%2BCCbpBC%2BTUGuQLP%2F7PnLWzeOIbtYn%2FbEpxmoRVzjrAXCHMeiu6EnemCAXpCF%2BS%2Br8AVWso54oTlmIOFBw%2BnWw8Mt8s5Fp51Dkfw%2BvFKwcMumpFUH6AOfiMbSAkRbf0eLlSgI%2BujhCPyxCis31xn0asNjhGHXFtiR841%2FjNG&X-Amz-Signature=fc313a9eefd5e56da08dd1a5a48bdb0c5805a4589953969675e98f6e671027d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
