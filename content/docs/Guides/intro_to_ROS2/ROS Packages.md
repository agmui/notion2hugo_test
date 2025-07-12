---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRRAOKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6m4BEnjUXJ0H8RRRnupfHxhSEIYODmAOnvp%2FPBOmRzAiEA6bNEAFz%2Br05LbQ%2FXmcfT17HcFYuIgVwjIL7E6q0LRdIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvG5SwoQWOIKMIVTCrcA7JJYh0W1kW7BhOp6IRaEiLGuoy%2BYG73%2BEuoZ6XsswqhHr4SxiSzOrFW6sGvCWzGmKjidZGUEXqKgBAhlR10sFwd4a0YKLWfQIOSLzwgqDKXmI5u8SOOzGDtTnL8pb4syEuU46SWLc3loWSbq4XrYpvgONMbzDEDererhY3rhmEQ86f4rCIN3KZ%2BykY%2BUS%2BgxbjV%2BF3x3KpKGzQGxkrYkvMO7EWDAZP%2FTYd0dg7rCZF1XijKfh3OPc45XpdsR0xb3bIhGdDhFYNwd%2BrYQEM16s1SGgXozgOhIUj%2BPWy4%2BUeWU8v4XLn6dMSYb5GXDIAWDb1RNFtVFgAUdtgbcuBABbq6XxRfC%2Bl82Vf%2BeXvOyllZrVGnXGXOBA5reoapzC7IFwokpQuleNOhAXOkwTKoK2tVUjNZFsF9LmrxXAqyyzqggYkGDuYwox6f1HoXU%2B2A6MQuotv4pCd%2B0acaDD7tNUMRHr6OsPIaHszA5JK4ilpC8c%2F1jPA73%2FTWN%2BYxO24QS1l6fyDJC36FEuHLalsTJwgoy2qeIa09SfhGU7VeP7PPuaehFeoR36XYL99QmpniPZHJgFqOZBkza4A4QWTUp4PBGtAHzzki5qoD0qplmE7e%2F8a7uE07ua8Hei2mMJC1xsMGOqUBzQsMSXCvwi5FR6AvhjiiYCQTvdlx6FnHMaQKnhKLj64RVg5e8KqmOkZEAN0mmQn6ivzMrjEC1SAMnRj0o6DYHnAXM0YDtIDLG6JU7wzgQDt0Ib7bjB%2F42yTpKWYkkyWsWGy756R4CkWKTAKXHhla8td85tdAM%2BJt3xK4cPJfjT3O7%2B7jpcOf9%2B4qalDka2HsYo0hArsdyILwfGK1XmU6QP5UFESd&X-Amz-Signature=28e35d486ca75f846bf429399b62f0ca8e2f0f0d22116c43f6a4685a99fea51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRRAOKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6m4BEnjUXJ0H8RRRnupfHxhSEIYODmAOnvp%2FPBOmRzAiEA6bNEAFz%2Br05LbQ%2FXmcfT17HcFYuIgVwjIL7E6q0LRdIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvG5SwoQWOIKMIVTCrcA7JJYh0W1kW7BhOp6IRaEiLGuoy%2BYG73%2BEuoZ6XsswqhHr4SxiSzOrFW6sGvCWzGmKjidZGUEXqKgBAhlR10sFwd4a0YKLWfQIOSLzwgqDKXmI5u8SOOzGDtTnL8pb4syEuU46SWLc3loWSbq4XrYpvgONMbzDEDererhY3rhmEQ86f4rCIN3KZ%2BykY%2BUS%2BgxbjV%2BF3x3KpKGzQGxkrYkvMO7EWDAZP%2FTYd0dg7rCZF1XijKfh3OPc45XpdsR0xb3bIhGdDhFYNwd%2BrYQEM16s1SGgXozgOhIUj%2BPWy4%2BUeWU8v4XLn6dMSYb5GXDIAWDb1RNFtVFgAUdtgbcuBABbq6XxRfC%2Bl82Vf%2BeXvOyllZrVGnXGXOBA5reoapzC7IFwokpQuleNOhAXOkwTKoK2tVUjNZFsF9LmrxXAqyyzqggYkGDuYwox6f1HoXU%2B2A6MQuotv4pCd%2B0acaDD7tNUMRHr6OsPIaHszA5JK4ilpC8c%2F1jPA73%2FTWN%2BYxO24QS1l6fyDJC36FEuHLalsTJwgoy2qeIa09SfhGU7VeP7PPuaehFeoR36XYL99QmpniPZHJgFqOZBkza4A4QWTUp4PBGtAHzzki5qoD0qplmE7e%2F8a7uE07ua8Hei2mMJC1xsMGOqUBzQsMSXCvwi5FR6AvhjiiYCQTvdlx6FnHMaQKnhKLj64RVg5e8KqmOkZEAN0mmQn6ivzMrjEC1SAMnRj0o6DYHnAXM0YDtIDLG6JU7wzgQDt0Ib7bjB%2F42yTpKWYkkyWsWGy756R4CkWKTAKXHhla8td85tdAM%2BJt3xK4cPJfjT3O7%2B7jpcOf9%2B4qalDka2HsYo0hArsdyILwfGK1XmU6QP5UFESd&X-Amz-Signature=220681f16ae84bece93851bfbdc80c654d2e4565b589473f7d5e42f32edf2b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRRAOKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6m4BEnjUXJ0H8RRRnupfHxhSEIYODmAOnvp%2FPBOmRzAiEA6bNEAFz%2Br05LbQ%2FXmcfT17HcFYuIgVwjIL7E6q0LRdIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvG5SwoQWOIKMIVTCrcA7JJYh0W1kW7BhOp6IRaEiLGuoy%2BYG73%2BEuoZ6XsswqhHr4SxiSzOrFW6sGvCWzGmKjidZGUEXqKgBAhlR10sFwd4a0YKLWfQIOSLzwgqDKXmI5u8SOOzGDtTnL8pb4syEuU46SWLc3loWSbq4XrYpvgONMbzDEDererhY3rhmEQ86f4rCIN3KZ%2BykY%2BUS%2BgxbjV%2BF3x3KpKGzQGxkrYkvMO7EWDAZP%2FTYd0dg7rCZF1XijKfh3OPc45XpdsR0xb3bIhGdDhFYNwd%2BrYQEM16s1SGgXozgOhIUj%2BPWy4%2BUeWU8v4XLn6dMSYb5GXDIAWDb1RNFtVFgAUdtgbcuBABbq6XxRfC%2Bl82Vf%2BeXvOyllZrVGnXGXOBA5reoapzC7IFwokpQuleNOhAXOkwTKoK2tVUjNZFsF9LmrxXAqyyzqggYkGDuYwox6f1HoXU%2B2A6MQuotv4pCd%2B0acaDD7tNUMRHr6OsPIaHszA5JK4ilpC8c%2F1jPA73%2FTWN%2BYxO24QS1l6fyDJC36FEuHLalsTJwgoy2qeIa09SfhGU7VeP7PPuaehFeoR36XYL99QmpniPZHJgFqOZBkza4A4QWTUp4PBGtAHzzki5qoD0qplmE7e%2F8a7uE07ua8Hei2mMJC1xsMGOqUBzQsMSXCvwi5FR6AvhjiiYCQTvdlx6FnHMaQKnhKLj64RVg5e8KqmOkZEAN0mmQn6ivzMrjEC1SAMnRj0o6DYHnAXM0YDtIDLG6JU7wzgQDt0Ib7bjB%2F42yTpKWYkkyWsWGy756R4CkWKTAKXHhla8td85tdAM%2BJt3xK4cPJfjT3O7%2B7jpcOf9%2B4qalDka2HsYo0hArsdyILwfGK1XmU6QP5UFESd&X-Amz-Signature=1778a2dac3bdd37545f90f2f4dfa8508eedffe7369d53b561328a02e0596ebcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRRAOKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6m4BEnjUXJ0H8RRRnupfHxhSEIYODmAOnvp%2FPBOmRzAiEA6bNEAFz%2Br05LbQ%2FXmcfT17HcFYuIgVwjIL7E6q0LRdIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvG5SwoQWOIKMIVTCrcA7JJYh0W1kW7BhOp6IRaEiLGuoy%2BYG73%2BEuoZ6XsswqhHr4SxiSzOrFW6sGvCWzGmKjidZGUEXqKgBAhlR10sFwd4a0YKLWfQIOSLzwgqDKXmI5u8SOOzGDtTnL8pb4syEuU46SWLc3loWSbq4XrYpvgONMbzDEDererhY3rhmEQ86f4rCIN3KZ%2BykY%2BUS%2BgxbjV%2BF3x3KpKGzQGxkrYkvMO7EWDAZP%2FTYd0dg7rCZF1XijKfh3OPc45XpdsR0xb3bIhGdDhFYNwd%2BrYQEM16s1SGgXozgOhIUj%2BPWy4%2BUeWU8v4XLn6dMSYb5GXDIAWDb1RNFtVFgAUdtgbcuBABbq6XxRfC%2Bl82Vf%2BeXvOyllZrVGnXGXOBA5reoapzC7IFwokpQuleNOhAXOkwTKoK2tVUjNZFsF9LmrxXAqyyzqggYkGDuYwox6f1HoXU%2B2A6MQuotv4pCd%2B0acaDD7tNUMRHr6OsPIaHszA5JK4ilpC8c%2F1jPA73%2FTWN%2BYxO24QS1l6fyDJC36FEuHLalsTJwgoy2qeIa09SfhGU7VeP7PPuaehFeoR36XYL99QmpniPZHJgFqOZBkza4A4QWTUp4PBGtAHzzki5qoD0qplmE7e%2F8a7uE07ua8Hei2mMJC1xsMGOqUBzQsMSXCvwi5FR6AvhjiiYCQTvdlx6FnHMaQKnhKLj64RVg5e8KqmOkZEAN0mmQn6ivzMrjEC1SAMnRj0o6DYHnAXM0YDtIDLG6JU7wzgQDt0Ib7bjB%2F42yTpKWYkkyWsWGy756R4CkWKTAKXHhla8td85tdAM%2BJt3xK4cPJfjT3O7%2B7jpcOf9%2B4qalDka2HsYo0hArsdyILwfGK1XmU6QP5UFESd&X-Amz-Signature=87120c165e43263c131c1a2c45c79b39e2b09c2cf68aa183731d4a350d420bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRRAOKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6m4BEnjUXJ0H8RRRnupfHxhSEIYODmAOnvp%2FPBOmRzAiEA6bNEAFz%2Br05LbQ%2FXmcfT17HcFYuIgVwjIL7E6q0LRdIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvG5SwoQWOIKMIVTCrcA7JJYh0W1kW7BhOp6IRaEiLGuoy%2BYG73%2BEuoZ6XsswqhHr4SxiSzOrFW6sGvCWzGmKjidZGUEXqKgBAhlR10sFwd4a0YKLWfQIOSLzwgqDKXmI5u8SOOzGDtTnL8pb4syEuU46SWLc3loWSbq4XrYpvgONMbzDEDererhY3rhmEQ86f4rCIN3KZ%2BykY%2BUS%2BgxbjV%2BF3x3KpKGzQGxkrYkvMO7EWDAZP%2FTYd0dg7rCZF1XijKfh3OPc45XpdsR0xb3bIhGdDhFYNwd%2BrYQEM16s1SGgXozgOhIUj%2BPWy4%2BUeWU8v4XLn6dMSYb5GXDIAWDb1RNFtVFgAUdtgbcuBABbq6XxRfC%2Bl82Vf%2BeXvOyllZrVGnXGXOBA5reoapzC7IFwokpQuleNOhAXOkwTKoK2tVUjNZFsF9LmrxXAqyyzqggYkGDuYwox6f1HoXU%2B2A6MQuotv4pCd%2B0acaDD7tNUMRHr6OsPIaHszA5JK4ilpC8c%2F1jPA73%2FTWN%2BYxO24QS1l6fyDJC36FEuHLalsTJwgoy2qeIa09SfhGU7VeP7PPuaehFeoR36XYL99QmpniPZHJgFqOZBkza4A4QWTUp4PBGtAHzzki5qoD0qplmE7e%2F8a7uE07ua8Hei2mMJC1xsMGOqUBzQsMSXCvwi5FR6AvhjiiYCQTvdlx6FnHMaQKnhKLj64RVg5e8KqmOkZEAN0mmQn6ivzMrjEC1SAMnRj0o6DYHnAXM0YDtIDLG6JU7wzgQDt0Ib7bjB%2F42yTpKWYkkyWsWGy756R4CkWKTAKXHhla8td85tdAM%2BJt3xK4cPJfjT3O7%2B7jpcOf9%2B4qalDka2HsYo0hArsdyILwfGK1XmU6QP5UFESd&X-Amz-Signature=e54b26d7e09a4b61b9fce2fd165e14a5b6e16a31885473c0dae77ef799b57bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRRAOKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6m4BEnjUXJ0H8RRRnupfHxhSEIYODmAOnvp%2FPBOmRzAiEA6bNEAFz%2Br05LbQ%2FXmcfT17HcFYuIgVwjIL7E6q0LRdIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvG5SwoQWOIKMIVTCrcA7JJYh0W1kW7BhOp6IRaEiLGuoy%2BYG73%2BEuoZ6XsswqhHr4SxiSzOrFW6sGvCWzGmKjidZGUEXqKgBAhlR10sFwd4a0YKLWfQIOSLzwgqDKXmI5u8SOOzGDtTnL8pb4syEuU46SWLc3loWSbq4XrYpvgONMbzDEDererhY3rhmEQ86f4rCIN3KZ%2BykY%2BUS%2BgxbjV%2BF3x3KpKGzQGxkrYkvMO7EWDAZP%2FTYd0dg7rCZF1XijKfh3OPc45XpdsR0xb3bIhGdDhFYNwd%2BrYQEM16s1SGgXozgOhIUj%2BPWy4%2BUeWU8v4XLn6dMSYb5GXDIAWDb1RNFtVFgAUdtgbcuBABbq6XxRfC%2Bl82Vf%2BeXvOyllZrVGnXGXOBA5reoapzC7IFwokpQuleNOhAXOkwTKoK2tVUjNZFsF9LmrxXAqyyzqggYkGDuYwox6f1HoXU%2B2A6MQuotv4pCd%2B0acaDD7tNUMRHr6OsPIaHszA5JK4ilpC8c%2F1jPA73%2FTWN%2BYxO24QS1l6fyDJC36FEuHLalsTJwgoy2qeIa09SfhGU7VeP7PPuaehFeoR36XYL99QmpniPZHJgFqOZBkza4A4QWTUp4PBGtAHzzki5qoD0qplmE7e%2F8a7uE07ua8Hei2mMJC1xsMGOqUBzQsMSXCvwi5FR6AvhjiiYCQTvdlx6FnHMaQKnhKLj64RVg5e8KqmOkZEAN0mmQn6ivzMrjEC1SAMnRj0o6DYHnAXM0YDtIDLG6JU7wzgQDt0Ib7bjB%2F42yTpKWYkkyWsWGy756R4CkWKTAKXHhla8td85tdAM%2BJt3xK4cPJfjT3O7%2B7jpcOf9%2B4qalDka2HsYo0hArsdyILwfGK1XmU6QP5UFESd&X-Amz-Signature=5db3b08af4199371e43778754fdf23dac9946a36b9cad1b9a70a8ccf4b1bf416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRRAOKE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6m4BEnjUXJ0H8RRRnupfHxhSEIYODmAOnvp%2FPBOmRzAiEA6bNEAFz%2Br05LbQ%2FXmcfT17HcFYuIgVwjIL7E6q0LRdIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvG5SwoQWOIKMIVTCrcA7JJYh0W1kW7BhOp6IRaEiLGuoy%2BYG73%2BEuoZ6XsswqhHr4SxiSzOrFW6sGvCWzGmKjidZGUEXqKgBAhlR10sFwd4a0YKLWfQIOSLzwgqDKXmI5u8SOOzGDtTnL8pb4syEuU46SWLc3loWSbq4XrYpvgONMbzDEDererhY3rhmEQ86f4rCIN3KZ%2BykY%2BUS%2BgxbjV%2BF3x3KpKGzQGxkrYkvMO7EWDAZP%2FTYd0dg7rCZF1XijKfh3OPc45XpdsR0xb3bIhGdDhFYNwd%2BrYQEM16s1SGgXozgOhIUj%2BPWy4%2BUeWU8v4XLn6dMSYb5GXDIAWDb1RNFtVFgAUdtgbcuBABbq6XxRfC%2Bl82Vf%2BeXvOyllZrVGnXGXOBA5reoapzC7IFwokpQuleNOhAXOkwTKoK2tVUjNZFsF9LmrxXAqyyzqggYkGDuYwox6f1HoXU%2B2A6MQuotv4pCd%2B0acaDD7tNUMRHr6OsPIaHszA5JK4ilpC8c%2F1jPA73%2FTWN%2BYxO24QS1l6fyDJC36FEuHLalsTJwgoy2qeIa09SfhGU7VeP7PPuaehFeoR36XYL99QmpniPZHJgFqOZBkza4A4QWTUp4PBGtAHzzki5qoD0qplmE7e%2F8a7uE07ua8Hei2mMJC1xsMGOqUBzQsMSXCvwi5FR6AvhjiiYCQTvdlx6FnHMaQKnhKLj64RVg5e8KqmOkZEAN0mmQn6ivzMrjEC1SAMnRj0o6DYHnAXM0YDtIDLG6JU7wzgQDt0Ib7bjB%2F42yTpKWYkkyWsWGy756R4CkWKTAKXHhla8td85tdAM%2BJt3xK4cPJfjT3O7%2B7jpcOf9%2B4qalDka2HsYo0hArsdyILwfGK1XmU6QP5UFESd&X-Amz-Signature=9606390e2bda64303aef9ee61e3160bed69874ce84f4ae597d738e90dfc5d746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
