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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2TAA5J%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BexDDzJQTvAuFFyydz1oANZ%2Biv9tNJO8sTIDVgEH6hQIhANeEbOhyizR%2BLqX%2FOGUQSDQsQMeia7WimqNXuAP9wTC9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMDRqmuzgkVpQu2Wwq3ANq0mHfLts621dnAAcZIQPSQTX9urMmLXfUte2CKvpoxFq1I5jwS00%2B43P678JP4fx3q9qbZYMtHvFIFN2B40wDwPSYBc%2B%2BbPGBGQGMwkBSzk4V4%2B5TObXOTYIB%2FkRClTs6EjTVpk6jMlljQndx%2B4q76kjPVRsmjp0SQTJidfD3PhhUOt98DKW9n7HB9%2FSk6l7bBZso15O9z2MLUXz8S0pMSe2uMGRkaYcihA9moJdoiaEEsBbYmHYg9GCWhAK5CIMbK55IyUr5S5pHXxwWQYPql2ITuZ1LWHG0eiQQTRn6g8BJeKDfrZYJezeYXdvVaZBzFoS%2BQUUmmzwfWxCQEc7Tcfi4964Xz19LYTyhsEPVsxMtdDgHUDnTdF6VCn2%2FBITjCiP1R1EKe85%2BHsDZ2qR5yo%2F0%2B%2BbzbI1736UlgqZJJ%2BDvQW16LP9KvFLyNwa3ohNO3R3deRh5GIk216sEqvnSfWMHft%2FjS6dK3PUJe%2BNo9Oz0IwCqjQxl8hxyD7z88Re3bJxcDdkJD%2B1sTnqj%2BXF%2FHVoHeGgGFgIdaXietDX94847OZY8uucIj40JdxvhxPN0gXZ1qX1SdZ8UCEsHhbFSM%2FdDvqj0UdAtw1r5c7%2FKdFaLWgFmtU6%2F8kQdLjDL9tO9BjqkATHfajvocIRTPH9O57fZt2C7TSltM1g7N2uuLJiEoRBveh5vlQKMtlaVNWzSXIpxtJKqp8YFU%2FleU%2F%2B81Tzc7veVP%2FQStmHDWVyyNI9avJnoJlAwTBG0Ink8wxUSMZj2HBuLySiY6o2vcwo2Ety3mNjs%2BRMlNNSdBbGxmTVGnHaWsPTTStiD%2BunvC8cppuFQZcne7Dj5PATUbxd%2FJp1EWwUpsrZ9&X-Amz-Signature=4677defb1acdd0f571f6a4f2378c00179ed1857a90530fa01bffa1a5f42af7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2TAA5J%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BexDDzJQTvAuFFyydz1oANZ%2Biv9tNJO8sTIDVgEH6hQIhANeEbOhyizR%2BLqX%2FOGUQSDQsQMeia7WimqNXuAP9wTC9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMDRqmuzgkVpQu2Wwq3ANq0mHfLts621dnAAcZIQPSQTX9urMmLXfUte2CKvpoxFq1I5jwS00%2B43P678JP4fx3q9qbZYMtHvFIFN2B40wDwPSYBc%2B%2BbPGBGQGMwkBSzk4V4%2B5TObXOTYIB%2FkRClTs6EjTVpk6jMlljQndx%2B4q76kjPVRsmjp0SQTJidfD3PhhUOt98DKW9n7HB9%2FSk6l7bBZso15O9z2MLUXz8S0pMSe2uMGRkaYcihA9moJdoiaEEsBbYmHYg9GCWhAK5CIMbK55IyUr5S5pHXxwWQYPql2ITuZ1LWHG0eiQQTRn6g8BJeKDfrZYJezeYXdvVaZBzFoS%2BQUUmmzwfWxCQEc7Tcfi4964Xz19LYTyhsEPVsxMtdDgHUDnTdF6VCn2%2FBITjCiP1R1EKe85%2BHsDZ2qR5yo%2F0%2B%2BbzbI1736UlgqZJJ%2BDvQW16LP9KvFLyNwa3ohNO3R3deRh5GIk216sEqvnSfWMHft%2FjS6dK3PUJe%2BNo9Oz0IwCqjQxl8hxyD7z88Re3bJxcDdkJD%2B1sTnqj%2BXF%2FHVoHeGgGFgIdaXietDX94847OZY8uucIj40JdxvhxPN0gXZ1qX1SdZ8UCEsHhbFSM%2FdDvqj0UdAtw1r5c7%2FKdFaLWgFmtU6%2F8kQdLjDL9tO9BjqkATHfajvocIRTPH9O57fZt2C7TSltM1g7N2uuLJiEoRBveh5vlQKMtlaVNWzSXIpxtJKqp8YFU%2FleU%2F%2B81Tzc7veVP%2FQStmHDWVyyNI9avJnoJlAwTBG0Ink8wxUSMZj2HBuLySiY6o2vcwo2Ety3mNjs%2BRMlNNSdBbGxmTVGnHaWsPTTStiD%2BunvC8cppuFQZcne7Dj5PATUbxd%2FJp1EWwUpsrZ9&X-Amz-Signature=a17e66ef0f233ca83690748144fbfd0d7a73988adb6526b24eaedbcdca46a811&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2TAA5J%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BexDDzJQTvAuFFyydz1oANZ%2Biv9tNJO8sTIDVgEH6hQIhANeEbOhyizR%2BLqX%2FOGUQSDQsQMeia7WimqNXuAP9wTC9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMDRqmuzgkVpQu2Wwq3ANq0mHfLts621dnAAcZIQPSQTX9urMmLXfUte2CKvpoxFq1I5jwS00%2B43P678JP4fx3q9qbZYMtHvFIFN2B40wDwPSYBc%2B%2BbPGBGQGMwkBSzk4V4%2B5TObXOTYIB%2FkRClTs6EjTVpk6jMlljQndx%2B4q76kjPVRsmjp0SQTJidfD3PhhUOt98DKW9n7HB9%2FSk6l7bBZso15O9z2MLUXz8S0pMSe2uMGRkaYcihA9moJdoiaEEsBbYmHYg9GCWhAK5CIMbK55IyUr5S5pHXxwWQYPql2ITuZ1LWHG0eiQQTRn6g8BJeKDfrZYJezeYXdvVaZBzFoS%2BQUUmmzwfWxCQEc7Tcfi4964Xz19LYTyhsEPVsxMtdDgHUDnTdF6VCn2%2FBITjCiP1R1EKe85%2BHsDZ2qR5yo%2F0%2B%2BbzbI1736UlgqZJJ%2BDvQW16LP9KvFLyNwa3ohNO3R3deRh5GIk216sEqvnSfWMHft%2FjS6dK3PUJe%2BNo9Oz0IwCqjQxl8hxyD7z88Re3bJxcDdkJD%2B1sTnqj%2BXF%2FHVoHeGgGFgIdaXietDX94847OZY8uucIj40JdxvhxPN0gXZ1qX1SdZ8UCEsHhbFSM%2FdDvqj0UdAtw1r5c7%2FKdFaLWgFmtU6%2F8kQdLjDL9tO9BjqkATHfajvocIRTPH9O57fZt2C7TSltM1g7N2uuLJiEoRBveh5vlQKMtlaVNWzSXIpxtJKqp8YFU%2FleU%2F%2B81Tzc7veVP%2FQStmHDWVyyNI9avJnoJlAwTBG0Ink8wxUSMZj2HBuLySiY6o2vcwo2Ety3mNjs%2BRMlNNSdBbGxmTVGnHaWsPTTStiD%2BunvC8cppuFQZcne7Dj5PATUbxd%2FJp1EWwUpsrZ9&X-Amz-Signature=9662455b8e246ba75c9aa1688e7c3163483bfe1bed954580ae86486f903d5a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2TAA5J%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BexDDzJQTvAuFFyydz1oANZ%2Biv9tNJO8sTIDVgEH6hQIhANeEbOhyizR%2BLqX%2FOGUQSDQsQMeia7WimqNXuAP9wTC9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMDRqmuzgkVpQu2Wwq3ANq0mHfLts621dnAAcZIQPSQTX9urMmLXfUte2CKvpoxFq1I5jwS00%2B43P678JP4fx3q9qbZYMtHvFIFN2B40wDwPSYBc%2B%2BbPGBGQGMwkBSzk4V4%2B5TObXOTYIB%2FkRClTs6EjTVpk6jMlljQndx%2B4q76kjPVRsmjp0SQTJidfD3PhhUOt98DKW9n7HB9%2FSk6l7bBZso15O9z2MLUXz8S0pMSe2uMGRkaYcihA9moJdoiaEEsBbYmHYg9GCWhAK5CIMbK55IyUr5S5pHXxwWQYPql2ITuZ1LWHG0eiQQTRn6g8BJeKDfrZYJezeYXdvVaZBzFoS%2BQUUmmzwfWxCQEc7Tcfi4964Xz19LYTyhsEPVsxMtdDgHUDnTdF6VCn2%2FBITjCiP1R1EKe85%2BHsDZ2qR5yo%2F0%2B%2BbzbI1736UlgqZJJ%2BDvQW16LP9KvFLyNwa3ohNO3R3deRh5GIk216sEqvnSfWMHft%2FjS6dK3PUJe%2BNo9Oz0IwCqjQxl8hxyD7z88Re3bJxcDdkJD%2B1sTnqj%2BXF%2FHVoHeGgGFgIdaXietDX94847OZY8uucIj40JdxvhxPN0gXZ1qX1SdZ8UCEsHhbFSM%2FdDvqj0UdAtw1r5c7%2FKdFaLWgFmtU6%2F8kQdLjDL9tO9BjqkATHfajvocIRTPH9O57fZt2C7TSltM1g7N2uuLJiEoRBveh5vlQKMtlaVNWzSXIpxtJKqp8YFU%2FleU%2F%2B81Tzc7veVP%2FQStmHDWVyyNI9avJnoJlAwTBG0Ink8wxUSMZj2HBuLySiY6o2vcwo2Ety3mNjs%2BRMlNNSdBbGxmTVGnHaWsPTTStiD%2BunvC8cppuFQZcne7Dj5PATUbxd%2FJp1EWwUpsrZ9&X-Amz-Signature=f80f0ab59f58d19a1b085fd8b677bdb7e294c99f19bf0a3e1f904076b62a89e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2TAA5J%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BexDDzJQTvAuFFyydz1oANZ%2Biv9tNJO8sTIDVgEH6hQIhANeEbOhyizR%2BLqX%2FOGUQSDQsQMeia7WimqNXuAP9wTC9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMDRqmuzgkVpQu2Wwq3ANq0mHfLts621dnAAcZIQPSQTX9urMmLXfUte2CKvpoxFq1I5jwS00%2B43P678JP4fx3q9qbZYMtHvFIFN2B40wDwPSYBc%2B%2BbPGBGQGMwkBSzk4V4%2B5TObXOTYIB%2FkRClTs6EjTVpk6jMlljQndx%2B4q76kjPVRsmjp0SQTJidfD3PhhUOt98DKW9n7HB9%2FSk6l7bBZso15O9z2MLUXz8S0pMSe2uMGRkaYcihA9moJdoiaEEsBbYmHYg9GCWhAK5CIMbK55IyUr5S5pHXxwWQYPql2ITuZ1LWHG0eiQQTRn6g8BJeKDfrZYJezeYXdvVaZBzFoS%2BQUUmmzwfWxCQEc7Tcfi4964Xz19LYTyhsEPVsxMtdDgHUDnTdF6VCn2%2FBITjCiP1R1EKe85%2BHsDZ2qR5yo%2F0%2B%2BbzbI1736UlgqZJJ%2BDvQW16LP9KvFLyNwa3ohNO3R3deRh5GIk216sEqvnSfWMHft%2FjS6dK3PUJe%2BNo9Oz0IwCqjQxl8hxyD7z88Re3bJxcDdkJD%2B1sTnqj%2BXF%2FHVoHeGgGFgIdaXietDX94847OZY8uucIj40JdxvhxPN0gXZ1qX1SdZ8UCEsHhbFSM%2FdDvqj0UdAtw1r5c7%2FKdFaLWgFmtU6%2F8kQdLjDL9tO9BjqkATHfajvocIRTPH9O57fZt2C7TSltM1g7N2uuLJiEoRBveh5vlQKMtlaVNWzSXIpxtJKqp8YFU%2FleU%2F%2B81Tzc7veVP%2FQStmHDWVyyNI9avJnoJlAwTBG0Ink8wxUSMZj2HBuLySiY6o2vcwo2Ety3mNjs%2BRMlNNSdBbGxmTVGnHaWsPTTStiD%2BunvC8cppuFQZcne7Dj5PATUbxd%2FJp1EWwUpsrZ9&X-Amz-Signature=6189489c220c36608344925b0be955ab389ef7654339b2d038d4fa63e0808c63&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2TAA5J%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BexDDzJQTvAuFFyydz1oANZ%2Biv9tNJO8sTIDVgEH6hQIhANeEbOhyizR%2BLqX%2FOGUQSDQsQMeia7WimqNXuAP9wTC9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMDRqmuzgkVpQu2Wwq3ANq0mHfLts621dnAAcZIQPSQTX9urMmLXfUte2CKvpoxFq1I5jwS00%2B43P678JP4fx3q9qbZYMtHvFIFN2B40wDwPSYBc%2B%2BbPGBGQGMwkBSzk4V4%2B5TObXOTYIB%2FkRClTs6EjTVpk6jMlljQndx%2B4q76kjPVRsmjp0SQTJidfD3PhhUOt98DKW9n7HB9%2FSk6l7bBZso15O9z2MLUXz8S0pMSe2uMGRkaYcihA9moJdoiaEEsBbYmHYg9GCWhAK5CIMbK55IyUr5S5pHXxwWQYPql2ITuZ1LWHG0eiQQTRn6g8BJeKDfrZYJezeYXdvVaZBzFoS%2BQUUmmzwfWxCQEc7Tcfi4964Xz19LYTyhsEPVsxMtdDgHUDnTdF6VCn2%2FBITjCiP1R1EKe85%2BHsDZ2qR5yo%2F0%2B%2BbzbI1736UlgqZJJ%2BDvQW16LP9KvFLyNwa3ohNO3R3deRh5GIk216sEqvnSfWMHft%2FjS6dK3PUJe%2BNo9Oz0IwCqjQxl8hxyD7z88Re3bJxcDdkJD%2B1sTnqj%2BXF%2FHVoHeGgGFgIdaXietDX94847OZY8uucIj40JdxvhxPN0gXZ1qX1SdZ8UCEsHhbFSM%2FdDvqj0UdAtw1r5c7%2FKdFaLWgFmtU6%2F8kQdLjDL9tO9BjqkATHfajvocIRTPH9O57fZt2C7TSltM1g7N2uuLJiEoRBveh5vlQKMtlaVNWzSXIpxtJKqp8YFU%2FleU%2F%2B81Tzc7veVP%2FQStmHDWVyyNI9avJnoJlAwTBG0Ink8wxUSMZj2HBuLySiY6o2vcwo2Ety3mNjs%2BRMlNNSdBbGxmTVGnHaWsPTTStiD%2BunvC8cppuFQZcne7Dj5PATUbxd%2FJp1EWwUpsrZ9&X-Amz-Signature=2be23412a65c2287aea6a78c79d9868c506f6a644a6d9eccbd6dc810ebd15ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y2TAA5J%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC%2BexDDzJQTvAuFFyydz1oANZ%2Biv9tNJO8sTIDVgEH6hQIhANeEbOhyizR%2BLqX%2FOGUQSDQsQMeia7WimqNXuAP9wTC9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMDRqmuzgkVpQu2Wwq3ANq0mHfLts621dnAAcZIQPSQTX9urMmLXfUte2CKvpoxFq1I5jwS00%2B43P678JP4fx3q9qbZYMtHvFIFN2B40wDwPSYBc%2B%2BbPGBGQGMwkBSzk4V4%2B5TObXOTYIB%2FkRClTs6EjTVpk6jMlljQndx%2B4q76kjPVRsmjp0SQTJidfD3PhhUOt98DKW9n7HB9%2FSk6l7bBZso15O9z2MLUXz8S0pMSe2uMGRkaYcihA9moJdoiaEEsBbYmHYg9GCWhAK5CIMbK55IyUr5S5pHXxwWQYPql2ITuZ1LWHG0eiQQTRn6g8BJeKDfrZYJezeYXdvVaZBzFoS%2BQUUmmzwfWxCQEc7Tcfi4964Xz19LYTyhsEPVsxMtdDgHUDnTdF6VCn2%2FBITjCiP1R1EKe85%2BHsDZ2qR5yo%2F0%2B%2BbzbI1736UlgqZJJ%2BDvQW16LP9KvFLyNwa3ohNO3R3deRh5GIk216sEqvnSfWMHft%2FjS6dK3PUJe%2BNo9Oz0IwCqjQxl8hxyD7z88Re3bJxcDdkJD%2B1sTnqj%2BXF%2FHVoHeGgGFgIdaXietDX94847OZY8uucIj40JdxvhxPN0gXZ1qX1SdZ8UCEsHhbFSM%2FdDvqj0UdAtw1r5c7%2FKdFaLWgFmtU6%2F8kQdLjDL9tO9BjqkATHfajvocIRTPH9O57fZt2C7TSltM1g7N2uuLJiEoRBveh5vlQKMtlaVNWzSXIpxtJKqp8YFU%2FleU%2F%2B81Tzc7veVP%2FQStmHDWVyyNI9avJnoJlAwTBG0Ink8wxUSMZj2HBuLySiY6o2vcwo2Ety3mNjs%2BRMlNNSdBbGxmTVGnHaWsPTTStiD%2BunvC8cppuFQZcne7Dj5PATUbxd%2FJp1EWwUpsrZ9&X-Amz-Signature=2b25d25e9d6c798ac70a032c729710cbe924d464fbc46f7d7d2471e5c2cf71a4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
