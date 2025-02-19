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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEJ3JSU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBA1usbGME%2FLMcZi1hsId%2Fws7TGgYxtopW5ifdPzmnvDAiAdR2Q3pJslktLFye6xrZxmCvulmuPlt9HSpHRiBslI0CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7orGIELcB2mWK4r6KtwDMY7zBtfJaOvahOv1D5ordLM4brg2FKVCi2p2TIoCiiQ%2BcWlNKyKDZuuxQL1u%2FDhm6bPMbgNTnq6KTmznQdHeYTILlQst8595ImuMrFYfnZL9y4U7vFxQRtU4OZvBBLnCx8U4qcb4WEYPJ2Pixq2vJ6hIzhlaVxAmRMTI%2BGXE%2FwUOJ%2Fl8fk6TbgrGfNL0fnig5zPhyPCS%2B8ze%2BO%2BuRZw2WEeA7G18bNCE5E5xCyLh7ih%2F7OrhbOvbsVrJvAFZ8mWnGMGl2p%2B83EQ5sLPBhH0ygbdg5hksIMhEovHgv42krgOTKFMSa4l8AN6t9IJWEy8NXKf97lBgyzk%2BJKNuyB%2FuaAfdxEs8sHkjKuib91It6fxajTRjtDhhvM3mmAISiQqvS4WkT8O5%2FTNdHGbgyCPwS703zngrldtvAf2CAe8dfqL%2Bc2ShDXR66bqCThpLXZ1tpqUNC1PcIQ9%2BpfAog8I4GBJft627dY4APF1Z8lqr5tjB3L2I5iOvGazqSeq2TgW52imWLwVufnWd9VnltIcH8UZvCMyRembGSB1MUvvFkdgplo%2FYJvvSYBb71k6115tkXNlo6y%2BuLo0yeZlCwLh1sKHwcnjYqKDRDcTfMRtPfD8Qud1nxPEqMl7Ik%2FUwjbzWvQY6pgFj7O46JwkC7agwtkrlbk%2BB67PWE%2BXDrJXQYyxryYRGsE6aGcm%2Bb44fjEbMK1oht3c%2BrwMakqGkA5O4yNK2RNLwsnWyOM8tdgW0Syrse33EwNr7wvU1eM2qoLG6M4nbnp%2FgSlHlU15B5QP56GnTjLuZjCnyYyva4xa4xbwXc4Jfi74bmobtHpcavNo04Jd87CIZkKGWmE52GigoDzZluEj1ygybr57r&X-Amz-Signature=b79780adb0ea5c3227d7f2b781da8a0c9b36b108ce560427dabf46b3aa878f88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEJ3JSU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBA1usbGME%2FLMcZi1hsId%2Fws7TGgYxtopW5ifdPzmnvDAiAdR2Q3pJslktLFye6xrZxmCvulmuPlt9HSpHRiBslI0CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7orGIELcB2mWK4r6KtwDMY7zBtfJaOvahOv1D5ordLM4brg2FKVCi2p2TIoCiiQ%2BcWlNKyKDZuuxQL1u%2FDhm6bPMbgNTnq6KTmznQdHeYTILlQst8595ImuMrFYfnZL9y4U7vFxQRtU4OZvBBLnCx8U4qcb4WEYPJ2Pixq2vJ6hIzhlaVxAmRMTI%2BGXE%2FwUOJ%2Fl8fk6TbgrGfNL0fnig5zPhyPCS%2B8ze%2BO%2BuRZw2WEeA7G18bNCE5E5xCyLh7ih%2F7OrhbOvbsVrJvAFZ8mWnGMGl2p%2B83EQ5sLPBhH0ygbdg5hksIMhEovHgv42krgOTKFMSa4l8AN6t9IJWEy8NXKf97lBgyzk%2BJKNuyB%2FuaAfdxEs8sHkjKuib91It6fxajTRjtDhhvM3mmAISiQqvS4WkT8O5%2FTNdHGbgyCPwS703zngrldtvAf2CAe8dfqL%2Bc2ShDXR66bqCThpLXZ1tpqUNC1PcIQ9%2BpfAog8I4GBJft627dY4APF1Z8lqr5tjB3L2I5iOvGazqSeq2TgW52imWLwVufnWd9VnltIcH8UZvCMyRembGSB1MUvvFkdgplo%2FYJvvSYBb71k6115tkXNlo6y%2BuLo0yeZlCwLh1sKHwcnjYqKDRDcTfMRtPfD8Qud1nxPEqMl7Ik%2FUwjbzWvQY6pgFj7O46JwkC7agwtkrlbk%2BB67PWE%2BXDrJXQYyxryYRGsE6aGcm%2Bb44fjEbMK1oht3c%2BrwMakqGkA5O4yNK2RNLwsnWyOM8tdgW0Syrse33EwNr7wvU1eM2qoLG6M4nbnp%2FgSlHlU15B5QP56GnTjLuZjCnyYyva4xa4xbwXc4Jfi74bmobtHpcavNo04Jd87CIZkKGWmE52GigoDzZluEj1ygybr57r&X-Amz-Signature=3685d93ce9a14fddc0fb327297bc54db775a275c8157756bdf526a7602e6a8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEJ3JSU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBA1usbGME%2FLMcZi1hsId%2Fws7TGgYxtopW5ifdPzmnvDAiAdR2Q3pJslktLFye6xrZxmCvulmuPlt9HSpHRiBslI0CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7orGIELcB2mWK4r6KtwDMY7zBtfJaOvahOv1D5ordLM4brg2FKVCi2p2TIoCiiQ%2BcWlNKyKDZuuxQL1u%2FDhm6bPMbgNTnq6KTmznQdHeYTILlQst8595ImuMrFYfnZL9y4U7vFxQRtU4OZvBBLnCx8U4qcb4WEYPJ2Pixq2vJ6hIzhlaVxAmRMTI%2BGXE%2FwUOJ%2Fl8fk6TbgrGfNL0fnig5zPhyPCS%2B8ze%2BO%2BuRZw2WEeA7G18bNCE5E5xCyLh7ih%2F7OrhbOvbsVrJvAFZ8mWnGMGl2p%2B83EQ5sLPBhH0ygbdg5hksIMhEovHgv42krgOTKFMSa4l8AN6t9IJWEy8NXKf97lBgyzk%2BJKNuyB%2FuaAfdxEs8sHkjKuib91It6fxajTRjtDhhvM3mmAISiQqvS4WkT8O5%2FTNdHGbgyCPwS703zngrldtvAf2CAe8dfqL%2Bc2ShDXR66bqCThpLXZ1tpqUNC1PcIQ9%2BpfAog8I4GBJft627dY4APF1Z8lqr5tjB3L2I5iOvGazqSeq2TgW52imWLwVufnWd9VnltIcH8UZvCMyRembGSB1MUvvFkdgplo%2FYJvvSYBb71k6115tkXNlo6y%2BuLo0yeZlCwLh1sKHwcnjYqKDRDcTfMRtPfD8Qud1nxPEqMl7Ik%2FUwjbzWvQY6pgFj7O46JwkC7agwtkrlbk%2BB67PWE%2BXDrJXQYyxryYRGsE6aGcm%2Bb44fjEbMK1oht3c%2BrwMakqGkA5O4yNK2RNLwsnWyOM8tdgW0Syrse33EwNr7wvU1eM2qoLG6M4nbnp%2FgSlHlU15B5QP56GnTjLuZjCnyYyva4xa4xbwXc4Jfi74bmobtHpcavNo04Jd87CIZkKGWmE52GigoDzZluEj1ygybr57r&X-Amz-Signature=577667d7a9b494469573539fd8913a3da9108544914b5611032251fd4b16ad1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEJ3JSU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBA1usbGME%2FLMcZi1hsId%2Fws7TGgYxtopW5ifdPzmnvDAiAdR2Q3pJslktLFye6xrZxmCvulmuPlt9HSpHRiBslI0CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7orGIELcB2mWK4r6KtwDMY7zBtfJaOvahOv1D5ordLM4brg2FKVCi2p2TIoCiiQ%2BcWlNKyKDZuuxQL1u%2FDhm6bPMbgNTnq6KTmznQdHeYTILlQst8595ImuMrFYfnZL9y4U7vFxQRtU4OZvBBLnCx8U4qcb4WEYPJ2Pixq2vJ6hIzhlaVxAmRMTI%2BGXE%2FwUOJ%2Fl8fk6TbgrGfNL0fnig5zPhyPCS%2B8ze%2BO%2BuRZw2WEeA7G18bNCE5E5xCyLh7ih%2F7OrhbOvbsVrJvAFZ8mWnGMGl2p%2B83EQ5sLPBhH0ygbdg5hksIMhEovHgv42krgOTKFMSa4l8AN6t9IJWEy8NXKf97lBgyzk%2BJKNuyB%2FuaAfdxEs8sHkjKuib91It6fxajTRjtDhhvM3mmAISiQqvS4WkT8O5%2FTNdHGbgyCPwS703zngrldtvAf2CAe8dfqL%2Bc2ShDXR66bqCThpLXZ1tpqUNC1PcIQ9%2BpfAog8I4GBJft627dY4APF1Z8lqr5tjB3L2I5iOvGazqSeq2TgW52imWLwVufnWd9VnltIcH8UZvCMyRembGSB1MUvvFkdgplo%2FYJvvSYBb71k6115tkXNlo6y%2BuLo0yeZlCwLh1sKHwcnjYqKDRDcTfMRtPfD8Qud1nxPEqMl7Ik%2FUwjbzWvQY6pgFj7O46JwkC7agwtkrlbk%2BB67PWE%2BXDrJXQYyxryYRGsE6aGcm%2Bb44fjEbMK1oht3c%2BrwMakqGkA5O4yNK2RNLwsnWyOM8tdgW0Syrse33EwNr7wvU1eM2qoLG6M4nbnp%2FgSlHlU15B5QP56GnTjLuZjCnyYyva4xa4xbwXc4Jfi74bmobtHpcavNo04Jd87CIZkKGWmE52GigoDzZluEj1ygybr57r&X-Amz-Signature=83622318801f02ae0e6e5b4ce3fd2158f87381d54d3beba80c69b54db7fd8cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEJ3JSU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBA1usbGME%2FLMcZi1hsId%2Fws7TGgYxtopW5ifdPzmnvDAiAdR2Q3pJslktLFye6xrZxmCvulmuPlt9HSpHRiBslI0CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7orGIELcB2mWK4r6KtwDMY7zBtfJaOvahOv1D5ordLM4brg2FKVCi2p2TIoCiiQ%2BcWlNKyKDZuuxQL1u%2FDhm6bPMbgNTnq6KTmznQdHeYTILlQst8595ImuMrFYfnZL9y4U7vFxQRtU4OZvBBLnCx8U4qcb4WEYPJ2Pixq2vJ6hIzhlaVxAmRMTI%2BGXE%2FwUOJ%2Fl8fk6TbgrGfNL0fnig5zPhyPCS%2B8ze%2BO%2BuRZw2WEeA7G18bNCE5E5xCyLh7ih%2F7OrhbOvbsVrJvAFZ8mWnGMGl2p%2B83EQ5sLPBhH0ygbdg5hksIMhEovHgv42krgOTKFMSa4l8AN6t9IJWEy8NXKf97lBgyzk%2BJKNuyB%2FuaAfdxEs8sHkjKuib91It6fxajTRjtDhhvM3mmAISiQqvS4WkT8O5%2FTNdHGbgyCPwS703zngrldtvAf2CAe8dfqL%2Bc2ShDXR66bqCThpLXZ1tpqUNC1PcIQ9%2BpfAog8I4GBJft627dY4APF1Z8lqr5tjB3L2I5iOvGazqSeq2TgW52imWLwVufnWd9VnltIcH8UZvCMyRembGSB1MUvvFkdgplo%2FYJvvSYBb71k6115tkXNlo6y%2BuLo0yeZlCwLh1sKHwcnjYqKDRDcTfMRtPfD8Qud1nxPEqMl7Ik%2FUwjbzWvQY6pgFj7O46JwkC7agwtkrlbk%2BB67PWE%2BXDrJXQYyxryYRGsE6aGcm%2Bb44fjEbMK1oht3c%2BrwMakqGkA5O4yNK2RNLwsnWyOM8tdgW0Syrse33EwNr7wvU1eM2qoLG6M4nbnp%2FgSlHlU15B5QP56GnTjLuZjCnyYyva4xa4xbwXc4Jfi74bmobtHpcavNo04Jd87CIZkKGWmE52GigoDzZluEj1ygybr57r&X-Amz-Signature=39774eecb7fcb41c20a119565205fa44fd6da76ed250722da1d8134f0342f4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEJ3JSU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBA1usbGME%2FLMcZi1hsId%2Fws7TGgYxtopW5ifdPzmnvDAiAdR2Q3pJslktLFye6xrZxmCvulmuPlt9HSpHRiBslI0CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7orGIELcB2mWK4r6KtwDMY7zBtfJaOvahOv1D5ordLM4brg2FKVCi2p2TIoCiiQ%2BcWlNKyKDZuuxQL1u%2FDhm6bPMbgNTnq6KTmznQdHeYTILlQst8595ImuMrFYfnZL9y4U7vFxQRtU4OZvBBLnCx8U4qcb4WEYPJ2Pixq2vJ6hIzhlaVxAmRMTI%2BGXE%2FwUOJ%2Fl8fk6TbgrGfNL0fnig5zPhyPCS%2B8ze%2BO%2BuRZw2WEeA7G18bNCE5E5xCyLh7ih%2F7OrhbOvbsVrJvAFZ8mWnGMGl2p%2B83EQ5sLPBhH0ygbdg5hksIMhEovHgv42krgOTKFMSa4l8AN6t9IJWEy8NXKf97lBgyzk%2BJKNuyB%2FuaAfdxEs8sHkjKuib91It6fxajTRjtDhhvM3mmAISiQqvS4WkT8O5%2FTNdHGbgyCPwS703zngrldtvAf2CAe8dfqL%2Bc2ShDXR66bqCThpLXZ1tpqUNC1PcIQ9%2BpfAog8I4GBJft627dY4APF1Z8lqr5tjB3L2I5iOvGazqSeq2TgW52imWLwVufnWd9VnltIcH8UZvCMyRembGSB1MUvvFkdgplo%2FYJvvSYBb71k6115tkXNlo6y%2BuLo0yeZlCwLh1sKHwcnjYqKDRDcTfMRtPfD8Qud1nxPEqMl7Ik%2FUwjbzWvQY6pgFj7O46JwkC7agwtkrlbk%2BB67PWE%2BXDrJXQYyxryYRGsE6aGcm%2Bb44fjEbMK1oht3c%2BrwMakqGkA5O4yNK2RNLwsnWyOM8tdgW0Syrse33EwNr7wvU1eM2qoLG6M4nbnp%2FgSlHlU15B5QP56GnTjLuZjCnyYyva4xa4xbwXc4Jfi74bmobtHpcavNo04Jd87CIZkKGWmE52GigoDzZluEj1ygybr57r&X-Amz-Signature=c3ef47572341f28f84b76eab02a60b80f67878d534ad5e7dac21f2d19fec4a88&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEJ3JSU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBA1usbGME%2FLMcZi1hsId%2Fws7TGgYxtopW5ifdPzmnvDAiAdR2Q3pJslktLFye6xrZxmCvulmuPlt9HSpHRiBslI0CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7orGIELcB2mWK4r6KtwDMY7zBtfJaOvahOv1D5ordLM4brg2FKVCi2p2TIoCiiQ%2BcWlNKyKDZuuxQL1u%2FDhm6bPMbgNTnq6KTmznQdHeYTILlQst8595ImuMrFYfnZL9y4U7vFxQRtU4OZvBBLnCx8U4qcb4WEYPJ2Pixq2vJ6hIzhlaVxAmRMTI%2BGXE%2FwUOJ%2Fl8fk6TbgrGfNL0fnig5zPhyPCS%2B8ze%2BO%2BuRZw2WEeA7G18bNCE5E5xCyLh7ih%2F7OrhbOvbsVrJvAFZ8mWnGMGl2p%2B83EQ5sLPBhH0ygbdg5hksIMhEovHgv42krgOTKFMSa4l8AN6t9IJWEy8NXKf97lBgyzk%2BJKNuyB%2FuaAfdxEs8sHkjKuib91It6fxajTRjtDhhvM3mmAISiQqvS4WkT8O5%2FTNdHGbgyCPwS703zngrldtvAf2CAe8dfqL%2Bc2ShDXR66bqCThpLXZ1tpqUNC1PcIQ9%2BpfAog8I4GBJft627dY4APF1Z8lqr5tjB3L2I5iOvGazqSeq2TgW52imWLwVufnWd9VnltIcH8UZvCMyRembGSB1MUvvFkdgplo%2FYJvvSYBb71k6115tkXNlo6y%2BuLo0yeZlCwLh1sKHwcnjYqKDRDcTfMRtPfD8Qud1nxPEqMl7Ik%2FUwjbzWvQY6pgFj7O46JwkC7agwtkrlbk%2BB67PWE%2BXDrJXQYyxryYRGsE6aGcm%2Bb44fjEbMK1oht3c%2BrwMakqGkA5O4yNK2RNLwsnWyOM8tdgW0Syrse33EwNr7wvU1eM2qoLG6M4nbnp%2FgSlHlU15B5QP56GnTjLuZjCnyYyva4xa4xbwXc4Jfi74bmobtHpcavNo04Jd87CIZkKGWmE52GigoDzZluEj1ygybr57r&X-Amz-Signature=b7fa3027ff8d040134e89f68d1ca14d9030ae507a29ab1e25c0a8650f8336048&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
