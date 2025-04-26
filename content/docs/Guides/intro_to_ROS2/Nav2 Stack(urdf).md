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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664222NCTB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT1QaW%2FgleKJ%2BVp4bpTGXH3ILOWWJTD6lwkZ3guCut9AiAuJcAUKey7xt8Q3%2BGP7xRlepxeZcZJwF4rDCRwQkKXyCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMa5eW1hBJPYYQ%2FBWGKtwDZ%2F6XxBSwQWLEPyuzq4MrVtJAGesTijY5v8sfUEjC0X4G%2BUiv5%2Fj%2BxpdqcxkYeQjNa268GCbbEotjNqoifDJGjJAgr5Gxo20b6iRnWBdhsj7lq16WTO9l0mFCFYXCVhUl1TZ37JuCe0blGqkCo7mMGqOcQg4QFamLhjcWMY7miOhfBNDMkm81DLxk14mRDv9iBz%2Fm5LmE1FLc6dWD7H5dmYvrsXWIyyXIoBfoBJ7rbaJahhqpVE60Iaie%2BHPLcJlW33UYf%2BHIpqKPA4H7qmfTM1nM1vmjlADvH1RSHAaWiBU9nxbylvpgFiG8LluXhpdAW1KERmtrzIvo60%2B0hWf7%2F7Fom72tsyKMWkdfZYwAjenN%2BS4byONOpak9MEWjFb2wEU2x7HwlyTm7rkuR92QK2zKRh4iZTRkMfDuS%2BBFL%2BDGkFRaDdlA%2FtRZGmUgU1WJlAEMpWr1EPD0pUaWeP3pf3U321ElGQu5gNOCavPp2FcNLO0fn933eQjCQCO9rGusmLeGmyv%2BzNeEMcsvOT%2FJEmJO4df38tHg3tTW5O6jzs%2FC3a3PWB913ZNMYqGZyXtXVaBDrouINzBvkU0PuOx57bFFO9fZZZFbdL%2F4BjhHsBP7oHUMPTIxm%2BA9Omfgwh%2BSxwAY6pgGjNumLcVWR64ACmIwgyMjNqnlxbEb%2BBgqRZuLSJQ%2Bvw6%2BiRhLCyf2J5znyYDU%2FihreNQSH2vQ%2FQUabbiqsM3bbj%2Bimd46hNKDL1lVeJc7hwZOg70C1QXewGE11d5oRctwN1eUY1yJ45jXKA%2FPXIBWHPggmpR%2Fdfj%2BvgMbiGG%2FIEaWUz05WcXleAvlPS%2BQilPIlGQDceWghbVCXsykXsHU5TUZOVMYE&X-Amz-Signature=d5ec39478f9e9cd6c62bb3194eea829f1797d0799bbbdc78e1b487a8181f770e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664222NCTB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT1QaW%2FgleKJ%2BVp4bpTGXH3ILOWWJTD6lwkZ3guCut9AiAuJcAUKey7xt8Q3%2BGP7xRlepxeZcZJwF4rDCRwQkKXyCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMa5eW1hBJPYYQ%2FBWGKtwDZ%2F6XxBSwQWLEPyuzq4MrVtJAGesTijY5v8sfUEjC0X4G%2BUiv5%2Fj%2BxpdqcxkYeQjNa268GCbbEotjNqoifDJGjJAgr5Gxo20b6iRnWBdhsj7lq16WTO9l0mFCFYXCVhUl1TZ37JuCe0blGqkCo7mMGqOcQg4QFamLhjcWMY7miOhfBNDMkm81DLxk14mRDv9iBz%2Fm5LmE1FLc6dWD7H5dmYvrsXWIyyXIoBfoBJ7rbaJahhqpVE60Iaie%2BHPLcJlW33UYf%2BHIpqKPA4H7qmfTM1nM1vmjlADvH1RSHAaWiBU9nxbylvpgFiG8LluXhpdAW1KERmtrzIvo60%2B0hWf7%2F7Fom72tsyKMWkdfZYwAjenN%2BS4byONOpak9MEWjFb2wEU2x7HwlyTm7rkuR92QK2zKRh4iZTRkMfDuS%2BBFL%2BDGkFRaDdlA%2FtRZGmUgU1WJlAEMpWr1EPD0pUaWeP3pf3U321ElGQu5gNOCavPp2FcNLO0fn933eQjCQCO9rGusmLeGmyv%2BzNeEMcsvOT%2FJEmJO4df38tHg3tTW5O6jzs%2FC3a3PWB913ZNMYqGZyXtXVaBDrouINzBvkU0PuOx57bFFO9fZZZFbdL%2F4BjhHsBP7oHUMPTIxm%2BA9Omfgwh%2BSxwAY6pgGjNumLcVWR64ACmIwgyMjNqnlxbEb%2BBgqRZuLSJQ%2Bvw6%2BiRhLCyf2J5znyYDU%2FihreNQSH2vQ%2FQUabbiqsM3bbj%2Bimd46hNKDL1lVeJc7hwZOg70C1QXewGE11d5oRctwN1eUY1yJ45jXKA%2FPXIBWHPggmpR%2Fdfj%2BvgMbiGG%2FIEaWUz05WcXleAvlPS%2BQilPIlGQDceWghbVCXsykXsHU5TUZOVMYE&X-Amz-Signature=53e2e6afbde03cb8feba38b7faef92525bd329b6ca9a22cf10839a2384d57f15&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664222NCTB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT1QaW%2FgleKJ%2BVp4bpTGXH3ILOWWJTD6lwkZ3guCut9AiAuJcAUKey7xt8Q3%2BGP7xRlepxeZcZJwF4rDCRwQkKXyCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMa5eW1hBJPYYQ%2FBWGKtwDZ%2F6XxBSwQWLEPyuzq4MrVtJAGesTijY5v8sfUEjC0X4G%2BUiv5%2Fj%2BxpdqcxkYeQjNa268GCbbEotjNqoifDJGjJAgr5Gxo20b6iRnWBdhsj7lq16WTO9l0mFCFYXCVhUl1TZ37JuCe0blGqkCo7mMGqOcQg4QFamLhjcWMY7miOhfBNDMkm81DLxk14mRDv9iBz%2Fm5LmE1FLc6dWD7H5dmYvrsXWIyyXIoBfoBJ7rbaJahhqpVE60Iaie%2BHPLcJlW33UYf%2BHIpqKPA4H7qmfTM1nM1vmjlADvH1RSHAaWiBU9nxbylvpgFiG8LluXhpdAW1KERmtrzIvo60%2B0hWf7%2F7Fom72tsyKMWkdfZYwAjenN%2BS4byONOpak9MEWjFb2wEU2x7HwlyTm7rkuR92QK2zKRh4iZTRkMfDuS%2BBFL%2BDGkFRaDdlA%2FtRZGmUgU1WJlAEMpWr1EPD0pUaWeP3pf3U321ElGQu5gNOCavPp2FcNLO0fn933eQjCQCO9rGusmLeGmyv%2BzNeEMcsvOT%2FJEmJO4df38tHg3tTW5O6jzs%2FC3a3PWB913ZNMYqGZyXtXVaBDrouINzBvkU0PuOx57bFFO9fZZZFbdL%2F4BjhHsBP7oHUMPTIxm%2BA9Omfgwh%2BSxwAY6pgGjNumLcVWR64ACmIwgyMjNqnlxbEb%2BBgqRZuLSJQ%2Bvw6%2BiRhLCyf2J5znyYDU%2FihreNQSH2vQ%2FQUabbiqsM3bbj%2Bimd46hNKDL1lVeJc7hwZOg70C1QXewGE11d5oRctwN1eUY1yJ45jXKA%2FPXIBWHPggmpR%2Fdfj%2BvgMbiGG%2FIEaWUz05WcXleAvlPS%2BQilPIlGQDceWghbVCXsykXsHU5TUZOVMYE&X-Amz-Signature=843caf0e886955b9202e4013eed5e5016020de697322c6703ad6b544514af014&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664222NCTB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT1QaW%2FgleKJ%2BVp4bpTGXH3ILOWWJTD6lwkZ3guCut9AiAuJcAUKey7xt8Q3%2BGP7xRlepxeZcZJwF4rDCRwQkKXyCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMa5eW1hBJPYYQ%2FBWGKtwDZ%2F6XxBSwQWLEPyuzq4MrVtJAGesTijY5v8sfUEjC0X4G%2BUiv5%2Fj%2BxpdqcxkYeQjNa268GCbbEotjNqoifDJGjJAgr5Gxo20b6iRnWBdhsj7lq16WTO9l0mFCFYXCVhUl1TZ37JuCe0blGqkCo7mMGqOcQg4QFamLhjcWMY7miOhfBNDMkm81DLxk14mRDv9iBz%2Fm5LmE1FLc6dWD7H5dmYvrsXWIyyXIoBfoBJ7rbaJahhqpVE60Iaie%2BHPLcJlW33UYf%2BHIpqKPA4H7qmfTM1nM1vmjlADvH1RSHAaWiBU9nxbylvpgFiG8LluXhpdAW1KERmtrzIvo60%2B0hWf7%2F7Fom72tsyKMWkdfZYwAjenN%2BS4byONOpak9MEWjFb2wEU2x7HwlyTm7rkuR92QK2zKRh4iZTRkMfDuS%2BBFL%2BDGkFRaDdlA%2FtRZGmUgU1WJlAEMpWr1EPD0pUaWeP3pf3U321ElGQu5gNOCavPp2FcNLO0fn933eQjCQCO9rGusmLeGmyv%2BzNeEMcsvOT%2FJEmJO4df38tHg3tTW5O6jzs%2FC3a3PWB913ZNMYqGZyXtXVaBDrouINzBvkU0PuOx57bFFO9fZZZFbdL%2F4BjhHsBP7oHUMPTIxm%2BA9Omfgwh%2BSxwAY6pgGjNumLcVWR64ACmIwgyMjNqnlxbEb%2BBgqRZuLSJQ%2Bvw6%2BiRhLCyf2J5znyYDU%2FihreNQSH2vQ%2FQUabbiqsM3bbj%2Bimd46hNKDL1lVeJc7hwZOg70C1QXewGE11d5oRctwN1eUY1yJ45jXKA%2FPXIBWHPggmpR%2Fdfj%2BvgMbiGG%2FIEaWUz05WcXleAvlPS%2BQilPIlGQDceWghbVCXsykXsHU5TUZOVMYE&X-Amz-Signature=2ec1cbe370a79b5af82c31944c56f0a459551d918b93362dab9a22367dc5e1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664222NCTB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT1QaW%2FgleKJ%2BVp4bpTGXH3ILOWWJTD6lwkZ3guCut9AiAuJcAUKey7xt8Q3%2BGP7xRlepxeZcZJwF4rDCRwQkKXyCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMa5eW1hBJPYYQ%2FBWGKtwDZ%2F6XxBSwQWLEPyuzq4MrVtJAGesTijY5v8sfUEjC0X4G%2BUiv5%2Fj%2BxpdqcxkYeQjNa268GCbbEotjNqoifDJGjJAgr5Gxo20b6iRnWBdhsj7lq16WTO9l0mFCFYXCVhUl1TZ37JuCe0blGqkCo7mMGqOcQg4QFamLhjcWMY7miOhfBNDMkm81DLxk14mRDv9iBz%2Fm5LmE1FLc6dWD7H5dmYvrsXWIyyXIoBfoBJ7rbaJahhqpVE60Iaie%2BHPLcJlW33UYf%2BHIpqKPA4H7qmfTM1nM1vmjlADvH1RSHAaWiBU9nxbylvpgFiG8LluXhpdAW1KERmtrzIvo60%2B0hWf7%2F7Fom72tsyKMWkdfZYwAjenN%2BS4byONOpak9MEWjFb2wEU2x7HwlyTm7rkuR92QK2zKRh4iZTRkMfDuS%2BBFL%2BDGkFRaDdlA%2FtRZGmUgU1WJlAEMpWr1EPD0pUaWeP3pf3U321ElGQu5gNOCavPp2FcNLO0fn933eQjCQCO9rGusmLeGmyv%2BzNeEMcsvOT%2FJEmJO4df38tHg3tTW5O6jzs%2FC3a3PWB913ZNMYqGZyXtXVaBDrouINzBvkU0PuOx57bFFO9fZZZFbdL%2F4BjhHsBP7oHUMPTIxm%2BA9Omfgwh%2BSxwAY6pgGjNumLcVWR64ACmIwgyMjNqnlxbEb%2BBgqRZuLSJQ%2Bvw6%2BiRhLCyf2J5znyYDU%2FihreNQSH2vQ%2FQUabbiqsM3bbj%2Bimd46hNKDL1lVeJc7hwZOg70C1QXewGE11d5oRctwN1eUY1yJ45jXKA%2FPXIBWHPggmpR%2Fdfj%2BvgMbiGG%2FIEaWUz05WcXleAvlPS%2BQilPIlGQDceWghbVCXsykXsHU5TUZOVMYE&X-Amz-Signature=b76c5fa0d3df007715a958b309ed91fbb80f27e0ee7fb7a36830105af1e16b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664222NCTB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBT1QaW%2FgleKJ%2BVp4bpTGXH3ILOWWJTD6lwkZ3guCut9AiAuJcAUKey7xt8Q3%2BGP7xRlepxeZcZJwF4rDCRwQkKXyCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMa5eW1hBJPYYQ%2FBWGKtwDZ%2F6XxBSwQWLEPyuzq4MrVtJAGesTijY5v8sfUEjC0X4G%2BUiv5%2Fj%2BxpdqcxkYeQjNa268GCbbEotjNqoifDJGjJAgr5Gxo20b6iRnWBdhsj7lq16WTO9l0mFCFYXCVhUl1TZ37JuCe0blGqkCo7mMGqOcQg4QFamLhjcWMY7miOhfBNDMkm81DLxk14mRDv9iBz%2Fm5LmE1FLc6dWD7H5dmYvrsXWIyyXIoBfoBJ7rbaJahhqpVE60Iaie%2BHPLcJlW33UYf%2BHIpqKPA4H7qmfTM1nM1vmjlADvH1RSHAaWiBU9nxbylvpgFiG8LluXhpdAW1KERmtrzIvo60%2B0hWf7%2F7Fom72tsyKMWkdfZYwAjenN%2BS4byONOpak9MEWjFb2wEU2x7HwlyTm7rkuR92QK2zKRh4iZTRkMfDuS%2BBFL%2BDGkFRaDdlA%2FtRZGmUgU1WJlAEMpWr1EPD0pUaWeP3pf3U321ElGQu5gNOCavPp2FcNLO0fn933eQjCQCO9rGusmLeGmyv%2BzNeEMcsvOT%2FJEmJO4df38tHg3tTW5O6jzs%2FC3a3PWB913ZNMYqGZyXtXVaBDrouINzBvkU0PuOx57bFFO9fZZZFbdL%2F4BjhHsBP7oHUMPTIxm%2BA9Omfgwh%2BSxwAY6pgGjNumLcVWR64ACmIwgyMjNqnlxbEb%2BBgqRZuLSJQ%2Bvw6%2BiRhLCyf2J5znyYDU%2FihreNQSH2vQ%2FQUabbiqsM3bbj%2Bimd46hNKDL1lVeJc7hwZOg70C1QXewGE11d5oRctwN1eUY1yJ45jXKA%2FPXIBWHPggmpR%2Fdfj%2BvgMbiGG%2FIEaWUz05WcXleAvlPS%2BQilPIlGQDceWghbVCXsykXsHU5TUZOVMYE&X-Amz-Signature=aa11a2edbf094d0b8918c94ccf2d3581bcd6f129aa6fbd86afe3042867881a1e&X-Amz-SignedHeaders=host&x-id=GetObject)
