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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5RVV5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFx0wHwmceBE0Bj8nNcwtANRZ0GJ2hzxMDZxnPjqQJAkAiA%2Bhjrqf2P588E6j0R6hUcxIrPiS4dwTvp9JLL0aEKjjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSxJJBW5vklLeuqIhKtwDNzbtqnjkQK7WPD6ACiQV1k55ta906ADVcjmS1saQBtS24%2FCty74qQJt05qOr36lERYMjAntSNuDch8U%2F0iNBdyd8cuS0CUYFL4ZdybnDEkuWa2t9ZJkn7WPJab%2FRl02HQt3YikTCMfaLz6Qn%2F%2BE%2Bz0XA%2BmyxTrSIteKc4BBTExdhtfJOkjcEesFv6W356IrO9PQBc7%2F13c79cetpnT3G%2BOZYWShLAxZhPzMkIrE%2BMJ2L2Zozx9XMrLAS8TaU%2BO3g6C1Zpb%2BFkCNa4S1XgEiBEM6FAmOYKs9A%2FrH27UiJ8DkNFHvVUsgD6%2FmSd1Q9q3ar5KG1n4WDZ3BENawO%2F%2BSPhmGjbLBmzisATwHBA6ERJ6WVCu1tC3ccm1%2BsyR5slP%2Baki9hsNlEUhx9KdyYzTynOWoWWHpvMbIW%2B6Yz%2FeBTuhLWwsfmn%2BYURaVeUkmZXSURVN5Swyek28jBdkd%2FQ1bIfd7ZVg13WvJRCeht4gg6EEvr7qh%2FGgO5RDnSGjZRK%2BlkcqT6zx5i5Sk9GMtkcDEHM2fTukko9S9Rh7HXWuG0EJa%2B72WqQgYIBzZMhY2xEXBhfW2ndel8rvNxVIfxGwSmXm%2B5oQY9K%2BhbsYER%2BPdohsW8b4Rs1vY%2F6kMBOTkw1tyuvgY6pgHZv%2BjdIDH6GVePsFHVemH99i8kr6Xly%2FnBgpMVNpo%2B2eMdqvZ7Ffdc5YHreyHaBYTK2nqpTqgp2PS%2BX1R9abvOS5kyniSgPEfD%2FkIHDKeAWYfxVK5LXtplVGaRUNumf93W8xQXPWf72dcwGgb7hjEA1cvDrZA9Dul3Hs6mj2GLkC6YtOnVzyzGesu1FusUCRPX026Or56Nm3n5Bw%2Fx%2F3g3Px4KDzSq&X-Amz-Signature=0e1cbdd8576a043bca19d441f8a7c36cbd33f3659a6b2c8dc7e3aff8c5fa1baa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5RVV5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFx0wHwmceBE0Bj8nNcwtANRZ0GJ2hzxMDZxnPjqQJAkAiA%2Bhjrqf2P588E6j0R6hUcxIrPiS4dwTvp9JLL0aEKjjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSxJJBW5vklLeuqIhKtwDNzbtqnjkQK7WPD6ACiQV1k55ta906ADVcjmS1saQBtS24%2FCty74qQJt05qOr36lERYMjAntSNuDch8U%2F0iNBdyd8cuS0CUYFL4ZdybnDEkuWa2t9ZJkn7WPJab%2FRl02HQt3YikTCMfaLz6Qn%2F%2BE%2Bz0XA%2BmyxTrSIteKc4BBTExdhtfJOkjcEesFv6W356IrO9PQBc7%2F13c79cetpnT3G%2BOZYWShLAxZhPzMkIrE%2BMJ2L2Zozx9XMrLAS8TaU%2BO3g6C1Zpb%2BFkCNa4S1XgEiBEM6FAmOYKs9A%2FrH27UiJ8DkNFHvVUsgD6%2FmSd1Q9q3ar5KG1n4WDZ3BENawO%2F%2BSPhmGjbLBmzisATwHBA6ERJ6WVCu1tC3ccm1%2BsyR5slP%2Baki9hsNlEUhx9KdyYzTynOWoWWHpvMbIW%2B6Yz%2FeBTuhLWwsfmn%2BYURaVeUkmZXSURVN5Swyek28jBdkd%2FQ1bIfd7ZVg13WvJRCeht4gg6EEvr7qh%2FGgO5RDnSGjZRK%2BlkcqT6zx5i5Sk9GMtkcDEHM2fTukko9S9Rh7HXWuG0EJa%2B72WqQgYIBzZMhY2xEXBhfW2ndel8rvNxVIfxGwSmXm%2B5oQY9K%2BhbsYER%2BPdohsW8b4Rs1vY%2F6kMBOTkw1tyuvgY6pgHZv%2BjdIDH6GVePsFHVemH99i8kr6Xly%2FnBgpMVNpo%2B2eMdqvZ7Ffdc5YHreyHaBYTK2nqpTqgp2PS%2BX1R9abvOS5kyniSgPEfD%2FkIHDKeAWYfxVK5LXtplVGaRUNumf93W8xQXPWf72dcwGgb7hjEA1cvDrZA9Dul3Hs6mj2GLkC6YtOnVzyzGesu1FusUCRPX026Or56Nm3n5Bw%2Fx%2F3g3Px4KDzSq&X-Amz-Signature=b7114166db9ad43cbc31171ec3974d4da1fc624ff26fdf86d22dc0c16e3423de&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5RVV5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFx0wHwmceBE0Bj8nNcwtANRZ0GJ2hzxMDZxnPjqQJAkAiA%2Bhjrqf2P588E6j0R6hUcxIrPiS4dwTvp9JLL0aEKjjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSxJJBW5vklLeuqIhKtwDNzbtqnjkQK7WPD6ACiQV1k55ta906ADVcjmS1saQBtS24%2FCty74qQJt05qOr36lERYMjAntSNuDch8U%2F0iNBdyd8cuS0CUYFL4ZdybnDEkuWa2t9ZJkn7WPJab%2FRl02HQt3YikTCMfaLz6Qn%2F%2BE%2Bz0XA%2BmyxTrSIteKc4BBTExdhtfJOkjcEesFv6W356IrO9PQBc7%2F13c79cetpnT3G%2BOZYWShLAxZhPzMkIrE%2BMJ2L2Zozx9XMrLAS8TaU%2BO3g6C1Zpb%2BFkCNa4S1XgEiBEM6FAmOYKs9A%2FrH27UiJ8DkNFHvVUsgD6%2FmSd1Q9q3ar5KG1n4WDZ3BENawO%2F%2BSPhmGjbLBmzisATwHBA6ERJ6WVCu1tC3ccm1%2BsyR5slP%2Baki9hsNlEUhx9KdyYzTynOWoWWHpvMbIW%2B6Yz%2FeBTuhLWwsfmn%2BYURaVeUkmZXSURVN5Swyek28jBdkd%2FQ1bIfd7ZVg13WvJRCeht4gg6EEvr7qh%2FGgO5RDnSGjZRK%2BlkcqT6zx5i5Sk9GMtkcDEHM2fTukko9S9Rh7HXWuG0EJa%2B72WqQgYIBzZMhY2xEXBhfW2ndel8rvNxVIfxGwSmXm%2B5oQY9K%2BhbsYER%2BPdohsW8b4Rs1vY%2F6kMBOTkw1tyuvgY6pgHZv%2BjdIDH6GVePsFHVemH99i8kr6Xly%2FnBgpMVNpo%2B2eMdqvZ7Ffdc5YHreyHaBYTK2nqpTqgp2PS%2BX1R9abvOS5kyniSgPEfD%2FkIHDKeAWYfxVK5LXtplVGaRUNumf93W8xQXPWf72dcwGgb7hjEA1cvDrZA9Dul3Hs6mj2GLkC6YtOnVzyzGesu1FusUCRPX026Or56Nm3n5Bw%2Fx%2F3g3Px4KDzSq&X-Amz-Signature=7bf81a319eb3a04d587f77f2b4248c38975591b11f0c9643a10df91e235fb644&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5RVV5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFx0wHwmceBE0Bj8nNcwtANRZ0GJ2hzxMDZxnPjqQJAkAiA%2Bhjrqf2P588E6j0R6hUcxIrPiS4dwTvp9JLL0aEKjjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSxJJBW5vklLeuqIhKtwDNzbtqnjkQK7WPD6ACiQV1k55ta906ADVcjmS1saQBtS24%2FCty74qQJt05qOr36lERYMjAntSNuDch8U%2F0iNBdyd8cuS0CUYFL4ZdybnDEkuWa2t9ZJkn7WPJab%2FRl02HQt3YikTCMfaLz6Qn%2F%2BE%2Bz0XA%2BmyxTrSIteKc4BBTExdhtfJOkjcEesFv6W356IrO9PQBc7%2F13c79cetpnT3G%2BOZYWShLAxZhPzMkIrE%2BMJ2L2Zozx9XMrLAS8TaU%2BO3g6C1Zpb%2BFkCNa4S1XgEiBEM6FAmOYKs9A%2FrH27UiJ8DkNFHvVUsgD6%2FmSd1Q9q3ar5KG1n4WDZ3BENawO%2F%2BSPhmGjbLBmzisATwHBA6ERJ6WVCu1tC3ccm1%2BsyR5slP%2Baki9hsNlEUhx9KdyYzTynOWoWWHpvMbIW%2B6Yz%2FeBTuhLWwsfmn%2BYURaVeUkmZXSURVN5Swyek28jBdkd%2FQ1bIfd7ZVg13WvJRCeht4gg6EEvr7qh%2FGgO5RDnSGjZRK%2BlkcqT6zx5i5Sk9GMtkcDEHM2fTukko9S9Rh7HXWuG0EJa%2B72WqQgYIBzZMhY2xEXBhfW2ndel8rvNxVIfxGwSmXm%2B5oQY9K%2BhbsYER%2BPdohsW8b4Rs1vY%2F6kMBOTkw1tyuvgY6pgHZv%2BjdIDH6GVePsFHVemH99i8kr6Xly%2FnBgpMVNpo%2B2eMdqvZ7Ffdc5YHreyHaBYTK2nqpTqgp2PS%2BX1R9abvOS5kyniSgPEfD%2FkIHDKeAWYfxVK5LXtplVGaRUNumf93W8xQXPWf72dcwGgb7hjEA1cvDrZA9Dul3Hs6mj2GLkC6YtOnVzyzGesu1FusUCRPX026Or56Nm3n5Bw%2Fx%2F3g3Px4KDzSq&X-Amz-Signature=c5d4451ef86c7ad4203163637a3fad446aa31225585f18f84948ace32edfc66b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5RVV5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFx0wHwmceBE0Bj8nNcwtANRZ0GJ2hzxMDZxnPjqQJAkAiA%2Bhjrqf2P588E6j0R6hUcxIrPiS4dwTvp9JLL0aEKjjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSxJJBW5vklLeuqIhKtwDNzbtqnjkQK7WPD6ACiQV1k55ta906ADVcjmS1saQBtS24%2FCty74qQJt05qOr36lERYMjAntSNuDch8U%2F0iNBdyd8cuS0CUYFL4ZdybnDEkuWa2t9ZJkn7WPJab%2FRl02HQt3YikTCMfaLz6Qn%2F%2BE%2Bz0XA%2BmyxTrSIteKc4BBTExdhtfJOkjcEesFv6W356IrO9PQBc7%2F13c79cetpnT3G%2BOZYWShLAxZhPzMkIrE%2BMJ2L2Zozx9XMrLAS8TaU%2BO3g6C1Zpb%2BFkCNa4S1XgEiBEM6FAmOYKs9A%2FrH27UiJ8DkNFHvVUsgD6%2FmSd1Q9q3ar5KG1n4WDZ3BENawO%2F%2BSPhmGjbLBmzisATwHBA6ERJ6WVCu1tC3ccm1%2BsyR5slP%2Baki9hsNlEUhx9KdyYzTynOWoWWHpvMbIW%2B6Yz%2FeBTuhLWwsfmn%2BYURaVeUkmZXSURVN5Swyek28jBdkd%2FQ1bIfd7ZVg13WvJRCeht4gg6EEvr7qh%2FGgO5RDnSGjZRK%2BlkcqT6zx5i5Sk9GMtkcDEHM2fTukko9S9Rh7HXWuG0EJa%2B72WqQgYIBzZMhY2xEXBhfW2ndel8rvNxVIfxGwSmXm%2B5oQY9K%2BhbsYER%2BPdohsW8b4Rs1vY%2F6kMBOTkw1tyuvgY6pgHZv%2BjdIDH6GVePsFHVemH99i8kr6Xly%2FnBgpMVNpo%2B2eMdqvZ7Ffdc5YHreyHaBYTK2nqpTqgp2PS%2BX1R9abvOS5kyniSgPEfD%2FkIHDKeAWYfxVK5LXtplVGaRUNumf93W8xQXPWf72dcwGgb7hjEA1cvDrZA9Dul3Hs6mj2GLkC6YtOnVzyzGesu1FusUCRPX026Or56Nm3n5Bw%2Fx%2F3g3Px4KDzSq&X-Amz-Signature=5bf3e5b411021893c2975518b54438fb676666839cb4b28cfcb192ee1a5131fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5RVV5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFx0wHwmceBE0Bj8nNcwtANRZ0GJ2hzxMDZxnPjqQJAkAiA%2Bhjrqf2P588E6j0R6hUcxIrPiS4dwTvp9JLL0aEKjjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSxJJBW5vklLeuqIhKtwDNzbtqnjkQK7WPD6ACiQV1k55ta906ADVcjmS1saQBtS24%2FCty74qQJt05qOr36lERYMjAntSNuDch8U%2F0iNBdyd8cuS0CUYFL4ZdybnDEkuWa2t9ZJkn7WPJab%2FRl02HQt3YikTCMfaLz6Qn%2F%2BE%2Bz0XA%2BmyxTrSIteKc4BBTExdhtfJOkjcEesFv6W356IrO9PQBc7%2F13c79cetpnT3G%2BOZYWShLAxZhPzMkIrE%2BMJ2L2Zozx9XMrLAS8TaU%2BO3g6C1Zpb%2BFkCNa4S1XgEiBEM6FAmOYKs9A%2FrH27UiJ8DkNFHvVUsgD6%2FmSd1Q9q3ar5KG1n4WDZ3BENawO%2F%2BSPhmGjbLBmzisATwHBA6ERJ6WVCu1tC3ccm1%2BsyR5slP%2Baki9hsNlEUhx9KdyYzTynOWoWWHpvMbIW%2B6Yz%2FeBTuhLWwsfmn%2BYURaVeUkmZXSURVN5Swyek28jBdkd%2FQ1bIfd7ZVg13WvJRCeht4gg6EEvr7qh%2FGgO5RDnSGjZRK%2BlkcqT6zx5i5Sk9GMtkcDEHM2fTukko9S9Rh7HXWuG0EJa%2B72WqQgYIBzZMhY2xEXBhfW2ndel8rvNxVIfxGwSmXm%2B5oQY9K%2BhbsYER%2BPdohsW8b4Rs1vY%2F6kMBOTkw1tyuvgY6pgHZv%2BjdIDH6GVePsFHVemH99i8kr6Xly%2FnBgpMVNpo%2B2eMdqvZ7Ffdc5YHreyHaBYTK2nqpTqgp2PS%2BX1R9abvOS5kyniSgPEfD%2FkIHDKeAWYfxVK5LXtplVGaRUNumf93W8xQXPWf72dcwGgb7hjEA1cvDrZA9Dul3Hs6mj2GLkC6YtOnVzyzGesu1FusUCRPX026Or56Nm3n5Bw%2Fx%2F3g3Px4KDzSq&X-Amz-Signature=ef1743aebd17427d6012f2bb04f37762859260d1ae8ed75779bfca2d5bdd19e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5RVV5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFx0wHwmceBE0Bj8nNcwtANRZ0GJ2hzxMDZxnPjqQJAkAiA%2Bhjrqf2P588E6j0R6hUcxIrPiS4dwTvp9JLL0aEKjjCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSxJJBW5vklLeuqIhKtwDNzbtqnjkQK7WPD6ACiQV1k55ta906ADVcjmS1saQBtS24%2FCty74qQJt05qOr36lERYMjAntSNuDch8U%2F0iNBdyd8cuS0CUYFL4ZdybnDEkuWa2t9ZJkn7WPJab%2FRl02HQt3YikTCMfaLz6Qn%2F%2BE%2Bz0XA%2BmyxTrSIteKc4BBTExdhtfJOkjcEesFv6W356IrO9PQBc7%2F13c79cetpnT3G%2BOZYWShLAxZhPzMkIrE%2BMJ2L2Zozx9XMrLAS8TaU%2BO3g6C1Zpb%2BFkCNa4S1XgEiBEM6FAmOYKs9A%2FrH27UiJ8DkNFHvVUsgD6%2FmSd1Q9q3ar5KG1n4WDZ3BENawO%2F%2BSPhmGjbLBmzisATwHBA6ERJ6WVCu1tC3ccm1%2BsyR5slP%2Baki9hsNlEUhx9KdyYzTynOWoWWHpvMbIW%2B6Yz%2FeBTuhLWwsfmn%2BYURaVeUkmZXSURVN5Swyek28jBdkd%2FQ1bIfd7ZVg13WvJRCeht4gg6EEvr7qh%2FGgO5RDnSGjZRK%2BlkcqT6zx5i5Sk9GMtkcDEHM2fTukko9S9Rh7HXWuG0EJa%2B72WqQgYIBzZMhY2xEXBhfW2ndel8rvNxVIfxGwSmXm%2B5oQY9K%2BhbsYER%2BPdohsW8b4Rs1vY%2F6kMBOTkw1tyuvgY6pgHZv%2BjdIDH6GVePsFHVemH99i8kr6Xly%2FnBgpMVNpo%2B2eMdqvZ7Ffdc5YHreyHaBYTK2nqpTqgp2PS%2BX1R9abvOS5kyniSgPEfD%2FkIHDKeAWYfxVK5LXtplVGaRUNumf93W8xQXPWf72dcwGgb7hjEA1cvDrZA9Dul3Hs6mj2GLkC6YtOnVzyzGesu1FusUCRPX026Or56Nm3n5Bw%2Fx%2F3g3Px4KDzSq&X-Amz-Signature=60dc314adb54b306f2e2e2257f9ee9002db994848a91c555e9208bcf5b8b09a9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
