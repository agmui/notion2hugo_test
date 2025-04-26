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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAFHRHY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVydXmfOLKVhiiMvXTUU8%2FKDTHK1%2FOEyRHz5TJPwBqgIhAJHI13imNYjMTjwR9V3dVnbnxd%2BzKueR%2Bola8mzhqMmYKv8DCDsQABoMNjM3NDIzMTgzODA1IgwEp4U8WT%2BrI08vEFcq3AOKBxsTJ5Q51C3ZYCjPNEE06MDgOAiGS1tjAWrOn5nM6gaqDruJJIfUU0HVha%2B0%2BO%2FwyXxswlBEcqc17ScT4HFVrfNLvlqmedLRiwUPcemJBAPjqWlKk398tE2Gn1haMRXKpiuBcT0zktXgXbZ5q%2B65jk0aW8TIG%2Fue4VAsdf7m2k4GfWqkhi8pz7oyTVn7yuv0MRhu%2FyL%2BwHNKyXBPxEYufOiamlBUDk5n%2BCv5IDc14aHsfZctCGQDTBOTfXZe5YNuFICv6Lnu5MI7VF%2B4pIuNctaGaKqrk%2FrJimwvG4mQhzFCx%2BDVP9C6GyTe5egG2B21bvjRKO3dQzDrDq%2BctK13J5y9j%2BUxjBJZC6GaL16Lb064bz8XslVDsRYA0zxKoNpMTE0HIPtL9j%2FoonAhRB56rhlF%2FfDCAIZOhm1eVPtfyOfBVC9P4l5XtTvf9Ph4zqt76XIt%2FupKceX%2B2qcY6FEgTeAX3ic3jleucbEO5kNDjzBChC4siGq8rYFdvaPmmoFmsZyTYkCrdKFNJy3%2BsHIDjaPSpMdq8CsE9fXlRIWVgr3PlMLIrj2d23iO%2FWEH3lTSyVfdjm84W27%2FDlATf4lbUCgPtq1Wq69oAKO4AmuANpH9L1NWv3dB42Yn%2FjDY87DABjqkAXwiKfwnlwAEWSAC48SBHsFNUzDGvBwFdHflnVzuYnQXEbx0UaJaMSbGr0A71j7C4dZGbFChhiIjU6jnz6Oq11m4q9G0An2StnS2M74mftjkgRom1lKYy42XvPZrRwSzq03KxRfUaG3qsThRNawzvWyTUTv1mgvTncxXgTHPUOLU823AT6CDOJHcVD1nWkjhoo7ul4eE6qObAqyLR9Iw3OhX7tMt&X-Amz-Signature=be9120b6ea5bb58ee59324a954593c33328a3c8352806c16e949cea70824da9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAFHRHY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVydXmfOLKVhiiMvXTUU8%2FKDTHK1%2FOEyRHz5TJPwBqgIhAJHI13imNYjMTjwR9V3dVnbnxd%2BzKueR%2Bola8mzhqMmYKv8DCDsQABoMNjM3NDIzMTgzODA1IgwEp4U8WT%2BrI08vEFcq3AOKBxsTJ5Q51C3ZYCjPNEE06MDgOAiGS1tjAWrOn5nM6gaqDruJJIfUU0HVha%2B0%2BO%2FwyXxswlBEcqc17ScT4HFVrfNLvlqmedLRiwUPcemJBAPjqWlKk398tE2Gn1haMRXKpiuBcT0zktXgXbZ5q%2B65jk0aW8TIG%2Fue4VAsdf7m2k4GfWqkhi8pz7oyTVn7yuv0MRhu%2FyL%2BwHNKyXBPxEYufOiamlBUDk5n%2BCv5IDc14aHsfZctCGQDTBOTfXZe5YNuFICv6Lnu5MI7VF%2B4pIuNctaGaKqrk%2FrJimwvG4mQhzFCx%2BDVP9C6GyTe5egG2B21bvjRKO3dQzDrDq%2BctK13J5y9j%2BUxjBJZC6GaL16Lb064bz8XslVDsRYA0zxKoNpMTE0HIPtL9j%2FoonAhRB56rhlF%2FfDCAIZOhm1eVPtfyOfBVC9P4l5XtTvf9Ph4zqt76XIt%2FupKceX%2B2qcY6FEgTeAX3ic3jleucbEO5kNDjzBChC4siGq8rYFdvaPmmoFmsZyTYkCrdKFNJy3%2BsHIDjaPSpMdq8CsE9fXlRIWVgr3PlMLIrj2d23iO%2FWEH3lTSyVfdjm84W27%2FDlATf4lbUCgPtq1Wq69oAKO4AmuANpH9L1NWv3dB42Yn%2FjDY87DABjqkAXwiKfwnlwAEWSAC48SBHsFNUzDGvBwFdHflnVzuYnQXEbx0UaJaMSbGr0A71j7C4dZGbFChhiIjU6jnz6Oq11m4q9G0An2StnS2M74mftjkgRom1lKYy42XvPZrRwSzq03KxRfUaG3qsThRNawzvWyTUTv1mgvTncxXgTHPUOLU823AT6CDOJHcVD1nWkjhoo7ul4eE6qObAqyLR9Iw3OhX7tMt&X-Amz-Signature=04a9798c34110b8ca96097f96ff3b531a34d8877075a44ad281d3577f0762f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAFHRHY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVydXmfOLKVhiiMvXTUU8%2FKDTHK1%2FOEyRHz5TJPwBqgIhAJHI13imNYjMTjwR9V3dVnbnxd%2BzKueR%2Bola8mzhqMmYKv8DCDsQABoMNjM3NDIzMTgzODA1IgwEp4U8WT%2BrI08vEFcq3AOKBxsTJ5Q51C3ZYCjPNEE06MDgOAiGS1tjAWrOn5nM6gaqDruJJIfUU0HVha%2B0%2BO%2FwyXxswlBEcqc17ScT4HFVrfNLvlqmedLRiwUPcemJBAPjqWlKk398tE2Gn1haMRXKpiuBcT0zktXgXbZ5q%2B65jk0aW8TIG%2Fue4VAsdf7m2k4GfWqkhi8pz7oyTVn7yuv0MRhu%2FyL%2BwHNKyXBPxEYufOiamlBUDk5n%2BCv5IDc14aHsfZctCGQDTBOTfXZe5YNuFICv6Lnu5MI7VF%2B4pIuNctaGaKqrk%2FrJimwvG4mQhzFCx%2BDVP9C6GyTe5egG2B21bvjRKO3dQzDrDq%2BctK13J5y9j%2BUxjBJZC6GaL16Lb064bz8XslVDsRYA0zxKoNpMTE0HIPtL9j%2FoonAhRB56rhlF%2FfDCAIZOhm1eVPtfyOfBVC9P4l5XtTvf9Ph4zqt76XIt%2FupKceX%2B2qcY6FEgTeAX3ic3jleucbEO5kNDjzBChC4siGq8rYFdvaPmmoFmsZyTYkCrdKFNJy3%2BsHIDjaPSpMdq8CsE9fXlRIWVgr3PlMLIrj2d23iO%2FWEH3lTSyVfdjm84W27%2FDlATf4lbUCgPtq1Wq69oAKO4AmuANpH9L1NWv3dB42Yn%2FjDY87DABjqkAXwiKfwnlwAEWSAC48SBHsFNUzDGvBwFdHflnVzuYnQXEbx0UaJaMSbGr0A71j7C4dZGbFChhiIjU6jnz6Oq11m4q9G0An2StnS2M74mftjkgRom1lKYy42XvPZrRwSzq03KxRfUaG3qsThRNawzvWyTUTv1mgvTncxXgTHPUOLU823AT6CDOJHcVD1nWkjhoo7ul4eE6qObAqyLR9Iw3OhX7tMt&X-Amz-Signature=5e144c9f0ab245108b071d301f7bc2c304756f1db7af5e8797f7a9db6c898ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAFHRHY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVydXmfOLKVhiiMvXTUU8%2FKDTHK1%2FOEyRHz5TJPwBqgIhAJHI13imNYjMTjwR9V3dVnbnxd%2BzKueR%2Bola8mzhqMmYKv8DCDsQABoMNjM3NDIzMTgzODA1IgwEp4U8WT%2BrI08vEFcq3AOKBxsTJ5Q51C3ZYCjPNEE06MDgOAiGS1tjAWrOn5nM6gaqDruJJIfUU0HVha%2B0%2BO%2FwyXxswlBEcqc17ScT4HFVrfNLvlqmedLRiwUPcemJBAPjqWlKk398tE2Gn1haMRXKpiuBcT0zktXgXbZ5q%2B65jk0aW8TIG%2Fue4VAsdf7m2k4GfWqkhi8pz7oyTVn7yuv0MRhu%2FyL%2BwHNKyXBPxEYufOiamlBUDk5n%2BCv5IDc14aHsfZctCGQDTBOTfXZe5YNuFICv6Lnu5MI7VF%2B4pIuNctaGaKqrk%2FrJimwvG4mQhzFCx%2BDVP9C6GyTe5egG2B21bvjRKO3dQzDrDq%2BctK13J5y9j%2BUxjBJZC6GaL16Lb064bz8XslVDsRYA0zxKoNpMTE0HIPtL9j%2FoonAhRB56rhlF%2FfDCAIZOhm1eVPtfyOfBVC9P4l5XtTvf9Ph4zqt76XIt%2FupKceX%2B2qcY6FEgTeAX3ic3jleucbEO5kNDjzBChC4siGq8rYFdvaPmmoFmsZyTYkCrdKFNJy3%2BsHIDjaPSpMdq8CsE9fXlRIWVgr3PlMLIrj2d23iO%2FWEH3lTSyVfdjm84W27%2FDlATf4lbUCgPtq1Wq69oAKO4AmuANpH9L1NWv3dB42Yn%2FjDY87DABjqkAXwiKfwnlwAEWSAC48SBHsFNUzDGvBwFdHflnVzuYnQXEbx0UaJaMSbGr0A71j7C4dZGbFChhiIjU6jnz6Oq11m4q9G0An2StnS2M74mftjkgRom1lKYy42XvPZrRwSzq03KxRfUaG3qsThRNawzvWyTUTv1mgvTncxXgTHPUOLU823AT6CDOJHcVD1nWkjhoo7ul4eE6qObAqyLR9Iw3OhX7tMt&X-Amz-Signature=56b294ddacecc0cccaee57941ebdccdce8dc523c2ac58a9a1135570d9f562381&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAFHRHY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVydXmfOLKVhiiMvXTUU8%2FKDTHK1%2FOEyRHz5TJPwBqgIhAJHI13imNYjMTjwR9V3dVnbnxd%2BzKueR%2Bola8mzhqMmYKv8DCDsQABoMNjM3NDIzMTgzODA1IgwEp4U8WT%2BrI08vEFcq3AOKBxsTJ5Q51C3ZYCjPNEE06MDgOAiGS1tjAWrOn5nM6gaqDruJJIfUU0HVha%2B0%2BO%2FwyXxswlBEcqc17ScT4HFVrfNLvlqmedLRiwUPcemJBAPjqWlKk398tE2Gn1haMRXKpiuBcT0zktXgXbZ5q%2B65jk0aW8TIG%2Fue4VAsdf7m2k4GfWqkhi8pz7oyTVn7yuv0MRhu%2FyL%2BwHNKyXBPxEYufOiamlBUDk5n%2BCv5IDc14aHsfZctCGQDTBOTfXZe5YNuFICv6Lnu5MI7VF%2B4pIuNctaGaKqrk%2FrJimwvG4mQhzFCx%2BDVP9C6GyTe5egG2B21bvjRKO3dQzDrDq%2BctK13J5y9j%2BUxjBJZC6GaL16Lb064bz8XslVDsRYA0zxKoNpMTE0HIPtL9j%2FoonAhRB56rhlF%2FfDCAIZOhm1eVPtfyOfBVC9P4l5XtTvf9Ph4zqt76XIt%2FupKceX%2B2qcY6FEgTeAX3ic3jleucbEO5kNDjzBChC4siGq8rYFdvaPmmoFmsZyTYkCrdKFNJy3%2BsHIDjaPSpMdq8CsE9fXlRIWVgr3PlMLIrj2d23iO%2FWEH3lTSyVfdjm84W27%2FDlATf4lbUCgPtq1Wq69oAKO4AmuANpH9L1NWv3dB42Yn%2FjDY87DABjqkAXwiKfwnlwAEWSAC48SBHsFNUzDGvBwFdHflnVzuYnQXEbx0UaJaMSbGr0A71j7C4dZGbFChhiIjU6jnz6Oq11m4q9G0An2StnS2M74mftjkgRom1lKYy42XvPZrRwSzq03KxRfUaG3qsThRNawzvWyTUTv1mgvTncxXgTHPUOLU823AT6CDOJHcVD1nWkjhoo7ul4eE6qObAqyLR9Iw3OhX7tMt&X-Amz-Signature=554b3ace56f5917dc6d4b90c60dcec753fb3566d2c97ee5a932efd99141f067a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAFHRHY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVydXmfOLKVhiiMvXTUU8%2FKDTHK1%2FOEyRHz5TJPwBqgIhAJHI13imNYjMTjwR9V3dVnbnxd%2BzKueR%2Bola8mzhqMmYKv8DCDsQABoMNjM3NDIzMTgzODA1IgwEp4U8WT%2BrI08vEFcq3AOKBxsTJ5Q51C3ZYCjPNEE06MDgOAiGS1tjAWrOn5nM6gaqDruJJIfUU0HVha%2B0%2BO%2FwyXxswlBEcqc17ScT4HFVrfNLvlqmedLRiwUPcemJBAPjqWlKk398tE2Gn1haMRXKpiuBcT0zktXgXbZ5q%2B65jk0aW8TIG%2Fue4VAsdf7m2k4GfWqkhi8pz7oyTVn7yuv0MRhu%2FyL%2BwHNKyXBPxEYufOiamlBUDk5n%2BCv5IDc14aHsfZctCGQDTBOTfXZe5YNuFICv6Lnu5MI7VF%2B4pIuNctaGaKqrk%2FrJimwvG4mQhzFCx%2BDVP9C6GyTe5egG2B21bvjRKO3dQzDrDq%2BctK13J5y9j%2BUxjBJZC6GaL16Lb064bz8XslVDsRYA0zxKoNpMTE0HIPtL9j%2FoonAhRB56rhlF%2FfDCAIZOhm1eVPtfyOfBVC9P4l5XtTvf9Ph4zqt76XIt%2FupKceX%2B2qcY6FEgTeAX3ic3jleucbEO5kNDjzBChC4siGq8rYFdvaPmmoFmsZyTYkCrdKFNJy3%2BsHIDjaPSpMdq8CsE9fXlRIWVgr3PlMLIrj2d23iO%2FWEH3lTSyVfdjm84W27%2FDlATf4lbUCgPtq1Wq69oAKO4AmuANpH9L1NWv3dB42Yn%2FjDY87DABjqkAXwiKfwnlwAEWSAC48SBHsFNUzDGvBwFdHflnVzuYnQXEbx0UaJaMSbGr0A71j7C4dZGbFChhiIjU6jnz6Oq11m4q9G0An2StnS2M74mftjkgRom1lKYy42XvPZrRwSzq03KxRfUaG3qsThRNawzvWyTUTv1mgvTncxXgTHPUOLU823AT6CDOJHcVD1nWkjhoo7ul4eE6qObAqyLR9Iw3OhX7tMt&X-Amz-Signature=7359eebd1fcfd65cc7b04cb0b722c400562fdf0504b46f1c9591b6ef4d0087cf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WAFHRHY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVydXmfOLKVhiiMvXTUU8%2FKDTHK1%2FOEyRHz5TJPwBqgIhAJHI13imNYjMTjwR9V3dVnbnxd%2BzKueR%2Bola8mzhqMmYKv8DCDsQABoMNjM3NDIzMTgzODA1IgwEp4U8WT%2BrI08vEFcq3AOKBxsTJ5Q51C3ZYCjPNEE06MDgOAiGS1tjAWrOn5nM6gaqDruJJIfUU0HVha%2B0%2BO%2FwyXxswlBEcqc17ScT4HFVrfNLvlqmedLRiwUPcemJBAPjqWlKk398tE2Gn1haMRXKpiuBcT0zktXgXbZ5q%2B65jk0aW8TIG%2Fue4VAsdf7m2k4GfWqkhi8pz7oyTVn7yuv0MRhu%2FyL%2BwHNKyXBPxEYufOiamlBUDk5n%2BCv5IDc14aHsfZctCGQDTBOTfXZe5YNuFICv6Lnu5MI7VF%2B4pIuNctaGaKqrk%2FrJimwvG4mQhzFCx%2BDVP9C6GyTe5egG2B21bvjRKO3dQzDrDq%2BctK13J5y9j%2BUxjBJZC6GaL16Lb064bz8XslVDsRYA0zxKoNpMTE0HIPtL9j%2FoonAhRB56rhlF%2FfDCAIZOhm1eVPtfyOfBVC9P4l5XtTvf9Ph4zqt76XIt%2FupKceX%2B2qcY6FEgTeAX3ic3jleucbEO5kNDjzBChC4siGq8rYFdvaPmmoFmsZyTYkCrdKFNJy3%2BsHIDjaPSpMdq8CsE9fXlRIWVgr3PlMLIrj2d23iO%2FWEH3lTSyVfdjm84W27%2FDlATf4lbUCgPtq1Wq69oAKO4AmuANpH9L1NWv3dB42Yn%2FjDY87DABjqkAXwiKfwnlwAEWSAC48SBHsFNUzDGvBwFdHflnVzuYnQXEbx0UaJaMSbGr0A71j7C4dZGbFChhiIjU6jnz6Oq11m4q9G0An2StnS2M74mftjkgRom1lKYy42XvPZrRwSzq03KxRfUaG3qsThRNawzvWyTUTv1mgvTncxXgTHPUOLU823AT6CDOJHcVD1nWkjhoo7ul4eE6qObAqyLR9Iw3OhX7tMt&X-Amz-Signature=d5447af6099dca018918af9357e495e9c7c6557bfe9f170fff76fdc1f76b1a67&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
