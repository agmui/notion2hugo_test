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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZTOIVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFQPagt0bMMttXIl6jfd5D94vrxQy0x%2BevoH%2BzDcPLwQAiEAmAWPxsEFu4dAuutFHCM0Uhlt8gJQa1InU%2BQxgPf3%2FgoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSyEWZizy%2BT6H0OsSrcA6jNHf9LIsskFfL9Oj7gD9bbITTVVKLichp1QTwgFu1PICs4J%2FrzNeC%2FT3VgCFNpIiK2aqGLcQUei7IVCWquI%2B4grSSrgJFMSudJTEM7rupu5AXNB1h7sYIXHKVgDwWZ8RdL04TlAPZGpQ1L3SFJAdw33CZePOqqdJbiaojIb7Kx2q8UKLdVtMkrIkMl3844UquuJ4Al67FFVhR5z8yOTmUb40pZ9OwtRCs11Ith%2B2xfWay1ENSlK2YGBdwB06BDsCxD3oc7wWJF%2FSk3DKkWcvmibZjc1nmBCFUFdxXbsoizt5VpjTU5%2FG7Nx56fMe8VfHWelOSFikIh%2FNq0g8ZKHc3%2FazatYhQRlmamlVEoCH3txjgCTQ0DWqcOsWpZ0SPIXANHbndvKaaj%2FpHP7ZGy%2F4ctT38StWaFJKSH8KzkMUg5uf5Q84TANVVKTJ7IMl6j4pT9%2FikOmu%2F1LGmT98vyWNDgY78VuxF7WOW6XYwvVhq5B7udLIoJwPF0wsRduhL1XGZJ7wks9DDcY4w3erVvAfe80fFdXjACr%2FiyJA%2Fq7i%2F09AlnPIdaqP0ZWf5lE9SrxLJ54PPFbGpZRq4xqdCS2YXAAEGi%2Fw1FulfgyACM%2Bqz9aFTi3NgKKevUO5cLMJGQpcAGOqUB8l6qNqSRLf99jMH%2FApQFKN8ralwRCutHArcYHvuKd01Vw%2BgAQA68%2B%2FUHld7MysmKPdRZbXdiOzIdsrmA4lpR04gVfUBnLbxnN7gK1nG11i6hMWXWIYipai41%2Fc%2BTT%2BvVlhnkzoJbdG1XN2XaDeDN3K7egbrbjlFj8C0qK6AgPL2sIh6PPWPaoqPMIWCEyeS50M6PQX%2Fopg1JFjEp97Y4bdHvjAbZ&X-Amz-Signature=ffbf5547f0e1fd299435fc7465ac799ec71909ee11f1cecce2ac392829c1c25b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZTOIVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFQPagt0bMMttXIl6jfd5D94vrxQy0x%2BevoH%2BzDcPLwQAiEAmAWPxsEFu4dAuutFHCM0Uhlt8gJQa1InU%2BQxgPf3%2FgoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSyEWZizy%2BT6H0OsSrcA6jNHf9LIsskFfL9Oj7gD9bbITTVVKLichp1QTwgFu1PICs4J%2FrzNeC%2FT3VgCFNpIiK2aqGLcQUei7IVCWquI%2B4grSSrgJFMSudJTEM7rupu5AXNB1h7sYIXHKVgDwWZ8RdL04TlAPZGpQ1L3SFJAdw33CZePOqqdJbiaojIb7Kx2q8UKLdVtMkrIkMl3844UquuJ4Al67FFVhR5z8yOTmUb40pZ9OwtRCs11Ith%2B2xfWay1ENSlK2YGBdwB06BDsCxD3oc7wWJF%2FSk3DKkWcvmibZjc1nmBCFUFdxXbsoizt5VpjTU5%2FG7Nx56fMe8VfHWelOSFikIh%2FNq0g8ZKHc3%2FazatYhQRlmamlVEoCH3txjgCTQ0DWqcOsWpZ0SPIXANHbndvKaaj%2FpHP7ZGy%2F4ctT38StWaFJKSH8KzkMUg5uf5Q84TANVVKTJ7IMl6j4pT9%2FikOmu%2F1LGmT98vyWNDgY78VuxF7WOW6XYwvVhq5B7udLIoJwPF0wsRduhL1XGZJ7wks9DDcY4w3erVvAfe80fFdXjACr%2FiyJA%2Fq7i%2F09AlnPIdaqP0ZWf5lE9SrxLJ54PPFbGpZRq4xqdCS2YXAAEGi%2Fw1FulfgyACM%2Bqz9aFTi3NgKKevUO5cLMJGQpcAGOqUB8l6qNqSRLf99jMH%2FApQFKN8ralwRCutHArcYHvuKd01Vw%2BgAQA68%2B%2FUHld7MysmKPdRZbXdiOzIdsrmA4lpR04gVfUBnLbxnN7gK1nG11i6hMWXWIYipai41%2Fc%2BTT%2BvVlhnkzoJbdG1XN2XaDeDN3K7egbrbjlFj8C0qK6AgPL2sIh6PPWPaoqPMIWCEyeS50M6PQX%2Fopg1JFjEp97Y4bdHvjAbZ&X-Amz-Signature=7d58666fa3888366bb7b8c279fe1524695aec6d177da606571bd9306b5a05264&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZTOIVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFQPagt0bMMttXIl6jfd5D94vrxQy0x%2BevoH%2BzDcPLwQAiEAmAWPxsEFu4dAuutFHCM0Uhlt8gJQa1InU%2BQxgPf3%2FgoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSyEWZizy%2BT6H0OsSrcA6jNHf9LIsskFfL9Oj7gD9bbITTVVKLichp1QTwgFu1PICs4J%2FrzNeC%2FT3VgCFNpIiK2aqGLcQUei7IVCWquI%2B4grSSrgJFMSudJTEM7rupu5AXNB1h7sYIXHKVgDwWZ8RdL04TlAPZGpQ1L3SFJAdw33CZePOqqdJbiaojIb7Kx2q8UKLdVtMkrIkMl3844UquuJ4Al67FFVhR5z8yOTmUb40pZ9OwtRCs11Ith%2B2xfWay1ENSlK2YGBdwB06BDsCxD3oc7wWJF%2FSk3DKkWcvmibZjc1nmBCFUFdxXbsoizt5VpjTU5%2FG7Nx56fMe8VfHWelOSFikIh%2FNq0g8ZKHc3%2FazatYhQRlmamlVEoCH3txjgCTQ0DWqcOsWpZ0SPIXANHbndvKaaj%2FpHP7ZGy%2F4ctT38StWaFJKSH8KzkMUg5uf5Q84TANVVKTJ7IMl6j4pT9%2FikOmu%2F1LGmT98vyWNDgY78VuxF7WOW6XYwvVhq5B7udLIoJwPF0wsRduhL1XGZJ7wks9DDcY4w3erVvAfe80fFdXjACr%2FiyJA%2Fq7i%2F09AlnPIdaqP0ZWf5lE9SrxLJ54PPFbGpZRq4xqdCS2YXAAEGi%2Fw1FulfgyACM%2Bqz9aFTi3NgKKevUO5cLMJGQpcAGOqUB8l6qNqSRLf99jMH%2FApQFKN8ralwRCutHArcYHvuKd01Vw%2BgAQA68%2B%2FUHld7MysmKPdRZbXdiOzIdsrmA4lpR04gVfUBnLbxnN7gK1nG11i6hMWXWIYipai41%2Fc%2BTT%2BvVlhnkzoJbdG1XN2XaDeDN3K7egbrbjlFj8C0qK6AgPL2sIh6PPWPaoqPMIWCEyeS50M6PQX%2Fopg1JFjEp97Y4bdHvjAbZ&X-Amz-Signature=506809e27a2c51cc17dcd46256f5a967c62399c633c3e21dd7b2eaf9b10b1521&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZTOIVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFQPagt0bMMttXIl6jfd5D94vrxQy0x%2BevoH%2BzDcPLwQAiEAmAWPxsEFu4dAuutFHCM0Uhlt8gJQa1InU%2BQxgPf3%2FgoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSyEWZizy%2BT6H0OsSrcA6jNHf9LIsskFfL9Oj7gD9bbITTVVKLichp1QTwgFu1PICs4J%2FrzNeC%2FT3VgCFNpIiK2aqGLcQUei7IVCWquI%2B4grSSrgJFMSudJTEM7rupu5AXNB1h7sYIXHKVgDwWZ8RdL04TlAPZGpQ1L3SFJAdw33CZePOqqdJbiaojIb7Kx2q8UKLdVtMkrIkMl3844UquuJ4Al67FFVhR5z8yOTmUb40pZ9OwtRCs11Ith%2B2xfWay1ENSlK2YGBdwB06BDsCxD3oc7wWJF%2FSk3DKkWcvmibZjc1nmBCFUFdxXbsoizt5VpjTU5%2FG7Nx56fMe8VfHWelOSFikIh%2FNq0g8ZKHc3%2FazatYhQRlmamlVEoCH3txjgCTQ0DWqcOsWpZ0SPIXANHbndvKaaj%2FpHP7ZGy%2F4ctT38StWaFJKSH8KzkMUg5uf5Q84TANVVKTJ7IMl6j4pT9%2FikOmu%2F1LGmT98vyWNDgY78VuxF7WOW6XYwvVhq5B7udLIoJwPF0wsRduhL1XGZJ7wks9DDcY4w3erVvAfe80fFdXjACr%2FiyJA%2Fq7i%2F09AlnPIdaqP0ZWf5lE9SrxLJ54PPFbGpZRq4xqdCS2YXAAEGi%2Fw1FulfgyACM%2Bqz9aFTi3NgKKevUO5cLMJGQpcAGOqUB8l6qNqSRLf99jMH%2FApQFKN8ralwRCutHArcYHvuKd01Vw%2BgAQA68%2B%2FUHld7MysmKPdRZbXdiOzIdsrmA4lpR04gVfUBnLbxnN7gK1nG11i6hMWXWIYipai41%2Fc%2BTT%2BvVlhnkzoJbdG1XN2XaDeDN3K7egbrbjlFj8C0qK6AgPL2sIh6PPWPaoqPMIWCEyeS50M6PQX%2Fopg1JFjEp97Y4bdHvjAbZ&X-Amz-Signature=a2a631f10aafbb63d942ddc04b37e183aefbe9e20c9f57b7a5c10c7c9cb8ba29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZTOIVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFQPagt0bMMttXIl6jfd5D94vrxQy0x%2BevoH%2BzDcPLwQAiEAmAWPxsEFu4dAuutFHCM0Uhlt8gJQa1InU%2BQxgPf3%2FgoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSyEWZizy%2BT6H0OsSrcA6jNHf9LIsskFfL9Oj7gD9bbITTVVKLichp1QTwgFu1PICs4J%2FrzNeC%2FT3VgCFNpIiK2aqGLcQUei7IVCWquI%2B4grSSrgJFMSudJTEM7rupu5AXNB1h7sYIXHKVgDwWZ8RdL04TlAPZGpQ1L3SFJAdw33CZePOqqdJbiaojIb7Kx2q8UKLdVtMkrIkMl3844UquuJ4Al67FFVhR5z8yOTmUb40pZ9OwtRCs11Ith%2B2xfWay1ENSlK2YGBdwB06BDsCxD3oc7wWJF%2FSk3DKkWcvmibZjc1nmBCFUFdxXbsoizt5VpjTU5%2FG7Nx56fMe8VfHWelOSFikIh%2FNq0g8ZKHc3%2FazatYhQRlmamlVEoCH3txjgCTQ0DWqcOsWpZ0SPIXANHbndvKaaj%2FpHP7ZGy%2F4ctT38StWaFJKSH8KzkMUg5uf5Q84TANVVKTJ7IMl6j4pT9%2FikOmu%2F1LGmT98vyWNDgY78VuxF7WOW6XYwvVhq5B7udLIoJwPF0wsRduhL1XGZJ7wks9DDcY4w3erVvAfe80fFdXjACr%2FiyJA%2Fq7i%2F09AlnPIdaqP0ZWf5lE9SrxLJ54PPFbGpZRq4xqdCS2YXAAEGi%2Fw1FulfgyACM%2Bqz9aFTi3NgKKevUO5cLMJGQpcAGOqUB8l6qNqSRLf99jMH%2FApQFKN8ralwRCutHArcYHvuKd01Vw%2BgAQA68%2B%2FUHld7MysmKPdRZbXdiOzIdsrmA4lpR04gVfUBnLbxnN7gK1nG11i6hMWXWIYipai41%2Fc%2BTT%2BvVlhnkzoJbdG1XN2XaDeDN3K7egbrbjlFj8C0qK6AgPL2sIh6PPWPaoqPMIWCEyeS50M6PQX%2Fopg1JFjEp97Y4bdHvjAbZ&X-Amz-Signature=b388d9612c4555dfddd245b34bee81b576411893d84e97c3e78e9a28cf5e0a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZTOIVI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFQPagt0bMMttXIl6jfd5D94vrxQy0x%2BevoH%2BzDcPLwQAiEAmAWPxsEFu4dAuutFHCM0Uhlt8gJQa1InU%2BQxgPf3%2FgoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSyEWZizy%2BT6H0OsSrcA6jNHf9LIsskFfL9Oj7gD9bbITTVVKLichp1QTwgFu1PICs4J%2FrzNeC%2FT3VgCFNpIiK2aqGLcQUei7IVCWquI%2B4grSSrgJFMSudJTEM7rupu5AXNB1h7sYIXHKVgDwWZ8RdL04TlAPZGpQ1L3SFJAdw33CZePOqqdJbiaojIb7Kx2q8UKLdVtMkrIkMl3844UquuJ4Al67FFVhR5z8yOTmUb40pZ9OwtRCs11Ith%2B2xfWay1ENSlK2YGBdwB06BDsCxD3oc7wWJF%2FSk3DKkWcvmibZjc1nmBCFUFdxXbsoizt5VpjTU5%2FG7Nx56fMe8VfHWelOSFikIh%2FNq0g8ZKHc3%2FazatYhQRlmamlVEoCH3txjgCTQ0DWqcOsWpZ0SPIXANHbndvKaaj%2FpHP7ZGy%2F4ctT38StWaFJKSH8KzkMUg5uf5Q84TANVVKTJ7IMl6j4pT9%2FikOmu%2F1LGmT98vyWNDgY78VuxF7WOW6XYwvVhq5B7udLIoJwPF0wsRduhL1XGZJ7wks9DDcY4w3erVvAfe80fFdXjACr%2FiyJA%2Fq7i%2F09AlnPIdaqP0ZWf5lE9SrxLJ54PPFbGpZRq4xqdCS2YXAAEGi%2Fw1FulfgyACM%2Bqz9aFTi3NgKKevUO5cLMJGQpcAGOqUB8l6qNqSRLf99jMH%2FApQFKN8ralwRCutHArcYHvuKd01Vw%2BgAQA68%2B%2FUHld7MysmKPdRZbXdiOzIdsrmA4lpR04gVfUBnLbxnN7gK1nG11i6hMWXWIYipai41%2Fc%2BTT%2BvVlhnkzoJbdG1XN2XaDeDN3K7egbrbjlFj8C0qK6AgPL2sIh6PPWPaoqPMIWCEyeS50M6PQX%2Fopg1JFjEp97Y4bdHvjAbZ&X-Amz-Signature=e9b7c047ca44a30f4010a47cf730c029fc57adfbaaa5b27f57218b5aa25e5610&X-Amz-SignedHeaders=host&x-id=GetObject)
