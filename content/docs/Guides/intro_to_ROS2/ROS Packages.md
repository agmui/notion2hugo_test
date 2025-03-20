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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UB7O7P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAWK1e%2Fd54FKCSpwswocZxoTydPioFD%2BZDQQ9K4b2ITyAiAFT1WBS5pHxhR7qA3%2BLw%2FwAqmlEPDOlU4UIpDZ5EelFSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqgA644590Lj5bJkKtwDKfD6MyewcoEQvV7jxpiuZ5lv2uK6Up35twzEuXD%2FiK0oFQX1QHu1XMePeou%2Bn3sNPl8zf7kgkHTHI%2Bdp2YOzJ0Ud7NlkaKFTGCBi7f50%2FGZHBmj4N%2B8mcnhd0HPcK05MiWQTnjsDFXbKUcS9%2F6239lNlgx9Iqayngam3ez%2Bksv8ROnjBKtZ0qj8zCx4MbHm%2Fmgtb%2FbVZg6pT8W6zJJgl9DAJeALvDqgEYxV5s5HDiX89PYa5m%2Fwsn7XipMPFLscTMbXbxWsNW5%2FG41%2Bsd5bgPrU80crvTnC1DU7Zan%2FXiHoKAQPxZqPq6Di6uhxpQGnHJ0snUXeE1ytIA8F%2FLNaAKyvratYbTdKaHODN3JzDtGNbETYhsfIC4FURZmhsbIns7RT3gMwZj%2Bay01EDj6BTL5mbwHLYk%2FfAeZbCyd4IcJETk03qMJKsx2PUKICR7xQ5XNIs6ug9mYW2SOFYN9KjvFOXM5SvCfshq9sLWCeOQh8W5SIR9rFMqRw6ah1cExyj0hsEOeyE4LoOovVi8hWo2fFYMb%2BFkmzRLtrXqvX3BdYv2Td9oQngJSgg%2BbTXdeZw%2FSDL7lePand%2B8CP%2FAUZaZcj3Sc%2BBF87lk8ryY8sw5VLApvNIkP6vWMVEgA4woqfuvgY6pgGDyexecarYFfoqExW9LPqxkJd4V0pXy4Mq02N1wjV9S2o5I6cBrZUyjfiF5bXFu5X9P0f7IiyzBXCkk6jniK3DlEtM%2BDJn%2Fbgfe4pW2mZ11NABqLRVdm2NNUCdYRrq1DuTkhs1mHFNSlaUwpnwqyk4kk589WFydeeLjgrfyxdapgHMWSMsqi%2FuOb%2FDlzISuV%2FEk1TLL5uHbgCoKsuC%2FRXhUPp%2Bf7O7&X-Amz-Signature=4f78bd2645bcbcfb5e4065903cca4019a5a239fe1178de116f292fe3f5691eff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UB7O7P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAWK1e%2Fd54FKCSpwswocZxoTydPioFD%2BZDQQ9K4b2ITyAiAFT1WBS5pHxhR7qA3%2BLw%2FwAqmlEPDOlU4UIpDZ5EelFSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqgA644590Lj5bJkKtwDKfD6MyewcoEQvV7jxpiuZ5lv2uK6Up35twzEuXD%2FiK0oFQX1QHu1XMePeou%2Bn3sNPl8zf7kgkHTHI%2Bdp2YOzJ0Ud7NlkaKFTGCBi7f50%2FGZHBmj4N%2B8mcnhd0HPcK05MiWQTnjsDFXbKUcS9%2F6239lNlgx9Iqayngam3ez%2Bksv8ROnjBKtZ0qj8zCx4MbHm%2Fmgtb%2FbVZg6pT8W6zJJgl9DAJeALvDqgEYxV5s5HDiX89PYa5m%2Fwsn7XipMPFLscTMbXbxWsNW5%2FG41%2Bsd5bgPrU80crvTnC1DU7Zan%2FXiHoKAQPxZqPq6Di6uhxpQGnHJ0snUXeE1ytIA8F%2FLNaAKyvratYbTdKaHODN3JzDtGNbETYhsfIC4FURZmhsbIns7RT3gMwZj%2Bay01EDj6BTL5mbwHLYk%2FfAeZbCyd4IcJETk03qMJKsx2PUKICR7xQ5XNIs6ug9mYW2SOFYN9KjvFOXM5SvCfshq9sLWCeOQh8W5SIR9rFMqRw6ah1cExyj0hsEOeyE4LoOovVi8hWo2fFYMb%2BFkmzRLtrXqvX3BdYv2Td9oQngJSgg%2BbTXdeZw%2FSDL7lePand%2B8CP%2FAUZaZcj3Sc%2BBF87lk8ryY8sw5VLApvNIkP6vWMVEgA4woqfuvgY6pgGDyexecarYFfoqExW9LPqxkJd4V0pXy4Mq02N1wjV9S2o5I6cBrZUyjfiF5bXFu5X9P0f7IiyzBXCkk6jniK3DlEtM%2BDJn%2Fbgfe4pW2mZ11NABqLRVdm2NNUCdYRrq1DuTkhs1mHFNSlaUwpnwqyk4kk589WFydeeLjgrfyxdapgHMWSMsqi%2FuOb%2FDlzISuV%2FEk1TLL5uHbgCoKsuC%2FRXhUPp%2Bf7O7&X-Amz-Signature=93465babbbd7a400135fdffe49d2668a200e7a64a36ea6a09f08916fb0b72ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UB7O7P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAWK1e%2Fd54FKCSpwswocZxoTydPioFD%2BZDQQ9K4b2ITyAiAFT1WBS5pHxhR7qA3%2BLw%2FwAqmlEPDOlU4UIpDZ5EelFSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqgA644590Lj5bJkKtwDKfD6MyewcoEQvV7jxpiuZ5lv2uK6Up35twzEuXD%2FiK0oFQX1QHu1XMePeou%2Bn3sNPl8zf7kgkHTHI%2Bdp2YOzJ0Ud7NlkaKFTGCBi7f50%2FGZHBmj4N%2B8mcnhd0HPcK05MiWQTnjsDFXbKUcS9%2F6239lNlgx9Iqayngam3ez%2Bksv8ROnjBKtZ0qj8zCx4MbHm%2Fmgtb%2FbVZg6pT8W6zJJgl9DAJeALvDqgEYxV5s5HDiX89PYa5m%2Fwsn7XipMPFLscTMbXbxWsNW5%2FG41%2Bsd5bgPrU80crvTnC1DU7Zan%2FXiHoKAQPxZqPq6Di6uhxpQGnHJ0snUXeE1ytIA8F%2FLNaAKyvratYbTdKaHODN3JzDtGNbETYhsfIC4FURZmhsbIns7RT3gMwZj%2Bay01EDj6BTL5mbwHLYk%2FfAeZbCyd4IcJETk03qMJKsx2PUKICR7xQ5XNIs6ug9mYW2SOFYN9KjvFOXM5SvCfshq9sLWCeOQh8W5SIR9rFMqRw6ah1cExyj0hsEOeyE4LoOovVi8hWo2fFYMb%2BFkmzRLtrXqvX3BdYv2Td9oQngJSgg%2BbTXdeZw%2FSDL7lePand%2B8CP%2FAUZaZcj3Sc%2BBF87lk8ryY8sw5VLApvNIkP6vWMVEgA4woqfuvgY6pgGDyexecarYFfoqExW9LPqxkJd4V0pXy4Mq02N1wjV9S2o5I6cBrZUyjfiF5bXFu5X9P0f7IiyzBXCkk6jniK3DlEtM%2BDJn%2Fbgfe4pW2mZ11NABqLRVdm2NNUCdYRrq1DuTkhs1mHFNSlaUwpnwqyk4kk589WFydeeLjgrfyxdapgHMWSMsqi%2FuOb%2FDlzISuV%2FEk1TLL5uHbgCoKsuC%2FRXhUPp%2Bf7O7&X-Amz-Signature=39c89852786cafde6c3616c82bd05870aa9cae575920a816e73c151bf4166de5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UB7O7P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAWK1e%2Fd54FKCSpwswocZxoTydPioFD%2BZDQQ9K4b2ITyAiAFT1WBS5pHxhR7qA3%2BLw%2FwAqmlEPDOlU4UIpDZ5EelFSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqgA644590Lj5bJkKtwDKfD6MyewcoEQvV7jxpiuZ5lv2uK6Up35twzEuXD%2FiK0oFQX1QHu1XMePeou%2Bn3sNPl8zf7kgkHTHI%2Bdp2YOzJ0Ud7NlkaKFTGCBi7f50%2FGZHBmj4N%2B8mcnhd0HPcK05MiWQTnjsDFXbKUcS9%2F6239lNlgx9Iqayngam3ez%2Bksv8ROnjBKtZ0qj8zCx4MbHm%2Fmgtb%2FbVZg6pT8W6zJJgl9DAJeALvDqgEYxV5s5HDiX89PYa5m%2Fwsn7XipMPFLscTMbXbxWsNW5%2FG41%2Bsd5bgPrU80crvTnC1DU7Zan%2FXiHoKAQPxZqPq6Di6uhxpQGnHJ0snUXeE1ytIA8F%2FLNaAKyvratYbTdKaHODN3JzDtGNbETYhsfIC4FURZmhsbIns7RT3gMwZj%2Bay01EDj6BTL5mbwHLYk%2FfAeZbCyd4IcJETk03qMJKsx2PUKICR7xQ5XNIs6ug9mYW2SOFYN9KjvFOXM5SvCfshq9sLWCeOQh8W5SIR9rFMqRw6ah1cExyj0hsEOeyE4LoOovVi8hWo2fFYMb%2BFkmzRLtrXqvX3BdYv2Td9oQngJSgg%2BbTXdeZw%2FSDL7lePand%2B8CP%2FAUZaZcj3Sc%2BBF87lk8ryY8sw5VLApvNIkP6vWMVEgA4woqfuvgY6pgGDyexecarYFfoqExW9LPqxkJd4V0pXy4Mq02N1wjV9S2o5I6cBrZUyjfiF5bXFu5X9P0f7IiyzBXCkk6jniK3DlEtM%2BDJn%2Fbgfe4pW2mZ11NABqLRVdm2NNUCdYRrq1DuTkhs1mHFNSlaUwpnwqyk4kk589WFydeeLjgrfyxdapgHMWSMsqi%2FuOb%2FDlzISuV%2FEk1TLL5uHbgCoKsuC%2FRXhUPp%2Bf7O7&X-Amz-Signature=8e2939c33c62f11c2e01a310907f927e7aa6461ade2227f92e40822e62fdfb29&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UB7O7P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAWK1e%2Fd54FKCSpwswocZxoTydPioFD%2BZDQQ9K4b2ITyAiAFT1WBS5pHxhR7qA3%2BLw%2FwAqmlEPDOlU4UIpDZ5EelFSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqgA644590Lj5bJkKtwDKfD6MyewcoEQvV7jxpiuZ5lv2uK6Up35twzEuXD%2FiK0oFQX1QHu1XMePeou%2Bn3sNPl8zf7kgkHTHI%2Bdp2YOzJ0Ud7NlkaKFTGCBi7f50%2FGZHBmj4N%2B8mcnhd0HPcK05MiWQTnjsDFXbKUcS9%2F6239lNlgx9Iqayngam3ez%2Bksv8ROnjBKtZ0qj8zCx4MbHm%2Fmgtb%2FbVZg6pT8W6zJJgl9DAJeALvDqgEYxV5s5HDiX89PYa5m%2Fwsn7XipMPFLscTMbXbxWsNW5%2FG41%2Bsd5bgPrU80crvTnC1DU7Zan%2FXiHoKAQPxZqPq6Di6uhxpQGnHJ0snUXeE1ytIA8F%2FLNaAKyvratYbTdKaHODN3JzDtGNbETYhsfIC4FURZmhsbIns7RT3gMwZj%2Bay01EDj6BTL5mbwHLYk%2FfAeZbCyd4IcJETk03qMJKsx2PUKICR7xQ5XNIs6ug9mYW2SOFYN9KjvFOXM5SvCfshq9sLWCeOQh8W5SIR9rFMqRw6ah1cExyj0hsEOeyE4LoOovVi8hWo2fFYMb%2BFkmzRLtrXqvX3BdYv2Td9oQngJSgg%2BbTXdeZw%2FSDL7lePand%2B8CP%2FAUZaZcj3Sc%2BBF87lk8ryY8sw5VLApvNIkP6vWMVEgA4woqfuvgY6pgGDyexecarYFfoqExW9LPqxkJd4V0pXy4Mq02N1wjV9S2o5I6cBrZUyjfiF5bXFu5X9P0f7IiyzBXCkk6jniK3DlEtM%2BDJn%2Fbgfe4pW2mZ11NABqLRVdm2NNUCdYRrq1DuTkhs1mHFNSlaUwpnwqyk4kk589WFydeeLjgrfyxdapgHMWSMsqi%2FuOb%2FDlzISuV%2FEk1TLL5uHbgCoKsuC%2FRXhUPp%2Bf7O7&X-Amz-Signature=7b720bc734f7d3d4eb75b1ae2b494256cadb8d832e36d07f85d79de09625c71d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UB7O7P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAWK1e%2Fd54FKCSpwswocZxoTydPioFD%2BZDQQ9K4b2ITyAiAFT1WBS5pHxhR7qA3%2BLw%2FwAqmlEPDOlU4UIpDZ5EelFSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqgA644590Lj5bJkKtwDKfD6MyewcoEQvV7jxpiuZ5lv2uK6Up35twzEuXD%2FiK0oFQX1QHu1XMePeou%2Bn3sNPl8zf7kgkHTHI%2Bdp2YOzJ0Ud7NlkaKFTGCBi7f50%2FGZHBmj4N%2B8mcnhd0HPcK05MiWQTnjsDFXbKUcS9%2F6239lNlgx9Iqayngam3ez%2Bksv8ROnjBKtZ0qj8zCx4MbHm%2Fmgtb%2FbVZg6pT8W6zJJgl9DAJeALvDqgEYxV5s5HDiX89PYa5m%2Fwsn7XipMPFLscTMbXbxWsNW5%2FG41%2Bsd5bgPrU80crvTnC1DU7Zan%2FXiHoKAQPxZqPq6Di6uhxpQGnHJ0snUXeE1ytIA8F%2FLNaAKyvratYbTdKaHODN3JzDtGNbETYhsfIC4FURZmhsbIns7RT3gMwZj%2Bay01EDj6BTL5mbwHLYk%2FfAeZbCyd4IcJETk03qMJKsx2PUKICR7xQ5XNIs6ug9mYW2SOFYN9KjvFOXM5SvCfshq9sLWCeOQh8W5SIR9rFMqRw6ah1cExyj0hsEOeyE4LoOovVi8hWo2fFYMb%2BFkmzRLtrXqvX3BdYv2Td9oQngJSgg%2BbTXdeZw%2FSDL7lePand%2B8CP%2FAUZaZcj3Sc%2BBF87lk8ryY8sw5VLApvNIkP6vWMVEgA4woqfuvgY6pgGDyexecarYFfoqExW9LPqxkJd4V0pXy4Mq02N1wjV9S2o5I6cBrZUyjfiF5bXFu5X9P0f7IiyzBXCkk6jniK3DlEtM%2BDJn%2Fbgfe4pW2mZ11NABqLRVdm2NNUCdYRrq1DuTkhs1mHFNSlaUwpnwqyk4kk589WFydeeLjgrfyxdapgHMWSMsqi%2FuOb%2FDlzISuV%2FEk1TLL5uHbgCoKsuC%2FRXhUPp%2Bf7O7&X-Amz-Signature=3108f586b4708f47b6f242524a7431c34323d675ba129ab46411ab2ca794147d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UB7O7P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAWK1e%2Fd54FKCSpwswocZxoTydPioFD%2BZDQQ9K4b2ITyAiAFT1WBS5pHxhR7qA3%2BLw%2FwAqmlEPDOlU4UIpDZ5EelFSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqgA644590Lj5bJkKtwDKfD6MyewcoEQvV7jxpiuZ5lv2uK6Up35twzEuXD%2FiK0oFQX1QHu1XMePeou%2Bn3sNPl8zf7kgkHTHI%2Bdp2YOzJ0Ud7NlkaKFTGCBi7f50%2FGZHBmj4N%2B8mcnhd0HPcK05MiWQTnjsDFXbKUcS9%2F6239lNlgx9Iqayngam3ez%2Bksv8ROnjBKtZ0qj8zCx4MbHm%2Fmgtb%2FbVZg6pT8W6zJJgl9DAJeALvDqgEYxV5s5HDiX89PYa5m%2Fwsn7XipMPFLscTMbXbxWsNW5%2FG41%2Bsd5bgPrU80crvTnC1DU7Zan%2FXiHoKAQPxZqPq6Di6uhxpQGnHJ0snUXeE1ytIA8F%2FLNaAKyvratYbTdKaHODN3JzDtGNbETYhsfIC4FURZmhsbIns7RT3gMwZj%2Bay01EDj6BTL5mbwHLYk%2FfAeZbCyd4IcJETk03qMJKsx2PUKICR7xQ5XNIs6ug9mYW2SOFYN9KjvFOXM5SvCfshq9sLWCeOQh8W5SIR9rFMqRw6ah1cExyj0hsEOeyE4LoOovVi8hWo2fFYMb%2BFkmzRLtrXqvX3BdYv2Td9oQngJSgg%2BbTXdeZw%2FSDL7lePand%2B8CP%2FAUZaZcj3Sc%2BBF87lk8ryY8sw5VLApvNIkP6vWMVEgA4woqfuvgY6pgGDyexecarYFfoqExW9LPqxkJd4V0pXy4Mq02N1wjV9S2o5I6cBrZUyjfiF5bXFu5X9P0f7IiyzBXCkk6jniK3DlEtM%2BDJn%2Fbgfe4pW2mZ11NABqLRVdm2NNUCdYRrq1DuTkhs1mHFNSlaUwpnwqyk4kk589WFydeeLjgrfyxdapgHMWSMsqi%2FuOb%2FDlzISuV%2FEk1TLL5uHbgCoKsuC%2FRXhUPp%2Bf7O7&X-Amz-Signature=7d7e6b92d1b43771d5490f8297529dbd03f05a27ebf377039047531f719d2083&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
