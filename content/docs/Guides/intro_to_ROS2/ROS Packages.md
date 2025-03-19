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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVMN2BF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmhOPaqDbXv0DGueXmAMxqTShvEcICfadKIMIs7n8zdgIgQKwSndHImUz2bMaLY08rYwiRRlVCpNy%2F473c5Q6DaC4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCP%2BVvUfx3sdAIzlMSrcA%2FNaBG6elT6CnxvKgQCSiZ65ZJSY5JOMeZty%2B1GgXurm%2Bvk8Yhv9ChRZZIz%2BhVeO0MBxExEyxRUzuMOvzHRDzejeMRm4xBs1EZMCQw6XC9AScRgSKjuuCOMwDXqNou137qnLCdOhnfRVeK4P9h%2FTORbNmeB7eB6LOUbihQqMSDZVX8ylEi8kOBg7KvK1X%2BqyNPMuhJmGz1Dhxww6GNM%2F9IXkcPtDDxUGJ8hwQ%2Fc%2FBti2HzPUksu8dP1MaoCdc1KqFGWhJx%2FwAsekxDWgToSBuufxGiwiT45oV5VJWvyBUFM0oDxxJEbdC78LGuzXMi7Uzng8UvcL3Mh7YrUwLXndQVKn4JL3vcrQd2QH1pRXkj1MbWXz7jnfOq9%2FW10%2FCDk95%2F8KOpsWD3JEeOx9jraWvGUACA5xpwGMAv7I%2FHliqcxv9qm%2BRBkAwjN%2F7%2BrHmSTafB%2B4f5vAkmxqYdoAEc7nFESx69LMu1Drn35TPeSYDKECSGIuoyPka6buTPpWtJONzZkgnHaFO3tSiJF1tXa1kg3vByaRJv1RVIYDl%2FB0al2Ix%2FViyADG2mJVZ%2BsXjWjTbSIjblf3WrenZvCb%2FocNEiI%2FlGo%2BCu0s8OPLby2BVeTn5JQjH89rZtF%2FtIwBMNf96L4GOqUBH851SK0fpLBEWR2qpt%2F9fYcUmmMLsmL9%2BWmXDDK2pO2Fwh3OKNyiF178JEDW8GE89fDR%2FJQvH%2BRFSHNM6JNCZfEfLuoXFGOjw7xNI4vU5HvVIOeMRmJ6unu4mrlu2YO%2BPSr4hfm6oVbVl9yPiqv7RBKQtJ1vH9dNOs%2BWtrOhjMTOef1RDYdgl1M%2BeVQFCtWNwm2GPFMIFQQnvfUIIql1goNwUGoK&X-Amz-Signature=936d6d8bf7ba0534d0dd7b41fb2c4dd30674337cda18acb5df461ed17aee97e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVMN2BF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmhOPaqDbXv0DGueXmAMxqTShvEcICfadKIMIs7n8zdgIgQKwSndHImUz2bMaLY08rYwiRRlVCpNy%2F473c5Q6DaC4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCP%2BVvUfx3sdAIzlMSrcA%2FNaBG6elT6CnxvKgQCSiZ65ZJSY5JOMeZty%2B1GgXurm%2Bvk8Yhv9ChRZZIz%2BhVeO0MBxExEyxRUzuMOvzHRDzejeMRm4xBs1EZMCQw6XC9AScRgSKjuuCOMwDXqNou137qnLCdOhnfRVeK4P9h%2FTORbNmeB7eB6LOUbihQqMSDZVX8ylEi8kOBg7KvK1X%2BqyNPMuhJmGz1Dhxww6GNM%2F9IXkcPtDDxUGJ8hwQ%2Fc%2FBti2HzPUksu8dP1MaoCdc1KqFGWhJx%2FwAsekxDWgToSBuufxGiwiT45oV5VJWvyBUFM0oDxxJEbdC78LGuzXMi7Uzng8UvcL3Mh7YrUwLXndQVKn4JL3vcrQd2QH1pRXkj1MbWXz7jnfOq9%2FW10%2FCDk95%2F8KOpsWD3JEeOx9jraWvGUACA5xpwGMAv7I%2FHliqcxv9qm%2BRBkAwjN%2F7%2BrHmSTafB%2B4f5vAkmxqYdoAEc7nFESx69LMu1Drn35TPeSYDKECSGIuoyPka6buTPpWtJONzZkgnHaFO3tSiJF1tXa1kg3vByaRJv1RVIYDl%2FB0al2Ix%2FViyADG2mJVZ%2BsXjWjTbSIjblf3WrenZvCb%2FocNEiI%2FlGo%2BCu0s8OPLby2BVeTn5JQjH89rZtF%2FtIwBMNf96L4GOqUBH851SK0fpLBEWR2qpt%2F9fYcUmmMLsmL9%2BWmXDDK2pO2Fwh3OKNyiF178JEDW8GE89fDR%2FJQvH%2BRFSHNM6JNCZfEfLuoXFGOjw7xNI4vU5HvVIOeMRmJ6unu4mrlu2YO%2BPSr4hfm6oVbVl9yPiqv7RBKQtJ1vH9dNOs%2BWtrOhjMTOef1RDYdgl1M%2BeVQFCtWNwm2GPFMIFQQnvfUIIql1goNwUGoK&X-Amz-Signature=a709e8b8146feb4b3937f887595bfb88cd7ecb5c1e6546c5d11b4cba6a2d1eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVMN2BF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmhOPaqDbXv0DGueXmAMxqTShvEcICfadKIMIs7n8zdgIgQKwSndHImUz2bMaLY08rYwiRRlVCpNy%2F473c5Q6DaC4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCP%2BVvUfx3sdAIzlMSrcA%2FNaBG6elT6CnxvKgQCSiZ65ZJSY5JOMeZty%2B1GgXurm%2Bvk8Yhv9ChRZZIz%2BhVeO0MBxExEyxRUzuMOvzHRDzejeMRm4xBs1EZMCQw6XC9AScRgSKjuuCOMwDXqNou137qnLCdOhnfRVeK4P9h%2FTORbNmeB7eB6LOUbihQqMSDZVX8ylEi8kOBg7KvK1X%2BqyNPMuhJmGz1Dhxww6GNM%2F9IXkcPtDDxUGJ8hwQ%2Fc%2FBti2HzPUksu8dP1MaoCdc1KqFGWhJx%2FwAsekxDWgToSBuufxGiwiT45oV5VJWvyBUFM0oDxxJEbdC78LGuzXMi7Uzng8UvcL3Mh7YrUwLXndQVKn4JL3vcrQd2QH1pRXkj1MbWXz7jnfOq9%2FW10%2FCDk95%2F8KOpsWD3JEeOx9jraWvGUACA5xpwGMAv7I%2FHliqcxv9qm%2BRBkAwjN%2F7%2BrHmSTafB%2B4f5vAkmxqYdoAEc7nFESx69LMu1Drn35TPeSYDKECSGIuoyPka6buTPpWtJONzZkgnHaFO3tSiJF1tXa1kg3vByaRJv1RVIYDl%2FB0al2Ix%2FViyADG2mJVZ%2BsXjWjTbSIjblf3WrenZvCb%2FocNEiI%2FlGo%2BCu0s8OPLby2BVeTn5JQjH89rZtF%2FtIwBMNf96L4GOqUBH851SK0fpLBEWR2qpt%2F9fYcUmmMLsmL9%2BWmXDDK2pO2Fwh3OKNyiF178JEDW8GE89fDR%2FJQvH%2BRFSHNM6JNCZfEfLuoXFGOjw7xNI4vU5HvVIOeMRmJ6unu4mrlu2YO%2BPSr4hfm6oVbVl9yPiqv7RBKQtJ1vH9dNOs%2BWtrOhjMTOef1RDYdgl1M%2BeVQFCtWNwm2GPFMIFQQnvfUIIql1goNwUGoK&X-Amz-Signature=8ac60b1f306518029219f8949431271bc0727403835284cb40992073b0196f98&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVMN2BF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmhOPaqDbXv0DGueXmAMxqTShvEcICfadKIMIs7n8zdgIgQKwSndHImUz2bMaLY08rYwiRRlVCpNy%2F473c5Q6DaC4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCP%2BVvUfx3sdAIzlMSrcA%2FNaBG6elT6CnxvKgQCSiZ65ZJSY5JOMeZty%2B1GgXurm%2Bvk8Yhv9ChRZZIz%2BhVeO0MBxExEyxRUzuMOvzHRDzejeMRm4xBs1EZMCQw6XC9AScRgSKjuuCOMwDXqNou137qnLCdOhnfRVeK4P9h%2FTORbNmeB7eB6LOUbihQqMSDZVX8ylEi8kOBg7KvK1X%2BqyNPMuhJmGz1Dhxww6GNM%2F9IXkcPtDDxUGJ8hwQ%2Fc%2FBti2HzPUksu8dP1MaoCdc1KqFGWhJx%2FwAsekxDWgToSBuufxGiwiT45oV5VJWvyBUFM0oDxxJEbdC78LGuzXMi7Uzng8UvcL3Mh7YrUwLXndQVKn4JL3vcrQd2QH1pRXkj1MbWXz7jnfOq9%2FW10%2FCDk95%2F8KOpsWD3JEeOx9jraWvGUACA5xpwGMAv7I%2FHliqcxv9qm%2BRBkAwjN%2F7%2BrHmSTafB%2B4f5vAkmxqYdoAEc7nFESx69LMu1Drn35TPeSYDKECSGIuoyPka6buTPpWtJONzZkgnHaFO3tSiJF1tXa1kg3vByaRJv1RVIYDl%2FB0al2Ix%2FViyADG2mJVZ%2BsXjWjTbSIjblf3WrenZvCb%2FocNEiI%2FlGo%2BCu0s8OPLby2BVeTn5JQjH89rZtF%2FtIwBMNf96L4GOqUBH851SK0fpLBEWR2qpt%2F9fYcUmmMLsmL9%2BWmXDDK2pO2Fwh3OKNyiF178JEDW8GE89fDR%2FJQvH%2BRFSHNM6JNCZfEfLuoXFGOjw7xNI4vU5HvVIOeMRmJ6unu4mrlu2YO%2BPSr4hfm6oVbVl9yPiqv7RBKQtJ1vH9dNOs%2BWtrOhjMTOef1RDYdgl1M%2BeVQFCtWNwm2GPFMIFQQnvfUIIql1goNwUGoK&X-Amz-Signature=fcdc9e2357a98ad4df7f727329e64e21793adcbd26b200593894346dc5ce1519&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVMN2BF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmhOPaqDbXv0DGueXmAMxqTShvEcICfadKIMIs7n8zdgIgQKwSndHImUz2bMaLY08rYwiRRlVCpNy%2F473c5Q6DaC4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCP%2BVvUfx3sdAIzlMSrcA%2FNaBG6elT6CnxvKgQCSiZ65ZJSY5JOMeZty%2B1GgXurm%2Bvk8Yhv9ChRZZIz%2BhVeO0MBxExEyxRUzuMOvzHRDzejeMRm4xBs1EZMCQw6XC9AScRgSKjuuCOMwDXqNou137qnLCdOhnfRVeK4P9h%2FTORbNmeB7eB6LOUbihQqMSDZVX8ylEi8kOBg7KvK1X%2BqyNPMuhJmGz1Dhxww6GNM%2F9IXkcPtDDxUGJ8hwQ%2Fc%2FBti2HzPUksu8dP1MaoCdc1KqFGWhJx%2FwAsekxDWgToSBuufxGiwiT45oV5VJWvyBUFM0oDxxJEbdC78LGuzXMi7Uzng8UvcL3Mh7YrUwLXndQVKn4JL3vcrQd2QH1pRXkj1MbWXz7jnfOq9%2FW10%2FCDk95%2F8KOpsWD3JEeOx9jraWvGUACA5xpwGMAv7I%2FHliqcxv9qm%2BRBkAwjN%2F7%2BrHmSTafB%2B4f5vAkmxqYdoAEc7nFESx69LMu1Drn35TPeSYDKECSGIuoyPka6buTPpWtJONzZkgnHaFO3tSiJF1tXa1kg3vByaRJv1RVIYDl%2FB0al2Ix%2FViyADG2mJVZ%2BsXjWjTbSIjblf3WrenZvCb%2FocNEiI%2FlGo%2BCu0s8OPLby2BVeTn5JQjH89rZtF%2FtIwBMNf96L4GOqUBH851SK0fpLBEWR2qpt%2F9fYcUmmMLsmL9%2BWmXDDK2pO2Fwh3OKNyiF178JEDW8GE89fDR%2FJQvH%2BRFSHNM6JNCZfEfLuoXFGOjw7xNI4vU5HvVIOeMRmJ6unu4mrlu2YO%2BPSr4hfm6oVbVl9yPiqv7RBKQtJ1vH9dNOs%2BWtrOhjMTOef1RDYdgl1M%2BeVQFCtWNwm2GPFMIFQQnvfUIIql1goNwUGoK&X-Amz-Signature=9ba0b331767d385eac4bc5dda010d0da6aa9e0cdf4e256e45585aebc9afa903a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVMN2BF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmhOPaqDbXv0DGueXmAMxqTShvEcICfadKIMIs7n8zdgIgQKwSndHImUz2bMaLY08rYwiRRlVCpNy%2F473c5Q6DaC4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCP%2BVvUfx3sdAIzlMSrcA%2FNaBG6elT6CnxvKgQCSiZ65ZJSY5JOMeZty%2B1GgXurm%2Bvk8Yhv9ChRZZIz%2BhVeO0MBxExEyxRUzuMOvzHRDzejeMRm4xBs1EZMCQw6XC9AScRgSKjuuCOMwDXqNou137qnLCdOhnfRVeK4P9h%2FTORbNmeB7eB6LOUbihQqMSDZVX8ylEi8kOBg7KvK1X%2BqyNPMuhJmGz1Dhxww6GNM%2F9IXkcPtDDxUGJ8hwQ%2Fc%2FBti2HzPUksu8dP1MaoCdc1KqFGWhJx%2FwAsekxDWgToSBuufxGiwiT45oV5VJWvyBUFM0oDxxJEbdC78LGuzXMi7Uzng8UvcL3Mh7YrUwLXndQVKn4JL3vcrQd2QH1pRXkj1MbWXz7jnfOq9%2FW10%2FCDk95%2F8KOpsWD3JEeOx9jraWvGUACA5xpwGMAv7I%2FHliqcxv9qm%2BRBkAwjN%2F7%2BrHmSTafB%2B4f5vAkmxqYdoAEc7nFESx69LMu1Drn35TPeSYDKECSGIuoyPka6buTPpWtJONzZkgnHaFO3tSiJF1tXa1kg3vByaRJv1RVIYDl%2FB0al2Ix%2FViyADG2mJVZ%2BsXjWjTbSIjblf3WrenZvCb%2FocNEiI%2FlGo%2BCu0s8OPLby2BVeTn5JQjH89rZtF%2FtIwBMNf96L4GOqUBH851SK0fpLBEWR2qpt%2F9fYcUmmMLsmL9%2BWmXDDK2pO2Fwh3OKNyiF178JEDW8GE89fDR%2FJQvH%2BRFSHNM6JNCZfEfLuoXFGOjw7xNI4vU5HvVIOeMRmJ6unu4mrlu2YO%2BPSr4hfm6oVbVl9yPiqv7RBKQtJ1vH9dNOs%2BWtrOhjMTOef1RDYdgl1M%2BeVQFCtWNwm2GPFMIFQQnvfUIIql1goNwUGoK&X-Amz-Signature=18eb679604cb4e0a115cbeaa43b0e2071f6b8ba6102bd1a4a1947ca53196ea68&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVMN2BF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmhOPaqDbXv0DGueXmAMxqTShvEcICfadKIMIs7n8zdgIgQKwSndHImUz2bMaLY08rYwiRRlVCpNy%2F473c5Q6DaC4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCP%2BVvUfx3sdAIzlMSrcA%2FNaBG6elT6CnxvKgQCSiZ65ZJSY5JOMeZty%2B1GgXurm%2Bvk8Yhv9ChRZZIz%2BhVeO0MBxExEyxRUzuMOvzHRDzejeMRm4xBs1EZMCQw6XC9AScRgSKjuuCOMwDXqNou137qnLCdOhnfRVeK4P9h%2FTORbNmeB7eB6LOUbihQqMSDZVX8ylEi8kOBg7KvK1X%2BqyNPMuhJmGz1Dhxww6GNM%2F9IXkcPtDDxUGJ8hwQ%2Fc%2FBti2HzPUksu8dP1MaoCdc1KqFGWhJx%2FwAsekxDWgToSBuufxGiwiT45oV5VJWvyBUFM0oDxxJEbdC78LGuzXMi7Uzng8UvcL3Mh7YrUwLXndQVKn4JL3vcrQd2QH1pRXkj1MbWXz7jnfOq9%2FW10%2FCDk95%2F8KOpsWD3JEeOx9jraWvGUACA5xpwGMAv7I%2FHliqcxv9qm%2BRBkAwjN%2F7%2BrHmSTafB%2B4f5vAkmxqYdoAEc7nFESx69LMu1Drn35TPeSYDKECSGIuoyPka6buTPpWtJONzZkgnHaFO3tSiJF1tXa1kg3vByaRJv1RVIYDl%2FB0al2Ix%2FViyADG2mJVZ%2BsXjWjTbSIjblf3WrenZvCb%2FocNEiI%2FlGo%2BCu0s8OPLby2BVeTn5JQjH89rZtF%2FtIwBMNf96L4GOqUBH851SK0fpLBEWR2qpt%2F9fYcUmmMLsmL9%2BWmXDDK2pO2Fwh3OKNyiF178JEDW8GE89fDR%2FJQvH%2BRFSHNM6JNCZfEfLuoXFGOjw7xNI4vU5HvVIOeMRmJ6unu4mrlu2YO%2BPSr4hfm6oVbVl9yPiqv7RBKQtJ1vH9dNOs%2BWtrOhjMTOef1RDYdgl1M%2BeVQFCtWNwm2GPFMIFQQnvfUIIql1goNwUGoK&X-Amz-Signature=350bd483744e5c06c6882e8f9504e713ccd6e8cce9cf98fd2b96ddc08579f8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
