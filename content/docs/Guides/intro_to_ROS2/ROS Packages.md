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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNUDSC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGysbSS742A535GQztwlxTNsOX%2FSyUxYrJRTyHhZHXjMAiBfwiJAk7oMBcnp9KYdmVKHWL2kJ1CWejdb3pxFP%2Fom9Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMF63pKk17%2BUxnun7aKtwD%2B%2FilUkjAm5yJJzIY%2BaifRUoCx8UeTEnmrfRCJw%2F8mcY93LwarMYzbpfFwy4zFSCXx3SRto%2FpA%2F1vVOGDkZpUeAK4v1hzsnvN2iFLFjZkwlNZ38BCwvjONPkURBuXF1p4i4vmYXVmSS9WkUmLAUIjPNDJydq5pvFO6x0%2FpKq8Sjy9PNv7kwAnnRMZIouA2E7pLTFGntl55YJPNnhCIgMRinxrbk%2FFcUPbCH5%2F11DOFZXEvECU2FmviYk248HJDjVsxgUqt5DhEzUK%2F73RSKGjK5gw%2FlpScsyz8NInGhnSLUnNE04S%2FYw7uHCwNDhf783bGkGXS376UDW1xnuf4MvVuTsR81wzk9i6IE%2FEqYBWvRWIFJUEmraNpctaqX%2FJx2LTLjf52Fo9oFrcRqEriwCOsiQYQH9BWWyes2tcYW%2BzJjIg1yLnx8UZUNY41Ebtka6bxCxg2wsmDLYTzEfRmusD6om%2Bonq8ESO%2B3zR4AQQBWkUq2THzN141Zkqd7HEOJnOAE8Cm%2F6XRBnFM0VXZ5V5t0w49GorHRhlo2vJl9ZQJA4XhTbbViFeDJXE84VAM4KGynDGlQh8YckybrBl%2FcGdLE25Ze4Qj8RpyhNVK7XGc72wSEUXxjmUgg23qQ9Ewk%2B7%2FvQY6pgHwZAUxcrXO%2BHpvA8SI6QEIcp66KfLjLZMZ%2Fum%2BNM8gmL3I10wszAnHOPPKqJ6Na6%2F9jXB2Wa2zfzycX04VGgTU3gVhROUh3z%2Buvz%2F%2BelVGBpNIQTbELctQ%2FAqW9a%2FaMA2wFA7%2BLl9aq0k2tvXmkWIR%2BrXRul%2F1QcqGk2Hjlfle8yGChBZeqChCrBYrAyggpISI2uIrLrz%2Fry8k0QaMBT39j8BQV8wQ&X-Amz-Signature=6c81c1a910648e4603f08f53940899df4e8237cc5f2f2690081a6f25fcb1ac14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNUDSC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGysbSS742A535GQztwlxTNsOX%2FSyUxYrJRTyHhZHXjMAiBfwiJAk7oMBcnp9KYdmVKHWL2kJ1CWejdb3pxFP%2Fom9Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMF63pKk17%2BUxnun7aKtwD%2B%2FilUkjAm5yJJzIY%2BaifRUoCx8UeTEnmrfRCJw%2F8mcY93LwarMYzbpfFwy4zFSCXx3SRto%2FpA%2F1vVOGDkZpUeAK4v1hzsnvN2iFLFjZkwlNZ38BCwvjONPkURBuXF1p4i4vmYXVmSS9WkUmLAUIjPNDJydq5pvFO6x0%2FpKq8Sjy9PNv7kwAnnRMZIouA2E7pLTFGntl55YJPNnhCIgMRinxrbk%2FFcUPbCH5%2F11DOFZXEvECU2FmviYk248HJDjVsxgUqt5DhEzUK%2F73RSKGjK5gw%2FlpScsyz8NInGhnSLUnNE04S%2FYw7uHCwNDhf783bGkGXS376UDW1xnuf4MvVuTsR81wzk9i6IE%2FEqYBWvRWIFJUEmraNpctaqX%2FJx2LTLjf52Fo9oFrcRqEriwCOsiQYQH9BWWyes2tcYW%2BzJjIg1yLnx8UZUNY41Ebtka6bxCxg2wsmDLYTzEfRmusD6om%2Bonq8ESO%2B3zR4AQQBWkUq2THzN141Zkqd7HEOJnOAE8Cm%2F6XRBnFM0VXZ5V5t0w49GorHRhlo2vJl9ZQJA4XhTbbViFeDJXE84VAM4KGynDGlQh8YckybrBl%2FcGdLE25Ze4Qj8RpyhNVK7XGc72wSEUXxjmUgg23qQ9Ewk%2B7%2FvQY6pgHwZAUxcrXO%2BHpvA8SI6QEIcp66KfLjLZMZ%2Fum%2BNM8gmL3I10wszAnHOPPKqJ6Na6%2F9jXB2Wa2zfzycX04VGgTU3gVhROUh3z%2Buvz%2F%2BelVGBpNIQTbELctQ%2FAqW9a%2FaMA2wFA7%2BLl9aq0k2tvXmkWIR%2BrXRul%2F1QcqGk2Hjlfle8yGChBZeqChCrBYrAyggpISI2uIrLrz%2Fry8k0QaMBT39j8BQV8wQ&X-Amz-Signature=a4c62d3a190bccde1ce138e76d3689011870becfa28bb42a5c3c733e0f0aee38&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNUDSC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGysbSS742A535GQztwlxTNsOX%2FSyUxYrJRTyHhZHXjMAiBfwiJAk7oMBcnp9KYdmVKHWL2kJ1CWejdb3pxFP%2Fom9Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMF63pKk17%2BUxnun7aKtwD%2B%2FilUkjAm5yJJzIY%2BaifRUoCx8UeTEnmrfRCJw%2F8mcY93LwarMYzbpfFwy4zFSCXx3SRto%2FpA%2F1vVOGDkZpUeAK4v1hzsnvN2iFLFjZkwlNZ38BCwvjONPkURBuXF1p4i4vmYXVmSS9WkUmLAUIjPNDJydq5pvFO6x0%2FpKq8Sjy9PNv7kwAnnRMZIouA2E7pLTFGntl55YJPNnhCIgMRinxrbk%2FFcUPbCH5%2F11DOFZXEvECU2FmviYk248HJDjVsxgUqt5DhEzUK%2F73RSKGjK5gw%2FlpScsyz8NInGhnSLUnNE04S%2FYw7uHCwNDhf783bGkGXS376UDW1xnuf4MvVuTsR81wzk9i6IE%2FEqYBWvRWIFJUEmraNpctaqX%2FJx2LTLjf52Fo9oFrcRqEriwCOsiQYQH9BWWyes2tcYW%2BzJjIg1yLnx8UZUNY41Ebtka6bxCxg2wsmDLYTzEfRmusD6om%2Bonq8ESO%2B3zR4AQQBWkUq2THzN141Zkqd7HEOJnOAE8Cm%2F6XRBnFM0VXZ5V5t0w49GorHRhlo2vJl9ZQJA4XhTbbViFeDJXE84VAM4KGynDGlQh8YckybrBl%2FcGdLE25Ze4Qj8RpyhNVK7XGc72wSEUXxjmUgg23qQ9Ewk%2B7%2FvQY6pgHwZAUxcrXO%2BHpvA8SI6QEIcp66KfLjLZMZ%2Fum%2BNM8gmL3I10wszAnHOPPKqJ6Na6%2F9jXB2Wa2zfzycX04VGgTU3gVhROUh3z%2Buvz%2F%2BelVGBpNIQTbELctQ%2FAqW9a%2FaMA2wFA7%2BLl9aq0k2tvXmkWIR%2BrXRul%2F1QcqGk2Hjlfle8yGChBZeqChCrBYrAyggpISI2uIrLrz%2Fry8k0QaMBT39j8BQV8wQ&X-Amz-Signature=fc5f107373aca0e21218c7505f591959974ef003e58b49a5e5fe314c6746efe2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNUDSC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGysbSS742A535GQztwlxTNsOX%2FSyUxYrJRTyHhZHXjMAiBfwiJAk7oMBcnp9KYdmVKHWL2kJ1CWejdb3pxFP%2Fom9Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMF63pKk17%2BUxnun7aKtwD%2B%2FilUkjAm5yJJzIY%2BaifRUoCx8UeTEnmrfRCJw%2F8mcY93LwarMYzbpfFwy4zFSCXx3SRto%2FpA%2F1vVOGDkZpUeAK4v1hzsnvN2iFLFjZkwlNZ38BCwvjONPkURBuXF1p4i4vmYXVmSS9WkUmLAUIjPNDJydq5pvFO6x0%2FpKq8Sjy9PNv7kwAnnRMZIouA2E7pLTFGntl55YJPNnhCIgMRinxrbk%2FFcUPbCH5%2F11DOFZXEvECU2FmviYk248HJDjVsxgUqt5DhEzUK%2F73RSKGjK5gw%2FlpScsyz8NInGhnSLUnNE04S%2FYw7uHCwNDhf783bGkGXS376UDW1xnuf4MvVuTsR81wzk9i6IE%2FEqYBWvRWIFJUEmraNpctaqX%2FJx2LTLjf52Fo9oFrcRqEriwCOsiQYQH9BWWyes2tcYW%2BzJjIg1yLnx8UZUNY41Ebtka6bxCxg2wsmDLYTzEfRmusD6om%2Bonq8ESO%2B3zR4AQQBWkUq2THzN141Zkqd7HEOJnOAE8Cm%2F6XRBnFM0VXZ5V5t0w49GorHRhlo2vJl9ZQJA4XhTbbViFeDJXE84VAM4KGynDGlQh8YckybrBl%2FcGdLE25Ze4Qj8RpyhNVK7XGc72wSEUXxjmUgg23qQ9Ewk%2B7%2FvQY6pgHwZAUxcrXO%2BHpvA8SI6QEIcp66KfLjLZMZ%2Fum%2BNM8gmL3I10wszAnHOPPKqJ6Na6%2F9jXB2Wa2zfzycX04VGgTU3gVhROUh3z%2Buvz%2F%2BelVGBpNIQTbELctQ%2FAqW9a%2FaMA2wFA7%2BLl9aq0k2tvXmkWIR%2BrXRul%2F1QcqGk2Hjlfle8yGChBZeqChCrBYrAyggpISI2uIrLrz%2Fry8k0QaMBT39j8BQV8wQ&X-Amz-Signature=44e93069c6f2e394d1750326fba9d405e39a0faf9c7a9d4dc8ddf99a287d30a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNUDSC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGysbSS742A535GQztwlxTNsOX%2FSyUxYrJRTyHhZHXjMAiBfwiJAk7oMBcnp9KYdmVKHWL2kJ1CWejdb3pxFP%2Fom9Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMF63pKk17%2BUxnun7aKtwD%2B%2FilUkjAm5yJJzIY%2BaifRUoCx8UeTEnmrfRCJw%2F8mcY93LwarMYzbpfFwy4zFSCXx3SRto%2FpA%2F1vVOGDkZpUeAK4v1hzsnvN2iFLFjZkwlNZ38BCwvjONPkURBuXF1p4i4vmYXVmSS9WkUmLAUIjPNDJydq5pvFO6x0%2FpKq8Sjy9PNv7kwAnnRMZIouA2E7pLTFGntl55YJPNnhCIgMRinxrbk%2FFcUPbCH5%2F11DOFZXEvECU2FmviYk248HJDjVsxgUqt5DhEzUK%2F73RSKGjK5gw%2FlpScsyz8NInGhnSLUnNE04S%2FYw7uHCwNDhf783bGkGXS376UDW1xnuf4MvVuTsR81wzk9i6IE%2FEqYBWvRWIFJUEmraNpctaqX%2FJx2LTLjf52Fo9oFrcRqEriwCOsiQYQH9BWWyes2tcYW%2BzJjIg1yLnx8UZUNY41Ebtka6bxCxg2wsmDLYTzEfRmusD6om%2Bonq8ESO%2B3zR4AQQBWkUq2THzN141Zkqd7HEOJnOAE8Cm%2F6XRBnFM0VXZ5V5t0w49GorHRhlo2vJl9ZQJA4XhTbbViFeDJXE84VAM4KGynDGlQh8YckybrBl%2FcGdLE25Ze4Qj8RpyhNVK7XGc72wSEUXxjmUgg23qQ9Ewk%2B7%2FvQY6pgHwZAUxcrXO%2BHpvA8SI6QEIcp66KfLjLZMZ%2Fum%2BNM8gmL3I10wszAnHOPPKqJ6Na6%2F9jXB2Wa2zfzycX04VGgTU3gVhROUh3z%2Buvz%2F%2BelVGBpNIQTbELctQ%2FAqW9a%2FaMA2wFA7%2BLl9aq0k2tvXmkWIR%2BrXRul%2F1QcqGk2Hjlfle8yGChBZeqChCrBYrAyggpISI2uIrLrz%2Fry8k0QaMBT39j8BQV8wQ&X-Amz-Signature=13ff3a2fbac125f06fc7351be90dbef1170374e6ffb923f3d57c6faefc7639e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNUDSC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGysbSS742A535GQztwlxTNsOX%2FSyUxYrJRTyHhZHXjMAiBfwiJAk7oMBcnp9KYdmVKHWL2kJ1CWejdb3pxFP%2Fom9Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMF63pKk17%2BUxnun7aKtwD%2B%2FilUkjAm5yJJzIY%2BaifRUoCx8UeTEnmrfRCJw%2F8mcY93LwarMYzbpfFwy4zFSCXx3SRto%2FpA%2F1vVOGDkZpUeAK4v1hzsnvN2iFLFjZkwlNZ38BCwvjONPkURBuXF1p4i4vmYXVmSS9WkUmLAUIjPNDJydq5pvFO6x0%2FpKq8Sjy9PNv7kwAnnRMZIouA2E7pLTFGntl55YJPNnhCIgMRinxrbk%2FFcUPbCH5%2F11DOFZXEvECU2FmviYk248HJDjVsxgUqt5DhEzUK%2F73RSKGjK5gw%2FlpScsyz8NInGhnSLUnNE04S%2FYw7uHCwNDhf783bGkGXS376UDW1xnuf4MvVuTsR81wzk9i6IE%2FEqYBWvRWIFJUEmraNpctaqX%2FJx2LTLjf52Fo9oFrcRqEriwCOsiQYQH9BWWyes2tcYW%2BzJjIg1yLnx8UZUNY41Ebtka6bxCxg2wsmDLYTzEfRmusD6om%2Bonq8ESO%2B3zR4AQQBWkUq2THzN141Zkqd7HEOJnOAE8Cm%2F6XRBnFM0VXZ5V5t0w49GorHRhlo2vJl9ZQJA4XhTbbViFeDJXE84VAM4KGynDGlQh8YckybrBl%2FcGdLE25Ze4Qj8RpyhNVK7XGc72wSEUXxjmUgg23qQ9Ewk%2B7%2FvQY6pgHwZAUxcrXO%2BHpvA8SI6QEIcp66KfLjLZMZ%2Fum%2BNM8gmL3I10wszAnHOPPKqJ6Na6%2F9jXB2Wa2zfzycX04VGgTU3gVhROUh3z%2Buvz%2F%2BelVGBpNIQTbELctQ%2FAqW9a%2FaMA2wFA7%2BLl9aq0k2tvXmkWIR%2BrXRul%2F1QcqGk2Hjlfle8yGChBZeqChCrBYrAyggpISI2uIrLrz%2Fry8k0QaMBT39j8BQV8wQ&X-Amz-Signature=4abc083b31adaf52e3daf873bfb5dee37ea1f18ce89c1d99be2abd472b05302d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNUDSC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGysbSS742A535GQztwlxTNsOX%2FSyUxYrJRTyHhZHXjMAiBfwiJAk7oMBcnp9KYdmVKHWL2kJ1CWejdb3pxFP%2Fom9Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMF63pKk17%2BUxnun7aKtwD%2B%2FilUkjAm5yJJzIY%2BaifRUoCx8UeTEnmrfRCJw%2F8mcY93LwarMYzbpfFwy4zFSCXx3SRto%2FpA%2F1vVOGDkZpUeAK4v1hzsnvN2iFLFjZkwlNZ38BCwvjONPkURBuXF1p4i4vmYXVmSS9WkUmLAUIjPNDJydq5pvFO6x0%2FpKq8Sjy9PNv7kwAnnRMZIouA2E7pLTFGntl55YJPNnhCIgMRinxrbk%2FFcUPbCH5%2F11DOFZXEvECU2FmviYk248HJDjVsxgUqt5DhEzUK%2F73RSKGjK5gw%2FlpScsyz8NInGhnSLUnNE04S%2FYw7uHCwNDhf783bGkGXS376UDW1xnuf4MvVuTsR81wzk9i6IE%2FEqYBWvRWIFJUEmraNpctaqX%2FJx2LTLjf52Fo9oFrcRqEriwCOsiQYQH9BWWyes2tcYW%2BzJjIg1yLnx8UZUNY41Ebtka6bxCxg2wsmDLYTzEfRmusD6om%2Bonq8ESO%2B3zR4AQQBWkUq2THzN141Zkqd7HEOJnOAE8Cm%2F6XRBnFM0VXZ5V5t0w49GorHRhlo2vJl9ZQJA4XhTbbViFeDJXE84VAM4KGynDGlQh8YckybrBl%2FcGdLE25Ze4Qj8RpyhNVK7XGc72wSEUXxjmUgg23qQ9Ewk%2B7%2FvQY6pgHwZAUxcrXO%2BHpvA8SI6QEIcp66KfLjLZMZ%2Fum%2BNM8gmL3I10wszAnHOPPKqJ6Na6%2F9jXB2Wa2zfzycX04VGgTU3gVhROUh3z%2Buvz%2F%2BelVGBpNIQTbELctQ%2FAqW9a%2FaMA2wFA7%2BLl9aq0k2tvXmkWIR%2BrXRul%2F1QcqGk2Hjlfle8yGChBZeqChCrBYrAyggpISI2uIrLrz%2Fry8k0QaMBT39j8BQV8wQ&X-Amz-Signature=d8be5f05629e274d3c77d8454417156230debd217cdfa056cc1b8ed35d86df4e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
