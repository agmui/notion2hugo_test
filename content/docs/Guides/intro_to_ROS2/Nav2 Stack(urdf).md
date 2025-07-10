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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RU6S5U%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzTUE27Cqu7reM%2BH0gRYqUg4tb6tvD8hj7KDEggBZWwIhAOt%2FI9MX43LxKe53GVDEdanKylfsK5RPnxB52g1CwP00KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGN%2FBNOPYTVj3BOG8q3ANUZCBpM9ZdFULC2XHXK4ySW25xx0uwamJ%2Fl2QTnaeBtCWwwHwkUDm0sXBCx2oNKivZD3FVprMXRclEdADvv4CC56EgfwlVWV8xGVcF9yKmWhCG5EZGahyXa8E28bcysunsLMqPKXyx%2FBDWEB2r7oxpuppcZQ4MrrV64hmWLgquqgfsDLxwuV%2Bu03nFYWlMd8wc5JohWeLTdZUldL%2FbBYAJyAtcANq8amj9rHBC%2BwxfwqT2IgVeKOiDDq7Vxc0s6ZzEkOf459JQCiwYD8f1uualX3vdnlYu%2BnluWgnh%2BwqY%2FYUKwPrl2Dcnb1%2B%2B7yPpEi5hELN1T9Fq9DGuzDQPpoh0bnvsMlFwXVYlzXAIs%2BBJPKUXlnzPauO3XkTv8%2FPcKeyeaVM8MtgkPBgNre29QcG76kw5Qr6oha68OlM55%2BRgEupsLUrziADg2BKoaIvdQZDhXXVHIdGut9AEVdPjw4rHRYLMMan9WkU9SxH%2B5rCttq04sqIyF2P9jXytwU2KGeB3hbvAnsN75k5%2BxJNzPKqyyPwn9bwJfj%2FjGpld59aCyyKR0auxwW9hXUPWKqB1mhhz%2F%2FPskzbkfkSeIJtSwqOBIeGoe5ZyDk%2Bgzlu4dsS2de40He0aUY6y%2BQW%2FDTCqqL%2FDBjqkAX%2B65PePF69QP48c0IIf62shTh0GRTJ0C7clpQns8XLagxlbJb2479nD9fzx3d98Dd14iTB1HF6OGdDBcIohMb6AG%2FiAt7dFSR7T7j06VXHBJN1cZRf03lGQ4rgtGifPeHQysbhRKi3ybQ6%2FdOVje%2BGQObNYt7frgkH4%2Ftj2PzTULs34qCSAwgTl1sGnro%2BaMOtHVqfskJ7RUAOkDLUXo7ExobWJ&X-Amz-Signature=65437407ebd5d1cd0707a07ff23247826b7fc7c525230d7012672f8c2380e2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RU6S5U%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzTUE27Cqu7reM%2BH0gRYqUg4tb6tvD8hj7KDEggBZWwIhAOt%2FI9MX43LxKe53GVDEdanKylfsK5RPnxB52g1CwP00KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGN%2FBNOPYTVj3BOG8q3ANUZCBpM9ZdFULC2XHXK4ySW25xx0uwamJ%2Fl2QTnaeBtCWwwHwkUDm0sXBCx2oNKivZD3FVprMXRclEdADvv4CC56EgfwlVWV8xGVcF9yKmWhCG5EZGahyXa8E28bcysunsLMqPKXyx%2FBDWEB2r7oxpuppcZQ4MrrV64hmWLgquqgfsDLxwuV%2Bu03nFYWlMd8wc5JohWeLTdZUldL%2FbBYAJyAtcANq8amj9rHBC%2BwxfwqT2IgVeKOiDDq7Vxc0s6ZzEkOf459JQCiwYD8f1uualX3vdnlYu%2BnluWgnh%2BwqY%2FYUKwPrl2Dcnb1%2B%2B7yPpEi5hELN1T9Fq9DGuzDQPpoh0bnvsMlFwXVYlzXAIs%2BBJPKUXlnzPauO3XkTv8%2FPcKeyeaVM8MtgkPBgNre29QcG76kw5Qr6oha68OlM55%2BRgEupsLUrziADg2BKoaIvdQZDhXXVHIdGut9AEVdPjw4rHRYLMMan9WkU9SxH%2B5rCttq04sqIyF2P9jXytwU2KGeB3hbvAnsN75k5%2BxJNzPKqyyPwn9bwJfj%2FjGpld59aCyyKR0auxwW9hXUPWKqB1mhhz%2F%2FPskzbkfkSeIJtSwqOBIeGoe5ZyDk%2Bgzlu4dsS2de40He0aUY6y%2BQW%2FDTCqqL%2FDBjqkAX%2B65PePF69QP48c0IIf62shTh0GRTJ0C7clpQns8XLagxlbJb2479nD9fzx3d98Dd14iTB1HF6OGdDBcIohMb6AG%2FiAt7dFSR7T7j06VXHBJN1cZRf03lGQ4rgtGifPeHQysbhRKi3ybQ6%2FdOVje%2BGQObNYt7frgkH4%2Ftj2PzTULs34qCSAwgTl1sGnro%2BaMOtHVqfskJ7RUAOkDLUXo7ExobWJ&X-Amz-Signature=c98ea37a9b1e9990926cc9a670cd1fc117f0975d59c0efc27038c584fe8ac1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RU6S5U%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzTUE27Cqu7reM%2BH0gRYqUg4tb6tvD8hj7KDEggBZWwIhAOt%2FI9MX43LxKe53GVDEdanKylfsK5RPnxB52g1CwP00KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGN%2FBNOPYTVj3BOG8q3ANUZCBpM9ZdFULC2XHXK4ySW25xx0uwamJ%2Fl2QTnaeBtCWwwHwkUDm0sXBCx2oNKivZD3FVprMXRclEdADvv4CC56EgfwlVWV8xGVcF9yKmWhCG5EZGahyXa8E28bcysunsLMqPKXyx%2FBDWEB2r7oxpuppcZQ4MrrV64hmWLgquqgfsDLxwuV%2Bu03nFYWlMd8wc5JohWeLTdZUldL%2FbBYAJyAtcANq8amj9rHBC%2BwxfwqT2IgVeKOiDDq7Vxc0s6ZzEkOf459JQCiwYD8f1uualX3vdnlYu%2BnluWgnh%2BwqY%2FYUKwPrl2Dcnb1%2B%2B7yPpEi5hELN1T9Fq9DGuzDQPpoh0bnvsMlFwXVYlzXAIs%2BBJPKUXlnzPauO3XkTv8%2FPcKeyeaVM8MtgkPBgNre29QcG76kw5Qr6oha68OlM55%2BRgEupsLUrziADg2BKoaIvdQZDhXXVHIdGut9AEVdPjw4rHRYLMMan9WkU9SxH%2B5rCttq04sqIyF2P9jXytwU2KGeB3hbvAnsN75k5%2BxJNzPKqyyPwn9bwJfj%2FjGpld59aCyyKR0auxwW9hXUPWKqB1mhhz%2F%2FPskzbkfkSeIJtSwqOBIeGoe5ZyDk%2Bgzlu4dsS2de40He0aUY6y%2BQW%2FDTCqqL%2FDBjqkAX%2B65PePF69QP48c0IIf62shTh0GRTJ0C7clpQns8XLagxlbJb2479nD9fzx3d98Dd14iTB1HF6OGdDBcIohMb6AG%2FiAt7dFSR7T7j06VXHBJN1cZRf03lGQ4rgtGifPeHQysbhRKi3ybQ6%2FdOVje%2BGQObNYt7frgkH4%2Ftj2PzTULs34qCSAwgTl1sGnro%2BaMOtHVqfskJ7RUAOkDLUXo7ExobWJ&X-Amz-Signature=e58d4da64252cf4352373b4fac293de571a6e9072d377d24942711b214f598a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RU6S5U%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzTUE27Cqu7reM%2BH0gRYqUg4tb6tvD8hj7KDEggBZWwIhAOt%2FI9MX43LxKe53GVDEdanKylfsK5RPnxB52g1CwP00KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGN%2FBNOPYTVj3BOG8q3ANUZCBpM9ZdFULC2XHXK4ySW25xx0uwamJ%2Fl2QTnaeBtCWwwHwkUDm0sXBCx2oNKivZD3FVprMXRclEdADvv4CC56EgfwlVWV8xGVcF9yKmWhCG5EZGahyXa8E28bcysunsLMqPKXyx%2FBDWEB2r7oxpuppcZQ4MrrV64hmWLgquqgfsDLxwuV%2Bu03nFYWlMd8wc5JohWeLTdZUldL%2FbBYAJyAtcANq8amj9rHBC%2BwxfwqT2IgVeKOiDDq7Vxc0s6ZzEkOf459JQCiwYD8f1uualX3vdnlYu%2BnluWgnh%2BwqY%2FYUKwPrl2Dcnb1%2B%2B7yPpEi5hELN1T9Fq9DGuzDQPpoh0bnvsMlFwXVYlzXAIs%2BBJPKUXlnzPauO3XkTv8%2FPcKeyeaVM8MtgkPBgNre29QcG76kw5Qr6oha68OlM55%2BRgEupsLUrziADg2BKoaIvdQZDhXXVHIdGut9AEVdPjw4rHRYLMMan9WkU9SxH%2B5rCttq04sqIyF2P9jXytwU2KGeB3hbvAnsN75k5%2BxJNzPKqyyPwn9bwJfj%2FjGpld59aCyyKR0auxwW9hXUPWKqB1mhhz%2F%2FPskzbkfkSeIJtSwqOBIeGoe5ZyDk%2Bgzlu4dsS2de40He0aUY6y%2BQW%2FDTCqqL%2FDBjqkAX%2B65PePF69QP48c0IIf62shTh0GRTJ0C7clpQns8XLagxlbJb2479nD9fzx3d98Dd14iTB1HF6OGdDBcIohMb6AG%2FiAt7dFSR7T7j06VXHBJN1cZRf03lGQ4rgtGifPeHQysbhRKi3ybQ6%2FdOVje%2BGQObNYt7frgkH4%2Ftj2PzTULs34qCSAwgTl1sGnro%2BaMOtHVqfskJ7RUAOkDLUXo7ExobWJ&X-Amz-Signature=29b01ce71b6e58775bd7d826e6c1fcc12dc7fbf65c34991ede63687e4c0c5059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RU6S5U%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzTUE27Cqu7reM%2BH0gRYqUg4tb6tvD8hj7KDEggBZWwIhAOt%2FI9MX43LxKe53GVDEdanKylfsK5RPnxB52g1CwP00KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGN%2FBNOPYTVj3BOG8q3ANUZCBpM9ZdFULC2XHXK4ySW25xx0uwamJ%2Fl2QTnaeBtCWwwHwkUDm0sXBCx2oNKivZD3FVprMXRclEdADvv4CC56EgfwlVWV8xGVcF9yKmWhCG5EZGahyXa8E28bcysunsLMqPKXyx%2FBDWEB2r7oxpuppcZQ4MrrV64hmWLgquqgfsDLxwuV%2Bu03nFYWlMd8wc5JohWeLTdZUldL%2FbBYAJyAtcANq8amj9rHBC%2BwxfwqT2IgVeKOiDDq7Vxc0s6ZzEkOf459JQCiwYD8f1uualX3vdnlYu%2BnluWgnh%2BwqY%2FYUKwPrl2Dcnb1%2B%2B7yPpEi5hELN1T9Fq9DGuzDQPpoh0bnvsMlFwXVYlzXAIs%2BBJPKUXlnzPauO3XkTv8%2FPcKeyeaVM8MtgkPBgNre29QcG76kw5Qr6oha68OlM55%2BRgEupsLUrziADg2BKoaIvdQZDhXXVHIdGut9AEVdPjw4rHRYLMMan9WkU9SxH%2B5rCttq04sqIyF2P9jXytwU2KGeB3hbvAnsN75k5%2BxJNzPKqyyPwn9bwJfj%2FjGpld59aCyyKR0auxwW9hXUPWKqB1mhhz%2F%2FPskzbkfkSeIJtSwqOBIeGoe5ZyDk%2Bgzlu4dsS2de40He0aUY6y%2BQW%2FDTCqqL%2FDBjqkAX%2B65PePF69QP48c0IIf62shTh0GRTJ0C7clpQns8XLagxlbJb2479nD9fzx3d98Dd14iTB1HF6OGdDBcIohMb6AG%2FiAt7dFSR7T7j06VXHBJN1cZRf03lGQ4rgtGifPeHQysbhRKi3ybQ6%2FdOVje%2BGQObNYt7frgkH4%2Ftj2PzTULs34qCSAwgTl1sGnro%2BaMOtHVqfskJ7RUAOkDLUXo7ExobWJ&X-Amz-Signature=23255e7870e48f38ac2bfeb53f05d8c1dd58cbb39a8fa88740de0188f51a2cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RU6S5U%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzTUE27Cqu7reM%2BH0gRYqUg4tb6tvD8hj7KDEggBZWwIhAOt%2FI9MX43LxKe53GVDEdanKylfsK5RPnxB52g1CwP00KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGN%2FBNOPYTVj3BOG8q3ANUZCBpM9ZdFULC2XHXK4ySW25xx0uwamJ%2Fl2QTnaeBtCWwwHwkUDm0sXBCx2oNKivZD3FVprMXRclEdADvv4CC56EgfwlVWV8xGVcF9yKmWhCG5EZGahyXa8E28bcysunsLMqPKXyx%2FBDWEB2r7oxpuppcZQ4MrrV64hmWLgquqgfsDLxwuV%2Bu03nFYWlMd8wc5JohWeLTdZUldL%2FbBYAJyAtcANq8amj9rHBC%2BwxfwqT2IgVeKOiDDq7Vxc0s6ZzEkOf459JQCiwYD8f1uualX3vdnlYu%2BnluWgnh%2BwqY%2FYUKwPrl2Dcnb1%2B%2B7yPpEi5hELN1T9Fq9DGuzDQPpoh0bnvsMlFwXVYlzXAIs%2BBJPKUXlnzPauO3XkTv8%2FPcKeyeaVM8MtgkPBgNre29QcG76kw5Qr6oha68OlM55%2BRgEupsLUrziADg2BKoaIvdQZDhXXVHIdGut9AEVdPjw4rHRYLMMan9WkU9SxH%2B5rCttq04sqIyF2P9jXytwU2KGeB3hbvAnsN75k5%2BxJNzPKqyyPwn9bwJfj%2FjGpld59aCyyKR0auxwW9hXUPWKqB1mhhz%2F%2FPskzbkfkSeIJtSwqOBIeGoe5ZyDk%2Bgzlu4dsS2de40He0aUY6y%2BQW%2FDTCqqL%2FDBjqkAX%2B65PePF69QP48c0IIf62shTh0GRTJ0C7clpQns8XLagxlbJb2479nD9fzx3d98Dd14iTB1HF6OGdDBcIohMb6AG%2FiAt7dFSR7T7j06VXHBJN1cZRf03lGQ4rgtGifPeHQysbhRKi3ybQ6%2FdOVje%2BGQObNYt7frgkH4%2Ftj2PzTULs34qCSAwgTl1sGnro%2BaMOtHVqfskJ7RUAOkDLUXo7ExobWJ&X-Amz-Signature=cbb4cb2969ecc5be9667b01e4051dfdcddde54a4d6c7f1b18d633190b20c481c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
