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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6J52Y2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDMqSt310pND0rDHvPM%2F1hHeUFDOTYQRuLVkkR4mNCs3AiAhXNxagEH8NBXVaiakWhRea4s3yhStyiC5MpLcXd%2F4OSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuin8mOLC7J%2BcQ1B8KtwDOFcPBZYCsYPbm7m49rStfm%2BcCSbXao43OlVhf%2BN3Fxan4VoYdTFAImfhxXVQ1afmBxzBxrdeIH%2BrPr5gG3XQj%2FzJZHz1ZgLg9HSVBpFz%2F7kar0lknwHn47HBCBRRQECmydHrJCUADBFLnApja96Ot6MJJjXBTl7gWnps8wgAJGIRtjyIY37mUo77RzYyIARNaIxbXjo0gCm31AVo2l5TGzL9KwnpAA8COeios3YK3eUkZX3zW5t7FUtZVM3tq%2B%2BI4Bv2L3NUF5uY52lz4h4fsxsiHzheY560ShZl7IDy7dg2nq%2BIiwBWg%2Fv5f1578I4aZVu95CFLASfwvCDwf5Ib08LM9qyQQZb1SFXUFZwgxJkhlgXCuXWQG%2BGWHk%2BUXa496WmLAQdzjFbLEGmGFpSsOZ52JYl70ODua9%2BAMNv0cARPu4gOxOF9ZWf6nJQ2cqwBkuxn5nCdaD6tj23MT9aNaEBeDC6ptsYOoJXtY%2B0eCxoEV4Qsl2AATZZY3KFS7kHiuS0t%2FXq%2F%2F%2Ffu52%2Baie3iREljxjlXyDRzf7IS0K%2B4uD6ifjxf3G85Me9kZs%2FYtbXk6iONcXFi8a%2B0jluq6nKdj%2FiDAOylSdE470LEccZOOEKa2egm1hpvBFR3NgwwnZTSvQY6pgGqGL1ICUhFMaZUvgLN9ygxts%2BpyB2Du9y9An6bJF7XESo8JLHSVLm7QQpy3EKWCFtUqvw3NFugICcSrHOjWXCnZdVmztj7rJtDqNQWASTdcs%2F6ik%2Bu9y7wU7xCYTZJX12U5GoLvVnByCGGdN3JNA772dfY%2FX0k6HMvDKOCUuN92%2BjoPtMnA7J81Qfuv8c8SB7pOQ6HFDUg2OH9zoTUsiGanxj7XL1A&X-Amz-Signature=ca99a885cc85fdd49daf5a2961e90a8dfcc07eb98c20954a1431b840d5c72dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6J52Y2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDMqSt310pND0rDHvPM%2F1hHeUFDOTYQRuLVkkR4mNCs3AiAhXNxagEH8NBXVaiakWhRea4s3yhStyiC5MpLcXd%2F4OSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuin8mOLC7J%2BcQ1B8KtwDOFcPBZYCsYPbm7m49rStfm%2BcCSbXao43OlVhf%2BN3Fxan4VoYdTFAImfhxXVQ1afmBxzBxrdeIH%2BrPr5gG3XQj%2FzJZHz1ZgLg9HSVBpFz%2F7kar0lknwHn47HBCBRRQECmydHrJCUADBFLnApja96Ot6MJJjXBTl7gWnps8wgAJGIRtjyIY37mUo77RzYyIARNaIxbXjo0gCm31AVo2l5TGzL9KwnpAA8COeios3YK3eUkZX3zW5t7FUtZVM3tq%2B%2BI4Bv2L3NUF5uY52lz4h4fsxsiHzheY560ShZl7IDy7dg2nq%2BIiwBWg%2Fv5f1578I4aZVu95CFLASfwvCDwf5Ib08LM9qyQQZb1SFXUFZwgxJkhlgXCuXWQG%2BGWHk%2BUXa496WmLAQdzjFbLEGmGFpSsOZ52JYl70ODua9%2BAMNv0cARPu4gOxOF9ZWf6nJQ2cqwBkuxn5nCdaD6tj23MT9aNaEBeDC6ptsYOoJXtY%2B0eCxoEV4Qsl2AATZZY3KFS7kHiuS0t%2FXq%2F%2F%2Ffu52%2Baie3iREljxjlXyDRzf7IS0K%2B4uD6ifjxf3G85Me9kZs%2FYtbXk6iONcXFi8a%2B0jluq6nKdj%2FiDAOylSdE470LEccZOOEKa2egm1hpvBFR3NgwwnZTSvQY6pgGqGL1ICUhFMaZUvgLN9ygxts%2BpyB2Du9y9An6bJF7XESo8JLHSVLm7QQpy3EKWCFtUqvw3NFugICcSrHOjWXCnZdVmztj7rJtDqNQWASTdcs%2F6ik%2Bu9y7wU7xCYTZJX12U5GoLvVnByCGGdN3JNA772dfY%2FX0k6HMvDKOCUuN92%2BjoPtMnA7J81Qfuv8c8SB7pOQ6HFDUg2OH9zoTUsiGanxj7XL1A&X-Amz-Signature=70f19aa739d36178c038c935144cde5388f0d99ef8e63ba6506869faa84a7bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6J52Y2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDMqSt310pND0rDHvPM%2F1hHeUFDOTYQRuLVkkR4mNCs3AiAhXNxagEH8NBXVaiakWhRea4s3yhStyiC5MpLcXd%2F4OSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuin8mOLC7J%2BcQ1B8KtwDOFcPBZYCsYPbm7m49rStfm%2BcCSbXao43OlVhf%2BN3Fxan4VoYdTFAImfhxXVQ1afmBxzBxrdeIH%2BrPr5gG3XQj%2FzJZHz1ZgLg9HSVBpFz%2F7kar0lknwHn47HBCBRRQECmydHrJCUADBFLnApja96Ot6MJJjXBTl7gWnps8wgAJGIRtjyIY37mUo77RzYyIARNaIxbXjo0gCm31AVo2l5TGzL9KwnpAA8COeios3YK3eUkZX3zW5t7FUtZVM3tq%2B%2BI4Bv2L3NUF5uY52lz4h4fsxsiHzheY560ShZl7IDy7dg2nq%2BIiwBWg%2Fv5f1578I4aZVu95CFLASfwvCDwf5Ib08LM9qyQQZb1SFXUFZwgxJkhlgXCuXWQG%2BGWHk%2BUXa496WmLAQdzjFbLEGmGFpSsOZ52JYl70ODua9%2BAMNv0cARPu4gOxOF9ZWf6nJQ2cqwBkuxn5nCdaD6tj23MT9aNaEBeDC6ptsYOoJXtY%2B0eCxoEV4Qsl2AATZZY3KFS7kHiuS0t%2FXq%2F%2F%2Ffu52%2Baie3iREljxjlXyDRzf7IS0K%2B4uD6ifjxf3G85Me9kZs%2FYtbXk6iONcXFi8a%2B0jluq6nKdj%2FiDAOylSdE470LEccZOOEKa2egm1hpvBFR3NgwwnZTSvQY6pgGqGL1ICUhFMaZUvgLN9ygxts%2BpyB2Du9y9An6bJF7XESo8JLHSVLm7QQpy3EKWCFtUqvw3NFugICcSrHOjWXCnZdVmztj7rJtDqNQWASTdcs%2F6ik%2Bu9y7wU7xCYTZJX12U5GoLvVnByCGGdN3JNA772dfY%2FX0k6HMvDKOCUuN92%2BjoPtMnA7J81Qfuv8c8SB7pOQ6HFDUg2OH9zoTUsiGanxj7XL1A&X-Amz-Signature=927bdb6808a67206500fcf5b2f62f58f690289b62725a71b04817b6473bfdce5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6J52Y2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDMqSt310pND0rDHvPM%2F1hHeUFDOTYQRuLVkkR4mNCs3AiAhXNxagEH8NBXVaiakWhRea4s3yhStyiC5MpLcXd%2F4OSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuin8mOLC7J%2BcQ1B8KtwDOFcPBZYCsYPbm7m49rStfm%2BcCSbXao43OlVhf%2BN3Fxan4VoYdTFAImfhxXVQ1afmBxzBxrdeIH%2BrPr5gG3XQj%2FzJZHz1ZgLg9HSVBpFz%2F7kar0lknwHn47HBCBRRQECmydHrJCUADBFLnApja96Ot6MJJjXBTl7gWnps8wgAJGIRtjyIY37mUo77RzYyIARNaIxbXjo0gCm31AVo2l5TGzL9KwnpAA8COeios3YK3eUkZX3zW5t7FUtZVM3tq%2B%2BI4Bv2L3NUF5uY52lz4h4fsxsiHzheY560ShZl7IDy7dg2nq%2BIiwBWg%2Fv5f1578I4aZVu95CFLASfwvCDwf5Ib08LM9qyQQZb1SFXUFZwgxJkhlgXCuXWQG%2BGWHk%2BUXa496WmLAQdzjFbLEGmGFpSsOZ52JYl70ODua9%2BAMNv0cARPu4gOxOF9ZWf6nJQ2cqwBkuxn5nCdaD6tj23MT9aNaEBeDC6ptsYOoJXtY%2B0eCxoEV4Qsl2AATZZY3KFS7kHiuS0t%2FXq%2F%2F%2Ffu52%2Baie3iREljxjlXyDRzf7IS0K%2B4uD6ifjxf3G85Me9kZs%2FYtbXk6iONcXFi8a%2B0jluq6nKdj%2FiDAOylSdE470LEccZOOEKa2egm1hpvBFR3NgwwnZTSvQY6pgGqGL1ICUhFMaZUvgLN9ygxts%2BpyB2Du9y9An6bJF7XESo8JLHSVLm7QQpy3EKWCFtUqvw3NFugICcSrHOjWXCnZdVmztj7rJtDqNQWASTdcs%2F6ik%2Bu9y7wU7xCYTZJX12U5GoLvVnByCGGdN3JNA772dfY%2FX0k6HMvDKOCUuN92%2BjoPtMnA7J81Qfuv8c8SB7pOQ6HFDUg2OH9zoTUsiGanxj7XL1A&X-Amz-Signature=79360085123a4f7696e81a2356b2a5a615c8e05353e671e98d06b0638b290c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6J52Y2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDMqSt310pND0rDHvPM%2F1hHeUFDOTYQRuLVkkR4mNCs3AiAhXNxagEH8NBXVaiakWhRea4s3yhStyiC5MpLcXd%2F4OSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuin8mOLC7J%2BcQ1B8KtwDOFcPBZYCsYPbm7m49rStfm%2BcCSbXao43OlVhf%2BN3Fxan4VoYdTFAImfhxXVQ1afmBxzBxrdeIH%2BrPr5gG3XQj%2FzJZHz1ZgLg9HSVBpFz%2F7kar0lknwHn47HBCBRRQECmydHrJCUADBFLnApja96Ot6MJJjXBTl7gWnps8wgAJGIRtjyIY37mUo77RzYyIARNaIxbXjo0gCm31AVo2l5TGzL9KwnpAA8COeios3YK3eUkZX3zW5t7FUtZVM3tq%2B%2BI4Bv2L3NUF5uY52lz4h4fsxsiHzheY560ShZl7IDy7dg2nq%2BIiwBWg%2Fv5f1578I4aZVu95CFLASfwvCDwf5Ib08LM9qyQQZb1SFXUFZwgxJkhlgXCuXWQG%2BGWHk%2BUXa496WmLAQdzjFbLEGmGFpSsOZ52JYl70ODua9%2BAMNv0cARPu4gOxOF9ZWf6nJQ2cqwBkuxn5nCdaD6tj23MT9aNaEBeDC6ptsYOoJXtY%2B0eCxoEV4Qsl2AATZZY3KFS7kHiuS0t%2FXq%2F%2F%2Ffu52%2Baie3iREljxjlXyDRzf7IS0K%2B4uD6ifjxf3G85Me9kZs%2FYtbXk6iONcXFi8a%2B0jluq6nKdj%2FiDAOylSdE470LEccZOOEKa2egm1hpvBFR3NgwwnZTSvQY6pgGqGL1ICUhFMaZUvgLN9ygxts%2BpyB2Du9y9An6bJF7XESo8JLHSVLm7QQpy3EKWCFtUqvw3NFugICcSrHOjWXCnZdVmztj7rJtDqNQWASTdcs%2F6ik%2Bu9y7wU7xCYTZJX12U5GoLvVnByCGGdN3JNA772dfY%2FX0k6HMvDKOCUuN92%2BjoPtMnA7J81Qfuv8c8SB7pOQ6HFDUg2OH9zoTUsiGanxj7XL1A&X-Amz-Signature=8df0ef0e9c144322f50921e649457b4d18e77146c02d5d852519cfef0a658c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6J52Y2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDMqSt310pND0rDHvPM%2F1hHeUFDOTYQRuLVkkR4mNCs3AiAhXNxagEH8NBXVaiakWhRea4s3yhStyiC5MpLcXd%2F4OSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuin8mOLC7J%2BcQ1B8KtwDOFcPBZYCsYPbm7m49rStfm%2BcCSbXao43OlVhf%2BN3Fxan4VoYdTFAImfhxXVQ1afmBxzBxrdeIH%2BrPr5gG3XQj%2FzJZHz1ZgLg9HSVBpFz%2F7kar0lknwHn47HBCBRRQECmydHrJCUADBFLnApja96Ot6MJJjXBTl7gWnps8wgAJGIRtjyIY37mUo77RzYyIARNaIxbXjo0gCm31AVo2l5TGzL9KwnpAA8COeios3YK3eUkZX3zW5t7FUtZVM3tq%2B%2BI4Bv2L3NUF5uY52lz4h4fsxsiHzheY560ShZl7IDy7dg2nq%2BIiwBWg%2Fv5f1578I4aZVu95CFLASfwvCDwf5Ib08LM9qyQQZb1SFXUFZwgxJkhlgXCuXWQG%2BGWHk%2BUXa496WmLAQdzjFbLEGmGFpSsOZ52JYl70ODua9%2BAMNv0cARPu4gOxOF9ZWf6nJQ2cqwBkuxn5nCdaD6tj23MT9aNaEBeDC6ptsYOoJXtY%2B0eCxoEV4Qsl2AATZZY3KFS7kHiuS0t%2FXq%2F%2F%2Ffu52%2Baie3iREljxjlXyDRzf7IS0K%2B4uD6ifjxf3G85Me9kZs%2FYtbXk6iONcXFi8a%2B0jluq6nKdj%2FiDAOylSdE470LEccZOOEKa2egm1hpvBFR3NgwwnZTSvQY6pgGqGL1ICUhFMaZUvgLN9ygxts%2BpyB2Du9y9An6bJF7XESo8JLHSVLm7QQpy3EKWCFtUqvw3NFugICcSrHOjWXCnZdVmztj7rJtDqNQWASTdcs%2F6ik%2Bu9y7wU7xCYTZJX12U5GoLvVnByCGGdN3JNA772dfY%2FX0k6HMvDKOCUuN92%2BjoPtMnA7J81Qfuv8c8SB7pOQ6HFDUg2OH9zoTUsiGanxj7XL1A&X-Amz-Signature=a268a11d04903d94d534733802ea500fd2e8926166bf9c0d419515f32bfe6a80&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6J52Y2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDMqSt310pND0rDHvPM%2F1hHeUFDOTYQRuLVkkR4mNCs3AiAhXNxagEH8NBXVaiakWhRea4s3yhStyiC5MpLcXd%2F4OSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuin8mOLC7J%2BcQ1B8KtwDOFcPBZYCsYPbm7m49rStfm%2BcCSbXao43OlVhf%2BN3Fxan4VoYdTFAImfhxXVQ1afmBxzBxrdeIH%2BrPr5gG3XQj%2FzJZHz1ZgLg9HSVBpFz%2F7kar0lknwHn47HBCBRRQECmydHrJCUADBFLnApja96Ot6MJJjXBTl7gWnps8wgAJGIRtjyIY37mUo77RzYyIARNaIxbXjo0gCm31AVo2l5TGzL9KwnpAA8COeios3YK3eUkZX3zW5t7FUtZVM3tq%2B%2BI4Bv2L3NUF5uY52lz4h4fsxsiHzheY560ShZl7IDy7dg2nq%2BIiwBWg%2Fv5f1578I4aZVu95CFLASfwvCDwf5Ib08LM9qyQQZb1SFXUFZwgxJkhlgXCuXWQG%2BGWHk%2BUXa496WmLAQdzjFbLEGmGFpSsOZ52JYl70ODua9%2BAMNv0cARPu4gOxOF9ZWf6nJQ2cqwBkuxn5nCdaD6tj23MT9aNaEBeDC6ptsYOoJXtY%2B0eCxoEV4Qsl2AATZZY3KFS7kHiuS0t%2FXq%2F%2F%2Ffu52%2Baie3iREljxjlXyDRzf7IS0K%2B4uD6ifjxf3G85Me9kZs%2FYtbXk6iONcXFi8a%2B0jluq6nKdj%2FiDAOylSdE470LEccZOOEKa2egm1hpvBFR3NgwwnZTSvQY6pgGqGL1ICUhFMaZUvgLN9ygxts%2BpyB2Du9y9An6bJF7XESo8JLHSVLm7QQpy3EKWCFtUqvw3NFugICcSrHOjWXCnZdVmztj7rJtDqNQWASTdcs%2F6ik%2Bu9y7wU7xCYTZJX12U5GoLvVnByCGGdN3JNA772dfY%2FX0k6HMvDKOCUuN92%2BjoPtMnA7J81Qfuv8c8SB7pOQ6HFDUg2OH9zoTUsiGanxj7XL1A&X-Amz-Signature=642fa2fa0b565a1c09774d73661ff7eaddef3287d85c8e592bbe8c057c3ac458&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
