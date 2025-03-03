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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTPTLIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXz6yzROk839hps1gwRn26tBu7t6Kaz9bJk5tWOxatAIgWLGOxJitZu9yQzNekM4puxkz0fNYTKi2px7lqb5r8UwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0J44O7PKnGTx66xSrcA3CzhxuoZzVSvVclqtM98Sg6hK%2BWXfKAmraN7Y14ILwFICKzPSOmuhzb7pOoUBzMvsxhclU10dl%2FjQ3tUAKlT9caWLdgjYBREt0H9iIHKJbmzaYbS9FkkgQFX9qFpjsYw6bgF5Nu1RAES0nlH8v4aVN352gl6zRZR2v5DLS1Ead%2FdnvwRWGbr5%2FlxnpfOH48bVroWrHVq6H%2BqCcx4Qp5CxnzNgrn07EhO4s2EUFtz1omMflynjm5MdNqBMDOfC8TiEL0fmIiHPckgNO28T0ZBkl8Kwb3xGzy9MbAckELhU31J3jhyLxmg7CWVnt3WN8qECxBCxtvFIRA3cwvvpRmLr7bdxJBK%2BgJWYg%2BbqJoQ%2F7iRymW%2FLHIXIqolyNloqXCFRVBd0utU03lBeMzuxczFUtbJRmg7nzHNTtYFeDB7DQ%2Fy7V0YWLoZo2D6q8BIlsok1cTvMc8CKmpUrFaila4jkVJahfYFBmZ1PNUi0r4keJai9JOtPuqfJhsv%2BjCrqtopWi3XlFT8WwRTUclDd%2FcyoXjjK3grybyppZ14ETxINT%2Fqvd09RHmfiG%2Faj4Odo8jR1cOg9gnNrmNWAxCY8ga5CDQHTECmRK2S6W7NdHmpwW0tr5%2B99%2FGA6s%2FiINHMKj9lb4GOqUB8MIm8VQveXIG5%2BMyYRFsV2PyVdmC7eWe7ZJ8rnD3lrRlQMRrgZYEygJcADpOIfz%2BqaTXLdvh0eytTfa8vv1zspztwl3ech2AbePdGbwS6ePi5I7uQUwb4%2FCDqVB8GwT9pnG4YJc5Egbjjqe96dznfSZT6mHPd6DAZT4N%2BORIwy80E9NmnQmoUIZHasVhQECQK9Wn5MysAH%2FlBekB3CVAja2iQBmU&X-Amz-Signature=eb74f446831dc7348df8e0622ce14c349e134b12760ac5a4cb373db0ffb94e56&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTPTLIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXz6yzROk839hps1gwRn26tBu7t6Kaz9bJk5tWOxatAIgWLGOxJitZu9yQzNekM4puxkz0fNYTKi2px7lqb5r8UwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0J44O7PKnGTx66xSrcA3CzhxuoZzVSvVclqtM98Sg6hK%2BWXfKAmraN7Y14ILwFICKzPSOmuhzb7pOoUBzMvsxhclU10dl%2FjQ3tUAKlT9caWLdgjYBREt0H9iIHKJbmzaYbS9FkkgQFX9qFpjsYw6bgF5Nu1RAES0nlH8v4aVN352gl6zRZR2v5DLS1Ead%2FdnvwRWGbr5%2FlxnpfOH48bVroWrHVq6H%2BqCcx4Qp5CxnzNgrn07EhO4s2EUFtz1omMflynjm5MdNqBMDOfC8TiEL0fmIiHPckgNO28T0ZBkl8Kwb3xGzy9MbAckELhU31J3jhyLxmg7CWVnt3WN8qECxBCxtvFIRA3cwvvpRmLr7bdxJBK%2BgJWYg%2BbqJoQ%2F7iRymW%2FLHIXIqolyNloqXCFRVBd0utU03lBeMzuxczFUtbJRmg7nzHNTtYFeDB7DQ%2Fy7V0YWLoZo2D6q8BIlsok1cTvMc8CKmpUrFaila4jkVJahfYFBmZ1PNUi0r4keJai9JOtPuqfJhsv%2BjCrqtopWi3XlFT8WwRTUclDd%2FcyoXjjK3grybyppZ14ETxINT%2Fqvd09RHmfiG%2Faj4Odo8jR1cOg9gnNrmNWAxCY8ga5CDQHTECmRK2S6W7NdHmpwW0tr5%2B99%2FGA6s%2FiINHMKj9lb4GOqUB8MIm8VQveXIG5%2BMyYRFsV2PyVdmC7eWe7ZJ8rnD3lrRlQMRrgZYEygJcADpOIfz%2BqaTXLdvh0eytTfa8vv1zspztwl3ech2AbePdGbwS6ePi5I7uQUwb4%2FCDqVB8GwT9pnG4YJc5Egbjjqe96dznfSZT6mHPd6DAZT4N%2BORIwy80E9NmnQmoUIZHasVhQECQK9Wn5MysAH%2FlBekB3CVAja2iQBmU&X-Amz-Signature=c725b5cea24a613badab04f22984af32036c7a42626576030f2e91b6c9da24d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTPTLIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXz6yzROk839hps1gwRn26tBu7t6Kaz9bJk5tWOxatAIgWLGOxJitZu9yQzNekM4puxkz0fNYTKi2px7lqb5r8UwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0J44O7PKnGTx66xSrcA3CzhxuoZzVSvVclqtM98Sg6hK%2BWXfKAmraN7Y14ILwFICKzPSOmuhzb7pOoUBzMvsxhclU10dl%2FjQ3tUAKlT9caWLdgjYBREt0H9iIHKJbmzaYbS9FkkgQFX9qFpjsYw6bgF5Nu1RAES0nlH8v4aVN352gl6zRZR2v5DLS1Ead%2FdnvwRWGbr5%2FlxnpfOH48bVroWrHVq6H%2BqCcx4Qp5CxnzNgrn07EhO4s2EUFtz1omMflynjm5MdNqBMDOfC8TiEL0fmIiHPckgNO28T0ZBkl8Kwb3xGzy9MbAckELhU31J3jhyLxmg7CWVnt3WN8qECxBCxtvFIRA3cwvvpRmLr7bdxJBK%2BgJWYg%2BbqJoQ%2F7iRymW%2FLHIXIqolyNloqXCFRVBd0utU03lBeMzuxczFUtbJRmg7nzHNTtYFeDB7DQ%2Fy7V0YWLoZo2D6q8BIlsok1cTvMc8CKmpUrFaila4jkVJahfYFBmZ1PNUi0r4keJai9JOtPuqfJhsv%2BjCrqtopWi3XlFT8WwRTUclDd%2FcyoXjjK3grybyppZ14ETxINT%2Fqvd09RHmfiG%2Faj4Odo8jR1cOg9gnNrmNWAxCY8ga5CDQHTECmRK2S6W7NdHmpwW0tr5%2B99%2FGA6s%2FiINHMKj9lb4GOqUB8MIm8VQveXIG5%2BMyYRFsV2PyVdmC7eWe7ZJ8rnD3lrRlQMRrgZYEygJcADpOIfz%2BqaTXLdvh0eytTfa8vv1zspztwl3ech2AbePdGbwS6ePi5I7uQUwb4%2FCDqVB8GwT9pnG4YJc5Egbjjqe96dznfSZT6mHPd6DAZT4N%2BORIwy80E9NmnQmoUIZHasVhQECQK9Wn5MysAH%2FlBekB3CVAja2iQBmU&X-Amz-Signature=0ebbacf9f5087334cc86d9a0250b031914527eda23f6e786ee87472340cdc0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTPTLIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXz6yzROk839hps1gwRn26tBu7t6Kaz9bJk5tWOxatAIgWLGOxJitZu9yQzNekM4puxkz0fNYTKi2px7lqb5r8UwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0J44O7PKnGTx66xSrcA3CzhxuoZzVSvVclqtM98Sg6hK%2BWXfKAmraN7Y14ILwFICKzPSOmuhzb7pOoUBzMvsxhclU10dl%2FjQ3tUAKlT9caWLdgjYBREt0H9iIHKJbmzaYbS9FkkgQFX9qFpjsYw6bgF5Nu1RAES0nlH8v4aVN352gl6zRZR2v5DLS1Ead%2FdnvwRWGbr5%2FlxnpfOH48bVroWrHVq6H%2BqCcx4Qp5CxnzNgrn07EhO4s2EUFtz1omMflynjm5MdNqBMDOfC8TiEL0fmIiHPckgNO28T0ZBkl8Kwb3xGzy9MbAckELhU31J3jhyLxmg7CWVnt3WN8qECxBCxtvFIRA3cwvvpRmLr7bdxJBK%2BgJWYg%2BbqJoQ%2F7iRymW%2FLHIXIqolyNloqXCFRVBd0utU03lBeMzuxczFUtbJRmg7nzHNTtYFeDB7DQ%2Fy7V0YWLoZo2D6q8BIlsok1cTvMc8CKmpUrFaila4jkVJahfYFBmZ1PNUi0r4keJai9JOtPuqfJhsv%2BjCrqtopWi3XlFT8WwRTUclDd%2FcyoXjjK3grybyppZ14ETxINT%2Fqvd09RHmfiG%2Faj4Odo8jR1cOg9gnNrmNWAxCY8ga5CDQHTECmRK2S6W7NdHmpwW0tr5%2B99%2FGA6s%2FiINHMKj9lb4GOqUB8MIm8VQveXIG5%2BMyYRFsV2PyVdmC7eWe7ZJ8rnD3lrRlQMRrgZYEygJcADpOIfz%2BqaTXLdvh0eytTfa8vv1zspztwl3ech2AbePdGbwS6ePi5I7uQUwb4%2FCDqVB8GwT9pnG4YJc5Egbjjqe96dznfSZT6mHPd6DAZT4N%2BORIwy80E9NmnQmoUIZHasVhQECQK9Wn5MysAH%2FlBekB3CVAja2iQBmU&X-Amz-Signature=2ffb8a2bc7f8f999fa89d82e43f30f72a88aa3aa24566725886a8d84a3c84bde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTPTLIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXz6yzROk839hps1gwRn26tBu7t6Kaz9bJk5tWOxatAIgWLGOxJitZu9yQzNekM4puxkz0fNYTKi2px7lqb5r8UwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0J44O7PKnGTx66xSrcA3CzhxuoZzVSvVclqtM98Sg6hK%2BWXfKAmraN7Y14ILwFICKzPSOmuhzb7pOoUBzMvsxhclU10dl%2FjQ3tUAKlT9caWLdgjYBREt0H9iIHKJbmzaYbS9FkkgQFX9qFpjsYw6bgF5Nu1RAES0nlH8v4aVN352gl6zRZR2v5DLS1Ead%2FdnvwRWGbr5%2FlxnpfOH48bVroWrHVq6H%2BqCcx4Qp5CxnzNgrn07EhO4s2EUFtz1omMflynjm5MdNqBMDOfC8TiEL0fmIiHPckgNO28T0ZBkl8Kwb3xGzy9MbAckELhU31J3jhyLxmg7CWVnt3WN8qECxBCxtvFIRA3cwvvpRmLr7bdxJBK%2BgJWYg%2BbqJoQ%2F7iRymW%2FLHIXIqolyNloqXCFRVBd0utU03lBeMzuxczFUtbJRmg7nzHNTtYFeDB7DQ%2Fy7V0YWLoZo2D6q8BIlsok1cTvMc8CKmpUrFaila4jkVJahfYFBmZ1PNUi0r4keJai9JOtPuqfJhsv%2BjCrqtopWi3XlFT8WwRTUclDd%2FcyoXjjK3grybyppZ14ETxINT%2Fqvd09RHmfiG%2Faj4Odo8jR1cOg9gnNrmNWAxCY8ga5CDQHTECmRK2S6W7NdHmpwW0tr5%2B99%2FGA6s%2FiINHMKj9lb4GOqUB8MIm8VQveXIG5%2BMyYRFsV2PyVdmC7eWe7ZJ8rnD3lrRlQMRrgZYEygJcADpOIfz%2BqaTXLdvh0eytTfa8vv1zspztwl3ech2AbePdGbwS6ePi5I7uQUwb4%2FCDqVB8GwT9pnG4YJc5Egbjjqe96dznfSZT6mHPd6DAZT4N%2BORIwy80E9NmnQmoUIZHasVhQECQK9Wn5MysAH%2FlBekB3CVAja2iQBmU&X-Amz-Signature=cab2f4d8d102a858b8389e83be96e9c68756842eb1b6537f8b69bb1de44aadb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTPTLIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXz6yzROk839hps1gwRn26tBu7t6Kaz9bJk5tWOxatAIgWLGOxJitZu9yQzNekM4puxkz0fNYTKi2px7lqb5r8UwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0J44O7PKnGTx66xSrcA3CzhxuoZzVSvVclqtM98Sg6hK%2BWXfKAmraN7Y14ILwFICKzPSOmuhzb7pOoUBzMvsxhclU10dl%2FjQ3tUAKlT9caWLdgjYBREt0H9iIHKJbmzaYbS9FkkgQFX9qFpjsYw6bgF5Nu1RAES0nlH8v4aVN352gl6zRZR2v5DLS1Ead%2FdnvwRWGbr5%2FlxnpfOH48bVroWrHVq6H%2BqCcx4Qp5CxnzNgrn07EhO4s2EUFtz1omMflynjm5MdNqBMDOfC8TiEL0fmIiHPckgNO28T0ZBkl8Kwb3xGzy9MbAckELhU31J3jhyLxmg7CWVnt3WN8qECxBCxtvFIRA3cwvvpRmLr7bdxJBK%2BgJWYg%2BbqJoQ%2F7iRymW%2FLHIXIqolyNloqXCFRVBd0utU03lBeMzuxczFUtbJRmg7nzHNTtYFeDB7DQ%2Fy7V0YWLoZo2D6q8BIlsok1cTvMc8CKmpUrFaila4jkVJahfYFBmZ1PNUi0r4keJai9JOtPuqfJhsv%2BjCrqtopWi3XlFT8WwRTUclDd%2FcyoXjjK3grybyppZ14ETxINT%2Fqvd09RHmfiG%2Faj4Odo8jR1cOg9gnNrmNWAxCY8ga5CDQHTECmRK2S6W7NdHmpwW0tr5%2B99%2FGA6s%2FiINHMKj9lb4GOqUB8MIm8VQveXIG5%2BMyYRFsV2PyVdmC7eWe7ZJ8rnD3lrRlQMRrgZYEygJcADpOIfz%2BqaTXLdvh0eytTfa8vv1zspztwl3ech2AbePdGbwS6ePi5I7uQUwb4%2FCDqVB8GwT9pnG4YJc5Egbjjqe96dznfSZT6mHPd6DAZT4N%2BORIwy80E9NmnQmoUIZHasVhQECQK9Wn5MysAH%2FlBekB3CVAja2iQBmU&X-Amz-Signature=93e1e360e1a0570cd62a768e7b52a031c1162226a098281d151cb13c15e638c8&X-Amz-SignedHeaders=host&x-id=GetObject)
