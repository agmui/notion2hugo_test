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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6DWYNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU2RPGh1sEKMWegZYsWaXMcUZl%2F3HTKmyERN%2BOsso2FAiBxMGZkRXXQKLwYsuHzJ984E66RTFtRCziLc082xFfbxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM99BL2tdTPcFRtDgRKtwDs8aW1OKIf13Ii4nXpQ4m50JM%2BDQehs40wKy9CzqQTJZzXMWgfJg3BAfFq2fTme%2BjjxTR90heqWLvFZ96JKxRD7QW4llrxdHwi2a7zpjlXNTMp4D5DTGSTAAsXwFn3ZjrJ7yl9IbXBt2t%2BjcpuAb6btKYXrkInn5m2J9c8qh%2FCwyrmvOkbTrG5l%2FJv%2F0q84WfwjEUjPNyp8LNCNBuwYFiVOHxYCt6ynwDzitoioirgtFBNH1AUD7xnNlq%2F0qWLWpbAZrI9g9SMc%2FzfFKGZicpSkEhv75A6ObzMreXbhdwLnTvVypNiyxUfDR3pDMXSxULCNv6QLpdwPQp8dK1CNY8ZeWaFT%2Fy92y43rxxwtc74eyJjG3CMqef%2BiJQw2U%2B3E3BTR4gTx3Y2VYm2LJrYs2UaYIhxeRPilSCLTmML%2F6HGIXAAcIqYXF%2F8xDIkH3jYeTravMJFd5aRz8R8Gej2sQTYW5reLZy7Sr8ohvIzzxf9B3eLYAkyb2m6bae0vBoqjAYGb9QBa4a9qghXK44qCBIM5oHJN%2Bg26ltCkkQEmlLekvlUoMF9kWvgTULpyQf6wwClyFm4Jm1ZmBtFmMpZLl6uWn%2B328qvImb0vcLTL4xNBUNtflzr9Qu%2BvusvHkwutekwQY6pgETK0BqS9kBZ7HFPdB2nF1KE%2FXfuncV4rWvr%2FOkmpaURy5PF%2BQQpIWGTpXwJexNpmnIXC0pyHUAdNoAyQsa5i0XxtNg3JkIq5Fs%2Fc1AS5fAgKn0lKZ6SSrTpco4wKTS2g1oNh5dRpRMYPZCaJb8Sc2v9Wy%2FVvDNoQOilbwMtTO%2BHg0pSs%2FgbrWMK%2BdiPFZFKT6wgbnr6lZsfgPqXIQYDx7DD3qc%2FTMJ&X-Amz-Signature=19c108183cf05fab81ab3575be128c7494e1f795ddf16dda84074332de45c062&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6DWYNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU2RPGh1sEKMWegZYsWaXMcUZl%2F3HTKmyERN%2BOsso2FAiBxMGZkRXXQKLwYsuHzJ984E66RTFtRCziLc082xFfbxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM99BL2tdTPcFRtDgRKtwDs8aW1OKIf13Ii4nXpQ4m50JM%2BDQehs40wKy9CzqQTJZzXMWgfJg3BAfFq2fTme%2BjjxTR90heqWLvFZ96JKxRD7QW4llrxdHwi2a7zpjlXNTMp4D5DTGSTAAsXwFn3ZjrJ7yl9IbXBt2t%2BjcpuAb6btKYXrkInn5m2J9c8qh%2FCwyrmvOkbTrG5l%2FJv%2F0q84WfwjEUjPNyp8LNCNBuwYFiVOHxYCt6ynwDzitoioirgtFBNH1AUD7xnNlq%2F0qWLWpbAZrI9g9SMc%2FzfFKGZicpSkEhv75A6ObzMreXbhdwLnTvVypNiyxUfDR3pDMXSxULCNv6QLpdwPQp8dK1CNY8ZeWaFT%2Fy92y43rxxwtc74eyJjG3CMqef%2BiJQw2U%2B3E3BTR4gTx3Y2VYm2LJrYs2UaYIhxeRPilSCLTmML%2F6HGIXAAcIqYXF%2F8xDIkH3jYeTravMJFd5aRz8R8Gej2sQTYW5reLZy7Sr8ohvIzzxf9B3eLYAkyb2m6bae0vBoqjAYGb9QBa4a9qghXK44qCBIM5oHJN%2Bg26ltCkkQEmlLekvlUoMF9kWvgTULpyQf6wwClyFm4Jm1ZmBtFmMpZLl6uWn%2B328qvImb0vcLTL4xNBUNtflzr9Qu%2BvusvHkwutekwQY6pgETK0BqS9kBZ7HFPdB2nF1KE%2FXfuncV4rWvr%2FOkmpaURy5PF%2BQQpIWGTpXwJexNpmnIXC0pyHUAdNoAyQsa5i0XxtNg3JkIq5Fs%2Fc1AS5fAgKn0lKZ6SSrTpco4wKTS2g1oNh5dRpRMYPZCaJb8Sc2v9Wy%2FVvDNoQOilbwMtTO%2BHg0pSs%2FgbrWMK%2BdiPFZFKT6wgbnr6lZsfgPqXIQYDx7DD3qc%2FTMJ&X-Amz-Signature=2e199f163839f4a1bc82f024fdea4babd34bcd395705913be653848d72af64d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6DWYNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU2RPGh1sEKMWegZYsWaXMcUZl%2F3HTKmyERN%2BOsso2FAiBxMGZkRXXQKLwYsuHzJ984E66RTFtRCziLc082xFfbxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM99BL2tdTPcFRtDgRKtwDs8aW1OKIf13Ii4nXpQ4m50JM%2BDQehs40wKy9CzqQTJZzXMWgfJg3BAfFq2fTme%2BjjxTR90heqWLvFZ96JKxRD7QW4llrxdHwi2a7zpjlXNTMp4D5DTGSTAAsXwFn3ZjrJ7yl9IbXBt2t%2BjcpuAb6btKYXrkInn5m2J9c8qh%2FCwyrmvOkbTrG5l%2FJv%2F0q84WfwjEUjPNyp8LNCNBuwYFiVOHxYCt6ynwDzitoioirgtFBNH1AUD7xnNlq%2F0qWLWpbAZrI9g9SMc%2FzfFKGZicpSkEhv75A6ObzMreXbhdwLnTvVypNiyxUfDR3pDMXSxULCNv6QLpdwPQp8dK1CNY8ZeWaFT%2Fy92y43rxxwtc74eyJjG3CMqef%2BiJQw2U%2B3E3BTR4gTx3Y2VYm2LJrYs2UaYIhxeRPilSCLTmML%2F6HGIXAAcIqYXF%2F8xDIkH3jYeTravMJFd5aRz8R8Gej2sQTYW5reLZy7Sr8ohvIzzxf9B3eLYAkyb2m6bae0vBoqjAYGb9QBa4a9qghXK44qCBIM5oHJN%2Bg26ltCkkQEmlLekvlUoMF9kWvgTULpyQf6wwClyFm4Jm1ZmBtFmMpZLl6uWn%2B328qvImb0vcLTL4xNBUNtflzr9Qu%2BvusvHkwutekwQY6pgETK0BqS9kBZ7HFPdB2nF1KE%2FXfuncV4rWvr%2FOkmpaURy5PF%2BQQpIWGTpXwJexNpmnIXC0pyHUAdNoAyQsa5i0XxtNg3JkIq5Fs%2Fc1AS5fAgKn0lKZ6SSrTpco4wKTS2g1oNh5dRpRMYPZCaJb8Sc2v9Wy%2FVvDNoQOilbwMtTO%2BHg0pSs%2FgbrWMK%2BdiPFZFKT6wgbnr6lZsfgPqXIQYDx7DD3qc%2FTMJ&X-Amz-Signature=96d4955e620422b210bbf7d95fbd85f8e0ad43be65dd194a885dd57efe1e944b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6DWYNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU2RPGh1sEKMWegZYsWaXMcUZl%2F3HTKmyERN%2BOsso2FAiBxMGZkRXXQKLwYsuHzJ984E66RTFtRCziLc082xFfbxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM99BL2tdTPcFRtDgRKtwDs8aW1OKIf13Ii4nXpQ4m50JM%2BDQehs40wKy9CzqQTJZzXMWgfJg3BAfFq2fTme%2BjjxTR90heqWLvFZ96JKxRD7QW4llrxdHwi2a7zpjlXNTMp4D5DTGSTAAsXwFn3ZjrJ7yl9IbXBt2t%2BjcpuAb6btKYXrkInn5m2J9c8qh%2FCwyrmvOkbTrG5l%2FJv%2F0q84WfwjEUjPNyp8LNCNBuwYFiVOHxYCt6ynwDzitoioirgtFBNH1AUD7xnNlq%2F0qWLWpbAZrI9g9SMc%2FzfFKGZicpSkEhv75A6ObzMreXbhdwLnTvVypNiyxUfDR3pDMXSxULCNv6QLpdwPQp8dK1CNY8ZeWaFT%2Fy92y43rxxwtc74eyJjG3CMqef%2BiJQw2U%2B3E3BTR4gTx3Y2VYm2LJrYs2UaYIhxeRPilSCLTmML%2F6HGIXAAcIqYXF%2F8xDIkH3jYeTravMJFd5aRz8R8Gej2sQTYW5reLZy7Sr8ohvIzzxf9B3eLYAkyb2m6bae0vBoqjAYGb9QBa4a9qghXK44qCBIM5oHJN%2Bg26ltCkkQEmlLekvlUoMF9kWvgTULpyQf6wwClyFm4Jm1ZmBtFmMpZLl6uWn%2B328qvImb0vcLTL4xNBUNtflzr9Qu%2BvusvHkwutekwQY6pgETK0BqS9kBZ7HFPdB2nF1KE%2FXfuncV4rWvr%2FOkmpaURy5PF%2BQQpIWGTpXwJexNpmnIXC0pyHUAdNoAyQsa5i0XxtNg3JkIq5Fs%2Fc1AS5fAgKn0lKZ6SSrTpco4wKTS2g1oNh5dRpRMYPZCaJb8Sc2v9Wy%2FVvDNoQOilbwMtTO%2BHg0pSs%2FgbrWMK%2BdiPFZFKT6wgbnr6lZsfgPqXIQYDx7DD3qc%2FTMJ&X-Amz-Signature=e7257b3b3e70c19957ee1841e39d4dadb1d24b8ccb926c6448813a47f3defae5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6DWYNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU2RPGh1sEKMWegZYsWaXMcUZl%2F3HTKmyERN%2BOsso2FAiBxMGZkRXXQKLwYsuHzJ984E66RTFtRCziLc082xFfbxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM99BL2tdTPcFRtDgRKtwDs8aW1OKIf13Ii4nXpQ4m50JM%2BDQehs40wKy9CzqQTJZzXMWgfJg3BAfFq2fTme%2BjjxTR90heqWLvFZ96JKxRD7QW4llrxdHwi2a7zpjlXNTMp4D5DTGSTAAsXwFn3ZjrJ7yl9IbXBt2t%2BjcpuAb6btKYXrkInn5m2J9c8qh%2FCwyrmvOkbTrG5l%2FJv%2F0q84WfwjEUjPNyp8LNCNBuwYFiVOHxYCt6ynwDzitoioirgtFBNH1AUD7xnNlq%2F0qWLWpbAZrI9g9SMc%2FzfFKGZicpSkEhv75A6ObzMreXbhdwLnTvVypNiyxUfDR3pDMXSxULCNv6QLpdwPQp8dK1CNY8ZeWaFT%2Fy92y43rxxwtc74eyJjG3CMqef%2BiJQw2U%2B3E3BTR4gTx3Y2VYm2LJrYs2UaYIhxeRPilSCLTmML%2F6HGIXAAcIqYXF%2F8xDIkH3jYeTravMJFd5aRz8R8Gej2sQTYW5reLZy7Sr8ohvIzzxf9B3eLYAkyb2m6bae0vBoqjAYGb9QBa4a9qghXK44qCBIM5oHJN%2Bg26ltCkkQEmlLekvlUoMF9kWvgTULpyQf6wwClyFm4Jm1ZmBtFmMpZLl6uWn%2B328qvImb0vcLTL4xNBUNtflzr9Qu%2BvusvHkwutekwQY6pgETK0BqS9kBZ7HFPdB2nF1KE%2FXfuncV4rWvr%2FOkmpaURy5PF%2BQQpIWGTpXwJexNpmnIXC0pyHUAdNoAyQsa5i0XxtNg3JkIq5Fs%2Fc1AS5fAgKn0lKZ6SSrTpco4wKTS2g1oNh5dRpRMYPZCaJb8Sc2v9Wy%2FVvDNoQOilbwMtTO%2BHg0pSs%2FgbrWMK%2BdiPFZFKT6wgbnr6lZsfgPqXIQYDx7DD3qc%2FTMJ&X-Amz-Signature=16b3b29de6c5a4bd5c60d89e991e98ee29c3eeab9d8cb2f1d3a7e009befd43a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6DWYNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU2RPGh1sEKMWegZYsWaXMcUZl%2F3HTKmyERN%2BOsso2FAiBxMGZkRXXQKLwYsuHzJ984E66RTFtRCziLc082xFfbxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM99BL2tdTPcFRtDgRKtwDs8aW1OKIf13Ii4nXpQ4m50JM%2BDQehs40wKy9CzqQTJZzXMWgfJg3BAfFq2fTme%2BjjxTR90heqWLvFZ96JKxRD7QW4llrxdHwi2a7zpjlXNTMp4D5DTGSTAAsXwFn3ZjrJ7yl9IbXBt2t%2BjcpuAb6btKYXrkInn5m2J9c8qh%2FCwyrmvOkbTrG5l%2FJv%2F0q84WfwjEUjPNyp8LNCNBuwYFiVOHxYCt6ynwDzitoioirgtFBNH1AUD7xnNlq%2F0qWLWpbAZrI9g9SMc%2FzfFKGZicpSkEhv75A6ObzMreXbhdwLnTvVypNiyxUfDR3pDMXSxULCNv6QLpdwPQp8dK1CNY8ZeWaFT%2Fy92y43rxxwtc74eyJjG3CMqef%2BiJQw2U%2B3E3BTR4gTx3Y2VYm2LJrYs2UaYIhxeRPilSCLTmML%2F6HGIXAAcIqYXF%2F8xDIkH3jYeTravMJFd5aRz8R8Gej2sQTYW5reLZy7Sr8ohvIzzxf9B3eLYAkyb2m6bae0vBoqjAYGb9QBa4a9qghXK44qCBIM5oHJN%2Bg26ltCkkQEmlLekvlUoMF9kWvgTULpyQf6wwClyFm4Jm1ZmBtFmMpZLl6uWn%2B328qvImb0vcLTL4xNBUNtflzr9Qu%2BvusvHkwutekwQY6pgETK0BqS9kBZ7HFPdB2nF1KE%2FXfuncV4rWvr%2FOkmpaURy5PF%2BQQpIWGTpXwJexNpmnIXC0pyHUAdNoAyQsa5i0XxtNg3JkIq5Fs%2Fc1AS5fAgKn0lKZ6SSrTpco4wKTS2g1oNh5dRpRMYPZCaJb8Sc2v9Wy%2FVvDNoQOilbwMtTO%2BHg0pSs%2FgbrWMK%2BdiPFZFKT6wgbnr6lZsfgPqXIQYDx7DD3qc%2FTMJ&X-Amz-Signature=54250516684ecbf7ee1b332877ba103ac0c2ba8c1f96b2159d6c66d9a625eceb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6DWYNB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU2RPGh1sEKMWegZYsWaXMcUZl%2F3HTKmyERN%2BOsso2FAiBxMGZkRXXQKLwYsuHzJ984E66RTFtRCziLc082xFfbxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM99BL2tdTPcFRtDgRKtwDs8aW1OKIf13Ii4nXpQ4m50JM%2BDQehs40wKy9CzqQTJZzXMWgfJg3BAfFq2fTme%2BjjxTR90heqWLvFZ96JKxRD7QW4llrxdHwi2a7zpjlXNTMp4D5DTGSTAAsXwFn3ZjrJ7yl9IbXBt2t%2BjcpuAb6btKYXrkInn5m2J9c8qh%2FCwyrmvOkbTrG5l%2FJv%2F0q84WfwjEUjPNyp8LNCNBuwYFiVOHxYCt6ynwDzitoioirgtFBNH1AUD7xnNlq%2F0qWLWpbAZrI9g9SMc%2FzfFKGZicpSkEhv75A6ObzMreXbhdwLnTvVypNiyxUfDR3pDMXSxULCNv6QLpdwPQp8dK1CNY8ZeWaFT%2Fy92y43rxxwtc74eyJjG3CMqef%2BiJQw2U%2B3E3BTR4gTx3Y2VYm2LJrYs2UaYIhxeRPilSCLTmML%2F6HGIXAAcIqYXF%2F8xDIkH3jYeTravMJFd5aRz8R8Gej2sQTYW5reLZy7Sr8ohvIzzxf9B3eLYAkyb2m6bae0vBoqjAYGb9QBa4a9qghXK44qCBIM5oHJN%2Bg26ltCkkQEmlLekvlUoMF9kWvgTULpyQf6wwClyFm4Jm1ZmBtFmMpZLl6uWn%2B328qvImb0vcLTL4xNBUNtflzr9Qu%2BvusvHkwutekwQY6pgETK0BqS9kBZ7HFPdB2nF1KE%2FXfuncV4rWvr%2FOkmpaURy5PF%2BQQpIWGTpXwJexNpmnIXC0pyHUAdNoAyQsa5i0XxtNg3JkIq5Fs%2Fc1AS5fAgKn0lKZ6SSrTpco4wKTS2g1oNh5dRpRMYPZCaJb8Sc2v9Wy%2FVvDNoQOilbwMtTO%2BHg0pSs%2FgbrWMK%2BdiPFZFKT6wgbnr6lZsfgPqXIQYDx7DD3qc%2FTMJ&X-Amz-Signature=34bf93bc7865ded6127542ff9223b7d269efa3d89491c2dedc2a5f9d2369679b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
