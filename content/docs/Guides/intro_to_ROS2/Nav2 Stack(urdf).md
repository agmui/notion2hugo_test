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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=a44de2be6a5064bbebf422c0ea890360d0cbec88c4c2df17b5542098f65f08c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=47d5449ed62aafe4b5e9876772fe489265b01aa7427afdfcab66e06b30a20632&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=19a480462759dfa3cf0aebf05020ae378469b6a9357e093dac28016a39ffa9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=7c22c17fd4e56b60e98f76b0d93364a96cd936186da6086a6030cf649ca52b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=3b692ed00fe2b0cf6bf0c44ec3806ce8d329803fb471770b398fcc8847b193c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=98a49175592fe3af170ba855e2db928c312198d3ac52360afe62b4e94302aa47&X-Amz-SignedHeaders=host&x-id=GetObject)
