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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=314146502b02287ec5d63e594743f20981690820092a4f4aba8f331d48af7ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=321dbe2241dbef645d4190eea235a5c1cb056c42012760ce2a1744aa51329e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=1bf7c8f7743767f64872ab519450052b355d31aa00d370cc3e06332dc40cfa56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=ababcdbc26fd0f14ff13364ba092cc724dd7a4bba191250eea014911057a045a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=de2dc443b6127680e1273a14a51a02d0f93bbc04631a1117a85de8055bb301b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=8f037870fd952e91eb8ceec5cb9d5f53664bafa498f8fafd7ff287217aeb3862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=6b92c92d5aac16c7acff380b680d9aba27a72c2399053a47b3da7e422c6e6e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
