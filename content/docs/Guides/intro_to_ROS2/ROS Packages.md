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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=c98f0196abb498235751043fab1e981aa15e71a7ed1479062ba68e9ff5a63a82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=bb1e68f5b664d3f03bd561e908820d83914684d9be2eb1d745278662f2027b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=463658c9c8163efa68f9ab3d025f5821d9bbf7d2dadaeea2eab14f2fadfb7997&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=7be35cca6452415583d8e83b22e67d6ac305fa66cf577f8261d0f989eca2c046&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=ff58028a90b7a9fb76b0d9d444fd05df18cfe5085465add2a4c9ee260ec30099&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=8683428a112b84cdc9365a6af7963de8f36e6bd4d7eccdb1c460d75d1dab869d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTAA2H2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvQz4y8Xz5OdJ50ahJMk%2FMLm5KhHJ7RfCUA5f1%2Fc2HhAiB3gw%2Fh2rcQ%2Bz9Wj1BMUIxKGln1NHshD%2FjhwOXN9SpBpyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWEqmHVm6BIlB%2FgzKtwDqZEs%2FWiEXA46rPDxMMatwaKbyx2bmIcRw%2F1Byn9ay2st4V0J%2FJ0oZBaaPEvQOlCfqvMXWBoSKUA8%2F1dIzZkx0YzFHqRdTf0zCxRrNvcPYOQdTnaSHIf3%2FVBXyoReogqIU8yzmYHY43gO3bODFHsKVMqcVDei1yzPssl5kHuPoZhdKbk95q0UJqbxgdkxmLsCesuJnsm299cN6xWcA6vQFjtE3BYZSvGDSpp2LOKRgWwbDIYeCoOnEqaPC1dm1hnQgBxv4U21krwsdeL78ZsNWULrw0%2FAMjd3LknjpiRnUPqVsuqecc36yPKVPpdFlr3WZ4NEdGIw0IvpE%2BtdW5Kl7YsjzJk9alv9YNbNXoUyzgr%2F7vI4xU48zkAj2mco4AQVReGXthcaBWqhpohUr4frvCpOn0m%2FknDduUTOiBPrM%2Bq0F6GWPzyLg0pG%2BHz9W92ZwTe5TuwuVdXNaoeuSGV6pPPzxStoyYrACCs1YYKBP%2B4mvruf2FqbU9PcCo8AWynfWB56DZ4SmizfeVvV%2FDNRrcNKXtSAkX%2BOE6vyQLmFiskC7hfhZY8xllcvfd79vLhX%2FWcqq5gIk1Ph5kl2OQMG7hh5%2Bym80LjMKJBkLtdSS2YrIQy36%2F%2BbLeXhCe8wzoejvQY6pgEcxbvvJBLZVirJImpWAkKmQHUUtJ6Oj4%2F2tEGfqHopajoSn1q91Axp9egumDVTK%2BcuFjHNqhbtrhFbmIkBvybnWlBItdBtAMlNhUHiErltoxfryEgthLaP60ahWBo11OhfAY6rpn%2B%2F%2ByUk0XsGKBETmIGqCezchze6iLQmBP6oC%2FwtVbkfvjYl4%2FuT7XikgD2DExZFMYX4x3iOg%2FGrWiqzOyp9D2zd&X-Amz-Signature=53d0b193e0b5554d377bec07a308210023c97d296549d1603bccae3f66cbbfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
