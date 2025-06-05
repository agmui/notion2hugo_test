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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSF3YGC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxxIC0q2pImEp5RvylLQShATIA7A7vlJXEKH7EzQnaXAIhANJFoWCQVlc86Llm%2BS7i3hOmAzYNqiw2Q2HiAmZeV1reKv8DCD4QABoMNjM3NDIzMTgzODA1Igy6%2BCRzMGkKSy5qMaEq3AOh9uJQ1bF1ggODXcRDjWyUQJmLBc20IUxUyHEUoaCVNTDQ%2B7BSCuq15GQWZaW8izOJf1lSRZ2FyfAdyYvrhAHL%2By48HYxrdmiIkRjsc9q41pTcQ%2F9VjpQsK8L53zXjnpOTr3qFzZjNWehRxpbBPNPDI%2FjlrXmZWhr9AwYVLQ3cI8j1iN59Em8geNEgp1sQruiwEXG5zGbVt8%2Bi0gSUWYbYmcLOP4uDGTxePWFAqm4Ba9ILzX58gOSUBAuawh3HuyFnlYpi3FC2lAw7PFFKgoz391KYyQDO7fiuMeODzM4ozFqET1BR1iT%2FyR0dRddoinOxuIgCvMMGCg53ZtPt2pjrgevcbmXObrXGoX15Us3ImtXzKxFGuLN6Lu4DCLFrrpw%2FdPRzk69UiUu6mX5iHYXPOi%2BVpYU8zcvvjYFwx8DXR%2Fxh4f8RiKCga0FRPTwYKwgZZpVGxybI6j6wOj5KgFfNIUaBCkq2vfBVs9UONDQE%2F1p5iYC0RH2tsBDlafDcRQoJvwGvliJhFIRUeOgdyTtxnN3OV332Mp73MVdeC09GEtmAcqJrqaacl%2FAjf5FvTKSNLWyIvMXsa857CkIAFL6O34ZtzUlIwNZGql4A27YXUcNH%2BQEkYEuSAEBl%2FDCOw4TCBjqkAVqRxMmLpKQhh%2FUWSFBPB6H5SjQnvescDKY20GFmbwpj6oTAZB2OeVfSXTXmAKw%2F%2BnrYQ6jIfLkZRwxYDpsYnItJWBrHiEtYDjsj0%2FZ2X5FhngTDSQ1O1hWMZPADDF1AgYrKepB%2Bqzv1kXeOuJ%2FD05H0uTtF%2F3DJ0AgWj1zZWBOydaposV1CrOsWlISCGJVD59np0bxWHbc0IRdgWE0rGTMDIHyo&X-Amz-Signature=64f50d147e9753d1ace0ea4f8ede11c00483929d2809a0f1918ed550defb2e31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSF3YGC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxxIC0q2pImEp5RvylLQShATIA7A7vlJXEKH7EzQnaXAIhANJFoWCQVlc86Llm%2BS7i3hOmAzYNqiw2Q2HiAmZeV1reKv8DCD4QABoMNjM3NDIzMTgzODA1Igy6%2BCRzMGkKSy5qMaEq3AOh9uJQ1bF1ggODXcRDjWyUQJmLBc20IUxUyHEUoaCVNTDQ%2B7BSCuq15GQWZaW8izOJf1lSRZ2FyfAdyYvrhAHL%2By48HYxrdmiIkRjsc9q41pTcQ%2F9VjpQsK8L53zXjnpOTr3qFzZjNWehRxpbBPNPDI%2FjlrXmZWhr9AwYVLQ3cI8j1iN59Em8geNEgp1sQruiwEXG5zGbVt8%2Bi0gSUWYbYmcLOP4uDGTxePWFAqm4Ba9ILzX58gOSUBAuawh3HuyFnlYpi3FC2lAw7PFFKgoz391KYyQDO7fiuMeODzM4ozFqET1BR1iT%2FyR0dRddoinOxuIgCvMMGCg53ZtPt2pjrgevcbmXObrXGoX15Us3ImtXzKxFGuLN6Lu4DCLFrrpw%2FdPRzk69UiUu6mX5iHYXPOi%2BVpYU8zcvvjYFwx8DXR%2Fxh4f8RiKCga0FRPTwYKwgZZpVGxybI6j6wOj5KgFfNIUaBCkq2vfBVs9UONDQE%2F1p5iYC0RH2tsBDlafDcRQoJvwGvliJhFIRUeOgdyTtxnN3OV332Mp73MVdeC09GEtmAcqJrqaacl%2FAjf5FvTKSNLWyIvMXsa857CkIAFL6O34ZtzUlIwNZGql4A27YXUcNH%2BQEkYEuSAEBl%2FDCOw4TCBjqkAVqRxMmLpKQhh%2FUWSFBPB6H5SjQnvescDKY20GFmbwpj6oTAZB2OeVfSXTXmAKw%2F%2BnrYQ6jIfLkZRwxYDpsYnItJWBrHiEtYDjsj0%2FZ2X5FhngTDSQ1O1hWMZPADDF1AgYrKepB%2Bqzv1kXeOuJ%2FD05H0uTtF%2F3DJ0AgWj1zZWBOydaposV1CrOsWlISCGJVD59np0bxWHbc0IRdgWE0rGTMDIHyo&X-Amz-Signature=a21a7178e6c64e624576d3d751e309361e395ce61b085eb8e0183e88783e846b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSF3YGC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxxIC0q2pImEp5RvylLQShATIA7A7vlJXEKH7EzQnaXAIhANJFoWCQVlc86Llm%2BS7i3hOmAzYNqiw2Q2HiAmZeV1reKv8DCD4QABoMNjM3NDIzMTgzODA1Igy6%2BCRzMGkKSy5qMaEq3AOh9uJQ1bF1ggODXcRDjWyUQJmLBc20IUxUyHEUoaCVNTDQ%2B7BSCuq15GQWZaW8izOJf1lSRZ2FyfAdyYvrhAHL%2By48HYxrdmiIkRjsc9q41pTcQ%2F9VjpQsK8L53zXjnpOTr3qFzZjNWehRxpbBPNPDI%2FjlrXmZWhr9AwYVLQ3cI8j1iN59Em8geNEgp1sQruiwEXG5zGbVt8%2Bi0gSUWYbYmcLOP4uDGTxePWFAqm4Ba9ILzX58gOSUBAuawh3HuyFnlYpi3FC2lAw7PFFKgoz391KYyQDO7fiuMeODzM4ozFqET1BR1iT%2FyR0dRddoinOxuIgCvMMGCg53ZtPt2pjrgevcbmXObrXGoX15Us3ImtXzKxFGuLN6Lu4DCLFrrpw%2FdPRzk69UiUu6mX5iHYXPOi%2BVpYU8zcvvjYFwx8DXR%2Fxh4f8RiKCga0FRPTwYKwgZZpVGxybI6j6wOj5KgFfNIUaBCkq2vfBVs9UONDQE%2F1p5iYC0RH2tsBDlafDcRQoJvwGvliJhFIRUeOgdyTtxnN3OV332Mp73MVdeC09GEtmAcqJrqaacl%2FAjf5FvTKSNLWyIvMXsa857CkIAFL6O34ZtzUlIwNZGql4A27YXUcNH%2BQEkYEuSAEBl%2FDCOw4TCBjqkAVqRxMmLpKQhh%2FUWSFBPB6H5SjQnvescDKY20GFmbwpj6oTAZB2OeVfSXTXmAKw%2F%2BnrYQ6jIfLkZRwxYDpsYnItJWBrHiEtYDjsj0%2FZ2X5FhngTDSQ1O1hWMZPADDF1AgYrKepB%2Bqzv1kXeOuJ%2FD05H0uTtF%2F3DJ0AgWj1zZWBOydaposV1CrOsWlISCGJVD59np0bxWHbc0IRdgWE0rGTMDIHyo&X-Amz-Signature=65cdbe453b896ab31b42de1ca6814c7b54d7aa217f273f0bb03d3547bee718b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSF3YGC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxxIC0q2pImEp5RvylLQShATIA7A7vlJXEKH7EzQnaXAIhANJFoWCQVlc86Llm%2BS7i3hOmAzYNqiw2Q2HiAmZeV1reKv8DCD4QABoMNjM3NDIzMTgzODA1Igy6%2BCRzMGkKSy5qMaEq3AOh9uJQ1bF1ggODXcRDjWyUQJmLBc20IUxUyHEUoaCVNTDQ%2B7BSCuq15GQWZaW8izOJf1lSRZ2FyfAdyYvrhAHL%2By48HYxrdmiIkRjsc9q41pTcQ%2F9VjpQsK8L53zXjnpOTr3qFzZjNWehRxpbBPNPDI%2FjlrXmZWhr9AwYVLQ3cI8j1iN59Em8geNEgp1sQruiwEXG5zGbVt8%2Bi0gSUWYbYmcLOP4uDGTxePWFAqm4Ba9ILzX58gOSUBAuawh3HuyFnlYpi3FC2lAw7PFFKgoz391KYyQDO7fiuMeODzM4ozFqET1BR1iT%2FyR0dRddoinOxuIgCvMMGCg53ZtPt2pjrgevcbmXObrXGoX15Us3ImtXzKxFGuLN6Lu4DCLFrrpw%2FdPRzk69UiUu6mX5iHYXPOi%2BVpYU8zcvvjYFwx8DXR%2Fxh4f8RiKCga0FRPTwYKwgZZpVGxybI6j6wOj5KgFfNIUaBCkq2vfBVs9UONDQE%2F1p5iYC0RH2tsBDlafDcRQoJvwGvliJhFIRUeOgdyTtxnN3OV332Mp73MVdeC09GEtmAcqJrqaacl%2FAjf5FvTKSNLWyIvMXsa857CkIAFL6O34ZtzUlIwNZGql4A27YXUcNH%2BQEkYEuSAEBl%2FDCOw4TCBjqkAVqRxMmLpKQhh%2FUWSFBPB6H5SjQnvescDKY20GFmbwpj6oTAZB2OeVfSXTXmAKw%2F%2BnrYQ6jIfLkZRwxYDpsYnItJWBrHiEtYDjsj0%2FZ2X5FhngTDSQ1O1hWMZPADDF1AgYrKepB%2Bqzv1kXeOuJ%2FD05H0uTtF%2F3DJ0AgWj1zZWBOydaposV1CrOsWlISCGJVD59np0bxWHbc0IRdgWE0rGTMDIHyo&X-Amz-Signature=423756521f356ea01d0a684918a916ec586d1faf676a4264ec404f6a31dc4dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSF3YGC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxxIC0q2pImEp5RvylLQShATIA7A7vlJXEKH7EzQnaXAIhANJFoWCQVlc86Llm%2BS7i3hOmAzYNqiw2Q2HiAmZeV1reKv8DCD4QABoMNjM3NDIzMTgzODA1Igy6%2BCRzMGkKSy5qMaEq3AOh9uJQ1bF1ggODXcRDjWyUQJmLBc20IUxUyHEUoaCVNTDQ%2B7BSCuq15GQWZaW8izOJf1lSRZ2FyfAdyYvrhAHL%2By48HYxrdmiIkRjsc9q41pTcQ%2F9VjpQsK8L53zXjnpOTr3qFzZjNWehRxpbBPNPDI%2FjlrXmZWhr9AwYVLQ3cI8j1iN59Em8geNEgp1sQruiwEXG5zGbVt8%2Bi0gSUWYbYmcLOP4uDGTxePWFAqm4Ba9ILzX58gOSUBAuawh3HuyFnlYpi3FC2lAw7PFFKgoz391KYyQDO7fiuMeODzM4ozFqET1BR1iT%2FyR0dRddoinOxuIgCvMMGCg53ZtPt2pjrgevcbmXObrXGoX15Us3ImtXzKxFGuLN6Lu4DCLFrrpw%2FdPRzk69UiUu6mX5iHYXPOi%2BVpYU8zcvvjYFwx8DXR%2Fxh4f8RiKCga0FRPTwYKwgZZpVGxybI6j6wOj5KgFfNIUaBCkq2vfBVs9UONDQE%2F1p5iYC0RH2tsBDlafDcRQoJvwGvliJhFIRUeOgdyTtxnN3OV332Mp73MVdeC09GEtmAcqJrqaacl%2FAjf5FvTKSNLWyIvMXsa857CkIAFL6O34ZtzUlIwNZGql4A27YXUcNH%2BQEkYEuSAEBl%2FDCOw4TCBjqkAVqRxMmLpKQhh%2FUWSFBPB6H5SjQnvescDKY20GFmbwpj6oTAZB2OeVfSXTXmAKw%2F%2BnrYQ6jIfLkZRwxYDpsYnItJWBrHiEtYDjsj0%2FZ2X5FhngTDSQ1O1hWMZPADDF1AgYrKepB%2Bqzv1kXeOuJ%2FD05H0uTtF%2F3DJ0AgWj1zZWBOydaposV1CrOsWlISCGJVD59np0bxWHbc0IRdgWE0rGTMDIHyo&X-Amz-Signature=20bb75f564d6f4816e1339b945d7e4d062c4c4d7005e966344660d8ac8947761&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSF3YGC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxxIC0q2pImEp5RvylLQShATIA7A7vlJXEKH7EzQnaXAIhANJFoWCQVlc86Llm%2BS7i3hOmAzYNqiw2Q2HiAmZeV1reKv8DCD4QABoMNjM3NDIzMTgzODA1Igy6%2BCRzMGkKSy5qMaEq3AOh9uJQ1bF1ggODXcRDjWyUQJmLBc20IUxUyHEUoaCVNTDQ%2B7BSCuq15GQWZaW8izOJf1lSRZ2FyfAdyYvrhAHL%2By48HYxrdmiIkRjsc9q41pTcQ%2F9VjpQsK8L53zXjnpOTr3qFzZjNWehRxpbBPNPDI%2FjlrXmZWhr9AwYVLQ3cI8j1iN59Em8geNEgp1sQruiwEXG5zGbVt8%2Bi0gSUWYbYmcLOP4uDGTxePWFAqm4Ba9ILzX58gOSUBAuawh3HuyFnlYpi3FC2lAw7PFFKgoz391KYyQDO7fiuMeODzM4ozFqET1BR1iT%2FyR0dRddoinOxuIgCvMMGCg53ZtPt2pjrgevcbmXObrXGoX15Us3ImtXzKxFGuLN6Lu4DCLFrrpw%2FdPRzk69UiUu6mX5iHYXPOi%2BVpYU8zcvvjYFwx8DXR%2Fxh4f8RiKCga0FRPTwYKwgZZpVGxybI6j6wOj5KgFfNIUaBCkq2vfBVs9UONDQE%2F1p5iYC0RH2tsBDlafDcRQoJvwGvliJhFIRUeOgdyTtxnN3OV332Mp73MVdeC09GEtmAcqJrqaacl%2FAjf5FvTKSNLWyIvMXsa857CkIAFL6O34ZtzUlIwNZGql4A27YXUcNH%2BQEkYEuSAEBl%2FDCOw4TCBjqkAVqRxMmLpKQhh%2FUWSFBPB6H5SjQnvescDKY20GFmbwpj6oTAZB2OeVfSXTXmAKw%2F%2BnrYQ6jIfLkZRwxYDpsYnItJWBrHiEtYDjsj0%2FZ2X5FhngTDSQ1O1hWMZPADDF1AgYrKepB%2Bqzv1kXeOuJ%2FD05H0uTtF%2F3DJ0AgWj1zZWBOydaposV1CrOsWlISCGJVD59np0bxWHbc0IRdgWE0rGTMDIHyo&X-Amz-Signature=3262922d3faf94228234e0c060e671fac7e3a700c07ac52143516fd264ec3918&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSF3YGC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCxxIC0q2pImEp5RvylLQShATIA7A7vlJXEKH7EzQnaXAIhANJFoWCQVlc86Llm%2BS7i3hOmAzYNqiw2Q2HiAmZeV1reKv8DCD4QABoMNjM3NDIzMTgzODA1Igy6%2BCRzMGkKSy5qMaEq3AOh9uJQ1bF1ggODXcRDjWyUQJmLBc20IUxUyHEUoaCVNTDQ%2B7BSCuq15GQWZaW8izOJf1lSRZ2FyfAdyYvrhAHL%2By48HYxrdmiIkRjsc9q41pTcQ%2F9VjpQsK8L53zXjnpOTr3qFzZjNWehRxpbBPNPDI%2FjlrXmZWhr9AwYVLQ3cI8j1iN59Em8geNEgp1sQruiwEXG5zGbVt8%2Bi0gSUWYbYmcLOP4uDGTxePWFAqm4Ba9ILzX58gOSUBAuawh3HuyFnlYpi3FC2lAw7PFFKgoz391KYyQDO7fiuMeODzM4ozFqET1BR1iT%2FyR0dRddoinOxuIgCvMMGCg53ZtPt2pjrgevcbmXObrXGoX15Us3ImtXzKxFGuLN6Lu4DCLFrrpw%2FdPRzk69UiUu6mX5iHYXPOi%2BVpYU8zcvvjYFwx8DXR%2Fxh4f8RiKCga0FRPTwYKwgZZpVGxybI6j6wOj5KgFfNIUaBCkq2vfBVs9UONDQE%2F1p5iYC0RH2tsBDlafDcRQoJvwGvliJhFIRUeOgdyTtxnN3OV332Mp73MVdeC09GEtmAcqJrqaacl%2FAjf5FvTKSNLWyIvMXsa857CkIAFL6O34ZtzUlIwNZGql4A27YXUcNH%2BQEkYEuSAEBl%2FDCOw4TCBjqkAVqRxMmLpKQhh%2FUWSFBPB6H5SjQnvescDKY20GFmbwpj6oTAZB2OeVfSXTXmAKw%2F%2BnrYQ6jIfLkZRwxYDpsYnItJWBrHiEtYDjsj0%2FZ2X5FhngTDSQ1O1hWMZPADDF1AgYrKepB%2Bqzv1kXeOuJ%2FD05H0uTtF%2F3DJ0AgWj1zZWBOydaposV1CrOsWlISCGJVD59np0bxWHbc0IRdgWE0rGTMDIHyo&X-Amz-Signature=1dbdc874571a32a06d7a12fb9c7eed45e83cd0a8f5d487731778f76f1b76abfb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
