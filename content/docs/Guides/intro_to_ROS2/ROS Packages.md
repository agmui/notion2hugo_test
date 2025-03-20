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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FSG4P5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDVEKf30v%2BmTLa9QQrKT9%2FxkwHDDpKYzodvydsqFO91ywIhAK4X8ycrRHUVkUyOs7Vg%2BaaqSebseOj0dbyFRZ9LqYXgKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLdxu0PuSYLn%2Fkoq3AMzdeqk4854gywh1ZAI8hACi4U4FByMBDe5Sp59dX47T3KXVwz90dGB2UOy4jQzN7ne8i3B1BXL57FwAU%2FrSZ%2FK5nTf2DItE6vXix2BZcav400o1Zpt7u5JZYXL0gVhgOpcOuLnlNsOTdwdXAUVZKrS5A8Ims9NJMo17rOzNDrIYKT221jzm7VYnENIuujmI%2B5ET264uPB9b%2BikF5Pm186KLgMRd5ZzduxckhKLgRKKL6K4mJyJT%2BrgPbpsZ8T6M5G%2Bnw4gUWY3K5%2BM81%2BPrNz1Ch7OyxOXhfoMbYlijFPH%2FR2lNTlk3MK4XRYHM8QWBcs0iXnQZ3wokSg6ONwPZSioMDZuD%2B7LdHVd%2FZH67lHIMRDPfAN9k51ffwXQGHLPdZMR%2FITtIIV%2FGaUQ5rZ4KUHyvtwr%2FLGjWpRnKFEarMbrs4r2co3LRSKF%2B5KQHKiWEwvz9IS2ySaJHmD3Ow%2F1lPbiCFYHlqbohXC97exxCje6Zze2wEUUdx8I2HpPAX81ZgeuJg3AxzT1iJEH%2FXtuaTiQ4RlVU%2BabPum6VhcAAl92CgZZQRh8SkRJSmkpH%2FZKxAkJrRGz5Lu1POwyaN8typJvWijfsmoR3vwkaDtY1PjiENmloGpfwu9DYfVuoTCjpfC%2BBjqkAc%2BUM1tt2XnIb9LBZ1QoKxWbU8%2FaGQ0E%2FKXzeQarnNfE8QAhB6jBPLwS6ng44YErsrIdXwzaY0uBO%2FhWvB3Q9xpnl8sQqIDQbyZf5E%2FrV6z3oagNJATT7oGsIFFKPAw0XGqq8fEcuD%2F6Un0CXdSq%2BftgbQz8mGPxTP12LJX7%2F1wPyy%2F%2FX9Jj4fGTQ5vYT3wq7kSzY9o9B2hmXhp2IOLx0y1z0EHB&X-Amz-Signature=8e2b600e614baf729c40b365b5109c03dc8f3f16d97fb4203df48a26a3d14a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FSG4P5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDVEKf30v%2BmTLa9QQrKT9%2FxkwHDDpKYzodvydsqFO91ywIhAK4X8ycrRHUVkUyOs7Vg%2BaaqSebseOj0dbyFRZ9LqYXgKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLdxu0PuSYLn%2Fkoq3AMzdeqk4854gywh1ZAI8hACi4U4FByMBDe5Sp59dX47T3KXVwz90dGB2UOy4jQzN7ne8i3B1BXL57FwAU%2FrSZ%2FK5nTf2DItE6vXix2BZcav400o1Zpt7u5JZYXL0gVhgOpcOuLnlNsOTdwdXAUVZKrS5A8Ims9NJMo17rOzNDrIYKT221jzm7VYnENIuujmI%2B5ET264uPB9b%2BikF5Pm186KLgMRd5ZzduxckhKLgRKKL6K4mJyJT%2BrgPbpsZ8T6M5G%2Bnw4gUWY3K5%2BM81%2BPrNz1Ch7OyxOXhfoMbYlijFPH%2FR2lNTlk3MK4XRYHM8QWBcs0iXnQZ3wokSg6ONwPZSioMDZuD%2B7LdHVd%2FZH67lHIMRDPfAN9k51ffwXQGHLPdZMR%2FITtIIV%2FGaUQ5rZ4KUHyvtwr%2FLGjWpRnKFEarMbrs4r2co3LRSKF%2B5KQHKiWEwvz9IS2ySaJHmD3Ow%2F1lPbiCFYHlqbohXC97exxCje6Zze2wEUUdx8I2HpPAX81ZgeuJg3AxzT1iJEH%2FXtuaTiQ4RlVU%2BabPum6VhcAAl92CgZZQRh8SkRJSmkpH%2FZKxAkJrRGz5Lu1POwyaN8typJvWijfsmoR3vwkaDtY1PjiENmloGpfwu9DYfVuoTCjpfC%2BBjqkAc%2BUM1tt2XnIb9LBZ1QoKxWbU8%2FaGQ0E%2FKXzeQarnNfE8QAhB6jBPLwS6ng44YErsrIdXwzaY0uBO%2FhWvB3Q9xpnl8sQqIDQbyZf5E%2FrV6z3oagNJATT7oGsIFFKPAw0XGqq8fEcuD%2F6Un0CXdSq%2BftgbQz8mGPxTP12LJX7%2F1wPyy%2F%2FX9Jj4fGTQ5vYT3wq7kSzY9o9B2hmXhp2IOLx0y1z0EHB&X-Amz-Signature=e9d120405e242d02f87b6322cd5a5147c73ee181191c3b9ed85ac4155cb81e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FSG4P5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDVEKf30v%2BmTLa9QQrKT9%2FxkwHDDpKYzodvydsqFO91ywIhAK4X8ycrRHUVkUyOs7Vg%2BaaqSebseOj0dbyFRZ9LqYXgKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLdxu0PuSYLn%2Fkoq3AMzdeqk4854gywh1ZAI8hACi4U4FByMBDe5Sp59dX47T3KXVwz90dGB2UOy4jQzN7ne8i3B1BXL57FwAU%2FrSZ%2FK5nTf2DItE6vXix2BZcav400o1Zpt7u5JZYXL0gVhgOpcOuLnlNsOTdwdXAUVZKrS5A8Ims9NJMo17rOzNDrIYKT221jzm7VYnENIuujmI%2B5ET264uPB9b%2BikF5Pm186KLgMRd5ZzduxckhKLgRKKL6K4mJyJT%2BrgPbpsZ8T6M5G%2Bnw4gUWY3K5%2BM81%2BPrNz1Ch7OyxOXhfoMbYlijFPH%2FR2lNTlk3MK4XRYHM8QWBcs0iXnQZ3wokSg6ONwPZSioMDZuD%2B7LdHVd%2FZH67lHIMRDPfAN9k51ffwXQGHLPdZMR%2FITtIIV%2FGaUQ5rZ4KUHyvtwr%2FLGjWpRnKFEarMbrs4r2co3LRSKF%2B5KQHKiWEwvz9IS2ySaJHmD3Ow%2F1lPbiCFYHlqbohXC97exxCje6Zze2wEUUdx8I2HpPAX81ZgeuJg3AxzT1iJEH%2FXtuaTiQ4RlVU%2BabPum6VhcAAl92CgZZQRh8SkRJSmkpH%2FZKxAkJrRGz5Lu1POwyaN8typJvWijfsmoR3vwkaDtY1PjiENmloGpfwu9DYfVuoTCjpfC%2BBjqkAc%2BUM1tt2XnIb9LBZ1QoKxWbU8%2FaGQ0E%2FKXzeQarnNfE8QAhB6jBPLwS6ng44YErsrIdXwzaY0uBO%2FhWvB3Q9xpnl8sQqIDQbyZf5E%2FrV6z3oagNJATT7oGsIFFKPAw0XGqq8fEcuD%2F6Un0CXdSq%2BftgbQz8mGPxTP12LJX7%2F1wPyy%2F%2FX9Jj4fGTQ5vYT3wq7kSzY9o9B2hmXhp2IOLx0y1z0EHB&X-Amz-Signature=1d7b97adb45f7911306867a6a059f9a53be39b90635fa10f768e9bbe7db3bf51&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FSG4P5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDVEKf30v%2BmTLa9QQrKT9%2FxkwHDDpKYzodvydsqFO91ywIhAK4X8ycrRHUVkUyOs7Vg%2BaaqSebseOj0dbyFRZ9LqYXgKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLdxu0PuSYLn%2Fkoq3AMzdeqk4854gywh1ZAI8hACi4U4FByMBDe5Sp59dX47T3KXVwz90dGB2UOy4jQzN7ne8i3B1BXL57FwAU%2FrSZ%2FK5nTf2DItE6vXix2BZcav400o1Zpt7u5JZYXL0gVhgOpcOuLnlNsOTdwdXAUVZKrS5A8Ims9NJMo17rOzNDrIYKT221jzm7VYnENIuujmI%2B5ET264uPB9b%2BikF5Pm186KLgMRd5ZzduxckhKLgRKKL6K4mJyJT%2BrgPbpsZ8T6M5G%2Bnw4gUWY3K5%2BM81%2BPrNz1Ch7OyxOXhfoMbYlijFPH%2FR2lNTlk3MK4XRYHM8QWBcs0iXnQZ3wokSg6ONwPZSioMDZuD%2B7LdHVd%2FZH67lHIMRDPfAN9k51ffwXQGHLPdZMR%2FITtIIV%2FGaUQ5rZ4KUHyvtwr%2FLGjWpRnKFEarMbrs4r2co3LRSKF%2B5KQHKiWEwvz9IS2ySaJHmD3Ow%2F1lPbiCFYHlqbohXC97exxCje6Zze2wEUUdx8I2HpPAX81ZgeuJg3AxzT1iJEH%2FXtuaTiQ4RlVU%2BabPum6VhcAAl92CgZZQRh8SkRJSmkpH%2FZKxAkJrRGz5Lu1POwyaN8typJvWijfsmoR3vwkaDtY1PjiENmloGpfwu9DYfVuoTCjpfC%2BBjqkAc%2BUM1tt2XnIb9LBZ1QoKxWbU8%2FaGQ0E%2FKXzeQarnNfE8QAhB6jBPLwS6ng44YErsrIdXwzaY0uBO%2FhWvB3Q9xpnl8sQqIDQbyZf5E%2FrV6z3oagNJATT7oGsIFFKPAw0XGqq8fEcuD%2F6Un0CXdSq%2BftgbQz8mGPxTP12LJX7%2F1wPyy%2F%2FX9Jj4fGTQ5vYT3wq7kSzY9o9B2hmXhp2IOLx0y1z0EHB&X-Amz-Signature=a29118ea70b084ba442049fe02f2b3b402e3b839ed23a93a19b2c729ddd6222f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FSG4P5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDVEKf30v%2BmTLa9QQrKT9%2FxkwHDDpKYzodvydsqFO91ywIhAK4X8ycrRHUVkUyOs7Vg%2BaaqSebseOj0dbyFRZ9LqYXgKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLdxu0PuSYLn%2Fkoq3AMzdeqk4854gywh1ZAI8hACi4U4FByMBDe5Sp59dX47T3KXVwz90dGB2UOy4jQzN7ne8i3B1BXL57FwAU%2FrSZ%2FK5nTf2DItE6vXix2BZcav400o1Zpt7u5JZYXL0gVhgOpcOuLnlNsOTdwdXAUVZKrS5A8Ims9NJMo17rOzNDrIYKT221jzm7VYnENIuujmI%2B5ET264uPB9b%2BikF5Pm186KLgMRd5ZzduxckhKLgRKKL6K4mJyJT%2BrgPbpsZ8T6M5G%2Bnw4gUWY3K5%2BM81%2BPrNz1Ch7OyxOXhfoMbYlijFPH%2FR2lNTlk3MK4XRYHM8QWBcs0iXnQZ3wokSg6ONwPZSioMDZuD%2B7LdHVd%2FZH67lHIMRDPfAN9k51ffwXQGHLPdZMR%2FITtIIV%2FGaUQ5rZ4KUHyvtwr%2FLGjWpRnKFEarMbrs4r2co3LRSKF%2B5KQHKiWEwvz9IS2ySaJHmD3Ow%2F1lPbiCFYHlqbohXC97exxCje6Zze2wEUUdx8I2HpPAX81ZgeuJg3AxzT1iJEH%2FXtuaTiQ4RlVU%2BabPum6VhcAAl92CgZZQRh8SkRJSmkpH%2FZKxAkJrRGz5Lu1POwyaN8typJvWijfsmoR3vwkaDtY1PjiENmloGpfwu9DYfVuoTCjpfC%2BBjqkAc%2BUM1tt2XnIb9LBZ1QoKxWbU8%2FaGQ0E%2FKXzeQarnNfE8QAhB6jBPLwS6ng44YErsrIdXwzaY0uBO%2FhWvB3Q9xpnl8sQqIDQbyZf5E%2FrV6z3oagNJATT7oGsIFFKPAw0XGqq8fEcuD%2F6Un0CXdSq%2BftgbQz8mGPxTP12LJX7%2F1wPyy%2F%2FX9Jj4fGTQ5vYT3wq7kSzY9o9B2hmXhp2IOLx0y1z0EHB&X-Amz-Signature=a49a5688b8976af73f80e70794de63afc311a7234909c4f970151b8a1416b305&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FSG4P5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDVEKf30v%2BmTLa9QQrKT9%2FxkwHDDpKYzodvydsqFO91ywIhAK4X8ycrRHUVkUyOs7Vg%2BaaqSebseOj0dbyFRZ9LqYXgKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLdxu0PuSYLn%2Fkoq3AMzdeqk4854gywh1ZAI8hACi4U4FByMBDe5Sp59dX47T3KXVwz90dGB2UOy4jQzN7ne8i3B1BXL57FwAU%2FrSZ%2FK5nTf2DItE6vXix2BZcav400o1Zpt7u5JZYXL0gVhgOpcOuLnlNsOTdwdXAUVZKrS5A8Ims9NJMo17rOzNDrIYKT221jzm7VYnENIuujmI%2B5ET264uPB9b%2BikF5Pm186KLgMRd5ZzduxckhKLgRKKL6K4mJyJT%2BrgPbpsZ8T6M5G%2Bnw4gUWY3K5%2BM81%2BPrNz1Ch7OyxOXhfoMbYlijFPH%2FR2lNTlk3MK4XRYHM8QWBcs0iXnQZ3wokSg6ONwPZSioMDZuD%2B7LdHVd%2FZH67lHIMRDPfAN9k51ffwXQGHLPdZMR%2FITtIIV%2FGaUQ5rZ4KUHyvtwr%2FLGjWpRnKFEarMbrs4r2co3LRSKF%2B5KQHKiWEwvz9IS2ySaJHmD3Ow%2F1lPbiCFYHlqbohXC97exxCje6Zze2wEUUdx8I2HpPAX81ZgeuJg3AxzT1iJEH%2FXtuaTiQ4RlVU%2BabPum6VhcAAl92CgZZQRh8SkRJSmkpH%2FZKxAkJrRGz5Lu1POwyaN8typJvWijfsmoR3vwkaDtY1PjiENmloGpfwu9DYfVuoTCjpfC%2BBjqkAc%2BUM1tt2XnIb9LBZ1QoKxWbU8%2FaGQ0E%2FKXzeQarnNfE8QAhB6jBPLwS6ng44YErsrIdXwzaY0uBO%2FhWvB3Q9xpnl8sQqIDQbyZf5E%2FrV6z3oagNJATT7oGsIFFKPAw0XGqq8fEcuD%2F6Un0CXdSq%2BftgbQz8mGPxTP12LJX7%2F1wPyy%2F%2FX9Jj4fGTQ5vYT3wq7kSzY9o9B2hmXhp2IOLx0y1z0EHB&X-Amz-Signature=0c1052518928cf51fc6504f24ce1b3a4c84b2851aeb5d381d683959c818798ab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FSG4P5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDVEKf30v%2BmTLa9QQrKT9%2FxkwHDDpKYzodvydsqFO91ywIhAK4X8ycrRHUVkUyOs7Vg%2BaaqSebseOj0dbyFRZ9LqYXgKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLdxu0PuSYLn%2Fkoq3AMzdeqk4854gywh1ZAI8hACi4U4FByMBDe5Sp59dX47T3KXVwz90dGB2UOy4jQzN7ne8i3B1BXL57FwAU%2FrSZ%2FK5nTf2DItE6vXix2BZcav400o1Zpt7u5JZYXL0gVhgOpcOuLnlNsOTdwdXAUVZKrS5A8Ims9NJMo17rOzNDrIYKT221jzm7VYnENIuujmI%2B5ET264uPB9b%2BikF5Pm186KLgMRd5ZzduxckhKLgRKKL6K4mJyJT%2BrgPbpsZ8T6M5G%2Bnw4gUWY3K5%2BM81%2BPrNz1Ch7OyxOXhfoMbYlijFPH%2FR2lNTlk3MK4XRYHM8QWBcs0iXnQZ3wokSg6ONwPZSioMDZuD%2B7LdHVd%2FZH67lHIMRDPfAN9k51ffwXQGHLPdZMR%2FITtIIV%2FGaUQ5rZ4KUHyvtwr%2FLGjWpRnKFEarMbrs4r2co3LRSKF%2B5KQHKiWEwvz9IS2ySaJHmD3Ow%2F1lPbiCFYHlqbohXC97exxCje6Zze2wEUUdx8I2HpPAX81ZgeuJg3AxzT1iJEH%2FXtuaTiQ4RlVU%2BabPum6VhcAAl92CgZZQRh8SkRJSmkpH%2FZKxAkJrRGz5Lu1POwyaN8typJvWijfsmoR3vwkaDtY1PjiENmloGpfwu9DYfVuoTCjpfC%2BBjqkAc%2BUM1tt2XnIb9LBZ1QoKxWbU8%2FaGQ0E%2FKXzeQarnNfE8QAhB6jBPLwS6ng44YErsrIdXwzaY0uBO%2FhWvB3Q9xpnl8sQqIDQbyZf5E%2FrV6z3oagNJATT7oGsIFFKPAw0XGqq8fEcuD%2F6Un0CXdSq%2BftgbQz8mGPxTP12LJX7%2F1wPyy%2F%2FX9Jj4fGTQ5vYT3wq7kSzY9o9B2hmXhp2IOLx0y1z0EHB&X-Amz-Signature=a65584ab8da5afb436f080447cfe7cc9ea9356c0771b6f4d3e7caede70580a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
