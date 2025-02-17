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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7BZG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH6Ky%2FLslvD45Its0ymnbT9hux8BAg5Z1dFLP8odkOSpAiA0EEGV1RAfHmu7z9bLQYDviWjfmoxefHpZ7DA70sPOhyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2ByNIsu6n0d1hL%2FinKtwDAFnz03KgUqVefoFjyq4F331fruvIWIf%2BQ3iyOFj3The%2B8Vr%2BcCoDSCd0Js8mysf74kUe0hHkygMg2G7kp7QA%2B33s1BQ9wB2Apmqkhb9u6mFuyu7AjmasDgSe3V6pvupgQDkRtC9Tgc08ztL2av7zQWb7PX92UBEd%2FdAfns8tJHIM391DYCYsQdEbQUB7KWN8cXTkdEE30SxbySgKRPSFQMqww4LgAuRjeuAMJY3nNZWsvw1v4sru0pWl8Jq12BATbhwGlelfGMeZY62PN6VzF5EgAVlgMC%2BZGVriughZVqa9xdKPZYupoOKj1l7Q6dEuIlQzzof8Gtrdit19SeoRaXMw8fcTERhXNQAAm1JRi9F1YGUXOfZpqqYc3viE3igFqah%2BEGlaIKn8qVEo3irSrcYVcH1Cgid%2FM6RrmthmhQE%2FTd%2FWG1xpVnBx2tNWO0DP91sR08fw98Dil%2FAkSSPtRhWm6vceUv8BQs32IcMysIQE2WvR%2FSOpPRpyQyDPvTuNIOprvnLzV5X6Yxoo78ktmzifGY9jeNhbnHnEBb1y3X6r%2Bjd1KCWU6SLPpSAapwcNgIeZau60hvfI9Y3AhZLzSm498ayVoWDEQL%2FRfmlPy%2BZqNT4OwYu7qWzGPMEwr%2BvOvQY6pgHUYEBKCUI1g8v%2FiR4AxuWIIY8KGFh3XF%2BypE94oM0c0xPEJYqE%2BxatGHWzwphiUxW4KW9phvfVFLAVLyZsVe0VfuixofOOYdjSQrOPhhC1%2ByHb6spUaN6sHis9UrWgo7RRnpL7%2FT8pqEyuWdqV3q8oyPRHTI%2BZTSTnPNPE3QCKEMHlYbX56FZ3FVzZfH4zkwBygXPAApLlizm3pIVgBhvUbs2v8jWk&X-Amz-Signature=de54f6fbcf6f863617f665a4d36e0f28875c912eae22553422daebb6ba3d92bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7BZG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH6Ky%2FLslvD45Its0ymnbT9hux8BAg5Z1dFLP8odkOSpAiA0EEGV1RAfHmu7z9bLQYDviWjfmoxefHpZ7DA70sPOhyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2ByNIsu6n0d1hL%2FinKtwDAFnz03KgUqVefoFjyq4F331fruvIWIf%2BQ3iyOFj3The%2B8Vr%2BcCoDSCd0Js8mysf74kUe0hHkygMg2G7kp7QA%2B33s1BQ9wB2Apmqkhb9u6mFuyu7AjmasDgSe3V6pvupgQDkRtC9Tgc08ztL2av7zQWb7PX92UBEd%2FdAfns8tJHIM391DYCYsQdEbQUB7KWN8cXTkdEE30SxbySgKRPSFQMqww4LgAuRjeuAMJY3nNZWsvw1v4sru0pWl8Jq12BATbhwGlelfGMeZY62PN6VzF5EgAVlgMC%2BZGVriughZVqa9xdKPZYupoOKj1l7Q6dEuIlQzzof8Gtrdit19SeoRaXMw8fcTERhXNQAAm1JRi9F1YGUXOfZpqqYc3viE3igFqah%2BEGlaIKn8qVEo3irSrcYVcH1Cgid%2FM6RrmthmhQE%2FTd%2FWG1xpVnBx2tNWO0DP91sR08fw98Dil%2FAkSSPtRhWm6vceUv8BQs32IcMysIQE2WvR%2FSOpPRpyQyDPvTuNIOprvnLzV5X6Yxoo78ktmzifGY9jeNhbnHnEBb1y3X6r%2Bjd1KCWU6SLPpSAapwcNgIeZau60hvfI9Y3AhZLzSm498ayVoWDEQL%2FRfmlPy%2BZqNT4OwYu7qWzGPMEwr%2BvOvQY6pgHUYEBKCUI1g8v%2FiR4AxuWIIY8KGFh3XF%2BypE94oM0c0xPEJYqE%2BxatGHWzwphiUxW4KW9phvfVFLAVLyZsVe0VfuixofOOYdjSQrOPhhC1%2ByHb6spUaN6sHis9UrWgo7RRnpL7%2FT8pqEyuWdqV3q8oyPRHTI%2BZTSTnPNPE3QCKEMHlYbX56FZ3FVzZfH4zkwBygXPAApLlizm3pIVgBhvUbs2v8jWk&X-Amz-Signature=ede33cf39f788f53526d1d4709340812eae6ff3a9aee842a4b186d07d59fc66c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7BZG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH6Ky%2FLslvD45Its0ymnbT9hux8BAg5Z1dFLP8odkOSpAiA0EEGV1RAfHmu7z9bLQYDviWjfmoxefHpZ7DA70sPOhyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2ByNIsu6n0d1hL%2FinKtwDAFnz03KgUqVefoFjyq4F331fruvIWIf%2BQ3iyOFj3The%2B8Vr%2BcCoDSCd0Js8mysf74kUe0hHkygMg2G7kp7QA%2B33s1BQ9wB2Apmqkhb9u6mFuyu7AjmasDgSe3V6pvupgQDkRtC9Tgc08ztL2av7zQWb7PX92UBEd%2FdAfns8tJHIM391DYCYsQdEbQUB7KWN8cXTkdEE30SxbySgKRPSFQMqww4LgAuRjeuAMJY3nNZWsvw1v4sru0pWl8Jq12BATbhwGlelfGMeZY62PN6VzF5EgAVlgMC%2BZGVriughZVqa9xdKPZYupoOKj1l7Q6dEuIlQzzof8Gtrdit19SeoRaXMw8fcTERhXNQAAm1JRi9F1YGUXOfZpqqYc3viE3igFqah%2BEGlaIKn8qVEo3irSrcYVcH1Cgid%2FM6RrmthmhQE%2FTd%2FWG1xpVnBx2tNWO0DP91sR08fw98Dil%2FAkSSPtRhWm6vceUv8BQs32IcMysIQE2WvR%2FSOpPRpyQyDPvTuNIOprvnLzV5X6Yxoo78ktmzifGY9jeNhbnHnEBb1y3X6r%2Bjd1KCWU6SLPpSAapwcNgIeZau60hvfI9Y3AhZLzSm498ayVoWDEQL%2FRfmlPy%2BZqNT4OwYu7qWzGPMEwr%2BvOvQY6pgHUYEBKCUI1g8v%2FiR4AxuWIIY8KGFh3XF%2BypE94oM0c0xPEJYqE%2BxatGHWzwphiUxW4KW9phvfVFLAVLyZsVe0VfuixofOOYdjSQrOPhhC1%2ByHb6spUaN6sHis9UrWgo7RRnpL7%2FT8pqEyuWdqV3q8oyPRHTI%2BZTSTnPNPE3QCKEMHlYbX56FZ3FVzZfH4zkwBygXPAApLlizm3pIVgBhvUbs2v8jWk&X-Amz-Signature=3dd9a97b3ca03d3ba581b6ff3d4ed5caea87710f8ec0a06e04121d1eeebc2e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7BZG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH6Ky%2FLslvD45Its0ymnbT9hux8BAg5Z1dFLP8odkOSpAiA0EEGV1RAfHmu7z9bLQYDviWjfmoxefHpZ7DA70sPOhyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2ByNIsu6n0d1hL%2FinKtwDAFnz03KgUqVefoFjyq4F331fruvIWIf%2BQ3iyOFj3The%2B8Vr%2BcCoDSCd0Js8mysf74kUe0hHkygMg2G7kp7QA%2B33s1BQ9wB2Apmqkhb9u6mFuyu7AjmasDgSe3V6pvupgQDkRtC9Tgc08ztL2av7zQWb7PX92UBEd%2FdAfns8tJHIM391DYCYsQdEbQUB7KWN8cXTkdEE30SxbySgKRPSFQMqww4LgAuRjeuAMJY3nNZWsvw1v4sru0pWl8Jq12BATbhwGlelfGMeZY62PN6VzF5EgAVlgMC%2BZGVriughZVqa9xdKPZYupoOKj1l7Q6dEuIlQzzof8Gtrdit19SeoRaXMw8fcTERhXNQAAm1JRi9F1YGUXOfZpqqYc3viE3igFqah%2BEGlaIKn8qVEo3irSrcYVcH1Cgid%2FM6RrmthmhQE%2FTd%2FWG1xpVnBx2tNWO0DP91sR08fw98Dil%2FAkSSPtRhWm6vceUv8BQs32IcMysIQE2WvR%2FSOpPRpyQyDPvTuNIOprvnLzV5X6Yxoo78ktmzifGY9jeNhbnHnEBb1y3X6r%2Bjd1KCWU6SLPpSAapwcNgIeZau60hvfI9Y3AhZLzSm498ayVoWDEQL%2FRfmlPy%2BZqNT4OwYu7qWzGPMEwr%2BvOvQY6pgHUYEBKCUI1g8v%2FiR4AxuWIIY8KGFh3XF%2BypE94oM0c0xPEJYqE%2BxatGHWzwphiUxW4KW9phvfVFLAVLyZsVe0VfuixofOOYdjSQrOPhhC1%2ByHb6spUaN6sHis9UrWgo7RRnpL7%2FT8pqEyuWdqV3q8oyPRHTI%2BZTSTnPNPE3QCKEMHlYbX56FZ3FVzZfH4zkwBygXPAApLlizm3pIVgBhvUbs2v8jWk&X-Amz-Signature=8d84f78b0ee054d6eb5a293e450a13c68ee7631d12838b6b3c0e6438fb19e43e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7BZG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH6Ky%2FLslvD45Its0ymnbT9hux8BAg5Z1dFLP8odkOSpAiA0EEGV1RAfHmu7z9bLQYDviWjfmoxefHpZ7DA70sPOhyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2ByNIsu6n0d1hL%2FinKtwDAFnz03KgUqVefoFjyq4F331fruvIWIf%2BQ3iyOFj3The%2B8Vr%2BcCoDSCd0Js8mysf74kUe0hHkygMg2G7kp7QA%2B33s1BQ9wB2Apmqkhb9u6mFuyu7AjmasDgSe3V6pvupgQDkRtC9Tgc08ztL2av7zQWb7PX92UBEd%2FdAfns8tJHIM391DYCYsQdEbQUB7KWN8cXTkdEE30SxbySgKRPSFQMqww4LgAuRjeuAMJY3nNZWsvw1v4sru0pWl8Jq12BATbhwGlelfGMeZY62PN6VzF5EgAVlgMC%2BZGVriughZVqa9xdKPZYupoOKj1l7Q6dEuIlQzzof8Gtrdit19SeoRaXMw8fcTERhXNQAAm1JRi9F1YGUXOfZpqqYc3viE3igFqah%2BEGlaIKn8qVEo3irSrcYVcH1Cgid%2FM6RrmthmhQE%2FTd%2FWG1xpVnBx2tNWO0DP91sR08fw98Dil%2FAkSSPtRhWm6vceUv8BQs32IcMysIQE2WvR%2FSOpPRpyQyDPvTuNIOprvnLzV5X6Yxoo78ktmzifGY9jeNhbnHnEBb1y3X6r%2Bjd1KCWU6SLPpSAapwcNgIeZau60hvfI9Y3AhZLzSm498ayVoWDEQL%2FRfmlPy%2BZqNT4OwYu7qWzGPMEwr%2BvOvQY6pgHUYEBKCUI1g8v%2FiR4AxuWIIY8KGFh3XF%2BypE94oM0c0xPEJYqE%2BxatGHWzwphiUxW4KW9phvfVFLAVLyZsVe0VfuixofOOYdjSQrOPhhC1%2ByHb6spUaN6sHis9UrWgo7RRnpL7%2FT8pqEyuWdqV3q8oyPRHTI%2BZTSTnPNPE3QCKEMHlYbX56FZ3FVzZfH4zkwBygXPAApLlizm3pIVgBhvUbs2v8jWk&X-Amz-Signature=61e8ef042435d47e2856a16c96be1ee6732571f8e9801b2df81174c23a3425fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7BZG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH6Ky%2FLslvD45Its0ymnbT9hux8BAg5Z1dFLP8odkOSpAiA0EEGV1RAfHmu7z9bLQYDviWjfmoxefHpZ7DA70sPOhyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2ByNIsu6n0d1hL%2FinKtwDAFnz03KgUqVefoFjyq4F331fruvIWIf%2BQ3iyOFj3The%2B8Vr%2BcCoDSCd0Js8mysf74kUe0hHkygMg2G7kp7QA%2B33s1BQ9wB2Apmqkhb9u6mFuyu7AjmasDgSe3V6pvupgQDkRtC9Tgc08ztL2av7zQWb7PX92UBEd%2FdAfns8tJHIM391DYCYsQdEbQUB7KWN8cXTkdEE30SxbySgKRPSFQMqww4LgAuRjeuAMJY3nNZWsvw1v4sru0pWl8Jq12BATbhwGlelfGMeZY62PN6VzF5EgAVlgMC%2BZGVriughZVqa9xdKPZYupoOKj1l7Q6dEuIlQzzof8Gtrdit19SeoRaXMw8fcTERhXNQAAm1JRi9F1YGUXOfZpqqYc3viE3igFqah%2BEGlaIKn8qVEo3irSrcYVcH1Cgid%2FM6RrmthmhQE%2FTd%2FWG1xpVnBx2tNWO0DP91sR08fw98Dil%2FAkSSPtRhWm6vceUv8BQs32IcMysIQE2WvR%2FSOpPRpyQyDPvTuNIOprvnLzV5X6Yxoo78ktmzifGY9jeNhbnHnEBb1y3X6r%2Bjd1KCWU6SLPpSAapwcNgIeZau60hvfI9Y3AhZLzSm498ayVoWDEQL%2FRfmlPy%2BZqNT4OwYu7qWzGPMEwr%2BvOvQY6pgHUYEBKCUI1g8v%2FiR4AxuWIIY8KGFh3XF%2BypE94oM0c0xPEJYqE%2BxatGHWzwphiUxW4KW9phvfVFLAVLyZsVe0VfuixofOOYdjSQrOPhhC1%2ByHb6spUaN6sHis9UrWgo7RRnpL7%2FT8pqEyuWdqV3q8oyPRHTI%2BZTSTnPNPE3QCKEMHlYbX56FZ3FVzZfH4zkwBygXPAApLlizm3pIVgBhvUbs2v8jWk&X-Amz-Signature=e44454a57ea5a5523a65037d4a987dd7a308987aaf216be70be83bdebd096cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIA7BZG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH6Ky%2FLslvD45Its0ymnbT9hux8BAg5Z1dFLP8odkOSpAiA0EEGV1RAfHmu7z9bLQYDviWjfmoxefHpZ7DA70sPOhyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2ByNIsu6n0d1hL%2FinKtwDAFnz03KgUqVefoFjyq4F331fruvIWIf%2BQ3iyOFj3The%2B8Vr%2BcCoDSCd0Js8mysf74kUe0hHkygMg2G7kp7QA%2B33s1BQ9wB2Apmqkhb9u6mFuyu7AjmasDgSe3V6pvupgQDkRtC9Tgc08ztL2av7zQWb7PX92UBEd%2FdAfns8tJHIM391DYCYsQdEbQUB7KWN8cXTkdEE30SxbySgKRPSFQMqww4LgAuRjeuAMJY3nNZWsvw1v4sru0pWl8Jq12BATbhwGlelfGMeZY62PN6VzF5EgAVlgMC%2BZGVriughZVqa9xdKPZYupoOKj1l7Q6dEuIlQzzof8Gtrdit19SeoRaXMw8fcTERhXNQAAm1JRi9F1YGUXOfZpqqYc3viE3igFqah%2BEGlaIKn8qVEo3irSrcYVcH1Cgid%2FM6RrmthmhQE%2FTd%2FWG1xpVnBx2tNWO0DP91sR08fw98Dil%2FAkSSPtRhWm6vceUv8BQs32IcMysIQE2WvR%2FSOpPRpyQyDPvTuNIOprvnLzV5X6Yxoo78ktmzifGY9jeNhbnHnEBb1y3X6r%2Bjd1KCWU6SLPpSAapwcNgIeZau60hvfI9Y3AhZLzSm498ayVoWDEQL%2FRfmlPy%2BZqNT4OwYu7qWzGPMEwr%2BvOvQY6pgHUYEBKCUI1g8v%2FiR4AxuWIIY8KGFh3XF%2BypE94oM0c0xPEJYqE%2BxatGHWzwphiUxW4KW9phvfVFLAVLyZsVe0VfuixofOOYdjSQrOPhhC1%2ByHb6spUaN6sHis9UrWgo7RRnpL7%2FT8pqEyuWdqV3q8oyPRHTI%2BZTSTnPNPE3QCKEMHlYbX56FZ3FVzZfH4zkwBygXPAApLlizm3pIVgBhvUbs2v8jWk&X-Amz-Signature=55f9ac453fc85d6b32392b2fedf55c334c44f7ed4176d1b092c1679cb4db102b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
