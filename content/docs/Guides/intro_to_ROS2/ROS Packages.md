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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54EDRBM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLrR4klPIdZo5t0CdtmVM%2F5ZSDjxrz4BN6S8wt8%2FkPigIgetJWYHvi6jWxFufPyjtDHLSXweNw37C3ZB4H7Xw2HdwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOac3PJwzQuFrqvr9yrcA9MAobO0qY9OnedP9oKmM8PYN4WnAi2oaJjanxCJUGyLnbeOc0pma6z51feXdhatniX%2BYf8F9sf5O%2Fw1lKqEOQIygFL9Gv8STimaOog2Bi0fK6kxMev71mhqDuhlRve0RbiAwTDdSJlc0DTkFpwj%2FWt796dHuWAyOCQKyYH6Jd%2B2%2BWAdsL%2BTLaAMTsDkpnfR%2B7z2B18KSTy2BWzLAZTZbv%2F5OyDFfalDiQOpFUKLUXbBQcC12rN0nGtag%2F2%2BTS5rqT%2F5NeN%2Btf%2F3%2FZgLG4xnt7ra9AY7bzdSIn6FpZG7zYlWGOuDXLK6qVn6%2BN05PMxNfs9Uk3f3VjbJ7QEldTsjos%2BJNmrV1eL9dLr6osK0YK6r0wLR4gCbKAMM3V6lQIsxm0N0uLyBBfRtMnXhY3sCbkYe1uBkOp9nYl7IIoYies%2F9rWlDAQhhaVstSe0xtgR0FUnhOMs9FWBVZaUVr2pC6XsfwOM%2FC%2Fm2%2BcZ7%2FeeK0nxq1aTzDc8z2dmt4zccJvU9cdFbQb5nnO6fQgwCteSpX4imHrY2EKBY0jnwDEaQgXkwMvqG7%2Fj9jRdFCW%2BfGqEhTBl8LM6gnPW4XUnjlprrOuJ4GF5ELJDb7ya%2FWZwemUFXLiqPmXxu1xiSUre6MO%2BAzMMGOqUBUynKty9OBc2tMaUTQv6OILRZ4Zi6GnqmFrncd2KHqm2d5E42pzccsc4xhRA5PNPVmV4U19kO2Fq8RZ93Zcx3WyAYJTp0EGUw2xIMy0HI5USfd2P1Aqw2FXRWSPP%2FYOmASRgFPqYkQS2mKdTZorpjrAs15QHSHU0FxlNwJsOzmGFIqXvq38s%2FnpERJbofmoPJBwO1TnEIVk3gYDU67WvoAwMmQWxw&X-Amz-Signature=aad8ba61b4bcc1b2e1c2106bf118bb1c77178d85c33dffd33659c358adcf673d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54EDRBM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLrR4klPIdZo5t0CdtmVM%2F5ZSDjxrz4BN6S8wt8%2FkPigIgetJWYHvi6jWxFufPyjtDHLSXweNw37C3ZB4H7Xw2HdwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOac3PJwzQuFrqvr9yrcA9MAobO0qY9OnedP9oKmM8PYN4WnAi2oaJjanxCJUGyLnbeOc0pma6z51feXdhatniX%2BYf8F9sf5O%2Fw1lKqEOQIygFL9Gv8STimaOog2Bi0fK6kxMev71mhqDuhlRve0RbiAwTDdSJlc0DTkFpwj%2FWt796dHuWAyOCQKyYH6Jd%2B2%2BWAdsL%2BTLaAMTsDkpnfR%2B7z2B18KSTy2BWzLAZTZbv%2F5OyDFfalDiQOpFUKLUXbBQcC12rN0nGtag%2F2%2BTS5rqT%2F5NeN%2Btf%2F3%2FZgLG4xnt7ra9AY7bzdSIn6FpZG7zYlWGOuDXLK6qVn6%2BN05PMxNfs9Uk3f3VjbJ7QEldTsjos%2BJNmrV1eL9dLr6osK0YK6r0wLR4gCbKAMM3V6lQIsxm0N0uLyBBfRtMnXhY3sCbkYe1uBkOp9nYl7IIoYies%2F9rWlDAQhhaVstSe0xtgR0FUnhOMs9FWBVZaUVr2pC6XsfwOM%2FC%2Fm2%2BcZ7%2FeeK0nxq1aTzDc8z2dmt4zccJvU9cdFbQb5nnO6fQgwCteSpX4imHrY2EKBY0jnwDEaQgXkwMvqG7%2Fj9jRdFCW%2BfGqEhTBl8LM6gnPW4XUnjlprrOuJ4GF5ELJDb7ya%2FWZwemUFXLiqPmXxu1xiSUre6MO%2BAzMMGOqUBUynKty9OBc2tMaUTQv6OILRZ4Zi6GnqmFrncd2KHqm2d5E42pzccsc4xhRA5PNPVmV4U19kO2Fq8RZ93Zcx3WyAYJTp0EGUw2xIMy0HI5USfd2P1Aqw2FXRWSPP%2FYOmASRgFPqYkQS2mKdTZorpjrAs15QHSHU0FxlNwJsOzmGFIqXvq38s%2FnpERJbofmoPJBwO1TnEIVk3gYDU67WvoAwMmQWxw&X-Amz-Signature=a0b939bb301cd8ea8a67d248d337eab3448b5140e822a4295f10279ab2e0a510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54EDRBM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLrR4klPIdZo5t0CdtmVM%2F5ZSDjxrz4BN6S8wt8%2FkPigIgetJWYHvi6jWxFufPyjtDHLSXweNw37C3ZB4H7Xw2HdwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOac3PJwzQuFrqvr9yrcA9MAobO0qY9OnedP9oKmM8PYN4WnAi2oaJjanxCJUGyLnbeOc0pma6z51feXdhatniX%2BYf8F9sf5O%2Fw1lKqEOQIygFL9Gv8STimaOog2Bi0fK6kxMev71mhqDuhlRve0RbiAwTDdSJlc0DTkFpwj%2FWt796dHuWAyOCQKyYH6Jd%2B2%2BWAdsL%2BTLaAMTsDkpnfR%2B7z2B18KSTy2BWzLAZTZbv%2F5OyDFfalDiQOpFUKLUXbBQcC12rN0nGtag%2F2%2BTS5rqT%2F5NeN%2Btf%2F3%2FZgLG4xnt7ra9AY7bzdSIn6FpZG7zYlWGOuDXLK6qVn6%2BN05PMxNfs9Uk3f3VjbJ7QEldTsjos%2BJNmrV1eL9dLr6osK0YK6r0wLR4gCbKAMM3V6lQIsxm0N0uLyBBfRtMnXhY3sCbkYe1uBkOp9nYl7IIoYies%2F9rWlDAQhhaVstSe0xtgR0FUnhOMs9FWBVZaUVr2pC6XsfwOM%2FC%2Fm2%2BcZ7%2FeeK0nxq1aTzDc8z2dmt4zccJvU9cdFbQb5nnO6fQgwCteSpX4imHrY2EKBY0jnwDEaQgXkwMvqG7%2Fj9jRdFCW%2BfGqEhTBl8LM6gnPW4XUnjlprrOuJ4GF5ELJDb7ya%2FWZwemUFXLiqPmXxu1xiSUre6MO%2BAzMMGOqUBUynKty9OBc2tMaUTQv6OILRZ4Zi6GnqmFrncd2KHqm2d5E42pzccsc4xhRA5PNPVmV4U19kO2Fq8RZ93Zcx3WyAYJTp0EGUw2xIMy0HI5USfd2P1Aqw2FXRWSPP%2FYOmASRgFPqYkQS2mKdTZorpjrAs15QHSHU0FxlNwJsOzmGFIqXvq38s%2FnpERJbofmoPJBwO1TnEIVk3gYDU67WvoAwMmQWxw&X-Amz-Signature=f202c039939aa2f1824978899d2d7febfd3954330283a64690e40d0d2662a31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54EDRBM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLrR4klPIdZo5t0CdtmVM%2F5ZSDjxrz4BN6S8wt8%2FkPigIgetJWYHvi6jWxFufPyjtDHLSXweNw37C3ZB4H7Xw2HdwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOac3PJwzQuFrqvr9yrcA9MAobO0qY9OnedP9oKmM8PYN4WnAi2oaJjanxCJUGyLnbeOc0pma6z51feXdhatniX%2BYf8F9sf5O%2Fw1lKqEOQIygFL9Gv8STimaOog2Bi0fK6kxMev71mhqDuhlRve0RbiAwTDdSJlc0DTkFpwj%2FWt796dHuWAyOCQKyYH6Jd%2B2%2BWAdsL%2BTLaAMTsDkpnfR%2B7z2B18KSTy2BWzLAZTZbv%2F5OyDFfalDiQOpFUKLUXbBQcC12rN0nGtag%2F2%2BTS5rqT%2F5NeN%2Btf%2F3%2FZgLG4xnt7ra9AY7bzdSIn6FpZG7zYlWGOuDXLK6qVn6%2BN05PMxNfs9Uk3f3VjbJ7QEldTsjos%2BJNmrV1eL9dLr6osK0YK6r0wLR4gCbKAMM3V6lQIsxm0N0uLyBBfRtMnXhY3sCbkYe1uBkOp9nYl7IIoYies%2F9rWlDAQhhaVstSe0xtgR0FUnhOMs9FWBVZaUVr2pC6XsfwOM%2FC%2Fm2%2BcZ7%2FeeK0nxq1aTzDc8z2dmt4zccJvU9cdFbQb5nnO6fQgwCteSpX4imHrY2EKBY0jnwDEaQgXkwMvqG7%2Fj9jRdFCW%2BfGqEhTBl8LM6gnPW4XUnjlprrOuJ4GF5ELJDb7ya%2FWZwemUFXLiqPmXxu1xiSUre6MO%2BAzMMGOqUBUynKty9OBc2tMaUTQv6OILRZ4Zi6GnqmFrncd2KHqm2d5E42pzccsc4xhRA5PNPVmV4U19kO2Fq8RZ93Zcx3WyAYJTp0EGUw2xIMy0HI5USfd2P1Aqw2FXRWSPP%2FYOmASRgFPqYkQS2mKdTZorpjrAs15QHSHU0FxlNwJsOzmGFIqXvq38s%2FnpERJbofmoPJBwO1TnEIVk3gYDU67WvoAwMmQWxw&X-Amz-Signature=08053681adbf7af6f98a334941ceb3e527a13d70c2714b25a00bef39a009aaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54EDRBM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLrR4klPIdZo5t0CdtmVM%2F5ZSDjxrz4BN6S8wt8%2FkPigIgetJWYHvi6jWxFufPyjtDHLSXweNw37C3ZB4H7Xw2HdwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOac3PJwzQuFrqvr9yrcA9MAobO0qY9OnedP9oKmM8PYN4WnAi2oaJjanxCJUGyLnbeOc0pma6z51feXdhatniX%2BYf8F9sf5O%2Fw1lKqEOQIygFL9Gv8STimaOog2Bi0fK6kxMev71mhqDuhlRve0RbiAwTDdSJlc0DTkFpwj%2FWt796dHuWAyOCQKyYH6Jd%2B2%2BWAdsL%2BTLaAMTsDkpnfR%2B7z2B18KSTy2BWzLAZTZbv%2F5OyDFfalDiQOpFUKLUXbBQcC12rN0nGtag%2F2%2BTS5rqT%2F5NeN%2Btf%2F3%2FZgLG4xnt7ra9AY7bzdSIn6FpZG7zYlWGOuDXLK6qVn6%2BN05PMxNfs9Uk3f3VjbJ7QEldTsjos%2BJNmrV1eL9dLr6osK0YK6r0wLR4gCbKAMM3V6lQIsxm0N0uLyBBfRtMnXhY3sCbkYe1uBkOp9nYl7IIoYies%2F9rWlDAQhhaVstSe0xtgR0FUnhOMs9FWBVZaUVr2pC6XsfwOM%2FC%2Fm2%2BcZ7%2FeeK0nxq1aTzDc8z2dmt4zccJvU9cdFbQb5nnO6fQgwCteSpX4imHrY2EKBY0jnwDEaQgXkwMvqG7%2Fj9jRdFCW%2BfGqEhTBl8LM6gnPW4XUnjlprrOuJ4GF5ELJDb7ya%2FWZwemUFXLiqPmXxu1xiSUre6MO%2BAzMMGOqUBUynKty9OBc2tMaUTQv6OILRZ4Zi6GnqmFrncd2KHqm2d5E42pzccsc4xhRA5PNPVmV4U19kO2Fq8RZ93Zcx3WyAYJTp0EGUw2xIMy0HI5USfd2P1Aqw2FXRWSPP%2FYOmASRgFPqYkQS2mKdTZorpjrAs15QHSHU0FxlNwJsOzmGFIqXvq38s%2FnpERJbofmoPJBwO1TnEIVk3gYDU67WvoAwMmQWxw&X-Amz-Signature=d727c550c4d7ff904042307be9ad14997c5bd487e6eb7d5742c3e5039ba73a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54EDRBM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLrR4klPIdZo5t0CdtmVM%2F5ZSDjxrz4BN6S8wt8%2FkPigIgetJWYHvi6jWxFufPyjtDHLSXweNw37C3ZB4H7Xw2HdwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOac3PJwzQuFrqvr9yrcA9MAobO0qY9OnedP9oKmM8PYN4WnAi2oaJjanxCJUGyLnbeOc0pma6z51feXdhatniX%2BYf8F9sf5O%2Fw1lKqEOQIygFL9Gv8STimaOog2Bi0fK6kxMev71mhqDuhlRve0RbiAwTDdSJlc0DTkFpwj%2FWt796dHuWAyOCQKyYH6Jd%2B2%2BWAdsL%2BTLaAMTsDkpnfR%2B7z2B18KSTy2BWzLAZTZbv%2F5OyDFfalDiQOpFUKLUXbBQcC12rN0nGtag%2F2%2BTS5rqT%2F5NeN%2Btf%2F3%2FZgLG4xnt7ra9AY7bzdSIn6FpZG7zYlWGOuDXLK6qVn6%2BN05PMxNfs9Uk3f3VjbJ7QEldTsjos%2BJNmrV1eL9dLr6osK0YK6r0wLR4gCbKAMM3V6lQIsxm0N0uLyBBfRtMnXhY3sCbkYe1uBkOp9nYl7IIoYies%2F9rWlDAQhhaVstSe0xtgR0FUnhOMs9FWBVZaUVr2pC6XsfwOM%2FC%2Fm2%2BcZ7%2FeeK0nxq1aTzDc8z2dmt4zccJvU9cdFbQb5nnO6fQgwCteSpX4imHrY2EKBY0jnwDEaQgXkwMvqG7%2Fj9jRdFCW%2BfGqEhTBl8LM6gnPW4XUnjlprrOuJ4GF5ELJDb7ya%2FWZwemUFXLiqPmXxu1xiSUre6MO%2BAzMMGOqUBUynKty9OBc2tMaUTQv6OILRZ4Zi6GnqmFrncd2KHqm2d5E42pzccsc4xhRA5PNPVmV4U19kO2Fq8RZ93Zcx3WyAYJTp0EGUw2xIMy0HI5USfd2P1Aqw2FXRWSPP%2FYOmASRgFPqYkQS2mKdTZorpjrAs15QHSHU0FxlNwJsOzmGFIqXvq38s%2FnpERJbofmoPJBwO1TnEIVk3gYDU67WvoAwMmQWxw&X-Amz-Signature=fd697c0250261cf406ce6b8e0d06d765cfd2a0b63f496fbd2cafe39d4bd260eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54EDRBM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLrR4klPIdZo5t0CdtmVM%2F5ZSDjxrz4BN6S8wt8%2FkPigIgetJWYHvi6jWxFufPyjtDHLSXweNw37C3ZB4H7Xw2HdwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOac3PJwzQuFrqvr9yrcA9MAobO0qY9OnedP9oKmM8PYN4WnAi2oaJjanxCJUGyLnbeOc0pma6z51feXdhatniX%2BYf8F9sf5O%2Fw1lKqEOQIygFL9Gv8STimaOog2Bi0fK6kxMev71mhqDuhlRve0RbiAwTDdSJlc0DTkFpwj%2FWt796dHuWAyOCQKyYH6Jd%2B2%2BWAdsL%2BTLaAMTsDkpnfR%2B7z2B18KSTy2BWzLAZTZbv%2F5OyDFfalDiQOpFUKLUXbBQcC12rN0nGtag%2F2%2BTS5rqT%2F5NeN%2Btf%2F3%2FZgLG4xnt7ra9AY7bzdSIn6FpZG7zYlWGOuDXLK6qVn6%2BN05PMxNfs9Uk3f3VjbJ7QEldTsjos%2BJNmrV1eL9dLr6osK0YK6r0wLR4gCbKAMM3V6lQIsxm0N0uLyBBfRtMnXhY3sCbkYe1uBkOp9nYl7IIoYies%2F9rWlDAQhhaVstSe0xtgR0FUnhOMs9FWBVZaUVr2pC6XsfwOM%2FC%2Fm2%2BcZ7%2FeeK0nxq1aTzDc8z2dmt4zccJvU9cdFbQb5nnO6fQgwCteSpX4imHrY2EKBY0jnwDEaQgXkwMvqG7%2Fj9jRdFCW%2BfGqEhTBl8LM6gnPW4XUnjlprrOuJ4GF5ELJDb7ya%2FWZwemUFXLiqPmXxu1xiSUre6MO%2BAzMMGOqUBUynKty9OBc2tMaUTQv6OILRZ4Zi6GnqmFrncd2KHqm2d5E42pzccsc4xhRA5PNPVmV4U19kO2Fq8RZ93Zcx3WyAYJTp0EGUw2xIMy0HI5USfd2P1Aqw2FXRWSPP%2FYOmASRgFPqYkQS2mKdTZorpjrAs15QHSHU0FxlNwJsOzmGFIqXvq38s%2FnpERJbofmoPJBwO1TnEIVk3gYDU67WvoAwMmQWxw&X-Amz-Signature=134ec41c8fc7b82d4bd53b5435b86f8455eb664f3d98420c20f9b8d9df31b11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
