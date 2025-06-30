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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F624RIK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBzxD42tzzx2D5TZBC1truAXPGyVl8cXhePuBWlWWeFgIhAL7rhQTv1nEqPOOzXqgF3HvYXQZEi71juk1v%2BEEEIb7NKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrs%2F2B5M%2FepTItSq8q3ANu%2BB2Wt5MwuKHWs9CIp48bEpG75oFli%2BJj1eo1k9uNdD%2BKSYBvT12svUKu2eA1vI6LNRCGvydQutlH2Fw%2BWOAUOlDKYmRTBm40DTumlYsGE6NtEDLuyc0MpMf7xV3zhUBepHfQCi95QPLWwusXMhhATt8OomArtOPY21wzGzMK2TLwRA7Qj4FVqf5PQ9O1jbQz6VX%2BdUU2UKk3Ao6vITaqtWdPn9pnVbjSPZpVdCicTx2s%2FC1OdikeRIqttng6TTEq1nSa84S%2Be%2BxUpTX4eqwwsUz5oPEy7%2B3cL1LLYXlwwrtpnWJqOHtEO%2BJ17N6UX%2FOdE74kK%2BaZ%2BMWdbCSLCun3VnDmiAMLJONScnrgbrh8td17yOXK4fVYO9l9jpEv4XbCL%2BNubxqY1GwnU8V2m0oMaiuoAzdpJLJYZJAP311rfVvD%2F1rQO%2BCp9c1lDnFlncsLUugB0D7JPiZsVxUIGr%2Ffk82COcYzu5XybYFAAQhU5GWr9kaOtlebLkpqK8T1Yu4CnZLEe7UG8Z9XzrJ7H2hhUWfAUWsfBwZr2%2BMrPJ6wiRVxoll59vySHbkjMjAUy22445G2d4vOZkyb57NKNLh5NEjI%2BC02Lv%2FY8HHLJ73Z1%2BWQ6Ne1stmnmsRE0zCdo4vDBjqkARChER%2FPA2fS2AWPCuL%2FDxLilANRBQuoHhv%2FkISxE7Iww%2F04%2F6HM3UjYwJbA5H6ZSR38SwKrSdpJs0TMH5eWDPWOftIw0T%2BwAllgOWX%2F%2FKbooT%2BhDQH7louBstOmWsR%2FtWn3gcaBJF49qJdbQ7HpRnEua9Q4vPV2Qbvqm1%2FhTnpNJmCY0jyIeXaqhQBzIJiQWJ2%2FpcZUBPTbyKpFAT9IturEbMZp&X-Amz-Signature=2197de1a9f25e95b80b049aad9ea56efe6322be9e33ccd185d14723e728f7b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F624RIK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBzxD42tzzx2D5TZBC1truAXPGyVl8cXhePuBWlWWeFgIhAL7rhQTv1nEqPOOzXqgF3HvYXQZEi71juk1v%2BEEEIb7NKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrs%2F2B5M%2FepTItSq8q3ANu%2BB2Wt5MwuKHWs9CIp48bEpG75oFli%2BJj1eo1k9uNdD%2BKSYBvT12svUKu2eA1vI6LNRCGvydQutlH2Fw%2BWOAUOlDKYmRTBm40DTumlYsGE6NtEDLuyc0MpMf7xV3zhUBepHfQCi95QPLWwusXMhhATt8OomArtOPY21wzGzMK2TLwRA7Qj4FVqf5PQ9O1jbQz6VX%2BdUU2UKk3Ao6vITaqtWdPn9pnVbjSPZpVdCicTx2s%2FC1OdikeRIqttng6TTEq1nSa84S%2Be%2BxUpTX4eqwwsUz5oPEy7%2B3cL1LLYXlwwrtpnWJqOHtEO%2BJ17N6UX%2FOdE74kK%2BaZ%2BMWdbCSLCun3VnDmiAMLJONScnrgbrh8td17yOXK4fVYO9l9jpEv4XbCL%2BNubxqY1GwnU8V2m0oMaiuoAzdpJLJYZJAP311rfVvD%2F1rQO%2BCp9c1lDnFlncsLUugB0D7JPiZsVxUIGr%2Ffk82COcYzu5XybYFAAQhU5GWr9kaOtlebLkpqK8T1Yu4CnZLEe7UG8Z9XzrJ7H2hhUWfAUWsfBwZr2%2BMrPJ6wiRVxoll59vySHbkjMjAUy22445G2d4vOZkyb57NKNLh5NEjI%2BC02Lv%2FY8HHLJ73Z1%2BWQ6Ne1stmnmsRE0zCdo4vDBjqkARChER%2FPA2fS2AWPCuL%2FDxLilANRBQuoHhv%2FkISxE7Iww%2F04%2F6HM3UjYwJbA5H6ZSR38SwKrSdpJs0TMH5eWDPWOftIw0T%2BwAllgOWX%2F%2FKbooT%2BhDQH7louBstOmWsR%2FtWn3gcaBJF49qJdbQ7HpRnEua9Q4vPV2Qbvqm1%2FhTnpNJmCY0jyIeXaqhQBzIJiQWJ2%2FpcZUBPTbyKpFAT9IturEbMZp&X-Amz-Signature=a151068dc0ea6bd5340bb7d5782976b7cf88cbe7c78eb7fc41e33420ed8f699a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F624RIK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBzxD42tzzx2D5TZBC1truAXPGyVl8cXhePuBWlWWeFgIhAL7rhQTv1nEqPOOzXqgF3HvYXQZEi71juk1v%2BEEEIb7NKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrs%2F2B5M%2FepTItSq8q3ANu%2BB2Wt5MwuKHWs9CIp48bEpG75oFli%2BJj1eo1k9uNdD%2BKSYBvT12svUKu2eA1vI6LNRCGvydQutlH2Fw%2BWOAUOlDKYmRTBm40DTumlYsGE6NtEDLuyc0MpMf7xV3zhUBepHfQCi95QPLWwusXMhhATt8OomArtOPY21wzGzMK2TLwRA7Qj4FVqf5PQ9O1jbQz6VX%2BdUU2UKk3Ao6vITaqtWdPn9pnVbjSPZpVdCicTx2s%2FC1OdikeRIqttng6TTEq1nSa84S%2Be%2BxUpTX4eqwwsUz5oPEy7%2B3cL1LLYXlwwrtpnWJqOHtEO%2BJ17N6UX%2FOdE74kK%2BaZ%2BMWdbCSLCun3VnDmiAMLJONScnrgbrh8td17yOXK4fVYO9l9jpEv4XbCL%2BNubxqY1GwnU8V2m0oMaiuoAzdpJLJYZJAP311rfVvD%2F1rQO%2BCp9c1lDnFlncsLUugB0D7JPiZsVxUIGr%2Ffk82COcYzu5XybYFAAQhU5GWr9kaOtlebLkpqK8T1Yu4CnZLEe7UG8Z9XzrJ7H2hhUWfAUWsfBwZr2%2BMrPJ6wiRVxoll59vySHbkjMjAUy22445G2d4vOZkyb57NKNLh5NEjI%2BC02Lv%2FY8HHLJ73Z1%2BWQ6Ne1stmnmsRE0zCdo4vDBjqkARChER%2FPA2fS2AWPCuL%2FDxLilANRBQuoHhv%2FkISxE7Iww%2F04%2F6HM3UjYwJbA5H6ZSR38SwKrSdpJs0TMH5eWDPWOftIw0T%2BwAllgOWX%2F%2FKbooT%2BhDQH7louBstOmWsR%2FtWn3gcaBJF49qJdbQ7HpRnEua9Q4vPV2Qbvqm1%2FhTnpNJmCY0jyIeXaqhQBzIJiQWJ2%2FpcZUBPTbyKpFAT9IturEbMZp&X-Amz-Signature=bd431f50ec1971529d9ac10145c4e97c65b1e3eb93d467d9d1893e9a10e2ed32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F624RIK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBzxD42tzzx2D5TZBC1truAXPGyVl8cXhePuBWlWWeFgIhAL7rhQTv1nEqPOOzXqgF3HvYXQZEi71juk1v%2BEEEIb7NKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrs%2F2B5M%2FepTItSq8q3ANu%2BB2Wt5MwuKHWs9CIp48bEpG75oFli%2BJj1eo1k9uNdD%2BKSYBvT12svUKu2eA1vI6LNRCGvydQutlH2Fw%2BWOAUOlDKYmRTBm40DTumlYsGE6NtEDLuyc0MpMf7xV3zhUBepHfQCi95QPLWwusXMhhATt8OomArtOPY21wzGzMK2TLwRA7Qj4FVqf5PQ9O1jbQz6VX%2BdUU2UKk3Ao6vITaqtWdPn9pnVbjSPZpVdCicTx2s%2FC1OdikeRIqttng6TTEq1nSa84S%2Be%2BxUpTX4eqwwsUz5oPEy7%2B3cL1LLYXlwwrtpnWJqOHtEO%2BJ17N6UX%2FOdE74kK%2BaZ%2BMWdbCSLCun3VnDmiAMLJONScnrgbrh8td17yOXK4fVYO9l9jpEv4XbCL%2BNubxqY1GwnU8V2m0oMaiuoAzdpJLJYZJAP311rfVvD%2F1rQO%2BCp9c1lDnFlncsLUugB0D7JPiZsVxUIGr%2Ffk82COcYzu5XybYFAAQhU5GWr9kaOtlebLkpqK8T1Yu4CnZLEe7UG8Z9XzrJ7H2hhUWfAUWsfBwZr2%2BMrPJ6wiRVxoll59vySHbkjMjAUy22445G2d4vOZkyb57NKNLh5NEjI%2BC02Lv%2FY8HHLJ73Z1%2BWQ6Ne1stmnmsRE0zCdo4vDBjqkARChER%2FPA2fS2AWPCuL%2FDxLilANRBQuoHhv%2FkISxE7Iww%2F04%2F6HM3UjYwJbA5H6ZSR38SwKrSdpJs0TMH5eWDPWOftIw0T%2BwAllgOWX%2F%2FKbooT%2BhDQH7louBstOmWsR%2FtWn3gcaBJF49qJdbQ7HpRnEua9Q4vPV2Qbvqm1%2FhTnpNJmCY0jyIeXaqhQBzIJiQWJ2%2FpcZUBPTbyKpFAT9IturEbMZp&X-Amz-Signature=d465903345e0508c3bcb4b95b0802546e61cb0a373631607df3427bf364f8fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F624RIK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBzxD42tzzx2D5TZBC1truAXPGyVl8cXhePuBWlWWeFgIhAL7rhQTv1nEqPOOzXqgF3HvYXQZEi71juk1v%2BEEEIb7NKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrs%2F2B5M%2FepTItSq8q3ANu%2BB2Wt5MwuKHWs9CIp48bEpG75oFli%2BJj1eo1k9uNdD%2BKSYBvT12svUKu2eA1vI6LNRCGvydQutlH2Fw%2BWOAUOlDKYmRTBm40DTumlYsGE6NtEDLuyc0MpMf7xV3zhUBepHfQCi95QPLWwusXMhhATt8OomArtOPY21wzGzMK2TLwRA7Qj4FVqf5PQ9O1jbQz6VX%2BdUU2UKk3Ao6vITaqtWdPn9pnVbjSPZpVdCicTx2s%2FC1OdikeRIqttng6TTEq1nSa84S%2Be%2BxUpTX4eqwwsUz5oPEy7%2B3cL1LLYXlwwrtpnWJqOHtEO%2BJ17N6UX%2FOdE74kK%2BaZ%2BMWdbCSLCun3VnDmiAMLJONScnrgbrh8td17yOXK4fVYO9l9jpEv4XbCL%2BNubxqY1GwnU8V2m0oMaiuoAzdpJLJYZJAP311rfVvD%2F1rQO%2BCp9c1lDnFlncsLUugB0D7JPiZsVxUIGr%2Ffk82COcYzu5XybYFAAQhU5GWr9kaOtlebLkpqK8T1Yu4CnZLEe7UG8Z9XzrJ7H2hhUWfAUWsfBwZr2%2BMrPJ6wiRVxoll59vySHbkjMjAUy22445G2d4vOZkyb57NKNLh5NEjI%2BC02Lv%2FY8HHLJ73Z1%2BWQ6Ne1stmnmsRE0zCdo4vDBjqkARChER%2FPA2fS2AWPCuL%2FDxLilANRBQuoHhv%2FkISxE7Iww%2F04%2F6HM3UjYwJbA5H6ZSR38SwKrSdpJs0TMH5eWDPWOftIw0T%2BwAllgOWX%2F%2FKbooT%2BhDQH7louBstOmWsR%2FtWn3gcaBJF49qJdbQ7HpRnEua9Q4vPV2Qbvqm1%2FhTnpNJmCY0jyIeXaqhQBzIJiQWJ2%2FpcZUBPTbyKpFAT9IturEbMZp&X-Amz-Signature=63eaf459f83182eb183fe07c0499939414f938a18955432e2617cb1ad4c8cd8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F624RIK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBzxD42tzzx2D5TZBC1truAXPGyVl8cXhePuBWlWWeFgIhAL7rhQTv1nEqPOOzXqgF3HvYXQZEi71juk1v%2BEEEIb7NKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrs%2F2B5M%2FepTItSq8q3ANu%2BB2Wt5MwuKHWs9CIp48bEpG75oFli%2BJj1eo1k9uNdD%2BKSYBvT12svUKu2eA1vI6LNRCGvydQutlH2Fw%2BWOAUOlDKYmRTBm40DTumlYsGE6NtEDLuyc0MpMf7xV3zhUBepHfQCi95QPLWwusXMhhATt8OomArtOPY21wzGzMK2TLwRA7Qj4FVqf5PQ9O1jbQz6VX%2BdUU2UKk3Ao6vITaqtWdPn9pnVbjSPZpVdCicTx2s%2FC1OdikeRIqttng6TTEq1nSa84S%2Be%2BxUpTX4eqwwsUz5oPEy7%2B3cL1LLYXlwwrtpnWJqOHtEO%2BJ17N6UX%2FOdE74kK%2BaZ%2BMWdbCSLCun3VnDmiAMLJONScnrgbrh8td17yOXK4fVYO9l9jpEv4XbCL%2BNubxqY1GwnU8V2m0oMaiuoAzdpJLJYZJAP311rfVvD%2F1rQO%2BCp9c1lDnFlncsLUugB0D7JPiZsVxUIGr%2Ffk82COcYzu5XybYFAAQhU5GWr9kaOtlebLkpqK8T1Yu4CnZLEe7UG8Z9XzrJ7H2hhUWfAUWsfBwZr2%2BMrPJ6wiRVxoll59vySHbkjMjAUy22445G2d4vOZkyb57NKNLh5NEjI%2BC02Lv%2FY8HHLJ73Z1%2BWQ6Ne1stmnmsRE0zCdo4vDBjqkARChER%2FPA2fS2AWPCuL%2FDxLilANRBQuoHhv%2FkISxE7Iww%2F04%2F6HM3UjYwJbA5H6ZSR38SwKrSdpJs0TMH5eWDPWOftIw0T%2BwAllgOWX%2F%2FKbooT%2BhDQH7louBstOmWsR%2FtWn3gcaBJF49qJdbQ7HpRnEua9Q4vPV2Qbvqm1%2FhTnpNJmCY0jyIeXaqhQBzIJiQWJ2%2FpcZUBPTbyKpFAT9IturEbMZp&X-Amz-Signature=a486f9b02e867c5f15bff9b65868033bf26f51b3efd3cf8690abda846d41c449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F624RIK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBzxD42tzzx2D5TZBC1truAXPGyVl8cXhePuBWlWWeFgIhAL7rhQTv1nEqPOOzXqgF3HvYXQZEi71juk1v%2BEEEIb7NKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrs%2F2B5M%2FepTItSq8q3ANu%2BB2Wt5MwuKHWs9CIp48bEpG75oFli%2BJj1eo1k9uNdD%2BKSYBvT12svUKu2eA1vI6LNRCGvydQutlH2Fw%2BWOAUOlDKYmRTBm40DTumlYsGE6NtEDLuyc0MpMf7xV3zhUBepHfQCi95QPLWwusXMhhATt8OomArtOPY21wzGzMK2TLwRA7Qj4FVqf5PQ9O1jbQz6VX%2BdUU2UKk3Ao6vITaqtWdPn9pnVbjSPZpVdCicTx2s%2FC1OdikeRIqttng6TTEq1nSa84S%2Be%2BxUpTX4eqwwsUz5oPEy7%2B3cL1LLYXlwwrtpnWJqOHtEO%2BJ17N6UX%2FOdE74kK%2BaZ%2BMWdbCSLCun3VnDmiAMLJONScnrgbrh8td17yOXK4fVYO9l9jpEv4XbCL%2BNubxqY1GwnU8V2m0oMaiuoAzdpJLJYZJAP311rfVvD%2F1rQO%2BCp9c1lDnFlncsLUugB0D7JPiZsVxUIGr%2Ffk82COcYzu5XybYFAAQhU5GWr9kaOtlebLkpqK8T1Yu4CnZLEe7UG8Z9XzrJ7H2hhUWfAUWsfBwZr2%2BMrPJ6wiRVxoll59vySHbkjMjAUy22445G2d4vOZkyb57NKNLh5NEjI%2BC02Lv%2FY8HHLJ73Z1%2BWQ6Ne1stmnmsRE0zCdo4vDBjqkARChER%2FPA2fS2AWPCuL%2FDxLilANRBQuoHhv%2FkISxE7Iww%2F04%2F6HM3UjYwJbA5H6ZSR38SwKrSdpJs0TMH5eWDPWOftIw0T%2BwAllgOWX%2F%2FKbooT%2BhDQH7louBstOmWsR%2FtWn3gcaBJF49qJdbQ7HpRnEua9Q4vPV2Qbvqm1%2FhTnpNJmCY0jyIeXaqhQBzIJiQWJ2%2FpcZUBPTbyKpFAT9IturEbMZp&X-Amz-Signature=f33cb7e8d453d6317d2c9e923dc25614cc7a3673332e10059145a9cd2db52c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
