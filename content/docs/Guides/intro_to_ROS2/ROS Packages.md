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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HUWHWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfnth3nS3l48z87FdVOo3K6i8333CcKzdpN6%2B59gtFwIhALtXmPRv0omyJsnN34b3tOdsDKvsz9kGInTJRXtQfbxUKv8DCF8QABoMNjM3NDIzMTgzODA1IgzkpMF5V2kMeRu4DiEq3AM80kSWKd85Y0U%2BmcNaoN035xiB%2BM0IzCTRdd38d8btPNle4asKIFz84ecro%2F9qOZnjZYe1IaX6CDAzON0vLGFhI%2BcUOjGZ18bsNxTEF6%2BoeDxMWGPS51Y7p42AEre%2FbPw%2BcAPyKQ1E2Yso2isKcwBBELbcChtU2sQSwGPMBEWZPMwlD3yWuohx%2BrQ%2BanTM%2BuU37bzBVcw7rYzaC4zfi6kl62SIh0JF5qHi56NT%2FW52rkNAu%2FmMQ9BEimPok57VkCeoopsQe%2FTAr0Usv6EF1b7Szr%2Fg8R5Oy2lYQdq7%2B5Lh42WrxeDj%2BHYkpJ9SCkzjoBTsWrUU6kd3A63EqhkCNzXwJXKeHCPsSQPoU%2FCcumzIqV8G0iSYA5hCoynOCqnq2A%2FkkAATuhlNTtDtODH%2FpctYnzNesJMaQVGrd7NbQW%2B8VvEo2yHxHR3Dt9BcM4%2BTTRo85MCmASf1YEscMKQIYI90S8oMz3LuGJpCdbmOeGLPzdzsEFo7pDfrjGlC85pLSl%2B8AIyA2qFBmdvXyiANwlb%2FgdI6u32dAgBYrYxlzlknmFS6JLxZdaWD9coTV0H3crBI%2BOit9vmtLPi3ChrV%2FpnKbZz2GNrs6yNO9T7sdKDa%2BAl%2FdYZqTxGGn9H5rDDbnqLBBjqkAYlEuyD4MbO6xS49UWy582tqCV1Pj47OsTpnCszplTJ%2Fjq6iXfV5RrPZihf%2BDQQWCfiH8FXD%2FDmGoE0hmLBdqeXMcn2Ng3dKXlavIba6Hqx7vOnfB3srb1ZUesWNjZHGqCrBfi6eGN6%2FJX0%2BUGCSQK8QVc7CvQ4XvN4OkyTnCCTqNrYt1nr5y90bTq3FFMZh9NPgSTHoYB6citUFfVfvjd3KxmM4&X-Amz-Signature=d2e6ec7d39bded6adbdc4bfb694f2a85f6d1d36be1d7f4181e0f93131968d79e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HUWHWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfnth3nS3l48z87FdVOo3K6i8333CcKzdpN6%2B59gtFwIhALtXmPRv0omyJsnN34b3tOdsDKvsz9kGInTJRXtQfbxUKv8DCF8QABoMNjM3NDIzMTgzODA1IgzkpMF5V2kMeRu4DiEq3AM80kSWKd85Y0U%2BmcNaoN035xiB%2BM0IzCTRdd38d8btPNle4asKIFz84ecro%2F9qOZnjZYe1IaX6CDAzON0vLGFhI%2BcUOjGZ18bsNxTEF6%2BoeDxMWGPS51Y7p42AEre%2FbPw%2BcAPyKQ1E2Yso2isKcwBBELbcChtU2sQSwGPMBEWZPMwlD3yWuohx%2BrQ%2BanTM%2BuU37bzBVcw7rYzaC4zfi6kl62SIh0JF5qHi56NT%2FW52rkNAu%2FmMQ9BEimPok57VkCeoopsQe%2FTAr0Usv6EF1b7Szr%2Fg8R5Oy2lYQdq7%2B5Lh42WrxeDj%2BHYkpJ9SCkzjoBTsWrUU6kd3A63EqhkCNzXwJXKeHCPsSQPoU%2FCcumzIqV8G0iSYA5hCoynOCqnq2A%2FkkAATuhlNTtDtODH%2FpctYnzNesJMaQVGrd7NbQW%2B8VvEo2yHxHR3Dt9BcM4%2BTTRo85MCmASf1YEscMKQIYI90S8oMz3LuGJpCdbmOeGLPzdzsEFo7pDfrjGlC85pLSl%2B8AIyA2qFBmdvXyiANwlb%2FgdI6u32dAgBYrYxlzlknmFS6JLxZdaWD9coTV0H3crBI%2BOit9vmtLPi3ChrV%2FpnKbZz2GNrs6yNO9T7sdKDa%2BAl%2FdYZqTxGGn9H5rDDbnqLBBjqkAYlEuyD4MbO6xS49UWy582tqCV1Pj47OsTpnCszplTJ%2Fjq6iXfV5RrPZihf%2BDQQWCfiH8FXD%2FDmGoE0hmLBdqeXMcn2Ng3dKXlavIba6Hqx7vOnfB3srb1ZUesWNjZHGqCrBfi6eGN6%2FJX0%2BUGCSQK8QVc7CvQ4XvN4OkyTnCCTqNrYt1nr5y90bTq3FFMZh9NPgSTHoYB6citUFfVfvjd3KxmM4&X-Amz-Signature=ecffaf13204c99813a724f34afb493f21e8ac8a931a105951586fc0eaf777822&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HUWHWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfnth3nS3l48z87FdVOo3K6i8333CcKzdpN6%2B59gtFwIhALtXmPRv0omyJsnN34b3tOdsDKvsz9kGInTJRXtQfbxUKv8DCF8QABoMNjM3NDIzMTgzODA1IgzkpMF5V2kMeRu4DiEq3AM80kSWKd85Y0U%2BmcNaoN035xiB%2BM0IzCTRdd38d8btPNle4asKIFz84ecro%2F9qOZnjZYe1IaX6CDAzON0vLGFhI%2BcUOjGZ18bsNxTEF6%2BoeDxMWGPS51Y7p42AEre%2FbPw%2BcAPyKQ1E2Yso2isKcwBBELbcChtU2sQSwGPMBEWZPMwlD3yWuohx%2BrQ%2BanTM%2BuU37bzBVcw7rYzaC4zfi6kl62SIh0JF5qHi56NT%2FW52rkNAu%2FmMQ9BEimPok57VkCeoopsQe%2FTAr0Usv6EF1b7Szr%2Fg8R5Oy2lYQdq7%2B5Lh42WrxeDj%2BHYkpJ9SCkzjoBTsWrUU6kd3A63EqhkCNzXwJXKeHCPsSQPoU%2FCcumzIqV8G0iSYA5hCoynOCqnq2A%2FkkAATuhlNTtDtODH%2FpctYnzNesJMaQVGrd7NbQW%2B8VvEo2yHxHR3Dt9BcM4%2BTTRo85MCmASf1YEscMKQIYI90S8oMz3LuGJpCdbmOeGLPzdzsEFo7pDfrjGlC85pLSl%2B8AIyA2qFBmdvXyiANwlb%2FgdI6u32dAgBYrYxlzlknmFS6JLxZdaWD9coTV0H3crBI%2BOit9vmtLPi3ChrV%2FpnKbZz2GNrs6yNO9T7sdKDa%2BAl%2FdYZqTxGGn9H5rDDbnqLBBjqkAYlEuyD4MbO6xS49UWy582tqCV1Pj47OsTpnCszplTJ%2Fjq6iXfV5RrPZihf%2BDQQWCfiH8FXD%2FDmGoE0hmLBdqeXMcn2Ng3dKXlavIba6Hqx7vOnfB3srb1ZUesWNjZHGqCrBfi6eGN6%2FJX0%2BUGCSQK8QVc7CvQ4XvN4OkyTnCCTqNrYt1nr5y90bTq3FFMZh9NPgSTHoYB6citUFfVfvjd3KxmM4&X-Amz-Signature=f95013738ce43f1146ff1f18a9e802f3ffba590b9857a65cd0f36547699c162b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HUWHWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfnth3nS3l48z87FdVOo3K6i8333CcKzdpN6%2B59gtFwIhALtXmPRv0omyJsnN34b3tOdsDKvsz9kGInTJRXtQfbxUKv8DCF8QABoMNjM3NDIzMTgzODA1IgzkpMF5V2kMeRu4DiEq3AM80kSWKd85Y0U%2BmcNaoN035xiB%2BM0IzCTRdd38d8btPNle4asKIFz84ecro%2F9qOZnjZYe1IaX6CDAzON0vLGFhI%2BcUOjGZ18bsNxTEF6%2BoeDxMWGPS51Y7p42AEre%2FbPw%2BcAPyKQ1E2Yso2isKcwBBELbcChtU2sQSwGPMBEWZPMwlD3yWuohx%2BrQ%2BanTM%2BuU37bzBVcw7rYzaC4zfi6kl62SIh0JF5qHi56NT%2FW52rkNAu%2FmMQ9BEimPok57VkCeoopsQe%2FTAr0Usv6EF1b7Szr%2Fg8R5Oy2lYQdq7%2B5Lh42WrxeDj%2BHYkpJ9SCkzjoBTsWrUU6kd3A63EqhkCNzXwJXKeHCPsSQPoU%2FCcumzIqV8G0iSYA5hCoynOCqnq2A%2FkkAATuhlNTtDtODH%2FpctYnzNesJMaQVGrd7NbQW%2B8VvEo2yHxHR3Dt9BcM4%2BTTRo85MCmASf1YEscMKQIYI90S8oMz3LuGJpCdbmOeGLPzdzsEFo7pDfrjGlC85pLSl%2B8AIyA2qFBmdvXyiANwlb%2FgdI6u32dAgBYrYxlzlknmFS6JLxZdaWD9coTV0H3crBI%2BOit9vmtLPi3ChrV%2FpnKbZz2GNrs6yNO9T7sdKDa%2BAl%2FdYZqTxGGn9H5rDDbnqLBBjqkAYlEuyD4MbO6xS49UWy582tqCV1Pj47OsTpnCszplTJ%2Fjq6iXfV5RrPZihf%2BDQQWCfiH8FXD%2FDmGoE0hmLBdqeXMcn2Ng3dKXlavIba6Hqx7vOnfB3srb1ZUesWNjZHGqCrBfi6eGN6%2FJX0%2BUGCSQK8QVc7CvQ4XvN4OkyTnCCTqNrYt1nr5y90bTq3FFMZh9NPgSTHoYB6citUFfVfvjd3KxmM4&X-Amz-Signature=b6ecca3689e2b0c31a422592aed8ec31384edc131cfd04861177631a4f0e8bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HUWHWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfnth3nS3l48z87FdVOo3K6i8333CcKzdpN6%2B59gtFwIhALtXmPRv0omyJsnN34b3tOdsDKvsz9kGInTJRXtQfbxUKv8DCF8QABoMNjM3NDIzMTgzODA1IgzkpMF5V2kMeRu4DiEq3AM80kSWKd85Y0U%2BmcNaoN035xiB%2BM0IzCTRdd38d8btPNle4asKIFz84ecro%2F9qOZnjZYe1IaX6CDAzON0vLGFhI%2BcUOjGZ18bsNxTEF6%2BoeDxMWGPS51Y7p42AEre%2FbPw%2BcAPyKQ1E2Yso2isKcwBBELbcChtU2sQSwGPMBEWZPMwlD3yWuohx%2BrQ%2BanTM%2BuU37bzBVcw7rYzaC4zfi6kl62SIh0JF5qHi56NT%2FW52rkNAu%2FmMQ9BEimPok57VkCeoopsQe%2FTAr0Usv6EF1b7Szr%2Fg8R5Oy2lYQdq7%2B5Lh42WrxeDj%2BHYkpJ9SCkzjoBTsWrUU6kd3A63EqhkCNzXwJXKeHCPsSQPoU%2FCcumzIqV8G0iSYA5hCoynOCqnq2A%2FkkAATuhlNTtDtODH%2FpctYnzNesJMaQVGrd7NbQW%2B8VvEo2yHxHR3Dt9BcM4%2BTTRo85MCmASf1YEscMKQIYI90S8oMz3LuGJpCdbmOeGLPzdzsEFo7pDfrjGlC85pLSl%2B8AIyA2qFBmdvXyiANwlb%2FgdI6u32dAgBYrYxlzlknmFS6JLxZdaWD9coTV0H3crBI%2BOit9vmtLPi3ChrV%2FpnKbZz2GNrs6yNO9T7sdKDa%2BAl%2FdYZqTxGGn9H5rDDbnqLBBjqkAYlEuyD4MbO6xS49UWy582tqCV1Pj47OsTpnCszplTJ%2Fjq6iXfV5RrPZihf%2BDQQWCfiH8FXD%2FDmGoE0hmLBdqeXMcn2Ng3dKXlavIba6Hqx7vOnfB3srb1ZUesWNjZHGqCrBfi6eGN6%2FJX0%2BUGCSQK8QVc7CvQ4XvN4OkyTnCCTqNrYt1nr5y90bTq3FFMZh9NPgSTHoYB6citUFfVfvjd3KxmM4&X-Amz-Signature=fc7254bea099f8536393bda23356b780728359090f9e65664bf808f82202fdfb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HUWHWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfnth3nS3l48z87FdVOo3K6i8333CcKzdpN6%2B59gtFwIhALtXmPRv0omyJsnN34b3tOdsDKvsz9kGInTJRXtQfbxUKv8DCF8QABoMNjM3NDIzMTgzODA1IgzkpMF5V2kMeRu4DiEq3AM80kSWKd85Y0U%2BmcNaoN035xiB%2BM0IzCTRdd38d8btPNle4asKIFz84ecro%2F9qOZnjZYe1IaX6CDAzON0vLGFhI%2BcUOjGZ18bsNxTEF6%2BoeDxMWGPS51Y7p42AEre%2FbPw%2BcAPyKQ1E2Yso2isKcwBBELbcChtU2sQSwGPMBEWZPMwlD3yWuohx%2BrQ%2BanTM%2BuU37bzBVcw7rYzaC4zfi6kl62SIh0JF5qHi56NT%2FW52rkNAu%2FmMQ9BEimPok57VkCeoopsQe%2FTAr0Usv6EF1b7Szr%2Fg8R5Oy2lYQdq7%2B5Lh42WrxeDj%2BHYkpJ9SCkzjoBTsWrUU6kd3A63EqhkCNzXwJXKeHCPsSQPoU%2FCcumzIqV8G0iSYA5hCoynOCqnq2A%2FkkAATuhlNTtDtODH%2FpctYnzNesJMaQVGrd7NbQW%2B8VvEo2yHxHR3Dt9BcM4%2BTTRo85MCmASf1YEscMKQIYI90S8oMz3LuGJpCdbmOeGLPzdzsEFo7pDfrjGlC85pLSl%2B8AIyA2qFBmdvXyiANwlb%2FgdI6u32dAgBYrYxlzlknmFS6JLxZdaWD9coTV0H3crBI%2BOit9vmtLPi3ChrV%2FpnKbZz2GNrs6yNO9T7sdKDa%2BAl%2FdYZqTxGGn9H5rDDbnqLBBjqkAYlEuyD4MbO6xS49UWy582tqCV1Pj47OsTpnCszplTJ%2Fjq6iXfV5RrPZihf%2BDQQWCfiH8FXD%2FDmGoE0hmLBdqeXMcn2Ng3dKXlavIba6Hqx7vOnfB3srb1ZUesWNjZHGqCrBfi6eGN6%2FJX0%2BUGCSQK8QVc7CvQ4XvN4OkyTnCCTqNrYt1nr5y90bTq3FFMZh9NPgSTHoYB6citUFfVfvjd3KxmM4&X-Amz-Signature=361845f1f4cfc2de62c40d12c42ee51c9cf9d8f0c0b90ead57d7e75b81cd8aae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HUWHWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrfnth3nS3l48z87FdVOo3K6i8333CcKzdpN6%2B59gtFwIhALtXmPRv0omyJsnN34b3tOdsDKvsz9kGInTJRXtQfbxUKv8DCF8QABoMNjM3NDIzMTgzODA1IgzkpMF5V2kMeRu4DiEq3AM80kSWKd85Y0U%2BmcNaoN035xiB%2BM0IzCTRdd38d8btPNle4asKIFz84ecro%2F9qOZnjZYe1IaX6CDAzON0vLGFhI%2BcUOjGZ18bsNxTEF6%2BoeDxMWGPS51Y7p42AEre%2FbPw%2BcAPyKQ1E2Yso2isKcwBBELbcChtU2sQSwGPMBEWZPMwlD3yWuohx%2BrQ%2BanTM%2BuU37bzBVcw7rYzaC4zfi6kl62SIh0JF5qHi56NT%2FW52rkNAu%2FmMQ9BEimPok57VkCeoopsQe%2FTAr0Usv6EF1b7Szr%2Fg8R5Oy2lYQdq7%2B5Lh42WrxeDj%2BHYkpJ9SCkzjoBTsWrUU6kd3A63EqhkCNzXwJXKeHCPsSQPoU%2FCcumzIqV8G0iSYA5hCoynOCqnq2A%2FkkAATuhlNTtDtODH%2FpctYnzNesJMaQVGrd7NbQW%2B8VvEo2yHxHR3Dt9BcM4%2BTTRo85MCmASf1YEscMKQIYI90S8oMz3LuGJpCdbmOeGLPzdzsEFo7pDfrjGlC85pLSl%2B8AIyA2qFBmdvXyiANwlb%2FgdI6u32dAgBYrYxlzlknmFS6JLxZdaWD9coTV0H3crBI%2BOit9vmtLPi3ChrV%2FpnKbZz2GNrs6yNO9T7sdKDa%2BAl%2FdYZqTxGGn9H5rDDbnqLBBjqkAYlEuyD4MbO6xS49UWy582tqCV1Pj47OsTpnCszplTJ%2Fjq6iXfV5RrPZihf%2BDQQWCfiH8FXD%2FDmGoE0hmLBdqeXMcn2Ng3dKXlavIba6Hqx7vOnfB3srb1ZUesWNjZHGqCrBfi6eGN6%2FJX0%2BUGCSQK8QVc7CvQ4XvN4OkyTnCCTqNrYt1nr5y90bTq3FFMZh9NPgSTHoYB6citUFfVfvjd3KxmM4&X-Amz-Signature=801ef507ab4dc26679ed8944fdea3f836256da18af3a631983a27eadc85e8cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
