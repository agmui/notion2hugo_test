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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HR7KFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAfmbHTr9sWkczjUkpi%2FXkP9N7iJs1Uxay90ixC%2FV6voAiEA95RC5JqxhZexPvUQKvBpsZzWKyxn4lNbnFXl5hpper0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWgsLVYOkBkQ6%2BJircA49m0jITxgCqgUlct4jRe5k4G6mzwO4ieG1ka3sNqa9Vc0rVilfVpHlag91snPj2ZzQgwfSMa3Gm2n4n%2F0NMpt7lgA387S%2FJTcZ1WSftYmIpDPZpGK35HKcavd0uGaHhd%2F3qCApuZT9uhfnNqWOB95AuP%2FJjAvb26dPcs%2FH7f6DmFLsJ3Qj7SC4aAdCZbLc%2FMk4AaXNF6L0sy3QN%2BQTfsMPoxFkgX%2Fc6td3G2qfzvWdQ0Aak%2B6GrsOcBsV7mdm7kHpm9xpQrmMz%2BAqigsefo9Zd6vYI%2FM%2BtngJQ2BlcSjasY2tOtET3tYvsUtDf%2BdU5HfOtuVlxO8yGEsDqpWQEIp%2BiZs7uuVScSAC6I1MOTdRWZ6qsLEe6ckP5LJeLyzE2IKRfgAiXMU%2BIPkp8axg9Z%2BFBKOxiYrLFbe9OdP5tCkrps%2BsnlF7LR7yRpnuhyMh1elt5v%2FZ7C8IotoQhY%2F2vRwDkWx8ypfLkgrINq%2BJeBAYZ44cnNNT7j5ak5ouonoRuQhbvsJ%2BUELsN53VY3WEZTWxNhNW%2BhhKEjOqP95nKSy2qRGfzXWvP%2BudDnw%2BpFNl%2BwSq5OqxPuGPtnyNzUrC2AtpokJlnv%2FENQKKg5w7PWJGIt9j8eynGH7iFLmAIIMOGLs78GOqUBjxxmowmQNJNdK2MU4ttGmcVfgLRlJ1838uNt7Q7%2FrhdXzyGGg54A5no%2FjTub17qX6sYqVGDwU%2BPF%2FOzgVRFiy87DeGYdS4rTQc7%2BdRl7OFQVKknOGyYx%2FKiGlhLQgQt6NrOY4a0pdhzyns0bzVtsJKE4otmXJ%2BIJ0I1AjhKEK6g6L15Ji40XsY%2B2wzKlOaHwPlXrVViLAVAkGTZckhbeitZuPg%2BD&X-Amz-Signature=fb3515b597890db86f58c7d3f69de2e0152c404668bb35ccab7cd71a223bc6c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HR7KFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAfmbHTr9sWkczjUkpi%2FXkP9N7iJs1Uxay90ixC%2FV6voAiEA95RC5JqxhZexPvUQKvBpsZzWKyxn4lNbnFXl5hpper0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWgsLVYOkBkQ6%2BJircA49m0jITxgCqgUlct4jRe5k4G6mzwO4ieG1ka3sNqa9Vc0rVilfVpHlag91snPj2ZzQgwfSMa3Gm2n4n%2F0NMpt7lgA387S%2FJTcZ1WSftYmIpDPZpGK35HKcavd0uGaHhd%2F3qCApuZT9uhfnNqWOB95AuP%2FJjAvb26dPcs%2FH7f6DmFLsJ3Qj7SC4aAdCZbLc%2FMk4AaXNF6L0sy3QN%2BQTfsMPoxFkgX%2Fc6td3G2qfzvWdQ0Aak%2B6GrsOcBsV7mdm7kHpm9xpQrmMz%2BAqigsefo9Zd6vYI%2FM%2BtngJQ2BlcSjasY2tOtET3tYvsUtDf%2BdU5HfOtuVlxO8yGEsDqpWQEIp%2BiZs7uuVScSAC6I1MOTdRWZ6qsLEe6ckP5LJeLyzE2IKRfgAiXMU%2BIPkp8axg9Z%2BFBKOxiYrLFbe9OdP5tCkrps%2BsnlF7LR7yRpnuhyMh1elt5v%2FZ7C8IotoQhY%2F2vRwDkWx8ypfLkgrINq%2BJeBAYZ44cnNNT7j5ak5ouonoRuQhbvsJ%2BUELsN53VY3WEZTWxNhNW%2BhhKEjOqP95nKSy2qRGfzXWvP%2BudDnw%2BpFNl%2BwSq5OqxPuGPtnyNzUrC2AtpokJlnv%2FENQKKg5w7PWJGIt9j8eynGH7iFLmAIIMOGLs78GOqUBjxxmowmQNJNdK2MU4ttGmcVfgLRlJ1838uNt7Q7%2FrhdXzyGGg54A5no%2FjTub17qX6sYqVGDwU%2BPF%2FOzgVRFiy87DeGYdS4rTQc7%2BdRl7OFQVKknOGyYx%2FKiGlhLQgQt6NrOY4a0pdhzyns0bzVtsJKE4otmXJ%2BIJ0I1AjhKEK6g6L15Ji40XsY%2B2wzKlOaHwPlXrVViLAVAkGTZckhbeitZuPg%2BD&X-Amz-Signature=9090f22727bcc40031a10b6891a7bcb8150e8ce82fb2871788575df59f1bfaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HR7KFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAfmbHTr9sWkczjUkpi%2FXkP9N7iJs1Uxay90ixC%2FV6voAiEA95RC5JqxhZexPvUQKvBpsZzWKyxn4lNbnFXl5hpper0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWgsLVYOkBkQ6%2BJircA49m0jITxgCqgUlct4jRe5k4G6mzwO4ieG1ka3sNqa9Vc0rVilfVpHlag91snPj2ZzQgwfSMa3Gm2n4n%2F0NMpt7lgA387S%2FJTcZ1WSftYmIpDPZpGK35HKcavd0uGaHhd%2F3qCApuZT9uhfnNqWOB95AuP%2FJjAvb26dPcs%2FH7f6DmFLsJ3Qj7SC4aAdCZbLc%2FMk4AaXNF6L0sy3QN%2BQTfsMPoxFkgX%2Fc6td3G2qfzvWdQ0Aak%2B6GrsOcBsV7mdm7kHpm9xpQrmMz%2BAqigsefo9Zd6vYI%2FM%2BtngJQ2BlcSjasY2tOtET3tYvsUtDf%2BdU5HfOtuVlxO8yGEsDqpWQEIp%2BiZs7uuVScSAC6I1MOTdRWZ6qsLEe6ckP5LJeLyzE2IKRfgAiXMU%2BIPkp8axg9Z%2BFBKOxiYrLFbe9OdP5tCkrps%2BsnlF7LR7yRpnuhyMh1elt5v%2FZ7C8IotoQhY%2F2vRwDkWx8ypfLkgrINq%2BJeBAYZ44cnNNT7j5ak5ouonoRuQhbvsJ%2BUELsN53VY3WEZTWxNhNW%2BhhKEjOqP95nKSy2qRGfzXWvP%2BudDnw%2BpFNl%2BwSq5OqxPuGPtnyNzUrC2AtpokJlnv%2FENQKKg5w7PWJGIt9j8eynGH7iFLmAIIMOGLs78GOqUBjxxmowmQNJNdK2MU4ttGmcVfgLRlJ1838uNt7Q7%2FrhdXzyGGg54A5no%2FjTub17qX6sYqVGDwU%2BPF%2FOzgVRFiy87DeGYdS4rTQc7%2BdRl7OFQVKknOGyYx%2FKiGlhLQgQt6NrOY4a0pdhzyns0bzVtsJKE4otmXJ%2BIJ0I1AjhKEK6g6L15Ji40XsY%2B2wzKlOaHwPlXrVViLAVAkGTZckhbeitZuPg%2BD&X-Amz-Signature=9efbd83f05446782c285492435801e48db0041919feb939bf2ce9a7ed7ff0a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HR7KFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAfmbHTr9sWkczjUkpi%2FXkP9N7iJs1Uxay90ixC%2FV6voAiEA95RC5JqxhZexPvUQKvBpsZzWKyxn4lNbnFXl5hpper0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWgsLVYOkBkQ6%2BJircA49m0jITxgCqgUlct4jRe5k4G6mzwO4ieG1ka3sNqa9Vc0rVilfVpHlag91snPj2ZzQgwfSMa3Gm2n4n%2F0NMpt7lgA387S%2FJTcZ1WSftYmIpDPZpGK35HKcavd0uGaHhd%2F3qCApuZT9uhfnNqWOB95AuP%2FJjAvb26dPcs%2FH7f6DmFLsJ3Qj7SC4aAdCZbLc%2FMk4AaXNF6L0sy3QN%2BQTfsMPoxFkgX%2Fc6td3G2qfzvWdQ0Aak%2B6GrsOcBsV7mdm7kHpm9xpQrmMz%2BAqigsefo9Zd6vYI%2FM%2BtngJQ2BlcSjasY2tOtET3tYvsUtDf%2BdU5HfOtuVlxO8yGEsDqpWQEIp%2BiZs7uuVScSAC6I1MOTdRWZ6qsLEe6ckP5LJeLyzE2IKRfgAiXMU%2BIPkp8axg9Z%2BFBKOxiYrLFbe9OdP5tCkrps%2BsnlF7LR7yRpnuhyMh1elt5v%2FZ7C8IotoQhY%2F2vRwDkWx8ypfLkgrINq%2BJeBAYZ44cnNNT7j5ak5ouonoRuQhbvsJ%2BUELsN53VY3WEZTWxNhNW%2BhhKEjOqP95nKSy2qRGfzXWvP%2BudDnw%2BpFNl%2BwSq5OqxPuGPtnyNzUrC2AtpokJlnv%2FENQKKg5w7PWJGIt9j8eynGH7iFLmAIIMOGLs78GOqUBjxxmowmQNJNdK2MU4ttGmcVfgLRlJ1838uNt7Q7%2FrhdXzyGGg54A5no%2FjTub17qX6sYqVGDwU%2BPF%2FOzgVRFiy87DeGYdS4rTQc7%2BdRl7OFQVKknOGyYx%2FKiGlhLQgQt6NrOY4a0pdhzyns0bzVtsJKE4otmXJ%2BIJ0I1AjhKEK6g6L15Ji40XsY%2B2wzKlOaHwPlXrVViLAVAkGTZckhbeitZuPg%2BD&X-Amz-Signature=b431bf9776ab7ecfb35fe64af817b7d4f0ba970396eb06927e63c1afcee5156a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HR7KFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAfmbHTr9sWkczjUkpi%2FXkP9N7iJs1Uxay90ixC%2FV6voAiEA95RC5JqxhZexPvUQKvBpsZzWKyxn4lNbnFXl5hpper0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWgsLVYOkBkQ6%2BJircA49m0jITxgCqgUlct4jRe5k4G6mzwO4ieG1ka3sNqa9Vc0rVilfVpHlag91snPj2ZzQgwfSMa3Gm2n4n%2F0NMpt7lgA387S%2FJTcZ1WSftYmIpDPZpGK35HKcavd0uGaHhd%2F3qCApuZT9uhfnNqWOB95AuP%2FJjAvb26dPcs%2FH7f6DmFLsJ3Qj7SC4aAdCZbLc%2FMk4AaXNF6L0sy3QN%2BQTfsMPoxFkgX%2Fc6td3G2qfzvWdQ0Aak%2B6GrsOcBsV7mdm7kHpm9xpQrmMz%2BAqigsefo9Zd6vYI%2FM%2BtngJQ2BlcSjasY2tOtET3tYvsUtDf%2BdU5HfOtuVlxO8yGEsDqpWQEIp%2BiZs7uuVScSAC6I1MOTdRWZ6qsLEe6ckP5LJeLyzE2IKRfgAiXMU%2BIPkp8axg9Z%2BFBKOxiYrLFbe9OdP5tCkrps%2BsnlF7LR7yRpnuhyMh1elt5v%2FZ7C8IotoQhY%2F2vRwDkWx8ypfLkgrINq%2BJeBAYZ44cnNNT7j5ak5ouonoRuQhbvsJ%2BUELsN53VY3WEZTWxNhNW%2BhhKEjOqP95nKSy2qRGfzXWvP%2BudDnw%2BpFNl%2BwSq5OqxPuGPtnyNzUrC2AtpokJlnv%2FENQKKg5w7PWJGIt9j8eynGH7iFLmAIIMOGLs78GOqUBjxxmowmQNJNdK2MU4ttGmcVfgLRlJ1838uNt7Q7%2FrhdXzyGGg54A5no%2FjTub17qX6sYqVGDwU%2BPF%2FOzgVRFiy87DeGYdS4rTQc7%2BdRl7OFQVKknOGyYx%2FKiGlhLQgQt6NrOY4a0pdhzyns0bzVtsJKE4otmXJ%2BIJ0I1AjhKEK6g6L15Ji40XsY%2B2wzKlOaHwPlXrVViLAVAkGTZckhbeitZuPg%2BD&X-Amz-Signature=6287a26d3ab1a9318ab3bdfe40d29de61f8fb8650fc4d35fc2371bba0a37ae41&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HR7KFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAfmbHTr9sWkczjUkpi%2FXkP9N7iJs1Uxay90ixC%2FV6voAiEA95RC5JqxhZexPvUQKvBpsZzWKyxn4lNbnFXl5hpper0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWgsLVYOkBkQ6%2BJircA49m0jITxgCqgUlct4jRe5k4G6mzwO4ieG1ka3sNqa9Vc0rVilfVpHlag91snPj2ZzQgwfSMa3Gm2n4n%2F0NMpt7lgA387S%2FJTcZ1WSftYmIpDPZpGK35HKcavd0uGaHhd%2F3qCApuZT9uhfnNqWOB95AuP%2FJjAvb26dPcs%2FH7f6DmFLsJ3Qj7SC4aAdCZbLc%2FMk4AaXNF6L0sy3QN%2BQTfsMPoxFkgX%2Fc6td3G2qfzvWdQ0Aak%2B6GrsOcBsV7mdm7kHpm9xpQrmMz%2BAqigsefo9Zd6vYI%2FM%2BtngJQ2BlcSjasY2tOtET3tYvsUtDf%2BdU5HfOtuVlxO8yGEsDqpWQEIp%2BiZs7uuVScSAC6I1MOTdRWZ6qsLEe6ckP5LJeLyzE2IKRfgAiXMU%2BIPkp8axg9Z%2BFBKOxiYrLFbe9OdP5tCkrps%2BsnlF7LR7yRpnuhyMh1elt5v%2FZ7C8IotoQhY%2F2vRwDkWx8ypfLkgrINq%2BJeBAYZ44cnNNT7j5ak5ouonoRuQhbvsJ%2BUELsN53VY3WEZTWxNhNW%2BhhKEjOqP95nKSy2qRGfzXWvP%2BudDnw%2BpFNl%2BwSq5OqxPuGPtnyNzUrC2AtpokJlnv%2FENQKKg5w7PWJGIt9j8eynGH7iFLmAIIMOGLs78GOqUBjxxmowmQNJNdK2MU4ttGmcVfgLRlJ1838uNt7Q7%2FrhdXzyGGg54A5no%2FjTub17qX6sYqVGDwU%2BPF%2FOzgVRFiy87DeGYdS4rTQc7%2BdRl7OFQVKknOGyYx%2FKiGlhLQgQt6NrOY4a0pdhzyns0bzVtsJKE4otmXJ%2BIJ0I1AjhKEK6g6L15Ji40XsY%2B2wzKlOaHwPlXrVViLAVAkGTZckhbeitZuPg%2BD&X-Amz-Signature=b8d467eb82e4159c50ad8e38fc933e96858a433aa6d6d492e954e0a7b4fdb596&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HR7KFN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAfmbHTr9sWkczjUkpi%2FXkP9N7iJs1Uxay90ixC%2FV6voAiEA95RC5JqxhZexPvUQKvBpsZzWKyxn4lNbnFXl5hpper0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjWgsLVYOkBkQ6%2BJircA49m0jITxgCqgUlct4jRe5k4G6mzwO4ieG1ka3sNqa9Vc0rVilfVpHlag91snPj2ZzQgwfSMa3Gm2n4n%2F0NMpt7lgA387S%2FJTcZ1WSftYmIpDPZpGK35HKcavd0uGaHhd%2F3qCApuZT9uhfnNqWOB95AuP%2FJjAvb26dPcs%2FH7f6DmFLsJ3Qj7SC4aAdCZbLc%2FMk4AaXNF6L0sy3QN%2BQTfsMPoxFkgX%2Fc6td3G2qfzvWdQ0Aak%2B6GrsOcBsV7mdm7kHpm9xpQrmMz%2BAqigsefo9Zd6vYI%2FM%2BtngJQ2BlcSjasY2tOtET3tYvsUtDf%2BdU5HfOtuVlxO8yGEsDqpWQEIp%2BiZs7uuVScSAC6I1MOTdRWZ6qsLEe6ckP5LJeLyzE2IKRfgAiXMU%2BIPkp8axg9Z%2BFBKOxiYrLFbe9OdP5tCkrps%2BsnlF7LR7yRpnuhyMh1elt5v%2FZ7C8IotoQhY%2F2vRwDkWx8ypfLkgrINq%2BJeBAYZ44cnNNT7j5ak5ouonoRuQhbvsJ%2BUELsN53VY3WEZTWxNhNW%2BhhKEjOqP95nKSy2qRGfzXWvP%2BudDnw%2BpFNl%2BwSq5OqxPuGPtnyNzUrC2AtpokJlnv%2FENQKKg5w7PWJGIt9j8eynGH7iFLmAIIMOGLs78GOqUBjxxmowmQNJNdK2MU4ttGmcVfgLRlJ1838uNt7Q7%2FrhdXzyGGg54A5no%2FjTub17qX6sYqVGDwU%2BPF%2FOzgVRFiy87DeGYdS4rTQc7%2BdRl7OFQVKknOGyYx%2FKiGlhLQgQt6NrOY4a0pdhzyns0bzVtsJKE4otmXJ%2BIJ0I1AjhKEK6g6L15Ji40XsY%2B2wzKlOaHwPlXrVViLAVAkGTZckhbeitZuPg%2BD&X-Amz-Signature=cc85a4660235e436fb9c5df07309f9ead93c60e947955f4fce570c79fcf1c1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
