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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36ZUUVQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIET%2FcGGSgrR5bHKXxoaCk4%2FFt0OAdcymbulbH%2FZYHrRxAiBlCqjk%2FKUByqyzZVXXFuq%2B1RG6ciY4XGxHpGrLc2bvMSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMy8ZDOqn6oNCzS8CWKtwDn13fWbui9%2Bg3od%2FT5nRIiqxCNZSb%2Bc12OD1vKuSTWXds94MJVwhS75RIGcZekN6KTWi4064ReM9gs9WdMLn%2Fbzd4AQYzCymi0RM1KnNlaBofaq9zY7KExYddQH2GVN8r%2F0G87LLBMgqZR5zRGzgmOGw1slWOnxf1jHyoc%2BBv7k470b6KM9F2Kp9z7zvn7Gu6wu6U566kDROJNNttv8zwtIKfVAG%2BYUnionJ9YrIIdui7ysDwNz2BV5nrQZqfzU6S44JNkxdC%2Fwp%2F%2B80dscJFGiwn%2FbYzGWtKhcVpjoQxk1an6HU8xPgx0zewg89%2Fm3wvmvPN4TUC1slz7dxt3wvlcyGuwHGNsIbkUppI1h%2FH9KBY25sWFXDuLqcHFPPYfF%2BzcH76p%2B%2BFvnhyYROwjdY9NiS7%2FhFuVGu9Btaxv1kZzGcxTdXgtIt8pthV%2FFprKZ%2Fgclv0ivlNWuiIJ8gT18TlpfUbsD1x0KcDGSE8UD1OlG2zNTqKs1HCsQRxfLrzC69R53IHxc0u43%2BkW3wXvTI4axDgwYuNG66yGLDljIVOf1FKBfxcnF4JJRr2WbSXdGsLxr%2BAsPaxGpxG6B%2B%2BGkRpAw46gAPBTjFNLpva0t8y7lSt93aqcn0LRHpgymsw6%2BzBvQY6pgEnb40ZUVuVSeP6%2FahL3AwlZT5cxz7x3RvEZhqf8xI7ILCQ0Tul%2F6UYiOJ%2FvqjA4R8H8YWJ68R8DySCX13PlSdhZNh10hjsbv%2FkUKNTf6EblAkvpZRj1v9BPnWovQKz9slUJXhfeuwmGnspRWs4wiUuQNB%2FniwhXM%2BwU%2FXeBQ%2Beb1LyhqwF1xRtXhe15ZrKTmnU%2FCnpWC5yi1sZWtrliBfQD3KmT4M8&X-Amz-Signature=58d12551aaa8154aa20f946184e8735306b233b840f8ab6756f8451133c83b12&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36ZUUVQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIET%2FcGGSgrR5bHKXxoaCk4%2FFt0OAdcymbulbH%2FZYHrRxAiBlCqjk%2FKUByqyzZVXXFuq%2B1RG6ciY4XGxHpGrLc2bvMSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMy8ZDOqn6oNCzS8CWKtwDn13fWbui9%2Bg3od%2FT5nRIiqxCNZSb%2Bc12OD1vKuSTWXds94MJVwhS75RIGcZekN6KTWi4064ReM9gs9WdMLn%2Fbzd4AQYzCymi0RM1KnNlaBofaq9zY7KExYddQH2GVN8r%2F0G87LLBMgqZR5zRGzgmOGw1slWOnxf1jHyoc%2BBv7k470b6KM9F2Kp9z7zvn7Gu6wu6U566kDROJNNttv8zwtIKfVAG%2BYUnionJ9YrIIdui7ysDwNz2BV5nrQZqfzU6S44JNkxdC%2Fwp%2F%2B80dscJFGiwn%2FbYzGWtKhcVpjoQxk1an6HU8xPgx0zewg89%2Fm3wvmvPN4TUC1slz7dxt3wvlcyGuwHGNsIbkUppI1h%2FH9KBY25sWFXDuLqcHFPPYfF%2BzcH76p%2B%2BFvnhyYROwjdY9NiS7%2FhFuVGu9Btaxv1kZzGcxTdXgtIt8pthV%2FFprKZ%2Fgclv0ivlNWuiIJ8gT18TlpfUbsD1x0KcDGSE8UD1OlG2zNTqKs1HCsQRxfLrzC69R53IHxc0u43%2BkW3wXvTI4axDgwYuNG66yGLDljIVOf1FKBfxcnF4JJRr2WbSXdGsLxr%2BAsPaxGpxG6B%2B%2BGkRpAw46gAPBTjFNLpva0t8y7lSt93aqcn0LRHpgymsw6%2BzBvQY6pgEnb40ZUVuVSeP6%2FahL3AwlZT5cxz7x3RvEZhqf8xI7ILCQ0Tul%2F6UYiOJ%2FvqjA4R8H8YWJ68R8DySCX13PlSdhZNh10hjsbv%2FkUKNTf6EblAkvpZRj1v9BPnWovQKz9slUJXhfeuwmGnspRWs4wiUuQNB%2FniwhXM%2BwU%2FXeBQ%2Beb1LyhqwF1xRtXhe15ZrKTmnU%2FCnpWC5yi1sZWtrliBfQD3KmT4M8&X-Amz-Signature=902dbe73ddd5cbb7062d4100b4194eb9ec0f8e7d71b395b30790135a106cf568&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36ZUUVQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIET%2FcGGSgrR5bHKXxoaCk4%2FFt0OAdcymbulbH%2FZYHrRxAiBlCqjk%2FKUByqyzZVXXFuq%2B1RG6ciY4XGxHpGrLc2bvMSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMy8ZDOqn6oNCzS8CWKtwDn13fWbui9%2Bg3od%2FT5nRIiqxCNZSb%2Bc12OD1vKuSTWXds94MJVwhS75RIGcZekN6KTWi4064ReM9gs9WdMLn%2Fbzd4AQYzCymi0RM1KnNlaBofaq9zY7KExYddQH2GVN8r%2F0G87LLBMgqZR5zRGzgmOGw1slWOnxf1jHyoc%2BBv7k470b6KM9F2Kp9z7zvn7Gu6wu6U566kDROJNNttv8zwtIKfVAG%2BYUnionJ9YrIIdui7ysDwNz2BV5nrQZqfzU6S44JNkxdC%2Fwp%2F%2B80dscJFGiwn%2FbYzGWtKhcVpjoQxk1an6HU8xPgx0zewg89%2Fm3wvmvPN4TUC1slz7dxt3wvlcyGuwHGNsIbkUppI1h%2FH9KBY25sWFXDuLqcHFPPYfF%2BzcH76p%2B%2BFvnhyYROwjdY9NiS7%2FhFuVGu9Btaxv1kZzGcxTdXgtIt8pthV%2FFprKZ%2Fgclv0ivlNWuiIJ8gT18TlpfUbsD1x0KcDGSE8UD1OlG2zNTqKs1HCsQRxfLrzC69R53IHxc0u43%2BkW3wXvTI4axDgwYuNG66yGLDljIVOf1FKBfxcnF4JJRr2WbSXdGsLxr%2BAsPaxGpxG6B%2B%2BGkRpAw46gAPBTjFNLpva0t8y7lSt93aqcn0LRHpgymsw6%2BzBvQY6pgEnb40ZUVuVSeP6%2FahL3AwlZT5cxz7x3RvEZhqf8xI7ILCQ0Tul%2F6UYiOJ%2FvqjA4R8H8YWJ68R8DySCX13PlSdhZNh10hjsbv%2FkUKNTf6EblAkvpZRj1v9BPnWovQKz9slUJXhfeuwmGnspRWs4wiUuQNB%2FniwhXM%2BwU%2FXeBQ%2Beb1LyhqwF1xRtXhe15ZrKTmnU%2FCnpWC5yi1sZWtrliBfQD3KmT4M8&X-Amz-Signature=37037e5f9407764686d9b881eb8b69a269376e5a07c0a18fbf5a8915504e14d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36ZUUVQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIET%2FcGGSgrR5bHKXxoaCk4%2FFt0OAdcymbulbH%2FZYHrRxAiBlCqjk%2FKUByqyzZVXXFuq%2B1RG6ciY4XGxHpGrLc2bvMSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMy8ZDOqn6oNCzS8CWKtwDn13fWbui9%2Bg3od%2FT5nRIiqxCNZSb%2Bc12OD1vKuSTWXds94MJVwhS75RIGcZekN6KTWi4064ReM9gs9WdMLn%2Fbzd4AQYzCymi0RM1KnNlaBofaq9zY7KExYddQH2GVN8r%2F0G87LLBMgqZR5zRGzgmOGw1slWOnxf1jHyoc%2BBv7k470b6KM9F2Kp9z7zvn7Gu6wu6U566kDROJNNttv8zwtIKfVAG%2BYUnionJ9YrIIdui7ysDwNz2BV5nrQZqfzU6S44JNkxdC%2Fwp%2F%2B80dscJFGiwn%2FbYzGWtKhcVpjoQxk1an6HU8xPgx0zewg89%2Fm3wvmvPN4TUC1slz7dxt3wvlcyGuwHGNsIbkUppI1h%2FH9KBY25sWFXDuLqcHFPPYfF%2BzcH76p%2B%2BFvnhyYROwjdY9NiS7%2FhFuVGu9Btaxv1kZzGcxTdXgtIt8pthV%2FFprKZ%2Fgclv0ivlNWuiIJ8gT18TlpfUbsD1x0KcDGSE8UD1OlG2zNTqKs1HCsQRxfLrzC69R53IHxc0u43%2BkW3wXvTI4axDgwYuNG66yGLDljIVOf1FKBfxcnF4JJRr2WbSXdGsLxr%2BAsPaxGpxG6B%2B%2BGkRpAw46gAPBTjFNLpva0t8y7lSt93aqcn0LRHpgymsw6%2BzBvQY6pgEnb40ZUVuVSeP6%2FahL3AwlZT5cxz7x3RvEZhqf8xI7ILCQ0Tul%2F6UYiOJ%2FvqjA4R8H8YWJ68R8DySCX13PlSdhZNh10hjsbv%2FkUKNTf6EblAkvpZRj1v9BPnWovQKz9slUJXhfeuwmGnspRWs4wiUuQNB%2FniwhXM%2BwU%2FXeBQ%2Beb1LyhqwF1xRtXhe15ZrKTmnU%2FCnpWC5yi1sZWtrliBfQD3KmT4M8&X-Amz-Signature=c4c1bf56334f1241de567767ad147b2d403b22ca07ecd8c8bf5afe1ed5745577&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36ZUUVQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIET%2FcGGSgrR5bHKXxoaCk4%2FFt0OAdcymbulbH%2FZYHrRxAiBlCqjk%2FKUByqyzZVXXFuq%2B1RG6ciY4XGxHpGrLc2bvMSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMy8ZDOqn6oNCzS8CWKtwDn13fWbui9%2Bg3od%2FT5nRIiqxCNZSb%2Bc12OD1vKuSTWXds94MJVwhS75RIGcZekN6KTWi4064ReM9gs9WdMLn%2Fbzd4AQYzCymi0RM1KnNlaBofaq9zY7KExYddQH2GVN8r%2F0G87LLBMgqZR5zRGzgmOGw1slWOnxf1jHyoc%2BBv7k470b6KM9F2Kp9z7zvn7Gu6wu6U566kDROJNNttv8zwtIKfVAG%2BYUnionJ9YrIIdui7ysDwNz2BV5nrQZqfzU6S44JNkxdC%2Fwp%2F%2B80dscJFGiwn%2FbYzGWtKhcVpjoQxk1an6HU8xPgx0zewg89%2Fm3wvmvPN4TUC1slz7dxt3wvlcyGuwHGNsIbkUppI1h%2FH9KBY25sWFXDuLqcHFPPYfF%2BzcH76p%2B%2BFvnhyYROwjdY9NiS7%2FhFuVGu9Btaxv1kZzGcxTdXgtIt8pthV%2FFprKZ%2Fgclv0ivlNWuiIJ8gT18TlpfUbsD1x0KcDGSE8UD1OlG2zNTqKs1HCsQRxfLrzC69R53IHxc0u43%2BkW3wXvTI4axDgwYuNG66yGLDljIVOf1FKBfxcnF4JJRr2WbSXdGsLxr%2BAsPaxGpxG6B%2B%2BGkRpAw46gAPBTjFNLpva0t8y7lSt93aqcn0LRHpgymsw6%2BzBvQY6pgEnb40ZUVuVSeP6%2FahL3AwlZT5cxz7x3RvEZhqf8xI7ILCQ0Tul%2F6UYiOJ%2FvqjA4R8H8YWJ68R8DySCX13PlSdhZNh10hjsbv%2FkUKNTf6EblAkvpZRj1v9BPnWovQKz9slUJXhfeuwmGnspRWs4wiUuQNB%2FniwhXM%2BwU%2FXeBQ%2Beb1LyhqwF1xRtXhe15ZrKTmnU%2FCnpWC5yi1sZWtrliBfQD3KmT4M8&X-Amz-Signature=4fa7b2d05ba2a68e92a0bd6ba59300d8c4633ff6960536a8cbef4f315e00f780&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36ZUUVQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIET%2FcGGSgrR5bHKXxoaCk4%2FFt0OAdcymbulbH%2FZYHrRxAiBlCqjk%2FKUByqyzZVXXFuq%2B1RG6ciY4XGxHpGrLc2bvMSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMy8ZDOqn6oNCzS8CWKtwDn13fWbui9%2Bg3od%2FT5nRIiqxCNZSb%2Bc12OD1vKuSTWXds94MJVwhS75RIGcZekN6KTWi4064ReM9gs9WdMLn%2Fbzd4AQYzCymi0RM1KnNlaBofaq9zY7KExYddQH2GVN8r%2F0G87LLBMgqZR5zRGzgmOGw1slWOnxf1jHyoc%2BBv7k470b6KM9F2Kp9z7zvn7Gu6wu6U566kDROJNNttv8zwtIKfVAG%2BYUnionJ9YrIIdui7ysDwNz2BV5nrQZqfzU6S44JNkxdC%2Fwp%2F%2B80dscJFGiwn%2FbYzGWtKhcVpjoQxk1an6HU8xPgx0zewg89%2Fm3wvmvPN4TUC1slz7dxt3wvlcyGuwHGNsIbkUppI1h%2FH9KBY25sWFXDuLqcHFPPYfF%2BzcH76p%2B%2BFvnhyYROwjdY9NiS7%2FhFuVGu9Btaxv1kZzGcxTdXgtIt8pthV%2FFprKZ%2Fgclv0ivlNWuiIJ8gT18TlpfUbsD1x0KcDGSE8UD1OlG2zNTqKs1HCsQRxfLrzC69R53IHxc0u43%2BkW3wXvTI4axDgwYuNG66yGLDljIVOf1FKBfxcnF4JJRr2WbSXdGsLxr%2BAsPaxGpxG6B%2B%2BGkRpAw46gAPBTjFNLpva0t8y7lSt93aqcn0LRHpgymsw6%2BzBvQY6pgEnb40ZUVuVSeP6%2FahL3AwlZT5cxz7x3RvEZhqf8xI7ILCQ0Tul%2F6UYiOJ%2FvqjA4R8H8YWJ68R8DySCX13PlSdhZNh10hjsbv%2FkUKNTf6EblAkvpZRj1v9BPnWovQKz9slUJXhfeuwmGnspRWs4wiUuQNB%2FniwhXM%2BwU%2FXeBQ%2Beb1LyhqwF1xRtXhe15ZrKTmnU%2FCnpWC5yi1sZWtrliBfQD3KmT4M8&X-Amz-Signature=1bfe1b87a12aeda8d2a80ff4ec434a914b9bf9ddc79223fa49129a2bb8ee7bf1&X-Amz-SignedHeaders=host&x-id=GetObject)
