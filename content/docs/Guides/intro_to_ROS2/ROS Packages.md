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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RGLPW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC5h0DvGAzAr%2FoBLEN6k60oCHBGHBDNpj5SKp6p7jnqqAiEAuuZver7HiQd5r5QIoTqKzcw1Cl8pvxw6pXfZU2M9eHQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZuYwI90QBxXxcMircA4q1l%2B8q7iVYSFbLssGduvnibi%2F400jekGCy0EYl74w12WUFup%2Fi7BJbO1JKHFbI%2F2EHf%2BsVy4GnVLh0L4tkEu35rrsQasMbVDACaInQfAY3MO8tXXm8Y4gWcNIaNFIOw4BRD1Speo1tmkerjXi0SmOko1r7YlP22aULO1lP8kSQ5%2BdbQpypp6CqLVZsTi4ghWDDu75pjmq50Ub3uF%2FFGwgOBHvNYBVZAkn%2B%2B0fEuhbCgp43vEHWg9sd%2BOxX%2BcbWXDrv2wuEvYrJvOew%2BQcWg277k9NxZwaiK1zKUeddi3eWADgx%2FcHukcXdq%2BMigDhnsXmNG8qHN6pGc7auOtcRH4Jii71zOi6lDyUBat%2Bty%2FjJEwuCg%2B%2FI5zzffkAB4Ma8nAW%2BmjVojE0JLVrln3NkUqcA2ioL8Y1XbfpGZxQoi4JlC%2BTwd6cO4iD75ybtxCXHKU4oulH1DsxtouTQe6GGHVzk%2FJY%2FwNE88qEULJhqKt3WvMdj6gWUFVzzPzT6Xflja8YxsdM9sAc250mLkV0jkLV6wGPVOgVMFsQf7XJVuzOEbrpfJuTbqNxJ9QX4f36L6s38IsMHWDY%2FM4diHzLTofjrM8RsV1UT38DIHk1SDMl24IlLl5AABUCgNQigMIHx2sAGOqUBWttZN0nRc3MksIMRzMdjdsFoOsUAY0YffkBUvszk0tM2x2N9W%2FEaxiE5gJxjpWdqlvokCA2QSxS20C3LVdHZ7w6mv1CPY2a%2FnY70pBuLQ5QEUdS5rZjQL0EtMBh9mKp%2F4EOi6T%2F2kuEwOMZZNeCGcdQ9ZcxCUlN%2F9O5XcdHClfCNarzyAnaal6dV1Twb%2Bq3zoo74Et3Rj%2FTKEnP0IMwiyiUdRoRw&X-Amz-Signature=bf443fe76fefb3d5838fb3cb9e5aaa94b9ebd0d6c384ead4290d488e81a09da9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RGLPW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC5h0DvGAzAr%2FoBLEN6k60oCHBGHBDNpj5SKp6p7jnqqAiEAuuZver7HiQd5r5QIoTqKzcw1Cl8pvxw6pXfZU2M9eHQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZuYwI90QBxXxcMircA4q1l%2B8q7iVYSFbLssGduvnibi%2F400jekGCy0EYl74w12WUFup%2Fi7BJbO1JKHFbI%2F2EHf%2BsVy4GnVLh0L4tkEu35rrsQasMbVDACaInQfAY3MO8tXXm8Y4gWcNIaNFIOw4BRD1Speo1tmkerjXi0SmOko1r7YlP22aULO1lP8kSQ5%2BdbQpypp6CqLVZsTi4ghWDDu75pjmq50Ub3uF%2FFGwgOBHvNYBVZAkn%2B%2B0fEuhbCgp43vEHWg9sd%2BOxX%2BcbWXDrv2wuEvYrJvOew%2BQcWg277k9NxZwaiK1zKUeddi3eWADgx%2FcHukcXdq%2BMigDhnsXmNG8qHN6pGc7auOtcRH4Jii71zOi6lDyUBat%2Bty%2FjJEwuCg%2B%2FI5zzffkAB4Ma8nAW%2BmjVojE0JLVrln3NkUqcA2ioL8Y1XbfpGZxQoi4JlC%2BTwd6cO4iD75ybtxCXHKU4oulH1DsxtouTQe6GGHVzk%2FJY%2FwNE88qEULJhqKt3WvMdj6gWUFVzzPzT6Xflja8YxsdM9sAc250mLkV0jkLV6wGPVOgVMFsQf7XJVuzOEbrpfJuTbqNxJ9QX4f36L6s38IsMHWDY%2FM4diHzLTofjrM8RsV1UT38DIHk1SDMl24IlLl5AABUCgNQigMIHx2sAGOqUBWttZN0nRc3MksIMRzMdjdsFoOsUAY0YffkBUvszk0tM2x2N9W%2FEaxiE5gJxjpWdqlvokCA2QSxS20C3LVdHZ7w6mv1CPY2a%2FnY70pBuLQ5QEUdS5rZjQL0EtMBh9mKp%2F4EOi6T%2F2kuEwOMZZNeCGcdQ9ZcxCUlN%2F9O5XcdHClfCNarzyAnaal6dV1Twb%2Bq3zoo74Et3Rj%2FTKEnP0IMwiyiUdRoRw&X-Amz-Signature=9f7292aacc44e2330b6b64c7400938a52dc38747f9038baf1284884736507b45&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RGLPW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC5h0DvGAzAr%2FoBLEN6k60oCHBGHBDNpj5SKp6p7jnqqAiEAuuZver7HiQd5r5QIoTqKzcw1Cl8pvxw6pXfZU2M9eHQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZuYwI90QBxXxcMircA4q1l%2B8q7iVYSFbLssGduvnibi%2F400jekGCy0EYl74w12WUFup%2Fi7BJbO1JKHFbI%2F2EHf%2BsVy4GnVLh0L4tkEu35rrsQasMbVDACaInQfAY3MO8tXXm8Y4gWcNIaNFIOw4BRD1Speo1tmkerjXi0SmOko1r7YlP22aULO1lP8kSQ5%2BdbQpypp6CqLVZsTi4ghWDDu75pjmq50Ub3uF%2FFGwgOBHvNYBVZAkn%2B%2B0fEuhbCgp43vEHWg9sd%2BOxX%2BcbWXDrv2wuEvYrJvOew%2BQcWg277k9NxZwaiK1zKUeddi3eWADgx%2FcHukcXdq%2BMigDhnsXmNG8qHN6pGc7auOtcRH4Jii71zOi6lDyUBat%2Bty%2FjJEwuCg%2B%2FI5zzffkAB4Ma8nAW%2BmjVojE0JLVrln3NkUqcA2ioL8Y1XbfpGZxQoi4JlC%2BTwd6cO4iD75ybtxCXHKU4oulH1DsxtouTQe6GGHVzk%2FJY%2FwNE88qEULJhqKt3WvMdj6gWUFVzzPzT6Xflja8YxsdM9sAc250mLkV0jkLV6wGPVOgVMFsQf7XJVuzOEbrpfJuTbqNxJ9QX4f36L6s38IsMHWDY%2FM4diHzLTofjrM8RsV1UT38DIHk1SDMl24IlLl5AABUCgNQigMIHx2sAGOqUBWttZN0nRc3MksIMRzMdjdsFoOsUAY0YffkBUvszk0tM2x2N9W%2FEaxiE5gJxjpWdqlvokCA2QSxS20C3LVdHZ7w6mv1CPY2a%2FnY70pBuLQ5QEUdS5rZjQL0EtMBh9mKp%2F4EOi6T%2F2kuEwOMZZNeCGcdQ9ZcxCUlN%2F9O5XcdHClfCNarzyAnaal6dV1Twb%2Bq3zoo74Et3Rj%2FTKEnP0IMwiyiUdRoRw&X-Amz-Signature=4c3e405f5b55f4a8f331100777b7610b94f19f44aa525ea107cbfa78bb2675d1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RGLPW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC5h0DvGAzAr%2FoBLEN6k60oCHBGHBDNpj5SKp6p7jnqqAiEAuuZver7HiQd5r5QIoTqKzcw1Cl8pvxw6pXfZU2M9eHQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZuYwI90QBxXxcMircA4q1l%2B8q7iVYSFbLssGduvnibi%2F400jekGCy0EYl74w12WUFup%2Fi7BJbO1JKHFbI%2F2EHf%2BsVy4GnVLh0L4tkEu35rrsQasMbVDACaInQfAY3MO8tXXm8Y4gWcNIaNFIOw4BRD1Speo1tmkerjXi0SmOko1r7YlP22aULO1lP8kSQ5%2BdbQpypp6CqLVZsTi4ghWDDu75pjmq50Ub3uF%2FFGwgOBHvNYBVZAkn%2B%2B0fEuhbCgp43vEHWg9sd%2BOxX%2BcbWXDrv2wuEvYrJvOew%2BQcWg277k9NxZwaiK1zKUeddi3eWADgx%2FcHukcXdq%2BMigDhnsXmNG8qHN6pGc7auOtcRH4Jii71zOi6lDyUBat%2Bty%2FjJEwuCg%2B%2FI5zzffkAB4Ma8nAW%2BmjVojE0JLVrln3NkUqcA2ioL8Y1XbfpGZxQoi4JlC%2BTwd6cO4iD75ybtxCXHKU4oulH1DsxtouTQe6GGHVzk%2FJY%2FwNE88qEULJhqKt3WvMdj6gWUFVzzPzT6Xflja8YxsdM9sAc250mLkV0jkLV6wGPVOgVMFsQf7XJVuzOEbrpfJuTbqNxJ9QX4f36L6s38IsMHWDY%2FM4diHzLTofjrM8RsV1UT38DIHk1SDMl24IlLl5AABUCgNQigMIHx2sAGOqUBWttZN0nRc3MksIMRzMdjdsFoOsUAY0YffkBUvszk0tM2x2N9W%2FEaxiE5gJxjpWdqlvokCA2QSxS20C3LVdHZ7w6mv1CPY2a%2FnY70pBuLQ5QEUdS5rZjQL0EtMBh9mKp%2F4EOi6T%2F2kuEwOMZZNeCGcdQ9ZcxCUlN%2F9O5XcdHClfCNarzyAnaal6dV1Twb%2Bq3zoo74Et3Rj%2FTKEnP0IMwiyiUdRoRw&X-Amz-Signature=c2284e33f7ba2f4011ca7f51bcc0bb5a907e7b05e87fbabafaafbe74d9b60120&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RGLPW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC5h0DvGAzAr%2FoBLEN6k60oCHBGHBDNpj5SKp6p7jnqqAiEAuuZver7HiQd5r5QIoTqKzcw1Cl8pvxw6pXfZU2M9eHQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZuYwI90QBxXxcMircA4q1l%2B8q7iVYSFbLssGduvnibi%2F400jekGCy0EYl74w12WUFup%2Fi7BJbO1JKHFbI%2F2EHf%2BsVy4GnVLh0L4tkEu35rrsQasMbVDACaInQfAY3MO8tXXm8Y4gWcNIaNFIOw4BRD1Speo1tmkerjXi0SmOko1r7YlP22aULO1lP8kSQ5%2BdbQpypp6CqLVZsTi4ghWDDu75pjmq50Ub3uF%2FFGwgOBHvNYBVZAkn%2B%2B0fEuhbCgp43vEHWg9sd%2BOxX%2BcbWXDrv2wuEvYrJvOew%2BQcWg277k9NxZwaiK1zKUeddi3eWADgx%2FcHukcXdq%2BMigDhnsXmNG8qHN6pGc7auOtcRH4Jii71zOi6lDyUBat%2Bty%2FjJEwuCg%2B%2FI5zzffkAB4Ma8nAW%2BmjVojE0JLVrln3NkUqcA2ioL8Y1XbfpGZxQoi4JlC%2BTwd6cO4iD75ybtxCXHKU4oulH1DsxtouTQe6GGHVzk%2FJY%2FwNE88qEULJhqKt3WvMdj6gWUFVzzPzT6Xflja8YxsdM9sAc250mLkV0jkLV6wGPVOgVMFsQf7XJVuzOEbrpfJuTbqNxJ9QX4f36L6s38IsMHWDY%2FM4diHzLTofjrM8RsV1UT38DIHk1SDMl24IlLl5AABUCgNQigMIHx2sAGOqUBWttZN0nRc3MksIMRzMdjdsFoOsUAY0YffkBUvszk0tM2x2N9W%2FEaxiE5gJxjpWdqlvokCA2QSxS20C3LVdHZ7w6mv1CPY2a%2FnY70pBuLQ5QEUdS5rZjQL0EtMBh9mKp%2F4EOi6T%2F2kuEwOMZZNeCGcdQ9ZcxCUlN%2F9O5XcdHClfCNarzyAnaal6dV1Twb%2Bq3zoo74Et3Rj%2FTKEnP0IMwiyiUdRoRw&X-Amz-Signature=840401802790b0a4b3fec8f7842afac4e9a7f4be62f240cb3fe5dfbfe52ef900&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RGLPW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC5h0DvGAzAr%2FoBLEN6k60oCHBGHBDNpj5SKp6p7jnqqAiEAuuZver7HiQd5r5QIoTqKzcw1Cl8pvxw6pXfZU2M9eHQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZuYwI90QBxXxcMircA4q1l%2B8q7iVYSFbLssGduvnibi%2F400jekGCy0EYl74w12WUFup%2Fi7BJbO1JKHFbI%2F2EHf%2BsVy4GnVLh0L4tkEu35rrsQasMbVDACaInQfAY3MO8tXXm8Y4gWcNIaNFIOw4BRD1Speo1tmkerjXi0SmOko1r7YlP22aULO1lP8kSQ5%2BdbQpypp6CqLVZsTi4ghWDDu75pjmq50Ub3uF%2FFGwgOBHvNYBVZAkn%2B%2B0fEuhbCgp43vEHWg9sd%2BOxX%2BcbWXDrv2wuEvYrJvOew%2BQcWg277k9NxZwaiK1zKUeddi3eWADgx%2FcHukcXdq%2BMigDhnsXmNG8qHN6pGc7auOtcRH4Jii71zOi6lDyUBat%2Bty%2FjJEwuCg%2B%2FI5zzffkAB4Ma8nAW%2BmjVojE0JLVrln3NkUqcA2ioL8Y1XbfpGZxQoi4JlC%2BTwd6cO4iD75ybtxCXHKU4oulH1DsxtouTQe6GGHVzk%2FJY%2FwNE88qEULJhqKt3WvMdj6gWUFVzzPzT6Xflja8YxsdM9sAc250mLkV0jkLV6wGPVOgVMFsQf7XJVuzOEbrpfJuTbqNxJ9QX4f36L6s38IsMHWDY%2FM4diHzLTofjrM8RsV1UT38DIHk1SDMl24IlLl5AABUCgNQigMIHx2sAGOqUBWttZN0nRc3MksIMRzMdjdsFoOsUAY0YffkBUvszk0tM2x2N9W%2FEaxiE5gJxjpWdqlvokCA2QSxS20C3LVdHZ7w6mv1CPY2a%2FnY70pBuLQ5QEUdS5rZjQL0EtMBh9mKp%2F4EOi6T%2F2kuEwOMZZNeCGcdQ9ZcxCUlN%2F9O5XcdHClfCNarzyAnaal6dV1Twb%2Bq3zoo74Et3Rj%2FTKEnP0IMwiyiUdRoRw&X-Amz-Signature=91caca320f6c948a2e0e12b9274902594c517d0d85f57636d16593f1ee6ab079&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RGLPW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC5h0DvGAzAr%2FoBLEN6k60oCHBGHBDNpj5SKp6p7jnqqAiEAuuZver7HiQd5r5QIoTqKzcw1Cl8pvxw6pXfZU2M9eHQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbZuYwI90QBxXxcMircA4q1l%2B8q7iVYSFbLssGduvnibi%2F400jekGCy0EYl74w12WUFup%2Fi7BJbO1JKHFbI%2F2EHf%2BsVy4GnVLh0L4tkEu35rrsQasMbVDACaInQfAY3MO8tXXm8Y4gWcNIaNFIOw4BRD1Speo1tmkerjXi0SmOko1r7YlP22aULO1lP8kSQ5%2BdbQpypp6CqLVZsTi4ghWDDu75pjmq50Ub3uF%2FFGwgOBHvNYBVZAkn%2B%2B0fEuhbCgp43vEHWg9sd%2BOxX%2BcbWXDrv2wuEvYrJvOew%2BQcWg277k9NxZwaiK1zKUeddi3eWADgx%2FcHukcXdq%2BMigDhnsXmNG8qHN6pGc7auOtcRH4Jii71zOi6lDyUBat%2Bty%2FjJEwuCg%2B%2FI5zzffkAB4Ma8nAW%2BmjVojE0JLVrln3NkUqcA2ioL8Y1XbfpGZxQoi4JlC%2BTwd6cO4iD75ybtxCXHKU4oulH1DsxtouTQe6GGHVzk%2FJY%2FwNE88qEULJhqKt3WvMdj6gWUFVzzPzT6Xflja8YxsdM9sAc250mLkV0jkLV6wGPVOgVMFsQf7XJVuzOEbrpfJuTbqNxJ9QX4f36L6s38IsMHWDY%2FM4diHzLTofjrM8RsV1UT38DIHk1SDMl24IlLl5AABUCgNQigMIHx2sAGOqUBWttZN0nRc3MksIMRzMdjdsFoOsUAY0YffkBUvszk0tM2x2N9W%2FEaxiE5gJxjpWdqlvokCA2QSxS20C3LVdHZ7w6mv1CPY2a%2FnY70pBuLQ5QEUdS5rZjQL0EtMBh9mKp%2F4EOi6T%2F2kuEwOMZZNeCGcdQ9ZcxCUlN%2F9O5XcdHClfCNarzyAnaal6dV1Twb%2Bq3zoo74Et3Rj%2FTKEnP0IMwiyiUdRoRw&X-Amz-Signature=92898dc18490871cf4d11ee57eb09887b7e5292827a810418df289bc1f42909d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
