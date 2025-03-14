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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTALR7A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5yTpqqoPfqTF4APYQjq57idcT2XmNi%2FI4veJrrRiVAiEAxyESiVfa8YieciPvGKqo6FcLNUrjh7gfxnXPJCifa9gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI7RqCd2v7ddlwsTircAwBfiYZgkjzehqN6eZ2y3qzhEpvn6TuZOS%2BcyeSB18WlQJmtfXVMyn7TWA48KwkCVlAuUkwFR%2FDyF%2FZKLobAq%2FjxpJ2ACCMXT0w4pr5eDxVV4SHvBVsAWFpRX2hAtcesVz4YSU%2FD2pDdFH4tcPSaS6RkYHm1pkOzGsErhvfzJw8Ls8qRMW6s0djTvPczDgHVbn3AFroG09M9YjuOEutXeuuPhaKrvhK2TnDZSBomnhLcpwVCRiOXHpF9d1ETCU8TfUbqL7gB8q8vGbnpXkaUk3Lipt2TMQm1s%2BIfs0n1yc4nqQ4PO9NyS%2Fhs3lr5VGlZIQHsdrmkQG8%2BRSHDd%2FI68xvw97sYtJjIPjl1QlpFKrhsnHRHWxhco4%2B66kulIxzVFAIKHom9A2t3MDErQuwmc3IUzvzHNRfJ%2FOGJ7UNKR6vJZWlMXRcHPWxPAMLcgODy2ha5h7p22pnChBApWbyJMnLkeru7SFf9465GmWnQAhLj8TcKTQbFnK0jbA7SmKmwAn1u10sKbvgzh8IDYeG8lkQ9rHvnAmL2h6OQqbOD5OYSdkhNJ9yJZiChXAQp0WOWwY4r6u4ZW%2BuuLYNfBxQL%2F%2FUclBLMU3i3sD%2F1anE0xB6otjzyz7%2FV%2FoyZtlqzMKL50L4GOqUBWRQauEjoMU0Td98y0YuVsl0jNk5x4wvL2JBY9Lg6TRhIUmbabpBaff4CJ8xxVvhxgetHVst4yudrHs7uZtSjOZrr5OlsV6BOy3R3eYyg1bNfe0OzI%2F386qKTUjYb0H8FDnQNfZwnel%2BQc2gZMWGEWWNJI9YqChrD5HRuvK%2B1lfywdOT33hofO586hNw37RgNCUKCb9pR5xKVzrk4VdPYZuaRWEdl&X-Amz-Signature=74c0e84b9948dccb25c2b3c9d801b609666e4524990bfde8b6712eec60e3d0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTALR7A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5yTpqqoPfqTF4APYQjq57idcT2XmNi%2FI4veJrrRiVAiEAxyESiVfa8YieciPvGKqo6FcLNUrjh7gfxnXPJCifa9gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI7RqCd2v7ddlwsTircAwBfiYZgkjzehqN6eZ2y3qzhEpvn6TuZOS%2BcyeSB18WlQJmtfXVMyn7TWA48KwkCVlAuUkwFR%2FDyF%2FZKLobAq%2FjxpJ2ACCMXT0w4pr5eDxVV4SHvBVsAWFpRX2hAtcesVz4YSU%2FD2pDdFH4tcPSaS6RkYHm1pkOzGsErhvfzJw8Ls8qRMW6s0djTvPczDgHVbn3AFroG09M9YjuOEutXeuuPhaKrvhK2TnDZSBomnhLcpwVCRiOXHpF9d1ETCU8TfUbqL7gB8q8vGbnpXkaUk3Lipt2TMQm1s%2BIfs0n1yc4nqQ4PO9NyS%2Fhs3lr5VGlZIQHsdrmkQG8%2BRSHDd%2FI68xvw97sYtJjIPjl1QlpFKrhsnHRHWxhco4%2B66kulIxzVFAIKHom9A2t3MDErQuwmc3IUzvzHNRfJ%2FOGJ7UNKR6vJZWlMXRcHPWxPAMLcgODy2ha5h7p22pnChBApWbyJMnLkeru7SFf9465GmWnQAhLj8TcKTQbFnK0jbA7SmKmwAn1u10sKbvgzh8IDYeG8lkQ9rHvnAmL2h6OQqbOD5OYSdkhNJ9yJZiChXAQp0WOWwY4r6u4ZW%2BuuLYNfBxQL%2F%2FUclBLMU3i3sD%2F1anE0xB6otjzyz7%2FV%2FoyZtlqzMKL50L4GOqUBWRQauEjoMU0Td98y0YuVsl0jNk5x4wvL2JBY9Lg6TRhIUmbabpBaff4CJ8xxVvhxgetHVst4yudrHs7uZtSjOZrr5OlsV6BOy3R3eYyg1bNfe0OzI%2F386qKTUjYb0H8FDnQNfZwnel%2BQc2gZMWGEWWNJI9YqChrD5HRuvK%2B1lfywdOT33hofO586hNw37RgNCUKCb9pR5xKVzrk4VdPYZuaRWEdl&X-Amz-Signature=f5097cce15f8b67b55d99163c38fae98bc407534f84d619bc60432565be97d26&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTALR7A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5yTpqqoPfqTF4APYQjq57idcT2XmNi%2FI4veJrrRiVAiEAxyESiVfa8YieciPvGKqo6FcLNUrjh7gfxnXPJCifa9gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI7RqCd2v7ddlwsTircAwBfiYZgkjzehqN6eZ2y3qzhEpvn6TuZOS%2BcyeSB18WlQJmtfXVMyn7TWA48KwkCVlAuUkwFR%2FDyF%2FZKLobAq%2FjxpJ2ACCMXT0w4pr5eDxVV4SHvBVsAWFpRX2hAtcesVz4YSU%2FD2pDdFH4tcPSaS6RkYHm1pkOzGsErhvfzJw8Ls8qRMW6s0djTvPczDgHVbn3AFroG09M9YjuOEutXeuuPhaKrvhK2TnDZSBomnhLcpwVCRiOXHpF9d1ETCU8TfUbqL7gB8q8vGbnpXkaUk3Lipt2TMQm1s%2BIfs0n1yc4nqQ4PO9NyS%2Fhs3lr5VGlZIQHsdrmkQG8%2BRSHDd%2FI68xvw97sYtJjIPjl1QlpFKrhsnHRHWxhco4%2B66kulIxzVFAIKHom9A2t3MDErQuwmc3IUzvzHNRfJ%2FOGJ7UNKR6vJZWlMXRcHPWxPAMLcgODy2ha5h7p22pnChBApWbyJMnLkeru7SFf9465GmWnQAhLj8TcKTQbFnK0jbA7SmKmwAn1u10sKbvgzh8IDYeG8lkQ9rHvnAmL2h6OQqbOD5OYSdkhNJ9yJZiChXAQp0WOWwY4r6u4ZW%2BuuLYNfBxQL%2F%2FUclBLMU3i3sD%2F1anE0xB6otjzyz7%2FV%2FoyZtlqzMKL50L4GOqUBWRQauEjoMU0Td98y0YuVsl0jNk5x4wvL2JBY9Lg6TRhIUmbabpBaff4CJ8xxVvhxgetHVst4yudrHs7uZtSjOZrr5OlsV6BOy3R3eYyg1bNfe0OzI%2F386qKTUjYb0H8FDnQNfZwnel%2BQc2gZMWGEWWNJI9YqChrD5HRuvK%2B1lfywdOT33hofO586hNw37RgNCUKCb9pR5xKVzrk4VdPYZuaRWEdl&X-Amz-Signature=04f9c78d3992250998caf81fb6f5f3ec5b7153b75c5eb7dc697b8f944363fa95&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTALR7A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5yTpqqoPfqTF4APYQjq57idcT2XmNi%2FI4veJrrRiVAiEAxyESiVfa8YieciPvGKqo6FcLNUrjh7gfxnXPJCifa9gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI7RqCd2v7ddlwsTircAwBfiYZgkjzehqN6eZ2y3qzhEpvn6TuZOS%2BcyeSB18WlQJmtfXVMyn7TWA48KwkCVlAuUkwFR%2FDyF%2FZKLobAq%2FjxpJ2ACCMXT0w4pr5eDxVV4SHvBVsAWFpRX2hAtcesVz4YSU%2FD2pDdFH4tcPSaS6RkYHm1pkOzGsErhvfzJw8Ls8qRMW6s0djTvPczDgHVbn3AFroG09M9YjuOEutXeuuPhaKrvhK2TnDZSBomnhLcpwVCRiOXHpF9d1ETCU8TfUbqL7gB8q8vGbnpXkaUk3Lipt2TMQm1s%2BIfs0n1yc4nqQ4PO9NyS%2Fhs3lr5VGlZIQHsdrmkQG8%2BRSHDd%2FI68xvw97sYtJjIPjl1QlpFKrhsnHRHWxhco4%2B66kulIxzVFAIKHom9A2t3MDErQuwmc3IUzvzHNRfJ%2FOGJ7UNKR6vJZWlMXRcHPWxPAMLcgODy2ha5h7p22pnChBApWbyJMnLkeru7SFf9465GmWnQAhLj8TcKTQbFnK0jbA7SmKmwAn1u10sKbvgzh8IDYeG8lkQ9rHvnAmL2h6OQqbOD5OYSdkhNJ9yJZiChXAQp0WOWwY4r6u4ZW%2BuuLYNfBxQL%2F%2FUclBLMU3i3sD%2F1anE0xB6otjzyz7%2FV%2FoyZtlqzMKL50L4GOqUBWRQauEjoMU0Td98y0YuVsl0jNk5x4wvL2JBY9Lg6TRhIUmbabpBaff4CJ8xxVvhxgetHVst4yudrHs7uZtSjOZrr5OlsV6BOy3R3eYyg1bNfe0OzI%2F386qKTUjYb0H8FDnQNfZwnel%2BQc2gZMWGEWWNJI9YqChrD5HRuvK%2B1lfywdOT33hofO586hNw37RgNCUKCb9pR5xKVzrk4VdPYZuaRWEdl&X-Amz-Signature=534c1963a154f30b5f17c981c757bbac7ec8d726bf6d261e27670c3798d302cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTALR7A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5yTpqqoPfqTF4APYQjq57idcT2XmNi%2FI4veJrrRiVAiEAxyESiVfa8YieciPvGKqo6FcLNUrjh7gfxnXPJCifa9gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI7RqCd2v7ddlwsTircAwBfiYZgkjzehqN6eZ2y3qzhEpvn6TuZOS%2BcyeSB18WlQJmtfXVMyn7TWA48KwkCVlAuUkwFR%2FDyF%2FZKLobAq%2FjxpJ2ACCMXT0w4pr5eDxVV4SHvBVsAWFpRX2hAtcesVz4YSU%2FD2pDdFH4tcPSaS6RkYHm1pkOzGsErhvfzJw8Ls8qRMW6s0djTvPczDgHVbn3AFroG09M9YjuOEutXeuuPhaKrvhK2TnDZSBomnhLcpwVCRiOXHpF9d1ETCU8TfUbqL7gB8q8vGbnpXkaUk3Lipt2TMQm1s%2BIfs0n1yc4nqQ4PO9NyS%2Fhs3lr5VGlZIQHsdrmkQG8%2BRSHDd%2FI68xvw97sYtJjIPjl1QlpFKrhsnHRHWxhco4%2B66kulIxzVFAIKHom9A2t3MDErQuwmc3IUzvzHNRfJ%2FOGJ7UNKR6vJZWlMXRcHPWxPAMLcgODy2ha5h7p22pnChBApWbyJMnLkeru7SFf9465GmWnQAhLj8TcKTQbFnK0jbA7SmKmwAn1u10sKbvgzh8IDYeG8lkQ9rHvnAmL2h6OQqbOD5OYSdkhNJ9yJZiChXAQp0WOWwY4r6u4ZW%2BuuLYNfBxQL%2F%2FUclBLMU3i3sD%2F1anE0xB6otjzyz7%2FV%2FoyZtlqzMKL50L4GOqUBWRQauEjoMU0Td98y0YuVsl0jNk5x4wvL2JBY9Lg6TRhIUmbabpBaff4CJ8xxVvhxgetHVst4yudrHs7uZtSjOZrr5OlsV6BOy3R3eYyg1bNfe0OzI%2F386qKTUjYb0H8FDnQNfZwnel%2BQc2gZMWGEWWNJI9YqChrD5HRuvK%2B1lfywdOT33hofO586hNw37RgNCUKCb9pR5xKVzrk4VdPYZuaRWEdl&X-Amz-Signature=d8d9dc14a47373e98067dc84459b4e089e9975bcdd56723b6ece9c3d7ea47fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTALR7A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5yTpqqoPfqTF4APYQjq57idcT2XmNi%2FI4veJrrRiVAiEAxyESiVfa8YieciPvGKqo6FcLNUrjh7gfxnXPJCifa9gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI7RqCd2v7ddlwsTircAwBfiYZgkjzehqN6eZ2y3qzhEpvn6TuZOS%2BcyeSB18WlQJmtfXVMyn7TWA48KwkCVlAuUkwFR%2FDyF%2FZKLobAq%2FjxpJ2ACCMXT0w4pr5eDxVV4SHvBVsAWFpRX2hAtcesVz4YSU%2FD2pDdFH4tcPSaS6RkYHm1pkOzGsErhvfzJw8Ls8qRMW6s0djTvPczDgHVbn3AFroG09M9YjuOEutXeuuPhaKrvhK2TnDZSBomnhLcpwVCRiOXHpF9d1ETCU8TfUbqL7gB8q8vGbnpXkaUk3Lipt2TMQm1s%2BIfs0n1yc4nqQ4PO9NyS%2Fhs3lr5VGlZIQHsdrmkQG8%2BRSHDd%2FI68xvw97sYtJjIPjl1QlpFKrhsnHRHWxhco4%2B66kulIxzVFAIKHom9A2t3MDErQuwmc3IUzvzHNRfJ%2FOGJ7UNKR6vJZWlMXRcHPWxPAMLcgODy2ha5h7p22pnChBApWbyJMnLkeru7SFf9465GmWnQAhLj8TcKTQbFnK0jbA7SmKmwAn1u10sKbvgzh8IDYeG8lkQ9rHvnAmL2h6OQqbOD5OYSdkhNJ9yJZiChXAQp0WOWwY4r6u4ZW%2BuuLYNfBxQL%2F%2FUclBLMU3i3sD%2F1anE0xB6otjzyz7%2FV%2FoyZtlqzMKL50L4GOqUBWRQauEjoMU0Td98y0YuVsl0jNk5x4wvL2JBY9Lg6TRhIUmbabpBaff4CJ8xxVvhxgetHVst4yudrHs7uZtSjOZrr5OlsV6BOy3R3eYyg1bNfe0OzI%2F386qKTUjYb0H8FDnQNfZwnel%2BQc2gZMWGEWWNJI9YqChrD5HRuvK%2B1lfywdOT33hofO586hNw37RgNCUKCb9pR5xKVzrk4VdPYZuaRWEdl&X-Amz-Signature=a0c691f45c8474848988f82c74c4db7b77d0d6558171e1765b88540e3c91db8d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTALR7A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5yTpqqoPfqTF4APYQjq57idcT2XmNi%2FI4veJrrRiVAiEAxyESiVfa8YieciPvGKqo6FcLNUrjh7gfxnXPJCifa9gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI7RqCd2v7ddlwsTircAwBfiYZgkjzehqN6eZ2y3qzhEpvn6TuZOS%2BcyeSB18WlQJmtfXVMyn7TWA48KwkCVlAuUkwFR%2FDyF%2FZKLobAq%2FjxpJ2ACCMXT0w4pr5eDxVV4SHvBVsAWFpRX2hAtcesVz4YSU%2FD2pDdFH4tcPSaS6RkYHm1pkOzGsErhvfzJw8Ls8qRMW6s0djTvPczDgHVbn3AFroG09M9YjuOEutXeuuPhaKrvhK2TnDZSBomnhLcpwVCRiOXHpF9d1ETCU8TfUbqL7gB8q8vGbnpXkaUk3Lipt2TMQm1s%2BIfs0n1yc4nqQ4PO9NyS%2Fhs3lr5VGlZIQHsdrmkQG8%2BRSHDd%2FI68xvw97sYtJjIPjl1QlpFKrhsnHRHWxhco4%2B66kulIxzVFAIKHom9A2t3MDErQuwmc3IUzvzHNRfJ%2FOGJ7UNKR6vJZWlMXRcHPWxPAMLcgODy2ha5h7p22pnChBApWbyJMnLkeru7SFf9465GmWnQAhLj8TcKTQbFnK0jbA7SmKmwAn1u10sKbvgzh8IDYeG8lkQ9rHvnAmL2h6OQqbOD5OYSdkhNJ9yJZiChXAQp0WOWwY4r6u4ZW%2BuuLYNfBxQL%2F%2FUclBLMU3i3sD%2F1anE0xB6otjzyz7%2FV%2FoyZtlqzMKL50L4GOqUBWRQauEjoMU0Td98y0YuVsl0jNk5x4wvL2JBY9Lg6TRhIUmbabpBaff4CJ8xxVvhxgetHVst4yudrHs7uZtSjOZrr5OlsV6BOy3R3eYyg1bNfe0OzI%2F386qKTUjYb0H8FDnQNfZwnel%2BQc2gZMWGEWWNJI9YqChrD5HRuvK%2B1lfywdOT33hofO586hNw37RgNCUKCb9pR5xKVzrk4VdPYZuaRWEdl&X-Amz-Signature=d565ed1ac687ea3e20b5a9cf203d94abd1f1bd38d77067afe2dcfe6bab719005&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
