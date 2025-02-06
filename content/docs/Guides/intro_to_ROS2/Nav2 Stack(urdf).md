---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSU45YW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC4T6aakd5ERFlVOx2dwUqSl%2BkEB1ABKUOa9AzGAAKuaAIhAOnV%2F2OoIrPYDMqX0%2FZyv8SgGKYMb5MrDbGri5dPySOEKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3Y3huMMLSu%2BwP%2Fg0q3AOMLgWlb9x4Zn6T3TGQ2%2BTwbynjgdz%2BMrVmexK7Cf%2BxrSkOBzyYIA1tJpevF42WupzaqJIoqgEsUf7xIeSwk4yBfGWazAvtfYqaN9ToCoztC7kkgWnOX6Lz%2F%2FoaVp2KC3uW0YdYhlT7vEEE%2BY434mslmzSIkmRX0f%2Fzt8lJwPEDrztsXiX9hyAwRHOOsn0xzykrv9guoBJ%2BiPQwQxYUOWlJ5jYPuTNH%2FpWsyNVbyQKAP%2FfINpVDvea9GTDuq5M3dCU%2FGMCZpAiU9yBitDgjkap9mI8wXWZjGyDuRX8vIg3hAIQYI61Hxe78eAnZ1F0juA1ZZtXpploAEMgyrPnoQ9YG4eEVP7S0qZ4ZkAF6RR7YZKAmORgYr766Pt2rxgNR4rd8JafILBHceeeoqJCSdJXb6T93t2yRBegYA1qW8c2f44CvP9pUsvIhAWIYMKtMQvMcVDowBNrTV9LbODLUxn65FE%2FTryQm4UhEYkjQodZdS2XxM4gs4YQfuj%2F8f4ghQ58IaZp%2FasNQyawk1cleyT29%2FjbIhShq8wUydJzHgrA0m5jeqgYtEE7lHwek8bU5uX7bx8Mf4EfXpNLm7CQkVZWWuWYnOyZzo54NtssGvF4p%2FtLTYEpGLvvtqAsBMDCZ7Y%2B9BjqkAXMx45PEtgm5rM7hzzOEzCfDk5bwRe7Y8Br9rJg9IaBHHD15HLvaFm0uTt6DhetRT%2BWtVeQdNCXlNatHocUAieF6FfefFhC4XFTww0IeaMHS%2BbndozgnKeXR%2FkKWahT1t4EjbcuRPoZ9EH8ENrHeUpzqZZNwIsh8vAqVTV3Lp%2BBawpT5iKTztIPU7n1xCABYI4%2B6iNsXGyNUCeVWwCL4rHSHbycD&X-Amz-Signature=1d57040ac52ef79bbec68a5799b41f6a3a1168cc9956fc65feb2a9766ae31500&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSU45YW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC4T6aakd5ERFlVOx2dwUqSl%2BkEB1ABKUOa9AzGAAKuaAIhAOnV%2F2OoIrPYDMqX0%2FZyv8SgGKYMb5MrDbGri5dPySOEKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3Y3huMMLSu%2BwP%2Fg0q3AOMLgWlb9x4Zn6T3TGQ2%2BTwbynjgdz%2BMrVmexK7Cf%2BxrSkOBzyYIA1tJpevF42WupzaqJIoqgEsUf7xIeSwk4yBfGWazAvtfYqaN9ToCoztC7kkgWnOX6Lz%2F%2FoaVp2KC3uW0YdYhlT7vEEE%2BY434mslmzSIkmRX0f%2Fzt8lJwPEDrztsXiX9hyAwRHOOsn0xzykrv9guoBJ%2BiPQwQxYUOWlJ5jYPuTNH%2FpWsyNVbyQKAP%2FfINpVDvea9GTDuq5M3dCU%2FGMCZpAiU9yBitDgjkap9mI8wXWZjGyDuRX8vIg3hAIQYI61Hxe78eAnZ1F0juA1ZZtXpploAEMgyrPnoQ9YG4eEVP7S0qZ4ZkAF6RR7YZKAmORgYr766Pt2rxgNR4rd8JafILBHceeeoqJCSdJXb6T93t2yRBegYA1qW8c2f44CvP9pUsvIhAWIYMKtMQvMcVDowBNrTV9LbODLUxn65FE%2FTryQm4UhEYkjQodZdS2XxM4gs4YQfuj%2F8f4ghQ58IaZp%2FasNQyawk1cleyT29%2FjbIhShq8wUydJzHgrA0m5jeqgYtEE7lHwek8bU5uX7bx8Mf4EfXpNLm7CQkVZWWuWYnOyZzo54NtssGvF4p%2FtLTYEpGLvvtqAsBMDCZ7Y%2B9BjqkAXMx45PEtgm5rM7hzzOEzCfDk5bwRe7Y8Br9rJg9IaBHHD15HLvaFm0uTt6DhetRT%2BWtVeQdNCXlNatHocUAieF6FfefFhC4XFTww0IeaMHS%2BbndozgnKeXR%2FkKWahT1t4EjbcuRPoZ9EH8ENrHeUpzqZZNwIsh8vAqVTV3Lp%2BBawpT5iKTztIPU7n1xCABYI4%2B6iNsXGyNUCeVWwCL4rHSHbycD&X-Amz-Signature=9922bf9bf3f806d9c942b933a486f337ffe5b3e75caf590e3374a1cd46209df8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSU45YW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC4T6aakd5ERFlVOx2dwUqSl%2BkEB1ABKUOa9AzGAAKuaAIhAOnV%2F2OoIrPYDMqX0%2FZyv8SgGKYMb5MrDbGri5dPySOEKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3Y3huMMLSu%2BwP%2Fg0q3AOMLgWlb9x4Zn6T3TGQ2%2BTwbynjgdz%2BMrVmexK7Cf%2BxrSkOBzyYIA1tJpevF42WupzaqJIoqgEsUf7xIeSwk4yBfGWazAvtfYqaN9ToCoztC7kkgWnOX6Lz%2F%2FoaVp2KC3uW0YdYhlT7vEEE%2BY434mslmzSIkmRX0f%2Fzt8lJwPEDrztsXiX9hyAwRHOOsn0xzykrv9guoBJ%2BiPQwQxYUOWlJ5jYPuTNH%2FpWsyNVbyQKAP%2FfINpVDvea9GTDuq5M3dCU%2FGMCZpAiU9yBitDgjkap9mI8wXWZjGyDuRX8vIg3hAIQYI61Hxe78eAnZ1F0juA1ZZtXpploAEMgyrPnoQ9YG4eEVP7S0qZ4ZkAF6RR7YZKAmORgYr766Pt2rxgNR4rd8JafILBHceeeoqJCSdJXb6T93t2yRBegYA1qW8c2f44CvP9pUsvIhAWIYMKtMQvMcVDowBNrTV9LbODLUxn65FE%2FTryQm4UhEYkjQodZdS2XxM4gs4YQfuj%2F8f4ghQ58IaZp%2FasNQyawk1cleyT29%2FjbIhShq8wUydJzHgrA0m5jeqgYtEE7lHwek8bU5uX7bx8Mf4EfXpNLm7CQkVZWWuWYnOyZzo54NtssGvF4p%2FtLTYEpGLvvtqAsBMDCZ7Y%2B9BjqkAXMx45PEtgm5rM7hzzOEzCfDk5bwRe7Y8Br9rJg9IaBHHD15HLvaFm0uTt6DhetRT%2BWtVeQdNCXlNatHocUAieF6FfefFhC4XFTww0IeaMHS%2BbndozgnKeXR%2FkKWahT1t4EjbcuRPoZ9EH8ENrHeUpzqZZNwIsh8vAqVTV3Lp%2BBawpT5iKTztIPU7n1xCABYI4%2B6iNsXGyNUCeVWwCL4rHSHbycD&X-Amz-Signature=18ce939f35b5fea5c71d1e0a34b75029c1ea096e16798cfac7670cbd87dd3c19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSU45YW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC4T6aakd5ERFlVOx2dwUqSl%2BkEB1ABKUOa9AzGAAKuaAIhAOnV%2F2OoIrPYDMqX0%2FZyv8SgGKYMb5MrDbGri5dPySOEKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3Y3huMMLSu%2BwP%2Fg0q3AOMLgWlb9x4Zn6T3TGQ2%2BTwbynjgdz%2BMrVmexK7Cf%2BxrSkOBzyYIA1tJpevF42WupzaqJIoqgEsUf7xIeSwk4yBfGWazAvtfYqaN9ToCoztC7kkgWnOX6Lz%2F%2FoaVp2KC3uW0YdYhlT7vEEE%2BY434mslmzSIkmRX0f%2Fzt8lJwPEDrztsXiX9hyAwRHOOsn0xzykrv9guoBJ%2BiPQwQxYUOWlJ5jYPuTNH%2FpWsyNVbyQKAP%2FfINpVDvea9GTDuq5M3dCU%2FGMCZpAiU9yBitDgjkap9mI8wXWZjGyDuRX8vIg3hAIQYI61Hxe78eAnZ1F0juA1ZZtXpploAEMgyrPnoQ9YG4eEVP7S0qZ4ZkAF6RR7YZKAmORgYr766Pt2rxgNR4rd8JafILBHceeeoqJCSdJXb6T93t2yRBegYA1qW8c2f44CvP9pUsvIhAWIYMKtMQvMcVDowBNrTV9LbODLUxn65FE%2FTryQm4UhEYkjQodZdS2XxM4gs4YQfuj%2F8f4ghQ58IaZp%2FasNQyawk1cleyT29%2FjbIhShq8wUydJzHgrA0m5jeqgYtEE7lHwek8bU5uX7bx8Mf4EfXpNLm7CQkVZWWuWYnOyZzo54NtssGvF4p%2FtLTYEpGLvvtqAsBMDCZ7Y%2B9BjqkAXMx45PEtgm5rM7hzzOEzCfDk5bwRe7Y8Br9rJg9IaBHHD15HLvaFm0uTt6DhetRT%2BWtVeQdNCXlNatHocUAieF6FfefFhC4XFTww0IeaMHS%2BbndozgnKeXR%2FkKWahT1t4EjbcuRPoZ9EH8ENrHeUpzqZZNwIsh8vAqVTV3Lp%2BBawpT5iKTztIPU7n1xCABYI4%2B6iNsXGyNUCeVWwCL4rHSHbycD&X-Amz-Signature=aff2a92e4762d91ea4b860894f6092e3593d69093d79c2a343ebad7348823289&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSU45YW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC4T6aakd5ERFlVOx2dwUqSl%2BkEB1ABKUOa9AzGAAKuaAIhAOnV%2F2OoIrPYDMqX0%2FZyv8SgGKYMb5MrDbGri5dPySOEKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3Y3huMMLSu%2BwP%2Fg0q3AOMLgWlb9x4Zn6T3TGQ2%2BTwbynjgdz%2BMrVmexK7Cf%2BxrSkOBzyYIA1tJpevF42WupzaqJIoqgEsUf7xIeSwk4yBfGWazAvtfYqaN9ToCoztC7kkgWnOX6Lz%2F%2FoaVp2KC3uW0YdYhlT7vEEE%2BY434mslmzSIkmRX0f%2Fzt8lJwPEDrztsXiX9hyAwRHOOsn0xzykrv9guoBJ%2BiPQwQxYUOWlJ5jYPuTNH%2FpWsyNVbyQKAP%2FfINpVDvea9GTDuq5M3dCU%2FGMCZpAiU9yBitDgjkap9mI8wXWZjGyDuRX8vIg3hAIQYI61Hxe78eAnZ1F0juA1ZZtXpploAEMgyrPnoQ9YG4eEVP7S0qZ4ZkAF6RR7YZKAmORgYr766Pt2rxgNR4rd8JafILBHceeeoqJCSdJXb6T93t2yRBegYA1qW8c2f44CvP9pUsvIhAWIYMKtMQvMcVDowBNrTV9LbODLUxn65FE%2FTryQm4UhEYkjQodZdS2XxM4gs4YQfuj%2F8f4ghQ58IaZp%2FasNQyawk1cleyT29%2FjbIhShq8wUydJzHgrA0m5jeqgYtEE7lHwek8bU5uX7bx8Mf4EfXpNLm7CQkVZWWuWYnOyZzo54NtssGvF4p%2FtLTYEpGLvvtqAsBMDCZ7Y%2B9BjqkAXMx45PEtgm5rM7hzzOEzCfDk5bwRe7Y8Br9rJg9IaBHHD15HLvaFm0uTt6DhetRT%2BWtVeQdNCXlNatHocUAieF6FfefFhC4XFTww0IeaMHS%2BbndozgnKeXR%2FkKWahT1t4EjbcuRPoZ9EH8ENrHeUpzqZZNwIsh8vAqVTV3Lp%2BBawpT5iKTztIPU7n1xCABYI4%2B6iNsXGyNUCeVWwCL4rHSHbycD&X-Amz-Signature=fdcb75f1d7d5fb76801fc1b07cd682201d13e3ee9789ddc9517fef2b062a34d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSU45YW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC4T6aakd5ERFlVOx2dwUqSl%2BkEB1ABKUOa9AzGAAKuaAIhAOnV%2F2OoIrPYDMqX0%2FZyv8SgGKYMb5MrDbGri5dPySOEKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3Y3huMMLSu%2BwP%2Fg0q3AOMLgWlb9x4Zn6T3TGQ2%2BTwbynjgdz%2BMrVmexK7Cf%2BxrSkOBzyYIA1tJpevF42WupzaqJIoqgEsUf7xIeSwk4yBfGWazAvtfYqaN9ToCoztC7kkgWnOX6Lz%2F%2FoaVp2KC3uW0YdYhlT7vEEE%2BY434mslmzSIkmRX0f%2Fzt8lJwPEDrztsXiX9hyAwRHOOsn0xzykrv9guoBJ%2BiPQwQxYUOWlJ5jYPuTNH%2FpWsyNVbyQKAP%2FfINpVDvea9GTDuq5M3dCU%2FGMCZpAiU9yBitDgjkap9mI8wXWZjGyDuRX8vIg3hAIQYI61Hxe78eAnZ1F0juA1ZZtXpploAEMgyrPnoQ9YG4eEVP7S0qZ4ZkAF6RR7YZKAmORgYr766Pt2rxgNR4rd8JafILBHceeeoqJCSdJXb6T93t2yRBegYA1qW8c2f44CvP9pUsvIhAWIYMKtMQvMcVDowBNrTV9LbODLUxn65FE%2FTryQm4UhEYkjQodZdS2XxM4gs4YQfuj%2F8f4ghQ58IaZp%2FasNQyawk1cleyT29%2FjbIhShq8wUydJzHgrA0m5jeqgYtEE7lHwek8bU5uX7bx8Mf4EfXpNLm7CQkVZWWuWYnOyZzo54NtssGvF4p%2FtLTYEpGLvvtqAsBMDCZ7Y%2B9BjqkAXMx45PEtgm5rM7hzzOEzCfDk5bwRe7Y8Br9rJg9IaBHHD15HLvaFm0uTt6DhetRT%2BWtVeQdNCXlNatHocUAieF6FfefFhC4XFTww0IeaMHS%2BbndozgnKeXR%2FkKWahT1t4EjbcuRPoZ9EH8ENrHeUpzqZZNwIsh8vAqVTV3Lp%2BBawpT5iKTztIPU7n1xCABYI4%2B6iNsXGyNUCeVWwCL4rHSHbycD&X-Amz-Signature=45fa2fedcdb8202cde268e734f26b6ef01283e1c75ed870190aa359ff10dc3cf&X-Amz-SignedHeaders=host&x-id=GetObject)
