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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFYM6O2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE8IZEeHzR3itOSlmCl7eP6XYDh65CmF%2FKN8YE4Bk%2FN2AiEA4fKe%2BihNutOQXIvhM10MeAYu4FTUcqToIHTR7kXQIDAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxToVfDeYA%2Fm52DCrcA6T7L%2Bx%2F5BIwzofNoMrjiJtHWhujRojo4%2FYSfBTz7xPlS718T5l11UZg3IbA%2BVwit7mkl%2F%2B7GQ2HOJAyEHxh%2Bwm1Vo1sy3h4aD0xX%2FlNJ%2FTSULjyFjwiigNmrSZYT7rv297euiGT13ZUTQC2O9jUSDx42ccdu0c3SXJ3yua6heq4BjLEmWEQ9kYO5PVbbttO95zdgLaJnbFU%2ByIIRXQvAdou5hR6BxekJ3GncbjtFSMXFxDokhh7GndKKCCa1cDchhIgJzsXhQx382njSclaRQZdcz7esmWRDVpP9ML%2FhP5%2F0gMuxgVBNDE7xwkG8Wm%2BAMjtb04RBYH8YaheUQEAYdfdJWMUjWwUh9se7MWvjfW9D8Z7tDX5okikXMvqpAZn7TLe9g37UCPtEgvnmobYf99vHeSbUnmP%2Bzo1iF%2FhvxATEmvaU5cNGpXjz3LweH%2BcevA1nhYaWmngGXBHe4%2B0go3nbMwjQQM%2B9kDvF2gaJDDJX%2FceAyvB5VfFQq9gEUzCFspSaKM%2Br5hsOfD9pNSKhdzpFhhqQQPdT1xx8NnWCF%2BVUZMI0FzaRePQ72bUZs81NuI77KkcFvTeakfDPppKROSf9a2d%2BDS67o5bZTditdFtTH19Bgh1knhL0TtoMNP5mr0GOqUBXW9mWYyMrpVG5CCpWrZBNih5F%2FcmR%2B1OR2X%2FZmK9lPWzw5i2ZzlFodj8VBmLBssDEhgP2kSlctEkcFivLH4%2FShNGn5vy6ytZtNNq8GjYBShA0qLb%2FjaVTNrZAUzM%2F1JnJiSTJUWBsFE7A7AkZP3mK4K8agTTxhaG08Zauo4HcvqpMS0HKqSRrnivITKiYNRR2LPWpN%2B1ofMhXHsSbF2JKRAvOxip&X-Amz-Signature=bb5174c714b0c7ba24ae035a537baa7fd0b04a2ff707018246c2fcd43e066be0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFYM6O2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE8IZEeHzR3itOSlmCl7eP6XYDh65CmF%2FKN8YE4Bk%2FN2AiEA4fKe%2BihNutOQXIvhM10MeAYu4FTUcqToIHTR7kXQIDAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxToVfDeYA%2Fm52DCrcA6T7L%2Bx%2F5BIwzofNoMrjiJtHWhujRojo4%2FYSfBTz7xPlS718T5l11UZg3IbA%2BVwit7mkl%2F%2B7GQ2HOJAyEHxh%2Bwm1Vo1sy3h4aD0xX%2FlNJ%2FTSULjyFjwiigNmrSZYT7rv297euiGT13ZUTQC2O9jUSDx42ccdu0c3SXJ3yua6heq4BjLEmWEQ9kYO5PVbbttO95zdgLaJnbFU%2ByIIRXQvAdou5hR6BxekJ3GncbjtFSMXFxDokhh7GndKKCCa1cDchhIgJzsXhQx382njSclaRQZdcz7esmWRDVpP9ML%2FhP5%2F0gMuxgVBNDE7xwkG8Wm%2BAMjtb04RBYH8YaheUQEAYdfdJWMUjWwUh9se7MWvjfW9D8Z7tDX5okikXMvqpAZn7TLe9g37UCPtEgvnmobYf99vHeSbUnmP%2Bzo1iF%2FhvxATEmvaU5cNGpXjz3LweH%2BcevA1nhYaWmngGXBHe4%2B0go3nbMwjQQM%2B9kDvF2gaJDDJX%2FceAyvB5VfFQq9gEUzCFspSaKM%2Br5hsOfD9pNSKhdzpFhhqQQPdT1xx8NnWCF%2BVUZMI0FzaRePQ72bUZs81NuI77KkcFvTeakfDPppKROSf9a2d%2BDS67o5bZTditdFtTH19Bgh1knhL0TtoMNP5mr0GOqUBXW9mWYyMrpVG5CCpWrZBNih5F%2FcmR%2B1OR2X%2FZmK9lPWzw5i2ZzlFodj8VBmLBssDEhgP2kSlctEkcFivLH4%2FShNGn5vy6ytZtNNq8GjYBShA0qLb%2FjaVTNrZAUzM%2F1JnJiSTJUWBsFE7A7AkZP3mK4K8agTTxhaG08Zauo4HcvqpMS0HKqSRrnivITKiYNRR2LPWpN%2B1ofMhXHsSbF2JKRAvOxip&X-Amz-Signature=b8a800dd39a6520a5f7888e8c683a69a1985ccecdb0a80d7233fb9b04e4fb78e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFYM6O2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE8IZEeHzR3itOSlmCl7eP6XYDh65CmF%2FKN8YE4Bk%2FN2AiEA4fKe%2BihNutOQXIvhM10MeAYu4FTUcqToIHTR7kXQIDAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxToVfDeYA%2Fm52DCrcA6T7L%2Bx%2F5BIwzofNoMrjiJtHWhujRojo4%2FYSfBTz7xPlS718T5l11UZg3IbA%2BVwit7mkl%2F%2B7GQ2HOJAyEHxh%2Bwm1Vo1sy3h4aD0xX%2FlNJ%2FTSULjyFjwiigNmrSZYT7rv297euiGT13ZUTQC2O9jUSDx42ccdu0c3SXJ3yua6heq4BjLEmWEQ9kYO5PVbbttO95zdgLaJnbFU%2ByIIRXQvAdou5hR6BxekJ3GncbjtFSMXFxDokhh7GndKKCCa1cDchhIgJzsXhQx382njSclaRQZdcz7esmWRDVpP9ML%2FhP5%2F0gMuxgVBNDE7xwkG8Wm%2BAMjtb04RBYH8YaheUQEAYdfdJWMUjWwUh9se7MWvjfW9D8Z7tDX5okikXMvqpAZn7TLe9g37UCPtEgvnmobYf99vHeSbUnmP%2Bzo1iF%2FhvxATEmvaU5cNGpXjz3LweH%2BcevA1nhYaWmngGXBHe4%2B0go3nbMwjQQM%2B9kDvF2gaJDDJX%2FceAyvB5VfFQq9gEUzCFspSaKM%2Br5hsOfD9pNSKhdzpFhhqQQPdT1xx8NnWCF%2BVUZMI0FzaRePQ72bUZs81NuI77KkcFvTeakfDPppKROSf9a2d%2BDS67o5bZTditdFtTH19Bgh1knhL0TtoMNP5mr0GOqUBXW9mWYyMrpVG5CCpWrZBNih5F%2FcmR%2B1OR2X%2FZmK9lPWzw5i2ZzlFodj8VBmLBssDEhgP2kSlctEkcFivLH4%2FShNGn5vy6ytZtNNq8GjYBShA0qLb%2FjaVTNrZAUzM%2F1JnJiSTJUWBsFE7A7AkZP3mK4K8agTTxhaG08Zauo4HcvqpMS0HKqSRrnivITKiYNRR2LPWpN%2B1ofMhXHsSbF2JKRAvOxip&X-Amz-Signature=4f751d2774da84ca83ac58eaf18055d5b709f57454175596e37aa3eb84051153&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFYM6O2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE8IZEeHzR3itOSlmCl7eP6XYDh65CmF%2FKN8YE4Bk%2FN2AiEA4fKe%2BihNutOQXIvhM10MeAYu4FTUcqToIHTR7kXQIDAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxToVfDeYA%2Fm52DCrcA6T7L%2Bx%2F5BIwzofNoMrjiJtHWhujRojo4%2FYSfBTz7xPlS718T5l11UZg3IbA%2BVwit7mkl%2F%2B7GQ2HOJAyEHxh%2Bwm1Vo1sy3h4aD0xX%2FlNJ%2FTSULjyFjwiigNmrSZYT7rv297euiGT13ZUTQC2O9jUSDx42ccdu0c3SXJ3yua6heq4BjLEmWEQ9kYO5PVbbttO95zdgLaJnbFU%2ByIIRXQvAdou5hR6BxekJ3GncbjtFSMXFxDokhh7GndKKCCa1cDchhIgJzsXhQx382njSclaRQZdcz7esmWRDVpP9ML%2FhP5%2F0gMuxgVBNDE7xwkG8Wm%2BAMjtb04RBYH8YaheUQEAYdfdJWMUjWwUh9se7MWvjfW9D8Z7tDX5okikXMvqpAZn7TLe9g37UCPtEgvnmobYf99vHeSbUnmP%2Bzo1iF%2FhvxATEmvaU5cNGpXjz3LweH%2BcevA1nhYaWmngGXBHe4%2B0go3nbMwjQQM%2B9kDvF2gaJDDJX%2FceAyvB5VfFQq9gEUzCFspSaKM%2Br5hsOfD9pNSKhdzpFhhqQQPdT1xx8NnWCF%2BVUZMI0FzaRePQ72bUZs81NuI77KkcFvTeakfDPppKROSf9a2d%2BDS67o5bZTditdFtTH19Bgh1knhL0TtoMNP5mr0GOqUBXW9mWYyMrpVG5CCpWrZBNih5F%2FcmR%2B1OR2X%2FZmK9lPWzw5i2ZzlFodj8VBmLBssDEhgP2kSlctEkcFivLH4%2FShNGn5vy6ytZtNNq8GjYBShA0qLb%2FjaVTNrZAUzM%2F1JnJiSTJUWBsFE7A7AkZP3mK4K8agTTxhaG08Zauo4HcvqpMS0HKqSRrnivITKiYNRR2LPWpN%2B1ofMhXHsSbF2JKRAvOxip&X-Amz-Signature=7c4bf8fb888f6d40db7df135552636769b77cb1580ef76bd6c1e328b4ab3ff37&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFYM6O2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE8IZEeHzR3itOSlmCl7eP6XYDh65CmF%2FKN8YE4Bk%2FN2AiEA4fKe%2BihNutOQXIvhM10MeAYu4FTUcqToIHTR7kXQIDAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxToVfDeYA%2Fm52DCrcA6T7L%2Bx%2F5BIwzofNoMrjiJtHWhujRojo4%2FYSfBTz7xPlS718T5l11UZg3IbA%2BVwit7mkl%2F%2B7GQ2HOJAyEHxh%2Bwm1Vo1sy3h4aD0xX%2FlNJ%2FTSULjyFjwiigNmrSZYT7rv297euiGT13ZUTQC2O9jUSDx42ccdu0c3SXJ3yua6heq4BjLEmWEQ9kYO5PVbbttO95zdgLaJnbFU%2ByIIRXQvAdou5hR6BxekJ3GncbjtFSMXFxDokhh7GndKKCCa1cDchhIgJzsXhQx382njSclaRQZdcz7esmWRDVpP9ML%2FhP5%2F0gMuxgVBNDE7xwkG8Wm%2BAMjtb04RBYH8YaheUQEAYdfdJWMUjWwUh9se7MWvjfW9D8Z7tDX5okikXMvqpAZn7TLe9g37UCPtEgvnmobYf99vHeSbUnmP%2Bzo1iF%2FhvxATEmvaU5cNGpXjz3LweH%2BcevA1nhYaWmngGXBHe4%2B0go3nbMwjQQM%2B9kDvF2gaJDDJX%2FceAyvB5VfFQq9gEUzCFspSaKM%2Br5hsOfD9pNSKhdzpFhhqQQPdT1xx8NnWCF%2BVUZMI0FzaRePQ72bUZs81NuI77KkcFvTeakfDPppKROSf9a2d%2BDS67o5bZTditdFtTH19Bgh1knhL0TtoMNP5mr0GOqUBXW9mWYyMrpVG5CCpWrZBNih5F%2FcmR%2B1OR2X%2FZmK9lPWzw5i2ZzlFodj8VBmLBssDEhgP2kSlctEkcFivLH4%2FShNGn5vy6ytZtNNq8GjYBShA0qLb%2FjaVTNrZAUzM%2F1JnJiSTJUWBsFE7A7AkZP3mK4K8agTTxhaG08Zauo4HcvqpMS0HKqSRrnivITKiYNRR2LPWpN%2B1ofMhXHsSbF2JKRAvOxip&X-Amz-Signature=2e36f5bd79cc9945fdec3e3346ea7a377d642caebd7be485f48fd31b4b0c7439&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFYM6O2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE8IZEeHzR3itOSlmCl7eP6XYDh65CmF%2FKN8YE4Bk%2FN2AiEA4fKe%2BihNutOQXIvhM10MeAYu4FTUcqToIHTR7kXQIDAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxToVfDeYA%2Fm52DCrcA6T7L%2Bx%2F5BIwzofNoMrjiJtHWhujRojo4%2FYSfBTz7xPlS718T5l11UZg3IbA%2BVwit7mkl%2F%2B7GQ2HOJAyEHxh%2Bwm1Vo1sy3h4aD0xX%2FlNJ%2FTSULjyFjwiigNmrSZYT7rv297euiGT13ZUTQC2O9jUSDx42ccdu0c3SXJ3yua6heq4BjLEmWEQ9kYO5PVbbttO95zdgLaJnbFU%2ByIIRXQvAdou5hR6BxekJ3GncbjtFSMXFxDokhh7GndKKCCa1cDchhIgJzsXhQx382njSclaRQZdcz7esmWRDVpP9ML%2FhP5%2F0gMuxgVBNDE7xwkG8Wm%2BAMjtb04RBYH8YaheUQEAYdfdJWMUjWwUh9se7MWvjfW9D8Z7tDX5okikXMvqpAZn7TLe9g37UCPtEgvnmobYf99vHeSbUnmP%2Bzo1iF%2FhvxATEmvaU5cNGpXjz3LweH%2BcevA1nhYaWmngGXBHe4%2B0go3nbMwjQQM%2B9kDvF2gaJDDJX%2FceAyvB5VfFQq9gEUzCFspSaKM%2Br5hsOfD9pNSKhdzpFhhqQQPdT1xx8NnWCF%2BVUZMI0FzaRePQ72bUZs81NuI77KkcFvTeakfDPppKROSf9a2d%2BDS67o5bZTditdFtTH19Bgh1knhL0TtoMNP5mr0GOqUBXW9mWYyMrpVG5CCpWrZBNih5F%2FcmR%2B1OR2X%2FZmK9lPWzw5i2ZzlFodj8VBmLBssDEhgP2kSlctEkcFivLH4%2FShNGn5vy6ytZtNNq8GjYBShA0qLb%2FjaVTNrZAUzM%2F1JnJiSTJUWBsFE7A7AkZP3mK4K8agTTxhaG08Zauo4HcvqpMS0HKqSRrnivITKiYNRR2LPWpN%2B1ofMhXHsSbF2JKRAvOxip&X-Amz-Signature=1da0de4eed2e4802dda2f8b55eb85d54cc3cec20a83b06580b4d8d6a2677fb71&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFYM6O2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE8IZEeHzR3itOSlmCl7eP6XYDh65CmF%2FKN8YE4Bk%2FN2AiEA4fKe%2BihNutOQXIvhM10MeAYu4FTUcqToIHTR7kXQIDAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMxToVfDeYA%2Fm52DCrcA6T7L%2Bx%2F5BIwzofNoMrjiJtHWhujRojo4%2FYSfBTz7xPlS718T5l11UZg3IbA%2BVwit7mkl%2F%2B7GQ2HOJAyEHxh%2Bwm1Vo1sy3h4aD0xX%2FlNJ%2FTSULjyFjwiigNmrSZYT7rv297euiGT13ZUTQC2O9jUSDx42ccdu0c3SXJ3yua6heq4BjLEmWEQ9kYO5PVbbttO95zdgLaJnbFU%2ByIIRXQvAdou5hR6BxekJ3GncbjtFSMXFxDokhh7GndKKCCa1cDchhIgJzsXhQx382njSclaRQZdcz7esmWRDVpP9ML%2FhP5%2F0gMuxgVBNDE7xwkG8Wm%2BAMjtb04RBYH8YaheUQEAYdfdJWMUjWwUh9se7MWvjfW9D8Z7tDX5okikXMvqpAZn7TLe9g37UCPtEgvnmobYf99vHeSbUnmP%2Bzo1iF%2FhvxATEmvaU5cNGpXjz3LweH%2BcevA1nhYaWmngGXBHe4%2B0go3nbMwjQQM%2B9kDvF2gaJDDJX%2FceAyvB5VfFQq9gEUzCFspSaKM%2Br5hsOfD9pNSKhdzpFhhqQQPdT1xx8NnWCF%2BVUZMI0FzaRePQ72bUZs81NuI77KkcFvTeakfDPppKROSf9a2d%2BDS67o5bZTditdFtTH19Bgh1knhL0TtoMNP5mr0GOqUBXW9mWYyMrpVG5CCpWrZBNih5F%2FcmR%2B1OR2X%2FZmK9lPWzw5i2ZzlFodj8VBmLBssDEhgP2kSlctEkcFivLH4%2FShNGn5vy6ytZtNNq8GjYBShA0qLb%2FjaVTNrZAUzM%2F1JnJiSTJUWBsFE7A7AkZP3mK4K8agTTxhaG08Zauo4HcvqpMS0HKqSRrnivITKiYNRR2LPWpN%2B1ofMhXHsSbF2JKRAvOxip&X-Amz-Signature=6452ed556bb0443c5894673b088c1b9fa7302e30ad9cf28410317153709a27a6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
