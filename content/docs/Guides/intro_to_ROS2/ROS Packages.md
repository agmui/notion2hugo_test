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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=93a03e459efc170cd3fe50fbb94c51551e90baf123b8b9c2fdce5aee5e7721aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=da9d10ff943cfa0fd5d85154c05c28cbecb9c81e4e56475b366e7229be44369d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=7045955606d3f7fad29332afaba12bd745874e2bfe768cf9b8d36e206060fd5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=3533700c6ca44f64907e540d13934773117af94f7aefd8690fd629b07d383f48&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=56d86a7b052857f48254be96caa8d4b3a6304047f7adb289eb6cb0f337495489&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=43089a13c3efd852024e64c44e4dc8659f636f013b278bc9c8c9d9f048fe616f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUSWCX5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYt2FYKXpIQ9LIGIjtF6TbPBi3PtAGtDKYIHfoShXzGAiAvzH7r50%2B6lts4uzmzsAVeArJLdpwBGEjkGtACm%2B0sfSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNZq9zdDerZn%2FTVl%2FKtwDEpWv%2Fe4wF5kNWYUNEaMeltKmixkj8Hn6%2Be7aUxbdzOeqXUui0xMgNh7xNy%2FbB9bvYyA%2FNSS6f18PpcCAiSvHjFpBGOcC7iYq9CG%2FiEuZAPuKTL9uRxHFrTt16b2tDdRk1GGFvmZ4jv%2FUjkorNxXq68yRpGokMQPpdqdaODn2QtIh5sigYARzK1EykznLr%2BHGFbdVBs2AajIeSw%2FZSiGC0PrzAt4Xd44SF0IDGt4NNR118k9ZkJnyXJEoHc%2FZexB59RQ2syDcrpxepWxhMVqPjM5VkflH9fWi2giY3EPjlCBo8SE0zoROADl5q2Z%2F9CQ%2BjmoHDVHfXvttMgDvsSNq%2F2wITiL4ISOjIoOQo%2Bk1UXnidtMk29mb47mxM0nb%2Fydg7%2BLxyfQkw13Jm7ZRWYlrLnTIwUw%2B9MWW7P128WxXBo4GZNMbP%2Ff%2B1UquUWEZ012Wdf77I%2B1NL0ih0hKtDJOvI3beroAA6tDd8eirMRbswg57I2l%2FQtkJUd03fqEYX619pqwe%2FMQedq1W8%2FG0tva5GHENn%2FoXTyrV5E%2FvaE7sgO072iy9Tr9vh1ZWVnWGSJYmVPeiW5XGZv5hTi7k8ja6V9r%2FVoEI5sjlTmKtUy%2FoUGGAaOxIGJ2v5w96byEwsrLjwQY6pgH39%2Fe3y%2Fm4Kstelou29aaC2bLDP2lJ18LSbkGDoiy%2FiGuNc1Tbkj4PspuG3MIZ%2Fg1QFtYV9b2WG0DZK6wVS7ERuP7JkpTJu4Sfpww7rHGPDdUb1wIVpb2ZbcdyLbD822JyghVNdLSCIyjj3E87T6JngbovYpXd9%2FeJWem4FHZK2xNU8fDV2ASQWGCuCxEHH5fGALxEVIXDnyiDVfSklydhW%2BQOKJG6&X-Amz-Signature=45adf136c91d11c6730abf818fb2e890a440952db6cd32e0bff486feed2a5d96&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
