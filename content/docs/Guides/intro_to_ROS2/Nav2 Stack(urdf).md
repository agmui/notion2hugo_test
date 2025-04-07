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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JRC3ZV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERvy1vJagWQOfCwMrlua%2Fg7NnM9S6F%2F%2F8Wb54NSdL61AiAElUULYIjs%2FIuEcdmtI4%2Fga56zXhCRSb3%2B4oICdVjsjSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMdZsJzWyLgQBsY9%2FpKtwDd5cadY1hi9gGB0tzMqtnQjh2w1wHPRr6z3k9xYb3faUPgam4KPBLu3yihsLYk7Eyceq7OqeTyc0UpKFO660lzgcp17a8XsRUMA0YSpGcmMtj2EM2M0zsf9ATHuYk56C6IxfMgbc6YP%2Bu%2F%2B6rGg2XYcG%2B50%2BrI0f6MkqewxcuwqCOxS77WJC0AyeAH2rHwLVzYY2j8h0O4PAOLmhoieHNBD0XQFfJrKJql8iMkRXc6QslGy1cinZI%2BXqPmN0mVp745A8fVchWsMcFrUKpVKW4eMdxp3bmW3PhwvJWwUiDGdZABdayVH%2Bvifzt3pCwduQHklP6%2B7%2FwJGtzV5cadCR9dXzpI8VzgWlnR6Zy9PnqJPTHziMMcDRvK4BF%2B4dZKgxVlIS24mUT1bX16QTZmo%2BADf9WByJApYgXn41D5WGCWYWP1auk1IIUdr33xHCpE6PKvEuFkvqMGuC4FBYiluJVtZ5iF8HjvAWEw3D3MV4dopDoHLGyszpAYNuct2QjtNrNmeMOzlgNrO3yH7rIM7KgWfX3WhgXbtuldzuj%2BsrY5I2jMB07%2FKmt%2FQGw%2Fv50n3DGy6Qjx01xqwmop360O3e%2BDZBesqduUcsAi28QTlKfxeaIBBXgLLLhm%2FsxUHowtJ%2FRvwY6pgH6L%2B966CKsxj9ScOk5N3kHYkjEJJKSxi412GEWWJjnWS4CnLEzExgCZP6dQZCTG8lHAB%2FhSXe9d7nD9J9lqJRdJioDemATS1mr1aV6h%2Fyo%2BeR17hPyzuid7neQ6GaPQWMZZM24L0rwpi0jZxJG1kuUk8ghVslZ2G%2FTWTXou5mCMMvUIdfcqbFobeBjwCoUQrJUG1%2BWY6nJcAKMxnR%2FajHyuF0oT6UJ&X-Amz-Signature=25e134f6d6a6930564a72a7205a50c332514def001032e19111d4b9620245d67&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JRC3ZV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERvy1vJagWQOfCwMrlua%2Fg7NnM9S6F%2F%2F8Wb54NSdL61AiAElUULYIjs%2FIuEcdmtI4%2Fga56zXhCRSb3%2B4oICdVjsjSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMdZsJzWyLgQBsY9%2FpKtwDd5cadY1hi9gGB0tzMqtnQjh2w1wHPRr6z3k9xYb3faUPgam4KPBLu3yihsLYk7Eyceq7OqeTyc0UpKFO660lzgcp17a8XsRUMA0YSpGcmMtj2EM2M0zsf9ATHuYk56C6IxfMgbc6YP%2Bu%2F%2B6rGg2XYcG%2B50%2BrI0f6MkqewxcuwqCOxS77WJC0AyeAH2rHwLVzYY2j8h0O4PAOLmhoieHNBD0XQFfJrKJql8iMkRXc6QslGy1cinZI%2BXqPmN0mVp745A8fVchWsMcFrUKpVKW4eMdxp3bmW3PhwvJWwUiDGdZABdayVH%2Bvifzt3pCwduQHklP6%2B7%2FwJGtzV5cadCR9dXzpI8VzgWlnR6Zy9PnqJPTHziMMcDRvK4BF%2B4dZKgxVlIS24mUT1bX16QTZmo%2BADf9WByJApYgXn41D5WGCWYWP1auk1IIUdr33xHCpE6PKvEuFkvqMGuC4FBYiluJVtZ5iF8HjvAWEw3D3MV4dopDoHLGyszpAYNuct2QjtNrNmeMOzlgNrO3yH7rIM7KgWfX3WhgXbtuldzuj%2BsrY5I2jMB07%2FKmt%2FQGw%2Fv50n3DGy6Qjx01xqwmop360O3e%2BDZBesqduUcsAi28QTlKfxeaIBBXgLLLhm%2FsxUHowtJ%2FRvwY6pgH6L%2B966CKsxj9ScOk5N3kHYkjEJJKSxi412GEWWJjnWS4CnLEzExgCZP6dQZCTG8lHAB%2FhSXe9d7nD9J9lqJRdJioDemATS1mr1aV6h%2Fyo%2BeR17hPyzuid7neQ6GaPQWMZZM24L0rwpi0jZxJG1kuUk8ghVslZ2G%2FTWTXou5mCMMvUIdfcqbFobeBjwCoUQrJUG1%2BWY6nJcAKMxnR%2FajHyuF0oT6UJ&X-Amz-Signature=c732c2f34ec3b4afee9400f197baf968ce5f757c340599fc812ca4f7b719b44e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JRC3ZV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERvy1vJagWQOfCwMrlua%2Fg7NnM9S6F%2F%2F8Wb54NSdL61AiAElUULYIjs%2FIuEcdmtI4%2Fga56zXhCRSb3%2B4oICdVjsjSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMdZsJzWyLgQBsY9%2FpKtwDd5cadY1hi9gGB0tzMqtnQjh2w1wHPRr6z3k9xYb3faUPgam4KPBLu3yihsLYk7Eyceq7OqeTyc0UpKFO660lzgcp17a8XsRUMA0YSpGcmMtj2EM2M0zsf9ATHuYk56C6IxfMgbc6YP%2Bu%2F%2B6rGg2XYcG%2B50%2BrI0f6MkqewxcuwqCOxS77WJC0AyeAH2rHwLVzYY2j8h0O4PAOLmhoieHNBD0XQFfJrKJql8iMkRXc6QslGy1cinZI%2BXqPmN0mVp745A8fVchWsMcFrUKpVKW4eMdxp3bmW3PhwvJWwUiDGdZABdayVH%2Bvifzt3pCwduQHklP6%2B7%2FwJGtzV5cadCR9dXzpI8VzgWlnR6Zy9PnqJPTHziMMcDRvK4BF%2B4dZKgxVlIS24mUT1bX16QTZmo%2BADf9WByJApYgXn41D5WGCWYWP1auk1IIUdr33xHCpE6PKvEuFkvqMGuC4FBYiluJVtZ5iF8HjvAWEw3D3MV4dopDoHLGyszpAYNuct2QjtNrNmeMOzlgNrO3yH7rIM7KgWfX3WhgXbtuldzuj%2BsrY5I2jMB07%2FKmt%2FQGw%2Fv50n3DGy6Qjx01xqwmop360O3e%2BDZBesqduUcsAi28QTlKfxeaIBBXgLLLhm%2FsxUHowtJ%2FRvwY6pgH6L%2B966CKsxj9ScOk5N3kHYkjEJJKSxi412GEWWJjnWS4CnLEzExgCZP6dQZCTG8lHAB%2FhSXe9d7nD9J9lqJRdJioDemATS1mr1aV6h%2Fyo%2BeR17hPyzuid7neQ6GaPQWMZZM24L0rwpi0jZxJG1kuUk8ghVslZ2G%2FTWTXou5mCMMvUIdfcqbFobeBjwCoUQrJUG1%2BWY6nJcAKMxnR%2FajHyuF0oT6UJ&X-Amz-Signature=0b02c9ec5a31a60bd0166cbb7b3da728768976b8e4b8db0186334557349739e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JRC3ZV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERvy1vJagWQOfCwMrlua%2Fg7NnM9S6F%2F%2F8Wb54NSdL61AiAElUULYIjs%2FIuEcdmtI4%2Fga56zXhCRSb3%2B4oICdVjsjSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMdZsJzWyLgQBsY9%2FpKtwDd5cadY1hi9gGB0tzMqtnQjh2w1wHPRr6z3k9xYb3faUPgam4KPBLu3yihsLYk7Eyceq7OqeTyc0UpKFO660lzgcp17a8XsRUMA0YSpGcmMtj2EM2M0zsf9ATHuYk56C6IxfMgbc6YP%2Bu%2F%2B6rGg2XYcG%2B50%2BrI0f6MkqewxcuwqCOxS77WJC0AyeAH2rHwLVzYY2j8h0O4PAOLmhoieHNBD0XQFfJrKJql8iMkRXc6QslGy1cinZI%2BXqPmN0mVp745A8fVchWsMcFrUKpVKW4eMdxp3bmW3PhwvJWwUiDGdZABdayVH%2Bvifzt3pCwduQHklP6%2B7%2FwJGtzV5cadCR9dXzpI8VzgWlnR6Zy9PnqJPTHziMMcDRvK4BF%2B4dZKgxVlIS24mUT1bX16QTZmo%2BADf9WByJApYgXn41D5WGCWYWP1auk1IIUdr33xHCpE6PKvEuFkvqMGuC4FBYiluJVtZ5iF8HjvAWEw3D3MV4dopDoHLGyszpAYNuct2QjtNrNmeMOzlgNrO3yH7rIM7KgWfX3WhgXbtuldzuj%2BsrY5I2jMB07%2FKmt%2FQGw%2Fv50n3DGy6Qjx01xqwmop360O3e%2BDZBesqduUcsAi28QTlKfxeaIBBXgLLLhm%2FsxUHowtJ%2FRvwY6pgH6L%2B966CKsxj9ScOk5N3kHYkjEJJKSxi412GEWWJjnWS4CnLEzExgCZP6dQZCTG8lHAB%2FhSXe9d7nD9J9lqJRdJioDemATS1mr1aV6h%2Fyo%2BeR17hPyzuid7neQ6GaPQWMZZM24L0rwpi0jZxJG1kuUk8ghVslZ2G%2FTWTXou5mCMMvUIdfcqbFobeBjwCoUQrJUG1%2BWY6nJcAKMxnR%2FajHyuF0oT6UJ&X-Amz-Signature=db0635c829504c8738ace8e39fa85793c5e80b5bac41504d630ed4a5ba6aa66c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JRC3ZV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERvy1vJagWQOfCwMrlua%2Fg7NnM9S6F%2F%2F8Wb54NSdL61AiAElUULYIjs%2FIuEcdmtI4%2Fga56zXhCRSb3%2B4oICdVjsjSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMdZsJzWyLgQBsY9%2FpKtwDd5cadY1hi9gGB0tzMqtnQjh2w1wHPRr6z3k9xYb3faUPgam4KPBLu3yihsLYk7Eyceq7OqeTyc0UpKFO660lzgcp17a8XsRUMA0YSpGcmMtj2EM2M0zsf9ATHuYk56C6IxfMgbc6YP%2Bu%2F%2B6rGg2XYcG%2B50%2BrI0f6MkqewxcuwqCOxS77WJC0AyeAH2rHwLVzYY2j8h0O4PAOLmhoieHNBD0XQFfJrKJql8iMkRXc6QslGy1cinZI%2BXqPmN0mVp745A8fVchWsMcFrUKpVKW4eMdxp3bmW3PhwvJWwUiDGdZABdayVH%2Bvifzt3pCwduQHklP6%2B7%2FwJGtzV5cadCR9dXzpI8VzgWlnR6Zy9PnqJPTHziMMcDRvK4BF%2B4dZKgxVlIS24mUT1bX16QTZmo%2BADf9WByJApYgXn41D5WGCWYWP1auk1IIUdr33xHCpE6PKvEuFkvqMGuC4FBYiluJVtZ5iF8HjvAWEw3D3MV4dopDoHLGyszpAYNuct2QjtNrNmeMOzlgNrO3yH7rIM7KgWfX3WhgXbtuldzuj%2BsrY5I2jMB07%2FKmt%2FQGw%2Fv50n3DGy6Qjx01xqwmop360O3e%2BDZBesqduUcsAi28QTlKfxeaIBBXgLLLhm%2FsxUHowtJ%2FRvwY6pgH6L%2B966CKsxj9ScOk5N3kHYkjEJJKSxi412GEWWJjnWS4CnLEzExgCZP6dQZCTG8lHAB%2FhSXe9d7nD9J9lqJRdJioDemATS1mr1aV6h%2Fyo%2BeR17hPyzuid7neQ6GaPQWMZZM24L0rwpi0jZxJG1kuUk8ghVslZ2G%2FTWTXou5mCMMvUIdfcqbFobeBjwCoUQrJUG1%2BWY6nJcAKMxnR%2FajHyuF0oT6UJ&X-Amz-Signature=c08a978d9ab2995bf409777461b22a48958a7a125f106274e5a31228d80536a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JRC3ZV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERvy1vJagWQOfCwMrlua%2Fg7NnM9S6F%2F%2F8Wb54NSdL61AiAElUULYIjs%2FIuEcdmtI4%2Fga56zXhCRSb3%2B4oICdVjsjSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMdZsJzWyLgQBsY9%2FpKtwDd5cadY1hi9gGB0tzMqtnQjh2w1wHPRr6z3k9xYb3faUPgam4KPBLu3yihsLYk7Eyceq7OqeTyc0UpKFO660lzgcp17a8XsRUMA0YSpGcmMtj2EM2M0zsf9ATHuYk56C6IxfMgbc6YP%2Bu%2F%2B6rGg2XYcG%2B50%2BrI0f6MkqewxcuwqCOxS77WJC0AyeAH2rHwLVzYY2j8h0O4PAOLmhoieHNBD0XQFfJrKJql8iMkRXc6QslGy1cinZI%2BXqPmN0mVp745A8fVchWsMcFrUKpVKW4eMdxp3bmW3PhwvJWwUiDGdZABdayVH%2Bvifzt3pCwduQHklP6%2B7%2FwJGtzV5cadCR9dXzpI8VzgWlnR6Zy9PnqJPTHziMMcDRvK4BF%2B4dZKgxVlIS24mUT1bX16QTZmo%2BADf9WByJApYgXn41D5WGCWYWP1auk1IIUdr33xHCpE6PKvEuFkvqMGuC4FBYiluJVtZ5iF8HjvAWEw3D3MV4dopDoHLGyszpAYNuct2QjtNrNmeMOzlgNrO3yH7rIM7KgWfX3WhgXbtuldzuj%2BsrY5I2jMB07%2FKmt%2FQGw%2Fv50n3DGy6Qjx01xqwmop360O3e%2BDZBesqduUcsAi28QTlKfxeaIBBXgLLLhm%2FsxUHowtJ%2FRvwY6pgH6L%2B966CKsxj9ScOk5N3kHYkjEJJKSxi412GEWWJjnWS4CnLEzExgCZP6dQZCTG8lHAB%2FhSXe9d7nD9J9lqJRdJioDemATS1mr1aV6h%2Fyo%2BeR17hPyzuid7neQ6GaPQWMZZM24L0rwpi0jZxJG1kuUk8ghVslZ2G%2FTWTXou5mCMMvUIdfcqbFobeBjwCoUQrJUG1%2BWY6nJcAKMxnR%2FajHyuF0oT6UJ&X-Amz-Signature=7c9eb842a1c0df40fea5797cc4babec92df9d363997ceae553f31fadf898ef14&X-Amz-SignedHeaders=host&x-id=GetObject)
