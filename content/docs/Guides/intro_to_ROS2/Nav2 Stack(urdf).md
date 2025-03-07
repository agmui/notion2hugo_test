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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGPDSPN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATm3oVyLozTYctgSRuRz8rVNZj7oD6254y88R1d8CN6AiEA4y4vlQ6ni%2B%2FlZ1adRKpW%2BFZ%2Fjn%2BR70KI0%2F7ZvHaMkwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDObl57lnVzX9XQXuNCrcAzQQtvZDNljU%2FZi%2B%2BvRZgo1dBMj0WLFiFRV7%2BgqrM%2F7qUu1jEfh%2BfjIg7aB5KNnsy4hEwvg2MfFqVGok7LuX2pJqEIu8%2FlG6UGk0WQyiDDjGNMqocWyZPBNOoCTOcXXstZBLMCT4FbMiQAQ4RGQOp4MrsCYc%2FcahnOfIClCqYkVis%2FsEVhXjDOJJtqJX1FzkPPQtDbbQ6Nd9RnFswkbTpHfazuTyn2YJATaCkCo%2BYyd4hiCyROFYX1AeOr4PVTfGBcSiq54c0tm8Xf5wJnhK1oN1mVeuv5qfT2Q6cg992dDrABumvdj1P9Iga%2FDn5HDYrgiWWm%2B%2FrlpoZjJOcLtYPln3hCRwMzBTmsBi5%2FO%2B0YoUejlR00UGprxTmFyEPBSIAxaZtRW3fM98BRn9xgqg6B2KDklfQeMxy7l2z4YBUr%2F9LqHlSnoXOwXSpxW%2F5ZJIqGlW5HXwgBc7u4b5x8qA3jfNoogmQhZtsb70nv4hEDir4GNg3qaAZbToB0SpO2tdYtjwebKTVaCZh4SpymTU65OJbjzFl8Cr%2FYs29FRNQHPqyMeHyx6BYoTFh%2FpCGBZoTXuPYxhqpK7R6syWi7ApID8IcyxO2E4z9RUXs60NjP%2Fs9AIT%2BmsTFeO%2BSWlxMIbfq74GOqUBsifKVCG%2BJqGhgGDN9AogAJPmBbxMesy2IRcUpwXgHcAjzs7zQFDTYM9ZIh7lAyL4K2RCxgF36nH%2Bzz4v%2Fsnq4YKRc8nNbq0JSy5QQXyJ2oC6hWvoL9C9ntFX7fgFBsVTGCPxONtSKSddCS1aeBcgZSz1bWfDV1a%2FIA4qz7B8mGvp9159m8AC3vCET3P%2FTzivRTtmpEQVnKHM5xDTbJ7y74qaEw87&X-Amz-Signature=61bf4af024ff3c0f40e2cd0d8629a62d8db1bf99e1163a40e353a47b6b7d8129&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGPDSPN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATm3oVyLozTYctgSRuRz8rVNZj7oD6254y88R1d8CN6AiEA4y4vlQ6ni%2B%2FlZ1adRKpW%2BFZ%2Fjn%2BR70KI0%2F7ZvHaMkwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDObl57lnVzX9XQXuNCrcAzQQtvZDNljU%2FZi%2B%2BvRZgo1dBMj0WLFiFRV7%2BgqrM%2F7qUu1jEfh%2BfjIg7aB5KNnsy4hEwvg2MfFqVGok7LuX2pJqEIu8%2FlG6UGk0WQyiDDjGNMqocWyZPBNOoCTOcXXstZBLMCT4FbMiQAQ4RGQOp4MrsCYc%2FcahnOfIClCqYkVis%2FsEVhXjDOJJtqJX1FzkPPQtDbbQ6Nd9RnFswkbTpHfazuTyn2YJATaCkCo%2BYyd4hiCyROFYX1AeOr4PVTfGBcSiq54c0tm8Xf5wJnhK1oN1mVeuv5qfT2Q6cg992dDrABumvdj1P9Iga%2FDn5HDYrgiWWm%2B%2FrlpoZjJOcLtYPln3hCRwMzBTmsBi5%2FO%2B0YoUejlR00UGprxTmFyEPBSIAxaZtRW3fM98BRn9xgqg6B2KDklfQeMxy7l2z4YBUr%2F9LqHlSnoXOwXSpxW%2F5ZJIqGlW5HXwgBc7u4b5x8qA3jfNoogmQhZtsb70nv4hEDir4GNg3qaAZbToB0SpO2tdYtjwebKTVaCZh4SpymTU65OJbjzFl8Cr%2FYs29FRNQHPqyMeHyx6BYoTFh%2FpCGBZoTXuPYxhqpK7R6syWi7ApID8IcyxO2E4z9RUXs60NjP%2Fs9AIT%2BmsTFeO%2BSWlxMIbfq74GOqUBsifKVCG%2BJqGhgGDN9AogAJPmBbxMesy2IRcUpwXgHcAjzs7zQFDTYM9ZIh7lAyL4K2RCxgF36nH%2Bzz4v%2Fsnq4YKRc8nNbq0JSy5QQXyJ2oC6hWvoL9C9ntFX7fgFBsVTGCPxONtSKSddCS1aeBcgZSz1bWfDV1a%2FIA4qz7B8mGvp9159m8AC3vCET3P%2FTzivRTtmpEQVnKHM5xDTbJ7y74qaEw87&X-Amz-Signature=d8c3bf19577ccb6d48d56de506a40275e63a4ec5180c09aefea544e3832172d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGPDSPN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATm3oVyLozTYctgSRuRz8rVNZj7oD6254y88R1d8CN6AiEA4y4vlQ6ni%2B%2FlZ1adRKpW%2BFZ%2Fjn%2BR70KI0%2F7ZvHaMkwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDObl57lnVzX9XQXuNCrcAzQQtvZDNljU%2FZi%2B%2BvRZgo1dBMj0WLFiFRV7%2BgqrM%2F7qUu1jEfh%2BfjIg7aB5KNnsy4hEwvg2MfFqVGok7LuX2pJqEIu8%2FlG6UGk0WQyiDDjGNMqocWyZPBNOoCTOcXXstZBLMCT4FbMiQAQ4RGQOp4MrsCYc%2FcahnOfIClCqYkVis%2FsEVhXjDOJJtqJX1FzkPPQtDbbQ6Nd9RnFswkbTpHfazuTyn2YJATaCkCo%2BYyd4hiCyROFYX1AeOr4PVTfGBcSiq54c0tm8Xf5wJnhK1oN1mVeuv5qfT2Q6cg992dDrABumvdj1P9Iga%2FDn5HDYrgiWWm%2B%2FrlpoZjJOcLtYPln3hCRwMzBTmsBi5%2FO%2B0YoUejlR00UGprxTmFyEPBSIAxaZtRW3fM98BRn9xgqg6B2KDklfQeMxy7l2z4YBUr%2F9LqHlSnoXOwXSpxW%2F5ZJIqGlW5HXwgBc7u4b5x8qA3jfNoogmQhZtsb70nv4hEDir4GNg3qaAZbToB0SpO2tdYtjwebKTVaCZh4SpymTU65OJbjzFl8Cr%2FYs29FRNQHPqyMeHyx6BYoTFh%2FpCGBZoTXuPYxhqpK7R6syWi7ApID8IcyxO2E4z9RUXs60NjP%2Fs9AIT%2BmsTFeO%2BSWlxMIbfq74GOqUBsifKVCG%2BJqGhgGDN9AogAJPmBbxMesy2IRcUpwXgHcAjzs7zQFDTYM9ZIh7lAyL4K2RCxgF36nH%2Bzz4v%2Fsnq4YKRc8nNbq0JSy5QQXyJ2oC6hWvoL9C9ntFX7fgFBsVTGCPxONtSKSddCS1aeBcgZSz1bWfDV1a%2FIA4qz7B8mGvp9159m8AC3vCET3P%2FTzivRTtmpEQVnKHM5xDTbJ7y74qaEw87&X-Amz-Signature=80b0610e60059d24b86ac2d0208be1128f4719e72959466ec56eb9262a63a5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGPDSPN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATm3oVyLozTYctgSRuRz8rVNZj7oD6254y88R1d8CN6AiEA4y4vlQ6ni%2B%2FlZ1adRKpW%2BFZ%2Fjn%2BR70KI0%2F7ZvHaMkwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDObl57lnVzX9XQXuNCrcAzQQtvZDNljU%2FZi%2B%2BvRZgo1dBMj0WLFiFRV7%2BgqrM%2F7qUu1jEfh%2BfjIg7aB5KNnsy4hEwvg2MfFqVGok7LuX2pJqEIu8%2FlG6UGk0WQyiDDjGNMqocWyZPBNOoCTOcXXstZBLMCT4FbMiQAQ4RGQOp4MrsCYc%2FcahnOfIClCqYkVis%2FsEVhXjDOJJtqJX1FzkPPQtDbbQ6Nd9RnFswkbTpHfazuTyn2YJATaCkCo%2BYyd4hiCyROFYX1AeOr4PVTfGBcSiq54c0tm8Xf5wJnhK1oN1mVeuv5qfT2Q6cg992dDrABumvdj1P9Iga%2FDn5HDYrgiWWm%2B%2FrlpoZjJOcLtYPln3hCRwMzBTmsBi5%2FO%2B0YoUejlR00UGprxTmFyEPBSIAxaZtRW3fM98BRn9xgqg6B2KDklfQeMxy7l2z4YBUr%2F9LqHlSnoXOwXSpxW%2F5ZJIqGlW5HXwgBc7u4b5x8qA3jfNoogmQhZtsb70nv4hEDir4GNg3qaAZbToB0SpO2tdYtjwebKTVaCZh4SpymTU65OJbjzFl8Cr%2FYs29FRNQHPqyMeHyx6BYoTFh%2FpCGBZoTXuPYxhqpK7R6syWi7ApID8IcyxO2E4z9RUXs60NjP%2Fs9AIT%2BmsTFeO%2BSWlxMIbfq74GOqUBsifKVCG%2BJqGhgGDN9AogAJPmBbxMesy2IRcUpwXgHcAjzs7zQFDTYM9ZIh7lAyL4K2RCxgF36nH%2Bzz4v%2Fsnq4YKRc8nNbq0JSy5QQXyJ2oC6hWvoL9C9ntFX7fgFBsVTGCPxONtSKSddCS1aeBcgZSz1bWfDV1a%2FIA4qz7B8mGvp9159m8AC3vCET3P%2FTzivRTtmpEQVnKHM5xDTbJ7y74qaEw87&X-Amz-Signature=c8940d756d2d191141ddd68dd456c552612feb75fe7cde6224a9fc5cacd546f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGPDSPN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATm3oVyLozTYctgSRuRz8rVNZj7oD6254y88R1d8CN6AiEA4y4vlQ6ni%2B%2FlZ1adRKpW%2BFZ%2Fjn%2BR70KI0%2F7ZvHaMkwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDObl57lnVzX9XQXuNCrcAzQQtvZDNljU%2FZi%2B%2BvRZgo1dBMj0WLFiFRV7%2BgqrM%2F7qUu1jEfh%2BfjIg7aB5KNnsy4hEwvg2MfFqVGok7LuX2pJqEIu8%2FlG6UGk0WQyiDDjGNMqocWyZPBNOoCTOcXXstZBLMCT4FbMiQAQ4RGQOp4MrsCYc%2FcahnOfIClCqYkVis%2FsEVhXjDOJJtqJX1FzkPPQtDbbQ6Nd9RnFswkbTpHfazuTyn2YJATaCkCo%2BYyd4hiCyROFYX1AeOr4PVTfGBcSiq54c0tm8Xf5wJnhK1oN1mVeuv5qfT2Q6cg992dDrABumvdj1P9Iga%2FDn5HDYrgiWWm%2B%2FrlpoZjJOcLtYPln3hCRwMzBTmsBi5%2FO%2B0YoUejlR00UGprxTmFyEPBSIAxaZtRW3fM98BRn9xgqg6B2KDklfQeMxy7l2z4YBUr%2F9LqHlSnoXOwXSpxW%2F5ZJIqGlW5HXwgBc7u4b5x8qA3jfNoogmQhZtsb70nv4hEDir4GNg3qaAZbToB0SpO2tdYtjwebKTVaCZh4SpymTU65OJbjzFl8Cr%2FYs29FRNQHPqyMeHyx6BYoTFh%2FpCGBZoTXuPYxhqpK7R6syWi7ApID8IcyxO2E4z9RUXs60NjP%2Fs9AIT%2BmsTFeO%2BSWlxMIbfq74GOqUBsifKVCG%2BJqGhgGDN9AogAJPmBbxMesy2IRcUpwXgHcAjzs7zQFDTYM9ZIh7lAyL4K2RCxgF36nH%2Bzz4v%2Fsnq4YKRc8nNbq0JSy5QQXyJ2oC6hWvoL9C9ntFX7fgFBsVTGCPxONtSKSddCS1aeBcgZSz1bWfDV1a%2FIA4qz7B8mGvp9159m8AC3vCET3P%2FTzivRTtmpEQVnKHM5xDTbJ7y74qaEw87&X-Amz-Signature=893af65db426084ec9c7909b18d8bf5f7c6dce07c8aea3704c98e626e2bac0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGPDSPN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATm3oVyLozTYctgSRuRz8rVNZj7oD6254y88R1d8CN6AiEA4y4vlQ6ni%2B%2FlZ1adRKpW%2BFZ%2Fjn%2BR70KI0%2F7ZvHaMkwYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDObl57lnVzX9XQXuNCrcAzQQtvZDNljU%2FZi%2B%2BvRZgo1dBMj0WLFiFRV7%2BgqrM%2F7qUu1jEfh%2BfjIg7aB5KNnsy4hEwvg2MfFqVGok7LuX2pJqEIu8%2FlG6UGk0WQyiDDjGNMqocWyZPBNOoCTOcXXstZBLMCT4FbMiQAQ4RGQOp4MrsCYc%2FcahnOfIClCqYkVis%2FsEVhXjDOJJtqJX1FzkPPQtDbbQ6Nd9RnFswkbTpHfazuTyn2YJATaCkCo%2BYyd4hiCyROFYX1AeOr4PVTfGBcSiq54c0tm8Xf5wJnhK1oN1mVeuv5qfT2Q6cg992dDrABumvdj1P9Iga%2FDn5HDYrgiWWm%2B%2FrlpoZjJOcLtYPln3hCRwMzBTmsBi5%2FO%2B0YoUejlR00UGprxTmFyEPBSIAxaZtRW3fM98BRn9xgqg6B2KDklfQeMxy7l2z4YBUr%2F9LqHlSnoXOwXSpxW%2F5ZJIqGlW5HXwgBc7u4b5x8qA3jfNoogmQhZtsb70nv4hEDir4GNg3qaAZbToB0SpO2tdYtjwebKTVaCZh4SpymTU65OJbjzFl8Cr%2FYs29FRNQHPqyMeHyx6BYoTFh%2FpCGBZoTXuPYxhqpK7R6syWi7ApID8IcyxO2E4z9RUXs60NjP%2Fs9AIT%2BmsTFeO%2BSWlxMIbfq74GOqUBsifKVCG%2BJqGhgGDN9AogAJPmBbxMesy2IRcUpwXgHcAjzs7zQFDTYM9ZIh7lAyL4K2RCxgF36nH%2Bzz4v%2Fsnq4YKRc8nNbq0JSy5QQXyJ2oC6hWvoL9C9ntFX7fgFBsVTGCPxONtSKSddCS1aeBcgZSz1bWfDV1a%2FIA4qz7B8mGvp9159m8AC3vCET3P%2FTzivRTtmpEQVnKHM5xDTbJ7y74qaEw87&X-Amz-Signature=8849c753f4d7ef1ead234790fb99bab32e4b645fd275c0ef07298f25030cd0ba&X-Amz-SignedHeaders=host&x-id=GetObject)
