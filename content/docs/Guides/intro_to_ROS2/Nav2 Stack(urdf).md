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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YU3435%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJU6TT5YFSFqe%2BTUW%2Ft5BpSvmf%2Bu2Z1C904ZlhzfUyfAIhAMvHCAcj0vEGgR52Uen2gB3%2FfsbN9yPMKGndLtqNTomvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfrQAieJ%2FBztZZfa0q3AMhop8BrrVyeO5Kn0TOL31bmwEDRDFPlRxLFRfa6ddQ7jmPyAEh8VfNK%2BIEPrND6AS5KJAXPVvlhw0QbnNYfiUIFOMwlTyY2g55wcE4iOG6f8fZaF%2FzDiRi8kvLoiU2Kf8d3kafy%2B5upS0bNUxg9GzXxaByHh83zbgsKbUnFJN0ZjH1jkqusIikGqF6DYO1HqgSczm3Cw%2FRD5kMQ4g2d8RG2w5OHTIZRLv0ITy8Zp3LLTtFDIOxAk5IQAhfQmzwDY4l8mWJWl%2F06NrIdY%2B5Ja94ymgoydvN59ZDf7OaDnukgsgPo3sS8SxNYaE2VlaIKXAiA2OEEuA8mSb%2FxvIeWh5IBhOtDeFdqoC4s6Elxdh8sQzfn1WK6JtOU6NIGO2Hfn3wP%2FwHQ5N3sdNYhfcL1K520kBjwSfG%2FCqyCJf0UDx2RWBQizceoPfNQ%2BfNXe5oKEhAeQ5dxRBtyZYPTAsp7Rz4MZrz%2BbgvZct51h4Eom8O0Dw1PRJtvF9L2TyXjmvmKgK3j%2FQaeEymblo2q7Pq6VOW8LdTnodo%2F5NaoMOvXKNOG0n%2BSM6JhuVX%2FZ127B4m4VI5AO%2FEL6p5jyeLyxtzEyLFQkXIWwIoeNro0DeDvgY6cnzGtUADXuWrxyyOjzDojqS9BjqkAXIdPVTaFTTcAXbh2BYxxc22OS5iawKmIsfOTdThdEONS2G8cPsqI1Q8PsPqse8RVtOhZjcAPcwVbvSpVeUT1fEEnX3MWr47PfyT8rusfl0vAEq0%2B7hs1nDIhdwVMynw%2FVgxxkU2%2BUwzYfuEsISRGYgXweMVqKKlVaS5Wsl3gVw2EbsktVZ7HJH06x0I9waVHqbUC%2BdP%2Fh3o0k4VdKf5WPqM1SOL&X-Amz-Signature=d3c10576de85bd4714dc7a7c84c873a94574a4e0328effa76341becc1bcb99c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YU3435%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJU6TT5YFSFqe%2BTUW%2Ft5BpSvmf%2Bu2Z1C904ZlhzfUyfAIhAMvHCAcj0vEGgR52Uen2gB3%2FfsbN9yPMKGndLtqNTomvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfrQAieJ%2FBztZZfa0q3AMhop8BrrVyeO5Kn0TOL31bmwEDRDFPlRxLFRfa6ddQ7jmPyAEh8VfNK%2BIEPrND6AS5KJAXPVvlhw0QbnNYfiUIFOMwlTyY2g55wcE4iOG6f8fZaF%2FzDiRi8kvLoiU2Kf8d3kafy%2B5upS0bNUxg9GzXxaByHh83zbgsKbUnFJN0ZjH1jkqusIikGqF6DYO1HqgSczm3Cw%2FRD5kMQ4g2d8RG2w5OHTIZRLv0ITy8Zp3LLTtFDIOxAk5IQAhfQmzwDY4l8mWJWl%2F06NrIdY%2B5Ja94ymgoydvN59ZDf7OaDnukgsgPo3sS8SxNYaE2VlaIKXAiA2OEEuA8mSb%2FxvIeWh5IBhOtDeFdqoC4s6Elxdh8sQzfn1WK6JtOU6NIGO2Hfn3wP%2FwHQ5N3sdNYhfcL1K520kBjwSfG%2FCqyCJf0UDx2RWBQizceoPfNQ%2BfNXe5oKEhAeQ5dxRBtyZYPTAsp7Rz4MZrz%2BbgvZct51h4Eom8O0Dw1PRJtvF9L2TyXjmvmKgK3j%2FQaeEymblo2q7Pq6VOW8LdTnodo%2F5NaoMOvXKNOG0n%2BSM6JhuVX%2FZ127B4m4VI5AO%2FEL6p5jyeLyxtzEyLFQkXIWwIoeNro0DeDvgY6cnzGtUADXuWrxyyOjzDojqS9BjqkAXIdPVTaFTTcAXbh2BYxxc22OS5iawKmIsfOTdThdEONS2G8cPsqI1Q8PsPqse8RVtOhZjcAPcwVbvSpVeUT1fEEnX3MWr47PfyT8rusfl0vAEq0%2B7hs1nDIhdwVMynw%2FVgxxkU2%2BUwzYfuEsISRGYgXweMVqKKlVaS5Wsl3gVw2EbsktVZ7HJH06x0I9waVHqbUC%2BdP%2Fh3o0k4VdKf5WPqM1SOL&X-Amz-Signature=7e887d550ccd22537c02523095bcb2ceffd01390c2efadc7431215df918d509a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YU3435%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJU6TT5YFSFqe%2BTUW%2Ft5BpSvmf%2Bu2Z1C904ZlhzfUyfAIhAMvHCAcj0vEGgR52Uen2gB3%2FfsbN9yPMKGndLtqNTomvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfrQAieJ%2FBztZZfa0q3AMhop8BrrVyeO5Kn0TOL31bmwEDRDFPlRxLFRfa6ddQ7jmPyAEh8VfNK%2BIEPrND6AS5KJAXPVvlhw0QbnNYfiUIFOMwlTyY2g55wcE4iOG6f8fZaF%2FzDiRi8kvLoiU2Kf8d3kafy%2B5upS0bNUxg9GzXxaByHh83zbgsKbUnFJN0ZjH1jkqusIikGqF6DYO1HqgSczm3Cw%2FRD5kMQ4g2d8RG2w5OHTIZRLv0ITy8Zp3LLTtFDIOxAk5IQAhfQmzwDY4l8mWJWl%2F06NrIdY%2B5Ja94ymgoydvN59ZDf7OaDnukgsgPo3sS8SxNYaE2VlaIKXAiA2OEEuA8mSb%2FxvIeWh5IBhOtDeFdqoC4s6Elxdh8sQzfn1WK6JtOU6NIGO2Hfn3wP%2FwHQ5N3sdNYhfcL1K520kBjwSfG%2FCqyCJf0UDx2RWBQizceoPfNQ%2BfNXe5oKEhAeQ5dxRBtyZYPTAsp7Rz4MZrz%2BbgvZct51h4Eom8O0Dw1PRJtvF9L2TyXjmvmKgK3j%2FQaeEymblo2q7Pq6VOW8LdTnodo%2F5NaoMOvXKNOG0n%2BSM6JhuVX%2FZ127B4m4VI5AO%2FEL6p5jyeLyxtzEyLFQkXIWwIoeNro0DeDvgY6cnzGtUADXuWrxyyOjzDojqS9BjqkAXIdPVTaFTTcAXbh2BYxxc22OS5iawKmIsfOTdThdEONS2G8cPsqI1Q8PsPqse8RVtOhZjcAPcwVbvSpVeUT1fEEnX3MWr47PfyT8rusfl0vAEq0%2B7hs1nDIhdwVMynw%2FVgxxkU2%2BUwzYfuEsISRGYgXweMVqKKlVaS5Wsl3gVw2EbsktVZ7HJH06x0I9waVHqbUC%2BdP%2Fh3o0k4VdKf5WPqM1SOL&X-Amz-Signature=7ea21480cbf6328e4af3ca84a73d5c7d31720396daa39e82197ff4f200b86b47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YU3435%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJU6TT5YFSFqe%2BTUW%2Ft5BpSvmf%2Bu2Z1C904ZlhzfUyfAIhAMvHCAcj0vEGgR52Uen2gB3%2FfsbN9yPMKGndLtqNTomvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfrQAieJ%2FBztZZfa0q3AMhop8BrrVyeO5Kn0TOL31bmwEDRDFPlRxLFRfa6ddQ7jmPyAEh8VfNK%2BIEPrND6AS5KJAXPVvlhw0QbnNYfiUIFOMwlTyY2g55wcE4iOG6f8fZaF%2FzDiRi8kvLoiU2Kf8d3kafy%2B5upS0bNUxg9GzXxaByHh83zbgsKbUnFJN0ZjH1jkqusIikGqF6DYO1HqgSczm3Cw%2FRD5kMQ4g2d8RG2w5OHTIZRLv0ITy8Zp3LLTtFDIOxAk5IQAhfQmzwDY4l8mWJWl%2F06NrIdY%2B5Ja94ymgoydvN59ZDf7OaDnukgsgPo3sS8SxNYaE2VlaIKXAiA2OEEuA8mSb%2FxvIeWh5IBhOtDeFdqoC4s6Elxdh8sQzfn1WK6JtOU6NIGO2Hfn3wP%2FwHQ5N3sdNYhfcL1K520kBjwSfG%2FCqyCJf0UDx2RWBQizceoPfNQ%2BfNXe5oKEhAeQ5dxRBtyZYPTAsp7Rz4MZrz%2BbgvZct51h4Eom8O0Dw1PRJtvF9L2TyXjmvmKgK3j%2FQaeEymblo2q7Pq6VOW8LdTnodo%2F5NaoMOvXKNOG0n%2BSM6JhuVX%2FZ127B4m4VI5AO%2FEL6p5jyeLyxtzEyLFQkXIWwIoeNro0DeDvgY6cnzGtUADXuWrxyyOjzDojqS9BjqkAXIdPVTaFTTcAXbh2BYxxc22OS5iawKmIsfOTdThdEONS2G8cPsqI1Q8PsPqse8RVtOhZjcAPcwVbvSpVeUT1fEEnX3MWr47PfyT8rusfl0vAEq0%2B7hs1nDIhdwVMynw%2FVgxxkU2%2BUwzYfuEsISRGYgXweMVqKKlVaS5Wsl3gVw2EbsktVZ7HJH06x0I9waVHqbUC%2BdP%2Fh3o0k4VdKf5WPqM1SOL&X-Amz-Signature=c8e65b5a8c8157d135b6a0915df468045e63ef20c7791168e43973ded5500b43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YU3435%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJU6TT5YFSFqe%2BTUW%2Ft5BpSvmf%2Bu2Z1C904ZlhzfUyfAIhAMvHCAcj0vEGgR52Uen2gB3%2FfsbN9yPMKGndLtqNTomvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfrQAieJ%2FBztZZfa0q3AMhop8BrrVyeO5Kn0TOL31bmwEDRDFPlRxLFRfa6ddQ7jmPyAEh8VfNK%2BIEPrND6AS5KJAXPVvlhw0QbnNYfiUIFOMwlTyY2g55wcE4iOG6f8fZaF%2FzDiRi8kvLoiU2Kf8d3kafy%2B5upS0bNUxg9GzXxaByHh83zbgsKbUnFJN0ZjH1jkqusIikGqF6DYO1HqgSczm3Cw%2FRD5kMQ4g2d8RG2w5OHTIZRLv0ITy8Zp3LLTtFDIOxAk5IQAhfQmzwDY4l8mWJWl%2F06NrIdY%2B5Ja94ymgoydvN59ZDf7OaDnukgsgPo3sS8SxNYaE2VlaIKXAiA2OEEuA8mSb%2FxvIeWh5IBhOtDeFdqoC4s6Elxdh8sQzfn1WK6JtOU6NIGO2Hfn3wP%2FwHQ5N3sdNYhfcL1K520kBjwSfG%2FCqyCJf0UDx2RWBQizceoPfNQ%2BfNXe5oKEhAeQ5dxRBtyZYPTAsp7Rz4MZrz%2BbgvZct51h4Eom8O0Dw1PRJtvF9L2TyXjmvmKgK3j%2FQaeEymblo2q7Pq6VOW8LdTnodo%2F5NaoMOvXKNOG0n%2BSM6JhuVX%2FZ127B4m4VI5AO%2FEL6p5jyeLyxtzEyLFQkXIWwIoeNro0DeDvgY6cnzGtUADXuWrxyyOjzDojqS9BjqkAXIdPVTaFTTcAXbh2BYxxc22OS5iawKmIsfOTdThdEONS2G8cPsqI1Q8PsPqse8RVtOhZjcAPcwVbvSpVeUT1fEEnX3MWr47PfyT8rusfl0vAEq0%2B7hs1nDIhdwVMynw%2FVgxxkU2%2BUwzYfuEsISRGYgXweMVqKKlVaS5Wsl3gVw2EbsktVZ7HJH06x0I9waVHqbUC%2BdP%2Fh3o0k4VdKf5WPqM1SOL&X-Amz-Signature=bb230ebc871cba973d65f869cf0215e9ef1e8e6b87dbe7ae477922605eb88516&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YU3435%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJU6TT5YFSFqe%2BTUW%2Ft5BpSvmf%2Bu2Z1C904ZlhzfUyfAIhAMvHCAcj0vEGgR52Uen2gB3%2FfsbN9yPMKGndLtqNTomvKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfrQAieJ%2FBztZZfa0q3AMhop8BrrVyeO5Kn0TOL31bmwEDRDFPlRxLFRfa6ddQ7jmPyAEh8VfNK%2BIEPrND6AS5KJAXPVvlhw0QbnNYfiUIFOMwlTyY2g55wcE4iOG6f8fZaF%2FzDiRi8kvLoiU2Kf8d3kafy%2B5upS0bNUxg9GzXxaByHh83zbgsKbUnFJN0ZjH1jkqusIikGqF6DYO1HqgSczm3Cw%2FRD5kMQ4g2d8RG2w5OHTIZRLv0ITy8Zp3LLTtFDIOxAk5IQAhfQmzwDY4l8mWJWl%2F06NrIdY%2B5Ja94ymgoydvN59ZDf7OaDnukgsgPo3sS8SxNYaE2VlaIKXAiA2OEEuA8mSb%2FxvIeWh5IBhOtDeFdqoC4s6Elxdh8sQzfn1WK6JtOU6NIGO2Hfn3wP%2FwHQ5N3sdNYhfcL1K520kBjwSfG%2FCqyCJf0UDx2RWBQizceoPfNQ%2BfNXe5oKEhAeQ5dxRBtyZYPTAsp7Rz4MZrz%2BbgvZct51h4Eom8O0Dw1PRJtvF9L2TyXjmvmKgK3j%2FQaeEymblo2q7Pq6VOW8LdTnodo%2F5NaoMOvXKNOG0n%2BSM6JhuVX%2FZ127B4m4VI5AO%2FEL6p5jyeLyxtzEyLFQkXIWwIoeNro0DeDvgY6cnzGtUADXuWrxyyOjzDojqS9BjqkAXIdPVTaFTTcAXbh2BYxxc22OS5iawKmIsfOTdThdEONS2G8cPsqI1Q8PsPqse8RVtOhZjcAPcwVbvSpVeUT1fEEnX3MWr47PfyT8rusfl0vAEq0%2B7hs1nDIhdwVMynw%2FVgxxkU2%2BUwzYfuEsISRGYgXweMVqKKlVaS5Wsl3gVw2EbsktVZ7HJH06x0I9waVHqbUC%2BdP%2Fh3o0k4VdKf5WPqM1SOL&X-Amz-Signature=e4d5de6ab686ba5d7afb087109ed4ec32cf60efb79b1a2082441952fbfb1c6a5&X-Amz-SignedHeaders=host&x-id=GetObject)
