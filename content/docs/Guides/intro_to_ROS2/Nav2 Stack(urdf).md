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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQD32WU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lQmqiK%2BpbznNwTi9eW51Az%2FGZy3NWLma6yemxcay1AIgIFP9Phjc6CGQm2RiQhXvTGJlYhTT8%2FizSo1eTMdkjb8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvtHpfLfN9WpSzp2ircA9v5t70KYAzY4UxyQIiXyp7fbZ%2FILq%2FrmseO99B9DVbCpCHJ4Nhp9g5eE3G0pU72Gx5EmyKSlICRXUuonv8w%2FHhD%2FcpgPpJ5kuRzZpv670B93F2e1EhIfuzAGC%2BQrJkzc7DFJXxv%2FwUFbkfS3utqgsGZv5%2BiYXHpgCvzuO2jMZRTMw23Jq%2BUPPVhor%2BfMkHopnVvJYBM3%2Bm2YI%2B7QjpLW4VAEIwuEURzDiaWdtj4bsOxEFy9mSdR7Rs4CbWH%2FajB20VWQYAGKtVb%2BYDdZT1zxg6iF1d6D6IoVXozq9ON2ISWLPCAqfGv4bwyE0lOf0lUHiLfYgGrYAvxaF%2FeynpbQgMEod5iUHy73eiiojYN0MgEVbO9QbBlmrtDxZFZR9FKlZDLX6ktxD38GfqGqGaz41nWdnl02daNcDs%2B%2BpDi%2BQMzv%2BG0PrAXIYmAP1%2FzPidTuTWYHUTz0vKTLcaYNN0UfuPaXgvwSF4%2BctgGig7TVqJt2%2BTfbtzzbTNkUuRvaoeppKaU2jVJTwFwGxHKHXOl4XqqnUx49K1atxk73OCX5MHMk0xxU8j9OxSJhJAFHw3%2Be7kS6HClOxc098jQmgZ89DjM1B5MH%2FxXDgPFIqqaNa%2F0TcLYnaLnpze76l5PMI6mtMMGOqUBM8N9EUQLtcPaPWDsBjU5FSJTI9PSdkXKR7hCn1xKLCsiDdNPCHsfThnP%2BehioO9nlJOtAi6X%2BfMFSyaaey8YigHd1DIs3lsyW%2F9ryLXEBIByaoMiGzfVON9Tc2rFVUziI39sWVQ%2BMsSWf%2BW5W1%2FwpIzMX7OxvKsHLstR03uSi18cBA9KwcWffeMoRMDjpTxqbDwcHsCaD4GP3oOvE51YefoMONO1&X-Amz-Signature=76c78e3c518ca6e560b1a9c5005e4902e2fcc3d59a7a50233c1ad55bb0bfbe92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQD32WU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lQmqiK%2BpbznNwTi9eW51Az%2FGZy3NWLma6yemxcay1AIgIFP9Phjc6CGQm2RiQhXvTGJlYhTT8%2FizSo1eTMdkjb8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvtHpfLfN9WpSzp2ircA9v5t70KYAzY4UxyQIiXyp7fbZ%2FILq%2FrmseO99B9DVbCpCHJ4Nhp9g5eE3G0pU72Gx5EmyKSlICRXUuonv8w%2FHhD%2FcpgPpJ5kuRzZpv670B93F2e1EhIfuzAGC%2BQrJkzc7DFJXxv%2FwUFbkfS3utqgsGZv5%2BiYXHpgCvzuO2jMZRTMw23Jq%2BUPPVhor%2BfMkHopnVvJYBM3%2Bm2YI%2B7QjpLW4VAEIwuEURzDiaWdtj4bsOxEFy9mSdR7Rs4CbWH%2FajB20VWQYAGKtVb%2BYDdZT1zxg6iF1d6D6IoVXozq9ON2ISWLPCAqfGv4bwyE0lOf0lUHiLfYgGrYAvxaF%2FeynpbQgMEod5iUHy73eiiojYN0MgEVbO9QbBlmrtDxZFZR9FKlZDLX6ktxD38GfqGqGaz41nWdnl02daNcDs%2B%2BpDi%2BQMzv%2BG0PrAXIYmAP1%2FzPidTuTWYHUTz0vKTLcaYNN0UfuPaXgvwSF4%2BctgGig7TVqJt2%2BTfbtzzbTNkUuRvaoeppKaU2jVJTwFwGxHKHXOl4XqqnUx49K1atxk73OCX5MHMk0xxU8j9OxSJhJAFHw3%2Be7kS6HClOxc098jQmgZ89DjM1B5MH%2FxXDgPFIqqaNa%2F0TcLYnaLnpze76l5PMI6mtMMGOqUBM8N9EUQLtcPaPWDsBjU5FSJTI9PSdkXKR7hCn1xKLCsiDdNPCHsfThnP%2BehioO9nlJOtAi6X%2BfMFSyaaey8YigHd1DIs3lsyW%2F9ryLXEBIByaoMiGzfVON9Tc2rFVUziI39sWVQ%2BMsSWf%2BW5W1%2FwpIzMX7OxvKsHLstR03uSi18cBA9KwcWffeMoRMDjpTxqbDwcHsCaD4GP3oOvE51YefoMONO1&X-Amz-Signature=09f2fdd8790f8bc7fd5443393e03543ca9b0a436082cc230b9c86b5182f13eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQD32WU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lQmqiK%2BpbznNwTi9eW51Az%2FGZy3NWLma6yemxcay1AIgIFP9Phjc6CGQm2RiQhXvTGJlYhTT8%2FizSo1eTMdkjb8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvtHpfLfN9WpSzp2ircA9v5t70KYAzY4UxyQIiXyp7fbZ%2FILq%2FrmseO99B9DVbCpCHJ4Nhp9g5eE3G0pU72Gx5EmyKSlICRXUuonv8w%2FHhD%2FcpgPpJ5kuRzZpv670B93F2e1EhIfuzAGC%2BQrJkzc7DFJXxv%2FwUFbkfS3utqgsGZv5%2BiYXHpgCvzuO2jMZRTMw23Jq%2BUPPVhor%2BfMkHopnVvJYBM3%2Bm2YI%2B7QjpLW4VAEIwuEURzDiaWdtj4bsOxEFy9mSdR7Rs4CbWH%2FajB20VWQYAGKtVb%2BYDdZT1zxg6iF1d6D6IoVXozq9ON2ISWLPCAqfGv4bwyE0lOf0lUHiLfYgGrYAvxaF%2FeynpbQgMEod5iUHy73eiiojYN0MgEVbO9QbBlmrtDxZFZR9FKlZDLX6ktxD38GfqGqGaz41nWdnl02daNcDs%2B%2BpDi%2BQMzv%2BG0PrAXIYmAP1%2FzPidTuTWYHUTz0vKTLcaYNN0UfuPaXgvwSF4%2BctgGig7TVqJt2%2BTfbtzzbTNkUuRvaoeppKaU2jVJTwFwGxHKHXOl4XqqnUx49K1atxk73OCX5MHMk0xxU8j9OxSJhJAFHw3%2Be7kS6HClOxc098jQmgZ89DjM1B5MH%2FxXDgPFIqqaNa%2F0TcLYnaLnpze76l5PMI6mtMMGOqUBM8N9EUQLtcPaPWDsBjU5FSJTI9PSdkXKR7hCn1xKLCsiDdNPCHsfThnP%2BehioO9nlJOtAi6X%2BfMFSyaaey8YigHd1DIs3lsyW%2F9ryLXEBIByaoMiGzfVON9Tc2rFVUziI39sWVQ%2BMsSWf%2BW5W1%2FwpIzMX7OxvKsHLstR03uSi18cBA9KwcWffeMoRMDjpTxqbDwcHsCaD4GP3oOvE51YefoMONO1&X-Amz-Signature=c6898cada303f66881f5b5e1570c22ecf2e10388fca80ff6e457c3f46b82c18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQD32WU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lQmqiK%2BpbznNwTi9eW51Az%2FGZy3NWLma6yemxcay1AIgIFP9Phjc6CGQm2RiQhXvTGJlYhTT8%2FizSo1eTMdkjb8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvtHpfLfN9WpSzp2ircA9v5t70KYAzY4UxyQIiXyp7fbZ%2FILq%2FrmseO99B9DVbCpCHJ4Nhp9g5eE3G0pU72Gx5EmyKSlICRXUuonv8w%2FHhD%2FcpgPpJ5kuRzZpv670B93F2e1EhIfuzAGC%2BQrJkzc7DFJXxv%2FwUFbkfS3utqgsGZv5%2BiYXHpgCvzuO2jMZRTMw23Jq%2BUPPVhor%2BfMkHopnVvJYBM3%2Bm2YI%2B7QjpLW4VAEIwuEURzDiaWdtj4bsOxEFy9mSdR7Rs4CbWH%2FajB20VWQYAGKtVb%2BYDdZT1zxg6iF1d6D6IoVXozq9ON2ISWLPCAqfGv4bwyE0lOf0lUHiLfYgGrYAvxaF%2FeynpbQgMEod5iUHy73eiiojYN0MgEVbO9QbBlmrtDxZFZR9FKlZDLX6ktxD38GfqGqGaz41nWdnl02daNcDs%2B%2BpDi%2BQMzv%2BG0PrAXIYmAP1%2FzPidTuTWYHUTz0vKTLcaYNN0UfuPaXgvwSF4%2BctgGig7TVqJt2%2BTfbtzzbTNkUuRvaoeppKaU2jVJTwFwGxHKHXOl4XqqnUx49K1atxk73OCX5MHMk0xxU8j9OxSJhJAFHw3%2Be7kS6HClOxc098jQmgZ89DjM1B5MH%2FxXDgPFIqqaNa%2F0TcLYnaLnpze76l5PMI6mtMMGOqUBM8N9EUQLtcPaPWDsBjU5FSJTI9PSdkXKR7hCn1xKLCsiDdNPCHsfThnP%2BehioO9nlJOtAi6X%2BfMFSyaaey8YigHd1DIs3lsyW%2F9ryLXEBIByaoMiGzfVON9Tc2rFVUziI39sWVQ%2BMsSWf%2BW5W1%2FwpIzMX7OxvKsHLstR03uSi18cBA9KwcWffeMoRMDjpTxqbDwcHsCaD4GP3oOvE51YefoMONO1&X-Amz-Signature=57e9f15eeb1c9b0f27d3421bf5e3df481f21c441888c44568964b8dc3d34874a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQD32WU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lQmqiK%2BpbznNwTi9eW51Az%2FGZy3NWLma6yemxcay1AIgIFP9Phjc6CGQm2RiQhXvTGJlYhTT8%2FizSo1eTMdkjb8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvtHpfLfN9WpSzp2ircA9v5t70KYAzY4UxyQIiXyp7fbZ%2FILq%2FrmseO99B9DVbCpCHJ4Nhp9g5eE3G0pU72Gx5EmyKSlICRXUuonv8w%2FHhD%2FcpgPpJ5kuRzZpv670B93F2e1EhIfuzAGC%2BQrJkzc7DFJXxv%2FwUFbkfS3utqgsGZv5%2BiYXHpgCvzuO2jMZRTMw23Jq%2BUPPVhor%2BfMkHopnVvJYBM3%2Bm2YI%2B7QjpLW4VAEIwuEURzDiaWdtj4bsOxEFy9mSdR7Rs4CbWH%2FajB20VWQYAGKtVb%2BYDdZT1zxg6iF1d6D6IoVXozq9ON2ISWLPCAqfGv4bwyE0lOf0lUHiLfYgGrYAvxaF%2FeynpbQgMEod5iUHy73eiiojYN0MgEVbO9QbBlmrtDxZFZR9FKlZDLX6ktxD38GfqGqGaz41nWdnl02daNcDs%2B%2BpDi%2BQMzv%2BG0PrAXIYmAP1%2FzPidTuTWYHUTz0vKTLcaYNN0UfuPaXgvwSF4%2BctgGig7TVqJt2%2BTfbtzzbTNkUuRvaoeppKaU2jVJTwFwGxHKHXOl4XqqnUx49K1atxk73OCX5MHMk0xxU8j9OxSJhJAFHw3%2Be7kS6HClOxc098jQmgZ89DjM1B5MH%2FxXDgPFIqqaNa%2F0TcLYnaLnpze76l5PMI6mtMMGOqUBM8N9EUQLtcPaPWDsBjU5FSJTI9PSdkXKR7hCn1xKLCsiDdNPCHsfThnP%2BehioO9nlJOtAi6X%2BfMFSyaaey8YigHd1DIs3lsyW%2F9ryLXEBIByaoMiGzfVON9Tc2rFVUziI39sWVQ%2BMsSWf%2BW5W1%2FwpIzMX7OxvKsHLstR03uSi18cBA9KwcWffeMoRMDjpTxqbDwcHsCaD4GP3oOvE51YefoMONO1&X-Amz-Signature=35bc41d8b5f51cc9e149583feeccf60f5299dd75c5b13c5df2f6a6639faf232a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFQD32WU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lQmqiK%2BpbznNwTi9eW51Az%2FGZy3NWLma6yemxcay1AIgIFP9Phjc6CGQm2RiQhXvTGJlYhTT8%2FizSo1eTMdkjb8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvtHpfLfN9WpSzp2ircA9v5t70KYAzY4UxyQIiXyp7fbZ%2FILq%2FrmseO99B9DVbCpCHJ4Nhp9g5eE3G0pU72Gx5EmyKSlICRXUuonv8w%2FHhD%2FcpgPpJ5kuRzZpv670B93F2e1EhIfuzAGC%2BQrJkzc7DFJXxv%2FwUFbkfS3utqgsGZv5%2BiYXHpgCvzuO2jMZRTMw23Jq%2BUPPVhor%2BfMkHopnVvJYBM3%2Bm2YI%2B7QjpLW4VAEIwuEURzDiaWdtj4bsOxEFy9mSdR7Rs4CbWH%2FajB20VWQYAGKtVb%2BYDdZT1zxg6iF1d6D6IoVXozq9ON2ISWLPCAqfGv4bwyE0lOf0lUHiLfYgGrYAvxaF%2FeynpbQgMEod5iUHy73eiiojYN0MgEVbO9QbBlmrtDxZFZR9FKlZDLX6ktxD38GfqGqGaz41nWdnl02daNcDs%2B%2BpDi%2BQMzv%2BG0PrAXIYmAP1%2FzPidTuTWYHUTz0vKTLcaYNN0UfuPaXgvwSF4%2BctgGig7TVqJt2%2BTfbtzzbTNkUuRvaoeppKaU2jVJTwFwGxHKHXOl4XqqnUx49K1atxk73OCX5MHMk0xxU8j9OxSJhJAFHw3%2Be7kS6HClOxc098jQmgZ89DjM1B5MH%2FxXDgPFIqqaNa%2F0TcLYnaLnpze76l5PMI6mtMMGOqUBM8N9EUQLtcPaPWDsBjU5FSJTI9PSdkXKR7hCn1xKLCsiDdNPCHsfThnP%2BehioO9nlJOtAi6X%2BfMFSyaaey8YigHd1DIs3lsyW%2F9ryLXEBIByaoMiGzfVON9Tc2rFVUziI39sWVQ%2BMsSWf%2BW5W1%2FwpIzMX7OxvKsHLstR03uSi18cBA9KwcWffeMoRMDjpTxqbDwcHsCaD4GP3oOvE51YefoMONO1&X-Amz-Signature=7c5bb46edf5116271bae91b36a2a07bbe364b7b62804aba83ea12cf6bef3a00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
