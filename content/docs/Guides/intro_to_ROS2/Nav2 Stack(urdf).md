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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6OLOBX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsknsCOdZ0QoWelDlU8OtxCafGqEVxFuCRFOBK2WTAwgIhAOPY0I53Mjjzgk2jFefmQi5thoI46DxnH5hNF9JmD3XbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOt1PQUzcmprZLDO8q3AMAMQaFr6%2BCDbiIleNlVNupMUgWvn5UtdANsLPZQIbsiB2iWk4Nr4ZJa5qRrN7tRbEAGTa%2BGkrTyO3fDBaUQCSSXMOF%2FX6d9wjLv%2FUFSley3%2FQd0XBghNujsuzz7Twu35kI4aGJMFoJRB1Nzr%2BS1QZa%2BCcKlaD5GfcmIsM4tTGBBU5aq4cZP5U2g6hy6mTSKkmpf0oltvzQ1H50oht0382Zdy6YTZPqHdNgMk2qjwAK9w%2FO7TTSVEdrxSrUNSmXBqMEzBPe7lxb8%2FA3j9HdBmXxZQirzYzifT%2BHpk4SkhpZ%2FiMFbG9tuEUwbVIcNbR9sRucRvmM4pBPImmQXLQff2m61UIp%2FJBCkahhKEUilrxFQHfMZe3SH6JwH9M6tkwFnaMOG4aVT1g1WsXooi1Bomu9ZQ%2B36zwFp4VDKgNzoAfRZbr8p0k4XEA0F7vszSkHL4oEX0kIN%2F57232TOVd5erog1M%2F9uh5AvVPnWqXUuPLnkgQ6hVjJtAGtULX1uQkhRj1hy28vPbP5yQhliwad1HQ%2BYjABf9VmYDpjk1Iduw4z6Tmm%2BDOsrlEJy1c1mMgWR4Gp15Dy7EFF6AO6VooJC9zT1n3aSUg9135fJ5NhELDcmNdDNMFoG3FA2Q9YKDCo9YjBBjqkAVTYI2pulYtklXZMSzYWb0Ej0FoNTZ9xF4exvOcF4Skso1PxFHDdvsqDOoe9f7DcVTwf4R9I%2BpvUv28rXtepd5NY3uqkcyE%2B38JTyw4eVKm8IO5WFQAUO%2By3h%2BEilsrVDFcfZu5abTBK5GkdU48ntQjAOdrOlijJ5MgPEkA0kTKr6QgZ1xmCigPZyG5YThNSMPtC%2FxNUlKl2%2BiJrE9UFzoQe5BE2&X-Amz-Signature=831501e45d978e9968ec13cc1f6dab7d3b10ea37760c81cde354c39294620b23&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6OLOBX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsknsCOdZ0QoWelDlU8OtxCafGqEVxFuCRFOBK2WTAwgIhAOPY0I53Mjjzgk2jFefmQi5thoI46DxnH5hNF9JmD3XbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOt1PQUzcmprZLDO8q3AMAMQaFr6%2BCDbiIleNlVNupMUgWvn5UtdANsLPZQIbsiB2iWk4Nr4ZJa5qRrN7tRbEAGTa%2BGkrTyO3fDBaUQCSSXMOF%2FX6d9wjLv%2FUFSley3%2FQd0XBghNujsuzz7Twu35kI4aGJMFoJRB1Nzr%2BS1QZa%2BCcKlaD5GfcmIsM4tTGBBU5aq4cZP5U2g6hy6mTSKkmpf0oltvzQ1H50oht0382Zdy6YTZPqHdNgMk2qjwAK9w%2FO7TTSVEdrxSrUNSmXBqMEzBPe7lxb8%2FA3j9HdBmXxZQirzYzifT%2BHpk4SkhpZ%2FiMFbG9tuEUwbVIcNbR9sRucRvmM4pBPImmQXLQff2m61UIp%2FJBCkahhKEUilrxFQHfMZe3SH6JwH9M6tkwFnaMOG4aVT1g1WsXooi1Bomu9ZQ%2B36zwFp4VDKgNzoAfRZbr8p0k4XEA0F7vszSkHL4oEX0kIN%2F57232TOVd5erog1M%2F9uh5AvVPnWqXUuPLnkgQ6hVjJtAGtULX1uQkhRj1hy28vPbP5yQhliwad1HQ%2BYjABf9VmYDpjk1Iduw4z6Tmm%2BDOsrlEJy1c1mMgWR4Gp15Dy7EFF6AO6VooJC9zT1n3aSUg9135fJ5NhELDcmNdDNMFoG3FA2Q9YKDCo9YjBBjqkAVTYI2pulYtklXZMSzYWb0Ej0FoNTZ9xF4exvOcF4Skso1PxFHDdvsqDOoe9f7DcVTwf4R9I%2BpvUv28rXtepd5NY3uqkcyE%2B38JTyw4eVKm8IO5WFQAUO%2By3h%2BEilsrVDFcfZu5abTBK5GkdU48ntQjAOdrOlijJ5MgPEkA0kTKr6QgZ1xmCigPZyG5YThNSMPtC%2FxNUlKl2%2BiJrE9UFzoQe5BE2&X-Amz-Signature=af32ee3b7312385619f0fc19100c962d615e497281693402b321e167ccf3d9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6OLOBX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsknsCOdZ0QoWelDlU8OtxCafGqEVxFuCRFOBK2WTAwgIhAOPY0I53Mjjzgk2jFefmQi5thoI46DxnH5hNF9JmD3XbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOt1PQUzcmprZLDO8q3AMAMQaFr6%2BCDbiIleNlVNupMUgWvn5UtdANsLPZQIbsiB2iWk4Nr4ZJa5qRrN7tRbEAGTa%2BGkrTyO3fDBaUQCSSXMOF%2FX6d9wjLv%2FUFSley3%2FQd0XBghNujsuzz7Twu35kI4aGJMFoJRB1Nzr%2BS1QZa%2BCcKlaD5GfcmIsM4tTGBBU5aq4cZP5U2g6hy6mTSKkmpf0oltvzQ1H50oht0382Zdy6YTZPqHdNgMk2qjwAK9w%2FO7TTSVEdrxSrUNSmXBqMEzBPe7lxb8%2FA3j9HdBmXxZQirzYzifT%2BHpk4SkhpZ%2FiMFbG9tuEUwbVIcNbR9sRucRvmM4pBPImmQXLQff2m61UIp%2FJBCkahhKEUilrxFQHfMZe3SH6JwH9M6tkwFnaMOG4aVT1g1WsXooi1Bomu9ZQ%2B36zwFp4VDKgNzoAfRZbr8p0k4XEA0F7vszSkHL4oEX0kIN%2F57232TOVd5erog1M%2F9uh5AvVPnWqXUuPLnkgQ6hVjJtAGtULX1uQkhRj1hy28vPbP5yQhliwad1HQ%2BYjABf9VmYDpjk1Iduw4z6Tmm%2BDOsrlEJy1c1mMgWR4Gp15Dy7EFF6AO6VooJC9zT1n3aSUg9135fJ5NhELDcmNdDNMFoG3FA2Q9YKDCo9YjBBjqkAVTYI2pulYtklXZMSzYWb0Ej0FoNTZ9xF4exvOcF4Skso1PxFHDdvsqDOoe9f7DcVTwf4R9I%2BpvUv28rXtepd5NY3uqkcyE%2B38JTyw4eVKm8IO5WFQAUO%2By3h%2BEilsrVDFcfZu5abTBK5GkdU48ntQjAOdrOlijJ5MgPEkA0kTKr6QgZ1xmCigPZyG5YThNSMPtC%2FxNUlKl2%2BiJrE9UFzoQe5BE2&X-Amz-Signature=9ae6d37909e03dc61f341792bdccbc712fbe19554e02ba2785f1589f3e7dfdd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6OLOBX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsknsCOdZ0QoWelDlU8OtxCafGqEVxFuCRFOBK2WTAwgIhAOPY0I53Mjjzgk2jFefmQi5thoI46DxnH5hNF9JmD3XbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOt1PQUzcmprZLDO8q3AMAMQaFr6%2BCDbiIleNlVNupMUgWvn5UtdANsLPZQIbsiB2iWk4Nr4ZJa5qRrN7tRbEAGTa%2BGkrTyO3fDBaUQCSSXMOF%2FX6d9wjLv%2FUFSley3%2FQd0XBghNujsuzz7Twu35kI4aGJMFoJRB1Nzr%2BS1QZa%2BCcKlaD5GfcmIsM4tTGBBU5aq4cZP5U2g6hy6mTSKkmpf0oltvzQ1H50oht0382Zdy6YTZPqHdNgMk2qjwAK9w%2FO7TTSVEdrxSrUNSmXBqMEzBPe7lxb8%2FA3j9HdBmXxZQirzYzifT%2BHpk4SkhpZ%2FiMFbG9tuEUwbVIcNbR9sRucRvmM4pBPImmQXLQff2m61UIp%2FJBCkahhKEUilrxFQHfMZe3SH6JwH9M6tkwFnaMOG4aVT1g1WsXooi1Bomu9ZQ%2B36zwFp4VDKgNzoAfRZbr8p0k4XEA0F7vszSkHL4oEX0kIN%2F57232TOVd5erog1M%2F9uh5AvVPnWqXUuPLnkgQ6hVjJtAGtULX1uQkhRj1hy28vPbP5yQhliwad1HQ%2BYjABf9VmYDpjk1Iduw4z6Tmm%2BDOsrlEJy1c1mMgWR4Gp15Dy7EFF6AO6VooJC9zT1n3aSUg9135fJ5NhELDcmNdDNMFoG3FA2Q9YKDCo9YjBBjqkAVTYI2pulYtklXZMSzYWb0Ej0FoNTZ9xF4exvOcF4Skso1PxFHDdvsqDOoe9f7DcVTwf4R9I%2BpvUv28rXtepd5NY3uqkcyE%2B38JTyw4eVKm8IO5WFQAUO%2By3h%2BEilsrVDFcfZu5abTBK5GkdU48ntQjAOdrOlijJ5MgPEkA0kTKr6QgZ1xmCigPZyG5YThNSMPtC%2FxNUlKl2%2BiJrE9UFzoQe5BE2&X-Amz-Signature=2712971a4095ff5356953b8fb07acbf6b4e9a2070fdd1cb8e5fe7f13a3342753&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6OLOBX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsknsCOdZ0QoWelDlU8OtxCafGqEVxFuCRFOBK2WTAwgIhAOPY0I53Mjjzgk2jFefmQi5thoI46DxnH5hNF9JmD3XbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOt1PQUzcmprZLDO8q3AMAMQaFr6%2BCDbiIleNlVNupMUgWvn5UtdANsLPZQIbsiB2iWk4Nr4ZJa5qRrN7tRbEAGTa%2BGkrTyO3fDBaUQCSSXMOF%2FX6d9wjLv%2FUFSley3%2FQd0XBghNujsuzz7Twu35kI4aGJMFoJRB1Nzr%2BS1QZa%2BCcKlaD5GfcmIsM4tTGBBU5aq4cZP5U2g6hy6mTSKkmpf0oltvzQ1H50oht0382Zdy6YTZPqHdNgMk2qjwAK9w%2FO7TTSVEdrxSrUNSmXBqMEzBPe7lxb8%2FA3j9HdBmXxZQirzYzifT%2BHpk4SkhpZ%2FiMFbG9tuEUwbVIcNbR9sRucRvmM4pBPImmQXLQff2m61UIp%2FJBCkahhKEUilrxFQHfMZe3SH6JwH9M6tkwFnaMOG4aVT1g1WsXooi1Bomu9ZQ%2B36zwFp4VDKgNzoAfRZbr8p0k4XEA0F7vszSkHL4oEX0kIN%2F57232TOVd5erog1M%2F9uh5AvVPnWqXUuPLnkgQ6hVjJtAGtULX1uQkhRj1hy28vPbP5yQhliwad1HQ%2BYjABf9VmYDpjk1Iduw4z6Tmm%2BDOsrlEJy1c1mMgWR4Gp15Dy7EFF6AO6VooJC9zT1n3aSUg9135fJ5NhELDcmNdDNMFoG3FA2Q9YKDCo9YjBBjqkAVTYI2pulYtklXZMSzYWb0Ej0FoNTZ9xF4exvOcF4Skso1PxFHDdvsqDOoe9f7DcVTwf4R9I%2BpvUv28rXtepd5NY3uqkcyE%2B38JTyw4eVKm8IO5WFQAUO%2By3h%2BEilsrVDFcfZu5abTBK5GkdU48ntQjAOdrOlijJ5MgPEkA0kTKr6QgZ1xmCigPZyG5YThNSMPtC%2FxNUlKl2%2BiJrE9UFzoQe5BE2&X-Amz-Signature=ec73b7576b62d4d2ddebec087d45dbb01d9a816082a04ddc4d918a1cb464ae8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6OLOBX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDsknsCOdZ0QoWelDlU8OtxCafGqEVxFuCRFOBK2WTAwgIhAOPY0I53Mjjzgk2jFefmQi5thoI46DxnH5hNF9JmD3XbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOt1PQUzcmprZLDO8q3AMAMQaFr6%2BCDbiIleNlVNupMUgWvn5UtdANsLPZQIbsiB2iWk4Nr4ZJa5qRrN7tRbEAGTa%2BGkrTyO3fDBaUQCSSXMOF%2FX6d9wjLv%2FUFSley3%2FQd0XBghNujsuzz7Twu35kI4aGJMFoJRB1Nzr%2BS1QZa%2BCcKlaD5GfcmIsM4tTGBBU5aq4cZP5U2g6hy6mTSKkmpf0oltvzQ1H50oht0382Zdy6YTZPqHdNgMk2qjwAK9w%2FO7TTSVEdrxSrUNSmXBqMEzBPe7lxb8%2FA3j9HdBmXxZQirzYzifT%2BHpk4SkhpZ%2FiMFbG9tuEUwbVIcNbR9sRucRvmM4pBPImmQXLQff2m61UIp%2FJBCkahhKEUilrxFQHfMZe3SH6JwH9M6tkwFnaMOG4aVT1g1WsXooi1Bomu9ZQ%2B36zwFp4VDKgNzoAfRZbr8p0k4XEA0F7vszSkHL4oEX0kIN%2F57232TOVd5erog1M%2F9uh5AvVPnWqXUuPLnkgQ6hVjJtAGtULX1uQkhRj1hy28vPbP5yQhliwad1HQ%2BYjABf9VmYDpjk1Iduw4z6Tmm%2BDOsrlEJy1c1mMgWR4Gp15Dy7EFF6AO6VooJC9zT1n3aSUg9135fJ5NhELDcmNdDNMFoG3FA2Q9YKDCo9YjBBjqkAVTYI2pulYtklXZMSzYWb0Ej0FoNTZ9xF4exvOcF4Skso1PxFHDdvsqDOoe9f7DcVTwf4R9I%2BpvUv28rXtepd5NY3uqkcyE%2B38JTyw4eVKm8IO5WFQAUO%2By3h%2BEilsrVDFcfZu5abTBK5GkdU48ntQjAOdrOlijJ5MgPEkA0kTKr6QgZ1xmCigPZyG5YThNSMPtC%2FxNUlKl2%2BiJrE9UFzoQe5BE2&X-Amz-Signature=600c7589f609b2cda5c6f206acba8a49da327eb856e6a0fde1d1f4f6bfb070c7&X-Amz-SignedHeaders=host&x-id=GetObject)
