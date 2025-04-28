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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UIFTBGG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPiNWkIC9gBKKNPnjRJdoUdO6joUCeOV0%2FjMVR9H2fwIgaStF5QdT04GJZX66NMrYz61vtvOuKWfUGrfT%2BNBTOLQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM17Br7dZq2Eorhb9ircA%2BtsmtrNU80GF%2FzOC2Bgam35y13uJGShCCYfQUQlxTmXW52NcDWUX0q0wkpNcaPSrMzY8JL5nL8sAwp%2F7xQZgEwwr5Gk4TJortdUD%2Bu775ndzB8S2rKqdQAJOKbr3ZBb3zSW8PeUbwX6vxwRxyQ2syn35i3XMaNe3S3R%2BnvfioI9s2R2%2FOTQI995C9vWxjOYR9f24iwjtKAjUV6nPoBB803%2BV9QNRU42IWP5SwznN3N1cE8KAI%2BBikbXlN6tVjqYcAyT62PJDnltxIESJjU6XHrA%2BDMTyeiXWnJQ7gx%2FtEVtOUypg6GX9m4zsRV2DE4skJOexAdHZMHAEqScVQGo2f7HNSO2a0xOySO%2FKiNmowrTorpbzZ01AJlfCTAorQjpUEW8yGsH2%2FQqNoiq5dv4AamxD4jIkDJBDHBt0StiuTSpCDPYIJ3ymqy%2BSY9Lbak6pTaj9wdEwf%2BS%2BgzblFpZR1%2FW%2BrFjQo5%2BhgmYMSrXn%2BJ9%2FO7tNX3U5LoEjLKkilBiFOXXq6kpgA68b1nMEhH2%2FztORDElXQia2%2FWYkb6XbmLSsSmJFa%2BHI6GAuRFyN5bhDgvmhaXAnhplIr62CpPCoZ8N3imsUUdb6VY612N1zhp7wNFFSIYO62rl6if1MKebv8AGOqUBdA%2FPcjzbnTpUiSC07%2B7sRTvLowOmmsW6eJvS6ymVMy0F6S38MmjbMkRo7ZmiDGJTWzZ%2BwwaOagJ1FcdTd7V2f%2BkI4uB9YXKrIxiZZB0g4Zh4eX7zXseDYCuTC0UMmiRO0q13pe7MG1hnfEfmAARKHcR9uzJwXLPsVF5UIDegiK1sOIeZu3LK01MVGaNisrGsC96hTj9cQYZnbvxQzh4yQF1LiHO0&X-Amz-Signature=e2d32690600a1b6771ab12286a078b8f6ba82af6df579c42ca77ac73b742de42&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UIFTBGG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPiNWkIC9gBKKNPnjRJdoUdO6joUCeOV0%2FjMVR9H2fwIgaStF5QdT04GJZX66NMrYz61vtvOuKWfUGrfT%2BNBTOLQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM17Br7dZq2Eorhb9ircA%2BtsmtrNU80GF%2FzOC2Bgam35y13uJGShCCYfQUQlxTmXW52NcDWUX0q0wkpNcaPSrMzY8JL5nL8sAwp%2F7xQZgEwwr5Gk4TJortdUD%2Bu775ndzB8S2rKqdQAJOKbr3ZBb3zSW8PeUbwX6vxwRxyQ2syn35i3XMaNe3S3R%2BnvfioI9s2R2%2FOTQI995C9vWxjOYR9f24iwjtKAjUV6nPoBB803%2BV9QNRU42IWP5SwznN3N1cE8KAI%2BBikbXlN6tVjqYcAyT62PJDnltxIESJjU6XHrA%2BDMTyeiXWnJQ7gx%2FtEVtOUypg6GX9m4zsRV2DE4skJOexAdHZMHAEqScVQGo2f7HNSO2a0xOySO%2FKiNmowrTorpbzZ01AJlfCTAorQjpUEW8yGsH2%2FQqNoiq5dv4AamxD4jIkDJBDHBt0StiuTSpCDPYIJ3ymqy%2BSY9Lbak6pTaj9wdEwf%2BS%2BgzblFpZR1%2FW%2BrFjQo5%2BhgmYMSrXn%2BJ9%2FO7tNX3U5LoEjLKkilBiFOXXq6kpgA68b1nMEhH2%2FztORDElXQia2%2FWYkb6XbmLSsSmJFa%2BHI6GAuRFyN5bhDgvmhaXAnhplIr62CpPCoZ8N3imsUUdb6VY612N1zhp7wNFFSIYO62rl6if1MKebv8AGOqUBdA%2FPcjzbnTpUiSC07%2B7sRTvLowOmmsW6eJvS6ymVMy0F6S38MmjbMkRo7ZmiDGJTWzZ%2BwwaOagJ1FcdTd7V2f%2BkI4uB9YXKrIxiZZB0g4Zh4eX7zXseDYCuTC0UMmiRO0q13pe7MG1hnfEfmAARKHcR9uzJwXLPsVF5UIDegiK1sOIeZu3LK01MVGaNisrGsC96hTj9cQYZnbvxQzh4yQF1LiHO0&X-Amz-Signature=0db5acf59224eebbfeeae37c176b9c5f8e29dcb09e362d297652dcf2f9058995&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UIFTBGG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPiNWkIC9gBKKNPnjRJdoUdO6joUCeOV0%2FjMVR9H2fwIgaStF5QdT04GJZX66NMrYz61vtvOuKWfUGrfT%2BNBTOLQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM17Br7dZq2Eorhb9ircA%2BtsmtrNU80GF%2FzOC2Bgam35y13uJGShCCYfQUQlxTmXW52NcDWUX0q0wkpNcaPSrMzY8JL5nL8sAwp%2F7xQZgEwwr5Gk4TJortdUD%2Bu775ndzB8S2rKqdQAJOKbr3ZBb3zSW8PeUbwX6vxwRxyQ2syn35i3XMaNe3S3R%2BnvfioI9s2R2%2FOTQI995C9vWxjOYR9f24iwjtKAjUV6nPoBB803%2BV9QNRU42IWP5SwznN3N1cE8KAI%2BBikbXlN6tVjqYcAyT62PJDnltxIESJjU6XHrA%2BDMTyeiXWnJQ7gx%2FtEVtOUypg6GX9m4zsRV2DE4skJOexAdHZMHAEqScVQGo2f7HNSO2a0xOySO%2FKiNmowrTorpbzZ01AJlfCTAorQjpUEW8yGsH2%2FQqNoiq5dv4AamxD4jIkDJBDHBt0StiuTSpCDPYIJ3ymqy%2BSY9Lbak6pTaj9wdEwf%2BS%2BgzblFpZR1%2FW%2BrFjQo5%2BhgmYMSrXn%2BJ9%2FO7tNX3U5LoEjLKkilBiFOXXq6kpgA68b1nMEhH2%2FztORDElXQia2%2FWYkb6XbmLSsSmJFa%2BHI6GAuRFyN5bhDgvmhaXAnhplIr62CpPCoZ8N3imsUUdb6VY612N1zhp7wNFFSIYO62rl6if1MKebv8AGOqUBdA%2FPcjzbnTpUiSC07%2B7sRTvLowOmmsW6eJvS6ymVMy0F6S38MmjbMkRo7ZmiDGJTWzZ%2BwwaOagJ1FcdTd7V2f%2BkI4uB9YXKrIxiZZB0g4Zh4eX7zXseDYCuTC0UMmiRO0q13pe7MG1hnfEfmAARKHcR9uzJwXLPsVF5UIDegiK1sOIeZu3LK01MVGaNisrGsC96hTj9cQYZnbvxQzh4yQF1LiHO0&X-Amz-Signature=314252ca7d3b761a24da3a0fbb644fef09bbf4bd5692bbf0b2532c42637d0054&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UIFTBGG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPiNWkIC9gBKKNPnjRJdoUdO6joUCeOV0%2FjMVR9H2fwIgaStF5QdT04GJZX66NMrYz61vtvOuKWfUGrfT%2BNBTOLQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM17Br7dZq2Eorhb9ircA%2BtsmtrNU80GF%2FzOC2Bgam35y13uJGShCCYfQUQlxTmXW52NcDWUX0q0wkpNcaPSrMzY8JL5nL8sAwp%2F7xQZgEwwr5Gk4TJortdUD%2Bu775ndzB8S2rKqdQAJOKbr3ZBb3zSW8PeUbwX6vxwRxyQ2syn35i3XMaNe3S3R%2BnvfioI9s2R2%2FOTQI995C9vWxjOYR9f24iwjtKAjUV6nPoBB803%2BV9QNRU42IWP5SwznN3N1cE8KAI%2BBikbXlN6tVjqYcAyT62PJDnltxIESJjU6XHrA%2BDMTyeiXWnJQ7gx%2FtEVtOUypg6GX9m4zsRV2DE4skJOexAdHZMHAEqScVQGo2f7HNSO2a0xOySO%2FKiNmowrTorpbzZ01AJlfCTAorQjpUEW8yGsH2%2FQqNoiq5dv4AamxD4jIkDJBDHBt0StiuTSpCDPYIJ3ymqy%2BSY9Lbak6pTaj9wdEwf%2BS%2BgzblFpZR1%2FW%2BrFjQo5%2BhgmYMSrXn%2BJ9%2FO7tNX3U5LoEjLKkilBiFOXXq6kpgA68b1nMEhH2%2FztORDElXQia2%2FWYkb6XbmLSsSmJFa%2BHI6GAuRFyN5bhDgvmhaXAnhplIr62CpPCoZ8N3imsUUdb6VY612N1zhp7wNFFSIYO62rl6if1MKebv8AGOqUBdA%2FPcjzbnTpUiSC07%2B7sRTvLowOmmsW6eJvS6ymVMy0F6S38MmjbMkRo7ZmiDGJTWzZ%2BwwaOagJ1FcdTd7V2f%2BkI4uB9YXKrIxiZZB0g4Zh4eX7zXseDYCuTC0UMmiRO0q13pe7MG1hnfEfmAARKHcR9uzJwXLPsVF5UIDegiK1sOIeZu3LK01MVGaNisrGsC96hTj9cQYZnbvxQzh4yQF1LiHO0&X-Amz-Signature=1e7ad45707937061c2ce40f34e040599d676578a55fc1d39fd06242e84b29138&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UIFTBGG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPiNWkIC9gBKKNPnjRJdoUdO6joUCeOV0%2FjMVR9H2fwIgaStF5QdT04GJZX66NMrYz61vtvOuKWfUGrfT%2BNBTOLQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM17Br7dZq2Eorhb9ircA%2BtsmtrNU80GF%2FzOC2Bgam35y13uJGShCCYfQUQlxTmXW52NcDWUX0q0wkpNcaPSrMzY8JL5nL8sAwp%2F7xQZgEwwr5Gk4TJortdUD%2Bu775ndzB8S2rKqdQAJOKbr3ZBb3zSW8PeUbwX6vxwRxyQ2syn35i3XMaNe3S3R%2BnvfioI9s2R2%2FOTQI995C9vWxjOYR9f24iwjtKAjUV6nPoBB803%2BV9QNRU42IWP5SwznN3N1cE8KAI%2BBikbXlN6tVjqYcAyT62PJDnltxIESJjU6XHrA%2BDMTyeiXWnJQ7gx%2FtEVtOUypg6GX9m4zsRV2DE4skJOexAdHZMHAEqScVQGo2f7HNSO2a0xOySO%2FKiNmowrTorpbzZ01AJlfCTAorQjpUEW8yGsH2%2FQqNoiq5dv4AamxD4jIkDJBDHBt0StiuTSpCDPYIJ3ymqy%2BSY9Lbak6pTaj9wdEwf%2BS%2BgzblFpZR1%2FW%2BrFjQo5%2BhgmYMSrXn%2BJ9%2FO7tNX3U5LoEjLKkilBiFOXXq6kpgA68b1nMEhH2%2FztORDElXQia2%2FWYkb6XbmLSsSmJFa%2BHI6GAuRFyN5bhDgvmhaXAnhplIr62CpPCoZ8N3imsUUdb6VY612N1zhp7wNFFSIYO62rl6if1MKebv8AGOqUBdA%2FPcjzbnTpUiSC07%2B7sRTvLowOmmsW6eJvS6ymVMy0F6S38MmjbMkRo7ZmiDGJTWzZ%2BwwaOagJ1FcdTd7V2f%2BkI4uB9YXKrIxiZZB0g4Zh4eX7zXseDYCuTC0UMmiRO0q13pe7MG1hnfEfmAARKHcR9uzJwXLPsVF5UIDegiK1sOIeZu3LK01MVGaNisrGsC96hTj9cQYZnbvxQzh4yQF1LiHO0&X-Amz-Signature=8bcf33b2b44a5dc5b9751b40d230a240e7dce0a2cb2198465cc1389149f88c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UIFTBGG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCPiNWkIC9gBKKNPnjRJdoUdO6joUCeOV0%2FjMVR9H2fwIgaStF5QdT04GJZX66NMrYz61vtvOuKWfUGrfT%2BNBTOLQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM17Br7dZq2Eorhb9ircA%2BtsmtrNU80GF%2FzOC2Bgam35y13uJGShCCYfQUQlxTmXW52NcDWUX0q0wkpNcaPSrMzY8JL5nL8sAwp%2F7xQZgEwwr5Gk4TJortdUD%2Bu775ndzB8S2rKqdQAJOKbr3ZBb3zSW8PeUbwX6vxwRxyQ2syn35i3XMaNe3S3R%2BnvfioI9s2R2%2FOTQI995C9vWxjOYR9f24iwjtKAjUV6nPoBB803%2BV9QNRU42IWP5SwznN3N1cE8KAI%2BBikbXlN6tVjqYcAyT62PJDnltxIESJjU6XHrA%2BDMTyeiXWnJQ7gx%2FtEVtOUypg6GX9m4zsRV2DE4skJOexAdHZMHAEqScVQGo2f7HNSO2a0xOySO%2FKiNmowrTorpbzZ01AJlfCTAorQjpUEW8yGsH2%2FQqNoiq5dv4AamxD4jIkDJBDHBt0StiuTSpCDPYIJ3ymqy%2BSY9Lbak6pTaj9wdEwf%2BS%2BgzblFpZR1%2FW%2BrFjQo5%2BhgmYMSrXn%2BJ9%2FO7tNX3U5LoEjLKkilBiFOXXq6kpgA68b1nMEhH2%2FztORDElXQia2%2FWYkb6XbmLSsSmJFa%2BHI6GAuRFyN5bhDgvmhaXAnhplIr62CpPCoZ8N3imsUUdb6VY612N1zhp7wNFFSIYO62rl6if1MKebv8AGOqUBdA%2FPcjzbnTpUiSC07%2B7sRTvLowOmmsW6eJvS6ymVMy0F6S38MmjbMkRo7ZmiDGJTWzZ%2BwwaOagJ1FcdTd7V2f%2BkI4uB9YXKrIxiZZB0g4Zh4eX7zXseDYCuTC0UMmiRO0q13pe7MG1hnfEfmAARKHcR9uzJwXLPsVF5UIDegiK1sOIeZu3LK01MVGaNisrGsC96hTj9cQYZnbvxQzh4yQF1LiHO0&X-Amz-Signature=e70ea96da1e01c8c87bd04c593d43a1a1a266fb3ab8d074149ce8d3fc3062ed7&X-Amz-SignedHeaders=host&x-id=GetObject)
