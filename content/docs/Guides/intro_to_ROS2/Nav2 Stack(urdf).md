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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YSLICX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2MQNRrHLSZ9pJvE3irbO1g054qSz9AKlw16X4tq2dQIhANn6%2FFYbpwvH6fEC3WPk2b2N1F1OJWyWEiEbyHlCxp7SKv8DCGMQABoMNjM3NDIzMTgzODA1Igy3EsolA6AXOBbB6XIq3APGBcCbvMGD1Ye0YEq4qXBs0dwpoLPmdhQDeIUvChlbDsx0dMJGvkpG03PhyiNT%2FXBGL%2BcOYvK7auvNMFMx9wUap71shbcNe%2Bz8rV0l1X%2F2rBcJhzKua0t4VMzoq1TqQY8VReq0s%2BcD5Tb2lDG7YCI%2BfW1i%2Fr4XBtNgVcAH0B9m6%2BDL9makjU478w5RctW80FBFbomnlEIpn9LkyRblxfINZm30scJ7ArJggcBLS%2FnUOh7A%2B2IIUMF7eIj35uLc6FBPcUfbmNXX%2BA%2F3HVmWbYz5oFWs%2BSX4WLvIjSht8rIlW%2BtBZqXcpBMTSu9XKvFYIrP5zLFMq2eRMQsJSP7r8%2Bx%2B%2FIgHUdbuHyTiPGYgWV9OE72T7abDeQonw1swG%2B3J3hl%2Bj%2BAlCfixPuA05m4IaArf%2Fh88HaVCUXjiDOZgc%2Bif9Za6%2BlnUhMbRnrAIyCbi90U1crQ9%2BWMxg60mUbKtHIE9Y0GKZrKytFkCRp%2FhI9TazbHa6E83VY%2F2HmDhbxGt1VLKqW2AKcVXr%2FBAfzwlNdKNMjLMO6rMO8M2SW1%2FoTbwf%2FNPEFhicLjHK0%2BX1t%2FA4zlqOpc0fLuh7VNv3wApr5egEOaijzDvghFZkj7BMjMcgvPseEHmBpQBTD%2FVCTCl1ozCBjqkAcV15Vfvad4SQJ1uSIvBDTfhfUBKTXqk7wxice0cRLa%2Bl5QCLwEANd%2FL8KEdyl4Po70T2QqNY43gv4rCkHJGQJI8VCQHuHHiazPRf9FZs1ni8vu7pSRXIrMYGnkj282nuX58hA3mo%2FNqizTM9x3UdGKDBx8eTtnJsPgmTPaXf%2FCtiIC9x0nfIilfmHB0vcxqHwhcvefkyE3xXSe4z4%2BgUwkOzBhY&X-Amz-Signature=e71968d25dd8bf3dcff115e9eaabd79e7a1af9f71b03cc4052f1567d8c4ab6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YSLICX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2MQNRrHLSZ9pJvE3irbO1g054qSz9AKlw16X4tq2dQIhANn6%2FFYbpwvH6fEC3WPk2b2N1F1OJWyWEiEbyHlCxp7SKv8DCGMQABoMNjM3NDIzMTgzODA1Igy3EsolA6AXOBbB6XIq3APGBcCbvMGD1Ye0YEq4qXBs0dwpoLPmdhQDeIUvChlbDsx0dMJGvkpG03PhyiNT%2FXBGL%2BcOYvK7auvNMFMx9wUap71shbcNe%2Bz8rV0l1X%2F2rBcJhzKua0t4VMzoq1TqQY8VReq0s%2BcD5Tb2lDG7YCI%2BfW1i%2Fr4XBtNgVcAH0B9m6%2BDL9makjU478w5RctW80FBFbomnlEIpn9LkyRblxfINZm30scJ7ArJggcBLS%2FnUOh7A%2B2IIUMF7eIj35uLc6FBPcUfbmNXX%2BA%2F3HVmWbYz5oFWs%2BSX4WLvIjSht8rIlW%2BtBZqXcpBMTSu9XKvFYIrP5zLFMq2eRMQsJSP7r8%2Bx%2B%2FIgHUdbuHyTiPGYgWV9OE72T7abDeQonw1swG%2B3J3hl%2Bj%2BAlCfixPuA05m4IaArf%2Fh88HaVCUXjiDOZgc%2Bif9Za6%2BlnUhMbRnrAIyCbi90U1crQ9%2BWMxg60mUbKtHIE9Y0GKZrKytFkCRp%2FhI9TazbHa6E83VY%2F2HmDhbxGt1VLKqW2AKcVXr%2FBAfzwlNdKNMjLMO6rMO8M2SW1%2FoTbwf%2FNPEFhicLjHK0%2BX1t%2FA4zlqOpc0fLuh7VNv3wApr5egEOaijzDvghFZkj7BMjMcgvPseEHmBpQBTD%2FVCTCl1ozCBjqkAcV15Vfvad4SQJ1uSIvBDTfhfUBKTXqk7wxice0cRLa%2Bl5QCLwEANd%2FL8KEdyl4Po70T2QqNY43gv4rCkHJGQJI8VCQHuHHiazPRf9FZs1ni8vu7pSRXIrMYGnkj282nuX58hA3mo%2FNqizTM9x3UdGKDBx8eTtnJsPgmTPaXf%2FCtiIC9x0nfIilfmHB0vcxqHwhcvefkyE3xXSe4z4%2BgUwkOzBhY&X-Amz-Signature=911c3899debd023a91dd036cdab1a6824f44fa2b5f16545391ec86f99baf34c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YSLICX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2MQNRrHLSZ9pJvE3irbO1g054qSz9AKlw16X4tq2dQIhANn6%2FFYbpwvH6fEC3WPk2b2N1F1OJWyWEiEbyHlCxp7SKv8DCGMQABoMNjM3NDIzMTgzODA1Igy3EsolA6AXOBbB6XIq3APGBcCbvMGD1Ye0YEq4qXBs0dwpoLPmdhQDeIUvChlbDsx0dMJGvkpG03PhyiNT%2FXBGL%2BcOYvK7auvNMFMx9wUap71shbcNe%2Bz8rV0l1X%2F2rBcJhzKua0t4VMzoq1TqQY8VReq0s%2BcD5Tb2lDG7YCI%2BfW1i%2Fr4XBtNgVcAH0B9m6%2BDL9makjU478w5RctW80FBFbomnlEIpn9LkyRblxfINZm30scJ7ArJggcBLS%2FnUOh7A%2B2IIUMF7eIj35uLc6FBPcUfbmNXX%2BA%2F3HVmWbYz5oFWs%2BSX4WLvIjSht8rIlW%2BtBZqXcpBMTSu9XKvFYIrP5zLFMq2eRMQsJSP7r8%2Bx%2B%2FIgHUdbuHyTiPGYgWV9OE72T7abDeQonw1swG%2B3J3hl%2Bj%2BAlCfixPuA05m4IaArf%2Fh88HaVCUXjiDOZgc%2Bif9Za6%2BlnUhMbRnrAIyCbi90U1crQ9%2BWMxg60mUbKtHIE9Y0GKZrKytFkCRp%2FhI9TazbHa6E83VY%2F2HmDhbxGt1VLKqW2AKcVXr%2FBAfzwlNdKNMjLMO6rMO8M2SW1%2FoTbwf%2FNPEFhicLjHK0%2BX1t%2FA4zlqOpc0fLuh7VNv3wApr5egEOaijzDvghFZkj7BMjMcgvPseEHmBpQBTD%2FVCTCl1ozCBjqkAcV15Vfvad4SQJ1uSIvBDTfhfUBKTXqk7wxice0cRLa%2Bl5QCLwEANd%2FL8KEdyl4Po70T2QqNY43gv4rCkHJGQJI8VCQHuHHiazPRf9FZs1ni8vu7pSRXIrMYGnkj282nuX58hA3mo%2FNqizTM9x3UdGKDBx8eTtnJsPgmTPaXf%2FCtiIC9x0nfIilfmHB0vcxqHwhcvefkyE3xXSe4z4%2BgUwkOzBhY&X-Amz-Signature=8ed53f78a88a2eba00f81514f0ef866f92e7eccac32872ba385da7b2136299df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YSLICX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2MQNRrHLSZ9pJvE3irbO1g054qSz9AKlw16X4tq2dQIhANn6%2FFYbpwvH6fEC3WPk2b2N1F1OJWyWEiEbyHlCxp7SKv8DCGMQABoMNjM3NDIzMTgzODA1Igy3EsolA6AXOBbB6XIq3APGBcCbvMGD1Ye0YEq4qXBs0dwpoLPmdhQDeIUvChlbDsx0dMJGvkpG03PhyiNT%2FXBGL%2BcOYvK7auvNMFMx9wUap71shbcNe%2Bz8rV0l1X%2F2rBcJhzKua0t4VMzoq1TqQY8VReq0s%2BcD5Tb2lDG7YCI%2BfW1i%2Fr4XBtNgVcAH0B9m6%2BDL9makjU478w5RctW80FBFbomnlEIpn9LkyRblxfINZm30scJ7ArJggcBLS%2FnUOh7A%2B2IIUMF7eIj35uLc6FBPcUfbmNXX%2BA%2F3HVmWbYz5oFWs%2BSX4WLvIjSht8rIlW%2BtBZqXcpBMTSu9XKvFYIrP5zLFMq2eRMQsJSP7r8%2Bx%2B%2FIgHUdbuHyTiPGYgWV9OE72T7abDeQonw1swG%2B3J3hl%2Bj%2BAlCfixPuA05m4IaArf%2Fh88HaVCUXjiDOZgc%2Bif9Za6%2BlnUhMbRnrAIyCbi90U1crQ9%2BWMxg60mUbKtHIE9Y0GKZrKytFkCRp%2FhI9TazbHa6E83VY%2F2HmDhbxGt1VLKqW2AKcVXr%2FBAfzwlNdKNMjLMO6rMO8M2SW1%2FoTbwf%2FNPEFhicLjHK0%2BX1t%2FA4zlqOpc0fLuh7VNv3wApr5egEOaijzDvghFZkj7BMjMcgvPseEHmBpQBTD%2FVCTCl1ozCBjqkAcV15Vfvad4SQJ1uSIvBDTfhfUBKTXqk7wxice0cRLa%2Bl5QCLwEANd%2FL8KEdyl4Po70T2QqNY43gv4rCkHJGQJI8VCQHuHHiazPRf9FZs1ni8vu7pSRXIrMYGnkj282nuX58hA3mo%2FNqizTM9x3UdGKDBx8eTtnJsPgmTPaXf%2FCtiIC9x0nfIilfmHB0vcxqHwhcvefkyE3xXSe4z4%2BgUwkOzBhY&X-Amz-Signature=d915e310bf199f4384d441c67ec59ce37aa4c8e647f7e073a269dcb03a4f36be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YSLICX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2MQNRrHLSZ9pJvE3irbO1g054qSz9AKlw16X4tq2dQIhANn6%2FFYbpwvH6fEC3WPk2b2N1F1OJWyWEiEbyHlCxp7SKv8DCGMQABoMNjM3NDIzMTgzODA1Igy3EsolA6AXOBbB6XIq3APGBcCbvMGD1Ye0YEq4qXBs0dwpoLPmdhQDeIUvChlbDsx0dMJGvkpG03PhyiNT%2FXBGL%2BcOYvK7auvNMFMx9wUap71shbcNe%2Bz8rV0l1X%2F2rBcJhzKua0t4VMzoq1TqQY8VReq0s%2BcD5Tb2lDG7YCI%2BfW1i%2Fr4XBtNgVcAH0B9m6%2BDL9makjU478w5RctW80FBFbomnlEIpn9LkyRblxfINZm30scJ7ArJggcBLS%2FnUOh7A%2B2IIUMF7eIj35uLc6FBPcUfbmNXX%2BA%2F3HVmWbYz5oFWs%2BSX4WLvIjSht8rIlW%2BtBZqXcpBMTSu9XKvFYIrP5zLFMq2eRMQsJSP7r8%2Bx%2B%2FIgHUdbuHyTiPGYgWV9OE72T7abDeQonw1swG%2B3J3hl%2Bj%2BAlCfixPuA05m4IaArf%2Fh88HaVCUXjiDOZgc%2Bif9Za6%2BlnUhMbRnrAIyCbi90U1crQ9%2BWMxg60mUbKtHIE9Y0GKZrKytFkCRp%2FhI9TazbHa6E83VY%2F2HmDhbxGt1VLKqW2AKcVXr%2FBAfzwlNdKNMjLMO6rMO8M2SW1%2FoTbwf%2FNPEFhicLjHK0%2BX1t%2FA4zlqOpc0fLuh7VNv3wApr5egEOaijzDvghFZkj7BMjMcgvPseEHmBpQBTD%2FVCTCl1ozCBjqkAcV15Vfvad4SQJ1uSIvBDTfhfUBKTXqk7wxice0cRLa%2Bl5QCLwEANd%2FL8KEdyl4Po70T2QqNY43gv4rCkHJGQJI8VCQHuHHiazPRf9FZs1ni8vu7pSRXIrMYGnkj282nuX58hA3mo%2FNqizTM9x3UdGKDBx8eTtnJsPgmTPaXf%2FCtiIC9x0nfIilfmHB0vcxqHwhcvefkyE3xXSe4z4%2BgUwkOzBhY&X-Amz-Signature=c6ba9b881f87c48f2d6b295a02f53800f6faac7f14d1f5a13d8e1181b3cb76cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YSLICX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2MQNRrHLSZ9pJvE3irbO1g054qSz9AKlw16X4tq2dQIhANn6%2FFYbpwvH6fEC3WPk2b2N1F1OJWyWEiEbyHlCxp7SKv8DCGMQABoMNjM3NDIzMTgzODA1Igy3EsolA6AXOBbB6XIq3APGBcCbvMGD1Ye0YEq4qXBs0dwpoLPmdhQDeIUvChlbDsx0dMJGvkpG03PhyiNT%2FXBGL%2BcOYvK7auvNMFMx9wUap71shbcNe%2Bz8rV0l1X%2F2rBcJhzKua0t4VMzoq1TqQY8VReq0s%2BcD5Tb2lDG7YCI%2BfW1i%2Fr4XBtNgVcAH0B9m6%2BDL9makjU478w5RctW80FBFbomnlEIpn9LkyRblxfINZm30scJ7ArJggcBLS%2FnUOh7A%2B2IIUMF7eIj35uLc6FBPcUfbmNXX%2BA%2F3HVmWbYz5oFWs%2BSX4WLvIjSht8rIlW%2BtBZqXcpBMTSu9XKvFYIrP5zLFMq2eRMQsJSP7r8%2Bx%2B%2FIgHUdbuHyTiPGYgWV9OE72T7abDeQonw1swG%2B3J3hl%2Bj%2BAlCfixPuA05m4IaArf%2Fh88HaVCUXjiDOZgc%2Bif9Za6%2BlnUhMbRnrAIyCbi90U1crQ9%2BWMxg60mUbKtHIE9Y0GKZrKytFkCRp%2FhI9TazbHa6E83VY%2F2HmDhbxGt1VLKqW2AKcVXr%2FBAfzwlNdKNMjLMO6rMO8M2SW1%2FoTbwf%2FNPEFhicLjHK0%2BX1t%2FA4zlqOpc0fLuh7VNv3wApr5egEOaijzDvghFZkj7BMjMcgvPseEHmBpQBTD%2FVCTCl1ozCBjqkAcV15Vfvad4SQJ1uSIvBDTfhfUBKTXqk7wxice0cRLa%2Bl5QCLwEANd%2FL8KEdyl4Po70T2QqNY43gv4rCkHJGQJI8VCQHuHHiazPRf9FZs1ni8vu7pSRXIrMYGnkj282nuX58hA3mo%2FNqizTM9x3UdGKDBx8eTtnJsPgmTPaXf%2FCtiIC9x0nfIilfmHB0vcxqHwhcvefkyE3xXSe4z4%2BgUwkOzBhY&X-Amz-Signature=5d2efddf68e2fca01b7d5fdd8a3616a3c79ed181f7d3c4d71e30122b3465ff85&X-Amz-SignedHeaders=host&x-id=GetObject)
