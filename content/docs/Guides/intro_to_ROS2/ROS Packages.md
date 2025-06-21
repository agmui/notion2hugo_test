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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXINJOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChBbbuVrDO8743oWLicQvVweV%2BRB%2FxbWraYDv9qhDhKAiEAqGzomOtNbsgSMyhERiVFYdHbSAVNwM%2BPm65SbmeO1I0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnM1P3kr7UVQPPvkCrcA6ES3sGEYuhMPG1vFLNiDj1aM1f%2BFs3wDO6GMw0UIK8WEF5Febpxg9pFljNKnC6kNyyopz3KnNOaQjuoWjQXk4EVNgiMGA4kG8JP7R%2BOlr%2Btr%2FCBDhQb7zv1IvdsjUlVTgbyfkp6ianQirH%2BWexHcZqOOGOI27dBYZLoHKFVJnDtiWuzcOkS24qZOLarUjzcynpqezb%2BdqB2%2FWu8QxCewEWuBogLIagzNGhTuHaatbV9XnN7xCnEFbv5GKKiaheiMM13PePuL93F9oOiACDzDnF95%2FIj2fjudBhvWq7%2BRCzluQoEQa60EvsK3q%2F6DC1SQ6iU8OH7ayrKlY0e%2BnZFBg2iNAOBt8A2eT%2BhaaUvJ4Z6jjvG98BBhJAyeMWSlXpSdPI43vT1sdcUD15vF5EbBmKBMFRrLfBPcLrhTAGFl5SxLJcE1mR8FXl0ZvCDy3jL%2BlF%2Bv%2BaEVsOpitPYwxbHE6mqKiuHR%2FVX26r4PSBPiPcrNL1t%2FnDI%2FBMdXPU6RLNQhhGxCDoFmjNwoCYZSxPcru9gQYxl%2BaaUmaFW51RM95E5AwP0e6zji4XV3fzXF6f4kIWdIeVyTME6YKVtmPELQ61uJ03kZNjosFuq1Cox5JO7Qj9UEDx1U5EdbIBJMOmr3MIGOqUBkt4gAm0E0hvt%2FZ1IrDnyElDjeRnuRqTXZtFeuWoAH%2BmGs70mJsxM1Yrui%2BbKDnbH%2FgJxs76CWplRaL9fWJi8gnrUifXJsr%2FSlJEit6ixZWHnwDkS8GJQY%2FcOFuhcrPINI5Z6QjBbxvG8xKa0SA8fZ6o57IjxEFSwZ%2FRpAOUZwgiFDea%2B4eVncNaV91JuRxIpZPqCyRp3tutJShKuLMc%2FOlQ6SvtN&X-Amz-Signature=d885084a310915d3d7ec8f0b773e0264a7115c10a9fe2a92c70e3ecd3e027183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXINJOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChBbbuVrDO8743oWLicQvVweV%2BRB%2FxbWraYDv9qhDhKAiEAqGzomOtNbsgSMyhERiVFYdHbSAVNwM%2BPm65SbmeO1I0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnM1P3kr7UVQPPvkCrcA6ES3sGEYuhMPG1vFLNiDj1aM1f%2BFs3wDO6GMw0UIK8WEF5Febpxg9pFljNKnC6kNyyopz3KnNOaQjuoWjQXk4EVNgiMGA4kG8JP7R%2BOlr%2Btr%2FCBDhQb7zv1IvdsjUlVTgbyfkp6ianQirH%2BWexHcZqOOGOI27dBYZLoHKFVJnDtiWuzcOkS24qZOLarUjzcynpqezb%2BdqB2%2FWu8QxCewEWuBogLIagzNGhTuHaatbV9XnN7xCnEFbv5GKKiaheiMM13PePuL93F9oOiACDzDnF95%2FIj2fjudBhvWq7%2BRCzluQoEQa60EvsK3q%2F6DC1SQ6iU8OH7ayrKlY0e%2BnZFBg2iNAOBt8A2eT%2BhaaUvJ4Z6jjvG98BBhJAyeMWSlXpSdPI43vT1sdcUD15vF5EbBmKBMFRrLfBPcLrhTAGFl5SxLJcE1mR8FXl0ZvCDy3jL%2BlF%2Bv%2BaEVsOpitPYwxbHE6mqKiuHR%2FVX26r4PSBPiPcrNL1t%2FnDI%2FBMdXPU6RLNQhhGxCDoFmjNwoCYZSxPcru9gQYxl%2BaaUmaFW51RM95E5AwP0e6zji4XV3fzXF6f4kIWdIeVyTME6YKVtmPELQ61uJ03kZNjosFuq1Cox5JO7Qj9UEDx1U5EdbIBJMOmr3MIGOqUBkt4gAm0E0hvt%2FZ1IrDnyElDjeRnuRqTXZtFeuWoAH%2BmGs70mJsxM1Yrui%2BbKDnbH%2FgJxs76CWplRaL9fWJi8gnrUifXJsr%2FSlJEit6ixZWHnwDkS8GJQY%2FcOFuhcrPINI5Z6QjBbxvG8xKa0SA8fZ6o57IjxEFSwZ%2FRpAOUZwgiFDea%2B4eVncNaV91JuRxIpZPqCyRp3tutJShKuLMc%2FOlQ6SvtN&X-Amz-Signature=222a0c3e533dca274fcf73a30c3dfabe6bbc34aa735d519f75897f13da3a3ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXINJOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChBbbuVrDO8743oWLicQvVweV%2BRB%2FxbWraYDv9qhDhKAiEAqGzomOtNbsgSMyhERiVFYdHbSAVNwM%2BPm65SbmeO1I0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnM1P3kr7UVQPPvkCrcA6ES3sGEYuhMPG1vFLNiDj1aM1f%2BFs3wDO6GMw0UIK8WEF5Febpxg9pFljNKnC6kNyyopz3KnNOaQjuoWjQXk4EVNgiMGA4kG8JP7R%2BOlr%2Btr%2FCBDhQb7zv1IvdsjUlVTgbyfkp6ianQirH%2BWexHcZqOOGOI27dBYZLoHKFVJnDtiWuzcOkS24qZOLarUjzcynpqezb%2BdqB2%2FWu8QxCewEWuBogLIagzNGhTuHaatbV9XnN7xCnEFbv5GKKiaheiMM13PePuL93F9oOiACDzDnF95%2FIj2fjudBhvWq7%2BRCzluQoEQa60EvsK3q%2F6DC1SQ6iU8OH7ayrKlY0e%2BnZFBg2iNAOBt8A2eT%2BhaaUvJ4Z6jjvG98BBhJAyeMWSlXpSdPI43vT1sdcUD15vF5EbBmKBMFRrLfBPcLrhTAGFl5SxLJcE1mR8FXl0ZvCDy3jL%2BlF%2Bv%2BaEVsOpitPYwxbHE6mqKiuHR%2FVX26r4PSBPiPcrNL1t%2FnDI%2FBMdXPU6RLNQhhGxCDoFmjNwoCYZSxPcru9gQYxl%2BaaUmaFW51RM95E5AwP0e6zji4XV3fzXF6f4kIWdIeVyTME6YKVtmPELQ61uJ03kZNjosFuq1Cox5JO7Qj9UEDx1U5EdbIBJMOmr3MIGOqUBkt4gAm0E0hvt%2FZ1IrDnyElDjeRnuRqTXZtFeuWoAH%2BmGs70mJsxM1Yrui%2BbKDnbH%2FgJxs76CWplRaL9fWJi8gnrUifXJsr%2FSlJEit6ixZWHnwDkS8GJQY%2FcOFuhcrPINI5Z6QjBbxvG8xKa0SA8fZ6o57IjxEFSwZ%2FRpAOUZwgiFDea%2B4eVncNaV91JuRxIpZPqCyRp3tutJShKuLMc%2FOlQ6SvtN&X-Amz-Signature=aac52084af00f300dc0afd4d8ec0cfe0986f4a813fe519c48a1d139f26fe6b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXINJOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChBbbuVrDO8743oWLicQvVweV%2BRB%2FxbWraYDv9qhDhKAiEAqGzomOtNbsgSMyhERiVFYdHbSAVNwM%2BPm65SbmeO1I0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnM1P3kr7UVQPPvkCrcA6ES3sGEYuhMPG1vFLNiDj1aM1f%2BFs3wDO6GMw0UIK8WEF5Febpxg9pFljNKnC6kNyyopz3KnNOaQjuoWjQXk4EVNgiMGA4kG8JP7R%2BOlr%2Btr%2FCBDhQb7zv1IvdsjUlVTgbyfkp6ianQirH%2BWexHcZqOOGOI27dBYZLoHKFVJnDtiWuzcOkS24qZOLarUjzcynpqezb%2BdqB2%2FWu8QxCewEWuBogLIagzNGhTuHaatbV9XnN7xCnEFbv5GKKiaheiMM13PePuL93F9oOiACDzDnF95%2FIj2fjudBhvWq7%2BRCzluQoEQa60EvsK3q%2F6DC1SQ6iU8OH7ayrKlY0e%2BnZFBg2iNAOBt8A2eT%2BhaaUvJ4Z6jjvG98BBhJAyeMWSlXpSdPI43vT1sdcUD15vF5EbBmKBMFRrLfBPcLrhTAGFl5SxLJcE1mR8FXl0ZvCDy3jL%2BlF%2Bv%2BaEVsOpitPYwxbHE6mqKiuHR%2FVX26r4PSBPiPcrNL1t%2FnDI%2FBMdXPU6RLNQhhGxCDoFmjNwoCYZSxPcru9gQYxl%2BaaUmaFW51RM95E5AwP0e6zji4XV3fzXF6f4kIWdIeVyTME6YKVtmPELQ61uJ03kZNjosFuq1Cox5JO7Qj9UEDx1U5EdbIBJMOmr3MIGOqUBkt4gAm0E0hvt%2FZ1IrDnyElDjeRnuRqTXZtFeuWoAH%2BmGs70mJsxM1Yrui%2BbKDnbH%2FgJxs76CWplRaL9fWJi8gnrUifXJsr%2FSlJEit6ixZWHnwDkS8GJQY%2FcOFuhcrPINI5Z6QjBbxvG8xKa0SA8fZ6o57IjxEFSwZ%2FRpAOUZwgiFDea%2B4eVncNaV91JuRxIpZPqCyRp3tutJShKuLMc%2FOlQ6SvtN&X-Amz-Signature=41341e4c871fc87243c1f4979779607add8de349809c40e9ec0555470f7a8e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXINJOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChBbbuVrDO8743oWLicQvVweV%2BRB%2FxbWraYDv9qhDhKAiEAqGzomOtNbsgSMyhERiVFYdHbSAVNwM%2BPm65SbmeO1I0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnM1P3kr7UVQPPvkCrcA6ES3sGEYuhMPG1vFLNiDj1aM1f%2BFs3wDO6GMw0UIK8WEF5Febpxg9pFljNKnC6kNyyopz3KnNOaQjuoWjQXk4EVNgiMGA4kG8JP7R%2BOlr%2Btr%2FCBDhQb7zv1IvdsjUlVTgbyfkp6ianQirH%2BWexHcZqOOGOI27dBYZLoHKFVJnDtiWuzcOkS24qZOLarUjzcynpqezb%2BdqB2%2FWu8QxCewEWuBogLIagzNGhTuHaatbV9XnN7xCnEFbv5GKKiaheiMM13PePuL93F9oOiACDzDnF95%2FIj2fjudBhvWq7%2BRCzluQoEQa60EvsK3q%2F6DC1SQ6iU8OH7ayrKlY0e%2BnZFBg2iNAOBt8A2eT%2BhaaUvJ4Z6jjvG98BBhJAyeMWSlXpSdPI43vT1sdcUD15vF5EbBmKBMFRrLfBPcLrhTAGFl5SxLJcE1mR8FXl0ZvCDy3jL%2BlF%2Bv%2BaEVsOpitPYwxbHE6mqKiuHR%2FVX26r4PSBPiPcrNL1t%2FnDI%2FBMdXPU6RLNQhhGxCDoFmjNwoCYZSxPcru9gQYxl%2BaaUmaFW51RM95E5AwP0e6zji4XV3fzXF6f4kIWdIeVyTME6YKVtmPELQ61uJ03kZNjosFuq1Cox5JO7Qj9UEDx1U5EdbIBJMOmr3MIGOqUBkt4gAm0E0hvt%2FZ1IrDnyElDjeRnuRqTXZtFeuWoAH%2BmGs70mJsxM1Yrui%2BbKDnbH%2FgJxs76CWplRaL9fWJi8gnrUifXJsr%2FSlJEit6ixZWHnwDkS8GJQY%2FcOFuhcrPINI5Z6QjBbxvG8xKa0SA8fZ6o57IjxEFSwZ%2FRpAOUZwgiFDea%2B4eVncNaV91JuRxIpZPqCyRp3tutJShKuLMc%2FOlQ6SvtN&X-Amz-Signature=34891b0e707f02aefaf184b08573e2077852da4d6ee4f5f7c7a0e8d86a845cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXINJOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChBbbuVrDO8743oWLicQvVweV%2BRB%2FxbWraYDv9qhDhKAiEAqGzomOtNbsgSMyhERiVFYdHbSAVNwM%2BPm65SbmeO1I0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnM1P3kr7UVQPPvkCrcA6ES3sGEYuhMPG1vFLNiDj1aM1f%2BFs3wDO6GMw0UIK8WEF5Febpxg9pFljNKnC6kNyyopz3KnNOaQjuoWjQXk4EVNgiMGA4kG8JP7R%2BOlr%2Btr%2FCBDhQb7zv1IvdsjUlVTgbyfkp6ianQirH%2BWexHcZqOOGOI27dBYZLoHKFVJnDtiWuzcOkS24qZOLarUjzcynpqezb%2BdqB2%2FWu8QxCewEWuBogLIagzNGhTuHaatbV9XnN7xCnEFbv5GKKiaheiMM13PePuL93F9oOiACDzDnF95%2FIj2fjudBhvWq7%2BRCzluQoEQa60EvsK3q%2F6DC1SQ6iU8OH7ayrKlY0e%2BnZFBg2iNAOBt8A2eT%2BhaaUvJ4Z6jjvG98BBhJAyeMWSlXpSdPI43vT1sdcUD15vF5EbBmKBMFRrLfBPcLrhTAGFl5SxLJcE1mR8FXl0ZvCDy3jL%2BlF%2Bv%2BaEVsOpitPYwxbHE6mqKiuHR%2FVX26r4PSBPiPcrNL1t%2FnDI%2FBMdXPU6RLNQhhGxCDoFmjNwoCYZSxPcru9gQYxl%2BaaUmaFW51RM95E5AwP0e6zji4XV3fzXF6f4kIWdIeVyTME6YKVtmPELQ61uJ03kZNjosFuq1Cox5JO7Qj9UEDx1U5EdbIBJMOmr3MIGOqUBkt4gAm0E0hvt%2FZ1IrDnyElDjeRnuRqTXZtFeuWoAH%2BmGs70mJsxM1Yrui%2BbKDnbH%2FgJxs76CWplRaL9fWJi8gnrUifXJsr%2FSlJEit6ixZWHnwDkS8GJQY%2FcOFuhcrPINI5Z6QjBbxvG8xKa0SA8fZ6o57IjxEFSwZ%2FRpAOUZwgiFDea%2B4eVncNaV91JuRxIpZPqCyRp3tutJShKuLMc%2FOlQ6SvtN&X-Amz-Signature=6eca725f953b378c9323d3264add05acc3c1d7d0278387aca5bf5afce64ad91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXINJOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChBbbuVrDO8743oWLicQvVweV%2BRB%2FxbWraYDv9qhDhKAiEAqGzomOtNbsgSMyhERiVFYdHbSAVNwM%2BPm65SbmeO1I0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnM1P3kr7UVQPPvkCrcA6ES3sGEYuhMPG1vFLNiDj1aM1f%2BFs3wDO6GMw0UIK8WEF5Febpxg9pFljNKnC6kNyyopz3KnNOaQjuoWjQXk4EVNgiMGA4kG8JP7R%2BOlr%2Btr%2FCBDhQb7zv1IvdsjUlVTgbyfkp6ianQirH%2BWexHcZqOOGOI27dBYZLoHKFVJnDtiWuzcOkS24qZOLarUjzcynpqezb%2BdqB2%2FWu8QxCewEWuBogLIagzNGhTuHaatbV9XnN7xCnEFbv5GKKiaheiMM13PePuL93F9oOiACDzDnF95%2FIj2fjudBhvWq7%2BRCzluQoEQa60EvsK3q%2F6DC1SQ6iU8OH7ayrKlY0e%2BnZFBg2iNAOBt8A2eT%2BhaaUvJ4Z6jjvG98BBhJAyeMWSlXpSdPI43vT1sdcUD15vF5EbBmKBMFRrLfBPcLrhTAGFl5SxLJcE1mR8FXl0ZvCDy3jL%2BlF%2Bv%2BaEVsOpitPYwxbHE6mqKiuHR%2FVX26r4PSBPiPcrNL1t%2FnDI%2FBMdXPU6RLNQhhGxCDoFmjNwoCYZSxPcru9gQYxl%2BaaUmaFW51RM95E5AwP0e6zji4XV3fzXF6f4kIWdIeVyTME6YKVtmPELQ61uJ03kZNjosFuq1Cox5JO7Qj9UEDx1U5EdbIBJMOmr3MIGOqUBkt4gAm0E0hvt%2FZ1IrDnyElDjeRnuRqTXZtFeuWoAH%2BmGs70mJsxM1Yrui%2BbKDnbH%2FgJxs76CWplRaL9fWJi8gnrUifXJsr%2FSlJEit6ixZWHnwDkS8GJQY%2FcOFuhcrPINI5Z6QjBbxvG8xKa0SA8fZ6o57IjxEFSwZ%2FRpAOUZwgiFDea%2B4eVncNaV91JuRxIpZPqCyRp3tutJShKuLMc%2FOlQ6SvtN&X-Amz-Signature=bcb03f511dfaf6e40b194da99407c820ea3a33c6a9cedb322b864969934dd425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
