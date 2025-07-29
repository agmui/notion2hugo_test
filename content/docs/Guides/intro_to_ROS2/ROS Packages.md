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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6G2YFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCfWwEsFr29Cjp4zQCRp5AHoOZlYk3ZvDQnz5sfGA7cqQIhANCi40u3HTi2GnHQ9Nf8jy52N6WV2KXLhcEkj3Nc%2B071KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeHC%2BTphmTJ8hU1Q0q3ANpPE7TSsq7jGZttGT0cw0Su6%2BSuSvDOwglCmm1RmJQeYIz5MIp5AkDrN%2B8xU6Ed7N48Lyk9JPiBeDtbsVbGW2EZ3dDMB947MApi%2FuRlnah4ju0XqbeR7dcwxi%2FEPxr6RKcLiXnwh1JK5I%2F02tD0pPryPQEvUQyNamRcNZRhoyndhWik07rjCYmZf7lHuAqow69nfhS62h%2BFDFehFwcm9IxqkvOCML0I8CDiQ7pj41aq1i%2Bpr5nvecrE542iiPs3JhWsc67Ka8ZvesjbAOz3S8P07LF761capBBNyMXDZj%2F02zmBnHZNtVMP8FVGe%2F8BSaU%2BkldB6ZwnX3PbfrewPAmUfO3LRq%2F0P6oxF5afkXkHTtAbdv8jXFKnkCvqX5FwSf9gTvnFmiFOkMHloxIzTWOeoh%2BP5jGpOJAW07Y7FWNZOOGgPrDE99N2GkJIY%2FVpqc9Y6bCC29i%2BUDP7yzdDkG0hiK2%2FjljveGzrjl2uV%2BZOKP4sU4gEzZ9Ndiug2AFMmA9DOpCAFw9wjRnjnF5qZ7wYFl76N8A8tU6OaLmEppbyguonI3tBb22TFsWoWh575YYCpirvYVu0gaoKPahcaXsEKAUNqhD%2B3kiS2sJZ5b1btFNnfkRx6Kpe%2F9%2FCTDytKHEBjqkAUX%2FmG89zq9Fw0jW4ZQhFehUcwl5C6%2FGfa2UUVJRuFwGd%2FyM%2F5Joq4jln8TtS5wEiVjfPquKQ4t1sRYVkA3kaiwadfoOAnI6BtpnpG%2FTS%2FKVghbHYvpYefoZ4CxwrmAv3t4iwyAbug2L4aCPpmGGEiabNr0sslE9NHmtbXtT0aGifKVwtjMm%2FL%2F%2B11jnMvIAVKLjWJTb3%2BTi2AtwlqfYRSz8tOCb&X-Amz-Signature=50690213677aae84f85f3c0dc3b7787d6f81919db808d0700a5a8503135eb483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6G2YFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCfWwEsFr29Cjp4zQCRp5AHoOZlYk3ZvDQnz5sfGA7cqQIhANCi40u3HTi2GnHQ9Nf8jy52N6WV2KXLhcEkj3Nc%2B071KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeHC%2BTphmTJ8hU1Q0q3ANpPE7TSsq7jGZttGT0cw0Su6%2BSuSvDOwglCmm1RmJQeYIz5MIp5AkDrN%2B8xU6Ed7N48Lyk9JPiBeDtbsVbGW2EZ3dDMB947MApi%2FuRlnah4ju0XqbeR7dcwxi%2FEPxr6RKcLiXnwh1JK5I%2F02tD0pPryPQEvUQyNamRcNZRhoyndhWik07rjCYmZf7lHuAqow69nfhS62h%2BFDFehFwcm9IxqkvOCML0I8CDiQ7pj41aq1i%2Bpr5nvecrE542iiPs3JhWsc67Ka8ZvesjbAOz3S8P07LF761capBBNyMXDZj%2F02zmBnHZNtVMP8FVGe%2F8BSaU%2BkldB6ZwnX3PbfrewPAmUfO3LRq%2F0P6oxF5afkXkHTtAbdv8jXFKnkCvqX5FwSf9gTvnFmiFOkMHloxIzTWOeoh%2BP5jGpOJAW07Y7FWNZOOGgPrDE99N2GkJIY%2FVpqc9Y6bCC29i%2BUDP7yzdDkG0hiK2%2FjljveGzrjl2uV%2BZOKP4sU4gEzZ9Ndiug2AFMmA9DOpCAFw9wjRnjnF5qZ7wYFl76N8A8tU6OaLmEppbyguonI3tBb22TFsWoWh575YYCpirvYVu0gaoKPahcaXsEKAUNqhD%2B3kiS2sJZ5b1btFNnfkRx6Kpe%2F9%2FCTDytKHEBjqkAUX%2FmG89zq9Fw0jW4ZQhFehUcwl5C6%2FGfa2UUVJRuFwGd%2FyM%2F5Joq4jln8TtS5wEiVjfPquKQ4t1sRYVkA3kaiwadfoOAnI6BtpnpG%2FTS%2FKVghbHYvpYefoZ4CxwrmAv3t4iwyAbug2L4aCPpmGGEiabNr0sslE9NHmtbXtT0aGifKVwtjMm%2FL%2F%2B11jnMvIAVKLjWJTb3%2BTi2AtwlqfYRSz8tOCb&X-Amz-Signature=162013681812b3a65e095840edb35faafcda25867a885628d79ce6b9bc1e53c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6G2YFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCfWwEsFr29Cjp4zQCRp5AHoOZlYk3ZvDQnz5sfGA7cqQIhANCi40u3HTi2GnHQ9Nf8jy52N6WV2KXLhcEkj3Nc%2B071KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeHC%2BTphmTJ8hU1Q0q3ANpPE7TSsq7jGZttGT0cw0Su6%2BSuSvDOwglCmm1RmJQeYIz5MIp5AkDrN%2B8xU6Ed7N48Lyk9JPiBeDtbsVbGW2EZ3dDMB947MApi%2FuRlnah4ju0XqbeR7dcwxi%2FEPxr6RKcLiXnwh1JK5I%2F02tD0pPryPQEvUQyNamRcNZRhoyndhWik07rjCYmZf7lHuAqow69nfhS62h%2BFDFehFwcm9IxqkvOCML0I8CDiQ7pj41aq1i%2Bpr5nvecrE542iiPs3JhWsc67Ka8ZvesjbAOz3S8P07LF761capBBNyMXDZj%2F02zmBnHZNtVMP8FVGe%2F8BSaU%2BkldB6ZwnX3PbfrewPAmUfO3LRq%2F0P6oxF5afkXkHTtAbdv8jXFKnkCvqX5FwSf9gTvnFmiFOkMHloxIzTWOeoh%2BP5jGpOJAW07Y7FWNZOOGgPrDE99N2GkJIY%2FVpqc9Y6bCC29i%2BUDP7yzdDkG0hiK2%2FjljveGzrjl2uV%2BZOKP4sU4gEzZ9Ndiug2AFMmA9DOpCAFw9wjRnjnF5qZ7wYFl76N8A8tU6OaLmEppbyguonI3tBb22TFsWoWh575YYCpirvYVu0gaoKPahcaXsEKAUNqhD%2B3kiS2sJZ5b1btFNnfkRx6Kpe%2F9%2FCTDytKHEBjqkAUX%2FmG89zq9Fw0jW4ZQhFehUcwl5C6%2FGfa2UUVJRuFwGd%2FyM%2F5Joq4jln8TtS5wEiVjfPquKQ4t1sRYVkA3kaiwadfoOAnI6BtpnpG%2FTS%2FKVghbHYvpYefoZ4CxwrmAv3t4iwyAbug2L4aCPpmGGEiabNr0sslE9NHmtbXtT0aGifKVwtjMm%2FL%2F%2B11jnMvIAVKLjWJTb3%2BTi2AtwlqfYRSz8tOCb&X-Amz-Signature=9b5a43e2e1ff38289c341a2fe4d865aeee31968e46850890e7161c30ce33ef09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6G2YFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCfWwEsFr29Cjp4zQCRp5AHoOZlYk3ZvDQnz5sfGA7cqQIhANCi40u3HTi2GnHQ9Nf8jy52N6WV2KXLhcEkj3Nc%2B071KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeHC%2BTphmTJ8hU1Q0q3ANpPE7TSsq7jGZttGT0cw0Su6%2BSuSvDOwglCmm1RmJQeYIz5MIp5AkDrN%2B8xU6Ed7N48Lyk9JPiBeDtbsVbGW2EZ3dDMB947MApi%2FuRlnah4ju0XqbeR7dcwxi%2FEPxr6RKcLiXnwh1JK5I%2F02tD0pPryPQEvUQyNamRcNZRhoyndhWik07rjCYmZf7lHuAqow69nfhS62h%2BFDFehFwcm9IxqkvOCML0I8CDiQ7pj41aq1i%2Bpr5nvecrE542iiPs3JhWsc67Ka8ZvesjbAOz3S8P07LF761capBBNyMXDZj%2F02zmBnHZNtVMP8FVGe%2F8BSaU%2BkldB6ZwnX3PbfrewPAmUfO3LRq%2F0P6oxF5afkXkHTtAbdv8jXFKnkCvqX5FwSf9gTvnFmiFOkMHloxIzTWOeoh%2BP5jGpOJAW07Y7FWNZOOGgPrDE99N2GkJIY%2FVpqc9Y6bCC29i%2BUDP7yzdDkG0hiK2%2FjljveGzrjl2uV%2BZOKP4sU4gEzZ9Ndiug2AFMmA9DOpCAFw9wjRnjnF5qZ7wYFl76N8A8tU6OaLmEppbyguonI3tBb22TFsWoWh575YYCpirvYVu0gaoKPahcaXsEKAUNqhD%2B3kiS2sJZ5b1btFNnfkRx6Kpe%2F9%2FCTDytKHEBjqkAUX%2FmG89zq9Fw0jW4ZQhFehUcwl5C6%2FGfa2UUVJRuFwGd%2FyM%2F5Joq4jln8TtS5wEiVjfPquKQ4t1sRYVkA3kaiwadfoOAnI6BtpnpG%2FTS%2FKVghbHYvpYefoZ4CxwrmAv3t4iwyAbug2L4aCPpmGGEiabNr0sslE9NHmtbXtT0aGifKVwtjMm%2FL%2F%2B11jnMvIAVKLjWJTb3%2BTi2AtwlqfYRSz8tOCb&X-Amz-Signature=798df3c88c690929ac43ed7365e2f4b34dac3da0d164d48628832e6b699e893d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6G2YFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCfWwEsFr29Cjp4zQCRp5AHoOZlYk3ZvDQnz5sfGA7cqQIhANCi40u3HTi2GnHQ9Nf8jy52N6WV2KXLhcEkj3Nc%2B071KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeHC%2BTphmTJ8hU1Q0q3ANpPE7TSsq7jGZttGT0cw0Su6%2BSuSvDOwglCmm1RmJQeYIz5MIp5AkDrN%2B8xU6Ed7N48Lyk9JPiBeDtbsVbGW2EZ3dDMB947MApi%2FuRlnah4ju0XqbeR7dcwxi%2FEPxr6RKcLiXnwh1JK5I%2F02tD0pPryPQEvUQyNamRcNZRhoyndhWik07rjCYmZf7lHuAqow69nfhS62h%2BFDFehFwcm9IxqkvOCML0I8CDiQ7pj41aq1i%2Bpr5nvecrE542iiPs3JhWsc67Ka8ZvesjbAOz3S8P07LF761capBBNyMXDZj%2F02zmBnHZNtVMP8FVGe%2F8BSaU%2BkldB6ZwnX3PbfrewPAmUfO3LRq%2F0P6oxF5afkXkHTtAbdv8jXFKnkCvqX5FwSf9gTvnFmiFOkMHloxIzTWOeoh%2BP5jGpOJAW07Y7FWNZOOGgPrDE99N2GkJIY%2FVpqc9Y6bCC29i%2BUDP7yzdDkG0hiK2%2FjljveGzrjl2uV%2BZOKP4sU4gEzZ9Ndiug2AFMmA9DOpCAFw9wjRnjnF5qZ7wYFl76N8A8tU6OaLmEppbyguonI3tBb22TFsWoWh575YYCpirvYVu0gaoKPahcaXsEKAUNqhD%2B3kiS2sJZ5b1btFNnfkRx6Kpe%2F9%2FCTDytKHEBjqkAUX%2FmG89zq9Fw0jW4ZQhFehUcwl5C6%2FGfa2UUVJRuFwGd%2FyM%2F5Joq4jln8TtS5wEiVjfPquKQ4t1sRYVkA3kaiwadfoOAnI6BtpnpG%2FTS%2FKVghbHYvpYefoZ4CxwrmAv3t4iwyAbug2L4aCPpmGGEiabNr0sslE9NHmtbXtT0aGifKVwtjMm%2FL%2F%2B11jnMvIAVKLjWJTb3%2BTi2AtwlqfYRSz8tOCb&X-Amz-Signature=0513fadd2faaf3157a7745b77f08b8503597fd988b5f2fbf97a06cb227b1d2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6G2YFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCfWwEsFr29Cjp4zQCRp5AHoOZlYk3ZvDQnz5sfGA7cqQIhANCi40u3HTi2GnHQ9Nf8jy52N6WV2KXLhcEkj3Nc%2B071KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeHC%2BTphmTJ8hU1Q0q3ANpPE7TSsq7jGZttGT0cw0Su6%2BSuSvDOwglCmm1RmJQeYIz5MIp5AkDrN%2B8xU6Ed7N48Lyk9JPiBeDtbsVbGW2EZ3dDMB947MApi%2FuRlnah4ju0XqbeR7dcwxi%2FEPxr6RKcLiXnwh1JK5I%2F02tD0pPryPQEvUQyNamRcNZRhoyndhWik07rjCYmZf7lHuAqow69nfhS62h%2BFDFehFwcm9IxqkvOCML0I8CDiQ7pj41aq1i%2Bpr5nvecrE542iiPs3JhWsc67Ka8ZvesjbAOz3S8P07LF761capBBNyMXDZj%2F02zmBnHZNtVMP8FVGe%2F8BSaU%2BkldB6ZwnX3PbfrewPAmUfO3LRq%2F0P6oxF5afkXkHTtAbdv8jXFKnkCvqX5FwSf9gTvnFmiFOkMHloxIzTWOeoh%2BP5jGpOJAW07Y7FWNZOOGgPrDE99N2GkJIY%2FVpqc9Y6bCC29i%2BUDP7yzdDkG0hiK2%2FjljveGzrjl2uV%2BZOKP4sU4gEzZ9Ndiug2AFMmA9DOpCAFw9wjRnjnF5qZ7wYFl76N8A8tU6OaLmEppbyguonI3tBb22TFsWoWh575YYCpirvYVu0gaoKPahcaXsEKAUNqhD%2B3kiS2sJZ5b1btFNnfkRx6Kpe%2F9%2FCTDytKHEBjqkAUX%2FmG89zq9Fw0jW4ZQhFehUcwl5C6%2FGfa2UUVJRuFwGd%2FyM%2F5Joq4jln8TtS5wEiVjfPquKQ4t1sRYVkA3kaiwadfoOAnI6BtpnpG%2FTS%2FKVghbHYvpYefoZ4CxwrmAv3t4iwyAbug2L4aCPpmGGEiabNr0sslE9NHmtbXtT0aGifKVwtjMm%2FL%2F%2B11jnMvIAVKLjWJTb3%2BTi2AtwlqfYRSz8tOCb&X-Amz-Signature=187adc295098284d0333a315b3c20dbc7b3f37f8d32a18a68c327b33fd505348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6G2YFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCfWwEsFr29Cjp4zQCRp5AHoOZlYk3ZvDQnz5sfGA7cqQIhANCi40u3HTi2GnHQ9Nf8jy52N6WV2KXLhcEkj3Nc%2B071KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeHC%2BTphmTJ8hU1Q0q3ANpPE7TSsq7jGZttGT0cw0Su6%2BSuSvDOwglCmm1RmJQeYIz5MIp5AkDrN%2B8xU6Ed7N48Lyk9JPiBeDtbsVbGW2EZ3dDMB947MApi%2FuRlnah4ju0XqbeR7dcwxi%2FEPxr6RKcLiXnwh1JK5I%2F02tD0pPryPQEvUQyNamRcNZRhoyndhWik07rjCYmZf7lHuAqow69nfhS62h%2BFDFehFwcm9IxqkvOCML0I8CDiQ7pj41aq1i%2Bpr5nvecrE542iiPs3JhWsc67Ka8ZvesjbAOz3S8P07LF761capBBNyMXDZj%2F02zmBnHZNtVMP8FVGe%2F8BSaU%2BkldB6ZwnX3PbfrewPAmUfO3LRq%2F0P6oxF5afkXkHTtAbdv8jXFKnkCvqX5FwSf9gTvnFmiFOkMHloxIzTWOeoh%2BP5jGpOJAW07Y7FWNZOOGgPrDE99N2GkJIY%2FVpqc9Y6bCC29i%2BUDP7yzdDkG0hiK2%2FjljveGzrjl2uV%2BZOKP4sU4gEzZ9Ndiug2AFMmA9DOpCAFw9wjRnjnF5qZ7wYFl76N8A8tU6OaLmEppbyguonI3tBb22TFsWoWh575YYCpirvYVu0gaoKPahcaXsEKAUNqhD%2B3kiS2sJZ5b1btFNnfkRx6Kpe%2F9%2FCTDytKHEBjqkAUX%2FmG89zq9Fw0jW4ZQhFehUcwl5C6%2FGfa2UUVJRuFwGd%2FyM%2F5Joq4jln8TtS5wEiVjfPquKQ4t1sRYVkA3kaiwadfoOAnI6BtpnpG%2FTS%2FKVghbHYvpYefoZ4CxwrmAv3t4iwyAbug2L4aCPpmGGEiabNr0sslE9NHmtbXtT0aGifKVwtjMm%2FL%2F%2B11jnMvIAVKLjWJTb3%2BTi2AtwlqfYRSz8tOCb&X-Amz-Signature=eaf5865f333bf3a4280c7222e19d64179ab189f3a57fdc172fb35142961f5306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
