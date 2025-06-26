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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB54LVXE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1eJoILLHDvJAoD7FPKtl2wkdUX6aoAOl4Ds%2BwwDnIPwIgehj2szl8TqqPMFUiE0ajvfJxE65CNGh98rJs6iAi7gIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDGWwMgV%2FNzs7tOJzyrcA9Yxc3KrkIg%2BH2Ggi37Vdwj7k64OE6y8vIbYlEmHn8LZk5qYLdSdQpkzrDhIBLgOyg54w7krlOqB%2F3bnlNynw9DxbtlyIB1XY4a2icDe4r6b776GScEKtc24kTm96n3%2BWlDulMEvFIUNCKeIeFjq4VitU%2Bs5dzPe7gLPHkRK%2BeP1bmu56q3sb59Qdlbw%2BioPZOW8Nu6eERdPfMGiv%2BwMSk4X3HFDAxR%2FvtjiyvqdE%2FebGWvbJaVdRX9tD36LvKyqng17uxmDM5f9eRK9hYXbbfRrF3TaHdRTAENdMRMS1judPmE2qA%2BU0wGw1vY6FBGeVfXLLEa9pSmFJ0SThiYXgjrIUKOD%2BlGBvroNLycgbnxpanf5wUvo%2BEjM4ButA1fyFFzX9JRUqIEqwqptW06uUPmNthMcNGQoDdt2vLohWMESKIZo2LllSSuR8WC8UJ7%2FnRjl9FcQaQkm%2B80B16MTWxy5frCqzdnFhbizGqJJeCYtS%2B1BfGKcOvaTbsW%2BwWohd3IXbxuH%2FPzQ5E0%2B2bUujQJ9obXeW8XUo6ZII6wnl9cItv1RCuBZZ6hggogWFd%2BomIoMKCNUSVkaKohHlxl0YZ8roIzbL%2B6dU5FXFZ2%2B%2FPIm94YO4%2BvFHhvvFkTZMPOg98IGOqUBIWjyQ4rSQswrObUdyJt%2BdDln81Hk2VCK9jTpL0pBVjsuhvfpYhFO%2FCV0X9NrdPD2l%2Fkz1m%2BfU98DL3TamPpxgzSjzzJ%2FaDtaD7ZdJ9ZQEED%2FjgQ3u6QuveAGPcP5F5WLYcoX1D2SrG6E3cClXJuoLUtkuZYahSxLcO4b8XBvHNwo1jjqIlRVaIRKI8qtwdO7ydZVDSMbZ4gUYmfLDSqmoSH8aTSE&X-Amz-Signature=b78a6ca72f8420b988db9822322d11c544352c2943d88d7183e8ddd8fc363baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB54LVXE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1eJoILLHDvJAoD7FPKtl2wkdUX6aoAOl4Ds%2BwwDnIPwIgehj2szl8TqqPMFUiE0ajvfJxE65CNGh98rJs6iAi7gIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDGWwMgV%2FNzs7tOJzyrcA9Yxc3KrkIg%2BH2Ggi37Vdwj7k64OE6y8vIbYlEmHn8LZk5qYLdSdQpkzrDhIBLgOyg54w7krlOqB%2F3bnlNynw9DxbtlyIB1XY4a2icDe4r6b776GScEKtc24kTm96n3%2BWlDulMEvFIUNCKeIeFjq4VitU%2Bs5dzPe7gLPHkRK%2BeP1bmu56q3sb59Qdlbw%2BioPZOW8Nu6eERdPfMGiv%2BwMSk4X3HFDAxR%2FvtjiyvqdE%2FebGWvbJaVdRX9tD36LvKyqng17uxmDM5f9eRK9hYXbbfRrF3TaHdRTAENdMRMS1judPmE2qA%2BU0wGw1vY6FBGeVfXLLEa9pSmFJ0SThiYXgjrIUKOD%2BlGBvroNLycgbnxpanf5wUvo%2BEjM4ButA1fyFFzX9JRUqIEqwqptW06uUPmNthMcNGQoDdt2vLohWMESKIZo2LllSSuR8WC8UJ7%2FnRjl9FcQaQkm%2B80B16MTWxy5frCqzdnFhbizGqJJeCYtS%2B1BfGKcOvaTbsW%2BwWohd3IXbxuH%2FPzQ5E0%2B2bUujQJ9obXeW8XUo6ZII6wnl9cItv1RCuBZZ6hggogWFd%2BomIoMKCNUSVkaKohHlxl0YZ8roIzbL%2B6dU5FXFZ2%2B%2FPIm94YO4%2BvFHhvvFkTZMPOg98IGOqUBIWjyQ4rSQswrObUdyJt%2BdDln81Hk2VCK9jTpL0pBVjsuhvfpYhFO%2FCV0X9NrdPD2l%2Fkz1m%2BfU98DL3TamPpxgzSjzzJ%2FaDtaD7ZdJ9ZQEED%2FjgQ3u6QuveAGPcP5F5WLYcoX1D2SrG6E3cClXJuoLUtkuZYahSxLcO4b8XBvHNwo1jjqIlRVaIRKI8qtwdO7ydZVDSMbZ4gUYmfLDSqmoSH8aTSE&X-Amz-Signature=9e2d8a0dce3b217c215df299a2fe739dd70859c6db374d9d1365b6257434ae57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB54LVXE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1eJoILLHDvJAoD7FPKtl2wkdUX6aoAOl4Ds%2BwwDnIPwIgehj2szl8TqqPMFUiE0ajvfJxE65CNGh98rJs6iAi7gIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDGWwMgV%2FNzs7tOJzyrcA9Yxc3KrkIg%2BH2Ggi37Vdwj7k64OE6y8vIbYlEmHn8LZk5qYLdSdQpkzrDhIBLgOyg54w7krlOqB%2F3bnlNynw9DxbtlyIB1XY4a2icDe4r6b776GScEKtc24kTm96n3%2BWlDulMEvFIUNCKeIeFjq4VitU%2Bs5dzPe7gLPHkRK%2BeP1bmu56q3sb59Qdlbw%2BioPZOW8Nu6eERdPfMGiv%2BwMSk4X3HFDAxR%2FvtjiyvqdE%2FebGWvbJaVdRX9tD36LvKyqng17uxmDM5f9eRK9hYXbbfRrF3TaHdRTAENdMRMS1judPmE2qA%2BU0wGw1vY6FBGeVfXLLEa9pSmFJ0SThiYXgjrIUKOD%2BlGBvroNLycgbnxpanf5wUvo%2BEjM4ButA1fyFFzX9JRUqIEqwqptW06uUPmNthMcNGQoDdt2vLohWMESKIZo2LllSSuR8WC8UJ7%2FnRjl9FcQaQkm%2B80B16MTWxy5frCqzdnFhbizGqJJeCYtS%2B1BfGKcOvaTbsW%2BwWohd3IXbxuH%2FPzQ5E0%2B2bUujQJ9obXeW8XUo6ZII6wnl9cItv1RCuBZZ6hggogWFd%2BomIoMKCNUSVkaKohHlxl0YZ8roIzbL%2B6dU5FXFZ2%2B%2FPIm94YO4%2BvFHhvvFkTZMPOg98IGOqUBIWjyQ4rSQswrObUdyJt%2BdDln81Hk2VCK9jTpL0pBVjsuhvfpYhFO%2FCV0X9NrdPD2l%2Fkz1m%2BfU98DL3TamPpxgzSjzzJ%2FaDtaD7ZdJ9ZQEED%2FjgQ3u6QuveAGPcP5F5WLYcoX1D2SrG6E3cClXJuoLUtkuZYahSxLcO4b8XBvHNwo1jjqIlRVaIRKI8qtwdO7ydZVDSMbZ4gUYmfLDSqmoSH8aTSE&X-Amz-Signature=3694b27e552f09254cd59cde2985f08ad3356189620dee95ece563da5d9338c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB54LVXE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1eJoILLHDvJAoD7FPKtl2wkdUX6aoAOl4Ds%2BwwDnIPwIgehj2szl8TqqPMFUiE0ajvfJxE65CNGh98rJs6iAi7gIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDGWwMgV%2FNzs7tOJzyrcA9Yxc3KrkIg%2BH2Ggi37Vdwj7k64OE6y8vIbYlEmHn8LZk5qYLdSdQpkzrDhIBLgOyg54w7krlOqB%2F3bnlNynw9DxbtlyIB1XY4a2icDe4r6b776GScEKtc24kTm96n3%2BWlDulMEvFIUNCKeIeFjq4VitU%2Bs5dzPe7gLPHkRK%2BeP1bmu56q3sb59Qdlbw%2BioPZOW8Nu6eERdPfMGiv%2BwMSk4X3HFDAxR%2FvtjiyvqdE%2FebGWvbJaVdRX9tD36LvKyqng17uxmDM5f9eRK9hYXbbfRrF3TaHdRTAENdMRMS1judPmE2qA%2BU0wGw1vY6FBGeVfXLLEa9pSmFJ0SThiYXgjrIUKOD%2BlGBvroNLycgbnxpanf5wUvo%2BEjM4ButA1fyFFzX9JRUqIEqwqptW06uUPmNthMcNGQoDdt2vLohWMESKIZo2LllSSuR8WC8UJ7%2FnRjl9FcQaQkm%2B80B16MTWxy5frCqzdnFhbizGqJJeCYtS%2B1BfGKcOvaTbsW%2BwWohd3IXbxuH%2FPzQ5E0%2B2bUujQJ9obXeW8XUo6ZII6wnl9cItv1RCuBZZ6hggogWFd%2BomIoMKCNUSVkaKohHlxl0YZ8roIzbL%2B6dU5FXFZ2%2B%2FPIm94YO4%2BvFHhvvFkTZMPOg98IGOqUBIWjyQ4rSQswrObUdyJt%2BdDln81Hk2VCK9jTpL0pBVjsuhvfpYhFO%2FCV0X9NrdPD2l%2Fkz1m%2BfU98DL3TamPpxgzSjzzJ%2FaDtaD7ZdJ9ZQEED%2FjgQ3u6QuveAGPcP5F5WLYcoX1D2SrG6E3cClXJuoLUtkuZYahSxLcO4b8XBvHNwo1jjqIlRVaIRKI8qtwdO7ydZVDSMbZ4gUYmfLDSqmoSH8aTSE&X-Amz-Signature=320ac7ed4472ac6fa41a1fc796b5b65d3693a62f052ef06cee3e72c5a5ab329e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB54LVXE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1eJoILLHDvJAoD7FPKtl2wkdUX6aoAOl4Ds%2BwwDnIPwIgehj2szl8TqqPMFUiE0ajvfJxE65CNGh98rJs6iAi7gIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDGWwMgV%2FNzs7tOJzyrcA9Yxc3KrkIg%2BH2Ggi37Vdwj7k64OE6y8vIbYlEmHn8LZk5qYLdSdQpkzrDhIBLgOyg54w7krlOqB%2F3bnlNynw9DxbtlyIB1XY4a2icDe4r6b776GScEKtc24kTm96n3%2BWlDulMEvFIUNCKeIeFjq4VitU%2Bs5dzPe7gLPHkRK%2BeP1bmu56q3sb59Qdlbw%2BioPZOW8Nu6eERdPfMGiv%2BwMSk4X3HFDAxR%2FvtjiyvqdE%2FebGWvbJaVdRX9tD36LvKyqng17uxmDM5f9eRK9hYXbbfRrF3TaHdRTAENdMRMS1judPmE2qA%2BU0wGw1vY6FBGeVfXLLEa9pSmFJ0SThiYXgjrIUKOD%2BlGBvroNLycgbnxpanf5wUvo%2BEjM4ButA1fyFFzX9JRUqIEqwqptW06uUPmNthMcNGQoDdt2vLohWMESKIZo2LllSSuR8WC8UJ7%2FnRjl9FcQaQkm%2B80B16MTWxy5frCqzdnFhbizGqJJeCYtS%2B1BfGKcOvaTbsW%2BwWohd3IXbxuH%2FPzQ5E0%2B2bUujQJ9obXeW8XUo6ZII6wnl9cItv1RCuBZZ6hggogWFd%2BomIoMKCNUSVkaKohHlxl0YZ8roIzbL%2B6dU5FXFZ2%2B%2FPIm94YO4%2BvFHhvvFkTZMPOg98IGOqUBIWjyQ4rSQswrObUdyJt%2BdDln81Hk2VCK9jTpL0pBVjsuhvfpYhFO%2FCV0X9NrdPD2l%2Fkz1m%2BfU98DL3TamPpxgzSjzzJ%2FaDtaD7ZdJ9ZQEED%2FjgQ3u6QuveAGPcP5F5WLYcoX1D2SrG6E3cClXJuoLUtkuZYahSxLcO4b8XBvHNwo1jjqIlRVaIRKI8qtwdO7ydZVDSMbZ4gUYmfLDSqmoSH8aTSE&X-Amz-Signature=ba808c2ee52629c64c26d75be0b7b620bada42ad0440df1f04eaee4aaa5626d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB54LVXE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1eJoILLHDvJAoD7FPKtl2wkdUX6aoAOl4Ds%2BwwDnIPwIgehj2szl8TqqPMFUiE0ajvfJxE65CNGh98rJs6iAi7gIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDGWwMgV%2FNzs7tOJzyrcA9Yxc3KrkIg%2BH2Ggi37Vdwj7k64OE6y8vIbYlEmHn8LZk5qYLdSdQpkzrDhIBLgOyg54w7krlOqB%2F3bnlNynw9DxbtlyIB1XY4a2icDe4r6b776GScEKtc24kTm96n3%2BWlDulMEvFIUNCKeIeFjq4VitU%2Bs5dzPe7gLPHkRK%2BeP1bmu56q3sb59Qdlbw%2BioPZOW8Nu6eERdPfMGiv%2BwMSk4X3HFDAxR%2FvtjiyvqdE%2FebGWvbJaVdRX9tD36LvKyqng17uxmDM5f9eRK9hYXbbfRrF3TaHdRTAENdMRMS1judPmE2qA%2BU0wGw1vY6FBGeVfXLLEa9pSmFJ0SThiYXgjrIUKOD%2BlGBvroNLycgbnxpanf5wUvo%2BEjM4ButA1fyFFzX9JRUqIEqwqptW06uUPmNthMcNGQoDdt2vLohWMESKIZo2LllSSuR8WC8UJ7%2FnRjl9FcQaQkm%2B80B16MTWxy5frCqzdnFhbizGqJJeCYtS%2B1BfGKcOvaTbsW%2BwWohd3IXbxuH%2FPzQ5E0%2B2bUujQJ9obXeW8XUo6ZII6wnl9cItv1RCuBZZ6hggogWFd%2BomIoMKCNUSVkaKohHlxl0YZ8roIzbL%2B6dU5FXFZ2%2B%2FPIm94YO4%2BvFHhvvFkTZMPOg98IGOqUBIWjyQ4rSQswrObUdyJt%2BdDln81Hk2VCK9jTpL0pBVjsuhvfpYhFO%2FCV0X9NrdPD2l%2Fkz1m%2BfU98DL3TamPpxgzSjzzJ%2FaDtaD7ZdJ9ZQEED%2FjgQ3u6QuveAGPcP5F5WLYcoX1D2SrG6E3cClXJuoLUtkuZYahSxLcO4b8XBvHNwo1jjqIlRVaIRKI8qtwdO7ydZVDSMbZ4gUYmfLDSqmoSH8aTSE&X-Amz-Signature=5dfdd99d013f7b6be7c3587c28fbaf83ed4aaadf881b98fee8555def9e8da42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB54LVXE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1eJoILLHDvJAoD7FPKtl2wkdUX6aoAOl4Ds%2BwwDnIPwIgehj2szl8TqqPMFUiE0ajvfJxE65CNGh98rJs6iAi7gIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDGWwMgV%2FNzs7tOJzyrcA9Yxc3KrkIg%2BH2Ggi37Vdwj7k64OE6y8vIbYlEmHn8LZk5qYLdSdQpkzrDhIBLgOyg54w7krlOqB%2F3bnlNynw9DxbtlyIB1XY4a2icDe4r6b776GScEKtc24kTm96n3%2BWlDulMEvFIUNCKeIeFjq4VitU%2Bs5dzPe7gLPHkRK%2BeP1bmu56q3sb59Qdlbw%2BioPZOW8Nu6eERdPfMGiv%2BwMSk4X3HFDAxR%2FvtjiyvqdE%2FebGWvbJaVdRX9tD36LvKyqng17uxmDM5f9eRK9hYXbbfRrF3TaHdRTAENdMRMS1judPmE2qA%2BU0wGw1vY6FBGeVfXLLEa9pSmFJ0SThiYXgjrIUKOD%2BlGBvroNLycgbnxpanf5wUvo%2BEjM4ButA1fyFFzX9JRUqIEqwqptW06uUPmNthMcNGQoDdt2vLohWMESKIZo2LllSSuR8WC8UJ7%2FnRjl9FcQaQkm%2B80B16MTWxy5frCqzdnFhbizGqJJeCYtS%2B1BfGKcOvaTbsW%2BwWohd3IXbxuH%2FPzQ5E0%2B2bUujQJ9obXeW8XUo6ZII6wnl9cItv1RCuBZZ6hggogWFd%2BomIoMKCNUSVkaKohHlxl0YZ8roIzbL%2B6dU5FXFZ2%2B%2FPIm94YO4%2BvFHhvvFkTZMPOg98IGOqUBIWjyQ4rSQswrObUdyJt%2BdDln81Hk2VCK9jTpL0pBVjsuhvfpYhFO%2FCV0X9NrdPD2l%2Fkz1m%2BfU98DL3TamPpxgzSjzzJ%2FaDtaD7ZdJ9ZQEED%2FjgQ3u6QuveAGPcP5F5WLYcoX1D2SrG6E3cClXJuoLUtkuZYahSxLcO4b8XBvHNwo1jjqIlRVaIRKI8qtwdO7ydZVDSMbZ4gUYmfLDSqmoSH8aTSE&X-Amz-Signature=001a6937929aaca85666bc6dfd0d4d8d667853e6009a95f047a7320c42707de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
