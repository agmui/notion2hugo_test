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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QB6M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FG7NdoIJsoW4nS2jdJamFp%2BHfORLpr3Olb2SSnmMVxAiBaxaKO21vw12Dh8%2F%2FimLxtHxxZ7sY8iWbDIy5lKmxPrCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhljx%2BZZmEhbkIHjNKtwDZ1vjbsfTi4cdUruJXW8t6VsqxJ099krk3x6DVKpLHS0klXppYOtVbcOX1S8M5sMS3571m5YtLR%2FtyLwsmb9SvRiINC7u%2BIJzB%2Fadx0vHXT3I02YzJS1hWsJ2TzEfKBLJAYn4bYZ6D8dFRE6gjTFHAgyF%2FqwhueTZnkMmhk1VIUpTFfovEdmlWSlYTBvnB3pXNCzC9ImXVO9dMPFA5ghhUaHtZss4CWOI6wNosyl9fsQ0f0p43fiZU0MzM%2ByahivkaiXFJOLtBLQBo8jiUg8mvWvzOFdT8ENBvRMXyjwFvPO536D4I2f2Hugt%2FrK5OMJtgNRHF%2FBvQHd16p5DsykPKDoCG4m92xRZA8Xb3BfH2e0rbPZwKB8qNd032SkvHg3tutIOk66r7bDGe%2BFtyuFuc%2Frpzsd%2FJynn5OIYNKV6yQja%2F1zT33hANsd6dP32kFM%2BcykV6QYDEpK4TAHScY1MFwNnpYCMngLGvqeBLvNbNa%2F50adORrYZ7mOFZkri8PqCyeKK8j6QvRhISEgOsAxEk7anQOBAkKRBHsioB0S4pog2MRQcT72SARlEVXbg3RDqIdzvtUE4afwBP4mn1Y3L29uXSeSCddVSQTrOd5SkHSQTF1QdBQkjntj%2BCgUwvaP9vwY6pgEGqG1fNH%2FyCOg5mOyXQUPrPPqJu7a7SPpK7bvPoWZEmokoxNdC1v6EkE9QwWj2NYbpY6iyEuHA9pt7FR2siKDYOUigY0khfsccf9j%2Bd1rHxZ1u1zfn9qfOZLYCNonMGjzTAwtE8GRS7cfSmg%2FVXJE%2Fg%2F0CdsJKocko0tvSeG97kU4CbkIwakCISspgE%2BrDf3K%2Fzw2zqppNoJnl39qTpWHJN%2FdLhI9r&X-Amz-Signature=d94480032275ff4085ed7ec6bfb911fde410eb46365042d8a5c476b3c14ff45c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QB6M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FG7NdoIJsoW4nS2jdJamFp%2BHfORLpr3Olb2SSnmMVxAiBaxaKO21vw12Dh8%2F%2FimLxtHxxZ7sY8iWbDIy5lKmxPrCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhljx%2BZZmEhbkIHjNKtwDZ1vjbsfTi4cdUruJXW8t6VsqxJ099krk3x6DVKpLHS0klXppYOtVbcOX1S8M5sMS3571m5YtLR%2FtyLwsmb9SvRiINC7u%2BIJzB%2Fadx0vHXT3I02YzJS1hWsJ2TzEfKBLJAYn4bYZ6D8dFRE6gjTFHAgyF%2FqwhueTZnkMmhk1VIUpTFfovEdmlWSlYTBvnB3pXNCzC9ImXVO9dMPFA5ghhUaHtZss4CWOI6wNosyl9fsQ0f0p43fiZU0MzM%2ByahivkaiXFJOLtBLQBo8jiUg8mvWvzOFdT8ENBvRMXyjwFvPO536D4I2f2Hugt%2FrK5OMJtgNRHF%2FBvQHd16p5DsykPKDoCG4m92xRZA8Xb3BfH2e0rbPZwKB8qNd032SkvHg3tutIOk66r7bDGe%2BFtyuFuc%2Frpzsd%2FJynn5OIYNKV6yQja%2F1zT33hANsd6dP32kFM%2BcykV6QYDEpK4TAHScY1MFwNnpYCMngLGvqeBLvNbNa%2F50adORrYZ7mOFZkri8PqCyeKK8j6QvRhISEgOsAxEk7anQOBAkKRBHsioB0S4pog2MRQcT72SARlEVXbg3RDqIdzvtUE4afwBP4mn1Y3L29uXSeSCddVSQTrOd5SkHSQTF1QdBQkjntj%2BCgUwvaP9vwY6pgEGqG1fNH%2FyCOg5mOyXQUPrPPqJu7a7SPpK7bvPoWZEmokoxNdC1v6EkE9QwWj2NYbpY6iyEuHA9pt7FR2siKDYOUigY0khfsccf9j%2Bd1rHxZ1u1zfn9qfOZLYCNonMGjzTAwtE8GRS7cfSmg%2FVXJE%2Fg%2F0CdsJKocko0tvSeG97kU4CbkIwakCISspgE%2BrDf3K%2Fzw2zqppNoJnl39qTpWHJN%2FdLhI9r&X-Amz-Signature=5ea0b9b0a25662d482fa964eb5e8c8ce0443bc3e2a6b206d23f73ec33126bfeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QB6M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FG7NdoIJsoW4nS2jdJamFp%2BHfORLpr3Olb2SSnmMVxAiBaxaKO21vw12Dh8%2F%2FimLxtHxxZ7sY8iWbDIy5lKmxPrCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhljx%2BZZmEhbkIHjNKtwDZ1vjbsfTi4cdUruJXW8t6VsqxJ099krk3x6DVKpLHS0klXppYOtVbcOX1S8M5sMS3571m5YtLR%2FtyLwsmb9SvRiINC7u%2BIJzB%2Fadx0vHXT3I02YzJS1hWsJ2TzEfKBLJAYn4bYZ6D8dFRE6gjTFHAgyF%2FqwhueTZnkMmhk1VIUpTFfovEdmlWSlYTBvnB3pXNCzC9ImXVO9dMPFA5ghhUaHtZss4CWOI6wNosyl9fsQ0f0p43fiZU0MzM%2ByahivkaiXFJOLtBLQBo8jiUg8mvWvzOFdT8ENBvRMXyjwFvPO536D4I2f2Hugt%2FrK5OMJtgNRHF%2FBvQHd16p5DsykPKDoCG4m92xRZA8Xb3BfH2e0rbPZwKB8qNd032SkvHg3tutIOk66r7bDGe%2BFtyuFuc%2Frpzsd%2FJynn5OIYNKV6yQja%2F1zT33hANsd6dP32kFM%2BcykV6QYDEpK4TAHScY1MFwNnpYCMngLGvqeBLvNbNa%2F50adORrYZ7mOFZkri8PqCyeKK8j6QvRhISEgOsAxEk7anQOBAkKRBHsioB0S4pog2MRQcT72SARlEVXbg3RDqIdzvtUE4afwBP4mn1Y3L29uXSeSCddVSQTrOd5SkHSQTF1QdBQkjntj%2BCgUwvaP9vwY6pgEGqG1fNH%2FyCOg5mOyXQUPrPPqJu7a7SPpK7bvPoWZEmokoxNdC1v6EkE9QwWj2NYbpY6iyEuHA9pt7FR2siKDYOUigY0khfsccf9j%2Bd1rHxZ1u1zfn9qfOZLYCNonMGjzTAwtE8GRS7cfSmg%2FVXJE%2Fg%2F0CdsJKocko0tvSeG97kU4CbkIwakCISspgE%2BrDf3K%2Fzw2zqppNoJnl39qTpWHJN%2FdLhI9r&X-Amz-Signature=d1db8ac80096b928a022386c0c59e08046c2db745ded71b2e984c238c75b61b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QB6M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FG7NdoIJsoW4nS2jdJamFp%2BHfORLpr3Olb2SSnmMVxAiBaxaKO21vw12Dh8%2F%2FimLxtHxxZ7sY8iWbDIy5lKmxPrCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhljx%2BZZmEhbkIHjNKtwDZ1vjbsfTi4cdUruJXW8t6VsqxJ099krk3x6DVKpLHS0klXppYOtVbcOX1S8M5sMS3571m5YtLR%2FtyLwsmb9SvRiINC7u%2BIJzB%2Fadx0vHXT3I02YzJS1hWsJ2TzEfKBLJAYn4bYZ6D8dFRE6gjTFHAgyF%2FqwhueTZnkMmhk1VIUpTFfovEdmlWSlYTBvnB3pXNCzC9ImXVO9dMPFA5ghhUaHtZss4CWOI6wNosyl9fsQ0f0p43fiZU0MzM%2ByahivkaiXFJOLtBLQBo8jiUg8mvWvzOFdT8ENBvRMXyjwFvPO536D4I2f2Hugt%2FrK5OMJtgNRHF%2FBvQHd16p5DsykPKDoCG4m92xRZA8Xb3BfH2e0rbPZwKB8qNd032SkvHg3tutIOk66r7bDGe%2BFtyuFuc%2Frpzsd%2FJynn5OIYNKV6yQja%2F1zT33hANsd6dP32kFM%2BcykV6QYDEpK4TAHScY1MFwNnpYCMngLGvqeBLvNbNa%2F50adORrYZ7mOFZkri8PqCyeKK8j6QvRhISEgOsAxEk7anQOBAkKRBHsioB0S4pog2MRQcT72SARlEVXbg3RDqIdzvtUE4afwBP4mn1Y3L29uXSeSCddVSQTrOd5SkHSQTF1QdBQkjntj%2BCgUwvaP9vwY6pgEGqG1fNH%2FyCOg5mOyXQUPrPPqJu7a7SPpK7bvPoWZEmokoxNdC1v6EkE9QwWj2NYbpY6iyEuHA9pt7FR2siKDYOUigY0khfsccf9j%2Bd1rHxZ1u1zfn9qfOZLYCNonMGjzTAwtE8GRS7cfSmg%2FVXJE%2Fg%2F0CdsJKocko0tvSeG97kU4CbkIwakCISspgE%2BrDf3K%2Fzw2zqppNoJnl39qTpWHJN%2FdLhI9r&X-Amz-Signature=3875b492abce8deca4524169acc3859fccd3e82d074959d761eb2db85399aa01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QB6M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FG7NdoIJsoW4nS2jdJamFp%2BHfORLpr3Olb2SSnmMVxAiBaxaKO21vw12Dh8%2F%2FimLxtHxxZ7sY8iWbDIy5lKmxPrCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhljx%2BZZmEhbkIHjNKtwDZ1vjbsfTi4cdUruJXW8t6VsqxJ099krk3x6DVKpLHS0klXppYOtVbcOX1S8M5sMS3571m5YtLR%2FtyLwsmb9SvRiINC7u%2BIJzB%2Fadx0vHXT3I02YzJS1hWsJ2TzEfKBLJAYn4bYZ6D8dFRE6gjTFHAgyF%2FqwhueTZnkMmhk1VIUpTFfovEdmlWSlYTBvnB3pXNCzC9ImXVO9dMPFA5ghhUaHtZss4CWOI6wNosyl9fsQ0f0p43fiZU0MzM%2ByahivkaiXFJOLtBLQBo8jiUg8mvWvzOFdT8ENBvRMXyjwFvPO536D4I2f2Hugt%2FrK5OMJtgNRHF%2FBvQHd16p5DsykPKDoCG4m92xRZA8Xb3BfH2e0rbPZwKB8qNd032SkvHg3tutIOk66r7bDGe%2BFtyuFuc%2Frpzsd%2FJynn5OIYNKV6yQja%2F1zT33hANsd6dP32kFM%2BcykV6QYDEpK4TAHScY1MFwNnpYCMngLGvqeBLvNbNa%2F50adORrYZ7mOFZkri8PqCyeKK8j6QvRhISEgOsAxEk7anQOBAkKRBHsioB0S4pog2MRQcT72SARlEVXbg3RDqIdzvtUE4afwBP4mn1Y3L29uXSeSCddVSQTrOd5SkHSQTF1QdBQkjntj%2BCgUwvaP9vwY6pgEGqG1fNH%2FyCOg5mOyXQUPrPPqJu7a7SPpK7bvPoWZEmokoxNdC1v6EkE9QwWj2NYbpY6iyEuHA9pt7FR2siKDYOUigY0khfsccf9j%2Bd1rHxZ1u1zfn9qfOZLYCNonMGjzTAwtE8GRS7cfSmg%2FVXJE%2Fg%2F0CdsJKocko0tvSeG97kU4CbkIwakCISspgE%2BrDf3K%2Fzw2zqppNoJnl39qTpWHJN%2FdLhI9r&X-Amz-Signature=8fa6f4c1bd9ffc7a1bb0be8f0f7b98c13a3b747779a08df0f844c59fc0754f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IA7QB6M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FG7NdoIJsoW4nS2jdJamFp%2BHfORLpr3Olb2SSnmMVxAiBaxaKO21vw12Dh8%2F%2FimLxtHxxZ7sY8iWbDIy5lKmxPrCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMhljx%2BZZmEhbkIHjNKtwDZ1vjbsfTi4cdUruJXW8t6VsqxJ099krk3x6DVKpLHS0klXppYOtVbcOX1S8M5sMS3571m5YtLR%2FtyLwsmb9SvRiINC7u%2BIJzB%2Fadx0vHXT3I02YzJS1hWsJ2TzEfKBLJAYn4bYZ6D8dFRE6gjTFHAgyF%2FqwhueTZnkMmhk1VIUpTFfovEdmlWSlYTBvnB3pXNCzC9ImXVO9dMPFA5ghhUaHtZss4CWOI6wNosyl9fsQ0f0p43fiZU0MzM%2ByahivkaiXFJOLtBLQBo8jiUg8mvWvzOFdT8ENBvRMXyjwFvPO536D4I2f2Hugt%2FrK5OMJtgNRHF%2FBvQHd16p5DsykPKDoCG4m92xRZA8Xb3BfH2e0rbPZwKB8qNd032SkvHg3tutIOk66r7bDGe%2BFtyuFuc%2Frpzsd%2FJynn5OIYNKV6yQja%2F1zT33hANsd6dP32kFM%2BcykV6QYDEpK4TAHScY1MFwNnpYCMngLGvqeBLvNbNa%2F50adORrYZ7mOFZkri8PqCyeKK8j6QvRhISEgOsAxEk7anQOBAkKRBHsioB0S4pog2MRQcT72SARlEVXbg3RDqIdzvtUE4afwBP4mn1Y3L29uXSeSCddVSQTrOd5SkHSQTF1QdBQkjntj%2BCgUwvaP9vwY6pgEGqG1fNH%2FyCOg5mOyXQUPrPPqJu7a7SPpK7bvPoWZEmokoxNdC1v6EkE9QwWj2NYbpY6iyEuHA9pt7FR2siKDYOUigY0khfsccf9j%2Bd1rHxZ1u1zfn9qfOZLYCNonMGjzTAwtE8GRS7cfSmg%2FVXJE%2Fg%2F0CdsJKocko0tvSeG97kU4CbkIwakCISspgE%2BrDf3K%2Fzw2zqppNoJnl39qTpWHJN%2FdLhI9r&X-Amz-Signature=2d3968137fff24e1e366146789ac677cd3e8e929f5ea040494072fbd0f646e54&X-Amz-SignedHeaders=host&x-id=GetObject)
