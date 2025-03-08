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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYNWCHE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2ZW7KssESYCPV765nMDOlPq4%2FIiKGk9IyWtHgI81sOAiEAqaZg4m7laaRB6jSO4D5TnJOj4EoOZcHJnYntjrqVfFAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpfRNSth8jWrgUb4ircAwr8gzI22Jkdl6EKQapjbsxPacay%2FjJmGzN9%2BQNEIKSESTMCcYUSMx3nC48NZpGHF%2FeSRZ9xFNoPZA%2FGc4fgGoEEDbc46P78nc3t%2FmxSgn8CnkbfvPn%2BCmlfJbqc0i26yL42f3KEnCPKfhgybBZktd%2BSMT8t3wdoebek5XYEi30hFdZYtyaubRwL%2FO%2Fg0FM1sfipsz0wWalesb2GEInFgm0pUY3yE4yqzwG1kJ7iFGEQebzatrx6cr1Qe%2BGHlnqqCZaUQhuhE7A6xO0VwR1SgK%2FM3FdKDSxI8HTN791oto7zshM3kYPdwiSWdLxJWwiOzv0EsEOvPj49Yz1LwraFgnyNgsjmiGIPyy%2B%2BHa2aSDWeIwiUzRGPhse%2Fe81CowxaDpXtyr%2BMULcgKBAyLZ7kSGjpdDR4WFesYHPxTFQYWzEAQjocew%2B9F54xQi6Oxu3gQQzr7C4BzEYBLtuoXiqe3CiCnSZeqBEJBeLYrQqgQTuu42rka5OHWVyp9htKB%2BFBLsmNAn59PCZ5VsW2vrtu289kFThb0OMsEBUDcaHzIdUxU0yGYREsWdjjpM45B3pJBuUkavhaQAiOMXOwPVkd1t%2BgwIBVnQh4pDQefFJzjEEPhc9Eg%2FlZmJOYx3VbMKOer74GOqUBmHHYIAQDogjmf6o%2BuBT0Y%2BebrCrPQael6mrbx6tcoKtxCRwOvOGYQhSe71F8MoBxhMrISCHen3KL9bUQsBTZe86xTwByJHHTUA62qG93eflyEgY7vyyuLINLLLuxj46ljxoFKqoUDMcXwLjk6cmsAy5nHm078Fv%2FE1HgwNDEFkWkLYLwTxGJPQjG7QqWY6FtScy7E7%2FR3p5MmvESpI9Dd9vUeBz8&X-Amz-Signature=2cf15c8876fbcf218b08863e1dd4f2d1e0e8485e25187f7920e3b2a9f41af468&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYNWCHE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2ZW7KssESYCPV765nMDOlPq4%2FIiKGk9IyWtHgI81sOAiEAqaZg4m7laaRB6jSO4D5TnJOj4EoOZcHJnYntjrqVfFAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpfRNSth8jWrgUb4ircAwr8gzI22Jkdl6EKQapjbsxPacay%2FjJmGzN9%2BQNEIKSESTMCcYUSMx3nC48NZpGHF%2FeSRZ9xFNoPZA%2FGc4fgGoEEDbc46P78nc3t%2FmxSgn8CnkbfvPn%2BCmlfJbqc0i26yL42f3KEnCPKfhgybBZktd%2BSMT8t3wdoebek5XYEi30hFdZYtyaubRwL%2FO%2Fg0FM1sfipsz0wWalesb2GEInFgm0pUY3yE4yqzwG1kJ7iFGEQebzatrx6cr1Qe%2BGHlnqqCZaUQhuhE7A6xO0VwR1SgK%2FM3FdKDSxI8HTN791oto7zshM3kYPdwiSWdLxJWwiOzv0EsEOvPj49Yz1LwraFgnyNgsjmiGIPyy%2B%2BHa2aSDWeIwiUzRGPhse%2Fe81CowxaDpXtyr%2BMULcgKBAyLZ7kSGjpdDR4WFesYHPxTFQYWzEAQjocew%2B9F54xQi6Oxu3gQQzr7C4BzEYBLtuoXiqe3CiCnSZeqBEJBeLYrQqgQTuu42rka5OHWVyp9htKB%2BFBLsmNAn59PCZ5VsW2vrtu289kFThb0OMsEBUDcaHzIdUxU0yGYREsWdjjpM45B3pJBuUkavhaQAiOMXOwPVkd1t%2BgwIBVnQh4pDQefFJzjEEPhc9Eg%2FlZmJOYx3VbMKOer74GOqUBmHHYIAQDogjmf6o%2BuBT0Y%2BebrCrPQael6mrbx6tcoKtxCRwOvOGYQhSe71F8MoBxhMrISCHen3KL9bUQsBTZe86xTwByJHHTUA62qG93eflyEgY7vyyuLINLLLuxj46ljxoFKqoUDMcXwLjk6cmsAy5nHm078Fv%2FE1HgwNDEFkWkLYLwTxGJPQjG7QqWY6FtScy7E7%2FR3p5MmvESpI9Dd9vUeBz8&X-Amz-Signature=35e15ba8650331880156c51ef564bce91dd4ca11f9b5cde16f5c64e305588e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYNWCHE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2ZW7KssESYCPV765nMDOlPq4%2FIiKGk9IyWtHgI81sOAiEAqaZg4m7laaRB6jSO4D5TnJOj4EoOZcHJnYntjrqVfFAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpfRNSth8jWrgUb4ircAwr8gzI22Jkdl6EKQapjbsxPacay%2FjJmGzN9%2BQNEIKSESTMCcYUSMx3nC48NZpGHF%2FeSRZ9xFNoPZA%2FGc4fgGoEEDbc46P78nc3t%2FmxSgn8CnkbfvPn%2BCmlfJbqc0i26yL42f3KEnCPKfhgybBZktd%2BSMT8t3wdoebek5XYEi30hFdZYtyaubRwL%2FO%2Fg0FM1sfipsz0wWalesb2GEInFgm0pUY3yE4yqzwG1kJ7iFGEQebzatrx6cr1Qe%2BGHlnqqCZaUQhuhE7A6xO0VwR1SgK%2FM3FdKDSxI8HTN791oto7zshM3kYPdwiSWdLxJWwiOzv0EsEOvPj49Yz1LwraFgnyNgsjmiGIPyy%2B%2BHa2aSDWeIwiUzRGPhse%2Fe81CowxaDpXtyr%2BMULcgKBAyLZ7kSGjpdDR4WFesYHPxTFQYWzEAQjocew%2B9F54xQi6Oxu3gQQzr7C4BzEYBLtuoXiqe3CiCnSZeqBEJBeLYrQqgQTuu42rka5OHWVyp9htKB%2BFBLsmNAn59PCZ5VsW2vrtu289kFThb0OMsEBUDcaHzIdUxU0yGYREsWdjjpM45B3pJBuUkavhaQAiOMXOwPVkd1t%2BgwIBVnQh4pDQefFJzjEEPhc9Eg%2FlZmJOYx3VbMKOer74GOqUBmHHYIAQDogjmf6o%2BuBT0Y%2BebrCrPQael6mrbx6tcoKtxCRwOvOGYQhSe71F8MoBxhMrISCHen3KL9bUQsBTZe86xTwByJHHTUA62qG93eflyEgY7vyyuLINLLLuxj46ljxoFKqoUDMcXwLjk6cmsAy5nHm078Fv%2FE1HgwNDEFkWkLYLwTxGJPQjG7QqWY6FtScy7E7%2FR3p5MmvESpI9Dd9vUeBz8&X-Amz-Signature=8bb2c41131b1e863c1e5a3c931c023428b133743921e4da6ca5869e434f7bb66&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYNWCHE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2ZW7KssESYCPV765nMDOlPq4%2FIiKGk9IyWtHgI81sOAiEAqaZg4m7laaRB6jSO4D5TnJOj4EoOZcHJnYntjrqVfFAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpfRNSth8jWrgUb4ircAwr8gzI22Jkdl6EKQapjbsxPacay%2FjJmGzN9%2BQNEIKSESTMCcYUSMx3nC48NZpGHF%2FeSRZ9xFNoPZA%2FGc4fgGoEEDbc46P78nc3t%2FmxSgn8CnkbfvPn%2BCmlfJbqc0i26yL42f3KEnCPKfhgybBZktd%2BSMT8t3wdoebek5XYEi30hFdZYtyaubRwL%2FO%2Fg0FM1sfipsz0wWalesb2GEInFgm0pUY3yE4yqzwG1kJ7iFGEQebzatrx6cr1Qe%2BGHlnqqCZaUQhuhE7A6xO0VwR1SgK%2FM3FdKDSxI8HTN791oto7zshM3kYPdwiSWdLxJWwiOzv0EsEOvPj49Yz1LwraFgnyNgsjmiGIPyy%2B%2BHa2aSDWeIwiUzRGPhse%2Fe81CowxaDpXtyr%2BMULcgKBAyLZ7kSGjpdDR4WFesYHPxTFQYWzEAQjocew%2B9F54xQi6Oxu3gQQzr7C4BzEYBLtuoXiqe3CiCnSZeqBEJBeLYrQqgQTuu42rka5OHWVyp9htKB%2BFBLsmNAn59PCZ5VsW2vrtu289kFThb0OMsEBUDcaHzIdUxU0yGYREsWdjjpM45B3pJBuUkavhaQAiOMXOwPVkd1t%2BgwIBVnQh4pDQefFJzjEEPhc9Eg%2FlZmJOYx3VbMKOer74GOqUBmHHYIAQDogjmf6o%2BuBT0Y%2BebrCrPQael6mrbx6tcoKtxCRwOvOGYQhSe71F8MoBxhMrISCHen3KL9bUQsBTZe86xTwByJHHTUA62qG93eflyEgY7vyyuLINLLLuxj46ljxoFKqoUDMcXwLjk6cmsAy5nHm078Fv%2FE1HgwNDEFkWkLYLwTxGJPQjG7QqWY6FtScy7E7%2FR3p5MmvESpI9Dd9vUeBz8&X-Amz-Signature=b399e58e8bb509b199309223e25b0df770ceb4bff87838c735eb3a9f8fd6f0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYNWCHE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2ZW7KssESYCPV765nMDOlPq4%2FIiKGk9IyWtHgI81sOAiEAqaZg4m7laaRB6jSO4D5TnJOj4EoOZcHJnYntjrqVfFAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpfRNSth8jWrgUb4ircAwr8gzI22Jkdl6EKQapjbsxPacay%2FjJmGzN9%2BQNEIKSESTMCcYUSMx3nC48NZpGHF%2FeSRZ9xFNoPZA%2FGc4fgGoEEDbc46P78nc3t%2FmxSgn8CnkbfvPn%2BCmlfJbqc0i26yL42f3KEnCPKfhgybBZktd%2BSMT8t3wdoebek5XYEi30hFdZYtyaubRwL%2FO%2Fg0FM1sfipsz0wWalesb2GEInFgm0pUY3yE4yqzwG1kJ7iFGEQebzatrx6cr1Qe%2BGHlnqqCZaUQhuhE7A6xO0VwR1SgK%2FM3FdKDSxI8HTN791oto7zshM3kYPdwiSWdLxJWwiOzv0EsEOvPj49Yz1LwraFgnyNgsjmiGIPyy%2B%2BHa2aSDWeIwiUzRGPhse%2Fe81CowxaDpXtyr%2BMULcgKBAyLZ7kSGjpdDR4WFesYHPxTFQYWzEAQjocew%2B9F54xQi6Oxu3gQQzr7C4BzEYBLtuoXiqe3CiCnSZeqBEJBeLYrQqgQTuu42rka5OHWVyp9htKB%2BFBLsmNAn59PCZ5VsW2vrtu289kFThb0OMsEBUDcaHzIdUxU0yGYREsWdjjpM45B3pJBuUkavhaQAiOMXOwPVkd1t%2BgwIBVnQh4pDQefFJzjEEPhc9Eg%2FlZmJOYx3VbMKOer74GOqUBmHHYIAQDogjmf6o%2BuBT0Y%2BebrCrPQael6mrbx6tcoKtxCRwOvOGYQhSe71F8MoBxhMrISCHen3KL9bUQsBTZe86xTwByJHHTUA62qG93eflyEgY7vyyuLINLLLuxj46ljxoFKqoUDMcXwLjk6cmsAy5nHm078Fv%2FE1HgwNDEFkWkLYLwTxGJPQjG7QqWY6FtScy7E7%2FR3p5MmvESpI9Dd9vUeBz8&X-Amz-Signature=d76a953ca4e00f2d61db576f04fc6e7d9114c82c4a8179ddc4771a5a505229b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYNWCHE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2ZW7KssESYCPV765nMDOlPq4%2FIiKGk9IyWtHgI81sOAiEAqaZg4m7laaRB6jSO4D5TnJOj4EoOZcHJnYntjrqVfFAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpfRNSth8jWrgUb4ircAwr8gzI22Jkdl6EKQapjbsxPacay%2FjJmGzN9%2BQNEIKSESTMCcYUSMx3nC48NZpGHF%2FeSRZ9xFNoPZA%2FGc4fgGoEEDbc46P78nc3t%2FmxSgn8CnkbfvPn%2BCmlfJbqc0i26yL42f3KEnCPKfhgybBZktd%2BSMT8t3wdoebek5XYEi30hFdZYtyaubRwL%2FO%2Fg0FM1sfipsz0wWalesb2GEInFgm0pUY3yE4yqzwG1kJ7iFGEQebzatrx6cr1Qe%2BGHlnqqCZaUQhuhE7A6xO0VwR1SgK%2FM3FdKDSxI8HTN791oto7zshM3kYPdwiSWdLxJWwiOzv0EsEOvPj49Yz1LwraFgnyNgsjmiGIPyy%2B%2BHa2aSDWeIwiUzRGPhse%2Fe81CowxaDpXtyr%2BMULcgKBAyLZ7kSGjpdDR4WFesYHPxTFQYWzEAQjocew%2B9F54xQi6Oxu3gQQzr7C4BzEYBLtuoXiqe3CiCnSZeqBEJBeLYrQqgQTuu42rka5OHWVyp9htKB%2BFBLsmNAn59PCZ5VsW2vrtu289kFThb0OMsEBUDcaHzIdUxU0yGYREsWdjjpM45B3pJBuUkavhaQAiOMXOwPVkd1t%2BgwIBVnQh4pDQefFJzjEEPhc9Eg%2FlZmJOYx3VbMKOer74GOqUBmHHYIAQDogjmf6o%2BuBT0Y%2BebrCrPQael6mrbx6tcoKtxCRwOvOGYQhSe71F8MoBxhMrISCHen3KL9bUQsBTZe86xTwByJHHTUA62qG93eflyEgY7vyyuLINLLLuxj46ljxoFKqoUDMcXwLjk6cmsAy5nHm078Fv%2FE1HgwNDEFkWkLYLwTxGJPQjG7QqWY6FtScy7E7%2FR3p5MmvESpI9Dd9vUeBz8&X-Amz-Signature=c99f13c4124df25f89be44c90a1849d91a12bced22e6c727b04a2e1e6b5b9d06&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWYNWCHE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2ZW7KssESYCPV765nMDOlPq4%2FIiKGk9IyWtHgI81sOAiEAqaZg4m7laaRB6jSO4D5TnJOj4EoOZcHJnYntjrqVfFAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpfRNSth8jWrgUb4ircAwr8gzI22Jkdl6EKQapjbsxPacay%2FjJmGzN9%2BQNEIKSESTMCcYUSMx3nC48NZpGHF%2FeSRZ9xFNoPZA%2FGc4fgGoEEDbc46P78nc3t%2FmxSgn8CnkbfvPn%2BCmlfJbqc0i26yL42f3KEnCPKfhgybBZktd%2BSMT8t3wdoebek5XYEi30hFdZYtyaubRwL%2FO%2Fg0FM1sfipsz0wWalesb2GEInFgm0pUY3yE4yqzwG1kJ7iFGEQebzatrx6cr1Qe%2BGHlnqqCZaUQhuhE7A6xO0VwR1SgK%2FM3FdKDSxI8HTN791oto7zshM3kYPdwiSWdLxJWwiOzv0EsEOvPj49Yz1LwraFgnyNgsjmiGIPyy%2B%2BHa2aSDWeIwiUzRGPhse%2Fe81CowxaDpXtyr%2BMULcgKBAyLZ7kSGjpdDR4WFesYHPxTFQYWzEAQjocew%2B9F54xQi6Oxu3gQQzr7C4BzEYBLtuoXiqe3CiCnSZeqBEJBeLYrQqgQTuu42rka5OHWVyp9htKB%2BFBLsmNAn59PCZ5VsW2vrtu289kFThb0OMsEBUDcaHzIdUxU0yGYREsWdjjpM45B3pJBuUkavhaQAiOMXOwPVkd1t%2BgwIBVnQh4pDQefFJzjEEPhc9Eg%2FlZmJOYx3VbMKOer74GOqUBmHHYIAQDogjmf6o%2BuBT0Y%2BebrCrPQael6mrbx6tcoKtxCRwOvOGYQhSe71F8MoBxhMrISCHen3KL9bUQsBTZe86xTwByJHHTUA62qG93eflyEgY7vyyuLINLLLuxj46ljxoFKqoUDMcXwLjk6cmsAy5nHm078Fv%2FE1HgwNDEFkWkLYLwTxGJPQjG7QqWY6FtScy7E7%2FR3p5MmvESpI9Dd9vUeBz8&X-Amz-Signature=456b2d1e2e42af2f3385709d913c4e026feff98cf8b0d6424b39b39a91d77a26&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
