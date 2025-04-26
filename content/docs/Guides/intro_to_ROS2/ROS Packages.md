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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOBFLDM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs5mQF%2FWptD1CAY%2B3bGUiB%2B625m3dPGWU%2Fcs3R8%2FNGCAiEA%2Bf3YKo93B3eMlwawzOPYmlSoQEVM0uagVLpEsK%2B2OWcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAhrj4ZXXrjWG43SECrcA8hkcryT6OuxnXSr1PX1%2Fwh7Dr6dG%2BChiXsChpfyPEn2kFCK0yv%2Bm6MjrYMzkNp5lbPiHi9CijjclIz5SAe1mgtBjmmodGIfUSa4IqdpwnjIe%2FK8drLaT3igS5H75AAOSlqDWm2YXRuBElKTnnt0Swr7bY571w241jeT0KaNCUeJIYR8FlArvV%2FFuPcZJB7yLkTlrE%2Byz7mkK%2BlBkmcH8d1l9tmm0cLXZg87h6f56CC268PRNfdgkvGpn0SJP%2Fs1ygQ2e10gL1Tt9mw8yo6ehJArls6dxkSSS54rMMkj6tow%2FRCnR7e6v%2Bk8w9048UlwsgTXp1ov%2BqQFY1KGVOYCDTwj9V8YZccPJlaxGYoGcOHQB0pOkiFh8Ktf8go%2FeQx%2FUyseDi5d%2FfnHSoGbtcwoOctSZqwMnMFLU2wdS%2BdqxfJLoW0gJ4sksCM%2B69xwoJxiRIrOrl9z860bW9dDb%2FK6BkMkbbYJHogzc4nHIX7HR0U0PQqW7XhjzEagNsYTSVhaUzFHbZxLXcAax2fgN%2BpR5W0bcIQ9JxPqopLd%2BCwGQEbp0n4udDal2oR2z4ODX6qlYhsnzqc6t5xIyTlNdIoL7xSoP1Ef2eNMvqwdiIFbliACvC7hKVdPdf6GmtauMNW%2FtcAGOqUBKvUSDtk7uAYhaVqCDMjuvQXwLAxhXdJCZtIC9TQ7X3bwBbvx0KJTPkuTjQjG6nz7jW%2BY4n7URCYClVBRFF2uoM5BRJhBl473bo6wtHNuBlPCEJxfaZ%2FF52u%2BZlpkszb6DFJ7Wtarty7ynVJNqwds1qqswleeXgQwiTYLbMXrgBtXn8BJGIHISK5Ymm0nHxL%2BvuJi0KqJYrLmIBtxUUForm2O%2BBL8&X-Amz-Signature=4f0d340baa9780702bae7d1dcfb122d778aa4198450bfc7c1ec5d18acfe28158&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOBFLDM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs5mQF%2FWptD1CAY%2B3bGUiB%2B625m3dPGWU%2Fcs3R8%2FNGCAiEA%2Bf3YKo93B3eMlwawzOPYmlSoQEVM0uagVLpEsK%2B2OWcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAhrj4ZXXrjWG43SECrcA8hkcryT6OuxnXSr1PX1%2Fwh7Dr6dG%2BChiXsChpfyPEn2kFCK0yv%2Bm6MjrYMzkNp5lbPiHi9CijjclIz5SAe1mgtBjmmodGIfUSa4IqdpwnjIe%2FK8drLaT3igS5H75AAOSlqDWm2YXRuBElKTnnt0Swr7bY571w241jeT0KaNCUeJIYR8FlArvV%2FFuPcZJB7yLkTlrE%2Byz7mkK%2BlBkmcH8d1l9tmm0cLXZg87h6f56CC268PRNfdgkvGpn0SJP%2Fs1ygQ2e10gL1Tt9mw8yo6ehJArls6dxkSSS54rMMkj6tow%2FRCnR7e6v%2Bk8w9048UlwsgTXp1ov%2BqQFY1KGVOYCDTwj9V8YZccPJlaxGYoGcOHQB0pOkiFh8Ktf8go%2FeQx%2FUyseDi5d%2FfnHSoGbtcwoOctSZqwMnMFLU2wdS%2BdqxfJLoW0gJ4sksCM%2B69xwoJxiRIrOrl9z860bW9dDb%2FK6BkMkbbYJHogzc4nHIX7HR0U0PQqW7XhjzEagNsYTSVhaUzFHbZxLXcAax2fgN%2BpR5W0bcIQ9JxPqopLd%2BCwGQEbp0n4udDal2oR2z4ODX6qlYhsnzqc6t5xIyTlNdIoL7xSoP1Ef2eNMvqwdiIFbliACvC7hKVdPdf6GmtauMNW%2FtcAGOqUBKvUSDtk7uAYhaVqCDMjuvQXwLAxhXdJCZtIC9TQ7X3bwBbvx0KJTPkuTjQjG6nz7jW%2BY4n7URCYClVBRFF2uoM5BRJhBl473bo6wtHNuBlPCEJxfaZ%2FF52u%2BZlpkszb6DFJ7Wtarty7ynVJNqwds1qqswleeXgQwiTYLbMXrgBtXn8BJGIHISK5Ymm0nHxL%2BvuJi0KqJYrLmIBtxUUForm2O%2BBL8&X-Amz-Signature=ec4dde800977cfc625a24882f7eca9c2513425ef3481594487882aee2f81beb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOBFLDM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs5mQF%2FWptD1CAY%2B3bGUiB%2B625m3dPGWU%2Fcs3R8%2FNGCAiEA%2Bf3YKo93B3eMlwawzOPYmlSoQEVM0uagVLpEsK%2B2OWcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAhrj4ZXXrjWG43SECrcA8hkcryT6OuxnXSr1PX1%2Fwh7Dr6dG%2BChiXsChpfyPEn2kFCK0yv%2Bm6MjrYMzkNp5lbPiHi9CijjclIz5SAe1mgtBjmmodGIfUSa4IqdpwnjIe%2FK8drLaT3igS5H75AAOSlqDWm2YXRuBElKTnnt0Swr7bY571w241jeT0KaNCUeJIYR8FlArvV%2FFuPcZJB7yLkTlrE%2Byz7mkK%2BlBkmcH8d1l9tmm0cLXZg87h6f56CC268PRNfdgkvGpn0SJP%2Fs1ygQ2e10gL1Tt9mw8yo6ehJArls6dxkSSS54rMMkj6tow%2FRCnR7e6v%2Bk8w9048UlwsgTXp1ov%2BqQFY1KGVOYCDTwj9V8YZccPJlaxGYoGcOHQB0pOkiFh8Ktf8go%2FeQx%2FUyseDi5d%2FfnHSoGbtcwoOctSZqwMnMFLU2wdS%2BdqxfJLoW0gJ4sksCM%2B69xwoJxiRIrOrl9z860bW9dDb%2FK6BkMkbbYJHogzc4nHIX7HR0U0PQqW7XhjzEagNsYTSVhaUzFHbZxLXcAax2fgN%2BpR5W0bcIQ9JxPqopLd%2BCwGQEbp0n4udDal2oR2z4ODX6qlYhsnzqc6t5xIyTlNdIoL7xSoP1Ef2eNMvqwdiIFbliACvC7hKVdPdf6GmtauMNW%2FtcAGOqUBKvUSDtk7uAYhaVqCDMjuvQXwLAxhXdJCZtIC9TQ7X3bwBbvx0KJTPkuTjQjG6nz7jW%2BY4n7URCYClVBRFF2uoM5BRJhBl473bo6wtHNuBlPCEJxfaZ%2FF52u%2BZlpkszb6DFJ7Wtarty7ynVJNqwds1qqswleeXgQwiTYLbMXrgBtXn8BJGIHISK5Ymm0nHxL%2BvuJi0KqJYrLmIBtxUUForm2O%2BBL8&X-Amz-Signature=035b10d5a0592a4d5b936623800473b4a5f8a1ad68b8951126d405bfbc73277e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOBFLDM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs5mQF%2FWptD1CAY%2B3bGUiB%2B625m3dPGWU%2Fcs3R8%2FNGCAiEA%2Bf3YKo93B3eMlwawzOPYmlSoQEVM0uagVLpEsK%2B2OWcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAhrj4ZXXrjWG43SECrcA8hkcryT6OuxnXSr1PX1%2Fwh7Dr6dG%2BChiXsChpfyPEn2kFCK0yv%2Bm6MjrYMzkNp5lbPiHi9CijjclIz5SAe1mgtBjmmodGIfUSa4IqdpwnjIe%2FK8drLaT3igS5H75AAOSlqDWm2YXRuBElKTnnt0Swr7bY571w241jeT0KaNCUeJIYR8FlArvV%2FFuPcZJB7yLkTlrE%2Byz7mkK%2BlBkmcH8d1l9tmm0cLXZg87h6f56CC268PRNfdgkvGpn0SJP%2Fs1ygQ2e10gL1Tt9mw8yo6ehJArls6dxkSSS54rMMkj6tow%2FRCnR7e6v%2Bk8w9048UlwsgTXp1ov%2BqQFY1KGVOYCDTwj9V8YZccPJlaxGYoGcOHQB0pOkiFh8Ktf8go%2FeQx%2FUyseDi5d%2FfnHSoGbtcwoOctSZqwMnMFLU2wdS%2BdqxfJLoW0gJ4sksCM%2B69xwoJxiRIrOrl9z860bW9dDb%2FK6BkMkbbYJHogzc4nHIX7HR0U0PQqW7XhjzEagNsYTSVhaUzFHbZxLXcAax2fgN%2BpR5W0bcIQ9JxPqopLd%2BCwGQEbp0n4udDal2oR2z4ODX6qlYhsnzqc6t5xIyTlNdIoL7xSoP1Ef2eNMvqwdiIFbliACvC7hKVdPdf6GmtauMNW%2FtcAGOqUBKvUSDtk7uAYhaVqCDMjuvQXwLAxhXdJCZtIC9TQ7X3bwBbvx0KJTPkuTjQjG6nz7jW%2BY4n7URCYClVBRFF2uoM5BRJhBl473bo6wtHNuBlPCEJxfaZ%2FF52u%2BZlpkszb6DFJ7Wtarty7ynVJNqwds1qqswleeXgQwiTYLbMXrgBtXn8BJGIHISK5Ymm0nHxL%2BvuJi0KqJYrLmIBtxUUForm2O%2BBL8&X-Amz-Signature=ea07c86132171b16b2e6a006ffb11b976b233173f69c44ffcb12fa1e84f313b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOBFLDM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs5mQF%2FWptD1CAY%2B3bGUiB%2B625m3dPGWU%2Fcs3R8%2FNGCAiEA%2Bf3YKo93B3eMlwawzOPYmlSoQEVM0uagVLpEsK%2B2OWcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAhrj4ZXXrjWG43SECrcA8hkcryT6OuxnXSr1PX1%2Fwh7Dr6dG%2BChiXsChpfyPEn2kFCK0yv%2Bm6MjrYMzkNp5lbPiHi9CijjclIz5SAe1mgtBjmmodGIfUSa4IqdpwnjIe%2FK8drLaT3igS5H75AAOSlqDWm2YXRuBElKTnnt0Swr7bY571w241jeT0KaNCUeJIYR8FlArvV%2FFuPcZJB7yLkTlrE%2Byz7mkK%2BlBkmcH8d1l9tmm0cLXZg87h6f56CC268PRNfdgkvGpn0SJP%2Fs1ygQ2e10gL1Tt9mw8yo6ehJArls6dxkSSS54rMMkj6tow%2FRCnR7e6v%2Bk8w9048UlwsgTXp1ov%2BqQFY1KGVOYCDTwj9V8YZccPJlaxGYoGcOHQB0pOkiFh8Ktf8go%2FeQx%2FUyseDi5d%2FfnHSoGbtcwoOctSZqwMnMFLU2wdS%2BdqxfJLoW0gJ4sksCM%2B69xwoJxiRIrOrl9z860bW9dDb%2FK6BkMkbbYJHogzc4nHIX7HR0U0PQqW7XhjzEagNsYTSVhaUzFHbZxLXcAax2fgN%2BpR5W0bcIQ9JxPqopLd%2BCwGQEbp0n4udDal2oR2z4ODX6qlYhsnzqc6t5xIyTlNdIoL7xSoP1Ef2eNMvqwdiIFbliACvC7hKVdPdf6GmtauMNW%2FtcAGOqUBKvUSDtk7uAYhaVqCDMjuvQXwLAxhXdJCZtIC9TQ7X3bwBbvx0KJTPkuTjQjG6nz7jW%2BY4n7URCYClVBRFF2uoM5BRJhBl473bo6wtHNuBlPCEJxfaZ%2FF52u%2BZlpkszb6DFJ7Wtarty7ynVJNqwds1qqswleeXgQwiTYLbMXrgBtXn8BJGIHISK5Ymm0nHxL%2BvuJi0KqJYrLmIBtxUUForm2O%2BBL8&X-Amz-Signature=05bc543dede4206140fa70a8e4844c2f1d79edeb64cf7cb427ddd52caad1b724&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOBFLDM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs5mQF%2FWptD1CAY%2B3bGUiB%2B625m3dPGWU%2Fcs3R8%2FNGCAiEA%2Bf3YKo93B3eMlwawzOPYmlSoQEVM0uagVLpEsK%2B2OWcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAhrj4ZXXrjWG43SECrcA8hkcryT6OuxnXSr1PX1%2Fwh7Dr6dG%2BChiXsChpfyPEn2kFCK0yv%2Bm6MjrYMzkNp5lbPiHi9CijjclIz5SAe1mgtBjmmodGIfUSa4IqdpwnjIe%2FK8drLaT3igS5H75AAOSlqDWm2YXRuBElKTnnt0Swr7bY571w241jeT0KaNCUeJIYR8FlArvV%2FFuPcZJB7yLkTlrE%2Byz7mkK%2BlBkmcH8d1l9tmm0cLXZg87h6f56CC268PRNfdgkvGpn0SJP%2Fs1ygQ2e10gL1Tt9mw8yo6ehJArls6dxkSSS54rMMkj6tow%2FRCnR7e6v%2Bk8w9048UlwsgTXp1ov%2BqQFY1KGVOYCDTwj9V8YZccPJlaxGYoGcOHQB0pOkiFh8Ktf8go%2FeQx%2FUyseDi5d%2FfnHSoGbtcwoOctSZqwMnMFLU2wdS%2BdqxfJLoW0gJ4sksCM%2B69xwoJxiRIrOrl9z860bW9dDb%2FK6BkMkbbYJHogzc4nHIX7HR0U0PQqW7XhjzEagNsYTSVhaUzFHbZxLXcAax2fgN%2BpR5W0bcIQ9JxPqopLd%2BCwGQEbp0n4udDal2oR2z4ODX6qlYhsnzqc6t5xIyTlNdIoL7xSoP1Ef2eNMvqwdiIFbliACvC7hKVdPdf6GmtauMNW%2FtcAGOqUBKvUSDtk7uAYhaVqCDMjuvQXwLAxhXdJCZtIC9TQ7X3bwBbvx0KJTPkuTjQjG6nz7jW%2BY4n7URCYClVBRFF2uoM5BRJhBl473bo6wtHNuBlPCEJxfaZ%2FF52u%2BZlpkszb6DFJ7Wtarty7ynVJNqwds1qqswleeXgQwiTYLbMXrgBtXn8BJGIHISK5Ymm0nHxL%2BvuJi0KqJYrLmIBtxUUForm2O%2BBL8&X-Amz-Signature=34ca8ac7295217e3bc1b1f665321631b2c5e744455470fcc28a954ec665b109a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOBFLDM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICs5mQF%2FWptD1CAY%2B3bGUiB%2B625m3dPGWU%2Fcs3R8%2FNGCAiEA%2Bf3YKo93B3eMlwawzOPYmlSoQEVM0uagVLpEsK%2B2OWcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAhrj4ZXXrjWG43SECrcA8hkcryT6OuxnXSr1PX1%2Fwh7Dr6dG%2BChiXsChpfyPEn2kFCK0yv%2Bm6MjrYMzkNp5lbPiHi9CijjclIz5SAe1mgtBjmmodGIfUSa4IqdpwnjIe%2FK8drLaT3igS5H75AAOSlqDWm2YXRuBElKTnnt0Swr7bY571w241jeT0KaNCUeJIYR8FlArvV%2FFuPcZJB7yLkTlrE%2Byz7mkK%2BlBkmcH8d1l9tmm0cLXZg87h6f56CC268PRNfdgkvGpn0SJP%2Fs1ygQ2e10gL1Tt9mw8yo6ehJArls6dxkSSS54rMMkj6tow%2FRCnR7e6v%2Bk8w9048UlwsgTXp1ov%2BqQFY1KGVOYCDTwj9V8YZccPJlaxGYoGcOHQB0pOkiFh8Ktf8go%2FeQx%2FUyseDi5d%2FfnHSoGbtcwoOctSZqwMnMFLU2wdS%2BdqxfJLoW0gJ4sksCM%2B69xwoJxiRIrOrl9z860bW9dDb%2FK6BkMkbbYJHogzc4nHIX7HR0U0PQqW7XhjzEagNsYTSVhaUzFHbZxLXcAax2fgN%2BpR5W0bcIQ9JxPqopLd%2BCwGQEbp0n4udDal2oR2z4ODX6qlYhsnzqc6t5xIyTlNdIoL7xSoP1Ef2eNMvqwdiIFbliACvC7hKVdPdf6GmtauMNW%2FtcAGOqUBKvUSDtk7uAYhaVqCDMjuvQXwLAxhXdJCZtIC9TQ7X3bwBbvx0KJTPkuTjQjG6nz7jW%2BY4n7URCYClVBRFF2uoM5BRJhBl473bo6wtHNuBlPCEJxfaZ%2FF52u%2BZlpkszb6DFJ7Wtarty7ynVJNqwds1qqswleeXgQwiTYLbMXrgBtXn8BJGIHISK5Ymm0nHxL%2BvuJi0KqJYrLmIBtxUUForm2O%2BBL8&X-Amz-Signature=a254b621a1febf394d12baf490686b09fa5a3ffebc3add637f08767e75784b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
