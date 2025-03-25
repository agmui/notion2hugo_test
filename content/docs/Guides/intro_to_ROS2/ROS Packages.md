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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5LLXTQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxg%2BYH3NB6qsB7KnwYBGl%2FZLytmJTqOgmqjH8X%2FFPJ%2FAiBUZQtCy25kQzvaWjCFpOSqF8kj37o0%2FuIOtDylirnr6yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4a1m%2FbhH4H%2BIJQHOKtwDpZ6UI0xFKQvrfFHjfDmRvipqnpuWRcdDo6u8OMp%2FKlcxYDbkyO8YqHvWVXxRbKgzuSB9WWltcebyy%2BJaAK5cYu8uqcMUiVHa1ZeweigpOklo2fn8kc3OW6qhD5yfsWa7jmLbJpj2yDiKUmvea7AASxqfe6mFjnNJ1YOc%2BE7F15ClH74L7UmjtGxiQDezFe%2Bfx2Xrj07pJn354TyNR7Tz7Ze2EoSKe9akRgUsXcGyU9xDBF7xfjHYjsUyxYr2S%2FRp5dFIKfaTamsBv0%2BJz%2FFNZaCj3WuQHNmZ5N21iSLkJUGzZ4%2FkwAOGV3X%2Be%2BwUFqrfzyVqh4bLE7dRTzTzrkxpsxMm%2BhapKuXf2rg1fYOMS8YvAj3sOL0Q6DnYprFtFm4kLodHvtnaieLTUx9V2kmKkxpN%2F34qfUn5%2FkNVnZ%2FzHACkQdLIdR2YBS1tgeeyucyBEESQfrzJcyfSkdKzb0YrbXjjQNZzWAD%2FCReDFYBXqF8hcS55HAdvoeghyw5VOELkl2Q9mGhz%2FNnwjks8%2BVcr64YpQNSnsL%2FPWX5TLgIXrD9G5KrCqVrFjNErKVaZX%2FQhpze%2F13N5FCydSDFR3DGl8Vdj06KmFmUa1OFWkSX1B1uUSXzDLSgb5vhOyckw07KIvwY6pgEF%2BUlQx3dO1r%2FDv7j3wh%2Bu3lVoHxy2QdC6RJQNRz5w52wtVeyi7%2BZWyXWh%2F1idkoO6Lc7ual5b9gusDOXUoi0CcsTLFkHdJbm5fMxBCuxPa0xqC4j%2BOQR52Niefs6nD2IQve%2F4VvJ7r%2BCqmiEg0iPxCVJ%2Bv%2BwTu7kCmBTEBmkvZiZrTdpUF0GcjR9uVZpv1OBon7K7o%2BEIXI41qJeM4cVBFlZD8D2a&X-Amz-Signature=3bce82b383d29a755e620394117398472358ac833623668ca1e1a82a3f5155ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5LLXTQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxg%2BYH3NB6qsB7KnwYBGl%2FZLytmJTqOgmqjH8X%2FFPJ%2FAiBUZQtCy25kQzvaWjCFpOSqF8kj37o0%2FuIOtDylirnr6yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4a1m%2FbhH4H%2BIJQHOKtwDpZ6UI0xFKQvrfFHjfDmRvipqnpuWRcdDo6u8OMp%2FKlcxYDbkyO8YqHvWVXxRbKgzuSB9WWltcebyy%2BJaAK5cYu8uqcMUiVHa1ZeweigpOklo2fn8kc3OW6qhD5yfsWa7jmLbJpj2yDiKUmvea7AASxqfe6mFjnNJ1YOc%2BE7F15ClH74L7UmjtGxiQDezFe%2Bfx2Xrj07pJn354TyNR7Tz7Ze2EoSKe9akRgUsXcGyU9xDBF7xfjHYjsUyxYr2S%2FRp5dFIKfaTamsBv0%2BJz%2FFNZaCj3WuQHNmZ5N21iSLkJUGzZ4%2FkwAOGV3X%2Be%2BwUFqrfzyVqh4bLE7dRTzTzrkxpsxMm%2BhapKuXf2rg1fYOMS8YvAj3sOL0Q6DnYprFtFm4kLodHvtnaieLTUx9V2kmKkxpN%2F34qfUn5%2FkNVnZ%2FzHACkQdLIdR2YBS1tgeeyucyBEESQfrzJcyfSkdKzb0YrbXjjQNZzWAD%2FCReDFYBXqF8hcS55HAdvoeghyw5VOELkl2Q9mGhz%2FNnwjks8%2BVcr64YpQNSnsL%2FPWX5TLgIXrD9G5KrCqVrFjNErKVaZX%2FQhpze%2F13N5FCydSDFR3DGl8Vdj06KmFmUa1OFWkSX1B1uUSXzDLSgb5vhOyckw07KIvwY6pgEF%2BUlQx3dO1r%2FDv7j3wh%2Bu3lVoHxy2QdC6RJQNRz5w52wtVeyi7%2BZWyXWh%2F1idkoO6Lc7ual5b9gusDOXUoi0CcsTLFkHdJbm5fMxBCuxPa0xqC4j%2BOQR52Niefs6nD2IQve%2F4VvJ7r%2BCqmiEg0iPxCVJ%2Bv%2BwTu7kCmBTEBmkvZiZrTdpUF0GcjR9uVZpv1OBon7K7o%2BEIXI41qJeM4cVBFlZD8D2a&X-Amz-Signature=32d7d43a18b13a8ced99c8279d91302fb8c8e3939207e721833380ca67cd2fed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5LLXTQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxg%2BYH3NB6qsB7KnwYBGl%2FZLytmJTqOgmqjH8X%2FFPJ%2FAiBUZQtCy25kQzvaWjCFpOSqF8kj37o0%2FuIOtDylirnr6yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4a1m%2FbhH4H%2BIJQHOKtwDpZ6UI0xFKQvrfFHjfDmRvipqnpuWRcdDo6u8OMp%2FKlcxYDbkyO8YqHvWVXxRbKgzuSB9WWltcebyy%2BJaAK5cYu8uqcMUiVHa1ZeweigpOklo2fn8kc3OW6qhD5yfsWa7jmLbJpj2yDiKUmvea7AASxqfe6mFjnNJ1YOc%2BE7F15ClH74L7UmjtGxiQDezFe%2Bfx2Xrj07pJn354TyNR7Tz7Ze2EoSKe9akRgUsXcGyU9xDBF7xfjHYjsUyxYr2S%2FRp5dFIKfaTamsBv0%2BJz%2FFNZaCj3WuQHNmZ5N21iSLkJUGzZ4%2FkwAOGV3X%2Be%2BwUFqrfzyVqh4bLE7dRTzTzrkxpsxMm%2BhapKuXf2rg1fYOMS8YvAj3sOL0Q6DnYprFtFm4kLodHvtnaieLTUx9V2kmKkxpN%2F34qfUn5%2FkNVnZ%2FzHACkQdLIdR2YBS1tgeeyucyBEESQfrzJcyfSkdKzb0YrbXjjQNZzWAD%2FCReDFYBXqF8hcS55HAdvoeghyw5VOELkl2Q9mGhz%2FNnwjks8%2BVcr64YpQNSnsL%2FPWX5TLgIXrD9G5KrCqVrFjNErKVaZX%2FQhpze%2F13N5FCydSDFR3DGl8Vdj06KmFmUa1OFWkSX1B1uUSXzDLSgb5vhOyckw07KIvwY6pgEF%2BUlQx3dO1r%2FDv7j3wh%2Bu3lVoHxy2QdC6RJQNRz5w52wtVeyi7%2BZWyXWh%2F1idkoO6Lc7ual5b9gusDOXUoi0CcsTLFkHdJbm5fMxBCuxPa0xqC4j%2BOQR52Niefs6nD2IQve%2F4VvJ7r%2BCqmiEg0iPxCVJ%2Bv%2BwTu7kCmBTEBmkvZiZrTdpUF0GcjR9uVZpv1OBon7K7o%2BEIXI41qJeM4cVBFlZD8D2a&X-Amz-Signature=058e34c037835e89d12de5080c7f83b41fd87af675c033f093ae11f9c72bc344&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5LLXTQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxg%2BYH3NB6qsB7KnwYBGl%2FZLytmJTqOgmqjH8X%2FFPJ%2FAiBUZQtCy25kQzvaWjCFpOSqF8kj37o0%2FuIOtDylirnr6yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4a1m%2FbhH4H%2BIJQHOKtwDpZ6UI0xFKQvrfFHjfDmRvipqnpuWRcdDo6u8OMp%2FKlcxYDbkyO8YqHvWVXxRbKgzuSB9WWltcebyy%2BJaAK5cYu8uqcMUiVHa1ZeweigpOklo2fn8kc3OW6qhD5yfsWa7jmLbJpj2yDiKUmvea7AASxqfe6mFjnNJ1YOc%2BE7F15ClH74L7UmjtGxiQDezFe%2Bfx2Xrj07pJn354TyNR7Tz7Ze2EoSKe9akRgUsXcGyU9xDBF7xfjHYjsUyxYr2S%2FRp5dFIKfaTamsBv0%2BJz%2FFNZaCj3WuQHNmZ5N21iSLkJUGzZ4%2FkwAOGV3X%2Be%2BwUFqrfzyVqh4bLE7dRTzTzrkxpsxMm%2BhapKuXf2rg1fYOMS8YvAj3sOL0Q6DnYprFtFm4kLodHvtnaieLTUx9V2kmKkxpN%2F34qfUn5%2FkNVnZ%2FzHACkQdLIdR2YBS1tgeeyucyBEESQfrzJcyfSkdKzb0YrbXjjQNZzWAD%2FCReDFYBXqF8hcS55HAdvoeghyw5VOELkl2Q9mGhz%2FNnwjks8%2BVcr64YpQNSnsL%2FPWX5TLgIXrD9G5KrCqVrFjNErKVaZX%2FQhpze%2F13N5FCydSDFR3DGl8Vdj06KmFmUa1OFWkSX1B1uUSXzDLSgb5vhOyckw07KIvwY6pgEF%2BUlQx3dO1r%2FDv7j3wh%2Bu3lVoHxy2QdC6RJQNRz5w52wtVeyi7%2BZWyXWh%2F1idkoO6Lc7ual5b9gusDOXUoi0CcsTLFkHdJbm5fMxBCuxPa0xqC4j%2BOQR52Niefs6nD2IQve%2F4VvJ7r%2BCqmiEg0iPxCVJ%2Bv%2BwTu7kCmBTEBmkvZiZrTdpUF0GcjR9uVZpv1OBon7K7o%2BEIXI41qJeM4cVBFlZD8D2a&X-Amz-Signature=f046cdfa8c9346f2b5fd6008e95142dfa259848396e8d0f14624e14c8a60c570&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5LLXTQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxg%2BYH3NB6qsB7KnwYBGl%2FZLytmJTqOgmqjH8X%2FFPJ%2FAiBUZQtCy25kQzvaWjCFpOSqF8kj37o0%2FuIOtDylirnr6yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4a1m%2FbhH4H%2BIJQHOKtwDpZ6UI0xFKQvrfFHjfDmRvipqnpuWRcdDo6u8OMp%2FKlcxYDbkyO8YqHvWVXxRbKgzuSB9WWltcebyy%2BJaAK5cYu8uqcMUiVHa1ZeweigpOklo2fn8kc3OW6qhD5yfsWa7jmLbJpj2yDiKUmvea7AASxqfe6mFjnNJ1YOc%2BE7F15ClH74L7UmjtGxiQDezFe%2Bfx2Xrj07pJn354TyNR7Tz7Ze2EoSKe9akRgUsXcGyU9xDBF7xfjHYjsUyxYr2S%2FRp5dFIKfaTamsBv0%2BJz%2FFNZaCj3WuQHNmZ5N21iSLkJUGzZ4%2FkwAOGV3X%2Be%2BwUFqrfzyVqh4bLE7dRTzTzrkxpsxMm%2BhapKuXf2rg1fYOMS8YvAj3sOL0Q6DnYprFtFm4kLodHvtnaieLTUx9V2kmKkxpN%2F34qfUn5%2FkNVnZ%2FzHACkQdLIdR2YBS1tgeeyucyBEESQfrzJcyfSkdKzb0YrbXjjQNZzWAD%2FCReDFYBXqF8hcS55HAdvoeghyw5VOELkl2Q9mGhz%2FNnwjks8%2BVcr64YpQNSnsL%2FPWX5TLgIXrD9G5KrCqVrFjNErKVaZX%2FQhpze%2F13N5FCydSDFR3DGl8Vdj06KmFmUa1OFWkSX1B1uUSXzDLSgb5vhOyckw07KIvwY6pgEF%2BUlQx3dO1r%2FDv7j3wh%2Bu3lVoHxy2QdC6RJQNRz5w52wtVeyi7%2BZWyXWh%2F1idkoO6Lc7ual5b9gusDOXUoi0CcsTLFkHdJbm5fMxBCuxPa0xqC4j%2BOQR52Niefs6nD2IQve%2F4VvJ7r%2BCqmiEg0iPxCVJ%2Bv%2BwTu7kCmBTEBmkvZiZrTdpUF0GcjR9uVZpv1OBon7K7o%2BEIXI41qJeM4cVBFlZD8D2a&X-Amz-Signature=337f4fa30ed5f2a6678bdadfe3a3d4634dc33029831a83ef499556c5021baa46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5LLXTQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxg%2BYH3NB6qsB7KnwYBGl%2FZLytmJTqOgmqjH8X%2FFPJ%2FAiBUZQtCy25kQzvaWjCFpOSqF8kj37o0%2FuIOtDylirnr6yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4a1m%2FbhH4H%2BIJQHOKtwDpZ6UI0xFKQvrfFHjfDmRvipqnpuWRcdDo6u8OMp%2FKlcxYDbkyO8YqHvWVXxRbKgzuSB9WWltcebyy%2BJaAK5cYu8uqcMUiVHa1ZeweigpOklo2fn8kc3OW6qhD5yfsWa7jmLbJpj2yDiKUmvea7AASxqfe6mFjnNJ1YOc%2BE7F15ClH74L7UmjtGxiQDezFe%2Bfx2Xrj07pJn354TyNR7Tz7Ze2EoSKe9akRgUsXcGyU9xDBF7xfjHYjsUyxYr2S%2FRp5dFIKfaTamsBv0%2BJz%2FFNZaCj3WuQHNmZ5N21iSLkJUGzZ4%2FkwAOGV3X%2Be%2BwUFqrfzyVqh4bLE7dRTzTzrkxpsxMm%2BhapKuXf2rg1fYOMS8YvAj3sOL0Q6DnYprFtFm4kLodHvtnaieLTUx9V2kmKkxpN%2F34qfUn5%2FkNVnZ%2FzHACkQdLIdR2YBS1tgeeyucyBEESQfrzJcyfSkdKzb0YrbXjjQNZzWAD%2FCReDFYBXqF8hcS55HAdvoeghyw5VOELkl2Q9mGhz%2FNnwjks8%2BVcr64YpQNSnsL%2FPWX5TLgIXrD9G5KrCqVrFjNErKVaZX%2FQhpze%2F13N5FCydSDFR3DGl8Vdj06KmFmUa1OFWkSX1B1uUSXzDLSgb5vhOyckw07KIvwY6pgEF%2BUlQx3dO1r%2FDv7j3wh%2Bu3lVoHxy2QdC6RJQNRz5w52wtVeyi7%2BZWyXWh%2F1idkoO6Lc7ual5b9gusDOXUoi0CcsTLFkHdJbm5fMxBCuxPa0xqC4j%2BOQR52Niefs6nD2IQve%2F4VvJ7r%2BCqmiEg0iPxCVJ%2Bv%2BwTu7kCmBTEBmkvZiZrTdpUF0GcjR9uVZpv1OBon7K7o%2BEIXI41qJeM4cVBFlZD8D2a&X-Amz-Signature=b44c7325b82af05411a58e1e1b911ce2c5f6e51b484c54818d32e193418dd793&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5LLXTQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxg%2BYH3NB6qsB7KnwYBGl%2FZLytmJTqOgmqjH8X%2FFPJ%2FAiBUZQtCy25kQzvaWjCFpOSqF8kj37o0%2FuIOtDylirnr6yqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4a1m%2FbhH4H%2BIJQHOKtwDpZ6UI0xFKQvrfFHjfDmRvipqnpuWRcdDo6u8OMp%2FKlcxYDbkyO8YqHvWVXxRbKgzuSB9WWltcebyy%2BJaAK5cYu8uqcMUiVHa1ZeweigpOklo2fn8kc3OW6qhD5yfsWa7jmLbJpj2yDiKUmvea7AASxqfe6mFjnNJ1YOc%2BE7F15ClH74L7UmjtGxiQDezFe%2Bfx2Xrj07pJn354TyNR7Tz7Ze2EoSKe9akRgUsXcGyU9xDBF7xfjHYjsUyxYr2S%2FRp5dFIKfaTamsBv0%2BJz%2FFNZaCj3WuQHNmZ5N21iSLkJUGzZ4%2FkwAOGV3X%2Be%2BwUFqrfzyVqh4bLE7dRTzTzrkxpsxMm%2BhapKuXf2rg1fYOMS8YvAj3sOL0Q6DnYprFtFm4kLodHvtnaieLTUx9V2kmKkxpN%2F34qfUn5%2FkNVnZ%2FzHACkQdLIdR2YBS1tgeeyucyBEESQfrzJcyfSkdKzb0YrbXjjQNZzWAD%2FCReDFYBXqF8hcS55HAdvoeghyw5VOELkl2Q9mGhz%2FNnwjks8%2BVcr64YpQNSnsL%2FPWX5TLgIXrD9G5KrCqVrFjNErKVaZX%2FQhpze%2F13N5FCydSDFR3DGl8Vdj06KmFmUa1OFWkSX1B1uUSXzDLSgb5vhOyckw07KIvwY6pgEF%2BUlQx3dO1r%2FDv7j3wh%2Bu3lVoHxy2QdC6RJQNRz5w52wtVeyi7%2BZWyXWh%2F1idkoO6Lc7ual5b9gusDOXUoi0CcsTLFkHdJbm5fMxBCuxPa0xqC4j%2BOQR52Niefs6nD2IQve%2F4VvJ7r%2BCqmiEg0iPxCVJ%2Bv%2BwTu7kCmBTEBmkvZiZrTdpUF0GcjR9uVZpv1OBon7K7o%2BEIXI41qJeM4cVBFlZD8D2a&X-Amz-Signature=05b9dae07470bd4a228ebb716efbbb22e23af43cb7a5eea507c00d58ffb185fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
