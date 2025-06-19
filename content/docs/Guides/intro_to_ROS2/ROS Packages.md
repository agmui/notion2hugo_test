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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UAX7QF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSqM9XUYrPCEyAe3yw1mHKzM%2BH%2FUMyuRmUDBg3czRJ1AiEAmBHnL%2BUaY3k5o%2F1eV3cQR6e%2FDCda4VormCDuh05%2FxgAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZhSPVQXxCxGPnK4CrcAw1pODcjlGEGW8qj1IZO%2B2qT%2BduZ8XzLmWpW30zstHjXvXOIfRmdyAEzgg1hidLZNqj4CCI36DehSCkjtxPC2dBz8BDHWXfuSPPHPBVHcqweJCZlFgFK2w6YWmMPc34%2FcGwGTqO5Z5zzCXzu4d48HzavmMtBfrtPF99DTVW0oQjebws7x4S81LU2LkbLx%2FNfFKvR0mMBZfLqhosxI8nxTclCG3XE9BrESfLdqnKgY3Ur4a41eqyD69kCWP6gPms9PFFlZ46ReiDUN0TMswaUcW1WfoeT1DSd7l1c26o%2FuFUN0OijUXLgb%2FHHkfcOM2gCl648J6b4ceiP2hDSR%2FQixLYPRUPWs59p0kEWM%2B%2ByF5OWYnWKR5Y5k0kKxyESGy8YreCTm6oO8NKoPyNxK0HaHoF7k5VMIwTvfZLP5mm67ONUPkwtOX0eRIpiWxovJl%2FYAprWPKTclw7QJOmYLtpZjIcHdTZF07jLrWEm7EStuUqFTP0SocnEecl%2FJAF%2F1AHTqvdCxZ93J66dRHEAvq%2BFj2hNazGJFxGAuT2WyoOXhma3a4faInUG3Z7SBb8HaBdvr%2FBf8Q%2BHATr5JUcT2nkvH4F0J%2Bk1AM1t846lyvJ3xYsZ1PJJ8dK8bEO49YllMJS20cIGOqUBMSpp%2BU6USf%2FqrDyBTHu7ST6GWPsuFgNOFOHRxOi8fY3uvyGkMpYCEK4MUa5ApdlqtxGaSsDwHTzgL1Lp5zrnI1bwo0tetDqZ4J68flXNOOaSU%2FOB3qm9qL1M8ZW%2Fq2vZwRURerUhZrufkjj923vLJiPAy4aj0CtZ0Zhfnm%2BaT1cWnF%2Bw1V0jwn0UXiD7AY0%2FmJs7KN%2FPEI0JviYIZ0eieB5h%2FP16&X-Amz-Signature=38322e3b63e2360518f270a6ad551fe7aef612ec087572929a986eb898c6d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UAX7QF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSqM9XUYrPCEyAe3yw1mHKzM%2BH%2FUMyuRmUDBg3czRJ1AiEAmBHnL%2BUaY3k5o%2F1eV3cQR6e%2FDCda4VormCDuh05%2FxgAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZhSPVQXxCxGPnK4CrcAw1pODcjlGEGW8qj1IZO%2B2qT%2BduZ8XzLmWpW30zstHjXvXOIfRmdyAEzgg1hidLZNqj4CCI36DehSCkjtxPC2dBz8BDHWXfuSPPHPBVHcqweJCZlFgFK2w6YWmMPc34%2FcGwGTqO5Z5zzCXzu4d48HzavmMtBfrtPF99DTVW0oQjebws7x4S81LU2LkbLx%2FNfFKvR0mMBZfLqhosxI8nxTclCG3XE9BrESfLdqnKgY3Ur4a41eqyD69kCWP6gPms9PFFlZ46ReiDUN0TMswaUcW1WfoeT1DSd7l1c26o%2FuFUN0OijUXLgb%2FHHkfcOM2gCl648J6b4ceiP2hDSR%2FQixLYPRUPWs59p0kEWM%2B%2ByF5OWYnWKR5Y5k0kKxyESGy8YreCTm6oO8NKoPyNxK0HaHoF7k5VMIwTvfZLP5mm67ONUPkwtOX0eRIpiWxovJl%2FYAprWPKTclw7QJOmYLtpZjIcHdTZF07jLrWEm7EStuUqFTP0SocnEecl%2FJAF%2F1AHTqvdCxZ93J66dRHEAvq%2BFj2hNazGJFxGAuT2WyoOXhma3a4faInUG3Z7SBb8HaBdvr%2FBf8Q%2BHATr5JUcT2nkvH4F0J%2Bk1AM1t846lyvJ3xYsZ1PJJ8dK8bEO49YllMJS20cIGOqUBMSpp%2BU6USf%2FqrDyBTHu7ST6GWPsuFgNOFOHRxOi8fY3uvyGkMpYCEK4MUa5ApdlqtxGaSsDwHTzgL1Lp5zrnI1bwo0tetDqZ4J68flXNOOaSU%2FOB3qm9qL1M8ZW%2Fq2vZwRURerUhZrufkjj923vLJiPAy4aj0CtZ0Zhfnm%2BaT1cWnF%2Bw1V0jwn0UXiD7AY0%2FmJs7KN%2FPEI0JviYIZ0eieB5h%2FP16&X-Amz-Signature=2f46148f721e353da72b1eef24083a4122ca07018fcfc83893567dc8e09616d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UAX7QF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSqM9XUYrPCEyAe3yw1mHKzM%2BH%2FUMyuRmUDBg3czRJ1AiEAmBHnL%2BUaY3k5o%2F1eV3cQR6e%2FDCda4VormCDuh05%2FxgAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZhSPVQXxCxGPnK4CrcAw1pODcjlGEGW8qj1IZO%2B2qT%2BduZ8XzLmWpW30zstHjXvXOIfRmdyAEzgg1hidLZNqj4CCI36DehSCkjtxPC2dBz8BDHWXfuSPPHPBVHcqweJCZlFgFK2w6YWmMPc34%2FcGwGTqO5Z5zzCXzu4d48HzavmMtBfrtPF99DTVW0oQjebws7x4S81LU2LkbLx%2FNfFKvR0mMBZfLqhosxI8nxTclCG3XE9BrESfLdqnKgY3Ur4a41eqyD69kCWP6gPms9PFFlZ46ReiDUN0TMswaUcW1WfoeT1DSd7l1c26o%2FuFUN0OijUXLgb%2FHHkfcOM2gCl648J6b4ceiP2hDSR%2FQixLYPRUPWs59p0kEWM%2B%2ByF5OWYnWKR5Y5k0kKxyESGy8YreCTm6oO8NKoPyNxK0HaHoF7k5VMIwTvfZLP5mm67ONUPkwtOX0eRIpiWxovJl%2FYAprWPKTclw7QJOmYLtpZjIcHdTZF07jLrWEm7EStuUqFTP0SocnEecl%2FJAF%2F1AHTqvdCxZ93J66dRHEAvq%2BFj2hNazGJFxGAuT2WyoOXhma3a4faInUG3Z7SBb8HaBdvr%2FBf8Q%2BHATr5JUcT2nkvH4F0J%2Bk1AM1t846lyvJ3xYsZ1PJJ8dK8bEO49YllMJS20cIGOqUBMSpp%2BU6USf%2FqrDyBTHu7ST6GWPsuFgNOFOHRxOi8fY3uvyGkMpYCEK4MUa5ApdlqtxGaSsDwHTzgL1Lp5zrnI1bwo0tetDqZ4J68flXNOOaSU%2FOB3qm9qL1M8ZW%2Fq2vZwRURerUhZrufkjj923vLJiPAy4aj0CtZ0Zhfnm%2BaT1cWnF%2Bw1V0jwn0UXiD7AY0%2FmJs7KN%2FPEI0JviYIZ0eieB5h%2FP16&X-Amz-Signature=72ebe51dbbca7b4b87ace883a3af77cbd2977b95c58568f5784bdaf8e21a7e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UAX7QF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSqM9XUYrPCEyAe3yw1mHKzM%2BH%2FUMyuRmUDBg3czRJ1AiEAmBHnL%2BUaY3k5o%2F1eV3cQR6e%2FDCda4VormCDuh05%2FxgAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZhSPVQXxCxGPnK4CrcAw1pODcjlGEGW8qj1IZO%2B2qT%2BduZ8XzLmWpW30zstHjXvXOIfRmdyAEzgg1hidLZNqj4CCI36DehSCkjtxPC2dBz8BDHWXfuSPPHPBVHcqweJCZlFgFK2w6YWmMPc34%2FcGwGTqO5Z5zzCXzu4d48HzavmMtBfrtPF99DTVW0oQjebws7x4S81LU2LkbLx%2FNfFKvR0mMBZfLqhosxI8nxTclCG3XE9BrESfLdqnKgY3Ur4a41eqyD69kCWP6gPms9PFFlZ46ReiDUN0TMswaUcW1WfoeT1DSd7l1c26o%2FuFUN0OijUXLgb%2FHHkfcOM2gCl648J6b4ceiP2hDSR%2FQixLYPRUPWs59p0kEWM%2B%2ByF5OWYnWKR5Y5k0kKxyESGy8YreCTm6oO8NKoPyNxK0HaHoF7k5VMIwTvfZLP5mm67ONUPkwtOX0eRIpiWxovJl%2FYAprWPKTclw7QJOmYLtpZjIcHdTZF07jLrWEm7EStuUqFTP0SocnEecl%2FJAF%2F1AHTqvdCxZ93J66dRHEAvq%2BFj2hNazGJFxGAuT2WyoOXhma3a4faInUG3Z7SBb8HaBdvr%2FBf8Q%2BHATr5JUcT2nkvH4F0J%2Bk1AM1t846lyvJ3xYsZ1PJJ8dK8bEO49YllMJS20cIGOqUBMSpp%2BU6USf%2FqrDyBTHu7ST6GWPsuFgNOFOHRxOi8fY3uvyGkMpYCEK4MUa5ApdlqtxGaSsDwHTzgL1Lp5zrnI1bwo0tetDqZ4J68flXNOOaSU%2FOB3qm9qL1M8ZW%2Fq2vZwRURerUhZrufkjj923vLJiPAy4aj0CtZ0Zhfnm%2BaT1cWnF%2Bw1V0jwn0UXiD7AY0%2FmJs7KN%2FPEI0JviYIZ0eieB5h%2FP16&X-Amz-Signature=f26f204a4a04b38767325dea5061a779c7da997c705099f9b5de7744692a15a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UAX7QF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSqM9XUYrPCEyAe3yw1mHKzM%2BH%2FUMyuRmUDBg3czRJ1AiEAmBHnL%2BUaY3k5o%2F1eV3cQR6e%2FDCda4VormCDuh05%2FxgAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZhSPVQXxCxGPnK4CrcAw1pODcjlGEGW8qj1IZO%2B2qT%2BduZ8XzLmWpW30zstHjXvXOIfRmdyAEzgg1hidLZNqj4CCI36DehSCkjtxPC2dBz8BDHWXfuSPPHPBVHcqweJCZlFgFK2w6YWmMPc34%2FcGwGTqO5Z5zzCXzu4d48HzavmMtBfrtPF99DTVW0oQjebws7x4S81LU2LkbLx%2FNfFKvR0mMBZfLqhosxI8nxTclCG3XE9BrESfLdqnKgY3Ur4a41eqyD69kCWP6gPms9PFFlZ46ReiDUN0TMswaUcW1WfoeT1DSd7l1c26o%2FuFUN0OijUXLgb%2FHHkfcOM2gCl648J6b4ceiP2hDSR%2FQixLYPRUPWs59p0kEWM%2B%2ByF5OWYnWKR5Y5k0kKxyESGy8YreCTm6oO8NKoPyNxK0HaHoF7k5VMIwTvfZLP5mm67ONUPkwtOX0eRIpiWxovJl%2FYAprWPKTclw7QJOmYLtpZjIcHdTZF07jLrWEm7EStuUqFTP0SocnEecl%2FJAF%2F1AHTqvdCxZ93J66dRHEAvq%2BFj2hNazGJFxGAuT2WyoOXhma3a4faInUG3Z7SBb8HaBdvr%2FBf8Q%2BHATr5JUcT2nkvH4F0J%2Bk1AM1t846lyvJ3xYsZ1PJJ8dK8bEO49YllMJS20cIGOqUBMSpp%2BU6USf%2FqrDyBTHu7ST6GWPsuFgNOFOHRxOi8fY3uvyGkMpYCEK4MUa5ApdlqtxGaSsDwHTzgL1Lp5zrnI1bwo0tetDqZ4J68flXNOOaSU%2FOB3qm9qL1M8ZW%2Fq2vZwRURerUhZrufkjj923vLJiPAy4aj0CtZ0Zhfnm%2BaT1cWnF%2Bw1V0jwn0UXiD7AY0%2FmJs7KN%2FPEI0JviYIZ0eieB5h%2FP16&X-Amz-Signature=06e687db0156561f39c67bd3210122e23daddc429cd81e10e0983fc4d05d51f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UAX7QF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSqM9XUYrPCEyAe3yw1mHKzM%2BH%2FUMyuRmUDBg3czRJ1AiEAmBHnL%2BUaY3k5o%2F1eV3cQR6e%2FDCda4VormCDuh05%2FxgAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZhSPVQXxCxGPnK4CrcAw1pODcjlGEGW8qj1IZO%2B2qT%2BduZ8XzLmWpW30zstHjXvXOIfRmdyAEzgg1hidLZNqj4CCI36DehSCkjtxPC2dBz8BDHWXfuSPPHPBVHcqweJCZlFgFK2w6YWmMPc34%2FcGwGTqO5Z5zzCXzu4d48HzavmMtBfrtPF99DTVW0oQjebws7x4S81LU2LkbLx%2FNfFKvR0mMBZfLqhosxI8nxTclCG3XE9BrESfLdqnKgY3Ur4a41eqyD69kCWP6gPms9PFFlZ46ReiDUN0TMswaUcW1WfoeT1DSd7l1c26o%2FuFUN0OijUXLgb%2FHHkfcOM2gCl648J6b4ceiP2hDSR%2FQixLYPRUPWs59p0kEWM%2B%2ByF5OWYnWKR5Y5k0kKxyESGy8YreCTm6oO8NKoPyNxK0HaHoF7k5VMIwTvfZLP5mm67ONUPkwtOX0eRIpiWxovJl%2FYAprWPKTclw7QJOmYLtpZjIcHdTZF07jLrWEm7EStuUqFTP0SocnEecl%2FJAF%2F1AHTqvdCxZ93J66dRHEAvq%2BFj2hNazGJFxGAuT2WyoOXhma3a4faInUG3Z7SBb8HaBdvr%2FBf8Q%2BHATr5JUcT2nkvH4F0J%2Bk1AM1t846lyvJ3xYsZ1PJJ8dK8bEO49YllMJS20cIGOqUBMSpp%2BU6USf%2FqrDyBTHu7ST6GWPsuFgNOFOHRxOi8fY3uvyGkMpYCEK4MUa5ApdlqtxGaSsDwHTzgL1Lp5zrnI1bwo0tetDqZ4J68flXNOOaSU%2FOB3qm9qL1M8ZW%2Fq2vZwRURerUhZrufkjj923vLJiPAy4aj0CtZ0Zhfnm%2BaT1cWnF%2Bw1V0jwn0UXiD7AY0%2FmJs7KN%2FPEI0JviYIZ0eieB5h%2FP16&X-Amz-Signature=5bceb039c360d04a43785b90bf27dbd5d1dc14e57cd67d4068fb5cf47c429b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UAX7QF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSqM9XUYrPCEyAe3yw1mHKzM%2BH%2FUMyuRmUDBg3czRJ1AiEAmBHnL%2BUaY3k5o%2F1eV3cQR6e%2FDCda4VormCDuh05%2FxgAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZhSPVQXxCxGPnK4CrcAw1pODcjlGEGW8qj1IZO%2B2qT%2BduZ8XzLmWpW30zstHjXvXOIfRmdyAEzgg1hidLZNqj4CCI36DehSCkjtxPC2dBz8BDHWXfuSPPHPBVHcqweJCZlFgFK2w6YWmMPc34%2FcGwGTqO5Z5zzCXzu4d48HzavmMtBfrtPF99DTVW0oQjebws7x4S81LU2LkbLx%2FNfFKvR0mMBZfLqhosxI8nxTclCG3XE9BrESfLdqnKgY3Ur4a41eqyD69kCWP6gPms9PFFlZ46ReiDUN0TMswaUcW1WfoeT1DSd7l1c26o%2FuFUN0OijUXLgb%2FHHkfcOM2gCl648J6b4ceiP2hDSR%2FQixLYPRUPWs59p0kEWM%2B%2ByF5OWYnWKR5Y5k0kKxyESGy8YreCTm6oO8NKoPyNxK0HaHoF7k5VMIwTvfZLP5mm67ONUPkwtOX0eRIpiWxovJl%2FYAprWPKTclw7QJOmYLtpZjIcHdTZF07jLrWEm7EStuUqFTP0SocnEecl%2FJAF%2F1AHTqvdCxZ93J66dRHEAvq%2BFj2hNazGJFxGAuT2WyoOXhma3a4faInUG3Z7SBb8HaBdvr%2FBf8Q%2BHATr5JUcT2nkvH4F0J%2Bk1AM1t846lyvJ3xYsZ1PJJ8dK8bEO49YllMJS20cIGOqUBMSpp%2BU6USf%2FqrDyBTHu7ST6GWPsuFgNOFOHRxOi8fY3uvyGkMpYCEK4MUa5ApdlqtxGaSsDwHTzgL1Lp5zrnI1bwo0tetDqZ4J68flXNOOaSU%2FOB3qm9qL1M8ZW%2Fq2vZwRURerUhZrufkjj923vLJiPAy4aj0CtZ0Zhfnm%2BaT1cWnF%2Bw1V0jwn0UXiD7AY0%2FmJs7KN%2FPEI0JviYIZ0eieB5h%2FP16&X-Amz-Signature=f1653a15e4ebf4c42c3c4a4d369cd22081253efca0258dde8388e0abf19e5d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
