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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5ZLVXV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxemxL1VRgCNrN2riehCXJ5imSWaAf1IlbkMY%2Fgx3RQIhANDdPLqShz3EyAhed8YoQBRGnJAUMxXyXUFoBMZ%2BUsTdKv8DCFcQABoMNjM3NDIzMTgzODA1IgzaCipGDrMbq%2F3jBEQq3AO48fLdeL5DaHyEtX8EQkR%2FB2E1OTuyO6M4tFXxul1eJcZLZIZVd18GUQgNlDZKk3JTDVJ2xrwEjiHP3jOJKdw5BVzdMqBxZFKMKZrr87HkbyaEUM1NM3IufIPeBkNhU4PuQuueQF4Z8b0tqUPINimJG6CXgcKRsHSWJfy5%2BQaJVIIXBZ0FEFnalis%2FQ%2FjAa%2F04sARO5hwqtVhfxrPAYW49tx9mEApkFptB812y5OmidzepsqdewbhQGmyEVMPK%2FkagGPdNc5TzLB95WcwurRLEzAqxuYeAB3CitAtHB5z3jeVs4vwdRP166n8BnaE62rIa0A3wzwUgwEEJK9Q%2Bu7evDvR0LDlKklhEKKIS4WTCsN9qay9GJF2vN5eMHq8poP6EmlAUiO%2BjIscSLkgl%2FyxcY%2Bl%2FC3ENMomKSMVxo7AOuBm2%2BQzzYblvSa22fyz8hQCYpJYlwyAZwh42E7DzAuxaKztVqnOF%2F0Mwp18xJChn8UFJ99cUzTjX44KZP8jttlf9TzJvEUZjWXDX%2BS80m4wMPEZAolSzPRDszFXFWwlQFzcJxkBnW2XVrqm045Gvjvk5p7ugwa2AouBcu3jIg7gygsTGzF%2FZBs6QsZLKs9gC09Heq6jYCekS84Zw3jDbw6DBBjqkATT4L9dAEZ9vAtuNnRxwD9oAvqT21BH107merIwP8Zi6DYJOuAk5uA3xsF9SnOT2FBTbhg4MjNmdQBEk4b0%2Fu%2FLp2BCIaoa8kyWmO1F3EztYFVg6lZ1NMeNtMsVCtu4UHwG%2F8IM4V8jhHnT%2Bb2YP9doNOV%2Bx%2BY8HMsDnMJnnAnmZmXawVLI7GnbJEOdPRx8G1MepmZ%2BvgY0Ih63eqQDGunBAgzVM&X-Amz-Signature=1f1a9ef3204a5c9d895fdce42708f90f6ee9cb67e6b1fc215b8c806d19b91996&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5ZLVXV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxemxL1VRgCNrN2riehCXJ5imSWaAf1IlbkMY%2Fgx3RQIhANDdPLqShz3EyAhed8YoQBRGnJAUMxXyXUFoBMZ%2BUsTdKv8DCFcQABoMNjM3NDIzMTgzODA1IgzaCipGDrMbq%2F3jBEQq3AO48fLdeL5DaHyEtX8EQkR%2FB2E1OTuyO6M4tFXxul1eJcZLZIZVd18GUQgNlDZKk3JTDVJ2xrwEjiHP3jOJKdw5BVzdMqBxZFKMKZrr87HkbyaEUM1NM3IufIPeBkNhU4PuQuueQF4Z8b0tqUPINimJG6CXgcKRsHSWJfy5%2BQaJVIIXBZ0FEFnalis%2FQ%2FjAa%2F04sARO5hwqtVhfxrPAYW49tx9mEApkFptB812y5OmidzepsqdewbhQGmyEVMPK%2FkagGPdNc5TzLB95WcwurRLEzAqxuYeAB3CitAtHB5z3jeVs4vwdRP166n8BnaE62rIa0A3wzwUgwEEJK9Q%2Bu7evDvR0LDlKklhEKKIS4WTCsN9qay9GJF2vN5eMHq8poP6EmlAUiO%2BjIscSLkgl%2FyxcY%2Bl%2FC3ENMomKSMVxo7AOuBm2%2BQzzYblvSa22fyz8hQCYpJYlwyAZwh42E7DzAuxaKztVqnOF%2F0Mwp18xJChn8UFJ99cUzTjX44KZP8jttlf9TzJvEUZjWXDX%2BS80m4wMPEZAolSzPRDszFXFWwlQFzcJxkBnW2XVrqm045Gvjvk5p7ugwa2AouBcu3jIg7gygsTGzF%2FZBs6QsZLKs9gC09Heq6jYCekS84Zw3jDbw6DBBjqkATT4L9dAEZ9vAtuNnRxwD9oAvqT21BH107merIwP8Zi6DYJOuAk5uA3xsF9SnOT2FBTbhg4MjNmdQBEk4b0%2Fu%2FLp2BCIaoa8kyWmO1F3EztYFVg6lZ1NMeNtMsVCtu4UHwG%2F8IM4V8jhHnT%2Bb2YP9doNOV%2Bx%2BY8HMsDnMJnnAnmZmXawVLI7GnbJEOdPRx8G1MepmZ%2BvgY0Ih63eqQDGunBAgzVM&X-Amz-Signature=f43ec167953037fbc949bf66e426f8e83f7f45a44487a7f5da2bd751b4551e09&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5ZLVXV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxemxL1VRgCNrN2riehCXJ5imSWaAf1IlbkMY%2Fgx3RQIhANDdPLqShz3EyAhed8YoQBRGnJAUMxXyXUFoBMZ%2BUsTdKv8DCFcQABoMNjM3NDIzMTgzODA1IgzaCipGDrMbq%2F3jBEQq3AO48fLdeL5DaHyEtX8EQkR%2FB2E1OTuyO6M4tFXxul1eJcZLZIZVd18GUQgNlDZKk3JTDVJ2xrwEjiHP3jOJKdw5BVzdMqBxZFKMKZrr87HkbyaEUM1NM3IufIPeBkNhU4PuQuueQF4Z8b0tqUPINimJG6CXgcKRsHSWJfy5%2BQaJVIIXBZ0FEFnalis%2FQ%2FjAa%2F04sARO5hwqtVhfxrPAYW49tx9mEApkFptB812y5OmidzepsqdewbhQGmyEVMPK%2FkagGPdNc5TzLB95WcwurRLEzAqxuYeAB3CitAtHB5z3jeVs4vwdRP166n8BnaE62rIa0A3wzwUgwEEJK9Q%2Bu7evDvR0LDlKklhEKKIS4WTCsN9qay9GJF2vN5eMHq8poP6EmlAUiO%2BjIscSLkgl%2FyxcY%2Bl%2FC3ENMomKSMVxo7AOuBm2%2BQzzYblvSa22fyz8hQCYpJYlwyAZwh42E7DzAuxaKztVqnOF%2F0Mwp18xJChn8UFJ99cUzTjX44KZP8jttlf9TzJvEUZjWXDX%2BS80m4wMPEZAolSzPRDszFXFWwlQFzcJxkBnW2XVrqm045Gvjvk5p7ugwa2AouBcu3jIg7gygsTGzF%2FZBs6QsZLKs9gC09Heq6jYCekS84Zw3jDbw6DBBjqkATT4L9dAEZ9vAtuNnRxwD9oAvqT21BH107merIwP8Zi6DYJOuAk5uA3xsF9SnOT2FBTbhg4MjNmdQBEk4b0%2Fu%2FLp2BCIaoa8kyWmO1F3EztYFVg6lZ1NMeNtMsVCtu4UHwG%2F8IM4V8jhHnT%2Bb2YP9doNOV%2Bx%2BY8HMsDnMJnnAnmZmXawVLI7GnbJEOdPRx8G1MepmZ%2BvgY0Ih63eqQDGunBAgzVM&X-Amz-Signature=032d36e2275467e62e51c63ab91452715cebadcee37307003e83caedb4cc5d24&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5ZLVXV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxemxL1VRgCNrN2riehCXJ5imSWaAf1IlbkMY%2Fgx3RQIhANDdPLqShz3EyAhed8YoQBRGnJAUMxXyXUFoBMZ%2BUsTdKv8DCFcQABoMNjM3NDIzMTgzODA1IgzaCipGDrMbq%2F3jBEQq3AO48fLdeL5DaHyEtX8EQkR%2FB2E1OTuyO6M4tFXxul1eJcZLZIZVd18GUQgNlDZKk3JTDVJ2xrwEjiHP3jOJKdw5BVzdMqBxZFKMKZrr87HkbyaEUM1NM3IufIPeBkNhU4PuQuueQF4Z8b0tqUPINimJG6CXgcKRsHSWJfy5%2BQaJVIIXBZ0FEFnalis%2FQ%2FjAa%2F04sARO5hwqtVhfxrPAYW49tx9mEApkFptB812y5OmidzepsqdewbhQGmyEVMPK%2FkagGPdNc5TzLB95WcwurRLEzAqxuYeAB3CitAtHB5z3jeVs4vwdRP166n8BnaE62rIa0A3wzwUgwEEJK9Q%2Bu7evDvR0LDlKklhEKKIS4WTCsN9qay9GJF2vN5eMHq8poP6EmlAUiO%2BjIscSLkgl%2FyxcY%2Bl%2FC3ENMomKSMVxo7AOuBm2%2BQzzYblvSa22fyz8hQCYpJYlwyAZwh42E7DzAuxaKztVqnOF%2F0Mwp18xJChn8UFJ99cUzTjX44KZP8jttlf9TzJvEUZjWXDX%2BS80m4wMPEZAolSzPRDszFXFWwlQFzcJxkBnW2XVrqm045Gvjvk5p7ugwa2AouBcu3jIg7gygsTGzF%2FZBs6QsZLKs9gC09Heq6jYCekS84Zw3jDbw6DBBjqkATT4L9dAEZ9vAtuNnRxwD9oAvqT21BH107merIwP8Zi6DYJOuAk5uA3xsF9SnOT2FBTbhg4MjNmdQBEk4b0%2Fu%2FLp2BCIaoa8kyWmO1F3EztYFVg6lZ1NMeNtMsVCtu4UHwG%2F8IM4V8jhHnT%2Bb2YP9doNOV%2Bx%2BY8HMsDnMJnnAnmZmXawVLI7GnbJEOdPRx8G1MepmZ%2BvgY0Ih63eqQDGunBAgzVM&X-Amz-Signature=e7dd4a8dc66bbbb03ec95efdde12fd967a1d8a0d6019167700ebb3ceb59be86e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5ZLVXV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxemxL1VRgCNrN2riehCXJ5imSWaAf1IlbkMY%2Fgx3RQIhANDdPLqShz3EyAhed8YoQBRGnJAUMxXyXUFoBMZ%2BUsTdKv8DCFcQABoMNjM3NDIzMTgzODA1IgzaCipGDrMbq%2F3jBEQq3AO48fLdeL5DaHyEtX8EQkR%2FB2E1OTuyO6M4tFXxul1eJcZLZIZVd18GUQgNlDZKk3JTDVJ2xrwEjiHP3jOJKdw5BVzdMqBxZFKMKZrr87HkbyaEUM1NM3IufIPeBkNhU4PuQuueQF4Z8b0tqUPINimJG6CXgcKRsHSWJfy5%2BQaJVIIXBZ0FEFnalis%2FQ%2FjAa%2F04sARO5hwqtVhfxrPAYW49tx9mEApkFptB812y5OmidzepsqdewbhQGmyEVMPK%2FkagGPdNc5TzLB95WcwurRLEzAqxuYeAB3CitAtHB5z3jeVs4vwdRP166n8BnaE62rIa0A3wzwUgwEEJK9Q%2Bu7evDvR0LDlKklhEKKIS4WTCsN9qay9GJF2vN5eMHq8poP6EmlAUiO%2BjIscSLkgl%2FyxcY%2Bl%2FC3ENMomKSMVxo7AOuBm2%2BQzzYblvSa22fyz8hQCYpJYlwyAZwh42E7DzAuxaKztVqnOF%2F0Mwp18xJChn8UFJ99cUzTjX44KZP8jttlf9TzJvEUZjWXDX%2BS80m4wMPEZAolSzPRDszFXFWwlQFzcJxkBnW2XVrqm045Gvjvk5p7ugwa2AouBcu3jIg7gygsTGzF%2FZBs6QsZLKs9gC09Heq6jYCekS84Zw3jDbw6DBBjqkATT4L9dAEZ9vAtuNnRxwD9oAvqT21BH107merIwP8Zi6DYJOuAk5uA3xsF9SnOT2FBTbhg4MjNmdQBEk4b0%2Fu%2FLp2BCIaoa8kyWmO1F3EztYFVg6lZ1NMeNtMsVCtu4UHwG%2F8IM4V8jhHnT%2Bb2YP9doNOV%2Bx%2BY8HMsDnMJnnAnmZmXawVLI7GnbJEOdPRx8G1MepmZ%2BvgY0Ih63eqQDGunBAgzVM&X-Amz-Signature=4ed983d985b6c09312ae6e6f894b25664c04f02d071e135133e455d3cc1527eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5ZLVXV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxemxL1VRgCNrN2riehCXJ5imSWaAf1IlbkMY%2Fgx3RQIhANDdPLqShz3EyAhed8YoQBRGnJAUMxXyXUFoBMZ%2BUsTdKv8DCFcQABoMNjM3NDIzMTgzODA1IgzaCipGDrMbq%2F3jBEQq3AO48fLdeL5DaHyEtX8EQkR%2FB2E1OTuyO6M4tFXxul1eJcZLZIZVd18GUQgNlDZKk3JTDVJ2xrwEjiHP3jOJKdw5BVzdMqBxZFKMKZrr87HkbyaEUM1NM3IufIPeBkNhU4PuQuueQF4Z8b0tqUPINimJG6CXgcKRsHSWJfy5%2BQaJVIIXBZ0FEFnalis%2FQ%2FjAa%2F04sARO5hwqtVhfxrPAYW49tx9mEApkFptB812y5OmidzepsqdewbhQGmyEVMPK%2FkagGPdNc5TzLB95WcwurRLEzAqxuYeAB3CitAtHB5z3jeVs4vwdRP166n8BnaE62rIa0A3wzwUgwEEJK9Q%2Bu7evDvR0LDlKklhEKKIS4WTCsN9qay9GJF2vN5eMHq8poP6EmlAUiO%2BjIscSLkgl%2FyxcY%2Bl%2FC3ENMomKSMVxo7AOuBm2%2BQzzYblvSa22fyz8hQCYpJYlwyAZwh42E7DzAuxaKztVqnOF%2F0Mwp18xJChn8UFJ99cUzTjX44KZP8jttlf9TzJvEUZjWXDX%2BS80m4wMPEZAolSzPRDszFXFWwlQFzcJxkBnW2XVrqm045Gvjvk5p7ugwa2AouBcu3jIg7gygsTGzF%2FZBs6QsZLKs9gC09Heq6jYCekS84Zw3jDbw6DBBjqkATT4L9dAEZ9vAtuNnRxwD9oAvqT21BH107merIwP8Zi6DYJOuAk5uA3xsF9SnOT2FBTbhg4MjNmdQBEk4b0%2Fu%2FLp2BCIaoa8kyWmO1F3EztYFVg6lZ1NMeNtMsVCtu4UHwG%2F8IM4V8jhHnT%2Bb2YP9doNOV%2Bx%2BY8HMsDnMJnnAnmZmXawVLI7GnbJEOdPRx8G1MepmZ%2BvgY0Ih63eqQDGunBAgzVM&X-Amz-Signature=f3de86f15d7d4a9eb3c89bca23187f00ddffc74c678f485d8bb828a81fd0a134&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5ZLVXV%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxemxL1VRgCNrN2riehCXJ5imSWaAf1IlbkMY%2Fgx3RQIhANDdPLqShz3EyAhed8YoQBRGnJAUMxXyXUFoBMZ%2BUsTdKv8DCFcQABoMNjM3NDIzMTgzODA1IgzaCipGDrMbq%2F3jBEQq3AO48fLdeL5DaHyEtX8EQkR%2FB2E1OTuyO6M4tFXxul1eJcZLZIZVd18GUQgNlDZKk3JTDVJ2xrwEjiHP3jOJKdw5BVzdMqBxZFKMKZrr87HkbyaEUM1NM3IufIPeBkNhU4PuQuueQF4Z8b0tqUPINimJG6CXgcKRsHSWJfy5%2BQaJVIIXBZ0FEFnalis%2FQ%2FjAa%2F04sARO5hwqtVhfxrPAYW49tx9mEApkFptB812y5OmidzepsqdewbhQGmyEVMPK%2FkagGPdNc5TzLB95WcwurRLEzAqxuYeAB3CitAtHB5z3jeVs4vwdRP166n8BnaE62rIa0A3wzwUgwEEJK9Q%2Bu7evDvR0LDlKklhEKKIS4WTCsN9qay9GJF2vN5eMHq8poP6EmlAUiO%2BjIscSLkgl%2FyxcY%2Bl%2FC3ENMomKSMVxo7AOuBm2%2BQzzYblvSa22fyz8hQCYpJYlwyAZwh42E7DzAuxaKztVqnOF%2F0Mwp18xJChn8UFJ99cUzTjX44KZP8jttlf9TzJvEUZjWXDX%2BS80m4wMPEZAolSzPRDszFXFWwlQFzcJxkBnW2XVrqm045Gvjvk5p7ugwa2AouBcu3jIg7gygsTGzF%2FZBs6QsZLKs9gC09Heq6jYCekS84Zw3jDbw6DBBjqkATT4L9dAEZ9vAtuNnRxwD9oAvqT21BH107merIwP8Zi6DYJOuAk5uA3xsF9SnOT2FBTbhg4MjNmdQBEk4b0%2Fu%2FLp2BCIaoa8kyWmO1F3EztYFVg6lZ1NMeNtMsVCtu4UHwG%2F8IM4V8jhHnT%2Bb2YP9doNOV%2Bx%2BY8HMsDnMJnnAnmZmXawVLI7GnbJEOdPRx8G1MepmZ%2BvgY0Ih63eqQDGunBAgzVM&X-Amz-Signature=e62c067d1bfbacfd465563040e5dfdcc79fb18931ef86c73d4d35989e2f66ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
