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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQ7O6E6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIELMUfwcsrnxCiXgnHy6e5u5M1Uvi3Gl8wVYXgEjMeF3AiEAiysvkXe8QcuNGnG4tH9SoKHxdwJoxUbW1owGvQ91d%2Bwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCuC7Eu%2Fk%2Ftncxk0vyrcA4a%2FvEXTE%2Frw4FJifIKiaWHzbcKLyku4cY1aphkoLaeMVQg4QQciprJzFuUbTCwOaLVrdBJeYIaIbzsfXP6Ll1mbUUwuLANf4bz0YrnJaKq5dagizibEYE71kWkRWwShLXndiqq3dfw5wpCs4iDr3t07ASom%2F0xZubJ%2FkTVDeDEof7Od%2FybfmZIBCz%2BhywEG3%2BVfXE8Pimu7J5VQEJ6KBKi883snHsRZWT7Irdl1OnBGoTb5Xx6WeJbDuwEusPdBMlu%2BRxn3MDzXBZydk%2F6CA5aepRDP33Je8uLShYyReXjPlYxI2cVW1blBTaASj94Vl9ySR7MCp8ag5NmbIjQYmbDA0u2wtgYCJT3Ng94%2FxEr6tLrul6pixOYN36ULWKD2JQRFmVMTs8PiZR2kNi%2F01HyNXtoAFX2eWpU%2FE8Cppgjy%2FGIMl8j3LT4KpdGdMPCB9DZHy8DDEtqIZJNxXXzN8oCeZPw5hhgy%2FfRmm0W6q2lJyPs5BXGu9%2B%2F7qwa3iRQGpkm0NRQIptvgS1eiyvKNlpVOpZeyq%2FYahp5WIxJoe06uFQgxzU2jjWmk0R5F7i5aVE6tMYOG%2BwW%2F1F9ZYtPN5EN6lvE%2F4hFq2rFTcjIOEMViTX1dp%2Fg0rqU3DSDcMIe%2FoMMGOqUBeVAHWFfr%2Frs0fqr1dcgyNeb6nprW%2Bpw0ZourljjwsYZf1e%2Fm14GyMKwP7B72dFb%2BVDk%2FEc%2BLqVT7lJq%2BHOmf9SkEcV3FRu8YC%2F4PU9hr9oijdADxo%2BZpgOj%2Fh6WURSNSN8ur4se1unRzZVeAOg5zcCkWge5xXlv%2Fjg9QzpnYs3R8XzzKybrhAXcFKHRo3Q%2F1WWZD5v%2BAIkXGW11fvE8VtOmK68bl&X-Amz-Signature=36b410a09fbebad2f76306e4bb54c20cecd24376765cb87c5f7f9b2b79193fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQ7O6E6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIELMUfwcsrnxCiXgnHy6e5u5M1Uvi3Gl8wVYXgEjMeF3AiEAiysvkXe8QcuNGnG4tH9SoKHxdwJoxUbW1owGvQ91d%2Bwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCuC7Eu%2Fk%2Ftncxk0vyrcA4a%2FvEXTE%2Frw4FJifIKiaWHzbcKLyku4cY1aphkoLaeMVQg4QQciprJzFuUbTCwOaLVrdBJeYIaIbzsfXP6Ll1mbUUwuLANf4bz0YrnJaKq5dagizibEYE71kWkRWwShLXndiqq3dfw5wpCs4iDr3t07ASom%2F0xZubJ%2FkTVDeDEof7Od%2FybfmZIBCz%2BhywEG3%2BVfXE8Pimu7J5VQEJ6KBKi883snHsRZWT7Irdl1OnBGoTb5Xx6WeJbDuwEusPdBMlu%2BRxn3MDzXBZydk%2F6CA5aepRDP33Je8uLShYyReXjPlYxI2cVW1blBTaASj94Vl9ySR7MCp8ag5NmbIjQYmbDA0u2wtgYCJT3Ng94%2FxEr6tLrul6pixOYN36ULWKD2JQRFmVMTs8PiZR2kNi%2F01HyNXtoAFX2eWpU%2FE8Cppgjy%2FGIMl8j3LT4KpdGdMPCB9DZHy8DDEtqIZJNxXXzN8oCeZPw5hhgy%2FfRmm0W6q2lJyPs5BXGu9%2B%2F7qwa3iRQGpkm0NRQIptvgS1eiyvKNlpVOpZeyq%2FYahp5WIxJoe06uFQgxzU2jjWmk0R5F7i5aVE6tMYOG%2BwW%2F1F9ZYtPN5EN6lvE%2F4hFq2rFTcjIOEMViTX1dp%2Fg0rqU3DSDcMIe%2FoMMGOqUBeVAHWFfr%2Frs0fqr1dcgyNeb6nprW%2Bpw0ZourljjwsYZf1e%2Fm14GyMKwP7B72dFb%2BVDk%2FEc%2BLqVT7lJq%2BHOmf9SkEcV3FRu8YC%2F4PU9hr9oijdADxo%2BZpgOj%2Fh6WURSNSN8ur4se1unRzZVeAOg5zcCkWge5xXlv%2Fjg9QzpnYs3R8XzzKybrhAXcFKHRo3Q%2F1WWZD5v%2BAIkXGW11fvE8VtOmK68bl&X-Amz-Signature=e0815416b4e5407632874b0b381b38ac4cb757bb0a02a333e82998366a5e2c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQ7O6E6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIELMUfwcsrnxCiXgnHy6e5u5M1Uvi3Gl8wVYXgEjMeF3AiEAiysvkXe8QcuNGnG4tH9SoKHxdwJoxUbW1owGvQ91d%2Bwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCuC7Eu%2Fk%2Ftncxk0vyrcA4a%2FvEXTE%2Frw4FJifIKiaWHzbcKLyku4cY1aphkoLaeMVQg4QQciprJzFuUbTCwOaLVrdBJeYIaIbzsfXP6Ll1mbUUwuLANf4bz0YrnJaKq5dagizibEYE71kWkRWwShLXndiqq3dfw5wpCs4iDr3t07ASom%2F0xZubJ%2FkTVDeDEof7Od%2FybfmZIBCz%2BhywEG3%2BVfXE8Pimu7J5VQEJ6KBKi883snHsRZWT7Irdl1OnBGoTb5Xx6WeJbDuwEusPdBMlu%2BRxn3MDzXBZydk%2F6CA5aepRDP33Je8uLShYyReXjPlYxI2cVW1blBTaASj94Vl9ySR7MCp8ag5NmbIjQYmbDA0u2wtgYCJT3Ng94%2FxEr6tLrul6pixOYN36ULWKD2JQRFmVMTs8PiZR2kNi%2F01HyNXtoAFX2eWpU%2FE8Cppgjy%2FGIMl8j3LT4KpdGdMPCB9DZHy8DDEtqIZJNxXXzN8oCeZPw5hhgy%2FfRmm0W6q2lJyPs5BXGu9%2B%2F7qwa3iRQGpkm0NRQIptvgS1eiyvKNlpVOpZeyq%2FYahp5WIxJoe06uFQgxzU2jjWmk0R5F7i5aVE6tMYOG%2BwW%2F1F9ZYtPN5EN6lvE%2F4hFq2rFTcjIOEMViTX1dp%2Fg0rqU3DSDcMIe%2FoMMGOqUBeVAHWFfr%2Frs0fqr1dcgyNeb6nprW%2Bpw0ZourljjwsYZf1e%2Fm14GyMKwP7B72dFb%2BVDk%2FEc%2BLqVT7lJq%2BHOmf9SkEcV3FRu8YC%2F4PU9hr9oijdADxo%2BZpgOj%2Fh6WURSNSN8ur4se1unRzZVeAOg5zcCkWge5xXlv%2Fjg9QzpnYs3R8XzzKybrhAXcFKHRo3Q%2F1WWZD5v%2BAIkXGW11fvE8VtOmK68bl&X-Amz-Signature=e6500eac3f946c296200f4bab98094d929a9b680ff310be1f8d5bf0d5e7d81ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQ7O6E6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIELMUfwcsrnxCiXgnHy6e5u5M1Uvi3Gl8wVYXgEjMeF3AiEAiysvkXe8QcuNGnG4tH9SoKHxdwJoxUbW1owGvQ91d%2Bwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCuC7Eu%2Fk%2Ftncxk0vyrcA4a%2FvEXTE%2Frw4FJifIKiaWHzbcKLyku4cY1aphkoLaeMVQg4QQciprJzFuUbTCwOaLVrdBJeYIaIbzsfXP6Ll1mbUUwuLANf4bz0YrnJaKq5dagizibEYE71kWkRWwShLXndiqq3dfw5wpCs4iDr3t07ASom%2F0xZubJ%2FkTVDeDEof7Od%2FybfmZIBCz%2BhywEG3%2BVfXE8Pimu7J5VQEJ6KBKi883snHsRZWT7Irdl1OnBGoTb5Xx6WeJbDuwEusPdBMlu%2BRxn3MDzXBZydk%2F6CA5aepRDP33Je8uLShYyReXjPlYxI2cVW1blBTaASj94Vl9ySR7MCp8ag5NmbIjQYmbDA0u2wtgYCJT3Ng94%2FxEr6tLrul6pixOYN36ULWKD2JQRFmVMTs8PiZR2kNi%2F01HyNXtoAFX2eWpU%2FE8Cppgjy%2FGIMl8j3LT4KpdGdMPCB9DZHy8DDEtqIZJNxXXzN8oCeZPw5hhgy%2FfRmm0W6q2lJyPs5BXGu9%2B%2F7qwa3iRQGpkm0NRQIptvgS1eiyvKNlpVOpZeyq%2FYahp5WIxJoe06uFQgxzU2jjWmk0R5F7i5aVE6tMYOG%2BwW%2F1F9ZYtPN5EN6lvE%2F4hFq2rFTcjIOEMViTX1dp%2Fg0rqU3DSDcMIe%2FoMMGOqUBeVAHWFfr%2Frs0fqr1dcgyNeb6nprW%2Bpw0ZourljjwsYZf1e%2Fm14GyMKwP7B72dFb%2BVDk%2FEc%2BLqVT7lJq%2BHOmf9SkEcV3FRu8YC%2F4PU9hr9oijdADxo%2BZpgOj%2Fh6WURSNSN8ur4se1unRzZVeAOg5zcCkWge5xXlv%2Fjg9QzpnYs3R8XzzKybrhAXcFKHRo3Q%2F1WWZD5v%2BAIkXGW11fvE8VtOmK68bl&X-Amz-Signature=840db777099f3a843dc5c5b429cab431e686bb1c7c72581f8375a3e430d1fef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQ7O6E6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIELMUfwcsrnxCiXgnHy6e5u5M1Uvi3Gl8wVYXgEjMeF3AiEAiysvkXe8QcuNGnG4tH9SoKHxdwJoxUbW1owGvQ91d%2Bwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCuC7Eu%2Fk%2Ftncxk0vyrcA4a%2FvEXTE%2Frw4FJifIKiaWHzbcKLyku4cY1aphkoLaeMVQg4QQciprJzFuUbTCwOaLVrdBJeYIaIbzsfXP6Ll1mbUUwuLANf4bz0YrnJaKq5dagizibEYE71kWkRWwShLXndiqq3dfw5wpCs4iDr3t07ASom%2F0xZubJ%2FkTVDeDEof7Od%2FybfmZIBCz%2BhywEG3%2BVfXE8Pimu7J5VQEJ6KBKi883snHsRZWT7Irdl1OnBGoTb5Xx6WeJbDuwEusPdBMlu%2BRxn3MDzXBZydk%2F6CA5aepRDP33Je8uLShYyReXjPlYxI2cVW1blBTaASj94Vl9ySR7MCp8ag5NmbIjQYmbDA0u2wtgYCJT3Ng94%2FxEr6tLrul6pixOYN36ULWKD2JQRFmVMTs8PiZR2kNi%2F01HyNXtoAFX2eWpU%2FE8Cppgjy%2FGIMl8j3LT4KpdGdMPCB9DZHy8DDEtqIZJNxXXzN8oCeZPw5hhgy%2FfRmm0W6q2lJyPs5BXGu9%2B%2F7qwa3iRQGpkm0NRQIptvgS1eiyvKNlpVOpZeyq%2FYahp5WIxJoe06uFQgxzU2jjWmk0R5F7i5aVE6tMYOG%2BwW%2F1F9ZYtPN5EN6lvE%2F4hFq2rFTcjIOEMViTX1dp%2Fg0rqU3DSDcMIe%2FoMMGOqUBeVAHWFfr%2Frs0fqr1dcgyNeb6nprW%2Bpw0ZourljjwsYZf1e%2Fm14GyMKwP7B72dFb%2BVDk%2FEc%2BLqVT7lJq%2BHOmf9SkEcV3FRu8YC%2F4PU9hr9oijdADxo%2BZpgOj%2Fh6WURSNSN8ur4se1unRzZVeAOg5zcCkWge5xXlv%2Fjg9QzpnYs3R8XzzKybrhAXcFKHRo3Q%2F1WWZD5v%2BAIkXGW11fvE8VtOmK68bl&X-Amz-Signature=8a7d8212f8cca953e099b18add388d1f5d2a90216ab4ce62c0bb8c00bdca1e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQ7O6E6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIELMUfwcsrnxCiXgnHy6e5u5M1Uvi3Gl8wVYXgEjMeF3AiEAiysvkXe8QcuNGnG4tH9SoKHxdwJoxUbW1owGvQ91d%2Bwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCuC7Eu%2Fk%2Ftncxk0vyrcA4a%2FvEXTE%2Frw4FJifIKiaWHzbcKLyku4cY1aphkoLaeMVQg4QQciprJzFuUbTCwOaLVrdBJeYIaIbzsfXP6Ll1mbUUwuLANf4bz0YrnJaKq5dagizibEYE71kWkRWwShLXndiqq3dfw5wpCs4iDr3t07ASom%2F0xZubJ%2FkTVDeDEof7Od%2FybfmZIBCz%2BhywEG3%2BVfXE8Pimu7J5VQEJ6KBKi883snHsRZWT7Irdl1OnBGoTb5Xx6WeJbDuwEusPdBMlu%2BRxn3MDzXBZydk%2F6CA5aepRDP33Je8uLShYyReXjPlYxI2cVW1blBTaASj94Vl9ySR7MCp8ag5NmbIjQYmbDA0u2wtgYCJT3Ng94%2FxEr6tLrul6pixOYN36ULWKD2JQRFmVMTs8PiZR2kNi%2F01HyNXtoAFX2eWpU%2FE8Cppgjy%2FGIMl8j3LT4KpdGdMPCB9DZHy8DDEtqIZJNxXXzN8oCeZPw5hhgy%2FfRmm0W6q2lJyPs5BXGu9%2B%2F7qwa3iRQGpkm0NRQIptvgS1eiyvKNlpVOpZeyq%2FYahp5WIxJoe06uFQgxzU2jjWmk0R5F7i5aVE6tMYOG%2BwW%2F1F9ZYtPN5EN6lvE%2F4hFq2rFTcjIOEMViTX1dp%2Fg0rqU3DSDcMIe%2FoMMGOqUBeVAHWFfr%2Frs0fqr1dcgyNeb6nprW%2Bpw0ZourljjwsYZf1e%2Fm14GyMKwP7B72dFb%2BVDk%2FEc%2BLqVT7lJq%2BHOmf9SkEcV3FRu8YC%2F4PU9hr9oijdADxo%2BZpgOj%2Fh6WURSNSN8ur4se1unRzZVeAOg5zcCkWge5xXlv%2Fjg9QzpnYs3R8XzzKybrhAXcFKHRo3Q%2F1WWZD5v%2BAIkXGW11fvE8VtOmK68bl&X-Amz-Signature=4859da124bdd946566f8a377ed2b78979bb6c66938b20d1ede0a07fb0b36c7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
