---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T09:55:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide: [https://docs.nav2.org/setup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

---

This part of the guide goes over [Nav2](https://docs.nav2.org/index.html) which is a package in ROS that provides autonomous navigation.

In this guide we will build a simple differential drive (tank drive) robot

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=ef3a39dff2b8518a16c8b2e50eb7739d34b49836e31965645cc8e2fbf4cd7a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=eedf33fd170ea6a62a8f353a2fbae89ed6c1e937efef3a9f8a6b1feb5022d0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=4f060755ca65970b4809b67f0f3b466a6b8d27d63c62d162ce03d5e7f98196a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## Creating workspace + package

[What are ROS workspaces/packages?](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-packages/)

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node mbot_pkg
```

### Building 

```bash
cd ../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## install pkg

{{< tabs tabTotal="2">}}
{{% tab tabName="Dev container" %}}

If you are doing the Dev container setup put these at the bottom of your `Dockerfile` in `.devcontainer/Dockerfile`

```bash

################################
## ADD ANY CUSTOM SETUP BELOW ##
################################

RUN sudo apt update

# Rosdep update
RUN rosdep update --rosdistro ${ROS_DISTRO}

# Install dependencies
RUN sudo apt-get install -y \
    python3-colcon-common-extensions \
    ros-${ROS_DISTRO}-xacro \
    ros-${ROS_DISTRO}-ament-cmake \
    ros-${ROS_DISTRO}-robot-localization \
    ros-${ROS_DISTRO}-joint-state-publisher-gui \
    ros-${ROS_DISTRO}-slam-toolbox \
    ros-${ROS_DISTRO}-navigation2 \
    ros-${ROS_DISTRO}-nav2-bringup \
    ros-${ROS_DISTRO}-tf-transformations \
    ros-${ROS_DISTRO}-librealsense2* \
    ros-${ROS_DISTRO}-realsense2-* \
    ros-${ROS_DISTRO}-rqt-tf-tree \
    ros-${ROS_DISTRO}-foxglove-bridge \
    ros-${ROS_DISTRO}-ros-gz 

RUN sudo apt-get install -y python3-pip \
    && sudo rm -rf /var/lib/apt/lists/*


# enable extra quality of life plugins
RUN echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
RUN echo "source /usr/share/colcon_cd/function/colcon_cd.sh" >> ~/.bashrc
RUN echo "export _colcon_cd_root=/opt/ros/${ROS_DISTRO}/" >> ~/.bashrc
RUN echo "export RCUTILS_COLORIZED_OUTPUT=1" >> ~/.bashrc


# Source the ROS setup file
RUN echo "source /<your root folder>/mbot_ws/install/setup.bash" >> ~/.bashrc
```

**Example:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=cba8735eff5f1fd50d2d6bea8937e69fe6b310929d94b6792c29e9c1bf469dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=5e5d5984f41b2a61156bfeea0b5c3e12482b9e9e2efe9066cc0ee4cc06dfdd30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=15ca163a09fec0b08dfbc5fe39b7c1e9986ed3e4f1cd913fd5cb454086d062df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> NOTE: every time you do an `apt install ...` you need to add it to the dev container to make it stay permanently

I also recommend you add these extensions to your dev container in `devcontainer.json`

```json
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "VisualStudioExptTeam.vscodeintellicode",
        "twxs.cmake",
        "zchrissirhcz.cmake-highlight",
        "Ranch-Hand-Robotics.urdf-editor"
      ]
    }
  }
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=4012f111be40e5c6d79e021ec37c4f0c8c5aaad524c31f4f9e40b0e3e08a5ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% /tab %}}
{{% tab tabName="Linux" %}}

Install these packages (if you are not running the dev container setup)

```bash
sudo apt install ros-$ROS2_DISTRO-joint-state-publisher-gui
sudo apt install ros-$ROS2_DISTRO-xacro
```

{{% /tab %}}
{{< /tabs >}}

---

# Building your robot in URDF

make a folder in `mbot_pkg` called `description` and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=209d5273138c02a28f2c55d6c7c1d9b45565b8b1a0b539f73ba5f60bb4fae445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=f0172904ab53bb652978b04b565d4de2f7154760152a24403956ff0fcde982a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=04b5cb2a11011ff2f755f09c1ed84b6de3da311e98a9f41995a28620be43faa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMO35E6A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCOGKi6p78JEVVkgNhplnsubLR9wsYUQxTgThORZEAOygIgLJ2tD%2BX5JZ7csR1TNWFTFsh91cqQGyR65Oath%2BWWnmQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEQp5eU6gMDzOO3%2F8CrcAw0IjRjXavH2kvwSIeHhHF4Y3KDHM0QXg%2Bth45I2mO2VpU%2BbJpHk0EvbSuE5TbA%2BOiAuCCgii8Nklp%2FGGyrI3N9uZa%2F341Tkby0C0eq2xSyPorjMdmRCydndYNf7vc8JYf%2Fg1BUW%2BhOpNj03RUGYdIB8Tsglw5sYvc08Oj%2BurBaKa31sDtS2yThBrGaETbKwNbphDhs3HKr%2BMZNqxO73Az2w3RyVfHxgdMAJS23O2X%2FEP5JZK%2BZvPAgFI8ccP7Vx9MI6gOBvdqc5%2FUHekKhlBDdm1wTikI2gshuyahM4qD1y2Gy%2FEaqOJcNeunbEUXsFwGB6yhzTGDRJu8coYl%2BBkkLTDVK9wh%2BsMjYwhmHrMjyHPzBsZFIv915AaNOvpNnOv1X%2FxwU0UzNf3%2BEKUJzJ9Ezcrx1N%2BIw27O61qqv9WhqxKliVOv8hm5V9I%2BI%2FNtTK5Gi5OyxrXlglm%2Bk6ErdxUtbFPpAh6pmjO2Lue8T8BZQPQUhRChTQmm4z59pokALMDRN3tA9XU4HTZYJbVq0pu4S2M%2BPdIogmVl3itcPcOXZxnT91ve7hHfNYrSjN7hPJPIuK06Y9UdqyYyxmC1vYJovNRXgoUQ3U7%2F91W5NV8tFBCW%2B23EahjZ4kDoDCMOLqzsQGOqUB0OSh%2BR%2Bl7aYt21wyyVOjSBSPG2ln7dylvwb69PZWrP%2Ff8pH65u3tpbZnRGr6yEYGVbQMmfq0iPidH3Semh%2F2zU%2FQYuo7bR6KbQTxSW56DgAobJeegguqahCdb%2BbR0Cr8uuRVat7fhKF48a9mIUSt%2Fh7Wrbg%2FaK7kesKU8vjVV1RUovXEXomT%2B1APXn9vixV1SjVWI3OnGbNPsswajHk5%2FpQVkvTB&X-Amz-Signature=0798056097799575868a00f9d0353e75325070e47be12133c64f4e95ab4ba958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">
  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>


</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EOPDQ4X%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBFHna30mJbRMMF5D2N%2BTEmMF7hxQShHhXKpuHBtTJncAiANpCxLu7EynNGXJlYEARLDKkL9NIJs8oLol%2FGSMzN0%2Byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMoCQf3Evi2gNgIoJ2KtwDJv4nUKyL3yF8kLHWh26MybK3nf3OT7M72n%2BfOC9Bgfe%2BHBotPZdl53Y5OWB4Z7EWr1EBD68TfywAoRk5TeKA8gxT%2B34t%2FLKaC5CHFSEqAfq%2F93iMh%2BhUIknMfe0Mn2O9Jkr%2F5RP8HA1UxT2XtDzHotajXeAn6C26c7gx3aXGtwJKE629ih%2FT%2Ft624eCbRY39EMYHUSb8mEzL0y8ypZ%2FAxqJ%2B8A5JXvu2tHJtf2jiMGJIGtE68MlmNAaRV%2BqxvTK91F3D1pw4zGISyrGLecZzh1R6CgUSlsCEJp6FpFm4E8wBUbYtamGnhB1w4tFPLKObDLlmI9244wMTMor8Qxzq%2BMCLEskE9MQo49WYZwM0C321zWOG%2FUqGpLeDII%2FdbuQG9a4E5rpEb9p63jnAZKm4f90iC8011TAmk95KPnyLnEwd%2BP8BDVBRajmzcOkmA1bgZ4kZIAvxiOaUQGDPsg8g%2FPzOpvAQuCadHg3TLuGRDgU8Wzwsy94swxYEzGufmszFWcVkLkXiwcVqars7MvXnCFVoAS4Lrk43DyHiOdScKHpw4%2Bbx%2Fs9ao44ncf6C4C9HzimTtz2vBUWig5X76Ofy9Gjys5Nm%2FgQCE74ej90GqJrUoNFTYa4QNwrHFEEwi%2BvOxAY6pgFotCZcfNEJCcR7WfwU4iy%2Fv1M3G24YZLjnfu%2B2C0HzZ0TOU6KdU7VU1t21pcbGM1W2pJ3QAZ2ZWdn1QZvjlRsrD0RVzAaOvTrS0plLfFNyTR6ePn4SaWTr9gPI106gjuj7ZPWqc7J9kGWy6w%2BipjQZmUOCgHexeewIGeXHmEp2ilIMKNErwG3G95WtZhzVN%2F%2B87fCLnREuknwJYcErEJUtpuwMdw%2Fd&X-Amz-Signature=4c861f3acabdfe4f9862427a31ea887f9146ba12140849f6b6dd753be47b4324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      `base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.
  </details>

Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYCA2BV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCL2B%2BVbjKLgoCw4siMb0nwfAOEmyGabcpSun84HXhuAwIgRXAZwyWuxGJhzj%2FOoXHzwPBD582t1hk%2B4M8zId9RZsoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJMR95Jsxr5OqXX1xSrcA%2BW2mGSJ9ssIQmLVqRlH6qVQV%2BIAuoDEOIaTdoH9mXUu%2BZUPtUfYSXVo35k8Yko0coi8r5GC0vX4etyoh8%2FwWe%2BDgmpjYsBkT%2BI7IhYBh71mOIY4xhu0Yi18Frno1EzhdAEco4ZneOTBXf3PubIvUa0jZUs1%2FZWjdFyneeDWEEkmcOLeB4l1C0ETCXo2o%2BnsR2bzVa2e%2BQPOSY%2FnWH8RjhShOW9SvdZR8ulSto%2F0DIik9gONTzE4iufDxUeONeQGh2POGRJZ%2BVO2J4PaJtfUtT9%2FcnIPF9s4HmHM9%2BYov4S9JoIrEBzqfPME%2BrZvBSBxy%2FBJnwI4fmkxjSpshDudAOJjUVDfhjRYSBDv03UkAf7dxkWHiIHvcIysvIJwnV8StVdhX2QpcNRcHHhrIp%2FJIqB%2BMKAZMCDrC7U9br3prRmoe8jNXVizHCQGtI1RyUEag6x1DTAEtmeuAvK8eFUepWAgeoeyniWlU%2Fk647zNrUSVwj6CsVDPcDufcTjeM9M6a%2Bgks%2FpbYyDuaLNqkaYy707VFUgkBQSUZCeGZp69gR2YGkGgWn2KV30HxQnat8dau5DEpX3Sw7EMYYKBxiTh8iBej1Z4sM4Czkq5n8OzD8MJT7YSdr2wUkLbJdjbMNPqzsQGOqUBx0LvoIYkrBGZeq9qt2mmt%2BwhrYZpAxSLMwJ0qOSxpqUkF94za7R9RYELNxDQ153dvPsMuGYybChn%2Bvn5CoVSjBq4Zs0zCSnRs1DPCkWeRlg7IctnswvJ%2FRe%2FPLRZr57jcEIlDnikongaubFn1egysUCVnp06mvG5vYDG1AwdfbVJu8x2TAl9dq5ZaHGyQGXiMw7aRYBnqjcnbnMsunyq5JuEz34p&X-Amz-Signature=f1d6ca24c4d2e4a4a6b556f7a55199f8cf801f3aa5d89639fa9a4eea6bd22f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=bbcb3fdcb1a7a7246f810fe950f328fccc6fdfea334aef447b9ca757df569b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EOTQCFR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEN1k0%2BgrSMQfquqHoZBJCe5lypyodHzHdzW3MwJnzy7AiBV%2BAmu3bpNR3ZcQAAAZw8M0UpLSVCErbaZIEpkqpeRoir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMQfmNV%2BazAXcTXxSNKtwDS%2Fs9leOMjxBwL3XHBMmq50ZJHTRIKD3G1i4OZjGOkedvSOeH3yiCs2EeLXUU%2B5eFbncpgZWO0NNwJRa4yAYIoE9NnD6rBeBWvQJ6hYVBW%2FTi1T89YsOcOWhSpo1M0O9pjzJ50GCj4LWVbNNAw%2Bf91SbUCkI%2BFs5OhQnwLtQfEmm2eJsGf%2BvdMD3h3p2rnHHZX%2BzP1eyS4pJb55JMvaQDOfN2YdmYf%2BhlcIAf5oakRFd8qWrqsHaXC2yG5G7ssRSnbbPehrcCAxKmBHas7u2m7b9V4x9MANJ%2FXcLB%2FXa3DRtxWjSa115IiJb8%2BO7Tu0nr6i1N505UmFapsdl4%2Fu4QFIWz5uO9eb0anZe0RClIFZhX5Ayl2%2BfbU7qqHkxt2dssPlWFwgCoc1CUZHLFCgjQK%2FmqOpiCKs1db12Ekz3ZwgrOee1rcQ5jGq3nqTPVYpyBS8wAqZk7KJ5CKQX8YASA1v4Am3XSM1s3jTlu7StGi0VWcxLQraCF8EnY8KkndjVNQtWbMAPCiaeDtIYJstLssZQc5RSogZGQBLvzmwfsK%2Bg%2FmiX3ggljw7kmTllgaXDGOgjY%2BssWknhvwiAIWEWxfVxlp%2BNenMBqwTcGxDjndze59GPvxG1QTv4ior0wjuvOxAY6pgEWD0VJxOwd6re3SLuEDocciVh47M4anEVy9RgWfYr3V34E4eELL78%2Bnjo5S3fm11XgkoHtJolkypsr9He1GXx8UdaE5YWnoelPcjrTXAjwKdAAWZxVm29lDsfritFsVQPFuf43ubgzIw1kblB4kbz372Kejk5grDNGLsWGNg%2FIJgmdoCX14kB9Y8SjS20X2TTYhhL%2FjBe9HIAeGSb5BKreDH5bjToM&X-Amz-Signature=50b136edc339ffca54bcd2736e8b28da2a3cf176b0c98de324669c4deb23c8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=41f20eadf2e8b7f4a583002ae1a7ae571d26736765dec0a6b1e8af53e33463a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHE3MNX3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEE6xq2huIA7HAW%2B%2F4yea%2BtAIHNYo221Vl%2Fmn0Lfe6hYAiAvAGuCx5AuANnxyOzQSfgNN22xXigReYK%2BhReKpVxPxir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMxq%2FyT4DIZKWFXZVDKtwDiHLxfVchsskIFFkecRkqlb86eZUqwoP4tTGOTdgkJZQHXF0eLxfdBl1aP142tDl994oJa2fQkrFCquvBOCsBkBbr64Qzb64hsh1QXgqYrKdd1FaVIfD2lNTyXbSUl%2FzKMSxB22o%2Bp5mEep%2BBZ%2F5TdtI%2F0o7sXsPPNxzAQJfypf%2Fg0f4zulWogSJUmuY%2BGdqmBf36nwdzNodOynx%2FvTBHxEtPgfOzInAJw9ZIFpK9ud%2BLk0a8fsCYwyylbheRw2%2BX4Ovi63PsSBJdnf%2BXhkAQbQCizOlvhSDcddAbdsCzUu5oS4XQ%2FPoJ9dVUR0Vf3FmJ5EKjFFkjkhlwzE5dwRsk%2FzCydVeB1oeKCWVZuO%2BKwcbF1goGA7T1Zcw728kJ3zFop%2BTyfTKmJLx8Jz36Nk4cW5gmjsxfHHBgHHksapGomQlR4h%2FDedTVS2sutacXBxOluk951RpfGT3K8sB7WJfiAx0iGHNZaJ76r3rkIcKhRpYKXTswKHOYg3OLD3t6B%2FNZha9ERGlxJ4cxg4QbDD55qIog0ZnIyulR%2FyW76r%2F10kGoD%2F%2FKjYUpeaZXoJOI8dWDDa1yPqbl9URR6vtIFt2zhUxrNiTVG1y%2BT4%2BiaLEYOUhWgdTGst7HG7Xk%2F4QwrurOxAY6pgHcowq3hmYy62nsf8Rj3KlBJTE6GdgGhw15SGBJRFPi8ZZRkLFt7%2BcHj6YcH5F9e5PW9Sj%2Bq9AVWxAdOl6Z2C4T11vesQtWX8Hv0i1%2F8CiNZLxWsPonITulQ5aZhE21zp%2F2ao%2BrdHeWwvHKSTIRMYZL17xXfOi5B7YLodR6xFWRMRVV%2BdjQgMURBrtmkPIsk2cLquPGMYCEZbpOXLHepiuGpvCEqBIV&X-Amz-Signature=85eaec0248f58103ce96fea210f711a8c07eedd4d2190f61c9c44ee0f7b132dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=21f6a79efb4d290aafe30bad7599cb86bba744a80f924e2f8e410ca58eae7924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5B2PPEK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIApQyAZRTWxPyikYkprYqXWE2qMPAC4MkgALf9UrqLW0AiEApKv7ZsdKLsK9V%2Be7oSJvx5cxfFfZnLzknG%2Bc4Tx6PgUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBvFYe4t8aMP0Xii1ircAyfF7IahjSKtEKuPa5%2Br71jbtxOL7uvFLd710Q7CFbfVMXtJa2hI5FqewOFi8Jh8Z1IQDGFm98pFBO7p9yy3p0HWk1aEC6NdcRmdUYyF5OF%2F8EVfTnQb585wOvzh4jBJ31VlMpgTXYuUhU3S%2BMmqZBYCjYAXn%2BPGmwM4mPTPavazunpb5lclArrlQgJ7T182KJhkEDS3FSjyHjJT6j3Bik7HL7nsZNI4r4qcWBwbcDh%2BCs7MGeYh8GHyleUBOeZywI8cFcUfbsTDUQgdHZAK3p%2B4M6RVFtK09sgtJovNe4R4NaysytyBySUqR%2BaRs4y1rAz93OjFG41XdPsUOdA0o7IQMyqb9YgIpcatX7pFs21wI4HMsSWLBMBw9o6D%2FcM7%2Fsuc%2BmgNxdNi9c9Ip9Rb6PTXTgkJLlz4Mx3RgoWwzW4BX8nrCGSKUzzOGRw2k7%2FrjaiVasB7env9Yp6Ju%2F0kSd%2F3CCyMWPEHuKj%2FCSKUds4kdJX%2FpmMz4UAPUAAzt7Po5N2pTZLeTkZ5wFvTZrloCScmJXFMqZDSwuX85lB56VLmkjYxTGLpOD%2BBkjzG%2BzFm95QwVFhTA%2By%2FTe52rSl6jOg5UFdybC5Y1j8TirSEd%2FHbyfPpQU2X%2BaKWB%2FfcMP%2FqzsQGOqUBWywDduGkvS%2F6XMc7hLK0TR%2Be%2BtzjUorX%2BYCE8bgIk9VxKVcZZGVKyOg30SQi7VHr%2BTApunY2QB65JY2pLKBMcZ13mSlif9ByNRnRUBTGK5Sb%2BZmO70XKu7QAn0ySdekpw7vluPHDJXk0Q1lWJZKhywcKaFHeojKcMuzpJZOGx5Okd5DCcFOoFCye6icLCuyHboaU7G%2F7cKWDHJ5ZqiyhI5fZKKBh&X-Amz-Signature=056af91dfb5523d885a76d984fa6f3678418b8e77b06b03485e094eb67dbe13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=08ed0991ddf2596b0ed7640447f462a6c49d483498a7f08696f7ddfedd05e5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>code up until this point</summary>
      <div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>

  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU2QZLI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBS3icgupJIS6FLOPgS1aW4UujW0qA1ERvhgIDVzYY6KAiA0Nak0GB6Bglv61Na%2BB2npqZ4yx6slGHRd%2BZFhZv5zCSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvbvNXbrdI6FsfHR%2BKtwDGJscFLpiXndW55m0Jo97N7YJLypkxZF9wdnNRHO8UZssuf7Et5YY8uSdlYBomPPVyMMXz%2F2d35u087WnKiDS5%2F56p1FYiRS185SOVY7rpZH5hAFDAeZEYIEINQF4aYndNwo7dIeqMY5ArhCOknMnbvlJd3zl1mDQjnZl%2FhL3uA4vRCRdCjJjxAeOTieg%2FiN0lJAmCxDpirAUVUFC58N7SG2AwxHC%2Fv1UBs1MckLDSMJ9LQQGMZ%2BCSx9trsV6lwDR8P87Xb9AaF85b3jgENqHDs83ymeJalX1GVd38OXj3pUwZftqASQcc57%2ByTBXVDCMqP0wSDwHlLYUAXynXd3yfUPAhITn8yE29w0BGcu8Q3tkvvLCIR%2BqO3c%2BAMDwf2HC%2FUAg5L65sXqo6pZ62pJr3nCJnwY0d%2Fc1ahCF4xtMZ1G7uCvY6Kgzs9YV%2FzkoXa0KZUrteU%2FOWR7MVQ6kwhuo10t9RqhcMJAeUoROJe%2B8BrQtKV4yRcOZuU8nV9TkWV3fDQyhQsZ4TdR1fe1XusOn2DjEcIBIgQrexpwzWlDgrGU%2FKx9LLNiIrrnoJCKA293G%2BGfVQ8jetPOZCi0mMrcp1UkJu61btIk8YloYUQ%2F1Gl3ONWcFYTmkrA1YLOswgOvOxAY6pgE3cvcgdKHfJFyyiKpY%2FWVVOiaHS8qP4OFRUwH5ykO2Y7dvyJ4WfJknBrRZGK%2B0hzGDIOBMtt%2FiQUlj2mOolymk0Ohv%2FC5t6VasI3KBT5JGaNZ9p%2F0yirRpV%2F9RpKiy4Aej9hz6RkNtSCZjXhNIoIAKPIg7xBlPluN1v9ZisxSz437ARK8bsknFVIpQlFIx78gvYDB11tio9VQOpfTycZKIXEq0UHCy&X-Amz-Signature=375075a4cb9528285a7fd75e73edcfc4c526fdaaaa9a58e12d576f732098f8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BW7BU5B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHZrzouJLjoNPPiN8RgGcgGfjNDNJHXJtARz0h8IkFEHAiEA%2B0%2FXYSZvfWGPx4QExZzRuibp4EQFNvbPlBWii3pFk2kq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN2xZCZAB8yQm23aXircAzO2EjXNfuNzES5RMHrak3R1nl4OKq5douTROiIHnBBu8udzgJCxusze1wybsbMt5OvpNbJziQQC9i765da9oE6g9F7Z2mzx7PzTnq3M0UqD2jc7AeVN6eMfovamyqS9FMF0cQao9v8zOjpOt5Bu8tGE3r%2B7i30lgc96K9VI%2B5lwReWOdvwB3MiUb%2B%2BZGqY6L921d4tId2KDyZDKIFqmqkE8B%2F4zBcti%2FmAGxOnZjtAKPaSEONmmaOFXod4FcguYydWORZpWpo%2BznIE1Yy9OTJpHvXo9Hj0TBsjWYsU5F7dlNSUaMHFd7aW1UsKhuxIpgWL2uaMU5vUPJqGCjSpcl650hc8YdWNVQgvycSBMPYDnYns3LLyTzd239deZliupud53vQoHV7GgNSBj0RlSvAXyTYV1crFq3nxlLhYC9M0b4%2BgoZVKIRP1uKUwdsltXsV%2FAPYj2aPAH7kgP%2F9mAzt94E5iujXcjV0tF7CGwuQb5SQ7paINFQQFQasKzEEDupKHISkjBWB6M7K9avIobmNaRAiFSjBNrJwDKLK4%2BruoIZZT%2BxMaa12ReCWhGw%2BRA7uTNvzQA1gZ2eVxA8tBmWNYhq3tq%2BMK3w80hx2RN3i56XBU12i%2FDcRhi6nDUMLPrzsQGOqUBPXyAItysedksESUBnNjzX1SqWX%2FNE36Ye16SytI4qgxMpThkwIxbrUWTXTFjsoECFns%2B%2Ba2rZKwcZDthUop%2BevHgi5RCmkpIakdNEmaQmlmrDoDKdFX6vC4wisPenAGBK7qA6L2HICD4m1M8x7X%2BjVuGjHIWp1MUEyKOA5iNuBfx9%2FbavUeYvCRDVX14WFvyiJtNhnIWY1CAXC203HLHXF3SkdYD&X-Amz-Signature=205c92db5e254e509a5d27371d7a712945c594325b8409c1d3f2847c889dbed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>
    
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>
```

Same for our wheels:

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K4AAVEK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDQRqPwnPtEQZlFacUMjzkOeMhI9062cIGFmpy7hlHqWwIgeJibyaCAFU429JsIGQymBq4l9IcFqtsgnc6hZA8Jbi8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLsI9ZWTpg3wGvIT0yrcA7waNINx4m7UeNXzMGqtZolIKT5jQW2Rn2FHNlzQojfK%2FJW496l6yxeHTH0o2IsALqDhRz33qU1gk1o54MEQaFzXV3AgRm4mKLP9yV5xv%2BAsqgtRgk5753U%2BPsciTWC8sgiua5vxVRZNjJiz1i62W8tCeDFg21Qg2yIyh7eLiiEx27fm%2B3nzEPOC17OZcoqP64nMRS3sR6S42UFNj6O43TeB91lWKGuTum9Pm%2BQOd1DLtVdc25CkdYp%2BKkOYBAa2paUODJvK3Q6SvWaaz7BHXBKpi9dd8n6JCLh5mgQx9QpDP4B8vKc%2BbrfFBsa1u4pYh2AoyqW4Wf9xRu%2F6f0%2FfyKg2tiTtlYxZPYQIfwgFFP2BgO60KLuJdLZr7A5aqXiBCZlnaXBopFooQTRRT9oJ91LKk5CnX5AIx9DpxGm8xMWQGl8abjRDmnFb89bCfzXz2qfSN2PQ6dO0FfupjD5f3Zx%2FqORvgHeL2WwN7pdyiT8dL2hgpF7g34HJUgBPMcRBiA7s8myV5Pt94gsyBQmdUh5z7G1RGfN2XMzVB8FYQJeh%2FcwumID2AmahWnSCObcN9DcE3mSuXfJw8%2BU%2F2DVg1wWs5MERGwyTKZVoqnfgz4uwwB5fUjlw4QJeqWH5ML3qzsQGOqUBnqtT8WgfQ9KGtpqoUAdxo618Ql0BLSeIZi%2Bh1laTbZvsCZ7CGDObrWHbKbOU5vR9g4aLm2%2BZDce52pGjpHOxrzujAa1WLjRxrcxWEzPqOoMnMb8c%2FS3FwTqtDaWAU9VlMU5ywDm1D6GlADAhTHCPPnSGqfxbHm%2BXuHNF8c3%2FQzAzMo6NPZIDA%2F1P6Ct3dwW55vKGdmab00SDmxbQDaujrqLHizIp&X-Amz-Signature=5c3c1be51a1e0b3edc509eb1ee3b6a3baeb3a6f0ec5e63b56a9fc6cda1a1e061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBGON2U%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBw4WzvrAbhQ0P46iVpoNjcLS65Spz%2Bnsya24fStcyYQAiBBTF4vSLGYUkkXqxIDpMUq%2Fs%2B%2FrblzjH97QW%2Bm%2BZNOlCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMxmYr7oOi3jt6a0q2KtwDRUURhK32v2YOPI4CBTfz2g6bAq7btnVyo39DFYGKlfYJIeI60HGL9%2BkJ1cQiy4E73QJK7ZZM7pcbJ8wky5Pdn4MyDY2wjIjDQKEZy9eTyn%2B0j%2FD8nJbOiShxs2tGrN4DSPYjWVsClcHeDBPHx%2BBqg8yS1g%2FNn1AI7vFbVtz6su3tOsu296p3xwUEGm6NeYaFKxiAouUtCewsSn5U3VqfV2DFHaLd21kmHSMdXhRm1wdRU3Iya3RV%2BvgG9iMMIu3e84%2BRAFUpMv8qJVVmxCnW4EZI%2FbGAIV23OXjodiE0PPjAAfK3J7VZH3C%2FU0QS6ow%2FTrKK%2F9wo39dBPtc9XUCLxS9oyc0pyOzL8diGbxTDcCgG99MBES%2BJYpE9QFEnKNVb5GqQKwst7U0XrPrarss895q8VIVRCgk%2FRsu%2FwE5Z0v3OlvxaQ%2FZtDx%2BcUpvecNnc1cgyQ3z%2Bo4MrwddsVdlnPQyS4KCquCRHqkLACHNsK6Jrs0z2WhafSkl6TowTlfS3PUOodbim2ajvnTJrOIIFv%2BAlyRzq5sUeWz14UFfBxTh9afIFibjTel3nKkOmeSZRWiZfzfHGa%2BZgxASMuRXFJ0KAlp5af8gHwkAb%2BawAtsjuWnUAvRhW5zWGs9Mw%2FerOxAY6pgHRpYNLMKD%2F%2Bw3ioFqIntBPkvw8fE5PI6Kc8uWsfLyoT2oSi%2F8Un4f2ECIT%2B9CHJG37iFkJvk7MUnPDidZpvXEnxrJobnneLC1eG5GJGNIdoPIRzNGPL9lDZzGLOw9d3B8tqlYm1FdFGDGMNPA1anqtLVjtx0MLVYFBwyJLDc7IUNeac0L1ucZnYm1lwOTi%2B7K58qUoKtixwAzDWw7BByyqZlMN7dk%2B&X-Amz-Signature=49e48f01c6456f9f77a5aeaff7956350fb737c8a5b7e4baa5a2238c2be02646a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

    <xacro:sphere_inertia m="0.5" r="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB4QMTYG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCINcWkELRavNuIDagN40EtRToxQalaJCBSo4NaQcTXkAIhAOyvX%2BpLlfYhUkKlVoPB6ZowU3jN2i6PN4AMfto3QK4DKv8DCH0QABoMNjM3NDIzMTgzODA1Igztk%2BgUmsM0HwCgTJgq3ANtwRsq5iA1fVrBUk4kfBCh9CBnC1%2BXn9nCayaEAsRwnpnriMv9dgQ3jkAaRhRtAs1fARfvw94MKOz5WZbhVdmMLH%2FzrB5WsBv7F6Uz2%2FPnOBM4vdrwIavleo9uB0VMzMEFP2BnnJidTw6G27riagvcq5KPs8DLof1FkCNUMjPanZEeMrxlCHemkyeLsV3wqV6eAFqe6ZXQ4X4HZDsN4YXC5asM%2BhKUH%2F5G3L5%2BaOteFGdX82bQhGI6wmih7HH%2BbvLUf%2BQhkQ061povsFlrUs2dtA%2FamJVKP2TkOqH9zBmZ3sV3jmwZqE9Emrd1Re%2BuOMurZdd30v%2FA3so846esvp9vBYXITtjk9UGm09zGFLoLLLgfpQ2xli5E3rnN9zpXLrMFEKBr4bg3Yw7ikrOPmjMb3NbDKNpbZbCpfLp6ID%2FtwAKFwLGLjRkC1nLx37OUm98tcxArBff38ocGWBSjCzejreeGrk11UncMJYnn5eWOjw691P48rPaRJlG0Q65bj83EsIi%2BxY2drNZlO1zRBa3nCSDjoPAroCfSI%2FyTq2LJ8rk4uJy8uNUBegLlkLrMKyoQGKZnX6tAFEoitybkwt%2BqOAwW%2F0kKC8D7GuKW7BtFwfI80ItD2XcFGcM3VjDK6s7EBjqkAfZh2K5gBAf62ogJVs%2BZQU%2BWOgS8yOJJnVXakz0SU5pA1sqhkpJ9yD5porPr4ysEuUDGf7CzMPCHpy%2B%2FOlJZiGrK7tBkn6M6TxuACBzNBIF4uQoIoRxijPw2QKtH461%2FmowzYU1w490ZdH8goIg9AgnJ2EBXRGjD2ia1x8umWc3Nj6t0vAeYVF%2Fs1ffTdG%2FT5xWBKSw1ztJNE%2FOy8d%2F4N8YMz0OL&X-Amz-Signature=d7df47eb044a2e6b6db33d98a72b5b7a9a7bfdaabe65b77c5448f492969af32e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=f864527e1c4eedbe0bcf400017c66c3ada33c54c86dc75a35b8131b4e4eedf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>final code:</summary>
      ```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

	<!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>


  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <!-- Robot Footprint -->
  <link name="base_footprint">
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>


  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```
  </details>

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRUYR5H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC32hp2ko9EOAZkuadG5xfWN%2Bpn8fgP49BvEDjbdMqMeAiEA6MlbCZ%2FTP2A9AlgvlUJ8KoFB2HGOe2F0AeIAoswOkz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKM348XPC7jAdMZwbircAzzWCrZsL%2B635r%2BuPuQeMMDJoUXpbXlMNIsyQcsxx3e%2FMamvI23R2TOjIALc7O4CH9AzvHNyRtFqWCeUOuPplZ0a39QI9qnEIxrDmj%2F%2F9I0KtdO4ilwTEK7PsuMG4cCnC8uaQiMEdOgHc1n2EWEUjJZhzk7O64x6L4YIcFljbL3ZCBxILREYXaY5JiBx8%2Bd6zLkNc7jtCSdXj3Zvao83BsUSdsnk4hNU%2Fc63%2Fq5cjlxwhbGwJx35BWdhxCYi%2BuPgdoyXj55nRKuRkVR3M49HzKcQ68nRvEvxSWCM6n0k7SjSOk4hrduEHInTTf8kqgRuoOyTjGK6GXCcq8Q3fKCw61TCkgK9mt3cG3cNgVYJkAkCsvmlc85eecxoAkxtN0BhL9MlrO0NqoX8yJg2FHswkhgyjfZrbJFcSZDhPiwVs663sg3%2FFhg4m5CtZiu9ONt44BCsSJFYlwL1XZ9v3sxKhSPIvbFMh7e9YDlcBE0A4TfPNAsNy2WPVhF1zyyfe9S8MaeiYz73hsftL2BDgBGYUT4EhBAPdFEdxLvl%2BssED6mkcdYA4%2BNUMfJvaAZwOUNFossXmD%2FzQRt4O8LEkD%2F5NXenLacmON1RHDigGm0ZVU2Oxd3hf7p3IdO7niK9MP%2FqzsQGOqUB9UvPJSaznuk4nX269nW%2Fv%2BKozxqpjuCpEuW3wSTeK1uo9ExUBD2DSc%2BabOAW4OsAneLHyCHAkBMlL6cU5IcNim5qfh%2BF3u3rewgNaGJqXuME2OcYdOQo6jGjFswIS%2Bww7OqEYVhPa1fcxh0o9X4nspuIHorgCFwIZzwgPmQE0pqIoNRoFtutPBQE1%2B%2BDGSKYJRvpZCFNVvlDHRqFd5zZAkhx4ynU&X-Amz-Signature=02687638c4c341084a34b18ae867597988f5f4cefa134309638dc6c98a66d267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

{{< /table >}}

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=2d3c97c7fd1e3bbcb75d3c60d532ad881bb7f6cd559210263be44c0ddc6e5fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=8045ce8d2dda68d891bd175429fed1a8113edcbd20698f051e06d205b60b24af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=7cd0cdacae9e2658b0f48f6682cd755f3067518bfcc9b6fe7c98e80d7ee093ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=e72f3d878bdf525ba408882e3537bc8a2b6cc8ce3f9113155b4ae6a9d499dc87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=6190a9ff961ef66b9364a8a3c09820be5732668c8ec804d06347f61d2b36889a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
      <summary>What is rviz?</summary>
      TODO: explain rviz better (say how it is like ros2 echo but visual)
  </details>

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=8dcffd325bc1bd3722a421271a2f9f9aff8fa589e7871e4e307b3b1f08ca1d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=047a0347b1933fa4edb305c2cefa98284435b920d521931ba9cdccb47bd0005e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      [launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)
  </details>

This should do the same thing as running the three terminals from above

```python
import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, ExecuteProcess, IncludeLaunchDescription
from launch.conditions import IfCondition, UnlessCondition
from launch.substitutions import Command, LaunchConfiguration
from launch_ros.actions import Node
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory
from ros_gz_bridge.actions import RosGzBridge
from ros_gz_sim.actions import GzServer
from launch_ros.substitutions import FindPackageShare


def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}]
    )
    joint_state_publisher_gui_node = Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
    )
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        output='screen',
        arguments=['-d', default_rviz_config_path],
    )

    return LaunchDescription([
        joint_state_publisher_gui_node, # debugs urdf joints
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node # starts rviz
    ])
```

## Add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

package_name = 'mbot_pkg'

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)


setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ] + files,


...

```

**Build:**

{{% alert context="danger" %}}

## MAKE SURE YOUR RUN `colcon build` in `mbot_ws` folder!

```bash
colcon build --symlink-install
```

{{% /alert %}}

## Running

To run the code we just need to do:

```bash
ros2 launch mbot_pkg display.launch.py
```

{{% alert context="warning" %}}

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=d0eeedfcac8d6677a5e6d65c5f83e0f72f84b5305f38f51d8320bdea3b915ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=0738451a81208d68eeeda2e5bd98470ae1e40e18848868817030f29c0d6406dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGOOOCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD7eeFa8%2BDNLXX9cDcyXuPYgE7laeqcldUkD2GoZzuEvAIhAMB6geVDoMMfd2jMscxiJSdesY%2FGNibonrc7RLSAWupEKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGn1fqoU1lnLfQI7Qq3AMbBueFpue9rfml3ejZTyaJlND7bE1syMCTT5biZszwqmWSH13TuB5QRK9n1znthyCU9fURodEDcs%2B%2FtMPRCunWHKynFSoCslIuFgAtEMg97W9nuXaKaYiYhsz2OAI389W%2BrsXhh%2BPP8u1u5JMKVedryOjUR5cr1Fj8XHqsU%2FvymYo0%2FLGC0yQN9JaP%2Bg52GsD77LDZCHMZWAMdIwaj4oEVkucdcqRY7eJ7p%2Bh84rCHuM%2FtzBBDtXBnp%2F%2FxIeHAjLqVGb3TdguTDSwXnuxn1tkREqtNKnMVBeoYC652E33e6WkVpaTUacppYFIItWqOOHOPzH2Hb%2F0UVKPTSnnGfu7R2kIEIIbR8mj13uVURJCutpoZ8C7zt8jza%2FcVChLlxXTqkGUokfNDeB4O%2BTtlGUzgupdvEivEdELhk04nI8Ba2WGdC6GlpWGvGgEQH6CZGLKCj8SwCvUoRLf%2FP2R89PtpxFC0ad%2F9q8gXR5qC0sLulmIHPsYR6My76RccrUBeIMFVIBhmfC93GyAHeP8c5MjxaaAFVUIeHKLE7xDIdDudPbdGb6yAnwvpmm%2Bwbbu0fNIADQQ44kN7zlW%2BZD1JVcbntifqm6KzUOT%2BV0Od3rqW7wBeKK4P6kAb%2BMlOSzDm6s7EBjqkAREEkrrRUTZtu%2BDFAdUdLkZRDzZaXWJ014SKpPOy3T0tMTWEYNzdlXSwbUNcqVfu36K0mArBXdnMMKT4kKrLoKsAQwjEZ2M9BSsMxKZIrqqzHvvZOdYpw3LdweKKBfXLWAfjir16%2F%2BSwhQDn%2FjCP%2F7gFr9GAFFXcol99oq2KBobFnTjjtm8lSsl8RPdqsDabciAnY9uD0mGeepFi5LrlSofJTLrQ&X-Amz-Signature=98dfa541b80c4df4038c83bdb40dca7784f9bad31668db81a375bf7f5b65bc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
