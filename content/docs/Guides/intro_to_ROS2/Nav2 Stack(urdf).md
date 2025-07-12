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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFU4GPKQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdkdUFuOp1ZhZ7kUJa7HbdV84M7KwUAQbapA3IYgpvfAiBxORM2grk%2BVcd7jL8oq4ulZx9cEcJRmtXJbixrbu7QCiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhfd5tNPkuhEGzRLKtwDhNsfIv3vtEQiaIj78Qnug%2ByTN%2BVGZ1Zg0ptHzN2LPXN6KVc%2BmhwocrVbTF30f7aWgUbhoeSl1gJ2KGXDA3pBSaSBnBtDdBfRfj9%2BnXwIzEy5XdSbrgP0KLciJpdYmkjxLufR8%2FSXPzq5glYCrneD%2FPyrmZm4VKqNVpVdMumXHOTer68HQQJbJaJOnklgy1ubXsY0c0xMCp%2F34S9lTjxDlgcW1lmnfCNxmbxxLmY4Hutl46wVX56ClZzlzjbCs0wtmMwkiQw9X9XkKduP2mFx7G0B0hxD%2BujgGVXgz6DGkAkmmBDvOjl9147rVd3V7aJagqTRwhAmjSYaU50Ubwlqt54nkGtPxuXwWeZjS%2FB7ORE87A8S6Ad84n7KvKD64Kt%2FjNCa1BhO6A9rfwovYLNHtdkrt5lJoDL6X5nmWluShoKtt44zq%2BUACAPttP8BEaTLVrphIVIIzdldav8w1c%2BJ7QVlHug5bZfkGDyi9YECBzHM5THrwKtFWe%2F996ZBIwOD94kiIjRMfAjYZT%2FGhRGAf9U6m6ZXzNxCnZy1KRLVBX%2FGHtEVKyHEG5jqXdd3VHCtLj0WQ88%2FJGOokVO7YQeyMnK9qnP%2Bk2nYXF71GiZQ%2B7OLdWdvjC1tXgxfDwgw%2BtjKwwY6pgF4m9NpwbumhhvgEwJO9cj36zTDFSQVevV5JZ3ApCEfMtt6dnAZmviGL9aB3seoqmCj%2Fy9lFKZ1MGpP0Q7JnIuJ60ajS%2Bsg5Zg%2BRgvdSDfe0asFNXZxdZfDJoJPl9nTepb5dZHN1FtsM1cdmc5zdbO2qxQb6ubpHrFx2xtybuIwXVT7wCHExRxDCsOLc%2FsxaISrwwiUoqTEiDoyN2WUmX%2BgxFO%2FGzki&X-Amz-Signature=0e7e18754ad8977ead2f4342df3fa5fdd38ceee6ff0d8b412cad8fa2b05b6d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFU4GPKQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdkdUFuOp1ZhZ7kUJa7HbdV84M7KwUAQbapA3IYgpvfAiBxORM2grk%2BVcd7jL8oq4ulZx9cEcJRmtXJbixrbu7QCiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhfd5tNPkuhEGzRLKtwDhNsfIv3vtEQiaIj78Qnug%2ByTN%2BVGZ1Zg0ptHzN2LPXN6KVc%2BmhwocrVbTF30f7aWgUbhoeSl1gJ2KGXDA3pBSaSBnBtDdBfRfj9%2BnXwIzEy5XdSbrgP0KLciJpdYmkjxLufR8%2FSXPzq5glYCrneD%2FPyrmZm4VKqNVpVdMumXHOTer68HQQJbJaJOnklgy1ubXsY0c0xMCp%2F34S9lTjxDlgcW1lmnfCNxmbxxLmY4Hutl46wVX56ClZzlzjbCs0wtmMwkiQw9X9XkKduP2mFx7G0B0hxD%2BujgGVXgz6DGkAkmmBDvOjl9147rVd3V7aJagqTRwhAmjSYaU50Ubwlqt54nkGtPxuXwWeZjS%2FB7ORE87A8S6Ad84n7KvKD64Kt%2FjNCa1BhO6A9rfwovYLNHtdkrt5lJoDL6X5nmWluShoKtt44zq%2BUACAPttP8BEaTLVrphIVIIzdldav8w1c%2BJ7QVlHug5bZfkGDyi9YECBzHM5THrwKtFWe%2F996ZBIwOD94kiIjRMfAjYZT%2FGhRGAf9U6m6ZXzNxCnZy1KRLVBX%2FGHtEVKyHEG5jqXdd3VHCtLj0WQ88%2FJGOokVO7YQeyMnK9qnP%2Bk2nYXF71GiZQ%2B7OLdWdvjC1tXgxfDwgw%2BtjKwwY6pgF4m9NpwbumhhvgEwJO9cj36zTDFSQVevV5JZ3ApCEfMtt6dnAZmviGL9aB3seoqmCj%2Fy9lFKZ1MGpP0Q7JnIuJ60ajS%2Bsg5Zg%2BRgvdSDfe0asFNXZxdZfDJoJPl9nTepb5dZHN1FtsM1cdmc5zdbO2qxQb6ubpHrFx2xtybuIwXVT7wCHExRxDCsOLc%2FsxaISrwwiUoqTEiDoyN2WUmX%2BgxFO%2FGzki&X-Amz-Signature=7b2f9aebc3e043a0f2455321b30c11ff77b290d3d37c9a4d382cb7ec4adf6925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFU4GPKQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdkdUFuOp1ZhZ7kUJa7HbdV84M7KwUAQbapA3IYgpvfAiBxORM2grk%2BVcd7jL8oq4ulZx9cEcJRmtXJbixrbu7QCiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhfd5tNPkuhEGzRLKtwDhNsfIv3vtEQiaIj78Qnug%2ByTN%2BVGZ1Zg0ptHzN2LPXN6KVc%2BmhwocrVbTF30f7aWgUbhoeSl1gJ2KGXDA3pBSaSBnBtDdBfRfj9%2BnXwIzEy5XdSbrgP0KLciJpdYmkjxLufR8%2FSXPzq5glYCrneD%2FPyrmZm4VKqNVpVdMumXHOTer68HQQJbJaJOnklgy1ubXsY0c0xMCp%2F34S9lTjxDlgcW1lmnfCNxmbxxLmY4Hutl46wVX56ClZzlzjbCs0wtmMwkiQw9X9XkKduP2mFx7G0B0hxD%2BujgGVXgz6DGkAkmmBDvOjl9147rVd3V7aJagqTRwhAmjSYaU50Ubwlqt54nkGtPxuXwWeZjS%2FB7ORE87A8S6Ad84n7KvKD64Kt%2FjNCa1BhO6A9rfwovYLNHtdkrt5lJoDL6X5nmWluShoKtt44zq%2BUACAPttP8BEaTLVrphIVIIzdldav8w1c%2BJ7QVlHug5bZfkGDyi9YECBzHM5THrwKtFWe%2F996ZBIwOD94kiIjRMfAjYZT%2FGhRGAf9U6m6ZXzNxCnZy1KRLVBX%2FGHtEVKyHEG5jqXdd3VHCtLj0WQ88%2FJGOokVO7YQeyMnK9qnP%2Bk2nYXF71GiZQ%2B7OLdWdvjC1tXgxfDwgw%2BtjKwwY6pgF4m9NpwbumhhvgEwJO9cj36zTDFSQVevV5JZ3ApCEfMtt6dnAZmviGL9aB3seoqmCj%2Fy9lFKZ1MGpP0Q7JnIuJ60ajS%2Bsg5Zg%2BRgvdSDfe0asFNXZxdZfDJoJPl9nTepb5dZHN1FtsM1cdmc5zdbO2qxQb6ubpHrFx2xtybuIwXVT7wCHExRxDCsOLc%2FsxaISrwwiUoqTEiDoyN2WUmX%2BgxFO%2FGzki&X-Amz-Signature=c9e126fe4c51541cff8c367ca871edb3b4ae1833abbce2c9833abab4bc9d5075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFU4GPKQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdkdUFuOp1ZhZ7kUJa7HbdV84M7KwUAQbapA3IYgpvfAiBxORM2grk%2BVcd7jL8oq4ulZx9cEcJRmtXJbixrbu7QCiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhfd5tNPkuhEGzRLKtwDhNsfIv3vtEQiaIj78Qnug%2ByTN%2BVGZ1Zg0ptHzN2LPXN6KVc%2BmhwocrVbTF30f7aWgUbhoeSl1gJ2KGXDA3pBSaSBnBtDdBfRfj9%2BnXwIzEy5XdSbrgP0KLciJpdYmkjxLufR8%2FSXPzq5glYCrneD%2FPyrmZm4VKqNVpVdMumXHOTer68HQQJbJaJOnklgy1ubXsY0c0xMCp%2F34S9lTjxDlgcW1lmnfCNxmbxxLmY4Hutl46wVX56ClZzlzjbCs0wtmMwkiQw9X9XkKduP2mFx7G0B0hxD%2BujgGVXgz6DGkAkmmBDvOjl9147rVd3V7aJagqTRwhAmjSYaU50Ubwlqt54nkGtPxuXwWeZjS%2FB7ORE87A8S6Ad84n7KvKD64Kt%2FjNCa1BhO6A9rfwovYLNHtdkrt5lJoDL6X5nmWluShoKtt44zq%2BUACAPttP8BEaTLVrphIVIIzdldav8w1c%2BJ7QVlHug5bZfkGDyi9YECBzHM5THrwKtFWe%2F996ZBIwOD94kiIjRMfAjYZT%2FGhRGAf9U6m6ZXzNxCnZy1KRLVBX%2FGHtEVKyHEG5jqXdd3VHCtLj0WQ88%2FJGOokVO7YQeyMnK9qnP%2Bk2nYXF71GiZQ%2B7OLdWdvjC1tXgxfDwgw%2BtjKwwY6pgF4m9NpwbumhhvgEwJO9cj36zTDFSQVevV5JZ3ApCEfMtt6dnAZmviGL9aB3seoqmCj%2Fy9lFKZ1MGpP0Q7JnIuJ60ajS%2Bsg5Zg%2BRgvdSDfe0asFNXZxdZfDJoJPl9nTepb5dZHN1FtsM1cdmc5zdbO2qxQb6ubpHrFx2xtybuIwXVT7wCHExRxDCsOLc%2FsxaISrwwiUoqTEiDoyN2WUmX%2BgxFO%2FGzki&X-Amz-Signature=b1112ddcf0bb214c6712d3a6e6bbd04cc6f1fc3a58808cac4aadf8fa7609b61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFU4GPKQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdkdUFuOp1ZhZ7kUJa7HbdV84M7KwUAQbapA3IYgpvfAiBxORM2grk%2BVcd7jL8oq4ulZx9cEcJRmtXJbixrbu7QCiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhfd5tNPkuhEGzRLKtwDhNsfIv3vtEQiaIj78Qnug%2ByTN%2BVGZ1Zg0ptHzN2LPXN6KVc%2BmhwocrVbTF30f7aWgUbhoeSl1gJ2KGXDA3pBSaSBnBtDdBfRfj9%2BnXwIzEy5XdSbrgP0KLciJpdYmkjxLufR8%2FSXPzq5glYCrneD%2FPyrmZm4VKqNVpVdMumXHOTer68HQQJbJaJOnklgy1ubXsY0c0xMCp%2F34S9lTjxDlgcW1lmnfCNxmbxxLmY4Hutl46wVX56ClZzlzjbCs0wtmMwkiQw9X9XkKduP2mFx7G0B0hxD%2BujgGVXgz6DGkAkmmBDvOjl9147rVd3V7aJagqTRwhAmjSYaU50Ubwlqt54nkGtPxuXwWeZjS%2FB7ORE87A8S6Ad84n7KvKD64Kt%2FjNCa1BhO6A9rfwovYLNHtdkrt5lJoDL6X5nmWluShoKtt44zq%2BUACAPttP8BEaTLVrphIVIIzdldav8w1c%2BJ7QVlHug5bZfkGDyi9YECBzHM5THrwKtFWe%2F996ZBIwOD94kiIjRMfAjYZT%2FGhRGAf9U6m6ZXzNxCnZy1KRLVBX%2FGHtEVKyHEG5jqXdd3VHCtLj0WQ88%2FJGOokVO7YQeyMnK9qnP%2Bk2nYXF71GiZQ%2B7OLdWdvjC1tXgxfDwgw%2BtjKwwY6pgF4m9NpwbumhhvgEwJO9cj36zTDFSQVevV5JZ3ApCEfMtt6dnAZmviGL9aB3seoqmCj%2Fy9lFKZ1MGpP0Q7JnIuJ60ajS%2Bsg5Zg%2BRgvdSDfe0asFNXZxdZfDJoJPl9nTepb5dZHN1FtsM1cdmc5zdbO2qxQb6ubpHrFx2xtybuIwXVT7wCHExRxDCsOLc%2FsxaISrwwiUoqTEiDoyN2WUmX%2BgxFO%2FGzki&X-Amz-Signature=6ba96dc4cc8f18ae089b977e23ca317a8350d0b77ad1f821847d4f315c38da17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFU4GPKQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdkdUFuOp1ZhZ7kUJa7HbdV84M7KwUAQbapA3IYgpvfAiBxORM2grk%2BVcd7jL8oq4ulZx9cEcJRmtXJbixrbu7QCiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhfd5tNPkuhEGzRLKtwDhNsfIv3vtEQiaIj78Qnug%2ByTN%2BVGZ1Zg0ptHzN2LPXN6KVc%2BmhwocrVbTF30f7aWgUbhoeSl1gJ2KGXDA3pBSaSBnBtDdBfRfj9%2BnXwIzEy5XdSbrgP0KLciJpdYmkjxLufR8%2FSXPzq5glYCrneD%2FPyrmZm4VKqNVpVdMumXHOTer68HQQJbJaJOnklgy1ubXsY0c0xMCp%2F34S9lTjxDlgcW1lmnfCNxmbxxLmY4Hutl46wVX56ClZzlzjbCs0wtmMwkiQw9X9XkKduP2mFx7G0B0hxD%2BujgGVXgz6DGkAkmmBDvOjl9147rVd3V7aJagqTRwhAmjSYaU50Ubwlqt54nkGtPxuXwWeZjS%2FB7ORE87A8S6Ad84n7KvKD64Kt%2FjNCa1BhO6A9rfwovYLNHtdkrt5lJoDL6X5nmWluShoKtt44zq%2BUACAPttP8BEaTLVrphIVIIzdldav8w1c%2BJ7QVlHug5bZfkGDyi9YECBzHM5THrwKtFWe%2F996ZBIwOD94kiIjRMfAjYZT%2FGhRGAf9U6m6ZXzNxCnZy1KRLVBX%2FGHtEVKyHEG5jqXdd3VHCtLj0WQ88%2FJGOokVO7YQeyMnK9qnP%2Bk2nYXF71GiZQ%2B7OLdWdvjC1tXgxfDwgw%2BtjKwwY6pgF4m9NpwbumhhvgEwJO9cj36zTDFSQVevV5JZ3ApCEfMtt6dnAZmviGL9aB3seoqmCj%2Fy9lFKZ1MGpP0Q7JnIuJ60ajS%2Bsg5Zg%2BRgvdSDfe0asFNXZxdZfDJoJPl9nTepb5dZHN1FtsM1cdmc5zdbO2qxQb6ubpHrFx2xtybuIwXVT7wCHExRxDCsOLc%2FsxaISrwwiUoqTEiDoyN2WUmX%2BgxFO%2FGzki&X-Amz-Signature=67fc4bc8ca05dfdfb690aa138eca56ffd357c900c8f163117e84b7e7d8239d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
