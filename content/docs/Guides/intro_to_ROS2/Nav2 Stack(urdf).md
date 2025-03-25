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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXOEP7A%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD0irpQzYDzJzcjCs%2FkvIwugiDULZd5ynb2S0ggyk%2BNwIgFic2tOnoJfPtRroCM6pROtwA4Sm2aSePzGmk5dLnv4Eq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE7ElDX%2BT1pm8z%2BobyrcA0i6ErTcuiAAzM1wroJDbGRGHiYtBKXuNLCbvlmJVrmXL%2BmTPz14iesdiC32n9DqSYmzvz%2BRHezB7rIRvBNJ0Fh888bnTFsnJ4oN5EvaFAck0kz2Y2ew1nCYb1lls724xmJFHfnFYdS%2BLa8gLVF5mjo0U1%2BHQHpOHJ0UhInOFVLZ3AmsglrwhItoLPm%2BYYF1ETI3GkTpmZVUuFU1L1oPHqF6NVAMS82%2B2HnUZbO8CHUgYaSsdLphnKlrB7hCCR1rdw8XdsrROFty7svhbAdyC1Zcr8PtCb3H%2Bb5pPJBPA7%2FCcHSsc5r4wpjULRzGuCDAvo2%2FzuDtUwlSBSwg2fhHcFCIVhwtHSy3Zad7yagUwSp3hwOEcUu8IC6%2B5JL4jcpZEXlP%2FV0zsnK9KDK58X6ms6MeRApA6A0eWzPR13AvW8Ea%2BmnWQ9PvBnpv00WeJhWOIYgvvniCcvwAKpIU43UsZLNAHNkElom38oif8qyetmcHOp8D0uURF0ad%2FGG38cT8nOu2BLgp5mZS3pqVGl0h0qnpfgEwzYAjUiN6wN8O1QthahPvpzb3UeBnp8S%2FpJxri2tCoN1kg4O1SjJWirK1u%2BhkGNQyfe1wpaxq0GgTSDsTnpPqs8%2F80Svb8tMTMKrGir8GOqUB1hl53UKgGaIxUAs%2B%2FlZx2ximYbPlcBgSHtkcwMvfg9cDkRfD24OnfRWslOEnibeB%2BFBTdEnfEiWFET6l978cinAEVR9irGuc5JdC5F1pxs%2B8ZIYxSGBRdZesn4rvL1JiZDueTVFXBFXX0DT1iirZBqGHBT4XfjZfmqmx%2BewNJEQY0v8lrMlizOMggpi17oN%2BmvlCzZc2DfA8TNLdLQGpVxWvpCD6&X-Amz-Signature=217ab5609ae380bfc90b7aa44e04d4c52f4c9843b12eb41a4c63bffc27ffb0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXOEP7A%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD0irpQzYDzJzcjCs%2FkvIwugiDULZd5ynb2S0ggyk%2BNwIgFic2tOnoJfPtRroCM6pROtwA4Sm2aSePzGmk5dLnv4Eq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE7ElDX%2BT1pm8z%2BobyrcA0i6ErTcuiAAzM1wroJDbGRGHiYtBKXuNLCbvlmJVrmXL%2BmTPz14iesdiC32n9DqSYmzvz%2BRHezB7rIRvBNJ0Fh888bnTFsnJ4oN5EvaFAck0kz2Y2ew1nCYb1lls724xmJFHfnFYdS%2BLa8gLVF5mjo0U1%2BHQHpOHJ0UhInOFVLZ3AmsglrwhItoLPm%2BYYF1ETI3GkTpmZVUuFU1L1oPHqF6NVAMS82%2B2HnUZbO8CHUgYaSsdLphnKlrB7hCCR1rdw8XdsrROFty7svhbAdyC1Zcr8PtCb3H%2Bb5pPJBPA7%2FCcHSsc5r4wpjULRzGuCDAvo2%2FzuDtUwlSBSwg2fhHcFCIVhwtHSy3Zad7yagUwSp3hwOEcUu8IC6%2B5JL4jcpZEXlP%2FV0zsnK9KDK58X6ms6MeRApA6A0eWzPR13AvW8Ea%2BmnWQ9PvBnpv00WeJhWOIYgvvniCcvwAKpIU43UsZLNAHNkElom38oif8qyetmcHOp8D0uURF0ad%2FGG38cT8nOu2BLgp5mZS3pqVGl0h0qnpfgEwzYAjUiN6wN8O1QthahPvpzb3UeBnp8S%2FpJxri2tCoN1kg4O1SjJWirK1u%2BhkGNQyfe1wpaxq0GgTSDsTnpPqs8%2F80Svb8tMTMKrGir8GOqUB1hl53UKgGaIxUAs%2B%2FlZx2ximYbPlcBgSHtkcwMvfg9cDkRfD24OnfRWslOEnibeB%2BFBTdEnfEiWFET6l978cinAEVR9irGuc5JdC5F1pxs%2B8ZIYxSGBRdZesn4rvL1JiZDueTVFXBFXX0DT1iirZBqGHBT4XfjZfmqmx%2BewNJEQY0v8lrMlizOMggpi17oN%2BmvlCzZc2DfA8TNLdLQGpVxWvpCD6&X-Amz-Signature=e6dcac74c39056265ac936b66d6524db3225d2a1d4e440c24c8a1829b12999a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXOEP7A%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD0irpQzYDzJzcjCs%2FkvIwugiDULZd5ynb2S0ggyk%2BNwIgFic2tOnoJfPtRroCM6pROtwA4Sm2aSePzGmk5dLnv4Eq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE7ElDX%2BT1pm8z%2BobyrcA0i6ErTcuiAAzM1wroJDbGRGHiYtBKXuNLCbvlmJVrmXL%2BmTPz14iesdiC32n9DqSYmzvz%2BRHezB7rIRvBNJ0Fh888bnTFsnJ4oN5EvaFAck0kz2Y2ew1nCYb1lls724xmJFHfnFYdS%2BLa8gLVF5mjo0U1%2BHQHpOHJ0UhInOFVLZ3AmsglrwhItoLPm%2BYYF1ETI3GkTpmZVUuFU1L1oPHqF6NVAMS82%2B2HnUZbO8CHUgYaSsdLphnKlrB7hCCR1rdw8XdsrROFty7svhbAdyC1Zcr8PtCb3H%2Bb5pPJBPA7%2FCcHSsc5r4wpjULRzGuCDAvo2%2FzuDtUwlSBSwg2fhHcFCIVhwtHSy3Zad7yagUwSp3hwOEcUu8IC6%2B5JL4jcpZEXlP%2FV0zsnK9KDK58X6ms6MeRApA6A0eWzPR13AvW8Ea%2BmnWQ9PvBnpv00WeJhWOIYgvvniCcvwAKpIU43UsZLNAHNkElom38oif8qyetmcHOp8D0uURF0ad%2FGG38cT8nOu2BLgp5mZS3pqVGl0h0qnpfgEwzYAjUiN6wN8O1QthahPvpzb3UeBnp8S%2FpJxri2tCoN1kg4O1SjJWirK1u%2BhkGNQyfe1wpaxq0GgTSDsTnpPqs8%2F80Svb8tMTMKrGir8GOqUB1hl53UKgGaIxUAs%2B%2FlZx2ximYbPlcBgSHtkcwMvfg9cDkRfD24OnfRWslOEnibeB%2BFBTdEnfEiWFET6l978cinAEVR9irGuc5JdC5F1pxs%2B8ZIYxSGBRdZesn4rvL1JiZDueTVFXBFXX0DT1iirZBqGHBT4XfjZfmqmx%2BewNJEQY0v8lrMlizOMggpi17oN%2BmvlCzZc2DfA8TNLdLQGpVxWvpCD6&X-Amz-Signature=f40cd1dddd8ea1e67a3bb08589bd71a1b4a6fc04588a6c96e5331e4e8df3480b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXOEP7A%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD0irpQzYDzJzcjCs%2FkvIwugiDULZd5ynb2S0ggyk%2BNwIgFic2tOnoJfPtRroCM6pROtwA4Sm2aSePzGmk5dLnv4Eq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE7ElDX%2BT1pm8z%2BobyrcA0i6ErTcuiAAzM1wroJDbGRGHiYtBKXuNLCbvlmJVrmXL%2BmTPz14iesdiC32n9DqSYmzvz%2BRHezB7rIRvBNJ0Fh888bnTFsnJ4oN5EvaFAck0kz2Y2ew1nCYb1lls724xmJFHfnFYdS%2BLa8gLVF5mjo0U1%2BHQHpOHJ0UhInOFVLZ3AmsglrwhItoLPm%2BYYF1ETI3GkTpmZVUuFU1L1oPHqF6NVAMS82%2B2HnUZbO8CHUgYaSsdLphnKlrB7hCCR1rdw8XdsrROFty7svhbAdyC1Zcr8PtCb3H%2Bb5pPJBPA7%2FCcHSsc5r4wpjULRzGuCDAvo2%2FzuDtUwlSBSwg2fhHcFCIVhwtHSy3Zad7yagUwSp3hwOEcUu8IC6%2B5JL4jcpZEXlP%2FV0zsnK9KDK58X6ms6MeRApA6A0eWzPR13AvW8Ea%2BmnWQ9PvBnpv00WeJhWOIYgvvniCcvwAKpIU43UsZLNAHNkElom38oif8qyetmcHOp8D0uURF0ad%2FGG38cT8nOu2BLgp5mZS3pqVGl0h0qnpfgEwzYAjUiN6wN8O1QthahPvpzb3UeBnp8S%2FpJxri2tCoN1kg4O1SjJWirK1u%2BhkGNQyfe1wpaxq0GgTSDsTnpPqs8%2F80Svb8tMTMKrGir8GOqUB1hl53UKgGaIxUAs%2B%2FlZx2ximYbPlcBgSHtkcwMvfg9cDkRfD24OnfRWslOEnibeB%2BFBTdEnfEiWFET6l978cinAEVR9irGuc5JdC5F1pxs%2B8ZIYxSGBRdZesn4rvL1JiZDueTVFXBFXX0DT1iirZBqGHBT4XfjZfmqmx%2BewNJEQY0v8lrMlizOMggpi17oN%2BmvlCzZc2DfA8TNLdLQGpVxWvpCD6&X-Amz-Signature=b238f20eef639be8406b6ab6ffb824d8d33ca64cd7912fc95c5265989779aa07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXOEP7A%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD0irpQzYDzJzcjCs%2FkvIwugiDULZd5ynb2S0ggyk%2BNwIgFic2tOnoJfPtRroCM6pROtwA4Sm2aSePzGmk5dLnv4Eq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE7ElDX%2BT1pm8z%2BobyrcA0i6ErTcuiAAzM1wroJDbGRGHiYtBKXuNLCbvlmJVrmXL%2BmTPz14iesdiC32n9DqSYmzvz%2BRHezB7rIRvBNJ0Fh888bnTFsnJ4oN5EvaFAck0kz2Y2ew1nCYb1lls724xmJFHfnFYdS%2BLa8gLVF5mjo0U1%2BHQHpOHJ0UhInOFVLZ3AmsglrwhItoLPm%2BYYF1ETI3GkTpmZVUuFU1L1oPHqF6NVAMS82%2B2HnUZbO8CHUgYaSsdLphnKlrB7hCCR1rdw8XdsrROFty7svhbAdyC1Zcr8PtCb3H%2Bb5pPJBPA7%2FCcHSsc5r4wpjULRzGuCDAvo2%2FzuDtUwlSBSwg2fhHcFCIVhwtHSy3Zad7yagUwSp3hwOEcUu8IC6%2B5JL4jcpZEXlP%2FV0zsnK9KDK58X6ms6MeRApA6A0eWzPR13AvW8Ea%2BmnWQ9PvBnpv00WeJhWOIYgvvniCcvwAKpIU43UsZLNAHNkElom38oif8qyetmcHOp8D0uURF0ad%2FGG38cT8nOu2BLgp5mZS3pqVGl0h0qnpfgEwzYAjUiN6wN8O1QthahPvpzb3UeBnp8S%2FpJxri2tCoN1kg4O1SjJWirK1u%2BhkGNQyfe1wpaxq0GgTSDsTnpPqs8%2F80Svb8tMTMKrGir8GOqUB1hl53UKgGaIxUAs%2B%2FlZx2ximYbPlcBgSHtkcwMvfg9cDkRfD24OnfRWslOEnibeB%2BFBTdEnfEiWFET6l978cinAEVR9irGuc5JdC5F1pxs%2B8ZIYxSGBRdZesn4rvL1JiZDueTVFXBFXX0DT1iirZBqGHBT4XfjZfmqmx%2BewNJEQY0v8lrMlizOMggpi17oN%2BmvlCzZc2DfA8TNLdLQGpVxWvpCD6&X-Amz-Signature=14b90390f4be3ce70203fd343d2d4d4be58b7299eff7f450d017db40acddeea6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXOEP7A%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD0irpQzYDzJzcjCs%2FkvIwugiDULZd5ynb2S0ggyk%2BNwIgFic2tOnoJfPtRroCM6pROtwA4Sm2aSePzGmk5dLnv4Eq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDE7ElDX%2BT1pm8z%2BobyrcA0i6ErTcuiAAzM1wroJDbGRGHiYtBKXuNLCbvlmJVrmXL%2BmTPz14iesdiC32n9DqSYmzvz%2BRHezB7rIRvBNJ0Fh888bnTFsnJ4oN5EvaFAck0kz2Y2ew1nCYb1lls724xmJFHfnFYdS%2BLa8gLVF5mjo0U1%2BHQHpOHJ0UhInOFVLZ3AmsglrwhItoLPm%2BYYF1ETI3GkTpmZVUuFU1L1oPHqF6NVAMS82%2B2HnUZbO8CHUgYaSsdLphnKlrB7hCCR1rdw8XdsrROFty7svhbAdyC1Zcr8PtCb3H%2Bb5pPJBPA7%2FCcHSsc5r4wpjULRzGuCDAvo2%2FzuDtUwlSBSwg2fhHcFCIVhwtHSy3Zad7yagUwSp3hwOEcUu8IC6%2B5JL4jcpZEXlP%2FV0zsnK9KDK58X6ms6MeRApA6A0eWzPR13AvW8Ea%2BmnWQ9PvBnpv00WeJhWOIYgvvniCcvwAKpIU43UsZLNAHNkElom38oif8qyetmcHOp8D0uURF0ad%2FGG38cT8nOu2BLgp5mZS3pqVGl0h0qnpfgEwzYAjUiN6wN8O1QthahPvpzb3UeBnp8S%2FpJxri2tCoN1kg4O1SjJWirK1u%2BhkGNQyfe1wpaxq0GgTSDsTnpPqs8%2F80Svb8tMTMKrGir8GOqUB1hl53UKgGaIxUAs%2B%2FlZx2ximYbPlcBgSHtkcwMvfg9cDkRfD24OnfRWslOEnibeB%2BFBTdEnfEiWFET6l978cinAEVR9irGuc5JdC5F1pxs%2B8ZIYxSGBRdZesn4rvL1JiZDueTVFXBFXX0DT1iirZBqGHBT4XfjZfmqmx%2BewNJEQY0v8lrMlizOMggpi17oN%2BmvlCzZc2DfA8TNLdLQGpVxWvpCD6&X-Amz-Signature=1834ed68d0e5862bcfcab19e82e7f4c2e9b05c56856b171ebf37ec5c77f3e2ef&X-Amz-SignedHeaders=host&x-id=GetObject)
