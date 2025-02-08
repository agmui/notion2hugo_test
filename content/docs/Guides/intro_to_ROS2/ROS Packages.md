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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZFG2OA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICjzv97kIFxtnRgAorxtqvB1OKD9tnp0th8z4LD7o1%2BgAiBdrbLIVqu7BgdTq6YGXVpzxP2WWnay6ezWQhvy8O8kuiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkOZayZgkMHAG8QqKtwDFFsCHp2WR%2BukgRACZK7F1KbxnH59lE1qsPiZjoGfD78n4v5Z4KyfKdVvbmdCCamN2ehJiPYvWIkogwOs1CXDjA0juUNaFNCRItRcz106oEuQxsWbJ%2Ft8LhC9M7MM9H7drTJVizYjzz6KBHnUjG%2BjBSqNAxzUZhc5RRmvoaXfVGLs3hFB9zDfHEsl6ex2V0ErZDLDIrCRUiUnqUqYMZEyHQXE230nNJqk4dJy8aqj%2BvxhqfAcBL4FX19F1HwcJjo%2BLzNg14C8hTSHrVY7W1bUNBOvjqbDxSUc7ONLix6ZU4jf3cYmnXLQqdgEvtCgdcGrzfRfsJUd7%2F9f7Q7AOI6KLf1m%2FQ10Z9yvloyw0zVdr9lfXtL8CW7ABlU1R%2BYHo2mfKeFOnOMFLcOx4JO2nWERjxdIBy9IvFGYjDmWgJdxYeG8VGtMReHKkUGWgSQhShhnytnl9BwUd7xM%2Fz1GdV6DCwWdFTFOtt5ETiNJCHR40i4DIUUeCEFsTmx4vlNIICX%2FyBMy4fhB%2B%2Bv3Pcw%2BVztk5R1w3Fhnc21aD0BceVj9TOwk3Z2taUEcbn8fVZmELmAOUmTJV95wADF02NzNtUQ9h4wxRPsNmMqa%2F0%2FxZOJxK51%2BW3wstHycX98uRkkwxeCevQY6pgHX%2BIkR8kpa06u5dk6ssFz1QtgCIJ6%2BdxNKvz7kEw9OA2v3CzG1Un0HrmmXITUJnCi6qjRoDKSE9TJhDqK0kcSciFBbyBM887mgraJGmqc1zcZRKgMm0jLhJKv1z%2BaUeWmCQiigCJqQpFsGR7yHJLfJcK0bqL7xfQMTEBOS1xd2J5oJx2%2FtyO57lgSBw3Qz%2Bwo5Lx16vzIaqYGexZLQ0VpSeZPIBfGK&X-Amz-Signature=5d61c4417c99d938cf1c543d490d547c416b33ee3c411d9fbfdd4edb2ebd2480&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZFG2OA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICjzv97kIFxtnRgAorxtqvB1OKD9tnp0th8z4LD7o1%2BgAiBdrbLIVqu7BgdTq6YGXVpzxP2WWnay6ezWQhvy8O8kuiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkOZayZgkMHAG8QqKtwDFFsCHp2WR%2BukgRACZK7F1KbxnH59lE1qsPiZjoGfD78n4v5Z4KyfKdVvbmdCCamN2ehJiPYvWIkogwOs1CXDjA0juUNaFNCRItRcz106oEuQxsWbJ%2Ft8LhC9M7MM9H7drTJVizYjzz6KBHnUjG%2BjBSqNAxzUZhc5RRmvoaXfVGLs3hFB9zDfHEsl6ex2V0ErZDLDIrCRUiUnqUqYMZEyHQXE230nNJqk4dJy8aqj%2BvxhqfAcBL4FX19F1HwcJjo%2BLzNg14C8hTSHrVY7W1bUNBOvjqbDxSUc7ONLix6ZU4jf3cYmnXLQqdgEvtCgdcGrzfRfsJUd7%2F9f7Q7AOI6KLf1m%2FQ10Z9yvloyw0zVdr9lfXtL8CW7ABlU1R%2BYHo2mfKeFOnOMFLcOx4JO2nWERjxdIBy9IvFGYjDmWgJdxYeG8VGtMReHKkUGWgSQhShhnytnl9BwUd7xM%2Fz1GdV6DCwWdFTFOtt5ETiNJCHR40i4DIUUeCEFsTmx4vlNIICX%2FyBMy4fhB%2B%2Bv3Pcw%2BVztk5R1w3Fhnc21aD0BceVj9TOwk3Z2taUEcbn8fVZmELmAOUmTJV95wADF02NzNtUQ9h4wxRPsNmMqa%2F0%2FxZOJxK51%2BW3wstHycX98uRkkwxeCevQY6pgHX%2BIkR8kpa06u5dk6ssFz1QtgCIJ6%2BdxNKvz7kEw9OA2v3CzG1Un0HrmmXITUJnCi6qjRoDKSE9TJhDqK0kcSciFBbyBM887mgraJGmqc1zcZRKgMm0jLhJKv1z%2BaUeWmCQiigCJqQpFsGR7yHJLfJcK0bqL7xfQMTEBOS1xd2J5oJx2%2FtyO57lgSBw3Qz%2Bwo5Lx16vzIaqYGexZLQ0VpSeZPIBfGK&X-Amz-Signature=e075e580075ae289ce87921368a2afdfd7ea7db088c5fb58cf2f276131b58ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZFG2OA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICjzv97kIFxtnRgAorxtqvB1OKD9tnp0th8z4LD7o1%2BgAiBdrbLIVqu7BgdTq6YGXVpzxP2WWnay6ezWQhvy8O8kuiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkOZayZgkMHAG8QqKtwDFFsCHp2WR%2BukgRACZK7F1KbxnH59lE1qsPiZjoGfD78n4v5Z4KyfKdVvbmdCCamN2ehJiPYvWIkogwOs1CXDjA0juUNaFNCRItRcz106oEuQxsWbJ%2Ft8LhC9M7MM9H7drTJVizYjzz6KBHnUjG%2BjBSqNAxzUZhc5RRmvoaXfVGLs3hFB9zDfHEsl6ex2V0ErZDLDIrCRUiUnqUqYMZEyHQXE230nNJqk4dJy8aqj%2BvxhqfAcBL4FX19F1HwcJjo%2BLzNg14C8hTSHrVY7W1bUNBOvjqbDxSUc7ONLix6ZU4jf3cYmnXLQqdgEvtCgdcGrzfRfsJUd7%2F9f7Q7AOI6KLf1m%2FQ10Z9yvloyw0zVdr9lfXtL8CW7ABlU1R%2BYHo2mfKeFOnOMFLcOx4JO2nWERjxdIBy9IvFGYjDmWgJdxYeG8VGtMReHKkUGWgSQhShhnytnl9BwUd7xM%2Fz1GdV6DCwWdFTFOtt5ETiNJCHR40i4DIUUeCEFsTmx4vlNIICX%2FyBMy4fhB%2B%2Bv3Pcw%2BVztk5R1w3Fhnc21aD0BceVj9TOwk3Z2taUEcbn8fVZmELmAOUmTJV95wADF02NzNtUQ9h4wxRPsNmMqa%2F0%2FxZOJxK51%2BW3wstHycX98uRkkwxeCevQY6pgHX%2BIkR8kpa06u5dk6ssFz1QtgCIJ6%2BdxNKvz7kEw9OA2v3CzG1Un0HrmmXITUJnCi6qjRoDKSE9TJhDqK0kcSciFBbyBM887mgraJGmqc1zcZRKgMm0jLhJKv1z%2BaUeWmCQiigCJqQpFsGR7yHJLfJcK0bqL7xfQMTEBOS1xd2J5oJx2%2FtyO57lgSBw3Qz%2Bwo5Lx16vzIaqYGexZLQ0VpSeZPIBfGK&X-Amz-Signature=225faa30a14e8ad06902bdfef3378f20860796defe45449ee097fe956c28fbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZFG2OA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICjzv97kIFxtnRgAorxtqvB1OKD9tnp0th8z4LD7o1%2BgAiBdrbLIVqu7BgdTq6YGXVpzxP2WWnay6ezWQhvy8O8kuiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkOZayZgkMHAG8QqKtwDFFsCHp2WR%2BukgRACZK7F1KbxnH59lE1qsPiZjoGfD78n4v5Z4KyfKdVvbmdCCamN2ehJiPYvWIkogwOs1CXDjA0juUNaFNCRItRcz106oEuQxsWbJ%2Ft8LhC9M7MM9H7drTJVizYjzz6KBHnUjG%2BjBSqNAxzUZhc5RRmvoaXfVGLs3hFB9zDfHEsl6ex2V0ErZDLDIrCRUiUnqUqYMZEyHQXE230nNJqk4dJy8aqj%2BvxhqfAcBL4FX19F1HwcJjo%2BLzNg14C8hTSHrVY7W1bUNBOvjqbDxSUc7ONLix6ZU4jf3cYmnXLQqdgEvtCgdcGrzfRfsJUd7%2F9f7Q7AOI6KLf1m%2FQ10Z9yvloyw0zVdr9lfXtL8CW7ABlU1R%2BYHo2mfKeFOnOMFLcOx4JO2nWERjxdIBy9IvFGYjDmWgJdxYeG8VGtMReHKkUGWgSQhShhnytnl9BwUd7xM%2Fz1GdV6DCwWdFTFOtt5ETiNJCHR40i4DIUUeCEFsTmx4vlNIICX%2FyBMy4fhB%2B%2Bv3Pcw%2BVztk5R1w3Fhnc21aD0BceVj9TOwk3Z2taUEcbn8fVZmELmAOUmTJV95wADF02NzNtUQ9h4wxRPsNmMqa%2F0%2FxZOJxK51%2BW3wstHycX98uRkkwxeCevQY6pgHX%2BIkR8kpa06u5dk6ssFz1QtgCIJ6%2BdxNKvz7kEw9OA2v3CzG1Un0HrmmXITUJnCi6qjRoDKSE9TJhDqK0kcSciFBbyBM887mgraJGmqc1zcZRKgMm0jLhJKv1z%2BaUeWmCQiigCJqQpFsGR7yHJLfJcK0bqL7xfQMTEBOS1xd2J5oJx2%2FtyO57lgSBw3Qz%2Bwo5Lx16vzIaqYGexZLQ0VpSeZPIBfGK&X-Amz-Signature=ae7c51f37cda87931ca3bd6b9fb65be702ea3defabcbb409cafd55b1fbddba89&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZFG2OA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICjzv97kIFxtnRgAorxtqvB1OKD9tnp0th8z4LD7o1%2BgAiBdrbLIVqu7BgdTq6YGXVpzxP2WWnay6ezWQhvy8O8kuiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkOZayZgkMHAG8QqKtwDFFsCHp2WR%2BukgRACZK7F1KbxnH59lE1qsPiZjoGfD78n4v5Z4KyfKdVvbmdCCamN2ehJiPYvWIkogwOs1CXDjA0juUNaFNCRItRcz106oEuQxsWbJ%2Ft8LhC9M7MM9H7drTJVizYjzz6KBHnUjG%2BjBSqNAxzUZhc5RRmvoaXfVGLs3hFB9zDfHEsl6ex2V0ErZDLDIrCRUiUnqUqYMZEyHQXE230nNJqk4dJy8aqj%2BvxhqfAcBL4FX19F1HwcJjo%2BLzNg14C8hTSHrVY7W1bUNBOvjqbDxSUc7ONLix6ZU4jf3cYmnXLQqdgEvtCgdcGrzfRfsJUd7%2F9f7Q7AOI6KLf1m%2FQ10Z9yvloyw0zVdr9lfXtL8CW7ABlU1R%2BYHo2mfKeFOnOMFLcOx4JO2nWERjxdIBy9IvFGYjDmWgJdxYeG8VGtMReHKkUGWgSQhShhnytnl9BwUd7xM%2Fz1GdV6DCwWdFTFOtt5ETiNJCHR40i4DIUUeCEFsTmx4vlNIICX%2FyBMy4fhB%2B%2Bv3Pcw%2BVztk5R1w3Fhnc21aD0BceVj9TOwk3Z2taUEcbn8fVZmELmAOUmTJV95wADF02NzNtUQ9h4wxRPsNmMqa%2F0%2FxZOJxK51%2BW3wstHycX98uRkkwxeCevQY6pgHX%2BIkR8kpa06u5dk6ssFz1QtgCIJ6%2BdxNKvz7kEw9OA2v3CzG1Un0HrmmXITUJnCi6qjRoDKSE9TJhDqK0kcSciFBbyBM887mgraJGmqc1zcZRKgMm0jLhJKv1z%2BaUeWmCQiigCJqQpFsGR7yHJLfJcK0bqL7xfQMTEBOS1xd2J5oJx2%2FtyO57lgSBw3Qz%2Bwo5Lx16vzIaqYGexZLQ0VpSeZPIBfGK&X-Amz-Signature=77bfd629235e8efd5645f929cf1d9af5d54710d04709e8714d6b5c440a3b33fb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZFG2OA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICjzv97kIFxtnRgAorxtqvB1OKD9tnp0th8z4LD7o1%2BgAiBdrbLIVqu7BgdTq6YGXVpzxP2WWnay6ezWQhvy8O8kuiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkOZayZgkMHAG8QqKtwDFFsCHp2WR%2BukgRACZK7F1KbxnH59lE1qsPiZjoGfD78n4v5Z4KyfKdVvbmdCCamN2ehJiPYvWIkogwOs1CXDjA0juUNaFNCRItRcz106oEuQxsWbJ%2Ft8LhC9M7MM9H7drTJVizYjzz6KBHnUjG%2BjBSqNAxzUZhc5RRmvoaXfVGLs3hFB9zDfHEsl6ex2V0ErZDLDIrCRUiUnqUqYMZEyHQXE230nNJqk4dJy8aqj%2BvxhqfAcBL4FX19F1HwcJjo%2BLzNg14C8hTSHrVY7W1bUNBOvjqbDxSUc7ONLix6ZU4jf3cYmnXLQqdgEvtCgdcGrzfRfsJUd7%2F9f7Q7AOI6KLf1m%2FQ10Z9yvloyw0zVdr9lfXtL8CW7ABlU1R%2BYHo2mfKeFOnOMFLcOx4JO2nWERjxdIBy9IvFGYjDmWgJdxYeG8VGtMReHKkUGWgSQhShhnytnl9BwUd7xM%2Fz1GdV6DCwWdFTFOtt5ETiNJCHR40i4DIUUeCEFsTmx4vlNIICX%2FyBMy4fhB%2B%2Bv3Pcw%2BVztk5R1w3Fhnc21aD0BceVj9TOwk3Z2taUEcbn8fVZmELmAOUmTJV95wADF02NzNtUQ9h4wxRPsNmMqa%2F0%2FxZOJxK51%2BW3wstHycX98uRkkwxeCevQY6pgHX%2BIkR8kpa06u5dk6ssFz1QtgCIJ6%2BdxNKvz7kEw9OA2v3CzG1Un0HrmmXITUJnCi6qjRoDKSE9TJhDqK0kcSciFBbyBM887mgraJGmqc1zcZRKgMm0jLhJKv1z%2BaUeWmCQiigCJqQpFsGR7yHJLfJcK0bqL7xfQMTEBOS1xd2J5oJx2%2FtyO57lgSBw3Qz%2Bwo5Lx16vzIaqYGexZLQ0VpSeZPIBfGK&X-Amz-Signature=d688817d72b10fb25705ea9fd4cb4e7f21b1c780767258b40896f4176335e229&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZFG2OA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICjzv97kIFxtnRgAorxtqvB1OKD9tnp0th8z4LD7o1%2BgAiBdrbLIVqu7BgdTq6YGXVpzxP2WWnay6ezWQhvy8O8kuiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkOZayZgkMHAG8QqKtwDFFsCHp2WR%2BukgRACZK7F1KbxnH59lE1qsPiZjoGfD78n4v5Z4KyfKdVvbmdCCamN2ehJiPYvWIkogwOs1CXDjA0juUNaFNCRItRcz106oEuQxsWbJ%2Ft8LhC9M7MM9H7drTJVizYjzz6KBHnUjG%2BjBSqNAxzUZhc5RRmvoaXfVGLs3hFB9zDfHEsl6ex2V0ErZDLDIrCRUiUnqUqYMZEyHQXE230nNJqk4dJy8aqj%2BvxhqfAcBL4FX19F1HwcJjo%2BLzNg14C8hTSHrVY7W1bUNBOvjqbDxSUc7ONLix6ZU4jf3cYmnXLQqdgEvtCgdcGrzfRfsJUd7%2F9f7Q7AOI6KLf1m%2FQ10Z9yvloyw0zVdr9lfXtL8CW7ABlU1R%2BYHo2mfKeFOnOMFLcOx4JO2nWERjxdIBy9IvFGYjDmWgJdxYeG8VGtMReHKkUGWgSQhShhnytnl9BwUd7xM%2Fz1GdV6DCwWdFTFOtt5ETiNJCHR40i4DIUUeCEFsTmx4vlNIICX%2FyBMy4fhB%2B%2Bv3Pcw%2BVztk5R1w3Fhnc21aD0BceVj9TOwk3Z2taUEcbn8fVZmELmAOUmTJV95wADF02NzNtUQ9h4wxRPsNmMqa%2F0%2FxZOJxK51%2BW3wstHycX98uRkkwxeCevQY6pgHX%2BIkR8kpa06u5dk6ssFz1QtgCIJ6%2BdxNKvz7kEw9OA2v3CzG1Un0HrmmXITUJnCi6qjRoDKSE9TJhDqK0kcSciFBbyBM887mgraJGmqc1zcZRKgMm0jLhJKv1z%2BaUeWmCQiigCJqQpFsGR7yHJLfJcK0bqL7xfQMTEBOS1xd2J5oJx2%2FtyO57lgSBw3Qz%2Bwo5Lx16vzIaqYGexZLQ0VpSeZPIBfGK&X-Amz-Signature=9f79622d55eb8fe1abc89cccd38bf9eeab5967a02e4b9d2f7dbe4f5328431453&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
