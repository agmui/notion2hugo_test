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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAWGNYS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvXIznghaB9n6TUDyXIkJNIvLQjK4yqZPXlRFU3tmxXQIhAJ9bDxYzftlJP6C2N%2Fy3uJr8U%2FUdDKqpAyrqTq%2FFpVVVKv8DCCAQABoMNjM3NDIzMTgzODA1IgyTNofFf6Nppcg8zYMq3APnZbIYkNGpQSnnF0nvUJRvS%2BFap5Rb2MjRuqudgGQgLiGfDMoGBvzME61YuZYQSZ71xJR1nFWhvYmNAsfY%2F3oaivCUXXtNlAdVY63hnJCjwIFbgCHjNWMnHGLVxmGZOEPQddXKgjyqr8pupaZGNg8axVmVTgcmGCQ9vm1KY8RsFAgKbid%2BOmYaXNCs4b3UPXcGgk%2Bv6Vg4kjS8gHEs%2FL25Rfbbkeqw6umQj4W9YAweCYee4O9AL6coiXnihS%2FbvUwC9S5a1Yc2pDXJLzlybG9bux1M7Rf4jCZ2FZEoz9CxxR98p6UQQ%2F87Uhz0e3FEwcZQJtQOxWm%2Fb5KXLgqFm7U4RkoFN3Dp%2B%2Bkg%2BvnEwGaijYy2YR3k0XlhsUONgt6E9N2MG1gTNnJRkWGINFGOCC68Fr4SO7qW09pdUgbYxPdqHbADy71sX4GVv4j00GnX%2B4fJocS0erXgA50m9Ovh5zpIUH%2B%2FF%2FG24EFqUlQ8s%2BarX%2BRE128nkE3L95pg3PjVR%2FXQjKPKJlbNj8GUc6doNr7w%2BDHRwtGn5UxAVWHod%2FFvz50PQ%2FXgfKp1FFZSVd9Whrzah9K%2FVzsip6j5zhouxwH8pzRg1mQeuj8Qbl9TbH3k%2F3Y2VJ2xXHPfejdjeDCgjpzDBjqkAQ8G8o2gZdrWkOAblzLAy7V7xl%2B6w4xWFoMWJK0lcIXAy%2FmV6qc%2FS89L0Y3jg24sjk4iqyEvxVDWMzZlDbyRqO5ZeAjXdB0LfpXyFcS6kTytawYPELEo5CLhKcEbG3lwCotEXgqjxFc8wk566%2FZ26Wg5QkfeDDhF7wgxiTq4Fc6AyCi8f2jGFeCiZB98hZqJ7um54RA8jbQidQw4uyUWPYC5zT5C&X-Amz-Signature=0a26d80fe701f738297fb6d3a96ecff3d51d4be16bf1e06e663ba9a3fbaf7e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAWGNYS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvXIznghaB9n6TUDyXIkJNIvLQjK4yqZPXlRFU3tmxXQIhAJ9bDxYzftlJP6C2N%2Fy3uJr8U%2FUdDKqpAyrqTq%2FFpVVVKv8DCCAQABoMNjM3NDIzMTgzODA1IgyTNofFf6Nppcg8zYMq3APnZbIYkNGpQSnnF0nvUJRvS%2BFap5Rb2MjRuqudgGQgLiGfDMoGBvzME61YuZYQSZ71xJR1nFWhvYmNAsfY%2F3oaivCUXXtNlAdVY63hnJCjwIFbgCHjNWMnHGLVxmGZOEPQddXKgjyqr8pupaZGNg8axVmVTgcmGCQ9vm1KY8RsFAgKbid%2BOmYaXNCs4b3UPXcGgk%2Bv6Vg4kjS8gHEs%2FL25Rfbbkeqw6umQj4W9YAweCYee4O9AL6coiXnihS%2FbvUwC9S5a1Yc2pDXJLzlybG9bux1M7Rf4jCZ2FZEoz9CxxR98p6UQQ%2F87Uhz0e3FEwcZQJtQOxWm%2Fb5KXLgqFm7U4RkoFN3Dp%2B%2Bkg%2BvnEwGaijYy2YR3k0XlhsUONgt6E9N2MG1gTNnJRkWGINFGOCC68Fr4SO7qW09pdUgbYxPdqHbADy71sX4GVv4j00GnX%2B4fJocS0erXgA50m9Ovh5zpIUH%2B%2FF%2FG24EFqUlQ8s%2BarX%2BRE128nkE3L95pg3PjVR%2FXQjKPKJlbNj8GUc6doNr7w%2BDHRwtGn5UxAVWHod%2FFvz50PQ%2FXgfKp1FFZSVd9Whrzah9K%2FVzsip6j5zhouxwH8pzRg1mQeuj8Qbl9TbH3k%2F3Y2VJ2xXHPfejdjeDCgjpzDBjqkAQ8G8o2gZdrWkOAblzLAy7V7xl%2B6w4xWFoMWJK0lcIXAy%2FmV6qc%2FS89L0Y3jg24sjk4iqyEvxVDWMzZlDbyRqO5ZeAjXdB0LfpXyFcS6kTytawYPELEo5CLhKcEbG3lwCotEXgqjxFc8wk566%2FZ26Wg5QkfeDDhF7wgxiTq4Fc6AyCi8f2jGFeCiZB98hZqJ7um54RA8jbQidQw4uyUWPYC5zT5C&X-Amz-Signature=1dc69431bd29a3f085cd767344fc06fb7ca35094b111c1de0fdfac5abded98da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAWGNYS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvXIznghaB9n6TUDyXIkJNIvLQjK4yqZPXlRFU3tmxXQIhAJ9bDxYzftlJP6C2N%2Fy3uJr8U%2FUdDKqpAyrqTq%2FFpVVVKv8DCCAQABoMNjM3NDIzMTgzODA1IgyTNofFf6Nppcg8zYMq3APnZbIYkNGpQSnnF0nvUJRvS%2BFap5Rb2MjRuqudgGQgLiGfDMoGBvzME61YuZYQSZ71xJR1nFWhvYmNAsfY%2F3oaivCUXXtNlAdVY63hnJCjwIFbgCHjNWMnHGLVxmGZOEPQddXKgjyqr8pupaZGNg8axVmVTgcmGCQ9vm1KY8RsFAgKbid%2BOmYaXNCs4b3UPXcGgk%2Bv6Vg4kjS8gHEs%2FL25Rfbbkeqw6umQj4W9YAweCYee4O9AL6coiXnihS%2FbvUwC9S5a1Yc2pDXJLzlybG9bux1M7Rf4jCZ2FZEoz9CxxR98p6UQQ%2F87Uhz0e3FEwcZQJtQOxWm%2Fb5KXLgqFm7U4RkoFN3Dp%2B%2Bkg%2BvnEwGaijYy2YR3k0XlhsUONgt6E9N2MG1gTNnJRkWGINFGOCC68Fr4SO7qW09pdUgbYxPdqHbADy71sX4GVv4j00GnX%2B4fJocS0erXgA50m9Ovh5zpIUH%2B%2FF%2FG24EFqUlQ8s%2BarX%2BRE128nkE3L95pg3PjVR%2FXQjKPKJlbNj8GUc6doNr7w%2BDHRwtGn5UxAVWHod%2FFvz50PQ%2FXgfKp1FFZSVd9Whrzah9K%2FVzsip6j5zhouxwH8pzRg1mQeuj8Qbl9TbH3k%2F3Y2VJ2xXHPfejdjeDCgjpzDBjqkAQ8G8o2gZdrWkOAblzLAy7V7xl%2B6w4xWFoMWJK0lcIXAy%2FmV6qc%2FS89L0Y3jg24sjk4iqyEvxVDWMzZlDbyRqO5ZeAjXdB0LfpXyFcS6kTytawYPELEo5CLhKcEbG3lwCotEXgqjxFc8wk566%2FZ26Wg5QkfeDDhF7wgxiTq4Fc6AyCi8f2jGFeCiZB98hZqJ7um54RA8jbQidQw4uyUWPYC5zT5C&X-Amz-Signature=0e70a3104edfd5dbac961b09175dd142354901459af811c4ff78312843b1cb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAWGNYS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvXIznghaB9n6TUDyXIkJNIvLQjK4yqZPXlRFU3tmxXQIhAJ9bDxYzftlJP6C2N%2Fy3uJr8U%2FUdDKqpAyrqTq%2FFpVVVKv8DCCAQABoMNjM3NDIzMTgzODA1IgyTNofFf6Nppcg8zYMq3APnZbIYkNGpQSnnF0nvUJRvS%2BFap5Rb2MjRuqudgGQgLiGfDMoGBvzME61YuZYQSZ71xJR1nFWhvYmNAsfY%2F3oaivCUXXtNlAdVY63hnJCjwIFbgCHjNWMnHGLVxmGZOEPQddXKgjyqr8pupaZGNg8axVmVTgcmGCQ9vm1KY8RsFAgKbid%2BOmYaXNCs4b3UPXcGgk%2Bv6Vg4kjS8gHEs%2FL25Rfbbkeqw6umQj4W9YAweCYee4O9AL6coiXnihS%2FbvUwC9S5a1Yc2pDXJLzlybG9bux1M7Rf4jCZ2FZEoz9CxxR98p6UQQ%2F87Uhz0e3FEwcZQJtQOxWm%2Fb5KXLgqFm7U4RkoFN3Dp%2B%2Bkg%2BvnEwGaijYy2YR3k0XlhsUONgt6E9N2MG1gTNnJRkWGINFGOCC68Fr4SO7qW09pdUgbYxPdqHbADy71sX4GVv4j00GnX%2B4fJocS0erXgA50m9Ovh5zpIUH%2B%2FF%2FG24EFqUlQ8s%2BarX%2BRE128nkE3L95pg3PjVR%2FXQjKPKJlbNj8GUc6doNr7w%2BDHRwtGn5UxAVWHod%2FFvz50PQ%2FXgfKp1FFZSVd9Whrzah9K%2FVzsip6j5zhouxwH8pzRg1mQeuj8Qbl9TbH3k%2F3Y2VJ2xXHPfejdjeDCgjpzDBjqkAQ8G8o2gZdrWkOAblzLAy7V7xl%2B6w4xWFoMWJK0lcIXAy%2FmV6qc%2FS89L0Y3jg24sjk4iqyEvxVDWMzZlDbyRqO5ZeAjXdB0LfpXyFcS6kTytawYPELEo5CLhKcEbG3lwCotEXgqjxFc8wk566%2FZ26Wg5QkfeDDhF7wgxiTq4Fc6AyCi8f2jGFeCiZB98hZqJ7um54RA8jbQidQw4uyUWPYC5zT5C&X-Amz-Signature=3c68691aa319dac76062191a3a3f23dc1793bc8f83d154afaae599d2a65d2d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAWGNYS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvXIznghaB9n6TUDyXIkJNIvLQjK4yqZPXlRFU3tmxXQIhAJ9bDxYzftlJP6C2N%2Fy3uJr8U%2FUdDKqpAyrqTq%2FFpVVVKv8DCCAQABoMNjM3NDIzMTgzODA1IgyTNofFf6Nppcg8zYMq3APnZbIYkNGpQSnnF0nvUJRvS%2BFap5Rb2MjRuqudgGQgLiGfDMoGBvzME61YuZYQSZ71xJR1nFWhvYmNAsfY%2F3oaivCUXXtNlAdVY63hnJCjwIFbgCHjNWMnHGLVxmGZOEPQddXKgjyqr8pupaZGNg8axVmVTgcmGCQ9vm1KY8RsFAgKbid%2BOmYaXNCs4b3UPXcGgk%2Bv6Vg4kjS8gHEs%2FL25Rfbbkeqw6umQj4W9YAweCYee4O9AL6coiXnihS%2FbvUwC9S5a1Yc2pDXJLzlybG9bux1M7Rf4jCZ2FZEoz9CxxR98p6UQQ%2F87Uhz0e3FEwcZQJtQOxWm%2Fb5KXLgqFm7U4RkoFN3Dp%2B%2Bkg%2BvnEwGaijYy2YR3k0XlhsUONgt6E9N2MG1gTNnJRkWGINFGOCC68Fr4SO7qW09pdUgbYxPdqHbADy71sX4GVv4j00GnX%2B4fJocS0erXgA50m9Ovh5zpIUH%2B%2FF%2FG24EFqUlQ8s%2BarX%2BRE128nkE3L95pg3PjVR%2FXQjKPKJlbNj8GUc6doNr7w%2BDHRwtGn5UxAVWHod%2FFvz50PQ%2FXgfKp1FFZSVd9Whrzah9K%2FVzsip6j5zhouxwH8pzRg1mQeuj8Qbl9TbH3k%2F3Y2VJ2xXHPfejdjeDCgjpzDBjqkAQ8G8o2gZdrWkOAblzLAy7V7xl%2B6w4xWFoMWJK0lcIXAy%2FmV6qc%2FS89L0Y3jg24sjk4iqyEvxVDWMzZlDbyRqO5ZeAjXdB0LfpXyFcS6kTytawYPELEo5CLhKcEbG3lwCotEXgqjxFc8wk566%2FZ26Wg5QkfeDDhF7wgxiTq4Fc6AyCi8f2jGFeCiZB98hZqJ7um54RA8jbQidQw4uyUWPYC5zT5C&X-Amz-Signature=10086022f3c4626271171ac0bc866c42c5cb0c789d38193b73c4f97a6c60b0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAWGNYS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDvXIznghaB9n6TUDyXIkJNIvLQjK4yqZPXlRFU3tmxXQIhAJ9bDxYzftlJP6C2N%2Fy3uJr8U%2FUdDKqpAyrqTq%2FFpVVVKv8DCCAQABoMNjM3NDIzMTgzODA1IgyTNofFf6Nppcg8zYMq3APnZbIYkNGpQSnnF0nvUJRvS%2BFap5Rb2MjRuqudgGQgLiGfDMoGBvzME61YuZYQSZ71xJR1nFWhvYmNAsfY%2F3oaivCUXXtNlAdVY63hnJCjwIFbgCHjNWMnHGLVxmGZOEPQddXKgjyqr8pupaZGNg8axVmVTgcmGCQ9vm1KY8RsFAgKbid%2BOmYaXNCs4b3UPXcGgk%2Bv6Vg4kjS8gHEs%2FL25Rfbbkeqw6umQj4W9YAweCYee4O9AL6coiXnihS%2FbvUwC9S5a1Yc2pDXJLzlybG9bux1M7Rf4jCZ2FZEoz9CxxR98p6UQQ%2F87Uhz0e3FEwcZQJtQOxWm%2Fb5KXLgqFm7U4RkoFN3Dp%2B%2Bkg%2BvnEwGaijYy2YR3k0XlhsUONgt6E9N2MG1gTNnJRkWGINFGOCC68Fr4SO7qW09pdUgbYxPdqHbADy71sX4GVv4j00GnX%2B4fJocS0erXgA50m9Ovh5zpIUH%2B%2FF%2FG24EFqUlQ8s%2BarX%2BRE128nkE3L95pg3PjVR%2FXQjKPKJlbNj8GUc6doNr7w%2BDHRwtGn5UxAVWHod%2FFvz50PQ%2FXgfKp1FFZSVd9Whrzah9K%2FVzsip6j5zhouxwH8pzRg1mQeuj8Qbl9TbH3k%2F3Y2VJ2xXHPfejdjeDCgjpzDBjqkAQ8G8o2gZdrWkOAblzLAy7V7xl%2B6w4xWFoMWJK0lcIXAy%2FmV6qc%2FS89L0Y3jg24sjk4iqyEvxVDWMzZlDbyRqO5ZeAjXdB0LfpXyFcS6kTytawYPELEo5CLhKcEbG3lwCotEXgqjxFc8wk566%2FZ26Wg5QkfeDDhF7wgxiTq4Fc6AyCi8f2jGFeCiZB98hZqJ7um54RA8jbQidQw4uyUWPYC5zT5C&X-Amz-Signature=d334d5908fa72d7b5e9fbce5f398441c947e3d79c668e8fb3ef32d9e2ddd045b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
