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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEJEYBB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHjY7kln7oJLXwDMrS0ezaMzbIlB6UV183ZIs7HlS4kOAiEAnwk6ga00QJ3MR8t3brlxPAIvezzLpG7Ddk54VlhBj5kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMqmrUxITREBugrQTyrcAwwcagiXoEIFC7KNA20IYR56AeSCVKXMWEb%2BnKgAU8YQhXQA7Vn5K9aDG%2Bem3wW1M2oYzj%2BRqeVMg5oIMGujyXThCA7VT2nXO4ddMNMLhCPnH0JK6nfrwcVV2SutDYs%2FXteszi5vF3tDY5Q2Ks9P44f2HogVV0roEtaGV0JnZ3nbGl4Yeuxuxhf6TLxVURHOjKFsbxUvZPgGoiuvX4Yp3gGRaXKiLhSeYzcxBqwDmc22UdR%2B%2FJoBF%2FR3Iwo7ONoTDZYwmWw1p%2BlSFqtGPmJ16gUjpODsKxY6Rre4P9ai%2BbA9PrAnEN%2FaZ3fytKlvMFzbeQu85YuAXkWusdKkRYc5mzGJeSIsGOObrJTOze0%2FMRi89ZWuTdyGDsL7UYinC2aDPn4AqVE%2Bx8DLWNMDoxi4OMWU%2BIkNfWT1dDRjF0t656G4B%2FXCEWs%2BWj6xnhWBSTki8HXouCaeHkMF6ZfV1oTkrpD3vqIo4xh0bnGSvJhqwkBwb2XO0m0pKx%2FvAWqny7pO8uP6rG0V5B%2Bbs2RvEht%2BF4hrmastO3fUmWIFnpQ%2BGkgSK7htmam0cR%2Fdt4%2F%2BWrx0fcBZhbkMCsStqQkNMVg%2FY%2Bwph9rsel%2FSVjaibuHb0yfK02LaH7YFHa2icSicMJqph8IGOqUBqxP9%2FKLPifz9pDSmvUNkN8vYxEouoCp9kfwwY%2BJ%2BFiLt0FgNF5ZR2PVuH00ReyvWjK1fvONVW6U2mmFYTabKtjv0JpG69wDdkVsTPgz5535lxVlgckbh5s4bdnUNij79GiQqFtGvuG4InlCjCGvvs0nLjJ1ene1aHO9lA7OdVRh050h%2FG4JPXl8E8ZaSHxg6f5om1JBK9B37ccgIlArDbpj2xF9C&X-Amz-Signature=0e41431b17fbed277a616b4f5538163860666980626d0f9fd4e2f8e06a2615ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEJEYBB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHjY7kln7oJLXwDMrS0ezaMzbIlB6UV183ZIs7HlS4kOAiEAnwk6ga00QJ3MR8t3brlxPAIvezzLpG7Ddk54VlhBj5kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMqmrUxITREBugrQTyrcAwwcagiXoEIFC7KNA20IYR56AeSCVKXMWEb%2BnKgAU8YQhXQA7Vn5K9aDG%2Bem3wW1M2oYzj%2BRqeVMg5oIMGujyXThCA7VT2nXO4ddMNMLhCPnH0JK6nfrwcVV2SutDYs%2FXteszi5vF3tDY5Q2Ks9P44f2HogVV0roEtaGV0JnZ3nbGl4Yeuxuxhf6TLxVURHOjKFsbxUvZPgGoiuvX4Yp3gGRaXKiLhSeYzcxBqwDmc22UdR%2B%2FJoBF%2FR3Iwo7ONoTDZYwmWw1p%2BlSFqtGPmJ16gUjpODsKxY6Rre4P9ai%2BbA9PrAnEN%2FaZ3fytKlvMFzbeQu85YuAXkWusdKkRYc5mzGJeSIsGOObrJTOze0%2FMRi89ZWuTdyGDsL7UYinC2aDPn4AqVE%2Bx8DLWNMDoxi4OMWU%2BIkNfWT1dDRjF0t656G4B%2FXCEWs%2BWj6xnhWBSTki8HXouCaeHkMF6ZfV1oTkrpD3vqIo4xh0bnGSvJhqwkBwb2XO0m0pKx%2FvAWqny7pO8uP6rG0V5B%2Bbs2RvEht%2BF4hrmastO3fUmWIFnpQ%2BGkgSK7htmam0cR%2Fdt4%2F%2BWrx0fcBZhbkMCsStqQkNMVg%2FY%2Bwph9rsel%2FSVjaibuHb0yfK02LaH7YFHa2icSicMJqph8IGOqUBqxP9%2FKLPifz9pDSmvUNkN8vYxEouoCp9kfwwY%2BJ%2BFiLt0FgNF5ZR2PVuH00ReyvWjK1fvONVW6U2mmFYTabKtjv0JpG69wDdkVsTPgz5535lxVlgckbh5s4bdnUNij79GiQqFtGvuG4InlCjCGvvs0nLjJ1ene1aHO9lA7OdVRh050h%2FG4JPXl8E8ZaSHxg6f5om1JBK9B37ccgIlArDbpj2xF9C&X-Amz-Signature=9f144b405a98e6d673532b78a53c1afb292ea1feacb222052b4eea5a79caf609&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEJEYBB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHjY7kln7oJLXwDMrS0ezaMzbIlB6UV183ZIs7HlS4kOAiEAnwk6ga00QJ3MR8t3brlxPAIvezzLpG7Ddk54VlhBj5kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMqmrUxITREBugrQTyrcAwwcagiXoEIFC7KNA20IYR56AeSCVKXMWEb%2BnKgAU8YQhXQA7Vn5K9aDG%2Bem3wW1M2oYzj%2BRqeVMg5oIMGujyXThCA7VT2nXO4ddMNMLhCPnH0JK6nfrwcVV2SutDYs%2FXteszi5vF3tDY5Q2Ks9P44f2HogVV0roEtaGV0JnZ3nbGl4Yeuxuxhf6TLxVURHOjKFsbxUvZPgGoiuvX4Yp3gGRaXKiLhSeYzcxBqwDmc22UdR%2B%2FJoBF%2FR3Iwo7ONoTDZYwmWw1p%2BlSFqtGPmJ16gUjpODsKxY6Rre4P9ai%2BbA9PrAnEN%2FaZ3fytKlvMFzbeQu85YuAXkWusdKkRYc5mzGJeSIsGOObrJTOze0%2FMRi89ZWuTdyGDsL7UYinC2aDPn4AqVE%2Bx8DLWNMDoxi4OMWU%2BIkNfWT1dDRjF0t656G4B%2FXCEWs%2BWj6xnhWBSTki8HXouCaeHkMF6ZfV1oTkrpD3vqIo4xh0bnGSvJhqwkBwb2XO0m0pKx%2FvAWqny7pO8uP6rG0V5B%2Bbs2RvEht%2BF4hrmastO3fUmWIFnpQ%2BGkgSK7htmam0cR%2Fdt4%2F%2BWrx0fcBZhbkMCsStqQkNMVg%2FY%2Bwph9rsel%2FSVjaibuHb0yfK02LaH7YFHa2icSicMJqph8IGOqUBqxP9%2FKLPifz9pDSmvUNkN8vYxEouoCp9kfwwY%2BJ%2BFiLt0FgNF5ZR2PVuH00ReyvWjK1fvONVW6U2mmFYTabKtjv0JpG69wDdkVsTPgz5535lxVlgckbh5s4bdnUNij79GiQqFtGvuG4InlCjCGvvs0nLjJ1ene1aHO9lA7OdVRh050h%2FG4JPXl8E8ZaSHxg6f5om1JBK9B37ccgIlArDbpj2xF9C&X-Amz-Signature=dc9e5fafb9a92e47b414fa337bab04910230f0f144cd20567022796d9f9a8208&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEJEYBB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHjY7kln7oJLXwDMrS0ezaMzbIlB6UV183ZIs7HlS4kOAiEAnwk6ga00QJ3MR8t3brlxPAIvezzLpG7Ddk54VlhBj5kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMqmrUxITREBugrQTyrcAwwcagiXoEIFC7KNA20IYR56AeSCVKXMWEb%2BnKgAU8YQhXQA7Vn5K9aDG%2Bem3wW1M2oYzj%2BRqeVMg5oIMGujyXThCA7VT2nXO4ddMNMLhCPnH0JK6nfrwcVV2SutDYs%2FXteszi5vF3tDY5Q2Ks9P44f2HogVV0roEtaGV0JnZ3nbGl4Yeuxuxhf6TLxVURHOjKFsbxUvZPgGoiuvX4Yp3gGRaXKiLhSeYzcxBqwDmc22UdR%2B%2FJoBF%2FR3Iwo7ONoTDZYwmWw1p%2BlSFqtGPmJ16gUjpODsKxY6Rre4P9ai%2BbA9PrAnEN%2FaZ3fytKlvMFzbeQu85YuAXkWusdKkRYc5mzGJeSIsGOObrJTOze0%2FMRi89ZWuTdyGDsL7UYinC2aDPn4AqVE%2Bx8DLWNMDoxi4OMWU%2BIkNfWT1dDRjF0t656G4B%2FXCEWs%2BWj6xnhWBSTki8HXouCaeHkMF6ZfV1oTkrpD3vqIo4xh0bnGSvJhqwkBwb2XO0m0pKx%2FvAWqny7pO8uP6rG0V5B%2Bbs2RvEht%2BF4hrmastO3fUmWIFnpQ%2BGkgSK7htmam0cR%2Fdt4%2F%2BWrx0fcBZhbkMCsStqQkNMVg%2FY%2Bwph9rsel%2FSVjaibuHb0yfK02LaH7YFHa2icSicMJqph8IGOqUBqxP9%2FKLPifz9pDSmvUNkN8vYxEouoCp9kfwwY%2BJ%2BFiLt0FgNF5ZR2PVuH00ReyvWjK1fvONVW6U2mmFYTabKtjv0JpG69wDdkVsTPgz5535lxVlgckbh5s4bdnUNij79GiQqFtGvuG4InlCjCGvvs0nLjJ1ene1aHO9lA7OdVRh050h%2FG4JPXl8E8ZaSHxg6f5om1JBK9B37ccgIlArDbpj2xF9C&X-Amz-Signature=6a4d31f0337d9de7b0cc81e3332fe1b320061483ba91621a78b04f0ee658ed9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEJEYBB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHjY7kln7oJLXwDMrS0ezaMzbIlB6UV183ZIs7HlS4kOAiEAnwk6ga00QJ3MR8t3brlxPAIvezzLpG7Ddk54VlhBj5kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMqmrUxITREBugrQTyrcAwwcagiXoEIFC7KNA20IYR56AeSCVKXMWEb%2BnKgAU8YQhXQA7Vn5K9aDG%2Bem3wW1M2oYzj%2BRqeVMg5oIMGujyXThCA7VT2nXO4ddMNMLhCPnH0JK6nfrwcVV2SutDYs%2FXteszi5vF3tDY5Q2Ks9P44f2HogVV0roEtaGV0JnZ3nbGl4Yeuxuxhf6TLxVURHOjKFsbxUvZPgGoiuvX4Yp3gGRaXKiLhSeYzcxBqwDmc22UdR%2B%2FJoBF%2FR3Iwo7ONoTDZYwmWw1p%2BlSFqtGPmJ16gUjpODsKxY6Rre4P9ai%2BbA9PrAnEN%2FaZ3fytKlvMFzbeQu85YuAXkWusdKkRYc5mzGJeSIsGOObrJTOze0%2FMRi89ZWuTdyGDsL7UYinC2aDPn4AqVE%2Bx8DLWNMDoxi4OMWU%2BIkNfWT1dDRjF0t656G4B%2FXCEWs%2BWj6xnhWBSTki8HXouCaeHkMF6ZfV1oTkrpD3vqIo4xh0bnGSvJhqwkBwb2XO0m0pKx%2FvAWqny7pO8uP6rG0V5B%2Bbs2RvEht%2BF4hrmastO3fUmWIFnpQ%2BGkgSK7htmam0cR%2Fdt4%2F%2BWrx0fcBZhbkMCsStqQkNMVg%2FY%2Bwph9rsel%2FSVjaibuHb0yfK02LaH7YFHa2icSicMJqph8IGOqUBqxP9%2FKLPifz9pDSmvUNkN8vYxEouoCp9kfwwY%2BJ%2BFiLt0FgNF5ZR2PVuH00ReyvWjK1fvONVW6U2mmFYTabKtjv0JpG69wDdkVsTPgz5535lxVlgckbh5s4bdnUNij79GiQqFtGvuG4InlCjCGvvs0nLjJ1ene1aHO9lA7OdVRh050h%2FG4JPXl8E8ZaSHxg6f5om1JBK9B37ccgIlArDbpj2xF9C&X-Amz-Signature=da69fdd8da2545d320cb01f32c48f1ed3b592fa6afecd4a156b301433e131967&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEJEYBB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHjY7kln7oJLXwDMrS0ezaMzbIlB6UV183ZIs7HlS4kOAiEAnwk6ga00QJ3MR8t3brlxPAIvezzLpG7Ddk54VlhBj5kq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMqmrUxITREBugrQTyrcAwwcagiXoEIFC7KNA20IYR56AeSCVKXMWEb%2BnKgAU8YQhXQA7Vn5K9aDG%2Bem3wW1M2oYzj%2BRqeVMg5oIMGujyXThCA7VT2nXO4ddMNMLhCPnH0JK6nfrwcVV2SutDYs%2FXteszi5vF3tDY5Q2Ks9P44f2HogVV0roEtaGV0JnZ3nbGl4Yeuxuxhf6TLxVURHOjKFsbxUvZPgGoiuvX4Yp3gGRaXKiLhSeYzcxBqwDmc22UdR%2B%2FJoBF%2FR3Iwo7ONoTDZYwmWw1p%2BlSFqtGPmJ16gUjpODsKxY6Rre4P9ai%2BbA9PrAnEN%2FaZ3fytKlvMFzbeQu85YuAXkWusdKkRYc5mzGJeSIsGOObrJTOze0%2FMRi89ZWuTdyGDsL7UYinC2aDPn4AqVE%2Bx8DLWNMDoxi4OMWU%2BIkNfWT1dDRjF0t656G4B%2FXCEWs%2BWj6xnhWBSTki8HXouCaeHkMF6ZfV1oTkrpD3vqIo4xh0bnGSvJhqwkBwb2XO0m0pKx%2FvAWqny7pO8uP6rG0V5B%2Bbs2RvEht%2BF4hrmastO3fUmWIFnpQ%2BGkgSK7htmam0cR%2Fdt4%2F%2BWrx0fcBZhbkMCsStqQkNMVg%2FY%2Bwph9rsel%2FSVjaibuHb0yfK02LaH7YFHa2icSicMJqph8IGOqUBqxP9%2FKLPifz9pDSmvUNkN8vYxEouoCp9kfwwY%2BJ%2BFiLt0FgNF5ZR2PVuH00ReyvWjK1fvONVW6U2mmFYTabKtjv0JpG69wDdkVsTPgz5535lxVlgckbh5s4bdnUNij79GiQqFtGvuG4InlCjCGvvs0nLjJ1ene1aHO9lA7OdVRh050h%2FG4JPXl8E8ZaSHxg6f5om1JBK9B37ccgIlArDbpj2xF9C&X-Amz-Signature=59523405f6329c6df7d227a9aea33bd66462b583795896491172b50a16920b2e&X-Amz-SignedHeaders=host&x-id=GetObject)
