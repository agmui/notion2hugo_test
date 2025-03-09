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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIS6VGR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDqkNQGsoZyUmMtiworWTOM2YhbkUDciYUcKYEplxc35QIgfddtE3JZuhEsSMDFI1grYe3kJ21Mrosf5NPwZQrGxtQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAV4GcqQTBTkizszhyrcA5zazjLcSOJHkFrNXUZdteEOhkZVHiPRD7xxeNc6Unqs6uDJB33kWTTJmK4E%2BujH6%2BHVVkuApkrseHvmRHi5AioR97qosvh37LaYkI6%2BgX%2F6mxwqA54D2J2jyxjJ9RrRaq87D0WyWIdZyvplzxITWavthg5hek9M7dbgPAXbTNbcw6%2Fv83sbTVisUbH8CXGD83%2FiCW0mJrk686IuWJvzGj9QIMgmuSjNZOfoFR9gkJOS1yxTgU5ak4jwzt6gBxJGbFipbxds43yCQDluoc3RZR53te%2F7T2g3IsIJ2MzUgUpt27IH9UeqMDNTTb0%2BSTxyRyEk3qFQDi%2FTvXsmuTUg8ZTpnzMXjjJBzILfzP5UVcwyp5vBPjzSO%2F0LVKvhyw4ry1oCvuf0eVAVBKSo7HLSThXJZMMI2uJXZyeB1oSRtFnT4jmh1cWiJ1gzK8Lygm%2FLV%2BnO6b%2BPD4wbTKZwj3ffv9PEgreUqv5z733PFTGDSvSBBApORCIfGO%2FRt1fgJc0ICg1pNxgqr3O%2FbVpNPWvJlHrFOCNJbwRoe0%2Bek%2FWVZGPb3hfqT0sE8HlGs0YIRf5qJfVLw7O%2FP5MO6%2BOksfiNU%2Bp1HeMiB7K%2FBZMl2N3qiM9nSKVKIT6zst98wpXWMJPrtL4GOqUBSNfZDsIyFcLtRxOUk05lZFTY7pyvAa0R5lB2wx072hXA6zHufQbd%2BDktfsZeP0Lv1gr9Nrc0XSOKYt33hz2WPbwnL2HWf4nJ28QzHhEkbAiDeIVdFJKDFezDO18DBZgfcBHt%2B6lo%2BIJynNUMQJF804keQlbG5RlUIdjkPRDehW%2F2OG5QKN8XoCLYCX%2FjX4thcRh0%2Bunt8kwf9kYeVExnCE4HrhXn&X-Amz-Signature=abdad35685d7fb2c97e83bbbe54cde676d21b44ca676c6632fa92e241f6d1fba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIS6VGR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDqkNQGsoZyUmMtiworWTOM2YhbkUDciYUcKYEplxc35QIgfddtE3JZuhEsSMDFI1grYe3kJ21Mrosf5NPwZQrGxtQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAV4GcqQTBTkizszhyrcA5zazjLcSOJHkFrNXUZdteEOhkZVHiPRD7xxeNc6Unqs6uDJB33kWTTJmK4E%2BujH6%2BHVVkuApkrseHvmRHi5AioR97qosvh37LaYkI6%2BgX%2F6mxwqA54D2J2jyxjJ9RrRaq87D0WyWIdZyvplzxITWavthg5hek9M7dbgPAXbTNbcw6%2Fv83sbTVisUbH8CXGD83%2FiCW0mJrk686IuWJvzGj9QIMgmuSjNZOfoFR9gkJOS1yxTgU5ak4jwzt6gBxJGbFipbxds43yCQDluoc3RZR53te%2F7T2g3IsIJ2MzUgUpt27IH9UeqMDNTTb0%2BSTxyRyEk3qFQDi%2FTvXsmuTUg8ZTpnzMXjjJBzILfzP5UVcwyp5vBPjzSO%2F0LVKvhyw4ry1oCvuf0eVAVBKSo7HLSThXJZMMI2uJXZyeB1oSRtFnT4jmh1cWiJ1gzK8Lygm%2FLV%2BnO6b%2BPD4wbTKZwj3ffv9PEgreUqv5z733PFTGDSvSBBApORCIfGO%2FRt1fgJc0ICg1pNxgqr3O%2FbVpNPWvJlHrFOCNJbwRoe0%2Bek%2FWVZGPb3hfqT0sE8HlGs0YIRf5qJfVLw7O%2FP5MO6%2BOksfiNU%2Bp1HeMiB7K%2FBZMl2N3qiM9nSKVKIT6zst98wpXWMJPrtL4GOqUBSNfZDsIyFcLtRxOUk05lZFTY7pyvAa0R5lB2wx072hXA6zHufQbd%2BDktfsZeP0Lv1gr9Nrc0XSOKYt33hz2WPbwnL2HWf4nJ28QzHhEkbAiDeIVdFJKDFezDO18DBZgfcBHt%2B6lo%2BIJynNUMQJF804keQlbG5RlUIdjkPRDehW%2F2OG5QKN8XoCLYCX%2FjX4thcRh0%2Bunt8kwf9kYeVExnCE4HrhXn&X-Amz-Signature=a0d7d5237cb213717cfe63e59a17ac3720253313c601c5a62801bbccd5191779&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIS6VGR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDqkNQGsoZyUmMtiworWTOM2YhbkUDciYUcKYEplxc35QIgfddtE3JZuhEsSMDFI1grYe3kJ21Mrosf5NPwZQrGxtQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAV4GcqQTBTkizszhyrcA5zazjLcSOJHkFrNXUZdteEOhkZVHiPRD7xxeNc6Unqs6uDJB33kWTTJmK4E%2BujH6%2BHVVkuApkrseHvmRHi5AioR97qosvh37LaYkI6%2BgX%2F6mxwqA54D2J2jyxjJ9RrRaq87D0WyWIdZyvplzxITWavthg5hek9M7dbgPAXbTNbcw6%2Fv83sbTVisUbH8CXGD83%2FiCW0mJrk686IuWJvzGj9QIMgmuSjNZOfoFR9gkJOS1yxTgU5ak4jwzt6gBxJGbFipbxds43yCQDluoc3RZR53te%2F7T2g3IsIJ2MzUgUpt27IH9UeqMDNTTb0%2BSTxyRyEk3qFQDi%2FTvXsmuTUg8ZTpnzMXjjJBzILfzP5UVcwyp5vBPjzSO%2F0LVKvhyw4ry1oCvuf0eVAVBKSo7HLSThXJZMMI2uJXZyeB1oSRtFnT4jmh1cWiJ1gzK8Lygm%2FLV%2BnO6b%2BPD4wbTKZwj3ffv9PEgreUqv5z733PFTGDSvSBBApORCIfGO%2FRt1fgJc0ICg1pNxgqr3O%2FbVpNPWvJlHrFOCNJbwRoe0%2Bek%2FWVZGPb3hfqT0sE8HlGs0YIRf5qJfVLw7O%2FP5MO6%2BOksfiNU%2Bp1HeMiB7K%2FBZMl2N3qiM9nSKVKIT6zst98wpXWMJPrtL4GOqUBSNfZDsIyFcLtRxOUk05lZFTY7pyvAa0R5lB2wx072hXA6zHufQbd%2BDktfsZeP0Lv1gr9Nrc0XSOKYt33hz2WPbwnL2HWf4nJ28QzHhEkbAiDeIVdFJKDFezDO18DBZgfcBHt%2B6lo%2BIJynNUMQJF804keQlbG5RlUIdjkPRDehW%2F2OG5QKN8XoCLYCX%2FjX4thcRh0%2Bunt8kwf9kYeVExnCE4HrhXn&X-Amz-Signature=05de7f0e1aeedbd3741e5b326e0d840a64de801087d2024e1e9b83c42f46e641&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIS6VGR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDqkNQGsoZyUmMtiworWTOM2YhbkUDciYUcKYEplxc35QIgfddtE3JZuhEsSMDFI1grYe3kJ21Mrosf5NPwZQrGxtQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAV4GcqQTBTkizszhyrcA5zazjLcSOJHkFrNXUZdteEOhkZVHiPRD7xxeNc6Unqs6uDJB33kWTTJmK4E%2BujH6%2BHVVkuApkrseHvmRHi5AioR97qosvh37LaYkI6%2BgX%2F6mxwqA54D2J2jyxjJ9RrRaq87D0WyWIdZyvplzxITWavthg5hek9M7dbgPAXbTNbcw6%2Fv83sbTVisUbH8CXGD83%2FiCW0mJrk686IuWJvzGj9QIMgmuSjNZOfoFR9gkJOS1yxTgU5ak4jwzt6gBxJGbFipbxds43yCQDluoc3RZR53te%2F7T2g3IsIJ2MzUgUpt27IH9UeqMDNTTb0%2BSTxyRyEk3qFQDi%2FTvXsmuTUg8ZTpnzMXjjJBzILfzP5UVcwyp5vBPjzSO%2F0LVKvhyw4ry1oCvuf0eVAVBKSo7HLSThXJZMMI2uJXZyeB1oSRtFnT4jmh1cWiJ1gzK8Lygm%2FLV%2BnO6b%2BPD4wbTKZwj3ffv9PEgreUqv5z733PFTGDSvSBBApORCIfGO%2FRt1fgJc0ICg1pNxgqr3O%2FbVpNPWvJlHrFOCNJbwRoe0%2Bek%2FWVZGPb3hfqT0sE8HlGs0YIRf5qJfVLw7O%2FP5MO6%2BOksfiNU%2Bp1HeMiB7K%2FBZMl2N3qiM9nSKVKIT6zst98wpXWMJPrtL4GOqUBSNfZDsIyFcLtRxOUk05lZFTY7pyvAa0R5lB2wx072hXA6zHufQbd%2BDktfsZeP0Lv1gr9Nrc0XSOKYt33hz2WPbwnL2HWf4nJ28QzHhEkbAiDeIVdFJKDFezDO18DBZgfcBHt%2B6lo%2BIJynNUMQJF804keQlbG5RlUIdjkPRDehW%2F2OG5QKN8XoCLYCX%2FjX4thcRh0%2Bunt8kwf9kYeVExnCE4HrhXn&X-Amz-Signature=35750df783b2fc5cadd6c696dd13c9abe7921398e132de4abbcfc50ee1c02207&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIS6VGR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDqkNQGsoZyUmMtiworWTOM2YhbkUDciYUcKYEplxc35QIgfddtE3JZuhEsSMDFI1grYe3kJ21Mrosf5NPwZQrGxtQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAV4GcqQTBTkizszhyrcA5zazjLcSOJHkFrNXUZdteEOhkZVHiPRD7xxeNc6Unqs6uDJB33kWTTJmK4E%2BujH6%2BHVVkuApkrseHvmRHi5AioR97qosvh37LaYkI6%2BgX%2F6mxwqA54D2J2jyxjJ9RrRaq87D0WyWIdZyvplzxITWavthg5hek9M7dbgPAXbTNbcw6%2Fv83sbTVisUbH8CXGD83%2FiCW0mJrk686IuWJvzGj9QIMgmuSjNZOfoFR9gkJOS1yxTgU5ak4jwzt6gBxJGbFipbxds43yCQDluoc3RZR53te%2F7T2g3IsIJ2MzUgUpt27IH9UeqMDNTTb0%2BSTxyRyEk3qFQDi%2FTvXsmuTUg8ZTpnzMXjjJBzILfzP5UVcwyp5vBPjzSO%2F0LVKvhyw4ry1oCvuf0eVAVBKSo7HLSThXJZMMI2uJXZyeB1oSRtFnT4jmh1cWiJ1gzK8Lygm%2FLV%2BnO6b%2BPD4wbTKZwj3ffv9PEgreUqv5z733PFTGDSvSBBApORCIfGO%2FRt1fgJc0ICg1pNxgqr3O%2FbVpNPWvJlHrFOCNJbwRoe0%2Bek%2FWVZGPb3hfqT0sE8HlGs0YIRf5qJfVLw7O%2FP5MO6%2BOksfiNU%2Bp1HeMiB7K%2FBZMl2N3qiM9nSKVKIT6zst98wpXWMJPrtL4GOqUBSNfZDsIyFcLtRxOUk05lZFTY7pyvAa0R5lB2wx072hXA6zHufQbd%2BDktfsZeP0Lv1gr9Nrc0XSOKYt33hz2WPbwnL2HWf4nJ28QzHhEkbAiDeIVdFJKDFezDO18DBZgfcBHt%2B6lo%2BIJynNUMQJF804keQlbG5RlUIdjkPRDehW%2F2OG5QKN8XoCLYCX%2FjX4thcRh0%2Bunt8kwf9kYeVExnCE4HrhXn&X-Amz-Signature=3584d6d3d7e33b5d9d213915e288233fe9586201aa56e47b3ff04e7a6e1d81a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIS6VGR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDqkNQGsoZyUmMtiworWTOM2YhbkUDciYUcKYEplxc35QIgfddtE3JZuhEsSMDFI1grYe3kJ21Mrosf5NPwZQrGxtQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAV4GcqQTBTkizszhyrcA5zazjLcSOJHkFrNXUZdteEOhkZVHiPRD7xxeNc6Unqs6uDJB33kWTTJmK4E%2BujH6%2BHVVkuApkrseHvmRHi5AioR97qosvh37LaYkI6%2BgX%2F6mxwqA54D2J2jyxjJ9RrRaq87D0WyWIdZyvplzxITWavthg5hek9M7dbgPAXbTNbcw6%2Fv83sbTVisUbH8CXGD83%2FiCW0mJrk686IuWJvzGj9QIMgmuSjNZOfoFR9gkJOS1yxTgU5ak4jwzt6gBxJGbFipbxds43yCQDluoc3RZR53te%2F7T2g3IsIJ2MzUgUpt27IH9UeqMDNTTb0%2BSTxyRyEk3qFQDi%2FTvXsmuTUg8ZTpnzMXjjJBzILfzP5UVcwyp5vBPjzSO%2F0LVKvhyw4ry1oCvuf0eVAVBKSo7HLSThXJZMMI2uJXZyeB1oSRtFnT4jmh1cWiJ1gzK8Lygm%2FLV%2BnO6b%2BPD4wbTKZwj3ffv9PEgreUqv5z733PFTGDSvSBBApORCIfGO%2FRt1fgJc0ICg1pNxgqr3O%2FbVpNPWvJlHrFOCNJbwRoe0%2Bek%2FWVZGPb3hfqT0sE8HlGs0YIRf5qJfVLw7O%2FP5MO6%2BOksfiNU%2Bp1HeMiB7K%2FBZMl2N3qiM9nSKVKIT6zst98wpXWMJPrtL4GOqUBSNfZDsIyFcLtRxOUk05lZFTY7pyvAa0R5lB2wx072hXA6zHufQbd%2BDktfsZeP0Lv1gr9Nrc0XSOKYt33hz2WPbwnL2HWf4nJ28QzHhEkbAiDeIVdFJKDFezDO18DBZgfcBHt%2B6lo%2BIJynNUMQJF804keQlbG5RlUIdjkPRDehW%2F2OG5QKN8XoCLYCX%2FjX4thcRh0%2Bunt8kwf9kYeVExnCE4HrhXn&X-Amz-Signature=ae0e0a6490fb1644bd5cf373467ac2051246201bfa764a3542124681c4ab158e&X-Amz-SignedHeaders=host&x-id=GetObject)
