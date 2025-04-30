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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZL5L4JZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIElMWUU5rExd%2BqS6bLmKKYy2ZimQTeFKztnqRaUi0FsNAiBsB5mcik6SOT5e8E9uDxgSKHBiZrtGyTbRu%2B9ZD2ixqyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIA3Zav0Q7tbixf0LKtwDmpa0kgZSdPCDzwuun%2Br3ji0vVwUL0KjKmr3WuDbEEBteDll%2BBn%2FfiDJLRDMeEYRKxxfopotjYkM4ro0Hse7Ue8BuHK5qlO2qYPKqu8t%2FybJqepfHCBFcLcwkUOvXIKdXx6IoCZtAzJOXR5wLVmK4OeUjT109Ige0bKTjnWcLIat4LUK7RElm%2BJsbQk7Ep35Ul40s0U2ClFEW8Xfpyg6w6cRFz9f%2FQ2FIn%2BmCq5Y5EOXHgqXncbZ3mmhMRRdy%2BjCssi%2F%2Fb5PMd06wqLlP4ZbaA%2BSssOYJWT%2FvP8MFP9SUZbkBEVBMGgWX0SKSo6qciXFDdJge4Jpafy8UGy9VnwMGg60Lr4sYbj5YFmB%2FU2ltO5bllG3t2SVfPO2skkA75SIuF245dBaEmiypQe0BiqaYmvgIYn1uK5KeZSaq2kmzA9n2sBQzOBP6fcolRWLaCxhTa4OIRWcZqw9cGK5UQgdDcYdRr9NoKn6EQMfpLVdEJoxbw%2FHQ4Ca5u%2Fzc3Ikp82FKByJBemw%2F7HOs9cpiLU8sjBtCss4SbyF0iY68doLXvc6GEKFHSF2uxQnEEhhLwBFWqUOhhyi7Xx%2FNkkQJWv%2FeujS6JPo8%2Bxg7dJgGUSGNta2zfBmhkn0PJ68RB%2FMwwZ7JwAY6pgGMommrcszYWa0x%2BMr9CjsRAc4mGgEC78zZMhH9rHxykXVhLUSb%2FxUua69KAkHBTZVSZLAiK5Rf1dC4RhhjH7fb8ZsTU%2BNIOtpqivVB1Roe3FEEBU2PZvnJpPzXfdYAAmhb6LhCh7FOmGFVrv4easz96yS1em3lHygly77qozxTtZ2E5T61ZsYU6MaccCvups3dvGwEyN1uvTkk5CHC6scl%2FI4YEK1X&X-Amz-Signature=22254d82a2a5f32c7fee564e02cf3ec610f1f6b73dfbb9c1d169db59603b94be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZL5L4JZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIElMWUU5rExd%2BqS6bLmKKYy2ZimQTeFKztnqRaUi0FsNAiBsB5mcik6SOT5e8E9uDxgSKHBiZrtGyTbRu%2B9ZD2ixqyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIA3Zav0Q7tbixf0LKtwDmpa0kgZSdPCDzwuun%2Br3ji0vVwUL0KjKmr3WuDbEEBteDll%2BBn%2FfiDJLRDMeEYRKxxfopotjYkM4ro0Hse7Ue8BuHK5qlO2qYPKqu8t%2FybJqepfHCBFcLcwkUOvXIKdXx6IoCZtAzJOXR5wLVmK4OeUjT109Ige0bKTjnWcLIat4LUK7RElm%2BJsbQk7Ep35Ul40s0U2ClFEW8Xfpyg6w6cRFz9f%2FQ2FIn%2BmCq5Y5EOXHgqXncbZ3mmhMRRdy%2BjCssi%2F%2Fb5PMd06wqLlP4ZbaA%2BSssOYJWT%2FvP8MFP9SUZbkBEVBMGgWX0SKSo6qciXFDdJge4Jpafy8UGy9VnwMGg60Lr4sYbj5YFmB%2FU2ltO5bllG3t2SVfPO2skkA75SIuF245dBaEmiypQe0BiqaYmvgIYn1uK5KeZSaq2kmzA9n2sBQzOBP6fcolRWLaCxhTa4OIRWcZqw9cGK5UQgdDcYdRr9NoKn6EQMfpLVdEJoxbw%2FHQ4Ca5u%2Fzc3Ikp82FKByJBemw%2F7HOs9cpiLU8sjBtCss4SbyF0iY68doLXvc6GEKFHSF2uxQnEEhhLwBFWqUOhhyi7Xx%2FNkkQJWv%2FeujS6JPo8%2Bxg7dJgGUSGNta2zfBmhkn0PJ68RB%2FMwwZ7JwAY6pgGMommrcszYWa0x%2BMr9CjsRAc4mGgEC78zZMhH9rHxykXVhLUSb%2FxUua69KAkHBTZVSZLAiK5Rf1dC4RhhjH7fb8ZsTU%2BNIOtpqivVB1Roe3FEEBU2PZvnJpPzXfdYAAmhb6LhCh7FOmGFVrv4easz96yS1em3lHygly77qozxTtZ2E5T61ZsYU6MaccCvups3dvGwEyN1uvTkk5CHC6scl%2FI4YEK1X&X-Amz-Signature=18adfa9d231160ddceda56164a43094714d0ba6e90ceae768ff22d71b0bb4d08&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZL5L4JZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIElMWUU5rExd%2BqS6bLmKKYy2ZimQTeFKztnqRaUi0FsNAiBsB5mcik6SOT5e8E9uDxgSKHBiZrtGyTbRu%2B9ZD2ixqyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIA3Zav0Q7tbixf0LKtwDmpa0kgZSdPCDzwuun%2Br3ji0vVwUL0KjKmr3WuDbEEBteDll%2BBn%2FfiDJLRDMeEYRKxxfopotjYkM4ro0Hse7Ue8BuHK5qlO2qYPKqu8t%2FybJqepfHCBFcLcwkUOvXIKdXx6IoCZtAzJOXR5wLVmK4OeUjT109Ige0bKTjnWcLIat4LUK7RElm%2BJsbQk7Ep35Ul40s0U2ClFEW8Xfpyg6w6cRFz9f%2FQ2FIn%2BmCq5Y5EOXHgqXncbZ3mmhMRRdy%2BjCssi%2F%2Fb5PMd06wqLlP4ZbaA%2BSssOYJWT%2FvP8MFP9SUZbkBEVBMGgWX0SKSo6qciXFDdJge4Jpafy8UGy9VnwMGg60Lr4sYbj5YFmB%2FU2ltO5bllG3t2SVfPO2skkA75SIuF245dBaEmiypQe0BiqaYmvgIYn1uK5KeZSaq2kmzA9n2sBQzOBP6fcolRWLaCxhTa4OIRWcZqw9cGK5UQgdDcYdRr9NoKn6EQMfpLVdEJoxbw%2FHQ4Ca5u%2Fzc3Ikp82FKByJBemw%2F7HOs9cpiLU8sjBtCss4SbyF0iY68doLXvc6GEKFHSF2uxQnEEhhLwBFWqUOhhyi7Xx%2FNkkQJWv%2FeujS6JPo8%2Bxg7dJgGUSGNta2zfBmhkn0PJ68RB%2FMwwZ7JwAY6pgGMommrcszYWa0x%2BMr9CjsRAc4mGgEC78zZMhH9rHxykXVhLUSb%2FxUua69KAkHBTZVSZLAiK5Rf1dC4RhhjH7fb8ZsTU%2BNIOtpqivVB1Roe3FEEBU2PZvnJpPzXfdYAAmhb6LhCh7FOmGFVrv4easz96yS1em3lHygly77qozxTtZ2E5T61ZsYU6MaccCvups3dvGwEyN1uvTkk5CHC6scl%2FI4YEK1X&X-Amz-Signature=889d4b4f5611d9fcdf78a551f1a1c93ff919cf1c3ae8c1b47acec3dd9ca825b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZL5L4JZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIElMWUU5rExd%2BqS6bLmKKYy2ZimQTeFKztnqRaUi0FsNAiBsB5mcik6SOT5e8E9uDxgSKHBiZrtGyTbRu%2B9ZD2ixqyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIA3Zav0Q7tbixf0LKtwDmpa0kgZSdPCDzwuun%2Br3ji0vVwUL0KjKmr3WuDbEEBteDll%2BBn%2FfiDJLRDMeEYRKxxfopotjYkM4ro0Hse7Ue8BuHK5qlO2qYPKqu8t%2FybJqepfHCBFcLcwkUOvXIKdXx6IoCZtAzJOXR5wLVmK4OeUjT109Ige0bKTjnWcLIat4LUK7RElm%2BJsbQk7Ep35Ul40s0U2ClFEW8Xfpyg6w6cRFz9f%2FQ2FIn%2BmCq5Y5EOXHgqXncbZ3mmhMRRdy%2BjCssi%2F%2Fb5PMd06wqLlP4ZbaA%2BSssOYJWT%2FvP8MFP9SUZbkBEVBMGgWX0SKSo6qciXFDdJge4Jpafy8UGy9VnwMGg60Lr4sYbj5YFmB%2FU2ltO5bllG3t2SVfPO2skkA75SIuF245dBaEmiypQe0BiqaYmvgIYn1uK5KeZSaq2kmzA9n2sBQzOBP6fcolRWLaCxhTa4OIRWcZqw9cGK5UQgdDcYdRr9NoKn6EQMfpLVdEJoxbw%2FHQ4Ca5u%2Fzc3Ikp82FKByJBemw%2F7HOs9cpiLU8sjBtCss4SbyF0iY68doLXvc6GEKFHSF2uxQnEEhhLwBFWqUOhhyi7Xx%2FNkkQJWv%2FeujS6JPo8%2Bxg7dJgGUSGNta2zfBmhkn0PJ68RB%2FMwwZ7JwAY6pgGMommrcszYWa0x%2BMr9CjsRAc4mGgEC78zZMhH9rHxykXVhLUSb%2FxUua69KAkHBTZVSZLAiK5Rf1dC4RhhjH7fb8ZsTU%2BNIOtpqivVB1Roe3FEEBU2PZvnJpPzXfdYAAmhb6LhCh7FOmGFVrv4easz96yS1em3lHygly77qozxTtZ2E5T61ZsYU6MaccCvups3dvGwEyN1uvTkk5CHC6scl%2FI4YEK1X&X-Amz-Signature=51b2c30d29fbe05fd4d6ab3515f263c0aa198a9b7c7cab0ae286aed89015118b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZL5L4JZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIElMWUU5rExd%2BqS6bLmKKYy2ZimQTeFKztnqRaUi0FsNAiBsB5mcik6SOT5e8E9uDxgSKHBiZrtGyTbRu%2B9ZD2ixqyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIA3Zav0Q7tbixf0LKtwDmpa0kgZSdPCDzwuun%2Br3ji0vVwUL0KjKmr3WuDbEEBteDll%2BBn%2FfiDJLRDMeEYRKxxfopotjYkM4ro0Hse7Ue8BuHK5qlO2qYPKqu8t%2FybJqepfHCBFcLcwkUOvXIKdXx6IoCZtAzJOXR5wLVmK4OeUjT109Ige0bKTjnWcLIat4LUK7RElm%2BJsbQk7Ep35Ul40s0U2ClFEW8Xfpyg6w6cRFz9f%2FQ2FIn%2BmCq5Y5EOXHgqXncbZ3mmhMRRdy%2BjCssi%2F%2Fb5PMd06wqLlP4ZbaA%2BSssOYJWT%2FvP8MFP9SUZbkBEVBMGgWX0SKSo6qciXFDdJge4Jpafy8UGy9VnwMGg60Lr4sYbj5YFmB%2FU2ltO5bllG3t2SVfPO2skkA75SIuF245dBaEmiypQe0BiqaYmvgIYn1uK5KeZSaq2kmzA9n2sBQzOBP6fcolRWLaCxhTa4OIRWcZqw9cGK5UQgdDcYdRr9NoKn6EQMfpLVdEJoxbw%2FHQ4Ca5u%2Fzc3Ikp82FKByJBemw%2F7HOs9cpiLU8sjBtCss4SbyF0iY68doLXvc6GEKFHSF2uxQnEEhhLwBFWqUOhhyi7Xx%2FNkkQJWv%2FeujS6JPo8%2Bxg7dJgGUSGNta2zfBmhkn0PJ68RB%2FMwwZ7JwAY6pgGMommrcszYWa0x%2BMr9CjsRAc4mGgEC78zZMhH9rHxykXVhLUSb%2FxUua69KAkHBTZVSZLAiK5Rf1dC4RhhjH7fb8ZsTU%2BNIOtpqivVB1Roe3FEEBU2PZvnJpPzXfdYAAmhb6LhCh7FOmGFVrv4easz96yS1em3lHygly77qozxTtZ2E5T61ZsYU6MaccCvups3dvGwEyN1uvTkk5CHC6scl%2FI4YEK1X&X-Amz-Signature=e899e55032d0350ca9f753e287777253f637095c143882f5c53c93129641ea52&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZL5L4JZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIElMWUU5rExd%2BqS6bLmKKYy2ZimQTeFKztnqRaUi0FsNAiBsB5mcik6SOT5e8E9uDxgSKHBiZrtGyTbRu%2B9ZD2ixqyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIA3Zav0Q7tbixf0LKtwDmpa0kgZSdPCDzwuun%2Br3ji0vVwUL0KjKmr3WuDbEEBteDll%2BBn%2FfiDJLRDMeEYRKxxfopotjYkM4ro0Hse7Ue8BuHK5qlO2qYPKqu8t%2FybJqepfHCBFcLcwkUOvXIKdXx6IoCZtAzJOXR5wLVmK4OeUjT109Ige0bKTjnWcLIat4LUK7RElm%2BJsbQk7Ep35Ul40s0U2ClFEW8Xfpyg6w6cRFz9f%2FQ2FIn%2BmCq5Y5EOXHgqXncbZ3mmhMRRdy%2BjCssi%2F%2Fb5PMd06wqLlP4ZbaA%2BSssOYJWT%2FvP8MFP9SUZbkBEVBMGgWX0SKSo6qciXFDdJge4Jpafy8UGy9VnwMGg60Lr4sYbj5YFmB%2FU2ltO5bllG3t2SVfPO2skkA75SIuF245dBaEmiypQe0BiqaYmvgIYn1uK5KeZSaq2kmzA9n2sBQzOBP6fcolRWLaCxhTa4OIRWcZqw9cGK5UQgdDcYdRr9NoKn6EQMfpLVdEJoxbw%2FHQ4Ca5u%2Fzc3Ikp82FKByJBemw%2F7HOs9cpiLU8sjBtCss4SbyF0iY68doLXvc6GEKFHSF2uxQnEEhhLwBFWqUOhhyi7Xx%2FNkkQJWv%2FeujS6JPo8%2Bxg7dJgGUSGNta2zfBmhkn0PJ68RB%2FMwwZ7JwAY6pgGMommrcszYWa0x%2BMr9CjsRAc4mGgEC78zZMhH9rHxykXVhLUSb%2FxUua69KAkHBTZVSZLAiK5Rf1dC4RhhjH7fb8ZsTU%2BNIOtpqivVB1Roe3FEEBU2PZvnJpPzXfdYAAmhb6LhCh7FOmGFVrv4easz96yS1em3lHygly77qozxTtZ2E5T61ZsYU6MaccCvups3dvGwEyN1uvTkk5CHC6scl%2FI4YEK1X&X-Amz-Signature=ddcc19115813abc18503f46e52a16b712c7a5596dc587339881179d8a3d0d8ac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZL5L4JZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIElMWUU5rExd%2BqS6bLmKKYy2ZimQTeFKztnqRaUi0FsNAiBsB5mcik6SOT5e8E9uDxgSKHBiZrtGyTbRu%2B9ZD2ixqyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIA3Zav0Q7tbixf0LKtwDmpa0kgZSdPCDzwuun%2Br3ji0vVwUL0KjKmr3WuDbEEBteDll%2BBn%2FfiDJLRDMeEYRKxxfopotjYkM4ro0Hse7Ue8BuHK5qlO2qYPKqu8t%2FybJqepfHCBFcLcwkUOvXIKdXx6IoCZtAzJOXR5wLVmK4OeUjT109Ige0bKTjnWcLIat4LUK7RElm%2BJsbQk7Ep35Ul40s0U2ClFEW8Xfpyg6w6cRFz9f%2FQ2FIn%2BmCq5Y5EOXHgqXncbZ3mmhMRRdy%2BjCssi%2F%2Fb5PMd06wqLlP4ZbaA%2BSssOYJWT%2FvP8MFP9SUZbkBEVBMGgWX0SKSo6qciXFDdJge4Jpafy8UGy9VnwMGg60Lr4sYbj5YFmB%2FU2ltO5bllG3t2SVfPO2skkA75SIuF245dBaEmiypQe0BiqaYmvgIYn1uK5KeZSaq2kmzA9n2sBQzOBP6fcolRWLaCxhTa4OIRWcZqw9cGK5UQgdDcYdRr9NoKn6EQMfpLVdEJoxbw%2FHQ4Ca5u%2Fzc3Ikp82FKByJBemw%2F7HOs9cpiLU8sjBtCss4SbyF0iY68doLXvc6GEKFHSF2uxQnEEhhLwBFWqUOhhyi7Xx%2FNkkQJWv%2FeujS6JPo8%2Bxg7dJgGUSGNta2zfBmhkn0PJ68RB%2FMwwZ7JwAY6pgGMommrcszYWa0x%2BMr9CjsRAc4mGgEC78zZMhH9rHxykXVhLUSb%2FxUua69KAkHBTZVSZLAiK5Rf1dC4RhhjH7fb8ZsTU%2BNIOtpqivVB1Roe3FEEBU2PZvnJpPzXfdYAAmhb6LhCh7FOmGFVrv4easz96yS1em3lHygly77qozxTtZ2E5T61ZsYU6MaccCvups3dvGwEyN1uvTkk5CHC6scl%2FI4YEK1X&X-Amz-Signature=d96a5281fbabf85a7ecba2a5bf6c39b0dc69984eca194a236f622c6f57984d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
