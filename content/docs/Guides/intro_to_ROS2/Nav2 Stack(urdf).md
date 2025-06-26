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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIYDU3E%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCefgyFjMSRk2yN6ltt7uJ49lE4J8vMBcPprZmTN49H7gIhANQjuqGW%2BsKEic87BMszFkeadxVcctMJviGOp8qjpXL%2FKv8DCF8QABoMNjM3NDIzMTgzODA1Igy70aX6gHSgGD68cx4q3AMl5wahb8UGIcl81A3B%2FwkT3Pjyrs6DLNE%2FiQqd5tXUXpV1I3IPe7r%2FlokhrdkH0m6tQvvqpJWVCCQMrGS8NOOs%2B7MAplcHL803monWsAu%2Fb1Yq4gj7iZUOezuloJHPP2Zgwjg6%2FA%2FvB8EsehDcsS8p6C4uoevj1HMDnp1zkGw6ic5OE8bgLCerfMx8ovKbQccxinusRq1lg%2FHZCI5VnfTOlMOp7nF3MzZ0hRsnp5l%2Fq%2FufSS0pPNe4fH5fcoJw1BKzq%2BbkImNyrFjJV5t5MpuxQIyc%2B3srk4Gce3SMN%2FMf%2BC%2B%2Fw3Cd64tW99N%2Bmg9MHJDmmM91CiGGTqyIdcQGR%2Bh9YoFP5J7FsL1ze8u9VNrm7HBLGDqBmO87WlHF88QDRz2C8UJQU%2BBTmxbJ%2BYFoQyGhI5lB%2FH4jJ0Llw8wbSN6elhvjsXKEHj9QvAlQmEzwmCJAmQ14fR%2ByNnmB5mcgJ8xsjWkym%2BuNb23Rn0D64yJRGILySsJwGUsXNwBbd0svGmfewPoplLSGNhYN%2BIhdypyEc5owUtintu4xvlis23Xo4h5%2BCYT%2F727WcW7eQIrnUvgUWPex3jnmk3SxBoUHwDoFXOmp2sXuebYWj7f7NREzMr%2FcjJvNPh4Sp9wIGzCfnfXCBjqkAT%2F%2FwlVn7LL8%2FunAAJ5u69fJuqfu6qnNsC2yc6IxEd0DvNeZ256zj%2FmtS9ivfYryD9JW6Rf1P4zwdatpbTvGnLZ077McZ%2FVsAzHXwS3EZqS9%2BiVlExtNM7CUBJCrKFNNsyUlXvJ97jbRtjbe4KoRx7Q1HFh0%2BcEiNYeZqejX%2BMS9iu6RZpS8py4Ou4BlYnTuIyXuAZysx%2Bt8BSGley9RD1vYz7%2BF&X-Amz-Signature=d00843c2be88fc2f54069c50a1a47a709fbbab588b9be8d0afb85990dcbddf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIYDU3E%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCefgyFjMSRk2yN6ltt7uJ49lE4J8vMBcPprZmTN49H7gIhANQjuqGW%2BsKEic87BMszFkeadxVcctMJviGOp8qjpXL%2FKv8DCF8QABoMNjM3NDIzMTgzODA1Igy70aX6gHSgGD68cx4q3AMl5wahb8UGIcl81A3B%2FwkT3Pjyrs6DLNE%2FiQqd5tXUXpV1I3IPe7r%2FlokhrdkH0m6tQvvqpJWVCCQMrGS8NOOs%2B7MAplcHL803monWsAu%2Fb1Yq4gj7iZUOezuloJHPP2Zgwjg6%2FA%2FvB8EsehDcsS8p6C4uoevj1HMDnp1zkGw6ic5OE8bgLCerfMx8ovKbQccxinusRq1lg%2FHZCI5VnfTOlMOp7nF3MzZ0hRsnp5l%2Fq%2FufSS0pPNe4fH5fcoJw1BKzq%2BbkImNyrFjJV5t5MpuxQIyc%2B3srk4Gce3SMN%2FMf%2BC%2B%2Fw3Cd64tW99N%2Bmg9MHJDmmM91CiGGTqyIdcQGR%2Bh9YoFP5J7FsL1ze8u9VNrm7HBLGDqBmO87WlHF88QDRz2C8UJQU%2BBTmxbJ%2BYFoQyGhI5lB%2FH4jJ0Llw8wbSN6elhvjsXKEHj9QvAlQmEzwmCJAmQ14fR%2ByNnmB5mcgJ8xsjWkym%2BuNb23Rn0D64yJRGILySsJwGUsXNwBbd0svGmfewPoplLSGNhYN%2BIhdypyEc5owUtintu4xvlis23Xo4h5%2BCYT%2F727WcW7eQIrnUvgUWPex3jnmk3SxBoUHwDoFXOmp2sXuebYWj7f7NREzMr%2FcjJvNPh4Sp9wIGzCfnfXCBjqkAT%2F%2FwlVn7LL8%2FunAAJ5u69fJuqfu6qnNsC2yc6IxEd0DvNeZ256zj%2FmtS9ivfYryD9JW6Rf1P4zwdatpbTvGnLZ077McZ%2FVsAzHXwS3EZqS9%2BiVlExtNM7CUBJCrKFNNsyUlXvJ97jbRtjbe4KoRx7Q1HFh0%2BcEiNYeZqejX%2BMS9iu6RZpS8py4Ou4BlYnTuIyXuAZysx%2Bt8BSGley9RD1vYz7%2BF&X-Amz-Signature=22caeeb27d691cec182270e1566b649a5e4a406571de045cb8987d8156cf0ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIYDU3E%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCefgyFjMSRk2yN6ltt7uJ49lE4J8vMBcPprZmTN49H7gIhANQjuqGW%2BsKEic87BMszFkeadxVcctMJviGOp8qjpXL%2FKv8DCF8QABoMNjM3NDIzMTgzODA1Igy70aX6gHSgGD68cx4q3AMl5wahb8UGIcl81A3B%2FwkT3Pjyrs6DLNE%2FiQqd5tXUXpV1I3IPe7r%2FlokhrdkH0m6tQvvqpJWVCCQMrGS8NOOs%2B7MAplcHL803monWsAu%2Fb1Yq4gj7iZUOezuloJHPP2Zgwjg6%2FA%2FvB8EsehDcsS8p6C4uoevj1HMDnp1zkGw6ic5OE8bgLCerfMx8ovKbQccxinusRq1lg%2FHZCI5VnfTOlMOp7nF3MzZ0hRsnp5l%2Fq%2FufSS0pPNe4fH5fcoJw1BKzq%2BbkImNyrFjJV5t5MpuxQIyc%2B3srk4Gce3SMN%2FMf%2BC%2B%2Fw3Cd64tW99N%2Bmg9MHJDmmM91CiGGTqyIdcQGR%2Bh9YoFP5J7FsL1ze8u9VNrm7HBLGDqBmO87WlHF88QDRz2C8UJQU%2BBTmxbJ%2BYFoQyGhI5lB%2FH4jJ0Llw8wbSN6elhvjsXKEHj9QvAlQmEzwmCJAmQ14fR%2ByNnmB5mcgJ8xsjWkym%2BuNb23Rn0D64yJRGILySsJwGUsXNwBbd0svGmfewPoplLSGNhYN%2BIhdypyEc5owUtintu4xvlis23Xo4h5%2BCYT%2F727WcW7eQIrnUvgUWPex3jnmk3SxBoUHwDoFXOmp2sXuebYWj7f7NREzMr%2FcjJvNPh4Sp9wIGzCfnfXCBjqkAT%2F%2FwlVn7LL8%2FunAAJ5u69fJuqfu6qnNsC2yc6IxEd0DvNeZ256zj%2FmtS9ivfYryD9JW6Rf1P4zwdatpbTvGnLZ077McZ%2FVsAzHXwS3EZqS9%2BiVlExtNM7CUBJCrKFNNsyUlXvJ97jbRtjbe4KoRx7Q1HFh0%2BcEiNYeZqejX%2BMS9iu6RZpS8py4Ou4BlYnTuIyXuAZysx%2Bt8BSGley9RD1vYz7%2BF&X-Amz-Signature=384eef8e2b81f12d23e524f5f6241270598aed935d2e0685f2729f9d01bfd0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIYDU3E%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCefgyFjMSRk2yN6ltt7uJ49lE4J8vMBcPprZmTN49H7gIhANQjuqGW%2BsKEic87BMszFkeadxVcctMJviGOp8qjpXL%2FKv8DCF8QABoMNjM3NDIzMTgzODA1Igy70aX6gHSgGD68cx4q3AMl5wahb8UGIcl81A3B%2FwkT3Pjyrs6DLNE%2FiQqd5tXUXpV1I3IPe7r%2FlokhrdkH0m6tQvvqpJWVCCQMrGS8NOOs%2B7MAplcHL803monWsAu%2Fb1Yq4gj7iZUOezuloJHPP2Zgwjg6%2FA%2FvB8EsehDcsS8p6C4uoevj1HMDnp1zkGw6ic5OE8bgLCerfMx8ovKbQccxinusRq1lg%2FHZCI5VnfTOlMOp7nF3MzZ0hRsnp5l%2Fq%2FufSS0pPNe4fH5fcoJw1BKzq%2BbkImNyrFjJV5t5MpuxQIyc%2B3srk4Gce3SMN%2FMf%2BC%2B%2Fw3Cd64tW99N%2Bmg9MHJDmmM91CiGGTqyIdcQGR%2Bh9YoFP5J7FsL1ze8u9VNrm7HBLGDqBmO87WlHF88QDRz2C8UJQU%2BBTmxbJ%2BYFoQyGhI5lB%2FH4jJ0Llw8wbSN6elhvjsXKEHj9QvAlQmEzwmCJAmQ14fR%2ByNnmB5mcgJ8xsjWkym%2BuNb23Rn0D64yJRGILySsJwGUsXNwBbd0svGmfewPoplLSGNhYN%2BIhdypyEc5owUtintu4xvlis23Xo4h5%2BCYT%2F727WcW7eQIrnUvgUWPex3jnmk3SxBoUHwDoFXOmp2sXuebYWj7f7NREzMr%2FcjJvNPh4Sp9wIGzCfnfXCBjqkAT%2F%2FwlVn7LL8%2FunAAJ5u69fJuqfu6qnNsC2yc6IxEd0DvNeZ256zj%2FmtS9ivfYryD9JW6Rf1P4zwdatpbTvGnLZ077McZ%2FVsAzHXwS3EZqS9%2BiVlExtNM7CUBJCrKFNNsyUlXvJ97jbRtjbe4KoRx7Q1HFh0%2BcEiNYeZqejX%2BMS9iu6RZpS8py4Ou4BlYnTuIyXuAZysx%2Bt8BSGley9RD1vYz7%2BF&X-Amz-Signature=a5d13c06155937375764f7e6e44a00147e8230ea7e689d4caa0600d7eccd937b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIYDU3E%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCefgyFjMSRk2yN6ltt7uJ49lE4J8vMBcPprZmTN49H7gIhANQjuqGW%2BsKEic87BMszFkeadxVcctMJviGOp8qjpXL%2FKv8DCF8QABoMNjM3NDIzMTgzODA1Igy70aX6gHSgGD68cx4q3AMl5wahb8UGIcl81A3B%2FwkT3Pjyrs6DLNE%2FiQqd5tXUXpV1I3IPe7r%2FlokhrdkH0m6tQvvqpJWVCCQMrGS8NOOs%2B7MAplcHL803monWsAu%2Fb1Yq4gj7iZUOezuloJHPP2Zgwjg6%2FA%2FvB8EsehDcsS8p6C4uoevj1HMDnp1zkGw6ic5OE8bgLCerfMx8ovKbQccxinusRq1lg%2FHZCI5VnfTOlMOp7nF3MzZ0hRsnp5l%2Fq%2FufSS0pPNe4fH5fcoJw1BKzq%2BbkImNyrFjJV5t5MpuxQIyc%2B3srk4Gce3SMN%2FMf%2BC%2B%2Fw3Cd64tW99N%2Bmg9MHJDmmM91CiGGTqyIdcQGR%2Bh9YoFP5J7FsL1ze8u9VNrm7HBLGDqBmO87WlHF88QDRz2C8UJQU%2BBTmxbJ%2BYFoQyGhI5lB%2FH4jJ0Llw8wbSN6elhvjsXKEHj9QvAlQmEzwmCJAmQ14fR%2ByNnmB5mcgJ8xsjWkym%2BuNb23Rn0D64yJRGILySsJwGUsXNwBbd0svGmfewPoplLSGNhYN%2BIhdypyEc5owUtintu4xvlis23Xo4h5%2BCYT%2F727WcW7eQIrnUvgUWPex3jnmk3SxBoUHwDoFXOmp2sXuebYWj7f7NREzMr%2FcjJvNPh4Sp9wIGzCfnfXCBjqkAT%2F%2FwlVn7LL8%2FunAAJ5u69fJuqfu6qnNsC2yc6IxEd0DvNeZ256zj%2FmtS9ivfYryD9JW6Rf1P4zwdatpbTvGnLZ077McZ%2FVsAzHXwS3EZqS9%2BiVlExtNM7CUBJCrKFNNsyUlXvJ97jbRtjbe4KoRx7Q1HFh0%2BcEiNYeZqejX%2BMS9iu6RZpS8py4Ou4BlYnTuIyXuAZysx%2Bt8BSGley9RD1vYz7%2BF&X-Amz-Signature=dade7d0130a58a3091b75c4fa33ab0bf9a655241bb5985d9ee076d8d98b5d2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIYDU3E%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCefgyFjMSRk2yN6ltt7uJ49lE4J8vMBcPprZmTN49H7gIhANQjuqGW%2BsKEic87BMszFkeadxVcctMJviGOp8qjpXL%2FKv8DCF8QABoMNjM3NDIzMTgzODA1Igy70aX6gHSgGD68cx4q3AMl5wahb8UGIcl81A3B%2FwkT3Pjyrs6DLNE%2FiQqd5tXUXpV1I3IPe7r%2FlokhrdkH0m6tQvvqpJWVCCQMrGS8NOOs%2B7MAplcHL803monWsAu%2Fb1Yq4gj7iZUOezuloJHPP2Zgwjg6%2FA%2FvB8EsehDcsS8p6C4uoevj1HMDnp1zkGw6ic5OE8bgLCerfMx8ovKbQccxinusRq1lg%2FHZCI5VnfTOlMOp7nF3MzZ0hRsnp5l%2Fq%2FufSS0pPNe4fH5fcoJw1BKzq%2BbkImNyrFjJV5t5MpuxQIyc%2B3srk4Gce3SMN%2FMf%2BC%2B%2Fw3Cd64tW99N%2Bmg9MHJDmmM91CiGGTqyIdcQGR%2Bh9YoFP5J7FsL1ze8u9VNrm7HBLGDqBmO87WlHF88QDRz2C8UJQU%2BBTmxbJ%2BYFoQyGhI5lB%2FH4jJ0Llw8wbSN6elhvjsXKEHj9QvAlQmEzwmCJAmQ14fR%2ByNnmB5mcgJ8xsjWkym%2BuNb23Rn0D64yJRGILySsJwGUsXNwBbd0svGmfewPoplLSGNhYN%2BIhdypyEc5owUtintu4xvlis23Xo4h5%2BCYT%2F727WcW7eQIrnUvgUWPex3jnmk3SxBoUHwDoFXOmp2sXuebYWj7f7NREzMr%2FcjJvNPh4Sp9wIGzCfnfXCBjqkAT%2F%2FwlVn7LL8%2FunAAJ5u69fJuqfu6qnNsC2yc6IxEd0DvNeZ256zj%2FmtS9ivfYryD9JW6Rf1P4zwdatpbTvGnLZ077McZ%2FVsAzHXwS3EZqS9%2BiVlExtNM7CUBJCrKFNNsyUlXvJ97jbRtjbe4KoRx7Q1HFh0%2BcEiNYeZqejX%2BMS9iu6RZpS8py4Ou4BlYnTuIyXuAZysx%2Bt8BSGley9RD1vYz7%2BF&X-Amz-Signature=83363957e8b4504bcfebdcd13ffe40ee473f35e7a12d3909322aa92c260a3529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
