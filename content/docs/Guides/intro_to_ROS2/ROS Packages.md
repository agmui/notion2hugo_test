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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4R7KGKO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3TDFYQg0n3djBcAIZOdmY6OvwkuofxV0POMsyh8spOwIgZGfHaiIFGKKNVyyG4JQFdMaLxHdnfVqZrBFHB8tcg1MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B7zXGYIWxxwg8spSrcA1GniIkDE6JydQYnHO9DsxEtWXRJWlZcb0%2BA4%2FKKzYVUECDrCVbxj%2BHwCaCJAmkwdqTTyFjRJcFkG%2BIWQ0ZvqaN%2Fx7W787PM6byNaOMRcIBS1yx3tthy07sBOwWCtGAMTC5%2FXvtFlj6RYu08ufwukBOtyZ8Vd6IGzLg2FK78MD6rAUDLfhK3lN%2F9J82IXvyGTa7JNnC8fdFVcat%2FucOx3fBfkM%2FOpDFQKh6TZKx8704k9euJv5%2Bh9q0J6GtoOZCiXO98QTIbKL2yqtT9te%2Bx9c%2Bi8Ie9sg%2B4CGIV%2BUMSav7%2F2Q9S0AVJqwrnbAHFuCLoikRvga5X%2BxzQaXi1Ei0fUV95BvAE4%2F6%2FKIuhFskMx3cg7uG2gJeCmZ9Pn%2FjmbWR4nphI419fjwKUy0QSMFCkTUKe04381D2xfXzI5GiT%2BcTE0F5VrnQIhGsCJCq821ldrU4yiooqWxE%2BtbxeenghPLZeVUECpAzxtc7%2FLMOODWtn4m6q%2FnNQtbNIQcpJGmCNbJ6yx2m3aKZxGnANYWFEZqd7CZ%2F0W67hfWL530nuWMCdu2Oo7W0%2FGgZp44hJFcFF1FxoC%2FKGC7CXqKRLHlyFS0kCn1x%2B8hKDt11cAZ2PCf72YLuVgwDw%2BD6wZkuYMMTE%2BLwGOqUBtx%2F4nRsYy4vgx2AADavJfz%2F8dmLB%2Fxjx1ADzvliDGJKYmdVRFehCo%2BE%2BWb%2F6Sf33j9imaJ5jagDDabF7HZR05TwqIyNX4kSEl1lef51a%2BcqeSGJBDbksUGtD7C6r5VHXYkPdqbplKqNkX%2Fj6g5EVtLn8Hb1A%2BaF5NRtRGYDKKByUAO4CTU7dHW0u6AP%2BaTONGnU2GNQyEgBXpxaLeHG0QNscq0pM&X-Amz-Signature=2fd357fbeb6895a15daebd326bb1148dd3ea90429a2f67219e40d748cc363c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4R7KGKO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3TDFYQg0n3djBcAIZOdmY6OvwkuofxV0POMsyh8spOwIgZGfHaiIFGKKNVyyG4JQFdMaLxHdnfVqZrBFHB8tcg1MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B7zXGYIWxxwg8spSrcA1GniIkDE6JydQYnHO9DsxEtWXRJWlZcb0%2BA4%2FKKzYVUECDrCVbxj%2BHwCaCJAmkwdqTTyFjRJcFkG%2BIWQ0ZvqaN%2Fx7W787PM6byNaOMRcIBS1yx3tthy07sBOwWCtGAMTC5%2FXvtFlj6RYu08ufwukBOtyZ8Vd6IGzLg2FK78MD6rAUDLfhK3lN%2F9J82IXvyGTa7JNnC8fdFVcat%2FucOx3fBfkM%2FOpDFQKh6TZKx8704k9euJv5%2Bh9q0J6GtoOZCiXO98QTIbKL2yqtT9te%2Bx9c%2Bi8Ie9sg%2B4CGIV%2BUMSav7%2F2Q9S0AVJqwrnbAHFuCLoikRvga5X%2BxzQaXi1Ei0fUV95BvAE4%2F6%2FKIuhFskMx3cg7uG2gJeCmZ9Pn%2FjmbWR4nphI419fjwKUy0QSMFCkTUKe04381D2xfXzI5GiT%2BcTE0F5VrnQIhGsCJCq821ldrU4yiooqWxE%2BtbxeenghPLZeVUECpAzxtc7%2FLMOODWtn4m6q%2FnNQtbNIQcpJGmCNbJ6yx2m3aKZxGnANYWFEZqd7CZ%2F0W67hfWL530nuWMCdu2Oo7W0%2FGgZp44hJFcFF1FxoC%2FKGC7CXqKRLHlyFS0kCn1x%2B8hKDt11cAZ2PCf72YLuVgwDw%2BD6wZkuYMMTE%2BLwGOqUBtx%2F4nRsYy4vgx2AADavJfz%2F8dmLB%2Fxjx1ADzvliDGJKYmdVRFehCo%2BE%2BWb%2F6Sf33j9imaJ5jagDDabF7HZR05TwqIyNX4kSEl1lef51a%2BcqeSGJBDbksUGtD7C6r5VHXYkPdqbplKqNkX%2Fj6g5EVtLn8Hb1A%2BaF5NRtRGYDKKByUAO4CTU7dHW0u6AP%2BaTONGnU2GNQyEgBXpxaLeHG0QNscq0pM&X-Amz-Signature=9173f7aed53da6cd30d3ee23133c33cc8ab78463a26349d6ec827070c7eca335&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4R7KGKO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3TDFYQg0n3djBcAIZOdmY6OvwkuofxV0POMsyh8spOwIgZGfHaiIFGKKNVyyG4JQFdMaLxHdnfVqZrBFHB8tcg1MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B7zXGYIWxxwg8spSrcA1GniIkDE6JydQYnHO9DsxEtWXRJWlZcb0%2BA4%2FKKzYVUECDrCVbxj%2BHwCaCJAmkwdqTTyFjRJcFkG%2BIWQ0ZvqaN%2Fx7W787PM6byNaOMRcIBS1yx3tthy07sBOwWCtGAMTC5%2FXvtFlj6RYu08ufwukBOtyZ8Vd6IGzLg2FK78MD6rAUDLfhK3lN%2F9J82IXvyGTa7JNnC8fdFVcat%2FucOx3fBfkM%2FOpDFQKh6TZKx8704k9euJv5%2Bh9q0J6GtoOZCiXO98QTIbKL2yqtT9te%2Bx9c%2Bi8Ie9sg%2B4CGIV%2BUMSav7%2F2Q9S0AVJqwrnbAHFuCLoikRvga5X%2BxzQaXi1Ei0fUV95BvAE4%2F6%2FKIuhFskMx3cg7uG2gJeCmZ9Pn%2FjmbWR4nphI419fjwKUy0QSMFCkTUKe04381D2xfXzI5GiT%2BcTE0F5VrnQIhGsCJCq821ldrU4yiooqWxE%2BtbxeenghPLZeVUECpAzxtc7%2FLMOODWtn4m6q%2FnNQtbNIQcpJGmCNbJ6yx2m3aKZxGnANYWFEZqd7CZ%2F0W67hfWL530nuWMCdu2Oo7W0%2FGgZp44hJFcFF1FxoC%2FKGC7CXqKRLHlyFS0kCn1x%2B8hKDt11cAZ2PCf72YLuVgwDw%2BD6wZkuYMMTE%2BLwGOqUBtx%2F4nRsYy4vgx2AADavJfz%2F8dmLB%2Fxjx1ADzvliDGJKYmdVRFehCo%2BE%2BWb%2F6Sf33j9imaJ5jagDDabF7HZR05TwqIyNX4kSEl1lef51a%2BcqeSGJBDbksUGtD7C6r5VHXYkPdqbplKqNkX%2Fj6g5EVtLn8Hb1A%2BaF5NRtRGYDKKByUAO4CTU7dHW0u6AP%2BaTONGnU2GNQyEgBXpxaLeHG0QNscq0pM&X-Amz-Signature=bf8593aef7157a67c5e9156fb33d2ca00433ea3291ef540878ecef335aa05d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4R7KGKO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3TDFYQg0n3djBcAIZOdmY6OvwkuofxV0POMsyh8spOwIgZGfHaiIFGKKNVyyG4JQFdMaLxHdnfVqZrBFHB8tcg1MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B7zXGYIWxxwg8spSrcA1GniIkDE6JydQYnHO9DsxEtWXRJWlZcb0%2BA4%2FKKzYVUECDrCVbxj%2BHwCaCJAmkwdqTTyFjRJcFkG%2BIWQ0ZvqaN%2Fx7W787PM6byNaOMRcIBS1yx3tthy07sBOwWCtGAMTC5%2FXvtFlj6RYu08ufwukBOtyZ8Vd6IGzLg2FK78MD6rAUDLfhK3lN%2F9J82IXvyGTa7JNnC8fdFVcat%2FucOx3fBfkM%2FOpDFQKh6TZKx8704k9euJv5%2Bh9q0J6GtoOZCiXO98QTIbKL2yqtT9te%2Bx9c%2Bi8Ie9sg%2B4CGIV%2BUMSav7%2F2Q9S0AVJqwrnbAHFuCLoikRvga5X%2BxzQaXi1Ei0fUV95BvAE4%2F6%2FKIuhFskMx3cg7uG2gJeCmZ9Pn%2FjmbWR4nphI419fjwKUy0QSMFCkTUKe04381D2xfXzI5GiT%2BcTE0F5VrnQIhGsCJCq821ldrU4yiooqWxE%2BtbxeenghPLZeVUECpAzxtc7%2FLMOODWtn4m6q%2FnNQtbNIQcpJGmCNbJ6yx2m3aKZxGnANYWFEZqd7CZ%2F0W67hfWL530nuWMCdu2Oo7W0%2FGgZp44hJFcFF1FxoC%2FKGC7CXqKRLHlyFS0kCn1x%2B8hKDt11cAZ2PCf72YLuVgwDw%2BD6wZkuYMMTE%2BLwGOqUBtx%2F4nRsYy4vgx2AADavJfz%2F8dmLB%2Fxjx1ADzvliDGJKYmdVRFehCo%2BE%2BWb%2F6Sf33j9imaJ5jagDDabF7HZR05TwqIyNX4kSEl1lef51a%2BcqeSGJBDbksUGtD7C6r5VHXYkPdqbplKqNkX%2Fj6g5EVtLn8Hb1A%2BaF5NRtRGYDKKByUAO4CTU7dHW0u6AP%2BaTONGnU2GNQyEgBXpxaLeHG0QNscq0pM&X-Amz-Signature=054b0383f99ebdf22a08c86cac5f5831628d02a3e99699899bdaef6e64e45c93&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4R7KGKO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3TDFYQg0n3djBcAIZOdmY6OvwkuofxV0POMsyh8spOwIgZGfHaiIFGKKNVyyG4JQFdMaLxHdnfVqZrBFHB8tcg1MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B7zXGYIWxxwg8spSrcA1GniIkDE6JydQYnHO9DsxEtWXRJWlZcb0%2BA4%2FKKzYVUECDrCVbxj%2BHwCaCJAmkwdqTTyFjRJcFkG%2BIWQ0ZvqaN%2Fx7W787PM6byNaOMRcIBS1yx3tthy07sBOwWCtGAMTC5%2FXvtFlj6RYu08ufwukBOtyZ8Vd6IGzLg2FK78MD6rAUDLfhK3lN%2F9J82IXvyGTa7JNnC8fdFVcat%2FucOx3fBfkM%2FOpDFQKh6TZKx8704k9euJv5%2Bh9q0J6GtoOZCiXO98QTIbKL2yqtT9te%2Bx9c%2Bi8Ie9sg%2B4CGIV%2BUMSav7%2F2Q9S0AVJqwrnbAHFuCLoikRvga5X%2BxzQaXi1Ei0fUV95BvAE4%2F6%2FKIuhFskMx3cg7uG2gJeCmZ9Pn%2FjmbWR4nphI419fjwKUy0QSMFCkTUKe04381D2xfXzI5GiT%2BcTE0F5VrnQIhGsCJCq821ldrU4yiooqWxE%2BtbxeenghPLZeVUECpAzxtc7%2FLMOODWtn4m6q%2FnNQtbNIQcpJGmCNbJ6yx2m3aKZxGnANYWFEZqd7CZ%2F0W67hfWL530nuWMCdu2Oo7W0%2FGgZp44hJFcFF1FxoC%2FKGC7CXqKRLHlyFS0kCn1x%2B8hKDt11cAZ2PCf72YLuVgwDw%2BD6wZkuYMMTE%2BLwGOqUBtx%2F4nRsYy4vgx2AADavJfz%2F8dmLB%2Fxjx1ADzvliDGJKYmdVRFehCo%2BE%2BWb%2F6Sf33j9imaJ5jagDDabF7HZR05TwqIyNX4kSEl1lef51a%2BcqeSGJBDbksUGtD7C6r5VHXYkPdqbplKqNkX%2Fj6g5EVtLn8Hb1A%2BaF5NRtRGYDKKByUAO4CTU7dHW0u6AP%2BaTONGnU2GNQyEgBXpxaLeHG0QNscq0pM&X-Amz-Signature=79d2250213ae0a091079002c2bccc26aced004ea9274504367620cca74aea4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4R7KGKO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3TDFYQg0n3djBcAIZOdmY6OvwkuofxV0POMsyh8spOwIgZGfHaiIFGKKNVyyG4JQFdMaLxHdnfVqZrBFHB8tcg1MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B7zXGYIWxxwg8spSrcA1GniIkDE6JydQYnHO9DsxEtWXRJWlZcb0%2BA4%2FKKzYVUECDrCVbxj%2BHwCaCJAmkwdqTTyFjRJcFkG%2BIWQ0ZvqaN%2Fx7W787PM6byNaOMRcIBS1yx3tthy07sBOwWCtGAMTC5%2FXvtFlj6RYu08ufwukBOtyZ8Vd6IGzLg2FK78MD6rAUDLfhK3lN%2F9J82IXvyGTa7JNnC8fdFVcat%2FucOx3fBfkM%2FOpDFQKh6TZKx8704k9euJv5%2Bh9q0J6GtoOZCiXO98QTIbKL2yqtT9te%2Bx9c%2Bi8Ie9sg%2B4CGIV%2BUMSav7%2F2Q9S0AVJqwrnbAHFuCLoikRvga5X%2BxzQaXi1Ei0fUV95BvAE4%2F6%2FKIuhFskMx3cg7uG2gJeCmZ9Pn%2FjmbWR4nphI419fjwKUy0QSMFCkTUKe04381D2xfXzI5GiT%2BcTE0F5VrnQIhGsCJCq821ldrU4yiooqWxE%2BtbxeenghPLZeVUECpAzxtc7%2FLMOODWtn4m6q%2FnNQtbNIQcpJGmCNbJ6yx2m3aKZxGnANYWFEZqd7CZ%2F0W67hfWL530nuWMCdu2Oo7W0%2FGgZp44hJFcFF1FxoC%2FKGC7CXqKRLHlyFS0kCn1x%2B8hKDt11cAZ2PCf72YLuVgwDw%2BD6wZkuYMMTE%2BLwGOqUBtx%2F4nRsYy4vgx2AADavJfz%2F8dmLB%2Fxjx1ADzvliDGJKYmdVRFehCo%2BE%2BWb%2F6Sf33j9imaJ5jagDDabF7HZR05TwqIyNX4kSEl1lef51a%2BcqeSGJBDbksUGtD7C6r5VHXYkPdqbplKqNkX%2Fj6g5EVtLn8Hb1A%2BaF5NRtRGYDKKByUAO4CTU7dHW0u6AP%2BaTONGnU2GNQyEgBXpxaLeHG0QNscq0pM&X-Amz-Signature=e145383d2d496e5e4465a4a268350ed143327cc5141305b0c3bede11f2909625&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4R7KGKO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3TDFYQg0n3djBcAIZOdmY6OvwkuofxV0POMsyh8spOwIgZGfHaiIFGKKNVyyG4JQFdMaLxHdnfVqZrBFHB8tcg1MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B7zXGYIWxxwg8spSrcA1GniIkDE6JydQYnHO9DsxEtWXRJWlZcb0%2BA4%2FKKzYVUECDrCVbxj%2BHwCaCJAmkwdqTTyFjRJcFkG%2BIWQ0ZvqaN%2Fx7W787PM6byNaOMRcIBS1yx3tthy07sBOwWCtGAMTC5%2FXvtFlj6RYu08ufwukBOtyZ8Vd6IGzLg2FK78MD6rAUDLfhK3lN%2F9J82IXvyGTa7JNnC8fdFVcat%2FucOx3fBfkM%2FOpDFQKh6TZKx8704k9euJv5%2Bh9q0J6GtoOZCiXO98QTIbKL2yqtT9te%2Bx9c%2Bi8Ie9sg%2B4CGIV%2BUMSav7%2F2Q9S0AVJqwrnbAHFuCLoikRvga5X%2BxzQaXi1Ei0fUV95BvAE4%2F6%2FKIuhFskMx3cg7uG2gJeCmZ9Pn%2FjmbWR4nphI419fjwKUy0QSMFCkTUKe04381D2xfXzI5GiT%2BcTE0F5VrnQIhGsCJCq821ldrU4yiooqWxE%2BtbxeenghPLZeVUECpAzxtc7%2FLMOODWtn4m6q%2FnNQtbNIQcpJGmCNbJ6yx2m3aKZxGnANYWFEZqd7CZ%2F0W67hfWL530nuWMCdu2Oo7W0%2FGgZp44hJFcFF1FxoC%2FKGC7CXqKRLHlyFS0kCn1x%2B8hKDt11cAZ2PCf72YLuVgwDw%2BD6wZkuYMMTE%2BLwGOqUBtx%2F4nRsYy4vgx2AADavJfz%2F8dmLB%2Fxjx1ADzvliDGJKYmdVRFehCo%2BE%2BWb%2F6Sf33j9imaJ5jagDDabF7HZR05TwqIyNX4kSEl1lef51a%2BcqeSGJBDbksUGtD7C6r5VHXYkPdqbplKqNkX%2Fj6g5EVtLn8Hb1A%2BaF5NRtRGYDKKByUAO4CTU7dHW0u6AP%2BaTONGnU2GNQyEgBXpxaLeHG0QNscq0pM&X-Amz-Signature=a438bd808adc2d3537fd7068ff01e9ecf2434d71f9e6af2377236fe24b531bed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
