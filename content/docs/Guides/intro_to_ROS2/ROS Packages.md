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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBJ76YV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2fKAjqOy7rwQzmpg5NiMEIW6r8hY9%2FzLLm9qzxEN6QIhAJ4JK1sP2x%2FK9BiEKtozm9m7Mw1vGuHBEBpBQYksoRIKKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBzLaMJZ7j25kXKS4q3AOkaxcK%2BwwFsONHA0%2BPA6IaDut47C43VwAbgyuaSUzzAyVnCUjrk4jWIAWgAYui%2FF51mX6rgRa4fLZQ86ZLQoq2dVlmmAD6lhqxO3VxYIGUOOZFmRF1%2Bg0VgW0rPGBSurvC31kwC7IjSRG%2B%2ByBOWaDvxJkDenAsDQJqRtInbHMsfA9lpDRac8GBArNNT38VC9liobFOKNf1zeMHpvIxzbjqQ79msXYttg6GuDnd1dW18g6CDU9E7SAAihLDPCYC2y%2BPocohgIk3khTxuDg0UUo6qUxqOo8FpxDXl9KdxjU0ZBh0Tew40v2Hbb%2F6wusGEuyulrTqRAlzTtfW3dj89gf8pZ%2B1AWLCDs0LR8aolzQx%2FhBDIxfNTTmmeNqxChfs5kDKCaMALWTMH52gWz4CL8vemjFJjgy8QaQzrd16ZusMXEBmNh%2B1CHApcclCpPYvxb5yyFSeQGHaqY7RE%2FRQwboxrQ9c5%2FXmDA64HEck3zw0MQiTrWL%2FOxJzjXTTUljgl5zEZclEqMrkIO4kcrrwruwyhBvM7JHaSalDiHXcBo66jVAn9Lprl60RtwDoGiaWxXVUDlzlHxIfy3eOvu1cWl%2FYq3IM3B6dn76EU6ACqARgMDAqEH5s9pdYxvg9WzD45PLABjqkAe6%2FnFWLObLUTnDdGGoAii%2FelkNHr7q58tTBkgCPDp4cIddINn1NIWErJxyiI3zbiducDJbe0DUiRUTXa%2BVfPtIZvaK1vDh86zjegLrngqhMM%2BOTLtvHELUu8v0KqJhqVs3QYK9Ztr4meVPkzQ2sCB%2BFsxxdLeNOVo3UOMozFcHlBjcl0A%2BcxodSP4PDvBIGZnrDVckY10RWh0pY8Na1YA4CIDO8&X-Amz-Signature=8c1566d2373df4b380e6531b87be5ab3cf205e56de3c3a1ae083bdc12352a16e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBJ76YV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2fKAjqOy7rwQzmpg5NiMEIW6r8hY9%2FzLLm9qzxEN6QIhAJ4JK1sP2x%2FK9BiEKtozm9m7Mw1vGuHBEBpBQYksoRIKKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBzLaMJZ7j25kXKS4q3AOkaxcK%2BwwFsONHA0%2BPA6IaDut47C43VwAbgyuaSUzzAyVnCUjrk4jWIAWgAYui%2FF51mX6rgRa4fLZQ86ZLQoq2dVlmmAD6lhqxO3VxYIGUOOZFmRF1%2Bg0VgW0rPGBSurvC31kwC7IjSRG%2B%2ByBOWaDvxJkDenAsDQJqRtInbHMsfA9lpDRac8GBArNNT38VC9liobFOKNf1zeMHpvIxzbjqQ79msXYttg6GuDnd1dW18g6CDU9E7SAAihLDPCYC2y%2BPocohgIk3khTxuDg0UUo6qUxqOo8FpxDXl9KdxjU0ZBh0Tew40v2Hbb%2F6wusGEuyulrTqRAlzTtfW3dj89gf8pZ%2B1AWLCDs0LR8aolzQx%2FhBDIxfNTTmmeNqxChfs5kDKCaMALWTMH52gWz4CL8vemjFJjgy8QaQzrd16ZusMXEBmNh%2B1CHApcclCpPYvxb5yyFSeQGHaqY7RE%2FRQwboxrQ9c5%2FXmDA64HEck3zw0MQiTrWL%2FOxJzjXTTUljgl5zEZclEqMrkIO4kcrrwruwyhBvM7JHaSalDiHXcBo66jVAn9Lprl60RtwDoGiaWxXVUDlzlHxIfy3eOvu1cWl%2FYq3IM3B6dn76EU6ACqARgMDAqEH5s9pdYxvg9WzD45PLABjqkAe6%2FnFWLObLUTnDdGGoAii%2FelkNHr7q58tTBkgCPDp4cIddINn1NIWErJxyiI3zbiducDJbe0DUiRUTXa%2BVfPtIZvaK1vDh86zjegLrngqhMM%2BOTLtvHELUu8v0KqJhqVs3QYK9Ztr4meVPkzQ2sCB%2BFsxxdLeNOVo3UOMozFcHlBjcl0A%2BcxodSP4PDvBIGZnrDVckY10RWh0pY8Na1YA4CIDO8&X-Amz-Signature=98db4b99c03798ec5c095743920132ce91e71e03ef5c88cd15e35ef8b7c41b21&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBJ76YV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2fKAjqOy7rwQzmpg5NiMEIW6r8hY9%2FzLLm9qzxEN6QIhAJ4JK1sP2x%2FK9BiEKtozm9m7Mw1vGuHBEBpBQYksoRIKKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBzLaMJZ7j25kXKS4q3AOkaxcK%2BwwFsONHA0%2BPA6IaDut47C43VwAbgyuaSUzzAyVnCUjrk4jWIAWgAYui%2FF51mX6rgRa4fLZQ86ZLQoq2dVlmmAD6lhqxO3VxYIGUOOZFmRF1%2Bg0VgW0rPGBSurvC31kwC7IjSRG%2B%2ByBOWaDvxJkDenAsDQJqRtInbHMsfA9lpDRac8GBArNNT38VC9liobFOKNf1zeMHpvIxzbjqQ79msXYttg6GuDnd1dW18g6CDU9E7SAAihLDPCYC2y%2BPocohgIk3khTxuDg0UUo6qUxqOo8FpxDXl9KdxjU0ZBh0Tew40v2Hbb%2F6wusGEuyulrTqRAlzTtfW3dj89gf8pZ%2B1AWLCDs0LR8aolzQx%2FhBDIxfNTTmmeNqxChfs5kDKCaMALWTMH52gWz4CL8vemjFJjgy8QaQzrd16ZusMXEBmNh%2B1CHApcclCpPYvxb5yyFSeQGHaqY7RE%2FRQwboxrQ9c5%2FXmDA64HEck3zw0MQiTrWL%2FOxJzjXTTUljgl5zEZclEqMrkIO4kcrrwruwyhBvM7JHaSalDiHXcBo66jVAn9Lprl60RtwDoGiaWxXVUDlzlHxIfy3eOvu1cWl%2FYq3IM3B6dn76EU6ACqARgMDAqEH5s9pdYxvg9WzD45PLABjqkAe6%2FnFWLObLUTnDdGGoAii%2FelkNHr7q58tTBkgCPDp4cIddINn1NIWErJxyiI3zbiducDJbe0DUiRUTXa%2BVfPtIZvaK1vDh86zjegLrngqhMM%2BOTLtvHELUu8v0KqJhqVs3QYK9Ztr4meVPkzQ2sCB%2BFsxxdLeNOVo3UOMozFcHlBjcl0A%2BcxodSP4PDvBIGZnrDVckY10RWh0pY8Na1YA4CIDO8&X-Amz-Signature=6e255e36822894abcbd37648b383929e93c5f76df12aa4efbdc0241441651c78&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBJ76YV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2fKAjqOy7rwQzmpg5NiMEIW6r8hY9%2FzLLm9qzxEN6QIhAJ4JK1sP2x%2FK9BiEKtozm9m7Mw1vGuHBEBpBQYksoRIKKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBzLaMJZ7j25kXKS4q3AOkaxcK%2BwwFsONHA0%2BPA6IaDut47C43VwAbgyuaSUzzAyVnCUjrk4jWIAWgAYui%2FF51mX6rgRa4fLZQ86ZLQoq2dVlmmAD6lhqxO3VxYIGUOOZFmRF1%2Bg0VgW0rPGBSurvC31kwC7IjSRG%2B%2ByBOWaDvxJkDenAsDQJqRtInbHMsfA9lpDRac8GBArNNT38VC9liobFOKNf1zeMHpvIxzbjqQ79msXYttg6GuDnd1dW18g6CDU9E7SAAihLDPCYC2y%2BPocohgIk3khTxuDg0UUo6qUxqOo8FpxDXl9KdxjU0ZBh0Tew40v2Hbb%2F6wusGEuyulrTqRAlzTtfW3dj89gf8pZ%2B1AWLCDs0LR8aolzQx%2FhBDIxfNTTmmeNqxChfs5kDKCaMALWTMH52gWz4CL8vemjFJjgy8QaQzrd16ZusMXEBmNh%2B1CHApcclCpPYvxb5yyFSeQGHaqY7RE%2FRQwboxrQ9c5%2FXmDA64HEck3zw0MQiTrWL%2FOxJzjXTTUljgl5zEZclEqMrkIO4kcrrwruwyhBvM7JHaSalDiHXcBo66jVAn9Lprl60RtwDoGiaWxXVUDlzlHxIfy3eOvu1cWl%2FYq3IM3B6dn76EU6ACqARgMDAqEH5s9pdYxvg9WzD45PLABjqkAe6%2FnFWLObLUTnDdGGoAii%2FelkNHr7q58tTBkgCPDp4cIddINn1NIWErJxyiI3zbiducDJbe0DUiRUTXa%2BVfPtIZvaK1vDh86zjegLrngqhMM%2BOTLtvHELUu8v0KqJhqVs3QYK9Ztr4meVPkzQ2sCB%2BFsxxdLeNOVo3UOMozFcHlBjcl0A%2BcxodSP4PDvBIGZnrDVckY10RWh0pY8Na1YA4CIDO8&X-Amz-Signature=d83cfa5360ecd4ceb763b573f60d3c23494a0ec5b07c81ed87f971ffe1db2a93&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBJ76YV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2fKAjqOy7rwQzmpg5NiMEIW6r8hY9%2FzLLm9qzxEN6QIhAJ4JK1sP2x%2FK9BiEKtozm9m7Mw1vGuHBEBpBQYksoRIKKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBzLaMJZ7j25kXKS4q3AOkaxcK%2BwwFsONHA0%2BPA6IaDut47C43VwAbgyuaSUzzAyVnCUjrk4jWIAWgAYui%2FF51mX6rgRa4fLZQ86ZLQoq2dVlmmAD6lhqxO3VxYIGUOOZFmRF1%2Bg0VgW0rPGBSurvC31kwC7IjSRG%2B%2ByBOWaDvxJkDenAsDQJqRtInbHMsfA9lpDRac8GBArNNT38VC9liobFOKNf1zeMHpvIxzbjqQ79msXYttg6GuDnd1dW18g6CDU9E7SAAihLDPCYC2y%2BPocohgIk3khTxuDg0UUo6qUxqOo8FpxDXl9KdxjU0ZBh0Tew40v2Hbb%2F6wusGEuyulrTqRAlzTtfW3dj89gf8pZ%2B1AWLCDs0LR8aolzQx%2FhBDIxfNTTmmeNqxChfs5kDKCaMALWTMH52gWz4CL8vemjFJjgy8QaQzrd16ZusMXEBmNh%2B1CHApcclCpPYvxb5yyFSeQGHaqY7RE%2FRQwboxrQ9c5%2FXmDA64HEck3zw0MQiTrWL%2FOxJzjXTTUljgl5zEZclEqMrkIO4kcrrwruwyhBvM7JHaSalDiHXcBo66jVAn9Lprl60RtwDoGiaWxXVUDlzlHxIfy3eOvu1cWl%2FYq3IM3B6dn76EU6ACqARgMDAqEH5s9pdYxvg9WzD45PLABjqkAe6%2FnFWLObLUTnDdGGoAii%2FelkNHr7q58tTBkgCPDp4cIddINn1NIWErJxyiI3zbiducDJbe0DUiRUTXa%2BVfPtIZvaK1vDh86zjegLrngqhMM%2BOTLtvHELUu8v0KqJhqVs3QYK9Ztr4meVPkzQ2sCB%2BFsxxdLeNOVo3UOMozFcHlBjcl0A%2BcxodSP4PDvBIGZnrDVckY10RWh0pY8Na1YA4CIDO8&X-Amz-Signature=5d1e9f700702464fff3e5de4c001c47ec3f45769fbe9b9648c9274f4e3b7e959&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBJ76YV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2fKAjqOy7rwQzmpg5NiMEIW6r8hY9%2FzLLm9qzxEN6QIhAJ4JK1sP2x%2FK9BiEKtozm9m7Mw1vGuHBEBpBQYksoRIKKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBzLaMJZ7j25kXKS4q3AOkaxcK%2BwwFsONHA0%2BPA6IaDut47C43VwAbgyuaSUzzAyVnCUjrk4jWIAWgAYui%2FF51mX6rgRa4fLZQ86ZLQoq2dVlmmAD6lhqxO3VxYIGUOOZFmRF1%2Bg0VgW0rPGBSurvC31kwC7IjSRG%2B%2ByBOWaDvxJkDenAsDQJqRtInbHMsfA9lpDRac8GBArNNT38VC9liobFOKNf1zeMHpvIxzbjqQ79msXYttg6GuDnd1dW18g6CDU9E7SAAihLDPCYC2y%2BPocohgIk3khTxuDg0UUo6qUxqOo8FpxDXl9KdxjU0ZBh0Tew40v2Hbb%2F6wusGEuyulrTqRAlzTtfW3dj89gf8pZ%2B1AWLCDs0LR8aolzQx%2FhBDIxfNTTmmeNqxChfs5kDKCaMALWTMH52gWz4CL8vemjFJjgy8QaQzrd16ZusMXEBmNh%2B1CHApcclCpPYvxb5yyFSeQGHaqY7RE%2FRQwboxrQ9c5%2FXmDA64HEck3zw0MQiTrWL%2FOxJzjXTTUljgl5zEZclEqMrkIO4kcrrwruwyhBvM7JHaSalDiHXcBo66jVAn9Lprl60RtwDoGiaWxXVUDlzlHxIfy3eOvu1cWl%2FYq3IM3B6dn76EU6ACqARgMDAqEH5s9pdYxvg9WzD45PLABjqkAe6%2FnFWLObLUTnDdGGoAii%2FelkNHr7q58tTBkgCPDp4cIddINn1NIWErJxyiI3zbiducDJbe0DUiRUTXa%2BVfPtIZvaK1vDh86zjegLrngqhMM%2BOTLtvHELUu8v0KqJhqVs3QYK9Ztr4meVPkzQ2sCB%2BFsxxdLeNOVo3UOMozFcHlBjcl0A%2BcxodSP4PDvBIGZnrDVckY10RWh0pY8Na1YA4CIDO8&X-Amz-Signature=d209f96843c3e9a6d88750b7686848c547be6d9b9e565037aed36d57ed6118d5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBJ76YV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2fKAjqOy7rwQzmpg5NiMEIW6r8hY9%2FzLLm9qzxEN6QIhAJ4JK1sP2x%2FK9BiEKtozm9m7Mw1vGuHBEBpBQYksoRIKKv8DCHcQABoMNjM3NDIzMTgzODA1IgzBzLaMJZ7j25kXKS4q3AOkaxcK%2BwwFsONHA0%2BPA6IaDut47C43VwAbgyuaSUzzAyVnCUjrk4jWIAWgAYui%2FF51mX6rgRa4fLZQ86ZLQoq2dVlmmAD6lhqxO3VxYIGUOOZFmRF1%2Bg0VgW0rPGBSurvC31kwC7IjSRG%2B%2ByBOWaDvxJkDenAsDQJqRtInbHMsfA9lpDRac8GBArNNT38VC9liobFOKNf1zeMHpvIxzbjqQ79msXYttg6GuDnd1dW18g6CDU9E7SAAihLDPCYC2y%2BPocohgIk3khTxuDg0UUo6qUxqOo8FpxDXl9KdxjU0ZBh0Tew40v2Hbb%2F6wusGEuyulrTqRAlzTtfW3dj89gf8pZ%2B1AWLCDs0LR8aolzQx%2FhBDIxfNTTmmeNqxChfs5kDKCaMALWTMH52gWz4CL8vemjFJjgy8QaQzrd16ZusMXEBmNh%2B1CHApcclCpPYvxb5yyFSeQGHaqY7RE%2FRQwboxrQ9c5%2FXmDA64HEck3zw0MQiTrWL%2FOxJzjXTTUljgl5zEZclEqMrkIO4kcrrwruwyhBvM7JHaSalDiHXcBo66jVAn9Lprl60RtwDoGiaWxXVUDlzlHxIfy3eOvu1cWl%2FYq3IM3B6dn76EU6ACqARgMDAqEH5s9pdYxvg9WzD45PLABjqkAe6%2FnFWLObLUTnDdGGoAii%2FelkNHr7q58tTBkgCPDp4cIddINn1NIWErJxyiI3zbiducDJbe0DUiRUTXa%2BVfPtIZvaK1vDh86zjegLrngqhMM%2BOTLtvHELUu8v0KqJhqVs3QYK9Ztr4meVPkzQ2sCB%2BFsxxdLeNOVo3UOMozFcHlBjcl0A%2BcxodSP4PDvBIGZnrDVckY10RWh0pY8Na1YA4CIDO8&X-Amz-Signature=fade4bdc19a276da8bc70abda6949a0d171dc20701b131cd42674dd206a25a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
