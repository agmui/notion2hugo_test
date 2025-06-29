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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X6YNLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8IZi5YQoXXH1290G%2FAYAOpk5npP0rfQigFZLPeCBCAiEA9CYD0zRiO8k6I4WzB8wTb5rkHfFtbtG%2B2IOkBh%2FB7VAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijZ9lvkoTITCDpXSrcAyIwyfBxZCHu4CqASnI2FqPij6hBpcL44gqpO0L3cf4w1z41LwkhI5RJbLh4fCR5Pe1qRLvVOEyESMiU7T92HyGZOph6dBti6FyurHJQ5O9L%2BpyVj4PWrburKSCyhrM6NADZddSF67v8SMlOj4tyT3gMX77rwoOy9fVojvBC1036TqqSN8tyrLF1AgyHsAklwwkmRaGG6fyMicQ0QHONYnzCeSpBOhQNZSJUPveeQOKNicYafABza59MneiPI9RvGp%2BObUpSf5ii%2FuqinpaKFcrAlKNLZhxi%2B0hoanepBYeEjOyD4IpB%2B0oRfL28DPzRBskh1qcFREoFACLQIkp%2B3o7jOBjyiE0n6NAoMYVIqsrdnyscSec6WbVZIjzWLI6uKwwmfFQ7jmOwriBIqK70JdPKYyPqheSat%2FS%2FlXsF5W9co9CHbGNGqelWXudBSiQ%2FCUaXA7OTzFvzHTszp2dXrv6oLl68l3DsETcyIoqOEulJBK8wiYVPlO6PtAi80wioW3p%2BB8yz1QE2i44If1b3hE9KW6pePnMKyOc%2B59Fc5v4s6%2FGeQMWK%2FWWusKrPcLrT0ubEE%2BFJwxaWJa8XFApEGv1tOlcAcpn76pzdueXBztW81s%2B1taaHx3DweJWaMIy8hMMGOqUBuzeQapmnvT97K9JWNOCTrJp5zXf852HnamD%2FieX2RmdCRA1yAYK986ZlVT9vD70flNqes3CdrnVPqKTBOS5qEttYSQXAyejdanghAXGLuwuTIaXj53jb0PcNcmJpb6Qk2IFPcmGQONzqbcybvCY9ZOYsyBLLKYhrtLPp5htUtPXTTVQDZpl8n6QItl7%2FRfzn6owYIlIK5VR3OvV9F1NH9Cvb%2FONe&X-Amz-Signature=8858bde5b0220211159e27d5d70b877e07153cc52fcb1253c40659d247f0d49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X6YNLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8IZi5YQoXXH1290G%2FAYAOpk5npP0rfQigFZLPeCBCAiEA9CYD0zRiO8k6I4WzB8wTb5rkHfFtbtG%2B2IOkBh%2FB7VAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijZ9lvkoTITCDpXSrcAyIwyfBxZCHu4CqASnI2FqPij6hBpcL44gqpO0L3cf4w1z41LwkhI5RJbLh4fCR5Pe1qRLvVOEyESMiU7T92HyGZOph6dBti6FyurHJQ5O9L%2BpyVj4PWrburKSCyhrM6NADZddSF67v8SMlOj4tyT3gMX77rwoOy9fVojvBC1036TqqSN8tyrLF1AgyHsAklwwkmRaGG6fyMicQ0QHONYnzCeSpBOhQNZSJUPveeQOKNicYafABza59MneiPI9RvGp%2BObUpSf5ii%2FuqinpaKFcrAlKNLZhxi%2B0hoanepBYeEjOyD4IpB%2B0oRfL28DPzRBskh1qcFREoFACLQIkp%2B3o7jOBjyiE0n6NAoMYVIqsrdnyscSec6WbVZIjzWLI6uKwwmfFQ7jmOwriBIqK70JdPKYyPqheSat%2FS%2FlXsF5W9co9CHbGNGqelWXudBSiQ%2FCUaXA7OTzFvzHTszp2dXrv6oLl68l3DsETcyIoqOEulJBK8wiYVPlO6PtAi80wioW3p%2BB8yz1QE2i44If1b3hE9KW6pePnMKyOc%2B59Fc5v4s6%2FGeQMWK%2FWWusKrPcLrT0ubEE%2BFJwxaWJa8XFApEGv1tOlcAcpn76pzdueXBztW81s%2B1taaHx3DweJWaMIy8hMMGOqUBuzeQapmnvT97K9JWNOCTrJp5zXf852HnamD%2FieX2RmdCRA1yAYK986ZlVT9vD70flNqes3CdrnVPqKTBOS5qEttYSQXAyejdanghAXGLuwuTIaXj53jb0PcNcmJpb6Qk2IFPcmGQONzqbcybvCY9ZOYsyBLLKYhrtLPp5htUtPXTTVQDZpl8n6QItl7%2FRfzn6owYIlIK5VR3OvV9F1NH9Cvb%2FONe&X-Amz-Signature=23d832c73bdae12d2e3ec4a9ca401c6389e2ff96a0250b62b0a43c5e41340901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X6YNLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8IZi5YQoXXH1290G%2FAYAOpk5npP0rfQigFZLPeCBCAiEA9CYD0zRiO8k6I4WzB8wTb5rkHfFtbtG%2B2IOkBh%2FB7VAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijZ9lvkoTITCDpXSrcAyIwyfBxZCHu4CqASnI2FqPij6hBpcL44gqpO0L3cf4w1z41LwkhI5RJbLh4fCR5Pe1qRLvVOEyESMiU7T92HyGZOph6dBti6FyurHJQ5O9L%2BpyVj4PWrburKSCyhrM6NADZddSF67v8SMlOj4tyT3gMX77rwoOy9fVojvBC1036TqqSN8tyrLF1AgyHsAklwwkmRaGG6fyMicQ0QHONYnzCeSpBOhQNZSJUPveeQOKNicYafABza59MneiPI9RvGp%2BObUpSf5ii%2FuqinpaKFcrAlKNLZhxi%2B0hoanepBYeEjOyD4IpB%2B0oRfL28DPzRBskh1qcFREoFACLQIkp%2B3o7jOBjyiE0n6NAoMYVIqsrdnyscSec6WbVZIjzWLI6uKwwmfFQ7jmOwriBIqK70JdPKYyPqheSat%2FS%2FlXsF5W9co9CHbGNGqelWXudBSiQ%2FCUaXA7OTzFvzHTszp2dXrv6oLl68l3DsETcyIoqOEulJBK8wiYVPlO6PtAi80wioW3p%2BB8yz1QE2i44If1b3hE9KW6pePnMKyOc%2B59Fc5v4s6%2FGeQMWK%2FWWusKrPcLrT0ubEE%2BFJwxaWJa8XFApEGv1tOlcAcpn76pzdueXBztW81s%2B1taaHx3DweJWaMIy8hMMGOqUBuzeQapmnvT97K9JWNOCTrJp5zXf852HnamD%2FieX2RmdCRA1yAYK986ZlVT9vD70flNqes3CdrnVPqKTBOS5qEttYSQXAyejdanghAXGLuwuTIaXj53jb0PcNcmJpb6Qk2IFPcmGQONzqbcybvCY9ZOYsyBLLKYhrtLPp5htUtPXTTVQDZpl8n6QItl7%2FRfzn6owYIlIK5VR3OvV9F1NH9Cvb%2FONe&X-Amz-Signature=227e128dd92bea40f57e89ab9522bbaf12fed0ca514d2028ac346c2002311ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X6YNLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8IZi5YQoXXH1290G%2FAYAOpk5npP0rfQigFZLPeCBCAiEA9CYD0zRiO8k6I4WzB8wTb5rkHfFtbtG%2B2IOkBh%2FB7VAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijZ9lvkoTITCDpXSrcAyIwyfBxZCHu4CqASnI2FqPij6hBpcL44gqpO0L3cf4w1z41LwkhI5RJbLh4fCR5Pe1qRLvVOEyESMiU7T92HyGZOph6dBti6FyurHJQ5O9L%2BpyVj4PWrburKSCyhrM6NADZddSF67v8SMlOj4tyT3gMX77rwoOy9fVojvBC1036TqqSN8tyrLF1AgyHsAklwwkmRaGG6fyMicQ0QHONYnzCeSpBOhQNZSJUPveeQOKNicYafABza59MneiPI9RvGp%2BObUpSf5ii%2FuqinpaKFcrAlKNLZhxi%2B0hoanepBYeEjOyD4IpB%2B0oRfL28DPzRBskh1qcFREoFACLQIkp%2B3o7jOBjyiE0n6NAoMYVIqsrdnyscSec6WbVZIjzWLI6uKwwmfFQ7jmOwriBIqK70JdPKYyPqheSat%2FS%2FlXsF5W9co9CHbGNGqelWXudBSiQ%2FCUaXA7OTzFvzHTszp2dXrv6oLl68l3DsETcyIoqOEulJBK8wiYVPlO6PtAi80wioW3p%2BB8yz1QE2i44If1b3hE9KW6pePnMKyOc%2B59Fc5v4s6%2FGeQMWK%2FWWusKrPcLrT0ubEE%2BFJwxaWJa8XFApEGv1tOlcAcpn76pzdueXBztW81s%2B1taaHx3DweJWaMIy8hMMGOqUBuzeQapmnvT97K9JWNOCTrJp5zXf852HnamD%2FieX2RmdCRA1yAYK986ZlVT9vD70flNqes3CdrnVPqKTBOS5qEttYSQXAyejdanghAXGLuwuTIaXj53jb0PcNcmJpb6Qk2IFPcmGQONzqbcybvCY9ZOYsyBLLKYhrtLPp5htUtPXTTVQDZpl8n6QItl7%2FRfzn6owYIlIK5VR3OvV9F1NH9Cvb%2FONe&X-Amz-Signature=cad3cb50fd8d4bb9a81aa49981df954ceb3e879354d485292927631ae85ee091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X6YNLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8IZi5YQoXXH1290G%2FAYAOpk5npP0rfQigFZLPeCBCAiEA9CYD0zRiO8k6I4WzB8wTb5rkHfFtbtG%2B2IOkBh%2FB7VAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijZ9lvkoTITCDpXSrcAyIwyfBxZCHu4CqASnI2FqPij6hBpcL44gqpO0L3cf4w1z41LwkhI5RJbLh4fCR5Pe1qRLvVOEyESMiU7T92HyGZOph6dBti6FyurHJQ5O9L%2BpyVj4PWrburKSCyhrM6NADZddSF67v8SMlOj4tyT3gMX77rwoOy9fVojvBC1036TqqSN8tyrLF1AgyHsAklwwkmRaGG6fyMicQ0QHONYnzCeSpBOhQNZSJUPveeQOKNicYafABza59MneiPI9RvGp%2BObUpSf5ii%2FuqinpaKFcrAlKNLZhxi%2B0hoanepBYeEjOyD4IpB%2B0oRfL28DPzRBskh1qcFREoFACLQIkp%2B3o7jOBjyiE0n6NAoMYVIqsrdnyscSec6WbVZIjzWLI6uKwwmfFQ7jmOwriBIqK70JdPKYyPqheSat%2FS%2FlXsF5W9co9CHbGNGqelWXudBSiQ%2FCUaXA7OTzFvzHTszp2dXrv6oLl68l3DsETcyIoqOEulJBK8wiYVPlO6PtAi80wioW3p%2BB8yz1QE2i44If1b3hE9KW6pePnMKyOc%2B59Fc5v4s6%2FGeQMWK%2FWWusKrPcLrT0ubEE%2BFJwxaWJa8XFApEGv1tOlcAcpn76pzdueXBztW81s%2B1taaHx3DweJWaMIy8hMMGOqUBuzeQapmnvT97K9JWNOCTrJp5zXf852HnamD%2FieX2RmdCRA1yAYK986ZlVT9vD70flNqes3CdrnVPqKTBOS5qEttYSQXAyejdanghAXGLuwuTIaXj53jb0PcNcmJpb6Qk2IFPcmGQONzqbcybvCY9ZOYsyBLLKYhrtLPp5htUtPXTTVQDZpl8n6QItl7%2FRfzn6owYIlIK5VR3OvV9F1NH9Cvb%2FONe&X-Amz-Signature=27179c0a84b6c99271e7f8e35a3f0d55f34825544b8be45d6ceaca5815dfb709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X6YNLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8IZi5YQoXXH1290G%2FAYAOpk5npP0rfQigFZLPeCBCAiEA9CYD0zRiO8k6I4WzB8wTb5rkHfFtbtG%2B2IOkBh%2FB7VAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijZ9lvkoTITCDpXSrcAyIwyfBxZCHu4CqASnI2FqPij6hBpcL44gqpO0L3cf4w1z41LwkhI5RJbLh4fCR5Pe1qRLvVOEyESMiU7T92HyGZOph6dBti6FyurHJQ5O9L%2BpyVj4PWrburKSCyhrM6NADZddSF67v8SMlOj4tyT3gMX77rwoOy9fVojvBC1036TqqSN8tyrLF1AgyHsAklwwkmRaGG6fyMicQ0QHONYnzCeSpBOhQNZSJUPveeQOKNicYafABza59MneiPI9RvGp%2BObUpSf5ii%2FuqinpaKFcrAlKNLZhxi%2B0hoanepBYeEjOyD4IpB%2B0oRfL28DPzRBskh1qcFREoFACLQIkp%2B3o7jOBjyiE0n6NAoMYVIqsrdnyscSec6WbVZIjzWLI6uKwwmfFQ7jmOwriBIqK70JdPKYyPqheSat%2FS%2FlXsF5W9co9CHbGNGqelWXudBSiQ%2FCUaXA7OTzFvzHTszp2dXrv6oLl68l3DsETcyIoqOEulJBK8wiYVPlO6PtAi80wioW3p%2BB8yz1QE2i44If1b3hE9KW6pePnMKyOc%2B59Fc5v4s6%2FGeQMWK%2FWWusKrPcLrT0ubEE%2BFJwxaWJa8XFApEGv1tOlcAcpn76pzdueXBztW81s%2B1taaHx3DweJWaMIy8hMMGOqUBuzeQapmnvT97K9JWNOCTrJp5zXf852HnamD%2FieX2RmdCRA1yAYK986ZlVT9vD70flNqes3CdrnVPqKTBOS5qEttYSQXAyejdanghAXGLuwuTIaXj53jb0PcNcmJpb6Qk2IFPcmGQONzqbcybvCY9ZOYsyBLLKYhrtLPp5htUtPXTTVQDZpl8n6QItl7%2FRfzn6owYIlIK5VR3OvV9F1NH9Cvb%2FONe&X-Amz-Signature=56a96cf122f37f6ad64b7f3e32ae11512aeed839c6692fa4b6caf13f2e3634df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
