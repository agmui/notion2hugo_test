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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFR52JW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC39G9oOTULkERWeHeMuWGUMZnGZ7VlbqTM2Ps%2Fss9bSQIhAPmbcWujn67p69jKb%2FTQgZ9gWyLeSdKvBVE7W6c1Y4W2KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj2Oz3AenkQrx3T%2B0q3APQddMTjBFl4J6W3Fjo7ojDpX6pjBWTlaIUdpEA22%2BkdWMjk8tsKe6QIhkx1fKjbQF80k05j2yB9NvAuyksJwJPQsD4ksJuhCqwYDgW7s11uOJ4k7MuvU4Fgh9nf%2F4SnApx48NBA8H6Xq1MGURWRRBgZAqTP%2FdHOsW6HRpV2ZOU4MwwWc%2Bm9uAce%2B3zwgsiCwlh0zRTgobHqFcih%2FUnkn98aIG7IOozHSBoT71Jg9kyhvH1osjA91gwCV4Mh3%2FsbYfG%2FI5TM%2BU9ICRqPdGo5x0uWrCMAE2bs68Jtqlwnjx0tOImQJCOe8HDNJDwFDuhCPi6rNFpYtZpPPBSLVV66V6ntueIZs8IostR1eqXgFAejKFy9cRzXsoidIac9Zg%2B3sVjKtrA1VicopqPrX8KJPuFLnoy3KL4Olu2HcBJlrnBKaZtrG9pSIV0yPTvG4uT%2BnvqlXBVQOOAVgcj3%2BaP4xP5wOI0FbZGZ8zUigmlxUEdpmROaCY9nkOSBL0dd6PvFCv%2FVO%2BRGL2MnFHv05A3em4Z6x08863XPGJQNECHrHP61RS5lKp59X%2Fqs9HMHujFcKAXrRJ70L5TdCG8YPzxFLnRRCj3YqtasXujC4dcH%2FT2ay%2BG4y3kWQM5p878TjCPoc7ABjqkAdoDnvfCgbS%2BnDjoTaRs73I4ls%2FGO%2FnTYqjUOVOPbuHoiEnWzuX%2BvCk0waKryHkYZiOWJpY5uJJYo43KGx18NxwGQwqpkqk9hxJ43%2F7rK3%2BQZztuD8YxYas5VIXHKyJrFF%2FbzdCAUzmEIrHYttXvD6nJzVnBauUTxR2dINshhgrR%2FplgslM5Of9WxjCLRiRNrIXzqCE%2Bpmv%2BDoqPRqQCQ%2B1CSczo&X-Amz-Signature=2c1733008e23db6aa3288ac3277fe9a1e7de41ec7cee52c23400607df7c54531&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFR52JW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC39G9oOTULkERWeHeMuWGUMZnGZ7VlbqTM2Ps%2Fss9bSQIhAPmbcWujn67p69jKb%2FTQgZ9gWyLeSdKvBVE7W6c1Y4W2KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj2Oz3AenkQrx3T%2B0q3APQddMTjBFl4J6W3Fjo7ojDpX6pjBWTlaIUdpEA22%2BkdWMjk8tsKe6QIhkx1fKjbQF80k05j2yB9NvAuyksJwJPQsD4ksJuhCqwYDgW7s11uOJ4k7MuvU4Fgh9nf%2F4SnApx48NBA8H6Xq1MGURWRRBgZAqTP%2FdHOsW6HRpV2ZOU4MwwWc%2Bm9uAce%2B3zwgsiCwlh0zRTgobHqFcih%2FUnkn98aIG7IOozHSBoT71Jg9kyhvH1osjA91gwCV4Mh3%2FsbYfG%2FI5TM%2BU9ICRqPdGo5x0uWrCMAE2bs68Jtqlwnjx0tOImQJCOe8HDNJDwFDuhCPi6rNFpYtZpPPBSLVV66V6ntueIZs8IostR1eqXgFAejKFy9cRzXsoidIac9Zg%2B3sVjKtrA1VicopqPrX8KJPuFLnoy3KL4Olu2HcBJlrnBKaZtrG9pSIV0yPTvG4uT%2BnvqlXBVQOOAVgcj3%2BaP4xP5wOI0FbZGZ8zUigmlxUEdpmROaCY9nkOSBL0dd6PvFCv%2FVO%2BRGL2MnFHv05A3em4Z6x08863XPGJQNECHrHP61RS5lKp59X%2Fqs9HMHujFcKAXrRJ70L5TdCG8YPzxFLnRRCj3YqtasXujC4dcH%2FT2ay%2BG4y3kWQM5p878TjCPoc7ABjqkAdoDnvfCgbS%2BnDjoTaRs73I4ls%2FGO%2FnTYqjUOVOPbuHoiEnWzuX%2BvCk0waKryHkYZiOWJpY5uJJYo43KGx18NxwGQwqpkqk9hxJ43%2F7rK3%2BQZztuD8YxYas5VIXHKyJrFF%2FbzdCAUzmEIrHYttXvD6nJzVnBauUTxR2dINshhgrR%2FplgslM5Of9WxjCLRiRNrIXzqCE%2Bpmv%2BDoqPRqQCQ%2B1CSczo&X-Amz-Signature=3dfd81b812689677a7d540c184cffa7a86edf599b038a76a8c36c7532df9ff73&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFR52JW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC39G9oOTULkERWeHeMuWGUMZnGZ7VlbqTM2Ps%2Fss9bSQIhAPmbcWujn67p69jKb%2FTQgZ9gWyLeSdKvBVE7W6c1Y4W2KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj2Oz3AenkQrx3T%2B0q3APQddMTjBFl4J6W3Fjo7ojDpX6pjBWTlaIUdpEA22%2BkdWMjk8tsKe6QIhkx1fKjbQF80k05j2yB9NvAuyksJwJPQsD4ksJuhCqwYDgW7s11uOJ4k7MuvU4Fgh9nf%2F4SnApx48NBA8H6Xq1MGURWRRBgZAqTP%2FdHOsW6HRpV2ZOU4MwwWc%2Bm9uAce%2B3zwgsiCwlh0zRTgobHqFcih%2FUnkn98aIG7IOozHSBoT71Jg9kyhvH1osjA91gwCV4Mh3%2FsbYfG%2FI5TM%2BU9ICRqPdGo5x0uWrCMAE2bs68Jtqlwnjx0tOImQJCOe8HDNJDwFDuhCPi6rNFpYtZpPPBSLVV66V6ntueIZs8IostR1eqXgFAejKFy9cRzXsoidIac9Zg%2B3sVjKtrA1VicopqPrX8KJPuFLnoy3KL4Olu2HcBJlrnBKaZtrG9pSIV0yPTvG4uT%2BnvqlXBVQOOAVgcj3%2BaP4xP5wOI0FbZGZ8zUigmlxUEdpmROaCY9nkOSBL0dd6PvFCv%2FVO%2BRGL2MnFHv05A3em4Z6x08863XPGJQNECHrHP61RS5lKp59X%2Fqs9HMHujFcKAXrRJ70L5TdCG8YPzxFLnRRCj3YqtasXujC4dcH%2FT2ay%2BG4y3kWQM5p878TjCPoc7ABjqkAdoDnvfCgbS%2BnDjoTaRs73I4ls%2FGO%2FnTYqjUOVOPbuHoiEnWzuX%2BvCk0waKryHkYZiOWJpY5uJJYo43KGx18NxwGQwqpkqk9hxJ43%2F7rK3%2BQZztuD8YxYas5VIXHKyJrFF%2FbzdCAUzmEIrHYttXvD6nJzVnBauUTxR2dINshhgrR%2FplgslM5Of9WxjCLRiRNrIXzqCE%2Bpmv%2BDoqPRqQCQ%2B1CSczo&X-Amz-Signature=b43eeae6c20bf24b2e256a9d3b425e17c8aa14788defcaf9ef51813d35f7de82&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFR52JW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC39G9oOTULkERWeHeMuWGUMZnGZ7VlbqTM2Ps%2Fss9bSQIhAPmbcWujn67p69jKb%2FTQgZ9gWyLeSdKvBVE7W6c1Y4W2KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj2Oz3AenkQrx3T%2B0q3APQddMTjBFl4J6W3Fjo7ojDpX6pjBWTlaIUdpEA22%2BkdWMjk8tsKe6QIhkx1fKjbQF80k05j2yB9NvAuyksJwJPQsD4ksJuhCqwYDgW7s11uOJ4k7MuvU4Fgh9nf%2F4SnApx48NBA8H6Xq1MGURWRRBgZAqTP%2FdHOsW6HRpV2ZOU4MwwWc%2Bm9uAce%2B3zwgsiCwlh0zRTgobHqFcih%2FUnkn98aIG7IOozHSBoT71Jg9kyhvH1osjA91gwCV4Mh3%2FsbYfG%2FI5TM%2BU9ICRqPdGo5x0uWrCMAE2bs68Jtqlwnjx0tOImQJCOe8HDNJDwFDuhCPi6rNFpYtZpPPBSLVV66V6ntueIZs8IostR1eqXgFAejKFy9cRzXsoidIac9Zg%2B3sVjKtrA1VicopqPrX8KJPuFLnoy3KL4Olu2HcBJlrnBKaZtrG9pSIV0yPTvG4uT%2BnvqlXBVQOOAVgcj3%2BaP4xP5wOI0FbZGZ8zUigmlxUEdpmROaCY9nkOSBL0dd6PvFCv%2FVO%2BRGL2MnFHv05A3em4Z6x08863XPGJQNECHrHP61RS5lKp59X%2Fqs9HMHujFcKAXrRJ70L5TdCG8YPzxFLnRRCj3YqtasXujC4dcH%2FT2ay%2BG4y3kWQM5p878TjCPoc7ABjqkAdoDnvfCgbS%2BnDjoTaRs73I4ls%2FGO%2FnTYqjUOVOPbuHoiEnWzuX%2BvCk0waKryHkYZiOWJpY5uJJYo43KGx18NxwGQwqpkqk9hxJ43%2F7rK3%2BQZztuD8YxYas5VIXHKyJrFF%2FbzdCAUzmEIrHYttXvD6nJzVnBauUTxR2dINshhgrR%2FplgslM5Of9WxjCLRiRNrIXzqCE%2Bpmv%2BDoqPRqQCQ%2B1CSczo&X-Amz-Signature=fac72a0ac0b5c0c7fe442efa7bb686247f75e0bacd7cc275dca958370f324b44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFR52JW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC39G9oOTULkERWeHeMuWGUMZnGZ7VlbqTM2Ps%2Fss9bSQIhAPmbcWujn67p69jKb%2FTQgZ9gWyLeSdKvBVE7W6c1Y4W2KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj2Oz3AenkQrx3T%2B0q3APQddMTjBFl4J6W3Fjo7ojDpX6pjBWTlaIUdpEA22%2BkdWMjk8tsKe6QIhkx1fKjbQF80k05j2yB9NvAuyksJwJPQsD4ksJuhCqwYDgW7s11uOJ4k7MuvU4Fgh9nf%2F4SnApx48NBA8H6Xq1MGURWRRBgZAqTP%2FdHOsW6HRpV2ZOU4MwwWc%2Bm9uAce%2B3zwgsiCwlh0zRTgobHqFcih%2FUnkn98aIG7IOozHSBoT71Jg9kyhvH1osjA91gwCV4Mh3%2FsbYfG%2FI5TM%2BU9ICRqPdGo5x0uWrCMAE2bs68Jtqlwnjx0tOImQJCOe8HDNJDwFDuhCPi6rNFpYtZpPPBSLVV66V6ntueIZs8IostR1eqXgFAejKFy9cRzXsoidIac9Zg%2B3sVjKtrA1VicopqPrX8KJPuFLnoy3KL4Olu2HcBJlrnBKaZtrG9pSIV0yPTvG4uT%2BnvqlXBVQOOAVgcj3%2BaP4xP5wOI0FbZGZ8zUigmlxUEdpmROaCY9nkOSBL0dd6PvFCv%2FVO%2BRGL2MnFHv05A3em4Z6x08863XPGJQNECHrHP61RS5lKp59X%2Fqs9HMHujFcKAXrRJ70L5TdCG8YPzxFLnRRCj3YqtasXujC4dcH%2FT2ay%2BG4y3kWQM5p878TjCPoc7ABjqkAdoDnvfCgbS%2BnDjoTaRs73I4ls%2FGO%2FnTYqjUOVOPbuHoiEnWzuX%2BvCk0waKryHkYZiOWJpY5uJJYo43KGx18NxwGQwqpkqk9hxJ43%2F7rK3%2BQZztuD8YxYas5VIXHKyJrFF%2FbzdCAUzmEIrHYttXvD6nJzVnBauUTxR2dINshhgrR%2FplgslM5Of9WxjCLRiRNrIXzqCE%2Bpmv%2BDoqPRqQCQ%2B1CSczo&X-Amz-Signature=5502717167920abc88c2c3f678e81f1fe4b0ae74e236bf5ca129871d63ceb35f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFR52JW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC39G9oOTULkERWeHeMuWGUMZnGZ7VlbqTM2Ps%2Fss9bSQIhAPmbcWujn67p69jKb%2FTQgZ9gWyLeSdKvBVE7W6c1Y4W2KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj2Oz3AenkQrx3T%2B0q3APQddMTjBFl4J6W3Fjo7ojDpX6pjBWTlaIUdpEA22%2BkdWMjk8tsKe6QIhkx1fKjbQF80k05j2yB9NvAuyksJwJPQsD4ksJuhCqwYDgW7s11uOJ4k7MuvU4Fgh9nf%2F4SnApx48NBA8H6Xq1MGURWRRBgZAqTP%2FdHOsW6HRpV2ZOU4MwwWc%2Bm9uAce%2B3zwgsiCwlh0zRTgobHqFcih%2FUnkn98aIG7IOozHSBoT71Jg9kyhvH1osjA91gwCV4Mh3%2FsbYfG%2FI5TM%2BU9ICRqPdGo5x0uWrCMAE2bs68Jtqlwnjx0tOImQJCOe8HDNJDwFDuhCPi6rNFpYtZpPPBSLVV66V6ntueIZs8IostR1eqXgFAejKFy9cRzXsoidIac9Zg%2B3sVjKtrA1VicopqPrX8KJPuFLnoy3KL4Olu2HcBJlrnBKaZtrG9pSIV0yPTvG4uT%2BnvqlXBVQOOAVgcj3%2BaP4xP5wOI0FbZGZ8zUigmlxUEdpmROaCY9nkOSBL0dd6PvFCv%2FVO%2BRGL2MnFHv05A3em4Z6x08863XPGJQNECHrHP61RS5lKp59X%2Fqs9HMHujFcKAXrRJ70L5TdCG8YPzxFLnRRCj3YqtasXujC4dcH%2FT2ay%2BG4y3kWQM5p878TjCPoc7ABjqkAdoDnvfCgbS%2BnDjoTaRs73I4ls%2FGO%2FnTYqjUOVOPbuHoiEnWzuX%2BvCk0waKryHkYZiOWJpY5uJJYo43KGx18NxwGQwqpkqk9hxJ43%2F7rK3%2BQZztuD8YxYas5VIXHKyJrFF%2FbzdCAUzmEIrHYttXvD6nJzVnBauUTxR2dINshhgrR%2FplgslM5Of9WxjCLRiRNrIXzqCE%2Bpmv%2BDoqPRqQCQ%2B1CSczo&X-Amz-Signature=159b51a9d954782c8c046536940e39d86d0863ddc5448ce67f6f79e4f197048a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFR52JW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC39G9oOTULkERWeHeMuWGUMZnGZ7VlbqTM2Ps%2Fss9bSQIhAPmbcWujn67p69jKb%2FTQgZ9gWyLeSdKvBVE7W6c1Y4W2KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj2Oz3AenkQrx3T%2B0q3APQddMTjBFl4J6W3Fjo7ojDpX6pjBWTlaIUdpEA22%2BkdWMjk8tsKe6QIhkx1fKjbQF80k05j2yB9NvAuyksJwJPQsD4ksJuhCqwYDgW7s11uOJ4k7MuvU4Fgh9nf%2F4SnApx48NBA8H6Xq1MGURWRRBgZAqTP%2FdHOsW6HRpV2ZOU4MwwWc%2Bm9uAce%2B3zwgsiCwlh0zRTgobHqFcih%2FUnkn98aIG7IOozHSBoT71Jg9kyhvH1osjA91gwCV4Mh3%2FsbYfG%2FI5TM%2BU9ICRqPdGo5x0uWrCMAE2bs68Jtqlwnjx0tOImQJCOe8HDNJDwFDuhCPi6rNFpYtZpPPBSLVV66V6ntueIZs8IostR1eqXgFAejKFy9cRzXsoidIac9Zg%2B3sVjKtrA1VicopqPrX8KJPuFLnoy3KL4Olu2HcBJlrnBKaZtrG9pSIV0yPTvG4uT%2BnvqlXBVQOOAVgcj3%2BaP4xP5wOI0FbZGZ8zUigmlxUEdpmROaCY9nkOSBL0dd6PvFCv%2FVO%2BRGL2MnFHv05A3em4Z6x08863XPGJQNECHrHP61RS5lKp59X%2Fqs9HMHujFcKAXrRJ70L5TdCG8YPzxFLnRRCj3YqtasXujC4dcH%2FT2ay%2BG4y3kWQM5p878TjCPoc7ABjqkAdoDnvfCgbS%2BnDjoTaRs73I4ls%2FGO%2FnTYqjUOVOPbuHoiEnWzuX%2BvCk0waKryHkYZiOWJpY5uJJYo43KGx18NxwGQwqpkqk9hxJ43%2F7rK3%2BQZztuD8YxYas5VIXHKyJrFF%2FbzdCAUzmEIrHYttXvD6nJzVnBauUTxR2dINshhgrR%2FplgslM5Of9WxjCLRiRNrIXzqCE%2Bpmv%2BDoqPRqQCQ%2B1CSczo&X-Amz-Signature=6f0ea8ba870f2f4fc64bbc332148c2b6545ecef0a19c8709d570c78331b3a05e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
