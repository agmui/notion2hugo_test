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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S675Q3CR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCk1r70Ff0MFiu97lcBdQKBloLLtsv5ppOyFU8NSlCivgIhAIsCL0pXsXQtMG6Rz6DVTq%2BrRxZQpaFHf2C3ncz%2FaEyDKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCQK9UY6IZXmd8ZH8q3APSGPi%2BoU%2Fn4DkB%2BuhLdUu%2FPUELdEu%2Byl6KxRzgvvi34ChHLXZok7v3wyBkVn9laMSYOJaT6hsbLPVC%2BIzkY3Vjm4h%2F1uVtBmINZs8xEBfpUaHC2uQpTQcjde3A%2FXOGa4D9UiuzBQdPyRDNVT%2FSKsx8%2BBxR5wnJbM8Kbj2uvK7hfrPNpYkB1yRWcyANi1Fq8Jb2WrIR%2FOA24YTSLi%2B1tflUvlDy4g2YXEp%2BXXxi%2F6SCjBb%2BVPWMRiVBnFe0L2BpHm7zEiAiqb0S94qaI0iWxY7Tw16bNIaKL6LUH6I3Wf7x9pJp55FqG19vD74oTTHtDaqIJiR5JtOR%2FRM6kt%2BWu1pNaKQar2GqSCTQTrQ0mRPV4h1dOcUwrPXXYxveNwD6c3PC6NX35Lso5bDbY2o%2F58ZchE3Kjm7VW34JHI1SPmFv4zMvHXWeCS2bnFTI0xaAbWhP6CUNqcRTCyp4779woNeNhs12n5jPiQRep%2BXFUsVJqTaEtfwk51NIEaBpqkDs0umWpm64j%2BdQjOtpAgY6%2FUnOTLqZuUewEnigDBFdU8D%2BmXoOvLMnea7c0rVwRIVoYHllHHqFSrKtUFfQApRZVSnl0vOFCRgn6qfkFY3nqa6c%2BE2vdoJn5RGwInGOOjDd3oDBBjqkAb5X374jAeCBllAE3iEz%2BZQB2G9x2Lvj9jsQfhWCr8%2BQYzEsKfqj5dXhOwqPYfIphYH2Y9wWbJ9sat7LH6vM26I7KZJJjb9Mq2ZQbHXj6yoybtwnWKw1XUYTTDFDW%2FhcqsKDtSbPcY2pvCT6opUXpS4p0mCGQ2Zp76hFjh8STy5EvUUoi3ncKGtV%2BBsVciUPOdVLzDT6bPLWR99cw7%2FrbUw1jkmG&X-Amz-Signature=156ca0aaee6fc45841540a947070660a9677d0d6d596e99297531fa93f696721&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S675Q3CR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCk1r70Ff0MFiu97lcBdQKBloLLtsv5ppOyFU8NSlCivgIhAIsCL0pXsXQtMG6Rz6DVTq%2BrRxZQpaFHf2C3ncz%2FaEyDKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCQK9UY6IZXmd8ZH8q3APSGPi%2BoU%2Fn4DkB%2BuhLdUu%2FPUELdEu%2Byl6KxRzgvvi34ChHLXZok7v3wyBkVn9laMSYOJaT6hsbLPVC%2BIzkY3Vjm4h%2F1uVtBmINZs8xEBfpUaHC2uQpTQcjde3A%2FXOGa4D9UiuzBQdPyRDNVT%2FSKsx8%2BBxR5wnJbM8Kbj2uvK7hfrPNpYkB1yRWcyANi1Fq8Jb2WrIR%2FOA24YTSLi%2B1tflUvlDy4g2YXEp%2BXXxi%2F6SCjBb%2BVPWMRiVBnFe0L2BpHm7zEiAiqb0S94qaI0iWxY7Tw16bNIaKL6LUH6I3Wf7x9pJp55FqG19vD74oTTHtDaqIJiR5JtOR%2FRM6kt%2BWu1pNaKQar2GqSCTQTrQ0mRPV4h1dOcUwrPXXYxveNwD6c3PC6NX35Lso5bDbY2o%2F58ZchE3Kjm7VW34JHI1SPmFv4zMvHXWeCS2bnFTI0xaAbWhP6CUNqcRTCyp4779woNeNhs12n5jPiQRep%2BXFUsVJqTaEtfwk51NIEaBpqkDs0umWpm64j%2BdQjOtpAgY6%2FUnOTLqZuUewEnigDBFdU8D%2BmXoOvLMnea7c0rVwRIVoYHllHHqFSrKtUFfQApRZVSnl0vOFCRgn6qfkFY3nqa6c%2BE2vdoJn5RGwInGOOjDd3oDBBjqkAb5X374jAeCBllAE3iEz%2BZQB2G9x2Lvj9jsQfhWCr8%2BQYzEsKfqj5dXhOwqPYfIphYH2Y9wWbJ9sat7LH6vM26I7KZJJjb9Mq2ZQbHXj6yoybtwnWKw1XUYTTDFDW%2FhcqsKDtSbPcY2pvCT6opUXpS4p0mCGQ2Zp76hFjh8STy5EvUUoi3ncKGtV%2BBsVciUPOdVLzDT6bPLWR99cw7%2FrbUw1jkmG&X-Amz-Signature=76b6e50c39f57e2e3e1bceba2e8302d83da004d7b3b9cc88e8ddc4a52850d45c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S675Q3CR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCk1r70Ff0MFiu97lcBdQKBloLLtsv5ppOyFU8NSlCivgIhAIsCL0pXsXQtMG6Rz6DVTq%2BrRxZQpaFHf2C3ncz%2FaEyDKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCQK9UY6IZXmd8ZH8q3APSGPi%2BoU%2Fn4DkB%2BuhLdUu%2FPUELdEu%2Byl6KxRzgvvi34ChHLXZok7v3wyBkVn9laMSYOJaT6hsbLPVC%2BIzkY3Vjm4h%2F1uVtBmINZs8xEBfpUaHC2uQpTQcjde3A%2FXOGa4D9UiuzBQdPyRDNVT%2FSKsx8%2BBxR5wnJbM8Kbj2uvK7hfrPNpYkB1yRWcyANi1Fq8Jb2WrIR%2FOA24YTSLi%2B1tflUvlDy4g2YXEp%2BXXxi%2F6SCjBb%2BVPWMRiVBnFe0L2BpHm7zEiAiqb0S94qaI0iWxY7Tw16bNIaKL6LUH6I3Wf7x9pJp55FqG19vD74oTTHtDaqIJiR5JtOR%2FRM6kt%2BWu1pNaKQar2GqSCTQTrQ0mRPV4h1dOcUwrPXXYxveNwD6c3PC6NX35Lso5bDbY2o%2F58ZchE3Kjm7VW34JHI1SPmFv4zMvHXWeCS2bnFTI0xaAbWhP6CUNqcRTCyp4779woNeNhs12n5jPiQRep%2BXFUsVJqTaEtfwk51NIEaBpqkDs0umWpm64j%2BdQjOtpAgY6%2FUnOTLqZuUewEnigDBFdU8D%2BmXoOvLMnea7c0rVwRIVoYHllHHqFSrKtUFfQApRZVSnl0vOFCRgn6qfkFY3nqa6c%2BE2vdoJn5RGwInGOOjDd3oDBBjqkAb5X374jAeCBllAE3iEz%2BZQB2G9x2Lvj9jsQfhWCr8%2BQYzEsKfqj5dXhOwqPYfIphYH2Y9wWbJ9sat7LH6vM26I7KZJJjb9Mq2ZQbHXj6yoybtwnWKw1XUYTTDFDW%2FhcqsKDtSbPcY2pvCT6opUXpS4p0mCGQ2Zp76hFjh8STy5EvUUoi3ncKGtV%2BBsVciUPOdVLzDT6bPLWR99cw7%2FrbUw1jkmG&X-Amz-Signature=01a4d25d887fcdd28fca49acce3c07a002298f00a073721f9484ca6e2591c807&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S675Q3CR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCk1r70Ff0MFiu97lcBdQKBloLLtsv5ppOyFU8NSlCivgIhAIsCL0pXsXQtMG6Rz6DVTq%2BrRxZQpaFHf2C3ncz%2FaEyDKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCQK9UY6IZXmd8ZH8q3APSGPi%2BoU%2Fn4DkB%2BuhLdUu%2FPUELdEu%2Byl6KxRzgvvi34ChHLXZok7v3wyBkVn9laMSYOJaT6hsbLPVC%2BIzkY3Vjm4h%2F1uVtBmINZs8xEBfpUaHC2uQpTQcjde3A%2FXOGa4D9UiuzBQdPyRDNVT%2FSKsx8%2BBxR5wnJbM8Kbj2uvK7hfrPNpYkB1yRWcyANi1Fq8Jb2WrIR%2FOA24YTSLi%2B1tflUvlDy4g2YXEp%2BXXxi%2F6SCjBb%2BVPWMRiVBnFe0L2BpHm7zEiAiqb0S94qaI0iWxY7Tw16bNIaKL6LUH6I3Wf7x9pJp55FqG19vD74oTTHtDaqIJiR5JtOR%2FRM6kt%2BWu1pNaKQar2GqSCTQTrQ0mRPV4h1dOcUwrPXXYxveNwD6c3PC6NX35Lso5bDbY2o%2F58ZchE3Kjm7VW34JHI1SPmFv4zMvHXWeCS2bnFTI0xaAbWhP6CUNqcRTCyp4779woNeNhs12n5jPiQRep%2BXFUsVJqTaEtfwk51NIEaBpqkDs0umWpm64j%2BdQjOtpAgY6%2FUnOTLqZuUewEnigDBFdU8D%2BmXoOvLMnea7c0rVwRIVoYHllHHqFSrKtUFfQApRZVSnl0vOFCRgn6qfkFY3nqa6c%2BE2vdoJn5RGwInGOOjDd3oDBBjqkAb5X374jAeCBllAE3iEz%2BZQB2G9x2Lvj9jsQfhWCr8%2BQYzEsKfqj5dXhOwqPYfIphYH2Y9wWbJ9sat7LH6vM26I7KZJJjb9Mq2ZQbHXj6yoybtwnWKw1XUYTTDFDW%2FhcqsKDtSbPcY2pvCT6opUXpS4p0mCGQ2Zp76hFjh8STy5EvUUoi3ncKGtV%2BBsVciUPOdVLzDT6bPLWR99cw7%2FrbUw1jkmG&X-Amz-Signature=5f7916acd95bfcf54e45964c80cdd36209d8ae17a96af7bbd463126692e4ff52&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S675Q3CR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCk1r70Ff0MFiu97lcBdQKBloLLtsv5ppOyFU8NSlCivgIhAIsCL0pXsXQtMG6Rz6DVTq%2BrRxZQpaFHf2C3ncz%2FaEyDKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCQK9UY6IZXmd8ZH8q3APSGPi%2BoU%2Fn4DkB%2BuhLdUu%2FPUELdEu%2Byl6KxRzgvvi34ChHLXZok7v3wyBkVn9laMSYOJaT6hsbLPVC%2BIzkY3Vjm4h%2F1uVtBmINZs8xEBfpUaHC2uQpTQcjde3A%2FXOGa4D9UiuzBQdPyRDNVT%2FSKsx8%2BBxR5wnJbM8Kbj2uvK7hfrPNpYkB1yRWcyANi1Fq8Jb2WrIR%2FOA24YTSLi%2B1tflUvlDy4g2YXEp%2BXXxi%2F6SCjBb%2BVPWMRiVBnFe0L2BpHm7zEiAiqb0S94qaI0iWxY7Tw16bNIaKL6LUH6I3Wf7x9pJp55FqG19vD74oTTHtDaqIJiR5JtOR%2FRM6kt%2BWu1pNaKQar2GqSCTQTrQ0mRPV4h1dOcUwrPXXYxveNwD6c3PC6NX35Lso5bDbY2o%2F58ZchE3Kjm7VW34JHI1SPmFv4zMvHXWeCS2bnFTI0xaAbWhP6CUNqcRTCyp4779woNeNhs12n5jPiQRep%2BXFUsVJqTaEtfwk51NIEaBpqkDs0umWpm64j%2BdQjOtpAgY6%2FUnOTLqZuUewEnigDBFdU8D%2BmXoOvLMnea7c0rVwRIVoYHllHHqFSrKtUFfQApRZVSnl0vOFCRgn6qfkFY3nqa6c%2BE2vdoJn5RGwInGOOjDd3oDBBjqkAb5X374jAeCBllAE3iEz%2BZQB2G9x2Lvj9jsQfhWCr8%2BQYzEsKfqj5dXhOwqPYfIphYH2Y9wWbJ9sat7LH6vM26I7KZJJjb9Mq2ZQbHXj6yoybtwnWKw1XUYTTDFDW%2FhcqsKDtSbPcY2pvCT6opUXpS4p0mCGQ2Zp76hFjh8STy5EvUUoi3ncKGtV%2BBsVciUPOdVLzDT6bPLWR99cw7%2FrbUw1jkmG&X-Amz-Signature=c3f5480559b272adc682e45e0a5589ff6bc2d44c6671ec9c9c1abe8a8ea2e97b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S675Q3CR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCk1r70Ff0MFiu97lcBdQKBloLLtsv5ppOyFU8NSlCivgIhAIsCL0pXsXQtMG6Rz6DVTq%2BrRxZQpaFHf2C3ncz%2FaEyDKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCQK9UY6IZXmd8ZH8q3APSGPi%2BoU%2Fn4DkB%2BuhLdUu%2FPUELdEu%2Byl6KxRzgvvi34ChHLXZok7v3wyBkVn9laMSYOJaT6hsbLPVC%2BIzkY3Vjm4h%2F1uVtBmINZs8xEBfpUaHC2uQpTQcjde3A%2FXOGa4D9UiuzBQdPyRDNVT%2FSKsx8%2BBxR5wnJbM8Kbj2uvK7hfrPNpYkB1yRWcyANi1Fq8Jb2WrIR%2FOA24YTSLi%2B1tflUvlDy4g2YXEp%2BXXxi%2F6SCjBb%2BVPWMRiVBnFe0L2BpHm7zEiAiqb0S94qaI0iWxY7Tw16bNIaKL6LUH6I3Wf7x9pJp55FqG19vD74oTTHtDaqIJiR5JtOR%2FRM6kt%2BWu1pNaKQar2GqSCTQTrQ0mRPV4h1dOcUwrPXXYxveNwD6c3PC6NX35Lso5bDbY2o%2F58ZchE3Kjm7VW34JHI1SPmFv4zMvHXWeCS2bnFTI0xaAbWhP6CUNqcRTCyp4779woNeNhs12n5jPiQRep%2BXFUsVJqTaEtfwk51NIEaBpqkDs0umWpm64j%2BdQjOtpAgY6%2FUnOTLqZuUewEnigDBFdU8D%2BmXoOvLMnea7c0rVwRIVoYHllHHqFSrKtUFfQApRZVSnl0vOFCRgn6qfkFY3nqa6c%2BE2vdoJn5RGwInGOOjDd3oDBBjqkAb5X374jAeCBllAE3iEz%2BZQB2G9x2Lvj9jsQfhWCr8%2BQYzEsKfqj5dXhOwqPYfIphYH2Y9wWbJ9sat7LH6vM26I7KZJJjb9Mq2ZQbHXj6yoybtwnWKw1XUYTTDFDW%2FhcqsKDtSbPcY2pvCT6opUXpS4p0mCGQ2Zp76hFjh8STy5EvUUoi3ncKGtV%2BBsVciUPOdVLzDT6bPLWR99cw7%2FrbUw1jkmG&X-Amz-Signature=4c6b61c3b136adcda5ae7ac52229c9875fcfb5d345d2cc652ddf99e488d7d3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S675Q3CR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCk1r70Ff0MFiu97lcBdQKBloLLtsv5ppOyFU8NSlCivgIhAIsCL0pXsXQtMG6Rz6DVTq%2BrRxZQpaFHf2C3ncz%2FaEyDKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCQK9UY6IZXmd8ZH8q3APSGPi%2BoU%2Fn4DkB%2BuhLdUu%2FPUELdEu%2Byl6KxRzgvvi34ChHLXZok7v3wyBkVn9laMSYOJaT6hsbLPVC%2BIzkY3Vjm4h%2F1uVtBmINZs8xEBfpUaHC2uQpTQcjde3A%2FXOGa4D9UiuzBQdPyRDNVT%2FSKsx8%2BBxR5wnJbM8Kbj2uvK7hfrPNpYkB1yRWcyANi1Fq8Jb2WrIR%2FOA24YTSLi%2B1tflUvlDy4g2YXEp%2BXXxi%2F6SCjBb%2BVPWMRiVBnFe0L2BpHm7zEiAiqb0S94qaI0iWxY7Tw16bNIaKL6LUH6I3Wf7x9pJp55FqG19vD74oTTHtDaqIJiR5JtOR%2FRM6kt%2BWu1pNaKQar2GqSCTQTrQ0mRPV4h1dOcUwrPXXYxveNwD6c3PC6NX35Lso5bDbY2o%2F58ZchE3Kjm7VW34JHI1SPmFv4zMvHXWeCS2bnFTI0xaAbWhP6CUNqcRTCyp4779woNeNhs12n5jPiQRep%2BXFUsVJqTaEtfwk51NIEaBpqkDs0umWpm64j%2BdQjOtpAgY6%2FUnOTLqZuUewEnigDBFdU8D%2BmXoOvLMnea7c0rVwRIVoYHllHHqFSrKtUFfQApRZVSnl0vOFCRgn6qfkFY3nqa6c%2BE2vdoJn5RGwInGOOjDd3oDBBjqkAb5X374jAeCBllAE3iEz%2BZQB2G9x2Lvj9jsQfhWCr8%2BQYzEsKfqj5dXhOwqPYfIphYH2Y9wWbJ9sat7LH6vM26I7KZJJjb9Mq2ZQbHXj6yoybtwnWKw1XUYTTDFDW%2FhcqsKDtSbPcY2pvCT6opUXpS4p0mCGQ2Zp76hFjh8STy5EvUUoi3ncKGtV%2BBsVciUPOdVLzDT6bPLWR99cw7%2FrbUw1jkmG&X-Amz-Signature=030ad2dc3fe2745c5c48f5df175aaf110e4d11878b9bb91312413b8f13ed7cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
