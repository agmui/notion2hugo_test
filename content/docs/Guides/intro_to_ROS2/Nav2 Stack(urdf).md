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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYSUN24%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1dfGOR6QtZhB%2F%2B6LXcWvHEkNe5ydQDnVK6TxYumn6QIge08rorF25GOAMYc%2Bn021DrP6NkYuS6KQdyhxexy59RAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP811WQueRJfLs6h7SrcA9co82aKF%2Bhs9ubTr3%2F4ED2G7mrs%2FxMeLMi7ibYJqnqNrsnjbZlj9Ai%2Bm6G1A4TCemO6vFLYhNX7WW8Azd0GM62z228Eq4wUs9AWNbNKzMedPbzSLWL90NnBT3Le9MPcpJtK9J2sNw68zI1BH0vYw5OtlAulfFiFYZn4TcdxRGFnCzzid6Jf3Eq8o5R9VQtIvhNdOGqjblWhG76ilLhPJefHJytjVUi8wsUEVT%2BwphrFAGC3AlUMz4Ymt8T2OiwivE1PxqaW9Nf446hE1gxJtFt%2BO1SI8%2BKosofNmS2PmClNfDnE7FsBa0EXl3Bf07kTf3YgX9ZiFbAvlzsw%2Bb07MOf8OdMYTPihjwtpQZyoMDQJQXSA%2BNokZ0Nwahnh7HwL%2BKcENWXZhriCwK7xiMiKVVT4E3Fy6u8Ru%2FC6evbdmgtlS%2F4qNEZrGf2sYZmIv7J8dK28fukv%2B99zB6njbH9%2BGU7UIoNPwwGs1SuqAwAfzrZOjppT9ExiqZAg9lURGe4sQXot1nTOnp7cE0fyDT%2Bsr%2BeH9Z73MbctnUIg9s9WwAYYbGp763x1aOyTqYtFZACitNJ3kA8r%2Fffsgjl9nl7wPWXAZ9WIVFUf56NBwCkRhRWT%2B1E4ukQ%2BMWsy3Rp3MNrW%2FL8GOqUB1%2BlqyFy4uK2YZmxAk1c3LA2dJsNz6tTg9EQ68Ugup6t0hD%2B70fYORhf3o1IL%2BugkDvhJdBa7YzsMU%2B533VJgAt8diPhy8t%2BxePXshGK8mnDjk2pk6jJvlXPlV3i5aRKXhTlwZM9Opw6%2BW9UidsDIg1WXaaxIvz3qmAfrgu9hseIbl7cIVQ1jl%2ByNW9P%2FizSUJht6th4SLlQcKL%2BetsAC49CCW19h&X-Amz-Signature=f7c6675527def2ec5f3bbed04d72fba31ae0cac1ca5e282abf5043d2dca55d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYSUN24%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1dfGOR6QtZhB%2F%2B6LXcWvHEkNe5ydQDnVK6TxYumn6QIge08rorF25GOAMYc%2Bn021DrP6NkYuS6KQdyhxexy59RAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP811WQueRJfLs6h7SrcA9co82aKF%2Bhs9ubTr3%2F4ED2G7mrs%2FxMeLMi7ibYJqnqNrsnjbZlj9Ai%2Bm6G1A4TCemO6vFLYhNX7WW8Azd0GM62z228Eq4wUs9AWNbNKzMedPbzSLWL90NnBT3Le9MPcpJtK9J2sNw68zI1BH0vYw5OtlAulfFiFYZn4TcdxRGFnCzzid6Jf3Eq8o5R9VQtIvhNdOGqjblWhG76ilLhPJefHJytjVUi8wsUEVT%2BwphrFAGC3AlUMz4Ymt8T2OiwivE1PxqaW9Nf446hE1gxJtFt%2BO1SI8%2BKosofNmS2PmClNfDnE7FsBa0EXl3Bf07kTf3YgX9ZiFbAvlzsw%2Bb07MOf8OdMYTPihjwtpQZyoMDQJQXSA%2BNokZ0Nwahnh7HwL%2BKcENWXZhriCwK7xiMiKVVT4E3Fy6u8Ru%2FC6evbdmgtlS%2F4qNEZrGf2sYZmIv7J8dK28fukv%2B99zB6njbH9%2BGU7UIoNPwwGs1SuqAwAfzrZOjppT9ExiqZAg9lURGe4sQXot1nTOnp7cE0fyDT%2Bsr%2BeH9Z73MbctnUIg9s9WwAYYbGp763x1aOyTqYtFZACitNJ3kA8r%2Fffsgjl9nl7wPWXAZ9WIVFUf56NBwCkRhRWT%2B1E4ukQ%2BMWsy3Rp3MNrW%2FL8GOqUB1%2BlqyFy4uK2YZmxAk1c3LA2dJsNz6tTg9EQ68Ugup6t0hD%2B70fYORhf3o1IL%2BugkDvhJdBa7YzsMU%2B533VJgAt8diPhy8t%2BxePXshGK8mnDjk2pk6jJvlXPlV3i5aRKXhTlwZM9Opw6%2BW9UidsDIg1WXaaxIvz3qmAfrgu9hseIbl7cIVQ1jl%2ByNW9P%2FizSUJht6th4SLlQcKL%2BetsAC49CCW19h&X-Amz-Signature=81d662929330b91a41149df54fa61898efef891e0425b1ac144e65968cdb6b73&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYSUN24%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1dfGOR6QtZhB%2F%2B6LXcWvHEkNe5ydQDnVK6TxYumn6QIge08rorF25GOAMYc%2Bn021DrP6NkYuS6KQdyhxexy59RAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP811WQueRJfLs6h7SrcA9co82aKF%2Bhs9ubTr3%2F4ED2G7mrs%2FxMeLMi7ibYJqnqNrsnjbZlj9Ai%2Bm6G1A4TCemO6vFLYhNX7WW8Azd0GM62z228Eq4wUs9AWNbNKzMedPbzSLWL90NnBT3Le9MPcpJtK9J2sNw68zI1BH0vYw5OtlAulfFiFYZn4TcdxRGFnCzzid6Jf3Eq8o5R9VQtIvhNdOGqjblWhG76ilLhPJefHJytjVUi8wsUEVT%2BwphrFAGC3AlUMz4Ymt8T2OiwivE1PxqaW9Nf446hE1gxJtFt%2BO1SI8%2BKosofNmS2PmClNfDnE7FsBa0EXl3Bf07kTf3YgX9ZiFbAvlzsw%2Bb07MOf8OdMYTPihjwtpQZyoMDQJQXSA%2BNokZ0Nwahnh7HwL%2BKcENWXZhriCwK7xiMiKVVT4E3Fy6u8Ru%2FC6evbdmgtlS%2F4qNEZrGf2sYZmIv7J8dK28fukv%2B99zB6njbH9%2BGU7UIoNPwwGs1SuqAwAfzrZOjppT9ExiqZAg9lURGe4sQXot1nTOnp7cE0fyDT%2Bsr%2BeH9Z73MbctnUIg9s9WwAYYbGp763x1aOyTqYtFZACitNJ3kA8r%2Fffsgjl9nl7wPWXAZ9WIVFUf56NBwCkRhRWT%2B1E4ukQ%2BMWsy3Rp3MNrW%2FL8GOqUB1%2BlqyFy4uK2YZmxAk1c3LA2dJsNz6tTg9EQ68Ugup6t0hD%2B70fYORhf3o1IL%2BugkDvhJdBa7YzsMU%2B533VJgAt8diPhy8t%2BxePXshGK8mnDjk2pk6jJvlXPlV3i5aRKXhTlwZM9Opw6%2BW9UidsDIg1WXaaxIvz3qmAfrgu9hseIbl7cIVQ1jl%2ByNW9P%2FizSUJht6th4SLlQcKL%2BetsAC49CCW19h&X-Amz-Signature=8415d3376879dd90caead38359230e407d8f5e8480f1c7a1a49b637c836fba27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYSUN24%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1dfGOR6QtZhB%2F%2B6LXcWvHEkNe5ydQDnVK6TxYumn6QIge08rorF25GOAMYc%2Bn021DrP6NkYuS6KQdyhxexy59RAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP811WQueRJfLs6h7SrcA9co82aKF%2Bhs9ubTr3%2F4ED2G7mrs%2FxMeLMi7ibYJqnqNrsnjbZlj9Ai%2Bm6G1A4TCemO6vFLYhNX7WW8Azd0GM62z228Eq4wUs9AWNbNKzMedPbzSLWL90NnBT3Le9MPcpJtK9J2sNw68zI1BH0vYw5OtlAulfFiFYZn4TcdxRGFnCzzid6Jf3Eq8o5R9VQtIvhNdOGqjblWhG76ilLhPJefHJytjVUi8wsUEVT%2BwphrFAGC3AlUMz4Ymt8T2OiwivE1PxqaW9Nf446hE1gxJtFt%2BO1SI8%2BKosofNmS2PmClNfDnE7FsBa0EXl3Bf07kTf3YgX9ZiFbAvlzsw%2Bb07MOf8OdMYTPihjwtpQZyoMDQJQXSA%2BNokZ0Nwahnh7HwL%2BKcENWXZhriCwK7xiMiKVVT4E3Fy6u8Ru%2FC6evbdmgtlS%2F4qNEZrGf2sYZmIv7J8dK28fukv%2B99zB6njbH9%2BGU7UIoNPwwGs1SuqAwAfzrZOjppT9ExiqZAg9lURGe4sQXot1nTOnp7cE0fyDT%2Bsr%2BeH9Z73MbctnUIg9s9WwAYYbGp763x1aOyTqYtFZACitNJ3kA8r%2Fffsgjl9nl7wPWXAZ9WIVFUf56NBwCkRhRWT%2B1E4ukQ%2BMWsy3Rp3MNrW%2FL8GOqUB1%2BlqyFy4uK2YZmxAk1c3LA2dJsNz6tTg9EQ68Ugup6t0hD%2B70fYORhf3o1IL%2BugkDvhJdBa7YzsMU%2B533VJgAt8diPhy8t%2BxePXshGK8mnDjk2pk6jJvlXPlV3i5aRKXhTlwZM9Opw6%2BW9UidsDIg1WXaaxIvz3qmAfrgu9hseIbl7cIVQ1jl%2ByNW9P%2FizSUJht6th4SLlQcKL%2BetsAC49CCW19h&X-Amz-Signature=bacbb5c979252fe6ab2bd5cfa8a88a7ee00440f12162b1c8211f21fbb93df7de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYSUN24%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1dfGOR6QtZhB%2F%2B6LXcWvHEkNe5ydQDnVK6TxYumn6QIge08rorF25GOAMYc%2Bn021DrP6NkYuS6KQdyhxexy59RAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP811WQueRJfLs6h7SrcA9co82aKF%2Bhs9ubTr3%2F4ED2G7mrs%2FxMeLMi7ibYJqnqNrsnjbZlj9Ai%2Bm6G1A4TCemO6vFLYhNX7WW8Azd0GM62z228Eq4wUs9AWNbNKzMedPbzSLWL90NnBT3Le9MPcpJtK9J2sNw68zI1BH0vYw5OtlAulfFiFYZn4TcdxRGFnCzzid6Jf3Eq8o5R9VQtIvhNdOGqjblWhG76ilLhPJefHJytjVUi8wsUEVT%2BwphrFAGC3AlUMz4Ymt8T2OiwivE1PxqaW9Nf446hE1gxJtFt%2BO1SI8%2BKosofNmS2PmClNfDnE7FsBa0EXl3Bf07kTf3YgX9ZiFbAvlzsw%2Bb07MOf8OdMYTPihjwtpQZyoMDQJQXSA%2BNokZ0Nwahnh7HwL%2BKcENWXZhriCwK7xiMiKVVT4E3Fy6u8Ru%2FC6evbdmgtlS%2F4qNEZrGf2sYZmIv7J8dK28fukv%2B99zB6njbH9%2BGU7UIoNPwwGs1SuqAwAfzrZOjppT9ExiqZAg9lURGe4sQXot1nTOnp7cE0fyDT%2Bsr%2BeH9Z73MbctnUIg9s9WwAYYbGp763x1aOyTqYtFZACitNJ3kA8r%2Fffsgjl9nl7wPWXAZ9WIVFUf56NBwCkRhRWT%2B1E4ukQ%2BMWsy3Rp3MNrW%2FL8GOqUB1%2BlqyFy4uK2YZmxAk1c3LA2dJsNz6tTg9EQ68Ugup6t0hD%2B70fYORhf3o1IL%2BugkDvhJdBa7YzsMU%2B533VJgAt8diPhy8t%2BxePXshGK8mnDjk2pk6jJvlXPlV3i5aRKXhTlwZM9Opw6%2BW9UidsDIg1WXaaxIvz3qmAfrgu9hseIbl7cIVQ1jl%2ByNW9P%2FizSUJht6th4SLlQcKL%2BetsAC49CCW19h&X-Amz-Signature=289b0095af3f245bdfd422c5732ac70b65f2a6db07f1c19c9ba75be496fe4d94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYSUN24%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1dfGOR6QtZhB%2F%2B6LXcWvHEkNe5ydQDnVK6TxYumn6QIge08rorF25GOAMYc%2Bn021DrP6NkYuS6KQdyhxexy59RAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP811WQueRJfLs6h7SrcA9co82aKF%2Bhs9ubTr3%2F4ED2G7mrs%2FxMeLMi7ibYJqnqNrsnjbZlj9Ai%2Bm6G1A4TCemO6vFLYhNX7WW8Azd0GM62z228Eq4wUs9AWNbNKzMedPbzSLWL90NnBT3Le9MPcpJtK9J2sNw68zI1BH0vYw5OtlAulfFiFYZn4TcdxRGFnCzzid6Jf3Eq8o5R9VQtIvhNdOGqjblWhG76ilLhPJefHJytjVUi8wsUEVT%2BwphrFAGC3AlUMz4Ymt8T2OiwivE1PxqaW9Nf446hE1gxJtFt%2BO1SI8%2BKosofNmS2PmClNfDnE7FsBa0EXl3Bf07kTf3YgX9ZiFbAvlzsw%2Bb07MOf8OdMYTPihjwtpQZyoMDQJQXSA%2BNokZ0Nwahnh7HwL%2BKcENWXZhriCwK7xiMiKVVT4E3Fy6u8Ru%2FC6evbdmgtlS%2F4qNEZrGf2sYZmIv7J8dK28fukv%2B99zB6njbH9%2BGU7UIoNPwwGs1SuqAwAfzrZOjppT9ExiqZAg9lURGe4sQXot1nTOnp7cE0fyDT%2Bsr%2BeH9Z73MbctnUIg9s9WwAYYbGp763x1aOyTqYtFZACitNJ3kA8r%2Fffsgjl9nl7wPWXAZ9WIVFUf56NBwCkRhRWT%2B1E4ukQ%2BMWsy3Rp3MNrW%2FL8GOqUB1%2BlqyFy4uK2YZmxAk1c3LA2dJsNz6tTg9EQ68Ugup6t0hD%2B70fYORhf3o1IL%2BugkDvhJdBa7YzsMU%2B533VJgAt8diPhy8t%2BxePXshGK8mnDjk2pk6jJvlXPlV3i5aRKXhTlwZM9Opw6%2BW9UidsDIg1WXaaxIvz3qmAfrgu9hseIbl7cIVQ1jl%2ByNW9P%2FizSUJht6th4SLlQcKL%2BetsAC49CCW19h&X-Amz-Signature=935ebd41e9e1eefa5f4c1ee3aa1f31938dd621b6be1b6e1dfd039f6d3ae9238e&X-Amz-SignedHeaders=host&x-id=GetObject)
