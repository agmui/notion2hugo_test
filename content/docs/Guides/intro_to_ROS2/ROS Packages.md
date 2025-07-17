---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOUB6S3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCyrcHnyhPI%2FOMEDonvOZIMdt8d0I54e2goLSxwOuLiDgIhAJfVH8b0%2BtvJPw91OnEri2sZfnAt1pBKGfsttWZctK%2FZKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc5vGSSLmw94H5%2B1Eq3AOWi405dCDQogKPiIUSRODoBfAOl8iSqsVAVM7%2FRKtvdde2F8H%2FPGVC0TgYwKJ0M7W3gXEYh11LKqLxAX06gGkxHSsXd0DAvDzOSK%2B8NetIgE7qjlttQdOiBhWOHEl4GXwknNZgzqTeN2PNo5nrsLjebbPY1gHtzCKwlNiXMYvkteCVr0bIsK19pCWCTbz61aYKcdPou4EzzwdGenBl5wTpkbEYM9ND%2FHnUtzHYNnjOuPc2xrYu66jo2DWZALh6jvBhwlcBo79PkpS4NOtZrqgQ1Nt3wRKITdrRgl6F5IGQ9WPoht9sRalUFLgwH5KcSw1r0lgtQ9dtsx6G9w0Oib5DrbC359dcWBG%2FEtbm0ZQ5Rnuvju7RLHQdR%2BfXPMLm6bRLJp7xnvyGtm%2BeuMC9TO1nXxONNfXfsl1el4bd1mUAKNWyC4b3XIy3JXxucnYXOsSI5UH%2BywvmG4ceZHbBxTRiwkP8PQ2%2By6v0x%2BmwNiV%2FGhpSBvYUyZs6ObVsocciFSGblL80ZOc7L71NdRG9DL8C%2BzH1VzXTpteFRq5atTkzOPufqLwAjqQUH%2BWinsAK8XoAZojDVc5jcwkBSLQSCWT6bmqfLFOzBsXv%2FVVDD0t%2BHhTX9FJFfTcFrOowizC0uOXDBjqkAavB7ftTAlMcXkOP1dswUm3wiy83eb7achXOx4EVbBmltW1DKX9i4AWdIYs7j%2FGKZCbChNIUpA2YJFf41F9ElUxhENtKRvef1%2Fq3mBUrodzs5t8w8mMGi40AVQuV0WX37KEURr597kHsu7n%2FI121CCGaSx2iX4zpQo3Ck2L4%2Bl67%2F%2B0KoXvKtFWbcP6liTBFpcwhD%2B2yWq6GhopC%2FpT799cbTeva&X-Amz-Signature=8379e59c71cf5aa05e610842129d57d29334686b4eeb10e96ff39d22ddf522d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOUB6S3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCyrcHnyhPI%2FOMEDonvOZIMdt8d0I54e2goLSxwOuLiDgIhAJfVH8b0%2BtvJPw91OnEri2sZfnAt1pBKGfsttWZctK%2FZKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc5vGSSLmw94H5%2B1Eq3AOWi405dCDQogKPiIUSRODoBfAOl8iSqsVAVM7%2FRKtvdde2F8H%2FPGVC0TgYwKJ0M7W3gXEYh11LKqLxAX06gGkxHSsXd0DAvDzOSK%2B8NetIgE7qjlttQdOiBhWOHEl4GXwknNZgzqTeN2PNo5nrsLjebbPY1gHtzCKwlNiXMYvkteCVr0bIsK19pCWCTbz61aYKcdPou4EzzwdGenBl5wTpkbEYM9ND%2FHnUtzHYNnjOuPc2xrYu66jo2DWZALh6jvBhwlcBo79PkpS4NOtZrqgQ1Nt3wRKITdrRgl6F5IGQ9WPoht9sRalUFLgwH5KcSw1r0lgtQ9dtsx6G9w0Oib5DrbC359dcWBG%2FEtbm0ZQ5Rnuvju7RLHQdR%2BfXPMLm6bRLJp7xnvyGtm%2BeuMC9TO1nXxONNfXfsl1el4bd1mUAKNWyC4b3XIy3JXxucnYXOsSI5UH%2BywvmG4ceZHbBxTRiwkP8PQ2%2By6v0x%2BmwNiV%2FGhpSBvYUyZs6ObVsocciFSGblL80ZOc7L71NdRG9DL8C%2BzH1VzXTpteFRq5atTkzOPufqLwAjqQUH%2BWinsAK8XoAZojDVc5jcwkBSLQSCWT6bmqfLFOzBsXv%2FVVDD0t%2BHhTX9FJFfTcFrOowizC0uOXDBjqkAavB7ftTAlMcXkOP1dswUm3wiy83eb7achXOx4EVbBmltW1DKX9i4AWdIYs7j%2FGKZCbChNIUpA2YJFf41F9ElUxhENtKRvef1%2Fq3mBUrodzs5t8w8mMGi40AVQuV0WX37KEURr597kHsu7n%2FI121CCGaSx2iX4zpQo3Ck2L4%2Bl67%2F%2B0KoXvKtFWbcP6liTBFpcwhD%2B2yWq6GhopC%2FpT799cbTeva&X-Amz-Signature=e0408070cbc35ce7abcdf4df547ea2a18737b83b9f7f37154295345f79b9d93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOUB6S3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCyrcHnyhPI%2FOMEDonvOZIMdt8d0I54e2goLSxwOuLiDgIhAJfVH8b0%2BtvJPw91OnEri2sZfnAt1pBKGfsttWZctK%2FZKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc5vGSSLmw94H5%2B1Eq3AOWi405dCDQogKPiIUSRODoBfAOl8iSqsVAVM7%2FRKtvdde2F8H%2FPGVC0TgYwKJ0M7W3gXEYh11LKqLxAX06gGkxHSsXd0DAvDzOSK%2B8NetIgE7qjlttQdOiBhWOHEl4GXwknNZgzqTeN2PNo5nrsLjebbPY1gHtzCKwlNiXMYvkteCVr0bIsK19pCWCTbz61aYKcdPou4EzzwdGenBl5wTpkbEYM9ND%2FHnUtzHYNnjOuPc2xrYu66jo2DWZALh6jvBhwlcBo79PkpS4NOtZrqgQ1Nt3wRKITdrRgl6F5IGQ9WPoht9sRalUFLgwH5KcSw1r0lgtQ9dtsx6G9w0Oib5DrbC359dcWBG%2FEtbm0ZQ5Rnuvju7RLHQdR%2BfXPMLm6bRLJp7xnvyGtm%2BeuMC9TO1nXxONNfXfsl1el4bd1mUAKNWyC4b3XIy3JXxucnYXOsSI5UH%2BywvmG4ceZHbBxTRiwkP8PQ2%2By6v0x%2BmwNiV%2FGhpSBvYUyZs6ObVsocciFSGblL80ZOc7L71NdRG9DL8C%2BzH1VzXTpteFRq5atTkzOPufqLwAjqQUH%2BWinsAK8XoAZojDVc5jcwkBSLQSCWT6bmqfLFOzBsXv%2FVVDD0t%2BHhTX9FJFfTcFrOowizC0uOXDBjqkAavB7ftTAlMcXkOP1dswUm3wiy83eb7achXOx4EVbBmltW1DKX9i4AWdIYs7j%2FGKZCbChNIUpA2YJFf41F9ElUxhENtKRvef1%2Fq3mBUrodzs5t8w8mMGi40AVQuV0WX37KEURr597kHsu7n%2FI121CCGaSx2iX4zpQo3Ck2L4%2Bl67%2F%2B0KoXvKtFWbcP6liTBFpcwhD%2B2yWq6GhopC%2FpT799cbTeva&X-Amz-Signature=46c37962146dce84d16ae71ad33076eef1e2c90cd7d53cc915a1428771a51035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOUB6S3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCyrcHnyhPI%2FOMEDonvOZIMdt8d0I54e2goLSxwOuLiDgIhAJfVH8b0%2BtvJPw91OnEri2sZfnAt1pBKGfsttWZctK%2FZKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc5vGSSLmw94H5%2B1Eq3AOWi405dCDQogKPiIUSRODoBfAOl8iSqsVAVM7%2FRKtvdde2F8H%2FPGVC0TgYwKJ0M7W3gXEYh11LKqLxAX06gGkxHSsXd0DAvDzOSK%2B8NetIgE7qjlttQdOiBhWOHEl4GXwknNZgzqTeN2PNo5nrsLjebbPY1gHtzCKwlNiXMYvkteCVr0bIsK19pCWCTbz61aYKcdPou4EzzwdGenBl5wTpkbEYM9ND%2FHnUtzHYNnjOuPc2xrYu66jo2DWZALh6jvBhwlcBo79PkpS4NOtZrqgQ1Nt3wRKITdrRgl6F5IGQ9WPoht9sRalUFLgwH5KcSw1r0lgtQ9dtsx6G9w0Oib5DrbC359dcWBG%2FEtbm0ZQ5Rnuvju7RLHQdR%2BfXPMLm6bRLJp7xnvyGtm%2BeuMC9TO1nXxONNfXfsl1el4bd1mUAKNWyC4b3XIy3JXxucnYXOsSI5UH%2BywvmG4ceZHbBxTRiwkP8PQ2%2By6v0x%2BmwNiV%2FGhpSBvYUyZs6ObVsocciFSGblL80ZOc7L71NdRG9DL8C%2BzH1VzXTpteFRq5atTkzOPufqLwAjqQUH%2BWinsAK8XoAZojDVc5jcwkBSLQSCWT6bmqfLFOzBsXv%2FVVDD0t%2BHhTX9FJFfTcFrOowizC0uOXDBjqkAavB7ftTAlMcXkOP1dswUm3wiy83eb7achXOx4EVbBmltW1DKX9i4AWdIYs7j%2FGKZCbChNIUpA2YJFf41F9ElUxhENtKRvef1%2Fq3mBUrodzs5t8w8mMGi40AVQuV0WX37KEURr597kHsu7n%2FI121CCGaSx2iX4zpQo3Ck2L4%2Bl67%2F%2B0KoXvKtFWbcP6liTBFpcwhD%2B2yWq6GhopC%2FpT799cbTeva&X-Amz-Signature=07653bf2e3a41de9fb6539118ddc69a855d1b21f9bcba4029ec31481c3b4d1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOUB6S3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCyrcHnyhPI%2FOMEDonvOZIMdt8d0I54e2goLSxwOuLiDgIhAJfVH8b0%2BtvJPw91OnEri2sZfnAt1pBKGfsttWZctK%2FZKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc5vGSSLmw94H5%2B1Eq3AOWi405dCDQogKPiIUSRODoBfAOl8iSqsVAVM7%2FRKtvdde2F8H%2FPGVC0TgYwKJ0M7W3gXEYh11LKqLxAX06gGkxHSsXd0DAvDzOSK%2B8NetIgE7qjlttQdOiBhWOHEl4GXwknNZgzqTeN2PNo5nrsLjebbPY1gHtzCKwlNiXMYvkteCVr0bIsK19pCWCTbz61aYKcdPou4EzzwdGenBl5wTpkbEYM9ND%2FHnUtzHYNnjOuPc2xrYu66jo2DWZALh6jvBhwlcBo79PkpS4NOtZrqgQ1Nt3wRKITdrRgl6F5IGQ9WPoht9sRalUFLgwH5KcSw1r0lgtQ9dtsx6G9w0Oib5DrbC359dcWBG%2FEtbm0ZQ5Rnuvju7RLHQdR%2BfXPMLm6bRLJp7xnvyGtm%2BeuMC9TO1nXxONNfXfsl1el4bd1mUAKNWyC4b3XIy3JXxucnYXOsSI5UH%2BywvmG4ceZHbBxTRiwkP8PQ2%2By6v0x%2BmwNiV%2FGhpSBvYUyZs6ObVsocciFSGblL80ZOc7L71NdRG9DL8C%2BzH1VzXTpteFRq5atTkzOPufqLwAjqQUH%2BWinsAK8XoAZojDVc5jcwkBSLQSCWT6bmqfLFOzBsXv%2FVVDD0t%2BHhTX9FJFfTcFrOowizC0uOXDBjqkAavB7ftTAlMcXkOP1dswUm3wiy83eb7achXOx4EVbBmltW1DKX9i4AWdIYs7j%2FGKZCbChNIUpA2YJFf41F9ElUxhENtKRvef1%2Fq3mBUrodzs5t8w8mMGi40AVQuV0WX37KEURr597kHsu7n%2FI121CCGaSx2iX4zpQo3Ck2L4%2Bl67%2F%2B0KoXvKtFWbcP6liTBFpcwhD%2B2yWq6GhopC%2FpT799cbTeva&X-Amz-Signature=4af19e181424e89fbaf152e670ac1b0d974a446d63b45aa80443fd20d92b8a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOUB6S3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCyrcHnyhPI%2FOMEDonvOZIMdt8d0I54e2goLSxwOuLiDgIhAJfVH8b0%2BtvJPw91OnEri2sZfnAt1pBKGfsttWZctK%2FZKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc5vGSSLmw94H5%2B1Eq3AOWi405dCDQogKPiIUSRODoBfAOl8iSqsVAVM7%2FRKtvdde2F8H%2FPGVC0TgYwKJ0M7W3gXEYh11LKqLxAX06gGkxHSsXd0DAvDzOSK%2B8NetIgE7qjlttQdOiBhWOHEl4GXwknNZgzqTeN2PNo5nrsLjebbPY1gHtzCKwlNiXMYvkteCVr0bIsK19pCWCTbz61aYKcdPou4EzzwdGenBl5wTpkbEYM9ND%2FHnUtzHYNnjOuPc2xrYu66jo2DWZALh6jvBhwlcBo79PkpS4NOtZrqgQ1Nt3wRKITdrRgl6F5IGQ9WPoht9sRalUFLgwH5KcSw1r0lgtQ9dtsx6G9w0Oib5DrbC359dcWBG%2FEtbm0ZQ5Rnuvju7RLHQdR%2BfXPMLm6bRLJp7xnvyGtm%2BeuMC9TO1nXxONNfXfsl1el4bd1mUAKNWyC4b3XIy3JXxucnYXOsSI5UH%2BywvmG4ceZHbBxTRiwkP8PQ2%2By6v0x%2BmwNiV%2FGhpSBvYUyZs6ObVsocciFSGblL80ZOc7L71NdRG9DL8C%2BzH1VzXTpteFRq5atTkzOPufqLwAjqQUH%2BWinsAK8XoAZojDVc5jcwkBSLQSCWT6bmqfLFOzBsXv%2FVVDD0t%2BHhTX9FJFfTcFrOowizC0uOXDBjqkAavB7ftTAlMcXkOP1dswUm3wiy83eb7achXOx4EVbBmltW1DKX9i4AWdIYs7j%2FGKZCbChNIUpA2YJFf41F9ElUxhENtKRvef1%2Fq3mBUrodzs5t8w8mMGi40AVQuV0WX37KEURr597kHsu7n%2FI121CCGaSx2iX4zpQo3Ck2L4%2Bl67%2F%2B0KoXvKtFWbcP6liTBFpcwhD%2B2yWq6GhopC%2FpT799cbTeva&X-Amz-Signature=33a607c25f487e33453c4e305befae66ea554fb471992bafceea0dd8ce45607a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOUB6S3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCyrcHnyhPI%2FOMEDonvOZIMdt8d0I54e2goLSxwOuLiDgIhAJfVH8b0%2BtvJPw91OnEri2sZfnAt1pBKGfsttWZctK%2FZKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc5vGSSLmw94H5%2B1Eq3AOWi405dCDQogKPiIUSRODoBfAOl8iSqsVAVM7%2FRKtvdde2F8H%2FPGVC0TgYwKJ0M7W3gXEYh11LKqLxAX06gGkxHSsXd0DAvDzOSK%2B8NetIgE7qjlttQdOiBhWOHEl4GXwknNZgzqTeN2PNo5nrsLjebbPY1gHtzCKwlNiXMYvkteCVr0bIsK19pCWCTbz61aYKcdPou4EzzwdGenBl5wTpkbEYM9ND%2FHnUtzHYNnjOuPc2xrYu66jo2DWZALh6jvBhwlcBo79PkpS4NOtZrqgQ1Nt3wRKITdrRgl6F5IGQ9WPoht9sRalUFLgwH5KcSw1r0lgtQ9dtsx6G9w0Oib5DrbC359dcWBG%2FEtbm0ZQ5Rnuvju7RLHQdR%2BfXPMLm6bRLJp7xnvyGtm%2BeuMC9TO1nXxONNfXfsl1el4bd1mUAKNWyC4b3XIy3JXxucnYXOsSI5UH%2BywvmG4ceZHbBxTRiwkP8PQ2%2By6v0x%2BmwNiV%2FGhpSBvYUyZs6ObVsocciFSGblL80ZOc7L71NdRG9DL8C%2BzH1VzXTpteFRq5atTkzOPufqLwAjqQUH%2BWinsAK8XoAZojDVc5jcwkBSLQSCWT6bmqfLFOzBsXv%2FVVDD0t%2BHhTX9FJFfTcFrOowizC0uOXDBjqkAavB7ftTAlMcXkOP1dswUm3wiy83eb7achXOx4EVbBmltW1DKX9i4AWdIYs7j%2FGKZCbChNIUpA2YJFf41F9ElUxhENtKRvef1%2Fq3mBUrodzs5t8w8mMGi40AVQuV0WX37KEURr597kHsu7n%2FI121CCGaSx2iX4zpQo3Ck2L4%2Bl67%2F%2B0KoXvKtFWbcP6liTBFpcwhD%2B2yWq6GhopC%2FpT799cbTeva&X-Amz-Signature=2759d1cedcf88f362928e2cbb04714a7ed534556de88cff11763eb9380c5d101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
