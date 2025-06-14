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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NP5RF5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfyltVUSJ16fwPXugfv3SLSVGU01UowBsqkmy0f35F7AiEA2uOUQqHytngt%2FUircf6Dtx2KW096N2rzcs3cRU4wZVUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIFb%2Bl4BZlxXSfg8dircA0YLFTipRsCp8r%2FaKUVVI%2BAJFctgDa5tKtJFzILDkOWjNbHDQ%2FOwUVK7XhIrJ4QT7nhTiRvKAdHh795sizGTbDBX%2FVzM5dCIENe7RxW8cYKhab6fk%2FYHITyTtXe%2FgGn%2B61VHtr3CXQGCJFlWzunSaNLOPokO8gFiUBpk8tU3jUCIUiGw0soSRgpFljvZXw8Ngy%2B6C2ybV3ii9MqS9lo%2B7qKWGvUoRlVmAZI7Zfz69hCKJ4Lbjrd%2Fbus89zBC5kiqAwbXT2NVJuA4CgflJgpoRKl7ALCv8K5%2FoDmsgRjFq6Y5J2hQPOnX%2B1Kno6kEsSrvRRTDWmw4iVf53g1f2xOLyf9u2sHpoIggL7a8LPTYsQzsAWh5wodG3N2P7%2BlWI5PWkNQnXHEJOtQoJHE9Dyo8D8AjrI2M8fmnIMTLc3YQv2RPv45eeiUfY3s7oyCXTZTp5%2FbxzwnXaSkA24mNs%2FxiEuJkBd3kIKbIJGTTNYr7Gq63iVNbjilrgl7%2B3mc1120PX6lMfSHAHJ6hQVOMgcnNO2FqjjlhToiRKYb2A7A0lp1PEgbTIqF4zu5NxIJd%2B%2Ftcm6kN%2BOFeYBCQ1%2FuzBaQaQ4SerW%2FwQt6pFfhcA2IFJhvPKSYL%2FYaEDedAW0nSMJLss8IGOqUBq9fSMatbYB9%2F6kMOzr0AHV8wTOf1BBEkcXVzrCsNs5c2yrYH0DJ39edQkoLJ2lOEXdTZ%2FHjA0a%2B%2BvvrGIlv8pU%2FPlRbZu6%2BjSPTk5PwdUB03jcGs%2B3qK8h1fckjf7Cl2eVy%2BAcG%2Fj%2FI86hL12vtKMW1U3OCtq9l79BDXah7IxvD6wPy7VF5TzJDWue0x242sMNwPRsL%2Fr9TIE5MkRJ69VYYE1Huh&X-Amz-Signature=225742ff53f84184cad9829b11fc360f1555ccdd49bba391756301bb73457040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NP5RF5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfyltVUSJ16fwPXugfv3SLSVGU01UowBsqkmy0f35F7AiEA2uOUQqHytngt%2FUircf6Dtx2KW096N2rzcs3cRU4wZVUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIFb%2Bl4BZlxXSfg8dircA0YLFTipRsCp8r%2FaKUVVI%2BAJFctgDa5tKtJFzILDkOWjNbHDQ%2FOwUVK7XhIrJ4QT7nhTiRvKAdHh795sizGTbDBX%2FVzM5dCIENe7RxW8cYKhab6fk%2FYHITyTtXe%2FgGn%2B61VHtr3CXQGCJFlWzunSaNLOPokO8gFiUBpk8tU3jUCIUiGw0soSRgpFljvZXw8Ngy%2B6C2ybV3ii9MqS9lo%2B7qKWGvUoRlVmAZI7Zfz69hCKJ4Lbjrd%2Fbus89zBC5kiqAwbXT2NVJuA4CgflJgpoRKl7ALCv8K5%2FoDmsgRjFq6Y5J2hQPOnX%2B1Kno6kEsSrvRRTDWmw4iVf53g1f2xOLyf9u2sHpoIggL7a8LPTYsQzsAWh5wodG3N2P7%2BlWI5PWkNQnXHEJOtQoJHE9Dyo8D8AjrI2M8fmnIMTLc3YQv2RPv45eeiUfY3s7oyCXTZTp5%2FbxzwnXaSkA24mNs%2FxiEuJkBd3kIKbIJGTTNYr7Gq63iVNbjilrgl7%2B3mc1120PX6lMfSHAHJ6hQVOMgcnNO2FqjjlhToiRKYb2A7A0lp1PEgbTIqF4zu5NxIJd%2B%2Ftcm6kN%2BOFeYBCQ1%2FuzBaQaQ4SerW%2FwQt6pFfhcA2IFJhvPKSYL%2FYaEDedAW0nSMJLss8IGOqUBq9fSMatbYB9%2F6kMOzr0AHV8wTOf1BBEkcXVzrCsNs5c2yrYH0DJ39edQkoLJ2lOEXdTZ%2FHjA0a%2B%2BvvrGIlv8pU%2FPlRbZu6%2BjSPTk5PwdUB03jcGs%2B3qK8h1fckjf7Cl2eVy%2BAcG%2Fj%2FI86hL12vtKMW1U3OCtq9l79BDXah7IxvD6wPy7VF5TzJDWue0x242sMNwPRsL%2Fr9TIE5MkRJ69VYYE1Huh&X-Amz-Signature=290594f06a214df4c57ed4a7b376554a8dbd3fe30d5af2d14d32ca2a1051477a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NP5RF5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfyltVUSJ16fwPXugfv3SLSVGU01UowBsqkmy0f35F7AiEA2uOUQqHytngt%2FUircf6Dtx2KW096N2rzcs3cRU4wZVUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIFb%2Bl4BZlxXSfg8dircA0YLFTipRsCp8r%2FaKUVVI%2BAJFctgDa5tKtJFzILDkOWjNbHDQ%2FOwUVK7XhIrJ4QT7nhTiRvKAdHh795sizGTbDBX%2FVzM5dCIENe7RxW8cYKhab6fk%2FYHITyTtXe%2FgGn%2B61VHtr3CXQGCJFlWzunSaNLOPokO8gFiUBpk8tU3jUCIUiGw0soSRgpFljvZXw8Ngy%2B6C2ybV3ii9MqS9lo%2B7qKWGvUoRlVmAZI7Zfz69hCKJ4Lbjrd%2Fbus89zBC5kiqAwbXT2NVJuA4CgflJgpoRKl7ALCv8K5%2FoDmsgRjFq6Y5J2hQPOnX%2B1Kno6kEsSrvRRTDWmw4iVf53g1f2xOLyf9u2sHpoIggL7a8LPTYsQzsAWh5wodG3N2P7%2BlWI5PWkNQnXHEJOtQoJHE9Dyo8D8AjrI2M8fmnIMTLc3YQv2RPv45eeiUfY3s7oyCXTZTp5%2FbxzwnXaSkA24mNs%2FxiEuJkBd3kIKbIJGTTNYr7Gq63iVNbjilrgl7%2B3mc1120PX6lMfSHAHJ6hQVOMgcnNO2FqjjlhToiRKYb2A7A0lp1PEgbTIqF4zu5NxIJd%2B%2Ftcm6kN%2BOFeYBCQ1%2FuzBaQaQ4SerW%2FwQt6pFfhcA2IFJhvPKSYL%2FYaEDedAW0nSMJLss8IGOqUBq9fSMatbYB9%2F6kMOzr0AHV8wTOf1BBEkcXVzrCsNs5c2yrYH0DJ39edQkoLJ2lOEXdTZ%2FHjA0a%2B%2BvvrGIlv8pU%2FPlRbZu6%2BjSPTk5PwdUB03jcGs%2B3qK8h1fckjf7Cl2eVy%2BAcG%2Fj%2FI86hL12vtKMW1U3OCtq9l79BDXah7IxvD6wPy7VF5TzJDWue0x242sMNwPRsL%2Fr9TIE5MkRJ69VYYE1Huh&X-Amz-Signature=6b32f6f37346d3cd2897f2371cc2f31cb5eda39115760bfb3a97f7a8d12dcdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NP5RF5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfyltVUSJ16fwPXugfv3SLSVGU01UowBsqkmy0f35F7AiEA2uOUQqHytngt%2FUircf6Dtx2KW096N2rzcs3cRU4wZVUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIFb%2Bl4BZlxXSfg8dircA0YLFTipRsCp8r%2FaKUVVI%2BAJFctgDa5tKtJFzILDkOWjNbHDQ%2FOwUVK7XhIrJ4QT7nhTiRvKAdHh795sizGTbDBX%2FVzM5dCIENe7RxW8cYKhab6fk%2FYHITyTtXe%2FgGn%2B61VHtr3CXQGCJFlWzunSaNLOPokO8gFiUBpk8tU3jUCIUiGw0soSRgpFljvZXw8Ngy%2B6C2ybV3ii9MqS9lo%2B7qKWGvUoRlVmAZI7Zfz69hCKJ4Lbjrd%2Fbus89zBC5kiqAwbXT2NVJuA4CgflJgpoRKl7ALCv8K5%2FoDmsgRjFq6Y5J2hQPOnX%2B1Kno6kEsSrvRRTDWmw4iVf53g1f2xOLyf9u2sHpoIggL7a8LPTYsQzsAWh5wodG3N2P7%2BlWI5PWkNQnXHEJOtQoJHE9Dyo8D8AjrI2M8fmnIMTLc3YQv2RPv45eeiUfY3s7oyCXTZTp5%2FbxzwnXaSkA24mNs%2FxiEuJkBd3kIKbIJGTTNYr7Gq63iVNbjilrgl7%2B3mc1120PX6lMfSHAHJ6hQVOMgcnNO2FqjjlhToiRKYb2A7A0lp1PEgbTIqF4zu5NxIJd%2B%2Ftcm6kN%2BOFeYBCQ1%2FuzBaQaQ4SerW%2FwQt6pFfhcA2IFJhvPKSYL%2FYaEDedAW0nSMJLss8IGOqUBq9fSMatbYB9%2F6kMOzr0AHV8wTOf1BBEkcXVzrCsNs5c2yrYH0DJ39edQkoLJ2lOEXdTZ%2FHjA0a%2B%2BvvrGIlv8pU%2FPlRbZu6%2BjSPTk5PwdUB03jcGs%2B3qK8h1fckjf7Cl2eVy%2BAcG%2Fj%2FI86hL12vtKMW1U3OCtq9l79BDXah7IxvD6wPy7VF5TzJDWue0x242sMNwPRsL%2Fr9TIE5MkRJ69VYYE1Huh&X-Amz-Signature=d2899004a7dea673ab8191ce7feaae35e78b1a5dcbb603497822feefbbdeea95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NP5RF5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfyltVUSJ16fwPXugfv3SLSVGU01UowBsqkmy0f35F7AiEA2uOUQqHytngt%2FUircf6Dtx2KW096N2rzcs3cRU4wZVUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIFb%2Bl4BZlxXSfg8dircA0YLFTipRsCp8r%2FaKUVVI%2BAJFctgDa5tKtJFzILDkOWjNbHDQ%2FOwUVK7XhIrJ4QT7nhTiRvKAdHh795sizGTbDBX%2FVzM5dCIENe7RxW8cYKhab6fk%2FYHITyTtXe%2FgGn%2B61VHtr3CXQGCJFlWzunSaNLOPokO8gFiUBpk8tU3jUCIUiGw0soSRgpFljvZXw8Ngy%2B6C2ybV3ii9MqS9lo%2B7qKWGvUoRlVmAZI7Zfz69hCKJ4Lbjrd%2Fbus89zBC5kiqAwbXT2NVJuA4CgflJgpoRKl7ALCv8K5%2FoDmsgRjFq6Y5J2hQPOnX%2B1Kno6kEsSrvRRTDWmw4iVf53g1f2xOLyf9u2sHpoIggL7a8LPTYsQzsAWh5wodG3N2P7%2BlWI5PWkNQnXHEJOtQoJHE9Dyo8D8AjrI2M8fmnIMTLc3YQv2RPv45eeiUfY3s7oyCXTZTp5%2FbxzwnXaSkA24mNs%2FxiEuJkBd3kIKbIJGTTNYr7Gq63iVNbjilrgl7%2B3mc1120PX6lMfSHAHJ6hQVOMgcnNO2FqjjlhToiRKYb2A7A0lp1PEgbTIqF4zu5NxIJd%2B%2Ftcm6kN%2BOFeYBCQ1%2FuzBaQaQ4SerW%2FwQt6pFfhcA2IFJhvPKSYL%2FYaEDedAW0nSMJLss8IGOqUBq9fSMatbYB9%2F6kMOzr0AHV8wTOf1BBEkcXVzrCsNs5c2yrYH0DJ39edQkoLJ2lOEXdTZ%2FHjA0a%2B%2BvvrGIlv8pU%2FPlRbZu6%2BjSPTk5PwdUB03jcGs%2B3qK8h1fckjf7Cl2eVy%2BAcG%2Fj%2FI86hL12vtKMW1U3OCtq9l79BDXah7IxvD6wPy7VF5TzJDWue0x242sMNwPRsL%2Fr9TIE5MkRJ69VYYE1Huh&X-Amz-Signature=f4c50dc3e6b7a7189ef4d5e532f6529ea6d6a922a89679e38429a575e4e99297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NP5RF5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfyltVUSJ16fwPXugfv3SLSVGU01UowBsqkmy0f35F7AiEA2uOUQqHytngt%2FUircf6Dtx2KW096N2rzcs3cRU4wZVUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIFb%2Bl4BZlxXSfg8dircA0YLFTipRsCp8r%2FaKUVVI%2BAJFctgDa5tKtJFzILDkOWjNbHDQ%2FOwUVK7XhIrJ4QT7nhTiRvKAdHh795sizGTbDBX%2FVzM5dCIENe7RxW8cYKhab6fk%2FYHITyTtXe%2FgGn%2B61VHtr3CXQGCJFlWzunSaNLOPokO8gFiUBpk8tU3jUCIUiGw0soSRgpFljvZXw8Ngy%2B6C2ybV3ii9MqS9lo%2B7qKWGvUoRlVmAZI7Zfz69hCKJ4Lbjrd%2Fbus89zBC5kiqAwbXT2NVJuA4CgflJgpoRKl7ALCv8K5%2FoDmsgRjFq6Y5J2hQPOnX%2B1Kno6kEsSrvRRTDWmw4iVf53g1f2xOLyf9u2sHpoIggL7a8LPTYsQzsAWh5wodG3N2P7%2BlWI5PWkNQnXHEJOtQoJHE9Dyo8D8AjrI2M8fmnIMTLc3YQv2RPv45eeiUfY3s7oyCXTZTp5%2FbxzwnXaSkA24mNs%2FxiEuJkBd3kIKbIJGTTNYr7Gq63iVNbjilrgl7%2B3mc1120PX6lMfSHAHJ6hQVOMgcnNO2FqjjlhToiRKYb2A7A0lp1PEgbTIqF4zu5NxIJd%2B%2Ftcm6kN%2BOFeYBCQ1%2FuzBaQaQ4SerW%2FwQt6pFfhcA2IFJhvPKSYL%2FYaEDedAW0nSMJLss8IGOqUBq9fSMatbYB9%2F6kMOzr0AHV8wTOf1BBEkcXVzrCsNs5c2yrYH0DJ39edQkoLJ2lOEXdTZ%2FHjA0a%2B%2BvvrGIlv8pU%2FPlRbZu6%2BjSPTk5PwdUB03jcGs%2B3qK8h1fckjf7Cl2eVy%2BAcG%2Fj%2FI86hL12vtKMW1U3OCtq9l79BDXah7IxvD6wPy7VF5TzJDWue0x242sMNwPRsL%2Fr9TIE5MkRJ69VYYE1Huh&X-Amz-Signature=f473af031eba85e0b5a1e8d8bd4e972b49e2adf0a2a92f59dae10cbc63902f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NP5RF5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfyltVUSJ16fwPXugfv3SLSVGU01UowBsqkmy0f35F7AiEA2uOUQqHytngt%2FUircf6Dtx2KW096N2rzcs3cRU4wZVUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIFb%2Bl4BZlxXSfg8dircA0YLFTipRsCp8r%2FaKUVVI%2BAJFctgDa5tKtJFzILDkOWjNbHDQ%2FOwUVK7XhIrJ4QT7nhTiRvKAdHh795sizGTbDBX%2FVzM5dCIENe7RxW8cYKhab6fk%2FYHITyTtXe%2FgGn%2B61VHtr3CXQGCJFlWzunSaNLOPokO8gFiUBpk8tU3jUCIUiGw0soSRgpFljvZXw8Ngy%2B6C2ybV3ii9MqS9lo%2B7qKWGvUoRlVmAZI7Zfz69hCKJ4Lbjrd%2Fbus89zBC5kiqAwbXT2NVJuA4CgflJgpoRKl7ALCv8K5%2FoDmsgRjFq6Y5J2hQPOnX%2B1Kno6kEsSrvRRTDWmw4iVf53g1f2xOLyf9u2sHpoIggL7a8LPTYsQzsAWh5wodG3N2P7%2BlWI5PWkNQnXHEJOtQoJHE9Dyo8D8AjrI2M8fmnIMTLc3YQv2RPv45eeiUfY3s7oyCXTZTp5%2FbxzwnXaSkA24mNs%2FxiEuJkBd3kIKbIJGTTNYr7Gq63iVNbjilrgl7%2B3mc1120PX6lMfSHAHJ6hQVOMgcnNO2FqjjlhToiRKYb2A7A0lp1PEgbTIqF4zu5NxIJd%2B%2Ftcm6kN%2BOFeYBCQ1%2FuzBaQaQ4SerW%2FwQt6pFfhcA2IFJhvPKSYL%2FYaEDedAW0nSMJLss8IGOqUBq9fSMatbYB9%2F6kMOzr0AHV8wTOf1BBEkcXVzrCsNs5c2yrYH0DJ39edQkoLJ2lOEXdTZ%2FHjA0a%2B%2BvvrGIlv8pU%2FPlRbZu6%2BjSPTk5PwdUB03jcGs%2B3qK8h1fckjf7Cl2eVy%2BAcG%2Fj%2FI86hL12vtKMW1U3OCtq9l79BDXah7IxvD6wPy7VF5TzJDWue0x242sMNwPRsL%2Fr9TIE5MkRJ69VYYE1Huh&X-Amz-Signature=c39f0fde8ee7cf8a835078ce4e4c790ce93cbe5a97f0695cde082dc373bcbef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
