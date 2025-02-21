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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=be23e49ea3eec560d108355a9696fc018cbdcbdf709ca502862b7ca86487eed3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=725b9fd4114c7631893ae1af2393e3aa62e14b6cac84f830301c71bf0560f22f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=ca34497bd60ff472f4f9562b630951a89a714f03f34cda33b946b97c679111a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=27c254715a9fbe8555b2d7aadff5483350c805142db89763fc5316e68af13e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=8cd6fe6901e29758573d6957f81f9ed94e93d79c7b28b3755ce38b9d4262ead9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=27b9bebbacd87e72d1b1a2677e93b7224670aa0787eb7bd1b6f7b32441ad8a53&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=4097ef93d5bf9868ebef9a1746730684345262306ef54ccf17edc3e41fe7bc96&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
