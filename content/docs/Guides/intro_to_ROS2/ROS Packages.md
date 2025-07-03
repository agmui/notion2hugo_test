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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJZ2ADD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC0kjdTLMdGnI31FEbMz73w63E8R9pTaxTeJMkT1EWX0wIhAM%2FXfVICArNhMEsZTf4y%2BVD%2FrmHI3zslD33wcdFPEh4%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igz8fb1Q2%2Bbtfao0VRMq3ANfd%2FkOKJ9PouuK4bwFB8FCyBnDxZB1MoB5Md8G0CNy1swUkuetuyohds7SmGkBBS7JzW8YgjE8OJnAsJtkb%2BGj%2FNvsjSD76NuqOWir95tGivrQRONyhXipUiaiQQQsMtU1i%2FSGiHus89hCgwZ3NfLcxEHK5Gf0Dd%2FhRqYYRJSlst8vWj6DTqIhlK2lc7e5ph4TX0N9c5oRcV63LzLEqrU488qPSWLeqdsbgmbYG%2BaSq8GxDrdQlJTECY9R6yh%2F6iztnrr8cLwX05OgzMyCQACPN7XExEqwX3dPO2OB4DjPnCR7GqPGcdvktY%2F9mpyYS7PcdveZrJ9jCw5xb9Irl%2FMBFrYe3yM0JVfY9sQ6QWNMonKdIpKTFimAcCp0%2B%2F7lhueFyHuFoGJCrsJvIVVs4pHnK0v1b8D13kCW0CuOGzn4GHah1NkZT8%2Fzx%2BDynAIJo3MECIJpHXHifMtYqSXV96VT7wNcr4LQnTzl15L1agxHUc0fV0gTXUB0iSJ5nJCEWcpPIwVoOg9WFLAeoKGuogJkLiMD6S%2F4QYR3y%2BQVWdWjV51i3UFnd%2F6HJ9i8Y52ieixWYwo%2F%2BOPULwNEsq0Sf%2BlmyvdVb3%2BkOUCDzIQ2eh4vvJVA9iRExtW47pgFYjDRu5vDBjqkARL4ZmIkDwzcfN4dAyUOwGYTNMpITUz3NMFcDLZErVHVYL9oHL3OohDdUYxhgBecRGaOxTxeh%2Fb9GH3RzLNRZaBIIVMowoXhwVa9DeZ8dByhWboatnQYa7UbrARANGwKvYoC3Rwe8dkHB8pkfuToITSWj6cUPD7RNxX3ImQRUgXlolcw6El8CLQoGXJoiT99kYPaiCEB2jDjAg3sYyuP5ruOvN2g&X-Amz-Signature=61e266da35916799dcb23ae71ca203befca2342ffbb1ee0c280ae3c83ee9e38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJZ2ADD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC0kjdTLMdGnI31FEbMz73w63E8R9pTaxTeJMkT1EWX0wIhAM%2FXfVICArNhMEsZTf4y%2BVD%2FrmHI3zslD33wcdFPEh4%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igz8fb1Q2%2Bbtfao0VRMq3ANfd%2FkOKJ9PouuK4bwFB8FCyBnDxZB1MoB5Md8G0CNy1swUkuetuyohds7SmGkBBS7JzW8YgjE8OJnAsJtkb%2BGj%2FNvsjSD76NuqOWir95tGivrQRONyhXipUiaiQQQsMtU1i%2FSGiHus89hCgwZ3NfLcxEHK5Gf0Dd%2FhRqYYRJSlst8vWj6DTqIhlK2lc7e5ph4TX0N9c5oRcV63LzLEqrU488qPSWLeqdsbgmbYG%2BaSq8GxDrdQlJTECY9R6yh%2F6iztnrr8cLwX05OgzMyCQACPN7XExEqwX3dPO2OB4DjPnCR7GqPGcdvktY%2F9mpyYS7PcdveZrJ9jCw5xb9Irl%2FMBFrYe3yM0JVfY9sQ6QWNMonKdIpKTFimAcCp0%2B%2F7lhueFyHuFoGJCrsJvIVVs4pHnK0v1b8D13kCW0CuOGzn4GHah1NkZT8%2Fzx%2BDynAIJo3MECIJpHXHifMtYqSXV96VT7wNcr4LQnTzl15L1agxHUc0fV0gTXUB0iSJ5nJCEWcpPIwVoOg9WFLAeoKGuogJkLiMD6S%2F4QYR3y%2BQVWdWjV51i3UFnd%2F6HJ9i8Y52ieixWYwo%2F%2BOPULwNEsq0Sf%2BlmyvdVb3%2BkOUCDzIQ2eh4vvJVA9iRExtW47pgFYjDRu5vDBjqkARL4ZmIkDwzcfN4dAyUOwGYTNMpITUz3NMFcDLZErVHVYL9oHL3OohDdUYxhgBecRGaOxTxeh%2Fb9GH3RzLNRZaBIIVMowoXhwVa9DeZ8dByhWboatnQYa7UbrARANGwKvYoC3Rwe8dkHB8pkfuToITSWj6cUPD7RNxX3ImQRUgXlolcw6El8CLQoGXJoiT99kYPaiCEB2jDjAg3sYyuP5ruOvN2g&X-Amz-Signature=0fe3d3a2872440dbf48b6901e41760a9eb34b81bf219d90bb5d0dbed869f4635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJZ2ADD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC0kjdTLMdGnI31FEbMz73w63E8R9pTaxTeJMkT1EWX0wIhAM%2FXfVICArNhMEsZTf4y%2BVD%2FrmHI3zslD33wcdFPEh4%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igz8fb1Q2%2Bbtfao0VRMq3ANfd%2FkOKJ9PouuK4bwFB8FCyBnDxZB1MoB5Md8G0CNy1swUkuetuyohds7SmGkBBS7JzW8YgjE8OJnAsJtkb%2BGj%2FNvsjSD76NuqOWir95tGivrQRONyhXipUiaiQQQsMtU1i%2FSGiHus89hCgwZ3NfLcxEHK5Gf0Dd%2FhRqYYRJSlst8vWj6DTqIhlK2lc7e5ph4TX0N9c5oRcV63LzLEqrU488qPSWLeqdsbgmbYG%2BaSq8GxDrdQlJTECY9R6yh%2F6iztnrr8cLwX05OgzMyCQACPN7XExEqwX3dPO2OB4DjPnCR7GqPGcdvktY%2F9mpyYS7PcdveZrJ9jCw5xb9Irl%2FMBFrYe3yM0JVfY9sQ6QWNMonKdIpKTFimAcCp0%2B%2F7lhueFyHuFoGJCrsJvIVVs4pHnK0v1b8D13kCW0CuOGzn4GHah1NkZT8%2Fzx%2BDynAIJo3MECIJpHXHifMtYqSXV96VT7wNcr4LQnTzl15L1agxHUc0fV0gTXUB0iSJ5nJCEWcpPIwVoOg9WFLAeoKGuogJkLiMD6S%2F4QYR3y%2BQVWdWjV51i3UFnd%2F6HJ9i8Y52ieixWYwo%2F%2BOPULwNEsq0Sf%2BlmyvdVb3%2BkOUCDzIQ2eh4vvJVA9iRExtW47pgFYjDRu5vDBjqkARL4ZmIkDwzcfN4dAyUOwGYTNMpITUz3NMFcDLZErVHVYL9oHL3OohDdUYxhgBecRGaOxTxeh%2Fb9GH3RzLNRZaBIIVMowoXhwVa9DeZ8dByhWboatnQYa7UbrARANGwKvYoC3Rwe8dkHB8pkfuToITSWj6cUPD7RNxX3ImQRUgXlolcw6El8CLQoGXJoiT99kYPaiCEB2jDjAg3sYyuP5ruOvN2g&X-Amz-Signature=1f75e58d2e229bd0916e56988667192f52cb3f1e2b50b05bf19372cb4fcb5302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJZ2ADD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC0kjdTLMdGnI31FEbMz73w63E8R9pTaxTeJMkT1EWX0wIhAM%2FXfVICArNhMEsZTf4y%2BVD%2FrmHI3zslD33wcdFPEh4%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igz8fb1Q2%2Bbtfao0VRMq3ANfd%2FkOKJ9PouuK4bwFB8FCyBnDxZB1MoB5Md8G0CNy1swUkuetuyohds7SmGkBBS7JzW8YgjE8OJnAsJtkb%2BGj%2FNvsjSD76NuqOWir95tGivrQRONyhXipUiaiQQQsMtU1i%2FSGiHus89hCgwZ3NfLcxEHK5Gf0Dd%2FhRqYYRJSlst8vWj6DTqIhlK2lc7e5ph4TX0N9c5oRcV63LzLEqrU488qPSWLeqdsbgmbYG%2BaSq8GxDrdQlJTECY9R6yh%2F6iztnrr8cLwX05OgzMyCQACPN7XExEqwX3dPO2OB4DjPnCR7GqPGcdvktY%2F9mpyYS7PcdveZrJ9jCw5xb9Irl%2FMBFrYe3yM0JVfY9sQ6QWNMonKdIpKTFimAcCp0%2B%2F7lhueFyHuFoGJCrsJvIVVs4pHnK0v1b8D13kCW0CuOGzn4GHah1NkZT8%2Fzx%2BDynAIJo3MECIJpHXHifMtYqSXV96VT7wNcr4LQnTzl15L1agxHUc0fV0gTXUB0iSJ5nJCEWcpPIwVoOg9WFLAeoKGuogJkLiMD6S%2F4QYR3y%2BQVWdWjV51i3UFnd%2F6HJ9i8Y52ieixWYwo%2F%2BOPULwNEsq0Sf%2BlmyvdVb3%2BkOUCDzIQ2eh4vvJVA9iRExtW47pgFYjDRu5vDBjqkARL4ZmIkDwzcfN4dAyUOwGYTNMpITUz3NMFcDLZErVHVYL9oHL3OohDdUYxhgBecRGaOxTxeh%2Fb9GH3RzLNRZaBIIVMowoXhwVa9DeZ8dByhWboatnQYa7UbrARANGwKvYoC3Rwe8dkHB8pkfuToITSWj6cUPD7RNxX3ImQRUgXlolcw6El8CLQoGXJoiT99kYPaiCEB2jDjAg3sYyuP5ruOvN2g&X-Amz-Signature=471deb5f2cd5c378d290551fe83f1a049055ad1e59630e9768fe0f65ad825e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJZ2ADD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC0kjdTLMdGnI31FEbMz73w63E8R9pTaxTeJMkT1EWX0wIhAM%2FXfVICArNhMEsZTf4y%2BVD%2FrmHI3zslD33wcdFPEh4%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igz8fb1Q2%2Bbtfao0VRMq3ANfd%2FkOKJ9PouuK4bwFB8FCyBnDxZB1MoB5Md8G0CNy1swUkuetuyohds7SmGkBBS7JzW8YgjE8OJnAsJtkb%2BGj%2FNvsjSD76NuqOWir95tGivrQRONyhXipUiaiQQQsMtU1i%2FSGiHus89hCgwZ3NfLcxEHK5Gf0Dd%2FhRqYYRJSlst8vWj6DTqIhlK2lc7e5ph4TX0N9c5oRcV63LzLEqrU488qPSWLeqdsbgmbYG%2BaSq8GxDrdQlJTECY9R6yh%2F6iztnrr8cLwX05OgzMyCQACPN7XExEqwX3dPO2OB4DjPnCR7GqPGcdvktY%2F9mpyYS7PcdveZrJ9jCw5xb9Irl%2FMBFrYe3yM0JVfY9sQ6QWNMonKdIpKTFimAcCp0%2B%2F7lhueFyHuFoGJCrsJvIVVs4pHnK0v1b8D13kCW0CuOGzn4GHah1NkZT8%2Fzx%2BDynAIJo3MECIJpHXHifMtYqSXV96VT7wNcr4LQnTzl15L1agxHUc0fV0gTXUB0iSJ5nJCEWcpPIwVoOg9WFLAeoKGuogJkLiMD6S%2F4QYR3y%2BQVWdWjV51i3UFnd%2F6HJ9i8Y52ieixWYwo%2F%2BOPULwNEsq0Sf%2BlmyvdVb3%2BkOUCDzIQ2eh4vvJVA9iRExtW47pgFYjDRu5vDBjqkARL4ZmIkDwzcfN4dAyUOwGYTNMpITUz3NMFcDLZErVHVYL9oHL3OohDdUYxhgBecRGaOxTxeh%2Fb9GH3RzLNRZaBIIVMowoXhwVa9DeZ8dByhWboatnQYa7UbrARANGwKvYoC3Rwe8dkHB8pkfuToITSWj6cUPD7RNxX3ImQRUgXlolcw6El8CLQoGXJoiT99kYPaiCEB2jDjAg3sYyuP5ruOvN2g&X-Amz-Signature=29faf21ab209d38e63c7f0c36bdc9b6739dd3b8cdf228d4eb953616256238efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJZ2ADD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC0kjdTLMdGnI31FEbMz73w63E8R9pTaxTeJMkT1EWX0wIhAM%2FXfVICArNhMEsZTf4y%2BVD%2FrmHI3zslD33wcdFPEh4%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igz8fb1Q2%2Bbtfao0VRMq3ANfd%2FkOKJ9PouuK4bwFB8FCyBnDxZB1MoB5Md8G0CNy1swUkuetuyohds7SmGkBBS7JzW8YgjE8OJnAsJtkb%2BGj%2FNvsjSD76NuqOWir95tGivrQRONyhXipUiaiQQQsMtU1i%2FSGiHus89hCgwZ3NfLcxEHK5Gf0Dd%2FhRqYYRJSlst8vWj6DTqIhlK2lc7e5ph4TX0N9c5oRcV63LzLEqrU488qPSWLeqdsbgmbYG%2BaSq8GxDrdQlJTECY9R6yh%2F6iztnrr8cLwX05OgzMyCQACPN7XExEqwX3dPO2OB4DjPnCR7GqPGcdvktY%2F9mpyYS7PcdveZrJ9jCw5xb9Irl%2FMBFrYe3yM0JVfY9sQ6QWNMonKdIpKTFimAcCp0%2B%2F7lhueFyHuFoGJCrsJvIVVs4pHnK0v1b8D13kCW0CuOGzn4GHah1NkZT8%2Fzx%2BDynAIJo3MECIJpHXHifMtYqSXV96VT7wNcr4LQnTzl15L1agxHUc0fV0gTXUB0iSJ5nJCEWcpPIwVoOg9WFLAeoKGuogJkLiMD6S%2F4QYR3y%2BQVWdWjV51i3UFnd%2F6HJ9i8Y52ieixWYwo%2F%2BOPULwNEsq0Sf%2BlmyvdVb3%2BkOUCDzIQ2eh4vvJVA9iRExtW47pgFYjDRu5vDBjqkARL4ZmIkDwzcfN4dAyUOwGYTNMpITUz3NMFcDLZErVHVYL9oHL3OohDdUYxhgBecRGaOxTxeh%2Fb9GH3RzLNRZaBIIVMowoXhwVa9DeZ8dByhWboatnQYa7UbrARANGwKvYoC3Rwe8dkHB8pkfuToITSWj6cUPD7RNxX3ImQRUgXlolcw6El8CLQoGXJoiT99kYPaiCEB2jDjAg3sYyuP5ruOvN2g&X-Amz-Signature=40ca00834070eaaabc4c5b64f60e2fe93e613960f58e35d039843029542948b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJZ2ADD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC0kjdTLMdGnI31FEbMz73w63E8R9pTaxTeJMkT1EWX0wIhAM%2FXfVICArNhMEsZTf4y%2BVD%2FrmHI3zslD33wcdFPEh4%2BKv8DCB0QABoMNjM3NDIzMTgzODA1Igz8fb1Q2%2Bbtfao0VRMq3ANfd%2FkOKJ9PouuK4bwFB8FCyBnDxZB1MoB5Md8G0CNy1swUkuetuyohds7SmGkBBS7JzW8YgjE8OJnAsJtkb%2BGj%2FNvsjSD76NuqOWir95tGivrQRONyhXipUiaiQQQsMtU1i%2FSGiHus89hCgwZ3NfLcxEHK5Gf0Dd%2FhRqYYRJSlst8vWj6DTqIhlK2lc7e5ph4TX0N9c5oRcV63LzLEqrU488qPSWLeqdsbgmbYG%2BaSq8GxDrdQlJTECY9R6yh%2F6iztnrr8cLwX05OgzMyCQACPN7XExEqwX3dPO2OB4DjPnCR7GqPGcdvktY%2F9mpyYS7PcdveZrJ9jCw5xb9Irl%2FMBFrYe3yM0JVfY9sQ6QWNMonKdIpKTFimAcCp0%2B%2F7lhueFyHuFoGJCrsJvIVVs4pHnK0v1b8D13kCW0CuOGzn4GHah1NkZT8%2Fzx%2BDynAIJo3MECIJpHXHifMtYqSXV96VT7wNcr4LQnTzl15L1agxHUc0fV0gTXUB0iSJ5nJCEWcpPIwVoOg9WFLAeoKGuogJkLiMD6S%2F4QYR3y%2BQVWdWjV51i3UFnd%2F6HJ9i8Y52ieixWYwo%2F%2BOPULwNEsq0Sf%2BlmyvdVb3%2BkOUCDzIQ2eh4vvJVA9iRExtW47pgFYjDRu5vDBjqkARL4ZmIkDwzcfN4dAyUOwGYTNMpITUz3NMFcDLZErVHVYL9oHL3OohDdUYxhgBecRGaOxTxeh%2Fb9GH3RzLNRZaBIIVMowoXhwVa9DeZ8dByhWboatnQYa7UbrARANGwKvYoC3Rwe8dkHB8pkfuToITSWj6cUPD7RNxX3ImQRUgXlolcw6El8CLQoGXJoiT99kYPaiCEB2jDjAg3sYyuP5ruOvN2g&X-Amz-Signature=81d75e8f04f7a5056d4a3080c89c682b337e40e3b9be51f57993c9ad61ff6c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
