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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUAVC4L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNayLGissHQWe%2B1oMvOc4exJXKH0XV%2BWY7O4j9CqAJYAiEA1ZIPISSIYJhKpxwwvKz9%2ByGFiaYmfB42ROlRvvqIcyAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJtPJNR4a9x0thA8LSrcA54csuhlNsY5h9%2BIod6U3Kz%2FvE%2Bgqc0zdZvnoUHJ9aGEi8isCBP5cnZ6EEgwa0fd5Q9FpEny7QXNfMVjuJjDRHfPt71o%2F%2BYJPZOWGqqVp%2F%2FzFSk8l2dCVR2UjxFbg%2FIIMiV4S0zll%2FWUBEX0xn5uobJi3fw76yLRVnD5FtB09R4W2rpSzJeMgFDSuxH0ba9aBsi8QGxS%2BhqLWr8ncJKf%2BAFP9oc6N1pKPDB5aI2cv5W7dzQiMhSqU8ztyK1BHpktJWsTBYcTQbViqBui%2BtV3H%2Bn5Eg1b0S9%2FLHPK0E9L2H9qskzhmNfG94bxeVBhU%2FdWMiBXiZ96KBzj9aXZhPBz4Tz%2BFxk7KeskEvmt4ozIOxwPhi4qje%2FA1uTBOOeUuPl6N27wuqkViSWiHHwEriH%2Bf92S8hN2XqNle%2FJnRXn1a639dxUzkAuw0s2UKYUwZ0AbiDzHP6qeM8KXTXxmgv8vlAiJVN8%2BT6dFwy%2FJFNkPI6BaGlCk6tt360g%2B5Iv3r%2FCQ69zVFL%2FnuxKuL6Wpnwu9jgIJ4hZLuuNa%2BblrgdkP2pLMNnenuTegW1xUZyqDz3waHlhXAShbjyHzVQIzNtVjLqigA3c9PPzpOpG2EDkdxo2D3fbweUnY%2FC6tr4D4MN3AqMEGOqUBqQsDFbuaw6mDSZazVcHZuPyRqFzmFBsx9MVNi9No5cZOY%2FY82EKpQfO8Wq5yPNIPqImXjyqAt%2BmvalGFn%2Bfe616QGwQhScFpvp5G73REGo6239ggt35l8Y2GyrX9TYa6hdNOgn9g%2FR26AOYaDy8fd8AU0AAWIUstpDzCLhqzjaDXQTVVgWwa52C1YhFPEDATypFenZ%2BCbGNT8Wczc2Oi64IauRXs&X-Amz-Signature=572be3a4554c0e6f89aa2fdd39e6cd5e9ee6165ae96557a9a59b106de131a23b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUAVC4L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNayLGissHQWe%2B1oMvOc4exJXKH0XV%2BWY7O4j9CqAJYAiEA1ZIPISSIYJhKpxwwvKz9%2ByGFiaYmfB42ROlRvvqIcyAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJtPJNR4a9x0thA8LSrcA54csuhlNsY5h9%2BIod6U3Kz%2FvE%2Bgqc0zdZvnoUHJ9aGEi8isCBP5cnZ6EEgwa0fd5Q9FpEny7QXNfMVjuJjDRHfPt71o%2F%2BYJPZOWGqqVp%2F%2FzFSk8l2dCVR2UjxFbg%2FIIMiV4S0zll%2FWUBEX0xn5uobJi3fw76yLRVnD5FtB09R4W2rpSzJeMgFDSuxH0ba9aBsi8QGxS%2BhqLWr8ncJKf%2BAFP9oc6N1pKPDB5aI2cv5W7dzQiMhSqU8ztyK1BHpktJWsTBYcTQbViqBui%2BtV3H%2Bn5Eg1b0S9%2FLHPK0E9L2H9qskzhmNfG94bxeVBhU%2FdWMiBXiZ96KBzj9aXZhPBz4Tz%2BFxk7KeskEvmt4ozIOxwPhi4qje%2FA1uTBOOeUuPl6N27wuqkViSWiHHwEriH%2Bf92S8hN2XqNle%2FJnRXn1a639dxUzkAuw0s2UKYUwZ0AbiDzHP6qeM8KXTXxmgv8vlAiJVN8%2BT6dFwy%2FJFNkPI6BaGlCk6tt360g%2B5Iv3r%2FCQ69zVFL%2FnuxKuL6Wpnwu9jgIJ4hZLuuNa%2BblrgdkP2pLMNnenuTegW1xUZyqDz3waHlhXAShbjyHzVQIzNtVjLqigA3c9PPzpOpG2EDkdxo2D3fbweUnY%2FC6tr4D4MN3AqMEGOqUBqQsDFbuaw6mDSZazVcHZuPyRqFzmFBsx9MVNi9No5cZOY%2FY82EKpQfO8Wq5yPNIPqImXjyqAt%2BmvalGFn%2Bfe616QGwQhScFpvp5G73REGo6239ggt35l8Y2GyrX9TYa6hdNOgn9g%2FR26AOYaDy8fd8AU0AAWIUstpDzCLhqzjaDXQTVVgWwa52C1YhFPEDATypFenZ%2BCbGNT8Wczc2Oi64IauRXs&X-Amz-Signature=04e391310bdc186f32861202bd6616e1840a951bfb1c76e93dfae43f24de58ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUAVC4L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNayLGissHQWe%2B1oMvOc4exJXKH0XV%2BWY7O4j9CqAJYAiEA1ZIPISSIYJhKpxwwvKz9%2ByGFiaYmfB42ROlRvvqIcyAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJtPJNR4a9x0thA8LSrcA54csuhlNsY5h9%2BIod6U3Kz%2FvE%2Bgqc0zdZvnoUHJ9aGEi8isCBP5cnZ6EEgwa0fd5Q9FpEny7QXNfMVjuJjDRHfPt71o%2F%2BYJPZOWGqqVp%2F%2FzFSk8l2dCVR2UjxFbg%2FIIMiV4S0zll%2FWUBEX0xn5uobJi3fw76yLRVnD5FtB09R4W2rpSzJeMgFDSuxH0ba9aBsi8QGxS%2BhqLWr8ncJKf%2BAFP9oc6N1pKPDB5aI2cv5W7dzQiMhSqU8ztyK1BHpktJWsTBYcTQbViqBui%2BtV3H%2Bn5Eg1b0S9%2FLHPK0E9L2H9qskzhmNfG94bxeVBhU%2FdWMiBXiZ96KBzj9aXZhPBz4Tz%2BFxk7KeskEvmt4ozIOxwPhi4qje%2FA1uTBOOeUuPl6N27wuqkViSWiHHwEriH%2Bf92S8hN2XqNle%2FJnRXn1a639dxUzkAuw0s2UKYUwZ0AbiDzHP6qeM8KXTXxmgv8vlAiJVN8%2BT6dFwy%2FJFNkPI6BaGlCk6tt360g%2B5Iv3r%2FCQ69zVFL%2FnuxKuL6Wpnwu9jgIJ4hZLuuNa%2BblrgdkP2pLMNnenuTegW1xUZyqDz3waHlhXAShbjyHzVQIzNtVjLqigA3c9PPzpOpG2EDkdxo2D3fbweUnY%2FC6tr4D4MN3AqMEGOqUBqQsDFbuaw6mDSZazVcHZuPyRqFzmFBsx9MVNi9No5cZOY%2FY82EKpQfO8Wq5yPNIPqImXjyqAt%2BmvalGFn%2Bfe616QGwQhScFpvp5G73REGo6239ggt35l8Y2GyrX9TYa6hdNOgn9g%2FR26AOYaDy8fd8AU0AAWIUstpDzCLhqzjaDXQTVVgWwa52C1YhFPEDATypFenZ%2BCbGNT8Wczc2Oi64IauRXs&X-Amz-Signature=7dca9a24054b4c5cf04e1fde0f65208ac88bcca4f2995a66143fa6309bf9a6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUAVC4L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNayLGissHQWe%2B1oMvOc4exJXKH0XV%2BWY7O4j9CqAJYAiEA1ZIPISSIYJhKpxwwvKz9%2ByGFiaYmfB42ROlRvvqIcyAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJtPJNR4a9x0thA8LSrcA54csuhlNsY5h9%2BIod6U3Kz%2FvE%2Bgqc0zdZvnoUHJ9aGEi8isCBP5cnZ6EEgwa0fd5Q9FpEny7QXNfMVjuJjDRHfPt71o%2F%2BYJPZOWGqqVp%2F%2FzFSk8l2dCVR2UjxFbg%2FIIMiV4S0zll%2FWUBEX0xn5uobJi3fw76yLRVnD5FtB09R4W2rpSzJeMgFDSuxH0ba9aBsi8QGxS%2BhqLWr8ncJKf%2BAFP9oc6N1pKPDB5aI2cv5W7dzQiMhSqU8ztyK1BHpktJWsTBYcTQbViqBui%2BtV3H%2Bn5Eg1b0S9%2FLHPK0E9L2H9qskzhmNfG94bxeVBhU%2FdWMiBXiZ96KBzj9aXZhPBz4Tz%2BFxk7KeskEvmt4ozIOxwPhi4qje%2FA1uTBOOeUuPl6N27wuqkViSWiHHwEriH%2Bf92S8hN2XqNle%2FJnRXn1a639dxUzkAuw0s2UKYUwZ0AbiDzHP6qeM8KXTXxmgv8vlAiJVN8%2BT6dFwy%2FJFNkPI6BaGlCk6tt360g%2B5Iv3r%2FCQ69zVFL%2FnuxKuL6Wpnwu9jgIJ4hZLuuNa%2BblrgdkP2pLMNnenuTegW1xUZyqDz3waHlhXAShbjyHzVQIzNtVjLqigA3c9PPzpOpG2EDkdxo2D3fbweUnY%2FC6tr4D4MN3AqMEGOqUBqQsDFbuaw6mDSZazVcHZuPyRqFzmFBsx9MVNi9No5cZOY%2FY82EKpQfO8Wq5yPNIPqImXjyqAt%2BmvalGFn%2Bfe616QGwQhScFpvp5G73REGo6239ggt35l8Y2GyrX9TYa6hdNOgn9g%2FR26AOYaDy8fd8AU0AAWIUstpDzCLhqzjaDXQTVVgWwa52C1YhFPEDATypFenZ%2BCbGNT8Wczc2Oi64IauRXs&X-Amz-Signature=4079fe9df5fb60f84ca554e94a0a030fe891697d019647830e255fe1223cbd77&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUAVC4L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNayLGissHQWe%2B1oMvOc4exJXKH0XV%2BWY7O4j9CqAJYAiEA1ZIPISSIYJhKpxwwvKz9%2ByGFiaYmfB42ROlRvvqIcyAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJtPJNR4a9x0thA8LSrcA54csuhlNsY5h9%2BIod6U3Kz%2FvE%2Bgqc0zdZvnoUHJ9aGEi8isCBP5cnZ6EEgwa0fd5Q9FpEny7QXNfMVjuJjDRHfPt71o%2F%2BYJPZOWGqqVp%2F%2FzFSk8l2dCVR2UjxFbg%2FIIMiV4S0zll%2FWUBEX0xn5uobJi3fw76yLRVnD5FtB09R4W2rpSzJeMgFDSuxH0ba9aBsi8QGxS%2BhqLWr8ncJKf%2BAFP9oc6N1pKPDB5aI2cv5W7dzQiMhSqU8ztyK1BHpktJWsTBYcTQbViqBui%2BtV3H%2Bn5Eg1b0S9%2FLHPK0E9L2H9qskzhmNfG94bxeVBhU%2FdWMiBXiZ96KBzj9aXZhPBz4Tz%2BFxk7KeskEvmt4ozIOxwPhi4qje%2FA1uTBOOeUuPl6N27wuqkViSWiHHwEriH%2Bf92S8hN2XqNle%2FJnRXn1a639dxUzkAuw0s2UKYUwZ0AbiDzHP6qeM8KXTXxmgv8vlAiJVN8%2BT6dFwy%2FJFNkPI6BaGlCk6tt360g%2B5Iv3r%2FCQ69zVFL%2FnuxKuL6Wpnwu9jgIJ4hZLuuNa%2BblrgdkP2pLMNnenuTegW1xUZyqDz3waHlhXAShbjyHzVQIzNtVjLqigA3c9PPzpOpG2EDkdxo2D3fbweUnY%2FC6tr4D4MN3AqMEGOqUBqQsDFbuaw6mDSZazVcHZuPyRqFzmFBsx9MVNi9No5cZOY%2FY82EKpQfO8Wq5yPNIPqImXjyqAt%2BmvalGFn%2Bfe616QGwQhScFpvp5G73REGo6239ggt35l8Y2GyrX9TYa6hdNOgn9g%2FR26AOYaDy8fd8AU0AAWIUstpDzCLhqzjaDXQTVVgWwa52C1YhFPEDATypFenZ%2BCbGNT8Wczc2Oi64IauRXs&X-Amz-Signature=a85769c0300232b02a84a757519db31771d7e1b84b7689ed7dba9c71bb0da54f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUAVC4L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNayLGissHQWe%2B1oMvOc4exJXKH0XV%2BWY7O4j9CqAJYAiEA1ZIPISSIYJhKpxwwvKz9%2ByGFiaYmfB42ROlRvvqIcyAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJtPJNR4a9x0thA8LSrcA54csuhlNsY5h9%2BIod6U3Kz%2FvE%2Bgqc0zdZvnoUHJ9aGEi8isCBP5cnZ6EEgwa0fd5Q9FpEny7QXNfMVjuJjDRHfPt71o%2F%2BYJPZOWGqqVp%2F%2FzFSk8l2dCVR2UjxFbg%2FIIMiV4S0zll%2FWUBEX0xn5uobJi3fw76yLRVnD5FtB09R4W2rpSzJeMgFDSuxH0ba9aBsi8QGxS%2BhqLWr8ncJKf%2BAFP9oc6N1pKPDB5aI2cv5W7dzQiMhSqU8ztyK1BHpktJWsTBYcTQbViqBui%2BtV3H%2Bn5Eg1b0S9%2FLHPK0E9L2H9qskzhmNfG94bxeVBhU%2FdWMiBXiZ96KBzj9aXZhPBz4Tz%2BFxk7KeskEvmt4ozIOxwPhi4qje%2FA1uTBOOeUuPl6N27wuqkViSWiHHwEriH%2Bf92S8hN2XqNle%2FJnRXn1a639dxUzkAuw0s2UKYUwZ0AbiDzHP6qeM8KXTXxmgv8vlAiJVN8%2BT6dFwy%2FJFNkPI6BaGlCk6tt360g%2B5Iv3r%2FCQ69zVFL%2FnuxKuL6Wpnwu9jgIJ4hZLuuNa%2BblrgdkP2pLMNnenuTegW1xUZyqDz3waHlhXAShbjyHzVQIzNtVjLqigA3c9PPzpOpG2EDkdxo2D3fbweUnY%2FC6tr4D4MN3AqMEGOqUBqQsDFbuaw6mDSZazVcHZuPyRqFzmFBsx9MVNi9No5cZOY%2FY82EKpQfO8Wq5yPNIPqImXjyqAt%2BmvalGFn%2Bfe616QGwQhScFpvp5G73REGo6239ggt35l8Y2GyrX9TYa6hdNOgn9g%2FR26AOYaDy8fd8AU0AAWIUstpDzCLhqzjaDXQTVVgWwa52C1YhFPEDATypFenZ%2BCbGNT8Wczc2Oi64IauRXs&X-Amz-Signature=fae8153f4183c08b7c43cd27a54e8d18b03898bcfa656390a52382d29ac1ff77&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUAVC4L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNayLGissHQWe%2B1oMvOc4exJXKH0XV%2BWY7O4j9CqAJYAiEA1ZIPISSIYJhKpxwwvKz9%2ByGFiaYmfB42ROlRvvqIcyAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJtPJNR4a9x0thA8LSrcA54csuhlNsY5h9%2BIod6U3Kz%2FvE%2Bgqc0zdZvnoUHJ9aGEi8isCBP5cnZ6EEgwa0fd5Q9FpEny7QXNfMVjuJjDRHfPt71o%2F%2BYJPZOWGqqVp%2F%2FzFSk8l2dCVR2UjxFbg%2FIIMiV4S0zll%2FWUBEX0xn5uobJi3fw76yLRVnD5FtB09R4W2rpSzJeMgFDSuxH0ba9aBsi8QGxS%2BhqLWr8ncJKf%2BAFP9oc6N1pKPDB5aI2cv5W7dzQiMhSqU8ztyK1BHpktJWsTBYcTQbViqBui%2BtV3H%2Bn5Eg1b0S9%2FLHPK0E9L2H9qskzhmNfG94bxeVBhU%2FdWMiBXiZ96KBzj9aXZhPBz4Tz%2BFxk7KeskEvmt4ozIOxwPhi4qje%2FA1uTBOOeUuPl6N27wuqkViSWiHHwEriH%2Bf92S8hN2XqNle%2FJnRXn1a639dxUzkAuw0s2UKYUwZ0AbiDzHP6qeM8KXTXxmgv8vlAiJVN8%2BT6dFwy%2FJFNkPI6BaGlCk6tt360g%2B5Iv3r%2FCQ69zVFL%2FnuxKuL6Wpnwu9jgIJ4hZLuuNa%2BblrgdkP2pLMNnenuTegW1xUZyqDz3waHlhXAShbjyHzVQIzNtVjLqigA3c9PPzpOpG2EDkdxo2D3fbweUnY%2FC6tr4D4MN3AqMEGOqUBqQsDFbuaw6mDSZazVcHZuPyRqFzmFBsx9MVNi9No5cZOY%2FY82EKpQfO8Wq5yPNIPqImXjyqAt%2BmvalGFn%2Bfe616QGwQhScFpvp5G73REGo6239ggt35l8Y2GyrX9TYa6hdNOgn9g%2FR26AOYaDy8fd8AU0AAWIUstpDzCLhqzjaDXQTVVgWwa52C1YhFPEDATypFenZ%2BCbGNT8Wczc2Oi64IauRXs&X-Amz-Signature=d78848d4c07cb8baf616307bbecffb510b288e7983d00d5fd85f6d1f3ad7141b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
