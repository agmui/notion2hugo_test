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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5Q7RPY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDegrW%2FJ1s6KM74vyjPXIsQ3FTInhpzg%2Fd09tPvJ%2BGlwAIhAMm8jfzVR3CWxQC7equx34E%2FimPNuV%2B0HlCKlGLKwu6EKv8DCBcQABoMNjM3NDIzMTgzODA1Igwf7BE0rj22PTWMj1Uq3ANDiDLWRsikrSvn0Sul6f0BGspj2PbJkdWL%2FnrgDXwaodwZZiJZpJak9uoFIBK%2BnOiVQyMo5rfwmPUk1iUf5BpKlZCLxIvgRGGtCSHddUhpqp0KrvrRMmLAjmk4joCzIhT4pirbgLH3qfYpCfLB76KtIXVSHTUDihfUtT%2B4TXR%2BpGyTqDHe13VQFfRMIiDAnMMSIPrJJHBaILwCxdPHf8V%2FxQMViXWPJ16I7V5afh1WJ8Iml50BW%2B5l5Ao8%2B5K6R6jQQlnF36ixFsTcvTw8bcraSCVTMWhH0vt4AEVsXanEfSOzyYdbBr5JYaPBwSlbn5thBcxKCm2t0O48jPbIDMxlkC45sURq5164uYcwGeS1yu3G2rH%2B7RPKuuR2LqM56D0u%2Flg09UHvUjYhkumblxhkamlwdXUVItYFel7A1hw8kwnK8FIiQOtkG31kRfur8QEAzRcDudXNZZHV%2Fn2n0AiMmxh0TMEK5F2xAUzi5HpNDweTVpiU%2FCmGTdR8S7FtU34DSLNGwqkZiBpd8AYjKM51nB1gC%2FFA7bhxebTCJSbbk37ptqAc4Wwgd43muN%2FM7l%2B7iuQQAVgQw6LP6N%2FbYTjrK28Zwh%2BM6sdvWSaboCbLMceIikr4l9Zfxfz6eDDijZrDBjqkAVdHn3AdKhZHfb7syjKdPNYiBbhpOIaCS2CfnqFBf8AMxZY8ehK%2FkMs%2BD44MvSHeBE%2Fq5MeiQzZgchKZOo%2F5ujRDjFNZb52ze0JIL8l89u5u2wABubSH8%2Bn48ji1GbA7DKegtAS2SBTrm2t7LT0HYJT1J2R5Hlb3nTaKCBHvMGFz9KiI96jLIiZ8dW72dTkxrRFQNiGngT1gOkBDGXkM1JeQvzl5&X-Amz-Signature=f4693ae4a1d5612a83460fc539a1f5b7e0883e2eb3e578faec1f015e9205e2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5Q7RPY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDegrW%2FJ1s6KM74vyjPXIsQ3FTInhpzg%2Fd09tPvJ%2BGlwAIhAMm8jfzVR3CWxQC7equx34E%2FimPNuV%2B0HlCKlGLKwu6EKv8DCBcQABoMNjM3NDIzMTgzODA1Igwf7BE0rj22PTWMj1Uq3ANDiDLWRsikrSvn0Sul6f0BGspj2PbJkdWL%2FnrgDXwaodwZZiJZpJak9uoFIBK%2BnOiVQyMo5rfwmPUk1iUf5BpKlZCLxIvgRGGtCSHddUhpqp0KrvrRMmLAjmk4joCzIhT4pirbgLH3qfYpCfLB76KtIXVSHTUDihfUtT%2B4TXR%2BpGyTqDHe13VQFfRMIiDAnMMSIPrJJHBaILwCxdPHf8V%2FxQMViXWPJ16I7V5afh1WJ8Iml50BW%2B5l5Ao8%2B5K6R6jQQlnF36ixFsTcvTw8bcraSCVTMWhH0vt4AEVsXanEfSOzyYdbBr5JYaPBwSlbn5thBcxKCm2t0O48jPbIDMxlkC45sURq5164uYcwGeS1yu3G2rH%2B7RPKuuR2LqM56D0u%2Flg09UHvUjYhkumblxhkamlwdXUVItYFel7A1hw8kwnK8FIiQOtkG31kRfur8QEAzRcDudXNZZHV%2Fn2n0AiMmxh0TMEK5F2xAUzi5HpNDweTVpiU%2FCmGTdR8S7FtU34DSLNGwqkZiBpd8AYjKM51nB1gC%2FFA7bhxebTCJSbbk37ptqAc4Wwgd43muN%2FM7l%2B7iuQQAVgQw6LP6N%2FbYTjrK28Zwh%2BM6sdvWSaboCbLMceIikr4l9Zfxfz6eDDijZrDBjqkAVdHn3AdKhZHfb7syjKdPNYiBbhpOIaCS2CfnqFBf8AMxZY8ehK%2FkMs%2BD44MvSHeBE%2Fq5MeiQzZgchKZOo%2F5ujRDjFNZb52ze0JIL8l89u5u2wABubSH8%2Bn48ji1GbA7DKegtAS2SBTrm2t7LT0HYJT1J2R5Hlb3nTaKCBHvMGFz9KiI96jLIiZ8dW72dTkxrRFQNiGngT1gOkBDGXkM1JeQvzl5&X-Amz-Signature=2abaee79ff6e4fc1a10a71f5f838917827934879f4bbaec9d7f9f11fea9d2c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5Q7RPY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDegrW%2FJ1s6KM74vyjPXIsQ3FTInhpzg%2Fd09tPvJ%2BGlwAIhAMm8jfzVR3CWxQC7equx34E%2FimPNuV%2B0HlCKlGLKwu6EKv8DCBcQABoMNjM3NDIzMTgzODA1Igwf7BE0rj22PTWMj1Uq3ANDiDLWRsikrSvn0Sul6f0BGspj2PbJkdWL%2FnrgDXwaodwZZiJZpJak9uoFIBK%2BnOiVQyMo5rfwmPUk1iUf5BpKlZCLxIvgRGGtCSHddUhpqp0KrvrRMmLAjmk4joCzIhT4pirbgLH3qfYpCfLB76KtIXVSHTUDihfUtT%2B4TXR%2BpGyTqDHe13VQFfRMIiDAnMMSIPrJJHBaILwCxdPHf8V%2FxQMViXWPJ16I7V5afh1WJ8Iml50BW%2B5l5Ao8%2B5K6R6jQQlnF36ixFsTcvTw8bcraSCVTMWhH0vt4AEVsXanEfSOzyYdbBr5JYaPBwSlbn5thBcxKCm2t0O48jPbIDMxlkC45sURq5164uYcwGeS1yu3G2rH%2B7RPKuuR2LqM56D0u%2Flg09UHvUjYhkumblxhkamlwdXUVItYFel7A1hw8kwnK8FIiQOtkG31kRfur8QEAzRcDudXNZZHV%2Fn2n0AiMmxh0TMEK5F2xAUzi5HpNDweTVpiU%2FCmGTdR8S7FtU34DSLNGwqkZiBpd8AYjKM51nB1gC%2FFA7bhxebTCJSbbk37ptqAc4Wwgd43muN%2FM7l%2B7iuQQAVgQw6LP6N%2FbYTjrK28Zwh%2BM6sdvWSaboCbLMceIikr4l9Zfxfz6eDDijZrDBjqkAVdHn3AdKhZHfb7syjKdPNYiBbhpOIaCS2CfnqFBf8AMxZY8ehK%2FkMs%2BD44MvSHeBE%2Fq5MeiQzZgchKZOo%2F5ujRDjFNZb52ze0JIL8l89u5u2wABubSH8%2Bn48ji1GbA7DKegtAS2SBTrm2t7LT0HYJT1J2R5Hlb3nTaKCBHvMGFz9KiI96jLIiZ8dW72dTkxrRFQNiGngT1gOkBDGXkM1JeQvzl5&X-Amz-Signature=e32d83fd4169c2de896cc0138d6a60fd7612bc6ca04950d4ff17ae5c8a32fee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5Q7RPY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDegrW%2FJ1s6KM74vyjPXIsQ3FTInhpzg%2Fd09tPvJ%2BGlwAIhAMm8jfzVR3CWxQC7equx34E%2FimPNuV%2B0HlCKlGLKwu6EKv8DCBcQABoMNjM3NDIzMTgzODA1Igwf7BE0rj22PTWMj1Uq3ANDiDLWRsikrSvn0Sul6f0BGspj2PbJkdWL%2FnrgDXwaodwZZiJZpJak9uoFIBK%2BnOiVQyMo5rfwmPUk1iUf5BpKlZCLxIvgRGGtCSHddUhpqp0KrvrRMmLAjmk4joCzIhT4pirbgLH3qfYpCfLB76KtIXVSHTUDihfUtT%2B4TXR%2BpGyTqDHe13VQFfRMIiDAnMMSIPrJJHBaILwCxdPHf8V%2FxQMViXWPJ16I7V5afh1WJ8Iml50BW%2B5l5Ao8%2B5K6R6jQQlnF36ixFsTcvTw8bcraSCVTMWhH0vt4AEVsXanEfSOzyYdbBr5JYaPBwSlbn5thBcxKCm2t0O48jPbIDMxlkC45sURq5164uYcwGeS1yu3G2rH%2B7RPKuuR2LqM56D0u%2Flg09UHvUjYhkumblxhkamlwdXUVItYFel7A1hw8kwnK8FIiQOtkG31kRfur8QEAzRcDudXNZZHV%2Fn2n0AiMmxh0TMEK5F2xAUzi5HpNDweTVpiU%2FCmGTdR8S7FtU34DSLNGwqkZiBpd8AYjKM51nB1gC%2FFA7bhxebTCJSbbk37ptqAc4Wwgd43muN%2FM7l%2B7iuQQAVgQw6LP6N%2FbYTjrK28Zwh%2BM6sdvWSaboCbLMceIikr4l9Zfxfz6eDDijZrDBjqkAVdHn3AdKhZHfb7syjKdPNYiBbhpOIaCS2CfnqFBf8AMxZY8ehK%2FkMs%2BD44MvSHeBE%2Fq5MeiQzZgchKZOo%2F5ujRDjFNZb52ze0JIL8l89u5u2wABubSH8%2Bn48ji1GbA7DKegtAS2SBTrm2t7LT0HYJT1J2R5Hlb3nTaKCBHvMGFz9KiI96jLIiZ8dW72dTkxrRFQNiGngT1gOkBDGXkM1JeQvzl5&X-Amz-Signature=80d17d8e5c2de7424206a8c8ed9a7a4217fb5b4446667495baec28e1a0564615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5Q7RPY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDegrW%2FJ1s6KM74vyjPXIsQ3FTInhpzg%2Fd09tPvJ%2BGlwAIhAMm8jfzVR3CWxQC7equx34E%2FimPNuV%2B0HlCKlGLKwu6EKv8DCBcQABoMNjM3NDIzMTgzODA1Igwf7BE0rj22PTWMj1Uq3ANDiDLWRsikrSvn0Sul6f0BGspj2PbJkdWL%2FnrgDXwaodwZZiJZpJak9uoFIBK%2BnOiVQyMo5rfwmPUk1iUf5BpKlZCLxIvgRGGtCSHddUhpqp0KrvrRMmLAjmk4joCzIhT4pirbgLH3qfYpCfLB76KtIXVSHTUDihfUtT%2B4TXR%2BpGyTqDHe13VQFfRMIiDAnMMSIPrJJHBaILwCxdPHf8V%2FxQMViXWPJ16I7V5afh1WJ8Iml50BW%2B5l5Ao8%2B5K6R6jQQlnF36ixFsTcvTw8bcraSCVTMWhH0vt4AEVsXanEfSOzyYdbBr5JYaPBwSlbn5thBcxKCm2t0O48jPbIDMxlkC45sURq5164uYcwGeS1yu3G2rH%2B7RPKuuR2LqM56D0u%2Flg09UHvUjYhkumblxhkamlwdXUVItYFel7A1hw8kwnK8FIiQOtkG31kRfur8QEAzRcDudXNZZHV%2Fn2n0AiMmxh0TMEK5F2xAUzi5HpNDweTVpiU%2FCmGTdR8S7FtU34DSLNGwqkZiBpd8AYjKM51nB1gC%2FFA7bhxebTCJSbbk37ptqAc4Wwgd43muN%2FM7l%2B7iuQQAVgQw6LP6N%2FbYTjrK28Zwh%2BM6sdvWSaboCbLMceIikr4l9Zfxfz6eDDijZrDBjqkAVdHn3AdKhZHfb7syjKdPNYiBbhpOIaCS2CfnqFBf8AMxZY8ehK%2FkMs%2BD44MvSHeBE%2Fq5MeiQzZgchKZOo%2F5ujRDjFNZb52ze0JIL8l89u5u2wABubSH8%2Bn48ji1GbA7DKegtAS2SBTrm2t7LT0HYJT1J2R5Hlb3nTaKCBHvMGFz9KiI96jLIiZ8dW72dTkxrRFQNiGngT1gOkBDGXkM1JeQvzl5&X-Amz-Signature=c23b2a522a67e39f1701cdc256c5601e4bce659edc54c24ac02349d759c57b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5Q7RPY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDegrW%2FJ1s6KM74vyjPXIsQ3FTInhpzg%2Fd09tPvJ%2BGlwAIhAMm8jfzVR3CWxQC7equx34E%2FimPNuV%2B0HlCKlGLKwu6EKv8DCBcQABoMNjM3NDIzMTgzODA1Igwf7BE0rj22PTWMj1Uq3ANDiDLWRsikrSvn0Sul6f0BGspj2PbJkdWL%2FnrgDXwaodwZZiJZpJak9uoFIBK%2BnOiVQyMo5rfwmPUk1iUf5BpKlZCLxIvgRGGtCSHddUhpqp0KrvrRMmLAjmk4joCzIhT4pirbgLH3qfYpCfLB76KtIXVSHTUDihfUtT%2B4TXR%2BpGyTqDHe13VQFfRMIiDAnMMSIPrJJHBaILwCxdPHf8V%2FxQMViXWPJ16I7V5afh1WJ8Iml50BW%2B5l5Ao8%2B5K6R6jQQlnF36ixFsTcvTw8bcraSCVTMWhH0vt4AEVsXanEfSOzyYdbBr5JYaPBwSlbn5thBcxKCm2t0O48jPbIDMxlkC45sURq5164uYcwGeS1yu3G2rH%2B7RPKuuR2LqM56D0u%2Flg09UHvUjYhkumblxhkamlwdXUVItYFel7A1hw8kwnK8FIiQOtkG31kRfur8QEAzRcDudXNZZHV%2Fn2n0AiMmxh0TMEK5F2xAUzi5HpNDweTVpiU%2FCmGTdR8S7FtU34DSLNGwqkZiBpd8AYjKM51nB1gC%2FFA7bhxebTCJSbbk37ptqAc4Wwgd43muN%2FM7l%2B7iuQQAVgQw6LP6N%2FbYTjrK28Zwh%2BM6sdvWSaboCbLMceIikr4l9Zfxfz6eDDijZrDBjqkAVdHn3AdKhZHfb7syjKdPNYiBbhpOIaCS2CfnqFBf8AMxZY8ehK%2FkMs%2BD44MvSHeBE%2Fq5MeiQzZgchKZOo%2F5ujRDjFNZb52ze0JIL8l89u5u2wABubSH8%2Bn48ji1GbA7DKegtAS2SBTrm2t7LT0HYJT1J2R5Hlb3nTaKCBHvMGFz9KiI96jLIiZ8dW72dTkxrRFQNiGngT1gOkBDGXkM1JeQvzl5&X-Amz-Signature=b444a6242f13ad073664c7b21393faf213482437b7687224dee9bf327c9ad647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5Q7RPY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDegrW%2FJ1s6KM74vyjPXIsQ3FTInhpzg%2Fd09tPvJ%2BGlwAIhAMm8jfzVR3CWxQC7equx34E%2FimPNuV%2B0HlCKlGLKwu6EKv8DCBcQABoMNjM3NDIzMTgzODA1Igwf7BE0rj22PTWMj1Uq3ANDiDLWRsikrSvn0Sul6f0BGspj2PbJkdWL%2FnrgDXwaodwZZiJZpJak9uoFIBK%2BnOiVQyMo5rfwmPUk1iUf5BpKlZCLxIvgRGGtCSHddUhpqp0KrvrRMmLAjmk4joCzIhT4pirbgLH3qfYpCfLB76KtIXVSHTUDihfUtT%2B4TXR%2BpGyTqDHe13VQFfRMIiDAnMMSIPrJJHBaILwCxdPHf8V%2FxQMViXWPJ16I7V5afh1WJ8Iml50BW%2B5l5Ao8%2B5K6R6jQQlnF36ixFsTcvTw8bcraSCVTMWhH0vt4AEVsXanEfSOzyYdbBr5JYaPBwSlbn5thBcxKCm2t0O48jPbIDMxlkC45sURq5164uYcwGeS1yu3G2rH%2B7RPKuuR2LqM56D0u%2Flg09UHvUjYhkumblxhkamlwdXUVItYFel7A1hw8kwnK8FIiQOtkG31kRfur8QEAzRcDudXNZZHV%2Fn2n0AiMmxh0TMEK5F2xAUzi5HpNDweTVpiU%2FCmGTdR8S7FtU34DSLNGwqkZiBpd8AYjKM51nB1gC%2FFA7bhxebTCJSbbk37ptqAc4Wwgd43muN%2FM7l%2B7iuQQAVgQw6LP6N%2FbYTjrK28Zwh%2BM6sdvWSaboCbLMceIikr4l9Zfxfz6eDDijZrDBjqkAVdHn3AdKhZHfb7syjKdPNYiBbhpOIaCS2CfnqFBf8AMxZY8ehK%2FkMs%2BD44MvSHeBE%2Fq5MeiQzZgchKZOo%2F5ujRDjFNZb52ze0JIL8l89u5u2wABubSH8%2Bn48ji1GbA7DKegtAS2SBTrm2t7LT0HYJT1J2R5Hlb3nTaKCBHvMGFz9KiI96jLIiZ8dW72dTkxrRFQNiGngT1gOkBDGXkM1JeQvzl5&X-Amz-Signature=79a60f06206620a7050ad35673212493234be4693e4301cb44d0689730a5dc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
