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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MODABSZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXChNNbW4i3rRs4PIkLocZ1bSEOCLPNwq4tTpaWC2o5AiEAqUNFtDzsP5T2NHC%2BZSm5DiwJlp518A%2BTSHc3JhvZUjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBuwHCAW1HrIvGJ%2ByrcA%2Fh5QjjfP8lEdp3wJi3r%2BdKlo9Wt1PbLXbDdVkf2xN3nXWuJH9y45XDK95iHu9xolGPGi1Vxg8SqCtkaqTyoXivCUbfBhcMbdYMTuaBk3viqKG4%2Bo0KFI%2FjhpfbpipT%2FH1uMKlsUbRa91AP%2FCN6Ye5fs7%2FbQM%2FLRiPjJLBlQT9tCl%2Bp2pfgu8tKrT3e5WCPKmwNlY2FyE31w%2Fr0fZng74xoGuvJUUDgTaXs6bGcaDPuezyhcom8BvkskswqlZeHwW9vUlSk5WlRsC2N5JkMU9TdDiFc9y3ZIywMKxv2ftPS%2FZpfdOJjKWgAnqqs8Ya2IMKM%2FUffdHal7ka0TtJZAT%2FdzuTPicElUtTzRmHzUGoRUYh4IEDFJS5eE8rsg9CgUCAKA52ti03HW%2FMOfqE7yol9gMfRVWJNnnabDIMRz87VyemEoToE9837qIScm2Gv%2F1OVqYN5LevPZOY%2B0Ag4bNBVSE6OWMsai6zJMI%2B%2BI7SpkH0Uw4jsBRRJhKDToyT11530qagV9IXfB6Nm%2BKuUcwj4FSBibl780al%2Friwg0jYB12sY5V%2FNIsW2zFR3LsoXVpi5XcCdHUNMkiavlAYD4Yl09B97L%2FfRTAzZgre%2Fw2n3AJiaOoPigZzE97WX1MO%2B7jMAGOqUBpdRBB4W9FIuycjmWJk%2BPxQI7%2F9iJIy4iLPcz7yFDNq%2BzqItvfiqWIo2B6qVSM9VhmOz8tRk2v8Dpwp8rRPZIiEGsfdK8r88BV5gAA3tNFmumH5QyrgGvRtIQ%2BWdevl0jmP3pkBzQKYUB92hRg%2Fx44hjLDwamKlzz9IDTISc4loABIxP%2FeuoMlZhhen6ptek8Z439%2B1rD%2FeAnsTYPAnYxPcjeGs6q&X-Amz-Signature=1861a7a33c8f4e10b18014fcf34b9bd5e80a7f773c5f2e9b096ac151c5a1897d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MODABSZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXChNNbW4i3rRs4PIkLocZ1bSEOCLPNwq4tTpaWC2o5AiEAqUNFtDzsP5T2NHC%2BZSm5DiwJlp518A%2BTSHc3JhvZUjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBuwHCAW1HrIvGJ%2ByrcA%2Fh5QjjfP8lEdp3wJi3r%2BdKlo9Wt1PbLXbDdVkf2xN3nXWuJH9y45XDK95iHu9xolGPGi1Vxg8SqCtkaqTyoXivCUbfBhcMbdYMTuaBk3viqKG4%2Bo0KFI%2FjhpfbpipT%2FH1uMKlsUbRa91AP%2FCN6Ye5fs7%2FbQM%2FLRiPjJLBlQT9tCl%2Bp2pfgu8tKrT3e5WCPKmwNlY2FyE31w%2Fr0fZng74xoGuvJUUDgTaXs6bGcaDPuezyhcom8BvkskswqlZeHwW9vUlSk5WlRsC2N5JkMU9TdDiFc9y3ZIywMKxv2ftPS%2FZpfdOJjKWgAnqqs8Ya2IMKM%2FUffdHal7ka0TtJZAT%2FdzuTPicElUtTzRmHzUGoRUYh4IEDFJS5eE8rsg9CgUCAKA52ti03HW%2FMOfqE7yol9gMfRVWJNnnabDIMRz87VyemEoToE9837qIScm2Gv%2F1OVqYN5LevPZOY%2B0Ag4bNBVSE6OWMsai6zJMI%2B%2BI7SpkH0Uw4jsBRRJhKDToyT11530qagV9IXfB6Nm%2BKuUcwj4FSBibl780al%2Friwg0jYB12sY5V%2FNIsW2zFR3LsoXVpi5XcCdHUNMkiavlAYD4Yl09B97L%2FfRTAzZgre%2Fw2n3AJiaOoPigZzE97WX1MO%2B7jMAGOqUBpdRBB4W9FIuycjmWJk%2BPxQI7%2F9iJIy4iLPcz7yFDNq%2BzqItvfiqWIo2B6qVSM9VhmOz8tRk2v8Dpwp8rRPZIiEGsfdK8r88BV5gAA3tNFmumH5QyrgGvRtIQ%2BWdevl0jmP3pkBzQKYUB92hRg%2Fx44hjLDwamKlzz9IDTISc4loABIxP%2FeuoMlZhhen6ptek8Z439%2B1rD%2FeAnsTYPAnYxPcjeGs6q&X-Amz-Signature=f76edaef8d61981daa4f4c9b881b508c598e23ab81dc136fdb43135ad5bbeb3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MODABSZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXChNNbW4i3rRs4PIkLocZ1bSEOCLPNwq4tTpaWC2o5AiEAqUNFtDzsP5T2NHC%2BZSm5DiwJlp518A%2BTSHc3JhvZUjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBuwHCAW1HrIvGJ%2ByrcA%2Fh5QjjfP8lEdp3wJi3r%2BdKlo9Wt1PbLXbDdVkf2xN3nXWuJH9y45XDK95iHu9xolGPGi1Vxg8SqCtkaqTyoXivCUbfBhcMbdYMTuaBk3viqKG4%2Bo0KFI%2FjhpfbpipT%2FH1uMKlsUbRa91AP%2FCN6Ye5fs7%2FbQM%2FLRiPjJLBlQT9tCl%2Bp2pfgu8tKrT3e5WCPKmwNlY2FyE31w%2Fr0fZng74xoGuvJUUDgTaXs6bGcaDPuezyhcom8BvkskswqlZeHwW9vUlSk5WlRsC2N5JkMU9TdDiFc9y3ZIywMKxv2ftPS%2FZpfdOJjKWgAnqqs8Ya2IMKM%2FUffdHal7ka0TtJZAT%2FdzuTPicElUtTzRmHzUGoRUYh4IEDFJS5eE8rsg9CgUCAKA52ti03HW%2FMOfqE7yol9gMfRVWJNnnabDIMRz87VyemEoToE9837qIScm2Gv%2F1OVqYN5LevPZOY%2B0Ag4bNBVSE6OWMsai6zJMI%2B%2BI7SpkH0Uw4jsBRRJhKDToyT11530qagV9IXfB6Nm%2BKuUcwj4FSBibl780al%2Friwg0jYB12sY5V%2FNIsW2zFR3LsoXVpi5XcCdHUNMkiavlAYD4Yl09B97L%2FfRTAzZgre%2Fw2n3AJiaOoPigZzE97WX1MO%2B7jMAGOqUBpdRBB4W9FIuycjmWJk%2BPxQI7%2F9iJIy4iLPcz7yFDNq%2BzqItvfiqWIo2B6qVSM9VhmOz8tRk2v8Dpwp8rRPZIiEGsfdK8r88BV5gAA3tNFmumH5QyrgGvRtIQ%2BWdevl0jmP3pkBzQKYUB92hRg%2Fx44hjLDwamKlzz9IDTISc4loABIxP%2FeuoMlZhhen6ptek8Z439%2B1rD%2FeAnsTYPAnYxPcjeGs6q&X-Amz-Signature=686d15be8092987d59d76fd24682a8e1f4f11345ef749bc50394771d4643fd45&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MODABSZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXChNNbW4i3rRs4PIkLocZ1bSEOCLPNwq4tTpaWC2o5AiEAqUNFtDzsP5T2NHC%2BZSm5DiwJlp518A%2BTSHc3JhvZUjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBuwHCAW1HrIvGJ%2ByrcA%2Fh5QjjfP8lEdp3wJi3r%2BdKlo9Wt1PbLXbDdVkf2xN3nXWuJH9y45XDK95iHu9xolGPGi1Vxg8SqCtkaqTyoXivCUbfBhcMbdYMTuaBk3viqKG4%2Bo0KFI%2FjhpfbpipT%2FH1uMKlsUbRa91AP%2FCN6Ye5fs7%2FbQM%2FLRiPjJLBlQT9tCl%2Bp2pfgu8tKrT3e5WCPKmwNlY2FyE31w%2Fr0fZng74xoGuvJUUDgTaXs6bGcaDPuezyhcom8BvkskswqlZeHwW9vUlSk5WlRsC2N5JkMU9TdDiFc9y3ZIywMKxv2ftPS%2FZpfdOJjKWgAnqqs8Ya2IMKM%2FUffdHal7ka0TtJZAT%2FdzuTPicElUtTzRmHzUGoRUYh4IEDFJS5eE8rsg9CgUCAKA52ti03HW%2FMOfqE7yol9gMfRVWJNnnabDIMRz87VyemEoToE9837qIScm2Gv%2F1OVqYN5LevPZOY%2B0Ag4bNBVSE6OWMsai6zJMI%2B%2BI7SpkH0Uw4jsBRRJhKDToyT11530qagV9IXfB6Nm%2BKuUcwj4FSBibl780al%2Friwg0jYB12sY5V%2FNIsW2zFR3LsoXVpi5XcCdHUNMkiavlAYD4Yl09B97L%2FfRTAzZgre%2Fw2n3AJiaOoPigZzE97WX1MO%2B7jMAGOqUBpdRBB4W9FIuycjmWJk%2BPxQI7%2F9iJIy4iLPcz7yFDNq%2BzqItvfiqWIo2B6qVSM9VhmOz8tRk2v8Dpwp8rRPZIiEGsfdK8r88BV5gAA3tNFmumH5QyrgGvRtIQ%2BWdevl0jmP3pkBzQKYUB92hRg%2Fx44hjLDwamKlzz9IDTISc4loABIxP%2FeuoMlZhhen6ptek8Z439%2B1rD%2FeAnsTYPAnYxPcjeGs6q&X-Amz-Signature=45e6bdfbcad7273efea0fc4e540a670c7a42f0ae2d09f8b2950ae59f98c430f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MODABSZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXChNNbW4i3rRs4PIkLocZ1bSEOCLPNwq4tTpaWC2o5AiEAqUNFtDzsP5T2NHC%2BZSm5DiwJlp518A%2BTSHc3JhvZUjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBuwHCAW1HrIvGJ%2ByrcA%2Fh5QjjfP8lEdp3wJi3r%2BdKlo9Wt1PbLXbDdVkf2xN3nXWuJH9y45XDK95iHu9xolGPGi1Vxg8SqCtkaqTyoXivCUbfBhcMbdYMTuaBk3viqKG4%2Bo0KFI%2FjhpfbpipT%2FH1uMKlsUbRa91AP%2FCN6Ye5fs7%2FbQM%2FLRiPjJLBlQT9tCl%2Bp2pfgu8tKrT3e5WCPKmwNlY2FyE31w%2Fr0fZng74xoGuvJUUDgTaXs6bGcaDPuezyhcom8BvkskswqlZeHwW9vUlSk5WlRsC2N5JkMU9TdDiFc9y3ZIywMKxv2ftPS%2FZpfdOJjKWgAnqqs8Ya2IMKM%2FUffdHal7ka0TtJZAT%2FdzuTPicElUtTzRmHzUGoRUYh4IEDFJS5eE8rsg9CgUCAKA52ti03HW%2FMOfqE7yol9gMfRVWJNnnabDIMRz87VyemEoToE9837qIScm2Gv%2F1OVqYN5LevPZOY%2B0Ag4bNBVSE6OWMsai6zJMI%2B%2BI7SpkH0Uw4jsBRRJhKDToyT11530qagV9IXfB6Nm%2BKuUcwj4FSBibl780al%2Friwg0jYB12sY5V%2FNIsW2zFR3LsoXVpi5XcCdHUNMkiavlAYD4Yl09B97L%2FfRTAzZgre%2Fw2n3AJiaOoPigZzE97WX1MO%2B7jMAGOqUBpdRBB4W9FIuycjmWJk%2BPxQI7%2F9iJIy4iLPcz7yFDNq%2BzqItvfiqWIo2B6qVSM9VhmOz8tRk2v8Dpwp8rRPZIiEGsfdK8r88BV5gAA3tNFmumH5QyrgGvRtIQ%2BWdevl0jmP3pkBzQKYUB92hRg%2Fx44hjLDwamKlzz9IDTISc4loABIxP%2FeuoMlZhhen6ptek8Z439%2B1rD%2FeAnsTYPAnYxPcjeGs6q&X-Amz-Signature=9c2c65a3204d2ec12979e17b00306a8a854202c513d9b9c1774f357084276602&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MODABSZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXChNNbW4i3rRs4PIkLocZ1bSEOCLPNwq4tTpaWC2o5AiEAqUNFtDzsP5T2NHC%2BZSm5DiwJlp518A%2BTSHc3JhvZUjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBuwHCAW1HrIvGJ%2ByrcA%2Fh5QjjfP8lEdp3wJi3r%2BdKlo9Wt1PbLXbDdVkf2xN3nXWuJH9y45XDK95iHu9xolGPGi1Vxg8SqCtkaqTyoXivCUbfBhcMbdYMTuaBk3viqKG4%2Bo0KFI%2FjhpfbpipT%2FH1uMKlsUbRa91AP%2FCN6Ye5fs7%2FbQM%2FLRiPjJLBlQT9tCl%2Bp2pfgu8tKrT3e5WCPKmwNlY2FyE31w%2Fr0fZng74xoGuvJUUDgTaXs6bGcaDPuezyhcom8BvkskswqlZeHwW9vUlSk5WlRsC2N5JkMU9TdDiFc9y3ZIywMKxv2ftPS%2FZpfdOJjKWgAnqqs8Ya2IMKM%2FUffdHal7ka0TtJZAT%2FdzuTPicElUtTzRmHzUGoRUYh4IEDFJS5eE8rsg9CgUCAKA52ti03HW%2FMOfqE7yol9gMfRVWJNnnabDIMRz87VyemEoToE9837qIScm2Gv%2F1OVqYN5LevPZOY%2B0Ag4bNBVSE6OWMsai6zJMI%2B%2BI7SpkH0Uw4jsBRRJhKDToyT11530qagV9IXfB6Nm%2BKuUcwj4FSBibl780al%2Friwg0jYB12sY5V%2FNIsW2zFR3LsoXVpi5XcCdHUNMkiavlAYD4Yl09B97L%2FfRTAzZgre%2Fw2n3AJiaOoPigZzE97WX1MO%2B7jMAGOqUBpdRBB4W9FIuycjmWJk%2BPxQI7%2F9iJIy4iLPcz7yFDNq%2BzqItvfiqWIo2B6qVSM9VhmOz8tRk2v8Dpwp8rRPZIiEGsfdK8r88BV5gAA3tNFmumH5QyrgGvRtIQ%2BWdevl0jmP3pkBzQKYUB92hRg%2Fx44hjLDwamKlzz9IDTISc4loABIxP%2FeuoMlZhhen6ptek8Z439%2B1rD%2FeAnsTYPAnYxPcjeGs6q&X-Amz-Signature=5d58cf687ba7a0a3480f9924ea06a840548182fd72012bf87afaf666d95d4dda&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MODABSZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXChNNbW4i3rRs4PIkLocZ1bSEOCLPNwq4tTpaWC2o5AiEAqUNFtDzsP5T2NHC%2BZSm5DiwJlp518A%2BTSHc3JhvZUjAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBuwHCAW1HrIvGJ%2ByrcA%2Fh5QjjfP8lEdp3wJi3r%2BdKlo9Wt1PbLXbDdVkf2xN3nXWuJH9y45XDK95iHu9xolGPGi1Vxg8SqCtkaqTyoXivCUbfBhcMbdYMTuaBk3viqKG4%2Bo0KFI%2FjhpfbpipT%2FH1uMKlsUbRa91AP%2FCN6Ye5fs7%2FbQM%2FLRiPjJLBlQT9tCl%2Bp2pfgu8tKrT3e5WCPKmwNlY2FyE31w%2Fr0fZng74xoGuvJUUDgTaXs6bGcaDPuezyhcom8BvkskswqlZeHwW9vUlSk5WlRsC2N5JkMU9TdDiFc9y3ZIywMKxv2ftPS%2FZpfdOJjKWgAnqqs8Ya2IMKM%2FUffdHal7ka0TtJZAT%2FdzuTPicElUtTzRmHzUGoRUYh4IEDFJS5eE8rsg9CgUCAKA52ti03HW%2FMOfqE7yol9gMfRVWJNnnabDIMRz87VyemEoToE9837qIScm2Gv%2F1OVqYN5LevPZOY%2B0Ag4bNBVSE6OWMsai6zJMI%2B%2BI7SpkH0Uw4jsBRRJhKDToyT11530qagV9IXfB6Nm%2BKuUcwj4FSBibl780al%2Friwg0jYB12sY5V%2FNIsW2zFR3LsoXVpi5XcCdHUNMkiavlAYD4Yl09B97L%2FfRTAzZgre%2Fw2n3AJiaOoPigZzE97WX1MO%2B7jMAGOqUBpdRBB4W9FIuycjmWJk%2BPxQI7%2F9iJIy4iLPcz7yFDNq%2BzqItvfiqWIo2B6qVSM9VhmOz8tRk2v8Dpwp8rRPZIiEGsfdK8r88BV5gAA3tNFmumH5QyrgGvRtIQ%2BWdevl0jmP3pkBzQKYUB92hRg%2Fx44hjLDwamKlzz9IDTISc4loABIxP%2FeuoMlZhhen6ptek8Z439%2B1rD%2FeAnsTYPAnYxPcjeGs6q&X-Amz-Signature=0bc1684ae906b8c71cd674776aa8ab3b46a7db7abd79074246da31f9bdaf3276&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
