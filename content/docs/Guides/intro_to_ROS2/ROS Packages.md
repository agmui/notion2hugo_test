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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJMOHM4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeussKkX5zSPuiROYFcsGOGtrUH%2BR1%2FK1r3p4gmObkkAiBmKeLb%2BUWvrzv4%2F%2BsVnIsDTFaeSmTbE2KHitJU%2BSZfNCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTAfTFZ2yAB57%2FGHKtwDqzDUmcV%2BlXVtc5GgciyaYYYcJuxK6Oke5wmxve5sYMxorNy15V5KO5QjkgYR5e9gDhLdfXP4IjvkLi6oQsw1HlXDLRF9naxg81JEJukqgm1P5hjNiv1soO1vkrAZelhu0HtnqHsY%2BVVLm3R1zGrryrAZfXFyvdYB%2BeFLFO6LBQaxKEyK0FyZfTX5HVPrZSM5OQ0O%2FddqM85G0ZhBYY1WpsT0SbkAmFf7TlxFrSW1kgNXhxlNtwfrKcPhYohYErtVLXW6YmtODWaTNFkzCtL%2BGn8oonVjuxaIwzY71mw0UxH%2FOiy8INrLYEW0JFXUnIi2cffppqgWFOu16EUcxPpHR%2FS9znRsVDAvsl3P7mU4ajaPXAnXUCYnIYJfUd3U5IOoiQIhN3l4NL%2FdzqpIODCkaDacriJRNwwPcgT47%2B8dFAo8ojy5KT41kpVvUmubOlCEQu1HjqBYrpZaJihTsCXOtrJs%2By7HsHjl2rZ3P1aDZSyOh2mtt%2BEjCx8VOUayxtp2HZB%2BZg9Gif7Glubdv4wqfwypqTb4f2YXmi0Jasbn4bE5bZtFqtDjMSxkRiuIy8A7HQ3KLYXaiqMLjojqi871IlklB3vMFwOY3KUqrBDi281N3ZeeVrKo1NSkAQswnbOpvQY6pgGpjpsBGnc5fTkagQCdiAgg5VYCjnKfONvcA5HhtnwaYMdHkInLr987Bov8VpdRP0PbMc9H%2BweG28ZW6C%2FTFyCi%2Bwkf0LL89QATqd0%2BY9nxckSFwGW8SXnlfLLPGzPRuTsm%2Bck3dzQ3paFiHGEEavIp4Q8CR7vR2TtPJR7T7aQeMbI5JrwiyEXT%2FW81ftYOdobfIEvoVDXGEsZlMl3MXLDomqedXUEC&X-Amz-Signature=ab1d802d8b18ea24f1682b0e1a2258251fa73ff0922a5143f817b80e3a31b8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJMOHM4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeussKkX5zSPuiROYFcsGOGtrUH%2BR1%2FK1r3p4gmObkkAiBmKeLb%2BUWvrzv4%2F%2BsVnIsDTFaeSmTbE2KHitJU%2BSZfNCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTAfTFZ2yAB57%2FGHKtwDqzDUmcV%2BlXVtc5GgciyaYYYcJuxK6Oke5wmxve5sYMxorNy15V5KO5QjkgYR5e9gDhLdfXP4IjvkLi6oQsw1HlXDLRF9naxg81JEJukqgm1P5hjNiv1soO1vkrAZelhu0HtnqHsY%2BVVLm3R1zGrryrAZfXFyvdYB%2BeFLFO6LBQaxKEyK0FyZfTX5HVPrZSM5OQ0O%2FddqM85G0ZhBYY1WpsT0SbkAmFf7TlxFrSW1kgNXhxlNtwfrKcPhYohYErtVLXW6YmtODWaTNFkzCtL%2BGn8oonVjuxaIwzY71mw0UxH%2FOiy8INrLYEW0JFXUnIi2cffppqgWFOu16EUcxPpHR%2FS9znRsVDAvsl3P7mU4ajaPXAnXUCYnIYJfUd3U5IOoiQIhN3l4NL%2FdzqpIODCkaDacriJRNwwPcgT47%2B8dFAo8ojy5KT41kpVvUmubOlCEQu1HjqBYrpZaJihTsCXOtrJs%2By7HsHjl2rZ3P1aDZSyOh2mtt%2BEjCx8VOUayxtp2HZB%2BZg9Gif7Glubdv4wqfwypqTb4f2YXmi0Jasbn4bE5bZtFqtDjMSxkRiuIy8A7HQ3KLYXaiqMLjojqi871IlklB3vMFwOY3KUqrBDi281N3ZeeVrKo1NSkAQswnbOpvQY6pgGpjpsBGnc5fTkagQCdiAgg5VYCjnKfONvcA5HhtnwaYMdHkInLr987Bov8VpdRP0PbMc9H%2BweG28ZW6C%2FTFyCi%2Bwkf0LL89QATqd0%2BY9nxckSFwGW8SXnlfLLPGzPRuTsm%2Bck3dzQ3paFiHGEEavIp4Q8CR7vR2TtPJR7T7aQeMbI5JrwiyEXT%2FW81ftYOdobfIEvoVDXGEsZlMl3MXLDomqedXUEC&X-Amz-Signature=cc720fefaa17813699ddf8cc26b0bd3cb060280225e15414bb61c5fb9bc362b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJMOHM4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeussKkX5zSPuiROYFcsGOGtrUH%2BR1%2FK1r3p4gmObkkAiBmKeLb%2BUWvrzv4%2F%2BsVnIsDTFaeSmTbE2KHitJU%2BSZfNCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTAfTFZ2yAB57%2FGHKtwDqzDUmcV%2BlXVtc5GgciyaYYYcJuxK6Oke5wmxve5sYMxorNy15V5KO5QjkgYR5e9gDhLdfXP4IjvkLi6oQsw1HlXDLRF9naxg81JEJukqgm1P5hjNiv1soO1vkrAZelhu0HtnqHsY%2BVVLm3R1zGrryrAZfXFyvdYB%2BeFLFO6LBQaxKEyK0FyZfTX5HVPrZSM5OQ0O%2FddqM85G0ZhBYY1WpsT0SbkAmFf7TlxFrSW1kgNXhxlNtwfrKcPhYohYErtVLXW6YmtODWaTNFkzCtL%2BGn8oonVjuxaIwzY71mw0UxH%2FOiy8INrLYEW0JFXUnIi2cffppqgWFOu16EUcxPpHR%2FS9znRsVDAvsl3P7mU4ajaPXAnXUCYnIYJfUd3U5IOoiQIhN3l4NL%2FdzqpIODCkaDacriJRNwwPcgT47%2B8dFAo8ojy5KT41kpVvUmubOlCEQu1HjqBYrpZaJihTsCXOtrJs%2By7HsHjl2rZ3P1aDZSyOh2mtt%2BEjCx8VOUayxtp2HZB%2BZg9Gif7Glubdv4wqfwypqTb4f2YXmi0Jasbn4bE5bZtFqtDjMSxkRiuIy8A7HQ3KLYXaiqMLjojqi871IlklB3vMFwOY3KUqrBDi281N3ZeeVrKo1NSkAQswnbOpvQY6pgGpjpsBGnc5fTkagQCdiAgg5VYCjnKfONvcA5HhtnwaYMdHkInLr987Bov8VpdRP0PbMc9H%2BweG28ZW6C%2FTFyCi%2Bwkf0LL89QATqd0%2BY9nxckSFwGW8SXnlfLLPGzPRuTsm%2Bck3dzQ3paFiHGEEavIp4Q8CR7vR2TtPJR7T7aQeMbI5JrwiyEXT%2FW81ftYOdobfIEvoVDXGEsZlMl3MXLDomqedXUEC&X-Amz-Signature=692539ad9d67d192c5dfeaa9548635383e1e3161574e10da9376a465961ae16c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJMOHM4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeussKkX5zSPuiROYFcsGOGtrUH%2BR1%2FK1r3p4gmObkkAiBmKeLb%2BUWvrzv4%2F%2BsVnIsDTFaeSmTbE2KHitJU%2BSZfNCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTAfTFZ2yAB57%2FGHKtwDqzDUmcV%2BlXVtc5GgciyaYYYcJuxK6Oke5wmxve5sYMxorNy15V5KO5QjkgYR5e9gDhLdfXP4IjvkLi6oQsw1HlXDLRF9naxg81JEJukqgm1P5hjNiv1soO1vkrAZelhu0HtnqHsY%2BVVLm3R1zGrryrAZfXFyvdYB%2BeFLFO6LBQaxKEyK0FyZfTX5HVPrZSM5OQ0O%2FddqM85G0ZhBYY1WpsT0SbkAmFf7TlxFrSW1kgNXhxlNtwfrKcPhYohYErtVLXW6YmtODWaTNFkzCtL%2BGn8oonVjuxaIwzY71mw0UxH%2FOiy8INrLYEW0JFXUnIi2cffppqgWFOu16EUcxPpHR%2FS9znRsVDAvsl3P7mU4ajaPXAnXUCYnIYJfUd3U5IOoiQIhN3l4NL%2FdzqpIODCkaDacriJRNwwPcgT47%2B8dFAo8ojy5KT41kpVvUmubOlCEQu1HjqBYrpZaJihTsCXOtrJs%2By7HsHjl2rZ3P1aDZSyOh2mtt%2BEjCx8VOUayxtp2HZB%2BZg9Gif7Glubdv4wqfwypqTb4f2YXmi0Jasbn4bE5bZtFqtDjMSxkRiuIy8A7HQ3KLYXaiqMLjojqi871IlklB3vMFwOY3KUqrBDi281N3ZeeVrKo1NSkAQswnbOpvQY6pgGpjpsBGnc5fTkagQCdiAgg5VYCjnKfONvcA5HhtnwaYMdHkInLr987Bov8VpdRP0PbMc9H%2BweG28ZW6C%2FTFyCi%2Bwkf0LL89QATqd0%2BY9nxckSFwGW8SXnlfLLPGzPRuTsm%2Bck3dzQ3paFiHGEEavIp4Q8CR7vR2TtPJR7T7aQeMbI5JrwiyEXT%2FW81ftYOdobfIEvoVDXGEsZlMl3MXLDomqedXUEC&X-Amz-Signature=6ef7b3c73d4d924195a3eeaeb822825a7df4598691cf48de4637d43051d535ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJMOHM4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeussKkX5zSPuiROYFcsGOGtrUH%2BR1%2FK1r3p4gmObkkAiBmKeLb%2BUWvrzv4%2F%2BsVnIsDTFaeSmTbE2KHitJU%2BSZfNCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTAfTFZ2yAB57%2FGHKtwDqzDUmcV%2BlXVtc5GgciyaYYYcJuxK6Oke5wmxve5sYMxorNy15V5KO5QjkgYR5e9gDhLdfXP4IjvkLi6oQsw1HlXDLRF9naxg81JEJukqgm1P5hjNiv1soO1vkrAZelhu0HtnqHsY%2BVVLm3R1zGrryrAZfXFyvdYB%2BeFLFO6LBQaxKEyK0FyZfTX5HVPrZSM5OQ0O%2FddqM85G0ZhBYY1WpsT0SbkAmFf7TlxFrSW1kgNXhxlNtwfrKcPhYohYErtVLXW6YmtODWaTNFkzCtL%2BGn8oonVjuxaIwzY71mw0UxH%2FOiy8INrLYEW0JFXUnIi2cffppqgWFOu16EUcxPpHR%2FS9znRsVDAvsl3P7mU4ajaPXAnXUCYnIYJfUd3U5IOoiQIhN3l4NL%2FdzqpIODCkaDacriJRNwwPcgT47%2B8dFAo8ojy5KT41kpVvUmubOlCEQu1HjqBYrpZaJihTsCXOtrJs%2By7HsHjl2rZ3P1aDZSyOh2mtt%2BEjCx8VOUayxtp2HZB%2BZg9Gif7Glubdv4wqfwypqTb4f2YXmi0Jasbn4bE5bZtFqtDjMSxkRiuIy8A7HQ3KLYXaiqMLjojqi871IlklB3vMFwOY3KUqrBDi281N3ZeeVrKo1NSkAQswnbOpvQY6pgGpjpsBGnc5fTkagQCdiAgg5VYCjnKfONvcA5HhtnwaYMdHkInLr987Bov8VpdRP0PbMc9H%2BweG28ZW6C%2FTFyCi%2Bwkf0LL89QATqd0%2BY9nxckSFwGW8SXnlfLLPGzPRuTsm%2Bck3dzQ3paFiHGEEavIp4Q8CR7vR2TtPJR7T7aQeMbI5JrwiyEXT%2FW81ftYOdobfIEvoVDXGEsZlMl3MXLDomqedXUEC&X-Amz-Signature=3bbdf658203321d72ffac533b5f1de7a7295211a5dcbb84eca2c273880e88bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJMOHM4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeussKkX5zSPuiROYFcsGOGtrUH%2BR1%2FK1r3p4gmObkkAiBmKeLb%2BUWvrzv4%2F%2BsVnIsDTFaeSmTbE2KHitJU%2BSZfNCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTAfTFZ2yAB57%2FGHKtwDqzDUmcV%2BlXVtc5GgciyaYYYcJuxK6Oke5wmxve5sYMxorNy15V5KO5QjkgYR5e9gDhLdfXP4IjvkLi6oQsw1HlXDLRF9naxg81JEJukqgm1P5hjNiv1soO1vkrAZelhu0HtnqHsY%2BVVLm3R1zGrryrAZfXFyvdYB%2BeFLFO6LBQaxKEyK0FyZfTX5HVPrZSM5OQ0O%2FddqM85G0ZhBYY1WpsT0SbkAmFf7TlxFrSW1kgNXhxlNtwfrKcPhYohYErtVLXW6YmtODWaTNFkzCtL%2BGn8oonVjuxaIwzY71mw0UxH%2FOiy8INrLYEW0JFXUnIi2cffppqgWFOu16EUcxPpHR%2FS9znRsVDAvsl3P7mU4ajaPXAnXUCYnIYJfUd3U5IOoiQIhN3l4NL%2FdzqpIODCkaDacriJRNwwPcgT47%2B8dFAo8ojy5KT41kpVvUmubOlCEQu1HjqBYrpZaJihTsCXOtrJs%2By7HsHjl2rZ3P1aDZSyOh2mtt%2BEjCx8VOUayxtp2HZB%2BZg9Gif7Glubdv4wqfwypqTb4f2YXmi0Jasbn4bE5bZtFqtDjMSxkRiuIy8A7HQ3KLYXaiqMLjojqi871IlklB3vMFwOY3KUqrBDi281N3ZeeVrKo1NSkAQswnbOpvQY6pgGpjpsBGnc5fTkagQCdiAgg5VYCjnKfONvcA5HhtnwaYMdHkInLr987Bov8VpdRP0PbMc9H%2BweG28ZW6C%2FTFyCi%2Bwkf0LL89QATqd0%2BY9nxckSFwGW8SXnlfLLPGzPRuTsm%2Bck3dzQ3paFiHGEEavIp4Q8CR7vR2TtPJR7T7aQeMbI5JrwiyEXT%2FW81ftYOdobfIEvoVDXGEsZlMl3MXLDomqedXUEC&X-Amz-Signature=0b20323953ef625a113aa6f2a083631a5662cd71ef7e9c99d93adf0401d27fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJMOHM4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeussKkX5zSPuiROYFcsGOGtrUH%2BR1%2FK1r3p4gmObkkAiBmKeLb%2BUWvrzv4%2F%2BsVnIsDTFaeSmTbE2KHitJU%2BSZfNCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTAfTFZ2yAB57%2FGHKtwDqzDUmcV%2BlXVtc5GgciyaYYYcJuxK6Oke5wmxve5sYMxorNy15V5KO5QjkgYR5e9gDhLdfXP4IjvkLi6oQsw1HlXDLRF9naxg81JEJukqgm1P5hjNiv1soO1vkrAZelhu0HtnqHsY%2BVVLm3R1zGrryrAZfXFyvdYB%2BeFLFO6LBQaxKEyK0FyZfTX5HVPrZSM5OQ0O%2FddqM85G0ZhBYY1WpsT0SbkAmFf7TlxFrSW1kgNXhxlNtwfrKcPhYohYErtVLXW6YmtODWaTNFkzCtL%2BGn8oonVjuxaIwzY71mw0UxH%2FOiy8INrLYEW0JFXUnIi2cffppqgWFOu16EUcxPpHR%2FS9znRsVDAvsl3P7mU4ajaPXAnXUCYnIYJfUd3U5IOoiQIhN3l4NL%2FdzqpIODCkaDacriJRNwwPcgT47%2B8dFAo8ojy5KT41kpVvUmubOlCEQu1HjqBYrpZaJihTsCXOtrJs%2By7HsHjl2rZ3P1aDZSyOh2mtt%2BEjCx8VOUayxtp2HZB%2BZg9Gif7Glubdv4wqfwypqTb4f2YXmi0Jasbn4bE5bZtFqtDjMSxkRiuIy8A7HQ3KLYXaiqMLjojqi871IlklB3vMFwOY3KUqrBDi281N3ZeeVrKo1NSkAQswnbOpvQY6pgGpjpsBGnc5fTkagQCdiAgg5VYCjnKfONvcA5HhtnwaYMdHkInLr987Bov8VpdRP0PbMc9H%2BweG28ZW6C%2FTFyCi%2Bwkf0LL89QATqd0%2BY9nxckSFwGW8SXnlfLLPGzPRuTsm%2Bck3dzQ3paFiHGEEavIp4Q8CR7vR2TtPJR7T7aQeMbI5JrwiyEXT%2FW81ftYOdobfIEvoVDXGEsZlMl3MXLDomqedXUEC&X-Amz-Signature=7497559cce514618db0d8f4e580b76a8240ef0f392ad2e5bc7138e5089c6aac5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
