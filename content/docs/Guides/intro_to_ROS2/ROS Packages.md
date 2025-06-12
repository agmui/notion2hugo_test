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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDIUPWG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCIELs8cmOJ7FaLaDS4FIjTmWEqWes09X8PvdietJ0JrwIhAJEn%2BDQL3YR21KOe6tDdJ1jcA3F2BHdD2kX%2F71NZdb7UKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2By5dOU0Rd2P7OkeQq3AN6%2B1EnSUGU%2BlthY1LSFtE%2Bc91PqJSM8bKjeK52rC42J8oHVeNVUM4DJzFo4T9zzQv3Wjet1Obo51YEqG1xqgQu81jODmVC%2BKh0EGUYCwgSxfxgWYeR9T%2B8bBq7YBbsinIpQHjrsAHjVq3gb2ZhnZ1RjOdkHWGPZOjS1PLZMSDh992M00crdCJx5SFhRzXrqQX%2FOCl1p0KaeLuycQbP6kdChx%2BrjnbjoIEQbvPEli9gME9ACK244rb7l2BeUrDBnq30SdWiTaaIuDZuM3WTvfqikEgVm2i0icVZ7vcycFAyV8j6phcN35l3252FOjm7n1hMERJEnOGDxWlV7cYIIb%2BfsHCFVX%2FdXJAl6UCHk0vGbTVsW8aE%2FXCcMVrwJDNsdUQaH7W91Jun1lyhvO1%2F%2BczVMAzJRWCt0shQ8F94cXkUeMB4fOAZOW8gBx6k6nIQ9eEo1JWJNgMbn6aDejvDqVboFRd44CVqT0lJDA3L1yZ%2Bocf58SU1UFzMXmc5Aoi4DVxa18F37Me6UVZHgDn%2BnTxraR9T2j8kDolFnE0R0un%2Fjej8RaBN6R3Fq0ZTFqiBVz8xAbiiB3v6wprRg0dVvM6RJ5%2FTfGEZO3bnMIddHdyX8Mt97R8bYqM4eOjx9DCzsKvCBjqkAetrRwQEp71uh91xaiALZKX3frBqeuB5QHts7QvUi7ReL3Q7DOqfiO1EQMGA%2BAL2LuMCkGxAHn0%2BVSQoQZklRz8GntTVGfvfLnJeQZHoKKp19qt3ZcFWrnalJX41WFVgGvidJOymb0uqsH28aokmHz8gDR3CSWagBp1aKJ%2BuVbIEPk2tgxVFOY2H5CbyOsV45d99sCzu%2BSntD%2FnV%2BCknZqTGQ7TN&X-Amz-Signature=d0580fdc3bba51eb2266e2a28f6c936e914a6c1970ac8af6cb7e15d57524c2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDIUPWG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCIELs8cmOJ7FaLaDS4FIjTmWEqWes09X8PvdietJ0JrwIhAJEn%2BDQL3YR21KOe6tDdJ1jcA3F2BHdD2kX%2F71NZdb7UKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2By5dOU0Rd2P7OkeQq3AN6%2B1EnSUGU%2BlthY1LSFtE%2Bc91PqJSM8bKjeK52rC42J8oHVeNVUM4DJzFo4T9zzQv3Wjet1Obo51YEqG1xqgQu81jODmVC%2BKh0EGUYCwgSxfxgWYeR9T%2B8bBq7YBbsinIpQHjrsAHjVq3gb2ZhnZ1RjOdkHWGPZOjS1PLZMSDh992M00crdCJx5SFhRzXrqQX%2FOCl1p0KaeLuycQbP6kdChx%2BrjnbjoIEQbvPEli9gME9ACK244rb7l2BeUrDBnq30SdWiTaaIuDZuM3WTvfqikEgVm2i0icVZ7vcycFAyV8j6phcN35l3252FOjm7n1hMERJEnOGDxWlV7cYIIb%2BfsHCFVX%2FdXJAl6UCHk0vGbTVsW8aE%2FXCcMVrwJDNsdUQaH7W91Jun1lyhvO1%2F%2BczVMAzJRWCt0shQ8F94cXkUeMB4fOAZOW8gBx6k6nIQ9eEo1JWJNgMbn6aDejvDqVboFRd44CVqT0lJDA3L1yZ%2Bocf58SU1UFzMXmc5Aoi4DVxa18F37Me6UVZHgDn%2BnTxraR9T2j8kDolFnE0R0un%2Fjej8RaBN6R3Fq0ZTFqiBVz8xAbiiB3v6wprRg0dVvM6RJ5%2FTfGEZO3bnMIddHdyX8Mt97R8bYqM4eOjx9DCzsKvCBjqkAetrRwQEp71uh91xaiALZKX3frBqeuB5QHts7QvUi7ReL3Q7DOqfiO1EQMGA%2BAL2LuMCkGxAHn0%2BVSQoQZklRz8GntTVGfvfLnJeQZHoKKp19qt3ZcFWrnalJX41WFVgGvidJOymb0uqsH28aokmHz8gDR3CSWagBp1aKJ%2BuVbIEPk2tgxVFOY2H5CbyOsV45d99sCzu%2BSntD%2FnV%2BCknZqTGQ7TN&X-Amz-Signature=c1096d5ed8b16e2f793a54aa04ccc963af2a0d5ce7e2fd4e1c24f8b4c22a0816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDIUPWG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCIELs8cmOJ7FaLaDS4FIjTmWEqWes09X8PvdietJ0JrwIhAJEn%2BDQL3YR21KOe6tDdJ1jcA3F2BHdD2kX%2F71NZdb7UKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2By5dOU0Rd2P7OkeQq3AN6%2B1EnSUGU%2BlthY1LSFtE%2Bc91PqJSM8bKjeK52rC42J8oHVeNVUM4DJzFo4T9zzQv3Wjet1Obo51YEqG1xqgQu81jODmVC%2BKh0EGUYCwgSxfxgWYeR9T%2B8bBq7YBbsinIpQHjrsAHjVq3gb2ZhnZ1RjOdkHWGPZOjS1PLZMSDh992M00crdCJx5SFhRzXrqQX%2FOCl1p0KaeLuycQbP6kdChx%2BrjnbjoIEQbvPEli9gME9ACK244rb7l2BeUrDBnq30SdWiTaaIuDZuM3WTvfqikEgVm2i0icVZ7vcycFAyV8j6phcN35l3252FOjm7n1hMERJEnOGDxWlV7cYIIb%2BfsHCFVX%2FdXJAl6UCHk0vGbTVsW8aE%2FXCcMVrwJDNsdUQaH7W91Jun1lyhvO1%2F%2BczVMAzJRWCt0shQ8F94cXkUeMB4fOAZOW8gBx6k6nIQ9eEo1JWJNgMbn6aDejvDqVboFRd44CVqT0lJDA3L1yZ%2Bocf58SU1UFzMXmc5Aoi4DVxa18F37Me6UVZHgDn%2BnTxraR9T2j8kDolFnE0R0un%2Fjej8RaBN6R3Fq0ZTFqiBVz8xAbiiB3v6wprRg0dVvM6RJ5%2FTfGEZO3bnMIddHdyX8Mt97R8bYqM4eOjx9DCzsKvCBjqkAetrRwQEp71uh91xaiALZKX3frBqeuB5QHts7QvUi7ReL3Q7DOqfiO1EQMGA%2BAL2LuMCkGxAHn0%2BVSQoQZklRz8GntTVGfvfLnJeQZHoKKp19qt3ZcFWrnalJX41WFVgGvidJOymb0uqsH28aokmHz8gDR3CSWagBp1aKJ%2BuVbIEPk2tgxVFOY2H5CbyOsV45d99sCzu%2BSntD%2FnV%2BCknZqTGQ7TN&X-Amz-Signature=7f5104451413155017a88eb9f8878f1e041bec591751e49a1fbfd92b40a89f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDIUPWG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCIELs8cmOJ7FaLaDS4FIjTmWEqWes09X8PvdietJ0JrwIhAJEn%2BDQL3YR21KOe6tDdJ1jcA3F2BHdD2kX%2F71NZdb7UKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2By5dOU0Rd2P7OkeQq3AN6%2B1EnSUGU%2BlthY1LSFtE%2Bc91PqJSM8bKjeK52rC42J8oHVeNVUM4DJzFo4T9zzQv3Wjet1Obo51YEqG1xqgQu81jODmVC%2BKh0EGUYCwgSxfxgWYeR9T%2B8bBq7YBbsinIpQHjrsAHjVq3gb2ZhnZ1RjOdkHWGPZOjS1PLZMSDh992M00crdCJx5SFhRzXrqQX%2FOCl1p0KaeLuycQbP6kdChx%2BrjnbjoIEQbvPEli9gME9ACK244rb7l2BeUrDBnq30SdWiTaaIuDZuM3WTvfqikEgVm2i0icVZ7vcycFAyV8j6phcN35l3252FOjm7n1hMERJEnOGDxWlV7cYIIb%2BfsHCFVX%2FdXJAl6UCHk0vGbTVsW8aE%2FXCcMVrwJDNsdUQaH7W91Jun1lyhvO1%2F%2BczVMAzJRWCt0shQ8F94cXkUeMB4fOAZOW8gBx6k6nIQ9eEo1JWJNgMbn6aDejvDqVboFRd44CVqT0lJDA3L1yZ%2Bocf58SU1UFzMXmc5Aoi4DVxa18F37Me6UVZHgDn%2BnTxraR9T2j8kDolFnE0R0un%2Fjej8RaBN6R3Fq0ZTFqiBVz8xAbiiB3v6wprRg0dVvM6RJ5%2FTfGEZO3bnMIddHdyX8Mt97R8bYqM4eOjx9DCzsKvCBjqkAetrRwQEp71uh91xaiALZKX3frBqeuB5QHts7QvUi7ReL3Q7DOqfiO1EQMGA%2BAL2LuMCkGxAHn0%2BVSQoQZklRz8GntTVGfvfLnJeQZHoKKp19qt3ZcFWrnalJX41WFVgGvidJOymb0uqsH28aokmHz8gDR3CSWagBp1aKJ%2BuVbIEPk2tgxVFOY2H5CbyOsV45d99sCzu%2BSntD%2FnV%2BCknZqTGQ7TN&X-Amz-Signature=198af15f161a941ab157915732aae0579a358bb1dc33b15944729e3f4e561c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDIUPWG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCIELs8cmOJ7FaLaDS4FIjTmWEqWes09X8PvdietJ0JrwIhAJEn%2BDQL3YR21KOe6tDdJ1jcA3F2BHdD2kX%2F71NZdb7UKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2By5dOU0Rd2P7OkeQq3AN6%2B1EnSUGU%2BlthY1LSFtE%2Bc91PqJSM8bKjeK52rC42J8oHVeNVUM4DJzFo4T9zzQv3Wjet1Obo51YEqG1xqgQu81jODmVC%2BKh0EGUYCwgSxfxgWYeR9T%2B8bBq7YBbsinIpQHjrsAHjVq3gb2ZhnZ1RjOdkHWGPZOjS1PLZMSDh992M00crdCJx5SFhRzXrqQX%2FOCl1p0KaeLuycQbP6kdChx%2BrjnbjoIEQbvPEli9gME9ACK244rb7l2BeUrDBnq30SdWiTaaIuDZuM3WTvfqikEgVm2i0icVZ7vcycFAyV8j6phcN35l3252FOjm7n1hMERJEnOGDxWlV7cYIIb%2BfsHCFVX%2FdXJAl6UCHk0vGbTVsW8aE%2FXCcMVrwJDNsdUQaH7W91Jun1lyhvO1%2F%2BczVMAzJRWCt0shQ8F94cXkUeMB4fOAZOW8gBx6k6nIQ9eEo1JWJNgMbn6aDejvDqVboFRd44CVqT0lJDA3L1yZ%2Bocf58SU1UFzMXmc5Aoi4DVxa18F37Me6UVZHgDn%2BnTxraR9T2j8kDolFnE0R0un%2Fjej8RaBN6R3Fq0ZTFqiBVz8xAbiiB3v6wprRg0dVvM6RJ5%2FTfGEZO3bnMIddHdyX8Mt97R8bYqM4eOjx9DCzsKvCBjqkAetrRwQEp71uh91xaiALZKX3frBqeuB5QHts7QvUi7ReL3Q7DOqfiO1EQMGA%2BAL2LuMCkGxAHn0%2BVSQoQZklRz8GntTVGfvfLnJeQZHoKKp19qt3ZcFWrnalJX41WFVgGvidJOymb0uqsH28aokmHz8gDR3CSWagBp1aKJ%2BuVbIEPk2tgxVFOY2H5CbyOsV45d99sCzu%2BSntD%2FnV%2BCknZqTGQ7TN&X-Amz-Signature=ae2819b2527562b54b9aee9db467e5c4bff15467b02775c245f0eae37d4d4653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDIUPWG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCIELs8cmOJ7FaLaDS4FIjTmWEqWes09X8PvdietJ0JrwIhAJEn%2BDQL3YR21KOe6tDdJ1jcA3F2BHdD2kX%2F71NZdb7UKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2By5dOU0Rd2P7OkeQq3AN6%2B1EnSUGU%2BlthY1LSFtE%2Bc91PqJSM8bKjeK52rC42J8oHVeNVUM4DJzFo4T9zzQv3Wjet1Obo51YEqG1xqgQu81jODmVC%2BKh0EGUYCwgSxfxgWYeR9T%2B8bBq7YBbsinIpQHjrsAHjVq3gb2ZhnZ1RjOdkHWGPZOjS1PLZMSDh992M00crdCJx5SFhRzXrqQX%2FOCl1p0KaeLuycQbP6kdChx%2BrjnbjoIEQbvPEli9gME9ACK244rb7l2BeUrDBnq30SdWiTaaIuDZuM3WTvfqikEgVm2i0icVZ7vcycFAyV8j6phcN35l3252FOjm7n1hMERJEnOGDxWlV7cYIIb%2BfsHCFVX%2FdXJAl6UCHk0vGbTVsW8aE%2FXCcMVrwJDNsdUQaH7W91Jun1lyhvO1%2F%2BczVMAzJRWCt0shQ8F94cXkUeMB4fOAZOW8gBx6k6nIQ9eEo1JWJNgMbn6aDejvDqVboFRd44CVqT0lJDA3L1yZ%2Bocf58SU1UFzMXmc5Aoi4DVxa18F37Me6UVZHgDn%2BnTxraR9T2j8kDolFnE0R0un%2Fjej8RaBN6R3Fq0ZTFqiBVz8xAbiiB3v6wprRg0dVvM6RJ5%2FTfGEZO3bnMIddHdyX8Mt97R8bYqM4eOjx9DCzsKvCBjqkAetrRwQEp71uh91xaiALZKX3frBqeuB5QHts7QvUi7ReL3Q7DOqfiO1EQMGA%2BAL2LuMCkGxAHn0%2BVSQoQZklRz8GntTVGfvfLnJeQZHoKKp19qt3ZcFWrnalJX41WFVgGvidJOymb0uqsH28aokmHz8gDR3CSWagBp1aKJ%2BuVbIEPk2tgxVFOY2H5CbyOsV45d99sCzu%2BSntD%2FnV%2BCknZqTGQ7TN&X-Amz-Signature=dd6f8829a79f7bfe6bb084750717be91814706ee1b455bb8713f301359d02352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PDIUPWG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCIELs8cmOJ7FaLaDS4FIjTmWEqWes09X8PvdietJ0JrwIhAJEn%2BDQL3YR21KOe6tDdJ1jcA3F2BHdD2kX%2F71NZdb7UKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2By5dOU0Rd2P7OkeQq3AN6%2B1EnSUGU%2BlthY1LSFtE%2Bc91PqJSM8bKjeK52rC42J8oHVeNVUM4DJzFo4T9zzQv3Wjet1Obo51YEqG1xqgQu81jODmVC%2BKh0EGUYCwgSxfxgWYeR9T%2B8bBq7YBbsinIpQHjrsAHjVq3gb2ZhnZ1RjOdkHWGPZOjS1PLZMSDh992M00crdCJx5SFhRzXrqQX%2FOCl1p0KaeLuycQbP6kdChx%2BrjnbjoIEQbvPEli9gME9ACK244rb7l2BeUrDBnq30SdWiTaaIuDZuM3WTvfqikEgVm2i0icVZ7vcycFAyV8j6phcN35l3252FOjm7n1hMERJEnOGDxWlV7cYIIb%2BfsHCFVX%2FdXJAl6UCHk0vGbTVsW8aE%2FXCcMVrwJDNsdUQaH7W91Jun1lyhvO1%2F%2BczVMAzJRWCt0shQ8F94cXkUeMB4fOAZOW8gBx6k6nIQ9eEo1JWJNgMbn6aDejvDqVboFRd44CVqT0lJDA3L1yZ%2Bocf58SU1UFzMXmc5Aoi4DVxa18F37Me6UVZHgDn%2BnTxraR9T2j8kDolFnE0R0un%2Fjej8RaBN6R3Fq0ZTFqiBVz8xAbiiB3v6wprRg0dVvM6RJ5%2FTfGEZO3bnMIddHdyX8Mt97R8bYqM4eOjx9DCzsKvCBjqkAetrRwQEp71uh91xaiALZKX3frBqeuB5QHts7QvUi7ReL3Q7DOqfiO1EQMGA%2BAL2LuMCkGxAHn0%2BVSQoQZklRz8GntTVGfvfLnJeQZHoKKp19qt3ZcFWrnalJX41WFVgGvidJOymb0uqsH28aokmHz8gDR3CSWagBp1aKJ%2BuVbIEPk2tgxVFOY2H5CbyOsV45d99sCzu%2BSntD%2FnV%2BCknZqTGQ7TN&X-Amz-Signature=384e00ad2805b6c66deb19b9a9fc6dbfde4dd1fa91549686581a5c74b3884ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
