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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C266DS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7vKMYrVDznDrLH0KwnYTXr28B34X9t5NYLk1Y4nNqAIgeXdbcn5uIX1QZpGzSwUVle4No5kzsphv%2FdQzbtUJQPQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHFlip6lUbNqyAVzircAwdY86JH1Dg8ItfngEv58MWekLJZ0RMRGuyf8%2FC3m2c7pfPN1nFftcDmqbnqM2KCeJTrmWNJ3HvR1aBZfLAtcIaDTwoU7ob3Lf7Y3jE1F8oNbuQN7Nw8xdkbEf60wUICsr7mm1%2BtmLMEPunF%2FAWEEhBkTcpOxYZPCKmxG%2F9uTZYveoUKHU2K2wOWKrGnjMgkXTSdLuoZ2cAeAvTdlaT9AUMMh6LEwN4i3bJcj34USqKaRlvA6kVUw%2Fo7bgfqpAkZH1Ls6AOtcio5jVNwCjmD3RjvYuAIG85PnRKLPGpk9x7L4vq32r%2F3Uv5s4oFhGfXqNEORcaJh4hZ%2BGKF%2FVd43XVaiIFBJny1ytkTHXpeCN2hoWJaRDJy%2FBcUfKJe3U80XjFeqtd5s7xCNWmrQoY4Hk0iRy3XuDhbGgjftF4tpmahj02Q3VpgYjxVwdHfYzJtU2Y4Et%2BZ8RC4EHG%2FAm599u5PaADbdqKIvOaQWelWg7m6ZvApkEY9DkH8FjbFV7vUEs3Svn47z%2FeWSEfoS9pHhct4tvlZLdvl0s4r18eEOFh%2BxvKgPPaWFF%2BUQt4CQgKSI3ppICPEuHonkw%2BfvZaEd%2B3TnDZV8UH5hrgtF6qseSyMJdqYMCO6eLaErEnrBMIaJ4cEGOqUBBxHDeR5848Y2RSiDy4TkMwP22J1dwJv8liHs1ffDNlOgEz6B%2BqbXW3t2uaf4Y98%2BgWNm1b9bu1lK%2FbOqK03FxXFdTUA6eKcbSOBGAms%2FUXQ6x%2Fx740B4tn30XXZzoOqnZpTTjVHH5jo4kZcXCPbPq5dqCD9sen1t67jKhCcA61KXiTBMgZFXNGR9RPov%2FLYqwcTeitUNIAMuKpCpKHoRH%2F5i85YJ&X-Amz-Signature=44ec3ff094a4bc7041492b9fac411807b7a2a7852fa7cad0482e7907f579a61d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C266DS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7vKMYrVDznDrLH0KwnYTXr28B34X9t5NYLk1Y4nNqAIgeXdbcn5uIX1QZpGzSwUVle4No5kzsphv%2FdQzbtUJQPQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHFlip6lUbNqyAVzircAwdY86JH1Dg8ItfngEv58MWekLJZ0RMRGuyf8%2FC3m2c7pfPN1nFftcDmqbnqM2KCeJTrmWNJ3HvR1aBZfLAtcIaDTwoU7ob3Lf7Y3jE1F8oNbuQN7Nw8xdkbEf60wUICsr7mm1%2BtmLMEPunF%2FAWEEhBkTcpOxYZPCKmxG%2F9uTZYveoUKHU2K2wOWKrGnjMgkXTSdLuoZ2cAeAvTdlaT9AUMMh6LEwN4i3bJcj34USqKaRlvA6kVUw%2Fo7bgfqpAkZH1Ls6AOtcio5jVNwCjmD3RjvYuAIG85PnRKLPGpk9x7L4vq32r%2F3Uv5s4oFhGfXqNEORcaJh4hZ%2BGKF%2FVd43XVaiIFBJny1ytkTHXpeCN2hoWJaRDJy%2FBcUfKJe3U80XjFeqtd5s7xCNWmrQoY4Hk0iRy3XuDhbGgjftF4tpmahj02Q3VpgYjxVwdHfYzJtU2Y4Et%2BZ8RC4EHG%2FAm599u5PaADbdqKIvOaQWelWg7m6ZvApkEY9DkH8FjbFV7vUEs3Svn47z%2FeWSEfoS9pHhct4tvlZLdvl0s4r18eEOFh%2BxvKgPPaWFF%2BUQt4CQgKSI3ppICPEuHonkw%2BfvZaEd%2B3TnDZV8UH5hrgtF6qseSyMJdqYMCO6eLaErEnrBMIaJ4cEGOqUBBxHDeR5848Y2RSiDy4TkMwP22J1dwJv8liHs1ffDNlOgEz6B%2BqbXW3t2uaf4Y98%2BgWNm1b9bu1lK%2FbOqK03FxXFdTUA6eKcbSOBGAms%2FUXQ6x%2Fx740B4tn30XXZzoOqnZpTTjVHH5jo4kZcXCPbPq5dqCD9sen1t67jKhCcA61KXiTBMgZFXNGR9RPov%2FLYqwcTeitUNIAMuKpCpKHoRH%2F5i85YJ&X-Amz-Signature=49b12ab0f4b93cefb2dc823ce4fe0595f7588e7e34bcbc4ddcdc57912080a099&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C266DS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7vKMYrVDznDrLH0KwnYTXr28B34X9t5NYLk1Y4nNqAIgeXdbcn5uIX1QZpGzSwUVle4No5kzsphv%2FdQzbtUJQPQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHFlip6lUbNqyAVzircAwdY86JH1Dg8ItfngEv58MWekLJZ0RMRGuyf8%2FC3m2c7pfPN1nFftcDmqbnqM2KCeJTrmWNJ3HvR1aBZfLAtcIaDTwoU7ob3Lf7Y3jE1F8oNbuQN7Nw8xdkbEf60wUICsr7mm1%2BtmLMEPunF%2FAWEEhBkTcpOxYZPCKmxG%2F9uTZYveoUKHU2K2wOWKrGnjMgkXTSdLuoZ2cAeAvTdlaT9AUMMh6LEwN4i3bJcj34USqKaRlvA6kVUw%2Fo7bgfqpAkZH1Ls6AOtcio5jVNwCjmD3RjvYuAIG85PnRKLPGpk9x7L4vq32r%2F3Uv5s4oFhGfXqNEORcaJh4hZ%2BGKF%2FVd43XVaiIFBJny1ytkTHXpeCN2hoWJaRDJy%2FBcUfKJe3U80XjFeqtd5s7xCNWmrQoY4Hk0iRy3XuDhbGgjftF4tpmahj02Q3VpgYjxVwdHfYzJtU2Y4Et%2BZ8RC4EHG%2FAm599u5PaADbdqKIvOaQWelWg7m6ZvApkEY9DkH8FjbFV7vUEs3Svn47z%2FeWSEfoS9pHhct4tvlZLdvl0s4r18eEOFh%2BxvKgPPaWFF%2BUQt4CQgKSI3ppICPEuHonkw%2BfvZaEd%2B3TnDZV8UH5hrgtF6qseSyMJdqYMCO6eLaErEnrBMIaJ4cEGOqUBBxHDeR5848Y2RSiDy4TkMwP22J1dwJv8liHs1ffDNlOgEz6B%2BqbXW3t2uaf4Y98%2BgWNm1b9bu1lK%2FbOqK03FxXFdTUA6eKcbSOBGAms%2FUXQ6x%2Fx740B4tn30XXZzoOqnZpTTjVHH5jo4kZcXCPbPq5dqCD9sen1t67jKhCcA61KXiTBMgZFXNGR9RPov%2FLYqwcTeitUNIAMuKpCpKHoRH%2F5i85YJ&X-Amz-Signature=27f97c5f675996b6b0de89643ba9502bd7a691175e8795d7cda41060faf71d03&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C266DS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7vKMYrVDznDrLH0KwnYTXr28B34X9t5NYLk1Y4nNqAIgeXdbcn5uIX1QZpGzSwUVle4No5kzsphv%2FdQzbtUJQPQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHFlip6lUbNqyAVzircAwdY86JH1Dg8ItfngEv58MWekLJZ0RMRGuyf8%2FC3m2c7pfPN1nFftcDmqbnqM2KCeJTrmWNJ3HvR1aBZfLAtcIaDTwoU7ob3Lf7Y3jE1F8oNbuQN7Nw8xdkbEf60wUICsr7mm1%2BtmLMEPunF%2FAWEEhBkTcpOxYZPCKmxG%2F9uTZYveoUKHU2K2wOWKrGnjMgkXTSdLuoZ2cAeAvTdlaT9AUMMh6LEwN4i3bJcj34USqKaRlvA6kVUw%2Fo7bgfqpAkZH1Ls6AOtcio5jVNwCjmD3RjvYuAIG85PnRKLPGpk9x7L4vq32r%2F3Uv5s4oFhGfXqNEORcaJh4hZ%2BGKF%2FVd43XVaiIFBJny1ytkTHXpeCN2hoWJaRDJy%2FBcUfKJe3U80XjFeqtd5s7xCNWmrQoY4Hk0iRy3XuDhbGgjftF4tpmahj02Q3VpgYjxVwdHfYzJtU2Y4Et%2BZ8RC4EHG%2FAm599u5PaADbdqKIvOaQWelWg7m6ZvApkEY9DkH8FjbFV7vUEs3Svn47z%2FeWSEfoS9pHhct4tvlZLdvl0s4r18eEOFh%2BxvKgPPaWFF%2BUQt4CQgKSI3ppICPEuHonkw%2BfvZaEd%2B3TnDZV8UH5hrgtF6qseSyMJdqYMCO6eLaErEnrBMIaJ4cEGOqUBBxHDeR5848Y2RSiDy4TkMwP22J1dwJv8liHs1ffDNlOgEz6B%2BqbXW3t2uaf4Y98%2BgWNm1b9bu1lK%2FbOqK03FxXFdTUA6eKcbSOBGAms%2FUXQ6x%2Fx740B4tn30XXZzoOqnZpTTjVHH5jo4kZcXCPbPq5dqCD9sen1t67jKhCcA61KXiTBMgZFXNGR9RPov%2FLYqwcTeitUNIAMuKpCpKHoRH%2F5i85YJ&X-Amz-Signature=d1b4112543039ce83da8dac19f43292bba07119cca965a2c995ac714444cd6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C266DS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7vKMYrVDznDrLH0KwnYTXr28B34X9t5NYLk1Y4nNqAIgeXdbcn5uIX1QZpGzSwUVle4No5kzsphv%2FdQzbtUJQPQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHFlip6lUbNqyAVzircAwdY86JH1Dg8ItfngEv58MWekLJZ0RMRGuyf8%2FC3m2c7pfPN1nFftcDmqbnqM2KCeJTrmWNJ3HvR1aBZfLAtcIaDTwoU7ob3Lf7Y3jE1F8oNbuQN7Nw8xdkbEf60wUICsr7mm1%2BtmLMEPunF%2FAWEEhBkTcpOxYZPCKmxG%2F9uTZYveoUKHU2K2wOWKrGnjMgkXTSdLuoZ2cAeAvTdlaT9AUMMh6LEwN4i3bJcj34USqKaRlvA6kVUw%2Fo7bgfqpAkZH1Ls6AOtcio5jVNwCjmD3RjvYuAIG85PnRKLPGpk9x7L4vq32r%2F3Uv5s4oFhGfXqNEORcaJh4hZ%2BGKF%2FVd43XVaiIFBJny1ytkTHXpeCN2hoWJaRDJy%2FBcUfKJe3U80XjFeqtd5s7xCNWmrQoY4Hk0iRy3XuDhbGgjftF4tpmahj02Q3VpgYjxVwdHfYzJtU2Y4Et%2BZ8RC4EHG%2FAm599u5PaADbdqKIvOaQWelWg7m6ZvApkEY9DkH8FjbFV7vUEs3Svn47z%2FeWSEfoS9pHhct4tvlZLdvl0s4r18eEOFh%2BxvKgPPaWFF%2BUQt4CQgKSI3ppICPEuHonkw%2BfvZaEd%2B3TnDZV8UH5hrgtF6qseSyMJdqYMCO6eLaErEnrBMIaJ4cEGOqUBBxHDeR5848Y2RSiDy4TkMwP22J1dwJv8liHs1ffDNlOgEz6B%2BqbXW3t2uaf4Y98%2BgWNm1b9bu1lK%2FbOqK03FxXFdTUA6eKcbSOBGAms%2FUXQ6x%2Fx740B4tn30XXZzoOqnZpTTjVHH5jo4kZcXCPbPq5dqCD9sen1t67jKhCcA61KXiTBMgZFXNGR9RPov%2FLYqwcTeitUNIAMuKpCpKHoRH%2F5i85YJ&X-Amz-Signature=11d4530d27ee852a720ac58b17c8232cd032756a8982d4bd1c4f6eec5ac888f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C266DS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7vKMYrVDznDrLH0KwnYTXr28B34X9t5NYLk1Y4nNqAIgeXdbcn5uIX1QZpGzSwUVle4No5kzsphv%2FdQzbtUJQPQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHFlip6lUbNqyAVzircAwdY86JH1Dg8ItfngEv58MWekLJZ0RMRGuyf8%2FC3m2c7pfPN1nFftcDmqbnqM2KCeJTrmWNJ3HvR1aBZfLAtcIaDTwoU7ob3Lf7Y3jE1F8oNbuQN7Nw8xdkbEf60wUICsr7mm1%2BtmLMEPunF%2FAWEEhBkTcpOxYZPCKmxG%2F9uTZYveoUKHU2K2wOWKrGnjMgkXTSdLuoZ2cAeAvTdlaT9AUMMh6LEwN4i3bJcj34USqKaRlvA6kVUw%2Fo7bgfqpAkZH1Ls6AOtcio5jVNwCjmD3RjvYuAIG85PnRKLPGpk9x7L4vq32r%2F3Uv5s4oFhGfXqNEORcaJh4hZ%2BGKF%2FVd43XVaiIFBJny1ytkTHXpeCN2hoWJaRDJy%2FBcUfKJe3U80XjFeqtd5s7xCNWmrQoY4Hk0iRy3XuDhbGgjftF4tpmahj02Q3VpgYjxVwdHfYzJtU2Y4Et%2BZ8RC4EHG%2FAm599u5PaADbdqKIvOaQWelWg7m6ZvApkEY9DkH8FjbFV7vUEs3Svn47z%2FeWSEfoS9pHhct4tvlZLdvl0s4r18eEOFh%2BxvKgPPaWFF%2BUQt4CQgKSI3ppICPEuHonkw%2BfvZaEd%2B3TnDZV8UH5hrgtF6qseSyMJdqYMCO6eLaErEnrBMIaJ4cEGOqUBBxHDeR5848Y2RSiDy4TkMwP22J1dwJv8liHs1ffDNlOgEz6B%2BqbXW3t2uaf4Y98%2BgWNm1b9bu1lK%2FbOqK03FxXFdTUA6eKcbSOBGAms%2FUXQ6x%2Fx740B4tn30XXZzoOqnZpTTjVHH5jo4kZcXCPbPq5dqCD9sen1t67jKhCcA61KXiTBMgZFXNGR9RPov%2FLYqwcTeitUNIAMuKpCpKHoRH%2F5i85YJ&X-Amz-Signature=229e46e695d2b6b9f5507250e636d4bfadee0193b714bacaeaf5628a0ffbec25&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632C266DS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7vKMYrVDznDrLH0KwnYTXr28B34X9t5NYLk1Y4nNqAIgeXdbcn5uIX1QZpGzSwUVle4No5kzsphv%2FdQzbtUJQPQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHFlip6lUbNqyAVzircAwdY86JH1Dg8ItfngEv58MWekLJZ0RMRGuyf8%2FC3m2c7pfPN1nFftcDmqbnqM2KCeJTrmWNJ3HvR1aBZfLAtcIaDTwoU7ob3Lf7Y3jE1F8oNbuQN7Nw8xdkbEf60wUICsr7mm1%2BtmLMEPunF%2FAWEEhBkTcpOxYZPCKmxG%2F9uTZYveoUKHU2K2wOWKrGnjMgkXTSdLuoZ2cAeAvTdlaT9AUMMh6LEwN4i3bJcj34USqKaRlvA6kVUw%2Fo7bgfqpAkZH1Ls6AOtcio5jVNwCjmD3RjvYuAIG85PnRKLPGpk9x7L4vq32r%2F3Uv5s4oFhGfXqNEORcaJh4hZ%2BGKF%2FVd43XVaiIFBJny1ytkTHXpeCN2hoWJaRDJy%2FBcUfKJe3U80XjFeqtd5s7xCNWmrQoY4Hk0iRy3XuDhbGgjftF4tpmahj02Q3VpgYjxVwdHfYzJtU2Y4Et%2BZ8RC4EHG%2FAm599u5PaADbdqKIvOaQWelWg7m6ZvApkEY9DkH8FjbFV7vUEs3Svn47z%2FeWSEfoS9pHhct4tvlZLdvl0s4r18eEOFh%2BxvKgPPaWFF%2BUQt4CQgKSI3ppICPEuHonkw%2BfvZaEd%2B3TnDZV8UH5hrgtF6qseSyMJdqYMCO6eLaErEnrBMIaJ4cEGOqUBBxHDeR5848Y2RSiDy4TkMwP22J1dwJv8liHs1ffDNlOgEz6B%2BqbXW3t2uaf4Y98%2BgWNm1b9bu1lK%2FbOqK03FxXFdTUA6eKcbSOBGAms%2FUXQ6x%2Fx740B4tn30XXZzoOqnZpTTjVHH5jo4kZcXCPbPq5dqCD9sen1t67jKhCcA61KXiTBMgZFXNGR9RPov%2FLYqwcTeitUNIAMuKpCpKHoRH%2F5i85YJ&X-Amz-Signature=92c093651cac310ed16fbb295349ac70e4181f71f2d32da558836dd9bcb4dd60&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
