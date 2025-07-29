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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OWKL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDJcWHGPtBTURcYqbLGWfaKpKOSmBWQCA4CwsbGPdo0YQIhAPDN1AcJVHRAiKO%2FFvtGvOUvqcppiWh7geCayJ%2BkscfxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKU2l9LDZerTJlMqIq3AMn%2FSH2VyGsRn%2BAtBqXN67ewhy5eJvSh8xv2GnR27UAcJgeSRyJpNo1Gou5O2Rh0uVFL0E998eUf2XEg2e7x8dqonV3hnoe2pA56NClfhfBOtDK6U1Qtv0vFyGw3iEGj9JSjga4eOPGlgCSV7XtiDVNRNKkhc7tFkRxVb1CtiITehyNyGjRQ7uDWY1Rk08CBBN5wJ3jBr%2B0x2RgXwAXPG1eucPsa1vFy7MfY%2B6%2BtWvV3gEOIpwlYM8k2HUaQK3x4D1XqLGzhlmG7PX0QTTW4VfCjLmUlbb9L3kj3AC68hyZKVD5YMFCsHA68NVbzhFgV4MKaiZ8PAKlltBS3zgplkUvQbaNbniFr1nk5LYTUj7tgBk7xrlsLIhMeaA1cvp5XFPGcpa0lw9VHjKanLeFKhzyfsGHvbF9xoTKapNBrDSQv4IthYvii44bitkpO%2B7PcbPPYZaHlvWs0TkCTmG8xb6vR3EpFpD0fkOTNP8Us5xdd3DWelZ0sHX2DOuAjiCbnX%2FQ9JdeLvWxgoy6SjUl6d7dCPWaT17%2Fix2gznHrNJjwT%2BeGCTR0OOA6L1ZN29KFrqw5u8xRMcJyARa%2B55NtrxzAkVoqEhyZocAKpJqHyGJarXOs0t38eAwDrDMp8jDQn6DEBjqkAVD1FuMxbJa1DhTM6tF5QVIUWL1MDvyU1esko6ak8Ei6oyKuUM8K2i3g3b1c%2Fx9PDLXof7uWB%2BII9zJjwpYB2t8thUupsUY%2FIAgtWOjkuUD21zp18tfpF87mm2TsIvswwvevbD74VHuXk%2FE1fp%2BG%2FF3sZMAB%2F3XdxHOtW1VEceYAGmuxCW5CDL%2FzQ67hslLsBFNGDaqKHRgoII7cuNVJlxbA5lSJ&X-Amz-Signature=ff49d3c3e6928e5b0bae1027ae03325dd1a89a8f20e88e1068428a719d202716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OWKL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDJcWHGPtBTURcYqbLGWfaKpKOSmBWQCA4CwsbGPdo0YQIhAPDN1AcJVHRAiKO%2FFvtGvOUvqcppiWh7geCayJ%2BkscfxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKU2l9LDZerTJlMqIq3AMn%2FSH2VyGsRn%2BAtBqXN67ewhy5eJvSh8xv2GnR27UAcJgeSRyJpNo1Gou5O2Rh0uVFL0E998eUf2XEg2e7x8dqonV3hnoe2pA56NClfhfBOtDK6U1Qtv0vFyGw3iEGj9JSjga4eOPGlgCSV7XtiDVNRNKkhc7tFkRxVb1CtiITehyNyGjRQ7uDWY1Rk08CBBN5wJ3jBr%2B0x2RgXwAXPG1eucPsa1vFy7MfY%2B6%2BtWvV3gEOIpwlYM8k2HUaQK3x4D1XqLGzhlmG7PX0QTTW4VfCjLmUlbb9L3kj3AC68hyZKVD5YMFCsHA68NVbzhFgV4MKaiZ8PAKlltBS3zgplkUvQbaNbniFr1nk5LYTUj7tgBk7xrlsLIhMeaA1cvp5XFPGcpa0lw9VHjKanLeFKhzyfsGHvbF9xoTKapNBrDSQv4IthYvii44bitkpO%2B7PcbPPYZaHlvWs0TkCTmG8xb6vR3EpFpD0fkOTNP8Us5xdd3DWelZ0sHX2DOuAjiCbnX%2FQ9JdeLvWxgoy6SjUl6d7dCPWaT17%2Fix2gznHrNJjwT%2BeGCTR0OOA6L1ZN29KFrqw5u8xRMcJyARa%2B55NtrxzAkVoqEhyZocAKpJqHyGJarXOs0t38eAwDrDMp8jDQn6DEBjqkAVD1FuMxbJa1DhTM6tF5QVIUWL1MDvyU1esko6ak8Ei6oyKuUM8K2i3g3b1c%2Fx9PDLXof7uWB%2BII9zJjwpYB2t8thUupsUY%2FIAgtWOjkuUD21zp18tfpF87mm2TsIvswwvevbD74VHuXk%2FE1fp%2BG%2FF3sZMAB%2F3XdxHOtW1VEceYAGmuxCW5CDL%2FzQ67hslLsBFNGDaqKHRgoII7cuNVJlxbA5lSJ&X-Amz-Signature=9df456f0df9a72f43fc81f1c1eabfccb0b328073cb5e16f48c6dcb3234997f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OWKL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDJcWHGPtBTURcYqbLGWfaKpKOSmBWQCA4CwsbGPdo0YQIhAPDN1AcJVHRAiKO%2FFvtGvOUvqcppiWh7geCayJ%2BkscfxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKU2l9LDZerTJlMqIq3AMn%2FSH2VyGsRn%2BAtBqXN67ewhy5eJvSh8xv2GnR27UAcJgeSRyJpNo1Gou5O2Rh0uVFL0E998eUf2XEg2e7x8dqonV3hnoe2pA56NClfhfBOtDK6U1Qtv0vFyGw3iEGj9JSjga4eOPGlgCSV7XtiDVNRNKkhc7tFkRxVb1CtiITehyNyGjRQ7uDWY1Rk08CBBN5wJ3jBr%2B0x2RgXwAXPG1eucPsa1vFy7MfY%2B6%2BtWvV3gEOIpwlYM8k2HUaQK3x4D1XqLGzhlmG7PX0QTTW4VfCjLmUlbb9L3kj3AC68hyZKVD5YMFCsHA68NVbzhFgV4MKaiZ8PAKlltBS3zgplkUvQbaNbniFr1nk5LYTUj7tgBk7xrlsLIhMeaA1cvp5XFPGcpa0lw9VHjKanLeFKhzyfsGHvbF9xoTKapNBrDSQv4IthYvii44bitkpO%2B7PcbPPYZaHlvWs0TkCTmG8xb6vR3EpFpD0fkOTNP8Us5xdd3DWelZ0sHX2DOuAjiCbnX%2FQ9JdeLvWxgoy6SjUl6d7dCPWaT17%2Fix2gznHrNJjwT%2BeGCTR0OOA6L1ZN29KFrqw5u8xRMcJyARa%2B55NtrxzAkVoqEhyZocAKpJqHyGJarXOs0t38eAwDrDMp8jDQn6DEBjqkAVD1FuMxbJa1DhTM6tF5QVIUWL1MDvyU1esko6ak8Ei6oyKuUM8K2i3g3b1c%2Fx9PDLXof7uWB%2BII9zJjwpYB2t8thUupsUY%2FIAgtWOjkuUD21zp18tfpF87mm2TsIvswwvevbD74VHuXk%2FE1fp%2BG%2FF3sZMAB%2F3XdxHOtW1VEceYAGmuxCW5CDL%2FzQ67hslLsBFNGDaqKHRgoII7cuNVJlxbA5lSJ&X-Amz-Signature=2695927f44b021eea49484a4beef575a8c1b8c7d70194fc5973ea05e9735f3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OWKL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDJcWHGPtBTURcYqbLGWfaKpKOSmBWQCA4CwsbGPdo0YQIhAPDN1AcJVHRAiKO%2FFvtGvOUvqcppiWh7geCayJ%2BkscfxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKU2l9LDZerTJlMqIq3AMn%2FSH2VyGsRn%2BAtBqXN67ewhy5eJvSh8xv2GnR27UAcJgeSRyJpNo1Gou5O2Rh0uVFL0E998eUf2XEg2e7x8dqonV3hnoe2pA56NClfhfBOtDK6U1Qtv0vFyGw3iEGj9JSjga4eOPGlgCSV7XtiDVNRNKkhc7tFkRxVb1CtiITehyNyGjRQ7uDWY1Rk08CBBN5wJ3jBr%2B0x2RgXwAXPG1eucPsa1vFy7MfY%2B6%2BtWvV3gEOIpwlYM8k2HUaQK3x4D1XqLGzhlmG7PX0QTTW4VfCjLmUlbb9L3kj3AC68hyZKVD5YMFCsHA68NVbzhFgV4MKaiZ8PAKlltBS3zgplkUvQbaNbniFr1nk5LYTUj7tgBk7xrlsLIhMeaA1cvp5XFPGcpa0lw9VHjKanLeFKhzyfsGHvbF9xoTKapNBrDSQv4IthYvii44bitkpO%2B7PcbPPYZaHlvWs0TkCTmG8xb6vR3EpFpD0fkOTNP8Us5xdd3DWelZ0sHX2DOuAjiCbnX%2FQ9JdeLvWxgoy6SjUl6d7dCPWaT17%2Fix2gznHrNJjwT%2BeGCTR0OOA6L1ZN29KFrqw5u8xRMcJyARa%2B55NtrxzAkVoqEhyZocAKpJqHyGJarXOs0t38eAwDrDMp8jDQn6DEBjqkAVD1FuMxbJa1DhTM6tF5QVIUWL1MDvyU1esko6ak8Ei6oyKuUM8K2i3g3b1c%2Fx9PDLXof7uWB%2BII9zJjwpYB2t8thUupsUY%2FIAgtWOjkuUD21zp18tfpF87mm2TsIvswwvevbD74VHuXk%2FE1fp%2BG%2FF3sZMAB%2F3XdxHOtW1VEceYAGmuxCW5CDL%2FzQ67hslLsBFNGDaqKHRgoII7cuNVJlxbA5lSJ&X-Amz-Signature=93c95c640467a4cbcf1b8f627a9799a75dcd7f868351163b6bec3b00b4d5f461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OWKL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDJcWHGPtBTURcYqbLGWfaKpKOSmBWQCA4CwsbGPdo0YQIhAPDN1AcJVHRAiKO%2FFvtGvOUvqcppiWh7geCayJ%2BkscfxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKU2l9LDZerTJlMqIq3AMn%2FSH2VyGsRn%2BAtBqXN67ewhy5eJvSh8xv2GnR27UAcJgeSRyJpNo1Gou5O2Rh0uVFL0E998eUf2XEg2e7x8dqonV3hnoe2pA56NClfhfBOtDK6U1Qtv0vFyGw3iEGj9JSjga4eOPGlgCSV7XtiDVNRNKkhc7tFkRxVb1CtiITehyNyGjRQ7uDWY1Rk08CBBN5wJ3jBr%2B0x2RgXwAXPG1eucPsa1vFy7MfY%2B6%2BtWvV3gEOIpwlYM8k2HUaQK3x4D1XqLGzhlmG7PX0QTTW4VfCjLmUlbb9L3kj3AC68hyZKVD5YMFCsHA68NVbzhFgV4MKaiZ8PAKlltBS3zgplkUvQbaNbniFr1nk5LYTUj7tgBk7xrlsLIhMeaA1cvp5XFPGcpa0lw9VHjKanLeFKhzyfsGHvbF9xoTKapNBrDSQv4IthYvii44bitkpO%2B7PcbPPYZaHlvWs0TkCTmG8xb6vR3EpFpD0fkOTNP8Us5xdd3DWelZ0sHX2DOuAjiCbnX%2FQ9JdeLvWxgoy6SjUl6d7dCPWaT17%2Fix2gznHrNJjwT%2BeGCTR0OOA6L1ZN29KFrqw5u8xRMcJyARa%2B55NtrxzAkVoqEhyZocAKpJqHyGJarXOs0t38eAwDrDMp8jDQn6DEBjqkAVD1FuMxbJa1DhTM6tF5QVIUWL1MDvyU1esko6ak8Ei6oyKuUM8K2i3g3b1c%2Fx9PDLXof7uWB%2BII9zJjwpYB2t8thUupsUY%2FIAgtWOjkuUD21zp18tfpF87mm2TsIvswwvevbD74VHuXk%2FE1fp%2BG%2FF3sZMAB%2F3XdxHOtW1VEceYAGmuxCW5CDL%2FzQ67hslLsBFNGDaqKHRgoII7cuNVJlxbA5lSJ&X-Amz-Signature=50b488f3ca6fe8a28366a5e068b3c33571764b87b7f39376894ff33c3355db40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OWKL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDJcWHGPtBTURcYqbLGWfaKpKOSmBWQCA4CwsbGPdo0YQIhAPDN1AcJVHRAiKO%2FFvtGvOUvqcppiWh7geCayJ%2BkscfxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKU2l9LDZerTJlMqIq3AMn%2FSH2VyGsRn%2BAtBqXN67ewhy5eJvSh8xv2GnR27UAcJgeSRyJpNo1Gou5O2Rh0uVFL0E998eUf2XEg2e7x8dqonV3hnoe2pA56NClfhfBOtDK6U1Qtv0vFyGw3iEGj9JSjga4eOPGlgCSV7XtiDVNRNKkhc7tFkRxVb1CtiITehyNyGjRQ7uDWY1Rk08CBBN5wJ3jBr%2B0x2RgXwAXPG1eucPsa1vFy7MfY%2B6%2BtWvV3gEOIpwlYM8k2HUaQK3x4D1XqLGzhlmG7PX0QTTW4VfCjLmUlbb9L3kj3AC68hyZKVD5YMFCsHA68NVbzhFgV4MKaiZ8PAKlltBS3zgplkUvQbaNbniFr1nk5LYTUj7tgBk7xrlsLIhMeaA1cvp5XFPGcpa0lw9VHjKanLeFKhzyfsGHvbF9xoTKapNBrDSQv4IthYvii44bitkpO%2B7PcbPPYZaHlvWs0TkCTmG8xb6vR3EpFpD0fkOTNP8Us5xdd3DWelZ0sHX2DOuAjiCbnX%2FQ9JdeLvWxgoy6SjUl6d7dCPWaT17%2Fix2gznHrNJjwT%2BeGCTR0OOA6L1ZN29KFrqw5u8xRMcJyARa%2B55NtrxzAkVoqEhyZocAKpJqHyGJarXOs0t38eAwDrDMp8jDQn6DEBjqkAVD1FuMxbJa1DhTM6tF5QVIUWL1MDvyU1esko6ak8Ei6oyKuUM8K2i3g3b1c%2Fx9PDLXof7uWB%2BII9zJjwpYB2t8thUupsUY%2FIAgtWOjkuUD21zp18tfpF87mm2TsIvswwvevbD74VHuXk%2FE1fp%2BG%2FF3sZMAB%2F3XdxHOtW1VEceYAGmuxCW5CDL%2FzQ67hslLsBFNGDaqKHRgoII7cuNVJlxbA5lSJ&X-Amz-Signature=3343728812bac3d485ad3b7f825ddb74c5700c73daf2346be694ff40a2590f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OWKL3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDJcWHGPtBTURcYqbLGWfaKpKOSmBWQCA4CwsbGPdo0YQIhAPDN1AcJVHRAiKO%2FFvtGvOUvqcppiWh7geCayJ%2BkscfxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKU2l9LDZerTJlMqIq3AMn%2FSH2VyGsRn%2BAtBqXN67ewhy5eJvSh8xv2GnR27UAcJgeSRyJpNo1Gou5O2Rh0uVFL0E998eUf2XEg2e7x8dqonV3hnoe2pA56NClfhfBOtDK6U1Qtv0vFyGw3iEGj9JSjga4eOPGlgCSV7XtiDVNRNKkhc7tFkRxVb1CtiITehyNyGjRQ7uDWY1Rk08CBBN5wJ3jBr%2B0x2RgXwAXPG1eucPsa1vFy7MfY%2B6%2BtWvV3gEOIpwlYM8k2HUaQK3x4D1XqLGzhlmG7PX0QTTW4VfCjLmUlbb9L3kj3AC68hyZKVD5YMFCsHA68NVbzhFgV4MKaiZ8PAKlltBS3zgplkUvQbaNbniFr1nk5LYTUj7tgBk7xrlsLIhMeaA1cvp5XFPGcpa0lw9VHjKanLeFKhzyfsGHvbF9xoTKapNBrDSQv4IthYvii44bitkpO%2B7PcbPPYZaHlvWs0TkCTmG8xb6vR3EpFpD0fkOTNP8Us5xdd3DWelZ0sHX2DOuAjiCbnX%2FQ9JdeLvWxgoy6SjUl6d7dCPWaT17%2Fix2gznHrNJjwT%2BeGCTR0OOA6L1ZN29KFrqw5u8xRMcJyARa%2B55NtrxzAkVoqEhyZocAKpJqHyGJarXOs0t38eAwDrDMp8jDQn6DEBjqkAVD1FuMxbJa1DhTM6tF5QVIUWL1MDvyU1esko6ak8Ei6oyKuUM8K2i3g3b1c%2Fx9PDLXof7uWB%2BII9zJjwpYB2t8thUupsUY%2FIAgtWOjkuUD21zp18tfpF87mm2TsIvswwvevbD74VHuXk%2FE1fp%2BG%2FF3sZMAB%2F3XdxHOtW1VEceYAGmuxCW5CDL%2FzQ67hslLsBFNGDaqKHRgoII7cuNVJlxbA5lSJ&X-Amz-Signature=4a45216b8c74e66f8f92df2d7e680006938e6d26eab90883106fb285ba185ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
