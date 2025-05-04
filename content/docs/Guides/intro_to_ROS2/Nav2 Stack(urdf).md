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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3UCZ5X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCsmrlKaH8p9g8ycHJLPBz17lNPCJyyV9y2KJ1IsOCJoQIhAPQumY7VlO31bIRh2j5Wq08Knne9j9pY0ZwTgU9Nj45mKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZcDzipWlXnXbcjvcq3AOGZ4oJNtY9TulrWn3Gim6dbF5QPYhP891XCx974yGWAQHOCY67L8uLFGzzM5S9ZoPiklVogay7SjEbanJbyKPCXon4TYOokmKEykYT2mNOFx3SjWX5SSQhISMhFvK8gsVk5XaNh%2BaolJEv4ZV%2F%2B6KAa%2Fn4U8dcdcHbKt9XtCvoddh1N2KlA1HUhldbxoulfUV53f0gHxfZZDT4Co0EZ%2Bp0Jls%2FSxlZJ462zzntkVcsXpwz5ZMCPKdvULR7vPqkbI2GwR7Pjors%2F%2B6OTPFvADX9Uog0B20DHjcV9uo6hr8jcN58AL%2BMiJ6tl72upW0%2Fum2mk3sbLuNwV3AYh9gSCKmjq3%2BZofZq%2B2iL5KpvPMwcMvFN1G9SubhuoUtlEaZuDBv6Bo38zSjWgUXU7hcAAkwWkF42BBpibzjgV7mByRFqHbyTo6qCCP%2FwsibWhiMjXrwFhCAQgIlpYwUeqJO5qAFCKFYV7UczhSE5Bu4ipFeJN3IZ0XNUsk1ekAP3shzYe0fZBYErXc%2BEWRtENFIyLQDLWiwRstHU8zhPats%2F2nRpHpfj0x6DX%2BFq4QYwygvBzmbjCYYoYz1rspftxPDasTBl69YWKtLsTLUL%2BQi0YW5OxkWqf%2BGYasCvc%2FLDXzDl8NrABjqkAWBvyWlr%2Ff%2FteUIyDAMSGH5xnxo6xY5l2AVeGdSsSs38GQFUzDcFhMSUNgzSGS5nCouiZoB5fdL7GODiE98Pzg3ZUM87a8djLQ4se6dDTDzIiawKwsLIqqrwHJzfWs36kbi0FKEebVAQianve6NZh%2Bdm7WSmfQIOTHhoMyt4fxJeempyZyH5MXjzYvMqazVYO8xoSqNUi3%2FGeLD8jipRBPSxNMK6&X-Amz-Signature=d8dbf3c7b89925a4f35a470f8d431464ebeb309a833b859387623cf8640ed332&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3UCZ5X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCsmrlKaH8p9g8ycHJLPBz17lNPCJyyV9y2KJ1IsOCJoQIhAPQumY7VlO31bIRh2j5Wq08Knne9j9pY0ZwTgU9Nj45mKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZcDzipWlXnXbcjvcq3AOGZ4oJNtY9TulrWn3Gim6dbF5QPYhP891XCx974yGWAQHOCY67L8uLFGzzM5S9ZoPiklVogay7SjEbanJbyKPCXon4TYOokmKEykYT2mNOFx3SjWX5SSQhISMhFvK8gsVk5XaNh%2BaolJEv4ZV%2F%2B6KAa%2Fn4U8dcdcHbKt9XtCvoddh1N2KlA1HUhldbxoulfUV53f0gHxfZZDT4Co0EZ%2Bp0Jls%2FSxlZJ462zzntkVcsXpwz5ZMCPKdvULR7vPqkbI2GwR7Pjors%2F%2B6OTPFvADX9Uog0B20DHjcV9uo6hr8jcN58AL%2BMiJ6tl72upW0%2Fum2mk3sbLuNwV3AYh9gSCKmjq3%2BZofZq%2B2iL5KpvPMwcMvFN1G9SubhuoUtlEaZuDBv6Bo38zSjWgUXU7hcAAkwWkF42BBpibzjgV7mByRFqHbyTo6qCCP%2FwsibWhiMjXrwFhCAQgIlpYwUeqJO5qAFCKFYV7UczhSE5Bu4ipFeJN3IZ0XNUsk1ekAP3shzYe0fZBYErXc%2BEWRtENFIyLQDLWiwRstHU8zhPats%2F2nRpHpfj0x6DX%2BFq4QYwygvBzmbjCYYoYz1rspftxPDasTBl69YWKtLsTLUL%2BQi0YW5OxkWqf%2BGYasCvc%2FLDXzDl8NrABjqkAWBvyWlr%2Ff%2FteUIyDAMSGH5xnxo6xY5l2AVeGdSsSs38GQFUzDcFhMSUNgzSGS5nCouiZoB5fdL7GODiE98Pzg3ZUM87a8djLQ4se6dDTDzIiawKwsLIqqrwHJzfWs36kbi0FKEebVAQianve6NZh%2Bdm7WSmfQIOTHhoMyt4fxJeempyZyH5MXjzYvMqazVYO8xoSqNUi3%2FGeLD8jipRBPSxNMK6&X-Amz-Signature=1c98b889d97a3fad4679e3d9d57f12ec00bb315191c2de6f66ba442e4e884809&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3UCZ5X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCsmrlKaH8p9g8ycHJLPBz17lNPCJyyV9y2KJ1IsOCJoQIhAPQumY7VlO31bIRh2j5Wq08Knne9j9pY0ZwTgU9Nj45mKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZcDzipWlXnXbcjvcq3AOGZ4oJNtY9TulrWn3Gim6dbF5QPYhP891XCx974yGWAQHOCY67L8uLFGzzM5S9ZoPiklVogay7SjEbanJbyKPCXon4TYOokmKEykYT2mNOFx3SjWX5SSQhISMhFvK8gsVk5XaNh%2BaolJEv4ZV%2F%2B6KAa%2Fn4U8dcdcHbKt9XtCvoddh1N2KlA1HUhldbxoulfUV53f0gHxfZZDT4Co0EZ%2Bp0Jls%2FSxlZJ462zzntkVcsXpwz5ZMCPKdvULR7vPqkbI2GwR7Pjors%2F%2B6OTPFvADX9Uog0B20DHjcV9uo6hr8jcN58AL%2BMiJ6tl72upW0%2Fum2mk3sbLuNwV3AYh9gSCKmjq3%2BZofZq%2B2iL5KpvPMwcMvFN1G9SubhuoUtlEaZuDBv6Bo38zSjWgUXU7hcAAkwWkF42BBpibzjgV7mByRFqHbyTo6qCCP%2FwsibWhiMjXrwFhCAQgIlpYwUeqJO5qAFCKFYV7UczhSE5Bu4ipFeJN3IZ0XNUsk1ekAP3shzYe0fZBYErXc%2BEWRtENFIyLQDLWiwRstHU8zhPats%2F2nRpHpfj0x6DX%2BFq4QYwygvBzmbjCYYoYz1rspftxPDasTBl69YWKtLsTLUL%2BQi0YW5OxkWqf%2BGYasCvc%2FLDXzDl8NrABjqkAWBvyWlr%2Ff%2FteUIyDAMSGH5xnxo6xY5l2AVeGdSsSs38GQFUzDcFhMSUNgzSGS5nCouiZoB5fdL7GODiE98Pzg3ZUM87a8djLQ4se6dDTDzIiawKwsLIqqrwHJzfWs36kbi0FKEebVAQianve6NZh%2Bdm7WSmfQIOTHhoMyt4fxJeempyZyH5MXjzYvMqazVYO8xoSqNUi3%2FGeLD8jipRBPSxNMK6&X-Amz-Signature=565bdba462cafa1b0f24c7438ad4da470f4507a3fa708cfae10d808a01b83fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3UCZ5X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCsmrlKaH8p9g8ycHJLPBz17lNPCJyyV9y2KJ1IsOCJoQIhAPQumY7VlO31bIRh2j5Wq08Knne9j9pY0ZwTgU9Nj45mKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZcDzipWlXnXbcjvcq3AOGZ4oJNtY9TulrWn3Gim6dbF5QPYhP891XCx974yGWAQHOCY67L8uLFGzzM5S9ZoPiklVogay7SjEbanJbyKPCXon4TYOokmKEykYT2mNOFx3SjWX5SSQhISMhFvK8gsVk5XaNh%2BaolJEv4ZV%2F%2B6KAa%2Fn4U8dcdcHbKt9XtCvoddh1N2KlA1HUhldbxoulfUV53f0gHxfZZDT4Co0EZ%2Bp0Jls%2FSxlZJ462zzntkVcsXpwz5ZMCPKdvULR7vPqkbI2GwR7Pjors%2F%2B6OTPFvADX9Uog0B20DHjcV9uo6hr8jcN58AL%2BMiJ6tl72upW0%2Fum2mk3sbLuNwV3AYh9gSCKmjq3%2BZofZq%2B2iL5KpvPMwcMvFN1G9SubhuoUtlEaZuDBv6Bo38zSjWgUXU7hcAAkwWkF42BBpibzjgV7mByRFqHbyTo6qCCP%2FwsibWhiMjXrwFhCAQgIlpYwUeqJO5qAFCKFYV7UczhSE5Bu4ipFeJN3IZ0XNUsk1ekAP3shzYe0fZBYErXc%2BEWRtENFIyLQDLWiwRstHU8zhPats%2F2nRpHpfj0x6DX%2BFq4QYwygvBzmbjCYYoYz1rspftxPDasTBl69YWKtLsTLUL%2BQi0YW5OxkWqf%2BGYasCvc%2FLDXzDl8NrABjqkAWBvyWlr%2Ff%2FteUIyDAMSGH5xnxo6xY5l2AVeGdSsSs38GQFUzDcFhMSUNgzSGS5nCouiZoB5fdL7GODiE98Pzg3ZUM87a8djLQ4se6dDTDzIiawKwsLIqqrwHJzfWs36kbi0FKEebVAQianve6NZh%2Bdm7WSmfQIOTHhoMyt4fxJeempyZyH5MXjzYvMqazVYO8xoSqNUi3%2FGeLD8jipRBPSxNMK6&X-Amz-Signature=e0799d44502a76a65d90dddfbe0017349f2346e8d7b7d9b13a1bd24b5146bdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3UCZ5X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCsmrlKaH8p9g8ycHJLPBz17lNPCJyyV9y2KJ1IsOCJoQIhAPQumY7VlO31bIRh2j5Wq08Knne9j9pY0ZwTgU9Nj45mKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZcDzipWlXnXbcjvcq3AOGZ4oJNtY9TulrWn3Gim6dbF5QPYhP891XCx974yGWAQHOCY67L8uLFGzzM5S9ZoPiklVogay7SjEbanJbyKPCXon4TYOokmKEykYT2mNOFx3SjWX5SSQhISMhFvK8gsVk5XaNh%2BaolJEv4ZV%2F%2B6KAa%2Fn4U8dcdcHbKt9XtCvoddh1N2KlA1HUhldbxoulfUV53f0gHxfZZDT4Co0EZ%2Bp0Jls%2FSxlZJ462zzntkVcsXpwz5ZMCPKdvULR7vPqkbI2GwR7Pjors%2F%2B6OTPFvADX9Uog0B20DHjcV9uo6hr8jcN58AL%2BMiJ6tl72upW0%2Fum2mk3sbLuNwV3AYh9gSCKmjq3%2BZofZq%2B2iL5KpvPMwcMvFN1G9SubhuoUtlEaZuDBv6Bo38zSjWgUXU7hcAAkwWkF42BBpibzjgV7mByRFqHbyTo6qCCP%2FwsibWhiMjXrwFhCAQgIlpYwUeqJO5qAFCKFYV7UczhSE5Bu4ipFeJN3IZ0XNUsk1ekAP3shzYe0fZBYErXc%2BEWRtENFIyLQDLWiwRstHU8zhPats%2F2nRpHpfj0x6DX%2BFq4QYwygvBzmbjCYYoYz1rspftxPDasTBl69YWKtLsTLUL%2BQi0YW5OxkWqf%2BGYasCvc%2FLDXzDl8NrABjqkAWBvyWlr%2Ff%2FteUIyDAMSGH5xnxo6xY5l2AVeGdSsSs38GQFUzDcFhMSUNgzSGS5nCouiZoB5fdL7GODiE98Pzg3ZUM87a8djLQ4se6dDTDzIiawKwsLIqqrwHJzfWs36kbi0FKEebVAQianve6NZh%2Bdm7WSmfQIOTHhoMyt4fxJeempyZyH5MXjzYvMqazVYO8xoSqNUi3%2FGeLD8jipRBPSxNMK6&X-Amz-Signature=bdc2290d070f63ccbfb984447fe0e2bff71b4f7706ebbcc5f2221b743e094a24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3UCZ5X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCsmrlKaH8p9g8ycHJLPBz17lNPCJyyV9y2KJ1IsOCJoQIhAPQumY7VlO31bIRh2j5Wq08Knne9j9pY0ZwTgU9Nj45mKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZcDzipWlXnXbcjvcq3AOGZ4oJNtY9TulrWn3Gim6dbF5QPYhP891XCx974yGWAQHOCY67L8uLFGzzM5S9ZoPiklVogay7SjEbanJbyKPCXon4TYOokmKEykYT2mNOFx3SjWX5SSQhISMhFvK8gsVk5XaNh%2BaolJEv4ZV%2F%2B6KAa%2Fn4U8dcdcHbKt9XtCvoddh1N2KlA1HUhldbxoulfUV53f0gHxfZZDT4Co0EZ%2Bp0Jls%2FSxlZJ462zzntkVcsXpwz5ZMCPKdvULR7vPqkbI2GwR7Pjors%2F%2B6OTPFvADX9Uog0B20DHjcV9uo6hr8jcN58AL%2BMiJ6tl72upW0%2Fum2mk3sbLuNwV3AYh9gSCKmjq3%2BZofZq%2B2iL5KpvPMwcMvFN1G9SubhuoUtlEaZuDBv6Bo38zSjWgUXU7hcAAkwWkF42BBpibzjgV7mByRFqHbyTo6qCCP%2FwsibWhiMjXrwFhCAQgIlpYwUeqJO5qAFCKFYV7UczhSE5Bu4ipFeJN3IZ0XNUsk1ekAP3shzYe0fZBYErXc%2BEWRtENFIyLQDLWiwRstHU8zhPats%2F2nRpHpfj0x6DX%2BFq4QYwygvBzmbjCYYoYz1rspftxPDasTBl69YWKtLsTLUL%2BQi0YW5OxkWqf%2BGYasCvc%2FLDXzDl8NrABjqkAWBvyWlr%2Ff%2FteUIyDAMSGH5xnxo6xY5l2AVeGdSsSs38GQFUzDcFhMSUNgzSGS5nCouiZoB5fdL7GODiE98Pzg3ZUM87a8djLQ4se6dDTDzIiawKwsLIqqrwHJzfWs36kbi0FKEebVAQianve6NZh%2Bdm7WSmfQIOTHhoMyt4fxJeempyZyH5MXjzYvMqazVYO8xoSqNUi3%2FGeLD8jipRBPSxNMK6&X-Amz-Signature=c2138311cc11d7cf6dd18d332634afe9b0dfee6266966fb13c353c3c9c29a2c7&X-Amz-SignedHeaders=host&x-id=GetObject)
