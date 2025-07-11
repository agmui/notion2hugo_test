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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCRYRGG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQsV9uVbEIdAAbqG5OqLPMgJMoGTlGyvoLx1R5wFKTvAiAWdTa8ZYpu%2F3RFyCXU%2BfKVH%2Bx2XKqEM8HeqByHPFTcayqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSUM0Mau0LaZfJ8MKtwDOMRBy5QhJEs3x85mSgkPjFIBUF5f3EWM6B4LnX5fQG9IdC%2FXj98PMVdXlnDrKd0luZFwBVhPL0zu3DpHnH4UkxqqzW5dO6dzTXj3AtgHs4dYhzAv4KdWgL4LrW95E%2FFZGFOI5U3gcnisDqCdfBfMsPGswIgNYfpQpw3O0VNc8U%2FBOr%2BAG%2BtVrqo6Oq0YRi0HiS2ibY1Tlp8%2FKnm8E6sFgp9NfRRXTtwDIzWaFnwHiBcomiD7Wa0g9IgNCz9VRP1ZLnIgjJAwo9DddD4UHJ5GYDQnTrdqqYrM4RLsDLzziVM%2BO0N5lPLkuUqXEpnBNK31U3lBl2kPvPWlGKj86Zp08SK7KIVFCUWRIg4rTohRen8PFKOnEVJpMVdtc0ji3WIqHlekUYej6gGIbZBGecFFwJBVhjMzYMFkdcNGFJ%2FSXEkZyrMIhYZ%2BY3fgJgfVwVccLmw%2FmXSwWiOidMuhkGmbtmidqJtyb29%2FeA2Ftnl7dz6wNneK3O5po5ZtOmdCAjuqg4Ill7Hv8bnazpkCh0eLyQr1sQ0Zut8wj8qrEqBOEkgMg%2FvOip%2FZlNk0iwtMu6EmZ%2BR6tYex4d8uDWEBdVvb8oECHql1bUf1szpJ2WfNGtGPaLxLKX1%2BOId2qhkwrarEwwY6pgFptwRZJZ%2B0v2xYF6YYWDC5PQ1zRbucJyksuuIj2BmqvckwTcE6ogeA4PlZO421nvfDhLOSkBGlLncFJ5Ur1nIKPK6V3PCnYuPXACgZX%2F3UnQeCXxPQv9wAzh8vwcVtZzZuxCm%2BxwQdp0z0Rn6s7B9yOEuRLVN5%2FI9RfeAqCKjXGaoyBOdn%2FhNVCkvg%2FwN2HptpGdlr%2Fb%2BAvoYdQaeng5m9JjCqCvK%2F&X-Amz-Signature=eb3510455129c73df590e144dcb470ce0ad60d7ae495a491db289f417aca0de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCRYRGG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQsV9uVbEIdAAbqG5OqLPMgJMoGTlGyvoLx1R5wFKTvAiAWdTa8ZYpu%2F3RFyCXU%2BfKVH%2Bx2XKqEM8HeqByHPFTcayqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSUM0Mau0LaZfJ8MKtwDOMRBy5QhJEs3x85mSgkPjFIBUF5f3EWM6B4LnX5fQG9IdC%2FXj98PMVdXlnDrKd0luZFwBVhPL0zu3DpHnH4UkxqqzW5dO6dzTXj3AtgHs4dYhzAv4KdWgL4LrW95E%2FFZGFOI5U3gcnisDqCdfBfMsPGswIgNYfpQpw3O0VNc8U%2FBOr%2BAG%2BtVrqo6Oq0YRi0HiS2ibY1Tlp8%2FKnm8E6sFgp9NfRRXTtwDIzWaFnwHiBcomiD7Wa0g9IgNCz9VRP1ZLnIgjJAwo9DddD4UHJ5GYDQnTrdqqYrM4RLsDLzziVM%2BO0N5lPLkuUqXEpnBNK31U3lBl2kPvPWlGKj86Zp08SK7KIVFCUWRIg4rTohRen8PFKOnEVJpMVdtc0ji3WIqHlekUYej6gGIbZBGecFFwJBVhjMzYMFkdcNGFJ%2FSXEkZyrMIhYZ%2BY3fgJgfVwVccLmw%2FmXSwWiOidMuhkGmbtmidqJtyb29%2FeA2Ftnl7dz6wNneK3O5po5ZtOmdCAjuqg4Ill7Hv8bnazpkCh0eLyQr1sQ0Zut8wj8qrEqBOEkgMg%2FvOip%2FZlNk0iwtMu6EmZ%2BR6tYex4d8uDWEBdVvb8oECHql1bUf1szpJ2WfNGtGPaLxLKX1%2BOId2qhkwrarEwwY6pgFptwRZJZ%2B0v2xYF6YYWDC5PQ1zRbucJyksuuIj2BmqvckwTcE6ogeA4PlZO421nvfDhLOSkBGlLncFJ5Ur1nIKPK6V3PCnYuPXACgZX%2F3UnQeCXxPQv9wAzh8vwcVtZzZuxCm%2BxwQdp0z0Rn6s7B9yOEuRLVN5%2FI9RfeAqCKjXGaoyBOdn%2FhNVCkvg%2FwN2HptpGdlr%2Fb%2BAvoYdQaeng5m9JjCqCvK%2F&X-Amz-Signature=d7a4f99c184ce058dadfc81b4e67716455eaf389e9ad6384fc50f27658d73401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCRYRGG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQsV9uVbEIdAAbqG5OqLPMgJMoGTlGyvoLx1R5wFKTvAiAWdTa8ZYpu%2F3RFyCXU%2BfKVH%2Bx2XKqEM8HeqByHPFTcayqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSUM0Mau0LaZfJ8MKtwDOMRBy5QhJEs3x85mSgkPjFIBUF5f3EWM6B4LnX5fQG9IdC%2FXj98PMVdXlnDrKd0luZFwBVhPL0zu3DpHnH4UkxqqzW5dO6dzTXj3AtgHs4dYhzAv4KdWgL4LrW95E%2FFZGFOI5U3gcnisDqCdfBfMsPGswIgNYfpQpw3O0VNc8U%2FBOr%2BAG%2BtVrqo6Oq0YRi0HiS2ibY1Tlp8%2FKnm8E6sFgp9NfRRXTtwDIzWaFnwHiBcomiD7Wa0g9IgNCz9VRP1ZLnIgjJAwo9DddD4UHJ5GYDQnTrdqqYrM4RLsDLzziVM%2BO0N5lPLkuUqXEpnBNK31U3lBl2kPvPWlGKj86Zp08SK7KIVFCUWRIg4rTohRen8PFKOnEVJpMVdtc0ji3WIqHlekUYej6gGIbZBGecFFwJBVhjMzYMFkdcNGFJ%2FSXEkZyrMIhYZ%2BY3fgJgfVwVccLmw%2FmXSwWiOidMuhkGmbtmidqJtyb29%2FeA2Ftnl7dz6wNneK3O5po5ZtOmdCAjuqg4Ill7Hv8bnazpkCh0eLyQr1sQ0Zut8wj8qrEqBOEkgMg%2FvOip%2FZlNk0iwtMu6EmZ%2BR6tYex4d8uDWEBdVvb8oECHql1bUf1szpJ2WfNGtGPaLxLKX1%2BOId2qhkwrarEwwY6pgFptwRZJZ%2B0v2xYF6YYWDC5PQ1zRbucJyksuuIj2BmqvckwTcE6ogeA4PlZO421nvfDhLOSkBGlLncFJ5Ur1nIKPK6V3PCnYuPXACgZX%2F3UnQeCXxPQv9wAzh8vwcVtZzZuxCm%2BxwQdp0z0Rn6s7B9yOEuRLVN5%2FI9RfeAqCKjXGaoyBOdn%2FhNVCkvg%2FwN2HptpGdlr%2Fb%2BAvoYdQaeng5m9JjCqCvK%2F&X-Amz-Signature=87562968676959149894629a11c4091a864f496eb1fd60417dfc62d8915a77f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCRYRGG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQsV9uVbEIdAAbqG5OqLPMgJMoGTlGyvoLx1R5wFKTvAiAWdTa8ZYpu%2F3RFyCXU%2BfKVH%2Bx2XKqEM8HeqByHPFTcayqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSUM0Mau0LaZfJ8MKtwDOMRBy5QhJEs3x85mSgkPjFIBUF5f3EWM6B4LnX5fQG9IdC%2FXj98PMVdXlnDrKd0luZFwBVhPL0zu3DpHnH4UkxqqzW5dO6dzTXj3AtgHs4dYhzAv4KdWgL4LrW95E%2FFZGFOI5U3gcnisDqCdfBfMsPGswIgNYfpQpw3O0VNc8U%2FBOr%2BAG%2BtVrqo6Oq0YRi0HiS2ibY1Tlp8%2FKnm8E6sFgp9NfRRXTtwDIzWaFnwHiBcomiD7Wa0g9IgNCz9VRP1ZLnIgjJAwo9DddD4UHJ5GYDQnTrdqqYrM4RLsDLzziVM%2BO0N5lPLkuUqXEpnBNK31U3lBl2kPvPWlGKj86Zp08SK7KIVFCUWRIg4rTohRen8PFKOnEVJpMVdtc0ji3WIqHlekUYej6gGIbZBGecFFwJBVhjMzYMFkdcNGFJ%2FSXEkZyrMIhYZ%2BY3fgJgfVwVccLmw%2FmXSwWiOidMuhkGmbtmidqJtyb29%2FeA2Ftnl7dz6wNneK3O5po5ZtOmdCAjuqg4Ill7Hv8bnazpkCh0eLyQr1sQ0Zut8wj8qrEqBOEkgMg%2FvOip%2FZlNk0iwtMu6EmZ%2BR6tYex4d8uDWEBdVvb8oECHql1bUf1szpJ2WfNGtGPaLxLKX1%2BOId2qhkwrarEwwY6pgFptwRZJZ%2B0v2xYF6YYWDC5PQ1zRbucJyksuuIj2BmqvckwTcE6ogeA4PlZO421nvfDhLOSkBGlLncFJ5Ur1nIKPK6V3PCnYuPXACgZX%2F3UnQeCXxPQv9wAzh8vwcVtZzZuxCm%2BxwQdp0z0Rn6s7B9yOEuRLVN5%2FI9RfeAqCKjXGaoyBOdn%2FhNVCkvg%2FwN2HptpGdlr%2Fb%2BAvoYdQaeng5m9JjCqCvK%2F&X-Amz-Signature=4ca136918f8f4dcc17db8bc9312a0503e2280e0b047154e1fc7afc1a6cd821c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCRYRGG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQsV9uVbEIdAAbqG5OqLPMgJMoGTlGyvoLx1R5wFKTvAiAWdTa8ZYpu%2F3RFyCXU%2BfKVH%2Bx2XKqEM8HeqByHPFTcayqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSUM0Mau0LaZfJ8MKtwDOMRBy5QhJEs3x85mSgkPjFIBUF5f3EWM6B4LnX5fQG9IdC%2FXj98PMVdXlnDrKd0luZFwBVhPL0zu3DpHnH4UkxqqzW5dO6dzTXj3AtgHs4dYhzAv4KdWgL4LrW95E%2FFZGFOI5U3gcnisDqCdfBfMsPGswIgNYfpQpw3O0VNc8U%2FBOr%2BAG%2BtVrqo6Oq0YRi0HiS2ibY1Tlp8%2FKnm8E6sFgp9NfRRXTtwDIzWaFnwHiBcomiD7Wa0g9IgNCz9VRP1ZLnIgjJAwo9DddD4UHJ5GYDQnTrdqqYrM4RLsDLzziVM%2BO0N5lPLkuUqXEpnBNK31U3lBl2kPvPWlGKj86Zp08SK7KIVFCUWRIg4rTohRen8PFKOnEVJpMVdtc0ji3WIqHlekUYej6gGIbZBGecFFwJBVhjMzYMFkdcNGFJ%2FSXEkZyrMIhYZ%2BY3fgJgfVwVccLmw%2FmXSwWiOidMuhkGmbtmidqJtyb29%2FeA2Ftnl7dz6wNneK3O5po5ZtOmdCAjuqg4Ill7Hv8bnazpkCh0eLyQr1sQ0Zut8wj8qrEqBOEkgMg%2FvOip%2FZlNk0iwtMu6EmZ%2BR6tYex4d8uDWEBdVvb8oECHql1bUf1szpJ2WfNGtGPaLxLKX1%2BOId2qhkwrarEwwY6pgFptwRZJZ%2B0v2xYF6YYWDC5PQ1zRbucJyksuuIj2BmqvckwTcE6ogeA4PlZO421nvfDhLOSkBGlLncFJ5Ur1nIKPK6V3PCnYuPXACgZX%2F3UnQeCXxPQv9wAzh8vwcVtZzZuxCm%2BxwQdp0z0Rn6s7B9yOEuRLVN5%2FI9RfeAqCKjXGaoyBOdn%2FhNVCkvg%2FwN2HptpGdlr%2Fb%2BAvoYdQaeng5m9JjCqCvK%2F&X-Amz-Signature=bc5edcdc3077b23f48e19fcc7f20d3b579e2a165ceac2cbc17e0f29d6720c1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCRYRGG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQsV9uVbEIdAAbqG5OqLPMgJMoGTlGyvoLx1R5wFKTvAiAWdTa8ZYpu%2F3RFyCXU%2BfKVH%2Bx2XKqEM8HeqByHPFTcayqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSUM0Mau0LaZfJ8MKtwDOMRBy5QhJEs3x85mSgkPjFIBUF5f3EWM6B4LnX5fQG9IdC%2FXj98PMVdXlnDrKd0luZFwBVhPL0zu3DpHnH4UkxqqzW5dO6dzTXj3AtgHs4dYhzAv4KdWgL4LrW95E%2FFZGFOI5U3gcnisDqCdfBfMsPGswIgNYfpQpw3O0VNc8U%2FBOr%2BAG%2BtVrqo6Oq0YRi0HiS2ibY1Tlp8%2FKnm8E6sFgp9NfRRXTtwDIzWaFnwHiBcomiD7Wa0g9IgNCz9VRP1ZLnIgjJAwo9DddD4UHJ5GYDQnTrdqqYrM4RLsDLzziVM%2BO0N5lPLkuUqXEpnBNK31U3lBl2kPvPWlGKj86Zp08SK7KIVFCUWRIg4rTohRen8PFKOnEVJpMVdtc0ji3WIqHlekUYej6gGIbZBGecFFwJBVhjMzYMFkdcNGFJ%2FSXEkZyrMIhYZ%2BY3fgJgfVwVccLmw%2FmXSwWiOidMuhkGmbtmidqJtyb29%2FeA2Ftnl7dz6wNneK3O5po5ZtOmdCAjuqg4Ill7Hv8bnazpkCh0eLyQr1sQ0Zut8wj8qrEqBOEkgMg%2FvOip%2FZlNk0iwtMu6EmZ%2BR6tYex4d8uDWEBdVvb8oECHql1bUf1szpJ2WfNGtGPaLxLKX1%2BOId2qhkwrarEwwY6pgFptwRZJZ%2B0v2xYF6YYWDC5PQ1zRbucJyksuuIj2BmqvckwTcE6ogeA4PlZO421nvfDhLOSkBGlLncFJ5Ur1nIKPK6V3PCnYuPXACgZX%2F3UnQeCXxPQv9wAzh8vwcVtZzZuxCm%2BxwQdp0z0Rn6s7B9yOEuRLVN5%2FI9RfeAqCKjXGaoyBOdn%2FhNVCkvg%2FwN2HptpGdlr%2Fb%2BAvoYdQaeng5m9JjCqCvK%2F&X-Amz-Signature=3200fa92f13256c9fb8a489fbb0921f321f8099a5ad05b57f05078a638e100ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCRYRGG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQsV9uVbEIdAAbqG5OqLPMgJMoGTlGyvoLx1R5wFKTvAiAWdTa8ZYpu%2F3RFyCXU%2BfKVH%2Bx2XKqEM8HeqByHPFTcayqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSUM0Mau0LaZfJ8MKtwDOMRBy5QhJEs3x85mSgkPjFIBUF5f3EWM6B4LnX5fQG9IdC%2FXj98PMVdXlnDrKd0luZFwBVhPL0zu3DpHnH4UkxqqzW5dO6dzTXj3AtgHs4dYhzAv4KdWgL4LrW95E%2FFZGFOI5U3gcnisDqCdfBfMsPGswIgNYfpQpw3O0VNc8U%2FBOr%2BAG%2BtVrqo6Oq0YRi0HiS2ibY1Tlp8%2FKnm8E6sFgp9NfRRXTtwDIzWaFnwHiBcomiD7Wa0g9IgNCz9VRP1ZLnIgjJAwo9DddD4UHJ5GYDQnTrdqqYrM4RLsDLzziVM%2BO0N5lPLkuUqXEpnBNK31U3lBl2kPvPWlGKj86Zp08SK7KIVFCUWRIg4rTohRen8PFKOnEVJpMVdtc0ji3WIqHlekUYej6gGIbZBGecFFwJBVhjMzYMFkdcNGFJ%2FSXEkZyrMIhYZ%2BY3fgJgfVwVccLmw%2FmXSwWiOidMuhkGmbtmidqJtyb29%2FeA2Ftnl7dz6wNneK3O5po5ZtOmdCAjuqg4Ill7Hv8bnazpkCh0eLyQr1sQ0Zut8wj8qrEqBOEkgMg%2FvOip%2FZlNk0iwtMu6EmZ%2BR6tYex4d8uDWEBdVvb8oECHql1bUf1szpJ2WfNGtGPaLxLKX1%2BOId2qhkwrarEwwY6pgFptwRZJZ%2B0v2xYF6YYWDC5PQ1zRbucJyksuuIj2BmqvckwTcE6ogeA4PlZO421nvfDhLOSkBGlLncFJ5Ur1nIKPK6V3PCnYuPXACgZX%2F3UnQeCXxPQv9wAzh8vwcVtZzZuxCm%2BxwQdp0z0Rn6s7B9yOEuRLVN5%2FI9RfeAqCKjXGaoyBOdn%2FhNVCkvg%2FwN2HptpGdlr%2Fb%2BAvoYdQaeng5m9JjCqCvK%2F&X-Amz-Signature=6fddfb0900df797d30cb68c59b72bc8d7ed4bf4cb540e2c6c8c35ea05eada79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
