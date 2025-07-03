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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSIWMX4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFHXHfN7enuqwirnJHBLI%2BhlsaYuuVdZDdvoW4GlJPzAiEAktzF10mWYftmXXqHHALQ%2BkXZHgMEnTgtp3xiLz8SXnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM69B%2FI5biXFma9iwCrcA5j3AUBgiWID%2FlHE%2B1Yeo6wQSAUQxBD6K1euuCNcf6J%2BL9iLE5uGZnTkFBYiHE6K4qwibyYQgM1CTZeAZ%2BVFPV7ugyYXkhpg83HhSIsFpnKXCqEJnSaTzUTFkmghgqHfO4lQxRR%2BqrTNAE3L8RnxoemwEdE65Bzht7JJ5t%2FgTXNkKXFuep4YUxxigNwttUEhTKwgr8EnOh1f1iJHQaLyPExtIFGlM6zk8MzQtUgsWVRPaF1eKJOH6gb08GJKCedXdguYtcBIXjPZvYrL%2FMzp0WgD%2FjlJhpAnqAQzchl0eGt4nGfBx66TGyYTbyMl1r%2F%2BeBl%2BtuHUTqjtYQjNXr11ygK%2B8QZnx2C6V%2FqCjnVKEd%2BS7J9ZKrvozBuNPqvjZY6JOHysElkhw2esIBO8xLAe7xJ5y65X2s%2F0YWtp9L6E3KurPr2jaznT9COFZ%2BpdxETn9LwpsuTHkCh5ACSua3VZwixT%2BWx%2F%2FC5%2BNBW5pZFHO886O8mV8SGPAfkyg0AtP9YJ4gYqmteTMrLOpcM%2BUa16fRoMgfFmnr72718K5AJhTiYEpm4mrMrKwLBWjAcQrEUQwZPdegRZH8JhN8sWTR6Xc%2FOviYGqyqpZWc%2BXsonSjX9uoMpRYeM8VYKV2dkrMLCHmMMGOqUBPDvYv390tOXXT7OfLBJR6YF9RfUBYz%2BYwMcDnnAlbmQteF%2BsRA06SUTE8Ypj2x8KvhfOffNQI2ZNLQQuEF%2Fde8Xau7tbqxuTNvNrD4IrMsWF17UWpc3UqQqFkNc0Hsj1k1NNXPyE%2BYw%2F8wyz%2Bx48ASyjn7Ov2%2FJaH15qJCrNqk2r0%2FHCNFoFcZ%2BoD5%2FBPDBELw5jUVsJZgccvXqU7%2BNog%2FhF3rU6&X-Amz-Signature=205c72cab1def7f5b3c9789c9f4d925770489473f6e0f03765f421d835db157d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSIWMX4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFHXHfN7enuqwirnJHBLI%2BhlsaYuuVdZDdvoW4GlJPzAiEAktzF10mWYftmXXqHHALQ%2BkXZHgMEnTgtp3xiLz8SXnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM69B%2FI5biXFma9iwCrcA5j3AUBgiWID%2FlHE%2B1Yeo6wQSAUQxBD6K1euuCNcf6J%2BL9iLE5uGZnTkFBYiHE6K4qwibyYQgM1CTZeAZ%2BVFPV7ugyYXkhpg83HhSIsFpnKXCqEJnSaTzUTFkmghgqHfO4lQxRR%2BqrTNAE3L8RnxoemwEdE65Bzht7JJ5t%2FgTXNkKXFuep4YUxxigNwttUEhTKwgr8EnOh1f1iJHQaLyPExtIFGlM6zk8MzQtUgsWVRPaF1eKJOH6gb08GJKCedXdguYtcBIXjPZvYrL%2FMzp0WgD%2FjlJhpAnqAQzchl0eGt4nGfBx66TGyYTbyMl1r%2F%2BeBl%2BtuHUTqjtYQjNXr11ygK%2B8QZnx2C6V%2FqCjnVKEd%2BS7J9ZKrvozBuNPqvjZY6JOHysElkhw2esIBO8xLAe7xJ5y65X2s%2F0YWtp9L6E3KurPr2jaznT9COFZ%2BpdxETn9LwpsuTHkCh5ACSua3VZwixT%2BWx%2F%2FC5%2BNBW5pZFHO886O8mV8SGPAfkyg0AtP9YJ4gYqmteTMrLOpcM%2BUa16fRoMgfFmnr72718K5AJhTiYEpm4mrMrKwLBWjAcQrEUQwZPdegRZH8JhN8sWTR6Xc%2FOviYGqyqpZWc%2BXsonSjX9uoMpRYeM8VYKV2dkrMLCHmMMGOqUBPDvYv390tOXXT7OfLBJR6YF9RfUBYz%2BYwMcDnnAlbmQteF%2BsRA06SUTE8Ypj2x8KvhfOffNQI2ZNLQQuEF%2Fde8Xau7tbqxuTNvNrD4IrMsWF17UWpc3UqQqFkNc0Hsj1k1NNXPyE%2BYw%2F8wyz%2Bx48ASyjn7Ov2%2FJaH15qJCrNqk2r0%2FHCNFoFcZ%2BoD5%2FBPDBELw5jUVsJZgccvXqU7%2BNog%2FhF3rU6&X-Amz-Signature=ce90c776592661eb0da906eaa93661ad150f79f16a48558f7a37c870ceec81b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSIWMX4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFHXHfN7enuqwirnJHBLI%2BhlsaYuuVdZDdvoW4GlJPzAiEAktzF10mWYftmXXqHHALQ%2BkXZHgMEnTgtp3xiLz8SXnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM69B%2FI5biXFma9iwCrcA5j3AUBgiWID%2FlHE%2B1Yeo6wQSAUQxBD6K1euuCNcf6J%2BL9iLE5uGZnTkFBYiHE6K4qwibyYQgM1CTZeAZ%2BVFPV7ugyYXkhpg83HhSIsFpnKXCqEJnSaTzUTFkmghgqHfO4lQxRR%2BqrTNAE3L8RnxoemwEdE65Bzht7JJ5t%2FgTXNkKXFuep4YUxxigNwttUEhTKwgr8EnOh1f1iJHQaLyPExtIFGlM6zk8MzQtUgsWVRPaF1eKJOH6gb08GJKCedXdguYtcBIXjPZvYrL%2FMzp0WgD%2FjlJhpAnqAQzchl0eGt4nGfBx66TGyYTbyMl1r%2F%2BeBl%2BtuHUTqjtYQjNXr11ygK%2B8QZnx2C6V%2FqCjnVKEd%2BS7J9ZKrvozBuNPqvjZY6JOHysElkhw2esIBO8xLAe7xJ5y65X2s%2F0YWtp9L6E3KurPr2jaznT9COFZ%2BpdxETn9LwpsuTHkCh5ACSua3VZwixT%2BWx%2F%2FC5%2BNBW5pZFHO886O8mV8SGPAfkyg0AtP9YJ4gYqmteTMrLOpcM%2BUa16fRoMgfFmnr72718K5AJhTiYEpm4mrMrKwLBWjAcQrEUQwZPdegRZH8JhN8sWTR6Xc%2FOviYGqyqpZWc%2BXsonSjX9uoMpRYeM8VYKV2dkrMLCHmMMGOqUBPDvYv390tOXXT7OfLBJR6YF9RfUBYz%2BYwMcDnnAlbmQteF%2BsRA06SUTE8Ypj2x8KvhfOffNQI2ZNLQQuEF%2Fde8Xau7tbqxuTNvNrD4IrMsWF17UWpc3UqQqFkNc0Hsj1k1NNXPyE%2BYw%2F8wyz%2Bx48ASyjn7Ov2%2FJaH15qJCrNqk2r0%2FHCNFoFcZ%2BoD5%2FBPDBELw5jUVsJZgccvXqU7%2BNog%2FhF3rU6&X-Amz-Signature=1374774d22813a4d16988c4803017a50f6dfd1070bbd871272a1cf26e9420fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSIWMX4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFHXHfN7enuqwirnJHBLI%2BhlsaYuuVdZDdvoW4GlJPzAiEAktzF10mWYftmXXqHHALQ%2BkXZHgMEnTgtp3xiLz8SXnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM69B%2FI5biXFma9iwCrcA5j3AUBgiWID%2FlHE%2B1Yeo6wQSAUQxBD6K1euuCNcf6J%2BL9iLE5uGZnTkFBYiHE6K4qwibyYQgM1CTZeAZ%2BVFPV7ugyYXkhpg83HhSIsFpnKXCqEJnSaTzUTFkmghgqHfO4lQxRR%2BqrTNAE3L8RnxoemwEdE65Bzht7JJ5t%2FgTXNkKXFuep4YUxxigNwttUEhTKwgr8EnOh1f1iJHQaLyPExtIFGlM6zk8MzQtUgsWVRPaF1eKJOH6gb08GJKCedXdguYtcBIXjPZvYrL%2FMzp0WgD%2FjlJhpAnqAQzchl0eGt4nGfBx66TGyYTbyMl1r%2F%2BeBl%2BtuHUTqjtYQjNXr11ygK%2B8QZnx2C6V%2FqCjnVKEd%2BS7J9ZKrvozBuNPqvjZY6JOHysElkhw2esIBO8xLAe7xJ5y65X2s%2F0YWtp9L6E3KurPr2jaznT9COFZ%2BpdxETn9LwpsuTHkCh5ACSua3VZwixT%2BWx%2F%2FC5%2BNBW5pZFHO886O8mV8SGPAfkyg0AtP9YJ4gYqmteTMrLOpcM%2BUa16fRoMgfFmnr72718K5AJhTiYEpm4mrMrKwLBWjAcQrEUQwZPdegRZH8JhN8sWTR6Xc%2FOviYGqyqpZWc%2BXsonSjX9uoMpRYeM8VYKV2dkrMLCHmMMGOqUBPDvYv390tOXXT7OfLBJR6YF9RfUBYz%2BYwMcDnnAlbmQteF%2BsRA06SUTE8Ypj2x8KvhfOffNQI2ZNLQQuEF%2Fde8Xau7tbqxuTNvNrD4IrMsWF17UWpc3UqQqFkNc0Hsj1k1NNXPyE%2BYw%2F8wyz%2Bx48ASyjn7Ov2%2FJaH15qJCrNqk2r0%2FHCNFoFcZ%2BoD5%2FBPDBELw5jUVsJZgccvXqU7%2BNog%2FhF3rU6&X-Amz-Signature=81143d7ed6ef56210d601134c4c9d0c574eee4297a037d88f55f56699765423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSIWMX4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFHXHfN7enuqwirnJHBLI%2BhlsaYuuVdZDdvoW4GlJPzAiEAktzF10mWYftmXXqHHALQ%2BkXZHgMEnTgtp3xiLz8SXnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM69B%2FI5biXFma9iwCrcA5j3AUBgiWID%2FlHE%2B1Yeo6wQSAUQxBD6K1euuCNcf6J%2BL9iLE5uGZnTkFBYiHE6K4qwibyYQgM1CTZeAZ%2BVFPV7ugyYXkhpg83HhSIsFpnKXCqEJnSaTzUTFkmghgqHfO4lQxRR%2BqrTNAE3L8RnxoemwEdE65Bzht7JJ5t%2FgTXNkKXFuep4YUxxigNwttUEhTKwgr8EnOh1f1iJHQaLyPExtIFGlM6zk8MzQtUgsWVRPaF1eKJOH6gb08GJKCedXdguYtcBIXjPZvYrL%2FMzp0WgD%2FjlJhpAnqAQzchl0eGt4nGfBx66TGyYTbyMl1r%2F%2BeBl%2BtuHUTqjtYQjNXr11ygK%2B8QZnx2C6V%2FqCjnVKEd%2BS7J9ZKrvozBuNPqvjZY6JOHysElkhw2esIBO8xLAe7xJ5y65X2s%2F0YWtp9L6E3KurPr2jaznT9COFZ%2BpdxETn9LwpsuTHkCh5ACSua3VZwixT%2BWx%2F%2FC5%2BNBW5pZFHO886O8mV8SGPAfkyg0AtP9YJ4gYqmteTMrLOpcM%2BUa16fRoMgfFmnr72718K5AJhTiYEpm4mrMrKwLBWjAcQrEUQwZPdegRZH8JhN8sWTR6Xc%2FOviYGqyqpZWc%2BXsonSjX9uoMpRYeM8VYKV2dkrMLCHmMMGOqUBPDvYv390tOXXT7OfLBJR6YF9RfUBYz%2BYwMcDnnAlbmQteF%2BsRA06SUTE8Ypj2x8KvhfOffNQI2ZNLQQuEF%2Fde8Xau7tbqxuTNvNrD4IrMsWF17UWpc3UqQqFkNc0Hsj1k1NNXPyE%2BYw%2F8wyz%2Bx48ASyjn7Ov2%2FJaH15qJCrNqk2r0%2FHCNFoFcZ%2BoD5%2FBPDBELw5jUVsJZgccvXqU7%2BNog%2FhF3rU6&X-Amz-Signature=5c2625050fac1b6932f8432708865a0511801244871f7d0771b6ca9693dfeddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSIWMX4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGFHXHfN7enuqwirnJHBLI%2BhlsaYuuVdZDdvoW4GlJPzAiEAktzF10mWYftmXXqHHALQ%2BkXZHgMEnTgtp3xiLz8SXnQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM69B%2FI5biXFma9iwCrcA5j3AUBgiWID%2FlHE%2B1Yeo6wQSAUQxBD6K1euuCNcf6J%2BL9iLE5uGZnTkFBYiHE6K4qwibyYQgM1CTZeAZ%2BVFPV7ugyYXkhpg83HhSIsFpnKXCqEJnSaTzUTFkmghgqHfO4lQxRR%2BqrTNAE3L8RnxoemwEdE65Bzht7JJ5t%2FgTXNkKXFuep4YUxxigNwttUEhTKwgr8EnOh1f1iJHQaLyPExtIFGlM6zk8MzQtUgsWVRPaF1eKJOH6gb08GJKCedXdguYtcBIXjPZvYrL%2FMzp0WgD%2FjlJhpAnqAQzchl0eGt4nGfBx66TGyYTbyMl1r%2F%2BeBl%2BtuHUTqjtYQjNXr11ygK%2B8QZnx2C6V%2FqCjnVKEd%2BS7J9ZKrvozBuNPqvjZY6JOHysElkhw2esIBO8xLAe7xJ5y65X2s%2F0YWtp9L6E3KurPr2jaznT9COFZ%2BpdxETn9LwpsuTHkCh5ACSua3VZwixT%2BWx%2F%2FC5%2BNBW5pZFHO886O8mV8SGPAfkyg0AtP9YJ4gYqmteTMrLOpcM%2BUa16fRoMgfFmnr72718K5AJhTiYEpm4mrMrKwLBWjAcQrEUQwZPdegRZH8JhN8sWTR6Xc%2FOviYGqyqpZWc%2BXsonSjX9uoMpRYeM8VYKV2dkrMLCHmMMGOqUBPDvYv390tOXXT7OfLBJR6YF9RfUBYz%2BYwMcDnnAlbmQteF%2BsRA06SUTE8Ypj2x8KvhfOffNQI2ZNLQQuEF%2Fde8Xau7tbqxuTNvNrD4IrMsWF17UWpc3UqQqFkNc0Hsj1k1NNXPyE%2BYw%2F8wyz%2Bx48ASyjn7Ov2%2FJaH15qJCrNqk2r0%2FHCNFoFcZ%2BoD5%2FBPDBELw5jUVsJZgccvXqU7%2BNog%2FhF3rU6&X-Amz-Signature=da97ad79d8db57ac4621f07724968c8d4c5d1a85b7c506171b21365643e03efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
