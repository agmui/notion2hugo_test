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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPM7BFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDstge9N7M2bF82bp7BOM63stkXLnbWVGhQRjDakhLUfAIgQV8Bvm948fapyAGgIytltMGhEo43PGakZncBuRu0U6YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwgTrVQ%2FOXNq%2FIESrcA8pffxQyNVkB6zFOqZ3bi3ODGIV%2F4wtBpSxo3SoB6%2BwGGcXcQvI51aOLC08fSfURiQth0ptLYs8AN7oetx%2FAf%2Bn6Ke2zXVoMBN0COZCxGzTvryvXADhQ4Jblw%2BFzVUygvS5%2FKxYE9YtmvxZALqfmTZdngcX6fFTBY3VGzrGUjg32nZra83hHdWX4aMIWsXdCoEF5fvckQ3NSzYCOxdPlneW%2FTCzg8L5IMeUOY9%2FY0yCvk9Z1yWeZ3kMkvmezYo21zXv91Hs1ebbfCxhtPNUMhA8bi9aw3F53qsKI%2BPPMSA0LkMYKeA5lGgvGBkCrYZ9UxTBtY4PTVhcDYSWn1dvvtJZJpIFHE%2FXqqBrZF43%2BvLgUvXBh6cObIgIEEBjdC4YiGU7LoZouGLLAdXScc6kwHF0A0vqps1WRpAazFKg5wApdDiG2wpfB2QWhQVSFCuH6up9mIcGz%2FygWW8W2eFZVMc4FCuj0mzkXYxbhUgEqXaZrBvbb4wQaHJ6wBEytg7%2FoXnz75Uc50hwz4OltyoDiTGsFiG8wp5eJp1sGLJ0cKNdrV5loYdPHYaD2K5cTh3XSAM24b3RPiThxysl0CbGHYyOGVKuL9WPTRHD9DNaQ7Ucx%2FzGK%2FRs7U9zoIysOMLmw48IGOqUBvYF4RtElsnI6gwRbKqsfIhiq1bcSuWo%2BqQgOYROv8DxnCErc5HYGA5QCA3BjrsuPmi18Ag2bqSmtSTx6XTZScrHJ9vaCXOTEl8Vuur%2BYnQ7%2BiML8PSbVGpt%2BkN15s1VN9UvH%2FKGeXSs0Og6Zod4ev6Afgafq8gsMmo1PtB7S3NnXU8Ogukd92uJF732v2o4TYKlkAa1kcsmNc5t%2BdqwCgjKDVc5h&X-Amz-Signature=a4efc676e8e74926984fcaa432a60cbdefb07743baca3f00b5712fd905ee96e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPM7BFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDstge9N7M2bF82bp7BOM63stkXLnbWVGhQRjDakhLUfAIgQV8Bvm948fapyAGgIytltMGhEo43PGakZncBuRu0U6YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwgTrVQ%2FOXNq%2FIESrcA8pffxQyNVkB6zFOqZ3bi3ODGIV%2F4wtBpSxo3SoB6%2BwGGcXcQvI51aOLC08fSfURiQth0ptLYs8AN7oetx%2FAf%2Bn6Ke2zXVoMBN0COZCxGzTvryvXADhQ4Jblw%2BFzVUygvS5%2FKxYE9YtmvxZALqfmTZdngcX6fFTBY3VGzrGUjg32nZra83hHdWX4aMIWsXdCoEF5fvckQ3NSzYCOxdPlneW%2FTCzg8L5IMeUOY9%2FY0yCvk9Z1yWeZ3kMkvmezYo21zXv91Hs1ebbfCxhtPNUMhA8bi9aw3F53qsKI%2BPPMSA0LkMYKeA5lGgvGBkCrYZ9UxTBtY4PTVhcDYSWn1dvvtJZJpIFHE%2FXqqBrZF43%2BvLgUvXBh6cObIgIEEBjdC4YiGU7LoZouGLLAdXScc6kwHF0A0vqps1WRpAazFKg5wApdDiG2wpfB2QWhQVSFCuH6up9mIcGz%2FygWW8W2eFZVMc4FCuj0mzkXYxbhUgEqXaZrBvbb4wQaHJ6wBEytg7%2FoXnz75Uc50hwz4OltyoDiTGsFiG8wp5eJp1sGLJ0cKNdrV5loYdPHYaD2K5cTh3XSAM24b3RPiThxysl0CbGHYyOGVKuL9WPTRHD9DNaQ7Ucx%2FzGK%2FRs7U9zoIysOMLmw48IGOqUBvYF4RtElsnI6gwRbKqsfIhiq1bcSuWo%2BqQgOYROv8DxnCErc5HYGA5QCA3BjrsuPmi18Ag2bqSmtSTx6XTZScrHJ9vaCXOTEl8Vuur%2BYnQ7%2BiML8PSbVGpt%2BkN15s1VN9UvH%2FKGeXSs0Og6Zod4ev6Afgafq8gsMmo1PtB7S3NnXU8Ogukd92uJF732v2o4TYKlkAa1kcsmNc5t%2BdqwCgjKDVc5h&X-Amz-Signature=ac25b4443c7c67fb00a61affbcf708a269233d2530ee367535d5ffe58e351255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPM7BFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDstge9N7M2bF82bp7BOM63stkXLnbWVGhQRjDakhLUfAIgQV8Bvm948fapyAGgIytltMGhEo43PGakZncBuRu0U6YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwgTrVQ%2FOXNq%2FIESrcA8pffxQyNVkB6zFOqZ3bi3ODGIV%2F4wtBpSxo3SoB6%2BwGGcXcQvI51aOLC08fSfURiQth0ptLYs8AN7oetx%2FAf%2Bn6Ke2zXVoMBN0COZCxGzTvryvXADhQ4Jblw%2BFzVUygvS5%2FKxYE9YtmvxZALqfmTZdngcX6fFTBY3VGzrGUjg32nZra83hHdWX4aMIWsXdCoEF5fvckQ3NSzYCOxdPlneW%2FTCzg8L5IMeUOY9%2FY0yCvk9Z1yWeZ3kMkvmezYo21zXv91Hs1ebbfCxhtPNUMhA8bi9aw3F53qsKI%2BPPMSA0LkMYKeA5lGgvGBkCrYZ9UxTBtY4PTVhcDYSWn1dvvtJZJpIFHE%2FXqqBrZF43%2BvLgUvXBh6cObIgIEEBjdC4YiGU7LoZouGLLAdXScc6kwHF0A0vqps1WRpAazFKg5wApdDiG2wpfB2QWhQVSFCuH6up9mIcGz%2FygWW8W2eFZVMc4FCuj0mzkXYxbhUgEqXaZrBvbb4wQaHJ6wBEytg7%2FoXnz75Uc50hwz4OltyoDiTGsFiG8wp5eJp1sGLJ0cKNdrV5loYdPHYaD2K5cTh3XSAM24b3RPiThxysl0CbGHYyOGVKuL9WPTRHD9DNaQ7Ucx%2FzGK%2FRs7U9zoIysOMLmw48IGOqUBvYF4RtElsnI6gwRbKqsfIhiq1bcSuWo%2BqQgOYROv8DxnCErc5HYGA5QCA3BjrsuPmi18Ag2bqSmtSTx6XTZScrHJ9vaCXOTEl8Vuur%2BYnQ7%2BiML8PSbVGpt%2BkN15s1VN9UvH%2FKGeXSs0Og6Zod4ev6Afgafq8gsMmo1PtB7S3NnXU8Ogukd92uJF732v2o4TYKlkAa1kcsmNc5t%2BdqwCgjKDVc5h&X-Amz-Signature=8ef6cebacbec704378eab8177cf97febdba40ddf71f8dead9a4fa8d540f5f3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPM7BFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDstge9N7M2bF82bp7BOM63stkXLnbWVGhQRjDakhLUfAIgQV8Bvm948fapyAGgIytltMGhEo43PGakZncBuRu0U6YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwgTrVQ%2FOXNq%2FIESrcA8pffxQyNVkB6zFOqZ3bi3ODGIV%2F4wtBpSxo3SoB6%2BwGGcXcQvI51aOLC08fSfURiQth0ptLYs8AN7oetx%2FAf%2Bn6Ke2zXVoMBN0COZCxGzTvryvXADhQ4Jblw%2BFzVUygvS5%2FKxYE9YtmvxZALqfmTZdngcX6fFTBY3VGzrGUjg32nZra83hHdWX4aMIWsXdCoEF5fvckQ3NSzYCOxdPlneW%2FTCzg8L5IMeUOY9%2FY0yCvk9Z1yWeZ3kMkvmezYo21zXv91Hs1ebbfCxhtPNUMhA8bi9aw3F53qsKI%2BPPMSA0LkMYKeA5lGgvGBkCrYZ9UxTBtY4PTVhcDYSWn1dvvtJZJpIFHE%2FXqqBrZF43%2BvLgUvXBh6cObIgIEEBjdC4YiGU7LoZouGLLAdXScc6kwHF0A0vqps1WRpAazFKg5wApdDiG2wpfB2QWhQVSFCuH6up9mIcGz%2FygWW8W2eFZVMc4FCuj0mzkXYxbhUgEqXaZrBvbb4wQaHJ6wBEytg7%2FoXnz75Uc50hwz4OltyoDiTGsFiG8wp5eJp1sGLJ0cKNdrV5loYdPHYaD2K5cTh3XSAM24b3RPiThxysl0CbGHYyOGVKuL9WPTRHD9DNaQ7Ucx%2FzGK%2FRs7U9zoIysOMLmw48IGOqUBvYF4RtElsnI6gwRbKqsfIhiq1bcSuWo%2BqQgOYROv8DxnCErc5HYGA5QCA3BjrsuPmi18Ag2bqSmtSTx6XTZScrHJ9vaCXOTEl8Vuur%2BYnQ7%2BiML8PSbVGpt%2BkN15s1VN9UvH%2FKGeXSs0Og6Zod4ev6Afgafq8gsMmo1PtB7S3NnXU8Ogukd92uJF732v2o4TYKlkAa1kcsmNc5t%2BdqwCgjKDVc5h&X-Amz-Signature=a855126f16b2d7fd201fc8673d591ca9729bfc247bee190ee5e5193680a22c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPM7BFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDstge9N7M2bF82bp7BOM63stkXLnbWVGhQRjDakhLUfAIgQV8Bvm948fapyAGgIytltMGhEo43PGakZncBuRu0U6YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwgTrVQ%2FOXNq%2FIESrcA8pffxQyNVkB6zFOqZ3bi3ODGIV%2F4wtBpSxo3SoB6%2BwGGcXcQvI51aOLC08fSfURiQth0ptLYs8AN7oetx%2FAf%2Bn6Ke2zXVoMBN0COZCxGzTvryvXADhQ4Jblw%2BFzVUygvS5%2FKxYE9YtmvxZALqfmTZdngcX6fFTBY3VGzrGUjg32nZra83hHdWX4aMIWsXdCoEF5fvckQ3NSzYCOxdPlneW%2FTCzg8L5IMeUOY9%2FY0yCvk9Z1yWeZ3kMkvmezYo21zXv91Hs1ebbfCxhtPNUMhA8bi9aw3F53qsKI%2BPPMSA0LkMYKeA5lGgvGBkCrYZ9UxTBtY4PTVhcDYSWn1dvvtJZJpIFHE%2FXqqBrZF43%2BvLgUvXBh6cObIgIEEBjdC4YiGU7LoZouGLLAdXScc6kwHF0A0vqps1WRpAazFKg5wApdDiG2wpfB2QWhQVSFCuH6up9mIcGz%2FygWW8W2eFZVMc4FCuj0mzkXYxbhUgEqXaZrBvbb4wQaHJ6wBEytg7%2FoXnz75Uc50hwz4OltyoDiTGsFiG8wp5eJp1sGLJ0cKNdrV5loYdPHYaD2K5cTh3XSAM24b3RPiThxysl0CbGHYyOGVKuL9WPTRHD9DNaQ7Ucx%2FzGK%2FRs7U9zoIysOMLmw48IGOqUBvYF4RtElsnI6gwRbKqsfIhiq1bcSuWo%2BqQgOYROv8DxnCErc5HYGA5QCA3BjrsuPmi18Ag2bqSmtSTx6XTZScrHJ9vaCXOTEl8Vuur%2BYnQ7%2BiML8PSbVGpt%2BkN15s1VN9UvH%2FKGeXSs0Og6Zod4ev6Afgafq8gsMmo1PtB7S3NnXU8Ogukd92uJF732v2o4TYKlkAa1kcsmNc5t%2BdqwCgjKDVc5h&X-Amz-Signature=3f149af6a39dbe3b0428040ae9669f45a817b414031290a2753993628401298d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPM7BFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDstge9N7M2bF82bp7BOM63stkXLnbWVGhQRjDakhLUfAIgQV8Bvm948fapyAGgIytltMGhEo43PGakZncBuRu0U6YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FwgTrVQ%2FOXNq%2FIESrcA8pffxQyNVkB6zFOqZ3bi3ODGIV%2F4wtBpSxo3SoB6%2BwGGcXcQvI51aOLC08fSfURiQth0ptLYs8AN7oetx%2FAf%2Bn6Ke2zXVoMBN0COZCxGzTvryvXADhQ4Jblw%2BFzVUygvS5%2FKxYE9YtmvxZALqfmTZdngcX6fFTBY3VGzrGUjg32nZra83hHdWX4aMIWsXdCoEF5fvckQ3NSzYCOxdPlneW%2FTCzg8L5IMeUOY9%2FY0yCvk9Z1yWeZ3kMkvmezYo21zXv91Hs1ebbfCxhtPNUMhA8bi9aw3F53qsKI%2BPPMSA0LkMYKeA5lGgvGBkCrYZ9UxTBtY4PTVhcDYSWn1dvvtJZJpIFHE%2FXqqBrZF43%2BvLgUvXBh6cObIgIEEBjdC4YiGU7LoZouGLLAdXScc6kwHF0A0vqps1WRpAazFKg5wApdDiG2wpfB2QWhQVSFCuH6up9mIcGz%2FygWW8W2eFZVMc4FCuj0mzkXYxbhUgEqXaZrBvbb4wQaHJ6wBEytg7%2FoXnz75Uc50hwz4OltyoDiTGsFiG8wp5eJp1sGLJ0cKNdrV5loYdPHYaD2K5cTh3XSAM24b3RPiThxysl0CbGHYyOGVKuL9WPTRHD9DNaQ7Ucx%2FzGK%2FRs7U9zoIysOMLmw48IGOqUBvYF4RtElsnI6gwRbKqsfIhiq1bcSuWo%2BqQgOYROv8DxnCErc5HYGA5QCA3BjrsuPmi18Ag2bqSmtSTx6XTZScrHJ9vaCXOTEl8Vuur%2BYnQ7%2BiML8PSbVGpt%2BkN15s1VN9UvH%2FKGeXSs0Og6Zod4ev6Afgafq8gsMmo1PtB7S3NnXU8Ogukd92uJF732v2o4TYKlkAa1kcsmNc5t%2BdqwCgjKDVc5h&X-Amz-Signature=7c61a2b5ce6decbbee090944cf6901c05d94fb53b232c6e136748dcd24c29919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
