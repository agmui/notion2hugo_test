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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVG47HC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoulVuSVEyyqCQ8eWXVqd0RHtAVVz1Spvpz%2F9YXOQcBQIgYGLyno%2FcrljRgAxrtlZPUidDhzcTzgHuynsgg0Jpc0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJh1WAfnkgHNv1zPSrcAzgRN%2Fjt4OfhmTRK1LnLr5BjmGtfiCkG3X3UmEzlqkOdfqJeWjBSsK69X3ljFIcTGu5l1JhzXBBovcG1PxqGoHrczKD%2FdYUFRgfXkhhRwMbG%2F%2BUUyp77uEfae30mnE6WdCkKRMZ6qksTm2douhofycUr2O8wBXDXRXr6jYo21IArTOBRp8xgk7T2Bz4JnhtPpHWuqdNfZSmduWVMvhNzosQRTpvnKl7DtiMrc5ltGbzLMUyMwXMYlnbtwFkY6QOKI%2FtN5Q8FgmU4v3yuNidpGHk3eaQI9XbgzC6IFhFOBLNtpSo3VMzHPO4EaAAY%2Fb0nbHkfCfMkrxS1k8pQXghtkH2fP7C4CyIcq1EfNWDWm%2FPOMkRlzokhBq9xWHLed%2FgfLz3qBHJ8soTnSfcc6amGepLWHhgJ2tmEFdxnYhyvHt66XqOwJ7PrO6XBF89psQatUBbXz%2BDd5c%2F%2Br1OGpmuACbVjPPfdjBQcUhcw2ZEEsfZ5H%2BzWHiyCaXPQtZVq%2Bgx%2BbFCEPO%2Ba0MDTQolKyZikvn4%2FQf2wEqajEe%2FIFAvuwVyi%2FWRGXp5eetAHaMAuxKjetAjKiZMOJDHkCRcyibqNCsNzdQsfLiXkZLSt59YR6Qk9OmbmD7Y6YJYvbdPwMOKi%2FsIGOqUBUi0dPLdFDCNV7ILSV3gtFarvlehIn6apYyQ8COMkPzBS9DFcC03%2BjJrzE9HeyMEmuGUTwQIKGueePIRI5jYCBq4scywNOfNDz2ur16%2BHZa37C6pV0uyVsds7E43fi0ARFZOiOUrJtokfVjrhoUV64dh%2FxSupRuwzrcIb2oJtsc6aEoZwetvxIJV4Dp7Xq4TMD%2FQWP0s%2F%2FHAZieo0qKAGZ27e4qHm&X-Amz-Signature=9c5634d0954c735653a601b76932d2f7b453ed5b64f66df0fa9584152003f278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVG47HC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoulVuSVEyyqCQ8eWXVqd0RHtAVVz1Spvpz%2F9YXOQcBQIgYGLyno%2FcrljRgAxrtlZPUidDhzcTzgHuynsgg0Jpc0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJh1WAfnkgHNv1zPSrcAzgRN%2Fjt4OfhmTRK1LnLr5BjmGtfiCkG3X3UmEzlqkOdfqJeWjBSsK69X3ljFIcTGu5l1JhzXBBovcG1PxqGoHrczKD%2FdYUFRgfXkhhRwMbG%2F%2BUUyp77uEfae30mnE6WdCkKRMZ6qksTm2douhofycUr2O8wBXDXRXr6jYo21IArTOBRp8xgk7T2Bz4JnhtPpHWuqdNfZSmduWVMvhNzosQRTpvnKl7DtiMrc5ltGbzLMUyMwXMYlnbtwFkY6QOKI%2FtN5Q8FgmU4v3yuNidpGHk3eaQI9XbgzC6IFhFOBLNtpSo3VMzHPO4EaAAY%2Fb0nbHkfCfMkrxS1k8pQXghtkH2fP7C4CyIcq1EfNWDWm%2FPOMkRlzokhBq9xWHLed%2FgfLz3qBHJ8soTnSfcc6amGepLWHhgJ2tmEFdxnYhyvHt66XqOwJ7PrO6XBF89psQatUBbXz%2BDd5c%2F%2Br1OGpmuACbVjPPfdjBQcUhcw2ZEEsfZ5H%2BzWHiyCaXPQtZVq%2Bgx%2BbFCEPO%2Ba0MDTQolKyZikvn4%2FQf2wEqajEe%2FIFAvuwVyi%2FWRGXp5eetAHaMAuxKjetAjKiZMOJDHkCRcyibqNCsNzdQsfLiXkZLSt59YR6Qk9OmbmD7Y6YJYvbdPwMOKi%2FsIGOqUBUi0dPLdFDCNV7ILSV3gtFarvlehIn6apYyQ8COMkPzBS9DFcC03%2BjJrzE9HeyMEmuGUTwQIKGueePIRI5jYCBq4scywNOfNDz2ur16%2BHZa37C6pV0uyVsds7E43fi0ARFZOiOUrJtokfVjrhoUV64dh%2FxSupRuwzrcIb2oJtsc6aEoZwetvxIJV4Dp7Xq4TMD%2FQWP0s%2F%2FHAZieo0qKAGZ27e4qHm&X-Amz-Signature=fbef316b6909a29faed642e7fc04b8db7ee472756e1ab54fd0a977aa41987246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVG47HC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoulVuSVEyyqCQ8eWXVqd0RHtAVVz1Spvpz%2F9YXOQcBQIgYGLyno%2FcrljRgAxrtlZPUidDhzcTzgHuynsgg0Jpc0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJh1WAfnkgHNv1zPSrcAzgRN%2Fjt4OfhmTRK1LnLr5BjmGtfiCkG3X3UmEzlqkOdfqJeWjBSsK69X3ljFIcTGu5l1JhzXBBovcG1PxqGoHrczKD%2FdYUFRgfXkhhRwMbG%2F%2BUUyp77uEfae30mnE6WdCkKRMZ6qksTm2douhofycUr2O8wBXDXRXr6jYo21IArTOBRp8xgk7T2Bz4JnhtPpHWuqdNfZSmduWVMvhNzosQRTpvnKl7DtiMrc5ltGbzLMUyMwXMYlnbtwFkY6QOKI%2FtN5Q8FgmU4v3yuNidpGHk3eaQI9XbgzC6IFhFOBLNtpSo3VMzHPO4EaAAY%2Fb0nbHkfCfMkrxS1k8pQXghtkH2fP7C4CyIcq1EfNWDWm%2FPOMkRlzokhBq9xWHLed%2FgfLz3qBHJ8soTnSfcc6amGepLWHhgJ2tmEFdxnYhyvHt66XqOwJ7PrO6XBF89psQatUBbXz%2BDd5c%2F%2Br1OGpmuACbVjPPfdjBQcUhcw2ZEEsfZ5H%2BzWHiyCaXPQtZVq%2Bgx%2BbFCEPO%2Ba0MDTQolKyZikvn4%2FQf2wEqajEe%2FIFAvuwVyi%2FWRGXp5eetAHaMAuxKjetAjKiZMOJDHkCRcyibqNCsNzdQsfLiXkZLSt59YR6Qk9OmbmD7Y6YJYvbdPwMOKi%2FsIGOqUBUi0dPLdFDCNV7ILSV3gtFarvlehIn6apYyQ8COMkPzBS9DFcC03%2BjJrzE9HeyMEmuGUTwQIKGueePIRI5jYCBq4scywNOfNDz2ur16%2BHZa37C6pV0uyVsds7E43fi0ARFZOiOUrJtokfVjrhoUV64dh%2FxSupRuwzrcIb2oJtsc6aEoZwetvxIJV4Dp7Xq4TMD%2FQWP0s%2F%2FHAZieo0qKAGZ27e4qHm&X-Amz-Signature=981bbdba337ae790dbcc197b362210132606c0f504548d888a3cd05dad4c99f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVG47HC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoulVuSVEyyqCQ8eWXVqd0RHtAVVz1Spvpz%2F9YXOQcBQIgYGLyno%2FcrljRgAxrtlZPUidDhzcTzgHuynsgg0Jpc0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJh1WAfnkgHNv1zPSrcAzgRN%2Fjt4OfhmTRK1LnLr5BjmGtfiCkG3X3UmEzlqkOdfqJeWjBSsK69X3ljFIcTGu5l1JhzXBBovcG1PxqGoHrczKD%2FdYUFRgfXkhhRwMbG%2F%2BUUyp77uEfae30mnE6WdCkKRMZ6qksTm2douhofycUr2O8wBXDXRXr6jYo21IArTOBRp8xgk7T2Bz4JnhtPpHWuqdNfZSmduWVMvhNzosQRTpvnKl7DtiMrc5ltGbzLMUyMwXMYlnbtwFkY6QOKI%2FtN5Q8FgmU4v3yuNidpGHk3eaQI9XbgzC6IFhFOBLNtpSo3VMzHPO4EaAAY%2Fb0nbHkfCfMkrxS1k8pQXghtkH2fP7C4CyIcq1EfNWDWm%2FPOMkRlzokhBq9xWHLed%2FgfLz3qBHJ8soTnSfcc6amGepLWHhgJ2tmEFdxnYhyvHt66XqOwJ7PrO6XBF89psQatUBbXz%2BDd5c%2F%2Br1OGpmuACbVjPPfdjBQcUhcw2ZEEsfZ5H%2BzWHiyCaXPQtZVq%2Bgx%2BbFCEPO%2Ba0MDTQolKyZikvn4%2FQf2wEqajEe%2FIFAvuwVyi%2FWRGXp5eetAHaMAuxKjetAjKiZMOJDHkCRcyibqNCsNzdQsfLiXkZLSt59YR6Qk9OmbmD7Y6YJYvbdPwMOKi%2FsIGOqUBUi0dPLdFDCNV7ILSV3gtFarvlehIn6apYyQ8COMkPzBS9DFcC03%2BjJrzE9HeyMEmuGUTwQIKGueePIRI5jYCBq4scywNOfNDz2ur16%2BHZa37C6pV0uyVsds7E43fi0ARFZOiOUrJtokfVjrhoUV64dh%2FxSupRuwzrcIb2oJtsc6aEoZwetvxIJV4Dp7Xq4TMD%2FQWP0s%2F%2FHAZieo0qKAGZ27e4qHm&X-Amz-Signature=abba9b432cf36fb0a4fed0f83bd18d71179b3187018866954449133e4817b353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVG47HC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoulVuSVEyyqCQ8eWXVqd0RHtAVVz1Spvpz%2F9YXOQcBQIgYGLyno%2FcrljRgAxrtlZPUidDhzcTzgHuynsgg0Jpc0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJh1WAfnkgHNv1zPSrcAzgRN%2Fjt4OfhmTRK1LnLr5BjmGtfiCkG3X3UmEzlqkOdfqJeWjBSsK69X3ljFIcTGu5l1JhzXBBovcG1PxqGoHrczKD%2FdYUFRgfXkhhRwMbG%2F%2BUUyp77uEfae30mnE6WdCkKRMZ6qksTm2douhofycUr2O8wBXDXRXr6jYo21IArTOBRp8xgk7T2Bz4JnhtPpHWuqdNfZSmduWVMvhNzosQRTpvnKl7DtiMrc5ltGbzLMUyMwXMYlnbtwFkY6QOKI%2FtN5Q8FgmU4v3yuNidpGHk3eaQI9XbgzC6IFhFOBLNtpSo3VMzHPO4EaAAY%2Fb0nbHkfCfMkrxS1k8pQXghtkH2fP7C4CyIcq1EfNWDWm%2FPOMkRlzokhBq9xWHLed%2FgfLz3qBHJ8soTnSfcc6amGepLWHhgJ2tmEFdxnYhyvHt66XqOwJ7PrO6XBF89psQatUBbXz%2BDd5c%2F%2Br1OGpmuACbVjPPfdjBQcUhcw2ZEEsfZ5H%2BzWHiyCaXPQtZVq%2Bgx%2BbFCEPO%2Ba0MDTQolKyZikvn4%2FQf2wEqajEe%2FIFAvuwVyi%2FWRGXp5eetAHaMAuxKjetAjKiZMOJDHkCRcyibqNCsNzdQsfLiXkZLSt59YR6Qk9OmbmD7Y6YJYvbdPwMOKi%2FsIGOqUBUi0dPLdFDCNV7ILSV3gtFarvlehIn6apYyQ8COMkPzBS9DFcC03%2BjJrzE9HeyMEmuGUTwQIKGueePIRI5jYCBq4scywNOfNDz2ur16%2BHZa37C6pV0uyVsds7E43fi0ARFZOiOUrJtokfVjrhoUV64dh%2FxSupRuwzrcIb2oJtsc6aEoZwetvxIJV4Dp7Xq4TMD%2FQWP0s%2F%2FHAZieo0qKAGZ27e4qHm&X-Amz-Signature=9efe851e04f2ef2c5f4d505c48caeb77083fba6ec5d576978ed4bd580b74b6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVG47HC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoulVuSVEyyqCQ8eWXVqd0RHtAVVz1Spvpz%2F9YXOQcBQIgYGLyno%2FcrljRgAxrtlZPUidDhzcTzgHuynsgg0Jpc0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJh1WAfnkgHNv1zPSrcAzgRN%2Fjt4OfhmTRK1LnLr5BjmGtfiCkG3X3UmEzlqkOdfqJeWjBSsK69X3ljFIcTGu5l1JhzXBBovcG1PxqGoHrczKD%2FdYUFRgfXkhhRwMbG%2F%2BUUyp77uEfae30mnE6WdCkKRMZ6qksTm2douhofycUr2O8wBXDXRXr6jYo21IArTOBRp8xgk7T2Bz4JnhtPpHWuqdNfZSmduWVMvhNzosQRTpvnKl7DtiMrc5ltGbzLMUyMwXMYlnbtwFkY6QOKI%2FtN5Q8FgmU4v3yuNidpGHk3eaQI9XbgzC6IFhFOBLNtpSo3VMzHPO4EaAAY%2Fb0nbHkfCfMkrxS1k8pQXghtkH2fP7C4CyIcq1EfNWDWm%2FPOMkRlzokhBq9xWHLed%2FgfLz3qBHJ8soTnSfcc6amGepLWHhgJ2tmEFdxnYhyvHt66XqOwJ7PrO6XBF89psQatUBbXz%2BDd5c%2F%2Br1OGpmuACbVjPPfdjBQcUhcw2ZEEsfZ5H%2BzWHiyCaXPQtZVq%2Bgx%2BbFCEPO%2Ba0MDTQolKyZikvn4%2FQf2wEqajEe%2FIFAvuwVyi%2FWRGXp5eetAHaMAuxKjetAjKiZMOJDHkCRcyibqNCsNzdQsfLiXkZLSt59YR6Qk9OmbmD7Y6YJYvbdPwMOKi%2FsIGOqUBUi0dPLdFDCNV7ILSV3gtFarvlehIn6apYyQ8COMkPzBS9DFcC03%2BjJrzE9HeyMEmuGUTwQIKGueePIRI5jYCBq4scywNOfNDz2ur16%2BHZa37C6pV0uyVsds7E43fi0ARFZOiOUrJtokfVjrhoUV64dh%2FxSupRuwzrcIb2oJtsc6aEoZwetvxIJV4Dp7Xq4TMD%2FQWP0s%2F%2FHAZieo0qKAGZ27e4qHm&X-Amz-Signature=3bc26ce29eeece700ebc2ef4fc14be0bf04ae6c4f66cee16c328ac44d24db97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
