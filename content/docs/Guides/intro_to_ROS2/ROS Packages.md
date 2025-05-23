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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJXLF6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDs62OM2kJ200%2FeJkmCARuU%2FeyC2ZW%2BtOS%2F4zJ2%2Bkeu9QIhAMZVDg%2BZaMR%2FE%2BMmw%2BBOJ8UNSHmoZT8r%2BC0XRDNMRP6kKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEFCgBfsEdvt2qVnAq3ANJMWmUHYZNWw94qRjE7mwPmH20rGTQ85LfTRoJaOmGZoGge1Bn0lTLS9vqc%2FrzH0wCSj%2FSIn6V4Hs1Fx4Py5dugJxQeAcmFhXt2QxjpjYopfN9Fa8bKu8DzrCzvYnlH78PglaUNobG5vIzf6QoC3QYLhDWVgCdQt2rbhk9v2eJNAAB4PTOZNRo4enEl8hLQ7LnDjP5%2FMolmm4qFbIewXhI8cR5gWbkjzwKjaVcuYk3ESdQNuDpsOkxuShMTNADdu4jrwZFDYBjIJeMDIdPB6AMip8vR0or0kjDa62QSIkYJS1K1IqYrjULJShpXU89nOOu2oKSiALDGXN6ktz9aYe8a1Ztzypsr8sOLUvEi7ryVnW01fIvWe99oV5xcDBzlNF%2Bh6jQehzApLRbgfjQULb1lYoW3%2FZclVpyihNojB%2Bn5JhSfdQaq0gKJ%2BpV5tV1TozB9xHKYjQErlgfIzwQaWVawjZYPH8rmO4BdTC13w5Va8s3ftHS1L%2BSR6CqgFaR6B%2BIQONocr8GOpTCJ2HyEFqomFH9FOU2kiZwEnLepB7zKgw0uo15Tr5Dn2%2FTfmrm9mBknmWIDgz5CxMvgA6vvCfJ3JPhBM1ObeAkhPdIDfs0C7TtDrq%2BdNpy%2FDYCHTDxocPBBjqkAb6x8fPUEqUuM1QZ9OzsEKXpNFHDP8h0zXViwcJT5z0bbcpktjx5XFUtBriDODR9KTayVQ0N0J4cVwtbWk4yBRCY42hKMHOTD%2F0P22FwnRGiUm7Omu99LnebM955fNBLDh6yoNBrlFIrH8sr5ikOu6xfnwxw0YfYloj3RGa4KXS5%2F%2FyNHsUhWvMxprttwxx%2FHW3x%2FoXafY7hLlUZkuma9Cip2A9U&X-Amz-Signature=4e44edfa13bd6ec96eb006bb2ccaadd998179862834c54cdd2bebeff07d75377&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJXLF6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDs62OM2kJ200%2FeJkmCARuU%2FeyC2ZW%2BtOS%2F4zJ2%2Bkeu9QIhAMZVDg%2BZaMR%2FE%2BMmw%2BBOJ8UNSHmoZT8r%2BC0XRDNMRP6kKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEFCgBfsEdvt2qVnAq3ANJMWmUHYZNWw94qRjE7mwPmH20rGTQ85LfTRoJaOmGZoGge1Bn0lTLS9vqc%2FrzH0wCSj%2FSIn6V4Hs1Fx4Py5dugJxQeAcmFhXt2QxjpjYopfN9Fa8bKu8DzrCzvYnlH78PglaUNobG5vIzf6QoC3QYLhDWVgCdQt2rbhk9v2eJNAAB4PTOZNRo4enEl8hLQ7LnDjP5%2FMolmm4qFbIewXhI8cR5gWbkjzwKjaVcuYk3ESdQNuDpsOkxuShMTNADdu4jrwZFDYBjIJeMDIdPB6AMip8vR0or0kjDa62QSIkYJS1K1IqYrjULJShpXU89nOOu2oKSiALDGXN6ktz9aYe8a1Ztzypsr8sOLUvEi7ryVnW01fIvWe99oV5xcDBzlNF%2Bh6jQehzApLRbgfjQULb1lYoW3%2FZclVpyihNojB%2Bn5JhSfdQaq0gKJ%2BpV5tV1TozB9xHKYjQErlgfIzwQaWVawjZYPH8rmO4BdTC13w5Va8s3ftHS1L%2BSR6CqgFaR6B%2BIQONocr8GOpTCJ2HyEFqomFH9FOU2kiZwEnLepB7zKgw0uo15Tr5Dn2%2FTfmrm9mBknmWIDgz5CxMvgA6vvCfJ3JPhBM1ObeAkhPdIDfs0C7TtDrq%2BdNpy%2FDYCHTDxocPBBjqkAb6x8fPUEqUuM1QZ9OzsEKXpNFHDP8h0zXViwcJT5z0bbcpktjx5XFUtBriDODR9KTayVQ0N0J4cVwtbWk4yBRCY42hKMHOTD%2F0P22FwnRGiUm7Omu99LnebM955fNBLDh6yoNBrlFIrH8sr5ikOu6xfnwxw0YfYloj3RGa4KXS5%2F%2FyNHsUhWvMxprttwxx%2FHW3x%2FoXafY7hLlUZkuma9Cip2A9U&X-Amz-Signature=ea4e2a3b557acc162ff5d93d779e301030cfc6b69cca0ca581a77ad2c5400be7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJXLF6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDs62OM2kJ200%2FeJkmCARuU%2FeyC2ZW%2BtOS%2F4zJ2%2Bkeu9QIhAMZVDg%2BZaMR%2FE%2BMmw%2BBOJ8UNSHmoZT8r%2BC0XRDNMRP6kKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEFCgBfsEdvt2qVnAq3ANJMWmUHYZNWw94qRjE7mwPmH20rGTQ85LfTRoJaOmGZoGge1Bn0lTLS9vqc%2FrzH0wCSj%2FSIn6V4Hs1Fx4Py5dugJxQeAcmFhXt2QxjpjYopfN9Fa8bKu8DzrCzvYnlH78PglaUNobG5vIzf6QoC3QYLhDWVgCdQt2rbhk9v2eJNAAB4PTOZNRo4enEl8hLQ7LnDjP5%2FMolmm4qFbIewXhI8cR5gWbkjzwKjaVcuYk3ESdQNuDpsOkxuShMTNADdu4jrwZFDYBjIJeMDIdPB6AMip8vR0or0kjDa62QSIkYJS1K1IqYrjULJShpXU89nOOu2oKSiALDGXN6ktz9aYe8a1Ztzypsr8sOLUvEi7ryVnW01fIvWe99oV5xcDBzlNF%2Bh6jQehzApLRbgfjQULb1lYoW3%2FZclVpyihNojB%2Bn5JhSfdQaq0gKJ%2BpV5tV1TozB9xHKYjQErlgfIzwQaWVawjZYPH8rmO4BdTC13w5Va8s3ftHS1L%2BSR6CqgFaR6B%2BIQONocr8GOpTCJ2HyEFqomFH9FOU2kiZwEnLepB7zKgw0uo15Tr5Dn2%2FTfmrm9mBknmWIDgz5CxMvgA6vvCfJ3JPhBM1ObeAkhPdIDfs0C7TtDrq%2BdNpy%2FDYCHTDxocPBBjqkAb6x8fPUEqUuM1QZ9OzsEKXpNFHDP8h0zXViwcJT5z0bbcpktjx5XFUtBriDODR9KTayVQ0N0J4cVwtbWk4yBRCY42hKMHOTD%2F0P22FwnRGiUm7Omu99LnebM955fNBLDh6yoNBrlFIrH8sr5ikOu6xfnwxw0YfYloj3RGa4KXS5%2F%2FyNHsUhWvMxprttwxx%2FHW3x%2FoXafY7hLlUZkuma9Cip2A9U&X-Amz-Signature=9a822c36b715aa79c0144331a53299468f0330f850eb291f907411d7e2a2f9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJXLF6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDs62OM2kJ200%2FeJkmCARuU%2FeyC2ZW%2BtOS%2F4zJ2%2Bkeu9QIhAMZVDg%2BZaMR%2FE%2BMmw%2BBOJ8UNSHmoZT8r%2BC0XRDNMRP6kKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEFCgBfsEdvt2qVnAq3ANJMWmUHYZNWw94qRjE7mwPmH20rGTQ85LfTRoJaOmGZoGge1Bn0lTLS9vqc%2FrzH0wCSj%2FSIn6V4Hs1Fx4Py5dugJxQeAcmFhXt2QxjpjYopfN9Fa8bKu8DzrCzvYnlH78PglaUNobG5vIzf6QoC3QYLhDWVgCdQt2rbhk9v2eJNAAB4PTOZNRo4enEl8hLQ7LnDjP5%2FMolmm4qFbIewXhI8cR5gWbkjzwKjaVcuYk3ESdQNuDpsOkxuShMTNADdu4jrwZFDYBjIJeMDIdPB6AMip8vR0or0kjDa62QSIkYJS1K1IqYrjULJShpXU89nOOu2oKSiALDGXN6ktz9aYe8a1Ztzypsr8sOLUvEi7ryVnW01fIvWe99oV5xcDBzlNF%2Bh6jQehzApLRbgfjQULb1lYoW3%2FZclVpyihNojB%2Bn5JhSfdQaq0gKJ%2BpV5tV1TozB9xHKYjQErlgfIzwQaWVawjZYPH8rmO4BdTC13w5Va8s3ftHS1L%2BSR6CqgFaR6B%2BIQONocr8GOpTCJ2HyEFqomFH9FOU2kiZwEnLepB7zKgw0uo15Tr5Dn2%2FTfmrm9mBknmWIDgz5CxMvgA6vvCfJ3JPhBM1ObeAkhPdIDfs0C7TtDrq%2BdNpy%2FDYCHTDxocPBBjqkAb6x8fPUEqUuM1QZ9OzsEKXpNFHDP8h0zXViwcJT5z0bbcpktjx5XFUtBriDODR9KTayVQ0N0J4cVwtbWk4yBRCY42hKMHOTD%2F0P22FwnRGiUm7Omu99LnebM955fNBLDh6yoNBrlFIrH8sr5ikOu6xfnwxw0YfYloj3RGa4KXS5%2F%2FyNHsUhWvMxprttwxx%2FHW3x%2FoXafY7hLlUZkuma9Cip2A9U&X-Amz-Signature=8d6b1dc3dca8530c18dc39bbbfea8ffe2228dfeb8a12bf764579decbcb74720c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJXLF6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDs62OM2kJ200%2FeJkmCARuU%2FeyC2ZW%2BtOS%2F4zJ2%2Bkeu9QIhAMZVDg%2BZaMR%2FE%2BMmw%2BBOJ8UNSHmoZT8r%2BC0XRDNMRP6kKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEFCgBfsEdvt2qVnAq3ANJMWmUHYZNWw94qRjE7mwPmH20rGTQ85LfTRoJaOmGZoGge1Bn0lTLS9vqc%2FrzH0wCSj%2FSIn6V4Hs1Fx4Py5dugJxQeAcmFhXt2QxjpjYopfN9Fa8bKu8DzrCzvYnlH78PglaUNobG5vIzf6QoC3QYLhDWVgCdQt2rbhk9v2eJNAAB4PTOZNRo4enEl8hLQ7LnDjP5%2FMolmm4qFbIewXhI8cR5gWbkjzwKjaVcuYk3ESdQNuDpsOkxuShMTNADdu4jrwZFDYBjIJeMDIdPB6AMip8vR0or0kjDa62QSIkYJS1K1IqYrjULJShpXU89nOOu2oKSiALDGXN6ktz9aYe8a1Ztzypsr8sOLUvEi7ryVnW01fIvWe99oV5xcDBzlNF%2Bh6jQehzApLRbgfjQULb1lYoW3%2FZclVpyihNojB%2Bn5JhSfdQaq0gKJ%2BpV5tV1TozB9xHKYjQErlgfIzwQaWVawjZYPH8rmO4BdTC13w5Va8s3ftHS1L%2BSR6CqgFaR6B%2BIQONocr8GOpTCJ2HyEFqomFH9FOU2kiZwEnLepB7zKgw0uo15Tr5Dn2%2FTfmrm9mBknmWIDgz5CxMvgA6vvCfJ3JPhBM1ObeAkhPdIDfs0C7TtDrq%2BdNpy%2FDYCHTDxocPBBjqkAb6x8fPUEqUuM1QZ9OzsEKXpNFHDP8h0zXViwcJT5z0bbcpktjx5XFUtBriDODR9KTayVQ0N0J4cVwtbWk4yBRCY42hKMHOTD%2F0P22FwnRGiUm7Omu99LnebM955fNBLDh6yoNBrlFIrH8sr5ikOu6xfnwxw0YfYloj3RGa4KXS5%2F%2FyNHsUhWvMxprttwxx%2FHW3x%2FoXafY7hLlUZkuma9Cip2A9U&X-Amz-Signature=783fa35e85487cd0278b434f58857d75de80033666bea95ec96c658f8a716213&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJXLF6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDs62OM2kJ200%2FeJkmCARuU%2FeyC2ZW%2BtOS%2F4zJ2%2Bkeu9QIhAMZVDg%2BZaMR%2FE%2BMmw%2BBOJ8UNSHmoZT8r%2BC0XRDNMRP6kKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEFCgBfsEdvt2qVnAq3ANJMWmUHYZNWw94qRjE7mwPmH20rGTQ85LfTRoJaOmGZoGge1Bn0lTLS9vqc%2FrzH0wCSj%2FSIn6V4Hs1Fx4Py5dugJxQeAcmFhXt2QxjpjYopfN9Fa8bKu8DzrCzvYnlH78PglaUNobG5vIzf6QoC3QYLhDWVgCdQt2rbhk9v2eJNAAB4PTOZNRo4enEl8hLQ7LnDjP5%2FMolmm4qFbIewXhI8cR5gWbkjzwKjaVcuYk3ESdQNuDpsOkxuShMTNADdu4jrwZFDYBjIJeMDIdPB6AMip8vR0or0kjDa62QSIkYJS1K1IqYrjULJShpXU89nOOu2oKSiALDGXN6ktz9aYe8a1Ztzypsr8sOLUvEi7ryVnW01fIvWe99oV5xcDBzlNF%2Bh6jQehzApLRbgfjQULb1lYoW3%2FZclVpyihNojB%2Bn5JhSfdQaq0gKJ%2BpV5tV1TozB9xHKYjQErlgfIzwQaWVawjZYPH8rmO4BdTC13w5Va8s3ftHS1L%2BSR6CqgFaR6B%2BIQONocr8GOpTCJ2HyEFqomFH9FOU2kiZwEnLepB7zKgw0uo15Tr5Dn2%2FTfmrm9mBknmWIDgz5CxMvgA6vvCfJ3JPhBM1ObeAkhPdIDfs0C7TtDrq%2BdNpy%2FDYCHTDxocPBBjqkAb6x8fPUEqUuM1QZ9OzsEKXpNFHDP8h0zXViwcJT5z0bbcpktjx5XFUtBriDODR9KTayVQ0N0J4cVwtbWk4yBRCY42hKMHOTD%2F0P22FwnRGiUm7Omu99LnebM955fNBLDh6yoNBrlFIrH8sr5ikOu6xfnwxw0YfYloj3RGa4KXS5%2F%2FyNHsUhWvMxprttwxx%2FHW3x%2FoXafY7hLlUZkuma9Cip2A9U&X-Amz-Signature=b2d91f1c535a1cc930cb4a2c1b5ac4ad497b38e0344a24dab5795cb5f8d68839&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJXLF6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDs62OM2kJ200%2FeJkmCARuU%2FeyC2ZW%2BtOS%2F4zJ2%2Bkeu9QIhAMZVDg%2BZaMR%2FE%2BMmw%2BBOJ8UNSHmoZT8r%2BC0XRDNMRP6kKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEFCgBfsEdvt2qVnAq3ANJMWmUHYZNWw94qRjE7mwPmH20rGTQ85LfTRoJaOmGZoGge1Bn0lTLS9vqc%2FrzH0wCSj%2FSIn6V4Hs1Fx4Py5dugJxQeAcmFhXt2QxjpjYopfN9Fa8bKu8DzrCzvYnlH78PglaUNobG5vIzf6QoC3QYLhDWVgCdQt2rbhk9v2eJNAAB4PTOZNRo4enEl8hLQ7LnDjP5%2FMolmm4qFbIewXhI8cR5gWbkjzwKjaVcuYk3ESdQNuDpsOkxuShMTNADdu4jrwZFDYBjIJeMDIdPB6AMip8vR0or0kjDa62QSIkYJS1K1IqYrjULJShpXU89nOOu2oKSiALDGXN6ktz9aYe8a1Ztzypsr8sOLUvEi7ryVnW01fIvWe99oV5xcDBzlNF%2Bh6jQehzApLRbgfjQULb1lYoW3%2FZclVpyihNojB%2Bn5JhSfdQaq0gKJ%2BpV5tV1TozB9xHKYjQErlgfIzwQaWVawjZYPH8rmO4BdTC13w5Va8s3ftHS1L%2BSR6CqgFaR6B%2BIQONocr8GOpTCJ2HyEFqomFH9FOU2kiZwEnLepB7zKgw0uo15Tr5Dn2%2FTfmrm9mBknmWIDgz5CxMvgA6vvCfJ3JPhBM1ObeAkhPdIDfs0C7TtDrq%2BdNpy%2FDYCHTDxocPBBjqkAb6x8fPUEqUuM1QZ9OzsEKXpNFHDP8h0zXViwcJT5z0bbcpktjx5XFUtBriDODR9KTayVQ0N0J4cVwtbWk4yBRCY42hKMHOTD%2F0P22FwnRGiUm7Omu99LnebM955fNBLDh6yoNBrlFIrH8sr5ikOu6xfnwxw0YfYloj3RGa4KXS5%2F%2FyNHsUhWvMxprttwxx%2FHW3x%2FoXafY7hLlUZkuma9Cip2A9U&X-Amz-Signature=2a2e941cb4c6ba57b079f5dd385e07ce05b99842feae9e4f1d9b63602feba8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
