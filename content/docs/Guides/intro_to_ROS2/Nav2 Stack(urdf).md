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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBOYZMQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbXTj4HTCLxDaEFkIl7o7WdWfqSyiA3ncGwSL5ZECTwIhALGrrVmyl2bfj%2BcZO3sKxQffI2gzxQAtIqvWIDluPgX%2BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdBaIYIbbIxau%2FUnYq3AP7PNFLDVmKc%2BG4%2FqQ4bafBnXWzOR81H7qM6tBe%2FF5VT5Q1lYHWPRX6CSuqJqoITU%2FHn8qPPdFFfKROQYz6kSOsykrsgMKpXh2rXgcsgywoBubo7uqQQ6VTDPAP%2FCqGA%2B%2FsfSSyo1z8O5LqTfOpS8Rcrl%2B3Mj1OOIqy9dPV0WtA9AQAywRO4p%2FYtjYtnLqgwrwudRHUrv9ZBTnPm3CW85eh5n8DAzlCUY2gsX3QY7xarWsiXwh2yYTRZ%2FTtGpXnNjgBXpgeU55j3LQBlCbq5J7EFW1Ovab6tLpDFHr241rl4zIaXkNS2Pt7kMC8LUpT8p5ezRRMgt2Ml%2BRah7%2F2RHHDqIuOyKkeLKxqiuZ4HGjSlCGW%2BKhN9Q0sQIW6LZG9fy3j1WNOo%2F5NMxIQsDnPbY5yrAp47V85P4P6spAHy3axJbFSEUv1HWU2T0AdudTPY2wcJJMedLcOo6mW6p%2FLwAW%2Bj5Ddalv7Xl9Q0FpuU%2Bu%2F2681UNFBNO3VvEsrNkzNDPSeMl5JUEtf4hCw7shvvHJssY6GJO6lIXBjhAHWZ8a3lt1k5fqXL%2BgEFcb7qPm1VCSSJAHHmosPirbD9rG6O9BJvYw6TL4HZntFz%2FLvPKUovSv64sQNqN%2BdL479xDD5kdy9BjqkAaQMluJO%2BfAdeTwqP4GzdNA%2FeQY7BqO8TskegYwxZyzIRHiODpADPsjnjfnjCJlOMpqzPc5DnmMdUCRy3jhZAQKV6%2FRGoC1kkANqr3Lfo728QewEYknBGvCtNNiK%2Fazhbdg%2Fq4pUba3G8j9yF0EDfND6rqpoDzh28qcBHgJJB0OFyvoT2vUTuWRR9ZiKH0SdT2o9fAkl47EuSZb0J5k4adxDxwNi&X-Amz-Signature=0a354219e679605b3899c2b0d3c10e70aa58a7bd5dff2c7b3f2783c4f419c653&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBOYZMQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbXTj4HTCLxDaEFkIl7o7WdWfqSyiA3ncGwSL5ZECTwIhALGrrVmyl2bfj%2BcZO3sKxQffI2gzxQAtIqvWIDluPgX%2BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdBaIYIbbIxau%2FUnYq3AP7PNFLDVmKc%2BG4%2FqQ4bafBnXWzOR81H7qM6tBe%2FF5VT5Q1lYHWPRX6CSuqJqoITU%2FHn8qPPdFFfKROQYz6kSOsykrsgMKpXh2rXgcsgywoBubo7uqQQ6VTDPAP%2FCqGA%2B%2FsfSSyo1z8O5LqTfOpS8Rcrl%2B3Mj1OOIqy9dPV0WtA9AQAywRO4p%2FYtjYtnLqgwrwudRHUrv9ZBTnPm3CW85eh5n8DAzlCUY2gsX3QY7xarWsiXwh2yYTRZ%2FTtGpXnNjgBXpgeU55j3LQBlCbq5J7EFW1Ovab6tLpDFHr241rl4zIaXkNS2Pt7kMC8LUpT8p5ezRRMgt2Ml%2BRah7%2F2RHHDqIuOyKkeLKxqiuZ4HGjSlCGW%2BKhN9Q0sQIW6LZG9fy3j1WNOo%2F5NMxIQsDnPbY5yrAp47V85P4P6spAHy3axJbFSEUv1HWU2T0AdudTPY2wcJJMedLcOo6mW6p%2FLwAW%2Bj5Ddalv7Xl9Q0FpuU%2Bu%2F2681UNFBNO3VvEsrNkzNDPSeMl5JUEtf4hCw7shvvHJssY6GJO6lIXBjhAHWZ8a3lt1k5fqXL%2BgEFcb7qPm1VCSSJAHHmosPirbD9rG6O9BJvYw6TL4HZntFz%2FLvPKUovSv64sQNqN%2BdL479xDD5kdy9BjqkAaQMluJO%2BfAdeTwqP4GzdNA%2FeQY7BqO8TskegYwxZyzIRHiODpADPsjnjfnjCJlOMpqzPc5DnmMdUCRy3jhZAQKV6%2FRGoC1kkANqr3Lfo728QewEYknBGvCtNNiK%2Fazhbdg%2Fq4pUba3G8j9yF0EDfND6rqpoDzh28qcBHgJJB0OFyvoT2vUTuWRR9ZiKH0SdT2o9fAkl47EuSZb0J5k4adxDxwNi&X-Amz-Signature=40958b2f18a297e8662dd41e6a753785d957a3926153e7ac957cdae1911aa711&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBOYZMQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbXTj4HTCLxDaEFkIl7o7WdWfqSyiA3ncGwSL5ZECTwIhALGrrVmyl2bfj%2BcZO3sKxQffI2gzxQAtIqvWIDluPgX%2BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdBaIYIbbIxau%2FUnYq3AP7PNFLDVmKc%2BG4%2FqQ4bafBnXWzOR81H7qM6tBe%2FF5VT5Q1lYHWPRX6CSuqJqoITU%2FHn8qPPdFFfKROQYz6kSOsykrsgMKpXh2rXgcsgywoBubo7uqQQ6VTDPAP%2FCqGA%2B%2FsfSSyo1z8O5LqTfOpS8Rcrl%2B3Mj1OOIqy9dPV0WtA9AQAywRO4p%2FYtjYtnLqgwrwudRHUrv9ZBTnPm3CW85eh5n8DAzlCUY2gsX3QY7xarWsiXwh2yYTRZ%2FTtGpXnNjgBXpgeU55j3LQBlCbq5J7EFW1Ovab6tLpDFHr241rl4zIaXkNS2Pt7kMC8LUpT8p5ezRRMgt2Ml%2BRah7%2F2RHHDqIuOyKkeLKxqiuZ4HGjSlCGW%2BKhN9Q0sQIW6LZG9fy3j1WNOo%2F5NMxIQsDnPbY5yrAp47V85P4P6spAHy3axJbFSEUv1HWU2T0AdudTPY2wcJJMedLcOo6mW6p%2FLwAW%2Bj5Ddalv7Xl9Q0FpuU%2Bu%2F2681UNFBNO3VvEsrNkzNDPSeMl5JUEtf4hCw7shvvHJssY6GJO6lIXBjhAHWZ8a3lt1k5fqXL%2BgEFcb7qPm1VCSSJAHHmosPirbD9rG6O9BJvYw6TL4HZntFz%2FLvPKUovSv64sQNqN%2BdL479xDD5kdy9BjqkAaQMluJO%2BfAdeTwqP4GzdNA%2FeQY7BqO8TskegYwxZyzIRHiODpADPsjnjfnjCJlOMpqzPc5DnmMdUCRy3jhZAQKV6%2FRGoC1kkANqr3Lfo728QewEYknBGvCtNNiK%2Fazhbdg%2Fq4pUba3G8j9yF0EDfND6rqpoDzh28qcBHgJJB0OFyvoT2vUTuWRR9ZiKH0SdT2o9fAkl47EuSZb0J5k4adxDxwNi&X-Amz-Signature=7740b1c5b0c628fe29f65fa296b99cbe93ba0d03def697dc8fe6159b48c30d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBOYZMQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbXTj4HTCLxDaEFkIl7o7WdWfqSyiA3ncGwSL5ZECTwIhALGrrVmyl2bfj%2BcZO3sKxQffI2gzxQAtIqvWIDluPgX%2BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdBaIYIbbIxau%2FUnYq3AP7PNFLDVmKc%2BG4%2FqQ4bafBnXWzOR81H7qM6tBe%2FF5VT5Q1lYHWPRX6CSuqJqoITU%2FHn8qPPdFFfKROQYz6kSOsykrsgMKpXh2rXgcsgywoBubo7uqQQ6VTDPAP%2FCqGA%2B%2FsfSSyo1z8O5LqTfOpS8Rcrl%2B3Mj1OOIqy9dPV0WtA9AQAywRO4p%2FYtjYtnLqgwrwudRHUrv9ZBTnPm3CW85eh5n8DAzlCUY2gsX3QY7xarWsiXwh2yYTRZ%2FTtGpXnNjgBXpgeU55j3LQBlCbq5J7EFW1Ovab6tLpDFHr241rl4zIaXkNS2Pt7kMC8LUpT8p5ezRRMgt2Ml%2BRah7%2F2RHHDqIuOyKkeLKxqiuZ4HGjSlCGW%2BKhN9Q0sQIW6LZG9fy3j1WNOo%2F5NMxIQsDnPbY5yrAp47V85P4P6spAHy3axJbFSEUv1HWU2T0AdudTPY2wcJJMedLcOo6mW6p%2FLwAW%2Bj5Ddalv7Xl9Q0FpuU%2Bu%2F2681UNFBNO3VvEsrNkzNDPSeMl5JUEtf4hCw7shvvHJssY6GJO6lIXBjhAHWZ8a3lt1k5fqXL%2BgEFcb7qPm1VCSSJAHHmosPirbD9rG6O9BJvYw6TL4HZntFz%2FLvPKUovSv64sQNqN%2BdL479xDD5kdy9BjqkAaQMluJO%2BfAdeTwqP4GzdNA%2FeQY7BqO8TskegYwxZyzIRHiODpADPsjnjfnjCJlOMpqzPc5DnmMdUCRy3jhZAQKV6%2FRGoC1kkANqr3Lfo728QewEYknBGvCtNNiK%2Fazhbdg%2Fq4pUba3G8j9yF0EDfND6rqpoDzh28qcBHgJJB0OFyvoT2vUTuWRR9ZiKH0SdT2o9fAkl47EuSZb0J5k4adxDxwNi&X-Amz-Signature=895389df58908621f65145ccfdd1816ed4f81fa30edad49db31abdb8349c21d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBOYZMQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbXTj4HTCLxDaEFkIl7o7WdWfqSyiA3ncGwSL5ZECTwIhALGrrVmyl2bfj%2BcZO3sKxQffI2gzxQAtIqvWIDluPgX%2BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdBaIYIbbIxau%2FUnYq3AP7PNFLDVmKc%2BG4%2FqQ4bafBnXWzOR81H7qM6tBe%2FF5VT5Q1lYHWPRX6CSuqJqoITU%2FHn8qPPdFFfKROQYz6kSOsykrsgMKpXh2rXgcsgywoBubo7uqQQ6VTDPAP%2FCqGA%2B%2FsfSSyo1z8O5LqTfOpS8Rcrl%2B3Mj1OOIqy9dPV0WtA9AQAywRO4p%2FYtjYtnLqgwrwudRHUrv9ZBTnPm3CW85eh5n8DAzlCUY2gsX3QY7xarWsiXwh2yYTRZ%2FTtGpXnNjgBXpgeU55j3LQBlCbq5J7EFW1Ovab6tLpDFHr241rl4zIaXkNS2Pt7kMC8LUpT8p5ezRRMgt2Ml%2BRah7%2F2RHHDqIuOyKkeLKxqiuZ4HGjSlCGW%2BKhN9Q0sQIW6LZG9fy3j1WNOo%2F5NMxIQsDnPbY5yrAp47V85P4P6spAHy3axJbFSEUv1HWU2T0AdudTPY2wcJJMedLcOo6mW6p%2FLwAW%2Bj5Ddalv7Xl9Q0FpuU%2Bu%2F2681UNFBNO3VvEsrNkzNDPSeMl5JUEtf4hCw7shvvHJssY6GJO6lIXBjhAHWZ8a3lt1k5fqXL%2BgEFcb7qPm1VCSSJAHHmosPirbD9rG6O9BJvYw6TL4HZntFz%2FLvPKUovSv64sQNqN%2BdL479xDD5kdy9BjqkAaQMluJO%2BfAdeTwqP4GzdNA%2FeQY7BqO8TskegYwxZyzIRHiODpADPsjnjfnjCJlOMpqzPc5DnmMdUCRy3jhZAQKV6%2FRGoC1kkANqr3Lfo728QewEYknBGvCtNNiK%2Fazhbdg%2Fq4pUba3G8j9yF0EDfND6rqpoDzh28qcBHgJJB0OFyvoT2vUTuWRR9ZiKH0SdT2o9fAkl47EuSZb0J5k4adxDxwNi&X-Amz-Signature=0954d031cca9d7267276161202815bc688c8896906e1e4d732d4033609ff7a01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBOYZMQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZbXTj4HTCLxDaEFkIl7o7WdWfqSyiA3ncGwSL5ZECTwIhALGrrVmyl2bfj%2BcZO3sKxQffI2gzxQAtIqvWIDluPgX%2BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdBaIYIbbIxau%2FUnYq3AP7PNFLDVmKc%2BG4%2FqQ4bafBnXWzOR81H7qM6tBe%2FF5VT5Q1lYHWPRX6CSuqJqoITU%2FHn8qPPdFFfKROQYz6kSOsykrsgMKpXh2rXgcsgywoBubo7uqQQ6VTDPAP%2FCqGA%2B%2FsfSSyo1z8O5LqTfOpS8Rcrl%2B3Mj1OOIqy9dPV0WtA9AQAywRO4p%2FYtjYtnLqgwrwudRHUrv9ZBTnPm3CW85eh5n8DAzlCUY2gsX3QY7xarWsiXwh2yYTRZ%2FTtGpXnNjgBXpgeU55j3LQBlCbq5J7EFW1Ovab6tLpDFHr241rl4zIaXkNS2Pt7kMC8LUpT8p5ezRRMgt2Ml%2BRah7%2F2RHHDqIuOyKkeLKxqiuZ4HGjSlCGW%2BKhN9Q0sQIW6LZG9fy3j1WNOo%2F5NMxIQsDnPbY5yrAp47V85P4P6spAHy3axJbFSEUv1HWU2T0AdudTPY2wcJJMedLcOo6mW6p%2FLwAW%2Bj5Ddalv7Xl9Q0FpuU%2Bu%2F2681UNFBNO3VvEsrNkzNDPSeMl5JUEtf4hCw7shvvHJssY6GJO6lIXBjhAHWZ8a3lt1k5fqXL%2BgEFcb7qPm1VCSSJAHHmosPirbD9rG6O9BJvYw6TL4HZntFz%2FLvPKUovSv64sQNqN%2BdL479xDD5kdy9BjqkAaQMluJO%2BfAdeTwqP4GzdNA%2FeQY7BqO8TskegYwxZyzIRHiODpADPsjnjfnjCJlOMpqzPc5DnmMdUCRy3jhZAQKV6%2FRGoC1kkANqr3Lfo728QewEYknBGvCtNNiK%2Fazhbdg%2Fq4pUba3G8j9yF0EDfND6rqpoDzh28qcBHgJJB0OFyvoT2vUTuWRR9ZiKH0SdT2o9fAkl47EuSZb0J5k4adxDxwNi&X-Amz-Signature=22fd3c81dc5819df75ab9cb4817be304dfc6403d0fbe80a95a0c56b65056927d&X-Amz-SignedHeaders=host&x-id=GetObject)
