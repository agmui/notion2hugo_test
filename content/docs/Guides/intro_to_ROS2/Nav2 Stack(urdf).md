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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642COBLKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0n0pW6MfC0uf1V82AGa1Z5mwZaTZN64VqYKA%2B%2BKWvUAiEAkpjwU4XFNtVwvqMyIqbmy0Wv6Nqj1T9Y5hHgdOHdgEwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCfedR6%2BbKZHPBTRLSrcAzaC3yiwEl3nkopoppATbuNWli3FTrcnSWNP76LCevrhZKhjOIoDkvGV9Jvr2FUOKocPmqAnO9loiem%2BdBcPgSTyywy78eFcqwNf%2BeWj245llMhgQf3%2B69%2FIZrfSfNwICzzz6efrianTZYcpA%2FeKIfuJ6G8wzhldlL1IoMMN17A3THLQkqvhIckjaNYMEQD7%2F5TpFKgP4yOBPsrU3gel5H3F%2F0etmrR1ovJ8bJwNVFDp5KeHh6v2s%2Fp2iZh2FKu07HSUxMzkue8LEljKHit7N3wxRndNLPzeFoVcAclGhlq9T31M7ppc7HqOq1RUNt928MbKNgQY1ygzSjd4QOji6ijGN3qv%2B%2Fxj0rXczT0zCj%2BQHxIt9SOJvhs1WvJ%2Fz5Zw3y6FcxqJpkdW9qGy8aDdu%2BMzcscJIHXgyoetwHAc1fHcotIL645jb0OAOXZl1W2ju2YDjlopXjDmScKfLV%2FmZ6sHt2CBtAKrGW1xNMzjNrsX7PC6liXsRqlk3XPHtaYAvPg1RpFPG1rAF1652fmLHZeuUzAGrkcudmo5cqhg0FgHK4SDf9nEhw6X%2Fj1R28uMHjWBg8JQAK7lkERLV3PkV%2Ffc7C9U%2BNBhiJl3iE4WmMOzO1iN7Y45PdWarZkLML7Op74GOqUBDAWaEEddFBEXPc1f9sw4ZeaxksPT1Ckbff%2BzXNm%2BAE3AdxFiUdWxv3I65MM3lCJjEeSBbc1v%2FR4vdVl706m%2F0zuvoqXvKLK2lQngJ6bCjlYs5IT%2BM7q6byleJRRFCwKsKe2pmZEp921ZcSSy%2FRpy6ap4tpoY42TrLSihfD4tfoVbozkNkbKJR4HfsJ6Uv%2FbUu%2F6CIgvx9n7BfGv9ToX%2Fi7ZLrWAX&X-Amz-Signature=cf64ff1b184d7fd7a3360d09976f3b0c68171f73256ee6ce998fdee0d324e79e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642COBLKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0n0pW6MfC0uf1V82AGa1Z5mwZaTZN64VqYKA%2B%2BKWvUAiEAkpjwU4XFNtVwvqMyIqbmy0Wv6Nqj1T9Y5hHgdOHdgEwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCfedR6%2BbKZHPBTRLSrcAzaC3yiwEl3nkopoppATbuNWli3FTrcnSWNP76LCevrhZKhjOIoDkvGV9Jvr2FUOKocPmqAnO9loiem%2BdBcPgSTyywy78eFcqwNf%2BeWj245llMhgQf3%2B69%2FIZrfSfNwICzzz6efrianTZYcpA%2FeKIfuJ6G8wzhldlL1IoMMN17A3THLQkqvhIckjaNYMEQD7%2F5TpFKgP4yOBPsrU3gel5H3F%2F0etmrR1ovJ8bJwNVFDp5KeHh6v2s%2Fp2iZh2FKu07HSUxMzkue8LEljKHit7N3wxRndNLPzeFoVcAclGhlq9T31M7ppc7HqOq1RUNt928MbKNgQY1ygzSjd4QOji6ijGN3qv%2B%2Fxj0rXczT0zCj%2BQHxIt9SOJvhs1WvJ%2Fz5Zw3y6FcxqJpkdW9qGy8aDdu%2BMzcscJIHXgyoetwHAc1fHcotIL645jb0OAOXZl1W2ju2YDjlopXjDmScKfLV%2FmZ6sHt2CBtAKrGW1xNMzjNrsX7PC6liXsRqlk3XPHtaYAvPg1RpFPG1rAF1652fmLHZeuUzAGrkcudmo5cqhg0FgHK4SDf9nEhw6X%2Fj1R28uMHjWBg8JQAK7lkERLV3PkV%2Ffc7C9U%2BNBhiJl3iE4WmMOzO1iN7Y45PdWarZkLML7Op74GOqUBDAWaEEddFBEXPc1f9sw4ZeaxksPT1Ckbff%2BzXNm%2BAE3AdxFiUdWxv3I65MM3lCJjEeSBbc1v%2FR4vdVl706m%2F0zuvoqXvKLK2lQngJ6bCjlYs5IT%2BM7q6byleJRRFCwKsKe2pmZEp921ZcSSy%2FRpy6ap4tpoY42TrLSihfD4tfoVbozkNkbKJR4HfsJ6Uv%2FbUu%2F6CIgvx9n7BfGv9ToX%2Fi7ZLrWAX&X-Amz-Signature=9e2c82304f96aea0f62229a7138a55f85b0b2c2b4681b3c0123aedfeac488f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642COBLKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0n0pW6MfC0uf1V82AGa1Z5mwZaTZN64VqYKA%2B%2BKWvUAiEAkpjwU4XFNtVwvqMyIqbmy0Wv6Nqj1T9Y5hHgdOHdgEwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCfedR6%2BbKZHPBTRLSrcAzaC3yiwEl3nkopoppATbuNWli3FTrcnSWNP76LCevrhZKhjOIoDkvGV9Jvr2FUOKocPmqAnO9loiem%2BdBcPgSTyywy78eFcqwNf%2BeWj245llMhgQf3%2B69%2FIZrfSfNwICzzz6efrianTZYcpA%2FeKIfuJ6G8wzhldlL1IoMMN17A3THLQkqvhIckjaNYMEQD7%2F5TpFKgP4yOBPsrU3gel5H3F%2F0etmrR1ovJ8bJwNVFDp5KeHh6v2s%2Fp2iZh2FKu07HSUxMzkue8LEljKHit7N3wxRndNLPzeFoVcAclGhlq9T31M7ppc7HqOq1RUNt928MbKNgQY1ygzSjd4QOji6ijGN3qv%2B%2Fxj0rXczT0zCj%2BQHxIt9SOJvhs1WvJ%2Fz5Zw3y6FcxqJpkdW9qGy8aDdu%2BMzcscJIHXgyoetwHAc1fHcotIL645jb0OAOXZl1W2ju2YDjlopXjDmScKfLV%2FmZ6sHt2CBtAKrGW1xNMzjNrsX7PC6liXsRqlk3XPHtaYAvPg1RpFPG1rAF1652fmLHZeuUzAGrkcudmo5cqhg0FgHK4SDf9nEhw6X%2Fj1R28uMHjWBg8JQAK7lkERLV3PkV%2Ffc7C9U%2BNBhiJl3iE4WmMOzO1iN7Y45PdWarZkLML7Op74GOqUBDAWaEEddFBEXPc1f9sw4ZeaxksPT1Ckbff%2BzXNm%2BAE3AdxFiUdWxv3I65MM3lCJjEeSBbc1v%2FR4vdVl706m%2F0zuvoqXvKLK2lQngJ6bCjlYs5IT%2BM7q6byleJRRFCwKsKe2pmZEp921ZcSSy%2FRpy6ap4tpoY42TrLSihfD4tfoVbozkNkbKJR4HfsJ6Uv%2FbUu%2F6CIgvx9n7BfGv9ToX%2Fi7ZLrWAX&X-Amz-Signature=b875e32c03daeed122a28a44b9efe1833640a764b675e408274096d6f4beef13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642COBLKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0n0pW6MfC0uf1V82AGa1Z5mwZaTZN64VqYKA%2B%2BKWvUAiEAkpjwU4XFNtVwvqMyIqbmy0Wv6Nqj1T9Y5hHgdOHdgEwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCfedR6%2BbKZHPBTRLSrcAzaC3yiwEl3nkopoppATbuNWli3FTrcnSWNP76LCevrhZKhjOIoDkvGV9Jvr2FUOKocPmqAnO9loiem%2BdBcPgSTyywy78eFcqwNf%2BeWj245llMhgQf3%2B69%2FIZrfSfNwICzzz6efrianTZYcpA%2FeKIfuJ6G8wzhldlL1IoMMN17A3THLQkqvhIckjaNYMEQD7%2F5TpFKgP4yOBPsrU3gel5H3F%2F0etmrR1ovJ8bJwNVFDp5KeHh6v2s%2Fp2iZh2FKu07HSUxMzkue8LEljKHit7N3wxRndNLPzeFoVcAclGhlq9T31M7ppc7HqOq1RUNt928MbKNgQY1ygzSjd4QOji6ijGN3qv%2B%2Fxj0rXczT0zCj%2BQHxIt9SOJvhs1WvJ%2Fz5Zw3y6FcxqJpkdW9qGy8aDdu%2BMzcscJIHXgyoetwHAc1fHcotIL645jb0OAOXZl1W2ju2YDjlopXjDmScKfLV%2FmZ6sHt2CBtAKrGW1xNMzjNrsX7PC6liXsRqlk3XPHtaYAvPg1RpFPG1rAF1652fmLHZeuUzAGrkcudmo5cqhg0FgHK4SDf9nEhw6X%2Fj1R28uMHjWBg8JQAK7lkERLV3PkV%2Ffc7C9U%2BNBhiJl3iE4WmMOzO1iN7Y45PdWarZkLML7Op74GOqUBDAWaEEddFBEXPc1f9sw4ZeaxksPT1Ckbff%2BzXNm%2BAE3AdxFiUdWxv3I65MM3lCJjEeSBbc1v%2FR4vdVl706m%2F0zuvoqXvKLK2lQngJ6bCjlYs5IT%2BM7q6byleJRRFCwKsKe2pmZEp921ZcSSy%2FRpy6ap4tpoY42TrLSihfD4tfoVbozkNkbKJR4HfsJ6Uv%2FbUu%2F6CIgvx9n7BfGv9ToX%2Fi7ZLrWAX&X-Amz-Signature=91f30ab188bfe5fe992ce08d9b385bd1992a8e107fbf472e2bbe3824ce031f01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642COBLKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0n0pW6MfC0uf1V82AGa1Z5mwZaTZN64VqYKA%2B%2BKWvUAiEAkpjwU4XFNtVwvqMyIqbmy0Wv6Nqj1T9Y5hHgdOHdgEwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCfedR6%2BbKZHPBTRLSrcAzaC3yiwEl3nkopoppATbuNWli3FTrcnSWNP76LCevrhZKhjOIoDkvGV9Jvr2FUOKocPmqAnO9loiem%2BdBcPgSTyywy78eFcqwNf%2BeWj245llMhgQf3%2B69%2FIZrfSfNwICzzz6efrianTZYcpA%2FeKIfuJ6G8wzhldlL1IoMMN17A3THLQkqvhIckjaNYMEQD7%2F5TpFKgP4yOBPsrU3gel5H3F%2F0etmrR1ovJ8bJwNVFDp5KeHh6v2s%2Fp2iZh2FKu07HSUxMzkue8LEljKHit7N3wxRndNLPzeFoVcAclGhlq9T31M7ppc7HqOq1RUNt928MbKNgQY1ygzSjd4QOji6ijGN3qv%2B%2Fxj0rXczT0zCj%2BQHxIt9SOJvhs1WvJ%2Fz5Zw3y6FcxqJpkdW9qGy8aDdu%2BMzcscJIHXgyoetwHAc1fHcotIL645jb0OAOXZl1W2ju2YDjlopXjDmScKfLV%2FmZ6sHt2CBtAKrGW1xNMzjNrsX7PC6liXsRqlk3XPHtaYAvPg1RpFPG1rAF1652fmLHZeuUzAGrkcudmo5cqhg0FgHK4SDf9nEhw6X%2Fj1R28uMHjWBg8JQAK7lkERLV3PkV%2Ffc7C9U%2BNBhiJl3iE4WmMOzO1iN7Y45PdWarZkLML7Op74GOqUBDAWaEEddFBEXPc1f9sw4ZeaxksPT1Ckbff%2BzXNm%2BAE3AdxFiUdWxv3I65MM3lCJjEeSBbc1v%2FR4vdVl706m%2F0zuvoqXvKLK2lQngJ6bCjlYs5IT%2BM7q6byleJRRFCwKsKe2pmZEp921ZcSSy%2FRpy6ap4tpoY42TrLSihfD4tfoVbozkNkbKJR4HfsJ6Uv%2FbUu%2F6CIgvx9n7BfGv9ToX%2Fi7ZLrWAX&X-Amz-Signature=7f0227a144949d051ee09170be247aa75522d2c329c04f6a1f93e22b62656e12&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642COBLKU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0n0pW6MfC0uf1V82AGa1Z5mwZaTZN64VqYKA%2B%2BKWvUAiEAkpjwU4XFNtVwvqMyIqbmy0Wv6Nqj1T9Y5hHgdOHdgEwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCfedR6%2BbKZHPBTRLSrcAzaC3yiwEl3nkopoppATbuNWli3FTrcnSWNP76LCevrhZKhjOIoDkvGV9Jvr2FUOKocPmqAnO9loiem%2BdBcPgSTyywy78eFcqwNf%2BeWj245llMhgQf3%2B69%2FIZrfSfNwICzzz6efrianTZYcpA%2FeKIfuJ6G8wzhldlL1IoMMN17A3THLQkqvhIckjaNYMEQD7%2F5TpFKgP4yOBPsrU3gel5H3F%2F0etmrR1ovJ8bJwNVFDp5KeHh6v2s%2Fp2iZh2FKu07HSUxMzkue8LEljKHit7N3wxRndNLPzeFoVcAclGhlq9T31M7ppc7HqOq1RUNt928MbKNgQY1ygzSjd4QOji6ijGN3qv%2B%2Fxj0rXczT0zCj%2BQHxIt9SOJvhs1WvJ%2Fz5Zw3y6FcxqJpkdW9qGy8aDdu%2BMzcscJIHXgyoetwHAc1fHcotIL645jb0OAOXZl1W2ju2YDjlopXjDmScKfLV%2FmZ6sHt2CBtAKrGW1xNMzjNrsX7PC6liXsRqlk3XPHtaYAvPg1RpFPG1rAF1652fmLHZeuUzAGrkcudmo5cqhg0FgHK4SDf9nEhw6X%2Fj1R28uMHjWBg8JQAK7lkERLV3PkV%2Ffc7C9U%2BNBhiJl3iE4WmMOzO1iN7Y45PdWarZkLML7Op74GOqUBDAWaEEddFBEXPc1f9sw4ZeaxksPT1Ckbff%2BzXNm%2BAE3AdxFiUdWxv3I65MM3lCJjEeSBbc1v%2FR4vdVl706m%2F0zuvoqXvKLK2lQngJ6bCjlYs5IT%2BM7q6byleJRRFCwKsKe2pmZEp921ZcSSy%2FRpy6ap4tpoY42TrLSihfD4tfoVbozkNkbKJR4HfsJ6Uv%2FbUu%2F6CIgvx9n7BfGv9ToX%2Fi7ZLrWAX&X-Amz-Signature=10cc4209aa5e9347403cdda90466f3eec2515d14724f1ddccc341f5dfed26b77&X-Amz-SignedHeaders=host&x-id=GetObject)
