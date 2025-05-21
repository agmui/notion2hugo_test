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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UPLKQ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEXr3nI98M3JLyHkDNvUmBw8l7j1pdfij46l6vMCjPuTAiEA7YudyUNQEJxVU3gVibQ6NEzXLYpsIkm98IZ%2Bg6lsU%2FsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB350OEEfZJrCREwgyrcA58tuMIRBywj2Cso%2Bbc1FkijbNoztnh8kgDEntSYdYMcdjbYSPoOEdQlyMzQvsWIOEoq9C1rOs9Rk0oOnwzACKGp8KmryFu%2B%2FnYY%2Bh5S%2BgYCXSsdQIS6iol1dwe8Flt7bvAGZuVw8apO4X0O18eUqw2ZGLsdGORsqg1jEEbtplxug08WnjLoZJ0HkHLTkrUNd5Bc9yu68s5KCwiiMIRJdOyU3aHSpbcnsy%2FiZS7oAxG4A0WHm067Of2w5pcCCnjRaOxnqELcnhdhpi4nSkoo5%2B7Gl3XTgGVCLZF872leV4H%2FwJCdvO8A1t%2FDtJydzK60PX3p7a64BbCxls183UtsRotZCLVxFphbFo4am4XkKj8oRfTDyOjx0Eib8uk4lLxnLqpHgsfn06%2BvY0OhnKKLRHdKUefak0d%2Fd30Af6ekl4cuTs5skuLiiWrq3JA0vkvIwtsJCsODfvJEjIzo%2Fg%2BzPFdfRuZmgdHEG8%2F0zGgontkhDIrLqlVgMASlefHad9ZXZzgi3TcW%2Fsgtt5cCebaZcJifXoGyeoMnsXkAfFJfDdf94MG%2Bg02Vx%2F7tejiaJgJfL5KOsrK%2Fjgvgis1f6HpoLP3BYL7HE3CJP5rUHED3iQ6wyneVBmo%2FOCTgb9zcMMnwuMEGOqUBwYJsm3ZmzNz05wR3DowCRiQVVyELPRFFtKx%2F7tI83YhNbL2LQqKDWUaQabx9dfM%2FIQTQgWhq%2BI5d183TxRCEKkT7nNQkTsLZ51c4SUZYibYaVTkuY8hlcuHGsrOGksUHGJM0%2BerJe7ctUH399zfLSGNKZa%2FBqEJdxq7XY2YG6TRdKfBOzJsH17zyT96sEaVoV4iSTNQQiqZCyucVYuO2mCHCKtP%2F&X-Amz-Signature=24e3f84d7e8d9cae5e562dd45d854cfab5374d8509fe49c7bfa570a0de62334a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UPLKQ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEXr3nI98M3JLyHkDNvUmBw8l7j1pdfij46l6vMCjPuTAiEA7YudyUNQEJxVU3gVibQ6NEzXLYpsIkm98IZ%2Bg6lsU%2FsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB350OEEfZJrCREwgyrcA58tuMIRBywj2Cso%2Bbc1FkijbNoztnh8kgDEntSYdYMcdjbYSPoOEdQlyMzQvsWIOEoq9C1rOs9Rk0oOnwzACKGp8KmryFu%2B%2FnYY%2Bh5S%2BgYCXSsdQIS6iol1dwe8Flt7bvAGZuVw8apO4X0O18eUqw2ZGLsdGORsqg1jEEbtplxug08WnjLoZJ0HkHLTkrUNd5Bc9yu68s5KCwiiMIRJdOyU3aHSpbcnsy%2FiZS7oAxG4A0WHm067Of2w5pcCCnjRaOxnqELcnhdhpi4nSkoo5%2B7Gl3XTgGVCLZF872leV4H%2FwJCdvO8A1t%2FDtJydzK60PX3p7a64BbCxls183UtsRotZCLVxFphbFo4am4XkKj8oRfTDyOjx0Eib8uk4lLxnLqpHgsfn06%2BvY0OhnKKLRHdKUefak0d%2Fd30Af6ekl4cuTs5skuLiiWrq3JA0vkvIwtsJCsODfvJEjIzo%2Fg%2BzPFdfRuZmgdHEG8%2F0zGgontkhDIrLqlVgMASlefHad9ZXZzgi3TcW%2Fsgtt5cCebaZcJifXoGyeoMnsXkAfFJfDdf94MG%2Bg02Vx%2F7tejiaJgJfL5KOsrK%2Fjgvgis1f6HpoLP3BYL7HE3CJP5rUHED3iQ6wyneVBmo%2FOCTgb9zcMMnwuMEGOqUBwYJsm3ZmzNz05wR3DowCRiQVVyELPRFFtKx%2F7tI83YhNbL2LQqKDWUaQabx9dfM%2FIQTQgWhq%2BI5d183TxRCEKkT7nNQkTsLZ51c4SUZYibYaVTkuY8hlcuHGsrOGksUHGJM0%2BerJe7ctUH399zfLSGNKZa%2FBqEJdxq7XY2YG6TRdKfBOzJsH17zyT96sEaVoV4iSTNQQiqZCyucVYuO2mCHCKtP%2F&X-Amz-Signature=07b6ed2490e77a4176dbac53be80b96b7543771e35420f5f33cd11882526a2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UPLKQ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEXr3nI98M3JLyHkDNvUmBw8l7j1pdfij46l6vMCjPuTAiEA7YudyUNQEJxVU3gVibQ6NEzXLYpsIkm98IZ%2Bg6lsU%2FsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB350OEEfZJrCREwgyrcA58tuMIRBywj2Cso%2Bbc1FkijbNoztnh8kgDEntSYdYMcdjbYSPoOEdQlyMzQvsWIOEoq9C1rOs9Rk0oOnwzACKGp8KmryFu%2B%2FnYY%2Bh5S%2BgYCXSsdQIS6iol1dwe8Flt7bvAGZuVw8apO4X0O18eUqw2ZGLsdGORsqg1jEEbtplxug08WnjLoZJ0HkHLTkrUNd5Bc9yu68s5KCwiiMIRJdOyU3aHSpbcnsy%2FiZS7oAxG4A0WHm067Of2w5pcCCnjRaOxnqELcnhdhpi4nSkoo5%2B7Gl3XTgGVCLZF872leV4H%2FwJCdvO8A1t%2FDtJydzK60PX3p7a64BbCxls183UtsRotZCLVxFphbFo4am4XkKj8oRfTDyOjx0Eib8uk4lLxnLqpHgsfn06%2BvY0OhnKKLRHdKUefak0d%2Fd30Af6ekl4cuTs5skuLiiWrq3JA0vkvIwtsJCsODfvJEjIzo%2Fg%2BzPFdfRuZmgdHEG8%2F0zGgontkhDIrLqlVgMASlefHad9ZXZzgi3TcW%2Fsgtt5cCebaZcJifXoGyeoMnsXkAfFJfDdf94MG%2Bg02Vx%2F7tejiaJgJfL5KOsrK%2Fjgvgis1f6HpoLP3BYL7HE3CJP5rUHED3iQ6wyneVBmo%2FOCTgb9zcMMnwuMEGOqUBwYJsm3ZmzNz05wR3DowCRiQVVyELPRFFtKx%2F7tI83YhNbL2LQqKDWUaQabx9dfM%2FIQTQgWhq%2BI5d183TxRCEKkT7nNQkTsLZ51c4SUZYibYaVTkuY8hlcuHGsrOGksUHGJM0%2BerJe7ctUH399zfLSGNKZa%2FBqEJdxq7XY2YG6TRdKfBOzJsH17zyT96sEaVoV4iSTNQQiqZCyucVYuO2mCHCKtP%2F&X-Amz-Signature=27e20e09f02aba96083e7f3794ab10eaab9927508e40cb23e6e0c7eed4d896ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UPLKQ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEXr3nI98M3JLyHkDNvUmBw8l7j1pdfij46l6vMCjPuTAiEA7YudyUNQEJxVU3gVibQ6NEzXLYpsIkm98IZ%2Bg6lsU%2FsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB350OEEfZJrCREwgyrcA58tuMIRBywj2Cso%2Bbc1FkijbNoztnh8kgDEntSYdYMcdjbYSPoOEdQlyMzQvsWIOEoq9C1rOs9Rk0oOnwzACKGp8KmryFu%2B%2FnYY%2Bh5S%2BgYCXSsdQIS6iol1dwe8Flt7bvAGZuVw8apO4X0O18eUqw2ZGLsdGORsqg1jEEbtplxug08WnjLoZJ0HkHLTkrUNd5Bc9yu68s5KCwiiMIRJdOyU3aHSpbcnsy%2FiZS7oAxG4A0WHm067Of2w5pcCCnjRaOxnqELcnhdhpi4nSkoo5%2B7Gl3XTgGVCLZF872leV4H%2FwJCdvO8A1t%2FDtJydzK60PX3p7a64BbCxls183UtsRotZCLVxFphbFo4am4XkKj8oRfTDyOjx0Eib8uk4lLxnLqpHgsfn06%2BvY0OhnKKLRHdKUefak0d%2Fd30Af6ekl4cuTs5skuLiiWrq3JA0vkvIwtsJCsODfvJEjIzo%2Fg%2BzPFdfRuZmgdHEG8%2F0zGgontkhDIrLqlVgMASlefHad9ZXZzgi3TcW%2Fsgtt5cCebaZcJifXoGyeoMnsXkAfFJfDdf94MG%2Bg02Vx%2F7tejiaJgJfL5KOsrK%2Fjgvgis1f6HpoLP3BYL7HE3CJP5rUHED3iQ6wyneVBmo%2FOCTgb9zcMMnwuMEGOqUBwYJsm3ZmzNz05wR3DowCRiQVVyELPRFFtKx%2F7tI83YhNbL2LQqKDWUaQabx9dfM%2FIQTQgWhq%2BI5d183TxRCEKkT7nNQkTsLZ51c4SUZYibYaVTkuY8hlcuHGsrOGksUHGJM0%2BerJe7ctUH399zfLSGNKZa%2FBqEJdxq7XY2YG6TRdKfBOzJsH17zyT96sEaVoV4iSTNQQiqZCyucVYuO2mCHCKtP%2F&X-Amz-Signature=be8caa2098df45bcbfdb78526b574fbf13176cf77aeb285cd4d2fd7405b664d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UPLKQ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEXr3nI98M3JLyHkDNvUmBw8l7j1pdfij46l6vMCjPuTAiEA7YudyUNQEJxVU3gVibQ6NEzXLYpsIkm98IZ%2Bg6lsU%2FsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB350OEEfZJrCREwgyrcA58tuMIRBywj2Cso%2Bbc1FkijbNoztnh8kgDEntSYdYMcdjbYSPoOEdQlyMzQvsWIOEoq9C1rOs9Rk0oOnwzACKGp8KmryFu%2B%2FnYY%2Bh5S%2BgYCXSsdQIS6iol1dwe8Flt7bvAGZuVw8apO4X0O18eUqw2ZGLsdGORsqg1jEEbtplxug08WnjLoZJ0HkHLTkrUNd5Bc9yu68s5KCwiiMIRJdOyU3aHSpbcnsy%2FiZS7oAxG4A0WHm067Of2w5pcCCnjRaOxnqELcnhdhpi4nSkoo5%2B7Gl3XTgGVCLZF872leV4H%2FwJCdvO8A1t%2FDtJydzK60PX3p7a64BbCxls183UtsRotZCLVxFphbFo4am4XkKj8oRfTDyOjx0Eib8uk4lLxnLqpHgsfn06%2BvY0OhnKKLRHdKUefak0d%2Fd30Af6ekl4cuTs5skuLiiWrq3JA0vkvIwtsJCsODfvJEjIzo%2Fg%2BzPFdfRuZmgdHEG8%2F0zGgontkhDIrLqlVgMASlefHad9ZXZzgi3TcW%2Fsgtt5cCebaZcJifXoGyeoMnsXkAfFJfDdf94MG%2Bg02Vx%2F7tejiaJgJfL5KOsrK%2Fjgvgis1f6HpoLP3BYL7HE3CJP5rUHED3iQ6wyneVBmo%2FOCTgb9zcMMnwuMEGOqUBwYJsm3ZmzNz05wR3DowCRiQVVyELPRFFtKx%2F7tI83YhNbL2LQqKDWUaQabx9dfM%2FIQTQgWhq%2BI5d183TxRCEKkT7nNQkTsLZ51c4SUZYibYaVTkuY8hlcuHGsrOGksUHGJM0%2BerJe7ctUH399zfLSGNKZa%2FBqEJdxq7XY2YG6TRdKfBOzJsH17zyT96sEaVoV4iSTNQQiqZCyucVYuO2mCHCKtP%2F&X-Amz-Signature=86bb62007a294ae55c2424f77db480b54941d217f2e1aac903a81dce5ce7a0ab&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UPLKQ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEXr3nI98M3JLyHkDNvUmBw8l7j1pdfij46l6vMCjPuTAiEA7YudyUNQEJxVU3gVibQ6NEzXLYpsIkm98IZ%2Bg6lsU%2FsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB350OEEfZJrCREwgyrcA58tuMIRBywj2Cso%2Bbc1FkijbNoztnh8kgDEntSYdYMcdjbYSPoOEdQlyMzQvsWIOEoq9C1rOs9Rk0oOnwzACKGp8KmryFu%2B%2FnYY%2Bh5S%2BgYCXSsdQIS6iol1dwe8Flt7bvAGZuVw8apO4X0O18eUqw2ZGLsdGORsqg1jEEbtplxug08WnjLoZJ0HkHLTkrUNd5Bc9yu68s5KCwiiMIRJdOyU3aHSpbcnsy%2FiZS7oAxG4A0WHm067Of2w5pcCCnjRaOxnqELcnhdhpi4nSkoo5%2B7Gl3XTgGVCLZF872leV4H%2FwJCdvO8A1t%2FDtJydzK60PX3p7a64BbCxls183UtsRotZCLVxFphbFo4am4XkKj8oRfTDyOjx0Eib8uk4lLxnLqpHgsfn06%2BvY0OhnKKLRHdKUefak0d%2Fd30Af6ekl4cuTs5skuLiiWrq3JA0vkvIwtsJCsODfvJEjIzo%2Fg%2BzPFdfRuZmgdHEG8%2F0zGgontkhDIrLqlVgMASlefHad9ZXZzgi3TcW%2Fsgtt5cCebaZcJifXoGyeoMnsXkAfFJfDdf94MG%2Bg02Vx%2F7tejiaJgJfL5KOsrK%2Fjgvgis1f6HpoLP3BYL7HE3CJP5rUHED3iQ6wyneVBmo%2FOCTgb9zcMMnwuMEGOqUBwYJsm3ZmzNz05wR3DowCRiQVVyELPRFFtKx%2F7tI83YhNbL2LQqKDWUaQabx9dfM%2FIQTQgWhq%2BI5d183TxRCEKkT7nNQkTsLZ51c4SUZYibYaVTkuY8hlcuHGsrOGksUHGJM0%2BerJe7ctUH399zfLSGNKZa%2FBqEJdxq7XY2YG6TRdKfBOzJsH17zyT96sEaVoV4iSTNQQiqZCyucVYuO2mCHCKtP%2F&X-Amz-Signature=ca4c8c3da5c59859284828ffa7142a90af66ffc8e76b0a4f8bbd0eeb77e39f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UPLKQ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEXr3nI98M3JLyHkDNvUmBw8l7j1pdfij46l6vMCjPuTAiEA7YudyUNQEJxVU3gVibQ6NEzXLYpsIkm98IZ%2Bg6lsU%2FsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB350OEEfZJrCREwgyrcA58tuMIRBywj2Cso%2Bbc1FkijbNoztnh8kgDEntSYdYMcdjbYSPoOEdQlyMzQvsWIOEoq9C1rOs9Rk0oOnwzACKGp8KmryFu%2B%2FnYY%2Bh5S%2BgYCXSsdQIS6iol1dwe8Flt7bvAGZuVw8apO4X0O18eUqw2ZGLsdGORsqg1jEEbtplxug08WnjLoZJ0HkHLTkrUNd5Bc9yu68s5KCwiiMIRJdOyU3aHSpbcnsy%2FiZS7oAxG4A0WHm067Of2w5pcCCnjRaOxnqELcnhdhpi4nSkoo5%2B7Gl3XTgGVCLZF872leV4H%2FwJCdvO8A1t%2FDtJydzK60PX3p7a64BbCxls183UtsRotZCLVxFphbFo4am4XkKj8oRfTDyOjx0Eib8uk4lLxnLqpHgsfn06%2BvY0OhnKKLRHdKUefak0d%2Fd30Af6ekl4cuTs5skuLiiWrq3JA0vkvIwtsJCsODfvJEjIzo%2Fg%2BzPFdfRuZmgdHEG8%2F0zGgontkhDIrLqlVgMASlefHad9ZXZzgi3TcW%2Fsgtt5cCebaZcJifXoGyeoMnsXkAfFJfDdf94MG%2Bg02Vx%2F7tejiaJgJfL5KOsrK%2Fjgvgis1f6HpoLP3BYL7HE3CJP5rUHED3iQ6wyneVBmo%2FOCTgb9zcMMnwuMEGOqUBwYJsm3ZmzNz05wR3DowCRiQVVyELPRFFtKx%2F7tI83YhNbL2LQqKDWUaQabx9dfM%2FIQTQgWhq%2BI5d183TxRCEKkT7nNQkTsLZ51c4SUZYibYaVTkuY8hlcuHGsrOGksUHGJM0%2BerJe7ctUH399zfLSGNKZa%2FBqEJdxq7XY2YG6TRdKfBOzJsH17zyT96sEaVoV4iSTNQQiqZCyucVYuO2mCHCKtP%2F&X-Amz-Signature=2cfdd22b2d111169b3e0c1e0abfb384b337261407584b6edb52ef1b42b19add3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
