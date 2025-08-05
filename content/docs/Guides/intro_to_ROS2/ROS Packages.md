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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6ZD4DZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHRZ9ijUD3Oi%2F0BGOyNrSKqNB5g%2BrxGu3GZR5I2q3gRxAiAgvcWBim2dyqOejD7DKNFp%2BDz1l6AspmsCbUjyAo225Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzZ7uQZfXcjKyO%2F5pKtwDBYR4PptedkU4dV9OtG77yqQZT0LWvOu%2F%2FOnozfICW3PqiTJb3D9Hgnzg35Z7Xwl8ytSGSP8yQ3p9LRZfVtS9xE19rlG8tQi2dCMDu4ZdwHmElZvA1Q7WxwgyxGa3xJV1oHgjE7caR6jwqxRJOz5LekryRG0omJvrSicTZTOuSNuNEDdEHS1wWR6OYgewtiWnCBn5tcnukn67U8eAn9u%2B0d4%2BWFFYL5vgkJUwLF%2FvsQ7Z3q7ur%2FsRa%2FmxttcYnYNlXCgGi4pjIhlac%2Fh922MIgw0piD0BuqmFkSzfhsgInSID6IAl5%2FXazGkY%2FcIOzdXi61HRpDh9ezFPwidVZSSZ7NG4UpjvGHNMTxG3P2zaLyg8Av%2Bm7N%2FLn7ce8L%2FM%2FzIYQPT38ciJed4mllVi6zCZYhWoxvMsU0t99srRjakD3inLK6ovKilc4e4g44aCpspITaDVCC3LUYkQ1lcZRCRTDpIB6VQDNa9F2zCCTNlBC7E%2B1FB%2FQhbnJYRBLgkT3sCmfX4ZM5Ua0DYeW%2FJgo8039dCyEaGAGhT5gVdwmJEm00IRNepFXF%2BzArQfCd8Uz0t1dSHEgOvMs9LOiKa1R8IdLAQpduQAKm0BEnw3f5BcbbXHjloMXaER%2FweTExQwxI3GxAY6pgGYYc2KIhS0IL3SD8%2FDvP8b6T%2FLVwF%2Fa3TkqOSQAQkFEgl1vdNzjFizGr4mp30D%2Fnv2FO2XV7aVB6baMzlMqmfs2ZYbF74EqSABmx1bctTjolOXOIPxGgw84rzl0o6i2zEcjmea5mgew1IhOKu1c2QloqyzBzjreYfd5SZoi%2Bwr18DOavMQ8LZMUbUXQpZAlYC8tb%2FtY8bebr1RT8SG01%2FBX8r01Fg1&X-Amz-Signature=e92936adfe73f4a23bb46da6db9bff23062b8317ea8c655e5673ad37a0e5aa68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6ZD4DZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHRZ9ijUD3Oi%2F0BGOyNrSKqNB5g%2BrxGu3GZR5I2q3gRxAiAgvcWBim2dyqOejD7DKNFp%2BDz1l6AspmsCbUjyAo225Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzZ7uQZfXcjKyO%2F5pKtwDBYR4PptedkU4dV9OtG77yqQZT0LWvOu%2F%2FOnozfICW3PqiTJb3D9Hgnzg35Z7Xwl8ytSGSP8yQ3p9LRZfVtS9xE19rlG8tQi2dCMDu4ZdwHmElZvA1Q7WxwgyxGa3xJV1oHgjE7caR6jwqxRJOz5LekryRG0omJvrSicTZTOuSNuNEDdEHS1wWR6OYgewtiWnCBn5tcnukn67U8eAn9u%2B0d4%2BWFFYL5vgkJUwLF%2FvsQ7Z3q7ur%2FsRa%2FmxttcYnYNlXCgGi4pjIhlac%2Fh922MIgw0piD0BuqmFkSzfhsgInSID6IAl5%2FXazGkY%2FcIOzdXi61HRpDh9ezFPwidVZSSZ7NG4UpjvGHNMTxG3P2zaLyg8Av%2Bm7N%2FLn7ce8L%2FM%2FzIYQPT38ciJed4mllVi6zCZYhWoxvMsU0t99srRjakD3inLK6ovKilc4e4g44aCpspITaDVCC3LUYkQ1lcZRCRTDpIB6VQDNa9F2zCCTNlBC7E%2B1FB%2FQhbnJYRBLgkT3sCmfX4ZM5Ua0DYeW%2FJgo8039dCyEaGAGhT5gVdwmJEm00IRNepFXF%2BzArQfCd8Uz0t1dSHEgOvMs9LOiKa1R8IdLAQpduQAKm0BEnw3f5BcbbXHjloMXaER%2FweTExQwxI3GxAY6pgGYYc2KIhS0IL3SD8%2FDvP8b6T%2FLVwF%2Fa3TkqOSQAQkFEgl1vdNzjFizGr4mp30D%2Fnv2FO2XV7aVB6baMzlMqmfs2ZYbF74EqSABmx1bctTjolOXOIPxGgw84rzl0o6i2zEcjmea5mgew1IhOKu1c2QloqyzBzjreYfd5SZoi%2Bwr18DOavMQ8LZMUbUXQpZAlYC8tb%2FtY8bebr1RT8SG01%2FBX8r01Fg1&X-Amz-Signature=e32c26f2ca382598a10b223f388705ace38e9079c2d6b0e5879e1e335ff35215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6ZD4DZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHRZ9ijUD3Oi%2F0BGOyNrSKqNB5g%2BrxGu3GZR5I2q3gRxAiAgvcWBim2dyqOejD7DKNFp%2BDz1l6AspmsCbUjyAo225Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzZ7uQZfXcjKyO%2F5pKtwDBYR4PptedkU4dV9OtG77yqQZT0LWvOu%2F%2FOnozfICW3PqiTJb3D9Hgnzg35Z7Xwl8ytSGSP8yQ3p9LRZfVtS9xE19rlG8tQi2dCMDu4ZdwHmElZvA1Q7WxwgyxGa3xJV1oHgjE7caR6jwqxRJOz5LekryRG0omJvrSicTZTOuSNuNEDdEHS1wWR6OYgewtiWnCBn5tcnukn67U8eAn9u%2B0d4%2BWFFYL5vgkJUwLF%2FvsQ7Z3q7ur%2FsRa%2FmxttcYnYNlXCgGi4pjIhlac%2Fh922MIgw0piD0BuqmFkSzfhsgInSID6IAl5%2FXazGkY%2FcIOzdXi61HRpDh9ezFPwidVZSSZ7NG4UpjvGHNMTxG3P2zaLyg8Av%2Bm7N%2FLn7ce8L%2FM%2FzIYQPT38ciJed4mllVi6zCZYhWoxvMsU0t99srRjakD3inLK6ovKilc4e4g44aCpspITaDVCC3LUYkQ1lcZRCRTDpIB6VQDNa9F2zCCTNlBC7E%2B1FB%2FQhbnJYRBLgkT3sCmfX4ZM5Ua0DYeW%2FJgo8039dCyEaGAGhT5gVdwmJEm00IRNepFXF%2BzArQfCd8Uz0t1dSHEgOvMs9LOiKa1R8IdLAQpduQAKm0BEnw3f5BcbbXHjloMXaER%2FweTExQwxI3GxAY6pgGYYc2KIhS0IL3SD8%2FDvP8b6T%2FLVwF%2Fa3TkqOSQAQkFEgl1vdNzjFizGr4mp30D%2Fnv2FO2XV7aVB6baMzlMqmfs2ZYbF74EqSABmx1bctTjolOXOIPxGgw84rzl0o6i2zEcjmea5mgew1IhOKu1c2QloqyzBzjreYfd5SZoi%2Bwr18DOavMQ8LZMUbUXQpZAlYC8tb%2FtY8bebr1RT8SG01%2FBX8r01Fg1&X-Amz-Signature=4fe854d406a4463c51d6b88bfa124b7aa63ee0531d8aa71791ca9c3416a73eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6ZD4DZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHRZ9ijUD3Oi%2F0BGOyNrSKqNB5g%2BrxGu3GZR5I2q3gRxAiAgvcWBim2dyqOejD7DKNFp%2BDz1l6AspmsCbUjyAo225Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzZ7uQZfXcjKyO%2F5pKtwDBYR4PptedkU4dV9OtG77yqQZT0LWvOu%2F%2FOnozfICW3PqiTJb3D9Hgnzg35Z7Xwl8ytSGSP8yQ3p9LRZfVtS9xE19rlG8tQi2dCMDu4ZdwHmElZvA1Q7WxwgyxGa3xJV1oHgjE7caR6jwqxRJOz5LekryRG0omJvrSicTZTOuSNuNEDdEHS1wWR6OYgewtiWnCBn5tcnukn67U8eAn9u%2B0d4%2BWFFYL5vgkJUwLF%2FvsQ7Z3q7ur%2FsRa%2FmxttcYnYNlXCgGi4pjIhlac%2Fh922MIgw0piD0BuqmFkSzfhsgInSID6IAl5%2FXazGkY%2FcIOzdXi61HRpDh9ezFPwidVZSSZ7NG4UpjvGHNMTxG3P2zaLyg8Av%2Bm7N%2FLn7ce8L%2FM%2FzIYQPT38ciJed4mllVi6zCZYhWoxvMsU0t99srRjakD3inLK6ovKilc4e4g44aCpspITaDVCC3LUYkQ1lcZRCRTDpIB6VQDNa9F2zCCTNlBC7E%2B1FB%2FQhbnJYRBLgkT3sCmfX4ZM5Ua0DYeW%2FJgo8039dCyEaGAGhT5gVdwmJEm00IRNepFXF%2BzArQfCd8Uz0t1dSHEgOvMs9LOiKa1R8IdLAQpduQAKm0BEnw3f5BcbbXHjloMXaER%2FweTExQwxI3GxAY6pgGYYc2KIhS0IL3SD8%2FDvP8b6T%2FLVwF%2Fa3TkqOSQAQkFEgl1vdNzjFizGr4mp30D%2Fnv2FO2XV7aVB6baMzlMqmfs2ZYbF74EqSABmx1bctTjolOXOIPxGgw84rzl0o6i2zEcjmea5mgew1IhOKu1c2QloqyzBzjreYfd5SZoi%2Bwr18DOavMQ8LZMUbUXQpZAlYC8tb%2FtY8bebr1RT8SG01%2FBX8r01Fg1&X-Amz-Signature=69b0c80e94f5aa3abbca426de7d5fcbcb3aa5c0a7c63c3c5182c0a13a5cb3860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6ZD4DZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHRZ9ijUD3Oi%2F0BGOyNrSKqNB5g%2BrxGu3GZR5I2q3gRxAiAgvcWBim2dyqOejD7DKNFp%2BDz1l6AspmsCbUjyAo225Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzZ7uQZfXcjKyO%2F5pKtwDBYR4PptedkU4dV9OtG77yqQZT0LWvOu%2F%2FOnozfICW3PqiTJb3D9Hgnzg35Z7Xwl8ytSGSP8yQ3p9LRZfVtS9xE19rlG8tQi2dCMDu4ZdwHmElZvA1Q7WxwgyxGa3xJV1oHgjE7caR6jwqxRJOz5LekryRG0omJvrSicTZTOuSNuNEDdEHS1wWR6OYgewtiWnCBn5tcnukn67U8eAn9u%2B0d4%2BWFFYL5vgkJUwLF%2FvsQ7Z3q7ur%2FsRa%2FmxttcYnYNlXCgGi4pjIhlac%2Fh922MIgw0piD0BuqmFkSzfhsgInSID6IAl5%2FXazGkY%2FcIOzdXi61HRpDh9ezFPwidVZSSZ7NG4UpjvGHNMTxG3P2zaLyg8Av%2Bm7N%2FLn7ce8L%2FM%2FzIYQPT38ciJed4mllVi6zCZYhWoxvMsU0t99srRjakD3inLK6ovKilc4e4g44aCpspITaDVCC3LUYkQ1lcZRCRTDpIB6VQDNa9F2zCCTNlBC7E%2B1FB%2FQhbnJYRBLgkT3sCmfX4ZM5Ua0DYeW%2FJgo8039dCyEaGAGhT5gVdwmJEm00IRNepFXF%2BzArQfCd8Uz0t1dSHEgOvMs9LOiKa1R8IdLAQpduQAKm0BEnw3f5BcbbXHjloMXaER%2FweTExQwxI3GxAY6pgGYYc2KIhS0IL3SD8%2FDvP8b6T%2FLVwF%2Fa3TkqOSQAQkFEgl1vdNzjFizGr4mp30D%2Fnv2FO2XV7aVB6baMzlMqmfs2ZYbF74EqSABmx1bctTjolOXOIPxGgw84rzl0o6i2zEcjmea5mgew1IhOKu1c2QloqyzBzjreYfd5SZoi%2Bwr18DOavMQ8LZMUbUXQpZAlYC8tb%2FtY8bebr1RT8SG01%2FBX8r01Fg1&X-Amz-Signature=f2615577f51be94268541d493bdad9b2edc031cfa9690bff5e21ce2c4e054e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6ZD4DZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHRZ9ijUD3Oi%2F0BGOyNrSKqNB5g%2BrxGu3GZR5I2q3gRxAiAgvcWBim2dyqOejD7DKNFp%2BDz1l6AspmsCbUjyAo225Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzZ7uQZfXcjKyO%2F5pKtwDBYR4PptedkU4dV9OtG77yqQZT0LWvOu%2F%2FOnozfICW3PqiTJb3D9Hgnzg35Z7Xwl8ytSGSP8yQ3p9LRZfVtS9xE19rlG8tQi2dCMDu4ZdwHmElZvA1Q7WxwgyxGa3xJV1oHgjE7caR6jwqxRJOz5LekryRG0omJvrSicTZTOuSNuNEDdEHS1wWR6OYgewtiWnCBn5tcnukn67U8eAn9u%2B0d4%2BWFFYL5vgkJUwLF%2FvsQ7Z3q7ur%2FsRa%2FmxttcYnYNlXCgGi4pjIhlac%2Fh922MIgw0piD0BuqmFkSzfhsgInSID6IAl5%2FXazGkY%2FcIOzdXi61HRpDh9ezFPwidVZSSZ7NG4UpjvGHNMTxG3P2zaLyg8Av%2Bm7N%2FLn7ce8L%2FM%2FzIYQPT38ciJed4mllVi6zCZYhWoxvMsU0t99srRjakD3inLK6ovKilc4e4g44aCpspITaDVCC3LUYkQ1lcZRCRTDpIB6VQDNa9F2zCCTNlBC7E%2B1FB%2FQhbnJYRBLgkT3sCmfX4ZM5Ua0DYeW%2FJgo8039dCyEaGAGhT5gVdwmJEm00IRNepFXF%2BzArQfCd8Uz0t1dSHEgOvMs9LOiKa1R8IdLAQpduQAKm0BEnw3f5BcbbXHjloMXaER%2FweTExQwxI3GxAY6pgGYYc2KIhS0IL3SD8%2FDvP8b6T%2FLVwF%2Fa3TkqOSQAQkFEgl1vdNzjFizGr4mp30D%2Fnv2FO2XV7aVB6baMzlMqmfs2ZYbF74EqSABmx1bctTjolOXOIPxGgw84rzl0o6i2zEcjmea5mgew1IhOKu1c2QloqyzBzjreYfd5SZoi%2Bwr18DOavMQ8LZMUbUXQpZAlYC8tb%2FtY8bebr1RT8SG01%2FBX8r01Fg1&X-Amz-Signature=ad970ec4d6d7d4e7b222b8aeab4bcc9edd1470b3a7807ed93f27f2089f6f3810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6ZD4DZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHRZ9ijUD3Oi%2F0BGOyNrSKqNB5g%2BrxGu3GZR5I2q3gRxAiAgvcWBim2dyqOejD7DKNFp%2BDz1l6AspmsCbUjyAo225Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMzZ7uQZfXcjKyO%2F5pKtwDBYR4PptedkU4dV9OtG77yqQZT0LWvOu%2F%2FOnozfICW3PqiTJb3D9Hgnzg35Z7Xwl8ytSGSP8yQ3p9LRZfVtS9xE19rlG8tQi2dCMDu4ZdwHmElZvA1Q7WxwgyxGa3xJV1oHgjE7caR6jwqxRJOz5LekryRG0omJvrSicTZTOuSNuNEDdEHS1wWR6OYgewtiWnCBn5tcnukn67U8eAn9u%2B0d4%2BWFFYL5vgkJUwLF%2FvsQ7Z3q7ur%2FsRa%2FmxttcYnYNlXCgGi4pjIhlac%2Fh922MIgw0piD0BuqmFkSzfhsgInSID6IAl5%2FXazGkY%2FcIOzdXi61HRpDh9ezFPwidVZSSZ7NG4UpjvGHNMTxG3P2zaLyg8Av%2Bm7N%2FLn7ce8L%2FM%2FzIYQPT38ciJed4mllVi6zCZYhWoxvMsU0t99srRjakD3inLK6ovKilc4e4g44aCpspITaDVCC3LUYkQ1lcZRCRTDpIB6VQDNa9F2zCCTNlBC7E%2B1FB%2FQhbnJYRBLgkT3sCmfX4ZM5Ua0DYeW%2FJgo8039dCyEaGAGhT5gVdwmJEm00IRNepFXF%2BzArQfCd8Uz0t1dSHEgOvMs9LOiKa1R8IdLAQpduQAKm0BEnw3f5BcbbXHjloMXaER%2FweTExQwxI3GxAY6pgGYYc2KIhS0IL3SD8%2FDvP8b6T%2FLVwF%2Fa3TkqOSQAQkFEgl1vdNzjFizGr4mp30D%2Fnv2FO2XV7aVB6baMzlMqmfs2ZYbF74EqSABmx1bctTjolOXOIPxGgw84rzl0o6i2zEcjmea5mgew1IhOKu1c2QloqyzBzjreYfd5SZoi%2Bwr18DOavMQ8LZMUbUXQpZAlYC8tb%2FtY8bebr1RT8SG01%2FBX8r01Fg1&X-Amz-Signature=99ff56a336e750b67aa4c11262bbe133d15a7cc811c130d58448eed901fef2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
