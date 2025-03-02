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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5JSSSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDFDufxLlc%2F1JUTx576X4MAQhFglslgsEMcIs4G%2BNby%2BgIhAKq8WVoi470OXHQt4bldOit7782BThaiSIDb5UyEZxupKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzAbDPicraNxB0hAq3AOWLSUEBl35%2Fg2Os6ZSwGLDIfZRPzaGxhpc76W2Rq8PQa8ZLpTMhuFjelUqAJ09YR4ynZ9ZyK%2Fu1wbp%2Fq00Gb0H81RUhdM1pH4bSdkP5JNmAJ8Phbae5lgfDFJ1ngu3ZiBrp6RVY%2BHk9zDM0DL%2B6vsl%2FP6g1MmKU%2FnO6fivwbsH2f05Qtd208DUbcbFiwd9TZys0iB7t2Hc93vfK6J5PBwWlCMSRzpqpzISCvGnD05TPu1wzXFFOzBLz2RdFOmcOFvwbp9zg4WqrA2YKR4hibJ1kg87n6zzVLsgxyzQJslW%2Ff0tdCG%2FljYbkGMqtshyhX%2FZ2lsfX%2FhwAmUPvBo8sAIepSIsOmiSqkKX0jqByTXUfu6i9A3Usnxh8YdL6Axcch%2BBM7%2BENTev9Vv3gk9LI8%2F2s%2FjXN2taB%2BGQhQ9afbe6mPkyThAwa%2BHGP0PhKAjDcf1kqjyeYlNegGs3B5xM8pMxKSpAro9SmHcMLCiQ0cc2iVQ1zmDK0yO2HTXOQ5P3%2FJJCfp4h8BCewQA39V0ThQ%2FoXalkutWM9Poz80aAba%2FVJvl2cRTH1dTfua5MjOfOJ3AjY%2BV6xiRRlDzpyipz8KgAts77G6OXtQgsiWkUkfwlx4MQhM3cyjBXd6yPeTD014%2B%2BBjqkAYKWNmtsyqQMS65ag4ARD0DySV1MLYjhT4is4I7ulHmiq0VPRGdV6QKoZlYsuoST6gCnd9oxc9Osvlu7Alm%2BxU%2F%2BkPaPaMHDy%2B71qStrk2Mi1tBbRpu8iAKLHqTuCEXkfrK5Z3BrJa7D%2BRckvF3YmJjVtSCCg0f4trazigRdWSvMZUM6%2BhNimHwaxdDgpZdTsi9%2BZGpKHyBj%2Fw2Pg1gF7OhQgn%2Bn&X-Amz-Signature=4554bfb1250f67d4a9ff7ea50142975cf207fb336b8e690fa4ab99d219dc019a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5JSSSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDFDufxLlc%2F1JUTx576X4MAQhFglslgsEMcIs4G%2BNby%2BgIhAKq8WVoi470OXHQt4bldOit7782BThaiSIDb5UyEZxupKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzAbDPicraNxB0hAq3AOWLSUEBl35%2Fg2Os6ZSwGLDIfZRPzaGxhpc76W2Rq8PQa8ZLpTMhuFjelUqAJ09YR4ynZ9ZyK%2Fu1wbp%2Fq00Gb0H81RUhdM1pH4bSdkP5JNmAJ8Phbae5lgfDFJ1ngu3ZiBrp6RVY%2BHk9zDM0DL%2B6vsl%2FP6g1MmKU%2FnO6fivwbsH2f05Qtd208DUbcbFiwd9TZys0iB7t2Hc93vfK6J5PBwWlCMSRzpqpzISCvGnD05TPu1wzXFFOzBLz2RdFOmcOFvwbp9zg4WqrA2YKR4hibJ1kg87n6zzVLsgxyzQJslW%2Ff0tdCG%2FljYbkGMqtshyhX%2FZ2lsfX%2FhwAmUPvBo8sAIepSIsOmiSqkKX0jqByTXUfu6i9A3Usnxh8YdL6Axcch%2BBM7%2BENTev9Vv3gk9LI8%2F2s%2FjXN2taB%2BGQhQ9afbe6mPkyThAwa%2BHGP0PhKAjDcf1kqjyeYlNegGs3B5xM8pMxKSpAro9SmHcMLCiQ0cc2iVQ1zmDK0yO2HTXOQ5P3%2FJJCfp4h8BCewQA39V0ThQ%2FoXalkutWM9Poz80aAba%2FVJvl2cRTH1dTfua5MjOfOJ3AjY%2BV6xiRRlDzpyipz8KgAts77G6OXtQgsiWkUkfwlx4MQhM3cyjBXd6yPeTD014%2B%2BBjqkAYKWNmtsyqQMS65ag4ARD0DySV1MLYjhT4is4I7ulHmiq0VPRGdV6QKoZlYsuoST6gCnd9oxc9Osvlu7Alm%2BxU%2F%2BkPaPaMHDy%2B71qStrk2Mi1tBbRpu8iAKLHqTuCEXkfrK5Z3BrJa7D%2BRckvF3YmJjVtSCCg0f4trazigRdWSvMZUM6%2BhNimHwaxdDgpZdTsi9%2BZGpKHyBj%2Fw2Pg1gF7OhQgn%2Bn&X-Amz-Signature=851963fff06f75b42ae51ffe486b89dc0c4b78ffc36bc0d752bca9d0cc61b25b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5JSSSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDFDufxLlc%2F1JUTx576X4MAQhFglslgsEMcIs4G%2BNby%2BgIhAKq8WVoi470OXHQt4bldOit7782BThaiSIDb5UyEZxupKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzAbDPicraNxB0hAq3AOWLSUEBl35%2Fg2Os6ZSwGLDIfZRPzaGxhpc76W2Rq8PQa8ZLpTMhuFjelUqAJ09YR4ynZ9ZyK%2Fu1wbp%2Fq00Gb0H81RUhdM1pH4bSdkP5JNmAJ8Phbae5lgfDFJ1ngu3ZiBrp6RVY%2BHk9zDM0DL%2B6vsl%2FP6g1MmKU%2FnO6fivwbsH2f05Qtd208DUbcbFiwd9TZys0iB7t2Hc93vfK6J5PBwWlCMSRzpqpzISCvGnD05TPu1wzXFFOzBLz2RdFOmcOFvwbp9zg4WqrA2YKR4hibJ1kg87n6zzVLsgxyzQJslW%2Ff0tdCG%2FljYbkGMqtshyhX%2FZ2lsfX%2FhwAmUPvBo8sAIepSIsOmiSqkKX0jqByTXUfu6i9A3Usnxh8YdL6Axcch%2BBM7%2BENTev9Vv3gk9LI8%2F2s%2FjXN2taB%2BGQhQ9afbe6mPkyThAwa%2BHGP0PhKAjDcf1kqjyeYlNegGs3B5xM8pMxKSpAro9SmHcMLCiQ0cc2iVQ1zmDK0yO2HTXOQ5P3%2FJJCfp4h8BCewQA39V0ThQ%2FoXalkutWM9Poz80aAba%2FVJvl2cRTH1dTfua5MjOfOJ3AjY%2BV6xiRRlDzpyipz8KgAts77G6OXtQgsiWkUkfwlx4MQhM3cyjBXd6yPeTD014%2B%2BBjqkAYKWNmtsyqQMS65ag4ARD0DySV1MLYjhT4is4I7ulHmiq0VPRGdV6QKoZlYsuoST6gCnd9oxc9Osvlu7Alm%2BxU%2F%2BkPaPaMHDy%2B71qStrk2Mi1tBbRpu8iAKLHqTuCEXkfrK5Z3BrJa7D%2BRckvF3YmJjVtSCCg0f4trazigRdWSvMZUM6%2BhNimHwaxdDgpZdTsi9%2BZGpKHyBj%2Fw2Pg1gF7OhQgn%2Bn&X-Amz-Signature=132dee827e510d3bebb1aa926554a02040534d3a9dd92ffd944c39eba83440fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5JSSSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDFDufxLlc%2F1JUTx576X4MAQhFglslgsEMcIs4G%2BNby%2BgIhAKq8WVoi470OXHQt4bldOit7782BThaiSIDb5UyEZxupKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzAbDPicraNxB0hAq3AOWLSUEBl35%2Fg2Os6ZSwGLDIfZRPzaGxhpc76W2Rq8PQa8ZLpTMhuFjelUqAJ09YR4ynZ9ZyK%2Fu1wbp%2Fq00Gb0H81RUhdM1pH4bSdkP5JNmAJ8Phbae5lgfDFJ1ngu3ZiBrp6RVY%2BHk9zDM0DL%2B6vsl%2FP6g1MmKU%2FnO6fivwbsH2f05Qtd208DUbcbFiwd9TZys0iB7t2Hc93vfK6J5PBwWlCMSRzpqpzISCvGnD05TPu1wzXFFOzBLz2RdFOmcOFvwbp9zg4WqrA2YKR4hibJ1kg87n6zzVLsgxyzQJslW%2Ff0tdCG%2FljYbkGMqtshyhX%2FZ2lsfX%2FhwAmUPvBo8sAIepSIsOmiSqkKX0jqByTXUfu6i9A3Usnxh8YdL6Axcch%2BBM7%2BENTev9Vv3gk9LI8%2F2s%2FjXN2taB%2BGQhQ9afbe6mPkyThAwa%2BHGP0PhKAjDcf1kqjyeYlNegGs3B5xM8pMxKSpAro9SmHcMLCiQ0cc2iVQ1zmDK0yO2HTXOQ5P3%2FJJCfp4h8BCewQA39V0ThQ%2FoXalkutWM9Poz80aAba%2FVJvl2cRTH1dTfua5MjOfOJ3AjY%2BV6xiRRlDzpyipz8KgAts77G6OXtQgsiWkUkfwlx4MQhM3cyjBXd6yPeTD014%2B%2BBjqkAYKWNmtsyqQMS65ag4ARD0DySV1MLYjhT4is4I7ulHmiq0VPRGdV6QKoZlYsuoST6gCnd9oxc9Osvlu7Alm%2BxU%2F%2BkPaPaMHDy%2B71qStrk2Mi1tBbRpu8iAKLHqTuCEXkfrK5Z3BrJa7D%2BRckvF3YmJjVtSCCg0f4trazigRdWSvMZUM6%2BhNimHwaxdDgpZdTsi9%2BZGpKHyBj%2Fw2Pg1gF7OhQgn%2Bn&X-Amz-Signature=3b4624dc8f30b5c3bd26897c3b69e7976f9a07d1e32c023bd7770b2d79444310&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5JSSSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDFDufxLlc%2F1JUTx576X4MAQhFglslgsEMcIs4G%2BNby%2BgIhAKq8WVoi470OXHQt4bldOit7782BThaiSIDb5UyEZxupKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzAbDPicraNxB0hAq3AOWLSUEBl35%2Fg2Os6ZSwGLDIfZRPzaGxhpc76W2Rq8PQa8ZLpTMhuFjelUqAJ09YR4ynZ9ZyK%2Fu1wbp%2Fq00Gb0H81RUhdM1pH4bSdkP5JNmAJ8Phbae5lgfDFJ1ngu3ZiBrp6RVY%2BHk9zDM0DL%2B6vsl%2FP6g1MmKU%2FnO6fivwbsH2f05Qtd208DUbcbFiwd9TZys0iB7t2Hc93vfK6J5PBwWlCMSRzpqpzISCvGnD05TPu1wzXFFOzBLz2RdFOmcOFvwbp9zg4WqrA2YKR4hibJ1kg87n6zzVLsgxyzQJslW%2Ff0tdCG%2FljYbkGMqtshyhX%2FZ2lsfX%2FhwAmUPvBo8sAIepSIsOmiSqkKX0jqByTXUfu6i9A3Usnxh8YdL6Axcch%2BBM7%2BENTev9Vv3gk9LI8%2F2s%2FjXN2taB%2BGQhQ9afbe6mPkyThAwa%2BHGP0PhKAjDcf1kqjyeYlNegGs3B5xM8pMxKSpAro9SmHcMLCiQ0cc2iVQ1zmDK0yO2HTXOQ5P3%2FJJCfp4h8BCewQA39V0ThQ%2FoXalkutWM9Poz80aAba%2FVJvl2cRTH1dTfua5MjOfOJ3AjY%2BV6xiRRlDzpyipz8KgAts77G6OXtQgsiWkUkfwlx4MQhM3cyjBXd6yPeTD014%2B%2BBjqkAYKWNmtsyqQMS65ag4ARD0DySV1MLYjhT4is4I7ulHmiq0VPRGdV6QKoZlYsuoST6gCnd9oxc9Osvlu7Alm%2BxU%2F%2BkPaPaMHDy%2B71qStrk2Mi1tBbRpu8iAKLHqTuCEXkfrK5Z3BrJa7D%2BRckvF3YmJjVtSCCg0f4trazigRdWSvMZUM6%2BhNimHwaxdDgpZdTsi9%2BZGpKHyBj%2Fw2Pg1gF7OhQgn%2Bn&X-Amz-Signature=a983dbc30276d4824efdd2413875563cd546d69432792199b1672e925ae3ab7c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5JSSSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDFDufxLlc%2F1JUTx576X4MAQhFglslgsEMcIs4G%2BNby%2BgIhAKq8WVoi470OXHQt4bldOit7782BThaiSIDb5UyEZxupKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzAbDPicraNxB0hAq3AOWLSUEBl35%2Fg2Os6ZSwGLDIfZRPzaGxhpc76W2Rq8PQa8ZLpTMhuFjelUqAJ09YR4ynZ9ZyK%2Fu1wbp%2Fq00Gb0H81RUhdM1pH4bSdkP5JNmAJ8Phbae5lgfDFJ1ngu3ZiBrp6RVY%2BHk9zDM0DL%2B6vsl%2FP6g1MmKU%2FnO6fivwbsH2f05Qtd208DUbcbFiwd9TZys0iB7t2Hc93vfK6J5PBwWlCMSRzpqpzISCvGnD05TPu1wzXFFOzBLz2RdFOmcOFvwbp9zg4WqrA2YKR4hibJ1kg87n6zzVLsgxyzQJslW%2Ff0tdCG%2FljYbkGMqtshyhX%2FZ2lsfX%2FhwAmUPvBo8sAIepSIsOmiSqkKX0jqByTXUfu6i9A3Usnxh8YdL6Axcch%2BBM7%2BENTev9Vv3gk9LI8%2F2s%2FjXN2taB%2BGQhQ9afbe6mPkyThAwa%2BHGP0PhKAjDcf1kqjyeYlNegGs3B5xM8pMxKSpAro9SmHcMLCiQ0cc2iVQ1zmDK0yO2HTXOQ5P3%2FJJCfp4h8BCewQA39V0ThQ%2FoXalkutWM9Poz80aAba%2FVJvl2cRTH1dTfua5MjOfOJ3AjY%2BV6xiRRlDzpyipz8KgAts77G6OXtQgsiWkUkfwlx4MQhM3cyjBXd6yPeTD014%2B%2BBjqkAYKWNmtsyqQMS65ag4ARD0DySV1MLYjhT4is4I7ulHmiq0VPRGdV6QKoZlYsuoST6gCnd9oxc9Osvlu7Alm%2BxU%2F%2BkPaPaMHDy%2B71qStrk2Mi1tBbRpu8iAKLHqTuCEXkfrK5Z3BrJa7D%2BRckvF3YmJjVtSCCg0f4trazigRdWSvMZUM6%2BhNimHwaxdDgpZdTsi9%2BZGpKHyBj%2Fw2Pg1gF7OhQgn%2Bn&X-Amz-Signature=378dad01f1c41b6be7aed2e8f1d1eaba083410a1e2cb5052cf9854b1d70e75a1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5JSSSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDFDufxLlc%2F1JUTx576X4MAQhFglslgsEMcIs4G%2BNby%2BgIhAKq8WVoi470OXHQt4bldOit7782BThaiSIDb5UyEZxupKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzAbDPicraNxB0hAq3AOWLSUEBl35%2Fg2Os6ZSwGLDIfZRPzaGxhpc76W2Rq8PQa8ZLpTMhuFjelUqAJ09YR4ynZ9ZyK%2Fu1wbp%2Fq00Gb0H81RUhdM1pH4bSdkP5JNmAJ8Phbae5lgfDFJ1ngu3ZiBrp6RVY%2BHk9zDM0DL%2B6vsl%2FP6g1MmKU%2FnO6fivwbsH2f05Qtd208DUbcbFiwd9TZys0iB7t2Hc93vfK6J5PBwWlCMSRzpqpzISCvGnD05TPu1wzXFFOzBLz2RdFOmcOFvwbp9zg4WqrA2YKR4hibJ1kg87n6zzVLsgxyzQJslW%2Ff0tdCG%2FljYbkGMqtshyhX%2FZ2lsfX%2FhwAmUPvBo8sAIepSIsOmiSqkKX0jqByTXUfu6i9A3Usnxh8YdL6Axcch%2BBM7%2BENTev9Vv3gk9LI8%2F2s%2FjXN2taB%2BGQhQ9afbe6mPkyThAwa%2BHGP0PhKAjDcf1kqjyeYlNegGs3B5xM8pMxKSpAro9SmHcMLCiQ0cc2iVQ1zmDK0yO2HTXOQ5P3%2FJJCfp4h8BCewQA39V0ThQ%2FoXalkutWM9Poz80aAba%2FVJvl2cRTH1dTfua5MjOfOJ3AjY%2BV6xiRRlDzpyipz8KgAts77G6OXtQgsiWkUkfwlx4MQhM3cyjBXd6yPeTD014%2B%2BBjqkAYKWNmtsyqQMS65ag4ARD0DySV1MLYjhT4is4I7ulHmiq0VPRGdV6QKoZlYsuoST6gCnd9oxc9Osvlu7Alm%2BxU%2F%2BkPaPaMHDy%2B71qStrk2Mi1tBbRpu8iAKLHqTuCEXkfrK5Z3BrJa7D%2BRckvF3YmJjVtSCCg0f4trazigRdWSvMZUM6%2BhNimHwaxdDgpZdTsi9%2BZGpKHyBj%2Fw2Pg1gF7OhQgn%2Bn&X-Amz-Signature=ef40c547d1ee42a0b0a3a7675a9d0ea6548fd24eae3147d9474351a06291a65f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
