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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSZH6QT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FxTaC%2B3%2Freud3zrU%2B207TrtMHa%2Babf%2F%2FGrNBgOAVcjAiEAmreU2tTQVQyDLpbJOj%2BLMDEGqeQWDS%2BLdbGgIm8W6FQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPqExKIuti0%2FOLaXyrcA767kqG9aIgnqnB7N4hfLeG3fwv526nrK6JEG8FSucAUvt7TRZvmTnayxHhkaO0Sx0dB6TJMCrSHbQDhWcq25Uc93hl77Q4%2FSrcB0Uuu6uJu3Goi2g7a6tpP0bEsZ2%2BFCnwbWxrY1Z0rMndt5fME42Ch2C3UtVazQ2QmHpJVs7VvoA24WsKMeZQAtZxHcvkusvEemfKLxDh%2FaUq9ppWaAfShX7vfiYxDLTxaw6NdingWaDKBRiBOXzqQPeqZ%2Bknj6%2FC6Gb1%2BwO468JLghSY5BXKrPWDmQnawA%2BamlPkoTj%2BLbuEDDD3PAx6fhYId0Mk6yN%2FZLInoRs6ZTlCDfI6fLprwn6rHu%2BllIH6blSQzIxCGwpsz36dm1wcI2UIqjx5IEpFT7xpY89B1OrnO8Z6iL7cGVxfk3zt2alJ64YieDfwS7xfugtCl4jIb0FxN43XpBw5IR%2BpuMmZ7Qv6wXWgPwbyD6f9ZbpTWtXtGBATBpjX1dWS5YIl1FnXQeD7DO%2BfyuVIZDnwK4rWFkfJ1wom7qklsLMqJSDkQ5kWycfDw9BkEjKSKcJIabuXDmrTJIU3uHOZGP%2B0H0NgGq8Gg%2Bo0c9ZKY659BWX94GR%2Bd3a3HGuL60oXzmftHwTvc7cdAMNan3sIGOqUBz58h%2BH7GzyLRI2wJlay5NqOjhCnQrJes77jJkRHW3upHrFaSI%2F%2B7vgf1XSVDvzkXXbQYj55nR5rkuPGS9XRbYcBlQY%2Bgb%2BTQMiqTcxghRIp3r%2BXxtuTciJLkXDDAyocRRFL7%2BV6C6oVILrkuhpu39incIoGBYISdLAWTIx0bQ8AM3wn%2Fs%2B0Wtb8HO54k17xicckDV9HIYbC7xDBf2zslG%2FpJeX5J&X-Amz-Signature=9d701d33adadeb6a9edc756ae461ef2e8abfe0af85141175119b29a7ceaf4a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSZH6QT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FxTaC%2B3%2Freud3zrU%2B207TrtMHa%2Babf%2F%2FGrNBgOAVcjAiEAmreU2tTQVQyDLpbJOj%2BLMDEGqeQWDS%2BLdbGgIm8W6FQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPqExKIuti0%2FOLaXyrcA767kqG9aIgnqnB7N4hfLeG3fwv526nrK6JEG8FSucAUvt7TRZvmTnayxHhkaO0Sx0dB6TJMCrSHbQDhWcq25Uc93hl77Q4%2FSrcB0Uuu6uJu3Goi2g7a6tpP0bEsZ2%2BFCnwbWxrY1Z0rMndt5fME42Ch2C3UtVazQ2QmHpJVs7VvoA24WsKMeZQAtZxHcvkusvEemfKLxDh%2FaUq9ppWaAfShX7vfiYxDLTxaw6NdingWaDKBRiBOXzqQPeqZ%2Bknj6%2FC6Gb1%2BwO468JLghSY5BXKrPWDmQnawA%2BamlPkoTj%2BLbuEDDD3PAx6fhYId0Mk6yN%2FZLInoRs6ZTlCDfI6fLprwn6rHu%2BllIH6blSQzIxCGwpsz36dm1wcI2UIqjx5IEpFT7xpY89B1OrnO8Z6iL7cGVxfk3zt2alJ64YieDfwS7xfugtCl4jIb0FxN43XpBw5IR%2BpuMmZ7Qv6wXWgPwbyD6f9ZbpTWtXtGBATBpjX1dWS5YIl1FnXQeD7DO%2BfyuVIZDnwK4rWFkfJ1wom7qklsLMqJSDkQ5kWycfDw9BkEjKSKcJIabuXDmrTJIU3uHOZGP%2B0H0NgGq8Gg%2Bo0c9ZKY659BWX94GR%2Bd3a3HGuL60oXzmftHwTvc7cdAMNan3sIGOqUBz58h%2BH7GzyLRI2wJlay5NqOjhCnQrJes77jJkRHW3upHrFaSI%2F%2B7vgf1XSVDvzkXXbQYj55nR5rkuPGS9XRbYcBlQY%2Bgb%2BTQMiqTcxghRIp3r%2BXxtuTciJLkXDDAyocRRFL7%2BV6C6oVILrkuhpu39incIoGBYISdLAWTIx0bQ8AM3wn%2Fs%2B0Wtb8HO54k17xicckDV9HIYbC7xDBf2zslG%2FpJeX5J&X-Amz-Signature=1eef128eb3a08aba9d9fbc909aff70f4853e10a3fd8183b8a13ad404297a357d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSZH6QT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FxTaC%2B3%2Freud3zrU%2B207TrtMHa%2Babf%2F%2FGrNBgOAVcjAiEAmreU2tTQVQyDLpbJOj%2BLMDEGqeQWDS%2BLdbGgIm8W6FQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPqExKIuti0%2FOLaXyrcA767kqG9aIgnqnB7N4hfLeG3fwv526nrK6JEG8FSucAUvt7TRZvmTnayxHhkaO0Sx0dB6TJMCrSHbQDhWcq25Uc93hl77Q4%2FSrcB0Uuu6uJu3Goi2g7a6tpP0bEsZ2%2BFCnwbWxrY1Z0rMndt5fME42Ch2C3UtVazQ2QmHpJVs7VvoA24WsKMeZQAtZxHcvkusvEemfKLxDh%2FaUq9ppWaAfShX7vfiYxDLTxaw6NdingWaDKBRiBOXzqQPeqZ%2Bknj6%2FC6Gb1%2BwO468JLghSY5BXKrPWDmQnawA%2BamlPkoTj%2BLbuEDDD3PAx6fhYId0Mk6yN%2FZLInoRs6ZTlCDfI6fLprwn6rHu%2BllIH6blSQzIxCGwpsz36dm1wcI2UIqjx5IEpFT7xpY89B1OrnO8Z6iL7cGVxfk3zt2alJ64YieDfwS7xfugtCl4jIb0FxN43XpBw5IR%2BpuMmZ7Qv6wXWgPwbyD6f9ZbpTWtXtGBATBpjX1dWS5YIl1FnXQeD7DO%2BfyuVIZDnwK4rWFkfJ1wom7qklsLMqJSDkQ5kWycfDw9BkEjKSKcJIabuXDmrTJIU3uHOZGP%2B0H0NgGq8Gg%2Bo0c9ZKY659BWX94GR%2Bd3a3HGuL60oXzmftHwTvc7cdAMNan3sIGOqUBz58h%2BH7GzyLRI2wJlay5NqOjhCnQrJes77jJkRHW3upHrFaSI%2F%2B7vgf1XSVDvzkXXbQYj55nR5rkuPGS9XRbYcBlQY%2Bgb%2BTQMiqTcxghRIp3r%2BXxtuTciJLkXDDAyocRRFL7%2BV6C6oVILrkuhpu39incIoGBYISdLAWTIx0bQ8AM3wn%2Fs%2B0Wtb8HO54k17xicckDV9HIYbC7xDBf2zslG%2FpJeX5J&X-Amz-Signature=cf3205771b87eae13eb561fb41359c456c087e5e8f494cc883d933f19a5d6d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSZH6QT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FxTaC%2B3%2Freud3zrU%2B207TrtMHa%2Babf%2F%2FGrNBgOAVcjAiEAmreU2tTQVQyDLpbJOj%2BLMDEGqeQWDS%2BLdbGgIm8W6FQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPqExKIuti0%2FOLaXyrcA767kqG9aIgnqnB7N4hfLeG3fwv526nrK6JEG8FSucAUvt7TRZvmTnayxHhkaO0Sx0dB6TJMCrSHbQDhWcq25Uc93hl77Q4%2FSrcB0Uuu6uJu3Goi2g7a6tpP0bEsZ2%2BFCnwbWxrY1Z0rMndt5fME42Ch2C3UtVazQ2QmHpJVs7VvoA24WsKMeZQAtZxHcvkusvEemfKLxDh%2FaUq9ppWaAfShX7vfiYxDLTxaw6NdingWaDKBRiBOXzqQPeqZ%2Bknj6%2FC6Gb1%2BwO468JLghSY5BXKrPWDmQnawA%2BamlPkoTj%2BLbuEDDD3PAx6fhYId0Mk6yN%2FZLInoRs6ZTlCDfI6fLprwn6rHu%2BllIH6blSQzIxCGwpsz36dm1wcI2UIqjx5IEpFT7xpY89B1OrnO8Z6iL7cGVxfk3zt2alJ64YieDfwS7xfugtCl4jIb0FxN43XpBw5IR%2BpuMmZ7Qv6wXWgPwbyD6f9ZbpTWtXtGBATBpjX1dWS5YIl1FnXQeD7DO%2BfyuVIZDnwK4rWFkfJ1wom7qklsLMqJSDkQ5kWycfDw9BkEjKSKcJIabuXDmrTJIU3uHOZGP%2B0H0NgGq8Gg%2Bo0c9ZKY659BWX94GR%2Bd3a3HGuL60oXzmftHwTvc7cdAMNan3sIGOqUBz58h%2BH7GzyLRI2wJlay5NqOjhCnQrJes77jJkRHW3upHrFaSI%2F%2B7vgf1XSVDvzkXXbQYj55nR5rkuPGS9XRbYcBlQY%2Bgb%2BTQMiqTcxghRIp3r%2BXxtuTciJLkXDDAyocRRFL7%2BV6C6oVILrkuhpu39incIoGBYISdLAWTIx0bQ8AM3wn%2Fs%2B0Wtb8HO54k17xicckDV9HIYbC7xDBf2zslG%2FpJeX5J&X-Amz-Signature=7ea11cd72a5b9d088dc0303d112b8d9797a4ee75ffa3fa5480ce97f8dc6159b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSZH6QT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FxTaC%2B3%2Freud3zrU%2B207TrtMHa%2Babf%2F%2FGrNBgOAVcjAiEAmreU2tTQVQyDLpbJOj%2BLMDEGqeQWDS%2BLdbGgIm8W6FQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPqExKIuti0%2FOLaXyrcA767kqG9aIgnqnB7N4hfLeG3fwv526nrK6JEG8FSucAUvt7TRZvmTnayxHhkaO0Sx0dB6TJMCrSHbQDhWcq25Uc93hl77Q4%2FSrcB0Uuu6uJu3Goi2g7a6tpP0bEsZ2%2BFCnwbWxrY1Z0rMndt5fME42Ch2C3UtVazQ2QmHpJVs7VvoA24WsKMeZQAtZxHcvkusvEemfKLxDh%2FaUq9ppWaAfShX7vfiYxDLTxaw6NdingWaDKBRiBOXzqQPeqZ%2Bknj6%2FC6Gb1%2BwO468JLghSY5BXKrPWDmQnawA%2BamlPkoTj%2BLbuEDDD3PAx6fhYId0Mk6yN%2FZLInoRs6ZTlCDfI6fLprwn6rHu%2BllIH6blSQzIxCGwpsz36dm1wcI2UIqjx5IEpFT7xpY89B1OrnO8Z6iL7cGVxfk3zt2alJ64YieDfwS7xfugtCl4jIb0FxN43XpBw5IR%2BpuMmZ7Qv6wXWgPwbyD6f9ZbpTWtXtGBATBpjX1dWS5YIl1FnXQeD7DO%2BfyuVIZDnwK4rWFkfJ1wom7qklsLMqJSDkQ5kWycfDw9BkEjKSKcJIabuXDmrTJIU3uHOZGP%2B0H0NgGq8Gg%2Bo0c9ZKY659BWX94GR%2Bd3a3HGuL60oXzmftHwTvc7cdAMNan3sIGOqUBz58h%2BH7GzyLRI2wJlay5NqOjhCnQrJes77jJkRHW3upHrFaSI%2F%2B7vgf1XSVDvzkXXbQYj55nR5rkuPGS9XRbYcBlQY%2Bgb%2BTQMiqTcxghRIp3r%2BXxtuTciJLkXDDAyocRRFL7%2BV6C6oVILrkuhpu39incIoGBYISdLAWTIx0bQ8AM3wn%2Fs%2B0Wtb8HO54k17xicckDV9HIYbC7xDBf2zslG%2FpJeX5J&X-Amz-Signature=be389ffbb64a1acb8b6b977fc5c1339d57de5a5b7af4d0ce6411c1012123f3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSZH6QT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FxTaC%2B3%2Freud3zrU%2B207TrtMHa%2Babf%2F%2FGrNBgOAVcjAiEAmreU2tTQVQyDLpbJOj%2BLMDEGqeQWDS%2BLdbGgIm8W6FQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPqExKIuti0%2FOLaXyrcA767kqG9aIgnqnB7N4hfLeG3fwv526nrK6JEG8FSucAUvt7TRZvmTnayxHhkaO0Sx0dB6TJMCrSHbQDhWcq25Uc93hl77Q4%2FSrcB0Uuu6uJu3Goi2g7a6tpP0bEsZ2%2BFCnwbWxrY1Z0rMndt5fME42Ch2C3UtVazQ2QmHpJVs7VvoA24WsKMeZQAtZxHcvkusvEemfKLxDh%2FaUq9ppWaAfShX7vfiYxDLTxaw6NdingWaDKBRiBOXzqQPeqZ%2Bknj6%2FC6Gb1%2BwO468JLghSY5BXKrPWDmQnawA%2BamlPkoTj%2BLbuEDDD3PAx6fhYId0Mk6yN%2FZLInoRs6ZTlCDfI6fLprwn6rHu%2BllIH6blSQzIxCGwpsz36dm1wcI2UIqjx5IEpFT7xpY89B1OrnO8Z6iL7cGVxfk3zt2alJ64YieDfwS7xfugtCl4jIb0FxN43XpBw5IR%2BpuMmZ7Qv6wXWgPwbyD6f9ZbpTWtXtGBATBpjX1dWS5YIl1FnXQeD7DO%2BfyuVIZDnwK4rWFkfJ1wom7qklsLMqJSDkQ5kWycfDw9BkEjKSKcJIabuXDmrTJIU3uHOZGP%2B0H0NgGq8Gg%2Bo0c9ZKY659BWX94GR%2Bd3a3HGuL60oXzmftHwTvc7cdAMNan3sIGOqUBz58h%2BH7GzyLRI2wJlay5NqOjhCnQrJes77jJkRHW3upHrFaSI%2F%2B7vgf1XSVDvzkXXbQYj55nR5rkuPGS9XRbYcBlQY%2Bgb%2BTQMiqTcxghRIp3r%2BXxtuTciJLkXDDAyocRRFL7%2BV6C6oVILrkuhpu39incIoGBYISdLAWTIx0bQ8AM3wn%2Fs%2B0Wtb8HO54k17xicckDV9HIYbC7xDBf2zslG%2FpJeX5J&X-Amz-Signature=f761668f1799fea5e238273eb60d1cf4d5627aee2eac658edaad652d7ec6e705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
