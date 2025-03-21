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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667O2ZMFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFv5yE5270%2BXFP5fDdD7gXYKU7eXgT7Sespwfk5v7E9tAiAOJf%2FFQidoVb6Dbag1bzCs7HkngPtK2NgwbSTLctt4fyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjMLXrjvtO%2Fi4BwqnKtwDagxe5MDlrYIQCQO1y2ldOov6SCSJrIq8dZFV8ZV6pipjBRzjHMNwBSdDxDa0VSCciN%2BZCkB%2BGegpLnStsF8IUBaETt8hjN68XVnDUrF%2Fk5MzISA5NozpGcJYOTTyhBB4QECYNryqq4ZAIkMgtCjYAZI1tHmvMov%2FezFvfnEoCr2bpn2fR%2Bks2yAmqHFKeJXW%2FdU4Jk72teLGaL5oAfRZHBLr%2Bi%2FCk0hVPPnR%2FDi%2BT03iaO%2FdzFunDG3N8kwRKUhR56SDI%2FcOU6nikG9y7JEiRcIZwuVtpkamBAALGfvrmf%2BZ7bh1MBU8SdIOAiIQyxtUVZs7zDHUkLkROvYPM4Padm2K%2FiYbF5Dnf4ss0XbsrCFr5yjr7sziOkEHHZzlqrg%2FFjmFhx0Kx1jMDJH1uOByM1rgyuI%2FFGFgRE3oNNR701L1MPtHMFxZNru82PAVDEeEFeqGgKFDjsfTz%2FfTdACtsRJ5SgnRddn3Gcnk64BFA0zr4y0KN5xBCrZ0xX11M%2BatFTP391hzhNm4JFDC5fR3e71dG13W4Y5o%2BoRp0zis8B0BpGF1dDDMDMYDz62bp8zorpDU9b%2Bokj%2BZ2iQ0HZFkMPFv0RH%2FJT7TkdOyT1lN3owNR40xQLTiKeZUybYw56byvgY6pgHrGmnmuJfVeq0qam4MZXBF9rPwSHiARKPXqQCUNWpt3Fo4dmM57XIV1u9vrHT5jevL0CQl3sDGcRb8JTUdNeFsoVPdEqClC1E%2BvnpGcKvo8F2WLkRlB2rjs%2B7SSqMRGWv%2Fhxu%2FPkoD09sF8O4BLlgD2x%2FGgvZ%2FjGI2qMXEsM7cllz85Y1m%2FTQtOVtcgdBGghaL8NhfPqCj%2Bt%2Ftiv91iSTscqhwePOy&X-Amz-Signature=5a7a08621583353f6d23165cfc47e1c0596fd192a95b88d12f9f5157a29c2336&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667O2ZMFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFv5yE5270%2BXFP5fDdD7gXYKU7eXgT7Sespwfk5v7E9tAiAOJf%2FFQidoVb6Dbag1bzCs7HkngPtK2NgwbSTLctt4fyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjMLXrjvtO%2Fi4BwqnKtwDagxe5MDlrYIQCQO1y2ldOov6SCSJrIq8dZFV8ZV6pipjBRzjHMNwBSdDxDa0VSCciN%2BZCkB%2BGegpLnStsF8IUBaETt8hjN68XVnDUrF%2Fk5MzISA5NozpGcJYOTTyhBB4QECYNryqq4ZAIkMgtCjYAZI1tHmvMov%2FezFvfnEoCr2bpn2fR%2Bks2yAmqHFKeJXW%2FdU4Jk72teLGaL5oAfRZHBLr%2Bi%2FCk0hVPPnR%2FDi%2BT03iaO%2FdzFunDG3N8kwRKUhR56SDI%2FcOU6nikG9y7JEiRcIZwuVtpkamBAALGfvrmf%2BZ7bh1MBU8SdIOAiIQyxtUVZs7zDHUkLkROvYPM4Padm2K%2FiYbF5Dnf4ss0XbsrCFr5yjr7sziOkEHHZzlqrg%2FFjmFhx0Kx1jMDJH1uOByM1rgyuI%2FFGFgRE3oNNR701L1MPtHMFxZNru82PAVDEeEFeqGgKFDjsfTz%2FfTdACtsRJ5SgnRddn3Gcnk64BFA0zr4y0KN5xBCrZ0xX11M%2BatFTP391hzhNm4JFDC5fR3e71dG13W4Y5o%2BoRp0zis8B0BpGF1dDDMDMYDz62bp8zorpDU9b%2Bokj%2BZ2iQ0HZFkMPFv0RH%2FJT7TkdOyT1lN3owNR40xQLTiKeZUybYw56byvgY6pgHrGmnmuJfVeq0qam4MZXBF9rPwSHiARKPXqQCUNWpt3Fo4dmM57XIV1u9vrHT5jevL0CQl3sDGcRb8JTUdNeFsoVPdEqClC1E%2BvnpGcKvo8F2WLkRlB2rjs%2B7SSqMRGWv%2Fhxu%2FPkoD09sF8O4BLlgD2x%2FGgvZ%2FjGI2qMXEsM7cllz85Y1m%2FTQtOVtcgdBGghaL8NhfPqCj%2Bt%2Ftiv91iSTscqhwePOy&X-Amz-Signature=779baa01a04cb8e726cf9402baf3aafe8664d32cc9155baa71ccc5c0f5acc9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667O2ZMFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFv5yE5270%2BXFP5fDdD7gXYKU7eXgT7Sespwfk5v7E9tAiAOJf%2FFQidoVb6Dbag1bzCs7HkngPtK2NgwbSTLctt4fyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjMLXrjvtO%2Fi4BwqnKtwDagxe5MDlrYIQCQO1y2ldOov6SCSJrIq8dZFV8ZV6pipjBRzjHMNwBSdDxDa0VSCciN%2BZCkB%2BGegpLnStsF8IUBaETt8hjN68XVnDUrF%2Fk5MzISA5NozpGcJYOTTyhBB4QECYNryqq4ZAIkMgtCjYAZI1tHmvMov%2FezFvfnEoCr2bpn2fR%2Bks2yAmqHFKeJXW%2FdU4Jk72teLGaL5oAfRZHBLr%2Bi%2FCk0hVPPnR%2FDi%2BT03iaO%2FdzFunDG3N8kwRKUhR56SDI%2FcOU6nikG9y7JEiRcIZwuVtpkamBAALGfvrmf%2BZ7bh1MBU8SdIOAiIQyxtUVZs7zDHUkLkROvYPM4Padm2K%2FiYbF5Dnf4ss0XbsrCFr5yjr7sziOkEHHZzlqrg%2FFjmFhx0Kx1jMDJH1uOByM1rgyuI%2FFGFgRE3oNNR701L1MPtHMFxZNru82PAVDEeEFeqGgKFDjsfTz%2FfTdACtsRJ5SgnRddn3Gcnk64BFA0zr4y0KN5xBCrZ0xX11M%2BatFTP391hzhNm4JFDC5fR3e71dG13W4Y5o%2BoRp0zis8B0BpGF1dDDMDMYDz62bp8zorpDU9b%2Bokj%2BZ2iQ0HZFkMPFv0RH%2FJT7TkdOyT1lN3owNR40xQLTiKeZUybYw56byvgY6pgHrGmnmuJfVeq0qam4MZXBF9rPwSHiARKPXqQCUNWpt3Fo4dmM57XIV1u9vrHT5jevL0CQl3sDGcRb8JTUdNeFsoVPdEqClC1E%2BvnpGcKvo8F2WLkRlB2rjs%2B7SSqMRGWv%2Fhxu%2FPkoD09sF8O4BLlgD2x%2FGgvZ%2FjGI2qMXEsM7cllz85Y1m%2FTQtOVtcgdBGghaL8NhfPqCj%2Bt%2Ftiv91iSTscqhwePOy&X-Amz-Signature=ec55013faec8c81eba8b3619e72952892312bcb25367058db547a4f6cca22050&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667O2ZMFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFv5yE5270%2BXFP5fDdD7gXYKU7eXgT7Sespwfk5v7E9tAiAOJf%2FFQidoVb6Dbag1bzCs7HkngPtK2NgwbSTLctt4fyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjMLXrjvtO%2Fi4BwqnKtwDagxe5MDlrYIQCQO1y2ldOov6SCSJrIq8dZFV8ZV6pipjBRzjHMNwBSdDxDa0VSCciN%2BZCkB%2BGegpLnStsF8IUBaETt8hjN68XVnDUrF%2Fk5MzISA5NozpGcJYOTTyhBB4QECYNryqq4ZAIkMgtCjYAZI1tHmvMov%2FezFvfnEoCr2bpn2fR%2Bks2yAmqHFKeJXW%2FdU4Jk72teLGaL5oAfRZHBLr%2Bi%2FCk0hVPPnR%2FDi%2BT03iaO%2FdzFunDG3N8kwRKUhR56SDI%2FcOU6nikG9y7JEiRcIZwuVtpkamBAALGfvrmf%2BZ7bh1MBU8SdIOAiIQyxtUVZs7zDHUkLkROvYPM4Padm2K%2FiYbF5Dnf4ss0XbsrCFr5yjr7sziOkEHHZzlqrg%2FFjmFhx0Kx1jMDJH1uOByM1rgyuI%2FFGFgRE3oNNR701L1MPtHMFxZNru82PAVDEeEFeqGgKFDjsfTz%2FfTdACtsRJ5SgnRddn3Gcnk64BFA0zr4y0KN5xBCrZ0xX11M%2BatFTP391hzhNm4JFDC5fR3e71dG13W4Y5o%2BoRp0zis8B0BpGF1dDDMDMYDz62bp8zorpDU9b%2Bokj%2BZ2iQ0HZFkMPFv0RH%2FJT7TkdOyT1lN3owNR40xQLTiKeZUybYw56byvgY6pgHrGmnmuJfVeq0qam4MZXBF9rPwSHiARKPXqQCUNWpt3Fo4dmM57XIV1u9vrHT5jevL0CQl3sDGcRb8JTUdNeFsoVPdEqClC1E%2BvnpGcKvo8F2WLkRlB2rjs%2B7SSqMRGWv%2Fhxu%2FPkoD09sF8O4BLlgD2x%2FGgvZ%2FjGI2qMXEsM7cllz85Y1m%2FTQtOVtcgdBGghaL8NhfPqCj%2Bt%2Ftiv91iSTscqhwePOy&X-Amz-Signature=8a442d2dc00f19bb3b2515953e7bbd15d8431c40498430debd4a5cd7bb8f150e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667O2ZMFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFv5yE5270%2BXFP5fDdD7gXYKU7eXgT7Sespwfk5v7E9tAiAOJf%2FFQidoVb6Dbag1bzCs7HkngPtK2NgwbSTLctt4fyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjMLXrjvtO%2Fi4BwqnKtwDagxe5MDlrYIQCQO1y2ldOov6SCSJrIq8dZFV8ZV6pipjBRzjHMNwBSdDxDa0VSCciN%2BZCkB%2BGegpLnStsF8IUBaETt8hjN68XVnDUrF%2Fk5MzISA5NozpGcJYOTTyhBB4QECYNryqq4ZAIkMgtCjYAZI1tHmvMov%2FezFvfnEoCr2bpn2fR%2Bks2yAmqHFKeJXW%2FdU4Jk72teLGaL5oAfRZHBLr%2Bi%2FCk0hVPPnR%2FDi%2BT03iaO%2FdzFunDG3N8kwRKUhR56SDI%2FcOU6nikG9y7JEiRcIZwuVtpkamBAALGfvrmf%2BZ7bh1MBU8SdIOAiIQyxtUVZs7zDHUkLkROvYPM4Padm2K%2FiYbF5Dnf4ss0XbsrCFr5yjr7sziOkEHHZzlqrg%2FFjmFhx0Kx1jMDJH1uOByM1rgyuI%2FFGFgRE3oNNR701L1MPtHMFxZNru82PAVDEeEFeqGgKFDjsfTz%2FfTdACtsRJ5SgnRddn3Gcnk64BFA0zr4y0KN5xBCrZ0xX11M%2BatFTP391hzhNm4JFDC5fR3e71dG13W4Y5o%2BoRp0zis8B0BpGF1dDDMDMYDz62bp8zorpDU9b%2Bokj%2BZ2iQ0HZFkMPFv0RH%2FJT7TkdOyT1lN3owNR40xQLTiKeZUybYw56byvgY6pgHrGmnmuJfVeq0qam4MZXBF9rPwSHiARKPXqQCUNWpt3Fo4dmM57XIV1u9vrHT5jevL0CQl3sDGcRb8JTUdNeFsoVPdEqClC1E%2BvnpGcKvo8F2WLkRlB2rjs%2B7SSqMRGWv%2Fhxu%2FPkoD09sF8O4BLlgD2x%2FGgvZ%2FjGI2qMXEsM7cllz85Y1m%2FTQtOVtcgdBGghaL8NhfPqCj%2Bt%2Ftiv91iSTscqhwePOy&X-Amz-Signature=d2e1adef46aed0ce67de19307cc3b02266a89f68ac047763c4123bbde36aefae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667O2ZMFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFv5yE5270%2BXFP5fDdD7gXYKU7eXgT7Sespwfk5v7E9tAiAOJf%2FFQidoVb6Dbag1bzCs7HkngPtK2NgwbSTLctt4fyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjMLXrjvtO%2Fi4BwqnKtwDagxe5MDlrYIQCQO1y2ldOov6SCSJrIq8dZFV8ZV6pipjBRzjHMNwBSdDxDa0VSCciN%2BZCkB%2BGegpLnStsF8IUBaETt8hjN68XVnDUrF%2Fk5MzISA5NozpGcJYOTTyhBB4QECYNryqq4ZAIkMgtCjYAZI1tHmvMov%2FezFvfnEoCr2bpn2fR%2Bks2yAmqHFKeJXW%2FdU4Jk72teLGaL5oAfRZHBLr%2Bi%2FCk0hVPPnR%2FDi%2BT03iaO%2FdzFunDG3N8kwRKUhR56SDI%2FcOU6nikG9y7JEiRcIZwuVtpkamBAALGfvrmf%2BZ7bh1MBU8SdIOAiIQyxtUVZs7zDHUkLkROvYPM4Padm2K%2FiYbF5Dnf4ss0XbsrCFr5yjr7sziOkEHHZzlqrg%2FFjmFhx0Kx1jMDJH1uOByM1rgyuI%2FFGFgRE3oNNR701L1MPtHMFxZNru82PAVDEeEFeqGgKFDjsfTz%2FfTdACtsRJ5SgnRddn3Gcnk64BFA0zr4y0KN5xBCrZ0xX11M%2BatFTP391hzhNm4JFDC5fR3e71dG13W4Y5o%2BoRp0zis8B0BpGF1dDDMDMYDz62bp8zorpDU9b%2Bokj%2BZ2iQ0HZFkMPFv0RH%2FJT7TkdOyT1lN3owNR40xQLTiKeZUybYw56byvgY6pgHrGmnmuJfVeq0qam4MZXBF9rPwSHiARKPXqQCUNWpt3Fo4dmM57XIV1u9vrHT5jevL0CQl3sDGcRb8JTUdNeFsoVPdEqClC1E%2BvnpGcKvo8F2WLkRlB2rjs%2B7SSqMRGWv%2Fhxu%2FPkoD09sF8O4BLlgD2x%2FGgvZ%2FjGI2qMXEsM7cllz85Y1m%2FTQtOVtcgdBGghaL8NhfPqCj%2Bt%2Ftiv91iSTscqhwePOy&X-Amz-Signature=f1caab8cdf450d1bb05fc92114fbce1d78d0ceb4e17c7f397cf41489012a0f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667O2ZMFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFv5yE5270%2BXFP5fDdD7gXYKU7eXgT7Sespwfk5v7E9tAiAOJf%2FFQidoVb6Dbag1bzCs7HkngPtK2NgwbSTLctt4fyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjMLXrjvtO%2Fi4BwqnKtwDagxe5MDlrYIQCQO1y2ldOov6SCSJrIq8dZFV8ZV6pipjBRzjHMNwBSdDxDa0VSCciN%2BZCkB%2BGegpLnStsF8IUBaETt8hjN68XVnDUrF%2Fk5MzISA5NozpGcJYOTTyhBB4QECYNryqq4ZAIkMgtCjYAZI1tHmvMov%2FezFvfnEoCr2bpn2fR%2Bks2yAmqHFKeJXW%2FdU4Jk72teLGaL5oAfRZHBLr%2Bi%2FCk0hVPPnR%2FDi%2BT03iaO%2FdzFunDG3N8kwRKUhR56SDI%2FcOU6nikG9y7JEiRcIZwuVtpkamBAALGfvrmf%2BZ7bh1MBU8SdIOAiIQyxtUVZs7zDHUkLkROvYPM4Padm2K%2FiYbF5Dnf4ss0XbsrCFr5yjr7sziOkEHHZzlqrg%2FFjmFhx0Kx1jMDJH1uOByM1rgyuI%2FFGFgRE3oNNR701L1MPtHMFxZNru82PAVDEeEFeqGgKFDjsfTz%2FfTdACtsRJ5SgnRddn3Gcnk64BFA0zr4y0KN5xBCrZ0xX11M%2BatFTP391hzhNm4JFDC5fR3e71dG13W4Y5o%2BoRp0zis8B0BpGF1dDDMDMYDz62bp8zorpDU9b%2Bokj%2BZ2iQ0HZFkMPFv0RH%2FJT7TkdOyT1lN3owNR40xQLTiKeZUybYw56byvgY6pgHrGmnmuJfVeq0qam4MZXBF9rPwSHiARKPXqQCUNWpt3Fo4dmM57XIV1u9vrHT5jevL0CQl3sDGcRb8JTUdNeFsoVPdEqClC1E%2BvnpGcKvo8F2WLkRlB2rjs%2B7SSqMRGWv%2Fhxu%2FPkoD09sF8O4BLlgD2x%2FGgvZ%2FjGI2qMXEsM7cllz85Y1m%2FTQtOVtcgdBGghaL8NhfPqCj%2Bt%2Ftiv91iSTscqhwePOy&X-Amz-Signature=3a38f05b7d9a1e464539298c91d77d8d76d61052baaca02f2097d6c8b2f251af&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
