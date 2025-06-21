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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYH4ZEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr4JBzPgJcxt86%2B43WxYKnEDEZwuZnhndjiuEFpFs4AIgHxUrWNXqGXHOZB3avTbIRSTeScZgEJvIsosofCv2CaMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbuuvbICisX6wdajircA8MnVMJtzNlj8pejFB78cAbrGO55lZNPXkIHhgvdW1u6XAclKK3iUV%2BY9iP6Gd%2Fxwk1f73ZL8Pzce9%2FayGHMSdu7%2B2onpImxSSxdtyU%2FDvX1e7GtBw7uMyxRd8A4%2B31YaAADHeNdZ%2FCan3tImIG05m5IV9zzAxqaCdz86Q2ciq3dgF0sbz7KHw0MNBe9gRmwI16I7xbw%2BiEYbqazaQ3UhRMmpVVVK5Mt04iGbFrg8JEQ1%2BML7Sf8J9NEDzFzOLn1dRvQPKY4J%2FfPwyCyAWH7Ww%2Fb%2FYba40ygTYotmBvZHG1uWm2ObnB2c2Mo1woJRgq%2BAuImgZG0Ree1AmmrNxNUyoqmXUqdImmSxy0rzndUZEBFhFZwowgYf6Dx3kmt66nQ6N4OAfgQJbkX5%2B9IJbj3rZ7fyoho3%2BqLgjNUtILaPk7RsBBbcSQ%2BFzZ7dHvfS%2BrMtEdp%2Bb%2F6RInT5gRXwXYP9yDYoVrIxfE1nWoU93hYYo3CSmKK3Q%2Fvgd8uTv1otyMJNX7W70kSEb0%2BEyupMxo2%2FIZ8BaCdWWAE0t94qiPeIxMuqOTFV%2B9BbiQrjbMh7LQvSnFMeSCX22RtxEsqohPvKzUpgvpveZUIccMvfjYLliPccbGMBDzOXI6fBp6QMJCs3MIGOqUBaT2zvVZvJ%2FlkSK9GpyCXVgpNehlMqZCUSKn33%2BF3OmUEJG36GTcpxcDDqOjEC%2Fv5gMpyRW1D%2FJI210Qr1a1BmGq9k4e3XaesJxAjozaYGqMy6%2BGogmWypmOlA8vr5vMM%2B7E3L%2BACaYnUH9YhshhEf9u2pCBADBF1Ps5EZMzdniHvj99drJcDrAjmtxlg2qLM2rUsfU%2FDQT0QY1t5sEOhMnDiZXt%2F&X-Amz-Signature=a48d04ef65c51428bc18a24c290c8b2b0c29a4fc10b4d25209df6ce4a6071b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYH4ZEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr4JBzPgJcxt86%2B43WxYKnEDEZwuZnhndjiuEFpFs4AIgHxUrWNXqGXHOZB3avTbIRSTeScZgEJvIsosofCv2CaMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbuuvbICisX6wdajircA8MnVMJtzNlj8pejFB78cAbrGO55lZNPXkIHhgvdW1u6XAclKK3iUV%2BY9iP6Gd%2Fxwk1f73ZL8Pzce9%2FayGHMSdu7%2B2onpImxSSxdtyU%2FDvX1e7GtBw7uMyxRd8A4%2B31YaAADHeNdZ%2FCan3tImIG05m5IV9zzAxqaCdz86Q2ciq3dgF0sbz7KHw0MNBe9gRmwI16I7xbw%2BiEYbqazaQ3UhRMmpVVVK5Mt04iGbFrg8JEQ1%2BML7Sf8J9NEDzFzOLn1dRvQPKY4J%2FfPwyCyAWH7Ww%2Fb%2FYba40ygTYotmBvZHG1uWm2ObnB2c2Mo1woJRgq%2BAuImgZG0Ree1AmmrNxNUyoqmXUqdImmSxy0rzndUZEBFhFZwowgYf6Dx3kmt66nQ6N4OAfgQJbkX5%2B9IJbj3rZ7fyoho3%2BqLgjNUtILaPk7RsBBbcSQ%2BFzZ7dHvfS%2BrMtEdp%2Bb%2F6RInT5gRXwXYP9yDYoVrIxfE1nWoU93hYYo3CSmKK3Q%2Fvgd8uTv1otyMJNX7W70kSEb0%2BEyupMxo2%2FIZ8BaCdWWAE0t94qiPeIxMuqOTFV%2B9BbiQrjbMh7LQvSnFMeSCX22RtxEsqohPvKzUpgvpveZUIccMvfjYLliPccbGMBDzOXI6fBp6QMJCs3MIGOqUBaT2zvVZvJ%2FlkSK9GpyCXVgpNehlMqZCUSKn33%2BF3OmUEJG36GTcpxcDDqOjEC%2Fv5gMpyRW1D%2FJI210Qr1a1BmGq9k4e3XaesJxAjozaYGqMy6%2BGogmWypmOlA8vr5vMM%2B7E3L%2BACaYnUH9YhshhEf9u2pCBADBF1Ps5EZMzdniHvj99drJcDrAjmtxlg2qLM2rUsfU%2FDQT0QY1t5sEOhMnDiZXt%2F&X-Amz-Signature=5dcd18ea02c58d3996455f1a199b91ab44c7a8e8a76de79fb85671b037773222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYH4ZEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr4JBzPgJcxt86%2B43WxYKnEDEZwuZnhndjiuEFpFs4AIgHxUrWNXqGXHOZB3avTbIRSTeScZgEJvIsosofCv2CaMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbuuvbICisX6wdajircA8MnVMJtzNlj8pejFB78cAbrGO55lZNPXkIHhgvdW1u6XAclKK3iUV%2BY9iP6Gd%2Fxwk1f73ZL8Pzce9%2FayGHMSdu7%2B2onpImxSSxdtyU%2FDvX1e7GtBw7uMyxRd8A4%2B31YaAADHeNdZ%2FCan3tImIG05m5IV9zzAxqaCdz86Q2ciq3dgF0sbz7KHw0MNBe9gRmwI16I7xbw%2BiEYbqazaQ3UhRMmpVVVK5Mt04iGbFrg8JEQ1%2BML7Sf8J9NEDzFzOLn1dRvQPKY4J%2FfPwyCyAWH7Ww%2Fb%2FYba40ygTYotmBvZHG1uWm2ObnB2c2Mo1woJRgq%2BAuImgZG0Ree1AmmrNxNUyoqmXUqdImmSxy0rzndUZEBFhFZwowgYf6Dx3kmt66nQ6N4OAfgQJbkX5%2B9IJbj3rZ7fyoho3%2BqLgjNUtILaPk7RsBBbcSQ%2BFzZ7dHvfS%2BrMtEdp%2Bb%2F6RInT5gRXwXYP9yDYoVrIxfE1nWoU93hYYo3CSmKK3Q%2Fvgd8uTv1otyMJNX7W70kSEb0%2BEyupMxo2%2FIZ8BaCdWWAE0t94qiPeIxMuqOTFV%2B9BbiQrjbMh7LQvSnFMeSCX22RtxEsqohPvKzUpgvpveZUIccMvfjYLliPccbGMBDzOXI6fBp6QMJCs3MIGOqUBaT2zvVZvJ%2FlkSK9GpyCXVgpNehlMqZCUSKn33%2BF3OmUEJG36GTcpxcDDqOjEC%2Fv5gMpyRW1D%2FJI210Qr1a1BmGq9k4e3XaesJxAjozaYGqMy6%2BGogmWypmOlA8vr5vMM%2B7E3L%2BACaYnUH9YhshhEf9u2pCBADBF1Ps5EZMzdniHvj99drJcDrAjmtxlg2qLM2rUsfU%2FDQT0QY1t5sEOhMnDiZXt%2F&X-Amz-Signature=8380258f902cddf22d35fcb632419d0a3b9b0b109dce8456f5ad36776fd9f602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYH4ZEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr4JBzPgJcxt86%2B43WxYKnEDEZwuZnhndjiuEFpFs4AIgHxUrWNXqGXHOZB3avTbIRSTeScZgEJvIsosofCv2CaMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbuuvbICisX6wdajircA8MnVMJtzNlj8pejFB78cAbrGO55lZNPXkIHhgvdW1u6XAclKK3iUV%2BY9iP6Gd%2Fxwk1f73ZL8Pzce9%2FayGHMSdu7%2B2onpImxSSxdtyU%2FDvX1e7GtBw7uMyxRd8A4%2B31YaAADHeNdZ%2FCan3tImIG05m5IV9zzAxqaCdz86Q2ciq3dgF0sbz7KHw0MNBe9gRmwI16I7xbw%2BiEYbqazaQ3UhRMmpVVVK5Mt04iGbFrg8JEQ1%2BML7Sf8J9NEDzFzOLn1dRvQPKY4J%2FfPwyCyAWH7Ww%2Fb%2FYba40ygTYotmBvZHG1uWm2ObnB2c2Mo1woJRgq%2BAuImgZG0Ree1AmmrNxNUyoqmXUqdImmSxy0rzndUZEBFhFZwowgYf6Dx3kmt66nQ6N4OAfgQJbkX5%2B9IJbj3rZ7fyoho3%2BqLgjNUtILaPk7RsBBbcSQ%2BFzZ7dHvfS%2BrMtEdp%2Bb%2F6RInT5gRXwXYP9yDYoVrIxfE1nWoU93hYYo3CSmKK3Q%2Fvgd8uTv1otyMJNX7W70kSEb0%2BEyupMxo2%2FIZ8BaCdWWAE0t94qiPeIxMuqOTFV%2B9BbiQrjbMh7LQvSnFMeSCX22RtxEsqohPvKzUpgvpveZUIccMvfjYLliPccbGMBDzOXI6fBp6QMJCs3MIGOqUBaT2zvVZvJ%2FlkSK9GpyCXVgpNehlMqZCUSKn33%2BF3OmUEJG36GTcpxcDDqOjEC%2Fv5gMpyRW1D%2FJI210Qr1a1BmGq9k4e3XaesJxAjozaYGqMy6%2BGogmWypmOlA8vr5vMM%2B7E3L%2BACaYnUH9YhshhEf9u2pCBADBF1Ps5EZMzdniHvj99drJcDrAjmtxlg2qLM2rUsfU%2FDQT0QY1t5sEOhMnDiZXt%2F&X-Amz-Signature=96ad9b5dcb6f0894552f2a6239ff1c1cc75db2f6d401010215b9e00a62d1ff7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYH4ZEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr4JBzPgJcxt86%2B43WxYKnEDEZwuZnhndjiuEFpFs4AIgHxUrWNXqGXHOZB3avTbIRSTeScZgEJvIsosofCv2CaMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbuuvbICisX6wdajircA8MnVMJtzNlj8pejFB78cAbrGO55lZNPXkIHhgvdW1u6XAclKK3iUV%2BY9iP6Gd%2Fxwk1f73ZL8Pzce9%2FayGHMSdu7%2B2onpImxSSxdtyU%2FDvX1e7GtBw7uMyxRd8A4%2B31YaAADHeNdZ%2FCan3tImIG05m5IV9zzAxqaCdz86Q2ciq3dgF0sbz7KHw0MNBe9gRmwI16I7xbw%2BiEYbqazaQ3UhRMmpVVVK5Mt04iGbFrg8JEQ1%2BML7Sf8J9NEDzFzOLn1dRvQPKY4J%2FfPwyCyAWH7Ww%2Fb%2FYba40ygTYotmBvZHG1uWm2ObnB2c2Mo1woJRgq%2BAuImgZG0Ree1AmmrNxNUyoqmXUqdImmSxy0rzndUZEBFhFZwowgYf6Dx3kmt66nQ6N4OAfgQJbkX5%2B9IJbj3rZ7fyoho3%2BqLgjNUtILaPk7RsBBbcSQ%2BFzZ7dHvfS%2BrMtEdp%2Bb%2F6RInT5gRXwXYP9yDYoVrIxfE1nWoU93hYYo3CSmKK3Q%2Fvgd8uTv1otyMJNX7W70kSEb0%2BEyupMxo2%2FIZ8BaCdWWAE0t94qiPeIxMuqOTFV%2B9BbiQrjbMh7LQvSnFMeSCX22RtxEsqohPvKzUpgvpveZUIccMvfjYLliPccbGMBDzOXI6fBp6QMJCs3MIGOqUBaT2zvVZvJ%2FlkSK9GpyCXVgpNehlMqZCUSKn33%2BF3OmUEJG36GTcpxcDDqOjEC%2Fv5gMpyRW1D%2FJI210Qr1a1BmGq9k4e3XaesJxAjozaYGqMy6%2BGogmWypmOlA8vr5vMM%2B7E3L%2BACaYnUH9YhshhEf9u2pCBADBF1Ps5EZMzdniHvj99drJcDrAjmtxlg2qLM2rUsfU%2FDQT0QY1t5sEOhMnDiZXt%2F&X-Amz-Signature=6c42016c3a078b890a8231d2b9d1fbef05076e41496f9933f574c2518c132bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYH4ZEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr4JBzPgJcxt86%2B43WxYKnEDEZwuZnhndjiuEFpFs4AIgHxUrWNXqGXHOZB3avTbIRSTeScZgEJvIsosofCv2CaMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbuuvbICisX6wdajircA8MnVMJtzNlj8pejFB78cAbrGO55lZNPXkIHhgvdW1u6XAclKK3iUV%2BY9iP6Gd%2Fxwk1f73ZL8Pzce9%2FayGHMSdu7%2B2onpImxSSxdtyU%2FDvX1e7GtBw7uMyxRd8A4%2B31YaAADHeNdZ%2FCan3tImIG05m5IV9zzAxqaCdz86Q2ciq3dgF0sbz7KHw0MNBe9gRmwI16I7xbw%2BiEYbqazaQ3UhRMmpVVVK5Mt04iGbFrg8JEQ1%2BML7Sf8J9NEDzFzOLn1dRvQPKY4J%2FfPwyCyAWH7Ww%2Fb%2FYba40ygTYotmBvZHG1uWm2ObnB2c2Mo1woJRgq%2BAuImgZG0Ree1AmmrNxNUyoqmXUqdImmSxy0rzndUZEBFhFZwowgYf6Dx3kmt66nQ6N4OAfgQJbkX5%2B9IJbj3rZ7fyoho3%2BqLgjNUtILaPk7RsBBbcSQ%2BFzZ7dHvfS%2BrMtEdp%2Bb%2F6RInT5gRXwXYP9yDYoVrIxfE1nWoU93hYYo3CSmKK3Q%2Fvgd8uTv1otyMJNX7W70kSEb0%2BEyupMxo2%2FIZ8BaCdWWAE0t94qiPeIxMuqOTFV%2B9BbiQrjbMh7LQvSnFMeSCX22RtxEsqohPvKzUpgvpveZUIccMvfjYLliPccbGMBDzOXI6fBp6QMJCs3MIGOqUBaT2zvVZvJ%2FlkSK9GpyCXVgpNehlMqZCUSKn33%2BF3OmUEJG36GTcpxcDDqOjEC%2Fv5gMpyRW1D%2FJI210Qr1a1BmGq9k4e3XaesJxAjozaYGqMy6%2BGogmWypmOlA8vr5vMM%2B7E3L%2BACaYnUH9YhshhEf9u2pCBADBF1Ps5EZMzdniHvj99drJcDrAjmtxlg2qLM2rUsfU%2FDQT0QY1t5sEOhMnDiZXt%2F&X-Amz-Signature=374042f7a074dc9d776f7389f05b3e224f06019b7168af8574e6205cafdef69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYH4ZEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmr4JBzPgJcxt86%2B43WxYKnEDEZwuZnhndjiuEFpFs4AIgHxUrWNXqGXHOZB3avTbIRSTeScZgEJvIsosofCv2CaMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbuuvbICisX6wdajircA8MnVMJtzNlj8pejFB78cAbrGO55lZNPXkIHhgvdW1u6XAclKK3iUV%2BY9iP6Gd%2Fxwk1f73ZL8Pzce9%2FayGHMSdu7%2B2onpImxSSxdtyU%2FDvX1e7GtBw7uMyxRd8A4%2B31YaAADHeNdZ%2FCan3tImIG05m5IV9zzAxqaCdz86Q2ciq3dgF0sbz7KHw0MNBe9gRmwI16I7xbw%2BiEYbqazaQ3UhRMmpVVVK5Mt04iGbFrg8JEQ1%2BML7Sf8J9NEDzFzOLn1dRvQPKY4J%2FfPwyCyAWH7Ww%2Fb%2FYba40ygTYotmBvZHG1uWm2ObnB2c2Mo1woJRgq%2BAuImgZG0Ree1AmmrNxNUyoqmXUqdImmSxy0rzndUZEBFhFZwowgYf6Dx3kmt66nQ6N4OAfgQJbkX5%2B9IJbj3rZ7fyoho3%2BqLgjNUtILaPk7RsBBbcSQ%2BFzZ7dHvfS%2BrMtEdp%2Bb%2F6RInT5gRXwXYP9yDYoVrIxfE1nWoU93hYYo3CSmKK3Q%2Fvgd8uTv1otyMJNX7W70kSEb0%2BEyupMxo2%2FIZ8BaCdWWAE0t94qiPeIxMuqOTFV%2B9BbiQrjbMh7LQvSnFMeSCX22RtxEsqohPvKzUpgvpveZUIccMvfjYLliPccbGMBDzOXI6fBp6QMJCs3MIGOqUBaT2zvVZvJ%2FlkSK9GpyCXVgpNehlMqZCUSKn33%2BF3OmUEJG36GTcpxcDDqOjEC%2Fv5gMpyRW1D%2FJI210Qr1a1BmGq9k4e3XaesJxAjozaYGqMy6%2BGogmWypmOlA8vr5vMM%2B7E3L%2BACaYnUH9YhshhEf9u2pCBADBF1Ps5EZMzdniHvj99drJcDrAjmtxlg2qLM2rUsfU%2FDQT0QY1t5sEOhMnDiZXt%2F&X-Amz-Signature=1f74425b9fa53b511910443b870d7d0160b395d25bc0a8e9be9768685e3b70cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
