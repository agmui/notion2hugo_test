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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAVHZ77%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG05tsEQWEWllwAdZK03okBB4Ltq8Vco5bbR3brRwS5wIhAITT5pG1UE3ymT%2FxusZBduSr9%2BLbsk5n2vcLoy26f%2BhFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoXRIgWX%2FwDBQ2KhUq3APOwWAFndWIxF%2FmtlQfhD4FVV77fHWaSUdHv21ErtaqfxFkuyBsaZ73LEMFwixjdf511TfjmkzjHJs56qSr0hWtP82gdCfmrMALjG4o2ZuNYwM9hoypNpc4KUajie4QkIsAckk6AFDcdAXOHL49T9YspFFV7dHQjR%2B1mdqUID5KZ5Ij%2FHjHyGnOwEwqdL1hjRmqCHjPU0%2Fs%2FsurLxwANw3eXpv%2B9yfx5cM9Jpz2UUsOh7RuWuAmX1X1PEW3S5hkA0fJvHqlqup%2BQzDDDKWSLoFsQKIfQ1AjeRX1YuaeT1DU%2BWOfzTYvWt1Xl0y2yK2VGzdmgDZw4FhMnTVE1W0idFPFYM7ITcDTpU1RkAq1h6Rh%2BLMHfgpkxvITJuO23Jmg9ypmAjkurvVK2Dfr4kkDD6nI3mUDDDR1PAEwpIhHWdjDH3RKzB4NGj47sQY0cT5DK5u8riPZn7%2B%2FiGTpj29e%2FdxtieOMGXKroCjo370qbvGyRZ%2FXjo1784PmowCjFrdmBy01PfUD6kbEVEvWTgjLnvgXSgiQ%2FKgM2asQdZLrtt81rh8GE4n2UCF3gctbUn2HvKkFgQ43jcCCowsLs04vmTAdcsvAtl4S07XrYWTDzKdRU4%2BNbkql9Iv4NrC0%2BDDmld29BjqkActV%2BnX31BcLcb3kC0IrSO74F%2FqJEkLHH73aibLgcil3%2FXbXeuwqRR2TbgmsgElyiyo%2BWzPU1bT19RYqTKEUw8VJLliBiSpAdhate%2FB2v2Mh7VbwRjFzBYI22Y0cMiVVlMYbnXSYGAAPISHCir5Z%2FLl1XCKZBHCYlA6Nrr6PBBeoPYGLu56uPWpTPolSgsc2QM%2BonHlXrSFQ4bywIkpGJ0OA%2BZgO&X-Amz-Signature=18359a4dd9605687e666f92d9d831f53f68932464b027f9c354d767d06c3a4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAVHZ77%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG05tsEQWEWllwAdZK03okBB4Ltq8Vco5bbR3brRwS5wIhAITT5pG1UE3ymT%2FxusZBduSr9%2BLbsk5n2vcLoy26f%2BhFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoXRIgWX%2FwDBQ2KhUq3APOwWAFndWIxF%2FmtlQfhD4FVV77fHWaSUdHv21ErtaqfxFkuyBsaZ73LEMFwixjdf511TfjmkzjHJs56qSr0hWtP82gdCfmrMALjG4o2ZuNYwM9hoypNpc4KUajie4QkIsAckk6AFDcdAXOHL49T9YspFFV7dHQjR%2B1mdqUID5KZ5Ij%2FHjHyGnOwEwqdL1hjRmqCHjPU0%2Fs%2FsurLxwANw3eXpv%2B9yfx5cM9Jpz2UUsOh7RuWuAmX1X1PEW3S5hkA0fJvHqlqup%2BQzDDDKWSLoFsQKIfQ1AjeRX1YuaeT1DU%2BWOfzTYvWt1Xl0y2yK2VGzdmgDZw4FhMnTVE1W0idFPFYM7ITcDTpU1RkAq1h6Rh%2BLMHfgpkxvITJuO23Jmg9ypmAjkurvVK2Dfr4kkDD6nI3mUDDDR1PAEwpIhHWdjDH3RKzB4NGj47sQY0cT5DK5u8riPZn7%2B%2FiGTpj29e%2FdxtieOMGXKroCjo370qbvGyRZ%2FXjo1784PmowCjFrdmBy01PfUD6kbEVEvWTgjLnvgXSgiQ%2FKgM2asQdZLrtt81rh8GE4n2UCF3gctbUn2HvKkFgQ43jcCCowsLs04vmTAdcsvAtl4S07XrYWTDzKdRU4%2BNbkql9Iv4NrC0%2BDDmld29BjqkActV%2BnX31BcLcb3kC0IrSO74F%2FqJEkLHH73aibLgcil3%2FXbXeuwqRR2TbgmsgElyiyo%2BWzPU1bT19RYqTKEUw8VJLliBiSpAdhate%2FB2v2Mh7VbwRjFzBYI22Y0cMiVVlMYbnXSYGAAPISHCir5Z%2FLl1XCKZBHCYlA6Nrr6PBBeoPYGLu56uPWpTPolSgsc2QM%2BonHlXrSFQ4bywIkpGJ0OA%2BZgO&X-Amz-Signature=98362a19c1040af55b18819a98484f26436a69b102e5b1f7d9465251fa7bb108&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAVHZ77%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG05tsEQWEWllwAdZK03okBB4Ltq8Vco5bbR3brRwS5wIhAITT5pG1UE3ymT%2FxusZBduSr9%2BLbsk5n2vcLoy26f%2BhFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoXRIgWX%2FwDBQ2KhUq3APOwWAFndWIxF%2FmtlQfhD4FVV77fHWaSUdHv21ErtaqfxFkuyBsaZ73LEMFwixjdf511TfjmkzjHJs56qSr0hWtP82gdCfmrMALjG4o2ZuNYwM9hoypNpc4KUajie4QkIsAckk6AFDcdAXOHL49T9YspFFV7dHQjR%2B1mdqUID5KZ5Ij%2FHjHyGnOwEwqdL1hjRmqCHjPU0%2Fs%2FsurLxwANw3eXpv%2B9yfx5cM9Jpz2UUsOh7RuWuAmX1X1PEW3S5hkA0fJvHqlqup%2BQzDDDKWSLoFsQKIfQ1AjeRX1YuaeT1DU%2BWOfzTYvWt1Xl0y2yK2VGzdmgDZw4FhMnTVE1W0idFPFYM7ITcDTpU1RkAq1h6Rh%2BLMHfgpkxvITJuO23Jmg9ypmAjkurvVK2Dfr4kkDD6nI3mUDDDR1PAEwpIhHWdjDH3RKzB4NGj47sQY0cT5DK5u8riPZn7%2B%2FiGTpj29e%2FdxtieOMGXKroCjo370qbvGyRZ%2FXjo1784PmowCjFrdmBy01PfUD6kbEVEvWTgjLnvgXSgiQ%2FKgM2asQdZLrtt81rh8GE4n2UCF3gctbUn2HvKkFgQ43jcCCowsLs04vmTAdcsvAtl4S07XrYWTDzKdRU4%2BNbkql9Iv4NrC0%2BDDmld29BjqkActV%2BnX31BcLcb3kC0IrSO74F%2FqJEkLHH73aibLgcil3%2FXbXeuwqRR2TbgmsgElyiyo%2BWzPU1bT19RYqTKEUw8VJLliBiSpAdhate%2FB2v2Mh7VbwRjFzBYI22Y0cMiVVlMYbnXSYGAAPISHCir5Z%2FLl1XCKZBHCYlA6Nrr6PBBeoPYGLu56uPWpTPolSgsc2QM%2BonHlXrSFQ4bywIkpGJ0OA%2BZgO&X-Amz-Signature=282378f8b4bee6d4961e3d59fcace56de4a54b44f8af839a94bf177f7550a275&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAVHZ77%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG05tsEQWEWllwAdZK03okBB4Ltq8Vco5bbR3brRwS5wIhAITT5pG1UE3ymT%2FxusZBduSr9%2BLbsk5n2vcLoy26f%2BhFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoXRIgWX%2FwDBQ2KhUq3APOwWAFndWIxF%2FmtlQfhD4FVV77fHWaSUdHv21ErtaqfxFkuyBsaZ73LEMFwixjdf511TfjmkzjHJs56qSr0hWtP82gdCfmrMALjG4o2ZuNYwM9hoypNpc4KUajie4QkIsAckk6AFDcdAXOHL49T9YspFFV7dHQjR%2B1mdqUID5KZ5Ij%2FHjHyGnOwEwqdL1hjRmqCHjPU0%2Fs%2FsurLxwANw3eXpv%2B9yfx5cM9Jpz2UUsOh7RuWuAmX1X1PEW3S5hkA0fJvHqlqup%2BQzDDDKWSLoFsQKIfQ1AjeRX1YuaeT1DU%2BWOfzTYvWt1Xl0y2yK2VGzdmgDZw4FhMnTVE1W0idFPFYM7ITcDTpU1RkAq1h6Rh%2BLMHfgpkxvITJuO23Jmg9ypmAjkurvVK2Dfr4kkDD6nI3mUDDDR1PAEwpIhHWdjDH3RKzB4NGj47sQY0cT5DK5u8riPZn7%2B%2FiGTpj29e%2FdxtieOMGXKroCjo370qbvGyRZ%2FXjo1784PmowCjFrdmBy01PfUD6kbEVEvWTgjLnvgXSgiQ%2FKgM2asQdZLrtt81rh8GE4n2UCF3gctbUn2HvKkFgQ43jcCCowsLs04vmTAdcsvAtl4S07XrYWTDzKdRU4%2BNbkql9Iv4NrC0%2BDDmld29BjqkActV%2BnX31BcLcb3kC0IrSO74F%2FqJEkLHH73aibLgcil3%2FXbXeuwqRR2TbgmsgElyiyo%2BWzPU1bT19RYqTKEUw8VJLliBiSpAdhate%2FB2v2Mh7VbwRjFzBYI22Y0cMiVVlMYbnXSYGAAPISHCir5Z%2FLl1XCKZBHCYlA6Nrr6PBBeoPYGLu56uPWpTPolSgsc2QM%2BonHlXrSFQ4bywIkpGJ0OA%2BZgO&X-Amz-Signature=f8c4604c874d7e21f4c2ce2709b745db47285e6ac7741719b6c9a10aaead8ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAVHZ77%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG05tsEQWEWllwAdZK03okBB4Ltq8Vco5bbR3brRwS5wIhAITT5pG1UE3ymT%2FxusZBduSr9%2BLbsk5n2vcLoy26f%2BhFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoXRIgWX%2FwDBQ2KhUq3APOwWAFndWIxF%2FmtlQfhD4FVV77fHWaSUdHv21ErtaqfxFkuyBsaZ73LEMFwixjdf511TfjmkzjHJs56qSr0hWtP82gdCfmrMALjG4o2ZuNYwM9hoypNpc4KUajie4QkIsAckk6AFDcdAXOHL49T9YspFFV7dHQjR%2B1mdqUID5KZ5Ij%2FHjHyGnOwEwqdL1hjRmqCHjPU0%2Fs%2FsurLxwANw3eXpv%2B9yfx5cM9Jpz2UUsOh7RuWuAmX1X1PEW3S5hkA0fJvHqlqup%2BQzDDDKWSLoFsQKIfQ1AjeRX1YuaeT1DU%2BWOfzTYvWt1Xl0y2yK2VGzdmgDZw4FhMnTVE1W0idFPFYM7ITcDTpU1RkAq1h6Rh%2BLMHfgpkxvITJuO23Jmg9ypmAjkurvVK2Dfr4kkDD6nI3mUDDDR1PAEwpIhHWdjDH3RKzB4NGj47sQY0cT5DK5u8riPZn7%2B%2FiGTpj29e%2FdxtieOMGXKroCjo370qbvGyRZ%2FXjo1784PmowCjFrdmBy01PfUD6kbEVEvWTgjLnvgXSgiQ%2FKgM2asQdZLrtt81rh8GE4n2UCF3gctbUn2HvKkFgQ43jcCCowsLs04vmTAdcsvAtl4S07XrYWTDzKdRU4%2BNbkql9Iv4NrC0%2BDDmld29BjqkActV%2BnX31BcLcb3kC0IrSO74F%2FqJEkLHH73aibLgcil3%2FXbXeuwqRR2TbgmsgElyiyo%2BWzPU1bT19RYqTKEUw8VJLliBiSpAdhate%2FB2v2Mh7VbwRjFzBYI22Y0cMiVVlMYbnXSYGAAPISHCir5Z%2FLl1XCKZBHCYlA6Nrr6PBBeoPYGLu56uPWpTPolSgsc2QM%2BonHlXrSFQ4bywIkpGJ0OA%2BZgO&X-Amz-Signature=701b50613dc9d1e2c298bcd6638a501d59dd57363466f84a98cad9080da270e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAVHZ77%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG05tsEQWEWllwAdZK03okBB4Ltq8Vco5bbR3brRwS5wIhAITT5pG1UE3ymT%2FxusZBduSr9%2BLbsk5n2vcLoy26f%2BhFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoXRIgWX%2FwDBQ2KhUq3APOwWAFndWIxF%2FmtlQfhD4FVV77fHWaSUdHv21ErtaqfxFkuyBsaZ73LEMFwixjdf511TfjmkzjHJs56qSr0hWtP82gdCfmrMALjG4o2ZuNYwM9hoypNpc4KUajie4QkIsAckk6AFDcdAXOHL49T9YspFFV7dHQjR%2B1mdqUID5KZ5Ij%2FHjHyGnOwEwqdL1hjRmqCHjPU0%2Fs%2FsurLxwANw3eXpv%2B9yfx5cM9Jpz2UUsOh7RuWuAmX1X1PEW3S5hkA0fJvHqlqup%2BQzDDDKWSLoFsQKIfQ1AjeRX1YuaeT1DU%2BWOfzTYvWt1Xl0y2yK2VGzdmgDZw4FhMnTVE1W0idFPFYM7ITcDTpU1RkAq1h6Rh%2BLMHfgpkxvITJuO23Jmg9ypmAjkurvVK2Dfr4kkDD6nI3mUDDDR1PAEwpIhHWdjDH3RKzB4NGj47sQY0cT5DK5u8riPZn7%2B%2FiGTpj29e%2FdxtieOMGXKroCjo370qbvGyRZ%2FXjo1784PmowCjFrdmBy01PfUD6kbEVEvWTgjLnvgXSgiQ%2FKgM2asQdZLrtt81rh8GE4n2UCF3gctbUn2HvKkFgQ43jcCCowsLs04vmTAdcsvAtl4S07XrYWTDzKdRU4%2BNbkql9Iv4NrC0%2BDDmld29BjqkActV%2BnX31BcLcb3kC0IrSO74F%2FqJEkLHH73aibLgcil3%2FXbXeuwqRR2TbgmsgElyiyo%2BWzPU1bT19RYqTKEUw8VJLliBiSpAdhate%2FB2v2Mh7VbwRjFzBYI22Y0cMiVVlMYbnXSYGAAPISHCir5Z%2FLl1XCKZBHCYlA6Nrr6PBBeoPYGLu56uPWpTPolSgsc2QM%2BonHlXrSFQ4bywIkpGJ0OA%2BZgO&X-Amz-Signature=b80a31d60afcb1cde2a4d6f29803502caa9054d2426358e9842ba010805d2279&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAVHZ77%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG05tsEQWEWllwAdZK03okBB4Ltq8Vco5bbR3brRwS5wIhAITT5pG1UE3ymT%2FxusZBduSr9%2BLbsk5n2vcLoy26f%2BhFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoXRIgWX%2FwDBQ2KhUq3APOwWAFndWIxF%2FmtlQfhD4FVV77fHWaSUdHv21ErtaqfxFkuyBsaZ73LEMFwixjdf511TfjmkzjHJs56qSr0hWtP82gdCfmrMALjG4o2ZuNYwM9hoypNpc4KUajie4QkIsAckk6AFDcdAXOHL49T9YspFFV7dHQjR%2B1mdqUID5KZ5Ij%2FHjHyGnOwEwqdL1hjRmqCHjPU0%2Fs%2FsurLxwANw3eXpv%2B9yfx5cM9Jpz2UUsOh7RuWuAmX1X1PEW3S5hkA0fJvHqlqup%2BQzDDDKWSLoFsQKIfQ1AjeRX1YuaeT1DU%2BWOfzTYvWt1Xl0y2yK2VGzdmgDZw4FhMnTVE1W0idFPFYM7ITcDTpU1RkAq1h6Rh%2BLMHfgpkxvITJuO23Jmg9ypmAjkurvVK2Dfr4kkDD6nI3mUDDDR1PAEwpIhHWdjDH3RKzB4NGj47sQY0cT5DK5u8riPZn7%2B%2FiGTpj29e%2FdxtieOMGXKroCjo370qbvGyRZ%2FXjo1784PmowCjFrdmBy01PfUD6kbEVEvWTgjLnvgXSgiQ%2FKgM2asQdZLrtt81rh8GE4n2UCF3gctbUn2HvKkFgQ43jcCCowsLs04vmTAdcsvAtl4S07XrYWTDzKdRU4%2BNbkql9Iv4NrC0%2BDDmld29BjqkActV%2BnX31BcLcb3kC0IrSO74F%2FqJEkLHH73aibLgcil3%2FXbXeuwqRR2TbgmsgElyiyo%2BWzPU1bT19RYqTKEUw8VJLliBiSpAdhate%2FB2v2Mh7VbwRjFzBYI22Y0cMiVVlMYbnXSYGAAPISHCir5Z%2FLl1XCKZBHCYlA6Nrr6PBBeoPYGLu56uPWpTPolSgsc2QM%2BonHlXrSFQ4bywIkpGJ0OA%2BZgO&X-Amz-Signature=913059a08c286b733775238e75a95edd71fce7609c65edfebb6b9e1ad1aa363f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
