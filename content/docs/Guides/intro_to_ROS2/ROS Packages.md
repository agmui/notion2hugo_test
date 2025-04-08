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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXUORKG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzgLm17j%2F%2F9roKUpzALa8becmRcYVChcVT3E5f6iBt%2FAiEAxrK67RSQ4BUIyUzabDtBkBPZV%2FpgeklJ29%2BUrr3swVUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIklN2ciQCmB6n3XFCrcA6lPIdnkV9BrVvNvdFZ4eCoZR8l5VE%2FrzebyiRcfCgzEKLv0YCrlOpqKSXkL9dia%2BjC6MN4Q5e3RXPnRXjydp%2F6PX%2Fp%2BKwzXU615kYH1k5t3O8tkDPVNtq84fLwk2niYNinamrUibO%2FJWdcNq6Q%2F45rGvfLckJOITq7MtHchOf%2FJkeG6toyYSqikLYoDZVx0Fz%2F98OI%2FFxM3ZaqN7vb%2BKTU0vPOkVMtwqdRLPiBW9oxZaZ5ko%2BTxLbwrKjW5f9s7S%2FUWjmbcs5wksubmekrtRomRGJA4xUv%2FX%2B5TtHlGfp8eiDwQ5arq75CvZFkPMj%2FNY%2Bac%2Fn05mDL8Ec3ioMTabE8T6TobmHvzxppD%2BLRT0ZMp3H%2Bq6zHzns4%2FiGdoJaoqCRLJs%2F%2FLDGTgWRoUaeRYl7XJG77W4w%2F3Kzqs%2BjZSk8MjZcJmFgKRPczz8QvnSXUOyBh%2BKfQrIiJYBEljwQz8SyQrEDZxz3vX1Nwid6HfHjXcxz61nEDik3SfP5QbrU0Is1gtkCEDzXa4jnX9rxZYWsuZbmq6nYAcUIetuSG03CGc7k%2FwSrkN9SCwJlT8u%2F3TOmuBnc%2B%2BYHYSCx5CVrF339H22xBHlUoylVH9BpRARxZYERmWxId5JcGRxngXMMi50r8GOqUBJyzjjHKE77VrOZCG1Yt%2FHP8wzbd5Y0k3MkFJY2EfTnJa3C0WCopLKXqsb7FbTaqY1I0ih89EbgGSx5GtUNLVFwbzFfY4ONdC4tc%2BgqsdGcR63u8UeJHmK6lk8v%2F4UXpYMqqTCOY2utofXxdSXknJ8%2Bfk3gzvHMSO3yKNaB2eSS4zzS9iLMWMhAnrQSKirF5TNTwtxEAJHw%2Bv10peLCbd1bBkQuGm&X-Amz-Signature=03f653892e09ad3f50187ff88a757d6d6f4b703af27ea1d53169c02a12d22322&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXUORKG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzgLm17j%2F%2F9roKUpzALa8becmRcYVChcVT3E5f6iBt%2FAiEAxrK67RSQ4BUIyUzabDtBkBPZV%2FpgeklJ29%2BUrr3swVUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIklN2ciQCmB6n3XFCrcA6lPIdnkV9BrVvNvdFZ4eCoZR8l5VE%2FrzebyiRcfCgzEKLv0YCrlOpqKSXkL9dia%2BjC6MN4Q5e3RXPnRXjydp%2F6PX%2Fp%2BKwzXU615kYH1k5t3O8tkDPVNtq84fLwk2niYNinamrUibO%2FJWdcNq6Q%2F45rGvfLckJOITq7MtHchOf%2FJkeG6toyYSqikLYoDZVx0Fz%2F98OI%2FFxM3ZaqN7vb%2BKTU0vPOkVMtwqdRLPiBW9oxZaZ5ko%2BTxLbwrKjW5f9s7S%2FUWjmbcs5wksubmekrtRomRGJA4xUv%2FX%2B5TtHlGfp8eiDwQ5arq75CvZFkPMj%2FNY%2Bac%2Fn05mDL8Ec3ioMTabE8T6TobmHvzxppD%2BLRT0ZMp3H%2Bq6zHzns4%2FiGdoJaoqCRLJs%2F%2FLDGTgWRoUaeRYl7XJG77W4w%2F3Kzqs%2BjZSk8MjZcJmFgKRPczz8QvnSXUOyBh%2BKfQrIiJYBEljwQz8SyQrEDZxz3vX1Nwid6HfHjXcxz61nEDik3SfP5QbrU0Is1gtkCEDzXa4jnX9rxZYWsuZbmq6nYAcUIetuSG03CGc7k%2FwSrkN9SCwJlT8u%2F3TOmuBnc%2B%2BYHYSCx5CVrF339H22xBHlUoylVH9BpRARxZYERmWxId5JcGRxngXMMi50r8GOqUBJyzjjHKE77VrOZCG1Yt%2FHP8wzbd5Y0k3MkFJY2EfTnJa3C0WCopLKXqsb7FbTaqY1I0ih89EbgGSx5GtUNLVFwbzFfY4ONdC4tc%2BgqsdGcR63u8UeJHmK6lk8v%2F4UXpYMqqTCOY2utofXxdSXknJ8%2Bfk3gzvHMSO3yKNaB2eSS4zzS9iLMWMhAnrQSKirF5TNTwtxEAJHw%2Bv10peLCbd1bBkQuGm&X-Amz-Signature=bbef3ea7a1224d219ed4d5cc6b13fbbf3df5f9ef234751a1d5655172cf0dd0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXUORKG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzgLm17j%2F%2F9roKUpzALa8becmRcYVChcVT3E5f6iBt%2FAiEAxrK67RSQ4BUIyUzabDtBkBPZV%2FpgeklJ29%2BUrr3swVUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIklN2ciQCmB6n3XFCrcA6lPIdnkV9BrVvNvdFZ4eCoZR8l5VE%2FrzebyiRcfCgzEKLv0YCrlOpqKSXkL9dia%2BjC6MN4Q5e3RXPnRXjydp%2F6PX%2Fp%2BKwzXU615kYH1k5t3O8tkDPVNtq84fLwk2niYNinamrUibO%2FJWdcNq6Q%2F45rGvfLckJOITq7MtHchOf%2FJkeG6toyYSqikLYoDZVx0Fz%2F98OI%2FFxM3ZaqN7vb%2BKTU0vPOkVMtwqdRLPiBW9oxZaZ5ko%2BTxLbwrKjW5f9s7S%2FUWjmbcs5wksubmekrtRomRGJA4xUv%2FX%2B5TtHlGfp8eiDwQ5arq75CvZFkPMj%2FNY%2Bac%2Fn05mDL8Ec3ioMTabE8T6TobmHvzxppD%2BLRT0ZMp3H%2Bq6zHzns4%2FiGdoJaoqCRLJs%2F%2FLDGTgWRoUaeRYl7XJG77W4w%2F3Kzqs%2BjZSk8MjZcJmFgKRPczz8QvnSXUOyBh%2BKfQrIiJYBEljwQz8SyQrEDZxz3vX1Nwid6HfHjXcxz61nEDik3SfP5QbrU0Is1gtkCEDzXa4jnX9rxZYWsuZbmq6nYAcUIetuSG03CGc7k%2FwSrkN9SCwJlT8u%2F3TOmuBnc%2B%2BYHYSCx5CVrF339H22xBHlUoylVH9BpRARxZYERmWxId5JcGRxngXMMi50r8GOqUBJyzjjHKE77VrOZCG1Yt%2FHP8wzbd5Y0k3MkFJY2EfTnJa3C0WCopLKXqsb7FbTaqY1I0ih89EbgGSx5GtUNLVFwbzFfY4ONdC4tc%2BgqsdGcR63u8UeJHmK6lk8v%2F4UXpYMqqTCOY2utofXxdSXknJ8%2Bfk3gzvHMSO3yKNaB2eSS4zzS9iLMWMhAnrQSKirF5TNTwtxEAJHw%2Bv10peLCbd1bBkQuGm&X-Amz-Signature=7046fa72d6c2f11f03a7be03c698160573e93f41d894e04cc5daa444e7181781&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXUORKG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzgLm17j%2F%2F9roKUpzALa8becmRcYVChcVT3E5f6iBt%2FAiEAxrK67RSQ4BUIyUzabDtBkBPZV%2FpgeklJ29%2BUrr3swVUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIklN2ciQCmB6n3XFCrcA6lPIdnkV9BrVvNvdFZ4eCoZR8l5VE%2FrzebyiRcfCgzEKLv0YCrlOpqKSXkL9dia%2BjC6MN4Q5e3RXPnRXjydp%2F6PX%2Fp%2BKwzXU615kYH1k5t3O8tkDPVNtq84fLwk2niYNinamrUibO%2FJWdcNq6Q%2F45rGvfLckJOITq7MtHchOf%2FJkeG6toyYSqikLYoDZVx0Fz%2F98OI%2FFxM3ZaqN7vb%2BKTU0vPOkVMtwqdRLPiBW9oxZaZ5ko%2BTxLbwrKjW5f9s7S%2FUWjmbcs5wksubmekrtRomRGJA4xUv%2FX%2B5TtHlGfp8eiDwQ5arq75CvZFkPMj%2FNY%2Bac%2Fn05mDL8Ec3ioMTabE8T6TobmHvzxppD%2BLRT0ZMp3H%2Bq6zHzns4%2FiGdoJaoqCRLJs%2F%2FLDGTgWRoUaeRYl7XJG77W4w%2F3Kzqs%2BjZSk8MjZcJmFgKRPczz8QvnSXUOyBh%2BKfQrIiJYBEljwQz8SyQrEDZxz3vX1Nwid6HfHjXcxz61nEDik3SfP5QbrU0Is1gtkCEDzXa4jnX9rxZYWsuZbmq6nYAcUIetuSG03CGc7k%2FwSrkN9SCwJlT8u%2F3TOmuBnc%2B%2BYHYSCx5CVrF339H22xBHlUoylVH9BpRARxZYERmWxId5JcGRxngXMMi50r8GOqUBJyzjjHKE77VrOZCG1Yt%2FHP8wzbd5Y0k3MkFJY2EfTnJa3C0WCopLKXqsb7FbTaqY1I0ih89EbgGSx5GtUNLVFwbzFfY4ONdC4tc%2BgqsdGcR63u8UeJHmK6lk8v%2F4UXpYMqqTCOY2utofXxdSXknJ8%2Bfk3gzvHMSO3yKNaB2eSS4zzS9iLMWMhAnrQSKirF5TNTwtxEAJHw%2Bv10peLCbd1bBkQuGm&X-Amz-Signature=1a45adeb0474c64ed7a584e1e5ff21d7f2288e45ad469d34c9f55f058b470406&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXUORKG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzgLm17j%2F%2F9roKUpzALa8becmRcYVChcVT3E5f6iBt%2FAiEAxrK67RSQ4BUIyUzabDtBkBPZV%2FpgeklJ29%2BUrr3swVUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIklN2ciQCmB6n3XFCrcA6lPIdnkV9BrVvNvdFZ4eCoZR8l5VE%2FrzebyiRcfCgzEKLv0YCrlOpqKSXkL9dia%2BjC6MN4Q5e3RXPnRXjydp%2F6PX%2Fp%2BKwzXU615kYH1k5t3O8tkDPVNtq84fLwk2niYNinamrUibO%2FJWdcNq6Q%2F45rGvfLckJOITq7MtHchOf%2FJkeG6toyYSqikLYoDZVx0Fz%2F98OI%2FFxM3ZaqN7vb%2BKTU0vPOkVMtwqdRLPiBW9oxZaZ5ko%2BTxLbwrKjW5f9s7S%2FUWjmbcs5wksubmekrtRomRGJA4xUv%2FX%2B5TtHlGfp8eiDwQ5arq75CvZFkPMj%2FNY%2Bac%2Fn05mDL8Ec3ioMTabE8T6TobmHvzxppD%2BLRT0ZMp3H%2Bq6zHzns4%2FiGdoJaoqCRLJs%2F%2FLDGTgWRoUaeRYl7XJG77W4w%2F3Kzqs%2BjZSk8MjZcJmFgKRPczz8QvnSXUOyBh%2BKfQrIiJYBEljwQz8SyQrEDZxz3vX1Nwid6HfHjXcxz61nEDik3SfP5QbrU0Is1gtkCEDzXa4jnX9rxZYWsuZbmq6nYAcUIetuSG03CGc7k%2FwSrkN9SCwJlT8u%2F3TOmuBnc%2B%2BYHYSCx5CVrF339H22xBHlUoylVH9BpRARxZYERmWxId5JcGRxngXMMi50r8GOqUBJyzjjHKE77VrOZCG1Yt%2FHP8wzbd5Y0k3MkFJY2EfTnJa3C0WCopLKXqsb7FbTaqY1I0ih89EbgGSx5GtUNLVFwbzFfY4ONdC4tc%2BgqsdGcR63u8UeJHmK6lk8v%2F4UXpYMqqTCOY2utofXxdSXknJ8%2Bfk3gzvHMSO3yKNaB2eSS4zzS9iLMWMhAnrQSKirF5TNTwtxEAJHw%2Bv10peLCbd1bBkQuGm&X-Amz-Signature=6abaf70099db24b3a22442c11a4dea49ad97c8a783b312f7d346d7fb367cb2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXUORKG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzgLm17j%2F%2F9roKUpzALa8becmRcYVChcVT3E5f6iBt%2FAiEAxrK67RSQ4BUIyUzabDtBkBPZV%2FpgeklJ29%2BUrr3swVUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIklN2ciQCmB6n3XFCrcA6lPIdnkV9BrVvNvdFZ4eCoZR8l5VE%2FrzebyiRcfCgzEKLv0YCrlOpqKSXkL9dia%2BjC6MN4Q5e3RXPnRXjydp%2F6PX%2Fp%2BKwzXU615kYH1k5t3O8tkDPVNtq84fLwk2niYNinamrUibO%2FJWdcNq6Q%2F45rGvfLckJOITq7MtHchOf%2FJkeG6toyYSqikLYoDZVx0Fz%2F98OI%2FFxM3ZaqN7vb%2BKTU0vPOkVMtwqdRLPiBW9oxZaZ5ko%2BTxLbwrKjW5f9s7S%2FUWjmbcs5wksubmekrtRomRGJA4xUv%2FX%2B5TtHlGfp8eiDwQ5arq75CvZFkPMj%2FNY%2Bac%2Fn05mDL8Ec3ioMTabE8T6TobmHvzxppD%2BLRT0ZMp3H%2Bq6zHzns4%2FiGdoJaoqCRLJs%2F%2FLDGTgWRoUaeRYl7XJG77W4w%2F3Kzqs%2BjZSk8MjZcJmFgKRPczz8QvnSXUOyBh%2BKfQrIiJYBEljwQz8SyQrEDZxz3vX1Nwid6HfHjXcxz61nEDik3SfP5QbrU0Is1gtkCEDzXa4jnX9rxZYWsuZbmq6nYAcUIetuSG03CGc7k%2FwSrkN9SCwJlT8u%2F3TOmuBnc%2B%2BYHYSCx5CVrF339H22xBHlUoylVH9BpRARxZYERmWxId5JcGRxngXMMi50r8GOqUBJyzjjHKE77VrOZCG1Yt%2FHP8wzbd5Y0k3MkFJY2EfTnJa3C0WCopLKXqsb7FbTaqY1I0ih89EbgGSx5GtUNLVFwbzFfY4ONdC4tc%2BgqsdGcR63u8UeJHmK6lk8v%2F4UXpYMqqTCOY2utofXxdSXknJ8%2Bfk3gzvHMSO3yKNaB2eSS4zzS9iLMWMhAnrQSKirF5TNTwtxEAJHw%2Bv10peLCbd1bBkQuGm&X-Amz-Signature=d4e9c67eeb58a3f7ae3377a2741fd2582429c4e73320f253c68b1e1609f0c945&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXUORKG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzgLm17j%2F%2F9roKUpzALa8becmRcYVChcVT3E5f6iBt%2FAiEAxrK67RSQ4BUIyUzabDtBkBPZV%2FpgeklJ29%2BUrr3swVUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIklN2ciQCmB6n3XFCrcA6lPIdnkV9BrVvNvdFZ4eCoZR8l5VE%2FrzebyiRcfCgzEKLv0YCrlOpqKSXkL9dia%2BjC6MN4Q5e3RXPnRXjydp%2F6PX%2Fp%2BKwzXU615kYH1k5t3O8tkDPVNtq84fLwk2niYNinamrUibO%2FJWdcNq6Q%2F45rGvfLckJOITq7MtHchOf%2FJkeG6toyYSqikLYoDZVx0Fz%2F98OI%2FFxM3ZaqN7vb%2BKTU0vPOkVMtwqdRLPiBW9oxZaZ5ko%2BTxLbwrKjW5f9s7S%2FUWjmbcs5wksubmekrtRomRGJA4xUv%2FX%2B5TtHlGfp8eiDwQ5arq75CvZFkPMj%2FNY%2Bac%2Fn05mDL8Ec3ioMTabE8T6TobmHvzxppD%2BLRT0ZMp3H%2Bq6zHzns4%2FiGdoJaoqCRLJs%2F%2FLDGTgWRoUaeRYl7XJG77W4w%2F3Kzqs%2BjZSk8MjZcJmFgKRPczz8QvnSXUOyBh%2BKfQrIiJYBEljwQz8SyQrEDZxz3vX1Nwid6HfHjXcxz61nEDik3SfP5QbrU0Is1gtkCEDzXa4jnX9rxZYWsuZbmq6nYAcUIetuSG03CGc7k%2FwSrkN9SCwJlT8u%2F3TOmuBnc%2B%2BYHYSCx5CVrF339H22xBHlUoylVH9BpRARxZYERmWxId5JcGRxngXMMi50r8GOqUBJyzjjHKE77VrOZCG1Yt%2FHP8wzbd5Y0k3MkFJY2EfTnJa3C0WCopLKXqsb7FbTaqY1I0ih89EbgGSx5GtUNLVFwbzFfY4ONdC4tc%2BgqsdGcR63u8UeJHmK6lk8v%2F4UXpYMqqTCOY2utofXxdSXknJ8%2Bfk3gzvHMSO3yKNaB2eSS4zzS9iLMWMhAnrQSKirF5TNTwtxEAJHw%2Bv10peLCbd1bBkQuGm&X-Amz-Signature=02932719caeb8d1210ff770ba36add7f3a92574e198b9ffcef64ac0afcc7ddd3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
