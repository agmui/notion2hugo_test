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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLTLIKC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzo6CsBBZN1A79Ck3%2BEQzjVSrNAYmjPfaPMsKGW3ebsAiBH5IhjC5tiyvhUmoFWOGa4hURRgYioBKp0NvaiqpGSfyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLlRwXmeBbYw7LNRnKtwDzeKDdIDuH6y9pkdV6kg3TTzlPF49J7WLqTRt3eGQDI%2B8p0GJ4%2BUAlHYv79Pu7uC0PyGOwjPKTyrKPO5OYFQTz630oNapWUyi6BKV%2FULm5q79VlSWRfbCjiwFnG5GMpe1lvyzQb4wUI7WiwZyyqpJHsVddcP4L1p2haz1SJj8WOatibNhFW3Y9IYkxA%2FyhITfv7UkTSOaowKWCRwRaHKkY8jGlKiG9aoWMtdXQIHLI7yCd0A0TACI3d4zIUN6XHc1N6q5ZgLuvcIYz8tNBTvg0ShgLCHJ8VlAVY5kvhz0QiejvIrFbmn%2F4IG5fl3wwuxFk0tyY1rZhi0%2Bd1GGplXwcVLaX6EnhZA4NEOa4UX%2BPtsFGAX1xr1S5rTJnC6Y4bNseALBUEjEvO58wxOidf2ApkIgMuRvY4tn%2BaBR9McmjhYFTeOtaZJyztPwPnJPWZ4hRaGCViAE6RNrIjKUY0ZAaIVBTd6sZjuSUSmH8scVfSE4i%2BYSQKvdy7VPqKuIvI5we61tMIggCXejpy%2BhN7SXGXkg2kZxyQjhFVWhkyskKIgYjmAICF4FRFtcfGUuX%2BffRPUNIPvl8SI8%2BWsncN%2FtXhCUYtHxDYFEYp9FOI%2FYZR3HoMOZYRcVMdxmpMswmcr7wgY6pgF1zv0XldSnqW2EOyOw8u5QlcnPOGqpaUec1bevnLLJAbiWhsf1MsX3OmBz5jm9KHFVLGoCXgw6JHH0iiTklvpr%2FJp51bVvLkAET5C1iIDQaGllZpY%2FfjUG5QV4rGk48ljaUKDp9g6scb0OIwzFPMnEIEJs5FNxngkzXbVNSjJ5iSRaIe3WWaDHACC00WDEd%2B8FwGuM9KvE3DsiIBSzp5ov%2BzBwTdqd&X-Amz-Signature=0110575afe544b4f92fe8aa78558a6b2fe9ea960a9ae1a449a745d95f754768c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLTLIKC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzo6CsBBZN1A79Ck3%2BEQzjVSrNAYmjPfaPMsKGW3ebsAiBH5IhjC5tiyvhUmoFWOGa4hURRgYioBKp0NvaiqpGSfyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLlRwXmeBbYw7LNRnKtwDzeKDdIDuH6y9pkdV6kg3TTzlPF49J7WLqTRt3eGQDI%2B8p0GJ4%2BUAlHYv79Pu7uC0PyGOwjPKTyrKPO5OYFQTz630oNapWUyi6BKV%2FULm5q79VlSWRfbCjiwFnG5GMpe1lvyzQb4wUI7WiwZyyqpJHsVddcP4L1p2haz1SJj8WOatibNhFW3Y9IYkxA%2FyhITfv7UkTSOaowKWCRwRaHKkY8jGlKiG9aoWMtdXQIHLI7yCd0A0TACI3d4zIUN6XHc1N6q5ZgLuvcIYz8tNBTvg0ShgLCHJ8VlAVY5kvhz0QiejvIrFbmn%2F4IG5fl3wwuxFk0tyY1rZhi0%2Bd1GGplXwcVLaX6EnhZA4NEOa4UX%2BPtsFGAX1xr1S5rTJnC6Y4bNseALBUEjEvO58wxOidf2ApkIgMuRvY4tn%2BaBR9McmjhYFTeOtaZJyztPwPnJPWZ4hRaGCViAE6RNrIjKUY0ZAaIVBTd6sZjuSUSmH8scVfSE4i%2BYSQKvdy7VPqKuIvI5we61tMIggCXejpy%2BhN7SXGXkg2kZxyQjhFVWhkyskKIgYjmAICF4FRFtcfGUuX%2BffRPUNIPvl8SI8%2BWsncN%2FtXhCUYtHxDYFEYp9FOI%2FYZR3HoMOZYRcVMdxmpMswmcr7wgY6pgF1zv0XldSnqW2EOyOw8u5QlcnPOGqpaUec1bevnLLJAbiWhsf1MsX3OmBz5jm9KHFVLGoCXgw6JHH0iiTklvpr%2FJp51bVvLkAET5C1iIDQaGllZpY%2FfjUG5QV4rGk48ljaUKDp9g6scb0OIwzFPMnEIEJs5FNxngkzXbVNSjJ5iSRaIe3WWaDHACC00WDEd%2B8FwGuM9KvE3DsiIBSzp5ov%2BzBwTdqd&X-Amz-Signature=89d994b08877fa84ac632f8de8315f9321a1082d048789a4adca451a4c256f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLTLIKC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzo6CsBBZN1A79Ck3%2BEQzjVSrNAYmjPfaPMsKGW3ebsAiBH5IhjC5tiyvhUmoFWOGa4hURRgYioBKp0NvaiqpGSfyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLlRwXmeBbYw7LNRnKtwDzeKDdIDuH6y9pkdV6kg3TTzlPF49J7WLqTRt3eGQDI%2B8p0GJ4%2BUAlHYv79Pu7uC0PyGOwjPKTyrKPO5OYFQTz630oNapWUyi6BKV%2FULm5q79VlSWRfbCjiwFnG5GMpe1lvyzQb4wUI7WiwZyyqpJHsVddcP4L1p2haz1SJj8WOatibNhFW3Y9IYkxA%2FyhITfv7UkTSOaowKWCRwRaHKkY8jGlKiG9aoWMtdXQIHLI7yCd0A0TACI3d4zIUN6XHc1N6q5ZgLuvcIYz8tNBTvg0ShgLCHJ8VlAVY5kvhz0QiejvIrFbmn%2F4IG5fl3wwuxFk0tyY1rZhi0%2Bd1GGplXwcVLaX6EnhZA4NEOa4UX%2BPtsFGAX1xr1S5rTJnC6Y4bNseALBUEjEvO58wxOidf2ApkIgMuRvY4tn%2BaBR9McmjhYFTeOtaZJyztPwPnJPWZ4hRaGCViAE6RNrIjKUY0ZAaIVBTd6sZjuSUSmH8scVfSE4i%2BYSQKvdy7VPqKuIvI5we61tMIggCXejpy%2BhN7SXGXkg2kZxyQjhFVWhkyskKIgYjmAICF4FRFtcfGUuX%2BffRPUNIPvl8SI8%2BWsncN%2FtXhCUYtHxDYFEYp9FOI%2FYZR3HoMOZYRcVMdxmpMswmcr7wgY6pgF1zv0XldSnqW2EOyOw8u5QlcnPOGqpaUec1bevnLLJAbiWhsf1MsX3OmBz5jm9KHFVLGoCXgw6JHH0iiTklvpr%2FJp51bVvLkAET5C1iIDQaGllZpY%2FfjUG5QV4rGk48ljaUKDp9g6scb0OIwzFPMnEIEJs5FNxngkzXbVNSjJ5iSRaIe3WWaDHACC00WDEd%2B8FwGuM9KvE3DsiIBSzp5ov%2BzBwTdqd&X-Amz-Signature=42472e80c789b6cdb0bb34ca20f080e8b0d90ebbdad51837f0ca9f199ec1f52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLTLIKC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzo6CsBBZN1A79Ck3%2BEQzjVSrNAYmjPfaPMsKGW3ebsAiBH5IhjC5tiyvhUmoFWOGa4hURRgYioBKp0NvaiqpGSfyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLlRwXmeBbYw7LNRnKtwDzeKDdIDuH6y9pkdV6kg3TTzlPF49J7WLqTRt3eGQDI%2B8p0GJ4%2BUAlHYv79Pu7uC0PyGOwjPKTyrKPO5OYFQTz630oNapWUyi6BKV%2FULm5q79VlSWRfbCjiwFnG5GMpe1lvyzQb4wUI7WiwZyyqpJHsVddcP4L1p2haz1SJj8WOatibNhFW3Y9IYkxA%2FyhITfv7UkTSOaowKWCRwRaHKkY8jGlKiG9aoWMtdXQIHLI7yCd0A0TACI3d4zIUN6XHc1N6q5ZgLuvcIYz8tNBTvg0ShgLCHJ8VlAVY5kvhz0QiejvIrFbmn%2F4IG5fl3wwuxFk0tyY1rZhi0%2Bd1GGplXwcVLaX6EnhZA4NEOa4UX%2BPtsFGAX1xr1S5rTJnC6Y4bNseALBUEjEvO58wxOidf2ApkIgMuRvY4tn%2BaBR9McmjhYFTeOtaZJyztPwPnJPWZ4hRaGCViAE6RNrIjKUY0ZAaIVBTd6sZjuSUSmH8scVfSE4i%2BYSQKvdy7VPqKuIvI5we61tMIggCXejpy%2BhN7SXGXkg2kZxyQjhFVWhkyskKIgYjmAICF4FRFtcfGUuX%2BffRPUNIPvl8SI8%2BWsncN%2FtXhCUYtHxDYFEYp9FOI%2FYZR3HoMOZYRcVMdxmpMswmcr7wgY6pgF1zv0XldSnqW2EOyOw8u5QlcnPOGqpaUec1bevnLLJAbiWhsf1MsX3OmBz5jm9KHFVLGoCXgw6JHH0iiTklvpr%2FJp51bVvLkAET5C1iIDQaGllZpY%2FfjUG5QV4rGk48ljaUKDp9g6scb0OIwzFPMnEIEJs5FNxngkzXbVNSjJ5iSRaIe3WWaDHACC00WDEd%2B8FwGuM9KvE3DsiIBSzp5ov%2BzBwTdqd&X-Amz-Signature=25bbd9a42e2c3acdc43d4bf67c71035270821e8840aa0aa93fc3c61442df37c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLTLIKC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzo6CsBBZN1A79Ck3%2BEQzjVSrNAYmjPfaPMsKGW3ebsAiBH5IhjC5tiyvhUmoFWOGa4hURRgYioBKp0NvaiqpGSfyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLlRwXmeBbYw7LNRnKtwDzeKDdIDuH6y9pkdV6kg3TTzlPF49J7WLqTRt3eGQDI%2B8p0GJ4%2BUAlHYv79Pu7uC0PyGOwjPKTyrKPO5OYFQTz630oNapWUyi6BKV%2FULm5q79VlSWRfbCjiwFnG5GMpe1lvyzQb4wUI7WiwZyyqpJHsVddcP4L1p2haz1SJj8WOatibNhFW3Y9IYkxA%2FyhITfv7UkTSOaowKWCRwRaHKkY8jGlKiG9aoWMtdXQIHLI7yCd0A0TACI3d4zIUN6XHc1N6q5ZgLuvcIYz8tNBTvg0ShgLCHJ8VlAVY5kvhz0QiejvIrFbmn%2F4IG5fl3wwuxFk0tyY1rZhi0%2Bd1GGplXwcVLaX6EnhZA4NEOa4UX%2BPtsFGAX1xr1S5rTJnC6Y4bNseALBUEjEvO58wxOidf2ApkIgMuRvY4tn%2BaBR9McmjhYFTeOtaZJyztPwPnJPWZ4hRaGCViAE6RNrIjKUY0ZAaIVBTd6sZjuSUSmH8scVfSE4i%2BYSQKvdy7VPqKuIvI5we61tMIggCXejpy%2BhN7SXGXkg2kZxyQjhFVWhkyskKIgYjmAICF4FRFtcfGUuX%2BffRPUNIPvl8SI8%2BWsncN%2FtXhCUYtHxDYFEYp9FOI%2FYZR3HoMOZYRcVMdxmpMswmcr7wgY6pgF1zv0XldSnqW2EOyOw8u5QlcnPOGqpaUec1bevnLLJAbiWhsf1MsX3OmBz5jm9KHFVLGoCXgw6JHH0iiTklvpr%2FJp51bVvLkAET5C1iIDQaGllZpY%2FfjUG5QV4rGk48ljaUKDp9g6scb0OIwzFPMnEIEJs5FNxngkzXbVNSjJ5iSRaIe3WWaDHACC00WDEd%2B8FwGuM9KvE3DsiIBSzp5ov%2BzBwTdqd&X-Amz-Signature=6dabba99b21eefac81493bc76184932d4d195210a7cc5f28db21245ad5c161f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLTLIKC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzo6CsBBZN1A79Ck3%2BEQzjVSrNAYmjPfaPMsKGW3ebsAiBH5IhjC5tiyvhUmoFWOGa4hURRgYioBKp0NvaiqpGSfyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLlRwXmeBbYw7LNRnKtwDzeKDdIDuH6y9pkdV6kg3TTzlPF49J7WLqTRt3eGQDI%2B8p0GJ4%2BUAlHYv79Pu7uC0PyGOwjPKTyrKPO5OYFQTz630oNapWUyi6BKV%2FULm5q79VlSWRfbCjiwFnG5GMpe1lvyzQb4wUI7WiwZyyqpJHsVddcP4L1p2haz1SJj8WOatibNhFW3Y9IYkxA%2FyhITfv7UkTSOaowKWCRwRaHKkY8jGlKiG9aoWMtdXQIHLI7yCd0A0TACI3d4zIUN6XHc1N6q5ZgLuvcIYz8tNBTvg0ShgLCHJ8VlAVY5kvhz0QiejvIrFbmn%2F4IG5fl3wwuxFk0tyY1rZhi0%2Bd1GGplXwcVLaX6EnhZA4NEOa4UX%2BPtsFGAX1xr1S5rTJnC6Y4bNseALBUEjEvO58wxOidf2ApkIgMuRvY4tn%2BaBR9McmjhYFTeOtaZJyztPwPnJPWZ4hRaGCViAE6RNrIjKUY0ZAaIVBTd6sZjuSUSmH8scVfSE4i%2BYSQKvdy7VPqKuIvI5we61tMIggCXejpy%2BhN7SXGXkg2kZxyQjhFVWhkyskKIgYjmAICF4FRFtcfGUuX%2BffRPUNIPvl8SI8%2BWsncN%2FtXhCUYtHxDYFEYp9FOI%2FYZR3HoMOZYRcVMdxmpMswmcr7wgY6pgF1zv0XldSnqW2EOyOw8u5QlcnPOGqpaUec1bevnLLJAbiWhsf1MsX3OmBz5jm9KHFVLGoCXgw6JHH0iiTklvpr%2FJp51bVvLkAET5C1iIDQaGllZpY%2FfjUG5QV4rGk48ljaUKDp9g6scb0OIwzFPMnEIEJs5FNxngkzXbVNSjJ5iSRaIe3WWaDHACC00WDEd%2B8FwGuM9KvE3DsiIBSzp5ov%2BzBwTdqd&X-Amz-Signature=8933a78b0edbaaa08569ec194d78bb16f69bf53324fe055b5cd71fef52324315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLTLIKC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzo6CsBBZN1A79Ck3%2BEQzjVSrNAYmjPfaPMsKGW3ebsAiBH5IhjC5tiyvhUmoFWOGa4hURRgYioBKp0NvaiqpGSfyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLlRwXmeBbYw7LNRnKtwDzeKDdIDuH6y9pkdV6kg3TTzlPF49J7WLqTRt3eGQDI%2B8p0GJ4%2BUAlHYv79Pu7uC0PyGOwjPKTyrKPO5OYFQTz630oNapWUyi6BKV%2FULm5q79VlSWRfbCjiwFnG5GMpe1lvyzQb4wUI7WiwZyyqpJHsVddcP4L1p2haz1SJj8WOatibNhFW3Y9IYkxA%2FyhITfv7UkTSOaowKWCRwRaHKkY8jGlKiG9aoWMtdXQIHLI7yCd0A0TACI3d4zIUN6XHc1N6q5ZgLuvcIYz8tNBTvg0ShgLCHJ8VlAVY5kvhz0QiejvIrFbmn%2F4IG5fl3wwuxFk0tyY1rZhi0%2Bd1GGplXwcVLaX6EnhZA4NEOa4UX%2BPtsFGAX1xr1S5rTJnC6Y4bNseALBUEjEvO58wxOidf2ApkIgMuRvY4tn%2BaBR9McmjhYFTeOtaZJyztPwPnJPWZ4hRaGCViAE6RNrIjKUY0ZAaIVBTd6sZjuSUSmH8scVfSE4i%2BYSQKvdy7VPqKuIvI5we61tMIggCXejpy%2BhN7SXGXkg2kZxyQjhFVWhkyskKIgYjmAICF4FRFtcfGUuX%2BffRPUNIPvl8SI8%2BWsncN%2FtXhCUYtHxDYFEYp9FOI%2FYZR3HoMOZYRcVMdxmpMswmcr7wgY6pgF1zv0XldSnqW2EOyOw8u5QlcnPOGqpaUec1bevnLLJAbiWhsf1MsX3OmBz5jm9KHFVLGoCXgw6JHH0iiTklvpr%2FJp51bVvLkAET5C1iIDQaGllZpY%2FfjUG5QV4rGk48ljaUKDp9g6scb0OIwzFPMnEIEJs5FNxngkzXbVNSjJ5iSRaIe3WWaDHACC00WDEd%2B8FwGuM9KvE3DsiIBSzp5ov%2BzBwTdqd&X-Amz-Signature=44dcde2b7b27975105cbc4987a059297dfe713f726b8efd5b9bfaf92d95d4314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
