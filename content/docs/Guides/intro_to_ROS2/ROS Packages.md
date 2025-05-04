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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRR6NA4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYUPBWcjeAxp0IzZqDS5Rza%2FsNBeMxqbXDCfAvz%2F35cAiAn0UjAJel3ckHNQYOpSNKLvRxKxWaNwwvJpCOxIVCAjir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMmUcEAmWko9HPkTlaKtwDsq6Qgdq%2BYtnCL%2FlVmX0Ri%2BHj6nSpvMDykd%2BK4qz0fJxGkw6RcCOMrvW%2FDSlfE1R3Entp2brtMY%2FDHoebRgqh%2B%2FUvTMeUNUdr2%2FDX02R6AcNi5FmzCfcGyMO7oZX49sSoTZdAPFV75IdpGlYuaTSkpLwzcRkz26prpSv4NDj8FaZe3PYBif7CDTIS1LyVZItllZsZ2lItV4hbX49OvYU2wD5Jt3mRfjX%2BsHVvJ3QTM2oOTB5tWMEyFgCmZ3JwtdX4cQWilkANYy49Nqao4Lk%2F%2FQqqH4V%2BD0sd8al8wrjCNP70%2FZTm0Tn0Y7ljMPMTzTC5saMnBqLLUxRraTKMCMf7i6gBkAUwCD4R4ZIlwaINsFgB2%2Bapi9hMNkYJrbaJTzRnByKV1R2Cplt1eF%2BWvPhzIvSTpCrwwKdjW3Nu6owVuzBsg364qhSeKl5ZTZqBDH4nFVDFwVu%2BoLoDIP3ZCkJwEJI81G69mKUFw28Wdq4hvtiv5uwg3LWig1cv01nCoNeUah9DsaT%2F7y6OI4mJXsv3wSz5oFpdhJFf3lXvpUEBHOPEJZ2s9kYvng%2F5aLCRkoHlr9QO%2F5wn%2FnIaYb%2BQ6XtN3rq2xUUjUU7yYoN4WgGzKW5qIOYfD2iN%2FUgyvM4w%2BqzfwAY6pgGk017E85pMnN8YvNWIeAIO%2FlpLuR%2FIT3fBvl4cJh9qVHiQVX3Br62iwOw5xPRx1tBdV9WQkO3vxo0gDLJuF31tbtNFesOZSg1mtbOifVcNLJUo4HRGz3HlNjkTFmynZA3qo%2F7vvl7GZINkiJnCXD%2BQlM28wMMrZ3UFUlW7W5GPg6EZztnz1Ry3ulMhtMikgqjklYDWal6kvKJx7yV7fMUXCK%2F63ytN&X-Amz-Signature=ce3db82e84bcf634700a95ef1b98e8902f40357818cbaba164a204b4bec89761&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRR6NA4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYUPBWcjeAxp0IzZqDS5Rza%2FsNBeMxqbXDCfAvz%2F35cAiAn0UjAJel3ckHNQYOpSNKLvRxKxWaNwwvJpCOxIVCAjir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMmUcEAmWko9HPkTlaKtwDsq6Qgdq%2BYtnCL%2FlVmX0Ri%2BHj6nSpvMDykd%2BK4qz0fJxGkw6RcCOMrvW%2FDSlfE1R3Entp2brtMY%2FDHoebRgqh%2B%2FUvTMeUNUdr2%2FDX02R6AcNi5FmzCfcGyMO7oZX49sSoTZdAPFV75IdpGlYuaTSkpLwzcRkz26prpSv4NDj8FaZe3PYBif7CDTIS1LyVZItllZsZ2lItV4hbX49OvYU2wD5Jt3mRfjX%2BsHVvJ3QTM2oOTB5tWMEyFgCmZ3JwtdX4cQWilkANYy49Nqao4Lk%2F%2FQqqH4V%2BD0sd8al8wrjCNP70%2FZTm0Tn0Y7ljMPMTzTC5saMnBqLLUxRraTKMCMf7i6gBkAUwCD4R4ZIlwaINsFgB2%2Bapi9hMNkYJrbaJTzRnByKV1R2Cplt1eF%2BWvPhzIvSTpCrwwKdjW3Nu6owVuzBsg364qhSeKl5ZTZqBDH4nFVDFwVu%2BoLoDIP3ZCkJwEJI81G69mKUFw28Wdq4hvtiv5uwg3LWig1cv01nCoNeUah9DsaT%2F7y6OI4mJXsv3wSz5oFpdhJFf3lXvpUEBHOPEJZ2s9kYvng%2F5aLCRkoHlr9QO%2F5wn%2FnIaYb%2BQ6XtN3rq2xUUjUU7yYoN4WgGzKW5qIOYfD2iN%2FUgyvM4w%2BqzfwAY6pgGk017E85pMnN8YvNWIeAIO%2FlpLuR%2FIT3fBvl4cJh9qVHiQVX3Br62iwOw5xPRx1tBdV9WQkO3vxo0gDLJuF31tbtNFesOZSg1mtbOifVcNLJUo4HRGz3HlNjkTFmynZA3qo%2F7vvl7GZINkiJnCXD%2BQlM28wMMrZ3UFUlW7W5GPg6EZztnz1Ry3ulMhtMikgqjklYDWal6kvKJx7yV7fMUXCK%2F63ytN&X-Amz-Signature=d4f37052edfc6929dcd56edc8f53f28ab17b0f37c31f7e163b9a120c13f53cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRR6NA4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYUPBWcjeAxp0IzZqDS5Rza%2FsNBeMxqbXDCfAvz%2F35cAiAn0UjAJel3ckHNQYOpSNKLvRxKxWaNwwvJpCOxIVCAjir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMmUcEAmWko9HPkTlaKtwDsq6Qgdq%2BYtnCL%2FlVmX0Ri%2BHj6nSpvMDykd%2BK4qz0fJxGkw6RcCOMrvW%2FDSlfE1R3Entp2brtMY%2FDHoebRgqh%2B%2FUvTMeUNUdr2%2FDX02R6AcNi5FmzCfcGyMO7oZX49sSoTZdAPFV75IdpGlYuaTSkpLwzcRkz26prpSv4NDj8FaZe3PYBif7CDTIS1LyVZItllZsZ2lItV4hbX49OvYU2wD5Jt3mRfjX%2BsHVvJ3QTM2oOTB5tWMEyFgCmZ3JwtdX4cQWilkANYy49Nqao4Lk%2F%2FQqqH4V%2BD0sd8al8wrjCNP70%2FZTm0Tn0Y7ljMPMTzTC5saMnBqLLUxRraTKMCMf7i6gBkAUwCD4R4ZIlwaINsFgB2%2Bapi9hMNkYJrbaJTzRnByKV1R2Cplt1eF%2BWvPhzIvSTpCrwwKdjW3Nu6owVuzBsg364qhSeKl5ZTZqBDH4nFVDFwVu%2BoLoDIP3ZCkJwEJI81G69mKUFw28Wdq4hvtiv5uwg3LWig1cv01nCoNeUah9DsaT%2F7y6OI4mJXsv3wSz5oFpdhJFf3lXvpUEBHOPEJZ2s9kYvng%2F5aLCRkoHlr9QO%2F5wn%2FnIaYb%2BQ6XtN3rq2xUUjUU7yYoN4WgGzKW5qIOYfD2iN%2FUgyvM4w%2BqzfwAY6pgGk017E85pMnN8YvNWIeAIO%2FlpLuR%2FIT3fBvl4cJh9qVHiQVX3Br62iwOw5xPRx1tBdV9WQkO3vxo0gDLJuF31tbtNFesOZSg1mtbOifVcNLJUo4HRGz3HlNjkTFmynZA3qo%2F7vvl7GZINkiJnCXD%2BQlM28wMMrZ3UFUlW7W5GPg6EZztnz1Ry3ulMhtMikgqjklYDWal6kvKJx7yV7fMUXCK%2F63ytN&X-Amz-Signature=3d7cef480140d0c2a40ad354513020c1adee22661e22ff8e5ceda41c1a9228c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRR6NA4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYUPBWcjeAxp0IzZqDS5Rza%2FsNBeMxqbXDCfAvz%2F35cAiAn0UjAJel3ckHNQYOpSNKLvRxKxWaNwwvJpCOxIVCAjir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMmUcEAmWko9HPkTlaKtwDsq6Qgdq%2BYtnCL%2FlVmX0Ri%2BHj6nSpvMDykd%2BK4qz0fJxGkw6RcCOMrvW%2FDSlfE1R3Entp2brtMY%2FDHoebRgqh%2B%2FUvTMeUNUdr2%2FDX02R6AcNi5FmzCfcGyMO7oZX49sSoTZdAPFV75IdpGlYuaTSkpLwzcRkz26prpSv4NDj8FaZe3PYBif7CDTIS1LyVZItllZsZ2lItV4hbX49OvYU2wD5Jt3mRfjX%2BsHVvJ3QTM2oOTB5tWMEyFgCmZ3JwtdX4cQWilkANYy49Nqao4Lk%2F%2FQqqH4V%2BD0sd8al8wrjCNP70%2FZTm0Tn0Y7ljMPMTzTC5saMnBqLLUxRraTKMCMf7i6gBkAUwCD4R4ZIlwaINsFgB2%2Bapi9hMNkYJrbaJTzRnByKV1R2Cplt1eF%2BWvPhzIvSTpCrwwKdjW3Nu6owVuzBsg364qhSeKl5ZTZqBDH4nFVDFwVu%2BoLoDIP3ZCkJwEJI81G69mKUFw28Wdq4hvtiv5uwg3LWig1cv01nCoNeUah9DsaT%2F7y6OI4mJXsv3wSz5oFpdhJFf3lXvpUEBHOPEJZ2s9kYvng%2F5aLCRkoHlr9QO%2F5wn%2FnIaYb%2BQ6XtN3rq2xUUjUU7yYoN4WgGzKW5qIOYfD2iN%2FUgyvM4w%2BqzfwAY6pgGk017E85pMnN8YvNWIeAIO%2FlpLuR%2FIT3fBvl4cJh9qVHiQVX3Br62iwOw5xPRx1tBdV9WQkO3vxo0gDLJuF31tbtNFesOZSg1mtbOifVcNLJUo4HRGz3HlNjkTFmynZA3qo%2F7vvl7GZINkiJnCXD%2BQlM28wMMrZ3UFUlW7W5GPg6EZztnz1Ry3ulMhtMikgqjklYDWal6kvKJx7yV7fMUXCK%2F63ytN&X-Amz-Signature=ed3e011dc4240698ff10eeeab280140b8b9fcb114bbd165d748dad65d655939c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRR6NA4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYUPBWcjeAxp0IzZqDS5Rza%2FsNBeMxqbXDCfAvz%2F35cAiAn0UjAJel3ckHNQYOpSNKLvRxKxWaNwwvJpCOxIVCAjir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMmUcEAmWko9HPkTlaKtwDsq6Qgdq%2BYtnCL%2FlVmX0Ri%2BHj6nSpvMDykd%2BK4qz0fJxGkw6RcCOMrvW%2FDSlfE1R3Entp2brtMY%2FDHoebRgqh%2B%2FUvTMeUNUdr2%2FDX02R6AcNi5FmzCfcGyMO7oZX49sSoTZdAPFV75IdpGlYuaTSkpLwzcRkz26prpSv4NDj8FaZe3PYBif7CDTIS1LyVZItllZsZ2lItV4hbX49OvYU2wD5Jt3mRfjX%2BsHVvJ3QTM2oOTB5tWMEyFgCmZ3JwtdX4cQWilkANYy49Nqao4Lk%2F%2FQqqH4V%2BD0sd8al8wrjCNP70%2FZTm0Tn0Y7ljMPMTzTC5saMnBqLLUxRraTKMCMf7i6gBkAUwCD4R4ZIlwaINsFgB2%2Bapi9hMNkYJrbaJTzRnByKV1R2Cplt1eF%2BWvPhzIvSTpCrwwKdjW3Nu6owVuzBsg364qhSeKl5ZTZqBDH4nFVDFwVu%2BoLoDIP3ZCkJwEJI81G69mKUFw28Wdq4hvtiv5uwg3LWig1cv01nCoNeUah9DsaT%2F7y6OI4mJXsv3wSz5oFpdhJFf3lXvpUEBHOPEJZ2s9kYvng%2F5aLCRkoHlr9QO%2F5wn%2FnIaYb%2BQ6XtN3rq2xUUjUU7yYoN4WgGzKW5qIOYfD2iN%2FUgyvM4w%2BqzfwAY6pgGk017E85pMnN8YvNWIeAIO%2FlpLuR%2FIT3fBvl4cJh9qVHiQVX3Br62iwOw5xPRx1tBdV9WQkO3vxo0gDLJuF31tbtNFesOZSg1mtbOifVcNLJUo4HRGz3HlNjkTFmynZA3qo%2F7vvl7GZINkiJnCXD%2BQlM28wMMrZ3UFUlW7W5GPg6EZztnz1Ry3ulMhtMikgqjklYDWal6kvKJx7yV7fMUXCK%2F63ytN&X-Amz-Signature=854b6e3117fcf56d2b256ba68e5ab6ce44d0e99967154373f7bd01e1c00326ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRR6NA4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYUPBWcjeAxp0IzZqDS5Rza%2FsNBeMxqbXDCfAvz%2F35cAiAn0UjAJel3ckHNQYOpSNKLvRxKxWaNwwvJpCOxIVCAjir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMmUcEAmWko9HPkTlaKtwDsq6Qgdq%2BYtnCL%2FlVmX0Ri%2BHj6nSpvMDykd%2BK4qz0fJxGkw6RcCOMrvW%2FDSlfE1R3Entp2brtMY%2FDHoebRgqh%2B%2FUvTMeUNUdr2%2FDX02R6AcNi5FmzCfcGyMO7oZX49sSoTZdAPFV75IdpGlYuaTSkpLwzcRkz26prpSv4NDj8FaZe3PYBif7CDTIS1LyVZItllZsZ2lItV4hbX49OvYU2wD5Jt3mRfjX%2BsHVvJ3QTM2oOTB5tWMEyFgCmZ3JwtdX4cQWilkANYy49Nqao4Lk%2F%2FQqqH4V%2BD0sd8al8wrjCNP70%2FZTm0Tn0Y7ljMPMTzTC5saMnBqLLUxRraTKMCMf7i6gBkAUwCD4R4ZIlwaINsFgB2%2Bapi9hMNkYJrbaJTzRnByKV1R2Cplt1eF%2BWvPhzIvSTpCrwwKdjW3Nu6owVuzBsg364qhSeKl5ZTZqBDH4nFVDFwVu%2BoLoDIP3ZCkJwEJI81G69mKUFw28Wdq4hvtiv5uwg3LWig1cv01nCoNeUah9DsaT%2F7y6OI4mJXsv3wSz5oFpdhJFf3lXvpUEBHOPEJZ2s9kYvng%2F5aLCRkoHlr9QO%2F5wn%2FnIaYb%2BQ6XtN3rq2xUUjUU7yYoN4WgGzKW5qIOYfD2iN%2FUgyvM4w%2BqzfwAY6pgGk017E85pMnN8YvNWIeAIO%2FlpLuR%2FIT3fBvl4cJh9qVHiQVX3Br62iwOw5xPRx1tBdV9WQkO3vxo0gDLJuF31tbtNFesOZSg1mtbOifVcNLJUo4HRGz3HlNjkTFmynZA3qo%2F7vvl7GZINkiJnCXD%2BQlM28wMMrZ3UFUlW7W5GPg6EZztnz1Ry3ulMhtMikgqjklYDWal6kvKJx7yV7fMUXCK%2F63ytN&X-Amz-Signature=021ed398847d2da360f2a83dd26955988f4a186833499431939854875e3be991&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRR6NA4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYUPBWcjeAxp0IzZqDS5Rza%2FsNBeMxqbXDCfAvz%2F35cAiAn0UjAJel3ckHNQYOpSNKLvRxKxWaNwwvJpCOxIVCAjir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMmUcEAmWko9HPkTlaKtwDsq6Qgdq%2BYtnCL%2FlVmX0Ri%2BHj6nSpvMDykd%2BK4qz0fJxGkw6RcCOMrvW%2FDSlfE1R3Entp2brtMY%2FDHoebRgqh%2B%2FUvTMeUNUdr2%2FDX02R6AcNi5FmzCfcGyMO7oZX49sSoTZdAPFV75IdpGlYuaTSkpLwzcRkz26prpSv4NDj8FaZe3PYBif7CDTIS1LyVZItllZsZ2lItV4hbX49OvYU2wD5Jt3mRfjX%2BsHVvJ3QTM2oOTB5tWMEyFgCmZ3JwtdX4cQWilkANYy49Nqao4Lk%2F%2FQqqH4V%2BD0sd8al8wrjCNP70%2FZTm0Tn0Y7ljMPMTzTC5saMnBqLLUxRraTKMCMf7i6gBkAUwCD4R4ZIlwaINsFgB2%2Bapi9hMNkYJrbaJTzRnByKV1R2Cplt1eF%2BWvPhzIvSTpCrwwKdjW3Nu6owVuzBsg364qhSeKl5ZTZqBDH4nFVDFwVu%2BoLoDIP3ZCkJwEJI81G69mKUFw28Wdq4hvtiv5uwg3LWig1cv01nCoNeUah9DsaT%2F7y6OI4mJXsv3wSz5oFpdhJFf3lXvpUEBHOPEJZ2s9kYvng%2F5aLCRkoHlr9QO%2F5wn%2FnIaYb%2BQ6XtN3rq2xUUjUU7yYoN4WgGzKW5qIOYfD2iN%2FUgyvM4w%2BqzfwAY6pgGk017E85pMnN8YvNWIeAIO%2FlpLuR%2FIT3fBvl4cJh9qVHiQVX3Br62iwOw5xPRx1tBdV9WQkO3vxo0gDLJuF31tbtNFesOZSg1mtbOifVcNLJUo4HRGz3HlNjkTFmynZA3qo%2F7vvl7GZINkiJnCXD%2BQlM28wMMrZ3UFUlW7W5GPg6EZztnz1Ry3ulMhtMikgqjklYDWal6kvKJx7yV7fMUXCK%2F63ytN&X-Amz-Signature=e53f8ef463bc2d3b162722c9bb6c656ff8a5e42d46ad0d0fd2ca14e810076554&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
