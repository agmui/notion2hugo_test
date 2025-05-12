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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQJCKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIALHFnrgIljItDmB5pQ8m3emT1PGwC0lEWzFptuAXHTeAiEA%2Bqj1nQFwgtmAjlePo9TCpz6Cz5xkB8Do8viQPkTPtbcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jAfIwKER7G6vKMyrcAwkjmV6i5hjGR8M%2F418377oRes28NZmBslTEwRH3MZj3thL3Zob%2BOH0T4CgFmusF87o6snzu1XhXBVqBkv3yhUNKzRCnPGOmMUuIjUhFsZF%2FVsluVNGH7Ho6KC%2Bx44dZeEVjNJMD2YfQx7QrVKP5XVp%2BLhycoJ3BcPuFFoYmrQRLbGVGN1nOX35Wy5DKZVZrIPPH7IgpX1wpQgZEsEe4ipVazHECbldRJAvgiJ68F9r5rukekz%2B2GAk2BiD5yewHtlWspvlqpqOj%2FJ3AB8LPiVuAQR4cGCFtclrzV4e5c8QuzSDEo%2BHNaw3q6g7I1Fl2PVOddqYpatFPlaU0gHqCZOUTgIQz0SXeErWXZxYjCpk4Vdn0rNO%2FwMbGnWe%2FCzu4oTu9e6EiJTk43e7bdCQu7NEWfiwQe7zWQB6nwHdAyRm2SzrtLCV8ItBtjNHoJx9ka2y42kylyLNU9sOAMG9Jo6PT3rxnh%2FW0LpmRa%2FXCjSTaP6SenxegeiC3PILOwv%2FEtUl%2BErC6%2Fyjc%2BjqlzexP6gNWJDc2zcISkhJDTV2%2Boq3Ch%2BxPwuI4jtPcT4dIL%2FhZw430Nvxh7srp%2FBB4Bo5H2C675Fi0A9HvgOQjZsOFSw6CkTTOX%2BBa64Ja6GpQMPKEhcEGOqUBDvPTVRytRRN7Jmr4CdrandwtY4uwjWWaL%2FYEoXWZvgorPFphtRFAG04NtLnAYiCRSd4Wv2AW0rzM2bQoFrWl32iLtAWc72aS8nmFgZPygJ4Qr0zi%2Bzi1UuQIBFLA3r3xM5pIYen73jJSXkyiNkh%2BtfahSzniOSHxRIeaSjEnRmjidJ77ROX93ZFtwivIs7ZxBJOycQenCiSzZ1w7Dy8IrRezjgeb&X-Amz-Signature=890cc9f2a22a0aa07ab83fe70259aee9637b9b940931654c72f558bc2a23e1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQJCKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIALHFnrgIljItDmB5pQ8m3emT1PGwC0lEWzFptuAXHTeAiEA%2Bqj1nQFwgtmAjlePo9TCpz6Cz5xkB8Do8viQPkTPtbcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jAfIwKER7G6vKMyrcAwkjmV6i5hjGR8M%2F418377oRes28NZmBslTEwRH3MZj3thL3Zob%2BOH0T4CgFmusF87o6snzu1XhXBVqBkv3yhUNKzRCnPGOmMUuIjUhFsZF%2FVsluVNGH7Ho6KC%2Bx44dZeEVjNJMD2YfQx7QrVKP5XVp%2BLhycoJ3BcPuFFoYmrQRLbGVGN1nOX35Wy5DKZVZrIPPH7IgpX1wpQgZEsEe4ipVazHECbldRJAvgiJ68F9r5rukekz%2B2GAk2BiD5yewHtlWspvlqpqOj%2FJ3AB8LPiVuAQR4cGCFtclrzV4e5c8QuzSDEo%2BHNaw3q6g7I1Fl2PVOddqYpatFPlaU0gHqCZOUTgIQz0SXeErWXZxYjCpk4Vdn0rNO%2FwMbGnWe%2FCzu4oTu9e6EiJTk43e7bdCQu7NEWfiwQe7zWQB6nwHdAyRm2SzrtLCV8ItBtjNHoJx9ka2y42kylyLNU9sOAMG9Jo6PT3rxnh%2FW0LpmRa%2FXCjSTaP6SenxegeiC3PILOwv%2FEtUl%2BErC6%2Fyjc%2BjqlzexP6gNWJDc2zcISkhJDTV2%2Boq3Ch%2BxPwuI4jtPcT4dIL%2FhZw430Nvxh7srp%2FBB4Bo5H2C675Fi0A9HvgOQjZsOFSw6CkTTOX%2BBa64Ja6GpQMPKEhcEGOqUBDvPTVRytRRN7Jmr4CdrandwtY4uwjWWaL%2FYEoXWZvgorPFphtRFAG04NtLnAYiCRSd4Wv2AW0rzM2bQoFrWl32iLtAWc72aS8nmFgZPygJ4Qr0zi%2Bzi1UuQIBFLA3r3xM5pIYen73jJSXkyiNkh%2BtfahSzniOSHxRIeaSjEnRmjidJ77ROX93ZFtwivIs7ZxBJOycQenCiSzZ1w7Dy8IrRezjgeb&X-Amz-Signature=28c33e7928ec90dbd2fa940bd10d357b174e0e7a6ac7f0ab59bcc4f0e502cf86&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQJCKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIALHFnrgIljItDmB5pQ8m3emT1PGwC0lEWzFptuAXHTeAiEA%2Bqj1nQFwgtmAjlePo9TCpz6Cz5xkB8Do8viQPkTPtbcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jAfIwKER7G6vKMyrcAwkjmV6i5hjGR8M%2F418377oRes28NZmBslTEwRH3MZj3thL3Zob%2BOH0T4CgFmusF87o6snzu1XhXBVqBkv3yhUNKzRCnPGOmMUuIjUhFsZF%2FVsluVNGH7Ho6KC%2Bx44dZeEVjNJMD2YfQx7QrVKP5XVp%2BLhycoJ3BcPuFFoYmrQRLbGVGN1nOX35Wy5DKZVZrIPPH7IgpX1wpQgZEsEe4ipVazHECbldRJAvgiJ68F9r5rukekz%2B2GAk2BiD5yewHtlWspvlqpqOj%2FJ3AB8LPiVuAQR4cGCFtclrzV4e5c8QuzSDEo%2BHNaw3q6g7I1Fl2PVOddqYpatFPlaU0gHqCZOUTgIQz0SXeErWXZxYjCpk4Vdn0rNO%2FwMbGnWe%2FCzu4oTu9e6EiJTk43e7bdCQu7NEWfiwQe7zWQB6nwHdAyRm2SzrtLCV8ItBtjNHoJx9ka2y42kylyLNU9sOAMG9Jo6PT3rxnh%2FW0LpmRa%2FXCjSTaP6SenxegeiC3PILOwv%2FEtUl%2BErC6%2Fyjc%2BjqlzexP6gNWJDc2zcISkhJDTV2%2Boq3Ch%2BxPwuI4jtPcT4dIL%2FhZw430Nvxh7srp%2FBB4Bo5H2C675Fi0A9HvgOQjZsOFSw6CkTTOX%2BBa64Ja6GpQMPKEhcEGOqUBDvPTVRytRRN7Jmr4CdrandwtY4uwjWWaL%2FYEoXWZvgorPFphtRFAG04NtLnAYiCRSd4Wv2AW0rzM2bQoFrWl32iLtAWc72aS8nmFgZPygJ4Qr0zi%2Bzi1UuQIBFLA3r3xM5pIYen73jJSXkyiNkh%2BtfahSzniOSHxRIeaSjEnRmjidJ77ROX93ZFtwivIs7ZxBJOycQenCiSzZ1w7Dy8IrRezjgeb&X-Amz-Signature=cf6c5c76221d01a2c32d9dad95eeb27f5a192cf3d3bbe91a80889afe7b9a57ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQJCKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIALHFnrgIljItDmB5pQ8m3emT1PGwC0lEWzFptuAXHTeAiEA%2Bqj1nQFwgtmAjlePo9TCpz6Cz5xkB8Do8viQPkTPtbcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jAfIwKER7G6vKMyrcAwkjmV6i5hjGR8M%2F418377oRes28NZmBslTEwRH3MZj3thL3Zob%2BOH0T4CgFmusF87o6snzu1XhXBVqBkv3yhUNKzRCnPGOmMUuIjUhFsZF%2FVsluVNGH7Ho6KC%2Bx44dZeEVjNJMD2YfQx7QrVKP5XVp%2BLhycoJ3BcPuFFoYmrQRLbGVGN1nOX35Wy5DKZVZrIPPH7IgpX1wpQgZEsEe4ipVazHECbldRJAvgiJ68F9r5rukekz%2B2GAk2BiD5yewHtlWspvlqpqOj%2FJ3AB8LPiVuAQR4cGCFtclrzV4e5c8QuzSDEo%2BHNaw3q6g7I1Fl2PVOddqYpatFPlaU0gHqCZOUTgIQz0SXeErWXZxYjCpk4Vdn0rNO%2FwMbGnWe%2FCzu4oTu9e6EiJTk43e7bdCQu7NEWfiwQe7zWQB6nwHdAyRm2SzrtLCV8ItBtjNHoJx9ka2y42kylyLNU9sOAMG9Jo6PT3rxnh%2FW0LpmRa%2FXCjSTaP6SenxegeiC3PILOwv%2FEtUl%2BErC6%2Fyjc%2BjqlzexP6gNWJDc2zcISkhJDTV2%2Boq3Ch%2BxPwuI4jtPcT4dIL%2FhZw430Nvxh7srp%2FBB4Bo5H2C675Fi0A9HvgOQjZsOFSw6CkTTOX%2BBa64Ja6GpQMPKEhcEGOqUBDvPTVRytRRN7Jmr4CdrandwtY4uwjWWaL%2FYEoXWZvgorPFphtRFAG04NtLnAYiCRSd4Wv2AW0rzM2bQoFrWl32iLtAWc72aS8nmFgZPygJ4Qr0zi%2Bzi1UuQIBFLA3r3xM5pIYen73jJSXkyiNkh%2BtfahSzniOSHxRIeaSjEnRmjidJ77ROX93ZFtwivIs7ZxBJOycQenCiSzZ1w7Dy8IrRezjgeb&X-Amz-Signature=28bef6847d1a3a25b3017cfd888d6a2abe7bd2f214b0b3d612badb34a5b8bea2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQJCKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIALHFnrgIljItDmB5pQ8m3emT1PGwC0lEWzFptuAXHTeAiEA%2Bqj1nQFwgtmAjlePo9TCpz6Cz5xkB8Do8viQPkTPtbcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jAfIwKER7G6vKMyrcAwkjmV6i5hjGR8M%2F418377oRes28NZmBslTEwRH3MZj3thL3Zob%2BOH0T4CgFmusF87o6snzu1XhXBVqBkv3yhUNKzRCnPGOmMUuIjUhFsZF%2FVsluVNGH7Ho6KC%2Bx44dZeEVjNJMD2YfQx7QrVKP5XVp%2BLhycoJ3BcPuFFoYmrQRLbGVGN1nOX35Wy5DKZVZrIPPH7IgpX1wpQgZEsEe4ipVazHECbldRJAvgiJ68F9r5rukekz%2B2GAk2BiD5yewHtlWspvlqpqOj%2FJ3AB8LPiVuAQR4cGCFtclrzV4e5c8QuzSDEo%2BHNaw3q6g7I1Fl2PVOddqYpatFPlaU0gHqCZOUTgIQz0SXeErWXZxYjCpk4Vdn0rNO%2FwMbGnWe%2FCzu4oTu9e6EiJTk43e7bdCQu7NEWfiwQe7zWQB6nwHdAyRm2SzrtLCV8ItBtjNHoJx9ka2y42kylyLNU9sOAMG9Jo6PT3rxnh%2FW0LpmRa%2FXCjSTaP6SenxegeiC3PILOwv%2FEtUl%2BErC6%2Fyjc%2BjqlzexP6gNWJDc2zcISkhJDTV2%2Boq3Ch%2BxPwuI4jtPcT4dIL%2FhZw430Nvxh7srp%2FBB4Bo5H2C675Fi0A9HvgOQjZsOFSw6CkTTOX%2BBa64Ja6GpQMPKEhcEGOqUBDvPTVRytRRN7Jmr4CdrandwtY4uwjWWaL%2FYEoXWZvgorPFphtRFAG04NtLnAYiCRSd4Wv2AW0rzM2bQoFrWl32iLtAWc72aS8nmFgZPygJ4Qr0zi%2Bzi1UuQIBFLA3r3xM5pIYen73jJSXkyiNkh%2BtfahSzniOSHxRIeaSjEnRmjidJ77ROX93ZFtwivIs7ZxBJOycQenCiSzZ1w7Dy8IrRezjgeb&X-Amz-Signature=9b21ca1830a008015bb8c3efeaee66b4bfc5e8db9a6aeb7d0f8c2afbf147fb4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQJCKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIALHFnrgIljItDmB5pQ8m3emT1PGwC0lEWzFptuAXHTeAiEA%2Bqj1nQFwgtmAjlePo9TCpz6Cz5xkB8Do8viQPkTPtbcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jAfIwKER7G6vKMyrcAwkjmV6i5hjGR8M%2F418377oRes28NZmBslTEwRH3MZj3thL3Zob%2BOH0T4CgFmusF87o6snzu1XhXBVqBkv3yhUNKzRCnPGOmMUuIjUhFsZF%2FVsluVNGH7Ho6KC%2Bx44dZeEVjNJMD2YfQx7QrVKP5XVp%2BLhycoJ3BcPuFFoYmrQRLbGVGN1nOX35Wy5DKZVZrIPPH7IgpX1wpQgZEsEe4ipVazHECbldRJAvgiJ68F9r5rukekz%2B2GAk2BiD5yewHtlWspvlqpqOj%2FJ3AB8LPiVuAQR4cGCFtclrzV4e5c8QuzSDEo%2BHNaw3q6g7I1Fl2PVOddqYpatFPlaU0gHqCZOUTgIQz0SXeErWXZxYjCpk4Vdn0rNO%2FwMbGnWe%2FCzu4oTu9e6EiJTk43e7bdCQu7NEWfiwQe7zWQB6nwHdAyRm2SzrtLCV8ItBtjNHoJx9ka2y42kylyLNU9sOAMG9Jo6PT3rxnh%2FW0LpmRa%2FXCjSTaP6SenxegeiC3PILOwv%2FEtUl%2BErC6%2Fyjc%2BjqlzexP6gNWJDc2zcISkhJDTV2%2Boq3Ch%2BxPwuI4jtPcT4dIL%2FhZw430Nvxh7srp%2FBB4Bo5H2C675Fi0A9HvgOQjZsOFSw6CkTTOX%2BBa64Ja6GpQMPKEhcEGOqUBDvPTVRytRRN7Jmr4CdrandwtY4uwjWWaL%2FYEoXWZvgorPFphtRFAG04NtLnAYiCRSd4Wv2AW0rzM2bQoFrWl32iLtAWc72aS8nmFgZPygJ4Qr0zi%2Bzi1UuQIBFLA3r3xM5pIYen73jJSXkyiNkh%2BtfahSzniOSHxRIeaSjEnRmjidJ77ROX93ZFtwivIs7ZxBJOycQenCiSzZ1w7Dy8IrRezjgeb&X-Amz-Signature=6c7db905c160965982cee96ebb83e8d8f38072d29cfa66e54c7923e8658883e9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQJCKE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIALHFnrgIljItDmB5pQ8m3emT1PGwC0lEWzFptuAXHTeAiEA%2Bqj1nQFwgtmAjlePo9TCpz6Cz5xkB8Do8viQPkTPtbcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6jAfIwKER7G6vKMyrcAwkjmV6i5hjGR8M%2F418377oRes28NZmBslTEwRH3MZj3thL3Zob%2BOH0T4CgFmusF87o6snzu1XhXBVqBkv3yhUNKzRCnPGOmMUuIjUhFsZF%2FVsluVNGH7Ho6KC%2Bx44dZeEVjNJMD2YfQx7QrVKP5XVp%2BLhycoJ3BcPuFFoYmrQRLbGVGN1nOX35Wy5DKZVZrIPPH7IgpX1wpQgZEsEe4ipVazHECbldRJAvgiJ68F9r5rukekz%2B2GAk2BiD5yewHtlWspvlqpqOj%2FJ3AB8LPiVuAQR4cGCFtclrzV4e5c8QuzSDEo%2BHNaw3q6g7I1Fl2PVOddqYpatFPlaU0gHqCZOUTgIQz0SXeErWXZxYjCpk4Vdn0rNO%2FwMbGnWe%2FCzu4oTu9e6EiJTk43e7bdCQu7NEWfiwQe7zWQB6nwHdAyRm2SzrtLCV8ItBtjNHoJx9ka2y42kylyLNU9sOAMG9Jo6PT3rxnh%2FW0LpmRa%2FXCjSTaP6SenxegeiC3PILOwv%2FEtUl%2BErC6%2Fyjc%2BjqlzexP6gNWJDc2zcISkhJDTV2%2Boq3Ch%2BxPwuI4jtPcT4dIL%2FhZw430Nvxh7srp%2FBB4Bo5H2C675Fi0A9HvgOQjZsOFSw6CkTTOX%2BBa64Ja6GpQMPKEhcEGOqUBDvPTVRytRRN7Jmr4CdrandwtY4uwjWWaL%2FYEoXWZvgorPFphtRFAG04NtLnAYiCRSd4Wv2AW0rzM2bQoFrWl32iLtAWc72aS8nmFgZPygJ4Qr0zi%2Bzi1UuQIBFLA3r3xM5pIYen73jJSXkyiNkh%2BtfahSzniOSHxRIeaSjEnRmjidJ77ROX93ZFtwivIs7ZxBJOycQenCiSzZ1w7Dy8IrRezjgeb&X-Amz-Signature=90e5882eb6c1854b892ebf1ce2dc6d5dfdd5b9c02f7c55ffff1c3554e19a269c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
