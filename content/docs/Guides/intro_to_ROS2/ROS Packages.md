---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63YQES%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGt6%2FZcBNWUxD8q1%2BacGl8eZGMI3Gk2qcEOtBJsSCnNKAiAhH6zVHqE%2FJOGgaX2fIfcw4vzYBZ2ZPUoILjpG9%2FvQaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHkx5sjfO%2BSq%2BkpFLKtwDbruHa6j3yOtp6HuNIFGUiz5vI5wT8Am51JZDTIdn2LHaVlPN5TDfvgQqsfZ66M9kOZjpzApsWNE8xaao8GaUX%2B0GzFUPrYP%2Fmf6u4nhFrn0Trt2ppWW5HqwBek%2Bu9RrDiaPUaWvlPHIsKNJFv%2Fh2sbD30oV%2FJOSc4x4N1YRIU5LNFNpIrkQg7Dh3P2aUwc%2BpaGvM3pXCAu2O5F8g2s0UcIPeH%2B%2FASmYWw4NfAex3YZbkr5lJ4z0ARo9kUxYi%2Fgz0ic4IvomtmHXU9O4qvJa9cG1rlF0gDZ%2F0XVys8Xnwp6CWfN7JPsyt8aOqzkXWLQKp6o%2BZ3zr02FYmGUa6hQmqXsBG7v5molYAd6l%2FPO8vFmDA033BFdNDQWP2vJtJPbRJliW%2FoPH%2FJjLqYbaLYVLvv%2BJVOB0ZYKU8r%2FB0b8C2fmVGFSCLr%2BLNLIeANEzek1d7d3T50hSRGDI%2BFWxMsAjhipv7WvaTX%2FpH7caX%2BDk2tj4OBYhlpZ%2Bo0fS0ToGhM7yuBPZdwklo4dglA1BAN5AmzPXL9ugWWMCzxbpdQ6fQfe9dAU4k121u9ivDl0T%2Fdxi3hL6PXdY2IHBxbpwK1skQyBLoAXiHSqXG6bkiFFQ6yY5y0WucSvO%2BSirD%2Bzgw4Nmm0gY6pgFpzOntMO2ybD3NCPPtlxdJiAp68YW10McQOEZ6watr30sUosY8kEiPWzZKZufWCNyuAjWgyeseoKnikv3qAF3kBGj00trcyRtWXZPCphWyA%2FulnZGwqOATbkKlcPs0uodun9BejUIhu2bzF8kjdW%2FR58hnua8mlPyMk54sQA3RH6hWNkc5qcbO32te5E%2FjrbPuWPbA89MB3krxBYVUsXJuNOh%2F8iQA&X-Amz-Signature=801644340bfc5c5813702715de4e75bd8c1befa0334d7a5fec6297c8ad5160ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63YQES%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGt6%2FZcBNWUxD8q1%2BacGl8eZGMI3Gk2qcEOtBJsSCnNKAiAhH6zVHqE%2FJOGgaX2fIfcw4vzYBZ2ZPUoILjpG9%2FvQaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHkx5sjfO%2BSq%2BkpFLKtwDbruHa6j3yOtp6HuNIFGUiz5vI5wT8Am51JZDTIdn2LHaVlPN5TDfvgQqsfZ66M9kOZjpzApsWNE8xaao8GaUX%2B0GzFUPrYP%2Fmf6u4nhFrn0Trt2ppWW5HqwBek%2Bu9RrDiaPUaWvlPHIsKNJFv%2Fh2sbD30oV%2FJOSc4x4N1YRIU5LNFNpIrkQg7Dh3P2aUwc%2BpaGvM3pXCAu2O5F8g2s0UcIPeH%2B%2FASmYWw4NfAex3YZbkr5lJ4z0ARo9kUxYi%2Fgz0ic4IvomtmHXU9O4qvJa9cG1rlF0gDZ%2F0XVys8Xnwp6CWfN7JPsyt8aOqzkXWLQKp6o%2BZ3zr02FYmGUa6hQmqXsBG7v5molYAd6l%2FPO8vFmDA033BFdNDQWP2vJtJPbRJliW%2FoPH%2FJjLqYbaLYVLvv%2BJVOB0ZYKU8r%2FB0b8C2fmVGFSCLr%2BLNLIeANEzek1d7d3T50hSRGDI%2BFWxMsAjhipv7WvaTX%2FpH7caX%2BDk2tj4OBYhlpZ%2Bo0fS0ToGhM7yuBPZdwklo4dglA1BAN5AmzPXL9ugWWMCzxbpdQ6fQfe9dAU4k121u9ivDl0T%2Fdxi3hL6PXdY2IHBxbpwK1skQyBLoAXiHSqXG6bkiFFQ6yY5y0WucSvO%2BSirD%2Bzgw4Nmm0gY6pgFpzOntMO2ybD3NCPPtlxdJiAp68YW10McQOEZ6watr30sUosY8kEiPWzZKZufWCNyuAjWgyeseoKnikv3qAF3kBGj00trcyRtWXZPCphWyA%2FulnZGwqOATbkKlcPs0uodun9BejUIhu2bzF8kjdW%2FR58hnua8mlPyMk54sQA3RH6hWNkc5qcbO32te5E%2FjrbPuWPbA89MB3krxBYVUsXJuNOh%2F8iQA&X-Amz-Signature=0e8b19bb9f276ec38f785faff2f43669283abdb4437dc0c483001d9533f9d0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63YQES%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGt6%2FZcBNWUxD8q1%2BacGl8eZGMI3Gk2qcEOtBJsSCnNKAiAhH6zVHqE%2FJOGgaX2fIfcw4vzYBZ2ZPUoILjpG9%2FvQaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHkx5sjfO%2BSq%2BkpFLKtwDbruHa6j3yOtp6HuNIFGUiz5vI5wT8Am51JZDTIdn2LHaVlPN5TDfvgQqsfZ66M9kOZjpzApsWNE8xaao8GaUX%2B0GzFUPrYP%2Fmf6u4nhFrn0Trt2ppWW5HqwBek%2Bu9RrDiaPUaWvlPHIsKNJFv%2Fh2sbD30oV%2FJOSc4x4N1YRIU5LNFNpIrkQg7Dh3P2aUwc%2BpaGvM3pXCAu2O5F8g2s0UcIPeH%2B%2FASmYWw4NfAex3YZbkr5lJ4z0ARo9kUxYi%2Fgz0ic4IvomtmHXU9O4qvJa9cG1rlF0gDZ%2F0XVys8Xnwp6CWfN7JPsyt8aOqzkXWLQKp6o%2BZ3zr02FYmGUa6hQmqXsBG7v5molYAd6l%2FPO8vFmDA033BFdNDQWP2vJtJPbRJliW%2FoPH%2FJjLqYbaLYVLvv%2BJVOB0ZYKU8r%2FB0b8C2fmVGFSCLr%2BLNLIeANEzek1d7d3T50hSRGDI%2BFWxMsAjhipv7WvaTX%2FpH7caX%2BDk2tj4OBYhlpZ%2Bo0fS0ToGhM7yuBPZdwklo4dglA1BAN5AmzPXL9ugWWMCzxbpdQ6fQfe9dAU4k121u9ivDl0T%2Fdxi3hL6PXdY2IHBxbpwK1skQyBLoAXiHSqXG6bkiFFQ6yY5y0WucSvO%2BSirD%2Bzgw4Nmm0gY6pgFpzOntMO2ybD3NCPPtlxdJiAp68YW10McQOEZ6watr30sUosY8kEiPWzZKZufWCNyuAjWgyeseoKnikv3qAF3kBGj00trcyRtWXZPCphWyA%2FulnZGwqOATbkKlcPs0uodun9BejUIhu2bzF8kjdW%2FR58hnua8mlPyMk54sQA3RH6hWNkc5qcbO32te5E%2FjrbPuWPbA89MB3krxBYVUsXJuNOh%2F8iQA&X-Amz-Signature=4ba4cbf7d01544a3fef22ca71bfad57dbf09a37f594f8349710891a91b0f1187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63YQES%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGt6%2FZcBNWUxD8q1%2BacGl8eZGMI3Gk2qcEOtBJsSCnNKAiAhH6zVHqE%2FJOGgaX2fIfcw4vzYBZ2ZPUoILjpG9%2FvQaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHkx5sjfO%2BSq%2BkpFLKtwDbruHa6j3yOtp6HuNIFGUiz5vI5wT8Am51JZDTIdn2LHaVlPN5TDfvgQqsfZ66M9kOZjpzApsWNE8xaao8GaUX%2B0GzFUPrYP%2Fmf6u4nhFrn0Trt2ppWW5HqwBek%2Bu9RrDiaPUaWvlPHIsKNJFv%2Fh2sbD30oV%2FJOSc4x4N1YRIU5LNFNpIrkQg7Dh3P2aUwc%2BpaGvM3pXCAu2O5F8g2s0UcIPeH%2B%2FASmYWw4NfAex3YZbkr5lJ4z0ARo9kUxYi%2Fgz0ic4IvomtmHXU9O4qvJa9cG1rlF0gDZ%2F0XVys8Xnwp6CWfN7JPsyt8aOqzkXWLQKp6o%2BZ3zr02FYmGUa6hQmqXsBG7v5molYAd6l%2FPO8vFmDA033BFdNDQWP2vJtJPbRJliW%2FoPH%2FJjLqYbaLYVLvv%2BJVOB0ZYKU8r%2FB0b8C2fmVGFSCLr%2BLNLIeANEzek1d7d3T50hSRGDI%2BFWxMsAjhipv7WvaTX%2FpH7caX%2BDk2tj4OBYhlpZ%2Bo0fS0ToGhM7yuBPZdwklo4dglA1BAN5AmzPXL9ugWWMCzxbpdQ6fQfe9dAU4k121u9ivDl0T%2Fdxi3hL6PXdY2IHBxbpwK1skQyBLoAXiHSqXG6bkiFFQ6yY5y0WucSvO%2BSirD%2Bzgw4Nmm0gY6pgFpzOntMO2ybD3NCPPtlxdJiAp68YW10McQOEZ6watr30sUosY8kEiPWzZKZufWCNyuAjWgyeseoKnikv3qAF3kBGj00trcyRtWXZPCphWyA%2FulnZGwqOATbkKlcPs0uodun9BejUIhu2bzF8kjdW%2FR58hnua8mlPyMk54sQA3RH6hWNkc5qcbO32te5E%2FjrbPuWPbA89MB3krxBYVUsXJuNOh%2F8iQA&X-Amz-Signature=090b3455385b2c064f2c4e7487f970c7a324e508b54b3ef23402688d44e367e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63YQES%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGt6%2FZcBNWUxD8q1%2BacGl8eZGMI3Gk2qcEOtBJsSCnNKAiAhH6zVHqE%2FJOGgaX2fIfcw4vzYBZ2ZPUoILjpG9%2FvQaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHkx5sjfO%2BSq%2BkpFLKtwDbruHa6j3yOtp6HuNIFGUiz5vI5wT8Am51JZDTIdn2LHaVlPN5TDfvgQqsfZ66M9kOZjpzApsWNE8xaao8GaUX%2B0GzFUPrYP%2Fmf6u4nhFrn0Trt2ppWW5HqwBek%2Bu9RrDiaPUaWvlPHIsKNJFv%2Fh2sbD30oV%2FJOSc4x4N1YRIU5LNFNpIrkQg7Dh3P2aUwc%2BpaGvM3pXCAu2O5F8g2s0UcIPeH%2B%2FASmYWw4NfAex3YZbkr5lJ4z0ARo9kUxYi%2Fgz0ic4IvomtmHXU9O4qvJa9cG1rlF0gDZ%2F0XVys8Xnwp6CWfN7JPsyt8aOqzkXWLQKp6o%2BZ3zr02FYmGUa6hQmqXsBG7v5molYAd6l%2FPO8vFmDA033BFdNDQWP2vJtJPbRJliW%2FoPH%2FJjLqYbaLYVLvv%2BJVOB0ZYKU8r%2FB0b8C2fmVGFSCLr%2BLNLIeANEzek1d7d3T50hSRGDI%2BFWxMsAjhipv7WvaTX%2FpH7caX%2BDk2tj4OBYhlpZ%2Bo0fS0ToGhM7yuBPZdwklo4dglA1BAN5AmzPXL9ugWWMCzxbpdQ6fQfe9dAU4k121u9ivDl0T%2Fdxi3hL6PXdY2IHBxbpwK1skQyBLoAXiHSqXG6bkiFFQ6yY5y0WucSvO%2BSirD%2Bzgw4Nmm0gY6pgFpzOntMO2ybD3NCPPtlxdJiAp68YW10McQOEZ6watr30sUosY8kEiPWzZKZufWCNyuAjWgyeseoKnikv3qAF3kBGj00trcyRtWXZPCphWyA%2FulnZGwqOATbkKlcPs0uodun9BejUIhu2bzF8kjdW%2FR58hnua8mlPyMk54sQA3RH6hWNkc5qcbO32te5E%2FjrbPuWPbA89MB3krxBYVUsXJuNOh%2F8iQA&X-Amz-Signature=2864636f91f8e612204c2007070ade4c95e1ecbd9d1650dc479558e313d5470d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63YQES%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGt6%2FZcBNWUxD8q1%2BacGl8eZGMI3Gk2qcEOtBJsSCnNKAiAhH6zVHqE%2FJOGgaX2fIfcw4vzYBZ2ZPUoILjpG9%2FvQaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHkx5sjfO%2BSq%2BkpFLKtwDbruHa6j3yOtp6HuNIFGUiz5vI5wT8Am51JZDTIdn2LHaVlPN5TDfvgQqsfZ66M9kOZjpzApsWNE8xaao8GaUX%2B0GzFUPrYP%2Fmf6u4nhFrn0Trt2ppWW5HqwBek%2Bu9RrDiaPUaWvlPHIsKNJFv%2Fh2sbD30oV%2FJOSc4x4N1YRIU5LNFNpIrkQg7Dh3P2aUwc%2BpaGvM3pXCAu2O5F8g2s0UcIPeH%2B%2FASmYWw4NfAex3YZbkr5lJ4z0ARo9kUxYi%2Fgz0ic4IvomtmHXU9O4qvJa9cG1rlF0gDZ%2F0XVys8Xnwp6CWfN7JPsyt8aOqzkXWLQKp6o%2BZ3zr02FYmGUa6hQmqXsBG7v5molYAd6l%2FPO8vFmDA033BFdNDQWP2vJtJPbRJliW%2FoPH%2FJjLqYbaLYVLvv%2BJVOB0ZYKU8r%2FB0b8C2fmVGFSCLr%2BLNLIeANEzek1d7d3T50hSRGDI%2BFWxMsAjhipv7WvaTX%2FpH7caX%2BDk2tj4OBYhlpZ%2Bo0fS0ToGhM7yuBPZdwklo4dglA1BAN5AmzPXL9ugWWMCzxbpdQ6fQfe9dAU4k121u9ivDl0T%2Fdxi3hL6PXdY2IHBxbpwK1skQyBLoAXiHSqXG6bkiFFQ6yY5y0WucSvO%2BSirD%2Bzgw4Nmm0gY6pgFpzOntMO2ybD3NCPPtlxdJiAp68YW10McQOEZ6watr30sUosY8kEiPWzZKZufWCNyuAjWgyeseoKnikv3qAF3kBGj00trcyRtWXZPCphWyA%2FulnZGwqOATbkKlcPs0uodun9BejUIhu2bzF8kjdW%2FR58hnua8mlPyMk54sQA3RH6hWNkc5qcbO32te5E%2FjrbPuWPbA89MB3krxBYVUsXJuNOh%2F8iQA&X-Amz-Signature=c8f39cccb279bac4853bc5c62dd62356f17dc0aa9eec44c285f1dd1964a45f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63YQES%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGt6%2FZcBNWUxD8q1%2BacGl8eZGMI3Gk2qcEOtBJsSCnNKAiAhH6zVHqE%2FJOGgaX2fIfcw4vzYBZ2ZPUoILjpG9%2FvQaSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHkx5sjfO%2BSq%2BkpFLKtwDbruHa6j3yOtp6HuNIFGUiz5vI5wT8Am51JZDTIdn2LHaVlPN5TDfvgQqsfZ66M9kOZjpzApsWNE8xaao8GaUX%2B0GzFUPrYP%2Fmf6u4nhFrn0Trt2ppWW5HqwBek%2Bu9RrDiaPUaWvlPHIsKNJFv%2Fh2sbD30oV%2FJOSc4x4N1YRIU5LNFNpIrkQg7Dh3P2aUwc%2BpaGvM3pXCAu2O5F8g2s0UcIPeH%2B%2FASmYWw4NfAex3YZbkr5lJ4z0ARo9kUxYi%2Fgz0ic4IvomtmHXU9O4qvJa9cG1rlF0gDZ%2F0XVys8Xnwp6CWfN7JPsyt8aOqzkXWLQKp6o%2BZ3zr02FYmGUa6hQmqXsBG7v5molYAd6l%2FPO8vFmDA033BFdNDQWP2vJtJPbRJliW%2FoPH%2FJjLqYbaLYVLvv%2BJVOB0ZYKU8r%2FB0b8C2fmVGFSCLr%2BLNLIeANEzek1d7d3T50hSRGDI%2BFWxMsAjhipv7WvaTX%2FpH7caX%2BDk2tj4OBYhlpZ%2Bo0fS0ToGhM7yuBPZdwklo4dglA1BAN5AmzPXL9ugWWMCzxbpdQ6fQfe9dAU4k121u9ivDl0T%2Fdxi3hL6PXdY2IHBxbpwK1skQyBLoAXiHSqXG6bkiFFQ6yY5y0WucSvO%2BSirD%2Bzgw4Nmm0gY6pgFpzOntMO2ybD3NCPPtlxdJiAp68YW10McQOEZ6watr30sUosY8kEiPWzZKZufWCNyuAjWgyeseoKnikv3qAF3kBGj00trcyRtWXZPCphWyA%2FulnZGwqOATbkKlcPs0uodun9BejUIhu2bzF8kjdW%2FR58hnua8mlPyMk54sQA3RH6hWNkc5qcbO32te5E%2FjrbPuWPbA89MB3krxBYVUsXJuNOh%2F8iQA&X-Amz-Signature=fbc6b427fbf4f442789cfae2a4ba30cf3552e68d9cc60e3b0d7558d3ba86bfac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
