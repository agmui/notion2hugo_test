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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527JQ6PU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqjem3oPXjTT3tQ%2FJeGbQJemUVLCS1lWJVSCQsq0ZYAIhANk%2BaObn08cQWCMuS1t%2Bgzp62aRpjWHOJyf1vBxHrEKpKv8DCCoQABoMNjM3NDIzMTgzODA1Igw9spe6FR1VGFgK2Zoq3AN09FTugUnRCmr6Qf2mFTQedp%2B%2B%2Bf1VTEk72AnorA6dHc%2FVO1%2FsTDv383UY3QdAx64waKlUbmnSJTPwAuDeJoc0XdILSC5aQ8ypf84YP8Mj2bSuqn%2BhI4u%2FeX4yQEJnZUEXTtAQk2cUhTlgDyuEFUUp3Z6hH%2FPMZnU9kBtkN6fIpwTW6OSvbIC8A3k6r9JHPHudreNwuy99GrlXjMQVeOgyD0M3kS1Q8Yv9u9hkcYh%2BuTjHv5CIzhWobFS2wTrd%2FNEi5aV8ELB9h%2Fpo2NBYIfHR0jIAHiAZF1smF%2BMxZ%2FIA%2Fsse7wN0hOhpKpZJyCjsXwJSLPvL46HL8MDN%2FHxPbUS1RlqA%2FnLBm%2BK4vlYrEel6JWjCD9u3e4o2HIBXVGo0h6QUdMFUZFFw23L4sHnsjQ%2BnT18X8opGAEvA2dcsvvD2Zh6Ul9jEBfk3aU33jYNmh7hgschyVXyDEz2wegunbhHUx6OIYVK8VaKtJx8OoAayvf4hwECIjwZn4NfEBbsclVInhWgUkj9cnXVt97JdWmfjyjISCTvLDFQZ5OeqUoh1J9kfYtsVaXYTRt51vJ6QCxel5MZRtpU%2FvLR0wsrg5uL4xsLX00zpRfjvaNXWTy1dBCvyMZYhQvhsaL2D8jDh48O%2FBjqkAWK7Qwybx7nCCGXvALrn8dGZZ9eDFIn4W36lBXtnKK99NftJSF%2BdUJBuIJ4ectgwIXCvhZ0%2BQpdzXHSjg%2FZKcFmofZLLLXcLk5fpGpwGZO9ncYv11a8NHm1iEG4DK2MR%2Bvj2zzDGClsJgYwp5kTgRE%2FjVtcSwuCmMDudySmfYQJjOTZvyNlo%2BpNtiocID1I54MScBgEFaC4hWTdcfHIE4NIjJ5Hu&X-Amz-Signature=666b60ce4e630cb3cfef56bdbc7039ebb1f074882db178517c21ba19a839d9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527JQ6PU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqjem3oPXjTT3tQ%2FJeGbQJemUVLCS1lWJVSCQsq0ZYAIhANk%2BaObn08cQWCMuS1t%2Bgzp62aRpjWHOJyf1vBxHrEKpKv8DCCoQABoMNjM3NDIzMTgzODA1Igw9spe6FR1VGFgK2Zoq3AN09FTugUnRCmr6Qf2mFTQedp%2B%2B%2Bf1VTEk72AnorA6dHc%2FVO1%2FsTDv383UY3QdAx64waKlUbmnSJTPwAuDeJoc0XdILSC5aQ8ypf84YP8Mj2bSuqn%2BhI4u%2FeX4yQEJnZUEXTtAQk2cUhTlgDyuEFUUp3Z6hH%2FPMZnU9kBtkN6fIpwTW6OSvbIC8A3k6r9JHPHudreNwuy99GrlXjMQVeOgyD0M3kS1Q8Yv9u9hkcYh%2BuTjHv5CIzhWobFS2wTrd%2FNEi5aV8ELB9h%2Fpo2NBYIfHR0jIAHiAZF1smF%2BMxZ%2FIA%2Fsse7wN0hOhpKpZJyCjsXwJSLPvL46HL8MDN%2FHxPbUS1RlqA%2FnLBm%2BK4vlYrEel6JWjCD9u3e4o2HIBXVGo0h6QUdMFUZFFw23L4sHnsjQ%2BnT18X8opGAEvA2dcsvvD2Zh6Ul9jEBfk3aU33jYNmh7hgschyVXyDEz2wegunbhHUx6OIYVK8VaKtJx8OoAayvf4hwECIjwZn4NfEBbsclVInhWgUkj9cnXVt97JdWmfjyjISCTvLDFQZ5OeqUoh1J9kfYtsVaXYTRt51vJ6QCxel5MZRtpU%2FvLR0wsrg5uL4xsLX00zpRfjvaNXWTy1dBCvyMZYhQvhsaL2D8jDh48O%2FBjqkAWK7Qwybx7nCCGXvALrn8dGZZ9eDFIn4W36lBXtnKK99NftJSF%2BdUJBuIJ4ectgwIXCvhZ0%2BQpdzXHSjg%2FZKcFmofZLLLXcLk5fpGpwGZO9ncYv11a8NHm1iEG4DK2MR%2Bvj2zzDGClsJgYwp5kTgRE%2FjVtcSwuCmMDudySmfYQJjOTZvyNlo%2BpNtiocID1I54MScBgEFaC4hWTdcfHIE4NIjJ5Hu&X-Amz-Signature=dbf5e1c937755e7dfab50b51534f1506957940d934b99f39331d39d2bd50d89c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527JQ6PU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqjem3oPXjTT3tQ%2FJeGbQJemUVLCS1lWJVSCQsq0ZYAIhANk%2BaObn08cQWCMuS1t%2Bgzp62aRpjWHOJyf1vBxHrEKpKv8DCCoQABoMNjM3NDIzMTgzODA1Igw9spe6FR1VGFgK2Zoq3AN09FTugUnRCmr6Qf2mFTQedp%2B%2B%2Bf1VTEk72AnorA6dHc%2FVO1%2FsTDv383UY3QdAx64waKlUbmnSJTPwAuDeJoc0XdILSC5aQ8ypf84YP8Mj2bSuqn%2BhI4u%2FeX4yQEJnZUEXTtAQk2cUhTlgDyuEFUUp3Z6hH%2FPMZnU9kBtkN6fIpwTW6OSvbIC8A3k6r9JHPHudreNwuy99GrlXjMQVeOgyD0M3kS1Q8Yv9u9hkcYh%2BuTjHv5CIzhWobFS2wTrd%2FNEi5aV8ELB9h%2Fpo2NBYIfHR0jIAHiAZF1smF%2BMxZ%2FIA%2Fsse7wN0hOhpKpZJyCjsXwJSLPvL46HL8MDN%2FHxPbUS1RlqA%2FnLBm%2BK4vlYrEel6JWjCD9u3e4o2HIBXVGo0h6QUdMFUZFFw23L4sHnsjQ%2BnT18X8opGAEvA2dcsvvD2Zh6Ul9jEBfk3aU33jYNmh7hgschyVXyDEz2wegunbhHUx6OIYVK8VaKtJx8OoAayvf4hwECIjwZn4NfEBbsclVInhWgUkj9cnXVt97JdWmfjyjISCTvLDFQZ5OeqUoh1J9kfYtsVaXYTRt51vJ6QCxel5MZRtpU%2FvLR0wsrg5uL4xsLX00zpRfjvaNXWTy1dBCvyMZYhQvhsaL2D8jDh48O%2FBjqkAWK7Qwybx7nCCGXvALrn8dGZZ9eDFIn4W36lBXtnKK99NftJSF%2BdUJBuIJ4ectgwIXCvhZ0%2BQpdzXHSjg%2FZKcFmofZLLLXcLk5fpGpwGZO9ncYv11a8NHm1iEG4DK2MR%2Bvj2zzDGClsJgYwp5kTgRE%2FjVtcSwuCmMDudySmfYQJjOTZvyNlo%2BpNtiocID1I54MScBgEFaC4hWTdcfHIE4NIjJ5Hu&X-Amz-Signature=022146162787ed5fc6fb6d476128813465095bb37b750fc54084637cd6026271&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527JQ6PU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqjem3oPXjTT3tQ%2FJeGbQJemUVLCS1lWJVSCQsq0ZYAIhANk%2BaObn08cQWCMuS1t%2Bgzp62aRpjWHOJyf1vBxHrEKpKv8DCCoQABoMNjM3NDIzMTgzODA1Igw9spe6FR1VGFgK2Zoq3AN09FTugUnRCmr6Qf2mFTQedp%2B%2B%2Bf1VTEk72AnorA6dHc%2FVO1%2FsTDv383UY3QdAx64waKlUbmnSJTPwAuDeJoc0XdILSC5aQ8ypf84YP8Mj2bSuqn%2BhI4u%2FeX4yQEJnZUEXTtAQk2cUhTlgDyuEFUUp3Z6hH%2FPMZnU9kBtkN6fIpwTW6OSvbIC8A3k6r9JHPHudreNwuy99GrlXjMQVeOgyD0M3kS1Q8Yv9u9hkcYh%2BuTjHv5CIzhWobFS2wTrd%2FNEi5aV8ELB9h%2Fpo2NBYIfHR0jIAHiAZF1smF%2BMxZ%2FIA%2Fsse7wN0hOhpKpZJyCjsXwJSLPvL46HL8MDN%2FHxPbUS1RlqA%2FnLBm%2BK4vlYrEel6JWjCD9u3e4o2HIBXVGo0h6QUdMFUZFFw23L4sHnsjQ%2BnT18X8opGAEvA2dcsvvD2Zh6Ul9jEBfk3aU33jYNmh7hgschyVXyDEz2wegunbhHUx6OIYVK8VaKtJx8OoAayvf4hwECIjwZn4NfEBbsclVInhWgUkj9cnXVt97JdWmfjyjISCTvLDFQZ5OeqUoh1J9kfYtsVaXYTRt51vJ6QCxel5MZRtpU%2FvLR0wsrg5uL4xsLX00zpRfjvaNXWTy1dBCvyMZYhQvhsaL2D8jDh48O%2FBjqkAWK7Qwybx7nCCGXvALrn8dGZZ9eDFIn4W36lBXtnKK99NftJSF%2BdUJBuIJ4ectgwIXCvhZ0%2BQpdzXHSjg%2FZKcFmofZLLLXcLk5fpGpwGZO9ncYv11a8NHm1iEG4DK2MR%2Bvj2zzDGClsJgYwp5kTgRE%2FjVtcSwuCmMDudySmfYQJjOTZvyNlo%2BpNtiocID1I54MScBgEFaC4hWTdcfHIE4NIjJ5Hu&X-Amz-Signature=156fa18e81d2f36285173134f3f846d6e4b0e32e22f5dd0e72ff70f73cf1411e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527JQ6PU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqjem3oPXjTT3tQ%2FJeGbQJemUVLCS1lWJVSCQsq0ZYAIhANk%2BaObn08cQWCMuS1t%2Bgzp62aRpjWHOJyf1vBxHrEKpKv8DCCoQABoMNjM3NDIzMTgzODA1Igw9spe6FR1VGFgK2Zoq3AN09FTugUnRCmr6Qf2mFTQedp%2B%2B%2Bf1VTEk72AnorA6dHc%2FVO1%2FsTDv383UY3QdAx64waKlUbmnSJTPwAuDeJoc0XdILSC5aQ8ypf84YP8Mj2bSuqn%2BhI4u%2FeX4yQEJnZUEXTtAQk2cUhTlgDyuEFUUp3Z6hH%2FPMZnU9kBtkN6fIpwTW6OSvbIC8A3k6r9JHPHudreNwuy99GrlXjMQVeOgyD0M3kS1Q8Yv9u9hkcYh%2BuTjHv5CIzhWobFS2wTrd%2FNEi5aV8ELB9h%2Fpo2NBYIfHR0jIAHiAZF1smF%2BMxZ%2FIA%2Fsse7wN0hOhpKpZJyCjsXwJSLPvL46HL8MDN%2FHxPbUS1RlqA%2FnLBm%2BK4vlYrEel6JWjCD9u3e4o2HIBXVGo0h6QUdMFUZFFw23L4sHnsjQ%2BnT18X8opGAEvA2dcsvvD2Zh6Ul9jEBfk3aU33jYNmh7hgschyVXyDEz2wegunbhHUx6OIYVK8VaKtJx8OoAayvf4hwECIjwZn4NfEBbsclVInhWgUkj9cnXVt97JdWmfjyjISCTvLDFQZ5OeqUoh1J9kfYtsVaXYTRt51vJ6QCxel5MZRtpU%2FvLR0wsrg5uL4xsLX00zpRfjvaNXWTy1dBCvyMZYhQvhsaL2D8jDh48O%2FBjqkAWK7Qwybx7nCCGXvALrn8dGZZ9eDFIn4W36lBXtnKK99NftJSF%2BdUJBuIJ4ectgwIXCvhZ0%2BQpdzXHSjg%2FZKcFmofZLLLXcLk5fpGpwGZO9ncYv11a8NHm1iEG4DK2MR%2Bvj2zzDGClsJgYwp5kTgRE%2FjVtcSwuCmMDudySmfYQJjOTZvyNlo%2BpNtiocID1I54MScBgEFaC4hWTdcfHIE4NIjJ5Hu&X-Amz-Signature=111ad8c282e280a79f76280da3bf8f8fa11e92cbced46d411fa52ce64c76ce01&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527JQ6PU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqjem3oPXjTT3tQ%2FJeGbQJemUVLCS1lWJVSCQsq0ZYAIhANk%2BaObn08cQWCMuS1t%2Bgzp62aRpjWHOJyf1vBxHrEKpKv8DCCoQABoMNjM3NDIzMTgzODA1Igw9spe6FR1VGFgK2Zoq3AN09FTugUnRCmr6Qf2mFTQedp%2B%2B%2Bf1VTEk72AnorA6dHc%2FVO1%2FsTDv383UY3QdAx64waKlUbmnSJTPwAuDeJoc0XdILSC5aQ8ypf84YP8Mj2bSuqn%2BhI4u%2FeX4yQEJnZUEXTtAQk2cUhTlgDyuEFUUp3Z6hH%2FPMZnU9kBtkN6fIpwTW6OSvbIC8A3k6r9JHPHudreNwuy99GrlXjMQVeOgyD0M3kS1Q8Yv9u9hkcYh%2BuTjHv5CIzhWobFS2wTrd%2FNEi5aV8ELB9h%2Fpo2NBYIfHR0jIAHiAZF1smF%2BMxZ%2FIA%2Fsse7wN0hOhpKpZJyCjsXwJSLPvL46HL8MDN%2FHxPbUS1RlqA%2FnLBm%2BK4vlYrEel6JWjCD9u3e4o2HIBXVGo0h6QUdMFUZFFw23L4sHnsjQ%2BnT18X8opGAEvA2dcsvvD2Zh6Ul9jEBfk3aU33jYNmh7hgschyVXyDEz2wegunbhHUx6OIYVK8VaKtJx8OoAayvf4hwECIjwZn4NfEBbsclVInhWgUkj9cnXVt97JdWmfjyjISCTvLDFQZ5OeqUoh1J9kfYtsVaXYTRt51vJ6QCxel5MZRtpU%2FvLR0wsrg5uL4xsLX00zpRfjvaNXWTy1dBCvyMZYhQvhsaL2D8jDh48O%2FBjqkAWK7Qwybx7nCCGXvALrn8dGZZ9eDFIn4W36lBXtnKK99NftJSF%2BdUJBuIJ4ectgwIXCvhZ0%2BQpdzXHSjg%2FZKcFmofZLLLXcLk5fpGpwGZO9ncYv11a8NHm1iEG4DK2MR%2Bvj2zzDGClsJgYwp5kTgRE%2FjVtcSwuCmMDudySmfYQJjOTZvyNlo%2BpNtiocID1I54MScBgEFaC4hWTdcfHIE4NIjJ5Hu&X-Amz-Signature=d3049b9ff3e938c727eca106fe22668f435823c70fc947f8935889bd67dadb37&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527JQ6PU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqjem3oPXjTT3tQ%2FJeGbQJemUVLCS1lWJVSCQsq0ZYAIhANk%2BaObn08cQWCMuS1t%2Bgzp62aRpjWHOJyf1vBxHrEKpKv8DCCoQABoMNjM3NDIzMTgzODA1Igw9spe6FR1VGFgK2Zoq3AN09FTugUnRCmr6Qf2mFTQedp%2B%2B%2Bf1VTEk72AnorA6dHc%2FVO1%2FsTDv383UY3QdAx64waKlUbmnSJTPwAuDeJoc0XdILSC5aQ8ypf84YP8Mj2bSuqn%2BhI4u%2FeX4yQEJnZUEXTtAQk2cUhTlgDyuEFUUp3Z6hH%2FPMZnU9kBtkN6fIpwTW6OSvbIC8A3k6r9JHPHudreNwuy99GrlXjMQVeOgyD0M3kS1Q8Yv9u9hkcYh%2BuTjHv5CIzhWobFS2wTrd%2FNEi5aV8ELB9h%2Fpo2NBYIfHR0jIAHiAZF1smF%2BMxZ%2FIA%2Fsse7wN0hOhpKpZJyCjsXwJSLPvL46HL8MDN%2FHxPbUS1RlqA%2FnLBm%2BK4vlYrEel6JWjCD9u3e4o2HIBXVGo0h6QUdMFUZFFw23L4sHnsjQ%2BnT18X8opGAEvA2dcsvvD2Zh6Ul9jEBfk3aU33jYNmh7hgschyVXyDEz2wegunbhHUx6OIYVK8VaKtJx8OoAayvf4hwECIjwZn4NfEBbsclVInhWgUkj9cnXVt97JdWmfjyjISCTvLDFQZ5OeqUoh1J9kfYtsVaXYTRt51vJ6QCxel5MZRtpU%2FvLR0wsrg5uL4xsLX00zpRfjvaNXWTy1dBCvyMZYhQvhsaL2D8jDh48O%2FBjqkAWK7Qwybx7nCCGXvALrn8dGZZ9eDFIn4W36lBXtnKK99NftJSF%2BdUJBuIJ4ectgwIXCvhZ0%2BQpdzXHSjg%2FZKcFmofZLLLXcLk5fpGpwGZO9ncYv11a8NHm1iEG4DK2MR%2Bvj2zzDGClsJgYwp5kTgRE%2FjVtcSwuCmMDudySmfYQJjOTZvyNlo%2BpNtiocID1I54MScBgEFaC4hWTdcfHIE4NIjJ5Hu&X-Amz-Signature=68dc975f70aa8538203597d17c04c3edc7fbaf7f90230e5580ede5384edf38bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
