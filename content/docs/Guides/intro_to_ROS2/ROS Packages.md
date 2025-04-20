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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL26RARH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID7DdSbtl6nopGJCoZ6nAKr2eN7KsGy57lZLyiKaCjtjAiAQDKLZLvLlymGJwk5K0raz%2FK4q55CRfsZnIWPORHtwOSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlLH5h1Xhqyw8U2%2FKtwDk7rUJbE%2FdEjuizh7EOldVbTrddNek5CWImrCSIiDtGT3nvosE94fQVRvIRDq5bspiuR1vkllQZw3i6X1tHcqgMCCkzLTR5uPwP3r%2BB45oTNhGyWUWi2WMtDlxAyXRzcAOD2NdtnMctuxKfSymy7BH4DIvWEtXCKb9UUfZhVg6zeFaE%2BnkTsZodWk8v7qQKSUDKQv7agS27dLRBmSlpUUnrRyYhF5nJwjAWXBwqe33H9GOmXVnJAbgKEUHNL%2B9T3YeW65t0oZxo1gz6DLFhr3Q8w0h6mfQINhlqA74nPkGpZfq1t3P7q9IbbReCuZFvJoG1bEU%2FT%2FgraSjRhm9wLFFaBqOvZ4HHA9OBI3YZBV2xKf2a0%2B%2FyhCjzKaWyhaI6dZt2dhtAiWoM9o7DSvmMTT53hJlsvUXNnfd97iGkqqIDNMQc65Y%2BFPo9o0D3bAkkEyDIY%2BpWGRsrpAie0M7IpL4%2B55wozwsQsCE%2FYjT5iURE7EE04cJIfQ6oAQFiREonDJmUWiEiXP%2FUYoA838L7IMcgBbvbtCMOWBk%2FeZJ2TjeX%2FXS5YeHFwjoS0gGzVkVcmJP5h71xyBuoRJpdRzFxfjBMfRqk7vQeu957W%2FRK3pfk1EeNPYLSqNQ7A%2Fv6QwjoKRwAY6pgGd8aqtU712yPcokUxM0lIXPoP79h8uCXiXMb8Fh2Yndo2T3pqflR%2Boqol2Vhv%2FyntOmmZBMr2Yqaarso95YCzISQ74%2FDfbGzFLSiRANCG69vwCwH8OgohLRTN7IsCYVqCtoYG0erYdaMeeR2eqkYyYiCYlICfps2ufVlcQRvnjtVRC6jJut5G9WvaswSa2mduJmBngFCLApvJYWujJPqLtZz5%2BGtpO&X-Amz-Signature=88906e7cb3f37578c0e16542c7640d1f2150450d717533bce633a517a3499b05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL26RARH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID7DdSbtl6nopGJCoZ6nAKr2eN7KsGy57lZLyiKaCjtjAiAQDKLZLvLlymGJwk5K0raz%2FK4q55CRfsZnIWPORHtwOSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlLH5h1Xhqyw8U2%2FKtwDk7rUJbE%2FdEjuizh7EOldVbTrddNek5CWImrCSIiDtGT3nvosE94fQVRvIRDq5bspiuR1vkllQZw3i6X1tHcqgMCCkzLTR5uPwP3r%2BB45oTNhGyWUWi2WMtDlxAyXRzcAOD2NdtnMctuxKfSymy7BH4DIvWEtXCKb9UUfZhVg6zeFaE%2BnkTsZodWk8v7qQKSUDKQv7agS27dLRBmSlpUUnrRyYhF5nJwjAWXBwqe33H9GOmXVnJAbgKEUHNL%2B9T3YeW65t0oZxo1gz6DLFhr3Q8w0h6mfQINhlqA74nPkGpZfq1t3P7q9IbbReCuZFvJoG1bEU%2FT%2FgraSjRhm9wLFFaBqOvZ4HHA9OBI3YZBV2xKf2a0%2B%2FyhCjzKaWyhaI6dZt2dhtAiWoM9o7DSvmMTT53hJlsvUXNnfd97iGkqqIDNMQc65Y%2BFPo9o0D3bAkkEyDIY%2BpWGRsrpAie0M7IpL4%2B55wozwsQsCE%2FYjT5iURE7EE04cJIfQ6oAQFiREonDJmUWiEiXP%2FUYoA838L7IMcgBbvbtCMOWBk%2FeZJ2TjeX%2FXS5YeHFwjoS0gGzVkVcmJP5h71xyBuoRJpdRzFxfjBMfRqk7vQeu957W%2FRK3pfk1EeNPYLSqNQ7A%2Fv6QwjoKRwAY6pgGd8aqtU712yPcokUxM0lIXPoP79h8uCXiXMb8Fh2Yndo2T3pqflR%2Boqol2Vhv%2FyntOmmZBMr2Yqaarso95YCzISQ74%2FDfbGzFLSiRANCG69vwCwH8OgohLRTN7IsCYVqCtoYG0erYdaMeeR2eqkYyYiCYlICfps2ufVlcQRvnjtVRC6jJut5G9WvaswSa2mduJmBngFCLApvJYWujJPqLtZz5%2BGtpO&X-Amz-Signature=f507991ec3cb24d64a8501f1f4835b1f8c5d6c14955b3825ada845739797e80f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL26RARH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID7DdSbtl6nopGJCoZ6nAKr2eN7KsGy57lZLyiKaCjtjAiAQDKLZLvLlymGJwk5K0raz%2FK4q55CRfsZnIWPORHtwOSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlLH5h1Xhqyw8U2%2FKtwDk7rUJbE%2FdEjuizh7EOldVbTrddNek5CWImrCSIiDtGT3nvosE94fQVRvIRDq5bspiuR1vkllQZw3i6X1tHcqgMCCkzLTR5uPwP3r%2BB45oTNhGyWUWi2WMtDlxAyXRzcAOD2NdtnMctuxKfSymy7BH4DIvWEtXCKb9UUfZhVg6zeFaE%2BnkTsZodWk8v7qQKSUDKQv7agS27dLRBmSlpUUnrRyYhF5nJwjAWXBwqe33H9GOmXVnJAbgKEUHNL%2B9T3YeW65t0oZxo1gz6DLFhr3Q8w0h6mfQINhlqA74nPkGpZfq1t3P7q9IbbReCuZFvJoG1bEU%2FT%2FgraSjRhm9wLFFaBqOvZ4HHA9OBI3YZBV2xKf2a0%2B%2FyhCjzKaWyhaI6dZt2dhtAiWoM9o7DSvmMTT53hJlsvUXNnfd97iGkqqIDNMQc65Y%2BFPo9o0D3bAkkEyDIY%2BpWGRsrpAie0M7IpL4%2B55wozwsQsCE%2FYjT5iURE7EE04cJIfQ6oAQFiREonDJmUWiEiXP%2FUYoA838L7IMcgBbvbtCMOWBk%2FeZJ2TjeX%2FXS5YeHFwjoS0gGzVkVcmJP5h71xyBuoRJpdRzFxfjBMfRqk7vQeu957W%2FRK3pfk1EeNPYLSqNQ7A%2Fv6QwjoKRwAY6pgGd8aqtU712yPcokUxM0lIXPoP79h8uCXiXMb8Fh2Yndo2T3pqflR%2Boqol2Vhv%2FyntOmmZBMr2Yqaarso95YCzISQ74%2FDfbGzFLSiRANCG69vwCwH8OgohLRTN7IsCYVqCtoYG0erYdaMeeR2eqkYyYiCYlICfps2ufVlcQRvnjtVRC6jJut5G9WvaswSa2mduJmBngFCLApvJYWujJPqLtZz5%2BGtpO&X-Amz-Signature=0a28756c543d4f5fe16484951f9ede11302c271030a31cc4082796561e2b69a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL26RARH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID7DdSbtl6nopGJCoZ6nAKr2eN7KsGy57lZLyiKaCjtjAiAQDKLZLvLlymGJwk5K0raz%2FK4q55CRfsZnIWPORHtwOSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlLH5h1Xhqyw8U2%2FKtwDk7rUJbE%2FdEjuizh7EOldVbTrddNek5CWImrCSIiDtGT3nvosE94fQVRvIRDq5bspiuR1vkllQZw3i6X1tHcqgMCCkzLTR5uPwP3r%2BB45oTNhGyWUWi2WMtDlxAyXRzcAOD2NdtnMctuxKfSymy7BH4DIvWEtXCKb9UUfZhVg6zeFaE%2BnkTsZodWk8v7qQKSUDKQv7agS27dLRBmSlpUUnrRyYhF5nJwjAWXBwqe33H9GOmXVnJAbgKEUHNL%2B9T3YeW65t0oZxo1gz6DLFhr3Q8w0h6mfQINhlqA74nPkGpZfq1t3P7q9IbbReCuZFvJoG1bEU%2FT%2FgraSjRhm9wLFFaBqOvZ4HHA9OBI3YZBV2xKf2a0%2B%2FyhCjzKaWyhaI6dZt2dhtAiWoM9o7DSvmMTT53hJlsvUXNnfd97iGkqqIDNMQc65Y%2BFPo9o0D3bAkkEyDIY%2BpWGRsrpAie0M7IpL4%2B55wozwsQsCE%2FYjT5iURE7EE04cJIfQ6oAQFiREonDJmUWiEiXP%2FUYoA838L7IMcgBbvbtCMOWBk%2FeZJ2TjeX%2FXS5YeHFwjoS0gGzVkVcmJP5h71xyBuoRJpdRzFxfjBMfRqk7vQeu957W%2FRK3pfk1EeNPYLSqNQ7A%2Fv6QwjoKRwAY6pgGd8aqtU712yPcokUxM0lIXPoP79h8uCXiXMb8Fh2Yndo2T3pqflR%2Boqol2Vhv%2FyntOmmZBMr2Yqaarso95YCzISQ74%2FDfbGzFLSiRANCG69vwCwH8OgohLRTN7IsCYVqCtoYG0erYdaMeeR2eqkYyYiCYlICfps2ufVlcQRvnjtVRC6jJut5G9WvaswSa2mduJmBngFCLApvJYWujJPqLtZz5%2BGtpO&X-Amz-Signature=607758511f90033d60f85cd3ec0e87766d1ff95f8833b7e4990dfa11bc6938b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL26RARH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID7DdSbtl6nopGJCoZ6nAKr2eN7KsGy57lZLyiKaCjtjAiAQDKLZLvLlymGJwk5K0raz%2FK4q55CRfsZnIWPORHtwOSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlLH5h1Xhqyw8U2%2FKtwDk7rUJbE%2FdEjuizh7EOldVbTrddNek5CWImrCSIiDtGT3nvosE94fQVRvIRDq5bspiuR1vkllQZw3i6X1tHcqgMCCkzLTR5uPwP3r%2BB45oTNhGyWUWi2WMtDlxAyXRzcAOD2NdtnMctuxKfSymy7BH4DIvWEtXCKb9UUfZhVg6zeFaE%2BnkTsZodWk8v7qQKSUDKQv7agS27dLRBmSlpUUnrRyYhF5nJwjAWXBwqe33H9GOmXVnJAbgKEUHNL%2B9T3YeW65t0oZxo1gz6DLFhr3Q8w0h6mfQINhlqA74nPkGpZfq1t3P7q9IbbReCuZFvJoG1bEU%2FT%2FgraSjRhm9wLFFaBqOvZ4HHA9OBI3YZBV2xKf2a0%2B%2FyhCjzKaWyhaI6dZt2dhtAiWoM9o7DSvmMTT53hJlsvUXNnfd97iGkqqIDNMQc65Y%2BFPo9o0D3bAkkEyDIY%2BpWGRsrpAie0M7IpL4%2B55wozwsQsCE%2FYjT5iURE7EE04cJIfQ6oAQFiREonDJmUWiEiXP%2FUYoA838L7IMcgBbvbtCMOWBk%2FeZJ2TjeX%2FXS5YeHFwjoS0gGzVkVcmJP5h71xyBuoRJpdRzFxfjBMfRqk7vQeu957W%2FRK3pfk1EeNPYLSqNQ7A%2Fv6QwjoKRwAY6pgGd8aqtU712yPcokUxM0lIXPoP79h8uCXiXMb8Fh2Yndo2T3pqflR%2Boqol2Vhv%2FyntOmmZBMr2Yqaarso95YCzISQ74%2FDfbGzFLSiRANCG69vwCwH8OgohLRTN7IsCYVqCtoYG0erYdaMeeR2eqkYyYiCYlICfps2ufVlcQRvnjtVRC6jJut5G9WvaswSa2mduJmBngFCLApvJYWujJPqLtZz5%2BGtpO&X-Amz-Signature=1d8e337774ae6addf1576bfd82053492522084e83f2221db137f0c4f6013e7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL26RARH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID7DdSbtl6nopGJCoZ6nAKr2eN7KsGy57lZLyiKaCjtjAiAQDKLZLvLlymGJwk5K0raz%2FK4q55CRfsZnIWPORHtwOSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlLH5h1Xhqyw8U2%2FKtwDk7rUJbE%2FdEjuizh7EOldVbTrddNek5CWImrCSIiDtGT3nvosE94fQVRvIRDq5bspiuR1vkllQZw3i6X1tHcqgMCCkzLTR5uPwP3r%2BB45oTNhGyWUWi2WMtDlxAyXRzcAOD2NdtnMctuxKfSymy7BH4DIvWEtXCKb9UUfZhVg6zeFaE%2BnkTsZodWk8v7qQKSUDKQv7agS27dLRBmSlpUUnrRyYhF5nJwjAWXBwqe33H9GOmXVnJAbgKEUHNL%2B9T3YeW65t0oZxo1gz6DLFhr3Q8w0h6mfQINhlqA74nPkGpZfq1t3P7q9IbbReCuZFvJoG1bEU%2FT%2FgraSjRhm9wLFFaBqOvZ4HHA9OBI3YZBV2xKf2a0%2B%2FyhCjzKaWyhaI6dZt2dhtAiWoM9o7DSvmMTT53hJlsvUXNnfd97iGkqqIDNMQc65Y%2BFPo9o0D3bAkkEyDIY%2BpWGRsrpAie0M7IpL4%2B55wozwsQsCE%2FYjT5iURE7EE04cJIfQ6oAQFiREonDJmUWiEiXP%2FUYoA838L7IMcgBbvbtCMOWBk%2FeZJ2TjeX%2FXS5YeHFwjoS0gGzVkVcmJP5h71xyBuoRJpdRzFxfjBMfRqk7vQeu957W%2FRK3pfk1EeNPYLSqNQ7A%2Fv6QwjoKRwAY6pgGd8aqtU712yPcokUxM0lIXPoP79h8uCXiXMb8Fh2Yndo2T3pqflR%2Boqol2Vhv%2FyntOmmZBMr2Yqaarso95YCzISQ74%2FDfbGzFLSiRANCG69vwCwH8OgohLRTN7IsCYVqCtoYG0erYdaMeeR2eqkYyYiCYlICfps2ufVlcQRvnjtVRC6jJut5G9WvaswSa2mduJmBngFCLApvJYWujJPqLtZz5%2BGtpO&X-Amz-Signature=649508f0aa3dc73730462d43a4c4a14229af768526aa01e11b32653a1baf343e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL26RARH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID7DdSbtl6nopGJCoZ6nAKr2eN7KsGy57lZLyiKaCjtjAiAQDKLZLvLlymGJwk5K0raz%2FK4q55CRfsZnIWPORHtwOSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwlLH5h1Xhqyw8U2%2FKtwDk7rUJbE%2FdEjuizh7EOldVbTrddNek5CWImrCSIiDtGT3nvosE94fQVRvIRDq5bspiuR1vkllQZw3i6X1tHcqgMCCkzLTR5uPwP3r%2BB45oTNhGyWUWi2WMtDlxAyXRzcAOD2NdtnMctuxKfSymy7BH4DIvWEtXCKb9UUfZhVg6zeFaE%2BnkTsZodWk8v7qQKSUDKQv7agS27dLRBmSlpUUnrRyYhF5nJwjAWXBwqe33H9GOmXVnJAbgKEUHNL%2B9T3YeW65t0oZxo1gz6DLFhr3Q8w0h6mfQINhlqA74nPkGpZfq1t3P7q9IbbReCuZFvJoG1bEU%2FT%2FgraSjRhm9wLFFaBqOvZ4HHA9OBI3YZBV2xKf2a0%2B%2FyhCjzKaWyhaI6dZt2dhtAiWoM9o7DSvmMTT53hJlsvUXNnfd97iGkqqIDNMQc65Y%2BFPo9o0D3bAkkEyDIY%2BpWGRsrpAie0M7IpL4%2B55wozwsQsCE%2FYjT5iURE7EE04cJIfQ6oAQFiREonDJmUWiEiXP%2FUYoA838L7IMcgBbvbtCMOWBk%2FeZJ2TjeX%2FXS5YeHFwjoS0gGzVkVcmJP5h71xyBuoRJpdRzFxfjBMfRqk7vQeu957W%2FRK3pfk1EeNPYLSqNQ7A%2Fv6QwjoKRwAY6pgGd8aqtU712yPcokUxM0lIXPoP79h8uCXiXMb8Fh2Yndo2T3pqflR%2Boqol2Vhv%2FyntOmmZBMr2Yqaarso95YCzISQ74%2FDfbGzFLSiRANCG69vwCwH8OgohLRTN7IsCYVqCtoYG0erYdaMeeR2eqkYyYiCYlICfps2ufVlcQRvnjtVRC6jJut5G9WvaswSa2mduJmBngFCLApvJYWujJPqLtZz5%2BGtpO&X-Amz-Signature=63e5aa6d7512d2c8e2b4387575b81f8a7f61d03de41dfdf5be14789d68e72f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
