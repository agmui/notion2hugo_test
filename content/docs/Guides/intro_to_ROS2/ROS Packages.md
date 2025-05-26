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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPRNJ24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe%2F8UJw8C1%2FjxGeZvVeIGiN12%2BqjgjzExkklQ8fyd2mAiEApF9wgiVBhJ7oZdurHcjClv%2BJplolSGymBIuPKISts0oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAhDdM7QvGdOPGZSFyrcAxDuZ7i98M5nk%2BTTcxT1P7pX3NtNpxqCjVq35iuuybywyqKCGL17V5i9SQr9%2FQjkL3%2BY0Q5CGqTXmGg7DNOeVOz%2BtL5DkcvLQDARVybMNBjxLmt9VtDvS69eAWO3aRa4MNf6XDHUcYsQll63JgiffKCMycBC8ge8tj4ObG%2FEyjd%2BgRlFWAexiqxoF7eOhlbBUTMpHWC%2BiIvTsb1cq29HhTy2JJFQAbAephCa90oxHOzeZsp0RdGHLkAiyAAoFaOOmXY4J0gQ7uzCUe9xEOT9XupH9p4IT33r0QIAITOsbfivsRaRtma1z05p9%2BLsLe%2FxSfpSE5L6qvBR8tM5INPWsLlpi5CBthx5sHUzwX3XNSXNPQjrmnJeLzCJNijcXlbg4X9DKAN9%2BB3FnJVGLcx1Y4zinXjcZpvceSJ4MVm8gQUDHil%2F%2BMJv1grsos0sk8eqcNpez0V8HxvwAuqlW4hJpgGdqVlm8o%2BJ2R6RcpxJ7exL0ldXXZStQ8Cjn1U5CENydwE71U631YbOFyoJpjR5gBJt8JlKa3KCeDaBxkslijt1M2eTIP23VvG09veiQkeROsfXJsSnwu1gB5UMXjkal3OApPLqkiCiVyqp0WH%2FQtHVQaj2KcJ%2B8XgXCCiPMIKr0sEGOqUBo9FMIYyh4aLE715gdVs7eIntfALlQJjNNjyfS6lIthLAVxrXYE%2B3Av%2F4YeoBS0jNjWgIUKTB9FexvPQjwE%2BnafA9383gZ26mQjrwBw9h3HJDwn8OzSkV%2FZFRf5IezlWek87yN3kK14UwTyW5iFehX6R923qfKaM6SVCGQxD2maw2GldFN52jDYRHbVTHPVsD0N2OszZPVhc%2B%2Fvt5SbGzVbBWImpq&X-Amz-Signature=8566b2b24b77337824e02bc718d5e839766eb928044361a24ac1fd81dbb8e55d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPRNJ24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe%2F8UJw8C1%2FjxGeZvVeIGiN12%2BqjgjzExkklQ8fyd2mAiEApF9wgiVBhJ7oZdurHcjClv%2BJplolSGymBIuPKISts0oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAhDdM7QvGdOPGZSFyrcAxDuZ7i98M5nk%2BTTcxT1P7pX3NtNpxqCjVq35iuuybywyqKCGL17V5i9SQr9%2FQjkL3%2BY0Q5CGqTXmGg7DNOeVOz%2BtL5DkcvLQDARVybMNBjxLmt9VtDvS69eAWO3aRa4MNf6XDHUcYsQll63JgiffKCMycBC8ge8tj4ObG%2FEyjd%2BgRlFWAexiqxoF7eOhlbBUTMpHWC%2BiIvTsb1cq29HhTy2JJFQAbAephCa90oxHOzeZsp0RdGHLkAiyAAoFaOOmXY4J0gQ7uzCUe9xEOT9XupH9p4IT33r0QIAITOsbfivsRaRtma1z05p9%2BLsLe%2FxSfpSE5L6qvBR8tM5INPWsLlpi5CBthx5sHUzwX3XNSXNPQjrmnJeLzCJNijcXlbg4X9DKAN9%2BB3FnJVGLcx1Y4zinXjcZpvceSJ4MVm8gQUDHil%2F%2BMJv1grsos0sk8eqcNpez0V8HxvwAuqlW4hJpgGdqVlm8o%2BJ2R6RcpxJ7exL0ldXXZStQ8Cjn1U5CENydwE71U631YbOFyoJpjR5gBJt8JlKa3KCeDaBxkslijt1M2eTIP23VvG09veiQkeROsfXJsSnwu1gB5UMXjkal3OApPLqkiCiVyqp0WH%2FQtHVQaj2KcJ%2B8XgXCCiPMIKr0sEGOqUBo9FMIYyh4aLE715gdVs7eIntfALlQJjNNjyfS6lIthLAVxrXYE%2B3Av%2F4YeoBS0jNjWgIUKTB9FexvPQjwE%2BnafA9383gZ26mQjrwBw9h3HJDwn8OzSkV%2FZFRf5IezlWek87yN3kK14UwTyW5iFehX6R923qfKaM6SVCGQxD2maw2GldFN52jDYRHbVTHPVsD0N2OszZPVhc%2B%2Fvt5SbGzVbBWImpq&X-Amz-Signature=fbec1dd108c42c59713e58c7acb120016b177426310494a5b9730bb72953cf92&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPRNJ24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe%2F8UJw8C1%2FjxGeZvVeIGiN12%2BqjgjzExkklQ8fyd2mAiEApF9wgiVBhJ7oZdurHcjClv%2BJplolSGymBIuPKISts0oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAhDdM7QvGdOPGZSFyrcAxDuZ7i98M5nk%2BTTcxT1P7pX3NtNpxqCjVq35iuuybywyqKCGL17V5i9SQr9%2FQjkL3%2BY0Q5CGqTXmGg7DNOeVOz%2BtL5DkcvLQDARVybMNBjxLmt9VtDvS69eAWO3aRa4MNf6XDHUcYsQll63JgiffKCMycBC8ge8tj4ObG%2FEyjd%2BgRlFWAexiqxoF7eOhlbBUTMpHWC%2BiIvTsb1cq29HhTy2JJFQAbAephCa90oxHOzeZsp0RdGHLkAiyAAoFaOOmXY4J0gQ7uzCUe9xEOT9XupH9p4IT33r0QIAITOsbfivsRaRtma1z05p9%2BLsLe%2FxSfpSE5L6qvBR8tM5INPWsLlpi5CBthx5sHUzwX3XNSXNPQjrmnJeLzCJNijcXlbg4X9DKAN9%2BB3FnJVGLcx1Y4zinXjcZpvceSJ4MVm8gQUDHil%2F%2BMJv1grsos0sk8eqcNpez0V8HxvwAuqlW4hJpgGdqVlm8o%2BJ2R6RcpxJ7exL0ldXXZStQ8Cjn1U5CENydwE71U631YbOFyoJpjR5gBJt8JlKa3KCeDaBxkslijt1M2eTIP23VvG09veiQkeROsfXJsSnwu1gB5UMXjkal3OApPLqkiCiVyqp0WH%2FQtHVQaj2KcJ%2B8XgXCCiPMIKr0sEGOqUBo9FMIYyh4aLE715gdVs7eIntfALlQJjNNjyfS6lIthLAVxrXYE%2B3Av%2F4YeoBS0jNjWgIUKTB9FexvPQjwE%2BnafA9383gZ26mQjrwBw9h3HJDwn8OzSkV%2FZFRf5IezlWek87yN3kK14UwTyW5iFehX6R923qfKaM6SVCGQxD2maw2GldFN52jDYRHbVTHPVsD0N2OszZPVhc%2B%2Fvt5SbGzVbBWImpq&X-Amz-Signature=10f20b7b569ddafbfb48787e3f10f278c2b00db8f7845e4f8d1e5e1445dd6183&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPRNJ24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe%2F8UJw8C1%2FjxGeZvVeIGiN12%2BqjgjzExkklQ8fyd2mAiEApF9wgiVBhJ7oZdurHcjClv%2BJplolSGymBIuPKISts0oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAhDdM7QvGdOPGZSFyrcAxDuZ7i98M5nk%2BTTcxT1P7pX3NtNpxqCjVq35iuuybywyqKCGL17V5i9SQr9%2FQjkL3%2BY0Q5CGqTXmGg7DNOeVOz%2BtL5DkcvLQDARVybMNBjxLmt9VtDvS69eAWO3aRa4MNf6XDHUcYsQll63JgiffKCMycBC8ge8tj4ObG%2FEyjd%2BgRlFWAexiqxoF7eOhlbBUTMpHWC%2BiIvTsb1cq29HhTy2JJFQAbAephCa90oxHOzeZsp0RdGHLkAiyAAoFaOOmXY4J0gQ7uzCUe9xEOT9XupH9p4IT33r0QIAITOsbfivsRaRtma1z05p9%2BLsLe%2FxSfpSE5L6qvBR8tM5INPWsLlpi5CBthx5sHUzwX3XNSXNPQjrmnJeLzCJNijcXlbg4X9DKAN9%2BB3FnJVGLcx1Y4zinXjcZpvceSJ4MVm8gQUDHil%2F%2BMJv1grsos0sk8eqcNpez0V8HxvwAuqlW4hJpgGdqVlm8o%2BJ2R6RcpxJ7exL0ldXXZStQ8Cjn1U5CENydwE71U631YbOFyoJpjR5gBJt8JlKa3KCeDaBxkslijt1M2eTIP23VvG09veiQkeROsfXJsSnwu1gB5UMXjkal3OApPLqkiCiVyqp0WH%2FQtHVQaj2KcJ%2B8XgXCCiPMIKr0sEGOqUBo9FMIYyh4aLE715gdVs7eIntfALlQJjNNjyfS6lIthLAVxrXYE%2B3Av%2F4YeoBS0jNjWgIUKTB9FexvPQjwE%2BnafA9383gZ26mQjrwBw9h3HJDwn8OzSkV%2FZFRf5IezlWek87yN3kK14UwTyW5iFehX6R923qfKaM6SVCGQxD2maw2GldFN52jDYRHbVTHPVsD0N2OszZPVhc%2B%2Fvt5SbGzVbBWImpq&X-Amz-Signature=141a7e7ad51341d9137143335248b485e05c9f6baf481c208b820b460cb217f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPRNJ24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe%2F8UJw8C1%2FjxGeZvVeIGiN12%2BqjgjzExkklQ8fyd2mAiEApF9wgiVBhJ7oZdurHcjClv%2BJplolSGymBIuPKISts0oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAhDdM7QvGdOPGZSFyrcAxDuZ7i98M5nk%2BTTcxT1P7pX3NtNpxqCjVq35iuuybywyqKCGL17V5i9SQr9%2FQjkL3%2BY0Q5CGqTXmGg7DNOeVOz%2BtL5DkcvLQDARVybMNBjxLmt9VtDvS69eAWO3aRa4MNf6XDHUcYsQll63JgiffKCMycBC8ge8tj4ObG%2FEyjd%2BgRlFWAexiqxoF7eOhlbBUTMpHWC%2BiIvTsb1cq29HhTy2JJFQAbAephCa90oxHOzeZsp0RdGHLkAiyAAoFaOOmXY4J0gQ7uzCUe9xEOT9XupH9p4IT33r0QIAITOsbfivsRaRtma1z05p9%2BLsLe%2FxSfpSE5L6qvBR8tM5INPWsLlpi5CBthx5sHUzwX3XNSXNPQjrmnJeLzCJNijcXlbg4X9DKAN9%2BB3FnJVGLcx1Y4zinXjcZpvceSJ4MVm8gQUDHil%2F%2BMJv1grsos0sk8eqcNpez0V8HxvwAuqlW4hJpgGdqVlm8o%2BJ2R6RcpxJ7exL0ldXXZStQ8Cjn1U5CENydwE71U631YbOFyoJpjR5gBJt8JlKa3KCeDaBxkslijt1M2eTIP23VvG09veiQkeROsfXJsSnwu1gB5UMXjkal3OApPLqkiCiVyqp0WH%2FQtHVQaj2KcJ%2B8XgXCCiPMIKr0sEGOqUBo9FMIYyh4aLE715gdVs7eIntfALlQJjNNjyfS6lIthLAVxrXYE%2B3Av%2F4YeoBS0jNjWgIUKTB9FexvPQjwE%2BnafA9383gZ26mQjrwBw9h3HJDwn8OzSkV%2FZFRf5IezlWek87yN3kK14UwTyW5iFehX6R923qfKaM6SVCGQxD2maw2GldFN52jDYRHbVTHPVsD0N2OszZPVhc%2B%2Fvt5SbGzVbBWImpq&X-Amz-Signature=3e85057708442dcdf036c1d9f0be839a31bd680fe1e3005bb9c6206201846090&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPRNJ24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe%2F8UJw8C1%2FjxGeZvVeIGiN12%2BqjgjzExkklQ8fyd2mAiEApF9wgiVBhJ7oZdurHcjClv%2BJplolSGymBIuPKISts0oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAhDdM7QvGdOPGZSFyrcAxDuZ7i98M5nk%2BTTcxT1P7pX3NtNpxqCjVq35iuuybywyqKCGL17V5i9SQr9%2FQjkL3%2BY0Q5CGqTXmGg7DNOeVOz%2BtL5DkcvLQDARVybMNBjxLmt9VtDvS69eAWO3aRa4MNf6XDHUcYsQll63JgiffKCMycBC8ge8tj4ObG%2FEyjd%2BgRlFWAexiqxoF7eOhlbBUTMpHWC%2BiIvTsb1cq29HhTy2JJFQAbAephCa90oxHOzeZsp0RdGHLkAiyAAoFaOOmXY4J0gQ7uzCUe9xEOT9XupH9p4IT33r0QIAITOsbfivsRaRtma1z05p9%2BLsLe%2FxSfpSE5L6qvBR8tM5INPWsLlpi5CBthx5sHUzwX3XNSXNPQjrmnJeLzCJNijcXlbg4X9DKAN9%2BB3FnJVGLcx1Y4zinXjcZpvceSJ4MVm8gQUDHil%2F%2BMJv1grsos0sk8eqcNpez0V8HxvwAuqlW4hJpgGdqVlm8o%2BJ2R6RcpxJ7exL0ldXXZStQ8Cjn1U5CENydwE71U631YbOFyoJpjR5gBJt8JlKa3KCeDaBxkslijt1M2eTIP23VvG09veiQkeROsfXJsSnwu1gB5UMXjkal3OApPLqkiCiVyqp0WH%2FQtHVQaj2KcJ%2B8XgXCCiPMIKr0sEGOqUBo9FMIYyh4aLE715gdVs7eIntfALlQJjNNjyfS6lIthLAVxrXYE%2B3Av%2F4YeoBS0jNjWgIUKTB9FexvPQjwE%2BnafA9383gZ26mQjrwBw9h3HJDwn8OzSkV%2FZFRf5IezlWek87yN3kK14UwTyW5iFehX6R923qfKaM6SVCGQxD2maw2GldFN52jDYRHbVTHPVsD0N2OszZPVhc%2B%2Fvt5SbGzVbBWImpq&X-Amz-Signature=8e969e23b9e81c67814bfbef88d5fca551f4d2179d1df3d9f8459aade632a303&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPRNJ24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe%2F8UJw8C1%2FjxGeZvVeIGiN12%2BqjgjzExkklQ8fyd2mAiEApF9wgiVBhJ7oZdurHcjClv%2BJplolSGymBIuPKISts0oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAhDdM7QvGdOPGZSFyrcAxDuZ7i98M5nk%2BTTcxT1P7pX3NtNpxqCjVq35iuuybywyqKCGL17V5i9SQr9%2FQjkL3%2BY0Q5CGqTXmGg7DNOeVOz%2BtL5DkcvLQDARVybMNBjxLmt9VtDvS69eAWO3aRa4MNf6XDHUcYsQll63JgiffKCMycBC8ge8tj4ObG%2FEyjd%2BgRlFWAexiqxoF7eOhlbBUTMpHWC%2BiIvTsb1cq29HhTy2JJFQAbAephCa90oxHOzeZsp0RdGHLkAiyAAoFaOOmXY4J0gQ7uzCUe9xEOT9XupH9p4IT33r0QIAITOsbfivsRaRtma1z05p9%2BLsLe%2FxSfpSE5L6qvBR8tM5INPWsLlpi5CBthx5sHUzwX3XNSXNPQjrmnJeLzCJNijcXlbg4X9DKAN9%2BB3FnJVGLcx1Y4zinXjcZpvceSJ4MVm8gQUDHil%2F%2BMJv1grsos0sk8eqcNpez0V8HxvwAuqlW4hJpgGdqVlm8o%2BJ2R6RcpxJ7exL0ldXXZStQ8Cjn1U5CENydwE71U631YbOFyoJpjR5gBJt8JlKa3KCeDaBxkslijt1M2eTIP23VvG09veiQkeROsfXJsSnwu1gB5UMXjkal3OApPLqkiCiVyqp0WH%2FQtHVQaj2KcJ%2B8XgXCCiPMIKr0sEGOqUBo9FMIYyh4aLE715gdVs7eIntfALlQJjNNjyfS6lIthLAVxrXYE%2B3Av%2F4YeoBS0jNjWgIUKTB9FexvPQjwE%2BnafA9383gZ26mQjrwBw9h3HJDwn8OzSkV%2FZFRf5IezlWek87yN3kK14UwTyW5iFehX6R923qfKaM6SVCGQxD2maw2GldFN52jDYRHbVTHPVsD0N2OszZPVhc%2B%2Fvt5SbGzVbBWImpq&X-Amz-Signature=fee5eef3f1cd4db7fe746576adaaa48a7ac83d4b9c632cb0d7464a531d130048&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
