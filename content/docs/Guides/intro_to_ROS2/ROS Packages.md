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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG77YI2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgvp8foax9s5IKG3HDpShuK9voJYHRUjV%2BO3Zcu6o4KgIgPSW8z5RuKHGtsA7Z6pFtP3BMC%2B13Ya%2F%2BXf%2FwAge7QTkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC0GCvDuM9YKUpT%2FKSrcA5wDotMuvp3tOwTqCe9dXDQ5C9RhWO6hXCT9EN1Wn%2FOVa5fobWFxPtkuMRLUEreQ2rreheGl5obaoGKoI%2BOTaUYSXRdWtfndNzQGq9051oxeWzaX1XsJBJh%2BMnb7%2FXPJvdxCEjgf4tPeOdalM8zVzydRDXl0iJ4pNOu9C%2BeCT5CtQiMYesZ5H6%2B0s%2BkB335llKzkHg44a%2FNgMsL5ktHt3wB8y1aPXqf6Aam7wtpvSsErx7xc6Dl8T%2FDUkv7v57yZHR%2FqgizFfrHmrVYnzCUJHRJ0yXkGt6fvmTfqq5kvIQ0%2FX8bK%2FTnFpcH1VW5oiQe0ZYFiG2FO8fHCp812cTUak0DCiIHnDhXurZDdeKnA3SeFXWODiMSaLjwoQiAu%2FedGuf%2BBlGSqPC45CYDtMOJjpwj5nuqRR48ekTZ%2Blt1%2BIaH%2BFXrgKtpuX2C%2BjV8qpDW363qTIwnjsewqQIdeaqWM%2Boey4G623emptVAg4cviqo1wvQ6opP3wozvyk5vJVkCtr%2FZEgrYOgOmCXtqXajnpzydEntk4MTJn07p5MqA9sPHVJi9X56G3svX61BnbZ%2Fg9ix%2BTgeEBXzwdFN7k6pVjDLB%2B4c2DOPJspT5qrrcnADB4p8pHuzVtyRP2AqXnMPHApMMGOqUBNzvf7eVP7%2BNUH7Z4e4vo%2BiIyC6kTNJQNOxIR6PCWmAerqIHmULutLjJiQ3FojGvsjQHi1GxmA2zRJzGbRX7uyCD5bh%2BWvI0JOQvLTeExL6FViSxt29OMiRfcaEfF4ugKwnfWPEmNy6osou1zmDp%2B422lbU9EI7tsL%2FiJYhgDD2GlFwjh0cxvlbzBmG%2Fyyrw4jss86NndJlDFW2%2BTxDfH4KsPtKrL&X-Amz-Signature=fd8682b1007f67da98357dfbfa1969c734a39d89d7a5737809d683c3e7ea40ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG77YI2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgvp8foax9s5IKG3HDpShuK9voJYHRUjV%2BO3Zcu6o4KgIgPSW8z5RuKHGtsA7Z6pFtP3BMC%2B13Ya%2F%2BXf%2FwAge7QTkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC0GCvDuM9YKUpT%2FKSrcA5wDotMuvp3tOwTqCe9dXDQ5C9RhWO6hXCT9EN1Wn%2FOVa5fobWFxPtkuMRLUEreQ2rreheGl5obaoGKoI%2BOTaUYSXRdWtfndNzQGq9051oxeWzaX1XsJBJh%2BMnb7%2FXPJvdxCEjgf4tPeOdalM8zVzydRDXl0iJ4pNOu9C%2BeCT5CtQiMYesZ5H6%2B0s%2BkB335llKzkHg44a%2FNgMsL5ktHt3wB8y1aPXqf6Aam7wtpvSsErx7xc6Dl8T%2FDUkv7v57yZHR%2FqgizFfrHmrVYnzCUJHRJ0yXkGt6fvmTfqq5kvIQ0%2FX8bK%2FTnFpcH1VW5oiQe0ZYFiG2FO8fHCp812cTUak0DCiIHnDhXurZDdeKnA3SeFXWODiMSaLjwoQiAu%2FedGuf%2BBlGSqPC45CYDtMOJjpwj5nuqRR48ekTZ%2Blt1%2BIaH%2BFXrgKtpuX2C%2BjV8qpDW363qTIwnjsewqQIdeaqWM%2Boey4G623emptVAg4cviqo1wvQ6opP3wozvyk5vJVkCtr%2FZEgrYOgOmCXtqXajnpzydEntk4MTJn07p5MqA9sPHVJi9X56G3svX61BnbZ%2Fg9ix%2BTgeEBXzwdFN7k6pVjDLB%2B4c2DOPJspT5qrrcnADB4p8pHuzVtyRP2AqXnMPHApMMGOqUBNzvf7eVP7%2BNUH7Z4e4vo%2BiIyC6kTNJQNOxIR6PCWmAerqIHmULutLjJiQ3FojGvsjQHi1GxmA2zRJzGbRX7uyCD5bh%2BWvI0JOQvLTeExL6FViSxt29OMiRfcaEfF4ugKwnfWPEmNy6osou1zmDp%2B422lbU9EI7tsL%2FiJYhgDD2GlFwjh0cxvlbzBmG%2Fyyrw4jss86NndJlDFW2%2BTxDfH4KsPtKrL&X-Amz-Signature=08dec3242f49be880723d2a58d39a55efe77c3fc6490af5f4a0d44d976c53e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG77YI2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgvp8foax9s5IKG3HDpShuK9voJYHRUjV%2BO3Zcu6o4KgIgPSW8z5RuKHGtsA7Z6pFtP3BMC%2B13Ya%2F%2BXf%2FwAge7QTkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC0GCvDuM9YKUpT%2FKSrcA5wDotMuvp3tOwTqCe9dXDQ5C9RhWO6hXCT9EN1Wn%2FOVa5fobWFxPtkuMRLUEreQ2rreheGl5obaoGKoI%2BOTaUYSXRdWtfndNzQGq9051oxeWzaX1XsJBJh%2BMnb7%2FXPJvdxCEjgf4tPeOdalM8zVzydRDXl0iJ4pNOu9C%2BeCT5CtQiMYesZ5H6%2B0s%2BkB335llKzkHg44a%2FNgMsL5ktHt3wB8y1aPXqf6Aam7wtpvSsErx7xc6Dl8T%2FDUkv7v57yZHR%2FqgizFfrHmrVYnzCUJHRJ0yXkGt6fvmTfqq5kvIQ0%2FX8bK%2FTnFpcH1VW5oiQe0ZYFiG2FO8fHCp812cTUak0DCiIHnDhXurZDdeKnA3SeFXWODiMSaLjwoQiAu%2FedGuf%2BBlGSqPC45CYDtMOJjpwj5nuqRR48ekTZ%2Blt1%2BIaH%2BFXrgKtpuX2C%2BjV8qpDW363qTIwnjsewqQIdeaqWM%2Boey4G623emptVAg4cviqo1wvQ6opP3wozvyk5vJVkCtr%2FZEgrYOgOmCXtqXajnpzydEntk4MTJn07p5MqA9sPHVJi9X56G3svX61BnbZ%2Fg9ix%2BTgeEBXzwdFN7k6pVjDLB%2B4c2DOPJspT5qrrcnADB4p8pHuzVtyRP2AqXnMPHApMMGOqUBNzvf7eVP7%2BNUH7Z4e4vo%2BiIyC6kTNJQNOxIR6PCWmAerqIHmULutLjJiQ3FojGvsjQHi1GxmA2zRJzGbRX7uyCD5bh%2BWvI0JOQvLTeExL6FViSxt29OMiRfcaEfF4ugKwnfWPEmNy6osou1zmDp%2B422lbU9EI7tsL%2FiJYhgDD2GlFwjh0cxvlbzBmG%2Fyyrw4jss86NndJlDFW2%2BTxDfH4KsPtKrL&X-Amz-Signature=a3520f78960f9d61a9c741240b6128cf3c1952c51578cebdeeaf85c4131ad4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG77YI2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgvp8foax9s5IKG3HDpShuK9voJYHRUjV%2BO3Zcu6o4KgIgPSW8z5RuKHGtsA7Z6pFtP3BMC%2B13Ya%2F%2BXf%2FwAge7QTkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC0GCvDuM9YKUpT%2FKSrcA5wDotMuvp3tOwTqCe9dXDQ5C9RhWO6hXCT9EN1Wn%2FOVa5fobWFxPtkuMRLUEreQ2rreheGl5obaoGKoI%2BOTaUYSXRdWtfndNzQGq9051oxeWzaX1XsJBJh%2BMnb7%2FXPJvdxCEjgf4tPeOdalM8zVzydRDXl0iJ4pNOu9C%2BeCT5CtQiMYesZ5H6%2B0s%2BkB335llKzkHg44a%2FNgMsL5ktHt3wB8y1aPXqf6Aam7wtpvSsErx7xc6Dl8T%2FDUkv7v57yZHR%2FqgizFfrHmrVYnzCUJHRJ0yXkGt6fvmTfqq5kvIQ0%2FX8bK%2FTnFpcH1VW5oiQe0ZYFiG2FO8fHCp812cTUak0DCiIHnDhXurZDdeKnA3SeFXWODiMSaLjwoQiAu%2FedGuf%2BBlGSqPC45CYDtMOJjpwj5nuqRR48ekTZ%2Blt1%2BIaH%2BFXrgKtpuX2C%2BjV8qpDW363qTIwnjsewqQIdeaqWM%2Boey4G623emptVAg4cviqo1wvQ6opP3wozvyk5vJVkCtr%2FZEgrYOgOmCXtqXajnpzydEntk4MTJn07p5MqA9sPHVJi9X56G3svX61BnbZ%2Fg9ix%2BTgeEBXzwdFN7k6pVjDLB%2B4c2DOPJspT5qrrcnADB4p8pHuzVtyRP2AqXnMPHApMMGOqUBNzvf7eVP7%2BNUH7Z4e4vo%2BiIyC6kTNJQNOxIR6PCWmAerqIHmULutLjJiQ3FojGvsjQHi1GxmA2zRJzGbRX7uyCD5bh%2BWvI0JOQvLTeExL6FViSxt29OMiRfcaEfF4ugKwnfWPEmNy6osou1zmDp%2B422lbU9EI7tsL%2FiJYhgDD2GlFwjh0cxvlbzBmG%2Fyyrw4jss86NndJlDFW2%2BTxDfH4KsPtKrL&X-Amz-Signature=1c4c363d11263ef099d6bc22a73525cb0d8af6a865b93a55d0abd00aae5868eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG77YI2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgvp8foax9s5IKG3HDpShuK9voJYHRUjV%2BO3Zcu6o4KgIgPSW8z5RuKHGtsA7Z6pFtP3BMC%2B13Ya%2F%2BXf%2FwAge7QTkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC0GCvDuM9YKUpT%2FKSrcA5wDotMuvp3tOwTqCe9dXDQ5C9RhWO6hXCT9EN1Wn%2FOVa5fobWFxPtkuMRLUEreQ2rreheGl5obaoGKoI%2BOTaUYSXRdWtfndNzQGq9051oxeWzaX1XsJBJh%2BMnb7%2FXPJvdxCEjgf4tPeOdalM8zVzydRDXl0iJ4pNOu9C%2BeCT5CtQiMYesZ5H6%2B0s%2BkB335llKzkHg44a%2FNgMsL5ktHt3wB8y1aPXqf6Aam7wtpvSsErx7xc6Dl8T%2FDUkv7v57yZHR%2FqgizFfrHmrVYnzCUJHRJ0yXkGt6fvmTfqq5kvIQ0%2FX8bK%2FTnFpcH1VW5oiQe0ZYFiG2FO8fHCp812cTUak0DCiIHnDhXurZDdeKnA3SeFXWODiMSaLjwoQiAu%2FedGuf%2BBlGSqPC45CYDtMOJjpwj5nuqRR48ekTZ%2Blt1%2BIaH%2BFXrgKtpuX2C%2BjV8qpDW363qTIwnjsewqQIdeaqWM%2Boey4G623emptVAg4cviqo1wvQ6opP3wozvyk5vJVkCtr%2FZEgrYOgOmCXtqXajnpzydEntk4MTJn07p5MqA9sPHVJi9X56G3svX61BnbZ%2Fg9ix%2BTgeEBXzwdFN7k6pVjDLB%2B4c2DOPJspT5qrrcnADB4p8pHuzVtyRP2AqXnMPHApMMGOqUBNzvf7eVP7%2BNUH7Z4e4vo%2BiIyC6kTNJQNOxIR6PCWmAerqIHmULutLjJiQ3FojGvsjQHi1GxmA2zRJzGbRX7uyCD5bh%2BWvI0JOQvLTeExL6FViSxt29OMiRfcaEfF4ugKwnfWPEmNy6osou1zmDp%2B422lbU9EI7tsL%2FiJYhgDD2GlFwjh0cxvlbzBmG%2Fyyrw4jss86NndJlDFW2%2BTxDfH4KsPtKrL&X-Amz-Signature=87bacc3fa2adce1800cba1d334f2a801d508308c9dfa51a12c32acb3e58cd23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG77YI2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgvp8foax9s5IKG3HDpShuK9voJYHRUjV%2BO3Zcu6o4KgIgPSW8z5RuKHGtsA7Z6pFtP3BMC%2B13Ya%2F%2BXf%2FwAge7QTkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC0GCvDuM9YKUpT%2FKSrcA5wDotMuvp3tOwTqCe9dXDQ5C9RhWO6hXCT9EN1Wn%2FOVa5fobWFxPtkuMRLUEreQ2rreheGl5obaoGKoI%2BOTaUYSXRdWtfndNzQGq9051oxeWzaX1XsJBJh%2BMnb7%2FXPJvdxCEjgf4tPeOdalM8zVzydRDXl0iJ4pNOu9C%2BeCT5CtQiMYesZ5H6%2B0s%2BkB335llKzkHg44a%2FNgMsL5ktHt3wB8y1aPXqf6Aam7wtpvSsErx7xc6Dl8T%2FDUkv7v57yZHR%2FqgizFfrHmrVYnzCUJHRJ0yXkGt6fvmTfqq5kvIQ0%2FX8bK%2FTnFpcH1VW5oiQe0ZYFiG2FO8fHCp812cTUak0DCiIHnDhXurZDdeKnA3SeFXWODiMSaLjwoQiAu%2FedGuf%2BBlGSqPC45CYDtMOJjpwj5nuqRR48ekTZ%2Blt1%2BIaH%2BFXrgKtpuX2C%2BjV8qpDW363qTIwnjsewqQIdeaqWM%2Boey4G623emptVAg4cviqo1wvQ6opP3wozvyk5vJVkCtr%2FZEgrYOgOmCXtqXajnpzydEntk4MTJn07p5MqA9sPHVJi9X56G3svX61BnbZ%2Fg9ix%2BTgeEBXzwdFN7k6pVjDLB%2B4c2DOPJspT5qrrcnADB4p8pHuzVtyRP2AqXnMPHApMMGOqUBNzvf7eVP7%2BNUH7Z4e4vo%2BiIyC6kTNJQNOxIR6PCWmAerqIHmULutLjJiQ3FojGvsjQHi1GxmA2zRJzGbRX7uyCD5bh%2BWvI0JOQvLTeExL6FViSxt29OMiRfcaEfF4ugKwnfWPEmNy6osou1zmDp%2B422lbU9EI7tsL%2FiJYhgDD2GlFwjh0cxvlbzBmG%2Fyyrw4jss86NndJlDFW2%2BTxDfH4KsPtKrL&X-Amz-Signature=225940d8de20a12971cabaf9c48db2169de6d3601c670af87e6d5d9970c966fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG77YI2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCgvp8foax9s5IKG3HDpShuK9voJYHRUjV%2BO3Zcu6o4KgIgPSW8z5RuKHGtsA7Z6pFtP3BMC%2B13Ya%2F%2BXf%2FwAge7QTkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC0GCvDuM9YKUpT%2FKSrcA5wDotMuvp3tOwTqCe9dXDQ5C9RhWO6hXCT9EN1Wn%2FOVa5fobWFxPtkuMRLUEreQ2rreheGl5obaoGKoI%2BOTaUYSXRdWtfndNzQGq9051oxeWzaX1XsJBJh%2BMnb7%2FXPJvdxCEjgf4tPeOdalM8zVzydRDXl0iJ4pNOu9C%2BeCT5CtQiMYesZ5H6%2B0s%2BkB335llKzkHg44a%2FNgMsL5ktHt3wB8y1aPXqf6Aam7wtpvSsErx7xc6Dl8T%2FDUkv7v57yZHR%2FqgizFfrHmrVYnzCUJHRJ0yXkGt6fvmTfqq5kvIQ0%2FX8bK%2FTnFpcH1VW5oiQe0ZYFiG2FO8fHCp812cTUak0DCiIHnDhXurZDdeKnA3SeFXWODiMSaLjwoQiAu%2FedGuf%2BBlGSqPC45CYDtMOJjpwj5nuqRR48ekTZ%2Blt1%2BIaH%2BFXrgKtpuX2C%2BjV8qpDW363qTIwnjsewqQIdeaqWM%2Boey4G623emptVAg4cviqo1wvQ6opP3wozvyk5vJVkCtr%2FZEgrYOgOmCXtqXajnpzydEntk4MTJn07p5MqA9sPHVJi9X56G3svX61BnbZ%2Fg9ix%2BTgeEBXzwdFN7k6pVjDLB%2B4c2DOPJspT5qrrcnADB4p8pHuzVtyRP2AqXnMPHApMMGOqUBNzvf7eVP7%2BNUH7Z4e4vo%2BiIyC6kTNJQNOxIR6PCWmAerqIHmULutLjJiQ3FojGvsjQHi1GxmA2zRJzGbRX7uyCD5bh%2BWvI0JOQvLTeExL6FViSxt29OMiRfcaEfF4ugKwnfWPEmNy6osou1zmDp%2B422lbU9EI7tsL%2FiJYhgDD2GlFwjh0cxvlbzBmG%2Fyyrw4jss86NndJlDFW2%2BTxDfH4KsPtKrL&X-Amz-Signature=3959f1efcb8ebb88308dd87b560153eccec994f0afb39197a28d372ac2205c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
