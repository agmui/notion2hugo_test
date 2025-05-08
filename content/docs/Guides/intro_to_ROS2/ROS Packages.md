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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPPDP6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1EDbVZdKIkkB2CsLQke1ccDi%2BTo7wF5dKDoKbHxoxHAiBkH4Glfz%2Fimk2QleRUviRIioVS0t8lQ%2FAl%2FvpjJ76PwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMDcX0NUfOtqYOEnPwKtwDFCgMNGxc%2FQ%2B7ZIPvH30lUcnKBRE7zhqp%2B9bL1uZplFFGngcRk5S%2Fhp9tj8BDUmU4Oj5M4g2JVDTMF1xj9vJQKX%2BgTv02V%2FMynkzJEq1TmJ5OY2k7nUbKw3s3vnP5corZJdh6BLFlNF0Or%2BCL5QxzsJKa5%2BjpOhKnJ2J3xsacedOsNvAqbMiYwjGeQzamGRz7b5uU72lQGwINtCuI0h%2F1EniIPKlPsrSfAH46bWsd5yU2wZMjWWlHFcl7DujQahDwwJ79MEj%2B%2F%2FHOI27dtI%2Fst7SWNTkK2h4ehP4KAl49IrnZadmlg407ErskG5f7NVLJbbiHC0ltmBuDorz%2FgNcsjfM5UOkwX5vfVqPNnymEjkpSxJkt9fe%2Fp%2BhVr4wEl4oubHf%2FJx%2FuDeWGIBd5wr%2FOHsQMjU7q1yoch4ffSHWwHAk2RZabibl31pqudEEBMMJhs4X6M07yEmDHVRaszDWt42sptkFTVPi8YifP%2FtH1wN3%2FN8IZnbIS72vEHl1F2XtMFRc3xSpDvM2mNh9TWn03%2BJjujoF%2F%2B77RNYNep7CVJMRLhJGnKJu%2BNBEg7tGFZkSyJkb7SDL7PeQzH1RtwWSlAsAaO0YqJmY0Ggp%2BUasPdDMqcD98SrvlujPLQkIwvbH0wAY6pgEaTt0kxn2bmRI26idA1uE1qMLOBVf50K41o%2B1M8s7Sl7TmaekyY2zvqpH%2BfUgQFhHz2qzGvqR5bPBH3mnefFJj6t%2BUcUGaWD3z%2BjwGwziUOntuKkUI35YmmhpRVdATU7seo4FqhRJgHCEhQhxiXnqZiN%2F5LxrcsnjmSM0wG%2FK7h%2B9Nt%2F1P2Kr3Ah79pi50r%2BmZitr5iWZqKMAlhS0TW%2BJKmXB9WEVc&X-Amz-Signature=f5d86ef01cdeeb483c2ba0afaa730a89ff4504ec04cde22cea7a276fdd412bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPPDP6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1EDbVZdKIkkB2CsLQke1ccDi%2BTo7wF5dKDoKbHxoxHAiBkH4Glfz%2Fimk2QleRUviRIioVS0t8lQ%2FAl%2FvpjJ76PwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMDcX0NUfOtqYOEnPwKtwDFCgMNGxc%2FQ%2B7ZIPvH30lUcnKBRE7zhqp%2B9bL1uZplFFGngcRk5S%2Fhp9tj8BDUmU4Oj5M4g2JVDTMF1xj9vJQKX%2BgTv02V%2FMynkzJEq1TmJ5OY2k7nUbKw3s3vnP5corZJdh6BLFlNF0Or%2BCL5QxzsJKa5%2BjpOhKnJ2J3xsacedOsNvAqbMiYwjGeQzamGRz7b5uU72lQGwINtCuI0h%2F1EniIPKlPsrSfAH46bWsd5yU2wZMjWWlHFcl7DujQahDwwJ79MEj%2B%2F%2FHOI27dtI%2Fst7SWNTkK2h4ehP4KAl49IrnZadmlg407ErskG5f7NVLJbbiHC0ltmBuDorz%2FgNcsjfM5UOkwX5vfVqPNnymEjkpSxJkt9fe%2Fp%2BhVr4wEl4oubHf%2FJx%2FuDeWGIBd5wr%2FOHsQMjU7q1yoch4ffSHWwHAk2RZabibl31pqudEEBMMJhs4X6M07yEmDHVRaszDWt42sptkFTVPi8YifP%2FtH1wN3%2FN8IZnbIS72vEHl1F2XtMFRc3xSpDvM2mNh9TWn03%2BJjujoF%2F%2B77RNYNep7CVJMRLhJGnKJu%2BNBEg7tGFZkSyJkb7SDL7PeQzH1RtwWSlAsAaO0YqJmY0Ggp%2BUasPdDMqcD98SrvlujPLQkIwvbH0wAY6pgEaTt0kxn2bmRI26idA1uE1qMLOBVf50K41o%2B1M8s7Sl7TmaekyY2zvqpH%2BfUgQFhHz2qzGvqR5bPBH3mnefFJj6t%2BUcUGaWD3z%2BjwGwziUOntuKkUI35YmmhpRVdATU7seo4FqhRJgHCEhQhxiXnqZiN%2F5LxrcsnjmSM0wG%2FK7h%2B9Nt%2F1P2Kr3Ah79pi50r%2BmZitr5iWZqKMAlhS0TW%2BJKmXB9WEVc&X-Amz-Signature=eb550bcf0ab0d494ed3db879ebb9d68d00d6159bcae8556b6002e839d3ecc212&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPPDP6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1EDbVZdKIkkB2CsLQke1ccDi%2BTo7wF5dKDoKbHxoxHAiBkH4Glfz%2Fimk2QleRUviRIioVS0t8lQ%2FAl%2FvpjJ76PwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMDcX0NUfOtqYOEnPwKtwDFCgMNGxc%2FQ%2B7ZIPvH30lUcnKBRE7zhqp%2B9bL1uZplFFGngcRk5S%2Fhp9tj8BDUmU4Oj5M4g2JVDTMF1xj9vJQKX%2BgTv02V%2FMynkzJEq1TmJ5OY2k7nUbKw3s3vnP5corZJdh6BLFlNF0Or%2BCL5QxzsJKa5%2BjpOhKnJ2J3xsacedOsNvAqbMiYwjGeQzamGRz7b5uU72lQGwINtCuI0h%2F1EniIPKlPsrSfAH46bWsd5yU2wZMjWWlHFcl7DujQahDwwJ79MEj%2B%2F%2FHOI27dtI%2Fst7SWNTkK2h4ehP4KAl49IrnZadmlg407ErskG5f7NVLJbbiHC0ltmBuDorz%2FgNcsjfM5UOkwX5vfVqPNnymEjkpSxJkt9fe%2Fp%2BhVr4wEl4oubHf%2FJx%2FuDeWGIBd5wr%2FOHsQMjU7q1yoch4ffSHWwHAk2RZabibl31pqudEEBMMJhs4X6M07yEmDHVRaszDWt42sptkFTVPi8YifP%2FtH1wN3%2FN8IZnbIS72vEHl1F2XtMFRc3xSpDvM2mNh9TWn03%2BJjujoF%2F%2B77RNYNep7CVJMRLhJGnKJu%2BNBEg7tGFZkSyJkb7SDL7PeQzH1RtwWSlAsAaO0YqJmY0Ggp%2BUasPdDMqcD98SrvlujPLQkIwvbH0wAY6pgEaTt0kxn2bmRI26idA1uE1qMLOBVf50K41o%2B1M8s7Sl7TmaekyY2zvqpH%2BfUgQFhHz2qzGvqR5bPBH3mnefFJj6t%2BUcUGaWD3z%2BjwGwziUOntuKkUI35YmmhpRVdATU7seo4FqhRJgHCEhQhxiXnqZiN%2F5LxrcsnjmSM0wG%2FK7h%2B9Nt%2F1P2Kr3Ah79pi50r%2BmZitr5iWZqKMAlhS0TW%2BJKmXB9WEVc&X-Amz-Signature=b5f4fec06a898517dcbfb84cb2ed6dcde2e5c0252ea6fbecb0096a76fe55b91f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPPDP6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1EDbVZdKIkkB2CsLQke1ccDi%2BTo7wF5dKDoKbHxoxHAiBkH4Glfz%2Fimk2QleRUviRIioVS0t8lQ%2FAl%2FvpjJ76PwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMDcX0NUfOtqYOEnPwKtwDFCgMNGxc%2FQ%2B7ZIPvH30lUcnKBRE7zhqp%2B9bL1uZplFFGngcRk5S%2Fhp9tj8BDUmU4Oj5M4g2JVDTMF1xj9vJQKX%2BgTv02V%2FMynkzJEq1TmJ5OY2k7nUbKw3s3vnP5corZJdh6BLFlNF0Or%2BCL5QxzsJKa5%2BjpOhKnJ2J3xsacedOsNvAqbMiYwjGeQzamGRz7b5uU72lQGwINtCuI0h%2F1EniIPKlPsrSfAH46bWsd5yU2wZMjWWlHFcl7DujQahDwwJ79MEj%2B%2F%2FHOI27dtI%2Fst7SWNTkK2h4ehP4KAl49IrnZadmlg407ErskG5f7NVLJbbiHC0ltmBuDorz%2FgNcsjfM5UOkwX5vfVqPNnymEjkpSxJkt9fe%2Fp%2BhVr4wEl4oubHf%2FJx%2FuDeWGIBd5wr%2FOHsQMjU7q1yoch4ffSHWwHAk2RZabibl31pqudEEBMMJhs4X6M07yEmDHVRaszDWt42sptkFTVPi8YifP%2FtH1wN3%2FN8IZnbIS72vEHl1F2XtMFRc3xSpDvM2mNh9TWn03%2BJjujoF%2F%2B77RNYNep7CVJMRLhJGnKJu%2BNBEg7tGFZkSyJkb7SDL7PeQzH1RtwWSlAsAaO0YqJmY0Ggp%2BUasPdDMqcD98SrvlujPLQkIwvbH0wAY6pgEaTt0kxn2bmRI26idA1uE1qMLOBVf50K41o%2B1M8s7Sl7TmaekyY2zvqpH%2BfUgQFhHz2qzGvqR5bPBH3mnefFJj6t%2BUcUGaWD3z%2BjwGwziUOntuKkUI35YmmhpRVdATU7seo4FqhRJgHCEhQhxiXnqZiN%2F5LxrcsnjmSM0wG%2FK7h%2B9Nt%2F1P2Kr3Ah79pi50r%2BmZitr5iWZqKMAlhS0TW%2BJKmXB9WEVc&X-Amz-Signature=0eaaa8cd664561fd481fefed13c1dc45fbcf2c31c4d473682ae7c4e76003b115&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPPDP6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1EDbVZdKIkkB2CsLQke1ccDi%2BTo7wF5dKDoKbHxoxHAiBkH4Glfz%2Fimk2QleRUviRIioVS0t8lQ%2FAl%2FvpjJ76PwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMDcX0NUfOtqYOEnPwKtwDFCgMNGxc%2FQ%2B7ZIPvH30lUcnKBRE7zhqp%2B9bL1uZplFFGngcRk5S%2Fhp9tj8BDUmU4Oj5M4g2JVDTMF1xj9vJQKX%2BgTv02V%2FMynkzJEq1TmJ5OY2k7nUbKw3s3vnP5corZJdh6BLFlNF0Or%2BCL5QxzsJKa5%2BjpOhKnJ2J3xsacedOsNvAqbMiYwjGeQzamGRz7b5uU72lQGwINtCuI0h%2F1EniIPKlPsrSfAH46bWsd5yU2wZMjWWlHFcl7DujQahDwwJ79MEj%2B%2F%2FHOI27dtI%2Fst7SWNTkK2h4ehP4KAl49IrnZadmlg407ErskG5f7NVLJbbiHC0ltmBuDorz%2FgNcsjfM5UOkwX5vfVqPNnymEjkpSxJkt9fe%2Fp%2BhVr4wEl4oubHf%2FJx%2FuDeWGIBd5wr%2FOHsQMjU7q1yoch4ffSHWwHAk2RZabibl31pqudEEBMMJhs4X6M07yEmDHVRaszDWt42sptkFTVPi8YifP%2FtH1wN3%2FN8IZnbIS72vEHl1F2XtMFRc3xSpDvM2mNh9TWn03%2BJjujoF%2F%2B77RNYNep7CVJMRLhJGnKJu%2BNBEg7tGFZkSyJkb7SDL7PeQzH1RtwWSlAsAaO0YqJmY0Ggp%2BUasPdDMqcD98SrvlujPLQkIwvbH0wAY6pgEaTt0kxn2bmRI26idA1uE1qMLOBVf50K41o%2B1M8s7Sl7TmaekyY2zvqpH%2BfUgQFhHz2qzGvqR5bPBH3mnefFJj6t%2BUcUGaWD3z%2BjwGwziUOntuKkUI35YmmhpRVdATU7seo4FqhRJgHCEhQhxiXnqZiN%2F5LxrcsnjmSM0wG%2FK7h%2B9Nt%2F1P2Kr3Ah79pi50r%2BmZitr5iWZqKMAlhS0TW%2BJKmXB9WEVc&X-Amz-Signature=1e883fadd33fc251d9043d9168a3f29446626dc9b16e9da78920079378a30676&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPPDP6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1EDbVZdKIkkB2CsLQke1ccDi%2BTo7wF5dKDoKbHxoxHAiBkH4Glfz%2Fimk2QleRUviRIioVS0t8lQ%2FAl%2FvpjJ76PwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMDcX0NUfOtqYOEnPwKtwDFCgMNGxc%2FQ%2B7ZIPvH30lUcnKBRE7zhqp%2B9bL1uZplFFGngcRk5S%2Fhp9tj8BDUmU4Oj5M4g2JVDTMF1xj9vJQKX%2BgTv02V%2FMynkzJEq1TmJ5OY2k7nUbKw3s3vnP5corZJdh6BLFlNF0Or%2BCL5QxzsJKa5%2BjpOhKnJ2J3xsacedOsNvAqbMiYwjGeQzamGRz7b5uU72lQGwINtCuI0h%2F1EniIPKlPsrSfAH46bWsd5yU2wZMjWWlHFcl7DujQahDwwJ79MEj%2B%2F%2FHOI27dtI%2Fst7SWNTkK2h4ehP4KAl49IrnZadmlg407ErskG5f7NVLJbbiHC0ltmBuDorz%2FgNcsjfM5UOkwX5vfVqPNnymEjkpSxJkt9fe%2Fp%2BhVr4wEl4oubHf%2FJx%2FuDeWGIBd5wr%2FOHsQMjU7q1yoch4ffSHWwHAk2RZabibl31pqudEEBMMJhs4X6M07yEmDHVRaszDWt42sptkFTVPi8YifP%2FtH1wN3%2FN8IZnbIS72vEHl1F2XtMFRc3xSpDvM2mNh9TWn03%2BJjujoF%2F%2B77RNYNep7CVJMRLhJGnKJu%2BNBEg7tGFZkSyJkb7SDL7PeQzH1RtwWSlAsAaO0YqJmY0Ggp%2BUasPdDMqcD98SrvlujPLQkIwvbH0wAY6pgEaTt0kxn2bmRI26idA1uE1qMLOBVf50K41o%2B1M8s7Sl7TmaekyY2zvqpH%2BfUgQFhHz2qzGvqR5bPBH3mnefFJj6t%2BUcUGaWD3z%2BjwGwziUOntuKkUI35YmmhpRVdATU7seo4FqhRJgHCEhQhxiXnqZiN%2F5LxrcsnjmSM0wG%2FK7h%2B9Nt%2F1P2Kr3Ah79pi50r%2BmZitr5iWZqKMAlhS0TW%2BJKmXB9WEVc&X-Amz-Signature=e9ddadfefe242a6c0d0c2844572bc7b133f812b0d9c08e42dc12205934bc5a07&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWPPDP6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1EDbVZdKIkkB2CsLQke1ccDi%2BTo7wF5dKDoKbHxoxHAiBkH4Glfz%2Fimk2QleRUviRIioVS0t8lQ%2FAl%2FvpjJ76PwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMDcX0NUfOtqYOEnPwKtwDFCgMNGxc%2FQ%2B7ZIPvH30lUcnKBRE7zhqp%2B9bL1uZplFFGngcRk5S%2Fhp9tj8BDUmU4Oj5M4g2JVDTMF1xj9vJQKX%2BgTv02V%2FMynkzJEq1TmJ5OY2k7nUbKw3s3vnP5corZJdh6BLFlNF0Or%2BCL5QxzsJKa5%2BjpOhKnJ2J3xsacedOsNvAqbMiYwjGeQzamGRz7b5uU72lQGwINtCuI0h%2F1EniIPKlPsrSfAH46bWsd5yU2wZMjWWlHFcl7DujQahDwwJ79MEj%2B%2F%2FHOI27dtI%2Fst7SWNTkK2h4ehP4KAl49IrnZadmlg407ErskG5f7NVLJbbiHC0ltmBuDorz%2FgNcsjfM5UOkwX5vfVqPNnymEjkpSxJkt9fe%2Fp%2BhVr4wEl4oubHf%2FJx%2FuDeWGIBd5wr%2FOHsQMjU7q1yoch4ffSHWwHAk2RZabibl31pqudEEBMMJhs4X6M07yEmDHVRaszDWt42sptkFTVPi8YifP%2FtH1wN3%2FN8IZnbIS72vEHl1F2XtMFRc3xSpDvM2mNh9TWn03%2BJjujoF%2F%2B77RNYNep7CVJMRLhJGnKJu%2BNBEg7tGFZkSyJkb7SDL7PeQzH1RtwWSlAsAaO0YqJmY0Ggp%2BUasPdDMqcD98SrvlujPLQkIwvbH0wAY6pgEaTt0kxn2bmRI26idA1uE1qMLOBVf50K41o%2B1M8s7Sl7TmaekyY2zvqpH%2BfUgQFhHz2qzGvqR5bPBH3mnefFJj6t%2BUcUGaWD3z%2BjwGwziUOntuKkUI35YmmhpRVdATU7seo4FqhRJgHCEhQhxiXnqZiN%2F5LxrcsnjmSM0wG%2FK7h%2B9Nt%2F1P2Kr3Ah79pi50r%2BmZitr5iWZqKMAlhS0TW%2BJKmXB9WEVc&X-Amz-Signature=81e84942a779a07363f34bb3f2451c246008e53000c9bf8ea5822ec10ee4c581&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
