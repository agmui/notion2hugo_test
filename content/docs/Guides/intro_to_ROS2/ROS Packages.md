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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PGROVJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjq83lyKbYA4fdkN8LA7d1VWomZEWTCunUIQ0Uubu7QIhAO%2Fvi2ubf1U79LY5Hm03ltlbOnzMJ8Sxhkq%2FMN904jV%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMOfJ82rAqXiLaupEq3AMwGMdKmiX%2Fev7%2F4s5Q7iZ1oOACOLo09KOaptrbkW7XRPVe3rg1OnR6v%2BKn7%2Bsaf8o4E7SOH5IoKtnrVcMXWipbE6laYdCoDN555In46XC4oRYmzuJCgeAz%2B3bStFczPsbiXhWKNck1Ucq%2Bfc2tm4MQYnBRAxec5UsqjFJhL9TyRCZuPdsnsANqmCk3RvEoH0DyJHB9DHEHshj6pWsWtAB3v2DjjJ1Kljz1%2FCvEzTztBk5aGgLgpoAPAORUM4KjPnjbOG0cOH%2B1KPNfh8J%2FlumonwGxIsmfBFVSuwSHl0oHwcobUfnX8BVGEXOPxegA7gSQQPkX11VqfxpHxISmo2Vy%2FQXr72u5NZMg%2BQS6svUEN%2FyeUUXG0VSH3aXbehGK6rKOo39ugDW0QThroEIQhtoN4nr3oCoTkg%2BmCZSi2HLYL1hiod3d8NvIlUtBH0gFLGOUkbTCNgOVkaKZGwOLWCqKMcSJjJX6R9H8svwRE%2Fbu5zdDtx6o96FCpMeSZaPhJh43GpPeVw8XHSLQtmERIuP3W5EgxWy44vTnC5LeGnkb7lvH%2BCZsyM7AnrAfRMPrw5Woy5TSulqf1X%2BP%2BbNMV08JipMr6rutYckPl%2Bt%2Fy%2FdUI7emlpEr7Jd1RLuU6TCc1NbBBjqkAVggamqfxF2Nbn%2ByMkbuXVJ%2FAg%2FjskWWZWLQXHTDd386daXa9giKO9hLgAWWzUSj6tlhRnyAK1WD0Wz5KwBUA1gIpKkQ46y86J8n7Dmb3J9sEb3u57JtscuyM1rWzQ5XKQDFdHLdngdWshHi4%2F1Qw9KuGXXQmXzNpY3vsNIfxIEiwplrv5oiB5RjGNbDjBwaYoKHCTOG8S9O%2FTfLXo%2F0BLprXzBM&X-Amz-Signature=fde9072defdea654600890db62c9c1ca3bfe75e8a0dffe1a2f37b7eb42577984&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PGROVJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjq83lyKbYA4fdkN8LA7d1VWomZEWTCunUIQ0Uubu7QIhAO%2Fvi2ubf1U79LY5Hm03ltlbOnzMJ8Sxhkq%2FMN904jV%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMOfJ82rAqXiLaupEq3AMwGMdKmiX%2Fev7%2F4s5Q7iZ1oOACOLo09KOaptrbkW7XRPVe3rg1OnR6v%2BKn7%2Bsaf8o4E7SOH5IoKtnrVcMXWipbE6laYdCoDN555In46XC4oRYmzuJCgeAz%2B3bStFczPsbiXhWKNck1Ucq%2Bfc2tm4MQYnBRAxec5UsqjFJhL9TyRCZuPdsnsANqmCk3RvEoH0DyJHB9DHEHshj6pWsWtAB3v2DjjJ1Kljz1%2FCvEzTztBk5aGgLgpoAPAORUM4KjPnjbOG0cOH%2B1KPNfh8J%2FlumonwGxIsmfBFVSuwSHl0oHwcobUfnX8BVGEXOPxegA7gSQQPkX11VqfxpHxISmo2Vy%2FQXr72u5NZMg%2BQS6svUEN%2FyeUUXG0VSH3aXbehGK6rKOo39ugDW0QThroEIQhtoN4nr3oCoTkg%2BmCZSi2HLYL1hiod3d8NvIlUtBH0gFLGOUkbTCNgOVkaKZGwOLWCqKMcSJjJX6R9H8svwRE%2Fbu5zdDtx6o96FCpMeSZaPhJh43GpPeVw8XHSLQtmERIuP3W5EgxWy44vTnC5LeGnkb7lvH%2BCZsyM7AnrAfRMPrw5Woy5TSulqf1X%2BP%2BbNMV08JipMr6rutYckPl%2Bt%2Fy%2FdUI7emlpEr7Jd1RLuU6TCc1NbBBjqkAVggamqfxF2Nbn%2ByMkbuXVJ%2FAg%2FjskWWZWLQXHTDd386daXa9giKO9hLgAWWzUSj6tlhRnyAK1WD0Wz5KwBUA1gIpKkQ46y86J8n7Dmb3J9sEb3u57JtscuyM1rWzQ5XKQDFdHLdngdWshHi4%2F1Qw9KuGXXQmXzNpY3vsNIfxIEiwplrv5oiB5RjGNbDjBwaYoKHCTOG8S9O%2FTfLXo%2F0BLprXzBM&X-Amz-Signature=4f974fac870ff0337cfa9375eadc9029ea2a70f36b0411f515ec0624b7f9b68d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PGROVJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjq83lyKbYA4fdkN8LA7d1VWomZEWTCunUIQ0Uubu7QIhAO%2Fvi2ubf1U79LY5Hm03ltlbOnzMJ8Sxhkq%2FMN904jV%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMOfJ82rAqXiLaupEq3AMwGMdKmiX%2Fev7%2F4s5Q7iZ1oOACOLo09KOaptrbkW7XRPVe3rg1OnR6v%2BKn7%2Bsaf8o4E7SOH5IoKtnrVcMXWipbE6laYdCoDN555In46XC4oRYmzuJCgeAz%2B3bStFczPsbiXhWKNck1Ucq%2Bfc2tm4MQYnBRAxec5UsqjFJhL9TyRCZuPdsnsANqmCk3RvEoH0DyJHB9DHEHshj6pWsWtAB3v2DjjJ1Kljz1%2FCvEzTztBk5aGgLgpoAPAORUM4KjPnjbOG0cOH%2B1KPNfh8J%2FlumonwGxIsmfBFVSuwSHl0oHwcobUfnX8BVGEXOPxegA7gSQQPkX11VqfxpHxISmo2Vy%2FQXr72u5NZMg%2BQS6svUEN%2FyeUUXG0VSH3aXbehGK6rKOo39ugDW0QThroEIQhtoN4nr3oCoTkg%2BmCZSi2HLYL1hiod3d8NvIlUtBH0gFLGOUkbTCNgOVkaKZGwOLWCqKMcSJjJX6R9H8svwRE%2Fbu5zdDtx6o96FCpMeSZaPhJh43GpPeVw8XHSLQtmERIuP3W5EgxWy44vTnC5LeGnkb7lvH%2BCZsyM7AnrAfRMPrw5Woy5TSulqf1X%2BP%2BbNMV08JipMr6rutYckPl%2Bt%2Fy%2FdUI7emlpEr7Jd1RLuU6TCc1NbBBjqkAVggamqfxF2Nbn%2ByMkbuXVJ%2FAg%2FjskWWZWLQXHTDd386daXa9giKO9hLgAWWzUSj6tlhRnyAK1WD0Wz5KwBUA1gIpKkQ46y86J8n7Dmb3J9sEb3u57JtscuyM1rWzQ5XKQDFdHLdngdWshHi4%2F1Qw9KuGXXQmXzNpY3vsNIfxIEiwplrv5oiB5RjGNbDjBwaYoKHCTOG8S9O%2FTfLXo%2F0BLprXzBM&X-Amz-Signature=acb83582f1c746a2f9349f1958968c9bf94420b280d3f77d70a205ffa5bdef21&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PGROVJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjq83lyKbYA4fdkN8LA7d1VWomZEWTCunUIQ0Uubu7QIhAO%2Fvi2ubf1U79LY5Hm03ltlbOnzMJ8Sxhkq%2FMN904jV%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMOfJ82rAqXiLaupEq3AMwGMdKmiX%2Fev7%2F4s5Q7iZ1oOACOLo09KOaptrbkW7XRPVe3rg1OnR6v%2BKn7%2Bsaf8o4E7SOH5IoKtnrVcMXWipbE6laYdCoDN555In46XC4oRYmzuJCgeAz%2B3bStFczPsbiXhWKNck1Ucq%2Bfc2tm4MQYnBRAxec5UsqjFJhL9TyRCZuPdsnsANqmCk3RvEoH0DyJHB9DHEHshj6pWsWtAB3v2DjjJ1Kljz1%2FCvEzTztBk5aGgLgpoAPAORUM4KjPnjbOG0cOH%2B1KPNfh8J%2FlumonwGxIsmfBFVSuwSHl0oHwcobUfnX8BVGEXOPxegA7gSQQPkX11VqfxpHxISmo2Vy%2FQXr72u5NZMg%2BQS6svUEN%2FyeUUXG0VSH3aXbehGK6rKOo39ugDW0QThroEIQhtoN4nr3oCoTkg%2BmCZSi2HLYL1hiod3d8NvIlUtBH0gFLGOUkbTCNgOVkaKZGwOLWCqKMcSJjJX6R9H8svwRE%2Fbu5zdDtx6o96FCpMeSZaPhJh43GpPeVw8XHSLQtmERIuP3W5EgxWy44vTnC5LeGnkb7lvH%2BCZsyM7AnrAfRMPrw5Woy5TSulqf1X%2BP%2BbNMV08JipMr6rutYckPl%2Bt%2Fy%2FdUI7emlpEr7Jd1RLuU6TCc1NbBBjqkAVggamqfxF2Nbn%2ByMkbuXVJ%2FAg%2FjskWWZWLQXHTDd386daXa9giKO9hLgAWWzUSj6tlhRnyAK1WD0Wz5KwBUA1gIpKkQ46y86J8n7Dmb3J9sEb3u57JtscuyM1rWzQ5XKQDFdHLdngdWshHi4%2F1Qw9KuGXXQmXzNpY3vsNIfxIEiwplrv5oiB5RjGNbDjBwaYoKHCTOG8S9O%2FTfLXo%2F0BLprXzBM&X-Amz-Signature=987451506bdac9bedc0bfbcf5d1f4dee74fbfc1fba7bbdedc721442305cbcb29&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PGROVJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjq83lyKbYA4fdkN8LA7d1VWomZEWTCunUIQ0Uubu7QIhAO%2Fvi2ubf1U79LY5Hm03ltlbOnzMJ8Sxhkq%2FMN904jV%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMOfJ82rAqXiLaupEq3AMwGMdKmiX%2Fev7%2F4s5Q7iZ1oOACOLo09KOaptrbkW7XRPVe3rg1OnR6v%2BKn7%2Bsaf8o4E7SOH5IoKtnrVcMXWipbE6laYdCoDN555In46XC4oRYmzuJCgeAz%2B3bStFczPsbiXhWKNck1Ucq%2Bfc2tm4MQYnBRAxec5UsqjFJhL9TyRCZuPdsnsANqmCk3RvEoH0DyJHB9DHEHshj6pWsWtAB3v2DjjJ1Kljz1%2FCvEzTztBk5aGgLgpoAPAORUM4KjPnjbOG0cOH%2B1KPNfh8J%2FlumonwGxIsmfBFVSuwSHl0oHwcobUfnX8BVGEXOPxegA7gSQQPkX11VqfxpHxISmo2Vy%2FQXr72u5NZMg%2BQS6svUEN%2FyeUUXG0VSH3aXbehGK6rKOo39ugDW0QThroEIQhtoN4nr3oCoTkg%2BmCZSi2HLYL1hiod3d8NvIlUtBH0gFLGOUkbTCNgOVkaKZGwOLWCqKMcSJjJX6R9H8svwRE%2Fbu5zdDtx6o96FCpMeSZaPhJh43GpPeVw8XHSLQtmERIuP3W5EgxWy44vTnC5LeGnkb7lvH%2BCZsyM7AnrAfRMPrw5Woy5TSulqf1X%2BP%2BbNMV08JipMr6rutYckPl%2Bt%2Fy%2FdUI7emlpEr7Jd1RLuU6TCc1NbBBjqkAVggamqfxF2Nbn%2ByMkbuXVJ%2FAg%2FjskWWZWLQXHTDd386daXa9giKO9hLgAWWzUSj6tlhRnyAK1WD0Wz5KwBUA1gIpKkQ46y86J8n7Dmb3J9sEb3u57JtscuyM1rWzQ5XKQDFdHLdngdWshHi4%2F1Qw9KuGXXQmXzNpY3vsNIfxIEiwplrv5oiB5RjGNbDjBwaYoKHCTOG8S9O%2FTfLXo%2F0BLprXzBM&X-Amz-Signature=77fa5c36f5d6936703bafd41ee68c4e172cf6e6a7e089b1ecb08908536ea7cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PGROVJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjq83lyKbYA4fdkN8LA7d1VWomZEWTCunUIQ0Uubu7QIhAO%2Fvi2ubf1U79LY5Hm03ltlbOnzMJ8Sxhkq%2FMN904jV%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMOfJ82rAqXiLaupEq3AMwGMdKmiX%2Fev7%2F4s5Q7iZ1oOACOLo09KOaptrbkW7XRPVe3rg1OnR6v%2BKn7%2Bsaf8o4E7SOH5IoKtnrVcMXWipbE6laYdCoDN555In46XC4oRYmzuJCgeAz%2B3bStFczPsbiXhWKNck1Ucq%2Bfc2tm4MQYnBRAxec5UsqjFJhL9TyRCZuPdsnsANqmCk3RvEoH0DyJHB9DHEHshj6pWsWtAB3v2DjjJ1Kljz1%2FCvEzTztBk5aGgLgpoAPAORUM4KjPnjbOG0cOH%2B1KPNfh8J%2FlumonwGxIsmfBFVSuwSHl0oHwcobUfnX8BVGEXOPxegA7gSQQPkX11VqfxpHxISmo2Vy%2FQXr72u5NZMg%2BQS6svUEN%2FyeUUXG0VSH3aXbehGK6rKOo39ugDW0QThroEIQhtoN4nr3oCoTkg%2BmCZSi2HLYL1hiod3d8NvIlUtBH0gFLGOUkbTCNgOVkaKZGwOLWCqKMcSJjJX6R9H8svwRE%2Fbu5zdDtx6o96FCpMeSZaPhJh43GpPeVw8XHSLQtmERIuP3W5EgxWy44vTnC5LeGnkb7lvH%2BCZsyM7AnrAfRMPrw5Woy5TSulqf1X%2BP%2BbNMV08JipMr6rutYckPl%2Bt%2Fy%2FdUI7emlpEr7Jd1RLuU6TCc1NbBBjqkAVggamqfxF2Nbn%2ByMkbuXVJ%2FAg%2FjskWWZWLQXHTDd386daXa9giKO9hLgAWWzUSj6tlhRnyAK1WD0Wz5KwBUA1gIpKkQ46y86J8n7Dmb3J9sEb3u57JtscuyM1rWzQ5XKQDFdHLdngdWshHi4%2F1Qw9KuGXXQmXzNpY3vsNIfxIEiwplrv5oiB5RjGNbDjBwaYoKHCTOG8S9O%2FTfLXo%2F0BLprXzBM&X-Amz-Signature=709c42186330b03e7bd5ce8fa8d4e033a3093af92f64a429ef9708696df77c44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PGROVJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjq83lyKbYA4fdkN8LA7d1VWomZEWTCunUIQ0Uubu7QIhAO%2Fvi2ubf1U79LY5Hm03ltlbOnzMJ8Sxhkq%2FMN904jV%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMOfJ82rAqXiLaupEq3AMwGMdKmiX%2Fev7%2F4s5Q7iZ1oOACOLo09KOaptrbkW7XRPVe3rg1OnR6v%2BKn7%2Bsaf8o4E7SOH5IoKtnrVcMXWipbE6laYdCoDN555In46XC4oRYmzuJCgeAz%2B3bStFczPsbiXhWKNck1Ucq%2Bfc2tm4MQYnBRAxec5UsqjFJhL9TyRCZuPdsnsANqmCk3RvEoH0DyJHB9DHEHshj6pWsWtAB3v2DjjJ1Kljz1%2FCvEzTztBk5aGgLgpoAPAORUM4KjPnjbOG0cOH%2B1KPNfh8J%2FlumonwGxIsmfBFVSuwSHl0oHwcobUfnX8BVGEXOPxegA7gSQQPkX11VqfxpHxISmo2Vy%2FQXr72u5NZMg%2BQS6svUEN%2FyeUUXG0VSH3aXbehGK6rKOo39ugDW0QThroEIQhtoN4nr3oCoTkg%2BmCZSi2HLYL1hiod3d8NvIlUtBH0gFLGOUkbTCNgOVkaKZGwOLWCqKMcSJjJX6R9H8svwRE%2Fbu5zdDtx6o96FCpMeSZaPhJh43GpPeVw8XHSLQtmERIuP3W5EgxWy44vTnC5LeGnkb7lvH%2BCZsyM7AnrAfRMPrw5Woy5TSulqf1X%2BP%2BbNMV08JipMr6rutYckPl%2Bt%2Fy%2FdUI7emlpEr7Jd1RLuU6TCc1NbBBjqkAVggamqfxF2Nbn%2ByMkbuXVJ%2FAg%2FjskWWZWLQXHTDd386daXa9giKO9hLgAWWzUSj6tlhRnyAK1WD0Wz5KwBUA1gIpKkQ46y86J8n7Dmb3J9sEb3u57JtscuyM1rWzQ5XKQDFdHLdngdWshHi4%2F1Qw9KuGXXQmXzNpY3vsNIfxIEiwplrv5oiB5RjGNbDjBwaYoKHCTOG8S9O%2FTfLXo%2F0BLprXzBM&X-Amz-Signature=09143830677735af18a3d372ce524bc7b45e9a8ab594e9a9a0de84f75e8365c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
