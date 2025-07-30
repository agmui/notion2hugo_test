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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SOBMV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWLxQMVdFaY16Qvv3tBDdYWaUviSVCgZkkvAeiOLDaAIhAKBIsyqNMOeHNiTT2daKMMSF745GopvMKwQ0kspKXcp%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzuT6GZwqmRZ2i3Nsq3AOYC98rjN1D%2B18r9LuLQis6Y4wBtV48HWchVOx10yj1HX2Gu7yPn%2BSwHguMazrDtohPj7V%2FU5b8VFO7nxrycfmbcEIMV72i3FUfvGVDomWiUGyQURhCRY0%2FAxXD4IQcF2pBpp9D6nm7WGqzYyjLLSXXOqAirZzWw8Wx9N0S4CRiwwBsYUko5LnJAjh1yCJxDkxJCc2LEI68f%2FSm8yS3EgXFEDECfmd7YwZbwM9z6ycqeVXx0tQwz9E5grMOFtPT9d8C6u8lthnJwPs%2BGaSD76xCVPsyDIyaQEA442zS0b5VeGXt5xTkXnjthOWyWOv6VpM663%2F1UQ0MUmgLaBvITlg8l7bv2UHcz1RQVIIsTnd3s5fvXZEnv5TGQXNToUAN7srfHBsbJeyDO6FSrtN0xqhWFtMt0fIh%2B%2BwpWAW3aO%2FBI91hlmhIY8dDeoptTbtmaFpZAAhhThfV0MWh5YcRX1yd4s8DsAwVepas0u6ak%2F75yUP3RTGSmMtr7%2FohrI5SiyTRixEQbER1I%2FsoGzRhtrirCx%2FdiaH3hnm6oJCXZEEnaySLL9RV2ceOfqEc5oX%2BNJHOJJktnFYIsNTkYvoPbVPP469ktTHxJIPPUF9UfP%2FruAMccYP%2FeHxsObPO1jD8mqbEBjqkAQnYcWuSm5Rro4vNxlYdmpmWnkX%2F%2BVp5OQYEh3ZnvONXMzZ9K305MMaX9jJEO6chxaXIJbj9AtmIRS2P7P%2BAPttNOfg%2FMTchdPO3gSGOrE4ATeoVvRDZsTYRg%2B0DM%2BYkD0DgR2BHbFZIUQyGZM9rLgfAGTtth8z3Jytin979TgKgUG7vciOAMldxHaPg8sUCZxjjEX%2Fj9bQV3hFXYBIGTRrKPmFb&X-Amz-Signature=7d1ae2476fe1c097bba4f43f83cdc011bd9346c5068557be8c16cc8a2c73d451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SOBMV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWLxQMVdFaY16Qvv3tBDdYWaUviSVCgZkkvAeiOLDaAIhAKBIsyqNMOeHNiTT2daKMMSF745GopvMKwQ0kspKXcp%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzuT6GZwqmRZ2i3Nsq3AOYC98rjN1D%2B18r9LuLQis6Y4wBtV48HWchVOx10yj1HX2Gu7yPn%2BSwHguMazrDtohPj7V%2FU5b8VFO7nxrycfmbcEIMV72i3FUfvGVDomWiUGyQURhCRY0%2FAxXD4IQcF2pBpp9D6nm7WGqzYyjLLSXXOqAirZzWw8Wx9N0S4CRiwwBsYUko5LnJAjh1yCJxDkxJCc2LEI68f%2FSm8yS3EgXFEDECfmd7YwZbwM9z6ycqeVXx0tQwz9E5grMOFtPT9d8C6u8lthnJwPs%2BGaSD76xCVPsyDIyaQEA442zS0b5VeGXt5xTkXnjthOWyWOv6VpM663%2F1UQ0MUmgLaBvITlg8l7bv2UHcz1RQVIIsTnd3s5fvXZEnv5TGQXNToUAN7srfHBsbJeyDO6FSrtN0xqhWFtMt0fIh%2B%2BwpWAW3aO%2FBI91hlmhIY8dDeoptTbtmaFpZAAhhThfV0MWh5YcRX1yd4s8DsAwVepas0u6ak%2F75yUP3RTGSmMtr7%2FohrI5SiyTRixEQbER1I%2FsoGzRhtrirCx%2FdiaH3hnm6oJCXZEEnaySLL9RV2ceOfqEc5oX%2BNJHOJJktnFYIsNTkYvoPbVPP469ktTHxJIPPUF9UfP%2FruAMccYP%2FeHxsObPO1jD8mqbEBjqkAQnYcWuSm5Rro4vNxlYdmpmWnkX%2F%2BVp5OQYEh3ZnvONXMzZ9K305MMaX9jJEO6chxaXIJbj9AtmIRS2P7P%2BAPttNOfg%2FMTchdPO3gSGOrE4ATeoVvRDZsTYRg%2B0DM%2BYkD0DgR2BHbFZIUQyGZM9rLgfAGTtth8z3Jytin979TgKgUG7vciOAMldxHaPg8sUCZxjjEX%2Fj9bQV3hFXYBIGTRrKPmFb&X-Amz-Signature=7be991a15ddb8c4f25faf84324e361a69bb46599973148e83ff0a879dc51232a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SOBMV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWLxQMVdFaY16Qvv3tBDdYWaUviSVCgZkkvAeiOLDaAIhAKBIsyqNMOeHNiTT2daKMMSF745GopvMKwQ0kspKXcp%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzuT6GZwqmRZ2i3Nsq3AOYC98rjN1D%2B18r9LuLQis6Y4wBtV48HWchVOx10yj1HX2Gu7yPn%2BSwHguMazrDtohPj7V%2FU5b8VFO7nxrycfmbcEIMV72i3FUfvGVDomWiUGyQURhCRY0%2FAxXD4IQcF2pBpp9D6nm7WGqzYyjLLSXXOqAirZzWw8Wx9N0S4CRiwwBsYUko5LnJAjh1yCJxDkxJCc2LEI68f%2FSm8yS3EgXFEDECfmd7YwZbwM9z6ycqeVXx0tQwz9E5grMOFtPT9d8C6u8lthnJwPs%2BGaSD76xCVPsyDIyaQEA442zS0b5VeGXt5xTkXnjthOWyWOv6VpM663%2F1UQ0MUmgLaBvITlg8l7bv2UHcz1RQVIIsTnd3s5fvXZEnv5TGQXNToUAN7srfHBsbJeyDO6FSrtN0xqhWFtMt0fIh%2B%2BwpWAW3aO%2FBI91hlmhIY8dDeoptTbtmaFpZAAhhThfV0MWh5YcRX1yd4s8DsAwVepas0u6ak%2F75yUP3RTGSmMtr7%2FohrI5SiyTRixEQbER1I%2FsoGzRhtrirCx%2FdiaH3hnm6oJCXZEEnaySLL9RV2ceOfqEc5oX%2BNJHOJJktnFYIsNTkYvoPbVPP469ktTHxJIPPUF9UfP%2FruAMccYP%2FeHxsObPO1jD8mqbEBjqkAQnYcWuSm5Rro4vNxlYdmpmWnkX%2F%2BVp5OQYEh3ZnvONXMzZ9K305MMaX9jJEO6chxaXIJbj9AtmIRS2P7P%2BAPttNOfg%2FMTchdPO3gSGOrE4ATeoVvRDZsTYRg%2B0DM%2BYkD0DgR2BHbFZIUQyGZM9rLgfAGTtth8z3Jytin979TgKgUG7vciOAMldxHaPg8sUCZxjjEX%2Fj9bQV3hFXYBIGTRrKPmFb&X-Amz-Signature=51113ae548368196ac8bc7fed0a6db4ac6d56ee3cd128bbc0aabc92463037f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SOBMV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWLxQMVdFaY16Qvv3tBDdYWaUviSVCgZkkvAeiOLDaAIhAKBIsyqNMOeHNiTT2daKMMSF745GopvMKwQ0kspKXcp%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzuT6GZwqmRZ2i3Nsq3AOYC98rjN1D%2B18r9LuLQis6Y4wBtV48HWchVOx10yj1HX2Gu7yPn%2BSwHguMazrDtohPj7V%2FU5b8VFO7nxrycfmbcEIMV72i3FUfvGVDomWiUGyQURhCRY0%2FAxXD4IQcF2pBpp9D6nm7WGqzYyjLLSXXOqAirZzWw8Wx9N0S4CRiwwBsYUko5LnJAjh1yCJxDkxJCc2LEI68f%2FSm8yS3EgXFEDECfmd7YwZbwM9z6ycqeVXx0tQwz9E5grMOFtPT9d8C6u8lthnJwPs%2BGaSD76xCVPsyDIyaQEA442zS0b5VeGXt5xTkXnjthOWyWOv6VpM663%2F1UQ0MUmgLaBvITlg8l7bv2UHcz1RQVIIsTnd3s5fvXZEnv5TGQXNToUAN7srfHBsbJeyDO6FSrtN0xqhWFtMt0fIh%2B%2BwpWAW3aO%2FBI91hlmhIY8dDeoptTbtmaFpZAAhhThfV0MWh5YcRX1yd4s8DsAwVepas0u6ak%2F75yUP3RTGSmMtr7%2FohrI5SiyTRixEQbER1I%2FsoGzRhtrirCx%2FdiaH3hnm6oJCXZEEnaySLL9RV2ceOfqEc5oX%2BNJHOJJktnFYIsNTkYvoPbVPP469ktTHxJIPPUF9UfP%2FruAMccYP%2FeHxsObPO1jD8mqbEBjqkAQnYcWuSm5Rro4vNxlYdmpmWnkX%2F%2BVp5OQYEh3ZnvONXMzZ9K305MMaX9jJEO6chxaXIJbj9AtmIRS2P7P%2BAPttNOfg%2FMTchdPO3gSGOrE4ATeoVvRDZsTYRg%2B0DM%2BYkD0DgR2BHbFZIUQyGZM9rLgfAGTtth8z3Jytin979TgKgUG7vciOAMldxHaPg8sUCZxjjEX%2Fj9bQV3hFXYBIGTRrKPmFb&X-Amz-Signature=69bbefab30f609e15f83ce20c2a3411ec5ee3b07ba60783c8d95e91f34f0184a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SOBMV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWLxQMVdFaY16Qvv3tBDdYWaUviSVCgZkkvAeiOLDaAIhAKBIsyqNMOeHNiTT2daKMMSF745GopvMKwQ0kspKXcp%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzuT6GZwqmRZ2i3Nsq3AOYC98rjN1D%2B18r9LuLQis6Y4wBtV48HWchVOx10yj1HX2Gu7yPn%2BSwHguMazrDtohPj7V%2FU5b8VFO7nxrycfmbcEIMV72i3FUfvGVDomWiUGyQURhCRY0%2FAxXD4IQcF2pBpp9D6nm7WGqzYyjLLSXXOqAirZzWw8Wx9N0S4CRiwwBsYUko5LnJAjh1yCJxDkxJCc2LEI68f%2FSm8yS3EgXFEDECfmd7YwZbwM9z6ycqeVXx0tQwz9E5grMOFtPT9d8C6u8lthnJwPs%2BGaSD76xCVPsyDIyaQEA442zS0b5VeGXt5xTkXnjthOWyWOv6VpM663%2F1UQ0MUmgLaBvITlg8l7bv2UHcz1RQVIIsTnd3s5fvXZEnv5TGQXNToUAN7srfHBsbJeyDO6FSrtN0xqhWFtMt0fIh%2B%2BwpWAW3aO%2FBI91hlmhIY8dDeoptTbtmaFpZAAhhThfV0MWh5YcRX1yd4s8DsAwVepas0u6ak%2F75yUP3RTGSmMtr7%2FohrI5SiyTRixEQbER1I%2FsoGzRhtrirCx%2FdiaH3hnm6oJCXZEEnaySLL9RV2ceOfqEc5oX%2BNJHOJJktnFYIsNTkYvoPbVPP469ktTHxJIPPUF9UfP%2FruAMccYP%2FeHxsObPO1jD8mqbEBjqkAQnYcWuSm5Rro4vNxlYdmpmWnkX%2F%2BVp5OQYEh3ZnvONXMzZ9K305MMaX9jJEO6chxaXIJbj9AtmIRS2P7P%2BAPttNOfg%2FMTchdPO3gSGOrE4ATeoVvRDZsTYRg%2B0DM%2BYkD0DgR2BHbFZIUQyGZM9rLgfAGTtth8z3Jytin979TgKgUG7vciOAMldxHaPg8sUCZxjjEX%2Fj9bQV3hFXYBIGTRrKPmFb&X-Amz-Signature=de3e0680ac9bb9e66cbf04e225207959d597b03b6807566cd46172a3b48e1a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SOBMV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWLxQMVdFaY16Qvv3tBDdYWaUviSVCgZkkvAeiOLDaAIhAKBIsyqNMOeHNiTT2daKMMSF745GopvMKwQ0kspKXcp%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzuT6GZwqmRZ2i3Nsq3AOYC98rjN1D%2B18r9LuLQis6Y4wBtV48HWchVOx10yj1HX2Gu7yPn%2BSwHguMazrDtohPj7V%2FU5b8VFO7nxrycfmbcEIMV72i3FUfvGVDomWiUGyQURhCRY0%2FAxXD4IQcF2pBpp9D6nm7WGqzYyjLLSXXOqAirZzWw8Wx9N0S4CRiwwBsYUko5LnJAjh1yCJxDkxJCc2LEI68f%2FSm8yS3EgXFEDECfmd7YwZbwM9z6ycqeVXx0tQwz9E5grMOFtPT9d8C6u8lthnJwPs%2BGaSD76xCVPsyDIyaQEA442zS0b5VeGXt5xTkXnjthOWyWOv6VpM663%2F1UQ0MUmgLaBvITlg8l7bv2UHcz1RQVIIsTnd3s5fvXZEnv5TGQXNToUAN7srfHBsbJeyDO6FSrtN0xqhWFtMt0fIh%2B%2BwpWAW3aO%2FBI91hlmhIY8dDeoptTbtmaFpZAAhhThfV0MWh5YcRX1yd4s8DsAwVepas0u6ak%2F75yUP3RTGSmMtr7%2FohrI5SiyTRixEQbER1I%2FsoGzRhtrirCx%2FdiaH3hnm6oJCXZEEnaySLL9RV2ceOfqEc5oX%2BNJHOJJktnFYIsNTkYvoPbVPP469ktTHxJIPPUF9UfP%2FruAMccYP%2FeHxsObPO1jD8mqbEBjqkAQnYcWuSm5Rro4vNxlYdmpmWnkX%2F%2BVp5OQYEh3ZnvONXMzZ9K305MMaX9jJEO6chxaXIJbj9AtmIRS2P7P%2BAPttNOfg%2FMTchdPO3gSGOrE4ATeoVvRDZsTYRg%2B0DM%2BYkD0DgR2BHbFZIUQyGZM9rLgfAGTtth8z3Jytin979TgKgUG7vciOAMldxHaPg8sUCZxjjEX%2Fj9bQV3hFXYBIGTRrKPmFb&X-Amz-Signature=23ee8efe59d56f7c9eb6ac52481dd6fac59fd7001d6cb29a8f0f6200d404eab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SOBMV2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWLxQMVdFaY16Qvv3tBDdYWaUviSVCgZkkvAeiOLDaAIhAKBIsyqNMOeHNiTT2daKMMSF745GopvMKwQ0kspKXcp%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzuT6GZwqmRZ2i3Nsq3AOYC98rjN1D%2B18r9LuLQis6Y4wBtV48HWchVOx10yj1HX2Gu7yPn%2BSwHguMazrDtohPj7V%2FU5b8VFO7nxrycfmbcEIMV72i3FUfvGVDomWiUGyQURhCRY0%2FAxXD4IQcF2pBpp9D6nm7WGqzYyjLLSXXOqAirZzWw8Wx9N0S4CRiwwBsYUko5LnJAjh1yCJxDkxJCc2LEI68f%2FSm8yS3EgXFEDECfmd7YwZbwM9z6ycqeVXx0tQwz9E5grMOFtPT9d8C6u8lthnJwPs%2BGaSD76xCVPsyDIyaQEA442zS0b5VeGXt5xTkXnjthOWyWOv6VpM663%2F1UQ0MUmgLaBvITlg8l7bv2UHcz1RQVIIsTnd3s5fvXZEnv5TGQXNToUAN7srfHBsbJeyDO6FSrtN0xqhWFtMt0fIh%2B%2BwpWAW3aO%2FBI91hlmhIY8dDeoptTbtmaFpZAAhhThfV0MWh5YcRX1yd4s8DsAwVepas0u6ak%2F75yUP3RTGSmMtr7%2FohrI5SiyTRixEQbER1I%2FsoGzRhtrirCx%2FdiaH3hnm6oJCXZEEnaySLL9RV2ceOfqEc5oX%2BNJHOJJktnFYIsNTkYvoPbVPP469ktTHxJIPPUF9UfP%2FruAMccYP%2FeHxsObPO1jD8mqbEBjqkAQnYcWuSm5Rro4vNxlYdmpmWnkX%2F%2BVp5OQYEh3ZnvONXMzZ9K305MMaX9jJEO6chxaXIJbj9AtmIRS2P7P%2BAPttNOfg%2FMTchdPO3gSGOrE4ATeoVvRDZsTYRg%2B0DM%2BYkD0DgR2BHbFZIUQyGZM9rLgfAGTtth8z3Jytin979TgKgUG7vciOAMldxHaPg8sUCZxjjEX%2Fj9bQV3hFXYBIGTRrKPmFb&X-Amz-Signature=4f620bacbd95154521b54c739b1c15a6cd7a395c67265c5718eda2ba8d07b0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
