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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHA4OOP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDb%2Fl7ns2lgVDIe5UhOKkaDmFlRrMxo0EOCSo55sFBvCQIhAN%2FllcnQQ19zpFlAzJN%2B3nHUQM6L7ETL00iW5YESBwJsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIPEtsyzgv7B7mieQq3AMLdyw%2FUqmJVszgQRw8lOXaLcdFnHwltAhGu0E9R2fUeTm0CFFlFp2nieoKzWXsAcpaT4Rwy0yTdI%2B9UUeQNlww7QnX77OPVeIc2ZgKgG8CnBJ4SIpiUDb9xAOFc3i2NJdGn9BXgLZuSsmQ6evH9TnxVPzjyXEiMR1IlmLX8lzLUnwxLXTeGQqCb%2BxZSJyu4DqiZq6g0sfQ%2F2%2BqQkRTBvv2npcRhUYtqtL%2FDYERH0P7qv%2FNaEl%2BB%2FoZCPon2nRDqv5%2FQ09K63ETHU5byzLRVK0KPpB9JPIUsk8Pf4M6q93NtRFpgxy004zj5fCGhv2iqhymbNkO1jWihTqPiqtAZPzw69oOJomJGCyRDrFlckUmTmGbEk6tTlqBOhOX8%2F2JEUCxtn3Sn%2F%2FviH%2BVpWJuNYoO3LdOxH24ivZgirnenvgLoQwK5S%2BG923jerIdacchuLatucbUuPnDBqZWmKPT7dGVpHOQrIkim5odIPnRXiv6ryex%2BVHWlFiOmmZ3OjqduCn5imA%2B376Y3ONuDslZqknxae3M2lYwIBGOS13rspHuetqZ4Xk0o0814w4%2BPhh%2B0IhLdHBJVNA2mfQmn2QSBgdGIrPjkoWmpCMU%2F8geooCHFlemWb2sP9noLRuOMzCJ6bW%2FBjqkAZabYQYnvBjpeHlhwWhMwjGqx1scoRG%2BbNcwWh3hggiLQLW18v38gnRWFVBOHgyquni0YwA8L0u4IhtsB6kkD5JO3iRJT96sblkyNJ%2FMZWdkp%2FkwT7WZ%2BtKR55iMyQyuzIKa2ZwUs8t9%2BrgTwj4hEdQs9D5w5iL8L0BRZZQQQiV8WysOsdTWYatvWaZ2U347z0yxoQ0bjVa8TGQ0XpZo8jjH09EL&X-Amz-Signature=d906bbfbf7d7f5f0a2725138b1a7fec23f2488d9233dd92cf958a3b336cac510&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHA4OOP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDb%2Fl7ns2lgVDIe5UhOKkaDmFlRrMxo0EOCSo55sFBvCQIhAN%2FllcnQQ19zpFlAzJN%2B3nHUQM6L7ETL00iW5YESBwJsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIPEtsyzgv7B7mieQq3AMLdyw%2FUqmJVszgQRw8lOXaLcdFnHwltAhGu0E9R2fUeTm0CFFlFp2nieoKzWXsAcpaT4Rwy0yTdI%2B9UUeQNlww7QnX77OPVeIc2ZgKgG8CnBJ4SIpiUDb9xAOFc3i2NJdGn9BXgLZuSsmQ6evH9TnxVPzjyXEiMR1IlmLX8lzLUnwxLXTeGQqCb%2BxZSJyu4DqiZq6g0sfQ%2F2%2BqQkRTBvv2npcRhUYtqtL%2FDYERH0P7qv%2FNaEl%2BB%2FoZCPon2nRDqv5%2FQ09K63ETHU5byzLRVK0KPpB9JPIUsk8Pf4M6q93NtRFpgxy004zj5fCGhv2iqhymbNkO1jWihTqPiqtAZPzw69oOJomJGCyRDrFlckUmTmGbEk6tTlqBOhOX8%2F2JEUCxtn3Sn%2F%2FviH%2BVpWJuNYoO3LdOxH24ivZgirnenvgLoQwK5S%2BG923jerIdacchuLatucbUuPnDBqZWmKPT7dGVpHOQrIkim5odIPnRXiv6ryex%2BVHWlFiOmmZ3OjqduCn5imA%2B376Y3ONuDslZqknxae3M2lYwIBGOS13rspHuetqZ4Xk0o0814w4%2BPhh%2B0IhLdHBJVNA2mfQmn2QSBgdGIrPjkoWmpCMU%2F8geooCHFlemWb2sP9noLRuOMzCJ6bW%2FBjqkAZabYQYnvBjpeHlhwWhMwjGqx1scoRG%2BbNcwWh3hggiLQLW18v38gnRWFVBOHgyquni0YwA8L0u4IhtsB6kkD5JO3iRJT96sblkyNJ%2FMZWdkp%2FkwT7WZ%2BtKR55iMyQyuzIKa2ZwUs8t9%2BrgTwj4hEdQs9D5w5iL8L0BRZZQQQiV8WysOsdTWYatvWaZ2U347z0yxoQ0bjVa8TGQ0XpZo8jjH09EL&X-Amz-Signature=5acf41c963691a874f97c1980ed9d737c17ec94745c70ac84177353351d83610&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHA4OOP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDb%2Fl7ns2lgVDIe5UhOKkaDmFlRrMxo0EOCSo55sFBvCQIhAN%2FllcnQQ19zpFlAzJN%2B3nHUQM6L7ETL00iW5YESBwJsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIPEtsyzgv7B7mieQq3AMLdyw%2FUqmJVszgQRw8lOXaLcdFnHwltAhGu0E9R2fUeTm0CFFlFp2nieoKzWXsAcpaT4Rwy0yTdI%2B9UUeQNlww7QnX77OPVeIc2ZgKgG8CnBJ4SIpiUDb9xAOFc3i2NJdGn9BXgLZuSsmQ6evH9TnxVPzjyXEiMR1IlmLX8lzLUnwxLXTeGQqCb%2BxZSJyu4DqiZq6g0sfQ%2F2%2BqQkRTBvv2npcRhUYtqtL%2FDYERH0P7qv%2FNaEl%2BB%2FoZCPon2nRDqv5%2FQ09K63ETHU5byzLRVK0KPpB9JPIUsk8Pf4M6q93NtRFpgxy004zj5fCGhv2iqhymbNkO1jWihTqPiqtAZPzw69oOJomJGCyRDrFlckUmTmGbEk6tTlqBOhOX8%2F2JEUCxtn3Sn%2F%2FviH%2BVpWJuNYoO3LdOxH24ivZgirnenvgLoQwK5S%2BG923jerIdacchuLatucbUuPnDBqZWmKPT7dGVpHOQrIkim5odIPnRXiv6ryex%2BVHWlFiOmmZ3OjqduCn5imA%2B376Y3ONuDslZqknxae3M2lYwIBGOS13rspHuetqZ4Xk0o0814w4%2BPhh%2B0IhLdHBJVNA2mfQmn2QSBgdGIrPjkoWmpCMU%2F8geooCHFlemWb2sP9noLRuOMzCJ6bW%2FBjqkAZabYQYnvBjpeHlhwWhMwjGqx1scoRG%2BbNcwWh3hggiLQLW18v38gnRWFVBOHgyquni0YwA8L0u4IhtsB6kkD5JO3iRJT96sblkyNJ%2FMZWdkp%2FkwT7WZ%2BtKR55iMyQyuzIKa2ZwUs8t9%2BrgTwj4hEdQs9D5w5iL8L0BRZZQQQiV8WysOsdTWYatvWaZ2U347z0yxoQ0bjVa8TGQ0XpZo8jjH09EL&X-Amz-Signature=289fa49a0ca2f8af32d7323645091fdb1f0c4a41017656a45ffa5f5eaa1f5b32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHA4OOP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDb%2Fl7ns2lgVDIe5UhOKkaDmFlRrMxo0EOCSo55sFBvCQIhAN%2FllcnQQ19zpFlAzJN%2B3nHUQM6L7ETL00iW5YESBwJsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIPEtsyzgv7B7mieQq3AMLdyw%2FUqmJVszgQRw8lOXaLcdFnHwltAhGu0E9R2fUeTm0CFFlFp2nieoKzWXsAcpaT4Rwy0yTdI%2B9UUeQNlww7QnX77OPVeIc2ZgKgG8CnBJ4SIpiUDb9xAOFc3i2NJdGn9BXgLZuSsmQ6evH9TnxVPzjyXEiMR1IlmLX8lzLUnwxLXTeGQqCb%2BxZSJyu4DqiZq6g0sfQ%2F2%2BqQkRTBvv2npcRhUYtqtL%2FDYERH0P7qv%2FNaEl%2BB%2FoZCPon2nRDqv5%2FQ09K63ETHU5byzLRVK0KPpB9JPIUsk8Pf4M6q93NtRFpgxy004zj5fCGhv2iqhymbNkO1jWihTqPiqtAZPzw69oOJomJGCyRDrFlckUmTmGbEk6tTlqBOhOX8%2F2JEUCxtn3Sn%2F%2FviH%2BVpWJuNYoO3LdOxH24ivZgirnenvgLoQwK5S%2BG923jerIdacchuLatucbUuPnDBqZWmKPT7dGVpHOQrIkim5odIPnRXiv6ryex%2BVHWlFiOmmZ3OjqduCn5imA%2B376Y3ONuDslZqknxae3M2lYwIBGOS13rspHuetqZ4Xk0o0814w4%2BPhh%2B0IhLdHBJVNA2mfQmn2QSBgdGIrPjkoWmpCMU%2F8geooCHFlemWb2sP9noLRuOMzCJ6bW%2FBjqkAZabYQYnvBjpeHlhwWhMwjGqx1scoRG%2BbNcwWh3hggiLQLW18v38gnRWFVBOHgyquni0YwA8L0u4IhtsB6kkD5JO3iRJT96sblkyNJ%2FMZWdkp%2FkwT7WZ%2BtKR55iMyQyuzIKa2ZwUs8t9%2BrgTwj4hEdQs9D5w5iL8L0BRZZQQQiV8WysOsdTWYatvWaZ2U347z0yxoQ0bjVa8TGQ0XpZo8jjH09EL&X-Amz-Signature=238d784ae1f049ef06574732efa9a9101a48d37c8f6ecae58ee7dc0bfe1e5df0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHA4OOP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDb%2Fl7ns2lgVDIe5UhOKkaDmFlRrMxo0EOCSo55sFBvCQIhAN%2FllcnQQ19zpFlAzJN%2B3nHUQM6L7ETL00iW5YESBwJsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIPEtsyzgv7B7mieQq3AMLdyw%2FUqmJVszgQRw8lOXaLcdFnHwltAhGu0E9R2fUeTm0CFFlFp2nieoKzWXsAcpaT4Rwy0yTdI%2B9UUeQNlww7QnX77OPVeIc2ZgKgG8CnBJ4SIpiUDb9xAOFc3i2NJdGn9BXgLZuSsmQ6evH9TnxVPzjyXEiMR1IlmLX8lzLUnwxLXTeGQqCb%2BxZSJyu4DqiZq6g0sfQ%2F2%2BqQkRTBvv2npcRhUYtqtL%2FDYERH0P7qv%2FNaEl%2BB%2FoZCPon2nRDqv5%2FQ09K63ETHU5byzLRVK0KPpB9JPIUsk8Pf4M6q93NtRFpgxy004zj5fCGhv2iqhymbNkO1jWihTqPiqtAZPzw69oOJomJGCyRDrFlckUmTmGbEk6tTlqBOhOX8%2F2JEUCxtn3Sn%2F%2FviH%2BVpWJuNYoO3LdOxH24ivZgirnenvgLoQwK5S%2BG923jerIdacchuLatucbUuPnDBqZWmKPT7dGVpHOQrIkim5odIPnRXiv6ryex%2BVHWlFiOmmZ3OjqduCn5imA%2B376Y3ONuDslZqknxae3M2lYwIBGOS13rspHuetqZ4Xk0o0814w4%2BPhh%2B0IhLdHBJVNA2mfQmn2QSBgdGIrPjkoWmpCMU%2F8geooCHFlemWb2sP9noLRuOMzCJ6bW%2FBjqkAZabYQYnvBjpeHlhwWhMwjGqx1scoRG%2BbNcwWh3hggiLQLW18v38gnRWFVBOHgyquni0YwA8L0u4IhtsB6kkD5JO3iRJT96sblkyNJ%2FMZWdkp%2FkwT7WZ%2BtKR55iMyQyuzIKa2ZwUs8t9%2BrgTwj4hEdQs9D5w5iL8L0BRZZQQQiV8WysOsdTWYatvWaZ2U347z0yxoQ0bjVa8TGQ0XpZo8jjH09EL&X-Amz-Signature=ff8ee8166750e02a8c7054107b7f341bb60731d3e4356d1ca52ca8760e9e1981&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHA4OOP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDb%2Fl7ns2lgVDIe5UhOKkaDmFlRrMxo0EOCSo55sFBvCQIhAN%2FllcnQQ19zpFlAzJN%2B3nHUQM6L7ETL00iW5YESBwJsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIPEtsyzgv7B7mieQq3AMLdyw%2FUqmJVszgQRw8lOXaLcdFnHwltAhGu0E9R2fUeTm0CFFlFp2nieoKzWXsAcpaT4Rwy0yTdI%2B9UUeQNlww7QnX77OPVeIc2ZgKgG8CnBJ4SIpiUDb9xAOFc3i2NJdGn9BXgLZuSsmQ6evH9TnxVPzjyXEiMR1IlmLX8lzLUnwxLXTeGQqCb%2BxZSJyu4DqiZq6g0sfQ%2F2%2BqQkRTBvv2npcRhUYtqtL%2FDYERH0P7qv%2FNaEl%2BB%2FoZCPon2nRDqv5%2FQ09K63ETHU5byzLRVK0KPpB9JPIUsk8Pf4M6q93NtRFpgxy004zj5fCGhv2iqhymbNkO1jWihTqPiqtAZPzw69oOJomJGCyRDrFlckUmTmGbEk6tTlqBOhOX8%2F2JEUCxtn3Sn%2F%2FviH%2BVpWJuNYoO3LdOxH24ivZgirnenvgLoQwK5S%2BG923jerIdacchuLatucbUuPnDBqZWmKPT7dGVpHOQrIkim5odIPnRXiv6ryex%2BVHWlFiOmmZ3OjqduCn5imA%2B376Y3ONuDslZqknxae3M2lYwIBGOS13rspHuetqZ4Xk0o0814w4%2BPhh%2B0IhLdHBJVNA2mfQmn2QSBgdGIrPjkoWmpCMU%2F8geooCHFlemWb2sP9noLRuOMzCJ6bW%2FBjqkAZabYQYnvBjpeHlhwWhMwjGqx1scoRG%2BbNcwWh3hggiLQLW18v38gnRWFVBOHgyquni0YwA8L0u4IhtsB6kkD5JO3iRJT96sblkyNJ%2FMZWdkp%2FkwT7WZ%2BtKR55iMyQyuzIKa2ZwUs8t9%2BrgTwj4hEdQs9D5w5iL8L0BRZZQQQiV8WysOsdTWYatvWaZ2U347z0yxoQ0bjVa8TGQ0XpZo8jjH09EL&X-Amz-Signature=24557a07c0664a87d43de3d3f1baeabc329d16b1f4673e78279d32f3379dc9fa&X-Amz-SignedHeaders=host&x-id=GetObject)
