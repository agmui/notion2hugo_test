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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=699120dd6cec3dbbddfd8cad192cce4b922b682ed5427bd99eed6168029f3f69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=ca8db6cbb93a3aaf64ff14b93926731d271a89001bd2be38ca74535ad250ecd9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=c43711e7684fca9af7dac4ce822f22128dcc168180f486ff1dfea663bf4085d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=1fb2e2b4c208d7529b3f86c79b7b0baa3221ad9444af0dcf1a0f2e62623c58fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=a6d9b1b6e1622d5f5882796ebf2b1a4cdb402cec52d0032e0fa67a23d6484719&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=9e8935d50f3dd585641e6594ecbb2b1aafd18d39bb727a9f43ef515eb121b6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDKN23A4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIATdAeX1r7kj%2FmZMBv5CgFkAfDrhv%2BjmJezyVZvUPMXcAiEAt4ibEQrOrDHoyfMrZVCPU4rm%2Bo7yvLrvY%2FiFOS%2BapgUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH6J3CcVksJIcHtLiSrcA2lqRCep8Hs4TtpRyvuNUaRrCI4fUnjn%2FQXWLhrGmn73MWMJEgOdvBRl5mp8w0rz8mvFL1u98G7XKohCT3OE4MQv9uOVCGEzVrXklESi2rJqK8Z3IF9ebEbGrASh8NnuPfCOzEtfp47aIMT4T%2FFiHKbVrgzkcMxdtSe2hs3knQ5%2B%2Fv25aYoJXUI5dw44jILJGSz%2FYiKaLlzX81dXc1OQHqDVpB%2FjaTTXocufq9Ivs1%2BI7IWnX6Q8Pw08j9YwcIbeyLiuzHkVxgInVTpD5vh94P%2B5UfRKi7m%2BWiwWG%2F%2FTJPWu%2BkXRDQZhiw0lj7hwce7oasS8Q%2FpbtG%2BKh5w0X2%2BK1mNXQAqpjNZ%2BdkniBuq9oaL28yoR%2B6ItKRIxRrro8OCf6DolGRWGeJy3ILW1rpTMMcsGRnQzcAQ9YyA5017JIos8ppQgSfQUdqPMoLeS2aKvNY6gsRjJl%2FnBbYxQDLQP2vrSALSKoxHFNobIAyNptgsxOHb%2BsKaju6Bu%2FwQ%2BrkSYB4B6jXBKV4f8ZDollAMMcMu27i2TQI4b1bGyUseAH0MwCDnL%2FB5dFzt%2FP%2Fef9eNzZdvNvJcKJXLPuJRbHsyPisA%2BoPTuRUEWtQoIo9DKWhHTyv%2FBiDExylxPAup4ML%2B0v70GOqUBcAfu%2BQvlHQ1PML7Y5PvVmPRM8MzkojeKYNaTcLfsvx3p6YWnHLlMQAY50s5RjFO0kBcQDQPw5sQTMIHwxuQ1jV1JqhDUim14elw%2FUUSdsfwG%2B%2F%2BdlwohJsoNx11NZZ4%2BXgFn8Sou5p5rCJo2JAOjxB5mLH8sfGwTUROY0tKzH6TsfhrlrjxlXM%2BBC0OYBdHnMgZZvFALmaw4gEFdo4aZbNz%2FjSdn&X-Amz-Signature=483e505961142579f149a9a0bb77318e83982ca177679953d6e701e4a6abf02d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
