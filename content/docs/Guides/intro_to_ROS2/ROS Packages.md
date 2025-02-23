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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIY2NIN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg9tTfBssHrSX%2B68Wo%2F88eTH47Jwn1OQ71mp3G1mvOSAiEAuGlkTVrUTIpKX3S6XGUrLWj0E57IFOmeE5HMz%2B%2Bx6cYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1SRvbAFdlgDVRUlSrcAyLAsnT%2BhQDZuaqNAOskJbd%2FEY1%2B41by%2FgI6swM1taAagioaR2oG7xJUrcR4Igi4H4m74Wv28Ev1w%2B19D7yLlzIAX3ShL3V9hneE%2BZu6U3dqaSzGTqrzc4OEyiWIYZsXFFhOCqH8gs3DIL3Nnba9sT3iCPBDiwxTDbBJpZxFMeioZtPHtgl%2FZ8OIQ81Rt2zG8SMKYw1Nr5BwbuAySljOJLuS885Gb7xSa8uhAZMshvHtEL7l62W%2Fm7Cd0AKTGQQRGrC5OmzQdyd1X8887JFN9MWH0%2B0PYQ7daeJK4ds%2B4Etkwp3Kq%2Bp8GH%2FmWEE5DuuLgHgOHxd17n8vRpHh619weUAYHkzSCz9V4HqD%2F11xpkQMvkcuoNtfigiJqqRRgf%2BoEm9asjrY0y1wVBO%2FdhKdpU4id8o2I6EYpUtgK6MjPV5NLsHQrnctHvj86Jg7xZqa8d7dZGCeMO0GvX8Q%2BYDQazN7hxtEvyhLep6Wckf2zuuft6hXWGCEPEHdcV6Mt1%2FHI01Yffv1APcSHg5DiGJ6g5k5pzzt8Cy%2BvQ8hR%2BcPB9RsPr5yB0A3GFqTLCPaHutjRHcpRwD30ZEGl5A0mps1vkg9j8JHqB2Xa5pfmpnyiw2jKYB7ynsOWva8jaa0MKHy670GOqUBwkeMX863UuiCExya%2BEpoJ0ahEHjA1TMn15mk7FPgTfHcah1E0impnZwh05GCPpcy%2F7wKKTsRiT3CTbbk7ckXFP%2BYJ4cQOvXHKPshctr0u89ytxmpioA2T3%2FiVE2Bb3D0nDaDN805%2Br%2Fpp4gz6FBcvPqH89RCb%2BHRcNi1mq9O7mdpb65C8iN8%2BAS1nk7jPtnmv2zK5h3tk4iKhSBl1kTJsneX%2F%2Bzt&X-Amz-Signature=2157e7bd17480773c865debf66c62ec6674d3fa54fc2b87a90aa883394b99418&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIY2NIN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg9tTfBssHrSX%2B68Wo%2F88eTH47Jwn1OQ71mp3G1mvOSAiEAuGlkTVrUTIpKX3S6XGUrLWj0E57IFOmeE5HMz%2B%2Bx6cYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1SRvbAFdlgDVRUlSrcAyLAsnT%2BhQDZuaqNAOskJbd%2FEY1%2B41by%2FgI6swM1taAagioaR2oG7xJUrcR4Igi4H4m74Wv28Ev1w%2B19D7yLlzIAX3ShL3V9hneE%2BZu6U3dqaSzGTqrzc4OEyiWIYZsXFFhOCqH8gs3DIL3Nnba9sT3iCPBDiwxTDbBJpZxFMeioZtPHtgl%2FZ8OIQ81Rt2zG8SMKYw1Nr5BwbuAySljOJLuS885Gb7xSa8uhAZMshvHtEL7l62W%2Fm7Cd0AKTGQQRGrC5OmzQdyd1X8887JFN9MWH0%2B0PYQ7daeJK4ds%2B4Etkwp3Kq%2Bp8GH%2FmWEE5DuuLgHgOHxd17n8vRpHh619weUAYHkzSCz9V4HqD%2F11xpkQMvkcuoNtfigiJqqRRgf%2BoEm9asjrY0y1wVBO%2FdhKdpU4id8o2I6EYpUtgK6MjPV5NLsHQrnctHvj86Jg7xZqa8d7dZGCeMO0GvX8Q%2BYDQazN7hxtEvyhLep6Wckf2zuuft6hXWGCEPEHdcV6Mt1%2FHI01Yffv1APcSHg5DiGJ6g5k5pzzt8Cy%2BvQ8hR%2BcPB9RsPr5yB0A3GFqTLCPaHutjRHcpRwD30ZEGl5A0mps1vkg9j8JHqB2Xa5pfmpnyiw2jKYB7ynsOWva8jaa0MKHy670GOqUBwkeMX863UuiCExya%2BEpoJ0ahEHjA1TMn15mk7FPgTfHcah1E0impnZwh05GCPpcy%2F7wKKTsRiT3CTbbk7ckXFP%2BYJ4cQOvXHKPshctr0u89ytxmpioA2T3%2FiVE2Bb3D0nDaDN805%2Br%2Fpp4gz6FBcvPqH89RCb%2BHRcNi1mq9O7mdpb65C8iN8%2BAS1nk7jPtnmv2zK5h3tk4iKhSBl1kTJsneX%2F%2Bzt&X-Amz-Signature=e383230bbeed64d909c264af9eee330c741607265444647870bea4c74d6ccbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIY2NIN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg9tTfBssHrSX%2B68Wo%2F88eTH47Jwn1OQ71mp3G1mvOSAiEAuGlkTVrUTIpKX3S6XGUrLWj0E57IFOmeE5HMz%2B%2Bx6cYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1SRvbAFdlgDVRUlSrcAyLAsnT%2BhQDZuaqNAOskJbd%2FEY1%2B41by%2FgI6swM1taAagioaR2oG7xJUrcR4Igi4H4m74Wv28Ev1w%2B19D7yLlzIAX3ShL3V9hneE%2BZu6U3dqaSzGTqrzc4OEyiWIYZsXFFhOCqH8gs3DIL3Nnba9sT3iCPBDiwxTDbBJpZxFMeioZtPHtgl%2FZ8OIQ81Rt2zG8SMKYw1Nr5BwbuAySljOJLuS885Gb7xSa8uhAZMshvHtEL7l62W%2Fm7Cd0AKTGQQRGrC5OmzQdyd1X8887JFN9MWH0%2B0PYQ7daeJK4ds%2B4Etkwp3Kq%2Bp8GH%2FmWEE5DuuLgHgOHxd17n8vRpHh619weUAYHkzSCz9V4HqD%2F11xpkQMvkcuoNtfigiJqqRRgf%2BoEm9asjrY0y1wVBO%2FdhKdpU4id8o2I6EYpUtgK6MjPV5NLsHQrnctHvj86Jg7xZqa8d7dZGCeMO0GvX8Q%2BYDQazN7hxtEvyhLep6Wckf2zuuft6hXWGCEPEHdcV6Mt1%2FHI01Yffv1APcSHg5DiGJ6g5k5pzzt8Cy%2BvQ8hR%2BcPB9RsPr5yB0A3GFqTLCPaHutjRHcpRwD30ZEGl5A0mps1vkg9j8JHqB2Xa5pfmpnyiw2jKYB7ynsOWva8jaa0MKHy670GOqUBwkeMX863UuiCExya%2BEpoJ0ahEHjA1TMn15mk7FPgTfHcah1E0impnZwh05GCPpcy%2F7wKKTsRiT3CTbbk7ckXFP%2BYJ4cQOvXHKPshctr0u89ytxmpioA2T3%2FiVE2Bb3D0nDaDN805%2Br%2Fpp4gz6FBcvPqH89RCb%2BHRcNi1mq9O7mdpb65C8iN8%2BAS1nk7jPtnmv2zK5h3tk4iKhSBl1kTJsneX%2F%2Bzt&X-Amz-Signature=b90bab34183623a0b1d82ae4898a8528bd852a6a92978193f1ad20f9b168d1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIY2NIN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg9tTfBssHrSX%2B68Wo%2F88eTH47Jwn1OQ71mp3G1mvOSAiEAuGlkTVrUTIpKX3S6XGUrLWj0E57IFOmeE5HMz%2B%2Bx6cYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1SRvbAFdlgDVRUlSrcAyLAsnT%2BhQDZuaqNAOskJbd%2FEY1%2B41by%2FgI6swM1taAagioaR2oG7xJUrcR4Igi4H4m74Wv28Ev1w%2B19D7yLlzIAX3ShL3V9hneE%2BZu6U3dqaSzGTqrzc4OEyiWIYZsXFFhOCqH8gs3DIL3Nnba9sT3iCPBDiwxTDbBJpZxFMeioZtPHtgl%2FZ8OIQ81Rt2zG8SMKYw1Nr5BwbuAySljOJLuS885Gb7xSa8uhAZMshvHtEL7l62W%2Fm7Cd0AKTGQQRGrC5OmzQdyd1X8887JFN9MWH0%2B0PYQ7daeJK4ds%2B4Etkwp3Kq%2Bp8GH%2FmWEE5DuuLgHgOHxd17n8vRpHh619weUAYHkzSCz9V4HqD%2F11xpkQMvkcuoNtfigiJqqRRgf%2BoEm9asjrY0y1wVBO%2FdhKdpU4id8o2I6EYpUtgK6MjPV5NLsHQrnctHvj86Jg7xZqa8d7dZGCeMO0GvX8Q%2BYDQazN7hxtEvyhLep6Wckf2zuuft6hXWGCEPEHdcV6Mt1%2FHI01Yffv1APcSHg5DiGJ6g5k5pzzt8Cy%2BvQ8hR%2BcPB9RsPr5yB0A3GFqTLCPaHutjRHcpRwD30ZEGl5A0mps1vkg9j8JHqB2Xa5pfmpnyiw2jKYB7ynsOWva8jaa0MKHy670GOqUBwkeMX863UuiCExya%2BEpoJ0ahEHjA1TMn15mk7FPgTfHcah1E0impnZwh05GCPpcy%2F7wKKTsRiT3CTbbk7ckXFP%2BYJ4cQOvXHKPshctr0u89ytxmpioA2T3%2FiVE2Bb3D0nDaDN805%2Br%2Fpp4gz6FBcvPqH89RCb%2BHRcNi1mq9O7mdpb65C8iN8%2BAS1nk7jPtnmv2zK5h3tk4iKhSBl1kTJsneX%2F%2Bzt&X-Amz-Signature=013fcff7a3eb11a444f81f5b113f0086a37292529880e4c3b9e5b3a5ecce8a38&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIY2NIN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg9tTfBssHrSX%2B68Wo%2F88eTH47Jwn1OQ71mp3G1mvOSAiEAuGlkTVrUTIpKX3S6XGUrLWj0E57IFOmeE5HMz%2B%2Bx6cYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1SRvbAFdlgDVRUlSrcAyLAsnT%2BhQDZuaqNAOskJbd%2FEY1%2B41by%2FgI6swM1taAagioaR2oG7xJUrcR4Igi4H4m74Wv28Ev1w%2B19D7yLlzIAX3ShL3V9hneE%2BZu6U3dqaSzGTqrzc4OEyiWIYZsXFFhOCqH8gs3DIL3Nnba9sT3iCPBDiwxTDbBJpZxFMeioZtPHtgl%2FZ8OIQ81Rt2zG8SMKYw1Nr5BwbuAySljOJLuS885Gb7xSa8uhAZMshvHtEL7l62W%2Fm7Cd0AKTGQQRGrC5OmzQdyd1X8887JFN9MWH0%2B0PYQ7daeJK4ds%2B4Etkwp3Kq%2Bp8GH%2FmWEE5DuuLgHgOHxd17n8vRpHh619weUAYHkzSCz9V4HqD%2F11xpkQMvkcuoNtfigiJqqRRgf%2BoEm9asjrY0y1wVBO%2FdhKdpU4id8o2I6EYpUtgK6MjPV5NLsHQrnctHvj86Jg7xZqa8d7dZGCeMO0GvX8Q%2BYDQazN7hxtEvyhLep6Wckf2zuuft6hXWGCEPEHdcV6Mt1%2FHI01Yffv1APcSHg5DiGJ6g5k5pzzt8Cy%2BvQ8hR%2BcPB9RsPr5yB0A3GFqTLCPaHutjRHcpRwD30ZEGl5A0mps1vkg9j8JHqB2Xa5pfmpnyiw2jKYB7ynsOWva8jaa0MKHy670GOqUBwkeMX863UuiCExya%2BEpoJ0ahEHjA1TMn15mk7FPgTfHcah1E0impnZwh05GCPpcy%2F7wKKTsRiT3CTbbk7ckXFP%2BYJ4cQOvXHKPshctr0u89ytxmpioA2T3%2FiVE2Bb3D0nDaDN805%2Br%2Fpp4gz6FBcvPqH89RCb%2BHRcNi1mq9O7mdpb65C8iN8%2BAS1nk7jPtnmv2zK5h3tk4iKhSBl1kTJsneX%2F%2Bzt&X-Amz-Signature=f7c33cd495caad0248dafc389b4b58ca37c2d66452aa443bdf001cef3b9dc4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIY2NIN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg9tTfBssHrSX%2B68Wo%2F88eTH47Jwn1OQ71mp3G1mvOSAiEAuGlkTVrUTIpKX3S6XGUrLWj0E57IFOmeE5HMz%2B%2Bx6cYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1SRvbAFdlgDVRUlSrcAyLAsnT%2BhQDZuaqNAOskJbd%2FEY1%2B41by%2FgI6swM1taAagioaR2oG7xJUrcR4Igi4H4m74Wv28Ev1w%2B19D7yLlzIAX3ShL3V9hneE%2BZu6U3dqaSzGTqrzc4OEyiWIYZsXFFhOCqH8gs3DIL3Nnba9sT3iCPBDiwxTDbBJpZxFMeioZtPHtgl%2FZ8OIQ81Rt2zG8SMKYw1Nr5BwbuAySljOJLuS885Gb7xSa8uhAZMshvHtEL7l62W%2Fm7Cd0AKTGQQRGrC5OmzQdyd1X8887JFN9MWH0%2B0PYQ7daeJK4ds%2B4Etkwp3Kq%2Bp8GH%2FmWEE5DuuLgHgOHxd17n8vRpHh619weUAYHkzSCz9V4HqD%2F11xpkQMvkcuoNtfigiJqqRRgf%2BoEm9asjrY0y1wVBO%2FdhKdpU4id8o2I6EYpUtgK6MjPV5NLsHQrnctHvj86Jg7xZqa8d7dZGCeMO0GvX8Q%2BYDQazN7hxtEvyhLep6Wckf2zuuft6hXWGCEPEHdcV6Mt1%2FHI01Yffv1APcSHg5DiGJ6g5k5pzzt8Cy%2BvQ8hR%2BcPB9RsPr5yB0A3GFqTLCPaHutjRHcpRwD30ZEGl5A0mps1vkg9j8JHqB2Xa5pfmpnyiw2jKYB7ynsOWva8jaa0MKHy670GOqUBwkeMX863UuiCExya%2BEpoJ0ahEHjA1TMn15mk7FPgTfHcah1E0impnZwh05GCPpcy%2F7wKKTsRiT3CTbbk7ckXFP%2BYJ4cQOvXHKPshctr0u89ytxmpioA2T3%2FiVE2Bb3D0nDaDN805%2Br%2Fpp4gz6FBcvPqH89RCb%2BHRcNi1mq9O7mdpb65C8iN8%2BAS1nk7jPtnmv2zK5h3tk4iKhSBl1kTJsneX%2F%2Bzt&X-Amz-Signature=b9f1d6eb013a769153b53a7e1c8064397542a1fc4827316e302d135d3d2e2b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIY2NIN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg9tTfBssHrSX%2B68Wo%2F88eTH47Jwn1OQ71mp3G1mvOSAiEAuGlkTVrUTIpKX3S6XGUrLWj0E57IFOmeE5HMz%2B%2Bx6cYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDN1SRvbAFdlgDVRUlSrcAyLAsnT%2BhQDZuaqNAOskJbd%2FEY1%2B41by%2FgI6swM1taAagioaR2oG7xJUrcR4Igi4H4m74Wv28Ev1w%2B19D7yLlzIAX3ShL3V9hneE%2BZu6U3dqaSzGTqrzc4OEyiWIYZsXFFhOCqH8gs3DIL3Nnba9sT3iCPBDiwxTDbBJpZxFMeioZtPHtgl%2FZ8OIQ81Rt2zG8SMKYw1Nr5BwbuAySljOJLuS885Gb7xSa8uhAZMshvHtEL7l62W%2Fm7Cd0AKTGQQRGrC5OmzQdyd1X8887JFN9MWH0%2B0PYQ7daeJK4ds%2B4Etkwp3Kq%2Bp8GH%2FmWEE5DuuLgHgOHxd17n8vRpHh619weUAYHkzSCz9V4HqD%2F11xpkQMvkcuoNtfigiJqqRRgf%2BoEm9asjrY0y1wVBO%2FdhKdpU4id8o2I6EYpUtgK6MjPV5NLsHQrnctHvj86Jg7xZqa8d7dZGCeMO0GvX8Q%2BYDQazN7hxtEvyhLep6Wckf2zuuft6hXWGCEPEHdcV6Mt1%2FHI01Yffv1APcSHg5DiGJ6g5k5pzzt8Cy%2BvQ8hR%2BcPB9RsPr5yB0A3GFqTLCPaHutjRHcpRwD30ZEGl5A0mps1vkg9j8JHqB2Xa5pfmpnyiw2jKYB7ynsOWva8jaa0MKHy670GOqUBwkeMX863UuiCExya%2BEpoJ0ahEHjA1TMn15mk7FPgTfHcah1E0impnZwh05GCPpcy%2F7wKKTsRiT3CTbbk7ckXFP%2BYJ4cQOvXHKPshctr0u89ytxmpioA2T3%2FiVE2Bb3D0nDaDN805%2Br%2Fpp4gz6FBcvPqH89RCb%2BHRcNi1mq9O7mdpb65C8iN8%2BAS1nk7jPtnmv2zK5h3tk4iKhSBl1kTJsneX%2F%2Bzt&X-Amz-Signature=abd8210e8e47e5e15a67a8b1e92abe71053433d0f37f23a1ae59fea95402757c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
