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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7R7EQO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMNjjmTdWjvduwxo%2BKA7DGkviGLvvle84P1m04OpSk0AIgNg6mT2VhRa8AhjoAOAksQ7j8h7%2FRFDS40MquYte3lnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEE6ZbJmar5IaxenSircA7h3Z9HCrNWaDsL14oCOQdLksgswiLSoYS1KbVfMa11mwH%2F%2FJAVN3DpdDDtP7b3XLWpDb8AXIYy0xDz1mfBni4LWmrwgtJOkATzlly8s9wRryervNQZ11imwQnKDp8hNR3xXUH6lDh63nJgoLP%2BFGqjBkhcblz2FGkYqzSPF0k5%2FjtkwzjWTh1fQeQJ%2BpORJkvnbcuRdknmQUMpStb53Z%2BPzsJmJep%2Be6nIrjviK2bGc6JweV6K%2Bkr%2BZSo52z2n3PzkGh3C22IhvgeexExCMm1JBO4N2IhDrY%2FrcAS1E1uDszmPy63v%2Fd%2FuNwf4VcdkpwvvgqfHmKZeRd7KvzM4e4LHCR%2BInh1cyeo2psImKwm6h0d5%2BIBN14f1ILJhWbXgbaqi7cuh60R68uGys1zZryXSftGY9L2g2FZahi3N0VQBI7stYGOq3ROcgTEARSbJWzNvbcqjfQm4lx%2BA%2FqyIlcNL3b%2BklFpc2lYn0n2rrEzZM8wuIiRb%2Fx4Rb%2B3%2Bd3DEcjT0KLR%2FqKarwHC7mCohdffrLu46XuENYzFeGwDlXZyPdtYRULTr1wG836q9Bbsr96o7lZnZ8AJkEOzeNP4fUEck2Un3vnVKe7af69A%2F4c5j6Eygki6axeSnA9Uj7MI%2B9ocEGOqUBuzRblvQENg%2FgLOvDlIRS3QjidrxmBdWFO5negmsVk3RQ8fmqcjCXJ3tatfPNwgta6NlMzeSeUZ6jHUET%2Fmx69DmQTa68i%2ByfrJWmmAkgsIbnXqIrbYDVuuMCIkbDrnqVYValylWe0d%2FpEQg9P8Kl%2BSQnLDe3slKq6oBce8XQuI9LjbeWTJFzwWmUP7dPVUTQWb8ha4RFSW5DWq92z9LBawNcvswf&X-Amz-Signature=2f61d6a6a95380f7893a235ca24a9eb10e9235ad873d1575fd9046e8508faf8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7R7EQO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMNjjmTdWjvduwxo%2BKA7DGkviGLvvle84P1m04OpSk0AIgNg6mT2VhRa8AhjoAOAksQ7j8h7%2FRFDS40MquYte3lnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEE6ZbJmar5IaxenSircA7h3Z9HCrNWaDsL14oCOQdLksgswiLSoYS1KbVfMa11mwH%2F%2FJAVN3DpdDDtP7b3XLWpDb8AXIYy0xDz1mfBni4LWmrwgtJOkATzlly8s9wRryervNQZ11imwQnKDp8hNR3xXUH6lDh63nJgoLP%2BFGqjBkhcblz2FGkYqzSPF0k5%2FjtkwzjWTh1fQeQJ%2BpORJkvnbcuRdknmQUMpStb53Z%2BPzsJmJep%2Be6nIrjviK2bGc6JweV6K%2Bkr%2BZSo52z2n3PzkGh3C22IhvgeexExCMm1JBO4N2IhDrY%2FrcAS1E1uDszmPy63v%2Fd%2FuNwf4VcdkpwvvgqfHmKZeRd7KvzM4e4LHCR%2BInh1cyeo2psImKwm6h0d5%2BIBN14f1ILJhWbXgbaqi7cuh60R68uGys1zZryXSftGY9L2g2FZahi3N0VQBI7stYGOq3ROcgTEARSbJWzNvbcqjfQm4lx%2BA%2FqyIlcNL3b%2BklFpc2lYn0n2rrEzZM8wuIiRb%2Fx4Rb%2B3%2Bd3DEcjT0KLR%2FqKarwHC7mCohdffrLu46XuENYzFeGwDlXZyPdtYRULTr1wG836q9Bbsr96o7lZnZ8AJkEOzeNP4fUEck2Un3vnVKe7af69A%2F4c5j6Eygki6axeSnA9Uj7MI%2B9ocEGOqUBuzRblvQENg%2FgLOvDlIRS3QjidrxmBdWFO5negmsVk3RQ8fmqcjCXJ3tatfPNwgta6NlMzeSeUZ6jHUET%2Fmx69DmQTa68i%2ByfrJWmmAkgsIbnXqIrbYDVuuMCIkbDrnqVYValylWe0d%2FpEQg9P8Kl%2BSQnLDe3slKq6oBce8XQuI9LjbeWTJFzwWmUP7dPVUTQWb8ha4RFSW5DWq92z9LBawNcvswf&X-Amz-Signature=550d69623e10e0fcc0e9223e30317782a9f305278dedd501930cd220d50e5172&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7R7EQO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMNjjmTdWjvduwxo%2BKA7DGkviGLvvle84P1m04OpSk0AIgNg6mT2VhRa8AhjoAOAksQ7j8h7%2FRFDS40MquYte3lnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEE6ZbJmar5IaxenSircA7h3Z9HCrNWaDsL14oCOQdLksgswiLSoYS1KbVfMa11mwH%2F%2FJAVN3DpdDDtP7b3XLWpDb8AXIYy0xDz1mfBni4LWmrwgtJOkATzlly8s9wRryervNQZ11imwQnKDp8hNR3xXUH6lDh63nJgoLP%2BFGqjBkhcblz2FGkYqzSPF0k5%2FjtkwzjWTh1fQeQJ%2BpORJkvnbcuRdknmQUMpStb53Z%2BPzsJmJep%2Be6nIrjviK2bGc6JweV6K%2Bkr%2BZSo52z2n3PzkGh3C22IhvgeexExCMm1JBO4N2IhDrY%2FrcAS1E1uDszmPy63v%2Fd%2FuNwf4VcdkpwvvgqfHmKZeRd7KvzM4e4LHCR%2BInh1cyeo2psImKwm6h0d5%2BIBN14f1ILJhWbXgbaqi7cuh60R68uGys1zZryXSftGY9L2g2FZahi3N0VQBI7stYGOq3ROcgTEARSbJWzNvbcqjfQm4lx%2BA%2FqyIlcNL3b%2BklFpc2lYn0n2rrEzZM8wuIiRb%2Fx4Rb%2B3%2Bd3DEcjT0KLR%2FqKarwHC7mCohdffrLu46XuENYzFeGwDlXZyPdtYRULTr1wG836q9Bbsr96o7lZnZ8AJkEOzeNP4fUEck2Un3vnVKe7af69A%2F4c5j6Eygki6axeSnA9Uj7MI%2B9ocEGOqUBuzRblvQENg%2FgLOvDlIRS3QjidrxmBdWFO5negmsVk3RQ8fmqcjCXJ3tatfPNwgta6NlMzeSeUZ6jHUET%2Fmx69DmQTa68i%2ByfrJWmmAkgsIbnXqIrbYDVuuMCIkbDrnqVYValylWe0d%2FpEQg9P8Kl%2BSQnLDe3slKq6oBce8XQuI9LjbeWTJFzwWmUP7dPVUTQWb8ha4RFSW5DWq92z9LBawNcvswf&X-Amz-Signature=26dc67f7743f3dbe6fa7610f8e3367e4c1576e0c9e1f332b66345145a5d99855&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7R7EQO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMNjjmTdWjvduwxo%2BKA7DGkviGLvvle84P1m04OpSk0AIgNg6mT2VhRa8AhjoAOAksQ7j8h7%2FRFDS40MquYte3lnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEE6ZbJmar5IaxenSircA7h3Z9HCrNWaDsL14oCOQdLksgswiLSoYS1KbVfMa11mwH%2F%2FJAVN3DpdDDtP7b3XLWpDb8AXIYy0xDz1mfBni4LWmrwgtJOkATzlly8s9wRryervNQZ11imwQnKDp8hNR3xXUH6lDh63nJgoLP%2BFGqjBkhcblz2FGkYqzSPF0k5%2FjtkwzjWTh1fQeQJ%2BpORJkvnbcuRdknmQUMpStb53Z%2BPzsJmJep%2Be6nIrjviK2bGc6JweV6K%2Bkr%2BZSo52z2n3PzkGh3C22IhvgeexExCMm1JBO4N2IhDrY%2FrcAS1E1uDszmPy63v%2Fd%2FuNwf4VcdkpwvvgqfHmKZeRd7KvzM4e4LHCR%2BInh1cyeo2psImKwm6h0d5%2BIBN14f1ILJhWbXgbaqi7cuh60R68uGys1zZryXSftGY9L2g2FZahi3N0VQBI7stYGOq3ROcgTEARSbJWzNvbcqjfQm4lx%2BA%2FqyIlcNL3b%2BklFpc2lYn0n2rrEzZM8wuIiRb%2Fx4Rb%2B3%2Bd3DEcjT0KLR%2FqKarwHC7mCohdffrLu46XuENYzFeGwDlXZyPdtYRULTr1wG836q9Bbsr96o7lZnZ8AJkEOzeNP4fUEck2Un3vnVKe7af69A%2F4c5j6Eygki6axeSnA9Uj7MI%2B9ocEGOqUBuzRblvQENg%2FgLOvDlIRS3QjidrxmBdWFO5negmsVk3RQ8fmqcjCXJ3tatfPNwgta6NlMzeSeUZ6jHUET%2Fmx69DmQTa68i%2ByfrJWmmAkgsIbnXqIrbYDVuuMCIkbDrnqVYValylWe0d%2FpEQg9P8Kl%2BSQnLDe3slKq6oBce8XQuI9LjbeWTJFzwWmUP7dPVUTQWb8ha4RFSW5DWq92z9LBawNcvswf&X-Amz-Signature=0fc450837fafd7c7e8708c8646ae0b16368f16f56f8223ff7ad8ef461d62a5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7R7EQO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMNjjmTdWjvduwxo%2BKA7DGkviGLvvle84P1m04OpSk0AIgNg6mT2VhRa8AhjoAOAksQ7j8h7%2FRFDS40MquYte3lnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEE6ZbJmar5IaxenSircA7h3Z9HCrNWaDsL14oCOQdLksgswiLSoYS1KbVfMa11mwH%2F%2FJAVN3DpdDDtP7b3XLWpDb8AXIYy0xDz1mfBni4LWmrwgtJOkATzlly8s9wRryervNQZ11imwQnKDp8hNR3xXUH6lDh63nJgoLP%2BFGqjBkhcblz2FGkYqzSPF0k5%2FjtkwzjWTh1fQeQJ%2BpORJkvnbcuRdknmQUMpStb53Z%2BPzsJmJep%2Be6nIrjviK2bGc6JweV6K%2Bkr%2BZSo52z2n3PzkGh3C22IhvgeexExCMm1JBO4N2IhDrY%2FrcAS1E1uDszmPy63v%2Fd%2FuNwf4VcdkpwvvgqfHmKZeRd7KvzM4e4LHCR%2BInh1cyeo2psImKwm6h0d5%2BIBN14f1ILJhWbXgbaqi7cuh60R68uGys1zZryXSftGY9L2g2FZahi3N0VQBI7stYGOq3ROcgTEARSbJWzNvbcqjfQm4lx%2BA%2FqyIlcNL3b%2BklFpc2lYn0n2rrEzZM8wuIiRb%2Fx4Rb%2B3%2Bd3DEcjT0KLR%2FqKarwHC7mCohdffrLu46XuENYzFeGwDlXZyPdtYRULTr1wG836q9Bbsr96o7lZnZ8AJkEOzeNP4fUEck2Un3vnVKe7af69A%2F4c5j6Eygki6axeSnA9Uj7MI%2B9ocEGOqUBuzRblvQENg%2FgLOvDlIRS3QjidrxmBdWFO5negmsVk3RQ8fmqcjCXJ3tatfPNwgta6NlMzeSeUZ6jHUET%2Fmx69DmQTa68i%2ByfrJWmmAkgsIbnXqIrbYDVuuMCIkbDrnqVYValylWe0d%2FpEQg9P8Kl%2BSQnLDe3slKq6oBce8XQuI9LjbeWTJFzwWmUP7dPVUTQWb8ha4RFSW5DWq92z9LBawNcvswf&X-Amz-Signature=f650043493ab796297a227688de21a08a316749020ca3fad999abbd3382db1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7R7EQO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMNjjmTdWjvduwxo%2BKA7DGkviGLvvle84P1m04OpSk0AIgNg6mT2VhRa8AhjoAOAksQ7j8h7%2FRFDS40MquYte3lnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEE6ZbJmar5IaxenSircA7h3Z9HCrNWaDsL14oCOQdLksgswiLSoYS1KbVfMa11mwH%2F%2FJAVN3DpdDDtP7b3XLWpDb8AXIYy0xDz1mfBni4LWmrwgtJOkATzlly8s9wRryervNQZ11imwQnKDp8hNR3xXUH6lDh63nJgoLP%2BFGqjBkhcblz2FGkYqzSPF0k5%2FjtkwzjWTh1fQeQJ%2BpORJkvnbcuRdknmQUMpStb53Z%2BPzsJmJep%2Be6nIrjviK2bGc6JweV6K%2Bkr%2BZSo52z2n3PzkGh3C22IhvgeexExCMm1JBO4N2IhDrY%2FrcAS1E1uDszmPy63v%2Fd%2FuNwf4VcdkpwvvgqfHmKZeRd7KvzM4e4LHCR%2BInh1cyeo2psImKwm6h0d5%2BIBN14f1ILJhWbXgbaqi7cuh60R68uGys1zZryXSftGY9L2g2FZahi3N0VQBI7stYGOq3ROcgTEARSbJWzNvbcqjfQm4lx%2BA%2FqyIlcNL3b%2BklFpc2lYn0n2rrEzZM8wuIiRb%2Fx4Rb%2B3%2Bd3DEcjT0KLR%2FqKarwHC7mCohdffrLu46XuENYzFeGwDlXZyPdtYRULTr1wG836q9Bbsr96o7lZnZ8AJkEOzeNP4fUEck2Un3vnVKe7af69A%2F4c5j6Eygki6axeSnA9Uj7MI%2B9ocEGOqUBuzRblvQENg%2FgLOvDlIRS3QjidrxmBdWFO5negmsVk3RQ8fmqcjCXJ3tatfPNwgta6NlMzeSeUZ6jHUET%2Fmx69DmQTa68i%2ByfrJWmmAkgsIbnXqIrbYDVuuMCIkbDrnqVYValylWe0d%2FpEQg9P8Kl%2BSQnLDe3slKq6oBce8XQuI9LjbeWTJFzwWmUP7dPVUTQWb8ha4RFSW5DWq92z9LBawNcvswf&X-Amz-Signature=f664357abc3c8300d6c893d2715672542c7aa011e66f5efcb2b97218beed9947&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7R7EQO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMNjjmTdWjvduwxo%2BKA7DGkviGLvvle84P1m04OpSk0AIgNg6mT2VhRa8AhjoAOAksQ7j8h7%2FRFDS40MquYte3lnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEE6ZbJmar5IaxenSircA7h3Z9HCrNWaDsL14oCOQdLksgswiLSoYS1KbVfMa11mwH%2F%2FJAVN3DpdDDtP7b3XLWpDb8AXIYy0xDz1mfBni4LWmrwgtJOkATzlly8s9wRryervNQZ11imwQnKDp8hNR3xXUH6lDh63nJgoLP%2BFGqjBkhcblz2FGkYqzSPF0k5%2FjtkwzjWTh1fQeQJ%2BpORJkvnbcuRdknmQUMpStb53Z%2BPzsJmJep%2Be6nIrjviK2bGc6JweV6K%2Bkr%2BZSo52z2n3PzkGh3C22IhvgeexExCMm1JBO4N2IhDrY%2FrcAS1E1uDszmPy63v%2Fd%2FuNwf4VcdkpwvvgqfHmKZeRd7KvzM4e4LHCR%2BInh1cyeo2psImKwm6h0d5%2BIBN14f1ILJhWbXgbaqi7cuh60R68uGys1zZryXSftGY9L2g2FZahi3N0VQBI7stYGOq3ROcgTEARSbJWzNvbcqjfQm4lx%2BA%2FqyIlcNL3b%2BklFpc2lYn0n2rrEzZM8wuIiRb%2Fx4Rb%2B3%2Bd3DEcjT0KLR%2FqKarwHC7mCohdffrLu46XuENYzFeGwDlXZyPdtYRULTr1wG836q9Bbsr96o7lZnZ8AJkEOzeNP4fUEck2Un3vnVKe7af69A%2F4c5j6Eygki6axeSnA9Uj7MI%2B9ocEGOqUBuzRblvQENg%2FgLOvDlIRS3QjidrxmBdWFO5negmsVk3RQ8fmqcjCXJ3tatfPNwgta6NlMzeSeUZ6jHUET%2Fmx69DmQTa68i%2ByfrJWmmAkgsIbnXqIrbYDVuuMCIkbDrnqVYValylWe0d%2FpEQg9P8Kl%2BSQnLDe3slKq6oBce8XQuI9LjbeWTJFzwWmUP7dPVUTQWb8ha4RFSW5DWq92z9LBawNcvswf&X-Amz-Signature=afb8b36f14454b5f02e8370d95e17cb3ee3dbeeb2de80e34640fed141175f857&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
