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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3AYZB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDafWpxkmUpTyvo8Ay8JBWr%2Br9ORAPSrqq0Kk%2Bx%2Fw%2Fg7QIgBNQgudHgldMJHFaX3ayAeUFX5JC4PIp%2FuqKLKIAH9lMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNBsUuBkMg7vxFGeRCrcAwwJl%2BbBHz3N7CcoYYpv8IkIXf7lWyYgzncLzNxp22sTOGgk7DXFv%2FAvuionQgt3Q%2FWSUBlhY%2BUvvV5Md92YbIf52yd8PoiebuU%2F7Ja3YEDLIkgPAH6yz0UoXLr3kdHnZTFpIZ3AMGjl60O3KpWQCdbhUVv23c1Y1IX3uf7O6Wb8%2BQHt5whPsOemai544vDgFmdNYXzsc0bF%2FCUwL%2BVyDUsLGFjS5Y%2Bhl%2FOFp1UtCgKpl%2BsDD4IL8wXESTYMPpJqToVMKWT3dHHAytcssj%2B3d7b9MPShok9TtsX3Ems1j6krlj3TVXdpGeXS%2BqXX%2BlmI5dJpv%2FR0WlrQWpIX9xgsGfcu6015BmKgr6%2BFIQfVN%2BXeRA9OqpYI4GtF9UNIRzAmou1ulcYbrLarnT%2BiIGl%2FqvZxL21kTJM6Xw1I3JpUVgowsKnI6K%2BG2JGokJ7ZaEIt8zDrCxGGqhpJ59Qud92IoSSizJvJyv5QffHlwwdTW094p7my4GvxcwuVoK0KaVKZcBpF4OGcQzzCdsRTVGp%2FTe5ugMwlH%2F%2FSZ4Mh933KlM1pjLA%2F6GFAswt6w0qLdgeuLsM4QE6VFcx27TjyA%2BUidoJZCJHNxDgOU5uRfaF3ccwr%2BvgN%2BB1LrGHKTmQpMJ6fiL0GOqUBJQCMSx8RsXHtuW%2BntEs8SACkCmJcy9qni%2By3ELem6R9wy579yIp9rkwqV08lL5aSqvSFQ4FCsJIv1T61kPPgQUpqL7MLeiwelmFZerMJaRbqz0AfbseCbOhtfGZTA2oTasM%2BAPgLBCnXqGo6pwpGaWA9HvOtEwGITgDF863pSNXwbdG1MSkpW%2FZoSdVQEo57AH1Tzkei9ApDox5r%2BDEJBfulWO4p&X-Amz-Signature=133df2012b64202d2a0028a576221857896b31f0459c7e91811c401718a20457&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3AYZB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDafWpxkmUpTyvo8Ay8JBWr%2Br9ORAPSrqq0Kk%2Bx%2Fw%2Fg7QIgBNQgudHgldMJHFaX3ayAeUFX5JC4PIp%2FuqKLKIAH9lMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNBsUuBkMg7vxFGeRCrcAwwJl%2BbBHz3N7CcoYYpv8IkIXf7lWyYgzncLzNxp22sTOGgk7DXFv%2FAvuionQgt3Q%2FWSUBlhY%2BUvvV5Md92YbIf52yd8PoiebuU%2F7Ja3YEDLIkgPAH6yz0UoXLr3kdHnZTFpIZ3AMGjl60O3KpWQCdbhUVv23c1Y1IX3uf7O6Wb8%2BQHt5whPsOemai544vDgFmdNYXzsc0bF%2FCUwL%2BVyDUsLGFjS5Y%2Bhl%2FOFp1UtCgKpl%2BsDD4IL8wXESTYMPpJqToVMKWT3dHHAytcssj%2B3d7b9MPShok9TtsX3Ems1j6krlj3TVXdpGeXS%2BqXX%2BlmI5dJpv%2FR0WlrQWpIX9xgsGfcu6015BmKgr6%2BFIQfVN%2BXeRA9OqpYI4GtF9UNIRzAmou1ulcYbrLarnT%2BiIGl%2FqvZxL21kTJM6Xw1I3JpUVgowsKnI6K%2BG2JGokJ7ZaEIt8zDrCxGGqhpJ59Qud92IoSSizJvJyv5QffHlwwdTW094p7my4GvxcwuVoK0KaVKZcBpF4OGcQzzCdsRTVGp%2FTe5ugMwlH%2F%2FSZ4Mh933KlM1pjLA%2F6GFAswt6w0qLdgeuLsM4QE6VFcx27TjyA%2BUidoJZCJHNxDgOU5uRfaF3ccwr%2BvgN%2BB1LrGHKTmQpMJ6fiL0GOqUBJQCMSx8RsXHtuW%2BntEs8SACkCmJcy9qni%2By3ELem6R9wy579yIp9rkwqV08lL5aSqvSFQ4FCsJIv1T61kPPgQUpqL7MLeiwelmFZerMJaRbqz0AfbseCbOhtfGZTA2oTasM%2BAPgLBCnXqGo6pwpGaWA9HvOtEwGITgDF863pSNXwbdG1MSkpW%2FZoSdVQEo57AH1Tzkei9ApDox5r%2BDEJBfulWO4p&X-Amz-Signature=59796e62e365ac2a0b0999515dfd68d5f437f9127c32b083c1aa4444816857c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3AYZB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDafWpxkmUpTyvo8Ay8JBWr%2Br9ORAPSrqq0Kk%2Bx%2Fw%2Fg7QIgBNQgudHgldMJHFaX3ayAeUFX5JC4PIp%2FuqKLKIAH9lMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNBsUuBkMg7vxFGeRCrcAwwJl%2BbBHz3N7CcoYYpv8IkIXf7lWyYgzncLzNxp22sTOGgk7DXFv%2FAvuionQgt3Q%2FWSUBlhY%2BUvvV5Md92YbIf52yd8PoiebuU%2F7Ja3YEDLIkgPAH6yz0UoXLr3kdHnZTFpIZ3AMGjl60O3KpWQCdbhUVv23c1Y1IX3uf7O6Wb8%2BQHt5whPsOemai544vDgFmdNYXzsc0bF%2FCUwL%2BVyDUsLGFjS5Y%2Bhl%2FOFp1UtCgKpl%2BsDD4IL8wXESTYMPpJqToVMKWT3dHHAytcssj%2B3d7b9MPShok9TtsX3Ems1j6krlj3TVXdpGeXS%2BqXX%2BlmI5dJpv%2FR0WlrQWpIX9xgsGfcu6015BmKgr6%2BFIQfVN%2BXeRA9OqpYI4GtF9UNIRzAmou1ulcYbrLarnT%2BiIGl%2FqvZxL21kTJM6Xw1I3JpUVgowsKnI6K%2BG2JGokJ7ZaEIt8zDrCxGGqhpJ59Qud92IoSSizJvJyv5QffHlwwdTW094p7my4GvxcwuVoK0KaVKZcBpF4OGcQzzCdsRTVGp%2FTe5ugMwlH%2F%2FSZ4Mh933KlM1pjLA%2F6GFAswt6w0qLdgeuLsM4QE6VFcx27TjyA%2BUidoJZCJHNxDgOU5uRfaF3ccwr%2BvgN%2BB1LrGHKTmQpMJ6fiL0GOqUBJQCMSx8RsXHtuW%2BntEs8SACkCmJcy9qni%2By3ELem6R9wy579yIp9rkwqV08lL5aSqvSFQ4FCsJIv1T61kPPgQUpqL7MLeiwelmFZerMJaRbqz0AfbseCbOhtfGZTA2oTasM%2BAPgLBCnXqGo6pwpGaWA9HvOtEwGITgDF863pSNXwbdG1MSkpW%2FZoSdVQEo57AH1Tzkei9ApDox5r%2BDEJBfulWO4p&X-Amz-Signature=eab2058f4c335a166132715409433e127331d5ff02dceaa55fd13222836ee976&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3AYZB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDafWpxkmUpTyvo8Ay8JBWr%2Br9ORAPSrqq0Kk%2Bx%2Fw%2Fg7QIgBNQgudHgldMJHFaX3ayAeUFX5JC4PIp%2FuqKLKIAH9lMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNBsUuBkMg7vxFGeRCrcAwwJl%2BbBHz3N7CcoYYpv8IkIXf7lWyYgzncLzNxp22sTOGgk7DXFv%2FAvuionQgt3Q%2FWSUBlhY%2BUvvV5Md92YbIf52yd8PoiebuU%2F7Ja3YEDLIkgPAH6yz0UoXLr3kdHnZTFpIZ3AMGjl60O3KpWQCdbhUVv23c1Y1IX3uf7O6Wb8%2BQHt5whPsOemai544vDgFmdNYXzsc0bF%2FCUwL%2BVyDUsLGFjS5Y%2Bhl%2FOFp1UtCgKpl%2BsDD4IL8wXESTYMPpJqToVMKWT3dHHAytcssj%2B3d7b9MPShok9TtsX3Ems1j6krlj3TVXdpGeXS%2BqXX%2BlmI5dJpv%2FR0WlrQWpIX9xgsGfcu6015BmKgr6%2BFIQfVN%2BXeRA9OqpYI4GtF9UNIRzAmou1ulcYbrLarnT%2BiIGl%2FqvZxL21kTJM6Xw1I3JpUVgowsKnI6K%2BG2JGokJ7ZaEIt8zDrCxGGqhpJ59Qud92IoSSizJvJyv5QffHlwwdTW094p7my4GvxcwuVoK0KaVKZcBpF4OGcQzzCdsRTVGp%2FTe5ugMwlH%2F%2FSZ4Mh933KlM1pjLA%2F6GFAswt6w0qLdgeuLsM4QE6VFcx27TjyA%2BUidoJZCJHNxDgOU5uRfaF3ccwr%2BvgN%2BB1LrGHKTmQpMJ6fiL0GOqUBJQCMSx8RsXHtuW%2BntEs8SACkCmJcy9qni%2By3ELem6R9wy579yIp9rkwqV08lL5aSqvSFQ4FCsJIv1T61kPPgQUpqL7MLeiwelmFZerMJaRbqz0AfbseCbOhtfGZTA2oTasM%2BAPgLBCnXqGo6pwpGaWA9HvOtEwGITgDF863pSNXwbdG1MSkpW%2FZoSdVQEo57AH1Tzkei9ApDox5r%2BDEJBfulWO4p&X-Amz-Signature=267a1fa32bcf3ec69f8331d527d14520ed995f4e04ef85f76c35b87282c60b67&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3AYZB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDafWpxkmUpTyvo8Ay8JBWr%2Br9ORAPSrqq0Kk%2Bx%2Fw%2Fg7QIgBNQgudHgldMJHFaX3ayAeUFX5JC4PIp%2FuqKLKIAH9lMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNBsUuBkMg7vxFGeRCrcAwwJl%2BbBHz3N7CcoYYpv8IkIXf7lWyYgzncLzNxp22sTOGgk7DXFv%2FAvuionQgt3Q%2FWSUBlhY%2BUvvV5Md92YbIf52yd8PoiebuU%2F7Ja3YEDLIkgPAH6yz0UoXLr3kdHnZTFpIZ3AMGjl60O3KpWQCdbhUVv23c1Y1IX3uf7O6Wb8%2BQHt5whPsOemai544vDgFmdNYXzsc0bF%2FCUwL%2BVyDUsLGFjS5Y%2Bhl%2FOFp1UtCgKpl%2BsDD4IL8wXESTYMPpJqToVMKWT3dHHAytcssj%2B3d7b9MPShok9TtsX3Ems1j6krlj3TVXdpGeXS%2BqXX%2BlmI5dJpv%2FR0WlrQWpIX9xgsGfcu6015BmKgr6%2BFIQfVN%2BXeRA9OqpYI4GtF9UNIRzAmou1ulcYbrLarnT%2BiIGl%2FqvZxL21kTJM6Xw1I3JpUVgowsKnI6K%2BG2JGokJ7ZaEIt8zDrCxGGqhpJ59Qud92IoSSizJvJyv5QffHlwwdTW094p7my4GvxcwuVoK0KaVKZcBpF4OGcQzzCdsRTVGp%2FTe5ugMwlH%2F%2FSZ4Mh933KlM1pjLA%2F6GFAswt6w0qLdgeuLsM4QE6VFcx27TjyA%2BUidoJZCJHNxDgOU5uRfaF3ccwr%2BvgN%2BB1LrGHKTmQpMJ6fiL0GOqUBJQCMSx8RsXHtuW%2BntEs8SACkCmJcy9qni%2By3ELem6R9wy579yIp9rkwqV08lL5aSqvSFQ4FCsJIv1T61kPPgQUpqL7MLeiwelmFZerMJaRbqz0AfbseCbOhtfGZTA2oTasM%2BAPgLBCnXqGo6pwpGaWA9HvOtEwGITgDF863pSNXwbdG1MSkpW%2FZoSdVQEo57AH1Tzkei9ApDox5r%2BDEJBfulWO4p&X-Amz-Signature=d8f64a6e6e02b08d3cb9af16b7a64d2e9e9185e5f72f4641a55cd27aa2abb064&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3AYZB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDafWpxkmUpTyvo8Ay8JBWr%2Br9ORAPSrqq0Kk%2Bx%2Fw%2Fg7QIgBNQgudHgldMJHFaX3ayAeUFX5JC4PIp%2FuqKLKIAH9lMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNBsUuBkMg7vxFGeRCrcAwwJl%2BbBHz3N7CcoYYpv8IkIXf7lWyYgzncLzNxp22sTOGgk7DXFv%2FAvuionQgt3Q%2FWSUBlhY%2BUvvV5Md92YbIf52yd8PoiebuU%2F7Ja3YEDLIkgPAH6yz0UoXLr3kdHnZTFpIZ3AMGjl60O3KpWQCdbhUVv23c1Y1IX3uf7O6Wb8%2BQHt5whPsOemai544vDgFmdNYXzsc0bF%2FCUwL%2BVyDUsLGFjS5Y%2Bhl%2FOFp1UtCgKpl%2BsDD4IL8wXESTYMPpJqToVMKWT3dHHAytcssj%2B3d7b9MPShok9TtsX3Ems1j6krlj3TVXdpGeXS%2BqXX%2BlmI5dJpv%2FR0WlrQWpIX9xgsGfcu6015BmKgr6%2BFIQfVN%2BXeRA9OqpYI4GtF9UNIRzAmou1ulcYbrLarnT%2BiIGl%2FqvZxL21kTJM6Xw1I3JpUVgowsKnI6K%2BG2JGokJ7ZaEIt8zDrCxGGqhpJ59Qud92IoSSizJvJyv5QffHlwwdTW094p7my4GvxcwuVoK0KaVKZcBpF4OGcQzzCdsRTVGp%2FTe5ugMwlH%2F%2FSZ4Mh933KlM1pjLA%2F6GFAswt6w0qLdgeuLsM4QE6VFcx27TjyA%2BUidoJZCJHNxDgOU5uRfaF3ccwr%2BvgN%2BB1LrGHKTmQpMJ6fiL0GOqUBJQCMSx8RsXHtuW%2BntEs8SACkCmJcy9qni%2By3ELem6R9wy579yIp9rkwqV08lL5aSqvSFQ4FCsJIv1T61kPPgQUpqL7MLeiwelmFZerMJaRbqz0AfbseCbOhtfGZTA2oTasM%2BAPgLBCnXqGo6pwpGaWA9HvOtEwGITgDF863pSNXwbdG1MSkpW%2FZoSdVQEo57AH1Tzkei9ApDox5r%2BDEJBfulWO4p&X-Amz-Signature=0475774ad276737b60d7113f837bf0fd591186065b539bd4946dc702e63c3bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR3AYZB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDafWpxkmUpTyvo8Ay8JBWr%2Br9ORAPSrqq0Kk%2Bx%2Fw%2Fg7QIgBNQgudHgldMJHFaX3ayAeUFX5JC4PIp%2FuqKLKIAH9lMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNBsUuBkMg7vxFGeRCrcAwwJl%2BbBHz3N7CcoYYpv8IkIXf7lWyYgzncLzNxp22sTOGgk7DXFv%2FAvuionQgt3Q%2FWSUBlhY%2BUvvV5Md92YbIf52yd8PoiebuU%2F7Ja3YEDLIkgPAH6yz0UoXLr3kdHnZTFpIZ3AMGjl60O3KpWQCdbhUVv23c1Y1IX3uf7O6Wb8%2BQHt5whPsOemai544vDgFmdNYXzsc0bF%2FCUwL%2BVyDUsLGFjS5Y%2Bhl%2FOFp1UtCgKpl%2BsDD4IL8wXESTYMPpJqToVMKWT3dHHAytcssj%2B3d7b9MPShok9TtsX3Ems1j6krlj3TVXdpGeXS%2BqXX%2BlmI5dJpv%2FR0WlrQWpIX9xgsGfcu6015BmKgr6%2BFIQfVN%2BXeRA9OqpYI4GtF9UNIRzAmou1ulcYbrLarnT%2BiIGl%2FqvZxL21kTJM6Xw1I3JpUVgowsKnI6K%2BG2JGokJ7ZaEIt8zDrCxGGqhpJ59Qud92IoSSizJvJyv5QffHlwwdTW094p7my4GvxcwuVoK0KaVKZcBpF4OGcQzzCdsRTVGp%2FTe5ugMwlH%2F%2FSZ4Mh933KlM1pjLA%2F6GFAswt6w0qLdgeuLsM4QE6VFcx27TjyA%2BUidoJZCJHNxDgOU5uRfaF3ccwr%2BvgN%2BB1LrGHKTmQpMJ6fiL0GOqUBJQCMSx8RsXHtuW%2BntEs8SACkCmJcy9qni%2By3ELem6R9wy579yIp9rkwqV08lL5aSqvSFQ4FCsJIv1T61kPPgQUpqL7MLeiwelmFZerMJaRbqz0AfbseCbOhtfGZTA2oTasM%2BAPgLBCnXqGo6pwpGaWA9HvOtEwGITgDF863pSNXwbdG1MSkpW%2FZoSdVQEo57AH1Tzkei9ApDox5r%2BDEJBfulWO4p&X-Amz-Signature=d9b067101c17a2f0f8cd98e075b895dd940f260fa8b255f6e016048045a5310f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
