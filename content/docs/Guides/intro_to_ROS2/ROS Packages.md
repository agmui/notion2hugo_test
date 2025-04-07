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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=ec511eeff6c06d42d3354f6e3dee58bab6ba33bfb6136cb79b1b09c2707eb98d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=a884476b1956f87bc7f4e1d891cc9be4fcb81f339de6866b40c6b1e420b1dea8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=236a7f3dfe7f757b28803b1b9996413d5515d8a70be23ee098fc6908861c2ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=692506a224f164cc88aaaa5b3c71bea158a119eeca76d4d4a6f5d1e6d21d953c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=3d82e844be214b292d62a501996f977711e5e20610b9337d78058d163c4d2e51&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=e04036610f09cb711f6cf2b7289b0e700dcadc61df87097ad060f9c7175880c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQTLVUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIM1wOFDmrocJDxRaT5a4AYzPwyEOSrSPHO%2Fziw%2BTQdgIhAPIU0gJX70hRJxQRT4mQaXf7WSuJsp9HodpCXHB0WmAyKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5kr%2BKhoLAphqdFVkq3AOrBq8TVAK85MltUiorCRpfomO1fTkbWU8nDbd%2Ff7raabvPXkLNeVVTU2Xs%2FepEbE%2Fz7Xcmj3sg%2FHoheCQMhoVhxbkrtSfEqH3QAaUdAShfGict5j7SVQ%2B5H95aQ66GvvliS7ghexOvMZpp33ppk4J3pmG%2FGCy7nzb%2Bwb%2FSPCTPTUGfYkVmix62qn86%2Bs%2Bklwd0FrVW8LBtmk95VaMadDNBQTiAfISitlifegi%2BDzqhcolIOI9ISJm0X86t7GjZZXdS%2BwvNrGGCD7Lf3tkIVRwLvn%2BYdvLKGcsrFyRLZdRd6Ia6hVWF1TohC%2BqGBfG7LjyeOuJ4ihnRPftENqxNOxuFBtP%2BzuIvNLt0s4QGnn7hm2s2RJ1zhSaEjj5Dy4GeWHexo5vEUD2yUod0tM1uj6qqjwz2bJzYvGFSa77EC7fvcUPAKkDWAkckCgkqiXm%2BaM%2B7k8hpD%2BNFJc56uzPUI%2FeIaNROQr3oMPkcahTfOzudWWvF4KJrAatBnblM5gzQUCnuZMTMZzqp5UDAY%2FSU74Kbrf%2F%2F31kvwZA2zafxfH94yJHXaiXOKnqmAwu2txA1FsrPPAqgB4QLrhOCoGrmDZ6yX1YNMFsE2bJOlWtlN58DJ1GBTlY8Yd2I5s8g3jCJpNC%2FBjqkAQIsATtHlcz%2BjjX%2FsCxV7U0bNSbKiR%2FnCyP9JRglfcDXIKEiLVoUEXxLt1jI%2FCwAM2XlKPk2A5jMjCVURVGFHYiWxxaCAm3JeiAQXYWu97cmyMv%2FwEz5FUP514Qvtz501xh%2FhksFa3l5t3qV57BJkgJGzgKfUi%2BSRT1zKXqZNidfFfwD6plU6G81ZfBr%2Fk3DJ5UvfV%2BxtSKnH%2FDaRovr3XatCNOc&X-Amz-Signature=343b466c9806a594b73b76ab0a8f3df1026cf5ce3f7dc048915f026fc37ecd75&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
