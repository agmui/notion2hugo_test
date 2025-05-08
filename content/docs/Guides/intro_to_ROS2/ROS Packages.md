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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BCFKJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECPrA4gQ7pN4UQMkghu9P33nsDd3m60ATISTP6xsYV2AiEAmFUm1%2BF1o3qPuVyjR9c04iqYUEiXw9xS%2FPUBS5Cow80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAu%2BL9OOAyCdMXgRjyrcAxyg3SQi5sLo8W5vTKfXoQ4zwuD2%2FYKFuX6nSehfG4cdgLQN4Yf2nfSnD6nwB5vxpHYiI1JGryRAUMpjeFLEZHPU86pfIXOLatkjKjtm2MkaEazsLhCnsAQLafnrQKADZffMScA5np7t6xolvyrhAe1%2FXfBCRW%2BuCpDgJ1zEM%2FJHl0qYC6xl1wQ17bwjbxdDt0OJWGl5f%2B0a8BDdA%2BsxPL7vs%2FAcoufzO82leDoqH24XdMEEXMzvLgNBrb2duVK4Z%2B5NbL9KSMtgmIvG1f3ptxXGJpPcwu6bDOe53ssf9OMRyIfRUYbos7%2B%2F2OxSzvy7fAYiaQAMZ3gBumrKmO9BAZO9pNYHY4BIkFh7MINVTAzRNZfdaUdapEWPuoLE98V7aK3wQj1hfuAfFtqHEBO8LqdIfuy13eJ0I3b2N89gkiyfN3DK8PaKOKSSyfrzZOZD6ZvzR93tYd6tYd98V1JVMvcBkercwhfSV0v4sWyta%2Fs5QMEEIGXfQI%2BghnGIQqNtvieEO%2Bc737q%2FjeLpdeZUOtQ2zb6KjBrKVJNXbiy8itislmtPpUky1usrr3ukycsIu265NfY8fLsSROJLVKgpf2jZgalUYHzeO9GJgPl8r0Vyrn6gscKVmcpdsu20MK%2FF8cAGOqUBmzrmyD8ruNBv0GUTl2VurjCxT%2BrGQbDEi0FUr8AkvykvyZCevxgLFMFihf8B%2FdZhr4PWc%2FySh3RSNoxKzNvSsh5snCj5NrJJhdowTP7VfId%2FjbJhXOYxzFUgbnSYLoeLoZ7Uu8V%2FrsTvajDxTZJwz3QQROFRD3MVx1bw5NvqupjJJl1g6rgak15RpdDZ1q1R61esa%2B2IQtz4I35vEOdAs8isGKf5&X-Amz-Signature=5f58fb0e5bee88bc6782ce584fccfca74baeefa82c1e9a13aa8478c291f889f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BCFKJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECPrA4gQ7pN4UQMkghu9P33nsDd3m60ATISTP6xsYV2AiEAmFUm1%2BF1o3qPuVyjR9c04iqYUEiXw9xS%2FPUBS5Cow80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAu%2BL9OOAyCdMXgRjyrcAxyg3SQi5sLo8W5vTKfXoQ4zwuD2%2FYKFuX6nSehfG4cdgLQN4Yf2nfSnD6nwB5vxpHYiI1JGryRAUMpjeFLEZHPU86pfIXOLatkjKjtm2MkaEazsLhCnsAQLafnrQKADZffMScA5np7t6xolvyrhAe1%2FXfBCRW%2BuCpDgJ1zEM%2FJHl0qYC6xl1wQ17bwjbxdDt0OJWGl5f%2B0a8BDdA%2BsxPL7vs%2FAcoufzO82leDoqH24XdMEEXMzvLgNBrb2duVK4Z%2B5NbL9KSMtgmIvG1f3ptxXGJpPcwu6bDOe53ssf9OMRyIfRUYbos7%2B%2F2OxSzvy7fAYiaQAMZ3gBumrKmO9BAZO9pNYHY4BIkFh7MINVTAzRNZfdaUdapEWPuoLE98V7aK3wQj1hfuAfFtqHEBO8LqdIfuy13eJ0I3b2N89gkiyfN3DK8PaKOKSSyfrzZOZD6ZvzR93tYd6tYd98V1JVMvcBkercwhfSV0v4sWyta%2Fs5QMEEIGXfQI%2BghnGIQqNtvieEO%2Bc737q%2FjeLpdeZUOtQ2zb6KjBrKVJNXbiy8itislmtPpUky1usrr3ukycsIu265NfY8fLsSROJLVKgpf2jZgalUYHzeO9GJgPl8r0Vyrn6gscKVmcpdsu20MK%2FF8cAGOqUBmzrmyD8ruNBv0GUTl2VurjCxT%2BrGQbDEi0FUr8AkvykvyZCevxgLFMFihf8B%2FdZhr4PWc%2FySh3RSNoxKzNvSsh5snCj5NrJJhdowTP7VfId%2FjbJhXOYxzFUgbnSYLoeLoZ7Uu8V%2FrsTvajDxTZJwz3QQROFRD3MVx1bw5NvqupjJJl1g6rgak15RpdDZ1q1R61esa%2B2IQtz4I35vEOdAs8isGKf5&X-Amz-Signature=8ca4ae23de8157779d149699b5ad6d478da93290c3fbb353a75b3ddd8399d17e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BCFKJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECPrA4gQ7pN4UQMkghu9P33nsDd3m60ATISTP6xsYV2AiEAmFUm1%2BF1o3qPuVyjR9c04iqYUEiXw9xS%2FPUBS5Cow80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAu%2BL9OOAyCdMXgRjyrcAxyg3SQi5sLo8W5vTKfXoQ4zwuD2%2FYKFuX6nSehfG4cdgLQN4Yf2nfSnD6nwB5vxpHYiI1JGryRAUMpjeFLEZHPU86pfIXOLatkjKjtm2MkaEazsLhCnsAQLafnrQKADZffMScA5np7t6xolvyrhAe1%2FXfBCRW%2BuCpDgJ1zEM%2FJHl0qYC6xl1wQ17bwjbxdDt0OJWGl5f%2B0a8BDdA%2BsxPL7vs%2FAcoufzO82leDoqH24XdMEEXMzvLgNBrb2duVK4Z%2B5NbL9KSMtgmIvG1f3ptxXGJpPcwu6bDOe53ssf9OMRyIfRUYbos7%2B%2F2OxSzvy7fAYiaQAMZ3gBumrKmO9BAZO9pNYHY4BIkFh7MINVTAzRNZfdaUdapEWPuoLE98V7aK3wQj1hfuAfFtqHEBO8LqdIfuy13eJ0I3b2N89gkiyfN3DK8PaKOKSSyfrzZOZD6ZvzR93tYd6tYd98V1JVMvcBkercwhfSV0v4sWyta%2Fs5QMEEIGXfQI%2BghnGIQqNtvieEO%2Bc737q%2FjeLpdeZUOtQ2zb6KjBrKVJNXbiy8itislmtPpUky1usrr3ukycsIu265NfY8fLsSROJLVKgpf2jZgalUYHzeO9GJgPl8r0Vyrn6gscKVmcpdsu20MK%2FF8cAGOqUBmzrmyD8ruNBv0GUTl2VurjCxT%2BrGQbDEi0FUr8AkvykvyZCevxgLFMFihf8B%2FdZhr4PWc%2FySh3RSNoxKzNvSsh5snCj5NrJJhdowTP7VfId%2FjbJhXOYxzFUgbnSYLoeLoZ7Uu8V%2FrsTvajDxTZJwz3QQROFRD3MVx1bw5NvqupjJJl1g6rgak15RpdDZ1q1R61esa%2B2IQtz4I35vEOdAs8isGKf5&X-Amz-Signature=a99da3e3d850bdb6927e8a687372f8f401390b1bf87e9351bc11e3f29891507e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BCFKJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECPrA4gQ7pN4UQMkghu9P33nsDd3m60ATISTP6xsYV2AiEAmFUm1%2BF1o3qPuVyjR9c04iqYUEiXw9xS%2FPUBS5Cow80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAu%2BL9OOAyCdMXgRjyrcAxyg3SQi5sLo8W5vTKfXoQ4zwuD2%2FYKFuX6nSehfG4cdgLQN4Yf2nfSnD6nwB5vxpHYiI1JGryRAUMpjeFLEZHPU86pfIXOLatkjKjtm2MkaEazsLhCnsAQLafnrQKADZffMScA5np7t6xolvyrhAe1%2FXfBCRW%2BuCpDgJ1zEM%2FJHl0qYC6xl1wQ17bwjbxdDt0OJWGl5f%2B0a8BDdA%2BsxPL7vs%2FAcoufzO82leDoqH24XdMEEXMzvLgNBrb2duVK4Z%2B5NbL9KSMtgmIvG1f3ptxXGJpPcwu6bDOe53ssf9OMRyIfRUYbos7%2B%2F2OxSzvy7fAYiaQAMZ3gBumrKmO9BAZO9pNYHY4BIkFh7MINVTAzRNZfdaUdapEWPuoLE98V7aK3wQj1hfuAfFtqHEBO8LqdIfuy13eJ0I3b2N89gkiyfN3DK8PaKOKSSyfrzZOZD6ZvzR93tYd6tYd98V1JVMvcBkercwhfSV0v4sWyta%2Fs5QMEEIGXfQI%2BghnGIQqNtvieEO%2Bc737q%2FjeLpdeZUOtQ2zb6KjBrKVJNXbiy8itislmtPpUky1usrr3ukycsIu265NfY8fLsSROJLVKgpf2jZgalUYHzeO9GJgPl8r0Vyrn6gscKVmcpdsu20MK%2FF8cAGOqUBmzrmyD8ruNBv0GUTl2VurjCxT%2BrGQbDEi0FUr8AkvykvyZCevxgLFMFihf8B%2FdZhr4PWc%2FySh3RSNoxKzNvSsh5snCj5NrJJhdowTP7VfId%2FjbJhXOYxzFUgbnSYLoeLoZ7Uu8V%2FrsTvajDxTZJwz3QQROFRD3MVx1bw5NvqupjJJl1g6rgak15RpdDZ1q1R61esa%2B2IQtz4I35vEOdAs8isGKf5&X-Amz-Signature=38baaea8b61fa43b10eedf7d7a380b454e01ac22181e9e56f5e44b0847b52999&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BCFKJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECPrA4gQ7pN4UQMkghu9P33nsDd3m60ATISTP6xsYV2AiEAmFUm1%2BF1o3qPuVyjR9c04iqYUEiXw9xS%2FPUBS5Cow80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAu%2BL9OOAyCdMXgRjyrcAxyg3SQi5sLo8W5vTKfXoQ4zwuD2%2FYKFuX6nSehfG4cdgLQN4Yf2nfSnD6nwB5vxpHYiI1JGryRAUMpjeFLEZHPU86pfIXOLatkjKjtm2MkaEazsLhCnsAQLafnrQKADZffMScA5np7t6xolvyrhAe1%2FXfBCRW%2BuCpDgJ1zEM%2FJHl0qYC6xl1wQ17bwjbxdDt0OJWGl5f%2B0a8BDdA%2BsxPL7vs%2FAcoufzO82leDoqH24XdMEEXMzvLgNBrb2duVK4Z%2B5NbL9KSMtgmIvG1f3ptxXGJpPcwu6bDOe53ssf9OMRyIfRUYbos7%2B%2F2OxSzvy7fAYiaQAMZ3gBumrKmO9BAZO9pNYHY4BIkFh7MINVTAzRNZfdaUdapEWPuoLE98V7aK3wQj1hfuAfFtqHEBO8LqdIfuy13eJ0I3b2N89gkiyfN3DK8PaKOKSSyfrzZOZD6ZvzR93tYd6tYd98V1JVMvcBkercwhfSV0v4sWyta%2Fs5QMEEIGXfQI%2BghnGIQqNtvieEO%2Bc737q%2FjeLpdeZUOtQ2zb6KjBrKVJNXbiy8itislmtPpUky1usrr3ukycsIu265NfY8fLsSROJLVKgpf2jZgalUYHzeO9GJgPl8r0Vyrn6gscKVmcpdsu20MK%2FF8cAGOqUBmzrmyD8ruNBv0GUTl2VurjCxT%2BrGQbDEi0FUr8AkvykvyZCevxgLFMFihf8B%2FdZhr4PWc%2FySh3RSNoxKzNvSsh5snCj5NrJJhdowTP7VfId%2FjbJhXOYxzFUgbnSYLoeLoZ7Uu8V%2FrsTvajDxTZJwz3QQROFRD3MVx1bw5NvqupjJJl1g6rgak15RpdDZ1q1R61esa%2B2IQtz4I35vEOdAs8isGKf5&X-Amz-Signature=0ebada5feda81124608336c2a009bfeca64b8d183e3f0cfc84cb9c7ae8f46196&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BCFKJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECPrA4gQ7pN4UQMkghu9P33nsDd3m60ATISTP6xsYV2AiEAmFUm1%2BF1o3qPuVyjR9c04iqYUEiXw9xS%2FPUBS5Cow80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAu%2BL9OOAyCdMXgRjyrcAxyg3SQi5sLo8W5vTKfXoQ4zwuD2%2FYKFuX6nSehfG4cdgLQN4Yf2nfSnD6nwB5vxpHYiI1JGryRAUMpjeFLEZHPU86pfIXOLatkjKjtm2MkaEazsLhCnsAQLafnrQKADZffMScA5np7t6xolvyrhAe1%2FXfBCRW%2BuCpDgJ1zEM%2FJHl0qYC6xl1wQ17bwjbxdDt0OJWGl5f%2B0a8BDdA%2BsxPL7vs%2FAcoufzO82leDoqH24XdMEEXMzvLgNBrb2duVK4Z%2B5NbL9KSMtgmIvG1f3ptxXGJpPcwu6bDOe53ssf9OMRyIfRUYbos7%2B%2F2OxSzvy7fAYiaQAMZ3gBumrKmO9BAZO9pNYHY4BIkFh7MINVTAzRNZfdaUdapEWPuoLE98V7aK3wQj1hfuAfFtqHEBO8LqdIfuy13eJ0I3b2N89gkiyfN3DK8PaKOKSSyfrzZOZD6ZvzR93tYd6tYd98V1JVMvcBkercwhfSV0v4sWyta%2Fs5QMEEIGXfQI%2BghnGIQqNtvieEO%2Bc737q%2FjeLpdeZUOtQ2zb6KjBrKVJNXbiy8itislmtPpUky1usrr3ukycsIu265NfY8fLsSROJLVKgpf2jZgalUYHzeO9GJgPl8r0Vyrn6gscKVmcpdsu20MK%2FF8cAGOqUBmzrmyD8ruNBv0GUTl2VurjCxT%2BrGQbDEi0FUr8AkvykvyZCevxgLFMFihf8B%2FdZhr4PWc%2FySh3RSNoxKzNvSsh5snCj5NrJJhdowTP7VfId%2FjbJhXOYxzFUgbnSYLoeLoZ7Uu8V%2FrsTvajDxTZJwz3QQROFRD3MVx1bw5NvqupjJJl1g6rgak15RpdDZ1q1R61esa%2B2IQtz4I35vEOdAs8isGKf5&X-Amz-Signature=320d2f1b85902e9f33d08b3a0ccb84d1474385b3738ff0484bcf57b929424222&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BCFKJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECPrA4gQ7pN4UQMkghu9P33nsDd3m60ATISTP6xsYV2AiEAmFUm1%2BF1o3qPuVyjR9c04iqYUEiXw9xS%2FPUBS5Cow80q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAu%2BL9OOAyCdMXgRjyrcAxyg3SQi5sLo8W5vTKfXoQ4zwuD2%2FYKFuX6nSehfG4cdgLQN4Yf2nfSnD6nwB5vxpHYiI1JGryRAUMpjeFLEZHPU86pfIXOLatkjKjtm2MkaEazsLhCnsAQLafnrQKADZffMScA5np7t6xolvyrhAe1%2FXfBCRW%2BuCpDgJ1zEM%2FJHl0qYC6xl1wQ17bwjbxdDt0OJWGl5f%2B0a8BDdA%2BsxPL7vs%2FAcoufzO82leDoqH24XdMEEXMzvLgNBrb2duVK4Z%2B5NbL9KSMtgmIvG1f3ptxXGJpPcwu6bDOe53ssf9OMRyIfRUYbos7%2B%2F2OxSzvy7fAYiaQAMZ3gBumrKmO9BAZO9pNYHY4BIkFh7MINVTAzRNZfdaUdapEWPuoLE98V7aK3wQj1hfuAfFtqHEBO8LqdIfuy13eJ0I3b2N89gkiyfN3DK8PaKOKSSyfrzZOZD6ZvzR93tYd6tYd98V1JVMvcBkercwhfSV0v4sWyta%2Fs5QMEEIGXfQI%2BghnGIQqNtvieEO%2Bc737q%2FjeLpdeZUOtQ2zb6KjBrKVJNXbiy8itislmtPpUky1usrr3ukycsIu265NfY8fLsSROJLVKgpf2jZgalUYHzeO9GJgPl8r0Vyrn6gscKVmcpdsu20MK%2FF8cAGOqUBmzrmyD8ruNBv0GUTl2VurjCxT%2BrGQbDEi0FUr8AkvykvyZCevxgLFMFihf8B%2FdZhr4PWc%2FySh3RSNoxKzNvSsh5snCj5NrJJhdowTP7VfId%2FjbJhXOYxzFUgbnSYLoeLoZ7Uu8V%2FrsTvajDxTZJwz3QQROFRD3MVx1bw5NvqupjJJl1g6rgak15RpdDZ1q1R61esa%2B2IQtz4I35vEOdAs8isGKf5&X-Amz-Signature=2eefa1ec29b2c35e97434760651c0e8cc3ae2dd96d413b09933b562d36e15420&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
