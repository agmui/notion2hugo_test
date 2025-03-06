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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCDE3GO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDql5oHB8YsCaCW%2BVoyXAgBwnU4xWeiedodFhAXyfslDAiAERSGBQKODYuNLfHuubdEqhI8QTspJ%2BuL0xjth4MmVkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVt7kX6VwiKI%2B65xLKtwD%2BRAJ%2BwqNegAABzhr%2FcL3nJeS%2FNqnYhvveNAoFm88243uy7dRQcMnXFah%2FUBokOpe0ECB2N9rgYoodyUtVcDyuBxJ1r2M1v83UXAZztnS3qhdeTgCbFTeixqvKdeFie5y7LQpcxV82Vzg4THgXYrk7x9Nfhymm3hzYd4OYRGbiVDRRApANVBjGZ1iFVFDPi5AXXQQLOQCGjm2hnXG3omz2e9N0zl4%2BjiYBTH6I1iDX%2Bm56lW8ZGFdvaFroUOhMsuzJYEBNist0LgFA3xcv7kzuxKGvam4N7dCWHCxdmXSwlIc%2BSsjH0Uk783y1EK4MeCyoExmlJl%2FDMOiUq%2Bl0KbkmWFDD37LJEA8Xt%2BQ1QuHUDs8h737FuqPY%2F%2F1yK1NI8oA%2BMHjT%2BJqKq%2F7wKsLr2RA1Yoqx8f8k5GyEdZemimTBXKgUSXIHA6Zjp9m26kxbSYsZ3yi89qha%2B0sddrg5qBb0RFgtJrC1BxPYDAeZ0dC6Q%2F385cO%2BF%2FT1WWxMkw%2F%2FS1IkiioQOib2naWIT34kQsWEncUFdKJKL%2BuC%2FHC3m63oSb61rPD%2BmYEYezBCUQimdGY6Ezx9A4PSkCO0Zkv4J3tMwvniFUi3a1IHhh1Kmu0QUs9Kfbwfch3HdhJBIYw6eajvgY6pgFEfpEED5w2QAgnXKkLpfjF7OGrh2IpY%2BCChvTPTJczm8xnFd17yYr9%2FuHLstDfB70Dv9dFxKErNBUkTps%2B03L9Tkg0ok8YM0g1wt3HJ8O1FTQP4ACzdoWyisJef5I1NINPa1cOxU%2BUWjxcszHutuAw4jPpVYZo98KcWaivLB6G2G0oRLfSuq%2BFl0rQfPbNlOEMHXVW2GGoIy%2FRoL4JhgDOkeYCRbAX&X-Amz-Signature=d175c5f2333f4d3f97bbdcac60b71273fbd3cce643d37689946a26b9735cd39e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCDE3GO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDql5oHB8YsCaCW%2BVoyXAgBwnU4xWeiedodFhAXyfslDAiAERSGBQKODYuNLfHuubdEqhI8QTspJ%2BuL0xjth4MmVkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVt7kX6VwiKI%2B65xLKtwD%2BRAJ%2BwqNegAABzhr%2FcL3nJeS%2FNqnYhvveNAoFm88243uy7dRQcMnXFah%2FUBokOpe0ECB2N9rgYoodyUtVcDyuBxJ1r2M1v83UXAZztnS3qhdeTgCbFTeixqvKdeFie5y7LQpcxV82Vzg4THgXYrk7x9Nfhymm3hzYd4OYRGbiVDRRApANVBjGZ1iFVFDPi5AXXQQLOQCGjm2hnXG3omz2e9N0zl4%2BjiYBTH6I1iDX%2Bm56lW8ZGFdvaFroUOhMsuzJYEBNist0LgFA3xcv7kzuxKGvam4N7dCWHCxdmXSwlIc%2BSsjH0Uk783y1EK4MeCyoExmlJl%2FDMOiUq%2Bl0KbkmWFDD37LJEA8Xt%2BQ1QuHUDs8h737FuqPY%2F%2F1yK1NI8oA%2BMHjT%2BJqKq%2F7wKsLr2RA1Yoqx8f8k5GyEdZemimTBXKgUSXIHA6Zjp9m26kxbSYsZ3yi89qha%2B0sddrg5qBb0RFgtJrC1BxPYDAeZ0dC6Q%2F385cO%2BF%2FT1WWxMkw%2F%2FS1IkiioQOib2naWIT34kQsWEncUFdKJKL%2BuC%2FHC3m63oSb61rPD%2BmYEYezBCUQimdGY6Ezx9A4PSkCO0Zkv4J3tMwvniFUi3a1IHhh1Kmu0QUs9Kfbwfch3HdhJBIYw6eajvgY6pgFEfpEED5w2QAgnXKkLpfjF7OGrh2IpY%2BCChvTPTJczm8xnFd17yYr9%2FuHLstDfB70Dv9dFxKErNBUkTps%2B03L9Tkg0ok8YM0g1wt3HJ8O1FTQP4ACzdoWyisJef5I1NINPa1cOxU%2BUWjxcszHutuAw4jPpVYZo98KcWaivLB6G2G0oRLfSuq%2BFl0rQfPbNlOEMHXVW2GGoIy%2FRoL4JhgDOkeYCRbAX&X-Amz-Signature=0ea1d0d5a73877acfcd1e51e53f7bfee983821a28cf95a8553d0bc39ce27842c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCDE3GO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDql5oHB8YsCaCW%2BVoyXAgBwnU4xWeiedodFhAXyfslDAiAERSGBQKODYuNLfHuubdEqhI8QTspJ%2BuL0xjth4MmVkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVt7kX6VwiKI%2B65xLKtwD%2BRAJ%2BwqNegAABzhr%2FcL3nJeS%2FNqnYhvveNAoFm88243uy7dRQcMnXFah%2FUBokOpe0ECB2N9rgYoodyUtVcDyuBxJ1r2M1v83UXAZztnS3qhdeTgCbFTeixqvKdeFie5y7LQpcxV82Vzg4THgXYrk7x9Nfhymm3hzYd4OYRGbiVDRRApANVBjGZ1iFVFDPi5AXXQQLOQCGjm2hnXG3omz2e9N0zl4%2BjiYBTH6I1iDX%2Bm56lW8ZGFdvaFroUOhMsuzJYEBNist0LgFA3xcv7kzuxKGvam4N7dCWHCxdmXSwlIc%2BSsjH0Uk783y1EK4MeCyoExmlJl%2FDMOiUq%2Bl0KbkmWFDD37LJEA8Xt%2BQ1QuHUDs8h737FuqPY%2F%2F1yK1NI8oA%2BMHjT%2BJqKq%2F7wKsLr2RA1Yoqx8f8k5GyEdZemimTBXKgUSXIHA6Zjp9m26kxbSYsZ3yi89qha%2B0sddrg5qBb0RFgtJrC1BxPYDAeZ0dC6Q%2F385cO%2BF%2FT1WWxMkw%2F%2FS1IkiioQOib2naWIT34kQsWEncUFdKJKL%2BuC%2FHC3m63oSb61rPD%2BmYEYezBCUQimdGY6Ezx9A4PSkCO0Zkv4J3tMwvniFUi3a1IHhh1Kmu0QUs9Kfbwfch3HdhJBIYw6eajvgY6pgFEfpEED5w2QAgnXKkLpfjF7OGrh2IpY%2BCChvTPTJczm8xnFd17yYr9%2FuHLstDfB70Dv9dFxKErNBUkTps%2B03L9Tkg0ok8YM0g1wt3HJ8O1FTQP4ACzdoWyisJef5I1NINPa1cOxU%2BUWjxcszHutuAw4jPpVYZo98KcWaivLB6G2G0oRLfSuq%2BFl0rQfPbNlOEMHXVW2GGoIy%2FRoL4JhgDOkeYCRbAX&X-Amz-Signature=32f7d42d1a7672de7a8817948462a120ccf78bfdb36ec33a9c104d396f7abc39&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCDE3GO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDql5oHB8YsCaCW%2BVoyXAgBwnU4xWeiedodFhAXyfslDAiAERSGBQKODYuNLfHuubdEqhI8QTspJ%2BuL0xjth4MmVkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVt7kX6VwiKI%2B65xLKtwD%2BRAJ%2BwqNegAABzhr%2FcL3nJeS%2FNqnYhvveNAoFm88243uy7dRQcMnXFah%2FUBokOpe0ECB2N9rgYoodyUtVcDyuBxJ1r2M1v83UXAZztnS3qhdeTgCbFTeixqvKdeFie5y7LQpcxV82Vzg4THgXYrk7x9Nfhymm3hzYd4OYRGbiVDRRApANVBjGZ1iFVFDPi5AXXQQLOQCGjm2hnXG3omz2e9N0zl4%2BjiYBTH6I1iDX%2Bm56lW8ZGFdvaFroUOhMsuzJYEBNist0LgFA3xcv7kzuxKGvam4N7dCWHCxdmXSwlIc%2BSsjH0Uk783y1EK4MeCyoExmlJl%2FDMOiUq%2Bl0KbkmWFDD37LJEA8Xt%2BQ1QuHUDs8h737FuqPY%2F%2F1yK1NI8oA%2BMHjT%2BJqKq%2F7wKsLr2RA1Yoqx8f8k5GyEdZemimTBXKgUSXIHA6Zjp9m26kxbSYsZ3yi89qha%2B0sddrg5qBb0RFgtJrC1BxPYDAeZ0dC6Q%2F385cO%2BF%2FT1WWxMkw%2F%2FS1IkiioQOib2naWIT34kQsWEncUFdKJKL%2BuC%2FHC3m63oSb61rPD%2BmYEYezBCUQimdGY6Ezx9A4PSkCO0Zkv4J3tMwvniFUi3a1IHhh1Kmu0QUs9Kfbwfch3HdhJBIYw6eajvgY6pgFEfpEED5w2QAgnXKkLpfjF7OGrh2IpY%2BCChvTPTJczm8xnFd17yYr9%2FuHLstDfB70Dv9dFxKErNBUkTps%2B03L9Tkg0ok8YM0g1wt3HJ8O1FTQP4ACzdoWyisJef5I1NINPa1cOxU%2BUWjxcszHutuAw4jPpVYZo98KcWaivLB6G2G0oRLfSuq%2BFl0rQfPbNlOEMHXVW2GGoIy%2FRoL4JhgDOkeYCRbAX&X-Amz-Signature=8df2192d0129a223cbf750ddc222e9fb7efcad60b33a190695b5569aa8f7f3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCDE3GO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDql5oHB8YsCaCW%2BVoyXAgBwnU4xWeiedodFhAXyfslDAiAERSGBQKODYuNLfHuubdEqhI8QTspJ%2BuL0xjth4MmVkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVt7kX6VwiKI%2B65xLKtwD%2BRAJ%2BwqNegAABzhr%2FcL3nJeS%2FNqnYhvveNAoFm88243uy7dRQcMnXFah%2FUBokOpe0ECB2N9rgYoodyUtVcDyuBxJ1r2M1v83UXAZztnS3qhdeTgCbFTeixqvKdeFie5y7LQpcxV82Vzg4THgXYrk7x9Nfhymm3hzYd4OYRGbiVDRRApANVBjGZ1iFVFDPi5AXXQQLOQCGjm2hnXG3omz2e9N0zl4%2BjiYBTH6I1iDX%2Bm56lW8ZGFdvaFroUOhMsuzJYEBNist0LgFA3xcv7kzuxKGvam4N7dCWHCxdmXSwlIc%2BSsjH0Uk783y1EK4MeCyoExmlJl%2FDMOiUq%2Bl0KbkmWFDD37LJEA8Xt%2BQ1QuHUDs8h737FuqPY%2F%2F1yK1NI8oA%2BMHjT%2BJqKq%2F7wKsLr2RA1Yoqx8f8k5GyEdZemimTBXKgUSXIHA6Zjp9m26kxbSYsZ3yi89qha%2B0sddrg5qBb0RFgtJrC1BxPYDAeZ0dC6Q%2F385cO%2BF%2FT1WWxMkw%2F%2FS1IkiioQOib2naWIT34kQsWEncUFdKJKL%2BuC%2FHC3m63oSb61rPD%2BmYEYezBCUQimdGY6Ezx9A4PSkCO0Zkv4J3tMwvniFUi3a1IHhh1Kmu0QUs9Kfbwfch3HdhJBIYw6eajvgY6pgFEfpEED5w2QAgnXKkLpfjF7OGrh2IpY%2BCChvTPTJczm8xnFd17yYr9%2FuHLstDfB70Dv9dFxKErNBUkTps%2B03L9Tkg0ok8YM0g1wt3HJ8O1FTQP4ACzdoWyisJef5I1NINPa1cOxU%2BUWjxcszHutuAw4jPpVYZo98KcWaivLB6G2G0oRLfSuq%2BFl0rQfPbNlOEMHXVW2GGoIy%2FRoL4JhgDOkeYCRbAX&X-Amz-Signature=8635588d3327aadb83f496da7a18111999390776a4bf273c7c58f7304e971c88&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCDE3GO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDql5oHB8YsCaCW%2BVoyXAgBwnU4xWeiedodFhAXyfslDAiAERSGBQKODYuNLfHuubdEqhI8QTspJ%2BuL0xjth4MmVkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVt7kX6VwiKI%2B65xLKtwD%2BRAJ%2BwqNegAABzhr%2FcL3nJeS%2FNqnYhvveNAoFm88243uy7dRQcMnXFah%2FUBokOpe0ECB2N9rgYoodyUtVcDyuBxJ1r2M1v83UXAZztnS3qhdeTgCbFTeixqvKdeFie5y7LQpcxV82Vzg4THgXYrk7x9Nfhymm3hzYd4OYRGbiVDRRApANVBjGZ1iFVFDPi5AXXQQLOQCGjm2hnXG3omz2e9N0zl4%2BjiYBTH6I1iDX%2Bm56lW8ZGFdvaFroUOhMsuzJYEBNist0LgFA3xcv7kzuxKGvam4N7dCWHCxdmXSwlIc%2BSsjH0Uk783y1EK4MeCyoExmlJl%2FDMOiUq%2Bl0KbkmWFDD37LJEA8Xt%2BQ1QuHUDs8h737FuqPY%2F%2F1yK1NI8oA%2BMHjT%2BJqKq%2F7wKsLr2RA1Yoqx8f8k5GyEdZemimTBXKgUSXIHA6Zjp9m26kxbSYsZ3yi89qha%2B0sddrg5qBb0RFgtJrC1BxPYDAeZ0dC6Q%2F385cO%2BF%2FT1WWxMkw%2F%2FS1IkiioQOib2naWIT34kQsWEncUFdKJKL%2BuC%2FHC3m63oSb61rPD%2BmYEYezBCUQimdGY6Ezx9A4PSkCO0Zkv4J3tMwvniFUi3a1IHhh1Kmu0QUs9Kfbwfch3HdhJBIYw6eajvgY6pgFEfpEED5w2QAgnXKkLpfjF7OGrh2IpY%2BCChvTPTJczm8xnFd17yYr9%2FuHLstDfB70Dv9dFxKErNBUkTps%2B03L9Tkg0ok8YM0g1wt3HJ8O1FTQP4ACzdoWyisJef5I1NINPa1cOxU%2BUWjxcszHutuAw4jPpVYZo98KcWaivLB6G2G0oRLfSuq%2BFl0rQfPbNlOEMHXVW2GGoIy%2FRoL4JhgDOkeYCRbAX&X-Amz-Signature=3fb470da03e63bcd63f14c02fe3c7df558a96d0523e0599143afde595b86e337&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCDE3GO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDql5oHB8YsCaCW%2BVoyXAgBwnU4xWeiedodFhAXyfslDAiAERSGBQKODYuNLfHuubdEqhI8QTspJ%2BuL0xjth4MmVkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVt7kX6VwiKI%2B65xLKtwD%2BRAJ%2BwqNegAABzhr%2FcL3nJeS%2FNqnYhvveNAoFm88243uy7dRQcMnXFah%2FUBokOpe0ECB2N9rgYoodyUtVcDyuBxJ1r2M1v83UXAZztnS3qhdeTgCbFTeixqvKdeFie5y7LQpcxV82Vzg4THgXYrk7x9Nfhymm3hzYd4OYRGbiVDRRApANVBjGZ1iFVFDPi5AXXQQLOQCGjm2hnXG3omz2e9N0zl4%2BjiYBTH6I1iDX%2Bm56lW8ZGFdvaFroUOhMsuzJYEBNist0LgFA3xcv7kzuxKGvam4N7dCWHCxdmXSwlIc%2BSsjH0Uk783y1EK4MeCyoExmlJl%2FDMOiUq%2Bl0KbkmWFDD37LJEA8Xt%2BQ1QuHUDs8h737FuqPY%2F%2F1yK1NI8oA%2BMHjT%2BJqKq%2F7wKsLr2RA1Yoqx8f8k5GyEdZemimTBXKgUSXIHA6Zjp9m26kxbSYsZ3yi89qha%2B0sddrg5qBb0RFgtJrC1BxPYDAeZ0dC6Q%2F385cO%2BF%2FT1WWxMkw%2F%2FS1IkiioQOib2naWIT34kQsWEncUFdKJKL%2BuC%2FHC3m63oSb61rPD%2BmYEYezBCUQimdGY6Ezx9A4PSkCO0Zkv4J3tMwvniFUi3a1IHhh1Kmu0QUs9Kfbwfch3HdhJBIYw6eajvgY6pgFEfpEED5w2QAgnXKkLpfjF7OGrh2IpY%2BCChvTPTJczm8xnFd17yYr9%2FuHLstDfB70Dv9dFxKErNBUkTps%2B03L9Tkg0ok8YM0g1wt3HJ8O1FTQP4ACzdoWyisJef5I1NINPa1cOxU%2BUWjxcszHutuAw4jPpVYZo98KcWaivLB6G2G0oRLfSuq%2BFl0rQfPbNlOEMHXVW2GGoIy%2FRoL4JhgDOkeYCRbAX&X-Amz-Signature=b0c96f33b6792ea8b3737b7a79a6ebe3fb595b30b4d781ca9b55b669f4a73f37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
