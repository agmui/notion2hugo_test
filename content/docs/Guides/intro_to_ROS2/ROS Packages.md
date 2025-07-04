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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQIJKFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAeMiL%2Fs7%2BAGqgUn7JSkGkqb3QyWV688HEerAEXq4aYBAiA0pX%2BhcTtEZlYc%2Fj4Puw9tIqIBXA4UhGRMVMQW2ePClCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpDPWVnD26OAJkNtPKtwD8i2bgSIj9GlRm818O4%2Bime4rL9Vp9d0IOi%2F1pPsV3kEfCfpEwQ8nS75zqE67NpaAHBvbINCFMGHP1h3zydoLbOCOU3RFo%2FnGwYsiSpf7V3dFio5vGDrMGi1tGtQs8fn1jqkINfmnDC0VKvlI3m%2FHYsOQcWuQjZDIWGmEob5%2FEtN4zIEW6TxmhVWuJkzf7%2Ff0gd2ei%2Bny2l%2F95RPP8k6fQA5L2BLM0DYHooNUu3jlhmRqt5FVVy%2FVcD3eQSyo2ru9rv6jLobE8rJ5slQAr3ExglqtDUQ7zi2mnWmMLUC9RqaZH9pIp1vw7FtFu8UrITvq8sMdONuf67LWpnxQiiGubD73NgyjXBzrmM2VXk5ACajS3oilhBopbFvyJCnvRu%2Bxth90zim8I5yhxNNSWo2pLUcCXM%2BDq%2FCfz%2B4xepXCpiidebWBfSf0G9Ki7HyhJcGL7YqAtwg6hJew0vQbks%2BgWgpG6piI6tHh0TBFs%2BzPMkD4srYq73ldLF4ksaLG%2BM%2FrAYpzmAvYgqhfQvSymMQntiXQZ6jEcfyeR1M6i5y9W%2B9gEvcHBmGk9teOC8ap80hwQCvdIA%2B0laPk74B1SCUlRJZtLyyZiF0uUlGRz2CTdEa7OHr7pXpgA7mcZ5gw8MOfwwY6pgENMVDKbgLzpop0zHaQfiCFts708Wxvczuniz3TvtyxOhQPPR42ALwl4fbTn3I9OaSNLbMn2HylK4t7ntSMyHoiAgwlSBcvCmRgKJYHZIdqyh1sYJXhGWdGfQGPKg1jkn9AiWN1UrRiihZYO2zSxpSjAHkQIf4Z5ZBUSA7CG2fdMe6sdTg%2F%2BpFqX8JFVcGYuZ7efx3FcD3mEDkUTmd2zNdwfP0V0I56&X-Amz-Signature=2fd646824a518d1d68702ebaaa1574f81d29e490f8c0ae61221601698322264a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQIJKFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAeMiL%2Fs7%2BAGqgUn7JSkGkqb3QyWV688HEerAEXq4aYBAiA0pX%2BhcTtEZlYc%2Fj4Puw9tIqIBXA4UhGRMVMQW2ePClCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpDPWVnD26OAJkNtPKtwD8i2bgSIj9GlRm818O4%2Bime4rL9Vp9d0IOi%2F1pPsV3kEfCfpEwQ8nS75zqE67NpaAHBvbINCFMGHP1h3zydoLbOCOU3RFo%2FnGwYsiSpf7V3dFio5vGDrMGi1tGtQs8fn1jqkINfmnDC0VKvlI3m%2FHYsOQcWuQjZDIWGmEob5%2FEtN4zIEW6TxmhVWuJkzf7%2Ff0gd2ei%2Bny2l%2F95RPP8k6fQA5L2BLM0DYHooNUu3jlhmRqt5FVVy%2FVcD3eQSyo2ru9rv6jLobE8rJ5slQAr3ExglqtDUQ7zi2mnWmMLUC9RqaZH9pIp1vw7FtFu8UrITvq8sMdONuf67LWpnxQiiGubD73NgyjXBzrmM2VXk5ACajS3oilhBopbFvyJCnvRu%2Bxth90zim8I5yhxNNSWo2pLUcCXM%2BDq%2FCfz%2B4xepXCpiidebWBfSf0G9Ki7HyhJcGL7YqAtwg6hJew0vQbks%2BgWgpG6piI6tHh0TBFs%2BzPMkD4srYq73ldLF4ksaLG%2BM%2FrAYpzmAvYgqhfQvSymMQntiXQZ6jEcfyeR1M6i5y9W%2B9gEvcHBmGk9teOC8ap80hwQCvdIA%2B0laPk74B1SCUlRJZtLyyZiF0uUlGRz2CTdEa7OHr7pXpgA7mcZ5gw8MOfwwY6pgENMVDKbgLzpop0zHaQfiCFts708Wxvczuniz3TvtyxOhQPPR42ALwl4fbTn3I9OaSNLbMn2HylK4t7ntSMyHoiAgwlSBcvCmRgKJYHZIdqyh1sYJXhGWdGfQGPKg1jkn9AiWN1UrRiihZYO2zSxpSjAHkQIf4Z5ZBUSA7CG2fdMe6sdTg%2F%2BpFqX8JFVcGYuZ7efx3FcD3mEDkUTmd2zNdwfP0V0I56&X-Amz-Signature=e6eb80527a1a8b0f2aaf1a49d42eb7b294e003e5f43dc2cc22076b6037c12310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQIJKFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAeMiL%2Fs7%2BAGqgUn7JSkGkqb3QyWV688HEerAEXq4aYBAiA0pX%2BhcTtEZlYc%2Fj4Puw9tIqIBXA4UhGRMVMQW2ePClCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpDPWVnD26OAJkNtPKtwD8i2bgSIj9GlRm818O4%2Bime4rL9Vp9d0IOi%2F1pPsV3kEfCfpEwQ8nS75zqE67NpaAHBvbINCFMGHP1h3zydoLbOCOU3RFo%2FnGwYsiSpf7V3dFio5vGDrMGi1tGtQs8fn1jqkINfmnDC0VKvlI3m%2FHYsOQcWuQjZDIWGmEob5%2FEtN4zIEW6TxmhVWuJkzf7%2Ff0gd2ei%2Bny2l%2F95RPP8k6fQA5L2BLM0DYHooNUu3jlhmRqt5FVVy%2FVcD3eQSyo2ru9rv6jLobE8rJ5slQAr3ExglqtDUQ7zi2mnWmMLUC9RqaZH9pIp1vw7FtFu8UrITvq8sMdONuf67LWpnxQiiGubD73NgyjXBzrmM2VXk5ACajS3oilhBopbFvyJCnvRu%2Bxth90zim8I5yhxNNSWo2pLUcCXM%2BDq%2FCfz%2B4xepXCpiidebWBfSf0G9Ki7HyhJcGL7YqAtwg6hJew0vQbks%2BgWgpG6piI6tHh0TBFs%2BzPMkD4srYq73ldLF4ksaLG%2BM%2FrAYpzmAvYgqhfQvSymMQntiXQZ6jEcfyeR1M6i5y9W%2B9gEvcHBmGk9teOC8ap80hwQCvdIA%2B0laPk74B1SCUlRJZtLyyZiF0uUlGRz2CTdEa7OHr7pXpgA7mcZ5gw8MOfwwY6pgENMVDKbgLzpop0zHaQfiCFts708Wxvczuniz3TvtyxOhQPPR42ALwl4fbTn3I9OaSNLbMn2HylK4t7ntSMyHoiAgwlSBcvCmRgKJYHZIdqyh1sYJXhGWdGfQGPKg1jkn9AiWN1UrRiihZYO2zSxpSjAHkQIf4Z5ZBUSA7CG2fdMe6sdTg%2F%2BpFqX8JFVcGYuZ7efx3FcD3mEDkUTmd2zNdwfP0V0I56&X-Amz-Signature=1be6289d56b9c77cf357139aff66ae855f5c9a407784c0fc875e10fd5731756b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQIJKFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAeMiL%2Fs7%2BAGqgUn7JSkGkqb3QyWV688HEerAEXq4aYBAiA0pX%2BhcTtEZlYc%2Fj4Puw9tIqIBXA4UhGRMVMQW2ePClCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpDPWVnD26OAJkNtPKtwD8i2bgSIj9GlRm818O4%2Bime4rL9Vp9d0IOi%2F1pPsV3kEfCfpEwQ8nS75zqE67NpaAHBvbINCFMGHP1h3zydoLbOCOU3RFo%2FnGwYsiSpf7V3dFio5vGDrMGi1tGtQs8fn1jqkINfmnDC0VKvlI3m%2FHYsOQcWuQjZDIWGmEob5%2FEtN4zIEW6TxmhVWuJkzf7%2Ff0gd2ei%2Bny2l%2F95RPP8k6fQA5L2BLM0DYHooNUu3jlhmRqt5FVVy%2FVcD3eQSyo2ru9rv6jLobE8rJ5slQAr3ExglqtDUQ7zi2mnWmMLUC9RqaZH9pIp1vw7FtFu8UrITvq8sMdONuf67LWpnxQiiGubD73NgyjXBzrmM2VXk5ACajS3oilhBopbFvyJCnvRu%2Bxth90zim8I5yhxNNSWo2pLUcCXM%2BDq%2FCfz%2B4xepXCpiidebWBfSf0G9Ki7HyhJcGL7YqAtwg6hJew0vQbks%2BgWgpG6piI6tHh0TBFs%2BzPMkD4srYq73ldLF4ksaLG%2BM%2FrAYpzmAvYgqhfQvSymMQntiXQZ6jEcfyeR1M6i5y9W%2B9gEvcHBmGk9teOC8ap80hwQCvdIA%2B0laPk74B1SCUlRJZtLyyZiF0uUlGRz2CTdEa7OHr7pXpgA7mcZ5gw8MOfwwY6pgENMVDKbgLzpop0zHaQfiCFts708Wxvczuniz3TvtyxOhQPPR42ALwl4fbTn3I9OaSNLbMn2HylK4t7ntSMyHoiAgwlSBcvCmRgKJYHZIdqyh1sYJXhGWdGfQGPKg1jkn9AiWN1UrRiihZYO2zSxpSjAHkQIf4Z5ZBUSA7CG2fdMe6sdTg%2F%2BpFqX8JFVcGYuZ7efx3FcD3mEDkUTmd2zNdwfP0V0I56&X-Amz-Signature=ca748463884dcd7ac2da2c7a562e481f82fc48f43a2a515fbfa27f89e555bf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQIJKFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAeMiL%2Fs7%2BAGqgUn7JSkGkqb3QyWV688HEerAEXq4aYBAiA0pX%2BhcTtEZlYc%2Fj4Puw9tIqIBXA4UhGRMVMQW2ePClCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpDPWVnD26OAJkNtPKtwD8i2bgSIj9GlRm818O4%2Bime4rL9Vp9d0IOi%2F1pPsV3kEfCfpEwQ8nS75zqE67NpaAHBvbINCFMGHP1h3zydoLbOCOU3RFo%2FnGwYsiSpf7V3dFio5vGDrMGi1tGtQs8fn1jqkINfmnDC0VKvlI3m%2FHYsOQcWuQjZDIWGmEob5%2FEtN4zIEW6TxmhVWuJkzf7%2Ff0gd2ei%2Bny2l%2F95RPP8k6fQA5L2BLM0DYHooNUu3jlhmRqt5FVVy%2FVcD3eQSyo2ru9rv6jLobE8rJ5slQAr3ExglqtDUQ7zi2mnWmMLUC9RqaZH9pIp1vw7FtFu8UrITvq8sMdONuf67LWpnxQiiGubD73NgyjXBzrmM2VXk5ACajS3oilhBopbFvyJCnvRu%2Bxth90zim8I5yhxNNSWo2pLUcCXM%2BDq%2FCfz%2B4xepXCpiidebWBfSf0G9Ki7HyhJcGL7YqAtwg6hJew0vQbks%2BgWgpG6piI6tHh0TBFs%2BzPMkD4srYq73ldLF4ksaLG%2BM%2FrAYpzmAvYgqhfQvSymMQntiXQZ6jEcfyeR1M6i5y9W%2B9gEvcHBmGk9teOC8ap80hwQCvdIA%2B0laPk74B1SCUlRJZtLyyZiF0uUlGRz2CTdEa7OHr7pXpgA7mcZ5gw8MOfwwY6pgENMVDKbgLzpop0zHaQfiCFts708Wxvczuniz3TvtyxOhQPPR42ALwl4fbTn3I9OaSNLbMn2HylK4t7ntSMyHoiAgwlSBcvCmRgKJYHZIdqyh1sYJXhGWdGfQGPKg1jkn9AiWN1UrRiihZYO2zSxpSjAHkQIf4Z5ZBUSA7CG2fdMe6sdTg%2F%2BpFqX8JFVcGYuZ7efx3FcD3mEDkUTmd2zNdwfP0V0I56&X-Amz-Signature=40e03ac5c7181399b240c0353f30d74a15c9195a652a7d57985a36e1009a24bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQIJKFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAeMiL%2Fs7%2BAGqgUn7JSkGkqb3QyWV688HEerAEXq4aYBAiA0pX%2BhcTtEZlYc%2Fj4Puw9tIqIBXA4UhGRMVMQW2ePClCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpDPWVnD26OAJkNtPKtwD8i2bgSIj9GlRm818O4%2Bime4rL9Vp9d0IOi%2F1pPsV3kEfCfpEwQ8nS75zqE67NpaAHBvbINCFMGHP1h3zydoLbOCOU3RFo%2FnGwYsiSpf7V3dFio5vGDrMGi1tGtQs8fn1jqkINfmnDC0VKvlI3m%2FHYsOQcWuQjZDIWGmEob5%2FEtN4zIEW6TxmhVWuJkzf7%2Ff0gd2ei%2Bny2l%2F95RPP8k6fQA5L2BLM0DYHooNUu3jlhmRqt5FVVy%2FVcD3eQSyo2ru9rv6jLobE8rJ5slQAr3ExglqtDUQ7zi2mnWmMLUC9RqaZH9pIp1vw7FtFu8UrITvq8sMdONuf67LWpnxQiiGubD73NgyjXBzrmM2VXk5ACajS3oilhBopbFvyJCnvRu%2Bxth90zim8I5yhxNNSWo2pLUcCXM%2BDq%2FCfz%2B4xepXCpiidebWBfSf0G9Ki7HyhJcGL7YqAtwg6hJew0vQbks%2BgWgpG6piI6tHh0TBFs%2BzPMkD4srYq73ldLF4ksaLG%2BM%2FrAYpzmAvYgqhfQvSymMQntiXQZ6jEcfyeR1M6i5y9W%2B9gEvcHBmGk9teOC8ap80hwQCvdIA%2B0laPk74B1SCUlRJZtLyyZiF0uUlGRz2CTdEa7OHr7pXpgA7mcZ5gw8MOfwwY6pgENMVDKbgLzpop0zHaQfiCFts708Wxvczuniz3TvtyxOhQPPR42ALwl4fbTn3I9OaSNLbMn2HylK4t7ntSMyHoiAgwlSBcvCmRgKJYHZIdqyh1sYJXhGWdGfQGPKg1jkn9AiWN1UrRiihZYO2zSxpSjAHkQIf4Z5ZBUSA7CG2fdMe6sdTg%2F%2BpFqX8JFVcGYuZ7efx3FcD3mEDkUTmd2zNdwfP0V0I56&X-Amz-Signature=989631eaf963a2f10d490236a931df735122475b4c5ad906bc00d7e80e700609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQIJKFK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAeMiL%2Fs7%2BAGqgUn7JSkGkqb3QyWV688HEerAEXq4aYBAiA0pX%2BhcTtEZlYc%2Fj4Puw9tIqIBXA4UhGRMVMQW2ePClCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpDPWVnD26OAJkNtPKtwD8i2bgSIj9GlRm818O4%2Bime4rL9Vp9d0IOi%2F1pPsV3kEfCfpEwQ8nS75zqE67NpaAHBvbINCFMGHP1h3zydoLbOCOU3RFo%2FnGwYsiSpf7V3dFio5vGDrMGi1tGtQs8fn1jqkINfmnDC0VKvlI3m%2FHYsOQcWuQjZDIWGmEob5%2FEtN4zIEW6TxmhVWuJkzf7%2Ff0gd2ei%2Bny2l%2F95RPP8k6fQA5L2BLM0DYHooNUu3jlhmRqt5FVVy%2FVcD3eQSyo2ru9rv6jLobE8rJ5slQAr3ExglqtDUQ7zi2mnWmMLUC9RqaZH9pIp1vw7FtFu8UrITvq8sMdONuf67LWpnxQiiGubD73NgyjXBzrmM2VXk5ACajS3oilhBopbFvyJCnvRu%2Bxth90zim8I5yhxNNSWo2pLUcCXM%2BDq%2FCfz%2B4xepXCpiidebWBfSf0G9Ki7HyhJcGL7YqAtwg6hJew0vQbks%2BgWgpG6piI6tHh0TBFs%2BzPMkD4srYq73ldLF4ksaLG%2BM%2FrAYpzmAvYgqhfQvSymMQntiXQZ6jEcfyeR1M6i5y9W%2B9gEvcHBmGk9teOC8ap80hwQCvdIA%2B0laPk74B1SCUlRJZtLyyZiF0uUlGRz2CTdEa7OHr7pXpgA7mcZ5gw8MOfwwY6pgENMVDKbgLzpop0zHaQfiCFts708Wxvczuniz3TvtyxOhQPPR42ALwl4fbTn3I9OaSNLbMn2HylK4t7ntSMyHoiAgwlSBcvCmRgKJYHZIdqyh1sYJXhGWdGfQGPKg1jkn9AiWN1UrRiihZYO2zSxpSjAHkQIf4Z5ZBUSA7CG2fdMe6sdTg%2F%2BpFqX8JFVcGYuZ7efx3FcD3mEDkUTmd2zNdwfP0V0I56&X-Amz-Signature=66206d4dc11bcf995b9db92141e4e105bdf40738e75052c8df938779e1012c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
