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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBVWPET%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BN8QmAM13nFzWu0EY1JHVvN1aODUA1WTIDmh41k%2FEwIgYzQK6DlaemexYQ5d0XoF6%2BQmiKlkAr4A%2BcePgngvwIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj0PbxqglJ5VokIOCrcAyFLtVBuBZiPcXm6HjLEWf4cBDx8gW8kIr0sNopbT1W%2BIVeFxYIPZql2EyK1Y6%2B144zBT%2Fk74Hn2el6nJmdfsXZ7wR9aZDo6o9tUlZuk1ZI0oPVCLhUzjD8oxMOouUGIBoiEACIDEcC%2BNfeoLBaZqbMBT1ppbze0ur77gU4jaMfIMsQyfGMW7NPaNGzb8Fgsg3ulDCYZjFiUGmoFf0r%2Bz02bzlk7kcu6C68%2BbMA69gQCf4lnsPUPhbNaFCyg2ET39pgu9qA9LHtHSr2XSBr3xFI4Bnwg3gvtbupN%2Fi88UOJeI2IgMDhxHU3bf1SvGtW480AnVWsI9%2BzDmS5RvE8qNlgKgIwEEEr0cjUvLw1ogWWvFDufQe7oJy7rs6xCZkQKLCKfQqKjETjQwfRRqJ7dp4wutisQBqfuzxQzzPcl84sLER2QtMDq8iredtk6%2F%2FdybHwzktdyd0TS1lHD3%2FR4DM6XlropkEKiHKi%2FJpXCdZ7h5VX6iV%2FN8Qyfzlj8HwI0dGDqNs4U10HxaTBmrjsAAYrIMaARaxOYwpGEPBatm%2F9rfXRcviOLPo%2FPnIa%2BECH7H%2BnMiCOs4mMHfzBjQhGitHyFCTMqp%2FzNTRe4aM1yGaAiLIfFeefXyhRl%2BD39MMf8wcMGOqUBpuxU%2BSqrmgNICJf%2BZxjM2Ilej%2B9N662sw8UMdjN5Uy%2FhIMqySMfTCsLQ4H%2Fam4EUmgEKPcFEyDvhlrFK11iETUoL8EKQlbizBFLB0f34HINF3TE9eYBwPtxmDXmm5WYo%2FG0Al6olDVF5%2BjoiFqLw2f5ujs8UKSHabZZTJjNU1OGCkmI27VWaRLaFhh6VxZymMk7xgw8aemCoAFQBapSLrZYcb0e0&X-Amz-Signature=c3f7aee9c73ddffa90d43acbfab5ee3aa35c178e337c4bac941006b38746ed13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBVWPET%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BN8QmAM13nFzWu0EY1JHVvN1aODUA1WTIDmh41k%2FEwIgYzQK6DlaemexYQ5d0XoF6%2BQmiKlkAr4A%2BcePgngvwIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj0PbxqglJ5VokIOCrcAyFLtVBuBZiPcXm6HjLEWf4cBDx8gW8kIr0sNopbT1W%2BIVeFxYIPZql2EyK1Y6%2B144zBT%2Fk74Hn2el6nJmdfsXZ7wR9aZDo6o9tUlZuk1ZI0oPVCLhUzjD8oxMOouUGIBoiEACIDEcC%2BNfeoLBaZqbMBT1ppbze0ur77gU4jaMfIMsQyfGMW7NPaNGzb8Fgsg3ulDCYZjFiUGmoFf0r%2Bz02bzlk7kcu6C68%2BbMA69gQCf4lnsPUPhbNaFCyg2ET39pgu9qA9LHtHSr2XSBr3xFI4Bnwg3gvtbupN%2Fi88UOJeI2IgMDhxHU3bf1SvGtW480AnVWsI9%2BzDmS5RvE8qNlgKgIwEEEr0cjUvLw1ogWWvFDufQe7oJy7rs6xCZkQKLCKfQqKjETjQwfRRqJ7dp4wutisQBqfuzxQzzPcl84sLER2QtMDq8iredtk6%2F%2FdybHwzktdyd0TS1lHD3%2FR4DM6XlropkEKiHKi%2FJpXCdZ7h5VX6iV%2FN8Qyfzlj8HwI0dGDqNs4U10HxaTBmrjsAAYrIMaARaxOYwpGEPBatm%2F9rfXRcviOLPo%2FPnIa%2BECH7H%2BnMiCOs4mMHfzBjQhGitHyFCTMqp%2FzNTRe4aM1yGaAiLIfFeefXyhRl%2BD39MMf8wcMGOqUBpuxU%2BSqrmgNICJf%2BZxjM2Ilej%2B9N662sw8UMdjN5Uy%2FhIMqySMfTCsLQ4H%2Fam4EUmgEKPcFEyDvhlrFK11iETUoL8EKQlbizBFLB0f34HINF3TE9eYBwPtxmDXmm5WYo%2FG0Al6olDVF5%2BjoiFqLw2f5ujs8UKSHabZZTJjNU1OGCkmI27VWaRLaFhh6VxZymMk7xgw8aemCoAFQBapSLrZYcb0e0&X-Amz-Signature=7a8341e94e5884ebcf870932bd012b17a2cfc42b8e05fed46fe8c1b71e7ec0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBVWPET%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BN8QmAM13nFzWu0EY1JHVvN1aODUA1WTIDmh41k%2FEwIgYzQK6DlaemexYQ5d0XoF6%2BQmiKlkAr4A%2BcePgngvwIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj0PbxqglJ5VokIOCrcAyFLtVBuBZiPcXm6HjLEWf4cBDx8gW8kIr0sNopbT1W%2BIVeFxYIPZql2EyK1Y6%2B144zBT%2Fk74Hn2el6nJmdfsXZ7wR9aZDo6o9tUlZuk1ZI0oPVCLhUzjD8oxMOouUGIBoiEACIDEcC%2BNfeoLBaZqbMBT1ppbze0ur77gU4jaMfIMsQyfGMW7NPaNGzb8Fgsg3ulDCYZjFiUGmoFf0r%2Bz02bzlk7kcu6C68%2BbMA69gQCf4lnsPUPhbNaFCyg2ET39pgu9qA9LHtHSr2XSBr3xFI4Bnwg3gvtbupN%2Fi88UOJeI2IgMDhxHU3bf1SvGtW480AnVWsI9%2BzDmS5RvE8qNlgKgIwEEEr0cjUvLw1ogWWvFDufQe7oJy7rs6xCZkQKLCKfQqKjETjQwfRRqJ7dp4wutisQBqfuzxQzzPcl84sLER2QtMDq8iredtk6%2F%2FdybHwzktdyd0TS1lHD3%2FR4DM6XlropkEKiHKi%2FJpXCdZ7h5VX6iV%2FN8Qyfzlj8HwI0dGDqNs4U10HxaTBmrjsAAYrIMaARaxOYwpGEPBatm%2F9rfXRcviOLPo%2FPnIa%2BECH7H%2BnMiCOs4mMHfzBjQhGitHyFCTMqp%2FzNTRe4aM1yGaAiLIfFeefXyhRl%2BD39MMf8wcMGOqUBpuxU%2BSqrmgNICJf%2BZxjM2Ilej%2B9N662sw8UMdjN5Uy%2FhIMqySMfTCsLQ4H%2Fam4EUmgEKPcFEyDvhlrFK11iETUoL8EKQlbizBFLB0f34HINF3TE9eYBwPtxmDXmm5WYo%2FG0Al6olDVF5%2BjoiFqLw2f5ujs8UKSHabZZTJjNU1OGCkmI27VWaRLaFhh6VxZymMk7xgw8aemCoAFQBapSLrZYcb0e0&X-Amz-Signature=7ca98a61597bcce7789c20a641f0dedaa4143de8768fa6d81202f3cf66c19081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBVWPET%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BN8QmAM13nFzWu0EY1JHVvN1aODUA1WTIDmh41k%2FEwIgYzQK6DlaemexYQ5d0XoF6%2BQmiKlkAr4A%2BcePgngvwIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj0PbxqglJ5VokIOCrcAyFLtVBuBZiPcXm6HjLEWf4cBDx8gW8kIr0sNopbT1W%2BIVeFxYIPZql2EyK1Y6%2B144zBT%2Fk74Hn2el6nJmdfsXZ7wR9aZDo6o9tUlZuk1ZI0oPVCLhUzjD8oxMOouUGIBoiEACIDEcC%2BNfeoLBaZqbMBT1ppbze0ur77gU4jaMfIMsQyfGMW7NPaNGzb8Fgsg3ulDCYZjFiUGmoFf0r%2Bz02bzlk7kcu6C68%2BbMA69gQCf4lnsPUPhbNaFCyg2ET39pgu9qA9LHtHSr2XSBr3xFI4Bnwg3gvtbupN%2Fi88UOJeI2IgMDhxHU3bf1SvGtW480AnVWsI9%2BzDmS5RvE8qNlgKgIwEEEr0cjUvLw1ogWWvFDufQe7oJy7rs6xCZkQKLCKfQqKjETjQwfRRqJ7dp4wutisQBqfuzxQzzPcl84sLER2QtMDq8iredtk6%2F%2FdybHwzktdyd0TS1lHD3%2FR4DM6XlropkEKiHKi%2FJpXCdZ7h5VX6iV%2FN8Qyfzlj8HwI0dGDqNs4U10HxaTBmrjsAAYrIMaARaxOYwpGEPBatm%2F9rfXRcviOLPo%2FPnIa%2BECH7H%2BnMiCOs4mMHfzBjQhGitHyFCTMqp%2FzNTRe4aM1yGaAiLIfFeefXyhRl%2BD39MMf8wcMGOqUBpuxU%2BSqrmgNICJf%2BZxjM2Ilej%2B9N662sw8UMdjN5Uy%2FhIMqySMfTCsLQ4H%2Fam4EUmgEKPcFEyDvhlrFK11iETUoL8EKQlbizBFLB0f34HINF3TE9eYBwPtxmDXmm5WYo%2FG0Al6olDVF5%2BjoiFqLw2f5ujs8UKSHabZZTJjNU1OGCkmI27VWaRLaFhh6VxZymMk7xgw8aemCoAFQBapSLrZYcb0e0&X-Amz-Signature=c56ff7ef84f42ca03c5ff306046bf12b68ac37a4fcc3cec4061d43cdcd739727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBVWPET%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BN8QmAM13nFzWu0EY1JHVvN1aODUA1WTIDmh41k%2FEwIgYzQK6DlaemexYQ5d0XoF6%2BQmiKlkAr4A%2BcePgngvwIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj0PbxqglJ5VokIOCrcAyFLtVBuBZiPcXm6HjLEWf4cBDx8gW8kIr0sNopbT1W%2BIVeFxYIPZql2EyK1Y6%2B144zBT%2Fk74Hn2el6nJmdfsXZ7wR9aZDo6o9tUlZuk1ZI0oPVCLhUzjD8oxMOouUGIBoiEACIDEcC%2BNfeoLBaZqbMBT1ppbze0ur77gU4jaMfIMsQyfGMW7NPaNGzb8Fgsg3ulDCYZjFiUGmoFf0r%2Bz02bzlk7kcu6C68%2BbMA69gQCf4lnsPUPhbNaFCyg2ET39pgu9qA9LHtHSr2XSBr3xFI4Bnwg3gvtbupN%2Fi88UOJeI2IgMDhxHU3bf1SvGtW480AnVWsI9%2BzDmS5RvE8qNlgKgIwEEEr0cjUvLw1ogWWvFDufQe7oJy7rs6xCZkQKLCKfQqKjETjQwfRRqJ7dp4wutisQBqfuzxQzzPcl84sLER2QtMDq8iredtk6%2F%2FdybHwzktdyd0TS1lHD3%2FR4DM6XlropkEKiHKi%2FJpXCdZ7h5VX6iV%2FN8Qyfzlj8HwI0dGDqNs4U10HxaTBmrjsAAYrIMaARaxOYwpGEPBatm%2F9rfXRcviOLPo%2FPnIa%2BECH7H%2BnMiCOs4mMHfzBjQhGitHyFCTMqp%2FzNTRe4aM1yGaAiLIfFeefXyhRl%2BD39MMf8wcMGOqUBpuxU%2BSqrmgNICJf%2BZxjM2Ilej%2B9N662sw8UMdjN5Uy%2FhIMqySMfTCsLQ4H%2Fam4EUmgEKPcFEyDvhlrFK11iETUoL8EKQlbizBFLB0f34HINF3TE9eYBwPtxmDXmm5WYo%2FG0Al6olDVF5%2BjoiFqLw2f5ujs8UKSHabZZTJjNU1OGCkmI27VWaRLaFhh6VxZymMk7xgw8aemCoAFQBapSLrZYcb0e0&X-Amz-Signature=d748ff1b4d3f498d6deddf0b8af0258b9ccf52fb8a49f70cfc550ad8146e43c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBVWPET%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BN8QmAM13nFzWu0EY1JHVvN1aODUA1WTIDmh41k%2FEwIgYzQK6DlaemexYQ5d0XoF6%2BQmiKlkAr4A%2BcePgngvwIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj0PbxqglJ5VokIOCrcAyFLtVBuBZiPcXm6HjLEWf4cBDx8gW8kIr0sNopbT1W%2BIVeFxYIPZql2EyK1Y6%2B144zBT%2Fk74Hn2el6nJmdfsXZ7wR9aZDo6o9tUlZuk1ZI0oPVCLhUzjD8oxMOouUGIBoiEACIDEcC%2BNfeoLBaZqbMBT1ppbze0ur77gU4jaMfIMsQyfGMW7NPaNGzb8Fgsg3ulDCYZjFiUGmoFf0r%2Bz02bzlk7kcu6C68%2BbMA69gQCf4lnsPUPhbNaFCyg2ET39pgu9qA9LHtHSr2XSBr3xFI4Bnwg3gvtbupN%2Fi88UOJeI2IgMDhxHU3bf1SvGtW480AnVWsI9%2BzDmS5RvE8qNlgKgIwEEEr0cjUvLw1ogWWvFDufQe7oJy7rs6xCZkQKLCKfQqKjETjQwfRRqJ7dp4wutisQBqfuzxQzzPcl84sLER2QtMDq8iredtk6%2F%2FdybHwzktdyd0TS1lHD3%2FR4DM6XlropkEKiHKi%2FJpXCdZ7h5VX6iV%2FN8Qyfzlj8HwI0dGDqNs4U10HxaTBmrjsAAYrIMaARaxOYwpGEPBatm%2F9rfXRcviOLPo%2FPnIa%2BECH7H%2BnMiCOs4mMHfzBjQhGitHyFCTMqp%2FzNTRe4aM1yGaAiLIfFeefXyhRl%2BD39MMf8wcMGOqUBpuxU%2BSqrmgNICJf%2BZxjM2Ilej%2B9N662sw8UMdjN5Uy%2FhIMqySMfTCsLQ4H%2Fam4EUmgEKPcFEyDvhlrFK11iETUoL8EKQlbizBFLB0f34HINF3TE9eYBwPtxmDXmm5WYo%2FG0Al6olDVF5%2BjoiFqLw2f5ujs8UKSHabZZTJjNU1OGCkmI27VWaRLaFhh6VxZymMk7xgw8aemCoAFQBapSLrZYcb0e0&X-Amz-Signature=0eeddaa5fd85938fe11c8a8401cd50559d912d7f8405e079f366a9e1dbd294d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBVWPET%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BN8QmAM13nFzWu0EY1JHVvN1aODUA1WTIDmh41k%2FEwIgYzQK6DlaemexYQ5d0XoF6%2BQmiKlkAr4A%2BcePgngvwIIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj0PbxqglJ5VokIOCrcAyFLtVBuBZiPcXm6HjLEWf4cBDx8gW8kIr0sNopbT1W%2BIVeFxYIPZql2EyK1Y6%2B144zBT%2Fk74Hn2el6nJmdfsXZ7wR9aZDo6o9tUlZuk1ZI0oPVCLhUzjD8oxMOouUGIBoiEACIDEcC%2BNfeoLBaZqbMBT1ppbze0ur77gU4jaMfIMsQyfGMW7NPaNGzb8Fgsg3ulDCYZjFiUGmoFf0r%2Bz02bzlk7kcu6C68%2BbMA69gQCf4lnsPUPhbNaFCyg2ET39pgu9qA9LHtHSr2XSBr3xFI4Bnwg3gvtbupN%2Fi88UOJeI2IgMDhxHU3bf1SvGtW480AnVWsI9%2BzDmS5RvE8qNlgKgIwEEEr0cjUvLw1ogWWvFDufQe7oJy7rs6xCZkQKLCKfQqKjETjQwfRRqJ7dp4wutisQBqfuzxQzzPcl84sLER2QtMDq8iredtk6%2F%2FdybHwzktdyd0TS1lHD3%2FR4DM6XlropkEKiHKi%2FJpXCdZ7h5VX6iV%2FN8Qyfzlj8HwI0dGDqNs4U10HxaTBmrjsAAYrIMaARaxOYwpGEPBatm%2F9rfXRcviOLPo%2FPnIa%2BECH7H%2BnMiCOs4mMHfzBjQhGitHyFCTMqp%2FzNTRe4aM1yGaAiLIfFeefXyhRl%2BD39MMf8wcMGOqUBpuxU%2BSqrmgNICJf%2BZxjM2Ilej%2B9N662sw8UMdjN5Uy%2FhIMqySMfTCsLQ4H%2Fam4EUmgEKPcFEyDvhlrFK11iETUoL8EKQlbizBFLB0f34HINF3TE9eYBwPtxmDXmm5WYo%2FG0Al6olDVF5%2BjoiFqLw2f5ujs8UKSHabZZTJjNU1OGCkmI27VWaRLaFhh6VxZymMk7xgw8aemCoAFQBapSLrZYcb0e0&X-Amz-Signature=546fd79d0e0ef144b44d4ca7d2c39130b7f86a425c15993afbaeff79c9197251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
