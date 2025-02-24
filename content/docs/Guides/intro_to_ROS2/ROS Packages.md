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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJIPVXB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgkuLD%2BMbkHM2FXTMJkP%2Fph9mU2Tg16TfBGVLRx3VvQIgD9SfIq%2FxsHBosi4jc3cEYYP4n5nu3zSEljgiiKp5Oo0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF9h3xghnIPUbX%2FvbSrcA%2BuJLvy8vOHBINqoXFlO1zU%2BAVGa2ZG%2BlLzATPNROw2cM37Kw8QtLQiXBgdKz8a9fOULOmrxn6SfipwD1bqwZjbFhE5Jjgpk84PPZPZBeNwcKscmD9NAT6EPm4NQci%2B1EUCh2YzbV97q32zUSoVSla0vdAgMP9LOlrQQldJoMRuOPR56gwN9Gni0ZvnAyfvo%2FXmBtN47WeHhEjDgs1rLlQA3%2F5m0usSOWMXutevekaW3S5QUtz8F6sX7n0xW7w43B2x60F4FpQN5HgkJRhMujSQYOPQBwW8b5dWiw5b0kqJOPXYx%2B6fi2Z%2BZ8%2B8FbgxiCvj6KWDnjQABHEywUFo1Aky8dqcHtMIGJ64V0ojHcDLLrUAH%2Fz7ZzHRKMuYoX8ljYEAqPGAUMioDoK%2FJsq27BU0KtLwWYiup5QhQrsIVOpu45NkU%2Bx7yZK09tp7s4okW5rSmy8yW6qpCSxNcR7eRs2tM7NFDHeRQ3wZAHyFNW30%2Bpyit5h51Y3ZUIC9ekQ4K3cnmk9p%2BJX%2BkJSfwBKvzqK7p5haBZj84IWxI9TLA%2BZ%2B83bFGSl2%2F6GspFa100B1TphzyJ13Q1ZSYrVYqArWLAxZJ3V5ybPB1BM7LZVv84QsU3Dd10v6h5CpAyTKBMKu88r0GOqUBiTzR%2FGTqbtXo34BelraMsx2%2FSGmaOKcK%2Bd%2Bvb%2FdTWFcnQe6iV3nhWDuRkzlcyj%2FSa4bdmroHvAYnFNwZxlnPIxcvoSmeeykvfu%2Bk6W%2BXokDPRQ5OA%2FFJPl1fkCM2yYEmkCos0ne%2BOzCsrIa39%2BcjQyg8bqpcMxjN%2F86vqrMqErtG075wGKgaalXM1grDdpVgBjVa2rBARnv6WUav37OQwPwT1Rpv&X-Amz-Signature=a5fb0dee0f96c9f7d9908bd39f8f19568bd576b5060fce528e68609059a8041e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJIPVXB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgkuLD%2BMbkHM2FXTMJkP%2Fph9mU2Tg16TfBGVLRx3VvQIgD9SfIq%2FxsHBosi4jc3cEYYP4n5nu3zSEljgiiKp5Oo0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF9h3xghnIPUbX%2FvbSrcA%2BuJLvy8vOHBINqoXFlO1zU%2BAVGa2ZG%2BlLzATPNROw2cM37Kw8QtLQiXBgdKz8a9fOULOmrxn6SfipwD1bqwZjbFhE5Jjgpk84PPZPZBeNwcKscmD9NAT6EPm4NQci%2B1EUCh2YzbV97q32zUSoVSla0vdAgMP9LOlrQQldJoMRuOPR56gwN9Gni0ZvnAyfvo%2FXmBtN47WeHhEjDgs1rLlQA3%2F5m0usSOWMXutevekaW3S5QUtz8F6sX7n0xW7w43B2x60F4FpQN5HgkJRhMujSQYOPQBwW8b5dWiw5b0kqJOPXYx%2B6fi2Z%2BZ8%2B8FbgxiCvj6KWDnjQABHEywUFo1Aky8dqcHtMIGJ64V0ojHcDLLrUAH%2Fz7ZzHRKMuYoX8ljYEAqPGAUMioDoK%2FJsq27BU0KtLwWYiup5QhQrsIVOpu45NkU%2Bx7yZK09tp7s4okW5rSmy8yW6qpCSxNcR7eRs2tM7NFDHeRQ3wZAHyFNW30%2Bpyit5h51Y3ZUIC9ekQ4K3cnmk9p%2BJX%2BkJSfwBKvzqK7p5haBZj84IWxI9TLA%2BZ%2B83bFGSl2%2F6GspFa100B1TphzyJ13Q1ZSYrVYqArWLAxZJ3V5ybPB1BM7LZVv84QsU3Dd10v6h5CpAyTKBMKu88r0GOqUBiTzR%2FGTqbtXo34BelraMsx2%2FSGmaOKcK%2Bd%2Bvb%2FdTWFcnQe6iV3nhWDuRkzlcyj%2FSa4bdmroHvAYnFNwZxlnPIxcvoSmeeykvfu%2Bk6W%2BXokDPRQ5OA%2FFJPl1fkCM2yYEmkCos0ne%2BOzCsrIa39%2BcjQyg8bqpcMxjN%2F86vqrMqErtG075wGKgaalXM1grDdpVgBjVa2rBARnv6WUav37OQwPwT1Rpv&X-Amz-Signature=c06b85dd7b95a88e86b2d13e2312ffc8f3f48883ad875badc71c9b83ce67a7be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJIPVXB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgkuLD%2BMbkHM2FXTMJkP%2Fph9mU2Tg16TfBGVLRx3VvQIgD9SfIq%2FxsHBosi4jc3cEYYP4n5nu3zSEljgiiKp5Oo0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF9h3xghnIPUbX%2FvbSrcA%2BuJLvy8vOHBINqoXFlO1zU%2BAVGa2ZG%2BlLzATPNROw2cM37Kw8QtLQiXBgdKz8a9fOULOmrxn6SfipwD1bqwZjbFhE5Jjgpk84PPZPZBeNwcKscmD9NAT6EPm4NQci%2B1EUCh2YzbV97q32zUSoVSla0vdAgMP9LOlrQQldJoMRuOPR56gwN9Gni0ZvnAyfvo%2FXmBtN47WeHhEjDgs1rLlQA3%2F5m0usSOWMXutevekaW3S5QUtz8F6sX7n0xW7w43B2x60F4FpQN5HgkJRhMujSQYOPQBwW8b5dWiw5b0kqJOPXYx%2B6fi2Z%2BZ8%2B8FbgxiCvj6KWDnjQABHEywUFo1Aky8dqcHtMIGJ64V0ojHcDLLrUAH%2Fz7ZzHRKMuYoX8ljYEAqPGAUMioDoK%2FJsq27BU0KtLwWYiup5QhQrsIVOpu45NkU%2Bx7yZK09tp7s4okW5rSmy8yW6qpCSxNcR7eRs2tM7NFDHeRQ3wZAHyFNW30%2Bpyit5h51Y3ZUIC9ekQ4K3cnmk9p%2BJX%2BkJSfwBKvzqK7p5haBZj84IWxI9TLA%2BZ%2B83bFGSl2%2F6GspFa100B1TphzyJ13Q1ZSYrVYqArWLAxZJ3V5ybPB1BM7LZVv84QsU3Dd10v6h5CpAyTKBMKu88r0GOqUBiTzR%2FGTqbtXo34BelraMsx2%2FSGmaOKcK%2Bd%2Bvb%2FdTWFcnQe6iV3nhWDuRkzlcyj%2FSa4bdmroHvAYnFNwZxlnPIxcvoSmeeykvfu%2Bk6W%2BXokDPRQ5OA%2FFJPl1fkCM2yYEmkCos0ne%2BOzCsrIa39%2BcjQyg8bqpcMxjN%2F86vqrMqErtG075wGKgaalXM1grDdpVgBjVa2rBARnv6WUav37OQwPwT1Rpv&X-Amz-Signature=220a51f9e9f3d1908239c13a6db378a8c002dd909657288c6a72281452285876&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJIPVXB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgkuLD%2BMbkHM2FXTMJkP%2Fph9mU2Tg16TfBGVLRx3VvQIgD9SfIq%2FxsHBosi4jc3cEYYP4n5nu3zSEljgiiKp5Oo0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF9h3xghnIPUbX%2FvbSrcA%2BuJLvy8vOHBINqoXFlO1zU%2BAVGa2ZG%2BlLzATPNROw2cM37Kw8QtLQiXBgdKz8a9fOULOmrxn6SfipwD1bqwZjbFhE5Jjgpk84PPZPZBeNwcKscmD9NAT6EPm4NQci%2B1EUCh2YzbV97q32zUSoVSla0vdAgMP9LOlrQQldJoMRuOPR56gwN9Gni0ZvnAyfvo%2FXmBtN47WeHhEjDgs1rLlQA3%2F5m0usSOWMXutevekaW3S5QUtz8F6sX7n0xW7w43B2x60F4FpQN5HgkJRhMujSQYOPQBwW8b5dWiw5b0kqJOPXYx%2B6fi2Z%2BZ8%2B8FbgxiCvj6KWDnjQABHEywUFo1Aky8dqcHtMIGJ64V0ojHcDLLrUAH%2Fz7ZzHRKMuYoX8ljYEAqPGAUMioDoK%2FJsq27BU0KtLwWYiup5QhQrsIVOpu45NkU%2Bx7yZK09tp7s4okW5rSmy8yW6qpCSxNcR7eRs2tM7NFDHeRQ3wZAHyFNW30%2Bpyit5h51Y3ZUIC9ekQ4K3cnmk9p%2BJX%2BkJSfwBKvzqK7p5haBZj84IWxI9TLA%2BZ%2B83bFGSl2%2F6GspFa100B1TphzyJ13Q1ZSYrVYqArWLAxZJ3V5ybPB1BM7LZVv84QsU3Dd10v6h5CpAyTKBMKu88r0GOqUBiTzR%2FGTqbtXo34BelraMsx2%2FSGmaOKcK%2Bd%2Bvb%2FdTWFcnQe6iV3nhWDuRkzlcyj%2FSa4bdmroHvAYnFNwZxlnPIxcvoSmeeykvfu%2Bk6W%2BXokDPRQ5OA%2FFJPl1fkCM2yYEmkCos0ne%2BOzCsrIa39%2BcjQyg8bqpcMxjN%2F86vqrMqErtG075wGKgaalXM1grDdpVgBjVa2rBARnv6WUav37OQwPwT1Rpv&X-Amz-Signature=21a624bfb74dee697fa86c4c98cfe0e7587bbe0e0b94aeb121563024e0447218&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJIPVXB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgkuLD%2BMbkHM2FXTMJkP%2Fph9mU2Tg16TfBGVLRx3VvQIgD9SfIq%2FxsHBosi4jc3cEYYP4n5nu3zSEljgiiKp5Oo0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF9h3xghnIPUbX%2FvbSrcA%2BuJLvy8vOHBINqoXFlO1zU%2BAVGa2ZG%2BlLzATPNROw2cM37Kw8QtLQiXBgdKz8a9fOULOmrxn6SfipwD1bqwZjbFhE5Jjgpk84PPZPZBeNwcKscmD9NAT6EPm4NQci%2B1EUCh2YzbV97q32zUSoVSla0vdAgMP9LOlrQQldJoMRuOPR56gwN9Gni0ZvnAyfvo%2FXmBtN47WeHhEjDgs1rLlQA3%2F5m0usSOWMXutevekaW3S5QUtz8F6sX7n0xW7w43B2x60F4FpQN5HgkJRhMujSQYOPQBwW8b5dWiw5b0kqJOPXYx%2B6fi2Z%2BZ8%2B8FbgxiCvj6KWDnjQABHEywUFo1Aky8dqcHtMIGJ64V0ojHcDLLrUAH%2Fz7ZzHRKMuYoX8ljYEAqPGAUMioDoK%2FJsq27BU0KtLwWYiup5QhQrsIVOpu45NkU%2Bx7yZK09tp7s4okW5rSmy8yW6qpCSxNcR7eRs2tM7NFDHeRQ3wZAHyFNW30%2Bpyit5h51Y3ZUIC9ekQ4K3cnmk9p%2BJX%2BkJSfwBKvzqK7p5haBZj84IWxI9TLA%2BZ%2B83bFGSl2%2F6GspFa100B1TphzyJ13Q1ZSYrVYqArWLAxZJ3V5ybPB1BM7LZVv84QsU3Dd10v6h5CpAyTKBMKu88r0GOqUBiTzR%2FGTqbtXo34BelraMsx2%2FSGmaOKcK%2Bd%2Bvb%2FdTWFcnQe6iV3nhWDuRkzlcyj%2FSa4bdmroHvAYnFNwZxlnPIxcvoSmeeykvfu%2Bk6W%2BXokDPRQ5OA%2FFJPl1fkCM2yYEmkCos0ne%2BOzCsrIa39%2BcjQyg8bqpcMxjN%2F86vqrMqErtG075wGKgaalXM1grDdpVgBjVa2rBARnv6WUav37OQwPwT1Rpv&X-Amz-Signature=7fb02e396e71baaeef7bcb9a51c407d2f1da0129e971d70f39ad1bb40fbb7399&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJIPVXB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgkuLD%2BMbkHM2FXTMJkP%2Fph9mU2Tg16TfBGVLRx3VvQIgD9SfIq%2FxsHBosi4jc3cEYYP4n5nu3zSEljgiiKp5Oo0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF9h3xghnIPUbX%2FvbSrcA%2BuJLvy8vOHBINqoXFlO1zU%2BAVGa2ZG%2BlLzATPNROw2cM37Kw8QtLQiXBgdKz8a9fOULOmrxn6SfipwD1bqwZjbFhE5Jjgpk84PPZPZBeNwcKscmD9NAT6EPm4NQci%2B1EUCh2YzbV97q32zUSoVSla0vdAgMP9LOlrQQldJoMRuOPR56gwN9Gni0ZvnAyfvo%2FXmBtN47WeHhEjDgs1rLlQA3%2F5m0usSOWMXutevekaW3S5QUtz8F6sX7n0xW7w43B2x60F4FpQN5HgkJRhMujSQYOPQBwW8b5dWiw5b0kqJOPXYx%2B6fi2Z%2BZ8%2B8FbgxiCvj6KWDnjQABHEywUFo1Aky8dqcHtMIGJ64V0ojHcDLLrUAH%2Fz7ZzHRKMuYoX8ljYEAqPGAUMioDoK%2FJsq27BU0KtLwWYiup5QhQrsIVOpu45NkU%2Bx7yZK09tp7s4okW5rSmy8yW6qpCSxNcR7eRs2tM7NFDHeRQ3wZAHyFNW30%2Bpyit5h51Y3ZUIC9ekQ4K3cnmk9p%2BJX%2BkJSfwBKvzqK7p5haBZj84IWxI9TLA%2BZ%2B83bFGSl2%2F6GspFa100B1TphzyJ13Q1ZSYrVYqArWLAxZJ3V5ybPB1BM7LZVv84QsU3Dd10v6h5CpAyTKBMKu88r0GOqUBiTzR%2FGTqbtXo34BelraMsx2%2FSGmaOKcK%2Bd%2Bvb%2FdTWFcnQe6iV3nhWDuRkzlcyj%2FSa4bdmroHvAYnFNwZxlnPIxcvoSmeeykvfu%2Bk6W%2BXokDPRQ5OA%2FFJPl1fkCM2yYEmkCos0ne%2BOzCsrIa39%2BcjQyg8bqpcMxjN%2F86vqrMqErtG075wGKgaalXM1grDdpVgBjVa2rBARnv6WUav37OQwPwT1Rpv&X-Amz-Signature=662f7fa280b55d1192d5f1a4b035013de4142dca7ce039d6bc3e236d3fdca190&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJIPVXB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTgkuLD%2BMbkHM2FXTMJkP%2Fph9mU2Tg16TfBGVLRx3VvQIgD9SfIq%2FxsHBosi4jc3cEYYP4n5nu3zSEljgiiKp5Oo0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF9h3xghnIPUbX%2FvbSrcA%2BuJLvy8vOHBINqoXFlO1zU%2BAVGa2ZG%2BlLzATPNROw2cM37Kw8QtLQiXBgdKz8a9fOULOmrxn6SfipwD1bqwZjbFhE5Jjgpk84PPZPZBeNwcKscmD9NAT6EPm4NQci%2B1EUCh2YzbV97q32zUSoVSla0vdAgMP9LOlrQQldJoMRuOPR56gwN9Gni0ZvnAyfvo%2FXmBtN47WeHhEjDgs1rLlQA3%2F5m0usSOWMXutevekaW3S5QUtz8F6sX7n0xW7w43B2x60F4FpQN5HgkJRhMujSQYOPQBwW8b5dWiw5b0kqJOPXYx%2B6fi2Z%2BZ8%2B8FbgxiCvj6KWDnjQABHEywUFo1Aky8dqcHtMIGJ64V0ojHcDLLrUAH%2Fz7ZzHRKMuYoX8ljYEAqPGAUMioDoK%2FJsq27BU0KtLwWYiup5QhQrsIVOpu45NkU%2Bx7yZK09tp7s4okW5rSmy8yW6qpCSxNcR7eRs2tM7NFDHeRQ3wZAHyFNW30%2Bpyit5h51Y3ZUIC9ekQ4K3cnmk9p%2BJX%2BkJSfwBKvzqK7p5haBZj84IWxI9TLA%2BZ%2B83bFGSl2%2F6GspFa100B1TphzyJ13Q1ZSYrVYqArWLAxZJ3V5ybPB1BM7LZVv84QsU3Dd10v6h5CpAyTKBMKu88r0GOqUBiTzR%2FGTqbtXo34BelraMsx2%2FSGmaOKcK%2Bd%2Bvb%2FdTWFcnQe6iV3nhWDuRkzlcyj%2FSa4bdmroHvAYnFNwZxlnPIxcvoSmeeykvfu%2Bk6W%2BXokDPRQ5OA%2FFJPl1fkCM2yYEmkCos0ne%2BOzCsrIa39%2BcjQyg8bqpcMxjN%2F86vqrMqErtG075wGKgaalXM1grDdpVgBjVa2rBARnv6WUav37OQwPwT1Rpv&X-Amz-Signature=3f3058c20108c3fdb42d63e487360de87551e029801633f9f414c7cc98e9c5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
