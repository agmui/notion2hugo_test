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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXMOU7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5O7tUBfEPPUDMGOWVtCi93GX19EuQIoiXgnth164zRAiEAg8NjsTy4ONVNkgVT%2BYVca9Gq4qlRZhQuBtpLlsHxjLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlJrECSzSBOYzr2rircA7%2FepQw7fpIaT1Dtyjv12fXZmKldyrIMWwCLGDKEI6n%2FiAE0VGwM5gmCcnauKcTzMThRoc9BCc07P4maevjux%2FZvXGCt5sbo1vayaAaxh%2FUGJRpMYUX9qJC8dqp%2Fn%2F5kAb%2FunxlrfRbFKwtbVmYmFxx00iUtnnurZP8HY2s9rDKWaeTu93Ul4unLVnSsj1wJAaJpCyajvq8w21%2BV2nBURYaxws4JskiyP9O2Z%2FujH4fHbDCAWuZ%2FpzRcidor6HjuHuBb4UUM%2FgLHc9aQ8Kz%2Be%2FkmAy4EocB%2FTHjwzLOvRxx%2FyhwrOtv82Wk6PL3d0DBS0O8gWH10synVqagsIsvbVwjqiCuehhIacTB748p3uaPkY7f2xT3CEnCVqxGTxAe1cw76mmiFfbiBOtIBJTmIU%2BXqDoJoE2qiSvEmYHNdItXdaFV8UxEG%2BP%2BbviJAbHbjHRgnNZSLjOqQ0%2FyNlx93dh%2B3XvKEM86sbvt80XjvE78ebHNjo3x%2BbxhI4bDoj7ekKDSD2p00xt70zBAXaLQvZtV%2Fm1kYSFODBK%2BpgJaQS22sokpJRvQhnaCviJ11ZgXtAppIhTmVZPVSzP5zfB1FdAH3FpE0XX%2FjGUGuELbM%2F9mcTKKeZCzlu5GijhafMKXh%2FrwGOqUBHHhW8e5Yud7H2LfMkJQ98zMCjSwLjVFSi7oOGvQaJH4zXiY8yFli7nvXjl%2FgdNGvcWvxoCdwgRQcuZ8o8D1OOno3zfQt0kcykehIApx9iVSwlhyJbQOuCB%2BAY4I4x9EkFUxwo0nlp4g8ojnNxmJjzLWpZRbSkZaAU0se9Q4yAwole8fGYMNIwteMV4wPyS2mpjHOcvb%2BBkYAxBply2fp0AaUGUed&X-Amz-Signature=429f12978ea66d6e03a83aebb7b0d99138dfdd07690b550ccc2750200bf964c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXMOU7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5O7tUBfEPPUDMGOWVtCi93GX19EuQIoiXgnth164zRAiEAg8NjsTy4ONVNkgVT%2BYVca9Gq4qlRZhQuBtpLlsHxjLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlJrECSzSBOYzr2rircA7%2FepQw7fpIaT1Dtyjv12fXZmKldyrIMWwCLGDKEI6n%2FiAE0VGwM5gmCcnauKcTzMThRoc9BCc07P4maevjux%2FZvXGCt5sbo1vayaAaxh%2FUGJRpMYUX9qJC8dqp%2Fn%2F5kAb%2FunxlrfRbFKwtbVmYmFxx00iUtnnurZP8HY2s9rDKWaeTu93Ul4unLVnSsj1wJAaJpCyajvq8w21%2BV2nBURYaxws4JskiyP9O2Z%2FujH4fHbDCAWuZ%2FpzRcidor6HjuHuBb4UUM%2FgLHc9aQ8Kz%2Be%2FkmAy4EocB%2FTHjwzLOvRxx%2FyhwrOtv82Wk6PL3d0DBS0O8gWH10synVqagsIsvbVwjqiCuehhIacTB748p3uaPkY7f2xT3CEnCVqxGTxAe1cw76mmiFfbiBOtIBJTmIU%2BXqDoJoE2qiSvEmYHNdItXdaFV8UxEG%2BP%2BbviJAbHbjHRgnNZSLjOqQ0%2FyNlx93dh%2B3XvKEM86sbvt80XjvE78ebHNjo3x%2BbxhI4bDoj7ekKDSD2p00xt70zBAXaLQvZtV%2Fm1kYSFODBK%2BpgJaQS22sokpJRvQhnaCviJ11ZgXtAppIhTmVZPVSzP5zfB1FdAH3FpE0XX%2FjGUGuELbM%2F9mcTKKeZCzlu5GijhafMKXh%2FrwGOqUBHHhW8e5Yud7H2LfMkJQ98zMCjSwLjVFSi7oOGvQaJH4zXiY8yFli7nvXjl%2FgdNGvcWvxoCdwgRQcuZ8o8D1OOno3zfQt0kcykehIApx9iVSwlhyJbQOuCB%2BAY4I4x9EkFUxwo0nlp4g8ojnNxmJjzLWpZRbSkZaAU0se9Q4yAwole8fGYMNIwteMV4wPyS2mpjHOcvb%2BBkYAxBply2fp0AaUGUed&X-Amz-Signature=01ca20a9139d7fdd804b392f812bd3a0a3b5d1f90c287512cf657406fdde009b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXMOU7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5O7tUBfEPPUDMGOWVtCi93GX19EuQIoiXgnth164zRAiEAg8NjsTy4ONVNkgVT%2BYVca9Gq4qlRZhQuBtpLlsHxjLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlJrECSzSBOYzr2rircA7%2FepQw7fpIaT1Dtyjv12fXZmKldyrIMWwCLGDKEI6n%2FiAE0VGwM5gmCcnauKcTzMThRoc9BCc07P4maevjux%2FZvXGCt5sbo1vayaAaxh%2FUGJRpMYUX9qJC8dqp%2Fn%2F5kAb%2FunxlrfRbFKwtbVmYmFxx00iUtnnurZP8HY2s9rDKWaeTu93Ul4unLVnSsj1wJAaJpCyajvq8w21%2BV2nBURYaxws4JskiyP9O2Z%2FujH4fHbDCAWuZ%2FpzRcidor6HjuHuBb4UUM%2FgLHc9aQ8Kz%2Be%2FkmAy4EocB%2FTHjwzLOvRxx%2FyhwrOtv82Wk6PL3d0DBS0O8gWH10synVqagsIsvbVwjqiCuehhIacTB748p3uaPkY7f2xT3CEnCVqxGTxAe1cw76mmiFfbiBOtIBJTmIU%2BXqDoJoE2qiSvEmYHNdItXdaFV8UxEG%2BP%2BbviJAbHbjHRgnNZSLjOqQ0%2FyNlx93dh%2B3XvKEM86sbvt80XjvE78ebHNjo3x%2BbxhI4bDoj7ekKDSD2p00xt70zBAXaLQvZtV%2Fm1kYSFODBK%2BpgJaQS22sokpJRvQhnaCviJ11ZgXtAppIhTmVZPVSzP5zfB1FdAH3FpE0XX%2FjGUGuELbM%2F9mcTKKeZCzlu5GijhafMKXh%2FrwGOqUBHHhW8e5Yud7H2LfMkJQ98zMCjSwLjVFSi7oOGvQaJH4zXiY8yFli7nvXjl%2FgdNGvcWvxoCdwgRQcuZ8o8D1OOno3zfQt0kcykehIApx9iVSwlhyJbQOuCB%2BAY4I4x9EkFUxwo0nlp4g8ojnNxmJjzLWpZRbSkZaAU0se9Q4yAwole8fGYMNIwteMV4wPyS2mpjHOcvb%2BBkYAxBply2fp0AaUGUed&X-Amz-Signature=0fd14fed3637b191a9aea506028773efc0c745573f36f96586555b1afadd6a59&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXMOU7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5O7tUBfEPPUDMGOWVtCi93GX19EuQIoiXgnth164zRAiEAg8NjsTy4ONVNkgVT%2BYVca9Gq4qlRZhQuBtpLlsHxjLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlJrECSzSBOYzr2rircA7%2FepQw7fpIaT1Dtyjv12fXZmKldyrIMWwCLGDKEI6n%2FiAE0VGwM5gmCcnauKcTzMThRoc9BCc07P4maevjux%2FZvXGCt5sbo1vayaAaxh%2FUGJRpMYUX9qJC8dqp%2Fn%2F5kAb%2FunxlrfRbFKwtbVmYmFxx00iUtnnurZP8HY2s9rDKWaeTu93Ul4unLVnSsj1wJAaJpCyajvq8w21%2BV2nBURYaxws4JskiyP9O2Z%2FujH4fHbDCAWuZ%2FpzRcidor6HjuHuBb4UUM%2FgLHc9aQ8Kz%2Be%2FkmAy4EocB%2FTHjwzLOvRxx%2FyhwrOtv82Wk6PL3d0DBS0O8gWH10synVqagsIsvbVwjqiCuehhIacTB748p3uaPkY7f2xT3CEnCVqxGTxAe1cw76mmiFfbiBOtIBJTmIU%2BXqDoJoE2qiSvEmYHNdItXdaFV8UxEG%2BP%2BbviJAbHbjHRgnNZSLjOqQ0%2FyNlx93dh%2B3XvKEM86sbvt80XjvE78ebHNjo3x%2BbxhI4bDoj7ekKDSD2p00xt70zBAXaLQvZtV%2Fm1kYSFODBK%2BpgJaQS22sokpJRvQhnaCviJ11ZgXtAppIhTmVZPVSzP5zfB1FdAH3FpE0XX%2FjGUGuELbM%2F9mcTKKeZCzlu5GijhafMKXh%2FrwGOqUBHHhW8e5Yud7H2LfMkJQ98zMCjSwLjVFSi7oOGvQaJH4zXiY8yFli7nvXjl%2FgdNGvcWvxoCdwgRQcuZ8o8D1OOno3zfQt0kcykehIApx9iVSwlhyJbQOuCB%2BAY4I4x9EkFUxwo0nlp4g8ojnNxmJjzLWpZRbSkZaAU0se9Q4yAwole8fGYMNIwteMV4wPyS2mpjHOcvb%2BBkYAxBply2fp0AaUGUed&X-Amz-Signature=e67f0eabc31b79a75b75664ffa71abc1ed09f40dcdb42dec13efa4ac173d6847&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXMOU7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5O7tUBfEPPUDMGOWVtCi93GX19EuQIoiXgnth164zRAiEAg8NjsTy4ONVNkgVT%2BYVca9Gq4qlRZhQuBtpLlsHxjLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlJrECSzSBOYzr2rircA7%2FepQw7fpIaT1Dtyjv12fXZmKldyrIMWwCLGDKEI6n%2FiAE0VGwM5gmCcnauKcTzMThRoc9BCc07P4maevjux%2FZvXGCt5sbo1vayaAaxh%2FUGJRpMYUX9qJC8dqp%2Fn%2F5kAb%2FunxlrfRbFKwtbVmYmFxx00iUtnnurZP8HY2s9rDKWaeTu93Ul4unLVnSsj1wJAaJpCyajvq8w21%2BV2nBURYaxws4JskiyP9O2Z%2FujH4fHbDCAWuZ%2FpzRcidor6HjuHuBb4UUM%2FgLHc9aQ8Kz%2Be%2FkmAy4EocB%2FTHjwzLOvRxx%2FyhwrOtv82Wk6PL3d0DBS0O8gWH10synVqagsIsvbVwjqiCuehhIacTB748p3uaPkY7f2xT3CEnCVqxGTxAe1cw76mmiFfbiBOtIBJTmIU%2BXqDoJoE2qiSvEmYHNdItXdaFV8UxEG%2BP%2BbviJAbHbjHRgnNZSLjOqQ0%2FyNlx93dh%2B3XvKEM86sbvt80XjvE78ebHNjo3x%2BbxhI4bDoj7ekKDSD2p00xt70zBAXaLQvZtV%2Fm1kYSFODBK%2BpgJaQS22sokpJRvQhnaCviJ11ZgXtAppIhTmVZPVSzP5zfB1FdAH3FpE0XX%2FjGUGuELbM%2F9mcTKKeZCzlu5GijhafMKXh%2FrwGOqUBHHhW8e5Yud7H2LfMkJQ98zMCjSwLjVFSi7oOGvQaJH4zXiY8yFli7nvXjl%2FgdNGvcWvxoCdwgRQcuZ8o8D1OOno3zfQt0kcykehIApx9iVSwlhyJbQOuCB%2BAY4I4x9EkFUxwo0nlp4g8ojnNxmJjzLWpZRbSkZaAU0se9Q4yAwole8fGYMNIwteMV4wPyS2mpjHOcvb%2BBkYAxBply2fp0AaUGUed&X-Amz-Signature=62325bb2edd85226f8de9c89a268d387c82ff394222d631b0ef58d0c9700b674&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXMOU7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5O7tUBfEPPUDMGOWVtCi93GX19EuQIoiXgnth164zRAiEAg8NjsTy4ONVNkgVT%2BYVca9Gq4qlRZhQuBtpLlsHxjLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlJrECSzSBOYzr2rircA7%2FepQw7fpIaT1Dtyjv12fXZmKldyrIMWwCLGDKEI6n%2FiAE0VGwM5gmCcnauKcTzMThRoc9BCc07P4maevjux%2FZvXGCt5sbo1vayaAaxh%2FUGJRpMYUX9qJC8dqp%2Fn%2F5kAb%2FunxlrfRbFKwtbVmYmFxx00iUtnnurZP8HY2s9rDKWaeTu93Ul4unLVnSsj1wJAaJpCyajvq8w21%2BV2nBURYaxws4JskiyP9O2Z%2FujH4fHbDCAWuZ%2FpzRcidor6HjuHuBb4UUM%2FgLHc9aQ8Kz%2Be%2FkmAy4EocB%2FTHjwzLOvRxx%2FyhwrOtv82Wk6PL3d0DBS0O8gWH10synVqagsIsvbVwjqiCuehhIacTB748p3uaPkY7f2xT3CEnCVqxGTxAe1cw76mmiFfbiBOtIBJTmIU%2BXqDoJoE2qiSvEmYHNdItXdaFV8UxEG%2BP%2BbviJAbHbjHRgnNZSLjOqQ0%2FyNlx93dh%2B3XvKEM86sbvt80XjvE78ebHNjo3x%2BbxhI4bDoj7ekKDSD2p00xt70zBAXaLQvZtV%2Fm1kYSFODBK%2BpgJaQS22sokpJRvQhnaCviJ11ZgXtAppIhTmVZPVSzP5zfB1FdAH3FpE0XX%2FjGUGuELbM%2F9mcTKKeZCzlu5GijhafMKXh%2FrwGOqUBHHhW8e5Yud7H2LfMkJQ98zMCjSwLjVFSi7oOGvQaJH4zXiY8yFli7nvXjl%2FgdNGvcWvxoCdwgRQcuZ8o8D1OOno3zfQt0kcykehIApx9iVSwlhyJbQOuCB%2BAY4I4x9EkFUxwo0nlp4g8ojnNxmJjzLWpZRbSkZaAU0se9Q4yAwole8fGYMNIwteMV4wPyS2mpjHOcvb%2BBkYAxBply2fp0AaUGUed&X-Amz-Signature=7e1a1e4224883cb226d1e1ce33132bcfbacdaa2b2ff0715dae723f6d7e6fe346&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXXMOU7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5O7tUBfEPPUDMGOWVtCi93GX19EuQIoiXgnth164zRAiEAg8NjsTy4ONVNkgVT%2BYVca9Gq4qlRZhQuBtpLlsHxjLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlJrECSzSBOYzr2rircA7%2FepQw7fpIaT1Dtyjv12fXZmKldyrIMWwCLGDKEI6n%2FiAE0VGwM5gmCcnauKcTzMThRoc9BCc07P4maevjux%2FZvXGCt5sbo1vayaAaxh%2FUGJRpMYUX9qJC8dqp%2Fn%2F5kAb%2FunxlrfRbFKwtbVmYmFxx00iUtnnurZP8HY2s9rDKWaeTu93Ul4unLVnSsj1wJAaJpCyajvq8w21%2BV2nBURYaxws4JskiyP9O2Z%2FujH4fHbDCAWuZ%2FpzRcidor6HjuHuBb4UUM%2FgLHc9aQ8Kz%2Be%2FkmAy4EocB%2FTHjwzLOvRxx%2FyhwrOtv82Wk6PL3d0DBS0O8gWH10synVqagsIsvbVwjqiCuehhIacTB748p3uaPkY7f2xT3CEnCVqxGTxAe1cw76mmiFfbiBOtIBJTmIU%2BXqDoJoE2qiSvEmYHNdItXdaFV8UxEG%2BP%2BbviJAbHbjHRgnNZSLjOqQ0%2FyNlx93dh%2B3XvKEM86sbvt80XjvE78ebHNjo3x%2BbxhI4bDoj7ekKDSD2p00xt70zBAXaLQvZtV%2Fm1kYSFODBK%2BpgJaQS22sokpJRvQhnaCviJ11ZgXtAppIhTmVZPVSzP5zfB1FdAH3FpE0XX%2FjGUGuELbM%2F9mcTKKeZCzlu5GijhafMKXh%2FrwGOqUBHHhW8e5Yud7H2LfMkJQ98zMCjSwLjVFSi7oOGvQaJH4zXiY8yFli7nvXjl%2FgdNGvcWvxoCdwgRQcuZ8o8D1OOno3zfQt0kcykehIApx9iVSwlhyJbQOuCB%2BAY4I4x9EkFUxwo0nlp4g8ojnNxmJjzLWpZRbSkZaAU0se9Q4yAwole8fGYMNIwteMV4wPyS2mpjHOcvb%2BBkYAxBply2fp0AaUGUed&X-Amz-Signature=378d10a07525e37cb74f25fa57012c06722549d3b56be92a220ed8084311da12&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
