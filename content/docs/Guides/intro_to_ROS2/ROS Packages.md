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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK2NTSS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFA8KcslkVJacSASuSUznGGKJTwdkvDnP6qEqT2iAcAIgReYpAC1ojTu57CPEh19j1Mw0p%2F7jIhxn0KzKBs2yIO8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNcrWoC2g6kMmdszgSrcA5Pu8D8UFDFs%2Fg6AaJefySOLmLKTRINih08wrjtfFE0AvFfuZtnuaTtYboUwuclhzAJqHQ1isrB6YSHqbkFSBz8Araf%2BwsNINaxfbe9quaEK%2FqFvWvU4baegUY%2BCFuTNdH%2FuDOU0Ati6gjdNRjZ6m%2B%2B5KgyDj8xyPw0G4cT111Nq2QXXGDIPGOD1bFi8%2BsufYnlRl0VBQcKs2t5pW33k4zPEefWBMQ8Q%2FLVbMYRmNC9w%2FUcCb06VyBTqhRZQsVtSitjBrYC6IRl9X3OjWCQHg5pKnhzLMsM1lkE3GiGlcamIy4vlR6PIU8GcM%2Bxwg7zr4GE%2BNFgL%2BF5KgQgBPFA5SrqflV60NlFNdZZ%2BgYeTOW0Ts9Wx1WDXTQdG%2BSNEQUSo4%2Fvd8P%2B%2FvBkWSehr7ES3J5XNQJIuTDxU1RZTaJCUNQpFNZwHd8GHk7N8sXQ1YBC0OqNv0SI5unu%2BXAlbDfvRAScYNzBc%2BK73Oh1shREh0yZZOPkS3NMAb91qnZWvt9YyyxeuuqYfxTQhEI4%2BFaFqHI3uFRiT0LC9RCB1Y4M28KHWWyWOyLs97Sl3EyU4scPkJ6Zuupp6V2pIYiSgqj9qvrax11Iv4GQBtaqJCLVKzb%2Fn7iwsVxKFLC%2BGFBl%2BMMGu2L4GOqUBLtO3HGsrBVsgxsxh4d9iCcOdxCniqEsDZQJl9cr1Za7lpWx%2FGZG6NKhzirU%2Bm9qe1%2BaJUUZ91LAxl3d9yreilnVhedjgYpeoD3LGcuJgvmsdvxZfTif7WumH%2BHYSVYgS80Z2F4dxtaoLk%2ByNsExVtoYqNFBnl9cCVM9NP%2FiOlV6sxEcFsPwndJ8P3W8CLUc4fTXyTN8NsjnNZqa8wHONCMP1e%2BA0&X-Amz-Signature=c79442493af2a9be131d5aebbfd4ecbf703e8def73e70c89b5c12c5b9e7a9e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK2NTSS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFA8KcslkVJacSASuSUznGGKJTwdkvDnP6qEqT2iAcAIgReYpAC1ojTu57CPEh19j1Mw0p%2F7jIhxn0KzKBs2yIO8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNcrWoC2g6kMmdszgSrcA5Pu8D8UFDFs%2Fg6AaJefySOLmLKTRINih08wrjtfFE0AvFfuZtnuaTtYboUwuclhzAJqHQ1isrB6YSHqbkFSBz8Araf%2BwsNINaxfbe9quaEK%2FqFvWvU4baegUY%2BCFuTNdH%2FuDOU0Ati6gjdNRjZ6m%2B%2B5KgyDj8xyPw0G4cT111Nq2QXXGDIPGOD1bFi8%2BsufYnlRl0VBQcKs2t5pW33k4zPEefWBMQ8Q%2FLVbMYRmNC9w%2FUcCb06VyBTqhRZQsVtSitjBrYC6IRl9X3OjWCQHg5pKnhzLMsM1lkE3GiGlcamIy4vlR6PIU8GcM%2Bxwg7zr4GE%2BNFgL%2BF5KgQgBPFA5SrqflV60NlFNdZZ%2BgYeTOW0Ts9Wx1WDXTQdG%2BSNEQUSo4%2Fvd8P%2B%2FvBkWSehr7ES3J5XNQJIuTDxU1RZTaJCUNQpFNZwHd8GHk7N8sXQ1YBC0OqNv0SI5unu%2BXAlbDfvRAScYNzBc%2BK73Oh1shREh0yZZOPkS3NMAb91qnZWvt9YyyxeuuqYfxTQhEI4%2BFaFqHI3uFRiT0LC9RCB1Y4M28KHWWyWOyLs97Sl3EyU4scPkJ6Zuupp6V2pIYiSgqj9qvrax11Iv4GQBtaqJCLVKzb%2Fn7iwsVxKFLC%2BGFBl%2BMMGu2L4GOqUBLtO3HGsrBVsgxsxh4d9iCcOdxCniqEsDZQJl9cr1Za7lpWx%2FGZG6NKhzirU%2Bm9qe1%2BaJUUZ91LAxl3d9yreilnVhedjgYpeoD3LGcuJgvmsdvxZfTif7WumH%2BHYSVYgS80Z2F4dxtaoLk%2ByNsExVtoYqNFBnl9cCVM9NP%2FiOlV6sxEcFsPwndJ8P3W8CLUc4fTXyTN8NsjnNZqa8wHONCMP1e%2BA0&X-Amz-Signature=6be905d5c4480636af80b48f36fdc8f701b623cbaecd6574d61673d43462f4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK2NTSS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFA8KcslkVJacSASuSUznGGKJTwdkvDnP6qEqT2iAcAIgReYpAC1ojTu57CPEh19j1Mw0p%2F7jIhxn0KzKBs2yIO8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNcrWoC2g6kMmdszgSrcA5Pu8D8UFDFs%2Fg6AaJefySOLmLKTRINih08wrjtfFE0AvFfuZtnuaTtYboUwuclhzAJqHQ1isrB6YSHqbkFSBz8Araf%2BwsNINaxfbe9quaEK%2FqFvWvU4baegUY%2BCFuTNdH%2FuDOU0Ati6gjdNRjZ6m%2B%2B5KgyDj8xyPw0G4cT111Nq2QXXGDIPGOD1bFi8%2BsufYnlRl0VBQcKs2t5pW33k4zPEefWBMQ8Q%2FLVbMYRmNC9w%2FUcCb06VyBTqhRZQsVtSitjBrYC6IRl9X3OjWCQHg5pKnhzLMsM1lkE3GiGlcamIy4vlR6PIU8GcM%2Bxwg7zr4GE%2BNFgL%2BF5KgQgBPFA5SrqflV60NlFNdZZ%2BgYeTOW0Ts9Wx1WDXTQdG%2BSNEQUSo4%2Fvd8P%2B%2FvBkWSehr7ES3J5XNQJIuTDxU1RZTaJCUNQpFNZwHd8GHk7N8sXQ1YBC0OqNv0SI5unu%2BXAlbDfvRAScYNzBc%2BK73Oh1shREh0yZZOPkS3NMAb91qnZWvt9YyyxeuuqYfxTQhEI4%2BFaFqHI3uFRiT0LC9RCB1Y4M28KHWWyWOyLs97Sl3EyU4scPkJ6Zuupp6V2pIYiSgqj9qvrax11Iv4GQBtaqJCLVKzb%2Fn7iwsVxKFLC%2BGFBl%2BMMGu2L4GOqUBLtO3HGsrBVsgxsxh4d9iCcOdxCniqEsDZQJl9cr1Za7lpWx%2FGZG6NKhzirU%2Bm9qe1%2BaJUUZ91LAxl3d9yreilnVhedjgYpeoD3LGcuJgvmsdvxZfTif7WumH%2BHYSVYgS80Z2F4dxtaoLk%2ByNsExVtoYqNFBnl9cCVM9NP%2FiOlV6sxEcFsPwndJ8P3W8CLUc4fTXyTN8NsjnNZqa8wHONCMP1e%2BA0&X-Amz-Signature=2e4cf65dc729178be35212067f20fc56baf1df6f793f83fdf862c464ed8ee940&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK2NTSS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFA8KcslkVJacSASuSUznGGKJTwdkvDnP6qEqT2iAcAIgReYpAC1ojTu57CPEh19j1Mw0p%2F7jIhxn0KzKBs2yIO8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNcrWoC2g6kMmdszgSrcA5Pu8D8UFDFs%2Fg6AaJefySOLmLKTRINih08wrjtfFE0AvFfuZtnuaTtYboUwuclhzAJqHQ1isrB6YSHqbkFSBz8Araf%2BwsNINaxfbe9quaEK%2FqFvWvU4baegUY%2BCFuTNdH%2FuDOU0Ati6gjdNRjZ6m%2B%2B5KgyDj8xyPw0G4cT111Nq2QXXGDIPGOD1bFi8%2BsufYnlRl0VBQcKs2t5pW33k4zPEefWBMQ8Q%2FLVbMYRmNC9w%2FUcCb06VyBTqhRZQsVtSitjBrYC6IRl9X3OjWCQHg5pKnhzLMsM1lkE3GiGlcamIy4vlR6PIU8GcM%2Bxwg7zr4GE%2BNFgL%2BF5KgQgBPFA5SrqflV60NlFNdZZ%2BgYeTOW0Ts9Wx1WDXTQdG%2BSNEQUSo4%2Fvd8P%2B%2FvBkWSehr7ES3J5XNQJIuTDxU1RZTaJCUNQpFNZwHd8GHk7N8sXQ1YBC0OqNv0SI5unu%2BXAlbDfvRAScYNzBc%2BK73Oh1shREh0yZZOPkS3NMAb91qnZWvt9YyyxeuuqYfxTQhEI4%2BFaFqHI3uFRiT0LC9RCB1Y4M28KHWWyWOyLs97Sl3EyU4scPkJ6Zuupp6V2pIYiSgqj9qvrax11Iv4GQBtaqJCLVKzb%2Fn7iwsVxKFLC%2BGFBl%2BMMGu2L4GOqUBLtO3HGsrBVsgxsxh4d9iCcOdxCniqEsDZQJl9cr1Za7lpWx%2FGZG6NKhzirU%2Bm9qe1%2BaJUUZ91LAxl3d9yreilnVhedjgYpeoD3LGcuJgvmsdvxZfTif7WumH%2BHYSVYgS80Z2F4dxtaoLk%2ByNsExVtoYqNFBnl9cCVM9NP%2FiOlV6sxEcFsPwndJ8P3W8CLUc4fTXyTN8NsjnNZqa8wHONCMP1e%2BA0&X-Amz-Signature=3e2370d840cb4ec63edbe3c84e8b81822e5eb3bea2d282f1be2b47011b6223ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK2NTSS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFA8KcslkVJacSASuSUznGGKJTwdkvDnP6qEqT2iAcAIgReYpAC1ojTu57CPEh19j1Mw0p%2F7jIhxn0KzKBs2yIO8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNcrWoC2g6kMmdszgSrcA5Pu8D8UFDFs%2Fg6AaJefySOLmLKTRINih08wrjtfFE0AvFfuZtnuaTtYboUwuclhzAJqHQ1isrB6YSHqbkFSBz8Araf%2BwsNINaxfbe9quaEK%2FqFvWvU4baegUY%2BCFuTNdH%2FuDOU0Ati6gjdNRjZ6m%2B%2B5KgyDj8xyPw0G4cT111Nq2QXXGDIPGOD1bFi8%2BsufYnlRl0VBQcKs2t5pW33k4zPEefWBMQ8Q%2FLVbMYRmNC9w%2FUcCb06VyBTqhRZQsVtSitjBrYC6IRl9X3OjWCQHg5pKnhzLMsM1lkE3GiGlcamIy4vlR6PIU8GcM%2Bxwg7zr4GE%2BNFgL%2BF5KgQgBPFA5SrqflV60NlFNdZZ%2BgYeTOW0Ts9Wx1WDXTQdG%2BSNEQUSo4%2Fvd8P%2B%2FvBkWSehr7ES3J5XNQJIuTDxU1RZTaJCUNQpFNZwHd8GHk7N8sXQ1YBC0OqNv0SI5unu%2BXAlbDfvRAScYNzBc%2BK73Oh1shREh0yZZOPkS3NMAb91qnZWvt9YyyxeuuqYfxTQhEI4%2BFaFqHI3uFRiT0LC9RCB1Y4M28KHWWyWOyLs97Sl3EyU4scPkJ6Zuupp6V2pIYiSgqj9qvrax11Iv4GQBtaqJCLVKzb%2Fn7iwsVxKFLC%2BGFBl%2BMMGu2L4GOqUBLtO3HGsrBVsgxsxh4d9iCcOdxCniqEsDZQJl9cr1Za7lpWx%2FGZG6NKhzirU%2Bm9qe1%2BaJUUZ91LAxl3d9yreilnVhedjgYpeoD3LGcuJgvmsdvxZfTif7WumH%2BHYSVYgS80Z2F4dxtaoLk%2ByNsExVtoYqNFBnl9cCVM9NP%2FiOlV6sxEcFsPwndJ8P3W8CLUc4fTXyTN8NsjnNZqa8wHONCMP1e%2BA0&X-Amz-Signature=c48edc8f0a2c91f845c3d5a1a1c284451d0c197ae07e697b6341c95c6a7487ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK2NTSS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFA8KcslkVJacSASuSUznGGKJTwdkvDnP6qEqT2iAcAIgReYpAC1ojTu57CPEh19j1Mw0p%2F7jIhxn0KzKBs2yIO8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNcrWoC2g6kMmdszgSrcA5Pu8D8UFDFs%2Fg6AaJefySOLmLKTRINih08wrjtfFE0AvFfuZtnuaTtYboUwuclhzAJqHQ1isrB6YSHqbkFSBz8Araf%2BwsNINaxfbe9quaEK%2FqFvWvU4baegUY%2BCFuTNdH%2FuDOU0Ati6gjdNRjZ6m%2B%2B5KgyDj8xyPw0G4cT111Nq2QXXGDIPGOD1bFi8%2BsufYnlRl0VBQcKs2t5pW33k4zPEefWBMQ8Q%2FLVbMYRmNC9w%2FUcCb06VyBTqhRZQsVtSitjBrYC6IRl9X3OjWCQHg5pKnhzLMsM1lkE3GiGlcamIy4vlR6PIU8GcM%2Bxwg7zr4GE%2BNFgL%2BF5KgQgBPFA5SrqflV60NlFNdZZ%2BgYeTOW0Ts9Wx1WDXTQdG%2BSNEQUSo4%2Fvd8P%2B%2FvBkWSehr7ES3J5XNQJIuTDxU1RZTaJCUNQpFNZwHd8GHk7N8sXQ1YBC0OqNv0SI5unu%2BXAlbDfvRAScYNzBc%2BK73Oh1shREh0yZZOPkS3NMAb91qnZWvt9YyyxeuuqYfxTQhEI4%2BFaFqHI3uFRiT0LC9RCB1Y4M28KHWWyWOyLs97Sl3EyU4scPkJ6Zuupp6V2pIYiSgqj9qvrax11Iv4GQBtaqJCLVKzb%2Fn7iwsVxKFLC%2BGFBl%2BMMGu2L4GOqUBLtO3HGsrBVsgxsxh4d9iCcOdxCniqEsDZQJl9cr1Za7lpWx%2FGZG6NKhzirU%2Bm9qe1%2BaJUUZ91LAxl3d9yreilnVhedjgYpeoD3LGcuJgvmsdvxZfTif7WumH%2BHYSVYgS80Z2F4dxtaoLk%2ByNsExVtoYqNFBnl9cCVM9NP%2FiOlV6sxEcFsPwndJ8P3W8CLUc4fTXyTN8NsjnNZqa8wHONCMP1e%2BA0&X-Amz-Signature=14c82730e683680405ad4e7ff144312605ccb2356c35da3978912653fa012980&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK2NTSS%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFA8KcslkVJacSASuSUznGGKJTwdkvDnP6qEqT2iAcAIgReYpAC1ojTu57CPEh19j1Mw0p%2F7jIhxn0KzKBs2yIO8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNcrWoC2g6kMmdszgSrcA5Pu8D8UFDFs%2Fg6AaJefySOLmLKTRINih08wrjtfFE0AvFfuZtnuaTtYboUwuclhzAJqHQ1isrB6YSHqbkFSBz8Araf%2BwsNINaxfbe9quaEK%2FqFvWvU4baegUY%2BCFuTNdH%2FuDOU0Ati6gjdNRjZ6m%2B%2B5KgyDj8xyPw0G4cT111Nq2QXXGDIPGOD1bFi8%2BsufYnlRl0VBQcKs2t5pW33k4zPEefWBMQ8Q%2FLVbMYRmNC9w%2FUcCb06VyBTqhRZQsVtSitjBrYC6IRl9X3OjWCQHg5pKnhzLMsM1lkE3GiGlcamIy4vlR6PIU8GcM%2Bxwg7zr4GE%2BNFgL%2BF5KgQgBPFA5SrqflV60NlFNdZZ%2BgYeTOW0Ts9Wx1WDXTQdG%2BSNEQUSo4%2Fvd8P%2B%2FvBkWSehr7ES3J5XNQJIuTDxU1RZTaJCUNQpFNZwHd8GHk7N8sXQ1YBC0OqNv0SI5unu%2BXAlbDfvRAScYNzBc%2BK73Oh1shREh0yZZOPkS3NMAb91qnZWvt9YyyxeuuqYfxTQhEI4%2BFaFqHI3uFRiT0LC9RCB1Y4M28KHWWyWOyLs97Sl3EyU4scPkJ6Zuupp6V2pIYiSgqj9qvrax11Iv4GQBtaqJCLVKzb%2Fn7iwsVxKFLC%2BGFBl%2BMMGu2L4GOqUBLtO3HGsrBVsgxsxh4d9iCcOdxCniqEsDZQJl9cr1Za7lpWx%2FGZG6NKhzirU%2Bm9qe1%2BaJUUZ91LAxl3d9yreilnVhedjgYpeoD3LGcuJgvmsdvxZfTif7WumH%2BHYSVYgS80Z2F4dxtaoLk%2ByNsExVtoYqNFBnl9cCVM9NP%2FiOlV6sxEcFsPwndJ8P3W8CLUc4fTXyTN8NsjnNZqa8wHONCMP1e%2BA0&X-Amz-Signature=629529c0ad4a3a4a438bdd378429ea30f9c5fe039a6eb9470172a033f9dbbf9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
