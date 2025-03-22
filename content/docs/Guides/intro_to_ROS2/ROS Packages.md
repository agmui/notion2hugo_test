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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646K6BCHC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr47NNYQhdlJe4nobNnrff0sYmqOEMsoyGfGqpazA8UgIhAPKGp3jRDUSmVgSRfIjB5fMuO7%2FP2%2FnPow3K467RHWXJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzym2F5creo%2Bk%2FgXd8q3AO6ogxXN9SzBfK8qo29PjW%2BI%2FFEgpdpI7PH3uGFB1aZ1oiHkO0uMcybFV61YF0ElO5vFv8Zbs9ci0M5bCHNGBTaRn5y2znR%2Bpe7c7FCwfMorUj3toKwtMDc%2BnDPyuvC1lWPt21j%2Fvrxyq6b%2BXvBLo9U9CpG6xvo%2Fbh6AiXgoAJ3m%2FcYzZnj5Mrzs8sIEvwDYhDjuCwZxvTewfWClmzYAc4g6k%2FjiuFdtfZrfJhf%2Bf21%2Frj%2BfL%2FMUbzrkV7OArcqGFEmvkVutI7acjVPHyXQn%2B48Ch8LyDNx%2BPumCKJ1xL8IpsqhBukydUu7B8Ztz66SBK1rrOSfWguGGcAgGP2a%2B39awsER1PTSCsFsnscx7Dh6DhvShEModkGjsIZgB28ARcnPHFUSeoHgkljgXuIA7cR3CThbYXY5oyASRTC45T1KUXVQyBr2lV7wPZh6mTO6yZbxiGqwPkmUwCRLAfSQTFl03eaz8cn8ayDmXgpQTqgS8VybWQjMEKXmwWdfopW9s%2FhZMwT5hIt8Gtke%2FFG3gIiQQHTd67O6NutGBUwFjU8%2FyvCIRf1inU4RDwCvnWmJ6zSUYW7vgJL4R0ehq7LgBs%2FaW7s0ORdm9DKVRrXhGsYAcOoBt9OBjbGq7rY%2BRzCG9vq%2BBjqkASLyeF%2Fv1POv8YXAmaFrW2gvevxb3ONI%2FR2XOqwFVHAPn%2F0ffXOz0fM%2FXDjpHzKTUjwHK3EKQv5YiTbNjbeA%2Fm4kG%2FY%2B8KQ1Pz9Ff8Y9ISl%2BtHqHdgZG%2Fe3FP4B%2F0BNdUNqdWIEAmtn%2FiRR3G5ntEo0gC4hEumsSZ0%2BUyYhnKU3cwYALdyKwNxjI3%2BynXpd450w5glMaaqRAlg4vBtxmkH7P81Ka&X-Amz-Signature=35c72624d3132c78f18ef594ae16daa330c6baf9a1d8834b8eb737d8a5b673ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646K6BCHC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr47NNYQhdlJe4nobNnrff0sYmqOEMsoyGfGqpazA8UgIhAPKGp3jRDUSmVgSRfIjB5fMuO7%2FP2%2FnPow3K467RHWXJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzym2F5creo%2Bk%2FgXd8q3AO6ogxXN9SzBfK8qo29PjW%2BI%2FFEgpdpI7PH3uGFB1aZ1oiHkO0uMcybFV61YF0ElO5vFv8Zbs9ci0M5bCHNGBTaRn5y2znR%2Bpe7c7FCwfMorUj3toKwtMDc%2BnDPyuvC1lWPt21j%2Fvrxyq6b%2BXvBLo9U9CpG6xvo%2Fbh6AiXgoAJ3m%2FcYzZnj5Mrzs8sIEvwDYhDjuCwZxvTewfWClmzYAc4g6k%2FjiuFdtfZrfJhf%2Bf21%2Frj%2BfL%2FMUbzrkV7OArcqGFEmvkVutI7acjVPHyXQn%2B48Ch8LyDNx%2BPumCKJ1xL8IpsqhBukydUu7B8Ztz66SBK1rrOSfWguGGcAgGP2a%2B39awsER1PTSCsFsnscx7Dh6DhvShEModkGjsIZgB28ARcnPHFUSeoHgkljgXuIA7cR3CThbYXY5oyASRTC45T1KUXVQyBr2lV7wPZh6mTO6yZbxiGqwPkmUwCRLAfSQTFl03eaz8cn8ayDmXgpQTqgS8VybWQjMEKXmwWdfopW9s%2FhZMwT5hIt8Gtke%2FFG3gIiQQHTd67O6NutGBUwFjU8%2FyvCIRf1inU4RDwCvnWmJ6zSUYW7vgJL4R0ehq7LgBs%2FaW7s0ORdm9DKVRrXhGsYAcOoBt9OBjbGq7rY%2BRzCG9vq%2BBjqkASLyeF%2Fv1POv8YXAmaFrW2gvevxb3ONI%2FR2XOqwFVHAPn%2F0ffXOz0fM%2FXDjpHzKTUjwHK3EKQv5YiTbNjbeA%2Fm4kG%2FY%2B8KQ1Pz9Ff8Y9ISl%2BtHqHdgZG%2Fe3FP4B%2F0BNdUNqdWIEAmtn%2FiRR3G5ntEo0gC4hEumsSZ0%2BUyYhnKU3cwYALdyKwNxjI3%2BynXpd450w5glMaaqRAlg4vBtxmkH7P81Ka&X-Amz-Signature=a6b9f46daee73567766d4fe5cf80f78bb58a8b34e58c83308f20f2d4ea6ef272&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646K6BCHC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr47NNYQhdlJe4nobNnrff0sYmqOEMsoyGfGqpazA8UgIhAPKGp3jRDUSmVgSRfIjB5fMuO7%2FP2%2FnPow3K467RHWXJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzym2F5creo%2Bk%2FgXd8q3AO6ogxXN9SzBfK8qo29PjW%2BI%2FFEgpdpI7PH3uGFB1aZ1oiHkO0uMcybFV61YF0ElO5vFv8Zbs9ci0M5bCHNGBTaRn5y2znR%2Bpe7c7FCwfMorUj3toKwtMDc%2BnDPyuvC1lWPt21j%2Fvrxyq6b%2BXvBLo9U9CpG6xvo%2Fbh6AiXgoAJ3m%2FcYzZnj5Mrzs8sIEvwDYhDjuCwZxvTewfWClmzYAc4g6k%2FjiuFdtfZrfJhf%2Bf21%2Frj%2BfL%2FMUbzrkV7OArcqGFEmvkVutI7acjVPHyXQn%2B48Ch8LyDNx%2BPumCKJ1xL8IpsqhBukydUu7B8Ztz66SBK1rrOSfWguGGcAgGP2a%2B39awsER1PTSCsFsnscx7Dh6DhvShEModkGjsIZgB28ARcnPHFUSeoHgkljgXuIA7cR3CThbYXY5oyASRTC45T1KUXVQyBr2lV7wPZh6mTO6yZbxiGqwPkmUwCRLAfSQTFl03eaz8cn8ayDmXgpQTqgS8VybWQjMEKXmwWdfopW9s%2FhZMwT5hIt8Gtke%2FFG3gIiQQHTd67O6NutGBUwFjU8%2FyvCIRf1inU4RDwCvnWmJ6zSUYW7vgJL4R0ehq7LgBs%2FaW7s0ORdm9DKVRrXhGsYAcOoBt9OBjbGq7rY%2BRzCG9vq%2BBjqkASLyeF%2Fv1POv8YXAmaFrW2gvevxb3ONI%2FR2XOqwFVHAPn%2F0ffXOz0fM%2FXDjpHzKTUjwHK3EKQv5YiTbNjbeA%2Fm4kG%2FY%2B8KQ1Pz9Ff8Y9ISl%2BtHqHdgZG%2Fe3FP4B%2F0BNdUNqdWIEAmtn%2FiRR3G5ntEo0gC4hEumsSZ0%2BUyYhnKU3cwYALdyKwNxjI3%2BynXpd450w5glMaaqRAlg4vBtxmkH7P81Ka&X-Amz-Signature=1702278e8b8c9aa749116f8156d46511de962d6d915c34d38f13158c28bb0a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646K6BCHC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr47NNYQhdlJe4nobNnrff0sYmqOEMsoyGfGqpazA8UgIhAPKGp3jRDUSmVgSRfIjB5fMuO7%2FP2%2FnPow3K467RHWXJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzym2F5creo%2Bk%2FgXd8q3AO6ogxXN9SzBfK8qo29PjW%2BI%2FFEgpdpI7PH3uGFB1aZ1oiHkO0uMcybFV61YF0ElO5vFv8Zbs9ci0M5bCHNGBTaRn5y2znR%2Bpe7c7FCwfMorUj3toKwtMDc%2BnDPyuvC1lWPt21j%2Fvrxyq6b%2BXvBLo9U9CpG6xvo%2Fbh6AiXgoAJ3m%2FcYzZnj5Mrzs8sIEvwDYhDjuCwZxvTewfWClmzYAc4g6k%2FjiuFdtfZrfJhf%2Bf21%2Frj%2BfL%2FMUbzrkV7OArcqGFEmvkVutI7acjVPHyXQn%2B48Ch8LyDNx%2BPumCKJ1xL8IpsqhBukydUu7B8Ztz66SBK1rrOSfWguGGcAgGP2a%2B39awsER1PTSCsFsnscx7Dh6DhvShEModkGjsIZgB28ARcnPHFUSeoHgkljgXuIA7cR3CThbYXY5oyASRTC45T1KUXVQyBr2lV7wPZh6mTO6yZbxiGqwPkmUwCRLAfSQTFl03eaz8cn8ayDmXgpQTqgS8VybWQjMEKXmwWdfopW9s%2FhZMwT5hIt8Gtke%2FFG3gIiQQHTd67O6NutGBUwFjU8%2FyvCIRf1inU4RDwCvnWmJ6zSUYW7vgJL4R0ehq7LgBs%2FaW7s0ORdm9DKVRrXhGsYAcOoBt9OBjbGq7rY%2BRzCG9vq%2BBjqkASLyeF%2Fv1POv8YXAmaFrW2gvevxb3ONI%2FR2XOqwFVHAPn%2F0ffXOz0fM%2FXDjpHzKTUjwHK3EKQv5YiTbNjbeA%2Fm4kG%2FY%2B8KQ1Pz9Ff8Y9ISl%2BtHqHdgZG%2Fe3FP4B%2F0BNdUNqdWIEAmtn%2FiRR3G5ntEo0gC4hEumsSZ0%2BUyYhnKU3cwYALdyKwNxjI3%2BynXpd450w5glMaaqRAlg4vBtxmkH7P81Ka&X-Amz-Signature=92fa8c49f2c47ad6b227e2e98adb4fd7edf94eaa2eb5a5446cd7ad47e88255e1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646K6BCHC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr47NNYQhdlJe4nobNnrff0sYmqOEMsoyGfGqpazA8UgIhAPKGp3jRDUSmVgSRfIjB5fMuO7%2FP2%2FnPow3K467RHWXJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzym2F5creo%2Bk%2FgXd8q3AO6ogxXN9SzBfK8qo29PjW%2BI%2FFEgpdpI7PH3uGFB1aZ1oiHkO0uMcybFV61YF0ElO5vFv8Zbs9ci0M5bCHNGBTaRn5y2znR%2Bpe7c7FCwfMorUj3toKwtMDc%2BnDPyuvC1lWPt21j%2Fvrxyq6b%2BXvBLo9U9CpG6xvo%2Fbh6AiXgoAJ3m%2FcYzZnj5Mrzs8sIEvwDYhDjuCwZxvTewfWClmzYAc4g6k%2FjiuFdtfZrfJhf%2Bf21%2Frj%2BfL%2FMUbzrkV7OArcqGFEmvkVutI7acjVPHyXQn%2B48Ch8LyDNx%2BPumCKJ1xL8IpsqhBukydUu7B8Ztz66SBK1rrOSfWguGGcAgGP2a%2B39awsER1PTSCsFsnscx7Dh6DhvShEModkGjsIZgB28ARcnPHFUSeoHgkljgXuIA7cR3CThbYXY5oyASRTC45T1KUXVQyBr2lV7wPZh6mTO6yZbxiGqwPkmUwCRLAfSQTFl03eaz8cn8ayDmXgpQTqgS8VybWQjMEKXmwWdfopW9s%2FhZMwT5hIt8Gtke%2FFG3gIiQQHTd67O6NutGBUwFjU8%2FyvCIRf1inU4RDwCvnWmJ6zSUYW7vgJL4R0ehq7LgBs%2FaW7s0ORdm9DKVRrXhGsYAcOoBt9OBjbGq7rY%2BRzCG9vq%2BBjqkASLyeF%2Fv1POv8YXAmaFrW2gvevxb3ONI%2FR2XOqwFVHAPn%2F0ffXOz0fM%2FXDjpHzKTUjwHK3EKQv5YiTbNjbeA%2Fm4kG%2FY%2B8KQ1Pz9Ff8Y9ISl%2BtHqHdgZG%2Fe3FP4B%2F0BNdUNqdWIEAmtn%2FiRR3G5ntEo0gC4hEumsSZ0%2BUyYhnKU3cwYALdyKwNxjI3%2BynXpd450w5glMaaqRAlg4vBtxmkH7P81Ka&X-Amz-Signature=1b3904a24d72ddc1969cd592eabd31337eb0bc0699adfe5538434c475e89cf90&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646K6BCHC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr47NNYQhdlJe4nobNnrff0sYmqOEMsoyGfGqpazA8UgIhAPKGp3jRDUSmVgSRfIjB5fMuO7%2FP2%2FnPow3K467RHWXJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzym2F5creo%2Bk%2FgXd8q3AO6ogxXN9SzBfK8qo29PjW%2BI%2FFEgpdpI7PH3uGFB1aZ1oiHkO0uMcybFV61YF0ElO5vFv8Zbs9ci0M5bCHNGBTaRn5y2znR%2Bpe7c7FCwfMorUj3toKwtMDc%2BnDPyuvC1lWPt21j%2Fvrxyq6b%2BXvBLo9U9CpG6xvo%2Fbh6AiXgoAJ3m%2FcYzZnj5Mrzs8sIEvwDYhDjuCwZxvTewfWClmzYAc4g6k%2FjiuFdtfZrfJhf%2Bf21%2Frj%2BfL%2FMUbzrkV7OArcqGFEmvkVutI7acjVPHyXQn%2B48Ch8LyDNx%2BPumCKJ1xL8IpsqhBukydUu7B8Ztz66SBK1rrOSfWguGGcAgGP2a%2B39awsER1PTSCsFsnscx7Dh6DhvShEModkGjsIZgB28ARcnPHFUSeoHgkljgXuIA7cR3CThbYXY5oyASRTC45T1KUXVQyBr2lV7wPZh6mTO6yZbxiGqwPkmUwCRLAfSQTFl03eaz8cn8ayDmXgpQTqgS8VybWQjMEKXmwWdfopW9s%2FhZMwT5hIt8Gtke%2FFG3gIiQQHTd67O6NutGBUwFjU8%2FyvCIRf1inU4RDwCvnWmJ6zSUYW7vgJL4R0ehq7LgBs%2FaW7s0ORdm9DKVRrXhGsYAcOoBt9OBjbGq7rY%2BRzCG9vq%2BBjqkASLyeF%2Fv1POv8YXAmaFrW2gvevxb3ONI%2FR2XOqwFVHAPn%2F0ffXOz0fM%2FXDjpHzKTUjwHK3EKQv5YiTbNjbeA%2Fm4kG%2FY%2B8KQ1Pz9Ff8Y9ISl%2BtHqHdgZG%2Fe3FP4B%2F0BNdUNqdWIEAmtn%2FiRR3G5ntEo0gC4hEumsSZ0%2BUyYhnKU3cwYALdyKwNxjI3%2BynXpd450w5glMaaqRAlg4vBtxmkH7P81Ka&X-Amz-Signature=09eb95b68b774961b780a0e4394660b8c6515e387ffbd54fecafb590467e800f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646K6BCHC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCr47NNYQhdlJe4nobNnrff0sYmqOEMsoyGfGqpazA8UgIhAPKGp3jRDUSmVgSRfIjB5fMuO7%2FP2%2FnPow3K467RHWXJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzym2F5creo%2Bk%2FgXd8q3AO6ogxXN9SzBfK8qo29PjW%2BI%2FFEgpdpI7PH3uGFB1aZ1oiHkO0uMcybFV61YF0ElO5vFv8Zbs9ci0M5bCHNGBTaRn5y2znR%2Bpe7c7FCwfMorUj3toKwtMDc%2BnDPyuvC1lWPt21j%2Fvrxyq6b%2BXvBLo9U9CpG6xvo%2Fbh6AiXgoAJ3m%2FcYzZnj5Mrzs8sIEvwDYhDjuCwZxvTewfWClmzYAc4g6k%2FjiuFdtfZrfJhf%2Bf21%2Frj%2BfL%2FMUbzrkV7OArcqGFEmvkVutI7acjVPHyXQn%2B48Ch8LyDNx%2BPumCKJ1xL8IpsqhBukydUu7B8Ztz66SBK1rrOSfWguGGcAgGP2a%2B39awsER1PTSCsFsnscx7Dh6DhvShEModkGjsIZgB28ARcnPHFUSeoHgkljgXuIA7cR3CThbYXY5oyASRTC45T1KUXVQyBr2lV7wPZh6mTO6yZbxiGqwPkmUwCRLAfSQTFl03eaz8cn8ayDmXgpQTqgS8VybWQjMEKXmwWdfopW9s%2FhZMwT5hIt8Gtke%2FFG3gIiQQHTd67O6NutGBUwFjU8%2FyvCIRf1inU4RDwCvnWmJ6zSUYW7vgJL4R0ehq7LgBs%2FaW7s0ORdm9DKVRrXhGsYAcOoBt9OBjbGq7rY%2BRzCG9vq%2BBjqkASLyeF%2Fv1POv8YXAmaFrW2gvevxb3ONI%2FR2XOqwFVHAPn%2F0ffXOz0fM%2FXDjpHzKTUjwHK3EKQv5YiTbNjbeA%2Fm4kG%2FY%2B8KQ1Pz9Ff8Y9ISl%2BtHqHdgZG%2Fe3FP4B%2F0BNdUNqdWIEAmtn%2FiRR3G5ntEo0gC4hEumsSZ0%2BUyYhnKU3cwYALdyKwNxjI3%2BynXpd450w5glMaaqRAlg4vBtxmkH7P81Ka&X-Amz-Signature=fb88ada3f004ad535925ac5566de43da4168dd985d99dd4a4b53fa95ccd181d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
