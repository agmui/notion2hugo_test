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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCFJ52G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx9%2BqQCxYjAGYQDkYRHdhSvBahWsWM6SohkJVSjBtbYAiBVllWaHGoysE5F0HTIUy%2Bh0%2FDfVAYGnR4uY6d%2BTADydCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQcHOIAu9sj8bry8CKtwDr%2Bs5MdMi62h2fHrp4xShqpVugOO7dzYbQX%2BloqW3pNXD7ZEtn3z2Ns8H8J3ckiVNM%2FBo5jOlhQnFYBZCAB%2B5jQ5S3pELBBnwGWFYdvRcSjX9K8vMuHm%2F4uotToEluG8wyoJTIBDhr3IPsJEwH21NUCK72Ltfn5f%2FtCR3%2FCvTT8qCyHdoPeDFIAXARKNPtI57Z5FKP9HoJ6XJBulG4hnsl0ja24h5O1ajm2KgZLvlt2aUwboz9a%2BsdHKxfihdy6CDPTm%2FUMwYB36l3pbXh8JWA2NgZAIIt5KH0q%2BAsHgoGrChWub7mFBAxoa4YxxzjoN59PepqJOqcHrG29zVv1KrSbhb%2FQeRgbK9T%2By4wmvTtkhMMbizOHYd3V1aR5Z5Bu5KNy%2B%2B3rLv3ipzPt5PSFoAZbhYdQJBT%2Bd9b1QDHmNL9jX1Gk7V%2F2A6oGDplkQn5XYpgJ7tc%2BbGYskq5nDJSxPYK7sMaisc9sktYFJTdywB%2FzlLZmJUxwGMAUFK4DBhfRzNm5HTo2xJuhyy2lwddXc%2FfCiOgUDcmM5NfJYRjGywoh0NpyymHSKdHxOBDocL08SVTWBbNV2QjXaA%2BJ4jNOFKlJ3d88F%2FZ3ykF6c1qNk%2FAXW%2Bj4Ilbu%2BPbbSWVkUw8OftwAY6pgHUf%2BJHppbOvD6AgIxmUXw8OxwdqePcpKlwhMSZZfLli5jT3v%2B%2BEo%2F1Yzu4yZbCK%2F0rZmmZUw06949nbmDNNh%2Fmatsh2HU%2FhWDm%2FB%2B4U0WZMwUnbocaVj2YyOpFfUzoOJ9oO%2FCGam6IEQjbbhycqoVxOx8dXUwXQC3LDbU9zpXeI225Blz6bFuR%2FQLgq8KHERdM7wPGMcK7HXnwFF7NvSqldASfMFid&X-Amz-Signature=5130afe070b5d314339fc6944a3ffe62edb97fc0801a4b26301a2b1d37e53f02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCFJ52G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx9%2BqQCxYjAGYQDkYRHdhSvBahWsWM6SohkJVSjBtbYAiBVllWaHGoysE5F0HTIUy%2Bh0%2FDfVAYGnR4uY6d%2BTADydCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQcHOIAu9sj8bry8CKtwDr%2Bs5MdMi62h2fHrp4xShqpVugOO7dzYbQX%2BloqW3pNXD7ZEtn3z2Ns8H8J3ckiVNM%2FBo5jOlhQnFYBZCAB%2B5jQ5S3pELBBnwGWFYdvRcSjX9K8vMuHm%2F4uotToEluG8wyoJTIBDhr3IPsJEwH21NUCK72Ltfn5f%2FtCR3%2FCvTT8qCyHdoPeDFIAXARKNPtI57Z5FKP9HoJ6XJBulG4hnsl0ja24h5O1ajm2KgZLvlt2aUwboz9a%2BsdHKxfihdy6CDPTm%2FUMwYB36l3pbXh8JWA2NgZAIIt5KH0q%2BAsHgoGrChWub7mFBAxoa4YxxzjoN59PepqJOqcHrG29zVv1KrSbhb%2FQeRgbK9T%2By4wmvTtkhMMbizOHYd3V1aR5Z5Bu5KNy%2B%2B3rLv3ipzPt5PSFoAZbhYdQJBT%2Bd9b1QDHmNL9jX1Gk7V%2F2A6oGDplkQn5XYpgJ7tc%2BbGYskq5nDJSxPYK7sMaisc9sktYFJTdywB%2FzlLZmJUxwGMAUFK4DBhfRzNm5HTo2xJuhyy2lwddXc%2FfCiOgUDcmM5NfJYRjGywoh0NpyymHSKdHxOBDocL08SVTWBbNV2QjXaA%2BJ4jNOFKlJ3d88F%2FZ3ykF6c1qNk%2FAXW%2Bj4Ilbu%2BPbbSWVkUw8OftwAY6pgHUf%2BJHppbOvD6AgIxmUXw8OxwdqePcpKlwhMSZZfLli5jT3v%2B%2BEo%2F1Yzu4yZbCK%2F0rZmmZUw06949nbmDNNh%2Fmatsh2HU%2FhWDm%2FB%2B4U0WZMwUnbocaVj2YyOpFfUzoOJ9oO%2FCGam6IEQjbbhycqoVxOx8dXUwXQC3LDbU9zpXeI225Blz6bFuR%2FQLgq8KHERdM7wPGMcK7HXnwFF7NvSqldASfMFid&X-Amz-Signature=8d603c3f3f86d5d289c7d790cc84a918a2360e2f8728df3b851a90ab8c23038d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCFJ52G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx9%2BqQCxYjAGYQDkYRHdhSvBahWsWM6SohkJVSjBtbYAiBVllWaHGoysE5F0HTIUy%2Bh0%2FDfVAYGnR4uY6d%2BTADydCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQcHOIAu9sj8bry8CKtwDr%2Bs5MdMi62h2fHrp4xShqpVugOO7dzYbQX%2BloqW3pNXD7ZEtn3z2Ns8H8J3ckiVNM%2FBo5jOlhQnFYBZCAB%2B5jQ5S3pELBBnwGWFYdvRcSjX9K8vMuHm%2F4uotToEluG8wyoJTIBDhr3IPsJEwH21NUCK72Ltfn5f%2FtCR3%2FCvTT8qCyHdoPeDFIAXARKNPtI57Z5FKP9HoJ6XJBulG4hnsl0ja24h5O1ajm2KgZLvlt2aUwboz9a%2BsdHKxfihdy6CDPTm%2FUMwYB36l3pbXh8JWA2NgZAIIt5KH0q%2BAsHgoGrChWub7mFBAxoa4YxxzjoN59PepqJOqcHrG29zVv1KrSbhb%2FQeRgbK9T%2By4wmvTtkhMMbizOHYd3V1aR5Z5Bu5KNy%2B%2B3rLv3ipzPt5PSFoAZbhYdQJBT%2Bd9b1QDHmNL9jX1Gk7V%2F2A6oGDplkQn5XYpgJ7tc%2BbGYskq5nDJSxPYK7sMaisc9sktYFJTdywB%2FzlLZmJUxwGMAUFK4DBhfRzNm5HTo2xJuhyy2lwddXc%2FfCiOgUDcmM5NfJYRjGywoh0NpyymHSKdHxOBDocL08SVTWBbNV2QjXaA%2BJ4jNOFKlJ3d88F%2FZ3ykF6c1qNk%2FAXW%2Bj4Ilbu%2BPbbSWVkUw8OftwAY6pgHUf%2BJHppbOvD6AgIxmUXw8OxwdqePcpKlwhMSZZfLli5jT3v%2B%2BEo%2F1Yzu4yZbCK%2F0rZmmZUw06949nbmDNNh%2Fmatsh2HU%2FhWDm%2FB%2B4U0WZMwUnbocaVj2YyOpFfUzoOJ9oO%2FCGam6IEQjbbhycqoVxOx8dXUwXQC3LDbU9zpXeI225Blz6bFuR%2FQLgq8KHERdM7wPGMcK7HXnwFF7NvSqldASfMFid&X-Amz-Signature=dd349975dc33fcdb47741569cbfa50cb92f295b8125633694e75ca7a81b8fdbb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCFJ52G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx9%2BqQCxYjAGYQDkYRHdhSvBahWsWM6SohkJVSjBtbYAiBVllWaHGoysE5F0HTIUy%2Bh0%2FDfVAYGnR4uY6d%2BTADydCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQcHOIAu9sj8bry8CKtwDr%2Bs5MdMi62h2fHrp4xShqpVugOO7dzYbQX%2BloqW3pNXD7ZEtn3z2Ns8H8J3ckiVNM%2FBo5jOlhQnFYBZCAB%2B5jQ5S3pELBBnwGWFYdvRcSjX9K8vMuHm%2F4uotToEluG8wyoJTIBDhr3IPsJEwH21NUCK72Ltfn5f%2FtCR3%2FCvTT8qCyHdoPeDFIAXARKNPtI57Z5FKP9HoJ6XJBulG4hnsl0ja24h5O1ajm2KgZLvlt2aUwboz9a%2BsdHKxfihdy6CDPTm%2FUMwYB36l3pbXh8JWA2NgZAIIt5KH0q%2BAsHgoGrChWub7mFBAxoa4YxxzjoN59PepqJOqcHrG29zVv1KrSbhb%2FQeRgbK9T%2By4wmvTtkhMMbizOHYd3V1aR5Z5Bu5KNy%2B%2B3rLv3ipzPt5PSFoAZbhYdQJBT%2Bd9b1QDHmNL9jX1Gk7V%2F2A6oGDplkQn5XYpgJ7tc%2BbGYskq5nDJSxPYK7sMaisc9sktYFJTdywB%2FzlLZmJUxwGMAUFK4DBhfRzNm5HTo2xJuhyy2lwddXc%2FfCiOgUDcmM5NfJYRjGywoh0NpyymHSKdHxOBDocL08SVTWBbNV2QjXaA%2BJ4jNOFKlJ3d88F%2FZ3ykF6c1qNk%2FAXW%2Bj4Ilbu%2BPbbSWVkUw8OftwAY6pgHUf%2BJHppbOvD6AgIxmUXw8OxwdqePcpKlwhMSZZfLli5jT3v%2B%2BEo%2F1Yzu4yZbCK%2F0rZmmZUw06949nbmDNNh%2Fmatsh2HU%2FhWDm%2FB%2B4U0WZMwUnbocaVj2YyOpFfUzoOJ9oO%2FCGam6IEQjbbhycqoVxOx8dXUwXQC3LDbU9zpXeI225Blz6bFuR%2FQLgq8KHERdM7wPGMcK7HXnwFF7NvSqldASfMFid&X-Amz-Signature=12490a22e95b8736937be9af09e89d932693cae9cd30438d4818d110af6d89f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCFJ52G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx9%2BqQCxYjAGYQDkYRHdhSvBahWsWM6SohkJVSjBtbYAiBVllWaHGoysE5F0HTIUy%2Bh0%2FDfVAYGnR4uY6d%2BTADydCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQcHOIAu9sj8bry8CKtwDr%2Bs5MdMi62h2fHrp4xShqpVugOO7dzYbQX%2BloqW3pNXD7ZEtn3z2Ns8H8J3ckiVNM%2FBo5jOlhQnFYBZCAB%2B5jQ5S3pELBBnwGWFYdvRcSjX9K8vMuHm%2F4uotToEluG8wyoJTIBDhr3IPsJEwH21NUCK72Ltfn5f%2FtCR3%2FCvTT8qCyHdoPeDFIAXARKNPtI57Z5FKP9HoJ6XJBulG4hnsl0ja24h5O1ajm2KgZLvlt2aUwboz9a%2BsdHKxfihdy6CDPTm%2FUMwYB36l3pbXh8JWA2NgZAIIt5KH0q%2BAsHgoGrChWub7mFBAxoa4YxxzjoN59PepqJOqcHrG29zVv1KrSbhb%2FQeRgbK9T%2By4wmvTtkhMMbizOHYd3V1aR5Z5Bu5KNy%2B%2B3rLv3ipzPt5PSFoAZbhYdQJBT%2Bd9b1QDHmNL9jX1Gk7V%2F2A6oGDplkQn5XYpgJ7tc%2BbGYskq5nDJSxPYK7sMaisc9sktYFJTdywB%2FzlLZmJUxwGMAUFK4DBhfRzNm5HTo2xJuhyy2lwddXc%2FfCiOgUDcmM5NfJYRjGywoh0NpyymHSKdHxOBDocL08SVTWBbNV2QjXaA%2BJ4jNOFKlJ3d88F%2FZ3ykF6c1qNk%2FAXW%2Bj4Ilbu%2BPbbSWVkUw8OftwAY6pgHUf%2BJHppbOvD6AgIxmUXw8OxwdqePcpKlwhMSZZfLli5jT3v%2B%2BEo%2F1Yzu4yZbCK%2F0rZmmZUw06949nbmDNNh%2Fmatsh2HU%2FhWDm%2FB%2B4U0WZMwUnbocaVj2YyOpFfUzoOJ9oO%2FCGam6IEQjbbhycqoVxOx8dXUwXQC3LDbU9zpXeI225Blz6bFuR%2FQLgq8KHERdM7wPGMcK7HXnwFF7NvSqldASfMFid&X-Amz-Signature=55dafe6426d9464d5cf07e3c33cf23ffc840ea37760bfcb4857a58155f0c2978&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCFJ52G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx9%2BqQCxYjAGYQDkYRHdhSvBahWsWM6SohkJVSjBtbYAiBVllWaHGoysE5F0HTIUy%2Bh0%2FDfVAYGnR4uY6d%2BTADydCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQcHOIAu9sj8bry8CKtwDr%2Bs5MdMi62h2fHrp4xShqpVugOO7dzYbQX%2BloqW3pNXD7ZEtn3z2Ns8H8J3ckiVNM%2FBo5jOlhQnFYBZCAB%2B5jQ5S3pELBBnwGWFYdvRcSjX9K8vMuHm%2F4uotToEluG8wyoJTIBDhr3IPsJEwH21NUCK72Ltfn5f%2FtCR3%2FCvTT8qCyHdoPeDFIAXARKNPtI57Z5FKP9HoJ6XJBulG4hnsl0ja24h5O1ajm2KgZLvlt2aUwboz9a%2BsdHKxfihdy6CDPTm%2FUMwYB36l3pbXh8JWA2NgZAIIt5KH0q%2BAsHgoGrChWub7mFBAxoa4YxxzjoN59PepqJOqcHrG29zVv1KrSbhb%2FQeRgbK9T%2By4wmvTtkhMMbizOHYd3V1aR5Z5Bu5KNy%2B%2B3rLv3ipzPt5PSFoAZbhYdQJBT%2Bd9b1QDHmNL9jX1Gk7V%2F2A6oGDplkQn5XYpgJ7tc%2BbGYskq5nDJSxPYK7sMaisc9sktYFJTdywB%2FzlLZmJUxwGMAUFK4DBhfRzNm5HTo2xJuhyy2lwddXc%2FfCiOgUDcmM5NfJYRjGywoh0NpyymHSKdHxOBDocL08SVTWBbNV2QjXaA%2BJ4jNOFKlJ3d88F%2FZ3ykF6c1qNk%2FAXW%2Bj4Ilbu%2BPbbSWVkUw8OftwAY6pgHUf%2BJHppbOvD6AgIxmUXw8OxwdqePcpKlwhMSZZfLli5jT3v%2B%2BEo%2F1Yzu4yZbCK%2F0rZmmZUw06949nbmDNNh%2Fmatsh2HU%2FhWDm%2FB%2B4U0WZMwUnbocaVj2YyOpFfUzoOJ9oO%2FCGam6IEQjbbhycqoVxOx8dXUwXQC3LDbU9zpXeI225Blz6bFuR%2FQLgq8KHERdM7wPGMcK7HXnwFF7NvSqldASfMFid&X-Amz-Signature=34ff8dd71a13c9e8b94f4cd7282f4b728d93ec23c007d4507e01e791ef33606e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCFJ52G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx9%2BqQCxYjAGYQDkYRHdhSvBahWsWM6SohkJVSjBtbYAiBVllWaHGoysE5F0HTIUy%2Bh0%2FDfVAYGnR4uY6d%2BTADydCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQcHOIAu9sj8bry8CKtwDr%2Bs5MdMi62h2fHrp4xShqpVugOO7dzYbQX%2BloqW3pNXD7ZEtn3z2Ns8H8J3ckiVNM%2FBo5jOlhQnFYBZCAB%2B5jQ5S3pELBBnwGWFYdvRcSjX9K8vMuHm%2F4uotToEluG8wyoJTIBDhr3IPsJEwH21NUCK72Ltfn5f%2FtCR3%2FCvTT8qCyHdoPeDFIAXARKNPtI57Z5FKP9HoJ6XJBulG4hnsl0ja24h5O1ajm2KgZLvlt2aUwboz9a%2BsdHKxfihdy6CDPTm%2FUMwYB36l3pbXh8JWA2NgZAIIt5KH0q%2BAsHgoGrChWub7mFBAxoa4YxxzjoN59PepqJOqcHrG29zVv1KrSbhb%2FQeRgbK9T%2By4wmvTtkhMMbizOHYd3V1aR5Z5Bu5KNy%2B%2B3rLv3ipzPt5PSFoAZbhYdQJBT%2Bd9b1QDHmNL9jX1Gk7V%2F2A6oGDplkQn5XYpgJ7tc%2BbGYskq5nDJSxPYK7sMaisc9sktYFJTdywB%2FzlLZmJUxwGMAUFK4DBhfRzNm5HTo2xJuhyy2lwddXc%2FfCiOgUDcmM5NfJYRjGywoh0NpyymHSKdHxOBDocL08SVTWBbNV2QjXaA%2BJ4jNOFKlJ3d88F%2FZ3ykF6c1qNk%2FAXW%2Bj4Ilbu%2BPbbSWVkUw8OftwAY6pgHUf%2BJHppbOvD6AgIxmUXw8OxwdqePcpKlwhMSZZfLli5jT3v%2B%2BEo%2F1Yzu4yZbCK%2F0rZmmZUw06949nbmDNNh%2Fmatsh2HU%2FhWDm%2FB%2B4U0WZMwUnbocaVj2YyOpFfUzoOJ9oO%2FCGam6IEQjbbhycqoVxOx8dXUwXQC3LDbU9zpXeI225Blz6bFuR%2FQLgq8KHERdM7wPGMcK7HXnwFF7NvSqldASfMFid&X-Amz-Signature=1bfe216526830e8415db6dbbc70ade2684b570c5943a5838f54b638c564c23c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
