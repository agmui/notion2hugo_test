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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFHLRF3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPX6o7nfkbwrRPqDBzAGtHScReVsYUghFX1d6JZz9tSAiEAmHLBM4mm6h%2BqGE2PvMrg%2FgsiODM7Zv6K7Ppq1YK%2Fv1Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC8y4U8XFb1ltmu3GCrcA7RanoHm9ckPtFlbmADdClCe9JxeQrRnheipxAo5IQnkyPkQOfQmH9%2Bk6t7oycg9cjnY7SHNAHSrQYoVDoyLOLcXQWB2lEf9VPoYsaQ1XEVeGGmVlIYO7YqPLduk%2FJTzdhFbT7upGHEkzovJhydHiwOQy%2FjyNqmFkVXz51TW4fzzju2l8VgtDjPsJNjlSxpAnielFtZV%2FXIbOzkTQbMjFiszbxLDnVjJG1WmbHRcKqldLhfQcSmdwYOU2TqSRrxlezYvKbA6MR%2BYHMuUW5eK2QdcAXHfBsD%2FJ5cjAoTraPB4iRIqbpXASH%2B8cTVckvolJZNIiuHzqTrIM%2Bxc2M6vVDh0w%2FhdIZDazDR%2Fjg3bgFI8Ptn%2FoquSgUySd8WUM%2F1TfKq4u0KZx2riFTUWp9RpuoLlorXL5TnJw0TDe9eKrqivM0s7ICcSALZLZVmjkgzcoo1PnikavtBtPhooF%2Bt3eFNecD%2Bn4uRKimDhPCT63Ehr3i5FkTGD6aL54MK5oNQrDLJzPVa7M3L%2BUB6lzEnGbk1ChPRJoLXN%2FNGi2Y9R%2B5U2Q4LZtZFynQHHHv%2BmodGQZ7cNnp4YKsY8OWQpe0ulDyOnrwS1N5UQ9pILrbVsHQ8Zf8gV%2F0XXx32cNUFvMKj%2ByL8GOqUBl1S7hYWUeDtDOp7ezH85jOdJqthF8INANQl8iBnMOBXsH13tjWriVvHKnkZ33kGo47SC286NFRaWyagn6UZJYDRozU2mn8M%2FSYGSQFLVdd6mBU14N%2BEzjtcSn5qEux1KLxD8amEgkap7TGz%2Fs0FeiF50sQATmaNJaLV7uXDWy%2FQ01oTzlPThJSNIMjOX4VF11%2BPJGcVViZ7OPByymzkN1xZfW2ci&X-Amz-Signature=0524c1fa5886c47283184dfa59650b36b62076f636a5d943ee7754d879028fc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFHLRF3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPX6o7nfkbwrRPqDBzAGtHScReVsYUghFX1d6JZz9tSAiEAmHLBM4mm6h%2BqGE2PvMrg%2FgsiODM7Zv6K7Ppq1YK%2Fv1Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC8y4U8XFb1ltmu3GCrcA7RanoHm9ckPtFlbmADdClCe9JxeQrRnheipxAo5IQnkyPkQOfQmH9%2Bk6t7oycg9cjnY7SHNAHSrQYoVDoyLOLcXQWB2lEf9VPoYsaQ1XEVeGGmVlIYO7YqPLduk%2FJTzdhFbT7upGHEkzovJhydHiwOQy%2FjyNqmFkVXz51TW4fzzju2l8VgtDjPsJNjlSxpAnielFtZV%2FXIbOzkTQbMjFiszbxLDnVjJG1WmbHRcKqldLhfQcSmdwYOU2TqSRrxlezYvKbA6MR%2BYHMuUW5eK2QdcAXHfBsD%2FJ5cjAoTraPB4iRIqbpXASH%2B8cTVckvolJZNIiuHzqTrIM%2Bxc2M6vVDh0w%2FhdIZDazDR%2Fjg3bgFI8Ptn%2FoquSgUySd8WUM%2F1TfKq4u0KZx2riFTUWp9RpuoLlorXL5TnJw0TDe9eKrqivM0s7ICcSALZLZVmjkgzcoo1PnikavtBtPhooF%2Bt3eFNecD%2Bn4uRKimDhPCT63Ehr3i5FkTGD6aL54MK5oNQrDLJzPVa7M3L%2BUB6lzEnGbk1ChPRJoLXN%2FNGi2Y9R%2B5U2Q4LZtZFynQHHHv%2BmodGQZ7cNnp4YKsY8OWQpe0ulDyOnrwS1N5UQ9pILrbVsHQ8Zf8gV%2F0XXx32cNUFvMKj%2ByL8GOqUBl1S7hYWUeDtDOp7ezH85jOdJqthF8INANQl8iBnMOBXsH13tjWriVvHKnkZ33kGo47SC286NFRaWyagn6UZJYDRozU2mn8M%2FSYGSQFLVdd6mBU14N%2BEzjtcSn5qEux1KLxD8amEgkap7TGz%2Fs0FeiF50sQATmaNJaLV7uXDWy%2FQ01oTzlPThJSNIMjOX4VF11%2BPJGcVViZ7OPByymzkN1xZfW2ci&X-Amz-Signature=70e2ca03e5aadcb6820ea1e976d4548c72a21aa12bd10cd1a91105f7ebb54b20&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFHLRF3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPX6o7nfkbwrRPqDBzAGtHScReVsYUghFX1d6JZz9tSAiEAmHLBM4mm6h%2BqGE2PvMrg%2FgsiODM7Zv6K7Ppq1YK%2Fv1Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC8y4U8XFb1ltmu3GCrcA7RanoHm9ckPtFlbmADdClCe9JxeQrRnheipxAo5IQnkyPkQOfQmH9%2Bk6t7oycg9cjnY7SHNAHSrQYoVDoyLOLcXQWB2lEf9VPoYsaQ1XEVeGGmVlIYO7YqPLduk%2FJTzdhFbT7upGHEkzovJhydHiwOQy%2FjyNqmFkVXz51TW4fzzju2l8VgtDjPsJNjlSxpAnielFtZV%2FXIbOzkTQbMjFiszbxLDnVjJG1WmbHRcKqldLhfQcSmdwYOU2TqSRrxlezYvKbA6MR%2BYHMuUW5eK2QdcAXHfBsD%2FJ5cjAoTraPB4iRIqbpXASH%2B8cTVckvolJZNIiuHzqTrIM%2Bxc2M6vVDh0w%2FhdIZDazDR%2Fjg3bgFI8Ptn%2FoquSgUySd8WUM%2F1TfKq4u0KZx2riFTUWp9RpuoLlorXL5TnJw0TDe9eKrqivM0s7ICcSALZLZVmjkgzcoo1PnikavtBtPhooF%2Bt3eFNecD%2Bn4uRKimDhPCT63Ehr3i5FkTGD6aL54MK5oNQrDLJzPVa7M3L%2BUB6lzEnGbk1ChPRJoLXN%2FNGi2Y9R%2B5U2Q4LZtZFynQHHHv%2BmodGQZ7cNnp4YKsY8OWQpe0ulDyOnrwS1N5UQ9pILrbVsHQ8Zf8gV%2F0XXx32cNUFvMKj%2ByL8GOqUBl1S7hYWUeDtDOp7ezH85jOdJqthF8INANQl8iBnMOBXsH13tjWriVvHKnkZ33kGo47SC286NFRaWyagn6UZJYDRozU2mn8M%2FSYGSQFLVdd6mBU14N%2BEzjtcSn5qEux1KLxD8amEgkap7TGz%2Fs0FeiF50sQATmaNJaLV7uXDWy%2FQ01oTzlPThJSNIMjOX4VF11%2BPJGcVViZ7OPByymzkN1xZfW2ci&X-Amz-Signature=abf53cac0fb4673e9ff76731767b1a05564436c4dd3f74ba9a31f745f6f6b08a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFHLRF3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPX6o7nfkbwrRPqDBzAGtHScReVsYUghFX1d6JZz9tSAiEAmHLBM4mm6h%2BqGE2PvMrg%2FgsiODM7Zv6K7Ppq1YK%2Fv1Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC8y4U8XFb1ltmu3GCrcA7RanoHm9ckPtFlbmADdClCe9JxeQrRnheipxAo5IQnkyPkQOfQmH9%2Bk6t7oycg9cjnY7SHNAHSrQYoVDoyLOLcXQWB2lEf9VPoYsaQ1XEVeGGmVlIYO7YqPLduk%2FJTzdhFbT7upGHEkzovJhydHiwOQy%2FjyNqmFkVXz51TW4fzzju2l8VgtDjPsJNjlSxpAnielFtZV%2FXIbOzkTQbMjFiszbxLDnVjJG1WmbHRcKqldLhfQcSmdwYOU2TqSRrxlezYvKbA6MR%2BYHMuUW5eK2QdcAXHfBsD%2FJ5cjAoTraPB4iRIqbpXASH%2B8cTVckvolJZNIiuHzqTrIM%2Bxc2M6vVDh0w%2FhdIZDazDR%2Fjg3bgFI8Ptn%2FoquSgUySd8WUM%2F1TfKq4u0KZx2riFTUWp9RpuoLlorXL5TnJw0TDe9eKrqivM0s7ICcSALZLZVmjkgzcoo1PnikavtBtPhooF%2Bt3eFNecD%2Bn4uRKimDhPCT63Ehr3i5FkTGD6aL54MK5oNQrDLJzPVa7M3L%2BUB6lzEnGbk1ChPRJoLXN%2FNGi2Y9R%2B5U2Q4LZtZFynQHHHv%2BmodGQZ7cNnp4YKsY8OWQpe0ulDyOnrwS1N5UQ9pILrbVsHQ8Zf8gV%2F0XXx32cNUFvMKj%2ByL8GOqUBl1S7hYWUeDtDOp7ezH85jOdJqthF8INANQl8iBnMOBXsH13tjWriVvHKnkZ33kGo47SC286NFRaWyagn6UZJYDRozU2mn8M%2FSYGSQFLVdd6mBU14N%2BEzjtcSn5qEux1KLxD8amEgkap7TGz%2Fs0FeiF50sQATmaNJaLV7uXDWy%2FQ01oTzlPThJSNIMjOX4VF11%2BPJGcVViZ7OPByymzkN1xZfW2ci&X-Amz-Signature=f8e31f8dacaf20e8b56c4d8c6be0a7153f336c9f0ad963e9e5e77e42a64088b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFHLRF3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPX6o7nfkbwrRPqDBzAGtHScReVsYUghFX1d6JZz9tSAiEAmHLBM4mm6h%2BqGE2PvMrg%2FgsiODM7Zv6K7Ppq1YK%2Fv1Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC8y4U8XFb1ltmu3GCrcA7RanoHm9ckPtFlbmADdClCe9JxeQrRnheipxAo5IQnkyPkQOfQmH9%2Bk6t7oycg9cjnY7SHNAHSrQYoVDoyLOLcXQWB2lEf9VPoYsaQ1XEVeGGmVlIYO7YqPLduk%2FJTzdhFbT7upGHEkzovJhydHiwOQy%2FjyNqmFkVXz51TW4fzzju2l8VgtDjPsJNjlSxpAnielFtZV%2FXIbOzkTQbMjFiszbxLDnVjJG1WmbHRcKqldLhfQcSmdwYOU2TqSRrxlezYvKbA6MR%2BYHMuUW5eK2QdcAXHfBsD%2FJ5cjAoTraPB4iRIqbpXASH%2B8cTVckvolJZNIiuHzqTrIM%2Bxc2M6vVDh0w%2FhdIZDazDR%2Fjg3bgFI8Ptn%2FoquSgUySd8WUM%2F1TfKq4u0KZx2riFTUWp9RpuoLlorXL5TnJw0TDe9eKrqivM0s7ICcSALZLZVmjkgzcoo1PnikavtBtPhooF%2Bt3eFNecD%2Bn4uRKimDhPCT63Ehr3i5FkTGD6aL54MK5oNQrDLJzPVa7M3L%2BUB6lzEnGbk1ChPRJoLXN%2FNGi2Y9R%2B5U2Q4LZtZFynQHHHv%2BmodGQZ7cNnp4YKsY8OWQpe0ulDyOnrwS1N5UQ9pILrbVsHQ8Zf8gV%2F0XXx32cNUFvMKj%2ByL8GOqUBl1S7hYWUeDtDOp7ezH85jOdJqthF8INANQl8iBnMOBXsH13tjWriVvHKnkZ33kGo47SC286NFRaWyagn6UZJYDRozU2mn8M%2FSYGSQFLVdd6mBU14N%2BEzjtcSn5qEux1KLxD8amEgkap7TGz%2Fs0FeiF50sQATmaNJaLV7uXDWy%2FQ01oTzlPThJSNIMjOX4VF11%2BPJGcVViZ7OPByymzkN1xZfW2ci&X-Amz-Signature=34b89afc8777283725e3a4e14d44ba6aa35d6f649a4d2f59838d6f4fbfa1cfd9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFHLRF3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPX6o7nfkbwrRPqDBzAGtHScReVsYUghFX1d6JZz9tSAiEAmHLBM4mm6h%2BqGE2PvMrg%2FgsiODM7Zv6K7Ppq1YK%2Fv1Yq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC8y4U8XFb1ltmu3GCrcA7RanoHm9ckPtFlbmADdClCe9JxeQrRnheipxAo5IQnkyPkQOfQmH9%2Bk6t7oycg9cjnY7SHNAHSrQYoVDoyLOLcXQWB2lEf9VPoYsaQ1XEVeGGmVlIYO7YqPLduk%2FJTzdhFbT7upGHEkzovJhydHiwOQy%2FjyNqmFkVXz51TW4fzzju2l8VgtDjPsJNjlSxpAnielFtZV%2FXIbOzkTQbMjFiszbxLDnVjJG1WmbHRcKqldLhfQcSmdwYOU2TqSRrxlezYvKbA6MR%2BYHMuUW5eK2QdcAXHfBsD%2FJ5cjAoTraPB4iRIqbpXASH%2B8cTVckvolJZNIiuHzqTrIM%2Bxc2M6vVDh0w%2FhdIZDazDR%2Fjg3bgFI8Ptn%2FoquSgUySd8WUM%2F1TfKq4u0KZx2riFTUWp9RpuoLlorXL5TnJw0TDe9eKrqivM0s7ICcSALZLZVmjkgzcoo1PnikavtBtPhooF%2Bt3eFNecD%2Bn4uRKimDhPCT63Ehr3i5FkTGD6aL54MK5oNQrDLJzPVa7M3L%2BUB6lzEnGbk1ChPRJoLXN%2FNGi2Y9R%2B5U2Q4LZtZFynQHHHv%2BmodGQZ7cNnp4YKsY8OWQpe0ulDyOnrwS1N5UQ9pILrbVsHQ8Zf8gV%2F0XXx32cNUFvMKj%2ByL8GOqUBl1S7hYWUeDtDOp7ezH85jOdJqthF8INANQl8iBnMOBXsH13tjWriVvHKnkZ33kGo47SC286NFRaWyagn6UZJYDRozU2mn8M%2FSYGSQFLVdd6mBU14N%2BEzjtcSn5qEux1KLxD8amEgkap7TGz%2Fs0FeiF50sQATmaNJaLV7uXDWy%2FQ01oTzlPThJSNIMjOX4VF11%2BPJGcVViZ7OPByymzkN1xZfW2ci&X-Amz-Signature=7f36e0a76bfc507105ab623700cfc9c20ba7686fdf6c97397c8aa4f32ed45827&X-Amz-SignedHeaders=host&x-id=GetObject)
