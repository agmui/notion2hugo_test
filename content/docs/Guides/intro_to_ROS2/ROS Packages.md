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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP36T32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ee9kyrlYpRLBApkOonpfFNpeDRVPKzbmLeA7tZ0AvwIhAJ3fiwwgCnPD7VfieLGx4MC8gsYgZEz%2FogY1c4a6aLiGKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkaMgHpWOil5i%2F3kEq3APhXA1PtaH3y%2FRLeUPPjL4HkP4OXmsRp%2B2%2FG4QRLEU4cW53V6qcFlxMW2D4WDtVk6l2p2Zb1fcRykn87TJ3iKxTgyDjvdsvVV7qGDz2uWyQPLtY%2Fqt%2BSFnMXTLsqYEU1m2J9J81fufGs9Ew6YQVqTa1IkxKdIzCZHiY9QdFU4O%2FNHP%2B0BFSzE5fwEIPHCWAebXkV1azcym2ehA%2FiSW3LMnQi%2BiQ%2FidVwXXN0ZSMishzyaDOcpREUVLz22EPMK6U2jYVpSBRa1ZOZeowKjY2mTYwQ%2F5oG%2FpaXedSjqAttMSphM6Ejn8Bbzk7z7bEJsD9f%2BC6PKYk0TZCdTgyUF%2FGyMczRqc5nr1MA1d7St7L4H4b49lmZS3bxzv1%2B64yBGZqKOEGxmegaitQfYgthGHuws9iOFAk6CKLzD%2BNi8YgudBSbJ9GFo3Nmic9TLQjAFJqhDzgsNqgduQrNukfTxy6b%2FDteds%2FGXGqo3nqKhpW3qWFmRWI5R7Pb15D4e1ngouSrjfs1nTpx35WOn7CcG83uCu9PbJ2Q8EzQme5TjDWLdkgsWCAx%2FgG%2FdXRWLah0Qwg9czHqBu4xb0P4pco6zwegkFyx19Ntrv2L8VWJi2Fq8InhRYLtCRhXqrM9TT5ozCCnqfBBjqkAWzEULMxQ0aJIkg3CM5XmJuOQ%2FH40a8G3iDu7V79kPrmRLsoFLQ8T3cqaJH0VmwWYRMVWkQ4MgjXabXBN4iW5KcHA0EZvi2oeP4WcUwSRXFY8vGp6aEqkVh6L1wNAyTUNbIedpsxxo%2F6qS1GIBmMjg7hjPg7qu0RGiAVvoc0EBTZwOlQl8EDysSwsP3h9cJDRbDO6UOAZscmZnc9paExbDmYeRGq&X-Amz-Signature=60ce5a011e26d872a33d2d91e681b4983b3a0c16f167061b8b9a6c777ac40191&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP36T32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ee9kyrlYpRLBApkOonpfFNpeDRVPKzbmLeA7tZ0AvwIhAJ3fiwwgCnPD7VfieLGx4MC8gsYgZEz%2FogY1c4a6aLiGKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkaMgHpWOil5i%2F3kEq3APhXA1PtaH3y%2FRLeUPPjL4HkP4OXmsRp%2B2%2FG4QRLEU4cW53V6qcFlxMW2D4WDtVk6l2p2Zb1fcRykn87TJ3iKxTgyDjvdsvVV7qGDz2uWyQPLtY%2Fqt%2BSFnMXTLsqYEU1m2J9J81fufGs9Ew6YQVqTa1IkxKdIzCZHiY9QdFU4O%2FNHP%2B0BFSzE5fwEIPHCWAebXkV1azcym2ehA%2FiSW3LMnQi%2BiQ%2FidVwXXN0ZSMishzyaDOcpREUVLz22EPMK6U2jYVpSBRa1ZOZeowKjY2mTYwQ%2F5oG%2FpaXedSjqAttMSphM6Ejn8Bbzk7z7bEJsD9f%2BC6PKYk0TZCdTgyUF%2FGyMczRqc5nr1MA1d7St7L4H4b49lmZS3bxzv1%2B64yBGZqKOEGxmegaitQfYgthGHuws9iOFAk6CKLzD%2BNi8YgudBSbJ9GFo3Nmic9TLQjAFJqhDzgsNqgduQrNukfTxy6b%2FDteds%2FGXGqo3nqKhpW3qWFmRWI5R7Pb15D4e1ngouSrjfs1nTpx35WOn7CcG83uCu9PbJ2Q8EzQme5TjDWLdkgsWCAx%2FgG%2FdXRWLah0Qwg9czHqBu4xb0P4pco6zwegkFyx19Ntrv2L8VWJi2Fq8InhRYLtCRhXqrM9TT5ozCCnqfBBjqkAWzEULMxQ0aJIkg3CM5XmJuOQ%2FH40a8G3iDu7V79kPrmRLsoFLQ8T3cqaJH0VmwWYRMVWkQ4MgjXabXBN4iW5KcHA0EZvi2oeP4WcUwSRXFY8vGp6aEqkVh6L1wNAyTUNbIedpsxxo%2F6qS1GIBmMjg7hjPg7qu0RGiAVvoc0EBTZwOlQl8EDysSwsP3h9cJDRbDO6UOAZscmZnc9paExbDmYeRGq&X-Amz-Signature=5084735264f3e0206aa9218e533af7e9db163e90162f751494e3f5f6699f4343&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP36T32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ee9kyrlYpRLBApkOonpfFNpeDRVPKzbmLeA7tZ0AvwIhAJ3fiwwgCnPD7VfieLGx4MC8gsYgZEz%2FogY1c4a6aLiGKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkaMgHpWOil5i%2F3kEq3APhXA1PtaH3y%2FRLeUPPjL4HkP4OXmsRp%2B2%2FG4QRLEU4cW53V6qcFlxMW2D4WDtVk6l2p2Zb1fcRykn87TJ3iKxTgyDjvdsvVV7qGDz2uWyQPLtY%2Fqt%2BSFnMXTLsqYEU1m2J9J81fufGs9Ew6YQVqTa1IkxKdIzCZHiY9QdFU4O%2FNHP%2B0BFSzE5fwEIPHCWAebXkV1azcym2ehA%2FiSW3LMnQi%2BiQ%2FidVwXXN0ZSMishzyaDOcpREUVLz22EPMK6U2jYVpSBRa1ZOZeowKjY2mTYwQ%2F5oG%2FpaXedSjqAttMSphM6Ejn8Bbzk7z7bEJsD9f%2BC6PKYk0TZCdTgyUF%2FGyMczRqc5nr1MA1d7St7L4H4b49lmZS3bxzv1%2B64yBGZqKOEGxmegaitQfYgthGHuws9iOFAk6CKLzD%2BNi8YgudBSbJ9GFo3Nmic9TLQjAFJqhDzgsNqgduQrNukfTxy6b%2FDteds%2FGXGqo3nqKhpW3qWFmRWI5R7Pb15D4e1ngouSrjfs1nTpx35WOn7CcG83uCu9PbJ2Q8EzQme5TjDWLdkgsWCAx%2FgG%2FdXRWLah0Qwg9czHqBu4xb0P4pco6zwegkFyx19Ntrv2L8VWJi2Fq8InhRYLtCRhXqrM9TT5ozCCnqfBBjqkAWzEULMxQ0aJIkg3CM5XmJuOQ%2FH40a8G3iDu7V79kPrmRLsoFLQ8T3cqaJH0VmwWYRMVWkQ4MgjXabXBN4iW5KcHA0EZvi2oeP4WcUwSRXFY8vGp6aEqkVh6L1wNAyTUNbIedpsxxo%2F6qS1GIBmMjg7hjPg7qu0RGiAVvoc0EBTZwOlQl8EDysSwsP3h9cJDRbDO6UOAZscmZnc9paExbDmYeRGq&X-Amz-Signature=7462d596c5109db84751363309314be787c761acb91c698d5f1a92497f58fe9d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP36T32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ee9kyrlYpRLBApkOonpfFNpeDRVPKzbmLeA7tZ0AvwIhAJ3fiwwgCnPD7VfieLGx4MC8gsYgZEz%2FogY1c4a6aLiGKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkaMgHpWOil5i%2F3kEq3APhXA1PtaH3y%2FRLeUPPjL4HkP4OXmsRp%2B2%2FG4QRLEU4cW53V6qcFlxMW2D4WDtVk6l2p2Zb1fcRykn87TJ3iKxTgyDjvdsvVV7qGDz2uWyQPLtY%2Fqt%2BSFnMXTLsqYEU1m2J9J81fufGs9Ew6YQVqTa1IkxKdIzCZHiY9QdFU4O%2FNHP%2B0BFSzE5fwEIPHCWAebXkV1azcym2ehA%2FiSW3LMnQi%2BiQ%2FidVwXXN0ZSMishzyaDOcpREUVLz22EPMK6U2jYVpSBRa1ZOZeowKjY2mTYwQ%2F5oG%2FpaXedSjqAttMSphM6Ejn8Bbzk7z7bEJsD9f%2BC6PKYk0TZCdTgyUF%2FGyMczRqc5nr1MA1d7St7L4H4b49lmZS3bxzv1%2B64yBGZqKOEGxmegaitQfYgthGHuws9iOFAk6CKLzD%2BNi8YgudBSbJ9GFo3Nmic9TLQjAFJqhDzgsNqgduQrNukfTxy6b%2FDteds%2FGXGqo3nqKhpW3qWFmRWI5R7Pb15D4e1ngouSrjfs1nTpx35WOn7CcG83uCu9PbJ2Q8EzQme5TjDWLdkgsWCAx%2FgG%2FdXRWLah0Qwg9czHqBu4xb0P4pco6zwegkFyx19Ntrv2L8VWJi2Fq8InhRYLtCRhXqrM9TT5ozCCnqfBBjqkAWzEULMxQ0aJIkg3CM5XmJuOQ%2FH40a8G3iDu7V79kPrmRLsoFLQ8T3cqaJH0VmwWYRMVWkQ4MgjXabXBN4iW5KcHA0EZvi2oeP4WcUwSRXFY8vGp6aEqkVh6L1wNAyTUNbIedpsxxo%2F6qS1GIBmMjg7hjPg7qu0RGiAVvoc0EBTZwOlQl8EDysSwsP3h9cJDRbDO6UOAZscmZnc9paExbDmYeRGq&X-Amz-Signature=5269e0b7e3f5a362b5bc5f052ebfd046671e77c89fe2c609166cc9db4f2f2f87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP36T32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ee9kyrlYpRLBApkOonpfFNpeDRVPKzbmLeA7tZ0AvwIhAJ3fiwwgCnPD7VfieLGx4MC8gsYgZEz%2FogY1c4a6aLiGKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkaMgHpWOil5i%2F3kEq3APhXA1PtaH3y%2FRLeUPPjL4HkP4OXmsRp%2B2%2FG4QRLEU4cW53V6qcFlxMW2D4WDtVk6l2p2Zb1fcRykn87TJ3iKxTgyDjvdsvVV7qGDz2uWyQPLtY%2Fqt%2BSFnMXTLsqYEU1m2J9J81fufGs9Ew6YQVqTa1IkxKdIzCZHiY9QdFU4O%2FNHP%2B0BFSzE5fwEIPHCWAebXkV1azcym2ehA%2FiSW3LMnQi%2BiQ%2FidVwXXN0ZSMishzyaDOcpREUVLz22EPMK6U2jYVpSBRa1ZOZeowKjY2mTYwQ%2F5oG%2FpaXedSjqAttMSphM6Ejn8Bbzk7z7bEJsD9f%2BC6PKYk0TZCdTgyUF%2FGyMczRqc5nr1MA1d7St7L4H4b49lmZS3bxzv1%2B64yBGZqKOEGxmegaitQfYgthGHuws9iOFAk6CKLzD%2BNi8YgudBSbJ9GFo3Nmic9TLQjAFJqhDzgsNqgduQrNukfTxy6b%2FDteds%2FGXGqo3nqKhpW3qWFmRWI5R7Pb15D4e1ngouSrjfs1nTpx35WOn7CcG83uCu9PbJ2Q8EzQme5TjDWLdkgsWCAx%2FgG%2FdXRWLah0Qwg9czHqBu4xb0P4pco6zwegkFyx19Ntrv2L8VWJi2Fq8InhRYLtCRhXqrM9TT5ozCCnqfBBjqkAWzEULMxQ0aJIkg3CM5XmJuOQ%2FH40a8G3iDu7V79kPrmRLsoFLQ8T3cqaJH0VmwWYRMVWkQ4MgjXabXBN4iW5KcHA0EZvi2oeP4WcUwSRXFY8vGp6aEqkVh6L1wNAyTUNbIedpsxxo%2F6qS1GIBmMjg7hjPg7qu0RGiAVvoc0EBTZwOlQl8EDysSwsP3h9cJDRbDO6UOAZscmZnc9paExbDmYeRGq&X-Amz-Signature=5d89766c907147f9ae4842e4915e27f8d4c75839b6e5b95c1d22b8aca5b8a2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP36T32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ee9kyrlYpRLBApkOonpfFNpeDRVPKzbmLeA7tZ0AvwIhAJ3fiwwgCnPD7VfieLGx4MC8gsYgZEz%2FogY1c4a6aLiGKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkaMgHpWOil5i%2F3kEq3APhXA1PtaH3y%2FRLeUPPjL4HkP4OXmsRp%2B2%2FG4QRLEU4cW53V6qcFlxMW2D4WDtVk6l2p2Zb1fcRykn87TJ3iKxTgyDjvdsvVV7qGDz2uWyQPLtY%2Fqt%2BSFnMXTLsqYEU1m2J9J81fufGs9Ew6YQVqTa1IkxKdIzCZHiY9QdFU4O%2FNHP%2B0BFSzE5fwEIPHCWAebXkV1azcym2ehA%2FiSW3LMnQi%2BiQ%2FidVwXXN0ZSMishzyaDOcpREUVLz22EPMK6U2jYVpSBRa1ZOZeowKjY2mTYwQ%2F5oG%2FpaXedSjqAttMSphM6Ejn8Bbzk7z7bEJsD9f%2BC6PKYk0TZCdTgyUF%2FGyMczRqc5nr1MA1d7St7L4H4b49lmZS3bxzv1%2B64yBGZqKOEGxmegaitQfYgthGHuws9iOFAk6CKLzD%2BNi8YgudBSbJ9GFo3Nmic9TLQjAFJqhDzgsNqgduQrNukfTxy6b%2FDteds%2FGXGqo3nqKhpW3qWFmRWI5R7Pb15D4e1ngouSrjfs1nTpx35WOn7CcG83uCu9PbJ2Q8EzQme5TjDWLdkgsWCAx%2FgG%2FdXRWLah0Qwg9czHqBu4xb0P4pco6zwegkFyx19Ntrv2L8VWJi2Fq8InhRYLtCRhXqrM9TT5ozCCnqfBBjqkAWzEULMxQ0aJIkg3CM5XmJuOQ%2FH40a8G3iDu7V79kPrmRLsoFLQ8T3cqaJH0VmwWYRMVWkQ4MgjXabXBN4iW5KcHA0EZvi2oeP4WcUwSRXFY8vGp6aEqkVh6L1wNAyTUNbIedpsxxo%2F6qS1GIBmMjg7hjPg7qu0RGiAVvoc0EBTZwOlQl8EDysSwsP3h9cJDRbDO6UOAZscmZnc9paExbDmYeRGq&X-Amz-Signature=7713ed6994cb29b0a6d38c0acc8c80f0ae26173e359f058e8b73f49001a8eec9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVP36T32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ee9kyrlYpRLBApkOonpfFNpeDRVPKzbmLeA7tZ0AvwIhAJ3fiwwgCnPD7VfieLGx4MC8gsYgZEz%2FogY1c4a6aLiGKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkaMgHpWOil5i%2F3kEq3APhXA1PtaH3y%2FRLeUPPjL4HkP4OXmsRp%2B2%2FG4QRLEU4cW53V6qcFlxMW2D4WDtVk6l2p2Zb1fcRykn87TJ3iKxTgyDjvdsvVV7qGDz2uWyQPLtY%2Fqt%2BSFnMXTLsqYEU1m2J9J81fufGs9Ew6YQVqTa1IkxKdIzCZHiY9QdFU4O%2FNHP%2B0BFSzE5fwEIPHCWAebXkV1azcym2ehA%2FiSW3LMnQi%2BiQ%2FidVwXXN0ZSMishzyaDOcpREUVLz22EPMK6U2jYVpSBRa1ZOZeowKjY2mTYwQ%2F5oG%2FpaXedSjqAttMSphM6Ejn8Bbzk7z7bEJsD9f%2BC6PKYk0TZCdTgyUF%2FGyMczRqc5nr1MA1d7St7L4H4b49lmZS3bxzv1%2B64yBGZqKOEGxmegaitQfYgthGHuws9iOFAk6CKLzD%2BNi8YgudBSbJ9GFo3Nmic9TLQjAFJqhDzgsNqgduQrNukfTxy6b%2FDteds%2FGXGqo3nqKhpW3qWFmRWI5R7Pb15D4e1ngouSrjfs1nTpx35WOn7CcG83uCu9PbJ2Q8EzQme5TjDWLdkgsWCAx%2FgG%2FdXRWLah0Qwg9czHqBu4xb0P4pco6zwegkFyx19Ntrv2L8VWJi2Fq8InhRYLtCRhXqrM9TT5ozCCnqfBBjqkAWzEULMxQ0aJIkg3CM5XmJuOQ%2FH40a8G3iDu7V79kPrmRLsoFLQ8T3cqaJH0VmwWYRMVWkQ4MgjXabXBN4iW5KcHA0EZvi2oeP4WcUwSRXFY8vGp6aEqkVh6L1wNAyTUNbIedpsxxo%2F6qS1GIBmMjg7hjPg7qu0RGiAVvoc0EBTZwOlQl8EDysSwsP3h9cJDRbDO6UOAZscmZnc9paExbDmYeRGq&X-Amz-Signature=9865245dcacee1cae25e8adf66f986a0ce2fdff61fcd191f5b8fba5a92db6a00&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
