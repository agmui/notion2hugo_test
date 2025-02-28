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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZZD2UE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFndpHWjXU%2FRZj%2FtC6N5bhxtX2dFY1Cb%2F673xvLVCAOhAiEAnW6%2FvY7qrzBYLXo6yz4o3i8HeD%2BDfLneB%2BlPmOI59EQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiKG5UmZaK%2BIVRA4CrcA5QCI7m4S1gSUD5DE0SewCPPjCNi85SERcapgvzdJbgTAaCIBev36OdEjOE%2F5Q3B%2BW6zXwfHhOK%2FHsOXJHZYWd42A8GmyjIRQ5PmFmrjmpeuT1Klv2afKWCcogJgZvR9AuJdYYPyglBwSKAaarqIqSSdAvqmVwddrhDze2WzAkhJES9KrByi1lHS01x09F5lWhOp6Hf5A5bmH83XPS60bjCNBPzAQVA6r2a4VsRm4qNOk2DnZWxwXvUdSomiD6xkdc9bmMWBCjv2UpSMCNOmAzJUyLoGMgURZMsWyOoGdyMv1u6UNXB%2BTLm1KLCIm7y0aJwCNcuR6AhglNjlw3GBLrCUOPvsokgk2Dcc0PZiN1Eb3l3PiyvPKkFmPzjym%2FRSiwbPnZcx4McFm8%2BKvrZKGS3OJAFR1vkN05cZsW%2FihOwWdJjHu1n6i33sy0M20yd3L7wqdPlTkrUMtWX8GNDjEoUgC447zGhBs4O7M0tHxrRxuZsbRMAjbHpbsd%2BmzgPK3XO5J%2Bssgh7ukifFdLyxI1BUS%2FJDC3ojo9csNGhThK2PKcuT%2BoaROQKxMPHQE271qxPcejkbo6uOJOTnijo6Z6h5ZIRIO9BUBzp6vArebXKQ5Gow5ZVsOwCc4Na2MK%2FzhL4GOqUBX5MzAcOk9i0cCSN8VxwCG4GWvqpQC2Xbi8RSQHaKn8vZ7TNSnqnnKUdMH6TwtWZl66KGU57RO6e4%2B7MlYmv8w485H%2FBHT7Sz5lO0U1FZnwErVMF%2FtJiT6dGnM3BkgfvY5QCa8H8mNu1hzR%2FAen%2BqSzYn5WW6c%2FVDGMFCastyOf1HUQXBOlnxvguKHUab5ny5o0if8v%2BBKaVIVmlcRT%2BSRmLK8fxg&X-Amz-Signature=1789c5b20e84b96579a6f461e1f6fafc1fa17b6fd7f6dce99a0354c4046e331f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZZD2UE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFndpHWjXU%2FRZj%2FtC6N5bhxtX2dFY1Cb%2F673xvLVCAOhAiEAnW6%2FvY7qrzBYLXo6yz4o3i8HeD%2BDfLneB%2BlPmOI59EQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiKG5UmZaK%2BIVRA4CrcA5QCI7m4S1gSUD5DE0SewCPPjCNi85SERcapgvzdJbgTAaCIBev36OdEjOE%2F5Q3B%2BW6zXwfHhOK%2FHsOXJHZYWd42A8GmyjIRQ5PmFmrjmpeuT1Klv2afKWCcogJgZvR9AuJdYYPyglBwSKAaarqIqSSdAvqmVwddrhDze2WzAkhJES9KrByi1lHS01x09F5lWhOp6Hf5A5bmH83XPS60bjCNBPzAQVA6r2a4VsRm4qNOk2DnZWxwXvUdSomiD6xkdc9bmMWBCjv2UpSMCNOmAzJUyLoGMgURZMsWyOoGdyMv1u6UNXB%2BTLm1KLCIm7y0aJwCNcuR6AhglNjlw3GBLrCUOPvsokgk2Dcc0PZiN1Eb3l3PiyvPKkFmPzjym%2FRSiwbPnZcx4McFm8%2BKvrZKGS3OJAFR1vkN05cZsW%2FihOwWdJjHu1n6i33sy0M20yd3L7wqdPlTkrUMtWX8GNDjEoUgC447zGhBs4O7M0tHxrRxuZsbRMAjbHpbsd%2BmzgPK3XO5J%2Bssgh7ukifFdLyxI1BUS%2FJDC3ojo9csNGhThK2PKcuT%2BoaROQKxMPHQE271qxPcejkbo6uOJOTnijo6Z6h5ZIRIO9BUBzp6vArebXKQ5Gow5ZVsOwCc4Na2MK%2FzhL4GOqUBX5MzAcOk9i0cCSN8VxwCG4GWvqpQC2Xbi8RSQHaKn8vZ7TNSnqnnKUdMH6TwtWZl66KGU57RO6e4%2B7MlYmv8w485H%2FBHT7Sz5lO0U1FZnwErVMF%2FtJiT6dGnM3BkgfvY5QCa8H8mNu1hzR%2FAen%2BqSzYn5WW6c%2FVDGMFCastyOf1HUQXBOlnxvguKHUab5ny5o0if8v%2BBKaVIVmlcRT%2BSRmLK8fxg&X-Amz-Signature=433a950dd9ac2eecf8bff79e3b873dab4d0e0aabc3c17b784f4a7cc80604eadd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZZD2UE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFndpHWjXU%2FRZj%2FtC6N5bhxtX2dFY1Cb%2F673xvLVCAOhAiEAnW6%2FvY7qrzBYLXo6yz4o3i8HeD%2BDfLneB%2BlPmOI59EQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiKG5UmZaK%2BIVRA4CrcA5QCI7m4S1gSUD5DE0SewCPPjCNi85SERcapgvzdJbgTAaCIBev36OdEjOE%2F5Q3B%2BW6zXwfHhOK%2FHsOXJHZYWd42A8GmyjIRQ5PmFmrjmpeuT1Klv2afKWCcogJgZvR9AuJdYYPyglBwSKAaarqIqSSdAvqmVwddrhDze2WzAkhJES9KrByi1lHS01x09F5lWhOp6Hf5A5bmH83XPS60bjCNBPzAQVA6r2a4VsRm4qNOk2DnZWxwXvUdSomiD6xkdc9bmMWBCjv2UpSMCNOmAzJUyLoGMgURZMsWyOoGdyMv1u6UNXB%2BTLm1KLCIm7y0aJwCNcuR6AhglNjlw3GBLrCUOPvsokgk2Dcc0PZiN1Eb3l3PiyvPKkFmPzjym%2FRSiwbPnZcx4McFm8%2BKvrZKGS3OJAFR1vkN05cZsW%2FihOwWdJjHu1n6i33sy0M20yd3L7wqdPlTkrUMtWX8GNDjEoUgC447zGhBs4O7M0tHxrRxuZsbRMAjbHpbsd%2BmzgPK3XO5J%2Bssgh7ukifFdLyxI1BUS%2FJDC3ojo9csNGhThK2PKcuT%2BoaROQKxMPHQE271qxPcejkbo6uOJOTnijo6Z6h5ZIRIO9BUBzp6vArebXKQ5Gow5ZVsOwCc4Na2MK%2FzhL4GOqUBX5MzAcOk9i0cCSN8VxwCG4GWvqpQC2Xbi8RSQHaKn8vZ7TNSnqnnKUdMH6TwtWZl66KGU57RO6e4%2B7MlYmv8w485H%2FBHT7Sz5lO0U1FZnwErVMF%2FtJiT6dGnM3BkgfvY5QCa8H8mNu1hzR%2FAen%2BqSzYn5WW6c%2FVDGMFCastyOf1HUQXBOlnxvguKHUab5ny5o0if8v%2BBKaVIVmlcRT%2BSRmLK8fxg&X-Amz-Signature=dda1c34a8e748d77a5262e36b148f3b936567b652e7008cc92211dc84da82d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZZD2UE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFndpHWjXU%2FRZj%2FtC6N5bhxtX2dFY1Cb%2F673xvLVCAOhAiEAnW6%2FvY7qrzBYLXo6yz4o3i8HeD%2BDfLneB%2BlPmOI59EQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiKG5UmZaK%2BIVRA4CrcA5QCI7m4S1gSUD5DE0SewCPPjCNi85SERcapgvzdJbgTAaCIBev36OdEjOE%2F5Q3B%2BW6zXwfHhOK%2FHsOXJHZYWd42A8GmyjIRQ5PmFmrjmpeuT1Klv2afKWCcogJgZvR9AuJdYYPyglBwSKAaarqIqSSdAvqmVwddrhDze2WzAkhJES9KrByi1lHS01x09F5lWhOp6Hf5A5bmH83XPS60bjCNBPzAQVA6r2a4VsRm4qNOk2DnZWxwXvUdSomiD6xkdc9bmMWBCjv2UpSMCNOmAzJUyLoGMgURZMsWyOoGdyMv1u6UNXB%2BTLm1KLCIm7y0aJwCNcuR6AhglNjlw3GBLrCUOPvsokgk2Dcc0PZiN1Eb3l3PiyvPKkFmPzjym%2FRSiwbPnZcx4McFm8%2BKvrZKGS3OJAFR1vkN05cZsW%2FihOwWdJjHu1n6i33sy0M20yd3L7wqdPlTkrUMtWX8GNDjEoUgC447zGhBs4O7M0tHxrRxuZsbRMAjbHpbsd%2BmzgPK3XO5J%2Bssgh7ukifFdLyxI1BUS%2FJDC3ojo9csNGhThK2PKcuT%2BoaROQKxMPHQE271qxPcejkbo6uOJOTnijo6Z6h5ZIRIO9BUBzp6vArebXKQ5Gow5ZVsOwCc4Na2MK%2FzhL4GOqUBX5MzAcOk9i0cCSN8VxwCG4GWvqpQC2Xbi8RSQHaKn8vZ7TNSnqnnKUdMH6TwtWZl66KGU57RO6e4%2B7MlYmv8w485H%2FBHT7Sz5lO0U1FZnwErVMF%2FtJiT6dGnM3BkgfvY5QCa8H8mNu1hzR%2FAen%2BqSzYn5WW6c%2FVDGMFCastyOf1HUQXBOlnxvguKHUab5ny5o0if8v%2BBKaVIVmlcRT%2BSRmLK8fxg&X-Amz-Signature=b75a17387ad83986b153af66209dc56c05fc7361c1bf2815f704bb6b9c69f51e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZZD2UE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFndpHWjXU%2FRZj%2FtC6N5bhxtX2dFY1Cb%2F673xvLVCAOhAiEAnW6%2FvY7qrzBYLXo6yz4o3i8HeD%2BDfLneB%2BlPmOI59EQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiKG5UmZaK%2BIVRA4CrcA5QCI7m4S1gSUD5DE0SewCPPjCNi85SERcapgvzdJbgTAaCIBev36OdEjOE%2F5Q3B%2BW6zXwfHhOK%2FHsOXJHZYWd42A8GmyjIRQ5PmFmrjmpeuT1Klv2afKWCcogJgZvR9AuJdYYPyglBwSKAaarqIqSSdAvqmVwddrhDze2WzAkhJES9KrByi1lHS01x09F5lWhOp6Hf5A5bmH83XPS60bjCNBPzAQVA6r2a4VsRm4qNOk2DnZWxwXvUdSomiD6xkdc9bmMWBCjv2UpSMCNOmAzJUyLoGMgURZMsWyOoGdyMv1u6UNXB%2BTLm1KLCIm7y0aJwCNcuR6AhglNjlw3GBLrCUOPvsokgk2Dcc0PZiN1Eb3l3PiyvPKkFmPzjym%2FRSiwbPnZcx4McFm8%2BKvrZKGS3OJAFR1vkN05cZsW%2FihOwWdJjHu1n6i33sy0M20yd3L7wqdPlTkrUMtWX8GNDjEoUgC447zGhBs4O7M0tHxrRxuZsbRMAjbHpbsd%2BmzgPK3XO5J%2Bssgh7ukifFdLyxI1BUS%2FJDC3ojo9csNGhThK2PKcuT%2BoaROQKxMPHQE271qxPcejkbo6uOJOTnijo6Z6h5ZIRIO9BUBzp6vArebXKQ5Gow5ZVsOwCc4Na2MK%2FzhL4GOqUBX5MzAcOk9i0cCSN8VxwCG4GWvqpQC2Xbi8RSQHaKn8vZ7TNSnqnnKUdMH6TwtWZl66KGU57RO6e4%2B7MlYmv8w485H%2FBHT7Sz5lO0U1FZnwErVMF%2FtJiT6dGnM3BkgfvY5QCa8H8mNu1hzR%2FAen%2BqSzYn5WW6c%2FVDGMFCastyOf1HUQXBOlnxvguKHUab5ny5o0if8v%2BBKaVIVmlcRT%2BSRmLK8fxg&X-Amz-Signature=61ac6d91e5403f61954c80eec419d8ed019f9d402e68b92e7cdff6393f9f2dac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZZD2UE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFndpHWjXU%2FRZj%2FtC6N5bhxtX2dFY1Cb%2F673xvLVCAOhAiEAnW6%2FvY7qrzBYLXo6yz4o3i8HeD%2BDfLneB%2BlPmOI59EQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiKG5UmZaK%2BIVRA4CrcA5QCI7m4S1gSUD5DE0SewCPPjCNi85SERcapgvzdJbgTAaCIBev36OdEjOE%2F5Q3B%2BW6zXwfHhOK%2FHsOXJHZYWd42A8GmyjIRQ5PmFmrjmpeuT1Klv2afKWCcogJgZvR9AuJdYYPyglBwSKAaarqIqSSdAvqmVwddrhDze2WzAkhJES9KrByi1lHS01x09F5lWhOp6Hf5A5bmH83XPS60bjCNBPzAQVA6r2a4VsRm4qNOk2DnZWxwXvUdSomiD6xkdc9bmMWBCjv2UpSMCNOmAzJUyLoGMgURZMsWyOoGdyMv1u6UNXB%2BTLm1KLCIm7y0aJwCNcuR6AhglNjlw3GBLrCUOPvsokgk2Dcc0PZiN1Eb3l3PiyvPKkFmPzjym%2FRSiwbPnZcx4McFm8%2BKvrZKGS3OJAFR1vkN05cZsW%2FihOwWdJjHu1n6i33sy0M20yd3L7wqdPlTkrUMtWX8GNDjEoUgC447zGhBs4O7M0tHxrRxuZsbRMAjbHpbsd%2BmzgPK3XO5J%2Bssgh7ukifFdLyxI1BUS%2FJDC3ojo9csNGhThK2PKcuT%2BoaROQKxMPHQE271qxPcejkbo6uOJOTnijo6Z6h5ZIRIO9BUBzp6vArebXKQ5Gow5ZVsOwCc4Na2MK%2FzhL4GOqUBX5MzAcOk9i0cCSN8VxwCG4GWvqpQC2Xbi8RSQHaKn8vZ7TNSnqnnKUdMH6TwtWZl66KGU57RO6e4%2B7MlYmv8w485H%2FBHT7Sz5lO0U1FZnwErVMF%2FtJiT6dGnM3BkgfvY5QCa8H8mNu1hzR%2FAen%2BqSzYn5WW6c%2FVDGMFCastyOf1HUQXBOlnxvguKHUab5ny5o0if8v%2BBKaVIVmlcRT%2BSRmLK8fxg&X-Amz-Signature=6733f464e371e4c06aa4f7eb983e404b24bb566bcf3c5fb810a6bba6705f4de4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZZD2UE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFndpHWjXU%2FRZj%2FtC6N5bhxtX2dFY1Cb%2F673xvLVCAOhAiEAnW6%2FvY7qrzBYLXo6yz4o3i8HeD%2BDfLneB%2BlPmOI59EQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiKG5UmZaK%2BIVRA4CrcA5QCI7m4S1gSUD5DE0SewCPPjCNi85SERcapgvzdJbgTAaCIBev36OdEjOE%2F5Q3B%2BW6zXwfHhOK%2FHsOXJHZYWd42A8GmyjIRQ5PmFmrjmpeuT1Klv2afKWCcogJgZvR9AuJdYYPyglBwSKAaarqIqSSdAvqmVwddrhDze2WzAkhJES9KrByi1lHS01x09F5lWhOp6Hf5A5bmH83XPS60bjCNBPzAQVA6r2a4VsRm4qNOk2DnZWxwXvUdSomiD6xkdc9bmMWBCjv2UpSMCNOmAzJUyLoGMgURZMsWyOoGdyMv1u6UNXB%2BTLm1KLCIm7y0aJwCNcuR6AhglNjlw3GBLrCUOPvsokgk2Dcc0PZiN1Eb3l3PiyvPKkFmPzjym%2FRSiwbPnZcx4McFm8%2BKvrZKGS3OJAFR1vkN05cZsW%2FihOwWdJjHu1n6i33sy0M20yd3L7wqdPlTkrUMtWX8GNDjEoUgC447zGhBs4O7M0tHxrRxuZsbRMAjbHpbsd%2BmzgPK3XO5J%2Bssgh7ukifFdLyxI1BUS%2FJDC3ojo9csNGhThK2PKcuT%2BoaROQKxMPHQE271qxPcejkbo6uOJOTnijo6Z6h5ZIRIO9BUBzp6vArebXKQ5Gow5ZVsOwCc4Na2MK%2FzhL4GOqUBX5MzAcOk9i0cCSN8VxwCG4GWvqpQC2Xbi8RSQHaKn8vZ7TNSnqnnKUdMH6TwtWZl66KGU57RO6e4%2B7MlYmv8w485H%2FBHT7Sz5lO0U1FZnwErVMF%2FtJiT6dGnM3BkgfvY5QCa8H8mNu1hzR%2FAen%2BqSzYn5WW6c%2FVDGMFCastyOf1HUQXBOlnxvguKHUab5ny5o0if8v%2BBKaVIVmlcRT%2BSRmLK8fxg&X-Amz-Signature=ec1d323110cc4b2912e71382d81ac40a6ce57552153ed27f150cb0b590118b44&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
