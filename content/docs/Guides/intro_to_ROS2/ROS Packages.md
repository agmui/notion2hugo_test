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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCA25VS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBsmFDdueWhc%2BFFulu%2BXEMVUSigzheyX4GW5zLYz%2F%2FZJAiAScS7sdtpZZrvG5wVrgqMoI9EII8eMSx9uGRIZoFkgVSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKvhRw1ODLrD97pMKtwDvwR3Ech%2BLhHk2hTp42dVDtoy1KiLdAZpbjb6ex9C5VmmAbyx7UwoPIkjUEFM5ZqfjsfvYIjPvJ8prSW7c60SUawRzFY0nyv3lW6Z0J%2Fr8zzEg0HTVW455ztj92OJdj279MWolsFHfYDJUwIT0e6ZfE1uKhpBQHZEAprRQPAvlO7zKb7o3PZtXgdHCIel%2BGWiboNA7LquZLZdD9mVqTUdsbRo0MOwHzBQs6MB7ZtgHH2L0gjgNQxnQbYvTvgpk51gIt%2BbmwO6nvZaGpx01Nody6bF%2FtF0aioAcFYe%2FfFw4p1kS4ZYbeFpg7gkvvWeEHf1k0tWqAD4nsxsvl9VxCEVCsGDGlbNz54GSwqCgpPLV5BJvZqU9l%2BtQFgh7mwZKYoe0rxKxNRnVP9%2BJnBIoqawqVwhWWjyR5rzfr2jFrckscE4KBlkomDqVJoBzEumQpRBVPmtroWZmw2qctI2lB1FxzUtaGZEgSN47VMiIe0n6EOsSN2XjGaFOchKntuvuQcAQBL1XI%2BSw3%2FrkYEWrZtRdQuN2KGugLue1iNNZ8fqjqKUMVoQwEPXWeHmlsUkDY%2F%2F1BcAo2Kji1Ee1e8s%2BVrg%2FEczhrV9JxHI5%2FEuK7jrRjgaD65bi8v%2FeIuJZPAwxcqxwwY6pgG3w%2FfcoUKA4wAqe6Zy%2F4Wxt1yLDgREN5I4oIF0P%2FXM3%2FW9Tzic7ShhspmnxOHW7HjK0aSC8hPHtldKxuMl4q9%2BzEt%2FDFW%2FAjaljibF5eN5urv4w5b5C4fzEYZBWxhlakyVTuBRO0%2FeW7CnZjXod2HnTzJUpv6SCdF50oJRSf3Qv%2BQKlufFNqUHmXE%2BwXiXq2hztrjWJRddR45XQKEBDr0Hc7VuBtXt&X-Amz-Signature=6e05ad8e2bb6fa5d7a57448cad2a5d944bb204f3587e2b006c536f41bdb4e4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCA25VS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBsmFDdueWhc%2BFFulu%2BXEMVUSigzheyX4GW5zLYz%2F%2FZJAiAScS7sdtpZZrvG5wVrgqMoI9EII8eMSx9uGRIZoFkgVSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKvhRw1ODLrD97pMKtwDvwR3Ech%2BLhHk2hTp42dVDtoy1KiLdAZpbjb6ex9C5VmmAbyx7UwoPIkjUEFM5ZqfjsfvYIjPvJ8prSW7c60SUawRzFY0nyv3lW6Z0J%2Fr8zzEg0HTVW455ztj92OJdj279MWolsFHfYDJUwIT0e6ZfE1uKhpBQHZEAprRQPAvlO7zKb7o3PZtXgdHCIel%2BGWiboNA7LquZLZdD9mVqTUdsbRo0MOwHzBQs6MB7ZtgHH2L0gjgNQxnQbYvTvgpk51gIt%2BbmwO6nvZaGpx01Nody6bF%2FtF0aioAcFYe%2FfFw4p1kS4ZYbeFpg7gkvvWeEHf1k0tWqAD4nsxsvl9VxCEVCsGDGlbNz54GSwqCgpPLV5BJvZqU9l%2BtQFgh7mwZKYoe0rxKxNRnVP9%2BJnBIoqawqVwhWWjyR5rzfr2jFrckscE4KBlkomDqVJoBzEumQpRBVPmtroWZmw2qctI2lB1FxzUtaGZEgSN47VMiIe0n6EOsSN2XjGaFOchKntuvuQcAQBL1XI%2BSw3%2FrkYEWrZtRdQuN2KGugLue1iNNZ8fqjqKUMVoQwEPXWeHmlsUkDY%2F%2F1BcAo2Kji1Ee1e8s%2BVrg%2FEczhrV9JxHI5%2FEuK7jrRjgaD65bi8v%2FeIuJZPAwxcqxwwY6pgG3w%2FfcoUKA4wAqe6Zy%2F4Wxt1yLDgREN5I4oIF0P%2FXM3%2FW9Tzic7ShhspmnxOHW7HjK0aSC8hPHtldKxuMl4q9%2BzEt%2FDFW%2FAjaljibF5eN5urv4w5b5C4fzEYZBWxhlakyVTuBRO0%2FeW7CnZjXod2HnTzJUpv6SCdF50oJRSf3Qv%2BQKlufFNqUHmXE%2BwXiXq2hztrjWJRddR45XQKEBDr0Hc7VuBtXt&X-Amz-Signature=1beaa08b508a0e2e1f5a8d586de274c220839f517ffa39463622ccd44c0f49a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCA25VS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBsmFDdueWhc%2BFFulu%2BXEMVUSigzheyX4GW5zLYz%2F%2FZJAiAScS7sdtpZZrvG5wVrgqMoI9EII8eMSx9uGRIZoFkgVSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKvhRw1ODLrD97pMKtwDvwR3Ech%2BLhHk2hTp42dVDtoy1KiLdAZpbjb6ex9C5VmmAbyx7UwoPIkjUEFM5ZqfjsfvYIjPvJ8prSW7c60SUawRzFY0nyv3lW6Z0J%2Fr8zzEg0HTVW455ztj92OJdj279MWolsFHfYDJUwIT0e6ZfE1uKhpBQHZEAprRQPAvlO7zKb7o3PZtXgdHCIel%2BGWiboNA7LquZLZdD9mVqTUdsbRo0MOwHzBQs6MB7ZtgHH2L0gjgNQxnQbYvTvgpk51gIt%2BbmwO6nvZaGpx01Nody6bF%2FtF0aioAcFYe%2FfFw4p1kS4ZYbeFpg7gkvvWeEHf1k0tWqAD4nsxsvl9VxCEVCsGDGlbNz54GSwqCgpPLV5BJvZqU9l%2BtQFgh7mwZKYoe0rxKxNRnVP9%2BJnBIoqawqVwhWWjyR5rzfr2jFrckscE4KBlkomDqVJoBzEumQpRBVPmtroWZmw2qctI2lB1FxzUtaGZEgSN47VMiIe0n6EOsSN2XjGaFOchKntuvuQcAQBL1XI%2BSw3%2FrkYEWrZtRdQuN2KGugLue1iNNZ8fqjqKUMVoQwEPXWeHmlsUkDY%2F%2F1BcAo2Kji1Ee1e8s%2BVrg%2FEczhrV9JxHI5%2FEuK7jrRjgaD65bi8v%2FeIuJZPAwxcqxwwY6pgG3w%2FfcoUKA4wAqe6Zy%2F4Wxt1yLDgREN5I4oIF0P%2FXM3%2FW9Tzic7ShhspmnxOHW7HjK0aSC8hPHtldKxuMl4q9%2BzEt%2FDFW%2FAjaljibF5eN5urv4w5b5C4fzEYZBWxhlakyVTuBRO0%2FeW7CnZjXod2HnTzJUpv6SCdF50oJRSf3Qv%2BQKlufFNqUHmXE%2BwXiXq2hztrjWJRddR45XQKEBDr0Hc7VuBtXt&X-Amz-Signature=4e7ffe8834aca841aa42704840cc74605500f3aeacd4b57b1cccbcd3e1447293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCA25VS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBsmFDdueWhc%2BFFulu%2BXEMVUSigzheyX4GW5zLYz%2F%2FZJAiAScS7sdtpZZrvG5wVrgqMoI9EII8eMSx9uGRIZoFkgVSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKvhRw1ODLrD97pMKtwDvwR3Ech%2BLhHk2hTp42dVDtoy1KiLdAZpbjb6ex9C5VmmAbyx7UwoPIkjUEFM5ZqfjsfvYIjPvJ8prSW7c60SUawRzFY0nyv3lW6Z0J%2Fr8zzEg0HTVW455ztj92OJdj279MWolsFHfYDJUwIT0e6ZfE1uKhpBQHZEAprRQPAvlO7zKb7o3PZtXgdHCIel%2BGWiboNA7LquZLZdD9mVqTUdsbRo0MOwHzBQs6MB7ZtgHH2L0gjgNQxnQbYvTvgpk51gIt%2BbmwO6nvZaGpx01Nody6bF%2FtF0aioAcFYe%2FfFw4p1kS4ZYbeFpg7gkvvWeEHf1k0tWqAD4nsxsvl9VxCEVCsGDGlbNz54GSwqCgpPLV5BJvZqU9l%2BtQFgh7mwZKYoe0rxKxNRnVP9%2BJnBIoqawqVwhWWjyR5rzfr2jFrckscE4KBlkomDqVJoBzEumQpRBVPmtroWZmw2qctI2lB1FxzUtaGZEgSN47VMiIe0n6EOsSN2XjGaFOchKntuvuQcAQBL1XI%2BSw3%2FrkYEWrZtRdQuN2KGugLue1iNNZ8fqjqKUMVoQwEPXWeHmlsUkDY%2F%2F1BcAo2Kji1Ee1e8s%2BVrg%2FEczhrV9JxHI5%2FEuK7jrRjgaD65bi8v%2FeIuJZPAwxcqxwwY6pgG3w%2FfcoUKA4wAqe6Zy%2F4Wxt1yLDgREN5I4oIF0P%2FXM3%2FW9Tzic7ShhspmnxOHW7HjK0aSC8hPHtldKxuMl4q9%2BzEt%2FDFW%2FAjaljibF5eN5urv4w5b5C4fzEYZBWxhlakyVTuBRO0%2FeW7CnZjXod2HnTzJUpv6SCdF50oJRSf3Qv%2BQKlufFNqUHmXE%2BwXiXq2hztrjWJRddR45XQKEBDr0Hc7VuBtXt&X-Amz-Signature=57e46a382d4f4cd75189491dd759e2a6bdd2f8292a5b62d6a63c8d6430bcc53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCA25VS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBsmFDdueWhc%2BFFulu%2BXEMVUSigzheyX4GW5zLYz%2F%2FZJAiAScS7sdtpZZrvG5wVrgqMoI9EII8eMSx9uGRIZoFkgVSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKvhRw1ODLrD97pMKtwDvwR3Ech%2BLhHk2hTp42dVDtoy1KiLdAZpbjb6ex9C5VmmAbyx7UwoPIkjUEFM5ZqfjsfvYIjPvJ8prSW7c60SUawRzFY0nyv3lW6Z0J%2Fr8zzEg0HTVW455ztj92OJdj279MWolsFHfYDJUwIT0e6ZfE1uKhpBQHZEAprRQPAvlO7zKb7o3PZtXgdHCIel%2BGWiboNA7LquZLZdD9mVqTUdsbRo0MOwHzBQs6MB7ZtgHH2L0gjgNQxnQbYvTvgpk51gIt%2BbmwO6nvZaGpx01Nody6bF%2FtF0aioAcFYe%2FfFw4p1kS4ZYbeFpg7gkvvWeEHf1k0tWqAD4nsxsvl9VxCEVCsGDGlbNz54GSwqCgpPLV5BJvZqU9l%2BtQFgh7mwZKYoe0rxKxNRnVP9%2BJnBIoqawqVwhWWjyR5rzfr2jFrckscE4KBlkomDqVJoBzEumQpRBVPmtroWZmw2qctI2lB1FxzUtaGZEgSN47VMiIe0n6EOsSN2XjGaFOchKntuvuQcAQBL1XI%2BSw3%2FrkYEWrZtRdQuN2KGugLue1iNNZ8fqjqKUMVoQwEPXWeHmlsUkDY%2F%2F1BcAo2Kji1Ee1e8s%2BVrg%2FEczhrV9JxHI5%2FEuK7jrRjgaD65bi8v%2FeIuJZPAwxcqxwwY6pgG3w%2FfcoUKA4wAqe6Zy%2F4Wxt1yLDgREN5I4oIF0P%2FXM3%2FW9Tzic7ShhspmnxOHW7HjK0aSC8hPHtldKxuMl4q9%2BzEt%2FDFW%2FAjaljibF5eN5urv4w5b5C4fzEYZBWxhlakyVTuBRO0%2FeW7CnZjXod2HnTzJUpv6SCdF50oJRSf3Qv%2BQKlufFNqUHmXE%2BwXiXq2hztrjWJRddR45XQKEBDr0Hc7VuBtXt&X-Amz-Signature=3e6c761163db66ae0fb24e32a2e974eb05b2d22860bef1f8dd1902e971ae178a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCA25VS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBsmFDdueWhc%2BFFulu%2BXEMVUSigzheyX4GW5zLYz%2F%2FZJAiAScS7sdtpZZrvG5wVrgqMoI9EII8eMSx9uGRIZoFkgVSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKvhRw1ODLrD97pMKtwDvwR3Ech%2BLhHk2hTp42dVDtoy1KiLdAZpbjb6ex9C5VmmAbyx7UwoPIkjUEFM5ZqfjsfvYIjPvJ8prSW7c60SUawRzFY0nyv3lW6Z0J%2Fr8zzEg0HTVW455ztj92OJdj279MWolsFHfYDJUwIT0e6ZfE1uKhpBQHZEAprRQPAvlO7zKb7o3PZtXgdHCIel%2BGWiboNA7LquZLZdD9mVqTUdsbRo0MOwHzBQs6MB7ZtgHH2L0gjgNQxnQbYvTvgpk51gIt%2BbmwO6nvZaGpx01Nody6bF%2FtF0aioAcFYe%2FfFw4p1kS4ZYbeFpg7gkvvWeEHf1k0tWqAD4nsxsvl9VxCEVCsGDGlbNz54GSwqCgpPLV5BJvZqU9l%2BtQFgh7mwZKYoe0rxKxNRnVP9%2BJnBIoqawqVwhWWjyR5rzfr2jFrckscE4KBlkomDqVJoBzEumQpRBVPmtroWZmw2qctI2lB1FxzUtaGZEgSN47VMiIe0n6EOsSN2XjGaFOchKntuvuQcAQBL1XI%2BSw3%2FrkYEWrZtRdQuN2KGugLue1iNNZ8fqjqKUMVoQwEPXWeHmlsUkDY%2F%2F1BcAo2Kji1Ee1e8s%2BVrg%2FEczhrV9JxHI5%2FEuK7jrRjgaD65bi8v%2FeIuJZPAwxcqxwwY6pgG3w%2FfcoUKA4wAqe6Zy%2F4Wxt1yLDgREN5I4oIF0P%2FXM3%2FW9Tzic7ShhspmnxOHW7HjK0aSC8hPHtldKxuMl4q9%2BzEt%2FDFW%2FAjaljibF5eN5urv4w5b5C4fzEYZBWxhlakyVTuBRO0%2FeW7CnZjXod2HnTzJUpv6SCdF50oJRSf3Qv%2BQKlufFNqUHmXE%2BwXiXq2hztrjWJRddR45XQKEBDr0Hc7VuBtXt&X-Amz-Signature=9c2eee20701f6c6c66c2cc77e875e2e37e24d1f0e806f22bbd241724768ce730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCA25VS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBsmFDdueWhc%2BFFulu%2BXEMVUSigzheyX4GW5zLYz%2F%2FZJAiAScS7sdtpZZrvG5wVrgqMoI9EII8eMSx9uGRIZoFkgVSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDKvhRw1ODLrD97pMKtwDvwR3Ech%2BLhHk2hTp42dVDtoy1KiLdAZpbjb6ex9C5VmmAbyx7UwoPIkjUEFM5ZqfjsfvYIjPvJ8prSW7c60SUawRzFY0nyv3lW6Z0J%2Fr8zzEg0HTVW455ztj92OJdj279MWolsFHfYDJUwIT0e6ZfE1uKhpBQHZEAprRQPAvlO7zKb7o3PZtXgdHCIel%2BGWiboNA7LquZLZdD9mVqTUdsbRo0MOwHzBQs6MB7ZtgHH2L0gjgNQxnQbYvTvgpk51gIt%2BbmwO6nvZaGpx01Nody6bF%2FtF0aioAcFYe%2FfFw4p1kS4ZYbeFpg7gkvvWeEHf1k0tWqAD4nsxsvl9VxCEVCsGDGlbNz54GSwqCgpPLV5BJvZqU9l%2BtQFgh7mwZKYoe0rxKxNRnVP9%2BJnBIoqawqVwhWWjyR5rzfr2jFrckscE4KBlkomDqVJoBzEumQpRBVPmtroWZmw2qctI2lB1FxzUtaGZEgSN47VMiIe0n6EOsSN2XjGaFOchKntuvuQcAQBL1XI%2BSw3%2FrkYEWrZtRdQuN2KGugLue1iNNZ8fqjqKUMVoQwEPXWeHmlsUkDY%2F%2F1BcAo2Kji1Ee1e8s%2BVrg%2FEczhrV9JxHI5%2FEuK7jrRjgaD65bi8v%2FeIuJZPAwxcqxwwY6pgG3w%2FfcoUKA4wAqe6Zy%2F4Wxt1yLDgREN5I4oIF0P%2FXM3%2FW9Tzic7ShhspmnxOHW7HjK0aSC8hPHtldKxuMl4q9%2BzEt%2FDFW%2FAjaljibF5eN5urv4w5b5C4fzEYZBWxhlakyVTuBRO0%2FeW7CnZjXod2HnTzJUpv6SCdF50oJRSf3Qv%2BQKlufFNqUHmXE%2BwXiXq2hztrjWJRddR45XQKEBDr0Hc7VuBtXt&X-Amz-Signature=527ca42f9854ec40fdc456ffa50a33e4e48e580a414249aaae55aaafbd2c29b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
