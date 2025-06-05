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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUVOR3Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfGp8owvUkAntQqI%2BZUv8bnxFHCD%2B1nano0%2Bss8PMsSwIhANwzVHSlnom3JjPOd904gnsU4Or05YuCjx5Vl39RNESGKv8DCEsQABoMNjM3NDIzMTgzODA1IgyEwk08o1pMc5SS85kq3APzRGbwTG7mIRyYnMe5RMeCYgqBMwI2MBfcy%2Bl0in6Gh%2F4jsrFTBbehxVZoADvfBkoNRpd7uuOUWDfADOq4a9p3CgoR6aI5%2FbLTfKY1lJfJOtvKIocT7v%2FUUh8ahrh5yK1wtSYeBdLESjOQpUEYMFPBaO4vU3Ld2TXspsYR4axdK4wh6l278q0o1m76PlFSMUyKZGd94uazqsyHc350%2BhGaHurEopf7dAzD7lcfuDRyagbuNE1C9n5zTxWW%2BRn8cpKL8zsCyxg1LKz0YsTgzmkeUC8v1IXwAzHVk5ZpGX1U%2BFIZcRAE%2Fvp1tsl3%2F3XTo3DMO5KgHLfpZEHNq2%2Fk7e6S39S8s3MPdDly1zmWpk0EnuLVF%2FJjgbWYUXg75I05DVFmYfjMwypduKx%2FL%2FlTn8WnVai1QcFk59dAlrOGvti9NVp3Wdcud%2BTPrM5eWrYhS3ZrIpIVFVJ9uBo0cAdkTviGcwE2Zsn4J9xKYFIZaD%2FTlAF44MW5guKIr352%2FQNeQIr0UoD%2F2HMDrxgflGdpoOHdWo4%2FZ3UQFON7K1aUJRm0N6oadngstCft90oU%2FSROgJOESDIwOqvNIvGW6tFaEVXrNh2ysn55bjsT2XlgX4WdVdI9uzewGXgwiBBmgjCbs4fCBjqkAajmz%2FbT9d2xAaRMVaHHEmoP2Ue9mpTpvvEj3geVzTqQyCxONN4U8S9gzXfcEb8l%2FzQ%2Bjqb3YZaBjufWF2kPrQFjEC1db2AqqgcAexr%2Fabo8RSL2GX5a210BMvsKIA1gFVtkQNUHfRK9E7z0b%2BWE4mulani7%2B4N6nsCpDXLyV%2FAyXMrzLuUqeYMa45GMXgKjotItZ2EjIwzUkiAultfmmXahsbGn&X-Amz-Signature=64c17eeebcb02f839035d0be31e19968466d96b014fbd1d0f5844b75c6960ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUVOR3Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfGp8owvUkAntQqI%2BZUv8bnxFHCD%2B1nano0%2Bss8PMsSwIhANwzVHSlnom3JjPOd904gnsU4Or05YuCjx5Vl39RNESGKv8DCEsQABoMNjM3NDIzMTgzODA1IgyEwk08o1pMc5SS85kq3APzRGbwTG7mIRyYnMe5RMeCYgqBMwI2MBfcy%2Bl0in6Gh%2F4jsrFTBbehxVZoADvfBkoNRpd7uuOUWDfADOq4a9p3CgoR6aI5%2FbLTfKY1lJfJOtvKIocT7v%2FUUh8ahrh5yK1wtSYeBdLESjOQpUEYMFPBaO4vU3Ld2TXspsYR4axdK4wh6l278q0o1m76PlFSMUyKZGd94uazqsyHc350%2BhGaHurEopf7dAzD7lcfuDRyagbuNE1C9n5zTxWW%2BRn8cpKL8zsCyxg1LKz0YsTgzmkeUC8v1IXwAzHVk5ZpGX1U%2BFIZcRAE%2Fvp1tsl3%2F3XTo3DMO5KgHLfpZEHNq2%2Fk7e6S39S8s3MPdDly1zmWpk0EnuLVF%2FJjgbWYUXg75I05DVFmYfjMwypduKx%2FL%2FlTn8WnVai1QcFk59dAlrOGvti9NVp3Wdcud%2BTPrM5eWrYhS3ZrIpIVFVJ9uBo0cAdkTviGcwE2Zsn4J9xKYFIZaD%2FTlAF44MW5guKIr352%2FQNeQIr0UoD%2F2HMDrxgflGdpoOHdWo4%2FZ3UQFON7K1aUJRm0N6oadngstCft90oU%2FSROgJOESDIwOqvNIvGW6tFaEVXrNh2ysn55bjsT2XlgX4WdVdI9uzewGXgwiBBmgjCbs4fCBjqkAajmz%2FbT9d2xAaRMVaHHEmoP2Ue9mpTpvvEj3geVzTqQyCxONN4U8S9gzXfcEb8l%2FzQ%2Bjqb3YZaBjufWF2kPrQFjEC1db2AqqgcAexr%2Fabo8RSL2GX5a210BMvsKIA1gFVtkQNUHfRK9E7z0b%2BWE4mulani7%2B4N6nsCpDXLyV%2FAyXMrzLuUqeYMa45GMXgKjotItZ2EjIwzUkiAultfmmXahsbGn&X-Amz-Signature=3715588930a53cfc2d87dde52a6deb2b4d87d31532436c245e1639809fb6dfa9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUVOR3Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfGp8owvUkAntQqI%2BZUv8bnxFHCD%2B1nano0%2Bss8PMsSwIhANwzVHSlnom3JjPOd904gnsU4Or05YuCjx5Vl39RNESGKv8DCEsQABoMNjM3NDIzMTgzODA1IgyEwk08o1pMc5SS85kq3APzRGbwTG7mIRyYnMe5RMeCYgqBMwI2MBfcy%2Bl0in6Gh%2F4jsrFTBbehxVZoADvfBkoNRpd7uuOUWDfADOq4a9p3CgoR6aI5%2FbLTfKY1lJfJOtvKIocT7v%2FUUh8ahrh5yK1wtSYeBdLESjOQpUEYMFPBaO4vU3Ld2TXspsYR4axdK4wh6l278q0o1m76PlFSMUyKZGd94uazqsyHc350%2BhGaHurEopf7dAzD7lcfuDRyagbuNE1C9n5zTxWW%2BRn8cpKL8zsCyxg1LKz0YsTgzmkeUC8v1IXwAzHVk5ZpGX1U%2BFIZcRAE%2Fvp1tsl3%2F3XTo3DMO5KgHLfpZEHNq2%2Fk7e6S39S8s3MPdDly1zmWpk0EnuLVF%2FJjgbWYUXg75I05DVFmYfjMwypduKx%2FL%2FlTn8WnVai1QcFk59dAlrOGvti9NVp3Wdcud%2BTPrM5eWrYhS3ZrIpIVFVJ9uBo0cAdkTviGcwE2Zsn4J9xKYFIZaD%2FTlAF44MW5guKIr352%2FQNeQIr0UoD%2F2HMDrxgflGdpoOHdWo4%2FZ3UQFON7K1aUJRm0N6oadngstCft90oU%2FSROgJOESDIwOqvNIvGW6tFaEVXrNh2ysn55bjsT2XlgX4WdVdI9uzewGXgwiBBmgjCbs4fCBjqkAajmz%2FbT9d2xAaRMVaHHEmoP2Ue9mpTpvvEj3geVzTqQyCxONN4U8S9gzXfcEb8l%2FzQ%2Bjqb3YZaBjufWF2kPrQFjEC1db2AqqgcAexr%2Fabo8RSL2GX5a210BMvsKIA1gFVtkQNUHfRK9E7z0b%2BWE4mulani7%2B4N6nsCpDXLyV%2FAyXMrzLuUqeYMa45GMXgKjotItZ2EjIwzUkiAultfmmXahsbGn&X-Amz-Signature=3acab70e64dd8a9e58bf17cadaf14157d27aa60557839ae55ae2de9dbdd86344&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUVOR3Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfGp8owvUkAntQqI%2BZUv8bnxFHCD%2B1nano0%2Bss8PMsSwIhANwzVHSlnom3JjPOd904gnsU4Or05YuCjx5Vl39RNESGKv8DCEsQABoMNjM3NDIzMTgzODA1IgyEwk08o1pMc5SS85kq3APzRGbwTG7mIRyYnMe5RMeCYgqBMwI2MBfcy%2Bl0in6Gh%2F4jsrFTBbehxVZoADvfBkoNRpd7uuOUWDfADOq4a9p3CgoR6aI5%2FbLTfKY1lJfJOtvKIocT7v%2FUUh8ahrh5yK1wtSYeBdLESjOQpUEYMFPBaO4vU3Ld2TXspsYR4axdK4wh6l278q0o1m76PlFSMUyKZGd94uazqsyHc350%2BhGaHurEopf7dAzD7lcfuDRyagbuNE1C9n5zTxWW%2BRn8cpKL8zsCyxg1LKz0YsTgzmkeUC8v1IXwAzHVk5ZpGX1U%2BFIZcRAE%2Fvp1tsl3%2F3XTo3DMO5KgHLfpZEHNq2%2Fk7e6S39S8s3MPdDly1zmWpk0EnuLVF%2FJjgbWYUXg75I05DVFmYfjMwypduKx%2FL%2FlTn8WnVai1QcFk59dAlrOGvti9NVp3Wdcud%2BTPrM5eWrYhS3ZrIpIVFVJ9uBo0cAdkTviGcwE2Zsn4J9xKYFIZaD%2FTlAF44MW5guKIr352%2FQNeQIr0UoD%2F2HMDrxgflGdpoOHdWo4%2FZ3UQFON7K1aUJRm0N6oadngstCft90oU%2FSROgJOESDIwOqvNIvGW6tFaEVXrNh2ysn55bjsT2XlgX4WdVdI9uzewGXgwiBBmgjCbs4fCBjqkAajmz%2FbT9d2xAaRMVaHHEmoP2Ue9mpTpvvEj3geVzTqQyCxONN4U8S9gzXfcEb8l%2FzQ%2Bjqb3YZaBjufWF2kPrQFjEC1db2AqqgcAexr%2Fabo8RSL2GX5a210BMvsKIA1gFVtkQNUHfRK9E7z0b%2BWE4mulani7%2B4N6nsCpDXLyV%2FAyXMrzLuUqeYMa45GMXgKjotItZ2EjIwzUkiAultfmmXahsbGn&X-Amz-Signature=02bcaa2e583305cd5ea3195978697052a28c45123b025bb56964532b86585af9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUVOR3Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfGp8owvUkAntQqI%2BZUv8bnxFHCD%2B1nano0%2Bss8PMsSwIhANwzVHSlnom3JjPOd904gnsU4Or05YuCjx5Vl39RNESGKv8DCEsQABoMNjM3NDIzMTgzODA1IgyEwk08o1pMc5SS85kq3APzRGbwTG7mIRyYnMe5RMeCYgqBMwI2MBfcy%2Bl0in6Gh%2F4jsrFTBbehxVZoADvfBkoNRpd7uuOUWDfADOq4a9p3CgoR6aI5%2FbLTfKY1lJfJOtvKIocT7v%2FUUh8ahrh5yK1wtSYeBdLESjOQpUEYMFPBaO4vU3Ld2TXspsYR4axdK4wh6l278q0o1m76PlFSMUyKZGd94uazqsyHc350%2BhGaHurEopf7dAzD7lcfuDRyagbuNE1C9n5zTxWW%2BRn8cpKL8zsCyxg1LKz0YsTgzmkeUC8v1IXwAzHVk5ZpGX1U%2BFIZcRAE%2Fvp1tsl3%2F3XTo3DMO5KgHLfpZEHNq2%2Fk7e6S39S8s3MPdDly1zmWpk0EnuLVF%2FJjgbWYUXg75I05DVFmYfjMwypduKx%2FL%2FlTn8WnVai1QcFk59dAlrOGvti9NVp3Wdcud%2BTPrM5eWrYhS3ZrIpIVFVJ9uBo0cAdkTviGcwE2Zsn4J9xKYFIZaD%2FTlAF44MW5guKIr352%2FQNeQIr0UoD%2F2HMDrxgflGdpoOHdWo4%2FZ3UQFON7K1aUJRm0N6oadngstCft90oU%2FSROgJOESDIwOqvNIvGW6tFaEVXrNh2ysn55bjsT2XlgX4WdVdI9uzewGXgwiBBmgjCbs4fCBjqkAajmz%2FbT9d2xAaRMVaHHEmoP2Ue9mpTpvvEj3geVzTqQyCxONN4U8S9gzXfcEb8l%2FzQ%2Bjqb3YZaBjufWF2kPrQFjEC1db2AqqgcAexr%2Fabo8RSL2GX5a210BMvsKIA1gFVtkQNUHfRK9E7z0b%2BWE4mulani7%2B4N6nsCpDXLyV%2FAyXMrzLuUqeYMa45GMXgKjotItZ2EjIwzUkiAultfmmXahsbGn&X-Amz-Signature=7096f8cc162aaef0fca110e58fff9aebc8decb9245ce6a14bb7a025da9edf1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUVOR3Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfGp8owvUkAntQqI%2BZUv8bnxFHCD%2B1nano0%2Bss8PMsSwIhANwzVHSlnom3JjPOd904gnsU4Or05YuCjx5Vl39RNESGKv8DCEsQABoMNjM3NDIzMTgzODA1IgyEwk08o1pMc5SS85kq3APzRGbwTG7mIRyYnMe5RMeCYgqBMwI2MBfcy%2Bl0in6Gh%2F4jsrFTBbehxVZoADvfBkoNRpd7uuOUWDfADOq4a9p3CgoR6aI5%2FbLTfKY1lJfJOtvKIocT7v%2FUUh8ahrh5yK1wtSYeBdLESjOQpUEYMFPBaO4vU3Ld2TXspsYR4axdK4wh6l278q0o1m76PlFSMUyKZGd94uazqsyHc350%2BhGaHurEopf7dAzD7lcfuDRyagbuNE1C9n5zTxWW%2BRn8cpKL8zsCyxg1LKz0YsTgzmkeUC8v1IXwAzHVk5ZpGX1U%2BFIZcRAE%2Fvp1tsl3%2F3XTo3DMO5KgHLfpZEHNq2%2Fk7e6S39S8s3MPdDly1zmWpk0EnuLVF%2FJjgbWYUXg75I05DVFmYfjMwypduKx%2FL%2FlTn8WnVai1QcFk59dAlrOGvti9NVp3Wdcud%2BTPrM5eWrYhS3ZrIpIVFVJ9uBo0cAdkTviGcwE2Zsn4J9xKYFIZaD%2FTlAF44MW5guKIr352%2FQNeQIr0UoD%2F2HMDrxgflGdpoOHdWo4%2FZ3UQFON7K1aUJRm0N6oadngstCft90oU%2FSROgJOESDIwOqvNIvGW6tFaEVXrNh2ysn55bjsT2XlgX4WdVdI9uzewGXgwiBBmgjCbs4fCBjqkAajmz%2FbT9d2xAaRMVaHHEmoP2Ue9mpTpvvEj3geVzTqQyCxONN4U8S9gzXfcEb8l%2FzQ%2Bjqb3YZaBjufWF2kPrQFjEC1db2AqqgcAexr%2Fabo8RSL2GX5a210BMvsKIA1gFVtkQNUHfRK9E7z0b%2BWE4mulani7%2B4N6nsCpDXLyV%2FAyXMrzLuUqeYMa45GMXgKjotItZ2EjIwzUkiAultfmmXahsbGn&X-Amz-Signature=2d96c38c0d2b47271ac6f6c15f536aa774fbe6ac9a9b503b42c790208f1a9b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUVOR3Q%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfGp8owvUkAntQqI%2BZUv8bnxFHCD%2B1nano0%2Bss8PMsSwIhANwzVHSlnom3JjPOd904gnsU4Or05YuCjx5Vl39RNESGKv8DCEsQABoMNjM3NDIzMTgzODA1IgyEwk08o1pMc5SS85kq3APzRGbwTG7mIRyYnMe5RMeCYgqBMwI2MBfcy%2Bl0in6Gh%2F4jsrFTBbehxVZoADvfBkoNRpd7uuOUWDfADOq4a9p3CgoR6aI5%2FbLTfKY1lJfJOtvKIocT7v%2FUUh8ahrh5yK1wtSYeBdLESjOQpUEYMFPBaO4vU3Ld2TXspsYR4axdK4wh6l278q0o1m76PlFSMUyKZGd94uazqsyHc350%2BhGaHurEopf7dAzD7lcfuDRyagbuNE1C9n5zTxWW%2BRn8cpKL8zsCyxg1LKz0YsTgzmkeUC8v1IXwAzHVk5ZpGX1U%2BFIZcRAE%2Fvp1tsl3%2F3XTo3DMO5KgHLfpZEHNq2%2Fk7e6S39S8s3MPdDly1zmWpk0EnuLVF%2FJjgbWYUXg75I05DVFmYfjMwypduKx%2FL%2FlTn8WnVai1QcFk59dAlrOGvti9NVp3Wdcud%2BTPrM5eWrYhS3ZrIpIVFVJ9uBo0cAdkTviGcwE2Zsn4J9xKYFIZaD%2FTlAF44MW5guKIr352%2FQNeQIr0UoD%2F2HMDrxgflGdpoOHdWo4%2FZ3UQFON7K1aUJRm0N6oadngstCft90oU%2FSROgJOESDIwOqvNIvGW6tFaEVXrNh2ysn55bjsT2XlgX4WdVdI9uzewGXgwiBBmgjCbs4fCBjqkAajmz%2FbT9d2xAaRMVaHHEmoP2Ue9mpTpvvEj3geVzTqQyCxONN4U8S9gzXfcEb8l%2FzQ%2Bjqb3YZaBjufWF2kPrQFjEC1db2AqqgcAexr%2Fabo8RSL2GX5a210BMvsKIA1gFVtkQNUHfRK9E7z0b%2BWE4mulani7%2B4N6nsCpDXLyV%2FAyXMrzLuUqeYMa45GMXgKjotItZ2EjIwzUkiAultfmmXahsbGn&X-Amz-Signature=e17e0dca33a44a0097fd66a642e3b1593e47844ec0ec88d86cfaa3a30f809d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
