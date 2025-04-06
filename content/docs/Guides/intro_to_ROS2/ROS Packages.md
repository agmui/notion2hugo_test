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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV6XUGY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXujWOYx1A6mb%2BnmgdZsEVPishge4SZ0olgTy1hjtyfgIgZzMk1fDcecCuSbS1ZYy0qqOrM3MUkIcOZLHS9StaIKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADbteT8o1pOnjKdkircA1tIjYAg%2FQkAZKd49EAUNdW4gWfAkzdAYo%2BCPGJKeicv5L0Jr2%2BrPFSqU%2BD8A7G9Ys76247e1uvLl0%2B4EwoBSxrZ4m%2BXwD0tmiP8TkB5E0HvOw8%2FAZxVmKvVU5Ys%2BWSSCKG9bSLN1foiXTfHvYqDhv2k2GPrXFXrTfJUyPesb9m4UCEqO4FyIDFpvwIig1tivVhoNrh%2FWQXgWK9pMI7uvqWVzQjYKkQuKuF3NiXRpn%2F0twQ%2BneSXCMeYfsKlghtbkjpMWTFD0iZo1kSlo9fb9Q8AMKp1FfGip7RV7c9r%2Bd3Hz6rGjdM9C0E8N6Q5VItjOx30fMMjbxrHyHg2nerveCruHCtWrGarPGLoRCYECIopLvJ%2FhEJ85WDHbSsU3pwKW%2FJw%2FhZI8Q%2FJVBhfUL3soWfTY%2B3z68CgO%2Fy15ZvsQh8eZsaGxtKJYtuiuiyq5ZanLff73XxTGIb0IevtNFbKxw30fL%2FmmTSvef5Y7xApI4UriBC2DMC3tHffWSielTxQYdI4XAVkHmNJZVPHOArcSOv%2Fp%2FxUjMwSjF7r1rsnaix3hHe3U2QPoy%2F59k3fmvb85g7lTwAu48QQX%2BAcUtILbKriaLvzaDNcDl1zyVuJSa8A%2BiWIHjzUvtaVZ%2BZRMPD0y78GOqUBCf6Sp2bYP96nf9WB3zU6Lb8a5%2BYcw00beQlqSzeADwNxdAiPbzx4lpYTZY6ppZq7TEgVIJVvuj2rHer7eqwcxuZaTu%2F9D2582CeexUgUEbDOin6%2BI8OyMpPCeEQUopykWS8JXWFMM94wNp4vjBnzzvVQzNA9odXSxeYchkkOtAOMyqPO6h8LNMco2xzJvS8D%2FBvr4VC7CqG7pCMHpGAwKm89ckON&X-Amz-Signature=938adabff3a5cb3b30842dabed6e8d0717d69f9ad81d7cebda6d5c2da7e8f331&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV6XUGY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXujWOYx1A6mb%2BnmgdZsEVPishge4SZ0olgTy1hjtyfgIgZzMk1fDcecCuSbS1ZYy0qqOrM3MUkIcOZLHS9StaIKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADbteT8o1pOnjKdkircA1tIjYAg%2FQkAZKd49EAUNdW4gWfAkzdAYo%2BCPGJKeicv5L0Jr2%2BrPFSqU%2BD8A7G9Ys76247e1uvLl0%2B4EwoBSxrZ4m%2BXwD0tmiP8TkB5E0HvOw8%2FAZxVmKvVU5Ys%2BWSSCKG9bSLN1foiXTfHvYqDhv2k2GPrXFXrTfJUyPesb9m4UCEqO4FyIDFpvwIig1tivVhoNrh%2FWQXgWK9pMI7uvqWVzQjYKkQuKuF3NiXRpn%2F0twQ%2BneSXCMeYfsKlghtbkjpMWTFD0iZo1kSlo9fb9Q8AMKp1FfGip7RV7c9r%2Bd3Hz6rGjdM9C0E8N6Q5VItjOx30fMMjbxrHyHg2nerveCruHCtWrGarPGLoRCYECIopLvJ%2FhEJ85WDHbSsU3pwKW%2FJw%2FhZI8Q%2FJVBhfUL3soWfTY%2B3z68CgO%2Fy15ZvsQh8eZsaGxtKJYtuiuiyq5ZanLff73XxTGIb0IevtNFbKxw30fL%2FmmTSvef5Y7xApI4UriBC2DMC3tHffWSielTxQYdI4XAVkHmNJZVPHOArcSOv%2Fp%2FxUjMwSjF7r1rsnaix3hHe3U2QPoy%2F59k3fmvb85g7lTwAu48QQX%2BAcUtILbKriaLvzaDNcDl1zyVuJSa8A%2BiWIHjzUvtaVZ%2BZRMPD0y78GOqUBCf6Sp2bYP96nf9WB3zU6Lb8a5%2BYcw00beQlqSzeADwNxdAiPbzx4lpYTZY6ppZq7TEgVIJVvuj2rHer7eqwcxuZaTu%2F9D2582CeexUgUEbDOin6%2BI8OyMpPCeEQUopykWS8JXWFMM94wNp4vjBnzzvVQzNA9odXSxeYchkkOtAOMyqPO6h8LNMco2xzJvS8D%2FBvr4VC7CqG7pCMHpGAwKm89ckON&X-Amz-Signature=609dfdef6a53d9456987dcefa9f0a0f3734c72d3b2f0db8768ca87c7b443be9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV6XUGY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXujWOYx1A6mb%2BnmgdZsEVPishge4SZ0olgTy1hjtyfgIgZzMk1fDcecCuSbS1ZYy0qqOrM3MUkIcOZLHS9StaIKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADbteT8o1pOnjKdkircA1tIjYAg%2FQkAZKd49EAUNdW4gWfAkzdAYo%2BCPGJKeicv5L0Jr2%2BrPFSqU%2BD8A7G9Ys76247e1uvLl0%2B4EwoBSxrZ4m%2BXwD0tmiP8TkB5E0HvOw8%2FAZxVmKvVU5Ys%2BWSSCKG9bSLN1foiXTfHvYqDhv2k2GPrXFXrTfJUyPesb9m4UCEqO4FyIDFpvwIig1tivVhoNrh%2FWQXgWK9pMI7uvqWVzQjYKkQuKuF3NiXRpn%2F0twQ%2BneSXCMeYfsKlghtbkjpMWTFD0iZo1kSlo9fb9Q8AMKp1FfGip7RV7c9r%2Bd3Hz6rGjdM9C0E8N6Q5VItjOx30fMMjbxrHyHg2nerveCruHCtWrGarPGLoRCYECIopLvJ%2FhEJ85WDHbSsU3pwKW%2FJw%2FhZI8Q%2FJVBhfUL3soWfTY%2B3z68CgO%2Fy15ZvsQh8eZsaGxtKJYtuiuiyq5ZanLff73XxTGIb0IevtNFbKxw30fL%2FmmTSvef5Y7xApI4UriBC2DMC3tHffWSielTxQYdI4XAVkHmNJZVPHOArcSOv%2Fp%2FxUjMwSjF7r1rsnaix3hHe3U2QPoy%2F59k3fmvb85g7lTwAu48QQX%2BAcUtILbKriaLvzaDNcDl1zyVuJSa8A%2BiWIHjzUvtaVZ%2BZRMPD0y78GOqUBCf6Sp2bYP96nf9WB3zU6Lb8a5%2BYcw00beQlqSzeADwNxdAiPbzx4lpYTZY6ppZq7TEgVIJVvuj2rHer7eqwcxuZaTu%2F9D2582CeexUgUEbDOin6%2BI8OyMpPCeEQUopykWS8JXWFMM94wNp4vjBnzzvVQzNA9odXSxeYchkkOtAOMyqPO6h8LNMco2xzJvS8D%2FBvr4VC7CqG7pCMHpGAwKm89ckON&X-Amz-Signature=c725683ef5f676ae386f197d1130e47cf2359914d35682ce62d46e22111f1ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV6XUGY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXujWOYx1A6mb%2BnmgdZsEVPishge4SZ0olgTy1hjtyfgIgZzMk1fDcecCuSbS1ZYy0qqOrM3MUkIcOZLHS9StaIKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADbteT8o1pOnjKdkircA1tIjYAg%2FQkAZKd49EAUNdW4gWfAkzdAYo%2BCPGJKeicv5L0Jr2%2BrPFSqU%2BD8A7G9Ys76247e1uvLl0%2B4EwoBSxrZ4m%2BXwD0tmiP8TkB5E0HvOw8%2FAZxVmKvVU5Ys%2BWSSCKG9bSLN1foiXTfHvYqDhv2k2GPrXFXrTfJUyPesb9m4UCEqO4FyIDFpvwIig1tivVhoNrh%2FWQXgWK9pMI7uvqWVzQjYKkQuKuF3NiXRpn%2F0twQ%2BneSXCMeYfsKlghtbkjpMWTFD0iZo1kSlo9fb9Q8AMKp1FfGip7RV7c9r%2Bd3Hz6rGjdM9C0E8N6Q5VItjOx30fMMjbxrHyHg2nerveCruHCtWrGarPGLoRCYECIopLvJ%2FhEJ85WDHbSsU3pwKW%2FJw%2FhZI8Q%2FJVBhfUL3soWfTY%2B3z68CgO%2Fy15ZvsQh8eZsaGxtKJYtuiuiyq5ZanLff73XxTGIb0IevtNFbKxw30fL%2FmmTSvef5Y7xApI4UriBC2DMC3tHffWSielTxQYdI4XAVkHmNJZVPHOArcSOv%2Fp%2FxUjMwSjF7r1rsnaix3hHe3U2QPoy%2F59k3fmvb85g7lTwAu48QQX%2BAcUtILbKriaLvzaDNcDl1zyVuJSa8A%2BiWIHjzUvtaVZ%2BZRMPD0y78GOqUBCf6Sp2bYP96nf9WB3zU6Lb8a5%2BYcw00beQlqSzeADwNxdAiPbzx4lpYTZY6ppZq7TEgVIJVvuj2rHer7eqwcxuZaTu%2F9D2582CeexUgUEbDOin6%2BI8OyMpPCeEQUopykWS8JXWFMM94wNp4vjBnzzvVQzNA9odXSxeYchkkOtAOMyqPO6h8LNMco2xzJvS8D%2FBvr4VC7CqG7pCMHpGAwKm89ckON&X-Amz-Signature=0b73e8558ba8b68d855acbd23c4a606479cf70d5d8ffd9525e52071b706cb39c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV6XUGY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXujWOYx1A6mb%2BnmgdZsEVPishge4SZ0olgTy1hjtyfgIgZzMk1fDcecCuSbS1ZYy0qqOrM3MUkIcOZLHS9StaIKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADbteT8o1pOnjKdkircA1tIjYAg%2FQkAZKd49EAUNdW4gWfAkzdAYo%2BCPGJKeicv5L0Jr2%2BrPFSqU%2BD8A7G9Ys76247e1uvLl0%2B4EwoBSxrZ4m%2BXwD0tmiP8TkB5E0HvOw8%2FAZxVmKvVU5Ys%2BWSSCKG9bSLN1foiXTfHvYqDhv2k2GPrXFXrTfJUyPesb9m4UCEqO4FyIDFpvwIig1tivVhoNrh%2FWQXgWK9pMI7uvqWVzQjYKkQuKuF3NiXRpn%2F0twQ%2BneSXCMeYfsKlghtbkjpMWTFD0iZo1kSlo9fb9Q8AMKp1FfGip7RV7c9r%2Bd3Hz6rGjdM9C0E8N6Q5VItjOx30fMMjbxrHyHg2nerveCruHCtWrGarPGLoRCYECIopLvJ%2FhEJ85WDHbSsU3pwKW%2FJw%2FhZI8Q%2FJVBhfUL3soWfTY%2B3z68CgO%2Fy15ZvsQh8eZsaGxtKJYtuiuiyq5ZanLff73XxTGIb0IevtNFbKxw30fL%2FmmTSvef5Y7xApI4UriBC2DMC3tHffWSielTxQYdI4XAVkHmNJZVPHOArcSOv%2Fp%2FxUjMwSjF7r1rsnaix3hHe3U2QPoy%2F59k3fmvb85g7lTwAu48QQX%2BAcUtILbKriaLvzaDNcDl1zyVuJSa8A%2BiWIHjzUvtaVZ%2BZRMPD0y78GOqUBCf6Sp2bYP96nf9WB3zU6Lb8a5%2BYcw00beQlqSzeADwNxdAiPbzx4lpYTZY6ppZq7TEgVIJVvuj2rHer7eqwcxuZaTu%2F9D2582CeexUgUEbDOin6%2BI8OyMpPCeEQUopykWS8JXWFMM94wNp4vjBnzzvVQzNA9odXSxeYchkkOtAOMyqPO6h8LNMco2xzJvS8D%2FBvr4VC7CqG7pCMHpGAwKm89ckON&X-Amz-Signature=73293f5c5b21e6e8aa002a102857c8a812c3f5ac0e11a4a727e02d3470e3a1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV6XUGY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXujWOYx1A6mb%2BnmgdZsEVPishge4SZ0olgTy1hjtyfgIgZzMk1fDcecCuSbS1ZYy0qqOrM3MUkIcOZLHS9StaIKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADbteT8o1pOnjKdkircA1tIjYAg%2FQkAZKd49EAUNdW4gWfAkzdAYo%2BCPGJKeicv5L0Jr2%2BrPFSqU%2BD8A7G9Ys76247e1uvLl0%2B4EwoBSxrZ4m%2BXwD0tmiP8TkB5E0HvOw8%2FAZxVmKvVU5Ys%2BWSSCKG9bSLN1foiXTfHvYqDhv2k2GPrXFXrTfJUyPesb9m4UCEqO4FyIDFpvwIig1tivVhoNrh%2FWQXgWK9pMI7uvqWVzQjYKkQuKuF3NiXRpn%2F0twQ%2BneSXCMeYfsKlghtbkjpMWTFD0iZo1kSlo9fb9Q8AMKp1FfGip7RV7c9r%2Bd3Hz6rGjdM9C0E8N6Q5VItjOx30fMMjbxrHyHg2nerveCruHCtWrGarPGLoRCYECIopLvJ%2FhEJ85WDHbSsU3pwKW%2FJw%2FhZI8Q%2FJVBhfUL3soWfTY%2B3z68CgO%2Fy15ZvsQh8eZsaGxtKJYtuiuiyq5ZanLff73XxTGIb0IevtNFbKxw30fL%2FmmTSvef5Y7xApI4UriBC2DMC3tHffWSielTxQYdI4XAVkHmNJZVPHOArcSOv%2Fp%2FxUjMwSjF7r1rsnaix3hHe3U2QPoy%2F59k3fmvb85g7lTwAu48QQX%2BAcUtILbKriaLvzaDNcDl1zyVuJSa8A%2BiWIHjzUvtaVZ%2BZRMPD0y78GOqUBCf6Sp2bYP96nf9WB3zU6Lb8a5%2BYcw00beQlqSzeADwNxdAiPbzx4lpYTZY6ppZq7TEgVIJVvuj2rHer7eqwcxuZaTu%2F9D2582CeexUgUEbDOin6%2BI8OyMpPCeEQUopykWS8JXWFMM94wNp4vjBnzzvVQzNA9odXSxeYchkkOtAOMyqPO6h8LNMco2xzJvS8D%2FBvr4VC7CqG7pCMHpGAwKm89ckON&X-Amz-Signature=25cb72fe19018e466b41ad92ee92da3230ca1f2796ade74380baf52fb474d47a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV6XUGY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXujWOYx1A6mb%2BnmgdZsEVPishge4SZ0olgTy1hjtyfgIgZzMk1fDcecCuSbS1ZYy0qqOrM3MUkIcOZLHS9StaIKwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDADbteT8o1pOnjKdkircA1tIjYAg%2FQkAZKd49EAUNdW4gWfAkzdAYo%2BCPGJKeicv5L0Jr2%2BrPFSqU%2BD8A7G9Ys76247e1uvLl0%2B4EwoBSxrZ4m%2BXwD0tmiP8TkB5E0HvOw8%2FAZxVmKvVU5Ys%2BWSSCKG9bSLN1foiXTfHvYqDhv2k2GPrXFXrTfJUyPesb9m4UCEqO4FyIDFpvwIig1tivVhoNrh%2FWQXgWK9pMI7uvqWVzQjYKkQuKuF3NiXRpn%2F0twQ%2BneSXCMeYfsKlghtbkjpMWTFD0iZo1kSlo9fb9Q8AMKp1FfGip7RV7c9r%2Bd3Hz6rGjdM9C0E8N6Q5VItjOx30fMMjbxrHyHg2nerveCruHCtWrGarPGLoRCYECIopLvJ%2FhEJ85WDHbSsU3pwKW%2FJw%2FhZI8Q%2FJVBhfUL3soWfTY%2B3z68CgO%2Fy15ZvsQh8eZsaGxtKJYtuiuiyq5ZanLff73XxTGIb0IevtNFbKxw30fL%2FmmTSvef5Y7xApI4UriBC2DMC3tHffWSielTxQYdI4XAVkHmNJZVPHOArcSOv%2Fp%2FxUjMwSjF7r1rsnaix3hHe3U2QPoy%2F59k3fmvb85g7lTwAu48QQX%2BAcUtILbKriaLvzaDNcDl1zyVuJSa8A%2BiWIHjzUvtaVZ%2BZRMPD0y78GOqUBCf6Sp2bYP96nf9WB3zU6Lb8a5%2BYcw00beQlqSzeADwNxdAiPbzx4lpYTZY6ppZq7TEgVIJVvuj2rHer7eqwcxuZaTu%2F9D2582CeexUgUEbDOin6%2BI8OyMpPCeEQUopykWS8JXWFMM94wNp4vjBnzzvVQzNA9odXSxeYchkkOtAOMyqPO6h8LNMco2xzJvS8D%2FBvr4VC7CqG7pCMHpGAwKm89ckON&X-Amz-Signature=ce25fee0994fbd11262922852514bc5e8271461acf8b057951ea3db0cec11c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
