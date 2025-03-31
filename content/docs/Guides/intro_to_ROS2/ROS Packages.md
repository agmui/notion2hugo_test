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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOGEHDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFhrhvPVVn2ROJk4QBUoIXsetZcy2eFbgG1BqRXYz%2FJKAiEAy7fLkpfVFzE4wyTJPQ1FBOPStrDhpaOm%2BS7eW9AdtBIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FPt7miQ86ijeYIPCrcA8ar%2Fs1OssVSuxcNHaN5rIbdbREQQHTTBIw0E2pTdg2sONp0036OxW4E7pLkSWTgJkLeLQtX3HvzVvCOmSZNLIjCMeSPgRPQiqXPHnzEp0Z5wWTMOVafsei1j9fJHNeRdDFX3hv789%2B51I5ka5MxOmehh4eebfjXRafgOTeFPLz8UWh8%2BvTVQWk98KF2IiR5%2BYl5lsaBtup2HLu4BMuowcfNYQ4Ms4mjSO0rhimrCzUpelssvkooleXZIla1IL59jBykzokUsIHH78u54wfzACA3HF3TpXwAMCxo7vhYO5Nq%2BxhvFTfOjpK4kVoCw6xDE%2B%2FpKO8tWN8UYOB9dB0Si0TdhY1v0%2BIXY5myMy9IwWwjZaIk7xB%2BffQNMYspjYuLmUR5EWD0MFCGhYn5DomKSpRiTw5bXc8Jvn98qbFA7HzzN6pESoGyheOjI%2Fol%2FTitXj7ny%2B15pA7KGJkzB6Img6ZPS1%2Bo5Cn0%2FPBXy9%2Fst0tituyB5ctHBxYkHC4Eo4xxhosnGEe3tOYdTdGLXHOSgHvjGXQ2K2sGUgwHnigr8A2sS%2BisvqjHctAYRtpcnuMHnoUHpsHEaudhtkdfsbLXuqsO%2FCnxaHqikxlxcJRjgMJuHCIJau2o%2Fl9HvhWvMJzlqL8GOqUBmp5XJdqdwZ6hlX6n%2BCsWIkcGxy8K9Xr%2Fo5SpJPIK4p7KySBu%2FFgVBqfG1PpkvBab6Uh5Qj81WQxq1YLG%2BvsemPMIgR4co9L2MV7WVFgmjGmDpIHi0L%2FJp3HNRapDb%2BC2WvMRB23aFkl4ruqp%2BQ5il8x%2Fonsaej%2FJxZKRzm70veWWFss7uSs4JbE5L2UVrByfzvFqarS0Ac9spIFryCwEXPsuZZty&X-Amz-Signature=7668f49ca32d1b7a05be0e6af301c227a0bd53e9a66a0c79f52f035ead3f1a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOGEHDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFhrhvPVVn2ROJk4QBUoIXsetZcy2eFbgG1BqRXYz%2FJKAiEAy7fLkpfVFzE4wyTJPQ1FBOPStrDhpaOm%2BS7eW9AdtBIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FPt7miQ86ijeYIPCrcA8ar%2Fs1OssVSuxcNHaN5rIbdbREQQHTTBIw0E2pTdg2sONp0036OxW4E7pLkSWTgJkLeLQtX3HvzVvCOmSZNLIjCMeSPgRPQiqXPHnzEp0Z5wWTMOVafsei1j9fJHNeRdDFX3hv789%2B51I5ka5MxOmehh4eebfjXRafgOTeFPLz8UWh8%2BvTVQWk98KF2IiR5%2BYl5lsaBtup2HLu4BMuowcfNYQ4Ms4mjSO0rhimrCzUpelssvkooleXZIla1IL59jBykzokUsIHH78u54wfzACA3HF3TpXwAMCxo7vhYO5Nq%2BxhvFTfOjpK4kVoCw6xDE%2B%2FpKO8tWN8UYOB9dB0Si0TdhY1v0%2BIXY5myMy9IwWwjZaIk7xB%2BffQNMYspjYuLmUR5EWD0MFCGhYn5DomKSpRiTw5bXc8Jvn98qbFA7HzzN6pESoGyheOjI%2Fol%2FTitXj7ny%2B15pA7KGJkzB6Img6ZPS1%2Bo5Cn0%2FPBXy9%2Fst0tituyB5ctHBxYkHC4Eo4xxhosnGEe3tOYdTdGLXHOSgHvjGXQ2K2sGUgwHnigr8A2sS%2BisvqjHctAYRtpcnuMHnoUHpsHEaudhtkdfsbLXuqsO%2FCnxaHqikxlxcJRjgMJuHCIJau2o%2Fl9HvhWvMJzlqL8GOqUBmp5XJdqdwZ6hlX6n%2BCsWIkcGxy8K9Xr%2Fo5SpJPIK4p7KySBu%2FFgVBqfG1PpkvBab6Uh5Qj81WQxq1YLG%2BvsemPMIgR4co9L2MV7WVFgmjGmDpIHi0L%2FJp3HNRapDb%2BC2WvMRB23aFkl4ruqp%2BQ5il8x%2Fonsaej%2FJxZKRzm70veWWFss7uSs4JbE5L2UVrByfzvFqarS0Ac9spIFryCwEXPsuZZty&X-Amz-Signature=1b0d83e90c3f98b9b0ab2a26acfa470993c5b155a128adc651b552a4000643fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOGEHDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFhrhvPVVn2ROJk4QBUoIXsetZcy2eFbgG1BqRXYz%2FJKAiEAy7fLkpfVFzE4wyTJPQ1FBOPStrDhpaOm%2BS7eW9AdtBIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FPt7miQ86ijeYIPCrcA8ar%2Fs1OssVSuxcNHaN5rIbdbREQQHTTBIw0E2pTdg2sONp0036OxW4E7pLkSWTgJkLeLQtX3HvzVvCOmSZNLIjCMeSPgRPQiqXPHnzEp0Z5wWTMOVafsei1j9fJHNeRdDFX3hv789%2B51I5ka5MxOmehh4eebfjXRafgOTeFPLz8UWh8%2BvTVQWk98KF2IiR5%2BYl5lsaBtup2HLu4BMuowcfNYQ4Ms4mjSO0rhimrCzUpelssvkooleXZIla1IL59jBykzokUsIHH78u54wfzACA3HF3TpXwAMCxo7vhYO5Nq%2BxhvFTfOjpK4kVoCw6xDE%2B%2FpKO8tWN8UYOB9dB0Si0TdhY1v0%2BIXY5myMy9IwWwjZaIk7xB%2BffQNMYspjYuLmUR5EWD0MFCGhYn5DomKSpRiTw5bXc8Jvn98qbFA7HzzN6pESoGyheOjI%2Fol%2FTitXj7ny%2B15pA7KGJkzB6Img6ZPS1%2Bo5Cn0%2FPBXy9%2Fst0tituyB5ctHBxYkHC4Eo4xxhosnGEe3tOYdTdGLXHOSgHvjGXQ2K2sGUgwHnigr8A2sS%2BisvqjHctAYRtpcnuMHnoUHpsHEaudhtkdfsbLXuqsO%2FCnxaHqikxlxcJRjgMJuHCIJau2o%2Fl9HvhWvMJzlqL8GOqUBmp5XJdqdwZ6hlX6n%2BCsWIkcGxy8K9Xr%2Fo5SpJPIK4p7KySBu%2FFgVBqfG1PpkvBab6Uh5Qj81WQxq1YLG%2BvsemPMIgR4co9L2MV7WVFgmjGmDpIHi0L%2FJp3HNRapDb%2BC2WvMRB23aFkl4ruqp%2BQ5il8x%2Fonsaej%2FJxZKRzm70veWWFss7uSs4JbE5L2UVrByfzvFqarS0Ac9spIFryCwEXPsuZZty&X-Amz-Signature=ee90a539c6a698590cd3c24a6227e8be4e5d1613113048aacc4793c870da3160&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOGEHDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFhrhvPVVn2ROJk4QBUoIXsetZcy2eFbgG1BqRXYz%2FJKAiEAy7fLkpfVFzE4wyTJPQ1FBOPStrDhpaOm%2BS7eW9AdtBIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FPt7miQ86ijeYIPCrcA8ar%2Fs1OssVSuxcNHaN5rIbdbREQQHTTBIw0E2pTdg2sONp0036OxW4E7pLkSWTgJkLeLQtX3HvzVvCOmSZNLIjCMeSPgRPQiqXPHnzEp0Z5wWTMOVafsei1j9fJHNeRdDFX3hv789%2B51I5ka5MxOmehh4eebfjXRafgOTeFPLz8UWh8%2BvTVQWk98KF2IiR5%2BYl5lsaBtup2HLu4BMuowcfNYQ4Ms4mjSO0rhimrCzUpelssvkooleXZIla1IL59jBykzokUsIHH78u54wfzACA3HF3TpXwAMCxo7vhYO5Nq%2BxhvFTfOjpK4kVoCw6xDE%2B%2FpKO8tWN8UYOB9dB0Si0TdhY1v0%2BIXY5myMy9IwWwjZaIk7xB%2BffQNMYspjYuLmUR5EWD0MFCGhYn5DomKSpRiTw5bXc8Jvn98qbFA7HzzN6pESoGyheOjI%2Fol%2FTitXj7ny%2B15pA7KGJkzB6Img6ZPS1%2Bo5Cn0%2FPBXy9%2Fst0tituyB5ctHBxYkHC4Eo4xxhosnGEe3tOYdTdGLXHOSgHvjGXQ2K2sGUgwHnigr8A2sS%2BisvqjHctAYRtpcnuMHnoUHpsHEaudhtkdfsbLXuqsO%2FCnxaHqikxlxcJRjgMJuHCIJau2o%2Fl9HvhWvMJzlqL8GOqUBmp5XJdqdwZ6hlX6n%2BCsWIkcGxy8K9Xr%2Fo5SpJPIK4p7KySBu%2FFgVBqfG1PpkvBab6Uh5Qj81WQxq1YLG%2BvsemPMIgR4co9L2MV7WVFgmjGmDpIHi0L%2FJp3HNRapDb%2BC2WvMRB23aFkl4ruqp%2BQ5il8x%2Fonsaej%2FJxZKRzm70veWWFss7uSs4JbE5L2UVrByfzvFqarS0Ac9spIFryCwEXPsuZZty&X-Amz-Signature=95619f20d4d968cef837a24629a4ec407f43547e0a52e1f38fe4f2dce3eb0b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOGEHDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFhrhvPVVn2ROJk4QBUoIXsetZcy2eFbgG1BqRXYz%2FJKAiEAy7fLkpfVFzE4wyTJPQ1FBOPStrDhpaOm%2BS7eW9AdtBIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FPt7miQ86ijeYIPCrcA8ar%2Fs1OssVSuxcNHaN5rIbdbREQQHTTBIw0E2pTdg2sONp0036OxW4E7pLkSWTgJkLeLQtX3HvzVvCOmSZNLIjCMeSPgRPQiqXPHnzEp0Z5wWTMOVafsei1j9fJHNeRdDFX3hv789%2B51I5ka5MxOmehh4eebfjXRafgOTeFPLz8UWh8%2BvTVQWk98KF2IiR5%2BYl5lsaBtup2HLu4BMuowcfNYQ4Ms4mjSO0rhimrCzUpelssvkooleXZIla1IL59jBykzokUsIHH78u54wfzACA3HF3TpXwAMCxo7vhYO5Nq%2BxhvFTfOjpK4kVoCw6xDE%2B%2FpKO8tWN8UYOB9dB0Si0TdhY1v0%2BIXY5myMy9IwWwjZaIk7xB%2BffQNMYspjYuLmUR5EWD0MFCGhYn5DomKSpRiTw5bXc8Jvn98qbFA7HzzN6pESoGyheOjI%2Fol%2FTitXj7ny%2B15pA7KGJkzB6Img6ZPS1%2Bo5Cn0%2FPBXy9%2Fst0tituyB5ctHBxYkHC4Eo4xxhosnGEe3tOYdTdGLXHOSgHvjGXQ2K2sGUgwHnigr8A2sS%2BisvqjHctAYRtpcnuMHnoUHpsHEaudhtkdfsbLXuqsO%2FCnxaHqikxlxcJRjgMJuHCIJau2o%2Fl9HvhWvMJzlqL8GOqUBmp5XJdqdwZ6hlX6n%2BCsWIkcGxy8K9Xr%2Fo5SpJPIK4p7KySBu%2FFgVBqfG1PpkvBab6Uh5Qj81WQxq1YLG%2BvsemPMIgR4co9L2MV7WVFgmjGmDpIHi0L%2FJp3HNRapDb%2BC2WvMRB23aFkl4ruqp%2BQ5il8x%2Fonsaej%2FJxZKRzm70veWWFss7uSs4JbE5L2UVrByfzvFqarS0Ac9spIFryCwEXPsuZZty&X-Amz-Signature=2c6ffcac8637549bd9ed1f08d6f2ec763a227c07f5aa1a7d39f0a06f1e9d5551&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOGEHDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFhrhvPVVn2ROJk4QBUoIXsetZcy2eFbgG1BqRXYz%2FJKAiEAy7fLkpfVFzE4wyTJPQ1FBOPStrDhpaOm%2BS7eW9AdtBIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FPt7miQ86ijeYIPCrcA8ar%2Fs1OssVSuxcNHaN5rIbdbREQQHTTBIw0E2pTdg2sONp0036OxW4E7pLkSWTgJkLeLQtX3HvzVvCOmSZNLIjCMeSPgRPQiqXPHnzEp0Z5wWTMOVafsei1j9fJHNeRdDFX3hv789%2B51I5ka5MxOmehh4eebfjXRafgOTeFPLz8UWh8%2BvTVQWk98KF2IiR5%2BYl5lsaBtup2HLu4BMuowcfNYQ4Ms4mjSO0rhimrCzUpelssvkooleXZIla1IL59jBykzokUsIHH78u54wfzACA3HF3TpXwAMCxo7vhYO5Nq%2BxhvFTfOjpK4kVoCw6xDE%2B%2FpKO8tWN8UYOB9dB0Si0TdhY1v0%2BIXY5myMy9IwWwjZaIk7xB%2BffQNMYspjYuLmUR5EWD0MFCGhYn5DomKSpRiTw5bXc8Jvn98qbFA7HzzN6pESoGyheOjI%2Fol%2FTitXj7ny%2B15pA7KGJkzB6Img6ZPS1%2Bo5Cn0%2FPBXy9%2Fst0tituyB5ctHBxYkHC4Eo4xxhosnGEe3tOYdTdGLXHOSgHvjGXQ2K2sGUgwHnigr8A2sS%2BisvqjHctAYRtpcnuMHnoUHpsHEaudhtkdfsbLXuqsO%2FCnxaHqikxlxcJRjgMJuHCIJau2o%2Fl9HvhWvMJzlqL8GOqUBmp5XJdqdwZ6hlX6n%2BCsWIkcGxy8K9Xr%2Fo5SpJPIK4p7KySBu%2FFgVBqfG1PpkvBab6Uh5Qj81WQxq1YLG%2BvsemPMIgR4co9L2MV7WVFgmjGmDpIHi0L%2FJp3HNRapDb%2BC2WvMRB23aFkl4ruqp%2BQ5il8x%2Fonsaej%2FJxZKRzm70veWWFss7uSs4JbE5L2UVrByfzvFqarS0Ac9spIFryCwEXPsuZZty&X-Amz-Signature=bdb5e24a476b49d801465f1c1f48fb22b7426925e6de8728eb7ceeeab66922b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOGEHDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFhrhvPVVn2ROJk4QBUoIXsetZcy2eFbgG1BqRXYz%2FJKAiEAy7fLkpfVFzE4wyTJPQ1FBOPStrDhpaOm%2BS7eW9AdtBIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FPt7miQ86ijeYIPCrcA8ar%2Fs1OssVSuxcNHaN5rIbdbREQQHTTBIw0E2pTdg2sONp0036OxW4E7pLkSWTgJkLeLQtX3HvzVvCOmSZNLIjCMeSPgRPQiqXPHnzEp0Z5wWTMOVafsei1j9fJHNeRdDFX3hv789%2B51I5ka5MxOmehh4eebfjXRafgOTeFPLz8UWh8%2BvTVQWk98KF2IiR5%2BYl5lsaBtup2HLu4BMuowcfNYQ4Ms4mjSO0rhimrCzUpelssvkooleXZIla1IL59jBykzokUsIHH78u54wfzACA3HF3TpXwAMCxo7vhYO5Nq%2BxhvFTfOjpK4kVoCw6xDE%2B%2FpKO8tWN8UYOB9dB0Si0TdhY1v0%2BIXY5myMy9IwWwjZaIk7xB%2BffQNMYspjYuLmUR5EWD0MFCGhYn5DomKSpRiTw5bXc8Jvn98qbFA7HzzN6pESoGyheOjI%2Fol%2FTitXj7ny%2B15pA7KGJkzB6Img6ZPS1%2Bo5Cn0%2FPBXy9%2Fst0tituyB5ctHBxYkHC4Eo4xxhosnGEe3tOYdTdGLXHOSgHvjGXQ2K2sGUgwHnigr8A2sS%2BisvqjHctAYRtpcnuMHnoUHpsHEaudhtkdfsbLXuqsO%2FCnxaHqikxlxcJRjgMJuHCIJau2o%2Fl9HvhWvMJzlqL8GOqUBmp5XJdqdwZ6hlX6n%2BCsWIkcGxy8K9Xr%2Fo5SpJPIK4p7KySBu%2FFgVBqfG1PpkvBab6Uh5Qj81WQxq1YLG%2BvsemPMIgR4co9L2MV7WVFgmjGmDpIHi0L%2FJp3HNRapDb%2BC2WvMRB23aFkl4ruqp%2BQ5il8x%2Fonsaej%2FJxZKRzm70veWWFss7uSs4JbE5L2UVrByfzvFqarS0Ac9spIFryCwEXPsuZZty&X-Amz-Signature=6b3c44f17d39ded46e65890b1ecbadbfd53e1a9d6c44c0a1a726cca1eedbc7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
