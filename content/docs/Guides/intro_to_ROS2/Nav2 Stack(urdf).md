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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BODESH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQWcPUpg%2F0aML7VXP8%2FLkN7ISXQQhTmB1q3bHJ3WZb8AiAdGLseaJjryJm7CxNB6FJSVylZHIkE%2FHToFBv%2FVW4u4yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2BuohbVqmmxKjfUn5KtwDLoWLQvQPgQ5IaZ6qGO4XXmqlI7XK9WDmgTUMSTOiUMGuwFg6FITB9vepQqxJbVJTxhMmgGrkWdgUZ5IrjsIFm3nbiXQ6xRyD7YMwfK84pO8p%2BEPpRD0PP64t9QBdPpKYUyHZK3%2BtOFCDIHqSLxzO%2FXjRju8OBm8qaVVyKTn5xAbveqccC41oHmwSIPY7oGTBoZgv%2FiKZhLyzJtJ0Ygf6%2FTZdyTvYh0lyYXH%2By2JQQNsDe58zmm0F8lt2jwX%2BZ7ZmhTIXiWBkXQKiiJiMnjXm%2BQeoNRRkGryd2Fh%2BQsa324dfyHzf7pWPTiEu%2Bc5l2%2BpiyUO0urRdh55iFS9sk7zzWV%2BwET6u07i1%2FQ0DPelTPfXqzkr1Ynua1snKCE%2BUMt4MKVFH2LJvcKw40QveIOhzNDP3lHlONaWLaVjSb2YF4cAVtzh5H9GWf8f%2FOptZpPJNnvnUIjJnq%2Bfdm2%2FBdUcIkJMXYnAakeDFj%2FL5S8FZR3r4wPI5oNZOda1LegJxDH9dDKLe94SB71CuAnsQ%2FV%2FX2sV5Bwu%2BgTkxXpDBeY%2BopgKv63ox%2B3zSf%2BbOThCijBAFIHV6HaCGbSmEAi9jIldLJaPZUy%2BqqJzMI1jJaIFTAs03nlaGdo4wlWJVQiUw05X1vwY6pgE6vh6RtMRxdbCxKY22j2j1RTvUI13vpEZ4aOWQEgJY0c%2FMVuiGQuHgXZ%2F5ZyvrfSaa73ve0j62oOeuAqU1GwBzeBL3oODYazGjxD7ocFVoC5TH7mfCGkPysEuTTaG3peWx%2Fc0Guf%2Bzm4ChaxAGHLEKa9QGofQLzb%2FXgPxJ3dsqvrYGnrmqfnIKnAIV4iIhfCLDacuPNymBK%2B5IwWiePx%2FoNg7h6KHb&X-Amz-Signature=a0732292a1152972566fb737c983f979098a69596e978e466cc0d35183999e74&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BODESH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQWcPUpg%2F0aML7VXP8%2FLkN7ISXQQhTmB1q3bHJ3WZb8AiAdGLseaJjryJm7CxNB6FJSVylZHIkE%2FHToFBv%2FVW4u4yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2BuohbVqmmxKjfUn5KtwDLoWLQvQPgQ5IaZ6qGO4XXmqlI7XK9WDmgTUMSTOiUMGuwFg6FITB9vepQqxJbVJTxhMmgGrkWdgUZ5IrjsIFm3nbiXQ6xRyD7YMwfK84pO8p%2BEPpRD0PP64t9QBdPpKYUyHZK3%2BtOFCDIHqSLxzO%2FXjRju8OBm8qaVVyKTn5xAbveqccC41oHmwSIPY7oGTBoZgv%2FiKZhLyzJtJ0Ygf6%2FTZdyTvYh0lyYXH%2By2JQQNsDe58zmm0F8lt2jwX%2BZ7ZmhTIXiWBkXQKiiJiMnjXm%2BQeoNRRkGryd2Fh%2BQsa324dfyHzf7pWPTiEu%2Bc5l2%2BpiyUO0urRdh55iFS9sk7zzWV%2BwET6u07i1%2FQ0DPelTPfXqzkr1Ynua1snKCE%2BUMt4MKVFH2LJvcKw40QveIOhzNDP3lHlONaWLaVjSb2YF4cAVtzh5H9GWf8f%2FOptZpPJNnvnUIjJnq%2Bfdm2%2FBdUcIkJMXYnAakeDFj%2FL5S8FZR3r4wPI5oNZOda1LegJxDH9dDKLe94SB71CuAnsQ%2FV%2FX2sV5Bwu%2BgTkxXpDBeY%2BopgKv63ox%2B3zSf%2BbOThCijBAFIHV6HaCGbSmEAi9jIldLJaPZUy%2BqqJzMI1jJaIFTAs03nlaGdo4wlWJVQiUw05X1vwY6pgE6vh6RtMRxdbCxKY22j2j1RTvUI13vpEZ4aOWQEgJY0c%2FMVuiGQuHgXZ%2F5ZyvrfSaa73ve0j62oOeuAqU1GwBzeBL3oODYazGjxD7ocFVoC5TH7mfCGkPysEuTTaG3peWx%2Fc0Guf%2Bzm4ChaxAGHLEKa9QGofQLzb%2FXgPxJ3dsqvrYGnrmqfnIKnAIV4iIhfCLDacuPNymBK%2B5IwWiePx%2FoNg7h6KHb&X-Amz-Signature=320345d0f516bad4eda244c036c74c704ffd0794c54443d9d8420e5b8158d333&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BODESH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQWcPUpg%2F0aML7VXP8%2FLkN7ISXQQhTmB1q3bHJ3WZb8AiAdGLseaJjryJm7CxNB6FJSVylZHIkE%2FHToFBv%2FVW4u4yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2BuohbVqmmxKjfUn5KtwDLoWLQvQPgQ5IaZ6qGO4XXmqlI7XK9WDmgTUMSTOiUMGuwFg6FITB9vepQqxJbVJTxhMmgGrkWdgUZ5IrjsIFm3nbiXQ6xRyD7YMwfK84pO8p%2BEPpRD0PP64t9QBdPpKYUyHZK3%2BtOFCDIHqSLxzO%2FXjRju8OBm8qaVVyKTn5xAbveqccC41oHmwSIPY7oGTBoZgv%2FiKZhLyzJtJ0Ygf6%2FTZdyTvYh0lyYXH%2By2JQQNsDe58zmm0F8lt2jwX%2BZ7ZmhTIXiWBkXQKiiJiMnjXm%2BQeoNRRkGryd2Fh%2BQsa324dfyHzf7pWPTiEu%2Bc5l2%2BpiyUO0urRdh55iFS9sk7zzWV%2BwET6u07i1%2FQ0DPelTPfXqzkr1Ynua1snKCE%2BUMt4MKVFH2LJvcKw40QveIOhzNDP3lHlONaWLaVjSb2YF4cAVtzh5H9GWf8f%2FOptZpPJNnvnUIjJnq%2Bfdm2%2FBdUcIkJMXYnAakeDFj%2FL5S8FZR3r4wPI5oNZOda1LegJxDH9dDKLe94SB71CuAnsQ%2FV%2FX2sV5Bwu%2BgTkxXpDBeY%2BopgKv63ox%2B3zSf%2BbOThCijBAFIHV6HaCGbSmEAi9jIldLJaPZUy%2BqqJzMI1jJaIFTAs03nlaGdo4wlWJVQiUw05X1vwY6pgE6vh6RtMRxdbCxKY22j2j1RTvUI13vpEZ4aOWQEgJY0c%2FMVuiGQuHgXZ%2F5ZyvrfSaa73ve0j62oOeuAqU1GwBzeBL3oODYazGjxD7ocFVoC5TH7mfCGkPysEuTTaG3peWx%2Fc0Guf%2Bzm4ChaxAGHLEKa9QGofQLzb%2FXgPxJ3dsqvrYGnrmqfnIKnAIV4iIhfCLDacuPNymBK%2B5IwWiePx%2FoNg7h6KHb&X-Amz-Signature=485e96d43b620f87773003233013d9e46fbf2ced109c3b1684f3c506d2889ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BODESH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQWcPUpg%2F0aML7VXP8%2FLkN7ISXQQhTmB1q3bHJ3WZb8AiAdGLseaJjryJm7CxNB6FJSVylZHIkE%2FHToFBv%2FVW4u4yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2BuohbVqmmxKjfUn5KtwDLoWLQvQPgQ5IaZ6qGO4XXmqlI7XK9WDmgTUMSTOiUMGuwFg6FITB9vepQqxJbVJTxhMmgGrkWdgUZ5IrjsIFm3nbiXQ6xRyD7YMwfK84pO8p%2BEPpRD0PP64t9QBdPpKYUyHZK3%2BtOFCDIHqSLxzO%2FXjRju8OBm8qaVVyKTn5xAbveqccC41oHmwSIPY7oGTBoZgv%2FiKZhLyzJtJ0Ygf6%2FTZdyTvYh0lyYXH%2By2JQQNsDe58zmm0F8lt2jwX%2BZ7ZmhTIXiWBkXQKiiJiMnjXm%2BQeoNRRkGryd2Fh%2BQsa324dfyHzf7pWPTiEu%2Bc5l2%2BpiyUO0urRdh55iFS9sk7zzWV%2BwET6u07i1%2FQ0DPelTPfXqzkr1Ynua1snKCE%2BUMt4MKVFH2LJvcKw40QveIOhzNDP3lHlONaWLaVjSb2YF4cAVtzh5H9GWf8f%2FOptZpPJNnvnUIjJnq%2Bfdm2%2FBdUcIkJMXYnAakeDFj%2FL5S8FZR3r4wPI5oNZOda1LegJxDH9dDKLe94SB71CuAnsQ%2FV%2FX2sV5Bwu%2BgTkxXpDBeY%2BopgKv63ox%2B3zSf%2BbOThCijBAFIHV6HaCGbSmEAi9jIldLJaPZUy%2BqqJzMI1jJaIFTAs03nlaGdo4wlWJVQiUw05X1vwY6pgE6vh6RtMRxdbCxKY22j2j1RTvUI13vpEZ4aOWQEgJY0c%2FMVuiGQuHgXZ%2F5ZyvrfSaa73ve0j62oOeuAqU1GwBzeBL3oODYazGjxD7ocFVoC5TH7mfCGkPysEuTTaG3peWx%2Fc0Guf%2Bzm4ChaxAGHLEKa9QGofQLzb%2FXgPxJ3dsqvrYGnrmqfnIKnAIV4iIhfCLDacuPNymBK%2B5IwWiePx%2FoNg7h6KHb&X-Amz-Signature=16b72338324600c7f31f0cd4b628dfe71bb53e8a1dd2dc51c7a00ef245378106&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BODESH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQWcPUpg%2F0aML7VXP8%2FLkN7ISXQQhTmB1q3bHJ3WZb8AiAdGLseaJjryJm7CxNB6FJSVylZHIkE%2FHToFBv%2FVW4u4yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2BuohbVqmmxKjfUn5KtwDLoWLQvQPgQ5IaZ6qGO4XXmqlI7XK9WDmgTUMSTOiUMGuwFg6FITB9vepQqxJbVJTxhMmgGrkWdgUZ5IrjsIFm3nbiXQ6xRyD7YMwfK84pO8p%2BEPpRD0PP64t9QBdPpKYUyHZK3%2BtOFCDIHqSLxzO%2FXjRju8OBm8qaVVyKTn5xAbveqccC41oHmwSIPY7oGTBoZgv%2FiKZhLyzJtJ0Ygf6%2FTZdyTvYh0lyYXH%2By2JQQNsDe58zmm0F8lt2jwX%2BZ7ZmhTIXiWBkXQKiiJiMnjXm%2BQeoNRRkGryd2Fh%2BQsa324dfyHzf7pWPTiEu%2Bc5l2%2BpiyUO0urRdh55iFS9sk7zzWV%2BwET6u07i1%2FQ0DPelTPfXqzkr1Ynua1snKCE%2BUMt4MKVFH2LJvcKw40QveIOhzNDP3lHlONaWLaVjSb2YF4cAVtzh5H9GWf8f%2FOptZpPJNnvnUIjJnq%2Bfdm2%2FBdUcIkJMXYnAakeDFj%2FL5S8FZR3r4wPI5oNZOda1LegJxDH9dDKLe94SB71CuAnsQ%2FV%2FX2sV5Bwu%2BgTkxXpDBeY%2BopgKv63ox%2B3zSf%2BbOThCijBAFIHV6HaCGbSmEAi9jIldLJaPZUy%2BqqJzMI1jJaIFTAs03nlaGdo4wlWJVQiUw05X1vwY6pgE6vh6RtMRxdbCxKY22j2j1RTvUI13vpEZ4aOWQEgJY0c%2FMVuiGQuHgXZ%2F5ZyvrfSaa73ve0j62oOeuAqU1GwBzeBL3oODYazGjxD7ocFVoC5TH7mfCGkPysEuTTaG3peWx%2Fc0Guf%2Bzm4ChaxAGHLEKa9QGofQLzb%2FXgPxJ3dsqvrYGnrmqfnIKnAIV4iIhfCLDacuPNymBK%2B5IwWiePx%2FoNg7h6KHb&X-Amz-Signature=9a635b943cedd272275c04511f76d71fd8b96e92431c9381e52f082746a40c46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BODESH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQWcPUpg%2F0aML7VXP8%2FLkN7ISXQQhTmB1q3bHJ3WZb8AiAdGLseaJjryJm7CxNB6FJSVylZHIkE%2FHToFBv%2FVW4u4yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2BuohbVqmmxKjfUn5KtwDLoWLQvQPgQ5IaZ6qGO4XXmqlI7XK9WDmgTUMSTOiUMGuwFg6FITB9vepQqxJbVJTxhMmgGrkWdgUZ5IrjsIFm3nbiXQ6xRyD7YMwfK84pO8p%2BEPpRD0PP64t9QBdPpKYUyHZK3%2BtOFCDIHqSLxzO%2FXjRju8OBm8qaVVyKTn5xAbveqccC41oHmwSIPY7oGTBoZgv%2FiKZhLyzJtJ0Ygf6%2FTZdyTvYh0lyYXH%2By2JQQNsDe58zmm0F8lt2jwX%2BZ7ZmhTIXiWBkXQKiiJiMnjXm%2BQeoNRRkGryd2Fh%2BQsa324dfyHzf7pWPTiEu%2Bc5l2%2BpiyUO0urRdh55iFS9sk7zzWV%2BwET6u07i1%2FQ0DPelTPfXqzkr1Ynua1snKCE%2BUMt4MKVFH2LJvcKw40QveIOhzNDP3lHlONaWLaVjSb2YF4cAVtzh5H9GWf8f%2FOptZpPJNnvnUIjJnq%2Bfdm2%2FBdUcIkJMXYnAakeDFj%2FL5S8FZR3r4wPI5oNZOda1LegJxDH9dDKLe94SB71CuAnsQ%2FV%2FX2sV5Bwu%2BgTkxXpDBeY%2BopgKv63ox%2B3zSf%2BbOThCijBAFIHV6HaCGbSmEAi9jIldLJaPZUy%2BqqJzMI1jJaIFTAs03nlaGdo4wlWJVQiUw05X1vwY6pgE6vh6RtMRxdbCxKY22j2j1RTvUI13vpEZ4aOWQEgJY0c%2FMVuiGQuHgXZ%2F5ZyvrfSaa73ve0j62oOeuAqU1GwBzeBL3oODYazGjxD7ocFVoC5TH7mfCGkPysEuTTaG3peWx%2Fc0Guf%2Bzm4ChaxAGHLEKa9QGofQLzb%2FXgPxJ3dsqvrYGnrmqfnIKnAIV4iIhfCLDacuPNymBK%2B5IwWiePx%2FoNg7h6KHb&X-Amz-Signature=975319637e3146b4d9bf975c16f140906e4cc999316bceb66001540be07974c9&X-Amz-SignedHeaders=host&x-id=GetObject)
