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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TDSZAL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBBPCCH6tfPpU3ocRo8VPTyauP4hchMSkCUFS%2BM%2FEfQLAiBNRrX8DhwAr1oxiGr8UHbnDFtYulvHEGjJV100Of3DOSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XU39tWM2aXCyO3%2FKtwDSA8eaNtXTmdFToxlQXoC1NdzeIoMsg4AkGind5qJSp66lF0Iq3P%2F2zDAvFJLoZEK0UeiEZ%2BhROEnbjjKd%2B51bHH4aKdW%2F2aYBusvwqVAVnm9TRen1kYcsDJMT209nLvy%2BegynObLeEO9hYBUPBd%2FwrcIHKa2pYufq2z36SUeYU6rPmeySYL3j5jkDlEggNrfeE4qsIwAn0q9qu%2FxzQSbSnq%2B7tJZA40c%2FmJlCcTeg6gt6v7ayhWrV8GJSwfcYnISJXpY93ixBtX%2FLFLh4ci2GinyT7wm%2FkgbXTOvBHUQcMTyv7Y4qlMIeOWF9SmzeYvsn%2Bmj6ET2uQG28kkq5%2BucuT71vxJZWsFmLK9PBTj5C8xBK3teoUCcz8zVlBG36MB9BVYOkEt1wazYibiTloxULHW2lSsMNcVV6W3B%2Bh%2B28bwQiL2C%2BjJn9JSj2Y2dAjeNL%2BXuos%2FTZRaEiVmTIZuiR%2BFtKwl7FXYhG29%2BkiGnBUNXr0rgX%2Bsy%2FHerxIlvf0Ons2HwtT9cnw9rUyk%2Fq3tUWCG4f%2BfDGBMtx6aQvHJBS5XYxnb70HAOMYvwGjT8Ku36T55zcSxh4kUX34odG0IHL7Gg%2Fxqbp82jIw8W%2FLrZe3x6BNRKzQuERfrQY38whsbxvgY6pgHrGPZZMk%2B3d5pV7D0cK8jR4XgwhndkFzarzlaPDOXWZ4oWy4yf23haPq58cmwKMvNO7dyDHAkKSWyfuEen2YTE4KupIl%2BYwedVHbYgyfuQLg%2BGUAcAs03rc3bggNrMCiRdlt7PH%2FqixQvdUtrzJLAcYFfmkkzLvvRGDQr7giVo89Sp8rIBUvhWalRA8VFh8mCuzgadmX7niRCnfXrLK0sbU2PCyCyI&X-Amz-Signature=26a142b4277b4f4a01c969b035405fda0fb27e1393ad482a09975426a5bb5088&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TDSZAL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBBPCCH6tfPpU3ocRo8VPTyauP4hchMSkCUFS%2BM%2FEfQLAiBNRrX8DhwAr1oxiGr8UHbnDFtYulvHEGjJV100Of3DOSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XU39tWM2aXCyO3%2FKtwDSA8eaNtXTmdFToxlQXoC1NdzeIoMsg4AkGind5qJSp66lF0Iq3P%2F2zDAvFJLoZEK0UeiEZ%2BhROEnbjjKd%2B51bHH4aKdW%2F2aYBusvwqVAVnm9TRen1kYcsDJMT209nLvy%2BegynObLeEO9hYBUPBd%2FwrcIHKa2pYufq2z36SUeYU6rPmeySYL3j5jkDlEggNrfeE4qsIwAn0q9qu%2FxzQSbSnq%2B7tJZA40c%2FmJlCcTeg6gt6v7ayhWrV8GJSwfcYnISJXpY93ixBtX%2FLFLh4ci2GinyT7wm%2FkgbXTOvBHUQcMTyv7Y4qlMIeOWF9SmzeYvsn%2Bmj6ET2uQG28kkq5%2BucuT71vxJZWsFmLK9PBTj5C8xBK3teoUCcz8zVlBG36MB9BVYOkEt1wazYibiTloxULHW2lSsMNcVV6W3B%2Bh%2B28bwQiL2C%2BjJn9JSj2Y2dAjeNL%2BXuos%2FTZRaEiVmTIZuiR%2BFtKwl7FXYhG29%2BkiGnBUNXr0rgX%2Bsy%2FHerxIlvf0Ons2HwtT9cnw9rUyk%2Fq3tUWCG4f%2BfDGBMtx6aQvHJBS5XYxnb70HAOMYvwGjT8Ku36T55zcSxh4kUX34odG0IHL7Gg%2Fxqbp82jIw8W%2FLrZe3x6BNRKzQuERfrQY38whsbxvgY6pgHrGPZZMk%2B3d5pV7D0cK8jR4XgwhndkFzarzlaPDOXWZ4oWy4yf23haPq58cmwKMvNO7dyDHAkKSWyfuEen2YTE4KupIl%2BYwedVHbYgyfuQLg%2BGUAcAs03rc3bggNrMCiRdlt7PH%2FqixQvdUtrzJLAcYFfmkkzLvvRGDQr7giVo89Sp8rIBUvhWalRA8VFh8mCuzgadmX7niRCnfXrLK0sbU2PCyCyI&X-Amz-Signature=7792ac9bdb17c52831ea67f8f299822730c02d49858d7c2b9cf69dc25c2600c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TDSZAL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBBPCCH6tfPpU3ocRo8VPTyauP4hchMSkCUFS%2BM%2FEfQLAiBNRrX8DhwAr1oxiGr8UHbnDFtYulvHEGjJV100Of3DOSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XU39tWM2aXCyO3%2FKtwDSA8eaNtXTmdFToxlQXoC1NdzeIoMsg4AkGind5qJSp66lF0Iq3P%2F2zDAvFJLoZEK0UeiEZ%2BhROEnbjjKd%2B51bHH4aKdW%2F2aYBusvwqVAVnm9TRen1kYcsDJMT209nLvy%2BegynObLeEO9hYBUPBd%2FwrcIHKa2pYufq2z36SUeYU6rPmeySYL3j5jkDlEggNrfeE4qsIwAn0q9qu%2FxzQSbSnq%2B7tJZA40c%2FmJlCcTeg6gt6v7ayhWrV8GJSwfcYnISJXpY93ixBtX%2FLFLh4ci2GinyT7wm%2FkgbXTOvBHUQcMTyv7Y4qlMIeOWF9SmzeYvsn%2Bmj6ET2uQG28kkq5%2BucuT71vxJZWsFmLK9PBTj5C8xBK3teoUCcz8zVlBG36MB9BVYOkEt1wazYibiTloxULHW2lSsMNcVV6W3B%2Bh%2B28bwQiL2C%2BjJn9JSj2Y2dAjeNL%2BXuos%2FTZRaEiVmTIZuiR%2BFtKwl7FXYhG29%2BkiGnBUNXr0rgX%2Bsy%2FHerxIlvf0Ons2HwtT9cnw9rUyk%2Fq3tUWCG4f%2BfDGBMtx6aQvHJBS5XYxnb70HAOMYvwGjT8Ku36T55zcSxh4kUX34odG0IHL7Gg%2Fxqbp82jIw8W%2FLrZe3x6BNRKzQuERfrQY38whsbxvgY6pgHrGPZZMk%2B3d5pV7D0cK8jR4XgwhndkFzarzlaPDOXWZ4oWy4yf23haPq58cmwKMvNO7dyDHAkKSWyfuEen2YTE4KupIl%2BYwedVHbYgyfuQLg%2BGUAcAs03rc3bggNrMCiRdlt7PH%2FqixQvdUtrzJLAcYFfmkkzLvvRGDQr7giVo89Sp8rIBUvhWalRA8VFh8mCuzgadmX7niRCnfXrLK0sbU2PCyCyI&X-Amz-Signature=556a56481956c89f91a4c29a682629865a0c58b4e32a972af0c640bd832fe563&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TDSZAL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBBPCCH6tfPpU3ocRo8VPTyauP4hchMSkCUFS%2BM%2FEfQLAiBNRrX8DhwAr1oxiGr8UHbnDFtYulvHEGjJV100Of3DOSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XU39tWM2aXCyO3%2FKtwDSA8eaNtXTmdFToxlQXoC1NdzeIoMsg4AkGind5qJSp66lF0Iq3P%2F2zDAvFJLoZEK0UeiEZ%2BhROEnbjjKd%2B51bHH4aKdW%2F2aYBusvwqVAVnm9TRen1kYcsDJMT209nLvy%2BegynObLeEO9hYBUPBd%2FwrcIHKa2pYufq2z36SUeYU6rPmeySYL3j5jkDlEggNrfeE4qsIwAn0q9qu%2FxzQSbSnq%2B7tJZA40c%2FmJlCcTeg6gt6v7ayhWrV8GJSwfcYnISJXpY93ixBtX%2FLFLh4ci2GinyT7wm%2FkgbXTOvBHUQcMTyv7Y4qlMIeOWF9SmzeYvsn%2Bmj6ET2uQG28kkq5%2BucuT71vxJZWsFmLK9PBTj5C8xBK3teoUCcz8zVlBG36MB9BVYOkEt1wazYibiTloxULHW2lSsMNcVV6W3B%2Bh%2B28bwQiL2C%2BjJn9JSj2Y2dAjeNL%2BXuos%2FTZRaEiVmTIZuiR%2BFtKwl7FXYhG29%2BkiGnBUNXr0rgX%2Bsy%2FHerxIlvf0Ons2HwtT9cnw9rUyk%2Fq3tUWCG4f%2BfDGBMtx6aQvHJBS5XYxnb70HAOMYvwGjT8Ku36T55zcSxh4kUX34odG0IHL7Gg%2Fxqbp82jIw8W%2FLrZe3x6BNRKzQuERfrQY38whsbxvgY6pgHrGPZZMk%2B3d5pV7D0cK8jR4XgwhndkFzarzlaPDOXWZ4oWy4yf23haPq58cmwKMvNO7dyDHAkKSWyfuEen2YTE4KupIl%2BYwedVHbYgyfuQLg%2BGUAcAs03rc3bggNrMCiRdlt7PH%2FqixQvdUtrzJLAcYFfmkkzLvvRGDQr7giVo89Sp8rIBUvhWalRA8VFh8mCuzgadmX7niRCnfXrLK0sbU2PCyCyI&X-Amz-Signature=976f8696005a17670fb0ebf77169130206be609aab70d57033f96a9d1f78a2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TDSZAL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBBPCCH6tfPpU3ocRo8VPTyauP4hchMSkCUFS%2BM%2FEfQLAiBNRrX8DhwAr1oxiGr8UHbnDFtYulvHEGjJV100Of3DOSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XU39tWM2aXCyO3%2FKtwDSA8eaNtXTmdFToxlQXoC1NdzeIoMsg4AkGind5qJSp66lF0Iq3P%2F2zDAvFJLoZEK0UeiEZ%2BhROEnbjjKd%2B51bHH4aKdW%2F2aYBusvwqVAVnm9TRen1kYcsDJMT209nLvy%2BegynObLeEO9hYBUPBd%2FwrcIHKa2pYufq2z36SUeYU6rPmeySYL3j5jkDlEggNrfeE4qsIwAn0q9qu%2FxzQSbSnq%2B7tJZA40c%2FmJlCcTeg6gt6v7ayhWrV8GJSwfcYnISJXpY93ixBtX%2FLFLh4ci2GinyT7wm%2FkgbXTOvBHUQcMTyv7Y4qlMIeOWF9SmzeYvsn%2Bmj6ET2uQG28kkq5%2BucuT71vxJZWsFmLK9PBTj5C8xBK3teoUCcz8zVlBG36MB9BVYOkEt1wazYibiTloxULHW2lSsMNcVV6W3B%2Bh%2B28bwQiL2C%2BjJn9JSj2Y2dAjeNL%2BXuos%2FTZRaEiVmTIZuiR%2BFtKwl7FXYhG29%2BkiGnBUNXr0rgX%2Bsy%2FHerxIlvf0Ons2HwtT9cnw9rUyk%2Fq3tUWCG4f%2BfDGBMtx6aQvHJBS5XYxnb70HAOMYvwGjT8Ku36T55zcSxh4kUX34odG0IHL7Gg%2Fxqbp82jIw8W%2FLrZe3x6BNRKzQuERfrQY38whsbxvgY6pgHrGPZZMk%2B3d5pV7D0cK8jR4XgwhndkFzarzlaPDOXWZ4oWy4yf23haPq58cmwKMvNO7dyDHAkKSWyfuEen2YTE4KupIl%2BYwedVHbYgyfuQLg%2BGUAcAs03rc3bggNrMCiRdlt7PH%2FqixQvdUtrzJLAcYFfmkkzLvvRGDQr7giVo89Sp8rIBUvhWalRA8VFh8mCuzgadmX7niRCnfXrLK0sbU2PCyCyI&X-Amz-Signature=e3c886612c5e21a9527a1ff273b46737284577708200c4fa81800db3945a273f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TDSZAL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBBPCCH6tfPpU3ocRo8VPTyauP4hchMSkCUFS%2BM%2FEfQLAiBNRrX8DhwAr1oxiGr8UHbnDFtYulvHEGjJV100Of3DOSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XU39tWM2aXCyO3%2FKtwDSA8eaNtXTmdFToxlQXoC1NdzeIoMsg4AkGind5qJSp66lF0Iq3P%2F2zDAvFJLoZEK0UeiEZ%2BhROEnbjjKd%2B51bHH4aKdW%2F2aYBusvwqVAVnm9TRen1kYcsDJMT209nLvy%2BegynObLeEO9hYBUPBd%2FwrcIHKa2pYufq2z36SUeYU6rPmeySYL3j5jkDlEggNrfeE4qsIwAn0q9qu%2FxzQSbSnq%2B7tJZA40c%2FmJlCcTeg6gt6v7ayhWrV8GJSwfcYnISJXpY93ixBtX%2FLFLh4ci2GinyT7wm%2FkgbXTOvBHUQcMTyv7Y4qlMIeOWF9SmzeYvsn%2Bmj6ET2uQG28kkq5%2BucuT71vxJZWsFmLK9PBTj5C8xBK3teoUCcz8zVlBG36MB9BVYOkEt1wazYibiTloxULHW2lSsMNcVV6W3B%2Bh%2B28bwQiL2C%2BjJn9JSj2Y2dAjeNL%2BXuos%2FTZRaEiVmTIZuiR%2BFtKwl7FXYhG29%2BkiGnBUNXr0rgX%2Bsy%2FHerxIlvf0Ons2HwtT9cnw9rUyk%2Fq3tUWCG4f%2BfDGBMtx6aQvHJBS5XYxnb70HAOMYvwGjT8Ku36T55zcSxh4kUX34odG0IHL7Gg%2Fxqbp82jIw8W%2FLrZe3x6BNRKzQuERfrQY38whsbxvgY6pgHrGPZZMk%2B3d5pV7D0cK8jR4XgwhndkFzarzlaPDOXWZ4oWy4yf23haPq58cmwKMvNO7dyDHAkKSWyfuEen2YTE4KupIl%2BYwedVHbYgyfuQLg%2BGUAcAs03rc3bggNrMCiRdlt7PH%2FqixQvdUtrzJLAcYFfmkkzLvvRGDQr7giVo89Sp8rIBUvhWalRA8VFh8mCuzgadmX7niRCnfXrLK0sbU2PCyCyI&X-Amz-Signature=7318a52dada88d3134c1ab62e1933ee8eb8d3764df1dbc8fc120783d30b6a702&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TDSZAL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBBPCCH6tfPpU3ocRo8VPTyauP4hchMSkCUFS%2BM%2FEfQLAiBNRrX8DhwAr1oxiGr8UHbnDFtYulvHEGjJV100Of3DOSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XU39tWM2aXCyO3%2FKtwDSA8eaNtXTmdFToxlQXoC1NdzeIoMsg4AkGind5qJSp66lF0Iq3P%2F2zDAvFJLoZEK0UeiEZ%2BhROEnbjjKd%2B51bHH4aKdW%2F2aYBusvwqVAVnm9TRen1kYcsDJMT209nLvy%2BegynObLeEO9hYBUPBd%2FwrcIHKa2pYufq2z36SUeYU6rPmeySYL3j5jkDlEggNrfeE4qsIwAn0q9qu%2FxzQSbSnq%2B7tJZA40c%2FmJlCcTeg6gt6v7ayhWrV8GJSwfcYnISJXpY93ixBtX%2FLFLh4ci2GinyT7wm%2FkgbXTOvBHUQcMTyv7Y4qlMIeOWF9SmzeYvsn%2Bmj6ET2uQG28kkq5%2BucuT71vxJZWsFmLK9PBTj5C8xBK3teoUCcz8zVlBG36MB9BVYOkEt1wazYibiTloxULHW2lSsMNcVV6W3B%2Bh%2B28bwQiL2C%2BjJn9JSj2Y2dAjeNL%2BXuos%2FTZRaEiVmTIZuiR%2BFtKwl7FXYhG29%2BkiGnBUNXr0rgX%2Bsy%2FHerxIlvf0Ons2HwtT9cnw9rUyk%2Fq3tUWCG4f%2BfDGBMtx6aQvHJBS5XYxnb70HAOMYvwGjT8Ku36T55zcSxh4kUX34odG0IHL7Gg%2Fxqbp82jIw8W%2FLrZe3x6BNRKzQuERfrQY38whsbxvgY6pgHrGPZZMk%2B3d5pV7D0cK8jR4XgwhndkFzarzlaPDOXWZ4oWy4yf23haPq58cmwKMvNO7dyDHAkKSWyfuEen2YTE4KupIl%2BYwedVHbYgyfuQLg%2BGUAcAs03rc3bggNrMCiRdlt7PH%2FqixQvdUtrzJLAcYFfmkkzLvvRGDQr7giVo89Sp8rIBUvhWalRA8VFh8mCuzgadmX7niRCnfXrLK0sbU2PCyCyI&X-Amz-Signature=6d8c493416f16375d1d90151375927b6a0db9f1edb32231bbcdba119d1242755&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
