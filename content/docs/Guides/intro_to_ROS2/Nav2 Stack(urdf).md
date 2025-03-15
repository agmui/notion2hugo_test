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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOZQPT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFI1z8J5lDXUg%2FkVFcWEYzQGqJdNaP5DQbrc7ttnfiBwIgS%2BGn5IsK6sTDaJPJI%2BxJHAqKmobeiNwP3fJsEytkEMUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11NiCTcPF39GqtSircA%2Bv320OSUygbVIpw9mn%2BsQcjp8fg8gFpJItBgg6Sex0r3uUEUoV2owWEIBq0TtPMXvPN6IBSYuQMcmANCJ7481GT%2Fx9XW9Txqy83CZY%2BdExBP%2BH%2BNq2%2Bt31GQ%2BJZigCXrm5a%2FQ%2BQ6X92j%2Fva2tkcoT545r958CPzQxn2ffVKOCR%2Fm%2F8i5vTNaBT2OALMBu%2BKRGS6SAgQbzH7II1Qr%2FQWuQftYbp%2BiZEKQv%2FS0r21hxBEAD1eqwlfJ2BspCO4hsBXsdfpdlA55zcHoA7r2o0XYUsj8Jrrt%2Bpo63%2B1o0IkckqmcixZ3%2FFkP9blNnrAVQlIs1%2FQShpVpz8kDVBS6GcR7ulCgJJ%2BacFR%2BfwEAB6HohRBFWjenQb5gJaua7dyfAfzlhwH7VY6%2BOmTOZgiQB7ZAJqAip1HrDRP%2BNehmHgqyt5tWo57WvmpccQqcTztPkF3Hy0p8arIGPXbfLLaVjF5c%2FpCBa7F6f%2BJYJNrD6AeNSAkpvgeJqA9k0aXHh1arIZY5UZtgDMjqdR%2F%2B7BWHkp9S9MEQWIDtGDBi3e%2B8EOXUS7HBcFze5Sdqb8FWL%2BJl3FqPqBPO3xn%2B8pJ%2BEqV5d3NZxKcPjlD3EBZRZnNpjOIusU0p6tN0KzG7CdyDy2lMIyr074GOqUB8hJmb7UxOai4TWOGjk2VAT7KxXAqXV%2BApxYNJ6LpZjM8%2FMRMfTsZNC6NxVXgNLnAcVtFG%2FsUSh8k%2FyAnVpV%2Bxn%2B67QQzXMUdQj%2Fn1KOUd7DD3G3MXT8LQLer2nuaOUzkp12RAfnECqb0UI562oLl2UXf84gFBG8q86aZlazfYXQJ6jjj8XeP9C7E9wpya88nGlVoiIUPPiRTxqy2sbmOPcWQwNm1&X-Amz-Signature=f192dafd2f0b36cf619affeaf2ebb0b0d0cd970290e43fa4e09ab2ac38d53b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOZQPT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFI1z8J5lDXUg%2FkVFcWEYzQGqJdNaP5DQbrc7ttnfiBwIgS%2BGn5IsK6sTDaJPJI%2BxJHAqKmobeiNwP3fJsEytkEMUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11NiCTcPF39GqtSircA%2Bv320OSUygbVIpw9mn%2BsQcjp8fg8gFpJItBgg6Sex0r3uUEUoV2owWEIBq0TtPMXvPN6IBSYuQMcmANCJ7481GT%2Fx9XW9Txqy83CZY%2BdExBP%2BH%2BNq2%2Bt31GQ%2BJZigCXrm5a%2FQ%2BQ6X92j%2Fva2tkcoT545r958CPzQxn2ffVKOCR%2Fm%2F8i5vTNaBT2OALMBu%2BKRGS6SAgQbzH7II1Qr%2FQWuQftYbp%2BiZEKQv%2FS0r21hxBEAD1eqwlfJ2BspCO4hsBXsdfpdlA55zcHoA7r2o0XYUsj8Jrrt%2Bpo63%2B1o0IkckqmcixZ3%2FFkP9blNnrAVQlIs1%2FQShpVpz8kDVBS6GcR7ulCgJJ%2BacFR%2BfwEAB6HohRBFWjenQb5gJaua7dyfAfzlhwH7VY6%2BOmTOZgiQB7ZAJqAip1HrDRP%2BNehmHgqyt5tWo57WvmpccQqcTztPkF3Hy0p8arIGPXbfLLaVjF5c%2FpCBa7F6f%2BJYJNrD6AeNSAkpvgeJqA9k0aXHh1arIZY5UZtgDMjqdR%2F%2B7BWHkp9S9MEQWIDtGDBi3e%2B8EOXUS7HBcFze5Sdqb8FWL%2BJl3FqPqBPO3xn%2B8pJ%2BEqV5d3NZxKcPjlD3EBZRZnNpjOIusU0p6tN0KzG7CdyDy2lMIyr074GOqUB8hJmb7UxOai4TWOGjk2VAT7KxXAqXV%2BApxYNJ6LpZjM8%2FMRMfTsZNC6NxVXgNLnAcVtFG%2FsUSh8k%2FyAnVpV%2Bxn%2B67QQzXMUdQj%2Fn1KOUd7DD3G3MXT8LQLer2nuaOUzkp12RAfnECqb0UI562oLl2UXf84gFBG8q86aZlazfYXQJ6jjj8XeP9C7E9wpya88nGlVoiIUPPiRTxqy2sbmOPcWQwNm1&X-Amz-Signature=bc18649e447aeb2d029a7ded57ef537914593f9d2c970a0afc5e8f8a42809609&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOZQPT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFI1z8J5lDXUg%2FkVFcWEYzQGqJdNaP5DQbrc7ttnfiBwIgS%2BGn5IsK6sTDaJPJI%2BxJHAqKmobeiNwP3fJsEytkEMUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11NiCTcPF39GqtSircA%2Bv320OSUygbVIpw9mn%2BsQcjp8fg8gFpJItBgg6Sex0r3uUEUoV2owWEIBq0TtPMXvPN6IBSYuQMcmANCJ7481GT%2Fx9XW9Txqy83CZY%2BdExBP%2BH%2BNq2%2Bt31GQ%2BJZigCXrm5a%2FQ%2BQ6X92j%2Fva2tkcoT545r958CPzQxn2ffVKOCR%2Fm%2F8i5vTNaBT2OALMBu%2BKRGS6SAgQbzH7II1Qr%2FQWuQftYbp%2BiZEKQv%2FS0r21hxBEAD1eqwlfJ2BspCO4hsBXsdfpdlA55zcHoA7r2o0XYUsj8Jrrt%2Bpo63%2B1o0IkckqmcixZ3%2FFkP9blNnrAVQlIs1%2FQShpVpz8kDVBS6GcR7ulCgJJ%2BacFR%2BfwEAB6HohRBFWjenQb5gJaua7dyfAfzlhwH7VY6%2BOmTOZgiQB7ZAJqAip1HrDRP%2BNehmHgqyt5tWo57WvmpccQqcTztPkF3Hy0p8arIGPXbfLLaVjF5c%2FpCBa7F6f%2BJYJNrD6AeNSAkpvgeJqA9k0aXHh1arIZY5UZtgDMjqdR%2F%2B7BWHkp9S9MEQWIDtGDBi3e%2B8EOXUS7HBcFze5Sdqb8FWL%2BJl3FqPqBPO3xn%2B8pJ%2BEqV5d3NZxKcPjlD3EBZRZnNpjOIusU0p6tN0KzG7CdyDy2lMIyr074GOqUB8hJmb7UxOai4TWOGjk2VAT7KxXAqXV%2BApxYNJ6LpZjM8%2FMRMfTsZNC6NxVXgNLnAcVtFG%2FsUSh8k%2FyAnVpV%2Bxn%2B67QQzXMUdQj%2Fn1KOUd7DD3G3MXT8LQLer2nuaOUzkp12RAfnECqb0UI562oLl2UXf84gFBG8q86aZlazfYXQJ6jjj8XeP9C7E9wpya88nGlVoiIUPPiRTxqy2sbmOPcWQwNm1&X-Amz-Signature=f47e97bac07b3601eea79ddec1abebd40c0e1288911e8657a28dfa590ec0a35a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOZQPT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFI1z8J5lDXUg%2FkVFcWEYzQGqJdNaP5DQbrc7ttnfiBwIgS%2BGn5IsK6sTDaJPJI%2BxJHAqKmobeiNwP3fJsEytkEMUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11NiCTcPF39GqtSircA%2Bv320OSUygbVIpw9mn%2BsQcjp8fg8gFpJItBgg6Sex0r3uUEUoV2owWEIBq0TtPMXvPN6IBSYuQMcmANCJ7481GT%2Fx9XW9Txqy83CZY%2BdExBP%2BH%2BNq2%2Bt31GQ%2BJZigCXrm5a%2FQ%2BQ6X92j%2Fva2tkcoT545r958CPzQxn2ffVKOCR%2Fm%2F8i5vTNaBT2OALMBu%2BKRGS6SAgQbzH7II1Qr%2FQWuQftYbp%2BiZEKQv%2FS0r21hxBEAD1eqwlfJ2BspCO4hsBXsdfpdlA55zcHoA7r2o0XYUsj8Jrrt%2Bpo63%2B1o0IkckqmcixZ3%2FFkP9blNnrAVQlIs1%2FQShpVpz8kDVBS6GcR7ulCgJJ%2BacFR%2BfwEAB6HohRBFWjenQb5gJaua7dyfAfzlhwH7VY6%2BOmTOZgiQB7ZAJqAip1HrDRP%2BNehmHgqyt5tWo57WvmpccQqcTztPkF3Hy0p8arIGPXbfLLaVjF5c%2FpCBa7F6f%2BJYJNrD6AeNSAkpvgeJqA9k0aXHh1arIZY5UZtgDMjqdR%2F%2B7BWHkp9S9MEQWIDtGDBi3e%2B8EOXUS7HBcFze5Sdqb8FWL%2BJl3FqPqBPO3xn%2B8pJ%2BEqV5d3NZxKcPjlD3EBZRZnNpjOIusU0p6tN0KzG7CdyDy2lMIyr074GOqUB8hJmb7UxOai4TWOGjk2VAT7KxXAqXV%2BApxYNJ6LpZjM8%2FMRMfTsZNC6NxVXgNLnAcVtFG%2FsUSh8k%2FyAnVpV%2Bxn%2B67QQzXMUdQj%2Fn1KOUd7DD3G3MXT8LQLer2nuaOUzkp12RAfnECqb0UI562oLl2UXf84gFBG8q86aZlazfYXQJ6jjj8XeP9C7E9wpya88nGlVoiIUPPiRTxqy2sbmOPcWQwNm1&X-Amz-Signature=06fef6a7b6cfe6edafd5124fa6a3e10f2e154a58b3a30504ab0c8da9c1bdd74f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOZQPT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFI1z8J5lDXUg%2FkVFcWEYzQGqJdNaP5DQbrc7ttnfiBwIgS%2BGn5IsK6sTDaJPJI%2BxJHAqKmobeiNwP3fJsEytkEMUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11NiCTcPF39GqtSircA%2Bv320OSUygbVIpw9mn%2BsQcjp8fg8gFpJItBgg6Sex0r3uUEUoV2owWEIBq0TtPMXvPN6IBSYuQMcmANCJ7481GT%2Fx9XW9Txqy83CZY%2BdExBP%2BH%2BNq2%2Bt31GQ%2BJZigCXrm5a%2FQ%2BQ6X92j%2Fva2tkcoT545r958CPzQxn2ffVKOCR%2Fm%2F8i5vTNaBT2OALMBu%2BKRGS6SAgQbzH7II1Qr%2FQWuQftYbp%2BiZEKQv%2FS0r21hxBEAD1eqwlfJ2BspCO4hsBXsdfpdlA55zcHoA7r2o0XYUsj8Jrrt%2Bpo63%2B1o0IkckqmcixZ3%2FFkP9blNnrAVQlIs1%2FQShpVpz8kDVBS6GcR7ulCgJJ%2BacFR%2BfwEAB6HohRBFWjenQb5gJaua7dyfAfzlhwH7VY6%2BOmTOZgiQB7ZAJqAip1HrDRP%2BNehmHgqyt5tWo57WvmpccQqcTztPkF3Hy0p8arIGPXbfLLaVjF5c%2FpCBa7F6f%2BJYJNrD6AeNSAkpvgeJqA9k0aXHh1arIZY5UZtgDMjqdR%2F%2B7BWHkp9S9MEQWIDtGDBi3e%2B8EOXUS7HBcFze5Sdqb8FWL%2BJl3FqPqBPO3xn%2B8pJ%2BEqV5d3NZxKcPjlD3EBZRZnNpjOIusU0p6tN0KzG7CdyDy2lMIyr074GOqUB8hJmb7UxOai4TWOGjk2VAT7KxXAqXV%2BApxYNJ6LpZjM8%2FMRMfTsZNC6NxVXgNLnAcVtFG%2FsUSh8k%2FyAnVpV%2Bxn%2B67QQzXMUdQj%2Fn1KOUd7DD3G3MXT8LQLer2nuaOUzkp12RAfnECqb0UI562oLl2UXf84gFBG8q86aZlazfYXQJ6jjj8XeP9C7E9wpya88nGlVoiIUPPiRTxqy2sbmOPcWQwNm1&X-Amz-Signature=3bf1eef227fe0baffcf850fc18d3300b111875f8c13dac6f204deca0b5d246df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOZQPT3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFI1z8J5lDXUg%2FkVFcWEYzQGqJdNaP5DQbrc7ttnfiBwIgS%2BGn5IsK6sTDaJPJI%2BxJHAqKmobeiNwP3fJsEytkEMUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11NiCTcPF39GqtSircA%2Bv320OSUygbVIpw9mn%2BsQcjp8fg8gFpJItBgg6Sex0r3uUEUoV2owWEIBq0TtPMXvPN6IBSYuQMcmANCJ7481GT%2Fx9XW9Txqy83CZY%2BdExBP%2BH%2BNq2%2Bt31GQ%2BJZigCXrm5a%2FQ%2BQ6X92j%2Fva2tkcoT545r958CPzQxn2ffVKOCR%2Fm%2F8i5vTNaBT2OALMBu%2BKRGS6SAgQbzH7II1Qr%2FQWuQftYbp%2BiZEKQv%2FS0r21hxBEAD1eqwlfJ2BspCO4hsBXsdfpdlA55zcHoA7r2o0XYUsj8Jrrt%2Bpo63%2B1o0IkckqmcixZ3%2FFkP9blNnrAVQlIs1%2FQShpVpz8kDVBS6GcR7ulCgJJ%2BacFR%2BfwEAB6HohRBFWjenQb5gJaua7dyfAfzlhwH7VY6%2BOmTOZgiQB7ZAJqAip1HrDRP%2BNehmHgqyt5tWo57WvmpccQqcTztPkF3Hy0p8arIGPXbfLLaVjF5c%2FpCBa7F6f%2BJYJNrD6AeNSAkpvgeJqA9k0aXHh1arIZY5UZtgDMjqdR%2F%2B7BWHkp9S9MEQWIDtGDBi3e%2B8EOXUS7HBcFze5Sdqb8FWL%2BJl3FqPqBPO3xn%2B8pJ%2BEqV5d3NZxKcPjlD3EBZRZnNpjOIusU0p6tN0KzG7CdyDy2lMIyr074GOqUB8hJmb7UxOai4TWOGjk2VAT7KxXAqXV%2BApxYNJ6LpZjM8%2FMRMfTsZNC6NxVXgNLnAcVtFG%2FsUSh8k%2FyAnVpV%2Bxn%2B67QQzXMUdQj%2Fn1KOUd7DD3G3MXT8LQLer2nuaOUzkp12RAfnECqb0UI562oLl2UXf84gFBG8q86aZlazfYXQJ6jjj8XeP9C7E9wpya88nGlVoiIUPPiRTxqy2sbmOPcWQwNm1&X-Amz-Signature=6182db86ddd0f61257e7d0ca25764e8d2b4fd231f12d85222472d2b611f30646&X-Amz-SignedHeaders=host&x-id=GetObject)
