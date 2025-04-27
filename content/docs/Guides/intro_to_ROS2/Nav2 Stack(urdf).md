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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXR3OJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCupIy71OPA7RVFojLIt%2FuiuEcORAOo7CaFXl3WlNTqQIgc26IpJmLtw1SL9ZcXEBnKFcVkUSwUxY3vWf0TLTN6%2Fwq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHmuavxyErJMpQjwjSrcA8FsKOVK2V6jxzSvLF27M1441tYNx6QQkA7i%2FFtkUOgXupzIByiiv1azdWRfwVYqZJ0MgmT7PaaJbcLoB51ZfoTMCXSfYSaySJQ9uZUxLbWGqZVL6eIlHN7uamxzwLPV0axiyXOuqODXHWoLcLOIrFV7wmmuMH9v6uHvjLGqso4usrFRPILiWCDlF3GuhyFyStFAcN8ThhL1ui7VLhL94r7FlGafVo5HgYDjKomJ75wf4GeWkIXU4ufUPjrIRx0lM5Wz28PunEftVo9uCvCKeCfJfsVuEBgD4lpROjA3jfYj%2FUblFoySsEfMqQYGFNlH3ZyHMK26%2FKpSMcdZXZOzgTWGI%2FLHWc9cQwcEzdB8Ut%2Fuje%2FQ8ruiJe4GvGvlaowwraqixH7znROwCrLKwJSGbuVvLpbYpZwkWZ02kE0ewl1Ch500F0iE8tSM6njLrn8YJ4uQ6Kg9AYZt213GFvb4Ctm5XBnLh57Xk0WzgEy0X8MkXCf4mN%2Bvgv8Kyfoi7qNhOfzdADYqUnmUAEx3v7I8mcvzOXUJ1hI9KtZx9vRpQHkClUsGtxo%2BMMsR7LXmXTbkn%2BFjPnqikNV98lmIYgVyKNTmlUSrr%2B9mwAqdx2jfieBBvHCepRBd6qC4rQvuMJbxucAGOqUBiEkrZKLhJ3oMxcHuPrUW1RIl66dkWMvkRKkOdv73jcQu1eBkEiOHkgxPKCIRCCuooa7v7eTxXBEMfVoVnJwSSWlcGJIxqHaw4GjiLEasEiQC8W26caAjlZLDNy%2FBq%2F8Ey2SMkuEmNzQYMQC9a7uzxzMQ9of1T0LRBeKcBFaPVSrjGas4pIJJG1mUSIM6Mfo6ceuw6TL%2FqWJbgsZ89yXohxOevG%2Bo&X-Amz-Signature=c9d52b73f0928579fefa91ddbf058df4db50856fdc93a98e4fec4c4fc8eac718&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXR3OJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCupIy71OPA7RVFojLIt%2FuiuEcORAOo7CaFXl3WlNTqQIgc26IpJmLtw1SL9ZcXEBnKFcVkUSwUxY3vWf0TLTN6%2Fwq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHmuavxyErJMpQjwjSrcA8FsKOVK2V6jxzSvLF27M1441tYNx6QQkA7i%2FFtkUOgXupzIByiiv1azdWRfwVYqZJ0MgmT7PaaJbcLoB51ZfoTMCXSfYSaySJQ9uZUxLbWGqZVL6eIlHN7uamxzwLPV0axiyXOuqODXHWoLcLOIrFV7wmmuMH9v6uHvjLGqso4usrFRPILiWCDlF3GuhyFyStFAcN8ThhL1ui7VLhL94r7FlGafVo5HgYDjKomJ75wf4GeWkIXU4ufUPjrIRx0lM5Wz28PunEftVo9uCvCKeCfJfsVuEBgD4lpROjA3jfYj%2FUblFoySsEfMqQYGFNlH3ZyHMK26%2FKpSMcdZXZOzgTWGI%2FLHWc9cQwcEzdB8Ut%2Fuje%2FQ8ruiJe4GvGvlaowwraqixH7znROwCrLKwJSGbuVvLpbYpZwkWZ02kE0ewl1Ch500F0iE8tSM6njLrn8YJ4uQ6Kg9AYZt213GFvb4Ctm5XBnLh57Xk0WzgEy0X8MkXCf4mN%2Bvgv8Kyfoi7qNhOfzdADYqUnmUAEx3v7I8mcvzOXUJ1hI9KtZx9vRpQHkClUsGtxo%2BMMsR7LXmXTbkn%2BFjPnqikNV98lmIYgVyKNTmlUSrr%2B9mwAqdx2jfieBBvHCepRBd6qC4rQvuMJbxucAGOqUBiEkrZKLhJ3oMxcHuPrUW1RIl66dkWMvkRKkOdv73jcQu1eBkEiOHkgxPKCIRCCuooa7v7eTxXBEMfVoVnJwSSWlcGJIxqHaw4GjiLEasEiQC8W26caAjlZLDNy%2FBq%2F8Ey2SMkuEmNzQYMQC9a7uzxzMQ9of1T0LRBeKcBFaPVSrjGas4pIJJG1mUSIM6Mfo6ceuw6TL%2FqWJbgsZ89yXohxOevG%2Bo&X-Amz-Signature=59c0eff7eda5fe8de3184e19ab19365daae219bc8a536a547ac2990d4cd07da9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXR3OJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCupIy71OPA7RVFojLIt%2FuiuEcORAOo7CaFXl3WlNTqQIgc26IpJmLtw1SL9ZcXEBnKFcVkUSwUxY3vWf0TLTN6%2Fwq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHmuavxyErJMpQjwjSrcA8FsKOVK2V6jxzSvLF27M1441tYNx6QQkA7i%2FFtkUOgXupzIByiiv1azdWRfwVYqZJ0MgmT7PaaJbcLoB51ZfoTMCXSfYSaySJQ9uZUxLbWGqZVL6eIlHN7uamxzwLPV0axiyXOuqODXHWoLcLOIrFV7wmmuMH9v6uHvjLGqso4usrFRPILiWCDlF3GuhyFyStFAcN8ThhL1ui7VLhL94r7FlGafVo5HgYDjKomJ75wf4GeWkIXU4ufUPjrIRx0lM5Wz28PunEftVo9uCvCKeCfJfsVuEBgD4lpROjA3jfYj%2FUblFoySsEfMqQYGFNlH3ZyHMK26%2FKpSMcdZXZOzgTWGI%2FLHWc9cQwcEzdB8Ut%2Fuje%2FQ8ruiJe4GvGvlaowwraqixH7znROwCrLKwJSGbuVvLpbYpZwkWZ02kE0ewl1Ch500F0iE8tSM6njLrn8YJ4uQ6Kg9AYZt213GFvb4Ctm5XBnLh57Xk0WzgEy0X8MkXCf4mN%2Bvgv8Kyfoi7qNhOfzdADYqUnmUAEx3v7I8mcvzOXUJ1hI9KtZx9vRpQHkClUsGtxo%2BMMsR7LXmXTbkn%2BFjPnqikNV98lmIYgVyKNTmlUSrr%2B9mwAqdx2jfieBBvHCepRBd6qC4rQvuMJbxucAGOqUBiEkrZKLhJ3oMxcHuPrUW1RIl66dkWMvkRKkOdv73jcQu1eBkEiOHkgxPKCIRCCuooa7v7eTxXBEMfVoVnJwSSWlcGJIxqHaw4GjiLEasEiQC8W26caAjlZLDNy%2FBq%2F8Ey2SMkuEmNzQYMQC9a7uzxzMQ9of1T0LRBeKcBFaPVSrjGas4pIJJG1mUSIM6Mfo6ceuw6TL%2FqWJbgsZ89yXohxOevG%2Bo&X-Amz-Signature=07afcc353ae521dad3f0e7e418fe2d7bb64e1095461db9f988d488e9145a2619&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXR3OJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCupIy71OPA7RVFojLIt%2FuiuEcORAOo7CaFXl3WlNTqQIgc26IpJmLtw1SL9ZcXEBnKFcVkUSwUxY3vWf0TLTN6%2Fwq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHmuavxyErJMpQjwjSrcA8FsKOVK2V6jxzSvLF27M1441tYNx6QQkA7i%2FFtkUOgXupzIByiiv1azdWRfwVYqZJ0MgmT7PaaJbcLoB51ZfoTMCXSfYSaySJQ9uZUxLbWGqZVL6eIlHN7uamxzwLPV0axiyXOuqODXHWoLcLOIrFV7wmmuMH9v6uHvjLGqso4usrFRPILiWCDlF3GuhyFyStFAcN8ThhL1ui7VLhL94r7FlGafVo5HgYDjKomJ75wf4GeWkIXU4ufUPjrIRx0lM5Wz28PunEftVo9uCvCKeCfJfsVuEBgD4lpROjA3jfYj%2FUblFoySsEfMqQYGFNlH3ZyHMK26%2FKpSMcdZXZOzgTWGI%2FLHWc9cQwcEzdB8Ut%2Fuje%2FQ8ruiJe4GvGvlaowwraqixH7znROwCrLKwJSGbuVvLpbYpZwkWZ02kE0ewl1Ch500F0iE8tSM6njLrn8YJ4uQ6Kg9AYZt213GFvb4Ctm5XBnLh57Xk0WzgEy0X8MkXCf4mN%2Bvgv8Kyfoi7qNhOfzdADYqUnmUAEx3v7I8mcvzOXUJ1hI9KtZx9vRpQHkClUsGtxo%2BMMsR7LXmXTbkn%2BFjPnqikNV98lmIYgVyKNTmlUSrr%2B9mwAqdx2jfieBBvHCepRBd6qC4rQvuMJbxucAGOqUBiEkrZKLhJ3oMxcHuPrUW1RIl66dkWMvkRKkOdv73jcQu1eBkEiOHkgxPKCIRCCuooa7v7eTxXBEMfVoVnJwSSWlcGJIxqHaw4GjiLEasEiQC8W26caAjlZLDNy%2FBq%2F8Ey2SMkuEmNzQYMQC9a7uzxzMQ9of1T0LRBeKcBFaPVSrjGas4pIJJG1mUSIM6Mfo6ceuw6TL%2FqWJbgsZ89yXohxOevG%2Bo&X-Amz-Signature=567d5cb235e4fb3c773321a45b778040ed64a10f9ffaf61410de3607364c75d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXR3OJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCupIy71OPA7RVFojLIt%2FuiuEcORAOo7CaFXl3WlNTqQIgc26IpJmLtw1SL9ZcXEBnKFcVkUSwUxY3vWf0TLTN6%2Fwq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHmuavxyErJMpQjwjSrcA8FsKOVK2V6jxzSvLF27M1441tYNx6QQkA7i%2FFtkUOgXupzIByiiv1azdWRfwVYqZJ0MgmT7PaaJbcLoB51ZfoTMCXSfYSaySJQ9uZUxLbWGqZVL6eIlHN7uamxzwLPV0axiyXOuqODXHWoLcLOIrFV7wmmuMH9v6uHvjLGqso4usrFRPILiWCDlF3GuhyFyStFAcN8ThhL1ui7VLhL94r7FlGafVo5HgYDjKomJ75wf4GeWkIXU4ufUPjrIRx0lM5Wz28PunEftVo9uCvCKeCfJfsVuEBgD4lpROjA3jfYj%2FUblFoySsEfMqQYGFNlH3ZyHMK26%2FKpSMcdZXZOzgTWGI%2FLHWc9cQwcEzdB8Ut%2Fuje%2FQ8ruiJe4GvGvlaowwraqixH7znROwCrLKwJSGbuVvLpbYpZwkWZ02kE0ewl1Ch500F0iE8tSM6njLrn8YJ4uQ6Kg9AYZt213GFvb4Ctm5XBnLh57Xk0WzgEy0X8MkXCf4mN%2Bvgv8Kyfoi7qNhOfzdADYqUnmUAEx3v7I8mcvzOXUJ1hI9KtZx9vRpQHkClUsGtxo%2BMMsR7LXmXTbkn%2BFjPnqikNV98lmIYgVyKNTmlUSrr%2B9mwAqdx2jfieBBvHCepRBd6qC4rQvuMJbxucAGOqUBiEkrZKLhJ3oMxcHuPrUW1RIl66dkWMvkRKkOdv73jcQu1eBkEiOHkgxPKCIRCCuooa7v7eTxXBEMfVoVnJwSSWlcGJIxqHaw4GjiLEasEiQC8W26caAjlZLDNy%2FBq%2F8Ey2SMkuEmNzQYMQC9a7uzxzMQ9of1T0LRBeKcBFaPVSrjGas4pIJJG1mUSIM6Mfo6ceuw6TL%2FqWJbgsZ89yXohxOevG%2Bo&X-Amz-Signature=dd9857bfc350688ea4a4909ce44342c60fa3b3467461fe8cab16643ea69c066e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VROXR3OJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCupIy71OPA7RVFojLIt%2FuiuEcORAOo7CaFXl3WlNTqQIgc26IpJmLtw1SL9ZcXEBnKFcVkUSwUxY3vWf0TLTN6%2Fwq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHmuavxyErJMpQjwjSrcA8FsKOVK2V6jxzSvLF27M1441tYNx6QQkA7i%2FFtkUOgXupzIByiiv1azdWRfwVYqZJ0MgmT7PaaJbcLoB51ZfoTMCXSfYSaySJQ9uZUxLbWGqZVL6eIlHN7uamxzwLPV0axiyXOuqODXHWoLcLOIrFV7wmmuMH9v6uHvjLGqso4usrFRPILiWCDlF3GuhyFyStFAcN8ThhL1ui7VLhL94r7FlGafVo5HgYDjKomJ75wf4GeWkIXU4ufUPjrIRx0lM5Wz28PunEftVo9uCvCKeCfJfsVuEBgD4lpROjA3jfYj%2FUblFoySsEfMqQYGFNlH3ZyHMK26%2FKpSMcdZXZOzgTWGI%2FLHWc9cQwcEzdB8Ut%2Fuje%2FQ8ruiJe4GvGvlaowwraqixH7znROwCrLKwJSGbuVvLpbYpZwkWZ02kE0ewl1Ch500F0iE8tSM6njLrn8YJ4uQ6Kg9AYZt213GFvb4Ctm5XBnLh57Xk0WzgEy0X8MkXCf4mN%2Bvgv8Kyfoi7qNhOfzdADYqUnmUAEx3v7I8mcvzOXUJ1hI9KtZx9vRpQHkClUsGtxo%2BMMsR7LXmXTbkn%2BFjPnqikNV98lmIYgVyKNTmlUSrr%2B9mwAqdx2jfieBBvHCepRBd6qC4rQvuMJbxucAGOqUBiEkrZKLhJ3oMxcHuPrUW1RIl66dkWMvkRKkOdv73jcQu1eBkEiOHkgxPKCIRCCuooa7v7eTxXBEMfVoVnJwSSWlcGJIxqHaw4GjiLEasEiQC8W26caAjlZLDNy%2FBq%2F8Ey2SMkuEmNzQYMQC9a7uzxzMQ9of1T0LRBeKcBFaPVSrjGas4pIJJG1mUSIM6Mfo6ceuw6TL%2FqWJbgsZ89yXohxOevG%2Bo&X-Amz-Signature=3bf2e71a289fc5bf3421247d0f61033f76e6aedd85a25581c768dfa1aaeeaf8f&X-Amz-SignedHeaders=host&x-id=GetObject)
