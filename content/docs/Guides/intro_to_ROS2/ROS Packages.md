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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL37KNY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2QTPF1xUGB6e6f6fmB1RUVg2%2FJjde80lDFsE1HaJq1AiEAyYjlyesXaklKSUDOHKM%2BnynzgIj8O15N9rgfNGt6m64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwfyWsu%2FprIoWvoCrcA4n%2F2AToVP6hYumpvPR42KSTdPeLTALCaa%2F8F719ZNzLldsWyF474H6FUL8XZlx8muFITkPy89uXVH%2Bwhj%2FhNNkJaZ15ximXyX9GR%2Bse7NUd8GxvBpt3WXrBLaUsg0RJT07oFGUG%2BohS85Ywdhqyrs1q0p2ICnSv8eZdWdwJn2OWwHX%2FHxwG%2B2XlnkvF5yWAyWg7L%2BUJz1AAmkfzYD2oFNgRMHFVNOOJrAehp%2BEpFapDe55uABmD3QJlkBkomWQd%2FHhQZ8qxJb091FkyC0%2B1Mwc9Wmg4%2FRKGjrPJPc6SMH4s2ZE4IxezPdb3pakkfr18nBZywYgSm5L73PH5WXgSQTmprusFKDkz7%2BvYrdXT48JuXsq43SSKUFnLmBHKoctNWOr30nYH%2Fo1Qy%2BhnRnpID2OILiuMiCpSfvnEiB0n5JFAi3OdJQjCqE%2BnZzSnBmTRFNyCdfwf426dyEfObWhNlXojyiT5t%2Bb86IHFpDikp6pjTQSyhAsS3aHmHpDb9MgZqAegaa2dneR0A8cYNjCHvLI3htoGcnEjbpv6Sn7LeAsy5SiyKn%2BXhhlm7EKtiUpdhznzEucfX07yi%2FYlTtDgL07t8DHgfDSwiUvXFx4iUgjYMfHds%2Bl1Y9ksRv8gMOb9ssEGOqUBhydhntmNxR1aX90v%2F3jjleoAGzuW7pm%2BcCko8uXX4mXbvjsZcHOAPXeiN9QnRPYzgRZmr0UlNn6mbjFG0pWfZe4Hd%2FxyrQibxhryZVmLgwyCqaEtcMNq88nIUno%2BoRPuMBH0HSDe8mvbsUMrgNHN3s6WOOqa5uPmy8YgCxIEHQ5hDiQjF8XU5bo1BVR9iv7FMBs1gj1rqBgyytjt75RyLWluMz7P&X-Amz-Signature=7c6221ebcfb7217a394234683de51e1279aac15322b42caf348031eaaafdee03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL37KNY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2QTPF1xUGB6e6f6fmB1RUVg2%2FJjde80lDFsE1HaJq1AiEAyYjlyesXaklKSUDOHKM%2BnynzgIj8O15N9rgfNGt6m64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwfyWsu%2FprIoWvoCrcA4n%2F2AToVP6hYumpvPR42KSTdPeLTALCaa%2F8F719ZNzLldsWyF474H6FUL8XZlx8muFITkPy89uXVH%2Bwhj%2FhNNkJaZ15ximXyX9GR%2Bse7NUd8GxvBpt3WXrBLaUsg0RJT07oFGUG%2BohS85Ywdhqyrs1q0p2ICnSv8eZdWdwJn2OWwHX%2FHxwG%2B2XlnkvF5yWAyWg7L%2BUJz1AAmkfzYD2oFNgRMHFVNOOJrAehp%2BEpFapDe55uABmD3QJlkBkomWQd%2FHhQZ8qxJb091FkyC0%2B1Mwc9Wmg4%2FRKGjrPJPc6SMH4s2ZE4IxezPdb3pakkfr18nBZywYgSm5L73PH5WXgSQTmprusFKDkz7%2BvYrdXT48JuXsq43SSKUFnLmBHKoctNWOr30nYH%2Fo1Qy%2BhnRnpID2OILiuMiCpSfvnEiB0n5JFAi3OdJQjCqE%2BnZzSnBmTRFNyCdfwf426dyEfObWhNlXojyiT5t%2Bb86IHFpDikp6pjTQSyhAsS3aHmHpDb9MgZqAegaa2dneR0A8cYNjCHvLI3htoGcnEjbpv6Sn7LeAsy5SiyKn%2BXhhlm7EKtiUpdhznzEucfX07yi%2FYlTtDgL07t8DHgfDSwiUvXFx4iUgjYMfHds%2Bl1Y9ksRv8gMOb9ssEGOqUBhydhntmNxR1aX90v%2F3jjleoAGzuW7pm%2BcCko8uXX4mXbvjsZcHOAPXeiN9QnRPYzgRZmr0UlNn6mbjFG0pWfZe4Hd%2FxyrQibxhryZVmLgwyCqaEtcMNq88nIUno%2BoRPuMBH0HSDe8mvbsUMrgNHN3s6WOOqa5uPmy8YgCxIEHQ5hDiQjF8XU5bo1BVR9iv7FMBs1gj1rqBgyytjt75RyLWluMz7P&X-Amz-Signature=8090454af917c418f6da673ffb6ab20634e9aceabe2a382c46908303c59bd87a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL37KNY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2QTPF1xUGB6e6f6fmB1RUVg2%2FJjde80lDFsE1HaJq1AiEAyYjlyesXaklKSUDOHKM%2BnynzgIj8O15N9rgfNGt6m64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwfyWsu%2FprIoWvoCrcA4n%2F2AToVP6hYumpvPR42KSTdPeLTALCaa%2F8F719ZNzLldsWyF474H6FUL8XZlx8muFITkPy89uXVH%2Bwhj%2FhNNkJaZ15ximXyX9GR%2Bse7NUd8GxvBpt3WXrBLaUsg0RJT07oFGUG%2BohS85Ywdhqyrs1q0p2ICnSv8eZdWdwJn2OWwHX%2FHxwG%2B2XlnkvF5yWAyWg7L%2BUJz1AAmkfzYD2oFNgRMHFVNOOJrAehp%2BEpFapDe55uABmD3QJlkBkomWQd%2FHhQZ8qxJb091FkyC0%2B1Mwc9Wmg4%2FRKGjrPJPc6SMH4s2ZE4IxezPdb3pakkfr18nBZywYgSm5L73PH5WXgSQTmprusFKDkz7%2BvYrdXT48JuXsq43SSKUFnLmBHKoctNWOr30nYH%2Fo1Qy%2BhnRnpID2OILiuMiCpSfvnEiB0n5JFAi3OdJQjCqE%2BnZzSnBmTRFNyCdfwf426dyEfObWhNlXojyiT5t%2Bb86IHFpDikp6pjTQSyhAsS3aHmHpDb9MgZqAegaa2dneR0A8cYNjCHvLI3htoGcnEjbpv6Sn7LeAsy5SiyKn%2BXhhlm7EKtiUpdhznzEucfX07yi%2FYlTtDgL07t8DHgfDSwiUvXFx4iUgjYMfHds%2Bl1Y9ksRv8gMOb9ssEGOqUBhydhntmNxR1aX90v%2F3jjleoAGzuW7pm%2BcCko8uXX4mXbvjsZcHOAPXeiN9QnRPYzgRZmr0UlNn6mbjFG0pWfZe4Hd%2FxyrQibxhryZVmLgwyCqaEtcMNq88nIUno%2BoRPuMBH0HSDe8mvbsUMrgNHN3s6WOOqa5uPmy8YgCxIEHQ5hDiQjF8XU5bo1BVR9iv7FMBs1gj1rqBgyytjt75RyLWluMz7P&X-Amz-Signature=8b6dc07bea63b43f8003e7bcbef7103c45e0aa5eaf38576d981228a8ff0093db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL37KNY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2QTPF1xUGB6e6f6fmB1RUVg2%2FJjde80lDFsE1HaJq1AiEAyYjlyesXaklKSUDOHKM%2BnynzgIj8O15N9rgfNGt6m64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwfyWsu%2FprIoWvoCrcA4n%2F2AToVP6hYumpvPR42KSTdPeLTALCaa%2F8F719ZNzLldsWyF474H6FUL8XZlx8muFITkPy89uXVH%2Bwhj%2FhNNkJaZ15ximXyX9GR%2Bse7NUd8GxvBpt3WXrBLaUsg0RJT07oFGUG%2BohS85Ywdhqyrs1q0p2ICnSv8eZdWdwJn2OWwHX%2FHxwG%2B2XlnkvF5yWAyWg7L%2BUJz1AAmkfzYD2oFNgRMHFVNOOJrAehp%2BEpFapDe55uABmD3QJlkBkomWQd%2FHhQZ8qxJb091FkyC0%2B1Mwc9Wmg4%2FRKGjrPJPc6SMH4s2ZE4IxezPdb3pakkfr18nBZywYgSm5L73PH5WXgSQTmprusFKDkz7%2BvYrdXT48JuXsq43SSKUFnLmBHKoctNWOr30nYH%2Fo1Qy%2BhnRnpID2OILiuMiCpSfvnEiB0n5JFAi3OdJQjCqE%2BnZzSnBmTRFNyCdfwf426dyEfObWhNlXojyiT5t%2Bb86IHFpDikp6pjTQSyhAsS3aHmHpDb9MgZqAegaa2dneR0A8cYNjCHvLI3htoGcnEjbpv6Sn7LeAsy5SiyKn%2BXhhlm7EKtiUpdhznzEucfX07yi%2FYlTtDgL07t8DHgfDSwiUvXFx4iUgjYMfHds%2Bl1Y9ksRv8gMOb9ssEGOqUBhydhntmNxR1aX90v%2F3jjleoAGzuW7pm%2BcCko8uXX4mXbvjsZcHOAPXeiN9QnRPYzgRZmr0UlNn6mbjFG0pWfZe4Hd%2FxyrQibxhryZVmLgwyCqaEtcMNq88nIUno%2BoRPuMBH0HSDe8mvbsUMrgNHN3s6WOOqa5uPmy8YgCxIEHQ5hDiQjF8XU5bo1BVR9iv7FMBs1gj1rqBgyytjt75RyLWluMz7P&X-Amz-Signature=5321e5e089587ef6b3df2c2349fd23d224de7a72a3840f4481a7776b8b92e465&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL37KNY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2QTPF1xUGB6e6f6fmB1RUVg2%2FJjde80lDFsE1HaJq1AiEAyYjlyesXaklKSUDOHKM%2BnynzgIj8O15N9rgfNGt6m64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwfyWsu%2FprIoWvoCrcA4n%2F2AToVP6hYumpvPR42KSTdPeLTALCaa%2F8F719ZNzLldsWyF474H6FUL8XZlx8muFITkPy89uXVH%2Bwhj%2FhNNkJaZ15ximXyX9GR%2Bse7NUd8GxvBpt3WXrBLaUsg0RJT07oFGUG%2BohS85Ywdhqyrs1q0p2ICnSv8eZdWdwJn2OWwHX%2FHxwG%2B2XlnkvF5yWAyWg7L%2BUJz1AAmkfzYD2oFNgRMHFVNOOJrAehp%2BEpFapDe55uABmD3QJlkBkomWQd%2FHhQZ8qxJb091FkyC0%2B1Mwc9Wmg4%2FRKGjrPJPc6SMH4s2ZE4IxezPdb3pakkfr18nBZywYgSm5L73PH5WXgSQTmprusFKDkz7%2BvYrdXT48JuXsq43SSKUFnLmBHKoctNWOr30nYH%2Fo1Qy%2BhnRnpID2OILiuMiCpSfvnEiB0n5JFAi3OdJQjCqE%2BnZzSnBmTRFNyCdfwf426dyEfObWhNlXojyiT5t%2Bb86IHFpDikp6pjTQSyhAsS3aHmHpDb9MgZqAegaa2dneR0A8cYNjCHvLI3htoGcnEjbpv6Sn7LeAsy5SiyKn%2BXhhlm7EKtiUpdhznzEucfX07yi%2FYlTtDgL07t8DHgfDSwiUvXFx4iUgjYMfHds%2Bl1Y9ksRv8gMOb9ssEGOqUBhydhntmNxR1aX90v%2F3jjleoAGzuW7pm%2BcCko8uXX4mXbvjsZcHOAPXeiN9QnRPYzgRZmr0UlNn6mbjFG0pWfZe4Hd%2FxyrQibxhryZVmLgwyCqaEtcMNq88nIUno%2BoRPuMBH0HSDe8mvbsUMrgNHN3s6WOOqa5uPmy8YgCxIEHQ5hDiQjF8XU5bo1BVR9iv7FMBs1gj1rqBgyytjt75RyLWluMz7P&X-Amz-Signature=d99f1d03b889e7189c7c33906370c552b7f119c9dec59abcd6303c8a6368ea80&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL37KNY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2QTPF1xUGB6e6f6fmB1RUVg2%2FJjde80lDFsE1HaJq1AiEAyYjlyesXaklKSUDOHKM%2BnynzgIj8O15N9rgfNGt6m64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwfyWsu%2FprIoWvoCrcA4n%2F2AToVP6hYumpvPR42KSTdPeLTALCaa%2F8F719ZNzLldsWyF474H6FUL8XZlx8muFITkPy89uXVH%2Bwhj%2FhNNkJaZ15ximXyX9GR%2Bse7NUd8GxvBpt3WXrBLaUsg0RJT07oFGUG%2BohS85Ywdhqyrs1q0p2ICnSv8eZdWdwJn2OWwHX%2FHxwG%2B2XlnkvF5yWAyWg7L%2BUJz1AAmkfzYD2oFNgRMHFVNOOJrAehp%2BEpFapDe55uABmD3QJlkBkomWQd%2FHhQZ8qxJb091FkyC0%2B1Mwc9Wmg4%2FRKGjrPJPc6SMH4s2ZE4IxezPdb3pakkfr18nBZywYgSm5L73PH5WXgSQTmprusFKDkz7%2BvYrdXT48JuXsq43SSKUFnLmBHKoctNWOr30nYH%2Fo1Qy%2BhnRnpID2OILiuMiCpSfvnEiB0n5JFAi3OdJQjCqE%2BnZzSnBmTRFNyCdfwf426dyEfObWhNlXojyiT5t%2Bb86IHFpDikp6pjTQSyhAsS3aHmHpDb9MgZqAegaa2dneR0A8cYNjCHvLI3htoGcnEjbpv6Sn7LeAsy5SiyKn%2BXhhlm7EKtiUpdhznzEucfX07yi%2FYlTtDgL07t8DHgfDSwiUvXFx4iUgjYMfHds%2Bl1Y9ksRv8gMOb9ssEGOqUBhydhntmNxR1aX90v%2F3jjleoAGzuW7pm%2BcCko8uXX4mXbvjsZcHOAPXeiN9QnRPYzgRZmr0UlNn6mbjFG0pWfZe4Hd%2FxyrQibxhryZVmLgwyCqaEtcMNq88nIUno%2BoRPuMBH0HSDe8mvbsUMrgNHN3s6WOOqa5uPmy8YgCxIEHQ5hDiQjF8XU5bo1BVR9iv7FMBs1gj1rqBgyytjt75RyLWluMz7P&X-Amz-Signature=7412e74358356dae314a5a44e1853b4c4083c87bfb162a89f1bfbf1d7e0a1d29&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL37KNY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2QTPF1xUGB6e6f6fmB1RUVg2%2FJjde80lDFsE1HaJq1AiEAyYjlyesXaklKSUDOHKM%2BnynzgIj8O15N9rgfNGt6m64qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTwfyWsu%2FprIoWvoCrcA4n%2F2AToVP6hYumpvPR42KSTdPeLTALCaa%2F8F719ZNzLldsWyF474H6FUL8XZlx8muFITkPy89uXVH%2Bwhj%2FhNNkJaZ15ximXyX9GR%2Bse7NUd8GxvBpt3WXrBLaUsg0RJT07oFGUG%2BohS85Ywdhqyrs1q0p2ICnSv8eZdWdwJn2OWwHX%2FHxwG%2B2XlnkvF5yWAyWg7L%2BUJz1AAmkfzYD2oFNgRMHFVNOOJrAehp%2BEpFapDe55uABmD3QJlkBkomWQd%2FHhQZ8qxJb091FkyC0%2B1Mwc9Wmg4%2FRKGjrPJPc6SMH4s2ZE4IxezPdb3pakkfr18nBZywYgSm5L73PH5WXgSQTmprusFKDkz7%2BvYrdXT48JuXsq43SSKUFnLmBHKoctNWOr30nYH%2Fo1Qy%2BhnRnpID2OILiuMiCpSfvnEiB0n5JFAi3OdJQjCqE%2BnZzSnBmTRFNyCdfwf426dyEfObWhNlXojyiT5t%2Bb86IHFpDikp6pjTQSyhAsS3aHmHpDb9MgZqAegaa2dneR0A8cYNjCHvLI3htoGcnEjbpv6Sn7LeAsy5SiyKn%2BXhhlm7EKtiUpdhznzEucfX07yi%2FYlTtDgL07t8DHgfDSwiUvXFx4iUgjYMfHds%2Bl1Y9ksRv8gMOb9ssEGOqUBhydhntmNxR1aX90v%2F3jjleoAGzuW7pm%2BcCko8uXX4mXbvjsZcHOAPXeiN9QnRPYzgRZmr0UlNn6mbjFG0pWfZe4Hd%2FxyrQibxhryZVmLgwyCqaEtcMNq88nIUno%2BoRPuMBH0HSDe8mvbsUMrgNHN3s6WOOqa5uPmy8YgCxIEHQ5hDiQjF8XU5bo1BVR9iv7FMBs1gj1rqBgyytjt75RyLWluMz7P&X-Amz-Signature=e368583b685f23f4d635efd0178318b40967aeeb8e010a9be22ef157d19b9778&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
