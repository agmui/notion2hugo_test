---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARQGC4N%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDykz1Xw75LR6v80VdhdYFiVEKnKhjC7e5U%2BG6JhwIGGQIfaWtqNIHIf5Bbvz7lY%2FJo5YWmr1sgA2w9cXQjdwOe6iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2YnG0Eq2GfUCbxNKtwDQIzeqENmQcvgFG42vV1LlwBqmzp2MyXKgVaaBKRFagdkVbJ9z7u6vSiqddcAFdqoUAIrHOj9WiarNkB7puZf5DZMYY2PnnNo6RYiUXdDBA%2FeTWemsrcJWQB9PsLNzgaRSbn4vQJVnKBGar3Nnh0cVXqF8I3vTykCPrxxIfENaNNN1s6119JnxddzV4Gt3SIfk7kENLZ%2FYKxO86GERJcePDDuPhogFJug%2B2xjoqsTIMpPIJrxq3absqzBX1zaDOFtKGtbhREJVrxwuRAyBigW%2BPiNhtoIM8Af%2BUWuwY9yKWUmWC64XQTreEr0FwJNdneV5w9PGNlzpLqMzAeYMt8WBXhHD5D80JznTA13T%2FhLyliRzHyicNW6MNfVkNhNV5yORzFC%2BNzMYWaIpgVIOR7QFneTO9g8ULvK8KC4Qwe0XOD5jb7G94oo%2FC0rZ5VfIX%2FFq1DoUvfyFDkyWrqLgBuRbPYz5XYcuqZdr4wp80iBLNAu6stjmIjcIZhWvOTDjviMGvSoEIZo94tP05diJU1llmOsWHDEBt2Ws2NeFqfRDyeW9ySjgAzZ2lISOWTmTf4dzs5PqODCxfBfrbTDebFAflQToWHJ7aclSZW0Qf6QKk72CYmyEZIMIG%2FpZcMwpJDYzQY6pgG3IBdhMBfhzWMph3oQ5%2Fxf8d3iZaQokcl0ZaJK4HvzYNHW%2F6UwH6zBh1kjKF2tC%2FiO8gLK74LwJrd%2BZIWhIbOPosb8pUoaYE4GbpXsO5TkKXTQ5TuLdISCMJRRJ0sILsMg1kDidcqhNm4WKMLbPmPYu0icVE0%2FOmvymFfwDX3kpcdZWKY6oes1J8H2edNAho9en8pFUe7ISacCr6bPp1z7vHfRVUz2&X-Amz-Signature=f80adf8e9f15e49e3e163f7c0e20769fc5a1d0e2c916a7d3e993d5f6a63bc3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARQGC4N%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDykz1Xw75LR6v80VdhdYFiVEKnKhjC7e5U%2BG6JhwIGGQIfaWtqNIHIf5Bbvz7lY%2FJo5YWmr1sgA2w9cXQjdwOe6iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2YnG0Eq2GfUCbxNKtwDQIzeqENmQcvgFG42vV1LlwBqmzp2MyXKgVaaBKRFagdkVbJ9z7u6vSiqddcAFdqoUAIrHOj9WiarNkB7puZf5DZMYY2PnnNo6RYiUXdDBA%2FeTWemsrcJWQB9PsLNzgaRSbn4vQJVnKBGar3Nnh0cVXqF8I3vTykCPrxxIfENaNNN1s6119JnxddzV4Gt3SIfk7kENLZ%2FYKxO86GERJcePDDuPhogFJug%2B2xjoqsTIMpPIJrxq3absqzBX1zaDOFtKGtbhREJVrxwuRAyBigW%2BPiNhtoIM8Af%2BUWuwY9yKWUmWC64XQTreEr0FwJNdneV5w9PGNlzpLqMzAeYMt8WBXhHD5D80JznTA13T%2FhLyliRzHyicNW6MNfVkNhNV5yORzFC%2BNzMYWaIpgVIOR7QFneTO9g8ULvK8KC4Qwe0XOD5jb7G94oo%2FC0rZ5VfIX%2FFq1DoUvfyFDkyWrqLgBuRbPYz5XYcuqZdr4wp80iBLNAu6stjmIjcIZhWvOTDjviMGvSoEIZo94tP05diJU1llmOsWHDEBt2Ws2NeFqfRDyeW9ySjgAzZ2lISOWTmTf4dzs5PqODCxfBfrbTDebFAflQToWHJ7aclSZW0Qf6QKk72CYmyEZIMIG%2FpZcMwpJDYzQY6pgG3IBdhMBfhzWMph3oQ5%2Fxf8d3iZaQokcl0ZaJK4HvzYNHW%2F6UwH6zBh1kjKF2tC%2FiO8gLK74LwJrd%2BZIWhIbOPosb8pUoaYE4GbpXsO5TkKXTQ5TuLdISCMJRRJ0sILsMg1kDidcqhNm4WKMLbPmPYu0icVE0%2FOmvymFfwDX3kpcdZWKY6oes1J8H2edNAho9en8pFUe7ISacCr6bPp1z7vHfRVUz2&X-Amz-Signature=ec79a007c53c4fe89f7a7d99ff1c86b56a45acd3c8797e0f153d8eb73b0bb5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARQGC4N%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDykz1Xw75LR6v80VdhdYFiVEKnKhjC7e5U%2BG6JhwIGGQIfaWtqNIHIf5Bbvz7lY%2FJo5YWmr1sgA2w9cXQjdwOe6iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2YnG0Eq2GfUCbxNKtwDQIzeqENmQcvgFG42vV1LlwBqmzp2MyXKgVaaBKRFagdkVbJ9z7u6vSiqddcAFdqoUAIrHOj9WiarNkB7puZf5DZMYY2PnnNo6RYiUXdDBA%2FeTWemsrcJWQB9PsLNzgaRSbn4vQJVnKBGar3Nnh0cVXqF8I3vTykCPrxxIfENaNNN1s6119JnxddzV4Gt3SIfk7kENLZ%2FYKxO86GERJcePDDuPhogFJug%2B2xjoqsTIMpPIJrxq3absqzBX1zaDOFtKGtbhREJVrxwuRAyBigW%2BPiNhtoIM8Af%2BUWuwY9yKWUmWC64XQTreEr0FwJNdneV5w9PGNlzpLqMzAeYMt8WBXhHD5D80JznTA13T%2FhLyliRzHyicNW6MNfVkNhNV5yORzFC%2BNzMYWaIpgVIOR7QFneTO9g8ULvK8KC4Qwe0XOD5jb7G94oo%2FC0rZ5VfIX%2FFq1DoUvfyFDkyWrqLgBuRbPYz5XYcuqZdr4wp80iBLNAu6stjmIjcIZhWvOTDjviMGvSoEIZo94tP05diJU1llmOsWHDEBt2Ws2NeFqfRDyeW9ySjgAzZ2lISOWTmTf4dzs5PqODCxfBfrbTDebFAflQToWHJ7aclSZW0Qf6QKk72CYmyEZIMIG%2FpZcMwpJDYzQY6pgG3IBdhMBfhzWMph3oQ5%2Fxf8d3iZaQokcl0ZaJK4HvzYNHW%2F6UwH6zBh1kjKF2tC%2FiO8gLK74LwJrd%2BZIWhIbOPosb8pUoaYE4GbpXsO5TkKXTQ5TuLdISCMJRRJ0sILsMg1kDidcqhNm4WKMLbPmPYu0icVE0%2FOmvymFfwDX3kpcdZWKY6oes1J8H2edNAho9en8pFUe7ISacCr6bPp1z7vHfRVUz2&X-Amz-Signature=dc32e39cd4f35630818ccadc8ae58830e01792db668b649ce43babf2697febab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARQGC4N%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDykz1Xw75LR6v80VdhdYFiVEKnKhjC7e5U%2BG6JhwIGGQIfaWtqNIHIf5Bbvz7lY%2FJo5YWmr1sgA2w9cXQjdwOe6iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2YnG0Eq2GfUCbxNKtwDQIzeqENmQcvgFG42vV1LlwBqmzp2MyXKgVaaBKRFagdkVbJ9z7u6vSiqddcAFdqoUAIrHOj9WiarNkB7puZf5DZMYY2PnnNo6RYiUXdDBA%2FeTWemsrcJWQB9PsLNzgaRSbn4vQJVnKBGar3Nnh0cVXqF8I3vTykCPrxxIfENaNNN1s6119JnxddzV4Gt3SIfk7kENLZ%2FYKxO86GERJcePDDuPhogFJug%2B2xjoqsTIMpPIJrxq3absqzBX1zaDOFtKGtbhREJVrxwuRAyBigW%2BPiNhtoIM8Af%2BUWuwY9yKWUmWC64XQTreEr0FwJNdneV5w9PGNlzpLqMzAeYMt8WBXhHD5D80JznTA13T%2FhLyliRzHyicNW6MNfVkNhNV5yORzFC%2BNzMYWaIpgVIOR7QFneTO9g8ULvK8KC4Qwe0XOD5jb7G94oo%2FC0rZ5VfIX%2FFq1DoUvfyFDkyWrqLgBuRbPYz5XYcuqZdr4wp80iBLNAu6stjmIjcIZhWvOTDjviMGvSoEIZo94tP05diJU1llmOsWHDEBt2Ws2NeFqfRDyeW9ySjgAzZ2lISOWTmTf4dzs5PqODCxfBfrbTDebFAflQToWHJ7aclSZW0Qf6QKk72CYmyEZIMIG%2FpZcMwpJDYzQY6pgG3IBdhMBfhzWMph3oQ5%2Fxf8d3iZaQokcl0ZaJK4HvzYNHW%2F6UwH6zBh1kjKF2tC%2FiO8gLK74LwJrd%2BZIWhIbOPosb8pUoaYE4GbpXsO5TkKXTQ5TuLdISCMJRRJ0sILsMg1kDidcqhNm4WKMLbPmPYu0icVE0%2FOmvymFfwDX3kpcdZWKY6oes1J8H2edNAho9en8pFUe7ISacCr6bPp1z7vHfRVUz2&X-Amz-Signature=367163e2a8a8cb32c194090e85be7f641244dc3cadb6582e232e3c7a9b688717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARQGC4N%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDykz1Xw75LR6v80VdhdYFiVEKnKhjC7e5U%2BG6JhwIGGQIfaWtqNIHIf5Bbvz7lY%2FJo5YWmr1sgA2w9cXQjdwOe6iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2YnG0Eq2GfUCbxNKtwDQIzeqENmQcvgFG42vV1LlwBqmzp2MyXKgVaaBKRFagdkVbJ9z7u6vSiqddcAFdqoUAIrHOj9WiarNkB7puZf5DZMYY2PnnNo6RYiUXdDBA%2FeTWemsrcJWQB9PsLNzgaRSbn4vQJVnKBGar3Nnh0cVXqF8I3vTykCPrxxIfENaNNN1s6119JnxddzV4Gt3SIfk7kENLZ%2FYKxO86GERJcePDDuPhogFJug%2B2xjoqsTIMpPIJrxq3absqzBX1zaDOFtKGtbhREJVrxwuRAyBigW%2BPiNhtoIM8Af%2BUWuwY9yKWUmWC64XQTreEr0FwJNdneV5w9PGNlzpLqMzAeYMt8WBXhHD5D80JznTA13T%2FhLyliRzHyicNW6MNfVkNhNV5yORzFC%2BNzMYWaIpgVIOR7QFneTO9g8ULvK8KC4Qwe0XOD5jb7G94oo%2FC0rZ5VfIX%2FFq1DoUvfyFDkyWrqLgBuRbPYz5XYcuqZdr4wp80iBLNAu6stjmIjcIZhWvOTDjviMGvSoEIZo94tP05diJU1llmOsWHDEBt2Ws2NeFqfRDyeW9ySjgAzZ2lISOWTmTf4dzs5PqODCxfBfrbTDebFAflQToWHJ7aclSZW0Qf6QKk72CYmyEZIMIG%2FpZcMwpJDYzQY6pgG3IBdhMBfhzWMph3oQ5%2Fxf8d3iZaQokcl0ZaJK4HvzYNHW%2F6UwH6zBh1kjKF2tC%2FiO8gLK74LwJrd%2BZIWhIbOPosb8pUoaYE4GbpXsO5TkKXTQ5TuLdISCMJRRJ0sILsMg1kDidcqhNm4WKMLbPmPYu0icVE0%2FOmvymFfwDX3kpcdZWKY6oes1J8H2edNAho9en8pFUe7ISacCr6bPp1z7vHfRVUz2&X-Amz-Signature=56035aca36ca2bc50981028f600594fab057b9c346829881b7e3b4a18d9949f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARQGC4N%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDykz1Xw75LR6v80VdhdYFiVEKnKhjC7e5U%2BG6JhwIGGQIfaWtqNIHIf5Bbvz7lY%2FJo5YWmr1sgA2w9cXQjdwOe6iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2YnG0Eq2GfUCbxNKtwDQIzeqENmQcvgFG42vV1LlwBqmzp2MyXKgVaaBKRFagdkVbJ9z7u6vSiqddcAFdqoUAIrHOj9WiarNkB7puZf5DZMYY2PnnNo6RYiUXdDBA%2FeTWemsrcJWQB9PsLNzgaRSbn4vQJVnKBGar3Nnh0cVXqF8I3vTykCPrxxIfENaNNN1s6119JnxddzV4Gt3SIfk7kENLZ%2FYKxO86GERJcePDDuPhogFJug%2B2xjoqsTIMpPIJrxq3absqzBX1zaDOFtKGtbhREJVrxwuRAyBigW%2BPiNhtoIM8Af%2BUWuwY9yKWUmWC64XQTreEr0FwJNdneV5w9PGNlzpLqMzAeYMt8WBXhHD5D80JznTA13T%2FhLyliRzHyicNW6MNfVkNhNV5yORzFC%2BNzMYWaIpgVIOR7QFneTO9g8ULvK8KC4Qwe0XOD5jb7G94oo%2FC0rZ5VfIX%2FFq1DoUvfyFDkyWrqLgBuRbPYz5XYcuqZdr4wp80iBLNAu6stjmIjcIZhWvOTDjviMGvSoEIZo94tP05diJU1llmOsWHDEBt2Ws2NeFqfRDyeW9ySjgAzZ2lISOWTmTf4dzs5PqODCxfBfrbTDebFAflQToWHJ7aclSZW0Qf6QKk72CYmyEZIMIG%2FpZcMwpJDYzQY6pgG3IBdhMBfhzWMph3oQ5%2Fxf8d3iZaQokcl0ZaJK4HvzYNHW%2F6UwH6zBh1kjKF2tC%2FiO8gLK74LwJrd%2BZIWhIbOPosb8pUoaYE4GbpXsO5TkKXTQ5TuLdISCMJRRJ0sILsMg1kDidcqhNm4WKMLbPmPYu0icVE0%2FOmvymFfwDX3kpcdZWKY6oes1J8H2edNAho9en8pFUe7ISacCr6bPp1z7vHfRVUz2&X-Amz-Signature=e2626fa0a18090f7860e04d5eb87a893a9f857eb8c38f67fe3ca40b5b686a7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARQGC4N%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDykz1Xw75LR6v80VdhdYFiVEKnKhjC7e5U%2BG6JhwIGGQIfaWtqNIHIf5Bbvz7lY%2FJo5YWmr1sgA2w9cXQjdwOe6iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ2YnG0Eq2GfUCbxNKtwDQIzeqENmQcvgFG42vV1LlwBqmzp2MyXKgVaaBKRFagdkVbJ9z7u6vSiqddcAFdqoUAIrHOj9WiarNkB7puZf5DZMYY2PnnNo6RYiUXdDBA%2FeTWemsrcJWQB9PsLNzgaRSbn4vQJVnKBGar3Nnh0cVXqF8I3vTykCPrxxIfENaNNN1s6119JnxddzV4Gt3SIfk7kENLZ%2FYKxO86GERJcePDDuPhogFJug%2B2xjoqsTIMpPIJrxq3absqzBX1zaDOFtKGtbhREJVrxwuRAyBigW%2BPiNhtoIM8Af%2BUWuwY9yKWUmWC64XQTreEr0FwJNdneV5w9PGNlzpLqMzAeYMt8WBXhHD5D80JznTA13T%2FhLyliRzHyicNW6MNfVkNhNV5yORzFC%2BNzMYWaIpgVIOR7QFneTO9g8ULvK8KC4Qwe0XOD5jb7G94oo%2FC0rZ5VfIX%2FFq1DoUvfyFDkyWrqLgBuRbPYz5XYcuqZdr4wp80iBLNAu6stjmIjcIZhWvOTDjviMGvSoEIZo94tP05diJU1llmOsWHDEBt2Ws2NeFqfRDyeW9ySjgAzZ2lISOWTmTf4dzs5PqODCxfBfrbTDebFAflQToWHJ7aclSZW0Qf6QKk72CYmyEZIMIG%2FpZcMwpJDYzQY6pgG3IBdhMBfhzWMph3oQ5%2Fxf8d3iZaQokcl0ZaJK4HvzYNHW%2F6UwH6zBh1kjKF2tC%2FiO8gLK74LwJrd%2BZIWhIbOPosb8pUoaYE4GbpXsO5TkKXTQ5TuLdISCMJRRJ0sILsMg1kDidcqhNm4WKMLbPmPYu0icVE0%2FOmvymFfwDX3kpcdZWKY6oes1J8H2edNAho9en8pFUe7ISacCr6bPp1z7vHfRVUz2&X-Amz-Signature=c16bf100c0f9d13e65a30360d4abcaa938623ad4475914d886df7c1709c04fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
