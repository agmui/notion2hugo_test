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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNITV6MO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4YASYGNL1fMe9qafJqPx64UuZNwRjNM9vDVMmwwHg8QIgP31njNC2e2BImrUcyn8riGa3EiVZmT0G%2FVR5QcT0tEAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJlbnYg5Thg531vU6CrcA0fNiiw8kYvth1nTawDOAfbrfo50jTIAm6OWNvtYVLKyuiZ0czVHxWQW4zVXpF3KcJmCa2mOfCoKVKezhPq63TtXckevvNr3ZYbwJPTI3j44qMYP1%2FhP8jpQdg7QMpR98zD38g%2Fx8QpV45ifQUsyyYqvSXfs8dvtXGZlmFU9hai1d1m42mWgoR9CdmU%2FaLaagbuQgVAhsygaGE2BtjPYUzK6fQHBdwPEo0SmfeuSo11%2Bi7xHKAXU%2BGBXBo%2FEl9mzsfZ%2FIEOhxW4Z4TKWpNwGzVjJzHT5uMAm27zLCuMvQNWa07rS2a%2FUBF%2BGZr97r3n8LH11j08ncfTbrGTSgAvLut3XSonF1NcXYDxKiFcIPU%2B8sFl65edQYQANW%2BmyvcorzG3Ce5mGFpYr%2Ft6i45yQQ3YkBbT7fPNf9g26zZNd1FrQl11DfNzbUv3N6jtnV48eXoY%2FuPxgvqGNC9D%2BD65T%2FOJuQ8yGp%2BClqEkAl3%2BGofDoG3dt9elQuYiKrub0%2BDso%2F9rCuoXXOW0BXNJNeSMaJ%2FhlryI1G6rQcYbkmI3fKPxNPNWxIpNZSxl4a1lqTyByVyMtH1g%2F1uXzG19trNV%2BdyOAAO%2BB71Gg9iagfSHpMQrgg2oBJPbN4VxkAGSwMLLum8EGOqUBHhG2n1OUxHSKIfrmUY2W14GiLNAc%2B0TlanZ7GZp%2FX6%2B%2B9V4YOCzgWBuGORlKyxKfPFUITK5YRK%2Fus2DiePnQL4HnS%2BD7otosDS1bTTQjUqU1uf1uMAkheJJfa49oJCCabGvG%2BIJ5LsLkQ51Ztv%2F2Ih4s9MIUtrO4tcdPyc3m1W7odsgQ3lnZpfQj1jMc98F8iCD%2BhHZUIBp9zMDZKDMJGcw61kCY&X-Amz-Signature=12a20f60f5af9d20b32602caa9135059e4e2143cbf9e5eb0f42acdcb9725e3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNITV6MO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4YASYGNL1fMe9qafJqPx64UuZNwRjNM9vDVMmwwHg8QIgP31njNC2e2BImrUcyn8riGa3EiVZmT0G%2FVR5QcT0tEAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJlbnYg5Thg531vU6CrcA0fNiiw8kYvth1nTawDOAfbrfo50jTIAm6OWNvtYVLKyuiZ0czVHxWQW4zVXpF3KcJmCa2mOfCoKVKezhPq63TtXckevvNr3ZYbwJPTI3j44qMYP1%2FhP8jpQdg7QMpR98zD38g%2Fx8QpV45ifQUsyyYqvSXfs8dvtXGZlmFU9hai1d1m42mWgoR9CdmU%2FaLaagbuQgVAhsygaGE2BtjPYUzK6fQHBdwPEo0SmfeuSo11%2Bi7xHKAXU%2BGBXBo%2FEl9mzsfZ%2FIEOhxW4Z4TKWpNwGzVjJzHT5uMAm27zLCuMvQNWa07rS2a%2FUBF%2BGZr97r3n8LH11j08ncfTbrGTSgAvLut3XSonF1NcXYDxKiFcIPU%2B8sFl65edQYQANW%2BmyvcorzG3Ce5mGFpYr%2Ft6i45yQQ3YkBbT7fPNf9g26zZNd1FrQl11DfNzbUv3N6jtnV48eXoY%2FuPxgvqGNC9D%2BD65T%2FOJuQ8yGp%2BClqEkAl3%2BGofDoG3dt9elQuYiKrub0%2BDso%2F9rCuoXXOW0BXNJNeSMaJ%2FhlryI1G6rQcYbkmI3fKPxNPNWxIpNZSxl4a1lqTyByVyMtH1g%2F1uXzG19trNV%2BdyOAAO%2BB71Gg9iagfSHpMQrgg2oBJPbN4VxkAGSwMLLum8EGOqUBHhG2n1OUxHSKIfrmUY2W14GiLNAc%2B0TlanZ7GZp%2FX6%2B%2B9V4YOCzgWBuGORlKyxKfPFUITK5YRK%2Fus2DiePnQL4HnS%2BD7otosDS1bTTQjUqU1uf1uMAkheJJfa49oJCCabGvG%2BIJ5LsLkQ51Ztv%2F2Ih4s9MIUtrO4tcdPyc3m1W7odsgQ3lnZpfQj1jMc98F8iCD%2BhHZUIBp9zMDZKDMJGcw61kCY&X-Amz-Signature=e8dc768d75c2a15a8572a55fd0bcfcd5c737ce69b082176b6fa68ac1044f6567&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNITV6MO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4YASYGNL1fMe9qafJqPx64UuZNwRjNM9vDVMmwwHg8QIgP31njNC2e2BImrUcyn8riGa3EiVZmT0G%2FVR5QcT0tEAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJlbnYg5Thg531vU6CrcA0fNiiw8kYvth1nTawDOAfbrfo50jTIAm6OWNvtYVLKyuiZ0czVHxWQW4zVXpF3KcJmCa2mOfCoKVKezhPq63TtXckevvNr3ZYbwJPTI3j44qMYP1%2FhP8jpQdg7QMpR98zD38g%2Fx8QpV45ifQUsyyYqvSXfs8dvtXGZlmFU9hai1d1m42mWgoR9CdmU%2FaLaagbuQgVAhsygaGE2BtjPYUzK6fQHBdwPEo0SmfeuSo11%2Bi7xHKAXU%2BGBXBo%2FEl9mzsfZ%2FIEOhxW4Z4TKWpNwGzVjJzHT5uMAm27zLCuMvQNWa07rS2a%2FUBF%2BGZr97r3n8LH11j08ncfTbrGTSgAvLut3XSonF1NcXYDxKiFcIPU%2B8sFl65edQYQANW%2BmyvcorzG3Ce5mGFpYr%2Ft6i45yQQ3YkBbT7fPNf9g26zZNd1FrQl11DfNzbUv3N6jtnV48eXoY%2FuPxgvqGNC9D%2BD65T%2FOJuQ8yGp%2BClqEkAl3%2BGofDoG3dt9elQuYiKrub0%2BDso%2F9rCuoXXOW0BXNJNeSMaJ%2FhlryI1G6rQcYbkmI3fKPxNPNWxIpNZSxl4a1lqTyByVyMtH1g%2F1uXzG19trNV%2BdyOAAO%2BB71Gg9iagfSHpMQrgg2oBJPbN4VxkAGSwMLLum8EGOqUBHhG2n1OUxHSKIfrmUY2W14GiLNAc%2B0TlanZ7GZp%2FX6%2B%2B9V4YOCzgWBuGORlKyxKfPFUITK5YRK%2Fus2DiePnQL4HnS%2BD7otosDS1bTTQjUqU1uf1uMAkheJJfa49oJCCabGvG%2BIJ5LsLkQ51Ztv%2F2Ih4s9MIUtrO4tcdPyc3m1W7odsgQ3lnZpfQj1jMc98F8iCD%2BhHZUIBp9zMDZKDMJGcw61kCY&X-Amz-Signature=ba9ddba906d4fe277ff7f0885eb91b1504d2f6ffc020e59f091a3093b0c1571e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNITV6MO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4YASYGNL1fMe9qafJqPx64UuZNwRjNM9vDVMmwwHg8QIgP31njNC2e2BImrUcyn8riGa3EiVZmT0G%2FVR5QcT0tEAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJlbnYg5Thg531vU6CrcA0fNiiw8kYvth1nTawDOAfbrfo50jTIAm6OWNvtYVLKyuiZ0czVHxWQW4zVXpF3KcJmCa2mOfCoKVKezhPq63TtXckevvNr3ZYbwJPTI3j44qMYP1%2FhP8jpQdg7QMpR98zD38g%2Fx8QpV45ifQUsyyYqvSXfs8dvtXGZlmFU9hai1d1m42mWgoR9CdmU%2FaLaagbuQgVAhsygaGE2BtjPYUzK6fQHBdwPEo0SmfeuSo11%2Bi7xHKAXU%2BGBXBo%2FEl9mzsfZ%2FIEOhxW4Z4TKWpNwGzVjJzHT5uMAm27zLCuMvQNWa07rS2a%2FUBF%2BGZr97r3n8LH11j08ncfTbrGTSgAvLut3XSonF1NcXYDxKiFcIPU%2B8sFl65edQYQANW%2BmyvcorzG3Ce5mGFpYr%2Ft6i45yQQ3YkBbT7fPNf9g26zZNd1FrQl11DfNzbUv3N6jtnV48eXoY%2FuPxgvqGNC9D%2BD65T%2FOJuQ8yGp%2BClqEkAl3%2BGofDoG3dt9elQuYiKrub0%2BDso%2F9rCuoXXOW0BXNJNeSMaJ%2FhlryI1G6rQcYbkmI3fKPxNPNWxIpNZSxl4a1lqTyByVyMtH1g%2F1uXzG19trNV%2BdyOAAO%2BB71Gg9iagfSHpMQrgg2oBJPbN4VxkAGSwMLLum8EGOqUBHhG2n1OUxHSKIfrmUY2W14GiLNAc%2B0TlanZ7GZp%2FX6%2B%2B9V4YOCzgWBuGORlKyxKfPFUITK5YRK%2Fus2DiePnQL4HnS%2BD7otosDS1bTTQjUqU1uf1uMAkheJJfa49oJCCabGvG%2BIJ5LsLkQ51Ztv%2F2Ih4s9MIUtrO4tcdPyc3m1W7odsgQ3lnZpfQj1jMc98F8iCD%2BhHZUIBp9zMDZKDMJGcw61kCY&X-Amz-Signature=18097e261c17f0a9e9a6a2042b7287857d1c2e746a20e5bcd5d2a7bf59bc44ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNITV6MO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4YASYGNL1fMe9qafJqPx64UuZNwRjNM9vDVMmwwHg8QIgP31njNC2e2BImrUcyn8riGa3EiVZmT0G%2FVR5QcT0tEAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJlbnYg5Thg531vU6CrcA0fNiiw8kYvth1nTawDOAfbrfo50jTIAm6OWNvtYVLKyuiZ0czVHxWQW4zVXpF3KcJmCa2mOfCoKVKezhPq63TtXckevvNr3ZYbwJPTI3j44qMYP1%2FhP8jpQdg7QMpR98zD38g%2Fx8QpV45ifQUsyyYqvSXfs8dvtXGZlmFU9hai1d1m42mWgoR9CdmU%2FaLaagbuQgVAhsygaGE2BtjPYUzK6fQHBdwPEo0SmfeuSo11%2Bi7xHKAXU%2BGBXBo%2FEl9mzsfZ%2FIEOhxW4Z4TKWpNwGzVjJzHT5uMAm27zLCuMvQNWa07rS2a%2FUBF%2BGZr97r3n8LH11j08ncfTbrGTSgAvLut3XSonF1NcXYDxKiFcIPU%2B8sFl65edQYQANW%2BmyvcorzG3Ce5mGFpYr%2Ft6i45yQQ3YkBbT7fPNf9g26zZNd1FrQl11DfNzbUv3N6jtnV48eXoY%2FuPxgvqGNC9D%2BD65T%2FOJuQ8yGp%2BClqEkAl3%2BGofDoG3dt9elQuYiKrub0%2BDso%2F9rCuoXXOW0BXNJNeSMaJ%2FhlryI1G6rQcYbkmI3fKPxNPNWxIpNZSxl4a1lqTyByVyMtH1g%2F1uXzG19trNV%2BdyOAAO%2BB71Gg9iagfSHpMQrgg2oBJPbN4VxkAGSwMLLum8EGOqUBHhG2n1OUxHSKIfrmUY2W14GiLNAc%2B0TlanZ7GZp%2FX6%2B%2B9V4YOCzgWBuGORlKyxKfPFUITK5YRK%2Fus2DiePnQL4HnS%2BD7otosDS1bTTQjUqU1uf1uMAkheJJfa49oJCCabGvG%2BIJ5LsLkQ51Ztv%2F2Ih4s9MIUtrO4tcdPyc3m1W7odsgQ3lnZpfQj1jMc98F8iCD%2BhHZUIBp9zMDZKDMJGcw61kCY&X-Amz-Signature=af172db55d884f214e3d0270c28ba7743976b16717fb21478cc872b14a8f69ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNITV6MO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4YASYGNL1fMe9qafJqPx64UuZNwRjNM9vDVMmwwHg8QIgP31njNC2e2BImrUcyn8riGa3EiVZmT0G%2FVR5QcT0tEAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJlbnYg5Thg531vU6CrcA0fNiiw8kYvth1nTawDOAfbrfo50jTIAm6OWNvtYVLKyuiZ0czVHxWQW4zVXpF3KcJmCa2mOfCoKVKezhPq63TtXckevvNr3ZYbwJPTI3j44qMYP1%2FhP8jpQdg7QMpR98zD38g%2Fx8QpV45ifQUsyyYqvSXfs8dvtXGZlmFU9hai1d1m42mWgoR9CdmU%2FaLaagbuQgVAhsygaGE2BtjPYUzK6fQHBdwPEo0SmfeuSo11%2Bi7xHKAXU%2BGBXBo%2FEl9mzsfZ%2FIEOhxW4Z4TKWpNwGzVjJzHT5uMAm27zLCuMvQNWa07rS2a%2FUBF%2BGZr97r3n8LH11j08ncfTbrGTSgAvLut3XSonF1NcXYDxKiFcIPU%2B8sFl65edQYQANW%2BmyvcorzG3Ce5mGFpYr%2Ft6i45yQQ3YkBbT7fPNf9g26zZNd1FrQl11DfNzbUv3N6jtnV48eXoY%2FuPxgvqGNC9D%2BD65T%2FOJuQ8yGp%2BClqEkAl3%2BGofDoG3dt9elQuYiKrub0%2BDso%2F9rCuoXXOW0BXNJNeSMaJ%2FhlryI1G6rQcYbkmI3fKPxNPNWxIpNZSxl4a1lqTyByVyMtH1g%2F1uXzG19trNV%2BdyOAAO%2BB71Gg9iagfSHpMQrgg2oBJPbN4VxkAGSwMLLum8EGOqUBHhG2n1OUxHSKIfrmUY2W14GiLNAc%2B0TlanZ7GZp%2FX6%2B%2B9V4YOCzgWBuGORlKyxKfPFUITK5YRK%2Fus2DiePnQL4HnS%2BD7otosDS1bTTQjUqU1uf1uMAkheJJfa49oJCCabGvG%2BIJ5LsLkQ51Ztv%2F2Ih4s9MIUtrO4tcdPyc3m1W7odsgQ3lnZpfQj1jMc98F8iCD%2BhHZUIBp9zMDZKDMJGcw61kCY&X-Amz-Signature=9cb7420dfd3acd3b459578daafd8a1fb89fc7d262082dbb24230dbaf581cb204&X-Amz-SignedHeaders=host&x-id=GetObject)
