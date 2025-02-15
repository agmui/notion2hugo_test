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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN6LNT4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID8cea2gGk21F3d9V3la2gifwJlhPFvGA%2FPjEHWOseaKAiEA1LTZOWj%2Fi7yRrInyAyfXljdnwa0wHWR%2FTcujxI5zkS4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGo1E6jW4DbRA8%2Fa3ircA93amEjfJ6Zhfp9QLmxazE6Rh6PV29BfBNBKphPj1K8MU%2FGE0txbZqM3nkpNIdoc65QtNQ8BRYnxLXUrPSj%2BWV%2FwgnDUwirRHYnsjot8vVgEABDKJIhoAiyUsqn24bkgiTpAZs28ugFR3XCiweXpAZKAGRHEXjikeWgfq5gXBeeMs%2BBd83kJ%2FNpudbhF%2Bc21Fs294N8y3wmjwK4ymJOTXECLMW8qHhlxNYc1fyTmfvUlDOvTwan1Vs5Aiq%2BtqXcfupcl30w1DQQnWTd4WhsDB%2BkOoddGHv7dIsGZI22tpRth8thH36BBCcT9A3VjLY8Cr1%2Bu4mr1bHD6%2BCnfvvQr26R0Y%2Fl%2FqnLolQdXHVCe0PpsxriuMM0VDAJ2qhILrqOuxKbt0O9FCvAAEpztMCqK2bTbrR%2B6gY5ksxCGja2uWTCAK%2FxI52ZMb17%2BTwy4ouSuOfcFxn%2FXGS%2B%2Fy0qKznIVer9k880C6SEDe27K6Z2qOlWeOPhDyXsPM73%2FpJ0nsWF9n9L3cEXaOm2Zf31%2Bsez4Wi5Nv0wvkPIS42LqwlyIF6qEKB8oIpL%2FWusrSuAtsU2Pe4CI02h0FRujhL5r9d2Xcbn02JAL%2BZek%2Bm5L%2Bfd7canDqgZUl64BX0QyloyXMPnGwr0GOqUBriyFJHJMUGPGkAzOAYrovhowAA%2FMikPL9iZHGnrAepUCQScWfyQWyTHj5RFxILMPeuF1VonLtsubTlnzcj6izW92UqKgoTyrEsE0OrfXTZBnaVYkn1Pv6MGQC2Qvz%2FbaIWWxhChNTSR%2BI9C3nN60YetDXyY8I%2BPkdVVdHjBjXnwcRE5vjneqGqRm36cfOAR7oYZOnMdKEvM8zK248xRyUb%2FLX3Pw&X-Amz-Signature=48d70da7f0214a13e3ec51d03f8295099ceeae8b1b36d0929ccaa30aaf9068b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN6LNT4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID8cea2gGk21F3d9V3la2gifwJlhPFvGA%2FPjEHWOseaKAiEA1LTZOWj%2Fi7yRrInyAyfXljdnwa0wHWR%2FTcujxI5zkS4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGo1E6jW4DbRA8%2Fa3ircA93amEjfJ6Zhfp9QLmxazE6Rh6PV29BfBNBKphPj1K8MU%2FGE0txbZqM3nkpNIdoc65QtNQ8BRYnxLXUrPSj%2BWV%2FwgnDUwirRHYnsjot8vVgEABDKJIhoAiyUsqn24bkgiTpAZs28ugFR3XCiweXpAZKAGRHEXjikeWgfq5gXBeeMs%2BBd83kJ%2FNpudbhF%2Bc21Fs294N8y3wmjwK4ymJOTXECLMW8qHhlxNYc1fyTmfvUlDOvTwan1Vs5Aiq%2BtqXcfupcl30w1DQQnWTd4WhsDB%2BkOoddGHv7dIsGZI22tpRth8thH36BBCcT9A3VjLY8Cr1%2Bu4mr1bHD6%2BCnfvvQr26R0Y%2Fl%2FqnLolQdXHVCe0PpsxriuMM0VDAJ2qhILrqOuxKbt0O9FCvAAEpztMCqK2bTbrR%2B6gY5ksxCGja2uWTCAK%2FxI52ZMb17%2BTwy4ouSuOfcFxn%2FXGS%2B%2Fy0qKznIVer9k880C6SEDe27K6Z2qOlWeOPhDyXsPM73%2FpJ0nsWF9n9L3cEXaOm2Zf31%2Bsez4Wi5Nv0wvkPIS42LqwlyIF6qEKB8oIpL%2FWusrSuAtsU2Pe4CI02h0FRujhL5r9d2Xcbn02JAL%2BZek%2Bm5L%2Bfd7canDqgZUl64BX0QyloyXMPnGwr0GOqUBriyFJHJMUGPGkAzOAYrovhowAA%2FMikPL9iZHGnrAepUCQScWfyQWyTHj5RFxILMPeuF1VonLtsubTlnzcj6izW92UqKgoTyrEsE0OrfXTZBnaVYkn1Pv6MGQC2Qvz%2FbaIWWxhChNTSR%2BI9C3nN60YetDXyY8I%2BPkdVVdHjBjXnwcRE5vjneqGqRm36cfOAR7oYZOnMdKEvM8zK248xRyUb%2FLX3Pw&X-Amz-Signature=877108935bb73dae7853c2c405ea1a62fa2a15d5baeb1a69503d1d8904365329&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN6LNT4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID8cea2gGk21F3d9V3la2gifwJlhPFvGA%2FPjEHWOseaKAiEA1LTZOWj%2Fi7yRrInyAyfXljdnwa0wHWR%2FTcujxI5zkS4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGo1E6jW4DbRA8%2Fa3ircA93amEjfJ6Zhfp9QLmxazE6Rh6PV29BfBNBKphPj1K8MU%2FGE0txbZqM3nkpNIdoc65QtNQ8BRYnxLXUrPSj%2BWV%2FwgnDUwirRHYnsjot8vVgEABDKJIhoAiyUsqn24bkgiTpAZs28ugFR3XCiweXpAZKAGRHEXjikeWgfq5gXBeeMs%2BBd83kJ%2FNpudbhF%2Bc21Fs294N8y3wmjwK4ymJOTXECLMW8qHhlxNYc1fyTmfvUlDOvTwan1Vs5Aiq%2BtqXcfupcl30w1DQQnWTd4WhsDB%2BkOoddGHv7dIsGZI22tpRth8thH36BBCcT9A3VjLY8Cr1%2Bu4mr1bHD6%2BCnfvvQr26R0Y%2Fl%2FqnLolQdXHVCe0PpsxriuMM0VDAJ2qhILrqOuxKbt0O9FCvAAEpztMCqK2bTbrR%2B6gY5ksxCGja2uWTCAK%2FxI52ZMb17%2BTwy4ouSuOfcFxn%2FXGS%2B%2Fy0qKznIVer9k880C6SEDe27K6Z2qOlWeOPhDyXsPM73%2FpJ0nsWF9n9L3cEXaOm2Zf31%2Bsez4Wi5Nv0wvkPIS42LqwlyIF6qEKB8oIpL%2FWusrSuAtsU2Pe4CI02h0FRujhL5r9d2Xcbn02JAL%2BZek%2Bm5L%2Bfd7canDqgZUl64BX0QyloyXMPnGwr0GOqUBriyFJHJMUGPGkAzOAYrovhowAA%2FMikPL9iZHGnrAepUCQScWfyQWyTHj5RFxILMPeuF1VonLtsubTlnzcj6izW92UqKgoTyrEsE0OrfXTZBnaVYkn1Pv6MGQC2Qvz%2FbaIWWxhChNTSR%2BI9C3nN60YetDXyY8I%2BPkdVVdHjBjXnwcRE5vjneqGqRm36cfOAR7oYZOnMdKEvM8zK248xRyUb%2FLX3Pw&X-Amz-Signature=274e51f22637b18a93075dda9534a3b601e3dea966757c112a6b701ad688c2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN6LNT4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID8cea2gGk21F3d9V3la2gifwJlhPFvGA%2FPjEHWOseaKAiEA1LTZOWj%2Fi7yRrInyAyfXljdnwa0wHWR%2FTcujxI5zkS4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGo1E6jW4DbRA8%2Fa3ircA93amEjfJ6Zhfp9QLmxazE6Rh6PV29BfBNBKphPj1K8MU%2FGE0txbZqM3nkpNIdoc65QtNQ8BRYnxLXUrPSj%2BWV%2FwgnDUwirRHYnsjot8vVgEABDKJIhoAiyUsqn24bkgiTpAZs28ugFR3XCiweXpAZKAGRHEXjikeWgfq5gXBeeMs%2BBd83kJ%2FNpudbhF%2Bc21Fs294N8y3wmjwK4ymJOTXECLMW8qHhlxNYc1fyTmfvUlDOvTwan1Vs5Aiq%2BtqXcfupcl30w1DQQnWTd4WhsDB%2BkOoddGHv7dIsGZI22tpRth8thH36BBCcT9A3VjLY8Cr1%2Bu4mr1bHD6%2BCnfvvQr26R0Y%2Fl%2FqnLolQdXHVCe0PpsxriuMM0VDAJ2qhILrqOuxKbt0O9FCvAAEpztMCqK2bTbrR%2B6gY5ksxCGja2uWTCAK%2FxI52ZMb17%2BTwy4ouSuOfcFxn%2FXGS%2B%2Fy0qKznIVer9k880C6SEDe27K6Z2qOlWeOPhDyXsPM73%2FpJ0nsWF9n9L3cEXaOm2Zf31%2Bsez4Wi5Nv0wvkPIS42LqwlyIF6qEKB8oIpL%2FWusrSuAtsU2Pe4CI02h0FRujhL5r9d2Xcbn02JAL%2BZek%2Bm5L%2Bfd7canDqgZUl64BX0QyloyXMPnGwr0GOqUBriyFJHJMUGPGkAzOAYrovhowAA%2FMikPL9iZHGnrAepUCQScWfyQWyTHj5RFxILMPeuF1VonLtsubTlnzcj6izW92UqKgoTyrEsE0OrfXTZBnaVYkn1Pv6MGQC2Qvz%2FbaIWWxhChNTSR%2BI9C3nN60YetDXyY8I%2BPkdVVdHjBjXnwcRE5vjneqGqRm36cfOAR7oYZOnMdKEvM8zK248xRyUb%2FLX3Pw&X-Amz-Signature=a136dd5bc10569b16f26ff1c7ab1c115d9ce7bad92aeed8e97968a24e1a45fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN6LNT4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID8cea2gGk21F3d9V3la2gifwJlhPFvGA%2FPjEHWOseaKAiEA1LTZOWj%2Fi7yRrInyAyfXljdnwa0wHWR%2FTcujxI5zkS4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGo1E6jW4DbRA8%2Fa3ircA93amEjfJ6Zhfp9QLmxazE6Rh6PV29BfBNBKphPj1K8MU%2FGE0txbZqM3nkpNIdoc65QtNQ8BRYnxLXUrPSj%2BWV%2FwgnDUwirRHYnsjot8vVgEABDKJIhoAiyUsqn24bkgiTpAZs28ugFR3XCiweXpAZKAGRHEXjikeWgfq5gXBeeMs%2BBd83kJ%2FNpudbhF%2Bc21Fs294N8y3wmjwK4ymJOTXECLMW8qHhlxNYc1fyTmfvUlDOvTwan1Vs5Aiq%2BtqXcfupcl30w1DQQnWTd4WhsDB%2BkOoddGHv7dIsGZI22tpRth8thH36BBCcT9A3VjLY8Cr1%2Bu4mr1bHD6%2BCnfvvQr26R0Y%2Fl%2FqnLolQdXHVCe0PpsxriuMM0VDAJ2qhILrqOuxKbt0O9FCvAAEpztMCqK2bTbrR%2B6gY5ksxCGja2uWTCAK%2FxI52ZMb17%2BTwy4ouSuOfcFxn%2FXGS%2B%2Fy0qKznIVer9k880C6SEDe27K6Z2qOlWeOPhDyXsPM73%2FpJ0nsWF9n9L3cEXaOm2Zf31%2Bsez4Wi5Nv0wvkPIS42LqwlyIF6qEKB8oIpL%2FWusrSuAtsU2Pe4CI02h0FRujhL5r9d2Xcbn02JAL%2BZek%2Bm5L%2Bfd7canDqgZUl64BX0QyloyXMPnGwr0GOqUBriyFJHJMUGPGkAzOAYrovhowAA%2FMikPL9iZHGnrAepUCQScWfyQWyTHj5RFxILMPeuF1VonLtsubTlnzcj6izW92UqKgoTyrEsE0OrfXTZBnaVYkn1Pv6MGQC2Qvz%2FbaIWWxhChNTSR%2BI9C3nN60YetDXyY8I%2BPkdVVdHjBjXnwcRE5vjneqGqRm36cfOAR7oYZOnMdKEvM8zK248xRyUb%2FLX3Pw&X-Amz-Signature=0227e4a5245a2ae5dfb2d155e2e1d60f3da72b0e02558dc22400e02f64e6a51a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN6LNT4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID8cea2gGk21F3d9V3la2gifwJlhPFvGA%2FPjEHWOseaKAiEA1LTZOWj%2Fi7yRrInyAyfXljdnwa0wHWR%2FTcujxI5zkS4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGo1E6jW4DbRA8%2Fa3ircA93amEjfJ6Zhfp9QLmxazE6Rh6PV29BfBNBKphPj1K8MU%2FGE0txbZqM3nkpNIdoc65QtNQ8BRYnxLXUrPSj%2BWV%2FwgnDUwirRHYnsjot8vVgEABDKJIhoAiyUsqn24bkgiTpAZs28ugFR3XCiweXpAZKAGRHEXjikeWgfq5gXBeeMs%2BBd83kJ%2FNpudbhF%2Bc21Fs294N8y3wmjwK4ymJOTXECLMW8qHhlxNYc1fyTmfvUlDOvTwan1Vs5Aiq%2BtqXcfupcl30w1DQQnWTd4WhsDB%2BkOoddGHv7dIsGZI22tpRth8thH36BBCcT9A3VjLY8Cr1%2Bu4mr1bHD6%2BCnfvvQr26R0Y%2Fl%2FqnLolQdXHVCe0PpsxriuMM0VDAJ2qhILrqOuxKbt0O9FCvAAEpztMCqK2bTbrR%2B6gY5ksxCGja2uWTCAK%2FxI52ZMb17%2BTwy4ouSuOfcFxn%2FXGS%2B%2Fy0qKznIVer9k880C6SEDe27K6Z2qOlWeOPhDyXsPM73%2FpJ0nsWF9n9L3cEXaOm2Zf31%2Bsez4Wi5Nv0wvkPIS42LqwlyIF6qEKB8oIpL%2FWusrSuAtsU2Pe4CI02h0FRujhL5r9d2Xcbn02JAL%2BZek%2Bm5L%2Bfd7canDqgZUl64BX0QyloyXMPnGwr0GOqUBriyFJHJMUGPGkAzOAYrovhowAA%2FMikPL9iZHGnrAepUCQScWfyQWyTHj5RFxILMPeuF1VonLtsubTlnzcj6izW92UqKgoTyrEsE0OrfXTZBnaVYkn1Pv6MGQC2Qvz%2FbaIWWxhChNTSR%2BI9C3nN60YetDXyY8I%2BPkdVVdHjBjXnwcRE5vjneqGqRm36cfOAR7oYZOnMdKEvM8zK248xRyUb%2FLX3Pw&X-Amz-Signature=b6daf344828f4b6d9fe4cbda5f0738b8fb824cf01be6634479f84d4b41d41e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN6LNT4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID8cea2gGk21F3d9V3la2gifwJlhPFvGA%2FPjEHWOseaKAiEA1LTZOWj%2Fi7yRrInyAyfXljdnwa0wHWR%2FTcujxI5zkS4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGo1E6jW4DbRA8%2Fa3ircA93amEjfJ6Zhfp9QLmxazE6Rh6PV29BfBNBKphPj1K8MU%2FGE0txbZqM3nkpNIdoc65QtNQ8BRYnxLXUrPSj%2BWV%2FwgnDUwirRHYnsjot8vVgEABDKJIhoAiyUsqn24bkgiTpAZs28ugFR3XCiweXpAZKAGRHEXjikeWgfq5gXBeeMs%2BBd83kJ%2FNpudbhF%2Bc21Fs294N8y3wmjwK4ymJOTXECLMW8qHhlxNYc1fyTmfvUlDOvTwan1Vs5Aiq%2BtqXcfupcl30w1DQQnWTd4WhsDB%2BkOoddGHv7dIsGZI22tpRth8thH36BBCcT9A3VjLY8Cr1%2Bu4mr1bHD6%2BCnfvvQr26R0Y%2Fl%2FqnLolQdXHVCe0PpsxriuMM0VDAJ2qhILrqOuxKbt0O9FCvAAEpztMCqK2bTbrR%2B6gY5ksxCGja2uWTCAK%2FxI52ZMb17%2BTwy4ouSuOfcFxn%2FXGS%2B%2Fy0qKznIVer9k880C6SEDe27K6Z2qOlWeOPhDyXsPM73%2FpJ0nsWF9n9L3cEXaOm2Zf31%2Bsez4Wi5Nv0wvkPIS42LqwlyIF6qEKB8oIpL%2FWusrSuAtsU2Pe4CI02h0FRujhL5r9d2Xcbn02JAL%2BZek%2Bm5L%2Bfd7canDqgZUl64BX0QyloyXMPnGwr0GOqUBriyFJHJMUGPGkAzOAYrovhowAA%2FMikPL9iZHGnrAepUCQScWfyQWyTHj5RFxILMPeuF1VonLtsubTlnzcj6izW92UqKgoTyrEsE0OrfXTZBnaVYkn1Pv6MGQC2Qvz%2FbaIWWxhChNTSR%2BI9C3nN60YetDXyY8I%2BPkdVVdHjBjXnwcRE5vjneqGqRm36cfOAR7oYZOnMdKEvM8zK248xRyUb%2FLX3Pw&X-Amz-Signature=14e2b75d145103e801889222c21d805a8c65ed85d23053369588c1ec9ad45b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
