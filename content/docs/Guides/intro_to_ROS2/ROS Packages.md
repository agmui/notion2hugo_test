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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOO7EHK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICnncTgFadNee90q9JxS5q4fqlmpfdDYmANfycrSjAUNAiEA%2FhSN5WDL0CjbNEcV7Oq3GwulZvXQAHtjSk3Ywho8jooq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGbJiah4ePFKuGOGpyrcA0N7qeYn5gYuAVK%2F3MOppMQ941xYzNxUUQkoAc3Zns2I%2Bff4l2Rf2%2F%2F5sI3fMTNsx4PZ19K8Xv7Xj5cCB0FfA4O7MoWlBfkyIWGiTZVK%2BkhCda83%2Fiu9bfJ5Op0h8Z8E3Lrhh6pXF2R4BYyWONjYSOThyU%2FyBsOu%2FGOdosAa5cWGqzc51ZpDVOIryRHP1CP97eXn%2FNMItMGIAZN0ECIto5QiY4e%2BAyu7TyebyAqCgQeOu%2F6s1g2fSnCzs9qt0lhbjubgtieZAq4iXu1tJ0gzWVUNsdrhgP1QLN7GJXhh9jhONoVfLHfCUhjDI2rRv4gvWhwmEAamI0Uqr8W1gozoFc1l1pYNBwJC1pGH%2BLbs2x7M5k1rLG%2FkGIpu%2F53SfZoVBmEmhSfUTKpmqLau5Cii%2BcsYtVU7acoXRua6k0XTE32kWmcSW66RJ%2B0rdiH7GTHAbo%2BwZ2axmWKWU80kB1g%2FWP5W7iheHlKQagGF5Rpp2wJPIfIXYOWhOIMPNYXyNAwgBQ9GjcLjBRIuFuho%2Bej1goQlyC%2FkQq5zu25N5BsSb3KJW%2B2WKtCUB1X2Q86SL67wQ5NLJPWs1TBvyozRhipASxASwbwN9UQ0i7jQI9u8cnUD54M3U8v4uWiRUQtyMNGiib0GOqUBlujwU1I%2FaTKY76ZdXXZNXDw6ayxx8xSYNwEEusU4uvY%2B4TnpTfpuy4f1pIiWpYIVaO8YDFRXlxKJUC4%2Bopbm8j1I8egWNDJ52UUxbZUSnRLfY4AfVgc%2F9eUbzG7XC9VUs15RFOn2fwjPjE%2BuljrJ4uI0715EURwAMI5BN%2BiKzHQ1z6iEgubbsklhGpXATkezpwd3A9Bpc0es4iOXFsEJw1sWer%2FG&X-Amz-Signature=01c9a968536928d792e898e5c427e78c030ca4708a0aa226b98cc1a8c50a72b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOO7EHK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICnncTgFadNee90q9JxS5q4fqlmpfdDYmANfycrSjAUNAiEA%2FhSN5WDL0CjbNEcV7Oq3GwulZvXQAHtjSk3Ywho8jooq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGbJiah4ePFKuGOGpyrcA0N7qeYn5gYuAVK%2F3MOppMQ941xYzNxUUQkoAc3Zns2I%2Bff4l2Rf2%2F%2F5sI3fMTNsx4PZ19K8Xv7Xj5cCB0FfA4O7MoWlBfkyIWGiTZVK%2BkhCda83%2Fiu9bfJ5Op0h8Z8E3Lrhh6pXF2R4BYyWONjYSOThyU%2FyBsOu%2FGOdosAa5cWGqzc51ZpDVOIryRHP1CP97eXn%2FNMItMGIAZN0ECIto5QiY4e%2BAyu7TyebyAqCgQeOu%2F6s1g2fSnCzs9qt0lhbjubgtieZAq4iXu1tJ0gzWVUNsdrhgP1QLN7GJXhh9jhONoVfLHfCUhjDI2rRv4gvWhwmEAamI0Uqr8W1gozoFc1l1pYNBwJC1pGH%2BLbs2x7M5k1rLG%2FkGIpu%2F53SfZoVBmEmhSfUTKpmqLau5Cii%2BcsYtVU7acoXRua6k0XTE32kWmcSW66RJ%2B0rdiH7GTHAbo%2BwZ2axmWKWU80kB1g%2FWP5W7iheHlKQagGF5Rpp2wJPIfIXYOWhOIMPNYXyNAwgBQ9GjcLjBRIuFuho%2Bej1goQlyC%2FkQq5zu25N5BsSb3KJW%2B2WKtCUB1X2Q86SL67wQ5NLJPWs1TBvyozRhipASxASwbwN9UQ0i7jQI9u8cnUD54M3U8v4uWiRUQtyMNGiib0GOqUBlujwU1I%2FaTKY76ZdXXZNXDw6ayxx8xSYNwEEusU4uvY%2B4TnpTfpuy4f1pIiWpYIVaO8YDFRXlxKJUC4%2Bopbm8j1I8egWNDJ52UUxbZUSnRLfY4AfVgc%2F9eUbzG7XC9VUs15RFOn2fwjPjE%2BuljrJ4uI0715EURwAMI5BN%2BiKzHQ1z6iEgubbsklhGpXATkezpwd3A9Bpc0es4iOXFsEJw1sWer%2FG&X-Amz-Signature=1a683157af25f8677fe366d99ec072ab6279f5df84cf09e595e4501b23ac6248&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOO7EHK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICnncTgFadNee90q9JxS5q4fqlmpfdDYmANfycrSjAUNAiEA%2FhSN5WDL0CjbNEcV7Oq3GwulZvXQAHtjSk3Ywho8jooq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGbJiah4ePFKuGOGpyrcA0N7qeYn5gYuAVK%2F3MOppMQ941xYzNxUUQkoAc3Zns2I%2Bff4l2Rf2%2F%2F5sI3fMTNsx4PZ19K8Xv7Xj5cCB0FfA4O7MoWlBfkyIWGiTZVK%2BkhCda83%2Fiu9bfJ5Op0h8Z8E3Lrhh6pXF2R4BYyWONjYSOThyU%2FyBsOu%2FGOdosAa5cWGqzc51ZpDVOIryRHP1CP97eXn%2FNMItMGIAZN0ECIto5QiY4e%2BAyu7TyebyAqCgQeOu%2F6s1g2fSnCzs9qt0lhbjubgtieZAq4iXu1tJ0gzWVUNsdrhgP1QLN7GJXhh9jhONoVfLHfCUhjDI2rRv4gvWhwmEAamI0Uqr8W1gozoFc1l1pYNBwJC1pGH%2BLbs2x7M5k1rLG%2FkGIpu%2F53SfZoVBmEmhSfUTKpmqLau5Cii%2BcsYtVU7acoXRua6k0XTE32kWmcSW66RJ%2B0rdiH7GTHAbo%2BwZ2axmWKWU80kB1g%2FWP5W7iheHlKQagGF5Rpp2wJPIfIXYOWhOIMPNYXyNAwgBQ9GjcLjBRIuFuho%2Bej1goQlyC%2FkQq5zu25N5BsSb3KJW%2B2WKtCUB1X2Q86SL67wQ5NLJPWs1TBvyozRhipASxASwbwN9UQ0i7jQI9u8cnUD54M3U8v4uWiRUQtyMNGiib0GOqUBlujwU1I%2FaTKY76ZdXXZNXDw6ayxx8xSYNwEEusU4uvY%2B4TnpTfpuy4f1pIiWpYIVaO8YDFRXlxKJUC4%2Bopbm8j1I8egWNDJ52UUxbZUSnRLfY4AfVgc%2F9eUbzG7XC9VUs15RFOn2fwjPjE%2BuljrJ4uI0715EURwAMI5BN%2BiKzHQ1z6iEgubbsklhGpXATkezpwd3A9Bpc0es4iOXFsEJw1sWer%2FG&X-Amz-Signature=626c10e961058e56cea79e8e216111da2bf4ec2b11e941dcd50501277e3ce576&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOO7EHK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICnncTgFadNee90q9JxS5q4fqlmpfdDYmANfycrSjAUNAiEA%2FhSN5WDL0CjbNEcV7Oq3GwulZvXQAHtjSk3Ywho8jooq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGbJiah4ePFKuGOGpyrcA0N7qeYn5gYuAVK%2F3MOppMQ941xYzNxUUQkoAc3Zns2I%2Bff4l2Rf2%2F%2F5sI3fMTNsx4PZ19K8Xv7Xj5cCB0FfA4O7MoWlBfkyIWGiTZVK%2BkhCda83%2Fiu9bfJ5Op0h8Z8E3Lrhh6pXF2R4BYyWONjYSOThyU%2FyBsOu%2FGOdosAa5cWGqzc51ZpDVOIryRHP1CP97eXn%2FNMItMGIAZN0ECIto5QiY4e%2BAyu7TyebyAqCgQeOu%2F6s1g2fSnCzs9qt0lhbjubgtieZAq4iXu1tJ0gzWVUNsdrhgP1QLN7GJXhh9jhONoVfLHfCUhjDI2rRv4gvWhwmEAamI0Uqr8W1gozoFc1l1pYNBwJC1pGH%2BLbs2x7M5k1rLG%2FkGIpu%2F53SfZoVBmEmhSfUTKpmqLau5Cii%2BcsYtVU7acoXRua6k0XTE32kWmcSW66RJ%2B0rdiH7GTHAbo%2BwZ2axmWKWU80kB1g%2FWP5W7iheHlKQagGF5Rpp2wJPIfIXYOWhOIMPNYXyNAwgBQ9GjcLjBRIuFuho%2Bej1goQlyC%2FkQq5zu25N5BsSb3KJW%2B2WKtCUB1X2Q86SL67wQ5NLJPWs1TBvyozRhipASxASwbwN9UQ0i7jQI9u8cnUD54M3U8v4uWiRUQtyMNGiib0GOqUBlujwU1I%2FaTKY76ZdXXZNXDw6ayxx8xSYNwEEusU4uvY%2B4TnpTfpuy4f1pIiWpYIVaO8YDFRXlxKJUC4%2Bopbm8j1I8egWNDJ52UUxbZUSnRLfY4AfVgc%2F9eUbzG7XC9VUs15RFOn2fwjPjE%2BuljrJ4uI0715EURwAMI5BN%2BiKzHQ1z6iEgubbsklhGpXATkezpwd3A9Bpc0es4iOXFsEJw1sWer%2FG&X-Amz-Signature=2fc30a31491a6a76d38246a51ebdcf99859448d6b72b18ea49d613b41be79118&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOO7EHK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICnncTgFadNee90q9JxS5q4fqlmpfdDYmANfycrSjAUNAiEA%2FhSN5WDL0CjbNEcV7Oq3GwulZvXQAHtjSk3Ywho8jooq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGbJiah4ePFKuGOGpyrcA0N7qeYn5gYuAVK%2F3MOppMQ941xYzNxUUQkoAc3Zns2I%2Bff4l2Rf2%2F%2F5sI3fMTNsx4PZ19K8Xv7Xj5cCB0FfA4O7MoWlBfkyIWGiTZVK%2BkhCda83%2Fiu9bfJ5Op0h8Z8E3Lrhh6pXF2R4BYyWONjYSOThyU%2FyBsOu%2FGOdosAa5cWGqzc51ZpDVOIryRHP1CP97eXn%2FNMItMGIAZN0ECIto5QiY4e%2BAyu7TyebyAqCgQeOu%2F6s1g2fSnCzs9qt0lhbjubgtieZAq4iXu1tJ0gzWVUNsdrhgP1QLN7GJXhh9jhONoVfLHfCUhjDI2rRv4gvWhwmEAamI0Uqr8W1gozoFc1l1pYNBwJC1pGH%2BLbs2x7M5k1rLG%2FkGIpu%2F53SfZoVBmEmhSfUTKpmqLau5Cii%2BcsYtVU7acoXRua6k0XTE32kWmcSW66RJ%2B0rdiH7GTHAbo%2BwZ2axmWKWU80kB1g%2FWP5W7iheHlKQagGF5Rpp2wJPIfIXYOWhOIMPNYXyNAwgBQ9GjcLjBRIuFuho%2Bej1goQlyC%2FkQq5zu25N5BsSb3KJW%2B2WKtCUB1X2Q86SL67wQ5NLJPWs1TBvyozRhipASxASwbwN9UQ0i7jQI9u8cnUD54M3U8v4uWiRUQtyMNGiib0GOqUBlujwU1I%2FaTKY76ZdXXZNXDw6ayxx8xSYNwEEusU4uvY%2B4TnpTfpuy4f1pIiWpYIVaO8YDFRXlxKJUC4%2Bopbm8j1I8egWNDJ52UUxbZUSnRLfY4AfVgc%2F9eUbzG7XC9VUs15RFOn2fwjPjE%2BuljrJ4uI0715EURwAMI5BN%2BiKzHQ1z6iEgubbsklhGpXATkezpwd3A9Bpc0es4iOXFsEJw1sWer%2FG&X-Amz-Signature=e6948d68deec5b478c65b48e9d82af9d890237f413383d845da3b66ff80316e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOO7EHK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICnncTgFadNee90q9JxS5q4fqlmpfdDYmANfycrSjAUNAiEA%2FhSN5WDL0CjbNEcV7Oq3GwulZvXQAHtjSk3Ywho8jooq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGbJiah4ePFKuGOGpyrcA0N7qeYn5gYuAVK%2F3MOppMQ941xYzNxUUQkoAc3Zns2I%2Bff4l2Rf2%2F%2F5sI3fMTNsx4PZ19K8Xv7Xj5cCB0FfA4O7MoWlBfkyIWGiTZVK%2BkhCda83%2Fiu9bfJ5Op0h8Z8E3Lrhh6pXF2R4BYyWONjYSOThyU%2FyBsOu%2FGOdosAa5cWGqzc51ZpDVOIryRHP1CP97eXn%2FNMItMGIAZN0ECIto5QiY4e%2BAyu7TyebyAqCgQeOu%2F6s1g2fSnCzs9qt0lhbjubgtieZAq4iXu1tJ0gzWVUNsdrhgP1QLN7GJXhh9jhONoVfLHfCUhjDI2rRv4gvWhwmEAamI0Uqr8W1gozoFc1l1pYNBwJC1pGH%2BLbs2x7M5k1rLG%2FkGIpu%2F53SfZoVBmEmhSfUTKpmqLau5Cii%2BcsYtVU7acoXRua6k0XTE32kWmcSW66RJ%2B0rdiH7GTHAbo%2BwZ2axmWKWU80kB1g%2FWP5W7iheHlKQagGF5Rpp2wJPIfIXYOWhOIMPNYXyNAwgBQ9GjcLjBRIuFuho%2Bej1goQlyC%2FkQq5zu25N5BsSb3KJW%2B2WKtCUB1X2Q86SL67wQ5NLJPWs1TBvyozRhipASxASwbwN9UQ0i7jQI9u8cnUD54M3U8v4uWiRUQtyMNGiib0GOqUBlujwU1I%2FaTKY76ZdXXZNXDw6ayxx8xSYNwEEusU4uvY%2B4TnpTfpuy4f1pIiWpYIVaO8YDFRXlxKJUC4%2Bopbm8j1I8egWNDJ52UUxbZUSnRLfY4AfVgc%2F9eUbzG7XC9VUs15RFOn2fwjPjE%2BuljrJ4uI0715EURwAMI5BN%2BiKzHQ1z6iEgubbsklhGpXATkezpwd3A9Bpc0es4iOXFsEJw1sWer%2FG&X-Amz-Signature=70f8c4ef013a487e55f4768a6ed69e8489d3cc7a78187ee8013cc57ce2c98cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOO7EHK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICnncTgFadNee90q9JxS5q4fqlmpfdDYmANfycrSjAUNAiEA%2FhSN5WDL0CjbNEcV7Oq3GwulZvXQAHtjSk3Ywho8jooq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGbJiah4ePFKuGOGpyrcA0N7qeYn5gYuAVK%2F3MOppMQ941xYzNxUUQkoAc3Zns2I%2Bff4l2Rf2%2F%2F5sI3fMTNsx4PZ19K8Xv7Xj5cCB0FfA4O7MoWlBfkyIWGiTZVK%2BkhCda83%2Fiu9bfJ5Op0h8Z8E3Lrhh6pXF2R4BYyWONjYSOThyU%2FyBsOu%2FGOdosAa5cWGqzc51ZpDVOIryRHP1CP97eXn%2FNMItMGIAZN0ECIto5QiY4e%2BAyu7TyebyAqCgQeOu%2F6s1g2fSnCzs9qt0lhbjubgtieZAq4iXu1tJ0gzWVUNsdrhgP1QLN7GJXhh9jhONoVfLHfCUhjDI2rRv4gvWhwmEAamI0Uqr8W1gozoFc1l1pYNBwJC1pGH%2BLbs2x7M5k1rLG%2FkGIpu%2F53SfZoVBmEmhSfUTKpmqLau5Cii%2BcsYtVU7acoXRua6k0XTE32kWmcSW66RJ%2B0rdiH7GTHAbo%2BwZ2axmWKWU80kB1g%2FWP5W7iheHlKQagGF5Rpp2wJPIfIXYOWhOIMPNYXyNAwgBQ9GjcLjBRIuFuho%2Bej1goQlyC%2FkQq5zu25N5BsSb3KJW%2B2WKtCUB1X2Q86SL67wQ5NLJPWs1TBvyozRhipASxASwbwN9UQ0i7jQI9u8cnUD54M3U8v4uWiRUQtyMNGiib0GOqUBlujwU1I%2FaTKY76ZdXXZNXDw6ayxx8xSYNwEEusU4uvY%2B4TnpTfpuy4f1pIiWpYIVaO8YDFRXlxKJUC4%2Bopbm8j1I8egWNDJ52UUxbZUSnRLfY4AfVgc%2F9eUbzG7XC9VUs15RFOn2fwjPjE%2BuljrJ4uI0715EURwAMI5BN%2BiKzHQ1z6iEgubbsklhGpXATkezpwd3A9Bpc0es4iOXFsEJw1sWer%2FG&X-Amz-Signature=f036082a2532bb9e38ccfa6096e88730f3cd246f91e4ab6c33c9df76ca2642f8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
