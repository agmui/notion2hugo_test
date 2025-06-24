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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYJYMQW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEmzSnFgITSESJXv8eYnIxQZA1IRQ4fCD1t8pTvEHvanAiEAku77FByJLvAEq%2FWsIrguwYzMHzjDAvw0%2BrljxApSdgoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAm1Qf0eePGRKUztfircA57EktIfikio%2BoJ%2FUcTrJQn3aw2nMJdUQ5DSxomiR%2BITKwsNDfLK9iyWQAN7tRySsYIutXdeSQTsaK%2FH9UlDfVgUel5JDkMgIym5VUF0%2BZ7vuhV9tPcR1ukiokJAzt3JefSs61NdwXXBmgx3jqmucL4vqgpUUIQOn1PihxSM0eSMY9i8Ur0nRYMwqOh5RQhWxWbX52ndDal7B5Np16RvKRmDZiO4VuQi%2B83rvlizYOHSnBV2MnrW9Ob5tgUc8ASsgyvmBBZrkj9IUMua3Dlcs%2FnLyC4uRblqdgMcdylMyIwNr0WHYdAOft4JCWyXW1yVne9gfO9zqhsnuQ86TGZwnUOt9w4X9Lg4WRBW6HBNIhJz8PFcgMuf9klozcQcXx2D1blyHipS7CF2GPUJl07jTlA%2FX7K6lOTEg2KuKyVMbzWe9XJBHhErBqXNKAhezgCmC3d7j9%2F3rFcG8uZKglspz4iKGfXjS2wNqd4%2FdqiGNR13w1cMNy9SqAZ9ywGcPHuhBioiG8HodgP%2BOfH4RmnCbo4g4eAGVJ2XkgmTsl3A2yADNcyuALp4uJbBfc%2BD%2FC8say4m6O1IsmQR%2Fbl1XTE15Umb04WodrJvrZG7kB2M%2B1hPkhXz5naynbPZMTelMK7Y6MIGOqUB9KVPGKcd03t1TDtD%2BnHn%2FBGsgXxo4AFmLyJtUqQOUEDmKV7YNM9IEmBrFm%2FfTLxSTrC6Ai330kFBmlnTM5t7f%2FcyQ0tdwjEsk4r%2FwmdWW23SNjHK5P2isWjAwESrFCKS1LrW3kIFrou0XY55FOKJWk3AKkphjyaz97zf6HVw2hBsSQTghr%2Ba7ErYkG5ztiD3915pjwm6gSizy7p2YieNxiE0C1Qk&X-Amz-Signature=e4b367b55cdd3e595abcdd49e457bddacc47ab9761fd51a9486cb88fa62fa5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYJYMQW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEmzSnFgITSESJXv8eYnIxQZA1IRQ4fCD1t8pTvEHvanAiEAku77FByJLvAEq%2FWsIrguwYzMHzjDAvw0%2BrljxApSdgoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAm1Qf0eePGRKUztfircA57EktIfikio%2BoJ%2FUcTrJQn3aw2nMJdUQ5DSxomiR%2BITKwsNDfLK9iyWQAN7tRySsYIutXdeSQTsaK%2FH9UlDfVgUel5JDkMgIym5VUF0%2BZ7vuhV9tPcR1ukiokJAzt3JefSs61NdwXXBmgx3jqmucL4vqgpUUIQOn1PihxSM0eSMY9i8Ur0nRYMwqOh5RQhWxWbX52ndDal7B5Np16RvKRmDZiO4VuQi%2B83rvlizYOHSnBV2MnrW9Ob5tgUc8ASsgyvmBBZrkj9IUMua3Dlcs%2FnLyC4uRblqdgMcdylMyIwNr0WHYdAOft4JCWyXW1yVne9gfO9zqhsnuQ86TGZwnUOt9w4X9Lg4WRBW6HBNIhJz8PFcgMuf9klozcQcXx2D1blyHipS7CF2GPUJl07jTlA%2FX7K6lOTEg2KuKyVMbzWe9XJBHhErBqXNKAhezgCmC3d7j9%2F3rFcG8uZKglspz4iKGfXjS2wNqd4%2FdqiGNR13w1cMNy9SqAZ9ywGcPHuhBioiG8HodgP%2BOfH4RmnCbo4g4eAGVJ2XkgmTsl3A2yADNcyuALp4uJbBfc%2BD%2FC8say4m6O1IsmQR%2Fbl1XTE15Umb04WodrJvrZG7kB2M%2B1hPkhXz5naynbPZMTelMK7Y6MIGOqUB9KVPGKcd03t1TDtD%2BnHn%2FBGsgXxo4AFmLyJtUqQOUEDmKV7YNM9IEmBrFm%2FfTLxSTrC6Ai330kFBmlnTM5t7f%2FcyQ0tdwjEsk4r%2FwmdWW23SNjHK5P2isWjAwESrFCKS1LrW3kIFrou0XY55FOKJWk3AKkphjyaz97zf6HVw2hBsSQTghr%2Ba7ErYkG5ztiD3915pjwm6gSizy7p2YieNxiE0C1Qk&X-Amz-Signature=882d6abc8c927d91afabd9207bc77405b93b26d17823e8db90823d3b7e61decf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYJYMQW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEmzSnFgITSESJXv8eYnIxQZA1IRQ4fCD1t8pTvEHvanAiEAku77FByJLvAEq%2FWsIrguwYzMHzjDAvw0%2BrljxApSdgoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAm1Qf0eePGRKUztfircA57EktIfikio%2BoJ%2FUcTrJQn3aw2nMJdUQ5DSxomiR%2BITKwsNDfLK9iyWQAN7tRySsYIutXdeSQTsaK%2FH9UlDfVgUel5JDkMgIym5VUF0%2BZ7vuhV9tPcR1ukiokJAzt3JefSs61NdwXXBmgx3jqmucL4vqgpUUIQOn1PihxSM0eSMY9i8Ur0nRYMwqOh5RQhWxWbX52ndDal7B5Np16RvKRmDZiO4VuQi%2B83rvlizYOHSnBV2MnrW9Ob5tgUc8ASsgyvmBBZrkj9IUMua3Dlcs%2FnLyC4uRblqdgMcdylMyIwNr0WHYdAOft4JCWyXW1yVne9gfO9zqhsnuQ86TGZwnUOt9w4X9Lg4WRBW6HBNIhJz8PFcgMuf9klozcQcXx2D1blyHipS7CF2GPUJl07jTlA%2FX7K6lOTEg2KuKyVMbzWe9XJBHhErBqXNKAhezgCmC3d7j9%2F3rFcG8uZKglspz4iKGfXjS2wNqd4%2FdqiGNR13w1cMNy9SqAZ9ywGcPHuhBioiG8HodgP%2BOfH4RmnCbo4g4eAGVJ2XkgmTsl3A2yADNcyuALp4uJbBfc%2BD%2FC8say4m6O1IsmQR%2Fbl1XTE15Umb04WodrJvrZG7kB2M%2B1hPkhXz5naynbPZMTelMK7Y6MIGOqUB9KVPGKcd03t1TDtD%2BnHn%2FBGsgXxo4AFmLyJtUqQOUEDmKV7YNM9IEmBrFm%2FfTLxSTrC6Ai330kFBmlnTM5t7f%2FcyQ0tdwjEsk4r%2FwmdWW23SNjHK5P2isWjAwESrFCKS1LrW3kIFrou0XY55FOKJWk3AKkphjyaz97zf6HVw2hBsSQTghr%2Ba7ErYkG5ztiD3915pjwm6gSizy7p2YieNxiE0C1Qk&X-Amz-Signature=f474579a7e5615cb2e144bfdf04a2b4084666204d8c26972dd043840e7e5c992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYJYMQW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEmzSnFgITSESJXv8eYnIxQZA1IRQ4fCD1t8pTvEHvanAiEAku77FByJLvAEq%2FWsIrguwYzMHzjDAvw0%2BrljxApSdgoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAm1Qf0eePGRKUztfircA57EktIfikio%2BoJ%2FUcTrJQn3aw2nMJdUQ5DSxomiR%2BITKwsNDfLK9iyWQAN7tRySsYIutXdeSQTsaK%2FH9UlDfVgUel5JDkMgIym5VUF0%2BZ7vuhV9tPcR1ukiokJAzt3JefSs61NdwXXBmgx3jqmucL4vqgpUUIQOn1PihxSM0eSMY9i8Ur0nRYMwqOh5RQhWxWbX52ndDal7B5Np16RvKRmDZiO4VuQi%2B83rvlizYOHSnBV2MnrW9Ob5tgUc8ASsgyvmBBZrkj9IUMua3Dlcs%2FnLyC4uRblqdgMcdylMyIwNr0WHYdAOft4JCWyXW1yVne9gfO9zqhsnuQ86TGZwnUOt9w4X9Lg4WRBW6HBNIhJz8PFcgMuf9klozcQcXx2D1blyHipS7CF2GPUJl07jTlA%2FX7K6lOTEg2KuKyVMbzWe9XJBHhErBqXNKAhezgCmC3d7j9%2F3rFcG8uZKglspz4iKGfXjS2wNqd4%2FdqiGNR13w1cMNy9SqAZ9ywGcPHuhBioiG8HodgP%2BOfH4RmnCbo4g4eAGVJ2XkgmTsl3A2yADNcyuALp4uJbBfc%2BD%2FC8say4m6O1IsmQR%2Fbl1XTE15Umb04WodrJvrZG7kB2M%2B1hPkhXz5naynbPZMTelMK7Y6MIGOqUB9KVPGKcd03t1TDtD%2BnHn%2FBGsgXxo4AFmLyJtUqQOUEDmKV7YNM9IEmBrFm%2FfTLxSTrC6Ai330kFBmlnTM5t7f%2FcyQ0tdwjEsk4r%2FwmdWW23SNjHK5P2isWjAwESrFCKS1LrW3kIFrou0XY55FOKJWk3AKkphjyaz97zf6HVw2hBsSQTghr%2Ba7ErYkG5ztiD3915pjwm6gSizy7p2YieNxiE0C1Qk&X-Amz-Signature=d38bc33859a7e8d2254b78dca1d86d97fd45d7ae717276cda47fe0bede1b9fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYJYMQW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEmzSnFgITSESJXv8eYnIxQZA1IRQ4fCD1t8pTvEHvanAiEAku77FByJLvAEq%2FWsIrguwYzMHzjDAvw0%2BrljxApSdgoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAm1Qf0eePGRKUztfircA57EktIfikio%2BoJ%2FUcTrJQn3aw2nMJdUQ5DSxomiR%2BITKwsNDfLK9iyWQAN7tRySsYIutXdeSQTsaK%2FH9UlDfVgUel5JDkMgIym5VUF0%2BZ7vuhV9tPcR1ukiokJAzt3JefSs61NdwXXBmgx3jqmucL4vqgpUUIQOn1PihxSM0eSMY9i8Ur0nRYMwqOh5RQhWxWbX52ndDal7B5Np16RvKRmDZiO4VuQi%2B83rvlizYOHSnBV2MnrW9Ob5tgUc8ASsgyvmBBZrkj9IUMua3Dlcs%2FnLyC4uRblqdgMcdylMyIwNr0WHYdAOft4JCWyXW1yVne9gfO9zqhsnuQ86TGZwnUOt9w4X9Lg4WRBW6HBNIhJz8PFcgMuf9klozcQcXx2D1blyHipS7CF2GPUJl07jTlA%2FX7K6lOTEg2KuKyVMbzWe9XJBHhErBqXNKAhezgCmC3d7j9%2F3rFcG8uZKglspz4iKGfXjS2wNqd4%2FdqiGNR13w1cMNy9SqAZ9ywGcPHuhBioiG8HodgP%2BOfH4RmnCbo4g4eAGVJ2XkgmTsl3A2yADNcyuALp4uJbBfc%2BD%2FC8say4m6O1IsmQR%2Fbl1XTE15Umb04WodrJvrZG7kB2M%2B1hPkhXz5naynbPZMTelMK7Y6MIGOqUB9KVPGKcd03t1TDtD%2BnHn%2FBGsgXxo4AFmLyJtUqQOUEDmKV7YNM9IEmBrFm%2FfTLxSTrC6Ai330kFBmlnTM5t7f%2FcyQ0tdwjEsk4r%2FwmdWW23SNjHK5P2isWjAwESrFCKS1LrW3kIFrou0XY55FOKJWk3AKkphjyaz97zf6HVw2hBsSQTghr%2Ba7ErYkG5ztiD3915pjwm6gSizy7p2YieNxiE0C1Qk&X-Amz-Signature=30dbce8d6e37b20a0e92259302eca43584b083b2c35e85cbb09125c705565df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYJYMQW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEmzSnFgITSESJXv8eYnIxQZA1IRQ4fCD1t8pTvEHvanAiEAku77FByJLvAEq%2FWsIrguwYzMHzjDAvw0%2BrljxApSdgoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAm1Qf0eePGRKUztfircA57EktIfikio%2BoJ%2FUcTrJQn3aw2nMJdUQ5DSxomiR%2BITKwsNDfLK9iyWQAN7tRySsYIutXdeSQTsaK%2FH9UlDfVgUel5JDkMgIym5VUF0%2BZ7vuhV9tPcR1ukiokJAzt3JefSs61NdwXXBmgx3jqmucL4vqgpUUIQOn1PihxSM0eSMY9i8Ur0nRYMwqOh5RQhWxWbX52ndDal7B5Np16RvKRmDZiO4VuQi%2B83rvlizYOHSnBV2MnrW9Ob5tgUc8ASsgyvmBBZrkj9IUMua3Dlcs%2FnLyC4uRblqdgMcdylMyIwNr0WHYdAOft4JCWyXW1yVne9gfO9zqhsnuQ86TGZwnUOt9w4X9Lg4WRBW6HBNIhJz8PFcgMuf9klozcQcXx2D1blyHipS7CF2GPUJl07jTlA%2FX7K6lOTEg2KuKyVMbzWe9XJBHhErBqXNKAhezgCmC3d7j9%2F3rFcG8uZKglspz4iKGfXjS2wNqd4%2FdqiGNR13w1cMNy9SqAZ9ywGcPHuhBioiG8HodgP%2BOfH4RmnCbo4g4eAGVJ2XkgmTsl3A2yADNcyuALp4uJbBfc%2BD%2FC8say4m6O1IsmQR%2Fbl1XTE15Umb04WodrJvrZG7kB2M%2B1hPkhXz5naynbPZMTelMK7Y6MIGOqUB9KVPGKcd03t1TDtD%2BnHn%2FBGsgXxo4AFmLyJtUqQOUEDmKV7YNM9IEmBrFm%2FfTLxSTrC6Ai330kFBmlnTM5t7f%2FcyQ0tdwjEsk4r%2FwmdWW23SNjHK5P2isWjAwESrFCKS1LrW3kIFrou0XY55FOKJWk3AKkphjyaz97zf6HVw2hBsSQTghr%2Ba7ErYkG5ztiD3915pjwm6gSizy7p2YieNxiE0C1Qk&X-Amz-Signature=bd6416562bbaf65561400ba3cf0cf99d424145bc6a0c39c90c72ff0726517def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
