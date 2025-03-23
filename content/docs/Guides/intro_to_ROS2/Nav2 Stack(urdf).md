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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HRBA6B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8A3PDfJLqviPRKSu%2FiQH%2Bl12KLqzDw%2Bv81PzIxLcgIhAJLOAmwEWkF1BgQaapvB0QoG93X9ZSFptCWrDzrFYYzYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbxP4U%2FIihf1L%2BlOUq3AMaQ9YVuYhF9M3kK8BvpDSf8kq6IuKO4MTtPWgIxMIbMwCh7mnlOZo2OFUHZaePsVYszogn2kmgBQakm9Lej%2FII%2BVSbRApD1qzVEd%2FrooFZEN3q4%2BVKD1zmKe54%2FjP4X0bEI6vez2hW2O1gLjJ1xOVsv7atcXLLPF%2Bk6hD%2F6xRYum5et4BnNy%2B73DMyGYSAvvWLIbJIqMglSc1gTVRsW8OD2vGCd4hzOkBAlddY5Vh0rm5reW6F5XQKwEz9aQ66dUCceOhs7qsCSbSxBWmxyOcx1%2BLYGi1qZ2u2fcqdLvgKJSBziBrtMKP7rhs%2B9s9ASQ0TikQbmyk5gZzDFRc9i%2BVNXLMqclYfCX8PvoCzEqgVJ10dg31JNQVJJSqFvB4zY58R6rO270FdQr66l%2BcWKBt2ZzlmGCtyZhWNC2tHFGIY%2FGgtjmGJRHykezMN04BGqlrF2w%2B46oUvKgH8HoFdwY7x2erfxI%2B1SUXVWRhvYj3hIYB8be3P96rdQKp0hhPUGao4G8pnueOACZ6IH5zI7CZRQjkJS6ZiEWMH7aZe1io4ow52e45iO94szF1nY7kTC6jVXm7KDZ41Kgah8W07oIvOy65xSRi0Q9ZJBVIV%2FJpx0LqdGpc1JdXlyiKU9DCyy4G%2FBjqkARKb7hjSIeu8m1rG9rhQxQ7Z1djKKLGcebikWze%2F9PVlGelw7D8sey2bJg3Ou3JoJLL4uxHORs8FfhtPXRgSTdUwbxRHXZFebFHsBjYkb9C3gzoEqz9XMWI6A50QglS9IVDFadWHOLZYt9OZYYY0fZ43S6rIK%2BcBfHtepjxicFwwjZBMR%2Bishtbk0CBku4bk8DQeSKGdtVO5W5BtTDAVVIfTxAwi&X-Amz-Signature=7fa588994401dbfeb12399b2dd16df454b93fb0986d1e9c64925694fd4b7f70e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HRBA6B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8A3PDfJLqviPRKSu%2FiQH%2Bl12KLqzDw%2Bv81PzIxLcgIhAJLOAmwEWkF1BgQaapvB0QoG93X9ZSFptCWrDzrFYYzYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbxP4U%2FIihf1L%2BlOUq3AMaQ9YVuYhF9M3kK8BvpDSf8kq6IuKO4MTtPWgIxMIbMwCh7mnlOZo2OFUHZaePsVYszogn2kmgBQakm9Lej%2FII%2BVSbRApD1qzVEd%2FrooFZEN3q4%2BVKD1zmKe54%2FjP4X0bEI6vez2hW2O1gLjJ1xOVsv7atcXLLPF%2Bk6hD%2F6xRYum5et4BnNy%2B73DMyGYSAvvWLIbJIqMglSc1gTVRsW8OD2vGCd4hzOkBAlddY5Vh0rm5reW6F5XQKwEz9aQ66dUCceOhs7qsCSbSxBWmxyOcx1%2BLYGi1qZ2u2fcqdLvgKJSBziBrtMKP7rhs%2B9s9ASQ0TikQbmyk5gZzDFRc9i%2BVNXLMqclYfCX8PvoCzEqgVJ10dg31JNQVJJSqFvB4zY58R6rO270FdQr66l%2BcWKBt2ZzlmGCtyZhWNC2tHFGIY%2FGgtjmGJRHykezMN04BGqlrF2w%2B46oUvKgH8HoFdwY7x2erfxI%2B1SUXVWRhvYj3hIYB8be3P96rdQKp0hhPUGao4G8pnueOACZ6IH5zI7CZRQjkJS6ZiEWMH7aZe1io4ow52e45iO94szF1nY7kTC6jVXm7KDZ41Kgah8W07oIvOy65xSRi0Q9ZJBVIV%2FJpx0LqdGpc1JdXlyiKU9DCyy4G%2FBjqkARKb7hjSIeu8m1rG9rhQxQ7Z1djKKLGcebikWze%2F9PVlGelw7D8sey2bJg3Ou3JoJLL4uxHORs8FfhtPXRgSTdUwbxRHXZFebFHsBjYkb9C3gzoEqz9XMWI6A50QglS9IVDFadWHOLZYt9OZYYY0fZ43S6rIK%2BcBfHtepjxicFwwjZBMR%2Bishtbk0CBku4bk8DQeSKGdtVO5W5BtTDAVVIfTxAwi&X-Amz-Signature=5a69f0fe27e26a4325423fe9f1bbb626ae045179dc3951d59955811deab07ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HRBA6B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8A3PDfJLqviPRKSu%2FiQH%2Bl12KLqzDw%2Bv81PzIxLcgIhAJLOAmwEWkF1BgQaapvB0QoG93X9ZSFptCWrDzrFYYzYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbxP4U%2FIihf1L%2BlOUq3AMaQ9YVuYhF9M3kK8BvpDSf8kq6IuKO4MTtPWgIxMIbMwCh7mnlOZo2OFUHZaePsVYszogn2kmgBQakm9Lej%2FII%2BVSbRApD1qzVEd%2FrooFZEN3q4%2BVKD1zmKe54%2FjP4X0bEI6vez2hW2O1gLjJ1xOVsv7atcXLLPF%2Bk6hD%2F6xRYum5et4BnNy%2B73DMyGYSAvvWLIbJIqMglSc1gTVRsW8OD2vGCd4hzOkBAlddY5Vh0rm5reW6F5XQKwEz9aQ66dUCceOhs7qsCSbSxBWmxyOcx1%2BLYGi1qZ2u2fcqdLvgKJSBziBrtMKP7rhs%2B9s9ASQ0TikQbmyk5gZzDFRc9i%2BVNXLMqclYfCX8PvoCzEqgVJ10dg31JNQVJJSqFvB4zY58R6rO270FdQr66l%2BcWKBt2ZzlmGCtyZhWNC2tHFGIY%2FGgtjmGJRHykezMN04BGqlrF2w%2B46oUvKgH8HoFdwY7x2erfxI%2B1SUXVWRhvYj3hIYB8be3P96rdQKp0hhPUGao4G8pnueOACZ6IH5zI7CZRQjkJS6ZiEWMH7aZe1io4ow52e45iO94szF1nY7kTC6jVXm7KDZ41Kgah8W07oIvOy65xSRi0Q9ZJBVIV%2FJpx0LqdGpc1JdXlyiKU9DCyy4G%2FBjqkARKb7hjSIeu8m1rG9rhQxQ7Z1djKKLGcebikWze%2F9PVlGelw7D8sey2bJg3Ou3JoJLL4uxHORs8FfhtPXRgSTdUwbxRHXZFebFHsBjYkb9C3gzoEqz9XMWI6A50QglS9IVDFadWHOLZYt9OZYYY0fZ43S6rIK%2BcBfHtepjxicFwwjZBMR%2Bishtbk0CBku4bk8DQeSKGdtVO5W5BtTDAVVIfTxAwi&X-Amz-Signature=7eccd790de11fc88b7dd12d260047f992e118b3958cbf7fe48f1fa5a5b6d91bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HRBA6B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8A3PDfJLqviPRKSu%2FiQH%2Bl12KLqzDw%2Bv81PzIxLcgIhAJLOAmwEWkF1BgQaapvB0QoG93X9ZSFptCWrDzrFYYzYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbxP4U%2FIihf1L%2BlOUq3AMaQ9YVuYhF9M3kK8BvpDSf8kq6IuKO4MTtPWgIxMIbMwCh7mnlOZo2OFUHZaePsVYszogn2kmgBQakm9Lej%2FII%2BVSbRApD1qzVEd%2FrooFZEN3q4%2BVKD1zmKe54%2FjP4X0bEI6vez2hW2O1gLjJ1xOVsv7atcXLLPF%2Bk6hD%2F6xRYum5et4BnNy%2B73DMyGYSAvvWLIbJIqMglSc1gTVRsW8OD2vGCd4hzOkBAlddY5Vh0rm5reW6F5XQKwEz9aQ66dUCceOhs7qsCSbSxBWmxyOcx1%2BLYGi1qZ2u2fcqdLvgKJSBziBrtMKP7rhs%2B9s9ASQ0TikQbmyk5gZzDFRc9i%2BVNXLMqclYfCX8PvoCzEqgVJ10dg31JNQVJJSqFvB4zY58R6rO270FdQr66l%2BcWKBt2ZzlmGCtyZhWNC2tHFGIY%2FGgtjmGJRHykezMN04BGqlrF2w%2B46oUvKgH8HoFdwY7x2erfxI%2B1SUXVWRhvYj3hIYB8be3P96rdQKp0hhPUGao4G8pnueOACZ6IH5zI7CZRQjkJS6ZiEWMH7aZe1io4ow52e45iO94szF1nY7kTC6jVXm7KDZ41Kgah8W07oIvOy65xSRi0Q9ZJBVIV%2FJpx0LqdGpc1JdXlyiKU9DCyy4G%2FBjqkARKb7hjSIeu8m1rG9rhQxQ7Z1djKKLGcebikWze%2F9PVlGelw7D8sey2bJg3Ou3JoJLL4uxHORs8FfhtPXRgSTdUwbxRHXZFebFHsBjYkb9C3gzoEqz9XMWI6A50QglS9IVDFadWHOLZYt9OZYYY0fZ43S6rIK%2BcBfHtepjxicFwwjZBMR%2Bishtbk0CBku4bk8DQeSKGdtVO5W5BtTDAVVIfTxAwi&X-Amz-Signature=cf331272af1e56711064006561859c0b483b9f2fdb6f7e10b9063b6e74629cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HRBA6B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8A3PDfJLqviPRKSu%2FiQH%2Bl12KLqzDw%2Bv81PzIxLcgIhAJLOAmwEWkF1BgQaapvB0QoG93X9ZSFptCWrDzrFYYzYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbxP4U%2FIihf1L%2BlOUq3AMaQ9YVuYhF9M3kK8BvpDSf8kq6IuKO4MTtPWgIxMIbMwCh7mnlOZo2OFUHZaePsVYszogn2kmgBQakm9Lej%2FII%2BVSbRApD1qzVEd%2FrooFZEN3q4%2BVKD1zmKe54%2FjP4X0bEI6vez2hW2O1gLjJ1xOVsv7atcXLLPF%2Bk6hD%2F6xRYum5et4BnNy%2B73DMyGYSAvvWLIbJIqMglSc1gTVRsW8OD2vGCd4hzOkBAlddY5Vh0rm5reW6F5XQKwEz9aQ66dUCceOhs7qsCSbSxBWmxyOcx1%2BLYGi1qZ2u2fcqdLvgKJSBziBrtMKP7rhs%2B9s9ASQ0TikQbmyk5gZzDFRc9i%2BVNXLMqclYfCX8PvoCzEqgVJ10dg31JNQVJJSqFvB4zY58R6rO270FdQr66l%2BcWKBt2ZzlmGCtyZhWNC2tHFGIY%2FGgtjmGJRHykezMN04BGqlrF2w%2B46oUvKgH8HoFdwY7x2erfxI%2B1SUXVWRhvYj3hIYB8be3P96rdQKp0hhPUGao4G8pnueOACZ6IH5zI7CZRQjkJS6ZiEWMH7aZe1io4ow52e45iO94szF1nY7kTC6jVXm7KDZ41Kgah8W07oIvOy65xSRi0Q9ZJBVIV%2FJpx0LqdGpc1JdXlyiKU9DCyy4G%2FBjqkARKb7hjSIeu8m1rG9rhQxQ7Z1djKKLGcebikWze%2F9PVlGelw7D8sey2bJg3Ou3JoJLL4uxHORs8FfhtPXRgSTdUwbxRHXZFebFHsBjYkb9C3gzoEqz9XMWI6A50QglS9IVDFadWHOLZYt9OZYYY0fZ43S6rIK%2BcBfHtepjxicFwwjZBMR%2Bishtbk0CBku4bk8DQeSKGdtVO5W5BtTDAVVIfTxAwi&X-Amz-Signature=79a1b319a3afc8e7c274e822f2831a4500c9b80b8fd1d226ac5a4dbb8c14f984&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HRBA6B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8A3PDfJLqviPRKSu%2FiQH%2Bl12KLqzDw%2Bv81PzIxLcgIhAJLOAmwEWkF1BgQaapvB0QoG93X9ZSFptCWrDzrFYYzYKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbxP4U%2FIihf1L%2BlOUq3AMaQ9YVuYhF9M3kK8BvpDSf8kq6IuKO4MTtPWgIxMIbMwCh7mnlOZo2OFUHZaePsVYszogn2kmgBQakm9Lej%2FII%2BVSbRApD1qzVEd%2FrooFZEN3q4%2BVKD1zmKe54%2FjP4X0bEI6vez2hW2O1gLjJ1xOVsv7atcXLLPF%2Bk6hD%2F6xRYum5et4BnNy%2B73DMyGYSAvvWLIbJIqMglSc1gTVRsW8OD2vGCd4hzOkBAlddY5Vh0rm5reW6F5XQKwEz9aQ66dUCceOhs7qsCSbSxBWmxyOcx1%2BLYGi1qZ2u2fcqdLvgKJSBziBrtMKP7rhs%2B9s9ASQ0TikQbmyk5gZzDFRc9i%2BVNXLMqclYfCX8PvoCzEqgVJ10dg31JNQVJJSqFvB4zY58R6rO270FdQr66l%2BcWKBt2ZzlmGCtyZhWNC2tHFGIY%2FGgtjmGJRHykezMN04BGqlrF2w%2B46oUvKgH8HoFdwY7x2erfxI%2B1SUXVWRhvYj3hIYB8be3P96rdQKp0hhPUGao4G8pnueOACZ6IH5zI7CZRQjkJS6ZiEWMH7aZe1io4ow52e45iO94szF1nY7kTC6jVXm7KDZ41Kgah8W07oIvOy65xSRi0Q9ZJBVIV%2FJpx0LqdGpc1JdXlyiKU9DCyy4G%2FBjqkARKb7hjSIeu8m1rG9rhQxQ7Z1djKKLGcebikWze%2F9PVlGelw7D8sey2bJg3Ou3JoJLL4uxHORs8FfhtPXRgSTdUwbxRHXZFebFHsBjYkb9C3gzoEqz9XMWI6A50QglS9IVDFadWHOLZYt9OZYYY0fZ43S6rIK%2BcBfHtepjxicFwwjZBMR%2Bishtbk0CBku4bk8DQeSKGdtVO5W5BtTDAVVIfTxAwi&X-Amz-Signature=ee5a52bf4cbf918702ae73a5a7f4ae5023207f16aa8b841b4683f66dd034dd94&X-Amz-SignedHeaders=host&x-id=GetObject)
