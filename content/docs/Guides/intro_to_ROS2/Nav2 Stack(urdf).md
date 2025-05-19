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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI37ILUL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVxaHdOj2KiyRigzBnQJZor4gUc%2FBsAjivns%2BUNifwIhAKfyY0eLqRbnnmEJeOb0GkESQQvyCTL9lS66JirouRWsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCNfmRIAdf57cuuoYq3AN18F8wKmHk65ZXYEyWBbUO1TdkrCejCVA7V6pgN1h7oV6hWdb%2FozdkPWSiS3RxbMgvnOm39jzNe5LegiU2NWX0n2JAV%2FAJIkR46YWC8RMsOwvprTdSIt9d9idE8c4tyBo%2BKSIVTXipjOHd8z9a6CJhh%2FGzx4O%2FDk2LIdZkgXAiWfwii%2BGM3EhNwgJu5We2VynKBEioz6wOcAO%2FTLOIaj99ZwEtUMyTkPOu%2BAj2iEGBgx%2FNSoqkauwPMg%2FGn%2B62bucFjAXlG4z1VfbFeTfHIKXl7KhQCSSQW66al4jlwqpNLzIUIZUAH8lSU5ld3CR%2B6S9oJkyqkKp749Jz%2F%2F0D7EUjoTVI7iPtSal7uAxgF7QF6btnZOLwi5TaofSU9OYcfUlSM4H4%2BUN6l%2F51XjR7YFd63sPF3WNRrfRh2Op6N0GLHFOew8w6aVVpVwnKk%2FjDnOcAbNkMGSypfk7744AhWmaF%2BVMxoWpR683jdkRVED%2Fj47nNxLgeVWRVf3KqhpBixuS%2B6kRMGDJ%2Frb41ZALjps4lRhHGen93wx0Sa0qvghI1zGcrmMH4iZv1YtGlLjEV4rBoWkVhMj4Qd%2BL6wTCkLo8PnzZ%2FYLH8SAtJqQq%2FQ1UC8JFI6UCdyFQp3ptZtTDP7KnBBjqkAbm75onN2Qpn85P26xT1Y1sZHw6yNLviiWK%2Fvi2meVg3fVqA0FywOK%2BLuGP2V42Ij2r0Mc%2B5bbL%2Btp4hKX1%2FmoRvdmvxbQzMkiBHzNnLosOkKqy2fmdCYD6gSglksFuSLjgC3OZY9iTHjA79sXgoAc3qnXNV%2BNi%2FsXB8FkZnhAUYhckyV%2F3BJgnIxBZGQYhX%2BvvOEFHHDE%2FlA%2BiE8hPBrSsyOcZF&X-Amz-Signature=1ed6b21dade08a9fe7bfbde03aab9f6109bd17624eb1ad4469a335721f141375&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI37ILUL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVxaHdOj2KiyRigzBnQJZor4gUc%2FBsAjivns%2BUNifwIhAKfyY0eLqRbnnmEJeOb0GkESQQvyCTL9lS66JirouRWsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCNfmRIAdf57cuuoYq3AN18F8wKmHk65ZXYEyWBbUO1TdkrCejCVA7V6pgN1h7oV6hWdb%2FozdkPWSiS3RxbMgvnOm39jzNe5LegiU2NWX0n2JAV%2FAJIkR46YWC8RMsOwvprTdSIt9d9idE8c4tyBo%2BKSIVTXipjOHd8z9a6CJhh%2FGzx4O%2FDk2LIdZkgXAiWfwii%2BGM3EhNwgJu5We2VynKBEioz6wOcAO%2FTLOIaj99ZwEtUMyTkPOu%2BAj2iEGBgx%2FNSoqkauwPMg%2FGn%2B62bucFjAXlG4z1VfbFeTfHIKXl7KhQCSSQW66al4jlwqpNLzIUIZUAH8lSU5ld3CR%2B6S9oJkyqkKp749Jz%2F%2F0D7EUjoTVI7iPtSal7uAxgF7QF6btnZOLwi5TaofSU9OYcfUlSM4H4%2BUN6l%2F51XjR7YFd63sPF3WNRrfRh2Op6N0GLHFOew8w6aVVpVwnKk%2FjDnOcAbNkMGSypfk7744AhWmaF%2BVMxoWpR683jdkRVED%2Fj47nNxLgeVWRVf3KqhpBixuS%2B6kRMGDJ%2Frb41ZALjps4lRhHGen93wx0Sa0qvghI1zGcrmMH4iZv1YtGlLjEV4rBoWkVhMj4Qd%2BL6wTCkLo8PnzZ%2FYLH8SAtJqQq%2FQ1UC8JFI6UCdyFQp3ptZtTDP7KnBBjqkAbm75onN2Qpn85P26xT1Y1sZHw6yNLviiWK%2Fvi2meVg3fVqA0FywOK%2BLuGP2V42Ij2r0Mc%2B5bbL%2Btp4hKX1%2FmoRvdmvxbQzMkiBHzNnLosOkKqy2fmdCYD6gSglksFuSLjgC3OZY9iTHjA79sXgoAc3qnXNV%2BNi%2FsXB8FkZnhAUYhckyV%2F3BJgnIxBZGQYhX%2BvvOEFHHDE%2FlA%2BiE8hPBrSsyOcZF&X-Amz-Signature=85964bfc8177fff8b2aea5404c6cc9e96629b2d50a3cc77df70c976490835056&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI37ILUL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVxaHdOj2KiyRigzBnQJZor4gUc%2FBsAjivns%2BUNifwIhAKfyY0eLqRbnnmEJeOb0GkESQQvyCTL9lS66JirouRWsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCNfmRIAdf57cuuoYq3AN18F8wKmHk65ZXYEyWBbUO1TdkrCejCVA7V6pgN1h7oV6hWdb%2FozdkPWSiS3RxbMgvnOm39jzNe5LegiU2NWX0n2JAV%2FAJIkR46YWC8RMsOwvprTdSIt9d9idE8c4tyBo%2BKSIVTXipjOHd8z9a6CJhh%2FGzx4O%2FDk2LIdZkgXAiWfwii%2BGM3EhNwgJu5We2VynKBEioz6wOcAO%2FTLOIaj99ZwEtUMyTkPOu%2BAj2iEGBgx%2FNSoqkauwPMg%2FGn%2B62bucFjAXlG4z1VfbFeTfHIKXl7KhQCSSQW66al4jlwqpNLzIUIZUAH8lSU5ld3CR%2B6S9oJkyqkKp749Jz%2F%2F0D7EUjoTVI7iPtSal7uAxgF7QF6btnZOLwi5TaofSU9OYcfUlSM4H4%2BUN6l%2F51XjR7YFd63sPF3WNRrfRh2Op6N0GLHFOew8w6aVVpVwnKk%2FjDnOcAbNkMGSypfk7744AhWmaF%2BVMxoWpR683jdkRVED%2Fj47nNxLgeVWRVf3KqhpBixuS%2B6kRMGDJ%2Frb41ZALjps4lRhHGen93wx0Sa0qvghI1zGcrmMH4iZv1YtGlLjEV4rBoWkVhMj4Qd%2BL6wTCkLo8PnzZ%2FYLH8SAtJqQq%2FQ1UC8JFI6UCdyFQp3ptZtTDP7KnBBjqkAbm75onN2Qpn85P26xT1Y1sZHw6yNLviiWK%2Fvi2meVg3fVqA0FywOK%2BLuGP2V42Ij2r0Mc%2B5bbL%2Btp4hKX1%2FmoRvdmvxbQzMkiBHzNnLosOkKqy2fmdCYD6gSglksFuSLjgC3OZY9iTHjA79sXgoAc3qnXNV%2BNi%2FsXB8FkZnhAUYhckyV%2F3BJgnIxBZGQYhX%2BvvOEFHHDE%2FlA%2BiE8hPBrSsyOcZF&X-Amz-Signature=d027501680a85a22b5f5c03303442175458226f084d2e271ebba3389382aa644&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI37ILUL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVxaHdOj2KiyRigzBnQJZor4gUc%2FBsAjivns%2BUNifwIhAKfyY0eLqRbnnmEJeOb0GkESQQvyCTL9lS66JirouRWsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCNfmRIAdf57cuuoYq3AN18F8wKmHk65ZXYEyWBbUO1TdkrCejCVA7V6pgN1h7oV6hWdb%2FozdkPWSiS3RxbMgvnOm39jzNe5LegiU2NWX0n2JAV%2FAJIkR46YWC8RMsOwvprTdSIt9d9idE8c4tyBo%2BKSIVTXipjOHd8z9a6CJhh%2FGzx4O%2FDk2LIdZkgXAiWfwii%2BGM3EhNwgJu5We2VynKBEioz6wOcAO%2FTLOIaj99ZwEtUMyTkPOu%2BAj2iEGBgx%2FNSoqkauwPMg%2FGn%2B62bucFjAXlG4z1VfbFeTfHIKXl7KhQCSSQW66al4jlwqpNLzIUIZUAH8lSU5ld3CR%2B6S9oJkyqkKp749Jz%2F%2F0D7EUjoTVI7iPtSal7uAxgF7QF6btnZOLwi5TaofSU9OYcfUlSM4H4%2BUN6l%2F51XjR7YFd63sPF3WNRrfRh2Op6N0GLHFOew8w6aVVpVwnKk%2FjDnOcAbNkMGSypfk7744AhWmaF%2BVMxoWpR683jdkRVED%2Fj47nNxLgeVWRVf3KqhpBixuS%2B6kRMGDJ%2Frb41ZALjps4lRhHGen93wx0Sa0qvghI1zGcrmMH4iZv1YtGlLjEV4rBoWkVhMj4Qd%2BL6wTCkLo8PnzZ%2FYLH8SAtJqQq%2FQ1UC8JFI6UCdyFQp3ptZtTDP7KnBBjqkAbm75onN2Qpn85P26xT1Y1sZHw6yNLviiWK%2Fvi2meVg3fVqA0FywOK%2BLuGP2V42Ij2r0Mc%2B5bbL%2Btp4hKX1%2FmoRvdmvxbQzMkiBHzNnLosOkKqy2fmdCYD6gSglksFuSLjgC3OZY9iTHjA79sXgoAc3qnXNV%2BNi%2FsXB8FkZnhAUYhckyV%2F3BJgnIxBZGQYhX%2BvvOEFHHDE%2FlA%2BiE8hPBrSsyOcZF&X-Amz-Signature=ddc8b12ab3418b2fa395821c5db1b560273d34a006475e34a71397dce414888e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI37ILUL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVxaHdOj2KiyRigzBnQJZor4gUc%2FBsAjivns%2BUNifwIhAKfyY0eLqRbnnmEJeOb0GkESQQvyCTL9lS66JirouRWsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCNfmRIAdf57cuuoYq3AN18F8wKmHk65ZXYEyWBbUO1TdkrCejCVA7V6pgN1h7oV6hWdb%2FozdkPWSiS3RxbMgvnOm39jzNe5LegiU2NWX0n2JAV%2FAJIkR46YWC8RMsOwvprTdSIt9d9idE8c4tyBo%2BKSIVTXipjOHd8z9a6CJhh%2FGzx4O%2FDk2LIdZkgXAiWfwii%2BGM3EhNwgJu5We2VynKBEioz6wOcAO%2FTLOIaj99ZwEtUMyTkPOu%2BAj2iEGBgx%2FNSoqkauwPMg%2FGn%2B62bucFjAXlG4z1VfbFeTfHIKXl7KhQCSSQW66al4jlwqpNLzIUIZUAH8lSU5ld3CR%2B6S9oJkyqkKp749Jz%2F%2F0D7EUjoTVI7iPtSal7uAxgF7QF6btnZOLwi5TaofSU9OYcfUlSM4H4%2BUN6l%2F51XjR7YFd63sPF3WNRrfRh2Op6N0GLHFOew8w6aVVpVwnKk%2FjDnOcAbNkMGSypfk7744AhWmaF%2BVMxoWpR683jdkRVED%2Fj47nNxLgeVWRVf3KqhpBixuS%2B6kRMGDJ%2Frb41ZALjps4lRhHGen93wx0Sa0qvghI1zGcrmMH4iZv1YtGlLjEV4rBoWkVhMj4Qd%2BL6wTCkLo8PnzZ%2FYLH8SAtJqQq%2FQ1UC8JFI6UCdyFQp3ptZtTDP7KnBBjqkAbm75onN2Qpn85P26xT1Y1sZHw6yNLviiWK%2Fvi2meVg3fVqA0FywOK%2BLuGP2V42Ij2r0Mc%2B5bbL%2Btp4hKX1%2FmoRvdmvxbQzMkiBHzNnLosOkKqy2fmdCYD6gSglksFuSLjgC3OZY9iTHjA79sXgoAc3qnXNV%2BNi%2FsXB8FkZnhAUYhckyV%2F3BJgnIxBZGQYhX%2BvvOEFHHDE%2FlA%2BiE8hPBrSsyOcZF&X-Amz-Signature=75770a318e0b4b0562dc15acb37d7f02aaf4f9158e7d24dd20505d701134fe3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI37ILUL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVxaHdOj2KiyRigzBnQJZor4gUc%2FBsAjivns%2BUNifwIhAKfyY0eLqRbnnmEJeOb0GkESQQvyCTL9lS66JirouRWsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCNfmRIAdf57cuuoYq3AN18F8wKmHk65ZXYEyWBbUO1TdkrCejCVA7V6pgN1h7oV6hWdb%2FozdkPWSiS3RxbMgvnOm39jzNe5LegiU2NWX0n2JAV%2FAJIkR46YWC8RMsOwvprTdSIt9d9idE8c4tyBo%2BKSIVTXipjOHd8z9a6CJhh%2FGzx4O%2FDk2LIdZkgXAiWfwii%2BGM3EhNwgJu5We2VynKBEioz6wOcAO%2FTLOIaj99ZwEtUMyTkPOu%2BAj2iEGBgx%2FNSoqkauwPMg%2FGn%2B62bucFjAXlG4z1VfbFeTfHIKXl7KhQCSSQW66al4jlwqpNLzIUIZUAH8lSU5ld3CR%2B6S9oJkyqkKp749Jz%2F%2F0D7EUjoTVI7iPtSal7uAxgF7QF6btnZOLwi5TaofSU9OYcfUlSM4H4%2BUN6l%2F51XjR7YFd63sPF3WNRrfRh2Op6N0GLHFOew8w6aVVpVwnKk%2FjDnOcAbNkMGSypfk7744AhWmaF%2BVMxoWpR683jdkRVED%2Fj47nNxLgeVWRVf3KqhpBixuS%2B6kRMGDJ%2Frb41ZALjps4lRhHGen93wx0Sa0qvghI1zGcrmMH4iZv1YtGlLjEV4rBoWkVhMj4Qd%2BL6wTCkLo8PnzZ%2FYLH8SAtJqQq%2FQ1UC8JFI6UCdyFQp3ptZtTDP7KnBBjqkAbm75onN2Qpn85P26xT1Y1sZHw6yNLviiWK%2Fvi2meVg3fVqA0FywOK%2BLuGP2V42Ij2r0Mc%2B5bbL%2Btp4hKX1%2FmoRvdmvxbQzMkiBHzNnLosOkKqy2fmdCYD6gSglksFuSLjgC3OZY9iTHjA79sXgoAc3qnXNV%2BNi%2FsXB8FkZnhAUYhckyV%2F3BJgnIxBZGQYhX%2BvvOEFHHDE%2FlA%2BiE8hPBrSsyOcZF&X-Amz-Signature=bcae52a53559d38c54c9bc5cc5ce46cf363a20fcaa1c352a403bad65510bdf4d&X-Amz-SignedHeaders=host&x-id=GetObject)
