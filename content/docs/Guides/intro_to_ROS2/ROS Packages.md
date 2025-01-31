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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQFNZCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOht7b3%2Bz0nzdwcR%2BJ4Mf8P41jd2dg%2Bytn23Iz5xtkyAiAelm2bWYDQO4TgKR9OPnv8q53bLrghkscG3F5i9e3xCSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8R3j4KxScVamPfEfKtwDqtfIyhYAXCnf4fI6ogb6qr2VortWh6sueRf67QrezTn0veLNaU66OrTORAmKYCnUoEBMqVMxeZGHeWyx%2FyYrKcTTlb35zVdCn26xU7OL5kKV5jaTk6hkEUwAP39nnTJMZOVRHFT%2B5zvDXpJabLIMY2YpL4lcw2RCu%2BpaULwxASgRvHybodGhCxxhNAukJJZI8R%2FwvFWzLPxmeNZ8DtSmWi9XHgl06IajTWmpKQ7520%2FTFygkmHT5ZAr0Y5H97%2FkArit7MVQH1al0%2FBT9v%2FXyocEGVWBNSA7G6Lxgq7FZFyZLes4HV9q7OVg3TrKRHL1pLG4U56E6hx04inTK%2Bn%2BAkOwrYRfN34PXRxN6Ipv9Pukx%2BFDt6NoZ1c%2BHEC9XNSPjVNM8lmBWHitPb73BAMELCqvyZzenYk0iIECkLLPQN83Jqrbg8uu%2Feu%2Fvq1U2R1c2XYunVq5ZVj%2FHXXjzG5zJxh9khwxYtMfOUI0WrsTc5chPLVWzSlbnicj1ytWDIcusuSUOACNzr7VAagCVgeiQoaOdoKVEAE1UtLE%2FC2ssvwdBmPDJSV4UoKkZP187otiopVvz7nBjLOHQqrrrVCFXlZeVaVgHHH28p7lOZua%2F8qGwgys%2F9TZEgfLQ7REw0JnwvAY6pgG7l6d3X2xh10%2B7OxYxke%2Bz%2FOp6hpoYdsDDKu%2BWIC8c2lhnYQGj%2BPmd%2BrYwB3XJWp13oQcaSUlJcVMGsz5o1EklNqobfQtq48jCa1YuenBSX%2BWCpsb9ghNk58f0gOfl90iHoj%2FyBaQz%2BJWGuDHupnEzINb0t2VEGgPJ8Ukli%2FtL0mJ98OFGbJQWmm4zqskXwCUMTLT0DD1kJqYe6zlB8vzcP%2FD9%2B8ku&X-Amz-Signature=30fe3a9b7b3a6c014f4d06f2b8af324566668b667bda62e5114ca9c65c1e516a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQFNZCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOht7b3%2Bz0nzdwcR%2BJ4Mf8P41jd2dg%2Bytn23Iz5xtkyAiAelm2bWYDQO4TgKR9OPnv8q53bLrghkscG3F5i9e3xCSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8R3j4KxScVamPfEfKtwDqtfIyhYAXCnf4fI6ogb6qr2VortWh6sueRf67QrezTn0veLNaU66OrTORAmKYCnUoEBMqVMxeZGHeWyx%2FyYrKcTTlb35zVdCn26xU7OL5kKV5jaTk6hkEUwAP39nnTJMZOVRHFT%2B5zvDXpJabLIMY2YpL4lcw2RCu%2BpaULwxASgRvHybodGhCxxhNAukJJZI8R%2FwvFWzLPxmeNZ8DtSmWi9XHgl06IajTWmpKQ7520%2FTFygkmHT5ZAr0Y5H97%2FkArit7MVQH1al0%2FBT9v%2FXyocEGVWBNSA7G6Lxgq7FZFyZLes4HV9q7OVg3TrKRHL1pLG4U56E6hx04inTK%2Bn%2BAkOwrYRfN34PXRxN6Ipv9Pukx%2BFDt6NoZ1c%2BHEC9XNSPjVNM8lmBWHitPb73BAMELCqvyZzenYk0iIECkLLPQN83Jqrbg8uu%2Feu%2Fvq1U2R1c2XYunVq5ZVj%2FHXXjzG5zJxh9khwxYtMfOUI0WrsTc5chPLVWzSlbnicj1ytWDIcusuSUOACNzr7VAagCVgeiQoaOdoKVEAE1UtLE%2FC2ssvwdBmPDJSV4UoKkZP187otiopVvz7nBjLOHQqrrrVCFXlZeVaVgHHH28p7lOZua%2F8qGwgys%2F9TZEgfLQ7REw0JnwvAY6pgG7l6d3X2xh10%2B7OxYxke%2Bz%2FOp6hpoYdsDDKu%2BWIC8c2lhnYQGj%2BPmd%2BrYwB3XJWp13oQcaSUlJcVMGsz5o1EklNqobfQtq48jCa1YuenBSX%2BWCpsb9ghNk58f0gOfl90iHoj%2FyBaQz%2BJWGuDHupnEzINb0t2VEGgPJ8Ukli%2FtL0mJ98OFGbJQWmm4zqskXwCUMTLT0DD1kJqYe6zlB8vzcP%2FD9%2B8ku&X-Amz-Signature=d0092de7d09928a08122230b3e69ecf6ca021c9d6778e03f1f28192bfdefd671&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQFNZCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOht7b3%2Bz0nzdwcR%2BJ4Mf8P41jd2dg%2Bytn23Iz5xtkyAiAelm2bWYDQO4TgKR9OPnv8q53bLrghkscG3F5i9e3xCSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8R3j4KxScVamPfEfKtwDqtfIyhYAXCnf4fI6ogb6qr2VortWh6sueRf67QrezTn0veLNaU66OrTORAmKYCnUoEBMqVMxeZGHeWyx%2FyYrKcTTlb35zVdCn26xU7OL5kKV5jaTk6hkEUwAP39nnTJMZOVRHFT%2B5zvDXpJabLIMY2YpL4lcw2RCu%2BpaULwxASgRvHybodGhCxxhNAukJJZI8R%2FwvFWzLPxmeNZ8DtSmWi9XHgl06IajTWmpKQ7520%2FTFygkmHT5ZAr0Y5H97%2FkArit7MVQH1al0%2FBT9v%2FXyocEGVWBNSA7G6Lxgq7FZFyZLes4HV9q7OVg3TrKRHL1pLG4U56E6hx04inTK%2Bn%2BAkOwrYRfN34PXRxN6Ipv9Pukx%2BFDt6NoZ1c%2BHEC9XNSPjVNM8lmBWHitPb73BAMELCqvyZzenYk0iIECkLLPQN83Jqrbg8uu%2Feu%2Fvq1U2R1c2XYunVq5ZVj%2FHXXjzG5zJxh9khwxYtMfOUI0WrsTc5chPLVWzSlbnicj1ytWDIcusuSUOACNzr7VAagCVgeiQoaOdoKVEAE1UtLE%2FC2ssvwdBmPDJSV4UoKkZP187otiopVvz7nBjLOHQqrrrVCFXlZeVaVgHHH28p7lOZua%2F8qGwgys%2F9TZEgfLQ7REw0JnwvAY6pgG7l6d3X2xh10%2B7OxYxke%2Bz%2FOp6hpoYdsDDKu%2BWIC8c2lhnYQGj%2BPmd%2BrYwB3XJWp13oQcaSUlJcVMGsz5o1EklNqobfQtq48jCa1YuenBSX%2BWCpsb9ghNk58f0gOfl90iHoj%2FyBaQz%2BJWGuDHupnEzINb0t2VEGgPJ8Ukli%2FtL0mJ98OFGbJQWmm4zqskXwCUMTLT0DD1kJqYe6zlB8vzcP%2FD9%2B8ku&X-Amz-Signature=fab966ebede799449546dd71bc26e8b4a096a27e79f7f01976d939627c4f4de0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQFNZCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOht7b3%2Bz0nzdwcR%2BJ4Mf8P41jd2dg%2Bytn23Iz5xtkyAiAelm2bWYDQO4TgKR9OPnv8q53bLrghkscG3F5i9e3xCSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8R3j4KxScVamPfEfKtwDqtfIyhYAXCnf4fI6ogb6qr2VortWh6sueRf67QrezTn0veLNaU66OrTORAmKYCnUoEBMqVMxeZGHeWyx%2FyYrKcTTlb35zVdCn26xU7OL5kKV5jaTk6hkEUwAP39nnTJMZOVRHFT%2B5zvDXpJabLIMY2YpL4lcw2RCu%2BpaULwxASgRvHybodGhCxxhNAukJJZI8R%2FwvFWzLPxmeNZ8DtSmWi9XHgl06IajTWmpKQ7520%2FTFygkmHT5ZAr0Y5H97%2FkArit7MVQH1al0%2FBT9v%2FXyocEGVWBNSA7G6Lxgq7FZFyZLes4HV9q7OVg3TrKRHL1pLG4U56E6hx04inTK%2Bn%2BAkOwrYRfN34PXRxN6Ipv9Pukx%2BFDt6NoZ1c%2BHEC9XNSPjVNM8lmBWHitPb73BAMELCqvyZzenYk0iIECkLLPQN83Jqrbg8uu%2Feu%2Fvq1U2R1c2XYunVq5ZVj%2FHXXjzG5zJxh9khwxYtMfOUI0WrsTc5chPLVWzSlbnicj1ytWDIcusuSUOACNzr7VAagCVgeiQoaOdoKVEAE1UtLE%2FC2ssvwdBmPDJSV4UoKkZP187otiopVvz7nBjLOHQqrrrVCFXlZeVaVgHHH28p7lOZua%2F8qGwgys%2F9TZEgfLQ7REw0JnwvAY6pgG7l6d3X2xh10%2B7OxYxke%2Bz%2FOp6hpoYdsDDKu%2BWIC8c2lhnYQGj%2BPmd%2BrYwB3XJWp13oQcaSUlJcVMGsz5o1EklNqobfQtq48jCa1YuenBSX%2BWCpsb9ghNk58f0gOfl90iHoj%2FyBaQz%2BJWGuDHupnEzINb0t2VEGgPJ8Ukli%2FtL0mJ98OFGbJQWmm4zqskXwCUMTLT0DD1kJqYe6zlB8vzcP%2FD9%2B8ku&X-Amz-Signature=0912a41e265370e129dc578954c01415267fc6dc52d16c4a1cfd4a4a6bd2c3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQFNZCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOht7b3%2Bz0nzdwcR%2BJ4Mf8P41jd2dg%2Bytn23Iz5xtkyAiAelm2bWYDQO4TgKR9OPnv8q53bLrghkscG3F5i9e3xCSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8R3j4KxScVamPfEfKtwDqtfIyhYAXCnf4fI6ogb6qr2VortWh6sueRf67QrezTn0veLNaU66OrTORAmKYCnUoEBMqVMxeZGHeWyx%2FyYrKcTTlb35zVdCn26xU7OL5kKV5jaTk6hkEUwAP39nnTJMZOVRHFT%2B5zvDXpJabLIMY2YpL4lcw2RCu%2BpaULwxASgRvHybodGhCxxhNAukJJZI8R%2FwvFWzLPxmeNZ8DtSmWi9XHgl06IajTWmpKQ7520%2FTFygkmHT5ZAr0Y5H97%2FkArit7MVQH1al0%2FBT9v%2FXyocEGVWBNSA7G6Lxgq7FZFyZLes4HV9q7OVg3TrKRHL1pLG4U56E6hx04inTK%2Bn%2BAkOwrYRfN34PXRxN6Ipv9Pukx%2BFDt6NoZ1c%2BHEC9XNSPjVNM8lmBWHitPb73BAMELCqvyZzenYk0iIECkLLPQN83Jqrbg8uu%2Feu%2Fvq1U2R1c2XYunVq5ZVj%2FHXXjzG5zJxh9khwxYtMfOUI0WrsTc5chPLVWzSlbnicj1ytWDIcusuSUOACNzr7VAagCVgeiQoaOdoKVEAE1UtLE%2FC2ssvwdBmPDJSV4UoKkZP187otiopVvz7nBjLOHQqrrrVCFXlZeVaVgHHH28p7lOZua%2F8qGwgys%2F9TZEgfLQ7REw0JnwvAY6pgG7l6d3X2xh10%2B7OxYxke%2Bz%2FOp6hpoYdsDDKu%2BWIC8c2lhnYQGj%2BPmd%2BrYwB3XJWp13oQcaSUlJcVMGsz5o1EklNqobfQtq48jCa1YuenBSX%2BWCpsb9ghNk58f0gOfl90iHoj%2FyBaQz%2BJWGuDHupnEzINb0t2VEGgPJ8Ukli%2FtL0mJ98OFGbJQWmm4zqskXwCUMTLT0DD1kJqYe6zlB8vzcP%2FD9%2B8ku&X-Amz-Signature=d9c534087af59f3f7ec970aea6983031a054d65ab5afbdf17fc0fd1c98fb6a41&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQFNZCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOht7b3%2Bz0nzdwcR%2BJ4Mf8P41jd2dg%2Bytn23Iz5xtkyAiAelm2bWYDQO4TgKR9OPnv8q53bLrghkscG3F5i9e3xCSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8R3j4KxScVamPfEfKtwDqtfIyhYAXCnf4fI6ogb6qr2VortWh6sueRf67QrezTn0veLNaU66OrTORAmKYCnUoEBMqVMxeZGHeWyx%2FyYrKcTTlb35zVdCn26xU7OL5kKV5jaTk6hkEUwAP39nnTJMZOVRHFT%2B5zvDXpJabLIMY2YpL4lcw2RCu%2BpaULwxASgRvHybodGhCxxhNAukJJZI8R%2FwvFWzLPxmeNZ8DtSmWi9XHgl06IajTWmpKQ7520%2FTFygkmHT5ZAr0Y5H97%2FkArit7MVQH1al0%2FBT9v%2FXyocEGVWBNSA7G6Lxgq7FZFyZLes4HV9q7OVg3TrKRHL1pLG4U56E6hx04inTK%2Bn%2BAkOwrYRfN34PXRxN6Ipv9Pukx%2BFDt6NoZ1c%2BHEC9XNSPjVNM8lmBWHitPb73BAMELCqvyZzenYk0iIECkLLPQN83Jqrbg8uu%2Feu%2Fvq1U2R1c2XYunVq5ZVj%2FHXXjzG5zJxh9khwxYtMfOUI0WrsTc5chPLVWzSlbnicj1ytWDIcusuSUOACNzr7VAagCVgeiQoaOdoKVEAE1UtLE%2FC2ssvwdBmPDJSV4UoKkZP187otiopVvz7nBjLOHQqrrrVCFXlZeVaVgHHH28p7lOZua%2F8qGwgys%2F9TZEgfLQ7REw0JnwvAY6pgG7l6d3X2xh10%2B7OxYxke%2Bz%2FOp6hpoYdsDDKu%2BWIC8c2lhnYQGj%2BPmd%2BrYwB3XJWp13oQcaSUlJcVMGsz5o1EklNqobfQtq48jCa1YuenBSX%2BWCpsb9ghNk58f0gOfl90iHoj%2FyBaQz%2BJWGuDHupnEzINb0t2VEGgPJ8Ukli%2FtL0mJ98OFGbJQWmm4zqskXwCUMTLT0DD1kJqYe6zlB8vzcP%2FD9%2B8ku&X-Amz-Signature=3c8ed494e61a39da8f70319db3ca843919e8ddfe182a5ec0b60f915b53eab885&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HQFNZCH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOht7b3%2Bz0nzdwcR%2BJ4Mf8P41jd2dg%2Bytn23Iz5xtkyAiAelm2bWYDQO4TgKR9OPnv8q53bLrghkscG3F5i9e3xCSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8R3j4KxScVamPfEfKtwDqtfIyhYAXCnf4fI6ogb6qr2VortWh6sueRf67QrezTn0veLNaU66OrTORAmKYCnUoEBMqVMxeZGHeWyx%2FyYrKcTTlb35zVdCn26xU7OL5kKV5jaTk6hkEUwAP39nnTJMZOVRHFT%2B5zvDXpJabLIMY2YpL4lcw2RCu%2BpaULwxASgRvHybodGhCxxhNAukJJZI8R%2FwvFWzLPxmeNZ8DtSmWi9XHgl06IajTWmpKQ7520%2FTFygkmHT5ZAr0Y5H97%2FkArit7MVQH1al0%2FBT9v%2FXyocEGVWBNSA7G6Lxgq7FZFyZLes4HV9q7OVg3TrKRHL1pLG4U56E6hx04inTK%2Bn%2BAkOwrYRfN34PXRxN6Ipv9Pukx%2BFDt6NoZ1c%2BHEC9XNSPjVNM8lmBWHitPb73BAMELCqvyZzenYk0iIECkLLPQN83Jqrbg8uu%2Feu%2Fvq1U2R1c2XYunVq5ZVj%2FHXXjzG5zJxh9khwxYtMfOUI0WrsTc5chPLVWzSlbnicj1ytWDIcusuSUOACNzr7VAagCVgeiQoaOdoKVEAE1UtLE%2FC2ssvwdBmPDJSV4UoKkZP187otiopVvz7nBjLOHQqrrrVCFXlZeVaVgHHH28p7lOZua%2F8qGwgys%2F9TZEgfLQ7REw0JnwvAY6pgG7l6d3X2xh10%2B7OxYxke%2Bz%2FOp6hpoYdsDDKu%2BWIC8c2lhnYQGj%2BPmd%2BrYwB3XJWp13oQcaSUlJcVMGsz5o1EklNqobfQtq48jCa1YuenBSX%2BWCpsb9ghNk58f0gOfl90iHoj%2FyBaQz%2BJWGuDHupnEzINb0t2VEGgPJ8Ukli%2FtL0mJ98OFGbJQWmm4zqskXwCUMTLT0DD1kJqYe6zlB8vzcP%2FD9%2B8ku&X-Amz-Signature=11b513259b4851775a6b3684d83a0a0379ee3fda70757669f2f9f8672f03c7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
