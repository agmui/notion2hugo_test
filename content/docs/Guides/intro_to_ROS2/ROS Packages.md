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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXFXNCZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYpWht3csi1YyqI%2BTS1Vo1ErSP0dlnBKV%2Frfc61D6SgIhAK4zyqOX9OTfaobGGF970F1OVd5kfX10%2FoBc5B7%2FrIUVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzGzrt76YR%2BtP%2FWihMq3AP67nuzPoS4idocZcKazq8M7iCdx6AGnwTfdg6TkaAsOAcGdq2A15WnrjjEfmQusV%2FTufDZ6ZmKloTBGc%2FSG0ayQDafXSzHShKK9wmd2J1ewcu7iQKaGj1J%2BUWWqspw8RGjqQsAN4xcoZBXs2vEW7Ia33kuqLx%2BUeXfl6b7z2TqXLhgC951%2FAevzZd0J4AdlF9CEJxMKhYUbSw88DOFTSo34UcHsVYbJam3q9m2ZG7pn6R0Vw4dqjkgMzaZ9AYYRLVGubfZjhFmNrpdV%2BVf2sQcwBcJIM99qw5IHnCYB3486yMsQrr1j6FqQMry5%2FpRGICWG%2F0jftIf27yyxlQAQlwuYpt7JDo4vZT6mcbkaCKR1E3lIbOvWXatqRwyx1vSY6WvxMukU8BWT%2FTFWnKAW0FU7qbISgqjrRqFHklrPd1Bzv7mUGdcCL3sONOsppnhF7r%2B3uUCBrAegX0JV82Ok7ar73iGfIaJPlqakdNmDqwtTCZZ1j0fA9yuHF4HFWJXYGhabafDsc1LOergzzA9t1daLWG7DX81n36Gm8aYKdO6WyusMwPaxU%2Bmsk5XnwOU5rCRJyFpc5xvDN2Qm%2FAjrYOxuk9DG2V7lLu6IGi2HqfkqAthf24CJy0Xehd9gjDr7LbABjqkAa%2FGIAWTh0In08a3s44NPCGQiinVMOyHNCZ%2FGPOkzg38kpHR8lCWnmzhj0bbqpcO%2F42PEI8XzCLQpDEHNmkYuz451kBhf8NVNGSVVOmtBHUnDVNqEuJbiPJUyIN%2BnX1uG%2BfKaK9i5bWwDOyvAyn6pmGkfhmfIHpDyFVsHrDhI%2FqBnP1sKWpp5vCTLO6Oh60YrgzTi8oEBEKAZceQEjj5zdQtBnv%2F&X-Amz-Signature=298b1f002e48c5cfbc7d8e13084be1d2f14b961244537fc239a9671b5dd857c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXFXNCZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYpWht3csi1YyqI%2BTS1Vo1ErSP0dlnBKV%2Frfc61D6SgIhAK4zyqOX9OTfaobGGF970F1OVd5kfX10%2FoBc5B7%2FrIUVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzGzrt76YR%2BtP%2FWihMq3AP67nuzPoS4idocZcKazq8M7iCdx6AGnwTfdg6TkaAsOAcGdq2A15WnrjjEfmQusV%2FTufDZ6ZmKloTBGc%2FSG0ayQDafXSzHShKK9wmd2J1ewcu7iQKaGj1J%2BUWWqspw8RGjqQsAN4xcoZBXs2vEW7Ia33kuqLx%2BUeXfl6b7z2TqXLhgC951%2FAevzZd0J4AdlF9CEJxMKhYUbSw88DOFTSo34UcHsVYbJam3q9m2ZG7pn6R0Vw4dqjkgMzaZ9AYYRLVGubfZjhFmNrpdV%2BVf2sQcwBcJIM99qw5IHnCYB3486yMsQrr1j6FqQMry5%2FpRGICWG%2F0jftIf27yyxlQAQlwuYpt7JDo4vZT6mcbkaCKR1E3lIbOvWXatqRwyx1vSY6WvxMukU8BWT%2FTFWnKAW0FU7qbISgqjrRqFHklrPd1Bzv7mUGdcCL3sONOsppnhF7r%2B3uUCBrAegX0JV82Ok7ar73iGfIaJPlqakdNmDqwtTCZZ1j0fA9yuHF4HFWJXYGhabafDsc1LOergzzA9t1daLWG7DX81n36Gm8aYKdO6WyusMwPaxU%2Bmsk5XnwOU5rCRJyFpc5xvDN2Qm%2FAjrYOxuk9DG2V7lLu6IGi2HqfkqAthf24CJy0Xehd9gjDr7LbABjqkAa%2FGIAWTh0In08a3s44NPCGQiinVMOyHNCZ%2FGPOkzg38kpHR8lCWnmzhj0bbqpcO%2F42PEI8XzCLQpDEHNmkYuz451kBhf8NVNGSVVOmtBHUnDVNqEuJbiPJUyIN%2BnX1uG%2BfKaK9i5bWwDOyvAyn6pmGkfhmfIHpDyFVsHrDhI%2FqBnP1sKWpp5vCTLO6Oh60YrgzTi8oEBEKAZceQEjj5zdQtBnv%2F&X-Amz-Signature=62a35cfc16e5881c0dfa1e9bd2c7fbd5028a803c01e18b2c81c24081aec7adf8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXFXNCZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYpWht3csi1YyqI%2BTS1Vo1ErSP0dlnBKV%2Frfc61D6SgIhAK4zyqOX9OTfaobGGF970F1OVd5kfX10%2FoBc5B7%2FrIUVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzGzrt76YR%2BtP%2FWihMq3AP67nuzPoS4idocZcKazq8M7iCdx6AGnwTfdg6TkaAsOAcGdq2A15WnrjjEfmQusV%2FTufDZ6ZmKloTBGc%2FSG0ayQDafXSzHShKK9wmd2J1ewcu7iQKaGj1J%2BUWWqspw8RGjqQsAN4xcoZBXs2vEW7Ia33kuqLx%2BUeXfl6b7z2TqXLhgC951%2FAevzZd0J4AdlF9CEJxMKhYUbSw88DOFTSo34UcHsVYbJam3q9m2ZG7pn6R0Vw4dqjkgMzaZ9AYYRLVGubfZjhFmNrpdV%2BVf2sQcwBcJIM99qw5IHnCYB3486yMsQrr1j6FqQMry5%2FpRGICWG%2F0jftIf27yyxlQAQlwuYpt7JDo4vZT6mcbkaCKR1E3lIbOvWXatqRwyx1vSY6WvxMukU8BWT%2FTFWnKAW0FU7qbISgqjrRqFHklrPd1Bzv7mUGdcCL3sONOsppnhF7r%2B3uUCBrAegX0JV82Ok7ar73iGfIaJPlqakdNmDqwtTCZZ1j0fA9yuHF4HFWJXYGhabafDsc1LOergzzA9t1daLWG7DX81n36Gm8aYKdO6WyusMwPaxU%2Bmsk5XnwOU5rCRJyFpc5xvDN2Qm%2FAjrYOxuk9DG2V7lLu6IGi2HqfkqAthf24CJy0Xehd9gjDr7LbABjqkAa%2FGIAWTh0In08a3s44NPCGQiinVMOyHNCZ%2FGPOkzg38kpHR8lCWnmzhj0bbqpcO%2F42PEI8XzCLQpDEHNmkYuz451kBhf8NVNGSVVOmtBHUnDVNqEuJbiPJUyIN%2BnX1uG%2BfKaK9i5bWwDOyvAyn6pmGkfhmfIHpDyFVsHrDhI%2FqBnP1sKWpp5vCTLO6Oh60YrgzTi8oEBEKAZceQEjj5zdQtBnv%2F&X-Amz-Signature=26b2f032b020b3ccd8b3488ab01cf6daf04a715f56159d038085870461486c07&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXFXNCZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYpWht3csi1YyqI%2BTS1Vo1ErSP0dlnBKV%2Frfc61D6SgIhAK4zyqOX9OTfaobGGF970F1OVd5kfX10%2FoBc5B7%2FrIUVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzGzrt76YR%2BtP%2FWihMq3AP67nuzPoS4idocZcKazq8M7iCdx6AGnwTfdg6TkaAsOAcGdq2A15WnrjjEfmQusV%2FTufDZ6ZmKloTBGc%2FSG0ayQDafXSzHShKK9wmd2J1ewcu7iQKaGj1J%2BUWWqspw8RGjqQsAN4xcoZBXs2vEW7Ia33kuqLx%2BUeXfl6b7z2TqXLhgC951%2FAevzZd0J4AdlF9CEJxMKhYUbSw88DOFTSo34UcHsVYbJam3q9m2ZG7pn6R0Vw4dqjkgMzaZ9AYYRLVGubfZjhFmNrpdV%2BVf2sQcwBcJIM99qw5IHnCYB3486yMsQrr1j6FqQMry5%2FpRGICWG%2F0jftIf27yyxlQAQlwuYpt7JDo4vZT6mcbkaCKR1E3lIbOvWXatqRwyx1vSY6WvxMukU8BWT%2FTFWnKAW0FU7qbISgqjrRqFHklrPd1Bzv7mUGdcCL3sONOsppnhF7r%2B3uUCBrAegX0JV82Ok7ar73iGfIaJPlqakdNmDqwtTCZZ1j0fA9yuHF4HFWJXYGhabafDsc1LOergzzA9t1daLWG7DX81n36Gm8aYKdO6WyusMwPaxU%2Bmsk5XnwOU5rCRJyFpc5xvDN2Qm%2FAjrYOxuk9DG2V7lLu6IGi2HqfkqAthf24CJy0Xehd9gjDr7LbABjqkAa%2FGIAWTh0In08a3s44NPCGQiinVMOyHNCZ%2FGPOkzg38kpHR8lCWnmzhj0bbqpcO%2F42PEI8XzCLQpDEHNmkYuz451kBhf8NVNGSVVOmtBHUnDVNqEuJbiPJUyIN%2BnX1uG%2BfKaK9i5bWwDOyvAyn6pmGkfhmfIHpDyFVsHrDhI%2FqBnP1sKWpp5vCTLO6Oh60YrgzTi8oEBEKAZceQEjj5zdQtBnv%2F&X-Amz-Signature=14799c2124ab9728b3fa3ec3ee4b73813b40fe0ff38842eb62fe58b608b194a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXFXNCZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYpWht3csi1YyqI%2BTS1Vo1ErSP0dlnBKV%2Frfc61D6SgIhAK4zyqOX9OTfaobGGF970F1OVd5kfX10%2FoBc5B7%2FrIUVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzGzrt76YR%2BtP%2FWihMq3AP67nuzPoS4idocZcKazq8M7iCdx6AGnwTfdg6TkaAsOAcGdq2A15WnrjjEfmQusV%2FTufDZ6ZmKloTBGc%2FSG0ayQDafXSzHShKK9wmd2J1ewcu7iQKaGj1J%2BUWWqspw8RGjqQsAN4xcoZBXs2vEW7Ia33kuqLx%2BUeXfl6b7z2TqXLhgC951%2FAevzZd0J4AdlF9CEJxMKhYUbSw88DOFTSo34UcHsVYbJam3q9m2ZG7pn6R0Vw4dqjkgMzaZ9AYYRLVGubfZjhFmNrpdV%2BVf2sQcwBcJIM99qw5IHnCYB3486yMsQrr1j6FqQMry5%2FpRGICWG%2F0jftIf27yyxlQAQlwuYpt7JDo4vZT6mcbkaCKR1E3lIbOvWXatqRwyx1vSY6WvxMukU8BWT%2FTFWnKAW0FU7qbISgqjrRqFHklrPd1Bzv7mUGdcCL3sONOsppnhF7r%2B3uUCBrAegX0JV82Ok7ar73iGfIaJPlqakdNmDqwtTCZZ1j0fA9yuHF4HFWJXYGhabafDsc1LOergzzA9t1daLWG7DX81n36Gm8aYKdO6WyusMwPaxU%2Bmsk5XnwOU5rCRJyFpc5xvDN2Qm%2FAjrYOxuk9DG2V7lLu6IGi2HqfkqAthf24CJy0Xehd9gjDr7LbABjqkAa%2FGIAWTh0In08a3s44NPCGQiinVMOyHNCZ%2FGPOkzg38kpHR8lCWnmzhj0bbqpcO%2F42PEI8XzCLQpDEHNmkYuz451kBhf8NVNGSVVOmtBHUnDVNqEuJbiPJUyIN%2BnX1uG%2BfKaK9i5bWwDOyvAyn6pmGkfhmfIHpDyFVsHrDhI%2FqBnP1sKWpp5vCTLO6Oh60YrgzTi8oEBEKAZceQEjj5zdQtBnv%2F&X-Amz-Signature=cd2887828adb6d48ce9a985a3861f4de0a7b3905c1d95583c8ecee4f8aebb8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXFXNCZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYpWht3csi1YyqI%2BTS1Vo1ErSP0dlnBKV%2Frfc61D6SgIhAK4zyqOX9OTfaobGGF970F1OVd5kfX10%2FoBc5B7%2FrIUVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzGzrt76YR%2BtP%2FWihMq3AP67nuzPoS4idocZcKazq8M7iCdx6AGnwTfdg6TkaAsOAcGdq2A15WnrjjEfmQusV%2FTufDZ6ZmKloTBGc%2FSG0ayQDafXSzHShKK9wmd2J1ewcu7iQKaGj1J%2BUWWqspw8RGjqQsAN4xcoZBXs2vEW7Ia33kuqLx%2BUeXfl6b7z2TqXLhgC951%2FAevzZd0J4AdlF9CEJxMKhYUbSw88DOFTSo34UcHsVYbJam3q9m2ZG7pn6R0Vw4dqjkgMzaZ9AYYRLVGubfZjhFmNrpdV%2BVf2sQcwBcJIM99qw5IHnCYB3486yMsQrr1j6FqQMry5%2FpRGICWG%2F0jftIf27yyxlQAQlwuYpt7JDo4vZT6mcbkaCKR1E3lIbOvWXatqRwyx1vSY6WvxMukU8BWT%2FTFWnKAW0FU7qbISgqjrRqFHklrPd1Bzv7mUGdcCL3sONOsppnhF7r%2B3uUCBrAegX0JV82Ok7ar73iGfIaJPlqakdNmDqwtTCZZ1j0fA9yuHF4HFWJXYGhabafDsc1LOergzzA9t1daLWG7DX81n36Gm8aYKdO6WyusMwPaxU%2Bmsk5XnwOU5rCRJyFpc5xvDN2Qm%2FAjrYOxuk9DG2V7lLu6IGi2HqfkqAthf24CJy0Xehd9gjDr7LbABjqkAa%2FGIAWTh0In08a3s44NPCGQiinVMOyHNCZ%2FGPOkzg38kpHR8lCWnmzhj0bbqpcO%2F42PEI8XzCLQpDEHNmkYuz451kBhf8NVNGSVVOmtBHUnDVNqEuJbiPJUyIN%2BnX1uG%2BfKaK9i5bWwDOyvAyn6pmGkfhmfIHpDyFVsHrDhI%2FqBnP1sKWpp5vCTLO6Oh60YrgzTi8oEBEKAZceQEjj5zdQtBnv%2F&X-Amz-Signature=81a6c385615f79c472b35b9892ba9e806be444201bb0149e62c18bc108532aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXFXNCZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaYpWht3csi1YyqI%2BTS1Vo1ErSP0dlnBKV%2Frfc61D6SgIhAK4zyqOX9OTfaobGGF970F1OVd5kfX10%2FoBc5B7%2FrIUVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzGzrt76YR%2BtP%2FWihMq3AP67nuzPoS4idocZcKazq8M7iCdx6AGnwTfdg6TkaAsOAcGdq2A15WnrjjEfmQusV%2FTufDZ6ZmKloTBGc%2FSG0ayQDafXSzHShKK9wmd2J1ewcu7iQKaGj1J%2BUWWqspw8RGjqQsAN4xcoZBXs2vEW7Ia33kuqLx%2BUeXfl6b7z2TqXLhgC951%2FAevzZd0J4AdlF9CEJxMKhYUbSw88DOFTSo34UcHsVYbJam3q9m2ZG7pn6R0Vw4dqjkgMzaZ9AYYRLVGubfZjhFmNrpdV%2BVf2sQcwBcJIM99qw5IHnCYB3486yMsQrr1j6FqQMry5%2FpRGICWG%2F0jftIf27yyxlQAQlwuYpt7JDo4vZT6mcbkaCKR1E3lIbOvWXatqRwyx1vSY6WvxMukU8BWT%2FTFWnKAW0FU7qbISgqjrRqFHklrPd1Bzv7mUGdcCL3sONOsppnhF7r%2B3uUCBrAegX0JV82Ok7ar73iGfIaJPlqakdNmDqwtTCZZ1j0fA9yuHF4HFWJXYGhabafDsc1LOergzzA9t1daLWG7DX81n36Gm8aYKdO6WyusMwPaxU%2Bmsk5XnwOU5rCRJyFpc5xvDN2Qm%2FAjrYOxuk9DG2V7lLu6IGi2HqfkqAthf24CJy0Xehd9gjDr7LbABjqkAa%2FGIAWTh0In08a3s44NPCGQiinVMOyHNCZ%2FGPOkzg38kpHR8lCWnmzhj0bbqpcO%2F42PEI8XzCLQpDEHNmkYuz451kBhf8NVNGSVVOmtBHUnDVNqEuJbiPJUyIN%2BnX1uG%2BfKaK9i5bWwDOyvAyn6pmGkfhmfIHpDyFVsHrDhI%2FqBnP1sKWpp5vCTLO6Oh60YrgzTi8oEBEKAZceQEjj5zdQtBnv%2F&X-Amz-Signature=529b62a1f6fd871a4a8d41d819e5b6a9b35bb1602a0279c7a56699c4f8ef0843&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
