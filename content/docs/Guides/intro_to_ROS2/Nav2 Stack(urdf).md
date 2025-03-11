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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHXNEJV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKURpeK3RfYHa440wYc9TOfJeUP55cqbilCpbEzhEF8QIgZRxrTwUeDvKiHNjwCRvALHbUDTXtCjCEO7tkm60YNn0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALybCd32G3c5OMvUSrcAz%2BRsaXAKguLOCEgQXABWu02ws4I0nTjaRPctiSHURyUXwP4Brtf9c%2F51wqg5MuQG%2FLW%2FsTtvJGx1QTETpINOCWv6s4m3ByBO7IiF7UuHN8VfqQXwdCrjCYvq9MG5iOMjbXAsscxcv3nIpKqmhNaK05rZ0NPmT%2Fd51zFwomG8BOXvTxaCwrS%2FRMR%2FBWdfHeo14yFMBCccK4aTYY6kBlrE5411Dent50VZk9cLcYk9h71RfDUUCXvqWS%2FuxGu8mAp%2BrQRjVI6838As7vMNcpAvgCKycKoBrybxigMUO%2F6OG6ZCI7Ysbzx3Nb9Rvya6MZ4O9%2BuolzcqFvMJlBuSj0SsI36QFsm0iQZUICrZllzpZehr5DKmbWijBM3D0Amaf56D41FeANIJVcjiOzLSOeeaAir0JweHRo7nkFID28IUGFvwDrp1sfmIkIDQeTN8EhZma%2FywXvgWloc38wugslZdQ9t0CF%2B6aPI4LIaGYg8KNPvwyv2YIEMJKFqzuEnjXk1R5YMcUjyDd5xphCiXc8A1n4%2B70oD4C0WD%2BJo64XWc7IBTBXEU88RTLxYxmfeCnJq1jHR7zrV7wsHhQhv1DYnrv2xnUOyQa7iqFVSmlsV5VtYbeZL7SAwPTqofwTvMLXzwb4GOqUB2%2BfbmmQYo4kWKCMxgSnuyGx%2F7yDwblg8xGaFVyPCNNBH%2FYfRMcYUnm4wjSB0Gy%2Bdb9KJeHwX%2F6el6MyrSc915mByCZJOOGPUDO1kwuUHOwkZFf8%2BpUAE4IG4PFR1jcXlzNVjWTljVc9GXUnP5mUshHFZa2la2FG85GY4kNyfd34nH%2FWNJjNCTSxFe16aXVC7RwkwwuoVdhyyTRdc419gXuIOlbs%2F&X-Amz-Signature=c3bcad63ae49c5f60d061c1ba37a5f87badeb71e4e419732748262ba59e35063&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHXNEJV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKURpeK3RfYHa440wYc9TOfJeUP55cqbilCpbEzhEF8QIgZRxrTwUeDvKiHNjwCRvALHbUDTXtCjCEO7tkm60YNn0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALybCd32G3c5OMvUSrcAz%2BRsaXAKguLOCEgQXABWu02ws4I0nTjaRPctiSHURyUXwP4Brtf9c%2F51wqg5MuQG%2FLW%2FsTtvJGx1QTETpINOCWv6s4m3ByBO7IiF7UuHN8VfqQXwdCrjCYvq9MG5iOMjbXAsscxcv3nIpKqmhNaK05rZ0NPmT%2Fd51zFwomG8BOXvTxaCwrS%2FRMR%2FBWdfHeo14yFMBCccK4aTYY6kBlrE5411Dent50VZk9cLcYk9h71RfDUUCXvqWS%2FuxGu8mAp%2BrQRjVI6838As7vMNcpAvgCKycKoBrybxigMUO%2F6OG6ZCI7Ysbzx3Nb9Rvya6MZ4O9%2BuolzcqFvMJlBuSj0SsI36QFsm0iQZUICrZllzpZehr5DKmbWijBM3D0Amaf56D41FeANIJVcjiOzLSOeeaAir0JweHRo7nkFID28IUGFvwDrp1sfmIkIDQeTN8EhZma%2FywXvgWloc38wugslZdQ9t0CF%2B6aPI4LIaGYg8KNPvwyv2YIEMJKFqzuEnjXk1R5YMcUjyDd5xphCiXc8A1n4%2B70oD4C0WD%2BJo64XWc7IBTBXEU88RTLxYxmfeCnJq1jHR7zrV7wsHhQhv1DYnrv2xnUOyQa7iqFVSmlsV5VtYbeZL7SAwPTqofwTvMLXzwb4GOqUB2%2BfbmmQYo4kWKCMxgSnuyGx%2F7yDwblg8xGaFVyPCNNBH%2FYfRMcYUnm4wjSB0Gy%2Bdb9KJeHwX%2F6el6MyrSc915mByCZJOOGPUDO1kwuUHOwkZFf8%2BpUAE4IG4PFR1jcXlzNVjWTljVc9GXUnP5mUshHFZa2la2FG85GY4kNyfd34nH%2FWNJjNCTSxFe16aXVC7RwkwwuoVdhyyTRdc419gXuIOlbs%2F&X-Amz-Signature=513b9a894eeaac3bce068673ffee5ae7b1be1b509b62e2c55b1aafbd1a23cf6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHXNEJV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKURpeK3RfYHa440wYc9TOfJeUP55cqbilCpbEzhEF8QIgZRxrTwUeDvKiHNjwCRvALHbUDTXtCjCEO7tkm60YNn0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALybCd32G3c5OMvUSrcAz%2BRsaXAKguLOCEgQXABWu02ws4I0nTjaRPctiSHURyUXwP4Brtf9c%2F51wqg5MuQG%2FLW%2FsTtvJGx1QTETpINOCWv6s4m3ByBO7IiF7UuHN8VfqQXwdCrjCYvq9MG5iOMjbXAsscxcv3nIpKqmhNaK05rZ0NPmT%2Fd51zFwomG8BOXvTxaCwrS%2FRMR%2FBWdfHeo14yFMBCccK4aTYY6kBlrE5411Dent50VZk9cLcYk9h71RfDUUCXvqWS%2FuxGu8mAp%2BrQRjVI6838As7vMNcpAvgCKycKoBrybxigMUO%2F6OG6ZCI7Ysbzx3Nb9Rvya6MZ4O9%2BuolzcqFvMJlBuSj0SsI36QFsm0iQZUICrZllzpZehr5DKmbWijBM3D0Amaf56D41FeANIJVcjiOzLSOeeaAir0JweHRo7nkFID28IUGFvwDrp1sfmIkIDQeTN8EhZma%2FywXvgWloc38wugslZdQ9t0CF%2B6aPI4LIaGYg8KNPvwyv2YIEMJKFqzuEnjXk1R5YMcUjyDd5xphCiXc8A1n4%2B70oD4C0WD%2BJo64XWc7IBTBXEU88RTLxYxmfeCnJq1jHR7zrV7wsHhQhv1DYnrv2xnUOyQa7iqFVSmlsV5VtYbeZL7SAwPTqofwTvMLXzwb4GOqUB2%2BfbmmQYo4kWKCMxgSnuyGx%2F7yDwblg8xGaFVyPCNNBH%2FYfRMcYUnm4wjSB0Gy%2Bdb9KJeHwX%2F6el6MyrSc915mByCZJOOGPUDO1kwuUHOwkZFf8%2BpUAE4IG4PFR1jcXlzNVjWTljVc9GXUnP5mUshHFZa2la2FG85GY4kNyfd34nH%2FWNJjNCTSxFe16aXVC7RwkwwuoVdhyyTRdc419gXuIOlbs%2F&X-Amz-Signature=c42c0719f2f6328a3a7b53413364ec572a36fd0f3a69b36f42f245b553bff3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHXNEJV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKURpeK3RfYHa440wYc9TOfJeUP55cqbilCpbEzhEF8QIgZRxrTwUeDvKiHNjwCRvALHbUDTXtCjCEO7tkm60YNn0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALybCd32G3c5OMvUSrcAz%2BRsaXAKguLOCEgQXABWu02ws4I0nTjaRPctiSHURyUXwP4Brtf9c%2F51wqg5MuQG%2FLW%2FsTtvJGx1QTETpINOCWv6s4m3ByBO7IiF7UuHN8VfqQXwdCrjCYvq9MG5iOMjbXAsscxcv3nIpKqmhNaK05rZ0NPmT%2Fd51zFwomG8BOXvTxaCwrS%2FRMR%2FBWdfHeo14yFMBCccK4aTYY6kBlrE5411Dent50VZk9cLcYk9h71RfDUUCXvqWS%2FuxGu8mAp%2BrQRjVI6838As7vMNcpAvgCKycKoBrybxigMUO%2F6OG6ZCI7Ysbzx3Nb9Rvya6MZ4O9%2BuolzcqFvMJlBuSj0SsI36QFsm0iQZUICrZllzpZehr5DKmbWijBM3D0Amaf56D41FeANIJVcjiOzLSOeeaAir0JweHRo7nkFID28IUGFvwDrp1sfmIkIDQeTN8EhZma%2FywXvgWloc38wugslZdQ9t0CF%2B6aPI4LIaGYg8KNPvwyv2YIEMJKFqzuEnjXk1R5YMcUjyDd5xphCiXc8A1n4%2B70oD4C0WD%2BJo64XWc7IBTBXEU88RTLxYxmfeCnJq1jHR7zrV7wsHhQhv1DYnrv2xnUOyQa7iqFVSmlsV5VtYbeZL7SAwPTqofwTvMLXzwb4GOqUB2%2BfbmmQYo4kWKCMxgSnuyGx%2F7yDwblg8xGaFVyPCNNBH%2FYfRMcYUnm4wjSB0Gy%2Bdb9KJeHwX%2F6el6MyrSc915mByCZJOOGPUDO1kwuUHOwkZFf8%2BpUAE4IG4PFR1jcXlzNVjWTljVc9GXUnP5mUshHFZa2la2FG85GY4kNyfd34nH%2FWNJjNCTSxFe16aXVC7RwkwwuoVdhyyTRdc419gXuIOlbs%2F&X-Amz-Signature=1ba656939ce55f4a2560f9a646c766508637be9a3f9a541123104b56484f0174&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHXNEJV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKURpeK3RfYHa440wYc9TOfJeUP55cqbilCpbEzhEF8QIgZRxrTwUeDvKiHNjwCRvALHbUDTXtCjCEO7tkm60YNn0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALybCd32G3c5OMvUSrcAz%2BRsaXAKguLOCEgQXABWu02ws4I0nTjaRPctiSHURyUXwP4Brtf9c%2F51wqg5MuQG%2FLW%2FsTtvJGx1QTETpINOCWv6s4m3ByBO7IiF7UuHN8VfqQXwdCrjCYvq9MG5iOMjbXAsscxcv3nIpKqmhNaK05rZ0NPmT%2Fd51zFwomG8BOXvTxaCwrS%2FRMR%2FBWdfHeo14yFMBCccK4aTYY6kBlrE5411Dent50VZk9cLcYk9h71RfDUUCXvqWS%2FuxGu8mAp%2BrQRjVI6838As7vMNcpAvgCKycKoBrybxigMUO%2F6OG6ZCI7Ysbzx3Nb9Rvya6MZ4O9%2BuolzcqFvMJlBuSj0SsI36QFsm0iQZUICrZllzpZehr5DKmbWijBM3D0Amaf56D41FeANIJVcjiOzLSOeeaAir0JweHRo7nkFID28IUGFvwDrp1sfmIkIDQeTN8EhZma%2FywXvgWloc38wugslZdQ9t0CF%2B6aPI4LIaGYg8KNPvwyv2YIEMJKFqzuEnjXk1R5YMcUjyDd5xphCiXc8A1n4%2B70oD4C0WD%2BJo64XWc7IBTBXEU88RTLxYxmfeCnJq1jHR7zrV7wsHhQhv1DYnrv2xnUOyQa7iqFVSmlsV5VtYbeZL7SAwPTqofwTvMLXzwb4GOqUB2%2BfbmmQYo4kWKCMxgSnuyGx%2F7yDwblg8xGaFVyPCNNBH%2FYfRMcYUnm4wjSB0Gy%2Bdb9KJeHwX%2F6el6MyrSc915mByCZJOOGPUDO1kwuUHOwkZFf8%2BpUAE4IG4PFR1jcXlzNVjWTljVc9GXUnP5mUshHFZa2la2FG85GY4kNyfd34nH%2FWNJjNCTSxFe16aXVC7RwkwwuoVdhyyTRdc419gXuIOlbs%2F&X-Amz-Signature=ce0c0a5601331e96ad4760415e83052d906089e56e5b52978524abf4efae663c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHXNEJV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKURpeK3RfYHa440wYc9TOfJeUP55cqbilCpbEzhEF8QIgZRxrTwUeDvKiHNjwCRvALHbUDTXtCjCEO7tkm60YNn0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALybCd32G3c5OMvUSrcAz%2BRsaXAKguLOCEgQXABWu02ws4I0nTjaRPctiSHURyUXwP4Brtf9c%2F51wqg5MuQG%2FLW%2FsTtvJGx1QTETpINOCWv6s4m3ByBO7IiF7UuHN8VfqQXwdCrjCYvq9MG5iOMjbXAsscxcv3nIpKqmhNaK05rZ0NPmT%2Fd51zFwomG8BOXvTxaCwrS%2FRMR%2FBWdfHeo14yFMBCccK4aTYY6kBlrE5411Dent50VZk9cLcYk9h71RfDUUCXvqWS%2FuxGu8mAp%2BrQRjVI6838As7vMNcpAvgCKycKoBrybxigMUO%2F6OG6ZCI7Ysbzx3Nb9Rvya6MZ4O9%2BuolzcqFvMJlBuSj0SsI36QFsm0iQZUICrZllzpZehr5DKmbWijBM3D0Amaf56D41FeANIJVcjiOzLSOeeaAir0JweHRo7nkFID28IUGFvwDrp1sfmIkIDQeTN8EhZma%2FywXvgWloc38wugslZdQ9t0CF%2B6aPI4LIaGYg8KNPvwyv2YIEMJKFqzuEnjXk1R5YMcUjyDd5xphCiXc8A1n4%2B70oD4C0WD%2BJo64XWc7IBTBXEU88RTLxYxmfeCnJq1jHR7zrV7wsHhQhv1DYnrv2xnUOyQa7iqFVSmlsV5VtYbeZL7SAwPTqofwTvMLXzwb4GOqUB2%2BfbmmQYo4kWKCMxgSnuyGx%2F7yDwblg8xGaFVyPCNNBH%2FYfRMcYUnm4wjSB0Gy%2Bdb9KJeHwX%2F6el6MyrSc915mByCZJOOGPUDO1kwuUHOwkZFf8%2BpUAE4IG4PFR1jcXlzNVjWTljVc9GXUnP5mUshHFZa2la2FG85GY4kNyfd34nH%2FWNJjNCTSxFe16aXVC7RwkwwuoVdhyyTRdc419gXuIOlbs%2F&X-Amz-Signature=102fac031dd44425abb323ead6432d6478c17865874a03877edc4fe7c813808f&X-Amz-SignedHeaders=host&x-id=GetObject)
