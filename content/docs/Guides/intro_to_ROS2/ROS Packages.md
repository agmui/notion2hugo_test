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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3TASCB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2F9Yy64CZbm8OHGyb6kBF%2FmBi5wNhi0xXRonWG0xgIgIgIOjkpKiXrHKEFjWthDyMUKhc7S3yUqp6V1IIMM1XXg0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDmy%2BVbdcPWSb2qewCrcA4C5SetsRIDoWlRpQlTE1ioDSVwgIuNGNNh%2BVZchoAmpXh3oJzgXDU2qAoG6ucm0NS9NWKtwhmDfEKigwqiucrC%2FmKCWylk%2BNPcfEciKAGfHehxXbWWIO50GM5Iu%2BIiMmz6DPIGsswF3cZqA9XGYKljh%2BO9%2FexYPkHIIiZj5MnVnl1%2BdL5KJX5RzxyXu3%2FVumLgksVItUn1z4qVHiaHgKrZcByS%2FHtHj42eDfjG%2BU%2BRp6hzhGlAlzesV7SWrVBqEO0zebxiHD%2FrHpL0Mud2U%2Be550ko1DizrX%2Fbaotf%2B5dTDpgov7iiSH6CxQhBTHOLRNjdDXFowLgH9XQp4%2BFXahx66Kferouw92Q5ylGasUwhlT4ahYgeJWf6IAtEKhMJQsycZsZvBuQf%2FKVZSG0FJVzDtV6xLVY6PMQzlkpTr%2F4a5Ha57miGUR7efyskBtOaAJLIoH0qaSdVMveqKil10qAIhSLWrNCL%2Bv6P3ZP9W%2BNGgDUNYUVSdKYhSiapTNuSnI9PUE9U2g8ryyx8tCqykjjTcM3oaGi1nM3ZewXTgirCLszfWqdTbB494aBx%2Bw9Y1xSkIl2MDkD05bgDEinSmlWk3I%2BtbAqkgkeSJWfh5aNRJTJSb8sKgxn3U3FVwMLHRzb8GOqUBWy01gx0FjVYU44yck%2F0%2FfcYkkQfMVt3vdlM98pvwdZV3mam1XZ6t1Ryk%2B5rO%2FHpG0jwoyAekiXKaE1xNoeUXdInzYNarwhY4%2Bt1oavqcb3nOXCJWuj1DSMzsLGt6k283mBmlRT7tEFA9ZhVcK%2FKPIZzmcXTVexOmHRA9BOEsTwOPOVw%2FSI2h8zRjWx%2BFzU2hJo9EITrZc4bNDGeUCAPbG2MphtL9&X-Amz-Signature=0deaebfde570c10d3854a510e6f5bfc774bf0cd60710ff58dd02ddd6291d176c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3TASCB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2F9Yy64CZbm8OHGyb6kBF%2FmBi5wNhi0xXRonWG0xgIgIgIOjkpKiXrHKEFjWthDyMUKhc7S3yUqp6V1IIMM1XXg0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDmy%2BVbdcPWSb2qewCrcA4C5SetsRIDoWlRpQlTE1ioDSVwgIuNGNNh%2BVZchoAmpXh3oJzgXDU2qAoG6ucm0NS9NWKtwhmDfEKigwqiucrC%2FmKCWylk%2BNPcfEciKAGfHehxXbWWIO50GM5Iu%2BIiMmz6DPIGsswF3cZqA9XGYKljh%2BO9%2FexYPkHIIiZj5MnVnl1%2BdL5KJX5RzxyXu3%2FVumLgksVItUn1z4qVHiaHgKrZcByS%2FHtHj42eDfjG%2BU%2BRp6hzhGlAlzesV7SWrVBqEO0zebxiHD%2FrHpL0Mud2U%2Be550ko1DizrX%2Fbaotf%2B5dTDpgov7iiSH6CxQhBTHOLRNjdDXFowLgH9XQp4%2BFXahx66Kferouw92Q5ylGasUwhlT4ahYgeJWf6IAtEKhMJQsycZsZvBuQf%2FKVZSG0FJVzDtV6xLVY6PMQzlkpTr%2F4a5Ha57miGUR7efyskBtOaAJLIoH0qaSdVMveqKil10qAIhSLWrNCL%2Bv6P3ZP9W%2BNGgDUNYUVSdKYhSiapTNuSnI9PUE9U2g8ryyx8tCqykjjTcM3oaGi1nM3ZewXTgirCLszfWqdTbB494aBx%2Bw9Y1xSkIl2MDkD05bgDEinSmlWk3I%2BtbAqkgkeSJWfh5aNRJTJSb8sKgxn3U3FVwMLHRzb8GOqUBWy01gx0FjVYU44yck%2F0%2FfcYkkQfMVt3vdlM98pvwdZV3mam1XZ6t1Ryk%2B5rO%2FHpG0jwoyAekiXKaE1xNoeUXdInzYNarwhY4%2Bt1oavqcb3nOXCJWuj1DSMzsLGt6k283mBmlRT7tEFA9ZhVcK%2FKPIZzmcXTVexOmHRA9BOEsTwOPOVw%2FSI2h8zRjWx%2BFzU2hJo9EITrZc4bNDGeUCAPbG2MphtL9&X-Amz-Signature=0e8cb179f8fdadea80aa54a19275a9b22e4a0f786b82d673db2de5029c083a93&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3TASCB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2F9Yy64CZbm8OHGyb6kBF%2FmBi5wNhi0xXRonWG0xgIgIgIOjkpKiXrHKEFjWthDyMUKhc7S3yUqp6V1IIMM1XXg0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDmy%2BVbdcPWSb2qewCrcA4C5SetsRIDoWlRpQlTE1ioDSVwgIuNGNNh%2BVZchoAmpXh3oJzgXDU2qAoG6ucm0NS9NWKtwhmDfEKigwqiucrC%2FmKCWylk%2BNPcfEciKAGfHehxXbWWIO50GM5Iu%2BIiMmz6DPIGsswF3cZqA9XGYKljh%2BO9%2FexYPkHIIiZj5MnVnl1%2BdL5KJX5RzxyXu3%2FVumLgksVItUn1z4qVHiaHgKrZcByS%2FHtHj42eDfjG%2BU%2BRp6hzhGlAlzesV7SWrVBqEO0zebxiHD%2FrHpL0Mud2U%2Be550ko1DizrX%2Fbaotf%2B5dTDpgov7iiSH6CxQhBTHOLRNjdDXFowLgH9XQp4%2BFXahx66Kferouw92Q5ylGasUwhlT4ahYgeJWf6IAtEKhMJQsycZsZvBuQf%2FKVZSG0FJVzDtV6xLVY6PMQzlkpTr%2F4a5Ha57miGUR7efyskBtOaAJLIoH0qaSdVMveqKil10qAIhSLWrNCL%2Bv6P3ZP9W%2BNGgDUNYUVSdKYhSiapTNuSnI9PUE9U2g8ryyx8tCqykjjTcM3oaGi1nM3ZewXTgirCLszfWqdTbB494aBx%2Bw9Y1xSkIl2MDkD05bgDEinSmlWk3I%2BtbAqkgkeSJWfh5aNRJTJSb8sKgxn3U3FVwMLHRzb8GOqUBWy01gx0FjVYU44yck%2F0%2FfcYkkQfMVt3vdlM98pvwdZV3mam1XZ6t1Ryk%2B5rO%2FHpG0jwoyAekiXKaE1xNoeUXdInzYNarwhY4%2Bt1oavqcb3nOXCJWuj1DSMzsLGt6k283mBmlRT7tEFA9ZhVcK%2FKPIZzmcXTVexOmHRA9BOEsTwOPOVw%2FSI2h8zRjWx%2BFzU2hJo9EITrZc4bNDGeUCAPbG2MphtL9&X-Amz-Signature=18e1508653c20d37cd297dac56eea4fd337d096940866f718958bc76b755ff0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3TASCB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2F9Yy64CZbm8OHGyb6kBF%2FmBi5wNhi0xXRonWG0xgIgIgIOjkpKiXrHKEFjWthDyMUKhc7S3yUqp6V1IIMM1XXg0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDmy%2BVbdcPWSb2qewCrcA4C5SetsRIDoWlRpQlTE1ioDSVwgIuNGNNh%2BVZchoAmpXh3oJzgXDU2qAoG6ucm0NS9NWKtwhmDfEKigwqiucrC%2FmKCWylk%2BNPcfEciKAGfHehxXbWWIO50GM5Iu%2BIiMmz6DPIGsswF3cZqA9XGYKljh%2BO9%2FexYPkHIIiZj5MnVnl1%2BdL5KJX5RzxyXu3%2FVumLgksVItUn1z4qVHiaHgKrZcByS%2FHtHj42eDfjG%2BU%2BRp6hzhGlAlzesV7SWrVBqEO0zebxiHD%2FrHpL0Mud2U%2Be550ko1DizrX%2Fbaotf%2B5dTDpgov7iiSH6CxQhBTHOLRNjdDXFowLgH9XQp4%2BFXahx66Kferouw92Q5ylGasUwhlT4ahYgeJWf6IAtEKhMJQsycZsZvBuQf%2FKVZSG0FJVzDtV6xLVY6PMQzlkpTr%2F4a5Ha57miGUR7efyskBtOaAJLIoH0qaSdVMveqKil10qAIhSLWrNCL%2Bv6P3ZP9W%2BNGgDUNYUVSdKYhSiapTNuSnI9PUE9U2g8ryyx8tCqykjjTcM3oaGi1nM3ZewXTgirCLszfWqdTbB494aBx%2Bw9Y1xSkIl2MDkD05bgDEinSmlWk3I%2BtbAqkgkeSJWfh5aNRJTJSb8sKgxn3U3FVwMLHRzb8GOqUBWy01gx0FjVYU44yck%2F0%2FfcYkkQfMVt3vdlM98pvwdZV3mam1XZ6t1Ryk%2B5rO%2FHpG0jwoyAekiXKaE1xNoeUXdInzYNarwhY4%2Bt1oavqcb3nOXCJWuj1DSMzsLGt6k283mBmlRT7tEFA9ZhVcK%2FKPIZzmcXTVexOmHRA9BOEsTwOPOVw%2FSI2h8zRjWx%2BFzU2hJo9EITrZc4bNDGeUCAPbG2MphtL9&X-Amz-Signature=fd43a94bcac0a0401171739d6dbc5cd0d13cb1e561063e8c6863789d827424c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3TASCB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2F9Yy64CZbm8OHGyb6kBF%2FmBi5wNhi0xXRonWG0xgIgIgIOjkpKiXrHKEFjWthDyMUKhc7S3yUqp6V1IIMM1XXg0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDmy%2BVbdcPWSb2qewCrcA4C5SetsRIDoWlRpQlTE1ioDSVwgIuNGNNh%2BVZchoAmpXh3oJzgXDU2qAoG6ucm0NS9NWKtwhmDfEKigwqiucrC%2FmKCWylk%2BNPcfEciKAGfHehxXbWWIO50GM5Iu%2BIiMmz6DPIGsswF3cZqA9XGYKljh%2BO9%2FexYPkHIIiZj5MnVnl1%2BdL5KJX5RzxyXu3%2FVumLgksVItUn1z4qVHiaHgKrZcByS%2FHtHj42eDfjG%2BU%2BRp6hzhGlAlzesV7SWrVBqEO0zebxiHD%2FrHpL0Mud2U%2Be550ko1DizrX%2Fbaotf%2B5dTDpgov7iiSH6CxQhBTHOLRNjdDXFowLgH9XQp4%2BFXahx66Kferouw92Q5ylGasUwhlT4ahYgeJWf6IAtEKhMJQsycZsZvBuQf%2FKVZSG0FJVzDtV6xLVY6PMQzlkpTr%2F4a5Ha57miGUR7efyskBtOaAJLIoH0qaSdVMveqKil10qAIhSLWrNCL%2Bv6P3ZP9W%2BNGgDUNYUVSdKYhSiapTNuSnI9PUE9U2g8ryyx8tCqykjjTcM3oaGi1nM3ZewXTgirCLszfWqdTbB494aBx%2Bw9Y1xSkIl2MDkD05bgDEinSmlWk3I%2BtbAqkgkeSJWfh5aNRJTJSb8sKgxn3U3FVwMLHRzb8GOqUBWy01gx0FjVYU44yck%2F0%2FfcYkkQfMVt3vdlM98pvwdZV3mam1XZ6t1Ryk%2B5rO%2FHpG0jwoyAekiXKaE1xNoeUXdInzYNarwhY4%2Bt1oavqcb3nOXCJWuj1DSMzsLGt6k283mBmlRT7tEFA9ZhVcK%2FKPIZzmcXTVexOmHRA9BOEsTwOPOVw%2FSI2h8zRjWx%2BFzU2hJo9EITrZc4bNDGeUCAPbG2MphtL9&X-Amz-Signature=88f90ebd2c2d6735a7ec5cf385af9e2cedc50064c51e37ca479d396da92b70b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3TASCB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2F9Yy64CZbm8OHGyb6kBF%2FmBi5wNhi0xXRonWG0xgIgIgIOjkpKiXrHKEFjWthDyMUKhc7S3yUqp6V1IIMM1XXg0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDmy%2BVbdcPWSb2qewCrcA4C5SetsRIDoWlRpQlTE1ioDSVwgIuNGNNh%2BVZchoAmpXh3oJzgXDU2qAoG6ucm0NS9NWKtwhmDfEKigwqiucrC%2FmKCWylk%2BNPcfEciKAGfHehxXbWWIO50GM5Iu%2BIiMmz6DPIGsswF3cZqA9XGYKljh%2BO9%2FexYPkHIIiZj5MnVnl1%2BdL5KJX5RzxyXu3%2FVumLgksVItUn1z4qVHiaHgKrZcByS%2FHtHj42eDfjG%2BU%2BRp6hzhGlAlzesV7SWrVBqEO0zebxiHD%2FrHpL0Mud2U%2Be550ko1DizrX%2Fbaotf%2B5dTDpgov7iiSH6CxQhBTHOLRNjdDXFowLgH9XQp4%2BFXahx66Kferouw92Q5ylGasUwhlT4ahYgeJWf6IAtEKhMJQsycZsZvBuQf%2FKVZSG0FJVzDtV6xLVY6PMQzlkpTr%2F4a5Ha57miGUR7efyskBtOaAJLIoH0qaSdVMveqKil10qAIhSLWrNCL%2Bv6P3ZP9W%2BNGgDUNYUVSdKYhSiapTNuSnI9PUE9U2g8ryyx8tCqykjjTcM3oaGi1nM3ZewXTgirCLszfWqdTbB494aBx%2Bw9Y1xSkIl2MDkD05bgDEinSmlWk3I%2BtbAqkgkeSJWfh5aNRJTJSb8sKgxn3U3FVwMLHRzb8GOqUBWy01gx0FjVYU44yck%2F0%2FfcYkkQfMVt3vdlM98pvwdZV3mam1XZ6t1Ryk%2B5rO%2FHpG0jwoyAekiXKaE1xNoeUXdInzYNarwhY4%2Bt1oavqcb3nOXCJWuj1DSMzsLGt6k283mBmlRT7tEFA9ZhVcK%2FKPIZzmcXTVexOmHRA9BOEsTwOPOVw%2FSI2h8zRjWx%2BFzU2hJo9EITrZc4bNDGeUCAPbG2MphtL9&X-Amz-Signature=dde447d0bca1c5df1ff487aa74318b4f14bc13b8b23076b4e8c492590a30a724&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3TASCB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2F9Yy64CZbm8OHGyb6kBF%2FmBi5wNhi0xXRonWG0xgIgIgIOjkpKiXrHKEFjWthDyMUKhc7S3yUqp6V1IIMM1XXg0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDmy%2BVbdcPWSb2qewCrcA4C5SetsRIDoWlRpQlTE1ioDSVwgIuNGNNh%2BVZchoAmpXh3oJzgXDU2qAoG6ucm0NS9NWKtwhmDfEKigwqiucrC%2FmKCWylk%2BNPcfEciKAGfHehxXbWWIO50GM5Iu%2BIiMmz6DPIGsswF3cZqA9XGYKljh%2BO9%2FexYPkHIIiZj5MnVnl1%2BdL5KJX5RzxyXu3%2FVumLgksVItUn1z4qVHiaHgKrZcByS%2FHtHj42eDfjG%2BU%2BRp6hzhGlAlzesV7SWrVBqEO0zebxiHD%2FrHpL0Mud2U%2Be550ko1DizrX%2Fbaotf%2B5dTDpgov7iiSH6CxQhBTHOLRNjdDXFowLgH9XQp4%2BFXahx66Kferouw92Q5ylGasUwhlT4ahYgeJWf6IAtEKhMJQsycZsZvBuQf%2FKVZSG0FJVzDtV6xLVY6PMQzlkpTr%2F4a5Ha57miGUR7efyskBtOaAJLIoH0qaSdVMveqKil10qAIhSLWrNCL%2Bv6P3ZP9W%2BNGgDUNYUVSdKYhSiapTNuSnI9PUE9U2g8ryyx8tCqykjjTcM3oaGi1nM3ZewXTgirCLszfWqdTbB494aBx%2Bw9Y1xSkIl2MDkD05bgDEinSmlWk3I%2BtbAqkgkeSJWfh5aNRJTJSb8sKgxn3U3FVwMLHRzb8GOqUBWy01gx0FjVYU44yck%2F0%2FfcYkkQfMVt3vdlM98pvwdZV3mam1XZ6t1Ryk%2B5rO%2FHpG0jwoyAekiXKaE1xNoeUXdInzYNarwhY4%2Bt1oavqcb3nOXCJWuj1DSMzsLGt6k283mBmlRT7tEFA9ZhVcK%2FKPIZzmcXTVexOmHRA9BOEsTwOPOVw%2FSI2h8zRjWx%2BFzU2hJo9EITrZc4bNDGeUCAPbG2MphtL9&X-Amz-Signature=18d5004fe414cb545a92ea97cafacc6a59f5fa316cbcc5dcd24aaf57f4dc9359&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
