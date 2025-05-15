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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ORTOYV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDTE9R%2B5fFFLKFeDKPScAWg2PTUmQZ8xLO%2BPYrF1suVXgIgX64S7%2B3dDaEPWcpi4%2BBQG1v8GGyhdLk2lCo%2BgJGujvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGP9TOArCHqJYLEJYCrcA%2BYSHCKT2Xmtnm7nvNYelmmkDUNzF2%2Fs8peK00LcVVrKFsRVmT1OCqAOw0MVM0ZU5uk2sIb8ZIW05NnaqzoLVPLOEXH3NWx8u%2BHqQx3tNWmHWH%2B7l7daAda%2B6BJZwJvjrkcFZEKqL0p4bC6EqIjsNdRljVv8B%2B5DQRZ04bQnxO%2F89qyyqX0NhkgjSR%2FspYII7ku9ibExUdwl2A%2FTKTjkSHuatk2I3JtbeuabQviElNZr63DHNrnZiHXGPZLG3vBqrnzsbK352tQqaXdMCoVnwUYIPm2FFINKYX%2Fz7%2BWVB5SXdWbEWNAsP62lIdBuTWtRoAiu159VC4AGHUrelRMiAvtsndcEadB2p7jFyMAo1Bee%2BzU%2FL5%2Fw%2FLVDMD5qgY%2FLt%2Fw2YzLb9B7lEqgqIkhfWhq9TKDCf3EOgyHAsY2LI2z%2BtsjJrPqzrgC4VRk8saX27R%2FeUw7Z4jDAcdBIWMDy0cnGlEBplBj9LSfdPbsBMDEpfy9zx8v6avqIT%2Fc9nbS8b%2Bb3JK3jkcS9hOWEbfQoCqNcCvjM%2FutK02c3WTMJDHx3fvrxS9ky1xlD%2FzwPhe0VU77EQNjL9pUQ5je7IfeL%2BI4F7vHaysu4b%2BGaNweb5Cz7w8Zx1vBX9w%2B9wXqFMPWrmMEGOqUBhfOhixaM1EAw3psWvXzjQiNlo67dwBuXURH8UHqKGLJlWgOtnoDPmHdeIZiZT01cuU%2BxBMueSQFMvwe%2BV4npd2RRqY8%2FwaqTXovocJFnDJMKfSBpPnQ7XlcwQ1NezEhJ7Llj2iKytdSXkBph3hN8kVphAFs1iBeAn5rHQYiz%2BbUop1U351S4WngiIaBB2r86RTAqhmCv%2FP8ps5xnEGFGHb6B2RdZ&X-Amz-Signature=49745ca2a22a293efd856e975b03f5f52502689af77b44e6f0e5b63403054c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ORTOYV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDTE9R%2B5fFFLKFeDKPScAWg2PTUmQZ8xLO%2BPYrF1suVXgIgX64S7%2B3dDaEPWcpi4%2BBQG1v8GGyhdLk2lCo%2BgJGujvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGP9TOArCHqJYLEJYCrcA%2BYSHCKT2Xmtnm7nvNYelmmkDUNzF2%2Fs8peK00LcVVrKFsRVmT1OCqAOw0MVM0ZU5uk2sIb8ZIW05NnaqzoLVPLOEXH3NWx8u%2BHqQx3tNWmHWH%2B7l7daAda%2B6BJZwJvjrkcFZEKqL0p4bC6EqIjsNdRljVv8B%2B5DQRZ04bQnxO%2F89qyyqX0NhkgjSR%2FspYII7ku9ibExUdwl2A%2FTKTjkSHuatk2I3JtbeuabQviElNZr63DHNrnZiHXGPZLG3vBqrnzsbK352tQqaXdMCoVnwUYIPm2FFINKYX%2Fz7%2BWVB5SXdWbEWNAsP62lIdBuTWtRoAiu159VC4AGHUrelRMiAvtsndcEadB2p7jFyMAo1Bee%2BzU%2FL5%2Fw%2FLVDMD5qgY%2FLt%2Fw2YzLb9B7lEqgqIkhfWhq9TKDCf3EOgyHAsY2LI2z%2BtsjJrPqzrgC4VRk8saX27R%2FeUw7Z4jDAcdBIWMDy0cnGlEBplBj9LSfdPbsBMDEpfy9zx8v6avqIT%2Fc9nbS8b%2Bb3JK3jkcS9hOWEbfQoCqNcCvjM%2FutK02c3WTMJDHx3fvrxS9ky1xlD%2FzwPhe0VU77EQNjL9pUQ5je7IfeL%2BI4F7vHaysu4b%2BGaNweb5Cz7w8Zx1vBX9w%2B9wXqFMPWrmMEGOqUBhfOhixaM1EAw3psWvXzjQiNlo67dwBuXURH8UHqKGLJlWgOtnoDPmHdeIZiZT01cuU%2BxBMueSQFMvwe%2BV4npd2RRqY8%2FwaqTXovocJFnDJMKfSBpPnQ7XlcwQ1NezEhJ7Llj2iKytdSXkBph3hN8kVphAFs1iBeAn5rHQYiz%2BbUop1U351S4WngiIaBB2r86RTAqhmCv%2FP8ps5xnEGFGHb6B2RdZ&X-Amz-Signature=4b1189f174b2fcd39538f10b6fe89a07903c4bc42bc11f6eac7c43019f287bca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ORTOYV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDTE9R%2B5fFFLKFeDKPScAWg2PTUmQZ8xLO%2BPYrF1suVXgIgX64S7%2B3dDaEPWcpi4%2BBQG1v8GGyhdLk2lCo%2BgJGujvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGP9TOArCHqJYLEJYCrcA%2BYSHCKT2Xmtnm7nvNYelmmkDUNzF2%2Fs8peK00LcVVrKFsRVmT1OCqAOw0MVM0ZU5uk2sIb8ZIW05NnaqzoLVPLOEXH3NWx8u%2BHqQx3tNWmHWH%2B7l7daAda%2B6BJZwJvjrkcFZEKqL0p4bC6EqIjsNdRljVv8B%2B5DQRZ04bQnxO%2F89qyyqX0NhkgjSR%2FspYII7ku9ibExUdwl2A%2FTKTjkSHuatk2I3JtbeuabQviElNZr63DHNrnZiHXGPZLG3vBqrnzsbK352tQqaXdMCoVnwUYIPm2FFINKYX%2Fz7%2BWVB5SXdWbEWNAsP62lIdBuTWtRoAiu159VC4AGHUrelRMiAvtsndcEadB2p7jFyMAo1Bee%2BzU%2FL5%2Fw%2FLVDMD5qgY%2FLt%2Fw2YzLb9B7lEqgqIkhfWhq9TKDCf3EOgyHAsY2LI2z%2BtsjJrPqzrgC4VRk8saX27R%2FeUw7Z4jDAcdBIWMDy0cnGlEBplBj9LSfdPbsBMDEpfy9zx8v6avqIT%2Fc9nbS8b%2Bb3JK3jkcS9hOWEbfQoCqNcCvjM%2FutK02c3WTMJDHx3fvrxS9ky1xlD%2FzwPhe0VU77EQNjL9pUQ5je7IfeL%2BI4F7vHaysu4b%2BGaNweb5Cz7w8Zx1vBX9w%2B9wXqFMPWrmMEGOqUBhfOhixaM1EAw3psWvXzjQiNlo67dwBuXURH8UHqKGLJlWgOtnoDPmHdeIZiZT01cuU%2BxBMueSQFMvwe%2BV4npd2RRqY8%2FwaqTXovocJFnDJMKfSBpPnQ7XlcwQ1NezEhJ7Llj2iKytdSXkBph3hN8kVphAFs1iBeAn5rHQYiz%2BbUop1U351S4WngiIaBB2r86RTAqhmCv%2FP8ps5xnEGFGHb6B2RdZ&X-Amz-Signature=42ebd9ca0e2e120241c156ddf2e37231635469b6303f78c574695250854c7f40&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ORTOYV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDTE9R%2B5fFFLKFeDKPScAWg2PTUmQZ8xLO%2BPYrF1suVXgIgX64S7%2B3dDaEPWcpi4%2BBQG1v8GGyhdLk2lCo%2BgJGujvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGP9TOArCHqJYLEJYCrcA%2BYSHCKT2Xmtnm7nvNYelmmkDUNzF2%2Fs8peK00LcVVrKFsRVmT1OCqAOw0MVM0ZU5uk2sIb8ZIW05NnaqzoLVPLOEXH3NWx8u%2BHqQx3tNWmHWH%2B7l7daAda%2B6BJZwJvjrkcFZEKqL0p4bC6EqIjsNdRljVv8B%2B5DQRZ04bQnxO%2F89qyyqX0NhkgjSR%2FspYII7ku9ibExUdwl2A%2FTKTjkSHuatk2I3JtbeuabQviElNZr63DHNrnZiHXGPZLG3vBqrnzsbK352tQqaXdMCoVnwUYIPm2FFINKYX%2Fz7%2BWVB5SXdWbEWNAsP62lIdBuTWtRoAiu159VC4AGHUrelRMiAvtsndcEadB2p7jFyMAo1Bee%2BzU%2FL5%2Fw%2FLVDMD5qgY%2FLt%2Fw2YzLb9B7lEqgqIkhfWhq9TKDCf3EOgyHAsY2LI2z%2BtsjJrPqzrgC4VRk8saX27R%2FeUw7Z4jDAcdBIWMDy0cnGlEBplBj9LSfdPbsBMDEpfy9zx8v6avqIT%2Fc9nbS8b%2Bb3JK3jkcS9hOWEbfQoCqNcCvjM%2FutK02c3WTMJDHx3fvrxS9ky1xlD%2FzwPhe0VU77EQNjL9pUQ5je7IfeL%2BI4F7vHaysu4b%2BGaNweb5Cz7w8Zx1vBX9w%2B9wXqFMPWrmMEGOqUBhfOhixaM1EAw3psWvXzjQiNlo67dwBuXURH8UHqKGLJlWgOtnoDPmHdeIZiZT01cuU%2BxBMueSQFMvwe%2BV4npd2RRqY8%2FwaqTXovocJFnDJMKfSBpPnQ7XlcwQ1NezEhJ7Llj2iKytdSXkBph3hN8kVphAFs1iBeAn5rHQYiz%2BbUop1U351S4WngiIaBB2r86RTAqhmCv%2FP8ps5xnEGFGHb6B2RdZ&X-Amz-Signature=7f8cfe20ef3a070510dcebf7fd9ff8a8ed7a0ed36872c6f7aa9c5e5d445008e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ORTOYV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDTE9R%2B5fFFLKFeDKPScAWg2PTUmQZ8xLO%2BPYrF1suVXgIgX64S7%2B3dDaEPWcpi4%2BBQG1v8GGyhdLk2lCo%2BgJGujvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGP9TOArCHqJYLEJYCrcA%2BYSHCKT2Xmtnm7nvNYelmmkDUNzF2%2Fs8peK00LcVVrKFsRVmT1OCqAOw0MVM0ZU5uk2sIb8ZIW05NnaqzoLVPLOEXH3NWx8u%2BHqQx3tNWmHWH%2B7l7daAda%2B6BJZwJvjrkcFZEKqL0p4bC6EqIjsNdRljVv8B%2B5DQRZ04bQnxO%2F89qyyqX0NhkgjSR%2FspYII7ku9ibExUdwl2A%2FTKTjkSHuatk2I3JtbeuabQviElNZr63DHNrnZiHXGPZLG3vBqrnzsbK352tQqaXdMCoVnwUYIPm2FFINKYX%2Fz7%2BWVB5SXdWbEWNAsP62lIdBuTWtRoAiu159VC4AGHUrelRMiAvtsndcEadB2p7jFyMAo1Bee%2BzU%2FL5%2Fw%2FLVDMD5qgY%2FLt%2Fw2YzLb9B7lEqgqIkhfWhq9TKDCf3EOgyHAsY2LI2z%2BtsjJrPqzrgC4VRk8saX27R%2FeUw7Z4jDAcdBIWMDy0cnGlEBplBj9LSfdPbsBMDEpfy9zx8v6avqIT%2Fc9nbS8b%2Bb3JK3jkcS9hOWEbfQoCqNcCvjM%2FutK02c3WTMJDHx3fvrxS9ky1xlD%2FzwPhe0VU77EQNjL9pUQ5je7IfeL%2BI4F7vHaysu4b%2BGaNweb5Cz7w8Zx1vBX9w%2B9wXqFMPWrmMEGOqUBhfOhixaM1EAw3psWvXzjQiNlo67dwBuXURH8UHqKGLJlWgOtnoDPmHdeIZiZT01cuU%2BxBMueSQFMvwe%2BV4npd2RRqY8%2FwaqTXovocJFnDJMKfSBpPnQ7XlcwQ1NezEhJ7Llj2iKytdSXkBph3hN8kVphAFs1iBeAn5rHQYiz%2BbUop1U351S4WngiIaBB2r86RTAqhmCv%2FP8ps5xnEGFGHb6B2RdZ&X-Amz-Signature=3cf4e0bc94cd855deb3c7c34b514f4912717b968e32443518291da81fe7ddc98&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ORTOYV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDTE9R%2B5fFFLKFeDKPScAWg2PTUmQZ8xLO%2BPYrF1suVXgIgX64S7%2B3dDaEPWcpi4%2BBQG1v8GGyhdLk2lCo%2BgJGujvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGP9TOArCHqJYLEJYCrcA%2BYSHCKT2Xmtnm7nvNYelmmkDUNzF2%2Fs8peK00LcVVrKFsRVmT1OCqAOw0MVM0ZU5uk2sIb8ZIW05NnaqzoLVPLOEXH3NWx8u%2BHqQx3tNWmHWH%2B7l7daAda%2B6BJZwJvjrkcFZEKqL0p4bC6EqIjsNdRljVv8B%2B5DQRZ04bQnxO%2F89qyyqX0NhkgjSR%2FspYII7ku9ibExUdwl2A%2FTKTjkSHuatk2I3JtbeuabQviElNZr63DHNrnZiHXGPZLG3vBqrnzsbK352tQqaXdMCoVnwUYIPm2FFINKYX%2Fz7%2BWVB5SXdWbEWNAsP62lIdBuTWtRoAiu159VC4AGHUrelRMiAvtsndcEadB2p7jFyMAo1Bee%2BzU%2FL5%2Fw%2FLVDMD5qgY%2FLt%2Fw2YzLb9B7lEqgqIkhfWhq9TKDCf3EOgyHAsY2LI2z%2BtsjJrPqzrgC4VRk8saX27R%2FeUw7Z4jDAcdBIWMDy0cnGlEBplBj9LSfdPbsBMDEpfy9zx8v6avqIT%2Fc9nbS8b%2Bb3JK3jkcS9hOWEbfQoCqNcCvjM%2FutK02c3WTMJDHx3fvrxS9ky1xlD%2FzwPhe0VU77EQNjL9pUQ5je7IfeL%2BI4F7vHaysu4b%2BGaNweb5Cz7w8Zx1vBX9w%2B9wXqFMPWrmMEGOqUBhfOhixaM1EAw3psWvXzjQiNlo67dwBuXURH8UHqKGLJlWgOtnoDPmHdeIZiZT01cuU%2BxBMueSQFMvwe%2BV4npd2RRqY8%2FwaqTXovocJFnDJMKfSBpPnQ7XlcwQ1NezEhJ7Llj2iKytdSXkBph3hN8kVphAFs1iBeAn5rHQYiz%2BbUop1U351S4WngiIaBB2r86RTAqhmCv%2FP8ps5xnEGFGHb6B2RdZ&X-Amz-Signature=9fd320ad45fce63c3f87fc5c53eacec79c7397136ffe6f44958e001a77daf921&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ORTOYV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDTE9R%2B5fFFLKFeDKPScAWg2PTUmQZ8xLO%2BPYrF1suVXgIgX64S7%2B3dDaEPWcpi4%2BBQG1v8GGyhdLk2lCo%2BgJGujvIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGP9TOArCHqJYLEJYCrcA%2BYSHCKT2Xmtnm7nvNYelmmkDUNzF2%2Fs8peK00LcVVrKFsRVmT1OCqAOw0MVM0ZU5uk2sIb8ZIW05NnaqzoLVPLOEXH3NWx8u%2BHqQx3tNWmHWH%2B7l7daAda%2B6BJZwJvjrkcFZEKqL0p4bC6EqIjsNdRljVv8B%2B5DQRZ04bQnxO%2F89qyyqX0NhkgjSR%2FspYII7ku9ibExUdwl2A%2FTKTjkSHuatk2I3JtbeuabQviElNZr63DHNrnZiHXGPZLG3vBqrnzsbK352tQqaXdMCoVnwUYIPm2FFINKYX%2Fz7%2BWVB5SXdWbEWNAsP62lIdBuTWtRoAiu159VC4AGHUrelRMiAvtsndcEadB2p7jFyMAo1Bee%2BzU%2FL5%2Fw%2FLVDMD5qgY%2FLt%2Fw2YzLb9B7lEqgqIkhfWhq9TKDCf3EOgyHAsY2LI2z%2BtsjJrPqzrgC4VRk8saX27R%2FeUw7Z4jDAcdBIWMDy0cnGlEBplBj9LSfdPbsBMDEpfy9zx8v6avqIT%2Fc9nbS8b%2Bb3JK3jkcS9hOWEbfQoCqNcCvjM%2FutK02c3WTMJDHx3fvrxS9ky1xlD%2FzwPhe0VU77EQNjL9pUQ5je7IfeL%2BI4F7vHaysu4b%2BGaNweb5Cz7w8Zx1vBX9w%2B9wXqFMPWrmMEGOqUBhfOhixaM1EAw3psWvXzjQiNlo67dwBuXURH8UHqKGLJlWgOtnoDPmHdeIZiZT01cuU%2BxBMueSQFMvwe%2BV4npd2RRqY8%2FwaqTXovocJFnDJMKfSBpPnQ7XlcwQ1NezEhJ7Llj2iKytdSXkBph3hN8kVphAFs1iBeAn5rHQYiz%2BbUop1U351S4WngiIaBB2r86RTAqhmCv%2FP8ps5xnEGFGHb6B2RdZ&X-Amz-Signature=f2b412ac651f88cd972bd3198ff80e7b810c24156c83b69787535cd935d3f7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
