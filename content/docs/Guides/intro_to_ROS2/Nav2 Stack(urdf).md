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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQH3IAYM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQNp4T225S3s09sprzpBP0xHtKwa9pxwiOKsgEIIfnwIhALrscQQfaLSSomdzy0oFpzj6UKZSZ1zo4xYf%2FtL0cXcwKv8DCC4QABoMNjM3NDIzMTgzODA1IgzN8gO8jLJcsw5d9V8q3AOko8eHXEaUHV2L1ZzNyQdN7pCO9LNQDOf5kLb19iFqcSTdpB%2Bx2VsvZEAYVnJM3rn6vmvUCQNYDxH6M6UPoOSoVI5Th5dbbBjxZSBzOKSypTklih752iHbdQCSkJBw9UlSTZ0x6wgrLw%2B1ohZAo1W%2B2GgKOR1hUhaAqAkOPnmBVI%2FD7xj419RgBRameJM836c4w8Z%2BA63gkXxbp477RTEpaXVAHzr7PlMW3fnAwIdIz7D6zz2mryC2j8Kx4tRt0kTbLWUYP35wpe1jf9XO1yWb0ynAsfgHFG4GuAHNsywUjt%2FQ4WEewP7b6YPo%2BH2EcNIUBq%2BXpweDHZCgldUt3b%2F0D9sp5QM3JkUwlhdvdkFC423xR0yH5A1t%2F3NMbU1aLXNB4fPpCqerhAgaB1VZHTIwcKxCoWCOjEA2NOA1eYDdgxVJPxlYKdrtUUy1wkVdltIH8AbPMdkHCTfS0LXDrZTtzBfixiTSKu7VkqR5QCP7V6Yf1lllDXIyc34vPFDqVAxqg0AOdfA%2BM1oWU6LxMrIGA2LqVSS2IbBcWFITRyyWNCY5sEgt47Ph8tOEvOWonqQ5teNlg2OOXeHRdUiOt7bdVaV53CEy7GLpBXs%2BqALfaLWZS5dbNqcVMasR9TDvpPm%2FBjqkAa9BouJ0zk1uJE5D58k2iIXfARdnx0OtY22vmT0%2FtRCsqmLHCuddboTrhl44ELICZoJfThDv37r7pdOQo1RWtgWkqER2ZDjTfKav%2F2SIFbxbmjMMBuunHOfDKLxR1IbGPuDAoS5r1K3eipCczTasz1%2FlqeDm1GO88xBYFBTUM5JsJeKvOJYnnlsi6Wt01kc5G6wzyz17y70TJCP2fptDKC1z0VuP&X-Amz-Signature=751e20ff448ef3514276a5c2b301ce173e44dda6bc4f6b0340a68193908985ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQH3IAYM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQNp4T225S3s09sprzpBP0xHtKwa9pxwiOKsgEIIfnwIhALrscQQfaLSSomdzy0oFpzj6UKZSZ1zo4xYf%2FtL0cXcwKv8DCC4QABoMNjM3NDIzMTgzODA1IgzN8gO8jLJcsw5d9V8q3AOko8eHXEaUHV2L1ZzNyQdN7pCO9LNQDOf5kLb19iFqcSTdpB%2Bx2VsvZEAYVnJM3rn6vmvUCQNYDxH6M6UPoOSoVI5Th5dbbBjxZSBzOKSypTklih752iHbdQCSkJBw9UlSTZ0x6wgrLw%2B1ohZAo1W%2B2GgKOR1hUhaAqAkOPnmBVI%2FD7xj419RgBRameJM836c4w8Z%2BA63gkXxbp477RTEpaXVAHzr7PlMW3fnAwIdIz7D6zz2mryC2j8Kx4tRt0kTbLWUYP35wpe1jf9XO1yWb0ynAsfgHFG4GuAHNsywUjt%2FQ4WEewP7b6YPo%2BH2EcNIUBq%2BXpweDHZCgldUt3b%2F0D9sp5QM3JkUwlhdvdkFC423xR0yH5A1t%2F3NMbU1aLXNB4fPpCqerhAgaB1VZHTIwcKxCoWCOjEA2NOA1eYDdgxVJPxlYKdrtUUy1wkVdltIH8AbPMdkHCTfS0LXDrZTtzBfixiTSKu7VkqR5QCP7V6Yf1lllDXIyc34vPFDqVAxqg0AOdfA%2BM1oWU6LxMrIGA2LqVSS2IbBcWFITRyyWNCY5sEgt47Ph8tOEvOWonqQ5teNlg2OOXeHRdUiOt7bdVaV53CEy7GLpBXs%2BqALfaLWZS5dbNqcVMasR9TDvpPm%2FBjqkAa9BouJ0zk1uJE5D58k2iIXfARdnx0OtY22vmT0%2FtRCsqmLHCuddboTrhl44ELICZoJfThDv37r7pdOQo1RWtgWkqER2ZDjTfKav%2F2SIFbxbmjMMBuunHOfDKLxR1IbGPuDAoS5r1K3eipCczTasz1%2FlqeDm1GO88xBYFBTUM5JsJeKvOJYnnlsi6Wt01kc5G6wzyz17y70TJCP2fptDKC1z0VuP&X-Amz-Signature=b49d0f7d706b927ee3da053c2b2b2730634953a7d8fe2fe7e5dcd278b84ccce1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQH3IAYM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQNp4T225S3s09sprzpBP0xHtKwa9pxwiOKsgEIIfnwIhALrscQQfaLSSomdzy0oFpzj6UKZSZ1zo4xYf%2FtL0cXcwKv8DCC4QABoMNjM3NDIzMTgzODA1IgzN8gO8jLJcsw5d9V8q3AOko8eHXEaUHV2L1ZzNyQdN7pCO9LNQDOf5kLb19iFqcSTdpB%2Bx2VsvZEAYVnJM3rn6vmvUCQNYDxH6M6UPoOSoVI5Th5dbbBjxZSBzOKSypTklih752iHbdQCSkJBw9UlSTZ0x6wgrLw%2B1ohZAo1W%2B2GgKOR1hUhaAqAkOPnmBVI%2FD7xj419RgBRameJM836c4w8Z%2BA63gkXxbp477RTEpaXVAHzr7PlMW3fnAwIdIz7D6zz2mryC2j8Kx4tRt0kTbLWUYP35wpe1jf9XO1yWb0ynAsfgHFG4GuAHNsywUjt%2FQ4WEewP7b6YPo%2BH2EcNIUBq%2BXpweDHZCgldUt3b%2F0D9sp5QM3JkUwlhdvdkFC423xR0yH5A1t%2F3NMbU1aLXNB4fPpCqerhAgaB1VZHTIwcKxCoWCOjEA2NOA1eYDdgxVJPxlYKdrtUUy1wkVdltIH8AbPMdkHCTfS0LXDrZTtzBfixiTSKu7VkqR5QCP7V6Yf1lllDXIyc34vPFDqVAxqg0AOdfA%2BM1oWU6LxMrIGA2LqVSS2IbBcWFITRyyWNCY5sEgt47Ph8tOEvOWonqQ5teNlg2OOXeHRdUiOt7bdVaV53CEy7GLpBXs%2BqALfaLWZS5dbNqcVMasR9TDvpPm%2FBjqkAa9BouJ0zk1uJE5D58k2iIXfARdnx0OtY22vmT0%2FtRCsqmLHCuddboTrhl44ELICZoJfThDv37r7pdOQo1RWtgWkqER2ZDjTfKav%2F2SIFbxbmjMMBuunHOfDKLxR1IbGPuDAoS5r1K3eipCczTasz1%2FlqeDm1GO88xBYFBTUM5JsJeKvOJYnnlsi6Wt01kc5G6wzyz17y70TJCP2fptDKC1z0VuP&X-Amz-Signature=365f8392c44aa9a6b81e15c196ef00bd7c6f9955d510c21079de46c9b4ce0928&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQH3IAYM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQNp4T225S3s09sprzpBP0xHtKwa9pxwiOKsgEIIfnwIhALrscQQfaLSSomdzy0oFpzj6UKZSZ1zo4xYf%2FtL0cXcwKv8DCC4QABoMNjM3NDIzMTgzODA1IgzN8gO8jLJcsw5d9V8q3AOko8eHXEaUHV2L1ZzNyQdN7pCO9LNQDOf5kLb19iFqcSTdpB%2Bx2VsvZEAYVnJM3rn6vmvUCQNYDxH6M6UPoOSoVI5Th5dbbBjxZSBzOKSypTklih752iHbdQCSkJBw9UlSTZ0x6wgrLw%2B1ohZAo1W%2B2GgKOR1hUhaAqAkOPnmBVI%2FD7xj419RgBRameJM836c4w8Z%2BA63gkXxbp477RTEpaXVAHzr7PlMW3fnAwIdIz7D6zz2mryC2j8Kx4tRt0kTbLWUYP35wpe1jf9XO1yWb0ynAsfgHFG4GuAHNsywUjt%2FQ4WEewP7b6YPo%2BH2EcNIUBq%2BXpweDHZCgldUt3b%2F0D9sp5QM3JkUwlhdvdkFC423xR0yH5A1t%2F3NMbU1aLXNB4fPpCqerhAgaB1VZHTIwcKxCoWCOjEA2NOA1eYDdgxVJPxlYKdrtUUy1wkVdltIH8AbPMdkHCTfS0LXDrZTtzBfixiTSKu7VkqR5QCP7V6Yf1lllDXIyc34vPFDqVAxqg0AOdfA%2BM1oWU6LxMrIGA2LqVSS2IbBcWFITRyyWNCY5sEgt47Ph8tOEvOWonqQ5teNlg2OOXeHRdUiOt7bdVaV53CEy7GLpBXs%2BqALfaLWZS5dbNqcVMasR9TDvpPm%2FBjqkAa9BouJ0zk1uJE5D58k2iIXfARdnx0OtY22vmT0%2FtRCsqmLHCuddboTrhl44ELICZoJfThDv37r7pdOQo1RWtgWkqER2ZDjTfKav%2F2SIFbxbmjMMBuunHOfDKLxR1IbGPuDAoS5r1K3eipCczTasz1%2FlqeDm1GO88xBYFBTUM5JsJeKvOJYnnlsi6Wt01kc5G6wzyz17y70TJCP2fptDKC1z0VuP&X-Amz-Signature=3bfa5c9e77fddc83042fa828d9dadb081cfc3aec8c5e172a99292f68e938db29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQH3IAYM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQNp4T225S3s09sprzpBP0xHtKwa9pxwiOKsgEIIfnwIhALrscQQfaLSSomdzy0oFpzj6UKZSZ1zo4xYf%2FtL0cXcwKv8DCC4QABoMNjM3NDIzMTgzODA1IgzN8gO8jLJcsw5d9V8q3AOko8eHXEaUHV2L1ZzNyQdN7pCO9LNQDOf5kLb19iFqcSTdpB%2Bx2VsvZEAYVnJM3rn6vmvUCQNYDxH6M6UPoOSoVI5Th5dbbBjxZSBzOKSypTklih752iHbdQCSkJBw9UlSTZ0x6wgrLw%2B1ohZAo1W%2B2GgKOR1hUhaAqAkOPnmBVI%2FD7xj419RgBRameJM836c4w8Z%2BA63gkXxbp477RTEpaXVAHzr7PlMW3fnAwIdIz7D6zz2mryC2j8Kx4tRt0kTbLWUYP35wpe1jf9XO1yWb0ynAsfgHFG4GuAHNsywUjt%2FQ4WEewP7b6YPo%2BH2EcNIUBq%2BXpweDHZCgldUt3b%2F0D9sp5QM3JkUwlhdvdkFC423xR0yH5A1t%2F3NMbU1aLXNB4fPpCqerhAgaB1VZHTIwcKxCoWCOjEA2NOA1eYDdgxVJPxlYKdrtUUy1wkVdltIH8AbPMdkHCTfS0LXDrZTtzBfixiTSKu7VkqR5QCP7V6Yf1lllDXIyc34vPFDqVAxqg0AOdfA%2BM1oWU6LxMrIGA2LqVSS2IbBcWFITRyyWNCY5sEgt47Ph8tOEvOWonqQ5teNlg2OOXeHRdUiOt7bdVaV53CEy7GLpBXs%2BqALfaLWZS5dbNqcVMasR9TDvpPm%2FBjqkAa9BouJ0zk1uJE5D58k2iIXfARdnx0OtY22vmT0%2FtRCsqmLHCuddboTrhl44ELICZoJfThDv37r7pdOQo1RWtgWkqER2ZDjTfKav%2F2SIFbxbmjMMBuunHOfDKLxR1IbGPuDAoS5r1K3eipCczTasz1%2FlqeDm1GO88xBYFBTUM5JsJeKvOJYnnlsi6Wt01kc5G6wzyz17y70TJCP2fptDKC1z0VuP&X-Amz-Signature=e90ce9836553a0c1ced1d4990d25b754867a5bfd34bf7e9328c3e2c86278dfdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQH3IAYM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQNp4T225S3s09sprzpBP0xHtKwa9pxwiOKsgEIIfnwIhALrscQQfaLSSomdzy0oFpzj6UKZSZ1zo4xYf%2FtL0cXcwKv8DCC4QABoMNjM3NDIzMTgzODA1IgzN8gO8jLJcsw5d9V8q3AOko8eHXEaUHV2L1ZzNyQdN7pCO9LNQDOf5kLb19iFqcSTdpB%2Bx2VsvZEAYVnJM3rn6vmvUCQNYDxH6M6UPoOSoVI5Th5dbbBjxZSBzOKSypTklih752iHbdQCSkJBw9UlSTZ0x6wgrLw%2B1ohZAo1W%2B2GgKOR1hUhaAqAkOPnmBVI%2FD7xj419RgBRameJM836c4w8Z%2BA63gkXxbp477RTEpaXVAHzr7PlMW3fnAwIdIz7D6zz2mryC2j8Kx4tRt0kTbLWUYP35wpe1jf9XO1yWb0ynAsfgHFG4GuAHNsywUjt%2FQ4WEewP7b6YPo%2BH2EcNIUBq%2BXpweDHZCgldUt3b%2F0D9sp5QM3JkUwlhdvdkFC423xR0yH5A1t%2F3NMbU1aLXNB4fPpCqerhAgaB1VZHTIwcKxCoWCOjEA2NOA1eYDdgxVJPxlYKdrtUUy1wkVdltIH8AbPMdkHCTfS0LXDrZTtzBfixiTSKu7VkqR5QCP7V6Yf1lllDXIyc34vPFDqVAxqg0AOdfA%2BM1oWU6LxMrIGA2LqVSS2IbBcWFITRyyWNCY5sEgt47Ph8tOEvOWonqQ5teNlg2OOXeHRdUiOt7bdVaV53CEy7GLpBXs%2BqALfaLWZS5dbNqcVMasR9TDvpPm%2FBjqkAa9BouJ0zk1uJE5D58k2iIXfARdnx0OtY22vmT0%2FtRCsqmLHCuddboTrhl44ELICZoJfThDv37r7pdOQo1RWtgWkqER2ZDjTfKav%2F2SIFbxbmjMMBuunHOfDKLxR1IbGPuDAoS5r1K3eipCczTasz1%2FlqeDm1GO88xBYFBTUM5JsJeKvOJYnnlsi6Wt01kc5G6wzyz17y70TJCP2fptDKC1z0VuP&X-Amz-Signature=a03e069bc51869bc72687f6cd32a072a8f5edf4d7c74b41b4105cf2fe16f4926&X-Amz-SignedHeaders=host&x-id=GetObject)
