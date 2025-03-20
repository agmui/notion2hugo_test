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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGTQJHM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGuw7oGNASZnBOJh0Z28%2FrCeW0Ch2OVtt793aE8pDmq%2FAiEA%2FGUvDZKiZIPQaNHljsajTQvGuTwVvOeIlH8Hk6IjXDkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acdysIhiXfcUn1ircA%2FEqgiFGPfYLOQg5tNBUs%2Bzo5WWVMb2fEwTOWBOxsWB6V22jqIQ7MsDJHNXOX5wgFhyJqf0ChEfwlYpBdablkGIxBiQK%2Bi6XnnMQ1wJax%2BUkz%2BXtvcSshCp5cq5IWIcbUKB9wEE4nWIO%2B%2Bx8Z46XXELaskerjef4SAyO7McZKSiyIYBL%2BQteJ3%2FPJpYanr5kRrvy6HtOO7KRg82VBiMp5PLuQ07RdX0d1Bu9nzjmfqAJUmnPTddQsyyItFuGx9UqxEcjZ0ZS4q80RqBKD4nnxtcLyfxASk%2FQaFmd1%2F6ovzxPnw%2FJgOtD%2BzhTOQgHfIf2GOiA2xOQA0o25ikXMVUzQ7IAK2g8NpWoScux7UsMNEbYDD4YJYfZQCxTkZl%2BEa9ZcZE%2F8bOihpHbzUr47DZKD8P5qKPfvQh0prW61Q9c%2F%2FMcLBXhnladh5bJDTY5qRcPoXoME739GvIyZ0dej5H0yzT9dbeqqP1vv6m1saimKyG2ztsCbOZUrcSlVlU0oomhGynyQS2TqdU5xF7JB8hoSaDa4ZaEqQRfrEDmFygqkCavQkjY3rCDcT07PiUa%2F7AD%2FVYsJrh5r4VHaVAoAUJV2tjcRr2t%2Bj%2BpaBMjC0XfThenDXAsVgfOdBmRs6o5MMmH8L4GOqUB7%2FL5agmtDwZWnwtMUiV5rl1XESqpkBNjF%2Fihupy6WcgPQPo6gaP6YSJvSxrA8wHsfP1YCexHlnacWDMiTZib4OEPnAj07Na3a7dFESgnmQgDncy2fi%2FFO5opGRdQBlzOTh4vnpoeblGLhTQUWRmlqHeGFdew7sqLD58bnjqzNb8%2F0kiiXLDSCiBxM30DQUve4eyXrduGcdzXfu5e988XXZKPVmLo&X-Amz-Signature=d7ae5b6b47eddad40e404b4d31c3c1c01f56b8edce5e7bb4e34b37cb9fdeab5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGTQJHM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGuw7oGNASZnBOJh0Z28%2FrCeW0Ch2OVtt793aE8pDmq%2FAiEA%2FGUvDZKiZIPQaNHljsajTQvGuTwVvOeIlH8Hk6IjXDkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acdysIhiXfcUn1ircA%2FEqgiFGPfYLOQg5tNBUs%2Bzo5WWVMb2fEwTOWBOxsWB6V22jqIQ7MsDJHNXOX5wgFhyJqf0ChEfwlYpBdablkGIxBiQK%2Bi6XnnMQ1wJax%2BUkz%2BXtvcSshCp5cq5IWIcbUKB9wEE4nWIO%2B%2Bx8Z46XXELaskerjef4SAyO7McZKSiyIYBL%2BQteJ3%2FPJpYanr5kRrvy6HtOO7KRg82VBiMp5PLuQ07RdX0d1Bu9nzjmfqAJUmnPTddQsyyItFuGx9UqxEcjZ0ZS4q80RqBKD4nnxtcLyfxASk%2FQaFmd1%2F6ovzxPnw%2FJgOtD%2BzhTOQgHfIf2GOiA2xOQA0o25ikXMVUzQ7IAK2g8NpWoScux7UsMNEbYDD4YJYfZQCxTkZl%2BEa9ZcZE%2F8bOihpHbzUr47DZKD8P5qKPfvQh0prW61Q9c%2F%2FMcLBXhnladh5bJDTY5qRcPoXoME739GvIyZ0dej5H0yzT9dbeqqP1vv6m1saimKyG2ztsCbOZUrcSlVlU0oomhGynyQS2TqdU5xF7JB8hoSaDa4ZaEqQRfrEDmFygqkCavQkjY3rCDcT07PiUa%2F7AD%2FVYsJrh5r4VHaVAoAUJV2tjcRr2t%2Bj%2BpaBMjC0XfThenDXAsVgfOdBmRs6o5MMmH8L4GOqUB7%2FL5agmtDwZWnwtMUiV5rl1XESqpkBNjF%2Fihupy6WcgPQPo6gaP6YSJvSxrA8wHsfP1YCexHlnacWDMiTZib4OEPnAj07Na3a7dFESgnmQgDncy2fi%2FFO5opGRdQBlzOTh4vnpoeblGLhTQUWRmlqHeGFdew7sqLD58bnjqzNb8%2F0kiiXLDSCiBxM30DQUve4eyXrduGcdzXfu5e988XXZKPVmLo&X-Amz-Signature=0f4826e76a68705b5608089bf6884be7e5f52eb8520fb7009118db84d2947c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGTQJHM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGuw7oGNASZnBOJh0Z28%2FrCeW0Ch2OVtt793aE8pDmq%2FAiEA%2FGUvDZKiZIPQaNHljsajTQvGuTwVvOeIlH8Hk6IjXDkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acdysIhiXfcUn1ircA%2FEqgiFGPfYLOQg5tNBUs%2Bzo5WWVMb2fEwTOWBOxsWB6V22jqIQ7MsDJHNXOX5wgFhyJqf0ChEfwlYpBdablkGIxBiQK%2Bi6XnnMQ1wJax%2BUkz%2BXtvcSshCp5cq5IWIcbUKB9wEE4nWIO%2B%2Bx8Z46XXELaskerjef4SAyO7McZKSiyIYBL%2BQteJ3%2FPJpYanr5kRrvy6HtOO7KRg82VBiMp5PLuQ07RdX0d1Bu9nzjmfqAJUmnPTddQsyyItFuGx9UqxEcjZ0ZS4q80RqBKD4nnxtcLyfxASk%2FQaFmd1%2F6ovzxPnw%2FJgOtD%2BzhTOQgHfIf2GOiA2xOQA0o25ikXMVUzQ7IAK2g8NpWoScux7UsMNEbYDD4YJYfZQCxTkZl%2BEa9ZcZE%2F8bOihpHbzUr47DZKD8P5qKPfvQh0prW61Q9c%2F%2FMcLBXhnladh5bJDTY5qRcPoXoME739GvIyZ0dej5H0yzT9dbeqqP1vv6m1saimKyG2ztsCbOZUrcSlVlU0oomhGynyQS2TqdU5xF7JB8hoSaDa4ZaEqQRfrEDmFygqkCavQkjY3rCDcT07PiUa%2F7AD%2FVYsJrh5r4VHaVAoAUJV2tjcRr2t%2Bj%2BpaBMjC0XfThenDXAsVgfOdBmRs6o5MMmH8L4GOqUB7%2FL5agmtDwZWnwtMUiV5rl1XESqpkBNjF%2Fihupy6WcgPQPo6gaP6YSJvSxrA8wHsfP1YCexHlnacWDMiTZib4OEPnAj07Na3a7dFESgnmQgDncy2fi%2FFO5opGRdQBlzOTh4vnpoeblGLhTQUWRmlqHeGFdew7sqLD58bnjqzNb8%2F0kiiXLDSCiBxM30DQUve4eyXrduGcdzXfu5e988XXZKPVmLo&X-Amz-Signature=20807d49acc3d42ce1fa4617e01dbd1750c133b0b2c2f762a200504ed792bf86&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGTQJHM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGuw7oGNASZnBOJh0Z28%2FrCeW0Ch2OVtt793aE8pDmq%2FAiEA%2FGUvDZKiZIPQaNHljsajTQvGuTwVvOeIlH8Hk6IjXDkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acdysIhiXfcUn1ircA%2FEqgiFGPfYLOQg5tNBUs%2Bzo5WWVMb2fEwTOWBOxsWB6V22jqIQ7MsDJHNXOX5wgFhyJqf0ChEfwlYpBdablkGIxBiQK%2Bi6XnnMQ1wJax%2BUkz%2BXtvcSshCp5cq5IWIcbUKB9wEE4nWIO%2B%2Bx8Z46XXELaskerjef4SAyO7McZKSiyIYBL%2BQteJ3%2FPJpYanr5kRrvy6HtOO7KRg82VBiMp5PLuQ07RdX0d1Bu9nzjmfqAJUmnPTddQsyyItFuGx9UqxEcjZ0ZS4q80RqBKD4nnxtcLyfxASk%2FQaFmd1%2F6ovzxPnw%2FJgOtD%2BzhTOQgHfIf2GOiA2xOQA0o25ikXMVUzQ7IAK2g8NpWoScux7UsMNEbYDD4YJYfZQCxTkZl%2BEa9ZcZE%2F8bOihpHbzUr47DZKD8P5qKPfvQh0prW61Q9c%2F%2FMcLBXhnladh5bJDTY5qRcPoXoME739GvIyZ0dej5H0yzT9dbeqqP1vv6m1saimKyG2ztsCbOZUrcSlVlU0oomhGynyQS2TqdU5xF7JB8hoSaDa4ZaEqQRfrEDmFygqkCavQkjY3rCDcT07PiUa%2F7AD%2FVYsJrh5r4VHaVAoAUJV2tjcRr2t%2Bj%2BpaBMjC0XfThenDXAsVgfOdBmRs6o5MMmH8L4GOqUB7%2FL5agmtDwZWnwtMUiV5rl1XESqpkBNjF%2Fihupy6WcgPQPo6gaP6YSJvSxrA8wHsfP1YCexHlnacWDMiTZib4OEPnAj07Na3a7dFESgnmQgDncy2fi%2FFO5opGRdQBlzOTh4vnpoeblGLhTQUWRmlqHeGFdew7sqLD58bnjqzNb8%2F0kiiXLDSCiBxM30DQUve4eyXrduGcdzXfu5e988XXZKPVmLo&X-Amz-Signature=812192a98202c2fe60e925965ebdd9bb825db513e12fe0abd64812ca672aa535&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGTQJHM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGuw7oGNASZnBOJh0Z28%2FrCeW0Ch2OVtt793aE8pDmq%2FAiEA%2FGUvDZKiZIPQaNHljsajTQvGuTwVvOeIlH8Hk6IjXDkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acdysIhiXfcUn1ircA%2FEqgiFGPfYLOQg5tNBUs%2Bzo5WWVMb2fEwTOWBOxsWB6V22jqIQ7MsDJHNXOX5wgFhyJqf0ChEfwlYpBdablkGIxBiQK%2Bi6XnnMQ1wJax%2BUkz%2BXtvcSshCp5cq5IWIcbUKB9wEE4nWIO%2B%2Bx8Z46XXELaskerjef4SAyO7McZKSiyIYBL%2BQteJ3%2FPJpYanr5kRrvy6HtOO7KRg82VBiMp5PLuQ07RdX0d1Bu9nzjmfqAJUmnPTddQsyyItFuGx9UqxEcjZ0ZS4q80RqBKD4nnxtcLyfxASk%2FQaFmd1%2F6ovzxPnw%2FJgOtD%2BzhTOQgHfIf2GOiA2xOQA0o25ikXMVUzQ7IAK2g8NpWoScux7UsMNEbYDD4YJYfZQCxTkZl%2BEa9ZcZE%2F8bOihpHbzUr47DZKD8P5qKPfvQh0prW61Q9c%2F%2FMcLBXhnladh5bJDTY5qRcPoXoME739GvIyZ0dej5H0yzT9dbeqqP1vv6m1saimKyG2ztsCbOZUrcSlVlU0oomhGynyQS2TqdU5xF7JB8hoSaDa4ZaEqQRfrEDmFygqkCavQkjY3rCDcT07PiUa%2F7AD%2FVYsJrh5r4VHaVAoAUJV2tjcRr2t%2Bj%2BpaBMjC0XfThenDXAsVgfOdBmRs6o5MMmH8L4GOqUB7%2FL5agmtDwZWnwtMUiV5rl1XESqpkBNjF%2Fihupy6WcgPQPo6gaP6YSJvSxrA8wHsfP1YCexHlnacWDMiTZib4OEPnAj07Na3a7dFESgnmQgDncy2fi%2FFO5opGRdQBlzOTh4vnpoeblGLhTQUWRmlqHeGFdew7sqLD58bnjqzNb8%2F0kiiXLDSCiBxM30DQUve4eyXrduGcdzXfu5e988XXZKPVmLo&X-Amz-Signature=47ddace0a3645831df17b95d16d4f805b6e9af0a01141286c65bcec648768c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGTQJHM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGuw7oGNASZnBOJh0Z28%2FrCeW0Ch2OVtt793aE8pDmq%2FAiEA%2FGUvDZKiZIPQaNHljsajTQvGuTwVvOeIlH8Hk6IjXDkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acdysIhiXfcUn1ircA%2FEqgiFGPfYLOQg5tNBUs%2Bzo5WWVMb2fEwTOWBOxsWB6V22jqIQ7MsDJHNXOX5wgFhyJqf0ChEfwlYpBdablkGIxBiQK%2Bi6XnnMQ1wJax%2BUkz%2BXtvcSshCp5cq5IWIcbUKB9wEE4nWIO%2B%2Bx8Z46XXELaskerjef4SAyO7McZKSiyIYBL%2BQteJ3%2FPJpYanr5kRrvy6HtOO7KRg82VBiMp5PLuQ07RdX0d1Bu9nzjmfqAJUmnPTddQsyyItFuGx9UqxEcjZ0ZS4q80RqBKD4nnxtcLyfxASk%2FQaFmd1%2F6ovzxPnw%2FJgOtD%2BzhTOQgHfIf2GOiA2xOQA0o25ikXMVUzQ7IAK2g8NpWoScux7UsMNEbYDD4YJYfZQCxTkZl%2BEa9ZcZE%2F8bOihpHbzUr47DZKD8P5qKPfvQh0prW61Q9c%2F%2FMcLBXhnladh5bJDTY5qRcPoXoME739GvIyZ0dej5H0yzT9dbeqqP1vv6m1saimKyG2ztsCbOZUrcSlVlU0oomhGynyQS2TqdU5xF7JB8hoSaDa4ZaEqQRfrEDmFygqkCavQkjY3rCDcT07PiUa%2F7AD%2FVYsJrh5r4VHaVAoAUJV2tjcRr2t%2Bj%2BpaBMjC0XfThenDXAsVgfOdBmRs6o5MMmH8L4GOqUB7%2FL5agmtDwZWnwtMUiV5rl1XESqpkBNjF%2Fihupy6WcgPQPo6gaP6YSJvSxrA8wHsfP1YCexHlnacWDMiTZib4OEPnAj07Na3a7dFESgnmQgDncy2fi%2FFO5opGRdQBlzOTh4vnpoeblGLhTQUWRmlqHeGFdew7sqLD58bnjqzNb8%2F0kiiXLDSCiBxM30DQUve4eyXrduGcdzXfu5e988XXZKPVmLo&X-Amz-Signature=cb2c3c6943adb55d3c36c92dc12a4f27b42e950660eed1a66df8a0bb2d8c53e9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGTQJHM%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGuw7oGNASZnBOJh0Z28%2FrCeW0Ch2OVtt793aE8pDmq%2FAiEA%2FGUvDZKiZIPQaNHljsajTQvGuTwVvOeIlH8Hk6IjXDkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5acdysIhiXfcUn1ircA%2FEqgiFGPfYLOQg5tNBUs%2Bzo5WWVMb2fEwTOWBOxsWB6V22jqIQ7MsDJHNXOX5wgFhyJqf0ChEfwlYpBdablkGIxBiQK%2Bi6XnnMQ1wJax%2BUkz%2BXtvcSshCp5cq5IWIcbUKB9wEE4nWIO%2B%2Bx8Z46XXELaskerjef4SAyO7McZKSiyIYBL%2BQteJ3%2FPJpYanr5kRrvy6HtOO7KRg82VBiMp5PLuQ07RdX0d1Bu9nzjmfqAJUmnPTddQsyyItFuGx9UqxEcjZ0ZS4q80RqBKD4nnxtcLyfxASk%2FQaFmd1%2F6ovzxPnw%2FJgOtD%2BzhTOQgHfIf2GOiA2xOQA0o25ikXMVUzQ7IAK2g8NpWoScux7UsMNEbYDD4YJYfZQCxTkZl%2BEa9ZcZE%2F8bOihpHbzUr47DZKD8P5qKPfvQh0prW61Q9c%2F%2FMcLBXhnladh5bJDTY5qRcPoXoME739GvIyZ0dej5H0yzT9dbeqqP1vv6m1saimKyG2ztsCbOZUrcSlVlU0oomhGynyQS2TqdU5xF7JB8hoSaDa4ZaEqQRfrEDmFygqkCavQkjY3rCDcT07PiUa%2F7AD%2FVYsJrh5r4VHaVAoAUJV2tjcRr2t%2Bj%2BpaBMjC0XfThenDXAsVgfOdBmRs6o5MMmH8L4GOqUB7%2FL5agmtDwZWnwtMUiV5rl1XESqpkBNjF%2Fihupy6WcgPQPo6gaP6YSJvSxrA8wHsfP1YCexHlnacWDMiTZib4OEPnAj07Na3a7dFESgnmQgDncy2fi%2FFO5opGRdQBlzOTh4vnpoeblGLhTQUWRmlqHeGFdew7sqLD58bnjqzNb8%2F0kiiXLDSCiBxM30DQUve4eyXrduGcdzXfu5e988XXZKPVmLo&X-Amz-Signature=ab92913740a88b450395592f303db74de2ad3817a915084516db4fab95f33142&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
