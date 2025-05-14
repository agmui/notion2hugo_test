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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GIRFT2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCIeOJCL3SBPp%2FMXgVN4bIEi3IRwpLRoJGULK9woQMFrgIgOk82%2BSc1dWWczLNtTmiqz8YWaZRfV5UNK6p5IEdjsxcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJAG9NFA4UGUMOUw3yrcA%2FyiaSbszHK7vogYtDY0QwJWAUYDwqP8Yt128cCO5KdJRYkHRV0T0dJ5VN4y9BPc0EuYXoxrvvKbLKRapYaI3CbTAFJUmaf2z03IiuUYjXBt7%2BpfnMj3JvqSeDzjlzuuZIjq2lQb0FtP0QQ6nJyEeKnukxQ0w8750sdn5KJmbryYOJ%2Br5Pn3DnzjBss1SP62qHYr1967aATEJMl7K4O6BpXyb8aGCPFuffK18%2FWctsXVCzQ0JzcVQlqhacj96Fs4GmKJERAQlKw949RSG%2B8xjUjbT3Aj%2BvjYDyRAiEqQweY74CZZnshJMPKZEP6HD4HG0GSN88D%2FbcBShN8bZM0vfjuXGHzDHCrahvd1FGr1FReSKlXS2TpqVzUnISjvosr4lcwut9EZMwIDJ%2Fvl6M%2BBCjAfPxjnlLRoteEqEpOHUbTb9DR8tJdt5jMYbMGyYSVz%2F2S%2BHLtf5OVtyMjY11JCp%2Fll2qPWh29NljrEEGh%2B714txvjmclfGfJwwIg3gBIgeAMmjt3IezwZQ5iE5iY5WPzZWfWrU9OLBiVl8jaNpoyvIA3hJUuBL%2FhA46Vy%2FfTFQzS%2BzdpurGUk%2FohiYJwpk7nnu4E2bSO0gS6q2K3iCvXvsiHZDWz6j8uhY1pQHMPadkcEGOqUBL0k0Ph0nx%2B93MDDXGdbc3pvawbRtSOoa05lsZwiC8S5qZfYOdYsOCVmPNhxvJpZDPJNcMq7IgVI%2FJZNbEmOQgzDKXpU4FYkBijQQ1Ih0eu3RXw3OdIKWOT3BBRivn8fzHeYRqwVZbDfSNXHlRhWtgRp5eG0Bq1aK5l3TAmdo0sBPmO9j%2FQeFKgJ3zfp3do11u5DqmbguPBUhmnRO3%2FA0r0Ove6ud&X-Amz-Signature=f4447dba5ccfb5ab418218ebe0e60b62143ec0c2497fe5b9c925fc7960c09fea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GIRFT2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCIeOJCL3SBPp%2FMXgVN4bIEi3IRwpLRoJGULK9woQMFrgIgOk82%2BSc1dWWczLNtTmiqz8YWaZRfV5UNK6p5IEdjsxcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJAG9NFA4UGUMOUw3yrcA%2FyiaSbszHK7vogYtDY0QwJWAUYDwqP8Yt128cCO5KdJRYkHRV0T0dJ5VN4y9BPc0EuYXoxrvvKbLKRapYaI3CbTAFJUmaf2z03IiuUYjXBt7%2BpfnMj3JvqSeDzjlzuuZIjq2lQb0FtP0QQ6nJyEeKnukxQ0w8750sdn5KJmbryYOJ%2Br5Pn3DnzjBss1SP62qHYr1967aATEJMl7K4O6BpXyb8aGCPFuffK18%2FWctsXVCzQ0JzcVQlqhacj96Fs4GmKJERAQlKw949RSG%2B8xjUjbT3Aj%2BvjYDyRAiEqQweY74CZZnshJMPKZEP6HD4HG0GSN88D%2FbcBShN8bZM0vfjuXGHzDHCrahvd1FGr1FReSKlXS2TpqVzUnISjvosr4lcwut9EZMwIDJ%2Fvl6M%2BBCjAfPxjnlLRoteEqEpOHUbTb9DR8tJdt5jMYbMGyYSVz%2F2S%2BHLtf5OVtyMjY11JCp%2Fll2qPWh29NljrEEGh%2B714txvjmclfGfJwwIg3gBIgeAMmjt3IezwZQ5iE5iY5WPzZWfWrU9OLBiVl8jaNpoyvIA3hJUuBL%2FhA46Vy%2FfTFQzS%2BzdpurGUk%2FohiYJwpk7nnu4E2bSO0gS6q2K3iCvXvsiHZDWz6j8uhY1pQHMPadkcEGOqUBL0k0Ph0nx%2B93MDDXGdbc3pvawbRtSOoa05lsZwiC8S5qZfYOdYsOCVmPNhxvJpZDPJNcMq7IgVI%2FJZNbEmOQgzDKXpU4FYkBijQQ1Ih0eu3RXw3OdIKWOT3BBRivn8fzHeYRqwVZbDfSNXHlRhWtgRp5eG0Bq1aK5l3TAmdo0sBPmO9j%2FQeFKgJ3zfp3do11u5DqmbguPBUhmnRO3%2FA0r0Ove6ud&X-Amz-Signature=556a6a8b125b972369e4d7e64ecd5bff74b914ee32bc6e20980f2705c8c3a602&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GIRFT2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCIeOJCL3SBPp%2FMXgVN4bIEi3IRwpLRoJGULK9woQMFrgIgOk82%2BSc1dWWczLNtTmiqz8YWaZRfV5UNK6p5IEdjsxcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJAG9NFA4UGUMOUw3yrcA%2FyiaSbszHK7vogYtDY0QwJWAUYDwqP8Yt128cCO5KdJRYkHRV0T0dJ5VN4y9BPc0EuYXoxrvvKbLKRapYaI3CbTAFJUmaf2z03IiuUYjXBt7%2BpfnMj3JvqSeDzjlzuuZIjq2lQb0FtP0QQ6nJyEeKnukxQ0w8750sdn5KJmbryYOJ%2Br5Pn3DnzjBss1SP62qHYr1967aATEJMl7K4O6BpXyb8aGCPFuffK18%2FWctsXVCzQ0JzcVQlqhacj96Fs4GmKJERAQlKw949RSG%2B8xjUjbT3Aj%2BvjYDyRAiEqQweY74CZZnshJMPKZEP6HD4HG0GSN88D%2FbcBShN8bZM0vfjuXGHzDHCrahvd1FGr1FReSKlXS2TpqVzUnISjvosr4lcwut9EZMwIDJ%2Fvl6M%2BBCjAfPxjnlLRoteEqEpOHUbTb9DR8tJdt5jMYbMGyYSVz%2F2S%2BHLtf5OVtyMjY11JCp%2Fll2qPWh29NljrEEGh%2B714txvjmclfGfJwwIg3gBIgeAMmjt3IezwZQ5iE5iY5WPzZWfWrU9OLBiVl8jaNpoyvIA3hJUuBL%2FhA46Vy%2FfTFQzS%2BzdpurGUk%2FohiYJwpk7nnu4E2bSO0gS6q2K3iCvXvsiHZDWz6j8uhY1pQHMPadkcEGOqUBL0k0Ph0nx%2B93MDDXGdbc3pvawbRtSOoa05lsZwiC8S5qZfYOdYsOCVmPNhxvJpZDPJNcMq7IgVI%2FJZNbEmOQgzDKXpU4FYkBijQQ1Ih0eu3RXw3OdIKWOT3BBRivn8fzHeYRqwVZbDfSNXHlRhWtgRp5eG0Bq1aK5l3TAmdo0sBPmO9j%2FQeFKgJ3zfp3do11u5DqmbguPBUhmnRO3%2FA0r0Ove6ud&X-Amz-Signature=809bf7435899a8f12c540571eb4ead8d57b3ac938de914dd1d4af15ae59ff145&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GIRFT2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCIeOJCL3SBPp%2FMXgVN4bIEi3IRwpLRoJGULK9woQMFrgIgOk82%2BSc1dWWczLNtTmiqz8YWaZRfV5UNK6p5IEdjsxcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJAG9NFA4UGUMOUw3yrcA%2FyiaSbszHK7vogYtDY0QwJWAUYDwqP8Yt128cCO5KdJRYkHRV0T0dJ5VN4y9BPc0EuYXoxrvvKbLKRapYaI3CbTAFJUmaf2z03IiuUYjXBt7%2BpfnMj3JvqSeDzjlzuuZIjq2lQb0FtP0QQ6nJyEeKnukxQ0w8750sdn5KJmbryYOJ%2Br5Pn3DnzjBss1SP62qHYr1967aATEJMl7K4O6BpXyb8aGCPFuffK18%2FWctsXVCzQ0JzcVQlqhacj96Fs4GmKJERAQlKw949RSG%2B8xjUjbT3Aj%2BvjYDyRAiEqQweY74CZZnshJMPKZEP6HD4HG0GSN88D%2FbcBShN8bZM0vfjuXGHzDHCrahvd1FGr1FReSKlXS2TpqVzUnISjvosr4lcwut9EZMwIDJ%2Fvl6M%2BBCjAfPxjnlLRoteEqEpOHUbTb9DR8tJdt5jMYbMGyYSVz%2F2S%2BHLtf5OVtyMjY11JCp%2Fll2qPWh29NljrEEGh%2B714txvjmclfGfJwwIg3gBIgeAMmjt3IezwZQ5iE5iY5WPzZWfWrU9OLBiVl8jaNpoyvIA3hJUuBL%2FhA46Vy%2FfTFQzS%2BzdpurGUk%2FohiYJwpk7nnu4E2bSO0gS6q2K3iCvXvsiHZDWz6j8uhY1pQHMPadkcEGOqUBL0k0Ph0nx%2B93MDDXGdbc3pvawbRtSOoa05lsZwiC8S5qZfYOdYsOCVmPNhxvJpZDPJNcMq7IgVI%2FJZNbEmOQgzDKXpU4FYkBijQQ1Ih0eu3RXw3OdIKWOT3BBRivn8fzHeYRqwVZbDfSNXHlRhWtgRp5eG0Bq1aK5l3TAmdo0sBPmO9j%2FQeFKgJ3zfp3do11u5DqmbguPBUhmnRO3%2FA0r0Ove6ud&X-Amz-Signature=1dda3da4164e3e92a33742758c366fa8be8ee76e4cffbfca8865b42ff1a55947&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GIRFT2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCIeOJCL3SBPp%2FMXgVN4bIEi3IRwpLRoJGULK9woQMFrgIgOk82%2BSc1dWWczLNtTmiqz8YWaZRfV5UNK6p5IEdjsxcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJAG9NFA4UGUMOUw3yrcA%2FyiaSbszHK7vogYtDY0QwJWAUYDwqP8Yt128cCO5KdJRYkHRV0T0dJ5VN4y9BPc0EuYXoxrvvKbLKRapYaI3CbTAFJUmaf2z03IiuUYjXBt7%2BpfnMj3JvqSeDzjlzuuZIjq2lQb0FtP0QQ6nJyEeKnukxQ0w8750sdn5KJmbryYOJ%2Br5Pn3DnzjBss1SP62qHYr1967aATEJMl7K4O6BpXyb8aGCPFuffK18%2FWctsXVCzQ0JzcVQlqhacj96Fs4GmKJERAQlKw949RSG%2B8xjUjbT3Aj%2BvjYDyRAiEqQweY74CZZnshJMPKZEP6HD4HG0GSN88D%2FbcBShN8bZM0vfjuXGHzDHCrahvd1FGr1FReSKlXS2TpqVzUnISjvosr4lcwut9EZMwIDJ%2Fvl6M%2BBCjAfPxjnlLRoteEqEpOHUbTb9DR8tJdt5jMYbMGyYSVz%2F2S%2BHLtf5OVtyMjY11JCp%2Fll2qPWh29NljrEEGh%2B714txvjmclfGfJwwIg3gBIgeAMmjt3IezwZQ5iE5iY5WPzZWfWrU9OLBiVl8jaNpoyvIA3hJUuBL%2FhA46Vy%2FfTFQzS%2BzdpurGUk%2FohiYJwpk7nnu4E2bSO0gS6q2K3iCvXvsiHZDWz6j8uhY1pQHMPadkcEGOqUBL0k0Ph0nx%2B93MDDXGdbc3pvawbRtSOoa05lsZwiC8S5qZfYOdYsOCVmPNhxvJpZDPJNcMq7IgVI%2FJZNbEmOQgzDKXpU4FYkBijQQ1Ih0eu3RXw3OdIKWOT3BBRivn8fzHeYRqwVZbDfSNXHlRhWtgRp5eG0Bq1aK5l3TAmdo0sBPmO9j%2FQeFKgJ3zfp3do11u5DqmbguPBUhmnRO3%2FA0r0Ove6ud&X-Amz-Signature=b9ff15b798fcc031429ffbbd7d5f8c821b348b8f8caa66c12b60fa071efa8f14&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GIRFT2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCIeOJCL3SBPp%2FMXgVN4bIEi3IRwpLRoJGULK9woQMFrgIgOk82%2BSc1dWWczLNtTmiqz8YWaZRfV5UNK6p5IEdjsxcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJAG9NFA4UGUMOUw3yrcA%2FyiaSbszHK7vogYtDY0QwJWAUYDwqP8Yt128cCO5KdJRYkHRV0T0dJ5VN4y9BPc0EuYXoxrvvKbLKRapYaI3CbTAFJUmaf2z03IiuUYjXBt7%2BpfnMj3JvqSeDzjlzuuZIjq2lQb0FtP0QQ6nJyEeKnukxQ0w8750sdn5KJmbryYOJ%2Br5Pn3DnzjBss1SP62qHYr1967aATEJMl7K4O6BpXyb8aGCPFuffK18%2FWctsXVCzQ0JzcVQlqhacj96Fs4GmKJERAQlKw949RSG%2B8xjUjbT3Aj%2BvjYDyRAiEqQweY74CZZnshJMPKZEP6HD4HG0GSN88D%2FbcBShN8bZM0vfjuXGHzDHCrahvd1FGr1FReSKlXS2TpqVzUnISjvosr4lcwut9EZMwIDJ%2Fvl6M%2BBCjAfPxjnlLRoteEqEpOHUbTb9DR8tJdt5jMYbMGyYSVz%2F2S%2BHLtf5OVtyMjY11JCp%2Fll2qPWh29NljrEEGh%2B714txvjmclfGfJwwIg3gBIgeAMmjt3IezwZQ5iE5iY5WPzZWfWrU9OLBiVl8jaNpoyvIA3hJUuBL%2FhA46Vy%2FfTFQzS%2BzdpurGUk%2FohiYJwpk7nnu4E2bSO0gS6q2K3iCvXvsiHZDWz6j8uhY1pQHMPadkcEGOqUBL0k0Ph0nx%2B93MDDXGdbc3pvawbRtSOoa05lsZwiC8S5qZfYOdYsOCVmPNhxvJpZDPJNcMq7IgVI%2FJZNbEmOQgzDKXpU4FYkBijQQ1Ih0eu3RXw3OdIKWOT3BBRivn8fzHeYRqwVZbDfSNXHlRhWtgRp5eG0Bq1aK5l3TAmdo0sBPmO9j%2FQeFKgJ3zfp3do11u5DqmbguPBUhmnRO3%2FA0r0Ove6ud&X-Amz-Signature=699db3baa17912e2a6a3ce81b8e3066051e84f9001d0192bf710218fb0c0b081&X-Amz-SignedHeaders=host&x-id=GetObject)
