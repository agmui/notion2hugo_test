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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZGVUX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr1QVriN3iWLp3hSVrzOlWSAzrd6Tet4hCnxq%2BmscEZAiBNJtQ6Np1HtU50lgNa2%2Fp8QDz8jGli1YeST4q2odAz%2FSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMS7vdaas%2FNDP8wCBuKtwDsfcPlCKLIhBM%2Bh4WKVIcKCruaukRynRib0zBYL%2FAC8JqlkWVbxs0PKP0smKA87YsVlcDAhFGqHjysFRgvWUdPIIO3CJRLEQ9q2v%2BPZfaqZTT51o4NSF9cmHjvq%2BL6bqBTV6YlCMeZmrGaEb9dLDRihclapEe3fJEZ%2FH0YPJR7hyPk5KsW%2BteWFoOfXgQEZ3BP3ujQQ3hvT6gu%2BQRPcUYKArtx%2Fse4GQsD6HYns7kNNRgCsQC3FwU%2FGUGdhgJ%2F1KGY6p2nQfKgl%2FM%2Fvq5wIj9V2Bnxjhpj%2FKIieV2Z5VPML7VuaXhJZZlXYGvi7ag7M1K8X8Dh3aP8f6oxnHGznMNt7MdLIPssGmexPlEpPYpFmbLHUD92cqAFZ27Eg1X%2B93eMRq9RLh0HU0kp8xMu%2FV%2BPAXfDXVFU0OCeoVuHCukcevcr5r14z155uPmXgB1k2RQoD%2FgGMJYgDZdY91QpMRBRZTAz1RK8ltDHZWbexpQLfMQnXt1tHEpt6EaEN0yKuUDb%2FK4AC%2FLIVFJUwjWEgoS9hjyfn3pa7IXG1THH2Sue9ginPrpgSzzKp%2BEGlEuyYzqWfCfbMnL55ExkqKqaiAMo6kQxE%2B5lLskpJxiF6UWBBl%2B2EevtNEDFZSbZ1wwo%2FSBvQY6pgFadNOo9McLs%2FNFp8vIwQr5VyVa4ol3rXS2r9iGyiY%2FtJ3MpFxAsyUJ4GPOsZOL9u89SObAKRm%2Fhdmk%2Bk6jHaIl3IS4DaCVi4eVj4yE8TlJ8Q9G3YuTmukSmvqVo58ri3EkevJoUDoINEJ2zhPmM70VOOSiS10BgA%2B91xsPwiSLjUDnIKCGF9BPa9vuIaIHxjZAb7mXaQ9RZLdj3HKY%2FYddPFv4ArSS&X-Amz-Signature=7f8e5007959e4035dca86f12a5e004ec63f6c9694f8832ff9c80d9bd1c6bbad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZGVUX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr1QVriN3iWLp3hSVrzOlWSAzrd6Tet4hCnxq%2BmscEZAiBNJtQ6Np1HtU50lgNa2%2Fp8QDz8jGli1YeST4q2odAz%2FSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMS7vdaas%2FNDP8wCBuKtwDsfcPlCKLIhBM%2Bh4WKVIcKCruaukRynRib0zBYL%2FAC8JqlkWVbxs0PKP0smKA87YsVlcDAhFGqHjysFRgvWUdPIIO3CJRLEQ9q2v%2BPZfaqZTT51o4NSF9cmHjvq%2BL6bqBTV6YlCMeZmrGaEb9dLDRihclapEe3fJEZ%2FH0YPJR7hyPk5KsW%2BteWFoOfXgQEZ3BP3ujQQ3hvT6gu%2BQRPcUYKArtx%2Fse4GQsD6HYns7kNNRgCsQC3FwU%2FGUGdhgJ%2F1KGY6p2nQfKgl%2FM%2Fvq5wIj9V2Bnxjhpj%2FKIieV2Z5VPML7VuaXhJZZlXYGvi7ag7M1K8X8Dh3aP8f6oxnHGznMNt7MdLIPssGmexPlEpPYpFmbLHUD92cqAFZ27Eg1X%2B93eMRq9RLh0HU0kp8xMu%2FV%2BPAXfDXVFU0OCeoVuHCukcevcr5r14z155uPmXgB1k2RQoD%2FgGMJYgDZdY91QpMRBRZTAz1RK8ltDHZWbexpQLfMQnXt1tHEpt6EaEN0yKuUDb%2FK4AC%2FLIVFJUwjWEgoS9hjyfn3pa7IXG1THH2Sue9ginPrpgSzzKp%2BEGlEuyYzqWfCfbMnL55ExkqKqaiAMo6kQxE%2B5lLskpJxiF6UWBBl%2B2EevtNEDFZSbZ1wwo%2FSBvQY6pgFadNOo9McLs%2FNFp8vIwQr5VyVa4ol3rXS2r9iGyiY%2FtJ3MpFxAsyUJ4GPOsZOL9u89SObAKRm%2Fhdmk%2Bk6jHaIl3IS4DaCVi4eVj4yE8TlJ8Q9G3YuTmukSmvqVo58ri3EkevJoUDoINEJ2zhPmM70VOOSiS10BgA%2B91xsPwiSLjUDnIKCGF9BPa9vuIaIHxjZAb7mXaQ9RZLdj3HKY%2FYddPFv4ArSS&X-Amz-Signature=fc3353a9b1de46cf6672a97167b9a334a221925b7ff0d8eaa35e37d48626805b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZGVUX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr1QVriN3iWLp3hSVrzOlWSAzrd6Tet4hCnxq%2BmscEZAiBNJtQ6Np1HtU50lgNa2%2Fp8QDz8jGli1YeST4q2odAz%2FSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMS7vdaas%2FNDP8wCBuKtwDsfcPlCKLIhBM%2Bh4WKVIcKCruaukRynRib0zBYL%2FAC8JqlkWVbxs0PKP0smKA87YsVlcDAhFGqHjysFRgvWUdPIIO3CJRLEQ9q2v%2BPZfaqZTT51o4NSF9cmHjvq%2BL6bqBTV6YlCMeZmrGaEb9dLDRihclapEe3fJEZ%2FH0YPJR7hyPk5KsW%2BteWFoOfXgQEZ3BP3ujQQ3hvT6gu%2BQRPcUYKArtx%2Fse4GQsD6HYns7kNNRgCsQC3FwU%2FGUGdhgJ%2F1KGY6p2nQfKgl%2FM%2Fvq5wIj9V2Bnxjhpj%2FKIieV2Z5VPML7VuaXhJZZlXYGvi7ag7M1K8X8Dh3aP8f6oxnHGznMNt7MdLIPssGmexPlEpPYpFmbLHUD92cqAFZ27Eg1X%2B93eMRq9RLh0HU0kp8xMu%2FV%2BPAXfDXVFU0OCeoVuHCukcevcr5r14z155uPmXgB1k2RQoD%2FgGMJYgDZdY91QpMRBRZTAz1RK8ltDHZWbexpQLfMQnXt1tHEpt6EaEN0yKuUDb%2FK4AC%2FLIVFJUwjWEgoS9hjyfn3pa7IXG1THH2Sue9ginPrpgSzzKp%2BEGlEuyYzqWfCfbMnL55ExkqKqaiAMo6kQxE%2B5lLskpJxiF6UWBBl%2B2EevtNEDFZSbZ1wwo%2FSBvQY6pgFadNOo9McLs%2FNFp8vIwQr5VyVa4ol3rXS2r9iGyiY%2FtJ3MpFxAsyUJ4GPOsZOL9u89SObAKRm%2Fhdmk%2Bk6jHaIl3IS4DaCVi4eVj4yE8TlJ8Q9G3YuTmukSmvqVo58ri3EkevJoUDoINEJ2zhPmM70VOOSiS10BgA%2B91xsPwiSLjUDnIKCGF9BPa9vuIaIHxjZAb7mXaQ9RZLdj3HKY%2FYddPFv4ArSS&X-Amz-Signature=52223be2bbcc9bfab95be218980b49e6fb1e5e5b8e1308775a32a59ea09fd17a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZGVUX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr1QVriN3iWLp3hSVrzOlWSAzrd6Tet4hCnxq%2BmscEZAiBNJtQ6Np1HtU50lgNa2%2Fp8QDz8jGli1YeST4q2odAz%2FSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMS7vdaas%2FNDP8wCBuKtwDsfcPlCKLIhBM%2Bh4WKVIcKCruaukRynRib0zBYL%2FAC8JqlkWVbxs0PKP0smKA87YsVlcDAhFGqHjysFRgvWUdPIIO3CJRLEQ9q2v%2BPZfaqZTT51o4NSF9cmHjvq%2BL6bqBTV6YlCMeZmrGaEb9dLDRihclapEe3fJEZ%2FH0YPJR7hyPk5KsW%2BteWFoOfXgQEZ3BP3ujQQ3hvT6gu%2BQRPcUYKArtx%2Fse4GQsD6HYns7kNNRgCsQC3FwU%2FGUGdhgJ%2F1KGY6p2nQfKgl%2FM%2Fvq5wIj9V2Bnxjhpj%2FKIieV2Z5VPML7VuaXhJZZlXYGvi7ag7M1K8X8Dh3aP8f6oxnHGznMNt7MdLIPssGmexPlEpPYpFmbLHUD92cqAFZ27Eg1X%2B93eMRq9RLh0HU0kp8xMu%2FV%2BPAXfDXVFU0OCeoVuHCukcevcr5r14z155uPmXgB1k2RQoD%2FgGMJYgDZdY91QpMRBRZTAz1RK8ltDHZWbexpQLfMQnXt1tHEpt6EaEN0yKuUDb%2FK4AC%2FLIVFJUwjWEgoS9hjyfn3pa7IXG1THH2Sue9ginPrpgSzzKp%2BEGlEuyYzqWfCfbMnL55ExkqKqaiAMo6kQxE%2B5lLskpJxiF6UWBBl%2B2EevtNEDFZSbZ1wwo%2FSBvQY6pgFadNOo9McLs%2FNFp8vIwQr5VyVa4ol3rXS2r9iGyiY%2FtJ3MpFxAsyUJ4GPOsZOL9u89SObAKRm%2Fhdmk%2Bk6jHaIl3IS4DaCVi4eVj4yE8TlJ8Q9G3YuTmukSmvqVo58ri3EkevJoUDoINEJ2zhPmM70VOOSiS10BgA%2B91xsPwiSLjUDnIKCGF9BPa9vuIaIHxjZAb7mXaQ9RZLdj3HKY%2FYddPFv4ArSS&X-Amz-Signature=88b6f6096bf42e56111f90650615bbdbeee0e1bb7e544b8d0ef9bb5d46c6836a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZGVUX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr1QVriN3iWLp3hSVrzOlWSAzrd6Tet4hCnxq%2BmscEZAiBNJtQ6Np1HtU50lgNa2%2Fp8QDz8jGli1YeST4q2odAz%2FSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMS7vdaas%2FNDP8wCBuKtwDsfcPlCKLIhBM%2Bh4WKVIcKCruaukRynRib0zBYL%2FAC8JqlkWVbxs0PKP0smKA87YsVlcDAhFGqHjysFRgvWUdPIIO3CJRLEQ9q2v%2BPZfaqZTT51o4NSF9cmHjvq%2BL6bqBTV6YlCMeZmrGaEb9dLDRihclapEe3fJEZ%2FH0YPJR7hyPk5KsW%2BteWFoOfXgQEZ3BP3ujQQ3hvT6gu%2BQRPcUYKArtx%2Fse4GQsD6HYns7kNNRgCsQC3FwU%2FGUGdhgJ%2F1KGY6p2nQfKgl%2FM%2Fvq5wIj9V2Bnxjhpj%2FKIieV2Z5VPML7VuaXhJZZlXYGvi7ag7M1K8X8Dh3aP8f6oxnHGznMNt7MdLIPssGmexPlEpPYpFmbLHUD92cqAFZ27Eg1X%2B93eMRq9RLh0HU0kp8xMu%2FV%2BPAXfDXVFU0OCeoVuHCukcevcr5r14z155uPmXgB1k2RQoD%2FgGMJYgDZdY91QpMRBRZTAz1RK8ltDHZWbexpQLfMQnXt1tHEpt6EaEN0yKuUDb%2FK4AC%2FLIVFJUwjWEgoS9hjyfn3pa7IXG1THH2Sue9ginPrpgSzzKp%2BEGlEuyYzqWfCfbMnL55ExkqKqaiAMo6kQxE%2B5lLskpJxiF6UWBBl%2B2EevtNEDFZSbZ1wwo%2FSBvQY6pgFadNOo9McLs%2FNFp8vIwQr5VyVa4ol3rXS2r9iGyiY%2FtJ3MpFxAsyUJ4GPOsZOL9u89SObAKRm%2Fhdmk%2Bk6jHaIl3IS4DaCVi4eVj4yE8TlJ8Q9G3YuTmukSmvqVo58ri3EkevJoUDoINEJ2zhPmM70VOOSiS10BgA%2B91xsPwiSLjUDnIKCGF9BPa9vuIaIHxjZAb7mXaQ9RZLdj3HKY%2FYddPFv4ArSS&X-Amz-Signature=6370b51c23344e2cb291c155e7cefb980b9f30fbb35411e0d0957ca9a921808b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZGVUX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr1QVriN3iWLp3hSVrzOlWSAzrd6Tet4hCnxq%2BmscEZAiBNJtQ6Np1HtU50lgNa2%2Fp8QDz8jGli1YeST4q2odAz%2FSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMS7vdaas%2FNDP8wCBuKtwDsfcPlCKLIhBM%2Bh4WKVIcKCruaukRynRib0zBYL%2FAC8JqlkWVbxs0PKP0smKA87YsVlcDAhFGqHjysFRgvWUdPIIO3CJRLEQ9q2v%2BPZfaqZTT51o4NSF9cmHjvq%2BL6bqBTV6YlCMeZmrGaEb9dLDRihclapEe3fJEZ%2FH0YPJR7hyPk5KsW%2BteWFoOfXgQEZ3BP3ujQQ3hvT6gu%2BQRPcUYKArtx%2Fse4GQsD6HYns7kNNRgCsQC3FwU%2FGUGdhgJ%2F1KGY6p2nQfKgl%2FM%2Fvq5wIj9V2Bnxjhpj%2FKIieV2Z5VPML7VuaXhJZZlXYGvi7ag7M1K8X8Dh3aP8f6oxnHGznMNt7MdLIPssGmexPlEpPYpFmbLHUD92cqAFZ27Eg1X%2B93eMRq9RLh0HU0kp8xMu%2FV%2BPAXfDXVFU0OCeoVuHCukcevcr5r14z155uPmXgB1k2RQoD%2FgGMJYgDZdY91QpMRBRZTAz1RK8ltDHZWbexpQLfMQnXt1tHEpt6EaEN0yKuUDb%2FK4AC%2FLIVFJUwjWEgoS9hjyfn3pa7IXG1THH2Sue9ginPrpgSzzKp%2BEGlEuyYzqWfCfbMnL55ExkqKqaiAMo6kQxE%2B5lLskpJxiF6UWBBl%2B2EevtNEDFZSbZ1wwo%2FSBvQY6pgFadNOo9McLs%2FNFp8vIwQr5VyVa4ol3rXS2r9iGyiY%2FtJ3MpFxAsyUJ4GPOsZOL9u89SObAKRm%2Fhdmk%2Bk6jHaIl3IS4DaCVi4eVj4yE8TlJ8Q9G3YuTmukSmvqVo58ri3EkevJoUDoINEJ2zhPmM70VOOSiS10BgA%2B91xsPwiSLjUDnIKCGF9BPa9vuIaIHxjZAb7mXaQ9RZLdj3HKY%2FYddPFv4ArSS&X-Amz-Signature=eda67941a59e769d66b7722b7180b617a1809fa8af215974e3ddc7a5eff0dfab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IDZGVUX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHr1QVriN3iWLp3hSVrzOlWSAzrd6Tet4hCnxq%2BmscEZAiBNJtQ6Np1HtU50lgNa2%2Fp8QDz8jGli1YeST4q2odAz%2FSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMS7vdaas%2FNDP8wCBuKtwDsfcPlCKLIhBM%2Bh4WKVIcKCruaukRynRib0zBYL%2FAC8JqlkWVbxs0PKP0smKA87YsVlcDAhFGqHjysFRgvWUdPIIO3CJRLEQ9q2v%2BPZfaqZTT51o4NSF9cmHjvq%2BL6bqBTV6YlCMeZmrGaEb9dLDRihclapEe3fJEZ%2FH0YPJR7hyPk5KsW%2BteWFoOfXgQEZ3BP3ujQQ3hvT6gu%2BQRPcUYKArtx%2Fse4GQsD6HYns7kNNRgCsQC3FwU%2FGUGdhgJ%2F1KGY6p2nQfKgl%2FM%2Fvq5wIj9V2Bnxjhpj%2FKIieV2Z5VPML7VuaXhJZZlXYGvi7ag7M1K8X8Dh3aP8f6oxnHGznMNt7MdLIPssGmexPlEpPYpFmbLHUD92cqAFZ27Eg1X%2B93eMRq9RLh0HU0kp8xMu%2FV%2BPAXfDXVFU0OCeoVuHCukcevcr5r14z155uPmXgB1k2RQoD%2FgGMJYgDZdY91QpMRBRZTAz1RK8ltDHZWbexpQLfMQnXt1tHEpt6EaEN0yKuUDb%2FK4AC%2FLIVFJUwjWEgoS9hjyfn3pa7IXG1THH2Sue9ginPrpgSzzKp%2BEGlEuyYzqWfCfbMnL55ExkqKqaiAMo6kQxE%2B5lLskpJxiF6UWBBl%2B2EevtNEDFZSbZ1wwo%2FSBvQY6pgFadNOo9McLs%2FNFp8vIwQr5VyVa4ol3rXS2r9iGyiY%2FtJ3MpFxAsyUJ4GPOsZOL9u89SObAKRm%2Fhdmk%2Bk6jHaIl3IS4DaCVi4eVj4yE8TlJ8Q9G3YuTmukSmvqVo58ri3EkevJoUDoINEJ2zhPmM70VOOSiS10BgA%2B91xsPwiSLjUDnIKCGF9BPa9vuIaIHxjZAb7mXaQ9RZLdj3HKY%2FYddPFv4ArSS&X-Amz-Signature=f9efff1c21870566dbce21af73db27503a54fe9f5bcaa080801e8864c29f8d27&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
