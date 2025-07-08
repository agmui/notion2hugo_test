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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTY4P4XI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGELAyo3JwernNcJuHM6XYrpbc5FJE2uiXYMr2FP8l6AiEAw2w%2B2znpxn2lN3SZSgIJGN4P3LrPLiFBThmPGb%2FSiYwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4ag6%2FSIGxEGdv%2BISrcA%2FaHNswoYihh0rKY6Y5KpgCNnuFASd1dwL4G3Q%2Ba2a%2BOTqQbXPCATKbtKLpjDbrdlCsNI5GurZ%2FXLHbPipYYblVjbmZ5s0t0Rz%2F5Nl%2F2m%2FTisX9Is7z2wKxlfUiwKw9vZDhh9VCPJNfsFyJFG04lpBQx%2F65YVIZQRhkGYvu30V9bVZkuVPZM234q3IP%2BzcZHfvHcnKs40kTFV6mnQSHB%2Bnvn83NFeO4MFcBYhB1x8cyu%2FhKvLLKti8QhYk20l2ZxmXmaonif0WuIU53etsXrtvoZgIONAT0yE2FNznkTzBwI990%2ByCbQBYt30f4IlPMgSn1%2FiYIyjjZTf8OifNXxQ0mZD0NVKDSq2QEn8l7RCk3yOubBpojXnU%2Bi7EHA1y8VNL%2BgPJyT1R6E89PY5NiyHAulEz158vq9dpgJ0NYf3TDOA8WKJ%2FpXFiKZZ%2BlC5MNwSYHQ39tnWFTFbjZB7x3eEAE5GFdZe6AwbmJfsGxXimCJO4GjAt9WciUVQcmVNYNSNFmCrjwewkuOcEO5amevAgWNDa45FQlX8s6Opq0qtnT%2Fht18W7yqLj%2B8vir9POvy1RN2KAGhQzP6NcM6W23kYmwmvwaFQwtodlS%2BUM83NDLVPt8Xvr3%2BwhHUuL1AMLLIs8MGOqUBBTba8egdsw1ZJzu0Rr07jZdaqUwKmYngATyM7IkFboBJ7zaQA5SKLIX5eRMmCeMtV%2B4UeAnTBonxY%2Fe21bZ21ocukNuThedZ3aSv5MsQfNu%2FLfAOcqQzWpkC9GIue3eYX0UVwamtMI%2FKVCcnSYKK%2BE8royciBPyIb1QileCK%2B2XMi2CfSTNFwHjatpXN%2BNC7ol2mtPoVEJAsMHnGzR0byU9NCsDl&X-Amz-Signature=187c0c4a1493252510ebae393424a548875972b209fb57244ba2c35c138d8b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTY4P4XI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGELAyo3JwernNcJuHM6XYrpbc5FJE2uiXYMr2FP8l6AiEAw2w%2B2znpxn2lN3SZSgIJGN4P3LrPLiFBThmPGb%2FSiYwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4ag6%2FSIGxEGdv%2BISrcA%2FaHNswoYihh0rKY6Y5KpgCNnuFASd1dwL4G3Q%2Ba2a%2BOTqQbXPCATKbtKLpjDbrdlCsNI5GurZ%2FXLHbPipYYblVjbmZ5s0t0Rz%2F5Nl%2F2m%2FTisX9Is7z2wKxlfUiwKw9vZDhh9VCPJNfsFyJFG04lpBQx%2F65YVIZQRhkGYvu30V9bVZkuVPZM234q3IP%2BzcZHfvHcnKs40kTFV6mnQSHB%2Bnvn83NFeO4MFcBYhB1x8cyu%2FhKvLLKti8QhYk20l2ZxmXmaonif0WuIU53etsXrtvoZgIONAT0yE2FNznkTzBwI990%2ByCbQBYt30f4IlPMgSn1%2FiYIyjjZTf8OifNXxQ0mZD0NVKDSq2QEn8l7RCk3yOubBpojXnU%2Bi7EHA1y8VNL%2BgPJyT1R6E89PY5NiyHAulEz158vq9dpgJ0NYf3TDOA8WKJ%2FpXFiKZZ%2BlC5MNwSYHQ39tnWFTFbjZB7x3eEAE5GFdZe6AwbmJfsGxXimCJO4GjAt9WciUVQcmVNYNSNFmCrjwewkuOcEO5amevAgWNDa45FQlX8s6Opq0qtnT%2Fht18W7yqLj%2B8vir9POvy1RN2KAGhQzP6NcM6W23kYmwmvwaFQwtodlS%2BUM83NDLVPt8Xvr3%2BwhHUuL1AMLLIs8MGOqUBBTba8egdsw1ZJzu0Rr07jZdaqUwKmYngATyM7IkFboBJ7zaQA5SKLIX5eRMmCeMtV%2B4UeAnTBonxY%2Fe21bZ21ocukNuThedZ3aSv5MsQfNu%2FLfAOcqQzWpkC9GIue3eYX0UVwamtMI%2FKVCcnSYKK%2BE8royciBPyIb1QileCK%2B2XMi2CfSTNFwHjatpXN%2BNC7ol2mtPoVEJAsMHnGzR0byU9NCsDl&X-Amz-Signature=d30d4dbc4da67b602093c73f52549f12df312b2fe0dbe3437fbec1692c3a31a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTY4P4XI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGELAyo3JwernNcJuHM6XYrpbc5FJE2uiXYMr2FP8l6AiEAw2w%2B2znpxn2lN3SZSgIJGN4P3LrPLiFBThmPGb%2FSiYwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4ag6%2FSIGxEGdv%2BISrcA%2FaHNswoYihh0rKY6Y5KpgCNnuFASd1dwL4G3Q%2Ba2a%2BOTqQbXPCATKbtKLpjDbrdlCsNI5GurZ%2FXLHbPipYYblVjbmZ5s0t0Rz%2F5Nl%2F2m%2FTisX9Is7z2wKxlfUiwKw9vZDhh9VCPJNfsFyJFG04lpBQx%2F65YVIZQRhkGYvu30V9bVZkuVPZM234q3IP%2BzcZHfvHcnKs40kTFV6mnQSHB%2Bnvn83NFeO4MFcBYhB1x8cyu%2FhKvLLKti8QhYk20l2ZxmXmaonif0WuIU53etsXrtvoZgIONAT0yE2FNznkTzBwI990%2ByCbQBYt30f4IlPMgSn1%2FiYIyjjZTf8OifNXxQ0mZD0NVKDSq2QEn8l7RCk3yOubBpojXnU%2Bi7EHA1y8VNL%2BgPJyT1R6E89PY5NiyHAulEz158vq9dpgJ0NYf3TDOA8WKJ%2FpXFiKZZ%2BlC5MNwSYHQ39tnWFTFbjZB7x3eEAE5GFdZe6AwbmJfsGxXimCJO4GjAt9WciUVQcmVNYNSNFmCrjwewkuOcEO5amevAgWNDa45FQlX8s6Opq0qtnT%2Fht18W7yqLj%2B8vir9POvy1RN2KAGhQzP6NcM6W23kYmwmvwaFQwtodlS%2BUM83NDLVPt8Xvr3%2BwhHUuL1AMLLIs8MGOqUBBTba8egdsw1ZJzu0Rr07jZdaqUwKmYngATyM7IkFboBJ7zaQA5SKLIX5eRMmCeMtV%2B4UeAnTBonxY%2Fe21bZ21ocukNuThedZ3aSv5MsQfNu%2FLfAOcqQzWpkC9GIue3eYX0UVwamtMI%2FKVCcnSYKK%2BE8royciBPyIb1QileCK%2B2XMi2CfSTNFwHjatpXN%2BNC7ol2mtPoVEJAsMHnGzR0byU9NCsDl&X-Amz-Signature=bc34ae5e3d6a2e4ba330a7c318c194acddcab253f01babbbf3f51605d892022d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTY4P4XI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGELAyo3JwernNcJuHM6XYrpbc5FJE2uiXYMr2FP8l6AiEAw2w%2B2znpxn2lN3SZSgIJGN4P3LrPLiFBThmPGb%2FSiYwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4ag6%2FSIGxEGdv%2BISrcA%2FaHNswoYihh0rKY6Y5KpgCNnuFASd1dwL4G3Q%2Ba2a%2BOTqQbXPCATKbtKLpjDbrdlCsNI5GurZ%2FXLHbPipYYblVjbmZ5s0t0Rz%2F5Nl%2F2m%2FTisX9Is7z2wKxlfUiwKw9vZDhh9VCPJNfsFyJFG04lpBQx%2F65YVIZQRhkGYvu30V9bVZkuVPZM234q3IP%2BzcZHfvHcnKs40kTFV6mnQSHB%2Bnvn83NFeO4MFcBYhB1x8cyu%2FhKvLLKti8QhYk20l2ZxmXmaonif0WuIU53etsXrtvoZgIONAT0yE2FNznkTzBwI990%2ByCbQBYt30f4IlPMgSn1%2FiYIyjjZTf8OifNXxQ0mZD0NVKDSq2QEn8l7RCk3yOubBpojXnU%2Bi7EHA1y8VNL%2BgPJyT1R6E89PY5NiyHAulEz158vq9dpgJ0NYf3TDOA8WKJ%2FpXFiKZZ%2BlC5MNwSYHQ39tnWFTFbjZB7x3eEAE5GFdZe6AwbmJfsGxXimCJO4GjAt9WciUVQcmVNYNSNFmCrjwewkuOcEO5amevAgWNDa45FQlX8s6Opq0qtnT%2Fht18W7yqLj%2B8vir9POvy1RN2KAGhQzP6NcM6W23kYmwmvwaFQwtodlS%2BUM83NDLVPt8Xvr3%2BwhHUuL1AMLLIs8MGOqUBBTba8egdsw1ZJzu0Rr07jZdaqUwKmYngATyM7IkFboBJ7zaQA5SKLIX5eRMmCeMtV%2B4UeAnTBonxY%2Fe21bZ21ocukNuThedZ3aSv5MsQfNu%2FLfAOcqQzWpkC9GIue3eYX0UVwamtMI%2FKVCcnSYKK%2BE8royciBPyIb1QileCK%2B2XMi2CfSTNFwHjatpXN%2BNC7ol2mtPoVEJAsMHnGzR0byU9NCsDl&X-Amz-Signature=fbe268221b2198b296043921c0163dc7994171ac44462fdc99cb7f1fc5063613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTY4P4XI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGELAyo3JwernNcJuHM6XYrpbc5FJE2uiXYMr2FP8l6AiEAw2w%2B2znpxn2lN3SZSgIJGN4P3LrPLiFBThmPGb%2FSiYwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4ag6%2FSIGxEGdv%2BISrcA%2FaHNswoYihh0rKY6Y5KpgCNnuFASd1dwL4G3Q%2Ba2a%2BOTqQbXPCATKbtKLpjDbrdlCsNI5GurZ%2FXLHbPipYYblVjbmZ5s0t0Rz%2F5Nl%2F2m%2FTisX9Is7z2wKxlfUiwKw9vZDhh9VCPJNfsFyJFG04lpBQx%2F65YVIZQRhkGYvu30V9bVZkuVPZM234q3IP%2BzcZHfvHcnKs40kTFV6mnQSHB%2Bnvn83NFeO4MFcBYhB1x8cyu%2FhKvLLKti8QhYk20l2ZxmXmaonif0WuIU53etsXrtvoZgIONAT0yE2FNznkTzBwI990%2ByCbQBYt30f4IlPMgSn1%2FiYIyjjZTf8OifNXxQ0mZD0NVKDSq2QEn8l7RCk3yOubBpojXnU%2Bi7EHA1y8VNL%2BgPJyT1R6E89PY5NiyHAulEz158vq9dpgJ0NYf3TDOA8WKJ%2FpXFiKZZ%2BlC5MNwSYHQ39tnWFTFbjZB7x3eEAE5GFdZe6AwbmJfsGxXimCJO4GjAt9WciUVQcmVNYNSNFmCrjwewkuOcEO5amevAgWNDa45FQlX8s6Opq0qtnT%2Fht18W7yqLj%2B8vir9POvy1RN2KAGhQzP6NcM6W23kYmwmvwaFQwtodlS%2BUM83NDLVPt8Xvr3%2BwhHUuL1AMLLIs8MGOqUBBTba8egdsw1ZJzu0Rr07jZdaqUwKmYngATyM7IkFboBJ7zaQA5SKLIX5eRMmCeMtV%2B4UeAnTBonxY%2Fe21bZ21ocukNuThedZ3aSv5MsQfNu%2FLfAOcqQzWpkC9GIue3eYX0UVwamtMI%2FKVCcnSYKK%2BE8royciBPyIb1QileCK%2B2XMi2CfSTNFwHjatpXN%2BNC7ol2mtPoVEJAsMHnGzR0byU9NCsDl&X-Amz-Signature=4fb4209859494949fd7c77ea898685f4c4f9311c38dfa0aef324df9e890d220c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTY4P4XI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGELAyo3JwernNcJuHM6XYrpbc5FJE2uiXYMr2FP8l6AiEAw2w%2B2znpxn2lN3SZSgIJGN4P3LrPLiFBThmPGb%2FSiYwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4ag6%2FSIGxEGdv%2BISrcA%2FaHNswoYihh0rKY6Y5KpgCNnuFASd1dwL4G3Q%2Ba2a%2BOTqQbXPCATKbtKLpjDbrdlCsNI5GurZ%2FXLHbPipYYblVjbmZ5s0t0Rz%2F5Nl%2F2m%2FTisX9Is7z2wKxlfUiwKw9vZDhh9VCPJNfsFyJFG04lpBQx%2F65YVIZQRhkGYvu30V9bVZkuVPZM234q3IP%2BzcZHfvHcnKs40kTFV6mnQSHB%2Bnvn83NFeO4MFcBYhB1x8cyu%2FhKvLLKti8QhYk20l2ZxmXmaonif0WuIU53etsXrtvoZgIONAT0yE2FNznkTzBwI990%2ByCbQBYt30f4IlPMgSn1%2FiYIyjjZTf8OifNXxQ0mZD0NVKDSq2QEn8l7RCk3yOubBpojXnU%2Bi7EHA1y8VNL%2BgPJyT1R6E89PY5NiyHAulEz158vq9dpgJ0NYf3TDOA8WKJ%2FpXFiKZZ%2BlC5MNwSYHQ39tnWFTFbjZB7x3eEAE5GFdZe6AwbmJfsGxXimCJO4GjAt9WciUVQcmVNYNSNFmCrjwewkuOcEO5amevAgWNDa45FQlX8s6Opq0qtnT%2Fht18W7yqLj%2B8vir9POvy1RN2KAGhQzP6NcM6W23kYmwmvwaFQwtodlS%2BUM83NDLVPt8Xvr3%2BwhHUuL1AMLLIs8MGOqUBBTba8egdsw1ZJzu0Rr07jZdaqUwKmYngATyM7IkFboBJ7zaQA5SKLIX5eRMmCeMtV%2B4UeAnTBonxY%2Fe21bZ21ocukNuThedZ3aSv5MsQfNu%2FLfAOcqQzWpkC9GIue3eYX0UVwamtMI%2FKVCcnSYKK%2BE8royciBPyIb1QileCK%2B2XMi2CfSTNFwHjatpXN%2BNC7ol2mtPoVEJAsMHnGzR0byU9NCsDl&X-Amz-Signature=55219fa4c726deb704feaf43078e8e2dd0d5a6cc968b2234e3340dba44c82f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
