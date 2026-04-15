---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMGL655%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6Szigt9PPZX8JLYQs5j9NC4zzAzxyo7Zi1OTxiI7X2AiBANw4ptBW6aY%2FgvqVk2FzrfXbaMaWTviCajgMbl4SpeSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FQrrLBDlrWsaWTZKtwDP8sxamtfB78uUs8ZcSdr0IcoAPG5HfqdIVUVuW1kdjosflWjTYU1lUnOpNiGnSjas%2BmLceV1GL2OeRUzVn2nQiXvN%2BYtIsETkUQyjmQiji1HzzAmAtk%2FGPSqFoPX8fV54D6yVAw04NzhIHxeXFLFweUU6dGwTH2ya%2BMc0AOwmAW9Xc8uWyaO6RpSqwaQXUaiP%2BEesQnL50CrDxiM51a3RIUiAR5IOweZ5rnaTl1i2kec48p9hCXQPQFyFUT%2FfZQ7jUVxzM39GA6TTTebh0AUX%2FkZUdikhRfIyNZbSQvNXjI4XN0sGdQobaYacnZRGaXXuXPBRQWyyFOd9NkFgBNiRtjrNU9w0Q3h3UZmrOrMNv%2BjcUbTVPpzuopOBn3bnS7Kz40SIyPfiwrOJ5E7VtgilB5aT57hc%2FavR4RCdhwOkh89sl7smMcAjIfeM1AGNYYyAXkZFgmhgZ%2Bmp9yLEOu9jyZvBVMp80V%2F4tC%2Bs92zG%2B92mP8dRj8eKJNs%2Bx2PJRc6M%2FKHeOHTc3qoI9l8SQ9YcYguaikzNQ4tIc8cZ94KN7A7RbEh%2Fl4SjidVDp9ONVN2y9%2FeqIHswMR6xeKzUwesMU39ur8ZR4fsR9bcRp36wlmmBbi4M%2B6E5uhKE9Qwh%2BT7zgY6pgG1Sy9oBbJYvHKUy7UEyZyAOIdiO8qcH%2FDjBHyriB%2B%2BEFt5ZRs8fVNeUgvcqK3Wmxbb9lDCqNi5aHG6o1FenMDu9By0L73zUld9zhLEFQJyAB7qk%2BBIDFX7%2FI1YjK6iY3Te7IVZDeSNwWMky5iAc60%2BhMaRblejgn509gYkDUvcvO4BArndoYlAGCW0A%2FCoiQBp5LQEF%2FNCoNB4wAguDOn1qpkAeCFt&X-Amz-Signature=4c76ece3ed818762de0f72f2b726944062692fac75775ad144b0f1f7821aaa70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMGL655%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6Szigt9PPZX8JLYQs5j9NC4zzAzxyo7Zi1OTxiI7X2AiBANw4ptBW6aY%2FgvqVk2FzrfXbaMaWTviCajgMbl4SpeSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FQrrLBDlrWsaWTZKtwDP8sxamtfB78uUs8ZcSdr0IcoAPG5HfqdIVUVuW1kdjosflWjTYU1lUnOpNiGnSjas%2BmLceV1GL2OeRUzVn2nQiXvN%2BYtIsETkUQyjmQiji1HzzAmAtk%2FGPSqFoPX8fV54D6yVAw04NzhIHxeXFLFweUU6dGwTH2ya%2BMc0AOwmAW9Xc8uWyaO6RpSqwaQXUaiP%2BEesQnL50CrDxiM51a3RIUiAR5IOweZ5rnaTl1i2kec48p9hCXQPQFyFUT%2FfZQ7jUVxzM39GA6TTTebh0AUX%2FkZUdikhRfIyNZbSQvNXjI4XN0sGdQobaYacnZRGaXXuXPBRQWyyFOd9NkFgBNiRtjrNU9w0Q3h3UZmrOrMNv%2BjcUbTVPpzuopOBn3bnS7Kz40SIyPfiwrOJ5E7VtgilB5aT57hc%2FavR4RCdhwOkh89sl7smMcAjIfeM1AGNYYyAXkZFgmhgZ%2Bmp9yLEOu9jyZvBVMp80V%2F4tC%2Bs92zG%2B92mP8dRj8eKJNs%2Bx2PJRc6M%2FKHeOHTc3qoI9l8SQ9YcYguaikzNQ4tIc8cZ94KN7A7RbEh%2Fl4SjidVDp9ONVN2y9%2FeqIHswMR6xeKzUwesMU39ur8ZR4fsR9bcRp36wlmmBbi4M%2B6E5uhKE9Qwh%2BT7zgY6pgG1Sy9oBbJYvHKUy7UEyZyAOIdiO8qcH%2FDjBHyriB%2B%2BEFt5ZRs8fVNeUgvcqK3Wmxbb9lDCqNi5aHG6o1FenMDu9By0L73zUld9zhLEFQJyAB7qk%2BBIDFX7%2FI1YjK6iY3Te7IVZDeSNwWMky5iAc60%2BhMaRblejgn509gYkDUvcvO4BArndoYlAGCW0A%2FCoiQBp5LQEF%2FNCoNB4wAguDOn1qpkAeCFt&X-Amz-Signature=a5eb65a610c36f02738cc5fd0fca16050b8111805bf88714e8fc86dc73070a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMGL655%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6Szigt9PPZX8JLYQs5j9NC4zzAzxyo7Zi1OTxiI7X2AiBANw4ptBW6aY%2FgvqVk2FzrfXbaMaWTviCajgMbl4SpeSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FQrrLBDlrWsaWTZKtwDP8sxamtfB78uUs8ZcSdr0IcoAPG5HfqdIVUVuW1kdjosflWjTYU1lUnOpNiGnSjas%2BmLceV1GL2OeRUzVn2nQiXvN%2BYtIsETkUQyjmQiji1HzzAmAtk%2FGPSqFoPX8fV54D6yVAw04NzhIHxeXFLFweUU6dGwTH2ya%2BMc0AOwmAW9Xc8uWyaO6RpSqwaQXUaiP%2BEesQnL50CrDxiM51a3RIUiAR5IOweZ5rnaTl1i2kec48p9hCXQPQFyFUT%2FfZQ7jUVxzM39GA6TTTebh0AUX%2FkZUdikhRfIyNZbSQvNXjI4XN0sGdQobaYacnZRGaXXuXPBRQWyyFOd9NkFgBNiRtjrNU9w0Q3h3UZmrOrMNv%2BjcUbTVPpzuopOBn3bnS7Kz40SIyPfiwrOJ5E7VtgilB5aT57hc%2FavR4RCdhwOkh89sl7smMcAjIfeM1AGNYYyAXkZFgmhgZ%2Bmp9yLEOu9jyZvBVMp80V%2F4tC%2Bs92zG%2B92mP8dRj8eKJNs%2Bx2PJRc6M%2FKHeOHTc3qoI9l8SQ9YcYguaikzNQ4tIc8cZ94KN7A7RbEh%2Fl4SjidVDp9ONVN2y9%2FeqIHswMR6xeKzUwesMU39ur8ZR4fsR9bcRp36wlmmBbi4M%2B6E5uhKE9Qwh%2BT7zgY6pgG1Sy9oBbJYvHKUy7UEyZyAOIdiO8qcH%2FDjBHyriB%2B%2BEFt5ZRs8fVNeUgvcqK3Wmxbb9lDCqNi5aHG6o1FenMDu9By0L73zUld9zhLEFQJyAB7qk%2BBIDFX7%2FI1YjK6iY3Te7IVZDeSNwWMky5iAc60%2BhMaRblejgn509gYkDUvcvO4BArndoYlAGCW0A%2FCoiQBp5LQEF%2FNCoNB4wAguDOn1qpkAeCFt&X-Amz-Signature=825aa4d748a3edec36c5636795ac81ba889127c6999a7ed5cb6936678874bdcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMGL655%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6Szigt9PPZX8JLYQs5j9NC4zzAzxyo7Zi1OTxiI7X2AiBANw4ptBW6aY%2FgvqVk2FzrfXbaMaWTviCajgMbl4SpeSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FQrrLBDlrWsaWTZKtwDP8sxamtfB78uUs8ZcSdr0IcoAPG5HfqdIVUVuW1kdjosflWjTYU1lUnOpNiGnSjas%2BmLceV1GL2OeRUzVn2nQiXvN%2BYtIsETkUQyjmQiji1HzzAmAtk%2FGPSqFoPX8fV54D6yVAw04NzhIHxeXFLFweUU6dGwTH2ya%2BMc0AOwmAW9Xc8uWyaO6RpSqwaQXUaiP%2BEesQnL50CrDxiM51a3RIUiAR5IOweZ5rnaTl1i2kec48p9hCXQPQFyFUT%2FfZQ7jUVxzM39GA6TTTebh0AUX%2FkZUdikhRfIyNZbSQvNXjI4XN0sGdQobaYacnZRGaXXuXPBRQWyyFOd9NkFgBNiRtjrNU9w0Q3h3UZmrOrMNv%2BjcUbTVPpzuopOBn3bnS7Kz40SIyPfiwrOJ5E7VtgilB5aT57hc%2FavR4RCdhwOkh89sl7smMcAjIfeM1AGNYYyAXkZFgmhgZ%2Bmp9yLEOu9jyZvBVMp80V%2F4tC%2Bs92zG%2B92mP8dRj8eKJNs%2Bx2PJRc6M%2FKHeOHTc3qoI9l8SQ9YcYguaikzNQ4tIc8cZ94KN7A7RbEh%2Fl4SjidVDp9ONVN2y9%2FeqIHswMR6xeKzUwesMU39ur8ZR4fsR9bcRp36wlmmBbi4M%2B6E5uhKE9Qwh%2BT7zgY6pgG1Sy9oBbJYvHKUy7UEyZyAOIdiO8qcH%2FDjBHyriB%2B%2BEFt5ZRs8fVNeUgvcqK3Wmxbb9lDCqNi5aHG6o1FenMDu9By0L73zUld9zhLEFQJyAB7qk%2BBIDFX7%2FI1YjK6iY3Te7IVZDeSNwWMky5iAc60%2BhMaRblejgn509gYkDUvcvO4BArndoYlAGCW0A%2FCoiQBp5LQEF%2FNCoNB4wAguDOn1qpkAeCFt&X-Amz-Signature=76630db5a3286bec5ce614952d27351f2375e23f2c397782a5d66f31375100b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMGL655%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6Szigt9PPZX8JLYQs5j9NC4zzAzxyo7Zi1OTxiI7X2AiBANw4ptBW6aY%2FgvqVk2FzrfXbaMaWTviCajgMbl4SpeSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FQrrLBDlrWsaWTZKtwDP8sxamtfB78uUs8ZcSdr0IcoAPG5HfqdIVUVuW1kdjosflWjTYU1lUnOpNiGnSjas%2BmLceV1GL2OeRUzVn2nQiXvN%2BYtIsETkUQyjmQiji1HzzAmAtk%2FGPSqFoPX8fV54D6yVAw04NzhIHxeXFLFweUU6dGwTH2ya%2BMc0AOwmAW9Xc8uWyaO6RpSqwaQXUaiP%2BEesQnL50CrDxiM51a3RIUiAR5IOweZ5rnaTl1i2kec48p9hCXQPQFyFUT%2FfZQ7jUVxzM39GA6TTTebh0AUX%2FkZUdikhRfIyNZbSQvNXjI4XN0sGdQobaYacnZRGaXXuXPBRQWyyFOd9NkFgBNiRtjrNU9w0Q3h3UZmrOrMNv%2BjcUbTVPpzuopOBn3bnS7Kz40SIyPfiwrOJ5E7VtgilB5aT57hc%2FavR4RCdhwOkh89sl7smMcAjIfeM1AGNYYyAXkZFgmhgZ%2Bmp9yLEOu9jyZvBVMp80V%2F4tC%2Bs92zG%2B92mP8dRj8eKJNs%2Bx2PJRc6M%2FKHeOHTc3qoI9l8SQ9YcYguaikzNQ4tIc8cZ94KN7A7RbEh%2Fl4SjidVDp9ONVN2y9%2FeqIHswMR6xeKzUwesMU39ur8ZR4fsR9bcRp36wlmmBbi4M%2B6E5uhKE9Qwh%2BT7zgY6pgG1Sy9oBbJYvHKUy7UEyZyAOIdiO8qcH%2FDjBHyriB%2B%2BEFt5ZRs8fVNeUgvcqK3Wmxbb9lDCqNi5aHG6o1FenMDu9By0L73zUld9zhLEFQJyAB7qk%2BBIDFX7%2FI1YjK6iY3Te7IVZDeSNwWMky5iAc60%2BhMaRblejgn509gYkDUvcvO4BArndoYlAGCW0A%2FCoiQBp5LQEF%2FNCoNB4wAguDOn1qpkAeCFt&X-Amz-Signature=05b8b9828a0a42aef79ccbce682fc13c27f0f1d70586e2b8f30f0ccb632b331f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMGL655%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6Szigt9PPZX8JLYQs5j9NC4zzAzxyo7Zi1OTxiI7X2AiBANw4ptBW6aY%2FgvqVk2FzrfXbaMaWTviCajgMbl4SpeSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FQrrLBDlrWsaWTZKtwDP8sxamtfB78uUs8ZcSdr0IcoAPG5HfqdIVUVuW1kdjosflWjTYU1lUnOpNiGnSjas%2BmLceV1GL2OeRUzVn2nQiXvN%2BYtIsETkUQyjmQiji1HzzAmAtk%2FGPSqFoPX8fV54D6yVAw04NzhIHxeXFLFweUU6dGwTH2ya%2BMc0AOwmAW9Xc8uWyaO6RpSqwaQXUaiP%2BEesQnL50CrDxiM51a3RIUiAR5IOweZ5rnaTl1i2kec48p9hCXQPQFyFUT%2FfZQ7jUVxzM39GA6TTTebh0AUX%2FkZUdikhRfIyNZbSQvNXjI4XN0sGdQobaYacnZRGaXXuXPBRQWyyFOd9NkFgBNiRtjrNU9w0Q3h3UZmrOrMNv%2BjcUbTVPpzuopOBn3bnS7Kz40SIyPfiwrOJ5E7VtgilB5aT57hc%2FavR4RCdhwOkh89sl7smMcAjIfeM1AGNYYyAXkZFgmhgZ%2Bmp9yLEOu9jyZvBVMp80V%2F4tC%2Bs92zG%2B92mP8dRj8eKJNs%2Bx2PJRc6M%2FKHeOHTc3qoI9l8SQ9YcYguaikzNQ4tIc8cZ94KN7A7RbEh%2Fl4SjidVDp9ONVN2y9%2FeqIHswMR6xeKzUwesMU39ur8ZR4fsR9bcRp36wlmmBbi4M%2B6E5uhKE9Qwh%2BT7zgY6pgG1Sy9oBbJYvHKUy7UEyZyAOIdiO8qcH%2FDjBHyriB%2B%2BEFt5ZRs8fVNeUgvcqK3Wmxbb9lDCqNi5aHG6o1FenMDu9By0L73zUld9zhLEFQJyAB7qk%2BBIDFX7%2FI1YjK6iY3Te7IVZDeSNwWMky5iAc60%2BhMaRblejgn509gYkDUvcvO4BArndoYlAGCW0A%2FCoiQBp5LQEF%2FNCoNB4wAguDOn1qpkAeCFt&X-Amz-Signature=ba7ff5ae38cbf01e3a03173dc8dcfc13d2352f639f38caa9291baccf458eee41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMGL655%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6Szigt9PPZX8JLYQs5j9NC4zzAzxyo7Zi1OTxiI7X2AiBANw4ptBW6aY%2FgvqVk2FzrfXbaMaWTviCajgMbl4SpeSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FQrrLBDlrWsaWTZKtwDP8sxamtfB78uUs8ZcSdr0IcoAPG5HfqdIVUVuW1kdjosflWjTYU1lUnOpNiGnSjas%2BmLceV1GL2OeRUzVn2nQiXvN%2BYtIsETkUQyjmQiji1HzzAmAtk%2FGPSqFoPX8fV54D6yVAw04NzhIHxeXFLFweUU6dGwTH2ya%2BMc0AOwmAW9Xc8uWyaO6RpSqwaQXUaiP%2BEesQnL50CrDxiM51a3RIUiAR5IOweZ5rnaTl1i2kec48p9hCXQPQFyFUT%2FfZQ7jUVxzM39GA6TTTebh0AUX%2FkZUdikhRfIyNZbSQvNXjI4XN0sGdQobaYacnZRGaXXuXPBRQWyyFOd9NkFgBNiRtjrNU9w0Q3h3UZmrOrMNv%2BjcUbTVPpzuopOBn3bnS7Kz40SIyPfiwrOJ5E7VtgilB5aT57hc%2FavR4RCdhwOkh89sl7smMcAjIfeM1AGNYYyAXkZFgmhgZ%2Bmp9yLEOu9jyZvBVMp80V%2F4tC%2Bs92zG%2B92mP8dRj8eKJNs%2Bx2PJRc6M%2FKHeOHTc3qoI9l8SQ9YcYguaikzNQ4tIc8cZ94KN7A7RbEh%2Fl4SjidVDp9ONVN2y9%2FeqIHswMR6xeKzUwesMU39ur8ZR4fsR9bcRp36wlmmBbi4M%2B6E5uhKE9Qwh%2BT7zgY6pgG1Sy9oBbJYvHKUy7UEyZyAOIdiO8qcH%2FDjBHyriB%2B%2BEFt5ZRs8fVNeUgvcqK3Wmxbb9lDCqNi5aHG6o1FenMDu9By0L73zUld9zhLEFQJyAB7qk%2BBIDFX7%2FI1YjK6iY3Te7IVZDeSNwWMky5iAc60%2BhMaRblejgn509gYkDUvcvO4BArndoYlAGCW0A%2FCoiQBp5LQEF%2FNCoNB4wAguDOn1qpkAeCFt&X-Amz-Signature=36bd475b6dbefd2f6c77824ebd1407b98c4e3be23667f7989d6fd08e5557e864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
