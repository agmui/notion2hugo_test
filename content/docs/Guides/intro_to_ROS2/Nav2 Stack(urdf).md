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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSTVIRP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCkMqk%2BrDNLnN2Kti%2F29t6IKaIM8GgWAV9IOxTkH9eChwIgUk%2FvILih6f4MysI32hbbpRJrMh7MJILM9t2XDvkav74q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPDDidab6WHCrgfNZyrcA9LdECLTou2zl124Eezwq%2FbKwRwhdGkSXTbzhB%2FoCo3gusHwkMxPEW3K2X5IYIPg4fdHMa5T4S3qjBnvLk2N%2F%2FSVT1h12MuOsNwWbs%2FJ04gLNg7J%2BcJNi1WXH26oFM%2BlMx70A9EAvTa2KamRMbMsO2Nkl8ZxYH20VAHIsI27IwtbhWuNH2IQRta6XQzr%2FOj2LWpbVqjR1JvD%2Fa65OgvWgtmD7SMT8V5P0IpqC4cFrn3iwUYk%2Ba%2FAtQJaJv28n%2Fme4247YDFhK3743B61W1rvN6AGcXzi5G3iboCVUM7NzfXPAqmt8%2FhVqiuQvbO4yoWyx9HuB9BuG0MbiWzXaYFj%2BTKax84L0fyb3E%2FOXvuJG5ds1R7dEeu%2FxN%2B4W9g1GR3hHu4xWX0yrVUrR04S9Dx0Upp7JvQWtOe2p2ix53aDG%2BwReYc2MdDgu642WDnGoShy1hx8QG%2FambzxCGJGy5nham9N07xEkPrhkdX%2BmuNHSuYcT57u9F3cRCdBEuRGuAIOcSSW9wLJmpm3R3lprRmpBPOdTC4Tq20kmMYTnTSPUNCMNJwHc25G2dlGka53eITMI1ICKTphmUT6nIzRHu4qekwwtEaRmtiS9vr0JUO94GG4OsRzJU%2B3st1d9d%2FVMI273sAGOqUBJBb9QkMd%2BSolTf9UvwfZ48f7Od%2B4hkKDpkIB9yuB%2FXCTKFiwBtuI8hFTF3losuBh8uSPlDeOBBZeKvoPaLoG0%2FxPiO%2BLSUs2L%2BJQFNKTfbBkKw2nUplwIi76LXNeQbTYQnWs14IdBag4pEoeAmh38F5wjW5RgwTPUsLyd8pEMYQESjz%2BhNe4hL9YCr%2BTEJKAgdFOoP8nXpTJtv%2FOAgLJwJ%2Fo%2Bp9I&X-Amz-Signature=1e20c0bdc2d9ce4b8d73a09631439dbe7f989a3e8a33696a53d15cc22d884869&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSTVIRP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCkMqk%2BrDNLnN2Kti%2F29t6IKaIM8GgWAV9IOxTkH9eChwIgUk%2FvILih6f4MysI32hbbpRJrMh7MJILM9t2XDvkav74q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPDDidab6WHCrgfNZyrcA9LdECLTou2zl124Eezwq%2FbKwRwhdGkSXTbzhB%2FoCo3gusHwkMxPEW3K2X5IYIPg4fdHMa5T4S3qjBnvLk2N%2F%2FSVT1h12MuOsNwWbs%2FJ04gLNg7J%2BcJNi1WXH26oFM%2BlMx70A9EAvTa2KamRMbMsO2Nkl8ZxYH20VAHIsI27IwtbhWuNH2IQRta6XQzr%2FOj2LWpbVqjR1JvD%2Fa65OgvWgtmD7SMT8V5P0IpqC4cFrn3iwUYk%2Ba%2FAtQJaJv28n%2Fme4247YDFhK3743B61W1rvN6AGcXzi5G3iboCVUM7NzfXPAqmt8%2FhVqiuQvbO4yoWyx9HuB9BuG0MbiWzXaYFj%2BTKax84L0fyb3E%2FOXvuJG5ds1R7dEeu%2FxN%2B4W9g1GR3hHu4xWX0yrVUrR04S9Dx0Upp7JvQWtOe2p2ix53aDG%2BwReYc2MdDgu642WDnGoShy1hx8QG%2FambzxCGJGy5nham9N07xEkPrhkdX%2BmuNHSuYcT57u9F3cRCdBEuRGuAIOcSSW9wLJmpm3R3lprRmpBPOdTC4Tq20kmMYTnTSPUNCMNJwHc25G2dlGka53eITMI1ICKTphmUT6nIzRHu4qekwwtEaRmtiS9vr0JUO94GG4OsRzJU%2B3st1d9d%2FVMI273sAGOqUBJBb9QkMd%2BSolTf9UvwfZ48f7Od%2B4hkKDpkIB9yuB%2FXCTKFiwBtuI8hFTF3losuBh8uSPlDeOBBZeKvoPaLoG0%2FxPiO%2BLSUs2L%2BJQFNKTfbBkKw2nUplwIi76LXNeQbTYQnWs14IdBag4pEoeAmh38F5wjW5RgwTPUsLyd8pEMYQESjz%2BhNe4hL9YCr%2BTEJKAgdFOoP8nXpTJtv%2FOAgLJwJ%2Fo%2Bp9I&X-Amz-Signature=93a917cb41b4e45df7034121cbfd345da0d49b96dca11ceac08e0bab4ec2dd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSTVIRP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCkMqk%2BrDNLnN2Kti%2F29t6IKaIM8GgWAV9IOxTkH9eChwIgUk%2FvILih6f4MysI32hbbpRJrMh7MJILM9t2XDvkav74q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPDDidab6WHCrgfNZyrcA9LdECLTou2zl124Eezwq%2FbKwRwhdGkSXTbzhB%2FoCo3gusHwkMxPEW3K2X5IYIPg4fdHMa5T4S3qjBnvLk2N%2F%2FSVT1h12MuOsNwWbs%2FJ04gLNg7J%2BcJNi1WXH26oFM%2BlMx70A9EAvTa2KamRMbMsO2Nkl8ZxYH20VAHIsI27IwtbhWuNH2IQRta6XQzr%2FOj2LWpbVqjR1JvD%2Fa65OgvWgtmD7SMT8V5P0IpqC4cFrn3iwUYk%2Ba%2FAtQJaJv28n%2Fme4247YDFhK3743B61W1rvN6AGcXzi5G3iboCVUM7NzfXPAqmt8%2FhVqiuQvbO4yoWyx9HuB9BuG0MbiWzXaYFj%2BTKax84L0fyb3E%2FOXvuJG5ds1R7dEeu%2FxN%2B4W9g1GR3hHu4xWX0yrVUrR04S9Dx0Upp7JvQWtOe2p2ix53aDG%2BwReYc2MdDgu642WDnGoShy1hx8QG%2FambzxCGJGy5nham9N07xEkPrhkdX%2BmuNHSuYcT57u9F3cRCdBEuRGuAIOcSSW9wLJmpm3R3lprRmpBPOdTC4Tq20kmMYTnTSPUNCMNJwHc25G2dlGka53eITMI1ICKTphmUT6nIzRHu4qekwwtEaRmtiS9vr0JUO94GG4OsRzJU%2B3st1d9d%2FVMI273sAGOqUBJBb9QkMd%2BSolTf9UvwfZ48f7Od%2B4hkKDpkIB9yuB%2FXCTKFiwBtuI8hFTF3losuBh8uSPlDeOBBZeKvoPaLoG0%2FxPiO%2BLSUs2L%2BJQFNKTfbBkKw2nUplwIi76LXNeQbTYQnWs14IdBag4pEoeAmh38F5wjW5RgwTPUsLyd8pEMYQESjz%2BhNe4hL9YCr%2BTEJKAgdFOoP8nXpTJtv%2FOAgLJwJ%2Fo%2Bp9I&X-Amz-Signature=f9fb34f55d0c7f5ed5cfd0f82980018a59683cc3bc90887befb3ca7260cb303e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSTVIRP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCkMqk%2BrDNLnN2Kti%2F29t6IKaIM8GgWAV9IOxTkH9eChwIgUk%2FvILih6f4MysI32hbbpRJrMh7MJILM9t2XDvkav74q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPDDidab6WHCrgfNZyrcA9LdECLTou2zl124Eezwq%2FbKwRwhdGkSXTbzhB%2FoCo3gusHwkMxPEW3K2X5IYIPg4fdHMa5T4S3qjBnvLk2N%2F%2FSVT1h12MuOsNwWbs%2FJ04gLNg7J%2BcJNi1WXH26oFM%2BlMx70A9EAvTa2KamRMbMsO2Nkl8ZxYH20VAHIsI27IwtbhWuNH2IQRta6XQzr%2FOj2LWpbVqjR1JvD%2Fa65OgvWgtmD7SMT8V5P0IpqC4cFrn3iwUYk%2Ba%2FAtQJaJv28n%2Fme4247YDFhK3743B61W1rvN6AGcXzi5G3iboCVUM7NzfXPAqmt8%2FhVqiuQvbO4yoWyx9HuB9BuG0MbiWzXaYFj%2BTKax84L0fyb3E%2FOXvuJG5ds1R7dEeu%2FxN%2B4W9g1GR3hHu4xWX0yrVUrR04S9Dx0Upp7JvQWtOe2p2ix53aDG%2BwReYc2MdDgu642WDnGoShy1hx8QG%2FambzxCGJGy5nham9N07xEkPrhkdX%2BmuNHSuYcT57u9F3cRCdBEuRGuAIOcSSW9wLJmpm3R3lprRmpBPOdTC4Tq20kmMYTnTSPUNCMNJwHc25G2dlGka53eITMI1ICKTphmUT6nIzRHu4qekwwtEaRmtiS9vr0JUO94GG4OsRzJU%2B3st1d9d%2FVMI273sAGOqUBJBb9QkMd%2BSolTf9UvwfZ48f7Od%2B4hkKDpkIB9yuB%2FXCTKFiwBtuI8hFTF3losuBh8uSPlDeOBBZeKvoPaLoG0%2FxPiO%2BLSUs2L%2BJQFNKTfbBkKw2nUplwIi76LXNeQbTYQnWs14IdBag4pEoeAmh38F5wjW5RgwTPUsLyd8pEMYQESjz%2BhNe4hL9YCr%2BTEJKAgdFOoP8nXpTJtv%2FOAgLJwJ%2Fo%2Bp9I&X-Amz-Signature=8ff7cada4b51dc06674f4ae54aa95da3bd32147d719419ea41f66239b2f9d8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSTVIRP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCkMqk%2BrDNLnN2Kti%2F29t6IKaIM8GgWAV9IOxTkH9eChwIgUk%2FvILih6f4MysI32hbbpRJrMh7MJILM9t2XDvkav74q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPDDidab6WHCrgfNZyrcA9LdECLTou2zl124Eezwq%2FbKwRwhdGkSXTbzhB%2FoCo3gusHwkMxPEW3K2X5IYIPg4fdHMa5T4S3qjBnvLk2N%2F%2FSVT1h12MuOsNwWbs%2FJ04gLNg7J%2BcJNi1WXH26oFM%2BlMx70A9EAvTa2KamRMbMsO2Nkl8ZxYH20VAHIsI27IwtbhWuNH2IQRta6XQzr%2FOj2LWpbVqjR1JvD%2Fa65OgvWgtmD7SMT8V5P0IpqC4cFrn3iwUYk%2Ba%2FAtQJaJv28n%2Fme4247YDFhK3743B61W1rvN6AGcXzi5G3iboCVUM7NzfXPAqmt8%2FhVqiuQvbO4yoWyx9HuB9BuG0MbiWzXaYFj%2BTKax84L0fyb3E%2FOXvuJG5ds1R7dEeu%2FxN%2B4W9g1GR3hHu4xWX0yrVUrR04S9Dx0Upp7JvQWtOe2p2ix53aDG%2BwReYc2MdDgu642WDnGoShy1hx8QG%2FambzxCGJGy5nham9N07xEkPrhkdX%2BmuNHSuYcT57u9F3cRCdBEuRGuAIOcSSW9wLJmpm3R3lprRmpBPOdTC4Tq20kmMYTnTSPUNCMNJwHc25G2dlGka53eITMI1ICKTphmUT6nIzRHu4qekwwtEaRmtiS9vr0JUO94GG4OsRzJU%2B3st1d9d%2FVMI273sAGOqUBJBb9QkMd%2BSolTf9UvwfZ48f7Od%2B4hkKDpkIB9yuB%2FXCTKFiwBtuI8hFTF3losuBh8uSPlDeOBBZeKvoPaLoG0%2FxPiO%2BLSUs2L%2BJQFNKTfbBkKw2nUplwIi76LXNeQbTYQnWs14IdBag4pEoeAmh38F5wjW5RgwTPUsLyd8pEMYQESjz%2BhNe4hL9YCr%2BTEJKAgdFOoP8nXpTJtv%2FOAgLJwJ%2Fo%2Bp9I&X-Amz-Signature=1f7ca982c820ae3e5df17e1f75ecfdbfadf077c979f56db188511ead466241e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSTVIRP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCkMqk%2BrDNLnN2Kti%2F29t6IKaIM8GgWAV9IOxTkH9eChwIgUk%2FvILih6f4MysI32hbbpRJrMh7MJILM9t2XDvkav74q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPDDidab6WHCrgfNZyrcA9LdECLTou2zl124Eezwq%2FbKwRwhdGkSXTbzhB%2FoCo3gusHwkMxPEW3K2X5IYIPg4fdHMa5T4S3qjBnvLk2N%2F%2FSVT1h12MuOsNwWbs%2FJ04gLNg7J%2BcJNi1WXH26oFM%2BlMx70A9EAvTa2KamRMbMsO2Nkl8ZxYH20VAHIsI27IwtbhWuNH2IQRta6XQzr%2FOj2LWpbVqjR1JvD%2Fa65OgvWgtmD7SMT8V5P0IpqC4cFrn3iwUYk%2Ba%2FAtQJaJv28n%2Fme4247YDFhK3743B61W1rvN6AGcXzi5G3iboCVUM7NzfXPAqmt8%2FhVqiuQvbO4yoWyx9HuB9BuG0MbiWzXaYFj%2BTKax84L0fyb3E%2FOXvuJG5ds1R7dEeu%2FxN%2B4W9g1GR3hHu4xWX0yrVUrR04S9Dx0Upp7JvQWtOe2p2ix53aDG%2BwReYc2MdDgu642WDnGoShy1hx8QG%2FambzxCGJGy5nham9N07xEkPrhkdX%2BmuNHSuYcT57u9F3cRCdBEuRGuAIOcSSW9wLJmpm3R3lprRmpBPOdTC4Tq20kmMYTnTSPUNCMNJwHc25G2dlGka53eITMI1ICKTphmUT6nIzRHu4qekwwtEaRmtiS9vr0JUO94GG4OsRzJU%2B3st1d9d%2FVMI273sAGOqUBJBb9QkMd%2BSolTf9UvwfZ48f7Od%2B4hkKDpkIB9yuB%2FXCTKFiwBtuI8hFTF3losuBh8uSPlDeOBBZeKvoPaLoG0%2FxPiO%2BLSUs2L%2BJQFNKTfbBkKw2nUplwIi76LXNeQbTYQnWs14IdBag4pEoeAmh38F5wjW5RgwTPUsLyd8pEMYQESjz%2BhNe4hL9YCr%2BTEJKAgdFOoP8nXpTJtv%2FOAgLJwJ%2Fo%2Bp9I&X-Amz-Signature=4ddaa4b7abd2a247ea71893670ccf949843d582f6cad6e577cc5e908b97513eb&X-Amz-SignedHeaders=host&x-id=GetObject)
