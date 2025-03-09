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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHSENLK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIC0zmIkGmxHdeD49vidRxOsPWS8MWLtizCUZxz3yBInZAiEAz4uU%2FAEaCxtJYwkweyH60Kn4lE2jkhTUhmd1xaRu%2F1sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB9cpTIOS2F5SIeoSircAxwrLmIQWETvWw3jf%2Fogl8Z2UHbWZMfj6yfLA1JI%2FH6BsGGVG5cLGmpEa8WdP06rMzeag2FCp2OC1IdkYQ9fI3zSl%2Fp7ysf7qYslrHg8eDFwoW7k5legCXdw4XdVf%2Bi7B%2Fac0XRjOlekHvcbnjbS8YTYU25V7Xnj2lDuLmr8%2F4fXb1y6hkgwkTuBcMV1CkQy2j6YmdBX5i%2Bv%2BlDE9FzWpUe81VRzzKPYChHhHuIlfKCcuj5h0cNVCoemMSHam7h7NGzISnURvVCAtj%2FKZIsOU0cGXfhsdZb7C8a5ARW1N3rdoTD8zN1Kujr5TN0g4dtZohSHC7%2FBhWSG3mOAcRb9eqGyXLn8xdg53ga%2F6z0RaQ8toiCKcZXOi9B4nkzOs6aPL9ZpuhKtZVHCBxYnIhBMoGD7H3xGMCy3%2BYcvW9BdL80wN6d6My8D7NaYA%2BHRJoylF%2B6NOtq6xBvTwg1R9ZTIpZT1FmA3mb%2Fe8jMx00dfkD7nIh2onbo0TZUGOWYY8bPDclpuZ2UfX6tCqsrI35kdOTa6jz5i19Rd8mtrmm7LIOxKFax%2Fs0oLoQO%2FDqPIlmZ9l4piYnx2xoXo06p0hzfPBmooLWUjdMFLtPv7ErlZnsQ2X1cbaKom%2F7aODjnXMIzrtL4GOqUBa3Su4pgmrYR0gKGRN1%2B7TEjTWS4AqjiCothzcxud%2F%2BJfCUw7MYhc0J3grA8ABdP4GbZWMtAR9yj2%2B125VMMcekKj%2FvjMxR8sFYHpz93%2BtF7qYfsuSBj4dd%2FMN5OScbbWn1E1bK7JGAVx3KSH1TEK3GsvgxwbPgDL%2FgW1ph0Tk8mWxialtsBD6MphkeLAZ5w0nsULkRlOolpq0ldAw0Hi3bV3Poht&X-Amz-Signature=4c2e7c25075e6cb96c80e3aa3bad2bb7cc25efe499ba3319357c6a4eb44d2248&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHSENLK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIC0zmIkGmxHdeD49vidRxOsPWS8MWLtizCUZxz3yBInZAiEAz4uU%2FAEaCxtJYwkweyH60Kn4lE2jkhTUhmd1xaRu%2F1sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB9cpTIOS2F5SIeoSircAxwrLmIQWETvWw3jf%2Fogl8Z2UHbWZMfj6yfLA1JI%2FH6BsGGVG5cLGmpEa8WdP06rMzeag2FCp2OC1IdkYQ9fI3zSl%2Fp7ysf7qYslrHg8eDFwoW7k5legCXdw4XdVf%2Bi7B%2Fac0XRjOlekHvcbnjbS8YTYU25V7Xnj2lDuLmr8%2F4fXb1y6hkgwkTuBcMV1CkQy2j6YmdBX5i%2Bv%2BlDE9FzWpUe81VRzzKPYChHhHuIlfKCcuj5h0cNVCoemMSHam7h7NGzISnURvVCAtj%2FKZIsOU0cGXfhsdZb7C8a5ARW1N3rdoTD8zN1Kujr5TN0g4dtZohSHC7%2FBhWSG3mOAcRb9eqGyXLn8xdg53ga%2F6z0RaQ8toiCKcZXOi9B4nkzOs6aPL9ZpuhKtZVHCBxYnIhBMoGD7H3xGMCy3%2BYcvW9BdL80wN6d6My8D7NaYA%2BHRJoylF%2B6NOtq6xBvTwg1R9ZTIpZT1FmA3mb%2Fe8jMx00dfkD7nIh2onbo0TZUGOWYY8bPDclpuZ2UfX6tCqsrI35kdOTa6jz5i19Rd8mtrmm7LIOxKFax%2Fs0oLoQO%2FDqPIlmZ9l4piYnx2xoXo06p0hzfPBmooLWUjdMFLtPv7ErlZnsQ2X1cbaKom%2F7aODjnXMIzrtL4GOqUBa3Su4pgmrYR0gKGRN1%2B7TEjTWS4AqjiCothzcxud%2F%2BJfCUw7MYhc0J3grA8ABdP4GbZWMtAR9yj2%2B125VMMcekKj%2FvjMxR8sFYHpz93%2BtF7qYfsuSBj4dd%2FMN5OScbbWn1E1bK7JGAVx3KSH1TEK3GsvgxwbPgDL%2FgW1ph0Tk8mWxialtsBD6MphkeLAZ5w0nsULkRlOolpq0ldAw0Hi3bV3Poht&X-Amz-Signature=d6b24ed3d3399852e45f9a1ae23639c383b4d4c6ee316aef0f509bb2dcef80c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHSENLK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIC0zmIkGmxHdeD49vidRxOsPWS8MWLtizCUZxz3yBInZAiEAz4uU%2FAEaCxtJYwkweyH60Kn4lE2jkhTUhmd1xaRu%2F1sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB9cpTIOS2F5SIeoSircAxwrLmIQWETvWw3jf%2Fogl8Z2UHbWZMfj6yfLA1JI%2FH6BsGGVG5cLGmpEa8WdP06rMzeag2FCp2OC1IdkYQ9fI3zSl%2Fp7ysf7qYslrHg8eDFwoW7k5legCXdw4XdVf%2Bi7B%2Fac0XRjOlekHvcbnjbS8YTYU25V7Xnj2lDuLmr8%2F4fXb1y6hkgwkTuBcMV1CkQy2j6YmdBX5i%2Bv%2BlDE9FzWpUe81VRzzKPYChHhHuIlfKCcuj5h0cNVCoemMSHam7h7NGzISnURvVCAtj%2FKZIsOU0cGXfhsdZb7C8a5ARW1N3rdoTD8zN1Kujr5TN0g4dtZohSHC7%2FBhWSG3mOAcRb9eqGyXLn8xdg53ga%2F6z0RaQ8toiCKcZXOi9B4nkzOs6aPL9ZpuhKtZVHCBxYnIhBMoGD7H3xGMCy3%2BYcvW9BdL80wN6d6My8D7NaYA%2BHRJoylF%2B6NOtq6xBvTwg1R9ZTIpZT1FmA3mb%2Fe8jMx00dfkD7nIh2onbo0TZUGOWYY8bPDclpuZ2UfX6tCqsrI35kdOTa6jz5i19Rd8mtrmm7LIOxKFax%2Fs0oLoQO%2FDqPIlmZ9l4piYnx2xoXo06p0hzfPBmooLWUjdMFLtPv7ErlZnsQ2X1cbaKom%2F7aODjnXMIzrtL4GOqUBa3Su4pgmrYR0gKGRN1%2B7TEjTWS4AqjiCothzcxud%2F%2BJfCUw7MYhc0J3grA8ABdP4GbZWMtAR9yj2%2B125VMMcekKj%2FvjMxR8sFYHpz93%2BtF7qYfsuSBj4dd%2FMN5OScbbWn1E1bK7JGAVx3KSH1TEK3GsvgxwbPgDL%2FgW1ph0Tk8mWxialtsBD6MphkeLAZ5w0nsULkRlOolpq0ldAw0Hi3bV3Poht&X-Amz-Signature=5dd9dc6170095af9caedcbb34d0632d721197754d72dcd3ccd20b5310f7c9c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHSENLK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIC0zmIkGmxHdeD49vidRxOsPWS8MWLtizCUZxz3yBInZAiEAz4uU%2FAEaCxtJYwkweyH60Kn4lE2jkhTUhmd1xaRu%2F1sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB9cpTIOS2F5SIeoSircAxwrLmIQWETvWw3jf%2Fogl8Z2UHbWZMfj6yfLA1JI%2FH6BsGGVG5cLGmpEa8WdP06rMzeag2FCp2OC1IdkYQ9fI3zSl%2Fp7ysf7qYslrHg8eDFwoW7k5legCXdw4XdVf%2Bi7B%2Fac0XRjOlekHvcbnjbS8YTYU25V7Xnj2lDuLmr8%2F4fXb1y6hkgwkTuBcMV1CkQy2j6YmdBX5i%2Bv%2BlDE9FzWpUe81VRzzKPYChHhHuIlfKCcuj5h0cNVCoemMSHam7h7NGzISnURvVCAtj%2FKZIsOU0cGXfhsdZb7C8a5ARW1N3rdoTD8zN1Kujr5TN0g4dtZohSHC7%2FBhWSG3mOAcRb9eqGyXLn8xdg53ga%2F6z0RaQ8toiCKcZXOi9B4nkzOs6aPL9ZpuhKtZVHCBxYnIhBMoGD7H3xGMCy3%2BYcvW9BdL80wN6d6My8D7NaYA%2BHRJoylF%2B6NOtq6xBvTwg1R9ZTIpZT1FmA3mb%2Fe8jMx00dfkD7nIh2onbo0TZUGOWYY8bPDclpuZ2UfX6tCqsrI35kdOTa6jz5i19Rd8mtrmm7LIOxKFax%2Fs0oLoQO%2FDqPIlmZ9l4piYnx2xoXo06p0hzfPBmooLWUjdMFLtPv7ErlZnsQ2X1cbaKom%2F7aODjnXMIzrtL4GOqUBa3Su4pgmrYR0gKGRN1%2B7TEjTWS4AqjiCothzcxud%2F%2BJfCUw7MYhc0J3grA8ABdP4GbZWMtAR9yj2%2B125VMMcekKj%2FvjMxR8sFYHpz93%2BtF7qYfsuSBj4dd%2FMN5OScbbWn1E1bK7JGAVx3KSH1TEK3GsvgxwbPgDL%2FgW1ph0Tk8mWxialtsBD6MphkeLAZ5w0nsULkRlOolpq0ldAw0Hi3bV3Poht&X-Amz-Signature=d2860945d5642dd80962056677a71fd55b67b2574732f5264e0457e27ae8f8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHSENLK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIC0zmIkGmxHdeD49vidRxOsPWS8MWLtizCUZxz3yBInZAiEAz4uU%2FAEaCxtJYwkweyH60Kn4lE2jkhTUhmd1xaRu%2F1sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB9cpTIOS2F5SIeoSircAxwrLmIQWETvWw3jf%2Fogl8Z2UHbWZMfj6yfLA1JI%2FH6BsGGVG5cLGmpEa8WdP06rMzeag2FCp2OC1IdkYQ9fI3zSl%2Fp7ysf7qYslrHg8eDFwoW7k5legCXdw4XdVf%2Bi7B%2Fac0XRjOlekHvcbnjbS8YTYU25V7Xnj2lDuLmr8%2F4fXb1y6hkgwkTuBcMV1CkQy2j6YmdBX5i%2Bv%2BlDE9FzWpUe81VRzzKPYChHhHuIlfKCcuj5h0cNVCoemMSHam7h7NGzISnURvVCAtj%2FKZIsOU0cGXfhsdZb7C8a5ARW1N3rdoTD8zN1Kujr5TN0g4dtZohSHC7%2FBhWSG3mOAcRb9eqGyXLn8xdg53ga%2F6z0RaQ8toiCKcZXOi9B4nkzOs6aPL9ZpuhKtZVHCBxYnIhBMoGD7H3xGMCy3%2BYcvW9BdL80wN6d6My8D7NaYA%2BHRJoylF%2B6NOtq6xBvTwg1R9ZTIpZT1FmA3mb%2Fe8jMx00dfkD7nIh2onbo0TZUGOWYY8bPDclpuZ2UfX6tCqsrI35kdOTa6jz5i19Rd8mtrmm7LIOxKFax%2Fs0oLoQO%2FDqPIlmZ9l4piYnx2xoXo06p0hzfPBmooLWUjdMFLtPv7ErlZnsQ2X1cbaKom%2F7aODjnXMIzrtL4GOqUBa3Su4pgmrYR0gKGRN1%2B7TEjTWS4AqjiCothzcxud%2F%2BJfCUw7MYhc0J3grA8ABdP4GbZWMtAR9yj2%2B125VMMcekKj%2FvjMxR8sFYHpz93%2BtF7qYfsuSBj4dd%2FMN5OScbbWn1E1bK7JGAVx3KSH1TEK3GsvgxwbPgDL%2FgW1ph0Tk8mWxialtsBD6MphkeLAZ5w0nsULkRlOolpq0ldAw0Hi3bV3Poht&X-Amz-Signature=9eb7b9b84fb9726b16dba114bd4630f4b4d262db2489f63bc6449341b87d40c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHSENLK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIC0zmIkGmxHdeD49vidRxOsPWS8MWLtizCUZxz3yBInZAiEAz4uU%2FAEaCxtJYwkweyH60Kn4lE2jkhTUhmd1xaRu%2F1sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB9cpTIOS2F5SIeoSircAxwrLmIQWETvWw3jf%2Fogl8Z2UHbWZMfj6yfLA1JI%2FH6BsGGVG5cLGmpEa8WdP06rMzeag2FCp2OC1IdkYQ9fI3zSl%2Fp7ysf7qYslrHg8eDFwoW7k5legCXdw4XdVf%2Bi7B%2Fac0XRjOlekHvcbnjbS8YTYU25V7Xnj2lDuLmr8%2F4fXb1y6hkgwkTuBcMV1CkQy2j6YmdBX5i%2Bv%2BlDE9FzWpUe81VRzzKPYChHhHuIlfKCcuj5h0cNVCoemMSHam7h7NGzISnURvVCAtj%2FKZIsOU0cGXfhsdZb7C8a5ARW1N3rdoTD8zN1Kujr5TN0g4dtZohSHC7%2FBhWSG3mOAcRb9eqGyXLn8xdg53ga%2F6z0RaQ8toiCKcZXOi9B4nkzOs6aPL9ZpuhKtZVHCBxYnIhBMoGD7H3xGMCy3%2BYcvW9BdL80wN6d6My8D7NaYA%2BHRJoylF%2B6NOtq6xBvTwg1R9ZTIpZT1FmA3mb%2Fe8jMx00dfkD7nIh2onbo0TZUGOWYY8bPDclpuZ2UfX6tCqsrI35kdOTa6jz5i19Rd8mtrmm7LIOxKFax%2Fs0oLoQO%2FDqPIlmZ9l4piYnx2xoXo06p0hzfPBmooLWUjdMFLtPv7ErlZnsQ2X1cbaKom%2F7aODjnXMIzrtL4GOqUBa3Su4pgmrYR0gKGRN1%2B7TEjTWS4AqjiCothzcxud%2F%2BJfCUw7MYhc0J3grA8ABdP4GbZWMtAR9yj2%2B125VMMcekKj%2FvjMxR8sFYHpz93%2BtF7qYfsuSBj4dd%2FMN5OScbbWn1E1bK7JGAVx3KSH1TEK3GsvgxwbPgDL%2FgW1ph0Tk8mWxialtsBD6MphkeLAZ5w0nsULkRlOolpq0ldAw0Hi3bV3Poht&X-Amz-Signature=866ab62caf59990d8597c7c542753ae89288deefc3f77067697ef9319a85070b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHSENLK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIC0zmIkGmxHdeD49vidRxOsPWS8MWLtizCUZxz3yBInZAiEAz4uU%2FAEaCxtJYwkweyH60Kn4lE2jkhTUhmd1xaRu%2F1sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDB9cpTIOS2F5SIeoSircAxwrLmIQWETvWw3jf%2Fogl8Z2UHbWZMfj6yfLA1JI%2FH6BsGGVG5cLGmpEa8WdP06rMzeag2FCp2OC1IdkYQ9fI3zSl%2Fp7ysf7qYslrHg8eDFwoW7k5legCXdw4XdVf%2Bi7B%2Fac0XRjOlekHvcbnjbS8YTYU25V7Xnj2lDuLmr8%2F4fXb1y6hkgwkTuBcMV1CkQy2j6YmdBX5i%2Bv%2BlDE9FzWpUe81VRzzKPYChHhHuIlfKCcuj5h0cNVCoemMSHam7h7NGzISnURvVCAtj%2FKZIsOU0cGXfhsdZb7C8a5ARW1N3rdoTD8zN1Kujr5TN0g4dtZohSHC7%2FBhWSG3mOAcRb9eqGyXLn8xdg53ga%2F6z0RaQ8toiCKcZXOi9B4nkzOs6aPL9ZpuhKtZVHCBxYnIhBMoGD7H3xGMCy3%2BYcvW9BdL80wN6d6My8D7NaYA%2BHRJoylF%2B6NOtq6xBvTwg1R9ZTIpZT1FmA3mb%2Fe8jMx00dfkD7nIh2onbo0TZUGOWYY8bPDclpuZ2UfX6tCqsrI35kdOTa6jz5i19Rd8mtrmm7LIOxKFax%2Fs0oLoQO%2FDqPIlmZ9l4piYnx2xoXo06p0hzfPBmooLWUjdMFLtPv7ErlZnsQ2X1cbaKom%2F7aODjnXMIzrtL4GOqUBa3Su4pgmrYR0gKGRN1%2B7TEjTWS4AqjiCothzcxud%2F%2BJfCUw7MYhc0J3grA8ABdP4GbZWMtAR9yj2%2B125VMMcekKj%2FvjMxR8sFYHpz93%2BtF7qYfsuSBj4dd%2FMN5OScbbWn1E1bK7JGAVx3KSH1TEK3GsvgxwbPgDL%2FgW1ph0Tk8mWxialtsBD6MphkeLAZ5w0nsULkRlOolpq0ldAw0Hi3bV3Poht&X-Amz-Signature=a7043325bcef3b5a6bb73377ea9b0d075027ffc1838f2a5c997471f2be177663&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
