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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GAHWP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBiQYfD6gDc778z95OCuiDqQryq0VQT%2Brdm3Pisd%2BS9bAiBiFU68ktyM8GB4KC22KPSRK6gH%2B7UEVXOmKtbqcpOPryqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zlq%2Bi9aVWaNret9KtwD8UPgs6BHx7j%2FRCk%2BlqJcx7Yi64AKtf6SQChNon7yyTzQIOKldwU4JPHrpsC7oS7guRf9NFDsUi2prvAud%2FY%2FilO%2BRUMAqJBGBzjDf%2BPaQqir7xL%2FDXnw%2BHg6RAUDpZWrC5uYqFoCHKgjzDLmDenGbZm1ac%2B%2FeuVrlOLN31Yuae%2BzBnQfZPMznWH4agsKPaHfK%2BYrTg9vpxmNbxcyrzyaOGd8fGTlW5zb8ilQQ9sS6qRKl7rGKxW4m5fvnV46ZGFi4fd2sbKenZOToCukwpmhexDtNCyvLi5gOG0pb4Y7uzaYogkWy4alSPbxmH8A25rWXYpm2F3NHIQEawzTj9sBkpCOa%2FjJCSp18hIBJX3uG%2FqaXVrQysAnfc0tMNYHDL4953tWBeQft%2F4wIsO0alccKvbhHbbSgjKUS%2F9O8iSFBG3PiTBiNXLCbP4XFZ1ujbnYxw%2FbE9pgyyhaYXes3KWH20iC0INrpT9YLC%2FWNqRu9XWljk8jm3zEGFRIdbtWko1Qca51%2Bplf%2FlQ1196BNiJeUec6pj7Qkfx7JmLc9AQatUSCT538o7mImcF8lRpEga0GeyeL9dS09mR0UCSzQn9bwfxgy8%2BEmAPHCYlvM%2ByRbIDsQvswels6MBejxvgwkLPYvwY6pgGDB1aG2l3vMFaseyK32mrUN%2BGYdHB1uhFqAFqWZ80HkFyiQi2%2FpZXjLvomwnNxVXXhanwYNIQNYPMU%2B7Y9sxTxE2l6XeSrz%2B7vAilveNjdUhuTkzX5ZSZjE8k%2Bxk8RmCI0i2n8lucAkdtY3Lg%2FbQcMvowaAwKtzrwZuWOCyjk1It42GRHcYC95kMfUNEbMk%2FUFxC5LZrAkStnBtTPGNzeTOrj1v%2Fpt&X-Amz-Signature=5c9a962b4582b6599f1e076fed38695a3952025046d67afe0bf0d6bde4dd75d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GAHWP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBiQYfD6gDc778z95OCuiDqQryq0VQT%2Brdm3Pisd%2BS9bAiBiFU68ktyM8GB4KC22KPSRK6gH%2B7UEVXOmKtbqcpOPryqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zlq%2Bi9aVWaNret9KtwD8UPgs6BHx7j%2FRCk%2BlqJcx7Yi64AKtf6SQChNon7yyTzQIOKldwU4JPHrpsC7oS7guRf9NFDsUi2prvAud%2FY%2FilO%2BRUMAqJBGBzjDf%2BPaQqir7xL%2FDXnw%2BHg6RAUDpZWrC5uYqFoCHKgjzDLmDenGbZm1ac%2B%2FeuVrlOLN31Yuae%2BzBnQfZPMznWH4agsKPaHfK%2BYrTg9vpxmNbxcyrzyaOGd8fGTlW5zb8ilQQ9sS6qRKl7rGKxW4m5fvnV46ZGFi4fd2sbKenZOToCukwpmhexDtNCyvLi5gOG0pb4Y7uzaYogkWy4alSPbxmH8A25rWXYpm2F3NHIQEawzTj9sBkpCOa%2FjJCSp18hIBJX3uG%2FqaXVrQysAnfc0tMNYHDL4953tWBeQft%2F4wIsO0alccKvbhHbbSgjKUS%2F9O8iSFBG3PiTBiNXLCbP4XFZ1ujbnYxw%2FbE9pgyyhaYXes3KWH20iC0INrpT9YLC%2FWNqRu9XWljk8jm3zEGFRIdbtWko1Qca51%2Bplf%2FlQ1196BNiJeUec6pj7Qkfx7JmLc9AQatUSCT538o7mImcF8lRpEga0GeyeL9dS09mR0UCSzQn9bwfxgy8%2BEmAPHCYlvM%2ByRbIDsQvswels6MBejxvgwkLPYvwY6pgGDB1aG2l3vMFaseyK32mrUN%2BGYdHB1uhFqAFqWZ80HkFyiQi2%2FpZXjLvomwnNxVXXhanwYNIQNYPMU%2B7Y9sxTxE2l6XeSrz%2B7vAilveNjdUhuTkzX5ZSZjE8k%2Bxk8RmCI0i2n8lucAkdtY3Lg%2FbQcMvowaAwKtzrwZuWOCyjk1It42GRHcYC95kMfUNEbMk%2FUFxC5LZrAkStnBtTPGNzeTOrj1v%2Fpt&X-Amz-Signature=5cd5b5a6041bf00c46d92079dd6265aadde16b803c297915d0f40b05a0935fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GAHWP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBiQYfD6gDc778z95OCuiDqQryq0VQT%2Brdm3Pisd%2BS9bAiBiFU68ktyM8GB4KC22KPSRK6gH%2B7UEVXOmKtbqcpOPryqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zlq%2Bi9aVWaNret9KtwD8UPgs6BHx7j%2FRCk%2BlqJcx7Yi64AKtf6SQChNon7yyTzQIOKldwU4JPHrpsC7oS7guRf9NFDsUi2prvAud%2FY%2FilO%2BRUMAqJBGBzjDf%2BPaQqir7xL%2FDXnw%2BHg6RAUDpZWrC5uYqFoCHKgjzDLmDenGbZm1ac%2B%2FeuVrlOLN31Yuae%2BzBnQfZPMznWH4agsKPaHfK%2BYrTg9vpxmNbxcyrzyaOGd8fGTlW5zb8ilQQ9sS6qRKl7rGKxW4m5fvnV46ZGFi4fd2sbKenZOToCukwpmhexDtNCyvLi5gOG0pb4Y7uzaYogkWy4alSPbxmH8A25rWXYpm2F3NHIQEawzTj9sBkpCOa%2FjJCSp18hIBJX3uG%2FqaXVrQysAnfc0tMNYHDL4953tWBeQft%2F4wIsO0alccKvbhHbbSgjKUS%2F9O8iSFBG3PiTBiNXLCbP4XFZ1ujbnYxw%2FbE9pgyyhaYXes3KWH20iC0INrpT9YLC%2FWNqRu9XWljk8jm3zEGFRIdbtWko1Qca51%2Bplf%2FlQ1196BNiJeUec6pj7Qkfx7JmLc9AQatUSCT538o7mImcF8lRpEga0GeyeL9dS09mR0UCSzQn9bwfxgy8%2BEmAPHCYlvM%2ByRbIDsQvswels6MBejxvgwkLPYvwY6pgGDB1aG2l3vMFaseyK32mrUN%2BGYdHB1uhFqAFqWZ80HkFyiQi2%2FpZXjLvomwnNxVXXhanwYNIQNYPMU%2B7Y9sxTxE2l6XeSrz%2B7vAilveNjdUhuTkzX5ZSZjE8k%2Bxk8RmCI0i2n8lucAkdtY3Lg%2FbQcMvowaAwKtzrwZuWOCyjk1It42GRHcYC95kMfUNEbMk%2FUFxC5LZrAkStnBtTPGNzeTOrj1v%2Fpt&X-Amz-Signature=467c7779ca09410cdd7fbd3a81e3baf7a4c26089be39e99c9576e8d076659d65&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GAHWP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBiQYfD6gDc778z95OCuiDqQryq0VQT%2Brdm3Pisd%2BS9bAiBiFU68ktyM8GB4KC22KPSRK6gH%2B7UEVXOmKtbqcpOPryqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zlq%2Bi9aVWaNret9KtwD8UPgs6BHx7j%2FRCk%2BlqJcx7Yi64AKtf6SQChNon7yyTzQIOKldwU4JPHrpsC7oS7guRf9NFDsUi2prvAud%2FY%2FilO%2BRUMAqJBGBzjDf%2BPaQqir7xL%2FDXnw%2BHg6RAUDpZWrC5uYqFoCHKgjzDLmDenGbZm1ac%2B%2FeuVrlOLN31Yuae%2BzBnQfZPMznWH4agsKPaHfK%2BYrTg9vpxmNbxcyrzyaOGd8fGTlW5zb8ilQQ9sS6qRKl7rGKxW4m5fvnV46ZGFi4fd2sbKenZOToCukwpmhexDtNCyvLi5gOG0pb4Y7uzaYogkWy4alSPbxmH8A25rWXYpm2F3NHIQEawzTj9sBkpCOa%2FjJCSp18hIBJX3uG%2FqaXVrQysAnfc0tMNYHDL4953tWBeQft%2F4wIsO0alccKvbhHbbSgjKUS%2F9O8iSFBG3PiTBiNXLCbP4XFZ1ujbnYxw%2FbE9pgyyhaYXes3KWH20iC0INrpT9YLC%2FWNqRu9XWljk8jm3zEGFRIdbtWko1Qca51%2Bplf%2FlQ1196BNiJeUec6pj7Qkfx7JmLc9AQatUSCT538o7mImcF8lRpEga0GeyeL9dS09mR0UCSzQn9bwfxgy8%2BEmAPHCYlvM%2ByRbIDsQvswels6MBejxvgwkLPYvwY6pgGDB1aG2l3vMFaseyK32mrUN%2BGYdHB1uhFqAFqWZ80HkFyiQi2%2FpZXjLvomwnNxVXXhanwYNIQNYPMU%2B7Y9sxTxE2l6XeSrz%2B7vAilveNjdUhuTkzX5ZSZjE8k%2Bxk8RmCI0i2n8lucAkdtY3Lg%2FbQcMvowaAwKtzrwZuWOCyjk1It42GRHcYC95kMfUNEbMk%2FUFxC5LZrAkStnBtTPGNzeTOrj1v%2Fpt&X-Amz-Signature=41008aecd67bd0acba48a863c8d3d612424ab74a2679d725aa3819e483b64858&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GAHWP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBiQYfD6gDc778z95OCuiDqQryq0VQT%2Brdm3Pisd%2BS9bAiBiFU68ktyM8GB4KC22KPSRK6gH%2B7UEVXOmKtbqcpOPryqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zlq%2Bi9aVWaNret9KtwD8UPgs6BHx7j%2FRCk%2BlqJcx7Yi64AKtf6SQChNon7yyTzQIOKldwU4JPHrpsC7oS7guRf9NFDsUi2prvAud%2FY%2FilO%2BRUMAqJBGBzjDf%2BPaQqir7xL%2FDXnw%2BHg6RAUDpZWrC5uYqFoCHKgjzDLmDenGbZm1ac%2B%2FeuVrlOLN31Yuae%2BzBnQfZPMznWH4agsKPaHfK%2BYrTg9vpxmNbxcyrzyaOGd8fGTlW5zb8ilQQ9sS6qRKl7rGKxW4m5fvnV46ZGFi4fd2sbKenZOToCukwpmhexDtNCyvLi5gOG0pb4Y7uzaYogkWy4alSPbxmH8A25rWXYpm2F3NHIQEawzTj9sBkpCOa%2FjJCSp18hIBJX3uG%2FqaXVrQysAnfc0tMNYHDL4953tWBeQft%2F4wIsO0alccKvbhHbbSgjKUS%2F9O8iSFBG3PiTBiNXLCbP4XFZ1ujbnYxw%2FbE9pgyyhaYXes3KWH20iC0INrpT9YLC%2FWNqRu9XWljk8jm3zEGFRIdbtWko1Qca51%2Bplf%2FlQ1196BNiJeUec6pj7Qkfx7JmLc9AQatUSCT538o7mImcF8lRpEga0GeyeL9dS09mR0UCSzQn9bwfxgy8%2BEmAPHCYlvM%2ByRbIDsQvswels6MBejxvgwkLPYvwY6pgGDB1aG2l3vMFaseyK32mrUN%2BGYdHB1uhFqAFqWZ80HkFyiQi2%2FpZXjLvomwnNxVXXhanwYNIQNYPMU%2B7Y9sxTxE2l6XeSrz%2B7vAilveNjdUhuTkzX5ZSZjE8k%2Bxk8RmCI0i2n8lucAkdtY3Lg%2FbQcMvowaAwKtzrwZuWOCyjk1It42GRHcYC95kMfUNEbMk%2FUFxC5LZrAkStnBtTPGNzeTOrj1v%2Fpt&X-Amz-Signature=d2e70296795e1fe26b30c919eee8f4c154f92cbe964ca59ca0577b4b49272c66&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GAHWP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBiQYfD6gDc778z95OCuiDqQryq0VQT%2Brdm3Pisd%2BS9bAiBiFU68ktyM8GB4KC22KPSRK6gH%2B7UEVXOmKtbqcpOPryqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zlq%2Bi9aVWaNret9KtwD8UPgs6BHx7j%2FRCk%2BlqJcx7Yi64AKtf6SQChNon7yyTzQIOKldwU4JPHrpsC7oS7guRf9NFDsUi2prvAud%2FY%2FilO%2BRUMAqJBGBzjDf%2BPaQqir7xL%2FDXnw%2BHg6RAUDpZWrC5uYqFoCHKgjzDLmDenGbZm1ac%2B%2FeuVrlOLN31Yuae%2BzBnQfZPMznWH4agsKPaHfK%2BYrTg9vpxmNbxcyrzyaOGd8fGTlW5zb8ilQQ9sS6qRKl7rGKxW4m5fvnV46ZGFi4fd2sbKenZOToCukwpmhexDtNCyvLi5gOG0pb4Y7uzaYogkWy4alSPbxmH8A25rWXYpm2F3NHIQEawzTj9sBkpCOa%2FjJCSp18hIBJX3uG%2FqaXVrQysAnfc0tMNYHDL4953tWBeQft%2F4wIsO0alccKvbhHbbSgjKUS%2F9O8iSFBG3PiTBiNXLCbP4XFZ1ujbnYxw%2FbE9pgyyhaYXes3KWH20iC0INrpT9YLC%2FWNqRu9XWljk8jm3zEGFRIdbtWko1Qca51%2Bplf%2FlQ1196BNiJeUec6pj7Qkfx7JmLc9AQatUSCT538o7mImcF8lRpEga0GeyeL9dS09mR0UCSzQn9bwfxgy8%2BEmAPHCYlvM%2ByRbIDsQvswels6MBejxvgwkLPYvwY6pgGDB1aG2l3vMFaseyK32mrUN%2BGYdHB1uhFqAFqWZ80HkFyiQi2%2FpZXjLvomwnNxVXXhanwYNIQNYPMU%2B7Y9sxTxE2l6XeSrz%2B7vAilveNjdUhuTkzX5ZSZjE8k%2Bxk8RmCI0i2n8lucAkdtY3Lg%2FbQcMvowaAwKtzrwZuWOCyjk1It42GRHcYC95kMfUNEbMk%2FUFxC5LZrAkStnBtTPGNzeTOrj1v%2Fpt&X-Amz-Signature=baab7709376617a00cde349f85755831e15036e2d8fcb37558e82fc6f77b73de&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5GAHWP6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBiQYfD6gDc778z95OCuiDqQryq0VQT%2Brdm3Pisd%2BS9bAiBiFU68ktyM8GB4KC22KPSRK6gH%2B7UEVXOmKtbqcpOPryqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Zlq%2Bi9aVWaNret9KtwD8UPgs6BHx7j%2FRCk%2BlqJcx7Yi64AKtf6SQChNon7yyTzQIOKldwU4JPHrpsC7oS7guRf9NFDsUi2prvAud%2FY%2FilO%2BRUMAqJBGBzjDf%2BPaQqir7xL%2FDXnw%2BHg6RAUDpZWrC5uYqFoCHKgjzDLmDenGbZm1ac%2B%2FeuVrlOLN31Yuae%2BzBnQfZPMznWH4agsKPaHfK%2BYrTg9vpxmNbxcyrzyaOGd8fGTlW5zb8ilQQ9sS6qRKl7rGKxW4m5fvnV46ZGFi4fd2sbKenZOToCukwpmhexDtNCyvLi5gOG0pb4Y7uzaYogkWy4alSPbxmH8A25rWXYpm2F3NHIQEawzTj9sBkpCOa%2FjJCSp18hIBJX3uG%2FqaXVrQysAnfc0tMNYHDL4953tWBeQft%2F4wIsO0alccKvbhHbbSgjKUS%2F9O8iSFBG3PiTBiNXLCbP4XFZ1ujbnYxw%2FbE9pgyyhaYXes3KWH20iC0INrpT9YLC%2FWNqRu9XWljk8jm3zEGFRIdbtWko1Qca51%2Bplf%2FlQ1196BNiJeUec6pj7Qkfx7JmLc9AQatUSCT538o7mImcF8lRpEga0GeyeL9dS09mR0UCSzQn9bwfxgy8%2BEmAPHCYlvM%2ByRbIDsQvswels6MBejxvgwkLPYvwY6pgGDB1aG2l3vMFaseyK32mrUN%2BGYdHB1uhFqAFqWZ80HkFyiQi2%2FpZXjLvomwnNxVXXhanwYNIQNYPMU%2B7Y9sxTxE2l6XeSrz%2B7vAilveNjdUhuTkzX5ZSZjE8k%2Bxk8RmCI0i2n8lucAkdtY3Lg%2FbQcMvowaAwKtzrwZuWOCyjk1It42GRHcYC95kMfUNEbMk%2FUFxC5LZrAkStnBtTPGNzeTOrj1v%2Fpt&X-Amz-Signature=1351a9062c2b42680e27196a54157d750f921e8b1575e7e7d98a6c8bc1d7c58a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
