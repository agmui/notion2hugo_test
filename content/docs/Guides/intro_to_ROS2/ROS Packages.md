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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=ff9eac09d7876a5ac4278c977950ccb7589e68fd0c369405bcc5c66a0cc68eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=3cd195d5c057dd4da3f40bd988b4e555cfffe441e8b98bca710c3e6cb0490013&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=0bb0db013cb67efeaaef0c453ce89e9ca230cfd2cb7f550f58bf744b934c7716&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=fc2b9fb7fb2ea25d47309e6846c4825f3599d8311c9ccfe52013337a80832b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=18ad60a197441719376de3c1273a57343dcee58235dfa3858589af31befba747&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=642ff6ba9ae23555b4f7261b2766b312836e1145890ee7f15f0b368e374cfaed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43AEN2A%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkhmY1tPTo93rfz1zvvAc1QG1ch3RYjZAw9by51TWTAIhAKZgbUKHDxyyEhpXpRwzpBIHCAR3FD%2F%2FBq4AEnYwZzaZKv8DCDAQABoMNjM3NDIzMTgzODA1IgziXGJuWx9n3H%2FTxz0q3APrRmfVd59LiQWEuiCmA7nvF26kRfyVvFE6Timw84FOF%2FM7fZibNV0QFPFa%2BilP5Le7H23gGsJ9esqnWv%2FUjCPUUU1ZoFtGO%2F3KLIs%2FdE3nQMEI9zLGauVQpQwLRpnEgbiCPJUeINKVrfnL4gOXj9AadlqGTK2ATw0xO700RJZ0jzvr2FiHdmQdvtVvd9C0hHt70aJ%2FSkXDL519wPdhZf4PHXp%2FCsINjJswSEjHm9WJTOE%2B9L%2BKdhguRTbyHVAY%2FelWSk5aBQRBhij%2FiPdAmK7h45dS1%2FoUr%2FGthiS58pnS%2FyP1V0pHHNgTrmZ5EpCIGIikkeIz%2BBfVYdijmUNdj1iCPO2W%2F9bosOibMeku7M4zmbA0QkJUUtJTvoygqaBJHREQWh1mmcW5bZNRMgizSQFb75BqnCaLRoWKLXF37goBwe1mvr38sgBUWilt7AY1aDcm3Rn65Ru9dF3laRXX3kPWbZS%2BlkkddOtwqjSaz42cPIFvEQa3N7rHpuO94GgM5nYHxo%2FkBRQeTbW70viZdEAdgJ4AJyMdnMCpVuishHbb3x0SDMkgp64xKDxXRvOKfanLq8bp0Oz3FiCt2CcSeqGur8WtLx0UQQndVn5jVl26cJN4%2FaDVObA1A4x1nzDSgsW%2FBjqkAQeznEp9A8wkniLPs4udQoxQWaKJibVKtw3JVp%2B%2FCQvvOtQZebQSSdczhR5gSZ%2BPHwTjSatfa6Dra%2Blu5lJuULzeg4SZXUX4M%2FQASUoAuZJJ8uE8rwK0qSrk527tQTtCkbuE17GvH7grUplo%2BCojA9xqyTQOef0lrb0nF4Sf297SVWvQxfdtwriyr2xivzmu8o7L49I1tPLyH5qlBNaYkAJlc7ae&X-Amz-Signature=4de1ae232222c0363863afb271bbf5e76dc483e934b678b29952fbd91a5660cf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
