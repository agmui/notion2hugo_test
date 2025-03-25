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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2TQV4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGUEmictzn4IT%2F9S4OvUTb7bWjpLY82aFAa5TkOLplQIgPVkbPRgJwJO9pcMmY6UEdxOtD3FjNZEVd0UeaG5LHn4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6tXfzyMuNVxO36eircAxa%2F0CbyFpeXdTEEX1Gk29fXGUMse7mXuGbySp2iO1drrYjQky%2FFfGwNCvCEP6XBxlZQ5wOVcH%2BLRiCC878WGfqVJmYZNQeMqDLg3aq%2B958QouY1%2BPje%2BmRfYpm9A4KacJVQcOIu8rAlZrDYFbZVSTk4n0F32VbvpiMDC3KDSpbQsLABpzseqPU4Fan4J6q%2FL1GLJbPFU0iDMtOhL0SH96GID4ndmr3wNWOKGJDgdW0M6EZP9aq2sAaKT96KR%2FvlSYxKI%2F0OgmAx7nSe2%2FqeIhslKREdJ%2Boh0KlvXYuok1R0ssC3PopF22wVeXszMZiAxC07pMc4j%2BTfhOJbYJBu2oJMmqZ3Ekdfrp3RqBGZ7lxSSRLA3ZxycVRJap6e21exppsC3PP9dQlpaDuGPlNPoFTT0wu5TTykSM6w2BARWwQzY3v%2BxFSJ%2F5AVZIqQkK5nFTAdsZYqpd1KTi6mq0OIaWqB6pN%2BFWaiTV%2FnOr6kaqgsAil2PDo7tnuZXloXKgRyznt8KelLQUJyy3xEgHzfD9l%2BBm7Dn5mywR6mda%2BnrcP4hGNe9FsWQ8uq1bJcLXsx6f4o6WxEY%2BUojoTOWObgn56cZTbz%2F%2BWPvUfUdPhwfFAR4cx7SSTwOjdToneeMJWOib8GOqUBuYFibBOa6OOxYRlJmQRLxeAUpyw8qW7ptHV2vDnrFrRx5evyEDAHvIDLVWIFvmpjxQ1UAigid6NEoYmgQE1H8l96TpDldqXDlAvHw8s0%2F4pYr5qPuPKjdycJ7i1R6HEHqrp9A8X1XrCMaU1%2FE%2B2iqFc3I4mQ%2FJdzAdJ4WR2CadOQF8%2BJ4gHgyKTaCwCPVG02xWpXZ5c%2BFCaa8%2FYfSj7LEvoqJwP%2B&X-Amz-Signature=a4c81e96fbb77024ea553d37f12fb4aa22588567c12c5674e4dffcb2bcc50dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2TQV4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGUEmictzn4IT%2F9S4OvUTb7bWjpLY82aFAa5TkOLplQIgPVkbPRgJwJO9pcMmY6UEdxOtD3FjNZEVd0UeaG5LHn4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6tXfzyMuNVxO36eircAxa%2F0CbyFpeXdTEEX1Gk29fXGUMse7mXuGbySp2iO1drrYjQky%2FFfGwNCvCEP6XBxlZQ5wOVcH%2BLRiCC878WGfqVJmYZNQeMqDLg3aq%2B958QouY1%2BPje%2BmRfYpm9A4KacJVQcOIu8rAlZrDYFbZVSTk4n0F32VbvpiMDC3KDSpbQsLABpzseqPU4Fan4J6q%2FL1GLJbPFU0iDMtOhL0SH96GID4ndmr3wNWOKGJDgdW0M6EZP9aq2sAaKT96KR%2FvlSYxKI%2F0OgmAx7nSe2%2FqeIhslKREdJ%2Boh0KlvXYuok1R0ssC3PopF22wVeXszMZiAxC07pMc4j%2BTfhOJbYJBu2oJMmqZ3Ekdfrp3RqBGZ7lxSSRLA3ZxycVRJap6e21exppsC3PP9dQlpaDuGPlNPoFTT0wu5TTykSM6w2BARWwQzY3v%2BxFSJ%2F5AVZIqQkK5nFTAdsZYqpd1KTi6mq0OIaWqB6pN%2BFWaiTV%2FnOr6kaqgsAil2PDo7tnuZXloXKgRyznt8KelLQUJyy3xEgHzfD9l%2BBm7Dn5mywR6mda%2BnrcP4hGNe9FsWQ8uq1bJcLXsx6f4o6WxEY%2BUojoTOWObgn56cZTbz%2F%2BWPvUfUdPhwfFAR4cx7SSTwOjdToneeMJWOib8GOqUBuYFibBOa6OOxYRlJmQRLxeAUpyw8qW7ptHV2vDnrFrRx5evyEDAHvIDLVWIFvmpjxQ1UAigid6NEoYmgQE1H8l96TpDldqXDlAvHw8s0%2F4pYr5qPuPKjdycJ7i1R6HEHqrp9A8X1XrCMaU1%2FE%2B2iqFc3I4mQ%2FJdzAdJ4WR2CadOQF8%2BJ4gHgyKTaCwCPVG02xWpXZ5c%2BFCaa8%2FYfSj7LEvoqJwP%2B&X-Amz-Signature=eac8bffbacc41e5f874ff4c644d15017ee5be5aed80435806f8eca147d5d5944&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2TQV4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGUEmictzn4IT%2F9S4OvUTb7bWjpLY82aFAa5TkOLplQIgPVkbPRgJwJO9pcMmY6UEdxOtD3FjNZEVd0UeaG5LHn4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6tXfzyMuNVxO36eircAxa%2F0CbyFpeXdTEEX1Gk29fXGUMse7mXuGbySp2iO1drrYjQky%2FFfGwNCvCEP6XBxlZQ5wOVcH%2BLRiCC878WGfqVJmYZNQeMqDLg3aq%2B958QouY1%2BPje%2BmRfYpm9A4KacJVQcOIu8rAlZrDYFbZVSTk4n0F32VbvpiMDC3KDSpbQsLABpzseqPU4Fan4J6q%2FL1GLJbPFU0iDMtOhL0SH96GID4ndmr3wNWOKGJDgdW0M6EZP9aq2sAaKT96KR%2FvlSYxKI%2F0OgmAx7nSe2%2FqeIhslKREdJ%2Boh0KlvXYuok1R0ssC3PopF22wVeXszMZiAxC07pMc4j%2BTfhOJbYJBu2oJMmqZ3Ekdfrp3RqBGZ7lxSSRLA3ZxycVRJap6e21exppsC3PP9dQlpaDuGPlNPoFTT0wu5TTykSM6w2BARWwQzY3v%2BxFSJ%2F5AVZIqQkK5nFTAdsZYqpd1KTi6mq0OIaWqB6pN%2BFWaiTV%2FnOr6kaqgsAil2PDo7tnuZXloXKgRyznt8KelLQUJyy3xEgHzfD9l%2BBm7Dn5mywR6mda%2BnrcP4hGNe9FsWQ8uq1bJcLXsx6f4o6WxEY%2BUojoTOWObgn56cZTbz%2F%2BWPvUfUdPhwfFAR4cx7SSTwOjdToneeMJWOib8GOqUBuYFibBOa6OOxYRlJmQRLxeAUpyw8qW7ptHV2vDnrFrRx5evyEDAHvIDLVWIFvmpjxQ1UAigid6NEoYmgQE1H8l96TpDldqXDlAvHw8s0%2F4pYr5qPuPKjdycJ7i1R6HEHqrp9A8X1XrCMaU1%2FE%2B2iqFc3I4mQ%2FJdzAdJ4WR2CadOQF8%2BJ4gHgyKTaCwCPVG02xWpXZ5c%2BFCaa8%2FYfSj7LEvoqJwP%2B&X-Amz-Signature=170f245248b08a6297c3e5c8dea450721bf2f926d3f8f67cc1a88a3db26b21d8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2TQV4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGUEmictzn4IT%2F9S4OvUTb7bWjpLY82aFAa5TkOLplQIgPVkbPRgJwJO9pcMmY6UEdxOtD3FjNZEVd0UeaG5LHn4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6tXfzyMuNVxO36eircAxa%2F0CbyFpeXdTEEX1Gk29fXGUMse7mXuGbySp2iO1drrYjQky%2FFfGwNCvCEP6XBxlZQ5wOVcH%2BLRiCC878WGfqVJmYZNQeMqDLg3aq%2B958QouY1%2BPje%2BmRfYpm9A4KacJVQcOIu8rAlZrDYFbZVSTk4n0F32VbvpiMDC3KDSpbQsLABpzseqPU4Fan4J6q%2FL1GLJbPFU0iDMtOhL0SH96GID4ndmr3wNWOKGJDgdW0M6EZP9aq2sAaKT96KR%2FvlSYxKI%2F0OgmAx7nSe2%2FqeIhslKREdJ%2Boh0KlvXYuok1R0ssC3PopF22wVeXszMZiAxC07pMc4j%2BTfhOJbYJBu2oJMmqZ3Ekdfrp3RqBGZ7lxSSRLA3ZxycVRJap6e21exppsC3PP9dQlpaDuGPlNPoFTT0wu5TTykSM6w2BARWwQzY3v%2BxFSJ%2F5AVZIqQkK5nFTAdsZYqpd1KTi6mq0OIaWqB6pN%2BFWaiTV%2FnOr6kaqgsAil2PDo7tnuZXloXKgRyznt8KelLQUJyy3xEgHzfD9l%2BBm7Dn5mywR6mda%2BnrcP4hGNe9FsWQ8uq1bJcLXsx6f4o6WxEY%2BUojoTOWObgn56cZTbz%2F%2BWPvUfUdPhwfFAR4cx7SSTwOjdToneeMJWOib8GOqUBuYFibBOa6OOxYRlJmQRLxeAUpyw8qW7ptHV2vDnrFrRx5evyEDAHvIDLVWIFvmpjxQ1UAigid6NEoYmgQE1H8l96TpDldqXDlAvHw8s0%2F4pYr5qPuPKjdycJ7i1R6HEHqrp9A8X1XrCMaU1%2FE%2B2iqFc3I4mQ%2FJdzAdJ4WR2CadOQF8%2BJ4gHgyKTaCwCPVG02xWpXZ5c%2BFCaa8%2FYfSj7LEvoqJwP%2B&X-Amz-Signature=64c9e649afbd2550a22d7492c4b1b3846c1b0f30f8c1e21c92c7db686b6e5a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2TQV4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGUEmictzn4IT%2F9S4OvUTb7bWjpLY82aFAa5TkOLplQIgPVkbPRgJwJO9pcMmY6UEdxOtD3FjNZEVd0UeaG5LHn4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6tXfzyMuNVxO36eircAxa%2F0CbyFpeXdTEEX1Gk29fXGUMse7mXuGbySp2iO1drrYjQky%2FFfGwNCvCEP6XBxlZQ5wOVcH%2BLRiCC878WGfqVJmYZNQeMqDLg3aq%2B958QouY1%2BPje%2BmRfYpm9A4KacJVQcOIu8rAlZrDYFbZVSTk4n0F32VbvpiMDC3KDSpbQsLABpzseqPU4Fan4J6q%2FL1GLJbPFU0iDMtOhL0SH96GID4ndmr3wNWOKGJDgdW0M6EZP9aq2sAaKT96KR%2FvlSYxKI%2F0OgmAx7nSe2%2FqeIhslKREdJ%2Boh0KlvXYuok1R0ssC3PopF22wVeXszMZiAxC07pMc4j%2BTfhOJbYJBu2oJMmqZ3Ekdfrp3RqBGZ7lxSSRLA3ZxycVRJap6e21exppsC3PP9dQlpaDuGPlNPoFTT0wu5TTykSM6w2BARWwQzY3v%2BxFSJ%2F5AVZIqQkK5nFTAdsZYqpd1KTi6mq0OIaWqB6pN%2BFWaiTV%2FnOr6kaqgsAil2PDo7tnuZXloXKgRyznt8KelLQUJyy3xEgHzfD9l%2BBm7Dn5mywR6mda%2BnrcP4hGNe9FsWQ8uq1bJcLXsx6f4o6WxEY%2BUojoTOWObgn56cZTbz%2F%2BWPvUfUdPhwfFAR4cx7SSTwOjdToneeMJWOib8GOqUBuYFibBOa6OOxYRlJmQRLxeAUpyw8qW7ptHV2vDnrFrRx5evyEDAHvIDLVWIFvmpjxQ1UAigid6NEoYmgQE1H8l96TpDldqXDlAvHw8s0%2F4pYr5qPuPKjdycJ7i1R6HEHqrp9A8X1XrCMaU1%2FE%2B2iqFc3I4mQ%2FJdzAdJ4WR2CadOQF8%2BJ4gHgyKTaCwCPVG02xWpXZ5c%2BFCaa8%2FYfSj7LEvoqJwP%2B&X-Amz-Signature=68d37f4e13e72393d4cdbc6868f3608eb7be174a23baacefee54db65f7eff50c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2TQV4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGUEmictzn4IT%2F9S4OvUTb7bWjpLY82aFAa5TkOLplQIgPVkbPRgJwJO9pcMmY6UEdxOtD3FjNZEVd0UeaG5LHn4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6tXfzyMuNVxO36eircAxa%2F0CbyFpeXdTEEX1Gk29fXGUMse7mXuGbySp2iO1drrYjQky%2FFfGwNCvCEP6XBxlZQ5wOVcH%2BLRiCC878WGfqVJmYZNQeMqDLg3aq%2B958QouY1%2BPje%2BmRfYpm9A4KacJVQcOIu8rAlZrDYFbZVSTk4n0F32VbvpiMDC3KDSpbQsLABpzseqPU4Fan4J6q%2FL1GLJbPFU0iDMtOhL0SH96GID4ndmr3wNWOKGJDgdW0M6EZP9aq2sAaKT96KR%2FvlSYxKI%2F0OgmAx7nSe2%2FqeIhslKREdJ%2Boh0KlvXYuok1R0ssC3PopF22wVeXszMZiAxC07pMc4j%2BTfhOJbYJBu2oJMmqZ3Ekdfrp3RqBGZ7lxSSRLA3ZxycVRJap6e21exppsC3PP9dQlpaDuGPlNPoFTT0wu5TTykSM6w2BARWwQzY3v%2BxFSJ%2F5AVZIqQkK5nFTAdsZYqpd1KTi6mq0OIaWqB6pN%2BFWaiTV%2FnOr6kaqgsAil2PDo7tnuZXloXKgRyznt8KelLQUJyy3xEgHzfD9l%2BBm7Dn5mywR6mda%2BnrcP4hGNe9FsWQ8uq1bJcLXsx6f4o6WxEY%2BUojoTOWObgn56cZTbz%2F%2BWPvUfUdPhwfFAR4cx7SSTwOjdToneeMJWOib8GOqUBuYFibBOa6OOxYRlJmQRLxeAUpyw8qW7ptHV2vDnrFrRx5evyEDAHvIDLVWIFvmpjxQ1UAigid6NEoYmgQE1H8l96TpDldqXDlAvHw8s0%2F4pYr5qPuPKjdycJ7i1R6HEHqrp9A8X1XrCMaU1%2FE%2B2iqFc3I4mQ%2FJdzAdJ4WR2CadOQF8%2BJ4gHgyKTaCwCPVG02xWpXZ5c%2BFCaa8%2FYfSj7LEvoqJwP%2B&X-Amz-Signature=9bb0c1ef57351203f642ce611be47182c2ea9629248f6c8a33f24b213be400f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2TQV4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGUEmictzn4IT%2F9S4OvUTb7bWjpLY82aFAa5TkOLplQIgPVkbPRgJwJO9pcMmY6UEdxOtD3FjNZEVd0UeaG5LHn4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6tXfzyMuNVxO36eircAxa%2F0CbyFpeXdTEEX1Gk29fXGUMse7mXuGbySp2iO1drrYjQky%2FFfGwNCvCEP6XBxlZQ5wOVcH%2BLRiCC878WGfqVJmYZNQeMqDLg3aq%2B958QouY1%2BPje%2BmRfYpm9A4KacJVQcOIu8rAlZrDYFbZVSTk4n0F32VbvpiMDC3KDSpbQsLABpzseqPU4Fan4J6q%2FL1GLJbPFU0iDMtOhL0SH96GID4ndmr3wNWOKGJDgdW0M6EZP9aq2sAaKT96KR%2FvlSYxKI%2F0OgmAx7nSe2%2FqeIhslKREdJ%2Boh0KlvXYuok1R0ssC3PopF22wVeXszMZiAxC07pMc4j%2BTfhOJbYJBu2oJMmqZ3Ekdfrp3RqBGZ7lxSSRLA3ZxycVRJap6e21exppsC3PP9dQlpaDuGPlNPoFTT0wu5TTykSM6w2BARWwQzY3v%2BxFSJ%2F5AVZIqQkK5nFTAdsZYqpd1KTi6mq0OIaWqB6pN%2BFWaiTV%2FnOr6kaqgsAil2PDo7tnuZXloXKgRyznt8KelLQUJyy3xEgHzfD9l%2BBm7Dn5mywR6mda%2BnrcP4hGNe9FsWQ8uq1bJcLXsx6f4o6WxEY%2BUojoTOWObgn56cZTbz%2F%2BWPvUfUdPhwfFAR4cx7SSTwOjdToneeMJWOib8GOqUBuYFibBOa6OOxYRlJmQRLxeAUpyw8qW7ptHV2vDnrFrRx5evyEDAHvIDLVWIFvmpjxQ1UAigid6NEoYmgQE1H8l96TpDldqXDlAvHw8s0%2F4pYr5qPuPKjdycJ7i1R6HEHqrp9A8X1XrCMaU1%2FE%2B2iqFc3I4mQ%2FJdzAdJ4WR2CadOQF8%2BJ4gHgyKTaCwCPVG02xWpXZ5c%2BFCaa8%2FYfSj7LEvoqJwP%2B&X-Amz-Signature=b367edbbab15fd7ea44ddcd0645e48b969ad34becea564d696039ac8f2212908&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
