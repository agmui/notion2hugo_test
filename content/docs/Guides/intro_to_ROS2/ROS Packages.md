---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCXNCZQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFabTpzvOBEwM4YySisKfkd%2BXpow2hRDog1OUJQ9%2FT1dAiBMESTYhMNxXWX9AsinDe4t4VLNQVb3LRRCgThwznA3PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjHxIJc8NKD1NrO1KtwDaiGsaQ6eXXPAz%2BnpDnzygxxijuomIXjEKaekpP3iS%2B8LWf%2Bogrth0aMfeBNTvDOAJ%2Ba%2BhuHaeAbbs5BEfLDk9148nKXFnlz%2BzK1JCmqeJt7C6v8Di9uQs7VstwqW81Ld5vy1dsZIsHhQVWcRgbg9E5sh8doCLU2U0aozGe3NNuPD6xo6iMouhSeZm03v%2FufX%2FjPKpOpNVEfWKr2IPYizoR4JNP8pVkgp2qTGu3t7Zm0yhElFYtPmROz%2B2V7T%2FTv7KHqF1huLt9ZKpWrFsZIohxXEkhmV1I3%2FD8VRTonNGq%2FNU1pmujhA5eA72LWV1iMa6IOhikxKzgcjhzY8PBREwsZJYGtZMhjILaf2zGq%2FGX4G5ktuUwm9N2aDmVdzlvTAfK3dQHGnGNQf1vkGf5BAnfDC%2F08gbUIt%2Bmb8G692Kpv3I4%2FKxlK6o2BVu305j%2BU6DsIPBZ4GY2F6sOyLivlEG9sE83S%2BnGkVjVjzTfGob2Jk6Qt9O5HQDVg7HfV1WdgEK5unSxl7o2mNZFVqa60TnMhpKTg9%2Fqp5nayqzLrngUrCr3eI%2FOPzXXCNb%2FZgC%2F8NkpY393S7DfloscleF%2FJ670vPsdgHbGPKSgVO5SfD2%2FKBqWpI8HheeYoi%2BY0wxPrVxAY6pgHnfIgiCvMBagZLLrW71LBAZeJZ4xAY0WxBZlXD2Taop0fE2zT3SREpl6tYY0ngwu7YmLrW9Wqccc2NKDpigRZ2NMOuOlkxn47tVxtVyXGSzLt85cI5gLEFW7l4U94okvgi7dPkVacMo4nFwQFPQ1wxwiJF8G5lmC1NG0Mp72AxYWSWpxmTm3DYtCO0LcJwhle0Y7MhlqMXoCVohSrEeXQUx3Y0eHAx&X-Amz-Signature=acb259999a1232d483d71d2bf222e17c5082f3a330e2558be20e7546e98b3dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCXNCZQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFabTpzvOBEwM4YySisKfkd%2BXpow2hRDog1OUJQ9%2FT1dAiBMESTYhMNxXWX9AsinDe4t4VLNQVb3LRRCgThwznA3PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjHxIJc8NKD1NrO1KtwDaiGsaQ6eXXPAz%2BnpDnzygxxijuomIXjEKaekpP3iS%2B8LWf%2Bogrth0aMfeBNTvDOAJ%2Ba%2BhuHaeAbbs5BEfLDk9148nKXFnlz%2BzK1JCmqeJt7C6v8Di9uQs7VstwqW81Ld5vy1dsZIsHhQVWcRgbg9E5sh8doCLU2U0aozGe3NNuPD6xo6iMouhSeZm03v%2FufX%2FjPKpOpNVEfWKr2IPYizoR4JNP8pVkgp2qTGu3t7Zm0yhElFYtPmROz%2B2V7T%2FTv7KHqF1huLt9ZKpWrFsZIohxXEkhmV1I3%2FD8VRTonNGq%2FNU1pmujhA5eA72LWV1iMa6IOhikxKzgcjhzY8PBREwsZJYGtZMhjILaf2zGq%2FGX4G5ktuUwm9N2aDmVdzlvTAfK3dQHGnGNQf1vkGf5BAnfDC%2F08gbUIt%2Bmb8G692Kpv3I4%2FKxlK6o2BVu305j%2BU6DsIPBZ4GY2F6sOyLivlEG9sE83S%2BnGkVjVjzTfGob2Jk6Qt9O5HQDVg7HfV1WdgEK5unSxl7o2mNZFVqa60TnMhpKTg9%2Fqp5nayqzLrngUrCr3eI%2FOPzXXCNb%2FZgC%2F8NkpY393S7DfloscleF%2FJ670vPsdgHbGPKSgVO5SfD2%2FKBqWpI8HheeYoi%2BY0wxPrVxAY6pgHnfIgiCvMBagZLLrW71LBAZeJZ4xAY0WxBZlXD2Taop0fE2zT3SREpl6tYY0ngwu7YmLrW9Wqccc2NKDpigRZ2NMOuOlkxn47tVxtVyXGSzLt85cI5gLEFW7l4U94okvgi7dPkVacMo4nFwQFPQ1wxwiJF8G5lmC1NG0Mp72AxYWSWpxmTm3DYtCO0LcJwhle0Y7MhlqMXoCVohSrEeXQUx3Y0eHAx&X-Amz-Signature=7f86195130e1f3eef26b3f2bc1a47e5af2421de156fd8ca1a74491cfe57c1072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCXNCZQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFabTpzvOBEwM4YySisKfkd%2BXpow2hRDog1OUJQ9%2FT1dAiBMESTYhMNxXWX9AsinDe4t4VLNQVb3LRRCgThwznA3PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjHxIJc8NKD1NrO1KtwDaiGsaQ6eXXPAz%2BnpDnzygxxijuomIXjEKaekpP3iS%2B8LWf%2Bogrth0aMfeBNTvDOAJ%2Ba%2BhuHaeAbbs5BEfLDk9148nKXFnlz%2BzK1JCmqeJt7C6v8Di9uQs7VstwqW81Ld5vy1dsZIsHhQVWcRgbg9E5sh8doCLU2U0aozGe3NNuPD6xo6iMouhSeZm03v%2FufX%2FjPKpOpNVEfWKr2IPYizoR4JNP8pVkgp2qTGu3t7Zm0yhElFYtPmROz%2B2V7T%2FTv7KHqF1huLt9ZKpWrFsZIohxXEkhmV1I3%2FD8VRTonNGq%2FNU1pmujhA5eA72LWV1iMa6IOhikxKzgcjhzY8PBREwsZJYGtZMhjILaf2zGq%2FGX4G5ktuUwm9N2aDmVdzlvTAfK3dQHGnGNQf1vkGf5BAnfDC%2F08gbUIt%2Bmb8G692Kpv3I4%2FKxlK6o2BVu305j%2BU6DsIPBZ4GY2F6sOyLivlEG9sE83S%2BnGkVjVjzTfGob2Jk6Qt9O5HQDVg7HfV1WdgEK5unSxl7o2mNZFVqa60TnMhpKTg9%2Fqp5nayqzLrngUrCr3eI%2FOPzXXCNb%2FZgC%2F8NkpY393S7DfloscleF%2FJ670vPsdgHbGPKSgVO5SfD2%2FKBqWpI8HheeYoi%2BY0wxPrVxAY6pgHnfIgiCvMBagZLLrW71LBAZeJZ4xAY0WxBZlXD2Taop0fE2zT3SREpl6tYY0ngwu7YmLrW9Wqccc2NKDpigRZ2NMOuOlkxn47tVxtVyXGSzLt85cI5gLEFW7l4U94okvgi7dPkVacMo4nFwQFPQ1wxwiJF8G5lmC1NG0Mp72AxYWSWpxmTm3DYtCO0LcJwhle0Y7MhlqMXoCVohSrEeXQUx3Y0eHAx&X-Amz-Signature=de03dba090702c20ad8fbad56b7f7d7ed19f8297cf8ab27604d83936ada3891e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCXNCZQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFabTpzvOBEwM4YySisKfkd%2BXpow2hRDog1OUJQ9%2FT1dAiBMESTYhMNxXWX9AsinDe4t4VLNQVb3LRRCgThwznA3PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjHxIJc8NKD1NrO1KtwDaiGsaQ6eXXPAz%2BnpDnzygxxijuomIXjEKaekpP3iS%2B8LWf%2Bogrth0aMfeBNTvDOAJ%2Ba%2BhuHaeAbbs5BEfLDk9148nKXFnlz%2BzK1JCmqeJt7C6v8Di9uQs7VstwqW81Ld5vy1dsZIsHhQVWcRgbg9E5sh8doCLU2U0aozGe3NNuPD6xo6iMouhSeZm03v%2FufX%2FjPKpOpNVEfWKr2IPYizoR4JNP8pVkgp2qTGu3t7Zm0yhElFYtPmROz%2B2V7T%2FTv7KHqF1huLt9ZKpWrFsZIohxXEkhmV1I3%2FD8VRTonNGq%2FNU1pmujhA5eA72LWV1iMa6IOhikxKzgcjhzY8PBREwsZJYGtZMhjILaf2zGq%2FGX4G5ktuUwm9N2aDmVdzlvTAfK3dQHGnGNQf1vkGf5BAnfDC%2F08gbUIt%2Bmb8G692Kpv3I4%2FKxlK6o2BVu305j%2BU6DsIPBZ4GY2F6sOyLivlEG9sE83S%2BnGkVjVjzTfGob2Jk6Qt9O5HQDVg7HfV1WdgEK5unSxl7o2mNZFVqa60TnMhpKTg9%2Fqp5nayqzLrngUrCr3eI%2FOPzXXCNb%2FZgC%2F8NkpY393S7DfloscleF%2FJ670vPsdgHbGPKSgVO5SfD2%2FKBqWpI8HheeYoi%2BY0wxPrVxAY6pgHnfIgiCvMBagZLLrW71LBAZeJZ4xAY0WxBZlXD2Taop0fE2zT3SREpl6tYY0ngwu7YmLrW9Wqccc2NKDpigRZ2NMOuOlkxn47tVxtVyXGSzLt85cI5gLEFW7l4U94okvgi7dPkVacMo4nFwQFPQ1wxwiJF8G5lmC1NG0Mp72AxYWSWpxmTm3DYtCO0LcJwhle0Y7MhlqMXoCVohSrEeXQUx3Y0eHAx&X-Amz-Signature=5c87c89290122c28ab6d6cacc8d647642797ff4abd6292c37639eca67539e67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCXNCZQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFabTpzvOBEwM4YySisKfkd%2BXpow2hRDog1OUJQ9%2FT1dAiBMESTYhMNxXWX9AsinDe4t4VLNQVb3LRRCgThwznA3PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjHxIJc8NKD1NrO1KtwDaiGsaQ6eXXPAz%2BnpDnzygxxijuomIXjEKaekpP3iS%2B8LWf%2Bogrth0aMfeBNTvDOAJ%2Ba%2BhuHaeAbbs5BEfLDk9148nKXFnlz%2BzK1JCmqeJt7C6v8Di9uQs7VstwqW81Ld5vy1dsZIsHhQVWcRgbg9E5sh8doCLU2U0aozGe3NNuPD6xo6iMouhSeZm03v%2FufX%2FjPKpOpNVEfWKr2IPYizoR4JNP8pVkgp2qTGu3t7Zm0yhElFYtPmROz%2B2V7T%2FTv7KHqF1huLt9ZKpWrFsZIohxXEkhmV1I3%2FD8VRTonNGq%2FNU1pmujhA5eA72LWV1iMa6IOhikxKzgcjhzY8PBREwsZJYGtZMhjILaf2zGq%2FGX4G5ktuUwm9N2aDmVdzlvTAfK3dQHGnGNQf1vkGf5BAnfDC%2F08gbUIt%2Bmb8G692Kpv3I4%2FKxlK6o2BVu305j%2BU6DsIPBZ4GY2F6sOyLivlEG9sE83S%2BnGkVjVjzTfGob2Jk6Qt9O5HQDVg7HfV1WdgEK5unSxl7o2mNZFVqa60TnMhpKTg9%2Fqp5nayqzLrngUrCr3eI%2FOPzXXCNb%2FZgC%2F8NkpY393S7DfloscleF%2FJ670vPsdgHbGPKSgVO5SfD2%2FKBqWpI8HheeYoi%2BY0wxPrVxAY6pgHnfIgiCvMBagZLLrW71LBAZeJZ4xAY0WxBZlXD2Taop0fE2zT3SREpl6tYY0ngwu7YmLrW9Wqccc2NKDpigRZ2NMOuOlkxn47tVxtVyXGSzLt85cI5gLEFW7l4U94okvgi7dPkVacMo4nFwQFPQ1wxwiJF8G5lmC1NG0Mp72AxYWSWpxmTm3DYtCO0LcJwhle0Y7MhlqMXoCVohSrEeXQUx3Y0eHAx&X-Amz-Signature=5b392dfd57e4de4d790702744b2d679ef873dc939f5ed487b7917d93037b1d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCXNCZQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFabTpzvOBEwM4YySisKfkd%2BXpow2hRDog1OUJQ9%2FT1dAiBMESTYhMNxXWX9AsinDe4t4VLNQVb3LRRCgThwznA3PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjHxIJc8NKD1NrO1KtwDaiGsaQ6eXXPAz%2BnpDnzygxxijuomIXjEKaekpP3iS%2B8LWf%2Bogrth0aMfeBNTvDOAJ%2Ba%2BhuHaeAbbs5BEfLDk9148nKXFnlz%2BzK1JCmqeJt7C6v8Di9uQs7VstwqW81Ld5vy1dsZIsHhQVWcRgbg9E5sh8doCLU2U0aozGe3NNuPD6xo6iMouhSeZm03v%2FufX%2FjPKpOpNVEfWKr2IPYizoR4JNP8pVkgp2qTGu3t7Zm0yhElFYtPmROz%2B2V7T%2FTv7KHqF1huLt9ZKpWrFsZIohxXEkhmV1I3%2FD8VRTonNGq%2FNU1pmujhA5eA72LWV1iMa6IOhikxKzgcjhzY8PBREwsZJYGtZMhjILaf2zGq%2FGX4G5ktuUwm9N2aDmVdzlvTAfK3dQHGnGNQf1vkGf5BAnfDC%2F08gbUIt%2Bmb8G692Kpv3I4%2FKxlK6o2BVu305j%2BU6DsIPBZ4GY2F6sOyLivlEG9sE83S%2BnGkVjVjzTfGob2Jk6Qt9O5HQDVg7HfV1WdgEK5unSxl7o2mNZFVqa60TnMhpKTg9%2Fqp5nayqzLrngUrCr3eI%2FOPzXXCNb%2FZgC%2F8NkpY393S7DfloscleF%2FJ670vPsdgHbGPKSgVO5SfD2%2FKBqWpI8HheeYoi%2BY0wxPrVxAY6pgHnfIgiCvMBagZLLrW71LBAZeJZ4xAY0WxBZlXD2Taop0fE2zT3SREpl6tYY0ngwu7YmLrW9Wqccc2NKDpigRZ2NMOuOlkxn47tVxtVyXGSzLt85cI5gLEFW7l4U94okvgi7dPkVacMo4nFwQFPQ1wxwiJF8G5lmC1NG0Mp72AxYWSWpxmTm3DYtCO0LcJwhle0Y7MhlqMXoCVohSrEeXQUx3Y0eHAx&X-Amz-Signature=3aaaf1753c51e11cc1aac309fe495d9dcf0d3054564c27f55502914a072cb497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCXNCZQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFabTpzvOBEwM4YySisKfkd%2BXpow2hRDog1OUJQ9%2FT1dAiBMESTYhMNxXWX9AsinDe4t4VLNQVb3LRRCgThwznA3PiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjHxIJc8NKD1NrO1KtwDaiGsaQ6eXXPAz%2BnpDnzygxxijuomIXjEKaekpP3iS%2B8LWf%2Bogrth0aMfeBNTvDOAJ%2Ba%2BhuHaeAbbs5BEfLDk9148nKXFnlz%2BzK1JCmqeJt7C6v8Di9uQs7VstwqW81Ld5vy1dsZIsHhQVWcRgbg9E5sh8doCLU2U0aozGe3NNuPD6xo6iMouhSeZm03v%2FufX%2FjPKpOpNVEfWKr2IPYizoR4JNP8pVkgp2qTGu3t7Zm0yhElFYtPmROz%2B2V7T%2FTv7KHqF1huLt9ZKpWrFsZIohxXEkhmV1I3%2FD8VRTonNGq%2FNU1pmujhA5eA72LWV1iMa6IOhikxKzgcjhzY8PBREwsZJYGtZMhjILaf2zGq%2FGX4G5ktuUwm9N2aDmVdzlvTAfK3dQHGnGNQf1vkGf5BAnfDC%2F08gbUIt%2Bmb8G692Kpv3I4%2FKxlK6o2BVu305j%2BU6DsIPBZ4GY2F6sOyLivlEG9sE83S%2BnGkVjVjzTfGob2Jk6Qt9O5HQDVg7HfV1WdgEK5unSxl7o2mNZFVqa60TnMhpKTg9%2Fqp5nayqzLrngUrCr3eI%2FOPzXXCNb%2FZgC%2F8NkpY393S7DfloscleF%2FJ670vPsdgHbGPKSgVO5SfD2%2FKBqWpI8HheeYoi%2BY0wxPrVxAY6pgHnfIgiCvMBagZLLrW71LBAZeJZ4xAY0WxBZlXD2Taop0fE2zT3SREpl6tYY0ngwu7YmLrW9Wqccc2NKDpigRZ2NMOuOlkxn47tVxtVyXGSzLt85cI5gLEFW7l4U94okvgi7dPkVacMo4nFwQFPQ1wxwiJF8G5lmC1NG0Mp72AxYWSWpxmTm3DYtCO0LcJwhle0Y7MhlqMXoCVohSrEeXQUx3Y0eHAx&X-Amz-Signature=22a0170277f4118e4706098e8e950351612b587373ad086597eb2bfb1111f196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
