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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635M4WBEL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDUwCY0w6YZaAWxlBKg1YADaM54Bfomhd%2FvWZw%2FTg2LdAiBUKKjGHAl0ZsZPqaqKARDUMvT3cfIODkLhCVMwRGYCJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Mn3HdaqsnUyVTdxKtwDOJBQUGysdcyA0K1XCcA6japB92ymMakloJSFmgtGHqRxuP7EN5PveFpHOY32CvYgNDeBlctzORAmL%2BcCFWzeCd9G5hj9jhH1waobI380uEsBcDT8YW893unEKdWA9Yg5OANxMSo8O9OHHXAap97hJbu6bXpopvg609N1vD9jBILGfrizs12mBwtJi5OAHEJN9%2BkPeikF%2BBPTbv3ezvJm1GQjTghJpIkuJUuptaNJIb8Btqtem80mmVmPYA4Usq4Rp1AvJD7dI27OJ6HMefeUwde765bE%2FbpE48%2BFVl%2ByzsYwPOrI4W%2FOK6xLOLorC%2FctPpS%2Fsb%2BEGwVGfL3wYU6MWB%2FjtjvNCtbS5ylNu2O%2BiPR3a6ryLeVfr9gqtknEN%2F5pNW%2BMrNlVD9eHMyk6%2BBOVjKqH1UhGCcOMsQlVahHkHi1vl8wHaLGts1ZZcKHqbBElwhGAOtHE2qth7BbSQGbE5YD027RFyGDbyC%2B%2BAFLGgRGHgHI%2BZOuHJSI9W4Jtw%2Bgv35rPC3%2BqpsYOeI%2F%2B%2BwJQV9xag3IIndS2vnqqcD8NgoNx%2B%2FxVaBrfy62ZlCxENYtoaEeaTtHcwdzPAlxfuKvhWX6%2FPzPCcLJ8ktAJcuR9wnVnjvLBxeVi1uuuEWQw4bCGvgY6pgHodYzM2l%2BSEixPGRn4jbaQ56ZroaNDebqQ7xjlaV4ZGi9ELpuo50zy1yBZUMXu3eQP%2F%2FncFiakyCQj2Ogh2Kb7%2F7RetSwD3N9TqNrUVcOdzkATRJKoUSYkFclf3FZ4Ahd3Lg6XEiuaJvEQHcL8Hif7zz8%2BwbvNM2KyBOaQgCu4AHhXUHEseyXQomvrZVIRjQvQnNS5HrE2CvYtd9VmpoS1%2BZ2824Ta&X-Amz-Signature=a4912b5dae3aad53689f106f3682ede6a233740bf661488b6c5e29952bb2f78a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635M4WBEL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDUwCY0w6YZaAWxlBKg1YADaM54Bfomhd%2FvWZw%2FTg2LdAiBUKKjGHAl0ZsZPqaqKARDUMvT3cfIODkLhCVMwRGYCJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Mn3HdaqsnUyVTdxKtwDOJBQUGysdcyA0K1XCcA6japB92ymMakloJSFmgtGHqRxuP7EN5PveFpHOY32CvYgNDeBlctzORAmL%2BcCFWzeCd9G5hj9jhH1waobI380uEsBcDT8YW893unEKdWA9Yg5OANxMSo8O9OHHXAap97hJbu6bXpopvg609N1vD9jBILGfrizs12mBwtJi5OAHEJN9%2BkPeikF%2BBPTbv3ezvJm1GQjTghJpIkuJUuptaNJIb8Btqtem80mmVmPYA4Usq4Rp1AvJD7dI27OJ6HMefeUwde765bE%2FbpE48%2BFVl%2ByzsYwPOrI4W%2FOK6xLOLorC%2FctPpS%2Fsb%2BEGwVGfL3wYU6MWB%2FjtjvNCtbS5ylNu2O%2BiPR3a6ryLeVfr9gqtknEN%2F5pNW%2BMrNlVD9eHMyk6%2BBOVjKqH1UhGCcOMsQlVahHkHi1vl8wHaLGts1ZZcKHqbBElwhGAOtHE2qth7BbSQGbE5YD027RFyGDbyC%2B%2BAFLGgRGHgHI%2BZOuHJSI9W4Jtw%2Bgv35rPC3%2BqpsYOeI%2F%2B%2BwJQV9xag3IIndS2vnqqcD8NgoNx%2B%2FxVaBrfy62ZlCxENYtoaEeaTtHcwdzPAlxfuKvhWX6%2FPzPCcLJ8ktAJcuR9wnVnjvLBxeVi1uuuEWQw4bCGvgY6pgHodYzM2l%2BSEixPGRn4jbaQ56ZroaNDebqQ7xjlaV4ZGi9ELpuo50zy1yBZUMXu3eQP%2F%2FncFiakyCQj2Ogh2Kb7%2F7RetSwD3N9TqNrUVcOdzkATRJKoUSYkFclf3FZ4Ahd3Lg6XEiuaJvEQHcL8Hif7zz8%2BwbvNM2KyBOaQgCu4AHhXUHEseyXQomvrZVIRjQvQnNS5HrE2CvYtd9VmpoS1%2BZ2824Ta&X-Amz-Signature=ee96acfd7c19a7c4ee2fb81d523a346b9c08c3f50e310e00afff1cc0db7f4d15&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635M4WBEL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDUwCY0w6YZaAWxlBKg1YADaM54Bfomhd%2FvWZw%2FTg2LdAiBUKKjGHAl0ZsZPqaqKARDUMvT3cfIODkLhCVMwRGYCJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Mn3HdaqsnUyVTdxKtwDOJBQUGysdcyA0K1XCcA6japB92ymMakloJSFmgtGHqRxuP7EN5PveFpHOY32CvYgNDeBlctzORAmL%2BcCFWzeCd9G5hj9jhH1waobI380uEsBcDT8YW893unEKdWA9Yg5OANxMSo8O9OHHXAap97hJbu6bXpopvg609N1vD9jBILGfrizs12mBwtJi5OAHEJN9%2BkPeikF%2BBPTbv3ezvJm1GQjTghJpIkuJUuptaNJIb8Btqtem80mmVmPYA4Usq4Rp1AvJD7dI27OJ6HMefeUwde765bE%2FbpE48%2BFVl%2ByzsYwPOrI4W%2FOK6xLOLorC%2FctPpS%2Fsb%2BEGwVGfL3wYU6MWB%2FjtjvNCtbS5ylNu2O%2BiPR3a6ryLeVfr9gqtknEN%2F5pNW%2BMrNlVD9eHMyk6%2BBOVjKqH1UhGCcOMsQlVahHkHi1vl8wHaLGts1ZZcKHqbBElwhGAOtHE2qth7BbSQGbE5YD027RFyGDbyC%2B%2BAFLGgRGHgHI%2BZOuHJSI9W4Jtw%2Bgv35rPC3%2BqpsYOeI%2F%2B%2BwJQV9xag3IIndS2vnqqcD8NgoNx%2B%2FxVaBrfy62ZlCxENYtoaEeaTtHcwdzPAlxfuKvhWX6%2FPzPCcLJ8ktAJcuR9wnVnjvLBxeVi1uuuEWQw4bCGvgY6pgHodYzM2l%2BSEixPGRn4jbaQ56ZroaNDebqQ7xjlaV4ZGi9ELpuo50zy1yBZUMXu3eQP%2F%2FncFiakyCQj2Ogh2Kb7%2F7RetSwD3N9TqNrUVcOdzkATRJKoUSYkFclf3FZ4Ahd3Lg6XEiuaJvEQHcL8Hif7zz8%2BwbvNM2KyBOaQgCu4AHhXUHEseyXQomvrZVIRjQvQnNS5HrE2CvYtd9VmpoS1%2BZ2824Ta&X-Amz-Signature=d1a89e1f71bef21d3c90aa4b2e5c64438e7f09f2e3390dde65bb80cc0daaa4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635M4WBEL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDUwCY0w6YZaAWxlBKg1YADaM54Bfomhd%2FvWZw%2FTg2LdAiBUKKjGHAl0ZsZPqaqKARDUMvT3cfIODkLhCVMwRGYCJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Mn3HdaqsnUyVTdxKtwDOJBQUGysdcyA0K1XCcA6japB92ymMakloJSFmgtGHqRxuP7EN5PveFpHOY32CvYgNDeBlctzORAmL%2BcCFWzeCd9G5hj9jhH1waobI380uEsBcDT8YW893unEKdWA9Yg5OANxMSo8O9OHHXAap97hJbu6bXpopvg609N1vD9jBILGfrizs12mBwtJi5OAHEJN9%2BkPeikF%2BBPTbv3ezvJm1GQjTghJpIkuJUuptaNJIb8Btqtem80mmVmPYA4Usq4Rp1AvJD7dI27OJ6HMefeUwde765bE%2FbpE48%2BFVl%2ByzsYwPOrI4W%2FOK6xLOLorC%2FctPpS%2Fsb%2BEGwVGfL3wYU6MWB%2FjtjvNCtbS5ylNu2O%2BiPR3a6ryLeVfr9gqtknEN%2F5pNW%2BMrNlVD9eHMyk6%2BBOVjKqH1UhGCcOMsQlVahHkHi1vl8wHaLGts1ZZcKHqbBElwhGAOtHE2qth7BbSQGbE5YD027RFyGDbyC%2B%2BAFLGgRGHgHI%2BZOuHJSI9W4Jtw%2Bgv35rPC3%2BqpsYOeI%2F%2B%2BwJQV9xag3IIndS2vnqqcD8NgoNx%2B%2FxVaBrfy62ZlCxENYtoaEeaTtHcwdzPAlxfuKvhWX6%2FPzPCcLJ8ktAJcuR9wnVnjvLBxeVi1uuuEWQw4bCGvgY6pgHodYzM2l%2BSEixPGRn4jbaQ56ZroaNDebqQ7xjlaV4ZGi9ELpuo50zy1yBZUMXu3eQP%2F%2FncFiakyCQj2Ogh2Kb7%2F7RetSwD3N9TqNrUVcOdzkATRJKoUSYkFclf3FZ4Ahd3Lg6XEiuaJvEQHcL8Hif7zz8%2BwbvNM2KyBOaQgCu4AHhXUHEseyXQomvrZVIRjQvQnNS5HrE2CvYtd9VmpoS1%2BZ2824Ta&X-Amz-Signature=c90749e6696e63e68782c45fd29655b06ae1777629b5ac8346b29b1dcdebef4d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635M4WBEL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDUwCY0w6YZaAWxlBKg1YADaM54Bfomhd%2FvWZw%2FTg2LdAiBUKKjGHAl0ZsZPqaqKARDUMvT3cfIODkLhCVMwRGYCJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Mn3HdaqsnUyVTdxKtwDOJBQUGysdcyA0K1XCcA6japB92ymMakloJSFmgtGHqRxuP7EN5PveFpHOY32CvYgNDeBlctzORAmL%2BcCFWzeCd9G5hj9jhH1waobI380uEsBcDT8YW893unEKdWA9Yg5OANxMSo8O9OHHXAap97hJbu6bXpopvg609N1vD9jBILGfrizs12mBwtJi5OAHEJN9%2BkPeikF%2BBPTbv3ezvJm1GQjTghJpIkuJUuptaNJIb8Btqtem80mmVmPYA4Usq4Rp1AvJD7dI27OJ6HMefeUwde765bE%2FbpE48%2BFVl%2ByzsYwPOrI4W%2FOK6xLOLorC%2FctPpS%2Fsb%2BEGwVGfL3wYU6MWB%2FjtjvNCtbS5ylNu2O%2BiPR3a6ryLeVfr9gqtknEN%2F5pNW%2BMrNlVD9eHMyk6%2BBOVjKqH1UhGCcOMsQlVahHkHi1vl8wHaLGts1ZZcKHqbBElwhGAOtHE2qth7BbSQGbE5YD027RFyGDbyC%2B%2BAFLGgRGHgHI%2BZOuHJSI9W4Jtw%2Bgv35rPC3%2BqpsYOeI%2F%2B%2BwJQV9xag3IIndS2vnqqcD8NgoNx%2B%2FxVaBrfy62ZlCxENYtoaEeaTtHcwdzPAlxfuKvhWX6%2FPzPCcLJ8ktAJcuR9wnVnjvLBxeVi1uuuEWQw4bCGvgY6pgHodYzM2l%2BSEixPGRn4jbaQ56ZroaNDebqQ7xjlaV4ZGi9ELpuo50zy1yBZUMXu3eQP%2F%2FncFiakyCQj2Ogh2Kb7%2F7RetSwD3N9TqNrUVcOdzkATRJKoUSYkFclf3FZ4Ahd3Lg6XEiuaJvEQHcL8Hif7zz8%2BwbvNM2KyBOaQgCu4AHhXUHEseyXQomvrZVIRjQvQnNS5HrE2CvYtd9VmpoS1%2BZ2824Ta&X-Amz-Signature=4b80172328c042ebb01a5327e6b632108cd916a1896f8a4b0c775acdbf8c662d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635M4WBEL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDUwCY0w6YZaAWxlBKg1YADaM54Bfomhd%2FvWZw%2FTg2LdAiBUKKjGHAl0ZsZPqaqKARDUMvT3cfIODkLhCVMwRGYCJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Mn3HdaqsnUyVTdxKtwDOJBQUGysdcyA0K1XCcA6japB92ymMakloJSFmgtGHqRxuP7EN5PveFpHOY32CvYgNDeBlctzORAmL%2BcCFWzeCd9G5hj9jhH1waobI380uEsBcDT8YW893unEKdWA9Yg5OANxMSo8O9OHHXAap97hJbu6bXpopvg609N1vD9jBILGfrizs12mBwtJi5OAHEJN9%2BkPeikF%2BBPTbv3ezvJm1GQjTghJpIkuJUuptaNJIb8Btqtem80mmVmPYA4Usq4Rp1AvJD7dI27OJ6HMefeUwde765bE%2FbpE48%2BFVl%2ByzsYwPOrI4W%2FOK6xLOLorC%2FctPpS%2Fsb%2BEGwVGfL3wYU6MWB%2FjtjvNCtbS5ylNu2O%2BiPR3a6ryLeVfr9gqtknEN%2F5pNW%2BMrNlVD9eHMyk6%2BBOVjKqH1UhGCcOMsQlVahHkHi1vl8wHaLGts1ZZcKHqbBElwhGAOtHE2qth7BbSQGbE5YD027RFyGDbyC%2B%2BAFLGgRGHgHI%2BZOuHJSI9W4Jtw%2Bgv35rPC3%2BqpsYOeI%2F%2B%2BwJQV9xag3IIndS2vnqqcD8NgoNx%2B%2FxVaBrfy62ZlCxENYtoaEeaTtHcwdzPAlxfuKvhWX6%2FPzPCcLJ8ktAJcuR9wnVnjvLBxeVi1uuuEWQw4bCGvgY6pgHodYzM2l%2BSEixPGRn4jbaQ56ZroaNDebqQ7xjlaV4ZGi9ELpuo50zy1yBZUMXu3eQP%2F%2FncFiakyCQj2Ogh2Kb7%2F7RetSwD3N9TqNrUVcOdzkATRJKoUSYkFclf3FZ4Ahd3Lg6XEiuaJvEQHcL8Hif7zz8%2BwbvNM2KyBOaQgCu4AHhXUHEseyXQomvrZVIRjQvQnNS5HrE2CvYtd9VmpoS1%2BZ2824Ta&X-Amz-Signature=39dea04f1dd2b9bf3708563e3f5c6ed31cb764ba3d54dcdddc067e3c272af3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635M4WBEL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDUwCY0w6YZaAWxlBKg1YADaM54Bfomhd%2FvWZw%2FTg2LdAiBUKKjGHAl0ZsZPqaqKARDUMvT3cfIODkLhCVMwRGYCJiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Mn3HdaqsnUyVTdxKtwDOJBQUGysdcyA0K1XCcA6japB92ymMakloJSFmgtGHqRxuP7EN5PveFpHOY32CvYgNDeBlctzORAmL%2BcCFWzeCd9G5hj9jhH1waobI380uEsBcDT8YW893unEKdWA9Yg5OANxMSo8O9OHHXAap97hJbu6bXpopvg609N1vD9jBILGfrizs12mBwtJi5OAHEJN9%2BkPeikF%2BBPTbv3ezvJm1GQjTghJpIkuJUuptaNJIb8Btqtem80mmVmPYA4Usq4Rp1AvJD7dI27OJ6HMefeUwde765bE%2FbpE48%2BFVl%2ByzsYwPOrI4W%2FOK6xLOLorC%2FctPpS%2Fsb%2BEGwVGfL3wYU6MWB%2FjtjvNCtbS5ylNu2O%2BiPR3a6ryLeVfr9gqtknEN%2F5pNW%2BMrNlVD9eHMyk6%2BBOVjKqH1UhGCcOMsQlVahHkHi1vl8wHaLGts1ZZcKHqbBElwhGAOtHE2qth7BbSQGbE5YD027RFyGDbyC%2B%2BAFLGgRGHgHI%2BZOuHJSI9W4Jtw%2Bgv35rPC3%2BqpsYOeI%2F%2B%2BwJQV9xag3IIndS2vnqqcD8NgoNx%2B%2FxVaBrfy62ZlCxENYtoaEeaTtHcwdzPAlxfuKvhWX6%2FPzPCcLJ8ktAJcuR9wnVnjvLBxeVi1uuuEWQw4bCGvgY6pgHodYzM2l%2BSEixPGRn4jbaQ56ZroaNDebqQ7xjlaV4ZGi9ELpuo50zy1yBZUMXu3eQP%2F%2FncFiakyCQj2Ogh2Kb7%2F7RetSwD3N9TqNrUVcOdzkATRJKoUSYkFclf3FZ4Ahd3Lg6XEiuaJvEQHcL8Hif7zz8%2BwbvNM2KyBOaQgCu4AHhXUHEseyXQomvrZVIRjQvQnNS5HrE2CvYtd9VmpoS1%2BZ2824Ta&X-Amz-Signature=e343b34b545594ec63799232025f3aed5565c73aff7c70671f57f4ec3e7d8e61&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
