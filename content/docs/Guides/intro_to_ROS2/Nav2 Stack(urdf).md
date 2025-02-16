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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ6QQJM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDHMzWMhe307E2BTg6u8fpHgD2PDCa3XkD1LYp4zS1dOQIgXRj1eHG3K6KClgeNaANSgNAJbpSlWm8S2d0zYcFi6ncq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHe7uhte5n66k0DcAircA67tUYbjhypOdhXyduwNNElogVAho3xI80wHtBmujaugrosTtSnmjFPgGDum0mb5KGW2t7piUxkQJYo30T0wSSOeXpRnfuJ3iWuj5UZbhN5r6yTmQNauXp5egdvGZuYIrtE5Z7R0qPabNjuZlYldz%2BNeWMUEalsS45%2BRZ%2FOzNShY%2BBfNampSIjSppWi9UtiPI%2B%2FQ4lup4LK%2BtI58QvN9lqx8vpMOoYbRaeOAxhD92IsEzt9gwkaHSfAUWkPTTCvNKq8Hvrm3gDEzO9%2FxBJpp299LSJFJSAXlXnEWAE%2Bzq3ZPHHI11EOWwh7l6mQaqr9M2Pof6zLOmLWJadcHBSWA9TjBEnNOfthwczVL%2B8vJeZ9TcAVbOop3NI%2BplqWLWCeHH2a12cYvdStP2MGxFKcR2YsO1reJwUjz6%2F0rVt9kQbFflBrmS67fdLJs%2FP1Vp2t5iWmJrNo28PrXpWv55e2GxZnA2DFEtcDUw%2FWz2Q7aB9SIBKBriwLaRbUb9P2mjSkJXam5l4fWjpV%2BcSJm2m6a8SCwHcuTBzq7RXdP%2FUOmppQ06zmM4eqrnpqOjCin71dl954wb%2BzYJnQsHk9lEVLwOMut65yY5ErZ6O2oWlHxdX9Mi8vIOiB%2FtZ3GWnGTMNLlxL0GOqUBiwcaa6mqLYBlgFyv1df4zdR5x9zPoqb%2BGTVebtLZ%2BOczMYEzbXwDidTR%2F14q6%2B6jV00YI92wKaRBUWzbZ0VGugguPp%2FtSQt1N8Ah1uPW8fwXwEupGwEE80BUZwCTZ07WfzCnISMs%2FEC44dMwk7Yf%2FHns9AoFExOpOdwTjMj0ArQ0kJPKM1OTPWTflFPoJkiZCZgp83DloZmndzvXRm%2By6%2Buy1yit&X-Amz-Signature=3df1cbfda9a8e571beeddec5dd13ab390523ec43a073bd8565880c225583167d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ6QQJM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDHMzWMhe307E2BTg6u8fpHgD2PDCa3XkD1LYp4zS1dOQIgXRj1eHG3K6KClgeNaANSgNAJbpSlWm8S2d0zYcFi6ncq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHe7uhte5n66k0DcAircA67tUYbjhypOdhXyduwNNElogVAho3xI80wHtBmujaugrosTtSnmjFPgGDum0mb5KGW2t7piUxkQJYo30T0wSSOeXpRnfuJ3iWuj5UZbhN5r6yTmQNauXp5egdvGZuYIrtE5Z7R0qPabNjuZlYldz%2BNeWMUEalsS45%2BRZ%2FOzNShY%2BBfNampSIjSppWi9UtiPI%2B%2FQ4lup4LK%2BtI58QvN9lqx8vpMOoYbRaeOAxhD92IsEzt9gwkaHSfAUWkPTTCvNKq8Hvrm3gDEzO9%2FxBJpp299LSJFJSAXlXnEWAE%2Bzq3ZPHHI11EOWwh7l6mQaqr9M2Pof6zLOmLWJadcHBSWA9TjBEnNOfthwczVL%2B8vJeZ9TcAVbOop3NI%2BplqWLWCeHH2a12cYvdStP2MGxFKcR2YsO1reJwUjz6%2F0rVt9kQbFflBrmS67fdLJs%2FP1Vp2t5iWmJrNo28PrXpWv55e2GxZnA2DFEtcDUw%2FWz2Q7aB9SIBKBriwLaRbUb9P2mjSkJXam5l4fWjpV%2BcSJm2m6a8SCwHcuTBzq7RXdP%2FUOmppQ06zmM4eqrnpqOjCin71dl954wb%2BzYJnQsHk9lEVLwOMut65yY5ErZ6O2oWlHxdX9Mi8vIOiB%2FtZ3GWnGTMNLlxL0GOqUBiwcaa6mqLYBlgFyv1df4zdR5x9zPoqb%2BGTVebtLZ%2BOczMYEzbXwDidTR%2F14q6%2B6jV00YI92wKaRBUWzbZ0VGugguPp%2FtSQt1N8Ah1uPW8fwXwEupGwEE80BUZwCTZ07WfzCnISMs%2FEC44dMwk7Yf%2FHns9AoFExOpOdwTjMj0ArQ0kJPKM1OTPWTflFPoJkiZCZgp83DloZmndzvXRm%2By6%2Buy1yit&X-Amz-Signature=0ad518bd753426a639cd5aa9d5bf1d58561c196e4e523fa7cb79d1ee1e5d64f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ6QQJM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDHMzWMhe307E2BTg6u8fpHgD2PDCa3XkD1LYp4zS1dOQIgXRj1eHG3K6KClgeNaANSgNAJbpSlWm8S2d0zYcFi6ncq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHe7uhte5n66k0DcAircA67tUYbjhypOdhXyduwNNElogVAho3xI80wHtBmujaugrosTtSnmjFPgGDum0mb5KGW2t7piUxkQJYo30T0wSSOeXpRnfuJ3iWuj5UZbhN5r6yTmQNauXp5egdvGZuYIrtE5Z7R0qPabNjuZlYldz%2BNeWMUEalsS45%2BRZ%2FOzNShY%2BBfNampSIjSppWi9UtiPI%2B%2FQ4lup4LK%2BtI58QvN9lqx8vpMOoYbRaeOAxhD92IsEzt9gwkaHSfAUWkPTTCvNKq8Hvrm3gDEzO9%2FxBJpp299LSJFJSAXlXnEWAE%2Bzq3ZPHHI11EOWwh7l6mQaqr9M2Pof6zLOmLWJadcHBSWA9TjBEnNOfthwczVL%2B8vJeZ9TcAVbOop3NI%2BplqWLWCeHH2a12cYvdStP2MGxFKcR2YsO1reJwUjz6%2F0rVt9kQbFflBrmS67fdLJs%2FP1Vp2t5iWmJrNo28PrXpWv55e2GxZnA2DFEtcDUw%2FWz2Q7aB9SIBKBriwLaRbUb9P2mjSkJXam5l4fWjpV%2BcSJm2m6a8SCwHcuTBzq7RXdP%2FUOmppQ06zmM4eqrnpqOjCin71dl954wb%2BzYJnQsHk9lEVLwOMut65yY5ErZ6O2oWlHxdX9Mi8vIOiB%2FtZ3GWnGTMNLlxL0GOqUBiwcaa6mqLYBlgFyv1df4zdR5x9zPoqb%2BGTVebtLZ%2BOczMYEzbXwDidTR%2F14q6%2B6jV00YI92wKaRBUWzbZ0VGugguPp%2FtSQt1N8Ah1uPW8fwXwEupGwEE80BUZwCTZ07WfzCnISMs%2FEC44dMwk7Yf%2FHns9AoFExOpOdwTjMj0ArQ0kJPKM1OTPWTflFPoJkiZCZgp83DloZmndzvXRm%2By6%2Buy1yit&X-Amz-Signature=33acaa96d4da6b7aba9648651ad556af4139b1b7edc67b18661c9b30d56fe37e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ6QQJM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDHMzWMhe307E2BTg6u8fpHgD2PDCa3XkD1LYp4zS1dOQIgXRj1eHG3K6KClgeNaANSgNAJbpSlWm8S2d0zYcFi6ncq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHe7uhte5n66k0DcAircA67tUYbjhypOdhXyduwNNElogVAho3xI80wHtBmujaugrosTtSnmjFPgGDum0mb5KGW2t7piUxkQJYo30T0wSSOeXpRnfuJ3iWuj5UZbhN5r6yTmQNauXp5egdvGZuYIrtE5Z7R0qPabNjuZlYldz%2BNeWMUEalsS45%2BRZ%2FOzNShY%2BBfNampSIjSppWi9UtiPI%2B%2FQ4lup4LK%2BtI58QvN9lqx8vpMOoYbRaeOAxhD92IsEzt9gwkaHSfAUWkPTTCvNKq8Hvrm3gDEzO9%2FxBJpp299LSJFJSAXlXnEWAE%2Bzq3ZPHHI11EOWwh7l6mQaqr9M2Pof6zLOmLWJadcHBSWA9TjBEnNOfthwczVL%2B8vJeZ9TcAVbOop3NI%2BplqWLWCeHH2a12cYvdStP2MGxFKcR2YsO1reJwUjz6%2F0rVt9kQbFflBrmS67fdLJs%2FP1Vp2t5iWmJrNo28PrXpWv55e2GxZnA2DFEtcDUw%2FWz2Q7aB9SIBKBriwLaRbUb9P2mjSkJXam5l4fWjpV%2BcSJm2m6a8SCwHcuTBzq7RXdP%2FUOmppQ06zmM4eqrnpqOjCin71dl954wb%2BzYJnQsHk9lEVLwOMut65yY5ErZ6O2oWlHxdX9Mi8vIOiB%2FtZ3GWnGTMNLlxL0GOqUBiwcaa6mqLYBlgFyv1df4zdR5x9zPoqb%2BGTVebtLZ%2BOczMYEzbXwDidTR%2F14q6%2B6jV00YI92wKaRBUWzbZ0VGugguPp%2FtSQt1N8Ah1uPW8fwXwEupGwEE80BUZwCTZ07WfzCnISMs%2FEC44dMwk7Yf%2FHns9AoFExOpOdwTjMj0ArQ0kJPKM1OTPWTflFPoJkiZCZgp83DloZmndzvXRm%2By6%2Buy1yit&X-Amz-Signature=194803cf96314871eabbbeaf2d9e0012f7c02014192dc90c1791168ab76d5344&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ6QQJM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDHMzWMhe307E2BTg6u8fpHgD2PDCa3XkD1LYp4zS1dOQIgXRj1eHG3K6KClgeNaANSgNAJbpSlWm8S2d0zYcFi6ncq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHe7uhte5n66k0DcAircA67tUYbjhypOdhXyduwNNElogVAho3xI80wHtBmujaugrosTtSnmjFPgGDum0mb5KGW2t7piUxkQJYo30T0wSSOeXpRnfuJ3iWuj5UZbhN5r6yTmQNauXp5egdvGZuYIrtE5Z7R0qPabNjuZlYldz%2BNeWMUEalsS45%2BRZ%2FOzNShY%2BBfNampSIjSppWi9UtiPI%2B%2FQ4lup4LK%2BtI58QvN9lqx8vpMOoYbRaeOAxhD92IsEzt9gwkaHSfAUWkPTTCvNKq8Hvrm3gDEzO9%2FxBJpp299LSJFJSAXlXnEWAE%2Bzq3ZPHHI11EOWwh7l6mQaqr9M2Pof6zLOmLWJadcHBSWA9TjBEnNOfthwczVL%2B8vJeZ9TcAVbOop3NI%2BplqWLWCeHH2a12cYvdStP2MGxFKcR2YsO1reJwUjz6%2F0rVt9kQbFflBrmS67fdLJs%2FP1Vp2t5iWmJrNo28PrXpWv55e2GxZnA2DFEtcDUw%2FWz2Q7aB9SIBKBriwLaRbUb9P2mjSkJXam5l4fWjpV%2BcSJm2m6a8SCwHcuTBzq7RXdP%2FUOmppQ06zmM4eqrnpqOjCin71dl954wb%2BzYJnQsHk9lEVLwOMut65yY5ErZ6O2oWlHxdX9Mi8vIOiB%2FtZ3GWnGTMNLlxL0GOqUBiwcaa6mqLYBlgFyv1df4zdR5x9zPoqb%2BGTVebtLZ%2BOczMYEzbXwDidTR%2F14q6%2B6jV00YI92wKaRBUWzbZ0VGugguPp%2FtSQt1N8Ah1uPW8fwXwEupGwEE80BUZwCTZ07WfzCnISMs%2FEC44dMwk7Yf%2FHns9AoFExOpOdwTjMj0ArQ0kJPKM1OTPWTflFPoJkiZCZgp83DloZmndzvXRm%2By6%2Buy1yit&X-Amz-Signature=1b552b2563e32b13a004a448fcd5fb9cd955fc3f2c6254912aeba9aff79a4b07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ6QQJM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDHMzWMhe307E2BTg6u8fpHgD2PDCa3XkD1LYp4zS1dOQIgXRj1eHG3K6KClgeNaANSgNAJbpSlWm8S2d0zYcFi6ncq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDHe7uhte5n66k0DcAircA67tUYbjhypOdhXyduwNNElogVAho3xI80wHtBmujaugrosTtSnmjFPgGDum0mb5KGW2t7piUxkQJYo30T0wSSOeXpRnfuJ3iWuj5UZbhN5r6yTmQNauXp5egdvGZuYIrtE5Z7R0qPabNjuZlYldz%2BNeWMUEalsS45%2BRZ%2FOzNShY%2BBfNampSIjSppWi9UtiPI%2B%2FQ4lup4LK%2BtI58QvN9lqx8vpMOoYbRaeOAxhD92IsEzt9gwkaHSfAUWkPTTCvNKq8Hvrm3gDEzO9%2FxBJpp299LSJFJSAXlXnEWAE%2Bzq3ZPHHI11EOWwh7l6mQaqr9M2Pof6zLOmLWJadcHBSWA9TjBEnNOfthwczVL%2B8vJeZ9TcAVbOop3NI%2BplqWLWCeHH2a12cYvdStP2MGxFKcR2YsO1reJwUjz6%2F0rVt9kQbFflBrmS67fdLJs%2FP1Vp2t5iWmJrNo28PrXpWv55e2GxZnA2DFEtcDUw%2FWz2Q7aB9SIBKBriwLaRbUb9P2mjSkJXam5l4fWjpV%2BcSJm2m6a8SCwHcuTBzq7RXdP%2FUOmppQ06zmM4eqrnpqOjCin71dl954wb%2BzYJnQsHk9lEVLwOMut65yY5ErZ6O2oWlHxdX9Mi8vIOiB%2FtZ3GWnGTMNLlxL0GOqUBiwcaa6mqLYBlgFyv1df4zdR5x9zPoqb%2BGTVebtLZ%2BOczMYEzbXwDidTR%2F14q6%2B6jV00YI92wKaRBUWzbZ0VGugguPp%2FtSQt1N8Ah1uPW8fwXwEupGwEE80BUZwCTZ07WfzCnISMs%2FEC44dMwk7Yf%2FHns9AoFExOpOdwTjMj0ArQ0kJPKM1OTPWTflFPoJkiZCZgp83DloZmndzvXRm%2By6%2Buy1yit&X-Amz-Signature=6bf83649378650637ce33db21ac5a21f4270ba77fecef2949dee289b8d5b8c23&X-Amz-SignedHeaders=host&x-id=GetObject)
