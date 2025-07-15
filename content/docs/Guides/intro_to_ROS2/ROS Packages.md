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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMEU4KF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHm9CH%2BvPz8YidOeal7fqO942FPJPyjrpe0optWRqM%2FxAiEAlJ8z3%2Fn8QHx%2Fy62OUSAWIfgObVMOaUWP4JRKbTIkbUIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOezjgWOC%2BTCqY9UCircAyM5qAZD7uNWUxTZ96BNZyAuNyL3GwIt4GvAzgqDR2HnrVWvDdXq9CMPBnTc3%2Bwnhc%2BDLC3%2BTPN5uvgGdCGyqMDDGGebuXW13wExu3HH3R2s6%2BM6g7SWM0e7SHy0q4TNRnGaab%2FsBCIgkItzQh0VYDrA%2FZ%2BA%2Fsex2yhE0f0N8b64cQ7ln6m2p32s%2Bqk19eKeLAtd3SoO6%2BkuV2mNNlqWcOyyC%2BzGPInWrKDzFBr6da1vmYC9TPEjUO9s%2B9nnAV2FaH607ifE07%2BoiXyqr1ieKnxR8KCOha3ybQ69i8g7%2ByDgA8kuL1PrKSn8uMpPOtfCZZd45Tm6bEchUJViPePI8A6T%2B9CirScOvzHWxQrilEjuIcfwFZai5E19iN5ukD1tmSL2Qun1n4UIU%2FGkIJsFEzw6XhJpLBzvyVOY8ns%2BmPI2x7sOLtd5rEzmmWM%2FkkhyZyoPJYw4dao89PDmpsEODicS6Fr2vbhPgo0%2FWPD12JjAm9a92UG0md0UifkMmGhc%2Fny6BGbk6q6iKPy0Zb5yNdyzsp5zVi7zyTQ0ysLufdxkkrXRYQ%2Fec%2Fo62Zw3NAYBgGRzvx4MTKvlgHRzUplt%2Bw0viZMEUaf5vE5HAOJd%2BFm4eIRdlkDvbLSklU8FMLH%2B1sMGOqUBVIiY5uno2T2v5Nx6snm28FGUaBV3iz1DW2z0AHQtFfnCY1wAImQhZnFZw6N6cy%2FdK6uhz1X8jNnjmt1Eyybxnu%2BJCPg23yiTxaaqYeKo5Xd1A55RTRH7iBflFdT%2F5Xzsxb09JXYCgQUCXobqtiUJVbeKGqotAj34vzkXqAvpGbKgyA%2B%2FiAcETQS6loXqhXE0UCtHl2kNmnTlj9yBwzuJ5zoOYt9e&X-Amz-Signature=b1b1572a72c45a068365063977a1be66522aa331f1745b0341f22410681f9f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMEU4KF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHm9CH%2BvPz8YidOeal7fqO942FPJPyjrpe0optWRqM%2FxAiEAlJ8z3%2Fn8QHx%2Fy62OUSAWIfgObVMOaUWP4JRKbTIkbUIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOezjgWOC%2BTCqY9UCircAyM5qAZD7uNWUxTZ96BNZyAuNyL3GwIt4GvAzgqDR2HnrVWvDdXq9CMPBnTc3%2Bwnhc%2BDLC3%2BTPN5uvgGdCGyqMDDGGebuXW13wExu3HH3R2s6%2BM6g7SWM0e7SHy0q4TNRnGaab%2FsBCIgkItzQh0VYDrA%2FZ%2BA%2Fsex2yhE0f0N8b64cQ7ln6m2p32s%2Bqk19eKeLAtd3SoO6%2BkuV2mNNlqWcOyyC%2BzGPInWrKDzFBr6da1vmYC9TPEjUO9s%2B9nnAV2FaH607ifE07%2BoiXyqr1ieKnxR8KCOha3ybQ69i8g7%2ByDgA8kuL1PrKSn8uMpPOtfCZZd45Tm6bEchUJViPePI8A6T%2B9CirScOvzHWxQrilEjuIcfwFZai5E19iN5ukD1tmSL2Qun1n4UIU%2FGkIJsFEzw6XhJpLBzvyVOY8ns%2BmPI2x7sOLtd5rEzmmWM%2FkkhyZyoPJYw4dao89PDmpsEODicS6Fr2vbhPgo0%2FWPD12JjAm9a92UG0md0UifkMmGhc%2Fny6BGbk6q6iKPy0Zb5yNdyzsp5zVi7zyTQ0ysLufdxkkrXRYQ%2Fec%2Fo62Zw3NAYBgGRzvx4MTKvlgHRzUplt%2Bw0viZMEUaf5vE5HAOJd%2BFm4eIRdlkDvbLSklU8FMLH%2B1sMGOqUBVIiY5uno2T2v5Nx6snm28FGUaBV3iz1DW2z0AHQtFfnCY1wAImQhZnFZw6N6cy%2FdK6uhz1X8jNnjmt1Eyybxnu%2BJCPg23yiTxaaqYeKo5Xd1A55RTRH7iBflFdT%2F5Xzsxb09JXYCgQUCXobqtiUJVbeKGqotAj34vzkXqAvpGbKgyA%2B%2FiAcETQS6loXqhXE0UCtHl2kNmnTlj9yBwzuJ5zoOYt9e&X-Amz-Signature=7fa7da9300959c8b7088cebf7b16185f105f903cdb5c9965f9b7172c4e2a05a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMEU4KF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHm9CH%2BvPz8YidOeal7fqO942FPJPyjrpe0optWRqM%2FxAiEAlJ8z3%2Fn8QHx%2Fy62OUSAWIfgObVMOaUWP4JRKbTIkbUIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOezjgWOC%2BTCqY9UCircAyM5qAZD7uNWUxTZ96BNZyAuNyL3GwIt4GvAzgqDR2HnrVWvDdXq9CMPBnTc3%2Bwnhc%2BDLC3%2BTPN5uvgGdCGyqMDDGGebuXW13wExu3HH3R2s6%2BM6g7SWM0e7SHy0q4TNRnGaab%2FsBCIgkItzQh0VYDrA%2FZ%2BA%2Fsex2yhE0f0N8b64cQ7ln6m2p32s%2Bqk19eKeLAtd3SoO6%2BkuV2mNNlqWcOyyC%2BzGPInWrKDzFBr6da1vmYC9TPEjUO9s%2B9nnAV2FaH607ifE07%2BoiXyqr1ieKnxR8KCOha3ybQ69i8g7%2ByDgA8kuL1PrKSn8uMpPOtfCZZd45Tm6bEchUJViPePI8A6T%2B9CirScOvzHWxQrilEjuIcfwFZai5E19iN5ukD1tmSL2Qun1n4UIU%2FGkIJsFEzw6XhJpLBzvyVOY8ns%2BmPI2x7sOLtd5rEzmmWM%2FkkhyZyoPJYw4dao89PDmpsEODicS6Fr2vbhPgo0%2FWPD12JjAm9a92UG0md0UifkMmGhc%2Fny6BGbk6q6iKPy0Zb5yNdyzsp5zVi7zyTQ0ysLufdxkkrXRYQ%2Fec%2Fo62Zw3NAYBgGRzvx4MTKvlgHRzUplt%2Bw0viZMEUaf5vE5HAOJd%2BFm4eIRdlkDvbLSklU8FMLH%2B1sMGOqUBVIiY5uno2T2v5Nx6snm28FGUaBV3iz1DW2z0AHQtFfnCY1wAImQhZnFZw6N6cy%2FdK6uhz1X8jNnjmt1Eyybxnu%2BJCPg23yiTxaaqYeKo5Xd1A55RTRH7iBflFdT%2F5Xzsxb09JXYCgQUCXobqtiUJVbeKGqotAj34vzkXqAvpGbKgyA%2B%2FiAcETQS6loXqhXE0UCtHl2kNmnTlj9yBwzuJ5zoOYt9e&X-Amz-Signature=65509f1f95c6841f4a85fa7c70a793acc71f2f5ebec608d848aee102569e2758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMEU4KF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHm9CH%2BvPz8YidOeal7fqO942FPJPyjrpe0optWRqM%2FxAiEAlJ8z3%2Fn8QHx%2Fy62OUSAWIfgObVMOaUWP4JRKbTIkbUIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOezjgWOC%2BTCqY9UCircAyM5qAZD7uNWUxTZ96BNZyAuNyL3GwIt4GvAzgqDR2HnrVWvDdXq9CMPBnTc3%2Bwnhc%2BDLC3%2BTPN5uvgGdCGyqMDDGGebuXW13wExu3HH3R2s6%2BM6g7SWM0e7SHy0q4TNRnGaab%2FsBCIgkItzQh0VYDrA%2FZ%2BA%2Fsex2yhE0f0N8b64cQ7ln6m2p32s%2Bqk19eKeLAtd3SoO6%2BkuV2mNNlqWcOyyC%2BzGPInWrKDzFBr6da1vmYC9TPEjUO9s%2B9nnAV2FaH607ifE07%2BoiXyqr1ieKnxR8KCOha3ybQ69i8g7%2ByDgA8kuL1PrKSn8uMpPOtfCZZd45Tm6bEchUJViPePI8A6T%2B9CirScOvzHWxQrilEjuIcfwFZai5E19iN5ukD1tmSL2Qun1n4UIU%2FGkIJsFEzw6XhJpLBzvyVOY8ns%2BmPI2x7sOLtd5rEzmmWM%2FkkhyZyoPJYw4dao89PDmpsEODicS6Fr2vbhPgo0%2FWPD12JjAm9a92UG0md0UifkMmGhc%2Fny6BGbk6q6iKPy0Zb5yNdyzsp5zVi7zyTQ0ysLufdxkkrXRYQ%2Fec%2Fo62Zw3NAYBgGRzvx4MTKvlgHRzUplt%2Bw0viZMEUaf5vE5HAOJd%2BFm4eIRdlkDvbLSklU8FMLH%2B1sMGOqUBVIiY5uno2T2v5Nx6snm28FGUaBV3iz1DW2z0AHQtFfnCY1wAImQhZnFZw6N6cy%2FdK6uhz1X8jNnjmt1Eyybxnu%2BJCPg23yiTxaaqYeKo5Xd1A55RTRH7iBflFdT%2F5Xzsxb09JXYCgQUCXobqtiUJVbeKGqotAj34vzkXqAvpGbKgyA%2B%2FiAcETQS6loXqhXE0UCtHl2kNmnTlj9yBwzuJ5zoOYt9e&X-Amz-Signature=44994d0bb4ae50a69da75c4f88c4fd3117d6448c8c79a5c3fa8049c830de004b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMEU4KF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHm9CH%2BvPz8YidOeal7fqO942FPJPyjrpe0optWRqM%2FxAiEAlJ8z3%2Fn8QHx%2Fy62OUSAWIfgObVMOaUWP4JRKbTIkbUIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOezjgWOC%2BTCqY9UCircAyM5qAZD7uNWUxTZ96BNZyAuNyL3GwIt4GvAzgqDR2HnrVWvDdXq9CMPBnTc3%2Bwnhc%2BDLC3%2BTPN5uvgGdCGyqMDDGGebuXW13wExu3HH3R2s6%2BM6g7SWM0e7SHy0q4TNRnGaab%2FsBCIgkItzQh0VYDrA%2FZ%2BA%2Fsex2yhE0f0N8b64cQ7ln6m2p32s%2Bqk19eKeLAtd3SoO6%2BkuV2mNNlqWcOyyC%2BzGPInWrKDzFBr6da1vmYC9TPEjUO9s%2B9nnAV2FaH607ifE07%2BoiXyqr1ieKnxR8KCOha3ybQ69i8g7%2ByDgA8kuL1PrKSn8uMpPOtfCZZd45Tm6bEchUJViPePI8A6T%2B9CirScOvzHWxQrilEjuIcfwFZai5E19iN5ukD1tmSL2Qun1n4UIU%2FGkIJsFEzw6XhJpLBzvyVOY8ns%2BmPI2x7sOLtd5rEzmmWM%2FkkhyZyoPJYw4dao89PDmpsEODicS6Fr2vbhPgo0%2FWPD12JjAm9a92UG0md0UifkMmGhc%2Fny6BGbk6q6iKPy0Zb5yNdyzsp5zVi7zyTQ0ysLufdxkkrXRYQ%2Fec%2Fo62Zw3NAYBgGRzvx4MTKvlgHRzUplt%2Bw0viZMEUaf5vE5HAOJd%2BFm4eIRdlkDvbLSklU8FMLH%2B1sMGOqUBVIiY5uno2T2v5Nx6snm28FGUaBV3iz1DW2z0AHQtFfnCY1wAImQhZnFZw6N6cy%2FdK6uhz1X8jNnjmt1Eyybxnu%2BJCPg23yiTxaaqYeKo5Xd1A55RTRH7iBflFdT%2F5Xzsxb09JXYCgQUCXobqtiUJVbeKGqotAj34vzkXqAvpGbKgyA%2B%2FiAcETQS6loXqhXE0UCtHl2kNmnTlj9yBwzuJ5zoOYt9e&X-Amz-Signature=beb870233dae478d9ff49bf863209e172a36e1d6909c30c96c6d1adfb7ba7f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMEU4KF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHm9CH%2BvPz8YidOeal7fqO942FPJPyjrpe0optWRqM%2FxAiEAlJ8z3%2Fn8QHx%2Fy62OUSAWIfgObVMOaUWP4JRKbTIkbUIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOezjgWOC%2BTCqY9UCircAyM5qAZD7uNWUxTZ96BNZyAuNyL3GwIt4GvAzgqDR2HnrVWvDdXq9CMPBnTc3%2Bwnhc%2BDLC3%2BTPN5uvgGdCGyqMDDGGebuXW13wExu3HH3R2s6%2BM6g7SWM0e7SHy0q4TNRnGaab%2FsBCIgkItzQh0VYDrA%2FZ%2BA%2Fsex2yhE0f0N8b64cQ7ln6m2p32s%2Bqk19eKeLAtd3SoO6%2BkuV2mNNlqWcOyyC%2BzGPInWrKDzFBr6da1vmYC9TPEjUO9s%2B9nnAV2FaH607ifE07%2BoiXyqr1ieKnxR8KCOha3ybQ69i8g7%2ByDgA8kuL1PrKSn8uMpPOtfCZZd45Tm6bEchUJViPePI8A6T%2B9CirScOvzHWxQrilEjuIcfwFZai5E19iN5ukD1tmSL2Qun1n4UIU%2FGkIJsFEzw6XhJpLBzvyVOY8ns%2BmPI2x7sOLtd5rEzmmWM%2FkkhyZyoPJYw4dao89PDmpsEODicS6Fr2vbhPgo0%2FWPD12JjAm9a92UG0md0UifkMmGhc%2Fny6BGbk6q6iKPy0Zb5yNdyzsp5zVi7zyTQ0ysLufdxkkrXRYQ%2Fec%2Fo62Zw3NAYBgGRzvx4MTKvlgHRzUplt%2Bw0viZMEUaf5vE5HAOJd%2BFm4eIRdlkDvbLSklU8FMLH%2B1sMGOqUBVIiY5uno2T2v5Nx6snm28FGUaBV3iz1DW2z0AHQtFfnCY1wAImQhZnFZw6N6cy%2FdK6uhz1X8jNnjmt1Eyybxnu%2BJCPg23yiTxaaqYeKo5Xd1A55RTRH7iBflFdT%2F5Xzsxb09JXYCgQUCXobqtiUJVbeKGqotAj34vzkXqAvpGbKgyA%2B%2FiAcETQS6loXqhXE0UCtHl2kNmnTlj9yBwzuJ5zoOYt9e&X-Amz-Signature=0ef7f3b0459ba5a4d2d753e31959f1e4571817b40b4d8044bef2a36edd94c1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMEU4KF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHm9CH%2BvPz8YidOeal7fqO942FPJPyjrpe0optWRqM%2FxAiEAlJ8z3%2Fn8QHx%2Fy62OUSAWIfgObVMOaUWP4JRKbTIkbUIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOezjgWOC%2BTCqY9UCircAyM5qAZD7uNWUxTZ96BNZyAuNyL3GwIt4GvAzgqDR2HnrVWvDdXq9CMPBnTc3%2Bwnhc%2BDLC3%2BTPN5uvgGdCGyqMDDGGebuXW13wExu3HH3R2s6%2BM6g7SWM0e7SHy0q4TNRnGaab%2FsBCIgkItzQh0VYDrA%2FZ%2BA%2Fsex2yhE0f0N8b64cQ7ln6m2p32s%2Bqk19eKeLAtd3SoO6%2BkuV2mNNlqWcOyyC%2BzGPInWrKDzFBr6da1vmYC9TPEjUO9s%2B9nnAV2FaH607ifE07%2BoiXyqr1ieKnxR8KCOha3ybQ69i8g7%2ByDgA8kuL1PrKSn8uMpPOtfCZZd45Tm6bEchUJViPePI8A6T%2B9CirScOvzHWxQrilEjuIcfwFZai5E19iN5ukD1tmSL2Qun1n4UIU%2FGkIJsFEzw6XhJpLBzvyVOY8ns%2BmPI2x7sOLtd5rEzmmWM%2FkkhyZyoPJYw4dao89PDmpsEODicS6Fr2vbhPgo0%2FWPD12JjAm9a92UG0md0UifkMmGhc%2Fny6BGbk6q6iKPy0Zb5yNdyzsp5zVi7zyTQ0ysLufdxkkrXRYQ%2Fec%2Fo62Zw3NAYBgGRzvx4MTKvlgHRzUplt%2Bw0viZMEUaf5vE5HAOJd%2BFm4eIRdlkDvbLSklU8FMLH%2B1sMGOqUBVIiY5uno2T2v5Nx6snm28FGUaBV3iz1DW2z0AHQtFfnCY1wAImQhZnFZw6N6cy%2FdK6uhz1X8jNnjmt1Eyybxnu%2BJCPg23yiTxaaqYeKo5Xd1A55RTRH7iBflFdT%2F5Xzsxb09JXYCgQUCXobqtiUJVbeKGqotAj34vzkXqAvpGbKgyA%2B%2FiAcETQS6loXqhXE0UCtHl2kNmnTlj9yBwzuJ5zoOYt9e&X-Amz-Signature=a267dbed314ef37383e82c0ac8b0512384b2711b4ae7c2a639af3ecd6156df5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
