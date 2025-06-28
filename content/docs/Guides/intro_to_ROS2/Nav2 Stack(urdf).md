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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODXB5QU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOuTxrmx9Ani0HsMqp8wWR2fR7qEI5XJj6SoSEkFpCeAiEA31sQDO9RDx7gaso3ihZ1pmA7HZO0aFR9ohmnUKp1VIcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRzJnftmIHcAQe1eyrcA4lNTq2%2BaeN27gkqPBX0LiER2f0koQxnhpTsxYgCtriTmga3QZmIMIZ0lh8H9kSKGMsHrXgabBXkSMRwgb71KsFLn6%2BWdX5GPWJcBbQp%2BXuHiI04hRZhNXfwLOKQsGWqqUrRHO7drJsvEoAPnP9rEdjqxlNsgyYZG28oOS3kaxp5zQltPz%2F6JLfNnm1AZGNki%2BouHW%2FN0QHwCdnzyZBGA7i%2FiSgae7z%2FAMR2DAYu%2Bcyz%2BRVfhPRxAMH6uJHc1Me8Fur6Vi8iYoA54fzqdVEjLHeDZeXGaXsdRCNv7WU3Io9lLBZb7%2Bt8rNN%2F4MCURKtDxorRycfwWzV6soZQh4QtBEJIqG8nmmdKXyRM97zpnFefw88rjMH1eD3RCxr%2BKB2AxzrgbGMYVJmHhwMc0QlLSQrJuk%2BmT%2FE3ov9Uz%2FTEKQW6WWKmLrHIdqox2QOnzs857%2B3CnQVftYZEdVXvTv9ZMvgFYWtBs2EVddN1pnFhZyZqqLqq3NXnAqBtW7DK5fzzMqINNgBJCB2bhoWL9eTMi8utHz1LX5xa%2B1HoQ%2BL6XlE8IOr93OtOiDIs0o9etssxJuURG6TdONznZ6aARjo%2BbC%2Fi%2FixpEjsID3A38kv2IoGOSg6s6O%2B157SBbVCpMOrJ%2FsIGOqUBvmbLT%2FXtEGNV6RK%2Bk2uF2y9IYYpXdSEs73tss9lUUx2h9Eouip96sfu3Nbs3N%2BN%2FLOOOxHHVksB7FaoDE6TtymksQV%2Bzycjm8W2%2Fx%2BgQo%2F9CsL5nN2blPd8HK4FS6wk4MjZkhYfw3kP30IfqPtTzzn6W2p3DKrdwDu2O2KzJeKsd9IO2wWvRSFjTy2IpywUqS1R4OpLLhG9DDtAztORkbpObcS8t&X-Amz-Signature=464e064c606321c7fc94d38f88e26b7a59823ef7050255a928a847ae339d0825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODXB5QU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOuTxrmx9Ani0HsMqp8wWR2fR7qEI5XJj6SoSEkFpCeAiEA31sQDO9RDx7gaso3ihZ1pmA7HZO0aFR9ohmnUKp1VIcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRzJnftmIHcAQe1eyrcA4lNTq2%2BaeN27gkqPBX0LiER2f0koQxnhpTsxYgCtriTmga3QZmIMIZ0lh8H9kSKGMsHrXgabBXkSMRwgb71KsFLn6%2BWdX5GPWJcBbQp%2BXuHiI04hRZhNXfwLOKQsGWqqUrRHO7drJsvEoAPnP9rEdjqxlNsgyYZG28oOS3kaxp5zQltPz%2F6JLfNnm1AZGNki%2BouHW%2FN0QHwCdnzyZBGA7i%2FiSgae7z%2FAMR2DAYu%2Bcyz%2BRVfhPRxAMH6uJHc1Me8Fur6Vi8iYoA54fzqdVEjLHeDZeXGaXsdRCNv7WU3Io9lLBZb7%2Bt8rNN%2F4MCURKtDxorRycfwWzV6soZQh4QtBEJIqG8nmmdKXyRM97zpnFefw88rjMH1eD3RCxr%2BKB2AxzrgbGMYVJmHhwMc0QlLSQrJuk%2BmT%2FE3ov9Uz%2FTEKQW6WWKmLrHIdqox2QOnzs857%2B3CnQVftYZEdVXvTv9ZMvgFYWtBs2EVddN1pnFhZyZqqLqq3NXnAqBtW7DK5fzzMqINNgBJCB2bhoWL9eTMi8utHz1LX5xa%2B1HoQ%2BL6XlE8IOr93OtOiDIs0o9etssxJuURG6TdONznZ6aARjo%2BbC%2Fi%2FixpEjsID3A38kv2IoGOSg6s6O%2B157SBbVCpMOrJ%2FsIGOqUBvmbLT%2FXtEGNV6RK%2Bk2uF2y9IYYpXdSEs73tss9lUUx2h9Eouip96sfu3Nbs3N%2BN%2FLOOOxHHVksB7FaoDE6TtymksQV%2Bzycjm8W2%2Fx%2BgQo%2F9CsL5nN2blPd8HK4FS6wk4MjZkhYfw3kP30IfqPtTzzn6W2p3DKrdwDu2O2KzJeKsd9IO2wWvRSFjTy2IpywUqS1R4OpLLhG9DDtAztORkbpObcS8t&X-Amz-Signature=ba5b2759b265f092f7b579f820583f68a3678faac9bfb8b6c3ad8bee0c411fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODXB5QU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOuTxrmx9Ani0HsMqp8wWR2fR7qEI5XJj6SoSEkFpCeAiEA31sQDO9RDx7gaso3ihZ1pmA7HZO0aFR9ohmnUKp1VIcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRzJnftmIHcAQe1eyrcA4lNTq2%2BaeN27gkqPBX0LiER2f0koQxnhpTsxYgCtriTmga3QZmIMIZ0lh8H9kSKGMsHrXgabBXkSMRwgb71KsFLn6%2BWdX5GPWJcBbQp%2BXuHiI04hRZhNXfwLOKQsGWqqUrRHO7drJsvEoAPnP9rEdjqxlNsgyYZG28oOS3kaxp5zQltPz%2F6JLfNnm1AZGNki%2BouHW%2FN0QHwCdnzyZBGA7i%2FiSgae7z%2FAMR2DAYu%2Bcyz%2BRVfhPRxAMH6uJHc1Me8Fur6Vi8iYoA54fzqdVEjLHeDZeXGaXsdRCNv7WU3Io9lLBZb7%2Bt8rNN%2F4MCURKtDxorRycfwWzV6soZQh4QtBEJIqG8nmmdKXyRM97zpnFefw88rjMH1eD3RCxr%2BKB2AxzrgbGMYVJmHhwMc0QlLSQrJuk%2BmT%2FE3ov9Uz%2FTEKQW6WWKmLrHIdqox2QOnzs857%2B3CnQVftYZEdVXvTv9ZMvgFYWtBs2EVddN1pnFhZyZqqLqq3NXnAqBtW7DK5fzzMqINNgBJCB2bhoWL9eTMi8utHz1LX5xa%2B1HoQ%2BL6XlE8IOr93OtOiDIs0o9etssxJuURG6TdONznZ6aARjo%2BbC%2Fi%2FixpEjsID3A38kv2IoGOSg6s6O%2B157SBbVCpMOrJ%2FsIGOqUBvmbLT%2FXtEGNV6RK%2Bk2uF2y9IYYpXdSEs73tss9lUUx2h9Eouip96sfu3Nbs3N%2BN%2FLOOOxHHVksB7FaoDE6TtymksQV%2Bzycjm8W2%2Fx%2BgQo%2F9CsL5nN2blPd8HK4FS6wk4MjZkhYfw3kP30IfqPtTzzn6W2p3DKrdwDu2O2KzJeKsd9IO2wWvRSFjTy2IpywUqS1R4OpLLhG9DDtAztORkbpObcS8t&X-Amz-Signature=e9210af5e00d8d5089f7fba0d4ca7704d1969c800ae8c9707c562e213827e9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODXB5QU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOuTxrmx9Ani0HsMqp8wWR2fR7qEI5XJj6SoSEkFpCeAiEA31sQDO9RDx7gaso3ihZ1pmA7HZO0aFR9ohmnUKp1VIcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRzJnftmIHcAQe1eyrcA4lNTq2%2BaeN27gkqPBX0LiER2f0koQxnhpTsxYgCtriTmga3QZmIMIZ0lh8H9kSKGMsHrXgabBXkSMRwgb71KsFLn6%2BWdX5GPWJcBbQp%2BXuHiI04hRZhNXfwLOKQsGWqqUrRHO7drJsvEoAPnP9rEdjqxlNsgyYZG28oOS3kaxp5zQltPz%2F6JLfNnm1AZGNki%2BouHW%2FN0QHwCdnzyZBGA7i%2FiSgae7z%2FAMR2DAYu%2Bcyz%2BRVfhPRxAMH6uJHc1Me8Fur6Vi8iYoA54fzqdVEjLHeDZeXGaXsdRCNv7WU3Io9lLBZb7%2Bt8rNN%2F4MCURKtDxorRycfwWzV6soZQh4QtBEJIqG8nmmdKXyRM97zpnFefw88rjMH1eD3RCxr%2BKB2AxzrgbGMYVJmHhwMc0QlLSQrJuk%2BmT%2FE3ov9Uz%2FTEKQW6WWKmLrHIdqox2QOnzs857%2B3CnQVftYZEdVXvTv9ZMvgFYWtBs2EVddN1pnFhZyZqqLqq3NXnAqBtW7DK5fzzMqINNgBJCB2bhoWL9eTMi8utHz1LX5xa%2B1HoQ%2BL6XlE8IOr93OtOiDIs0o9etssxJuURG6TdONznZ6aARjo%2BbC%2Fi%2FixpEjsID3A38kv2IoGOSg6s6O%2B157SBbVCpMOrJ%2FsIGOqUBvmbLT%2FXtEGNV6RK%2Bk2uF2y9IYYpXdSEs73tss9lUUx2h9Eouip96sfu3Nbs3N%2BN%2FLOOOxHHVksB7FaoDE6TtymksQV%2Bzycjm8W2%2Fx%2BgQo%2F9CsL5nN2blPd8HK4FS6wk4MjZkhYfw3kP30IfqPtTzzn6W2p3DKrdwDu2O2KzJeKsd9IO2wWvRSFjTy2IpywUqS1R4OpLLhG9DDtAztORkbpObcS8t&X-Amz-Signature=ec1fbb9d6cd73cf4898d9745474627105f8f109795011c9cc5bf92993b6f16e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODXB5QU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOuTxrmx9Ani0HsMqp8wWR2fR7qEI5XJj6SoSEkFpCeAiEA31sQDO9RDx7gaso3ihZ1pmA7HZO0aFR9ohmnUKp1VIcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRzJnftmIHcAQe1eyrcA4lNTq2%2BaeN27gkqPBX0LiER2f0koQxnhpTsxYgCtriTmga3QZmIMIZ0lh8H9kSKGMsHrXgabBXkSMRwgb71KsFLn6%2BWdX5GPWJcBbQp%2BXuHiI04hRZhNXfwLOKQsGWqqUrRHO7drJsvEoAPnP9rEdjqxlNsgyYZG28oOS3kaxp5zQltPz%2F6JLfNnm1AZGNki%2BouHW%2FN0QHwCdnzyZBGA7i%2FiSgae7z%2FAMR2DAYu%2Bcyz%2BRVfhPRxAMH6uJHc1Me8Fur6Vi8iYoA54fzqdVEjLHeDZeXGaXsdRCNv7WU3Io9lLBZb7%2Bt8rNN%2F4MCURKtDxorRycfwWzV6soZQh4QtBEJIqG8nmmdKXyRM97zpnFefw88rjMH1eD3RCxr%2BKB2AxzrgbGMYVJmHhwMc0QlLSQrJuk%2BmT%2FE3ov9Uz%2FTEKQW6WWKmLrHIdqox2QOnzs857%2B3CnQVftYZEdVXvTv9ZMvgFYWtBs2EVddN1pnFhZyZqqLqq3NXnAqBtW7DK5fzzMqINNgBJCB2bhoWL9eTMi8utHz1LX5xa%2B1HoQ%2BL6XlE8IOr93OtOiDIs0o9etssxJuURG6TdONznZ6aARjo%2BbC%2Fi%2FixpEjsID3A38kv2IoGOSg6s6O%2B157SBbVCpMOrJ%2FsIGOqUBvmbLT%2FXtEGNV6RK%2Bk2uF2y9IYYpXdSEs73tss9lUUx2h9Eouip96sfu3Nbs3N%2BN%2FLOOOxHHVksB7FaoDE6TtymksQV%2Bzycjm8W2%2Fx%2BgQo%2F9CsL5nN2blPd8HK4FS6wk4MjZkhYfw3kP30IfqPtTzzn6W2p3DKrdwDu2O2KzJeKsd9IO2wWvRSFjTy2IpywUqS1R4OpLLhG9DDtAztORkbpObcS8t&X-Amz-Signature=16779eb6f922ed0b5642ad31001a2be5178e46dbbde515a246e53c46cd0e8837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODXB5QU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOuTxrmx9Ani0HsMqp8wWR2fR7qEI5XJj6SoSEkFpCeAiEA31sQDO9RDx7gaso3ihZ1pmA7HZO0aFR9ohmnUKp1VIcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRzJnftmIHcAQe1eyrcA4lNTq2%2BaeN27gkqPBX0LiER2f0koQxnhpTsxYgCtriTmga3QZmIMIZ0lh8H9kSKGMsHrXgabBXkSMRwgb71KsFLn6%2BWdX5GPWJcBbQp%2BXuHiI04hRZhNXfwLOKQsGWqqUrRHO7drJsvEoAPnP9rEdjqxlNsgyYZG28oOS3kaxp5zQltPz%2F6JLfNnm1AZGNki%2BouHW%2FN0QHwCdnzyZBGA7i%2FiSgae7z%2FAMR2DAYu%2Bcyz%2BRVfhPRxAMH6uJHc1Me8Fur6Vi8iYoA54fzqdVEjLHeDZeXGaXsdRCNv7WU3Io9lLBZb7%2Bt8rNN%2F4MCURKtDxorRycfwWzV6soZQh4QtBEJIqG8nmmdKXyRM97zpnFefw88rjMH1eD3RCxr%2BKB2AxzrgbGMYVJmHhwMc0QlLSQrJuk%2BmT%2FE3ov9Uz%2FTEKQW6WWKmLrHIdqox2QOnzs857%2B3CnQVftYZEdVXvTv9ZMvgFYWtBs2EVddN1pnFhZyZqqLqq3NXnAqBtW7DK5fzzMqINNgBJCB2bhoWL9eTMi8utHz1LX5xa%2B1HoQ%2BL6XlE8IOr93OtOiDIs0o9etssxJuURG6TdONznZ6aARjo%2BbC%2Fi%2FixpEjsID3A38kv2IoGOSg6s6O%2B157SBbVCpMOrJ%2FsIGOqUBvmbLT%2FXtEGNV6RK%2Bk2uF2y9IYYpXdSEs73tss9lUUx2h9Eouip96sfu3Nbs3N%2BN%2FLOOOxHHVksB7FaoDE6TtymksQV%2Bzycjm8W2%2Fx%2BgQo%2F9CsL5nN2blPd8HK4FS6wk4MjZkhYfw3kP30IfqPtTzzn6W2p3DKrdwDu2O2KzJeKsd9IO2wWvRSFjTy2IpywUqS1R4OpLLhG9DDtAztORkbpObcS8t&X-Amz-Signature=c6a4909162d47257246be614a8b91fb86903765f3a487e5269e53890cdcb9bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
