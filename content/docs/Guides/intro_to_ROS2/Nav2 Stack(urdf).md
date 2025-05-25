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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7XKXV7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDDk2FT6rR55UN3XL8EFBN0PPK0%2BbeFa8lFoE5U16R2%2BwIhAOhA7rTZCD2MKQLmMpOUOMyNh68yAMdbcdzNlQGte1lXKv8DCCYQABoMNjM3NDIzMTgzODA1IgzTOvpExv7%2FNlRrzHQq3ANH2u5yz7oyqZnPFMSjj045kYivR4aeq93VXEtlqndRKaLDODLMZKb3gRwY5wcN8PzCumt7V7QgwHIb7gxkjgBDc5ELB9ey9In1iwHZA%2FuH4nOFWQmaubJciqS6YuVkY7cWkDRyA6PRyHpEM%2FDNpdAsvPNMMtrI34lQvpPQ7Pn%2FC0u0XMNrWYi8xsc%2Fb0MdznAUd1esN%2F4RT0UA8B9f2r6LEaeFlIAkhUEXZbbLodyAkGPlDlMZdTJKdiySk6YX0Jg5gW%2FffjOo6cZK7xkxiK%2BQ2N67fl0MUNmThGq1brNcDrUkjaq1%2BpQEZwe4eU45M4bbqgrIuxwPXDRwoBLh1iRZYgjSI2fjNtkn4Wm2efkBhfb2VzdK%2F0FJvIOS447oGBUIRrwDh0%2BOwRamCkm5XI44pUtAVdas5oAaMYGcBDYAWxzh31LjVNB7c%2ByI%2BVrAkuGkT%2Bce5xd5WpyYQjm8YWa%2FnYKt8Cq2s5iENUJye95Qi4zUGl%2FXopejVZuSAdEktoJ5Po07kdUHwVnB%2Fj1HhPDdAGr3JEbhM1QwXFAT63qlFUHecY7%2Fo5IhBLqMnISwm2t0CuNIOZyj6%2F4f5HY0jVo5ISTFzW%2BLDkX6UFsr3s7G%2BFHYuwMdKW32usY0xzC9ucrBBjqkATHF7bBI3udEv3WC82%2BLdTtMLKgjcnJduHCr6F1Er9WH9mHBviNJChp5ociLTdcid3PwmJt9RIwBGqxP0fIsgxkUHuz6ByU%2FKGHo%2F4iiVoTbXKmJ2Rued1dHqo68mzTK95gR%2B6uq3scqlYlpsJ5IaArRcx8E1Sxz5UWFYOByhnlmDlKb7dHU9zTOY69LBOtjmqoMeefxBUd2RYmA0FiF36ShUTmn&X-Amz-Signature=7c56b0abcd6c91e74e62e87d48214a03029e6390a830ed86f676ee9923f197ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7XKXV7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDDk2FT6rR55UN3XL8EFBN0PPK0%2BbeFa8lFoE5U16R2%2BwIhAOhA7rTZCD2MKQLmMpOUOMyNh68yAMdbcdzNlQGte1lXKv8DCCYQABoMNjM3NDIzMTgzODA1IgzTOvpExv7%2FNlRrzHQq3ANH2u5yz7oyqZnPFMSjj045kYivR4aeq93VXEtlqndRKaLDODLMZKb3gRwY5wcN8PzCumt7V7QgwHIb7gxkjgBDc5ELB9ey9In1iwHZA%2FuH4nOFWQmaubJciqS6YuVkY7cWkDRyA6PRyHpEM%2FDNpdAsvPNMMtrI34lQvpPQ7Pn%2FC0u0XMNrWYi8xsc%2Fb0MdznAUd1esN%2F4RT0UA8B9f2r6LEaeFlIAkhUEXZbbLodyAkGPlDlMZdTJKdiySk6YX0Jg5gW%2FffjOo6cZK7xkxiK%2BQ2N67fl0MUNmThGq1brNcDrUkjaq1%2BpQEZwe4eU45M4bbqgrIuxwPXDRwoBLh1iRZYgjSI2fjNtkn4Wm2efkBhfb2VzdK%2F0FJvIOS447oGBUIRrwDh0%2BOwRamCkm5XI44pUtAVdas5oAaMYGcBDYAWxzh31LjVNB7c%2ByI%2BVrAkuGkT%2Bce5xd5WpyYQjm8YWa%2FnYKt8Cq2s5iENUJye95Qi4zUGl%2FXopejVZuSAdEktoJ5Po07kdUHwVnB%2Fj1HhPDdAGr3JEbhM1QwXFAT63qlFUHecY7%2Fo5IhBLqMnISwm2t0CuNIOZyj6%2F4f5HY0jVo5ISTFzW%2BLDkX6UFsr3s7G%2BFHYuwMdKW32usY0xzC9ucrBBjqkATHF7bBI3udEv3WC82%2BLdTtMLKgjcnJduHCr6F1Er9WH9mHBviNJChp5ociLTdcid3PwmJt9RIwBGqxP0fIsgxkUHuz6ByU%2FKGHo%2F4iiVoTbXKmJ2Rued1dHqo68mzTK95gR%2B6uq3scqlYlpsJ5IaArRcx8E1Sxz5UWFYOByhnlmDlKb7dHU9zTOY69LBOtjmqoMeefxBUd2RYmA0FiF36ShUTmn&X-Amz-Signature=b236df1c7fc2a03effe520dfc702150f6debb6ed91235dbd2babd798fc5a3e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7XKXV7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDDk2FT6rR55UN3XL8EFBN0PPK0%2BbeFa8lFoE5U16R2%2BwIhAOhA7rTZCD2MKQLmMpOUOMyNh68yAMdbcdzNlQGte1lXKv8DCCYQABoMNjM3NDIzMTgzODA1IgzTOvpExv7%2FNlRrzHQq3ANH2u5yz7oyqZnPFMSjj045kYivR4aeq93VXEtlqndRKaLDODLMZKb3gRwY5wcN8PzCumt7V7QgwHIb7gxkjgBDc5ELB9ey9In1iwHZA%2FuH4nOFWQmaubJciqS6YuVkY7cWkDRyA6PRyHpEM%2FDNpdAsvPNMMtrI34lQvpPQ7Pn%2FC0u0XMNrWYi8xsc%2Fb0MdznAUd1esN%2F4RT0UA8B9f2r6LEaeFlIAkhUEXZbbLodyAkGPlDlMZdTJKdiySk6YX0Jg5gW%2FffjOo6cZK7xkxiK%2BQ2N67fl0MUNmThGq1brNcDrUkjaq1%2BpQEZwe4eU45M4bbqgrIuxwPXDRwoBLh1iRZYgjSI2fjNtkn4Wm2efkBhfb2VzdK%2F0FJvIOS447oGBUIRrwDh0%2BOwRamCkm5XI44pUtAVdas5oAaMYGcBDYAWxzh31LjVNB7c%2ByI%2BVrAkuGkT%2Bce5xd5WpyYQjm8YWa%2FnYKt8Cq2s5iENUJye95Qi4zUGl%2FXopejVZuSAdEktoJ5Po07kdUHwVnB%2Fj1HhPDdAGr3JEbhM1QwXFAT63qlFUHecY7%2Fo5IhBLqMnISwm2t0CuNIOZyj6%2F4f5HY0jVo5ISTFzW%2BLDkX6UFsr3s7G%2BFHYuwMdKW32usY0xzC9ucrBBjqkATHF7bBI3udEv3WC82%2BLdTtMLKgjcnJduHCr6F1Er9WH9mHBviNJChp5ociLTdcid3PwmJt9RIwBGqxP0fIsgxkUHuz6ByU%2FKGHo%2F4iiVoTbXKmJ2Rued1dHqo68mzTK95gR%2B6uq3scqlYlpsJ5IaArRcx8E1Sxz5UWFYOByhnlmDlKb7dHU9zTOY69LBOtjmqoMeefxBUd2RYmA0FiF36ShUTmn&X-Amz-Signature=c359fcf36fea517f166b52e7083a98063f569c814c142a9dc4378800478d7aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7XKXV7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDDk2FT6rR55UN3XL8EFBN0PPK0%2BbeFa8lFoE5U16R2%2BwIhAOhA7rTZCD2MKQLmMpOUOMyNh68yAMdbcdzNlQGte1lXKv8DCCYQABoMNjM3NDIzMTgzODA1IgzTOvpExv7%2FNlRrzHQq3ANH2u5yz7oyqZnPFMSjj045kYivR4aeq93VXEtlqndRKaLDODLMZKb3gRwY5wcN8PzCumt7V7QgwHIb7gxkjgBDc5ELB9ey9In1iwHZA%2FuH4nOFWQmaubJciqS6YuVkY7cWkDRyA6PRyHpEM%2FDNpdAsvPNMMtrI34lQvpPQ7Pn%2FC0u0XMNrWYi8xsc%2Fb0MdznAUd1esN%2F4RT0UA8B9f2r6LEaeFlIAkhUEXZbbLodyAkGPlDlMZdTJKdiySk6YX0Jg5gW%2FffjOo6cZK7xkxiK%2BQ2N67fl0MUNmThGq1brNcDrUkjaq1%2BpQEZwe4eU45M4bbqgrIuxwPXDRwoBLh1iRZYgjSI2fjNtkn4Wm2efkBhfb2VzdK%2F0FJvIOS447oGBUIRrwDh0%2BOwRamCkm5XI44pUtAVdas5oAaMYGcBDYAWxzh31LjVNB7c%2ByI%2BVrAkuGkT%2Bce5xd5WpyYQjm8YWa%2FnYKt8Cq2s5iENUJye95Qi4zUGl%2FXopejVZuSAdEktoJ5Po07kdUHwVnB%2Fj1HhPDdAGr3JEbhM1QwXFAT63qlFUHecY7%2Fo5IhBLqMnISwm2t0CuNIOZyj6%2F4f5HY0jVo5ISTFzW%2BLDkX6UFsr3s7G%2BFHYuwMdKW32usY0xzC9ucrBBjqkATHF7bBI3udEv3WC82%2BLdTtMLKgjcnJduHCr6F1Er9WH9mHBviNJChp5ociLTdcid3PwmJt9RIwBGqxP0fIsgxkUHuz6ByU%2FKGHo%2F4iiVoTbXKmJ2Rued1dHqo68mzTK95gR%2B6uq3scqlYlpsJ5IaArRcx8E1Sxz5UWFYOByhnlmDlKb7dHU9zTOY69LBOtjmqoMeefxBUd2RYmA0FiF36ShUTmn&X-Amz-Signature=c143dc3cc8f2df87ee5c214b0f16312f8e63b2d5cd570b1aaf6cc48013a7893c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7XKXV7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDDk2FT6rR55UN3XL8EFBN0PPK0%2BbeFa8lFoE5U16R2%2BwIhAOhA7rTZCD2MKQLmMpOUOMyNh68yAMdbcdzNlQGte1lXKv8DCCYQABoMNjM3NDIzMTgzODA1IgzTOvpExv7%2FNlRrzHQq3ANH2u5yz7oyqZnPFMSjj045kYivR4aeq93VXEtlqndRKaLDODLMZKb3gRwY5wcN8PzCumt7V7QgwHIb7gxkjgBDc5ELB9ey9In1iwHZA%2FuH4nOFWQmaubJciqS6YuVkY7cWkDRyA6PRyHpEM%2FDNpdAsvPNMMtrI34lQvpPQ7Pn%2FC0u0XMNrWYi8xsc%2Fb0MdznAUd1esN%2F4RT0UA8B9f2r6LEaeFlIAkhUEXZbbLodyAkGPlDlMZdTJKdiySk6YX0Jg5gW%2FffjOo6cZK7xkxiK%2BQ2N67fl0MUNmThGq1brNcDrUkjaq1%2BpQEZwe4eU45M4bbqgrIuxwPXDRwoBLh1iRZYgjSI2fjNtkn4Wm2efkBhfb2VzdK%2F0FJvIOS447oGBUIRrwDh0%2BOwRamCkm5XI44pUtAVdas5oAaMYGcBDYAWxzh31LjVNB7c%2ByI%2BVrAkuGkT%2Bce5xd5WpyYQjm8YWa%2FnYKt8Cq2s5iENUJye95Qi4zUGl%2FXopejVZuSAdEktoJ5Po07kdUHwVnB%2Fj1HhPDdAGr3JEbhM1QwXFAT63qlFUHecY7%2Fo5IhBLqMnISwm2t0CuNIOZyj6%2F4f5HY0jVo5ISTFzW%2BLDkX6UFsr3s7G%2BFHYuwMdKW32usY0xzC9ucrBBjqkATHF7bBI3udEv3WC82%2BLdTtMLKgjcnJduHCr6F1Er9WH9mHBviNJChp5ociLTdcid3PwmJt9RIwBGqxP0fIsgxkUHuz6ByU%2FKGHo%2F4iiVoTbXKmJ2Rued1dHqo68mzTK95gR%2B6uq3scqlYlpsJ5IaArRcx8E1Sxz5UWFYOByhnlmDlKb7dHU9zTOY69LBOtjmqoMeefxBUd2RYmA0FiF36ShUTmn&X-Amz-Signature=18484e66a71e628916fe3406303a4330158824e6f322734fa6232194c9f5b87e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS7XKXV7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDDk2FT6rR55UN3XL8EFBN0PPK0%2BbeFa8lFoE5U16R2%2BwIhAOhA7rTZCD2MKQLmMpOUOMyNh68yAMdbcdzNlQGte1lXKv8DCCYQABoMNjM3NDIzMTgzODA1IgzTOvpExv7%2FNlRrzHQq3ANH2u5yz7oyqZnPFMSjj045kYivR4aeq93VXEtlqndRKaLDODLMZKb3gRwY5wcN8PzCumt7V7QgwHIb7gxkjgBDc5ELB9ey9In1iwHZA%2FuH4nOFWQmaubJciqS6YuVkY7cWkDRyA6PRyHpEM%2FDNpdAsvPNMMtrI34lQvpPQ7Pn%2FC0u0XMNrWYi8xsc%2Fb0MdznAUd1esN%2F4RT0UA8B9f2r6LEaeFlIAkhUEXZbbLodyAkGPlDlMZdTJKdiySk6YX0Jg5gW%2FffjOo6cZK7xkxiK%2BQ2N67fl0MUNmThGq1brNcDrUkjaq1%2BpQEZwe4eU45M4bbqgrIuxwPXDRwoBLh1iRZYgjSI2fjNtkn4Wm2efkBhfb2VzdK%2F0FJvIOS447oGBUIRrwDh0%2BOwRamCkm5XI44pUtAVdas5oAaMYGcBDYAWxzh31LjVNB7c%2ByI%2BVrAkuGkT%2Bce5xd5WpyYQjm8YWa%2FnYKt8Cq2s5iENUJye95Qi4zUGl%2FXopejVZuSAdEktoJ5Po07kdUHwVnB%2Fj1HhPDdAGr3JEbhM1QwXFAT63qlFUHecY7%2Fo5IhBLqMnISwm2t0CuNIOZyj6%2F4f5HY0jVo5ISTFzW%2BLDkX6UFsr3s7G%2BFHYuwMdKW32usY0xzC9ucrBBjqkATHF7bBI3udEv3WC82%2BLdTtMLKgjcnJduHCr6F1Er9WH9mHBviNJChp5ociLTdcid3PwmJt9RIwBGqxP0fIsgxkUHuz6ByU%2FKGHo%2F4iiVoTbXKmJ2Rued1dHqo68mzTK95gR%2B6uq3scqlYlpsJ5IaArRcx8E1Sxz5UWFYOByhnlmDlKb7dHU9zTOY69LBOtjmqoMeefxBUd2RYmA0FiF36ShUTmn&X-Amz-Signature=3fe099cb331902b785a01fccbdc32c55f014e394b31a66bfe91879692ab5cf3e&X-Amz-SignedHeaders=host&x-id=GetObject)
