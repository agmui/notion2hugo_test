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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHZIV23%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDBRxv5oV0ixnsrmNYmL06t8RrFm7vYpAKFgg5MPU8rcgIhAJ7pU0LK9cnp8%2FuTU7Me7kvL4bQkO3EX1NxRYheJwIUCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9E%2BKYy6q4hyBCgoq3AOfAxa9OZzQX7N1tozr9n2jl9X42Es1relaJNWBq%2F2npMCBKWptDZMpscggNe2H044iz1Dimz2y%2FqAkb0DYe%2B3IAG19wSQZmPU%2F12ritPHa2yAPuzi3fO%2BRkNwgHapFlGSegB%2FIYUZ4E9uT2WLNJKobRLo491QBEKbHGMLYcw3g6ug8UqstQ85UcTKczlzm53FAaJDnPprow6fyKRhc8SUJtv3i0c%2BZ%2BwY%2F%2BrSrIsdXLRvJBq%2BWkE7fbqrkEiNdpX1hWGNWzOuG8tzhvGEZIHdT487CCCP6mr7J6xkQea6A5ou3wF%2FOsIIcKpRD5omaQWBkNhl4hDsDYIzeGQzYEQyazGsd9mG2hCDnLV%2FtGXnLkPr6a78iDkv%2F6571EbHBaQBU2bCJoPNOGl6KFaHSxEWjmAYLtS8JZHKbprwG7L8CpJ%2FRfPl3SK4bw2GvoBj0oyhbUl3bdf%2B24q%2ByaBji%2Fcy201eSt07yMOTbsg1ZaJaCCOOYnKbPx3dkFjRwl3zkk4%2BpWQDwcgyhTM8T61YlEm%2BhBf63A5weIO9J%2B%2BdcmBRw0RJx%2BKr2socAGJG1S8w%2Bjc8W9WYKExx8vMuFbbwZ%2B36213k7YOv8riwJYoLawj1Xxvr%2B3HSqnPa8DE82XDC%2B9uK%2FBjqkAd92QZOxrKqgHOjEssCJFUXxrcqi0rk8kfW%2Bi9N%2FnjqRS7kBHeqpKcSvgQE3uPVuM1WM0bm0%2BqffQzjXlvEEPulyNJuB7%2Fd%2B95VCiO7%2FupOxiOSrVlvUpzHbCSYkHjflTBqFoTgZ8%2Fr4BoLIMryKFenhi%2BI9Unml5W9tpI4tzCefwkyfK%2FDz2ivQ0occeFteru10afARHbKbxHwgvinmCQHjMFo8&X-Amz-Signature=d651aaf5bc523e80d9ca2a98be2df7fdcdd54ff764c2cf83dc0cbf019733b756&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHZIV23%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDBRxv5oV0ixnsrmNYmL06t8RrFm7vYpAKFgg5MPU8rcgIhAJ7pU0LK9cnp8%2FuTU7Me7kvL4bQkO3EX1NxRYheJwIUCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9E%2BKYy6q4hyBCgoq3AOfAxa9OZzQX7N1tozr9n2jl9X42Es1relaJNWBq%2F2npMCBKWptDZMpscggNe2H044iz1Dimz2y%2FqAkb0DYe%2B3IAG19wSQZmPU%2F12ritPHa2yAPuzi3fO%2BRkNwgHapFlGSegB%2FIYUZ4E9uT2WLNJKobRLo491QBEKbHGMLYcw3g6ug8UqstQ85UcTKczlzm53FAaJDnPprow6fyKRhc8SUJtv3i0c%2BZ%2BwY%2F%2BrSrIsdXLRvJBq%2BWkE7fbqrkEiNdpX1hWGNWzOuG8tzhvGEZIHdT487CCCP6mr7J6xkQea6A5ou3wF%2FOsIIcKpRD5omaQWBkNhl4hDsDYIzeGQzYEQyazGsd9mG2hCDnLV%2FtGXnLkPr6a78iDkv%2F6571EbHBaQBU2bCJoPNOGl6KFaHSxEWjmAYLtS8JZHKbprwG7L8CpJ%2FRfPl3SK4bw2GvoBj0oyhbUl3bdf%2B24q%2ByaBji%2Fcy201eSt07yMOTbsg1ZaJaCCOOYnKbPx3dkFjRwl3zkk4%2BpWQDwcgyhTM8T61YlEm%2BhBf63A5weIO9J%2B%2BdcmBRw0RJx%2BKr2socAGJG1S8w%2Bjc8W9WYKExx8vMuFbbwZ%2B36213k7YOv8riwJYoLawj1Xxvr%2B3HSqnPa8DE82XDC%2B9uK%2FBjqkAd92QZOxrKqgHOjEssCJFUXxrcqi0rk8kfW%2Bi9N%2FnjqRS7kBHeqpKcSvgQE3uPVuM1WM0bm0%2BqffQzjXlvEEPulyNJuB7%2Fd%2B95VCiO7%2FupOxiOSrVlvUpzHbCSYkHjflTBqFoTgZ8%2Fr4BoLIMryKFenhi%2BI9Unml5W9tpI4tzCefwkyfK%2FDz2ivQ0occeFteru10afARHbKbxHwgvinmCQHjMFo8&X-Amz-Signature=f13e32d8a5060e25077a289654feeef9b87b12ecbc24257fc8151949bfdbd996&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHZIV23%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDBRxv5oV0ixnsrmNYmL06t8RrFm7vYpAKFgg5MPU8rcgIhAJ7pU0LK9cnp8%2FuTU7Me7kvL4bQkO3EX1NxRYheJwIUCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9E%2BKYy6q4hyBCgoq3AOfAxa9OZzQX7N1tozr9n2jl9X42Es1relaJNWBq%2F2npMCBKWptDZMpscggNe2H044iz1Dimz2y%2FqAkb0DYe%2B3IAG19wSQZmPU%2F12ritPHa2yAPuzi3fO%2BRkNwgHapFlGSegB%2FIYUZ4E9uT2WLNJKobRLo491QBEKbHGMLYcw3g6ug8UqstQ85UcTKczlzm53FAaJDnPprow6fyKRhc8SUJtv3i0c%2BZ%2BwY%2F%2BrSrIsdXLRvJBq%2BWkE7fbqrkEiNdpX1hWGNWzOuG8tzhvGEZIHdT487CCCP6mr7J6xkQea6A5ou3wF%2FOsIIcKpRD5omaQWBkNhl4hDsDYIzeGQzYEQyazGsd9mG2hCDnLV%2FtGXnLkPr6a78iDkv%2F6571EbHBaQBU2bCJoPNOGl6KFaHSxEWjmAYLtS8JZHKbprwG7L8CpJ%2FRfPl3SK4bw2GvoBj0oyhbUl3bdf%2B24q%2ByaBji%2Fcy201eSt07yMOTbsg1ZaJaCCOOYnKbPx3dkFjRwl3zkk4%2BpWQDwcgyhTM8T61YlEm%2BhBf63A5weIO9J%2B%2BdcmBRw0RJx%2BKr2socAGJG1S8w%2Bjc8W9WYKExx8vMuFbbwZ%2B36213k7YOv8riwJYoLawj1Xxvr%2B3HSqnPa8DE82XDC%2B9uK%2FBjqkAd92QZOxrKqgHOjEssCJFUXxrcqi0rk8kfW%2Bi9N%2FnjqRS7kBHeqpKcSvgQE3uPVuM1WM0bm0%2BqffQzjXlvEEPulyNJuB7%2Fd%2B95VCiO7%2FupOxiOSrVlvUpzHbCSYkHjflTBqFoTgZ8%2Fr4BoLIMryKFenhi%2BI9Unml5W9tpI4tzCefwkyfK%2FDz2ivQ0occeFteru10afARHbKbxHwgvinmCQHjMFo8&X-Amz-Signature=eb6a863e2a40e07d2696281b702bbd4fe80cc24aebded8e64bb8946073f8810c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHZIV23%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDBRxv5oV0ixnsrmNYmL06t8RrFm7vYpAKFgg5MPU8rcgIhAJ7pU0LK9cnp8%2FuTU7Me7kvL4bQkO3EX1NxRYheJwIUCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9E%2BKYy6q4hyBCgoq3AOfAxa9OZzQX7N1tozr9n2jl9X42Es1relaJNWBq%2F2npMCBKWptDZMpscggNe2H044iz1Dimz2y%2FqAkb0DYe%2B3IAG19wSQZmPU%2F12ritPHa2yAPuzi3fO%2BRkNwgHapFlGSegB%2FIYUZ4E9uT2WLNJKobRLo491QBEKbHGMLYcw3g6ug8UqstQ85UcTKczlzm53FAaJDnPprow6fyKRhc8SUJtv3i0c%2BZ%2BwY%2F%2BrSrIsdXLRvJBq%2BWkE7fbqrkEiNdpX1hWGNWzOuG8tzhvGEZIHdT487CCCP6mr7J6xkQea6A5ou3wF%2FOsIIcKpRD5omaQWBkNhl4hDsDYIzeGQzYEQyazGsd9mG2hCDnLV%2FtGXnLkPr6a78iDkv%2F6571EbHBaQBU2bCJoPNOGl6KFaHSxEWjmAYLtS8JZHKbprwG7L8CpJ%2FRfPl3SK4bw2GvoBj0oyhbUl3bdf%2B24q%2ByaBji%2Fcy201eSt07yMOTbsg1ZaJaCCOOYnKbPx3dkFjRwl3zkk4%2BpWQDwcgyhTM8T61YlEm%2BhBf63A5weIO9J%2B%2BdcmBRw0RJx%2BKr2socAGJG1S8w%2Bjc8W9WYKExx8vMuFbbwZ%2B36213k7YOv8riwJYoLawj1Xxvr%2B3HSqnPa8DE82XDC%2B9uK%2FBjqkAd92QZOxrKqgHOjEssCJFUXxrcqi0rk8kfW%2Bi9N%2FnjqRS7kBHeqpKcSvgQE3uPVuM1WM0bm0%2BqffQzjXlvEEPulyNJuB7%2Fd%2B95VCiO7%2FupOxiOSrVlvUpzHbCSYkHjflTBqFoTgZ8%2Fr4BoLIMryKFenhi%2BI9Unml5W9tpI4tzCefwkyfK%2FDz2ivQ0occeFteru10afARHbKbxHwgvinmCQHjMFo8&X-Amz-Signature=750a10246d4e2cb93468aabb94f2e3645ad4047ee644329e58a26daa91780c97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHZIV23%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDBRxv5oV0ixnsrmNYmL06t8RrFm7vYpAKFgg5MPU8rcgIhAJ7pU0LK9cnp8%2FuTU7Me7kvL4bQkO3EX1NxRYheJwIUCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9E%2BKYy6q4hyBCgoq3AOfAxa9OZzQX7N1tozr9n2jl9X42Es1relaJNWBq%2F2npMCBKWptDZMpscggNe2H044iz1Dimz2y%2FqAkb0DYe%2B3IAG19wSQZmPU%2F12ritPHa2yAPuzi3fO%2BRkNwgHapFlGSegB%2FIYUZ4E9uT2WLNJKobRLo491QBEKbHGMLYcw3g6ug8UqstQ85UcTKczlzm53FAaJDnPprow6fyKRhc8SUJtv3i0c%2BZ%2BwY%2F%2BrSrIsdXLRvJBq%2BWkE7fbqrkEiNdpX1hWGNWzOuG8tzhvGEZIHdT487CCCP6mr7J6xkQea6A5ou3wF%2FOsIIcKpRD5omaQWBkNhl4hDsDYIzeGQzYEQyazGsd9mG2hCDnLV%2FtGXnLkPr6a78iDkv%2F6571EbHBaQBU2bCJoPNOGl6KFaHSxEWjmAYLtS8JZHKbprwG7L8CpJ%2FRfPl3SK4bw2GvoBj0oyhbUl3bdf%2B24q%2ByaBji%2Fcy201eSt07yMOTbsg1ZaJaCCOOYnKbPx3dkFjRwl3zkk4%2BpWQDwcgyhTM8T61YlEm%2BhBf63A5weIO9J%2B%2BdcmBRw0RJx%2BKr2socAGJG1S8w%2Bjc8W9WYKExx8vMuFbbwZ%2B36213k7YOv8riwJYoLawj1Xxvr%2B3HSqnPa8DE82XDC%2B9uK%2FBjqkAd92QZOxrKqgHOjEssCJFUXxrcqi0rk8kfW%2Bi9N%2FnjqRS7kBHeqpKcSvgQE3uPVuM1WM0bm0%2BqffQzjXlvEEPulyNJuB7%2Fd%2B95VCiO7%2FupOxiOSrVlvUpzHbCSYkHjflTBqFoTgZ8%2Fr4BoLIMryKFenhi%2BI9Unml5W9tpI4tzCefwkyfK%2FDz2ivQ0occeFteru10afARHbKbxHwgvinmCQHjMFo8&X-Amz-Signature=ce446b737ddb7d35bbee6e30c6410188de1d1c382f3e27aa522ee2613907f76f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHZIV23%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDBRxv5oV0ixnsrmNYmL06t8RrFm7vYpAKFgg5MPU8rcgIhAJ7pU0LK9cnp8%2FuTU7Me7kvL4bQkO3EX1NxRYheJwIUCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9E%2BKYy6q4hyBCgoq3AOfAxa9OZzQX7N1tozr9n2jl9X42Es1relaJNWBq%2F2npMCBKWptDZMpscggNe2H044iz1Dimz2y%2FqAkb0DYe%2B3IAG19wSQZmPU%2F12ritPHa2yAPuzi3fO%2BRkNwgHapFlGSegB%2FIYUZ4E9uT2WLNJKobRLo491QBEKbHGMLYcw3g6ug8UqstQ85UcTKczlzm53FAaJDnPprow6fyKRhc8SUJtv3i0c%2BZ%2BwY%2F%2BrSrIsdXLRvJBq%2BWkE7fbqrkEiNdpX1hWGNWzOuG8tzhvGEZIHdT487CCCP6mr7J6xkQea6A5ou3wF%2FOsIIcKpRD5omaQWBkNhl4hDsDYIzeGQzYEQyazGsd9mG2hCDnLV%2FtGXnLkPr6a78iDkv%2F6571EbHBaQBU2bCJoPNOGl6KFaHSxEWjmAYLtS8JZHKbprwG7L8CpJ%2FRfPl3SK4bw2GvoBj0oyhbUl3bdf%2B24q%2ByaBji%2Fcy201eSt07yMOTbsg1ZaJaCCOOYnKbPx3dkFjRwl3zkk4%2BpWQDwcgyhTM8T61YlEm%2BhBf63A5weIO9J%2B%2BdcmBRw0RJx%2BKr2socAGJG1S8w%2Bjc8W9WYKExx8vMuFbbwZ%2B36213k7YOv8riwJYoLawj1Xxvr%2B3HSqnPa8DE82XDC%2B9uK%2FBjqkAd92QZOxrKqgHOjEssCJFUXxrcqi0rk8kfW%2Bi9N%2FnjqRS7kBHeqpKcSvgQE3uPVuM1WM0bm0%2BqffQzjXlvEEPulyNJuB7%2Fd%2B95VCiO7%2FupOxiOSrVlvUpzHbCSYkHjflTBqFoTgZ8%2Fr4BoLIMryKFenhi%2BI9Unml5W9tpI4tzCefwkyfK%2FDz2ivQ0occeFteru10afARHbKbxHwgvinmCQHjMFo8&X-Amz-Signature=466c408daacfc997ffc766be998e5f606606a021e484a0d0d5221a0f9bd7530f&X-Amz-SignedHeaders=host&x-id=GetObject)
