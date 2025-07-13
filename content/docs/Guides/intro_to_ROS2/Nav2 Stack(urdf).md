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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOKKZX2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbzg0AEKu5zLPa9CcEWyrK2xTiRWIg2f1hdZmu%2Fkt4aAIhAN3YVhpJXN%2B2RahmoqJ%2Fp1FyWpjzwi7j7zA%2FCrX6dUnEKv8DCBAQABoMNjM3NDIzMTgzODA1Igyi06p8GsvvT5KDsw0q3AMx55JcucJJcg4iqpe3BuXkgKZ4A6LpnMDDZ1HIiHiFBpRiR6l3fshu3%2FzCVxWFR7MZRJKmNzj%2BmBU0mo%2FndLFGTGFqlKLxCkSq4pdwe7GzZz8eDtrqtlV%2B6vaBDVQ6VUQq15d%2F9%2BEvaQG5hKrZL84VfFnxh0SmE5XmSV7IAd0cWNb8lyl1wHua%2BP5MN4CXVTQActih9S4zYxdhOp7ZP47IfVFFW6Fz0UHfJgiVyGotZNBAeMp%2FZUrTjS2puFcztPgcS31VZa4hLOAcketQc6zzaxmRnWM4F%2FICkuaYq8UKd5PIuLeiZCgkWuKi%2FIBzyM%2BZzgR4nrloDn%2Bf6hGr%2BYKaEZ2GMGZIFENM1WiM4PrcWfkKc%2B9lk9Ukskn2%2BFL49LnS5rS9u3UF3mcC6Q88XSOn47AskZb3hhxEW%2FAAjAVyA9YUufqvI7CxgNESNErVEfq%2B6HI%2FRFV0QxF5BwMbiVy3A9C4yMc1iwHT2eHy03kGZZHIvz9HW5Goj5Uo3duoIfhihTbpU%2FtjoTuH1K%2B5ZI2hHNpdFuCIUnal1uppOwAkjbBFgBiQofM0G5VzQCHSENRyQPM7hOIoz453%2BRfiaRvxias8Sbfbz%2Fql4cbjbU0tJoCt7y6iRvpeqx68OjDypM3DBjqkAc9utcfWpV6pGC5nGcdyKK8BfpvamybYDkccb129bklii4tWp4LCYq8A0JZXqY3PHCMhXD9cgSQz13hOfL5CtmMrfC3tg%2Fp3sB9FtdithMg%2FSzvTE2SnHv9D8y9d3h%2BSTcW9tzP8H3%2BB9%2B5pnLfAxZaTEZUgtY2%2FTBNzeSP7bJdG4On7SFgLCx5CcCIs2BJBmqoP0yKUuWjoY2ZWX%2BbCSvassBk8&X-Amz-Signature=22fcbb29e22b513e09c19a41fc215c30e7e93a9844d8fe92c9e876e9689c402b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOKKZX2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbzg0AEKu5zLPa9CcEWyrK2xTiRWIg2f1hdZmu%2Fkt4aAIhAN3YVhpJXN%2B2RahmoqJ%2Fp1FyWpjzwi7j7zA%2FCrX6dUnEKv8DCBAQABoMNjM3NDIzMTgzODA1Igyi06p8GsvvT5KDsw0q3AMx55JcucJJcg4iqpe3BuXkgKZ4A6LpnMDDZ1HIiHiFBpRiR6l3fshu3%2FzCVxWFR7MZRJKmNzj%2BmBU0mo%2FndLFGTGFqlKLxCkSq4pdwe7GzZz8eDtrqtlV%2B6vaBDVQ6VUQq15d%2F9%2BEvaQG5hKrZL84VfFnxh0SmE5XmSV7IAd0cWNb8lyl1wHua%2BP5MN4CXVTQActih9S4zYxdhOp7ZP47IfVFFW6Fz0UHfJgiVyGotZNBAeMp%2FZUrTjS2puFcztPgcS31VZa4hLOAcketQc6zzaxmRnWM4F%2FICkuaYq8UKd5PIuLeiZCgkWuKi%2FIBzyM%2BZzgR4nrloDn%2Bf6hGr%2BYKaEZ2GMGZIFENM1WiM4PrcWfkKc%2B9lk9Ukskn2%2BFL49LnS5rS9u3UF3mcC6Q88XSOn47AskZb3hhxEW%2FAAjAVyA9YUufqvI7CxgNESNErVEfq%2B6HI%2FRFV0QxF5BwMbiVy3A9C4yMc1iwHT2eHy03kGZZHIvz9HW5Goj5Uo3duoIfhihTbpU%2FtjoTuH1K%2B5ZI2hHNpdFuCIUnal1uppOwAkjbBFgBiQofM0G5VzQCHSENRyQPM7hOIoz453%2BRfiaRvxias8Sbfbz%2Fql4cbjbU0tJoCt7y6iRvpeqx68OjDypM3DBjqkAc9utcfWpV6pGC5nGcdyKK8BfpvamybYDkccb129bklii4tWp4LCYq8A0JZXqY3PHCMhXD9cgSQz13hOfL5CtmMrfC3tg%2Fp3sB9FtdithMg%2FSzvTE2SnHv9D8y9d3h%2BSTcW9tzP8H3%2BB9%2B5pnLfAxZaTEZUgtY2%2FTBNzeSP7bJdG4On7SFgLCx5CcCIs2BJBmqoP0yKUuWjoY2ZWX%2BbCSvassBk8&X-Amz-Signature=cbe3cc2af7cda2f3b4ac003bf40b0040267f89acc48bafb01d79e7b2aa4797f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOKKZX2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbzg0AEKu5zLPa9CcEWyrK2xTiRWIg2f1hdZmu%2Fkt4aAIhAN3YVhpJXN%2B2RahmoqJ%2Fp1FyWpjzwi7j7zA%2FCrX6dUnEKv8DCBAQABoMNjM3NDIzMTgzODA1Igyi06p8GsvvT5KDsw0q3AMx55JcucJJcg4iqpe3BuXkgKZ4A6LpnMDDZ1HIiHiFBpRiR6l3fshu3%2FzCVxWFR7MZRJKmNzj%2BmBU0mo%2FndLFGTGFqlKLxCkSq4pdwe7GzZz8eDtrqtlV%2B6vaBDVQ6VUQq15d%2F9%2BEvaQG5hKrZL84VfFnxh0SmE5XmSV7IAd0cWNb8lyl1wHua%2BP5MN4CXVTQActih9S4zYxdhOp7ZP47IfVFFW6Fz0UHfJgiVyGotZNBAeMp%2FZUrTjS2puFcztPgcS31VZa4hLOAcketQc6zzaxmRnWM4F%2FICkuaYq8UKd5PIuLeiZCgkWuKi%2FIBzyM%2BZzgR4nrloDn%2Bf6hGr%2BYKaEZ2GMGZIFENM1WiM4PrcWfkKc%2B9lk9Ukskn2%2BFL49LnS5rS9u3UF3mcC6Q88XSOn47AskZb3hhxEW%2FAAjAVyA9YUufqvI7CxgNESNErVEfq%2B6HI%2FRFV0QxF5BwMbiVy3A9C4yMc1iwHT2eHy03kGZZHIvz9HW5Goj5Uo3duoIfhihTbpU%2FtjoTuH1K%2B5ZI2hHNpdFuCIUnal1uppOwAkjbBFgBiQofM0G5VzQCHSENRyQPM7hOIoz453%2BRfiaRvxias8Sbfbz%2Fql4cbjbU0tJoCt7y6iRvpeqx68OjDypM3DBjqkAc9utcfWpV6pGC5nGcdyKK8BfpvamybYDkccb129bklii4tWp4LCYq8A0JZXqY3PHCMhXD9cgSQz13hOfL5CtmMrfC3tg%2Fp3sB9FtdithMg%2FSzvTE2SnHv9D8y9d3h%2BSTcW9tzP8H3%2BB9%2B5pnLfAxZaTEZUgtY2%2FTBNzeSP7bJdG4On7SFgLCx5CcCIs2BJBmqoP0yKUuWjoY2ZWX%2BbCSvassBk8&X-Amz-Signature=3d1018ae942fe099de6ebb1d482aeaa41717041bc21102552fc93af172351f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOKKZX2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbzg0AEKu5zLPa9CcEWyrK2xTiRWIg2f1hdZmu%2Fkt4aAIhAN3YVhpJXN%2B2RahmoqJ%2Fp1FyWpjzwi7j7zA%2FCrX6dUnEKv8DCBAQABoMNjM3NDIzMTgzODA1Igyi06p8GsvvT5KDsw0q3AMx55JcucJJcg4iqpe3BuXkgKZ4A6LpnMDDZ1HIiHiFBpRiR6l3fshu3%2FzCVxWFR7MZRJKmNzj%2BmBU0mo%2FndLFGTGFqlKLxCkSq4pdwe7GzZz8eDtrqtlV%2B6vaBDVQ6VUQq15d%2F9%2BEvaQG5hKrZL84VfFnxh0SmE5XmSV7IAd0cWNb8lyl1wHua%2BP5MN4CXVTQActih9S4zYxdhOp7ZP47IfVFFW6Fz0UHfJgiVyGotZNBAeMp%2FZUrTjS2puFcztPgcS31VZa4hLOAcketQc6zzaxmRnWM4F%2FICkuaYq8UKd5PIuLeiZCgkWuKi%2FIBzyM%2BZzgR4nrloDn%2Bf6hGr%2BYKaEZ2GMGZIFENM1WiM4PrcWfkKc%2B9lk9Ukskn2%2BFL49LnS5rS9u3UF3mcC6Q88XSOn47AskZb3hhxEW%2FAAjAVyA9YUufqvI7CxgNESNErVEfq%2B6HI%2FRFV0QxF5BwMbiVy3A9C4yMc1iwHT2eHy03kGZZHIvz9HW5Goj5Uo3duoIfhihTbpU%2FtjoTuH1K%2B5ZI2hHNpdFuCIUnal1uppOwAkjbBFgBiQofM0G5VzQCHSENRyQPM7hOIoz453%2BRfiaRvxias8Sbfbz%2Fql4cbjbU0tJoCt7y6iRvpeqx68OjDypM3DBjqkAc9utcfWpV6pGC5nGcdyKK8BfpvamybYDkccb129bklii4tWp4LCYq8A0JZXqY3PHCMhXD9cgSQz13hOfL5CtmMrfC3tg%2Fp3sB9FtdithMg%2FSzvTE2SnHv9D8y9d3h%2BSTcW9tzP8H3%2BB9%2B5pnLfAxZaTEZUgtY2%2FTBNzeSP7bJdG4On7SFgLCx5CcCIs2BJBmqoP0yKUuWjoY2ZWX%2BbCSvassBk8&X-Amz-Signature=be3c83ba4a2e31ada2ea8f075f2f772974e0bc228a5ef5e0a02a408adc69df46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOKKZX2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbzg0AEKu5zLPa9CcEWyrK2xTiRWIg2f1hdZmu%2Fkt4aAIhAN3YVhpJXN%2B2RahmoqJ%2Fp1FyWpjzwi7j7zA%2FCrX6dUnEKv8DCBAQABoMNjM3NDIzMTgzODA1Igyi06p8GsvvT5KDsw0q3AMx55JcucJJcg4iqpe3BuXkgKZ4A6LpnMDDZ1HIiHiFBpRiR6l3fshu3%2FzCVxWFR7MZRJKmNzj%2BmBU0mo%2FndLFGTGFqlKLxCkSq4pdwe7GzZz8eDtrqtlV%2B6vaBDVQ6VUQq15d%2F9%2BEvaQG5hKrZL84VfFnxh0SmE5XmSV7IAd0cWNb8lyl1wHua%2BP5MN4CXVTQActih9S4zYxdhOp7ZP47IfVFFW6Fz0UHfJgiVyGotZNBAeMp%2FZUrTjS2puFcztPgcS31VZa4hLOAcketQc6zzaxmRnWM4F%2FICkuaYq8UKd5PIuLeiZCgkWuKi%2FIBzyM%2BZzgR4nrloDn%2Bf6hGr%2BYKaEZ2GMGZIFENM1WiM4PrcWfkKc%2B9lk9Ukskn2%2BFL49LnS5rS9u3UF3mcC6Q88XSOn47AskZb3hhxEW%2FAAjAVyA9YUufqvI7CxgNESNErVEfq%2B6HI%2FRFV0QxF5BwMbiVy3A9C4yMc1iwHT2eHy03kGZZHIvz9HW5Goj5Uo3duoIfhihTbpU%2FtjoTuH1K%2B5ZI2hHNpdFuCIUnal1uppOwAkjbBFgBiQofM0G5VzQCHSENRyQPM7hOIoz453%2BRfiaRvxias8Sbfbz%2Fql4cbjbU0tJoCt7y6iRvpeqx68OjDypM3DBjqkAc9utcfWpV6pGC5nGcdyKK8BfpvamybYDkccb129bklii4tWp4LCYq8A0JZXqY3PHCMhXD9cgSQz13hOfL5CtmMrfC3tg%2Fp3sB9FtdithMg%2FSzvTE2SnHv9D8y9d3h%2BSTcW9tzP8H3%2BB9%2B5pnLfAxZaTEZUgtY2%2FTBNzeSP7bJdG4On7SFgLCx5CcCIs2BJBmqoP0yKUuWjoY2ZWX%2BbCSvassBk8&X-Amz-Signature=cabff20360cc0f3865410ac30790389b62153567093c163d0feef97c0d9ab819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOKKZX2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbzg0AEKu5zLPa9CcEWyrK2xTiRWIg2f1hdZmu%2Fkt4aAIhAN3YVhpJXN%2B2RahmoqJ%2Fp1FyWpjzwi7j7zA%2FCrX6dUnEKv8DCBAQABoMNjM3NDIzMTgzODA1Igyi06p8GsvvT5KDsw0q3AMx55JcucJJcg4iqpe3BuXkgKZ4A6LpnMDDZ1HIiHiFBpRiR6l3fshu3%2FzCVxWFR7MZRJKmNzj%2BmBU0mo%2FndLFGTGFqlKLxCkSq4pdwe7GzZz8eDtrqtlV%2B6vaBDVQ6VUQq15d%2F9%2BEvaQG5hKrZL84VfFnxh0SmE5XmSV7IAd0cWNb8lyl1wHua%2BP5MN4CXVTQActih9S4zYxdhOp7ZP47IfVFFW6Fz0UHfJgiVyGotZNBAeMp%2FZUrTjS2puFcztPgcS31VZa4hLOAcketQc6zzaxmRnWM4F%2FICkuaYq8UKd5PIuLeiZCgkWuKi%2FIBzyM%2BZzgR4nrloDn%2Bf6hGr%2BYKaEZ2GMGZIFENM1WiM4PrcWfkKc%2B9lk9Ukskn2%2BFL49LnS5rS9u3UF3mcC6Q88XSOn47AskZb3hhxEW%2FAAjAVyA9YUufqvI7CxgNESNErVEfq%2B6HI%2FRFV0QxF5BwMbiVy3A9C4yMc1iwHT2eHy03kGZZHIvz9HW5Goj5Uo3duoIfhihTbpU%2FtjoTuH1K%2B5ZI2hHNpdFuCIUnal1uppOwAkjbBFgBiQofM0G5VzQCHSENRyQPM7hOIoz453%2BRfiaRvxias8Sbfbz%2Fql4cbjbU0tJoCt7y6iRvpeqx68OjDypM3DBjqkAc9utcfWpV6pGC5nGcdyKK8BfpvamybYDkccb129bklii4tWp4LCYq8A0JZXqY3PHCMhXD9cgSQz13hOfL5CtmMrfC3tg%2Fp3sB9FtdithMg%2FSzvTE2SnHv9D8y9d3h%2BSTcW9tzP8H3%2BB9%2B5pnLfAxZaTEZUgtY2%2FTBNzeSP7bJdG4On7SFgLCx5CcCIs2BJBmqoP0yKUuWjoY2ZWX%2BbCSvassBk8&X-Amz-Signature=4bfdc3fd183116ab1721fd1861dd56b4b5a636486fa81c02dfec6ff136919ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
