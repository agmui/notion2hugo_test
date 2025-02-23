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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5BEVON%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAQ3MwYUM6VKozrjoyA%2FQGqr5U5MUiHseRVHf11HeQgAiEA%2FC5VCAyM3ZN6pSAV5150pYO0ApYIWWB42XWKEHFdpPYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfAjDDqdKXPbo9bLircA36J8050LMlu1cE091wAdcgtN8nJF070stm325BaTsHjXBifMFKLtG0BDN1cXUmuz3eTXqxWpuwt6FatMhvw1gDIFu7F9ujX0rX%2BK675MF7%2ByET%2FnyFRas1LSq43VHRBZCxBFon%2BB7LCnjgU3w6brMD3oYmjr8usAjOJLjRF0VQ2CjBqdFpYSns7ltWf3nHPp0R0tny8khnL8QveF60JbsDhAeSKP5MMbaS43ZpcmbVSWy46biQdYLeBonbgL6am1jAhOaDxEnAbzYqAfUpT5JNldhBl5ofMIf7xJtZZdV5fDzFd9z1rVjHWA7MXzfq4MI8iomUA6qNVsT9QbNdZhjoXA8DssBVie3MAT02yoQdauAyijmJD0W8z8rWZzfUFy85SMteEer0I4LB3h4HFWaye%2Bw6vYJ%2FH6pRxEpwWMWTM2jR9V1WSTvMpC1iySfW%2BTsuOueGmeNMDsI1fh%2FQVYjyLFqwxdWTVuC2BXJP2%2FW7XYJb52%2FDGDjkM8iVtOoseM95d3LJC1UikuuQOV6GrqjWO%2BWt9jHg9rywEDz%2BVI0b%2FJwltdLPJ58kenbRmFW1kuKQYNRYJC0jHsLviHebE3q%2BUk9MGKPPW6W%2FtZExuwhQlmvfXu40o2V2WGoU%2BMIvT6r0GOqUBFiqaW7%2BarEUM7qAn9JU3htXRcfDFqPT0pqvNPyOaqO7Lvz5YVCet4fq2s7Z6dz1NCXICpjHSS5gDzgUNH2vJgVKRWMHHQk0xJQdaZZu43d8aAaoxZoBqwbp7GLwU6izfpZ8DWjOUJYFiZmcGuyki%2BdR7fU5ZTBKc8Sn0yXP48cRLEucBF7r33WMlOAS%2BsSyzubrv94hNPZ55Dfrfzo%2FL%2B4N859c4&X-Amz-Signature=59ca3d1cb8bfc535fba448fc680cdb952350a039e67755236f193afafc9b0bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5BEVON%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAQ3MwYUM6VKozrjoyA%2FQGqr5U5MUiHseRVHf11HeQgAiEA%2FC5VCAyM3ZN6pSAV5150pYO0ApYIWWB42XWKEHFdpPYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfAjDDqdKXPbo9bLircA36J8050LMlu1cE091wAdcgtN8nJF070stm325BaTsHjXBifMFKLtG0BDN1cXUmuz3eTXqxWpuwt6FatMhvw1gDIFu7F9ujX0rX%2BK675MF7%2ByET%2FnyFRas1LSq43VHRBZCxBFon%2BB7LCnjgU3w6brMD3oYmjr8usAjOJLjRF0VQ2CjBqdFpYSns7ltWf3nHPp0R0tny8khnL8QveF60JbsDhAeSKP5MMbaS43ZpcmbVSWy46biQdYLeBonbgL6am1jAhOaDxEnAbzYqAfUpT5JNldhBl5ofMIf7xJtZZdV5fDzFd9z1rVjHWA7MXzfq4MI8iomUA6qNVsT9QbNdZhjoXA8DssBVie3MAT02yoQdauAyijmJD0W8z8rWZzfUFy85SMteEer0I4LB3h4HFWaye%2Bw6vYJ%2FH6pRxEpwWMWTM2jR9V1WSTvMpC1iySfW%2BTsuOueGmeNMDsI1fh%2FQVYjyLFqwxdWTVuC2BXJP2%2FW7XYJb52%2FDGDjkM8iVtOoseM95d3LJC1UikuuQOV6GrqjWO%2BWt9jHg9rywEDz%2BVI0b%2FJwltdLPJ58kenbRmFW1kuKQYNRYJC0jHsLviHebE3q%2BUk9MGKPPW6W%2FtZExuwhQlmvfXu40o2V2WGoU%2BMIvT6r0GOqUBFiqaW7%2BarEUM7qAn9JU3htXRcfDFqPT0pqvNPyOaqO7Lvz5YVCet4fq2s7Z6dz1NCXICpjHSS5gDzgUNH2vJgVKRWMHHQk0xJQdaZZu43d8aAaoxZoBqwbp7GLwU6izfpZ8DWjOUJYFiZmcGuyki%2BdR7fU5ZTBKc8Sn0yXP48cRLEucBF7r33WMlOAS%2BsSyzubrv94hNPZ55Dfrfzo%2FL%2B4N859c4&X-Amz-Signature=8116215d388299a7f874079b630fae19e79a18a311a312273a65ff52447a27ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5BEVON%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAQ3MwYUM6VKozrjoyA%2FQGqr5U5MUiHseRVHf11HeQgAiEA%2FC5VCAyM3ZN6pSAV5150pYO0ApYIWWB42XWKEHFdpPYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfAjDDqdKXPbo9bLircA36J8050LMlu1cE091wAdcgtN8nJF070stm325BaTsHjXBifMFKLtG0BDN1cXUmuz3eTXqxWpuwt6FatMhvw1gDIFu7F9ujX0rX%2BK675MF7%2ByET%2FnyFRas1LSq43VHRBZCxBFon%2BB7LCnjgU3w6brMD3oYmjr8usAjOJLjRF0VQ2CjBqdFpYSns7ltWf3nHPp0R0tny8khnL8QveF60JbsDhAeSKP5MMbaS43ZpcmbVSWy46biQdYLeBonbgL6am1jAhOaDxEnAbzYqAfUpT5JNldhBl5ofMIf7xJtZZdV5fDzFd9z1rVjHWA7MXzfq4MI8iomUA6qNVsT9QbNdZhjoXA8DssBVie3MAT02yoQdauAyijmJD0W8z8rWZzfUFy85SMteEer0I4LB3h4HFWaye%2Bw6vYJ%2FH6pRxEpwWMWTM2jR9V1WSTvMpC1iySfW%2BTsuOueGmeNMDsI1fh%2FQVYjyLFqwxdWTVuC2BXJP2%2FW7XYJb52%2FDGDjkM8iVtOoseM95d3LJC1UikuuQOV6GrqjWO%2BWt9jHg9rywEDz%2BVI0b%2FJwltdLPJ58kenbRmFW1kuKQYNRYJC0jHsLviHebE3q%2BUk9MGKPPW6W%2FtZExuwhQlmvfXu40o2V2WGoU%2BMIvT6r0GOqUBFiqaW7%2BarEUM7qAn9JU3htXRcfDFqPT0pqvNPyOaqO7Lvz5YVCet4fq2s7Z6dz1NCXICpjHSS5gDzgUNH2vJgVKRWMHHQk0xJQdaZZu43d8aAaoxZoBqwbp7GLwU6izfpZ8DWjOUJYFiZmcGuyki%2BdR7fU5ZTBKc8Sn0yXP48cRLEucBF7r33WMlOAS%2BsSyzubrv94hNPZ55Dfrfzo%2FL%2B4N859c4&X-Amz-Signature=f342633cb79357970aadc90cdcd8eb057b54993fa927d3421d2266a7e716ac24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5BEVON%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAQ3MwYUM6VKozrjoyA%2FQGqr5U5MUiHseRVHf11HeQgAiEA%2FC5VCAyM3ZN6pSAV5150pYO0ApYIWWB42XWKEHFdpPYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfAjDDqdKXPbo9bLircA36J8050LMlu1cE091wAdcgtN8nJF070stm325BaTsHjXBifMFKLtG0BDN1cXUmuz3eTXqxWpuwt6FatMhvw1gDIFu7F9ujX0rX%2BK675MF7%2ByET%2FnyFRas1LSq43VHRBZCxBFon%2BB7LCnjgU3w6brMD3oYmjr8usAjOJLjRF0VQ2CjBqdFpYSns7ltWf3nHPp0R0tny8khnL8QveF60JbsDhAeSKP5MMbaS43ZpcmbVSWy46biQdYLeBonbgL6am1jAhOaDxEnAbzYqAfUpT5JNldhBl5ofMIf7xJtZZdV5fDzFd9z1rVjHWA7MXzfq4MI8iomUA6qNVsT9QbNdZhjoXA8DssBVie3MAT02yoQdauAyijmJD0W8z8rWZzfUFy85SMteEer0I4LB3h4HFWaye%2Bw6vYJ%2FH6pRxEpwWMWTM2jR9V1WSTvMpC1iySfW%2BTsuOueGmeNMDsI1fh%2FQVYjyLFqwxdWTVuC2BXJP2%2FW7XYJb52%2FDGDjkM8iVtOoseM95d3LJC1UikuuQOV6GrqjWO%2BWt9jHg9rywEDz%2BVI0b%2FJwltdLPJ58kenbRmFW1kuKQYNRYJC0jHsLviHebE3q%2BUk9MGKPPW6W%2FtZExuwhQlmvfXu40o2V2WGoU%2BMIvT6r0GOqUBFiqaW7%2BarEUM7qAn9JU3htXRcfDFqPT0pqvNPyOaqO7Lvz5YVCet4fq2s7Z6dz1NCXICpjHSS5gDzgUNH2vJgVKRWMHHQk0xJQdaZZu43d8aAaoxZoBqwbp7GLwU6izfpZ8DWjOUJYFiZmcGuyki%2BdR7fU5ZTBKc8Sn0yXP48cRLEucBF7r33WMlOAS%2BsSyzubrv94hNPZ55Dfrfzo%2FL%2B4N859c4&X-Amz-Signature=19ee28c74b68c71356eb888d882a49fd378e9cf71f462937ad1084e01bcaa17e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5BEVON%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAQ3MwYUM6VKozrjoyA%2FQGqr5U5MUiHseRVHf11HeQgAiEA%2FC5VCAyM3ZN6pSAV5150pYO0ApYIWWB42XWKEHFdpPYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfAjDDqdKXPbo9bLircA36J8050LMlu1cE091wAdcgtN8nJF070stm325BaTsHjXBifMFKLtG0BDN1cXUmuz3eTXqxWpuwt6FatMhvw1gDIFu7F9ujX0rX%2BK675MF7%2ByET%2FnyFRas1LSq43VHRBZCxBFon%2BB7LCnjgU3w6brMD3oYmjr8usAjOJLjRF0VQ2CjBqdFpYSns7ltWf3nHPp0R0tny8khnL8QveF60JbsDhAeSKP5MMbaS43ZpcmbVSWy46biQdYLeBonbgL6am1jAhOaDxEnAbzYqAfUpT5JNldhBl5ofMIf7xJtZZdV5fDzFd9z1rVjHWA7MXzfq4MI8iomUA6qNVsT9QbNdZhjoXA8DssBVie3MAT02yoQdauAyijmJD0W8z8rWZzfUFy85SMteEer0I4LB3h4HFWaye%2Bw6vYJ%2FH6pRxEpwWMWTM2jR9V1WSTvMpC1iySfW%2BTsuOueGmeNMDsI1fh%2FQVYjyLFqwxdWTVuC2BXJP2%2FW7XYJb52%2FDGDjkM8iVtOoseM95d3LJC1UikuuQOV6GrqjWO%2BWt9jHg9rywEDz%2BVI0b%2FJwltdLPJ58kenbRmFW1kuKQYNRYJC0jHsLviHebE3q%2BUk9MGKPPW6W%2FtZExuwhQlmvfXu40o2V2WGoU%2BMIvT6r0GOqUBFiqaW7%2BarEUM7qAn9JU3htXRcfDFqPT0pqvNPyOaqO7Lvz5YVCet4fq2s7Z6dz1NCXICpjHSS5gDzgUNH2vJgVKRWMHHQk0xJQdaZZu43d8aAaoxZoBqwbp7GLwU6izfpZ8DWjOUJYFiZmcGuyki%2BdR7fU5ZTBKc8Sn0yXP48cRLEucBF7r33WMlOAS%2BsSyzubrv94hNPZ55Dfrfzo%2FL%2B4N859c4&X-Amz-Signature=e2812ce9a9774a109374f02df1d75bcb4d9cfd0edd8260b9234ed26e0df7cd03&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5BEVON%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAQ3MwYUM6VKozrjoyA%2FQGqr5U5MUiHseRVHf11HeQgAiEA%2FC5VCAyM3ZN6pSAV5150pYO0ApYIWWB42XWKEHFdpPYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfAjDDqdKXPbo9bLircA36J8050LMlu1cE091wAdcgtN8nJF070stm325BaTsHjXBifMFKLtG0BDN1cXUmuz3eTXqxWpuwt6FatMhvw1gDIFu7F9ujX0rX%2BK675MF7%2ByET%2FnyFRas1LSq43VHRBZCxBFon%2BB7LCnjgU3w6brMD3oYmjr8usAjOJLjRF0VQ2CjBqdFpYSns7ltWf3nHPp0R0tny8khnL8QveF60JbsDhAeSKP5MMbaS43ZpcmbVSWy46biQdYLeBonbgL6am1jAhOaDxEnAbzYqAfUpT5JNldhBl5ofMIf7xJtZZdV5fDzFd9z1rVjHWA7MXzfq4MI8iomUA6qNVsT9QbNdZhjoXA8DssBVie3MAT02yoQdauAyijmJD0W8z8rWZzfUFy85SMteEer0I4LB3h4HFWaye%2Bw6vYJ%2FH6pRxEpwWMWTM2jR9V1WSTvMpC1iySfW%2BTsuOueGmeNMDsI1fh%2FQVYjyLFqwxdWTVuC2BXJP2%2FW7XYJb52%2FDGDjkM8iVtOoseM95d3LJC1UikuuQOV6GrqjWO%2BWt9jHg9rywEDz%2BVI0b%2FJwltdLPJ58kenbRmFW1kuKQYNRYJC0jHsLviHebE3q%2BUk9MGKPPW6W%2FtZExuwhQlmvfXu40o2V2WGoU%2BMIvT6r0GOqUBFiqaW7%2BarEUM7qAn9JU3htXRcfDFqPT0pqvNPyOaqO7Lvz5YVCet4fq2s7Z6dz1NCXICpjHSS5gDzgUNH2vJgVKRWMHHQk0xJQdaZZu43d8aAaoxZoBqwbp7GLwU6izfpZ8DWjOUJYFiZmcGuyki%2BdR7fU5ZTBKc8Sn0yXP48cRLEucBF7r33WMlOAS%2BsSyzubrv94hNPZ55Dfrfzo%2FL%2B4N859c4&X-Amz-Signature=78ab26e0f55831b18dc3782848e4e12a82bcf04e01716a4f4119a61c18b21260&X-Amz-SignedHeaders=host&x-id=GetObject)
