---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUEEM3U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDVKSF64DYO4MY0iDaPKIuk2z2NlpNZ2E0hPRoQ2VSDmAiAzdg9e%2FkRh42hnyyw%2BLwRcJAoizfQP7Ld2Q4jNERE0Hir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfmvVrQ5wIpWm6eI8KtwDaR0tesVbbRklU5dSTpi6x8Ix9WaaTnqZLcvTXQRuz1l2aJDWGik3QSPt0NArRPI2egPDf5jTZlHB1AYZx%2BE0CVVa0xbB%2FsDnjB%2BJE7%2Fd6Q55BQbebyUKIGsptF%2BsM5%2BIREo6CwG1MkkgkXoxmpMWmvd0RDUBrlvsVvmkbi%2Bxp4hif%2B7i7ZqblsCZxmihoOV4QZjj0hkfVUh4oS6ypYP%2F6T4%2FP1fcO5dBL86z7sVdJvnTjctHA9BiFaTTLgDQ1uXMpvfYOinDAUKFlQoqwN3N%2Behu7f%2BudT7VFiY0utbngJy4WM9fXZPQ%2BJGIiVjOtYDJkcKLpAQ1aUzwR9f%2BYv2kAHYfORnfYXOzj6rHWnX0dnhpAbknItn%2FRB%2BmWujh3RxaB6%2FZFUs3jDPC1Zm9uYUp%2FmNS9W6xb3GPqGcdPwgdeY2YjS66Cza4BCxh6V26Vjh91FLE8wpPYzZyLo8DCHmwlVLmR6umQPLOyVKpmJ6SdxOrs03sGI5ePlghVUXPZGGxZ57mkLowRy2IKwi6MfgBlxLx60MSb8jkdLzh42KUyVfdkyqkFVZUJTYCpcyNB6k63rOS0tW%2BHJq2aDgFG%2FpyAOjpNJzpvc27ZlwM3IRVXNLqk66k4Q0kido7LJAwh%2B7hwwY6pgHH%2F6uyBw4STCxLPW1q3P772z3QPmhpWGPL0KMOzWoKolBDx%2Fo7XS9J5sE7VuMAWXWdr9etpnIsk8SKanCNe%2BhtdPCs61abgUa357UaPCt38waU%2FokGKPsTA1lUzyLDIeptmjSHTXyoiOVi9ouaQiv4v2vIEdihLNaDzSVQL63rRpw2gnKYxr0FjqQPylElfyGZ%2BnZPZy4t60aousbeAw7eSJyloVV5&X-Amz-Signature=8b8e5e0b6cf8b86db8e836ccd03a72c53608bee1360fa451079c269c8b60d2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUEEM3U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDVKSF64DYO4MY0iDaPKIuk2z2NlpNZ2E0hPRoQ2VSDmAiAzdg9e%2FkRh42hnyyw%2BLwRcJAoizfQP7Ld2Q4jNERE0Hir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfmvVrQ5wIpWm6eI8KtwDaR0tesVbbRklU5dSTpi6x8Ix9WaaTnqZLcvTXQRuz1l2aJDWGik3QSPt0NArRPI2egPDf5jTZlHB1AYZx%2BE0CVVa0xbB%2FsDnjB%2BJE7%2Fd6Q55BQbebyUKIGsptF%2BsM5%2BIREo6CwG1MkkgkXoxmpMWmvd0RDUBrlvsVvmkbi%2Bxp4hif%2B7i7ZqblsCZxmihoOV4QZjj0hkfVUh4oS6ypYP%2F6T4%2FP1fcO5dBL86z7sVdJvnTjctHA9BiFaTTLgDQ1uXMpvfYOinDAUKFlQoqwN3N%2Behu7f%2BudT7VFiY0utbngJy4WM9fXZPQ%2BJGIiVjOtYDJkcKLpAQ1aUzwR9f%2BYv2kAHYfORnfYXOzj6rHWnX0dnhpAbknItn%2FRB%2BmWujh3RxaB6%2FZFUs3jDPC1Zm9uYUp%2FmNS9W6xb3GPqGcdPwgdeY2YjS66Cza4BCxh6V26Vjh91FLE8wpPYzZyLo8DCHmwlVLmR6umQPLOyVKpmJ6SdxOrs03sGI5ePlghVUXPZGGxZ57mkLowRy2IKwi6MfgBlxLx60MSb8jkdLzh42KUyVfdkyqkFVZUJTYCpcyNB6k63rOS0tW%2BHJq2aDgFG%2FpyAOjpNJzpvc27ZlwM3IRVXNLqk66k4Q0kido7LJAwh%2B7hwwY6pgHH%2F6uyBw4STCxLPW1q3P772z3QPmhpWGPL0KMOzWoKolBDx%2Fo7XS9J5sE7VuMAWXWdr9etpnIsk8SKanCNe%2BhtdPCs61abgUa357UaPCt38waU%2FokGKPsTA1lUzyLDIeptmjSHTXyoiOVi9ouaQiv4v2vIEdihLNaDzSVQL63rRpw2gnKYxr0FjqQPylElfyGZ%2BnZPZy4t60aousbeAw7eSJyloVV5&X-Amz-Signature=64240264a9d1cd37b49f9238daba5ed53bc75f01b9fdb53468dda6d860f55b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUEEM3U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDVKSF64DYO4MY0iDaPKIuk2z2NlpNZ2E0hPRoQ2VSDmAiAzdg9e%2FkRh42hnyyw%2BLwRcJAoizfQP7Ld2Q4jNERE0Hir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfmvVrQ5wIpWm6eI8KtwDaR0tesVbbRklU5dSTpi6x8Ix9WaaTnqZLcvTXQRuz1l2aJDWGik3QSPt0NArRPI2egPDf5jTZlHB1AYZx%2BE0CVVa0xbB%2FsDnjB%2BJE7%2Fd6Q55BQbebyUKIGsptF%2BsM5%2BIREo6CwG1MkkgkXoxmpMWmvd0RDUBrlvsVvmkbi%2Bxp4hif%2B7i7ZqblsCZxmihoOV4QZjj0hkfVUh4oS6ypYP%2F6T4%2FP1fcO5dBL86z7sVdJvnTjctHA9BiFaTTLgDQ1uXMpvfYOinDAUKFlQoqwN3N%2Behu7f%2BudT7VFiY0utbngJy4WM9fXZPQ%2BJGIiVjOtYDJkcKLpAQ1aUzwR9f%2BYv2kAHYfORnfYXOzj6rHWnX0dnhpAbknItn%2FRB%2BmWujh3RxaB6%2FZFUs3jDPC1Zm9uYUp%2FmNS9W6xb3GPqGcdPwgdeY2YjS66Cza4BCxh6V26Vjh91FLE8wpPYzZyLo8DCHmwlVLmR6umQPLOyVKpmJ6SdxOrs03sGI5ePlghVUXPZGGxZ57mkLowRy2IKwi6MfgBlxLx60MSb8jkdLzh42KUyVfdkyqkFVZUJTYCpcyNB6k63rOS0tW%2BHJq2aDgFG%2FpyAOjpNJzpvc27ZlwM3IRVXNLqk66k4Q0kido7LJAwh%2B7hwwY6pgHH%2F6uyBw4STCxLPW1q3P772z3QPmhpWGPL0KMOzWoKolBDx%2Fo7XS9J5sE7VuMAWXWdr9etpnIsk8SKanCNe%2BhtdPCs61abgUa357UaPCt38waU%2FokGKPsTA1lUzyLDIeptmjSHTXyoiOVi9ouaQiv4v2vIEdihLNaDzSVQL63rRpw2gnKYxr0FjqQPylElfyGZ%2BnZPZy4t60aousbeAw7eSJyloVV5&X-Amz-Signature=0a13408ccc8ffd42f761b94a69c52481b58f3c1fc4b78a814c389bc3b2944bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUEEM3U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDVKSF64DYO4MY0iDaPKIuk2z2NlpNZ2E0hPRoQ2VSDmAiAzdg9e%2FkRh42hnyyw%2BLwRcJAoizfQP7Ld2Q4jNERE0Hir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfmvVrQ5wIpWm6eI8KtwDaR0tesVbbRklU5dSTpi6x8Ix9WaaTnqZLcvTXQRuz1l2aJDWGik3QSPt0NArRPI2egPDf5jTZlHB1AYZx%2BE0CVVa0xbB%2FsDnjB%2BJE7%2Fd6Q55BQbebyUKIGsptF%2BsM5%2BIREo6CwG1MkkgkXoxmpMWmvd0RDUBrlvsVvmkbi%2Bxp4hif%2B7i7ZqblsCZxmihoOV4QZjj0hkfVUh4oS6ypYP%2F6T4%2FP1fcO5dBL86z7sVdJvnTjctHA9BiFaTTLgDQ1uXMpvfYOinDAUKFlQoqwN3N%2Behu7f%2BudT7VFiY0utbngJy4WM9fXZPQ%2BJGIiVjOtYDJkcKLpAQ1aUzwR9f%2BYv2kAHYfORnfYXOzj6rHWnX0dnhpAbknItn%2FRB%2BmWujh3RxaB6%2FZFUs3jDPC1Zm9uYUp%2FmNS9W6xb3GPqGcdPwgdeY2YjS66Cza4BCxh6V26Vjh91FLE8wpPYzZyLo8DCHmwlVLmR6umQPLOyVKpmJ6SdxOrs03sGI5ePlghVUXPZGGxZ57mkLowRy2IKwi6MfgBlxLx60MSb8jkdLzh42KUyVfdkyqkFVZUJTYCpcyNB6k63rOS0tW%2BHJq2aDgFG%2FpyAOjpNJzpvc27ZlwM3IRVXNLqk66k4Q0kido7LJAwh%2B7hwwY6pgHH%2F6uyBw4STCxLPW1q3P772z3QPmhpWGPL0KMOzWoKolBDx%2Fo7XS9J5sE7VuMAWXWdr9etpnIsk8SKanCNe%2BhtdPCs61abgUa357UaPCt38waU%2FokGKPsTA1lUzyLDIeptmjSHTXyoiOVi9ouaQiv4v2vIEdihLNaDzSVQL63rRpw2gnKYxr0FjqQPylElfyGZ%2BnZPZy4t60aousbeAw7eSJyloVV5&X-Amz-Signature=c7b77073ece1cff8028f2d5f01036a0515efa4eedd7f566a79fd25d5f0f6618e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUEEM3U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDVKSF64DYO4MY0iDaPKIuk2z2NlpNZ2E0hPRoQ2VSDmAiAzdg9e%2FkRh42hnyyw%2BLwRcJAoizfQP7Ld2Q4jNERE0Hir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfmvVrQ5wIpWm6eI8KtwDaR0tesVbbRklU5dSTpi6x8Ix9WaaTnqZLcvTXQRuz1l2aJDWGik3QSPt0NArRPI2egPDf5jTZlHB1AYZx%2BE0CVVa0xbB%2FsDnjB%2BJE7%2Fd6Q55BQbebyUKIGsptF%2BsM5%2BIREo6CwG1MkkgkXoxmpMWmvd0RDUBrlvsVvmkbi%2Bxp4hif%2B7i7ZqblsCZxmihoOV4QZjj0hkfVUh4oS6ypYP%2F6T4%2FP1fcO5dBL86z7sVdJvnTjctHA9BiFaTTLgDQ1uXMpvfYOinDAUKFlQoqwN3N%2Behu7f%2BudT7VFiY0utbngJy4WM9fXZPQ%2BJGIiVjOtYDJkcKLpAQ1aUzwR9f%2BYv2kAHYfORnfYXOzj6rHWnX0dnhpAbknItn%2FRB%2BmWujh3RxaB6%2FZFUs3jDPC1Zm9uYUp%2FmNS9W6xb3GPqGcdPwgdeY2YjS66Cza4BCxh6V26Vjh91FLE8wpPYzZyLo8DCHmwlVLmR6umQPLOyVKpmJ6SdxOrs03sGI5ePlghVUXPZGGxZ57mkLowRy2IKwi6MfgBlxLx60MSb8jkdLzh42KUyVfdkyqkFVZUJTYCpcyNB6k63rOS0tW%2BHJq2aDgFG%2FpyAOjpNJzpvc27ZlwM3IRVXNLqk66k4Q0kido7LJAwh%2B7hwwY6pgHH%2F6uyBw4STCxLPW1q3P772z3QPmhpWGPL0KMOzWoKolBDx%2Fo7XS9J5sE7VuMAWXWdr9etpnIsk8SKanCNe%2BhtdPCs61abgUa357UaPCt38waU%2FokGKPsTA1lUzyLDIeptmjSHTXyoiOVi9ouaQiv4v2vIEdihLNaDzSVQL63rRpw2gnKYxr0FjqQPylElfyGZ%2BnZPZy4t60aousbeAw7eSJyloVV5&X-Amz-Signature=f462abaf732b1c197dfa4402a8ec36349a884ab4f71edcb88e4df13b988ad2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUEEM3U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDVKSF64DYO4MY0iDaPKIuk2z2NlpNZ2E0hPRoQ2VSDmAiAzdg9e%2FkRh42hnyyw%2BLwRcJAoizfQP7Ld2Q4jNERE0Hir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMfmvVrQ5wIpWm6eI8KtwDaR0tesVbbRklU5dSTpi6x8Ix9WaaTnqZLcvTXQRuz1l2aJDWGik3QSPt0NArRPI2egPDf5jTZlHB1AYZx%2BE0CVVa0xbB%2FsDnjB%2BJE7%2Fd6Q55BQbebyUKIGsptF%2BsM5%2BIREo6CwG1MkkgkXoxmpMWmvd0RDUBrlvsVvmkbi%2Bxp4hif%2B7i7ZqblsCZxmihoOV4QZjj0hkfVUh4oS6ypYP%2F6T4%2FP1fcO5dBL86z7sVdJvnTjctHA9BiFaTTLgDQ1uXMpvfYOinDAUKFlQoqwN3N%2Behu7f%2BudT7VFiY0utbngJy4WM9fXZPQ%2BJGIiVjOtYDJkcKLpAQ1aUzwR9f%2BYv2kAHYfORnfYXOzj6rHWnX0dnhpAbknItn%2FRB%2BmWujh3RxaB6%2FZFUs3jDPC1Zm9uYUp%2FmNS9W6xb3GPqGcdPwgdeY2YjS66Cza4BCxh6V26Vjh91FLE8wpPYzZyLo8DCHmwlVLmR6umQPLOyVKpmJ6SdxOrs03sGI5ePlghVUXPZGGxZ57mkLowRy2IKwi6MfgBlxLx60MSb8jkdLzh42KUyVfdkyqkFVZUJTYCpcyNB6k63rOS0tW%2BHJq2aDgFG%2FpyAOjpNJzpvc27ZlwM3IRVXNLqk66k4Q0kido7LJAwh%2B7hwwY6pgHH%2F6uyBw4STCxLPW1q3P772z3QPmhpWGPL0KMOzWoKolBDx%2Fo7XS9J5sE7VuMAWXWdr9etpnIsk8SKanCNe%2BhtdPCs61abgUa357UaPCt38waU%2FokGKPsTA1lUzyLDIeptmjSHTXyoiOVi9ouaQiv4v2vIEdihLNaDzSVQL63rRpw2gnKYxr0FjqQPylElfyGZ%2BnZPZy4t60aousbeAw7eSJyloVV5&X-Amz-Signature=1986831918cadf20efd18f8e96c99bd978e7363024cdbafaf1895d914880772e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
