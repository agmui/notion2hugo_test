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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHUO4CD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDilg0M39hbkyOebKohjZwocFVfCLnfiBgF%2B%2FykPvk4ZAiEArdyyCK%2F%2BkuE0ZUPo5xtg90xI25blOG78cAV1uTWb82sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4lWD5SzQPELDEk9SrcA0HrlFU4YWU1K0ylfbs2KeOPBkqyB8cjgXor2XkcrEUAuVH76mxUn5w5RbkwjljERbbYYVha9DGI6%2FUAkHZNCET4xV3MXo4tRSHUrp4ZHThze98ADuV4D0zCjLfbwST9dLKl9e7lqiGywSvrZ5%2BqzVgx%2FCTyJ2CnhWpJzteaAEprYFCztuh5HhB%2BZWStx3JkAif%2FtXhCivMoQkToWOkzJya9iTcKoXJkogNBCxgPGmgxHfkWqbIYuRR5hdgLkK34FEjNrk0bCmRvVeAe4klmanxsUdTVSQIbpt896zAquBhHN0WlpKCN5%2FDVp48GuWd%2BbGpbwKL01KWZfllsDEvL9FTIrLIlqk13pzGXo8RLJS75gPpXt3E1sr910XP%2BwU5MwwwjqERA14JeFSilO6TCF0Dvc12X3I1bNHrxf%2BnBrW%2FndAC593n3VUdUbY2BL36avKHzKRJwOeyUChwquoS7OtGT30VbztDrRW1X6W%2F8FvFDewcAGq6qxf2Jk0%2BRq%2BxDjmFriv8AQ1ZlowcmHJ62lyzZ5hLnBNWJ6GxDVFLEJqJLFqwDo4kLeQ2FvyyZpivHcZFags3vgg6D1P7cL%2FfIvuP5x3cMCHCOZxsC%2BEjo%2BZiFPOxC25Z0DNyvwn1hMLyglL4GOqUBXECReid1gvTkhkPAJgaOVFHEtPXdYQVMC1Nnfs5gsXSeEUl1oOY71WWmPO3nJyK5W%2Bkcs8fXmit7%2FlKdBpnRNwAX0g34TPnDkdx11u1ePwFlyzBu4s4CQPaXuW2ZjU%2Bo%2FwKjHYggz0AqXT35t6%2B2de5W%2F3LIsC5owHtE7RF%2Fyszx%2FFmed2kQjRsXogSMNmGsf5%2BNDlsnCfTfEfiHHqpKvVJNDjPA&X-Amz-Signature=10ede1ef54952c2fd9791ade844570cfa96b4b4ffdfb4003d87171357bee9f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHUO4CD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDilg0M39hbkyOebKohjZwocFVfCLnfiBgF%2B%2FykPvk4ZAiEArdyyCK%2F%2BkuE0ZUPo5xtg90xI25blOG78cAV1uTWb82sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4lWD5SzQPELDEk9SrcA0HrlFU4YWU1K0ylfbs2KeOPBkqyB8cjgXor2XkcrEUAuVH76mxUn5w5RbkwjljERbbYYVha9DGI6%2FUAkHZNCET4xV3MXo4tRSHUrp4ZHThze98ADuV4D0zCjLfbwST9dLKl9e7lqiGywSvrZ5%2BqzVgx%2FCTyJ2CnhWpJzteaAEprYFCztuh5HhB%2BZWStx3JkAif%2FtXhCivMoQkToWOkzJya9iTcKoXJkogNBCxgPGmgxHfkWqbIYuRR5hdgLkK34FEjNrk0bCmRvVeAe4klmanxsUdTVSQIbpt896zAquBhHN0WlpKCN5%2FDVp48GuWd%2BbGpbwKL01KWZfllsDEvL9FTIrLIlqk13pzGXo8RLJS75gPpXt3E1sr910XP%2BwU5MwwwjqERA14JeFSilO6TCF0Dvc12X3I1bNHrxf%2BnBrW%2FndAC593n3VUdUbY2BL36avKHzKRJwOeyUChwquoS7OtGT30VbztDrRW1X6W%2F8FvFDewcAGq6qxf2Jk0%2BRq%2BxDjmFriv8AQ1ZlowcmHJ62lyzZ5hLnBNWJ6GxDVFLEJqJLFqwDo4kLeQ2FvyyZpivHcZFags3vgg6D1P7cL%2FfIvuP5x3cMCHCOZxsC%2BEjo%2BZiFPOxC25Z0DNyvwn1hMLyglL4GOqUBXECReid1gvTkhkPAJgaOVFHEtPXdYQVMC1Nnfs5gsXSeEUl1oOY71WWmPO3nJyK5W%2Bkcs8fXmit7%2FlKdBpnRNwAX0g34TPnDkdx11u1ePwFlyzBu4s4CQPaXuW2ZjU%2Bo%2FwKjHYggz0AqXT35t6%2B2de5W%2F3LIsC5owHtE7RF%2Fyszx%2FFmed2kQjRsXogSMNmGsf5%2BNDlsnCfTfEfiHHqpKvVJNDjPA&X-Amz-Signature=cb7b6b0767c77875c803fc51acc4382b95962b3b75553444cc1b3221371f9fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHUO4CD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDilg0M39hbkyOebKohjZwocFVfCLnfiBgF%2B%2FykPvk4ZAiEArdyyCK%2F%2BkuE0ZUPo5xtg90xI25blOG78cAV1uTWb82sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4lWD5SzQPELDEk9SrcA0HrlFU4YWU1K0ylfbs2KeOPBkqyB8cjgXor2XkcrEUAuVH76mxUn5w5RbkwjljERbbYYVha9DGI6%2FUAkHZNCET4xV3MXo4tRSHUrp4ZHThze98ADuV4D0zCjLfbwST9dLKl9e7lqiGywSvrZ5%2BqzVgx%2FCTyJ2CnhWpJzteaAEprYFCztuh5HhB%2BZWStx3JkAif%2FtXhCivMoQkToWOkzJya9iTcKoXJkogNBCxgPGmgxHfkWqbIYuRR5hdgLkK34FEjNrk0bCmRvVeAe4klmanxsUdTVSQIbpt896zAquBhHN0WlpKCN5%2FDVp48GuWd%2BbGpbwKL01KWZfllsDEvL9FTIrLIlqk13pzGXo8RLJS75gPpXt3E1sr910XP%2BwU5MwwwjqERA14JeFSilO6TCF0Dvc12X3I1bNHrxf%2BnBrW%2FndAC593n3VUdUbY2BL36avKHzKRJwOeyUChwquoS7OtGT30VbztDrRW1X6W%2F8FvFDewcAGq6qxf2Jk0%2BRq%2BxDjmFriv8AQ1ZlowcmHJ62lyzZ5hLnBNWJ6GxDVFLEJqJLFqwDo4kLeQ2FvyyZpivHcZFags3vgg6D1P7cL%2FfIvuP5x3cMCHCOZxsC%2BEjo%2BZiFPOxC25Z0DNyvwn1hMLyglL4GOqUBXECReid1gvTkhkPAJgaOVFHEtPXdYQVMC1Nnfs5gsXSeEUl1oOY71WWmPO3nJyK5W%2Bkcs8fXmit7%2FlKdBpnRNwAX0g34TPnDkdx11u1ePwFlyzBu4s4CQPaXuW2ZjU%2Bo%2FwKjHYggz0AqXT35t6%2B2de5W%2F3LIsC5owHtE7RF%2Fyszx%2FFmed2kQjRsXogSMNmGsf5%2BNDlsnCfTfEfiHHqpKvVJNDjPA&X-Amz-Signature=e43d2656a8c8fa2746731caa771910489e590d12a18731e14715f90d783e9d50&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHUO4CD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDilg0M39hbkyOebKohjZwocFVfCLnfiBgF%2B%2FykPvk4ZAiEArdyyCK%2F%2BkuE0ZUPo5xtg90xI25blOG78cAV1uTWb82sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4lWD5SzQPELDEk9SrcA0HrlFU4YWU1K0ylfbs2KeOPBkqyB8cjgXor2XkcrEUAuVH76mxUn5w5RbkwjljERbbYYVha9DGI6%2FUAkHZNCET4xV3MXo4tRSHUrp4ZHThze98ADuV4D0zCjLfbwST9dLKl9e7lqiGywSvrZ5%2BqzVgx%2FCTyJ2CnhWpJzteaAEprYFCztuh5HhB%2BZWStx3JkAif%2FtXhCivMoQkToWOkzJya9iTcKoXJkogNBCxgPGmgxHfkWqbIYuRR5hdgLkK34FEjNrk0bCmRvVeAe4klmanxsUdTVSQIbpt896zAquBhHN0WlpKCN5%2FDVp48GuWd%2BbGpbwKL01KWZfllsDEvL9FTIrLIlqk13pzGXo8RLJS75gPpXt3E1sr910XP%2BwU5MwwwjqERA14JeFSilO6TCF0Dvc12X3I1bNHrxf%2BnBrW%2FndAC593n3VUdUbY2BL36avKHzKRJwOeyUChwquoS7OtGT30VbztDrRW1X6W%2F8FvFDewcAGq6qxf2Jk0%2BRq%2BxDjmFriv8AQ1ZlowcmHJ62lyzZ5hLnBNWJ6GxDVFLEJqJLFqwDo4kLeQ2FvyyZpivHcZFags3vgg6D1P7cL%2FfIvuP5x3cMCHCOZxsC%2BEjo%2BZiFPOxC25Z0DNyvwn1hMLyglL4GOqUBXECReid1gvTkhkPAJgaOVFHEtPXdYQVMC1Nnfs5gsXSeEUl1oOY71WWmPO3nJyK5W%2Bkcs8fXmit7%2FlKdBpnRNwAX0g34TPnDkdx11u1ePwFlyzBu4s4CQPaXuW2ZjU%2Bo%2FwKjHYggz0AqXT35t6%2B2de5W%2F3LIsC5owHtE7RF%2Fyszx%2FFmed2kQjRsXogSMNmGsf5%2BNDlsnCfTfEfiHHqpKvVJNDjPA&X-Amz-Signature=b5897b479c5b126e61872e358c964305f8c9641e6acd6370a4b3ff7dae3198a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHUO4CD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDilg0M39hbkyOebKohjZwocFVfCLnfiBgF%2B%2FykPvk4ZAiEArdyyCK%2F%2BkuE0ZUPo5xtg90xI25blOG78cAV1uTWb82sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4lWD5SzQPELDEk9SrcA0HrlFU4YWU1K0ylfbs2KeOPBkqyB8cjgXor2XkcrEUAuVH76mxUn5w5RbkwjljERbbYYVha9DGI6%2FUAkHZNCET4xV3MXo4tRSHUrp4ZHThze98ADuV4D0zCjLfbwST9dLKl9e7lqiGywSvrZ5%2BqzVgx%2FCTyJ2CnhWpJzteaAEprYFCztuh5HhB%2BZWStx3JkAif%2FtXhCivMoQkToWOkzJya9iTcKoXJkogNBCxgPGmgxHfkWqbIYuRR5hdgLkK34FEjNrk0bCmRvVeAe4klmanxsUdTVSQIbpt896zAquBhHN0WlpKCN5%2FDVp48GuWd%2BbGpbwKL01KWZfllsDEvL9FTIrLIlqk13pzGXo8RLJS75gPpXt3E1sr910XP%2BwU5MwwwjqERA14JeFSilO6TCF0Dvc12X3I1bNHrxf%2BnBrW%2FndAC593n3VUdUbY2BL36avKHzKRJwOeyUChwquoS7OtGT30VbztDrRW1X6W%2F8FvFDewcAGq6qxf2Jk0%2BRq%2BxDjmFriv8AQ1ZlowcmHJ62lyzZ5hLnBNWJ6GxDVFLEJqJLFqwDo4kLeQ2FvyyZpivHcZFags3vgg6D1P7cL%2FfIvuP5x3cMCHCOZxsC%2BEjo%2BZiFPOxC25Z0DNyvwn1hMLyglL4GOqUBXECReid1gvTkhkPAJgaOVFHEtPXdYQVMC1Nnfs5gsXSeEUl1oOY71WWmPO3nJyK5W%2Bkcs8fXmit7%2FlKdBpnRNwAX0g34TPnDkdx11u1ePwFlyzBu4s4CQPaXuW2ZjU%2Bo%2FwKjHYggz0AqXT35t6%2B2de5W%2F3LIsC5owHtE7RF%2Fyszx%2FFmed2kQjRsXogSMNmGsf5%2BNDlsnCfTfEfiHHqpKvVJNDjPA&X-Amz-Signature=581226df69aaf27c442413a7718ca91b78d3eb97e8e2dc5a6879e7f8319688ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHUO4CD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDilg0M39hbkyOebKohjZwocFVfCLnfiBgF%2B%2FykPvk4ZAiEArdyyCK%2F%2BkuE0ZUPo5xtg90xI25blOG78cAV1uTWb82sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4lWD5SzQPELDEk9SrcA0HrlFU4YWU1K0ylfbs2KeOPBkqyB8cjgXor2XkcrEUAuVH76mxUn5w5RbkwjljERbbYYVha9DGI6%2FUAkHZNCET4xV3MXo4tRSHUrp4ZHThze98ADuV4D0zCjLfbwST9dLKl9e7lqiGywSvrZ5%2BqzVgx%2FCTyJ2CnhWpJzteaAEprYFCztuh5HhB%2BZWStx3JkAif%2FtXhCivMoQkToWOkzJya9iTcKoXJkogNBCxgPGmgxHfkWqbIYuRR5hdgLkK34FEjNrk0bCmRvVeAe4klmanxsUdTVSQIbpt896zAquBhHN0WlpKCN5%2FDVp48GuWd%2BbGpbwKL01KWZfllsDEvL9FTIrLIlqk13pzGXo8RLJS75gPpXt3E1sr910XP%2BwU5MwwwjqERA14JeFSilO6TCF0Dvc12X3I1bNHrxf%2BnBrW%2FndAC593n3VUdUbY2BL36avKHzKRJwOeyUChwquoS7OtGT30VbztDrRW1X6W%2F8FvFDewcAGq6qxf2Jk0%2BRq%2BxDjmFriv8AQ1ZlowcmHJ62lyzZ5hLnBNWJ6GxDVFLEJqJLFqwDo4kLeQ2FvyyZpivHcZFags3vgg6D1P7cL%2FfIvuP5x3cMCHCOZxsC%2BEjo%2BZiFPOxC25Z0DNyvwn1hMLyglL4GOqUBXECReid1gvTkhkPAJgaOVFHEtPXdYQVMC1Nnfs5gsXSeEUl1oOY71WWmPO3nJyK5W%2Bkcs8fXmit7%2FlKdBpnRNwAX0g34TPnDkdx11u1ePwFlyzBu4s4CQPaXuW2ZjU%2Bo%2FwKjHYggz0AqXT35t6%2B2de5W%2F3LIsC5owHtE7RF%2Fyszx%2FFmed2kQjRsXogSMNmGsf5%2BNDlsnCfTfEfiHHqpKvVJNDjPA&X-Amz-Signature=95a89b0dcb5782b46c9856f1f2feeae54935f083a08dd9407aab98df5581863e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHUO4CD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDilg0M39hbkyOebKohjZwocFVfCLnfiBgF%2B%2FykPvk4ZAiEArdyyCK%2F%2BkuE0ZUPo5xtg90xI25blOG78cAV1uTWb82sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4lWD5SzQPELDEk9SrcA0HrlFU4YWU1K0ylfbs2KeOPBkqyB8cjgXor2XkcrEUAuVH76mxUn5w5RbkwjljERbbYYVha9DGI6%2FUAkHZNCET4xV3MXo4tRSHUrp4ZHThze98ADuV4D0zCjLfbwST9dLKl9e7lqiGywSvrZ5%2BqzVgx%2FCTyJ2CnhWpJzteaAEprYFCztuh5HhB%2BZWStx3JkAif%2FtXhCivMoQkToWOkzJya9iTcKoXJkogNBCxgPGmgxHfkWqbIYuRR5hdgLkK34FEjNrk0bCmRvVeAe4klmanxsUdTVSQIbpt896zAquBhHN0WlpKCN5%2FDVp48GuWd%2BbGpbwKL01KWZfllsDEvL9FTIrLIlqk13pzGXo8RLJS75gPpXt3E1sr910XP%2BwU5MwwwjqERA14JeFSilO6TCF0Dvc12X3I1bNHrxf%2BnBrW%2FndAC593n3VUdUbY2BL36avKHzKRJwOeyUChwquoS7OtGT30VbztDrRW1X6W%2F8FvFDewcAGq6qxf2Jk0%2BRq%2BxDjmFriv8AQ1ZlowcmHJ62lyzZ5hLnBNWJ6GxDVFLEJqJLFqwDo4kLeQ2FvyyZpivHcZFags3vgg6D1P7cL%2FfIvuP5x3cMCHCOZxsC%2BEjo%2BZiFPOxC25Z0DNyvwn1hMLyglL4GOqUBXECReid1gvTkhkPAJgaOVFHEtPXdYQVMC1Nnfs5gsXSeEUl1oOY71WWmPO3nJyK5W%2Bkcs8fXmit7%2FlKdBpnRNwAX0g34TPnDkdx11u1ePwFlyzBu4s4CQPaXuW2ZjU%2Bo%2FwKjHYggz0AqXT35t6%2B2de5W%2F3LIsC5owHtE7RF%2Fyszx%2FFmed2kQjRsXogSMNmGsf5%2BNDlsnCfTfEfiHHqpKvVJNDjPA&X-Amz-Signature=dc14982bc14bdaa24224d53f0764b45e8869df2268205fe4b6dba24f3fd00b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
