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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R57BZOU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDqVxIbEw34oHTFXW5IzawOXJNqV4kASw9VR4e9LuQwIhANXDmxmqD3IX4dSGk8UmZfsTUU%2B6TWy7HhPa1uwYih0RKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMefErzxlsHgA%2Fyysq3AOuUCxjriPZynN6b3FGwA5pbEnf2ooHL2ml7KCOQI9C7EstUGF7mHu889gzoafpuQSCLIII0KUG0WmJr3Vgjt6FNTUFp2%2FrmFqlsMe%2BuHtdp2c0ormeccdKiYYVQtulkE2eWl7wdUi2N3bH2c68N04nzYQec8LkfDrRo7O0Rpuc5HV4uGLTJ203X%2B%2BiMNKBo1Pyl9OvRX6PR%2Bd2fTYh%2F5H3eihfEhG9FcdPVuUrJfVJZ2DSIaJb%2F8ERNswuxq1NfPA1DEo6ykFVY3NZg7P38jasRELV4Eps9gvxxzANDDVLBl5upDsLp2I0ZNEgozIdd1x6xZPL1T2YRuFGlLw4IaCWh7wx0MhfMp05kWquMfvZpJpo0ION2Mz811Yspu3rBa60RzmfCHBroyJpsuWM1iSURwVQH%2BE5i0%2BA5MAS%2FX8M%2B8CMOtaj4u2TVb0X0%2F9hn5cQF8HcyslU8G7O1BgTK%2BLsgiGEVqwHC3DtXdBMEKi%2FuTPZk6BFhvStcjCdgiEZU1QyHqzqswcajixmhTVf2CBqwA5fcJL%2FDxLv1qD4hwU7jXRf%2B2wJbfEcufyd%2BM6mGDLSuoAwyoI8cZh7%2F030dAshgpXc%2Fp11tLDBVGN1eyz5%2F8TqtCOAHOZZHbkEBTCI96S%2BBjqkAdx5hzBSC7lRMfoHabHHHuge96xEidYVhasc%2B3Uoa%2F9Ta0m82hNim4Y371a9Nf0SPFSw0NxTajaC8XmrlLdQSg3xwsFTaLRY%2BiQrlUQUY1Z40iO6vj97HTTEF77IyIEOM7tvLHZPYf9mITkJ1%2Fgw3cVmCoc0jBmLdyQAMF2%2BmbuUykdKAzCiszabrnjwB9SpFf%2FsfIlUGgNTlJYNqwl%2BT2jwtc9Y&X-Amz-Signature=9e334da77eaf14c404286bc3533e07237eadd40ff58224ccf66fd0b178b558ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R57BZOU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDqVxIbEw34oHTFXW5IzawOXJNqV4kASw9VR4e9LuQwIhANXDmxmqD3IX4dSGk8UmZfsTUU%2B6TWy7HhPa1uwYih0RKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMefErzxlsHgA%2Fyysq3AOuUCxjriPZynN6b3FGwA5pbEnf2ooHL2ml7KCOQI9C7EstUGF7mHu889gzoafpuQSCLIII0KUG0WmJr3Vgjt6FNTUFp2%2FrmFqlsMe%2BuHtdp2c0ormeccdKiYYVQtulkE2eWl7wdUi2N3bH2c68N04nzYQec8LkfDrRo7O0Rpuc5HV4uGLTJ203X%2B%2BiMNKBo1Pyl9OvRX6PR%2Bd2fTYh%2F5H3eihfEhG9FcdPVuUrJfVJZ2DSIaJb%2F8ERNswuxq1NfPA1DEo6ykFVY3NZg7P38jasRELV4Eps9gvxxzANDDVLBl5upDsLp2I0ZNEgozIdd1x6xZPL1T2YRuFGlLw4IaCWh7wx0MhfMp05kWquMfvZpJpo0ION2Mz811Yspu3rBa60RzmfCHBroyJpsuWM1iSURwVQH%2BE5i0%2BA5MAS%2FX8M%2B8CMOtaj4u2TVb0X0%2F9hn5cQF8HcyslU8G7O1BgTK%2BLsgiGEVqwHC3DtXdBMEKi%2FuTPZk6BFhvStcjCdgiEZU1QyHqzqswcajixmhTVf2CBqwA5fcJL%2FDxLv1qD4hwU7jXRf%2B2wJbfEcufyd%2BM6mGDLSuoAwyoI8cZh7%2F030dAshgpXc%2Fp11tLDBVGN1eyz5%2F8TqtCOAHOZZHbkEBTCI96S%2BBjqkAdx5hzBSC7lRMfoHabHHHuge96xEidYVhasc%2B3Uoa%2F9Ta0m82hNim4Y371a9Nf0SPFSw0NxTajaC8XmrlLdQSg3xwsFTaLRY%2BiQrlUQUY1Z40iO6vj97HTTEF77IyIEOM7tvLHZPYf9mITkJ1%2Fgw3cVmCoc0jBmLdyQAMF2%2BmbuUykdKAzCiszabrnjwB9SpFf%2FsfIlUGgNTlJYNqwl%2BT2jwtc9Y&X-Amz-Signature=c51be97cb4cd938b3800013af67f52f99ea540e6a6b7895f48d9a8560352aae6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R57BZOU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDqVxIbEw34oHTFXW5IzawOXJNqV4kASw9VR4e9LuQwIhANXDmxmqD3IX4dSGk8UmZfsTUU%2B6TWy7HhPa1uwYih0RKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMefErzxlsHgA%2Fyysq3AOuUCxjriPZynN6b3FGwA5pbEnf2ooHL2ml7KCOQI9C7EstUGF7mHu889gzoafpuQSCLIII0KUG0WmJr3Vgjt6FNTUFp2%2FrmFqlsMe%2BuHtdp2c0ormeccdKiYYVQtulkE2eWl7wdUi2N3bH2c68N04nzYQec8LkfDrRo7O0Rpuc5HV4uGLTJ203X%2B%2BiMNKBo1Pyl9OvRX6PR%2Bd2fTYh%2F5H3eihfEhG9FcdPVuUrJfVJZ2DSIaJb%2F8ERNswuxq1NfPA1DEo6ykFVY3NZg7P38jasRELV4Eps9gvxxzANDDVLBl5upDsLp2I0ZNEgozIdd1x6xZPL1T2YRuFGlLw4IaCWh7wx0MhfMp05kWquMfvZpJpo0ION2Mz811Yspu3rBa60RzmfCHBroyJpsuWM1iSURwVQH%2BE5i0%2BA5MAS%2FX8M%2B8CMOtaj4u2TVb0X0%2F9hn5cQF8HcyslU8G7O1BgTK%2BLsgiGEVqwHC3DtXdBMEKi%2FuTPZk6BFhvStcjCdgiEZU1QyHqzqswcajixmhTVf2CBqwA5fcJL%2FDxLv1qD4hwU7jXRf%2B2wJbfEcufyd%2BM6mGDLSuoAwyoI8cZh7%2F030dAshgpXc%2Fp11tLDBVGN1eyz5%2F8TqtCOAHOZZHbkEBTCI96S%2BBjqkAdx5hzBSC7lRMfoHabHHHuge96xEidYVhasc%2B3Uoa%2F9Ta0m82hNim4Y371a9Nf0SPFSw0NxTajaC8XmrlLdQSg3xwsFTaLRY%2BiQrlUQUY1Z40iO6vj97HTTEF77IyIEOM7tvLHZPYf9mITkJ1%2Fgw3cVmCoc0jBmLdyQAMF2%2BmbuUykdKAzCiszabrnjwB9SpFf%2FsfIlUGgNTlJYNqwl%2BT2jwtc9Y&X-Amz-Signature=1bc9ec4f095cdf9132220f867a0d5e36907ffac83b7bd9406cdd290a110481b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R57BZOU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDqVxIbEw34oHTFXW5IzawOXJNqV4kASw9VR4e9LuQwIhANXDmxmqD3IX4dSGk8UmZfsTUU%2B6TWy7HhPa1uwYih0RKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMefErzxlsHgA%2Fyysq3AOuUCxjriPZynN6b3FGwA5pbEnf2ooHL2ml7KCOQI9C7EstUGF7mHu889gzoafpuQSCLIII0KUG0WmJr3Vgjt6FNTUFp2%2FrmFqlsMe%2BuHtdp2c0ormeccdKiYYVQtulkE2eWl7wdUi2N3bH2c68N04nzYQec8LkfDrRo7O0Rpuc5HV4uGLTJ203X%2B%2BiMNKBo1Pyl9OvRX6PR%2Bd2fTYh%2F5H3eihfEhG9FcdPVuUrJfVJZ2DSIaJb%2F8ERNswuxq1NfPA1DEo6ykFVY3NZg7P38jasRELV4Eps9gvxxzANDDVLBl5upDsLp2I0ZNEgozIdd1x6xZPL1T2YRuFGlLw4IaCWh7wx0MhfMp05kWquMfvZpJpo0ION2Mz811Yspu3rBa60RzmfCHBroyJpsuWM1iSURwVQH%2BE5i0%2BA5MAS%2FX8M%2B8CMOtaj4u2TVb0X0%2F9hn5cQF8HcyslU8G7O1BgTK%2BLsgiGEVqwHC3DtXdBMEKi%2FuTPZk6BFhvStcjCdgiEZU1QyHqzqswcajixmhTVf2CBqwA5fcJL%2FDxLv1qD4hwU7jXRf%2B2wJbfEcufyd%2BM6mGDLSuoAwyoI8cZh7%2F030dAshgpXc%2Fp11tLDBVGN1eyz5%2F8TqtCOAHOZZHbkEBTCI96S%2BBjqkAdx5hzBSC7lRMfoHabHHHuge96xEidYVhasc%2B3Uoa%2F9Ta0m82hNim4Y371a9Nf0SPFSw0NxTajaC8XmrlLdQSg3xwsFTaLRY%2BiQrlUQUY1Z40iO6vj97HTTEF77IyIEOM7tvLHZPYf9mITkJ1%2Fgw3cVmCoc0jBmLdyQAMF2%2BmbuUykdKAzCiszabrnjwB9SpFf%2FsfIlUGgNTlJYNqwl%2BT2jwtc9Y&X-Amz-Signature=90b43ca527c5a5804a0f37f9e7412f41634b4ea46398a79c26a03c2c6ddca7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R57BZOU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDqVxIbEw34oHTFXW5IzawOXJNqV4kASw9VR4e9LuQwIhANXDmxmqD3IX4dSGk8UmZfsTUU%2B6TWy7HhPa1uwYih0RKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMefErzxlsHgA%2Fyysq3AOuUCxjriPZynN6b3FGwA5pbEnf2ooHL2ml7KCOQI9C7EstUGF7mHu889gzoafpuQSCLIII0KUG0WmJr3Vgjt6FNTUFp2%2FrmFqlsMe%2BuHtdp2c0ormeccdKiYYVQtulkE2eWl7wdUi2N3bH2c68N04nzYQec8LkfDrRo7O0Rpuc5HV4uGLTJ203X%2B%2BiMNKBo1Pyl9OvRX6PR%2Bd2fTYh%2F5H3eihfEhG9FcdPVuUrJfVJZ2DSIaJb%2F8ERNswuxq1NfPA1DEo6ykFVY3NZg7P38jasRELV4Eps9gvxxzANDDVLBl5upDsLp2I0ZNEgozIdd1x6xZPL1T2YRuFGlLw4IaCWh7wx0MhfMp05kWquMfvZpJpo0ION2Mz811Yspu3rBa60RzmfCHBroyJpsuWM1iSURwVQH%2BE5i0%2BA5MAS%2FX8M%2B8CMOtaj4u2TVb0X0%2F9hn5cQF8HcyslU8G7O1BgTK%2BLsgiGEVqwHC3DtXdBMEKi%2FuTPZk6BFhvStcjCdgiEZU1QyHqzqswcajixmhTVf2CBqwA5fcJL%2FDxLv1qD4hwU7jXRf%2B2wJbfEcufyd%2BM6mGDLSuoAwyoI8cZh7%2F030dAshgpXc%2Fp11tLDBVGN1eyz5%2F8TqtCOAHOZZHbkEBTCI96S%2BBjqkAdx5hzBSC7lRMfoHabHHHuge96xEidYVhasc%2B3Uoa%2F9Ta0m82hNim4Y371a9Nf0SPFSw0NxTajaC8XmrlLdQSg3xwsFTaLRY%2BiQrlUQUY1Z40iO6vj97HTTEF77IyIEOM7tvLHZPYf9mITkJ1%2Fgw3cVmCoc0jBmLdyQAMF2%2BmbuUykdKAzCiszabrnjwB9SpFf%2FsfIlUGgNTlJYNqwl%2BT2jwtc9Y&X-Amz-Signature=0c210a7e33969696182178a14206bd2ba900ae58b392fbb2e624ba21467fe044&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R57BZOU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDqVxIbEw34oHTFXW5IzawOXJNqV4kASw9VR4e9LuQwIhANXDmxmqD3IX4dSGk8UmZfsTUU%2B6TWy7HhPa1uwYih0RKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMefErzxlsHgA%2Fyysq3AOuUCxjriPZynN6b3FGwA5pbEnf2ooHL2ml7KCOQI9C7EstUGF7mHu889gzoafpuQSCLIII0KUG0WmJr3Vgjt6FNTUFp2%2FrmFqlsMe%2BuHtdp2c0ormeccdKiYYVQtulkE2eWl7wdUi2N3bH2c68N04nzYQec8LkfDrRo7O0Rpuc5HV4uGLTJ203X%2B%2BiMNKBo1Pyl9OvRX6PR%2Bd2fTYh%2F5H3eihfEhG9FcdPVuUrJfVJZ2DSIaJb%2F8ERNswuxq1NfPA1DEo6ykFVY3NZg7P38jasRELV4Eps9gvxxzANDDVLBl5upDsLp2I0ZNEgozIdd1x6xZPL1T2YRuFGlLw4IaCWh7wx0MhfMp05kWquMfvZpJpo0ION2Mz811Yspu3rBa60RzmfCHBroyJpsuWM1iSURwVQH%2BE5i0%2BA5MAS%2FX8M%2B8CMOtaj4u2TVb0X0%2F9hn5cQF8HcyslU8G7O1BgTK%2BLsgiGEVqwHC3DtXdBMEKi%2FuTPZk6BFhvStcjCdgiEZU1QyHqzqswcajixmhTVf2CBqwA5fcJL%2FDxLv1qD4hwU7jXRf%2B2wJbfEcufyd%2BM6mGDLSuoAwyoI8cZh7%2F030dAshgpXc%2Fp11tLDBVGN1eyz5%2F8TqtCOAHOZZHbkEBTCI96S%2BBjqkAdx5hzBSC7lRMfoHabHHHuge96xEidYVhasc%2B3Uoa%2F9Ta0m82hNim4Y371a9Nf0SPFSw0NxTajaC8XmrlLdQSg3xwsFTaLRY%2BiQrlUQUY1Z40iO6vj97HTTEF77IyIEOM7tvLHZPYf9mITkJ1%2Fgw3cVmCoc0jBmLdyQAMF2%2BmbuUykdKAzCiszabrnjwB9SpFf%2FsfIlUGgNTlJYNqwl%2BT2jwtc9Y&X-Amz-Signature=97dfef4450319da1c80ee6cc0469f6ef8fc4cd749631368438dbc8dc430988f4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R57BZOU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDqVxIbEw34oHTFXW5IzawOXJNqV4kASw9VR4e9LuQwIhANXDmxmqD3IX4dSGk8UmZfsTUU%2B6TWy7HhPa1uwYih0RKv8DCCcQABoMNjM3NDIzMTgzODA1IgwMefErzxlsHgA%2Fyysq3AOuUCxjriPZynN6b3FGwA5pbEnf2ooHL2ml7KCOQI9C7EstUGF7mHu889gzoafpuQSCLIII0KUG0WmJr3Vgjt6FNTUFp2%2FrmFqlsMe%2BuHtdp2c0ormeccdKiYYVQtulkE2eWl7wdUi2N3bH2c68N04nzYQec8LkfDrRo7O0Rpuc5HV4uGLTJ203X%2B%2BiMNKBo1Pyl9OvRX6PR%2Bd2fTYh%2F5H3eihfEhG9FcdPVuUrJfVJZ2DSIaJb%2F8ERNswuxq1NfPA1DEo6ykFVY3NZg7P38jasRELV4Eps9gvxxzANDDVLBl5upDsLp2I0ZNEgozIdd1x6xZPL1T2YRuFGlLw4IaCWh7wx0MhfMp05kWquMfvZpJpo0ION2Mz811Yspu3rBa60RzmfCHBroyJpsuWM1iSURwVQH%2BE5i0%2BA5MAS%2FX8M%2B8CMOtaj4u2TVb0X0%2F9hn5cQF8HcyslU8G7O1BgTK%2BLsgiGEVqwHC3DtXdBMEKi%2FuTPZk6BFhvStcjCdgiEZU1QyHqzqswcajixmhTVf2CBqwA5fcJL%2FDxLv1qD4hwU7jXRf%2B2wJbfEcufyd%2BM6mGDLSuoAwyoI8cZh7%2F030dAshgpXc%2Fp11tLDBVGN1eyz5%2F8TqtCOAHOZZHbkEBTCI96S%2BBjqkAdx5hzBSC7lRMfoHabHHHuge96xEidYVhasc%2B3Uoa%2F9Ta0m82hNim4Y371a9Nf0SPFSw0NxTajaC8XmrlLdQSg3xwsFTaLRY%2BiQrlUQUY1Z40iO6vj97HTTEF77IyIEOM7tvLHZPYf9mITkJ1%2Fgw3cVmCoc0jBmLdyQAMF2%2BmbuUykdKAzCiszabrnjwB9SpFf%2FsfIlUGgNTlJYNqwl%2BT2jwtc9Y&X-Amz-Signature=3b32e81ec386a3bf7fe4a2234644be34b20e937819249d724bf850c6962ad0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
