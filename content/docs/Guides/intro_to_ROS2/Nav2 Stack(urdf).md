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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIJVJI4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCID8QZf1y6a6CydWuThjKa%2FDAepnAli9UxsJVuf%2BzuDIwAiEAqswUQfP41mm30IVs2MptYGN%2FzSL23QxfM%2F1ohZ6WYPYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFwyjrmAVAEgynLtyrcA1l%2BQ91UF%2BiWJBfGXM3wtwREqbE2cQzWsdbrujvFJnzUlUxGkJ8MbtjfDxxXl5TBs%2BJqezK5m78kV6Y%2BKvpeiB3pOgDMrO%2Bi3zpbIYlD666ZsghNBaYML7lNWkI%2FsYYDh8Iqr88h5pb8yqP1h951BvxHcME%2BMezvtL6OzXwss5%2B%2FBP9IprprUXWmP8AgMHdykspcns%2F%2Ff3ABhZUwJwzbOVzf%2FirlQ7kztgDleD%2FxvmBjI3pghwcZV2KNQSp7P%2BlUMcSWs9rnFxnjkssZyGtQEOZUy2yTYfJwZcfWwRlCBGup5C1DgSRhRko5Csz37XB8EXudB3Y5oKcVecu73MduOI48Go11b93M%2FBxiP26ZgO2WDXoy%2BUm%2FrKbCi52Q4kEh2C3Ha6IAmStBybCz5oJz3zK2zmWIlSmMrp9oWphpZGNHs47AHRbdPFAJ2oofthGN%2FyITG6ObX4W%2Fumc9y827VTRPC9J1U4JYRBWQ54IKqJ6JxW3WlhpVLQt0319VuFx7b2%2FEQoWK6P1Z0colyrbJmPaqhcESLikq2ONolIslgSePO%2FFsZn0mt4OF6EpBcfnzZh%2BVlw92p7wmx1sh%2BUDlq92dP6Qk1X3Gj6dK5c%2FH0i7cXPMKM7CUoboq%2BY5xMLv6tL8GOqUB8WekWJXh6tTAX7OB9M976van%2FAoVZjoqL5jKBR1%2F4V2AGIpo%2FRfgduAnkNRViEjrKBHyYjNwVNr2mmk1ZrNc64JogXHwRvvRo6eFiU9A2Tw7H2t0hGxxQO4NsvnhS2ghaPcbkHjsy2mRuOtsPf5m7rbUI8pbUjU6U%2F0sB%2BzL1uEDei4cI93aOvVCs7%2FpRcFpm9plhVCzPAWtVipizEZMvlTeJYSV&X-Amz-Signature=1bf7cd53f5e46db318e921897f0f3ad6de86d1b8a2de3db6ea2202c1611d79ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIJVJI4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCID8QZf1y6a6CydWuThjKa%2FDAepnAli9UxsJVuf%2BzuDIwAiEAqswUQfP41mm30IVs2MptYGN%2FzSL23QxfM%2F1ohZ6WYPYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFwyjrmAVAEgynLtyrcA1l%2BQ91UF%2BiWJBfGXM3wtwREqbE2cQzWsdbrujvFJnzUlUxGkJ8MbtjfDxxXl5TBs%2BJqezK5m78kV6Y%2BKvpeiB3pOgDMrO%2Bi3zpbIYlD666ZsghNBaYML7lNWkI%2FsYYDh8Iqr88h5pb8yqP1h951BvxHcME%2BMezvtL6OzXwss5%2B%2FBP9IprprUXWmP8AgMHdykspcns%2F%2Ff3ABhZUwJwzbOVzf%2FirlQ7kztgDleD%2FxvmBjI3pghwcZV2KNQSp7P%2BlUMcSWs9rnFxnjkssZyGtQEOZUy2yTYfJwZcfWwRlCBGup5C1DgSRhRko5Csz37XB8EXudB3Y5oKcVecu73MduOI48Go11b93M%2FBxiP26ZgO2WDXoy%2BUm%2FrKbCi52Q4kEh2C3Ha6IAmStBybCz5oJz3zK2zmWIlSmMrp9oWphpZGNHs47AHRbdPFAJ2oofthGN%2FyITG6ObX4W%2Fumc9y827VTRPC9J1U4JYRBWQ54IKqJ6JxW3WlhpVLQt0319VuFx7b2%2FEQoWK6P1Z0colyrbJmPaqhcESLikq2ONolIslgSePO%2FFsZn0mt4OF6EpBcfnzZh%2BVlw92p7wmx1sh%2BUDlq92dP6Qk1X3Gj6dK5c%2FH0i7cXPMKM7CUoboq%2BY5xMLv6tL8GOqUB8WekWJXh6tTAX7OB9M976van%2FAoVZjoqL5jKBR1%2F4V2AGIpo%2FRfgduAnkNRViEjrKBHyYjNwVNr2mmk1ZrNc64JogXHwRvvRo6eFiU9A2Tw7H2t0hGxxQO4NsvnhS2ghaPcbkHjsy2mRuOtsPf5m7rbUI8pbUjU6U%2F0sB%2BzL1uEDei4cI93aOvVCs7%2FpRcFpm9plhVCzPAWtVipizEZMvlTeJYSV&X-Amz-Signature=08cfd916f683e40138856b691ce8c5bf50372941bfda318eeb4884f1546f4f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIJVJI4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCID8QZf1y6a6CydWuThjKa%2FDAepnAli9UxsJVuf%2BzuDIwAiEAqswUQfP41mm30IVs2MptYGN%2FzSL23QxfM%2F1ohZ6WYPYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFwyjrmAVAEgynLtyrcA1l%2BQ91UF%2BiWJBfGXM3wtwREqbE2cQzWsdbrujvFJnzUlUxGkJ8MbtjfDxxXl5TBs%2BJqezK5m78kV6Y%2BKvpeiB3pOgDMrO%2Bi3zpbIYlD666ZsghNBaYML7lNWkI%2FsYYDh8Iqr88h5pb8yqP1h951BvxHcME%2BMezvtL6OzXwss5%2B%2FBP9IprprUXWmP8AgMHdykspcns%2F%2Ff3ABhZUwJwzbOVzf%2FirlQ7kztgDleD%2FxvmBjI3pghwcZV2KNQSp7P%2BlUMcSWs9rnFxnjkssZyGtQEOZUy2yTYfJwZcfWwRlCBGup5C1DgSRhRko5Csz37XB8EXudB3Y5oKcVecu73MduOI48Go11b93M%2FBxiP26ZgO2WDXoy%2BUm%2FrKbCi52Q4kEh2C3Ha6IAmStBybCz5oJz3zK2zmWIlSmMrp9oWphpZGNHs47AHRbdPFAJ2oofthGN%2FyITG6ObX4W%2Fumc9y827VTRPC9J1U4JYRBWQ54IKqJ6JxW3WlhpVLQt0319VuFx7b2%2FEQoWK6P1Z0colyrbJmPaqhcESLikq2ONolIslgSePO%2FFsZn0mt4OF6EpBcfnzZh%2BVlw92p7wmx1sh%2BUDlq92dP6Qk1X3Gj6dK5c%2FH0i7cXPMKM7CUoboq%2BY5xMLv6tL8GOqUB8WekWJXh6tTAX7OB9M976van%2FAoVZjoqL5jKBR1%2F4V2AGIpo%2FRfgduAnkNRViEjrKBHyYjNwVNr2mmk1ZrNc64JogXHwRvvRo6eFiU9A2Tw7H2t0hGxxQO4NsvnhS2ghaPcbkHjsy2mRuOtsPf5m7rbUI8pbUjU6U%2F0sB%2BzL1uEDei4cI93aOvVCs7%2FpRcFpm9plhVCzPAWtVipizEZMvlTeJYSV&X-Amz-Signature=05f15a1da7af04f98e9a1ad613475796f6cc8e98dcedec19821570e8aa3b8bff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIJVJI4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCID8QZf1y6a6CydWuThjKa%2FDAepnAli9UxsJVuf%2BzuDIwAiEAqswUQfP41mm30IVs2MptYGN%2FzSL23QxfM%2F1ohZ6WYPYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFwyjrmAVAEgynLtyrcA1l%2BQ91UF%2BiWJBfGXM3wtwREqbE2cQzWsdbrujvFJnzUlUxGkJ8MbtjfDxxXl5TBs%2BJqezK5m78kV6Y%2BKvpeiB3pOgDMrO%2Bi3zpbIYlD666ZsghNBaYML7lNWkI%2FsYYDh8Iqr88h5pb8yqP1h951BvxHcME%2BMezvtL6OzXwss5%2B%2FBP9IprprUXWmP8AgMHdykspcns%2F%2Ff3ABhZUwJwzbOVzf%2FirlQ7kztgDleD%2FxvmBjI3pghwcZV2KNQSp7P%2BlUMcSWs9rnFxnjkssZyGtQEOZUy2yTYfJwZcfWwRlCBGup5C1DgSRhRko5Csz37XB8EXudB3Y5oKcVecu73MduOI48Go11b93M%2FBxiP26ZgO2WDXoy%2BUm%2FrKbCi52Q4kEh2C3Ha6IAmStBybCz5oJz3zK2zmWIlSmMrp9oWphpZGNHs47AHRbdPFAJ2oofthGN%2FyITG6ObX4W%2Fumc9y827VTRPC9J1U4JYRBWQ54IKqJ6JxW3WlhpVLQt0319VuFx7b2%2FEQoWK6P1Z0colyrbJmPaqhcESLikq2ONolIslgSePO%2FFsZn0mt4OF6EpBcfnzZh%2BVlw92p7wmx1sh%2BUDlq92dP6Qk1X3Gj6dK5c%2FH0i7cXPMKM7CUoboq%2BY5xMLv6tL8GOqUB8WekWJXh6tTAX7OB9M976van%2FAoVZjoqL5jKBR1%2F4V2AGIpo%2FRfgduAnkNRViEjrKBHyYjNwVNr2mmk1ZrNc64JogXHwRvvRo6eFiU9A2Tw7H2t0hGxxQO4NsvnhS2ghaPcbkHjsy2mRuOtsPf5m7rbUI8pbUjU6U%2F0sB%2BzL1uEDei4cI93aOvVCs7%2FpRcFpm9plhVCzPAWtVipizEZMvlTeJYSV&X-Amz-Signature=7eb55e8e81b518cdfda38fb76a2fe5e8ac8f8768c01dbb7a5f049a1bb00a75e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIJVJI4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCID8QZf1y6a6CydWuThjKa%2FDAepnAli9UxsJVuf%2BzuDIwAiEAqswUQfP41mm30IVs2MptYGN%2FzSL23QxfM%2F1ohZ6WYPYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFwyjrmAVAEgynLtyrcA1l%2BQ91UF%2BiWJBfGXM3wtwREqbE2cQzWsdbrujvFJnzUlUxGkJ8MbtjfDxxXl5TBs%2BJqezK5m78kV6Y%2BKvpeiB3pOgDMrO%2Bi3zpbIYlD666ZsghNBaYML7lNWkI%2FsYYDh8Iqr88h5pb8yqP1h951BvxHcME%2BMezvtL6OzXwss5%2B%2FBP9IprprUXWmP8AgMHdykspcns%2F%2Ff3ABhZUwJwzbOVzf%2FirlQ7kztgDleD%2FxvmBjI3pghwcZV2KNQSp7P%2BlUMcSWs9rnFxnjkssZyGtQEOZUy2yTYfJwZcfWwRlCBGup5C1DgSRhRko5Csz37XB8EXudB3Y5oKcVecu73MduOI48Go11b93M%2FBxiP26ZgO2WDXoy%2BUm%2FrKbCi52Q4kEh2C3Ha6IAmStBybCz5oJz3zK2zmWIlSmMrp9oWphpZGNHs47AHRbdPFAJ2oofthGN%2FyITG6ObX4W%2Fumc9y827VTRPC9J1U4JYRBWQ54IKqJ6JxW3WlhpVLQt0319VuFx7b2%2FEQoWK6P1Z0colyrbJmPaqhcESLikq2ONolIslgSePO%2FFsZn0mt4OF6EpBcfnzZh%2BVlw92p7wmx1sh%2BUDlq92dP6Qk1X3Gj6dK5c%2FH0i7cXPMKM7CUoboq%2BY5xMLv6tL8GOqUB8WekWJXh6tTAX7OB9M976van%2FAoVZjoqL5jKBR1%2F4V2AGIpo%2FRfgduAnkNRViEjrKBHyYjNwVNr2mmk1ZrNc64JogXHwRvvRo6eFiU9A2Tw7H2t0hGxxQO4NsvnhS2ghaPcbkHjsy2mRuOtsPf5m7rbUI8pbUjU6U%2F0sB%2BzL1uEDei4cI93aOvVCs7%2FpRcFpm9plhVCzPAWtVipizEZMvlTeJYSV&X-Amz-Signature=59c1ed3961212bffdccb58a4f254d7515bbbf127e12b88ca6bb24afcd4c97707&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIJVJI4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCID8QZf1y6a6CydWuThjKa%2FDAepnAli9UxsJVuf%2BzuDIwAiEAqswUQfP41mm30IVs2MptYGN%2FzSL23QxfM%2F1ohZ6WYPYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFwyjrmAVAEgynLtyrcA1l%2BQ91UF%2BiWJBfGXM3wtwREqbE2cQzWsdbrujvFJnzUlUxGkJ8MbtjfDxxXl5TBs%2BJqezK5m78kV6Y%2BKvpeiB3pOgDMrO%2Bi3zpbIYlD666ZsghNBaYML7lNWkI%2FsYYDh8Iqr88h5pb8yqP1h951BvxHcME%2BMezvtL6OzXwss5%2B%2FBP9IprprUXWmP8AgMHdykspcns%2F%2Ff3ABhZUwJwzbOVzf%2FirlQ7kztgDleD%2FxvmBjI3pghwcZV2KNQSp7P%2BlUMcSWs9rnFxnjkssZyGtQEOZUy2yTYfJwZcfWwRlCBGup5C1DgSRhRko5Csz37XB8EXudB3Y5oKcVecu73MduOI48Go11b93M%2FBxiP26ZgO2WDXoy%2BUm%2FrKbCi52Q4kEh2C3Ha6IAmStBybCz5oJz3zK2zmWIlSmMrp9oWphpZGNHs47AHRbdPFAJ2oofthGN%2FyITG6ObX4W%2Fumc9y827VTRPC9J1U4JYRBWQ54IKqJ6JxW3WlhpVLQt0319VuFx7b2%2FEQoWK6P1Z0colyrbJmPaqhcESLikq2ONolIslgSePO%2FFsZn0mt4OF6EpBcfnzZh%2BVlw92p7wmx1sh%2BUDlq92dP6Qk1X3Gj6dK5c%2FH0i7cXPMKM7CUoboq%2BY5xMLv6tL8GOqUB8WekWJXh6tTAX7OB9M976van%2FAoVZjoqL5jKBR1%2F4V2AGIpo%2FRfgduAnkNRViEjrKBHyYjNwVNr2mmk1ZrNc64JogXHwRvvRo6eFiU9A2Tw7H2t0hGxxQO4NsvnhS2ghaPcbkHjsy2mRuOtsPf5m7rbUI8pbUjU6U%2F0sB%2BzL1uEDei4cI93aOvVCs7%2FpRcFpm9plhVCzPAWtVipizEZMvlTeJYSV&X-Amz-Signature=3acf193b01d09d8caa1b699c50283a7b77fdb08fbdfa51955aeea86793198d42&X-Amz-SignedHeaders=host&x-id=GetObject)
