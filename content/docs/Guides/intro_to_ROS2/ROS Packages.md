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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGENP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpSJKQNnU9meP2pFeR%2B71lUUZ2XTh47vzYQ3bYSsJ%2BoAiEA7SvsEpRbU0n5FpTqMmsV8hyQvgb%2FMYnFts3rLgwcmxoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCQ3NAXqBjTjt4%2BfXSrcA6D7fo7gOWrTqJSFOs%2Brop%2F%2B9k8J62zeqzN6A4GmlC7VdOYm68OQz6zZph%2F%2F4%2Fr5zcq3Ft92ggMsASVz4cBRqBQQRC5oVkoLnPPi7SO%2FDqRp1GRdrjaBAFlCI2FpepL6pZQ0gL6%2BuRnlUtZv5zPngHq5WhLL5yY%2BeAgTYQTVfZppaeh9Ans%2FYdyzCLLOrF4IJu1gbmg%2FA5Y0s6m6HTvRUoIOWLg2oQ%2BRmLuE5T1aEgC0qzL7TB%2BWte8S8laDQdk5HvkKu20%2BQP6kZPIGVR5jZuWizqGC213N7%2F39jEnVcppiJ%2BE6znXi6yisf20MtA3FQHTtNtbKUXpjzi8LoPrE4HyMHPs75tt6u70hxLyjdfsgQR38y%2Fy0cqw5v6WMqzwr%2FF2QWzlbnPsOAFVPK7%2BL%2BZWFKDDg5qoEMPqYT9ewSB2LBMZk2sytnMZhn%2FL%2FLybiH%2BZxSrvO3r4NHgd6OfCLaA5Qm0GWdHWIutUtlQgIJlYoBNwmDPO7tFcJt83i8yPuoZ2Q13%2Fw5Jawlc4TuAC7EG1J0Gc%2F%2BPPPEcCk2gz56yOwRkH0XKMkMkt%2FfrKKt9pGSYKwWxVg6OBtXulmvnXHkvo4hvcZ1LCVRl3oVny2ty8OGCudj%2BXlvBIQQzkXMLvG%2Fr8GOqUBdZRyTZZUBWrmoL1UTqPaZkDZq3ViZjd%2B3WHpyixRW78pdn%2BHd2MKUkBHzRQK1k8FVZ4abmiyphldAop8qrmE0PJdAMszrDW1fm0VbEltEv5antL1SmbhRlBw5PbSD5YoTd9HHdYbatR%2BpSWI9Mg53FMWJwu4L1BnJNS6HCH5A2K9N2rYVphHPaJQaMRcrQa420eb8Kgtf9T5MZURZZmaE00WfVVe&X-Amz-Signature=4dcf9f8dbdbf8b40741d0c214b04e1e9d2de59df3bf5d9fa344b0b25edfb4c19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGENP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpSJKQNnU9meP2pFeR%2B71lUUZ2XTh47vzYQ3bYSsJ%2BoAiEA7SvsEpRbU0n5FpTqMmsV8hyQvgb%2FMYnFts3rLgwcmxoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCQ3NAXqBjTjt4%2BfXSrcA6D7fo7gOWrTqJSFOs%2Brop%2F%2B9k8J62zeqzN6A4GmlC7VdOYm68OQz6zZph%2F%2F4%2Fr5zcq3Ft92ggMsASVz4cBRqBQQRC5oVkoLnPPi7SO%2FDqRp1GRdrjaBAFlCI2FpepL6pZQ0gL6%2BuRnlUtZv5zPngHq5WhLL5yY%2BeAgTYQTVfZppaeh9Ans%2FYdyzCLLOrF4IJu1gbmg%2FA5Y0s6m6HTvRUoIOWLg2oQ%2BRmLuE5T1aEgC0qzL7TB%2BWte8S8laDQdk5HvkKu20%2BQP6kZPIGVR5jZuWizqGC213N7%2F39jEnVcppiJ%2BE6znXi6yisf20MtA3FQHTtNtbKUXpjzi8LoPrE4HyMHPs75tt6u70hxLyjdfsgQR38y%2Fy0cqw5v6WMqzwr%2FF2QWzlbnPsOAFVPK7%2BL%2BZWFKDDg5qoEMPqYT9ewSB2LBMZk2sytnMZhn%2FL%2FLybiH%2BZxSrvO3r4NHgd6OfCLaA5Qm0GWdHWIutUtlQgIJlYoBNwmDPO7tFcJt83i8yPuoZ2Q13%2Fw5Jawlc4TuAC7EG1J0Gc%2F%2BPPPEcCk2gz56yOwRkH0XKMkMkt%2FfrKKt9pGSYKwWxVg6OBtXulmvnXHkvo4hvcZ1LCVRl3oVny2ty8OGCudj%2BXlvBIQQzkXMLvG%2Fr8GOqUBdZRyTZZUBWrmoL1UTqPaZkDZq3ViZjd%2B3WHpyixRW78pdn%2BHd2MKUkBHzRQK1k8FVZ4abmiyphldAop8qrmE0PJdAMszrDW1fm0VbEltEv5antL1SmbhRlBw5PbSD5YoTd9HHdYbatR%2BpSWI9Mg53FMWJwu4L1BnJNS6HCH5A2K9N2rYVphHPaJQaMRcrQa420eb8Kgtf9T5MZURZZmaE00WfVVe&X-Amz-Signature=ce65d304e48d9191ecaee95f26b7782f40da5a8e35d251b97c8e2944ab23c973&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGENP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpSJKQNnU9meP2pFeR%2B71lUUZ2XTh47vzYQ3bYSsJ%2BoAiEA7SvsEpRbU0n5FpTqMmsV8hyQvgb%2FMYnFts3rLgwcmxoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCQ3NAXqBjTjt4%2BfXSrcA6D7fo7gOWrTqJSFOs%2Brop%2F%2B9k8J62zeqzN6A4GmlC7VdOYm68OQz6zZph%2F%2F4%2Fr5zcq3Ft92ggMsASVz4cBRqBQQRC5oVkoLnPPi7SO%2FDqRp1GRdrjaBAFlCI2FpepL6pZQ0gL6%2BuRnlUtZv5zPngHq5WhLL5yY%2BeAgTYQTVfZppaeh9Ans%2FYdyzCLLOrF4IJu1gbmg%2FA5Y0s6m6HTvRUoIOWLg2oQ%2BRmLuE5T1aEgC0qzL7TB%2BWte8S8laDQdk5HvkKu20%2BQP6kZPIGVR5jZuWizqGC213N7%2F39jEnVcppiJ%2BE6znXi6yisf20MtA3FQHTtNtbKUXpjzi8LoPrE4HyMHPs75tt6u70hxLyjdfsgQR38y%2Fy0cqw5v6WMqzwr%2FF2QWzlbnPsOAFVPK7%2BL%2BZWFKDDg5qoEMPqYT9ewSB2LBMZk2sytnMZhn%2FL%2FLybiH%2BZxSrvO3r4NHgd6OfCLaA5Qm0GWdHWIutUtlQgIJlYoBNwmDPO7tFcJt83i8yPuoZ2Q13%2Fw5Jawlc4TuAC7EG1J0Gc%2F%2BPPPEcCk2gz56yOwRkH0XKMkMkt%2FfrKKt9pGSYKwWxVg6OBtXulmvnXHkvo4hvcZ1LCVRl3oVny2ty8OGCudj%2BXlvBIQQzkXMLvG%2Fr8GOqUBdZRyTZZUBWrmoL1UTqPaZkDZq3ViZjd%2B3WHpyixRW78pdn%2BHd2MKUkBHzRQK1k8FVZ4abmiyphldAop8qrmE0PJdAMszrDW1fm0VbEltEv5antL1SmbhRlBw5PbSD5YoTd9HHdYbatR%2BpSWI9Mg53FMWJwu4L1BnJNS6HCH5A2K9N2rYVphHPaJQaMRcrQa420eb8Kgtf9T5MZURZZmaE00WfVVe&X-Amz-Signature=0d249a93c4b39f1bd7610f1ed1f26fda5a110765d804cb98cd198664a0da0e63&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGENP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpSJKQNnU9meP2pFeR%2B71lUUZ2XTh47vzYQ3bYSsJ%2BoAiEA7SvsEpRbU0n5FpTqMmsV8hyQvgb%2FMYnFts3rLgwcmxoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCQ3NAXqBjTjt4%2BfXSrcA6D7fo7gOWrTqJSFOs%2Brop%2F%2B9k8J62zeqzN6A4GmlC7VdOYm68OQz6zZph%2F%2F4%2Fr5zcq3Ft92ggMsASVz4cBRqBQQRC5oVkoLnPPi7SO%2FDqRp1GRdrjaBAFlCI2FpepL6pZQ0gL6%2BuRnlUtZv5zPngHq5WhLL5yY%2BeAgTYQTVfZppaeh9Ans%2FYdyzCLLOrF4IJu1gbmg%2FA5Y0s6m6HTvRUoIOWLg2oQ%2BRmLuE5T1aEgC0qzL7TB%2BWte8S8laDQdk5HvkKu20%2BQP6kZPIGVR5jZuWizqGC213N7%2F39jEnVcppiJ%2BE6znXi6yisf20MtA3FQHTtNtbKUXpjzi8LoPrE4HyMHPs75tt6u70hxLyjdfsgQR38y%2Fy0cqw5v6WMqzwr%2FF2QWzlbnPsOAFVPK7%2BL%2BZWFKDDg5qoEMPqYT9ewSB2LBMZk2sytnMZhn%2FL%2FLybiH%2BZxSrvO3r4NHgd6OfCLaA5Qm0GWdHWIutUtlQgIJlYoBNwmDPO7tFcJt83i8yPuoZ2Q13%2Fw5Jawlc4TuAC7EG1J0Gc%2F%2BPPPEcCk2gz56yOwRkH0XKMkMkt%2FfrKKt9pGSYKwWxVg6OBtXulmvnXHkvo4hvcZ1LCVRl3oVny2ty8OGCudj%2BXlvBIQQzkXMLvG%2Fr8GOqUBdZRyTZZUBWrmoL1UTqPaZkDZq3ViZjd%2B3WHpyixRW78pdn%2BHd2MKUkBHzRQK1k8FVZ4abmiyphldAop8qrmE0PJdAMszrDW1fm0VbEltEv5antL1SmbhRlBw5PbSD5YoTd9HHdYbatR%2BpSWI9Mg53FMWJwu4L1BnJNS6HCH5A2K9N2rYVphHPaJQaMRcrQa420eb8Kgtf9T5MZURZZmaE00WfVVe&X-Amz-Signature=754379d60ccf260d34065f5c9b7d040d7a6d99f2f7363e5c73c3124f9217358e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGENP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpSJKQNnU9meP2pFeR%2B71lUUZ2XTh47vzYQ3bYSsJ%2BoAiEA7SvsEpRbU0n5FpTqMmsV8hyQvgb%2FMYnFts3rLgwcmxoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCQ3NAXqBjTjt4%2BfXSrcA6D7fo7gOWrTqJSFOs%2Brop%2F%2B9k8J62zeqzN6A4GmlC7VdOYm68OQz6zZph%2F%2F4%2Fr5zcq3Ft92ggMsASVz4cBRqBQQRC5oVkoLnPPi7SO%2FDqRp1GRdrjaBAFlCI2FpepL6pZQ0gL6%2BuRnlUtZv5zPngHq5WhLL5yY%2BeAgTYQTVfZppaeh9Ans%2FYdyzCLLOrF4IJu1gbmg%2FA5Y0s6m6HTvRUoIOWLg2oQ%2BRmLuE5T1aEgC0qzL7TB%2BWte8S8laDQdk5HvkKu20%2BQP6kZPIGVR5jZuWizqGC213N7%2F39jEnVcppiJ%2BE6znXi6yisf20MtA3FQHTtNtbKUXpjzi8LoPrE4HyMHPs75tt6u70hxLyjdfsgQR38y%2Fy0cqw5v6WMqzwr%2FF2QWzlbnPsOAFVPK7%2BL%2BZWFKDDg5qoEMPqYT9ewSB2LBMZk2sytnMZhn%2FL%2FLybiH%2BZxSrvO3r4NHgd6OfCLaA5Qm0GWdHWIutUtlQgIJlYoBNwmDPO7tFcJt83i8yPuoZ2Q13%2Fw5Jawlc4TuAC7EG1J0Gc%2F%2BPPPEcCk2gz56yOwRkH0XKMkMkt%2FfrKKt9pGSYKwWxVg6OBtXulmvnXHkvo4hvcZ1LCVRl3oVny2ty8OGCudj%2BXlvBIQQzkXMLvG%2Fr8GOqUBdZRyTZZUBWrmoL1UTqPaZkDZq3ViZjd%2B3WHpyixRW78pdn%2BHd2MKUkBHzRQK1k8FVZ4abmiyphldAop8qrmE0PJdAMszrDW1fm0VbEltEv5antL1SmbhRlBw5PbSD5YoTd9HHdYbatR%2BpSWI9Mg53FMWJwu4L1BnJNS6HCH5A2K9N2rYVphHPaJQaMRcrQa420eb8Kgtf9T5MZURZZmaE00WfVVe&X-Amz-Signature=0ee0fc174e6fc50a3bfa72093f1de8981bab69fc05f1477b2a8e17f78ab26cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGENP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpSJKQNnU9meP2pFeR%2B71lUUZ2XTh47vzYQ3bYSsJ%2BoAiEA7SvsEpRbU0n5FpTqMmsV8hyQvgb%2FMYnFts3rLgwcmxoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCQ3NAXqBjTjt4%2BfXSrcA6D7fo7gOWrTqJSFOs%2Brop%2F%2B9k8J62zeqzN6A4GmlC7VdOYm68OQz6zZph%2F%2F4%2Fr5zcq3Ft92ggMsASVz4cBRqBQQRC5oVkoLnPPi7SO%2FDqRp1GRdrjaBAFlCI2FpepL6pZQ0gL6%2BuRnlUtZv5zPngHq5WhLL5yY%2BeAgTYQTVfZppaeh9Ans%2FYdyzCLLOrF4IJu1gbmg%2FA5Y0s6m6HTvRUoIOWLg2oQ%2BRmLuE5T1aEgC0qzL7TB%2BWte8S8laDQdk5HvkKu20%2BQP6kZPIGVR5jZuWizqGC213N7%2F39jEnVcppiJ%2BE6znXi6yisf20MtA3FQHTtNtbKUXpjzi8LoPrE4HyMHPs75tt6u70hxLyjdfsgQR38y%2Fy0cqw5v6WMqzwr%2FF2QWzlbnPsOAFVPK7%2BL%2BZWFKDDg5qoEMPqYT9ewSB2LBMZk2sytnMZhn%2FL%2FLybiH%2BZxSrvO3r4NHgd6OfCLaA5Qm0GWdHWIutUtlQgIJlYoBNwmDPO7tFcJt83i8yPuoZ2Q13%2Fw5Jawlc4TuAC7EG1J0Gc%2F%2BPPPEcCk2gz56yOwRkH0XKMkMkt%2FfrKKt9pGSYKwWxVg6OBtXulmvnXHkvo4hvcZ1LCVRl3oVny2ty8OGCudj%2BXlvBIQQzkXMLvG%2Fr8GOqUBdZRyTZZUBWrmoL1UTqPaZkDZq3ViZjd%2B3WHpyixRW78pdn%2BHd2MKUkBHzRQK1k8FVZ4abmiyphldAop8qrmE0PJdAMszrDW1fm0VbEltEv5antL1SmbhRlBw5PbSD5YoTd9HHdYbatR%2BpSWI9Mg53FMWJwu4L1BnJNS6HCH5A2K9N2rYVphHPaJQaMRcrQa420eb8Kgtf9T5MZURZZmaE00WfVVe&X-Amz-Signature=f28be0be4d7ce1890cb224ab01c02591f3448312b77a7414290bbdf786b60453&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGENP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpSJKQNnU9meP2pFeR%2B71lUUZ2XTh47vzYQ3bYSsJ%2BoAiEA7SvsEpRbU0n5FpTqMmsV8hyQvgb%2FMYnFts3rLgwcmxoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCQ3NAXqBjTjt4%2BfXSrcA6D7fo7gOWrTqJSFOs%2Brop%2F%2B9k8J62zeqzN6A4GmlC7VdOYm68OQz6zZph%2F%2F4%2Fr5zcq3Ft92ggMsASVz4cBRqBQQRC5oVkoLnPPi7SO%2FDqRp1GRdrjaBAFlCI2FpepL6pZQ0gL6%2BuRnlUtZv5zPngHq5WhLL5yY%2BeAgTYQTVfZppaeh9Ans%2FYdyzCLLOrF4IJu1gbmg%2FA5Y0s6m6HTvRUoIOWLg2oQ%2BRmLuE5T1aEgC0qzL7TB%2BWte8S8laDQdk5HvkKu20%2BQP6kZPIGVR5jZuWizqGC213N7%2F39jEnVcppiJ%2BE6znXi6yisf20MtA3FQHTtNtbKUXpjzi8LoPrE4HyMHPs75tt6u70hxLyjdfsgQR38y%2Fy0cqw5v6WMqzwr%2FF2QWzlbnPsOAFVPK7%2BL%2BZWFKDDg5qoEMPqYT9ewSB2LBMZk2sytnMZhn%2FL%2FLybiH%2BZxSrvO3r4NHgd6OfCLaA5Qm0GWdHWIutUtlQgIJlYoBNwmDPO7tFcJt83i8yPuoZ2Q13%2Fw5Jawlc4TuAC7EG1J0Gc%2F%2BPPPEcCk2gz56yOwRkH0XKMkMkt%2FfrKKt9pGSYKwWxVg6OBtXulmvnXHkvo4hvcZ1LCVRl3oVny2ty8OGCudj%2BXlvBIQQzkXMLvG%2Fr8GOqUBdZRyTZZUBWrmoL1UTqPaZkDZq3ViZjd%2B3WHpyixRW78pdn%2BHd2MKUkBHzRQK1k8FVZ4abmiyphldAop8qrmE0PJdAMszrDW1fm0VbEltEv5antL1SmbhRlBw5PbSD5YoTd9HHdYbatR%2BpSWI9Mg53FMWJwu4L1BnJNS6HCH5A2K9N2rYVphHPaJQaMRcrQa420eb8Kgtf9T5MZURZZmaE00WfVVe&X-Amz-Signature=f9e8822f448d0b50efa89917560bce3e35b1ad524411512d1abab71120e3c48c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
