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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PFTFVT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuJbubm%2FYWcVcIbnkfcCCNVHaHtnFcYHKJVprsR5BMSAiBduZ6hz8TIJBGYz6iATTEsPeIJdXzXCNrbBEEnH5Cr7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMBphMRzga9YW%2BMsOFKtwD6QKg%2BD87eZbTzedeoxy2ZvmES52tfTsfbq09fYrX4WcJr8egr34e%2FjDt2D%2FtkT6WzqPs%2B2i3NMQWZ9dLvdbw0X%2FjQZESOIUSrVV0UTi5Shud4xpFxji3CBix7%2BB2dQYC9zmyPhiZcKY7%2BIJ5A7NfDTi6gnd58ZjQ%2FJOwuCabOeFeDDaODqx%2BzmOiEQqZL2AHS2Koe7Nhk%2BqB0Sp5meh9s5fKxoYnHi4p01r1m1kLQqboJrr4AenWtVJa2xgOobOMZGzXN3ASPU%2BDxaOUlIHuSYihMetqzw7q%2FUmWGNFzXIWIa7%2BYnHcp0BK9Cr0bZBvQ4jL9UTNthtDpcVHCvAyY7t3hkBf%2BkUVnfX8lh211VZKSEHF9%2FWWkdTKdoGHzBDFchGJq1IByMxMl0NsFp7a9QGdmcEjzzJpCrX8Eri7NxQ80DHyGl87VDduKX%2B38oRQ1yq8obbp%2BqFbKo7VU%2BfAG%2Fa53V3hsG0a%2BKQyklivunWcjj1eSQoMd%2Bk%2Fc0TYQzkOCDJ%2BmbM%2BzcKS7J37J4G0v51Gzhu3obSzdE5MQyVAGKb9Ez45vk2wgp9UUyY6LPv7TeOz%2Bqc%2FfBERdrPZVlXuYQ5MlkvWhXYQgbLjqrehbreEE1feFFl5%2BkojYkgMw8%2FDdvgY6pgEcwCrken6N1FIwozjQW1yVVf6NcSmL3aQLrb2ykZQH0AtBM1apwvRX4TSug%2BbcwcjlL7sgb2mTb9g8O%2F49tWMmFVFJcdoa%2FqL7C%2BGZipMAIS43mik5QtK1CxkXE%2F17kUQLSVX6MOARiLEvV69%2FduYriQuZfNl2DnngTVhPWm04jh63iZJt4aTlItqN5TDMXhsO2ZES8Zv8rbjdKsDJnbwpw49LBJnQ&X-Amz-Signature=c22e6803567ede2df1beced7c2f7f21a41db37285865401a1e190d24381d48cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PFTFVT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuJbubm%2FYWcVcIbnkfcCCNVHaHtnFcYHKJVprsR5BMSAiBduZ6hz8TIJBGYz6iATTEsPeIJdXzXCNrbBEEnH5Cr7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMBphMRzga9YW%2BMsOFKtwD6QKg%2BD87eZbTzedeoxy2ZvmES52tfTsfbq09fYrX4WcJr8egr34e%2FjDt2D%2FtkT6WzqPs%2B2i3NMQWZ9dLvdbw0X%2FjQZESOIUSrVV0UTi5Shud4xpFxji3CBix7%2BB2dQYC9zmyPhiZcKY7%2BIJ5A7NfDTi6gnd58ZjQ%2FJOwuCabOeFeDDaODqx%2BzmOiEQqZL2AHS2Koe7Nhk%2BqB0Sp5meh9s5fKxoYnHi4p01r1m1kLQqboJrr4AenWtVJa2xgOobOMZGzXN3ASPU%2BDxaOUlIHuSYihMetqzw7q%2FUmWGNFzXIWIa7%2BYnHcp0BK9Cr0bZBvQ4jL9UTNthtDpcVHCvAyY7t3hkBf%2BkUVnfX8lh211VZKSEHF9%2FWWkdTKdoGHzBDFchGJq1IByMxMl0NsFp7a9QGdmcEjzzJpCrX8Eri7NxQ80DHyGl87VDduKX%2B38oRQ1yq8obbp%2BqFbKo7VU%2BfAG%2Fa53V3hsG0a%2BKQyklivunWcjj1eSQoMd%2Bk%2Fc0TYQzkOCDJ%2BmbM%2BzcKS7J37J4G0v51Gzhu3obSzdE5MQyVAGKb9Ez45vk2wgp9UUyY6LPv7TeOz%2Bqc%2FfBERdrPZVlXuYQ5MlkvWhXYQgbLjqrehbreEE1feFFl5%2BkojYkgMw8%2FDdvgY6pgEcwCrken6N1FIwozjQW1yVVf6NcSmL3aQLrb2ykZQH0AtBM1apwvRX4TSug%2BbcwcjlL7sgb2mTb9g8O%2F49tWMmFVFJcdoa%2FqL7C%2BGZipMAIS43mik5QtK1CxkXE%2F17kUQLSVX6MOARiLEvV69%2FduYriQuZfNl2DnngTVhPWm04jh63iZJt4aTlItqN5TDMXhsO2ZES8Zv8rbjdKsDJnbwpw49LBJnQ&X-Amz-Signature=adac97334ea900beeaf107a887e5752e95a8ce555f06eb3c7f13e64567b814cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PFTFVT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuJbubm%2FYWcVcIbnkfcCCNVHaHtnFcYHKJVprsR5BMSAiBduZ6hz8TIJBGYz6iATTEsPeIJdXzXCNrbBEEnH5Cr7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMBphMRzga9YW%2BMsOFKtwD6QKg%2BD87eZbTzedeoxy2ZvmES52tfTsfbq09fYrX4WcJr8egr34e%2FjDt2D%2FtkT6WzqPs%2B2i3NMQWZ9dLvdbw0X%2FjQZESOIUSrVV0UTi5Shud4xpFxji3CBix7%2BB2dQYC9zmyPhiZcKY7%2BIJ5A7NfDTi6gnd58ZjQ%2FJOwuCabOeFeDDaODqx%2BzmOiEQqZL2AHS2Koe7Nhk%2BqB0Sp5meh9s5fKxoYnHi4p01r1m1kLQqboJrr4AenWtVJa2xgOobOMZGzXN3ASPU%2BDxaOUlIHuSYihMetqzw7q%2FUmWGNFzXIWIa7%2BYnHcp0BK9Cr0bZBvQ4jL9UTNthtDpcVHCvAyY7t3hkBf%2BkUVnfX8lh211VZKSEHF9%2FWWkdTKdoGHzBDFchGJq1IByMxMl0NsFp7a9QGdmcEjzzJpCrX8Eri7NxQ80DHyGl87VDduKX%2B38oRQ1yq8obbp%2BqFbKo7VU%2BfAG%2Fa53V3hsG0a%2BKQyklivunWcjj1eSQoMd%2Bk%2Fc0TYQzkOCDJ%2BmbM%2BzcKS7J37J4G0v51Gzhu3obSzdE5MQyVAGKb9Ez45vk2wgp9UUyY6LPv7TeOz%2Bqc%2FfBERdrPZVlXuYQ5MlkvWhXYQgbLjqrehbreEE1feFFl5%2BkojYkgMw8%2FDdvgY6pgEcwCrken6N1FIwozjQW1yVVf6NcSmL3aQLrb2ykZQH0AtBM1apwvRX4TSug%2BbcwcjlL7sgb2mTb9g8O%2F49tWMmFVFJcdoa%2FqL7C%2BGZipMAIS43mik5QtK1CxkXE%2F17kUQLSVX6MOARiLEvV69%2FduYriQuZfNl2DnngTVhPWm04jh63iZJt4aTlItqN5TDMXhsO2ZES8Zv8rbjdKsDJnbwpw49LBJnQ&X-Amz-Signature=bcc94555bbb1b4ec16d1c501f43ffa4e1760770604fa70e07c2deca043b88f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PFTFVT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuJbubm%2FYWcVcIbnkfcCCNVHaHtnFcYHKJVprsR5BMSAiBduZ6hz8TIJBGYz6iATTEsPeIJdXzXCNrbBEEnH5Cr7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMBphMRzga9YW%2BMsOFKtwD6QKg%2BD87eZbTzedeoxy2ZvmES52tfTsfbq09fYrX4WcJr8egr34e%2FjDt2D%2FtkT6WzqPs%2B2i3NMQWZ9dLvdbw0X%2FjQZESOIUSrVV0UTi5Shud4xpFxji3CBix7%2BB2dQYC9zmyPhiZcKY7%2BIJ5A7NfDTi6gnd58ZjQ%2FJOwuCabOeFeDDaODqx%2BzmOiEQqZL2AHS2Koe7Nhk%2BqB0Sp5meh9s5fKxoYnHi4p01r1m1kLQqboJrr4AenWtVJa2xgOobOMZGzXN3ASPU%2BDxaOUlIHuSYihMetqzw7q%2FUmWGNFzXIWIa7%2BYnHcp0BK9Cr0bZBvQ4jL9UTNthtDpcVHCvAyY7t3hkBf%2BkUVnfX8lh211VZKSEHF9%2FWWkdTKdoGHzBDFchGJq1IByMxMl0NsFp7a9QGdmcEjzzJpCrX8Eri7NxQ80DHyGl87VDduKX%2B38oRQ1yq8obbp%2BqFbKo7VU%2BfAG%2Fa53V3hsG0a%2BKQyklivunWcjj1eSQoMd%2Bk%2Fc0TYQzkOCDJ%2BmbM%2BzcKS7J37J4G0v51Gzhu3obSzdE5MQyVAGKb9Ez45vk2wgp9UUyY6LPv7TeOz%2Bqc%2FfBERdrPZVlXuYQ5MlkvWhXYQgbLjqrehbreEE1feFFl5%2BkojYkgMw8%2FDdvgY6pgEcwCrken6N1FIwozjQW1yVVf6NcSmL3aQLrb2ykZQH0AtBM1apwvRX4TSug%2BbcwcjlL7sgb2mTb9g8O%2F49tWMmFVFJcdoa%2FqL7C%2BGZipMAIS43mik5QtK1CxkXE%2F17kUQLSVX6MOARiLEvV69%2FduYriQuZfNl2DnngTVhPWm04jh63iZJt4aTlItqN5TDMXhsO2ZES8Zv8rbjdKsDJnbwpw49LBJnQ&X-Amz-Signature=72649c3256dd814b93cd031c55a595f8eb3d1b2f4680edb4e4f1c91f5ed9dcf0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PFTFVT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuJbubm%2FYWcVcIbnkfcCCNVHaHtnFcYHKJVprsR5BMSAiBduZ6hz8TIJBGYz6iATTEsPeIJdXzXCNrbBEEnH5Cr7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMBphMRzga9YW%2BMsOFKtwD6QKg%2BD87eZbTzedeoxy2ZvmES52tfTsfbq09fYrX4WcJr8egr34e%2FjDt2D%2FtkT6WzqPs%2B2i3NMQWZ9dLvdbw0X%2FjQZESOIUSrVV0UTi5Shud4xpFxji3CBix7%2BB2dQYC9zmyPhiZcKY7%2BIJ5A7NfDTi6gnd58ZjQ%2FJOwuCabOeFeDDaODqx%2BzmOiEQqZL2AHS2Koe7Nhk%2BqB0Sp5meh9s5fKxoYnHi4p01r1m1kLQqboJrr4AenWtVJa2xgOobOMZGzXN3ASPU%2BDxaOUlIHuSYihMetqzw7q%2FUmWGNFzXIWIa7%2BYnHcp0BK9Cr0bZBvQ4jL9UTNthtDpcVHCvAyY7t3hkBf%2BkUVnfX8lh211VZKSEHF9%2FWWkdTKdoGHzBDFchGJq1IByMxMl0NsFp7a9QGdmcEjzzJpCrX8Eri7NxQ80DHyGl87VDduKX%2B38oRQ1yq8obbp%2BqFbKo7VU%2BfAG%2Fa53V3hsG0a%2BKQyklivunWcjj1eSQoMd%2Bk%2Fc0TYQzkOCDJ%2BmbM%2BzcKS7J37J4G0v51Gzhu3obSzdE5MQyVAGKb9Ez45vk2wgp9UUyY6LPv7TeOz%2Bqc%2FfBERdrPZVlXuYQ5MlkvWhXYQgbLjqrehbreEE1feFFl5%2BkojYkgMw8%2FDdvgY6pgEcwCrken6N1FIwozjQW1yVVf6NcSmL3aQLrb2ykZQH0AtBM1apwvRX4TSug%2BbcwcjlL7sgb2mTb9g8O%2F49tWMmFVFJcdoa%2FqL7C%2BGZipMAIS43mik5QtK1CxkXE%2F17kUQLSVX6MOARiLEvV69%2FduYriQuZfNl2DnngTVhPWm04jh63iZJt4aTlItqN5TDMXhsO2ZES8Zv8rbjdKsDJnbwpw49LBJnQ&X-Amz-Signature=037ed397a3d5b67d77ed858d4d17e908e4633be678ae27a2046b613954ffe408&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PFTFVT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuJbubm%2FYWcVcIbnkfcCCNVHaHtnFcYHKJVprsR5BMSAiBduZ6hz8TIJBGYz6iATTEsPeIJdXzXCNrbBEEnH5Cr7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMBphMRzga9YW%2BMsOFKtwD6QKg%2BD87eZbTzedeoxy2ZvmES52tfTsfbq09fYrX4WcJr8egr34e%2FjDt2D%2FtkT6WzqPs%2B2i3NMQWZ9dLvdbw0X%2FjQZESOIUSrVV0UTi5Shud4xpFxji3CBix7%2BB2dQYC9zmyPhiZcKY7%2BIJ5A7NfDTi6gnd58ZjQ%2FJOwuCabOeFeDDaODqx%2BzmOiEQqZL2AHS2Koe7Nhk%2BqB0Sp5meh9s5fKxoYnHi4p01r1m1kLQqboJrr4AenWtVJa2xgOobOMZGzXN3ASPU%2BDxaOUlIHuSYihMetqzw7q%2FUmWGNFzXIWIa7%2BYnHcp0BK9Cr0bZBvQ4jL9UTNthtDpcVHCvAyY7t3hkBf%2BkUVnfX8lh211VZKSEHF9%2FWWkdTKdoGHzBDFchGJq1IByMxMl0NsFp7a9QGdmcEjzzJpCrX8Eri7NxQ80DHyGl87VDduKX%2B38oRQ1yq8obbp%2BqFbKo7VU%2BfAG%2Fa53V3hsG0a%2BKQyklivunWcjj1eSQoMd%2Bk%2Fc0TYQzkOCDJ%2BmbM%2BzcKS7J37J4G0v51Gzhu3obSzdE5MQyVAGKb9Ez45vk2wgp9UUyY6LPv7TeOz%2Bqc%2FfBERdrPZVlXuYQ5MlkvWhXYQgbLjqrehbreEE1feFFl5%2BkojYkgMw8%2FDdvgY6pgEcwCrken6N1FIwozjQW1yVVf6NcSmL3aQLrb2ykZQH0AtBM1apwvRX4TSug%2BbcwcjlL7sgb2mTb9g8O%2F49tWMmFVFJcdoa%2FqL7C%2BGZipMAIS43mik5QtK1CxkXE%2F17kUQLSVX6MOARiLEvV69%2FduYriQuZfNl2DnngTVhPWm04jh63iZJt4aTlItqN5TDMXhsO2ZES8Zv8rbjdKsDJnbwpw49LBJnQ&X-Amz-Signature=f5fa5637055a2e94540971768c88a3430c234874d9d57e23f8d0dcfc24c0db95&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PFTFVT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuJbubm%2FYWcVcIbnkfcCCNVHaHtnFcYHKJVprsR5BMSAiBduZ6hz8TIJBGYz6iATTEsPeIJdXzXCNrbBEEnH5Cr7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMBphMRzga9YW%2BMsOFKtwD6QKg%2BD87eZbTzedeoxy2ZvmES52tfTsfbq09fYrX4WcJr8egr34e%2FjDt2D%2FtkT6WzqPs%2B2i3NMQWZ9dLvdbw0X%2FjQZESOIUSrVV0UTi5Shud4xpFxji3CBix7%2BB2dQYC9zmyPhiZcKY7%2BIJ5A7NfDTi6gnd58ZjQ%2FJOwuCabOeFeDDaODqx%2BzmOiEQqZL2AHS2Koe7Nhk%2BqB0Sp5meh9s5fKxoYnHi4p01r1m1kLQqboJrr4AenWtVJa2xgOobOMZGzXN3ASPU%2BDxaOUlIHuSYihMetqzw7q%2FUmWGNFzXIWIa7%2BYnHcp0BK9Cr0bZBvQ4jL9UTNthtDpcVHCvAyY7t3hkBf%2BkUVnfX8lh211VZKSEHF9%2FWWkdTKdoGHzBDFchGJq1IByMxMl0NsFp7a9QGdmcEjzzJpCrX8Eri7NxQ80DHyGl87VDduKX%2B38oRQ1yq8obbp%2BqFbKo7VU%2BfAG%2Fa53V3hsG0a%2BKQyklivunWcjj1eSQoMd%2Bk%2Fc0TYQzkOCDJ%2BmbM%2BzcKS7J37J4G0v51Gzhu3obSzdE5MQyVAGKb9Ez45vk2wgp9UUyY6LPv7TeOz%2Bqc%2FfBERdrPZVlXuYQ5MlkvWhXYQgbLjqrehbreEE1feFFl5%2BkojYkgMw8%2FDdvgY6pgEcwCrken6N1FIwozjQW1yVVf6NcSmL3aQLrb2ykZQH0AtBM1apwvRX4TSug%2BbcwcjlL7sgb2mTb9g8O%2F49tWMmFVFJcdoa%2FqL7C%2BGZipMAIS43mik5QtK1CxkXE%2F17kUQLSVX6MOARiLEvV69%2FduYriQuZfNl2DnngTVhPWm04jh63iZJt4aTlItqN5TDMXhsO2ZES8Zv8rbjdKsDJnbwpw49LBJnQ&X-Amz-Signature=fca0ca71356534f42b5902a53dc833387428c313b25631027b7d67046662139d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
