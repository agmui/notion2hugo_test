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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCYBNCC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD1HH%2BZS33tZmL4o4MssxpOlqLcudJstuOIIsdXl6grtAIhALP9EIlnazmysJMb1qOvVO5kDBAlXjN4eANrnKi0iiwVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWRgZGpP02gyGcxnAq3AOiRx7h7qdmGc3bHM8wyAJG6UAe4flfiX3pqEc7H%2BMrVi74TqVjlyX4t5q0cY1940wI99KCaU5Q3yS12%2F2JsAA%2Fzz0mM1YNsEgx6WUv%2B87fRk%2FUf7XZ8ksvmtVoI5of0nEs0qgd3qGrs3l7EgmU3rabOuLEHPd%2FAv6vmWOkiGUfMwpli8OaN9PGVIodK9o%2BOaN9Zji6xSUKBVCN2xuR75HJkyoUD6mMqJZNx2ujxDyGWg1nhkX0zdXTEUIH%2F6Y6reEGinpNsBDM0Ip2mxZit1i1FGlcpFeKOwpazIcLrl7%2FYsyoz7QJI5VbezfkXiILJhMVse5CjmLqJPgiiGVQNw7ap1%2BZPNqFYk2gmKCzurQZ2h1FzDEJ%2BdcWOJXHEvPDLJtdUK8y199sDHFV5P6DAqkTz6tw0mmfQN9JAsGybwBMfE9XiUXbEXjB86lml8SFcIS7inaPlAT2940DJ%2FdFmwQuCRk8mOi%2BUf5oCiyRBMojvt5ICYnRvy4qIYSek9PB7bdWc8JdaL5T%2BcxPLwE88WDmDVllud5kNM7bgTEMDYcbirw%2FL1iKNbsPimPvMOhpp4s6iDvXYfx9kryStDQDWdMeC3w2A4DV7yoGGpEfoT3ijs2m7SUH9jESZMr0%2BzDR2M7ABjqkAVX09q1pZy5oOGvSy4cZH7PEyc2h0%2FGUOFt62pi0W%2FFs%2Bka7Dp6pxyV2xvKO7mg6GdXJG1aFrzyxJsVPodNCClGMo9ovkR5vSQbp8ER7aOhfcR9een2EVQhDmW4CC4awK70U6gCCTCSwcWZ1qsomUso5QYwlwCaevF2Bn8oiM9Hmg7neLZnP398RwqPHZUPlqelm4MODAs8wKegWQk2GzOrN%2Be%2FD&X-Amz-Signature=ec2c2d3377df0633c05edd77c3d86a82304fe7c15915e33c35e3429a9ae6c8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCYBNCC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD1HH%2BZS33tZmL4o4MssxpOlqLcudJstuOIIsdXl6grtAIhALP9EIlnazmysJMb1qOvVO5kDBAlXjN4eANrnKi0iiwVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWRgZGpP02gyGcxnAq3AOiRx7h7qdmGc3bHM8wyAJG6UAe4flfiX3pqEc7H%2BMrVi74TqVjlyX4t5q0cY1940wI99KCaU5Q3yS12%2F2JsAA%2Fzz0mM1YNsEgx6WUv%2B87fRk%2FUf7XZ8ksvmtVoI5of0nEs0qgd3qGrs3l7EgmU3rabOuLEHPd%2FAv6vmWOkiGUfMwpli8OaN9PGVIodK9o%2BOaN9Zji6xSUKBVCN2xuR75HJkyoUD6mMqJZNx2ujxDyGWg1nhkX0zdXTEUIH%2F6Y6reEGinpNsBDM0Ip2mxZit1i1FGlcpFeKOwpazIcLrl7%2FYsyoz7QJI5VbezfkXiILJhMVse5CjmLqJPgiiGVQNw7ap1%2BZPNqFYk2gmKCzurQZ2h1FzDEJ%2BdcWOJXHEvPDLJtdUK8y199sDHFV5P6DAqkTz6tw0mmfQN9JAsGybwBMfE9XiUXbEXjB86lml8SFcIS7inaPlAT2940DJ%2FdFmwQuCRk8mOi%2BUf5oCiyRBMojvt5ICYnRvy4qIYSek9PB7bdWc8JdaL5T%2BcxPLwE88WDmDVllud5kNM7bgTEMDYcbirw%2FL1iKNbsPimPvMOhpp4s6iDvXYfx9kryStDQDWdMeC3w2A4DV7yoGGpEfoT3ijs2m7SUH9jESZMr0%2BzDR2M7ABjqkAVX09q1pZy5oOGvSy4cZH7PEyc2h0%2FGUOFt62pi0W%2FFs%2Bka7Dp6pxyV2xvKO7mg6GdXJG1aFrzyxJsVPodNCClGMo9ovkR5vSQbp8ER7aOhfcR9een2EVQhDmW4CC4awK70U6gCCTCSwcWZ1qsomUso5QYwlwCaevF2Bn8oiM9Hmg7neLZnP398RwqPHZUPlqelm4MODAs8wKegWQk2GzOrN%2Be%2FD&X-Amz-Signature=1cb5eeb37d58614fd15e77670d2948aa227d88a1dc1cf06595a960ff17c41cff&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCYBNCC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD1HH%2BZS33tZmL4o4MssxpOlqLcudJstuOIIsdXl6grtAIhALP9EIlnazmysJMb1qOvVO5kDBAlXjN4eANrnKi0iiwVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWRgZGpP02gyGcxnAq3AOiRx7h7qdmGc3bHM8wyAJG6UAe4flfiX3pqEc7H%2BMrVi74TqVjlyX4t5q0cY1940wI99KCaU5Q3yS12%2F2JsAA%2Fzz0mM1YNsEgx6WUv%2B87fRk%2FUf7XZ8ksvmtVoI5of0nEs0qgd3qGrs3l7EgmU3rabOuLEHPd%2FAv6vmWOkiGUfMwpli8OaN9PGVIodK9o%2BOaN9Zji6xSUKBVCN2xuR75HJkyoUD6mMqJZNx2ujxDyGWg1nhkX0zdXTEUIH%2F6Y6reEGinpNsBDM0Ip2mxZit1i1FGlcpFeKOwpazIcLrl7%2FYsyoz7QJI5VbezfkXiILJhMVse5CjmLqJPgiiGVQNw7ap1%2BZPNqFYk2gmKCzurQZ2h1FzDEJ%2BdcWOJXHEvPDLJtdUK8y199sDHFV5P6DAqkTz6tw0mmfQN9JAsGybwBMfE9XiUXbEXjB86lml8SFcIS7inaPlAT2940DJ%2FdFmwQuCRk8mOi%2BUf5oCiyRBMojvt5ICYnRvy4qIYSek9PB7bdWc8JdaL5T%2BcxPLwE88WDmDVllud5kNM7bgTEMDYcbirw%2FL1iKNbsPimPvMOhpp4s6iDvXYfx9kryStDQDWdMeC3w2A4DV7yoGGpEfoT3ijs2m7SUH9jESZMr0%2BzDR2M7ABjqkAVX09q1pZy5oOGvSy4cZH7PEyc2h0%2FGUOFt62pi0W%2FFs%2Bka7Dp6pxyV2xvKO7mg6GdXJG1aFrzyxJsVPodNCClGMo9ovkR5vSQbp8ER7aOhfcR9een2EVQhDmW4CC4awK70U6gCCTCSwcWZ1qsomUso5QYwlwCaevF2Bn8oiM9Hmg7neLZnP398RwqPHZUPlqelm4MODAs8wKegWQk2GzOrN%2Be%2FD&X-Amz-Signature=aa1f6f6bb75dc22b94195c693ab61ccfeee9d7680e095619083e5936b46d76e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCYBNCC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD1HH%2BZS33tZmL4o4MssxpOlqLcudJstuOIIsdXl6grtAIhALP9EIlnazmysJMb1qOvVO5kDBAlXjN4eANrnKi0iiwVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWRgZGpP02gyGcxnAq3AOiRx7h7qdmGc3bHM8wyAJG6UAe4flfiX3pqEc7H%2BMrVi74TqVjlyX4t5q0cY1940wI99KCaU5Q3yS12%2F2JsAA%2Fzz0mM1YNsEgx6WUv%2B87fRk%2FUf7XZ8ksvmtVoI5of0nEs0qgd3qGrs3l7EgmU3rabOuLEHPd%2FAv6vmWOkiGUfMwpli8OaN9PGVIodK9o%2BOaN9Zji6xSUKBVCN2xuR75HJkyoUD6mMqJZNx2ujxDyGWg1nhkX0zdXTEUIH%2F6Y6reEGinpNsBDM0Ip2mxZit1i1FGlcpFeKOwpazIcLrl7%2FYsyoz7QJI5VbezfkXiILJhMVse5CjmLqJPgiiGVQNw7ap1%2BZPNqFYk2gmKCzurQZ2h1FzDEJ%2BdcWOJXHEvPDLJtdUK8y199sDHFV5P6DAqkTz6tw0mmfQN9JAsGybwBMfE9XiUXbEXjB86lml8SFcIS7inaPlAT2940DJ%2FdFmwQuCRk8mOi%2BUf5oCiyRBMojvt5ICYnRvy4qIYSek9PB7bdWc8JdaL5T%2BcxPLwE88WDmDVllud5kNM7bgTEMDYcbirw%2FL1iKNbsPimPvMOhpp4s6iDvXYfx9kryStDQDWdMeC3w2A4DV7yoGGpEfoT3ijs2m7SUH9jESZMr0%2BzDR2M7ABjqkAVX09q1pZy5oOGvSy4cZH7PEyc2h0%2FGUOFt62pi0W%2FFs%2Bka7Dp6pxyV2xvKO7mg6GdXJG1aFrzyxJsVPodNCClGMo9ovkR5vSQbp8ER7aOhfcR9een2EVQhDmW4CC4awK70U6gCCTCSwcWZ1qsomUso5QYwlwCaevF2Bn8oiM9Hmg7neLZnP398RwqPHZUPlqelm4MODAs8wKegWQk2GzOrN%2Be%2FD&X-Amz-Signature=8a8533b4a52296acce923388b9191bd96c23edcff6b178a44caa950ac68c66a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCYBNCC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD1HH%2BZS33tZmL4o4MssxpOlqLcudJstuOIIsdXl6grtAIhALP9EIlnazmysJMb1qOvVO5kDBAlXjN4eANrnKi0iiwVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWRgZGpP02gyGcxnAq3AOiRx7h7qdmGc3bHM8wyAJG6UAe4flfiX3pqEc7H%2BMrVi74TqVjlyX4t5q0cY1940wI99KCaU5Q3yS12%2F2JsAA%2Fzz0mM1YNsEgx6WUv%2B87fRk%2FUf7XZ8ksvmtVoI5of0nEs0qgd3qGrs3l7EgmU3rabOuLEHPd%2FAv6vmWOkiGUfMwpli8OaN9PGVIodK9o%2BOaN9Zji6xSUKBVCN2xuR75HJkyoUD6mMqJZNx2ujxDyGWg1nhkX0zdXTEUIH%2F6Y6reEGinpNsBDM0Ip2mxZit1i1FGlcpFeKOwpazIcLrl7%2FYsyoz7QJI5VbezfkXiILJhMVse5CjmLqJPgiiGVQNw7ap1%2BZPNqFYk2gmKCzurQZ2h1FzDEJ%2BdcWOJXHEvPDLJtdUK8y199sDHFV5P6DAqkTz6tw0mmfQN9JAsGybwBMfE9XiUXbEXjB86lml8SFcIS7inaPlAT2940DJ%2FdFmwQuCRk8mOi%2BUf5oCiyRBMojvt5ICYnRvy4qIYSek9PB7bdWc8JdaL5T%2BcxPLwE88WDmDVllud5kNM7bgTEMDYcbirw%2FL1iKNbsPimPvMOhpp4s6iDvXYfx9kryStDQDWdMeC3w2A4DV7yoGGpEfoT3ijs2m7SUH9jESZMr0%2BzDR2M7ABjqkAVX09q1pZy5oOGvSy4cZH7PEyc2h0%2FGUOFt62pi0W%2FFs%2Bka7Dp6pxyV2xvKO7mg6GdXJG1aFrzyxJsVPodNCClGMo9ovkR5vSQbp8ER7aOhfcR9een2EVQhDmW4CC4awK70U6gCCTCSwcWZ1qsomUso5QYwlwCaevF2Bn8oiM9Hmg7neLZnP398RwqPHZUPlqelm4MODAs8wKegWQk2GzOrN%2Be%2FD&X-Amz-Signature=fed9b8abbb06af66ff86f4750784618801175bc8cceb61255cd0c9aa80201cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCYBNCC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD1HH%2BZS33tZmL4o4MssxpOlqLcudJstuOIIsdXl6grtAIhALP9EIlnazmysJMb1qOvVO5kDBAlXjN4eANrnKi0iiwVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWRgZGpP02gyGcxnAq3AOiRx7h7qdmGc3bHM8wyAJG6UAe4flfiX3pqEc7H%2BMrVi74TqVjlyX4t5q0cY1940wI99KCaU5Q3yS12%2F2JsAA%2Fzz0mM1YNsEgx6WUv%2B87fRk%2FUf7XZ8ksvmtVoI5of0nEs0qgd3qGrs3l7EgmU3rabOuLEHPd%2FAv6vmWOkiGUfMwpli8OaN9PGVIodK9o%2BOaN9Zji6xSUKBVCN2xuR75HJkyoUD6mMqJZNx2ujxDyGWg1nhkX0zdXTEUIH%2F6Y6reEGinpNsBDM0Ip2mxZit1i1FGlcpFeKOwpazIcLrl7%2FYsyoz7QJI5VbezfkXiILJhMVse5CjmLqJPgiiGVQNw7ap1%2BZPNqFYk2gmKCzurQZ2h1FzDEJ%2BdcWOJXHEvPDLJtdUK8y199sDHFV5P6DAqkTz6tw0mmfQN9JAsGybwBMfE9XiUXbEXjB86lml8SFcIS7inaPlAT2940DJ%2FdFmwQuCRk8mOi%2BUf5oCiyRBMojvt5ICYnRvy4qIYSek9PB7bdWc8JdaL5T%2BcxPLwE88WDmDVllud5kNM7bgTEMDYcbirw%2FL1iKNbsPimPvMOhpp4s6iDvXYfx9kryStDQDWdMeC3w2A4DV7yoGGpEfoT3ijs2m7SUH9jESZMr0%2BzDR2M7ABjqkAVX09q1pZy5oOGvSy4cZH7PEyc2h0%2FGUOFt62pi0W%2FFs%2Bka7Dp6pxyV2xvKO7mg6GdXJG1aFrzyxJsVPodNCClGMo9ovkR5vSQbp8ER7aOhfcR9een2EVQhDmW4CC4awK70U6gCCTCSwcWZ1qsomUso5QYwlwCaevF2Bn8oiM9Hmg7neLZnP398RwqPHZUPlqelm4MODAs8wKegWQk2GzOrN%2Be%2FD&X-Amz-Signature=46468892c4b2b26fa1cec45408de79ab316e98b4ff52a9ca367c19636f9eaaff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCYBNCC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD1HH%2BZS33tZmL4o4MssxpOlqLcudJstuOIIsdXl6grtAIhALP9EIlnazmysJMb1qOvVO5kDBAlXjN4eANrnKi0iiwVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWRgZGpP02gyGcxnAq3AOiRx7h7qdmGc3bHM8wyAJG6UAe4flfiX3pqEc7H%2BMrVi74TqVjlyX4t5q0cY1940wI99KCaU5Q3yS12%2F2JsAA%2Fzz0mM1YNsEgx6WUv%2B87fRk%2FUf7XZ8ksvmtVoI5of0nEs0qgd3qGrs3l7EgmU3rabOuLEHPd%2FAv6vmWOkiGUfMwpli8OaN9PGVIodK9o%2BOaN9Zji6xSUKBVCN2xuR75HJkyoUD6mMqJZNx2ujxDyGWg1nhkX0zdXTEUIH%2F6Y6reEGinpNsBDM0Ip2mxZit1i1FGlcpFeKOwpazIcLrl7%2FYsyoz7QJI5VbezfkXiILJhMVse5CjmLqJPgiiGVQNw7ap1%2BZPNqFYk2gmKCzurQZ2h1FzDEJ%2BdcWOJXHEvPDLJtdUK8y199sDHFV5P6DAqkTz6tw0mmfQN9JAsGybwBMfE9XiUXbEXjB86lml8SFcIS7inaPlAT2940DJ%2FdFmwQuCRk8mOi%2BUf5oCiyRBMojvt5ICYnRvy4qIYSek9PB7bdWc8JdaL5T%2BcxPLwE88WDmDVllud5kNM7bgTEMDYcbirw%2FL1iKNbsPimPvMOhpp4s6iDvXYfx9kryStDQDWdMeC3w2A4DV7yoGGpEfoT3ijs2m7SUH9jESZMr0%2BzDR2M7ABjqkAVX09q1pZy5oOGvSy4cZH7PEyc2h0%2FGUOFt62pi0W%2FFs%2Bka7Dp6pxyV2xvKO7mg6GdXJG1aFrzyxJsVPodNCClGMo9ovkR5vSQbp8ER7aOhfcR9een2EVQhDmW4CC4awK70U6gCCTCSwcWZ1qsomUso5QYwlwCaevF2Bn8oiM9Hmg7neLZnP398RwqPHZUPlqelm4MODAs8wKegWQk2GzOrN%2Be%2FD&X-Amz-Signature=42d7e4bb95c59b3a344c62a355fb46efd597a36ba5c350044045d9afccf16140&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
