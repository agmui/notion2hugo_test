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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=14d4c5339e5ac7257e53a41358d5702d11cbcf72cd697fab829b7b9360ad87d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=9826a877ffe571c738b4367d1903fffe77339ec4204326afcb789c5f9bbbd8be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=9f5e4b1acdbbd5884623abea40412fa00c2f70ad4931ed4f03b738db64645114&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=06cd32e37de62f96852aa9b6bc74c1270bb386e31c65c7427ff7f8253cfd75a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=eaaeba132110b9ce92c6920d74e798660c250ff404a364c6f96f0250678632ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=54dacb558b7e46bf12791d18ab2cceda4b91cfd2baf3e75e9fd6f0a2068328c8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=6a3cafb4097a83a9cfa4ef6f05d0dff6b7e4ea6dcaf929618eb7c8a97435cfe6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
