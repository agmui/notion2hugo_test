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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORJIQTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC2f1UOrbDecppLPQ2FvN7CYkPs1930YYZKfppJdLGxYQIgeIiBb%2FJiVKOUVrcx89YXTrC17T3IdXnrpXaZV2V0bF8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPBURvSF3KxlOWXXiyrcA4jlI8y22RBgAIMQMl9T4BleDiwEfKz6D4epzSP9sBU%2BTuPM33PD2AZM8y3qpVc0vMTrDa86J5ZBrjH4eph3hlyzQrrJ%2F%2FI705qUcqKBQ6wLL8gYvTcoQZgcvvYhWMSMeo4iunL3JBurhl1CU%2F8BlN0bc9rlp7QpuLtVjUTVxMpsPMCVA%2F%2B2WB543kZSovlYw43XNxrYVg13hwQdYEiRIrP2dOVAlH%2BT6QuXBP77xeqHWJhBatCxibTaBtZtkcshACjLpBavoD7Q7ubN4lMOt3q4HOvnJz3MM7QCct7q7ZDzlaA%2F%2Fa1i1Gp9%2FzUFGaH%2B6EyOPe0s%2FANUdMudkxkOlVpTxyGjvUJ%2B7Nq9OauXS657jYizQHxyh9Zw9ct0oxSyGeUdBRr95J%2Fi%2B0k7DT0fz0DN6%2BK9PA%2B7j4a7RY5%2FCEpyoEnWp1gc0Dt5LNW6lhPdG3ig4Xkc0XAVSmaVJR10TUJFmkegW%2BTekJDmZAGM%2BYyBEfb7Fyq8TERqW3XAfig%2B8Vvyq5ket2mZVbqtoQLOxS1Ul4sizO6jIZ%2BFFF4ee%2BbIcWx0IzvuFTPP7d3ejY%2BrYXrGarzcixnnHiFFfOa1FATQtNQrJwiRXbYiI5evvpLr12zt5%2FJ8oShExAkcMLS5ysEGOqUBf3W%2FXs39VUsN7ch1h2rUwW6v142qlkZPkT5fHf9qTnZT%2Bw9StTEmZ9Qj%2F8wy3j%2BBigkQtHQRf1YjhEPwk7rWH3gj3uvz3hBj1SlNxYQLAzwzvsn94ka3c7LcrawmfhW1G98jLcy%2FHQYGr7zxH%2F14JfLG%2BB%2Bnm3isdBYsCUp76ivWhQUQat%2Bm6WjIFtPdNt1KC%2BsXRKgWgfsm4gcvuHE4MuDCkX3s&X-Amz-Signature=56ef4ffb467fb7a38a42764ea47ab76ec3169fd6d2c73e208e26056df06426e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORJIQTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC2f1UOrbDecppLPQ2FvN7CYkPs1930YYZKfppJdLGxYQIgeIiBb%2FJiVKOUVrcx89YXTrC17T3IdXnrpXaZV2V0bF8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPBURvSF3KxlOWXXiyrcA4jlI8y22RBgAIMQMl9T4BleDiwEfKz6D4epzSP9sBU%2BTuPM33PD2AZM8y3qpVc0vMTrDa86J5ZBrjH4eph3hlyzQrrJ%2F%2FI705qUcqKBQ6wLL8gYvTcoQZgcvvYhWMSMeo4iunL3JBurhl1CU%2F8BlN0bc9rlp7QpuLtVjUTVxMpsPMCVA%2F%2B2WB543kZSovlYw43XNxrYVg13hwQdYEiRIrP2dOVAlH%2BT6QuXBP77xeqHWJhBatCxibTaBtZtkcshACjLpBavoD7Q7ubN4lMOt3q4HOvnJz3MM7QCct7q7ZDzlaA%2F%2Fa1i1Gp9%2FzUFGaH%2B6EyOPe0s%2FANUdMudkxkOlVpTxyGjvUJ%2B7Nq9OauXS657jYizQHxyh9Zw9ct0oxSyGeUdBRr95J%2Fi%2B0k7DT0fz0DN6%2BK9PA%2B7j4a7RY5%2FCEpyoEnWp1gc0Dt5LNW6lhPdG3ig4Xkc0XAVSmaVJR10TUJFmkegW%2BTekJDmZAGM%2BYyBEfb7Fyq8TERqW3XAfig%2B8Vvyq5ket2mZVbqtoQLOxS1Ul4sizO6jIZ%2BFFF4ee%2BbIcWx0IzvuFTPP7d3ejY%2BrYXrGarzcixnnHiFFfOa1FATQtNQrJwiRXbYiI5evvpLr12zt5%2FJ8oShExAkcMLS5ysEGOqUBf3W%2FXs39VUsN7ch1h2rUwW6v142qlkZPkT5fHf9qTnZT%2Bw9StTEmZ9Qj%2F8wy3j%2BBigkQtHQRf1YjhEPwk7rWH3gj3uvz3hBj1SlNxYQLAzwzvsn94ka3c7LcrawmfhW1G98jLcy%2FHQYGr7zxH%2F14JfLG%2BB%2Bnm3isdBYsCUp76ivWhQUQat%2Bm6WjIFtPdNt1KC%2BsXRKgWgfsm4gcvuHE4MuDCkX3s&X-Amz-Signature=acbd3fba90e6642c23c56065691155df7370f71f6dce3eb20abc87f2c828485c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORJIQTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC2f1UOrbDecppLPQ2FvN7CYkPs1930YYZKfppJdLGxYQIgeIiBb%2FJiVKOUVrcx89YXTrC17T3IdXnrpXaZV2V0bF8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPBURvSF3KxlOWXXiyrcA4jlI8y22RBgAIMQMl9T4BleDiwEfKz6D4epzSP9sBU%2BTuPM33PD2AZM8y3qpVc0vMTrDa86J5ZBrjH4eph3hlyzQrrJ%2F%2FI705qUcqKBQ6wLL8gYvTcoQZgcvvYhWMSMeo4iunL3JBurhl1CU%2F8BlN0bc9rlp7QpuLtVjUTVxMpsPMCVA%2F%2B2WB543kZSovlYw43XNxrYVg13hwQdYEiRIrP2dOVAlH%2BT6QuXBP77xeqHWJhBatCxibTaBtZtkcshACjLpBavoD7Q7ubN4lMOt3q4HOvnJz3MM7QCct7q7ZDzlaA%2F%2Fa1i1Gp9%2FzUFGaH%2B6EyOPe0s%2FANUdMudkxkOlVpTxyGjvUJ%2B7Nq9OauXS657jYizQHxyh9Zw9ct0oxSyGeUdBRr95J%2Fi%2B0k7DT0fz0DN6%2BK9PA%2B7j4a7RY5%2FCEpyoEnWp1gc0Dt5LNW6lhPdG3ig4Xkc0XAVSmaVJR10TUJFmkegW%2BTekJDmZAGM%2BYyBEfb7Fyq8TERqW3XAfig%2B8Vvyq5ket2mZVbqtoQLOxS1Ul4sizO6jIZ%2BFFF4ee%2BbIcWx0IzvuFTPP7d3ejY%2BrYXrGarzcixnnHiFFfOa1FATQtNQrJwiRXbYiI5evvpLr12zt5%2FJ8oShExAkcMLS5ysEGOqUBf3W%2FXs39VUsN7ch1h2rUwW6v142qlkZPkT5fHf9qTnZT%2Bw9StTEmZ9Qj%2F8wy3j%2BBigkQtHQRf1YjhEPwk7rWH3gj3uvz3hBj1SlNxYQLAzwzvsn94ka3c7LcrawmfhW1G98jLcy%2FHQYGr7zxH%2F14JfLG%2BB%2Bnm3isdBYsCUp76ivWhQUQat%2Bm6WjIFtPdNt1KC%2BsXRKgWgfsm4gcvuHE4MuDCkX3s&X-Amz-Signature=6d5161e358c21ffa75c988e764d5a11e936267a8bc51a359e3779b17e39570ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORJIQTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC2f1UOrbDecppLPQ2FvN7CYkPs1930YYZKfppJdLGxYQIgeIiBb%2FJiVKOUVrcx89YXTrC17T3IdXnrpXaZV2V0bF8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPBURvSF3KxlOWXXiyrcA4jlI8y22RBgAIMQMl9T4BleDiwEfKz6D4epzSP9sBU%2BTuPM33PD2AZM8y3qpVc0vMTrDa86J5ZBrjH4eph3hlyzQrrJ%2F%2FI705qUcqKBQ6wLL8gYvTcoQZgcvvYhWMSMeo4iunL3JBurhl1CU%2F8BlN0bc9rlp7QpuLtVjUTVxMpsPMCVA%2F%2B2WB543kZSovlYw43XNxrYVg13hwQdYEiRIrP2dOVAlH%2BT6QuXBP77xeqHWJhBatCxibTaBtZtkcshACjLpBavoD7Q7ubN4lMOt3q4HOvnJz3MM7QCct7q7ZDzlaA%2F%2Fa1i1Gp9%2FzUFGaH%2B6EyOPe0s%2FANUdMudkxkOlVpTxyGjvUJ%2B7Nq9OauXS657jYizQHxyh9Zw9ct0oxSyGeUdBRr95J%2Fi%2B0k7DT0fz0DN6%2BK9PA%2B7j4a7RY5%2FCEpyoEnWp1gc0Dt5LNW6lhPdG3ig4Xkc0XAVSmaVJR10TUJFmkegW%2BTekJDmZAGM%2BYyBEfb7Fyq8TERqW3XAfig%2B8Vvyq5ket2mZVbqtoQLOxS1Ul4sizO6jIZ%2BFFF4ee%2BbIcWx0IzvuFTPP7d3ejY%2BrYXrGarzcixnnHiFFfOa1FATQtNQrJwiRXbYiI5evvpLr12zt5%2FJ8oShExAkcMLS5ysEGOqUBf3W%2FXs39VUsN7ch1h2rUwW6v142qlkZPkT5fHf9qTnZT%2Bw9StTEmZ9Qj%2F8wy3j%2BBigkQtHQRf1YjhEPwk7rWH3gj3uvz3hBj1SlNxYQLAzwzvsn94ka3c7LcrawmfhW1G98jLcy%2FHQYGr7zxH%2F14JfLG%2BB%2Bnm3isdBYsCUp76ivWhQUQat%2Bm6WjIFtPdNt1KC%2BsXRKgWgfsm4gcvuHE4MuDCkX3s&X-Amz-Signature=5fc3854c31c61b1ad049c4f8e409ec1d13bbfd50491940c9cc662b2af3d1a092&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORJIQTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC2f1UOrbDecppLPQ2FvN7CYkPs1930YYZKfppJdLGxYQIgeIiBb%2FJiVKOUVrcx89YXTrC17T3IdXnrpXaZV2V0bF8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPBURvSF3KxlOWXXiyrcA4jlI8y22RBgAIMQMl9T4BleDiwEfKz6D4epzSP9sBU%2BTuPM33PD2AZM8y3qpVc0vMTrDa86J5ZBrjH4eph3hlyzQrrJ%2F%2FI705qUcqKBQ6wLL8gYvTcoQZgcvvYhWMSMeo4iunL3JBurhl1CU%2F8BlN0bc9rlp7QpuLtVjUTVxMpsPMCVA%2F%2B2WB543kZSovlYw43XNxrYVg13hwQdYEiRIrP2dOVAlH%2BT6QuXBP77xeqHWJhBatCxibTaBtZtkcshACjLpBavoD7Q7ubN4lMOt3q4HOvnJz3MM7QCct7q7ZDzlaA%2F%2Fa1i1Gp9%2FzUFGaH%2B6EyOPe0s%2FANUdMudkxkOlVpTxyGjvUJ%2B7Nq9OauXS657jYizQHxyh9Zw9ct0oxSyGeUdBRr95J%2Fi%2B0k7DT0fz0DN6%2BK9PA%2B7j4a7RY5%2FCEpyoEnWp1gc0Dt5LNW6lhPdG3ig4Xkc0XAVSmaVJR10TUJFmkegW%2BTekJDmZAGM%2BYyBEfb7Fyq8TERqW3XAfig%2B8Vvyq5ket2mZVbqtoQLOxS1Ul4sizO6jIZ%2BFFF4ee%2BbIcWx0IzvuFTPP7d3ejY%2BrYXrGarzcixnnHiFFfOa1FATQtNQrJwiRXbYiI5evvpLr12zt5%2FJ8oShExAkcMLS5ysEGOqUBf3W%2FXs39VUsN7ch1h2rUwW6v142qlkZPkT5fHf9qTnZT%2Bw9StTEmZ9Qj%2F8wy3j%2BBigkQtHQRf1YjhEPwk7rWH3gj3uvz3hBj1SlNxYQLAzwzvsn94ka3c7LcrawmfhW1G98jLcy%2FHQYGr7zxH%2F14JfLG%2BB%2Bnm3isdBYsCUp76ivWhQUQat%2Bm6WjIFtPdNt1KC%2BsXRKgWgfsm4gcvuHE4MuDCkX3s&X-Amz-Signature=fb468cb775137814a60299e51d439c82fd9d258eedeb59c3dd9ecb95cb266c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORJIQTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC2f1UOrbDecppLPQ2FvN7CYkPs1930YYZKfppJdLGxYQIgeIiBb%2FJiVKOUVrcx89YXTrC17T3IdXnrpXaZV2V0bF8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPBURvSF3KxlOWXXiyrcA4jlI8y22RBgAIMQMl9T4BleDiwEfKz6D4epzSP9sBU%2BTuPM33PD2AZM8y3qpVc0vMTrDa86J5ZBrjH4eph3hlyzQrrJ%2F%2FI705qUcqKBQ6wLL8gYvTcoQZgcvvYhWMSMeo4iunL3JBurhl1CU%2F8BlN0bc9rlp7QpuLtVjUTVxMpsPMCVA%2F%2B2WB543kZSovlYw43XNxrYVg13hwQdYEiRIrP2dOVAlH%2BT6QuXBP77xeqHWJhBatCxibTaBtZtkcshACjLpBavoD7Q7ubN4lMOt3q4HOvnJz3MM7QCct7q7ZDzlaA%2F%2Fa1i1Gp9%2FzUFGaH%2B6EyOPe0s%2FANUdMudkxkOlVpTxyGjvUJ%2B7Nq9OauXS657jYizQHxyh9Zw9ct0oxSyGeUdBRr95J%2Fi%2B0k7DT0fz0DN6%2BK9PA%2B7j4a7RY5%2FCEpyoEnWp1gc0Dt5LNW6lhPdG3ig4Xkc0XAVSmaVJR10TUJFmkegW%2BTekJDmZAGM%2BYyBEfb7Fyq8TERqW3XAfig%2B8Vvyq5ket2mZVbqtoQLOxS1Ul4sizO6jIZ%2BFFF4ee%2BbIcWx0IzvuFTPP7d3ejY%2BrYXrGarzcixnnHiFFfOa1FATQtNQrJwiRXbYiI5evvpLr12zt5%2FJ8oShExAkcMLS5ysEGOqUBf3W%2FXs39VUsN7ch1h2rUwW6v142qlkZPkT5fHf9qTnZT%2Bw9StTEmZ9Qj%2F8wy3j%2BBigkQtHQRf1YjhEPwk7rWH3gj3uvz3hBj1SlNxYQLAzwzvsn94ka3c7LcrawmfhW1G98jLcy%2FHQYGr7zxH%2F14JfLG%2BB%2Bnm3isdBYsCUp76ivWhQUQat%2Bm6WjIFtPdNt1KC%2BsXRKgWgfsm4gcvuHE4MuDCkX3s&X-Amz-Signature=86c9b696ad26504f194327c65dcd0ae80de9241456d5f23d94fcfbe7ec5bac14&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORJIQTK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC2f1UOrbDecppLPQ2FvN7CYkPs1930YYZKfppJdLGxYQIgeIiBb%2FJiVKOUVrcx89YXTrC17T3IdXnrpXaZV2V0bF8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPBURvSF3KxlOWXXiyrcA4jlI8y22RBgAIMQMl9T4BleDiwEfKz6D4epzSP9sBU%2BTuPM33PD2AZM8y3qpVc0vMTrDa86J5ZBrjH4eph3hlyzQrrJ%2F%2FI705qUcqKBQ6wLL8gYvTcoQZgcvvYhWMSMeo4iunL3JBurhl1CU%2F8BlN0bc9rlp7QpuLtVjUTVxMpsPMCVA%2F%2B2WB543kZSovlYw43XNxrYVg13hwQdYEiRIrP2dOVAlH%2BT6QuXBP77xeqHWJhBatCxibTaBtZtkcshACjLpBavoD7Q7ubN4lMOt3q4HOvnJz3MM7QCct7q7ZDzlaA%2F%2Fa1i1Gp9%2FzUFGaH%2B6EyOPe0s%2FANUdMudkxkOlVpTxyGjvUJ%2B7Nq9OauXS657jYizQHxyh9Zw9ct0oxSyGeUdBRr95J%2Fi%2B0k7DT0fz0DN6%2BK9PA%2B7j4a7RY5%2FCEpyoEnWp1gc0Dt5LNW6lhPdG3ig4Xkc0XAVSmaVJR10TUJFmkegW%2BTekJDmZAGM%2BYyBEfb7Fyq8TERqW3XAfig%2B8Vvyq5ket2mZVbqtoQLOxS1Ul4sizO6jIZ%2BFFF4ee%2BbIcWx0IzvuFTPP7d3ejY%2BrYXrGarzcixnnHiFFfOa1FATQtNQrJwiRXbYiI5evvpLr12zt5%2FJ8oShExAkcMLS5ysEGOqUBf3W%2FXs39VUsN7ch1h2rUwW6v142qlkZPkT5fHf9qTnZT%2Bw9StTEmZ9Qj%2F8wy3j%2BBigkQtHQRf1YjhEPwk7rWH3gj3uvz3hBj1SlNxYQLAzwzvsn94ka3c7LcrawmfhW1G98jLcy%2FHQYGr7zxH%2F14JfLG%2BB%2Bnm3isdBYsCUp76ivWhQUQat%2Bm6WjIFtPdNt1KC%2BsXRKgWgfsm4gcvuHE4MuDCkX3s&X-Amz-Signature=bd45273f0343aa1b30fcbe6895e09f14410ad8737ecff1f8850bcb0d3dea1944&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
