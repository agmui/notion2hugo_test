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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIJ7VAT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC%2BZX6it8dvEhr5eFE9WYexqa9PX8rYSw9jchwo4%2FC3VAIhAM9z%2F1TSfBOfI8949IvUjdyjkCLdzql%2FZQY13%2Fc3YdlWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEpkHdw7X5P1YHSM4q3ANMFMCk3dODfBZJQBzqc6souu%2Fr4FmPObt%2B1OUarV0g9JjzR4E5bnMg720p27XsSb3jmPNwF78NAwdZ%2B4OPWU8apLL2vlHeg3yV82RzazTLEclZjqUr7Wdh1TbWXYiFgJ9sbUnv4n8q3W3EphbSAja3EUgLaT%2FwLLnLs624HJ6CZa5tDI%2F7GE%2BF77%2B2FPYnIurAd4SWMjSjKb5YUsv%2BGb0cduZgUkhzd3%2B1SXFvDmZE9HvE1FpFZYAhqQwavKxlm1VgWp56xAxWl%2FwF%2Fw9QSkEykSFHnyS73Hp44Y3UI02dWM4T%2B7Q%2B53nyptsvDCKDh5%2FTFG%2FIGX6%2B5VlvzAyN8S2a5INzc0ZesRDdI2QnEno6DHBKFk8sEgTFEW3w%2BzlPawaPIx1aK79jGRQixtMIjDUdBqzy8YqQXCY0iSvXQWCeoKTFvfr3e4g%2FO%2Bmfjs4cssiQDgt8ihOQ8RDiVVyE%2FwDFQV5M5nkMQRwOreoW5j%2FA%2FQnLhxxUTd9euVn3Ja0SlpI%2BEoPNG8yJHTg1UGjreu%2BaE0JQm5Wp3GOtB1emCYDrTV1AoZHY%2BDFN8cP1Q%2BV%2Bl1b64f4ncJYluV0Xg7Lm33BCYG5fzQeLTX9XQw3x%2B4C9%2FHtSrbqZsQOQrgasHzDRiKTABjqkASIm9vDCWpf591tZ6ozEFjgxaeDoewtZvzHW85kKufyc%2BMVAliDfxD0%2F7dsgCFWbHAC95mZyqr8XWfWp0cRV1PD0fQIoOEIpa%2BZdoWhqIjowGhsSWN0nttU7N5bFpL8WV590TNuE3j%2Fc429YMC1PIjPUG%2FFqIReTm5UhMbVxVcU9DJEeLUnna3wbPfzp%2FV3hJBLd%2BOZUV%2Fy0wELC6Y5NGKIGgVf3&X-Amz-Signature=894353b379375e58103777d88c97214f0c302def8b56967613d0bad4dff25041&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIJ7VAT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC%2BZX6it8dvEhr5eFE9WYexqa9PX8rYSw9jchwo4%2FC3VAIhAM9z%2F1TSfBOfI8949IvUjdyjkCLdzql%2FZQY13%2Fc3YdlWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEpkHdw7X5P1YHSM4q3ANMFMCk3dODfBZJQBzqc6souu%2Fr4FmPObt%2B1OUarV0g9JjzR4E5bnMg720p27XsSb3jmPNwF78NAwdZ%2B4OPWU8apLL2vlHeg3yV82RzazTLEclZjqUr7Wdh1TbWXYiFgJ9sbUnv4n8q3W3EphbSAja3EUgLaT%2FwLLnLs624HJ6CZa5tDI%2F7GE%2BF77%2B2FPYnIurAd4SWMjSjKb5YUsv%2BGb0cduZgUkhzd3%2B1SXFvDmZE9HvE1FpFZYAhqQwavKxlm1VgWp56xAxWl%2FwF%2Fw9QSkEykSFHnyS73Hp44Y3UI02dWM4T%2B7Q%2B53nyptsvDCKDh5%2FTFG%2FIGX6%2B5VlvzAyN8S2a5INzc0ZesRDdI2QnEno6DHBKFk8sEgTFEW3w%2BzlPawaPIx1aK79jGRQixtMIjDUdBqzy8YqQXCY0iSvXQWCeoKTFvfr3e4g%2FO%2Bmfjs4cssiQDgt8ihOQ8RDiVVyE%2FwDFQV5M5nkMQRwOreoW5j%2FA%2FQnLhxxUTd9euVn3Ja0SlpI%2BEoPNG8yJHTg1UGjreu%2BaE0JQm5Wp3GOtB1emCYDrTV1AoZHY%2BDFN8cP1Q%2BV%2Bl1b64f4ncJYluV0Xg7Lm33BCYG5fzQeLTX9XQw3x%2B4C9%2FHtSrbqZsQOQrgasHzDRiKTABjqkASIm9vDCWpf591tZ6ozEFjgxaeDoewtZvzHW85kKufyc%2BMVAliDfxD0%2F7dsgCFWbHAC95mZyqr8XWfWp0cRV1PD0fQIoOEIpa%2BZdoWhqIjowGhsSWN0nttU7N5bFpL8WV590TNuE3j%2Fc429YMC1PIjPUG%2FFqIReTm5UhMbVxVcU9DJEeLUnna3wbPfzp%2FV3hJBLd%2BOZUV%2Fy0wELC6Y5NGKIGgVf3&X-Amz-Signature=f9dade7949be8eec0b1a060964d2ec7fec45491c74167c25711ad0180529380a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIJ7VAT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC%2BZX6it8dvEhr5eFE9WYexqa9PX8rYSw9jchwo4%2FC3VAIhAM9z%2F1TSfBOfI8949IvUjdyjkCLdzql%2FZQY13%2Fc3YdlWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEpkHdw7X5P1YHSM4q3ANMFMCk3dODfBZJQBzqc6souu%2Fr4FmPObt%2B1OUarV0g9JjzR4E5bnMg720p27XsSb3jmPNwF78NAwdZ%2B4OPWU8apLL2vlHeg3yV82RzazTLEclZjqUr7Wdh1TbWXYiFgJ9sbUnv4n8q3W3EphbSAja3EUgLaT%2FwLLnLs624HJ6CZa5tDI%2F7GE%2BF77%2B2FPYnIurAd4SWMjSjKb5YUsv%2BGb0cduZgUkhzd3%2B1SXFvDmZE9HvE1FpFZYAhqQwavKxlm1VgWp56xAxWl%2FwF%2Fw9QSkEykSFHnyS73Hp44Y3UI02dWM4T%2B7Q%2B53nyptsvDCKDh5%2FTFG%2FIGX6%2B5VlvzAyN8S2a5INzc0ZesRDdI2QnEno6DHBKFk8sEgTFEW3w%2BzlPawaPIx1aK79jGRQixtMIjDUdBqzy8YqQXCY0iSvXQWCeoKTFvfr3e4g%2FO%2Bmfjs4cssiQDgt8ihOQ8RDiVVyE%2FwDFQV5M5nkMQRwOreoW5j%2FA%2FQnLhxxUTd9euVn3Ja0SlpI%2BEoPNG8yJHTg1UGjreu%2BaE0JQm5Wp3GOtB1emCYDrTV1AoZHY%2BDFN8cP1Q%2BV%2Bl1b64f4ncJYluV0Xg7Lm33BCYG5fzQeLTX9XQw3x%2B4C9%2FHtSrbqZsQOQrgasHzDRiKTABjqkASIm9vDCWpf591tZ6ozEFjgxaeDoewtZvzHW85kKufyc%2BMVAliDfxD0%2F7dsgCFWbHAC95mZyqr8XWfWp0cRV1PD0fQIoOEIpa%2BZdoWhqIjowGhsSWN0nttU7N5bFpL8WV590TNuE3j%2Fc429YMC1PIjPUG%2FFqIReTm5UhMbVxVcU9DJEeLUnna3wbPfzp%2FV3hJBLd%2BOZUV%2Fy0wELC6Y5NGKIGgVf3&X-Amz-Signature=ca07ec8059218f98d12d0f32e62ad478497039b196adade8d08d8b234901f63f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIJ7VAT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC%2BZX6it8dvEhr5eFE9WYexqa9PX8rYSw9jchwo4%2FC3VAIhAM9z%2F1TSfBOfI8949IvUjdyjkCLdzql%2FZQY13%2Fc3YdlWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEpkHdw7X5P1YHSM4q3ANMFMCk3dODfBZJQBzqc6souu%2Fr4FmPObt%2B1OUarV0g9JjzR4E5bnMg720p27XsSb3jmPNwF78NAwdZ%2B4OPWU8apLL2vlHeg3yV82RzazTLEclZjqUr7Wdh1TbWXYiFgJ9sbUnv4n8q3W3EphbSAja3EUgLaT%2FwLLnLs624HJ6CZa5tDI%2F7GE%2BF77%2B2FPYnIurAd4SWMjSjKb5YUsv%2BGb0cduZgUkhzd3%2B1SXFvDmZE9HvE1FpFZYAhqQwavKxlm1VgWp56xAxWl%2FwF%2Fw9QSkEykSFHnyS73Hp44Y3UI02dWM4T%2B7Q%2B53nyptsvDCKDh5%2FTFG%2FIGX6%2B5VlvzAyN8S2a5INzc0ZesRDdI2QnEno6DHBKFk8sEgTFEW3w%2BzlPawaPIx1aK79jGRQixtMIjDUdBqzy8YqQXCY0iSvXQWCeoKTFvfr3e4g%2FO%2Bmfjs4cssiQDgt8ihOQ8RDiVVyE%2FwDFQV5M5nkMQRwOreoW5j%2FA%2FQnLhxxUTd9euVn3Ja0SlpI%2BEoPNG8yJHTg1UGjreu%2BaE0JQm5Wp3GOtB1emCYDrTV1AoZHY%2BDFN8cP1Q%2BV%2Bl1b64f4ncJYluV0Xg7Lm33BCYG5fzQeLTX9XQw3x%2B4C9%2FHtSrbqZsQOQrgasHzDRiKTABjqkASIm9vDCWpf591tZ6ozEFjgxaeDoewtZvzHW85kKufyc%2BMVAliDfxD0%2F7dsgCFWbHAC95mZyqr8XWfWp0cRV1PD0fQIoOEIpa%2BZdoWhqIjowGhsSWN0nttU7N5bFpL8WV590TNuE3j%2Fc429YMC1PIjPUG%2FFqIReTm5UhMbVxVcU9DJEeLUnna3wbPfzp%2FV3hJBLd%2BOZUV%2Fy0wELC6Y5NGKIGgVf3&X-Amz-Signature=529d23d0a4a337d9aa37bbc3ea8866709131e442228e3fa0650880ebaa67868d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIJ7VAT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC%2BZX6it8dvEhr5eFE9WYexqa9PX8rYSw9jchwo4%2FC3VAIhAM9z%2F1TSfBOfI8949IvUjdyjkCLdzql%2FZQY13%2Fc3YdlWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEpkHdw7X5P1YHSM4q3ANMFMCk3dODfBZJQBzqc6souu%2Fr4FmPObt%2B1OUarV0g9JjzR4E5bnMg720p27XsSb3jmPNwF78NAwdZ%2B4OPWU8apLL2vlHeg3yV82RzazTLEclZjqUr7Wdh1TbWXYiFgJ9sbUnv4n8q3W3EphbSAja3EUgLaT%2FwLLnLs624HJ6CZa5tDI%2F7GE%2BF77%2B2FPYnIurAd4SWMjSjKb5YUsv%2BGb0cduZgUkhzd3%2B1SXFvDmZE9HvE1FpFZYAhqQwavKxlm1VgWp56xAxWl%2FwF%2Fw9QSkEykSFHnyS73Hp44Y3UI02dWM4T%2B7Q%2B53nyptsvDCKDh5%2FTFG%2FIGX6%2B5VlvzAyN8S2a5INzc0ZesRDdI2QnEno6DHBKFk8sEgTFEW3w%2BzlPawaPIx1aK79jGRQixtMIjDUdBqzy8YqQXCY0iSvXQWCeoKTFvfr3e4g%2FO%2Bmfjs4cssiQDgt8ihOQ8RDiVVyE%2FwDFQV5M5nkMQRwOreoW5j%2FA%2FQnLhxxUTd9euVn3Ja0SlpI%2BEoPNG8yJHTg1UGjreu%2BaE0JQm5Wp3GOtB1emCYDrTV1AoZHY%2BDFN8cP1Q%2BV%2Bl1b64f4ncJYluV0Xg7Lm33BCYG5fzQeLTX9XQw3x%2B4C9%2FHtSrbqZsQOQrgasHzDRiKTABjqkASIm9vDCWpf591tZ6ozEFjgxaeDoewtZvzHW85kKufyc%2BMVAliDfxD0%2F7dsgCFWbHAC95mZyqr8XWfWp0cRV1PD0fQIoOEIpa%2BZdoWhqIjowGhsSWN0nttU7N5bFpL8WV590TNuE3j%2Fc429YMC1PIjPUG%2FFqIReTm5UhMbVxVcU9DJEeLUnna3wbPfzp%2FV3hJBLd%2BOZUV%2Fy0wELC6Y5NGKIGgVf3&X-Amz-Signature=8ebec75478507186d57912477e09cbff47fc6f8f0b55fa644ccc06d6326d7e90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIJ7VAT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC%2BZX6it8dvEhr5eFE9WYexqa9PX8rYSw9jchwo4%2FC3VAIhAM9z%2F1TSfBOfI8949IvUjdyjkCLdzql%2FZQY13%2Fc3YdlWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEpkHdw7X5P1YHSM4q3ANMFMCk3dODfBZJQBzqc6souu%2Fr4FmPObt%2B1OUarV0g9JjzR4E5bnMg720p27XsSb3jmPNwF78NAwdZ%2B4OPWU8apLL2vlHeg3yV82RzazTLEclZjqUr7Wdh1TbWXYiFgJ9sbUnv4n8q3W3EphbSAja3EUgLaT%2FwLLnLs624HJ6CZa5tDI%2F7GE%2BF77%2B2FPYnIurAd4SWMjSjKb5YUsv%2BGb0cduZgUkhzd3%2B1SXFvDmZE9HvE1FpFZYAhqQwavKxlm1VgWp56xAxWl%2FwF%2Fw9QSkEykSFHnyS73Hp44Y3UI02dWM4T%2B7Q%2B53nyptsvDCKDh5%2FTFG%2FIGX6%2B5VlvzAyN8S2a5INzc0ZesRDdI2QnEno6DHBKFk8sEgTFEW3w%2BzlPawaPIx1aK79jGRQixtMIjDUdBqzy8YqQXCY0iSvXQWCeoKTFvfr3e4g%2FO%2Bmfjs4cssiQDgt8ihOQ8RDiVVyE%2FwDFQV5M5nkMQRwOreoW5j%2FA%2FQnLhxxUTd9euVn3Ja0SlpI%2BEoPNG8yJHTg1UGjreu%2BaE0JQm5Wp3GOtB1emCYDrTV1AoZHY%2BDFN8cP1Q%2BV%2Bl1b64f4ncJYluV0Xg7Lm33BCYG5fzQeLTX9XQw3x%2B4C9%2FHtSrbqZsQOQrgasHzDRiKTABjqkASIm9vDCWpf591tZ6ozEFjgxaeDoewtZvzHW85kKufyc%2BMVAliDfxD0%2F7dsgCFWbHAC95mZyqr8XWfWp0cRV1PD0fQIoOEIpa%2BZdoWhqIjowGhsSWN0nttU7N5bFpL8WV590TNuE3j%2Fc429YMC1PIjPUG%2FFqIReTm5UhMbVxVcU9DJEeLUnna3wbPfzp%2FV3hJBLd%2BOZUV%2Fy0wELC6Y5NGKIGgVf3&X-Amz-Signature=98b56afdc191b21e9e8cfcc6b2fc2c799cc0dd8bf19fcc0dc7ad2881399baa82&X-Amz-SignedHeaders=host&x-id=GetObject)
