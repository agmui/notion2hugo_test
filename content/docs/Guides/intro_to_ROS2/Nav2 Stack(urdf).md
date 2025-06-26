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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFGWRCP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC%2FUdZfmTobvM%2Bl82v%2BOMEipgdKOaoO82t%2BPOjkSdyuKAiA8Fe909RrCnsyR1tBwxItmrqq6dAJLy%2Bf8NODFIPUevir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFvD1kdWU1riWoFdNKtwDe0F8A4dMPqBgCaq0rVKzfUX4BWHjUY2w%2FZlEBaFhTpqHTCLBnq4ZdRwc1nj86RRHrV0Xti0rg9fo30yX5qgCeyAC0Ant%2FpP3Mlq0vgj6bPKVIaUw9o8XoEhpntoMnBy3J3Ub1VwRHMsRuxTwQR%2FPWOieTPvbjhakA8WcYli1G%2B7zxkJCYcbpihLzi%2B4y6vlTtz7dRmGcjpmngzgi0lhUeiFq2c%2FnskAKCz8ihQT6pP3wPKInQFD%2FBgbfHSA87mIidXRK6C%2B%2BXiu1YRXEuUe8VZuJeinkYnuwOLAj9QzbuUFvQsGHTlQR%2BCh0pOg%2FIX12QXeJLUHHKkyudMGVbHI3%2FFNeAuZH7bmx993bgsnACZBzIVbxxI8jrRLP3LrcjbSbVldGWpzKXb75urQTFfmpdPdRMu1XvmlqZGAc73rq5LmfphK6KULd9YiVb21QVHwIzLOEBLhNaR7G0Jr4zlv3Z9oChOdCnWBigoGbw19wGWsFipeQENAVvWmX93b9g4j3WnV2nLcTXjhQs3exWkp3sZALVlT9DEdh9dwyxDP3%2FRAoTYSFWMkAvRbsP0xpIXvapiohqeD1zq%2Bhx%2F7dpHzMN%2F3j%2Fa0oQ1QjAyNzbtG6dxcgO5M1oB%2B82nN8IWQwqYT2wgY6pgHRsGRvnjP9%2BVZ5SiC%2Bvc1qKpcw76Q7lYUxJ1cqJCkQyNDq%2B%2FQlMCZOc87dSKHmDG1hr7APuEyZ%2FNVtaoLfiM77%2BMN562dMtr6UxaedwmsnRw5YUMYPLvROfun7kXQMPD1Dn6El%2FDp8F4t30NxPpZNmnCri9pfggMj5zYzhUmwXvbXgdSSFyk1zMU8X5SyVHkYTwoG%2BvDmbVK2kJj5EBNXciygjWEVr&X-Amz-Signature=ddf1a80c8f03c706cf2ad5047fbad6cde5b28a02315339f3bd3582fd732727ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFGWRCP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC%2FUdZfmTobvM%2Bl82v%2BOMEipgdKOaoO82t%2BPOjkSdyuKAiA8Fe909RrCnsyR1tBwxItmrqq6dAJLy%2Bf8NODFIPUevir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFvD1kdWU1riWoFdNKtwDe0F8A4dMPqBgCaq0rVKzfUX4BWHjUY2w%2FZlEBaFhTpqHTCLBnq4ZdRwc1nj86RRHrV0Xti0rg9fo30yX5qgCeyAC0Ant%2FpP3Mlq0vgj6bPKVIaUw9o8XoEhpntoMnBy3J3Ub1VwRHMsRuxTwQR%2FPWOieTPvbjhakA8WcYli1G%2B7zxkJCYcbpihLzi%2B4y6vlTtz7dRmGcjpmngzgi0lhUeiFq2c%2FnskAKCz8ihQT6pP3wPKInQFD%2FBgbfHSA87mIidXRK6C%2B%2BXiu1YRXEuUe8VZuJeinkYnuwOLAj9QzbuUFvQsGHTlQR%2BCh0pOg%2FIX12QXeJLUHHKkyudMGVbHI3%2FFNeAuZH7bmx993bgsnACZBzIVbxxI8jrRLP3LrcjbSbVldGWpzKXb75urQTFfmpdPdRMu1XvmlqZGAc73rq5LmfphK6KULd9YiVb21QVHwIzLOEBLhNaR7G0Jr4zlv3Z9oChOdCnWBigoGbw19wGWsFipeQENAVvWmX93b9g4j3WnV2nLcTXjhQs3exWkp3sZALVlT9DEdh9dwyxDP3%2FRAoTYSFWMkAvRbsP0xpIXvapiohqeD1zq%2Bhx%2F7dpHzMN%2F3j%2Fa0oQ1QjAyNzbtG6dxcgO5M1oB%2B82nN8IWQwqYT2wgY6pgHRsGRvnjP9%2BVZ5SiC%2Bvc1qKpcw76Q7lYUxJ1cqJCkQyNDq%2B%2FQlMCZOc87dSKHmDG1hr7APuEyZ%2FNVtaoLfiM77%2BMN562dMtr6UxaedwmsnRw5YUMYPLvROfun7kXQMPD1Dn6El%2FDp8F4t30NxPpZNmnCri9pfggMj5zYzhUmwXvbXgdSSFyk1zMU8X5SyVHkYTwoG%2BvDmbVK2kJj5EBNXciygjWEVr&X-Amz-Signature=0f9df8f3de80eb60b1a82ec3867faa0b72e5104974c8477c75c5389653de4acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFGWRCP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC%2FUdZfmTobvM%2Bl82v%2BOMEipgdKOaoO82t%2BPOjkSdyuKAiA8Fe909RrCnsyR1tBwxItmrqq6dAJLy%2Bf8NODFIPUevir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFvD1kdWU1riWoFdNKtwDe0F8A4dMPqBgCaq0rVKzfUX4BWHjUY2w%2FZlEBaFhTpqHTCLBnq4ZdRwc1nj86RRHrV0Xti0rg9fo30yX5qgCeyAC0Ant%2FpP3Mlq0vgj6bPKVIaUw9o8XoEhpntoMnBy3J3Ub1VwRHMsRuxTwQR%2FPWOieTPvbjhakA8WcYli1G%2B7zxkJCYcbpihLzi%2B4y6vlTtz7dRmGcjpmngzgi0lhUeiFq2c%2FnskAKCz8ihQT6pP3wPKInQFD%2FBgbfHSA87mIidXRK6C%2B%2BXiu1YRXEuUe8VZuJeinkYnuwOLAj9QzbuUFvQsGHTlQR%2BCh0pOg%2FIX12QXeJLUHHKkyudMGVbHI3%2FFNeAuZH7bmx993bgsnACZBzIVbxxI8jrRLP3LrcjbSbVldGWpzKXb75urQTFfmpdPdRMu1XvmlqZGAc73rq5LmfphK6KULd9YiVb21QVHwIzLOEBLhNaR7G0Jr4zlv3Z9oChOdCnWBigoGbw19wGWsFipeQENAVvWmX93b9g4j3WnV2nLcTXjhQs3exWkp3sZALVlT9DEdh9dwyxDP3%2FRAoTYSFWMkAvRbsP0xpIXvapiohqeD1zq%2Bhx%2F7dpHzMN%2F3j%2Fa0oQ1QjAyNzbtG6dxcgO5M1oB%2B82nN8IWQwqYT2wgY6pgHRsGRvnjP9%2BVZ5SiC%2Bvc1qKpcw76Q7lYUxJ1cqJCkQyNDq%2B%2FQlMCZOc87dSKHmDG1hr7APuEyZ%2FNVtaoLfiM77%2BMN562dMtr6UxaedwmsnRw5YUMYPLvROfun7kXQMPD1Dn6El%2FDp8F4t30NxPpZNmnCri9pfggMj5zYzhUmwXvbXgdSSFyk1zMU8X5SyVHkYTwoG%2BvDmbVK2kJj5EBNXciygjWEVr&X-Amz-Signature=4bbb2b26dc8c3366bf0195ba884a423e09a0493862c8590ee6002603403540d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFGWRCP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC%2FUdZfmTobvM%2Bl82v%2BOMEipgdKOaoO82t%2BPOjkSdyuKAiA8Fe909RrCnsyR1tBwxItmrqq6dAJLy%2Bf8NODFIPUevir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFvD1kdWU1riWoFdNKtwDe0F8A4dMPqBgCaq0rVKzfUX4BWHjUY2w%2FZlEBaFhTpqHTCLBnq4ZdRwc1nj86RRHrV0Xti0rg9fo30yX5qgCeyAC0Ant%2FpP3Mlq0vgj6bPKVIaUw9o8XoEhpntoMnBy3J3Ub1VwRHMsRuxTwQR%2FPWOieTPvbjhakA8WcYli1G%2B7zxkJCYcbpihLzi%2B4y6vlTtz7dRmGcjpmngzgi0lhUeiFq2c%2FnskAKCz8ihQT6pP3wPKInQFD%2FBgbfHSA87mIidXRK6C%2B%2BXiu1YRXEuUe8VZuJeinkYnuwOLAj9QzbuUFvQsGHTlQR%2BCh0pOg%2FIX12QXeJLUHHKkyudMGVbHI3%2FFNeAuZH7bmx993bgsnACZBzIVbxxI8jrRLP3LrcjbSbVldGWpzKXb75urQTFfmpdPdRMu1XvmlqZGAc73rq5LmfphK6KULd9YiVb21QVHwIzLOEBLhNaR7G0Jr4zlv3Z9oChOdCnWBigoGbw19wGWsFipeQENAVvWmX93b9g4j3WnV2nLcTXjhQs3exWkp3sZALVlT9DEdh9dwyxDP3%2FRAoTYSFWMkAvRbsP0xpIXvapiohqeD1zq%2Bhx%2F7dpHzMN%2F3j%2Fa0oQ1QjAyNzbtG6dxcgO5M1oB%2B82nN8IWQwqYT2wgY6pgHRsGRvnjP9%2BVZ5SiC%2Bvc1qKpcw76Q7lYUxJ1cqJCkQyNDq%2B%2FQlMCZOc87dSKHmDG1hr7APuEyZ%2FNVtaoLfiM77%2BMN562dMtr6UxaedwmsnRw5YUMYPLvROfun7kXQMPD1Dn6El%2FDp8F4t30NxPpZNmnCri9pfggMj5zYzhUmwXvbXgdSSFyk1zMU8X5SyVHkYTwoG%2BvDmbVK2kJj5EBNXciygjWEVr&X-Amz-Signature=4f07b9a42281055d01ee20e14ea11074e44c14c0ae33c1c2da33cf6fcf6364ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFGWRCP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC%2FUdZfmTobvM%2Bl82v%2BOMEipgdKOaoO82t%2BPOjkSdyuKAiA8Fe909RrCnsyR1tBwxItmrqq6dAJLy%2Bf8NODFIPUevir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFvD1kdWU1riWoFdNKtwDe0F8A4dMPqBgCaq0rVKzfUX4BWHjUY2w%2FZlEBaFhTpqHTCLBnq4ZdRwc1nj86RRHrV0Xti0rg9fo30yX5qgCeyAC0Ant%2FpP3Mlq0vgj6bPKVIaUw9o8XoEhpntoMnBy3J3Ub1VwRHMsRuxTwQR%2FPWOieTPvbjhakA8WcYli1G%2B7zxkJCYcbpihLzi%2B4y6vlTtz7dRmGcjpmngzgi0lhUeiFq2c%2FnskAKCz8ihQT6pP3wPKInQFD%2FBgbfHSA87mIidXRK6C%2B%2BXiu1YRXEuUe8VZuJeinkYnuwOLAj9QzbuUFvQsGHTlQR%2BCh0pOg%2FIX12QXeJLUHHKkyudMGVbHI3%2FFNeAuZH7bmx993bgsnACZBzIVbxxI8jrRLP3LrcjbSbVldGWpzKXb75urQTFfmpdPdRMu1XvmlqZGAc73rq5LmfphK6KULd9YiVb21QVHwIzLOEBLhNaR7G0Jr4zlv3Z9oChOdCnWBigoGbw19wGWsFipeQENAVvWmX93b9g4j3WnV2nLcTXjhQs3exWkp3sZALVlT9DEdh9dwyxDP3%2FRAoTYSFWMkAvRbsP0xpIXvapiohqeD1zq%2Bhx%2F7dpHzMN%2F3j%2Fa0oQ1QjAyNzbtG6dxcgO5M1oB%2B82nN8IWQwqYT2wgY6pgHRsGRvnjP9%2BVZ5SiC%2Bvc1qKpcw76Q7lYUxJ1cqJCkQyNDq%2B%2FQlMCZOc87dSKHmDG1hr7APuEyZ%2FNVtaoLfiM77%2BMN562dMtr6UxaedwmsnRw5YUMYPLvROfun7kXQMPD1Dn6El%2FDp8F4t30NxPpZNmnCri9pfggMj5zYzhUmwXvbXgdSSFyk1zMU8X5SyVHkYTwoG%2BvDmbVK2kJj5EBNXciygjWEVr&X-Amz-Signature=23a7dfcbe73de8f56fc73d85c2b549271b4380ec25db2f1013c687ac2c9bb21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TFGWRCP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIC%2FUdZfmTobvM%2Bl82v%2BOMEipgdKOaoO82t%2BPOjkSdyuKAiA8Fe909RrCnsyR1tBwxItmrqq6dAJLy%2Bf8NODFIPUevir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMFvD1kdWU1riWoFdNKtwDe0F8A4dMPqBgCaq0rVKzfUX4BWHjUY2w%2FZlEBaFhTpqHTCLBnq4ZdRwc1nj86RRHrV0Xti0rg9fo30yX5qgCeyAC0Ant%2FpP3Mlq0vgj6bPKVIaUw9o8XoEhpntoMnBy3J3Ub1VwRHMsRuxTwQR%2FPWOieTPvbjhakA8WcYli1G%2B7zxkJCYcbpihLzi%2B4y6vlTtz7dRmGcjpmngzgi0lhUeiFq2c%2FnskAKCz8ihQT6pP3wPKInQFD%2FBgbfHSA87mIidXRK6C%2B%2BXiu1YRXEuUe8VZuJeinkYnuwOLAj9QzbuUFvQsGHTlQR%2BCh0pOg%2FIX12QXeJLUHHKkyudMGVbHI3%2FFNeAuZH7bmx993bgsnACZBzIVbxxI8jrRLP3LrcjbSbVldGWpzKXb75urQTFfmpdPdRMu1XvmlqZGAc73rq5LmfphK6KULd9YiVb21QVHwIzLOEBLhNaR7G0Jr4zlv3Z9oChOdCnWBigoGbw19wGWsFipeQENAVvWmX93b9g4j3WnV2nLcTXjhQs3exWkp3sZALVlT9DEdh9dwyxDP3%2FRAoTYSFWMkAvRbsP0xpIXvapiohqeD1zq%2Bhx%2F7dpHzMN%2F3j%2Fa0oQ1QjAyNzbtG6dxcgO5M1oB%2B82nN8IWQwqYT2wgY6pgHRsGRvnjP9%2BVZ5SiC%2Bvc1qKpcw76Q7lYUxJ1cqJCkQyNDq%2B%2FQlMCZOc87dSKHmDG1hr7APuEyZ%2FNVtaoLfiM77%2BMN562dMtr6UxaedwmsnRw5YUMYPLvROfun7kXQMPD1Dn6El%2FDp8F4t30NxPpZNmnCri9pfggMj5zYzhUmwXvbXgdSSFyk1zMU8X5SyVHkYTwoG%2BvDmbVK2kJj5EBNXciygjWEVr&X-Amz-Signature=15dcd2407fccea17d9fe247c5412182bb77a10507aceacc10fc954d4735de6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
