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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIAZBZ3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvFeTvaBKYGdrhw2rNVUEjZs0W50byx7PF5sBDd0L8QIhANBzGI5%2FIoi8Hj%2FU3IoIpo9MCt7hrxsCKplTN6%2BzsTm8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxkdNeNNsG6X0KzUq3ANclNvj1DxqCnfZkq%2BtnJ4IzTupmWt5bzPSJDxkT8Z9xAyVG97ZmGbAyaXKy2Prf5KV1zYz%2F1NaGx2WR7ue5VjGXB2azomW9BGV9jHbWxdJtLIPshkLqXnHE8hkJws3wIND46sXxfXnxrYC%2Fs2ZwnHqGBpNwCB1lw83U4p5Z%2BZduHoDGlcFjUX38PIMcCgaKZJmcB5V4cWvzlz52HuMWo39gZYezE3gc2L4nsJczEw0VnytbL8srZVznw9owLHoAOH9BxuxvFhqrSFwToxR7WzCzBeoDBBgjGdg23%2Fjrz3IhNqQtQTlHxlMHoG7J6%2BPmOQZCUf152m%2Fe%2BW9RDXo32DhJ0dA6V%2FsttVgFATNCEILCDgAvfxGAjSlTIFYTWE5BlTkIaUqJtmC9uit5Y88A4GFAZy5f3g0ZpQCrBz1iLR2zhALNzEETnK6HpEwF9z8TK3WIjBsoQMVmYYjaAUKz5wpGn2Adfg1ItvgmFkeJpkuP5eTMpVaoi4ceLBBhaQHNGxbhj7UlcdQx64E%2Bvk51lxPd%2FQF919grIDDrgju4I9vpGO6RhOYiVddvB%2BV5%2Bmgk3n1SbywtXqUKyxV%2B0MnOheX%2BsIvDQe2TFDup1TusCaYVEWVxQs5wk1lsuNujjCt88rCBjqkAS9TseJVaRo4V2GGKBfscvv5pATSVnk8z0yq%2FKk6IQtjxT4YLrn0aP3DGOT0cgvStg9N5QRD6SmXf9rzWAl5Sco%2B2LjGUv%2BJSXOXd7qV07jN5MQaW1w%2FWGyKMpsQdfjrGjbYth7HhVnHKHf1BQTu5ks9uaMMQFhbT1qtX0RM0%2F6wS9zb85fgSwB%2BrzUVp4nJ%2FvlyQMFuuYm%2BrmAN%2Fhuzfp9H1orx&X-Amz-Signature=6ee97369a98edaf9c19c6fc86cbfce0c723680f7ed31f2cc0ac886bef611a966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIAZBZ3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvFeTvaBKYGdrhw2rNVUEjZs0W50byx7PF5sBDd0L8QIhANBzGI5%2FIoi8Hj%2FU3IoIpo9MCt7hrxsCKplTN6%2BzsTm8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxkdNeNNsG6X0KzUq3ANclNvj1DxqCnfZkq%2BtnJ4IzTupmWt5bzPSJDxkT8Z9xAyVG97ZmGbAyaXKy2Prf5KV1zYz%2F1NaGx2WR7ue5VjGXB2azomW9BGV9jHbWxdJtLIPshkLqXnHE8hkJws3wIND46sXxfXnxrYC%2Fs2ZwnHqGBpNwCB1lw83U4p5Z%2BZduHoDGlcFjUX38PIMcCgaKZJmcB5V4cWvzlz52HuMWo39gZYezE3gc2L4nsJczEw0VnytbL8srZVznw9owLHoAOH9BxuxvFhqrSFwToxR7WzCzBeoDBBgjGdg23%2Fjrz3IhNqQtQTlHxlMHoG7J6%2BPmOQZCUf152m%2Fe%2BW9RDXo32DhJ0dA6V%2FsttVgFATNCEILCDgAvfxGAjSlTIFYTWE5BlTkIaUqJtmC9uit5Y88A4GFAZy5f3g0ZpQCrBz1iLR2zhALNzEETnK6HpEwF9z8TK3WIjBsoQMVmYYjaAUKz5wpGn2Adfg1ItvgmFkeJpkuP5eTMpVaoi4ceLBBhaQHNGxbhj7UlcdQx64E%2Bvk51lxPd%2FQF919grIDDrgju4I9vpGO6RhOYiVddvB%2BV5%2Bmgk3n1SbywtXqUKyxV%2B0MnOheX%2BsIvDQe2TFDup1TusCaYVEWVxQs5wk1lsuNujjCt88rCBjqkAS9TseJVaRo4V2GGKBfscvv5pATSVnk8z0yq%2FKk6IQtjxT4YLrn0aP3DGOT0cgvStg9N5QRD6SmXf9rzWAl5Sco%2B2LjGUv%2BJSXOXd7qV07jN5MQaW1w%2FWGyKMpsQdfjrGjbYth7HhVnHKHf1BQTu5ks9uaMMQFhbT1qtX0RM0%2F6wS9zb85fgSwB%2BrzUVp4nJ%2FvlyQMFuuYm%2BrmAN%2Fhuzfp9H1orx&X-Amz-Signature=25d5c79b3d365e2e0aa5b89714ec81d8235442a79264291f5058aba529b0bd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIAZBZ3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvFeTvaBKYGdrhw2rNVUEjZs0W50byx7PF5sBDd0L8QIhANBzGI5%2FIoi8Hj%2FU3IoIpo9MCt7hrxsCKplTN6%2BzsTm8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxkdNeNNsG6X0KzUq3ANclNvj1DxqCnfZkq%2BtnJ4IzTupmWt5bzPSJDxkT8Z9xAyVG97ZmGbAyaXKy2Prf5KV1zYz%2F1NaGx2WR7ue5VjGXB2azomW9BGV9jHbWxdJtLIPshkLqXnHE8hkJws3wIND46sXxfXnxrYC%2Fs2ZwnHqGBpNwCB1lw83U4p5Z%2BZduHoDGlcFjUX38PIMcCgaKZJmcB5V4cWvzlz52HuMWo39gZYezE3gc2L4nsJczEw0VnytbL8srZVznw9owLHoAOH9BxuxvFhqrSFwToxR7WzCzBeoDBBgjGdg23%2Fjrz3IhNqQtQTlHxlMHoG7J6%2BPmOQZCUf152m%2Fe%2BW9RDXo32DhJ0dA6V%2FsttVgFATNCEILCDgAvfxGAjSlTIFYTWE5BlTkIaUqJtmC9uit5Y88A4GFAZy5f3g0ZpQCrBz1iLR2zhALNzEETnK6HpEwF9z8TK3WIjBsoQMVmYYjaAUKz5wpGn2Adfg1ItvgmFkeJpkuP5eTMpVaoi4ceLBBhaQHNGxbhj7UlcdQx64E%2Bvk51lxPd%2FQF919grIDDrgju4I9vpGO6RhOYiVddvB%2BV5%2Bmgk3n1SbywtXqUKyxV%2B0MnOheX%2BsIvDQe2TFDup1TusCaYVEWVxQs5wk1lsuNujjCt88rCBjqkAS9TseJVaRo4V2GGKBfscvv5pATSVnk8z0yq%2FKk6IQtjxT4YLrn0aP3DGOT0cgvStg9N5QRD6SmXf9rzWAl5Sco%2B2LjGUv%2BJSXOXd7qV07jN5MQaW1w%2FWGyKMpsQdfjrGjbYth7HhVnHKHf1BQTu5ks9uaMMQFhbT1qtX0RM0%2F6wS9zb85fgSwB%2BrzUVp4nJ%2FvlyQMFuuYm%2BrmAN%2Fhuzfp9H1orx&X-Amz-Signature=cb61a563431e288b4e711502b8ed176cb855a408f370af65f2c435878b9b2a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIAZBZ3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvFeTvaBKYGdrhw2rNVUEjZs0W50byx7PF5sBDd0L8QIhANBzGI5%2FIoi8Hj%2FU3IoIpo9MCt7hrxsCKplTN6%2BzsTm8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxkdNeNNsG6X0KzUq3ANclNvj1DxqCnfZkq%2BtnJ4IzTupmWt5bzPSJDxkT8Z9xAyVG97ZmGbAyaXKy2Prf5KV1zYz%2F1NaGx2WR7ue5VjGXB2azomW9BGV9jHbWxdJtLIPshkLqXnHE8hkJws3wIND46sXxfXnxrYC%2Fs2ZwnHqGBpNwCB1lw83U4p5Z%2BZduHoDGlcFjUX38PIMcCgaKZJmcB5V4cWvzlz52HuMWo39gZYezE3gc2L4nsJczEw0VnytbL8srZVznw9owLHoAOH9BxuxvFhqrSFwToxR7WzCzBeoDBBgjGdg23%2Fjrz3IhNqQtQTlHxlMHoG7J6%2BPmOQZCUf152m%2Fe%2BW9RDXo32DhJ0dA6V%2FsttVgFATNCEILCDgAvfxGAjSlTIFYTWE5BlTkIaUqJtmC9uit5Y88A4GFAZy5f3g0ZpQCrBz1iLR2zhALNzEETnK6HpEwF9z8TK3WIjBsoQMVmYYjaAUKz5wpGn2Adfg1ItvgmFkeJpkuP5eTMpVaoi4ceLBBhaQHNGxbhj7UlcdQx64E%2Bvk51lxPd%2FQF919grIDDrgju4I9vpGO6RhOYiVddvB%2BV5%2Bmgk3n1SbywtXqUKyxV%2B0MnOheX%2BsIvDQe2TFDup1TusCaYVEWVxQs5wk1lsuNujjCt88rCBjqkAS9TseJVaRo4V2GGKBfscvv5pATSVnk8z0yq%2FKk6IQtjxT4YLrn0aP3DGOT0cgvStg9N5QRD6SmXf9rzWAl5Sco%2B2LjGUv%2BJSXOXd7qV07jN5MQaW1w%2FWGyKMpsQdfjrGjbYth7HhVnHKHf1BQTu5ks9uaMMQFhbT1qtX0RM0%2F6wS9zb85fgSwB%2BrzUVp4nJ%2FvlyQMFuuYm%2BrmAN%2Fhuzfp9H1orx&X-Amz-Signature=97b2ef1a3888e8c2504165b165a5ffbb850182a5acbf1631d69ec1318c261f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIAZBZ3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvFeTvaBKYGdrhw2rNVUEjZs0W50byx7PF5sBDd0L8QIhANBzGI5%2FIoi8Hj%2FU3IoIpo9MCt7hrxsCKplTN6%2BzsTm8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxkdNeNNsG6X0KzUq3ANclNvj1DxqCnfZkq%2BtnJ4IzTupmWt5bzPSJDxkT8Z9xAyVG97ZmGbAyaXKy2Prf5KV1zYz%2F1NaGx2WR7ue5VjGXB2azomW9BGV9jHbWxdJtLIPshkLqXnHE8hkJws3wIND46sXxfXnxrYC%2Fs2ZwnHqGBpNwCB1lw83U4p5Z%2BZduHoDGlcFjUX38PIMcCgaKZJmcB5V4cWvzlz52HuMWo39gZYezE3gc2L4nsJczEw0VnytbL8srZVznw9owLHoAOH9BxuxvFhqrSFwToxR7WzCzBeoDBBgjGdg23%2Fjrz3IhNqQtQTlHxlMHoG7J6%2BPmOQZCUf152m%2Fe%2BW9RDXo32DhJ0dA6V%2FsttVgFATNCEILCDgAvfxGAjSlTIFYTWE5BlTkIaUqJtmC9uit5Y88A4GFAZy5f3g0ZpQCrBz1iLR2zhALNzEETnK6HpEwF9z8TK3WIjBsoQMVmYYjaAUKz5wpGn2Adfg1ItvgmFkeJpkuP5eTMpVaoi4ceLBBhaQHNGxbhj7UlcdQx64E%2Bvk51lxPd%2FQF919grIDDrgju4I9vpGO6RhOYiVddvB%2BV5%2Bmgk3n1SbywtXqUKyxV%2B0MnOheX%2BsIvDQe2TFDup1TusCaYVEWVxQs5wk1lsuNujjCt88rCBjqkAS9TseJVaRo4V2GGKBfscvv5pATSVnk8z0yq%2FKk6IQtjxT4YLrn0aP3DGOT0cgvStg9N5QRD6SmXf9rzWAl5Sco%2B2LjGUv%2BJSXOXd7qV07jN5MQaW1w%2FWGyKMpsQdfjrGjbYth7HhVnHKHf1BQTu5ks9uaMMQFhbT1qtX0RM0%2F6wS9zb85fgSwB%2BrzUVp4nJ%2FvlyQMFuuYm%2BrmAN%2Fhuzfp9H1orx&X-Amz-Signature=a52e6efdbf1483ffd65c01984b485cbe060f18e532d48fc2a7275c25dabc0e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIAZBZ3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvFeTvaBKYGdrhw2rNVUEjZs0W50byx7PF5sBDd0L8QIhANBzGI5%2FIoi8Hj%2FU3IoIpo9MCt7hrxsCKplTN6%2BzsTm8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrxkdNeNNsG6X0KzUq3ANclNvj1DxqCnfZkq%2BtnJ4IzTupmWt5bzPSJDxkT8Z9xAyVG97ZmGbAyaXKy2Prf5KV1zYz%2F1NaGx2WR7ue5VjGXB2azomW9BGV9jHbWxdJtLIPshkLqXnHE8hkJws3wIND46sXxfXnxrYC%2Fs2ZwnHqGBpNwCB1lw83U4p5Z%2BZduHoDGlcFjUX38PIMcCgaKZJmcB5V4cWvzlz52HuMWo39gZYezE3gc2L4nsJczEw0VnytbL8srZVznw9owLHoAOH9BxuxvFhqrSFwToxR7WzCzBeoDBBgjGdg23%2Fjrz3IhNqQtQTlHxlMHoG7J6%2BPmOQZCUf152m%2Fe%2BW9RDXo32DhJ0dA6V%2FsttVgFATNCEILCDgAvfxGAjSlTIFYTWE5BlTkIaUqJtmC9uit5Y88A4GFAZy5f3g0ZpQCrBz1iLR2zhALNzEETnK6HpEwF9z8TK3WIjBsoQMVmYYjaAUKz5wpGn2Adfg1ItvgmFkeJpkuP5eTMpVaoi4ceLBBhaQHNGxbhj7UlcdQx64E%2Bvk51lxPd%2FQF919grIDDrgju4I9vpGO6RhOYiVddvB%2BV5%2Bmgk3n1SbywtXqUKyxV%2B0MnOheX%2BsIvDQe2TFDup1TusCaYVEWVxQs5wk1lsuNujjCt88rCBjqkAS9TseJVaRo4V2GGKBfscvv5pATSVnk8z0yq%2FKk6IQtjxT4YLrn0aP3DGOT0cgvStg9N5QRD6SmXf9rzWAl5Sco%2B2LjGUv%2BJSXOXd7qV07jN5MQaW1w%2FWGyKMpsQdfjrGjbYth7HhVnHKHf1BQTu5ks9uaMMQFhbT1qtX0RM0%2F6wS9zb85fgSwB%2BrzUVp4nJ%2FvlyQMFuuYm%2BrmAN%2Fhuzfp9H1orx&X-Amz-Signature=6c453d84679e97b57a1b9865fd2c26af18ce3ef25f62cd0c81ee625abd643dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
