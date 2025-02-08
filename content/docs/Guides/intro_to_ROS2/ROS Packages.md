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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HY3VNXE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiU3fYYI3PTvNxzi%2B4wFdcryFOwNtrkSgQO%2Fd56sjtGwIgaRhku0jGkLfX4SFA4WiiESfTJVKADF5%2FMCYfy86kGKUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD4JfIJH2CqnS51bSrcA8h1rwvn5Z3%2BDmj0pql5rVMa2sARevs%2B0ESDlZiR7PHwnqim8qKpvxH82hrc86sIcIGPFZADEHv3izH4NhAL%2B2OwaeGsoFgGEOfAMiDTkpimq81nK8qbJCb93GiG%2FbxdZtbfcBglKJeg6KGbSHFnCcKriqrBtUzH521zQ7sTa%2F5hpinWxCQ9Vu5QZv3mjuMyp%2Bxul18HIqg469pKpy%2FrZa%2FQmOk%2FaaNgJYA2IVbmuBKEmDTo4kWCKnMj3fbyK0xZ5o8DzRMbHzf4sI7RaqXdcCvBX8Maw1REjdrItTkHM3SaEn4VXdQ6hWkvz0tNRoRLo9altSniH0Bh5ibio%2B8IjmzyUXd9IzysXaATVLGsYrw7WCVNIdWnhh8JTD18FLfuRuwX5gk%2BmbHCKUpVErMATIAiY0P53ri0j9lxquE%2BrwIGHGnKDIKrMMTPlOLgiEE4euA5DnH7CSCcQzL8TP%2FqeMrr9FHidKXymjfxa8pSgDnfNHYuaduqKF1G9cmME%2F1%2FLCQZiYxtOlrE3Zy6yuFqV1Bwb0irFOE9Ej4EkH%2FsLJIu2vGskCv3NfhXOxdO6tLky706qZ3PW%2BXuABjSQ5PhtYflobg2HmKhvQhjuywyNVw3CtiEJEBF6JmWQ4jzMJyGnb0GOqUBMmlxvSGUYuhs3kC46qjsctg6Lr1KDt3vGe7REhIsHe9Q53%2BoQeDSvoa1p8ybRV2ZIaDFOCA5kqfd2vA6Mxpo%2B8wVU%2BbU186bnp%2BLjt7KDIDeaZvhCZ7NKiQ7GGZ%2Bdkob%2FuBlvJtR1%2F36uL5T6ACeCflCyBh0GoaZ8cF4yP%2F77UYf6s2%2B2Q5qwIdx9sQiKUZvTdAfhrhddpKWr1Qup0BmELN2S5rH&X-Amz-Signature=c642ea6b07f1df11e6a2d1ad10e1528069e9e3270f98a137ac33f57691534bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HY3VNXE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiU3fYYI3PTvNxzi%2B4wFdcryFOwNtrkSgQO%2Fd56sjtGwIgaRhku0jGkLfX4SFA4WiiESfTJVKADF5%2FMCYfy86kGKUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD4JfIJH2CqnS51bSrcA8h1rwvn5Z3%2BDmj0pql5rVMa2sARevs%2B0ESDlZiR7PHwnqim8qKpvxH82hrc86sIcIGPFZADEHv3izH4NhAL%2B2OwaeGsoFgGEOfAMiDTkpimq81nK8qbJCb93GiG%2FbxdZtbfcBglKJeg6KGbSHFnCcKriqrBtUzH521zQ7sTa%2F5hpinWxCQ9Vu5QZv3mjuMyp%2Bxul18HIqg469pKpy%2FrZa%2FQmOk%2FaaNgJYA2IVbmuBKEmDTo4kWCKnMj3fbyK0xZ5o8DzRMbHzf4sI7RaqXdcCvBX8Maw1REjdrItTkHM3SaEn4VXdQ6hWkvz0tNRoRLo9altSniH0Bh5ibio%2B8IjmzyUXd9IzysXaATVLGsYrw7WCVNIdWnhh8JTD18FLfuRuwX5gk%2BmbHCKUpVErMATIAiY0P53ri0j9lxquE%2BrwIGHGnKDIKrMMTPlOLgiEE4euA5DnH7CSCcQzL8TP%2FqeMrr9FHidKXymjfxa8pSgDnfNHYuaduqKF1G9cmME%2F1%2FLCQZiYxtOlrE3Zy6yuFqV1Bwb0irFOE9Ej4EkH%2FsLJIu2vGskCv3NfhXOxdO6tLky706qZ3PW%2BXuABjSQ5PhtYflobg2HmKhvQhjuywyNVw3CtiEJEBF6JmWQ4jzMJyGnb0GOqUBMmlxvSGUYuhs3kC46qjsctg6Lr1KDt3vGe7REhIsHe9Q53%2BoQeDSvoa1p8ybRV2ZIaDFOCA5kqfd2vA6Mxpo%2B8wVU%2BbU186bnp%2BLjt7KDIDeaZvhCZ7NKiQ7GGZ%2Bdkob%2FuBlvJtR1%2F36uL5T6ACeCflCyBh0GoaZ8cF4yP%2F77UYf6s2%2B2Q5qwIdx9sQiKUZvTdAfhrhddpKWr1Qup0BmELN2S5rH&X-Amz-Signature=10cee6a94133f5664af6a7addb7f807ff81556813a015e92b37ce69e47d41c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HY3VNXE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiU3fYYI3PTvNxzi%2B4wFdcryFOwNtrkSgQO%2Fd56sjtGwIgaRhku0jGkLfX4SFA4WiiESfTJVKADF5%2FMCYfy86kGKUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD4JfIJH2CqnS51bSrcA8h1rwvn5Z3%2BDmj0pql5rVMa2sARevs%2B0ESDlZiR7PHwnqim8qKpvxH82hrc86sIcIGPFZADEHv3izH4NhAL%2B2OwaeGsoFgGEOfAMiDTkpimq81nK8qbJCb93GiG%2FbxdZtbfcBglKJeg6KGbSHFnCcKriqrBtUzH521zQ7sTa%2F5hpinWxCQ9Vu5QZv3mjuMyp%2Bxul18HIqg469pKpy%2FrZa%2FQmOk%2FaaNgJYA2IVbmuBKEmDTo4kWCKnMj3fbyK0xZ5o8DzRMbHzf4sI7RaqXdcCvBX8Maw1REjdrItTkHM3SaEn4VXdQ6hWkvz0tNRoRLo9altSniH0Bh5ibio%2B8IjmzyUXd9IzysXaATVLGsYrw7WCVNIdWnhh8JTD18FLfuRuwX5gk%2BmbHCKUpVErMATIAiY0P53ri0j9lxquE%2BrwIGHGnKDIKrMMTPlOLgiEE4euA5DnH7CSCcQzL8TP%2FqeMrr9FHidKXymjfxa8pSgDnfNHYuaduqKF1G9cmME%2F1%2FLCQZiYxtOlrE3Zy6yuFqV1Bwb0irFOE9Ej4EkH%2FsLJIu2vGskCv3NfhXOxdO6tLky706qZ3PW%2BXuABjSQ5PhtYflobg2HmKhvQhjuywyNVw3CtiEJEBF6JmWQ4jzMJyGnb0GOqUBMmlxvSGUYuhs3kC46qjsctg6Lr1KDt3vGe7REhIsHe9Q53%2BoQeDSvoa1p8ybRV2ZIaDFOCA5kqfd2vA6Mxpo%2B8wVU%2BbU186bnp%2BLjt7KDIDeaZvhCZ7NKiQ7GGZ%2Bdkob%2FuBlvJtR1%2F36uL5T6ACeCflCyBh0GoaZ8cF4yP%2F77UYf6s2%2B2Q5qwIdx9sQiKUZvTdAfhrhddpKWr1Qup0BmELN2S5rH&X-Amz-Signature=c8f9bd8242abb11aeb11bfba921763d66f6ef92d7e9f7ab284ace42ab7a145ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HY3VNXE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiU3fYYI3PTvNxzi%2B4wFdcryFOwNtrkSgQO%2Fd56sjtGwIgaRhku0jGkLfX4SFA4WiiESfTJVKADF5%2FMCYfy86kGKUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD4JfIJH2CqnS51bSrcA8h1rwvn5Z3%2BDmj0pql5rVMa2sARevs%2B0ESDlZiR7PHwnqim8qKpvxH82hrc86sIcIGPFZADEHv3izH4NhAL%2B2OwaeGsoFgGEOfAMiDTkpimq81nK8qbJCb93GiG%2FbxdZtbfcBglKJeg6KGbSHFnCcKriqrBtUzH521zQ7sTa%2F5hpinWxCQ9Vu5QZv3mjuMyp%2Bxul18HIqg469pKpy%2FrZa%2FQmOk%2FaaNgJYA2IVbmuBKEmDTo4kWCKnMj3fbyK0xZ5o8DzRMbHzf4sI7RaqXdcCvBX8Maw1REjdrItTkHM3SaEn4VXdQ6hWkvz0tNRoRLo9altSniH0Bh5ibio%2B8IjmzyUXd9IzysXaATVLGsYrw7WCVNIdWnhh8JTD18FLfuRuwX5gk%2BmbHCKUpVErMATIAiY0P53ri0j9lxquE%2BrwIGHGnKDIKrMMTPlOLgiEE4euA5DnH7CSCcQzL8TP%2FqeMrr9FHidKXymjfxa8pSgDnfNHYuaduqKF1G9cmME%2F1%2FLCQZiYxtOlrE3Zy6yuFqV1Bwb0irFOE9Ej4EkH%2FsLJIu2vGskCv3NfhXOxdO6tLky706qZ3PW%2BXuABjSQ5PhtYflobg2HmKhvQhjuywyNVw3CtiEJEBF6JmWQ4jzMJyGnb0GOqUBMmlxvSGUYuhs3kC46qjsctg6Lr1KDt3vGe7REhIsHe9Q53%2BoQeDSvoa1p8ybRV2ZIaDFOCA5kqfd2vA6Mxpo%2B8wVU%2BbU186bnp%2BLjt7KDIDeaZvhCZ7NKiQ7GGZ%2Bdkob%2FuBlvJtR1%2F36uL5T6ACeCflCyBh0GoaZ8cF4yP%2F77UYf6s2%2B2Q5qwIdx9sQiKUZvTdAfhrhddpKWr1Qup0BmELN2S5rH&X-Amz-Signature=44b411871624f8e6aedd21e1b693ec63d9d04cdc4a89bde2f50a30aa8c19a6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HY3VNXE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiU3fYYI3PTvNxzi%2B4wFdcryFOwNtrkSgQO%2Fd56sjtGwIgaRhku0jGkLfX4SFA4WiiESfTJVKADF5%2FMCYfy86kGKUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD4JfIJH2CqnS51bSrcA8h1rwvn5Z3%2BDmj0pql5rVMa2sARevs%2B0ESDlZiR7PHwnqim8qKpvxH82hrc86sIcIGPFZADEHv3izH4NhAL%2B2OwaeGsoFgGEOfAMiDTkpimq81nK8qbJCb93GiG%2FbxdZtbfcBglKJeg6KGbSHFnCcKriqrBtUzH521zQ7sTa%2F5hpinWxCQ9Vu5QZv3mjuMyp%2Bxul18HIqg469pKpy%2FrZa%2FQmOk%2FaaNgJYA2IVbmuBKEmDTo4kWCKnMj3fbyK0xZ5o8DzRMbHzf4sI7RaqXdcCvBX8Maw1REjdrItTkHM3SaEn4VXdQ6hWkvz0tNRoRLo9altSniH0Bh5ibio%2B8IjmzyUXd9IzysXaATVLGsYrw7WCVNIdWnhh8JTD18FLfuRuwX5gk%2BmbHCKUpVErMATIAiY0P53ri0j9lxquE%2BrwIGHGnKDIKrMMTPlOLgiEE4euA5DnH7CSCcQzL8TP%2FqeMrr9FHidKXymjfxa8pSgDnfNHYuaduqKF1G9cmME%2F1%2FLCQZiYxtOlrE3Zy6yuFqV1Bwb0irFOE9Ej4EkH%2FsLJIu2vGskCv3NfhXOxdO6tLky706qZ3PW%2BXuABjSQ5PhtYflobg2HmKhvQhjuywyNVw3CtiEJEBF6JmWQ4jzMJyGnb0GOqUBMmlxvSGUYuhs3kC46qjsctg6Lr1KDt3vGe7REhIsHe9Q53%2BoQeDSvoa1p8ybRV2ZIaDFOCA5kqfd2vA6Mxpo%2B8wVU%2BbU186bnp%2BLjt7KDIDeaZvhCZ7NKiQ7GGZ%2Bdkob%2FuBlvJtR1%2F36uL5T6ACeCflCyBh0GoaZ8cF4yP%2F77UYf6s2%2B2Q5qwIdx9sQiKUZvTdAfhrhddpKWr1Qup0BmELN2S5rH&X-Amz-Signature=67a6fdec67796350573826e8d403617ee4dee8faa622e8d2e21187e46d7ea37f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HY3VNXE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiU3fYYI3PTvNxzi%2B4wFdcryFOwNtrkSgQO%2Fd56sjtGwIgaRhku0jGkLfX4SFA4WiiESfTJVKADF5%2FMCYfy86kGKUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD4JfIJH2CqnS51bSrcA8h1rwvn5Z3%2BDmj0pql5rVMa2sARevs%2B0ESDlZiR7PHwnqim8qKpvxH82hrc86sIcIGPFZADEHv3izH4NhAL%2B2OwaeGsoFgGEOfAMiDTkpimq81nK8qbJCb93GiG%2FbxdZtbfcBglKJeg6KGbSHFnCcKriqrBtUzH521zQ7sTa%2F5hpinWxCQ9Vu5QZv3mjuMyp%2Bxul18HIqg469pKpy%2FrZa%2FQmOk%2FaaNgJYA2IVbmuBKEmDTo4kWCKnMj3fbyK0xZ5o8DzRMbHzf4sI7RaqXdcCvBX8Maw1REjdrItTkHM3SaEn4VXdQ6hWkvz0tNRoRLo9altSniH0Bh5ibio%2B8IjmzyUXd9IzysXaATVLGsYrw7WCVNIdWnhh8JTD18FLfuRuwX5gk%2BmbHCKUpVErMATIAiY0P53ri0j9lxquE%2BrwIGHGnKDIKrMMTPlOLgiEE4euA5DnH7CSCcQzL8TP%2FqeMrr9FHidKXymjfxa8pSgDnfNHYuaduqKF1G9cmME%2F1%2FLCQZiYxtOlrE3Zy6yuFqV1Bwb0irFOE9Ej4EkH%2FsLJIu2vGskCv3NfhXOxdO6tLky706qZ3PW%2BXuABjSQ5PhtYflobg2HmKhvQhjuywyNVw3CtiEJEBF6JmWQ4jzMJyGnb0GOqUBMmlxvSGUYuhs3kC46qjsctg6Lr1KDt3vGe7REhIsHe9Q53%2BoQeDSvoa1p8ybRV2ZIaDFOCA5kqfd2vA6Mxpo%2B8wVU%2BbU186bnp%2BLjt7KDIDeaZvhCZ7NKiQ7GGZ%2Bdkob%2FuBlvJtR1%2F36uL5T6ACeCflCyBh0GoaZ8cF4yP%2F77UYf6s2%2B2Q5qwIdx9sQiKUZvTdAfhrhddpKWr1Qup0BmELN2S5rH&X-Amz-Signature=d694d8a530820da2cc06f2e36ead4a87012d4b7f370eca5fa77a038512f215e0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HY3VNXE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiU3fYYI3PTvNxzi%2B4wFdcryFOwNtrkSgQO%2Fd56sjtGwIgaRhku0jGkLfX4SFA4WiiESfTJVKADF5%2FMCYfy86kGKUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOD4JfIJH2CqnS51bSrcA8h1rwvn5Z3%2BDmj0pql5rVMa2sARevs%2B0ESDlZiR7PHwnqim8qKpvxH82hrc86sIcIGPFZADEHv3izH4NhAL%2B2OwaeGsoFgGEOfAMiDTkpimq81nK8qbJCb93GiG%2FbxdZtbfcBglKJeg6KGbSHFnCcKriqrBtUzH521zQ7sTa%2F5hpinWxCQ9Vu5QZv3mjuMyp%2Bxul18HIqg469pKpy%2FrZa%2FQmOk%2FaaNgJYA2IVbmuBKEmDTo4kWCKnMj3fbyK0xZ5o8DzRMbHzf4sI7RaqXdcCvBX8Maw1REjdrItTkHM3SaEn4VXdQ6hWkvz0tNRoRLo9altSniH0Bh5ibio%2B8IjmzyUXd9IzysXaATVLGsYrw7WCVNIdWnhh8JTD18FLfuRuwX5gk%2BmbHCKUpVErMATIAiY0P53ri0j9lxquE%2BrwIGHGnKDIKrMMTPlOLgiEE4euA5DnH7CSCcQzL8TP%2FqeMrr9FHidKXymjfxa8pSgDnfNHYuaduqKF1G9cmME%2F1%2FLCQZiYxtOlrE3Zy6yuFqV1Bwb0irFOE9Ej4EkH%2FsLJIu2vGskCv3NfhXOxdO6tLky706qZ3PW%2BXuABjSQ5PhtYflobg2HmKhvQhjuywyNVw3CtiEJEBF6JmWQ4jzMJyGnb0GOqUBMmlxvSGUYuhs3kC46qjsctg6Lr1KDt3vGe7REhIsHe9Q53%2BoQeDSvoa1p8ybRV2ZIaDFOCA5kqfd2vA6Mxpo%2B8wVU%2BbU186bnp%2BLjt7KDIDeaZvhCZ7NKiQ7GGZ%2Bdkob%2FuBlvJtR1%2F36uL5T6ACeCflCyBh0GoaZ8cF4yP%2F77UYf6s2%2B2Q5qwIdx9sQiKUZvTdAfhrhddpKWr1Qup0BmELN2S5rH&X-Amz-Signature=8fcee2ab7ad41022fe4525cf9334c8ace384342339525fb149ded2c48f3df605&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
