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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=1a49578162a96afb84060e53316f58548b078bdd496ebacfeacc403e5052d84a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=02b0d5b8d0bb29620bad54a6c671414babd08300c4a16367f242d086efae23ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=d72c6db4d6f06b16b5d869882edc712f3b6100e82b83ce66fee674abb546249d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=c4d9bb6fdf00b1cc2c67c02ff14ad6845b4b2a0a8fb470bac70133edb12f039e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=a83e300b15865d906a16c2bbd131e030c328908da3592e77a1e9109b306eb94d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMAMQDS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCh24kKQCSB8qu82rFYWMDKqk%2FPTQhWeqqUJpNTVMertQIgG00CPBFWT40DYXnoksL3e1VIwKiEnPGKSH6hul%2BJRPgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmEf1yopMZ0fRQWuSrcA5Zw3G65KHb1aMB%2FunIQS2a%2Bow2pWTYjuum%2BWwA604eVg%2Fg23vt4t9A63w%2BClB%2Fk7E1mvETuYEfl39lpVRbX4VJ8seSzHDtyZ1seR64UvVUgBVb%2BsV%2Be%2FkdUAnAnbACPGYaIgLbhOltjsf%2B%2BZBWYT4VqR61ou6KnaQepwYZbmfUozc2jCDqF6PRHSrT5gkQsV7bSLlay9ykqHlw3LHgEEJ7HQrvt0Xr6DDk566fFCF3Xb4WqTmnGqXAMSi8Pn8NgqahtDPnkbtyh58gZE7314B4JbdZ3xv6PFLLWJbZf3DJwj7wvoKoM0CUZbhYIYuPe0FehHgqAMHFo%2FQCszVl3vu9zm%2FWwVN7jrTmWKSti1pwYiLbEHLgSppSh7V4KxkgppgHf2mtpJYzP9k6MPs%2BCcdseykZ44wNVkRTTtI1gu9L2ZFIH13UxR1rBRQaN%2FaCUsm1stwrrYRzEDrL2LE4OLt6c1uizFta0B2IrYA%2BgMK0OWtDcrHl6kjr5aj6Vy3TN27eefSLsuz0toN5U%2B8egCe4ibA50MycG%2FmIVhQosXI3maaD%2Fy9vglFC6BS9DnKEi7NqvBtvcskFTrghkuqPyFvZtLwNecBjD%2BhSjCR7kyo7WTIQ9Jlj%2FQVG6JgYZMJm7%2BL4GOqUBI35AtVM3%2BCfq3vl4M%2FWCtauqrskeLaLiKdrjJh%2BAQoeoD%2FlUr2Nml%2Bkvf3KW58i3HuMXGywcxfibFxONiK9%2FACrqPyqs8IdFg9SFhRikoxl%2B41NEb3h5Li3vD%2FGwAWW2RwhsSarPWsAUiLgOBo8dje7LawUrBT4H1RMVUI2bBb7w3fkBu59O4jkJtB658CUqTiRBwXXbKkDpskx%2FEA%2F94FHpKF72&X-Amz-Signature=dea1ae2618fb44a25df67131c1b891481be6238aa5f62ac02ecc4f7e32926869&X-Amz-SignedHeaders=host&x-id=GetObject)
