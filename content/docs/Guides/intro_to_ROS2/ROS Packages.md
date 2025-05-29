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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGG5WYY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbUwJtT8uSFmBt7szMzRAWmmU0re4jQWOo1x9Jw4E0qAiAqfZKuob%2FrJB0QeoiI%2B4f5m6ayeV8iDupI1sAvX4vR5yqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfbMkw6auqxf%2FVc3KtwDZYu8sEWo0FM%2BYVRqZ6SByAwgN2wrbgfqkvP%2BKu2kIECxdXxjq2rrauZEjNkCUVOJj0jhIqcKqfnZBt%2BnA%2BGUWv7PmvTT7U0gMDBk8ge4BUUOaXJl5GO7NkmtPdAxc3TfYZ8dxpDkPN4rdw9fbHOawXEq2Qav6AhgxBJ5%2FHUSUb2F%2F2raby2pJlzmgB7%2BuSk1oYT04CmA2AkModUOWjpA1KSTR52jSFQuehhSIP8DnzIgbJf2dLqibfExM4ax14ZDmDZTWX8nh4YY44Ckn1EZX2NC3DYxuUdn9Glx3LI0v%2F8ZksimFmKLSr9mdSz9OIxgkbJxwHLEAEUYUp7nNbLp2wN%2Bd%2BU84gRPuERMMU0aJ86gHz%2FLsn8QOH4YbVPTc3FB5HAHYSasi6tK5%2FjMu2E8x%2BQ8XMoMdT5cUe2b6LAQ%2Bkw7J%2BgZUWYKM7xLgCHRDJcMdEQwJhqe4uT9%2FgJmuhlehXxsny5GdV2wL%2F0Sgc7k54M0QuKeBzO4szaGPFQjaq%2BQwEN6Q1p6KQbnagM5LoiIDloIrpwzinIyBNSxWcDNdNDc7lLmWa27vrlRwAGhuuouGnTN1fHmWtFvsYLYdm%2B8orsm17OfzTNwc9uAxRJrtIVvLzexAE0FMPwZ5YAwl%2F3fwQY6pgHMvYZKU0tIpMt4Q8RvvDl%2Bf85crTFTkgnU%2B1shncfkYsMzmaaYVQgKuZ%2BGYU7%2BRsiZTU0Tw6fYKpoObUFgqwIoaFX2I5nCffQVg2imRRxNOX48j2cOV6tKMgUwvlujaTuHyhQZ3TZIFEnB%2BWblPAHXQB5DTntq695oNk7%2F69T5NG%2F3BnmdVbEE%2B1jkmoh31Ex8A7j%2FgvkM1N9fygiibkuM%2B7HPlaB9&X-Amz-Signature=10ef50dc3a1235689ea3fd4d3e0f96907663eb50bc92b436919092026c700551&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGG5WYY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbUwJtT8uSFmBt7szMzRAWmmU0re4jQWOo1x9Jw4E0qAiAqfZKuob%2FrJB0QeoiI%2B4f5m6ayeV8iDupI1sAvX4vR5yqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfbMkw6auqxf%2FVc3KtwDZYu8sEWo0FM%2BYVRqZ6SByAwgN2wrbgfqkvP%2BKu2kIECxdXxjq2rrauZEjNkCUVOJj0jhIqcKqfnZBt%2BnA%2BGUWv7PmvTT7U0gMDBk8ge4BUUOaXJl5GO7NkmtPdAxc3TfYZ8dxpDkPN4rdw9fbHOawXEq2Qav6AhgxBJ5%2FHUSUb2F%2F2raby2pJlzmgB7%2BuSk1oYT04CmA2AkModUOWjpA1KSTR52jSFQuehhSIP8DnzIgbJf2dLqibfExM4ax14ZDmDZTWX8nh4YY44Ckn1EZX2NC3DYxuUdn9Glx3LI0v%2F8ZksimFmKLSr9mdSz9OIxgkbJxwHLEAEUYUp7nNbLp2wN%2Bd%2BU84gRPuERMMU0aJ86gHz%2FLsn8QOH4YbVPTc3FB5HAHYSasi6tK5%2FjMu2E8x%2BQ8XMoMdT5cUe2b6LAQ%2Bkw7J%2BgZUWYKM7xLgCHRDJcMdEQwJhqe4uT9%2FgJmuhlehXxsny5GdV2wL%2F0Sgc7k54M0QuKeBzO4szaGPFQjaq%2BQwEN6Q1p6KQbnagM5LoiIDloIrpwzinIyBNSxWcDNdNDc7lLmWa27vrlRwAGhuuouGnTN1fHmWtFvsYLYdm%2B8orsm17OfzTNwc9uAxRJrtIVvLzexAE0FMPwZ5YAwl%2F3fwQY6pgHMvYZKU0tIpMt4Q8RvvDl%2Bf85crTFTkgnU%2B1shncfkYsMzmaaYVQgKuZ%2BGYU7%2BRsiZTU0Tw6fYKpoObUFgqwIoaFX2I5nCffQVg2imRRxNOX48j2cOV6tKMgUwvlujaTuHyhQZ3TZIFEnB%2BWblPAHXQB5DTntq695oNk7%2F69T5NG%2F3BnmdVbEE%2B1jkmoh31Ex8A7j%2FgvkM1N9fygiibkuM%2B7HPlaB9&X-Amz-Signature=0d1b2b67b0c3db4c3d057e360ee39626a6e4fcad40f514b9e05de4bcd372debe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGG5WYY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbUwJtT8uSFmBt7szMzRAWmmU0re4jQWOo1x9Jw4E0qAiAqfZKuob%2FrJB0QeoiI%2B4f5m6ayeV8iDupI1sAvX4vR5yqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfbMkw6auqxf%2FVc3KtwDZYu8sEWo0FM%2BYVRqZ6SByAwgN2wrbgfqkvP%2BKu2kIECxdXxjq2rrauZEjNkCUVOJj0jhIqcKqfnZBt%2BnA%2BGUWv7PmvTT7U0gMDBk8ge4BUUOaXJl5GO7NkmtPdAxc3TfYZ8dxpDkPN4rdw9fbHOawXEq2Qav6AhgxBJ5%2FHUSUb2F%2F2raby2pJlzmgB7%2BuSk1oYT04CmA2AkModUOWjpA1KSTR52jSFQuehhSIP8DnzIgbJf2dLqibfExM4ax14ZDmDZTWX8nh4YY44Ckn1EZX2NC3DYxuUdn9Glx3LI0v%2F8ZksimFmKLSr9mdSz9OIxgkbJxwHLEAEUYUp7nNbLp2wN%2Bd%2BU84gRPuERMMU0aJ86gHz%2FLsn8QOH4YbVPTc3FB5HAHYSasi6tK5%2FjMu2E8x%2BQ8XMoMdT5cUe2b6LAQ%2Bkw7J%2BgZUWYKM7xLgCHRDJcMdEQwJhqe4uT9%2FgJmuhlehXxsny5GdV2wL%2F0Sgc7k54M0QuKeBzO4szaGPFQjaq%2BQwEN6Q1p6KQbnagM5LoiIDloIrpwzinIyBNSxWcDNdNDc7lLmWa27vrlRwAGhuuouGnTN1fHmWtFvsYLYdm%2B8orsm17OfzTNwc9uAxRJrtIVvLzexAE0FMPwZ5YAwl%2F3fwQY6pgHMvYZKU0tIpMt4Q8RvvDl%2Bf85crTFTkgnU%2B1shncfkYsMzmaaYVQgKuZ%2BGYU7%2BRsiZTU0Tw6fYKpoObUFgqwIoaFX2I5nCffQVg2imRRxNOX48j2cOV6tKMgUwvlujaTuHyhQZ3TZIFEnB%2BWblPAHXQB5DTntq695oNk7%2F69T5NG%2F3BnmdVbEE%2B1jkmoh31Ex8A7j%2FgvkM1N9fygiibkuM%2B7HPlaB9&X-Amz-Signature=2461bd57c583ee5d25cd756f666bce4ac3c0a9b96e50eecd854e390adf6d510a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGG5WYY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbUwJtT8uSFmBt7szMzRAWmmU0re4jQWOo1x9Jw4E0qAiAqfZKuob%2FrJB0QeoiI%2B4f5m6ayeV8iDupI1sAvX4vR5yqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfbMkw6auqxf%2FVc3KtwDZYu8sEWo0FM%2BYVRqZ6SByAwgN2wrbgfqkvP%2BKu2kIECxdXxjq2rrauZEjNkCUVOJj0jhIqcKqfnZBt%2BnA%2BGUWv7PmvTT7U0gMDBk8ge4BUUOaXJl5GO7NkmtPdAxc3TfYZ8dxpDkPN4rdw9fbHOawXEq2Qav6AhgxBJ5%2FHUSUb2F%2F2raby2pJlzmgB7%2BuSk1oYT04CmA2AkModUOWjpA1KSTR52jSFQuehhSIP8DnzIgbJf2dLqibfExM4ax14ZDmDZTWX8nh4YY44Ckn1EZX2NC3DYxuUdn9Glx3LI0v%2F8ZksimFmKLSr9mdSz9OIxgkbJxwHLEAEUYUp7nNbLp2wN%2Bd%2BU84gRPuERMMU0aJ86gHz%2FLsn8QOH4YbVPTc3FB5HAHYSasi6tK5%2FjMu2E8x%2BQ8XMoMdT5cUe2b6LAQ%2Bkw7J%2BgZUWYKM7xLgCHRDJcMdEQwJhqe4uT9%2FgJmuhlehXxsny5GdV2wL%2F0Sgc7k54M0QuKeBzO4szaGPFQjaq%2BQwEN6Q1p6KQbnagM5LoiIDloIrpwzinIyBNSxWcDNdNDc7lLmWa27vrlRwAGhuuouGnTN1fHmWtFvsYLYdm%2B8orsm17OfzTNwc9uAxRJrtIVvLzexAE0FMPwZ5YAwl%2F3fwQY6pgHMvYZKU0tIpMt4Q8RvvDl%2Bf85crTFTkgnU%2B1shncfkYsMzmaaYVQgKuZ%2BGYU7%2BRsiZTU0Tw6fYKpoObUFgqwIoaFX2I5nCffQVg2imRRxNOX48j2cOV6tKMgUwvlujaTuHyhQZ3TZIFEnB%2BWblPAHXQB5DTntq695oNk7%2F69T5NG%2F3BnmdVbEE%2B1jkmoh31Ex8A7j%2FgvkM1N9fygiibkuM%2B7HPlaB9&X-Amz-Signature=62093cd93bbef8daa8c56f6de0fad8337c728e3f315be77c9b004576b5c8b713&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGG5WYY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbUwJtT8uSFmBt7szMzRAWmmU0re4jQWOo1x9Jw4E0qAiAqfZKuob%2FrJB0QeoiI%2B4f5m6ayeV8iDupI1sAvX4vR5yqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfbMkw6auqxf%2FVc3KtwDZYu8sEWo0FM%2BYVRqZ6SByAwgN2wrbgfqkvP%2BKu2kIECxdXxjq2rrauZEjNkCUVOJj0jhIqcKqfnZBt%2BnA%2BGUWv7PmvTT7U0gMDBk8ge4BUUOaXJl5GO7NkmtPdAxc3TfYZ8dxpDkPN4rdw9fbHOawXEq2Qav6AhgxBJ5%2FHUSUb2F%2F2raby2pJlzmgB7%2BuSk1oYT04CmA2AkModUOWjpA1KSTR52jSFQuehhSIP8DnzIgbJf2dLqibfExM4ax14ZDmDZTWX8nh4YY44Ckn1EZX2NC3DYxuUdn9Glx3LI0v%2F8ZksimFmKLSr9mdSz9OIxgkbJxwHLEAEUYUp7nNbLp2wN%2Bd%2BU84gRPuERMMU0aJ86gHz%2FLsn8QOH4YbVPTc3FB5HAHYSasi6tK5%2FjMu2E8x%2BQ8XMoMdT5cUe2b6LAQ%2Bkw7J%2BgZUWYKM7xLgCHRDJcMdEQwJhqe4uT9%2FgJmuhlehXxsny5GdV2wL%2F0Sgc7k54M0QuKeBzO4szaGPFQjaq%2BQwEN6Q1p6KQbnagM5LoiIDloIrpwzinIyBNSxWcDNdNDc7lLmWa27vrlRwAGhuuouGnTN1fHmWtFvsYLYdm%2B8orsm17OfzTNwc9uAxRJrtIVvLzexAE0FMPwZ5YAwl%2F3fwQY6pgHMvYZKU0tIpMt4Q8RvvDl%2Bf85crTFTkgnU%2B1shncfkYsMzmaaYVQgKuZ%2BGYU7%2BRsiZTU0Tw6fYKpoObUFgqwIoaFX2I5nCffQVg2imRRxNOX48j2cOV6tKMgUwvlujaTuHyhQZ3TZIFEnB%2BWblPAHXQB5DTntq695oNk7%2F69T5NG%2F3BnmdVbEE%2B1jkmoh31Ex8A7j%2FgvkM1N9fygiibkuM%2B7HPlaB9&X-Amz-Signature=7f4450c0e1d8c616595153944fe38360cc6a847085a693bc005b8a24072f3d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGG5WYY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbUwJtT8uSFmBt7szMzRAWmmU0re4jQWOo1x9Jw4E0qAiAqfZKuob%2FrJB0QeoiI%2B4f5m6ayeV8iDupI1sAvX4vR5yqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfbMkw6auqxf%2FVc3KtwDZYu8sEWo0FM%2BYVRqZ6SByAwgN2wrbgfqkvP%2BKu2kIECxdXxjq2rrauZEjNkCUVOJj0jhIqcKqfnZBt%2BnA%2BGUWv7PmvTT7U0gMDBk8ge4BUUOaXJl5GO7NkmtPdAxc3TfYZ8dxpDkPN4rdw9fbHOawXEq2Qav6AhgxBJ5%2FHUSUb2F%2F2raby2pJlzmgB7%2BuSk1oYT04CmA2AkModUOWjpA1KSTR52jSFQuehhSIP8DnzIgbJf2dLqibfExM4ax14ZDmDZTWX8nh4YY44Ckn1EZX2NC3DYxuUdn9Glx3LI0v%2F8ZksimFmKLSr9mdSz9OIxgkbJxwHLEAEUYUp7nNbLp2wN%2Bd%2BU84gRPuERMMU0aJ86gHz%2FLsn8QOH4YbVPTc3FB5HAHYSasi6tK5%2FjMu2E8x%2BQ8XMoMdT5cUe2b6LAQ%2Bkw7J%2BgZUWYKM7xLgCHRDJcMdEQwJhqe4uT9%2FgJmuhlehXxsny5GdV2wL%2F0Sgc7k54M0QuKeBzO4szaGPFQjaq%2BQwEN6Q1p6KQbnagM5LoiIDloIrpwzinIyBNSxWcDNdNDc7lLmWa27vrlRwAGhuuouGnTN1fHmWtFvsYLYdm%2B8orsm17OfzTNwc9uAxRJrtIVvLzexAE0FMPwZ5YAwl%2F3fwQY6pgHMvYZKU0tIpMt4Q8RvvDl%2Bf85crTFTkgnU%2B1shncfkYsMzmaaYVQgKuZ%2BGYU7%2BRsiZTU0Tw6fYKpoObUFgqwIoaFX2I5nCffQVg2imRRxNOX48j2cOV6tKMgUwvlujaTuHyhQZ3TZIFEnB%2BWblPAHXQB5DTntq695oNk7%2F69T5NG%2F3BnmdVbEE%2B1jkmoh31Ex8A7j%2FgvkM1N9fygiibkuM%2B7HPlaB9&X-Amz-Signature=b94d61cc41d70b8009115d4739991ce8d9d014319bfa2b690278f351751d67e3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGG5WYY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbUwJtT8uSFmBt7szMzRAWmmU0re4jQWOo1x9Jw4E0qAiAqfZKuob%2FrJB0QeoiI%2B4f5m6ayeV8iDupI1sAvX4vR5yqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfbMkw6auqxf%2FVc3KtwDZYu8sEWo0FM%2BYVRqZ6SByAwgN2wrbgfqkvP%2BKu2kIECxdXxjq2rrauZEjNkCUVOJj0jhIqcKqfnZBt%2BnA%2BGUWv7PmvTT7U0gMDBk8ge4BUUOaXJl5GO7NkmtPdAxc3TfYZ8dxpDkPN4rdw9fbHOawXEq2Qav6AhgxBJ5%2FHUSUb2F%2F2raby2pJlzmgB7%2BuSk1oYT04CmA2AkModUOWjpA1KSTR52jSFQuehhSIP8DnzIgbJf2dLqibfExM4ax14ZDmDZTWX8nh4YY44Ckn1EZX2NC3DYxuUdn9Glx3LI0v%2F8ZksimFmKLSr9mdSz9OIxgkbJxwHLEAEUYUp7nNbLp2wN%2Bd%2BU84gRPuERMMU0aJ86gHz%2FLsn8QOH4YbVPTc3FB5HAHYSasi6tK5%2FjMu2E8x%2BQ8XMoMdT5cUe2b6LAQ%2Bkw7J%2BgZUWYKM7xLgCHRDJcMdEQwJhqe4uT9%2FgJmuhlehXxsny5GdV2wL%2F0Sgc7k54M0QuKeBzO4szaGPFQjaq%2BQwEN6Q1p6KQbnagM5LoiIDloIrpwzinIyBNSxWcDNdNDc7lLmWa27vrlRwAGhuuouGnTN1fHmWtFvsYLYdm%2B8orsm17OfzTNwc9uAxRJrtIVvLzexAE0FMPwZ5YAwl%2F3fwQY6pgHMvYZKU0tIpMt4Q8RvvDl%2Bf85crTFTkgnU%2B1shncfkYsMzmaaYVQgKuZ%2BGYU7%2BRsiZTU0Tw6fYKpoObUFgqwIoaFX2I5nCffQVg2imRRxNOX48j2cOV6tKMgUwvlujaTuHyhQZ3TZIFEnB%2BWblPAHXQB5DTntq695oNk7%2F69T5NG%2F3BnmdVbEE%2B1jkmoh31Ex8A7j%2FgvkM1N9fygiibkuM%2B7HPlaB9&X-Amz-Signature=066a21c0c508f5f25a93c3d896ee0ac12c4b6c7c5970186d12abbb3f2f5b93d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
