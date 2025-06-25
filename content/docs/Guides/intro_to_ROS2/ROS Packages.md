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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGFOILZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD5KQF3Iq%2B99d8U%2B%2FoxNT9HuvFxWDBydXMSmi%2FOdIOW3gIgI7xZ3GU1fvyRbajweDSadcWe%2F36OL8aUU6SWwH32%2FVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQRANOtID9YgSEm3CrcAxkB6KZtFZxH7091xsXfTb3bRED99rGrVcZRuOJG70kGVr%2FAbsI%2F5kfFBqZ9%2FINBI1qJNqF%2FkHizMXOQ%2BuxM%2FMJkRRGqO%2FEIMXx5mmsqe9QcX73y%2FkEUtotiC6NHXHbmjBvNfCCSItrPo2ETV4OLmahsUu80zI2WcxoKIz%2BHgCvu3ejwPahibzGaIQleC69Jvn2Ke9rq6uhGQA0XJzz9BNM7Vd18eG6xDiAS4wwOhgLrOs%2FGfOHYwFKhSLeOBH7w80eBqO49C0CXLm%2FrSyrSV4FUYpYXwmAlZbdpl0t2VrfqjZfnoslO3Hgg6cikXY9DsBefKCoZVqYT0el5n7w6%2BM1yJXTVe3eSOxRl5E5E6bK7Qr7RwfiWiStDIzdEfgur61vSKdM%2BcrENgoaP2LMqm9NCdp0NosDhoFhBmrog8lJoAF0pb69cMkbAypNXCus2y4bG9ReQ7ooYrr2OT9T4CTgmhDI9%2F2AFbQAjyYMTF70TVPh1VQUnhPQ5TUNebN2VghqLw7C3dxoEX9nm4EljD5WHK4kPm5gZ4U2emF2B%2B7bhwYhLSwxF5zqNYlWfPSmhDmMNo6T%2Fz4wVbMs3QgB1rgLbEk3Ux%2FKBJJww%2F0GH%2Fel1x9JJ0u8VvWU06w1WMN6l7sIGOqUBIzyN9J8RWf6a%2FFniCVf5pLrotgAl3wcQhke2hnBiPtydPdsTueoP6sqRSw1t0c1BSQtwWIPd5U3%2FD%2B5A424ESF2JpPj%2Fgv4QjRr4glmT%2BkZQOkCXkh%2FxT3AMr%2BO1FYE3Rexa7vU9fzNjA%2F0K%2FCQIcQQwLnJQ4Z%2FNkDjOQFxVi9Nmoe1U3PElGGx3uQIQnRvIaS47vLeCDJPOMNEuawK33APbY53R&X-Amz-Signature=e7f7f7c8eedc01aac133f9b81fb6974abd4fc7272b4a63b45a416b060ccab498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGFOILZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD5KQF3Iq%2B99d8U%2B%2FoxNT9HuvFxWDBydXMSmi%2FOdIOW3gIgI7xZ3GU1fvyRbajweDSadcWe%2F36OL8aUU6SWwH32%2FVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQRANOtID9YgSEm3CrcAxkB6KZtFZxH7091xsXfTb3bRED99rGrVcZRuOJG70kGVr%2FAbsI%2F5kfFBqZ9%2FINBI1qJNqF%2FkHizMXOQ%2BuxM%2FMJkRRGqO%2FEIMXx5mmsqe9QcX73y%2FkEUtotiC6NHXHbmjBvNfCCSItrPo2ETV4OLmahsUu80zI2WcxoKIz%2BHgCvu3ejwPahibzGaIQleC69Jvn2Ke9rq6uhGQA0XJzz9BNM7Vd18eG6xDiAS4wwOhgLrOs%2FGfOHYwFKhSLeOBH7w80eBqO49C0CXLm%2FrSyrSV4FUYpYXwmAlZbdpl0t2VrfqjZfnoslO3Hgg6cikXY9DsBefKCoZVqYT0el5n7w6%2BM1yJXTVe3eSOxRl5E5E6bK7Qr7RwfiWiStDIzdEfgur61vSKdM%2BcrENgoaP2LMqm9NCdp0NosDhoFhBmrog8lJoAF0pb69cMkbAypNXCus2y4bG9ReQ7ooYrr2OT9T4CTgmhDI9%2F2AFbQAjyYMTF70TVPh1VQUnhPQ5TUNebN2VghqLw7C3dxoEX9nm4EljD5WHK4kPm5gZ4U2emF2B%2B7bhwYhLSwxF5zqNYlWfPSmhDmMNo6T%2Fz4wVbMs3QgB1rgLbEk3Ux%2FKBJJww%2F0GH%2Fel1x9JJ0u8VvWU06w1WMN6l7sIGOqUBIzyN9J8RWf6a%2FFniCVf5pLrotgAl3wcQhke2hnBiPtydPdsTueoP6sqRSw1t0c1BSQtwWIPd5U3%2FD%2B5A424ESF2JpPj%2Fgv4QjRr4glmT%2BkZQOkCXkh%2FxT3AMr%2BO1FYE3Rexa7vU9fzNjA%2F0K%2FCQIcQQwLnJQ4Z%2FNkDjOQFxVi9Nmoe1U3PElGGx3uQIQnRvIaS47vLeCDJPOMNEuawK33APbY53R&X-Amz-Signature=20f0410eb868da4ae81d33afc2ff34a95fe62df195576a7a563ba59abfc82d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGFOILZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD5KQF3Iq%2B99d8U%2B%2FoxNT9HuvFxWDBydXMSmi%2FOdIOW3gIgI7xZ3GU1fvyRbajweDSadcWe%2F36OL8aUU6SWwH32%2FVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQRANOtID9YgSEm3CrcAxkB6KZtFZxH7091xsXfTb3bRED99rGrVcZRuOJG70kGVr%2FAbsI%2F5kfFBqZ9%2FINBI1qJNqF%2FkHizMXOQ%2BuxM%2FMJkRRGqO%2FEIMXx5mmsqe9QcX73y%2FkEUtotiC6NHXHbmjBvNfCCSItrPo2ETV4OLmahsUu80zI2WcxoKIz%2BHgCvu3ejwPahibzGaIQleC69Jvn2Ke9rq6uhGQA0XJzz9BNM7Vd18eG6xDiAS4wwOhgLrOs%2FGfOHYwFKhSLeOBH7w80eBqO49C0CXLm%2FrSyrSV4FUYpYXwmAlZbdpl0t2VrfqjZfnoslO3Hgg6cikXY9DsBefKCoZVqYT0el5n7w6%2BM1yJXTVe3eSOxRl5E5E6bK7Qr7RwfiWiStDIzdEfgur61vSKdM%2BcrENgoaP2LMqm9NCdp0NosDhoFhBmrog8lJoAF0pb69cMkbAypNXCus2y4bG9ReQ7ooYrr2OT9T4CTgmhDI9%2F2AFbQAjyYMTF70TVPh1VQUnhPQ5TUNebN2VghqLw7C3dxoEX9nm4EljD5WHK4kPm5gZ4U2emF2B%2B7bhwYhLSwxF5zqNYlWfPSmhDmMNo6T%2Fz4wVbMs3QgB1rgLbEk3Ux%2FKBJJww%2F0GH%2Fel1x9JJ0u8VvWU06w1WMN6l7sIGOqUBIzyN9J8RWf6a%2FFniCVf5pLrotgAl3wcQhke2hnBiPtydPdsTueoP6sqRSw1t0c1BSQtwWIPd5U3%2FD%2B5A424ESF2JpPj%2Fgv4QjRr4glmT%2BkZQOkCXkh%2FxT3AMr%2BO1FYE3Rexa7vU9fzNjA%2F0K%2FCQIcQQwLnJQ4Z%2FNkDjOQFxVi9Nmoe1U3PElGGx3uQIQnRvIaS47vLeCDJPOMNEuawK33APbY53R&X-Amz-Signature=78fa7f9b948f262abf3ab41061ff3bbccab09f504775d05eb47bc50b265896f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGFOILZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD5KQF3Iq%2B99d8U%2B%2FoxNT9HuvFxWDBydXMSmi%2FOdIOW3gIgI7xZ3GU1fvyRbajweDSadcWe%2F36OL8aUU6SWwH32%2FVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQRANOtID9YgSEm3CrcAxkB6KZtFZxH7091xsXfTb3bRED99rGrVcZRuOJG70kGVr%2FAbsI%2F5kfFBqZ9%2FINBI1qJNqF%2FkHizMXOQ%2BuxM%2FMJkRRGqO%2FEIMXx5mmsqe9QcX73y%2FkEUtotiC6NHXHbmjBvNfCCSItrPo2ETV4OLmahsUu80zI2WcxoKIz%2BHgCvu3ejwPahibzGaIQleC69Jvn2Ke9rq6uhGQA0XJzz9BNM7Vd18eG6xDiAS4wwOhgLrOs%2FGfOHYwFKhSLeOBH7w80eBqO49C0CXLm%2FrSyrSV4FUYpYXwmAlZbdpl0t2VrfqjZfnoslO3Hgg6cikXY9DsBefKCoZVqYT0el5n7w6%2BM1yJXTVe3eSOxRl5E5E6bK7Qr7RwfiWiStDIzdEfgur61vSKdM%2BcrENgoaP2LMqm9NCdp0NosDhoFhBmrog8lJoAF0pb69cMkbAypNXCus2y4bG9ReQ7ooYrr2OT9T4CTgmhDI9%2F2AFbQAjyYMTF70TVPh1VQUnhPQ5TUNebN2VghqLw7C3dxoEX9nm4EljD5WHK4kPm5gZ4U2emF2B%2B7bhwYhLSwxF5zqNYlWfPSmhDmMNo6T%2Fz4wVbMs3QgB1rgLbEk3Ux%2FKBJJww%2F0GH%2Fel1x9JJ0u8VvWU06w1WMN6l7sIGOqUBIzyN9J8RWf6a%2FFniCVf5pLrotgAl3wcQhke2hnBiPtydPdsTueoP6sqRSw1t0c1BSQtwWIPd5U3%2FD%2B5A424ESF2JpPj%2Fgv4QjRr4glmT%2BkZQOkCXkh%2FxT3AMr%2BO1FYE3Rexa7vU9fzNjA%2F0K%2FCQIcQQwLnJQ4Z%2FNkDjOQFxVi9Nmoe1U3PElGGx3uQIQnRvIaS47vLeCDJPOMNEuawK33APbY53R&X-Amz-Signature=4c9b5d41a13edc27cb03d615094ea38acd282fbc97a91bf00328dd06a7a44ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGFOILZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD5KQF3Iq%2B99d8U%2B%2FoxNT9HuvFxWDBydXMSmi%2FOdIOW3gIgI7xZ3GU1fvyRbajweDSadcWe%2F36OL8aUU6SWwH32%2FVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQRANOtID9YgSEm3CrcAxkB6KZtFZxH7091xsXfTb3bRED99rGrVcZRuOJG70kGVr%2FAbsI%2F5kfFBqZ9%2FINBI1qJNqF%2FkHizMXOQ%2BuxM%2FMJkRRGqO%2FEIMXx5mmsqe9QcX73y%2FkEUtotiC6NHXHbmjBvNfCCSItrPo2ETV4OLmahsUu80zI2WcxoKIz%2BHgCvu3ejwPahibzGaIQleC69Jvn2Ke9rq6uhGQA0XJzz9BNM7Vd18eG6xDiAS4wwOhgLrOs%2FGfOHYwFKhSLeOBH7w80eBqO49C0CXLm%2FrSyrSV4FUYpYXwmAlZbdpl0t2VrfqjZfnoslO3Hgg6cikXY9DsBefKCoZVqYT0el5n7w6%2BM1yJXTVe3eSOxRl5E5E6bK7Qr7RwfiWiStDIzdEfgur61vSKdM%2BcrENgoaP2LMqm9NCdp0NosDhoFhBmrog8lJoAF0pb69cMkbAypNXCus2y4bG9ReQ7ooYrr2OT9T4CTgmhDI9%2F2AFbQAjyYMTF70TVPh1VQUnhPQ5TUNebN2VghqLw7C3dxoEX9nm4EljD5WHK4kPm5gZ4U2emF2B%2B7bhwYhLSwxF5zqNYlWfPSmhDmMNo6T%2Fz4wVbMs3QgB1rgLbEk3Ux%2FKBJJww%2F0GH%2Fel1x9JJ0u8VvWU06w1WMN6l7sIGOqUBIzyN9J8RWf6a%2FFniCVf5pLrotgAl3wcQhke2hnBiPtydPdsTueoP6sqRSw1t0c1BSQtwWIPd5U3%2FD%2B5A424ESF2JpPj%2Fgv4QjRr4glmT%2BkZQOkCXkh%2FxT3AMr%2BO1FYE3Rexa7vU9fzNjA%2F0K%2FCQIcQQwLnJQ4Z%2FNkDjOQFxVi9Nmoe1U3PElGGx3uQIQnRvIaS47vLeCDJPOMNEuawK33APbY53R&X-Amz-Signature=2c3106ae8166536f1b53b2979ac8485f226895faa937fd5eadd5ca9d211b2cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGFOILZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD5KQF3Iq%2B99d8U%2B%2FoxNT9HuvFxWDBydXMSmi%2FOdIOW3gIgI7xZ3GU1fvyRbajweDSadcWe%2F36OL8aUU6SWwH32%2FVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQRANOtID9YgSEm3CrcAxkB6KZtFZxH7091xsXfTb3bRED99rGrVcZRuOJG70kGVr%2FAbsI%2F5kfFBqZ9%2FINBI1qJNqF%2FkHizMXOQ%2BuxM%2FMJkRRGqO%2FEIMXx5mmsqe9QcX73y%2FkEUtotiC6NHXHbmjBvNfCCSItrPo2ETV4OLmahsUu80zI2WcxoKIz%2BHgCvu3ejwPahibzGaIQleC69Jvn2Ke9rq6uhGQA0XJzz9BNM7Vd18eG6xDiAS4wwOhgLrOs%2FGfOHYwFKhSLeOBH7w80eBqO49C0CXLm%2FrSyrSV4FUYpYXwmAlZbdpl0t2VrfqjZfnoslO3Hgg6cikXY9DsBefKCoZVqYT0el5n7w6%2BM1yJXTVe3eSOxRl5E5E6bK7Qr7RwfiWiStDIzdEfgur61vSKdM%2BcrENgoaP2LMqm9NCdp0NosDhoFhBmrog8lJoAF0pb69cMkbAypNXCus2y4bG9ReQ7ooYrr2OT9T4CTgmhDI9%2F2AFbQAjyYMTF70TVPh1VQUnhPQ5TUNebN2VghqLw7C3dxoEX9nm4EljD5WHK4kPm5gZ4U2emF2B%2B7bhwYhLSwxF5zqNYlWfPSmhDmMNo6T%2Fz4wVbMs3QgB1rgLbEk3Ux%2FKBJJww%2F0GH%2Fel1x9JJ0u8VvWU06w1WMN6l7sIGOqUBIzyN9J8RWf6a%2FFniCVf5pLrotgAl3wcQhke2hnBiPtydPdsTueoP6sqRSw1t0c1BSQtwWIPd5U3%2FD%2B5A424ESF2JpPj%2Fgv4QjRr4glmT%2BkZQOkCXkh%2FxT3AMr%2BO1FYE3Rexa7vU9fzNjA%2F0K%2FCQIcQQwLnJQ4Z%2FNkDjOQFxVi9Nmoe1U3PElGGx3uQIQnRvIaS47vLeCDJPOMNEuawK33APbY53R&X-Amz-Signature=967194b22ab68829b090cd013136e2ada3ab26571df9430bb9c4cb268197075d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDGFOILZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD5KQF3Iq%2B99d8U%2B%2FoxNT9HuvFxWDBydXMSmi%2FOdIOW3gIgI7xZ3GU1fvyRbajweDSadcWe%2F36OL8aUU6SWwH32%2FVoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQRANOtID9YgSEm3CrcAxkB6KZtFZxH7091xsXfTb3bRED99rGrVcZRuOJG70kGVr%2FAbsI%2F5kfFBqZ9%2FINBI1qJNqF%2FkHizMXOQ%2BuxM%2FMJkRRGqO%2FEIMXx5mmsqe9QcX73y%2FkEUtotiC6NHXHbmjBvNfCCSItrPo2ETV4OLmahsUu80zI2WcxoKIz%2BHgCvu3ejwPahibzGaIQleC69Jvn2Ke9rq6uhGQA0XJzz9BNM7Vd18eG6xDiAS4wwOhgLrOs%2FGfOHYwFKhSLeOBH7w80eBqO49C0CXLm%2FrSyrSV4FUYpYXwmAlZbdpl0t2VrfqjZfnoslO3Hgg6cikXY9DsBefKCoZVqYT0el5n7w6%2BM1yJXTVe3eSOxRl5E5E6bK7Qr7RwfiWiStDIzdEfgur61vSKdM%2BcrENgoaP2LMqm9NCdp0NosDhoFhBmrog8lJoAF0pb69cMkbAypNXCus2y4bG9ReQ7ooYrr2OT9T4CTgmhDI9%2F2AFbQAjyYMTF70TVPh1VQUnhPQ5TUNebN2VghqLw7C3dxoEX9nm4EljD5WHK4kPm5gZ4U2emF2B%2B7bhwYhLSwxF5zqNYlWfPSmhDmMNo6T%2Fz4wVbMs3QgB1rgLbEk3Ux%2FKBJJww%2F0GH%2Fel1x9JJ0u8VvWU06w1WMN6l7sIGOqUBIzyN9J8RWf6a%2FFniCVf5pLrotgAl3wcQhke2hnBiPtydPdsTueoP6sqRSw1t0c1BSQtwWIPd5U3%2FD%2B5A424ESF2JpPj%2Fgv4QjRr4glmT%2BkZQOkCXkh%2FxT3AMr%2BO1FYE3Rexa7vU9fzNjA%2F0K%2FCQIcQQwLnJQ4Z%2FNkDjOQFxVi9Nmoe1U3PElGGx3uQIQnRvIaS47vLeCDJPOMNEuawK33APbY53R&X-Amz-Signature=ba75358fbd8d7dfb0649d7325ac4915cade549244910febd509c1b1e41be0008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
