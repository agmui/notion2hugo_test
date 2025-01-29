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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAZBXBN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFA%2FNfrYZEkhEtwG%2Br39atujyyrenCm0DkX1iDYa0rxAiA4QhjlLNe3EAMXSD6iy1mba0GDzliH1hDDfrmveU5rJCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEXFRplu8H2Mv5Q52KtwDRBP2ArbBg7HziVzcdsankEeR9n13JvwMWRXJwwZpDm6zCWrAKsoXG%2FjZAwbiVkcwGQbLhPRYkxD%2FbzgcOUOdOfyYvXD5AIWwxBBFFGb2sQaOCXMjjzULSBFAQomZXPpbFHk0q3awJJviGZ8lj0ZccJBeZT7gvz4q0YQvnfPkXsGlpY%2FKr%2Bw2bdx7052ZlC0aYKanjWSlEHxWjIni7oBQrPWAbzz7wxSfi1CaFGbE31U5w8FLYXdU%2FcKvi9%2FBWVK81yZ%2FtKv%2BT36f3%2B1VtBTy2zmZIm%2BsaDVBFA2yuR3LP8eqmA38CarCJ2U17YVRPueBn8DxBnU%2FaIohsWj8OvxQ2ECZPm94ImvEc9eGazNjKsecdesM0LfZUdiDiReSsu%2FZCncj8Tfk6gryz6N1ImP0a2RAuT7GzhfkUFOIzFWAg8cCvzRi24O%2FR86wb2a%2FqWnnV9BZCvRZSUTIoK9QGq3lrqaqLESaz%2F%2Fzuqz37OaHEFb8H%2FU%2BG4TTG2DN%2FDyNZnKuepOOJPhIR1m5UL42tUEKxp25fa4LcdJzbAlCVGLQyclhIcc9xmNYauKseSv3ynnczG%2Bh1yWQfVyDgkSph58ROfmiZqRNEoeWkTQ39sQUio6GTXUbhTeYjRPLMA4w68bqvAY6pgEmaaNKPRR5LrYizu0VoMZKY65QBzYMU3lL4z0h8L3lXI8oR%2F2O7llWVjNlveenE%2FMeV%2FE5vjuogu7H3HY7jIvAixGcAnS%2FnrApQqKRfNjXIX%2BsUPQ4xszBI1Eb5Y3pCMvJFn5MT8Fx%2F2oD9vchKRwGmajSTfh8r6nNnHkjv1onx8Z%2FtrX6RioVvv5xOY6ER4hOuzLyeYUL%2FLdRhM75rTmCivPxQJwZ&X-Amz-Signature=c92a3686e7d4afbf16da697bd48e6d4ea3ca331097e8b69ec39dcd333e61fcbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAZBXBN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFA%2FNfrYZEkhEtwG%2Br39atujyyrenCm0DkX1iDYa0rxAiA4QhjlLNe3EAMXSD6iy1mba0GDzliH1hDDfrmveU5rJCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEXFRplu8H2Mv5Q52KtwDRBP2ArbBg7HziVzcdsankEeR9n13JvwMWRXJwwZpDm6zCWrAKsoXG%2FjZAwbiVkcwGQbLhPRYkxD%2FbzgcOUOdOfyYvXD5AIWwxBBFFGb2sQaOCXMjjzULSBFAQomZXPpbFHk0q3awJJviGZ8lj0ZccJBeZT7gvz4q0YQvnfPkXsGlpY%2FKr%2Bw2bdx7052ZlC0aYKanjWSlEHxWjIni7oBQrPWAbzz7wxSfi1CaFGbE31U5w8FLYXdU%2FcKvi9%2FBWVK81yZ%2FtKv%2BT36f3%2B1VtBTy2zmZIm%2BsaDVBFA2yuR3LP8eqmA38CarCJ2U17YVRPueBn8DxBnU%2FaIohsWj8OvxQ2ECZPm94ImvEc9eGazNjKsecdesM0LfZUdiDiReSsu%2FZCncj8Tfk6gryz6N1ImP0a2RAuT7GzhfkUFOIzFWAg8cCvzRi24O%2FR86wb2a%2FqWnnV9BZCvRZSUTIoK9QGq3lrqaqLESaz%2F%2Fzuqz37OaHEFb8H%2FU%2BG4TTG2DN%2FDyNZnKuepOOJPhIR1m5UL42tUEKxp25fa4LcdJzbAlCVGLQyclhIcc9xmNYauKseSv3ynnczG%2Bh1yWQfVyDgkSph58ROfmiZqRNEoeWkTQ39sQUio6GTXUbhTeYjRPLMA4w68bqvAY6pgEmaaNKPRR5LrYizu0VoMZKY65QBzYMU3lL4z0h8L3lXI8oR%2F2O7llWVjNlveenE%2FMeV%2FE5vjuogu7H3HY7jIvAixGcAnS%2FnrApQqKRfNjXIX%2BsUPQ4xszBI1Eb5Y3pCMvJFn5MT8Fx%2F2oD9vchKRwGmajSTfh8r6nNnHkjv1onx8Z%2FtrX6RioVvv5xOY6ER4hOuzLyeYUL%2FLdRhM75rTmCivPxQJwZ&X-Amz-Signature=5bc9654fa3ad5b24d60d0df843e8620c0ac99f48668c457f5f640bb7f8b3da02&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAZBXBN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFA%2FNfrYZEkhEtwG%2Br39atujyyrenCm0DkX1iDYa0rxAiA4QhjlLNe3EAMXSD6iy1mba0GDzliH1hDDfrmveU5rJCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEXFRplu8H2Mv5Q52KtwDRBP2ArbBg7HziVzcdsankEeR9n13JvwMWRXJwwZpDm6zCWrAKsoXG%2FjZAwbiVkcwGQbLhPRYkxD%2FbzgcOUOdOfyYvXD5AIWwxBBFFGb2sQaOCXMjjzULSBFAQomZXPpbFHk0q3awJJviGZ8lj0ZccJBeZT7gvz4q0YQvnfPkXsGlpY%2FKr%2Bw2bdx7052ZlC0aYKanjWSlEHxWjIni7oBQrPWAbzz7wxSfi1CaFGbE31U5w8FLYXdU%2FcKvi9%2FBWVK81yZ%2FtKv%2BT36f3%2B1VtBTy2zmZIm%2BsaDVBFA2yuR3LP8eqmA38CarCJ2U17YVRPueBn8DxBnU%2FaIohsWj8OvxQ2ECZPm94ImvEc9eGazNjKsecdesM0LfZUdiDiReSsu%2FZCncj8Tfk6gryz6N1ImP0a2RAuT7GzhfkUFOIzFWAg8cCvzRi24O%2FR86wb2a%2FqWnnV9BZCvRZSUTIoK9QGq3lrqaqLESaz%2F%2Fzuqz37OaHEFb8H%2FU%2BG4TTG2DN%2FDyNZnKuepOOJPhIR1m5UL42tUEKxp25fa4LcdJzbAlCVGLQyclhIcc9xmNYauKseSv3ynnczG%2Bh1yWQfVyDgkSph58ROfmiZqRNEoeWkTQ39sQUio6GTXUbhTeYjRPLMA4w68bqvAY6pgEmaaNKPRR5LrYizu0VoMZKY65QBzYMU3lL4z0h8L3lXI8oR%2F2O7llWVjNlveenE%2FMeV%2FE5vjuogu7H3HY7jIvAixGcAnS%2FnrApQqKRfNjXIX%2BsUPQ4xszBI1Eb5Y3pCMvJFn5MT8Fx%2F2oD9vchKRwGmajSTfh8r6nNnHkjv1onx8Z%2FtrX6RioVvv5xOY6ER4hOuzLyeYUL%2FLdRhM75rTmCivPxQJwZ&X-Amz-Signature=3f0ebe62e079a5ead6079d134aa6687fb449c2d9f437fbc723e62bca24e7dcde&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAZBXBN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFA%2FNfrYZEkhEtwG%2Br39atujyyrenCm0DkX1iDYa0rxAiA4QhjlLNe3EAMXSD6iy1mba0GDzliH1hDDfrmveU5rJCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEXFRplu8H2Mv5Q52KtwDRBP2ArbBg7HziVzcdsankEeR9n13JvwMWRXJwwZpDm6zCWrAKsoXG%2FjZAwbiVkcwGQbLhPRYkxD%2FbzgcOUOdOfyYvXD5AIWwxBBFFGb2sQaOCXMjjzULSBFAQomZXPpbFHk0q3awJJviGZ8lj0ZccJBeZT7gvz4q0YQvnfPkXsGlpY%2FKr%2Bw2bdx7052ZlC0aYKanjWSlEHxWjIni7oBQrPWAbzz7wxSfi1CaFGbE31U5w8FLYXdU%2FcKvi9%2FBWVK81yZ%2FtKv%2BT36f3%2B1VtBTy2zmZIm%2BsaDVBFA2yuR3LP8eqmA38CarCJ2U17YVRPueBn8DxBnU%2FaIohsWj8OvxQ2ECZPm94ImvEc9eGazNjKsecdesM0LfZUdiDiReSsu%2FZCncj8Tfk6gryz6N1ImP0a2RAuT7GzhfkUFOIzFWAg8cCvzRi24O%2FR86wb2a%2FqWnnV9BZCvRZSUTIoK9QGq3lrqaqLESaz%2F%2Fzuqz37OaHEFb8H%2FU%2BG4TTG2DN%2FDyNZnKuepOOJPhIR1m5UL42tUEKxp25fa4LcdJzbAlCVGLQyclhIcc9xmNYauKseSv3ynnczG%2Bh1yWQfVyDgkSph58ROfmiZqRNEoeWkTQ39sQUio6GTXUbhTeYjRPLMA4w68bqvAY6pgEmaaNKPRR5LrYizu0VoMZKY65QBzYMU3lL4z0h8L3lXI8oR%2F2O7llWVjNlveenE%2FMeV%2FE5vjuogu7H3HY7jIvAixGcAnS%2FnrApQqKRfNjXIX%2BsUPQ4xszBI1Eb5Y3pCMvJFn5MT8Fx%2F2oD9vchKRwGmajSTfh8r6nNnHkjv1onx8Z%2FtrX6RioVvv5xOY6ER4hOuzLyeYUL%2FLdRhM75rTmCivPxQJwZ&X-Amz-Signature=61984d823520299b449ce50a9dfab5d15164e61b2f6a1b4332882fc39a333918&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAZBXBN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFA%2FNfrYZEkhEtwG%2Br39atujyyrenCm0DkX1iDYa0rxAiA4QhjlLNe3EAMXSD6iy1mba0GDzliH1hDDfrmveU5rJCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEXFRplu8H2Mv5Q52KtwDRBP2ArbBg7HziVzcdsankEeR9n13JvwMWRXJwwZpDm6zCWrAKsoXG%2FjZAwbiVkcwGQbLhPRYkxD%2FbzgcOUOdOfyYvXD5AIWwxBBFFGb2sQaOCXMjjzULSBFAQomZXPpbFHk0q3awJJviGZ8lj0ZccJBeZT7gvz4q0YQvnfPkXsGlpY%2FKr%2Bw2bdx7052ZlC0aYKanjWSlEHxWjIni7oBQrPWAbzz7wxSfi1CaFGbE31U5w8FLYXdU%2FcKvi9%2FBWVK81yZ%2FtKv%2BT36f3%2B1VtBTy2zmZIm%2BsaDVBFA2yuR3LP8eqmA38CarCJ2U17YVRPueBn8DxBnU%2FaIohsWj8OvxQ2ECZPm94ImvEc9eGazNjKsecdesM0LfZUdiDiReSsu%2FZCncj8Tfk6gryz6N1ImP0a2RAuT7GzhfkUFOIzFWAg8cCvzRi24O%2FR86wb2a%2FqWnnV9BZCvRZSUTIoK9QGq3lrqaqLESaz%2F%2Fzuqz37OaHEFb8H%2FU%2BG4TTG2DN%2FDyNZnKuepOOJPhIR1m5UL42tUEKxp25fa4LcdJzbAlCVGLQyclhIcc9xmNYauKseSv3ynnczG%2Bh1yWQfVyDgkSph58ROfmiZqRNEoeWkTQ39sQUio6GTXUbhTeYjRPLMA4w68bqvAY6pgEmaaNKPRR5LrYizu0VoMZKY65QBzYMU3lL4z0h8L3lXI8oR%2F2O7llWVjNlveenE%2FMeV%2FE5vjuogu7H3HY7jIvAixGcAnS%2FnrApQqKRfNjXIX%2BsUPQ4xszBI1Eb5Y3pCMvJFn5MT8Fx%2F2oD9vchKRwGmajSTfh8r6nNnHkjv1onx8Z%2FtrX6RioVvv5xOY6ER4hOuzLyeYUL%2FLdRhM75rTmCivPxQJwZ&X-Amz-Signature=249e976ba5308cfa58ed40d4605da0d5f85c6ae5f041fc75de4545a7ea4a779d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAZBXBN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFA%2FNfrYZEkhEtwG%2Br39atujyyrenCm0DkX1iDYa0rxAiA4QhjlLNe3EAMXSD6iy1mba0GDzliH1hDDfrmveU5rJCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEXFRplu8H2Mv5Q52KtwDRBP2ArbBg7HziVzcdsankEeR9n13JvwMWRXJwwZpDm6zCWrAKsoXG%2FjZAwbiVkcwGQbLhPRYkxD%2FbzgcOUOdOfyYvXD5AIWwxBBFFGb2sQaOCXMjjzULSBFAQomZXPpbFHk0q3awJJviGZ8lj0ZccJBeZT7gvz4q0YQvnfPkXsGlpY%2FKr%2Bw2bdx7052ZlC0aYKanjWSlEHxWjIni7oBQrPWAbzz7wxSfi1CaFGbE31U5w8FLYXdU%2FcKvi9%2FBWVK81yZ%2FtKv%2BT36f3%2B1VtBTy2zmZIm%2BsaDVBFA2yuR3LP8eqmA38CarCJ2U17YVRPueBn8DxBnU%2FaIohsWj8OvxQ2ECZPm94ImvEc9eGazNjKsecdesM0LfZUdiDiReSsu%2FZCncj8Tfk6gryz6N1ImP0a2RAuT7GzhfkUFOIzFWAg8cCvzRi24O%2FR86wb2a%2FqWnnV9BZCvRZSUTIoK9QGq3lrqaqLESaz%2F%2Fzuqz37OaHEFb8H%2FU%2BG4TTG2DN%2FDyNZnKuepOOJPhIR1m5UL42tUEKxp25fa4LcdJzbAlCVGLQyclhIcc9xmNYauKseSv3ynnczG%2Bh1yWQfVyDgkSph58ROfmiZqRNEoeWkTQ39sQUio6GTXUbhTeYjRPLMA4w68bqvAY6pgEmaaNKPRR5LrYizu0VoMZKY65QBzYMU3lL4z0h8L3lXI8oR%2F2O7llWVjNlveenE%2FMeV%2FE5vjuogu7H3HY7jIvAixGcAnS%2FnrApQqKRfNjXIX%2BsUPQ4xszBI1Eb5Y3pCMvJFn5MT8Fx%2F2oD9vchKRwGmajSTfh8r6nNnHkjv1onx8Z%2FtrX6RioVvv5xOY6ER4hOuzLyeYUL%2FLdRhM75rTmCivPxQJwZ&X-Amz-Signature=cd4fed5d497b2b934c986f1761a9f27b7a3bc25f8a4fcc38f044fb7bef89587c&X-Amz-SignedHeaders=host&x-id=GetObject)
