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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGWY3FE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCThGhL18iaT%2B06SS0kpX1F2E%2B0ux68le3nLGkyMoaYgQIhAJRPC2FqUdQRZKTOuMIZrIdyvP5gUo%2BJwU01Fsef%2BO22KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw67i7IEgBOGGRb0WQq3AMduzfAcnnt0H9jYZzVL6SGsZ4my1u82u%2B0TAaUfMEfmjKweKg7Mb8aX6JqfosYcogLEvfBTm96KQA2yw0So5ACSK0FnezP4xBGmZbb9jib1yu0M4S6eiBMrKBTTJqghbOM3dMWGyRNjU1%2Fnoz%2B%2BPQFm3uAX%2BGJ6b45P5lZBf8TeiBdSD3LQaE2y0LA5wtPesDMIBEbS2kYPhu4Ru%2FGDnoWIsP83p69%2FrqYOtXVq2ONuCBgPM6NnN8WoetxL3mBQi4V93kOScwG0tr%2FhICa9ETj%2BAHSPSMy5PI6JFI0cpSM2EHHlgrB0NtD7Ftkl9OwzSs6SCKovL6TlsVmwNkVDaT84SwMLLaFg30ISdWRFpArWs5sfW2aQa5CDZdh3A5Z2jxww0%2FbBr2zrg7mq17%2BehhcqORx397lEMYEpXutY5TSlze%2BcyBVxjs%2F%2Bixi7NAjz6f3ir0Bs6VE9GZ0bvOf5EqipIZzPSNSYwj4AuB0H1Cw1sLhwr16cpAc5meYRmaHx6JXZId2JtIJnWB9Yvk1YzffO1%2BDVkzr6q2DjqkVxepVfxD6rbTcKeBGIZcyEQBzrX1rPHSAsQQO3I9cP1Wvf3gvcB62sXp8NHpcKGE%2B4e51UYVajuc7ASLTNCXS1DDlktnEBjqkAXHid6mmiZmZQT1Zpi39AmoDwn6z0Afii8vN3r7KlsgfDj0Z0k7tvldxkFGovqoJ%2BPbafTIb2v1MopdRjvJ3P0yyQJ%2BHiRHYsbNZN6koiJbqL%2BuHqVQpYBjpkyTlLtyGEldg4U2Ur7ZryukTBVHOBLiZ%2B4XEPVd0Ex0qUhHTJ0j9IAvE21%2FKuMxXugv6Cx1PiXZE8%2BjzvSdcqrBJMLwR%2Fuhnla2g&X-Amz-Signature=d4c54252377aab479f118870016475e0867c4093c3d37a317182e215788c3d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGWY3FE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCThGhL18iaT%2B06SS0kpX1F2E%2B0ux68le3nLGkyMoaYgQIhAJRPC2FqUdQRZKTOuMIZrIdyvP5gUo%2BJwU01Fsef%2BO22KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw67i7IEgBOGGRb0WQq3AMduzfAcnnt0H9jYZzVL6SGsZ4my1u82u%2B0TAaUfMEfmjKweKg7Mb8aX6JqfosYcogLEvfBTm96KQA2yw0So5ACSK0FnezP4xBGmZbb9jib1yu0M4S6eiBMrKBTTJqghbOM3dMWGyRNjU1%2Fnoz%2B%2BPQFm3uAX%2BGJ6b45P5lZBf8TeiBdSD3LQaE2y0LA5wtPesDMIBEbS2kYPhu4Ru%2FGDnoWIsP83p69%2FrqYOtXVq2ONuCBgPM6NnN8WoetxL3mBQi4V93kOScwG0tr%2FhICa9ETj%2BAHSPSMy5PI6JFI0cpSM2EHHlgrB0NtD7Ftkl9OwzSs6SCKovL6TlsVmwNkVDaT84SwMLLaFg30ISdWRFpArWs5sfW2aQa5CDZdh3A5Z2jxww0%2FbBr2zrg7mq17%2BehhcqORx397lEMYEpXutY5TSlze%2BcyBVxjs%2F%2Bixi7NAjz6f3ir0Bs6VE9GZ0bvOf5EqipIZzPSNSYwj4AuB0H1Cw1sLhwr16cpAc5meYRmaHx6JXZId2JtIJnWB9Yvk1YzffO1%2BDVkzr6q2DjqkVxepVfxD6rbTcKeBGIZcyEQBzrX1rPHSAsQQO3I9cP1Wvf3gvcB62sXp8NHpcKGE%2B4e51UYVajuc7ASLTNCXS1DDlktnEBjqkAXHid6mmiZmZQT1Zpi39AmoDwn6z0Afii8vN3r7KlsgfDj0Z0k7tvldxkFGovqoJ%2BPbafTIb2v1MopdRjvJ3P0yyQJ%2BHiRHYsbNZN6koiJbqL%2BuHqVQpYBjpkyTlLtyGEldg4U2Ur7ZryukTBVHOBLiZ%2B4XEPVd0Ex0qUhHTJ0j9IAvE21%2FKuMxXugv6Cx1PiXZE8%2BjzvSdcqrBJMLwR%2Fuhnla2g&X-Amz-Signature=9778b9d02d750f452c3aebe3260c30df6a709e36c061559fe8afcb9f81a4bb93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGWY3FE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCThGhL18iaT%2B06SS0kpX1F2E%2B0ux68le3nLGkyMoaYgQIhAJRPC2FqUdQRZKTOuMIZrIdyvP5gUo%2BJwU01Fsef%2BO22KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw67i7IEgBOGGRb0WQq3AMduzfAcnnt0H9jYZzVL6SGsZ4my1u82u%2B0TAaUfMEfmjKweKg7Mb8aX6JqfosYcogLEvfBTm96KQA2yw0So5ACSK0FnezP4xBGmZbb9jib1yu0M4S6eiBMrKBTTJqghbOM3dMWGyRNjU1%2Fnoz%2B%2BPQFm3uAX%2BGJ6b45P5lZBf8TeiBdSD3LQaE2y0LA5wtPesDMIBEbS2kYPhu4Ru%2FGDnoWIsP83p69%2FrqYOtXVq2ONuCBgPM6NnN8WoetxL3mBQi4V93kOScwG0tr%2FhICa9ETj%2BAHSPSMy5PI6JFI0cpSM2EHHlgrB0NtD7Ftkl9OwzSs6SCKovL6TlsVmwNkVDaT84SwMLLaFg30ISdWRFpArWs5sfW2aQa5CDZdh3A5Z2jxww0%2FbBr2zrg7mq17%2BehhcqORx397lEMYEpXutY5TSlze%2BcyBVxjs%2F%2Bixi7NAjz6f3ir0Bs6VE9GZ0bvOf5EqipIZzPSNSYwj4AuB0H1Cw1sLhwr16cpAc5meYRmaHx6JXZId2JtIJnWB9Yvk1YzffO1%2BDVkzr6q2DjqkVxepVfxD6rbTcKeBGIZcyEQBzrX1rPHSAsQQO3I9cP1Wvf3gvcB62sXp8NHpcKGE%2B4e51UYVajuc7ASLTNCXS1DDlktnEBjqkAXHid6mmiZmZQT1Zpi39AmoDwn6z0Afii8vN3r7KlsgfDj0Z0k7tvldxkFGovqoJ%2BPbafTIb2v1MopdRjvJ3P0yyQJ%2BHiRHYsbNZN6koiJbqL%2BuHqVQpYBjpkyTlLtyGEldg4U2Ur7ZryukTBVHOBLiZ%2B4XEPVd0Ex0qUhHTJ0j9IAvE21%2FKuMxXugv6Cx1PiXZE8%2BjzvSdcqrBJMLwR%2Fuhnla2g&X-Amz-Signature=1edd704297e73c1dee8bc667592f957c057bff2ff574e37797dbe3650df454a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGWY3FE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCThGhL18iaT%2B06SS0kpX1F2E%2B0ux68le3nLGkyMoaYgQIhAJRPC2FqUdQRZKTOuMIZrIdyvP5gUo%2BJwU01Fsef%2BO22KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw67i7IEgBOGGRb0WQq3AMduzfAcnnt0H9jYZzVL6SGsZ4my1u82u%2B0TAaUfMEfmjKweKg7Mb8aX6JqfosYcogLEvfBTm96KQA2yw0So5ACSK0FnezP4xBGmZbb9jib1yu0M4S6eiBMrKBTTJqghbOM3dMWGyRNjU1%2Fnoz%2B%2BPQFm3uAX%2BGJ6b45P5lZBf8TeiBdSD3LQaE2y0LA5wtPesDMIBEbS2kYPhu4Ru%2FGDnoWIsP83p69%2FrqYOtXVq2ONuCBgPM6NnN8WoetxL3mBQi4V93kOScwG0tr%2FhICa9ETj%2BAHSPSMy5PI6JFI0cpSM2EHHlgrB0NtD7Ftkl9OwzSs6SCKovL6TlsVmwNkVDaT84SwMLLaFg30ISdWRFpArWs5sfW2aQa5CDZdh3A5Z2jxww0%2FbBr2zrg7mq17%2BehhcqORx397lEMYEpXutY5TSlze%2BcyBVxjs%2F%2Bixi7NAjz6f3ir0Bs6VE9GZ0bvOf5EqipIZzPSNSYwj4AuB0H1Cw1sLhwr16cpAc5meYRmaHx6JXZId2JtIJnWB9Yvk1YzffO1%2BDVkzr6q2DjqkVxepVfxD6rbTcKeBGIZcyEQBzrX1rPHSAsQQO3I9cP1Wvf3gvcB62sXp8NHpcKGE%2B4e51UYVajuc7ASLTNCXS1DDlktnEBjqkAXHid6mmiZmZQT1Zpi39AmoDwn6z0Afii8vN3r7KlsgfDj0Z0k7tvldxkFGovqoJ%2BPbafTIb2v1MopdRjvJ3P0yyQJ%2BHiRHYsbNZN6koiJbqL%2BuHqVQpYBjpkyTlLtyGEldg4U2Ur7ZryukTBVHOBLiZ%2B4XEPVd0Ex0qUhHTJ0j9IAvE21%2FKuMxXugv6Cx1PiXZE8%2BjzvSdcqrBJMLwR%2Fuhnla2g&X-Amz-Signature=a68aa07a831c33698c81006f553780a34b67424c5f02292b4e60986adc208eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGWY3FE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCThGhL18iaT%2B06SS0kpX1F2E%2B0ux68le3nLGkyMoaYgQIhAJRPC2FqUdQRZKTOuMIZrIdyvP5gUo%2BJwU01Fsef%2BO22KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw67i7IEgBOGGRb0WQq3AMduzfAcnnt0H9jYZzVL6SGsZ4my1u82u%2B0TAaUfMEfmjKweKg7Mb8aX6JqfosYcogLEvfBTm96KQA2yw0So5ACSK0FnezP4xBGmZbb9jib1yu0M4S6eiBMrKBTTJqghbOM3dMWGyRNjU1%2Fnoz%2B%2BPQFm3uAX%2BGJ6b45P5lZBf8TeiBdSD3LQaE2y0LA5wtPesDMIBEbS2kYPhu4Ru%2FGDnoWIsP83p69%2FrqYOtXVq2ONuCBgPM6NnN8WoetxL3mBQi4V93kOScwG0tr%2FhICa9ETj%2BAHSPSMy5PI6JFI0cpSM2EHHlgrB0NtD7Ftkl9OwzSs6SCKovL6TlsVmwNkVDaT84SwMLLaFg30ISdWRFpArWs5sfW2aQa5CDZdh3A5Z2jxww0%2FbBr2zrg7mq17%2BehhcqORx397lEMYEpXutY5TSlze%2BcyBVxjs%2F%2Bixi7NAjz6f3ir0Bs6VE9GZ0bvOf5EqipIZzPSNSYwj4AuB0H1Cw1sLhwr16cpAc5meYRmaHx6JXZId2JtIJnWB9Yvk1YzffO1%2BDVkzr6q2DjqkVxepVfxD6rbTcKeBGIZcyEQBzrX1rPHSAsQQO3I9cP1Wvf3gvcB62sXp8NHpcKGE%2B4e51UYVajuc7ASLTNCXS1DDlktnEBjqkAXHid6mmiZmZQT1Zpi39AmoDwn6z0Afii8vN3r7KlsgfDj0Z0k7tvldxkFGovqoJ%2BPbafTIb2v1MopdRjvJ3P0yyQJ%2BHiRHYsbNZN6koiJbqL%2BuHqVQpYBjpkyTlLtyGEldg4U2Ur7ZryukTBVHOBLiZ%2B4XEPVd0Ex0qUhHTJ0j9IAvE21%2FKuMxXugv6Cx1PiXZE8%2BjzvSdcqrBJMLwR%2Fuhnla2g&X-Amz-Signature=a3d0c5690d7d12b72ee7e552301039152c4d149d2a0cad7171e1f13b56303564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGWY3FE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCThGhL18iaT%2B06SS0kpX1F2E%2B0ux68le3nLGkyMoaYgQIhAJRPC2FqUdQRZKTOuMIZrIdyvP5gUo%2BJwU01Fsef%2BO22KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw67i7IEgBOGGRb0WQq3AMduzfAcnnt0H9jYZzVL6SGsZ4my1u82u%2B0TAaUfMEfmjKweKg7Mb8aX6JqfosYcogLEvfBTm96KQA2yw0So5ACSK0FnezP4xBGmZbb9jib1yu0M4S6eiBMrKBTTJqghbOM3dMWGyRNjU1%2Fnoz%2B%2BPQFm3uAX%2BGJ6b45P5lZBf8TeiBdSD3LQaE2y0LA5wtPesDMIBEbS2kYPhu4Ru%2FGDnoWIsP83p69%2FrqYOtXVq2ONuCBgPM6NnN8WoetxL3mBQi4V93kOScwG0tr%2FhICa9ETj%2BAHSPSMy5PI6JFI0cpSM2EHHlgrB0NtD7Ftkl9OwzSs6SCKovL6TlsVmwNkVDaT84SwMLLaFg30ISdWRFpArWs5sfW2aQa5CDZdh3A5Z2jxww0%2FbBr2zrg7mq17%2BehhcqORx397lEMYEpXutY5TSlze%2BcyBVxjs%2F%2Bixi7NAjz6f3ir0Bs6VE9GZ0bvOf5EqipIZzPSNSYwj4AuB0H1Cw1sLhwr16cpAc5meYRmaHx6JXZId2JtIJnWB9Yvk1YzffO1%2BDVkzr6q2DjqkVxepVfxD6rbTcKeBGIZcyEQBzrX1rPHSAsQQO3I9cP1Wvf3gvcB62sXp8NHpcKGE%2B4e51UYVajuc7ASLTNCXS1DDlktnEBjqkAXHid6mmiZmZQT1Zpi39AmoDwn6z0Afii8vN3r7KlsgfDj0Z0k7tvldxkFGovqoJ%2BPbafTIb2v1MopdRjvJ3P0yyQJ%2BHiRHYsbNZN6koiJbqL%2BuHqVQpYBjpkyTlLtyGEldg4U2Ur7ZryukTBVHOBLiZ%2B4XEPVd0Ex0qUhHTJ0j9IAvE21%2FKuMxXugv6Cx1PiXZE8%2BjzvSdcqrBJMLwR%2Fuhnla2g&X-Amz-Signature=209b0e0fc6a7edf9c06e91724efa41cbd5f281a6c57e81987eef057ecd3870a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGWY3FE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCThGhL18iaT%2B06SS0kpX1F2E%2B0ux68le3nLGkyMoaYgQIhAJRPC2FqUdQRZKTOuMIZrIdyvP5gUo%2BJwU01Fsef%2BO22KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw67i7IEgBOGGRb0WQq3AMduzfAcnnt0H9jYZzVL6SGsZ4my1u82u%2B0TAaUfMEfmjKweKg7Mb8aX6JqfosYcogLEvfBTm96KQA2yw0So5ACSK0FnezP4xBGmZbb9jib1yu0M4S6eiBMrKBTTJqghbOM3dMWGyRNjU1%2Fnoz%2B%2BPQFm3uAX%2BGJ6b45P5lZBf8TeiBdSD3LQaE2y0LA5wtPesDMIBEbS2kYPhu4Ru%2FGDnoWIsP83p69%2FrqYOtXVq2ONuCBgPM6NnN8WoetxL3mBQi4V93kOScwG0tr%2FhICa9ETj%2BAHSPSMy5PI6JFI0cpSM2EHHlgrB0NtD7Ftkl9OwzSs6SCKovL6TlsVmwNkVDaT84SwMLLaFg30ISdWRFpArWs5sfW2aQa5CDZdh3A5Z2jxww0%2FbBr2zrg7mq17%2BehhcqORx397lEMYEpXutY5TSlze%2BcyBVxjs%2F%2Bixi7NAjz6f3ir0Bs6VE9GZ0bvOf5EqipIZzPSNSYwj4AuB0H1Cw1sLhwr16cpAc5meYRmaHx6JXZId2JtIJnWB9Yvk1YzffO1%2BDVkzr6q2DjqkVxepVfxD6rbTcKeBGIZcyEQBzrX1rPHSAsQQO3I9cP1Wvf3gvcB62sXp8NHpcKGE%2B4e51UYVajuc7ASLTNCXS1DDlktnEBjqkAXHid6mmiZmZQT1Zpi39AmoDwn6z0Afii8vN3r7KlsgfDj0Z0k7tvldxkFGovqoJ%2BPbafTIb2v1MopdRjvJ3P0yyQJ%2BHiRHYsbNZN6koiJbqL%2BuHqVQpYBjpkyTlLtyGEldg4U2Ur7ZryukTBVHOBLiZ%2B4XEPVd0Ex0qUhHTJ0j9IAvE21%2FKuMxXugv6Cx1PiXZE8%2BjzvSdcqrBJMLwR%2Fuhnla2g&X-Amz-Signature=45005ea70d6feede7937c4886157be3031273e7b96854d53faa442cd302f9489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
