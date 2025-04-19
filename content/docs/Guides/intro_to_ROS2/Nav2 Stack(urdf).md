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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T2WJTV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDoLK3OVc%2Bu5y4ZRVul%2B3nvXo8OyG71n1wKL7pwDvVrNQIhAJ2ZkgQeyFTpcK1ajV68leU6kcjE8k0XhWcEFLt894KgKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuz2iHsqkNDqRgkCMq3AOBZGqHQS4kEvouT3Wo5wdz8d%2F2t8%2Fr3d%2BsOhYIvlAzJcpJWgYu1KdZ0xdHWZwFZCfvg9iUUAxGeNs0HehRuLX5Z4bQba6dnwIGZj26J5sAjsthRmH%2Bk2Y3Ge3jNf0YZgtmPbUiw4z0uKyaRXX6Zm62Lq9iVE%2FZMr%2BHkk12jknxEZkys6V0BGY9tVyAgU5rKf2taa4nUhCP8NxIOFVLr2VyFz8I0jedyWuij6bu2QharFosWfWkPe6nYbz6oHyfZJciksfq8lJf9rikcPhMyYHDmmX0r%2Bc%2Fz%2Fio3K39RVwSpX5X7thL%2F5Z6PMps4hNkYnObt0pz4LqBi9zyTcuSEQgS0RXPxYeb9n4XIvo7MLorEa8sLQEheUawvKrq5KnpFt9jLMlar2DRfZ8sFyBxkzGkTqU8NJWERhyVYKuQdoEjmHOuyc60GEDmQ1hfmiVcjqWGeHJV3x594xW0EjIxn%2Bij%2Bz9HRFKVGLM7Rh%2Bwbs%2BcBvarGTj6jKR6wWHhsbaGpDeOH%2Bi%2FBsebF%2Fi2lJJ8HIo0OebU%2FYCeLUUgwsnFhxRCcYtCnkG%2FRgkb7Oa7zc%2FwRaUTLLlkbq5g6y37jB%2FAvnWVnsgC7b6xwZ%2FWDqjwiQaLRQu7Bay0lWHLUao2oTCgpI7ABjqkAZ%2BZrtHYXFEwsY%2FnPf%2FGLKeqZxG1F5g9L0jE%2FDa0lMEx4XpxOGAfVBFVJsWUY6oDimyF7I96YrJ%2B0fuLNav%2Fcb0IOT6Fuv9i%2BzmHgumqWzkfsyf7EW8Gffm68bjcDZq6OhkUp363G2yjTf4TED0EwZ%2B4Ztk3d1TG9c%2B3%2FnnrrevUhq0QdwRIRU7%2BDcbBakUxH6yYG0G5Ryij%2B7icShSTzLK3PXoG&X-Amz-Signature=623fd7aed0d98ece3cb1350b7d6c9fd7c3f42784890bcf06d2151eaff3cc7200&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T2WJTV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDoLK3OVc%2Bu5y4ZRVul%2B3nvXo8OyG71n1wKL7pwDvVrNQIhAJ2ZkgQeyFTpcK1ajV68leU6kcjE8k0XhWcEFLt894KgKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuz2iHsqkNDqRgkCMq3AOBZGqHQS4kEvouT3Wo5wdz8d%2F2t8%2Fr3d%2BsOhYIvlAzJcpJWgYu1KdZ0xdHWZwFZCfvg9iUUAxGeNs0HehRuLX5Z4bQba6dnwIGZj26J5sAjsthRmH%2Bk2Y3Ge3jNf0YZgtmPbUiw4z0uKyaRXX6Zm62Lq9iVE%2FZMr%2BHkk12jknxEZkys6V0BGY9tVyAgU5rKf2taa4nUhCP8NxIOFVLr2VyFz8I0jedyWuij6bu2QharFosWfWkPe6nYbz6oHyfZJciksfq8lJf9rikcPhMyYHDmmX0r%2Bc%2Fz%2Fio3K39RVwSpX5X7thL%2F5Z6PMps4hNkYnObt0pz4LqBi9zyTcuSEQgS0RXPxYeb9n4XIvo7MLorEa8sLQEheUawvKrq5KnpFt9jLMlar2DRfZ8sFyBxkzGkTqU8NJWERhyVYKuQdoEjmHOuyc60GEDmQ1hfmiVcjqWGeHJV3x594xW0EjIxn%2Bij%2Bz9HRFKVGLM7Rh%2Bwbs%2BcBvarGTj6jKR6wWHhsbaGpDeOH%2Bi%2FBsebF%2Fi2lJJ8HIo0OebU%2FYCeLUUgwsnFhxRCcYtCnkG%2FRgkb7Oa7zc%2FwRaUTLLlkbq5g6y37jB%2FAvnWVnsgC7b6xwZ%2FWDqjwiQaLRQu7Bay0lWHLUao2oTCgpI7ABjqkAZ%2BZrtHYXFEwsY%2FnPf%2FGLKeqZxG1F5g9L0jE%2FDa0lMEx4XpxOGAfVBFVJsWUY6oDimyF7I96YrJ%2B0fuLNav%2Fcb0IOT6Fuv9i%2BzmHgumqWzkfsyf7EW8Gffm68bjcDZq6OhkUp363G2yjTf4TED0EwZ%2B4Ztk3d1TG9c%2B3%2FnnrrevUhq0QdwRIRU7%2BDcbBakUxH6yYG0G5Ryij%2B7icShSTzLK3PXoG&X-Amz-Signature=af8a3b0af4b0b55ee6506cdfa1b358b0a632e4a75f4e23bd496dad8ae4a4d84f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T2WJTV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDoLK3OVc%2Bu5y4ZRVul%2B3nvXo8OyG71n1wKL7pwDvVrNQIhAJ2ZkgQeyFTpcK1ajV68leU6kcjE8k0XhWcEFLt894KgKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuz2iHsqkNDqRgkCMq3AOBZGqHQS4kEvouT3Wo5wdz8d%2F2t8%2Fr3d%2BsOhYIvlAzJcpJWgYu1KdZ0xdHWZwFZCfvg9iUUAxGeNs0HehRuLX5Z4bQba6dnwIGZj26J5sAjsthRmH%2Bk2Y3Ge3jNf0YZgtmPbUiw4z0uKyaRXX6Zm62Lq9iVE%2FZMr%2BHkk12jknxEZkys6V0BGY9tVyAgU5rKf2taa4nUhCP8NxIOFVLr2VyFz8I0jedyWuij6bu2QharFosWfWkPe6nYbz6oHyfZJciksfq8lJf9rikcPhMyYHDmmX0r%2Bc%2Fz%2Fio3K39RVwSpX5X7thL%2F5Z6PMps4hNkYnObt0pz4LqBi9zyTcuSEQgS0RXPxYeb9n4XIvo7MLorEa8sLQEheUawvKrq5KnpFt9jLMlar2DRfZ8sFyBxkzGkTqU8NJWERhyVYKuQdoEjmHOuyc60GEDmQ1hfmiVcjqWGeHJV3x594xW0EjIxn%2Bij%2Bz9HRFKVGLM7Rh%2Bwbs%2BcBvarGTj6jKR6wWHhsbaGpDeOH%2Bi%2FBsebF%2Fi2lJJ8HIo0OebU%2FYCeLUUgwsnFhxRCcYtCnkG%2FRgkb7Oa7zc%2FwRaUTLLlkbq5g6y37jB%2FAvnWVnsgC7b6xwZ%2FWDqjwiQaLRQu7Bay0lWHLUao2oTCgpI7ABjqkAZ%2BZrtHYXFEwsY%2FnPf%2FGLKeqZxG1F5g9L0jE%2FDa0lMEx4XpxOGAfVBFVJsWUY6oDimyF7I96YrJ%2B0fuLNav%2Fcb0IOT6Fuv9i%2BzmHgumqWzkfsyf7EW8Gffm68bjcDZq6OhkUp363G2yjTf4TED0EwZ%2B4Ztk3d1TG9c%2B3%2FnnrrevUhq0QdwRIRU7%2BDcbBakUxH6yYG0G5Ryij%2B7icShSTzLK3PXoG&X-Amz-Signature=e820e3d990437d911a6938e13561be0b2900a202858d2c196ed43320bdc13e06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T2WJTV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDoLK3OVc%2Bu5y4ZRVul%2B3nvXo8OyG71n1wKL7pwDvVrNQIhAJ2ZkgQeyFTpcK1ajV68leU6kcjE8k0XhWcEFLt894KgKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuz2iHsqkNDqRgkCMq3AOBZGqHQS4kEvouT3Wo5wdz8d%2F2t8%2Fr3d%2BsOhYIvlAzJcpJWgYu1KdZ0xdHWZwFZCfvg9iUUAxGeNs0HehRuLX5Z4bQba6dnwIGZj26J5sAjsthRmH%2Bk2Y3Ge3jNf0YZgtmPbUiw4z0uKyaRXX6Zm62Lq9iVE%2FZMr%2BHkk12jknxEZkys6V0BGY9tVyAgU5rKf2taa4nUhCP8NxIOFVLr2VyFz8I0jedyWuij6bu2QharFosWfWkPe6nYbz6oHyfZJciksfq8lJf9rikcPhMyYHDmmX0r%2Bc%2Fz%2Fio3K39RVwSpX5X7thL%2F5Z6PMps4hNkYnObt0pz4LqBi9zyTcuSEQgS0RXPxYeb9n4XIvo7MLorEa8sLQEheUawvKrq5KnpFt9jLMlar2DRfZ8sFyBxkzGkTqU8NJWERhyVYKuQdoEjmHOuyc60GEDmQ1hfmiVcjqWGeHJV3x594xW0EjIxn%2Bij%2Bz9HRFKVGLM7Rh%2Bwbs%2BcBvarGTj6jKR6wWHhsbaGpDeOH%2Bi%2FBsebF%2Fi2lJJ8HIo0OebU%2FYCeLUUgwsnFhxRCcYtCnkG%2FRgkb7Oa7zc%2FwRaUTLLlkbq5g6y37jB%2FAvnWVnsgC7b6xwZ%2FWDqjwiQaLRQu7Bay0lWHLUao2oTCgpI7ABjqkAZ%2BZrtHYXFEwsY%2FnPf%2FGLKeqZxG1F5g9L0jE%2FDa0lMEx4XpxOGAfVBFVJsWUY6oDimyF7I96YrJ%2B0fuLNav%2Fcb0IOT6Fuv9i%2BzmHgumqWzkfsyf7EW8Gffm68bjcDZq6OhkUp363G2yjTf4TED0EwZ%2B4Ztk3d1TG9c%2B3%2FnnrrevUhq0QdwRIRU7%2BDcbBakUxH6yYG0G5Ryij%2B7icShSTzLK3PXoG&X-Amz-Signature=65f23c4a34ae5ae17cbe7ae86edf63162765abc6cc8b7bb47625fd718d65ea71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T2WJTV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDoLK3OVc%2Bu5y4ZRVul%2B3nvXo8OyG71n1wKL7pwDvVrNQIhAJ2ZkgQeyFTpcK1ajV68leU6kcjE8k0XhWcEFLt894KgKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuz2iHsqkNDqRgkCMq3AOBZGqHQS4kEvouT3Wo5wdz8d%2F2t8%2Fr3d%2BsOhYIvlAzJcpJWgYu1KdZ0xdHWZwFZCfvg9iUUAxGeNs0HehRuLX5Z4bQba6dnwIGZj26J5sAjsthRmH%2Bk2Y3Ge3jNf0YZgtmPbUiw4z0uKyaRXX6Zm62Lq9iVE%2FZMr%2BHkk12jknxEZkys6V0BGY9tVyAgU5rKf2taa4nUhCP8NxIOFVLr2VyFz8I0jedyWuij6bu2QharFosWfWkPe6nYbz6oHyfZJciksfq8lJf9rikcPhMyYHDmmX0r%2Bc%2Fz%2Fio3K39RVwSpX5X7thL%2F5Z6PMps4hNkYnObt0pz4LqBi9zyTcuSEQgS0RXPxYeb9n4XIvo7MLorEa8sLQEheUawvKrq5KnpFt9jLMlar2DRfZ8sFyBxkzGkTqU8NJWERhyVYKuQdoEjmHOuyc60GEDmQ1hfmiVcjqWGeHJV3x594xW0EjIxn%2Bij%2Bz9HRFKVGLM7Rh%2Bwbs%2BcBvarGTj6jKR6wWHhsbaGpDeOH%2Bi%2FBsebF%2Fi2lJJ8HIo0OebU%2FYCeLUUgwsnFhxRCcYtCnkG%2FRgkb7Oa7zc%2FwRaUTLLlkbq5g6y37jB%2FAvnWVnsgC7b6xwZ%2FWDqjwiQaLRQu7Bay0lWHLUao2oTCgpI7ABjqkAZ%2BZrtHYXFEwsY%2FnPf%2FGLKeqZxG1F5g9L0jE%2FDa0lMEx4XpxOGAfVBFVJsWUY6oDimyF7I96YrJ%2B0fuLNav%2Fcb0IOT6Fuv9i%2BzmHgumqWzkfsyf7EW8Gffm68bjcDZq6OhkUp363G2yjTf4TED0EwZ%2B4Ztk3d1TG9c%2B3%2FnnrrevUhq0QdwRIRU7%2BDcbBakUxH6yYG0G5Ryij%2B7icShSTzLK3PXoG&X-Amz-Signature=c362f7d369cfacf30753a55757f785274fdb8ee06db7e736edd7d881f69db80f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T2WJTV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDoLK3OVc%2Bu5y4ZRVul%2B3nvXo8OyG71n1wKL7pwDvVrNQIhAJ2ZkgQeyFTpcK1ajV68leU6kcjE8k0XhWcEFLt894KgKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuz2iHsqkNDqRgkCMq3AOBZGqHQS4kEvouT3Wo5wdz8d%2F2t8%2Fr3d%2BsOhYIvlAzJcpJWgYu1KdZ0xdHWZwFZCfvg9iUUAxGeNs0HehRuLX5Z4bQba6dnwIGZj26J5sAjsthRmH%2Bk2Y3Ge3jNf0YZgtmPbUiw4z0uKyaRXX6Zm62Lq9iVE%2FZMr%2BHkk12jknxEZkys6V0BGY9tVyAgU5rKf2taa4nUhCP8NxIOFVLr2VyFz8I0jedyWuij6bu2QharFosWfWkPe6nYbz6oHyfZJciksfq8lJf9rikcPhMyYHDmmX0r%2Bc%2Fz%2Fio3K39RVwSpX5X7thL%2F5Z6PMps4hNkYnObt0pz4LqBi9zyTcuSEQgS0RXPxYeb9n4XIvo7MLorEa8sLQEheUawvKrq5KnpFt9jLMlar2DRfZ8sFyBxkzGkTqU8NJWERhyVYKuQdoEjmHOuyc60GEDmQ1hfmiVcjqWGeHJV3x594xW0EjIxn%2Bij%2Bz9HRFKVGLM7Rh%2Bwbs%2BcBvarGTj6jKR6wWHhsbaGpDeOH%2Bi%2FBsebF%2Fi2lJJ8HIo0OebU%2FYCeLUUgwsnFhxRCcYtCnkG%2FRgkb7Oa7zc%2FwRaUTLLlkbq5g6y37jB%2FAvnWVnsgC7b6xwZ%2FWDqjwiQaLRQu7Bay0lWHLUao2oTCgpI7ABjqkAZ%2BZrtHYXFEwsY%2FnPf%2FGLKeqZxG1F5g9L0jE%2FDa0lMEx4XpxOGAfVBFVJsWUY6oDimyF7I96YrJ%2B0fuLNav%2Fcb0IOT6Fuv9i%2BzmHgumqWzkfsyf7EW8Gffm68bjcDZq6OhkUp363G2yjTf4TED0EwZ%2B4Ztk3d1TG9c%2B3%2FnnrrevUhq0QdwRIRU7%2BDcbBakUxH6yYG0G5Ryij%2B7icShSTzLK3PXoG&X-Amz-Signature=2a5a7f8c5eee339fbd473e5c9172c629dc718f7aa493e769ddf3746b71b6afe3&X-Amz-SignedHeaders=host&x-id=GetObject)
