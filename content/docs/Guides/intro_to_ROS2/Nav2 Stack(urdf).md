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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSK4ZCM2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDWGAN5RLlPQOH2fZFT0PjQKranzbRWUlT9VLNem1GQEAIgARu5S4RY3K%2B6boZiI7w12YkDrNnZ9MY%2Fo%2B5nNqejb2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKF%2BUZFgpsjYcRJryrcA%2FZ9m%2BBAUCE9v5kX9eXAo5RQGqJOdaxBlOyD93%2ByzTh1HlWbm0ZaSCWUU9gzSS8BzlfrU1cXw1RcHAARJO0LtW18SwW7muneIvVB52QHYCApIRU%2F1O%2Fhj8i%2FeYcrcFNiOC8gKqJxBWL4ZIcB5072B7Qlnoj9Fg4EndbS42SKb6YVidPESkwaRApQoU7DPuCL%2FaNNT5qpIP4zMamDbZU8DP5is8k%2Bz5m6hKhOureaXmgbIka2DIIUTphYZ38h1q4t5OAF6laeLN2TM%2FScxGQ%2FLrRl6rNqFdoMAQ%2BakixoTQorcA6aw1Igeeir3TD%2FHlNnD0Z%2Bl0YfcvCDiygo0F%2Fl1R5%2BobAZbHM8JALTRwLYESfSIxcZ8djQNmHmq8CRXS5llW%2BHE%2FHAB2cS2EJBjZfPwObPYhe1CB1vsS0M0wym8sbK3CieXNBPKTg0TjSFWdOe5fBgKmjIME1dEuc0rwE%2F0ZctJQRlM40pm413zwVD4HG70elUWSy2zFTRUnwUBkEwEaZlLCxl0Dm%2B957%2BPYvNDzZpCkdKgM44ho64H3I%2FS%2BytMNcZLJ0b%2FXa2mL0N24d8uXhSycVsCE3TPdQTs9CHd3V6RlhS5BnBJGGuEinewFPSo%2Fx8n%2BiPqxZ%2BbzF4MMG3rsMGOqUBOOQPbcMNEpbyLhUMrYDT2WSY%2FYa0uelS28U19QMxt1rOEYXZY58pG%2Bai66q1cmKxeQ9NW0QRw%2BCXuUDulGS6dKYeHysVETdrRiBkCk47YD069jBSr3%2FDOycVniZVsc6XuKXrlWXi5EAoCgG3Pnx5gttJYmJc8ZH24ZHJIEPXf1Yg%2FjxFqejqnzyUrfE%2B0CQ6NN3wCB7tHshvGKgo5uvib7GtZFGE&X-Amz-Signature=eed0b432a7c7dec487ebee41bb91ee165cb14bb64594fbba71ea32ccd6a1b6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSK4ZCM2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDWGAN5RLlPQOH2fZFT0PjQKranzbRWUlT9VLNem1GQEAIgARu5S4RY3K%2B6boZiI7w12YkDrNnZ9MY%2Fo%2B5nNqejb2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKF%2BUZFgpsjYcRJryrcA%2FZ9m%2BBAUCE9v5kX9eXAo5RQGqJOdaxBlOyD93%2ByzTh1HlWbm0ZaSCWUU9gzSS8BzlfrU1cXw1RcHAARJO0LtW18SwW7muneIvVB52QHYCApIRU%2F1O%2Fhj8i%2FeYcrcFNiOC8gKqJxBWL4ZIcB5072B7Qlnoj9Fg4EndbS42SKb6YVidPESkwaRApQoU7DPuCL%2FaNNT5qpIP4zMamDbZU8DP5is8k%2Bz5m6hKhOureaXmgbIka2DIIUTphYZ38h1q4t5OAF6laeLN2TM%2FScxGQ%2FLrRl6rNqFdoMAQ%2BakixoTQorcA6aw1Igeeir3TD%2FHlNnD0Z%2Bl0YfcvCDiygo0F%2Fl1R5%2BobAZbHM8JALTRwLYESfSIxcZ8djQNmHmq8CRXS5llW%2BHE%2FHAB2cS2EJBjZfPwObPYhe1CB1vsS0M0wym8sbK3CieXNBPKTg0TjSFWdOe5fBgKmjIME1dEuc0rwE%2F0ZctJQRlM40pm413zwVD4HG70elUWSy2zFTRUnwUBkEwEaZlLCxl0Dm%2B957%2BPYvNDzZpCkdKgM44ho64H3I%2FS%2BytMNcZLJ0b%2FXa2mL0N24d8uXhSycVsCE3TPdQTs9CHd3V6RlhS5BnBJGGuEinewFPSo%2Fx8n%2BiPqxZ%2BbzF4MMG3rsMGOqUBOOQPbcMNEpbyLhUMrYDT2WSY%2FYa0uelS28U19QMxt1rOEYXZY58pG%2Bai66q1cmKxeQ9NW0QRw%2BCXuUDulGS6dKYeHysVETdrRiBkCk47YD069jBSr3%2FDOycVniZVsc6XuKXrlWXi5EAoCgG3Pnx5gttJYmJc8ZH24ZHJIEPXf1Yg%2FjxFqejqnzyUrfE%2B0CQ6NN3wCB7tHshvGKgo5uvib7GtZFGE&X-Amz-Signature=6aa798db1809b9f72e1e63643d0583662071d530c7747003390ef7bbf78090c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSK4ZCM2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDWGAN5RLlPQOH2fZFT0PjQKranzbRWUlT9VLNem1GQEAIgARu5S4RY3K%2B6boZiI7w12YkDrNnZ9MY%2Fo%2B5nNqejb2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKF%2BUZFgpsjYcRJryrcA%2FZ9m%2BBAUCE9v5kX9eXAo5RQGqJOdaxBlOyD93%2ByzTh1HlWbm0ZaSCWUU9gzSS8BzlfrU1cXw1RcHAARJO0LtW18SwW7muneIvVB52QHYCApIRU%2F1O%2Fhj8i%2FeYcrcFNiOC8gKqJxBWL4ZIcB5072B7Qlnoj9Fg4EndbS42SKb6YVidPESkwaRApQoU7DPuCL%2FaNNT5qpIP4zMamDbZU8DP5is8k%2Bz5m6hKhOureaXmgbIka2DIIUTphYZ38h1q4t5OAF6laeLN2TM%2FScxGQ%2FLrRl6rNqFdoMAQ%2BakixoTQorcA6aw1Igeeir3TD%2FHlNnD0Z%2Bl0YfcvCDiygo0F%2Fl1R5%2BobAZbHM8JALTRwLYESfSIxcZ8djQNmHmq8CRXS5llW%2BHE%2FHAB2cS2EJBjZfPwObPYhe1CB1vsS0M0wym8sbK3CieXNBPKTg0TjSFWdOe5fBgKmjIME1dEuc0rwE%2F0ZctJQRlM40pm413zwVD4HG70elUWSy2zFTRUnwUBkEwEaZlLCxl0Dm%2B957%2BPYvNDzZpCkdKgM44ho64H3I%2FS%2BytMNcZLJ0b%2FXa2mL0N24d8uXhSycVsCE3TPdQTs9CHd3V6RlhS5BnBJGGuEinewFPSo%2Fx8n%2BiPqxZ%2BbzF4MMG3rsMGOqUBOOQPbcMNEpbyLhUMrYDT2WSY%2FYa0uelS28U19QMxt1rOEYXZY58pG%2Bai66q1cmKxeQ9NW0QRw%2BCXuUDulGS6dKYeHysVETdrRiBkCk47YD069jBSr3%2FDOycVniZVsc6XuKXrlWXi5EAoCgG3Pnx5gttJYmJc8ZH24ZHJIEPXf1Yg%2FjxFqejqnzyUrfE%2B0CQ6NN3wCB7tHshvGKgo5uvib7GtZFGE&X-Amz-Signature=f036e2174dd5256c986b43e9649b8e2eb8ebf6e9b1ead39a010482ec08ae5cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSK4ZCM2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDWGAN5RLlPQOH2fZFT0PjQKranzbRWUlT9VLNem1GQEAIgARu5S4RY3K%2B6boZiI7w12YkDrNnZ9MY%2Fo%2B5nNqejb2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKF%2BUZFgpsjYcRJryrcA%2FZ9m%2BBAUCE9v5kX9eXAo5RQGqJOdaxBlOyD93%2ByzTh1HlWbm0ZaSCWUU9gzSS8BzlfrU1cXw1RcHAARJO0LtW18SwW7muneIvVB52QHYCApIRU%2F1O%2Fhj8i%2FeYcrcFNiOC8gKqJxBWL4ZIcB5072B7Qlnoj9Fg4EndbS42SKb6YVidPESkwaRApQoU7DPuCL%2FaNNT5qpIP4zMamDbZU8DP5is8k%2Bz5m6hKhOureaXmgbIka2DIIUTphYZ38h1q4t5OAF6laeLN2TM%2FScxGQ%2FLrRl6rNqFdoMAQ%2BakixoTQorcA6aw1Igeeir3TD%2FHlNnD0Z%2Bl0YfcvCDiygo0F%2Fl1R5%2BobAZbHM8JALTRwLYESfSIxcZ8djQNmHmq8CRXS5llW%2BHE%2FHAB2cS2EJBjZfPwObPYhe1CB1vsS0M0wym8sbK3CieXNBPKTg0TjSFWdOe5fBgKmjIME1dEuc0rwE%2F0ZctJQRlM40pm413zwVD4HG70elUWSy2zFTRUnwUBkEwEaZlLCxl0Dm%2B957%2BPYvNDzZpCkdKgM44ho64H3I%2FS%2BytMNcZLJ0b%2FXa2mL0N24d8uXhSycVsCE3TPdQTs9CHd3V6RlhS5BnBJGGuEinewFPSo%2Fx8n%2BiPqxZ%2BbzF4MMG3rsMGOqUBOOQPbcMNEpbyLhUMrYDT2WSY%2FYa0uelS28U19QMxt1rOEYXZY58pG%2Bai66q1cmKxeQ9NW0QRw%2BCXuUDulGS6dKYeHysVETdrRiBkCk47YD069jBSr3%2FDOycVniZVsc6XuKXrlWXi5EAoCgG3Pnx5gttJYmJc8ZH24ZHJIEPXf1Yg%2FjxFqejqnzyUrfE%2B0CQ6NN3wCB7tHshvGKgo5uvib7GtZFGE&X-Amz-Signature=e292f0dfa7f8d65c83c4ac3b724e0962c43195e9a8ea5879056d592305c76c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSK4ZCM2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDWGAN5RLlPQOH2fZFT0PjQKranzbRWUlT9VLNem1GQEAIgARu5S4RY3K%2B6boZiI7w12YkDrNnZ9MY%2Fo%2B5nNqejb2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKF%2BUZFgpsjYcRJryrcA%2FZ9m%2BBAUCE9v5kX9eXAo5RQGqJOdaxBlOyD93%2ByzTh1HlWbm0ZaSCWUU9gzSS8BzlfrU1cXw1RcHAARJO0LtW18SwW7muneIvVB52QHYCApIRU%2F1O%2Fhj8i%2FeYcrcFNiOC8gKqJxBWL4ZIcB5072B7Qlnoj9Fg4EndbS42SKb6YVidPESkwaRApQoU7DPuCL%2FaNNT5qpIP4zMamDbZU8DP5is8k%2Bz5m6hKhOureaXmgbIka2DIIUTphYZ38h1q4t5OAF6laeLN2TM%2FScxGQ%2FLrRl6rNqFdoMAQ%2BakixoTQorcA6aw1Igeeir3TD%2FHlNnD0Z%2Bl0YfcvCDiygo0F%2Fl1R5%2BobAZbHM8JALTRwLYESfSIxcZ8djQNmHmq8CRXS5llW%2BHE%2FHAB2cS2EJBjZfPwObPYhe1CB1vsS0M0wym8sbK3CieXNBPKTg0TjSFWdOe5fBgKmjIME1dEuc0rwE%2F0ZctJQRlM40pm413zwVD4HG70elUWSy2zFTRUnwUBkEwEaZlLCxl0Dm%2B957%2BPYvNDzZpCkdKgM44ho64H3I%2FS%2BytMNcZLJ0b%2FXa2mL0N24d8uXhSycVsCE3TPdQTs9CHd3V6RlhS5BnBJGGuEinewFPSo%2Fx8n%2BiPqxZ%2BbzF4MMG3rsMGOqUBOOQPbcMNEpbyLhUMrYDT2WSY%2FYa0uelS28U19QMxt1rOEYXZY58pG%2Bai66q1cmKxeQ9NW0QRw%2BCXuUDulGS6dKYeHysVETdrRiBkCk47YD069jBSr3%2FDOycVniZVsc6XuKXrlWXi5EAoCgG3Pnx5gttJYmJc8ZH24ZHJIEPXf1Yg%2FjxFqejqnzyUrfE%2B0CQ6NN3wCB7tHshvGKgo5uvib7GtZFGE&X-Amz-Signature=cd2e88ee2b533d85dae6f36fb567448ee458ebd968b8d97e28d51b339c8fe7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSK4ZCM2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDWGAN5RLlPQOH2fZFT0PjQKranzbRWUlT9VLNem1GQEAIgARu5S4RY3K%2B6boZiI7w12YkDrNnZ9MY%2Fo%2B5nNqejb2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEKF%2BUZFgpsjYcRJryrcA%2FZ9m%2BBAUCE9v5kX9eXAo5RQGqJOdaxBlOyD93%2ByzTh1HlWbm0ZaSCWUU9gzSS8BzlfrU1cXw1RcHAARJO0LtW18SwW7muneIvVB52QHYCApIRU%2F1O%2Fhj8i%2FeYcrcFNiOC8gKqJxBWL4ZIcB5072B7Qlnoj9Fg4EndbS42SKb6YVidPESkwaRApQoU7DPuCL%2FaNNT5qpIP4zMamDbZU8DP5is8k%2Bz5m6hKhOureaXmgbIka2DIIUTphYZ38h1q4t5OAF6laeLN2TM%2FScxGQ%2FLrRl6rNqFdoMAQ%2BakixoTQorcA6aw1Igeeir3TD%2FHlNnD0Z%2Bl0YfcvCDiygo0F%2Fl1R5%2BobAZbHM8JALTRwLYESfSIxcZ8djQNmHmq8CRXS5llW%2BHE%2FHAB2cS2EJBjZfPwObPYhe1CB1vsS0M0wym8sbK3CieXNBPKTg0TjSFWdOe5fBgKmjIME1dEuc0rwE%2F0ZctJQRlM40pm413zwVD4HG70elUWSy2zFTRUnwUBkEwEaZlLCxl0Dm%2B957%2BPYvNDzZpCkdKgM44ho64H3I%2FS%2BytMNcZLJ0b%2FXa2mL0N24d8uXhSycVsCE3TPdQTs9CHd3V6RlhS5BnBJGGuEinewFPSo%2Fx8n%2BiPqxZ%2BbzF4MMG3rsMGOqUBOOQPbcMNEpbyLhUMrYDT2WSY%2FYa0uelS28U19QMxt1rOEYXZY58pG%2Bai66q1cmKxeQ9NW0QRw%2BCXuUDulGS6dKYeHysVETdrRiBkCk47YD069jBSr3%2FDOycVniZVsc6XuKXrlWXi5EAoCgG3Pnx5gttJYmJc8ZH24ZHJIEPXf1Yg%2FjxFqejqnzyUrfE%2B0CQ6NN3wCB7tHshvGKgo5uvib7GtZFGE&X-Amz-Signature=45c1545a6d0cfb98bdd074198a8d3e275a414219bff6d2cfef79bc997b671a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
