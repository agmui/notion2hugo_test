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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4UNA5J%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvvVeLAwLucZjwzN1OIr7U8%2FRelHK0nc8qblALo7OopAiAJaUZcSRm6Inu3b%2B1B7vd2HnQl%2FMP4u%2FM%2FVxXOBEVtZyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAZurFTAzEeRQ1qqKtwDdkNPWpIW7lmIJ0AsfWecOWCdaB3Y8UBQeygflbsPaiMjhgv5eoxYxvdnd4%2BPs%2BtiuaiILdfWP%2B%2BA30LZsAPmX6H0G8G6M4eP2dvcnfBX5VE7yvCduE73J2KWwybEnD%2BHmOIUk5OCAWvpU9MTZEqG24aPO5NOLv6jYN%2BVgOiv2O6Y9alMQVg43mGRqYkYgFhtMrY%2BzMyzx0Qg%2BvQUz%2FYgvpbw63Nfl03mWC%2Bv5jTXfltwBAsCmsjdTYraxb%2B3alBxFjxO2MjbTtu%2Bh9Dy8Rp3SHcGo0MP5sizAHRvnckC1ZuH4XRTssqDT2ZMnVC1QKE0aUHNV4HJ2dMsrptbwHxSjmKUED2wzj5%2FRYQgvUA%2B%2BdTRKM91zGMjm4Orj0UfM16%2Fy3nXpnp8jjARvnxz0lwx4wCzdUa7PXZ%2BoAU66wgLGIrUu2FXxb1VXlrhJMyC1u6VtANc8He83JFSblSBvz0xXRLZiwE5wWFiYFxPyWu1W8BlRYpg%2FYrdgbU1uFo20MqVY7CILEX4mqYtXItJUjzGTN25OLiu5s2ALzr4xHxTrcJXOT9Gvw249pOcO5iUf1DLDIX5%2B5hdKWUNW8fAy5DjuAH5m2q04ynqTOxKOKHZvpvU9nA3AOLQ4gOe88Qw7Na9wwY6pgGEo6yPuHxAq7Ni1CpcphnG4rWe%2ByWIYY2HASOlUMsrx6AHfiJEqcM1C2q9wpKFmfZN3D9D5PYy7lnjl9XezgZZuTHVpI9nR98uCxhc7sBIlrX7sR68hTK0WeFjNZ0rh5GvNKRqB1PT84Tn6Z7LheN8bHo9JUdNNiWzMEexyIk7vCQ4tUSLXxikLFGPM%2FFUTypbbgEh%2F6ko0GxIDJ2kpyd8cBUtg6Np&X-Amz-Signature=7ed2085a116e8b582cc412e80697fff4c5f85b07e79dbe7031ee81129cf13827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4UNA5J%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvvVeLAwLucZjwzN1OIr7U8%2FRelHK0nc8qblALo7OopAiAJaUZcSRm6Inu3b%2B1B7vd2HnQl%2FMP4u%2FM%2FVxXOBEVtZyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAZurFTAzEeRQ1qqKtwDdkNPWpIW7lmIJ0AsfWecOWCdaB3Y8UBQeygflbsPaiMjhgv5eoxYxvdnd4%2BPs%2BtiuaiILdfWP%2B%2BA30LZsAPmX6H0G8G6M4eP2dvcnfBX5VE7yvCduE73J2KWwybEnD%2BHmOIUk5OCAWvpU9MTZEqG24aPO5NOLv6jYN%2BVgOiv2O6Y9alMQVg43mGRqYkYgFhtMrY%2BzMyzx0Qg%2BvQUz%2FYgvpbw63Nfl03mWC%2Bv5jTXfltwBAsCmsjdTYraxb%2B3alBxFjxO2MjbTtu%2Bh9Dy8Rp3SHcGo0MP5sizAHRvnckC1ZuH4XRTssqDT2ZMnVC1QKE0aUHNV4HJ2dMsrptbwHxSjmKUED2wzj5%2FRYQgvUA%2B%2BdTRKM91zGMjm4Orj0UfM16%2Fy3nXpnp8jjARvnxz0lwx4wCzdUa7PXZ%2BoAU66wgLGIrUu2FXxb1VXlrhJMyC1u6VtANc8He83JFSblSBvz0xXRLZiwE5wWFiYFxPyWu1W8BlRYpg%2FYrdgbU1uFo20MqVY7CILEX4mqYtXItJUjzGTN25OLiu5s2ALzr4xHxTrcJXOT9Gvw249pOcO5iUf1DLDIX5%2B5hdKWUNW8fAy5DjuAH5m2q04ynqTOxKOKHZvpvU9nA3AOLQ4gOe88Qw7Na9wwY6pgGEo6yPuHxAq7Ni1CpcphnG4rWe%2ByWIYY2HASOlUMsrx6AHfiJEqcM1C2q9wpKFmfZN3D9D5PYy7lnjl9XezgZZuTHVpI9nR98uCxhc7sBIlrX7sR68hTK0WeFjNZ0rh5GvNKRqB1PT84Tn6Z7LheN8bHo9JUdNNiWzMEexyIk7vCQ4tUSLXxikLFGPM%2FFUTypbbgEh%2F6ko0GxIDJ2kpyd8cBUtg6Np&X-Amz-Signature=e50702021d70b3cfa62c7d4fe5763c44d618b27ffe7b9bf78ea732799aa3bd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4UNA5J%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvvVeLAwLucZjwzN1OIr7U8%2FRelHK0nc8qblALo7OopAiAJaUZcSRm6Inu3b%2B1B7vd2HnQl%2FMP4u%2FM%2FVxXOBEVtZyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAZurFTAzEeRQ1qqKtwDdkNPWpIW7lmIJ0AsfWecOWCdaB3Y8UBQeygflbsPaiMjhgv5eoxYxvdnd4%2BPs%2BtiuaiILdfWP%2B%2BA30LZsAPmX6H0G8G6M4eP2dvcnfBX5VE7yvCduE73J2KWwybEnD%2BHmOIUk5OCAWvpU9MTZEqG24aPO5NOLv6jYN%2BVgOiv2O6Y9alMQVg43mGRqYkYgFhtMrY%2BzMyzx0Qg%2BvQUz%2FYgvpbw63Nfl03mWC%2Bv5jTXfltwBAsCmsjdTYraxb%2B3alBxFjxO2MjbTtu%2Bh9Dy8Rp3SHcGo0MP5sizAHRvnckC1ZuH4XRTssqDT2ZMnVC1QKE0aUHNV4HJ2dMsrptbwHxSjmKUED2wzj5%2FRYQgvUA%2B%2BdTRKM91zGMjm4Orj0UfM16%2Fy3nXpnp8jjARvnxz0lwx4wCzdUa7PXZ%2BoAU66wgLGIrUu2FXxb1VXlrhJMyC1u6VtANc8He83JFSblSBvz0xXRLZiwE5wWFiYFxPyWu1W8BlRYpg%2FYrdgbU1uFo20MqVY7CILEX4mqYtXItJUjzGTN25OLiu5s2ALzr4xHxTrcJXOT9Gvw249pOcO5iUf1DLDIX5%2B5hdKWUNW8fAy5DjuAH5m2q04ynqTOxKOKHZvpvU9nA3AOLQ4gOe88Qw7Na9wwY6pgGEo6yPuHxAq7Ni1CpcphnG4rWe%2ByWIYY2HASOlUMsrx6AHfiJEqcM1C2q9wpKFmfZN3D9D5PYy7lnjl9XezgZZuTHVpI9nR98uCxhc7sBIlrX7sR68hTK0WeFjNZ0rh5GvNKRqB1PT84Tn6Z7LheN8bHo9JUdNNiWzMEexyIk7vCQ4tUSLXxikLFGPM%2FFUTypbbgEh%2F6ko0GxIDJ2kpyd8cBUtg6Np&X-Amz-Signature=1beb56cd44074b5f403eef94528651f48b494d9059265da46ad9ff644e9d7b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4UNA5J%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvvVeLAwLucZjwzN1OIr7U8%2FRelHK0nc8qblALo7OopAiAJaUZcSRm6Inu3b%2B1B7vd2HnQl%2FMP4u%2FM%2FVxXOBEVtZyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAZurFTAzEeRQ1qqKtwDdkNPWpIW7lmIJ0AsfWecOWCdaB3Y8UBQeygflbsPaiMjhgv5eoxYxvdnd4%2BPs%2BtiuaiILdfWP%2B%2BA30LZsAPmX6H0G8G6M4eP2dvcnfBX5VE7yvCduE73J2KWwybEnD%2BHmOIUk5OCAWvpU9MTZEqG24aPO5NOLv6jYN%2BVgOiv2O6Y9alMQVg43mGRqYkYgFhtMrY%2BzMyzx0Qg%2BvQUz%2FYgvpbw63Nfl03mWC%2Bv5jTXfltwBAsCmsjdTYraxb%2B3alBxFjxO2MjbTtu%2Bh9Dy8Rp3SHcGo0MP5sizAHRvnckC1ZuH4XRTssqDT2ZMnVC1QKE0aUHNV4HJ2dMsrptbwHxSjmKUED2wzj5%2FRYQgvUA%2B%2BdTRKM91zGMjm4Orj0UfM16%2Fy3nXpnp8jjARvnxz0lwx4wCzdUa7PXZ%2BoAU66wgLGIrUu2FXxb1VXlrhJMyC1u6VtANc8He83JFSblSBvz0xXRLZiwE5wWFiYFxPyWu1W8BlRYpg%2FYrdgbU1uFo20MqVY7CILEX4mqYtXItJUjzGTN25OLiu5s2ALzr4xHxTrcJXOT9Gvw249pOcO5iUf1DLDIX5%2B5hdKWUNW8fAy5DjuAH5m2q04ynqTOxKOKHZvpvU9nA3AOLQ4gOe88Qw7Na9wwY6pgGEo6yPuHxAq7Ni1CpcphnG4rWe%2ByWIYY2HASOlUMsrx6AHfiJEqcM1C2q9wpKFmfZN3D9D5PYy7lnjl9XezgZZuTHVpI9nR98uCxhc7sBIlrX7sR68hTK0WeFjNZ0rh5GvNKRqB1PT84Tn6Z7LheN8bHo9JUdNNiWzMEexyIk7vCQ4tUSLXxikLFGPM%2FFUTypbbgEh%2F6ko0GxIDJ2kpyd8cBUtg6Np&X-Amz-Signature=bb546294cb3f3a26ab4c10e7844e8b0808a957336fbad943ca6aaf6a87cffb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4UNA5J%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvvVeLAwLucZjwzN1OIr7U8%2FRelHK0nc8qblALo7OopAiAJaUZcSRm6Inu3b%2B1B7vd2HnQl%2FMP4u%2FM%2FVxXOBEVtZyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAZurFTAzEeRQ1qqKtwDdkNPWpIW7lmIJ0AsfWecOWCdaB3Y8UBQeygflbsPaiMjhgv5eoxYxvdnd4%2BPs%2BtiuaiILdfWP%2B%2BA30LZsAPmX6H0G8G6M4eP2dvcnfBX5VE7yvCduE73J2KWwybEnD%2BHmOIUk5OCAWvpU9MTZEqG24aPO5NOLv6jYN%2BVgOiv2O6Y9alMQVg43mGRqYkYgFhtMrY%2BzMyzx0Qg%2BvQUz%2FYgvpbw63Nfl03mWC%2Bv5jTXfltwBAsCmsjdTYraxb%2B3alBxFjxO2MjbTtu%2Bh9Dy8Rp3SHcGo0MP5sizAHRvnckC1ZuH4XRTssqDT2ZMnVC1QKE0aUHNV4HJ2dMsrptbwHxSjmKUED2wzj5%2FRYQgvUA%2B%2BdTRKM91zGMjm4Orj0UfM16%2Fy3nXpnp8jjARvnxz0lwx4wCzdUa7PXZ%2BoAU66wgLGIrUu2FXxb1VXlrhJMyC1u6VtANc8He83JFSblSBvz0xXRLZiwE5wWFiYFxPyWu1W8BlRYpg%2FYrdgbU1uFo20MqVY7CILEX4mqYtXItJUjzGTN25OLiu5s2ALzr4xHxTrcJXOT9Gvw249pOcO5iUf1DLDIX5%2B5hdKWUNW8fAy5DjuAH5m2q04ynqTOxKOKHZvpvU9nA3AOLQ4gOe88Qw7Na9wwY6pgGEo6yPuHxAq7Ni1CpcphnG4rWe%2ByWIYY2HASOlUMsrx6AHfiJEqcM1C2q9wpKFmfZN3D9D5PYy7lnjl9XezgZZuTHVpI9nR98uCxhc7sBIlrX7sR68hTK0WeFjNZ0rh5GvNKRqB1PT84Tn6Z7LheN8bHo9JUdNNiWzMEexyIk7vCQ4tUSLXxikLFGPM%2FFUTypbbgEh%2F6ko0GxIDJ2kpyd8cBUtg6Np&X-Amz-Signature=7cd056465af6010aa31008c79a889d66a3c6f4e67cf8fab7f7f828b00dfd8101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4UNA5J%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvvVeLAwLucZjwzN1OIr7U8%2FRelHK0nc8qblALo7OopAiAJaUZcSRm6Inu3b%2B1B7vd2HnQl%2FMP4u%2FM%2FVxXOBEVtZyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAZurFTAzEeRQ1qqKtwDdkNPWpIW7lmIJ0AsfWecOWCdaB3Y8UBQeygflbsPaiMjhgv5eoxYxvdnd4%2BPs%2BtiuaiILdfWP%2B%2BA30LZsAPmX6H0G8G6M4eP2dvcnfBX5VE7yvCduE73J2KWwybEnD%2BHmOIUk5OCAWvpU9MTZEqG24aPO5NOLv6jYN%2BVgOiv2O6Y9alMQVg43mGRqYkYgFhtMrY%2BzMyzx0Qg%2BvQUz%2FYgvpbw63Nfl03mWC%2Bv5jTXfltwBAsCmsjdTYraxb%2B3alBxFjxO2MjbTtu%2Bh9Dy8Rp3SHcGo0MP5sizAHRvnckC1ZuH4XRTssqDT2ZMnVC1QKE0aUHNV4HJ2dMsrptbwHxSjmKUED2wzj5%2FRYQgvUA%2B%2BdTRKM91zGMjm4Orj0UfM16%2Fy3nXpnp8jjARvnxz0lwx4wCzdUa7PXZ%2BoAU66wgLGIrUu2FXxb1VXlrhJMyC1u6VtANc8He83JFSblSBvz0xXRLZiwE5wWFiYFxPyWu1W8BlRYpg%2FYrdgbU1uFo20MqVY7CILEX4mqYtXItJUjzGTN25OLiu5s2ALzr4xHxTrcJXOT9Gvw249pOcO5iUf1DLDIX5%2B5hdKWUNW8fAy5DjuAH5m2q04ynqTOxKOKHZvpvU9nA3AOLQ4gOe88Qw7Na9wwY6pgGEo6yPuHxAq7Ni1CpcphnG4rWe%2ByWIYY2HASOlUMsrx6AHfiJEqcM1C2q9wpKFmfZN3D9D5PYy7lnjl9XezgZZuTHVpI9nR98uCxhc7sBIlrX7sR68hTK0WeFjNZ0rh5GvNKRqB1PT84Tn6Z7LheN8bHo9JUdNNiWzMEexyIk7vCQ4tUSLXxikLFGPM%2FFUTypbbgEh%2F6ko0GxIDJ2kpyd8cBUtg6Np&X-Amz-Signature=8459d4933ada3493626f00456c5b50f919364a4f94c425e38e1e39dd42a59a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4UNA5J%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvvVeLAwLucZjwzN1OIr7U8%2FRelHK0nc8qblALo7OopAiAJaUZcSRm6Inu3b%2B1B7vd2HnQl%2FMP4u%2FM%2FVxXOBEVtZyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAZurFTAzEeRQ1qqKtwDdkNPWpIW7lmIJ0AsfWecOWCdaB3Y8UBQeygflbsPaiMjhgv5eoxYxvdnd4%2BPs%2BtiuaiILdfWP%2B%2BA30LZsAPmX6H0G8G6M4eP2dvcnfBX5VE7yvCduE73J2KWwybEnD%2BHmOIUk5OCAWvpU9MTZEqG24aPO5NOLv6jYN%2BVgOiv2O6Y9alMQVg43mGRqYkYgFhtMrY%2BzMyzx0Qg%2BvQUz%2FYgvpbw63Nfl03mWC%2Bv5jTXfltwBAsCmsjdTYraxb%2B3alBxFjxO2MjbTtu%2Bh9Dy8Rp3SHcGo0MP5sizAHRvnckC1ZuH4XRTssqDT2ZMnVC1QKE0aUHNV4HJ2dMsrptbwHxSjmKUED2wzj5%2FRYQgvUA%2B%2BdTRKM91zGMjm4Orj0UfM16%2Fy3nXpnp8jjARvnxz0lwx4wCzdUa7PXZ%2BoAU66wgLGIrUu2FXxb1VXlrhJMyC1u6VtANc8He83JFSblSBvz0xXRLZiwE5wWFiYFxPyWu1W8BlRYpg%2FYrdgbU1uFo20MqVY7CILEX4mqYtXItJUjzGTN25OLiu5s2ALzr4xHxTrcJXOT9Gvw249pOcO5iUf1DLDIX5%2B5hdKWUNW8fAy5DjuAH5m2q04ynqTOxKOKHZvpvU9nA3AOLQ4gOe88Qw7Na9wwY6pgGEo6yPuHxAq7Ni1CpcphnG4rWe%2ByWIYY2HASOlUMsrx6AHfiJEqcM1C2q9wpKFmfZN3D9D5PYy7lnjl9XezgZZuTHVpI9nR98uCxhc7sBIlrX7sR68hTK0WeFjNZ0rh5GvNKRqB1PT84Tn6Z7LheN8bHo9JUdNNiWzMEexyIk7vCQ4tUSLXxikLFGPM%2FFUTypbbgEh%2F6ko0GxIDJ2kpyd8cBUtg6Np&X-Amz-Signature=9b48f093df2e80d429b8bd39adb214aac7405437adec25b7a143630d23c9d9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
