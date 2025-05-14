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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCSW3GM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9rOqk%2B09e4AZe1TfjNZTkkJg%2FbLNexN%2FqoX3%2Fqzi%2B%2FAiEAlKqvZO6eJghfrwXyR3Hkxyj7LOEziiA%2FVyeUi2a4MD4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMllAcyFte82i3qL8ircA5rMJNaTDsojGagtMRROTVV5rCfU%2F1rW5%2FnJ%2FtyHsoRjfmxeI082ihldg%2B30H0gSbXms0%2FD3oNkSVvAWdh3uP5AR5si%2F0Z9EAto7C9VxxCxd%2ByuHq0yuVhzlxGGquXu%2FrRPXwLdJXMsZ21xc%2FImFu65tyyr5d5Mb9zNyw7JPvLweOXHPQcajeIQpgqUq62fBJ4Vv3NCpFkAsyaKbwJIHYkBkdGYC80nYSh%2FXkwZ3xPQHRPkbfy13Hl2EtUknVZ4RP%2BWm2gMwrNIvBGQxukmIASB%2B0qgvexc%2F4C7SqMJSO%2F7AdIdzEI31TIh0NXKHPY4MhcB7%2BSILOsjn9zJYGzT591p1Cv6g8a%2BK5PP5n0EuJYWf4lyldou%2Bj5JOVe90dyVMkknRQSo9yPbMwjQNPLz9zlLhGrDqk0rReRFymdRI%2Bd6QlnwIt1LaqijtCmP0mjDiCRfAJUZK85XKf7WfwON028umFeFScmQfsXFnbFp%2FveFuMQ06%2Botw1Kr3TTpR36ANso7xCWsVNL9ap80PcGdaP7RkmDd%2FoUlefLkVWT4OSOp%2FdNY1gMWHXpDbrtljH6mDr4D8oeaznOSFwX8NHna6oqgwweCwr8rP0ODDURgEkvzappNZKnuM4JyUwpOCMLDPk8EGOqUB9dhTot%2BsS39XeQ523FWzjlwePB1GuH%2F7pko1NChkOChwZtH32ZmF0q8aQfiJKuhXyENPmNbqj4a9lOwTBvZLSYAAHuHi3X7VjOOkj55YzrhHSvFuiNHSjCMKrHNYBy3fM6SYzoGW8OJbS9NVML69OmN4SX4vwHhBsomLFcOyw4JFoattHMq4WB4lLYjY8nVXRrp24YzEUa7xnlFVYhYvKwkXfrdp&X-Amz-Signature=bb866b70a5e71d2b3c56132e6ff8c8d5124cb0fcc4a57aff1b2e86c8ffb83beb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCSW3GM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9rOqk%2B09e4AZe1TfjNZTkkJg%2FbLNexN%2FqoX3%2Fqzi%2B%2FAiEAlKqvZO6eJghfrwXyR3Hkxyj7LOEziiA%2FVyeUi2a4MD4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMllAcyFte82i3qL8ircA5rMJNaTDsojGagtMRROTVV5rCfU%2F1rW5%2FnJ%2FtyHsoRjfmxeI082ihldg%2B30H0gSbXms0%2FD3oNkSVvAWdh3uP5AR5si%2F0Z9EAto7C9VxxCxd%2ByuHq0yuVhzlxGGquXu%2FrRPXwLdJXMsZ21xc%2FImFu65tyyr5d5Mb9zNyw7JPvLweOXHPQcajeIQpgqUq62fBJ4Vv3NCpFkAsyaKbwJIHYkBkdGYC80nYSh%2FXkwZ3xPQHRPkbfy13Hl2EtUknVZ4RP%2BWm2gMwrNIvBGQxukmIASB%2B0qgvexc%2F4C7SqMJSO%2F7AdIdzEI31TIh0NXKHPY4MhcB7%2BSILOsjn9zJYGzT591p1Cv6g8a%2BK5PP5n0EuJYWf4lyldou%2Bj5JOVe90dyVMkknRQSo9yPbMwjQNPLz9zlLhGrDqk0rReRFymdRI%2Bd6QlnwIt1LaqijtCmP0mjDiCRfAJUZK85XKf7WfwON028umFeFScmQfsXFnbFp%2FveFuMQ06%2Botw1Kr3TTpR36ANso7xCWsVNL9ap80PcGdaP7RkmDd%2FoUlefLkVWT4OSOp%2FdNY1gMWHXpDbrtljH6mDr4D8oeaznOSFwX8NHna6oqgwweCwr8rP0ODDURgEkvzappNZKnuM4JyUwpOCMLDPk8EGOqUB9dhTot%2BsS39XeQ523FWzjlwePB1GuH%2F7pko1NChkOChwZtH32ZmF0q8aQfiJKuhXyENPmNbqj4a9lOwTBvZLSYAAHuHi3X7VjOOkj55YzrhHSvFuiNHSjCMKrHNYBy3fM6SYzoGW8OJbS9NVML69OmN4SX4vwHhBsomLFcOyw4JFoattHMq4WB4lLYjY8nVXRrp24YzEUa7xnlFVYhYvKwkXfrdp&X-Amz-Signature=ea4bbbf2992794ef1973b28ee576716481d766d4a67a2f8dcd44a9f15230b02f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCSW3GM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9rOqk%2B09e4AZe1TfjNZTkkJg%2FbLNexN%2FqoX3%2Fqzi%2B%2FAiEAlKqvZO6eJghfrwXyR3Hkxyj7LOEziiA%2FVyeUi2a4MD4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMllAcyFte82i3qL8ircA5rMJNaTDsojGagtMRROTVV5rCfU%2F1rW5%2FnJ%2FtyHsoRjfmxeI082ihldg%2B30H0gSbXms0%2FD3oNkSVvAWdh3uP5AR5si%2F0Z9EAto7C9VxxCxd%2ByuHq0yuVhzlxGGquXu%2FrRPXwLdJXMsZ21xc%2FImFu65tyyr5d5Mb9zNyw7JPvLweOXHPQcajeIQpgqUq62fBJ4Vv3NCpFkAsyaKbwJIHYkBkdGYC80nYSh%2FXkwZ3xPQHRPkbfy13Hl2EtUknVZ4RP%2BWm2gMwrNIvBGQxukmIASB%2B0qgvexc%2F4C7SqMJSO%2F7AdIdzEI31TIh0NXKHPY4MhcB7%2BSILOsjn9zJYGzT591p1Cv6g8a%2BK5PP5n0EuJYWf4lyldou%2Bj5JOVe90dyVMkknRQSo9yPbMwjQNPLz9zlLhGrDqk0rReRFymdRI%2Bd6QlnwIt1LaqijtCmP0mjDiCRfAJUZK85XKf7WfwON028umFeFScmQfsXFnbFp%2FveFuMQ06%2Botw1Kr3TTpR36ANso7xCWsVNL9ap80PcGdaP7RkmDd%2FoUlefLkVWT4OSOp%2FdNY1gMWHXpDbrtljH6mDr4D8oeaznOSFwX8NHna6oqgwweCwr8rP0ODDURgEkvzappNZKnuM4JyUwpOCMLDPk8EGOqUB9dhTot%2BsS39XeQ523FWzjlwePB1GuH%2F7pko1NChkOChwZtH32ZmF0q8aQfiJKuhXyENPmNbqj4a9lOwTBvZLSYAAHuHi3X7VjOOkj55YzrhHSvFuiNHSjCMKrHNYBy3fM6SYzoGW8OJbS9NVML69OmN4SX4vwHhBsomLFcOyw4JFoattHMq4WB4lLYjY8nVXRrp24YzEUa7xnlFVYhYvKwkXfrdp&X-Amz-Signature=209d87fcd9460d4edbc0acf1a7b63a02866f34add8d46f43a9758e4b4aa986cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCSW3GM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9rOqk%2B09e4AZe1TfjNZTkkJg%2FbLNexN%2FqoX3%2Fqzi%2B%2FAiEAlKqvZO6eJghfrwXyR3Hkxyj7LOEziiA%2FVyeUi2a4MD4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMllAcyFte82i3qL8ircA5rMJNaTDsojGagtMRROTVV5rCfU%2F1rW5%2FnJ%2FtyHsoRjfmxeI082ihldg%2B30H0gSbXms0%2FD3oNkSVvAWdh3uP5AR5si%2F0Z9EAto7C9VxxCxd%2ByuHq0yuVhzlxGGquXu%2FrRPXwLdJXMsZ21xc%2FImFu65tyyr5d5Mb9zNyw7JPvLweOXHPQcajeIQpgqUq62fBJ4Vv3NCpFkAsyaKbwJIHYkBkdGYC80nYSh%2FXkwZ3xPQHRPkbfy13Hl2EtUknVZ4RP%2BWm2gMwrNIvBGQxukmIASB%2B0qgvexc%2F4C7SqMJSO%2F7AdIdzEI31TIh0NXKHPY4MhcB7%2BSILOsjn9zJYGzT591p1Cv6g8a%2BK5PP5n0EuJYWf4lyldou%2Bj5JOVe90dyVMkknRQSo9yPbMwjQNPLz9zlLhGrDqk0rReRFymdRI%2Bd6QlnwIt1LaqijtCmP0mjDiCRfAJUZK85XKf7WfwON028umFeFScmQfsXFnbFp%2FveFuMQ06%2Botw1Kr3TTpR36ANso7xCWsVNL9ap80PcGdaP7RkmDd%2FoUlefLkVWT4OSOp%2FdNY1gMWHXpDbrtljH6mDr4D8oeaznOSFwX8NHna6oqgwweCwr8rP0ODDURgEkvzappNZKnuM4JyUwpOCMLDPk8EGOqUB9dhTot%2BsS39XeQ523FWzjlwePB1GuH%2F7pko1NChkOChwZtH32ZmF0q8aQfiJKuhXyENPmNbqj4a9lOwTBvZLSYAAHuHi3X7VjOOkj55YzrhHSvFuiNHSjCMKrHNYBy3fM6SYzoGW8OJbS9NVML69OmN4SX4vwHhBsomLFcOyw4JFoattHMq4WB4lLYjY8nVXRrp24YzEUa7xnlFVYhYvKwkXfrdp&X-Amz-Signature=cd85960ea1271ef8b457535d3e48508f318c43da9619d262b72d693a359baafb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCSW3GM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9rOqk%2B09e4AZe1TfjNZTkkJg%2FbLNexN%2FqoX3%2Fqzi%2B%2FAiEAlKqvZO6eJghfrwXyR3Hkxyj7LOEziiA%2FVyeUi2a4MD4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMllAcyFte82i3qL8ircA5rMJNaTDsojGagtMRROTVV5rCfU%2F1rW5%2FnJ%2FtyHsoRjfmxeI082ihldg%2B30H0gSbXms0%2FD3oNkSVvAWdh3uP5AR5si%2F0Z9EAto7C9VxxCxd%2ByuHq0yuVhzlxGGquXu%2FrRPXwLdJXMsZ21xc%2FImFu65tyyr5d5Mb9zNyw7JPvLweOXHPQcajeIQpgqUq62fBJ4Vv3NCpFkAsyaKbwJIHYkBkdGYC80nYSh%2FXkwZ3xPQHRPkbfy13Hl2EtUknVZ4RP%2BWm2gMwrNIvBGQxukmIASB%2B0qgvexc%2F4C7SqMJSO%2F7AdIdzEI31TIh0NXKHPY4MhcB7%2BSILOsjn9zJYGzT591p1Cv6g8a%2BK5PP5n0EuJYWf4lyldou%2Bj5JOVe90dyVMkknRQSo9yPbMwjQNPLz9zlLhGrDqk0rReRFymdRI%2Bd6QlnwIt1LaqijtCmP0mjDiCRfAJUZK85XKf7WfwON028umFeFScmQfsXFnbFp%2FveFuMQ06%2Botw1Kr3TTpR36ANso7xCWsVNL9ap80PcGdaP7RkmDd%2FoUlefLkVWT4OSOp%2FdNY1gMWHXpDbrtljH6mDr4D8oeaznOSFwX8NHna6oqgwweCwr8rP0ODDURgEkvzappNZKnuM4JyUwpOCMLDPk8EGOqUB9dhTot%2BsS39XeQ523FWzjlwePB1GuH%2F7pko1NChkOChwZtH32ZmF0q8aQfiJKuhXyENPmNbqj4a9lOwTBvZLSYAAHuHi3X7VjOOkj55YzrhHSvFuiNHSjCMKrHNYBy3fM6SYzoGW8OJbS9NVML69OmN4SX4vwHhBsomLFcOyw4JFoattHMq4WB4lLYjY8nVXRrp24YzEUa7xnlFVYhYvKwkXfrdp&X-Amz-Signature=255de4b1309cadb042e84153077867c4d84ed1ed6b86333ebbb5d2ca91625298&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCSW3GM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9rOqk%2B09e4AZe1TfjNZTkkJg%2FbLNexN%2FqoX3%2Fqzi%2B%2FAiEAlKqvZO6eJghfrwXyR3Hkxyj7LOEziiA%2FVyeUi2a4MD4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMllAcyFte82i3qL8ircA5rMJNaTDsojGagtMRROTVV5rCfU%2F1rW5%2FnJ%2FtyHsoRjfmxeI082ihldg%2B30H0gSbXms0%2FD3oNkSVvAWdh3uP5AR5si%2F0Z9EAto7C9VxxCxd%2ByuHq0yuVhzlxGGquXu%2FrRPXwLdJXMsZ21xc%2FImFu65tyyr5d5Mb9zNyw7JPvLweOXHPQcajeIQpgqUq62fBJ4Vv3NCpFkAsyaKbwJIHYkBkdGYC80nYSh%2FXkwZ3xPQHRPkbfy13Hl2EtUknVZ4RP%2BWm2gMwrNIvBGQxukmIASB%2B0qgvexc%2F4C7SqMJSO%2F7AdIdzEI31TIh0NXKHPY4MhcB7%2BSILOsjn9zJYGzT591p1Cv6g8a%2BK5PP5n0EuJYWf4lyldou%2Bj5JOVe90dyVMkknRQSo9yPbMwjQNPLz9zlLhGrDqk0rReRFymdRI%2Bd6QlnwIt1LaqijtCmP0mjDiCRfAJUZK85XKf7WfwON028umFeFScmQfsXFnbFp%2FveFuMQ06%2Botw1Kr3TTpR36ANso7xCWsVNL9ap80PcGdaP7RkmDd%2FoUlefLkVWT4OSOp%2FdNY1gMWHXpDbrtljH6mDr4D8oeaznOSFwX8NHna6oqgwweCwr8rP0ODDURgEkvzappNZKnuM4JyUwpOCMLDPk8EGOqUB9dhTot%2BsS39XeQ523FWzjlwePB1GuH%2F7pko1NChkOChwZtH32ZmF0q8aQfiJKuhXyENPmNbqj4a9lOwTBvZLSYAAHuHi3X7VjOOkj55YzrhHSvFuiNHSjCMKrHNYBy3fM6SYzoGW8OJbS9NVML69OmN4SX4vwHhBsomLFcOyw4JFoattHMq4WB4lLYjY8nVXRrp24YzEUa7xnlFVYhYvKwkXfrdp&X-Amz-Signature=154b0c28fe750bbbc47b793d0632270575b1865dbe0ff47355140e645e03c78d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCSW3GM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCID9rOqk%2B09e4AZe1TfjNZTkkJg%2FbLNexN%2FqoX3%2Fqzi%2B%2FAiEAlKqvZO6eJghfrwXyR3Hkxyj7LOEziiA%2FVyeUi2a4MD4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMllAcyFte82i3qL8ircA5rMJNaTDsojGagtMRROTVV5rCfU%2F1rW5%2FnJ%2FtyHsoRjfmxeI082ihldg%2B30H0gSbXms0%2FD3oNkSVvAWdh3uP5AR5si%2F0Z9EAto7C9VxxCxd%2ByuHq0yuVhzlxGGquXu%2FrRPXwLdJXMsZ21xc%2FImFu65tyyr5d5Mb9zNyw7JPvLweOXHPQcajeIQpgqUq62fBJ4Vv3NCpFkAsyaKbwJIHYkBkdGYC80nYSh%2FXkwZ3xPQHRPkbfy13Hl2EtUknVZ4RP%2BWm2gMwrNIvBGQxukmIASB%2B0qgvexc%2F4C7SqMJSO%2F7AdIdzEI31TIh0NXKHPY4MhcB7%2BSILOsjn9zJYGzT591p1Cv6g8a%2BK5PP5n0EuJYWf4lyldou%2Bj5JOVe90dyVMkknRQSo9yPbMwjQNPLz9zlLhGrDqk0rReRFymdRI%2Bd6QlnwIt1LaqijtCmP0mjDiCRfAJUZK85XKf7WfwON028umFeFScmQfsXFnbFp%2FveFuMQ06%2Botw1Kr3TTpR36ANso7xCWsVNL9ap80PcGdaP7RkmDd%2FoUlefLkVWT4OSOp%2FdNY1gMWHXpDbrtljH6mDr4D8oeaznOSFwX8NHna6oqgwweCwr8rP0ODDURgEkvzappNZKnuM4JyUwpOCMLDPk8EGOqUB9dhTot%2BsS39XeQ523FWzjlwePB1GuH%2F7pko1NChkOChwZtH32ZmF0q8aQfiJKuhXyENPmNbqj4a9lOwTBvZLSYAAHuHi3X7VjOOkj55YzrhHSvFuiNHSjCMKrHNYBy3fM6SYzoGW8OJbS9NVML69OmN4SX4vwHhBsomLFcOyw4JFoattHMq4WB4lLYjY8nVXRrp24YzEUa7xnlFVYhYvKwkXfrdp&X-Amz-Signature=300a4e8214a877e39b64813a3940722d6b32f345ca52078b0c5ccc27fce3bf29&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
