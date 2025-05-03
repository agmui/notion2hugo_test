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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDPSEO6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHCYRER72F%2B6zLB9JkS6c7AqSCX7s9%2BgB5NmMA7pvJb5AiBqaVuNJFfkPySexebM7jKRpAJkhT670pubfQPTk%2BBPaSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2baDaF3jSw2qL9gbKtwDGpKCBC129lFiZwmOEwV%2Fhbl9HqxYOnQ%2FnVgfKPknaSve3VXiY%2BLPNbVZWR99sl744sZuUTPqQgD%2BIWBkU%2F1kJFXV4nzuGyYKrWplko9b2yA4XKOCswOVoUeTMq5Zj%2Fa45n6cU3hik3%2BDTx4oJKCUV142HhBwsewU1JVwOc3xtqdJCZiSY5dGFPOGUgbhynL2CNZdLM9Fz5V2GDZEwDeZJ%2FWrIhlv2GeG7W726cOO7J95aOIeZl%2B3oGFHwUFUbzeeYe%2B%2FVwCuyF8g6e%2Fy4W%2BG%2BKlDVLmOoN23oiS9lCd2Hm0gD4O5%2FwARPGuQK3aZ5CQxwqxNFJaPJFVwcvZjKZVOeg4WC38fdJEw2Rcmv4ou%2BrzVr%2BrBcv08lAPsOq9lBqKTugTkZ0R%2BWicgjxWmF%2BZIveJCiKdYIU8ntMoXgmua%2F6NzNPJ3qbVB3%2Br6jglAWo8wAA8CZ5ZJ58U2suLwGHDVcesgoPNFg5Tags0MqM4%2BHIx1Nrz3v9uF0rwPpnRhJdWZcYR2HdVHJarXEDNjcjN1rCozZR8ZSVPKugnwLexXe0Jlw%2F8QKC%2F%2FS1xBsBsXmJCai4szg3IT6kl%2B0yk5OX9hypntqmTIaALc4WOmECtNcrieIKaMy4yAzQ5b4ukwsdrZwAY6pgGCGielILnBCUaUqMRz1fwAujGSvjGLZYyWW%2FP68Hx987LJtUa11d0tXb60BeCaRMJdBfI1eNwOnKICrfwTZ5owu8YvcHnmkyHcMN10nmBtrV80k62d96PDAFl8rGJ8oAv554aLvkXOTaCkGHHXaCjPZE2Jr2U3FxLyfDn1xB7%2Fqrgq4EUipCo2fdOW5zuUt70hgRlEDo9QwhT3cO29BIR6iOs8P8xo&X-Amz-Signature=b0c2334fd4216f5f6d56556afa0ec6cd52dd945ae314fcebdc88976051e3dc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDPSEO6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHCYRER72F%2B6zLB9JkS6c7AqSCX7s9%2BgB5NmMA7pvJb5AiBqaVuNJFfkPySexebM7jKRpAJkhT670pubfQPTk%2BBPaSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2baDaF3jSw2qL9gbKtwDGpKCBC129lFiZwmOEwV%2Fhbl9HqxYOnQ%2FnVgfKPknaSve3VXiY%2BLPNbVZWR99sl744sZuUTPqQgD%2BIWBkU%2F1kJFXV4nzuGyYKrWplko9b2yA4XKOCswOVoUeTMq5Zj%2Fa45n6cU3hik3%2BDTx4oJKCUV142HhBwsewU1JVwOc3xtqdJCZiSY5dGFPOGUgbhynL2CNZdLM9Fz5V2GDZEwDeZJ%2FWrIhlv2GeG7W726cOO7J95aOIeZl%2B3oGFHwUFUbzeeYe%2B%2FVwCuyF8g6e%2Fy4W%2BG%2BKlDVLmOoN23oiS9lCd2Hm0gD4O5%2FwARPGuQK3aZ5CQxwqxNFJaPJFVwcvZjKZVOeg4WC38fdJEw2Rcmv4ou%2BrzVr%2BrBcv08lAPsOq9lBqKTugTkZ0R%2BWicgjxWmF%2BZIveJCiKdYIU8ntMoXgmua%2F6NzNPJ3qbVB3%2Br6jglAWo8wAA8CZ5ZJ58U2suLwGHDVcesgoPNFg5Tags0MqM4%2BHIx1Nrz3v9uF0rwPpnRhJdWZcYR2HdVHJarXEDNjcjN1rCozZR8ZSVPKugnwLexXe0Jlw%2F8QKC%2F%2FS1xBsBsXmJCai4szg3IT6kl%2B0yk5OX9hypntqmTIaALc4WOmECtNcrieIKaMy4yAzQ5b4ukwsdrZwAY6pgGCGielILnBCUaUqMRz1fwAujGSvjGLZYyWW%2FP68Hx987LJtUa11d0tXb60BeCaRMJdBfI1eNwOnKICrfwTZ5owu8YvcHnmkyHcMN10nmBtrV80k62d96PDAFl8rGJ8oAv554aLvkXOTaCkGHHXaCjPZE2Jr2U3FxLyfDn1xB7%2Fqrgq4EUipCo2fdOW5zuUt70hgRlEDo9QwhT3cO29BIR6iOs8P8xo&X-Amz-Signature=10c9b3bc7ba546c602962b522297936979439603bbaebe61cc93d25205d607e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDPSEO6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHCYRER72F%2B6zLB9JkS6c7AqSCX7s9%2BgB5NmMA7pvJb5AiBqaVuNJFfkPySexebM7jKRpAJkhT670pubfQPTk%2BBPaSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2baDaF3jSw2qL9gbKtwDGpKCBC129lFiZwmOEwV%2Fhbl9HqxYOnQ%2FnVgfKPknaSve3VXiY%2BLPNbVZWR99sl744sZuUTPqQgD%2BIWBkU%2F1kJFXV4nzuGyYKrWplko9b2yA4XKOCswOVoUeTMq5Zj%2Fa45n6cU3hik3%2BDTx4oJKCUV142HhBwsewU1JVwOc3xtqdJCZiSY5dGFPOGUgbhynL2CNZdLM9Fz5V2GDZEwDeZJ%2FWrIhlv2GeG7W726cOO7J95aOIeZl%2B3oGFHwUFUbzeeYe%2B%2FVwCuyF8g6e%2Fy4W%2BG%2BKlDVLmOoN23oiS9lCd2Hm0gD4O5%2FwARPGuQK3aZ5CQxwqxNFJaPJFVwcvZjKZVOeg4WC38fdJEw2Rcmv4ou%2BrzVr%2BrBcv08lAPsOq9lBqKTugTkZ0R%2BWicgjxWmF%2BZIveJCiKdYIU8ntMoXgmua%2F6NzNPJ3qbVB3%2Br6jglAWo8wAA8CZ5ZJ58U2suLwGHDVcesgoPNFg5Tags0MqM4%2BHIx1Nrz3v9uF0rwPpnRhJdWZcYR2HdVHJarXEDNjcjN1rCozZR8ZSVPKugnwLexXe0Jlw%2F8QKC%2F%2FS1xBsBsXmJCai4szg3IT6kl%2B0yk5OX9hypntqmTIaALc4WOmECtNcrieIKaMy4yAzQ5b4ukwsdrZwAY6pgGCGielILnBCUaUqMRz1fwAujGSvjGLZYyWW%2FP68Hx987LJtUa11d0tXb60BeCaRMJdBfI1eNwOnKICrfwTZ5owu8YvcHnmkyHcMN10nmBtrV80k62d96PDAFl8rGJ8oAv554aLvkXOTaCkGHHXaCjPZE2Jr2U3FxLyfDn1xB7%2Fqrgq4EUipCo2fdOW5zuUt70hgRlEDo9QwhT3cO29BIR6iOs8P8xo&X-Amz-Signature=b1c13a029e5dfd5cae8cc5dc13e2d071f3705939b020a5248a60a75eba06a597&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDPSEO6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHCYRER72F%2B6zLB9JkS6c7AqSCX7s9%2BgB5NmMA7pvJb5AiBqaVuNJFfkPySexebM7jKRpAJkhT670pubfQPTk%2BBPaSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2baDaF3jSw2qL9gbKtwDGpKCBC129lFiZwmOEwV%2Fhbl9HqxYOnQ%2FnVgfKPknaSve3VXiY%2BLPNbVZWR99sl744sZuUTPqQgD%2BIWBkU%2F1kJFXV4nzuGyYKrWplko9b2yA4XKOCswOVoUeTMq5Zj%2Fa45n6cU3hik3%2BDTx4oJKCUV142HhBwsewU1JVwOc3xtqdJCZiSY5dGFPOGUgbhynL2CNZdLM9Fz5V2GDZEwDeZJ%2FWrIhlv2GeG7W726cOO7J95aOIeZl%2B3oGFHwUFUbzeeYe%2B%2FVwCuyF8g6e%2Fy4W%2BG%2BKlDVLmOoN23oiS9lCd2Hm0gD4O5%2FwARPGuQK3aZ5CQxwqxNFJaPJFVwcvZjKZVOeg4WC38fdJEw2Rcmv4ou%2BrzVr%2BrBcv08lAPsOq9lBqKTugTkZ0R%2BWicgjxWmF%2BZIveJCiKdYIU8ntMoXgmua%2F6NzNPJ3qbVB3%2Br6jglAWo8wAA8CZ5ZJ58U2suLwGHDVcesgoPNFg5Tags0MqM4%2BHIx1Nrz3v9uF0rwPpnRhJdWZcYR2HdVHJarXEDNjcjN1rCozZR8ZSVPKugnwLexXe0Jlw%2F8QKC%2F%2FS1xBsBsXmJCai4szg3IT6kl%2B0yk5OX9hypntqmTIaALc4WOmECtNcrieIKaMy4yAzQ5b4ukwsdrZwAY6pgGCGielILnBCUaUqMRz1fwAujGSvjGLZYyWW%2FP68Hx987LJtUa11d0tXb60BeCaRMJdBfI1eNwOnKICrfwTZ5owu8YvcHnmkyHcMN10nmBtrV80k62d96PDAFl8rGJ8oAv554aLvkXOTaCkGHHXaCjPZE2Jr2U3FxLyfDn1xB7%2Fqrgq4EUipCo2fdOW5zuUt70hgRlEDo9QwhT3cO29BIR6iOs8P8xo&X-Amz-Signature=0d4b9fb1bcb61288c19829325e8c0e64e5469f6dc443664b85fb285915657c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDPSEO6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHCYRER72F%2B6zLB9JkS6c7AqSCX7s9%2BgB5NmMA7pvJb5AiBqaVuNJFfkPySexebM7jKRpAJkhT670pubfQPTk%2BBPaSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2baDaF3jSw2qL9gbKtwDGpKCBC129lFiZwmOEwV%2Fhbl9HqxYOnQ%2FnVgfKPknaSve3VXiY%2BLPNbVZWR99sl744sZuUTPqQgD%2BIWBkU%2F1kJFXV4nzuGyYKrWplko9b2yA4XKOCswOVoUeTMq5Zj%2Fa45n6cU3hik3%2BDTx4oJKCUV142HhBwsewU1JVwOc3xtqdJCZiSY5dGFPOGUgbhynL2CNZdLM9Fz5V2GDZEwDeZJ%2FWrIhlv2GeG7W726cOO7J95aOIeZl%2B3oGFHwUFUbzeeYe%2B%2FVwCuyF8g6e%2Fy4W%2BG%2BKlDVLmOoN23oiS9lCd2Hm0gD4O5%2FwARPGuQK3aZ5CQxwqxNFJaPJFVwcvZjKZVOeg4WC38fdJEw2Rcmv4ou%2BrzVr%2BrBcv08lAPsOq9lBqKTugTkZ0R%2BWicgjxWmF%2BZIveJCiKdYIU8ntMoXgmua%2F6NzNPJ3qbVB3%2Br6jglAWo8wAA8CZ5ZJ58U2suLwGHDVcesgoPNFg5Tags0MqM4%2BHIx1Nrz3v9uF0rwPpnRhJdWZcYR2HdVHJarXEDNjcjN1rCozZR8ZSVPKugnwLexXe0Jlw%2F8QKC%2F%2FS1xBsBsXmJCai4szg3IT6kl%2B0yk5OX9hypntqmTIaALc4WOmECtNcrieIKaMy4yAzQ5b4ukwsdrZwAY6pgGCGielILnBCUaUqMRz1fwAujGSvjGLZYyWW%2FP68Hx987LJtUa11d0tXb60BeCaRMJdBfI1eNwOnKICrfwTZ5owu8YvcHnmkyHcMN10nmBtrV80k62d96PDAFl8rGJ8oAv554aLvkXOTaCkGHHXaCjPZE2Jr2U3FxLyfDn1xB7%2Fqrgq4EUipCo2fdOW5zuUt70hgRlEDo9QwhT3cO29BIR6iOs8P8xo&X-Amz-Signature=8bb5f039688f12d5f1ffac96a6bd450f8c88096bf5f3f96f98967867a5b58912&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDPSEO6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHCYRER72F%2B6zLB9JkS6c7AqSCX7s9%2BgB5NmMA7pvJb5AiBqaVuNJFfkPySexebM7jKRpAJkhT670pubfQPTk%2BBPaSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2baDaF3jSw2qL9gbKtwDGpKCBC129lFiZwmOEwV%2Fhbl9HqxYOnQ%2FnVgfKPknaSve3VXiY%2BLPNbVZWR99sl744sZuUTPqQgD%2BIWBkU%2F1kJFXV4nzuGyYKrWplko9b2yA4XKOCswOVoUeTMq5Zj%2Fa45n6cU3hik3%2BDTx4oJKCUV142HhBwsewU1JVwOc3xtqdJCZiSY5dGFPOGUgbhynL2CNZdLM9Fz5V2GDZEwDeZJ%2FWrIhlv2GeG7W726cOO7J95aOIeZl%2B3oGFHwUFUbzeeYe%2B%2FVwCuyF8g6e%2Fy4W%2BG%2BKlDVLmOoN23oiS9lCd2Hm0gD4O5%2FwARPGuQK3aZ5CQxwqxNFJaPJFVwcvZjKZVOeg4WC38fdJEw2Rcmv4ou%2BrzVr%2BrBcv08lAPsOq9lBqKTugTkZ0R%2BWicgjxWmF%2BZIveJCiKdYIU8ntMoXgmua%2F6NzNPJ3qbVB3%2Br6jglAWo8wAA8CZ5ZJ58U2suLwGHDVcesgoPNFg5Tags0MqM4%2BHIx1Nrz3v9uF0rwPpnRhJdWZcYR2HdVHJarXEDNjcjN1rCozZR8ZSVPKugnwLexXe0Jlw%2F8QKC%2F%2FS1xBsBsXmJCai4szg3IT6kl%2B0yk5OX9hypntqmTIaALc4WOmECtNcrieIKaMy4yAzQ5b4ukwsdrZwAY6pgGCGielILnBCUaUqMRz1fwAujGSvjGLZYyWW%2FP68Hx987LJtUa11d0tXb60BeCaRMJdBfI1eNwOnKICrfwTZ5owu8YvcHnmkyHcMN10nmBtrV80k62d96PDAFl8rGJ8oAv554aLvkXOTaCkGHHXaCjPZE2Jr2U3FxLyfDn1xB7%2Fqrgq4EUipCo2fdOW5zuUt70hgRlEDo9QwhT3cO29BIR6iOs8P8xo&X-Amz-Signature=705ec239c6ae59cd93935adefe7a4adaa4c3defa80675a6d697c74bc69fa6fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDPSEO6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHCYRER72F%2B6zLB9JkS6c7AqSCX7s9%2BgB5NmMA7pvJb5AiBqaVuNJFfkPySexebM7jKRpAJkhT670pubfQPTk%2BBPaSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2baDaF3jSw2qL9gbKtwDGpKCBC129lFiZwmOEwV%2Fhbl9HqxYOnQ%2FnVgfKPknaSve3VXiY%2BLPNbVZWR99sl744sZuUTPqQgD%2BIWBkU%2F1kJFXV4nzuGyYKrWplko9b2yA4XKOCswOVoUeTMq5Zj%2Fa45n6cU3hik3%2BDTx4oJKCUV142HhBwsewU1JVwOc3xtqdJCZiSY5dGFPOGUgbhynL2CNZdLM9Fz5V2GDZEwDeZJ%2FWrIhlv2GeG7W726cOO7J95aOIeZl%2B3oGFHwUFUbzeeYe%2B%2FVwCuyF8g6e%2Fy4W%2BG%2BKlDVLmOoN23oiS9lCd2Hm0gD4O5%2FwARPGuQK3aZ5CQxwqxNFJaPJFVwcvZjKZVOeg4WC38fdJEw2Rcmv4ou%2BrzVr%2BrBcv08lAPsOq9lBqKTugTkZ0R%2BWicgjxWmF%2BZIveJCiKdYIU8ntMoXgmua%2F6NzNPJ3qbVB3%2Br6jglAWo8wAA8CZ5ZJ58U2suLwGHDVcesgoPNFg5Tags0MqM4%2BHIx1Nrz3v9uF0rwPpnRhJdWZcYR2HdVHJarXEDNjcjN1rCozZR8ZSVPKugnwLexXe0Jlw%2F8QKC%2F%2FS1xBsBsXmJCai4szg3IT6kl%2B0yk5OX9hypntqmTIaALc4WOmECtNcrieIKaMy4yAzQ5b4ukwsdrZwAY6pgGCGielILnBCUaUqMRz1fwAujGSvjGLZYyWW%2FP68Hx987LJtUa11d0tXb60BeCaRMJdBfI1eNwOnKICrfwTZ5owu8YvcHnmkyHcMN10nmBtrV80k62d96PDAFl8rGJ8oAv554aLvkXOTaCkGHHXaCjPZE2Jr2U3FxLyfDn1xB7%2Fqrgq4EUipCo2fdOW5zuUt70hgRlEDo9QwhT3cO29BIR6iOs8P8xo&X-Amz-Signature=a9c4a569e8fd915675b44355bc20b28e4ce34c8226fe737f86ee9eb056ebfd74&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
