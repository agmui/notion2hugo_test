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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPTZGAK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjktgQbkiIapOthp44BB211Oydl0i4ZFdWEMXJ2dxI8QIgOTD%2FWYPL4hNlJ%2BcrrahspmG2Y2%2FxjW3iDZDJF4XlXrwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKFr7%2FtaXmSeCNAeCrcA9IjJr246WzzPNUS%2Bc401Q7xyv811dgbX0pJcRmxIcF0A5EgukeKvJa3Fyistcv%2BHQxfJWOYSJaPbvCqnlzwTLZfpV1olXRpik6prTNuOhqIZw1rHKlE2%2BAcBM7GJfTYsFAEytkVBW6F5Q26JLppnV0VBG%2FSddcX5qP7f8Xy%2BeAso1gyftQG1cKlJFabjcwFnJsDt6NqGac1yJksOQ7hARvi8HtCqgkaXhJDH2aLl3V6G0BWb9Rptj1tTOaSIZSlhQQSFx6%2BEY5BdBguR6tAU%2BCQbxxWWC9A7wYpFGGtR1USO4AVqPifqf5EG%2FQBw1nOm3WZuWtFmt1vqhPEWCLlWqHkr130VTOJN7w%2BnfFM4qPbnV6XjED7m3yKt6%2BZs3DkByuf%2FlDRRyAFXdk18w4wiNri3HAUWccte9e8jpwrShVEPCKQliiiNFinnZHp1Y3v75cXZXnRWTcH00JpoXopiuS1FlRi%2BOvzUEs%2BXtjFFzTq%2B%2F2SI%2BuHUqMlgahI8LlsoE2IELsR8uJVk%2F1%2B9UYkkMwJOqSfIVstAFQALnRgZkBvi4Ry45zfEjN8IcLEvY6elzQhUeKvxr%2BHCxE4YuBRFg0BC%2Bq0kYcQYcrySWalRuL9IR04Nsx1yHczn2zwMJT9kL4GOqUBrPiVBlIJGMjLDbA2CgqJ8wwtVqfd%2FTfqWMJoYPG1Iw71GdztXBXqi6EatzTdpw7%2F%2BLPvsocqHSVbzYTl4SC3vDoNdQyeRiCsfctHgfVLpAN6SXSsLMOm%2FcufqhuWLAlzvs%2BkY%2BF4pD2vs1wHXccJQNrqRYEyDVo6ZaehlUP16hTMK%2FhCTgD5HgEic86UqdsBOH9uWQ%2BYwL3K7S9w99QwWu2tNcG9&X-Amz-Signature=85e3070e31f70a686e8d930482447e17164e60d2128d913d2745301012de1795&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPTZGAK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjktgQbkiIapOthp44BB211Oydl0i4ZFdWEMXJ2dxI8QIgOTD%2FWYPL4hNlJ%2BcrrahspmG2Y2%2FxjW3iDZDJF4XlXrwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKFr7%2FtaXmSeCNAeCrcA9IjJr246WzzPNUS%2Bc401Q7xyv811dgbX0pJcRmxIcF0A5EgukeKvJa3Fyistcv%2BHQxfJWOYSJaPbvCqnlzwTLZfpV1olXRpik6prTNuOhqIZw1rHKlE2%2BAcBM7GJfTYsFAEytkVBW6F5Q26JLppnV0VBG%2FSddcX5qP7f8Xy%2BeAso1gyftQG1cKlJFabjcwFnJsDt6NqGac1yJksOQ7hARvi8HtCqgkaXhJDH2aLl3V6G0BWb9Rptj1tTOaSIZSlhQQSFx6%2BEY5BdBguR6tAU%2BCQbxxWWC9A7wYpFGGtR1USO4AVqPifqf5EG%2FQBw1nOm3WZuWtFmt1vqhPEWCLlWqHkr130VTOJN7w%2BnfFM4qPbnV6XjED7m3yKt6%2BZs3DkByuf%2FlDRRyAFXdk18w4wiNri3HAUWccte9e8jpwrShVEPCKQliiiNFinnZHp1Y3v75cXZXnRWTcH00JpoXopiuS1FlRi%2BOvzUEs%2BXtjFFzTq%2B%2F2SI%2BuHUqMlgahI8LlsoE2IELsR8uJVk%2F1%2B9UYkkMwJOqSfIVstAFQALnRgZkBvi4Ry45zfEjN8IcLEvY6elzQhUeKvxr%2BHCxE4YuBRFg0BC%2Bq0kYcQYcrySWalRuL9IR04Nsx1yHczn2zwMJT9kL4GOqUBrPiVBlIJGMjLDbA2CgqJ8wwtVqfd%2FTfqWMJoYPG1Iw71GdztXBXqi6EatzTdpw7%2F%2BLPvsocqHSVbzYTl4SC3vDoNdQyeRiCsfctHgfVLpAN6SXSsLMOm%2FcufqhuWLAlzvs%2BkY%2BF4pD2vs1wHXccJQNrqRYEyDVo6ZaehlUP16hTMK%2FhCTgD5HgEic86UqdsBOH9uWQ%2BYwL3K7S9w99QwWu2tNcG9&X-Amz-Signature=1115ab5a5cd3caa9d177ae3fe1ed8a193f3ddd9669ba6951c5e818fdc952df26&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPTZGAK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjktgQbkiIapOthp44BB211Oydl0i4ZFdWEMXJ2dxI8QIgOTD%2FWYPL4hNlJ%2BcrrahspmG2Y2%2FxjW3iDZDJF4XlXrwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKFr7%2FtaXmSeCNAeCrcA9IjJr246WzzPNUS%2Bc401Q7xyv811dgbX0pJcRmxIcF0A5EgukeKvJa3Fyistcv%2BHQxfJWOYSJaPbvCqnlzwTLZfpV1olXRpik6prTNuOhqIZw1rHKlE2%2BAcBM7GJfTYsFAEytkVBW6F5Q26JLppnV0VBG%2FSddcX5qP7f8Xy%2BeAso1gyftQG1cKlJFabjcwFnJsDt6NqGac1yJksOQ7hARvi8HtCqgkaXhJDH2aLl3V6G0BWb9Rptj1tTOaSIZSlhQQSFx6%2BEY5BdBguR6tAU%2BCQbxxWWC9A7wYpFGGtR1USO4AVqPifqf5EG%2FQBw1nOm3WZuWtFmt1vqhPEWCLlWqHkr130VTOJN7w%2BnfFM4qPbnV6XjED7m3yKt6%2BZs3DkByuf%2FlDRRyAFXdk18w4wiNri3HAUWccte9e8jpwrShVEPCKQliiiNFinnZHp1Y3v75cXZXnRWTcH00JpoXopiuS1FlRi%2BOvzUEs%2BXtjFFzTq%2B%2F2SI%2BuHUqMlgahI8LlsoE2IELsR8uJVk%2F1%2B9UYkkMwJOqSfIVstAFQALnRgZkBvi4Ry45zfEjN8IcLEvY6elzQhUeKvxr%2BHCxE4YuBRFg0BC%2Bq0kYcQYcrySWalRuL9IR04Nsx1yHczn2zwMJT9kL4GOqUBrPiVBlIJGMjLDbA2CgqJ8wwtVqfd%2FTfqWMJoYPG1Iw71GdztXBXqi6EatzTdpw7%2F%2BLPvsocqHSVbzYTl4SC3vDoNdQyeRiCsfctHgfVLpAN6SXSsLMOm%2FcufqhuWLAlzvs%2BkY%2BF4pD2vs1wHXccJQNrqRYEyDVo6ZaehlUP16hTMK%2FhCTgD5HgEic86UqdsBOH9uWQ%2BYwL3K7S9w99QwWu2tNcG9&X-Amz-Signature=36f9c3ae4fb29012bf1cbcb827e82b37a6ce4d36154b326ab430b8975ad026c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPTZGAK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjktgQbkiIapOthp44BB211Oydl0i4ZFdWEMXJ2dxI8QIgOTD%2FWYPL4hNlJ%2BcrrahspmG2Y2%2FxjW3iDZDJF4XlXrwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKFr7%2FtaXmSeCNAeCrcA9IjJr246WzzPNUS%2Bc401Q7xyv811dgbX0pJcRmxIcF0A5EgukeKvJa3Fyistcv%2BHQxfJWOYSJaPbvCqnlzwTLZfpV1olXRpik6prTNuOhqIZw1rHKlE2%2BAcBM7GJfTYsFAEytkVBW6F5Q26JLppnV0VBG%2FSddcX5qP7f8Xy%2BeAso1gyftQG1cKlJFabjcwFnJsDt6NqGac1yJksOQ7hARvi8HtCqgkaXhJDH2aLl3V6G0BWb9Rptj1tTOaSIZSlhQQSFx6%2BEY5BdBguR6tAU%2BCQbxxWWC9A7wYpFGGtR1USO4AVqPifqf5EG%2FQBw1nOm3WZuWtFmt1vqhPEWCLlWqHkr130VTOJN7w%2BnfFM4qPbnV6XjED7m3yKt6%2BZs3DkByuf%2FlDRRyAFXdk18w4wiNri3HAUWccte9e8jpwrShVEPCKQliiiNFinnZHp1Y3v75cXZXnRWTcH00JpoXopiuS1FlRi%2BOvzUEs%2BXtjFFzTq%2B%2F2SI%2BuHUqMlgahI8LlsoE2IELsR8uJVk%2F1%2B9UYkkMwJOqSfIVstAFQALnRgZkBvi4Ry45zfEjN8IcLEvY6elzQhUeKvxr%2BHCxE4YuBRFg0BC%2Bq0kYcQYcrySWalRuL9IR04Nsx1yHczn2zwMJT9kL4GOqUBrPiVBlIJGMjLDbA2CgqJ8wwtVqfd%2FTfqWMJoYPG1Iw71GdztXBXqi6EatzTdpw7%2F%2BLPvsocqHSVbzYTl4SC3vDoNdQyeRiCsfctHgfVLpAN6SXSsLMOm%2FcufqhuWLAlzvs%2BkY%2BF4pD2vs1wHXccJQNrqRYEyDVo6ZaehlUP16hTMK%2FhCTgD5HgEic86UqdsBOH9uWQ%2BYwL3K7S9w99QwWu2tNcG9&X-Amz-Signature=9973813e0df1fb26a59910605dc53778ad21498c246cd5652b122df28e620fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPTZGAK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjktgQbkiIapOthp44BB211Oydl0i4ZFdWEMXJ2dxI8QIgOTD%2FWYPL4hNlJ%2BcrrahspmG2Y2%2FxjW3iDZDJF4XlXrwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKFr7%2FtaXmSeCNAeCrcA9IjJr246WzzPNUS%2Bc401Q7xyv811dgbX0pJcRmxIcF0A5EgukeKvJa3Fyistcv%2BHQxfJWOYSJaPbvCqnlzwTLZfpV1olXRpik6prTNuOhqIZw1rHKlE2%2BAcBM7GJfTYsFAEytkVBW6F5Q26JLppnV0VBG%2FSddcX5qP7f8Xy%2BeAso1gyftQG1cKlJFabjcwFnJsDt6NqGac1yJksOQ7hARvi8HtCqgkaXhJDH2aLl3V6G0BWb9Rptj1tTOaSIZSlhQQSFx6%2BEY5BdBguR6tAU%2BCQbxxWWC9A7wYpFGGtR1USO4AVqPifqf5EG%2FQBw1nOm3WZuWtFmt1vqhPEWCLlWqHkr130VTOJN7w%2BnfFM4qPbnV6XjED7m3yKt6%2BZs3DkByuf%2FlDRRyAFXdk18w4wiNri3HAUWccte9e8jpwrShVEPCKQliiiNFinnZHp1Y3v75cXZXnRWTcH00JpoXopiuS1FlRi%2BOvzUEs%2BXtjFFzTq%2B%2F2SI%2BuHUqMlgahI8LlsoE2IELsR8uJVk%2F1%2B9UYkkMwJOqSfIVstAFQALnRgZkBvi4Ry45zfEjN8IcLEvY6elzQhUeKvxr%2BHCxE4YuBRFg0BC%2Bq0kYcQYcrySWalRuL9IR04Nsx1yHczn2zwMJT9kL4GOqUBrPiVBlIJGMjLDbA2CgqJ8wwtVqfd%2FTfqWMJoYPG1Iw71GdztXBXqi6EatzTdpw7%2F%2BLPvsocqHSVbzYTl4SC3vDoNdQyeRiCsfctHgfVLpAN6SXSsLMOm%2FcufqhuWLAlzvs%2BkY%2BF4pD2vs1wHXccJQNrqRYEyDVo6ZaehlUP16hTMK%2FhCTgD5HgEic86UqdsBOH9uWQ%2BYwL3K7S9w99QwWu2tNcG9&X-Amz-Signature=62cfeec7a40340e6849a2c4202a243cff15d323b5be3e210b08e3fddd8deb240&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPTZGAK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjktgQbkiIapOthp44BB211Oydl0i4ZFdWEMXJ2dxI8QIgOTD%2FWYPL4hNlJ%2BcrrahspmG2Y2%2FxjW3iDZDJF4XlXrwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKFr7%2FtaXmSeCNAeCrcA9IjJr246WzzPNUS%2Bc401Q7xyv811dgbX0pJcRmxIcF0A5EgukeKvJa3Fyistcv%2BHQxfJWOYSJaPbvCqnlzwTLZfpV1olXRpik6prTNuOhqIZw1rHKlE2%2BAcBM7GJfTYsFAEytkVBW6F5Q26JLppnV0VBG%2FSddcX5qP7f8Xy%2BeAso1gyftQG1cKlJFabjcwFnJsDt6NqGac1yJksOQ7hARvi8HtCqgkaXhJDH2aLl3V6G0BWb9Rptj1tTOaSIZSlhQQSFx6%2BEY5BdBguR6tAU%2BCQbxxWWC9A7wYpFGGtR1USO4AVqPifqf5EG%2FQBw1nOm3WZuWtFmt1vqhPEWCLlWqHkr130VTOJN7w%2BnfFM4qPbnV6XjED7m3yKt6%2BZs3DkByuf%2FlDRRyAFXdk18w4wiNri3HAUWccte9e8jpwrShVEPCKQliiiNFinnZHp1Y3v75cXZXnRWTcH00JpoXopiuS1FlRi%2BOvzUEs%2BXtjFFzTq%2B%2F2SI%2BuHUqMlgahI8LlsoE2IELsR8uJVk%2F1%2B9UYkkMwJOqSfIVstAFQALnRgZkBvi4Ry45zfEjN8IcLEvY6elzQhUeKvxr%2BHCxE4YuBRFg0BC%2Bq0kYcQYcrySWalRuL9IR04Nsx1yHczn2zwMJT9kL4GOqUBrPiVBlIJGMjLDbA2CgqJ8wwtVqfd%2FTfqWMJoYPG1Iw71GdztXBXqi6EatzTdpw7%2F%2BLPvsocqHSVbzYTl4SC3vDoNdQyeRiCsfctHgfVLpAN6SXSsLMOm%2FcufqhuWLAlzvs%2BkY%2BF4pD2vs1wHXccJQNrqRYEyDVo6ZaehlUP16hTMK%2FhCTgD5HgEic86UqdsBOH9uWQ%2BYwL3K7S9w99QwWu2tNcG9&X-Amz-Signature=6d7ac051fa5338ec1e0b235795b5d5acaa5fece13f6b2e9d28a5266df6cd361b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPTZGAK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjktgQbkiIapOthp44BB211Oydl0i4ZFdWEMXJ2dxI8QIgOTD%2FWYPL4hNlJ%2BcrrahspmG2Y2%2FxjW3iDZDJF4XlXrwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKFr7%2FtaXmSeCNAeCrcA9IjJr246WzzPNUS%2Bc401Q7xyv811dgbX0pJcRmxIcF0A5EgukeKvJa3Fyistcv%2BHQxfJWOYSJaPbvCqnlzwTLZfpV1olXRpik6prTNuOhqIZw1rHKlE2%2BAcBM7GJfTYsFAEytkVBW6F5Q26JLppnV0VBG%2FSddcX5qP7f8Xy%2BeAso1gyftQG1cKlJFabjcwFnJsDt6NqGac1yJksOQ7hARvi8HtCqgkaXhJDH2aLl3V6G0BWb9Rptj1tTOaSIZSlhQQSFx6%2BEY5BdBguR6tAU%2BCQbxxWWC9A7wYpFGGtR1USO4AVqPifqf5EG%2FQBw1nOm3WZuWtFmt1vqhPEWCLlWqHkr130VTOJN7w%2BnfFM4qPbnV6XjED7m3yKt6%2BZs3DkByuf%2FlDRRyAFXdk18w4wiNri3HAUWccte9e8jpwrShVEPCKQliiiNFinnZHp1Y3v75cXZXnRWTcH00JpoXopiuS1FlRi%2BOvzUEs%2BXtjFFzTq%2B%2F2SI%2BuHUqMlgahI8LlsoE2IELsR8uJVk%2F1%2B9UYkkMwJOqSfIVstAFQALnRgZkBvi4Ry45zfEjN8IcLEvY6elzQhUeKvxr%2BHCxE4YuBRFg0BC%2Bq0kYcQYcrySWalRuL9IR04Nsx1yHczn2zwMJT9kL4GOqUBrPiVBlIJGMjLDbA2CgqJ8wwtVqfd%2FTfqWMJoYPG1Iw71GdztXBXqi6EatzTdpw7%2F%2BLPvsocqHSVbzYTl4SC3vDoNdQyeRiCsfctHgfVLpAN6SXSsLMOm%2FcufqhuWLAlzvs%2BkY%2BF4pD2vs1wHXccJQNrqRYEyDVo6ZaehlUP16hTMK%2FhCTgD5HgEic86UqdsBOH9uWQ%2BYwL3K7S9w99QwWu2tNcG9&X-Amz-Signature=b8fa1505809355d32d06805ee2227a2f2fc4b890c578c8f10f59ba58fb95da10&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
