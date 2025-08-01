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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUIIMWM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJMtQ85OXV3vT%2BfS13mzdiG72HiODdne%2BZ2VL3XpuoZAiEAyP%2BvZjsHIcj1V5U8SLq0LgrngDIYffnVHkSKEF5rTTIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbrHUw%2FlpA%2FPjapqSrcA7FHTdsqnEl45GLWqoUB2HusGsaXOQ%2FnknqgkoI5dDCSeEuMUNHOmmTuV86Gs990OPdmVt%2FW%2FvwSKO0f2JgoRK4juiHWlKzVIF%2FwIJAjPYXmOlcBWZYLnOyj2v9c%2FY9BXTiBUyB2t87WNXyczlw4PPjuFBg4mHIXkyPbjZvW8WRKWOWaa0UK5wQsvTQavdrVZLseYV%2FHIremx%2B3nseF1kuuQM964ogwxMtdY5nIeMLQAjZiF96AXnpfHB7E4Ki0Cl%2F9vwapyqahH1cOE%2BqdkhH0i2gZtAC%2B%2FHSPFQqRcjeU5u%2Fs9AU3zM%2FAhQ509olueMI3fu4TQnUlgl8nE4tTKjDFmJjy6Sr0ZWGtyWgprDNtQlINW1bj6FmHyOVFm5uNBZm%2FLPVroFamPiuw3Yhja0s9NVa7rhEo2kZdpxN6UKPNHjrBxeYomaqQuWY5wmD48oKW7wWzYavbdpcMDq1xHIXb5jm0oyq08rZxRoCItab0%2F%2FzE41eIIlQEmv7Fb3ifGi0vawQLmXc5sQGU8xn7rySYa9kZFOSP3v5gVhzrl1Ug5hnR8mOt5DtbJzPA3%2BZO5yVDBsLqJuxd2Pp%2FylCeAkj9GZkTVLr19eOYo6DYTiJEs6VU9MQ6qXLExrKYaMPO1ssQGOqUBd%2BRu%2FTRIWaKHGpH3cdZ2IxmRsTI%2Bw0JX9sDrYW1Emrom%2Brbnx350VqC6nbUUSEihQWLUd6iBF%2Fl3XNiKkZKNYXgiR6maja27cDojx8sLJZ%2BOiITQF84XvM2VbrlG9Qi0tFQKsuGMUj3fJikMqTvdxf0ds8U6CDmmTNFIt1neo2srZ0ARPVOALwn%2B7EIQWvFH4lWWY13VR%2FOrK4MQXpoh2a%2FPfaQZ&X-Amz-Signature=a5845b369948b3bcac1db086582fbf29ac3d12820d2e543a1f263236fc26a7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUIIMWM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJMtQ85OXV3vT%2BfS13mzdiG72HiODdne%2BZ2VL3XpuoZAiEAyP%2BvZjsHIcj1V5U8SLq0LgrngDIYffnVHkSKEF5rTTIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbrHUw%2FlpA%2FPjapqSrcA7FHTdsqnEl45GLWqoUB2HusGsaXOQ%2FnknqgkoI5dDCSeEuMUNHOmmTuV86Gs990OPdmVt%2FW%2FvwSKO0f2JgoRK4juiHWlKzVIF%2FwIJAjPYXmOlcBWZYLnOyj2v9c%2FY9BXTiBUyB2t87WNXyczlw4PPjuFBg4mHIXkyPbjZvW8WRKWOWaa0UK5wQsvTQavdrVZLseYV%2FHIremx%2B3nseF1kuuQM964ogwxMtdY5nIeMLQAjZiF96AXnpfHB7E4Ki0Cl%2F9vwapyqahH1cOE%2BqdkhH0i2gZtAC%2B%2FHSPFQqRcjeU5u%2Fs9AU3zM%2FAhQ509olueMI3fu4TQnUlgl8nE4tTKjDFmJjy6Sr0ZWGtyWgprDNtQlINW1bj6FmHyOVFm5uNBZm%2FLPVroFamPiuw3Yhja0s9NVa7rhEo2kZdpxN6UKPNHjrBxeYomaqQuWY5wmD48oKW7wWzYavbdpcMDq1xHIXb5jm0oyq08rZxRoCItab0%2F%2FzE41eIIlQEmv7Fb3ifGi0vawQLmXc5sQGU8xn7rySYa9kZFOSP3v5gVhzrl1Ug5hnR8mOt5DtbJzPA3%2BZO5yVDBsLqJuxd2Pp%2FylCeAkj9GZkTVLr19eOYo6DYTiJEs6VU9MQ6qXLExrKYaMPO1ssQGOqUBd%2BRu%2FTRIWaKHGpH3cdZ2IxmRsTI%2Bw0JX9sDrYW1Emrom%2Brbnx350VqC6nbUUSEihQWLUd6iBF%2Fl3XNiKkZKNYXgiR6maja27cDojx8sLJZ%2BOiITQF84XvM2VbrlG9Qi0tFQKsuGMUj3fJikMqTvdxf0ds8U6CDmmTNFIt1neo2srZ0ARPVOALwn%2B7EIQWvFH4lWWY13VR%2FOrK4MQXpoh2a%2FPfaQZ&X-Amz-Signature=0aae6a2206de37bc0449fcf62c77285f71aa9bdd77a2ac1a503c0699a11edb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUIIMWM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJMtQ85OXV3vT%2BfS13mzdiG72HiODdne%2BZ2VL3XpuoZAiEAyP%2BvZjsHIcj1V5U8SLq0LgrngDIYffnVHkSKEF5rTTIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbrHUw%2FlpA%2FPjapqSrcA7FHTdsqnEl45GLWqoUB2HusGsaXOQ%2FnknqgkoI5dDCSeEuMUNHOmmTuV86Gs990OPdmVt%2FW%2FvwSKO0f2JgoRK4juiHWlKzVIF%2FwIJAjPYXmOlcBWZYLnOyj2v9c%2FY9BXTiBUyB2t87WNXyczlw4PPjuFBg4mHIXkyPbjZvW8WRKWOWaa0UK5wQsvTQavdrVZLseYV%2FHIremx%2B3nseF1kuuQM964ogwxMtdY5nIeMLQAjZiF96AXnpfHB7E4Ki0Cl%2F9vwapyqahH1cOE%2BqdkhH0i2gZtAC%2B%2FHSPFQqRcjeU5u%2Fs9AU3zM%2FAhQ509olueMI3fu4TQnUlgl8nE4tTKjDFmJjy6Sr0ZWGtyWgprDNtQlINW1bj6FmHyOVFm5uNBZm%2FLPVroFamPiuw3Yhja0s9NVa7rhEo2kZdpxN6UKPNHjrBxeYomaqQuWY5wmD48oKW7wWzYavbdpcMDq1xHIXb5jm0oyq08rZxRoCItab0%2F%2FzE41eIIlQEmv7Fb3ifGi0vawQLmXc5sQGU8xn7rySYa9kZFOSP3v5gVhzrl1Ug5hnR8mOt5DtbJzPA3%2BZO5yVDBsLqJuxd2Pp%2FylCeAkj9GZkTVLr19eOYo6DYTiJEs6VU9MQ6qXLExrKYaMPO1ssQGOqUBd%2BRu%2FTRIWaKHGpH3cdZ2IxmRsTI%2Bw0JX9sDrYW1Emrom%2Brbnx350VqC6nbUUSEihQWLUd6iBF%2Fl3XNiKkZKNYXgiR6maja27cDojx8sLJZ%2BOiITQF84XvM2VbrlG9Qi0tFQKsuGMUj3fJikMqTvdxf0ds8U6CDmmTNFIt1neo2srZ0ARPVOALwn%2B7EIQWvFH4lWWY13VR%2FOrK4MQXpoh2a%2FPfaQZ&X-Amz-Signature=a8e429b2261cc68be70199766c453ad9c2d8f6d0edb6ccb6679630169b4c6c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUIIMWM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJMtQ85OXV3vT%2BfS13mzdiG72HiODdne%2BZ2VL3XpuoZAiEAyP%2BvZjsHIcj1V5U8SLq0LgrngDIYffnVHkSKEF5rTTIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbrHUw%2FlpA%2FPjapqSrcA7FHTdsqnEl45GLWqoUB2HusGsaXOQ%2FnknqgkoI5dDCSeEuMUNHOmmTuV86Gs990OPdmVt%2FW%2FvwSKO0f2JgoRK4juiHWlKzVIF%2FwIJAjPYXmOlcBWZYLnOyj2v9c%2FY9BXTiBUyB2t87WNXyczlw4PPjuFBg4mHIXkyPbjZvW8WRKWOWaa0UK5wQsvTQavdrVZLseYV%2FHIremx%2B3nseF1kuuQM964ogwxMtdY5nIeMLQAjZiF96AXnpfHB7E4Ki0Cl%2F9vwapyqahH1cOE%2BqdkhH0i2gZtAC%2B%2FHSPFQqRcjeU5u%2Fs9AU3zM%2FAhQ509olueMI3fu4TQnUlgl8nE4tTKjDFmJjy6Sr0ZWGtyWgprDNtQlINW1bj6FmHyOVFm5uNBZm%2FLPVroFamPiuw3Yhja0s9NVa7rhEo2kZdpxN6UKPNHjrBxeYomaqQuWY5wmD48oKW7wWzYavbdpcMDq1xHIXb5jm0oyq08rZxRoCItab0%2F%2FzE41eIIlQEmv7Fb3ifGi0vawQLmXc5sQGU8xn7rySYa9kZFOSP3v5gVhzrl1Ug5hnR8mOt5DtbJzPA3%2BZO5yVDBsLqJuxd2Pp%2FylCeAkj9GZkTVLr19eOYo6DYTiJEs6VU9MQ6qXLExrKYaMPO1ssQGOqUBd%2BRu%2FTRIWaKHGpH3cdZ2IxmRsTI%2Bw0JX9sDrYW1Emrom%2Brbnx350VqC6nbUUSEihQWLUd6iBF%2Fl3XNiKkZKNYXgiR6maja27cDojx8sLJZ%2BOiITQF84XvM2VbrlG9Qi0tFQKsuGMUj3fJikMqTvdxf0ds8U6CDmmTNFIt1neo2srZ0ARPVOALwn%2B7EIQWvFH4lWWY13VR%2FOrK4MQXpoh2a%2FPfaQZ&X-Amz-Signature=3d45a8a65d68ea67d7e3b6839767abdab69ce2db45ceca598a72bc78839b400f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUIIMWM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJMtQ85OXV3vT%2BfS13mzdiG72HiODdne%2BZ2VL3XpuoZAiEAyP%2BvZjsHIcj1V5U8SLq0LgrngDIYffnVHkSKEF5rTTIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbrHUw%2FlpA%2FPjapqSrcA7FHTdsqnEl45GLWqoUB2HusGsaXOQ%2FnknqgkoI5dDCSeEuMUNHOmmTuV86Gs990OPdmVt%2FW%2FvwSKO0f2JgoRK4juiHWlKzVIF%2FwIJAjPYXmOlcBWZYLnOyj2v9c%2FY9BXTiBUyB2t87WNXyczlw4PPjuFBg4mHIXkyPbjZvW8WRKWOWaa0UK5wQsvTQavdrVZLseYV%2FHIremx%2B3nseF1kuuQM964ogwxMtdY5nIeMLQAjZiF96AXnpfHB7E4Ki0Cl%2F9vwapyqahH1cOE%2BqdkhH0i2gZtAC%2B%2FHSPFQqRcjeU5u%2Fs9AU3zM%2FAhQ509olueMI3fu4TQnUlgl8nE4tTKjDFmJjy6Sr0ZWGtyWgprDNtQlINW1bj6FmHyOVFm5uNBZm%2FLPVroFamPiuw3Yhja0s9NVa7rhEo2kZdpxN6UKPNHjrBxeYomaqQuWY5wmD48oKW7wWzYavbdpcMDq1xHIXb5jm0oyq08rZxRoCItab0%2F%2FzE41eIIlQEmv7Fb3ifGi0vawQLmXc5sQGU8xn7rySYa9kZFOSP3v5gVhzrl1Ug5hnR8mOt5DtbJzPA3%2BZO5yVDBsLqJuxd2Pp%2FylCeAkj9GZkTVLr19eOYo6DYTiJEs6VU9MQ6qXLExrKYaMPO1ssQGOqUBd%2BRu%2FTRIWaKHGpH3cdZ2IxmRsTI%2Bw0JX9sDrYW1Emrom%2Brbnx350VqC6nbUUSEihQWLUd6iBF%2Fl3XNiKkZKNYXgiR6maja27cDojx8sLJZ%2BOiITQF84XvM2VbrlG9Qi0tFQKsuGMUj3fJikMqTvdxf0ds8U6CDmmTNFIt1neo2srZ0ARPVOALwn%2B7EIQWvFH4lWWY13VR%2FOrK4MQXpoh2a%2FPfaQZ&X-Amz-Signature=2f593e446534dee67dee4c31ac96f13965327fdb69b7349647a641c4a562599d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUIIMWM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJMtQ85OXV3vT%2BfS13mzdiG72HiODdne%2BZ2VL3XpuoZAiEAyP%2BvZjsHIcj1V5U8SLq0LgrngDIYffnVHkSKEF5rTTIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbrHUw%2FlpA%2FPjapqSrcA7FHTdsqnEl45GLWqoUB2HusGsaXOQ%2FnknqgkoI5dDCSeEuMUNHOmmTuV86Gs990OPdmVt%2FW%2FvwSKO0f2JgoRK4juiHWlKzVIF%2FwIJAjPYXmOlcBWZYLnOyj2v9c%2FY9BXTiBUyB2t87WNXyczlw4PPjuFBg4mHIXkyPbjZvW8WRKWOWaa0UK5wQsvTQavdrVZLseYV%2FHIremx%2B3nseF1kuuQM964ogwxMtdY5nIeMLQAjZiF96AXnpfHB7E4Ki0Cl%2F9vwapyqahH1cOE%2BqdkhH0i2gZtAC%2B%2FHSPFQqRcjeU5u%2Fs9AU3zM%2FAhQ509olueMI3fu4TQnUlgl8nE4tTKjDFmJjy6Sr0ZWGtyWgprDNtQlINW1bj6FmHyOVFm5uNBZm%2FLPVroFamPiuw3Yhja0s9NVa7rhEo2kZdpxN6UKPNHjrBxeYomaqQuWY5wmD48oKW7wWzYavbdpcMDq1xHIXb5jm0oyq08rZxRoCItab0%2F%2FzE41eIIlQEmv7Fb3ifGi0vawQLmXc5sQGU8xn7rySYa9kZFOSP3v5gVhzrl1Ug5hnR8mOt5DtbJzPA3%2BZO5yVDBsLqJuxd2Pp%2FylCeAkj9GZkTVLr19eOYo6DYTiJEs6VU9MQ6qXLExrKYaMPO1ssQGOqUBd%2BRu%2FTRIWaKHGpH3cdZ2IxmRsTI%2Bw0JX9sDrYW1Emrom%2Brbnx350VqC6nbUUSEihQWLUd6iBF%2Fl3XNiKkZKNYXgiR6maja27cDojx8sLJZ%2BOiITQF84XvM2VbrlG9Qi0tFQKsuGMUj3fJikMqTvdxf0ds8U6CDmmTNFIt1neo2srZ0ARPVOALwn%2B7EIQWvFH4lWWY13VR%2FOrK4MQXpoh2a%2FPfaQZ&X-Amz-Signature=8b83885165be7d8e620c5ec968a8ad6b831eab16ab746719e27beb40b919fa57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUIIMWM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJMtQ85OXV3vT%2BfS13mzdiG72HiODdne%2BZ2VL3XpuoZAiEAyP%2BvZjsHIcj1V5U8SLq0LgrngDIYffnVHkSKEF5rTTIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbrHUw%2FlpA%2FPjapqSrcA7FHTdsqnEl45GLWqoUB2HusGsaXOQ%2FnknqgkoI5dDCSeEuMUNHOmmTuV86Gs990OPdmVt%2FW%2FvwSKO0f2JgoRK4juiHWlKzVIF%2FwIJAjPYXmOlcBWZYLnOyj2v9c%2FY9BXTiBUyB2t87WNXyczlw4PPjuFBg4mHIXkyPbjZvW8WRKWOWaa0UK5wQsvTQavdrVZLseYV%2FHIremx%2B3nseF1kuuQM964ogwxMtdY5nIeMLQAjZiF96AXnpfHB7E4Ki0Cl%2F9vwapyqahH1cOE%2BqdkhH0i2gZtAC%2B%2FHSPFQqRcjeU5u%2Fs9AU3zM%2FAhQ509olueMI3fu4TQnUlgl8nE4tTKjDFmJjy6Sr0ZWGtyWgprDNtQlINW1bj6FmHyOVFm5uNBZm%2FLPVroFamPiuw3Yhja0s9NVa7rhEo2kZdpxN6UKPNHjrBxeYomaqQuWY5wmD48oKW7wWzYavbdpcMDq1xHIXb5jm0oyq08rZxRoCItab0%2F%2FzE41eIIlQEmv7Fb3ifGi0vawQLmXc5sQGU8xn7rySYa9kZFOSP3v5gVhzrl1Ug5hnR8mOt5DtbJzPA3%2BZO5yVDBsLqJuxd2Pp%2FylCeAkj9GZkTVLr19eOYo6DYTiJEs6VU9MQ6qXLExrKYaMPO1ssQGOqUBd%2BRu%2FTRIWaKHGpH3cdZ2IxmRsTI%2Bw0JX9sDrYW1Emrom%2Brbnx350VqC6nbUUSEihQWLUd6iBF%2Fl3XNiKkZKNYXgiR6maja27cDojx8sLJZ%2BOiITQF84XvM2VbrlG9Qi0tFQKsuGMUj3fJikMqTvdxf0ds8U6CDmmTNFIt1neo2srZ0ARPVOALwn%2B7EIQWvFH4lWWY13VR%2FOrK4MQXpoh2a%2FPfaQZ&X-Amz-Signature=861ef7e564cbf5bd0b5270bb1501c8599c93ed67b02223ad2e70bd1b21cdfb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
