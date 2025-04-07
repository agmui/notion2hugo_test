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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE6VFY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIlKGbXfuJ%2FhHA2OsFkY8NTn7zSW1ktdvnLbLXWI%2F0wIgO4PsbdhRv%2B6cItyD8P3VX%2BJN8jJyq0L%2Fx4mDMzVWZEQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNCkAnUCzJGNlMWMircA2gx9mBDInWSq2z9KSPmqUNFEQS7ZTSfZEGvFaChaBu%2B%2FD%2FB%2BxaRnKJ6MCiqBWvN0sh0k%2FdWOUM1x5LThAM3zHALIaI7myp1u5nsQI3DD3F%2BV7egCWnvBiFVZRXU1jpcB%2BCZw9wnAkDkbr%2F0ue%2FlKJRB1RqiznF41uEOd1KD6ydu0YbMMjFp%2FkX7oFlMrAnMpcMFVI8LG%2BHtIObmzSWjwZ%2B9deGK2a2AoG3UNjf%2BjB5xDcnRagE9p%2FYs4w3gwzla3UDm7ClKyEPHFIsdEVeEbmUwvAfFdP%2BkXy789lZhr2grznMeb4B7R8keMeelpurcEeT50BUeQRSFEmLQQOHfY3HsaW%2BEOG696dctrllgXAuEdrceeQKiJjb0yxot2rYGH0KLMs%2Fyq%2BErr3FvBZvEADJcThsj1NDb0Um0KiXzPN4T3oXheoDimwvAYyK4ic%2FEL4xnJgmGFV4DD5fGqXbV5f5fS4u3kgwzREDcgDZp4XiMyEt5k%2F%2F%2FFml11TZLdqedJNLhl6j5FPwmIfZqbXs%2BoBft5Y13bkv9aSZoSCiM6krtTbP5uhENS01rbPM%2B8Zr3GoWInHrCfMIBRsUl6QB6%2BrLKm9DHU4rf%2BGAXGu70A40OkHKNPWVDyju%2Byw8fMKDsz78GOqUBHkmQ6R2Tbzap8x5zOLs7%2B3RkaatvuPU2rUOjbxZAYSzaFmvKnBpnkwczo00Q%2BdupwMcPTD0DlZHGrq706wNZAla52bLkOx8mfIsf1obZbxmbO8BzxG5CByUh9Z7QrP9Am5vD0%2BuxzpFCOxvXAvHfUfOymiSJrh2tCsReARRTUyW9AKlXDxHROeKkoGKQQXYiua83Fhxkx%2FP2YIcCYNpSZ8nf4DS7&X-Amz-Signature=40e736d9aa2848afb4693aa2f6ca183cdc21b6333c994ef0844d60fab9ae0e89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE6VFY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIlKGbXfuJ%2FhHA2OsFkY8NTn7zSW1ktdvnLbLXWI%2F0wIgO4PsbdhRv%2B6cItyD8P3VX%2BJN8jJyq0L%2Fx4mDMzVWZEQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNCkAnUCzJGNlMWMircA2gx9mBDInWSq2z9KSPmqUNFEQS7ZTSfZEGvFaChaBu%2B%2FD%2FB%2BxaRnKJ6MCiqBWvN0sh0k%2FdWOUM1x5LThAM3zHALIaI7myp1u5nsQI3DD3F%2BV7egCWnvBiFVZRXU1jpcB%2BCZw9wnAkDkbr%2F0ue%2FlKJRB1RqiznF41uEOd1KD6ydu0YbMMjFp%2FkX7oFlMrAnMpcMFVI8LG%2BHtIObmzSWjwZ%2B9deGK2a2AoG3UNjf%2BjB5xDcnRagE9p%2FYs4w3gwzla3UDm7ClKyEPHFIsdEVeEbmUwvAfFdP%2BkXy789lZhr2grznMeb4B7R8keMeelpurcEeT50BUeQRSFEmLQQOHfY3HsaW%2BEOG696dctrllgXAuEdrceeQKiJjb0yxot2rYGH0KLMs%2Fyq%2BErr3FvBZvEADJcThsj1NDb0Um0KiXzPN4T3oXheoDimwvAYyK4ic%2FEL4xnJgmGFV4DD5fGqXbV5f5fS4u3kgwzREDcgDZp4XiMyEt5k%2F%2F%2FFml11TZLdqedJNLhl6j5FPwmIfZqbXs%2BoBft5Y13bkv9aSZoSCiM6krtTbP5uhENS01rbPM%2B8Zr3GoWInHrCfMIBRsUl6QB6%2BrLKm9DHU4rf%2BGAXGu70A40OkHKNPWVDyju%2Byw8fMKDsz78GOqUBHkmQ6R2Tbzap8x5zOLs7%2B3RkaatvuPU2rUOjbxZAYSzaFmvKnBpnkwczo00Q%2BdupwMcPTD0DlZHGrq706wNZAla52bLkOx8mfIsf1obZbxmbO8BzxG5CByUh9Z7QrP9Am5vD0%2BuxzpFCOxvXAvHfUfOymiSJrh2tCsReARRTUyW9AKlXDxHROeKkoGKQQXYiua83Fhxkx%2FP2YIcCYNpSZ8nf4DS7&X-Amz-Signature=48f986caa68a4288f474f62ccab35fe2b21f53d16418bb865e6c2de18351eec9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE6VFY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIlKGbXfuJ%2FhHA2OsFkY8NTn7zSW1ktdvnLbLXWI%2F0wIgO4PsbdhRv%2B6cItyD8P3VX%2BJN8jJyq0L%2Fx4mDMzVWZEQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNCkAnUCzJGNlMWMircA2gx9mBDInWSq2z9KSPmqUNFEQS7ZTSfZEGvFaChaBu%2B%2FD%2FB%2BxaRnKJ6MCiqBWvN0sh0k%2FdWOUM1x5LThAM3zHALIaI7myp1u5nsQI3DD3F%2BV7egCWnvBiFVZRXU1jpcB%2BCZw9wnAkDkbr%2F0ue%2FlKJRB1RqiznF41uEOd1KD6ydu0YbMMjFp%2FkX7oFlMrAnMpcMFVI8LG%2BHtIObmzSWjwZ%2B9deGK2a2AoG3UNjf%2BjB5xDcnRagE9p%2FYs4w3gwzla3UDm7ClKyEPHFIsdEVeEbmUwvAfFdP%2BkXy789lZhr2grznMeb4B7R8keMeelpurcEeT50BUeQRSFEmLQQOHfY3HsaW%2BEOG696dctrllgXAuEdrceeQKiJjb0yxot2rYGH0KLMs%2Fyq%2BErr3FvBZvEADJcThsj1NDb0Um0KiXzPN4T3oXheoDimwvAYyK4ic%2FEL4xnJgmGFV4DD5fGqXbV5f5fS4u3kgwzREDcgDZp4XiMyEt5k%2F%2F%2FFml11TZLdqedJNLhl6j5FPwmIfZqbXs%2BoBft5Y13bkv9aSZoSCiM6krtTbP5uhENS01rbPM%2B8Zr3GoWInHrCfMIBRsUl6QB6%2BrLKm9DHU4rf%2BGAXGu70A40OkHKNPWVDyju%2Byw8fMKDsz78GOqUBHkmQ6R2Tbzap8x5zOLs7%2B3RkaatvuPU2rUOjbxZAYSzaFmvKnBpnkwczo00Q%2BdupwMcPTD0DlZHGrq706wNZAla52bLkOx8mfIsf1obZbxmbO8BzxG5CByUh9Z7QrP9Am5vD0%2BuxzpFCOxvXAvHfUfOymiSJrh2tCsReARRTUyW9AKlXDxHROeKkoGKQQXYiua83Fhxkx%2FP2YIcCYNpSZ8nf4DS7&X-Amz-Signature=5d9bae0e1e035f4c9a8b6d0e9758ed249698c62d3c8f6163ed66dbb7dcae5b11&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE6VFY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIlKGbXfuJ%2FhHA2OsFkY8NTn7zSW1ktdvnLbLXWI%2F0wIgO4PsbdhRv%2B6cItyD8P3VX%2BJN8jJyq0L%2Fx4mDMzVWZEQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNCkAnUCzJGNlMWMircA2gx9mBDInWSq2z9KSPmqUNFEQS7ZTSfZEGvFaChaBu%2B%2FD%2FB%2BxaRnKJ6MCiqBWvN0sh0k%2FdWOUM1x5LThAM3zHALIaI7myp1u5nsQI3DD3F%2BV7egCWnvBiFVZRXU1jpcB%2BCZw9wnAkDkbr%2F0ue%2FlKJRB1RqiznF41uEOd1KD6ydu0YbMMjFp%2FkX7oFlMrAnMpcMFVI8LG%2BHtIObmzSWjwZ%2B9deGK2a2AoG3UNjf%2BjB5xDcnRagE9p%2FYs4w3gwzla3UDm7ClKyEPHFIsdEVeEbmUwvAfFdP%2BkXy789lZhr2grznMeb4B7R8keMeelpurcEeT50BUeQRSFEmLQQOHfY3HsaW%2BEOG696dctrllgXAuEdrceeQKiJjb0yxot2rYGH0KLMs%2Fyq%2BErr3FvBZvEADJcThsj1NDb0Um0KiXzPN4T3oXheoDimwvAYyK4ic%2FEL4xnJgmGFV4DD5fGqXbV5f5fS4u3kgwzREDcgDZp4XiMyEt5k%2F%2F%2FFml11TZLdqedJNLhl6j5FPwmIfZqbXs%2BoBft5Y13bkv9aSZoSCiM6krtTbP5uhENS01rbPM%2B8Zr3GoWInHrCfMIBRsUl6QB6%2BrLKm9DHU4rf%2BGAXGu70A40OkHKNPWVDyju%2Byw8fMKDsz78GOqUBHkmQ6R2Tbzap8x5zOLs7%2B3RkaatvuPU2rUOjbxZAYSzaFmvKnBpnkwczo00Q%2BdupwMcPTD0DlZHGrq706wNZAla52bLkOx8mfIsf1obZbxmbO8BzxG5CByUh9Z7QrP9Am5vD0%2BuxzpFCOxvXAvHfUfOymiSJrh2tCsReARRTUyW9AKlXDxHROeKkoGKQQXYiua83Fhxkx%2FP2YIcCYNpSZ8nf4DS7&X-Amz-Signature=bbccedb39b1c198d7e5311935af516e8d557027bd0c1522168151a25c1e23382&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE6VFY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIlKGbXfuJ%2FhHA2OsFkY8NTn7zSW1ktdvnLbLXWI%2F0wIgO4PsbdhRv%2B6cItyD8P3VX%2BJN8jJyq0L%2Fx4mDMzVWZEQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNCkAnUCzJGNlMWMircA2gx9mBDInWSq2z9KSPmqUNFEQS7ZTSfZEGvFaChaBu%2B%2FD%2FB%2BxaRnKJ6MCiqBWvN0sh0k%2FdWOUM1x5LThAM3zHALIaI7myp1u5nsQI3DD3F%2BV7egCWnvBiFVZRXU1jpcB%2BCZw9wnAkDkbr%2F0ue%2FlKJRB1RqiznF41uEOd1KD6ydu0YbMMjFp%2FkX7oFlMrAnMpcMFVI8LG%2BHtIObmzSWjwZ%2B9deGK2a2AoG3UNjf%2BjB5xDcnRagE9p%2FYs4w3gwzla3UDm7ClKyEPHFIsdEVeEbmUwvAfFdP%2BkXy789lZhr2grznMeb4B7R8keMeelpurcEeT50BUeQRSFEmLQQOHfY3HsaW%2BEOG696dctrllgXAuEdrceeQKiJjb0yxot2rYGH0KLMs%2Fyq%2BErr3FvBZvEADJcThsj1NDb0Um0KiXzPN4T3oXheoDimwvAYyK4ic%2FEL4xnJgmGFV4DD5fGqXbV5f5fS4u3kgwzREDcgDZp4XiMyEt5k%2F%2F%2FFml11TZLdqedJNLhl6j5FPwmIfZqbXs%2BoBft5Y13bkv9aSZoSCiM6krtTbP5uhENS01rbPM%2B8Zr3GoWInHrCfMIBRsUl6QB6%2BrLKm9DHU4rf%2BGAXGu70A40OkHKNPWVDyju%2Byw8fMKDsz78GOqUBHkmQ6R2Tbzap8x5zOLs7%2B3RkaatvuPU2rUOjbxZAYSzaFmvKnBpnkwczo00Q%2BdupwMcPTD0DlZHGrq706wNZAla52bLkOx8mfIsf1obZbxmbO8BzxG5CByUh9Z7QrP9Am5vD0%2BuxzpFCOxvXAvHfUfOymiSJrh2tCsReARRTUyW9AKlXDxHROeKkoGKQQXYiua83Fhxkx%2FP2YIcCYNpSZ8nf4DS7&X-Amz-Signature=fd9dd93d9eafe8082922ea11e5657af40b44b685245ef5a2dacb35349d243042&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE6VFY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIlKGbXfuJ%2FhHA2OsFkY8NTn7zSW1ktdvnLbLXWI%2F0wIgO4PsbdhRv%2B6cItyD8P3VX%2BJN8jJyq0L%2Fx4mDMzVWZEQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNCkAnUCzJGNlMWMircA2gx9mBDInWSq2z9KSPmqUNFEQS7ZTSfZEGvFaChaBu%2B%2FD%2FB%2BxaRnKJ6MCiqBWvN0sh0k%2FdWOUM1x5LThAM3zHALIaI7myp1u5nsQI3DD3F%2BV7egCWnvBiFVZRXU1jpcB%2BCZw9wnAkDkbr%2F0ue%2FlKJRB1RqiznF41uEOd1KD6ydu0YbMMjFp%2FkX7oFlMrAnMpcMFVI8LG%2BHtIObmzSWjwZ%2B9deGK2a2AoG3UNjf%2BjB5xDcnRagE9p%2FYs4w3gwzla3UDm7ClKyEPHFIsdEVeEbmUwvAfFdP%2BkXy789lZhr2grznMeb4B7R8keMeelpurcEeT50BUeQRSFEmLQQOHfY3HsaW%2BEOG696dctrllgXAuEdrceeQKiJjb0yxot2rYGH0KLMs%2Fyq%2BErr3FvBZvEADJcThsj1NDb0Um0KiXzPN4T3oXheoDimwvAYyK4ic%2FEL4xnJgmGFV4DD5fGqXbV5f5fS4u3kgwzREDcgDZp4XiMyEt5k%2F%2F%2FFml11TZLdqedJNLhl6j5FPwmIfZqbXs%2BoBft5Y13bkv9aSZoSCiM6krtTbP5uhENS01rbPM%2B8Zr3GoWInHrCfMIBRsUl6QB6%2BrLKm9DHU4rf%2BGAXGu70A40OkHKNPWVDyju%2Byw8fMKDsz78GOqUBHkmQ6R2Tbzap8x5zOLs7%2B3RkaatvuPU2rUOjbxZAYSzaFmvKnBpnkwczo00Q%2BdupwMcPTD0DlZHGrq706wNZAla52bLkOx8mfIsf1obZbxmbO8BzxG5CByUh9Z7QrP9Am5vD0%2BuxzpFCOxvXAvHfUfOymiSJrh2tCsReARRTUyW9AKlXDxHROeKkoGKQQXYiua83Fhxkx%2FP2YIcCYNpSZ8nf4DS7&X-Amz-Signature=f3e90a3e284731c34a2c9b2ed08f8a854dc65223fddfb99c21e20e308684ee68&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE6VFY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLIlKGbXfuJ%2FhHA2OsFkY8NTn7zSW1ktdvnLbLXWI%2F0wIgO4PsbdhRv%2B6cItyD8P3VX%2BJN8jJyq0L%2Fx4mDMzVWZEQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKNCkAnUCzJGNlMWMircA2gx9mBDInWSq2z9KSPmqUNFEQS7ZTSfZEGvFaChaBu%2B%2FD%2FB%2BxaRnKJ6MCiqBWvN0sh0k%2FdWOUM1x5LThAM3zHALIaI7myp1u5nsQI3DD3F%2BV7egCWnvBiFVZRXU1jpcB%2BCZw9wnAkDkbr%2F0ue%2FlKJRB1RqiznF41uEOd1KD6ydu0YbMMjFp%2FkX7oFlMrAnMpcMFVI8LG%2BHtIObmzSWjwZ%2B9deGK2a2AoG3UNjf%2BjB5xDcnRagE9p%2FYs4w3gwzla3UDm7ClKyEPHFIsdEVeEbmUwvAfFdP%2BkXy789lZhr2grznMeb4B7R8keMeelpurcEeT50BUeQRSFEmLQQOHfY3HsaW%2BEOG696dctrllgXAuEdrceeQKiJjb0yxot2rYGH0KLMs%2Fyq%2BErr3FvBZvEADJcThsj1NDb0Um0KiXzPN4T3oXheoDimwvAYyK4ic%2FEL4xnJgmGFV4DD5fGqXbV5f5fS4u3kgwzREDcgDZp4XiMyEt5k%2F%2F%2FFml11TZLdqedJNLhl6j5FPwmIfZqbXs%2BoBft5Y13bkv9aSZoSCiM6krtTbP5uhENS01rbPM%2B8Zr3GoWInHrCfMIBRsUl6QB6%2BrLKm9DHU4rf%2BGAXGu70A40OkHKNPWVDyju%2Byw8fMKDsz78GOqUBHkmQ6R2Tbzap8x5zOLs7%2B3RkaatvuPU2rUOjbxZAYSzaFmvKnBpnkwczo00Q%2BdupwMcPTD0DlZHGrq706wNZAla52bLkOx8mfIsf1obZbxmbO8BzxG5CByUh9Z7QrP9Am5vD0%2BuxzpFCOxvXAvHfUfOymiSJrh2tCsReARRTUyW9AKlXDxHROeKkoGKQQXYiua83Fhxkx%2FP2YIcCYNpSZ8nf4DS7&X-Amz-Signature=33dbd594bc528e3e4f7114bf64eab68856d1ee6bcb6ca5c3aff5531c16412dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
