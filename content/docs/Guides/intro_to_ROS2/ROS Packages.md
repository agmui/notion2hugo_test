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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AMIAAN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZabrkkAVzREDa3%2FHz67Q803UUa%2FzTwNUECHm4VYCDAiEAoOmvMPKQ3v4WjgPzIWG6LYNbS29PDCRF%2FDyHogEA69gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGQlccDrmtQrCAEgbyrcA19y2R3pPDW1mmjnisNR66t2F98s3N7KcFrLQYSP3oalkUVDkbKVOK5%2BJOc5X1%2F1nrYNZRdoRyW9IuHD55Xl2KaSe%2FNnCwlejT%2FfbmZ2lZwnaTOXj9Ur5%2FVA3is7ymuwkrCUZ8dmq2yEA%2F7vVCe5gQWhMaNiCx%2FQ1s6UdrGPSiLIzt63sELkI22NPp93A9vJWf8HCwXnSf9tTDPhefhhxflUhN4h2hDV%2F3zfYLhxLlfVpcDU555ylh4lny3k89ILiwzEG3DDrLqs20pV70BmPSQgvf%2BT3y8%2BPpygymgSBYfu%2BLdQB0pmOit7VrFhUhXSdbShPWc0WsPCVOrl%2FQWewcYUFzv9SBZwlHrozGjV1a2gENPgDKH2bCY09rGAKTutDeyyS2McacL54hcwBaRmBm1iUs0Yj90VHXvgDVt3%2FHpt8P4fNdHwXcclUrkuynbAvOnDrg2A7DWQU17KjzrWW41h4zhBQAUB%2FlV8T6iBi3FnkBTuYKX%2FUJot%2BmT2yt%2BxYp0kNw5ilsjxjTENB%2By2aG1MojAPtlTEcBaSZqdBxzYdiOzwLvIU0XSyK2AYL1UaJKvSiOI7O%2FKXp8cpl3XCTboj5o%2FrDH4T8%2BEDRvj3gHVQKo8vDL7XsVu%2BbnqZMMmKusAGOqUBNm4tYtDDWUmZEJTqcyNmHTUXbKJ5jbnxjF%2F3OSjc0cn1mMZTTyAZj%2BVmzXTr7b1%2BROxMBb%2B%2FJ8VGKfx5QYAIkUpNWkbDJo77WarI0iFmKqY5vXwWA2RkDewLhGhDnVRrCoTV%2Bfogc400Cv4P6%2F5mOXjFcG6WNQoJ73nxA6is9k7M9wZwff9REffk1GMnvsvWUDNNqJ1uhuzR6YBxhEJM%2BD36cDDA&X-Amz-Signature=688e28be0056b7794ae51c381f0ad2f7a8749fcbf50abb25b14d79113abebaca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AMIAAN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZabrkkAVzREDa3%2FHz67Q803UUa%2FzTwNUECHm4VYCDAiEAoOmvMPKQ3v4WjgPzIWG6LYNbS29PDCRF%2FDyHogEA69gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGQlccDrmtQrCAEgbyrcA19y2R3pPDW1mmjnisNR66t2F98s3N7KcFrLQYSP3oalkUVDkbKVOK5%2BJOc5X1%2F1nrYNZRdoRyW9IuHD55Xl2KaSe%2FNnCwlejT%2FfbmZ2lZwnaTOXj9Ur5%2FVA3is7ymuwkrCUZ8dmq2yEA%2F7vVCe5gQWhMaNiCx%2FQ1s6UdrGPSiLIzt63sELkI22NPp93A9vJWf8HCwXnSf9tTDPhefhhxflUhN4h2hDV%2F3zfYLhxLlfVpcDU555ylh4lny3k89ILiwzEG3DDrLqs20pV70BmPSQgvf%2BT3y8%2BPpygymgSBYfu%2BLdQB0pmOit7VrFhUhXSdbShPWc0WsPCVOrl%2FQWewcYUFzv9SBZwlHrozGjV1a2gENPgDKH2bCY09rGAKTutDeyyS2McacL54hcwBaRmBm1iUs0Yj90VHXvgDVt3%2FHpt8P4fNdHwXcclUrkuynbAvOnDrg2A7DWQU17KjzrWW41h4zhBQAUB%2FlV8T6iBi3FnkBTuYKX%2FUJot%2BmT2yt%2BxYp0kNw5ilsjxjTENB%2By2aG1MojAPtlTEcBaSZqdBxzYdiOzwLvIU0XSyK2AYL1UaJKvSiOI7O%2FKXp8cpl3XCTboj5o%2FrDH4T8%2BEDRvj3gHVQKo8vDL7XsVu%2BbnqZMMmKusAGOqUBNm4tYtDDWUmZEJTqcyNmHTUXbKJ5jbnxjF%2F3OSjc0cn1mMZTTyAZj%2BVmzXTr7b1%2BROxMBb%2B%2FJ8VGKfx5QYAIkUpNWkbDJo77WarI0iFmKqY5vXwWA2RkDewLhGhDnVRrCoTV%2Bfogc400Cv4P6%2F5mOXjFcG6WNQoJ73nxA6is9k7M9wZwff9REffk1GMnvsvWUDNNqJ1uhuzR6YBxhEJM%2BD36cDDA&X-Amz-Signature=79b9d93bd23e8a5c63b450ed73963110b11e23e7deb2874cacb2da7e1c1aabfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AMIAAN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZabrkkAVzREDa3%2FHz67Q803UUa%2FzTwNUECHm4VYCDAiEAoOmvMPKQ3v4WjgPzIWG6LYNbS29PDCRF%2FDyHogEA69gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGQlccDrmtQrCAEgbyrcA19y2R3pPDW1mmjnisNR66t2F98s3N7KcFrLQYSP3oalkUVDkbKVOK5%2BJOc5X1%2F1nrYNZRdoRyW9IuHD55Xl2KaSe%2FNnCwlejT%2FfbmZ2lZwnaTOXj9Ur5%2FVA3is7ymuwkrCUZ8dmq2yEA%2F7vVCe5gQWhMaNiCx%2FQ1s6UdrGPSiLIzt63sELkI22NPp93A9vJWf8HCwXnSf9tTDPhefhhxflUhN4h2hDV%2F3zfYLhxLlfVpcDU555ylh4lny3k89ILiwzEG3DDrLqs20pV70BmPSQgvf%2BT3y8%2BPpygymgSBYfu%2BLdQB0pmOit7VrFhUhXSdbShPWc0WsPCVOrl%2FQWewcYUFzv9SBZwlHrozGjV1a2gENPgDKH2bCY09rGAKTutDeyyS2McacL54hcwBaRmBm1iUs0Yj90VHXvgDVt3%2FHpt8P4fNdHwXcclUrkuynbAvOnDrg2A7DWQU17KjzrWW41h4zhBQAUB%2FlV8T6iBi3FnkBTuYKX%2FUJot%2BmT2yt%2BxYp0kNw5ilsjxjTENB%2By2aG1MojAPtlTEcBaSZqdBxzYdiOzwLvIU0XSyK2AYL1UaJKvSiOI7O%2FKXp8cpl3XCTboj5o%2FrDH4T8%2BEDRvj3gHVQKo8vDL7XsVu%2BbnqZMMmKusAGOqUBNm4tYtDDWUmZEJTqcyNmHTUXbKJ5jbnxjF%2F3OSjc0cn1mMZTTyAZj%2BVmzXTr7b1%2BROxMBb%2B%2FJ8VGKfx5QYAIkUpNWkbDJo77WarI0iFmKqY5vXwWA2RkDewLhGhDnVRrCoTV%2Bfogc400Cv4P6%2F5mOXjFcG6WNQoJ73nxA6is9k7M9wZwff9REffk1GMnvsvWUDNNqJ1uhuzR6YBxhEJM%2BD36cDDA&X-Amz-Signature=ca80c247f4a56ea012c004f7e7ce694d2a44be850d85132d9909a6e20136032d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AMIAAN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZabrkkAVzREDa3%2FHz67Q803UUa%2FzTwNUECHm4VYCDAiEAoOmvMPKQ3v4WjgPzIWG6LYNbS29PDCRF%2FDyHogEA69gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGQlccDrmtQrCAEgbyrcA19y2R3pPDW1mmjnisNR66t2F98s3N7KcFrLQYSP3oalkUVDkbKVOK5%2BJOc5X1%2F1nrYNZRdoRyW9IuHD55Xl2KaSe%2FNnCwlejT%2FfbmZ2lZwnaTOXj9Ur5%2FVA3is7ymuwkrCUZ8dmq2yEA%2F7vVCe5gQWhMaNiCx%2FQ1s6UdrGPSiLIzt63sELkI22NPp93A9vJWf8HCwXnSf9tTDPhefhhxflUhN4h2hDV%2F3zfYLhxLlfVpcDU555ylh4lny3k89ILiwzEG3DDrLqs20pV70BmPSQgvf%2BT3y8%2BPpygymgSBYfu%2BLdQB0pmOit7VrFhUhXSdbShPWc0WsPCVOrl%2FQWewcYUFzv9SBZwlHrozGjV1a2gENPgDKH2bCY09rGAKTutDeyyS2McacL54hcwBaRmBm1iUs0Yj90VHXvgDVt3%2FHpt8P4fNdHwXcclUrkuynbAvOnDrg2A7DWQU17KjzrWW41h4zhBQAUB%2FlV8T6iBi3FnkBTuYKX%2FUJot%2BmT2yt%2BxYp0kNw5ilsjxjTENB%2By2aG1MojAPtlTEcBaSZqdBxzYdiOzwLvIU0XSyK2AYL1UaJKvSiOI7O%2FKXp8cpl3XCTboj5o%2FrDH4T8%2BEDRvj3gHVQKo8vDL7XsVu%2BbnqZMMmKusAGOqUBNm4tYtDDWUmZEJTqcyNmHTUXbKJ5jbnxjF%2F3OSjc0cn1mMZTTyAZj%2BVmzXTr7b1%2BROxMBb%2B%2FJ8VGKfx5QYAIkUpNWkbDJo77WarI0iFmKqY5vXwWA2RkDewLhGhDnVRrCoTV%2Bfogc400Cv4P6%2F5mOXjFcG6WNQoJ73nxA6is9k7M9wZwff9REffk1GMnvsvWUDNNqJ1uhuzR6YBxhEJM%2BD36cDDA&X-Amz-Signature=44278736970c2f6e9f04ced656a4f075453b2efe409795903a0b188402c25a80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AMIAAN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZabrkkAVzREDa3%2FHz67Q803UUa%2FzTwNUECHm4VYCDAiEAoOmvMPKQ3v4WjgPzIWG6LYNbS29PDCRF%2FDyHogEA69gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGQlccDrmtQrCAEgbyrcA19y2R3pPDW1mmjnisNR66t2F98s3N7KcFrLQYSP3oalkUVDkbKVOK5%2BJOc5X1%2F1nrYNZRdoRyW9IuHD55Xl2KaSe%2FNnCwlejT%2FfbmZ2lZwnaTOXj9Ur5%2FVA3is7ymuwkrCUZ8dmq2yEA%2F7vVCe5gQWhMaNiCx%2FQ1s6UdrGPSiLIzt63sELkI22NPp93A9vJWf8HCwXnSf9tTDPhefhhxflUhN4h2hDV%2F3zfYLhxLlfVpcDU555ylh4lny3k89ILiwzEG3DDrLqs20pV70BmPSQgvf%2BT3y8%2BPpygymgSBYfu%2BLdQB0pmOit7VrFhUhXSdbShPWc0WsPCVOrl%2FQWewcYUFzv9SBZwlHrozGjV1a2gENPgDKH2bCY09rGAKTutDeyyS2McacL54hcwBaRmBm1iUs0Yj90VHXvgDVt3%2FHpt8P4fNdHwXcclUrkuynbAvOnDrg2A7DWQU17KjzrWW41h4zhBQAUB%2FlV8T6iBi3FnkBTuYKX%2FUJot%2BmT2yt%2BxYp0kNw5ilsjxjTENB%2By2aG1MojAPtlTEcBaSZqdBxzYdiOzwLvIU0XSyK2AYL1UaJKvSiOI7O%2FKXp8cpl3XCTboj5o%2FrDH4T8%2BEDRvj3gHVQKo8vDL7XsVu%2BbnqZMMmKusAGOqUBNm4tYtDDWUmZEJTqcyNmHTUXbKJ5jbnxjF%2F3OSjc0cn1mMZTTyAZj%2BVmzXTr7b1%2BROxMBb%2B%2FJ8VGKfx5QYAIkUpNWkbDJo77WarI0iFmKqY5vXwWA2RkDewLhGhDnVRrCoTV%2Bfogc400Cv4P6%2F5mOXjFcG6WNQoJ73nxA6is9k7M9wZwff9REffk1GMnvsvWUDNNqJ1uhuzR6YBxhEJM%2BD36cDDA&X-Amz-Signature=dd1a37f57aad9cd7264bd4d99dc404b0217834782f45c31ff51a9723d2458f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AMIAAN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZabrkkAVzREDa3%2FHz67Q803UUa%2FzTwNUECHm4VYCDAiEAoOmvMPKQ3v4WjgPzIWG6LYNbS29PDCRF%2FDyHogEA69gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGQlccDrmtQrCAEgbyrcA19y2R3pPDW1mmjnisNR66t2F98s3N7KcFrLQYSP3oalkUVDkbKVOK5%2BJOc5X1%2F1nrYNZRdoRyW9IuHD55Xl2KaSe%2FNnCwlejT%2FfbmZ2lZwnaTOXj9Ur5%2FVA3is7ymuwkrCUZ8dmq2yEA%2F7vVCe5gQWhMaNiCx%2FQ1s6UdrGPSiLIzt63sELkI22NPp93A9vJWf8HCwXnSf9tTDPhefhhxflUhN4h2hDV%2F3zfYLhxLlfVpcDU555ylh4lny3k89ILiwzEG3DDrLqs20pV70BmPSQgvf%2BT3y8%2BPpygymgSBYfu%2BLdQB0pmOit7VrFhUhXSdbShPWc0WsPCVOrl%2FQWewcYUFzv9SBZwlHrozGjV1a2gENPgDKH2bCY09rGAKTutDeyyS2McacL54hcwBaRmBm1iUs0Yj90VHXvgDVt3%2FHpt8P4fNdHwXcclUrkuynbAvOnDrg2A7DWQU17KjzrWW41h4zhBQAUB%2FlV8T6iBi3FnkBTuYKX%2FUJot%2BmT2yt%2BxYp0kNw5ilsjxjTENB%2By2aG1MojAPtlTEcBaSZqdBxzYdiOzwLvIU0XSyK2AYL1UaJKvSiOI7O%2FKXp8cpl3XCTboj5o%2FrDH4T8%2BEDRvj3gHVQKo8vDL7XsVu%2BbnqZMMmKusAGOqUBNm4tYtDDWUmZEJTqcyNmHTUXbKJ5jbnxjF%2F3OSjc0cn1mMZTTyAZj%2BVmzXTr7b1%2BROxMBb%2B%2FJ8VGKfx5QYAIkUpNWkbDJo77WarI0iFmKqY5vXwWA2RkDewLhGhDnVRrCoTV%2Bfogc400Cv4P6%2F5mOXjFcG6WNQoJ73nxA6is9k7M9wZwff9REffk1GMnvsvWUDNNqJ1uhuzR6YBxhEJM%2BD36cDDA&X-Amz-Signature=69c46bdcc1a5a5c2439115d2c75e9deed9d748dd6d13c362f65a49fa25fc8710&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AMIAAN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfZabrkkAVzREDa3%2FHz67Q803UUa%2FzTwNUECHm4VYCDAiEAoOmvMPKQ3v4WjgPzIWG6LYNbS29PDCRF%2FDyHogEA69gq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGQlccDrmtQrCAEgbyrcA19y2R3pPDW1mmjnisNR66t2F98s3N7KcFrLQYSP3oalkUVDkbKVOK5%2BJOc5X1%2F1nrYNZRdoRyW9IuHD55Xl2KaSe%2FNnCwlejT%2FfbmZ2lZwnaTOXj9Ur5%2FVA3is7ymuwkrCUZ8dmq2yEA%2F7vVCe5gQWhMaNiCx%2FQ1s6UdrGPSiLIzt63sELkI22NPp93A9vJWf8HCwXnSf9tTDPhefhhxflUhN4h2hDV%2F3zfYLhxLlfVpcDU555ylh4lny3k89ILiwzEG3DDrLqs20pV70BmPSQgvf%2BT3y8%2BPpygymgSBYfu%2BLdQB0pmOit7VrFhUhXSdbShPWc0WsPCVOrl%2FQWewcYUFzv9SBZwlHrozGjV1a2gENPgDKH2bCY09rGAKTutDeyyS2McacL54hcwBaRmBm1iUs0Yj90VHXvgDVt3%2FHpt8P4fNdHwXcclUrkuynbAvOnDrg2A7DWQU17KjzrWW41h4zhBQAUB%2FlV8T6iBi3FnkBTuYKX%2FUJot%2BmT2yt%2BxYp0kNw5ilsjxjTENB%2By2aG1MojAPtlTEcBaSZqdBxzYdiOzwLvIU0XSyK2AYL1UaJKvSiOI7O%2FKXp8cpl3XCTboj5o%2FrDH4T8%2BEDRvj3gHVQKo8vDL7XsVu%2BbnqZMMmKusAGOqUBNm4tYtDDWUmZEJTqcyNmHTUXbKJ5jbnxjF%2F3OSjc0cn1mMZTTyAZj%2BVmzXTr7b1%2BROxMBb%2B%2FJ8VGKfx5QYAIkUpNWkbDJo77WarI0iFmKqY5vXwWA2RkDewLhGhDnVRrCoTV%2Bfogc400Cv4P6%2F5mOXjFcG6WNQoJ73nxA6is9k7M9wZwff9REffk1GMnvsvWUDNNqJ1uhuzR6YBxhEJM%2BD36cDDA&X-Amz-Signature=6a4783b503f6b34a9ca9c7a8568583d6567d72c7cec3b95c17fd503d6f0549ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
