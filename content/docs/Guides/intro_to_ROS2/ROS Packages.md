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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAJDUUV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEr0JPKAIP91PiY%2BZHKTB7wUBQGDRnnw7uendmjkL58%2BAiA8n%2FRjZ4mFikazVJfe0rbYMsdjGM3Vk9EIjSRxeSPWMyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfT%2FLysv8mrVSI21KtwDjgRPhNS6e1MjDDZUGLiV1YxLr%2F8xQDGtuWOXS1NEAEVEO0iq%2F6AzFA4xInpeUw%2B7ifRlhqaWYCMnZN1Gfsb6BzVPZsX3lobkDH8yZ0AeBBnQ7Ot5J083AovHOz9FwXSjJmXIgUyUWsFsGye7hJ7nrXb1QxGSHE0r4pAhx%2F7T%2BhxGZtf1P7vAFDDh%2F4hNtuFx8MJ%2Flf85fwf3EMGEeELxTrUBUhbkvgJHdrzPb9ecFiGe4KMZcRdePVzel%2FUexfaFse4%2BjjSbc4e7YIf7lcxqkDOKDs%2BMxRZX46n5pIshrWr6Q%2B%2BvfnBbspWUTrpgK159AO838HNuDnTKLUllwgzDnWRLRGYS20Y%2BROpTz7bsp4tftzpNQEvekz%2FntdTVNSPZivX8Ka8mivkckYYe8n%2F53vDaS1B%2BP3dpQkkHG6qavXxbBpu6sdso948dLr81TQRoB89tOCFOp6LJFC1RLDcAwQ1PcIJVZSl4WyEZWXNmwBBo0EHYXUk%2Fe1xRGXjps9tA5Ojo%2BV9f6RE3fD0%2B7vy4KRSMKPedx9xZULS%2Bk3iSTBDJA5dJ1pzboAhwTp9tOj69z%2BIcqPwX9zlV8bIOdO30cC5ewX9Ss9APNGo%2BJdpML1YG51VmlGfndOh0c2Mwp8jQvQY6pgEp9DFhQ%2F1UpxZX1r5PU67dpolK97C%2Fh2%2BvBHDKIBlMyqzqIYqNyBfsoALYc%2BT4pe2Xos2V7VMBFucvBjjVouWhEC77VygDopT0cg6Ny%2BbIo1TFscsy75%2FSF7RxGRopDxnsDW%2FcehClYkyLQma5KIOiE2CC71gRcWuJXhcmo1OMWBy1TDYBod4C%2FP5xjzbOee4p10%2BR3euGGU%2BQm2SBZ1yoSNKO2SCU&X-Amz-Signature=87ab28dd06c56463f80f838defcc51f02fcaff9b46468d72734db3c249213b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAJDUUV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEr0JPKAIP91PiY%2BZHKTB7wUBQGDRnnw7uendmjkL58%2BAiA8n%2FRjZ4mFikazVJfe0rbYMsdjGM3Vk9EIjSRxeSPWMyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfT%2FLysv8mrVSI21KtwDjgRPhNS6e1MjDDZUGLiV1YxLr%2F8xQDGtuWOXS1NEAEVEO0iq%2F6AzFA4xInpeUw%2B7ifRlhqaWYCMnZN1Gfsb6BzVPZsX3lobkDH8yZ0AeBBnQ7Ot5J083AovHOz9FwXSjJmXIgUyUWsFsGye7hJ7nrXb1QxGSHE0r4pAhx%2F7T%2BhxGZtf1P7vAFDDh%2F4hNtuFx8MJ%2Flf85fwf3EMGEeELxTrUBUhbkvgJHdrzPb9ecFiGe4KMZcRdePVzel%2FUexfaFse4%2BjjSbc4e7YIf7lcxqkDOKDs%2BMxRZX46n5pIshrWr6Q%2B%2BvfnBbspWUTrpgK159AO838HNuDnTKLUllwgzDnWRLRGYS20Y%2BROpTz7bsp4tftzpNQEvekz%2FntdTVNSPZivX8Ka8mivkckYYe8n%2F53vDaS1B%2BP3dpQkkHG6qavXxbBpu6sdso948dLr81TQRoB89tOCFOp6LJFC1RLDcAwQ1PcIJVZSl4WyEZWXNmwBBo0EHYXUk%2Fe1xRGXjps9tA5Ojo%2BV9f6RE3fD0%2B7vy4KRSMKPedx9xZULS%2Bk3iSTBDJA5dJ1pzboAhwTp9tOj69z%2BIcqPwX9zlV8bIOdO30cC5ewX9Ss9APNGo%2BJdpML1YG51VmlGfndOh0c2Mwp8jQvQY6pgEp9DFhQ%2F1UpxZX1r5PU67dpolK97C%2Fh2%2BvBHDKIBlMyqzqIYqNyBfsoALYc%2BT4pe2Xos2V7VMBFucvBjjVouWhEC77VygDopT0cg6Ny%2BbIo1TFscsy75%2FSF7RxGRopDxnsDW%2FcehClYkyLQma5KIOiE2CC71gRcWuJXhcmo1OMWBy1TDYBod4C%2FP5xjzbOee4p10%2BR3euGGU%2BQm2SBZ1yoSNKO2SCU&X-Amz-Signature=1030c3bda2a593c897eb31aaefde323962ec4780fe4801cc544ff1dbe42488c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAJDUUV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEr0JPKAIP91PiY%2BZHKTB7wUBQGDRnnw7uendmjkL58%2BAiA8n%2FRjZ4mFikazVJfe0rbYMsdjGM3Vk9EIjSRxeSPWMyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfT%2FLysv8mrVSI21KtwDjgRPhNS6e1MjDDZUGLiV1YxLr%2F8xQDGtuWOXS1NEAEVEO0iq%2F6AzFA4xInpeUw%2B7ifRlhqaWYCMnZN1Gfsb6BzVPZsX3lobkDH8yZ0AeBBnQ7Ot5J083AovHOz9FwXSjJmXIgUyUWsFsGye7hJ7nrXb1QxGSHE0r4pAhx%2F7T%2BhxGZtf1P7vAFDDh%2F4hNtuFx8MJ%2Flf85fwf3EMGEeELxTrUBUhbkvgJHdrzPb9ecFiGe4KMZcRdePVzel%2FUexfaFse4%2BjjSbc4e7YIf7lcxqkDOKDs%2BMxRZX46n5pIshrWr6Q%2B%2BvfnBbspWUTrpgK159AO838HNuDnTKLUllwgzDnWRLRGYS20Y%2BROpTz7bsp4tftzpNQEvekz%2FntdTVNSPZivX8Ka8mivkckYYe8n%2F53vDaS1B%2BP3dpQkkHG6qavXxbBpu6sdso948dLr81TQRoB89tOCFOp6LJFC1RLDcAwQ1PcIJVZSl4WyEZWXNmwBBo0EHYXUk%2Fe1xRGXjps9tA5Ojo%2BV9f6RE3fD0%2B7vy4KRSMKPedx9xZULS%2Bk3iSTBDJA5dJ1pzboAhwTp9tOj69z%2BIcqPwX9zlV8bIOdO30cC5ewX9Ss9APNGo%2BJdpML1YG51VmlGfndOh0c2Mwp8jQvQY6pgEp9DFhQ%2F1UpxZX1r5PU67dpolK97C%2Fh2%2BvBHDKIBlMyqzqIYqNyBfsoALYc%2BT4pe2Xos2V7VMBFucvBjjVouWhEC77VygDopT0cg6Ny%2BbIo1TFscsy75%2FSF7RxGRopDxnsDW%2FcehClYkyLQma5KIOiE2CC71gRcWuJXhcmo1OMWBy1TDYBod4C%2FP5xjzbOee4p10%2BR3euGGU%2BQm2SBZ1yoSNKO2SCU&X-Amz-Signature=f3a9e91346644003f3328a4f62f519e4ea021f0a84651a0611d69a3bf0c93005&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAJDUUV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEr0JPKAIP91PiY%2BZHKTB7wUBQGDRnnw7uendmjkL58%2BAiA8n%2FRjZ4mFikazVJfe0rbYMsdjGM3Vk9EIjSRxeSPWMyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfT%2FLysv8mrVSI21KtwDjgRPhNS6e1MjDDZUGLiV1YxLr%2F8xQDGtuWOXS1NEAEVEO0iq%2F6AzFA4xInpeUw%2B7ifRlhqaWYCMnZN1Gfsb6BzVPZsX3lobkDH8yZ0AeBBnQ7Ot5J083AovHOz9FwXSjJmXIgUyUWsFsGye7hJ7nrXb1QxGSHE0r4pAhx%2F7T%2BhxGZtf1P7vAFDDh%2F4hNtuFx8MJ%2Flf85fwf3EMGEeELxTrUBUhbkvgJHdrzPb9ecFiGe4KMZcRdePVzel%2FUexfaFse4%2BjjSbc4e7YIf7lcxqkDOKDs%2BMxRZX46n5pIshrWr6Q%2B%2BvfnBbspWUTrpgK159AO838HNuDnTKLUllwgzDnWRLRGYS20Y%2BROpTz7bsp4tftzpNQEvekz%2FntdTVNSPZivX8Ka8mivkckYYe8n%2F53vDaS1B%2BP3dpQkkHG6qavXxbBpu6sdso948dLr81TQRoB89tOCFOp6LJFC1RLDcAwQ1PcIJVZSl4WyEZWXNmwBBo0EHYXUk%2Fe1xRGXjps9tA5Ojo%2BV9f6RE3fD0%2B7vy4KRSMKPedx9xZULS%2Bk3iSTBDJA5dJ1pzboAhwTp9tOj69z%2BIcqPwX9zlV8bIOdO30cC5ewX9Ss9APNGo%2BJdpML1YG51VmlGfndOh0c2Mwp8jQvQY6pgEp9DFhQ%2F1UpxZX1r5PU67dpolK97C%2Fh2%2BvBHDKIBlMyqzqIYqNyBfsoALYc%2BT4pe2Xos2V7VMBFucvBjjVouWhEC77VygDopT0cg6Ny%2BbIo1TFscsy75%2FSF7RxGRopDxnsDW%2FcehClYkyLQma5KIOiE2CC71gRcWuJXhcmo1OMWBy1TDYBod4C%2FP5xjzbOee4p10%2BR3euGGU%2BQm2SBZ1yoSNKO2SCU&X-Amz-Signature=32289e157a5b3404f0bb45c464eea92da5ba190a7dfd42ad4d9c33d0a6a21786&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAJDUUV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEr0JPKAIP91PiY%2BZHKTB7wUBQGDRnnw7uendmjkL58%2BAiA8n%2FRjZ4mFikazVJfe0rbYMsdjGM3Vk9EIjSRxeSPWMyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfT%2FLysv8mrVSI21KtwDjgRPhNS6e1MjDDZUGLiV1YxLr%2F8xQDGtuWOXS1NEAEVEO0iq%2F6AzFA4xInpeUw%2B7ifRlhqaWYCMnZN1Gfsb6BzVPZsX3lobkDH8yZ0AeBBnQ7Ot5J083AovHOz9FwXSjJmXIgUyUWsFsGye7hJ7nrXb1QxGSHE0r4pAhx%2F7T%2BhxGZtf1P7vAFDDh%2F4hNtuFx8MJ%2Flf85fwf3EMGEeELxTrUBUhbkvgJHdrzPb9ecFiGe4KMZcRdePVzel%2FUexfaFse4%2BjjSbc4e7YIf7lcxqkDOKDs%2BMxRZX46n5pIshrWr6Q%2B%2BvfnBbspWUTrpgK159AO838HNuDnTKLUllwgzDnWRLRGYS20Y%2BROpTz7bsp4tftzpNQEvekz%2FntdTVNSPZivX8Ka8mivkckYYe8n%2F53vDaS1B%2BP3dpQkkHG6qavXxbBpu6sdso948dLr81TQRoB89tOCFOp6LJFC1RLDcAwQ1PcIJVZSl4WyEZWXNmwBBo0EHYXUk%2Fe1xRGXjps9tA5Ojo%2BV9f6RE3fD0%2B7vy4KRSMKPedx9xZULS%2Bk3iSTBDJA5dJ1pzboAhwTp9tOj69z%2BIcqPwX9zlV8bIOdO30cC5ewX9Ss9APNGo%2BJdpML1YG51VmlGfndOh0c2Mwp8jQvQY6pgEp9DFhQ%2F1UpxZX1r5PU67dpolK97C%2Fh2%2BvBHDKIBlMyqzqIYqNyBfsoALYc%2BT4pe2Xos2V7VMBFucvBjjVouWhEC77VygDopT0cg6Ny%2BbIo1TFscsy75%2FSF7RxGRopDxnsDW%2FcehClYkyLQma5KIOiE2CC71gRcWuJXhcmo1OMWBy1TDYBod4C%2FP5xjzbOee4p10%2BR3euGGU%2BQm2SBZ1yoSNKO2SCU&X-Amz-Signature=d2727363493f6462e8b2cc6e772afad0834a03903072a96c982215116fe3441d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAJDUUV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEr0JPKAIP91PiY%2BZHKTB7wUBQGDRnnw7uendmjkL58%2BAiA8n%2FRjZ4mFikazVJfe0rbYMsdjGM3Vk9EIjSRxeSPWMyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfT%2FLysv8mrVSI21KtwDjgRPhNS6e1MjDDZUGLiV1YxLr%2F8xQDGtuWOXS1NEAEVEO0iq%2F6AzFA4xInpeUw%2B7ifRlhqaWYCMnZN1Gfsb6BzVPZsX3lobkDH8yZ0AeBBnQ7Ot5J083AovHOz9FwXSjJmXIgUyUWsFsGye7hJ7nrXb1QxGSHE0r4pAhx%2F7T%2BhxGZtf1P7vAFDDh%2F4hNtuFx8MJ%2Flf85fwf3EMGEeELxTrUBUhbkvgJHdrzPb9ecFiGe4KMZcRdePVzel%2FUexfaFse4%2BjjSbc4e7YIf7lcxqkDOKDs%2BMxRZX46n5pIshrWr6Q%2B%2BvfnBbspWUTrpgK159AO838HNuDnTKLUllwgzDnWRLRGYS20Y%2BROpTz7bsp4tftzpNQEvekz%2FntdTVNSPZivX8Ka8mivkckYYe8n%2F53vDaS1B%2BP3dpQkkHG6qavXxbBpu6sdso948dLr81TQRoB89tOCFOp6LJFC1RLDcAwQ1PcIJVZSl4WyEZWXNmwBBo0EHYXUk%2Fe1xRGXjps9tA5Ojo%2BV9f6RE3fD0%2B7vy4KRSMKPedx9xZULS%2Bk3iSTBDJA5dJ1pzboAhwTp9tOj69z%2BIcqPwX9zlV8bIOdO30cC5ewX9Ss9APNGo%2BJdpML1YG51VmlGfndOh0c2Mwp8jQvQY6pgEp9DFhQ%2F1UpxZX1r5PU67dpolK97C%2Fh2%2BvBHDKIBlMyqzqIYqNyBfsoALYc%2BT4pe2Xos2V7VMBFucvBjjVouWhEC77VygDopT0cg6Ny%2BbIo1TFscsy75%2FSF7RxGRopDxnsDW%2FcehClYkyLQma5KIOiE2CC71gRcWuJXhcmo1OMWBy1TDYBod4C%2FP5xjzbOee4p10%2BR3euGGU%2BQm2SBZ1yoSNKO2SCU&X-Amz-Signature=144482ba02dee98b67cf3cac420a8f6b4763339e9795adf3bcad9a8fb5093a32&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAJDUUV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEr0JPKAIP91PiY%2BZHKTB7wUBQGDRnnw7uendmjkL58%2BAiA8n%2FRjZ4mFikazVJfe0rbYMsdjGM3Vk9EIjSRxeSPWMyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfT%2FLysv8mrVSI21KtwDjgRPhNS6e1MjDDZUGLiV1YxLr%2F8xQDGtuWOXS1NEAEVEO0iq%2F6AzFA4xInpeUw%2B7ifRlhqaWYCMnZN1Gfsb6BzVPZsX3lobkDH8yZ0AeBBnQ7Ot5J083AovHOz9FwXSjJmXIgUyUWsFsGye7hJ7nrXb1QxGSHE0r4pAhx%2F7T%2BhxGZtf1P7vAFDDh%2F4hNtuFx8MJ%2Flf85fwf3EMGEeELxTrUBUhbkvgJHdrzPb9ecFiGe4KMZcRdePVzel%2FUexfaFse4%2BjjSbc4e7YIf7lcxqkDOKDs%2BMxRZX46n5pIshrWr6Q%2B%2BvfnBbspWUTrpgK159AO838HNuDnTKLUllwgzDnWRLRGYS20Y%2BROpTz7bsp4tftzpNQEvekz%2FntdTVNSPZivX8Ka8mivkckYYe8n%2F53vDaS1B%2BP3dpQkkHG6qavXxbBpu6sdso948dLr81TQRoB89tOCFOp6LJFC1RLDcAwQ1PcIJVZSl4WyEZWXNmwBBo0EHYXUk%2Fe1xRGXjps9tA5Ojo%2BV9f6RE3fD0%2B7vy4KRSMKPedx9xZULS%2Bk3iSTBDJA5dJ1pzboAhwTp9tOj69z%2BIcqPwX9zlV8bIOdO30cC5ewX9Ss9APNGo%2BJdpML1YG51VmlGfndOh0c2Mwp8jQvQY6pgEp9DFhQ%2F1UpxZX1r5PU67dpolK97C%2Fh2%2BvBHDKIBlMyqzqIYqNyBfsoALYc%2BT4pe2Xos2V7VMBFucvBjjVouWhEC77VygDopT0cg6Ny%2BbIo1TFscsy75%2FSF7RxGRopDxnsDW%2FcehClYkyLQma5KIOiE2CC71gRcWuJXhcmo1OMWBy1TDYBod4C%2FP5xjzbOee4p10%2BR3euGGU%2BQm2SBZ1yoSNKO2SCU&X-Amz-Signature=885ed2dec8f02479c33d22f58178a26b3db414c355c08f25f1a88ee52a30f941&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
