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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTJDNBY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG%2FyGFEl56Ze%2BwEXEbgsWAErlHGuMCU7zdy4697kVbk6AiEAxJdKO97cL5hBMp0lOeoOowx3xl2rWvx%2FsvBTD6qEHGcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDpsykXuklcHQmxOCSrcA%2F3yOvP%2FUzZqFtsygmAM46SUsnjv9MS6OaPy9QqHgmx85A1uA8ca0a1V402586zQGj7d6dmT6U7myFqKZ8rgG0bHAes2Ia%2FJa2MZSxE8995SoabsMWMDPzW4R5Aa5yTy3C5QIEp79NeWF8yEltE0Ik3nImSPcZCzIAKMr4gZtbYXqbs4JiTyLljfYVWlReHfTgnVbtZPQhZQvRPKe4Doj%2FAcNFES8KlNloV%2ByQS%2F0z2H%2FOvSxZrADo6AtXbcmlQmjEhIEOVvH3SgWI97SGrH8l4rSU8dvGWVcwNcO9b9NXEgWa1lK4MDplxxGjO60mZzF2wa5uSEQ1e489y35G%2Bxlb3U0%2FA4Uy4rlDQOMWOpVqFFpkudYrufCXltpCSLvjvqBWhcSHHICGPRkoqKGyKM3vqd7UPlBp7qOX7vdRSdC3ElbCG2jPNf%2FvfiCVJPbnfiAToBzs7WXunvc4FEE7M0xSTrO9i5I92vF9Meqr%2BJefy5voaNqwa%2FdaHPX%2BZcqEhbQt7pjJ3%2FqSaRYRzpsgUpkGFA4S5YPEdk73Vzp0HGXV3NoAZ0tcDasLt1K9vwQ9nb%2BkPJRJZ0GaahbLOyYO5X2VSuPBoTxsC%2Bk8OwMaGYrasZvchZVLpFNFsLPULIMN%2B7m8MGOqUBi3fgbX1oDlyJnc6IFhYr9c4E17MQRutDceQC7ZT6yE0TWMOp6UtqxSilcISMwvYPyarTcbfUHgb8%2FbjnpXF%2FUOnDFSr7q%2Bk4DuhFevdgZOccHvQW3HxAifAzU6DmGCnJ91r02TiDp0ybrlrz8YLJjr8Sgmz4ZaFyQc5crxkXVvqpX%2FeltWLK5xEIPFp%2B8szgx3J2yPLm2m6R4lTlk6BCfxkKtr%2FZ&X-Amz-Signature=bbf32042039a79500d53ba3956f949847678a40d43fbc43f73c145c5c39c35c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTJDNBY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG%2FyGFEl56Ze%2BwEXEbgsWAErlHGuMCU7zdy4697kVbk6AiEAxJdKO97cL5hBMp0lOeoOowx3xl2rWvx%2FsvBTD6qEHGcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDpsykXuklcHQmxOCSrcA%2F3yOvP%2FUzZqFtsygmAM46SUsnjv9MS6OaPy9QqHgmx85A1uA8ca0a1V402586zQGj7d6dmT6U7myFqKZ8rgG0bHAes2Ia%2FJa2MZSxE8995SoabsMWMDPzW4R5Aa5yTy3C5QIEp79NeWF8yEltE0Ik3nImSPcZCzIAKMr4gZtbYXqbs4JiTyLljfYVWlReHfTgnVbtZPQhZQvRPKe4Doj%2FAcNFES8KlNloV%2ByQS%2F0z2H%2FOvSxZrADo6AtXbcmlQmjEhIEOVvH3SgWI97SGrH8l4rSU8dvGWVcwNcO9b9NXEgWa1lK4MDplxxGjO60mZzF2wa5uSEQ1e489y35G%2Bxlb3U0%2FA4Uy4rlDQOMWOpVqFFpkudYrufCXltpCSLvjvqBWhcSHHICGPRkoqKGyKM3vqd7UPlBp7qOX7vdRSdC3ElbCG2jPNf%2FvfiCVJPbnfiAToBzs7WXunvc4FEE7M0xSTrO9i5I92vF9Meqr%2BJefy5voaNqwa%2FdaHPX%2BZcqEhbQt7pjJ3%2FqSaRYRzpsgUpkGFA4S5YPEdk73Vzp0HGXV3NoAZ0tcDasLt1K9vwQ9nb%2BkPJRJZ0GaahbLOyYO5X2VSuPBoTxsC%2Bk8OwMaGYrasZvchZVLpFNFsLPULIMN%2B7m8MGOqUBi3fgbX1oDlyJnc6IFhYr9c4E17MQRutDceQC7ZT6yE0TWMOp6UtqxSilcISMwvYPyarTcbfUHgb8%2FbjnpXF%2FUOnDFSr7q%2Bk4DuhFevdgZOccHvQW3HxAifAzU6DmGCnJ91r02TiDp0ybrlrz8YLJjr8Sgmz4ZaFyQc5crxkXVvqpX%2FeltWLK5xEIPFp%2B8szgx3J2yPLm2m6R4lTlk6BCfxkKtr%2FZ&X-Amz-Signature=9bcc45ebc2bbc9cc13f878e512e43b0c70174eb9c8220b43b115e06d1f434b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTJDNBY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG%2FyGFEl56Ze%2BwEXEbgsWAErlHGuMCU7zdy4697kVbk6AiEAxJdKO97cL5hBMp0lOeoOowx3xl2rWvx%2FsvBTD6qEHGcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDpsykXuklcHQmxOCSrcA%2F3yOvP%2FUzZqFtsygmAM46SUsnjv9MS6OaPy9QqHgmx85A1uA8ca0a1V402586zQGj7d6dmT6U7myFqKZ8rgG0bHAes2Ia%2FJa2MZSxE8995SoabsMWMDPzW4R5Aa5yTy3C5QIEp79NeWF8yEltE0Ik3nImSPcZCzIAKMr4gZtbYXqbs4JiTyLljfYVWlReHfTgnVbtZPQhZQvRPKe4Doj%2FAcNFES8KlNloV%2ByQS%2F0z2H%2FOvSxZrADo6AtXbcmlQmjEhIEOVvH3SgWI97SGrH8l4rSU8dvGWVcwNcO9b9NXEgWa1lK4MDplxxGjO60mZzF2wa5uSEQ1e489y35G%2Bxlb3U0%2FA4Uy4rlDQOMWOpVqFFpkudYrufCXltpCSLvjvqBWhcSHHICGPRkoqKGyKM3vqd7UPlBp7qOX7vdRSdC3ElbCG2jPNf%2FvfiCVJPbnfiAToBzs7WXunvc4FEE7M0xSTrO9i5I92vF9Meqr%2BJefy5voaNqwa%2FdaHPX%2BZcqEhbQt7pjJ3%2FqSaRYRzpsgUpkGFA4S5YPEdk73Vzp0HGXV3NoAZ0tcDasLt1K9vwQ9nb%2BkPJRJZ0GaahbLOyYO5X2VSuPBoTxsC%2Bk8OwMaGYrasZvchZVLpFNFsLPULIMN%2B7m8MGOqUBi3fgbX1oDlyJnc6IFhYr9c4E17MQRutDceQC7ZT6yE0TWMOp6UtqxSilcISMwvYPyarTcbfUHgb8%2FbjnpXF%2FUOnDFSr7q%2Bk4DuhFevdgZOccHvQW3HxAifAzU6DmGCnJ91r02TiDp0ybrlrz8YLJjr8Sgmz4ZaFyQc5crxkXVvqpX%2FeltWLK5xEIPFp%2B8szgx3J2yPLm2m6R4lTlk6BCfxkKtr%2FZ&X-Amz-Signature=b16822e046dc3c85b36688b3e4f5ff29107ec806641c1043cd5280be9a09b90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTJDNBY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG%2FyGFEl56Ze%2BwEXEbgsWAErlHGuMCU7zdy4697kVbk6AiEAxJdKO97cL5hBMp0lOeoOowx3xl2rWvx%2FsvBTD6qEHGcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDpsykXuklcHQmxOCSrcA%2F3yOvP%2FUzZqFtsygmAM46SUsnjv9MS6OaPy9QqHgmx85A1uA8ca0a1V402586zQGj7d6dmT6U7myFqKZ8rgG0bHAes2Ia%2FJa2MZSxE8995SoabsMWMDPzW4R5Aa5yTy3C5QIEp79NeWF8yEltE0Ik3nImSPcZCzIAKMr4gZtbYXqbs4JiTyLljfYVWlReHfTgnVbtZPQhZQvRPKe4Doj%2FAcNFES8KlNloV%2ByQS%2F0z2H%2FOvSxZrADo6AtXbcmlQmjEhIEOVvH3SgWI97SGrH8l4rSU8dvGWVcwNcO9b9NXEgWa1lK4MDplxxGjO60mZzF2wa5uSEQ1e489y35G%2Bxlb3U0%2FA4Uy4rlDQOMWOpVqFFpkudYrufCXltpCSLvjvqBWhcSHHICGPRkoqKGyKM3vqd7UPlBp7qOX7vdRSdC3ElbCG2jPNf%2FvfiCVJPbnfiAToBzs7WXunvc4FEE7M0xSTrO9i5I92vF9Meqr%2BJefy5voaNqwa%2FdaHPX%2BZcqEhbQt7pjJ3%2FqSaRYRzpsgUpkGFA4S5YPEdk73Vzp0HGXV3NoAZ0tcDasLt1K9vwQ9nb%2BkPJRJZ0GaahbLOyYO5X2VSuPBoTxsC%2Bk8OwMaGYrasZvchZVLpFNFsLPULIMN%2B7m8MGOqUBi3fgbX1oDlyJnc6IFhYr9c4E17MQRutDceQC7ZT6yE0TWMOp6UtqxSilcISMwvYPyarTcbfUHgb8%2FbjnpXF%2FUOnDFSr7q%2Bk4DuhFevdgZOccHvQW3HxAifAzU6DmGCnJ91r02TiDp0ybrlrz8YLJjr8Sgmz4ZaFyQc5crxkXVvqpX%2FeltWLK5xEIPFp%2B8szgx3J2yPLm2m6R4lTlk6BCfxkKtr%2FZ&X-Amz-Signature=219a4fc8e0416c0e1ad14d6b3139c0f00ec8524330d05f74a68209baf1e4d0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTJDNBY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG%2FyGFEl56Ze%2BwEXEbgsWAErlHGuMCU7zdy4697kVbk6AiEAxJdKO97cL5hBMp0lOeoOowx3xl2rWvx%2FsvBTD6qEHGcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDpsykXuklcHQmxOCSrcA%2F3yOvP%2FUzZqFtsygmAM46SUsnjv9MS6OaPy9QqHgmx85A1uA8ca0a1V402586zQGj7d6dmT6U7myFqKZ8rgG0bHAes2Ia%2FJa2MZSxE8995SoabsMWMDPzW4R5Aa5yTy3C5QIEp79NeWF8yEltE0Ik3nImSPcZCzIAKMr4gZtbYXqbs4JiTyLljfYVWlReHfTgnVbtZPQhZQvRPKe4Doj%2FAcNFES8KlNloV%2ByQS%2F0z2H%2FOvSxZrADo6AtXbcmlQmjEhIEOVvH3SgWI97SGrH8l4rSU8dvGWVcwNcO9b9NXEgWa1lK4MDplxxGjO60mZzF2wa5uSEQ1e489y35G%2Bxlb3U0%2FA4Uy4rlDQOMWOpVqFFpkudYrufCXltpCSLvjvqBWhcSHHICGPRkoqKGyKM3vqd7UPlBp7qOX7vdRSdC3ElbCG2jPNf%2FvfiCVJPbnfiAToBzs7WXunvc4FEE7M0xSTrO9i5I92vF9Meqr%2BJefy5voaNqwa%2FdaHPX%2BZcqEhbQt7pjJ3%2FqSaRYRzpsgUpkGFA4S5YPEdk73Vzp0HGXV3NoAZ0tcDasLt1K9vwQ9nb%2BkPJRJZ0GaahbLOyYO5X2VSuPBoTxsC%2Bk8OwMaGYrasZvchZVLpFNFsLPULIMN%2B7m8MGOqUBi3fgbX1oDlyJnc6IFhYr9c4E17MQRutDceQC7ZT6yE0TWMOp6UtqxSilcISMwvYPyarTcbfUHgb8%2FbjnpXF%2FUOnDFSr7q%2Bk4DuhFevdgZOccHvQW3HxAifAzU6DmGCnJ91r02TiDp0ybrlrz8YLJjr8Sgmz4ZaFyQc5crxkXVvqpX%2FeltWLK5xEIPFp%2B8szgx3J2yPLm2m6R4lTlk6BCfxkKtr%2FZ&X-Amz-Signature=dd190d1f9fa730edce975c390009a5bfde10357921db22f72084bcf847f09f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTJDNBY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG%2FyGFEl56Ze%2BwEXEbgsWAErlHGuMCU7zdy4697kVbk6AiEAxJdKO97cL5hBMp0lOeoOowx3xl2rWvx%2FsvBTD6qEHGcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDpsykXuklcHQmxOCSrcA%2F3yOvP%2FUzZqFtsygmAM46SUsnjv9MS6OaPy9QqHgmx85A1uA8ca0a1V402586zQGj7d6dmT6U7myFqKZ8rgG0bHAes2Ia%2FJa2MZSxE8995SoabsMWMDPzW4R5Aa5yTy3C5QIEp79NeWF8yEltE0Ik3nImSPcZCzIAKMr4gZtbYXqbs4JiTyLljfYVWlReHfTgnVbtZPQhZQvRPKe4Doj%2FAcNFES8KlNloV%2ByQS%2F0z2H%2FOvSxZrADo6AtXbcmlQmjEhIEOVvH3SgWI97SGrH8l4rSU8dvGWVcwNcO9b9NXEgWa1lK4MDplxxGjO60mZzF2wa5uSEQ1e489y35G%2Bxlb3U0%2FA4Uy4rlDQOMWOpVqFFpkudYrufCXltpCSLvjvqBWhcSHHICGPRkoqKGyKM3vqd7UPlBp7qOX7vdRSdC3ElbCG2jPNf%2FvfiCVJPbnfiAToBzs7WXunvc4FEE7M0xSTrO9i5I92vF9Meqr%2BJefy5voaNqwa%2FdaHPX%2BZcqEhbQt7pjJ3%2FqSaRYRzpsgUpkGFA4S5YPEdk73Vzp0HGXV3NoAZ0tcDasLt1K9vwQ9nb%2BkPJRJZ0GaahbLOyYO5X2VSuPBoTxsC%2Bk8OwMaGYrasZvchZVLpFNFsLPULIMN%2B7m8MGOqUBi3fgbX1oDlyJnc6IFhYr9c4E17MQRutDceQC7ZT6yE0TWMOp6UtqxSilcISMwvYPyarTcbfUHgb8%2FbjnpXF%2FUOnDFSr7q%2Bk4DuhFevdgZOccHvQW3HxAifAzU6DmGCnJ91r02TiDp0ybrlrz8YLJjr8Sgmz4ZaFyQc5crxkXVvqpX%2FeltWLK5xEIPFp%2B8szgx3J2yPLm2m6R4lTlk6BCfxkKtr%2FZ&X-Amz-Signature=95ec2ed5f723d98e27e07130b1a1d827f6877993ed332cc7e8c235a836b36a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
