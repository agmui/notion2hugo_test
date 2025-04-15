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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGLOKAC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7sZL2PvcbjhlAOrV2TsH%2BQbid%2BqxbsPVxiRUPHV9gIgfSGSBbm0c00Nn3xyizmpl1jsPihXfjMEP4Bu7XB4sIIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIwSGy5Gg%2BN2dCoudyrcA5bbI17E14Z7O4oDNdiBy7tJ4eGoF4n1xEnkdawBl7EhPrfYYV5DboZYmfYQxrWaneo9mRz%2FODIKz4Wm96lYC6087A63J8r1OtTWS7pvbHL5Xwa48%2Bv4qArS%2FYxuo1GWHzhKOWFfCC%2B%2BHPJFpgoOHX7aHhAH8e0i313Rbgon%2Fp3b3Qtf2GcA5A%2FHogRtdLM8HMRhSqvf5XgYog1OMmYD%2BYYvYxq9h9pkCDlr1BLzk%2BKt4Bc%2FvL29tFvj9EGA6eJhkC8YpGTMFJH4Th3re2mi8OTMmYKjnSliK6KVXJcXatTVmImxbHtar33umXVbXNZ2uvwaElyFD7M5GszagiUOSObdEG1RqzxukOr%2BhgXXbyqsHNaIqf3JQZtoupYN%2FNBc5dBNGx6Bx9w8cagm1qg0A6xKgE59hxoWBOQr%2FwZv1135qpb9LiRAzY4iOfZcDj16oL8G%2BoblKqD2w%2FzjHrRCZPi21%2FnekXh1Gi%2F968QNi9eJRSSjdDXOpQFSXWrfOW3LHsADk4KmYnljE4u7GgwFbzaTWL%2Bf78HyGtDT5bRTXxuUqBXxKcMjHgofoEnST%2F3LCJspMh3NOknmUcV6vVVIgrccO9dufKRAK%2FM%2BhLU%2FqudBD5c9aan8Oh4hpE0BMPKk%2Bb8GOqUBVMaRRE6CX%2BFt2yG0ZnP2lA8QPFVP8ucFw0UY1c3wE7t6hDEEmmE7Q%2Bt%2Br17mjPyHa%2FIxWdD4KOIJDyVlB3mKgXM%2F349ykn15UK1Od%2BXho2JQ1YtMxsu9HitO9SY74rLyomPr37bwFtCBIkYu5FxgJsqgnQnuqgBr43E1bk6faqP7xdfW1sI6F9s4qsOlJIc74w%2FGFE594lDBBKg3%2BZYp8XZzftgk&X-Amz-Signature=2b83335f0171e375ebec8c6fd1d974843eabfa186f32578848711232d633ede9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGLOKAC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7sZL2PvcbjhlAOrV2TsH%2BQbid%2BqxbsPVxiRUPHV9gIgfSGSBbm0c00Nn3xyizmpl1jsPihXfjMEP4Bu7XB4sIIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIwSGy5Gg%2BN2dCoudyrcA5bbI17E14Z7O4oDNdiBy7tJ4eGoF4n1xEnkdawBl7EhPrfYYV5DboZYmfYQxrWaneo9mRz%2FODIKz4Wm96lYC6087A63J8r1OtTWS7pvbHL5Xwa48%2Bv4qArS%2FYxuo1GWHzhKOWFfCC%2B%2BHPJFpgoOHX7aHhAH8e0i313Rbgon%2Fp3b3Qtf2GcA5A%2FHogRtdLM8HMRhSqvf5XgYog1OMmYD%2BYYvYxq9h9pkCDlr1BLzk%2BKt4Bc%2FvL29tFvj9EGA6eJhkC8YpGTMFJH4Th3re2mi8OTMmYKjnSliK6KVXJcXatTVmImxbHtar33umXVbXNZ2uvwaElyFD7M5GszagiUOSObdEG1RqzxukOr%2BhgXXbyqsHNaIqf3JQZtoupYN%2FNBc5dBNGx6Bx9w8cagm1qg0A6xKgE59hxoWBOQr%2FwZv1135qpb9LiRAzY4iOfZcDj16oL8G%2BoblKqD2w%2FzjHrRCZPi21%2FnekXh1Gi%2F968QNi9eJRSSjdDXOpQFSXWrfOW3LHsADk4KmYnljE4u7GgwFbzaTWL%2Bf78HyGtDT5bRTXxuUqBXxKcMjHgofoEnST%2F3LCJspMh3NOknmUcV6vVVIgrccO9dufKRAK%2FM%2BhLU%2FqudBD5c9aan8Oh4hpE0BMPKk%2Bb8GOqUBVMaRRE6CX%2BFt2yG0ZnP2lA8QPFVP8ucFw0UY1c3wE7t6hDEEmmE7Q%2Bt%2Br17mjPyHa%2FIxWdD4KOIJDyVlB3mKgXM%2F349ykn15UK1Od%2BXho2JQ1YtMxsu9HitO9SY74rLyomPr37bwFtCBIkYu5FxgJsqgnQnuqgBr43E1bk6faqP7xdfW1sI6F9s4qsOlJIc74w%2FGFE594lDBBKg3%2BZYp8XZzftgk&X-Amz-Signature=90d85fdefa7a7c3d0dcf746c3b884f806937043a303aa66e239dc12047297d37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGLOKAC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7sZL2PvcbjhlAOrV2TsH%2BQbid%2BqxbsPVxiRUPHV9gIgfSGSBbm0c00Nn3xyizmpl1jsPihXfjMEP4Bu7XB4sIIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIwSGy5Gg%2BN2dCoudyrcA5bbI17E14Z7O4oDNdiBy7tJ4eGoF4n1xEnkdawBl7EhPrfYYV5DboZYmfYQxrWaneo9mRz%2FODIKz4Wm96lYC6087A63J8r1OtTWS7pvbHL5Xwa48%2Bv4qArS%2FYxuo1GWHzhKOWFfCC%2B%2BHPJFpgoOHX7aHhAH8e0i313Rbgon%2Fp3b3Qtf2GcA5A%2FHogRtdLM8HMRhSqvf5XgYog1OMmYD%2BYYvYxq9h9pkCDlr1BLzk%2BKt4Bc%2FvL29tFvj9EGA6eJhkC8YpGTMFJH4Th3re2mi8OTMmYKjnSliK6KVXJcXatTVmImxbHtar33umXVbXNZ2uvwaElyFD7M5GszagiUOSObdEG1RqzxukOr%2BhgXXbyqsHNaIqf3JQZtoupYN%2FNBc5dBNGx6Bx9w8cagm1qg0A6xKgE59hxoWBOQr%2FwZv1135qpb9LiRAzY4iOfZcDj16oL8G%2BoblKqD2w%2FzjHrRCZPi21%2FnekXh1Gi%2F968QNi9eJRSSjdDXOpQFSXWrfOW3LHsADk4KmYnljE4u7GgwFbzaTWL%2Bf78HyGtDT5bRTXxuUqBXxKcMjHgofoEnST%2F3LCJspMh3NOknmUcV6vVVIgrccO9dufKRAK%2FM%2BhLU%2FqudBD5c9aan8Oh4hpE0BMPKk%2Bb8GOqUBVMaRRE6CX%2BFt2yG0ZnP2lA8QPFVP8ucFw0UY1c3wE7t6hDEEmmE7Q%2Bt%2Br17mjPyHa%2FIxWdD4KOIJDyVlB3mKgXM%2F349ykn15UK1Od%2BXho2JQ1YtMxsu9HitO9SY74rLyomPr37bwFtCBIkYu5FxgJsqgnQnuqgBr43E1bk6faqP7xdfW1sI6F9s4qsOlJIc74w%2FGFE594lDBBKg3%2BZYp8XZzftgk&X-Amz-Signature=deaa5796d02ed782c8ed30fb75f5b16ea8483bdf965a9f3654226abc6164f2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGLOKAC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7sZL2PvcbjhlAOrV2TsH%2BQbid%2BqxbsPVxiRUPHV9gIgfSGSBbm0c00Nn3xyizmpl1jsPihXfjMEP4Bu7XB4sIIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIwSGy5Gg%2BN2dCoudyrcA5bbI17E14Z7O4oDNdiBy7tJ4eGoF4n1xEnkdawBl7EhPrfYYV5DboZYmfYQxrWaneo9mRz%2FODIKz4Wm96lYC6087A63J8r1OtTWS7pvbHL5Xwa48%2Bv4qArS%2FYxuo1GWHzhKOWFfCC%2B%2BHPJFpgoOHX7aHhAH8e0i313Rbgon%2Fp3b3Qtf2GcA5A%2FHogRtdLM8HMRhSqvf5XgYog1OMmYD%2BYYvYxq9h9pkCDlr1BLzk%2BKt4Bc%2FvL29tFvj9EGA6eJhkC8YpGTMFJH4Th3re2mi8OTMmYKjnSliK6KVXJcXatTVmImxbHtar33umXVbXNZ2uvwaElyFD7M5GszagiUOSObdEG1RqzxukOr%2BhgXXbyqsHNaIqf3JQZtoupYN%2FNBc5dBNGx6Bx9w8cagm1qg0A6xKgE59hxoWBOQr%2FwZv1135qpb9LiRAzY4iOfZcDj16oL8G%2BoblKqD2w%2FzjHrRCZPi21%2FnekXh1Gi%2F968QNi9eJRSSjdDXOpQFSXWrfOW3LHsADk4KmYnljE4u7GgwFbzaTWL%2Bf78HyGtDT5bRTXxuUqBXxKcMjHgofoEnST%2F3LCJspMh3NOknmUcV6vVVIgrccO9dufKRAK%2FM%2BhLU%2FqudBD5c9aan8Oh4hpE0BMPKk%2Bb8GOqUBVMaRRE6CX%2BFt2yG0ZnP2lA8QPFVP8ucFw0UY1c3wE7t6hDEEmmE7Q%2Bt%2Br17mjPyHa%2FIxWdD4KOIJDyVlB3mKgXM%2F349ykn15UK1Od%2BXho2JQ1YtMxsu9HitO9SY74rLyomPr37bwFtCBIkYu5FxgJsqgnQnuqgBr43E1bk6faqP7xdfW1sI6F9s4qsOlJIc74w%2FGFE594lDBBKg3%2BZYp8XZzftgk&X-Amz-Signature=fad6926b727d0a5bff831ccd6e6759088e142ec5ec582b5ef9358f2a537a6ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGLOKAC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7sZL2PvcbjhlAOrV2TsH%2BQbid%2BqxbsPVxiRUPHV9gIgfSGSBbm0c00Nn3xyizmpl1jsPihXfjMEP4Bu7XB4sIIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIwSGy5Gg%2BN2dCoudyrcA5bbI17E14Z7O4oDNdiBy7tJ4eGoF4n1xEnkdawBl7EhPrfYYV5DboZYmfYQxrWaneo9mRz%2FODIKz4Wm96lYC6087A63J8r1OtTWS7pvbHL5Xwa48%2Bv4qArS%2FYxuo1GWHzhKOWFfCC%2B%2BHPJFpgoOHX7aHhAH8e0i313Rbgon%2Fp3b3Qtf2GcA5A%2FHogRtdLM8HMRhSqvf5XgYog1OMmYD%2BYYvYxq9h9pkCDlr1BLzk%2BKt4Bc%2FvL29tFvj9EGA6eJhkC8YpGTMFJH4Th3re2mi8OTMmYKjnSliK6KVXJcXatTVmImxbHtar33umXVbXNZ2uvwaElyFD7M5GszagiUOSObdEG1RqzxukOr%2BhgXXbyqsHNaIqf3JQZtoupYN%2FNBc5dBNGx6Bx9w8cagm1qg0A6xKgE59hxoWBOQr%2FwZv1135qpb9LiRAzY4iOfZcDj16oL8G%2BoblKqD2w%2FzjHrRCZPi21%2FnekXh1Gi%2F968QNi9eJRSSjdDXOpQFSXWrfOW3LHsADk4KmYnljE4u7GgwFbzaTWL%2Bf78HyGtDT5bRTXxuUqBXxKcMjHgofoEnST%2F3LCJspMh3NOknmUcV6vVVIgrccO9dufKRAK%2FM%2BhLU%2FqudBD5c9aan8Oh4hpE0BMPKk%2Bb8GOqUBVMaRRE6CX%2BFt2yG0ZnP2lA8QPFVP8ucFw0UY1c3wE7t6hDEEmmE7Q%2Bt%2Br17mjPyHa%2FIxWdD4KOIJDyVlB3mKgXM%2F349ykn15UK1Od%2BXho2JQ1YtMxsu9HitO9SY74rLyomPr37bwFtCBIkYu5FxgJsqgnQnuqgBr43E1bk6faqP7xdfW1sI6F9s4qsOlJIc74w%2FGFE594lDBBKg3%2BZYp8XZzftgk&X-Amz-Signature=ace390506bcf0ffebd6d8eaab2ae992ed685ed8a179e8f6a29940a31b0a3fa11&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGLOKAC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7sZL2PvcbjhlAOrV2TsH%2BQbid%2BqxbsPVxiRUPHV9gIgfSGSBbm0c00Nn3xyizmpl1jsPihXfjMEP4Bu7XB4sIIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIwSGy5Gg%2BN2dCoudyrcA5bbI17E14Z7O4oDNdiBy7tJ4eGoF4n1xEnkdawBl7EhPrfYYV5DboZYmfYQxrWaneo9mRz%2FODIKz4Wm96lYC6087A63J8r1OtTWS7pvbHL5Xwa48%2Bv4qArS%2FYxuo1GWHzhKOWFfCC%2B%2BHPJFpgoOHX7aHhAH8e0i313Rbgon%2Fp3b3Qtf2GcA5A%2FHogRtdLM8HMRhSqvf5XgYog1OMmYD%2BYYvYxq9h9pkCDlr1BLzk%2BKt4Bc%2FvL29tFvj9EGA6eJhkC8YpGTMFJH4Th3re2mi8OTMmYKjnSliK6KVXJcXatTVmImxbHtar33umXVbXNZ2uvwaElyFD7M5GszagiUOSObdEG1RqzxukOr%2BhgXXbyqsHNaIqf3JQZtoupYN%2FNBc5dBNGx6Bx9w8cagm1qg0A6xKgE59hxoWBOQr%2FwZv1135qpb9LiRAzY4iOfZcDj16oL8G%2BoblKqD2w%2FzjHrRCZPi21%2FnekXh1Gi%2F968QNi9eJRSSjdDXOpQFSXWrfOW3LHsADk4KmYnljE4u7GgwFbzaTWL%2Bf78HyGtDT5bRTXxuUqBXxKcMjHgofoEnST%2F3LCJspMh3NOknmUcV6vVVIgrccO9dufKRAK%2FM%2BhLU%2FqudBD5c9aan8Oh4hpE0BMPKk%2Bb8GOqUBVMaRRE6CX%2BFt2yG0ZnP2lA8QPFVP8ucFw0UY1c3wE7t6hDEEmmE7Q%2Bt%2Br17mjPyHa%2FIxWdD4KOIJDyVlB3mKgXM%2F349ykn15UK1Od%2BXho2JQ1YtMxsu9HitO9SY74rLyomPr37bwFtCBIkYu5FxgJsqgnQnuqgBr43E1bk6faqP7xdfW1sI6F9s4qsOlJIc74w%2FGFE594lDBBKg3%2BZYp8XZzftgk&X-Amz-Signature=d28fd854cbeba03a177b9301603df07c8067e78292c8e2a69d569a221eee726a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGLOKAC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7sZL2PvcbjhlAOrV2TsH%2BQbid%2BqxbsPVxiRUPHV9gIgfSGSBbm0c00Nn3xyizmpl1jsPihXfjMEP4Bu7XB4sIIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIwSGy5Gg%2BN2dCoudyrcA5bbI17E14Z7O4oDNdiBy7tJ4eGoF4n1xEnkdawBl7EhPrfYYV5DboZYmfYQxrWaneo9mRz%2FODIKz4Wm96lYC6087A63J8r1OtTWS7pvbHL5Xwa48%2Bv4qArS%2FYxuo1GWHzhKOWFfCC%2B%2BHPJFpgoOHX7aHhAH8e0i313Rbgon%2Fp3b3Qtf2GcA5A%2FHogRtdLM8HMRhSqvf5XgYog1OMmYD%2BYYvYxq9h9pkCDlr1BLzk%2BKt4Bc%2FvL29tFvj9EGA6eJhkC8YpGTMFJH4Th3re2mi8OTMmYKjnSliK6KVXJcXatTVmImxbHtar33umXVbXNZ2uvwaElyFD7M5GszagiUOSObdEG1RqzxukOr%2BhgXXbyqsHNaIqf3JQZtoupYN%2FNBc5dBNGx6Bx9w8cagm1qg0A6xKgE59hxoWBOQr%2FwZv1135qpb9LiRAzY4iOfZcDj16oL8G%2BoblKqD2w%2FzjHrRCZPi21%2FnekXh1Gi%2F968QNi9eJRSSjdDXOpQFSXWrfOW3LHsADk4KmYnljE4u7GgwFbzaTWL%2Bf78HyGtDT5bRTXxuUqBXxKcMjHgofoEnST%2F3LCJspMh3NOknmUcV6vVVIgrccO9dufKRAK%2FM%2BhLU%2FqudBD5c9aan8Oh4hpE0BMPKk%2Bb8GOqUBVMaRRE6CX%2BFt2yG0ZnP2lA8QPFVP8ucFw0UY1c3wE7t6hDEEmmE7Q%2Bt%2Br17mjPyHa%2FIxWdD4KOIJDyVlB3mKgXM%2F349ykn15UK1Od%2BXho2JQ1YtMxsu9HitO9SY74rLyomPr37bwFtCBIkYu5FxgJsqgnQnuqgBr43E1bk6faqP7xdfW1sI6F9s4qsOlJIc74w%2FGFE594lDBBKg3%2BZYp8XZzftgk&X-Amz-Signature=b84567c5cc23506be4eb9108a8620eaa9e1fae3f04ee7b72f7e8afe3d55b1f77&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
