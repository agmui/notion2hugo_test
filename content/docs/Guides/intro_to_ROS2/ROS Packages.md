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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNKJGAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFjX%2FO8Dx5ap9x%2FbEnKMWRSEHjyzStyupGeed2trwrqgIgE1q5x2bos65VmYkhLOJgSdRw3K4eWuBDuCqlYVOzlD4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGq4HlL3fgJduVWd1CrcAyMninXhxXvmv0NkyD1PPZ5S6fJxOOJ3O4rMyXlFieGS08%2Bhqvf6Ygbylch0m9ikO5vfH0eprW7ndEIM16Cs2m03Nwk0dYee%2BumIrG0BPN7bofUrSLl2olyBd92hFIlr8z5kAu7qlg%2FhVo6VNQDG%2BkdgBZ6VOFyT8Y10brJnFOgwg%2BgznENixVT6MRjONonkTc7Pfs5f6iyrAtTHcHmXD3NeknqEzn6zM6N7DZZdFUBloKCByE5WJDpLQ8ODjbxvRNYEvrVAnABMkUIdDH0%2BullcMMZZQ7odKFjGrWvh8cj2n16UcyvVic8YzGxDbvxRDB4jygQ04hVlsLR3Kb9M1o1Dx36KTR9lgaB%2Fva4CP9N9%2FP36%2FOC%2FuOwOCkN1x%2FHTBY799ZANFXxbG3d2Z3sbO5P7S3Jsfu16%2B3t%2BeP0vd%2FvBAScVxuuR%2BUhSpJxvjHf93hWtAc8r6o2p4h%2FF8cuFAFLVrjjNIyzZ%2B4mSINUedwn1Mx96ZBQDFPZN42YFrltsrV54%2B8H3mAmj4Cqh%2FvldgkFumRaO3ZivteXx5SsxpP%2BUV%2BhOSdFNTCvGsSLlz35cKLB583feaFKxfkIL%2F1PCenMMEELl8NcWg9QPUjLwrE0yYGdnNoNbjfkGW3jBMOzricIGOqUBkWuYb8VMzoRM%2BcqgfNNaQRw5Lm20dtR%2BhqCHg4i2Ol%2BvoOOO1jisSKJGce2uPKbQCKbg1omQRUEbH4mbFwogi8robsDbZP0RhcfwR23nfbyo1uj7bX%2FR7eCRNBRU3q%2B9mD%2FzFMB0tlTswE2%2BhZUzWbgeoDtERiZB8rbJBxn6hmAhVwjTZOmoJFw2fqQA%2BOB7OD3aYFEUn1210GwDbmUrdW3QKrOJ&X-Amz-Signature=c34065a2180d6df0f8f317dc24f4680b747bca957337038131c6fcf769bb0150&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNKJGAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFjX%2FO8Dx5ap9x%2FbEnKMWRSEHjyzStyupGeed2trwrqgIgE1q5x2bos65VmYkhLOJgSdRw3K4eWuBDuCqlYVOzlD4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGq4HlL3fgJduVWd1CrcAyMninXhxXvmv0NkyD1PPZ5S6fJxOOJ3O4rMyXlFieGS08%2Bhqvf6Ygbylch0m9ikO5vfH0eprW7ndEIM16Cs2m03Nwk0dYee%2BumIrG0BPN7bofUrSLl2olyBd92hFIlr8z5kAu7qlg%2FhVo6VNQDG%2BkdgBZ6VOFyT8Y10brJnFOgwg%2BgznENixVT6MRjONonkTc7Pfs5f6iyrAtTHcHmXD3NeknqEzn6zM6N7DZZdFUBloKCByE5WJDpLQ8ODjbxvRNYEvrVAnABMkUIdDH0%2BullcMMZZQ7odKFjGrWvh8cj2n16UcyvVic8YzGxDbvxRDB4jygQ04hVlsLR3Kb9M1o1Dx36KTR9lgaB%2Fva4CP9N9%2FP36%2FOC%2FuOwOCkN1x%2FHTBY799ZANFXxbG3d2Z3sbO5P7S3Jsfu16%2B3t%2BeP0vd%2FvBAScVxuuR%2BUhSpJxvjHf93hWtAc8r6o2p4h%2FF8cuFAFLVrjjNIyzZ%2B4mSINUedwn1Mx96ZBQDFPZN42YFrltsrV54%2B8H3mAmj4Cqh%2FvldgkFumRaO3ZivteXx5SsxpP%2BUV%2BhOSdFNTCvGsSLlz35cKLB583feaFKxfkIL%2F1PCenMMEELl8NcWg9QPUjLwrE0yYGdnNoNbjfkGW3jBMOzricIGOqUBkWuYb8VMzoRM%2BcqgfNNaQRw5Lm20dtR%2BhqCHg4i2Ol%2BvoOOO1jisSKJGce2uPKbQCKbg1omQRUEbH4mbFwogi8robsDbZP0RhcfwR23nfbyo1uj7bX%2FR7eCRNBRU3q%2B9mD%2FzFMB0tlTswE2%2BhZUzWbgeoDtERiZB8rbJBxn6hmAhVwjTZOmoJFw2fqQA%2BOB7OD3aYFEUn1210GwDbmUrdW3QKrOJ&X-Amz-Signature=7196a39f93b3ef8b896828abea1e4a46239105834151515f720d3c7606fa790e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNKJGAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFjX%2FO8Dx5ap9x%2FbEnKMWRSEHjyzStyupGeed2trwrqgIgE1q5x2bos65VmYkhLOJgSdRw3K4eWuBDuCqlYVOzlD4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGq4HlL3fgJduVWd1CrcAyMninXhxXvmv0NkyD1PPZ5S6fJxOOJ3O4rMyXlFieGS08%2Bhqvf6Ygbylch0m9ikO5vfH0eprW7ndEIM16Cs2m03Nwk0dYee%2BumIrG0BPN7bofUrSLl2olyBd92hFIlr8z5kAu7qlg%2FhVo6VNQDG%2BkdgBZ6VOFyT8Y10brJnFOgwg%2BgznENixVT6MRjONonkTc7Pfs5f6iyrAtTHcHmXD3NeknqEzn6zM6N7DZZdFUBloKCByE5WJDpLQ8ODjbxvRNYEvrVAnABMkUIdDH0%2BullcMMZZQ7odKFjGrWvh8cj2n16UcyvVic8YzGxDbvxRDB4jygQ04hVlsLR3Kb9M1o1Dx36KTR9lgaB%2Fva4CP9N9%2FP36%2FOC%2FuOwOCkN1x%2FHTBY799ZANFXxbG3d2Z3sbO5P7S3Jsfu16%2B3t%2BeP0vd%2FvBAScVxuuR%2BUhSpJxvjHf93hWtAc8r6o2p4h%2FF8cuFAFLVrjjNIyzZ%2B4mSINUedwn1Mx96ZBQDFPZN42YFrltsrV54%2B8H3mAmj4Cqh%2FvldgkFumRaO3ZivteXx5SsxpP%2BUV%2BhOSdFNTCvGsSLlz35cKLB583feaFKxfkIL%2F1PCenMMEELl8NcWg9QPUjLwrE0yYGdnNoNbjfkGW3jBMOzricIGOqUBkWuYb8VMzoRM%2BcqgfNNaQRw5Lm20dtR%2BhqCHg4i2Ol%2BvoOOO1jisSKJGce2uPKbQCKbg1omQRUEbH4mbFwogi8robsDbZP0RhcfwR23nfbyo1uj7bX%2FR7eCRNBRU3q%2B9mD%2FzFMB0tlTswE2%2BhZUzWbgeoDtERiZB8rbJBxn6hmAhVwjTZOmoJFw2fqQA%2BOB7OD3aYFEUn1210GwDbmUrdW3QKrOJ&X-Amz-Signature=b986586bcd7ebf228e7bbf4acd208dc551ada692a55cb554bd7a19419dde6fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNKJGAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFjX%2FO8Dx5ap9x%2FbEnKMWRSEHjyzStyupGeed2trwrqgIgE1q5x2bos65VmYkhLOJgSdRw3K4eWuBDuCqlYVOzlD4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGq4HlL3fgJduVWd1CrcAyMninXhxXvmv0NkyD1PPZ5S6fJxOOJ3O4rMyXlFieGS08%2Bhqvf6Ygbylch0m9ikO5vfH0eprW7ndEIM16Cs2m03Nwk0dYee%2BumIrG0BPN7bofUrSLl2olyBd92hFIlr8z5kAu7qlg%2FhVo6VNQDG%2BkdgBZ6VOFyT8Y10brJnFOgwg%2BgznENixVT6MRjONonkTc7Pfs5f6iyrAtTHcHmXD3NeknqEzn6zM6N7DZZdFUBloKCByE5WJDpLQ8ODjbxvRNYEvrVAnABMkUIdDH0%2BullcMMZZQ7odKFjGrWvh8cj2n16UcyvVic8YzGxDbvxRDB4jygQ04hVlsLR3Kb9M1o1Dx36KTR9lgaB%2Fva4CP9N9%2FP36%2FOC%2FuOwOCkN1x%2FHTBY799ZANFXxbG3d2Z3sbO5P7S3Jsfu16%2B3t%2BeP0vd%2FvBAScVxuuR%2BUhSpJxvjHf93hWtAc8r6o2p4h%2FF8cuFAFLVrjjNIyzZ%2B4mSINUedwn1Mx96ZBQDFPZN42YFrltsrV54%2B8H3mAmj4Cqh%2FvldgkFumRaO3ZivteXx5SsxpP%2BUV%2BhOSdFNTCvGsSLlz35cKLB583feaFKxfkIL%2F1PCenMMEELl8NcWg9QPUjLwrE0yYGdnNoNbjfkGW3jBMOzricIGOqUBkWuYb8VMzoRM%2BcqgfNNaQRw5Lm20dtR%2BhqCHg4i2Ol%2BvoOOO1jisSKJGce2uPKbQCKbg1omQRUEbH4mbFwogi8robsDbZP0RhcfwR23nfbyo1uj7bX%2FR7eCRNBRU3q%2B9mD%2FzFMB0tlTswE2%2BhZUzWbgeoDtERiZB8rbJBxn6hmAhVwjTZOmoJFw2fqQA%2BOB7OD3aYFEUn1210GwDbmUrdW3QKrOJ&X-Amz-Signature=18fd955a9a95fb6d2437ef78db677631e36bc93115fc244a557085c7f807dac9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNKJGAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFjX%2FO8Dx5ap9x%2FbEnKMWRSEHjyzStyupGeed2trwrqgIgE1q5x2bos65VmYkhLOJgSdRw3K4eWuBDuCqlYVOzlD4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGq4HlL3fgJduVWd1CrcAyMninXhxXvmv0NkyD1PPZ5S6fJxOOJ3O4rMyXlFieGS08%2Bhqvf6Ygbylch0m9ikO5vfH0eprW7ndEIM16Cs2m03Nwk0dYee%2BumIrG0BPN7bofUrSLl2olyBd92hFIlr8z5kAu7qlg%2FhVo6VNQDG%2BkdgBZ6VOFyT8Y10brJnFOgwg%2BgznENixVT6MRjONonkTc7Pfs5f6iyrAtTHcHmXD3NeknqEzn6zM6N7DZZdFUBloKCByE5WJDpLQ8ODjbxvRNYEvrVAnABMkUIdDH0%2BullcMMZZQ7odKFjGrWvh8cj2n16UcyvVic8YzGxDbvxRDB4jygQ04hVlsLR3Kb9M1o1Dx36KTR9lgaB%2Fva4CP9N9%2FP36%2FOC%2FuOwOCkN1x%2FHTBY799ZANFXxbG3d2Z3sbO5P7S3Jsfu16%2B3t%2BeP0vd%2FvBAScVxuuR%2BUhSpJxvjHf93hWtAc8r6o2p4h%2FF8cuFAFLVrjjNIyzZ%2B4mSINUedwn1Mx96ZBQDFPZN42YFrltsrV54%2B8H3mAmj4Cqh%2FvldgkFumRaO3ZivteXx5SsxpP%2BUV%2BhOSdFNTCvGsSLlz35cKLB583feaFKxfkIL%2F1PCenMMEELl8NcWg9QPUjLwrE0yYGdnNoNbjfkGW3jBMOzricIGOqUBkWuYb8VMzoRM%2BcqgfNNaQRw5Lm20dtR%2BhqCHg4i2Ol%2BvoOOO1jisSKJGce2uPKbQCKbg1omQRUEbH4mbFwogi8robsDbZP0RhcfwR23nfbyo1uj7bX%2FR7eCRNBRU3q%2B9mD%2FzFMB0tlTswE2%2BhZUzWbgeoDtERiZB8rbJBxn6hmAhVwjTZOmoJFw2fqQA%2BOB7OD3aYFEUn1210GwDbmUrdW3QKrOJ&X-Amz-Signature=365944c843c5da0e716443cd0455e9a57e14c2202697bdc76a970b5689e60962&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNKJGAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFjX%2FO8Dx5ap9x%2FbEnKMWRSEHjyzStyupGeed2trwrqgIgE1q5x2bos65VmYkhLOJgSdRw3K4eWuBDuCqlYVOzlD4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGq4HlL3fgJduVWd1CrcAyMninXhxXvmv0NkyD1PPZ5S6fJxOOJ3O4rMyXlFieGS08%2Bhqvf6Ygbylch0m9ikO5vfH0eprW7ndEIM16Cs2m03Nwk0dYee%2BumIrG0BPN7bofUrSLl2olyBd92hFIlr8z5kAu7qlg%2FhVo6VNQDG%2BkdgBZ6VOFyT8Y10brJnFOgwg%2BgznENixVT6MRjONonkTc7Pfs5f6iyrAtTHcHmXD3NeknqEzn6zM6N7DZZdFUBloKCByE5WJDpLQ8ODjbxvRNYEvrVAnABMkUIdDH0%2BullcMMZZQ7odKFjGrWvh8cj2n16UcyvVic8YzGxDbvxRDB4jygQ04hVlsLR3Kb9M1o1Dx36KTR9lgaB%2Fva4CP9N9%2FP36%2FOC%2FuOwOCkN1x%2FHTBY799ZANFXxbG3d2Z3sbO5P7S3Jsfu16%2B3t%2BeP0vd%2FvBAScVxuuR%2BUhSpJxvjHf93hWtAc8r6o2p4h%2FF8cuFAFLVrjjNIyzZ%2B4mSINUedwn1Mx96ZBQDFPZN42YFrltsrV54%2B8H3mAmj4Cqh%2FvldgkFumRaO3ZivteXx5SsxpP%2BUV%2BhOSdFNTCvGsSLlz35cKLB583feaFKxfkIL%2F1PCenMMEELl8NcWg9QPUjLwrE0yYGdnNoNbjfkGW3jBMOzricIGOqUBkWuYb8VMzoRM%2BcqgfNNaQRw5Lm20dtR%2BhqCHg4i2Ol%2BvoOOO1jisSKJGce2uPKbQCKbg1omQRUEbH4mbFwogi8robsDbZP0RhcfwR23nfbyo1uj7bX%2FR7eCRNBRU3q%2B9mD%2FzFMB0tlTswE2%2BhZUzWbgeoDtERiZB8rbJBxn6hmAhVwjTZOmoJFw2fqQA%2BOB7OD3aYFEUn1210GwDbmUrdW3QKrOJ&X-Amz-Signature=a4e8035cdfc0f15f792261ad7fd4ae769d9dc22dabf6b49327914fdef70ee29d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNKJGAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFjX%2FO8Dx5ap9x%2FbEnKMWRSEHjyzStyupGeed2trwrqgIgE1q5x2bos65VmYkhLOJgSdRw3K4eWuBDuCqlYVOzlD4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGq4HlL3fgJduVWd1CrcAyMninXhxXvmv0NkyD1PPZ5S6fJxOOJ3O4rMyXlFieGS08%2Bhqvf6Ygbylch0m9ikO5vfH0eprW7ndEIM16Cs2m03Nwk0dYee%2BumIrG0BPN7bofUrSLl2olyBd92hFIlr8z5kAu7qlg%2FhVo6VNQDG%2BkdgBZ6VOFyT8Y10brJnFOgwg%2BgznENixVT6MRjONonkTc7Pfs5f6iyrAtTHcHmXD3NeknqEzn6zM6N7DZZdFUBloKCByE5WJDpLQ8ODjbxvRNYEvrVAnABMkUIdDH0%2BullcMMZZQ7odKFjGrWvh8cj2n16UcyvVic8YzGxDbvxRDB4jygQ04hVlsLR3Kb9M1o1Dx36KTR9lgaB%2Fva4CP9N9%2FP36%2FOC%2FuOwOCkN1x%2FHTBY799ZANFXxbG3d2Z3sbO5P7S3Jsfu16%2B3t%2BeP0vd%2FvBAScVxuuR%2BUhSpJxvjHf93hWtAc8r6o2p4h%2FF8cuFAFLVrjjNIyzZ%2B4mSINUedwn1Mx96ZBQDFPZN42YFrltsrV54%2B8H3mAmj4Cqh%2FvldgkFumRaO3ZivteXx5SsxpP%2BUV%2BhOSdFNTCvGsSLlz35cKLB583feaFKxfkIL%2F1PCenMMEELl8NcWg9QPUjLwrE0yYGdnNoNbjfkGW3jBMOzricIGOqUBkWuYb8VMzoRM%2BcqgfNNaQRw5Lm20dtR%2BhqCHg4i2Ol%2BvoOOO1jisSKJGce2uPKbQCKbg1omQRUEbH4mbFwogi8robsDbZP0RhcfwR23nfbyo1uj7bX%2FR7eCRNBRU3q%2B9mD%2FzFMB0tlTswE2%2BhZUzWbgeoDtERiZB8rbJBxn6hmAhVwjTZOmoJFw2fqQA%2BOB7OD3aYFEUn1210GwDbmUrdW3QKrOJ&X-Amz-Signature=ff5b30c9d6896ca818c58ff00bad03475c1587ed3e4874f01778035ff7f4c79b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
