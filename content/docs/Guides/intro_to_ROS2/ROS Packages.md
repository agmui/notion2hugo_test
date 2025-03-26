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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DDEXKE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIOICJiomxb0dEH0j3Q3fuW%2BoR5AaatkXdqK0%2Bo5p2QAiBBIrHj1AgKlwbQJ1xa54Kv9J157qiaMx%2FfoP4Tv20NFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMg0fUUZd6LOEoZQsdKtwDSKxuBD2f31%2FlgMoKG17nRIktMrVUNarLlN9%2F8KrPdqaXGSLyc7V1W6sfuTJfmuRq1QUquXkV4bjzvjitvWmfSwZEmd%2BvF886356TxFOYw3AUyeDh8PuvCplutCDA9E0tbBm%2Fhcb2E1vQcJ2lCrAh8nWqsEoXTVsLIoCmUvbJxNevDKbCEvIW21UstuIjGrZ3QKDSGDoV9IV5M8kRWJu%2B4V%2BFz8J7r3lEAfJpCd3ZaxeYivoH0qXZFZQvBCE4VCQvUd2cH8HTFzmlN8DwZS3%2BE25sQrgep%2FKVToFv6bMqepL6ZxdeSvCR4zd7%2BZVi3nCTlEPmfFKz%2BctVGXkfqVVEUq7w0abXWCVNSRtmspBQkCRS2wxxhbHMr8rhILmlsyrhqi4QKC0KRyFFJtCNq3NYlvNHw7RhieX7XBC5%2FUQ%2FszuN7Ah9DkVY9FeniC%2Bf0WZB6MSqWmT7JVZCIGQhA50beh%2FdpCPVtAXfroKqkN1PRAzMr%2FFET1gda8PNE6K2h88AELQbPwcCJG0hBGqJz29X2yZLpe2ioFpSvnYgxbmA83DG7a0sDuNX1GraN6aXej9n%2FSea8uWoBaA5G3vOEVs6k61i9qV6ZTwRT2tNAxyWAyzD%2FdvwmMhhtfkW%2Fzow%2BNqPvwY6pgF8hU897a7A9aITY4gikPfYPtR5yvJ5TIyO7QpV8mYLxvsYgab5dGHgQJt7q4ffNLPefNsXR8TLYoDhy0vhjv6%2FQA9jLCUL48obZzMG2QjrUNQiCtIVY%2FihHzCJ2yqJbNaRFWCSUNNnBbTw%2BU0MedkVpB3kS0x4sXXvb2h0nGvWXWY1jBMjpFoSduYWONm%2F747Dc2V5t39Ez2BbNKiCY6zNtv0d23W6&X-Amz-Signature=ca7678810a2686ae8b333cac9d4f097359c279bc0b8aa11a31f1e28ce51781fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DDEXKE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIOICJiomxb0dEH0j3Q3fuW%2BoR5AaatkXdqK0%2Bo5p2QAiBBIrHj1AgKlwbQJ1xa54Kv9J157qiaMx%2FfoP4Tv20NFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMg0fUUZd6LOEoZQsdKtwDSKxuBD2f31%2FlgMoKG17nRIktMrVUNarLlN9%2F8KrPdqaXGSLyc7V1W6sfuTJfmuRq1QUquXkV4bjzvjitvWmfSwZEmd%2BvF886356TxFOYw3AUyeDh8PuvCplutCDA9E0tbBm%2Fhcb2E1vQcJ2lCrAh8nWqsEoXTVsLIoCmUvbJxNevDKbCEvIW21UstuIjGrZ3QKDSGDoV9IV5M8kRWJu%2B4V%2BFz8J7r3lEAfJpCd3ZaxeYivoH0qXZFZQvBCE4VCQvUd2cH8HTFzmlN8DwZS3%2BE25sQrgep%2FKVToFv6bMqepL6ZxdeSvCR4zd7%2BZVi3nCTlEPmfFKz%2BctVGXkfqVVEUq7w0abXWCVNSRtmspBQkCRS2wxxhbHMr8rhILmlsyrhqi4QKC0KRyFFJtCNq3NYlvNHw7RhieX7XBC5%2FUQ%2FszuN7Ah9DkVY9FeniC%2Bf0WZB6MSqWmT7JVZCIGQhA50beh%2FdpCPVtAXfroKqkN1PRAzMr%2FFET1gda8PNE6K2h88AELQbPwcCJG0hBGqJz29X2yZLpe2ioFpSvnYgxbmA83DG7a0sDuNX1GraN6aXej9n%2FSea8uWoBaA5G3vOEVs6k61i9qV6ZTwRT2tNAxyWAyzD%2FdvwmMhhtfkW%2Fzow%2BNqPvwY6pgF8hU897a7A9aITY4gikPfYPtR5yvJ5TIyO7QpV8mYLxvsYgab5dGHgQJt7q4ffNLPefNsXR8TLYoDhy0vhjv6%2FQA9jLCUL48obZzMG2QjrUNQiCtIVY%2FihHzCJ2yqJbNaRFWCSUNNnBbTw%2BU0MedkVpB3kS0x4sXXvb2h0nGvWXWY1jBMjpFoSduYWONm%2F747Dc2V5t39Ez2BbNKiCY6zNtv0d23W6&X-Amz-Signature=7d1203dc98b13beaacbc813b1108b1ce8eb38365586d6dd96a49953adc17e8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DDEXKE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIOICJiomxb0dEH0j3Q3fuW%2BoR5AaatkXdqK0%2Bo5p2QAiBBIrHj1AgKlwbQJ1xa54Kv9J157qiaMx%2FfoP4Tv20NFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMg0fUUZd6LOEoZQsdKtwDSKxuBD2f31%2FlgMoKG17nRIktMrVUNarLlN9%2F8KrPdqaXGSLyc7V1W6sfuTJfmuRq1QUquXkV4bjzvjitvWmfSwZEmd%2BvF886356TxFOYw3AUyeDh8PuvCplutCDA9E0tbBm%2Fhcb2E1vQcJ2lCrAh8nWqsEoXTVsLIoCmUvbJxNevDKbCEvIW21UstuIjGrZ3QKDSGDoV9IV5M8kRWJu%2B4V%2BFz8J7r3lEAfJpCd3ZaxeYivoH0qXZFZQvBCE4VCQvUd2cH8HTFzmlN8DwZS3%2BE25sQrgep%2FKVToFv6bMqepL6ZxdeSvCR4zd7%2BZVi3nCTlEPmfFKz%2BctVGXkfqVVEUq7w0abXWCVNSRtmspBQkCRS2wxxhbHMr8rhILmlsyrhqi4QKC0KRyFFJtCNq3NYlvNHw7RhieX7XBC5%2FUQ%2FszuN7Ah9DkVY9FeniC%2Bf0WZB6MSqWmT7JVZCIGQhA50beh%2FdpCPVtAXfroKqkN1PRAzMr%2FFET1gda8PNE6K2h88AELQbPwcCJG0hBGqJz29X2yZLpe2ioFpSvnYgxbmA83DG7a0sDuNX1GraN6aXej9n%2FSea8uWoBaA5G3vOEVs6k61i9qV6ZTwRT2tNAxyWAyzD%2FdvwmMhhtfkW%2Fzow%2BNqPvwY6pgF8hU897a7A9aITY4gikPfYPtR5yvJ5TIyO7QpV8mYLxvsYgab5dGHgQJt7q4ffNLPefNsXR8TLYoDhy0vhjv6%2FQA9jLCUL48obZzMG2QjrUNQiCtIVY%2FihHzCJ2yqJbNaRFWCSUNNnBbTw%2BU0MedkVpB3kS0x4sXXvb2h0nGvWXWY1jBMjpFoSduYWONm%2F747Dc2V5t39Ez2BbNKiCY6zNtv0d23W6&X-Amz-Signature=95acf83e3a409fd67b81d0efb7cce404005a002a0acfe58816826a43828cf346&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DDEXKE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIOICJiomxb0dEH0j3Q3fuW%2BoR5AaatkXdqK0%2Bo5p2QAiBBIrHj1AgKlwbQJ1xa54Kv9J157qiaMx%2FfoP4Tv20NFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMg0fUUZd6LOEoZQsdKtwDSKxuBD2f31%2FlgMoKG17nRIktMrVUNarLlN9%2F8KrPdqaXGSLyc7V1W6sfuTJfmuRq1QUquXkV4bjzvjitvWmfSwZEmd%2BvF886356TxFOYw3AUyeDh8PuvCplutCDA9E0tbBm%2Fhcb2E1vQcJ2lCrAh8nWqsEoXTVsLIoCmUvbJxNevDKbCEvIW21UstuIjGrZ3QKDSGDoV9IV5M8kRWJu%2B4V%2BFz8J7r3lEAfJpCd3ZaxeYivoH0qXZFZQvBCE4VCQvUd2cH8HTFzmlN8DwZS3%2BE25sQrgep%2FKVToFv6bMqepL6ZxdeSvCR4zd7%2BZVi3nCTlEPmfFKz%2BctVGXkfqVVEUq7w0abXWCVNSRtmspBQkCRS2wxxhbHMr8rhILmlsyrhqi4QKC0KRyFFJtCNq3NYlvNHw7RhieX7XBC5%2FUQ%2FszuN7Ah9DkVY9FeniC%2Bf0WZB6MSqWmT7JVZCIGQhA50beh%2FdpCPVtAXfroKqkN1PRAzMr%2FFET1gda8PNE6K2h88AELQbPwcCJG0hBGqJz29X2yZLpe2ioFpSvnYgxbmA83DG7a0sDuNX1GraN6aXej9n%2FSea8uWoBaA5G3vOEVs6k61i9qV6ZTwRT2tNAxyWAyzD%2FdvwmMhhtfkW%2Fzow%2BNqPvwY6pgF8hU897a7A9aITY4gikPfYPtR5yvJ5TIyO7QpV8mYLxvsYgab5dGHgQJt7q4ffNLPefNsXR8TLYoDhy0vhjv6%2FQA9jLCUL48obZzMG2QjrUNQiCtIVY%2FihHzCJ2yqJbNaRFWCSUNNnBbTw%2BU0MedkVpB3kS0x4sXXvb2h0nGvWXWY1jBMjpFoSduYWONm%2F747Dc2V5t39Ez2BbNKiCY6zNtv0d23W6&X-Amz-Signature=0edeef587e07cb5de24710f9871fb7a7461aa7ccb6a4405dbbd0573122ac86ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DDEXKE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIOICJiomxb0dEH0j3Q3fuW%2BoR5AaatkXdqK0%2Bo5p2QAiBBIrHj1AgKlwbQJ1xa54Kv9J157qiaMx%2FfoP4Tv20NFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMg0fUUZd6LOEoZQsdKtwDSKxuBD2f31%2FlgMoKG17nRIktMrVUNarLlN9%2F8KrPdqaXGSLyc7V1W6sfuTJfmuRq1QUquXkV4bjzvjitvWmfSwZEmd%2BvF886356TxFOYw3AUyeDh8PuvCplutCDA9E0tbBm%2Fhcb2E1vQcJ2lCrAh8nWqsEoXTVsLIoCmUvbJxNevDKbCEvIW21UstuIjGrZ3QKDSGDoV9IV5M8kRWJu%2B4V%2BFz8J7r3lEAfJpCd3ZaxeYivoH0qXZFZQvBCE4VCQvUd2cH8HTFzmlN8DwZS3%2BE25sQrgep%2FKVToFv6bMqepL6ZxdeSvCR4zd7%2BZVi3nCTlEPmfFKz%2BctVGXkfqVVEUq7w0abXWCVNSRtmspBQkCRS2wxxhbHMr8rhILmlsyrhqi4QKC0KRyFFJtCNq3NYlvNHw7RhieX7XBC5%2FUQ%2FszuN7Ah9DkVY9FeniC%2Bf0WZB6MSqWmT7JVZCIGQhA50beh%2FdpCPVtAXfroKqkN1PRAzMr%2FFET1gda8PNE6K2h88AELQbPwcCJG0hBGqJz29X2yZLpe2ioFpSvnYgxbmA83DG7a0sDuNX1GraN6aXej9n%2FSea8uWoBaA5G3vOEVs6k61i9qV6ZTwRT2tNAxyWAyzD%2FdvwmMhhtfkW%2Fzow%2BNqPvwY6pgF8hU897a7A9aITY4gikPfYPtR5yvJ5TIyO7QpV8mYLxvsYgab5dGHgQJt7q4ffNLPefNsXR8TLYoDhy0vhjv6%2FQA9jLCUL48obZzMG2QjrUNQiCtIVY%2FihHzCJ2yqJbNaRFWCSUNNnBbTw%2BU0MedkVpB3kS0x4sXXvb2h0nGvWXWY1jBMjpFoSduYWONm%2F747Dc2V5t39Ez2BbNKiCY6zNtv0d23W6&X-Amz-Signature=a68dce2e2512cb63c6a4713bb466ae8dd1a1bd16f370aafbac852fbb830e5f58&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DDEXKE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIOICJiomxb0dEH0j3Q3fuW%2BoR5AaatkXdqK0%2Bo5p2QAiBBIrHj1AgKlwbQJ1xa54Kv9J157qiaMx%2FfoP4Tv20NFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMg0fUUZd6LOEoZQsdKtwDSKxuBD2f31%2FlgMoKG17nRIktMrVUNarLlN9%2F8KrPdqaXGSLyc7V1W6sfuTJfmuRq1QUquXkV4bjzvjitvWmfSwZEmd%2BvF886356TxFOYw3AUyeDh8PuvCplutCDA9E0tbBm%2Fhcb2E1vQcJ2lCrAh8nWqsEoXTVsLIoCmUvbJxNevDKbCEvIW21UstuIjGrZ3QKDSGDoV9IV5M8kRWJu%2B4V%2BFz8J7r3lEAfJpCd3ZaxeYivoH0qXZFZQvBCE4VCQvUd2cH8HTFzmlN8DwZS3%2BE25sQrgep%2FKVToFv6bMqepL6ZxdeSvCR4zd7%2BZVi3nCTlEPmfFKz%2BctVGXkfqVVEUq7w0abXWCVNSRtmspBQkCRS2wxxhbHMr8rhILmlsyrhqi4QKC0KRyFFJtCNq3NYlvNHw7RhieX7XBC5%2FUQ%2FszuN7Ah9DkVY9FeniC%2Bf0WZB6MSqWmT7JVZCIGQhA50beh%2FdpCPVtAXfroKqkN1PRAzMr%2FFET1gda8PNE6K2h88AELQbPwcCJG0hBGqJz29X2yZLpe2ioFpSvnYgxbmA83DG7a0sDuNX1GraN6aXej9n%2FSea8uWoBaA5G3vOEVs6k61i9qV6ZTwRT2tNAxyWAyzD%2FdvwmMhhtfkW%2Fzow%2BNqPvwY6pgF8hU897a7A9aITY4gikPfYPtR5yvJ5TIyO7QpV8mYLxvsYgab5dGHgQJt7q4ffNLPefNsXR8TLYoDhy0vhjv6%2FQA9jLCUL48obZzMG2QjrUNQiCtIVY%2FihHzCJ2yqJbNaRFWCSUNNnBbTw%2BU0MedkVpB3kS0x4sXXvb2h0nGvWXWY1jBMjpFoSduYWONm%2F747Dc2V5t39Ez2BbNKiCY6zNtv0d23W6&X-Amz-Signature=f179fa0e4543ac352a538fac5793d048f0c8f038630754d3c2ad6b67e998253c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DDEXKE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIOICJiomxb0dEH0j3Q3fuW%2BoR5AaatkXdqK0%2Bo5p2QAiBBIrHj1AgKlwbQJ1xa54Kv9J157qiaMx%2FfoP4Tv20NFCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMg0fUUZd6LOEoZQsdKtwDSKxuBD2f31%2FlgMoKG17nRIktMrVUNarLlN9%2F8KrPdqaXGSLyc7V1W6sfuTJfmuRq1QUquXkV4bjzvjitvWmfSwZEmd%2BvF886356TxFOYw3AUyeDh8PuvCplutCDA9E0tbBm%2Fhcb2E1vQcJ2lCrAh8nWqsEoXTVsLIoCmUvbJxNevDKbCEvIW21UstuIjGrZ3QKDSGDoV9IV5M8kRWJu%2B4V%2BFz8J7r3lEAfJpCd3ZaxeYivoH0qXZFZQvBCE4VCQvUd2cH8HTFzmlN8DwZS3%2BE25sQrgep%2FKVToFv6bMqepL6ZxdeSvCR4zd7%2BZVi3nCTlEPmfFKz%2BctVGXkfqVVEUq7w0abXWCVNSRtmspBQkCRS2wxxhbHMr8rhILmlsyrhqi4QKC0KRyFFJtCNq3NYlvNHw7RhieX7XBC5%2FUQ%2FszuN7Ah9DkVY9FeniC%2Bf0WZB6MSqWmT7JVZCIGQhA50beh%2FdpCPVtAXfroKqkN1PRAzMr%2FFET1gda8PNE6K2h88AELQbPwcCJG0hBGqJz29X2yZLpe2ioFpSvnYgxbmA83DG7a0sDuNX1GraN6aXej9n%2FSea8uWoBaA5G3vOEVs6k61i9qV6ZTwRT2tNAxyWAyzD%2FdvwmMhhtfkW%2Fzow%2BNqPvwY6pgF8hU897a7A9aITY4gikPfYPtR5yvJ5TIyO7QpV8mYLxvsYgab5dGHgQJt7q4ffNLPefNsXR8TLYoDhy0vhjv6%2FQA9jLCUL48obZzMG2QjrUNQiCtIVY%2FihHzCJ2yqJbNaRFWCSUNNnBbTw%2BU0MedkVpB3kS0x4sXXvb2h0nGvWXWY1jBMjpFoSduYWONm%2F747Dc2V5t39Ez2BbNKiCY6zNtv0d23W6&X-Amz-Signature=70a208b77465754ac82fbc5d8fd8980d1c80cda9f9f9a8bfea5be3ee9c53fbd0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
