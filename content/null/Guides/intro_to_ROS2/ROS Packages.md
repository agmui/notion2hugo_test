---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCIZJYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAr8xwB76pFXB4JW2UO9hcV4cC68X1kBcmKQQpm%2BNUsSAiEAnYJQoW4UAkIGojAnAP7j59H6dVyCfOtJ%2Fw7fyNUJsT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHEhYjh1i7Qmp9pj0yrcAxinHDG5%2FTGjFERcXGWJSwf9RKbB2NDvhXaGuXwCG%2FQnaX3WtvVXZurHILP3yOI0oi5Q7D1SKiqcMYwzr8gAPvF2UV9Gd8fJceH%2B9dNHD9tLJ8OPNnyzE2piHCe4TviEdsY3y2iETLmC546T1uldreicq7JewWjoJ%2FEK9nHo%2FdwaN7t1Kc8KHyuMM11caaX4wLiIWZ4bCGjKrfZ%2B8m0BMOTrruuOujygLu%2BliEG4ttyZRudyFQWTBIrmF0WrBIwrmj8%2BeRZTMW7qPKJ4A4M26W5gET4ymHe6rHbgkHZMY6E7Z1gNxvth1IhDyTDaEp%2FvRSGBSkWA0n3%2Bt%2FbSINtbz%2FWqUZik6Cjeua96XBj44Hhm%2FlmLsHgBva%2F3zYe%2FWZSMF1gEa%2FsC%2FhMV0ZrMrw8jL1BcqAdFU0hnb716Icxi6M4anHO%2BBlQHPM3MgImBujC%2FBuUifts9eJt6T%2Bvl4raza55xq3N%2BOYFaOnVuhThU6StWoDWpUuzSNsc%2BPQgqd9cysuXWbq6wE355Y2D8ekl9x%2BSyQ00V1e3mAamI7Sf1uGolbsOzX2PDMVCq9PIZ52Diqht4HidrkdwfpiwCNbhJKx2Qhx7r%2Bktc5KYqc0Esse1DpERmFiILqG0Pe63CMJP%2Bib0GOqUBowjC5wrLdcjY%2FdEZdTu%2BvnWJ%2FporJ26fD5itY%2FvG1yoImIEIVGOW30j7srPweKOkEBK%2BBh6%2B0oZXAC1bYg6uXq%2BL6lMAHfhLGnTQW7uhrkmIMep047hW48mE62%2FOeqKIqh%2B79rmJFnW6YlUB64aKE%2BdL75UCQY7X3fQSxxLsaNMgIcALA81nUO2I5hk6%2FEw8yO0fyvwqK%2FROrrlrAx0vhe%2B0PIWh&X-Amz-Signature=14f33da0f0903b1e68a8bb05880b1b71e74791fbd39ed1eacec4055a5cd573f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCIZJYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAr8xwB76pFXB4JW2UO9hcV4cC68X1kBcmKQQpm%2BNUsSAiEAnYJQoW4UAkIGojAnAP7j59H6dVyCfOtJ%2Fw7fyNUJsT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHEhYjh1i7Qmp9pj0yrcAxinHDG5%2FTGjFERcXGWJSwf9RKbB2NDvhXaGuXwCG%2FQnaX3WtvVXZurHILP3yOI0oi5Q7D1SKiqcMYwzr8gAPvF2UV9Gd8fJceH%2B9dNHD9tLJ8OPNnyzE2piHCe4TviEdsY3y2iETLmC546T1uldreicq7JewWjoJ%2FEK9nHo%2FdwaN7t1Kc8KHyuMM11caaX4wLiIWZ4bCGjKrfZ%2B8m0BMOTrruuOujygLu%2BliEG4ttyZRudyFQWTBIrmF0WrBIwrmj8%2BeRZTMW7qPKJ4A4M26W5gET4ymHe6rHbgkHZMY6E7Z1gNxvth1IhDyTDaEp%2FvRSGBSkWA0n3%2Bt%2FbSINtbz%2FWqUZik6Cjeua96XBj44Hhm%2FlmLsHgBva%2F3zYe%2FWZSMF1gEa%2FsC%2FhMV0ZrMrw8jL1BcqAdFU0hnb716Icxi6M4anHO%2BBlQHPM3MgImBujC%2FBuUifts9eJt6T%2Bvl4raza55xq3N%2BOYFaOnVuhThU6StWoDWpUuzSNsc%2BPQgqd9cysuXWbq6wE355Y2D8ekl9x%2BSyQ00V1e3mAamI7Sf1uGolbsOzX2PDMVCq9PIZ52Diqht4HidrkdwfpiwCNbhJKx2Qhx7r%2Bktc5KYqc0Esse1DpERmFiILqG0Pe63CMJP%2Bib0GOqUBowjC5wrLdcjY%2FdEZdTu%2BvnWJ%2FporJ26fD5itY%2FvG1yoImIEIVGOW30j7srPweKOkEBK%2BBh6%2B0oZXAC1bYg6uXq%2BL6lMAHfhLGnTQW7uhrkmIMep047hW48mE62%2FOeqKIqh%2B79rmJFnW6YlUB64aKE%2BdL75UCQY7X3fQSxxLsaNMgIcALA81nUO2I5hk6%2FEw8yO0fyvwqK%2FROrrlrAx0vhe%2B0PIWh&X-Amz-Signature=4a41d4bed19527892bd69edaafaf0c4365b3908557eae17a83364e47b0f23604&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCIZJYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAr8xwB76pFXB4JW2UO9hcV4cC68X1kBcmKQQpm%2BNUsSAiEAnYJQoW4UAkIGojAnAP7j59H6dVyCfOtJ%2Fw7fyNUJsT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHEhYjh1i7Qmp9pj0yrcAxinHDG5%2FTGjFERcXGWJSwf9RKbB2NDvhXaGuXwCG%2FQnaX3WtvVXZurHILP3yOI0oi5Q7D1SKiqcMYwzr8gAPvF2UV9Gd8fJceH%2B9dNHD9tLJ8OPNnyzE2piHCe4TviEdsY3y2iETLmC546T1uldreicq7JewWjoJ%2FEK9nHo%2FdwaN7t1Kc8KHyuMM11caaX4wLiIWZ4bCGjKrfZ%2B8m0BMOTrruuOujygLu%2BliEG4ttyZRudyFQWTBIrmF0WrBIwrmj8%2BeRZTMW7qPKJ4A4M26W5gET4ymHe6rHbgkHZMY6E7Z1gNxvth1IhDyTDaEp%2FvRSGBSkWA0n3%2Bt%2FbSINtbz%2FWqUZik6Cjeua96XBj44Hhm%2FlmLsHgBva%2F3zYe%2FWZSMF1gEa%2FsC%2FhMV0ZrMrw8jL1BcqAdFU0hnb716Icxi6M4anHO%2BBlQHPM3MgImBujC%2FBuUifts9eJt6T%2Bvl4raza55xq3N%2BOYFaOnVuhThU6StWoDWpUuzSNsc%2BPQgqd9cysuXWbq6wE355Y2D8ekl9x%2BSyQ00V1e3mAamI7Sf1uGolbsOzX2PDMVCq9PIZ52Diqht4HidrkdwfpiwCNbhJKx2Qhx7r%2Bktc5KYqc0Esse1DpERmFiILqG0Pe63CMJP%2Bib0GOqUBowjC5wrLdcjY%2FdEZdTu%2BvnWJ%2FporJ26fD5itY%2FvG1yoImIEIVGOW30j7srPweKOkEBK%2BBh6%2B0oZXAC1bYg6uXq%2BL6lMAHfhLGnTQW7uhrkmIMep047hW48mE62%2FOeqKIqh%2B79rmJFnW6YlUB64aKE%2BdL75UCQY7X3fQSxxLsaNMgIcALA81nUO2I5hk6%2FEw8yO0fyvwqK%2FROrrlrAx0vhe%2B0PIWh&X-Amz-Signature=f264d15018d5267ddc09eedae5d0ee50cfc5f0c11d10603ef076611a6b18ac7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCIZJYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAr8xwB76pFXB4JW2UO9hcV4cC68X1kBcmKQQpm%2BNUsSAiEAnYJQoW4UAkIGojAnAP7j59H6dVyCfOtJ%2Fw7fyNUJsT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHEhYjh1i7Qmp9pj0yrcAxinHDG5%2FTGjFERcXGWJSwf9RKbB2NDvhXaGuXwCG%2FQnaX3WtvVXZurHILP3yOI0oi5Q7D1SKiqcMYwzr8gAPvF2UV9Gd8fJceH%2B9dNHD9tLJ8OPNnyzE2piHCe4TviEdsY3y2iETLmC546T1uldreicq7JewWjoJ%2FEK9nHo%2FdwaN7t1Kc8KHyuMM11caaX4wLiIWZ4bCGjKrfZ%2B8m0BMOTrruuOujygLu%2BliEG4ttyZRudyFQWTBIrmF0WrBIwrmj8%2BeRZTMW7qPKJ4A4M26W5gET4ymHe6rHbgkHZMY6E7Z1gNxvth1IhDyTDaEp%2FvRSGBSkWA0n3%2Bt%2FbSINtbz%2FWqUZik6Cjeua96XBj44Hhm%2FlmLsHgBva%2F3zYe%2FWZSMF1gEa%2FsC%2FhMV0ZrMrw8jL1BcqAdFU0hnb716Icxi6M4anHO%2BBlQHPM3MgImBujC%2FBuUifts9eJt6T%2Bvl4raza55xq3N%2BOYFaOnVuhThU6StWoDWpUuzSNsc%2BPQgqd9cysuXWbq6wE355Y2D8ekl9x%2BSyQ00V1e3mAamI7Sf1uGolbsOzX2PDMVCq9PIZ52Diqht4HidrkdwfpiwCNbhJKx2Qhx7r%2Bktc5KYqc0Esse1DpERmFiILqG0Pe63CMJP%2Bib0GOqUBowjC5wrLdcjY%2FdEZdTu%2BvnWJ%2FporJ26fD5itY%2FvG1yoImIEIVGOW30j7srPweKOkEBK%2BBh6%2B0oZXAC1bYg6uXq%2BL6lMAHfhLGnTQW7uhrkmIMep047hW48mE62%2FOeqKIqh%2B79rmJFnW6YlUB64aKE%2BdL75UCQY7X3fQSxxLsaNMgIcALA81nUO2I5hk6%2FEw8yO0fyvwqK%2FROrrlrAx0vhe%2B0PIWh&X-Amz-Signature=450cc887af8608a363f0f2de2b51db5b3ca58e7a4a75bf9cb894fa21b2558aca&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCIZJYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAr8xwB76pFXB4JW2UO9hcV4cC68X1kBcmKQQpm%2BNUsSAiEAnYJQoW4UAkIGojAnAP7j59H6dVyCfOtJ%2Fw7fyNUJsT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHEhYjh1i7Qmp9pj0yrcAxinHDG5%2FTGjFERcXGWJSwf9RKbB2NDvhXaGuXwCG%2FQnaX3WtvVXZurHILP3yOI0oi5Q7D1SKiqcMYwzr8gAPvF2UV9Gd8fJceH%2B9dNHD9tLJ8OPNnyzE2piHCe4TviEdsY3y2iETLmC546T1uldreicq7JewWjoJ%2FEK9nHo%2FdwaN7t1Kc8KHyuMM11caaX4wLiIWZ4bCGjKrfZ%2B8m0BMOTrruuOujygLu%2BliEG4ttyZRudyFQWTBIrmF0WrBIwrmj8%2BeRZTMW7qPKJ4A4M26W5gET4ymHe6rHbgkHZMY6E7Z1gNxvth1IhDyTDaEp%2FvRSGBSkWA0n3%2Bt%2FbSINtbz%2FWqUZik6Cjeua96XBj44Hhm%2FlmLsHgBva%2F3zYe%2FWZSMF1gEa%2FsC%2FhMV0ZrMrw8jL1BcqAdFU0hnb716Icxi6M4anHO%2BBlQHPM3MgImBujC%2FBuUifts9eJt6T%2Bvl4raza55xq3N%2BOYFaOnVuhThU6StWoDWpUuzSNsc%2BPQgqd9cysuXWbq6wE355Y2D8ekl9x%2BSyQ00V1e3mAamI7Sf1uGolbsOzX2PDMVCq9PIZ52Diqht4HidrkdwfpiwCNbhJKx2Qhx7r%2Bktc5KYqc0Esse1DpERmFiILqG0Pe63CMJP%2Bib0GOqUBowjC5wrLdcjY%2FdEZdTu%2BvnWJ%2FporJ26fD5itY%2FvG1yoImIEIVGOW30j7srPweKOkEBK%2BBh6%2B0oZXAC1bYg6uXq%2BL6lMAHfhLGnTQW7uhrkmIMep047hW48mE62%2FOeqKIqh%2B79rmJFnW6YlUB64aKE%2BdL75UCQY7X3fQSxxLsaNMgIcALA81nUO2I5hk6%2FEw8yO0fyvwqK%2FROrrlrAx0vhe%2B0PIWh&X-Amz-Signature=52f8561385bbfa19ed486f0bc718dde88a432e220036d4a3c0a6393d425fb0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCIZJYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAr8xwB76pFXB4JW2UO9hcV4cC68X1kBcmKQQpm%2BNUsSAiEAnYJQoW4UAkIGojAnAP7j59H6dVyCfOtJ%2Fw7fyNUJsT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHEhYjh1i7Qmp9pj0yrcAxinHDG5%2FTGjFERcXGWJSwf9RKbB2NDvhXaGuXwCG%2FQnaX3WtvVXZurHILP3yOI0oi5Q7D1SKiqcMYwzr8gAPvF2UV9Gd8fJceH%2B9dNHD9tLJ8OPNnyzE2piHCe4TviEdsY3y2iETLmC546T1uldreicq7JewWjoJ%2FEK9nHo%2FdwaN7t1Kc8KHyuMM11caaX4wLiIWZ4bCGjKrfZ%2B8m0BMOTrruuOujygLu%2BliEG4ttyZRudyFQWTBIrmF0WrBIwrmj8%2BeRZTMW7qPKJ4A4M26W5gET4ymHe6rHbgkHZMY6E7Z1gNxvth1IhDyTDaEp%2FvRSGBSkWA0n3%2Bt%2FbSINtbz%2FWqUZik6Cjeua96XBj44Hhm%2FlmLsHgBva%2F3zYe%2FWZSMF1gEa%2FsC%2FhMV0ZrMrw8jL1BcqAdFU0hnb716Icxi6M4anHO%2BBlQHPM3MgImBujC%2FBuUifts9eJt6T%2Bvl4raza55xq3N%2BOYFaOnVuhThU6StWoDWpUuzSNsc%2BPQgqd9cysuXWbq6wE355Y2D8ekl9x%2BSyQ00V1e3mAamI7Sf1uGolbsOzX2PDMVCq9PIZ52Diqht4HidrkdwfpiwCNbhJKx2Qhx7r%2Bktc5KYqc0Esse1DpERmFiILqG0Pe63CMJP%2Bib0GOqUBowjC5wrLdcjY%2FdEZdTu%2BvnWJ%2FporJ26fD5itY%2FvG1yoImIEIVGOW30j7srPweKOkEBK%2BBh6%2B0oZXAC1bYg6uXq%2BL6lMAHfhLGnTQW7uhrkmIMep047hW48mE62%2FOeqKIqh%2B79rmJFnW6YlUB64aKE%2BdL75UCQY7X3fQSxxLsaNMgIcALA81nUO2I5hk6%2FEw8yO0fyvwqK%2FROrrlrAx0vhe%2B0PIWh&X-Amz-Signature=22c8401f3fe4906f4036af11dfaa36e8ae7954a3621270e6bcba768b8c97adea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCIZJYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAr8xwB76pFXB4JW2UO9hcV4cC68X1kBcmKQQpm%2BNUsSAiEAnYJQoW4UAkIGojAnAP7j59H6dVyCfOtJ%2Fw7fyNUJsT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHEhYjh1i7Qmp9pj0yrcAxinHDG5%2FTGjFERcXGWJSwf9RKbB2NDvhXaGuXwCG%2FQnaX3WtvVXZurHILP3yOI0oi5Q7D1SKiqcMYwzr8gAPvF2UV9Gd8fJceH%2B9dNHD9tLJ8OPNnyzE2piHCe4TviEdsY3y2iETLmC546T1uldreicq7JewWjoJ%2FEK9nHo%2FdwaN7t1Kc8KHyuMM11caaX4wLiIWZ4bCGjKrfZ%2B8m0BMOTrruuOujygLu%2BliEG4ttyZRudyFQWTBIrmF0WrBIwrmj8%2BeRZTMW7qPKJ4A4M26W5gET4ymHe6rHbgkHZMY6E7Z1gNxvth1IhDyTDaEp%2FvRSGBSkWA0n3%2Bt%2FbSINtbz%2FWqUZik6Cjeua96XBj44Hhm%2FlmLsHgBva%2F3zYe%2FWZSMF1gEa%2FsC%2FhMV0ZrMrw8jL1BcqAdFU0hnb716Icxi6M4anHO%2BBlQHPM3MgImBujC%2FBuUifts9eJt6T%2Bvl4raza55xq3N%2BOYFaOnVuhThU6StWoDWpUuzSNsc%2BPQgqd9cysuXWbq6wE355Y2D8ekl9x%2BSyQ00V1e3mAamI7Sf1uGolbsOzX2PDMVCq9PIZ52Diqht4HidrkdwfpiwCNbhJKx2Qhx7r%2Bktc5KYqc0Esse1DpERmFiILqG0Pe63CMJP%2Bib0GOqUBowjC5wrLdcjY%2FdEZdTu%2BvnWJ%2FporJ26fD5itY%2FvG1yoImIEIVGOW30j7srPweKOkEBK%2BBh6%2B0oZXAC1bYg6uXq%2BL6lMAHfhLGnTQW7uhrkmIMep047hW48mE62%2FOeqKIqh%2B79rmJFnW6YlUB64aKE%2BdL75UCQY7X3fQSxxLsaNMgIcALA81nUO2I5hk6%2FEw8yO0fyvwqK%2FROrrlrAx0vhe%2B0PIWh&X-Amz-Signature=29cf9e56e13e4fdcb6d71093f58b8dd808550efdad27126d2aa53c7bcbc6c3e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
