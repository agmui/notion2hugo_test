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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIHELDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7bnHMQmRvj%2F9DyMP9aRUBt0Lo5WHwew%2BeBnz0yrOpZAIhAMw7ftFVdgFNYGqsNuKn3%2FTow5XcFcIhPlWFlpfOEK24Kv8DCB0QABoMNjM3NDIzMTgzODA1Igx5EukBgfE0TOGVMj0q3AMfBd8CVdG52ryZAe7uz8YlJVWsZUoDoHXLLYwXmjOPD2h9SxfNehpBU6X%2Botmi2c9FVSZzLtFWbz8ewaBnXSfgyRaeVM3cbHCw%2FnUV6Nw7ptqErMW9V8FwApTaJ2CGopEUdVrtCLKmWpaLtIumlksM75mW7Tq9XHPexzXk1kcS30Q6SEoeIAXpQe1L5pquG1sfA8vu0iVp1pfwSfnWhx8U7Zr4ErSP3TUyJzrBS2SYlZg2FiPR9EZjnXni8HwfzmJE6wHsrwFE1WzS7zuhkR9N%2Fp%2FNjnMweTezsucNAneXt4E3QccbdqyY2ITwdyq8hE8%2BAEXhHtw53tpOOmfrFBoaUAyrvbc2%2FYneeHNKNTbIn3EmorUuUfN9MTpjT19h1zTDcBXoDPWj211A8lttepmLcU4DX1EDgt8d6htgMkJGR7Ku%2BOmSJYudW6KIf2fWpa6UIxeD7B4X923wa7IpvvCMkBpvIqSW3AgnAY3vyzFh1Q8LVuxjRE00Nte7x%2BrsWCKB2gYysAJZcvaBg0EwFdHIY3GdLShDP7bwqs0WZECtPhPTJTqqtUTElvBPQvU3gnagPGPnFL50NzKmohVKuvEm8yAz9u%2FpFLR0Es5qTQh4wKMRCj8uZEZ7zTrbsDDs7ebCBjqkAXe5YRMq4fza8Tt6RjqdnS8VWR8aVb81M1ypraOGCM1ugyko3QSVGARzOBBQRaJ7q4cyeHJa96DLOLJuFCEXMI2nfeg%2BvHHRFQNW1kJTXuSwTU%2FanSrKwKZT0VyqrQPFjEVITvYhF%2FN4XYh8pyyrXHFxlMbX%2BgTRP4eil8uOoBuschPXDKfXb3M36BBe4vrr4wz%2BywxdyLrqOZ6suZocXNoSfRhB&X-Amz-Signature=72404327b983763fc1f1d764252ed2cbdd868a8d93efb9131c0a3b65c9450135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIHELDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7bnHMQmRvj%2F9DyMP9aRUBt0Lo5WHwew%2BeBnz0yrOpZAIhAMw7ftFVdgFNYGqsNuKn3%2FTow5XcFcIhPlWFlpfOEK24Kv8DCB0QABoMNjM3NDIzMTgzODA1Igx5EukBgfE0TOGVMj0q3AMfBd8CVdG52ryZAe7uz8YlJVWsZUoDoHXLLYwXmjOPD2h9SxfNehpBU6X%2Botmi2c9FVSZzLtFWbz8ewaBnXSfgyRaeVM3cbHCw%2FnUV6Nw7ptqErMW9V8FwApTaJ2CGopEUdVrtCLKmWpaLtIumlksM75mW7Tq9XHPexzXk1kcS30Q6SEoeIAXpQe1L5pquG1sfA8vu0iVp1pfwSfnWhx8U7Zr4ErSP3TUyJzrBS2SYlZg2FiPR9EZjnXni8HwfzmJE6wHsrwFE1WzS7zuhkR9N%2Fp%2FNjnMweTezsucNAneXt4E3QccbdqyY2ITwdyq8hE8%2BAEXhHtw53tpOOmfrFBoaUAyrvbc2%2FYneeHNKNTbIn3EmorUuUfN9MTpjT19h1zTDcBXoDPWj211A8lttepmLcU4DX1EDgt8d6htgMkJGR7Ku%2BOmSJYudW6KIf2fWpa6UIxeD7B4X923wa7IpvvCMkBpvIqSW3AgnAY3vyzFh1Q8LVuxjRE00Nte7x%2BrsWCKB2gYysAJZcvaBg0EwFdHIY3GdLShDP7bwqs0WZECtPhPTJTqqtUTElvBPQvU3gnagPGPnFL50NzKmohVKuvEm8yAz9u%2FpFLR0Es5qTQh4wKMRCj8uZEZ7zTrbsDDs7ebCBjqkAXe5YRMq4fza8Tt6RjqdnS8VWR8aVb81M1ypraOGCM1ugyko3QSVGARzOBBQRaJ7q4cyeHJa96DLOLJuFCEXMI2nfeg%2BvHHRFQNW1kJTXuSwTU%2FanSrKwKZT0VyqrQPFjEVITvYhF%2FN4XYh8pyyrXHFxlMbX%2BgTRP4eil8uOoBuschPXDKfXb3M36BBe4vrr4wz%2BywxdyLrqOZ6suZocXNoSfRhB&X-Amz-Signature=1cbca726985849ab943a5f1d230370b00b9a2416bda4ed1fa26b4ca0079db06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIHELDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7bnHMQmRvj%2F9DyMP9aRUBt0Lo5WHwew%2BeBnz0yrOpZAIhAMw7ftFVdgFNYGqsNuKn3%2FTow5XcFcIhPlWFlpfOEK24Kv8DCB0QABoMNjM3NDIzMTgzODA1Igx5EukBgfE0TOGVMj0q3AMfBd8CVdG52ryZAe7uz8YlJVWsZUoDoHXLLYwXmjOPD2h9SxfNehpBU6X%2Botmi2c9FVSZzLtFWbz8ewaBnXSfgyRaeVM3cbHCw%2FnUV6Nw7ptqErMW9V8FwApTaJ2CGopEUdVrtCLKmWpaLtIumlksM75mW7Tq9XHPexzXk1kcS30Q6SEoeIAXpQe1L5pquG1sfA8vu0iVp1pfwSfnWhx8U7Zr4ErSP3TUyJzrBS2SYlZg2FiPR9EZjnXni8HwfzmJE6wHsrwFE1WzS7zuhkR9N%2Fp%2FNjnMweTezsucNAneXt4E3QccbdqyY2ITwdyq8hE8%2BAEXhHtw53tpOOmfrFBoaUAyrvbc2%2FYneeHNKNTbIn3EmorUuUfN9MTpjT19h1zTDcBXoDPWj211A8lttepmLcU4DX1EDgt8d6htgMkJGR7Ku%2BOmSJYudW6KIf2fWpa6UIxeD7B4X923wa7IpvvCMkBpvIqSW3AgnAY3vyzFh1Q8LVuxjRE00Nte7x%2BrsWCKB2gYysAJZcvaBg0EwFdHIY3GdLShDP7bwqs0WZECtPhPTJTqqtUTElvBPQvU3gnagPGPnFL50NzKmohVKuvEm8yAz9u%2FpFLR0Es5qTQh4wKMRCj8uZEZ7zTrbsDDs7ebCBjqkAXe5YRMq4fza8Tt6RjqdnS8VWR8aVb81M1ypraOGCM1ugyko3QSVGARzOBBQRaJ7q4cyeHJa96DLOLJuFCEXMI2nfeg%2BvHHRFQNW1kJTXuSwTU%2FanSrKwKZT0VyqrQPFjEVITvYhF%2FN4XYh8pyyrXHFxlMbX%2BgTRP4eil8uOoBuschPXDKfXb3M36BBe4vrr4wz%2BywxdyLrqOZ6suZocXNoSfRhB&X-Amz-Signature=de270827b0c6f1ea3c2c13c045109dc26a72c2e909fcf6a226dcca998d9a46a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIHELDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7bnHMQmRvj%2F9DyMP9aRUBt0Lo5WHwew%2BeBnz0yrOpZAIhAMw7ftFVdgFNYGqsNuKn3%2FTow5XcFcIhPlWFlpfOEK24Kv8DCB0QABoMNjM3NDIzMTgzODA1Igx5EukBgfE0TOGVMj0q3AMfBd8CVdG52ryZAe7uz8YlJVWsZUoDoHXLLYwXmjOPD2h9SxfNehpBU6X%2Botmi2c9FVSZzLtFWbz8ewaBnXSfgyRaeVM3cbHCw%2FnUV6Nw7ptqErMW9V8FwApTaJ2CGopEUdVrtCLKmWpaLtIumlksM75mW7Tq9XHPexzXk1kcS30Q6SEoeIAXpQe1L5pquG1sfA8vu0iVp1pfwSfnWhx8U7Zr4ErSP3TUyJzrBS2SYlZg2FiPR9EZjnXni8HwfzmJE6wHsrwFE1WzS7zuhkR9N%2Fp%2FNjnMweTezsucNAneXt4E3QccbdqyY2ITwdyq8hE8%2BAEXhHtw53tpOOmfrFBoaUAyrvbc2%2FYneeHNKNTbIn3EmorUuUfN9MTpjT19h1zTDcBXoDPWj211A8lttepmLcU4DX1EDgt8d6htgMkJGR7Ku%2BOmSJYudW6KIf2fWpa6UIxeD7B4X923wa7IpvvCMkBpvIqSW3AgnAY3vyzFh1Q8LVuxjRE00Nte7x%2BrsWCKB2gYysAJZcvaBg0EwFdHIY3GdLShDP7bwqs0WZECtPhPTJTqqtUTElvBPQvU3gnagPGPnFL50NzKmohVKuvEm8yAz9u%2FpFLR0Es5qTQh4wKMRCj8uZEZ7zTrbsDDs7ebCBjqkAXe5YRMq4fza8Tt6RjqdnS8VWR8aVb81M1ypraOGCM1ugyko3QSVGARzOBBQRaJ7q4cyeHJa96DLOLJuFCEXMI2nfeg%2BvHHRFQNW1kJTXuSwTU%2FanSrKwKZT0VyqrQPFjEVITvYhF%2FN4XYh8pyyrXHFxlMbX%2BgTRP4eil8uOoBuschPXDKfXb3M36BBe4vrr4wz%2BywxdyLrqOZ6suZocXNoSfRhB&X-Amz-Signature=984582a9ab9a3c74aec8ed5de0abecb8be20e81e21e4666cdb9802ce5fd51990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIHELDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7bnHMQmRvj%2F9DyMP9aRUBt0Lo5WHwew%2BeBnz0yrOpZAIhAMw7ftFVdgFNYGqsNuKn3%2FTow5XcFcIhPlWFlpfOEK24Kv8DCB0QABoMNjM3NDIzMTgzODA1Igx5EukBgfE0TOGVMj0q3AMfBd8CVdG52ryZAe7uz8YlJVWsZUoDoHXLLYwXmjOPD2h9SxfNehpBU6X%2Botmi2c9FVSZzLtFWbz8ewaBnXSfgyRaeVM3cbHCw%2FnUV6Nw7ptqErMW9V8FwApTaJ2CGopEUdVrtCLKmWpaLtIumlksM75mW7Tq9XHPexzXk1kcS30Q6SEoeIAXpQe1L5pquG1sfA8vu0iVp1pfwSfnWhx8U7Zr4ErSP3TUyJzrBS2SYlZg2FiPR9EZjnXni8HwfzmJE6wHsrwFE1WzS7zuhkR9N%2Fp%2FNjnMweTezsucNAneXt4E3QccbdqyY2ITwdyq8hE8%2BAEXhHtw53tpOOmfrFBoaUAyrvbc2%2FYneeHNKNTbIn3EmorUuUfN9MTpjT19h1zTDcBXoDPWj211A8lttepmLcU4DX1EDgt8d6htgMkJGR7Ku%2BOmSJYudW6KIf2fWpa6UIxeD7B4X923wa7IpvvCMkBpvIqSW3AgnAY3vyzFh1Q8LVuxjRE00Nte7x%2BrsWCKB2gYysAJZcvaBg0EwFdHIY3GdLShDP7bwqs0WZECtPhPTJTqqtUTElvBPQvU3gnagPGPnFL50NzKmohVKuvEm8yAz9u%2FpFLR0Es5qTQh4wKMRCj8uZEZ7zTrbsDDs7ebCBjqkAXe5YRMq4fza8Tt6RjqdnS8VWR8aVb81M1ypraOGCM1ugyko3QSVGARzOBBQRaJ7q4cyeHJa96DLOLJuFCEXMI2nfeg%2BvHHRFQNW1kJTXuSwTU%2FanSrKwKZT0VyqrQPFjEVITvYhF%2FN4XYh8pyyrXHFxlMbX%2BgTRP4eil8uOoBuschPXDKfXb3M36BBe4vrr4wz%2BywxdyLrqOZ6suZocXNoSfRhB&X-Amz-Signature=6c24bc297c255cc6efec2b63d1b80951684d227427a0abc79f828a44e6d61726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIHELDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD7bnHMQmRvj%2F9DyMP9aRUBt0Lo5WHwew%2BeBnz0yrOpZAIhAMw7ftFVdgFNYGqsNuKn3%2FTow5XcFcIhPlWFlpfOEK24Kv8DCB0QABoMNjM3NDIzMTgzODA1Igx5EukBgfE0TOGVMj0q3AMfBd8CVdG52ryZAe7uz8YlJVWsZUoDoHXLLYwXmjOPD2h9SxfNehpBU6X%2Botmi2c9FVSZzLtFWbz8ewaBnXSfgyRaeVM3cbHCw%2FnUV6Nw7ptqErMW9V8FwApTaJ2CGopEUdVrtCLKmWpaLtIumlksM75mW7Tq9XHPexzXk1kcS30Q6SEoeIAXpQe1L5pquG1sfA8vu0iVp1pfwSfnWhx8U7Zr4ErSP3TUyJzrBS2SYlZg2FiPR9EZjnXni8HwfzmJE6wHsrwFE1WzS7zuhkR9N%2Fp%2FNjnMweTezsucNAneXt4E3QccbdqyY2ITwdyq8hE8%2BAEXhHtw53tpOOmfrFBoaUAyrvbc2%2FYneeHNKNTbIn3EmorUuUfN9MTpjT19h1zTDcBXoDPWj211A8lttepmLcU4DX1EDgt8d6htgMkJGR7Ku%2BOmSJYudW6KIf2fWpa6UIxeD7B4X923wa7IpvvCMkBpvIqSW3AgnAY3vyzFh1Q8LVuxjRE00Nte7x%2BrsWCKB2gYysAJZcvaBg0EwFdHIY3GdLShDP7bwqs0WZECtPhPTJTqqtUTElvBPQvU3gnagPGPnFL50NzKmohVKuvEm8yAz9u%2FpFLR0Es5qTQh4wKMRCj8uZEZ7zTrbsDDs7ebCBjqkAXe5YRMq4fza8Tt6RjqdnS8VWR8aVb81M1ypraOGCM1ugyko3QSVGARzOBBQRaJ7q4cyeHJa96DLOLJuFCEXMI2nfeg%2BvHHRFQNW1kJTXuSwTU%2FanSrKwKZT0VyqrQPFjEVITvYhF%2FN4XYh8pyyrXHFxlMbX%2BgTRP4eil8uOoBuschPXDKfXb3M36BBe4vrr4wz%2BywxdyLrqOZ6suZocXNoSfRhB&X-Amz-Signature=25ca54d4c848164a9dd197f9486d1392a7a5415d4c729962dc37603b223b488e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
