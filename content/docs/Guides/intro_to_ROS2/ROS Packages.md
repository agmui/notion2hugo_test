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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO7WCX4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2FjgOs5ch8GPIpOoxJJgdR20l%2BJJLiaXQJu8aeOpWYAiAkgH2FgLMo2cBkEEAI4iDmMwJJlLdeXWsDIQV%2BqNlGxyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeglyqOUA6cIukRU9KtwDChfgQImAsGRnXt67xUOzoFdJ7YHJaWNtY3B0CaF%2Ft7HcZgKM8IiWr12FCtq2DRP0wYkmlqhPOp4s83Lm16pCNrlHTO0VLoIHiu%2FPGvYBdZJ%2BJpeQCCXfB4ecaud%2BHa%2FoGAcD4iFmtqvW%2FUcH%2F2gTIkwnoBPxPSnU7kAFOiVNevA9uA4uCNrN26OQdnQsr5Bn5tgkXRgTdJU%2BjCSk0QwXVU%2BM4dwc%2F%2Bu0JIkU8jhL15vT2nCFmR5TbCLO2Mf5gF4T9luLHrZWSd57dekGziVjP7wL%2BqbREnSMkT%2FHWHnPavwlon31EM3lB3XerOTSbJJT0YaVlbUW80A8p%2FAI7Vay%2BkBPDvTGj%2FsT4o79uQEAp8x5lRUkNFvJ0mToVCMK34X2e%2FYwmoFnUudwyhSqHT99OqK0hHrzY18TgGn66L0Q5fla%2FtGaG%2FWFdIN34EjP7zX95KRYEJ7Q7d7Kj67oHmmAgIEKHeq%2FzMVOYsA9Pt9Lzi0XzMsq828rgIJCM%2FPYN5GYgF%2FO6LZCIJYr%2FQ0Tqw4UitxEqoebez1RIRWRBft12XW0CcfxxUnFJMxBu1CP7Fvx0NMyDSn%2FedILHqjbvi31cMdDdTMRWtgQ4UzF7msIZIyQU25umU0DSYhoDm4ws%2FvgvQY6pgHyivfwQ7sC2uYayZiEF6uVxzdXNIKNV9Znkig384lhpA7zSYasOBBrrEGdwIijT%2FD%2BUCiarBP0zlkhoc42IxUNH5HBaQ8P092wyfgv2aii3rFGEc2MNWnTvWZc7xn8wVnr%2BKFwNeQr6NTyze8pmoCz7ilnGMrOlLtxhq%2FSV%2B3oHkMiu9zHa6s19BMHd6XU0Bn09qnf3hNtM%2B%2BDBfUSqRyvBN073p%2Fq&X-Amz-Signature=78633f21ff42dd6498719e58e3c6eac4632ddcf8bebeec26797ecc914afc6b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO7WCX4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2FjgOs5ch8GPIpOoxJJgdR20l%2BJJLiaXQJu8aeOpWYAiAkgH2FgLMo2cBkEEAI4iDmMwJJlLdeXWsDIQV%2BqNlGxyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeglyqOUA6cIukRU9KtwDChfgQImAsGRnXt67xUOzoFdJ7YHJaWNtY3B0CaF%2Ft7HcZgKM8IiWr12FCtq2DRP0wYkmlqhPOp4s83Lm16pCNrlHTO0VLoIHiu%2FPGvYBdZJ%2BJpeQCCXfB4ecaud%2BHa%2FoGAcD4iFmtqvW%2FUcH%2F2gTIkwnoBPxPSnU7kAFOiVNevA9uA4uCNrN26OQdnQsr5Bn5tgkXRgTdJU%2BjCSk0QwXVU%2BM4dwc%2F%2Bu0JIkU8jhL15vT2nCFmR5TbCLO2Mf5gF4T9luLHrZWSd57dekGziVjP7wL%2BqbREnSMkT%2FHWHnPavwlon31EM3lB3XerOTSbJJT0YaVlbUW80A8p%2FAI7Vay%2BkBPDvTGj%2FsT4o79uQEAp8x5lRUkNFvJ0mToVCMK34X2e%2FYwmoFnUudwyhSqHT99OqK0hHrzY18TgGn66L0Q5fla%2FtGaG%2FWFdIN34EjP7zX95KRYEJ7Q7d7Kj67oHmmAgIEKHeq%2FzMVOYsA9Pt9Lzi0XzMsq828rgIJCM%2FPYN5GYgF%2FO6LZCIJYr%2FQ0Tqw4UitxEqoebez1RIRWRBft12XW0CcfxxUnFJMxBu1CP7Fvx0NMyDSn%2FedILHqjbvi31cMdDdTMRWtgQ4UzF7msIZIyQU25umU0DSYhoDm4ws%2FvgvQY6pgHyivfwQ7sC2uYayZiEF6uVxzdXNIKNV9Znkig384lhpA7zSYasOBBrrEGdwIijT%2FD%2BUCiarBP0zlkhoc42IxUNH5HBaQ8P092wyfgv2aii3rFGEc2MNWnTvWZc7xn8wVnr%2BKFwNeQr6NTyze8pmoCz7ilnGMrOlLtxhq%2FSV%2B3oHkMiu9zHa6s19BMHd6XU0Bn09qnf3hNtM%2B%2BDBfUSqRyvBN073p%2Fq&X-Amz-Signature=d66d871b61c2d6377be1e28403c23358ecc9f0e23ce78c020061e19ca079d455&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO7WCX4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2FjgOs5ch8GPIpOoxJJgdR20l%2BJJLiaXQJu8aeOpWYAiAkgH2FgLMo2cBkEEAI4iDmMwJJlLdeXWsDIQV%2BqNlGxyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeglyqOUA6cIukRU9KtwDChfgQImAsGRnXt67xUOzoFdJ7YHJaWNtY3B0CaF%2Ft7HcZgKM8IiWr12FCtq2DRP0wYkmlqhPOp4s83Lm16pCNrlHTO0VLoIHiu%2FPGvYBdZJ%2BJpeQCCXfB4ecaud%2BHa%2FoGAcD4iFmtqvW%2FUcH%2F2gTIkwnoBPxPSnU7kAFOiVNevA9uA4uCNrN26OQdnQsr5Bn5tgkXRgTdJU%2BjCSk0QwXVU%2BM4dwc%2F%2Bu0JIkU8jhL15vT2nCFmR5TbCLO2Mf5gF4T9luLHrZWSd57dekGziVjP7wL%2BqbREnSMkT%2FHWHnPavwlon31EM3lB3XerOTSbJJT0YaVlbUW80A8p%2FAI7Vay%2BkBPDvTGj%2FsT4o79uQEAp8x5lRUkNFvJ0mToVCMK34X2e%2FYwmoFnUudwyhSqHT99OqK0hHrzY18TgGn66L0Q5fla%2FtGaG%2FWFdIN34EjP7zX95KRYEJ7Q7d7Kj67oHmmAgIEKHeq%2FzMVOYsA9Pt9Lzi0XzMsq828rgIJCM%2FPYN5GYgF%2FO6LZCIJYr%2FQ0Tqw4UitxEqoebez1RIRWRBft12XW0CcfxxUnFJMxBu1CP7Fvx0NMyDSn%2FedILHqjbvi31cMdDdTMRWtgQ4UzF7msIZIyQU25umU0DSYhoDm4ws%2FvgvQY6pgHyivfwQ7sC2uYayZiEF6uVxzdXNIKNV9Znkig384lhpA7zSYasOBBrrEGdwIijT%2FD%2BUCiarBP0zlkhoc42IxUNH5HBaQ8P092wyfgv2aii3rFGEc2MNWnTvWZc7xn8wVnr%2BKFwNeQr6NTyze8pmoCz7ilnGMrOlLtxhq%2FSV%2B3oHkMiu9zHa6s19BMHd6XU0Bn09qnf3hNtM%2B%2BDBfUSqRyvBN073p%2Fq&X-Amz-Signature=cd6d02d96fc07d0eb1346bdae0a5ef2709b54f71b7721d6698f651cddabed6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO7WCX4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2FjgOs5ch8GPIpOoxJJgdR20l%2BJJLiaXQJu8aeOpWYAiAkgH2FgLMo2cBkEEAI4iDmMwJJlLdeXWsDIQV%2BqNlGxyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeglyqOUA6cIukRU9KtwDChfgQImAsGRnXt67xUOzoFdJ7YHJaWNtY3B0CaF%2Ft7HcZgKM8IiWr12FCtq2DRP0wYkmlqhPOp4s83Lm16pCNrlHTO0VLoIHiu%2FPGvYBdZJ%2BJpeQCCXfB4ecaud%2BHa%2FoGAcD4iFmtqvW%2FUcH%2F2gTIkwnoBPxPSnU7kAFOiVNevA9uA4uCNrN26OQdnQsr5Bn5tgkXRgTdJU%2BjCSk0QwXVU%2BM4dwc%2F%2Bu0JIkU8jhL15vT2nCFmR5TbCLO2Mf5gF4T9luLHrZWSd57dekGziVjP7wL%2BqbREnSMkT%2FHWHnPavwlon31EM3lB3XerOTSbJJT0YaVlbUW80A8p%2FAI7Vay%2BkBPDvTGj%2FsT4o79uQEAp8x5lRUkNFvJ0mToVCMK34X2e%2FYwmoFnUudwyhSqHT99OqK0hHrzY18TgGn66L0Q5fla%2FtGaG%2FWFdIN34EjP7zX95KRYEJ7Q7d7Kj67oHmmAgIEKHeq%2FzMVOYsA9Pt9Lzi0XzMsq828rgIJCM%2FPYN5GYgF%2FO6LZCIJYr%2FQ0Tqw4UitxEqoebez1RIRWRBft12XW0CcfxxUnFJMxBu1CP7Fvx0NMyDSn%2FedILHqjbvi31cMdDdTMRWtgQ4UzF7msIZIyQU25umU0DSYhoDm4ws%2FvgvQY6pgHyivfwQ7sC2uYayZiEF6uVxzdXNIKNV9Znkig384lhpA7zSYasOBBrrEGdwIijT%2FD%2BUCiarBP0zlkhoc42IxUNH5HBaQ8P092wyfgv2aii3rFGEc2MNWnTvWZc7xn8wVnr%2BKFwNeQr6NTyze8pmoCz7ilnGMrOlLtxhq%2FSV%2B3oHkMiu9zHa6s19BMHd6XU0Bn09qnf3hNtM%2B%2BDBfUSqRyvBN073p%2Fq&X-Amz-Signature=5f69dc922726373cb70c196d1996eb2b9b1354a8fe086a27f72547eca2b0e275&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO7WCX4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2FjgOs5ch8GPIpOoxJJgdR20l%2BJJLiaXQJu8aeOpWYAiAkgH2FgLMo2cBkEEAI4iDmMwJJlLdeXWsDIQV%2BqNlGxyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeglyqOUA6cIukRU9KtwDChfgQImAsGRnXt67xUOzoFdJ7YHJaWNtY3B0CaF%2Ft7HcZgKM8IiWr12FCtq2DRP0wYkmlqhPOp4s83Lm16pCNrlHTO0VLoIHiu%2FPGvYBdZJ%2BJpeQCCXfB4ecaud%2BHa%2FoGAcD4iFmtqvW%2FUcH%2F2gTIkwnoBPxPSnU7kAFOiVNevA9uA4uCNrN26OQdnQsr5Bn5tgkXRgTdJU%2BjCSk0QwXVU%2BM4dwc%2F%2Bu0JIkU8jhL15vT2nCFmR5TbCLO2Mf5gF4T9luLHrZWSd57dekGziVjP7wL%2BqbREnSMkT%2FHWHnPavwlon31EM3lB3XerOTSbJJT0YaVlbUW80A8p%2FAI7Vay%2BkBPDvTGj%2FsT4o79uQEAp8x5lRUkNFvJ0mToVCMK34X2e%2FYwmoFnUudwyhSqHT99OqK0hHrzY18TgGn66L0Q5fla%2FtGaG%2FWFdIN34EjP7zX95KRYEJ7Q7d7Kj67oHmmAgIEKHeq%2FzMVOYsA9Pt9Lzi0XzMsq828rgIJCM%2FPYN5GYgF%2FO6LZCIJYr%2FQ0Tqw4UitxEqoebez1RIRWRBft12XW0CcfxxUnFJMxBu1CP7Fvx0NMyDSn%2FedILHqjbvi31cMdDdTMRWtgQ4UzF7msIZIyQU25umU0DSYhoDm4ws%2FvgvQY6pgHyivfwQ7sC2uYayZiEF6uVxzdXNIKNV9Znkig384lhpA7zSYasOBBrrEGdwIijT%2FD%2BUCiarBP0zlkhoc42IxUNH5HBaQ8P092wyfgv2aii3rFGEc2MNWnTvWZc7xn8wVnr%2BKFwNeQr6NTyze8pmoCz7ilnGMrOlLtxhq%2FSV%2B3oHkMiu9zHa6s19BMHd6XU0Bn09qnf3hNtM%2B%2BDBfUSqRyvBN073p%2Fq&X-Amz-Signature=74bdacbf91ddf292e89f36129651668c8d8bf2af8fad1951109cda9d12670c73&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO7WCX4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2FjgOs5ch8GPIpOoxJJgdR20l%2BJJLiaXQJu8aeOpWYAiAkgH2FgLMo2cBkEEAI4iDmMwJJlLdeXWsDIQV%2BqNlGxyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeglyqOUA6cIukRU9KtwDChfgQImAsGRnXt67xUOzoFdJ7YHJaWNtY3B0CaF%2Ft7HcZgKM8IiWr12FCtq2DRP0wYkmlqhPOp4s83Lm16pCNrlHTO0VLoIHiu%2FPGvYBdZJ%2BJpeQCCXfB4ecaud%2BHa%2FoGAcD4iFmtqvW%2FUcH%2F2gTIkwnoBPxPSnU7kAFOiVNevA9uA4uCNrN26OQdnQsr5Bn5tgkXRgTdJU%2BjCSk0QwXVU%2BM4dwc%2F%2Bu0JIkU8jhL15vT2nCFmR5TbCLO2Mf5gF4T9luLHrZWSd57dekGziVjP7wL%2BqbREnSMkT%2FHWHnPavwlon31EM3lB3XerOTSbJJT0YaVlbUW80A8p%2FAI7Vay%2BkBPDvTGj%2FsT4o79uQEAp8x5lRUkNFvJ0mToVCMK34X2e%2FYwmoFnUudwyhSqHT99OqK0hHrzY18TgGn66L0Q5fla%2FtGaG%2FWFdIN34EjP7zX95KRYEJ7Q7d7Kj67oHmmAgIEKHeq%2FzMVOYsA9Pt9Lzi0XzMsq828rgIJCM%2FPYN5GYgF%2FO6LZCIJYr%2FQ0Tqw4UitxEqoebez1RIRWRBft12XW0CcfxxUnFJMxBu1CP7Fvx0NMyDSn%2FedILHqjbvi31cMdDdTMRWtgQ4UzF7msIZIyQU25umU0DSYhoDm4ws%2FvgvQY6pgHyivfwQ7sC2uYayZiEF6uVxzdXNIKNV9Znkig384lhpA7zSYasOBBrrEGdwIijT%2FD%2BUCiarBP0zlkhoc42IxUNH5HBaQ8P092wyfgv2aii3rFGEc2MNWnTvWZc7xn8wVnr%2BKFwNeQr6NTyze8pmoCz7ilnGMrOlLtxhq%2FSV%2B3oHkMiu9zHa6s19BMHd6XU0Bn09qnf3hNtM%2B%2BDBfUSqRyvBN073p%2Fq&X-Amz-Signature=dabbfebb736f851bdbf87308b319c6d0858ea1c8b9487907a8c0bbb04c9c7539&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO7WCX4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj%2FjgOs5ch8GPIpOoxJJgdR20l%2BJJLiaXQJu8aeOpWYAiAkgH2FgLMo2cBkEEAI4iDmMwJJlLdeXWsDIQV%2BqNlGxyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeglyqOUA6cIukRU9KtwDChfgQImAsGRnXt67xUOzoFdJ7YHJaWNtY3B0CaF%2Ft7HcZgKM8IiWr12FCtq2DRP0wYkmlqhPOp4s83Lm16pCNrlHTO0VLoIHiu%2FPGvYBdZJ%2BJpeQCCXfB4ecaud%2BHa%2FoGAcD4iFmtqvW%2FUcH%2F2gTIkwnoBPxPSnU7kAFOiVNevA9uA4uCNrN26OQdnQsr5Bn5tgkXRgTdJU%2BjCSk0QwXVU%2BM4dwc%2F%2Bu0JIkU8jhL15vT2nCFmR5TbCLO2Mf5gF4T9luLHrZWSd57dekGziVjP7wL%2BqbREnSMkT%2FHWHnPavwlon31EM3lB3XerOTSbJJT0YaVlbUW80A8p%2FAI7Vay%2BkBPDvTGj%2FsT4o79uQEAp8x5lRUkNFvJ0mToVCMK34X2e%2FYwmoFnUudwyhSqHT99OqK0hHrzY18TgGn66L0Q5fla%2FtGaG%2FWFdIN34EjP7zX95KRYEJ7Q7d7Kj67oHmmAgIEKHeq%2FzMVOYsA9Pt9Lzi0XzMsq828rgIJCM%2FPYN5GYgF%2FO6LZCIJYr%2FQ0Tqw4UitxEqoebez1RIRWRBft12XW0CcfxxUnFJMxBu1CP7Fvx0NMyDSn%2FedILHqjbvi31cMdDdTMRWtgQ4UzF7msIZIyQU25umU0DSYhoDm4ws%2FvgvQY6pgHyivfwQ7sC2uYayZiEF6uVxzdXNIKNV9Znkig384lhpA7zSYasOBBrrEGdwIijT%2FD%2BUCiarBP0zlkhoc42IxUNH5HBaQ8P092wyfgv2aii3rFGEc2MNWnTvWZc7xn8wVnr%2BKFwNeQr6NTyze8pmoCz7ilnGMrOlLtxhq%2FSV%2B3oHkMiu9zHa6s19BMHd6XU0Bn09qnf3hNtM%2B%2BDBfUSqRyvBN073p%2Fq&X-Amz-Signature=48742e40716eda0a064fc9c933f33cb03c63ce7deab35489936d8f79d37f14f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
