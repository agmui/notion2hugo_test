---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILPIUN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBW92oig38mdr5zquQhu9YrYAW3l5eOGnF82nrHlIi%2FrAiAo9fgf2IEI7XOpsrMFptypWzd0BMnK2Sd1S3lH9f3fLCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDy3HFTWu24skyDxKtwDVBnpF60bduLDeuRgLcjHbsAePViUydt2BeLwC545s%2BiTY4MYRS2uetHJp75uurC7YAItBAiqiRDWYcA3zCoJUvuOvxr314xNfJbzygCPjFgAYmrMfkbcIl8GkfqWjiep%2F83vJKcYjXlepAk%2Fo4sxSGGIzp5KICt66gwfGWZdQxYi1d%2FQIQLQXiUPY61LMLnBrpCSBWNGWIBzVJS2FPbIherc0%2BUg%2FecfESCyvehgVZUGiMLOTe4gbQIFRO3IQcJvi%2Fw%2BQPCgnkS186OwaYF3WFXc8nEn7EYHQhzLtwWXQcYyFgGctJO5FdRcOOXu86yQPFX1p%2FNyMGzxj5PL3ygnS2K%2BohvRGErfwF3hWL6V9v9CQqIQmeuOwS8wLbZ7T0Kep7uicKDiMWLJ8GQbg7iGL8zOExymX7UHAOGTpBNGNuZ1NBQTjcTXgpUXJ5rPyI2d%2B2K8J3kU9m%2F%2B3RskwrXcfIGjudjG5mDBt6AyNRtXSRoR2rXGAbzzDeKllsEx1zN7Ap50as2hwSQprrv6y78XRy6co%2BQzgOQywvhYo8Dl2V2sDqusPeQOSvHu2oF6CoKBl%2BD3SBp4%2Fn7jKKFc4A4tOIVZ%2BtXNHm5yojH95gWYLzqP2CwCq2ROQ0hPnAAwwbDnwwY6pgGORw8Nh0WcaZS%2BuFtR%2BtosIK%2BOTxhLwAPK1TbpPoKxGCCKgY1I3v6qVwr8uCZWpYqlAwLIsR1cqojsNOIoyvGkL%2B%2F7LXYzOilrsFGAt8S9wkhpegoKAB5CbppS6q7BLZMbFNecmzGPYJfS9GAYn3e%2F8kQwmsnQ9qXCpXBKDWFE%2F57rZSnUJnT%2BivPDt1vFkY77ZBKrGDOGr0MiqYx4phfNu0i7G9cm&X-Amz-Signature=86de3244bad1953a728b3d08d81d104369c01e0d557ca3822784418e4bc30849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILPIUN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBW92oig38mdr5zquQhu9YrYAW3l5eOGnF82nrHlIi%2FrAiAo9fgf2IEI7XOpsrMFptypWzd0BMnK2Sd1S3lH9f3fLCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDy3HFTWu24skyDxKtwDVBnpF60bduLDeuRgLcjHbsAePViUydt2BeLwC545s%2BiTY4MYRS2uetHJp75uurC7YAItBAiqiRDWYcA3zCoJUvuOvxr314xNfJbzygCPjFgAYmrMfkbcIl8GkfqWjiep%2F83vJKcYjXlepAk%2Fo4sxSGGIzp5KICt66gwfGWZdQxYi1d%2FQIQLQXiUPY61LMLnBrpCSBWNGWIBzVJS2FPbIherc0%2BUg%2FecfESCyvehgVZUGiMLOTe4gbQIFRO3IQcJvi%2Fw%2BQPCgnkS186OwaYF3WFXc8nEn7EYHQhzLtwWXQcYyFgGctJO5FdRcOOXu86yQPFX1p%2FNyMGzxj5PL3ygnS2K%2BohvRGErfwF3hWL6V9v9CQqIQmeuOwS8wLbZ7T0Kep7uicKDiMWLJ8GQbg7iGL8zOExymX7UHAOGTpBNGNuZ1NBQTjcTXgpUXJ5rPyI2d%2B2K8J3kU9m%2F%2B3RskwrXcfIGjudjG5mDBt6AyNRtXSRoR2rXGAbzzDeKllsEx1zN7Ap50as2hwSQprrv6y78XRy6co%2BQzgOQywvhYo8Dl2V2sDqusPeQOSvHu2oF6CoKBl%2BD3SBp4%2Fn7jKKFc4A4tOIVZ%2BtXNHm5yojH95gWYLzqP2CwCq2ROQ0hPnAAwwbDnwwY6pgGORw8Nh0WcaZS%2BuFtR%2BtosIK%2BOTxhLwAPK1TbpPoKxGCCKgY1I3v6qVwr8uCZWpYqlAwLIsR1cqojsNOIoyvGkL%2B%2F7LXYzOilrsFGAt8S9wkhpegoKAB5CbppS6q7BLZMbFNecmzGPYJfS9GAYn3e%2F8kQwmsnQ9qXCpXBKDWFE%2F57rZSnUJnT%2BivPDt1vFkY77ZBKrGDOGr0MiqYx4phfNu0i7G9cm&X-Amz-Signature=10bc3ff7f956d7e7a5df64a95d318d412d5b5229fa6a7c194cf0be1a7f6bd17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILPIUN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBW92oig38mdr5zquQhu9YrYAW3l5eOGnF82nrHlIi%2FrAiAo9fgf2IEI7XOpsrMFptypWzd0BMnK2Sd1S3lH9f3fLCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDy3HFTWu24skyDxKtwDVBnpF60bduLDeuRgLcjHbsAePViUydt2BeLwC545s%2BiTY4MYRS2uetHJp75uurC7YAItBAiqiRDWYcA3zCoJUvuOvxr314xNfJbzygCPjFgAYmrMfkbcIl8GkfqWjiep%2F83vJKcYjXlepAk%2Fo4sxSGGIzp5KICt66gwfGWZdQxYi1d%2FQIQLQXiUPY61LMLnBrpCSBWNGWIBzVJS2FPbIherc0%2BUg%2FecfESCyvehgVZUGiMLOTe4gbQIFRO3IQcJvi%2Fw%2BQPCgnkS186OwaYF3WFXc8nEn7EYHQhzLtwWXQcYyFgGctJO5FdRcOOXu86yQPFX1p%2FNyMGzxj5PL3ygnS2K%2BohvRGErfwF3hWL6V9v9CQqIQmeuOwS8wLbZ7T0Kep7uicKDiMWLJ8GQbg7iGL8zOExymX7UHAOGTpBNGNuZ1NBQTjcTXgpUXJ5rPyI2d%2B2K8J3kU9m%2F%2B3RskwrXcfIGjudjG5mDBt6AyNRtXSRoR2rXGAbzzDeKllsEx1zN7Ap50as2hwSQprrv6y78XRy6co%2BQzgOQywvhYo8Dl2V2sDqusPeQOSvHu2oF6CoKBl%2BD3SBp4%2Fn7jKKFc4A4tOIVZ%2BtXNHm5yojH95gWYLzqP2CwCq2ROQ0hPnAAwwbDnwwY6pgGORw8Nh0WcaZS%2BuFtR%2BtosIK%2BOTxhLwAPK1TbpPoKxGCCKgY1I3v6qVwr8uCZWpYqlAwLIsR1cqojsNOIoyvGkL%2B%2F7LXYzOilrsFGAt8S9wkhpegoKAB5CbppS6q7BLZMbFNecmzGPYJfS9GAYn3e%2F8kQwmsnQ9qXCpXBKDWFE%2F57rZSnUJnT%2BivPDt1vFkY77ZBKrGDOGr0MiqYx4phfNu0i7G9cm&X-Amz-Signature=3ea5be34fd4b8676828b867a31b2f9c1bbf0b74f0bdd1b79a10d77ae3355a5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILPIUN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBW92oig38mdr5zquQhu9YrYAW3l5eOGnF82nrHlIi%2FrAiAo9fgf2IEI7XOpsrMFptypWzd0BMnK2Sd1S3lH9f3fLCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDy3HFTWu24skyDxKtwDVBnpF60bduLDeuRgLcjHbsAePViUydt2BeLwC545s%2BiTY4MYRS2uetHJp75uurC7YAItBAiqiRDWYcA3zCoJUvuOvxr314xNfJbzygCPjFgAYmrMfkbcIl8GkfqWjiep%2F83vJKcYjXlepAk%2Fo4sxSGGIzp5KICt66gwfGWZdQxYi1d%2FQIQLQXiUPY61LMLnBrpCSBWNGWIBzVJS2FPbIherc0%2BUg%2FecfESCyvehgVZUGiMLOTe4gbQIFRO3IQcJvi%2Fw%2BQPCgnkS186OwaYF3WFXc8nEn7EYHQhzLtwWXQcYyFgGctJO5FdRcOOXu86yQPFX1p%2FNyMGzxj5PL3ygnS2K%2BohvRGErfwF3hWL6V9v9CQqIQmeuOwS8wLbZ7T0Kep7uicKDiMWLJ8GQbg7iGL8zOExymX7UHAOGTpBNGNuZ1NBQTjcTXgpUXJ5rPyI2d%2B2K8J3kU9m%2F%2B3RskwrXcfIGjudjG5mDBt6AyNRtXSRoR2rXGAbzzDeKllsEx1zN7Ap50as2hwSQprrv6y78XRy6co%2BQzgOQywvhYo8Dl2V2sDqusPeQOSvHu2oF6CoKBl%2BD3SBp4%2Fn7jKKFc4A4tOIVZ%2BtXNHm5yojH95gWYLzqP2CwCq2ROQ0hPnAAwwbDnwwY6pgGORw8Nh0WcaZS%2BuFtR%2BtosIK%2BOTxhLwAPK1TbpPoKxGCCKgY1I3v6qVwr8uCZWpYqlAwLIsR1cqojsNOIoyvGkL%2B%2F7LXYzOilrsFGAt8S9wkhpegoKAB5CbppS6q7BLZMbFNecmzGPYJfS9GAYn3e%2F8kQwmsnQ9qXCpXBKDWFE%2F57rZSnUJnT%2BivPDt1vFkY77ZBKrGDOGr0MiqYx4phfNu0i7G9cm&X-Amz-Signature=f804474862a42f4ab54eb18234812236f36ef8af469448eaa8e5303b4f9b228c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILPIUN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBW92oig38mdr5zquQhu9YrYAW3l5eOGnF82nrHlIi%2FrAiAo9fgf2IEI7XOpsrMFptypWzd0BMnK2Sd1S3lH9f3fLCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDy3HFTWu24skyDxKtwDVBnpF60bduLDeuRgLcjHbsAePViUydt2BeLwC545s%2BiTY4MYRS2uetHJp75uurC7YAItBAiqiRDWYcA3zCoJUvuOvxr314xNfJbzygCPjFgAYmrMfkbcIl8GkfqWjiep%2F83vJKcYjXlepAk%2Fo4sxSGGIzp5KICt66gwfGWZdQxYi1d%2FQIQLQXiUPY61LMLnBrpCSBWNGWIBzVJS2FPbIherc0%2BUg%2FecfESCyvehgVZUGiMLOTe4gbQIFRO3IQcJvi%2Fw%2BQPCgnkS186OwaYF3WFXc8nEn7EYHQhzLtwWXQcYyFgGctJO5FdRcOOXu86yQPFX1p%2FNyMGzxj5PL3ygnS2K%2BohvRGErfwF3hWL6V9v9CQqIQmeuOwS8wLbZ7T0Kep7uicKDiMWLJ8GQbg7iGL8zOExymX7UHAOGTpBNGNuZ1NBQTjcTXgpUXJ5rPyI2d%2B2K8J3kU9m%2F%2B3RskwrXcfIGjudjG5mDBt6AyNRtXSRoR2rXGAbzzDeKllsEx1zN7Ap50as2hwSQprrv6y78XRy6co%2BQzgOQywvhYo8Dl2V2sDqusPeQOSvHu2oF6CoKBl%2BD3SBp4%2Fn7jKKFc4A4tOIVZ%2BtXNHm5yojH95gWYLzqP2CwCq2ROQ0hPnAAwwbDnwwY6pgGORw8Nh0WcaZS%2BuFtR%2BtosIK%2BOTxhLwAPK1TbpPoKxGCCKgY1I3v6qVwr8uCZWpYqlAwLIsR1cqojsNOIoyvGkL%2B%2F7LXYzOilrsFGAt8S9wkhpegoKAB5CbppS6q7BLZMbFNecmzGPYJfS9GAYn3e%2F8kQwmsnQ9qXCpXBKDWFE%2F57rZSnUJnT%2BivPDt1vFkY77ZBKrGDOGr0MiqYx4phfNu0i7G9cm&X-Amz-Signature=3506480a9ab6424f58be5a5fe229b58577070955621bba68ed5388ce23a3b558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILPIUN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBW92oig38mdr5zquQhu9YrYAW3l5eOGnF82nrHlIi%2FrAiAo9fgf2IEI7XOpsrMFptypWzd0BMnK2Sd1S3lH9f3fLCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDy3HFTWu24skyDxKtwDVBnpF60bduLDeuRgLcjHbsAePViUydt2BeLwC545s%2BiTY4MYRS2uetHJp75uurC7YAItBAiqiRDWYcA3zCoJUvuOvxr314xNfJbzygCPjFgAYmrMfkbcIl8GkfqWjiep%2F83vJKcYjXlepAk%2Fo4sxSGGIzp5KICt66gwfGWZdQxYi1d%2FQIQLQXiUPY61LMLnBrpCSBWNGWIBzVJS2FPbIherc0%2BUg%2FecfESCyvehgVZUGiMLOTe4gbQIFRO3IQcJvi%2Fw%2BQPCgnkS186OwaYF3WFXc8nEn7EYHQhzLtwWXQcYyFgGctJO5FdRcOOXu86yQPFX1p%2FNyMGzxj5PL3ygnS2K%2BohvRGErfwF3hWL6V9v9CQqIQmeuOwS8wLbZ7T0Kep7uicKDiMWLJ8GQbg7iGL8zOExymX7UHAOGTpBNGNuZ1NBQTjcTXgpUXJ5rPyI2d%2B2K8J3kU9m%2F%2B3RskwrXcfIGjudjG5mDBt6AyNRtXSRoR2rXGAbzzDeKllsEx1zN7Ap50as2hwSQprrv6y78XRy6co%2BQzgOQywvhYo8Dl2V2sDqusPeQOSvHu2oF6CoKBl%2BD3SBp4%2Fn7jKKFc4A4tOIVZ%2BtXNHm5yojH95gWYLzqP2CwCq2ROQ0hPnAAwwbDnwwY6pgGORw8Nh0WcaZS%2BuFtR%2BtosIK%2BOTxhLwAPK1TbpPoKxGCCKgY1I3v6qVwr8uCZWpYqlAwLIsR1cqojsNOIoyvGkL%2B%2F7LXYzOilrsFGAt8S9wkhpegoKAB5CbppS6q7BLZMbFNecmzGPYJfS9GAYn3e%2F8kQwmsnQ9qXCpXBKDWFE%2F57rZSnUJnT%2BivPDt1vFkY77ZBKrGDOGr0MiqYx4phfNu0i7G9cm&X-Amz-Signature=ce9a4a2333e442c0473bf6a0ab54f84e6dd77d7e33ffce4bff9677ba23f66ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZILPIUN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBW92oig38mdr5zquQhu9YrYAW3l5eOGnF82nrHlIi%2FrAiAo9fgf2IEI7XOpsrMFptypWzd0BMnK2Sd1S3lH9f3fLCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDy3HFTWu24skyDxKtwDVBnpF60bduLDeuRgLcjHbsAePViUydt2BeLwC545s%2BiTY4MYRS2uetHJp75uurC7YAItBAiqiRDWYcA3zCoJUvuOvxr314xNfJbzygCPjFgAYmrMfkbcIl8GkfqWjiep%2F83vJKcYjXlepAk%2Fo4sxSGGIzp5KICt66gwfGWZdQxYi1d%2FQIQLQXiUPY61LMLnBrpCSBWNGWIBzVJS2FPbIherc0%2BUg%2FecfESCyvehgVZUGiMLOTe4gbQIFRO3IQcJvi%2Fw%2BQPCgnkS186OwaYF3WFXc8nEn7EYHQhzLtwWXQcYyFgGctJO5FdRcOOXu86yQPFX1p%2FNyMGzxj5PL3ygnS2K%2BohvRGErfwF3hWL6V9v9CQqIQmeuOwS8wLbZ7T0Kep7uicKDiMWLJ8GQbg7iGL8zOExymX7UHAOGTpBNGNuZ1NBQTjcTXgpUXJ5rPyI2d%2B2K8J3kU9m%2F%2B3RskwrXcfIGjudjG5mDBt6AyNRtXSRoR2rXGAbzzDeKllsEx1zN7Ap50as2hwSQprrv6y78XRy6co%2BQzgOQywvhYo8Dl2V2sDqusPeQOSvHu2oF6CoKBl%2BD3SBp4%2Fn7jKKFc4A4tOIVZ%2BtXNHm5yojH95gWYLzqP2CwCq2ROQ0hPnAAwwbDnwwY6pgGORw8Nh0WcaZS%2BuFtR%2BtosIK%2BOTxhLwAPK1TbpPoKxGCCKgY1I3v6qVwr8uCZWpYqlAwLIsR1cqojsNOIoyvGkL%2B%2F7LXYzOilrsFGAt8S9wkhpegoKAB5CbppS6q7BLZMbFNecmzGPYJfS9GAYn3e%2F8kQwmsnQ9qXCpXBKDWFE%2F57rZSnUJnT%2BivPDt1vFkY77ZBKrGDOGr0MiqYx4phfNu0i7G9cm&X-Amz-Signature=383db5de006b380f6b58a282bf3cdde540b834d29ee67c334abf8153e90d3bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
