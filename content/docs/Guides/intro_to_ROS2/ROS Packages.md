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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZE7M2C%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAqMvCcATewhdjyP5aRbHuv%2BLnqFfm8%2Fm3un7rn69dmYAiBviXRU7XCDMbbal1DVsFJ%2F2SiH1KlAAN%2BV%2B%2FwlcHEz%2BSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAOT4Sh0S5Mpo2%2FKtwDLelYpzMv5kWOlQjw5k77M2fTKrPpLXez%2BeBh%2F%2BeIH5wTza2oM4E3bJjknS8rjQDgQs4L0ytpF8kDLexgsV41gxJolK%2Fl9KzDnYyL5HGyWccHat56RzRI0oZUZ18h87vIJJ9tI2t2xet88x6D3eUywNaBCbnUctrRfvllvxMz3ZMfD1bo30SMcrC46P45PhG%2FaHO78dtdMMOpMzsSIE2tWH5zdEMNxViKwuLeNBtjxCHjoj32GqFdYiVM69Nw%2B5nDox4Y%2F4JBp9kKVUY622DaLaMiDK3Ww6HUC5emtCk5t0MZG%2FjAMERhNa3HkS2DdJOTNVaDNc6xVGoP6gNRe44U8xOcYXf9M7JI3EkwrJBw%2Fu7NklbIgPihwQYhKSa5f9KS2NYsrg6y3pHV2PQmofp1238VvG%2BC7ugxDp6Zps6exDw7FcYfBM28sKECmLNpMHr8RWZtnyLqzaCrDT6pm1h%2BlfCNhQ%2B2cTab1g%2F8lamKPn9qsDNjh4NCqMNcd%2FjKjItKKXWdDogzAwoUCJIq%2BPLE5rt15TN7RMRQMzC0aVUwTpbW3VeofYt%2FGg5D57zQl9x16wN8aOJ8ArzHWdVVNxlXmjJQK%2F8yXlOBsPHyDe1DxUa4jNpg2ISA591j%2BAEwt5%2BfwAY6pgHEDrmC67xwe%2BfjgJw9DFugnsKC8%2FOJk5vhYa3%2F8YoOHjpJhlPnlhjivmVQCcH%2BUe41W493dF1%2FiRLH9fDFtgwwcjlLOSntTwuAfEtoWPLCfbtVFXcXmDglMHd7TLmwUVr2l5uD9jbixsxnA4kDOhMIHvvYnkBZf%2FLrIzvca1UV5bia6Iw0UuugSny1325lzRcPAN0IiXPrUcmtLNVsd1xxkiysZ%2FEt&X-Amz-Signature=213b30e72d3b9f0d7344c8c2e4078114612daecfa88a412a047df0bb6cd696a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZE7M2C%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAqMvCcATewhdjyP5aRbHuv%2BLnqFfm8%2Fm3un7rn69dmYAiBviXRU7XCDMbbal1DVsFJ%2F2SiH1KlAAN%2BV%2B%2FwlcHEz%2BSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAOT4Sh0S5Mpo2%2FKtwDLelYpzMv5kWOlQjw5k77M2fTKrPpLXez%2BeBh%2F%2BeIH5wTza2oM4E3bJjknS8rjQDgQs4L0ytpF8kDLexgsV41gxJolK%2Fl9KzDnYyL5HGyWccHat56RzRI0oZUZ18h87vIJJ9tI2t2xet88x6D3eUywNaBCbnUctrRfvllvxMz3ZMfD1bo30SMcrC46P45PhG%2FaHO78dtdMMOpMzsSIE2tWH5zdEMNxViKwuLeNBtjxCHjoj32GqFdYiVM69Nw%2B5nDox4Y%2F4JBp9kKVUY622DaLaMiDK3Ww6HUC5emtCk5t0MZG%2FjAMERhNa3HkS2DdJOTNVaDNc6xVGoP6gNRe44U8xOcYXf9M7JI3EkwrJBw%2Fu7NklbIgPihwQYhKSa5f9KS2NYsrg6y3pHV2PQmofp1238VvG%2BC7ugxDp6Zps6exDw7FcYfBM28sKECmLNpMHr8RWZtnyLqzaCrDT6pm1h%2BlfCNhQ%2B2cTab1g%2F8lamKPn9qsDNjh4NCqMNcd%2FjKjItKKXWdDogzAwoUCJIq%2BPLE5rt15TN7RMRQMzC0aVUwTpbW3VeofYt%2FGg5D57zQl9x16wN8aOJ8ArzHWdVVNxlXmjJQK%2F8yXlOBsPHyDe1DxUa4jNpg2ISA591j%2BAEwt5%2BfwAY6pgHEDrmC67xwe%2BfjgJw9DFugnsKC8%2FOJk5vhYa3%2F8YoOHjpJhlPnlhjivmVQCcH%2BUe41W493dF1%2FiRLH9fDFtgwwcjlLOSntTwuAfEtoWPLCfbtVFXcXmDglMHd7TLmwUVr2l5uD9jbixsxnA4kDOhMIHvvYnkBZf%2FLrIzvca1UV5bia6Iw0UuugSny1325lzRcPAN0IiXPrUcmtLNVsd1xxkiysZ%2FEt&X-Amz-Signature=5502460dd0d7d32095b48a932a2f7a2ef1b23593197bcfa5e1437ce88c7a81bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZE7M2C%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAqMvCcATewhdjyP5aRbHuv%2BLnqFfm8%2Fm3un7rn69dmYAiBviXRU7XCDMbbal1DVsFJ%2F2SiH1KlAAN%2BV%2B%2FwlcHEz%2BSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAOT4Sh0S5Mpo2%2FKtwDLelYpzMv5kWOlQjw5k77M2fTKrPpLXez%2BeBh%2F%2BeIH5wTza2oM4E3bJjknS8rjQDgQs4L0ytpF8kDLexgsV41gxJolK%2Fl9KzDnYyL5HGyWccHat56RzRI0oZUZ18h87vIJJ9tI2t2xet88x6D3eUywNaBCbnUctrRfvllvxMz3ZMfD1bo30SMcrC46P45PhG%2FaHO78dtdMMOpMzsSIE2tWH5zdEMNxViKwuLeNBtjxCHjoj32GqFdYiVM69Nw%2B5nDox4Y%2F4JBp9kKVUY622DaLaMiDK3Ww6HUC5emtCk5t0MZG%2FjAMERhNa3HkS2DdJOTNVaDNc6xVGoP6gNRe44U8xOcYXf9M7JI3EkwrJBw%2Fu7NklbIgPihwQYhKSa5f9KS2NYsrg6y3pHV2PQmofp1238VvG%2BC7ugxDp6Zps6exDw7FcYfBM28sKECmLNpMHr8RWZtnyLqzaCrDT6pm1h%2BlfCNhQ%2B2cTab1g%2F8lamKPn9qsDNjh4NCqMNcd%2FjKjItKKXWdDogzAwoUCJIq%2BPLE5rt15TN7RMRQMzC0aVUwTpbW3VeofYt%2FGg5D57zQl9x16wN8aOJ8ArzHWdVVNxlXmjJQK%2F8yXlOBsPHyDe1DxUa4jNpg2ISA591j%2BAEwt5%2BfwAY6pgHEDrmC67xwe%2BfjgJw9DFugnsKC8%2FOJk5vhYa3%2F8YoOHjpJhlPnlhjivmVQCcH%2BUe41W493dF1%2FiRLH9fDFtgwwcjlLOSntTwuAfEtoWPLCfbtVFXcXmDglMHd7TLmwUVr2l5uD9jbixsxnA4kDOhMIHvvYnkBZf%2FLrIzvca1UV5bia6Iw0UuugSny1325lzRcPAN0IiXPrUcmtLNVsd1xxkiysZ%2FEt&X-Amz-Signature=01b479d684c173e7342c819a0ec679144ae05821a1c9986379bcdf9d003e522c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZE7M2C%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAqMvCcATewhdjyP5aRbHuv%2BLnqFfm8%2Fm3un7rn69dmYAiBviXRU7XCDMbbal1DVsFJ%2F2SiH1KlAAN%2BV%2B%2FwlcHEz%2BSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAOT4Sh0S5Mpo2%2FKtwDLelYpzMv5kWOlQjw5k77M2fTKrPpLXez%2BeBh%2F%2BeIH5wTza2oM4E3bJjknS8rjQDgQs4L0ytpF8kDLexgsV41gxJolK%2Fl9KzDnYyL5HGyWccHat56RzRI0oZUZ18h87vIJJ9tI2t2xet88x6D3eUywNaBCbnUctrRfvllvxMz3ZMfD1bo30SMcrC46P45PhG%2FaHO78dtdMMOpMzsSIE2tWH5zdEMNxViKwuLeNBtjxCHjoj32GqFdYiVM69Nw%2B5nDox4Y%2F4JBp9kKVUY622DaLaMiDK3Ww6HUC5emtCk5t0MZG%2FjAMERhNa3HkS2DdJOTNVaDNc6xVGoP6gNRe44U8xOcYXf9M7JI3EkwrJBw%2Fu7NklbIgPihwQYhKSa5f9KS2NYsrg6y3pHV2PQmofp1238VvG%2BC7ugxDp6Zps6exDw7FcYfBM28sKECmLNpMHr8RWZtnyLqzaCrDT6pm1h%2BlfCNhQ%2B2cTab1g%2F8lamKPn9qsDNjh4NCqMNcd%2FjKjItKKXWdDogzAwoUCJIq%2BPLE5rt15TN7RMRQMzC0aVUwTpbW3VeofYt%2FGg5D57zQl9x16wN8aOJ8ArzHWdVVNxlXmjJQK%2F8yXlOBsPHyDe1DxUa4jNpg2ISA591j%2BAEwt5%2BfwAY6pgHEDrmC67xwe%2BfjgJw9DFugnsKC8%2FOJk5vhYa3%2F8YoOHjpJhlPnlhjivmVQCcH%2BUe41W493dF1%2FiRLH9fDFtgwwcjlLOSntTwuAfEtoWPLCfbtVFXcXmDglMHd7TLmwUVr2l5uD9jbixsxnA4kDOhMIHvvYnkBZf%2FLrIzvca1UV5bia6Iw0UuugSny1325lzRcPAN0IiXPrUcmtLNVsd1xxkiysZ%2FEt&X-Amz-Signature=b0b59a768ec4cceb40d289178035c00adf908b681d8e91d10884bc77379df3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZE7M2C%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAqMvCcATewhdjyP5aRbHuv%2BLnqFfm8%2Fm3un7rn69dmYAiBviXRU7XCDMbbal1DVsFJ%2F2SiH1KlAAN%2BV%2B%2FwlcHEz%2BSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAOT4Sh0S5Mpo2%2FKtwDLelYpzMv5kWOlQjw5k77M2fTKrPpLXez%2BeBh%2F%2BeIH5wTza2oM4E3bJjknS8rjQDgQs4L0ytpF8kDLexgsV41gxJolK%2Fl9KzDnYyL5HGyWccHat56RzRI0oZUZ18h87vIJJ9tI2t2xet88x6D3eUywNaBCbnUctrRfvllvxMz3ZMfD1bo30SMcrC46P45PhG%2FaHO78dtdMMOpMzsSIE2tWH5zdEMNxViKwuLeNBtjxCHjoj32GqFdYiVM69Nw%2B5nDox4Y%2F4JBp9kKVUY622DaLaMiDK3Ww6HUC5emtCk5t0MZG%2FjAMERhNa3HkS2DdJOTNVaDNc6xVGoP6gNRe44U8xOcYXf9M7JI3EkwrJBw%2Fu7NklbIgPihwQYhKSa5f9KS2NYsrg6y3pHV2PQmofp1238VvG%2BC7ugxDp6Zps6exDw7FcYfBM28sKECmLNpMHr8RWZtnyLqzaCrDT6pm1h%2BlfCNhQ%2B2cTab1g%2F8lamKPn9qsDNjh4NCqMNcd%2FjKjItKKXWdDogzAwoUCJIq%2BPLE5rt15TN7RMRQMzC0aVUwTpbW3VeofYt%2FGg5D57zQl9x16wN8aOJ8ArzHWdVVNxlXmjJQK%2F8yXlOBsPHyDe1DxUa4jNpg2ISA591j%2BAEwt5%2BfwAY6pgHEDrmC67xwe%2BfjgJw9DFugnsKC8%2FOJk5vhYa3%2F8YoOHjpJhlPnlhjivmVQCcH%2BUe41W493dF1%2FiRLH9fDFtgwwcjlLOSntTwuAfEtoWPLCfbtVFXcXmDglMHd7TLmwUVr2l5uD9jbixsxnA4kDOhMIHvvYnkBZf%2FLrIzvca1UV5bia6Iw0UuugSny1325lzRcPAN0IiXPrUcmtLNVsd1xxkiysZ%2FEt&X-Amz-Signature=bab35d3979b5f93af47a219bd4fe2c05f589e86469b6aeaef433ec0a88961774&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZE7M2C%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAqMvCcATewhdjyP5aRbHuv%2BLnqFfm8%2Fm3un7rn69dmYAiBviXRU7XCDMbbal1DVsFJ%2F2SiH1KlAAN%2BV%2B%2FwlcHEz%2BSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAOT4Sh0S5Mpo2%2FKtwDLelYpzMv5kWOlQjw5k77M2fTKrPpLXez%2BeBh%2F%2BeIH5wTza2oM4E3bJjknS8rjQDgQs4L0ytpF8kDLexgsV41gxJolK%2Fl9KzDnYyL5HGyWccHat56RzRI0oZUZ18h87vIJJ9tI2t2xet88x6D3eUywNaBCbnUctrRfvllvxMz3ZMfD1bo30SMcrC46P45PhG%2FaHO78dtdMMOpMzsSIE2tWH5zdEMNxViKwuLeNBtjxCHjoj32GqFdYiVM69Nw%2B5nDox4Y%2F4JBp9kKVUY622DaLaMiDK3Ww6HUC5emtCk5t0MZG%2FjAMERhNa3HkS2DdJOTNVaDNc6xVGoP6gNRe44U8xOcYXf9M7JI3EkwrJBw%2Fu7NklbIgPihwQYhKSa5f9KS2NYsrg6y3pHV2PQmofp1238VvG%2BC7ugxDp6Zps6exDw7FcYfBM28sKECmLNpMHr8RWZtnyLqzaCrDT6pm1h%2BlfCNhQ%2B2cTab1g%2F8lamKPn9qsDNjh4NCqMNcd%2FjKjItKKXWdDogzAwoUCJIq%2BPLE5rt15TN7RMRQMzC0aVUwTpbW3VeofYt%2FGg5D57zQl9x16wN8aOJ8ArzHWdVVNxlXmjJQK%2F8yXlOBsPHyDe1DxUa4jNpg2ISA591j%2BAEwt5%2BfwAY6pgHEDrmC67xwe%2BfjgJw9DFugnsKC8%2FOJk5vhYa3%2F8YoOHjpJhlPnlhjivmVQCcH%2BUe41W493dF1%2FiRLH9fDFtgwwcjlLOSntTwuAfEtoWPLCfbtVFXcXmDglMHd7TLmwUVr2l5uD9jbixsxnA4kDOhMIHvvYnkBZf%2FLrIzvca1UV5bia6Iw0UuugSny1325lzRcPAN0IiXPrUcmtLNVsd1xxkiysZ%2FEt&X-Amz-Signature=71a77d334d7cfe9b62ee32875cffb8f3c890dcde4b09edfd4b5f01ae4006553c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZE7M2C%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIAqMvCcATewhdjyP5aRbHuv%2BLnqFfm8%2Fm3un7rn69dmYAiBviXRU7XCDMbbal1DVsFJ%2F2SiH1KlAAN%2BV%2B%2FwlcHEz%2BSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpAOT4Sh0S5Mpo2%2FKtwDLelYpzMv5kWOlQjw5k77M2fTKrPpLXez%2BeBh%2F%2BeIH5wTza2oM4E3bJjknS8rjQDgQs4L0ytpF8kDLexgsV41gxJolK%2Fl9KzDnYyL5HGyWccHat56RzRI0oZUZ18h87vIJJ9tI2t2xet88x6D3eUywNaBCbnUctrRfvllvxMz3ZMfD1bo30SMcrC46P45PhG%2FaHO78dtdMMOpMzsSIE2tWH5zdEMNxViKwuLeNBtjxCHjoj32GqFdYiVM69Nw%2B5nDox4Y%2F4JBp9kKVUY622DaLaMiDK3Ww6HUC5emtCk5t0MZG%2FjAMERhNa3HkS2DdJOTNVaDNc6xVGoP6gNRe44U8xOcYXf9M7JI3EkwrJBw%2Fu7NklbIgPihwQYhKSa5f9KS2NYsrg6y3pHV2PQmofp1238VvG%2BC7ugxDp6Zps6exDw7FcYfBM28sKECmLNpMHr8RWZtnyLqzaCrDT6pm1h%2BlfCNhQ%2B2cTab1g%2F8lamKPn9qsDNjh4NCqMNcd%2FjKjItKKXWdDogzAwoUCJIq%2BPLE5rt15TN7RMRQMzC0aVUwTpbW3VeofYt%2FGg5D57zQl9x16wN8aOJ8ArzHWdVVNxlXmjJQK%2F8yXlOBsPHyDe1DxUa4jNpg2ISA591j%2BAEwt5%2BfwAY6pgHEDrmC67xwe%2BfjgJw9DFugnsKC8%2FOJk5vhYa3%2F8YoOHjpJhlPnlhjivmVQCcH%2BUe41W493dF1%2FiRLH9fDFtgwwcjlLOSntTwuAfEtoWPLCfbtVFXcXmDglMHd7TLmwUVr2l5uD9jbixsxnA4kDOhMIHvvYnkBZf%2FLrIzvca1UV5bia6Iw0UuugSny1325lzRcPAN0IiXPrUcmtLNVsd1xxkiysZ%2FEt&X-Amz-Signature=68fb5e8b7788a3cdf02d4fb9af90a76d9d090da05176db40edc3fc926b28e66e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
