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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=db5434b30612534d52360934ace70ece623f90a124f8ca10a87a1702f0e77beb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=abc24069f09954cc67c8e7d5364448a32f57eb4a1bc841846323edb859f7f60e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=b963d6c1dce9602763035ccfe37e5b4aae4b86333db946de572a3dadd01d8b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=31c9348aa01919925420f1e88952ba76379e7ccec293678d845a1d6875cc725d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=da1b41f2597651bd40efe052543f9afcb541550d6223c012e6b711be1fc648e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=ec1c8836f26baedc7b65716a4adb8ca6f8db56f6f7d13bac3cc4cbc27f9ba5af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDQ5OFE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHFtg2THDurhOGo2f72KWuaHUUL7fvgSJssLrlye6WLhAiBSERFPp0RfJlGqzjiKjqNrptRIBUBJbFH6ABHZUaKBoyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMlFY0iEP0yuKnplFWKtwDgmbB5yhLKrVVB4jAP%2B83JWz15SBGLhAzNtw6MZTn6dyqC22e9dYOpykUBmvJsg6amf62rYol1szSaVb6GJsCsw5%2FmXxI7WEensCSEfCv1DzQN5AsPrjYfS3kLuXUeXLf%2BNV6%2FjHsXJrivO9sVG9ONXjSwNHgBV07tGDieJJI0B7PMS4IUG44Y834oeFEPxoKhC6VFuamS6aJ5oVPzmxRX0AUBsGRztlROkKoS7fWtDckBPD2OZofNmblnWwa6KklCL1%2FzsnlHDhtT7Vrt%2F69r%2FRIkT6Yw0VDr6Uo9%2BFRGdpwsSw7KDqc72M1JUl5P1pZKhbOtRmde7kYzLTxES9t90%2FubmeBtA7AFrjYlk5%2B5u1H%2B8s7f9FPcLelK%2FLpstCcFpH4RMzNnq1doXAudvsBH7oslq4y2Oqk0uNZ6OLg%2FcT3%2BHsuKKnwekoVKOPEnGUu3FK%2F0GyG2gjL8OUJPjuCuz8p%2FtiqbNMF5S3HRWRu8dLBx2RRSxUv%2BmSpisUvs4NgndHgc9FemovNxX3bY8Oku8Rp7I3i0GzcnVMxyp3ftNvgfbsCDODYk8aqkFcHCL0k8rF4oGr8IfFwPi34XqEA9r%2FCeP3NdtMAJAdrdkns3gxtJK4wKegjLP%2FrNrEwzp76vQY6pgFusliBxj9UJvl6OBBO9DsQ9BTyxyWQqksm8OGewMYETH2%2Bx7mE1TVKmCACpQ27mbr3jkT8cjsY0Ca7PH0IAwuXp61S8EDeuXMmwmvgP%2BkzV88cMZDhq%2BUKSKQRYVnSZ7Wq0vfZHT838QWr1A%2Bb0iB%2FPvECzmk2dnemahaspbGPHuO1N3CIq%2FYOd%2Fw4OlFfL0aJqs3qxg7VI785IBDpyoB5M%2BwOy46V&X-Amz-Signature=9211326b6e441727a8aea8ad33e4eb770fa7d56f479ebc24c0657b2f80f8a3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
