---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJM5EB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICml09BauqkIpqFfTN4daiP4yERPL0AKKF%2FivlOMw6dhAiBNkAL68MkkIx6mu%2F8ET8lZ6pm8N9wPrmVI2VrIok8w%2Fir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvL4SX29sInV%2F%2FpFXKtwDVrHQruLkNouPmAGyrmQrZjt1bh4AbPoz%2BgnjSpeMr08IdlP2kXL5GFXoeWKtONvLOGkI8iwizkRutQ9GerzGo52%2BUDocwvD2xA6zPE3Twgmh%2FEEL%2BZ7TZUr0Tssa3w1FQzWRlKFhliXWCioIPzGywokoltJeRH3Eu24U64HnyPZKhtus0eQDq8YXR6UPZb5vxwtIa%2FyO9gZKkbi1CM5P5%2FUZOzlsDMcSo2HOpsjHKpSql4gwZfZIixnsgFsqtJulUotZQOhU1bRs9CtDacpcyBXPppOclcaVc2RXisPGeLjWe7EawKjGr7yTLO5NA2nJAxycYUoqs4Gwwesgvbzn6Xy%2BsxOhKOPpEmrvSJNNrVR7go0jYJYqtHPyyqKgGphtaTzkhNyy67imJgMEsNFBws5bRmx6ZUwtnV2o4zKEKXk%2FRom%2FsyWaER0nHucc2Gs5MjcAmiCDqW0SASBkW8DXmw%2BfSAZSxGivRkQUwd5hcXEPiWoLTujuK9b2p3PL4ngboLIWVUoKl5e5xn3gt7%2F%2BHwRSqQihPxayHaAfRsV6eeOCaKdgGIoW1lK25yzIJG0%2B01%2FZ8v%2Fy1Mc%2BbC56i9drUuMB1cZUERzrmoRkx1UQd9vGDwndWq1EfX%2FmsSEwsaDzxAY6pgElTFdQUOp6tq5T79UDn3qTuHP8OkUKCZBwKppgI%2FKE32BYIMiD8urjdQ3iaAaTI9IGeeTbWinPjnXu5xOCbqoIl74TIdFdN4og1DKqfaF%2BnwD58c%2FIY11H2D6EgFq%2Bzfcdb4sMASFtuBDOZb7l2tvkEOkQNbCju%2BO25ndHT7ttKM1uaxbwn5QeDRGYxAUBSotHLpfczqO8fKdiudikemPEr9wcp1%2FI&X-Amz-Signature=6f0f632e32bab79551514dbce7259b4c758402da61006b61883f2100d2c64491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJM5EB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICml09BauqkIpqFfTN4daiP4yERPL0AKKF%2FivlOMw6dhAiBNkAL68MkkIx6mu%2F8ET8lZ6pm8N9wPrmVI2VrIok8w%2Fir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvL4SX29sInV%2F%2FpFXKtwDVrHQruLkNouPmAGyrmQrZjt1bh4AbPoz%2BgnjSpeMr08IdlP2kXL5GFXoeWKtONvLOGkI8iwizkRutQ9GerzGo52%2BUDocwvD2xA6zPE3Twgmh%2FEEL%2BZ7TZUr0Tssa3w1FQzWRlKFhliXWCioIPzGywokoltJeRH3Eu24U64HnyPZKhtus0eQDq8YXR6UPZb5vxwtIa%2FyO9gZKkbi1CM5P5%2FUZOzlsDMcSo2HOpsjHKpSql4gwZfZIixnsgFsqtJulUotZQOhU1bRs9CtDacpcyBXPppOclcaVc2RXisPGeLjWe7EawKjGr7yTLO5NA2nJAxycYUoqs4Gwwesgvbzn6Xy%2BsxOhKOPpEmrvSJNNrVR7go0jYJYqtHPyyqKgGphtaTzkhNyy67imJgMEsNFBws5bRmx6ZUwtnV2o4zKEKXk%2FRom%2FsyWaER0nHucc2Gs5MjcAmiCDqW0SASBkW8DXmw%2BfSAZSxGivRkQUwd5hcXEPiWoLTujuK9b2p3PL4ngboLIWVUoKl5e5xn3gt7%2F%2BHwRSqQihPxayHaAfRsV6eeOCaKdgGIoW1lK25yzIJG0%2B01%2FZ8v%2Fy1Mc%2BbC56i9drUuMB1cZUERzrmoRkx1UQd9vGDwndWq1EfX%2FmsSEwsaDzxAY6pgElTFdQUOp6tq5T79UDn3qTuHP8OkUKCZBwKppgI%2FKE32BYIMiD8urjdQ3iaAaTI9IGeeTbWinPjnXu5xOCbqoIl74TIdFdN4og1DKqfaF%2BnwD58c%2FIY11H2D6EgFq%2Bzfcdb4sMASFtuBDOZb7l2tvkEOkQNbCju%2BO25ndHT7ttKM1uaxbwn5QeDRGYxAUBSotHLpfczqO8fKdiudikemPEr9wcp1%2FI&X-Amz-Signature=42dae6ec8e307b718e082bff9e0b3120ecf42fa7da97457e9a889a272248d35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJM5EB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICml09BauqkIpqFfTN4daiP4yERPL0AKKF%2FivlOMw6dhAiBNkAL68MkkIx6mu%2F8ET8lZ6pm8N9wPrmVI2VrIok8w%2Fir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvL4SX29sInV%2F%2FpFXKtwDVrHQruLkNouPmAGyrmQrZjt1bh4AbPoz%2BgnjSpeMr08IdlP2kXL5GFXoeWKtONvLOGkI8iwizkRutQ9GerzGo52%2BUDocwvD2xA6zPE3Twgmh%2FEEL%2BZ7TZUr0Tssa3w1FQzWRlKFhliXWCioIPzGywokoltJeRH3Eu24U64HnyPZKhtus0eQDq8YXR6UPZb5vxwtIa%2FyO9gZKkbi1CM5P5%2FUZOzlsDMcSo2HOpsjHKpSql4gwZfZIixnsgFsqtJulUotZQOhU1bRs9CtDacpcyBXPppOclcaVc2RXisPGeLjWe7EawKjGr7yTLO5NA2nJAxycYUoqs4Gwwesgvbzn6Xy%2BsxOhKOPpEmrvSJNNrVR7go0jYJYqtHPyyqKgGphtaTzkhNyy67imJgMEsNFBws5bRmx6ZUwtnV2o4zKEKXk%2FRom%2FsyWaER0nHucc2Gs5MjcAmiCDqW0SASBkW8DXmw%2BfSAZSxGivRkQUwd5hcXEPiWoLTujuK9b2p3PL4ngboLIWVUoKl5e5xn3gt7%2F%2BHwRSqQihPxayHaAfRsV6eeOCaKdgGIoW1lK25yzIJG0%2B01%2FZ8v%2Fy1Mc%2BbC56i9drUuMB1cZUERzrmoRkx1UQd9vGDwndWq1EfX%2FmsSEwsaDzxAY6pgElTFdQUOp6tq5T79UDn3qTuHP8OkUKCZBwKppgI%2FKE32BYIMiD8urjdQ3iaAaTI9IGeeTbWinPjnXu5xOCbqoIl74TIdFdN4og1DKqfaF%2BnwD58c%2FIY11H2D6EgFq%2Bzfcdb4sMASFtuBDOZb7l2tvkEOkQNbCju%2BO25ndHT7ttKM1uaxbwn5QeDRGYxAUBSotHLpfczqO8fKdiudikemPEr9wcp1%2FI&X-Amz-Signature=a10a0f8022ce162990c3911de0f50e51be8b1262bb77b2d66491be0f7397b9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJM5EB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICml09BauqkIpqFfTN4daiP4yERPL0AKKF%2FivlOMw6dhAiBNkAL68MkkIx6mu%2F8ET8lZ6pm8N9wPrmVI2VrIok8w%2Fir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvL4SX29sInV%2F%2FpFXKtwDVrHQruLkNouPmAGyrmQrZjt1bh4AbPoz%2BgnjSpeMr08IdlP2kXL5GFXoeWKtONvLOGkI8iwizkRutQ9GerzGo52%2BUDocwvD2xA6zPE3Twgmh%2FEEL%2BZ7TZUr0Tssa3w1FQzWRlKFhliXWCioIPzGywokoltJeRH3Eu24U64HnyPZKhtus0eQDq8YXR6UPZb5vxwtIa%2FyO9gZKkbi1CM5P5%2FUZOzlsDMcSo2HOpsjHKpSql4gwZfZIixnsgFsqtJulUotZQOhU1bRs9CtDacpcyBXPppOclcaVc2RXisPGeLjWe7EawKjGr7yTLO5NA2nJAxycYUoqs4Gwwesgvbzn6Xy%2BsxOhKOPpEmrvSJNNrVR7go0jYJYqtHPyyqKgGphtaTzkhNyy67imJgMEsNFBws5bRmx6ZUwtnV2o4zKEKXk%2FRom%2FsyWaER0nHucc2Gs5MjcAmiCDqW0SASBkW8DXmw%2BfSAZSxGivRkQUwd5hcXEPiWoLTujuK9b2p3PL4ngboLIWVUoKl5e5xn3gt7%2F%2BHwRSqQihPxayHaAfRsV6eeOCaKdgGIoW1lK25yzIJG0%2B01%2FZ8v%2Fy1Mc%2BbC56i9drUuMB1cZUERzrmoRkx1UQd9vGDwndWq1EfX%2FmsSEwsaDzxAY6pgElTFdQUOp6tq5T79UDn3qTuHP8OkUKCZBwKppgI%2FKE32BYIMiD8urjdQ3iaAaTI9IGeeTbWinPjnXu5xOCbqoIl74TIdFdN4og1DKqfaF%2BnwD58c%2FIY11H2D6EgFq%2Bzfcdb4sMASFtuBDOZb7l2tvkEOkQNbCju%2BO25ndHT7ttKM1uaxbwn5QeDRGYxAUBSotHLpfczqO8fKdiudikemPEr9wcp1%2FI&X-Amz-Signature=f3979acca61adc3ec3aff5918325043d0a6c9f187cfc92fd7d2aa685faaa49c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJM5EB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICml09BauqkIpqFfTN4daiP4yERPL0AKKF%2FivlOMw6dhAiBNkAL68MkkIx6mu%2F8ET8lZ6pm8N9wPrmVI2VrIok8w%2Fir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvL4SX29sInV%2F%2FpFXKtwDVrHQruLkNouPmAGyrmQrZjt1bh4AbPoz%2BgnjSpeMr08IdlP2kXL5GFXoeWKtONvLOGkI8iwizkRutQ9GerzGo52%2BUDocwvD2xA6zPE3Twgmh%2FEEL%2BZ7TZUr0Tssa3w1FQzWRlKFhliXWCioIPzGywokoltJeRH3Eu24U64HnyPZKhtus0eQDq8YXR6UPZb5vxwtIa%2FyO9gZKkbi1CM5P5%2FUZOzlsDMcSo2HOpsjHKpSql4gwZfZIixnsgFsqtJulUotZQOhU1bRs9CtDacpcyBXPppOclcaVc2RXisPGeLjWe7EawKjGr7yTLO5NA2nJAxycYUoqs4Gwwesgvbzn6Xy%2BsxOhKOPpEmrvSJNNrVR7go0jYJYqtHPyyqKgGphtaTzkhNyy67imJgMEsNFBws5bRmx6ZUwtnV2o4zKEKXk%2FRom%2FsyWaER0nHucc2Gs5MjcAmiCDqW0SASBkW8DXmw%2BfSAZSxGivRkQUwd5hcXEPiWoLTujuK9b2p3PL4ngboLIWVUoKl5e5xn3gt7%2F%2BHwRSqQihPxayHaAfRsV6eeOCaKdgGIoW1lK25yzIJG0%2B01%2FZ8v%2Fy1Mc%2BbC56i9drUuMB1cZUERzrmoRkx1UQd9vGDwndWq1EfX%2FmsSEwsaDzxAY6pgElTFdQUOp6tq5T79UDn3qTuHP8OkUKCZBwKppgI%2FKE32BYIMiD8urjdQ3iaAaTI9IGeeTbWinPjnXu5xOCbqoIl74TIdFdN4og1DKqfaF%2BnwD58c%2FIY11H2D6EgFq%2Bzfcdb4sMASFtuBDOZb7l2tvkEOkQNbCju%2BO25ndHT7ttKM1uaxbwn5QeDRGYxAUBSotHLpfczqO8fKdiudikemPEr9wcp1%2FI&X-Amz-Signature=99c1d031e27d968b435d49be8413a188f31d441e5cb0b1fac5df8f28084cfb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJM5EB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICml09BauqkIpqFfTN4daiP4yERPL0AKKF%2FivlOMw6dhAiBNkAL68MkkIx6mu%2F8ET8lZ6pm8N9wPrmVI2VrIok8w%2Fir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvL4SX29sInV%2F%2FpFXKtwDVrHQruLkNouPmAGyrmQrZjt1bh4AbPoz%2BgnjSpeMr08IdlP2kXL5GFXoeWKtONvLOGkI8iwizkRutQ9GerzGo52%2BUDocwvD2xA6zPE3Twgmh%2FEEL%2BZ7TZUr0Tssa3w1FQzWRlKFhliXWCioIPzGywokoltJeRH3Eu24U64HnyPZKhtus0eQDq8YXR6UPZb5vxwtIa%2FyO9gZKkbi1CM5P5%2FUZOzlsDMcSo2HOpsjHKpSql4gwZfZIixnsgFsqtJulUotZQOhU1bRs9CtDacpcyBXPppOclcaVc2RXisPGeLjWe7EawKjGr7yTLO5NA2nJAxycYUoqs4Gwwesgvbzn6Xy%2BsxOhKOPpEmrvSJNNrVR7go0jYJYqtHPyyqKgGphtaTzkhNyy67imJgMEsNFBws5bRmx6ZUwtnV2o4zKEKXk%2FRom%2FsyWaER0nHucc2Gs5MjcAmiCDqW0SASBkW8DXmw%2BfSAZSxGivRkQUwd5hcXEPiWoLTujuK9b2p3PL4ngboLIWVUoKl5e5xn3gt7%2F%2BHwRSqQihPxayHaAfRsV6eeOCaKdgGIoW1lK25yzIJG0%2B01%2FZ8v%2Fy1Mc%2BbC56i9drUuMB1cZUERzrmoRkx1UQd9vGDwndWq1EfX%2FmsSEwsaDzxAY6pgElTFdQUOp6tq5T79UDn3qTuHP8OkUKCZBwKppgI%2FKE32BYIMiD8urjdQ3iaAaTI9IGeeTbWinPjnXu5xOCbqoIl74TIdFdN4og1DKqfaF%2BnwD58c%2FIY11H2D6EgFq%2Bzfcdb4sMASFtuBDOZb7l2tvkEOkQNbCju%2BO25ndHT7ttKM1uaxbwn5QeDRGYxAUBSotHLpfczqO8fKdiudikemPEr9wcp1%2FI&X-Amz-Signature=1d07e5ccc8e9442774452a5244dbd597fd0022f1c6c68b607f939ffe3fc6112f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJM5EB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICml09BauqkIpqFfTN4daiP4yERPL0AKKF%2FivlOMw6dhAiBNkAL68MkkIx6mu%2F8ET8lZ6pm8N9wPrmVI2VrIok8w%2Fir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMvL4SX29sInV%2F%2FpFXKtwDVrHQruLkNouPmAGyrmQrZjt1bh4AbPoz%2BgnjSpeMr08IdlP2kXL5GFXoeWKtONvLOGkI8iwizkRutQ9GerzGo52%2BUDocwvD2xA6zPE3Twgmh%2FEEL%2BZ7TZUr0Tssa3w1FQzWRlKFhliXWCioIPzGywokoltJeRH3Eu24U64HnyPZKhtus0eQDq8YXR6UPZb5vxwtIa%2FyO9gZKkbi1CM5P5%2FUZOzlsDMcSo2HOpsjHKpSql4gwZfZIixnsgFsqtJulUotZQOhU1bRs9CtDacpcyBXPppOclcaVc2RXisPGeLjWe7EawKjGr7yTLO5NA2nJAxycYUoqs4Gwwesgvbzn6Xy%2BsxOhKOPpEmrvSJNNrVR7go0jYJYqtHPyyqKgGphtaTzkhNyy67imJgMEsNFBws5bRmx6ZUwtnV2o4zKEKXk%2FRom%2FsyWaER0nHucc2Gs5MjcAmiCDqW0SASBkW8DXmw%2BfSAZSxGivRkQUwd5hcXEPiWoLTujuK9b2p3PL4ngboLIWVUoKl5e5xn3gt7%2F%2BHwRSqQihPxayHaAfRsV6eeOCaKdgGIoW1lK25yzIJG0%2B01%2FZ8v%2Fy1Mc%2BbC56i9drUuMB1cZUERzrmoRkx1UQd9vGDwndWq1EfX%2FmsSEwsaDzxAY6pgElTFdQUOp6tq5T79UDn3qTuHP8OkUKCZBwKppgI%2FKE32BYIMiD8urjdQ3iaAaTI9IGeeTbWinPjnXu5xOCbqoIl74TIdFdN4og1DKqfaF%2BnwD58c%2FIY11H2D6EgFq%2Bzfcdb4sMASFtuBDOZb7l2tvkEOkQNbCju%2BO25ndHT7ttKM1uaxbwn5QeDRGYxAUBSotHLpfczqO8fKdiudikemPEr9wcp1%2FI&X-Amz-Signature=06672f9ae656fe009eff140e0753a358fb6e594758bcd3cd3f01c23fcc2b440b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
