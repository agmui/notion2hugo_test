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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ3RCPF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzuav5jzBoF8unNus0P7yiAvuP%2F68CLMMbEbF3MBDc7AiBD81Z7VuKv7bkzsjP1yUybyN05QTR4wclTUBbCbSTIRSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfluACfh4B%2F2upvgbKtwDowzjFYpOhz4pOQb%2FVpmURYrgWaUzIzbp7bqyZgKYSs%2BZbMHWy%2FkFx%2BzHWPs66HU7QLhkMswjsVznGqSG6VP9Mgmlv8DGRAQ7QcEUshCzsOQSpb%2B3QibZXSKT%2B7FYsaRMiGL6JkbvAr4g%2FKKRIBbJfrHU0xiZcpdem%2FGpeMnrRwVPPlZyz2JtHF2z6AMK%2F6Jhe%2FJaGZpE3sp92GwnpO2Qhi3NdyXeCBxcj0niTL48pknBGUA5exXRqPuG1HkIrXPT53iw5MJxeQiajNfAanuHyKo%2BYVGozBbJDQNNi5U8i%2FgPdbqX%2Bp18UmIfxgVjUIivvP0KuLwu4mcePIDyxzWX%2BrY7tJsRSNLzHKBUD0RFUaEm3BxUHicPSO2Tuy2Q599I9193hopPGZs8v8Rk9tJXJ5YLwSMEafVpnInixi9%2BA306NvB9V5RqrftIiqLVabrO8a47M1AJsCeZuVTGivfdJ5kObBid7F6KQxbipicmi5vk2t%2Bt2aCeavsU7IaCvdWcbqSOXt1B3Y%2B%2FGRCPEcHpk1E%2Bemzj39CFEYZf0%2BA%2FmzXIj9%2BaVRHRJWzra4Z0F%2BZAvUO8MlrrmmkC3%2FSVUpAp5cxiezhK8%2F6JeNkBfNynsOSyYVVNzghfhX%2BAPHEwkIO6vQY6pgF9eu58f%2FyygHXpNjfde5%2FIPn4lSC8sJ0v9OPN8OueFGjuaXMAUs9yS7StkGelgniU77dQ6wy6anQ9hcW%2BaFV7QZpzTBTZofyK41NEd%2FeHVe92L%2BkMccUQjheNaBgaWD9rWTdkCtmTtx02rWoqZ%2FwvyuQ1qPFSdz5J8pBWKaswF58JaGSBcUIPlx4jBrxOojJqiTljqnpkclAOwHBES7SDPYqft4PPZ&X-Amz-Signature=8378653a74b7fbdc6b36c39f67e159c1c8d58ae0c30a261c9677da4b8bc6b273&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ3RCPF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzuav5jzBoF8unNus0P7yiAvuP%2F68CLMMbEbF3MBDc7AiBD81Z7VuKv7bkzsjP1yUybyN05QTR4wclTUBbCbSTIRSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfluACfh4B%2F2upvgbKtwDowzjFYpOhz4pOQb%2FVpmURYrgWaUzIzbp7bqyZgKYSs%2BZbMHWy%2FkFx%2BzHWPs66HU7QLhkMswjsVznGqSG6VP9Mgmlv8DGRAQ7QcEUshCzsOQSpb%2B3QibZXSKT%2B7FYsaRMiGL6JkbvAr4g%2FKKRIBbJfrHU0xiZcpdem%2FGpeMnrRwVPPlZyz2JtHF2z6AMK%2F6Jhe%2FJaGZpE3sp92GwnpO2Qhi3NdyXeCBxcj0niTL48pknBGUA5exXRqPuG1HkIrXPT53iw5MJxeQiajNfAanuHyKo%2BYVGozBbJDQNNi5U8i%2FgPdbqX%2Bp18UmIfxgVjUIivvP0KuLwu4mcePIDyxzWX%2BrY7tJsRSNLzHKBUD0RFUaEm3BxUHicPSO2Tuy2Q599I9193hopPGZs8v8Rk9tJXJ5YLwSMEafVpnInixi9%2BA306NvB9V5RqrftIiqLVabrO8a47M1AJsCeZuVTGivfdJ5kObBid7F6KQxbipicmi5vk2t%2Bt2aCeavsU7IaCvdWcbqSOXt1B3Y%2B%2FGRCPEcHpk1E%2Bemzj39CFEYZf0%2BA%2FmzXIj9%2BaVRHRJWzra4Z0F%2BZAvUO8MlrrmmkC3%2FSVUpAp5cxiezhK8%2F6JeNkBfNynsOSyYVVNzghfhX%2BAPHEwkIO6vQY6pgF9eu58f%2FyygHXpNjfde5%2FIPn4lSC8sJ0v9OPN8OueFGjuaXMAUs9yS7StkGelgniU77dQ6wy6anQ9hcW%2BaFV7QZpzTBTZofyK41NEd%2FeHVe92L%2BkMccUQjheNaBgaWD9rWTdkCtmTtx02rWoqZ%2FwvyuQ1qPFSdz5J8pBWKaswF58JaGSBcUIPlx4jBrxOojJqiTljqnpkclAOwHBES7SDPYqft4PPZ&X-Amz-Signature=14dad1253e3958c3d4ba322db5c159d1ee565a36e7d5c57abf0872bf6725bac4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ3RCPF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzuav5jzBoF8unNus0P7yiAvuP%2F68CLMMbEbF3MBDc7AiBD81Z7VuKv7bkzsjP1yUybyN05QTR4wclTUBbCbSTIRSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfluACfh4B%2F2upvgbKtwDowzjFYpOhz4pOQb%2FVpmURYrgWaUzIzbp7bqyZgKYSs%2BZbMHWy%2FkFx%2BzHWPs66HU7QLhkMswjsVznGqSG6VP9Mgmlv8DGRAQ7QcEUshCzsOQSpb%2B3QibZXSKT%2B7FYsaRMiGL6JkbvAr4g%2FKKRIBbJfrHU0xiZcpdem%2FGpeMnrRwVPPlZyz2JtHF2z6AMK%2F6Jhe%2FJaGZpE3sp92GwnpO2Qhi3NdyXeCBxcj0niTL48pknBGUA5exXRqPuG1HkIrXPT53iw5MJxeQiajNfAanuHyKo%2BYVGozBbJDQNNi5U8i%2FgPdbqX%2Bp18UmIfxgVjUIivvP0KuLwu4mcePIDyxzWX%2BrY7tJsRSNLzHKBUD0RFUaEm3BxUHicPSO2Tuy2Q599I9193hopPGZs8v8Rk9tJXJ5YLwSMEafVpnInixi9%2BA306NvB9V5RqrftIiqLVabrO8a47M1AJsCeZuVTGivfdJ5kObBid7F6KQxbipicmi5vk2t%2Bt2aCeavsU7IaCvdWcbqSOXt1B3Y%2B%2FGRCPEcHpk1E%2Bemzj39CFEYZf0%2BA%2FmzXIj9%2BaVRHRJWzra4Z0F%2BZAvUO8MlrrmmkC3%2FSVUpAp5cxiezhK8%2F6JeNkBfNynsOSyYVVNzghfhX%2BAPHEwkIO6vQY6pgF9eu58f%2FyygHXpNjfde5%2FIPn4lSC8sJ0v9OPN8OueFGjuaXMAUs9yS7StkGelgniU77dQ6wy6anQ9hcW%2BaFV7QZpzTBTZofyK41NEd%2FeHVe92L%2BkMccUQjheNaBgaWD9rWTdkCtmTtx02rWoqZ%2FwvyuQ1qPFSdz5J8pBWKaswF58JaGSBcUIPlx4jBrxOojJqiTljqnpkclAOwHBES7SDPYqft4PPZ&X-Amz-Signature=8868aa0f14dfc5856a67c76f18b85efe1878bee5a6dca1ea6149a43569890fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ3RCPF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzuav5jzBoF8unNus0P7yiAvuP%2F68CLMMbEbF3MBDc7AiBD81Z7VuKv7bkzsjP1yUybyN05QTR4wclTUBbCbSTIRSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfluACfh4B%2F2upvgbKtwDowzjFYpOhz4pOQb%2FVpmURYrgWaUzIzbp7bqyZgKYSs%2BZbMHWy%2FkFx%2BzHWPs66HU7QLhkMswjsVznGqSG6VP9Mgmlv8DGRAQ7QcEUshCzsOQSpb%2B3QibZXSKT%2B7FYsaRMiGL6JkbvAr4g%2FKKRIBbJfrHU0xiZcpdem%2FGpeMnrRwVPPlZyz2JtHF2z6AMK%2F6Jhe%2FJaGZpE3sp92GwnpO2Qhi3NdyXeCBxcj0niTL48pknBGUA5exXRqPuG1HkIrXPT53iw5MJxeQiajNfAanuHyKo%2BYVGozBbJDQNNi5U8i%2FgPdbqX%2Bp18UmIfxgVjUIivvP0KuLwu4mcePIDyxzWX%2BrY7tJsRSNLzHKBUD0RFUaEm3BxUHicPSO2Tuy2Q599I9193hopPGZs8v8Rk9tJXJ5YLwSMEafVpnInixi9%2BA306NvB9V5RqrftIiqLVabrO8a47M1AJsCeZuVTGivfdJ5kObBid7F6KQxbipicmi5vk2t%2Bt2aCeavsU7IaCvdWcbqSOXt1B3Y%2B%2FGRCPEcHpk1E%2Bemzj39CFEYZf0%2BA%2FmzXIj9%2BaVRHRJWzra4Z0F%2BZAvUO8MlrrmmkC3%2FSVUpAp5cxiezhK8%2F6JeNkBfNynsOSyYVVNzghfhX%2BAPHEwkIO6vQY6pgF9eu58f%2FyygHXpNjfde5%2FIPn4lSC8sJ0v9OPN8OueFGjuaXMAUs9yS7StkGelgniU77dQ6wy6anQ9hcW%2BaFV7QZpzTBTZofyK41NEd%2FeHVe92L%2BkMccUQjheNaBgaWD9rWTdkCtmTtx02rWoqZ%2FwvyuQ1qPFSdz5J8pBWKaswF58JaGSBcUIPlx4jBrxOojJqiTljqnpkclAOwHBES7SDPYqft4PPZ&X-Amz-Signature=50734f21fa6b13ce5db60825b4463a9910d78b3c64fadb795036e875304e24c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ3RCPF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzuav5jzBoF8unNus0P7yiAvuP%2F68CLMMbEbF3MBDc7AiBD81Z7VuKv7bkzsjP1yUybyN05QTR4wclTUBbCbSTIRSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfluACfh4B%2F2upvgbKtwDowzjFYpOhz4pOQb%2FVpmURYrgWaUzIzbp7bqyZgKYSs%2BZbMHWy%2FkFx%2BzHWPs66HU7QLhkMswjsVznGqSG6VP9Mgmlv8DGRAQ7QcEUshCzsOQSpb%2B3QibZXSKT%2B7FYsaRMiGL6JkbvAr4g%2FKKRIBbJfrHU0xiZcpdem%2FGpeMnrRwVPPlZyz2JtHF2z6AMK%2F6Jhe%2FJaGZpE3sp92GwnpO2Qhi3NdyXeCBxcj0niTL48pknBGUA5exXRqPuG1HkIrXPT53iw5MJxeQiajNfAanuHyKo%2BYVGozBbJDQNNi5U8i%2FgPdbqX%2Bp18UmIfxgVjUIivvP0KuLwu4mcePIDyxzWX%2BrY7tJsRSNLzHKBUD0RFUaEm3BxUHicPSO2Tuy2Q599I9193hopPGZs8v8Rk9tJXJ5YLwSMEafVpnInixi9%2BA306NvB9V5RqrftIiqLVabrO8a47M1AJsCeZuVTGivfdJ5kObBid7F6KQxbipicmi5vk2t%2Bt2aCeavsU7IaCvdWcbqSOXt1B3Y%2B%2FGRCPEcHpk1E%2Bemzj39CFEYZf0%2BA%2FmzXIj9%2BaVRHRJWzra4Z0F%2BZAvUO8MlrrmmkC3%2FSVUpAp5cxiezhK8%2F6JeNkBfNynsOSyYVVNzghfhX%2BAPHEwkIO6vQY6pgF9eu58f%2FyygHXpNjfde5%2FIPn4lSC8sJ0v9OPN8OueFGjuaXMAUs9yS7StkGelgniU77dQ6wy6anQ9hcW%2BaFV7QZpzTBTZofyK41NEd%2FeHVe92L%2BkMccUQjheNaBgaWD9rWTdkCtmTtx02rWoqZ%2FwvyuQ1qPFSdz5J8pBWKaswF58JaGSBcUIPlx4jBrxOojJqiTljqnpkclAOwHBES7SDPYqft4PPZ&X-Amz-Signature=227f6f94b2cd92c718d9a730432a283091ffadd2c420a5c240724146435e1dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ3RCPF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzuav5jzBoF8unNus0P7yiAvuP%2F68CLMMbEbF3MBDc7AiBD81Z7VuKv7bkzsjP1yUybyN05QTR4wclTUBbCbSTIRSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfluACfh4B%2F2upvgbKtwDowzjFYpOhz4pOQb%2FVpmURYrgWaUzIzbp7bqyZgKYSs%2BZbMHWy%2FkFx%2BzHWPs66HU7QLhkMswjsVznGqSG6VP9Mgmlv8DGRAQ7QcEUshCzsOQSpb%2B3QibZXSKT%2B7FYsaRMiGL6JkbvAr4g%2FKKRIBbJfrHU0xiZcpdem%2FGpeMnrRwVPPlZyz2JtHF2z6AMK%2F6Jhe%2FJaGZpE3sp92GwnpO2Qhi3NdyXeCBxcj0niTL48pknBGUA5exXRqPuG1HkIrXPT53iw5MJxeQiajNfAanuHyKo%2BYVGozBbJDQNNi5U8i%2FgPdbqX%2Bp18UmIfxgVjUIivvP0KuLwu4mcePIDyxzWX%2BrY7tJsRSNLzHKBUD0RFUaEm3BxUHicPSO2Tuy2Q599I9193hopPGZs8v8Rk9tJXJ5YLwSMEafVpnInixi9%2BA306NvB9V5RqrftIiqLVabrO8a47M1AJsCeZuVTGivfdJ5kObBid7F6KQxbipicmi5vk2t%2Bt2aCeavsU7IaCvdWcbqSOXt1B3Y%2B%2FGRCPEcHpk1E%2Bemzj39CFEYZf0%2BA%2FmzXIj9%2BaVRHRJWzra4Z0F%2BZAvUO8MlrrmmkC3%2FSVUpAp5cxiezhK8%2F6JeNkBfNynsOSyYVVNzghfhX%2BAPHEwkIO6vQY6pgF9eu58f%2FyygHXpNjfde5%2FIPn4lSC8sJ0v9OPN8OueFGjuaXMAUs9yS7StkGelgniU77dQ6wy6anQ9hcW%2BaFV7QZpzTBTZofyK41NEd%2FeHVe92L%2BkMccUQjheNaBgaWD9rWTdkCtmTtx02rWoqZ%2FwvyuQ1qPFSdz5J8pBWKaswF58JaGSBcUIPlx4jBrxOojJqiTljqnpkclAOwHBES7SDPYqft4PPZ&X-Amz-Signature=02463efa9ecfb97fc9d27e216e0a7a9fb2859e0394aab596416fed6339176b40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZ3RCPF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzuav5jzBoF8unNus0P7yiAvuP%2F68CLMMbEbF3MBDc7AiBD81Z7VuKv7bkzsjP1yUybyN05QTR4wclTUBbCbSTIRSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMfluACfh4B%2F2upvgbKtwDowzjFYpOhz4pOQb%2FVpmURYrgWaUzIzbp7bqyZgKYSs%2BZbMHWy%2FkFx%2BzHWPs66HU7QLhkMswjsVznGqSG6VP9Mgmlv8DGRAQ7QcEUshCzsOQSpb%2B3QibZXSKT%2B7FYsaRMiGL6JkbvAr4g%2FKKRIBbJfrHU0xiZcpdem%2FGpeMnrRwVPPlZyz2JtHF2z6AMK%2F6Jhe%2FJaGZpE3sp92GwnpO2Qhi3NdyXeCBxcj0niTL48pknBGUA5exXRqPuG1HkIrXPT53iw5MJxeQiajNfAanuHyKo%2BYVGozBbJDQNNi5U8i%2FgPdbqX%2Bp18UmIfxgVjUIivvP0KuLwu4mcePIDyxzWX%2BrY7tJsRSNLzHKBUD0RFUaEm3BxUHicPSO2Tuy2Q599I9193hopPGZs8v8Rk9tJXJ5YLwSMEafVpnInixi9%2BA306NvB9V5RqrftIiqLVabrO8a47M1AJsCeZuVTGivfdJ5kObBid7F6KQxbipicmi5vk2t%2Bt2aCeavsU7IaCvdWcbqSOXt1B3Y%2B%2FGRCPEcHpk1E%2Bemzj39CFEYZf0%2BA%2FmzXIj9%2BaVRHRJWzra4Z0F%2BZAvUO8MlrrmmkC3%2FSVUpAp5cxiezhK8%2F6JeNkBfNynsOSyYVVNzghfhX%2BAPHEwkIO6vQY6pgF9eu58f%2FyygHXpNjfde5%2FIPn4lSC8sJ0v9OPN8OueFGjuaXMAUs9yS7StkGelgniU77dQ6wy6anQ9hcW%2BaFV7QZpzTBTZofyK41NEd%2FeHVe92L%2BkMccUQjheNaBgaWD9rWTdkCtmTtx02rWoqZ%2FwvyuQ1qPFSdz5J8pBWKaswF58JaGSBcUIPlx4jBrxOojJqiTljqnpkclAOwHBES7SDPYqft4PPZ&X-Amz-Signature=c5567f4753af068896683d4a0c69d0a4a4d40afc7ab1100826bf61fe0e1b77df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
