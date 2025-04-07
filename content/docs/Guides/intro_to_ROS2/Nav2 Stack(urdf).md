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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIAD73H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaYTiTnbG4%2FrMRlGdK%2BdHrZtbCphoe03Bi6S9F%2B%2FIxQAiB%2F5P%2BNvlH6BKM5xZGKYXTwyookfAA0TxGgz8K4FTdK8yr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgvW29lPOvQUmBm0GKtwDjIeEUzpJjRC8a8xlUFs3k7t7i7dG0nCvE9s3NbUpZXnrhTdE2xOTs268xqLOjQu4F4EFVlZOWToHexkcRj0c%2FjLXsweII7cvdDdpN1Fy4bE9Wc%2Bj2F%2FrRK8ybPd7aTeQ34vAHxURYH7vFGimnodnUMz5N%2FG8taByCOdTydYlftUOsfa5BnM%2F5gvXYP7HLZda15hNcAapxvxntCydECYWQklYTiS5FIstTcKbezt%2FEOOqQPLkjcmhFCC%2BsoXSg6T1ygUmsN40iVByNG2gDwYgOJAaJHP8mvOeQMmI%2Bq8AzARL0L%2BB%2FXKb%2F9q2TsVdsAgn%2FJZXm%2F8cXCW5M8wd%2FRYbeySh0TT3yPmQJNsYFRSqT%2FxIyx0gHlZSfTPeEArBO2zwX0f2FYVXbWOi1DdxPNY9BnGw6utrbCQBfzi1xWErL0bAGeBbPBsxemYf%2Ba9FLGpk3nvTM2m6b9VsTavegjGLnLWCJQmKTSiP9Oj7rfOY43RwTX%2Bje0y9GZidF96cnEKi%2BlcNYhwkKhgXHZXUqMPOtpVY2s6gmXY6b7hgrFwecu8Xh0IbURMOERM5Hg9LFydmArZ50ClqKcHzdZq6XFlAiKVL3i93lHWZmSXHUOn0Yx1%2BBwSCptwzcG15EBUwp53PvwY6pgGbHBBhqWpl4RZ%2FhIHhAVPGD%2FLzxE9GFuDaIB0GJ3JEiEJuOXpj8cw%2FBXvBFdvDhlLKPHYpoHoBnYOhq5LPlRqz5EtAOKW%2F4fGn9Xzlx2hDifgkIZ7H1eRk7sK5V%2BRwmTZl9pItTbSUfNOUJ4B3gWsd%2Bmq49c3GEuTCvXUkl2LOmTAeyLznplIyoBH2F94QUE9S032CtvLfdcBraP1A%2B%2BGB3A0fUntx&X-Amz-Signature=7c52941bf14587cab369fd179e8361f6a02b76ea0929c6aa47575bd871df4e53&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIAD73H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaYTiTnbG4%2FrMRlGdK%2BdHrZtbCphoe03Bi6S9F%2B%2FIxQAiB%2F5P%2BNvlH6BKM5xZGKYXTwyookfAA0TxGgz8K4FTdK8yr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgvW29lPOvQUmBm0GKtwDjIeEUzpJjRC8a8xlUFs3k7t7i7dG0nCvE9s3NbUpZXnrhTdE2xOTs268xqLOjQu4F4EFVlZOWToHexkcRj0c%2FjLXsweII7cvdDdpN1Fy4bE9Wc%2Bj2F%2FrRK8ybPd7aTeQ34vAHxURYH7vFGimnodnUMz5N%2FG8taByCOdTydYlftUOsfa5BnM%2F5gvXYP7HLZda15hNcAapxvxntCydECYWQklYTiS5FIstTcKbezt%2FEOOqQPLkjcmhFCC%2BsoXSg6T1ygUmsN40iVByNG2gDwYgOJAaJHP8mvOeQMmI%2Bq8AzARL0L%2BB%2FXKb%2F9q2TsVdsAgn%2FJZXm%2F8cXCW5M8wd%2FRYbeySh0TT3yPmQJNsYFRSqT%2FxIyx0gHlZSfTPeEArBO2zwX0f2FYVXbWOi1DdxPNY9BnGw6utrbCQBfzi1xWErL0bAGeBbPBsxemYf%2Ba9FLGpk3nvTM2m6b9VsTavegjGLnLWCJQmKTSiP9Oj7rfOY43RwTX%2Bje0y9GZidF96cnEKi%2BlcNYhwkKhgXHZXUqMPOtpVY2s6gmXY6b7hgrFwecu8Xh0IbURMOERM5Hg9LFydmArZ50ClqKcHzdZq6XFlAiKVL3i93lHWZmSXHUOn0Yx1%2BBwSCptwzcG15EBUwp53PvwY6pgGbHBBhqWpl4RZ%2FhIHhAVPGD%2FLzxE9GFuDaIB0GJ3JEiEJuOXpj8cw%2FBXvBFdvDhlLKPHYpoHoBnYOhq5LPlRqz5EtAOKW%2F4fGn9Xzlx2hDifgkIZ7H1eRk7sK5V%2BRwmTZl9pItTbSUfNOUJ4B3gWsd%2Bmq49c3GEuTCvXUkl2LOmTAeyLznplIyoBH2F94QUE9S032CtvLfdcBraP1A%2B%2BGB3A0fUntx&X-Amz-Signature=a27a77a979c90159198e16ce25d285b34e1246c74a012785da27518ccaf25eca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIAD73H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaYTiTnbG4%2FrMRlGdK%2BdHrZtbCphoe03Bi6S9F%2B%2FIxQAiB%2F5P%2BNvlH6BKM5xZGKYXTwyookfAA0TxGgz8K4FTdK8yr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgvW29lPOvQUmBm0GKtwDjIeEUzpJjRC8a8xlUFs3k7t7i7dG0nCvE9s3NbUpZXnrhTdE2xOTs268xqLOjQu4F4EFVlZOWToHexkcRj0c%2FjLXsweII7cvdDdpN1Fy4bE9Wc%2Bj2F%2FrRK8ybPd7aTeQ34vAHxURYH7vFGimnodnUMz5N%2FG8taByCOdTydYlftUOsfa5BnM%2F5gvXYP7HLZda15hNcAapxvxntCydECYWQklYTiS5FIstTcKbezt%2FEOOqQPLkjcmhFCC%2BsoXSg6T1ygUmsN40iVByNG2gDwYgOJAaJHP8mvOeQMmI%2Bq8AzARL0L%2BB%2FXKb%2F9q2TsVdsAgn%2FJZXm%2F8cXCW5M8wd%2FRYbeySh0TT3yPmQJNsYFRSqT%2FxIyx0gHlZSfTPeEArBO2zwX0f2FYVXbWOi1DdxPNY9BnGw6utrbCQBfzi1xWErL0bAGeBbPBsxemYf%2Ba9FLGpk3nvTM2m6b9VsTavegjGLnLWCJQmKTSiP9Oj7rfOY43RwTX%2Bje0y9GZidF96cnEKi%2BlcNYhwkKhgXHZXUqMPOtpVY2s6gmXY6b7hgrFwecu8Xh0IbURMOERM5Hg9LFydmArZ50ClqKcHzdZq6XFlAiKVL3i93lHWZmSXHUOn0Yx1%2BBwSCptwzcG15EBUwp53PvwY6pgGbHBBhqWpl4RZ%2FhIHhAVPGD%2FLzxE9GFuDaIB0GJ3JEiEJuOXpj8cw%2FBXvBFdvDhlLKPHYpoHoBnYOhq5LPlRqz5EtAOKW%2F4fGn9Xzlx2hDifgkIZ7H1eRk7sK5V%2BRwmTZl9pItTbSUfNOUJ4B3gWsd%2Bmq49c3GEuTCvXUkl2LOmTAeyLznplIyoBH2F94QUE9S032CtvLfdcBraP1A%2B%2BGB3A0fUntx&X-Amz-Signature=111c251c570f57d6c99fc50786780b3a83c8f3d7be601706dc924de26ed43dad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIAD73H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaYTiTnbG4%2FrMRlGdK%2BdHrZtbCphoe03Bi6S9F%2B%2FIxQAiB%2F5P%2BNvlH6BKM5xZGKYXTwyookfAA0TxGgz8K4FTdK8yr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgvW29lPOvQUmBm0GKtwDjIeEUzpJjRC8a8xlUFs3k7t7i7dG0nCvE9s3NbUpZXnrhTdE2xOTs268xqLOjQu4F4EFVlZOWToHexkcRj0c%2FjLXsweII7cvdDdpN1Fy4bE9Wc%2Bj2F%2FrRK8ybPd7aTeQ34vAHxURYH7vFGimnodnUMz5N%2FG8taByCOdTydYlftUOsfa5BnM%2F5gvXYP7HLZda15hNcAapxvxntCydECYWQklYTiS5FIstTcKbezt%2FEOOqQPLkjcmhFCC%2BsoXSg6T1ygUmsN40iVByNG2gDwYgOJAaJHP8mvOeQMmI%2Bq8AzARL0L%2BB%2FXKb%2F9q2TsVdsAgn%2FJZXm%2F8cXCW5M8wd%2FRYbeySh0TT3yPmQJNsYFRSqT%2FxIyx0gHlZSfTPeEArBO2zwX0f2FYVXbWOi1DdxPNY9BnGw6utrbCQBfzi1xWErL0bAGeBbPBsxemYf%2Ba9FLGpk3nvTM2m6b9VsTavegjGLnLWCJQmKTSiP9Oj7rfOY43RwTX%2Bje0y9GZidF96cnEKi%2BlcNYhwkKhgXHZXUqMPOtpVY2s6gmXY6b7hgrFwecu8Xh0IbURMOERM5Hg9LFydmArZ50ClqKcHzdZq6XFlAiKVL3i93lHWZmSXHUOn0Yx1%2BBwSCptwzcG15EBUwp53PvwY6pgGbHBBhqWpl4RZ%2FhIHhAVPGD%2FLzxE9GFuDaIB0GJ3JEiEJuOXpj8cw%2FBXvBFdvDhlLKPHYpoHoBnYOhq5LPlRqz5EtAOKW%2F4fGn9Xzlx2hDifgkIZ7H1eRk7sK5V%2BRwmTZl9pItTbSUfNOUJ4B3gWsd%2Bmq49c3GEuTCvXUkl2LOmTAeyLznplIyoBH2F94QUE9S032CtvLfdcBraP1A%2B%2BGB3A0fUntx&X-Amz-Signature=8faf37e0a7c75c962de1a740bafaf4ffcce86082cc5885762128836d18a4b2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIAD73H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaYTiTnbG4%2FrMRlGdK%2BdHrZtbCphoe03Bi6S9F%2B%2FIxQAiB%2F5P%2BNvlH6BKM5xZGKYXTwyookfAA0TxGgz8K4FTdK8yr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgvW29lPOvQUmBm0GKtwDjIeEUzpJjRC8a8xlUFs3k7t7i7dG0nCvE9s3NbUpZXnrhTdE2xOTs268xqLOjQu4F4EFVlZOWToHexkcRj0c%2FjLXsweII7cvdDdpN1Fy4bE9Wc%2Bj2F%2FrRK8ybPd7aTeQ34vAHxURYH7vFGimnodnUMz5N%2FG8taByCOdTydYlftUOsfa5BnM%2F5gvXYP7HLZda15hNcAapxvxntCydECYWQklYTiS5FIstTcKbezt%2FEOOqQPLkjcmhFCC%2BsoXSg6T1ygUmsN40iVByNG2gDwYgOJAaJHP8mvOeQMmI%2Bq8AzARL0L%2BB%2FXKb%2F9q2TsVdsAgn%2FJZXm%2F8cXCW5M8wd%2FRYbeySh0TT3yPmQJNsYFRSqT%2FxIyx0gHlZSfTPeEArBO2zwX0f2FYVXbWOi1DdxPNY9BnGw6utrbCQBfzi1xWErL0bAGeBbPBsxemYf%2Ba9FLGpk3nvTM2m6b9VsTavegjGLnLWCJQmKTSiP9Oj7rfOY43RwTX%2Bje0y9GZidF96cnEKi%2BlcNYhwkKhgXHZXUqMPOtpVY2s6gmXY6b7hgrFwecu8Xh0IbURMOERM5Hg9LFydmArZ50ClqKcHzdZq6XFlAiKVL3i93lHWZmSXHUOn0Yx1%2BBwSCptwzcG15EBUwp53PvwY6pgGbHBBhqWpl4RZ%2FhIHhAVPGD%2FLzxE9GFuDaIB0GJ3JEiEJuOXpj8cw%2FBXvBFdvDhlLKPHYpoHoBnYOhq5LPlRqz5EtAOKW%2F4fGn9Xzlx2hDifgkIZ7H1eRk7sK5V%2BRwmTZl9pItTbSUfNOUJ4B3gWsd%2Bmq49c3GEuTCvXUkl2LOmTAeyLznplIyoBH2F94QUE9S032CtvLfdcBraP1A%2B%2BGB3A0fUntx&X-Amz-Signature=ad7ef75187dc8a6f1456b62316149e94a39a7fd6756801245d1a4b856d373449&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIAD73H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaYTiTnbG4%2FrMRlGdK%2BdHrZtbCphoe03Bi6S9F%2B%2FIxQAiB%2F5P%2BNvlH6BKM5xZGKYXTwyookfAA0TxGgz8K4FTdK8yr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMgvW29lPOvQUmBm0GKtwDjIeEUzpJjRC8a8xlUFs3k7t7i7dG0nCvE9s3NbUpZXnrhTdE2xOTs268xqLOjQu4F4EFVlZOWToHexkcRj0c%2FjLXsweII7cvdDdpN1Fy4bE9Wc%2Bj2F%2FrRK8ybPd7aTeQ34vAHxURYH7vFGimnodnUMz5N%2FG8taByCOdTydYlftUOsfa5BnM%2F5gvXYP7HLZda15hNcAapxvxntCydECYWQklYTiS5FIstTcKbezt%2FEOOqQPLkjcmhFCC%2BsoXSg6T1ygUmsN40iVByNG2gDwYgOJAaJHP8mvOeQMmI%2Bq8AzARL0L%2BB%2FXKb%2F9q2TsVdsAgn%2FJZXm%2F8cXCW5M8wd%2FRYbeySh0TT3yPmQJNsYFRSqT%2FxIyx0gHlZSfTPeEArBO2zwX0f2FYVXbWOi1DdxPNY9BnGw6utrbCQBfzi1xWErL0bAGeBbPBsxemYf%2Ba9FLGpk3nvTM2m6b9VsTavegjGLnLWCJQmKTSiP9Oj7rfOY43RwTX%2Bje0y9GZidF96cnEKi%2BlcNYhwkKhgXHZXUqMPOtpVY2s6gmXY6b7hgrFwecu8Xh0IbURMOERM5Hg9LFydmArZ50ClqKcHzdZq6XFlAiKVL3i93lHWZmSXHUOn0Yx1%2BBwSCptwzcG15EBUwp53PvwY6pgGbHBBhqWpl4RZ%2FhIHhAVPGD%2FLzxE9GFuDaIB0GJ3JEiEJuOXpj8cw%2FBXvBFdvDhlLKPHYpoHoBnYOhq5LPlRqz5EtAOKW%2F4fGn9Xzlx2hDifgkIZ7H1eRk7sK5V%2BRwmTZl9pItTbSUfNOUJ4B3gWsd%2Bmq49c3GEuTCvXUkl2LOmTAeyLznplIyoBH2F94QUE9S032CtvLfdcBraP1A%2B%2BGB3A0fUntx&X-Amz-Signature=7ae570dbcbbf785865ff19b58966e73f9085931a11edda9a19bc6a2faed8adf6&X-Amz-SignedHeaders=host&x-id=GetObject)
