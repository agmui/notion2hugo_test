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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667647P3CF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWiphAU0vWaIROadcSWbyvNjzrWkDdx%2Bf9OKfNtgLNxAiBlcHbhK%2F%2BjAaA5vX%2BvvqydEQI5Kv18BxL0EzkjwMMx5ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHXTBXNhms06lGRqQKtwD8ac1PPiOjqCHkGNpWaFtegvwGBiF7CkOT7YcqDB3wO%2B1CgC10hmVFAbm0VAb5K3VzJoBUEtP2xm7NPL8ysdYTUb2lnfoDxtDHXR0J3v%2F2U54abchC%2B3nMYJvC%2Bimn53Vx5syXoFTJ2XyEGsjuhEP9z9QzmvjhzGCF4tMsJVJyZgWg%2Fvk1kWTN5zzy1BkFuNhUU%2BRCU8H0SSGIcIcIWBkIxtl%2FH0hBAjgt3RzMUk4l2IoH5YWsulS2gbgxRMaNMdmEwiRA9QCjg%2FUUje4cqEwZIU1nFhdK8HK117SZqhIv6ZbAfuyS%2FElc1p8ktwl0tiJv8Uk%2FHv71mEag9lCswzuLNcu7f2sQN3Wia%2Fu3oQR%2BiYDOHdCSGCE5ZZ2ErrwSfyPSukEKNGNsfpFTXV1JmrNqdnwScKJ9bya9l4xBHeNYYbujmFR5MB7yXuQeQ5QqtdceSawzMkjZZNBlXquxj00PWpAvQjOuex9wJklfpGIU4ABdTxluM1O4bX46wRv8BmV2Tegmn236ix%2F4tw3MijjKnxVra1hCk9Yf1XJJSdw%2FgyJbGhlrdsmcUlpPA5rlCfXXSUTRzOpOU%2FVRu0JZEg4OkLQvkUWEKE%2FtqpTbM%2B6S1VR2iilUFzgYoh9kwYwyILivgY6pgH5SWUKqIR2iKBeSiGAWZlGf6bapivRcQ%2Fq3hBIpWIj8O48qEvRSYA%2BzxJMVQM4eIi08sZl894WsxjEgj3KIKM%2Bbd%2BzxT3HiRwPCNV%2FEVjtxGFypScKvVF97IlQVtsI7qq1uowKiix3tE1cy1n0Ez9WbROB51e4aAECBrz1hf9Ek2jWPSwLG9h4YaQ7N%2B67b2VdLjVtnugjv6ThGmUJtYi0KJ3V%2B1k3&X-Amz-Signature=2216930513fbc2c7a1b30ab46516fc617d3b98952de92e286340098001a56675&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667647P3CF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWiphAU0vWaIROadcSWbyvNjzrWkDdx%2Bf9OKfNtgLNxAiBlcHbhK%2F%2BjAaA5vX%2BvvqydEQI5Kv18BxL0EzkjwMMx5ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHXTBXNhms06lGRqQKtwD8ac1PPiOjqCHkGNpWaFtegvwGBiF7CkOT7YcqDB3wO%2B1CgC10hmVFAbm0VAb5K3VzJoBUEtP2xm7NPL8ysdYTUb2lnfoDxtDHXR0J3v%2F2U54abchC%2B3nMYJvC%2Bimn53Vx5syXoFTJ2XyEGsjuhEP9z9QzmvjhzGCF4tMsJVJyZgWg%2Fvk1kWTN5zzy1BkFuNhUU%2BRCU8H0SSGIcIcIWBkIxtl%2FH0hBAjgt3RzMUk4l2IoH5YWsulS2gbgxRMaNMdmEwiRA9QCjg%2FUUje4cqEwZIU1nFhdK8HK117SZqhIv6ZbAfuyS%2FElc1p8ktwl0tiJv8Uk%2FHv71mEag9lCswzuLNcu7f2sQN3Wia%2Fu3oQR%2BiYDOHdCSGCE5ZZ2ErrwSfyPSukEKNGNsfpFTXV1JmrNqdnwScKJ9bya9l4xBHeNYYbujmFR5MB7yXuQeQ5QqtdceSawzMkjZZNBlXquxj00PWpAvQjOuex9wJklfpGIU4ABdTxluM1O4bX46wRv8BmV2Tegmn236ix%2F4tw3MijjKnxVra1hCk9Yf1XJJSdw%2FgyJbGhlrdsmcUlpPA5rlCfXXSUTRzOpOU%2FVRu0JZEg4OkLQvkUWEKE%2FtqpTbM%2B6S1VR2iilUFzgYoh9kwYwyILivgY6pgH5SWUKqIR2iKBeSiGAWZlGf6bapivRcQ%2Fq3hBIpWIj8O48qEvRSYA%2BzxJMVQM4eIi08sZl894WsxjEgj3KIKM%2Bbd%2BzxT3HiRwPCNV%2FEVjtxGFypScKvVF97IlQVtsI7qq1uowKiix3tE1cy1n0Ez9WbROB51e4aAECBrz1hf9Ek2jWPSwLG9h4YaQ7N%2B67b2VdLjVtnugjv6ThGmUJtYi0KJ3V%2B1k3&X-Amz-Signature=959004957518bbe34680d4838e5dc388d498ce7b6bfacef17023290074d08f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667647P3CF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWiphAU0vWaIROadcSWbyvNjzrWkDdx%2Bf9OKfNtgLNxAiBlcHbhK%2F%2BjAaA5vX%2BvvqydEQI5Kv18BxL0EzkjwMMx5ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHXTBXNhms06lGRqQKtwD8ac1PPiOjqCHkGNpWaFtegvwGBiF7CkOT7YcqDB3wO%2B1CgC10hmVFAbm0VAb5K3VzJoBUEtP2xm7NPL8ysdYTUb2lnfoDxtDHXR0J3v%2F2U54abchC%2B3nMYJvC%2Bimn53Vx5syXoFTJ2XyEGsjuhEP9z9QzmvjhzGCF4tMsJVJyZgWg%2Fvk1kWTN5zzy1BkFuNhUU%2BRCU8H0SSGIcIcIWBkIxtl%2FH0hBAjgt3RzMUk4l2IoH5YWsulS2gbgxRMaNMdmEwiRA9QCjg%2FUUje4cqEwZIU1nFhdK8HK117SZqhIv6ZbAfuyS%2FElc1p8ktwl0tiJv8Uk%2FHv71mEag9lCswzuLNcu7f2sQN3Wia%2Fu3oQR%2BiYDOHdCSGCE5ZZ2ErrwSfyPSukEKNGNsfpFTXV1JmrNqdnwScKJ9bya9l4xBHeNYYbujmFR5MB7yXuQeQ5QqtdceSawzMkjZZNBlXquxj00PWpAvQjOuex9wJklfpGIU4ABdTxluM1O4bX46wRv8BmV2Tegmn236ix%2F4tw3MijjKnxVra1hCk9Yf1XJJSdw%2FgyJbGhlrdsmcUlpPA5rlCfXXSUTRzOpOU%2FVRu0JZEg4OkLQvkUWEKE%2FtqpTbM%2B6S1VR2iilUFzgYoh9kwYwyILivgY6pgH5SWUKqIR2iKBeSiGAWZlGf6bapivRcQ%2Fq3hBIpWIj8O48qEvRSYA%2BzxJMVQM4eIi08sZl894WsxjEgj3KIKM%2Bbd%2BzxT3HiRwPCNV%2FEVjtxGFypScKvVF97IlQVtsI7qq1uowKiix3tE1cy1n0Ez9WbROB51e4aAECBrz1hf9Ek2jWPSwLG9h4YaQ7N%2B67b2VdLjVtnugjv6ThGmUJtYi0KJ3V%2B1k3&X-Amz-Signature=070be891edec0b6d97339de6257e83acfd3b4d0ee26fded176a60b363b9f6650&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667647P3CF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWiphAU0vWaIROadcSWbyvNjzrWkDdx%2Bf9OKfNtgLNxAiBlcHbhK%2F%2BjAaA5vX%2BvvqydEQI5Kv18BxL0EzkjwMMx5ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHXTBXNhms06lGRqQKtwD8ac1PPiOjqCHkGNpWaFtegvwGBiF7CkOT7YcqDB3wO%2B1CgC10hmVFAbm0VAb5K3VzJoBUEtP2xm7NPL8ysdYTUb2lnfoDxtDHXR0J3v%2F2U54abchC%2B3nMYJvC%2Bimn53Vx5syXoFTJ2XyEGsjuhEP9z9QzmvjhzGCF4tMsJVJyZgWg%2Fvk1kWTN5zzy1BkFuNhUU%2BRCU8H0SSGIcIcIWBkIxtl%2FH0hBAjgt3RzMUk4l2IoH5YWsulS2gbgxRMaNMdmEwiRA9QCjg%2FUUje4cqEwZIU1nFhdK8HK117SZqhIv6ZbAfuyS%2FElc1p8ktwl0tiJv8Uk%2FHv71mEag9lCswzuLNcu7f2sQN3Wia%2Fu3oQR%2BiYDOHdCSGCE5ZZ2ErrwSfyPSukEKNGNsfpFTXV1JmrNqdnwScKJ9bya9l4xBHeNYYbujmFR5MB7yXuQeQ5QqtdceSawzMkjZZNBlXquxj00PWpAvQjOuex9wJklfpGIU4ABdTxluM1O4bX46wRv8BmV2Tegmn236ix%2F4tw3MijjKnxVra1hCk9Yf1XJJSdw%2FgyJbGhlrdsmcUlpPA5rlCfXXSUTRzOpOU%2FVRu0JZEg4OkLQvkUWEKE%2FtqpTbM%2B6S1VR2iilUFzgYoh9kwYwyILivgY6pgH5SWUKqIR2iKBeSiGAWZlGf6bapivRcQ%2Fq3hBIpWIj8O48qEvRSYA%2BzxJMVQM4eIi08sZl894WsxjEgj3KIKM%2Bbd%2BzxT3HiRwPCNV%2FEVjtxGFypScKvVF97IlQVtsI7qq1uowKiix3tE1cy1n0Ez9WbROB51e4aAECBrz1hf9Ek2jWPSwLG9h4YaQ7N%2B67b2VdLjVtnugjv6ThGmUJtYi0KJ3V%2B1k3&X-Amz-Signature=b6877877d871235eceb4995c6943b336165625decb4a5750ea7aee85186c39ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667647P3CF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWiphAU0vWaIROadcSWbyvNjzrWkDdx%2Bf9OKfNtgLNxAiBlcHbhK%2F%2BjAaA5vX%2BvvqydEQI5Kv18BxL0EzkjwMMx5ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHXTBXNhms06lGRqQKtwD8ac1PPiOjqCHkGNpWaFtegvwGBiF7CkOT7YcqDB3wO%2B1CgC10hmVFAbm0VAb5K3VzJoBUEtP2xm7NPL8ysdYTUb2lnfoDxtDHXR0J3v%2F2U54abchC%2B3nMYJvC%2Bimn53Vx5syXoFTJ2XyEGsjuhEP9z9QzmvjhzGCF4tMsJVJyZgWg%2Fvk1kWTN5zzy1BkFuNhUU%2BRCU8H0SSGIcIcIWBkIxtl%2FH0hBAjgt3RzMUk4l2IoH5YWsulS2gbgxRMaNMdmEwiRA9QCjg%2FUUje4cqEwZIU1nFhdK8HK117SZqhIv6ZbAfuyS%2FElc1p8ktwl0tiJv8Uk%2FHv71mEag9lCswzuLNcu7f2sQN3Wia%2Fu3oQR%2BiYDOHdCSGCE5ZZ2ErrwSfyPSukEKNGNsfpFTXV1JmrNqdnwScKJ9bya9l4xBHeNYYbujmFR5MB7yXuQeQ5QqtdceSawzMkjZZNBlXquxj00PWpAvQjOuex9wJklfpGIU4ABdTxluM1O4bX46wRv8BmV2Tegmn236ix%2F4tw3MijjKnxVra1hCk9Yf1XJJSdw%2FgyJbGhlrdsmcUlpPA5rlCfXXSUTRzOpOU%2FVRu0JZEg4OkLQvkUWEKE%2FtqpTbM%2B6S1VR2iilUFzgYoh9kwYwyILivgY6pgH5SWUKqIR2iKBeSiGAWZlGf6bapivRcQ%2Fq3hBIpWIj8O48qEvRSYA%2BzxJMVQM4eIi08sZl894WsxjEgj3KIKM%2Bbd%2BzxT3HiRwPCNV%2FEVjtxGFypScKvVF97IlQVtsI7qq1uowKiix3tE1cy1n0Ez9WbROB51e4aAECBrz1hf9Ek2jWPSwLG9h4YaQ7N%2B67b2VdLjVtnugjv6ThGmUJtYi0KJ3V%2B1k3&X-Amz-Signature=bc64ab58344678165067d2cf4235dd670568084b4fcd884a4d1886f56877c348&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667647P3CF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWiphAU0vWaIROadcSWbyvNjzrWkDdx%2Bf9OKfNtgLNxAiBlcHbhK%2F%2BjAaA5vX%2BvvqydEQI5Kv18BxL0EzkjwMMx5ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHXTBXNhms06lGRqQKtwD8ac1PPiOjqCHkGNpWaFtegvwGBiF7CkOT7YcqDB3wO%2B1CgC10hmVFAbm0VAb5K3VzJoBUEtP2xm7NPL8ysdYTUb2lnfoDxtDHXR0J3v%2F2U54abchC%2B3nMYJvC%2Bimn53Vx5syXoFTJ2XyEGsjuhEP9z9QzmvjhzGCF4tMsJVJyZgWg%2Fvk1kWTN5zzy1BkFuNhUU%2BRCU8H0SSGIcIcIWBkIxtl%2FH0hBAjgt3RzMUk4l2IoH5YWsulS2gbgxRMaNMdmEwiRA9QCjg%2FUUje4cqEwZIU1nFhdK8HK117SZqhIv6ZbAfuyS%2FElc1p8ktwl0tiJv8Uk%2FHv71mEag9lCswzuLNcu7f2sQN3Wia%2Fu3oQR%2BiYDOHdCSGCE5ZZ2ErrwSfyPSukEKNGNsfpFTXV1JmrNqdnwScKJ9bya9l4xBHeNYYbujmFR5MB7yXuQeQ5QqtdceSawzMkjZZNBlXquxj00PWpAvQjOuex9wJklfpGIU4ABdTxluM1O4bX46wRv8BmV2Tegmn236ix%2F4tw3MijjKnxVra1hCk9Yf1XJJSdw%2FgyJbGhlrdsmcUlpPA5rlCfXXSUTRzOpOU%2FVRu0JZEg4OkLQvkUWEKE%2FtqpTbM%2B6S1VR2iilUFzgYoh9kwYwyILivgY6pgH5SWUKqIR2iKBeSiGAWZlGf6bapivRcQ%2Fq3hBIpWIj8O48qEvRSYA%2BzxJMVQM4eIi08sZl894WsxjEgj3KIKM%2Bbd%2BzxT3HiRwPCNV%2FEVjtxGFypScKvVF97IlQVtsI7qq1uowKiix3tE1cy1n0Ez9WbROB51e4aAECBrz1hf9Ek2jWPSwLG9h4YaQ7N%2B67b2VdLjVtnugjv6ThGmUJtYi0KJ3V%2B1k3&X-Amz-Signature=e60a6b42fe46ea20aa088008e5b0d0ae60580047c95fb124894e7948621336d4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667647P3CF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWiphAU0vWaIROadcSWbyvNjzrWkDdx%2Bf9OKfNtgLNxAiBlcHbhK%2F%2BjAaA5vX%2BvvqydEQI5Kv18BxL0EzkjwMMx5ir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHXTBXNhms06lGRqQKtwD8ac1PPiOjqCHkGNpWaFtegvwGBiF7CkOT7YcqDB3wO%2B1CgC10hmVFAbm0VAb5K3VzJoBUEtP2xm7NPL8ysdYTUb2lnfoDxtDHXR0J3v%2F2U54abchC%2B3nMYJvC%2Bimn53Vx5syXoFTJ2XyEGsjuhEP9z9QzmvjhzGCF4tMsJVJyZgWg%2Fvk1kWTN5zzy1BkFuNhUU%2BRCU8H0SSGIcIcIWBkIxtl%2FH0hBAjgt3RzMUk4l2IoH5YWsulS2gbgxRMaNMdmEwiRA9QCjg%2FUUje4cqEwZIU1nFhdK8HK117SZqhIv6ZbAfuyS%2FElc1p8ktwl0tiJv8Uk%2FHv71mEag9lCswzuLNcu7f2sQN3Wia%2Fu3oQR%2BiYDOHdCSGCE5ZZ2ErrwSfyPSukEKNGNsfpFTXV1JmrNqdnwScKJ9bya9l4xBHeNYYbujmFR5MB7yXuQeQ5QqtdceSawzMkjZZNBlXquxj00PWpAvQjOuex9wJklfpGIU4ABdTxluM1O4bX46wRv8BmV2Tegmn236ix%2F4tw3MijjKnxVra1hCk9Yf1XJJSdw%2FgyJbGhlrdsmcUlpPA5rlCfXXSUTRzOpOU%2FVRu0JZEg4OkLQvkUWEKE%2FtqpTbM%2B6S1VR2iilUFzgYoh9kwYwyILivgY6pgH5SWUKqIR2iKBeSiGAWZlGf6bapivRcQ%2Fq3hBIpWIj8O48qEvRSYA%2BzxJMVQM4eIi08sZl894WsxjEgj3KIKM%2Bbd%2BzxT3HiRwPCNV%2FEVjtxGFypScKvVF97IlQVtsI7qq1uowKiix3tE1cy1n0Ez9WbROB51e4aAECBrz1hf9Ek2jWPSwLG9h4YaQ7N%2B67b2VdLjVtnugjv6ThGmUJtYi0KJ3V%2B1k3&X-Amz-Signature=1e7ca266e12d81cc215e3d2e4ef5d3d8c7cf824f742737e913c7299f143af182&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
