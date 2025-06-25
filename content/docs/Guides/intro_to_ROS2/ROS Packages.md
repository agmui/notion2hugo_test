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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WR2LVSK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCtI6F5OyHPrtzdikj3Vfq6Im3gX59%2BfLMEdW%2FUmqzXEQIhAJbEWtzE%2BTk3Dq9%2BvHMLF1ozSNY5A66iEmj%2Fb6%2BZevObKv8DCDwQABoMNjM3NDIzMTgzODA1Igz%2FvR7QSNODLY0Mcs8q3ANnhFQMR07EVzQyexJmY9ZZrGtKgUcBKPagTQujYzR7Nsho9YYu%2B6gBXSXTW0r%2Bm1cue3nDzO7zkKsW0XaFJ4HktvafbIC0Izb1zvgGid729RsPTUflYJwZFH2bs8cMTpGH1qEc1JC9C%2Fj2Yhf%2FV%2B5n0ZsW73cVCZS4XFewQtQwKQ8%2Fzrn5YHtqgmLrNOze1EgTg357qv4Uz1GYnzvNiCQQo4PpsofQs1xJRYo8XqSJQRMpbYAs4RHiY5ON2KV96SFdrPAh4V4N6EbPVYmzb7H7stHjqOu1CPYIRQdt27FHypN9E0hkWPX6JlxyZXXtzd3RGzZY%2FRJByzAthgOwzTdX5AqBNkUUy5casB68KvYeYFmMOfJq6yCo6I6ba0VXzZ43BUTbRl5X7KXuhbu5P6lK0Ks%2BY2mgsmVUfj4wkW2JqtZBN%2FhNgO5AI7WFHRUPFVQ5OcOiocqe%2B%2Fm4GBhLInvk5Ml4Qm5U0ERi4TVCf1AAd4dt8%2BnML8c0OtR8NdY2DWgF6SokQE5frId9h%2FgYPBYAWMurPf9JtO6mKnHdMX9lmcORaA2CXQ4lYv%2FnnmnimGs%2BhpL2nwBGtMsWC26%2Bk3nFfsArOpSZjwF2oMjzp4Lfg9V1AsE6SpyrPztxwzD6w%2B3CBjqkAZSiQpm4PIMI8m8NDcLotM58v3R9oQAVSEp9xL5%2BVLbYaAfKii7fIq4X9TOuuqeb9n1QnCHuSnRozmIM2wLVBtC3y7024d2CJv4YkBKx2sMQZCbHLuXn8MC5PMXwNqqkj6%2BGHqmkshz7TozBuMLkFBUuXgGCc0IIdhFOtEwGvFXHlmDDiBKu4%2BEw74aMDd9WKOfOLuldD3viJ5NHCvQBxJuWdKCH&X-Amz-Signature=29a3fe8a4989332c0176d9156811dfca09bee5a9813e5e359d5ff2e41347fafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WR2LVSK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCtI6F5OyHPrtzdikj3Vfq6Im3gX59%2BfLMEdW%2FUmqzXEQIhAJbEWtzE%2BTk3Dq9%2BvHMLF1ozSNY5A66iEmj%2Fb6%2BZevObKv8DCDwQABoMNjM3NDIzMTgzODA1Igz%2FvR7QSNODLY0Mcs8q3ANnhFQMR07EVzQyexJmY9ZZrGtKgUcBKPagTQujYzR7Nsho9YYu%2B6gBXSXTW0r%2Bm1cue3nDzO7zkKsW0XaFJ4HktvafbIC0Izb1zvgGid729RsPTUflYJwZFH2bs8cMTpGH1qEc1JC9C%2Fj2Yhf%2FV%2B5n0ZsW73cVCZS4XFewQtQwKQ8%2Fzrn5YHtqgmLrNOze1EgTg357qv4Uz1GYnzvNiCQQo4PpsofQs1xJRYo8XqSJQRMpbYAs4RHiY5ON2KV96SFdrPAh4V4N6EbPVYmzb7H7stHjqOu1CPYIRQdt27FHypN9E0hkWPX6JlxyZXXtzd3RGzZY%2FRJByzAthgOwzTdX5AqBNkUUy5casB68KvYeYFmMOfJq6yCo6I6ba0VXzZ43BUTbRl5X7KXuhbu5P6lK0Ks%2BY2mgsmVUfj4wkW2JqtZBN%2FhNgO5AI7WFHRUPFVQ5OcOiocqe%2B%2Fm4GBhLInvk5Ml4Qm5U0ERi4TVCf1AAd4dt8%2BnML8c0OtR8NdY2DWgF6SokQE5frId9h%2FgYPBYAWMurPf9JtO6mKnHdMX9lmcORaA2CXQ4lYv%2FnnmnimGs%2BhpL2nwBGtMsWC26%2Bk3nFfsArOpSZjwF2oMjzp4Lfg9V1AsE6SpyrPztxwzD6w%2B3CBjqkAZSiQpm4PIMI8m8NDcLotM58v3R9oQAVSEp9xL5%2BVLbYaAfKii7fIq4X9TOuuqeb9n1QnCHuSnRozmIM2wLVBtC3y7024d2CJv4YkBKx2sMQZCbHLuXn8MC5PMXwNqqkj6%2BGHqmkshz7TozBuMLkFBUuXgGCc0IIdhFOtEwGvFXHlmDDiBKu4%2BEw74aMDd9WKOfOLuldD3viJ5NHCvQBxJuWdKCH&X-Amz-Signature=042879a61164b93790036d3faa5208a5d71b4982abfc3f6d672d6b3d8ed4fc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WR2LVSK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCtI6F5OyHPrtzdikj3Vfq6Im3gX59%2BfLMEdW%2FUmqzXEQIhAJbEWtzE%2BTk3Dq9%2BvHMLF1ozSNY5A66iEmj%2Fb6%2BZevObKv8DCDwQABoMNjM3NDIzMTgzODA1Igz%2FvR7QSNODLY0Mcs8q3ANnhFQMR07EVzQyexJmY9ZZrGtKgUcBKPagTQujYzR7Nsho9YYu%2B6gBXSXTW0r%2Bm1cue3nDzO7zkKsW0XaFJ4HktvafbIC0Izb1zvgGid729RsPTUflYJwZFH2bs8cMTpGH1qEc1JC9C%2Fj2Yhf%2FV%2B5n0ZsW73cVCZS4XFewQtQwKQ8%2Fzrn5YHtqgmLrNOze1EgTg357qv4Uz1GYnzvNiCQQo4PpsofQs1xJRYo8XqSJQRMpbYAs4RHiY5ON2KV96SFdrPAh4V4N6EbPVYmzb7H7stHjqOu1CPYIRQdt27FHypN9E0hkWPX6JlxyZXXtzd3RGzZY%2FRJByzAthgOwzTdX5AqBNkUUy5casB68KvYeYFmMOfJq6yCo6I6ba0VXzZ43BUTbRl5X7KXuhbu5P6lK0Ks%2BY2mgsmVUfj4wkW2JqtZBN%2FhNgO5AI7WFHRUPFVQ5OcOiocqe%2B%2Fm4GBhLInvk5Ml4Qm5U0ERi4TVCf1AAd4dt8%2BnML8c0OtR8NdY2DWgF6SokQE5frId9h%2FgYPBYAWMurPf9JtO6mKnHdMX9lmcORaA2CXQ4lYv%2FnnmnimGs%2BhpL2nwBGtMsWC26%2Bk3nFfsArOpSZjwF2oMjzp4Lfg9V1AsE6SpyrPztxwzD6w%2B3CBjqkAZSiQpm4PIMI8m8NDcLotM58v3R9oQAVSEp9xL5%2BVLbYaAfKii7fIq4X9TOuuqeb9n1QnCHuSnRozmIM2wLVBtC3y7024d2CJv4YkBKx2sMQZCbHLuXn8MC5PMXwNqqkj6%2BGHqmkshz7TozBuMLkFBUuXgGCc0IIdhFOtEwGvFXHlmDDiBKu4%2BEw74aMDd9WKOfOLuldD3viJ5NHCvQBxJuWdKCH&X-Amz-Signature=40ba9a31c4094124fef6f4bad82355cd8de7a9678ceaf82a5786737f666b008f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WR2LVSK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCtI6F5OyHPrtzdikj3Vfq6Im3gX59%2BfLMEdW%2FUmqzXEQIhAJbEWtzE%2BTk3Dq9%2BvHMLF1ozSNY5A66iEmj%2Fb6%2BZevObKv8DCDwQABoMNjM3NDIzMTgzODA1Igz%2FvR7QSNODLY0Mcs8q3ANnhFQMR07EVzQyexJmY9ZZrGtKgUcBKPagTQujYzR7Nsho9YYu%2B6gBXSXTW0r%2Bm1cue3nDzO7zkKsW0XaFJ4HktvafbIC0Izb1zvgGid729RsPTUflYJwZFH2bs8cMTpGH1qEc1JC9C%2Fj2Yhf%2FV%2B5n0ZsW73cVCZS4XFewQtQwKQ8%2Fzrn5YHtqgmLrNOze1EgTg357qv4Uz1GYnzvNiCQQo4PpsofQs1xJRYo8XqSJQRMpbYAs4RHiY5ON2KV96SFdrPAh4V4N6EbPVYmzb7H7stHjqOu1CPYIRQdt27FHypN9E0hkWPX6JlxyZXXtzd3RGzZY%2FRJByzAthgOwzTdX5AqBNkUUy5casB68KvYeYFmMOfJq6yCo6I6ba0VXzZ43BUTbRl5X7KXuhbu5P6lK0Ks%2BY2mgsmVUfj4wkW2JqtZBN%2FhNgO5AI7WFHRUPFVQ5OcOiocqe%2B%2Fm4GBhLInvk5Ml4Qm5U0ERi4TVCf1AAd4dt8%2BnML8c0OtR8NdY2DWgF6SokQE5frId9h%2FgYPBYAWMurPf9JtO6mKnHdMX9lmcORaA2CXQ4lYv%2FnnmnimGs%2BhpL2nwBGtMsWC26%2Bk3nFfsArOpSZjwF2oMjzp4Lfg9V1AsE6SpyrPztxwzD6w%2B3CBjqkAZSiQpm4PIMI8m8NDcLotM58v3R9oQAVSEp9xL5%2BVLbYaAfKii7fIq4X9TOuuqeb9n1QnCHuSnRozmIM2wLVBtC3y7024d2CJv4YkBKx2sMQZCbHLuXn8MC5PMXwNqqkj6%2BGHqmkshz7TozBuMLkFBUuXgGCc0IIdhFOtEwGvFXHlmDDiBKu4%2BEw74aMDd9WKOfOLuldD3viJ5NHCvQBxJuWdKCH&X-Amz-Signature=5ab2ffa1a5993cbf496986272aa3742039f9f12fa7d9d1e9f02ce790bac5b165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WR2LVSK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCtI6F5OyHPrtzdikj3Vfq6Im3gX59%2BfLMEdW%2FUmqzXEQIhAJbEWtzE%2BTk3Dq9%2BvHMLF1ozSNY5A66iEmj%2Fb6%2BZevObKv8DCDwQABoMNjM3NDIzMTgzODA1Igz%2FvR7QSNODLY0Mcs8q3ANnhFQMR07EVzQyexJmY9ZZrGtKgUcBKPagTQujYzR7Nsho9YYu%2B6gBXSXTW0r%2Bm1cue3nDzO7zkKsW0XaFJ4HktvafbIC0Izb1zvgGid729RsPTUflYJwZFH2bs8cMTpGH1qEc1JC9C%2Fj2Yhf%2FV%2B5n0ZsW73cVCZS4XFewQtQwKQ8%2Fzrn5YHtqgmLrNOze1EgTg357qv4Uz1GYnzvNiCQQo4PpsofQs1xJRYo8XqSJQRMpbYAs4RHiY5ON2KV96SFdrPAh4V4N6EbPVYmzb7H7stHjqOu1CPYIRQdt27FHypN9E0hkWPX6JlxyZXXtzd3RGzZY%2FRJByzAthgOwzTdX5AqBNkUUy5casB68KvYeYFmMOfJq6yCo6I6ba0VXzZ43BUTbRl5X7KXuhbu5P6lK0Ks%2BY2mgsmVUfj4wkW2JqtZBN%2FhNgO5AI7WFHRUPFVQ5OcOiocqe%2B%2Fm4GBhLInvk5Ml4Qm5U0ERi4TVCf1AAd4dt8%2BnML8c0OtR8NdY2DWgF6SokQE5frId9h%2FgYPBYAWMurPf9JtO6mKnHdMX9lmcORaA2CXQ4lYv%2FnnmnimGs%2BhpL2nwBGtMsWC26%2Bk3nFfsArOpSZjwF2oMjzp4Lfg9V1AsE6SpyrPztxwzD6w%2B3CBjqkAZSiQpm4PIMI8m8NDcLotM58v3R9oQAVSEp9xL5%2BVLbYaAfKii7fIq4X9TOuuqeb9n1QnCHuSnRozmIM2wLVBtC3y7024d2CJv4YkBKx2sMQZCbHLuXn8MC5PMXwNqqkj6%2BGHqmkshz7TozBuMLkFBUuXgGCc0IIdhFOtEwGvFXHlmDDiBKu4%2BEw74aMDd9WKOfOLuldD3viJ5NHCvQBxJuWdKCH&X-Amz-Signature=bc5c1335f0a52abb01c01bbc9db6b11855aa608fb657f74e7f36cb385b9edbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WR2LVSK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCtI6F5OyHPrtzdikj3Vfq6Im3gX59%2BfLMEdW%2FUmqzXEQIhAJbEWtzE%2BTk3Dq9%2BvHMLF1ozSNY5A66iEmj%2Fb6%2BZevObKv8DCDwQABoMNjM3NDIzMTgzODA1Igz%2FvR7QSNODLY0Mcs8q3ANnhFQMR07EVzQyexJmY9ZZrGtKgUcBKPagTQujYzR7Nsho9YYu%2B6gBXSXTW0r%2Bm1cue3nDzO7zkKsW0XaFJ4HktvafbIC0Izb1zvgGid729RsPTUflYJwZFH2bs8cMTpGH1qEc1JC9C%2Fj2Yhf%2FV%2B5n0ZsW73cVCZS4XFewQtQwKQ8%2Fzrn5YHtqgmLrNOze1EgTg357qv4Uz1GYnzvNiCQQo4PpsofQs1xJRYo8XqSJQRMpbYAs4RHiY5ON2KV96SFdrPAh4V4N6EbPVYmzb7H7stHjqOu1CPYIRQdt27FHypN9E0hkWPX6JlxyZXXtzd3RGzZY%2FRJByzAthgOwzTdX5AqBNkUUy5casB68KvYeYFmMOfJq6yCo6I6ba0VXzZ43BUTbRl5X7KXuhbu5P6lK0Ks%2BY2mgsmVUfj4wkW2JqtZBN%2FhNgO5AI7WFHRUPFVQ5OcOiocqe%2B%2Fm4GBhLInvk5Ml4Qm5U0ERi4TVCf1AAd4dt8%2BnML8c0OtR8NdY2DWgF6SokQE5frId9h%2FgYPBYAWMurPf9JtO6mKnHdMX9lmcORaA2CXQ4lYv%2FnnmnimGs%2BhpL2nwBGtMsWC26%2Bk3nFfsArOpSZjwF2oMjzp4Lfg9V1AsE6SpyrPztxwzD6w%2B3CBjqkAZSiQpm4PIMI8m8NDcLotM58v3R9oQAVSEp9xL5%2BVLbYaAfKii7fIq4X9TOuuqeb9n1QnCHuSnRozmIM2wLVBtC3y7024d2CJv4YkBKx2sMQZCbHLuXn8MC5PMXwNqqkj6%2BGHqmkshz7TozBuMLkFBUuXgGCc0IIdhFOtEwGvFXHlmDDiBKu4%2BEw74aMDd9WKOfOLuldD3viJ5NHCvQBxJuWdKCH&X-Amz-Signature=884e2fbc7e56737b6f02322a5e52d8afab78d5df1d06e323aa3b5de3a907bf14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WR2LVSK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCtI6F5OyHPrtzdikj3Vfq6Im3gX59%2BfLMEdW%2FUmqzXEQIhAJbEWtzE%2BTk3Dq9%2BvHMLF1ozSNY5A66iEmj%2Fb6%2BZevObKv8DCDwQABoMNjM3NDIzMTgzODA1Igz%2FvR7QSNODLY0Mcs8q3ANnhFQMR07EVzQyexJmY9ZZrGtKgUcBKPagTQujYzR7Nsho9YYu%2B6gBXSXTW0r%2Bm1cue3nDzO7zkKsW0XaFJ4HktvafbIC0Izb1zvgGid729RsPTUflYJwZFH2bs8cMTpGH1qEc1JC9C%2Fj2Yhf%2FV%2B5n0ZsW73cVCZS4XFewQtQwKQ8%2Fzrn5YHtqgmLrNOze1EgTg357qv4Uz1GYnzvNiCQQo4PpsofQs1xJRYo8XqSJQRMpbYAs4RHiY5ON2KV96SFdrPAh4V4N6EbPVYmzb7H7stHjqOu1CPYIRQdt27FHypN9E0hkWPX6JlxyZXXtzd3RGzZY%2FRJByzAthgOwzTdX5AqBNkUUy5casB68KvYeYFmMOfJq6yCo6I6ba0VXzZ43BUTbRl5X7KXuhbu5P6lK0Ks%2BY2mgsmVUfj4wkW2JqtZBN%2FhNgO5AI7WFHRUPFVQ5OcOiocqe%2B%2Fm4GBhLInvk5Ml4Qm5U0ERi4TVCf1AAd4dt8%2BnML8c0OtR8NdY2DWgF6SokQE5frId9h%2FgYPBYAWMurPf9JtO6mKnHdMX9lmcORaA2CXQ4lYv%2FnnmnimGs%2BhpL2nwBGtMsWC26%2Bk3nFfsArOpSZjwF2oMjzp4Lfg9V1AsE6SpyrPztxwzD6w%2B3CBjqkAZSiQpm4PIMI8m8NDcLotM58v3R9oQAVSEp9xL5%2BVLbYaAfKii7fIq4X9TOuuqeb9n1QnCHuSnRozmIM2wLVBtC3y7024d2CJv4YkBKx2sMQZCbHLuXn8MC5PMXwNqqkj6%2BGHqmkshz7TozBuMLkFBUuXgGCc0IIdhFOtEwGvFXHlmDDiBKu4%2BEw74aMDd9WKOfOLuldD3viJ5NHCvQBxJuWdKCH&X-Amz-Signature=1e59a85424c10e37bbeef4c6358d557d486f7056b97828cbbe1555ecfbd6291a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
