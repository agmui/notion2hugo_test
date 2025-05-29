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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUPQOGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZWkHm5xgzQyUVFugCYi9CV93wPDBdFZXVqivK6Nsl3AIhANlic6GUiG5O56BHPj33jRpW%2FonHy7x0eISaqb23QewRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQDB%2FXIuv1sxFdJYq3ANvP3huY5rCcmiLekGO8c%2FGqfbVwCUSR2fxVvtIcJdAvUIYvYrT9XG2NMdtxcFV11iXldhLBgrnATDAVry1XVEk3Spf6g15OkwcBfz4vtvfcUJbVIso2zsNMYx8hTyNbm5X84EA6MDnU21%2Ff2G6WuBp0kCz%2F6iul%2F5Hp91q4C1sAdW2F4VQapc2pS1lZxdhIV2Bu6G4KFeNXQJ3aDl00VOpqZAjeF9UHqdTV390IAQovLlyCBFbMCbgJv8frPBBfXsHcQOq%2FQX1%2BwZtwTztBasITYif33figSk4N7Z8LYDwdXIbm0mvvgVDVNT6t%2FEbmds2I6uNd8kSJep5SzfY3vsZxXd8pJfhi2L8jV6wOLpEsW5hvzA6Fca4tLxPSPErkkmbiFoaS8BbIYn7gUHYm330VqK%2Bh%2BWLBhsiVRHW%2BeDq0SRYhrcQkN6%2BoS5o%2B%2BDYCRtFaP3B9WwTHTOXmLkr0503%2B0x4jPlbj0PZOOpO4GYKEzmR%2FCijDJGNpbCjXA3onufyaQ3IoUqX%2FvC9y%2F0PEMcKtRFhXz1hXmlwq%2FWy6sIQ2U7q8HkJB1MBMYHQXas%2FFabh261%2FE4Wlt%2B2W6zL%2Bc0027iedpfcqbF6XO3Fpkb6L1ERHAy5j%2BGAA8KJvVjCBreDBBjqkAW%2FvnS9dBtyUnEgQiBidmLRZSJ8kMPTFEjULsjIqeeeUMyJ1oEdg82Z4D5LdFYF0DNECS%2FmAjg4cp%2FfT735IWDCH2Dlm9cjErN%2BsUFuebYd9xxiXbgWx1x7jNfVwfOy4mjbl6udWEdf7aXw%2FN8DMX%2B%2BimDX2nXg8781NuM38UmWgtOXuKMJl6bovMA50r6kBaaZimLDuA4%2Bsz1vNWJNeAPK0sp5b&X-Amz-Signature=5f6bd0a158ba6fdc6a1ca0bdd6262cc3e970475489ff5162ca5ad7300acefeb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUPQOGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZWkHm5xgzQyUVFugCYi9CV93wPDBdFZXVqivK6Nsl3AIhANlic6GUiG5O56BHPj33jRpW%2FonHy7x0eISaqb23QewRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQDB%2FXIuv1sxFdJYq3ANvP3huY5rCcmiLekGO8c%2FGqfbVwCUSR2fxVvtIcJdAvUIYvYrT9XG2NMdtxcFV11iXldhLBgrnATDAVry1XVEk3Spf6g15OkwcBfz4vtvfcUJbVIso2zsNMYx8hTyNbm5X84EA6MDnU21%2Ff2G6WuBp0kCz%2F6iul%2F5Hp91q4C1sAdW2F4VQapc2pS1lZxdhIV2Bu6G4KFeNXQJ3aDl00VOpqZAjeF9UHqdTV390IAQovLlyCBFbMCbgJv8frPBBfXsHcQOq%2FQX1%2BwZtwTztBasITYif33figSk4N7Z8LYDwdXIbm0mvvgVDVNT6t%2FEbmds2I6uNd8kSJep5SzfY3vsZxXd8pJfhi2L8jV6wOLpEsW5hvzA6Fca4tLxPSPErkkmbiFoaS8BbIYn7gUHYm330VqK%2Bh%2BWLBhsiVRHW%2BeDq0SRYhrcQkN6%2BoS5o%2B%2BDYCRtFaP3B9WwTHTOXmLkr0503%2B0x4jPlbj0PZOOpO4GYKEzmR%2FCijDJGNpbCjXA3onufyaQ3IoUqX%2FvC9y%2F0PEMcKtRFhXz1hXmlwq%2FWy6sIQ2U7q8HkJB1MBMYHQXas%2FFabh261%2FE4Wlt%2B2W6zL%2Bc0027iedpfcqbF6XO3Fpkb6L1ERHAy5j%2BGAA8KJvVjCBreDBBjqkAW%2FvnS9dBtyUnEgQiBidmLRZSJ8kMPTFEjULsjIqeeeUMyJ1oEdg82Z4D5LdFYF0DNECS%2FmAjg4cp%2FfT735IWDCH2Dlm9cjErN%2BsUFuebYd9xxiXbgWx1x7jNfVwfOy4mjbl6udWEdf7aXw%2FN8DMX%2B%2BimDX2nXg8781NuM38UmWgtOXuKMJl6bovMA50r6kBaaZimLDuA4%2Bsz1vNWJNeAPK0sp5b&X-Amz-Signature=953a9d5d8d13f0313a45c364306e2dcdc27c68c0ee9fe8761d3138d1da2b9a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUPQOGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZWkHm5xgzQyUVFugCYi9CV93wPDBdFZXVqivK6Nsl3AIhANlic6GUiG5O56BHPj33jRpW%2FonHy7x0eISaqb23QewRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQDB%2FXIuv1sxFdJYq3ANvP3huY5rCcmiLekGO8c%2FGqfbVwCUSR2fxVvtIcJdAvUIYvYrT9XG2NMdtxcFV11iXldhLBgrnATDAVry1XVEk3Spf6g15OkwcBfz4vtvfcUJbVIso2zsNMYx8hTyNbm5X84EA6MDnU21%2Ff2G6WuBp0kCz%2F6iul%2F5Hp91q4C1sAdW2F4VQapc2pS1lZxdhIV2Bu6G4KFeNXQJ3aDl00VOpqZAjeF9UHqdTV390IAQovLlyCBFbMCbgJv8frPBBfXsHcQOq%2FQX1%2BwZtwTztBasITYif33figSk4N7Z8LYDwdXIbm0mvvgVDVNT6t%2FEbmds2I6uNd8kSJep5SzfY3vsZxXd8pJfhi2L8jV6wOLpEsW5hvzA6Fca4tLxPSPErkkmbiFoaS8BbIYn7gUHYm330VqK%2Bh%2BWLBhsiVRHW%2BeDq0SRYhrcQkN6%2BoS5o%2B%2BDYCRtFaP3B9WwTHTOXmLkr0503%2B0x4jPlbj0PZOOpO4GYKEzmR%2FCijDJGNpbCjXA3onufyaQ3IoUqX%2FvC9y%2F0PEMcKtRFhXz1hXmlwq%2FWy6sIQ2U7q8HkJB1MBMYHQXas%2FFabh261%2FE4Wlt%2B2W6zL%2Bc0027iedpfcqbF6XO3Fpkb6L1ERHAy5j%2BGAA8KJvVjCBreDBBjqkAW%2FvnS9dBtyUnEgQiBidmLRZSJ8kMPTFEjULsjIqeeeUMyJ1oEdg82Z4D5LdFYF0DNECS%2FmAjg4cp%2FfT735IWDCH2Dlm9cjErN%2BsUFuebYd9xxiXbgWx1x7jNfVwfOy4mjbl6udWEdf7aXw%2FN8DMX%2B%2BimDX2nXg8781NuM38UmWgtOXuKMJl6bovMA50r6kBaaZimLDuA4%2Bsz1vNWJNeAPK0sp5b&X-Amz-Signature=8349b5da8637540cb7e479f646750e85bdb7616ff1a6358281d484021879aeea&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUPQOGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZWkHm5xgzQyUVFugCYi9CV93wPDBdFZXVqivK6Nsl3AIhANlic6GUiG5O56BHPj33jRpW%2FonHy7x0eISaqb23QewRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQDB%2FXIuv1sxFdJYq3ANvP3huY5rCcmiLekGO8c%2FGqfbVwCUSR2fxVvtIcJdAvUIYvYrT9XG2NMdtxcFV11iXldhLBgrnATDAVry1XVEk3Spf6g15OkwcBfz4vtvfcUJbVIso2zsNMYx8hTyNbm5X84EA6MDnU21%2Ff2G6WuBp0kCz%2F6iul%2F5Hp91q4C1sAdW2F4VQapc2pS1lZxdhIV2Bu6G4KFeNXQJ3aDl00VOpqZAjeF9UHqdTV390IAQovLlyCBFbMCbgJv8frPBBfXsHcQOq%2FQX1%2BwZtwTztBasITYif33figSk4N7Z8LYDwdXIbm0mvvgVDVNT6t%2FEbmds2I6uNd8kSJep5SzfY3vsZxXd8pJfhi2L8jV6wOLpEsW5hvzA6Fca4tLxPSPErkkmbiFoaS8BbIYn7gUHYm330VqK%2Bh%2BWLBhsiVRHW%2BeDq0SRYhrcQkN6%2BoS5o%2B%2BDYCRtFaP3B9WwTHTOXmLkr0503%2B0x4jPlbj0PZOOpO4GYKEzmR%2FCijDJGNpbCjXA3onufyaQ3IoUqX%2FvC9y%2F0PEMcKtRFhXz1hXmlwq%2FWy6sIQ2U7q8HkJB1MBMYHQXas%2FFabh261%2FE4Wlt%2B2W6zL%2Bc0027iedpfcqbF6XO3Fpkb6L1ERHAy5j%2BGAA8KJvVjCBreDBBjqkAW%2FvnS9dBtyUnEgQiBidmLRZSJ8kMPTFEjULsjIqeeeUMyJ1oEdg82Z4D5LdFYF0DNECS%2FmAjg4cp%2FfT735IWDCH2Dlm9cjErN%2BsUFuebYd9xxiXbgWx1x7jNfVwfOy4mjbl6udWEdf7aXw%2FN8DMX%2B%2BimDX2nXg8781NuM38UmWgtOXuKMJl6bovMA50r6kBaaZimLDuA4%2Bsz1vNWJNeAPK0sp5b&X-Amz-Signature=713429ca3355890216b630640485467abcdf06e22f5fc590d2798da79983151d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUPQOGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZWkHm5xgzQyUVFugCYi9CV93wPDBdFZXVqivK6Nsl3AIhANlic6GUiG5O56BHPj33jRpW%2FonHy7x0eISaqb23QewRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQDB%2FXIuv1sxFdJYq3ANvP3huY5rCcmiLekGO8c%2FGqfbVwCUSR2fxVvtIcJdAvUIYvYrT9XG2NMdtxcFV11iXldhLBgrnATDAVry1XVEk3Spf6g15OkwcBfz4vtvfcUJbVIso2zsNMYx8hTyNbm5X84EA6MDnU21%2Ff2G6WuBp0kCz%2F6iul%2F5Hp91q4C1sAdW2F4VQapc2pS1lZxdhIV2Bu6G4KFeNXQJ3aDl00VOpqZAjeF9UHqdTV390IAQovLlyCBFbMCbgJv8frPBBfXsHcQOq%2FQX1%2BwZtwTztBasITYif33figSk4N7Z8LYDwdXIbm0mvvgVDVNT6t%2FEbmds2I6uNd8kSJep5SzfY3vsZxXd8pJfhi2L8jV6wOLpEsW5hvzA6Fca4tLxPSPErkkmbiFoaS8BbIYn7gUHYm330VqK%2Bh%2BWLBhsiVRHW%2BeDq0SRYhrcQkN6%2BoS5o%2B%2BDYCRtFaP3B9WwTHTOXmLkr0503%2B0x4jPlbj0PZOOpO4GYKEzmR%2FCijDJGNpbCjXA3onufyaQ3IoUqX%2FvC9y%2F0PEMcKtRFhXz1hXmlwq%2FWy6sIQ2U7q8HkJB1MBMYHQXas%2FFabh261%2FE4Wlt%2B2W6zL%2Bc0027iedpfcqbF6XO3Fpkb6L1ERHAy5j%2BGAA8KJvVjCBreDBBjqkAW%2FvnS9dBtyUnEgQiBidmLRZSJ8kMPTFEjULsjIqeeeUMyJ1oEdg82Z4D5LdFYF0DNECS%2FmAjg4cp%2FfT735IWDCH2Dlm9cjErN%2BsUFuebYd9xxiXbgWx1x7jNfVwfOy4mjbl6udWEdf7aXw%2FN8DMX%2B%2BimDX2nXg8781NuM38UmWgtOXuKMJl6bovMA50r6kBaaZimLDuA4%2Bsz1vNWJNeAPK0sp5b&X-Amz-Signature=d4f28f5a0b99671d8f3e04fecb12a2ea1877995578684d87e3e205ef55b1ea1b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUPQOGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZWkHm5xgzQyUVFugCYi9CV93wPDBdFZXVqivK6Nsl3AIhANlic6GUiG5O56BHPj33jRpW%2FonHy7x0eISaqb23QewRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQDB%2FXIuv1sxFdJYq3ANvP3huY5rCcmiLekGO8c%2FGqfbVwCUSR2fxVvtIcJdAvUIYvYrT9XG2NMdtxcFV11iXldhLBgrnATDAVry1XVEk3Spf6g15OkwcBfz4vtvfcUJbVIso2zsNMYx8hTyNbm5X84EA6MDnU21%2Ff2G6WuBp0kCz%2F6iul%2F5Hp91q4C1sAdW2F4VQapc2pS1lZxdhIV2Bu6G4KFeNXQJ3aDl00VOpqZAjeF9UHqdTV390IAQovLlyCBFbMCbgJv8frPBBfXsHcQOq%2FQX1%2BwZtwTztBasITYif33figSk4N7Z8LYDwdXIbm0mvvgVDVNT6t%2FEbmds2I6uNd8kSJep5SzfY3vsZxXd8pJfhi2L8jV6wOLpEsW5hvzA6Fca4tLxPSPErkkmbiFoaS8BbIYn7gUHYm330VqK%2Bh%2BWLBhsiVRHW%2BeDq0SRYhrcQkN6%2BoS5o%2B%2BDYCRtFaP3B9WwTHTOXmLkr0503%2B0x4jPlbj0PZOOpO4GYKEzmR%2FCijDJGNpbCjXA3onufyaQ3IoUqX%2FvC9y%2F0PEMcKtRFhXz1hXmlwq%2FWy6sIQ2U7q8HkJB1MBMYHQXas%2FFabh261%2FE4Wlt%2B2W6zL%2Bc0027iedpfcqbF6XO3Fpkb6L1ERHAy5j%2BGAA8KJvVjCBreDBBjqkAW%2FvnS9dBtyUnEgQiBidmLRZSJ8kMPTFEjULsjIqeeeUMyJ1oEdg82Z4D5LdFYF0DNECS%2FmAjg4cp%2FfT735IWDCH2Dlm9cjErN%2BsUFuebYd9xxiXbgWx1x7jNfVwfOy4mjbl6udWEdf7aXw%2FN8DMX%2B%2BimDX2nXg8781NuM38UmWgtOXuKMJl6bovMA50r6kBaaZimLDuA4%2Bsz1vNWJNeAPK0sp5b&X-Amz-Signature=bbe0fba9bd34f64945ea72271bb36e24684db69e4901d98a1bed45d1a1e153e9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUPQOGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZWkHm5xgzQyUVFugCYi9CV93wPDBdFZXVqivK6Nsl3AIhANlic6GUiG5O56BHPj33jRpW%2FonHy7x0eISaqb23QewRKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQDB%2FXIuv1sxFdJYq3ANvP3huY5rCcmiLekGO8c%2FGqfbVwCUSR2fxVvtIcJdAvUIYvYrT9XG2NMdtxcFV11iXldhLBgrnATDAVry1XVEk3Spf6g15OkwcBfz4vtvfcUJbVIso2zsNMYx8hTyNbm5X84EA6MDnU21%2Ff2G6WuBp0kCz%2F6iul%2F5Hp91q4C1sAdW2F4VQapc2pS1lZxdhIV2Bu6G4KFeNXQJ3aDl00VOpqZAjeF9UHqdTV390IAQovLlyCBFbMCbgJv8frPBBfXsHcQOq%2FQX1%2BwZtwTztBasITYif33figSk4N7Z8LYDwdXIbm0mvvgVDVNT6t%2FEbmds2I6uNd8kSJep5SzfY3vsZxXd8pJfhi2L8jV6wOLpEsW5hvzA6Fca4tLxPSPErkkmbiFoaS8BbIYn7gUHYm330VqK%2Bh%2BWLBhsiVRHW%2BeDq0SRYhrcQkN6%2BoS5o%2B%2BDYCRtFaP3B9WwTHTOXmLkr0503%2B0x4jPlbj0PZOOpO4GYKEzmR%2FCijDJGNpbCjXA3onufyaQ3IoUqX%2FvC9y%2F0PEMcKtRFhXz1hXmlwq%2FWy6sIQ2U7q8HkJB1MBMYHQXas%2FFabh261%2FE4Wlt%2B2W6zL%2Bc0027iedpfcqbF6XO3Fpkb6L1ERHAy5j%2BGAA8KJvVjCBreDBBjqkAW%2FvnS9dBtyUnEgQiBidmLRZSJ8kMPTFEjULsjIqeeeUMyJ1oEdg82Z4D5LdFYF0DNECS%2FmAjg4cp%2FfT735IWDCH2Dlm9cjErN%2BsUFuebYd9xxiXbgWx1x7jNfVwfOy4mjbl6udWEdf7aXw%2FN8DMX%2B%2BimDX2nXg8781NuM38UmWgtOXuKMJl6bovMA50r6kBaaZimLDuA4%2Bsz1vNWJNeAPK0sp5b&X-Amz-Signature=a08d7a4475ea77cad6b5e16d80a83aadd3224ddbbea146f0fdb7c100a3e5c5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
