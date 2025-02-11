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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UOD3DH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBqHP%2B48cUSDCPPKV0%2BBoJ7276WQwrmvZufhbkTNxSQIhAOAbp08%2BZUH%2Bs5sSDLWLbsxt3lIYWNeuAEl2hjM58v4JKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q3r5dUh6s%2B60uC8q3AOAh%2Frzw8oC7VLBs8GBEmgxyvLteUjs61nO%2FxJCEhfLhoSIBn%2B9Q7S3Kw1%2FYRSrKz7dKGGJJyWG9cfXJHDRhz%2FBvCzAwjbibNnIeJVmyftdcLddtl%2BwDfJYlDqg8iso25e%2FToynlE8IMjr1xEasx35nq6RF38nzaYuCBRIEmdAmHWZO5xn4LQp64sNl%2BZXzo77R0%2B5tYmuTRLn81be1PJBBW5mfm4ep8xbM5nUKSvankhV%2BGBM51HsOGhbLM68MQauqP0RPSx5HqNU2zIfT9cDDoBCS1CSPrkn7PHVFAVKdYO9hWWP04VGlpGFTaNC5uvN0ha45Tle8foYmwqIpwEMDa3yuI1h1G9FNtaHzdg9VM3rUbHHc%2B7mxDi%2FTtHBlOQGRqOIE0hoXMERIS7V8u6PadvhUItwRhj9xnmnTeXFY2hKuMy5cVEqRB9n2pUBYATMxcGp2UYfLaT%2FFVWQs8RrwAui0Lg1%2FAwmOxenwPLwqJcg5DCf2WvqfndZ%2BVCbwenX%2FqO0o6%2BIraR4JNqvpmd6LcHIesdv0tcXThmCNc4HfD9YcD0C80O%2FP5G09FkZhuyNQ5Eshb3y1Aa7nGYdwgati%2BZfABNANrfygPmQpOpix3mfhuUFfWD7X0ssODjDYwa29BjqkAXg2faBorKJ7FFhuTqOCsMvO7MvP%2BYkw1DIbrZtffRrsB0Rvqy%2BskEi0Arj0pizgutq4JyVbXAzE1L7rqtGDQI%2B9uJePbL0c51JOrdRUjnsgWg0tFQc6XB%2FIwyDAbM1onYBo529%2FneZcBI1YRD%2Flf9lIoWkfVWP%2BMfXVymlc948T5L6i0Xxy9fQuprA%2F0ipoqVM8J%2FQfccSI13mrG8jpV1a5uLWP&X-Amz-Signature=17f317f8a254c2809bc4149a27339d524f1bf18c2759b2efda5416459aa09501&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UOD3DH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBqHP%2B48cUSDCPPKV0%2BBoJ7276WQwrmvZufhbkTNxSQIhAOAbp08%2BZUH%2Bs5sSDLWLbsxt3lIYWNeuAEl2hjM58v4JKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q3r5dUh6s%2B60uC8q3AOAh%2Frzw8oC7VLBs8GBEmgxyvLteUjs61nO%2FxJCEhfLhoSIBn%2B9Q7S3Kw1%2FYRSrKz7dKGGJJyWG9cfXJHDRhz%2FBvCzAwjbibNnIeJVmyftdcLddtl%2BwDfJYlDqg8iso25e%2FToynlE8IMjr1xEasx35nq6RF38nzaYuCBRIEmdAmHWZO5xn4LQp64sNl%2BZXzo77R0%2B5tYmuTRLn81be1PJBBW5mfm4ep8xbM5nUKSvankhV%2BGBM51HsOGhbLM68MQauqP0RPSx5HqNU2zIfT9cDDoBCS1CSPrkn7PHVFAVKdYO9hWWP04VGlpGFTaNC5uvN0ha45Tle8foYmwqIpwEMDa3yuI1h1G9FNtaHzdg9VM3rUbHHc%2B7mxDi%2FTtHBlOQGRqOIE0hoXMERIS7V8u6PadvhUItwRhj9xnmnTeXFY2hKuMy5cVEqRB9n2pUBYATMxcGp2UYfLaT%2FFVWQs8RrwAui0Lg1%2FAwmOxenwPLwqJcg5DCf2WvqfndZ%2BVCbwenX%2FqO0o6%2BIraR4JNqvpmd6LcHIesdv0tcXThmCNc4HfD9YcD0C80O%2FP5G09FkZhuyNQ5Eshb3y1Aa7nGYdwgati%2BZfABNANrfygPmQpOpix3mfhuUFfWD7X0ssODjDYwa29BjqkAXg2faBorKJ7FFhuTqOCsMvO7MvP%2BYkw1DIbrZtffRrsB0Rvqy%2BskEi0Arj0pizgutq4JyVbXAzE1L7rqtGDQI%2B9uJePbL0c51JOrdRUjnsgWg0tFQc6XB%2FIwyDAbM1onYBo529%2FneZcBI1YRD%2Flf9lIoWkfVWP%2BMfXVymlc948T5L6i0Xxy9fQuprA%2F0ipoqVM8J%2FQfccSI13mrG8jpV1a5uLWP&X-Amz-Signature=7c78f144139b916740b6ce10ec570a1bf0c40b7964842f2b7d8402565a950121&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UOD3DH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBqHP%2B48cUSDCPPKV0%2BBoJ7276WQwrmvZufhbkTNxSQIhAOAbp08%2BZUH%2Bs5sSDLWLbsxt3lIYWNeuAEl2hjM58v4JKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q3r5dUh6s%2B60uC8q3AOAh%2Frzw8oC7VLBs8GBEmgxyvLteUjs61nO%2FxJCEhfLhoSIBn%2B9Q7S3Kw1%2FYRSrKz7dKGGJJyWG9cfXJHDRhz%2FBvCzAwjbibNnIeJVmyftdcLddtl%2BwDfJYlDqg8iso25e%2FToynlE8IMjr1xEasx35nq6RF38nzaYuCBRIEmdAmHWZO5xn4LQp64sNl%2BZXzo77R0%2B5tYmuTRLn81be1PJBBW5mfm4ep8xbM5nUKSvankhV%2BGBM51HsOGhbLM68MQauqP0RPSx5HqNU2zIfT9cDDoBCS1CSPrkn7PHVFAVKdYO9hWWP04VGlpGFTaNC5uvN0ha45Tle8foYmwqIpwEMDa3yuI1h1G9FNtaHzdg9VM3rUbHHc%2B7mxDi%2FTtHBlOQGRqOIE0hoXMERIS7V8u6PadvhUItwRhj9xnmnTeXFY2hKuMy5cVEqRB9n2pUBYATMxcGp2UYfLaT%2FFVWQs8RrwAui0Lg1%2FAwmOxenwPLwqJcg5DCf2WvqfndZ%2BVCbwenX%2FqO0o6%2BIraR4JNqvpmd6LcHIesdv0tcXThmCNc4HfD9YcD0C80O%2FP5G09FkZhuyNQ5Eshb3y1Aa7nGYdwgati%2BZfABNANrfygPmQpOpix3mfhuUFfWD7X0ssODjDYwa29BjqkAXg2faBorKJ7FFhuTqOCsMvO7MvP%2BYkw1DIbrZtffRrsB0Rvqy%2BskEi0Arj0pizgutq4JyVbXAzE1L7rqtGDQI%2B9uJePbL0c51JOrdRUjnsgWg0tFQc6XB%2FIwyDAbM1onYBo529%2FneZcBI1YRD%2Flf9lIoWkfVWP%2BMfXVymlc948T5L6i0Xxy9fQuprA%2F0ipoqVM8J%2FQfccSI13mrG8jpV1a5uLWP&X-Amz-Signature=d00075b6238493214c0b56d6487a3716bfc67cbcba040564226b39c24ae4c10f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UOD3DH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBqHP%2B48cUSDCPPKV0%2BBoJ7276WQwrmvZufhbkTNxSQIhAOAbp08%2BZUH%2Bs5sSDLWLbsxt3lIYWNeuAEl2hjM58v4JKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q3r5dUh6s%2B60uC8q3AOAh%2Frzw8oC7VLBs8GBEmgxyvLteUjs61nO%2FxJCEhfLhoSIBn%2B9Q7S3Kw1%2FYRSrKz7dKGGJJyWG9cfXJHDRhz%2FBvCzAwjbibNnIeJVmyftdcLddtl%2BwDfJYlDqg8iso25e%2FToynlE8IMjr1xEasx35nq6RF38nzaYuCBRIEmdAmHWZO5xn4LQp64sNl%2BZXzo77R0%2B5tYmuTRLn81be1PJBBW5mfm4ep8xbM5nUKSvankhV%2BGBM51HsOGhbLM68MQauqP0RPSx5HqNU2zIfT9cDDoBCS1CSPrkn7PHVFAVKdYO9hWWP04VGlpGFTaNC5uvN0ha45Tle8foYmwqIpwEMDa3yuI1h1G9FNtaHzdg9VM3rUbHHc%2B7mxDi%2FTtHBlOQGRqOIE0hoXMERIS7V8u6PadvhUItwRhj9xnmnTeXFY2hKuMy5cVEqRB9n2pUBYATMxcGp2UYfLaT%2FFVWQs8RrwAui0Lg1%2FAwmOxenwPLwqJcg5DCf2WvqfndZ%2BVCbwenX%2FqO0o6%2BIraR4JNqvpmd6LcHIesdv0tcXThmCNc4HfD9YcD0C80O%2FP5G09FkZhuyNQ5Eshb3y1Aa7nGYdwgati%2BZfABNANrfygPmQpOpix3mfhuUFfWD7X0ssODjDYwa29BjqkAXg2faBorKJ7FFhuTqOCsMvO7MvP%2BYkw1DIbrZtffRrsB0Rvqy%2BskEi0Arj0pizgutq4JyVbXAzE1L7rqtGDQI%2B9uJePbL0c51JOrdRUjnsgWg0tFQc6XB%2FIwyDAbM1onYBo529%2FneZcBI1YRD%2Flf9lIoWkfVWP%2BMfXVymlc948T5L6i0Xxy9fQuprA%2F0ipoqVM8J%2FQfccSI13mrG8jpV1a5uLWP&X-Amz-Signature=e2f722f9e1dd6888ce32ad30a5d23624336edec816dde340187ee4f786ee7231&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UOD3DH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBqHP%2B48cUSDCPPKV0%2BBoJ7276WQwrmvZufhbkTNxSQIhAOAbp08%2BZUH%2Bs5sSDLWLbsxt3lIYWNeuAEl2hjM58v4JKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q3r5dUh6s%2B60uC8q3AOAh%2Frzw8oC7VLBs8GBEmgxyvLteUjs61nO%2FxJCEhfLhoSIBn%2B9Q7S3Kw1%2FYRSrKz7dKGGJJyWG9cfXJHDRhz%2FBvCzAwjbibNnIeJVmyftdcLddtl%2BwDfJYlDqg8iso25e%2FToynlE8IMjr1xEasx35nq6RF38nzaYuCBRIEmdAmHWZO5xn4LQp64sNl%2BZXzo77R0%2B5tYmuTRLn81be1PJBBW5mfm4ep8xbM5nUKSvankhV%2BGBM51HsOGhbLM68MQauqP0RPSx5HqNU2zIfT9cDDoBCS1CSPrkn7PHVFAVKdYO9hWWP04VGlpGFTaNC5uvN0ha45Tle8foYmwqIpwEMDa3yuI1h1G9FNtaHzdg9VM3rUbHHc%2B7mxDi%2FTtHBlOQGRqOIE0hoXMERIS7V8u6PadvhUItwRhj9xnmnTeXFY2hKuMy5cVEqRB9n2pUBYATMxcGp2UYfLaT%2FFVWQs8RrwAui0Lg1%2FAwmOxenwPLwqJcg5DCf2WvqfndZ%2BVCbwenX%2FqO0o6%2BIraR4JNqvpmd6LcHIesdv0tcXThmCNc4HfD9YcD0C80O%2FP5G09FkZhuyNQ5Eshb3y1Aa7nGYdwgati%2BZfABNANrfygPmQpOpix3mfhuUFfWD7X0ssODjDYwa29BjqkAXg2faBorKJ7FFhuTqOCsMvO7MvP%2BYkw1DIbrZtffRrsB0Rvqy%2BskEi0Arj0pizgutq4JyVbXAzE1L7rqtGDQI%2B9uJePbL0c51JOrdRUjnsgWg0tFQc6XB%2FIwyDAbM1onYBo529%2FneZcBI1YRD%2Flf9lIoWkfVWP%2BMfXVymlc948T5L6i0Xxy9fQuprA%2F0ipoqVM8J%2FQfccSI13mrG8jpV1a5uLWP&X-Amz-Signature=f1fb6de0018a1b4357c89e9d99fcb7e6dde85e5885f642e3d205bf2b2bdda533&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UOD3DH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBqHP%2B48cUSDCPPKV0%2BBoJ7276WQwrmvZufhbkTNxSQIhAOAbp08%2BZUH%2Bs5sSDLWLbsxt3lIYWNeuAEl2hjM58v4JKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q3r5dUh6s%2B60uC8q3AOAh%2Frzw8oC7VLBs8GBEmgxyvLteUjs61nO%2FxJCEhfLhoSIBn%2B9Q7S3Kw1%2FYRSrKz7dKGGJJyWG9cfXJHDRhz%2FBvCzAwjbibNnIeJVmyftdcLddtl%2BwDfJYlDqg8iso25e%2FToynlE8IMjr1xEasx35nq6RF38nzaYuCBRIEmdAmHWZO5xn4LQp64sNl%2BZXzo77R0%2B5tYmuTRLn81be1PJBBW5mfm4ep8xbM5nUKSvankhV%2BGBM51HsOGhbLM68MQauqP0RPSx5HqNU2zIfT9cDDoBCS1CSPrkn7PHVFAVKdYO9hWWP04VGlpGFTaNC5uvN0ha45Tle8foYmwqIpwEMDa3yuI1h1G9FNtaHzdg9VM3rUbHHc%2B7mxDi%2FTtHBlOQGRqOIE0hoXMERIS7V8u6PadvhUItwRhj9xnmnTeXFY2hKuMy5cVEqRB9n2pUBYATMxcGp2UYfLaT%2FFVWQs8RrwAui0Lg1%2FAwmOxenwPLwqJcg5DCf2WvqfndZ%2BVCbwenX%2FqO0o6%2BIraR4JNqvpmd6LcHIesdv0tcXThmCNc4HfD9YcD0C80O%2FP5G09FkZhuyNQ5Eshb3y1Aa7nGYdwgati%2BZfABNANrfygPmQpOpix3mfhuUFfWD7X0ssODjDYwa29BjqkAXg2faBorKJ7FFhuTqOCsMvO7MvP%2BYkw1DIbrZtffRrsB0Rvqy%2BskEi0Arj0pizgutq4JyVbXAzE1L7rqtGDQI%2B9uJePbL0c51JOrdRUjnsgWg0tFQc6XB%2FIwyDAbM1onYBo529%2FneZcBI1YRD%2Flf9lIoWkfVWP%2BMfXVymlc948T5L6i0Xxy9fQuprA%2F0ipoqVM8J%2FQfccSI13mrG8jpV1a5uLWP&X-Amz-Signature=af1cab43c048f4ced3821d023dcde1cfbd0fe11ba2cae9585d5348daf4026c71&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UOD3DH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBqHP%2B48cUSDCPPKV0%2BBoJ7276WQwrmvZufhbkTNxSQIhAOAbp08%2BZUH%2Bs5sSDLWLbsxt3lIYWNeuAEl2hjM58v4JKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q3r5dUh6s%2B60uC8q3AOAh%2Frzw8oC7VLBs8GBEmgxyvLteUjs61nO%2FxJCEhfLhoSIBn%2B9Q7S3Kw1%2FYRSrKz7dKGGJJyWG9cfXJHDRhz%2FBvCzAwjbibNnIeJVmyftdcLddtl%2BwDfJYlDqg8iso25e%2FToynlE8IMjr1xEasx35nq6RF38nzaYuCBRIEmdAmHWZO5xn4LQp64sNl%2BZXzo77R0%2B5tYmuTRLn81be1PJBBW5mfm4ep8xbM5nUKSvankhV%2BGBM51HsOGhbLM68MQauqP0RPSx5HqNU2zIfT9cDDoBCS1CSPrkn7PHVFAVKdYO9hWWP04VGlpGFTaNC5uvN0ha45Tle8foYmwqIpwEMDa3yuI1h1G9FNtaHzdg9VM3rUbHHc%2B7mxDi%2FTtHBlOQGRqOIE0hoXMERIS7V8u6PadvhUItwRhj9xnmnTeXFY2hKuMy5cVEqRB9n2pUBYATMxcGp2UYfLaT%2FFVWQs8RrwAui0Lg1%2FAwmOxenwPLwqJcg5DCf2WvqfndZ%2BVCbwenX%2FqO0o6%2BIraR4JNqvpmd6LcHIesdv0tcXThmCNc4HfD9YcD0C80O%2FP5G09FkZhuyNQ5Eshb3y1Aa7nGYdwgati%2BZfABNANrfygPmQpOpix3mfhuUFfWD7X0ssODjDYwa29BjqkAXg2faBorKJ7FFhuTqOCsMvO7MvP%2BYkw1DIbrZtffRrsB0Rvqy%2BskEi0Arj0pizgutq4JyVbXAzE1L7rqtGDQI%2B9uJePbL0c51JOrdRUjnsgWg0tFQc6XB%2FIwyDAbM1onYBo529%2FneZcBI1YRD%2Flf9lIoWkfVWP%2BMfXVymlc948T5L6i0Xxy9fQuprA%2F0ipoqVM8J%2FQfccSI13mrG8jpV1a5uLWP&X-Amz-Signature=1048410805a539eb127520a1451ec6a8a4e61d90f9338b99935e184a27d0a308&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
