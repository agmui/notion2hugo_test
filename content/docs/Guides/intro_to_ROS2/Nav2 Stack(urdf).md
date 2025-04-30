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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6WM6DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEDeCEgMk6V4IM7tO%2FZYp57vZ52r3CeM4dHx0gJrFi4ZAiAvDd0miB3XiJ4s2i4td%2B5%2Bogj4Sl3fGH7TmOLF%2FgPrViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKE%2BtpUuni3zRjbcKtwDbyf6odoPKCth7ASEXUbiBQ3uu%2FiD7J7oEg3bo2k9M29Lbw7osb6OO1mnLj1jvB%2FSHxj8zlTe5ZnGDrL5uOMF%2FF2Hn5z5VuifLamKkPnANXqqj7St1R2XAAKgSaG1l%2FJsMvLI0C7llSmK4hCNxS0NI8yYwtLIUeU%2BOqCfdtzkrxor3ySWNsr1M3Xj%2F8XKlD3XWozyzbrVANTD41sgnmV3Mc26Cn7YsIFJ9BMrjcxd0ilB9oVuPePxgY3d%2FZ1%2FulCh8U7q1aIvLz5f3r2xD58YzStWiuB0gxkriZ9L9Sb5E89JWYSoP%2F2i1Lq%2BHldcc%2F6d0JSSZwr5fVcT22tFhRplv3BfwGMA%2FQPBz%2BbNNUcDWcynvjxcrZFxgl5AIpz8J5nXOh%2B1S0AcfnDtqS706BhjbkeJN6cGsuKEU%2FtXxdLiSD2vKN0B4sGyr%2Fi%2FrlN%2BRU1Mu%2BG%2Bfl9DenxJaT%2FqrLYzvqI1WEeAchApSTzklEYZ%2BPjMd4uu8mqWbxZN%2BfWg8vaE0EGp7WITqSom0ZhyZtAJ0anF3PUcC5sKaMOOCCxSmEi%2Bei%2Fp4JscSc8BoD0wDR9iDh3yoix9vchCrJtEZ3aW4%2BNhYv8B%2FvlLwYTa3a3ggHo1vuucYtx4dxZ0qMgw89PJwAY6pgH4yrhaxnWTGtlanV9ht0OCQWM8X5CCM2ZRmPeSnoBvR3tvcJjolpnKaUDA6ygQRrG0w%2F1ey47SoC%2BLOfPBGy3budhh%2FBh00h0EI5G%2BGJb5%2BZZ6PIi%2B5AhScj6LdsHiQYnAN8CBOaTcFzOhku6zOuJ1Nncns%2B1fPpkLPnwpSwpsozYhZ95fKPNs0tvFvNqoLhfmQjd2yppwzfbaaC80db25704nJpHY&X-Amz-Signature=31ceab15acedf21b5be63a4fa9f7851d0090708931ea9e7e88384aa7f63d6a36&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6WM6DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEDeCEgMk6V4IM7tO%2FZYp57vZ52r3CeM4dHx0gJrFi4ZAiAvDd0miB3XiJ4s2i4td%2B5%2Bogj4Sl3fGH7TmOLF%2FgPrViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKE%2BtpUuni3zRjbcKtwDbyf6odoPKCth7ASEXUbiBQ3uu%2FiD7J7oEg3bo2k9M29Lbw7osb6OO1mnLj1jvB%2FSHxj8zlTe5ZnGDrL5uOMF%2FF2Hn5z5VuifLamKkPnANXqqj7St1R2XAAKgSaG1l%2FJsMvLI0C7llSmK4hCNxS0NI8yYwtLIUeU%2BOqCfdtzkrxor3ySWNsr1M3Xj%2F8XKlD3XWozyzbrVANTD41sgnmV3Mc26Cn7YsIFJ9BMrjcxd0ilB9oVuPePxgY3d%2FZ1%2FulCh8U7q1aIvLz5f3r2xD58YzStWiuB0gxkriZ9L9Sb5E89JWYSoP%2F2i1Lq%2BHldcc%2F6d0JSSZwr5fVcT22tFhRplv3BfwGMA%2FQPBz%2BbNNUcDWcynvjxcrZFxgl5AIpz8J5nXOh%2B1S0AcfnDtqS706BhjbkeJN6cGsuKEU%2FtXxdLiSD2vKN0B4sGyr%2Fi%2FrlN%2BRU1Mu%2BG%2Bfl9DenxJaT%2FqrLYzvqI1WEeAchApSTzklEYZ%2BPjMd4uu8mqWbxZN%2BfWg8vaE0EGp7WITqSom0ZhyZtAJ0anF3PUcC5sKaMOOCCxSmEi%2Bei%2Fp4JscSc8BoD0wDR9iDh3yoix9vchCrJtEZ3aW4%2BNhYv8B%2FvlLwYTa3a3ggHo1vuucYtx4dxZ0qMgw89PJwAY6pgH4yrhaxnWTGtlanV9ht0OCQWM8X5CCM2ZRmPeSnoBvR3tvcJjolpnKaUDA6ygQRrG0w%2F1ey47SoC%2BLOfPBGy3budhh%2FBh00h0EI5G%2BGJb5%2BZZ6PIi%2B5AhScj6LdsHiQYnAN8CBOaTcFzOhku6zOuJ1Nncns%2B1fPpkLPnwpSwpsozYhZ95fKPNs0tvFvNqoLhfmQjd2yppwzfbaaC80db25704nJpHY&X-Amz-Signature=9af127a1935c2105ff09bbee8fc3ff20b766de687c86a770f7badccd29ad46cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6WM6DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEDeCEgMk6V4IM7tO%2FZYp57vZ52r3CeM4dHx0gJrFi4ZAiAvDd0miB3XiJ4s2i4td%2B5%2Bogj4Sl3fGH7TmOLF%2FgPrViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKE%2BtpUuni3zRjbcKtwDbyf6odoPKCth7ASEXUbiBQ3uu%2FiD7J7oEg3bo2k9M29Lbw7osb6OO1mnLj1jvB%2FSHxj8zlTe5ZnGDrL5uOMF%2FF2Hn5z5VuifLamKkPnANXqqj7St1R2XAAKgSaG1l%2FJsMvLI0C7llSmK4hCNxS0NI8yYwtLIUeU%2BOqCfdtzkrxor3ySWNsr1M3Xj%2F8XKlD3XWozyzbrVANTD41sgnmV3Mc26Cn7YsIFJ9BMrjcxd0ilB9oVuPePxgY3d%2FZ1%2FulCh8U7q1aIvLz5f3r2xD58YzStWiuB0gxkriZ9L9Sb5E89JWYSoP%2F2i1Lq%2BHldcc%2F6d0JSSZwr5fVcT22tFhRplv3BfwGMA%2FQPBz%2BbNNUcDWcynvjxcrZFxgl5AIpz8J5nXOh%2B1S0AcfnDtqS706BhjbkeJN6cGsuKEU%2FtXxdLiSD2vKN0B4sGyr%2Fi%2FrlN%2BRU1Mu%2BG%2Bfl9DenxJaT%2FqrLYzvqI1WEeAchApSTzklEYZ%2BPjMd4uu8mqWbxZN%2BfWg8vaE0EGp7WITqSom0ZhyZtAJ0anF3PUcC5sKaMOOCCxSmEi%2Bei%2Fp4JscSc8BoD0wDR9iDh3yoix9vchCrJtEZ3aW4%2BNhYv8B%2FvlLwYTa3a3ggHo1vuucYtx4dxZ0qMgw89PJwAY6pgH4yrhaxnWTGtlanV9ht0OCQWM8X5CCM2ZRmPeSnoBvR3tvcJjolpnKaUDA6ygQRrG0w%2F1ey47SoC%2BLOfPBGy3budhh%2FBh00h0EI5G%2BGJb5%2BZZ6PIi%2B5AhScj6LdsHiQYnAN8CBOaTcFzOhku6zOuJ1Nncns%2B1fPpkLPnwpSwpsozYhZ95fKPNs0tvFvNqoLhfmQjd2yppwzfbaaC80db25704nJpHY&X-Amz-Signature=1383df8bcfed2785adc04cee83d059bbe4e9194745235b69f94ed2f4a7aa43f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6WM6DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEDeCEgMk6V4IM7tO%2FZYp57vZ52r3CeM4dHx0gJrFi4ZAiAvDd0miB3XiJ4s2i4td%2B5%2Bogj4Sl3fGH7TmOLF%2FgPrViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKE%2BtpUuni3zRjbcKtwDbyf6odoPKCth7ASEXUbiBQ3uu%2FiD7J7oEg3bo2k9M29Lbw7osb6OO1mnLj1jvB%2FSHxj8zlTe5ZnGDrL5uOMF%2FF2Hn5z5VuifLamKkPnANXqqj7St1R2XAAKgSaG1l%2FJsMvLI0C7llSmK4hCNxS0NI8yYwtLIUeU%2BOqCfdtzkrxor3ySWNsr1M3Xj%2F8XKlD3XWozyzbrVANTD41sgnmV3Mc26Cn7YsIFJ9BMrjcxd0ilB9oVuPePxgY3d%2FZ1%2FulCh8U7q1aIvLz5f3r2xD58YzStWiuB0gxkriZ9L9Sb5E89JWYSoP%2F2i1Lq%2BHldcc%2F6d0JSSZwr5fVcT22tFhRplv3BfwGMA%2FQPBz%2BbNNUcDWcynvjxcrZFxgl5AIpz8J5nXOh%2B1S0AcfnDtqS706BhjbkeJN6cGsuKEU%2FtXxdLiSD2vKN0B4sGyr%2Fi%2FrlN%2BRU1Mu%2BG%2Bfl9DenxJaT%2FqrLYzvqI1WEeAchApSTzklEYZ%2BPjMd4uu8mqWbxZN%2BfWg8vaE0EGp7WITqSom0ZhyZtAJ0anF3PUcC5sKaMOOCCxSmEi%2Bei%2Fp4JscSc8BoD0wDR9iDh3yoix9vchCrJtEZ3aW4%2BNhYv8B%2FvlLwYTa3a3ggHo1vuucYtx4dxZ0qMgw89PJwAY6pgH4yrhaxnWTGtlanV9ht0OCQWM8X5CCM2ZRmPeSnoBvR3tvcJjolpnKaUDA6ygQRrG0w%2F1ey47SoC%2BLOfPBGy3budhh%2FBh00h0EI5G%2BGJb5%2BZZ6PIi%2B5AhScj6LdsHiQYnAN8CBOaTcFzOhku6zOuJ1Nncns%2B1fPpkLPnwpSwpsozYhZ95fKPNs0tvFvNqoLhfmQjd2yppwzfbaaC80db25704nJpHY&X-Amz-Signature=0bfadf0398ed723df05babe8adac507cd53aacff35fe890436786860e706f704&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6WM6DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEDeCEgMk6V4IM7tO%2FZYp57vZ52r3CeM4dHx0gJrFi4ZAiAvDd0miB3XiJ4s2i4td%2B5%2Bogj4Sl3fGH7TmOLF%2FgPrViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKE%2BtpUuni3zRjbcKtwDbyf6odoPKCth7ASEXUbiBQ3uu%2FiD7J7oEg3bo2k9M29Lbw7osb6OO1mnLj1jvB%2FSHxj8zlTe5ZnGDrL5uOMF%2FF2Hn5z5VuifLamKkPnANXqqj7St1R2XAAKgSaG1l%2FJsMvLI0C7llSmK4hCNxS0NI8yYwtLIUeU%2BOqCfdtzkrxor3ySWNsr1M3Xj%2F8XKlD3XWozyzbrVANTD41sgnmV3Mc26Cn7YsIFJ9BMrjcxd0ilB9oVuPePxgY3d%2FZ1%2FulCh8U7q1aIvLz5f3r2xD58YzStWiuB0gxkriZ9L9Sb5E89JWYSoP%2F2i1Lq%2BHldcc%2F6d0JSSZwr5fVcT22tFhRplv3BfwGMA%2FQPBz%2BbNNUcDWcynvjxcrZFxgl5AIpz8J5nXOh%2B1S0AcfnDtqS706BhjbkeJN6cGsuKEU%2FtXxdLiSD2vKN0B4sGyr%2Fi%2FrlN%2BRU1Mu%2BG%2Bfl9DenxJaT%2FqrLYzvqI1WEeAchApSTzklEYZ%2BPjMd4uu8mqWbxZN%2BfWg8vaE0EGp7WITqSom0ZhyZtAJ0anF3PUcC5sKaMOOCCxSmEi%2Bei%2Fp4JscSc8BoD0wDR9iDh3yoix9vchCrJtEZ3aW4%2BNhYv8B%2FvlLwYTa3a3ggHo1vuucYtx4dxZ0qMgw89PJwAY6pgH4yrhaxnWTGtlanV9ht0OCQWM8X5CCM2ZRmPeSnoBvR3tvcJjolpnKaUDA6ygQRrG0w%2F1ey47SoC%2BLOfPBGy3budhh%2FBh00h0EI5G%2BGJb5%2BZZ6PIi%2B5AhScj6LdsHiQYnAN8CBOaTcFzOhku6zOuJ1Nncns%2B1fPpkLPnwpSwpsozYhZ95fKPNs0tvFvNqoLhfmQjd2yppwzfbaaC80db25704nJpHY&X-Amz-Signature=0e797fab0a8fabadd77c1d2f563ddf83ee9b3a2093f63c3b7e78b3e708a6d189&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6WM6DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEDeCEgMk6V4IM7tO%2FZYp57vZ52r3CeM4dHx0gJrFi4ZAiAvDd0miB3XiJ4s2i4td%2B5%2Bogj4Sl3fGH7TmOLF%2FgPrViqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKE%2BtpUuni3zRjbcKtwDbyf6odoPKCth7ASEXUbiBQ3uu%2FiD7J7oEg3bo2k9M29Lbw7osb6OO1mnLj1jvB%2FSHxj8zlTe5ZnGDrL5uOMF%2FF2Hn5z5VuifLamKkPnANXqqj7St1R2XAAKgSaG1l%2FJsMvLI0C7llSmK4hCNxS0NI8yYwtLIUeU%2BOqCfdtzkrxor3ySWNsr1M3Xj%2F8XKlD3XWozyzbrVANTD41sgnmV3Mc26Cn7YsIFJ9BMrjcxd0ilB9oVuPePxgY3d%2FZ1%2FulCh8U7q1aIvLz5f3r2xD58YzStWiuB0gxkriZ9L9Sb5E89JWYSoP%2F2i1Lq%2BHldcc%2F6d0JSSZwr5fVcT22tFhRplv3BfwGMA%2FQPBz%2BbNNUcDWcynvjxcrZFxgl5AIpz8J5nXOh%2B1S0AcfnDtqS706BhjbkeJN6cGsuKEU%2FtXxdLiSD2vKN0B4sGyr%2Fi%2FrlN%2BRU1Mu%2BG%2Bfl9DenxJaT%2FqrLYzvqI1WEeAchApSTzklEYZ%2BPjMd4uu8mqWbxZN%2BfWg8vaE0EGp7WITqSom0ZhyZtAJ0anF3PUcC5sKaMOOCCxSmEi%2Bei%2Fp4JscSc8BoD0wDR9iDh3yoix9vchCrJtEZ3aW4%2BNhYv8B%2FvlLwYTa3a3ggHo1vuucYtx4dxZ0qMgw89PJwAY6pgH4yrhaxnWTGtlanV9ht0OCQWM8X5CCM2ZRmPeSnoBvR3tvcJjolpnKaUDA6ygQRrG0w%2F1ey47SoC%2BLOfPBGy3budhh%2FBh00h0EI5G%2BGJb5%2BZZ6PIi%2B5AhScj6LdsHiQYnAN8CBOaTcFzOhku6zOuJ1Nncns%2B1fPpkLPnwpSwpsozYhZ95fKPNs0tvFvNqoLhfmQjd2yppwzfbaaC80db25704nJpHY&X-Amz-Signature=45ad501f4f7e045e582072c036f97447755a660d9d60748171a376abbe59989b&X-Amz-SignedHeaders=host&x-id=GetObject)
