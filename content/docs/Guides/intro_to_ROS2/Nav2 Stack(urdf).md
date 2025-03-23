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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HLCZ7X%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCe1n8rv9eJ0JW5fUwf4toTgJM2Sjc4gXYvq44a6ln%2BCwIgfG1VTKNp1tOPvP%2BY0nO5zG4Eqr0c7xKa7Rq3e69WEJwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH4cVe%2FWU0PiXWOeSrcA81z1UCp8frA%2FH3sUmgFKCZb%2BlX%2Fz8an9NBMK4J2px7v1yf%2FWmkhYK3PniPDKZx2AGuman9%2BrHWsWNTOcmt24zKMUbsmbyromgf3WHVQj4pb14VPVwsLYJjnGzK0FCruJRpqzU8%2FSFanTULx2GhVa%2BgQ15%2Bn5YNwcMpkHO%2F%2FHRvW1XMEzCBlrRyUrl7IcBidoDZgGq0N9yTizEvevQbS%2BDpzHF554dvbHVn7P10z5e6cZtpQRNIXjAm0KjlMf4JfGNx%2F79xfXzPt6VKqozN1nI8OAuhob9JDsDTMCoSStciwc5Fj99Q1a6O8FLJ5GbEHTVDmXf%2FU%2BdztmTjuceyspfrFrO6KnQUFnULe0qLfegK1kf87M9Uaz%2B1SBoOwPpKyPx%2F8t5YoF2wFV8JfWXNzKlIPqRz5xpX7h7blOQAdOwgbTW84aDkZedyl8YDJCc9WucZEEze9ub7%2BEK4de3T1RY6p510qA%2Fed7hxiOR8wY68%2FP%2Fk4hPYqWiZ88ffg8m9ab8h%2Btlzne7pPMUVI6GNjedInc%2BdkrLkPI2yuLPyn9h%2BaV2Kzo0WCf1BlLtGOf5lh34o2Jew2OIeNv2yjwyYvF5DQrCurBsDZnY7pcbBERX4HH55PpNf0T7GkDsioMMTz%2Fr4GOqUBpOOh2bHAmUqO3Olsfitxs2ptmURa0LUMDkdbGPgeUchsA44t2XvIPPVofj2VVqIS3Lm6%2Fg%2BW9rc7nwlILAol%2Bw6wC5b6H5m%2Bs2ct4dMIbM5%2Ba3LZ4YieMxK8I85Hz7UMW4WUvBfvA%2F%2BykJgM4gSdmavecyntK3%2FXs3ayHErBCYLDVbJVeURsJwgc9S11PUVjokCazVxZiZCDVeqk1nRihCjrcDI8&X-Amz-Signature=c9117d35ca0f7eb67d6645e5c249779d8729c354dd03bcc854dc08f5ab735bce&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HLCZ7X%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCe1n8rv9eJ0JW5fUwf4toTgJM2Sjc4gXYvq44a6ln%2BCwIgfG1VTKNp1tOPvP%2BY0nO5zG4Eqr0c7xKa7Rq3e69WEJwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH4cVe%2FWU0PiXWOeSrcA81z1UCp8frA%2FH3sUmgFKCZb%2BlX%2Fz8an9NBMK4J2px7v1yf%2FWmkhYK3PniPDKZx2AGuman9%2BrHWsWNTOcmt24zKMUbsmbyromgf3WHVQj4pb14VPVwsLYJjnGzK0FCruJRpqzU8%2FSFanTULx2GhVa%2BgQ15%2Bn5YNwcMpkHO%2F%2FHRvW1XMEzCBlrRyUrl7IcBidoDZgGq0N9yTizEvevQbS%2BDpzHF554dvbHVn7P10z5e6cZtpQRNIXjAm0KjlMf4JfGNx%2F79xfXzPt6VKqozN1nI8OAuhob9JDsDTMCoSStciwc5Fj99Q1a6O8FLJ5GbEHTVDmXf%2FU%2BdztmTjuceyspfrFrO6KnQUFnULe0qLfegK1kf87M9Uaz%2B1SBoOwPpKyPx%2F8t5YoF2wFV8JfWXNzKlIPqRz5xpX7h7blOQAdOwgbTW84aDkZedyl8YDJCc9WucZEEze9ub7%2BEK4de3T1RY6p510qA%2Fed7hxiOR8wY68%2FP%2Fk4hPYqWiZ88ffg8m9ab8h%2Btlzne7pPMUVI6GNjedInc%2BdkrLkPI2yuLPyn9h%2BaV2Kzo0WCf1BlLtGOf5lh34o2Jew2OIeNv2yjwyYvF5DQrCurBsDZnY7pcbBERX4HH55PpNf0T7GkDsioMMTz%2Fr4GOqUBpOOh2bHAmUqO3Olsfitxs2ptmURa0LUMDkdbGPgeUchsA44t2XvIPPVofj2VVqIS3Lm6%2Fg%2BW9rc7nwlILAol%2Bw6wC5b6H5m%2Bs2ct4dMIbM5%2Ba3LZ4YieMxK8I85Hz7UMW4WUvBfvA%2F%2BykJgM4gSdmavecyntK3%2FXs3ayHErBCYLDVbJVeURsJwgc9S11PUVjokCazVxZiZCDVeqk1nRihCjrcDI8&X-Amz-Signature=e2a0ce13862d8742f64795012ef9b3ad05bb0d3ae11c936af58f4271db999ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HLCZ7X%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCe1n8rv9eJ0JW5fUwf4toTgJM2Sjc4gXYvq44a6ln%2BCwIgfG1VTKNp1tOPvP%2BY0nO5zG4Eqr0c7xKa7Rq3e69WEJwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH4cVe%2FWU0PiXWOeSrcA81z1UCp8frA%2FH3sUmgFKCZb%2BlX%2Fz8an9NBMK4J2px7v1yf%2FWmkhYK3PniPDKZx2AGuman9%2BrHWsWNTOcmt24zKMUbsmbyromgf3WHVQj4pb14VPVwsLYJjnGzK0FCruJRpqzU8%2FSFanTULx2GhVa%2BgQ15%2Bn5YNwcMpkHO%2F%2FHRvW1XMEzCBlrRyUrl7IcBidoDZgGq0N9yTizEvevQbS%2BDpzHF554dvbHVn7P10z5e6cZtpQRNIXjAm0KjlMf4JfGNx%2F79xfXzPt6VKqozN1nI8OAuhob9JDsDTMCoSStciwc5Fj99Q1a6O8FLJ5GbEHTVDmXf%2FU%2BdztmTjuceyspfrFrO6KnQUFnULe0qLfegK1kf87M9Uaz%2B1SBoOwPpKyPx%2F8t5YoF2wFV8JfWXNzKlIPqRz5xpX7h7blOQAdOwgbTW84aDkZedyl8YDJCc9WucZEEze9ub7%2BEK4de3T1RY6p510qA%2Fed7hxiOR8wY68%2FP%2Fk4hPYqWiZ88ffg8m9ab8h%2Btlzne7pPMUVI6GNjedInc%2BdkrLkPI2yuLPyn9h%2BaV2Kzo0WCf1BlLtGOf5lh34o2Jew2OIeNv2yjwyYvF5DQrCurBsDZnY7pcbBERX4HH55PpNf0T7GkDsioMMTz%2Fr4GOqUBpOOh2bHAmUqO3Olsfitxs2ptmURa0LUMDkdbGPgeUchsA44t2XvIPPVofj2VVqIS3Lm6%2Fg%2BW9rc7nwlILAol%2Bw6wC5b6H5m%2Bs2ct4dMIbM5%2Ba3LZ4YieMxK8I85Hz7UMW4WUvBfvA%2F%2BykJgM4gSdmavecyntK3%2FXs3ayHErBCYLDVbJVeURsJwgc9S11PUVjokCazVxZiZCDVeqk1nRihCjrcDI8&X-Amz-Signature=603f9d15ada31ea9e3451e2fde56395c838dc5fb2835e465cd1e999b6bacdaa8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HLCZ7X%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCe1n8rv9eJ0JW5fUwf4toTgJM2Sjc4gXYvq44a6ln%2BCwIgfG1VTKNp1tOPvP%2BY0nO5zG4Eqr0c7xKa7Rq3e69WEJwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH4cVe%2FWU0PiXWOeSrcA81z1UCp8frA%2FH3sUmgFKCZb%2BlX%2Fz8an9NBMK4J2px7v1yf%2FWmkhYK3PniPDKZx2AGuman9%2BrHWsWNTOcmt24zKMUbsmbyromgf3WHVQj4pb14VPVwsLYJjnGzK0FCruJRpqzU8%2FSFanTULx2GhVa%2BgQ15%2Bn5YNwcMpkHO%2F%2FHRvW1XMEzCBlrRyUrl7IcBidoDZgGq0N9yTizEvevQbS%2BDpzHF554dvbHVn7P10z5e6cZtpQRNIXjAm0KjlMf4JfGNx%2F79xfXzPt6VKqozN1nI8OAuhob9JDsDTMCoSStciwc5Fj99Q1a6O8FLJ5GbEHTVDmXf%2FU%2BdztmTjuceyspfrFrO6KnQUFnULe0qLfegK1kf87M9Uaz%2B1SBoOwPpKyPx%2F8t5YoF2wFV8JfWXNzKlIPqRz5xpX7h7blOQAdOwgbTW84aDkZedyl8YDJCc9WucZEEze9ub7%2BEK4de3T1RY6p510qA%2Fed7hxiOR8wY68%2FP%2Fk4hPYqWiZ88ffg8m9ab8h%2Btlzne7pPMUVI6GNjedInc%2BdkrLkPI2yuLPyn9h%2BaV2Kzo0WCf1BlLtGOf5lh34o2Jew2OIeNv2yjwyYvF5DQrCurBsDZnY7pcbBERX4HH55PpNf0T7GkDsioMMTz%2Fr4GOqUBpOOh2bHAmUqO3Olsfitxs2ptmURa0LUMDkdbGPgeUchsA44t2XvIPPVofj2VVqIS3Lm6%2Fg%2BW9rc7nwlILAol%2Bw6wC5b6H5m%2Bs2ct4dMIbM5%2Ba3LZ4YieMxK8I85Hz7UMW4WUvBfvA%2F%2BykJgM4gSdmavecyntK3%2FXs3ayHErBCYLDVbJVeURsJwgc9S11PUVjokCazVxZiZCDVeqk1nRihCjrcDI8&X-Amz-Signature=d2ef2b954cbc86c31cbaebd00ee787ed6f00980538da007d272c12243ed8a2af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HLCZ7X%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCe1n8rv9eJ0JW5fUwf4toTgJM2Sjc4gXYvq44a6ln%2BCwIgfG1VTKNp1tOPvP%2BY0nO5zG4Eqr0c7xKa7Rq3e69WEJwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH4cVe%2FWU0PiXWOeSrcA81z1UCp8frA%2FH3sUmgFKCZb%2BlX%2Fz8an9NBMK4J2px7v1yf%2FWmkhYK3PniPDKZx2AGuman9%2BrHWsWNTOcmt24zKMUbsmbyromgf3WHVQj4pb14VPVwsLYJjnGzK0FCruJRpqzU8%2FSFanTULx2GhVa%2BgQ15%2Bn5YNwcMpkHO%2F%2FHRvW1XMEzCBlrRyUrl7IcBidoDZgGq0N9yTizEvevQbS%2BDpzHF554dvbHVn7P10z5e6cZtpQRNIXjAm0KjlMf4JfGNx%2F79xfXzPt6VKqozN1nI8OAuhob9JDsDTMCoSStciwc5Fj99Q1a6O8FLJ5GbEHTVDmXf%2FU%2BdztmTjuceyspfrFrO6KnQUFnULe0qLfegK1kf87M9Uaz%2B1SBoOwPpKyPx%2F8t5YoF2wFV8JfWXNzKlIPqRz5xpX7h7blOQAdOwgbTW84aDkZedyl8YDJCc9WucZEEze9ub7%2BEK4de3T1RY6p510qA%2Fed7hxiOR8wY68%2FP%2Fk4hPYqWiZ88ffg8m9ab8h%2Btlzne7pPMUVI6GNjedInc%2BdkrLkPI2yuLPyn9h%2BaV2Kzo0WCf1BlLtGOf5lh34o2Jew2OIeNv2yjwyYvF5DQrCurBsDZnY7pcbBERX4HH55PpNf0T7GkDsioMMTz%2Fr4GOqUBpOOh2bHAmUqO3Olsfitxs2ptmURa0LUMDkdbGPgeUchsA44t2XvIPPVofj2VVqIS3Lm6%2Fg%2BW9rc7nwlILAol%2Bw6wC5b6H5m%2Bs2ct4dMIbM5%2Ba3LZ4YieMxK8I85Hz7UMW4WUvBfvA%2F%2BykJgM4gSdmavecyntK3%2FXs3ayHErBCYLDVbJVeURsJwgc9S11PUVjokCazVxZiZCDVeqk1nRihCjrcDI8&X-Amz-Signature=f0e1db8480010538e2ec29e085534cf36a79f596a2989e22fa2901bda6e57d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HLCZ7X%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCe1n8rv9eJ0JW5fUwf4toTgJM2Sjc4gXYvq44a6ln%2BCwIgfG1VTKNp1tOPvP%2BY0nO5zG4Eqr0c7xKa7Rq3e69WEJwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH4cVe%2FWU0PiXWOeSrcA81z1UCp8frA%2FH3sUmgFKCZb%2BlX%2Fz8an9NBMK4J2px7v1yf%2FWmkhYK3PniPDKZx2AGuman9%2BrHWsWNTOcmt24zKMUbsmbyromgf3WHVQj4pb14VPVwsLYJjnGzK0FCruJRpqzU8%2FSFanTULx2GhVa%2BgQ15%2Bn5YNwcMpkHO%2F%2FHRvW1XMEzCBlrRyUrl7IcBidoDZgGq0N9yTizEvevQbS%2BDpzHF554dvbHVn7P10z5e6cZtpQRNIXjAm0KjlMf4JfGNx%2F79xfXzPt6VKqozN1nI8OAuhob9JDsDTMCoSStciwc5Fj99Q1a6O8FLJ5GbEHTVDmXf%2FU%2BdztmTjuceyspfrFrO6KnQUFnULe0qLfegK1kf87M9Uaz%2B1SBoOwPpKyPx%2F8t5YoF2wFV8JfWXNzKlIPqRz5xpX7h7blOQAdOwgbTW84aDkZedyl8YDJCc9WucZEEze9ub7%2BEK4de3T1RY6p510qA%2Fed7hxiOR8wY68%2FP%2Fk4hPYqWiZ88ffg8m9ab8h%2Btlzne7pPMUVI6GNjedInc%2BdkrLkPI2yuLPyn9h%2BaV2Kzo0WCf1BlLtGOf5lh34o2Jew2OIeNv2yjwyYvF5DQrCurBsDZnY7pcbBERX4HH55PpNf0T7GkDsioMMTz%2Fr4GOqUBpOOh2bHAmUqO3Olsfitxs2ptmURa0LUMDkdbGPgeUchsA44t2XvIPPVofj2VVqIS3Lm6%2Fg%2BW9rc7nwlILAol%2Bw6wC5b6H5m%2Bs2ct4dMIbM5%2Ba3LZ4YieMxK8I85Hz7UMW4WUvBfvA%2F%2BykJgM4gSdmavecyntK3%2FXs3ayHErBCYLDVbJVeURsJwgc9S11PUVjokCazVxZiZCDVeqk1nRihCjrcDI8&X-Amz-Signature=1501633b5f9caf1191ddc541401e3a7736fb7ee1645bc3f55a5c3eb5514b3fda&X-Amz-SignedHeaders=host&x-id=GetObject)
