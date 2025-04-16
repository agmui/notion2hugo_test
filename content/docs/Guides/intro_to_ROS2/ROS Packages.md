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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGKWY6P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdV4sTqXDji8mVX3CljUx4fCnwcx4iZqdRoPEbJlXKPAiBV4N93VgrT81lrKcn6IYcf8bn2yrlCAdyJFQZ1qMlvISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmKrQheqRhXGIGa2qKtwDjj7xmNqLZpiAnzqQsYBmzXLgXJKcjwaq%2BWZVaeKO9eTsaG05TnkkVhjsfrVLwMTJ1pkQPmZ1bHRsAZo7qrqWYM6XfmjCV5E%2BQfi4gCaL5B%2BrBGRQ4WaBwXrwRGV0HQvT4vP0j%2B1AkBgeqUVnYxU2CaxRpXtkJOuixM51gRU4yB62lm4r9s8Pdp94aDsjj23M3hBvhlgh0XCKgo6mDYv1MjR8NZB7j2umZiaaikHKPh5lLg2Rtty2luqVb2xezxFtStJzGmd7hSuenWXOMn5elVGX0TjLBKRdriw9Ia4Cfv7Z9M7IVlE%2FvnwH%2F9p8j0AuD3DrscO6iNqDw8eDdjKAQqMC%2FHEg05Wbl%2B0Lw8zkSN2riejhSj6LKaV%2FircmLy%2FagpCxEq9sa7CLjv8PuqCsl%2Fo4N9iRA7ZZwEXbdkfSHA4zc5o3RP%2B9rtNpAc1FQ38sEGJprbDZVHn%2FCVfTPw2koU%2FFJJ7D3Npi25S5IfieO%2FhTnGYTVa36HvtYIz%2Fds8U8U24C32qYdqjf1nfIFf4Pv1IEXk6CryT6IyOxTFS%2BluMvcTek119ve3GrDNb39uP7PDuNWItKCo5NHhgl0xcxEq2M%2FxX3mmZJmlEkXh4kHTNwKN%2Fzo8NDd8VPePow76r%2BvwY6pgEpEnJqkvK%2FIMuepgKUQ6FMIgEaG%2BhMVsvEMOADmcMm2d7rkvhtxMWfNTE8aFuq2ujKnyTKaZaNte2bcbgEQrh0EyW97KCtwukIODRGiGLApLAYW23e1eHDQNBE%2BVx1g8P5rfKkLYIlBQL1r6tAIT%2FLkXBWiIB08W7RUCuNvcuQYrYKbMAzpD7bNZ%2F5VJm%2BT83foHOPaA9VTiYPkesRDqhCD17j%2Fhcn&X-Amz-Signature=715fdf512ed2c81e1c48fb2da1e11e9c2e5d9ec6d8efbf0769df80b81b1a8314&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGKWY6P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdV4sTqXDji8mVX3CljUx4fCnwcx4iZqdRoPEbJlXKPAiBV4N93VgrT81lrKcn6IYcf8bn2yrlCAdyJFQZ1qMlvISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmKrQheqRhXGIGa2qKtwDjj7xmNqLZpiAnzqQsYBmzXLgXJKcjwaq%2BWZVaeKO9eTsaG05TnkkVhjsfrVLwMTJ1pkQPmZ1bHRsAZo7qrqWYM6XfmjCV5E%2BQfi4gCaL5B%2BrBGRQ4WaBwXrwRGV0HQvT4vP0j%2B1AkBgeqUVnYxU2CaxRpXtkJOuixM51gRU4yB62lm4r9s8Pdp94aDsjj23M3hBvhlgh0XCKgo6mDYv1MjR8NZB7j2umZiaaikHKPh5lLg2Rtty2luqVb2xezxFtStJzGmd7hSuenWXOMn5elVGX0TjLBKRdriw9Ia4Cfv7Z9M7IVlE%2FvnwH%2F9p8j0AuD3DrscO6iNqDw8eDdjKAQqMC%2FHEg05Wbl%2B0Lw8zkSN2riejhSj6LKaV%2FircmLy%2FagpCxEq9sa7CLjv8PuqCsl%2Fo4N9iRA7ZZwEXbdkfSHA4zc5o3RP%2B9rtNpAc1FQ38sEGJprbDZVHn%2FCVfTPw2koU%2FFJJ7D3Npi25S5IfieO%2FhTnGYTVa36HvtYIz%2Fds8U8U24C32qYdqjf1nfIFf4Pv1IEXk6CryT6IyOxTFS%2BluMvcTek119ve3GrDNb39uP7PDuNWItKCo5NHhgl0xcxEq2M%2FxX3mmZJmlEkXh4kHTNwKN%2Fzo8NDd8VPePow76r%2BvwY6pgEpEnJqkvK%2FIMuepgKUQ6FMIgEaG%2BhMVsvEMOADmcMm2d7rkvhtxMWfNTE8aFuq2ujKnyTKaZaNte2bcbgEQrh0EyW97KCtwukIODRGiGLApLAYW23e1eHDQNBE%2BVx1g8P5rfKkLYIlBQL1r6tAIT%2FLkXBWiIB08W7RUCuNvcuQYrYKbMAzpD7bNZ%2F5VJm%2BT83foHOPaA9VTiYPkesRDqhCD17j%2Fhcn&X-Amz-Signature=f27fc1220a24d232fa687f549508413dcb27097a066566221ed626022edbb341&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGKWY6P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdV4sTqXDji8mVX3CljUx4fCnwcx4iZqdRoPEbJlXKPAiBV4N93VgrT81lrKcn6IYcf8bn2yrlCAdyJFQZ1qMlvISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmKrQheqRhXGIGa2qKtwDjj7xmNqLZpiAnzqQsYBmzXLgXJKcjwaq%2BWZVaeKO9eTsaG05TnkkVhjsfrVLwMTJ1pkQPmZ1bHRsAZo7qrqWYM6XfmjCV5E%2BQfi4gCaL5B%2BrBGRQ4WaBwXrwRGV0HQvT4vP0j%2B1AkBgeqUVnYxU2CaxRpXtkJOuixM51gRU4yB62lm4r9s8Pdp94aDsjj23M3hBvhlgh0XCKgo6mDYv1MjR8NZB7j2umZiaaikHKPh5lLg2Rtty2luqVb2xezxFtStJzGmd7hSuenWXOMn5elVGX0TjLBKRdriw9Ia4Cfv7Z9M7IVlE%2FvnwH%2F9p8j0AuD3DrscO6iNqDw8eDdjKAQqMC%2FHEg05Wbl%2B0Lw8zkSN2riejhSj6LKaV%2FircmLy%2FagpCxEq9sa7CLjv8PuqCsl%2Fo4N9iRA7ZZwEXbdkfSHA4zc5o3RP%2B9rtNpAc1FQ38sEGJprbDZVHn%2FCVfTPw2koU%2FFJJ7D3Npi25S5IfieO%2FhTnGYTVa36HvtYIz%2Fds8U8U24C32qYdqjf1nfIFf4Pv1IEXk6CryT6IyOxTFS%2BluMvcTek119ve3GrDNb39uP7PDuNWItKCo5NHhgl0xcxEq2M%2FxX3mmZJmlEkXh4kHTNwKN%2Fzo8NDd8VPePow76r%2BvwY6pgEpEnJqkvK%2FIMuepgKUQ6FMIgEaG%2BhMVsvEMOADmcMm2d7rkvhtxMWfNTE8aFuq2ujKnyTKaZaNte2bcbgEQrh0EyW97KCtwukIODRGiGLApLAYW23e1eHDQNBE%2BVx1g8P5rfKkLYIlBQL1r6tAIT%2FLkXBWiIB08W7RUCuNvcuQYrYKbMAzpD7bNZ%2F5VJm%2BT83foHOPaA9VTiYPkesRDqhCD17j%2Fhcn&X-Amz-Signature=aa57bfd65128f325389071307ac6bdfe9a3dc7b6887c26d9f5b9409fccca3d51&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGKWY6P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdV4sTqXDji8mVX3CljUx4fCnwcx4iZqdRoPEbJlXKPAiBV4N93VgrT81lrKcn6IYcf8bn2yrlCAdyJFQZ1qMlvISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmKrQheqRhXGIGa2qKtwDjj7xmNqLZpiAnzqQsYBmzXLgXJKcjwaq%2BWZVaeKO9eTsaG05TnkkVhjsfrVLwMTJ1pkQPmZ1bHRsAZo7qrqWYM6XfmjCV5E%2BQfi4gCaL5B%2BrBGRQ4WaBwXrwRGV0HQvT4vP0j%2B1AkBgeqUVnYxU2CaxRpXtkJOuixM51gRU4yB62lm4r9s8Pdp94aDsjj23M3hBvhlgh0XCKgo6mDYv1MjR8NZB7j2umZiaaikHKPh5lLg2Rtty2luqVb2xezxFtStJzGmd7hSuenWXOMn5elVGX0TjLBKRdriw9Ia4Cfv7Z9M7IVlE%2FvnwH%2F9p8j0AuD3DrscO6iNqDw8eDdjKAQqMC%2FHEg05Wbl%2B0Lw8zkSN2riejhSj6LKaV%2FircmLy%2FagpCxEq9sa7CLjv8PuqCsl%2Fo4N9iRA7ZZwEXbdkfSHA4zc5o3RP%2B9rtNpAc1FQ38sEGJprbDZVHn%2FCVfTPw2koU%2FFJJ7D3Npi25S5IfieO%2FhTnGYTVa36HvtYIz%2Fds8U8U24C32qYdqjf1nfIFf4Pv1IEXk6CryT6IyOxTFS%2BluMvcTek119ve3GrDNb39uP7PDuNWItKCo5NHhgl0xcxEq2M%2FxX3mmZJmlEkXh4kHTNwKN%2Fzo8NDd8VPePow76r%2BvwY6pgEpEnJqkvK%2FIMuepgKUQ6FMIgEaG%2BhMVsvEMOADmcMm2d7rkvhtxMWfNTE8aFuq2ujKnyTKaZaNte2bcbgEQrh0EyW97KCtwukIODRGiGLApLAYW23e1eHDQNBE%2BVx1g8P5rfKkLYIlBQL1r6tAIT%2FLkXBWiIB08W7RUCuNvcuQYrYKbMAzpD7bNZ%2F5VJm%2BT83foHOPaA9VTiYPkesRDqhCD17j%2Fhcn&X-Amz-Signature=e1976ec916692172433705062861d07e4f47d18237a480c625b396d3a3ebf8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGKWY6P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdV4sTqXDji8mVX3CljUx4fCnwcx4iZqdRoPEbJlXKPAiBV4N93VgrT81lrKcn6IYcf8bn2yrlCAdyJFQZ1qMlvISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmKrQheqRhXGIGa2qKtwDjj7xmNqLZpiAnzqQsYBmzXLgXJKcjwaq%2BWZVaeKO9eTsaG05TnkkVhjsfrVLwMTJ1pkQPmZ1bHRsAZo7qrqWYM6XfmjCV5E%2BQfi4gCaL5B%2BrBGRQ4WaBwXrwRGV0HQvT4vP0j%2B1AkBgeqUVnYxU2CaxRpXtkJOuixM51gRU4yB62lm4r9s8Pdp94aDsjj23M3hBvhlgh0XCKgo6mDYv1MjR8NZB7j2umZiaaikHKPh5lLg2Rtty2luqVb2xezxFtStJzGmd7hSuenWXOMn5elVGX0TjLBKRdriw9Ia4Cfv7Z9M7IVlE%2FvnwH%2F9p8j0AuD3DrscO6iNqDw8eDdjKAQqMC%2FHEg05Wbl%2B0Lw8zkSN2riejhSj6LKaV%2FircmLy%2FagpCxEq9sa7CLjv8PuqCsl%2Fo4N9iRA7ZZwEXbdkfSHA4zc5o3RP%2B9rtNpAc1FQ38sEGJprbDZVHn%2FCVfTPw2koU%2FFJJ7D3Npi25S5IfieO%2FhTnGYTVa36HvtYIz%2Fds8U8U24C32qYdqjf1nfIFf4Pv1IEXk6CryT6IyOxTFS%2BluMvcTek119ve3GrDNb39uP7PDuNWItKCo5NHhgl0xcxEq2M%2FxX3mmZJmlEkXh4kHTNwKN%2Fzo8NDd8VPePow76r%2BvwY6pgEpEnJqkvK%2FIMuepgKUQ6FMIgEaG%2BhMVsvEMOADmcMm2d7rkvhtxMWfNTE8aFuq2ujKnyTKaZaNte2bcbgEQrh0EyW97KCtwukIODRGiGLApLAYW23e1eHDQNBE%2BVx1g8P5rfKkLYIlBQL1r6tAIT%2FLkXBWiIB08W7RUCuNvcuQYrYKbMAzpD7bNZ%2F5VJm%2BT83foHOPaA9VTiYPkesRDqhCD17j%2Fhcn&X-Amz-Signature=56f62e9bc60f8e1cd1f9fb274d3cbbac395bf167fd237231fee74c8ad5aa75fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGKWY6P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdV4sTqXDji8mVX3CljUx4fCnwcx4iZqdRoPEbJlXKPAiBV4N93VgrT81lrKcn6IYcf8bn2yrlCAdyJFQZ1qMlvISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmKrQheqRhXGIGa2qKtwDjj7xmNqLZpiAnzqQsYBmzXLgXJKcjwaq%2BWZVaeKO9eTsaG05TnkkVhjsfrVLwMTJ1pkQPmZ1bHRsAZo7qrqWYM6XfmjCV5E%2BQfi4gCaL5B%2BrBGRQ4WaBwXrwRGV0HQvT4vP0j%2B1AkBgeqUVnYxU2CaxRpXtkJOuixM51gRU4yB62lm4r9s8Pdp94aDsjj23M3hBvhlgh0XCKgo6mDYv1MjR8NZB7j2umZiaaikHKPh5lLg2Rtty2luqVb2xezxFtStJzGmd7hSuenWXOMn5elVGX0TjLBKRdriw9Ia4Cfv7Z9M7IVlE%2FvnwH%2F9p8j0AuD3DrscO6iNqDw8eDdjKAQqMC%2FHEg05Wbl%2B0Lw8zkSN2riejhSj6LKaV%2FircmLy%2FagpCxEq9sa7CLjv8PuqCsl%2Fo4N9iRA7ZZwEXbdkfSHA4zc5o3RP%2B9rtNpAc1FQ38sEGJprbDZVHn%2FCVfTPw2koU%2FFJJ7D3Npi25S5IfieO%2FhTnGYTVa36HvtYIz%2Fds8U8U24C32qYdqjf1nfIFf4Pv1IEXk6CryT6IyOxTFS%2BluMvcTek119ve3GrDNb39uP7PDuNWItKCo5NHhgl0xcxEq2M%2FxX3mmZJmlEkXh4kHTNwKN%2Fzo8NDd8VPePow76r%2BvwY6pgEpEnJqkvK%2FIMuepgKUQ6FMIgEaG%2BhMVsvEMOADmcMm2d7rkvhtxMWfNTE8aFuq2ujKnyTKaZaNte2bcbgEQrh0EyW97KCtwukIODRGiGLApLAYW23e1eHDQNBE%2BVx1g8P5rfKkLYIlBQL1r6tAIT%2FLkXBWiIB08W7RUCuNvcuQYrYKbMAzpD7bNZ%2F5VJm%2BT83foHOPaA9VTiYPkesRDqhCD17j%2Fhcn&X-Amz-Signature=bf63f40020808b3d1ea1246aca3461a3d560eeff6671eb26efaf910b726f8d68&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGKWY6P%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdV4sTqXDji8mVX3CljUx4fCnwcx4iZqdRoPEbJlXKPAiBV4N93VgrT81lrKcn6IYcf8bn2yrlCAdyJFQZ1qMlvISr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMmKrQheqRhXGIGa2qKtwDjj7xmNqLZpiAnzqQsYBmzXLgXJKcjwaq%2BWZVaeKO9eTsaG05TnkkVhjsfrVLwMTJ1pkQPmZ1bHRsAZo7qrqWYM6XfmjCV5E%2BQfi4gCaL5B%2BrBGRQ4WaBwXrwRGV0HQvT4vP0j%2B1AkBgeqUVnYxU2CaxRpXtkJOuixM51gRU4yB62lm4r9s8Pdp94aDsjj23M3hBvhlgh0XCKgo6mDYv1MjR8NZB7j2umZiaaikHKPh5lLg2Rtty2luqVb2xezxFtStJzGmd7hSuenWXOMn5elVGX0TjLBKRdriw9Ia4Cfv7Z9M7IVlE%2FvnwH%2F9p8j0AuD3DrscO6iNqDw8eDdjKAQqMC%2FHEg05Wbl%2B0Lw8zkSN2riejhSj6LKaV%2FircmLy%2FagpCxEq9sa7CLjv8PuqCsl%2Fo4N9iRA7ZZwEXbdkfSHA4zc5o3RP%2B9rtNpAc1FQ38sEGJprbDZVHn%2FCVfTPw2koU%2FFJJ7D3Npi25S5IfieO%2FhTnGYTVa36HvtYIz%2Fds8U8U24C32qYdqjf1nfIFf4Pv1IEXk6CryT6IyOxTFS%2BluMvcTek119ve3GrDNb39uP7PDuNWItKCo5NHhgl0xcxEq2M%2FxX3mmZJmlEkXh4kHTNwKN%2Fzo8NDd8VPePow76r%2BvwY6pgEpEnJqkvK%2FIMuepgKUQ6FMIgEaG%2BhMVsvEMOADmcMm2d7rkvhtxMWfNTE8aFuq2ujKnyTKaZaNte2bcbgEQrh0EyW97KCtwukIODRGiGLApLAYW23e1eHDQNBE%2BVx1g8P5rfKkLYIlBQL1r6tAIT%2FLkXBWiIB08W7RUCuNvcuQYrYKbMAzpD7bNZ%2F5VJm%2BT83foHOPaA9VTiYPkesRDqhCD17j%2Fhcn&X-Amz-Signature=de245106419cedb05bb0c7f16a66d7e24498b3d5972e8c2396634bc1a88a4552&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
