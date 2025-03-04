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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=167701d4e01e11327ed73ca5cb16d3ea543f646dbdc54c5c641c592936eaf9db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=ffbffd6ae8e719861457dbb10239ddc0e96e376c34609ee86c1e9495f9b700fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=27b247efbeac026bc7a921fa15f937b9408e02d74804c88e9db0066d8013386a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=c3fa7344e004fb489cb2b8027f9745d6fd08a19b7d51a7e2f0a8d5733e8b5a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=91dd8f8981b1c72407dc1da878b97dd50a1821d3a541eb3b9d38362b16fa427f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=2101a4c9ed1f65229b6106a16220de127c8118b451317b8b59f8a4b366aee00e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEXUBNF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV%2Fobv3PX1XCQ%2FUSUM%2FbEF7s8kUKhgNUeyKjJgDz5U6AiBMv7XybcPQIwT4Poor6mU8p1C17szbNfxgGU3WDCwnnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDAM9PwqybZAWWGPKtwDU2%2FMPwZ3DTBiZbWK7KIDsst1nwcgGjBK9NPTaLB1TXgR9C8d%2FkZm54WoYQv7%2B%2BPK%2BsVaUB4YgPmyXR9u%2BnVlLm5qx5dc950%2FF2CA4tcL94xM1rSkKZxdECq4CNglJ75Pk9IGqCNPdxV1iHfS2PEmhQwYz5PRMnFcUG05HM60KBlEdNdaK9MLAfOpr6Vx8muMgXczIYBQ0DH4NpO%2F5hrMptBlh7zY3ywryKZEzfnuyAfCWGmupwRV5syNr8dCDWL%2BFPX8jzeDmAH3LW7jerIE86ivbftuDdJFDz5GgE%2FQlQyKb0%2F%2Brcjs55wDjZJjreGk%2BmxPNjvJC0Fe6iCO3wNxOAgQKziofm0mWAaZXUQCXo64NoO9mU2ujIhGZoNdVnFCfKpdikKxftCxdrMxZPEd%2F6m6%2BQGbBPj2%2F%2FE9T1meH2ogKuqvS80NilbTaERLF%2BEKtK3v6%2BmjzgSK7ygNzPx8kDi4uz1RKsr2qes2d9wBr0j8S0jukPL48mgE%2B4%2FrGL%2F9MF4Vrxd7qVnJBZvmiu5YybNgEEedWqJiN6ZksP0uvAQFoGCv3bf0tduRTyOqZBxEkWpYxnGfTJ33SSD4odnRxZWMVYQvMaHQ1aQlWYrBTcZKMsHncdYdEVOyAJ4wo%2FiYvgY6pgH2rXXSc2kOdo3XH2xLSzINdoJBgxnYolyLO92mouSjIumaIurftsrdh3oGwoYyZYsSiHsrAZODpYeCJT4%2B3iYUAVhJddT1qpbzwAQsCiDzDo7SbvpXKoeeq6A51HZlCrQm4pYbf4R%2FioBM%2BvNPuXKr7tQPw%2FuSOCCS5gGXnh38mEOZSug2EfU710ctesg3BeqYJ3R6QDe4Wel5Rdiw6JZUxAsO1%2F0U&X-Amz-Signature=e87258674023b5ebd80277675de71842b7e813bb7fa8afac08c489b6efc53ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
