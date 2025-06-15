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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFLOHL3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCELahoCyVb5iIfk3qg0z%2BzidIBR7KdyI24%2FzcWXOueNAIhAOKRaZLf6TEzs5TkoYfiiBU9%2FYRTwi4UM7tR9qL5SvKFKv8DCD4QABoMNjM3NDIzMTgzODA1IgwT%2FeuJgIAMl9yL3skq3ANcPYRdUMC4%2FYweYCsPX9wefH7qecIzxDr%2Bv4hu3NjsxVhDqZRCSymYJ0XRw6IFxfnSmUNmrYi79jgkOpDKTrsT56m1D3%2BJAWXbqjx2keq6ncdEafERHIvZ9uuU5Y%2B6pyMUzPmNKtIg1jK73P772k%2FQx3PzHTR%2F477oEDsNue4xoosBd4KSpvQukiz669TXSxrjxYX59aImJDk2mue4xb5KNp7Gd3D207j59XQj3Qr5bEHR3pRvdmgUvGk%2B35QVWVDuK1tho5BA7AviX5GwMVFCtWkWvVHXEt31uujUKTbyrVoH9QEfkgrEyxAkOuvj9iVcmglnsRUkSs8F2HK9uTEJJe8W85cu63VWvdRsvO8CfpqFDcwjKC1htNQ%2Fs5I9Bd1%2F%2B4IM6Jk7WmaD9iH8l8R%2F65Jt%2BTCb4HbO%2BO%2Bt02FSh4gTsuWUXj6%2BtQOmfyFKNV8g8bac4YjCyRXCZ1t3fQ1bMcdVprHGVYoNoj9cRPk7nNSMwOrUI2e8bEl7T5FhGny1hvVlP9VJ5%2FkVMn2LAX8rPYPPO5eQA1tz4YWPKRRuzLHWWDamwW5onDoIPJSkutWnkR7f9VUp3T96PyrAjEG2c3Cx0sFZirCduYK%2Fe3kpootL7IRlUEkrWYfk9jCfrLnCBjqkAUTYa8wwzSp2xYKBcaGg%2FTns%2BrxSwr0t69sFdBMSqdLQnV0UAA1dqyaL6CFv4%2BjhJxKOz%2F4r8jElMmGavGDs3dxA%2BCCtCJ2sbBIS11IG8s8IbRbA%2Bqs3oU7EJx6XcdxuZsTCTbNcbdZIp8aF4a5A2cHqhfMKprOpUEWFZpDajzfTGW2NLfczY6gr6ZtTj4gZZhURuZHGKN1xz0rqchksTVFyOpc5&X-Amz-Signature=849a31ed76f84daa66dd18f74bc3ea1a54a45b1f878aef4abe6c425b608e4f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFLOHL3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCELahoCyVb5iIfk3qg0z%2BzidIBR7KdyI24%2FzcWXOueNAIhAOKRaZLf6TEzs5TkoYfiiBU9%2FYRTwi4UM7tR9qL5SvKFKv8DCD4QABoMNjM3NDIzMTgzODA1IgwT%2FeuJgIAMl9yL3skq3ANcPYRdUMC4%2FYweYCsPX9wefH7qecIzxDr%2Bv4hu3NjsxVhDqZRCSymYJ0XRw6IFxfnSmUNmrYi79jgkOpDKTrsT56m1D3%2BJAWXbqjx2keq6ncdEafERHIvZ9uuU5Y%2B6pyMUzPmNKtIg1jK73P772k%2FQx3PzHTR%2F477oEDsNue4xoosBd4KSpvQukiz669TXSxrjxYX59aImJDk2mue4xb5KNp7Gd3D207j59XQj3Qr5bEHR3pRvdmgUvGk%2B35QVWVDuK1tho5BA7AviX5GwMVFCtWkWvVHXEt31uujUKTbyrVoH9QEfkgrEyxAkOuvj9iVcmglnsRUkSs8F2HK9uTEJJe8W85cu63VWvdRsvO8CfpqFDcwjKC1htNQ%2Fs5I9Bd1%2F%2B4IM6Jk7WmaD9iH8l8R%2F65Jt%2BTCb4HbO%2BO%2Bt02FSh4gTsuWUXj6%2BtQOmfyFKNV8g8bac4YjCyRXCZ1t3fQ1bMcdVprHGVYoNoj9cRPk7nNSMwOrUI2e8bEl7T5FhGny1hvVlP9VJ5%2FkVMn2LAX8rPYPPO5eQA1tz4YWPKRRuzLHWWDamwW5onDoIPJSkutWnkR7f9VUp3T96PyrAjEG2c3Cx0sFZirCduYK%2Fe3kpootL7IRlUEkrWYfk9jCfrLnCBjqkAUTYa8wwzSp2xYKBcaGg%2FTns%2BrxSwr0t69sFdBMSqdLQnV0UAA1dqyaL6CFv4%2BjhJxKOz%2F4r8jElMmGavGDs3dxA%2BCCtCJ2sbBIS11IG8s8IbRbA%2Bqs3oU7EJx6XcdxuZsTCTbNcbdZIp8aF4a5A2cHqhfMKprOpUEWFZpDajzfTGW2NLfczY6gr6ZtTj4gZZhURuZHGKN1xz0rqchksTVFyOpc5&X-Amz-Signature=82cd67d01e11ca191466a6ed03c495829d41dc6b8b6d6d712918a81da44b6e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFLOHL3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCELahoCyVb5iIfk3qg0z%2BzidIBR7KdyI24%2FzcWXOueNAIhAOKRaZLf6TEzs5TkoYfiiBU9%2FYRTwi4UM7tR9qL5SvKFKv8DCD4QABoMNjM3NDIzMTgzODA1IgwT%2FeuJgIAMl9yL3skq3ANcPYRdUMC4%2FYweYCsPX9wefH7qecIzxDr%2Bv4hu3NjsxVhDqZRCSymYJ0XRw6IFxfnSmUNmrYi79jgkOpDKTrsT56m1D3%2BJAWXbqjx2keq6ncdEafERHIvZ9uuU5Y%2B6pyMUzPmNKtIg1jK73P772k%2FQx3PzHTR%2F477oEDsNue4xoosBd4KSpvQukiz669TXSxrjxYX59aImJDk2mue4xb5KNp7Gd3D207j59XQj3Qr5bEHR3pRvdmgUvGk%2B35QVWVDuK1tho5BA7AviX5GwMVFCtWkWvVHXEt31uujUKTbyrVoH9QEfkgrEyxAkOuvj9iVcmglnsRUkSs8F2HK9uTEJJe8W85cu63VWvdRsvO8CfpqFDcwjKC1htNQ%2Fs5I9Bd1%2F%2B4IM6Jk7WmaD9iH8l8R%2F65Jt%2BTCb4HbO%2BO%2Bt02FSh4gTsuWUXj6%2BtQOmfyFKNV8g8bac4YjCyRXCZ1t3fQ1bMcdVprHGVYoNoj9cRPk7nNSMwOrUI2e8bEl7T5FhGny1hvVlP9VJ5%2FkVMn2LAX8rPYPPO5eQA1tz4YWPKRRuzLHWWDamwW5onDoIPJSkutWnkR7f9VUp3T96PyrAjEG2c3Cx0sFZirCduYK%2Fe3kpootL7IRlUEkrWYfk9jCfrLnCBjqkAUTYa8wwzSp2xYKBcaGg%2FTns%2BrxSwr0t69sFdBMSqdLQnV0UAA1dqyaL6CFv4%2BjhJxKOz%2F4r8jElMmGavGDs3dxA%2BCCtCJ2sbBIS11IG8s8IbRbA%2Bqs3oU7EJx6XcdxuZsTCTbNcbdZIp8aF4a5A2cHqhfMKprOpUEWFZpDajzfTGW2NLfczY6gr6ZtTj4gZZhURuZHGKN1xz0rqchksTVFyOpc5&X-Amz-Signature=9fe5bb06be12ab344f131fb99f48673ff9d1889cf353db9edb3bc88c833eb1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFLOHL3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCELahoCyVb5iIfk3qg0z%2BzidIBR7KdyI24%2FzcWXOueNAIhAOKRaZLf6TEzs5TkoYfiiBU9%2FYRTwi4UM7tR9qL5SvKFKv8DCD4QABoMNjM3NDIzMTgzODA1IgwT%2FeuJgIAMl9yL3skq3ANcPYRdUMC4%2FYweYCsPX9wefH7qecIzxDr%2Bv4hu3NjsxVhDqZRCSymYJ0XRw6IFxfnSmUNmrYi79jgkOpDKTrsT56m1D3%2BJAWXbqjx2keq6ncdEafERHIvZ9uuU5Y%2B6pyMUzPmNKtIg1jK73P772k%2FQx3PzHTR%2F477oEDsNue4xoosBd4KSpvQukiz669TXSxrjxYX59aImJDk2mue4xb5KNp7Gd3D207j59XQj3Qr5bEHR3pRvdmgUvGk%2B35QVWVDuK1tho5BA7AviX5GwMVFCtWkWvVHXEt31uujUKTbyrVoH9QEfkgrEyxAkOuvj9iVcmglnsRUkSs8F2HK9uTEJJe8W85cu63VWvdRsvO8CfpqFDcwjKC1htNQ%2Fs5I9Bd1%2F%2B4IM6Jk7WmaD9iH8l8R%2F65Jt%2BTCb4HbO%2BO%2Bt02FSh4gTsuWUXj6%2BtQOmfyFKNV8g8bac4YjCyRXCZ1t3fQ1bMcdVprHGVYoNoj9cRPk7nNSMwOrUI2e8bEl7T5FhGny1hvVlP9VJ5%2FkVMn2LAX8rPYPPO5eQA1tz4YWPKRRuzLHWWDamwW5onDoIPJSkutWnkR7f9VUp3T96PyrAjEG2c3Cx0sFZirCduYK%2Fe3kpootL7IRlUEkrWYfk9jCfrLnCBjqkAUTYa8wwzSp2xYKBcaGg%2FTns%2BrxSwr0t69sFdBMSqdLQnV0UAA1dqyaL6CFv4%2BjhJxKOz%2F4r8jElMmGavGDs3dxA%2BCCtCJ2sbBIS11IG8s8IbRbA%2Bqs3oU7EJx6XcdxuZsTCTbNcbdZIp8aF4a5A2cHqhfMKprOpUEWFZpDajzfTGW2NLfczY6gr6ZtTj4gZZhURuZHGKN1xz0rqchksTVFyOpc5&X-Amz-Signature=c9e4dd4945d8de3ead12fd95daf32e0d05277bfa65d97b15a592c8a06ce08081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFLOHL3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCELahoCyVb5iIfk3qg0z%2BzidIBR7KdyI24%2FzcWXOueNAIhAOKRaZLf6TEzs5TkoYfiiBU9%2FYRTwi4UM7tR9qL5SvKFKv8DCD4QABoMNjM3NDIzMTgzODA1IgwT%2FeuJgIAMl9yL3skq3ANcPYRdUMC4%2FYweYCsPX9wefH7qecIzxDr%2Bv4hu3NjsxVhDqZRCSymYJ0XRw6IFxfnSmUNmrYi79jgkOpDKTrsT56m1D3%2BJAWXbqjx2keq6ncdEafERHIvZ9uuU5Y%2B6pyMUzPmNKtIg1jK73P772k%2FQx3PzHTR%2F477oEDsNue4xoosBd4KSpvQukiz669TXSxrjxYX59aImJDk2mue4xb5KNp7Gd3D207j59XQj3Qr5bEHR3pRvdmgUvGk%2B35QVWVDuK1tho5BA7AviX5GwMVFCtWkWvVHXEt31uujUKTbyrVoH9QEfkgrEyxAkOuvj9iVcmglnsRUkSs8F2HK9uTEJJe8W85cu63VWvdRsvO8CfpqFDcwjKC1htNQ%2Fs5I9Bd1%2F%2B4IM6Jk7WmaD9iH8l8R%2F65Jt%2BTCb4HbO%2BO%2Bt02FSh4gTsuWUXj6%2BtQOmfyFKNV8g8bac4YjCyRXCZ1t3fQ1bMcdVprHGVYoNoj9cRPk7nNSMwOrUI2e8bEl7T5FhGny1hvVlP9VJ5%2FkVMn2LAX8rPYPPO5eQA1tz4YWPKRRuzLHWWDamwW5onDoIPJSkutWnkR7f9VUp3T96PyrAjEG2c3Cx0sFZirCduYK%2Fe3kpootL7IRlUEkrWYfk9jCfrLnCBjqkAUTYa8wwzSp2xYKBcaGg%2FTns%2BrxSwr0t69sFdBMSqdLQnV0UAA1dqyaL6CFv4%2BjhJxKOz%2F4r8jElMmGavGDs3dxA%2BCCtCJ2sbBIS11IG8s8IbRbA%2Bqs3oU7EJx6XcdxuZsTCTbNcbdZIp8aF4a5A2cHqhfMKprOpUEWFZpDajzfTGW2NLfczY6gr6ZtTj4gZZhURuZHGKN1xz0rqchksTVFyOpc5&X-Amz-Signature=c93fa651a57d9f6041b9222ae396039729aa207b2472df0e697cccd7c2d720fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFLOHL3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCELahoCyVb5iIfk3qg0z%2BzidIBR7KdyI24%2FzcWXOueNAIhAOKRaZLf6TEzs5TkoYfiiBU9%2FYRTwi4UM7tR9qL5SvKFKv8DCD4QABoMNjM3NDIzMTgzODA1IgwT%2FeuJgIAMl9yL3skq3ANcPYRdUMC4%2FYweYCsPX9wefH7qecIzxDr%2Bv4hu3NjsxVhDqZRCSymYJ0XRw6IFxfnSmUNmrYi79jgkOpDKTrsT56m1D3%2BJAWXbqjx2keq6ncdEafERHIvZ9uuU5Y%2B6pyMUzPmNKtIg1jK73P772k%2FQx3PzHTR%2F477oEDsNue4xoosBd4KSpvQukiz669TXSxrjxYX59aImJDk2mue4xb5KNp7Gd3D207j59XQj3Qr5bEHR3pRvdmgUvGk%2B35QVWVDuK1tho5BA7AviX5GwMVFCtWkWvVHXEt31uujUKTbyrVoH9QEfkgrEyxAkOuvj9iVcmglnsRUkSs8F2HK9uTEJJe8W85cu63VWvdRsvO8CfpqFDcwjKC1htNQ%2Fs5I9Bd1%2F%2B4IM6Jk7WmaD9iH8l8R%2F65Jt%2BTCb4HbO%2BO%2Bt02FSh4gTsuWUXj6%2BtQOmfyFKNV8g8bac4YjCyRXCZ1t3fQ1bMcdVprHGVYoNoj9cRPk7nNSMwOrUI2e8bEl7T5FhGny1hvVlP9VJ5%2FkVMn2LAX8rPYPPO5eQA1tz4YWPKRRuzLHWWDamwW5onDoIPJSkutWnkR7f9VUp3T96PyrAjEG2c3Cx0sFZirCduYK%2Fe3kpootL7IRlUEkrWYfk9jCfrLnCBjqkAUTYa8wwzSp2xYKBcaGg%2FTns%2BrxSwr0t69sFdBMSqdLQnV0UAA1dqyaL6CFv4%2BjhJxKOz%2F4r8jElMmGavGDs3dxA%2BCCtCJ2sbBIS11IG8s8IbRbA%2Bqs3oU7EJx6XcdxuZsTCTbNcbdZIp8aF4a5A2cHqhfMKprOpUEWFZpDajzfTGW2NLfczY6gr6ZtTj4gZZhURuZHGKN1xz0rqchksTVFyOpc5&X-Amz-Signature=17c140f8b0572e39082508edf0e632d17d9aea313a95511abe5a29c26685bb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
