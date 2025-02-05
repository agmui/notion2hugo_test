---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TADMUMI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCqW9BS9cxZ3%2F9Naa%2BRfP64XqJj56fR1ymHj9ykFuXwPgIhAKI%2FTyoOLhlQhVfadiN13DVhjF1Nl1S3rfm9qZadPwH0Kv8DCEEQABoMNjM3NDIzMTgzODA1Igyut005QvWvfZ%2BC3T0q3APsC%2BWPPaDi0m3ZcOxIjLi3h8ja1myR9oLMqFZLkA9qn0yLgMba%2F6Xn5mmO%2FNWw%2F2BOa%2BRd6FsQOGKoQbBaKPcXG7fVpCS2jsRxnd0%2BtcmMzDBgKomyfFfwlGgyoS%2F1dK7NyZPpXh2%2FpxHVygO%2FL6Clu7DKXGZ%2BJ9n3e8WuhgHZIlUegTzPuPEk8t%2FZ5E2NipI5BvQqejdoIBuePgxR5wQ8EYcFKdIcj81dsuJ1HZ4Qas7EfjbJm8VX95f3GjOowI14Y6f4xbMlxqL6XI4t7NHmJbKTWZKLmXsd4%2FiCpDyN%2FLciTgteeMqdHwuBVl0088zunjqbb2Zq1GdFGHjJDTS0bC8bq%2FTkVV5RezC%2BtqeczIBHH0Wlm4aEks9Out7aaGm40wd8%2BfT7yblbphgLe4qgA0GCPdmx3OqOui9HquoN3%2B%2BEON3KanltQOov1YwuVopGYBxRh%2B9IKNgDXOploIUfRMvrQORtcIw805PLjo8CpDfNh7oKNyO%2B8MT3Bs3z%2BKHTKRLC54Jql05VKKLJFvscl11YHOxXesbEw2e8HJkiQ2wYlOyynvlLk5hLwaijXDjKy2o5Dq7mOFGkg8%2FE7aeS3hI7gzY4BrQOsvyVmTXLD19Km%2FDAd4M3L6z1VDC8tIy9BjqkAdcuZ6%2FZ9Vo2SOrv0fszL0fGDtNfl3xfv3tvm0%2FKilLVq%2BgxgkxveBZQonBdMeUMVAMKKs0IOZ9xdoSrVVBR%2FioJzRXgdEh%2FGM%2Fla%2F%2FX2Yj3SdNYr5PhV28Rn0ZOcFYU5vfWU4K%2FFfw570e8y9FPqq7sMqNPrFzz48Tk2%2BByuAivGO1hiOjmEwbd%2Bj60LqBJM7MRjNYvWNxnsP9vjPQ4vrzLBQm3&X-Amz-Signature=95643ddc4069bc5e2992e361884fe1040ce45bf8fbfb2d66f964122b962c4ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TADMUMI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCqW9BS9cxZ3%2F9Naa%2BRfP64XqJj56fR1ymHj9ykFuXwPgIhAKI%2FTyoOLhlQhVfadiN13DVhjF1Nl1S3rfm9qZadPwH0Kv8DCEEQABoMNjM3NDIzMTgzODA1Igyut005QvWvfZ%2BC3T0q3APsC%2BWPPaDi0m3ZcOxIjLi3h8ja1myR9oLMqFZLkA9qn0yLgMba%2F6Xn5mmO%2FNWw%2F2BOa%2BRd6FsQOGKoQbBaKPcXG7fVpCS2jsRxnd0%2BtcmMzDBgKomyfFfwlGgyoS%2F1dK7NyZPpXh2%2FpxHVygO%2FL6Clu7DKXGZ%2BJ9n3e8WuhgHZIlUegTzPuPEk8t%2FZ5E2NipI5BvQqejdoIBuePgxR5wQ8EYcFKdIcj81dsuJ1HZ4Qas7EfjbJm8VX95f3GjOowI14Y6f4xbMlxqL6XI4t7NHmJbKTWZKLmXsd4%2FiCpDyN%2FLciTgteeMqdHwuBVl0088zunjqbb2Zq1GdFGHjJDTS0bC8bq%2FTkVV5RezC%2BtqeczIBHH0Wlm4aEks9Out7aaGm40wd8%2BfT7yblbphgLe4qgA0GCPdmx3OqOui9HquoN3%2B%2BEON3KanltQOov1YwuVopGYBxRh%2B9IKNgDXOploIUfRMvrQORtcIw805PLjo8CpDfNh7oKNyO%2B8MT3Bs3z%2BKHTKRLC54Jql05VKKLJFvscl11YHOxXesbEw2e8HJkiQ2wYlOyynvlLk5hLwaijXDjKy2o5Dq7mOFGkg8%2FE7aeS3hI7gzY4BrQOsvyVmTXLD19Km%2FDAd4M3L6z1VDC8tIy9BjqkAdcuZ6%2FZ9Vo2SOrv0fszL0fGDtNfl3xfv3tvm0%2FKilLVq%2BgxgkxveBZQonBdMeUMVAMKKs0IOZ9xdoSrVVBR%2FioJzRXgdEh%2FGM%2Fla%2F%2FX2Yj3SdNYr5PhV28Rn0ZOcFYU5vfWU4K%2FFfw570e8y9FPqq7sMqNPrFzz48Tk2%2BByuAivGO1hiOjmEwbd%2Bj60LqBJM7MRjNYvWNxnsP9vjPQ4vrzLBQm3&X-Amz-Signature=48d7e7458caab2822a39404b1b69a6ddde8d68dd17804c174eef037f12465136&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TADMUMI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCqW9BS9cxZ3%2F9Naa%2BRfP64XqJj56fR1ymHj9ykFuXwPgIhAKI%2FTyoOLhlQhVfadiN13DVhjF1Nl1S3rfm9qZadPwH0Kv8DCEEQABoMNjM3NDIzMTgzODA1Igyut005QvWvfZ%2BC3T0q3APsC%2BWPPaDi0m3ZcOxIjLi3h8ja1myR9oLMqFZLkA9qn0yLgMba%2F6Xn5mmO%2FNWw%2F2BOa%2BRd6FsQOGKoQbBaKPcXG7fVpCS2jsRxnd0%2BtcmMzDBgKomyfFfwlGgyoS%2F1dK7NyZPpXh2%2FpxHVygO%2FL6Clu7DKXGZ%2BJ9n3e8WuhgHZIlUegTzPuPEk8t%2FZ5E2NipI5BvQqejdoIBuePgxR5wQ8EYcFKdIcj81dsuJ1HZ4Qas7EfjbJm8VX95f3GjOowI14Y6f4xbMlxqL6XI4t7NHmJbKTWZKLmXsd4%2FiCpDyN%2FLciTgteeMqdHwuBVl0088zunjqbb2Zq1GdFGHjJDTS0bC8bq%2FTkVV5RezC%2BtqeczIBHH0Wlm4aEks9Out7aaGm40wd8%2BfT7yblbphgLe4qgA0GCPdmx3OqOui9HquoN3%2B%2BEON3KanltQOov1YwuVopGYBxRh%2B9IKNgDXOploIUfRMvrQORtcIw805PLjo8CpDfNh7oKNyO%2B8MT3Bs3z%2BKHTKRLC54Jql05VKKLJFvscl11YHOxXesbEw2e8HJkiQ2wYlOyynvlLk5hLwaijXDjKy2o5Dq7mOFGkg8%2FE7aeS3hI7gzY4BrQOsvyVmTXLD19Km%2FDAd4M3L6z1VDC8tIy9BjqkAdcuZ6%2FZ9Vo2SOrv0fszL0fGDtNfl3xfv3tvm0%2FKilLVq%2BgxgkxveBZQonBdMeUMVAMKKs0IOZ9xdoSrVVBR%2FioJzRXgdEh%2FGM%2Fla%2F%2FX2Yj3SdNYr5PhV28Rn0ZOcFYU5vfWU4K%2FFfw570e8y9FPqq7sMqNPrFzz48Tk2%2BByuAivGO1hiOjmEwbd%2Bj60LqBJM7MRjNYvWNxnsP9vjPQ4vrzLBQm3&X-Amz-Signature=5ab87bd98ac2cd37627cca42178a9874b97b3d065fd2af925cb4aa5927e0d795&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TADMUMI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCqW9BS9cxZ3%2F9Naa%2BRfP64XqJj56fR1ymHj9ykFuXwPgIhAKI%2FTyoOLhlQhVfadiN13DVhjF1Nl1S3rfm9qZadPwH0Kv8DCEEQABoMNjM3NDIzMTgzODA1Igyut005QvWvfZ%2BC3T0q3APsC%2BWPPaDi0m3ZcOxIjLi3h8ja1myR9oLMqFZLkA9qn0yLgMba%2F6Xn5mmO%2FNWw%2F2BOa%2BRd6FsQOGKoQbBaKPcXG7fVpCS2jsRxnd0%2BtcmMzDBgKomyfFfwlGgyoS%2F1dK7NyZPpXh2%2FpxHVygO%2FL6Clu7DKXGZ%2BJ9n3e8WuhgHZIlUegTzPuPEk8t%2FZ5E2NipI5BvQqejdoIBuePgxR5wQ8EYcFKdIcj81dsuJ1HZ4Qas7EfjbJm8VX95f3GjOowI14Y6f4xbMlxqL6XI4t7NHmJbKTWZKLmXsd4%2FiCpDyN%2FLciTgteeMqdHwuBVl0088zunjqbb2Zq1GdFGHjJDTS0bC8bq%2FTkVV5RezC%2BtqeczIBHH0Wlm4aEks9Out7aaGm40wd8%2BfT7yblbphgLe4qgA0GCPdmx3OqOui9HquoN3%2B%2BEON3KanltQOov1YwuVopGYBxRh%2B9IKNgDXOploIUfRMvrQORtcIw805PLjo8CpDfNh7oKNyO%2B8MT3Bs3z%2BKHTKRLC54Jql05VKKLJFvscl11YHOxXesbEw2e8HJkiQ2wYlOyynvlLk5hLwaijXDjKy2o5Dq7mOFGkg8%2FE7aeS3hI7gzY4BrQOsvyVmTXLD19Km%2FDAd4M3L6z1VDC8tIy9BjqkAdcuZ6%2FZ9Vo2SOrv0fszL0fGDtNfl3xfv3tvm0%2FKilLVq%2BgxgkxveBZQonBdMeUMVAMKKs0IOZ9xdoSrVVBR%2FioJzRXgdEh%2FGM%2Fla%2F%2FX2Yj3SdNYr5PhV28Rn0ZOcFYU5vfWU4K%2FFfw570e8y9FPqq7sMqNPrFzz48Tk2%2BByuAivGO1hiOjmEwbd%2Bj60LqBJM7MRjNYvWNxnsP9vjPQ4vrzLBQm3&X-Amz-Signature=5dbaf27c1df8f07bf5a160a5f0d0701e088084062f25334c2929b516d04531e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TADMUMI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCqW9BS9cxZ3%2F9Naa%2BRfP64XqJj56fR1ymHj9ykFuXwPgIhAKI%2FTyoOLhlQhVfadiN13DVhjF1Nl1S3rfm9qZadPwH0Kv8DCEEQABoMNjM3NDIzMTgzODA1Igyut005QvWvfZ%2BC3T0q3APsC%2BWPPaDi0m3ZcOxIjLi3h8ja1myR9oLMqFZLkA9qn0yLgMba%2F6Xn5mmO%2FNWw%2F2BOa%2BRd6FsQOGKoQbBaKPcXG7fVpCS2jsRxnd0%2BtcmMzDBgKomyfFfwlGgyoS%2F1dK7NyZPpXh2%2FpxHVygO%2FL6Clu7DKXGZ%2BJ9n3e8WuhgHZIlUegTzPuPEk8t%2FZ5E2NipI5BvQqejdoIBuePgxR5wQ8EYcFKdIcj81dsuJ1HZ4Qas7EfjbJm8VX95f3GjOowI14Y6f4xbMlxqL6XI4t7NHmJbKTWZKLmXsd4%2FiCpDyN%2FLciTgteeMqdHwuBVl0088zunjqbb2Zq1GdFGHjJDTS0bC8bq%2FTkVV5RezC%2BtqeczIBHH0Wlm4aEks9Out7aaGm40wd8%2BfT7yblbphgLe4qgA0GCPdmx3OqOui9HquoN3%2B%2BEON3KanltQOov1YwuVopGYBxRh%2B9IKNgDXOploIUfRMvrQORtcIw805PLjo8CpDfNh7oKNyO%2B8MT3Bs3z%2BKHTKRLC54Jql05VKKLJFvscl11YHOxXesbEw2e8HJkiQ2wYlOyynvlLk5hLwaijXDjKy2o5Dq7mOFGkg8%2FE7aeS3hI7gzY4BrQOsvyVmTXLD19Km%2FDAd4M3L6z1VDC8tIy9BjqkAdcuZ6%2FZ9Vo2SOrv0fszL0fGDtNfl3xfv3tvm0%2FKilLVq%2BgxgkxveBZQonBdMeUMVAMKKs0IOZ9xdoSrVVBR%2FioJzRXgdEh%2FGM%2Fla%2F%2FX2Yj3SdNYr5PhV28Rn0ZOcFYU5vfWU4K%2FFfw570e8y9FPqq7sMqNPrFzz48Tk2%2BByuAivGO1hiOjmEwbd%2Bj60LqBJM7MRjNYvWNxnsP9vjPQ4vrzLBQm3&X-Amz-Signature=7108444414ece7cf2d5e0c750df77ef5b4aed3fb1631c6cf874819010b940bad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TADMUMI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCqW9BS9cxZ3%2F9Naa%2BRfP64XqJj56fR1ymHj9ykFuXwPgIhAKI%2FTyoOLhlQhVfadiN13DVhjF1Nl1S3rfm9qZadPwH0Kv8DCEEQABoMNjM3NDIzMTgzODA1Igyut005QvWvfZ%2BC3T0q3APsC%2BWPPaDi0m3ZcOxIjLi3h8ja1myR9oLMqFZLkA9qn0yLgMba%2F6Xn5mmO%2FNWw%2F2BOa%2BRd6FsQOGKoQbBaKPcXG7fVpCS2jsRxnd0%2BtcmMzDBgKomyfFfwlGgyoS%2F1dK7NyZPpXh2%2FpxHVygO%2FL6Clu7DKXGZ%2BJ9n3e8WuhgHZIlUegTzPuPEk8t%2FZ5E2NipI5BvQqejdoIBuePgxR5wQ8EYcFKdIcj81dsuJ1HZ4Qas7EfjbJm8VX95f3GjOowI14Y6f4xbMlxqL6XI4t7NHmJbKTWZKLmXsd4%2FiCpDyN%2FLciTgteeMqdHwuBVl0088zunjqbb2Zq1GdFGHjJDTS0bC8bq%2FTkVV5RezC%2BtqeczIBHH0Wlm4aEks9Out7aaGm40wd8%2BfT7yblbphgLe4qgA0GCPdmx3OqOui9HquoN3%2B%2BEON3KanltQOov1YwuVopGYBxRh%2B9IKNgDXOploIUfRMvrQORtcIw805PLjo8CpDfNh7oKNyO%2B8MT3Bs3z%2BKHTKRLC54Jql05VKKLJFvscl11YHOxXesbEw2e8HJkiQ2wYlOyynvlLk5hLwaijXDjKy2o5Dq7mOFGkg8%2FE7aeS3hI7gzY4BrQOsvyVmTXLD19Km%2FDAd4M3L6z1VDC8tIy9BjqkAdcuZ6%2FZ9Vo2SOrv0fszL0fGDtNfl3xfv3tvm0%2FKilLVq%2BgxgkxveBZQonBdMeUMVAMKKs0IOZ9xdoSrVVBR%2FioJzRXgdEh%2FGM%2Fla%2F%2FX2Yj3SdNYr5PhV28Rn0ZOcFYU5vfWU4K%2FFfw570e8y9FPqq7sMqNPrFzz48Tk2%2BByuAivGO1hiOjmEwbd%2Bj60LqBJM7MRjNYvWNxnsP9vjPQ4vrzLBQm3&X-Amz-Signature=865be7655cd94f8a005f710d0eb7a673e96e809a3075d7733a9ad52394576f99&X-Amz-SignedHeaders=host&x-id=GetObject)
