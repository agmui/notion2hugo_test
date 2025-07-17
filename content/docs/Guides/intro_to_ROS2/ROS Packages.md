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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGNPXS5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHpymfDIIryV9s81LticE9aGSblZ9g2y7Dp6X1ARfSoQIgUw%2Fso%2FZjn65lOX7gIKeWQTpAUdGioWATXVHiuj70US4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1onx4fXw6HN75OSrcAy3P0JjeoV838%2BJ6DjI7QuSPpOCpLbgFiv2F3YIeksaZ0n9YlfkMSZ2Ju39iqiGuN5cD5n3IAy8Fg7JQmhBDZqYlIQiDOm73bU23huNlyKEouliA4l4C2UYViILm63dj4LJzhPyQn0akwOnuLCQc0FTuRhg6aAjHb4vvZTASPrKEhX0PD8DCFYF3I0K%2BAkWQ0yHJrOrau5zkyl1wlTALqhL8G8yjsVHNewPULmx5eZGI2VvZHym%2BrMooQCk0VayycdazewhSbTa7O5ZcYSjo97WcdfeMxAnrzLTAW%2B940E7BymvAT3X0qcx7X8BEwxCVqOCXJ8txcxo4hDe8k%2FKdG0P79zpRoUR7dV9mvmMRhNwNUJieH5XsJajVB8UjLrw7VdjoUwDXnbnckCvw9Br07ErAhuF0jKzUomNN9t9lBcE7EF9YBlRRlWvXNumd%2FJNtk2MYut3vPFnC4vhd3idS6ioCDhExOHROHsZB56F1P5UA9SxqfclJWZtEPI2tSnw1pEKRrqodkjTm%2Bkbk96jIZ4dXJRY722MxlCILlJnfIpuWPCHl%2F%2FI4zOhXPdPbwVJl2zwMPLByb%2B52qraYWtxelK4Si9xqKLxbE5iekp44Z4%2BsW6iDqBi6yhh6Tw%2BKMMqN5cMGOqUB4IxuXIGs19CgXXTQaulOlvnRbeKEWdf5JH7XUcxkvj59vGwF1qvzKkEvtcWGl1%2FssF%2BdX%2BlN6JI83fPEVFRImbBP7XE0hEMtilIvDaTzYQM%2B5vsfanehGcL3IbA0SE9Lvk0j34K5ufcPrqJfF2J5mJP1YDHKuTF2ykeglX0X6AS9JQrwZuy6qKeybSSzrfXGZTzQKLJLvEaB%2BvJ4aBjKRYFZCeBK&X-Amz-Signature=4f7be9e76617246a631dc95e38eab0e54438edbc377556f43e45fce57ead5622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGNPXS5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHpymfDIIryV9s81LticE9aGSblZ9g2y7Dp6X1ARfSoQIgUw%2Fso%2FZjn65lOX7gIKeWQTpAUdGioWATXVHiuj70US4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1onx4fXw6HN75OSrcAy3P0JjeoV838%2BJ6DjI7QuSPpOCpLbgFiv2F3YIeksaZ0n9YlfkMSZ2Ju39iqiGuN5cD5n3IAy8Fg7JQmhBDZqYlIQiDOm73bU23huNlyKEouliA4l4C2UYViILm63dj4LJzhPyQn0akwOnuLCQc0FTuRhg6aAjHb4vvZTASPrKEhX0PD8DCFYF3I0K%2BAkWQ0yHJrOrau5zkyl1wlTALqhL8G8yjsVHNewPULmx5eZGI2VvZHym%2BrMooQCk0VayycdazewhSbTa7O5ZcYSjo97WcdfeMxAnrzLTAW%2B940E7BymvAT3X0qcx7X8BEwxCVqOCXJ8txcxo4hDe8k%2FKdG0P79zpRoUR7dV9mvmMRhNwNUJieH5XsJajVB8UjLrw7VdjoUwDXnbnckCvw9Br07ErAhuF0jKzUomNN9t9lBcE7EF9YBlRRlWvXNumd%2FJNtk2MYut3vPFnC4vhd3idS6ioCDhExOHROHsZB56F1P5UA9SxqfclJWZtEPI2tSnw1pEKRrqodkjTm%2Bkbk96jIZ4dXJRY722MxlCILlJnfIpuWPCHl%2F%2FI4zOhXPdPbwVJl2zwMPLByb%2B52qraYWtxelK4Si9xqKLxbE5iekp44Z4%2BsW6iDqBi6yhh6Tw%2BKMMqN5cMGOqUB4IxuXIGs19CgXXTQaulOlvnRbeKEWdf5JH7XUcxkvj59vGwF1qvzKkEvtcWGl1%2FssF%2BdX%2BlN6JI83fPEVFRImbBP7XE0hEMtilIvDaTzYQM%2B5vsfanehGcL3IbA0SE9Lvk0j34K5ufcPrqJfF2J5mJP1YDHKuTF2ykeglX0X6AS9JQrwZuy6qKeybSSzrfXGZTzQKLJLvEaB%2BvJ4aBjKRYFZCeBK&X-Amz-Signature=a941b559a3c0465460844c394909e0acc69e11aa043224ee0b3e861456675e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGNPXS5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHpymfDIIryV9s81LticE9aGSblZ9g2y7Dp6X1ARfSoQIgUw%2Fso%2FZjn65lOX7gIKeWQTpAUdGioWATXVHiuj70US4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1onx4fXw6HN75OSrcAy3P0JjeoV838%2BJ6DjI7QuSPpOCpLbgFiv2F3YIeksaZ0n9YlfkMSZ2Ju39iqiGuN5cD5n3IAy8Fg7JQmhBDZqYlIQiDOm73bU23huNlyKEouliA4l4C2UYViILm63dj4LJzhPyQn0akwOnuLCQc0FTuRhg6aAjHb4vvZTASPrKEhX0PD8DCFYF3I0K%2BAkWQ0yHJrOrau5zkyl1wlTALqhL8G8yjsVHNewPULmx5eZGI2VvZHym%2BrMooQCk0VayycdazewhSbTa7O5ZcYSjo97WcdfeMxAnrzLTAW%2B940E7BymvAT3X0qcx7X8BEwxCVqOCXJ8txcxo4hDe8k%2FKdG0P79zpRoUR7dV9mvmMRhNwNUJieH5XsJajVB8UjLrw7VdjoUwDXnbnckCvw9Br07ErAhuF0jKzUomNN9t9lBcE7EF9YBlRRlWvXNumd%2FJNtk2MYut3vPFnC4vhd3idS6ioCDhExOHROHsZB56F1P5UA9SxqfclJWZtEPI2tSnw1pEKRrqodkjTm%2Bkbk96jIZ4dXJRY722MxlCILlJnfIpuWPCHl%2F%2FI4zOhXPdPbwVJl2zwMPLByb%2B52qraYWtxelK4Si9xqKLxbE5iekp44Z4%2BsW6iDqBi6yhh6Tw%2BKMMqN5cMGOqUB4IxuXIGs19CgXXTQaulOlvnRbeKEWdf5JH7XUcxkvj59vGwF1qvzKkEvtcWGl1%2FssF%2BdX%2BlN6JI83fPEVFRImbBP7XE0hEMtilIvDaTzYQM%2B5vsfanehGcL3IbA0SE9Lvk0j34K5ufcPrqJfF2J5mJP1YDHKuTF2ykeglX0X6AS9JQrwZuy6qKeybSSzrfXGZTzQKLJLvEaB%2BvJ4aBjKRYFZCeBK&X-Amz-Signature=1ed6c704123863f0deb1c6ad5bbee66b3c2bd01743a00c0971166511018947e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGNPXS5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHpymfDIIryV9s81LticE9aGSblZ9g2y7Dp6X1ARfSoQIgUw%2Fso%2FZjn65lOX7gIKeWQTpAUdGioWATXVHiuj70US4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1onx4fXw6HN75OSrcAy3P0JjeoV838%2BJ6DjI7QuSPpOCpLbgFiv2F3YIeksaZ0n9YlfkMSZ2Ju39iqiGuN5cD5n3IAy8Fg7JQmhBDZqYlIQiDOm73bU23huNlyKEouliA4l4C2UYViILm63dj4LJzhPyQn0akwOnuLCQc0FTuRhg6aAjHb4vvZTASPrKEhX0PD8DCFYF3I0K%2BAkWQ0yHJrOrau5zkyl1wlTALqhL8G8yjsVHNewPULmx5eZGI2VvZHym%2BrMooQCk0VayycdazewhSbTa7O5ZcYSjo97WcdfeMxAnrzLTAW%2B940E7BymvAT3X0qcx7X8BEwxCVqOCXJ8txcxo4hDe8k%2FKdG0P79zpRoUR7dV9mvmMRhNwNUJieH5XsJajVB8UjLrw7VdjoUwDXnbnckCvw9Br07ErAhuF0jKzUomNN9t9lBcE7EF9YBlRRlWvXNumd%2FJNtk2MYut3vPFnC4vhd3idS6ioCDhExOHROHsZB56F1P5UA9SxqfclJWZtEPI2tSnw1pEKRrqodkjTm%2Bkbk96jIZ4dXJRY722MxlCILlJnfIpuWPCHl%2F%2FI4zOhXPdPbwVJl2zwMPLByb%2B52qraYWtxelK4Si9xqKLxbE5iekp44Z4%2BsW6iDqBi6yhh6Tw%2BKMMqN5cMGOqUB4IxuXIGs19CgXXTQaulOlvnRbeKEWdf5JH7XUcxkvj59vGwF1qvzKkEvtcWGl1%2FssF%2BdX%2BlN6JI83fPEVFRImbBP7XE0hEMtilIvDaTzYQM%2B5vsfanehGcL3IbA0SE9Lvk0j34K5ufcPrqJfF2J5mJP1YDHKuTF2ykeglX0X6AS9JQrwZuy6qKeybSSzrfXGZTzQKLJLvEaB%2BvJ4aBjKRYFZCeBK&X-Amz-Signature=7dccb221793436921e72424c7fa498950aa00d98e354304578b30d813466a4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGNPXS5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHpymfDIIryV9s81LticE9aGSblZ9g2y7Dp6X1ARfSoQIgUw%2Fso%2FZjn65lOX7gIKeWQTpAUdGioWATXVHiuj70US4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1onx4fXw6HN75OSrcAy3P0JjeoV838%2BJ6DjI7QuSPpOCpLbgFiv2F3YIeksaZ0n9YlfkMSZ2Ju39iqiGuN5cD5n3IAy8Fg7JQmhBDZqYlIQiDOm73bU23huNlyKEouliA4l4C2UYViILm63dj4LJzhPyQn0akwOnuLCQc0FTuRhg6aAjHb4vvZTASPrKEhX0PD8DCFYF3I0K%2BAkWQ0yHJrOrau5zkyl1wlTALqhL8G8yjsVHNewPULmx5eZGI2VvZHym%2BrMooQCk0VayycdazewhSbTa7O5ZcYSjo97WcdfeMxAnrzLTAW%2B940E7BymvAT3X0qcx7X8BEwxCVqOCXJ8txcxo4hDe8k%2FKdG0P79zpRoUR7dV9mvmMRhNwNUJieH5XsJajVB8UjLrw7VdjoUwDXnbnckCvw9Br07ErAhuF0jKzUomNN9t9lBcE7EF9YBlRRlWvXNumd%2FJNtk2MYut3vPFnC4vhd3idS6ioCDhExOHROHsZB56F1P5UA9SxqfclJWZtEPI2tSnw1pEKRrqodkjTm%2Bkbk96jIZ4dXJRY722MxlCILlJnfIpuWPCHl%2F%2FI4zOhXPdPbwVJl2zwMPLByb%2B52qraYWtxelK4Si9xqKLxbE5iekp44Z4%2BsW6iDqBi6yhh6Tw%2BKMMqN5cMGOqUB4IxuXIGs19CgXXTQaulOlvnRbeKEWdf5JH7XUcxkvj59vGwF1qvzKkEvtcWGl1%2FssF%2BdX%2BlN6JI83fPEVFRImbBP7XE0hEMtilIvDaTzYQM%2B5vsfanehGcL3IbA0SE9Lvk0j34K5ufcPrqJfF2J5mJP1YDHKuTF2ykeglX0X6AS9JQrwZuy6qKeybSSzrfXGZTzQKLJLvEaB%2BvJ4aBjKRYFZCeBK&X-Amz-Signature=8ba54eb8f259eec148ec4c871188426fb93aa6518c6edf767d428963ca28b1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGNPXS5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHpymfDIIryV9s81LticE9aGSblZ9g2y7Dp6X1ARfSoQIgUw%2Fso%2FZjn65lOX7gIKeWQTpAUdGioWATXVHiuj70US4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1onx4fXw6HN75OSrcAy3P0JjeoV838%2BJ6DjI7QuSPpOCpLbgFiv2F3YIeksaZ0n9YlfkMSZ2Ju39iqiGuN5cD5n3IAy8Fg7JQmhBDZqYlIQiDOm73bU23huNlyKEouliA4l4C2UYViILm63dj4LJzhPyQn0akwOnuLCQc0FTuRhg6aAjHb4vvZTASPrKEhX0PD8DCFYF3I0K%2BAkWQ0yHJrOrau5zkyl1wlTALqhL8G8yjsVHNewPULmx5eZGI2VvZHym%2BrMooQCk0VayycdazewhSbTa7O5ZcYSjo97WcdfeMxAnrzLTAW%2B940E7BymvAT3X0qcx7X8BEwxCVqOCXJ8txcxo4hDe8k%2FKdG0P79zpRoUR7dV9mvmMRhNwNUJieH5XsJajVB8UjLrw7VdjoUwDXnbnckCvw9Br07ErAhuF0jKzUomNN9t9lBcE7EF9YBlRRlWvXNumd%2FJNtk2MYut3vPFnC4vhd3idS6ioCDhExOHROHsZB56F1P5UA9SxqfclJWZtEPI2tSnw1pEKRrqodkjTm%2Bkbk96jIZ4dXJRY722MxlCILlJnfIpuWPCHl%2F%2FI4zOhXPdPbwVJl2zwMPLByb%2B52qraYWtxelK4Si9xqKLxbE5iekp44Z4%2BsW6iDqBi6yhh6Tw%2BKMMqN5cMGOqUB4IxuXIGs19CgXXTQaulOlvnRbeKEWdf5JH7XUcxkvj59vGwF1qvzKkEvtcWGl1%2FssF%2BdX%2BlN6JI83fPEVFRImbBP7XE0hEMtilIvDaTzYQM%2B5vsfanehGcL3IbA0SE9Lvk0j34K5ufcPrqJfF2J5mJP1YDHKuTF2ykeglX0X6AS9JQrwZuy6qKeybSSzrfXGZTzQKLJLvEaB%2BvJ4aBjKRYFZCeBK&X-Amz-Signature=efe4b9767b61c38d9533e622e157281ac0324cc6bda03489e9c65b91c41e60eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGNPXS5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDHpymfDIIryV9s81LticE9aGSblZ9g2y7Dp6X1ARfSoQIgUw%2Fso%2FZjn65lOX7gIKeWQTpAUdGioWATXVHiuj70US4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOC1onx4fXw6HN75OSrcAy3P0JjeoV838%2BJ6DjI7QuSPpOCpLbgFiv2F3YIeksaZ0n9YlfkMSZ2Ju39iqiGuN5cD5n3IAy8Fg7JQmhBDZqYlIQiDOm73bU23huNlyKEouliA4l4C2UYViILm63dj4LJzhPyQn0akwOnuLCQc0FTuRhg6aAjHb4vvZTASPrKEhX0PD8DCFYF3I0K%2BAkWQ0yHJrOrau5zkyl1wlTALqhL8G8yjsVHNewPULmx5eZGI2VvZHym%2BrMooQCk0VayycdazewhSbTa7O5ZcYSjo97WcdfeMxAnrzLTAW%2B940E7BymvAT3X0qcx7X8BEwxCVqOCXJ8txcxo4hDe8k%2FKdG0P79zpRoUR7dV9mvmMRhNwNUJieH5XsJajVB8UjLrw7VdjoUwDXnbnckCvw9Br07ErAhuF0jKzUomNN9t9lBcE7EF9YBlRRlWvXNumd%2FJNtk2MYut3vPFnC4vhd3idS6ioCDhExOHROHsZB56F1P5UA9SxqfclJWZtEPI2tSnw1pEKRrqodkjTm%2Bkbk96jIZ4dXJRY722MxlCILlJnfIpuWPCHl%2F%2FI4zOhXPdPbwVJl2zwMPLByb%2B52qraYWtxelK4Si9xqKLxbE5iekp44Z4%2BsW6iDqBi6yhh6Tw%2BKMMqN5cMGOqUB4IxuXIGs19CgXXTQaulOlvnRbeKEWdf5JH7XUcxkvj59vGwF1qvzKkEvtcWGl1%2FssF%2BdX%2BlN6JI83fPEVFRImbBP7XE0hEMtilIvDaTzYQM%2B5vsfanehGcL3IbA0SE9Lvk0j34K5ufcPrqJfF2J5mJP1YDHKuTF2ykeglX0X6AS9JQrwZuy6qKeybSSzrfXGZTzQKLJLvEaB%2BvJ4aBjKRYFZCeBK&X-Amz-Signature=08fc507f4fda0df4aa317b4bfd5cc5b61752a01c09591d1c632774d1a28984e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
