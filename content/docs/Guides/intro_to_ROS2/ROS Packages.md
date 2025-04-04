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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZAV4HK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl4ochb7s%2Fh0sReYCzHIs1pL4D5%2FQ9ppkx3CWDCgXyFgIhANqw%2Ftd%2FI8r1IBSRCcYDPC%2BGHSVW%2Fky0iTMv1rydCtf3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz5bqrP5KG9m1Q%2B9ZUq3APOdS1CgXu0ibwB%2BGebd5ffCPep8DcR%2F3l3U5PyG1U3FA0dDrwSbHwXbwi3U96EMTOBm6K%2FXlrjFBG9inmyu7QqKTEjH9arqND%2Fcj9cm5WTNfQw21rU5ny1qlheuaq%2FbXoSN7f7mdyCEByQmeECO56hWf1%2BTflRACnwTdRY%2BFREwkgJT%2BNET8BaGZNUBrBu4hwNyLoA62xLr00JdLuRehu39vDQ5vpVe6SRM%2Fvp1GyJ9B3zCSIGflS0m8C1HhgVDFxIYXr8m5penQosN3I%2BeMhpsj562Sh0m5LhNckxBpDuy6XlXpBjSeKacfUMZRlLL45LZ%2Fh96nMrTX85csTeprGEtXBM5P55Wt9bANLK1iq9aA3r%2B0gHXXHUn3E3o6FcUTT9zcJsRGYYYwI6lLoPg7xaKSW61R6TxIbzDfc3eRbMcTYgbkHBgJ4u9CpCQEVLmKcBIy%2F5TRPA%2Fpb7%2BTTyaLtlUyE15rKJ54DOKuF1k%2BtC2OOQnRPZOe3IUXTlUyvZFx2M8kjkEs0m72B%2BzUtEqro6C6WVSuS5hjYkD1C1wpqTKoTrDbgfN3W146jSIZ05L4pU07Oh97xaQQi1%2F8pW6zdApy8WgGguP4P5Qohwhj59gf5FjiCr%2F7Rv2BJ56DDhiMG%2FBjqkAVXmfz6sGV09c4LmLpwq%2BeF8t963spSi2%2FItyxv%2FqQmqEQFueIe6GCNOipKYj%2BZt1AxUZ7PNJZyClLCVXiPBA2moeAQZHYld3XBEik%2BKi4yjN%2BopDqzEl%2FkFW%2BBgkANLSNCnXeLI20n%2FdXA%2B1ju%2FM3%2FC7PQAFOxuIXp67FTnRB9GdjGOUnfKZ4%2BxzlG%2BBSf2Js%2BrK112k%2B5ZRCslMQllpI0NiuxB&X-Amz-Signature=f88d9b6645ffbb87b8b6329e709ec3bbdb06420009ba6fca30308a2dddf1c262&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZAV4HK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl4ochb7s%2Fh0sReYCzHIs1pL4D5%2FQ9ppkx3CWDCgXyFgIhANqw%2Ftd%2FI8r1IBSRCcYDPC%2BGHSVW%2Fky0iTMv1rydCtf3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz5bqrP5KG9m1Q%2B9ZUq3APOdS1CgXu0ibwB%2BGebd5ffCPep8DcR%2F3l3U5PyG1U3FA0dDrwSbHwXbwi3U96EMTOBm6K%2FXlrjFBG9inmyu7QqKTEjH9arqND%2Fcj9cm5WTNfQw21rU5ny1qlheuaq%2FbXoSN7f7mdyCEByQmeECO56hWf1%2BTflRACnwTdRY%2BFREwkgJT%2BNET8BaGZNUBrBu4hwNyLoA62xLr00JdLuRehu39vDQ5vpVe6SRM%2Fvp1GyJ9B3zCSIGflS0m8C1HhgVDFxIYXr8m5penQosN3I%2BeMhpsj562Sh0m5LhNckxBpDuy6XlXpBjSeKacfUMZRlLL45LZ%2Fh96nMrTX85csTeprGEtXBM5P55Wt9bANLK1iq9aA3r%2B0gHXXHUn3E3o6FcUTT9zcJsRGYYYwI6lLoPg7xaKSW61R6TxIbzDfc3eRbMcTYgbkHBgJ4u9CpCQEVLmKcBIy%2F5TRPA%2Fpb7%2BTTyaLtlUyE15rKJ54DOKuF1k%2BtC2OOQnRPZOe3IUXTlUyvZFx2M8kjkEs0m72B%2BzUtEqro6C6WVSuS5hjYkD1C1wpqTKoTrDbgfN3W146jSIZ05L4pU07Oh97xaQQi1%2F8pW6zdApy8WgGguP4P5Qohwhj59gf5FjiCr%2F7Rv2BJ56DDhiMG%2FBjqkAVXmfz6sGV09c4LmLpwq%2BeF8t963spSi2%2FItyxv%2FqQmqEQFueIe6GCNOipKYj%2BZt1AxUZ7PNJZyClLCVXiPBA2moeAQZHYld3XBEik%2BKi4yjN%2BopDqzEl%2FkFW%2BBgkANLSNCnXeLI20n%2FdXA%2B1ju%2FM3%2FC7PQAFOxuIXp67FTnRB9GdjGOUnfKZ4%2BxzlG%2BBSf2Js%2BrK112k%2B5ZRCslMQllpI0NiuxB&X-Amz-Signature=08fbae39deb3151aa0ed13d42008e1c600fb0393bdb7c457fa0a2414f63bae68&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZAV4HK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl4ochb7s%2Fh0sReYCzHIs1pL4D5%2FQ9ppkx3CWDCgXyFgIhANqw%2Ftd%2FI8r1IBSRCcYDPC%2BGHSVW%2Fky0iTMv1rydCtf3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz5bqrP5KG9m1Q%2B9ZUq3APOdS1CgXu0ibwB%2BGebd5ffCPep8DcR%2F3l3U5PyG1U3FA0dDrwSbHwXbwi3U96EMTOBm6K%2FXlrjFBG9inmyu7QqKTEjH9arqND%2Fcj9cm5WTNfQw21rU5ny1qlheuaq%2FbXoSN7f7mdyCEByQmeECO56hWf1%2BTflRACnwTdRY%2BFREwkgJT%2BNET8BaGZNUBrBu4hwNyLoA62xLr00JdLuRehu39vDQ5vpVe6SRM%2Fvp1GyJ9B3zCSIGflS0m8C1HhgVDFxIYXr8m5penQosN3I%2BeMhpsj562Sh0m5LhNckxBpDuy6XlXpBjSeKacfUMZRlLL45LZ%2Fh96nMrTX85csTeprGEtXBM5P55Wt9bANLK1iq9aA3r%2B0gHXXHUn3E3o6FcUTT9zcJsRGYYYwI6lLoPg7xaKSW61R6TxIbzDfc3eRbMcTYgbkHBgJ4u9CpCQEVLmKcBIy%2F5TRPA%2Fpb7%2BTTyaLtlUyE15rKJ54DOKuF1k%2BtC2OOQnRPZOe3IUXTlUyvZFx2M8kjkEs0m72B%2BzUtEqro6C6WVSuS5hjYkD1C1wpqTKoTrDbgfN3W146jSIZ05L4pU07Oh97xaQQi1%2F8pW6zdApy8WgGguP4P5Qohwhj59gf5FjiCr%2F7Rv2BJ56DDhiMG%2FBjqkAVXmfz6sGV09c4LmLpwq%2BeF8t963spSi2%2FItyxv%2FqQmqEQFueIe6GCNOipKYj%2BZt1AxUZ7PNJZyClLCVXiPBA2moeAQZHYld3XBEik%2BKi4yjN%2BopDqzEl%2FkFW%2BBgkANLSNCnXeLI20n%2FdXA%2B1ju%2FM3%2FC7PQAFOxuIXp67FTnRB9GdjGOUnfKZ4%2BxzlG%2BBSf2Js%2BrK112k%2B5ZRCslMQllpI0NiuxB&X-Amz-Signature=d149316bc1050c07b6f54656ca9c7dd9035cc2beb38ef3f7d054461a5b9d767e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZAV4HK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl4ochb7s%2Fh0sReYCzHIs1pL4D5%2FQ9ppkx3CWDCgXyFgIhANqw%2Ftd%2FI8r1IBSRCcYDPC%2BGHSVW%2Fky0iTMv1rydCtf3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz5bqrP5KG9m1Q%2B9ZUq3APOdS1CgXu0ibwB%2BGebd5ffCPep8DcR%2F3l3U5PyG1U3FA0dDrwSbHwXbwi3U96EMTOBm6K%2FXlrjFBG9inmyu7QqKTEjH9arqND%2Fcj9cm5WTNfQw21rU5ny1qlheuaq%2FbXoSN7f7mdyCEByQmeECO56hWf1%2BTflRACnwTdRY%2BFREwkgJT%2BNET8BaGZNUBrBu4hwNyLoA62xLr00JdLuRehu39vDQ5vpVe6SRM%2Fvp1GyJ9B3zCSIGflS0m8C1HhgVDFxIYXr8m5penQosN3I%2BeMhpsj562Sh0m5LhNckxBpDuy6XlXpBjSeKacfUMZRlLL45LZ%2Fh96nMrTX85csTeprGEtXBM5P55Wt9bANLK1iq9aA3r%2B0gHXXHUn3E3o6FcUTT9zcJsRGYYYwI6lLoPg7xaKSW61R6TxIbzDfc3eRbMcTYgbkHBgJ4u9CpCQEVLmKcBIy%2F5TRPA%2Fpb7%2BTTyaLtlUyE15rKJ54DOKuF1k%2BtC2OOQnRPZOe3IUXTlUyvZFx2M8kjkEs0m72B%2BzUtEqro6C6WVSuS5hjYkD1C1wpqTKoTrDbgfN3W146jSIZ05L4pU07Oh97xaQQi1%2F8pW6zdApy8WgGguP4P5Qohwhj59gf5FjiCr%2F7Rv2BJ56DDhiMG%2FBjqkAVXmfz6sGV09c4LmLpwq%2BeF8t963spSi2%2FItyxv%2FqQmqEQFueIe6GCNOipKYj%2BZt1AxUZ7PNJZyClLCVXiPBA2moeAQZHYld3XBEik%2BKi4yjN%2BopDqzEl%2FkFW%2BBgkANLSNCnXeLI20n%2FdXA%2B1ju%2FM3%2FC7PQAFOxuIXp67FTnRB9GdjGOUnfKZ4%2BxzlG%2BBSf2Js%2BrK112k%2B5ZRCslMQllpI0NiuxB&X-Amz-Signature=17d6fa491d07569d4913a971b688b4abc875976a8993e1f73cbd296337f58641&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZAV4HK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl4ochb7s%2Fh0sReYCzHIs1pL4D5%2FQ9ppkx3CWDCgXyFgIhANqw%2Ftd%2FI8r1IBSRCcYDPC%2BGHSVW%2Fky0iTMv1rydCtf3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz5bqrP5KG9m1Q%2B9ZUq3APOdS1CgXu0ibwB%2BGebd5ffCPep8DcR%2F3l3U5PyG1U3FA0dDrwSbHwXbwi3U96EMTOBm6K%2FXlrjFBG9inmyu7QqKTEjH9arqND%2Fcj9cm5WTNfQw21rU5ny1qlheuaq%2FbXoSN7f7mdyCEByQmeECO56hWf1%2BTflRACnwTdRY%2BFREwkgJT%2BNET8BaGZNUBrBu4hwNyLoA62xLr00JdLuRehu39vDQ5vpVe6SRM%2Fvp1GyJ9B3zCSIGflS0m8C1HhgVDFxIYXr8m5penQosN3I%2BeMhpsj562Sh0m5LhNckxBpDuy6XlXpBjSeKacfUMZRlLL45LZ%2Fh96nMrTX85csTeprGEtXBM5P55Wt9bANLK1iq9aA3r%2B0gHXXHUn3E3o6FcUTT9zcJsRGYYYwI6lLoPg7xaKSW61R6TxIbzDfc3eRbMcTYgbkHBgJ4u9CpCQEVLmKcBIy%2F5TRPA%2Fpb7%2BTTyaLtlUyE15rKJ54DOKuF1k%2BtC2OOQnRPZOe3IUXTlUyvZFx2M8kjkEs0m72B%2BzUtEqro6C6WVSuS5hjYkD1C1wpqTKoTrDbgfN3W146jSIZ05L4pU07Oh97xaQQi1%2F8pW6zdApy8WgGguP4P5Qohwhj59gf5FjiCr%2F7Rv2BJ56DDhiMG%2FBjqkAVXmfz6sGV09c4LmLpwq%2BeF8t963spSi2%2FItyxv%2FqQmqEQFueIe6GCNOipKYj%2BZt1AxUZ7PNJZyClLCVXiPBA2moeAQZHYld3XBEik%2BKi4yjN%2BopDqzEl%2FkFW%2BBgkANLSNCnXeLI20n%2FdXA%2B1ju%2FM3%2FC7PQAFOxuIXp67FTnRB9GdjGOUnfKZ4%2BxzlG%2BBSf2Js%2BrK112k%2B5ZRCslMQllpI0NiuxB&X-Amz-Signature=e883f3ef86012d516ac32ee561b64f82bb47dc68c57a5fb1097eecffd6e0fb75&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZAV4HK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl4ochb7s%2Fh0sReYCzHIs1pL4D5%2FQ9ppkx3CWDCgXyFgIhANqw%2Ftd%2FI8r1IBSRCcYDPC%2BGHSVW%2Fky0iTMv1rydCtf3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz5bqrP5KG9m1Q%2B9ZUq3APOdS1CgXu0ibwB%2BGebd5ffCPep8DcR%2F3l3U5PyG1U3FA0dDrwSbHwXbwi3U96EMTOBm6K%2FXlrjFBG9inmyu7QqKTEjH9arqND%2Fcj9cm5WTNfQw21rU5ny1qlheuaq%2FbXoSN7f7mdyCEByQmeECO56hWf1%2BTflRACnwTdRY%2BFREwkgJT%2BNET8BaGZNUBrBu4hwNyLoA62xLr00JdLuRehu39vDQ5vpVe6SRM%2Fvp1GyJ9B3zCSIGflS0m8C1HhgVDFxIYXr8m5penQosN3I%2BeMhpsj562Sh0m5LhNckxBpDuy6XlXpBjSeKacfUMZRlLL45LZ%2Fh96nMrTX85csTeprGEtXBM5P55Wt9bANLK1iq9aA3r%2B0gHXXHUn3E3o6FcUTT9zcJsRGYYYwI6lLoPg7xaKSW61R6TxIbzDfc3eRbMcTYgbkHBgJ4u9CpCQEVLmKcBIy%2F5TRPA%2Fpb7%2BTTyaLtlUyE15rKJ54DOKuF1k%2BtC2OOQnRPZOe3IUXTlUyvZFx2M8kjkEs0m72B%2BzUtEqro6C6WVSuS5hjYkD1C1wpqTKoTrDbgfN3W146jSIZ05L4pU07Oh97xaQQi1%2F8pW6zdApy8WgGguP4P5Qohwhj59gf5FjiCr%2F7Rv2BJ56DDhiMG%2FBjqkAVXmfz6sGV09c4LmLpwq%2BeF8t963spSi2%2FItyxv%2FqQmqEQFueIe6GCNOipKYj%2BZt1AxUZ7PNJZyClLCVXiPBA2moeAQZHYld3XBEik%2BKi4yjN%2BopDqzEl%2FkFW%2BBgkANLSNCnXeLI20n%2FdXA%2B1ju%2FM3%2FC7PQAFOxuIXp67FTnRB9GdjGOUnfKZ4%2BxzlG%2BBSf2Js%2BrK112k%2B5ZRCslMQllpI0NiuxB&X-Amz-Signature=2442655f46a0689ba9a75bc5562c9b82e93dc213a12afbef93a5df78e912a4da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZAV4HK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl4ochb7s%2Fh0sReYCzHIs1pL4D5%2FQ9ppkx3CWDCgXyFgIhANqw%2Ftd%2FI8r1IBSRCcYDPC%2BGHSVW%2Fky0iTMv1rydCtf3Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz5bqrP5KG9m1Q%2B9ZUq3APOdS1CgXu0ibwB%2BGebd5ffCPep8DcR%2F3l3U5PyG1U3FA0dDrwSbHwXbwi3U96EMTOBm6K%2FXlrjFBG9inmyu7QqKTEjH9arqND%2Fcj9cm5WTNfQw21rU5ny1qlheuaq%2FbXoSN7f7mdyCEByQmeECO56hWf1%2BTflRACnwTdRY%2BFREwkgJT%2BNET8BaGZNUBrBu4hwNyLoA62xLr00JdLuRehu39vDQ5vpVe6SRM%2Fvp1GyJ9B3zCSIGflS0m8C1HhgVDFxIYXr8m5penQosN3I%2BeMhpsj562Sh0m5LhNckxBpDuy6XlXpBjSeKacfUMZRlLL45LZ%2Fh96nMrTX85csTeprGEtXBM5P55Wt9bANLK1iq9aA3r%2B0gHXXHUn3E3o6FcUTT9zcJsRGYYYwI6lLoPg7xaKSW61R6TxIbzDfc3eRbMcTYgbkHBgJ4u9CpCQEVLmKcBIy%2F5TRPA%2Fpb7%2BTTyaLtlUyE15rKJ54DOKuF1k%2BtC2OOQnRPZOe3IUXTlUyvZFx2M8kjkEs0m72B%2BzUtEqro6C6WVSuS5hjYkD1C1wpqTKoTrDbgfN3W146jSIZ05L4pU07Oh97xaQQi1%2F8pW6zdApy8WgGguP4P5Qohwhj59gf5FjiCr%2F7Rv2BJ56DDhiMG%2FBjqkAVXmfz6sGV09c4LmLpwq%2BeF8t963spSi2%2FItyxv%2FqQmqEQFueIe6GCNOipKYj%2BZt1AxUZ7PNJZyClLCVXiPBA2moeAQZHYld3XBEik%2BKi4yjN%2BopDqzEl%2FkFW%2BBgkANLSNCnXeLI20n%2FdXA%2B1ju%2FM3%2FC7PQAFOxuIXp67FTnRB9GdjGOUnfKZ4%2BxzlG%2BBSf2Js%2BrK112k%2B5ZRCslMQllpI0NiuxB&X-Amz-Signature=5a57550e961c01cf82543924ebf1bc17293d1f7d5e01b3f341978952f868dae4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
