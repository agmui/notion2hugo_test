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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNDGR7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFd7TCVif2SoHb%2BZK5XI0lEvsxfPK3EwYyi2m5GXrDUAiAFXti94DtxDvzyDCNCE03JSwWyTNYoxSBJpZEuEc0h8SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNkK%2BhOgjfBCzoO6KtwDuVOeKPLhjnUv6vXBmwuYUuoQY8dHPEv8ws97ULWQtx75Pyw9WQOxkakia%2FOFCq8Uk2Qm7c4qoyaPNjdroPMAURWn70rbyAtNdWjb12HRAMJ6HKkLTURcCGflVCfo2Dp4nQlahLwNeAPZKNRCe7zMnLe8eh1xxWLH1SAMCgdF%2FfOLNn%2B1kSm%2Bjm37pPpxIiRI4Ot1k8mwpbTFODDk7GpyXp1Ssj8TBEv89hUevy7bAz9mim%2FnZfTq2bBwFeXnvQP3FBgGTF8uAcvMUz6lk%2B8gh96dYn2kKjlD7GBZ%2FdyEQ%2FA2OOpNtNdN8ZpVH5FqqkfvOszFczzfzLT6Klj8262TPQ1A8gsxn75ALHOiJP9uKkbNxvQQueh8aczhpEomMFdcdQf%2BSQcMjCvbFG3p65JhDOch5VlxCUmCiheF0NJkT6Ksm27yFKnXIJ4N0%2B3zf543AwVYxpXb7r%2B1TQd0EtRATaatZyIedfjPr5d9XfKPKrijajTyRKTHDE4VQeJtq000ukNniV9GeXeOjLgnm2tXFQQ0NXyrk87%2FGpV2vo2AiiSy7etD61OTZutb8v1G46zvCWZeiggvAVAjMo3%2Bd0HWOQEH5Ozwa4eJOM%2B%2FoLb3dcUQSLZv5MaHScssSecw1cCAvQY6pgGI86pNGV1sTSvfhsColbsxdIbFDZjTVd%2FkAA%2BDkYWx%2FvxWjsTCx72sPBPReVWnU8MTv05nsGrl4%2FvQJDPawg0xnivOUlwB3QzN%2B9%2BHqZwx3AV0lwyt6i1vnk7fnBXkNY8HI7bgsreIveyi8XLl8%2Bi4VePbDhVX2HRJF3sG7EWpOid4DWEhfzjSHHgJD%2BE7IB0aqjb4vBoG8qJ1h1i1bPvwZV%2BRpmIu&X-Amz-Signature=eb5c9a2e4b12628b1014fadd63e913a763f85a4a06c0d6ba8cc80c13c8776f05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNDGR7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFd7TCVif2SoHb%2BZK5XI0lEvsxfPK3EwYyi2m5GXrDUAiAFXti94DtxDvzyDCNCE03JSwWyTNYoxSBJpZEuEc0h8SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNkK%2BhOgjfBCzoO6KtwDuVOeKPLhjnUv6vXBmwuYUuoQY8dHPEv8ws97ULWQtx75Pyw9WQOxkakia%2FOFCq8Uk2Qm7c4qoyaPNjdroPMAURWn70rbyAtNdWjb12HRAMJ6HKkLTURcCGflVCfo2Dp4nQlahLwNeAPZKNRCe7zMnLe8eh1xxWLH1SAMCgdF%2FfOLNn%2B1kSm%2Bjm37pPpxIiRI4Ot1k8mwpbTFODDk7GpyXp1Ssj8TBEv89hUevy7bAz9mim%2FnZfTq2bBwFeXnvQP3FBgGTF8uAcvMUz6lk%2B8gh96dYn2kKjlD7GBZ%2FdyEQ%2FA2OOpNtNdN8ZpVH5FqqkfvOszFczzfzLT6Klj8262TPQ1A8gsxn75ALHOiJP9uKkbNxvQQueh8aczhpEomMFdcdQf%2BSQcMjCvbFG3p65JhDOch5VlxCUmCiheF0NJkT6Ksm27yFKnXIJ4N0%2B3zf543AwVYxpXb7r%2B1TQd0EtRATaatZyIedfjPr5d9XfKPKrijajTyRKTHDE4VQeJtq000ukNniV9GeXeOjLgnm2tXFQQ0NXyrk87%2FGpV2vo2AiiSy7etD61OTZutb8v1G46zvCWZeiggvAVAjMo3%2Bd0HWOQEH5Ozwa4eJOM%2B%2FoLb3dcUQSLZv5MaHScssSecw1cCAvQY6pgGI86pNGV1sTSvfhsColbsxdIbFDZjTVd%2FkAA%2BDkYWx%2FvxWjsTCx72sPBPReVWnU8MTv05nsGrl4%2FvQJDPawg0xnivOUlwB3QzN%2B9%2BHqZwx3AV0lwyt6i1vnk7fnBXkNY8HI7bgsreIveyi8XLl8%2Bi4VePbDhVX2HRJF3sG7EWpOid4DWEhfzjSHHgJD%2BE7IB0aqjb4vBoG8qJ1h1i1bPvwZV%2BRpmIu&X-Amz-Signature=b7a6a7c6033f7c9d863c31491456c77a1721bc793d7a434c6595522c9d643d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNDGR7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFd7TCVif2SoHb%2BZK5XI0lEvsxfPK3EwYyi2m5GXrDUAiAFXti94DtxDvzyDCNCE03JSwWyTNYoxSBJpZEuEc0h8SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNkK%2BhOgjfBCzoO6KtwDuVOeKPLhjnUv6vXBmwuYUuoQY8dHPEv8ws97ULWQtx75Pyw9WQOxkakia%2FOFCq8Uk2Qm7c4qoyaPNjdroPMAURWn70rbyAtNdWjb12HRAMJ6HKkLTURcCGflVCfo2Dp4nQlahLwNeAPZKNRCe7zMnLe8eh1xxWLH1SAMCgdF%2FfOLNn%2B1kSm%2Bjm37pPpxIiRI4Ot1k8mwpbTFODDk7GpyXp1Ssj8TBEv89hUevy7bAz9mim%2FnZfTq2bBwFeXnvQP3FBgGTF8uAcvMUz6lk%2B8gh96dYn2kKjlD7GBZ%2FdyEQ%2FA2OOpNtNdN8ZpVH5FqqkfvOszFczzfzLT6Klj8262TPQ1A8gsxn75ALHOiJP9uKkbNxvQQueh8aczhpEomMFdcdQf%2BSQcMjCvbFG3p65JhDOch5VlxCUmCiheF0NJkT6Ksm27yFKnXIJ4N0%2B3zf543AwVYxpXb7r%2B1TQd0EtRATaatZyIedfjPr5d9XfKPKrijajTyRKTHDE4VQeJtq000ukNniV9GeXeOjLgnm2tXFQQ0NXyrk87%2FGpV2vo2AiiSy7etD61OTZutb8v1G46zvCWZeiggvAVAjMo3%2Bd0HWOQEH5Ozwa4eJOM%2B%2FoLb3dcUQSLZv5MaHScssSecw1cCAvQY6pgGI86pNGV1sTSvfhsColbsxdIbFDZjTVd%2FkAA%2BDkYWx%2FvxWjsTCx72sPBPReVWnU8MTv05nsGrl4%2FvQJDPawg0xnivOUlwB3QzN%2B9%2BHqZwx3AV0lwyt6i1vnk7fnBXkNY8HI7bgsreIveyi8XLl8%2Bi4VePbDhVX2HRJF3sG7EWpOid4DWEhfzjSHHgJD%2BE7IB0aqjb4vBoG8qJ1h1i1bPvwZV%2BRpmIu&X-Amz-Signature=113a78e943419613e811daba79162450bbb895ffa9f1d33632de84682e6d489c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNDGR7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFd7TCVif2SoHb%2BZK5XI0lEvsxfPK3EwYyi2m5GXrDUAiAFXti94DtxDvzyDCNCE03JSwWyTNYoxSBJpZEuEc0h8SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNkK%2BhOgjfBCzoO6KtwDuVOeKPLhjnUv6vXBmwuYUuoQY8dHPEv8ws97ULWQtx75Pyw9WQOxkakia%2FOFCq8Uk2Qm7c4qoyaPNjdroPMAURWn70rbyAtNdWjb12HRAMJ6HKkLTURcCGflVCfo2Dp4nQlahLwNeAPZKNRCe7zMnLe8eh1xxWLH1SAMCgdF%2FfOLNn%2B1kSm%2Bjm37pPpxIiRI4Ot1k8mwpbTFODDk7GpyXp1Ssj8TBEv89hUevy7bAz9mim%2FnZfTq2bBwFeXnvQP3FBgGTF8uAcvMUz6lk%2B8gh96dYn2kKjlD7GBZ%2FdyEQ%2FA2OOpNtNdN8ZpVH5FqqkfvOszFczzfzLT6Klj8262TPQ1A8gsxn75ALHOiJP9uKkbNxvQQueh8aczhpEomMFdcdQf%2BSQcMjCvbFG3p65JhDOch5VlxCUmCiheF0NJkT6Ksm27yFKnXIJ4N0%2B3zf543AwVYxpXb7r%2B1TQd0EtRATaatZyIedfjPr5d9XfKPKrijajTyRKTHDE4VQeJtq000ukNniV9GeXeOjLgnm2tXFQQ0NXyrk87%2FGpV2vo2AiiSy7etD61OTZutb8v1G46zvCWZeiggvAVAjMo3%2Bd0HWOQEH5Ozwa4eJOM%2B%2FoLb3dcUQSLZv5MaHScssSecw1cCAvQY6pgGI86pNGV1sTSvfhsColbsxdIbFDZjTVd%2FkAA%2BDkYWx%2FvxWjsTCx72sPBPReVWnU8MTv05nsGrl4%2FvQJDPawg0xnivOUlwB3QzN%2B9%2BHqZwx3AV0lwyt6i1vnk7fnBXkNY8HI7bgsreIveyi8XLl8%2Bi4VePbDhVX2HRJF3sG7EWpOid4DWEhfzjSHHgJD%2BE7IB0aqjb4vBoG8qJ1h1i1bPvwZV%2BRpmIu&X-Amz-Signature=d636a297befa2cfd6cf9c7b7634ba3c19b5aa84aa8251078d3120834d92b12c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNDGR7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFd7TCVif2SoHb%2BZK5XI0lEvsxfPK3EwYyi2m5GXrDUAiAFXti94DtxDvzyDCNCE03JSwWyTNYoxSBJpZEuEc0h8SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNkK%2BhOgjfBCzoO6KtwDuVOeKPLhjnUv6vXBmwuYUuoQY8dHPEv8ws97ULWQtx75Pyw9WQOxkakia%2FOFCq8Uk2Qm7c4qoyaPNjdroPMAURWn70rbyAtNdWjb12HRAMJ6HKkLTURcCGflVCfo2Dp4nQlahLwNeAPZKNRCe7zMnLe8eh1xxWLH1SAMCgdF%2FfOLNn%2B1kSm%2Bjm37pPpxIiRI4Ot1k8mwpbTFODDk7GpyXp1Ssj8TBEv89hUevy7bAz9mim%2FnZfTq2bBwFeXnvQP3FBgGTF8uAcvMUz6lk%2B8gh96dYn2kKjlD7GBZ%2FdyEQ%2FA2OOpNtNdN8ZpVH5FqqkfvOszFczzfzLT6Klj8262TPQ1A8gsxn75ALHOiJP9uKkbNxvQQueh8aczhpEomMFdcdQf%2BSQcMjCvbFG3p65JhDOch5VlxCUmCiheF0NJkT6Ksm27yFKnXIJ4N0%2B3zf543AwVYxpXb7r%2B1TQd0EtRATaatZyIedfjPr5d9XfKPKrijajTyRKTHDE4VQeJtq000ukNniV9GeXeOjLgnm2tXFQQ0NXyrk87%2FGpV2vo2AiiSy7etD61OTZutb8v1G46zvCWZeiggvAVAjMo3%2Bd0HWOQEH5Ozwa4eJOM%2B%2FoLb3dcUQSLZv5MaHScssSecw1cCAvQY6pgGI86pNGV1sTSvfhsColbsxdIbFDZjTVd%2FkAA%2BDkYWx%2FvxWjsTCx72sPBPReVWnU8MTv05nsGrl4%2FvQJDPawg0xnivOUlwB3QzN%2B9%2BHqZwx3AV0lwyt6i1vnk7fnBXkNY8HI7bgsreIveyi8XLl8%2Bi4VePbDhVX2HRJF3sG7EWpOid4DWEhfzjSHHgJD%2BE7IB0aqjb4vBoG8qJ1h1i1bPvwZV%2BRpmIu&X-Amz-Signature=39ab5ebd13a8460a3b022516ce491524d303b295734deeb4c526e8f9b666599c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNDGR7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFd7TCVif2SoHb%2BZK5XI0lEvsxfPK3EwYyi2m5GXrDUAiAFXti94DtxDvzyDCNCE03JSwWyTNYoxSBJpZEuEc0h8SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNkK%2BhOgjfBCzoO6KtwDuVOeKPLhjnUv6vXBmwuYUuoQY8dHPEv8ws97ULWQtx75Pyw9WQOxkakia%2FOFCq8Uk2Qm7c4qoyaPNjdroPMAURWn70rbyAtNdWjb12HRAMJ6HKkLTURcCGflVCfo2Dp4nQlahLwNeAPZKNRCe7zMnLe8eh1xxWLH1SAMCgdF%2FfOLNn%2B1kSm%2Bjm37pPpxIiRI4Ot1k8mwpbTFODDk7GpyXp1Ssj8TBEv89hUevy7bAz9mim%2FnZfTq2bBwFeXnvQP3FBgGTF8uAcvMUz6lk%2B8gh96dYn2kKjlD7GBZ%2FdyEQ%2FA2OOpNtNdN8ZpVH5FqqkfvOszFczzfzLT6Klj8262TPQ1A8gsxn75ALHOiJP9uKkbNxvQQueh8aczhpEomMFdcdQf%2BSQcMjCvbFG3p65JhDOch5VlxCUmCiheF0NJkT6Ksm27yFKnXIJ4N0%2B3zf543AwVYxpXb7r%2B1TQd0EtRATaatZyIedfjPr5d9XfKPKrijajTyRKTHDE4VQeJtq000ukNniV9GeXeOjLgnm2tXFQQ0NXyrk87%2FGpV2vo2AiiSy7etD61OTZutb8v1G46zvCWZeiggvAVAjMo3%2Bd0HWOQEH5Ozwa4eJOM%2B%2FoLb3dcUQSLZv5MaHScssSecw1cCAvQY6pgGI86pNGV1sTSvfhsColbsxdIbFDZjTVd%2FkAA%2BDkYWx%2FvxWjsTCx72sPBPReVWnU8MTv05nsGrl4%2FvQJDPawg0xnivOUlwB3QzN%2B9%2BHqZwx3AV0lwyt6i1vnk7fnBXkNY8HI7bgsreIveyi8XLl8%2Bi4VePbDhVX2HRJF3sG7EWpOid4DWEhfzjSHHgJD%2BE7IB0aqjb4vBoG8qJ1h1i1bPvwZV%2BRpmIu&X-Amz-Signature=68aa25efb8c75baba3edbf4043f712ebcbf627e9c14c893d3ac0430cad0f5716&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNDGR7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFd7TCVif2SoHb%2BZK5XI0lEvsxfPK3EwYyi2m5GXrDUAiAFXti94DtxDvzyDCNCE03JSwWyTNYoxSBJpZEuEc0h8SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzNkK%2BhOgjfBCzoO6KtwDuVOeKPLhjnUv6vXBmwuYUuoQY8dHPEv8ws97ULWQtx75Pyw9WQOxkakia%2FOFCq8Uk2Qm7c4qoyaPNjdroPMAURWn70rbyAtNdWjb12HRAMJ6HKkLTURcCGflVCfo2Dp4nQlahLwNeAPZKNRCe7zMnLe8eh1xxWLH1SAMCgdF%2FfOLNn%2B1kSm%2Bjm37pPpxIiRI4Ot1k8mwpbTFODDk7GpyXp1Ssj8TBEv89hUevy7bAz9mim%2FnZfTq2bBwFeXnvQP3FBgGTF8uAcvMUz6lk%2B8gh96dYn2kKjlD7GBZ%2FdyEQ%2FA2OOpNtNdN8ZpVH5FqqkfvOszFczzfzLT6Klj8262TPQ1A8gsxn75ALHOiJP9uKkbNxvQQueh8aczhpEomMFdcdQf%2BSQcMjCvbFG3p65JhDOch5VlxCUmCiheF0NJkT6Ksm27yFKnXIJ4N0%2B3zf543AwVYxpXb7r%2B1TQd0EtRATaatZyIedfjPr5d9XfKPKrijajTyRKTHDE4VQeJtq000ukNniV9GeXeOjLgnm2tXFQQ0NXyrk87%2FGpV2vo2AiiSy7etD61OTZutb8v1G46zvCWZeiggvAVAjMo3%2Bd0HWOQEH5Ozwa4eJOM%2B%2FoLb3dcUQSLZv5MaHScssSecw1cCAvQY6pgGI86pNGV1sTSvfhsColbsxdIbFDZjTVd%2FkAA%2BDkYWx%2FvxWjsTCx72sPBPReVWnU8MTv05nsGrl4%2FvQJDPawg0xnivOUlwB3QzN%2B9%2BHqZwx3AV0lwyt6i1vnk7fnBXkNY8HI7bgsreIveyi8XLl8%2Bi4VePbDhVX2HRJF3sG7EWpOid4DWEhfzjSHHgJD%2BE7IB0aqjb4vBoG8qJ1h1i1bPvwZV%2BRpmIu&X-Amz-Signature=eaa2ecfd12af00567c9090b8364617086955b755b67bd756c21e8317bf75d2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
