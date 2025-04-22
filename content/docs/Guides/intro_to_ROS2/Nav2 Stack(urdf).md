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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWZHAHP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9m9b44kvViEUN2lMnQZjkkQE5TRrmL2ICg%2BDX2cr3cAiEA9M6HFZeuFqnhHQR0JyLz%2B0epmK%2F7NXWFpVgkMNSkRCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWRQA%2FiJXNDXPEWJircAyWYCo3jfr73soMIS7UN2TPH%2FCB%2F3YUQkHk2w%2FQR%2BBl25dRKMsnlk%2BzP03k48PRaKvc7c7mzV8YXRYqcyKPcrJr0SK5Ndk4SFjQUQ4ZBFZ4AVRgpbWTrv0Kh8uBg0%2BVCmBTp3B95LxphLntWbXhoEQZWY2Y3Hf%2BjawUmpRh8W42fnD19sRycpu%2BzKxs8NhJCqCAaddWFkPv2FU1GMM6QZCaMGutLsKwAsAFhL3q5wPoRFx4fbhRzcLue%2FNXdnDZaBhrdT8sBUhc%2BlColtWvEpkkvgXKfJwq8%2BjO9WCFNlELGppFj0vsROmcfgLvuGQprr%2Fx6DMIDdCJY5Z5H0sNjY9ChvWvY%2FWkv8tlmDAxuPa%2FlGzqZqdJiVbXRJ3uQ8t8SRsh7Pz82eNw4%2FKeE%2FC2AzUpxWe6Foc4UrgWhPlxFee4SrXfnemlXOUDGKHg1fU%2FeX%2B11fGHnQdvq5%2BujcdH7Q5dIPy0ZSd4DhRz9MoVWs9Be4U0U8%2Bd7x9%2B38cFktZ1hSI3VWn%2BHmG7Ylul26LkFbBKy%2FAZy1Z9boT7raaB2QcsKapd%2FnaxRQOhjiFzGIv1zkRcwtq5PNSmF%2FcqHtvU76PlX6HFlDsf10UbyZo1i6RUF9FscMuse63vveqwOMLW7nMAGOqUByd723%2BIE%2F94XJ9HjBLgAXAI1K9OXCUUJBU9h5H2eoIgzjHcewNmmGMi7tiur4nXyef8pOLDQpaua83P65jwjxc6iuywvREyVdvpnrhbaMk7Aa3Tiedv06Zd9%2BSgf%2BIgnFcdEY5XidpRpzoVk9AiJilL8%2FMQElHw06smH0Qx10CtHsYeauLyC7QOuljh1w7QVjNQvqgCxJGKWetOtjVHFTyD6umqQ&X-Amz-Signature=c607cf25beddb412cb26d49c2ef31ddf9bc9d86e9d57a567742931b773f31f75&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWZHAHP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9m9b44kvViEUN2lMnQZjkkQE5TRrmL2ICg%2BDX2cr3cAiEA9M6HFZeuFqnhHQR0JyLz%2B0epmK%2F7NXWFpVgkMNSkRCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWRQA%2FiJXNDXPEWJircAyWYCo3jfr73soMIS7UN2TPH%2FCB%2F3YUQkHk2w%2FQR%2BBl25dRKMsnlk%2BzP03k48PRaKvc7c7mzV8YXRYqcyKPcrJr0SK5Ndk4SFjQUQ4ZBFZ4AVRgpbWTrv0Kh8uBg0%2BVCmBTp3B95LxphLntWbXhoEQZWY2Y3Hf%2BjawUmpRh8W42fnD19sRycpu%2BzKxs8NhJCqCAaddWFkPv2FU1GMM6QZCaMGutLsKwAsAFhL3q5wPoRFx4fbhRzcLue%2FNXdnDZaBhrdT8sBUhc%2BlColtWvEpkkvgXKfJwq8%2BjO9WCFNlELGppFj0vsROmcfgLvuGQprr%2Fx6DMIDdCJY5Z5H0sNjY9ChvWvY%2FWkv8tlmDAxuPa%2FlGzqZqdJiVbXRJ3uQ8t8SRsh7Pz82eNw4%2FKeE%2FC2AzUpxWe6Foc4UrgWhPlxFee4SrXfnemlXOUDGKHg1fU%2FeX%2B11fGHnQdvq5%2BujcdH7Q5dIPy0ZSd4DhRz9MoVWs9Be4U0U8%2Bd7x9%2B38cFktZ1hSI3VWn%2BHmG7Ylul26LkFbBKy%2FAZy1Z9boT7raaB2QcsKapd%2FnaxRQOhjiFzGIv1zkRcwtq5PNSmF%2FcqHtvU76PlX6HFlDsf10UbyZo1i6RUF9FscMuse63vveqwOMLW7nMAGOqUByd723%2BIE%2F94XJ9HjBLgAXAI1K9OXCUUJBU9h5H2eoIgzjHcewNmmGMi7tiur4nXyef8pOLDQpaua83P65jwjxc6iuywvREyVdvpnrhbaMk7Aa3Tiedv06Zd9%2BSgf%2BIgnFcdEY5XidpRpzoVk9AiJilL8%2FMQElHw06smH0Qx10CtHsYeauLyC7QOuljh1w7QVjNQvqgCxJGKWetOtjVHFTyD6umqQ&X-Amz-Signature=aa17b64e44b0a8403dd3ea5db2c9037ac5bfe035f8931e6d188051314f280f54&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWZHAHP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9m9b44kvViEUN2lMnQZjkkQE5TRrmL2ICg%2BDX2cr3cAiEA9M6HFZeuFqnhHQR0JyLz%2B0epmK%2F7NXWFpVgkMNSkRCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWRQA%2FiJXNDXPEWJircAyWYCo3jfr73soMIS7UN2TPH%2FCB%2F3YUQkHk2w%2FQR%2BBl25dRKMsnlk%2BzP03k48PRaKvc7c7mzV8YXRYqcyKPcrJr0SK5Ndk4SFjQUQ4ZBFZ4AVRgpbWTrv0Kh8uBg0%2BVCmBTp3B95LxphLntWbXhoEQZWY2Y3Hf%2BjawUmpRh8W42fnD19sRycpu%2BzKxs8NhJCqCAaddWFkPv2FU1GMM6QZCaMGutLsKwAsAFhL3q5wPoRFx4fbhRzcLue%2FNXdnDZaBhrdT8sBUhc%2BlColtWvEpkkvgXKfJwq8%2BjO9WCFNlELGppFj0vsROmcfgLvuGQprr%2Fx6DMIDdCJY5Z5H0sNjY9ChvWvY%2FWkv8tlmDAxuPa%2FlGzqZqdJiVbXRJ3uQ8t8SRsh7Pz82eNw4%2FKeE%2FC2AzUpxWe6Foc4UrgWhPlxFee4SrXfnemlXOUDGKHg1fU%2FeX%2B11fGHnQdvq5%2BujcdH7Q5dIPy0ZSd4DhRz9MoVWs9Be4U0U8%2Bd7x9%2B38cFktZ1hSI3VWn%2BHmG7Ylul26LkFbBKy%2FAZy1Z9boT7raaB2QcsKapd%2FnaxRQOhjiFzGIv1zkRcwtq5PNSmF%2FcqHtvU76PlX6HFlDsf10UbyZo1i6RUF9FscMuse63vveqwOMLW7nMAGOqUByd723%2BIE%2F94XJ9HjBLgAXAI1K9OXCUUJBU9h5H2eoIgzjHcewNmmGMi7tiur4nXyef8pOLDQpaua83P65jwjxc6iuywvREyVdvpnrhbaMk7Aa3Tiedv06Zd9%2BSgf%2BIgnFcdEY5XidpRpzoVk9AiJilL8%2FMQElHw06smH0Qx10CtHsYeauLyC7QOuljh1w7QVjNQvqgCxJGKWetOtjVHFTyD6umqQ&X-Amz-Signature=f851baf2db962285869226d8313c55fee558bab70ff1c9df0d01e356a030ad07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWZHAHP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9m9b44kvViEUN2lMnQZjkkQE5TRrmL2ICg%2BDX2cr3cAiEA9M6HFZeuFqnhHQR0JyLz%2B0epmK%2F7NXWFpVgkMNSkRCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWRQA%2FiJXNDXPEWJircAyWYCo3jfr73soMIS7UN2TPH%2FCB%2F3YUQkHk2w%2FQR%2BBl25dRKMsnlk%2BzP03k48PRaKvc7c7mzV8YXRYqcyKPcrJr0SK5Ndk4SFjQUQ4ZBFZ4AVRgpbWTrv0Kh8uBg0%2BVCmBTp3B95LxphLntWbXhoEQZWY2Y3Hf%2BjawUmpRh8W42fnD19sRycpu%2BzKxs8NhJCqCAaddWFkPv2FU1GMM6QZCaMGutLsKwAsAFhL3q5wPoRFx4fbhRzcLue%2FNXdnDZaBhrdT8sBUhc%2BlColtWvEpkkvgXKfJwq8%2BjO9WCFNlELGppFj0vsROmcfgLvuGQprr%2Fx6DMIDdCJY5Z5H0sNjY9ChvWvY%2FWkv8tlmDAxuPa%2FlGzqZqdJiVbXRJ3uQ8t8SRsh7Pz82eNw4%2FKeE%2FC2AzUpxWe6Foc4UrgWhPlxFee4SrXfnemlXOUDGKHg1fU%2FeX%2B11fGHnQdvq5%2BujcdH7Q5dIPy0ZSd4DhRz9MoVWs9Be4U0U8%2Bd7x9%2B38cFktZ1hSI3VWn%2BHmG7Ylul26LkFbBKy%2FAZy1Z9boT7raaB2QcsKapd%2FnaxRQOhjiFzGIv1zkRcwtq5PNSmF%2FcqHtvU76PlX6HFlDsf10UbyZo1i6RUF9FscMuse63vveqwOMLW7nMAGOqUByd723%2BIE%2F94XJ9HjBLgAXAI1K9OXCUUJBU9h5H2eoIgzjHcewNmmGMi7tiur4nXyef8pOLDQpaua83P65jwjxc6iuywvREyVdvpnrhbaMk7Aa3Tiedv06Zd9%2BSgf%2BIgnFcdEY5XidpRpzoVk9AiJilL8%2FMQElHw06smH0Qx10CtHsYeauLyC7QOuljh1w7QVjNQvqgCxJGKWetOtjVHFTyD6umqQ&X-Amz-Signature=291957bf5a14f98eefcc599351f3cd9c59645c69d995c8838152a762d48c076b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWZHAHP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9m9b44kvViEUN2lMnQZjkkQE5TRrmL2ICg%2BDX2cr3cAiEA9M6HFZeuFqnhHQR0JyLz%2B0epmK%2F7NXWFpVgkMNSkRCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWRQA%2FiJXNDXPEWJircAyWYCo3jfr73soMIS7UN2TPH%2FCB%2F3YUQkHk2w%2FQR%2BBl25dRKMsnlk%2BzP03k48PRaKvc7c7mzV8YXRYqcyKPcrJr0SK5Ndk4SFjQUQ4ZBFZ4AVRgpbWTrv0Kh8uBg0%2BVCmBTp3B95LxphLntWbXhoEQZWY2Y3Hf%2BjawUmpRh8W42fnD19sRycpu%2BzKxs8NhJCqCAaddWFkPv2FU1GMM6QZCaMGutLsKwAsAFhL3q5wPoRFx4fbhRzcLue%2FNXdnDZaBhrdT8sBUhc%2BlColtWvEpkkvgXKfJwq8%2BjO9WCFNlELGppFj0vsROmcfgLvuGQprr%2Fx6DMIDdCJY5Z5H0sNjY9ChvWvY%2FWkv8tlmDAxuPa%2FlGzqZqdJiVbXRJ3uQ8t8SRsh7Pz82eNw4%2FKeE%2FC2AzUpxWe6Foc4UrgWhPlxFee4SrXfnemlXOUDGKHg1fU%2FeX%2B11fGHnQdvq5%2BujcdH7Q5dIPy0ZSd4DhRz9MoVWs9Be4U0U8%2Bd7x9%2B38cFktZ1hSI3VWn%2BHmG7Ylul26LkFbBKy%2FAZy1Z9boT7raaB2QcsKapd%2FnaxRQOhjiFzGIv1zkRcwtq5PNSmF%2FcqHtvU76PlX6HFlDsf10UbyZo1i6RUF9FscMuse63vveqwOMLW7nMAGOqUByd723%2BIE%2F94XJ9HjBLgAXAI1K9OXCUUJBU9h5H2eoIgzjHcewNmmGMi7tiur4nXyef8pOLDQpaua83P65jwjxc6iuywvREyVdvpnrhbaMk7Aa3Tiedv06Zd9%2BSgf%2BIgnFcdEY5XidpRpzoVk9AiJilL8%2FMQElHw06smH0Qx10CtHsYeauLyC7QOuljh1w7QVjNQvqgCxJGKWetOtjVHFTyD6umqQ&X-Amz-Signature=1138aa49dfa01d7313451478fd0ea7fa775ea9f3c2d1d81a0621f9753b4ac194&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWZHAHP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIC9m9b44kvViEUN2lMnQZjkkQE5TRrmL2ICg%2BDX2cr3cAiEA9M6HFZeuFqnhHQR0JyLz%2B0epmK%2F7NXWFpVgkMNSkRCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWRQA%2FiJXNDXPEWJircAyWYCo3jfr73soMIS7UN2TPH%2FCB%2F3YUQkHk2w%2FQR%2BBl25dRKMsnlk%2BzP03k48PRaKvc7c7mzV8YXRYqcyKPcrJr0SK5Ndk4SFjQUQ4ZBFZ4AVRgpbWTrv0Kh8uBg0%2BVCmBTp3B95LxphLntWbXhoEQZWY2Y3Hf%2BjawUmpRh8W42fnD19sRycpu%2BzKxs8NhJCqCAaddWFkPv2FU1GMM6QZCaMGutLsKwAsAFhL3q5wPoRFx4fbhRzcLue%2FNXdnDZaBhrdT8sBUhc%2BlColtWvEpkkvgXKfJwq8%2BjO9WCFNlELGppFj0vsROmcfgLvuGQprr%2Fx6DMIDdCJY5Z5H0sNjY9ChvWvY%2FWkv8tlmDAxuPa%2FlGzqZqdJiVbXRJ3uQ8t8SRsh7Pz82eNw4%2FKeE%2FC2AzUpxWe6Foc4UrgWhPlxFee4SrXfnemlXOUDGKHg1fU%2FeX%2B11fGHnQdvq5%2BujcdH7Q5dIPy0ZSd4DhRz9MoVWs9Be4U0U8%2Bd7x9%2B38cFktZ1hSI3VWn%2BHmG7Ylul26LkFbBKy%2FAZy1Z9boT7raaB2QcsKapd%2FnaxRQOhjiFzGIv1zkRcwtq5PNSmF%2FcqHtvU76PlX6HFlDsf10UbyZo1i6RUF9FscMuse63vveqwOMLW7nMAGOqUByd723%2BIE%2F94XJ9HjBLgAXAI1K9OXCUUJBU9h5H2eoIgzjHcewNmmGMi7tiur4nXyef8pOLDQpaua83P65jwjxc6iuywvREyVdvpnrhbaMk7Aa3Tiedv06Zd9%2BSgf%2BIgnFcdEY5XidpRpzoVk9AiJilL8%2FMQElHw06smH0Qx10CtHsYeauLyC7QOuljh1w7QVjNQvqgCxJGKWetOtjVHFTyD6umqQ&X-Amz-Signature=24f8f53e5881e585d1583dfb44a9301d796fd1df12cd1ff0ee8e79edc18ab5fc&X-Amz-SignedHeaders=host&x-id=GetObject)
