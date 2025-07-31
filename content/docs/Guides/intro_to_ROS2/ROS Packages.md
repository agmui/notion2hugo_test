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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4HWXNI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpn1bthFRlpebWkSWEUcRZZbPGYwif%2FCRv9pP7h%2FCbAiEA99gYXH7sjAQaxglDd8ddm8PB53CAG1mNpH1GPC%2FIvFIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrql5gxp3%2BpKamaHSrcA%2B2S1W1t4KvylBPZ7rDxzyOPYlZ6I15bWEe1z76IXsguwfMJlYZVMBzE3lRSEgwry1eoHJhNbVzNCrovhOE%2BhWt0ithONoyh%2Bdy5aiXFItv%2F3rldTI7Toxz2ZORXGQaPloPgQSKKuqSIdGQRv66K%2FYBXzxwxU%2FgTO2WOEhkHFbEseIf8uv2j2Un6VZk29aFPxHsVMtGiSmci9oaETTY90XHDvw0YGA%2BDc4TImQjkD4V986BOM1Voy6%2FETWj1Bcs0I6ZmcDpxUcQnRQgz8AJW76Gi%2F3aa6R%2BsRs5f%2FvohEueWhuKMPxjMqvPld3E%2BKoeKr0ibb9Z5LNt8qB4JAOcW%2ByiUJWBx44I22gpzIPgFGg9oUInKe%2Ftp1%2BfL161E1iocXVrPdDm%2BM6kxgjX%2FtHGDBui44YYOGBUVHybfEBnTZZe%2BunPDHrzq7VgWPJCt8C4GHZ8845Ougp%2BY7kPYxMUc3P99oQQCJzbpJwMlwbmQaHV7nQXeSbYzS8BSarx0ql2Q9AsQoEz61yVDZtD9owpLtLQ0s5o%2F7rGvuk%2B4KzgneJ9tkLwMQ9qaDLamrIbWDGfKsk78Fs5zhgrkuCJSYfeX0iCnCfrPoxuTTug41k057Q9FYOmq8GC%2BHLBDSJePMP2ZrMQGOqUBIIva%2FHra28vjRB8uRIHBybvYBwm6bBeiQelu8UQWiUUfTGRwR1OFA6siA4jx8ZbFHZrMeiVFGGDrf%2FsrGl3Dv1Y1HLNI4H6CcF7CIH%2FexjDzhFdmRB7HEY0nAdvjNjPzZp%2FMXcDWgx2FNrD%2Fr3hywMZPogArdJqNbiwYWa%2F8%2Bl1XnF4HoEWbVu2686j88UVnFPQl5EEsMOybaPoQ5T%2BvH%2FW3SgeP&X-Amz-Signature=2bd766a2a405edbd92e9be33dc8a6b20f1875009bc83aac71af795aa3a2377f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4HWXNI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpn1bthFRlpebWkSWEUcRZZbPGYwif%2FCRv9pP7h%2FCbAiEA99gYXH7sjAQaxglDd8ddm8PB53CAG1mNpH1GPC%2FIvFIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrql5gxp3%2BpKamaHSrcA%2B2S1W1t4KvylBPZ7rDxzyOPYlZ6I15bWEe1z76IXsguwfMJlYZVMBzE3lRSEgwry1eoHJhNbVzNCrovhOE%2BhWt0ithONoyh%2Bdy5aiXFItv%2F3rldTI7Toxz2ZORXGQaPloPgQSKKuqSIdGQRv66K%2FYBXzxwxU%2FgTO2WOEhkHFbEseIf8uv2j2Un6VZk29aFPxHsVMtGiSmci9oaETTY90XHDvw0YGA%2BDc4TImQjkD4V986BOM1Voy6%2FETWj1Bcs0I6ZmcDpxUcQnRQgz8AJW76Gi%2F3aa6R%2BsRs5f%2FvohEueWhuKMPxjMqvPld3E%2BKoeKr0ibb9Z5LNt8qB4JAOcW%2ByiUJWBx44I22gpzIPgFGg9oUInKe%2Ftp1%2BfL161E1iocXVrPdDm%2BM6kxgjX%2FtHGDBui44YYOGBUVHybfEBnTZZe%2BunPDHrzq7VgWPJCt8C4GHZ8845Ougp%2BY7kPYxMUc3P99oQQCJzbpJwMlwbmQaHV7nQXeSbYzS8BSarx0ql2Q9AsQoEz61yVDZtD9owpLtLQ0s5o%2F7rGvuk%2B4KzgneJ9tkLwMQ9qaDLamrIbWDGfKsk78Fs5zhgrkuCJSYfeX0iCnCfrPoxuTTug41k057Q9FYOmq8GC%2BHLBDSJePMP2ZrMQGOqUBIIva%2FHra28vjRB8uRIHBybvYBwm6bBeiQelu8UQWiUUfTGRwR1OFA6siA4jx8ZbFHZrMeiVFGGDrf%2FsrGl3Dv1Y1HLNI4H6CcF7CIH%2FexjDzhFdmRB7HEY0nAdvjNjPzZp%2FMXcDWgx2FNrD%2Fr3hywMZPogArdJqNbiwYWa%2F8%2Bl1XnF4HoEWbVu2686j88UVnFPQl5EEsMOybaPoQ5T%2BvH%2FW3SgeP&X-Amz-Signature=4dbaa2bbcd302f956e4b0eceaa174d6d589c23f3c4d2210c19d8afd75527b082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4HWXNI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpn1bthFRlpebWkSWEUcRZZbPGYwif%2FCRv9pP7h%2FCbAiEA99gYXH7sjAQaxglDd8ddm8PB53CAG1mNpH1GPC%2FIvFIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrql5gxp3%2BpKamaHSrcA%2B2S1W1t4KvylBPZ7rDxzyOPYlZ6I15bWEe1z76IXsguwfMJlYZVMBzE3lRSEgwry1eoHJhNbVzNCrovhOE%2BhWt0ithONoyh%2Bdy5aiXFItv%2F3rldTI7Toxz2ZORXGQaPloPgQSKKuqSIdGQRv66K%2FYBXzxwxU%2FgTO2WOEhkHFbEseIf8uv2j2Un6VZk29aFPxHsVMtGiSmci9oaETTY90XHDvw0YGA%2BDc4TImQjkD4V986BOM1Voy6%2FETWj1Bcs0I6ZmcDpxUcQnRQgz8AJW76Gi%2F3aa6R%2BsRs5f%2FvohEueWhuKMPxjMqvPld3E%2BKoeKr0ibb9Z5LNt8qB4JAOcW%2ByiUJWBx44I22gpzIPgFGg9oUInKe%2Ftp1%2BfL161E1iocXVrPdDm%2BM6kxgjX%2FtHGDBui44YYOGBUVHybfEBnTZZe%2BunPDHrzq7VgWPJCt8C4GHZ8845Ougp%2BY7kPYxMUc3P99oQQCJzbpJwMlwbmQaHV7nQXeSbYzS8BSarx0ql2Q9AsQoEz61yVDZtD9owpLtLQ0s5o%2F7rGvuk%2B4KzgneJ9tkLwMQ9qaDLamrIbWDGfKsk78Fs5zhgrkuCJSYfeX0iCnCfrPoxuTTug41k057Q9FYOmq8GC%2BHLBDSJePMP2ZrMQGOqUBIIva%2FHra28vjRB8uRIHBybvYBwm6bBeiQelu8UQWiUUfTGRwR1OFA6siA4jx8ZbFHZrMeiVFGGDrf%2FsrGl3Dv1Y1HLNI4H6CcF7CIH%2FexjDzhFdmRB7HEY0nAdvjNjPzZp%2FMXcDWgx2FNrD%2Fr3hywMZPogArdJqNbiwYWa%2F8%2Bl1XnF4HoEWbVu2686j88UVnFPQl5EEsMOybaPoQ5T%2BvH%2FW3SgeP&X-Amz-Signature=bb11d5b35edfa77fef3730f6d0654170cba54aabcdb5b83348d67fcd32034b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4HWXNI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpn1bthFRlpebWkSWEUcRZZbPGYwif%2FCRv9pP7h%2FCbAiEA99gYXH7sjAQaxglDd8ddm8PB53CAG1mNpH1GPC%2FIvFIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrql5gxp3%2BpKamaHSrcA%2B2S1W1t4KvylBPZ7rDxzyOPYlZ6I15bWEe1z76IXsguwfMJlYZVMBzE3lRSEgwry1eoHJhNbVzNCrovhOE%2BhWt0ithONoyh%2Bdy5aiXFItv%2F3rldTI7Toxz2ZORXGQaPloPgQSKKuqSIdGQRv66K%2FYBXzxwxU%2FgTO2WOEhkHFbEseIf8uv2j2Un6VZk29aFPxHsVMtGiSmci9oaETTY90XHDvw0YGA%2BDc4TImQjkD4V986BOM1Voy6%2FETWj1Bcs0I6ZmcDpxUcQnRQgz8AJW76Gi%2F3aa6R%2BsRs5f%2FvohEueWhuKMPxjMqvPld3E%2BKoeKr0ibb9Z5LNt8qB4JAOcW%2ByiUJWBx44I22gpzIPgFGg9oUInKe%2Ftp1%2BfL161E1iocXVrPdDm%2BM6kxgjX%2FtHGDBui44YYOGBUVHybfEBnTZZe%2BunPDHrzq7VgWPJCt8C4GHZ8845Ougp%2BY7kPYxMUc3P99oQQCJzbpJwMlwbmQaHV7nQXeSbYzS8BSarx0ql2Q9AsQoEz61yVDZtD9owpLtLQ0s5o%2F7rGvuk%2B4KzgneJ9tkLwMQ9qaDLamrIbWDGfKsk78Fs5zhgrkuCJSYfeX0iCnCfrPoxuTTug41k057Q9FYOmq8GC%2BHLBDSJePMP2ZrMQGOqUBIIva%2FHra28vjRB8uRIHBybvYBwm6bBeiQelu8UQWiUUfTGRwR1OFA6siA4jx8ZbFHZrMeiVFGGDrf%2FsrGl3Dv1Y1HLNI4H6CcF7CIH%2FexjDzhFdmRB7HEY0nAdvjNjPzZp%2FMXcDWgx2FNrD%2Fr3hywMZPogArdJqNbiwYWa%2F8%2Bl1XnF4HoEWbVu2686j88UVnFPQl5EEsMOybaPoQ5T%2BvH%2FW3SgeP&X-Amz-Signature=8e6458d0e45e520125ab0521476f2010ad31eb915824f001315ca925e6238e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4HWXNI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpn1bthFRlpebWkSWEUcRZZbPGYwif%2FCRv9pP7h%2FCbAiEA99gYXH7sjAQaxglDd8ddm8PB53CAG1mNpH1GPC%2FIvFIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrql5gxp3%2BpKamaHSrcA%2B2S1W1t4KvylBPZ7rDxzyOPYlZ6I15bWEe1z76IXsguwfMJlYZVMBzE3lRSEgwry1eoHJhNbVzNCrovhOE%2BhWt0ithONoyh%2Bdy5aiXFItv%2F3rldTI7Toxz2ZORXGQaPloPgQSKKuqSIdGQRv66K%2FYBXzxwxU%2FgTO2WOEhkHFbEseIf8uv2j2Un6VZk29aFPxHsVMtGiSmci9oaETTY90XHDvw0YGA%2BDc4TImQjkD4V986BOM1Voy6%2FETWj1Bcs0I6ZmcDpxUcQnRQgz8AJW76Gi%2F3aa6R%2BsRs5f%2FvohEueWhuKMPxjMqvPld3E%2BKoeKr0ibb9Z5LNt8qB4JAOcW%2ByiUJWBx44I22gpzIPgFGg9oUInKe%2Ftp1%2BfL161E1iocXVrPdDm%2BM6kxgjX%2FtHGDBui44YYOGBUVHybfEBnTZZe%2BunPDHrzq7VgWPJCt8C4GHZ8845Ougp%2BY7kPYxMUc3P99oQQCJzbpJwMlwbmQaHV7nQXeSbYzS8BSarx0ql2Q9AsQoEz61yVDZtD9owpLtLQ0s5o%2F7rGvuk%2B4KzgneJ9tkLwMQ9qaDLamrIbWDGfKsk78Fs5zhgrkuCJSYfeX0iCnCfrPoxuTTug41k057Q9FYOmq8GC%2BHLBDSJePMP2ZrMQGOqUBIIva%2FHra28vjRB8uRIHBybvYBwm6bBeiQelu8UQWiUUfTGRwR1OFA6siA4jx8ZbFHZrMeiVFGGDrf%2FsrGl3Dv1Y1HLNI4H6CcF7CIH%2FexjDzhFdmRB7HEY0nAdvjNjPzZp%2FMXcDWgx2FNrD%2Fr3hywMZPogArdJqNbiwYWa%2F8%2Bl1XnF4HoEWbVu2686j88UVnFPQl5EEsMOybaPoQ5T%2BvH%2FW3SgeP&X-Amz-Signature=e2aaf71134c0b5f216650c72f0419f9d169771c3c01cbbc4eac3756e9ff8c7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4HWXNI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpn1bthFRlpebWkSWEUcRZZbPGYwif%2FCRv9pP7h%2FCbAiEA99gYXH7sjAQaxglDd8ddm8PB53CAG1mNpH1GPC%2FIvFIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrql5gxp3%2BpKamaHSrcA%2B2S1W1t4KvylBPZ7rDxzyOPYlZ6I15bWEe1z76IXsguwfMJlYZVMBzE3lRSEgwry1eoHJhNbVzNCrovhOE%2BhWt0ithONoyh%2Bdy5aiXFItv%2F3rldTI7Toxz2ZORXGQaPloPgQSKKuqSIdGQRv66K%2FYBXzxwxU%2FgTO2WOEhkHFbEseIf8uv2j2Un6VZk29aFPxHsVMtGiSmci9oaETTY90XHDvw0YGA%2BDc4TImQjkD4V986BOM1Voy6%2FETWj1Bcs0I6ZmcDpxUcQnRQgz8AJW76Gi%2F3aa6R%2BsRs5f%2FvohEueWhuKMPxjMqvPld3E%2BKoeKr0ibb9Z5LNt8qB4JAOcW%2ByiUJWBx44I22gpzIPgFGg9oUInKe%2Ftp1%2BfL161E1iocXVrPdDm%2BM6kxgjX%2FtHGDBui44YYOGBUVHybfEBnTZZe%2BunPDHrzq7VgWPJCt8C4GHZ8845Ougp%2BY7kPYxMUc3P99oQQCJzbpJwMlwbmQaHV7nQXeSbYzS8BSarx0ql2Q9AsQoEz61yVDZtD9owpLtLQ0s5o%2F7rGvuk%2B4KzgneJ9tkLwMQ9qaDLamrIbWDGfKsk78Fs5zhgrkuCJSYfeX0iCnCfrPoxuTTug41k057Q9FYOmq8GC%2BHLBDSJePMP2ZrMQGOqUBIIva%2FHra28vjRB8uRIHBybvYBwm6bBeiQelu8UQWiUUfTGRwR1OFA6siA4jx8ZbFHZrMeiVFGGDrf%2FsrGl3Dv1Y1HLNI4H6CcF7CIH%2FexjDzhFdmRB7HEY0nAdvjNjPzZp%2FMXcDWgx2FNrD%2Fr3hywMZPogArdJqNbiwYWa%2F8%2Bl1XnF4HoEWbVu2686j88UVnFPQl5EEsMOybaPoQ5T%2BvH%2FW3SgeP&X-Amz-Signature=40c0173348212c7e213f5d90aaa769712c6510bb226b67db1f3a9b9d6e4e21d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4HWXNI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpn1bthFRlpebWkSWEUcRZZbPGYwif%2FCRv9pP7h%2FCbAiEA99gYXH7sjAQaxglDd8ddm8PB53CAG1mNpH1GPC%2FIvFIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrql5gxp3%2BpKamaHSrcA%2B2S1W1t4KvylBPZ7rDxzyOPYlZ6I15bWEe1z76IXsguwfMJlYZVMBzE3lRSEgwry1eoHJhNbVzNCrovhOE%2BhWt0ithONoyh%2Bdy5aiXFItv%2F3rldTI7Toxz2ZORXGQaPloPgQSKKuqSIdGQRv66K%2FYBXzxwxU%2FgTO2WOEhkHFbEseIf8uv2j2Un6VZk29aFPxHsVMtGiSmci9oaETTY90XHDvw0YGA%2BDc4TImQjkD4V986BOM1Voy6%2FETWj1Bcs0I6ZmcDpxUcQnRQgz8AJW76Gi%2F3aa6R%2BsRs5f%2FvohEueWhuKMPxjMqvPld3E%2BKoeKr0ibb9Z5LNt8qB4JAOcW%2ByiUJWBx44I22gpzIPgFGg9oUInKe%2Ftp1%2BfL161E1iocXVrPdDm%2BM6kxgjX%2FtHGDBui44YYOGBUVHybfEBnTZZe%2BunPDHrzq7VgWPJCt8C4GHZ8845Ougp%2BY7kPYxMUc3P99oQQCJzbpJwMlwbmQaHV7nQXeSbYzS8BSarx0ql2Q9AsQoEz61yVDZtD9owpLtLQ0s5o%2F7rGvuk%2B4KzgneJ9tkLwMQ9qaDLamrIbWDGfKsk78Fs5zhgrkuCJSYfeX0iCnCfrPoxuTTug41k057Q9FYOmq8GC%2BHLBDSJePMP2ZrMQGOqUBIIva%2FHra28vjRB8uRIHBybvYBwm6bBeiQelu8UQWiUUfTGRwR1OFA6siA4jx8ZbFHZrMeiVFGGDrf%2FsrGl3Dv1Y1HLNI4H6CcF7CIH%2FexjDzhFdmRB7HEY0nAdvjNjPzZp%2FMXcDWgx2FNrD%2Fr3hywMZPogArdJqNbiwYWa%2F8%2Bl1XnF4HoEWbVu2686j88UVnFPQl5EEsMOybaPoQ5T%2BvH%2FW3SgeP&X-Amz-Signature=0a4c98b8da6e756e278c37cc46fa2bcc9e5d59992a07fb308d9e53617de6f517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
