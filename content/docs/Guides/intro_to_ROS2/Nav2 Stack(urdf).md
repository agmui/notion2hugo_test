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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDOELA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe1wPFN3Y%2FzT9nKbz1R4273gxDHo4AW7zk5LmJH7pIoAiAuZ0pUFm0o9ZIXu376%2FxsRPQqi1QG17xs0ha0aIY4JsCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGzAg%2BpefV3V6MgETKtwDRJjc983bw6A62BUh65T19PGWxTL0Ic1ek%2BzHliUUAkuqDPy1Xb2dyr4UYYi22PW7RhD0oGBZRemST1fEs%2FvkSBY1Lwe9kjsb6nWLF3Q6KlFNctUuhBUlUmP6MNdnLeuBNVGF%2BIG3xxHMu81TtTMRxdT3mwCLa7bAmT%2ByG2yXWxWH6DB9u5hdxpY8DTHyP46SVwKbNWb5Tc20RoqPceH2VWm7RnlHDmBOzvr2a4X6uOcd9uFGWJC3DF1%2BkDw3ggAMOQJ1l9P1GxS9gX2wbgKZCRSKTQw9Er67yeEZIwRjgm0igpTAviopQ%2FMDAVJGMEXNolJt8eiXsncOvSDo%2FXWAXaAvcnVcXCLSTiXW1frGEFtGst%2BHk3qH1UfpPOv5HCtl1zwr6HCEDQW3z7E29UBltS7nrITKGIN1RvNHDn4QdWwVISBfRS5zlhz7KwEfbKrxmSR%2BL8Pqk%2FPBnWDEG86u8ivE2iXYEBsIF3j1YUD4sGoyRx0hNro1My2l4JdgQE6i%2BtxAF7EYad%2BTj2aOlCE3763BtKrVaCPLcJjAE%2FMKbdwNQU3xKsPX%2B2L%2B%2Fgeah3j7B9NUrCkG91lmbtpCS1MWgQm0HDwFHLY5zssM8EXEbDGSbvhNChrum9%2FZxk0w%2FsHgvQY6pgHImlsr2X16U%2BgRLh1MmdMGxHS%2B8NAdKSTo5JxgUl6HCMEQpUcWaXIEfBf0KhVkxPsZCmP479SxXDygaeYHeZ0VqsVovixewQv%2BQ8%2BfS4dWTLvzecJNPe8NuAdg%2BtrzpCI0BObe3tA0MikcutJTl16cMnf%2FhDkF96AXN86Gvn5KXBZFlBrrCdjrswwwWCYzYOK6ALCXIybe1fHxX2viZNL3somD%2Bshz&X-Amz-Signature=8f7d3f9f6dd04e8e249a23336e79ef2a2b6b776fdd6e6875bde03fd2e82b3f94&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDOELA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe1wPFN3Y%2FzT9nKbz1R4273gxDHo4AW7zk5LmJH7pIoAiAuZ0pUFm0o9ZIXu376%2FxsRPQqi1QG17xs0ha0aIY4JsCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGzAg%2BpefV3V6MgETKtwDRJjc983bw6A62BUh65T19PGWxTL0Ic1ek%2BzHliUUAkuqDPy1Xb2dyr4UYYi22PW7RhD0oGBZRemST1fEs%2FvkSBY1Lwe9kjsb6nWLF3Q6KlFNctUuhBUlUmP6MNdnLeuBNVGF%2BIG3xxHMu81TtTMRxdT3mwCLa7bAmT%2ByG2yXWxWH6DB9u5hdxpY8DTHyP46SVwKbNWb5Tc20RoqPceH2VWm7RnlHDmBOzvr2a4X6uOcd9uFGWJC3DF1%2BkDw3ggAMOQJ1l9P1GxS9gX2wbgKZCRSKTQw9Er67yeEZIwRjgm0igpTAviopQ%2FMDAVJGMEXNolJt8eiXsncOvSDo%2FXWAXaAvcnVcXCLSTiXW1frGEFtGst%2BHk3qH1UfpPOv5HCtl1zwr6HCEDQW3z7E29UBltS7nrITKGIN1RvNHDn4QdWwVISBfRS5zlhz7KwEfbKrxmSR%2BL8Pqk%2FPBnWDEG86u8ivE2iXYEBsIF3j1YUD4sGoyRx0hNro1My2l4JdgQE6i%2BtxAF7EYad%2BTj2aOlCE3763BtKrVaCPLcJjAE%2FMKbdwNQU3xKsPX%2B2L%2B%2Fgeah3j7B9NUrCkG91lmbtpCS1MWgQm0HDwFHLY5zssM8EXEbDGSbvhNChrum9%2FZxk0w%2FsHgvQY6pgHImlsr2X16U%2BgRLh1MmdMGxHS%2B8NAdKSTo5JxgUl6HCMEQpUcWaXIEfBf0KhVkxPsZCmP479SxXDygaeYHeZ0VqsVovixewQv%2BQ8%2BfS4dWTLvzecJNPe8NuAdg%2BtrzpCI0BObe3tA0MikcutJTl16cMnf%2FhDkF96AXN86Gvn5KXBZFlBrrCdjrswwwWCYzYOK6ALCXIybe1fHxX2viZNL3somD%2Bshz&X-Amz-Signature=06476f2d40b8a8706f94c6f124ebf978329a0171e59f39d0446f997812678b09&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDOELA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe1wPFN3Y%2FzT9nKbz1R4273gxDHo4AW7zk5LmJH7pIoAiAuZ0pUFm0o9ZIXu376%2FxsRPQqi1QG17xs0ha0aIY4JsCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGzAg%2BpefV3V6MgETKtwDRJjc983bw6A62BUh65T19PGWxTL0Ic1ek%2BzHliUUAkuqDPy1Xb2dyr4UYYi22PW7RhD0oGBZRemST1fEs%2FvkSBY1Lwe9kjsb6nWLF3Q6KlFNctUuhBUlUmP6MNdnLeuBNVGF%2BIG3xxHMu81TtTMRxdT3mwCLa7bAmT%2ByG2yXWxWH6DB9u5hdxpY8DTHyP46SVwKbNWb5Tc20RoqPceH2VWm7RnlHDmBOzvr2a4X6uOcd9uFGWJC3DF1%2BkDw3ggAMOQJ1l9P1GxS9gX2wbgKZCRSKTQw9Er67yeEZIwRjgm0igpTAviopQ%2FMDAVJGMEXNolJt8eiXsncOvSDo%2FXWAXaAvcnVcXCLSTiXW1frGEFtGst%2BHk3qH1UfpPOv5HCtl1zwr6HCEDQW3z7E29UBltS7nrITKGIN1RvNHDn4QdWwVISBfRS5zlhz7KwEfbKrxmSR%2BL8Pqk%2FPBnWDEG86u8ivE2iXYEBsIF3j1YUD4sGoyRx0hNro1My2l4JdgQE6i%2BtxAF7EYad%2BTj2aOlCE3763BtKrVaCPLcJjAE%2FMKbdwNQU3xKsPX%2B2L%2B%2Fgeah3j7B9NUrCkG91lmbtpCS1MWgQm0HDwFHLY5zssM8EXEbDGSbvhNChrum9%2FZxk0w%2FsHgvQY6pgHImlsr2X16U%2BgRLh1MmdMGxHS%2B8NAdKSTo5JxgUl6HCMEQpUcWaXIEfBf0KhVkxPsZCmP479SxXDygaeYHeZ0VqsVovixewQv%2BQ8%2BfS4dWTLvzecJNPe8NuAdg%2BtrzpCI0BObe3tA0MikcutJTl16cMnf%2FhDkF96AXN86Gvn5KXBZFlBrrCdjrswwwWCYzYOK6ALCXIybe1fHxX2viZNL3somD%2Bshz&X-Amz-Signature=abf0e04e3f18e2e7b53fd929f71d716fbedb6e89e6edd6f691bf7bf9e01c6105&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDOELA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe1wPFN3Y%2FzT9nKbz1R4273gxDHo4AW7zk5LmJH7pIoAiAuZ0pUFm0o9ZIXu376%2FxsRPQqi1QG17xs0ha0aIY4JsCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGzAg%2BpefV3V6MgETKtwDRJjc983bw6A62BUh65T19PGWxTL0Ic1ek%2BzHliUUAkuqDPy1Xb2dyr4UYYi22PW7RhD0oGBZRemST1fEs%2FvkSBY1Lwe9kjsb6nWLF3Q6KlFNctUuhBUlUmP6MNdnLeuBNVGF%2BIG3xxHMu81TtTMRxdT3mwCLa7bAmT%2ByG2yXWxWH6DB9u5hdxpY8DTHyP46SVwKbNWb5Tc20RoqPceH2VWm7RnlHDmBOzvr2a4X6uOcd9uFGWJC3DF1%2BkDw3ggAMOQJ1l9P1GxS9gX2wbgKZCRSKTQw9Er67yeEZIwRjgm0igpTAviopQ%2FMDAVJGMEXNolJt8eiXsncOvSDo%2FXWAXaAvcnVcXCLSTiXW1frGEFtGst%2BHk3qH1UfpPOv5HCtl1zwr6HCEDQW3z7E29UBltS7nrITKGIN1RvNHDn4QdWwVISBfRS5zlhz7KwEfbKrxmSR%2BL8Pqk%2FPBnWDEG86u8ivE2iXYEBsIF3j1YUD4sGoyRx0hNro1My2l4JdgQE6i%2BtxAF7EYad%2BTj2aOlCE3763BtKrVaCPLcJjAE%2FMKbdwNQU3xKsPX%2B2L%2B%2Fgeah3j7B9NUrCkG91lmbtpCS1MWgQm0HDwFHLY5zssM8EXEbDGSbvhNChrum9%2FZxk0w%2FsHgvQY6pgHImlsr2X16U%2BgRLh1MmdMGxHS%2B8NAdKSTo5JxgUl6HCMEQpUcWaXIEfBf0KhVkxPsZCmP479SxXDygaeYHeZ0VqsVovixewQv%2BQ8%2BfS4dWTLvzecJNPe8NuAdg%2BtrzpCI0BObe3tA0MikcutJTl16cMnf%2FhDkF96AXN86Gvn5KXBZFlBrrCdjrswwwWCYzYOK6ALCXIybe1fHxX2viZNL3somD%2Bshz&X-Amz-Signature=c74494fd1626b74e82a185a04bbf49bc53f962d222a2ffb6b3a83842090461cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDOELA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe1wPFN3Y%2FzT9nKbz1R4273gxDHo4AW7zk5LmJH7pIoAiAuZ0pUFm0o9ZIXu376%2FxsRPQqi1QG17xs0ha0aIY4JsCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGzAg%2BpefV3V6MgETKtwDRJjc983bw6A62BUh65T19PGWxTL0Ic1ek%2BzHliUUAkuqDPy1Xb2dyr4UYYi22PW7RhD0oGBZRemST1fEs%2FvkSBY1Lwe9kjsb6nWLF3Q6KlFNctUuhBUlUmP6MNdnLeuBNVGF%2BIG3xxHMu81TtTMRxdT3mwCLa7bAmT%2ByG2yXWxWH6DB9u5hdxpY8DTHyP46SVwKbNWb5Tc20RoqPceH2VWm7RnlHDmBOzvr2a4X6uOcd9uFGWJC3DF1%2BkDw3ggAMOQJ1l9P1GxS9gX2wbgKZCRSKTQw9Er67yeEZIwRjgm0igpTAviopQ%2FMDAVJGMEXNolJt8eiXsncOvSDo%2FXWAXaAvcnVcXCLSTiXW1frGEFtGst%2BHk3qH1UfpPOv5HCtl1zwr6HCEDQW3z7E29UBltS7nrITKGIN1RvNHDn4QdWwVISBfRS5zlhz7KwEfbKrxmSR%2BL8Pqk%2FPBnWDEG86u8ivE2iXYEBsIF3j1YUD4sGoyRx0hNro1My2l4JdgQE6i%2BtxAF7EYad%2BTj2aOlCE3763BtKrVaCPLcJjAE%2FMKbdwNQU3xKsPX%2B2L%2B%2Fgeah3j7B9NUrCkG91lmbtpCS1MWgQm0HDwFHLY5zssM8EXEbDGSbvhNChrum9%2FZxk0w%2FsHgvQY6pgHImlsr2X16U%2BgRLh1MmdMGxHS%2B8NAdKSTo5JxgUl6HCMEQpUcWaXIEfBf0KhVkxPsZCmP479SxXDygaeYHeZ0VqsVovixewQv%2BQ8%2BfS4dWTLvzecJNPe8NuAdg%2BtrzpCI0BObe3tA0MikcutJTl16cMnf%2FhDkF96AXN86Gvn5KXBZFlBrrCdjrswwwWCYzYOK6ALCXIybe1fHxX2viZNL3somD%2Bshz&X-Amz-Signature=a2e47aa75257b43da83b63b01020bce0f05298350a3503c13c02c88af2c4eccb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDOELA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe1wPFN3Y%2FzT9nKbz1R4273gxDHo4AW7zk5LmJH7pIoAiAuZ0pUFm0o9ZIXu376%2FxsRPQqi1QG17xs0ha0aIY4JsCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGzAg%2BpefV3V6MgETKtwDRJjc983bw6A62BUh65T19PGWxTL0Ic1ek%2BzHliUUAkuqDPy1Xb2dyr4UYYi22PW7RhD0oGBZRemST1fEs%2FvkSBY1Lwe9kjsb6nWLF3Q6KlFNctUuhBUlUmP6MNdnLeuBNVGF%2BIG3xxHMu81TtTMRxdT3mwCLa7bAmT%2ByG2yXWxWH6DB9u5hdxpY8DTHyP46SVwKbNWb5Tc20RoqPceH2VWm7RnlHDmBOzvr2a4X6uOcd9uFGWJC3DF1%2BkDw3ggAMOQJ1l9P1GxS9gX2wbgKZCRSKTQw9Er67yeEZIwRjgm0igpTAviopQ%2FMDAVJGMEXNolJt8eiXsncOvSDo%2FXWAXaAvcnVcXCLSTiXW1frGEFtGst%2BHk3qH1UfpPOv5HCtl1zwr6HCEDQW3z7E29UBltS7nrITKGIN1RvNHDn4QdWwVISBfRS5zlhz7KwEfbKrxmSR%2BL8Pqk%2FPBnWDEG86u8ivE2iXYEBsIF3j1YUD4sGoyRx0hNro1My2l4JdgQE6i%2BtxAF7EYad%2BTj2aOlCE3763BtKrVaCPLcJjAE%2FMKbdwNQU3xKsPX%2B2L%2B%2Fgeah3j7B9NUrCkG91lmbtpCS1MWgQm0HDwFHLY5zssM8EXEbDGSbvhNChrum9%2FZxk0w%2FsHgvQY6pgHImlsr2X16U%2BgRLh1MmdMGxHS%2B8NAdKSTo5JxgUl6HCMEQpUcWaXIEfBf0KhVkxPsZCmP479SxXDygaeYHeZ0VqsVovixewQv%2BQ8%2BfS4dWTLvzecJNPe8NuAdg%2BtrzpCI0BObe3tA0MikcutJTl16cMnf%2FhDkF96AXN86Gvn5KXBZFlBrrCdjrswwwWCYzYOK6ALCXIybe1fHxX2viZNL3somD%2Bshz&X-Amz-Signature=d39de8ebccb63bf26608985ca4410f6cfb0f3d4ef792d363f71e2618c543b6a4&X-Amz-SignedHeaders=host&x-id=GetObject)
