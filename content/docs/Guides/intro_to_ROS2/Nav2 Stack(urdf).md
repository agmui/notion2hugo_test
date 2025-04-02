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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWNKGW3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCwIhTAarvtwMeafJy%2F6pqcBv0loMCUOgR0864ZO7F77AIgTkZbW7%2FrxvPRC9FF5xars5MWgrL9YCq9M3YuSav%2BoF4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGoRRxjgNIdGIwQryrcA0FIiWcb8OQU0xhuPnCdhY7473yMlhpPZXqOJIEEyQ2zR0TZKEDJIbBKvqLGv9JY7PRDK2Ifp9eU%2BzWoxsY2ZKbEkP5uYknz2T4IMzPjvbgN74bPC4%2Fq5gl9ymFBtxiiqpywRv6A%2F5gE0A4Pd2dzr2QdXWbl5oYSKJCGUOVfWcz3lDY6CpnkSEiauwkfB%2BrXiXRHgzGmDkHSyqgIF1Xrw5smOA53Ies80eta9IwIDvBbgJMWJXW5LcqLAoo4Gvr2vZiRYtupUZwKBdI8soDtb5hpRN%2B8RZdjL9oTMZYMuTEFlnEbzlnrYzkZgrkIQJOASBjOGxtzz0Pzr4DlqKxItyg0l0e63ab%2FlolLkjEpPNwIEXffswctbq2dOfiC6Rs3lM3fl4gj1bYMb4jzsfIqPUABpY75ZLOz%2Bnz%2F3fHM2QujCoONtxfT1Iob15%2BnxfvOhHKd5my2bctnYZzHo%2BOTZsrIf3j2bx1f%2F3wbSquVGIZQKaqVk4POwWnKoBNPVHIYTG%2BzARjACE2Go0nzl3TrJBbz4U0hT0DR%2BOPbS2GTfZTJAUGJ4q7sVCQPwXEvuFAn%2BmpRFFPmOFIZLL1b87yJQVUnyoGJYIEMAAcbvoLfV2n9F6ZU5ewyxxE89n9hMKvztr8GOqUBNA204ZR7AaAetG%2BqyzZqQjBIZ79%2FdX063DjF%2Bij%2B6Wgs8c7Ny2UO4qVemwDhTJoBTwE8279UgUO9z0SWtW5Nus63ZieuDvZMExM%2FGjKCWaRS1ewsanblUFe8nlJqUCHCr%2FMEJtL%2B%2BNG2639bnkBYzht8y%2F3WrKCeNLV6vVsHkTgdqFDwYjPwxbHeVL4n8%2B70w%2Blx7LdGiXg%2FRGun3UReicQp%2BTTp&X-Amz-Signature=dc9424fc5061ae4f345d12e469e377bb7e11e3c599c1d606931a5eee492ae0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWNKGW3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCwIhTAarvtwMeafJy%2F6pqcBv0loMCUOgR0864ZO7F77AIgTkZbW7%2FrxvPRC9FF5xars5MWgrL9YCq9M3YuSav%2BoF4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGoRRxjgNIdGIwQryrcA0FIiWcb8OQU0xhuPnCdhY7473yMlhpPZXqOJIEEyQ2zR0TZKEDJIbBKvqLGv9JY7PRDK2Ifp9eU%2BzWoxsY2ZKbEkP5uYknz2T4IMzPjvbgN74bPC4%2Fq5gl9ymFBtxiiqpywRv6A%2F5gE0A4Pd2dzr2QdXWbl5oYSKJCGUOVfWcz3lDY6CpnkSEiauwkfB%2BrXiXRHgzGmDkHSyqgIF1Xrw5smOA53Ies80eta9IwIDvBbgJMWJXW5LcqLAoo4Gvr2vZiRYtupUZwKBdI8soDtb5hpRN%2B8RZdjL9oTMZYMuTEFlnEbzlnrYzkZgrkIQJOASBjOGxtzz0Pzr4DlqKxItyg0l0e63ab%2FlolLkjEpPNwIEXffswctbq2dOfiC6Rs3lM3fl4gj1bYMb4jzsfIqPUABpY75ZLOz%2Bnz%2F3fHM2QujCoONtxfT1Iob15%2BnxfvOhHKd5my2bctnYZzHo%2BOTZsrIf3j2bx1f%2F3wbSquVGIZQKaqVk4POwWnKoBNPVHIYTG%2BzARjACE2Go0nzl3TrJBbz4U0hT0DR%2BOPbS2GTfZTJAUGJ4q7sVCQPwXEvuFAn%2BmpRFFPmOFIZLL1b87yJQVUnyoGJYIEMAAcbvoLfV2n9F6ZU5ewyxxE89n9hMKvztr8GOqUBNA204ZR7AaAetG%2BqyzZqQjBIZ79%2FdX063DjF%2Bij%2B6Wgs8c7Ny2UO4qVemwDhTJoBTwE8279UgUO9z0SWtW5Nus63ZieuDvZMExM%2FGjKCWaRS1ewsanblUFe8nlJqUCHCr%2FMEJtL%2B%2BNG2639bnkBYzht8y%2F3WrKCeNLV6vVsHkTgdqFDwYjPwxbHeVL4n8%2B70w%2Blx7LdGiXg%2FRGun3UReicQp%2BTTp&X-Amz-Signature=003fd3b68bd5f53b78d8fa8074770945c59ed2f9dd9b172adfdb8d92028c8db9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWNKGW3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCwIhTAarvtwMeafJy%2F6pqcBv0loMCUOgR0864ZO7F77AIgTkZbW7%2FrxvPRC9FF5xars5MWgrL9YCq9M3YuSav%2BoF4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGoRRxjgNIdGIwQryrcA0FIiWcb8OQU0xhuPnCdhY7473yMlhpPZXqOJIEEyQ2zR0TZKEDJIbBKvqLGv9JY7PRDK2Ifp9eU%2BzWoxsY2ZKbEkP5uYknz2T4IMzPjvbgN74bPC4%2Fq5gl9ymFBtxiiqpywRv6A%2F5gE0A4Pd2dzr2QdXWbl5oYSKJCGUOVfWcz3lDY6CpnkSEiauwkfB%2BrXiXRHgzGmDkHSyqgIF1Xrw5smOA53Ies80eta9IwIDvBbgJMWJXW5LcqLAoo4Gvr2vZiRYtupUZwKBdI8soDtb5hpRN%2B8RZdjL9oTMZYMuTEFlnEbzlnrYzkZgrkIQJOASBjOGxtzz0Pzr4DlqKxItyg0l0e63ab%2FlolLkjEpPNwIEXffswctbq2dOfiC6Rs3lM3fl4gj1bYMb4jzsfIqPUABpY75ZLOz%2Bnz%2F3fHM2QujCoONtxfT1Iob15%2BnxfvOhHKd5my2bctnYZzHo%2BOTZsrIf3j2bx1f%2F3wbSquVGIZQKaqVk4POwWnKoBNPVHIYTG%2BzARjACE2Go0nzl3TrJBbz4U0hT0DR%2BOPbS2GTfZTJAUGJ4q7sVCQPwXEvuFAn%2BmpRFFPmOFIZLL1b87yJQVUnyoGJYIEMAAcbvoLfV2n9F6ZU5ewyxxE89n9hMKvztr8GOqUBNA204ZR7AaAetG%2BqyzZqQjBIZ79%2FdX063DjF%2Bij%2B6Wgs8c7Ny2UO4qVemwDhTJoBTwE8279UgUO9z0SWtW5Nus63ZieuDvZMExM%2FGjKCWaRS1ewsanblUFe8nlJqUCHCr%2FMEJtL%2B%2BNG2639bnkBYzht8y%2F3WrKCeNLV6vVsHkTgdqFDwYjPwxbHeVL4n8%2B70w%2Blx7LdGiXg%2FRGun3UReicQp%2BTTp&X-Amz-Signature=efdddbea2af65da629560e5aa5975a0c553a9b107136516ebcf318eadc087c18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWNKGW3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCwIhTAarvtwMeafJy%2F6pqcBv0loMCUOgR0864ZO7F77AIgTkZbW7%2FrxvPRC9FF5xars5MWgrL9YCq9M3YuSav%2BoF4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGoRRxjgNIdGIwQryrcA0FIiWcb8OQU0xhuPnCdhY7473yMlhpPZXqOJIEEyQ2zR0TZKEDJIbBKvqLGv9JY7PRDK2Ifp9eU%2BzWoxsY2ZKbEkP5uYknz2T4IMzPjvbgN74bPC4%2Fq5gl9ymFBtxiiqpywRv6A%2F5gE0A4Pd2dzr2QdXWbl5oYSKJCGUOVfWcz3lDY6CpnkSEiauwkfB%2BrXiXRHgzGmDkHSyqgIF1Xrw5smOA53Ies80eta9IwIDvBbgJMWJXW5LcqLAoo4Gvr2vZiRYtupUZwKBdI8soDtb5hpRN%2B8RZdjL9oTMZYMuTEFlnEbzlnrYzkZgrkIQJOASBjOGxtzz0Pzr4DlqKxItyg0l0e63ab%2FlolLkjEpPNwIEXffswctbq2dOfiC6Rs3lM3fl4gj1bYMb4jzsfIqPUABpY75ZLOz%2Bnz%2F3fHM2QujCoONtxfT1Iob15%2BnxfvOhHKd5my2bctnYZzHo%2BOTZsrIf3j2bx1f%2F3wbSquVGIZQKaqVk4POwWnKoBNPVHIYTG%2BzARjACE2Go0nzl3TrJBbz4U0hT0DR%2BOPbS2GTfZTJAUGJ4q7sVCQPwXEvuFAn%2BmpRFFPmOFIZLL1b87yJQVUnyoGJYIEMAAcbvoLfV2n9F6ZU5ewyxxE89n9hMKvztr8GOqUBNA204ZR7AaAetG%2BqyzZqQjBIZ79%2FdX063DjF%2Bij%2B6Wgs8c7Ny2UO4qVemwDhTJoBTwE8279UgUO9z0SWtW5Nus63ZieuDvZMExM%2FGjKCWaRS1ewsanblUFe8nlJqUCHCr%2FMEJtL%2B%2BNG2639bnkBYzht8y%2F3WrKCeNLV6vVsHkTgdqFDwYjPwxbHeVL4n8%2B70w%2Blx7LdGiXg%2FRGun3UReicQp%2BTTp&X-Amz-Signature=f59144709fab97f14291cb3269b0ecaf6fca48681446d9371a2e443978c0d6f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWNKGW3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCwIhTAarvtwMeafJy%2F6pqcBv0loMCUOgR0864ZO7F77AIgTkZbW7%2FrxvPRC9FF5xars5MWgrL9YCq9M3YuSav%2BoF4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGoRRxjgNIdGIwQryrcA0FIiWcb8OQU0xhuPnCdhY7473yMlhpPZXqOJIEEyQ2zR0TZKEDJIbBKvqLGv9JY7PRDK2Ifp9eU%2BzWoxsY2ZKbEkP5uYknz2T4IMzPjvbgN74bPC4%2Fq5gl9ymFBtxiiqpywRv6A%2F5gE0A4Pd2dzr2QdXWbl5oYSKJCGUOVfWcz3lDY6CpnkSEiauwkfB%2BrXiXRHgzGmDkHSyqgIF1Xrw5smOA53Ies80eta9IwIDvBbgJMWJXW5LcqLAoo4Gvr2vZiRYtupUZwKBdI8soDtb5hpRN%2B8RZdjL9oTMZYMuTEFlnEbzlnrYzkZgrkIQJOASBjOGxtzz0Pzr4DlqKxItyg0l0e63ab%2FlolLkjEpPNwIEXffswctbq2dOfiC6Rs3lM3fl4gj1bYMb4jzsfIqPUABpY75ZLOz%2Bnz%2F3fHM2QujCoONtxfT1Iob15%2BnxfvOhHKd5my2bctnYZzHo%2BOTZsrIf3j2bx1f%2F3wbSquVGIZQKaqVk4POwWnKoBNPVHIYTG%2BzARjACE2Go0nzl3TrJBbz4U0hT0DR%2BOPbS2GTfZTJAUGJ4q7sVCQPwXEvuFAn%2BmpRFFPmOFIZLL1b87yJQVUnyoGJYIEMAAcbvoLfV2n9F6ZU5ewyxxE89n9hMKvztr8GOqUBNA204ZR7AaAetG%2BqyzZqQjBIZ79%2FdX063DjF%2Bij%2B6Wgs8c7Ny2UO4qVemwDhTJoBTwE8279UgUO9z0SWtW5Nus63ZieuDvZMExM%2FGjKCWaRS1ewsanblUFe8nlJqUCHCr%2FMEJtL%2B%2BNG2639bnkBYzht8y%2F3WrKCeNLV6vVsHkTgdqFDwYjPwxbHeVL4n8%2B70w%2Blx7LdGiXg%2FRGun3UReicQp%2BTTp&X-Amz-Signature=a0f9f3fb2e6fb3da9b5e1afd591c9c758723436cbcf461a04974f2e4bc5bcfcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWNKGW3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCwIhTAarvtwMeafJy%2F6pqcBv0loMCUOgR0864ZO7F77AIgTkZbW7%2FrxvPRC9FF5xars5MWgrL9YCq9M3YuSav%2BoF4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGoRRxjgNIdGIwQryrcA0FIiWcb8OQU0xhuPnCdhY7473yMlhpPZXqOJIEEyQ2zR0TZKEDJIbBKvqLGv9JY7PRDK2Ifp9eU%2BzWoxsY2ZKbEkP5uYknz2T4IMzPjvbgN74bPC4%2Fq5gl9ymFBtxiiqpywRv6A%2F5gE0A4Pd2dzr2QdXWbl5oYSKJCGUOVfWcz3lDY6CpnkSEiauwkfB%2BrXiXRHgzGmDkHSyqgIF1Xrw5smOA53Ies80eta9IwIDvBbgJMWJXW5LcqLAoo4Gvr2vZiRYtupUZwKBdI8soDtb5hpRN%2B8RZdjL9oTMZYMuTEFlnEbzlnrYzkZgrkIQJOASBjOGxtzz0Pzr4DlqKxItyg0l0e63ab%2FlolLkjEpPNwIEXffswctbq2dOfiC6Rs3lM3fl4gj1bYMb4jzsfIqPUABpY75ZLOz%2Bnz%2F3fHM2QujCoONtxfT1Iob15%2BnxfvOhHKd5my2bctnYZzHo%2BOTZsrIf3j2bx1f%2F3wbSquVGIZQKaqVk4POwWnKoBNPVHIYTG%2BzARjACE2Go0nzl3TrJBbz4U0hT0DR%2BOPbS2GTfZTJAUGJ4q7sVCQPwXEvuFAn%2BmpRFFPmOFIZLL1b87yJQVUnyoGJYIEMAAcbvoLfV2n9F6ZU5ewyxxE89n9hMKvztr8GOqUBNA204ZR7AaAetG%2BqyzZqQjBIZ79%2FdX063DjF%2Bij%2B6Wgs8c7Ny2UO4qVemwDhTJoBTwE8279UgUO9z0SWtW5Nus63ZieuDvZMExM%2FGjKCWaRS1ewsanblUFe8nlJqUCHCr%2FMEJtL%2B%2BNG2639bnkBYzht8y%2F3WrKCeNLV6vVsHkTgdqFDwYjPwxbHeVL4n8%2B70w%2Blx7LdGiXg%2FRGun3UReicQp%2BTTp&X-Amz-Signature=db6b866ef7e5e10aa515d98c7a426861ea21794f1d509c40f1d7108ce64d49fe&X-Amz-SignedHeaders=host&x-id=GetObject)
