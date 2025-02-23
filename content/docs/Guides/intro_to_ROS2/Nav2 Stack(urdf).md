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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WA62EUV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgHmK1FKKNo8lYYhJ08saaVK7jD9o8gFdqkF4csgNYgIhAMj%2BzfDE95G4KONlWHfRuf6xpOeLZ89alCjEmsiVUU%2FwKv8DCBkQABoMNjM3NDIzMTgzODA1IgxWcPKes5%2BMi8%2BXd1Eq3APNW%2BUWdBhVPuAKwvrHEcYtRu%2FILq02OvNwugxNc0VyneKnmJ%2FyHudeG6KVEJmgforExaIM2mDeavOM06cB1M5AZ1FcfhwEcIBHW5GP31FvaGMqoCsoLZm8ufUgufJV1ehC%2FzDvccdwKgzjmOmr8O8y2v5lg4xnYKLk1g%2BXnB2jvLZJafQEffnoeVswEnURn2x3cleNE0LGDEiwTW%2B4kwdnWMBEt5SjaMSmaGKQoWR266G5Gm%2Ba7LA8IBgknQRZO8J%2FA5k0edho4Dm8M6DpFK5kJ1SzDp2LggiRs4RuXvX05%2FUgFKD38DN97yrTHwhPAdzqxP7wmWjhfQGjhBAjP072%2B2qnVGB8T5o20MUETIlscHQrJtrVQc3DEfIUKvWOirzNJ7zGJ79tTiis6s5o23LxvGZ%2BoyC0BGmSPqLkf6RW6IwOAOShhp07Ty01n4%2BT6vPRpNhVz%2FXiVg1DfYHccjyCieL4G7VN6vzuLwBiovQV3P9zLwVkeLIfH30WcSIxb7rhBta4opxGSD2TGJgF2ddnQWmB8Fw2mBcv%2FSsiaEfUfKVZt2mgA3eBOTBYRQ74BGv9QvvX4MOZ9IjKireIgh%2F3qqtNnSjPczdv7r40UB4R23iX54Hk5t6blw%2FE%2FzDOku29BjqkAfkpepmm78LFLYvd3sTLuHimUnU7E9iFi25ZVyc%2Fgre6Cx2CuAzu8v1qiYsOHgoWkOP7LXUviEXKfW4lhfG58W%2F1%2F8H7Y5p0T4%2FdxbdCBYYummOE06WkVUAwY3bqCgBVFFnTDJbeT7AlZGpMo1yZSk1ohAT5gTUcSgNeTdXOgbJLlTDOfxOVlUERCJ73AKC3bXXFYcSa9XrPY%2BmJcyNqzB0Qauj0&X-Amz-Signature=5c76be35fa1b3764dee2b0a7c5beb97785552484321081c9f9f981d92ed8de19&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WA62EUV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgHmK1FKKNo8lYYhJ08saaVK7jD9o8gFdqkF4csgNYgIhAMj%2BzfDE95G4KONlWHfRuf6xpOeLZ89alCjEmsiVUU%2FwKv8DCBkQABoMNjM3NDIzMTgzODA1IgxWcPKes5%2BMi8%2BXd1Eq3APNW%2BUWdBhVPuAKwvrHEcYtRu%2FILq02OvNwugxNc0VyneKnmJ%2FyHudeG6KVEJmgforExaIM2mDeavOM06cB1M5AZ1FcfhwEcIBHW5GP31FvaGMqoCsoLZm8ufUgufJV1ehC%2FzDvccdwKgzjmOmr8O8y2v5lg4xnYKLk1g%2BXnB2jvLZJafQEffnoeVswEnURn2x3cleNE0LGDEiwTW%2B4kwdnWMBEt5SjaMSmaGKQoWR266G5Gm%2Ba7LA8IBgknQRZO8J%2FA5k0edho4Dm8M6DpFK5kJ1SzDp2LggiRs4RuXvX05%2FUgFKD38DN97yrTHwhPAdzqxP7wmWjhfQGjhBAjP072%2B2qnVGB8T5o20MUETIlscHQrJtrVQc3DEfIUKvWOirzNJ7zGJ79tTiis6s5o23LxvGZ%2BoyC0BGmSPqLkf6RW6IwOAOShhp07Ty01n4%2BT6vPRpNhVz%2FXiVg1DfYHccjyCieL4G7VN6vzuLwBiovQV3P9zLwVkeLIfH30WcSIxb7rhBta4opxGSD2TGJgF2ddnQWmB8Fw2mBcv%2FSsiaEfUfKVZt2mgA3eBOTBYRQ74BGv9QvvX4MOZ9IjKireIgh%2F3qqtNnSjPczdv7r40UB4R23iX54Hk5t6blw%2FE%2FzDOku29BjqkAfkpepmm78LFLYvd3sTLuHimUnU7E9iFi25ZVyc%2Fgre6Cx2CuAzu8v1qiYsOHgoWkOP7LXUviEXKfW4lhfG58W%2F1%2F8H7Y5p0T4%2FdxbdCBYYummOE06WkVUAwY3bqCgBVFFnTDJbeT7AlZGpMo1yZSk1ohAT5gTUcSgNeTdXOgbJLlTDOfxOVlUERCJ73AKC3bXXFYcSa9XrPY%2BmJcyNqzB0Qauj0&X-Amz-Signature=bf48ef4c91de0796c5f18cb8bb43d36fd6b0e0f2cf2dbb52b8a85bbdeacfcdad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WA62EUV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgHmK1FKKNo8lYYhJ08saaVK7jD9o8gFdqkF4csgNYgIhAMj%2BzfDE95G4KONlWHfRuf6xpOeLZ89alCjEmsiVUU%2FwKv8DCBkQABoMNjM3NDIzMTgzODA1IgxWcPKes5%2BMi8%2BXd1Eq3APNW%2BUWdBhVPuAKwvrHEcYtRu%2FILq02OvNwugxNc0VyneKnmJ%2FyHudeG6KVEJmgforExaIM2mDeavOM06cB1M5AZ1FcfhwEcIBHW5GP31FvaGMqoCsoLZm8ufUgufJV1ehC%2FzDvccdwKgzjmOmr8O8y2v5lg4xnYKLk1g%2BXnB2jvLZJafQEffnoeVswEnURn2x3cleNE0LGDEiwTW%2B4kwdnWMBEt5SjaMSmaGKQoWR266G5Gm%2Ba7LA8IBgknQRZO8J%2FA5k0edho4Dm8M6DpFK5kJ1SzDp2LggiRs4RuXvX05%2FUgFKD38DN97yrTHwhPAdzqxP7wmWjhfQGjhBAjP072%2B2qnVGB8T5o20MUETIlscHQrJtrVQc3DEfIUKvWOirzNJ7zGJ79tTiis6s5o23LxvGZ%2BoyC0BGmSPqLkf6RW6IwOAOShhp07Ty01n4%2BT6vPRpNhVz%2FXiVg1DfYHccjyCieL4G7VN6vzuLwBiovQV3P9zLwVkeLIfH30WcSIxb7rhBta4opxGSD2TGJgF2ddnQWmB8Fw2mBcv%2FSsiaEfUfKVZt2mgA3eBOTBYRQ74BGv9QvvX4MOZ9IjKireIgh%2F3qqtNnSjPczdv7r40UB4R23iX54Hk5t6blw%2FE%2FzDOku29BjqkAfkpepmm78LFLYvd3sTLuHimUnU7E9iFi25ZVyc%2Fgre6Cx2CuAzu8v1qiYsOHgoWkOP7LXUviEXKfW4lhfG58W%2F1%2F8H7Y5p0T4%2FdxbdCBYYummOE06WkVUAwY3bqCgBVFFnTDJbeT7AlZGpMo1yZSk1ohAT5gTUcSgNeTdXOgbJLlTDOfxOVlUERCJ73AKC3bXXFYcSa9XrPY%2BmJcyNqzB0Qauj0&X-Amz-Signature=3750c26a0e31a2acc11348550609897a634153519a802fdc8235786f04f6e49f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WA62EUV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgHmK1FKKNo8lYYhJ08saaVK7jD9o8gFdqkF4csgNYgIhAMj%2BzfDE95G4KONlWHfRuf6xpOeLZ89alCjEmsiVUU%2FwKv8DCBkQABoMNjM3NDIzMTgzODA1IgxWcPKes5%2BMi8%2BXd1Eq3APNW%2BUWdBhVPuAKwvrHEcYtRu%2FILq02OvNwugxNc0VyneKnmJ%2FyHudeG6KVEJmgforExaIM2mDeavOM06cB1M5AZ1FcfhwEcIBHW5GP31FvaGMqoCsoLZm8ufUgufJV1ehC%2FzDvccdwKgzjmOmr8O8y2v5lg4xnYKLk1g%2BXnB2jvLZJafQEffnoeVswEnURn2x3cleNE0LGDEiwTW%2B4kwdnWMBEt5SjaMSmaGKQoWR266G5Gm%2Ba7LA8IBgknQRZO8J%2FA5k0edho4Dm8M6DpFK5kJ1SzDp2LggiRs4RuXvX05%2FUgFKD38DN97yrTHwhPAdzqxP7wmWjhfQGjhBAjP072%2B2qnVGB8T5o20MUETIlscHQrJtrVQc3DEfIUKvWOirzNJ7zGJ79tTiis6s5o23LxvGZ%2BoyC0BGmSPqLkf6RW6IwOAOShhp07Ty01n4%2BT6vPRpNhVz%2FXiVg1DfYHccjyCieL4G7VN6vzuLwBiovQV3P9zLwVkeLIfH30WcSIxb7rhBta4opxGSD2TGJgF2ddnQWmB8Fw2mBcv%2FSsiaEfUfKVZt2mgA3eBOTBYRQ74BGv9QvvX4MOZ9IjKireIgh%2F3qqtNnSjPczdv7r40UB4R23iX54Hk5t6blw%2FE%2FzDOku29BjqkAfkpepmm78LFLYvd3sTLuHimUnU7E9iFi25ZVyc%2Fgre6Cx2CuAzu8v1qiYsOHgoWkOP7LXUviEXKfW4lhfG58W%2F1%2F8H7Y5p0T4%2FdxbdCBYYummOE06WkVUAwY3bqCgBVFFnTDJbeT7AlZGpMo1yZSk1ohAT5gTUcSgNeTdXOgbJLlTDOfxOVlUERCJ73AKC3bXXFYcSa9XrPY%2BmJcyNqzB0Qauj0&X-Amz-Signature=f621d6d74bbb067aba3a8de70c6457d2c40f3ba51ee93dfb988fb61609029b90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WA62EUV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgHmK1FKKNo8lYYhJ08saaVK7jD9o8gFdqkF4csgNYgIhAMj%2BzfDE95G4KONlWHfRuf6xpOeLZ89alCjEmsiVUU%2FwKv8DCBkQABoMNjM3NDIzMTgzODA1IgxWcPKes5%2BMi8%2BXd1Eq3APNW%2BUWdBhVPuAKwvrHEcYtRu%2FILq02OvNwugxNc0VyneKnmJ%2FyHudeG6KVEJmgforExaIM2mDeavOM06cB1M5AZ1FcfhwEcIBHW5GP31FvaGMqoCsoLZm8ufUgufJV1ehC%2FzDvccdwKgzjmOmr8O8y2v5lg4xnYKLk1g%2BXnB2jvLZJafQEffnoeVswEnURn2x3cleNE0LGDEiwTW%2B4kwdnWMBEt5SjaMSmaGKQoWR266G5Gm%2Ba7LA8IBgknQRZO8J%2FA5k0edho4Dm8M6DpFK5kJ1SzDp2LggiRs4RuXvX05%2FUgFKD38DN97yrTHwhPAdzqxP7wmWjhfQGjhBAjP072%2B2qnVGB8T5o20MUETIlscHQrJtrVQc3DEfIUKvWOirzNJ7zGJ79tTiis6s5o23LxvGZ%2BoyC0BGmSPqLkf6RW6IwOAOShhp07Ty01n4%2BT6vPRpNhVz%2FXiVg1DfYHccjyCieL4G7VN6vzuLwBiovQV3P9zLwVkeLIfH30WcSIxb7rhBta4opxGSD2TGJgF2ddnQWmB8Fw2mBcv%2FSsiaEfUfKVZt2mgA3eBOTBYRQ74BGv9QvvX4MOZ9IjKireIgh%2F3qqtNnSjPczdv7r40UB4R23iX54Hk5t6blw%2FE%2FzDOku29BjqkAfkpepmm78LFLYvd3sTLuHimUnU7E9iFi25ZVyc%2Fgre6Cx2CuAzu8v1qiYsOHgoWkOP7LXUviEXKfW4lhfG58W%2F1%2F8H7Y5p0T4%2FdxbdCBYYummOE06WkVUAwY3bqCgBVFFnTDJbeT7AlZGpMo1yZSk1ohAT5gTUcSgNeTdXOgbJLlTDOfxOVlUERCJ73AKC3bXXFYcSa9XrPY%2BmJcyNqzB0Qauj0&X-Amz-Signature=ebf9fa06c1127257c74aa4801fb676f57874578f3d85d8d113c1eaa1f5112230&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WA62EUV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgHmK1FKKNo8lYYhJ08saaVK7jD9o8gFdqkF4csgNYgIhAMj%2BzfDE95G4KONlWHfRuf6xpOeLZ89alCjEmsiVUU%2FwKv8DCBkQABoMNjM3NDIzMTgzODA1IgxWcPKes5%2BMi8%2BXd1Eq3APNW%2BUWdBhVPuAKwvrHEcYtRu%2FILq02OvNwugxNc0VyneKnmJ%2FyHudeG6KVEJmgforExaIM2mDeavOM06cB1M5AZ1FcfhwEcIBHW5GP31FvaGMqoCsoLZm8ufUgufJV1ehC%2FzDvccdwKgzjmOmr8O8y2v5lg4xnYKLk1g%2BXnB2jvLZJafQEffnoeVswEnURn2x3cleNE0LGDEiwTW%2B4kwdnWMBEt5SjaMSmaGKQoWR266G5Gm%2Ba7LA8IBgknQRZO8J%2FA5k0edho4Dm8M6DpFK5kJ1SzDp2LggiRs4RuXvX05%2FUgFKD38DN97yrTHwhPAdzqxP7wmWjhfQGjhBAjP072%2B2qnVGB8T5o20MUETIlscHQrJtrVQc3DEfIUKvWOirzNJ7zGJ79tTiis6s5o23LxvGZ%2BoyC0BGmSPqLkf6RW6IwOAOShhp07Ty01n4%2BT6vPRpNhVz%2FXiVg1DfYHccjyCieL4G7VN6vzuLwBiovQV3P9zLwVkeLIfH30WcSIxb7rhBta4opxGSD2TGJgF2ddnQWmB8Fw2mBcv%2FSsiaEfUfKVZt2mgA3eBOTBYRQ74BGv9QvvX4MOZ9IjKireIgh%2F3qqtNnSjPczdv7r40UB4R23iX54Hk5t6blw%2FE%2FzDOku29BjqkAfkpepmm78LFLYvd3sTLuHimUnU7E9iFi25ZVyc%2Fgre6Cx2CuAzu8v1qiYsOHgoWkOP7LXUviEXKfW4lhfG58W%2F1%2F8H7Y5p0T4%2FdxbdCBYYummOE06WkVUAwY3bqCgBVFFnTDJbeT7AlZGpMo1yZSk1ohAT5gTUcSgNeTdXOgbJLlTDOfxOVlUERCJ73AKC3bXXFYcSa9XrPY%2BmJcyNqzB0Qauj0&X-Amz-Signature=4c4807b83a4337f830fc815faa3fc8f48b3524fa4c6bcc44dd860532ae9e8891&X-Amz-SignedHeaders=host&x-id=GetObject)
