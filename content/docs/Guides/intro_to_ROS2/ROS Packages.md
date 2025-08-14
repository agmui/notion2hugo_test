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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R3LNKF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcu%2FXgeg02KNpj2CdRAbcNuN6ofP51uGQIi4puOFUwwAiEA7Va0H7D1ovE2fA%2BtMHh3C5AILuJSJHzLlJBWHskjuXcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJE91i7ZEyDgiXCsQSrcA4YOLhdz5a7rAcJwT89i%2F4xaJmMWChLGLeP7nI462LtNYkgTwAucUNUO%2Fkk8qQhHqmUqwTNhunG2yCj%2BCEyqBSxC0KqtNUgPbBqAkzQeYf0baYDhftW7q2Lv1PTjlEhSEaLq2fVP6xNGEjYK8AG9VOuVlQcYSCM5xwCkeugYRAAFQJBLs0UwHsPmqbwOo2Jibxc8OUTvT3xy%2FCpSXYx5GaSTQQn%2FQJqdkjW90aW7UMIx2s7hpH37e2GDrwcFAZ3pzTns%2FIWURy8NIjD%2F6LIlx%2FvlJe81xqLDSe%2FSdD9VHC2fYq0cxF8eO5U3lE5dIdnZ0myAiacAsChr5GNc%2BZg47Yi0wmFtaaJPq%2B9TnkiHGxFB0Qt7HYOBFPWtXpn1eL6l0YJvllH6oZABri%2BsM66840Ay%2BFG5aCQewPygcNdOOZ3MqvcakINgEQtkvdodoDyuGdNBAClvLVjLXHWAbhF4Plr5k6xCUfcdygm0Ffy%2Bg3YD%2B4tDAvrw9mLuUS%2B3D4xS13QUTag%2B2PMCriuvbGU7iT4Wy58WDXR1jL5tstRtIhGbqIGOnTywngL7ZHtu9FiAjAZSfrfOM6dfEb4VaV%2FRrdppcwnpemOvBxFvmOZolm4KXrYgS2Fp3QYI2ClZMIOv9sQGOqUBsuysPkdARNJt6H%2Fosa3f5hB5ihVUUqfmZn3JIFQKtivnZTAzzSCwILL%2FuAa4K7SBBHI%2BiMkTqtayMowadBnlOcEe0P19ZnfKCxQNhqV4MTPeCkhQIZKDE6uN4hhX%2B73oukjr6ZE82i%2BEXuNwP8uD1vMfDTBt%2F14Mt7%2FaUk09Xl8rk%2BbN260qW%2B2Z%2BN4XtliIaAW3q1e1STl%2BVV3gdye0lnlCyWoH&X-Amz-Signature=9239c69c66a179d76da507259a008c5ba6144856568b2052f07d9b9c9add1828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R3LNKF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcu%2FXgeg02KNpj2CdRAbcNuN6ofP51uGQIi4puOFUwwAiEA7Va0H7D1ovE2fA%2BtMHh3C5AILuJSJHzLlJBWHskjuXcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJE91i7ZEyDgiXCsQSrcA4YOLhdz5a7rAcJwT89i%2F4xaJmMWChLGLeP7nI462LtNYkgTwAucUNUO%2Fkk8qQhHqmUqwTNhunG2yCj%2BCEyqBSxC0KqtNUgPbBqAkzQeYf0baYDhftW7q2Lv1PTjlEhSEaLq2fVP6xNGEjYK8AG9VOuVlQcYSCM5xwCkeugYRAAFQJBLs0UwHsPmqbwOo2Jibxc8OUTvT3xy%2FCpSXYx5GaSTQQn%2FQJqdkjW90aW7UMIx2s7hpH37e2GDrwcFAZ3pzTns%2FIWURy8NIjD%2F6LIlx%2FvlJe81xqLDSe%2FSdD9VHC2fYq0cxF8eO5U3lE5dIdnZ0myAiacAsChr5GNc%2BZg47Yi0wmFtaaJPq%2B9TnkiHGxFB0Qt7HYOBFPWtXpn1eL6l0YJvllH6oZABri%2BsM66840Ay%2BFG5aCQewPygcNdOOZ3MqvcakINgEQtkvdodoDyuGdNBAClvLVjLXHWAbhF4Plr5k6xCUfcdygm0Ffy%2Bg3YD%2B4tDAvrw9mLuUS%2B3D4xS13QUTag%2B2PMCriuvbGU7iT4Wy58WDXR1jL5tstRtIhGbqIGOnTywngL7ZHtu9FiAjAZSfrfOM6dfEb4VaV%2FRrdppcwnpemOvBxFvmOZolm4KXrYgS2Fp3QYI2ClZMIOv9sQGOqUBsuysPkdARNJt6H%2Fosa3f5hB5ihVUUqfmZn3JIFQKtivnZTAzzSCwILL%2FuAa4K7SBBHI%2BiMkTqtayMowadBnlOcEe0P19ZnfKCxQNhqV4MTPeCkhQIZKDE6uN4hhX%2B73oukjr6ZE82i%2BEXuNwP8uD1vMfDTBt%2F14Mt7%2FaUk09Xl8rk%2BbN260qW%2B2Z%2BN4XtliIaAW3q1e1STl%2BVV3gdye0lnlCyWoH&X-Amz-Signature=60a200f42ed2dcaf5691219e9999d732e74a98a77a34c6dd759d1fae1ef314af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R3LNKF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcu%2FXgeg02KNpj2CdRAbcNuN6ofP51uGQIi4puOFUwwAiEA7Va0H7D1ovE2fA%2BtMHh3C5AILuJSJHzLlJBWHskjuXcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJE91i7ZEyDgiXCsQSrcA4YOLhdz5a7rAcJwT89i%2F4xaJmMWChLGLeP7nI462LtNYkgTwAucUNUO%2Fkk8qQhHqmUqwTNhunG2yCj%2BCEyqBSxC0KqtNUgPbBqAkzQeYf0baYDhftW7q2Lv1PTjlEhSEaLq2fVP6xNGEjYK8AG9VOuVlQcYSCM5xwCkeugYRAAFQJBLs0UwHsPmqbwOo2Jibxc8OUTvT3xy%2FCpSXYx5GaSTQQn%2FQJqdkjW90aW7UMIx2s7hpH37e2GDrwcFAZ3pzTns%2FIWURy8NIjD%2F6LIlx%2FvlJe81xqLDSe%2FSdD9VHC2fYq0cxF8eO5U3lE5dIdnZ0myAiacAsChr5GNc%2BZg47Yi0wmFtaaJPq%2B9TnkiHGxFB0Qt7HYOBFPWtXpn1eL6l0YJvllH6oZABri%2BsM66840Ay%2BFG5aCQewPygcNdOOZ3MqvcakINgEQtkvdodoDyuGdNBAClvLVjLXHWAbhF4Plr5k6xCUfcdygm0Ffy%2Bg3YD%2B4tDAvrw9mLuUS%2B3D4xS13QUTag%2B2PMCriuvbGU7iT4Wy58WDXR1jL5tstRtIhGbqIGOnTywngL7ZHtu9FiAjAZSfrfOM6dfEb4VaV%2FRrdppcwnpemOvBxFvmOZolm4KXrYgS2Fp3QYI2ClZMIOv9sQGOqUBsuysPkdARNJt6H%2Fosa3f5hB5ihVUUqfmZn3JIFQKtivnZTAzzSCwILL%2FuAa4K7SBBHI%2BiMkTqtayMowadBnlOcEe0P19ZnfKCxQNhqV4MTPeCkhQIZKDE6uN4hhX%2B73oukjr6ZE82i%2BEXuNwP8uD1vMfDTBt%2F14Mt7%2FaUk09Xl8rk%2BbN260qW%2B2Z%2BN4XtliIaAW3q1e1STl%2BVV3gdye0lnlCyWoH&X-Amz-Signature=a1fc989b5fb614720e0873f7783de727796039316d4c88319289c901d1d7a5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R3LNKF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcu%2FXgeg02KNpj2CdRAbcNuN6ofP51uGQIi4puOFUwwAiEA7Va0H7D1ovE2fA%2BtMHh3C5AILuJSJHzLlJBWHskjuXcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJE91i7ZEyDgiXCsQSrcA4YOLhdz5a7rAcJwT89i%2F4xaJmMWChLGLeP7nI462LtNYkgTwAucUNUO%2Fkk8qQhHqmUqwTNhunG2yCj%2BCEyqBSxC0KqtNUgPbBqAkzQeYf0baYDhftW7q2Lv1PTjlEhSEaLq2fVP6xNGEjYK8AG9VOuVlQcYSCM5xwCkeugYRAAFQJBLs0UwHsPmqbwOo2Jibxc8OUTvT3xy%2FCpSXYx5GaSTQQn%2FQJqdkjW90aW7UMIx2s7hpH37e2GDrwcFAZ3pzTns%2FIWURy8NIjD%2F6LIlx%2FvlJe81xqLDSe%2FSdD9VHC2fYq0cxF8eO5U3lE5dIdnZ0myAiacAsChr5GNc%2BZg47Yi0wmFtaaJPq%2B9TnkiHGxFB0Qt7HYOBFPWtXpn1eL6l0YJvllH6oZABri%2BsM66840Ay%2BFG5aCQewPygcNdOOZ3MqvcakINgEQtkvdodoDyuGdNBAClvLVjLXHWAbhF4Plr5k6xCUfcdygm0Ffy%2Bg3YD%2B4tDAvrw9mLuUS%2B3D4xS13QUTag%2B2PMCriuvbGU7iT4Wy58WDXR1jL5tstRtIhGbqIGOnTywngL7ZHtu9FiAjAZSfrfOM6dfEb4VaV%2FRrdppcwnpemOvBxFvmOZolm4KXrYgS2Fp3QYI2ClZMIOv9sQGOqUBsuysPkdARNJt6H%2Fosa3f5hB5ihVUUqfmZn3JIFQKtivnZTAzzSCwILL%2FuAa4K7SBBHI%2BiMkTqtayMowadBnlOcEe0P19ZnfKCxQNhqV4MTPeCkhQIZKDE6uN4hhX%2B73oukjr6ZE82i%2BEXuNwP8uD1vMfDTBt%2F14Mt7%2FaUk09Xl8rk%2BbN260qW%2B2Z%2BN4XtliIaAW3q1e1STl%2BVV3gdye0lnlCyWoH&X-Amz-Signature=e5ddf76107f7e583aaf63d2a415b1b7dd8450175e6de0281f12464c30956aa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R3LNKF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcu%2FXgeg02KNpj2CdRAbcNuN6ofP51uGQIi4puOFUwwAiEA7Va0H7D1ovE2fA%2BtMHh3C5AILuJSJHzLlJBWHskjuXcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJE91i7ZEyDgiXCsQSrcA4YOLhdz5a7rAcJwT89i%2F4xaJmMWChLGLeP7nI462LtNYkgTwAucUNUO%2Fkk8qQhHqmUqwTNhunG2yCj%2BCEyqBSxC0KqtNUgPbBqAkzQeYf0baYDhftW7q2Lv1PTjlEhSEaLq2fVP6xNGEjYK8AG9VOuVlQcYSCM5xwCkeugYRAAFQJBLs0UwHsPmqbwOo2Jibxc8OUTvT3xy%2FCpSXYx5GaSTQQn%2FQJqdkjW90aW7UMIx2s7hpH37e2GDrwcFAZ3pzTns%2FIWURy8NIjD%2F6LIlx%2FvlJe81xqLDSe%2FSdD9VHC2fYq0cxF8eO5U3lE5dIdnZ0myAiacAsChr5GNc%2BZg47Yi0wmFtaaJPq%2B9TnkiHGxFB0Qt7HYOBFPWtXpn1eL6l0YJvllH6oZABri%2BsM66840Ay%2BFG5aCQewPygcNdOOZ3MqvcakINgEQtkvdodoDyuGdNBAClvLVjLXHWAbhF4Plr5k6xCUfcdygm0Ffy%2Bg3YD%2B4tDAvrw9mLuUS%2B3D4xS13QUTag%2B2PMCriuvbGU7iT4Wy58WDXR1jL5tstRtIhGbqIGOnTywngL7ZHtu9FiAjAZSfrfOM6dfEb4VaV%2FRrdppcwnpemOvBxFvmOZolm4KXrYgS2Fp3QYI2ClZMIOv9sQGOqUBsuysPkdARNJt6H%2Fosa3f5hB5ihVUUqfmZn3JIFQKtivnZTAzzSCwILL%2FuAa4K7SBBHI%2BiMkTqtayMowadBnlOcEe0P19ZnfKCxQNhqV4MTPeCkhQIZKDE6uN4hhX%2B73oukjr6ZE82i%2BEXuNwP8uD1vMfDTBt%2F14Mt7%2FaUk09Xl8rk%2BbN260qW%2B2Z%2BN4XtliIaAW3q1e1STl%2BVV3gdye0lnlCyWoH&X-Amz-Signature=dd0f683c293493d818a156033d2e26d9c2b7a2f83ebd60e999ddd956a77162db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R3LNKF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcu%2FXgeg02KNpj2CdRAbcNuN6ofP51uGQIi4puOFUwwAiEA7Va0H7D1ovE2fA%2BtMHh3C5AILuJSJHzLlJBWHskjuXcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJE91i7ZEyDgiXCsQSrcA4YOLhdz5a7rAcJwT89i%2F4xaJmMWChLGLeP7nI462LtNYkgTwAucUNUO%2Fkk8qQhHqmUqwTNhunG2yCj%2BCEyqBSxC0KqtNUgPbBqAkzQeYf0baYDhftW7q2Lv1PTjlEhSEaLq2fVP6xNGEjYK8AG9VOuVlQcYSCM5xwCkeugYRAAFQJBLs0UwHsPmqbwOo2Jibxc8OUTvT3xy%2FCpSXYx5GaSTQQn%2FQJqdkjW90aW7UMIx2s7hpH37e2GDrwcFAZ3pzTns%2FIWURy8NIjD%2F6LIlx%2FvlJe81xqLDSe%2FSdD9VHC2fYq0cxF8eO5U3lE5dIdnZ0myAiacAsChr5GNc%2BZg47Yi0wmFtaaJPq%2B9TnkiHGxFB0Qt7HYOBFPWtXpn1eL6l0YJvllH6oZABri%2BsM66840Ay%2BFG5aCQewPygcNdOOZ3MqvcakINgEQtkvdodoDyuGdNBAClvLVjLXHWAbhF4Plr5k6xCUfcdygm0Ffy%2Bg3YD%2B4tDAvrw9mLuUS%2B3D4xS13QUTag%2B2PMCriuvbGU7iT4Wy58WDXR1jL5tstRtIhGbqIGOnTywngL7ZHtu9FiAjAZSfrfOM6dfEb4VaV%2FRrdppcwnpemOvBxFvmOZolm4KXrYgS2Fp3QYI2ClZMIOv9sQGOqUBsuysPkdARNJt6H%2Fosa3f5hB5ihVUUqfmZn3JIFQKtivnZTAzzSCwILL%2FuAa4K7SBBHI%2BiMkTqtayMowadBnlOcEe0P19ZnfKCxQNhqV4MTPeCkhQIZKDE6uN4hhX%2B73oukjr6ZE82i%2BEXuNwP8uD1vMfDTBt%2F14Mt7%2FaUk09Xl8rk%2BbN260qW%2B2Z%2BN4XtliIaAW3q1e1STl%2BVV3gdye0lnlCyWoH&X-Amz-Signature=bc47c2efd011a999d65ba49a9fb8f583701900cb96364b3b46ae15a491b6eea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662R3LNKF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcu%2FXgeg02KNpj2CdRAbcNuN6ofP51uGQIi4puOFUwwAiEA7Va0H7D1ovE2fA%2BtMHh3C5AILuJSJHzLlJBWHskjuXcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJE91i7ZEyDgiXCsQSrcA4YOLhdz5a7rAcJwT89i%2F4xaJmMWChLGLeP7nI462LtNYkgTwAucUNUO%2Fkk8qQhHqmUqwTNhunG2yCj%2BCEyqBSxC0KqtNUgPbBqAkzQeYf0baYDhftW7q2Lv1PTjlEhSEaLq2fVP6xNGEjYK8AG9VOuVlQcYSCM5xwCkeugYRAAFQJBLs0UwHsPmqbwOo2Jibxc8OUTvT3xy%2FCpSXYx5GaSTQQn%2FQJqdkjW90aW7UMIx2s7hpH37e2GDrwcFAZ3pzTns%2FIWURy8NIjD%2F6LIlx%2FvlJe81xqLDSe%2FSdD9VHC2fYq0cxF8eO5U3lE5dIdnZ0myAiacAsChr5GNc%2BZg47Yi0wmFtaaJPq%2B9TnkiHGxFB0Qt7HYOBFPWtXpn1eL6l0YJvllH6oZABri%2BsM66840Ay%2BFG5aCQewPygcNdOOZ3MqvcakINgEQtkvdodoDyuGdNBAClvLVjLXHWAbhF4Plr5k6xCUfcdygm0Ffy%2Bg3YD%2B4tDAvrw9mLuUS%2B3D4xS13QUTag%2B2PMCriuvbGU7iT4Wy58WDXR1jL5tstRtIhGbqIGOnTywngL7ZHtu9FiAjAZSfrfOM6dfEb4VaV%2FRrdppcwnpemOvBxFvmOZolm4KXrYgS2Fp3QYI2ClZMIOv9sQGOqUBsuysPkdARNJt6H%2Fosa3f5hB5ihVUUqfmZn3JIFQKtivnZTAzzSCwILL%2FuAa4K7SBBHI%2BiMkTqtayMowadBnlOcEe0P19ZnfKCxQNhqV4MTPeCkhQIZKDE6uN4hhX%2B73oukjr6ZE82i%2BEXuNwP8uD1vMfDTBt%2F14Mt7%2FaUk09Xl8rk%2BbN260qW%2B2Z%2BN4XtliIaAW3q1e1STl%2BVV3gdye0lnlCyWoH&X-Amz-Signature=0a954ce655b68c147175dcc280d2a2b79034e2b825dc9cdb26e5f98f32a8ccac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
