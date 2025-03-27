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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYRJEW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcOfCsMkh3wYie9MSZ4KtJFw%2Fu0GRowwoFgBLnxEr5QIgU%2B9H8GWfVnmaPeg0MTW4esrzb0hl8flFg%2Br4D0PhW5gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6upVc%2BQwRTkZnMAyrcA57IC2cYlfmEDBf6pHNWkxccrpoaWSOLcz%2BdlTcUsSL32v0c7ymyc4bMobepEK4J18U63%2F%2BupMj4%2FfuHaBKKig7XWogBZPLR%2BacMPa5GMMBWJUSo%2BydMVtIIF187SOb1YlVR5bgyRxxILCZ4e79eM%2Fx40FvaRCbKgPyl51cHtwpealUbv0C6RljvwcafZFE2p8ejAqmcjT7bwjlPzgdiab1N7gEJg%2Fx5NnzGM6amUmjggLBfgyXFB%2F2DAgdGgKT5b5hAfmjUDQhTtcshSW1BxCwIH6EV3mwbhp9yESrhKC1SZdcjA3y6qdZpSkw2Qy54HCjm4yoKn7%2FGkWDy1Xjm%2BcynHL72l%2BXJL6b4kFpVs8c3y0K7%2FkG5Colba%2FDfUPBoVsvJhAsPdE8ldXY2ffeU9mHk%2FgWShJZ0oiM%2B8kcTry00byNX2YqvJ%2FtR55oM64iQuIzp8geyZOHEfmeRj2TDksXD%2BoueIGWALm1LNQPbi7Jd4sJ0%2BSiOtKnqwGeAPcHdaMO8uNLOLzZq4871sTwr%2F6gpQwgKxfYJ2Q6zcn2v5mRyuZzMW3Tqqhb9qqQzSjRDxFQH1IJr0VTN9G0KH1m4BUIX6TQ5Lpvu8hwbt7m7Apt89QQCaRuHPVY2TrkWMPq%2Flr8GOqUBuJMKICAatTjY1oxFT0TvxOAGClW884JIwrjoey8inJu8DGOxHrKeWPsV7KsBcn%2FzEBTOl2wvuT%2F7mPru6TtBj8r94AkOV9JIOOgRtQQi72ln73dJWAN3StmhmceBEez70nRh0du7dSGPS1yEJtkPYfHzPVuY5bGMJJc1sX%2FSlyrtlLt%2BeD3a4el6qAPUZParRm2t9Klurvs23oS2uKUCgCEYZk%2BL&X-Amz-Signature=ce24b290f85899f98affdba7af62ef8728fd9efcdc505fbbeeced1f73a02fd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYRJEW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcOfCsMkh3wYie9MSZ4KtJFw%2Fu0GRowwoFgBLnxEr5QIgU%2B9H8GWfVnmaPeg0MTW4esrzb0hl8flFg%2Br4D0PhW5gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6upVc%2BQwRTkZnMAyrcA57IC2cYlfmEDBf6pHNWkxccrpoaWSOLcz%2BdlTcUsSL32v0c7ymyc4bMobepEK4J18U63%2F%2BupMj4%2FfuHaBKKig7XWogBZPLR%2BacMPa5GMMBWJUSo%2BydMVtIIF187SOb1YlVR5bgyRxxILCZ4e79eM%2Fx40FvaRCbKgPyl51cHtwpealUbv0C6RljvwcafZFE2p8ejAqmcjT7bwjlPzgdiab1N7gEJg%2Fx5NnzGM6amUmjggLBfgyXFB%2F2DAgdGgKT5b5hAfmjUDQhTtcshSW1BxCwIH6EV3mwbhp9yESrhKC1SZdcjA3y6qdZpSkw2Qy54HCjm4yoKn7%2FGkWDy1Xjm%2BcynHL72l%2BXJL6b4kFpVs8c3y0K7%2FkG5Colba%2FDfUPBoVsvJhAsPdE8ldXY2ffeU9mHk%2FgWShJZ0oiM%2B8kcTry00byNX2YqvJ%2FtR55oM64iQuIzp8geyZOHEfmeRj2TDksXD%2BoueIGWALm1LNQPbi7Jd4sJ0%2BSiOtKnqwGeAPcHdaMO8uNLOLzZq4871sTwr%2F6gpQwgKxfYJ2Q6zcn2v5mRyuZzMW3Tqqhb9qqQzSjRDxFQH1IJr0VTN9G0KH1m4BUIX6TQ5Lpvu8hwbt7m7Apt89QQCaRuHPVY2TrkWMPq%2Flr8GOqUBuJMKICAatTjY1oxFT0TvxOAGClW884JIwrjoey8inJu8DGOxHrKeWPsV7KsBcn%2FzEBTOl2wvuT%2F7mPru6TtBj8r94AkOV9JIOOgRtQQi72ln73dJWAN3StmhmceBEez70nRh0du7dSGPS1yEJtkPYfHzPVuY5bGMJJc1sX%2FSlyrtlLt%2BeD3a4el6qAPUZParRm2t9Klurvs23oS2uKUCgCEYZk%2BL&X-Amz-Signature=5abc083c16a250962193751f866d423722213e46ad5fd5829fea9f4c98fa748f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYRJEW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcOfCsMkh3wYie9MSZ4KtJFw%2Fu0GRowwoFgBLnxEr5QIgU%2B9H8GWfVnmaPeg0MTW4esrzb0hl8flFg%2Br4D0PhW5gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6upVc%2BQwRTkZnMAyrcA57IC2cYlfmEDBf6pHNWkxccrpoaWSOLcz%2BdlTcUsSL32v0c7ymyc4bMobepEK4J18U63%2F%2BupMj4%2FfuHaBKKig7XWogBZPLR%2BacMPa5GMMBWJUSo%2BydMVtIIF187SOb1YlVR5bgyRxxILCZ4e79eM%2Fx40FvaRCbKgPyl51cHtwpealUbv0C6RljvwcafZFE2p8ejAqmcjT7bwjlPzgdiab1N7gEJg%2Fx5NnzGM6amUmjggLBfgyXFB%2F2DAgdGgKT5b5hAfmjUDQhTtcshSW1BxCwIH6EV3mwbhp9yESrhKC1SZdcjA3y6qdZpSkw2Qy54HCjm4yoKn7%2FGkWDy1Xjm%2BcynHL72l%2BXJL6b4kFpVs8c3y0K7%2FkG5Colba%2FDfUPBoVsvJhAsPdE8ldXY2ffeU9mHk%2FgWShJZ0oiM%2B8kcTry00byNX2YqvJ%2FtR55oM64iQuIzp8geyZOHEfmeRj2TDksXD%2BoueIGWALm1LNQPbi7Jd4sJ0%2BSiOtKnqwGeAPcHdaMO8uNLOLzZq4871sTwr%2F6gpQwgKxfYJ2Q6zcn2v5mRyuZzMW3Tqqhb9qqQzSjRDxFQH1IJr0VTN9G0KH1m4BUIX6TQ5Lpvu8hwbt7m7Apt89QQCaRuHPVY2TrkWMPq%2Flr8GOqUBuJMKICAatTjY1oxFT0TvxOAGClW884JIwrjoey8inJu8DGOxHrKeWPsV7KsBcn%2FzEBTOl2wvuT%2F7mPru6TtBj8r94AkOV9JIOOgRtQQi72ln73dJWAN3StmhmceBEez70nRh0du7dSGPS1yEJtkPYfHzPVuY5bGMJJc1sX%2FSlyrtlLt%2BeD3a4el6qAPUZParRm2t9Klurvs23oS2uKUCgCEYZk%2BL&X-Amz-Signature=4ade9a3181e50bb1e4d4dd4360bfaff3050cf0948bc4f320a61ecc1542733d27&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYRJEW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcOfCsMkh3wYie9MSZ4KtJFw%2Fu0GRowwoFgBLnxEr5QIgU%2B9H8GWfVnmaPeg0MTW4esrzb0hl8flFg%2Br4D0PhW5gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6upVc%2BQwRTkZnMAyrcA57IC2cYlfmEDBf6pHNWkxccrpoaWSOLcz%2BdlTcUsSL32v0c7ymyc4bMobepEK4J18U63%2F%2BupMj4%2FfuHaBKKig7XWogBZPLR%2BacMPa5GMMBWJUSo%2BydMVtIIF187SOb1YlVR5bgyRxxILCZ4e79eM%2Fx40FvaRCbKgPyl51cHtwpealUbv0C6RljvwcafZFE2p8ejAqmcjT7bwjlPzgdiab1N7gEJg%2Fx5NnzGM6amUmjggLBfgyXFB%2F2DAgdGgKT5b5hAfmjUDQhTtcshSW1BxCwIH6EV3mwbhp9yESrhKC1SZdcjA3y6qdZpSkw2Qy54HCjm4yoKn7%2FGkWDy1Xjm%2BcynHL72l%2BXJL6b4kFpVs8c3y0K7%2FkG5Colba%2FDfUPBoVsvJhAsPdE8ldXY2ffeU9mHk%2FgWShJZ0oiM%2B8kcTry00byNX2YqvJ%2FtR55oM64iQuIzp8geyZOHEfmeRj2TDksXD%2BoueIGWALm1LNQPbi7Jd4sJ0%2BSiOtKnqwGeAPcHdaMO8uNLOLzZq4871sTwr%2F6gpQwgKxfYJ2Q6zcn2v5mRyuZzMW3Tqqhb9qqQzSjRDxFQH1IJr0VTN9G0KH1m4BUIX6TQ5Lpvu8hwbt7m7Apt89QQCaRuHPVY2TrkWMPq%2Flr8GOqUBuJMKICAatTjY1oxFT0TvxOAGClW884JIwrjoey8inJu8DGOxHrKeWPsV7KsBcn%2FzEBTOl2wvuT%2F7mPru6TtBj8r94AkOV9JIOOgRtQQi72ln73dJWAN3StmhmceBEez70nRh0du7dSGPS1yEJtkPYfHzPVuY5bGMJJc1sX%2FSlyrtlLt%2BeD3a4el6qAPUZParRm2t9Klurvs23oS2uKUCgCEYZk%2BL&X-Amz-Signature=011e69591229e21ba4a227cd824ac1afab8a2e8efb4741475d0fa694cf1da7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYRJEW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcOfCsMkh3wYie9MSZ4KtJFw%2Fu0GRowwoFgBLnxEr5QIgU%2B9H8GWfVnmaPeg0MTW4esrzb0hl8flFg%2Br4D0PhW5gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6upVc%2BQwRTkZnMAyrcA57IC2cYlfmEDBf6pHNWkxccrpoaWSOLcz%2BdlTcUsSL32v0c7ymyc4bMobepEK4J18U63%2F%2BupMj4%2FfuHaBKKig7XWogBZPLR%2BacMPa5GMMBWJUSo%2BydMVtIIF187SOb1YlVR5bgyRxxILCZ4e79eM%2Fx40FvaRCbKgPyl51cHtwpealUbv0C6RljvwcafZFE2p8ejAqmcjT7bwjlPzgdiab1N7gEJg%2Fx5NnzGM6amUmjggLBfgyXFB%2F2DAgdGgKT5b5hAfmjUDQhTtcshSW1BxCwIH6EV3mwbhp9yESrhKC1SZdcjA3y6qdZpSkw2Qy54HCjm4yoKn7%2FGkWDy1Xjm%2BcynHL72l%2BXJL6b4kFpVs8c3y0K7%2FkG5Colba%2FDfUPBoVsvJhAsPdE8ldXY2ffeU9mHk%2FgWShJZ0oiM%2B8kcTry00byNX2YqvJ%2FtR55oM64iQuIzp8geyZOHEfmeRj2TDksXD%2BoueIGWALm1LNQPbi7Jd4sJ0%2BSiOtKnqwGeAPcHdaMO8uNLOLzZq4871sTwr%2F6gpQwgKxfYJ2Q6zcn2v5mRyuZzMW3Tqqhb9qqQzSjRDxFQH1IJr0VTN9G0KH1m4BUIX6TQ5Lpvu8hwbt7m7Apt89QQCaRuHPVY2TrkWMPq%2Flr8GOqUBuJMKICAatTjY1oxFT0TvxOAGClW884JIwrjoey8inJu8DGOxHrKeWPsV7KsBcn%2FzEBTOl2wvuT%2F7mPru6TtBj8r94AkOV9JIOOgRtQQi72ln73dJWAN3StmhmceBEez70nRh0du7dSGPS1yEJtkPYfHzPVuY5bGMJJc1sX%2FSlyrtlLt%2BeD3a4el6qAPUZParRm2t9Klurvs23oS2uKUCgCEYZk%2BL&X-Amz-Signature=561eeb7bf3302e1515ff89dda21f450fcf20ac20e3d6928b369fec908d76f398&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYRJEW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcOfCsMkh3wYie9MSZ4KtJFw%2Fu0GRowwoFgBLnxEr5QIgU%2B9H8GWfVnmaPeg0MTW4esrzb0hl8flFg%2Br4D0PhW5gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6upVc%2BQwRTkZnMAyrcA57IC2cYlfmEDBf6pHNWkxccrpoaWSOLcz%2BdlTcUsSL32v0c7ymyc4bMobepEK4J18U63%2F%2BupMj4%2FfuHaBKKig7XWogBZPLR%2BacMPa5GMMBWJUSo%2BydMVtIIF187SOb1YlVR5bgyRxxILCZ4e79eM%2Fx40FvaRCbKgPyl51cHtwpealUbv0C6RljvwcafZFE2p8ejAqmcjT7bwjlPzgdiab1N7gEJg%2Fx5NnzGM6amUmjggLBfgyXFB%2F2DAgdGgKT5b5hAfmjUDQhTtcshSW1BxCwIH6EV3mwbhp9yESrhKC1SZdcjA3y6qdZpSkw2Qy54HCjm4yoKn7%2FGkWDy1Xjm%2BcynHL72l%2BXJL6b4kFpVs8c3y0K7%2FkG5Colba%2FDfUPBoVsvJhAsPdE8ldXY2ffeU9mHk%2FgWShJZ0oiM%2B8kcTry00byNX2YqvJ%2FtR55oM64iQuIzp8geyZOHEfmeRj2TDksXD%2BoueIGWALm1LNQPbi7Jd4sJ0%2BSiOtKnqwGeAPcHdaMO8uNLOLzZq4871sTwr%2F6gpQwgKxfYJ2Q6zcn2v5mRyuZzMW3Tqqhb9qqQzSjRDxFQH1IJr0VTN9G0KH1m4BUIX6TQ5Lpvu8hwbt7m7Apt89QQCaRuHPVY2TrkWMPq%2Flr8GOqUBuJMKICAatTjY1oxFT0TvxOAGClW884JIwrjoey8inJu8DGOxHrKeWPsV7KsBcn%2FzEBTOl2wvuT%2F7mPru6TtBj8r94AkOV9JIOOgRtQQi72ln73dJWAN3StmhmceBEez70nRh0du7dSGPS1yEJtkPYfHzPVuY5bGMJJc1sX%2FSlyrtlLt%2BeD3a4el6qAPUZParRm2t9Klurvs23oS2uKUCgCEYZk%2BL&X-Amz-Signature=5fb58b831a8fcd63a644677909e421f5b1c195c80e635c57dd5a40d73fda15d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYRJEW5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcOfCsMkh3wYie9MSZ4KtJFw%2Fu0GRowwoFgBLnxEr5QIgU%2B9H8GWfVnmaPeg0MTW4esrzb0hl8flFg%2Br4D0PhW5gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL6upVc%2BQwRTkZnMAyrcA57IC2cYlfmEDBf6pHNWkxccrpoaWSOLcz%2BdlTcUsSL32v0c7ymyc4bMobepEK4J18U63%2F%2BupMj4%2FfuHaBKKig7XWogBZPLR%2BacMPa5GMMBWJUSo%2BydMVtIIF187SOb1YlVR5bgyRxxILCZ4e79eM%2Fx40FvaRCbKgPyl51cHtwpealUbv0C6RljvwcafZFE2p8ejAqmcjT7bwjlPzgdiab1N7gEJg%2Fx5NnzGM6amUmjggLBfgyXFB%2F2DAgdGgKT5b5hAfmjUDQhTtcshSW1BxCwIH6EV3mwbhp9yESrhKC1SZdcjA3y6qdZpSkw2Qy54HCjm4yoKn7%2FGkWDy1Xjm%2BcynHL72l%2BXJL6b4kFpVs8c3y0K7%2FkG5Colba%2FDfUPBoVsvJhAsPdE8ldXY2ffeU9mHk%2FgWShJZ0oiM%2B8kcTry00byNX2YqvJ%2FtR55oM64iQuIzp8geyZOHEfmeRj2TDksXD%2BoueIGWALm1LNQPbi7Jd4sJ0%2BSiOtKnqwGeAPcHdaMO8uNLOLzZq4871sTwr%2F6gpQwgKxfYJ2Q6zcn2v5mRyuZzMW3Tqqhb9qqQzSjRDxFQH1IJr0VTN9G0KH1m4BUIX6TQ5Lpvu8hwbt7m7Apt89QQCaRuHPVY2TrkWMPq%2Flr8GOqUBuJMKICAatTjY1oxFT0TvxOAGClW884JIwrjoey8inJu8DGOxHrKeWPsV7KsBcn%2FzEBTOl2wvuT%2F7mPru6TtBj8r94AkOV9JIOOgRtQQi72ln73dJWAN3StmhmceBEez70nRh0du7dSGPS1yEJtkPYfHzPVuY5bGMJJc1sX%2FSlyrtlLt%2BeD3a4el6qAPUZParRm2t9Klurvs23oS2uKUCgCEYZk%2BL&X-Amz-Signature=b4be113be68af7c96832ed506069689925c69121d60d08577d51384836a75021&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
