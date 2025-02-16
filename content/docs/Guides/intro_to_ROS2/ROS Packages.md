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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIUFT5P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGq5aDIKRPDRHeXVgZ1USrlbVEGdDhJGoYOtoovd%2FhtqAiBCuLFbZEXvJXdBC25y%2BJLVufyie%2BEaMQD0k5xMbe2Ksir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FqssJf%2Fia%2BYv08MkKtwD%2FpAqP7IeuVFs%2BhiNzyQdq6%2FXSsZRQs0tKdQICDqGm%2BY%2B3aWV1Kl49wje6OpMNpHkBx1TgeDkDsRApHldQUV1tb9S8IYf4PLs%2BJMoOtK4MBIuQky9QIeJTrfWAPWmOcgkVp2HBS6iapboUWVEwjAnfvryHTw0YP3Nz4wLiMtGFZ4v%2F9BvEnGJP4kn%2F1J1Lr3H2e%2BKsygDeSOR5HSM%2FxNmn%2FuNGsdYAP7ceFNAnrIpJATKLZ1Mrt98%2BdqQRh1IjSFXWODlIVg1Gg%2FrfLo753z5%2Fr3KeGA0DLM05VtogopPrV4%2FgvoNBg%2B3I0Dx7KTtNI%2BAL0cVxaHt0Kh8%2BHIeOLXCZWSemIBPF37JWXzDeW96shbiRUH1Ip%2Bmt3ydx5Uxt2lY%2BKRuTlq9exVcLgBUCW6O1BXOhP8UA4%2FyD0MnsO4IuLoHLFr9R0nJmfCc%2BYwUx0sAl7B%2B%2BQ7x1VoKXGJ40p9Ey94IGYYCEUGmYiIq%2FDa64GcE0F80JOeT7uRPHyPeqGAbrztmamX4pmn1GjrAq7ahzmeAHRlklvHbqqFzo9frb2HVZUWh6e5M1l%2BBotrgS5HUhe7OEIANVtNd%2BHmTXVIqodE%2B4SSFDa5Y54jNYaHBMJEQ1ORlv3ifzYjzJsEww%2F3FvQY6pgGkcCXax1Yx8%2FR2eFcvwpCFJUymtZEwJZ%2BX76avUkeW475bstTVLFE6xBYOQ6o7GzP6X8MnaJRr6Jr4NHa0BfhMAjIGFlKWLsLtQ%2Fp91dBH5zwwPJS5By6iIrSJsQh8Wbi9Flmw6P0pdYsui2hlaYg%2B381gK%2FjsOVXOuBuryC0Z%2BC9%2F0T3HCWDuf8WspfLWrtZXUKVA%2F0C0oGStsZdRrR8M6YmhWP6N&X-Amz-Signature=ae59644ec6e89fec153cacf24d43d9f1591b21de7c91e112e25554e46ee39efd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIUFT5P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGq5aDIKRPDRHeXVgZ1USrlbVEGdDhJGoYOtoovd%2FhtqAiBCuLFbZEXvJXdBC25y%2BJLVufyie%2BEaMQD0k5xMbe2Ksir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FqssJf%2Fia%2BYv08MkKtwD%2FpAqP7IeuVFs%2BhiNzyQdq6%2FXSsZRQs0tKdQICDqGm%2BY%2B3aWV1Kl49wje6OpMNpHkBx1TgeDkDsRApHldQUV1tb9S8IYf4PLs%2BJMoOtK4MBIuQky9QIeJTrfWAPWmOcgkVp2HBS6iapboUWVEwjAnfvryHTw0YP3Nz4wLiMtGFZ4v%2F9BvEnGJP4kn%2F1J1Lr3H2e%2BKsygDeSOR5HSM%2FxNmn%2FuNGsdYAP7ceFNAnrIpJATKLZ1Mrt98%2BdqQRh1IjSFXWODlIVg1Gg%2FrfLo753z5%2Fr3KeGA0DLM05VtogopPrV4%2FgvoNBg%2B3I0Dx7KTtNI%2BAL0cVxaHt0Kh8%2BHIeOLXCZWSemIBPF37JWXzDeW96shbiRUH1Ip%2Bmt3ydx5Uxt2lY%2BKRuTlq9exVcLgBUCW6O1BXOhP8UA4%2FyD0MnsO4IuLoHLFr9R0nJmfCc%2BYwUx0sAl7B%2B%2BQ7x1VoKXGJ40p9Ey94IGYYCEUGmYiIq%2FDa64GcE0F80JOeT7uRPHyPeqGAbrztmamX4pmn1GjrAq7ahzmeAHRlklvHbqqFzo9frb2HVZUWh6e5M1l%2BBotrgS5HUhe7OEIANVtNd%2BHmTXVIqodE%2B4SSFDa5Y54jNYaHBMJEQ1ORlv3ifzYjzJsEww%2F3FvQY6pgGkcCXax1Yx8%2FR2eFcvwpCFJUymtZEwJZ%2BX76avUkeW475bstTVLFE6xBYOQ6o7GzP6X8MnaJRr6Jr4NHa0BfhMAjIGFlKWLsLtQ%2Fp91dBH5zwwPJS5By6iIrSJsQh8Wbi9Flmw6P0pdYsui2hlaYg%2B381gK%2FjsOVXOuBuryC0Z%2BC9%2F0T3HCWDuf8WspfLWrtZXUKVA%2F0C0oGStsZdRrR8M6YmhWP6N&X-Amz-Signature=a700058d7b4ed4df0480bdb72f2dba3f8dd7e1927d6ccb5f04837ee1a2afa688&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIUFT5P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGq5aDIKRPDRHeXVgZ1USrlbVEGdDhJGoYOtoovd%2FhtqAiBCuLFbZEXvJXdBC25y%2BJLVufyie%2BEaMQD0k5xMbe2Ksir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FqssJf%2Fia%2BYv08MkKtwD%2FpAqP7IeuVFs%2BhiNzyQdq6%2FXSsZRQs0tKdQICDqGm%2BY%2B3aWV1Kl49wje6OpMNpHkBx1TgeDkDsRApHldQUV1tb9S8IYf4PLs%2BJMoOtK4MBIuQky9QIeJTrfWAPWmOcgkVp2HBS6iapboUWVEwjAnfvryHTw0YP3Nz4wLiMtGFZ4v%2F9BvEnGJP4kn%2F1J1Lr3H2e%2BKsygDeSOR5HSM%2FxNmn%2FuNGsdYAP7ceFNAnrIpJATKLZ1Mrt98%2BdqQRh1IjSFXWODlIVg1Gg%2FrfLo753z5%2Fr3KeGA0DLM05VtogopPrV4%2FgvoNBg%2B3I0Dx7KTtNI%2BAL0cVxaHt0Kh8%2BHIeOLXCZWSemIBPF37JWXzDeW96shbiRUH1Ip%2Bmt3ydx5Uxt2lY%2BKRuTlq9exVcLgBUCW6O1BXOhP8UA4%2FyD0MnsO4IuLoHLFr9R0nJmfCc%2BYwUx0sAl7B%2B%2BQ7x1VoKXGJ40p9Ey94IGYYCEUGmYiIq%2FDa64GcE0F80JOeT7uRPHyPeqGAbrztmamX4pmn1GjrAq7ahzmeAHRlklvHbqqFzo9frb2HVZUWh6e5M1l%2BBotrgS5HUhe7OEIANVtNd%2BHmTXVIqodE%2B4SSFDa5Y54jNYaHBMJEQ1ORlv3ifzYjzJsEww%2F3FvQY6pgGkcCXax1Yx8%2FR2eFcvwpCFJUymtZEwJZ%2BX76avUkeW475bstTVLFE6xBYOQ6o7GzP6X8MnaJRr6Jr4NHa0BfhMAjIGFlKWLsLtQ%2Fp91dBH5zwwPJS5By6iIrSJsQh8Wbi9Flmw6P0pdYsui2hlaYg%2B381gK%2FjsOVXOuBuryC0Z%2BC9%2F0T3HCWDuf8WspfLWrtZXUKVA%2F0C0oGStsZdRrR8M6YmhWP6N&X-Amz-Signature=ea16bc6bdbb3ef90e4641d0f15ad8c6afef762837d0896a31705e85dc42fe305&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIUFT5P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGq5aDIKRPDRHeXVgZ1USrlbVEGdDhJGoYOtoovd%2FhtqAiBCuLFbZEXvJXdBC25y%2BJLVufyie%2BEaMQD0k5xMbe2Ksir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FqssJf%2Fia%2BYv08MkKtwD%2FpAqP7IeuVFs%2BhiNzyQdq6%2FXSsZRQs0tKdQICDqGm%2BY%2B3aWV1Kl49wje6OpMNpHkBx1TgeDkDsRApHldQUV1tb9S8IYf4PLs%2BJMoOtK4MBIuQky9QIeJTrfWAPWmOcgkVp2HBS6iapboUWVEwjAnfvryHTw0YP3Nz4wLiMtGFZ4v%2F9BvEnGJP4kn%2F1J1Lr3H2e%2BKsygDeSOR5HSM%2FxNmn%2FuNGsdYAP7ceFNAnrIpJATKLZ1Mrt98%2BdqQRh1IjSFXWODlIVg1Gg%2FrfLo753z5%2Fr3KeGA0DLM05VtogopPrV4%2FgvoNBg%2B3I0Dx7KTtNI%2BAL0cVxaHt0Kh8%2BHIeOLXCZWSemIBPF37JWXzDeW96shbiRUH1Ip%2Bmt3ydx5Uxt2lY%2BKRuTlq9exVcLgBUCW6O1BXOhP8UA4%2FyD0MnsO4IuLoHLFr9R0nJmfCc%2BYwUx0sAl7B%2B%2BQ7x1VoKXGJ40p9Ey94IGYYCEUGmYiIq%2FDa64GcE0F80JOeT7uRPHyPeqGAbrztmamX4pmn1GjrAq7ahzmeAHRlklvHbqqFzo9frb2HVZUWh6e5M1l%2BBotrgS5HUhe7OEIANVtNd%2BHmTXVIqodE%2B4SSFDa5Y54jNYaHBMJEQ1ORlv3ifzYjzJsEww%2F3FvQY6pgGkcCXax1Yx8%2FR2eFcvwpCFJUymtZEwJZ%2BX76avUkeW475bstTVLFE6xBYOQ6o7GzP6X8MnaJRr6Jr4NHa0BfhMAjIGFlKWLsLtQ%2Fp91dBH5zwwPJS5By6iIrSJsQh8Wbi9Flmw6P0pdYsui2hlaYg%2B381gK%2FjsOVXOuBuryC0Z%2BC9%2F0T3HCWDuf8WspfLWrtZXUKVA%2F0C0oGStsZdRrR8M6YmhWP6N&X-Amz-Signature=01caaa133641bf63cf2d2f77bc9d040f4aa9d64d9d0a4c0501a22913fc34cd65&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIUFT5P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGq5aDIKRPDRHeXVgZ1USrlbVEGdDhJGoYOtoovd%2FhtqAiBCuLFbZEXvJXdBC25y%2BJLVufyie%2BEaMQD0k5xMbe2Ksir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FqssJf%2Fia%2BYv08MkKtwD%2FpAqP7IeuVFs%2BhiNzyQdq6%2FXSsZRQs0tKdQICDqGm%2BY%2B3aWV1Kl49wje6OpMNpHkBx1TgeDkDsRApHldQUV1tb9S8IYf4PLs%2BJMoOtK4MBIuQky9QIeJTrfWAPWmOcgkVp2HBS6iapboUWVEwjAnfvryHTw0YP3Nz4wLiMtGFZ4v%2F9BvEnGJP4kn%2F1J1Lr3H2e%2BKsygDeSOR5HSM%2FxNmn%2FuNGsdYAP7ceFNAnrIpJATKLZ1Mrt98%2BdqQRh1IjSFXWODlIVg1Gg%2FrfLo753z5%2Fr3KeGA0DLM05VtogopPrV4%2FgvoNBg%2B3I0Dx7KTtNI%2BAL0cVxaHt0Kh8%2BHIeOLXCZWSemIBPF37JWXzDeW96shbiRUH1Ip%2Bmt3ydx5Uxt2lY%2BKRuTlq9exVcLgBUCW6O1BXOhP8UA4%2FyD0MnsO4IuLoHLFr9R0nJmfCc%2BYwUx0sAl7B%2B%2BQ7x1VoKXGJ40p9Ey94IGYYCEUGmYiIq%2FDa64GcE0F80JOeT7uRPHyPeqGAbrztmamX4pmn1GjrAq7ahzmeAHRlklvHbqqFzo9frb2HVZUWh6e5M1l%2BBotrgS5HUhe7OEIANVtNd%2BHmTXVIqodE%2B4SSFDa5Y54jNYaHBMJEQ1ORlv3ifzYjzJsEww%2F3FvQY6pgGkcCXax1Yx8%2FR2eFcvwpCFJUymtZEwJZ%2BX76avUkeW475bstTVLFE6xBYOQ6o7GzP6X8MnaJRr6Jr4NHa0BfhMAjIGFlKWLsLtQ%2Fp91dBH5zwwPJS5By6iIrSJsQh8Wbi9Flmw6P0pdYsui2hlaYg%2B381gK%2FjsOVXOuBuryC0Z%2BC9%2F0T3HCWDuf8WspfLWrtZXUKVA%2F0C0oGStsZdRrR8M6YmhWP6N&X-Amz-Signature=c0e90a43377b1f4eaf5ab6cf30c24d81f00bd1625271a47fe93a34f89476d5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIUFT5P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGq5aDIKRPDRHeXVgZ1USrlbVEGdDhJGoYOtoovd%2FhtqAiBCuLFbZEXvJXdBC25y%2BJLVufyie%2BEaMQD0k5xMbe2Ksir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FqssJf%2Fia%2BYv08MkKtwD%2FpAqP7IeuVFs%2BhiNzyQdq6%2FXSsZRQs0tKdQICDqGm%2BY%2B3aWV1Kl49wje6OpMNpHkBx1TgeDkDsRApHldQUV1tb9S8IYf4PLs%2BJMoOtK4MBIuQky9QIeJTrfWAPWmOcgkVp2HBS6iapboUWVEwjAnfvryHTw0YP3Nz4wLiMtGFZ4v%2F9BvEnGJP4kn%2F1J1Lr3H2e%2BKsygDeSOR5HSM%2FxNmn%2FuNGsdYAP7ceFNAnrIpJATKLZ1Mrt98%2BdqQRh1IjSFXWODlIVg1Gg%2FrfLo753z5%2Fr3KeGA0DLM05VtogopPrV4%2FgvoNBg%2B3I0Dx7KTtNI%2BAL0cVxaHt0Kh8%2BHIeOLXCZWSemIBPF37JWXzDeW96shbiRUH1Ip%2Bmt3ydx5Uxt2lY%2BKRuTlq9exVcLgBUCW6O1BXOhP8UA4%2FyD0MnsO4IuLoHLFr9R0nJmfCc%2BYwUx0sAl7B%2B%2BQ7x1VoKXGJ40p9Ey94IGYYCEUGmYiIq%2FDa64GcE0F80JOeT7uRPHyPeqGAbrztmamX4pmn1GjrAq7ahzmeAHRlklvHbqqFzo9frb2HVZUWh6e5M1l%2BBotrgS5HUhe7OEIANVtNd%2BHmTXVIqodE%2B4SSFDa5Y54jNYaHBMJEQ1ORlv3ifzYjzJsEww%2F3FvQY6pgGkcCXax1Yx8%2FR2eFcvwpCFJUymtZEwJZ%2BX76avUkeW475bstTVLFE6xBYOQ6o7GzP6X8MnaJRr6Jr4NHa0BfhMAjIGFlKWLsLtQ%2Fp91dBH5zwwPJS5By6iIrSJsQh8Wbi9Flmw6P0pdYsui2hlaYg%2B381gK%2FjsOVXOuBuryC0Z%2BC9%2F0T3HCWDuf8WspfLWrtZXUKVA%2F0C0oGStsZdRrR8M6YmhWP6N&X-Amz-Signature=924ae5cc34441149e877f16f218cc72f8e5e50b581da6bcd112dc99acbc10b87&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIUFT5P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGq5aDIKRPDRHeXVgZ1USrlbVEGdDhJGoYOtoovd%2FhtqAiBCuLFbZEXvJXdBC25y%2BJLVufyie%2BEaMQD0k5xMbe2Ksir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FqssJf%2Fia%2BYv08MkKtwD%2FpAqP7IeuVFs%2BhiNzyQdq6%2FXSsZRQs0tKdQICDqGm%2BY%2B3aWV1Kl49wje6OpMNpHkBx1TgeDkDsRApHldQUV1tb9S8IYf4PLs%2BJMoOtK4MBIuQky9QIeJTrfWAPWmOcgkVp2HBS6iapboUWVEwjAnfvryHTw0YP3Nz4wLiMtGFZ4v%2F9BvEnGJP4kn%2F1J1Lr3H2e%2BKsygDeSOR5HSM%2FxNmn%2FuNGsdYAP7ceFNAnrIpJATKLZ1Mrt98%2BdqQRh1IjSFXWODlIVg1Gg%2FrfLo753z5%2Fr3KeGA0DLM05VtogopPrV4%2FgvoNBg%2B3I0Dx7KTtNI%2BAL0cVxaHt0Kh8%2BHIeOLXCZWSemIBPF37JWXzDeW96shbiRUH1Ip%2Bmt3ydx5Uxt2lY%2BKRuTlq9exVcLgBUCW6O1BXOhP8UA4%2FyD0MnsO4IuLoHLFr9R0nJmfCc%2BYwUx0sAl7B%2B%2BQ7x1VoKXGJ40p9Ey94IGYYCEUGmYiIq%2FDa64GcE0F80JOeT7uRPHyPeqGAbrztmamX4pmn1GjrAq7ahzmeAHRlklvHbqqFzo9frb2HVZUWh6e5M1l%2BBotrgS5HUhe7OEIANVtNd%2BHmTXVIqodE%2B4SSFDa5Y54jNYaHBMJEQ1ORlv3ifzYjzJsEww%2F3FvQY6pgGkcCXax1Yx8%2FR2eFcvwpCFJUymtZEwJZ%2BX76avUkeW475bstTVLFE6xBYOQ6o7GzP6X8MnaJRr6Jr4NHa0BfhMAjIGFlKWLsLtQ%2Fp91dBH5zwwPJS5By6iIrSJsQh8Wbi9Flmw6P0pdYsui2hlaYg%2B381gK%2FjsOVXOuBuryC0Z%2BC9%2F0T3HCWDuf8WspfLWrtZXUKVA%2F0C0oGStsZdRrR8M6YmhWP6N&X-Amz-Signature=bedfaff2958af766e6fafbfb5d859ae1991b4f8e67bff5c8b4ca1a0775a3b646&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
