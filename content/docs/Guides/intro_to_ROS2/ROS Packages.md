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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7IJ7A5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCf%2FybzJ9UWAVUWiiKg%2BPh64U%2FmOzwmG9k30INqlf7vygIhAN1KuKrkyVKkrai%2FC%2BgJitaenvhAGgMdsW%2FPl2m0%2FUJ1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjex31mUgzs8mTaWwq3APjMnqaDzdIyVUSCJO0f60IYe%2F6teifG6GJg5S3WaRo9Xn8PGbXXdF3uJPJWJMPqxaBGwc%2FUFo5s060uPiyyvQkFbFwBmUPvvSk7h6bxE9834G%2B0kiBzxU4Tx1cPV57huiU8wHZ%2B%2BU0XWs9bem2teDx6SPKVSBSdVnuiyv4dkAmwhBJ4EMuIw8Zxhtvm71jWjJ5TklyEOF%2F07cVM0ypcNKXg%2FcR2m7jvbWMD0cINe1fXDZk%2BYnsMbOqeAHVmEoSs5Y1z80sLKJrsk0nB7SjCj2OZ4PI%2BRPumZHDyCoo6KjX25BJ%2Fji3d84PNCF94ljHmNqSnZrSsAprHxknqVAeRJqvGzFyrGITeC9QEhikN0p99dKDkovwzhY5CyTNddB3prm1%2Fbxiq1wLFPb8qhmr0cS1PYDk9NMDLBG%2BoXU5o76jxv%2FbHtzuvcxQ4zl5UfZ69%2FNqHg9YVblJ6nwDU2K9KbIg9%2B%2FTgixt8cj865zwICmt%2BWNAe68aht6W5PkTml9MWo4DwUTYyE4Ej%2FLCfQpMYsEs70HyCSY38xCqV2hBqfSHoI3eQBtqngkR7F3hF%2BjXdTnO5AIXBSmC4KdtI7udLd7WcFdFXsJ%2FgUFPkSR3jnZZ3EFsG12n02RnwU9DjjCRs5LABjqkAQLe40czX4sKDemwfKPeG4pJj2mQZEw7OE%2BIny8GZ3NDb8AZGnQssHoGgPyU%2FqAgO9F760zm735sCcJK2Q%2BgJu6i1ddXtnZWrb475Kl88B%2FVhBxY%2BUgVxVyBn0nM5AQmJ0JEIseo1jTSWus6OJ5j1duTK9QAUB9NitDqHKpo%2BNrt5z4vYwJGKK7pCPm%2F0NWaXkTyheLimx7O%2Fl%2F%2Fkr2QaPR6AL5L&X-Amz-Signature=39a9143567379ed8598bc3c7ae9f9bd632363733d5b9954a0d77d1500010c667&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7IJ7A5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCf%2FybzJ9UWAVUWiiKg%2BPh64U%2FmOzwmG9k30INqlf7vygIhAN1KuKrkyVKkrai%2FC%2BgJitaenvhAGgMdsW%2FPl2m0%2FUJ1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjex31mUgzs8mTaWwq3APjMnqaDzdIyVUSCJO0f60IYe%2F6teifG6GJg5S3WaRo9Xn8PGbXXdF3uJPJWJMPqxaBGwc%2FUFo5s060uPiyyvQkFbFwBmUPvvSk7h6bxE9834G%2B0kiBzxU4Tx1cPV57huiU8wHZ%2B%2BU0XWs9bem2teDx6SPKVSBSdVnuiyv4dkAmwhBJ4EMuIw8Zxhtvm71jWjJ5TklyEOF%2F07cVM0ypcNKXg%2FcR2m7jvbWMD0cINe1fXDZk%2BYnsMbOqeAHVmEoSs5Y1z80sLKJrsk0nB7SjCj2OZ4PI%2BRPumZHDyCoo6KjX25BJ%2Fji3d84PNCF94ljHmNqSnZrSsAprHxknqVAeRJqvGzFyrGITeC9QEhikN0p99dKDkovwzhY5CyTNddB3prm1%2Fbxiq1wLFPb8qhmr0cS1PYDk9NMDLBG%2BoXU5o76jxv%2FbHtzuvcxQ4zl5UfZ69%2FNqHg9YVblJ6nwDU2K9KbIg9%2B%2FTgixt8cj865zwICmt%2BWNAe68aht6W5PkTml9MWo4DwUTYyE4Ej%2FLCfQpMYsEs70HyCSY38xCqV2hBqfSHoI3eQBtqngkR7F3hF%2BjXdTnO5AIXBSmC4KdtI7udLd7WcFdFXsJ%2FgUFPkSR3jnZZ3EFsG12n02RnwU9DjjCRs5LABjqkAQLe40czX4sKDemwfKPeG4pJj2mQZEw7OE%2BIny8GZ3NDb8AZGnQssHoGgPyU%2FqAgO9F760zm735sCcJK2Q%2BgJu6i1ddXtnZWrb475Kl88B%2FVhBxY%2BUgVxVyBn0nM5AQmJ0JEIseo1jTSWus6OJ5j1duTK9QAUB9NitDqHKpo%2BNrt5z4vYwJGKK7pCPm%2F0NWaXkTyheLimx7O%2Fl%2F%2Fkr2QaPR6AL5L&X-Amz-Signature=15fac539d5375c83d7f71d088953de8b00c5b232825809a1acfd19544c2df2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7IJ7A5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCf%2FybzJ9UWAVUWiiKg%2BPh64U%2FmOzwmG9k30INqlf7vygIhAN1KuKrkyVKkrai%2FC%2BgJitaenvhAGgMdsW%2FPl2m0%2FUJ1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjex31mUgzs8mTaWwq3APjMnqaDzdIyVUSCJO0f60IYe%2F6teifG6GJg5S3WaRo9Xn8PGbXXdF3uJPJWJMPqxaBGwc%2FUFo5s060uPiyyvQkFbFwBmUPvvSk7h6bxE9834G%2B0kiBzxU4Tx1cPV57huiU8wHZ%2B%2BU0XWs9bem2teDx6SPKVSBSdVnuiyv4dkAmwhBJ4EMuIw8Zxhtvm71jWjJ5TklyEOF%2F07cVM0ypcNKXg%2FcR2m7jvbWMD0cINe1fXDZk%2BYnsMbOqeAHVmEoSs5Y1z80sLKJrsk0nB7SjCj2OZ4PI%2BRPumZHDyCoo6KjX25BJ%2Fji3d84PNCF94ljHmNqSnZrSsAprHxknqVAeRJqvGzFyrGITeC9QEhikN0p99dKDkovwzhY5CyTNddB3prm1%2Fbxiq1wLFPb8qhmr0cS1PYDk9NMDLBG%2BoXU5o76jxv%2FbHtzuvcxQ4zl5UfZ69%2FNqHg9YVblJ6nwDU2K9KbIg9%2B%2FTgixt8cj865zwICmt%2BWNAe68aht6W5PkTml9MWo4DwUTYyE4Ej%2FLCfQpMYsEs70HyCSY38xCqV2hBqfSHoI3eQBtqngkR7F3hF%2BjXdTnO5AIXBSmC4KdtI7udLd7WcFdFXsJ%2FgUFPkSR3jnZZ3EFsG12n02RnwU9DjjCRs5LABjqkAQLe40czX4sKDemwfKPeG4pJj2mQZEw7OE%2BIny8GZ3NDb8AZGnQssHoGgPyU%2FqAgO9F760zm735sCcJK2Q%2BgJu6i1ddXtnZWrb475Kl88B%2FVhBxY%2BUgVxVyBn0nM5AQmJ0JEIseo1jTSWus6OJ5j1duTK9QAUB9NitDqHKpo%2BNrt5z4vYwJGKK7pCPm%2F0NWaXkTyheLimx7O%2Fl%2F%2Fkr2QaPR6AL5L&X-Amz-Signature=426a8f2fc50b83090704c7553f78112102d6c93361cb8b86c671a99b00f32be8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7IJ7A5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCf%2FybzJ9UWAVUWiiKg%2BPh64U%2FmOzwmG9k30INqlf7vygIhAN1KuKrkyVKkrai%2FC%2BgJitaenvhAGgMdsW%2FPl2m0%2FUJ1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjex31mUgzs8mTaWwq3APjMnqaDzdIyVUSCJO0f60IYe%2F6teifG6GJg5S3WaRo9Xn8PGbXXdF3uJPJWJMPqxaBGwc%2FUFo5s060uPiyyvQkFbFwBmUPvvSk7h6bxE9834G%2B0kiBzxU4Tx1cPV57huiU8wHZ%2B%2BU0XWs9bem2teDx6SPKVSBSdVnuiyv4dkAmwhBJ4EMuIw8Zxhtvm71jWjJ5TklyEOF%2F07cVM0ypcNKXg%2FcR2m7jvbWMD0cINe1fXDZk%2BYnsMbOqeAHVmEoSs5Y1z80sLKJrsk0nB7SjCj2OZ4PI%2BRPumZHDyCoo6KjX25BJ%2Fji3d84PNCF94ljHmNqSnZrSsAprHxknqVAeRJqvGzFyrGITeC9QEhikN0p99dKDkovwzhY5CyTNddB3prm1%2Fbxiq1wLFPb8qhmr0cS1PYDk9NMDLBG%2BoXU5o76jxv%2FbHtzuvcxQ4zl5UfZ69%2FNqHg9YVblJ6nwDU2K9KbIg9%2B%2FTgixt8cj865zwICmt%2BWNAe68aht6W5PkTml9MWo4DwUTYyE4Ej%2FLCfQpMYsEs70HyCSY38xCqV2hBqfSHoI3eQBtqngkR7F3hF%2BjXdTnO5AIXBSmC4KdtI7udLd7WcFdFXsJ%2FgUFPkSR3jnZZ3EFsG12n02RnwU9DjjCRs5LABjqkAQLe40czX4sKDemwfKPeG4pJj2mQZEw7OE%2BIny8GZ3NDb8AZGnQssHoGgPyU%2FqAgO9F760zm735sCcJK2Q%2BgJu6i1ddXtnZWrb475Kl88B%2FVhBxY%2BUgVxVyBn0nM5AQmJ0JEIseo1jTSWus6OJ5j1duTK9QAUB9NitDqHKpo%2BNrt5z4vYwJGKK7pCPm%2F0NWaXkTyheLimx7O%2Fl%2F%2Fkr2QaPR6AL5L&X-Amz-Signature=74111cc5f013dd3f4637f18a71de4b2ed4301fd09014d8fca5d508fcddfce6de&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7IJ7A5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCf%2FybzJ9UWAVUWiiKg%2BPh64U%2FmOzwmG9k30INqlf7vygIhAN1KuKrkyVKkrai%2FC%2BgJitaenvhAGgMdsW%2FPl2m0%2FUJ1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjex31mUgzs8mTaWwq3APjMnqaDzdIyVUSCJO0f60IYe%2F6teifG6GJg5S3WaRo9Xn8PGbXXdF3uJPJWJMPqxaBGwc%2FUFo5s060uPiyyvQkFbFwBmUPvvSk7h6bxE9834G%2B0kiBzxU4Tx1cPV57huiU8wHZ%2B%2BU0XWs9bem2teDx6SPKVSBSdVnuiyv4dkAmwhBJ4EMuIw8Zxhtvm71jWjJ5TklyEOF%2F07cVM0ypcNKXg%2FcR2m7jvbWMD0cINe1fXDZk%2BYnsMbOqeAHVmEoSs5Y1z80sLKJrsk0nB7SjCj2OZ4PI%2BRPumZHDyCoo6KjX25BJ%2Fji3d84PNCF94ljHmNqSnZrSsAprHxknqVAeRJqvGzFyrGITeC9QEhikN0p99dKDkovwzhY5CyTNddB3prm1%2Fbxiq1wLFPb8qhmr0cS1PYDk9NMDLBG%2BoXU5o76jxv%2FbHtzuvcxQ4zl5UfZ69%2FNqHg9YVblJ6nwDU2K9KbIg9%2B%2FTgixt8cj865zwICmt%2BWNAe68aht6W5PkTml9MWo4DwUTYyE4Ej%2FLCfQpMYsEs70HyCSY38xCqV2hBqfSHoI3eQBtqngkR7F3hF%2BjXdTnO5AIXBSmC4KdtI7udLd7WcFdFXsJ%2FgUFPkSR3jnZZ3EFsG12n02RnwU9DjjCRs5LABjqkAQLe40czX4sKDemwfKPeG4pJj2mQZEw7OE%2BIny8GZ3NDb8AZGnQssHoGgPyU%2FqAgO9F760zm735sCcJK2Q%2BgJu6i1ddXtnZWrb475Kl88B%2FVhBxY%2BUgVxVyBn0nM5AQmJ0JEIseo1jTSWus6OJ5j1duTK9QAUB9NitDqHKpo%2BNrt5z4vYwJGKK7pCPm%2F0NWaXkTyheLimx7O%2Fl%2F%2Fkr2QaPR6AL5L&X-Amz-Signature=e2d3ae514e40e7a4169f6572b604b99b96504e55af19fd80973cbe75ba1270b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7IJ7A5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCf%2FybzJ9UWAVUWiiKg%2BPh64U%2FmOzwmG9k30INqlf7vygIhAN1KuKrkyVKkrai%2FC%2BgJitaenvhAGgMdsW%2FPl2m0%2FUJ1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjex31mUgzs8mTaWwq3APjMnqaDzdIyVUSCJO0f60IYe%2F6teifG6GJg5S3WaRo9Xn8PGbXXdF3uJPJWJMPqxaBGwc%2FUFo5s060uPiyyvQkFbFwBmUPvvSk7h6bxE9834G%2B0kiBzxU4Tx1cPV57huiU8wHZ%2B%2BU0XWs9bem2teDx6SPKVSBSdVnuiyv4dkAmwhBJ4EMuIw8Zxhtvm71jWjJ5TklyEOF%2F07cVM0ypcNKXg%2FcR2m7jvbWMD0cINe1fXDZk%2BYnsMbOqeAHVmEoSs5Y1z80sLKJrsk0nB7SjCj2OZ4PI%2BRPumZHDyCoo6KjX25BJ%2Fji3d84PNCF94ljHmNqSnZrSsAprHxknqVAeRJqvGzFyrGITeC9QEhikN0p99dKDkovwzhY5CyTNddB3prm1%2Fbxiq1wLFPb8qhmr0cS1PYDk9NMDLBG%2BoXU5o76jxv%2FbHtzuvcxQ4zl5UfZ69%2FNqHg9YVblJ6nwDU2K9KbIg9%2B%2FTgixt8cj865zwICmt%2BWNAe68aht6W5PkTml9MWo4DwUTYyE4Ej%2FLCfQpMYsEs70HyCSY38xCqV2hBqfSHoI3eQBtqngkR7F3hF%2BjXdTnO5AIXBSmC4KdtI7udLd7WcFdFXsJ%2FgUFPkSR3jnZZ3EFsG12n02RnwU9DjjCRs5LABjqkAQLe40czX4sKDemwfKPeG4pJj2mQZEw7OE%2BIny8GZ3NDb8AZGnQssHoGgPyU%2FqAgO9F760zm735sCcJK2Q%2BgJu6i1ddXtnZWrb475Kl88B%2FVhBxY%2BUgVxVyBn0nM5AQmJ0JEIseo1jTSWus6OJ5j1duTK9QAUB9NitDqHKpo%2BNrt5z4vYwJGKK7pCPm%2F0NWaXkTyheLimx7O%2Fl%2F%2Fkr2QaPR6AL5L&X-Amz-Signature=3608e0ebd7dd0f947a281914f66038604b9091853475c6c948c70cf52bd78c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7IJ7A5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCf%2FybzJ9UWAVUWiiKg%2BPh64U%2FmOzwmG9k30INqlf7vygIhAN1KuKrkyVKkrai%2FC%2BgJitaenvhAGgMdsW%2FPl2m0%2FUJ1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjex31mUgzs8mTaWwq3APjMnqaDzdIyVUSCJO0f60IYe%2F6teifG6GJg5S3WaRo9Xn8PGbXXdF3uJPJWJMPqxaBGwc%2FUFo5s060uPiyyvQkFbFwBmUPvvSk7h6bxE9834G%2B0kiBzxU4Tx1cPV57huiU8wHZ%2B%2BU0XWs9bem2teDx6SPKVSBSdVnuiyv4dkAmwhBJ4EMuIw8Zxhtvm71jWjJ5TklyEOF%2F07cVM0ypcNKXg%2FcR2m7jvbWMD0cINe1fXDZk%2BYnsMbOqeAHVmEoSs5Y1z80sLKJrsk0nB7SjCj2OZ4PI%2BRPumZHDyCoo6KjX25BJ%2Fji3d84PNCF94ljHmNqSnZrSsAprHxknqVAeRJqvGzFyrGITeC9QEhikN0p99dKDkovwzhY5CyTNddB3prm1%2Fbxiq1wLFPb8qhmr0cS1PYDk9NMDLBG%2BoXU5o76jxv%2FbHtzuvcxQ4zl5UfZ69%2FNqHg9YVblJ6nwDU2K9KbIg9%2B%2FTgixt8cj865zwICmt%2BWNAe68aht6W5PkTml9MWo4DwUTYyE4Ej%2FLCfQpMYsEs70HyCSY38xCqV2hBqfSHoI3eQBtqngkR7F3hF%2BjXdTnO5AIXBSmC4KdtI7udLd7WcFdFXsJ%2FgUFPkSR3jnZZ3EFsG12n02RnwU9DjjCRs5LABjqkAQLe40czX4sKDemwfKPeG4pJj2mQZEw7OE%2BIny8GZ3NDb8AZGnQssHoGgPyU%2FqAgO9F760zm735sCcJK2Q%2BgJu6i1ddXtnZWrb475Kl88B%2FVhBxY%2BUgVxVyBn0nM5AQmJ0JEIseo1jTSWus6OJ5j1duTK9QAUB9NitDqHKpo%2BNrt5z4vYwJGKK7pCPm%2F0NWaXkTyheLimx7O%2Fl%2F%2Fkr2QaPR6AL5L&X-Amz-Signature=bbc9bf46275aa4709d8171c363d40557fae2b4057ceca40fafddceb8894b4e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
