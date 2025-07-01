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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BQYBYU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3mg0sKMbvOwiJNaZ8v5iChjXz%2FIGMwz7PfrNJ6icSgAiBiluz15B38Yb3OjXjfxmw3e3w0RAF1I5xk2QfBLpknRCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BOZ5vXiOWxkDg5UKtwDHMds%2Fyq34iYRQR0K1iYlxYgvKnq6wzOoJtYEjPCG7NcCB65AQI1QzgewKAETUo%2FYZ6vyggutlyU5kS2xtaZ6xon7MyOSvd8ws59mt3hPxfn2m%2BoqBp5dmC2Bza9ei6ETQuec85E6dEozYsp%2Bq13lyZ%2BI4tL9S4DyK%2FKjY%2B8slXAflTUUSj6Ec%2FLHlpfLMCdHI%2ByUtOTZ7e10N8GINY5zyzOQL5Uiek9jglyF9%2F%2BzCCXdeVcOUKi9KD6YB2C8OhCci15iJtlxrMG%2F%2BWhIggOnDDvW9rPdN9AfVC2baY0n2TCE5icKTf93lkF0vjwznVBERnTEYmXO%2F00qy24N8nmm8JiQmHAS%2FgYeIwCL5r6JQRxhCZ%2BAqHYCLQ6XEUCP8ZnzHDofS4%2Ftk%2FYGri%2F86fOgOO5whmOSm8RsKXfmvloJ1vNcGI2BkOlb9QXcZu92sEfpPewcDq3xnG%2FWtl0jNDHYbTl2d91nFBjURZ2fZHPYnIxnV%2F8NT37OwW1pqhY3ljIHgy7dkShVljAmeiNCDYNmj5cTBZCkR%2FkifZyy5YVai0KiZnO8G4g%2B7C7E7EIGhT9bJH%2F%2FWyfFQdvak5%2BjrrN1qqt5MzMHSAjhAA7WoHr9WFwmff%2FKnljFLn1iRKgwiqeOwwY6pgHhADXqIE2QOZUsEMGis36KlDvFG3CTErgibCru%2BonyrBleE7QYzoI9TX%2BmU4nlRt6UZpgutUSvZEMs4bhOg%2F0P%2B9SFdiIf%2Bgt18nIzELp%2FWmnyqc0rlpVLNjpawdJ0zPPkCKoCVnqaeghHzghWGLlZy2MtGwUQEVjKgtet3iPHaY2I1Qb8krEJkdiRoKQotdk9JzMDN4lrooC4xoo53ruU4Oma9hlZ&X-Amz-Signature=797d2a48b990dbe7f912776ef3c083616e5ca549118f08a78da2997f430dcbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BQYBYU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3mg0sKMbvOwiJNaZ8v5iChjXz%2FIGMwz7PfrNJ6icSgAiBiluz15B38Yb3OjXjfxmw3e3w0RAF1I5xk2QfBLpknRCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BOZ5vXiOWxkDg5UKtwDHMds%2Fyq34iYRQR0K1iYlxYgvKnq6wzOoJtYEjPCG7NcCB65AQI1QzgewKAETUo%2FYZ6vyggutlyU5kS2xtaZ6xon7MyOSvd8ws59mt3hPxfn2m%2BoqBp5dmC2Bza9ei6ETQuec85E6dEozYsp%2Bq13lyZ%2BI4tL9S4DyK%2FKjY%2B8slXAflTUUSj6Ec%2FLHlpfLMCdHI%2ByUtOTZ7e10N8GINY5zyzOQL5Uiek9jglyF9%2F%2BzCCXdeVcOUKi9KD6YB2C8OhCci15iJtlxrMG%2F%2BWhIggOnDDvW9rPdN9AfVC2baY0n2TCE5icKTf93lkF0vjwznVBERnTEYmXO%2F00qy24N8nmm8JiQmHAS%2FgYeIwCL5r6JQRxhCZ%2BAqHYCLQ6XEUCP8ZnzHDofS4%2Ftk%2FYGri%2F86fOgOO5whmOSm8RsKXfmvloJ1vNcGI2BkOlb9QXcZu92sEfpPewcDq3xnG%2FWtl0jNDHYbTl2d91nFBjURZ2fZHPYnIxnV%2F8NT37OwW1pqhY3ljIHgy7dkShVljAmeiNCDYNmj5cTBZCkR%2FkifZyy5YVai0KiZnO8G4g%2B7C7E7EIGhT9bJH%2F%2FWyfFQdvak5%2BjrrN1qqt5MzMHSAjhAA7WoHr9WFwmff%2FKnljFLn1iRKgwiqeOwwY6pgHhADXqIE2QOZUsEMGis36KlDvFG3CTErgibCru%2BonyrBleE7QYzoI9TX%2BmU4nlRt6UZpgutUSvZEMs4bhOg%2F0P%2B9SFdiIf%2Bgt18nIzELp%2FWmnyqc0rlpVLNjpawdJ0zPPkCKoCVnqaeghHzghWGLlZy2MtGwUQEVjKgtet3iPHaY2I1Qb8krEJkdiRoKQotdk9JzMDN4lrooC4xoo53ruU4Oma9hlZ&X-Amz-Signature=d79ca9d91413de5e71db0fb0791acf27bfe316b0242faa851d14bd8444a8e2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BQYBYU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3mg0sKMbvOwiJNaZ8v5iChjXz%2FIGMwz7PfrNJ6icSgAiBiluz15B38Yb3OjXjfxmw3e3w0RAF1I5xk2QfBLpknRCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BOZ5vXiOWxkDg5UKtwDHMds%2Fyq34iYRQR0K1iYlxYgvKnq6wzOoJtYEjPCG7NcCB65AQI1QzgewKAETUo%2FYZ6vyggutlyU5kS2xtaZ6xon7MyOSvd8ws59mt3hPxfn2m%2BoqBp5dmC2Bza9ei6ETQuec85E6dEozYsp%2Bq13lyZ%2BI4tL9S4DyK%2FKjY%2B8slXAflTUUSj6Ec%2FLHlpfLMCdHI%2ByUtOTZ7e10N8GINY5zyzOQL5Uiek9jglyF9%2F%2BzCCXdeVcOUKi9KD6YB2C8OhCci15iJtlxrMG%2F%2BWhIggOnDDvW9rPdN9AfVC2baY0n2TCE5icKTf93lkF0vjwznVBERnTEYmXO%2F00qy24N8nmm8JiQmHAS%2FgYeIwCL5r6JQRxhCZ%2BAqHYCLQ6XEUCP8ZnzHDofS4%2Ftk%2FYGri%2F86fOgOO5whmOSm8RsKXfmvloJ1vNcGI2BkOlb9QXcZu92sEfpPewcDq3xnG%2FWtl0jNDHYbTl2d91nFBjURZ2fZHPYnIxnV%2F8NT37OwW1pqhY3ljIHgy7dkShVljAmeiNCDYNmj5cTBZCkR%2FkifZyy5YVai0KiZnO8G4g%2B7C7E7EIGhT9bJH%2F%2FWyfFQdvak5%2BjrrN1qqt5MzMHSAjhAA7WoHr9WFwmff%2FKnljFLn1iRKgwiqeOwwY6pgHhADXqIE2QOZUsEMGis36KlDvFG3CTErgibCru%2BonyrBleE7QYzoI9TX%2BmU4nlRt6UZpgutUSvZEMs4bhOg%2F0P%2B9SFdiIf%2Bgt18nIzELp%2FWmnyqc0rlpVLNjpawdJ0zPPkCKoCVnqaeghHzghWGLlZy2MtGwUQEVjKgtet3iPHaY2I1Qb8krEJkdiRoKQotdk9JzMDN4lrooC4xoo53ruU4Oma9hlZ&X-Amz-Signature=7e04e69412d8978280f0b40df1f3bcfbdbf51aad53d786ecbccb8c08d9c03e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BQYBYU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3mg0sKMbvOwiJNaZ8v5iChjXz%2FIGMwz7PfrNJ6icSgAiBiluz15B38Yb3OjXjfxmw3e3w0RAF1I5xk2QfBLpknRCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BOZ5vXiOWxkDg5UKtwDHMds%2Fyq34iYRQR0K1iYlxYgvKnq6wzOoJtYEjPCG7NcCB65AQI1QzgewKAETUo%2FYZ6vyggutlyU5kS2xtaZ6xon7MyOSvd8ws59mt3hPxfn2m%2BoqBp5dmC2Bza9ei6ETQuec85E6dEozYsp%2Bq13lyZ%2BI4tL9S4DyK%2FKjY%2B8slXAflTUUSj6Ec%2FLHlpfLMCdHI%2ByUtOTZ7e10N8GINY5zyzOQL5Uiek9jglyF9%2F%2BzCCXdeVcOUKi9KD6YB2C8OhCci15iJtlxrMG%2F%2BWhIggOnDDvW9rPdN9AfVC2baY0n2TCE5icKTf93lkF0vjwznVBERnTEYmXO%2F00qy24N8nmm8JiQmHAS%2FgYeIwCL5r6JQRxhCZ%2BAqHYCLQ6XEUCP8ZnzHDofS4%2Ftk%2FYGri%2F86fOgOO5whmOSm8RsKXfmvloJ1vNcGI2BkOlb9QXcZu92sEfpPewcDq3xnG%2FWtl0jNDHYbTl2d91nFBjURZ2fZHPYnIxnV%2F8NT37OwW1pqhY3ljIHgy7dkShVljAmeiNCDYNmj5cTBZCkR%2FkifZyy5YVai0KiZnO8G4g%2B7C7E7EIGhT9bJH%2F%2FWyfFQdvak5%2BjrrN1qqt5MzMHSAjhAA7WoHr9WFwmff%2FKnljFLn1iRKgwiqeOwwY6pgHhADXqIE2QOZUsEMGis36KlDvFG3CTErgibCru%2BonyrBleE7QYzoI9TX%2BmU4nlRt6UZpgutUSvZEMs4bhOg%2F0P%2B9SFdiIf%2Bgt18nIzELp%2FWmnyqc0rlpVLNjpawdJ0zPPkCKoCVnqaeghHzghWGLlZy2MtGwUQEVjKgtet3iPHaY2I1Qb8krEJkdiRoKQotdk9JzMDN4lrooC4xoo53ruU4Oma9hlZ&X-Amz-Signature=c9b56a07c9d32dfca34cdfd74b28f882aaa2caaf3048cd3285171d5ea862ce53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BQYBYU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3mg0sKMbvOwiJNaZ8v5iChjXz%2FIGMwz7PfrNJ6icSgAiBiluz15B38Yb3OjXjfxmw3e3w0RAF1I5xk2QfBLpknRCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BOZ5vXiOWxkDg5UKtwDHMds%2Fyq34iYRQR0K1iYlxYgvKnq6wzOoJtYEjPCG7NcCB65AQI1QzgewKAETUo%2FYZ6vyggutlyU5kS2xtaZ6xon7MyOSvd8ws59mt3hPxfn2m%2BoqBp5dmC2Bza9ei6ETQuec85E6dEozYsp%2Bq13lyZ%2BI4tL9S4DyK%2FKjY%2B8slXAflTUUSj6Ec%2FLHlpfLMCdHI%2ByUtOTZ7e10N8GINY5zyzOQL5Uiek9jglyF9%2F%2BzCCXdeVcOUKi9KD6YB2C8OhCci15iJtlxrMG%2F%2BWhIggOnDDvW9rPdN9AfVC2baY0n2TCE5icKTf93lkF0vjwznVBERnTEYmXO%2F00qy24N8nmm8JiQmHAS%2FgYeIwCL5r6JQRxhCZ%2BAqHYCLQ6XEUCP8ZnzHDofS4%2Ftk%2FYGri%2F86fOgOO5whmOSm8RsKXfmvloJ1vNcGI2BkOlb9QXcZu92sEfpPewcDq3xnG%2FWtl0jNDHYbTl2d91nFBjURZ2fZHPYnIxnV%2F8NT37OwW1pqhY3ljIHgy7dkShVljAmeiNCDYNmj5cTBZCkR%2FkifZyy5YVai0KiZnO8G4g%2B7C7E7EIGhT9bJH%2F%2FWyfFQdvak5%2BjrrN1qqt5MzMHSAjhAA7WoHr9WFwmff%2FKnljFLn1iRKgwiqeOwwY6pgHhADXqIE2QOZUsEMGis36KlDvFG3CTErgibCru%2BonyrBleE7QYzoI9TX%2BmU4nlRt6UZpgutUSvZEMs4bhOg%2F0P%2B9SFdiIf%2Bgt18nIzELp%2FWmnyqc0rlpVLNjpawdJ0zPPkCKoCVnqaeghHzghWGLlZy2MtGwUQEVjKgtet3iPHaY2I1Qb8krEJkdiRoKQotdk9JzMDN4lrooC4xoo53ruU4Oma9hlZ&X-Amz-Signature=fe0f51f2ed5f514c170a35f155ba9a7c7e007a3879d3638333bc0c86a6a5969b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BQYBYU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3mg0sKMbvOwiJNaZ8v5iChjXz%2FIGMwz7PfrNJ6icSgAiBiluz15B38Yb3OjXjfxmw3e3w0RAF1I5xk2QfBLpknRCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3BOZ5vXiOWxkDg5UKtwDHMds%2Fyq34iYRQR0K1iYlxYgvKnq6wzOoJtYEjPCG7NcCB65AQI1QzgewKAETUo%2FYZ6vyggutlyU5kS2xtaZ6xon7MyOSvd8ws59mt3hPxfn2m%2BoqBp5dmC2Bza9ei6ETQuec85E6dEozYsp%2Bq13lyZ%2BI4tL9S4DyK%2FKjY%2B8slXAflTUUSj6Ec%2FLHlpfLMCdHI%2ByUtOTZ7e10N8GINY5zyzOQL5Uiek9jglyF9%2F%2BzCCXdeVcOUKi9KD6YB2C8OhCci15iJtlxrMG%2F%2BWhIggOnDDvW9rPdN9AfVC2baY0n2TCE5icKTf93lkF0vjwznVBERnTEYmXO%2F00qy24N8nmm8JiQmHAS%2FgYeIwCL5r6JQRxhCZ%2BAqHYCLQ6XEUCP8ZnzHDofS4%2Ftk%2FYGri%2F86fOgOO5whmOSm8RsKXfmvloJ1vNcGI2BkOlb9QXcZu92sEfpPewcDq3xnG%2FWtl0jNDHYbTl2d91nFBjURZ2fZHPYnIxnV%2F8NT37OwW1pqhY3ljIHgy7dkShVljAmeiNCDYNmj5cTBZCkR%2FkifZyy5YVai0KiZnO8G4g%2B7C7E7EIGhT9bJH%2F%2FWyfFQdvak5%2BjrrN1qqt5MzMHSAjhAA7WoHr9WFwmff%2FKnljFLn1iRKgwiqeOwwY6pgHhADXqIE2QOZUsEMGis36KlDvFG3CTErgibCru%2BonyrBleE7QYzoI9TX%2BmU4nlRt6UZpgutUSvZEMs4bhOg%2F0P%2B9SFdiIf%2Bgt18nIzELp%2FWmnyqc0rlpVLNjpawdJ0zPPkCKoCVnqaeghHzghWGLlZy2MtGwUQEVjKgtet3iPHaY2I1Qb8krEJkdiRoKQotdk9JzMDN4lrooC4xoo53ruU4Oma9hlZ&X-Amz-Signature=01cfee13b88828af1b729fbe63aa8aa69b5d7c6112d5d9897fb3202fc25440a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
