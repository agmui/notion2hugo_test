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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYTBLZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf1LtJYs4kV3UoY1fI7SWkLrLjZCnAX4pnl8Z5NX9KhgIhALAoKAuJ228dnrfwviySFNj%2FvimWnHQRwTWGylUHPUugKv8DCBAQABoMNjM3NDIzMTgzODA1Igzlmoa35aBuhdl8jWwq3AM7Zzi5iRSxEeB8%2BuDkQtLB9SeA3hA33VAko7Mzf3SWoPC1EnbY37R%2BB5FBqzmAiqdNEtqoxCjyPmfILL3%2FZKKIP8L7hU2oPJLQmfhy81Nq8a5NraFzEfDfwNRv99ojFdy%2BvB8syLKCRizaSwsyit5GwoxCdYmPtQeRkBm1f6hyotb1TWR0%2FNC6%2BWcj2DMqo1D1WMdas908Yib7cHxG5jAuR9Q7nT8bj6Qr9DY2S8Se0ZDTUbwiTng2R6RZ7jo18YU6dg5KcDTcVzyGg9vNfnb8kAbzmWIjjM7HqxlguKKVRHjqdw9p8KzdnlFL71c7WDYFqitndPKNptKZ0%2F2cFoJQc1lbqa9BPrmwJSwhCkW1cOcHPEyXhmnSo6y%2B%2BIIV6spapNo5OkWF397YEwZTAgkU7oZ876TXaLd%2F56OQTX69Z1fp1L7JMCru1QoU9RqQqfjqWwPK78N0R3UAJxe%2BcDQ1UxFGgp5ikXZWS2sZA5WJYVMAPIs3HL8czLZCANTtyT7%2Fe2aqfEe6yL8WtffV%2BvgXeaRYcWEWQHnxb8iuG4C0rgUnFvEZNmkNsYAYhE864tWQLc%2B%2Fv7mC4oaTJwqaEy1bBgFC5U3ooFdw%2F1G08UXUcLta1L6RUpWbx2PCNzCcqba9BjqkAe3w8SzrPMuAnkhZgsJKwxuRTrr0IcBwBNMXI%2FrLYUVK%2FgEFqvB2yS%2FjWS%2FbDu%2BMk2%2BKdyYsJmFVm97P34eKjKuQuvuh9zUyiJNpPVWpf%2B2im0EecsN5HBHxjIl0sJ%2BphLnHGk2gScYmcxMQ5uCq%2FSNQEgqPPPc5PG09VV%2B2dGN9DR4%2FchKmcost4Cbs6YufJixul4FdASMHichvn%2B6bFRwce4cd&X-Amz-Signature=6772b6789077d8f8a8cdfcdc1e4b67da70cbe2558602eb41be67b80e80a6986a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYTBLZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf1LtJYs4kV3UoY1fI7SWkLrLjZCnAX4pnl8Z5NX9KhgIhALAoKAuJ228dnrfwviySFNj%2FvimWnHQRwTWGylUHPUugKv8DCBAQABoMNjM3NDIzMTgzODA1Igzlmoa35aBuhdl8jWwq3AM7Zzi5iRSxEeB8%2BuDkQtLB9SeA3hA33VAko7Mzf3SWoPC1EnbY37R%2BB5FBqzmAiqdNEtqoxCjyPmfILL3%2FZKKIP8L7hU2oPJLQmfhy81Nq8a5NraFzEfDfwNRv99ojFdy%2BvB8syLKCRizaSwsyit5GwoxCdYmPtQeRkBm1f6hyotb1TWR0%2FNC6%2BWcj2DMqo1D1WMdas908Yib7cHxG5jAuR9Q7nT8bj6Qr9DY2S8Se0ZDTUbwiTng2R6RZ7jo18YU6dg5KcDTcVzyGg9vNfnb8kAbzmWIjjM7HqxlguKKVRHjqdw9p8KzdnlFL71c7WDYFqitndPKNptKZ0%2F2cFoJQc1lbqa9BPrmwJSwhCkW1cOcHPEyXhmnSo6y%2B%2BIIV6spapNo5OkWF397YEwZTAgkU7oZ876TXaLd%2F56OQTX69Z1fp1L7JMCru1QoU9RqQqfjqWwPK78N0R3UAJxe%2BcDQ1UxFGgp5ikXZWS2sZA5WJYVMAPIs3HL8czLZCANTtyT7%2Fe2aqfEe6yL8WtffV%2BvgXeaRYcWEWQHnxb8iuG4C0rgUnFvEZNmkNsYAYhE864tWQLc%2B%2Fv7mC4oaTJwqaEy1bBgFC5U3ooFdw%2F1G08UXUcLta1L6RUpWbx2PCNzCcqba9BjqkAe3w8SzrPMuAnkhZgsJKwxuRTrr0IcBwBNMXI%2FrLYUVK%2FgEFqvB2yS%2FjWS%2FbDu%2BMk2%2BKdyYsJmFVm97P34eKjKuQuvuh9zUyiJNpPVWpf%2B2im0EecsN5HBHxjIl0sJ%2BphLnHGk2gScYmcxMQ5uCq%2FSNQEgqPPPc5PG09VV%2B2dGN9DR4%2FchKmcost4Cbs6YufJixul4FdASMHichvn%2B6bFRwce4cd&X-Amz-Signature=bbeb1c352010f9b1b5cf9c07dc573e1b79702f8e46c86d7f7a158ae52ab34118&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYTBLZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf1LtJYs4kV3UoY1fI7SWkLrLjZCnAX4pnl8Z5NX9KhgIhALAoKAuJ228dnrfwviySFNj%2FvimWnHQRwTWGylUHPUugKv8DCBAQABoMNjM3NDIzMTgzODA1Igzlmoa35aBuhdl8jWwq3AM7Zzi5iRSxEeB8%2BuDkQtLB9SeA3hA33VAko7Mzf3SWoPC1EnbY37R%2BB5FBqzmAiqdNEtqoxCjyPmfILL3%2FZKKIP8L7hU2oPJLQmfhy81Nq8a5NraFzEfDfwNRv99ojFdy%2BvB8syLKCRizaSwsyit5GwoxCdYmPtQeRkBm1f6hyotb1TWR0%2FNC6%2BWcj2DMqo1D1WMdas908Yib7cHxG5jAuR9Q7nT8bj6Qr9DY2S8Se0ZDTUbwiTng2R6RZ7jo18YU6dg5KcDTcVzyGg9vNfnb8kAbzmWIjjM7HqxlguKKVRHjqdw9p8KzdnlFL71c7WDYFqitndPKNptKZ0%2F2cFoJQc1lbqa9BPrmwJSwhCkW1cOcHPEyXhmnSo6y%2B%2BIIV6spapNo5OkWF397YEwZTAgkU7oZ876TXaLd%2F56OQTX69Z1fp1L7JMCru1QoU9RqQqfjqWwPK78N0R3UAJxe%2BcDQ1UxFGgp5ikXZWS2sZA5WJYVMAPIs3HL8czLZCANTtyT7%2Fe2aqfEe6yL8WtffV%2BvgXeaRYcWEWQHnxb8iuG4C0rgUnFvEZNmkNsYAYhE864tWQLc%2B%2Fv7mC4oaTJwqaEy1bBgFC5U3ooFdw%2F1G08UXUcLta1L6RUpWbx2PCNzCcqba9BjqkAe3w8SzrPMuAnkhZgsJKwxuRTrr0IcBwBNMXI%2FrLYUVK%2FgEFqvB2yS%2FjWS%2FbDu%2BMk2%2BKdyYsJmFVm97P34eKjKuQuvuh9zUyiJNpPVWpf%2B2im0EecsN5HBHxjIl0sJ%2BphLnHGk2gScYmcxMQ5uCq%2FSNQEgqPPPc5PG09VV%2B2dGN9DR4%2FchKmcost4Cbs6YufJixul4FdASMHichvn%2B6bFRwce4cd&X-Amz-Signature=8d45f2bd75ba0e44b2e3caf53952c42f04608764ec30c007b7d4ed1bfa2480a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYTBLZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf1LtJYs4kV3UoY1fI7SWkLrLjZCnAX4pnl8Z5NX9KhgIhALAoKAuJ228dnrfwviySFNj%2FvimWnHQRwTWGylUHPUugKv8DCBAQABoMNjM3NDIzMTgzODA1Igzlmoa35aBuhdl8jWwq3AM7Zzi5iRSxEeB8%2BuDkQtLB9SeA3hA33VAko7Mzf3SWoPC1EnbY37R%2BB5FBqzmAiqdNEtqoxCjyPmfILL3%2FZKKIP8L7hU2oPJLQmfhy81Nq8a5NraFzEfDfwNRv99ojFdy%2BvB8syLKCRizaSwsyit5GwoxCdYmPtQeRkBm1f6hyotb1TWR0%2FNC6%2BWcj2DMqo1D1WMdas908Yib7cHxG5jAuR9Q7nT8bj6Qr9DY2S8Se0ZDTUbwiTng2R6RZ7jo18YU6dg5KcDTcVzyGg9vNfnb8kAbzmWIjjM7HqxlguKKVRHjqdw9p8KzdnlFL71c7WDYFqitndPKNptKZ0%2F2cFoJQc1lbqa9BPrmwJSwhCkW1cOcHPEyXhmnSo6y%2B%2BIIV6spapNo5OkWF397YEwZTAgkU7oZ876TXaLd%2F56OQTX69Z1fp1L7JMCru1QoU9RqQqfjqWwPK78N0R3UAJxe%2BcDQ1UxFGgp5ikXZWS2sZA5WJYVMAPIs3HL8czLZCANTtyT7%2Fe2aqfEe6yL8WtffV%2BvgXeaRYcWEWQHnxb8iuG4C0rgUnFvEZNmkNsYAYhE864tWQLc%2B%2Fv7mC4oaTJwqaEy1bBgFC5U3ooFdw%2F1G08UXUcLta1L6RUpWbx2PCNzCcqba9BjqkAe3w8SzrPMuAnkhZgsJKwxuRTrr0IcBwBNMXI%2FrLYUVK%2FgEFqvB2yS%2FjWS%2FbDu%2BMk2%2BKdyYsJmFVm97P34eKjKuQuvuh9zUyiJNpPVWpf%2B2im0EecsN5HBHxjIl0sJ%2BphLnHGk2gScYmcxMQ5uCq%2FSNQEgqPPPc5PG09VV%2B2dGN9DR4%2FchKmcost4Cbs6YufJixul4FdASMHichvn%2B6bFRwce4cd&X-Amz-Signature=9e9392afef998180e4b58c710401854bc888a863f6064b78ba219c2e61f611a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYTBLZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf1LtJYs4kV3UoY1fI7SWkLrLjZCnAX4pnl8Z5NX9KhgIhALAoKAuJ228dnrfwviySFNj%2FvimWnHQRwTWGylUHPUugKv8DCBAQABoMNjM3NDIzMTgzODA1Igzlmoa35aBuhdl8jWwq3AM7Zzi5iRSxEeB8%2BuDkQtLB9SeA3hA33VAko7Mzf3SWoPC1EnbY37R%2BB5FBqzmAiqdNEtqoxCjyPmfILL3%2FZKKIP8L7hU2oPJLQmfhy81Nq8a5NraFzEfDfwNRv99ojFdy%2BvB8syLKCRizaSwsyit5GwoxCdYmPtQeRkBm1f6hyotb1TWR0%2FNC6%2BWcj2DMqo1D1WMdas908Yib7cHxG5jAuR9Q7nT8bj6Qr9DY2S8Se0ZDTUbwiTng2R6RZ7jo18YU6dg5KcDTcVzyGg9vNfnb8kAbzmWIjjM7HqxlguKKVRHjqdw9p8KzdnlFL71c7WDYFqitndPKNptKZ0%2F2cFoJQc1lbqa9BPrmwJSwhCkW1cOcHPEyXhmnSo6y%2B%2BIIV6spapNo5OkWF397YEwZTAgkU7oZ876TXaLd%2F56OQTX69Z1fp1L7JMCru1QoU9RqQqfjqWwPK78N0R3UAJxe%2BcDQ1UxFGgp5ikXZWS2sZA5WJYVMAPIs3HL8czLZCANTtyT7%2Fe2aqfEe6yL8WtffV%2BvgXeaRYcWEWQHnxb8iuG4C0rgUnFvEZNmkNsYAYhE864tWQLc%2B%2Fv7mC4oaTJwqaEy1bBgFC5U3ooFdw%2F1G08UXUcLta1L6RUpWbx2PCNzCcqba9BjqkAe3w8SzrPMuAnkhZgsJKwxuRTrr0IcBwBNMXI%2FrLYUVK%2FgEFqvB2yS%2FjWS%2FbDu%2BMk2%2BKdyYsJmFVm97P34eKjKuQuvuh9zUyiJNpPVWpf%2B2im0EecsN5HBHxjIl0sJ%2BphLnHGk2gScYmcxMQ5uCq%2FSNQEgqPPPc5PG09VV%2B2dGN9DR4%2FchKmcost4Cbs6YufJixul4FdASMHichvn%2B6bFRwce4cd&X-Amz-Signature=6da9639e14d1256481d7715287a4949f23ebee0532c26129cc5d4d80f27eb3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYTBLZS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf1LtJYs4kV3UoY1fI7SWkLrLjZCnAX4pnl8Z5NX9KhgIhALAoKAuJ228dnrfwviySFNj%2FvimWnHQRwTWGylUHPUugKv8DCBAQABoMNjM3NDIzMTgzODA1Igzlmoa35aBuhdl8jWwq3AM7Zzi5iRSxEeB8%2BuDkQtLB9SeA3hA33VAko7Mzf3SWoPC1EnbY37R%2BB5FBqzmAiqdNEtqoxCjyPmfILL3%2FZKKIP8L7hU2oPJLQmfhy81Nq8a5NraFzEfDfwNRv99ojFdy%2BvB8syLKCRizaSwsyit5GwoxCdYmPtQeRkBm1f6hyotb1TWR0%2FNC6%2BWcj2DMqo1D1WMdas908Yib7cHxG5jAuR9Q7nT8bj6Qr9DY2S8Se0ZDTUbwiTng2R6RZ7jo18YU6dg5KcDTcVzyGg9vNfnb8kAbzmWIjjM7HqxlguKKVRHjqdw9p8KzdnlFL71c7WDYFqitndPKNptKZ0%2F2cFoJQc1lbqa9BPrmwJSwhCkW1cOcHPEyXhmnSo6y%2B%2BIIV6spapNo5OkWF397YEwZTAgkU7oZ876TXaLd%2F56OQTX69Z1fp1L7JMCru1QoU9RqQqfjqWwPK78N0R3UAJxe%2BcDQ1UxFGgp5ikXZWS2sZA5WJYVMAPIs3HL8czLZCANTtyT7%2Fe2aqfEe6yL8WtffV%2BvgXeaRYcWEWQHnxb8iuG4C0rgUnFvEZNmkNsYAYhE864tWQLc%2B%2Fv7mC4oaTJwqaEy1bBgFC5U3ooFdw%2F1G08UXUcLta1L6RUpWbx2PCNzCcqba9BjqkAe3w8SzrPMuAnkhZgsJKwxuRTrr0IcBwBNMXI%2FrLYUVK%2FgEFqvB2yS%2FjWS%2FbDu%2BMk2%2BKdyYsJmFVm97P34eKjKuQuvuh9zUyiJNpPVWpf%2B2im0EecsN5HBHxjIl0sJ%2BphLnHGk2gScYmcxMQ5uCq%2FSNQEgqPPPc5PG09VV%2B2dGN9DR4%2FchKmcost4Cbs6YufJixul4FdASMHichvn%2B6bFRwce4cd&X-Amz-Signature=f08136353bebd8357a61fb169518794e92894a379a89f7d22504c9c0495f2147&X-Amz-SignedHeaders=host&x-id=GetObject)
