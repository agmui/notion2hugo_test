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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VWGE2L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDofnJeseA7azaDGTAGyzi9OFYco%2B3iY%2B0GavQdYczmwIhAPO0B4qmvqlYPXpMvi8dqIeW9%2B%2FdbJ%2BqQqzKtDXz7OXeKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrOXgdrYkIPUR5U2sq3AMvOAT%2F7pLv7lQvZrG6uj523o%2FJRMdXT2obzpDh4LVcdeiUE1vKwdsNFfVf9OZFczmbwHeai9TrJG0F4r%2Bh%2FK%2BdFnIg1rJTo5by6JScgURy08WJ%2FWNE7pE%2F2YSfSXHgVdjPwY7T%2BPU0W%2BGes02zQASDQiqGJBPt2Bf4XbvmKV5PEWGZM9NTo5O4YF8EEDb1Hwrs3%2FqqCov8nLUJc4059FKwH3bnQrkiXmvf%2Fvu5biabMu7%2FnJNGnWhnLHIlspk4ahLO2u6Ep%2FO%2BvjVeRdVLpouJfrUOt5LMCK8ApVboVBFvo%2BJ6oA1sBGOuly84WdoqVVH4LR54kdr72GGCOtiRi2XKBp%2FvSSPt4F5y2OoMHKHVvlk%2BZClv8FkNEFT3F2OJkPR6NOd5zpIgVG7dfgJZqXW9gKXrTNoXKPZPptB%2BpyzDTxcZXORVFqUTTJQHiswTLEdhGMjLCbE5KZqIsDciPekGYuvkVjzJLKJ4%2BhetNR%2BdcMHnyEBh8P%2BKmMbrWsBtsTpPD7wW0ACmiEqxfEGbAhcA1MmjPCgvJbfLIsBt3rD8%2FgenkXQBkbKTpyq1X9yFm65Gt4wgWqmZyT48LjsQ0IkviA6RjzAq8VXPUvTG4T5WKf2zZm8WeUgqM7Ju1TDXlpW%2BBjqkARnQ99W6%2B8dDlQywv0PZGCp9IXC2mtRHS1uy2tRL0riZHf3EMyqxE4eOXsHxiREN%2B6tKH2hYQf4KeGb9K%2F0qtYNFGIOoiMUfSV1DRd0biq8vlrAyu9mYDlZhObwi2pIonW0rU74BL3k6WffHIUxQrJec5toAC6SAeynjELerExtkro1SGVkZ1yB67gcPVzQnajNe1obCNGlIt4u7zHc1LAyy55Tb&X-Amz-Signature=95a74bb9183b1d7c39fadc21f74ea454a489b9a1a10e2f01f8fe24b90e76ec86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VWGE2L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDofnJeseA7azaDGTAGyzi9OFYco%2B3iY%2B0GavQdYczmwIhAPO0B4qmvqlYPXpMvi8dqIeW9%2B%2FdbJ%2BqQqzKtDXz7OXeKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrOXgdrYkIPUR5U2sq3AMvOAT%2F7pLv7lQvZrG6uj523o%2FJRMdXT2obzpDh4LVcdeiUE1vKwdsNFfVf9OZFczmbwHeai9TrJG0F4r%2Bh%2FK%2BdFnIg1rJTo5by6JScgURy08WJ%2FWNE7pE%2F2YSfSXHgVdjPwY7T%2BPU0W%2BGes02zQASDQiqGJBPt2Bf4XbvmKV5PEWGZM9NTo5O4YF8EEDb1Hwrs3%2FqqCov8nLUJc4059FKwH3bnQrkiXmvf%2Fvu5biabMu7%2FnJNGnWhnLHIlspk4ahLO2u6Ep%2FO%2BvjVeRdVLpouJfrUOt5LMCK8ApVboVBFvo%2BJ6oA1sBGOuly84WdoqVVH4LR54kdr72GGCOtiRi2XKBp%2FvSSPt4F5y2OoMHKHVvlk%2BZClv8FkNEFT3F2OJkPR6NOd5zpIgVG7dfgJZqXW9gKXrTNoXKPZPptB%2BpyzDTxcZXORVFqUTTJQHiswTLEdhGMjLCbE5KZqIsDciPekGYuvkVjzJLKJ4%2BhetNR%2BdcMHnyEBh8P%2BKmMbrWsBtsTpPD7wW0ACmiEqxfEGbAhcA1MmjPCgvJbfLIsBt3rD8%2FgenkXQBkbKTpyq1X9yFm65Gt4wgWqmZyT48LjsQ0IkviA6RjzAq8VXPUvTG4T5WKf2zZm8WeUgqM7Ju1TDXlpW%2BBjqkARnQ99W6%2B8dDlQywv0PZGCp9IXC2mtRHS1uy2tRL0riZHf3EMyqxE4eOXsHxiREN%2B6tKH2hYQf4KeGb9K%2F0qtYNFGIOoiMUfSV1DRd0biq8vlrAyu9mYDlZhObwi2pIonW0rU74BL3k6WffHIUxQrJec5toAC6SAeynjELerExtkro1SGVkZ1yB67gcPVzQnajNe1obCNGlIt4u7zHc1LAyy55Tb&X-Amz-Signature=eeddc95c90108c210a6ce592067ce7e574c14823c09fc49447f11910039af629&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VWGE2L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDofnJeseA7azaDGTAGyzi9OFYco%2B3iY%2B0GavQdYczmwIhAPO0B4qmvqlYPXpMvi8dqIeW9%2B%2FdbJ%2BqQqzKtDXz7OXeKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrOXgdrYkIPUR5U2sq3AMvOAT%2F7pLv7lQvZrG6uj523o%2FJRMdXT2obzpDh4LVcdeiUE1vKwdsNFfVf9OZFczmbwHeai9TrJG0F4r%2Bh%2FK%2BdFnIg1rJTo5by6JScgURy08WJ%2FWNE7pE%2F2YSfSXHgVdjPwY7T%2BPU0W%2BGes02zQASDQiqGJBPt2Bf4XbvmKV5PEWGZM9NTo5O4YF8EEDb1Hwrs3%2FqqCov8nLUJc4059FKwH3bnQrkiXmvf%2Fvu5biabMu7%2FnJNGnWhnLHIlspk4ahLO2u6Ep%2FO%2BvjVeRdVLpouJfrUOt5LMCK8ApVboVBFvo%2BJ6oA1sBGOuly84WdoqVVH4LR54kdr72GGCOtiRi2XKBp%2FvSSPt4F5y2OoMHKHVvlk%2BZClv8FkNEFT3F2OJkPR6NOd5zpIgVG7dfgJZqXW9gKXrTNoXKPZPptB%2BpyzDTxcZXORVFqUTTJQHiswTLEdhGMjLCbE5KZqIsDciPekGYuvkVjzJLKJ4%2BhetNR%2BdcMHnyEBh8P%2BKmMbrWsBtsTpPD7wW0ACmiEqxfEGbAhcA1MmjPCgvJbfLIsBt3rD8%2FgenkXQBkbKTpyq1X9yFm65Gt4wgWqmZyT48LjsQ0IkviA6RjzAq8VXPUvTG4T5WKf2zZm8WeUgqM7Ju1TDXlpW%2BBjqkARnQ99W6%2B8dDlQywv0PZGCp9IXC2mtRHS1uy2tRL0riZHf3EMyqxE4eOXsHxiREN%2B6tKH2hYQf4KeGb9K%2F0qtYNFGIOoiMUfSV1DRd0biq8vlrAyu9mYDlZhObwi2pIonW0rU74BL3k6WffHIUxQrJec5toAC6SAeynjELerExtkro1SGVkZ1yB67gcPVzQnajNe1obCNGlIt4u7zHc1LAyy55Tb&X-Amz-Signature=c4f692ac52e8c7081fbde9c3b9ec3435a36d3949963b04f5d924f144bfae1e71&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VWGE2L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDofnJeseA7azaDGTAGyzi9OFYco%2B3iY%2B0GavQdYczmwIhAPO0B4qmvqlYPXpMvi8dqIeW9%2B%2FdbJ%2BqQqzKtDXz7OXeKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrOXgdrYkIPUR5U2sq3AMvOAT%2F7pLv7lQvZrG6uj523o%2FJRMdXT2obzpDh4LVcdeiUE1vKwdsNFfVf9OZFczmbwHeai9TrJG0F4r%2Bh%2FK%2BdFnIg1rJTo5by6JScgURy08WJ%2FWNE7pE%2F2YSfSXHgVdjPwY7T%2BPU0W%2BGes02zQASDQiqGJBPt2Bf4XbvmKV5PEWGZM9NTo5O4YF8EEDb1Hwrs3%2FqqCov8nLUJc4059FKwH3bnQrkiXmvf%2Fvu5biabMu7%2FnJNGnWhnLHIlspk4ahLO2u6Ep%2FO%2BvjVeRdVLpouJfrUOt5LMCK8ApVboVBFvo%2BJ6oA1sBGOuly84WdoqVVH4LR54kdr72GGCOtiRi2XKBp%2FvSSPt4F5y2OoMHKHVvlk%2BZClv8FkNEFT3F2OJkPR6NOd5zpIgVG7dfgJZqXW9gKXrTNoXKPZPptB%2BpyzDTxcZXORVFqUTTJQHiswTLEdhGMjLCbE5KZqIsDciPekGYuvkVjzJLKJ4%2BhetNR%2BdcMHnyEBh8P%2BKmMbrWsBtsTpPD7wW0ACmiEqxfEGbAhcA1MmjPCgvJbfLIsBt3rD8%2FgenkXQBkbKTpyq1X9yFm65Gt4wgWqmZyT48LjsQ0IkviA6RjzAq8VXPUvTG4T5WKf2zZm8WeUgqM7Ju1TDXlpW%2BBjqkARnQ99W6%2B8dDlQywv0PZGCp9IXC2mtRHS1uy2tRL0riZHf3EMyqxE4eOXsHxiREN%2B6tKH2hYQf4KeGb9K%2F0qtYNFGIOoiMUfSV1DRd0biq8vlrAyu9mYDlZhObwi2pIonW0rU74BL3k6WffHIUxQrJec5toAC6SAeynjELerExtkro1SGVkZ1yB67gcPVzQnajNe1obCNGlIt4u7zHc1LAyy55Tb&X-Amz-Signature=815c10a8567dd3aa03bd649f011763e857af7af8de9f61b5ff03168f6628611d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VWGE2L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDofnJeseA7azaDGTAGyzi9OFYco%2B3iY%2B0GavQdYczmwIhAPO0B4qmvqlYPXpMvi8dqIeW9%2B%2FdbJ%2BqQqzKtDXz7OXeKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrOXgdrYkIPUR5U2sq3AMvOAT%2F7pLv7lQvZrG6uj523o%2FJRMdXT2obzpDh4LVcdeiUE1vKwdsNFfVf9OZFczmbwHeai9TrJG0F4r%2Bh%2FK%2BdFnIg1rJTo5by6JScgURy08WJ%2FWNE7pE%2F2YSfSXHgVdjPwY7T%2BPU0W%2BGes02zQASDQiqGJBPt2Bf4XbvmKV5PEWGZM9NTo5O4YF8EEDb1Hwrs3%2FqqCov8nLUJc4059FKwH3bnQrkiXmvf%2Fvu5biabMu7%2FnJNGnWhnLHIlspk4ahLO2u6Ep%2FO%2BvjVeRdVLpouJfrUOt5LMCK8ApVboVBFvo%2BJ6oA1sBGOuly84WdoqVVH4LR54kdr72GGCOtiRi2XKBp%2FvSSPt4F5y2OoMHKHVvlk%2BZClv8FkNEFT3F2OJkPR6NOd5zpIgVG7dfgJZqXW9gKXrTNoXKPZPptB%2BpyzDTxcZXORVFqUTTJQHiswTLEdhGMjLCbE5KZqIsDciPekGYuvkVjzJLKJ4%2BhetNR%2BdcMHnyEBh8P%2BKmMbrWsBtsTpPD7wW0ACmiEqxfEGbAhcA1MmjPCgvJbfLIsBt3rD8%2FgenkXQBkbKTpyq1X9yFm65Gt4wgWqmZyT48LjsQ0IkviA6RjzAq8VXPUvTG4T5WKf2zZm8WeUgqM7Ju1TDXlpW%2BBjqkARnQ99W6%2B8dDlQywv0PZGCp9IXC2mtRHS1uy2tRL0riZHf3EMyqxE4eOXsHxiREN%2B6tKH2hYQf4KeGb9K%2F0qtYNFGIOoiMUfSV1DRd0biq8vlrAyu9mYDlZhObwi2pIonW0rU74BL3k6WffHIUxQrJec5toAC6SAeynjELerExtkro1SGVkZ1yB67gcPVzQnajNe1obCNGlIt4u7zHc1LAyy55Tb&X-Amz-Signature=34768ab9caa186e11f18bc1dd0e184efa087c12b1a64ca4773f0670078739e84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VWGE2L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDofnJeseA7azaDGTAGyzi9OFYco%2B3iY%2B0GavQdYczmwIhAPO0B4qmvqlYPXpMvi8dqIeW9%2B%2FdbJ%2BqQqzKtDXz7OXeKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrOXgdrYkIPUR5U2sq3AMvOAT%2F7pLv7lQvZrG6uj523o%2FJRMdXT2obzpDh4LVcdeiUE1vKwdsNFfVf9OZFczmbwHeai9TrJG0F4r%2Bh%2FK%2BdFnIg1rJTo5by6JScgURy08WJ%2FWNE7pE%2F2YSfSXHgVdjPwY7T%2BPU0W%2BGes02zQASDQiqGJBPt2Bf4XbvmKV5PEWGZM9NTo5O4YF8EEDb1Hwrs3%2FqqCov8nLUJc4059FKwH3bnQrkiXmvf%2Fvu5biabMu7%2FnJNGnWhnLHIlspk4ahLO2u6Ep%2FO%2BvjVeRdVLpouJfrUOt5LMCK8ApVboVBFvo%2BJ6oA1sBGOuly84WdoqVVH4LR54kdr72GGCOtiRi2XKBp%2FvSSPt4F5y2OoMHKHVvlk%2BZClv8FkNEFT3F2OJkPR6NOd5zpIgVG7dfgJZqXW9gKXrTNoXKPZPptB%2BpyzDTxcZXORVFqUTTJQHiswTLEdhGMjLCbE5KZqIsDciPekGYuvkVjzJLKJ4%2BhetNR%2BdcMHnyEBh8P%2BKmMbrWsBtsTpPD7wW0ACmiEqxfEGbAhcA1MmjPCgvJbfLIsBt3rD8%2FgenkXQBkbKTpyq1X9yFm65Gt4wgWqmZyT48LjsQ0IkviA6RjzAq8VXPUvTG4T5WKf2zZm8WeUgqM7Ju1TDXlpW%2BBjqkARnQ99W6%2B8dDlQywv0PZGCp9IXC2mtRHS1uy2tRL0riZHf3EMyqxE4eOXsHxiREN%2B6tKH2hYQf4KeGb9K%2F0qtYNFGIOoiMUfSV1DRd0biq8vlrAyu9mYDlZhObwi2pIonW0rU74BL3k6WffHIUxQrJec5toAC6SAeynjELerExtkro1SGVkZ1yB67gcPVzQnajNe1obCNGlIt4u7zHc1LAyy55Tb&X-Amz-Signature=795f79b212e95552f053c3a7129080ab4692abb5925440e061a0515cce6bca53&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VWGE2L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDofnJeseA7azaDGTAGyzi9OFYco%2B3iY%2B0GavQdYczmwIhAPO0B4qmvqlYPXpMvi8dqIeW9%2B%2FdbJ%2BqQqzKtDXz7OXeKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrOXgdrYkIPUR5U2sq3AMvOAT%2F7pLv7lQvZrG6uj523o%2FJRMdXT2obzpDh4LVcdeiUE1vKwdsNFfVf9OZFczmbwHeai9TrJG0F4r%2Bh%2FK%2BdFnIg1rJTo5by6JScgURy08WJ%2FWNE7pE%2F2YSfSXHgVdjPwY7T%2BPU0W%2BGes02zQASDQiqGJBPt2Bf4XbvmKV5PEWGZM9NTo5O4YF8EEDb1Hwrs3%2FqqCov8nLUJc4059FKwH3bnQrkiXmvf%2Fvu5biabMu7%2FnJNGnWhnLHIlspk4ahLO2u6Ep%2FO%2BvjVeRdVLpouJfrUOt5LMCK8ApVboVBFvo%2BJ6oA1sBGOuly84WdoqVVH4LR54kdr72GGCOtiRi2XKBp%2FvSSPt4F5y2OoMHKHVvlk%2BZClv8FkNEFT3F2OJkPR6NOd5zpIgVG7dfgJZqXW9gKXrTNoXKPZPptB%2BpyzDTxcZXORVFqUTTJQHiswTLEdhGMjLCbE5KZqIsDciPekGYuvkVjzJLKJ4%2BhetNR%2BdcMHnyEBh8P%2BKmMbrWsBtsTpPD7wW0ACmiEqxfEGbAhcA1MmjPCgvJbfLIsBt3rD8%2FgenkXQBkbKTpyq1X9yFm65Gt4wgWqmZyT48LjsQ0IkviA6RjzAq8VXPUvTG4T5WKf2zZm8WeUgqM7Ju1TDXlpW%2BBjqkARnQ99W6%2B8dDlQywv0PZGCp9IXC2mtRHS1uy2tRL0riZHf3EMyqxE4eOXsHxiREN%2B6tKH2hYQf4KeGb9K%2F0qtYNFGIOoiMUfSV1DRd0biq8vlrAyu9mYDlZhObwi2pIonW0rU74BL3k6WffHIUxQrJec5toAC6SAeynjELerExtkro1SGVkZ1yB67gcPVzQnajNe1obCNGlIt4u7zHc1LAyy55Tb&X-Amz-Signature=64fff0a5e13a925e61396c3cd2aee070bcb7132dcec4e93a149bb7bc9d07f4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
