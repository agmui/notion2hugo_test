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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP36P7CZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCydnM79tqrZ9DV4lXW5eQg7Aoil1WNsH6BSb0Ir1zlUwIhANBEbsN9DNd%2BjNGNCnu%2Fgg2WzUJ9vSx2Ag7nEo5q70WhKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAB8SfZOTrDuCLkMq3AP3wlXd1rMcAtVZPcQdQcQs6LslwwLr2a16SsRMmm%2ByyjvNMPXzoSnR9Hxi3LLRpbvYpv5v2eOBy9jXcToslGFuauNAZxdS5KsDE03rsg7zKqRYnWnrq%2FiM4Bx%2Fy5B7DJxHjLm15IC6%2FJVSDDT2xyCPiIuEhX%2BCgNJRa8icDuMmBFwGbVWRxy8GZ9HpTPu6Nh0onr5IgYYRswAzvtEHE55kQcuVyOwvAnN8fX3GRCT4eenh3SXlfk16rxJVohPwb1MhJZ%2Fmb4RPkhnGZ0hmZLQv4bTO%2Bbs8J1MMB4dP%2F%2FN2CwbhV%2BnM10dqFXPmteA9McEPXGCjSs%2Fs8pQM73FQ6Zw8rzNczlITAkeGgqIAmObHWVwtiSi2KEL0tJ%2F5Yk0MWV%2B6GHhwJgcyH9tOApI68wRdSZSCPRMrSjO%2F30tNJj9sMduuNUfezs3PT%2B5IM9fI%2F8%2FwDhXvSmEmNdIEPHKHzzMm5VOA3ILR1VyLVspTINiAVZYHIdL6DYDrPsY6xhYM1gr4Wfa%2FQsBhfgE6NNihSpBOLLPl%2FlaGic7S2un%2BwQ%2Ff5o6xmOWR1Hvdo%2Fe0uvmKSEbany5BHgc2A4r%2Fj5nSIaHD06wY80bT8pEQKQpnhmNrd%2BhQwpeGM7HJ6u6P0jDv7%2FfABjqkAdwRMqr0v%2FPhva5iIeX9C%2F1RsKXqbcA4zU4kwdKz%2Bt9019BjGdEhEvA5zEyWGiko1lRTdgryyQOxB8TiZ57fbd1y9kAYYLUnWLEgjqYUonUhAQ8azI6XnoR%2BcJJmn8q48VWNd3qgVcM1azYu%2Bh45aP%2FFumBDfCKkUbS9jrW3%2B04U5vzAd4J%2F0GUXvIJ7jFNfCybWWEg3tbkmLdTWKW8dhK1b84CE&X-Amz-Signature=53b8d39c3d061a1d3ebb7b2693e8d9a5f02c12401dfdcc64cec7a8e8a7e73693&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP36P7CZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCydnM79tqrZ9DV4lXW5eQg7Aoil1WNsH6BSb0Ir1zlUwIhANBEbsN9DNd%2BjNGNCnu%2Fgg2WzUJ9vSx2Ag7nEo5q70WhKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAB8SfZOTrDuCLkMq3AP3wlXd1rMcAtVZPcQdQcQs6LslwwLr2a16SsRMmm%2ByyjvNMPXzoSnR9Hxi3LLRpbvYpv5v2eOBy9jXcToslGFuauNAZxdS5KsDE03rsg7zKqRYnWnrq%2FiM4Bx%2Fy5B7DJxHjLm15IC6%2FJVSDDT2xyCPiIuEhX%2BCgNJRa8icDuMmBFwGbVWRxy8GZ9HpTPu6Nh0onr5IgYYRswAzvtEHE55kQcuVyOwvAnN8fX3GRCT4eenh3SXlfk16rxJVohPwb1MhJZ%2Fmb4RPkhnGZ0hmZLQv4bTO%2Bbs8J1MMB4dP%2F%2FN2CwbhV%2BnM10dqFXPmteA9McEPXGCjSs%2Fs8pQM73FQ6Zw8rzNczlITAkeGgqIAmObHWVwtiSi2KEL0tJ%2F5Yk0MWV%2B6GHhwJgcyH9tOApI68wRdSZSCPRMrSjO%2F30tNJj9sMduuNUfezs3PT%2B5IM9fI%2F8%2FwDhXvSmEmNdIEPHKHzzMm5VOA3ILR1VyLVspTINiAVZYHIdL6DYDrPsY6xhYM1gr4Wfa%2FQsBhfgE6NNihSpBOLLPl%2FlaGic7S2un%2BwQ%2Ff5o6xmOWR1Hvdo%2Fe0uvmKSEbany5BHgc2A4r%2Fj5nSIaHD06wY80bT8pEQKQpnhmNrd%2BhQwpeGM7HJ6u6P0jDv7%2FfABjqkAdwRMqr0v%2FPhva5iIeX9C%2F1RsKXqbcA4zU4kwdKz%2Bt9019BjGdEhEvA5zEyWGiko1lRTdgryyQOxB8TiZ57fbd1y9kAYYLUnWLEgjqYUonUhAQ8azI6XnoR%2BcJJmn8q48VWNd3qgVcM1azYu%2Bh45aP%2FFumBDfCKkUbS9jrW3%2B04U5vzAd4J%2F0GUXvIJ7jFNfCybWWEg3tbkmLdTWKW8dhK1b84CE&X-Amz-Signature=852beb179ed4153df82c73284894bf299b83a545e8e5332ee5bc28c226ab02cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP36P7CZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCydnM79tqrZ9DV4lXW5eQg7Aoil1WNsH6BSb0Ir1zlUwIhANBEbsN9DNd%2BjNGNCnu%2Fgg2WzUJ9vSx2Ag7nEo5q70WhKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAB8SfZOTrDuCLkMq3AP3wlXd1rMcAtVZPcQdQcQs6LslwwLr2a16SsRMmm%2ByyjvNMPXzoSnR9Hxi3LLRpbvYpv5v2eOBy9jXcToslGFuauNAZxdS5KsDE03rsg7zKqRYnWnrq%2FiM4Bx%2Fy5B7DJxHjLm15IC6%2FJVSDDT2xyCPiIuEhX%2BCgNJRa8icDuMmBFwGbVWRxy8GZ9HpTPu6Nh0onr5IgYYRswAzvtEHE55kQcuVyOwvAnN8fX3GRCT4eenh3SXlfk16rxJVohPwb1MhJZ%2Fmb4RPkhnGZ0hmZLQv4bTO%2Bbs8J1MMB4dP%2F%2FN2CwbhV%2BnM10dqFXPmteA9McEPXGCjSs%2Fs8pQM73FQ6Zw8rzNczlITAkeGgqIAmObHWVwtiSi2KEL0tJ%2F5Yk0MWV%2B6GHhwJgcyH9tOApI68wRdSZSCPRMrSjO%2F30tNJj9sMduuNUfezs3PT%2B5IM9fI%2F8%2FwDhXvSmEmNdIEPHKHzzMm5VOA3ILR1VyLVspTINiAVZYHIdL6DYDrPsY6xhYM1gr4Wfa%2FQsBhfgE6NNihSpBOLLPl%2FlaGic7S2un%2BwQ%2Ff5o6xmOWR1Hvdo%2Fe0uvmKSEbany5BHgc2A4r%2Fj5nSIaHD06wY80bT8pEQKQpnhmNrd%2BhQwpeGM7HJ6u6P0jDv7%2FfABjqkAdwRMqr0v%2FPhva5iIeX9C%2F1RsKXqbcA4zU4kwdKz%2Bt9019BjGdEhEvA5zEyWGiko1lRTdgryyQOxB8TiZ57fbd1y9kAYYLUnWLEgjqYUonUhAQ8azI6XnoR%2BcJJmn8q48VWNd3qgVcM1azYu%2Bh45aP%2FFumBDfCKkUbS9jrW3%2B04U5vzAd4J%2F0GUXvIJ7jFNfCybWWEg3tbkmLdTWKW8dhK1b84CE&X-Amz-Signature=f8bc443490cafd594dbc77dda74d6e5194b5ce654cb21ca234de06c9b2321aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP36P7CZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCydnM79tqrZ9DV4lXW5eQg7Aoil1WNsH6BSb0Ir1zlUwIhANBEbsN9DNd%2BjNGNCnu%2Fgg2WzUJ9vSx2Ag7nEo5q70WhKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAB8SfZOTrDuCLkMq3AP3wlXd1rMcAtVZPcQdQcQs6LslwwLr2a16SsRMmm%2ByyjvNMPXzoSnR9Hxi3LLRpbvYpv5v2eOBy9jXcToslGFuauNAZxdS5KsDE03rsg7zKqRYnWnrq%2FiM4Bx%2Fy5B7DJxHjLm15IC6%2FJVSDDT2xyCPiIuEhX%2BCgNJRa8icDuMmBFwGbVWRxy8GZ9HpTPu6Nh0onr5IgYYRswAzvtEHE55kQcuVyOwvAnN8fX3GRCT4eenh3SXlfk16rxJVohPwb1MhJZ%2Fmb4RPkhnGZ0hmZLQv4bTO%2Bbs8J1MMB4dP%2F%2FN2CwbhV%2BnM10dqFXPmteA9McEPXGCjSs%2Fs8pQM73FQ6Zw8rzNczlITAkeGgqIAmObHWVwtiSi2KEL0tJ%2F5Yk0MWV%2B6GHhwJgcyH9tOApI68wRdSZSCPRMrSjO%2F30tNJj9sMduuNUfezs3PT%2B5IM9fI%2F8%2FwDhXvSmEmNdIEPHKHzzMm5VOA3ILR1VyLVspTINiAVZYHIdL6DYDrPsY6xhYM1gr4Wfa%2FQsBhfgE6NNihSpBOLLPl%2FlaGic7S2un%2BwQ%2Ff5o6xmOWR1Hvdo%2Fe0uvmKSEbany5BHgc2A4r%2Fj5nSIaHD06wY80bT8pEQKQpnhmNrd%2BhQwpeGM7HJ6u6P0jDv7%2FfABjqkAdwRMqr0v%2FPhva5iIeX9C%2F1RsKXqbcA4zU4kwdKz%2Bt9019BjGdEhEvA5zEyWGiko1lRTdgryyQOxB8TiZ57fbd1y9kAYYLUnWLEgjqYUonUhAQ8azI6XnoR%2BcJJmn8q48VWNd3qgVcM1azYu%2Bh45aP%2FFumBDfCKkUbS9jrW3%2B04U5vzAd4J%2F0GUXvIJ7jFNfCybWWEg3tbkmLdTWKW8dhK1b84CE&X-Amz-Signature=1e1f823aa87e89d52b1a140e011aa8313497271910e694b0b355028fc88e178d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP36P7CZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCydnM79tqrZ9DV4lXW5eQg7Aoil1WNsH6BSb0Ir1zlUwIhANBEbsN9DNd%2BjNGNCnu%2Fgg2WzUJ9vSx2Ag7nEo5q70WhKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAB8SfZOTrDuCLkMq3AP3wlXd1rMcAtVZPcQdQcQs6LslwwLr2a16SsRMmm%2ByyjvNMPXzoSnR9Hxi3LLRpbvYpv5v2eOBy9jXcToslGFuauNAZxdS5KsDE03rsg7zKqRYnWnrq%2FiM4Bx%2Fy5B7DJxHjLm15IC6%2FJVSDDT2xyCPiIuEhX%2BCgNJRa8icDuMmBFwGbVWRxy8GZ9HpTPu6Nh0onr5IgYYRswAzvtEHE55kQcuVyOwvAnN8fX3GRCT4eenh3SXlfk16rxJVohPwb1MhJZ%2Fmb4RPkhnGZ0hmZLQv4bTO%2Bbs8J1MMB4dP%2F%2FN2CwbhV%2BnM10dqFXPmteA9McEPXGCjSs%2Fs8pQM73FQ6Zw8rzNczlITAkeGgqIAmObHWVwtiSi2KEL0tJ%2F5Yk0MWV%2B6GHhwJgcyH9tOApI68wRdSZSCPRMrSjO%2F30tNJj9sMduuNUfezs3PT%2B5IM9fI%2F8%2FwDhXvSmEmNdIEPHKHzzMm5VOA3ILR1VyLVspTINiAVZYHIdL6DYDrPsY6xhYM1gr4Wfa%2FQsBhfgE6NNihSpBOLLPl%2FlaGic7S2un%2BwQ%2Ff5o6xmOWR1Hvdo%2Fe0uvmKSEbany5BHgc2A4r%2Fj5nSIaHD06wY80bT8pEQKQpnhmNrd%2BhQwpeGM7HJ6u6P0jDv7%2FfABjqkAdwRMqr0v%2FPhva5iIeX9C%2F1RsKXqbcA4zU4kwdKz%2Bt9019BjGdEhEvA5zEyWGiko1lRTdgryyQOxB8TiZ57fbd1y9kAYYLUnWLEgjqYUonUhAQ8azI6XnoR%2BcJJmn8q48VWNd3qgVcM1azYu%2Bh45aP%2FFumBDfCKkUbS9jrW3%2B04U5vzAd4J%2F0GUXvIJ7jFNfCybWWEg3tbkmLdTWKW8dhK1b84CE&X-Amz-Signature=5fc1f201dfc0245e348958d75aea354ac70745779a57d4300d5c07a1d9ccf426&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP36P7CZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCydnM79tqrZ9DV4lXW5eQg7Aoil1WNsH6BSb0Ir1zlUwIhANBEbsN9DNd%2BjNGNCnu%2Fgg2WzUJ9vSx2Ag7nEo5q70WhKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAB8SfZOTrDuCLkMq3AP3wlXd1rMcAtVZPcQdQcQs6LslwwLr2a16SsRMmm%2ByyjvNMPXzoSnR9Hxi3LLRpbvYpv5v2eOBy9jXcToslGFuauNAZxdS5KsDE03rsg7zKqRYnWnrq%2FiM4Bx%2Fy5B7DJxHjLm15IC6%2FJVSDDT2xyCPiIuEhX%2BCgNJRa8icDuMmBFwGbVWRxy8GZ9HpTPu6Nh0onr5IgYYRswAzvtEHE55kQcuVyOwvAnN8fX3GRCT4eenh3SXlfk16rxJVohPwb1MhJZ%2Fmb4RPkhnGZ0hmZLQv4bTO%2Bbs8J1MMB4dP%2F%2FN2CwbhV%2BnM10dqFXPmteA9McEPXGCjSs%2Fs8pQM73FQ6Zw8rzNczlITAkeGgqIAmObHWVwtiSi2KEL0tJ%2F5Yk0MWV%2B6GHhwJgcyH9tOApI68wRdSZSCPRMrSjO%2F30tNJj9sMduuNUfezs3PT%2B5IM9fI%2F8%2FwDhXvSmEmNdIEPHKHzzMm5VOA3ILR1VyLVspTINiAVZYHIdL6DYDrPsY6xhYM1gr4Wfa%2FQsBhfgE6NNihSpBOLLPl%2FlaGic7S2un%2BwQ%2Ff5o6xmOWR1Hvdo%2Fe0uvmKSEbany5BHgc2A4r%2Fj5nSIaHD06wY80bT8pEQKQpnhmNrd%2BhQwpeGM7HJ6u6P0jDv7%2FfABjqkAdwRMqr0v%2FPhva5iIeX9C%2F1RsKXqbcA4zU4kwdKz%2Bt9019BjGdEhEvA5zEyWGiko1lRTdgryyQOxB8TiZ57fbd1y9kAYYLUnWLEgjqYUonUhAQ8azI6XnoR%2BcJJmn8q48VWNd3qgVcM1azYu%2Bh45aP%2FFumBDfCKkUbS9jrW3%2B04U5vzAd4J%2F0GUXvIJ7jFNfCybWWEg3tbkmLdTWKW8dhK1b84CE&X-Amz-Signature=d141581f94515eb70d63fc514ddc785436e27e5618a30730aebef233ff7d376c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP36P7CZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCydnM79tqrZ9DV4lXW5eQg7Aoil1WNsH6BSb0Ir1zlUwIhANBEbsN9DNd%2BjNGNCnu%2Fgg2WzUJ9vSx2Ag7nEo5q70WhKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwAB8SfZOTrDuCLkMq3AP3wlXd1rMcAtVZPcQdQcQs6LslwwLr2a16SsRMmm%2ByyjvNMPXzoSnR9Hxi3LLRpbvYpv5v2eOBy9jXcToslGFuauNAZxdS5KsDE03rsg7zKqRYnWnrq%2FiM4Bx%2Fy5B7DJxHjLm15IC6%2FJVSDDT2xyCPiIuEhX%2BCgNJRa8icDuMmBFwGbVWRxy8GZ9HpTPu6Nh0onr5IgYYRswAzvtEHE55kQcuVyOwvAnN8fX3GRCT4eenh3SXlfk16rxJVohPwb1MhJZ%2Fmb4RPkhnGZ0hmZLQv4bTO%2Bbs8J1MMB4dP%2F%2FN2CwbhV%2BnM10dqFXPmteA9McEPXGCjSs%2Fs8pQM73FQ6Zw8rzNczlITAkeGgqIAmObHWVwtiSi2KEL0tJ%2F5Yk0MWV%2B6GHhwJgcyH9tOApI68wRdSZSCPRMrSjO%2F30tNJj9sMduuNUfezs3PT%2B5IM9fI%2F8%2FwDhXvSmEmNdIEPHKHzzMm5VOA3ILR1VyLVspTINiAVZYHIdL6DYDrPsY6xhYM1gr4Wfa%2FQsBhfgE6NNihSpBOLLPl%2FlaGic7S2un%2BwQ%2Ff5o6xmOWR1Hvdo%2Fe0uvmKSEbany5BHgc2A4r%2Fj5nSIaHD06wY80bT8pEQKQpnhmNrd%2BhQwpeGM7HJ6u6P0jDv7%2FfABjqkAdwRMqr0v%2FPhva5iIeX9C%2F1RsKXqbcA4zU4kwdKz%2Bt9019BjGdEhEvA5zEyWGiko1lRTdgryyQOxB8TiZ57fbd1y9kAYYLUnWLEgjqYUonUhAQ8azI6XnoR%2BcJJmn8q48VWNd3qgVcM1azYu%2Bh45aP%2FFumBDfCKkUbS9jrW3%2B04U5vzAd4J%2F0GUXvIJ7jFNfCybWWEg3tbkmLdTWKW8dhK1b84CE&X-Amz-Signature=2eadb71891a509f207f0efffc520739c0eec1ad36e0091de16c581bb5768574c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
