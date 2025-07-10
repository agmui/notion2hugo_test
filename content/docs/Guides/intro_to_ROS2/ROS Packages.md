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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XNA624%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF19KM6Ahm1lzDqhfrDeGOqIxtClwFd5joQbcpphluAAiEAplRHBSGuAOU7T6KAtNHJZ6YzBFN4%2Fw1kDb8QVsqcUxIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fkVQByvEM7FI9aircAzAIfAn%2BVQTiCBGQe38WnOe6Vh5edcUapfuN3iK1kTRiPH9vwCCRXhcLaOYxS1CnLC%2BRRrvPJDhqHLCx1K3OpEEWXGxtMqvDT%2B1fUFbVwdauLRhgTIvkbQIADryxoMJSL9t0dikA8FHnVMUXWoh8AaTmKwILBKvytr73VSkp4pJSyC50BRyzB890I3WcHD%2Fd0jFkXmdYf19HtSAPphSJST33elMp%2FWkfgFUqqdYyt0pNC1%2F0kulsTdUJ190%2BxO2scEj2MW1RXyyfxOm7RwVmeEHqVOkx8FwmGXlh6THLuIAiFiHkXxurov5WfS6cdcydnxUfCXvg49W06fxoU8O5dPTj%2BSxi8cFoQf%2F0Obxc4o1qT5HgxxJViyvx9W7BKtx9o9t003KmQn4Xf5tIIAjH6CT1sL7Vxfdgr3OajY6JtAd%2FJ1WeyiZfLvsGdIfCVNTwA3N712qlsQQw4ElvNkUIdomO7k6OFsEnKH%2FFKZF%2Bedw7g4sSEkjvKhz0AfTyT7wlrUDPhVuZ3w1t0fAfYHz%2B99GAIuzaN9ToAZurpWGd3ozw2w%2BN7UByKB1yz2fcw2msgcjymSkNdaXiIgvZwYTdeQhi04cTUQcGi5w7scZ%2F4sS8PSg8IjQMPSDWEMfYMMLNwMMGOqUBSUXy3DC4cAgoxM8suT%2F7%2FyC0Quk9jZmciXLB7oseI3QaNtd3Yh68Zxm5JcewYBUxhyIM5TZ26pNqc7BDO4BWj3yLD%2FlXE6GIIFZDqzwmekK3emTixH4WBy3k1%2FHTjBd5DuxajFqKwhETGcGLlo1kHEmS1%2Bn31BwN5reGvDWC8QWIpzKDqBeXb4diI%2FCSo1SzvQbvT1PDFtDDWV3uCuxL7Lzjm08U&X-Amz-Signature=165b51e0d2efd19f1f98c96841be3e7569b49650690115af33f7d7e372c5dc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XNA624%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF19KM6Ahm1lzDqhfrDeGOqIxtClwFd5joQbcpphluAAiEAplRHBSGuAOU7T6KAtNHJZ6YzBFN4%2Fw1kDb8QVsqcUxIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fkVQByvEM7FI9aircAzAIfAn%2BVQTiCBGQe38WnOe6Vh5edcUapfuN3iK1kTRiPH9vwCCRXhcLaOYxS1CnLC%2BRRrvPJDhqHLCx1K3OpEEWXGxtMqvDT%2B1fUFbVwdauLRhgTIvkbQIADryxoMJSL9t0dikA8FHnVMUXWoh8AaTmKwILBKvytr73VSkp4pJSyC50BRyzB890I3WcHD%2Fd0jFkXmdYf19HtSAPphSJST33elMp%2FWkfgFUqqdYyt0pNC1%2F0kulsTdUJ190%2BxO2scEj2MW1RXyyfxOm7RwVmeEHqVOkx8FwmGXlh6THLuIAiFiHkXxurov5WfS6cdcydnxUfCXvg49W06fxoU8O5dPTj%2BSxi8cFoQf%2F0Obxc4o1qT5HgxxJViyvx9W7BKtx9o9t003KmQn4Xf5tIIAjH6CT1sL7Vxfdgr3OajY6JtAd%2FJ1WeyiZfLvsGdIfCVNTwA3N712qlsQQw4ElvNkUIdomO7k6OFsEnKH%2FFKZF%2Bedw7g4sSEkjvKhz0AfTyT7wlrUDPhVuZ3w1t0fAfYHz%2B99GAIuzaN9ToAZurpWGd3ozw2w%2BN7UByKB1yz2fcw2msgcjymSkNdaXiIgvZwYTdeQhi04cTUQcGi5w7scZ%2F4sS8PSg8IjQMPSDWEMfYMMLNwMMGOqUBSUXy3DC4cAgoxM8suT%2F7%2FyC0Quk9jZmciXLB7oseI3QaNtd3Yh68Zxm5JcewYBUxhyIM5TZ26pNqc7BDO4BWj3yLD%2FlXE6GIIFZDqzwmekK3emTixH4WBy3k1%2FHTjBd5DuxajFqKwhETGcGLlo1kHEmS1%2Bn31BwN5reGvDWC8QWIpzKDqBeXb4diI%2FCSo1SzvQbvT1PDFtDDWV3uCuxL7Lzjm08U&X-Amz-Signature=93f1b69f3d085285e04ac15db0c46e25704cc44e65bfa0dc95cc9f0ee06fec0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XNA624%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF19KM6Ahm1lzDqhfrDeGOqIxtClwFd5joQbcpphluAAiEAplRHBSGuAOU7T6KAtNHJZ6YzBFN4%2Fw1kDb8QVsqcUxIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fkVQByvEM7FI9aircAzAIfAn%2BVQTiCBGQe38WnOe6Vh5edcUapfuN3iK1kTRiPH9vwCCRXhcLaOYxS1CnLC%2BRRrvPJDhqHLCx1K3OpEEWXGxtMqvDT%2B1fUFbVwdauLRhgTIvkbQIADryxoMJSL9t0dikA8FHnVMUXWoh8AaTmKwILBKvytr73VSkp4pJSyC50BRyzB890I3WcHD%2Fd0jFkXmdYf19HtSAPphSJST33elMp%2FWkfgFUqqdYyt0pNC1%2F0kulsTdUJ190%2BxO2scEj2MW1RXyyfxOm7RwVmeEHqVOkx8FwmGXlh6THLuIAiFiHkXxurov5WfS6cdcydnxUfCXvg49W06fxoU8O5dPTj%2BSxi8cFoQf%2F0Obxc4o1qT5HgxxJViyvx9W7BKtx9o9t003KmQn4Xf5tIIAjH6CT1sL7Vxfdgr3OajY6JtAd%2FJ1WeyiZfLvsGdIfCVNTwA3N712qlsQQw4ElvNkUIdomO7k6OFsEnKH%2FFKZF%2Bedw7g4sSEkjvKhz0AfTyT7wlrUDPhVuZ3w1t0fAfYHz%2B99GAIuzaN9ToAZurpWGd3ozw2w%2BN7UByKB1yz2fcw2msgcjymSkNdaXiIgvZwYTdeQhi04cTUQcGi5w7scZ%2F4sS8PSg8IjQMPSDWEMfYMMLNwMMGOqUBSUXy3DC4cAgoxM8suT%2F7%2FyC0Quk9jZmciXLB7oseI3QaNtd3Yh68Zxm5JcewYBUxhyIM5TZ26pNqc7BDO4BWj3yLD%2FlXE6GIIFZDqzwmekK3emTixH4WBy3k1%2FHTjBd5DuxajFqKwhETGcGLlo1kHEmS1%2Bn31BwN5reGvDWC8QWIpzKDqBeXb4diI%2FCSo1SzvQbvT1PDFtDDWV3uCuxL7Lzjm08U&X-Amz-Signature=eed36dfc2ccc890eb8fc401e27f85767875f880c9d748281649a71e51044f0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XNA624%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF19KM6Ahm1lzDqhfrDeGOqIxtClwFd5joQbcpphluAAiEAplRHBSGuAOU7T6KAtNHJZ6YzBFN4%2Fw1kDb8QVsqcUxIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fkVQByvEM7FI9aircAzAIfAn%2BVQTiCBGQe38WnOe6Vh5edcUapfuN3iK1kTRiPH9vwCCRXhcLaOYxS1CnLC%2BRRrvPJDhqHLCx1K3OpEEWXGxtMqvDT%2B1fUFbVwdauLRhgTIvkbQIADryxoMJSL9t0dikA8FHnVMUXWoh8AaTmKwILBKvytr73VSkp4pJSyC50BRyzB890I3WcHD%2Fd0jFkXmdYf19HtSAPphSJST33elMp%2FWkfgFUqqdYyt0pNC1%2F0kulsTdUJ190%2BxO2scEj2MW1RXyyfxOm7RwVmeEHqVOkx8FwmGXlh6THLuIAiFiHkXxurov5WfS6cdcydnxUfCXvg49W06fxoU8O5dPTj%2BSxi8cFoQf%2F0Obxc4o1qT5HgxxJViyvx9W7BKtx9o9t003KmQn4Xf5tIIAjH6CT1sL7Vxfdgr3OajY6JtAd%2FJ1WeyiZfLvsGdIfCVNTwA3N712qlsQQw4ElvNkUIdomO7k6OFsEnKH%2FFKZF%2Bedw7g4sSEkjvKhz0AfTyT7wlrUDPhVuZ3w1t0fAfYHz%2B99GAIuzaN9ToAZurpWGd3ozw2w%2BN7UByKB1yz2fcw2msgcjymSkNdaXiIgvZwYTdeQhi04cTUQcGi5w7scZ%2F4sS8PSg8IjQMPSDWEMfYMMLNwMMGOqUBSUXy3DC4cAgoxM8suT%2F7%2FyC0Quk9jZmciXLB7oseI3QaNtd3Yh68Zxm5JcewYBUxhyIM5TZ26pNqc7BDO4BWj3yLD%2FlXE6GIIFZDqzwmekK3emTixH4WBy3k1%2FHTjBd5DuxajFqKwhETGcGLlo1kHEmS1%2Bn31BwN5reGvDWC8QWIpzKDqBeXb4diI%2FCSo1SzvQbvT1PDFtDDWV3uCuxL7Lzjm08U&X-Amz-Signature=8085b9458b8ff1227c80cb62aa903d138ec9c52fa6ed4ecccf0f37c97085cf9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XNA624%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF19KM6Ahm1lzDqhfrDeGOqIxtClwFd5joQbcpphluAAiEAplRHBSGuAOU7T6KAtNHJZ6YzBFN4%2Fw1kDb8QVsqcUxIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fkVQByvEM7FI9aircAzAIfAn%2BVQTiCBGQe38WnOe6Vh5edcUapfuN3iK1kTRiPH9vwCCRXhcLaOYxS1CnLC%2BRRrvPJDhqHLCx1K3OpEEWXGxtMqvDT%2B1fUFbVwdauLRhgTIvkbQIADryxoMJSL9t0dikA8FHnVMUXWoh8AaTmKwILBKvytr73VSkp4pJSyC50BRyzB890I3WcHD%2Fd0jFkXmdYf19HtSAPphSJST33elMp%2FWkfgFUqqdYyt0pNC1%2F0kulsTdUJ190%2BxO2scEj2MW1RXyyfxOm7RwVmeEHqVOkx8FwmGXlh6THLuIAiFiHkXxurov5WfS6cdcydnxUfCXvg49W06fxoU8O5dPTj%2BSxi8cFoQf%2F0Obxc4o1qT5HgxxJViyvx9W7BKtx9o9t003KmQn4Xf5tIIAjH6CT1sL7Vxfdgr3OajY6JtAd%2FJ1WeyiZfLvsGdIfCVNTwA3N712qlsQQw4ElvNkUIdomO7k6OFsEnKH%2FFKZF%2Bedw7g4sSEkjvKhz0AfTyT7wlrUDPhVuZ3w1t0fAfYHz%2B99GAIuzaN9ToAZurpWGd3ozw2w%2BN7UByKB1yz2fcw2msgcjymSkNdaXiIgvZwYTdeQhi04cTUQcGi5w7scZ%2F4sS8PSg8IjQMPSDWEMfYMMLNwMMGOqUBSUXy3DC4cAgoxM8suT%2F7%2FyC0Quk9jZmciXLB7oseI3QaNtd3Yh68Zxm5JcewYBUxhyIM5TZ26pNqc7BDO4BWj3yLD%2FlXE6GIIFZDqzwmekK3emTixH4WBy3k1%2FHTjBd5DuxajFqKwhETGcGLlo1kHEmS1%2Bn31BwN5reGvDWC8QWIpzKDqBeXb4diI%2FCSo1SzvQbvT1PDFtDDWV3uCuxL7Lzjm08U&X-Amz-Signature=475f05f927079ef8a8abf05b72a227f1275517dd463f2e56d2cb9be3dfe9e562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XNA624%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF19KM6Ahm1lzDqhfrDeGOqIxtClwFd5joQbcpphluAAiEAplRHBSGuAOU7T6KAtNHJZ6YzBFN4%2Fw1kDb8QVsqcUxIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fkVQByvEM7FI9aircAzAIfAn%2BVQTiCBGQe38WnOe6Vh5edcUapfuN3iK1kTRiPH9vwCCRXhcLaOYxS1CnLC%2BRRrvPJDhqHLCx1K3OpEEWXGxtMqvDT%2B1fUFbVwdauLRhgTIvkbQIADryxoMJSL9t0dikA8FHnVMUXWoh8AaTmKwILBKvytr73VSkp4pJSyC50BRyzB890I3WcHD%2Fd0jFkXmdYf19HtSAPphSJST33elMp%2FWkfgFUqqdYyt0pNC1%2F0kulsTdUJ190%2BxO2scEj2MW1RXyyfxOm7RwVmeEHqVOkx8FwmGXlh6THLuIAiFiHkXxurov5WfS6cdcydnxUfCXvg49W06fxoU8O5dPTj%2BSxi8cFoQf%2F0Obxc4o1qT5HgxxJViyvx9W7BKtx9o9t003KmQn4Xf5tIIAjH6CT1sL7Vxfdgr3OajY6JtAd%2FJ1WeyiZfLvsGdIfCVNTwA3N712qlsQQw4ElvNkUIdomO7k6OFsEnKH%2FFKZF%2Bedw7g4sSEkjvKhz0AfTyT7wlrUDPhVuZ3w1t0fAfYHz%2B99GAIuzaN9ToAZurpWGd3ozw2w%2BN7UByKB1yz2fcw2msgcjymSkNdaXiIgvZwYTdeQhi04cTUQcGi5w7scZ%2F4sS8PSg8IjQMPSDWEMfYMMLNwMMGOqUBSUXy3DC4cAgoxM8suT%2F7%2FyC0Quk9jZmciXLB7oseI3QaNtd3Yh68Zxm5JcewYBUxhyIM5TZ26pNqc7BDO4BWj3yLD%2FlXE6GIIFZDqzwmekK3emTixH4WBy3k1%2FHTjBd5DuxajFqKwhETGcGLlo1kHEmS1%2Bn31BwN5reGvDWC8QWIpzKDqBeXb4diI%2FCSo1SzvQbvT1PDFtDDWV3uCuxL7Lzjm08U&X-Amz-Signature=8291ef3df95801c3c2158d2fed76171713bbc65fecc8328ad427abf4a6efbc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XNA624%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF19KM6Ahm1lzDqhfrDeGOqIxtClwFd5joQbcpphluAAiEAplRHBSGuAOU7T6KAtNHJZ6YzBFN4%2Fw1kDb8QVsqcUxIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fkVQByvEM7FI9aircAzAIfAn%2BVQTiCBGQe38WnOe6Vh5edcUapfuN3iK1kTRiPH9vwCCRXhcLaOYxS1CnLC%2BRRrvPJDhqHLCx1K3OpEEWXGxtMqvDT%2B1fUFbVwdauLRhgTIvkbQIADryxoMJSL9t0dikA8FHnVMUXWoh8AaTmKwILBKvytr73VSkp4pJSyC50BRyzB890I3WcHD%2Fd0jFkXmdYf19HtSAPphSJST33elMp%2FWkfgFUqqdYyt0pNC1%2F0kulsTdUJ190%2BxO2scEj2MW1RXyyfxOm7RwVmeEHqVOkx8FwmGXlh6THLuIAiFiHkXxurov5WfS6cdcydnxUfCXvg49W06fxoU8O5dPTj%2BSxi8cFoQf%2F0Obxc4o1qT5HgxxJViyvx9W7BKtx9o9t003KmQn4Xf5tIIAjH6CT1sL7Vxfdgr3OajY6JtAd%2FJ1WeyiZfLvsGdIfCVNTwA3N712qlsQQw4ElvNkUIdomO7k6OFsEnKH%2FFKZF%2Bedw7g4sSEkjvKhz0AfTyT7wlrUDPhVuZ3w1t0fAfYHz%2B99GAIuzaN9ToAZurpWGd3ozw2w%2BN7UByKB1yz2fcw2msgcjymSkNdaXiIgvZwYTdeQhi04cTUQcGi5w7scZ%2F4sS8PSg8IjQMPSDWEMfYMMLNwMMGOqUBSUXy3DC4cAgoxM8suT%2F7%2FyC0Quk9jZmciXLB7oseI3QaNtd3Yh68Zxm5JcewYBUxhyIM5TZ26pNqc7BDO4BWj3yLD%2FlXE6GIIFZDqzwmekK3emTixH4WBy3k1%2FHTjBd5DuxajFqKwhETGcGLlo1kHEmS1%2Bn31BwN5reGvDWC8QWIpzKDqBeXb4diI%2FCSo1SzvQbvT1PDFtDDWV3uCuxL7Lzjm08U&X-Amz-Signature=1c6361397ce61dcb2bf4a8b3f474d6bcc3334e30381d933ee6c9957eca3d77ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
