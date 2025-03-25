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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIECN5VV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVr8xU7%2FRJ3EQOZajFsWPz1TbGnLtB1t0WdpNq2CzeFwIgZ%2F5m%2BzbR%2FlSz1PNJ1Ed7jKhRwp2p9H3TY8GTfOe7B2sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKgq%2F2gDd1Nn%2FGKI9CrcAzwwonDQTd1CSKFjngWQ8v6VJh8FRoFvu2tAOULy6GM3hAXpZA1wkL6ekBiWTHGTl0X2pbUsoW1%2BlWsllQIGr%2BFVsYrZ7jjAjlog6U4ia7BT4mekznN2e4sGLqYbvKNZQf3Mczruk2zC6ylp25IoZCtGtcIgqHT%2FP5StRWKLmNzfyP5zQddsrJ1GOQ%2FHoOhNp4ILJnGErEcIItUExoeCEjNWmoD97SfRWR9hcr73jvmu%2BmvOcVc6DSvZ5canX3ukESKCXdFKXHSwrsFbTeYyQacUSUCMIGHCN6kBT5x0gC9nR2LV4Gm29xsc1%2Bg4psRtvEnl4TJCNXMHhuaHhXPAszTC6kr30TjIkyMj0h6xQCdxbVFLYqEe7OpC06gzdWa9LZ%2F7anZkprpZ7o%2BUGqPh0tBo76basIBJIBssPK%2F327xr2WJnbI9k%2FWCta84YlmIy%2BSdEIMoxucmnxAyl7uMKzwIcxm9eVcIhATXF8u5rFZxigFveRtTS33aKmXNrtZpP7nh8iukK%2FEg6SQm0kZMhgSQQoAf89%2BauJSSg6OPbwXAyP2jxLYO5Ul3UYMnfnq69YcMWmIl7oMvtB8L2%2BYN2LOiHuxD79NR1ynVN9CDXuwUXsytXY%2BkO5IBxlH%2B0MK2uib8GOqUBkqO7yDHvnoLJAQad95%2BOl2224ZBdFCkV%2BuW28mIwudqhcMbQjdC4zyQd3gxM2XnlVCTO%2FO%2FMfBkQuif71TTsHZRkR5vrgpJnjDrpKxjOBBY02dTa8ykrkZo61RIOFCjpIcD6tS8n6Fo0zt3N3E%2Fu%2FxEcydVu6DQtHsxdC%2BZ1F3OC8RD7g5p1C4OxUI1OA9qzEaAsj2m0qwe5DRsKsdW2aTnPDRXt&X-Amz-Signature=335f08684f5dd4ca9266740038a0cfd909336508b5d100032c0e0a73627114ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIECN5VV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVr8xU7%2FRJ3EQOZajFsWPz1TbGnLtB1t0WdpNq2CzeFwIgZ%2F5m%2BzbR%2FlSz1PNJ1Ed7jKhRwp2p9H3TY8GTfOe7B2sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKgq%2F2gDd1Nn%2FGKI9CrcAzwwonDQTd1CSKFjngWQ8v6VJh8FRoFvu2tAOULy6GM3hAXpZA1wkL6ekBiWTHGTl0X2pbUsoW1%2BlWsllQIGr%2BFVsYrZ7jjAjlog6U4ia7BT4mekznN2e4sGLqYbvKNZQf3Mczruk2zC6ylp25IoZCtGtcIgqHT%2FP5StRWKLmNzfyP5zQddsrJ1GOQ%2FHoOhNp4ILJnGErEcIItUExoeCEjNWmoD97SfRWR9hcr73jvmu%2BmvOcVc6DSvZ5canX3ukESKCXdFKXHSwrsFbTeYyQacUSUCMIGHCN6kBT5x0gC9nR2LV4Gm29xsc1%2Bg4psRtvEnl4TJCNXMHhuaHhXPAszTC6kr30TjIkyMj0h6xQCdxbVFLYqEe7OpC06gzdWa9LZ%2F7anZkprpZ7o%2BUGqPh0tBo76basIBJIBssPK%2F327xr2WJnbI9k%2FWCta84YlmIy%2BSdEIMoxucmnxAyl7uMKzwIcxm9eVcIhATXF8u5rFZxigFveRtTS33aKmXNrtZpP7nh8iukK%2FEg6SQm0kZMhgSQQoAf89%2BauJSSg6OPbwXAyP2jxLYO5Ul3UYMnfnq69YcMWmIl7oMvtB8L2%2BYN2LOiHuxD79NR1ynVN9CDXuwUXsytXY%2BkO5IBxlH%2B0MK2uib8GOqUBkqO7yDHvnoLJAQad95%2BOl2224ZBdFCkV%2BuW28mIwudqhcMbQjdC4zyQd3gxM2XnlVCTO%2FO%2FMfBkQuif71TTsHZRkR5vrgpJnjDrpKxjOBBY02dTa8ykrkZo61RIOFCjpIcD6tS8n6Fo0zt3N3E%2Fu%2FxEcydVu6DQtHsxdC%2BZ1F3OC8RD7g5p1C4OxUI1OA9qzEaAsj2m0qwe5DRsKsdW2aTnPDRXt&X-Amz-Signature=f0a15f54a0ee24927f73de2bf795c8a10645cee8930116dac9493ea8378ff895&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIECN5VV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVr8xU7%2FRJ3EQOZajFsWPz1TbGnLtB1t0WdpNq2CzeFwIgZ%2F5m%2BzbR%2FlSz1PNJ1Ed7jKhRwp2p9H3TY8GTfOe7B2sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKgq%2F2gDd1Nn%2FGKI9CrcAzwwonDQTd1CSKFjngWQ8v6VJh8FRoFvu2tAOULy6GM3hAXpZA1wkL6ekBiWTHGTl0X2pbUsoW1%2BlWsllQIGr%2BFVsYrZ7jjAjlog6U4ia7BT4mekznN2e4sGLqYbvKNZQf3Mczruk2zC6ylp25IoZCtGtcIgqHT%2FP5StRWKLmNzfyP5zQddsrJ1GOQ%2FHoOhNp4ILJnGErEcIItUExoeCEjNWmoD97SfRWR9hcr73jvmu%2BmvOcVc6DSvZ5canX3ukESKCXdFKXHSwrsFbTeYyQacUSUCMIGHCN6kBT5x0gC9nR2LV4Gm29xsc1%2Bg4psRtvEnl4TJCNXMHhuaHhXPAszTC6kr30TjIkyMj0h6xQCdxbVFLYqEe7OpC06gzdWa9LZ%2F7anZkprpZ7o%2BUGqPh0tBo76basIBJIBssPK%2F327xr2WJnbI9k%2FWCta84YlmIy%2BSdEIMoxucmnxAyl7uMKzwIcxm9eVcIhATXF8u5rFZxigFveRtTS33aKmXNrtZpP7nh8iukK%2FEg6SQm0kZMhgSQQoAf89%2BauJSSg6OPbwXAyP2jxLYO5Ul3UYMnfnq69YcMWmIl7oMvtB8L2%2BYN2LOiHuxD79NR1ynVN9CDXuwUXsytXY%2BkO5IBxlH%2B0MK2uib8GOqUBkqO7yDHvnoLJAQad95%2BOl2224ZBdFCkV%2BuW28mIwudqhcMbQjdC4zyQd3gxM2XnlVCTO%2FO%2FMfBkQuif71TTsHZRkR5vrgpJnjDrpKxjOBBY02dTa8ykrkZo61RIOFCjpIcD6tS8n6Fo0zt3N3E%2Fu%2FxEcydVu6DQtHsxdC%2BZ1F3OC8RD7g5p1C4OxUI1OA9qzEaAsj2m0qwe5DRsKsdW2aTnPDRXt&X-Amz-Signature=afc6dc0583ea7c53db2c96085d07828c1f069a6e9034190e6a3eda96968f6c78&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIECN5VV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVr8xU7%2FRJ3EQOZajFsWPz1TbGnLtB1t0WdpNq2CzeFwIgZ%2F5m%2BzbR%2FlSz1PNJ1Ed7jKhRwp2p9H3TY8GTfOe7B2sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKgq%2F2gDd1Nn%2FGKI9CrcAzwwonDQTd1CSKFjngWQ8v6VJh8FRoFvu2tAOULy6GM3hAXpZA1wkL6ekBiWTHGTl0X2pbUsoW1%2BlWsllQIGr%2BFVsYrZ7jjAjlog6U4ia7BT4mekznN2e4sGLqYbvKNZQf3Mczruk2zC6ylp25IoZCtGtcIgqHT%2FP5StRWKLmNzfyP5zQddsrJ1GOQ%2FHoOhNp4ILJnGErEcIItUExoeCEjNWmoD97SfRWR9hcr73jvmu%2BmvOcVc6DSvZ5canX3ukESKCXdFKXHSwrsFbTeYyQacUSUCMIGHCN6kBT5x0gC9nR2LV4Gm29xsc1%2Bg4psRtvEnl4TJCNXMHhuaHhXPAszTC6kr30TjIkyMj0h6xQCdxbVFLYqEe7OpC06gzdWa9LZ%2F7anZkprpZ7o%2BUGqPh0tBo76basIBJIBssPK%2F327xr2WJnbI9k%2FWCta84YlmIy%2BSdEIMoxucmnxAyl7uMKzwIcxm9eVcIhATXF8u5rFZxigFveRtTS33aKmXNrtZpP7nh8iukK%2FEg6SQm0kZMhgSQQoAf89%2BauJSSg6OPbwXAyP2jxLYO5Ul3UYMnfnq69YcMWmIl7oMvtB8L2%2BYN2LOiHuxD79NR1ynVN9CDXuwUXsytXY%2BkO5IBxlH%2B0MK2uib8GOqUBkqO7yDHvnoLJAQad95%2BOl2224ZBdFCkV%2BuW28mIwudqhcMbQjdC4zyQd3gxM2XnlVCTO%2FO%2FMfBkQuif71TTsHZRkR5vrgpJnjDrpKxjOBBY02dTa8ykrkZo61RIOFCjpIcD6tS8n6Fo0zt3N3E%2Fu%2FxEcydVu6DQtHsxdC%2BZ1F3OC8RD7g5p1C4OxUI1OA9qzEaAsj2m0qwe5DRsKsdW2aTnPDRXt&X-Amz-Signature=8b68af7247a2ae49ad8e66082408a77278d7d00039724f7b0826b3edd1a7d95b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIECN5VV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVr8xU7%2FRJ3EQOZajFsWPz1TbGnLtB1t0WdpNq2CzeFwIgZ%2F5m%2BzbR%2FlSz1PNJ1Ed7jKhRwp2p9H3TY8GTfOe7B2sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKgq%2F2gDd1Nn%2FGKI9CrcAzwwonDQTd1CSKFjngWQ8v6VJh8FRoFvu2tAOULy6GM3hAXpZA1wkL6ekBiWTHGTl0X2pbUsoW1%2BlWsllQIGr%2BFVsYrZ7jjAjlog6U4ia7BT4mekznN2e4sGLqYbvKNZQf3Mczruk2zC6ylp25IoZCtGtcIgqHT%2FP5StRWKLmNzfyP5zQddsrJ1GOQ%2FHoOhNp4ILJnGErEcIItUExoeCEjNWmoD97SfRWR9hcr73jvmu%2BmvOcVc6DSvZ5canX3ukESKCXdFKXHSwrsFbTeYyQacUSUCMIGHCN6kBT5x0gC9nR2LV4Gm29xsc1%2Bg4psRtvEnl4TJCNXMHhuaHhXPAszTC6kr30TjIkyMj0h6xQCdxbVFLYqEe7OpC06gzdWa9LZ%2F7anZkprpZ7o%2BUGqPh0tBo76basIBJIBssPK%2F327xr2WJnbI9k%2FWCta84YlmIy%2BSdEIMoxucmnxAyl7uMKzwIcxm9eVcIhATXF8u5rFZxigFveRtTS33aKmXNrtZpP7nh8iukK%2FEg6SQm0kZMhgSQQoAf89%2BauJSSg6OPbwXAyP2jxLYO5Ul3UYMnfnq69YcMWmIl7oMvtB8L2%2BYN2LOiHuxD79NR1ynVN9CDXuwUXsytXY%2BkO5IBxlH%2B0MK2uib8GOqUBkqO7yDHvnoLJAQad95%2BOl2224ZBdFCkV%2BuW28mIwudqhcMbQjdC4zyQd3gxM2XnlVCTO%2FO%2FMfBkQuif71TTsHZRkR5vrgpJnjDrpKxjOBBY02dTa8ykrkZo61RIOFCjpIcD6tS8n6Fo0zt3N3E%2Fu%2FxEcydVu6DQtHsxdC%2BZ1F3OC8RD7g5p1C4OxUI1OA9qzEaAsj2m0qwe5DRsKsdW2aTnPDRXt&X-Amz-Signature=5c76773b6d50b871997365af6ca7c234505afff52a4bd4287eedb600d184c1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIECN5VV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVr8xU7%2FRJ3EQOZajFsWPz1TbGnLtB1t0WdpNq2CzeFwIgZ%2F5m%2BzbR%2FlSz1PNJ1Ed7jKhRwp2p9H3TY8GTfOe7B2sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKgq%2F2gDd1Nn%2FGKI9CrcAzwwonDQTd1CSKFjngWQ8v6VJh8FRoFvu2tAOULy6GM3hAXpZA1wkL6ekBiWTHGTl0X2pbUsoW1%2BlWsllQIGr%2BFVsYrZ7jjAjlog6U4ia7BT4mekznN2e4sGLqYbvKNZQf3Mczruk2zC6ylp25IoZCtGtcIgqHT%2FP5StRWKLmNzfyP5zQddsrJ1GOQ%2FHoOhNp4ILJnGErEcIItUExoeCEjNWmoD97SfRWR9hcr73jvmu%2BmvOcVc6DSvZ5canX3ukESKCXdFKXHSwrsFbTeYyQacUSUCMIGHCN6kBT5x0gC9nR2LV4Gm29xsc1%2Bg4psRtvEnl4TJCNXMHhuaHhXPAszTC6kr30TjIkyMj0h6xQCdxbVFLYqEe7OpC06gzdWa9LZ%2F7anZkprpZ7o%2BUGqPh0tBo76basIBJIBssPK%2F327xr2WJnbI9k%2FWCta84YlmIy%2BSdEIMoxucmnxAyl7uMKzwIcxm9eVcIhATXF8u5rFZxigFveRtTS33aKmXNrtZpP7nh8iukK%2FEg6SQm0kZMhgSQQoAf89%2BauJSSg6OPbwXAyP2jxLYO5Ul3UYMnfnq69YcMWmIl7oMvtB8L2%2BYN2LOiHuxD79NR1ynVN9CDXuwUXsytXY%2BkO5IBxlH%2B0MK2uib8GOqUBkqO7yDHvnoLJAQad95%2BOl2224ZBdFCkV%2BuW28mIwudqhcMbQjdC4zyQd3gxM2XnlVCTO%2FO%2FMfBkQuif71TTsHZRkR5vrgpJnjDrpKxjOBBY02dTa8ykrkZo61RIOFCjpIcD6tS8n6Fo0zt3N3E%2Fu%2FxEcydVu6DQtHsxdC%2BZ1F3OC8RD7g5p1C4OxUI1OA9qzEaAsj2m0qwe5DRsKsdW2aTnPDRXt&X-Amz-Signature=076a7a0fa0dc5213ae69189cf97f8d2ce9416499d4d818231de294823dfdd8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIECN5VV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVr8xU7%2FRJ3EQOZajFsWPz1TbGnLtB1t0WdpNq2CzeFwIgZ%2F5m%2BzbR%2FlSz1PNJ1Ed7jKhRwp2p9H3TY8GTfOe7B2sq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKgq%2F2gDd1Nn%2FGKI9CrcAzwwonDQTd1CSKFjngWQ8v6VJh8FRoFvu2tAOULy6GM3hAXpZA1wkL6ekBiWTHGTl0X2pbUsoW1%2BlWsllQIGr%2BFVsYrZ7jjAjlog6U4ia7BT4mekznN2e4sGLqYbvKNZQf3Mczruk2zC6ylp25IoZCtGtcIgqHT%2FP5StRWKLmNzfyP5zQddsrJ1GOQ%2FHoOhNp4ILJnGErEcIItUExoeCEjNWmoD97SfRWR9hcr73jvmu%2BmvOcVc6DSvZ5canX3ukESKCXdFKXHSwrsFbTeYyQacUSUCMIGHCN6kBT5x0gC9nR2LV4Gm29xsc1%2Bg4psRtvEnl4TJCNXMHhuaHhXPAszTC6kr30TjIkyMj0h6xQCdxbVFLYqEe7OpC06gzdWa9LZ%2F7anZkprpZ7o%2BUGqPh0tBo76basIBJIBssPK%2F327xr2WJnbI9k%2FWCta84YlmIy%2BSdEIMoxucmnxAyl7uMKzwIcxm9eVcIhATXF8u5rFZxigFveRtTS33aKmXNrtZpP7nh8iukK%2FEg6SQm0kZMhgSQQoAf89%2BauJSSg6OPbwXAyP2jxLYO5Ul3UYMnfnq69YcMWmIl7oMvtB8L2%2BYN2LOiHuxD79NR1ynVN9CDXuwUXsytXY%2BkO5IBxlH%2B0MK2uib8GOqUBkqO7yDHvnoLJAQad95%2BOl2224ZBdFCkV%2BuW28mIwudqhcMbQjdC4zyQd3gxM2XnlVCTO%2FO%2FMfBkQuif71TTsHZRkR5vrgpJnjDrpKxjOBBY02dTa8ykrkZo61RIOFCjpIcD6tS8n6Fo0zt3N3E%2Fu%2FxEcydVu6DQtHsxdC%2BZ1F3OC8RD7g5p1C4OxUI1OA9qzEaAsj2m0qwe5DRsKsdW2aTnPDRXt&X-Amz-Signature=da0ef9fd0f6afb486a7f07efcff9a55139291f4d3b48b6f701de94f2a3854709&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
