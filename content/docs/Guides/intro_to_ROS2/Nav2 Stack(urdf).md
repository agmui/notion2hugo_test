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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2KZU3F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzN0l%2F5rDAPCTgQsmJ%2BpLBPQSZvjoDHZmwVsvq1KJ3AiAbPuzrjgSbW9yagmbMIAaNywJxuNPbT1MSzAaik43SLCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3e6eRNuI4y1Nv4wAKtwDy9Vq98AWYTGSg1elcMINVbtoyCunMMZ0q%2B3t%2BojdVKkfrsfqzIktNsGcPGeh20mOSmMOfDihiuPGI7HxpFyFXKdc5lJht3lnf90WkPCxC6P2k1hlnQDugKkZNKpZehVBaMsaVG1eUKbpyxPjibNbAy0CooX%2FZA5n6a001p5LZB2iCKYPmgBfWlhdXBMZyFFhQkVdkOiOwyZKotVO%2BwMGtWMEhtoF2oWq09d%2FPHRGmo2OsjFypLoJA5DE3owHM4N4jPD11ObmAm9oZYziA9f1oB1nZz%2FCXAItYNTvW9p21t5XEt5ef0EXEbV5xFI43rOfLpuJ9es9MYrJjUMV8gDFmr5nHBjwMTTDwuGaXQSl%2BzYORfWg9nAbY4LiQK%2BO3dBNRyX3Gi6KsvUmPEp59fVRsU02pHHc%2F%2BpsuFWXY2y6g6UCU3r0LNpZ65HpKZcGSrT8Up%2FYl0DO05vDQw7ttvW4vO6VSo5FcM0IteDxsQvozAB5efWIK9Cmg83ZtD4wDo9YpRcEJr2GFU5iu6bZUmEUoFFMD2JeYljckDl2bAGsI6e%2B2xDJsH8RoxnpSJGXIersL3FcxgSG5GqdPQ4VdzbzCCq30EfLNagxdVZc2t1FUfzMasHz8ApgQ0ZvH84wyKeyvQY6pgGwLnl77j%2FObt0bO76SpKK3Lrn1gBjS8VgvxaF9Arvuh0HVKc6Zppk3qWIY65lMgCi5nwrfo5snswQHQAravVxVd0Y7SpuohxGHHon6rXDI4x58692ax9%2Bnmy2L4aBGTTSegMyktEB1vIyEDrO%2F6QFIp4iHcuQmTqJnryumlz1I8SdONs%2BOpdvMDM03zTq7zUxXIRAHzkSQmy1LA1pqrZBblqsZ8N9Z&X-Amz-Signature=7432fca1495a76504e74c3409f1bbeea81186b94ea30337892c132995eb8d000&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2KZU3F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzN0l%2F5rDAPCTgQsmJ%2BpLBPQSZvjoDHZmwVsvq1KJ3AiAbPuzrjgSbW9yagmbMIAaNywJxuNPbT1MSzAaik43SLCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3e6eRNuI4y1Nv4wAKtwDy9Vq98AWYTGSg1elcMINVbtoyCunMMZ0q%2B3t%2BojdVKkfrsfqzIktNsGcPGeh20mOSmMOfDihiuPGI7HxpFyFXKdc5lJht3lnf90WkPCxC6P2k1hlnQDugKkZNKpZehVBaMsaVG1eUKbpyxPjibNbAy0CooX%2FZA5n6a001p5LZB2iCKYPmgBfWlhdXBMZyFFhQkVdkOiOwyZKotVO%2BwMGtWMEhtoF2oWq09d%2FPHRGmo2OsjFypLoJA5DE3owHM4N4jPD11ObmAm9oZYziA9f1oB1nZz%2FCXAItYNTvW9p21t5XEt5ef0EXEbV5xFI43rOfLpuJ9es9MYrJjUMV8gDFmr5nHBjwMTTDwuGaXQSl%2BzYORfWg9nAbY4LiQK%2BO3dBNRyX3Gi6KsvUmPEp59fVRsU02pHHc%2F%2BpsuFWXY2y6g6UCU3r0LNpZ65HpKZcGSrT8Up%2FYl0DO05vDQw7ttvW4vO6VSo5FcM0IteDxsQvozAB5efWIK9Cmg83ZtD4wDo9YpRcEJr2GFU5iu6bZUmEUoFFMD2JeYljckDl2bAGsI6e%2B2xDJsH8RoxnpSJGXIersL3FcxgSG5GqdPQ4VdzbzCCq30EfLNagxdVZc2t1FUfzMasHz8ApgQ0ZvH84wyKeyvQY6pgGwLnl77j%2FObt0bO76SpKK3Lrn1gBjS8VgvxaF9Arvuh0HVKc6Zppk3qWIY65lMgCi5nwrfo5snswQHQAravVxVd0Y7SpuohxGHHon6rXDI4x58692ax9%2Bnmy2L4aBGTTSegMyktEB1vIyEDrO%2F6QFIp4iHcuQmTqJnryumlz1I8SdONs%2BOpdvMDM03zTq7zUxXIRAHzkSQmy1LA1pqrZBblqsZ8N9Z&X-Amz-Signature=a4d6e854ff018dc681c08dc7f78151b4f46bce3d9663d7e651b2e9bdcc848cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2KZU3F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzN0l%2F5rDAPCTgQsmJ%2BpLBPQSZvjoDHZmwVsvq1KJ3AiAbPuzrjgSbW9yagmbMIAaNywJxuNPbT1MSzAaik43SLCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3e6eRNuI4y1Nv4wAKtwDy9Vq98AWYTGSg1elcMINVbtoyCunMMZ0q%2B3t%2BojdVKkfrsfqzIktNsGcPGeh20mOSmMOfDihiuPGI7HxpFyFXKdc5lJht3lnf90WkPCxC6P2k1hlnQDugKkZNKpZehVBaMsaVG1eUKbpyxPjibNbAy0CooX%2FZA5n6a001p5LZB2iCKYPmgBfWlhdXBMZyFFhQkVdkOiOwyZKotVO%2BwMGtWMEhtoF2oWq09d%2FPHRGmo2OsjFypLoJA5DE3owHM4N4jPD11ObmAm9oZYziA9f1oB1nZz%2FCXAItYNTvW9p21t5XEt5ef0EXEbV5xFI43rOfLpuJ9es9MYrJjUMV8gDFmr5nHBjwMTTDwuGaXQSl%2BzYORfWg9nAbY4LiQK%2BO3dBNRyX3Gi6KsvUmPEp59fVRsU02pHHc%2F%2BpsuFWXY2y6g6UCU3r0LNpZ65HpKZcGSrT8Up%2FYl0DO05vDQw7ttvW4vO6VSo5FcM0IteDxsQvozAB5efWIK9Cmg83ZtD4wDo9YpRcEJr2GFU5iu6bZUmEUoFFMD2JeYljckDl2bAGsI6e%2B2xDJsH8RoxnpSJGXIersL3FcxgSG5GqdPQ4VdzbzCCq30EfLNagxdVZc2t1FUfzMasHz8ApgQ0ZvH84wyKeyvQY6pgGwLnl77j%2FObt0bO76SpKK3Lrn1gBjS8VgvxaF9Arvuh0HVKc6Zppk3qWIY65lMgCi5nwrfo5snswQHQAravVxVd0Y7SpuohxGHHon6rXDI4x58692ax9%2Bnmy2L4aBGTTSegMyktEB1vIyEDrO%2F6QFIp4iHcuQmTqJnryumlz1I8SdONs%2BOpdvMDM03zTq7zUxXIRAHzkSQmy1LA1pqrZBblqsZ8N9Z&X-Amz-Signature=297101016128131f487d97917bc4b123f21661fc7b799089b91f49372c1130a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2KZU3F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzN0l%2F5rDAPCTgQsmJ%2BpLBPQSZvjoDHZmwVsvq1KJ3AiAbPuzrjgSbW9yagmbMIAaNywJxuNPbT1MSzAaik43SLCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3e6eRNuI4y1Nv4wAKtwDy9Vq98AWYTGSg1elcMINVbtoyCunMMZ0q%2B3t%2BojdVKkfrsfqzIktNsGcPGeh20mOSmMOfDihiuPGI7HxpFyFXKdc5lJht3lnf90WkPCxC6P2k1hlnQDugKkZNKpZehVBaMsaVG1eUKbpyxPjibNbAy0CooX%2FZA5n6a001p5LZB2iCKYPmgBfWlhdXBMZyFFhQkVdkOiOwyZKotVO%2BwMGtWMEhtoF2oWq09d%2FPHRGmo2OsjFypLoJA5DE3owHM4N4jPD11ObmAm9oZYziA9f1oB1nZz%2FCXAItYNTvW9p21t5XEt5ef0EXEbV5xFI43rOfLpuJ9es9MYrJjUMV8gDFmr5nHBjwMTTDwuGaXQSl%2BzYORfWg9nAbY4LiQK%2BO3dBNRyX3Gi6KsvUmPEp59fVRsU02pHHc%2F%2BpsuFWXY2y6g6UCU3r0LNpZ65HpKZcGSrT8Up%2FYl0DO05vDQw7ttvW4vO6VSo5FcM0IteDxsQvozAB5efWIK9Cmg83ZtD4wDo9YpRcEJr2GFU5iu6bZUmEUoFFMD2JeYljckDl2bAGsI6e%2B2xDJsH8RoxnpSJGXIersL3FcxgSG5GqdPQ4VdzbzCCq30EfLNagxdVZc2t1FUfzMasHz8ApgQ0ZvH84wyKeyvQY6pgGwLnl77j%2FObt0bO76SpKK3Lrn1gBjS8VgvxaF9Arvuh0HVKc6Zppk3qWIY65lMgCi5nwrfo5snswQHQAravVxVd0Y7SpuohxGHHon6rXDI4x58692ax9%2Bnmy2L4aBGTTSegMyktEB1vIyEDrO%2F6QFIp4iHcuQmTqJnryumlz1I8SdONs%2BOpdvMDM03zTq7zUxXIRAHzkSQmy1LA1pqrZBblqsZ8N9Z&X-Amz-Signature=23c2a1526ca652e5473fea717dcc0ee841896886b219875e1594a33c99fcc4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2KZU3F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzN0l%2F5rDAPCTgQsmJ%2BpLBPQSZvjoDHZmwVsvq1KJ3AiAbPuzrjgSbW9yagmbMIAaNywJxuNPbT1MSzAaik43SLCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3e6eRNuI4y1Nv4wAKtwDy9Vq98AWYTGSg1elcMINVbtoyCunMMZ0q%2B3t%2BojdVKkfrsfqzIktNsGcPGeh20mOSmMOfDihiuPGI7HxpFyFXKdc5lJht3lnf90WkPCxC6P2k1hlnQDugKkZNKpZehVBaMsaVG1eUKbpyxPjibNbAy0CooX%2FZA5n6a001p5LZB2iCKYPmgBfWlhdXBMZyFFhQkVdkOiOwyZKotVO%2BwMGtWMEhtoF2oWq09d%2FPHRGmo2OsjFypLoJA5DE3owHM4N4jPD11ObmAm9oZYziA9f1oB1nZz%2FCXAItYNTvW9p21t5XEt5ef0EXEbV5xFI43rOfLpuJ9es9MYrJjUMV8gDFmr5nHBjwMTTDwuGaXQSl%2BzYORfWg9nAbY4LiQK%2BO3dBNRyX3Gi6KsvUmPEp59fVRsU02pHHc%2F%2BpsuFWXY2y6g6UCU3r0LNpZ65HpKZcGSrT8Up%2FYl0DO05vDQw7ttvW4vO6VSo5FcM0IteDxsQvozAB5efWIK9Cmg83ZtD4wDo9YpRcEJr2GFU5iu6bZUmEUoFFMD2JeYljckDl2bAGsI6e%2B2xDJsH8RoxnpSJGXIersL3FcxgSG5GqdPQ4VdzbzCCq30EfLNagxdVZc2t1FUfzMasHz8ApgQ0ZvH84wyKeyvQY6pgGwLnl77j%2FObt0bO76SpKK3Lrn1gBjS8VgvxaF9Arvuh0HVKc6Zppk3qWIY65lMgCi5nwrfo5snswQHQAravVxVd0Y7SpuohxGHHon6rXDI4x58692ax9%2Bnmy2L4aBGTTSegMyktEB1vIyEDrO%2F6QFIp4iHcuQmTqJnryumlz1I8SdONs%2BOpdvMDM03zTq7zUxXIRAHzkSQmy1LA1pqrZBblqsZ8N9Z&X-Amz-Signature=ce1aae2ceecd9198d1940c2b4f33c0bde19119de7ad0483c0ea8423eb8a2689c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2KZU3F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzN0l%2F5rDAPCTgQsmJ%2BpLBPQSZvjoDHZmwVsvq1KJ3AiAbPuzrjgSbW9yagmbMIAaNywJxuNPbT1MSzAaik43SLCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3e6eRNuI4y1Nv4wAKtwDy9Vq98AWYTGSg1elcMINVbtoyCunMMZ0q%2B3t%2BojdVKkfrsfqzIktNsGcPGeh20mOSmMOfDihiuPGI7HxpFyFXKdc5lJht3lnf90WkPCxC6P2k1hlnQDugKkZNKpZehVBaMsaVG1eUKbpyxPjibNbAy0CooX%2FZA5n6a001p5LZB2iCKYPmgBfWlhdXBMZyFFhQkVdkOiOwyZKotVO%2BwMGtWMEhtoF2oWq09d%2FPHRGmo2OsjFypLoJA5DE3owHM4N4jPD11ObmAm9oZYziA9f1oB1nZz%2FCXAItYNTvW9p21t5XEt5ef0EXEbV5xFI43rOfLpuJ9es9MYrJjUMV8gDFmr5nHBjwMTTDwuGaXQSl%2BzYORfWg9nAbY4LiQK%2BO3dBNRyX3Gi6KsvUmPEp59fVRsU02pHHc%2F%2BpsuFWXY2y6g6UCU3r0LNpZ65HpKZcGSrT8Up%2FYl0DO05vDQw7ttvW4vO6VSo5FcM0IteDxsQvozAB5efWIK9Cmg83ZtD4wDo9YpRcEJr2GFU5iu6bZUmEUoFFMD2JeYljckDl2bAGsI6e%2B2xDJsH8RoxnpSJGXIersL3FcxgSG5GqdPQ4VdzbzCCq30EfLNagxdVZc2t1FUfzMasHz8ApgQ0ZvH84wyKeyvQY6pgGwLnl77j%2FObt0bO76SpKK3Lrn1gBjS8VgvxaF9Arvuh0HVKc6Zppk3qWIY65lMgCi5nwrfo5snswQHQAravVxVd0Y7SpuohxGHHon6rXDI4x58692ax9%2Bnmy2L4aBGTTSegMyktEB1vIyEDrO%2F6QFIp4iHcuQmTqJnryumlz1I8SdONs%2BOpdvMDM03zTq7zUxXIRAHzkSQmy1LA1pqrZBblqsZ8N9Z&X-Amz-Signature=562f397b6a2166ad1e1d1dd8703d9228e9098bd7d09038d924a412efb55398e7&X-Amz-SignedHeaders=host&x-id=GetObject)
