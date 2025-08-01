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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T435SI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2FIjWkILl%2FTyatTOCaUasS4%2Bd1Za9cSQZjlJ6fbpADAiEA2%2BfgEgpq%2F4ih%2BTW2ukdwRK7dZlpO5JWu1oteVjKc%2BcYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSwWHPvc%2BTbompMYyrcA2PoHAngdDUNaQESAofvMpclrsodVraoy2Op232kVB7M3W2MbvWM3U76NEzT1RVxIjWVLPlMpKHC7cZ5K28QgOAidAELp8fmxHW4MyYJSRAswlMGtq6AimCYZ5euV7kN11LJgu5BQLPBZPT0iT0kdFZIwED5HXLEdFTRg0h7gXRyF1WoSF5PENymCCoXGo3iGd0Clj7OkmvcA46pI5pM0sTtaP%2BRa%2ByrACdd5%2BagL7vmp5Spn5UCqDaRV8FINEltFuJ6qzrBKYqe%2BB3SXrr1h8OjOvl%2B59zSnnDuHi5NkUMOzOZ%2FjBUj0bZhj8SzKc5ABXu4KoB1k2YzK6cRj8TQC%2Bdr6NbOFi%2FG%2Fkxen%2Bz%2F1u8aHdiAUY%2BBLZjoiG3I%2Fzg2h8XIJ9U%2FMcSAbL4q4zAFo%2B%2BT9hSGcO7qAkZaU8UhTtFUnARu9g3SqEKf%2FCPmApiSytAtNh%2BaRcw33vthM18T8kpvFGbF6g0G0jz253SlV5QfipAF2DtN39H87p95bg%2B%2B0IMz09hE8rCMaffh1uTpWLyzyp2DeWff8RE49b4zrGcjZvjAudWI2HBtqNJ7dEBJo0madKqEq0cSqPixyUxsXEGGZdkftfj4gPMkjdIZoEs16PKHtNkXcT0Mf6%2BYMMq2ssQGOqUBhOSiXN1vtMYkYefpOqYHgl5xUssnM4Mr3nR6LyBt3CDFIzPRMFrAJctqAy6ENt0JmygcEw11VLoiVaT1qlsDR0AkfaKY%2Ftoyxc%2BaKEyqtSTcKCCY%2FVv2Bsvudp15I6e0pOV4yAeWBjnPNEY8QJ1tBHdZf4nbT0gf1mm9lWKrV3jTPFH9RMo7%2FRJV45gtlg%2FS5EYaTpEBsgqHRkEFtKIfZX9BSj4f&X-Amz-Signature=89b65351acc55817a3f5e26e49acd81db504283a09a7ee153344f28c50723459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T435SI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2FIjWkILl%2FTyatTOCaUasS4%2Bd1Za9cSQZjlJ6fbpADAiEA2%2BfgEgpq%2F4ih%2BTW2ukdwRK7dZlpO5JWu1oteVjKc%2BcYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSwWHPvc%2BTbompMYyrcA2PoHAngdDUNaQESAofvMpclrsodVraoy2Op232kVB7M3W2MbvWM3U76NEzT1RVxIjWVLPlMpKHC7cZ5K28QgOAidAELp8fmxHW4MyYJSRAswlMGtq6AimCYZ5euV7kN11LJgu5BQLPBZPT0iT0kdFZIwED5HXLEdFTRg0h7gXRyF1WoSF5PENymCCoXGo3iGd0Clj7OkmvcA46pI5pM0sTtaP%2BRa%2ByrACdd5%2BagL7vmp5Spn5UCqDaRV8FINEltFuJ6qzrBKYqe%2BB3SXrr1h8OjOvl%2B59zSnnDuHi5NkUMOzOZ%2FjBUj0bZhj8SzKc5ABXu4KoB1k2YzK6cRj8TQC%2Bdr6NbOFi%2FG%2Fkxen%2Bz%2F1u8aHdiAUY%2BBLZjoiG3I%2Fzg2h8XIJ9U%2FMcSAbL4q4zAFo%2B%2BT9hSGcO7qAkZaU8UhTtFUnARu9g3SqEKf%2FCPmApiSytAtNh%2BaRcw33vthM18T8kpvFGbF6g0G0jz253SlV5QfipAF2DtN39H87p95bg%2B%2B0IMz09hE8rCMaffh1uTpWLyzyp2DeWff8RE49b4zrGcjZvjAudWI2HBtqNJ7dEBJo0madKqEq0cSqPixyUxsXEGGZdkftfj4gPMkjdIZoEs16PKHtNkXcT0Mf6%2BYMMq2ssQGOqUBhOSiXN1vtMYkYefpOqYHgl5xUssnM4Mr3nR6LyBt3CDFIzPRMFrAJctqAy6ENt0JmygcEw11VLoiVaT1qlsDR0AkfaKY%2Ftoyxc%2BaKEyqtSTcKCCY%2FVv2Bsvudp15I6e0pOV4yAeWBjnPNEY8QJ1tBHdZf4nbT0gf1mm9lWKrV3jTPFH9RMo7%2FRJV45gtlg%2FS5EYaTpEBsgqHRkEFtKIfZX9BSj4f&X-Amz-Signature=85b83d40c88e89f0285518add7af7ecff4d02dfbebcef64e74b15a9a4ad197c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T435SI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2FIjWkILl%2FTyatTOCaUasS4%2Bd1Za9cSQZjlJ6fbpADAiEA2%2BfgEgpq%2F4ih%2BTW2ukdwRK7dZlpO5JWu1oteVjKc%2BcYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSwWHPvc%2BTbompMYyrcA2PoHAngdDUNaQESAofvMpclrsodVraoy2Op232kVB7M3W2MbvWM3U76NEzT1RVxIjWVLPlMpKHC7cZ5K28QgOAidAELp8fmxHW4MyYJSRAswlMGtq6AimCYZ5euV7kN11LJgu5BQLPBZPT0iT0kdFZIwED5HXLEdFTRg0h7gXRyF1WoSF5PENymCCoXGo3iGd0Clj7OkmvcA46pI5pM0sTtaP%2BRa%2ByrACdd5%2BagL7vmp5Spn5UCqDaRV8FINEltFuJ6qzrBKYqe%2BB3SXrr1h8OjOvl%2B59zSnnDuHi5NkUMOzOZ%2FjBUj0bZhj8SzKc5ABXu4KoB1k2YzK6cRj8TQC%2Bdr6NbOFi%2FG%2Fkxen%2Bz%2F1u8aHdiAUY%2BBLZjoiG3I%2Fzg2h8XIJ9U%2FMcSAbL4q4zAFo%2B%2BT9hSGcO7qAkZaU8UhTtFUnARu9g3SqEKf%2FCPmApiSytAtNh%2BaRcw33vthM18T8kpvFGbF6g0G0jz253SlV5QfipAF2DtN39H87p95bg%2B%2B0IMz09hE8rCMaffh1uTpWLyzyp2DeWff8RE49b4zrGcjZvjAudWI2HBtqNJ7dEBJo0madKqEq0cSqPixyUxsXEGGZdkftfj4gPMkjdIZoEs16PKHtNkXcT0Mf6%2BYMMq2ssQGOqUBhOSiXN1vtMYkYefpOqYHgl5xUssnM4Mr3nR6LyBt3CDFIzPRMFrAJctqAy6ENt0JmygcEw11VLoiVaT1qlsDR0AkfaKY%2Ftoyxc%2BaKEyqtSTcKCCY%2FVv2Bsvudp15I6e0pOV4yAeWBjnPNEY8QJ1tBHdZf4nbT0gf1mm9lWKrV3jTPFH9RMo7%2FRJV45gtlg%2FS5EYaTpEBsgqHRkEFtKIfZX9BSj4f&X-Amz-Signature=12a10d015a664dda4da7c1b2b632e5aa3fcc4c403826f88216365e1173c108ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T435SI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2FIjWkILl%2FTyatTOCaUasS4%2Bd1Za9cSQZjlJ6fbpADAiEA2%2BfgEgpq%2F4ih%2BTW2ukdwRK7dZlpO5JWu1oteVjKc%2BcYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSwWHPvc%2BTbompMYyrcA2PoHAngdDUNaQESAofvMpclrsodVraoy2Op232kVB7M3W2MbvWM3U76NEzT1RVxIjWVLPlMpKHC7cZ5K28QgOAidAELp8fmxHW4MyYJSRAswlMGtq6AimCYZ5euV7kN11LJgu5BQLPBZPT0iT0kdFZIwED5HXLEdFTRg0h7gXRyF1WoSF5PENymCCoXGo3iGd0Clj7OkmvcA46pI5pM0sTtaP%2BRa%2ByrACdd5%2BagL7vmp5Spn5UCqDaRV8FINEltFuJ6qzrBKYqe%2BB3SXrr1h8OjOvl%2B59zSnnDuHi5NkUMOzOZ%2FjBUj0bZhj8SzKc5ABXu4KoB1k2YzK6cRj8TQC%2Bdr6NbOFi%2FG%2Fkxen%2Bz%2F1u8aHdiAUY%2BBLZjoiG3I%2Fzg2h8XIJ9U%2FMcSAbL4q4zAFo%2B%2BT9hSGcO7qAkZaU8UhTtFUnARu9g3SqEKf%2FCPmApiSytAtNh%2BaRcw33vthM18T8kpvFGbF6g0G0jz253SlV5QfipAF2DtN39H87p95bg%2B%2B0IMz09hE8rCMaffh1uTpWLyzyp2DeWff8RE49b4zrGcjZvjAudWI2HBtqNJ7dEBJo0madKqEq0cSqPixyUxsXEGGZdkftfj4gPMkjdIZoEs16PKHtNkXcT0Mf6%2BYMMq2ssQGOqUBhOSiXN1vtMYkYefpOqYHgl5xUssnM4Mr3nR6LyBt3CDFIzPRMFrAJctqAy6ENt0JmygcEw11VLoiVaT1qlsDR0AkfaKY%2Ftoyxc%2BaKEyqtSTcKCCY%2FVv2Bsvudp15I6e0pOV4yAeWBjnPNEY8QJ1tBHdZf4nbT0gf1mm9lWKrV3jTPFH9RMo7%2FRJV45gtlg%2FS5EYaTpEBsgqHRkEFtKIfZX9BSj4f&X-Amz-Signature=be5ad9cb573bf3f9bf71a9fa7c73d3e328359c69a94cfbf0a691c2dbc6526d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T435SI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2FIjWkILl%2FTyatTOCaUasS4%2Bd1Za9cSQZjlJ6fbpADAiEA2%2BfgEgpq%2F4ih%2BTW2ukdwRK7dZlpO5JWu1oteVjKc%2BcYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSwWHPvc%2BTbompMYyrcA2PoHAngdDUNaQESAofvMpclrsodVraoy2Op232kVB7M3W2MbvWM3U76NEzT1RVxIjWVLPlMpKHC7cZ5K28QgOAidAELp8fmxHW4MyYJSRAswlMGtq6AimCYZ5euV7kN11LJgu5BQLPBZPT0iT0kdFZIwED5HXLEdFTRg0h7gXRyF1WoSF5PENymCCoXGo3iGd0Clj7OkmvcA46pI5pM0sTtaP%2BRa%2ByrACdd5%2BagL7vmp5Spn5UCqDaRV8FINEltFuJ6qzrBKYqe%2BB3SXrr1h8OjOvl%2B59zSnnDuHi5NkUMOzOZ%2FjBUj0bZhj8SzKc5ABXu4KoB1k2YzK6cRj8TQC%2Bdr6NbOFi%2FG%2Fkxen%2Bz%2F1u8aHdiAUY%2BBLZjoiG3I%2Fzg2h8XIJ9U%2FMcSAbL4q4zAFo%2B%2BT9hSGcO7qAkZaU8UhTtFUnARu9g3SqEKf%2FCPmApiSytAtNh%2BaRcw33vthM18T8kpvFGbF6g0G0jz253SlV5QfipAF2DtN39H87p95bg%2B%2B0IMz09hE8rCMaffh1uTpWLyzyp2DeWff8RE49b4zrGcjZvjAudWI2HBtqNJ7dEBJo0madKqEq0cSqPixyUxsXEGGZdkftfj4gPMkjdIZoEs16PKHtNkXcT0Mf6%2BYMMq2ssQGOqUBhOSiXN1vtMYkYefpOqYHgl5xUssnM4Mr3nR6LyBt3CDFIzPRMFrAJctqAy6ENt0JmygcEw11VLoiVaT1qlsDR0AkfaKY%2Ftoyxc%2BaKEyqtSTcKCCY%2FVv2Bsvudp15I6e0pOV4yAeWBjnPNEY8QJ1tBHdZf4nbT0gf1mm9lWKrV3jTPFH9RMo7%2FRJV45gtlg%2FS5EYaTpEBsgqHRkEFtKIfZX9BSj4f&X-Amz-Signature=acf3404dd4803369f12a5625cc0e7c97d348f9420b8e65d69cceb493caabf8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T435SI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2FIjWkILl%2FTyatTOCaUasS4%2Bd1Za9cSQZjlJ6fbpADAiEA2%2BfgEgpq%2F4ih%2BTW2ukdwRK7dZlpO5JWu1oteVjKc%2BcYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSwWHPvc%2BTbompMYyrcA2PoHAngdDUNaQESAofvMpclrsodVraoy2Op232kVB7M3W2MbvWM3U76NEzT1RVxIjWVLPlMpKHC7cZ5K28QgOAidAELp8fmxHW4MyYJSRAswlMGtq6AimCYZ5euV7kN11LJgu5BQLPBZPT0iT0kdFZIwED5HXLEdFTRg0h7gXRyF1WoSF5PENymCCoXGo3iGd0Clj7OkmvcA46pI5pM0sTtaP%2BRa%2ByrACdd5%2BagL7vmp5Spn5UCqDaRV8FINEltFuJ6qzrBKYqe%2BB3SXrr1h8OjOvl%2B59zSnnDuHi5NkUMOzOZ%2FjBUj0bZhj8SzKc5ABXu4KoB1k2YzK6cRj8TQC%2Bdr6NbOFi%2FG%2Fkxen%2Bz%2F1u8aHdiAUY%2BBLZjoiG3I%2Fzg2h8XIJ9U%2FMcSAbL4q4zAFo%2B%2BT9hSGcO7qAkZaU8UhTtFUnARu9g3SqEKf%2FCPmApiSytAtNh%2BaRcw33vthM18T8kpvFGbF6g0G0jz253SlV5QfipAF2DtN39H87p95bg%2B%2B0IMz09hE8rCMaffh1uTpWLyzyp2DeWff8RE49b4zrGcjZvjAudWI2HBtqNJ7dEBJo0madKqEq0cSqPixyUxsXEGGZdkftfj4gPMkjdIZoEs16PKHtNkXcT0Mf6%2BYMMq2ssQGOqUBhOSiXN1vtMYkYefpOqYHgl5xUssnM4Mr3nR6LyBt3CDFIzPRMFrAJctqAy6ENt0JmygcEw11VLoiVaT1qlsDR0AkfaKY%2Ftoyxc%2BaKEyqtSTcKCCY%2FVv2Bsvudp15I6e0pOV4yAeWBjnPNEY8QJ1tBHdZf4nbT0gf1mm9lWKrV3jTPFH9RMo7%2FRJV45gtlg%2FS5EYaTpEBsgqHRkEFtKIfZX9BSj4f&X-Amz-Signature=f7bb9be7c9fecef33227e72875210587aab36fb39fc6d4af599e27135bf542e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T435SI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR%2FIjWkILl%2FTyatTOCaUasS4%2Bd1Za9cSQZjlJ6fbpADAiEA2%2BfgEgpq%2F4ih%2BTW2ukdwRK7dZlpO5JWu1oteVjKc%2BcYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSwWHPvc%2BTbompMYyrcA2PoHAngdDUNaQESAofvMpclrsodVraoy2Op232kVB7M3W2MbvWM3U76NEzT1RVxIjWVLPlMpKHC7cZ5K28QgOAidAELp8fmxHW4MyYJSRAswlMGtq6AimCYZ5euV7kN11LJgu5BQLPBZPT0iT0kdFZIwED5HXLEdFTRg0h7gXRyF1WoSF5PENymCCoXGo3iGd0Clj7OkmvcA46pI5pM0sTtaP%2BRa%2ByrACdd5%2BagL7vmp5Spn5UCqDaRV8FINEltFuJ6qzrBKYqe%2BB3SXrr1h8OjOvl%2B59zSnnDuHi5NkUMOzOZ%2FjBUj0bZhj8SzKc5ABXu4KoB1k2YzK6cRj8TQC%2Bdr6NbOFi%2FG%2Fkxen%2Bz%2F1u8aHdiAUY%2BBLZjoiG3I%2Fzg2h8XIJ9U%2FMcSAbL4q4zAFo%2B%2BT9hSGcO7qAkZaU8UhTtFUnARu9g3SqEKf%2FCPmApiSytAtNh%2BaRcw33vthM18T8kpvFGbF6g0G0jz253SlV5QfipAF2DtN39H87p95bg%2B%2B0IMz09hE8rCMaffh1uTpWLyzyp2DeWff8RE49b4zrGcjZvjAudWI2HBtqNJ7dEBJo0madKqEq0cSqPixyUxsXEGGZdkftfj4gPMkjdIZoEs16PKHtNkXcT0Mf6%2BYMMq2ssQGOqUBhOSiXN1vtMYkYefpOqYHgl5xUssnM4Mr3nR6LyBt3CDFIzPRMFrAJctqAy6ENt0JmygcEw11VLoiVaT1qlsDR0AkfaKY%2Ftoyxc%2BaKEyqtSTcKCCY%2FVv2Bsvudp15I6e0pOV4yAeWBjnPNEY8QJ1tBHdZf4nbT0gf1mm9lWKrV3jTPFH9RMo7%2FRJV45gtlg%2FS5EYaTpEBsgqHRkEFtKIfZX9BSj4f&X-Amz-Signature=fc239043095ce46b429a103eac8ab25f5fef1d0e9dbbecd112ce0225e1ab4b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
