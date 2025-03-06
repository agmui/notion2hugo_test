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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KLAVP7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwt%2BGMlT4CzC4SLEMroRgRkkmrhZZzLNX%2FMO%2FGlwbheQIgLVbynpKIRdcisNxewrve%2FvQR9SuEwuNk%2Bec3q%2FvYhrgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0WFVn32I%2BFtctEiyrcA4TUiQIqJ2wAqng%2FSqpvj8l0NWn0Uo6vM9WEe5%2FGMSvzPHq0ndk5iVluw%2FdYFTdX1UAZgRydCCcCuUYTackPZ6wHx2Di%2B0w%2F69DG2rjwbhwyl1bvQxfNqTmGdeaeM9Y%2BHMQTurltuPBJpnOCYFGn2ojSaIJ9S4CVFpfX9Jjfl9IYAi%2Bu39PAsh5ZALhF%2Fmu%2FF3q3ZdHUM0fftfeK%2BkIuemC%2BNg0C%2FJGTgkIS9uuGN3oIcCR8o53cwp%2BdozisW0l3uftnpLTGLrVngAD1FQ14vb8BoCFMQj8xurkn5GGLH4gJRHYkI%2BEj17u5X0DVc7r%2Fy8zJvSpf33vjcjYv98qh2knZVKLd3gTt2JOk3nXNoF3PPR39cP2fCbnWp%2Fvt10gJTqX2ln%2BWxP%2F4V1r7Irhj%2BP2CVzOstMuC7R67XtT3wUCO1fG%2B40Gjtk2Cdjw8LHTa391S564cjw8vVAWqmD6ySuK7bYvOaNHq%2BeK8n6rXCEL509Vl7oN3cdMj%2Fe%2B6260jHOxfUdBEGYINVI7z2VZ2eKWpsM%2FaCZqRHJSiEAJis%2FoeM4SVug7I%2BKFB8i1Rc4KNZyMdOKmFvjEZmvIAiZD7grGkZ2BB4AJXhhvSwtU%2F32WFr0CDb5LWgLirquotMM6tp74GOqUBBMCOyJ9%2F0CZSpM%2B0h%2Ba6zc26oMq%2BpZBmbg9kEx5jynBoUvcAD%2FQ6q%2B8sWEo2GJzIz42SMPGh5S5CFmaus6c%2B075akk41uvbW957vy1SxK3qewnqJDyivup6XhB8p1IM%2Fr89t1SGClAqYjSfUvyCiX7oIxHXLuxvUHyUZYSSqOg8zjHIe9gc5BGH4%2Bit9pYYh9j47JO9b69gdxJsY8rOKnXfcTGuB&X-Amz-Signature=b9bcaab2737e30375edfa906a509f68db81e685139ab94a09dc7170eeeb8e55e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KLAVP7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwt%2BGMlT4CzC4SLEMroRgRkkmrhZZzLNX%2FMO%2FGlwbheQIgLVbynpKIRdcisNxewrve%2FvQR9SuEwuNk%2Bec3q%2FvYhrgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0WFVn32I%2BFtctEiyrcA4TUiQIqJ2wAqng%2FSqpvj8l0NWn0Uo6vM9WEe5%2FGMSvzPHq0ndk5iVluw%2FdYFTdX1UAZgRydCCcCuUYTackPZ6wHx2Di%2B0w%2F69DG2rjwbhwyl1bvQxfNqTmGdeaeM9Y%2BHMQTurltuPBJpnOCYFGn2ojSaIJ9S4CVFpfX9Jjfl9IYAi%2Bu39PAsh5ZALhF%2Fmu%2FF3q3ZdHUM0fftfeK%2BkIuemC%2BNg0C%2FJGTgkIS9uuGN3oIcCR8o53cwp%2BdozisW0l3uftnpLTGLrVngAD1FQ14vb8BoCFMQj8xurkn5GGLH4gJRHYkI%2BEj17u5X0DVc7r%2Fy8zJvSpf33vjcjYv98qh2knZVKLd3gTt2JOk3nXNoF3PPR39cP2fCbnWp%2Fvt10gJTqX2ln%2BWxP%2F4V1r7Irhj%2BP2CVzOstMuC7R67XtT3wUCO1fG%2B40Gjtk2Cdjw8LHTa391S564cjw8vVAWqmD6ySuK7bYvOaNHq%2BeK8n6rXCEL509Vl7oN3cdMj%2Fe%2B6260jHOxfUdBEGYINVI7z2VZ2eKWpsM%2FaCZqRHJSiEAJis%2FoeM4SVug7I%2BKFB8i1Rc4KNZyMdOKmFvjEZmvIAiZD7grGkZ2BB4AJXhhvSwtU%2F32WFr0CDb5LWgLirquotMM6tp74GOqUBBMCOyJ9%2F0CZSpM%2B0h%2Ba6zc26oMq%2BpZBmbg9kEx5jynBoUvcAD%2FQ6q%2B8sWEo2GJzIz42SMPGh5S5CFmaus6c%2B075akk41uvbW957vy1SxK3qewnqJDyivup6XhB8p1IM%2Fr89t1SGClAqYjSfUvyCiX7oIxHXLuxvUHyUZYSSqOg8zjHIe9gc5BGH4%2Bit9pYYh9j47JO9b69gdxJsY8rOKnXfcTGuB&X-Amz-Signature=62c3ec23964a2c9eb30924e9138bf1cb06dc09c0fd1bfbd660c5cba2673000eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KLAVP7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwt%2BGMlT4CzC4SLEMroRgRkkmrhZZzLNX%2FMO%2FGlwbheQIgLVbynpKIRdcisNxewrve%2FvQR9SuEwuNk%2Bec3q%2FvYhrgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0WFVn32I%2BFtctEiyrcA4TUiQIqJ2wAqng%2FSqpvj8l0NWn0Uo6vM9WEe5%2FGMSvzPHq0ndk5iVluw%2FdYFTdX1UAZgRydCCcCuUYTackPZ6wHx2Di%2B0w%2F69DG2rjwbhwyl1bvQxfNqTmGdeaeM9Y%2BHMQTurltuPBJpnOCYFGn2ojSaIJ9S4CVFpfX9Jjfl9IYAi%2Bu39PAsh5ZALhF%2Fmu%2FF3q3ZdHUM0fftfeK%2BkIuemC%2BNg0C%2FJGTgkIS9uuGN3oIcCR8o53cwp%2BdozisW0l3uftnpLTGLrVngAD1FQ14vb8BoCFMQj8xurkn5GGLH4gJRHYkI%2BEj17u5X0DVc7r%2Fy8zJvSpf33vjcjYv98qh2knZVKLd3gTt2JOk3nXNoF3PPR39cP2fCbnWp%2Fvt10gJTqX2ln%2BWxP%2F4V1r7Irhj%2BP2CVzOstMuC7R67XtT3wUCO1fG%2B40Gjtk2Cdjw8LHTa391S564cjw8vVAWqmD6ySuK7bYvOaNHq%2BeK8n6rXCEL509Vl7oN3cdMj%2Fe%2B6260jHOxfUdBEGYINVI7z2VZ2eKWpsM%2FaCZqRHJSiEAJis%2FoeM4SVug7I%2BKFB8i1Rc4KNZyMdOKmFvjEZmvIAiZD7grGkZ2BB4AJXhhvSwtU%2F32WFr0CDb5LWgLirquotMM6tp74GOqUBBMCOyJ9%2F0CZSpM%2B0h%2Ba6zc26oMq%2BpZBmbg9kEx5jynBoUvcAD%2FQ6q%2B8sWEo2GJzIz42SMPGh5S5CFmaus6c%2B075akk41uvbW957vy1SxK3qewnqJDyivup6XhB8p1IM%2Fr89t1SGClAqYjSfUvyCiX7oIxHXLuxvUHyUZYSSqOg8zjHIe9gc5BGH4%2Bit9pYYh9j47JO9b69gdxJsY8rOKnXfcTGuB&X-Amz-Signature=661d5da9e51c2721661c7a8f12561834f3c785ceb512c613f2cba850f6cdbcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KLAVP7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwt%2BGMlT4CzC4SLEMroRgRkkmrhZZzLNX%2FMO%2FGlwbheQIgLVbynpKIRdcisNxewrve%2FvQR9SuEwuNk%2Bec3q%2FvYhrgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0WFVn32I%2BFtctEiyrcA4TUiQIqJ2wAqng%2FSqpvj8l0NWn0Uo6vM9WEe5%2FGMSvzPHq0ndk5iVluw%2FdYFTdX1UAZgRydCCcCuUYTackPZ6wHx2Di%2B0w%2F69DG2rjwbhwyl1bvQxfNqTmGdeaeM9Y%2BHMQTurltuPBJpnOCYFGn2ojSaIJ9S4CVFpfX9Jjfl9IYAi%2Bu39PAsh5ZALhF%2Fmu%2FF3q3ZdHUM0fftfeK%2BkIuemC%2BNg0C%2FJGTgkIS9uuGN3oIcCR8o53cwp%2BdozisW0l3uftnpLTGLrVngAD1FQ14vb8BoCFMQj8xurkn5GGLH4gJRHYkI%2BEj17u5X0DVc7r%2Fy8zJvSpf33vjcjYv98qh2knZVKLd3gTt2JOk3nXNoF3PPR39cP2fCbnWp%2Fvt10gJTqX2ln%2BWxP%2F4V1r7Irhj%2BP2CVzOstMuC7R67XtT3wUCO1fG%2B40Gjtk2Cdjw8LHTa391S564cjw8vVAWqmD6ySuK7bYvOaNHq%2BeK8n6rXCEL509Vl7oN3cdMj%2Fe%2B6260jHOxfUdBEGYINVI7z2VZ2eKWpsM%2FaCZqRHJSiEAJis%2FoeM4SVug7I%2BKFB8i1Rc4KNZyMdOKmFvjEZmvIAiZD7grGkZ2BB4AJXhhvSwtU%2F32WFr0CDb5LWgLirquotMM6tp74GOqUBBMCOyJ9%2F0CZSpM%2B0h%2Ba6zc26oMq%2BpZBmbg9kEx5jynBoUvcAD%2FQ6q%2B8sWEo2GJzIz42SMPGh5S5CFmaus6c%2B075akk41uvbW957vy1SxK3qewnqJDyivup6XhB8p1IM%2Fr89t1SGClAqYjSfUvyCiX7oIxHXLuxvUHyUZYSSqOg8zjHIe9gc5BGH4%2Bit9pYYh9j47JO9b69gdxJsY8rOKnXfcTGuB&X-Amz-Signature=11fd16431c138f4475c9c3a86829c78c487248186902dee9c52727050e1daeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KLAVP7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwt%2BGMlT4CzC4SLEMroRgRkkmrhZZzLNX%2FMO%2FGlwbheQIgLVbynpKIRdcisNxewrve%2FvQR9SuEwuNk%2Bec3q%2FvYhrgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0WFVn32I%2BFtctEiyrcA4TUiQIqJ2wAqng%2FSqpvj8l0NWn0Uo6vM9WEe5%2FGMSvzPHq0ndk5iVluw%2FdYFTdX1UAZgRydCCcCuUYTackPZ6wHx2Di%2B0w%2F69DG2rjwbhwyl1bvQxfNqTmGdeaeM9Y%2BHMQTurltuPBJpnOCYFGn2ojSaIJ9S4CVFpfX9Jjfl9IYAi%2Bu39PAsh5ZALhF%2Fmu%2FF3q3ZdHUM0fftfeK%2BkIuemC%2BNg0C%2FJGTgkIS9uuGN3oIcCR8o53cwp%2BdozisW0l3uftnpLTGLrVngAD1FQ14vb8BoCFMQj8xurkn5GGLH4gJRHYkI%2BEj17u5X0DVc7r%2Fy8zJvSpf33vjcjYv98qh2knZVKLd3gTt2JOk3nXNoF3PPR39cP2fCbnWp%2Fvt10gJTqX2ln%2BWxP%2F4V1r7Irhj%2BP2CVzOstMuC7R67XtT3wUCO1fG%2B40Gjtk2Cdjw8LHTa391S564cjw8vVAWqmD6ySuK7bYvOaNHq%2BeK8n6rXCEL509Vl7oN3cdMj%2Fe%2B6260jHOxfUdBEGYINVI7z2VZ2eKWpsM%2FaCZqRHJSiEAJis%2FoeM4SVug7I%2BKFB8i1Rc4KNZyMdOKmFvjEZmvIAiZD7grGkZ2BB4AJXhhvSwtU%2F32WFr0CDb5LWgLirquotMM6tp74GOqUBBMCOyJ9%2F0CZSpM%2B0h%2Ba6zc26oMq%2BpZBmbg9kEx5jynBoUvcAD%2FQ6q%2B8sWEo2GJzIz42SMPGh5S5CFmaus6c%2B075akk41uvbW957vy1SxK3qewnqJDyivup6XhB8p1IM%2Fr89t1SGClAqYjSfUvyCiX7oIxHXLuxvUHyUZYSSqOg8zjHIe9gc5BGH4%2Bit9pYYh9j47JO9b69gdxJsY8rOKnXfcTGuB&X-Amz-Signature=df4158ec8c43cc9032c75b0f91ee71adf2928e3da6a5fea17ab02929c6802e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KLAVP7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwt%2BGMlT4CzC4SLEMroRgRkkmrhZZzLNX%2FMO%2FGlwbheQIgLVbynpKIRdcisNxewrve%2FvQR9SuEwuNk%2Bec3q%2FvYhrgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0WFVn32I%2BFtctEiyrcA4TUiQIqJ2wAqng%2FSqpvj8l0NWn0Uo6vM9WEe5%2FGMSvzPHq0ndk5iVluw%2FdYFTdX1UAZgRydCCcCuUYTackPZ6wHx2Di%2B0w%2F69DG2rjwbhwyl1bvQxfNqTmGdeaeM9Y%2BHMQTurltuPBJpnOCYFGn2ojSaIJ9S4CVFpfX9Jjfl9IYAi%2Bu39PAsh5ZALhF%2Fmu%2FF3q3ZdHUM0fftfeK%2BkIuemC%2BNg0C%2FJGTgkIS9uuGN3oIcCR8o53cwp%2BdozisW0l3uftnpLTGLrVngAD1FQ14vb8BoCFMQj8xurkn5GGLH4gJRHYkI%2BEj17u5X0DVc7r%2Fy8zJvSpf33vjcjYv98qh2knZVKLd3gTt2JOk3nXNoF3PPR39cP2fCbnWp%2Fvt10gJTqX2ln%2BWxP%2F4V1r7Irhj%2BP2CVzOstMuC7R67XtT3wUCO1fG%2B40Gjtk2Cdjw8LHTa391S564cjw8vVAWqmD6ySuK7bYvOaNHq%2BeK8n6rXCEL509Vl7oN3cdMj%2Fe%2B6260jHOxfUdBEGYINVI7z2VZ2eKWpsM%2FaCZqRHJSiEAJis%2FoeM4SVug7I%2BKFB8i1Rc4KNZyMdOKmFvjEZmvIAiZD7grGkZ2BB4AJXhhvSwtU%2F32WFr0CDb5LWgLirquotMM6tp74GOqUBBMCOyJ9%2F0CZSpM%2B0h%2Ba6zc26oMq%2BpZBmbg9kEx5jynBoUvcAD%2FQ6q%2B8sWEo2GJzIz42SMPGh5S5CFmaus6c%2B075akk41uvbW957vy1SxK3qewnqJDyivup6XhB8p1IM%2Fr89t1SGClAqYjSfUvyCiX7oIxHXLuxvUHyUZYSSqOg8zjHIe9gc5BGH4%2Bit9pYYh9j47JO9b69gdxJsY8rOKnXfcTGuB&X-Amz-Signature=a9728e6d0748abac06edb7cdc1c6b81c6f9b1d064c1f57f3ea71f263adf321da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KLAVP7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwt%2BGMlT4CzC4SLEMroRgRkkmrhZZzLNX%2FMO%2FGlwbheQIgLVbynpKIRdcisNxewrve%2FvQR9SuEwuNk%2Bec3q%2FvYhrgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0WFVn32I%2BFtctEiyrcA4TUiQIqJ2wAqng%2FSqpvj8l0NWn0Uo6vM9WEe5%2FGMSvzPHq0ndk5iVluw%2FdYFTdX1UAZgRydCCcCuUYTackPZ6wHx2Di%2B0w%2F69DG2rjwbhwyl1bvQxfNqTmGdeaeM9Y%2BHMQTurltuPBJpnOCYFGn2ojSaIJ9S4CVFpfX9Jjfl9IYAi%2Bu39PAsh5ZALhF%2Fmu%2FF3q3ZdHUM0fftfeK%2BkIuemC%2BNg0C%2FJGTgkIS9uuGN3oIcCR8o53cwp%2BdozisW0l3uftnpLTGLrVngAD1FQ14vb8BoCFMQj8xurkn5GGLH4gJRHYkI%2BEj17u5X0DVc7r%2Fy8zJvSpf33vjcjYv98qh2knZVKLd3gTt2JOk3nXNoF3PPR39cP2fCbnWp%2Fvt10gJTqX2ln%2BWxP%2F4V1r7Irhj%2BP2CVzOstMuC7R67XtT3wUCO1fG%2B40Gjtk2Cdjw8LHTa391S564cjw8vVAWqmD6ySuK7bYvOaNHq%2BeK8n6rXCEL509Vl7oN3cdMj%2Fe%2B6260jHOxfUdBEGYINVI7z2VZ2eKWpsM%2FaCZqRHJSiEAJis%2FoeM4SVug7I%2BKFB8i1Rc4KNZyMdOKmFvjEZmvIAiZD7grGkZ2BB4AJXhhvSwtU%2F32WFr0CDb5LWgLirquotMM6tp74GOqUBBMCOyJ9%2F0CZSpM%2B0h%2Ba6zc26oMq%2BpZBmbg9kEx5jynBoUvcAD%2FQ6q%2B8sWEo2GJzIz42SMPGh5S5CFmaus6c%2B075akk41uvbW957vy1SxK3qewnqJDyivup6XhB8p1IM%2Fr89t1SGClAqYjSfUvyCiX7oIxHXLuxvUHyUZYSSqOg8zjHIe9gc5BGH4%2Bit9pYYh9j47JO9b69gdxJsY8rOKnXfcTGuB&X-Amz-Signature=b023e2b82979e2987a3f38a0a617d218206db23278ec4a8f7588daf31c506c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
