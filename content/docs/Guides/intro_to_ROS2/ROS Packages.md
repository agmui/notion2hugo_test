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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBT4A35%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnXJamfHIncFjvfUip0De31v7Z5OcWPPBvTv8KZm863QIgC1fRRmTABcAvtTivDUd8MQwvnZMTBzEsaWpXLbPtazgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZOx7sF450%2BJLlMsCrcA65a1DLCquVwzWW%2BWYgB5xBmzoCqiKCAO71R34WcBcVgA8TPZP%2FzEESb7TfvYTfKnzr057yFryE8i0FONny9E%2BU3SEZfFUMaONTAWxSA2RCnrneAOI2%2BZv6fjeRAgoLwvCZXZdvsidNMldi4hy9P5cwue03zO5pDCAVSRIV9RoppSJ5ZOzhQUxzqySNgoAvoTJRgJErwsiqVQY8PIAZfFQE3WBX5mhhQ7T%2Fzo4vq8LNW2SuJDoLaTOwWXxaohi%2BNLi0bJ%2Ffyw1IfkOpygujBr5zGc8zTp4RxjgW%2FraB2ndGCFWqbCGG6Yi7geo7257OugdEFusQW9rVUpEmaOvHGgJEmjpayYx63lGvMWFdDJvhdejcg651Z8d7P6kQclCOngz7MdoVhK%2BzYd914%2FCkhVvDc4eJCFBD41ykfEZfP5fXJw1eHyhtceELs5gjA9ECyDiDZSfD6ChNhyQNE1gCjGrEiAoGmLa7RkpfPPeXdZNdI28K0%2B2MUq43qvhi2lHjF%2FQj9GUdO4pos762626ohvmjTVXi3W73RPtvzx5GY6uzSfk9D4r%2FdtQ9r6ElwFiLThXdUt6mr7f52RjwDh3WOuo3AUTgkHkbqMUo6L1RPQKD%2Fw4MI7slKj%2FXPGj0aMKiT2r4GOqUBBS5ZVMcMrlUj3YUp%2F52Gd27NKUehmJK7BPYoN8AIovPu%2FKJII31TBQg3AwxeH6ldnEAohcVpM4%2BzQP3DdfNC3M2JFYzF52FMa47677XysBixReiomLI3HnuzzTKNl4jk8uEiw9Tmpxz3a88FyzR1JfDJnRhEx3DphKegSw%2FQrPtbES%2BUOqR3sZqxmmcMz2voKIi3lDSKuh6BEp0HBuX540pQKqjc&X-Amz-Signature=5012a3bed0169d6ca433242428775f7039403f0b8e0d07c65fe334ff3133d23b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBT4A35%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnXJamfHIncFjvfUip0De31v7Z5OcWPPBvTv8KZm863QIgC1fRRmTABcAvtTivDUd8MQwvnZMTBzEsaWpXLbPtazgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZOx7sF450%2BJLlMsCrcA65a1DLCquVwzWW%2BWYgB5xBmzoCqiKCAO71R34WcBcVgA8TPZP%2FzEESb7TfvYTfKnzr057yFryE8i0FONny9E%2BU3SEZfFUMaONTAWxSA2RCnrneAOI2%2BZv6fjeRAgoLwvCZXZdvsidNMldi4hy9P5cwue03zO5pDCAVSRIV9RoppSJ5ZOzhQUxzqySNgoAvoTJRgJErwsiqVQY8PIAZfFQE3WBX5mhhQ7T%2Fzo4vq8LNW2SuJDoLaTOwWXxaohi%2BNLi0bJ%2Ffyw1IfkOpygujBr5zGc8zTp4RxjgW%2FraB2ndGCFWqbCGG6Yi7geo7257OugdEFusQW9rVUpEmaOvHGgJEmjpayYx63lGvMWFdDJvhdejcg651Z8d7P6kQclCOngz7MdoVhK%2BzYd914%2FCkhVvDc4eJCFBD41ykfEZfP5fXJw1eHyhtceELs5gjA9ECyDiDZSfD6ChNhyQNE1gCjGrEiAoGmLa7RkpfPPeXdZNdI28K0%2B2MUq43qvhi2lHjF%2FQj9GUdO4pos762626ohvmjTVXi3W73RPtvzx5GY6uzSfk9D4r%2FdtQ9r6ElwFiLThXdUt6mr7f52RjwDh3WOuo3AUTgkHkbqMUo6L1RPQKD%2Fw4MI7slKj%2FXPGj0aMKiT2r4GOqUBBS5ZVMcMrlUj3YUp%2F52Gd27NKUehmJK7BPYoN8AIovPu%2FKJII31TBQg3AwxeH6ldnEAohcVpM4%2BzQP3DdfNC3M2JFYzF52FMa47677XysBixReiomLI3HnuzzTKNl4jk8uEiw9Tmpxz3a88FyzR1JfDJnRhEx3DphKegSw%2FQrPtbES%2BUOqR3sZqxmmcMz2voKIi3lDSKuh6BEp0HBuX540pQKqjc&X-Amz-Signature=7b82ef06f8663d84647cbe83336864585de8d6aabea61e2b55d577e5ff9b3908&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBT4A35%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnXJamfHIncFjvfUip0De31v7Z5OcWPPBvTv8KZm863QIgC1fRRmTABcAvtTivDUd8MQwvnZMTBzEsaWpXLbPtazgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZOx7sF450%2BJLlMsCrcA65a1DLCquVwzWW%2BWYgB5xBmzoCqiKCAO71R34WcBcVgA8TPZP%2FzEESb7TfvYTfKnzr057yFryE8i0FONny9E%2BU3SEZfFUMaONTAWxSA2RCnrneAOI2%2BZv6fjeRAgoLwvCZXZdvsidNMldi4hy9P5cwue03zO5pDCAVSRIV9RoppSJ5ZOzhQUxzqySNgoAvoTJRgJErwsiqVQY8PIAZfFQE3WBX5mhhQ7T%2Fzo4vq8LNW2SuJDoLaTOwWXxaohi%2BNLi0bJ%2Ffyw1IfkOpygujBr5zGc8zTp4RxjgW%2FraB2ndGCFWqbCGG6Yi7geo7257OugdEFusQW9rVUpEmaOvHGgJEmjpayYx63lGvMWFdDJvhdejcg651Z8d7P6kQclCOngz7MdoVhK%2BzYd914%2FCkhVvDc4eJCFBD41ykfEZfP5fXJw1eHyhtceELs5gjA9ECyDiDZSfD6ChNhyQNE1gCjGrEiAoGmLa7RkpfPPeXdZNdI28K0%2B2MUq43qvhi2lHjF%2FQj9GUdO4pos762626ohvmjTVXi3W73RPtvzx5GY6uzSfk9D4r%2FdtQ9r6ElwFiLThXdUt6mr7f52RjwDh3WOuo3AUTgkHkbqMUo6L1RPQKD%2Fw4MI7slKj%2FXPGj0aMKiT2r4GOqUBBS5ZVMcMrlUj3YUp%2F52Gd27NKUehmJK7BPYoN8AIovPu%2FKJII31TBQg3AwxeH6ldnEAohcVpM4%2BzQP3DdfNC3M2JFYzF52FMa47677XysBixReiomLI3HnuzzTKNl4jk8uEiw9Tmpxz3a88FyzR1JfDJnRhEx3DphKegSw%2FQrPtbES%2BUOqR3sZqxmmcMz2voKIi3lDSKuh6BEp0HBuX540pQKqjc&X-Amz-Signature=3f5e96428ffee3d2ca1ecfe522905a87a22ba0165daa9fb07fe852d89b68966a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBT4A35%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnXJamfHIncFjvfUip0De31v7Z5OcWPPBvTv8KZm863QIgC1fRRmTABcAvtTivDUd8MQwvnZMTBzEsaWpXLbPtazgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZOx7sF450%2BJLlMsCrcA65a1DLCquVwzWW%2BWYgB5xBmzoCqiKCAO71R34WcBcVgA8TPZP%2FzEESb7TfvYTfKnzr057yFryE8i0FONny9E%2BU3SEZfFUMaONTAWxSA2RCnrneAOI2%2BZv6fjeRAgoLwvCZXZdvsidNMldi4hy9P5cwue03zO5pDCAVSRIV9RoppSJ5ZOzhQUxzqySNgoAvoTJRgJErwsiqVQY8PIAZfFQE3WBX5mhhQ7T%2Fzo4vq8LNW2SuJDoLaTOwWXxaohi%2BNLi0bJ%2Ffyw1IfkOpygujBr5zGc8zTp4RxjgW%2FraB2ndGCFWqbCGG6Yi7geo7257OugdEFusQW9rVUpEmaOvHGgJEmjpayYx63lGvMWFdDJvhdejcg651Z8d7P6kQclCOngz7MdoVhK%2BzYd914%2FCkhVvDc4eJCFBD41ykfEZfP5fXJw1eHyhtceELs5gjA9ECyDiDZSfD6ChNhyQNE1gCjGrEiAoGmLa7RkpfPPeXdZNdI28K0%2B2MUq43qvhi2lHjF%2FQj9GUdO4pos762626ohvmjTVXi3W73RPtvzx5GY6uzSfk9D4r%2FdtQ9r6ElwFiLThXdUt6mr7f52RjwDh3WOuo3AUTgkHkbqMUo6L1RPQKD%2Fw4MI7slKj%2FXPGj0aMKiT2r4GOqUBBS5ZVMcMrlUj3YUp%2F52Gd27NKUehmJK7BPYoN8AIovPu%2FKJII31TBQg3AwxeH6ldnEAohcVpM4%2BzQP3DdfNC3M2JFYzF52FMa47677XysBixReiomLI3HnuzzTKNl4jk8uEiw9Tmpxz3a88FyzR1JfDJnRhEx3DphKegSw%2FQrPtbES%2BUOqR3sZqxmmcMz2voKIi3lDSKuh6BEp0HBuX540pQKqjc&X-Amz-Signature=17219aeac3ddb2652fc1a48f0e64ddb468b7dc2c794326e7d3659ccf37e753ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBT4A35%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnXJamfHIncFjvfUip0De31v7Z5OcWPPBvTv8KZm863QIgC1fRRmTABcAvtTivDUd8MQwvnZMTBzEsaWpXLbPtazgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZOx7sF450%2BJLlMsCrcA65a1DLCquVwzWW%2BWYgB5xBmzoCqiKCAO71R34WcBcVgA8TPZP%2FzEESb7TfvYTfKnzr057yFryE8i0FONny9E%2BU3SEZfFUMaONTAWxSA2RCnrneAOI2%2BZv6fjeRAgoLwvCZXZdvsidNMldi4hy9P5cwue03zO5pDCAVSRIV9RoppSJ5ZOzhQUxzqySNgoAvoTJRgJErwsiqVQY8PIAZfFQE3WBX5mhhQ7T%2Fzo4vq8LNW2SuJDoLaTOwWXxaohi%2BNLi0bJ%2Ffyw1IfkOpygujBr5zGc8zTp4RxjgW%2FraB2ndGCFWqbCGG6Yi7geo7257OugdEFusQW9rVUpEmaOvHGgJEmjpayYx63lGvMWFdDJvhdejcg651Z8d7P6kQclCOngz7MdoVhK%2BzYd914%2FCkhVvDc4eJCFBD41ykfEZfP5fXJw1eHyhtceELs5gjA9ECyDiDZSfD6ChNhyQNE1gCjGrEiAoGmLa7RkpfPPeXdZNdI28K0%2B2MUq43qvhi2lHjF%2FQj9GUdO4pos762626ohvmjTVXi3W73RPtvzx5GY6uzSfk9D4r%2FdtQ9r6ElwFiLThXdUt6mr7f52RjwDh3WOuo3AUTgkHkbqMUo6L1RPQKD%2Fw4MI7slKj%2FXPGj0aMKiT2r4GOqUBBS5ZVMcMrlUj3YUp%2F52Gd27NKUehmJK7BPYoN8AIovPu%2FKJII31TBQg3AwxeH6ldnEAohcVpM4%2BzQP3DdfNC3M2JFYzF52FMa47677XysBixReiomLI3HnuzzTKNl4jk8uEiw9Tmpxz3a88FyzR1JfDJnRhEx3DphKegSw%2FQrPtbES%2BUOqR3sZqxmmcMz2voKIi3lDSKuh6BEp0HBuX540pQKqjc&X-Amz-Signature=2df4359f0c0278be41c4f01a7d981542932cf8f6e9de4a43e21c26bbe47b6922&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBT4A35%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnXJamfHIncFjvfUip0De31v7Z5OcWPPBvTv8KZm863QIgC1fRRmTABcAvtTivDUd8MQwvnZMTBzEsaWpXLbPtazgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZOx7sF450%2BJLlMsCrcA65a1DLCquVwzWW%2BWYgB5xBmzoCqiKCAO71R34WcBcVgA8TPZP%2FzEESb7TfvYTfKnzr057yFryE8i0FONny9E%2BU3SEZfFUMaONTAWxSA2RCnrneAOI2%2BZv6fjeRAgoLwvCZXZdvsidNMldi4hy9P5cwue03zO5pDCAVSRIV9RoppSJ5ZOzhQUxzqySNgoAvoTJRgJErwsiqVQY8PIAZfFQE3WBX5mhhQ7T%2Fzo4vq8LNW2SuJDoLaTOwWXxaohi%2BNLi0bJ%2Ffyw1IfkOpygujBr5zGc8zTp4RxjgW%2FraB2ndGCFWqbCGG6Yi7geo7257OugdEFusQW9rVUpEmaOvHGgJEmjpayYx63lGvMWFdDJvhdejcg651Z8d7P6kQclCOngz7MdoVhK%2BzYd914%2FCkhVvDc4eJCFBD41ykfEZfP5fXJw1eHyhtceELs5gjA9ECyDiDZSfD6ChNhyQNE1gCjGrEiAoGmLa7RkpfPPeXdZNdI28K0%2B2MUq43qvhi2lHjF%2FQj9GUdO4pos762626ohvmjTVXi3W73RPtvzx5GY6uzSfk9D4r%2FdtQ9r6ElwFiLThXdUt6mr7f52RjwDh3WOuo3AUTgkHkbqMUo6L1RPQKD%2Fw4MI7slKj%2FXPGj0aMKiT2r4GOqUBBS5ZVMcMrlUj3YUp%2F52Gd27NKUehmJK7BPYoN8AIovPu%2FKJII31TBQg3AwxeH6ldnEAohcVpM4%2BzQP3DdfNC3M2JFYzF52FMa47677XysBixReiomLI3HnuzzTKNl4jk8uEiw9Tmpxz3a88FyzR1JfDJnRhEx3DphKegSw%2FQrPtbES%2BUOqR3sZqxmmcMz2voKIi3lDSKuh6BEp0HBuX540pQKqjc&X-Amz-Signature=ee4bc3264da703137bb448d16f5e212c11bb10871707b8345cb4961a867a825b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBT4A35%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnXJamfHIncFjvfUip0De31v7Z5OcWPPBvTv8KZm863QIgC1fRRmTABcAvtTivDUd8MQwvnZMTBzEsaWpXLbPtazgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEZOx7sF450%2BJLlMsCrcA65a1DLCquVwzWW%2BWYgB5xBmzoCqiKCAO71R34WcBcVgA8TPZP%2FzEESb7TfvYTfKnzr057yFryE8i0FONny9E%2BU3SEZfFUMaONTAWxSA2RCnrneAOI2%2BZv6fjeRAgoLwvCZXZdvsidNMldi4hy9P5cwue03zO5pDCAVSRIV9RoppSJ5ZOzhQUxzqySNgoAvoTJRgJErwsiqVQY8PIAZfFQE3WBX5mhhQ7T%2Fzo4vq8LNW2SuJDoLaTOwWXxaohi%2BNLi0bJ%2Ffyw1IfkOpygujBr5zGc8zTp4RxjgW%2FraB2ndGCFWqbCGG6Yi7geo7257OugdEFusQW9rVUpEmaOvHGgJEmjpayYx63lGvMWFdDJvhdejcg651Z8d7P6kQclCOngz7MdoVhK%2BzYd914%2FCkhVvDc4eJCFBD41ykfEZfP5fXJw1eHyhtceELs5gjA9ECyDiDZSfD6ChNhyQNE1gCjGrEiAoGmLa7RkpfPPeXdZNdI28K0%2B2MUq43qvhi2lHjF%2FQj9GUdO4pos762626ohvmjTVXi3W73RPtvzx5GY6uzSfk9D4r%2FdtQ9r6ElwFiLThXdUt6mr7f52RjwDh3WOuo3AUTgkHkbqMUo6L1RPQKD%2Fw4MI7slKj%2FXPGj0aMKiT2r4GOqUBBS5ZVMcMrlUj3YUp%2F52Gd27NKUehmJK7BPYoN8AIovPu%2FKJII31TBQg3AwxeH6ldnEAohcVpM4%2BzQP3DdfNC3M2JFYzF52FMa47677XysBixReiomLI3HnuzzTKNl4jk8uEiw9Tmpxz3a88FyzR1JfDJnRhEx3DphKegSw%2FQrPtbES%2BUOqR3sZqxmmcMz2voKIi3lDSKuh6BEp0HBuX540pQKqjc&X-Amz-Signature=2cb8b1e4d02a175868700d0d83e825262d0ba5fcf0c9dbd922cee64798b3b2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
