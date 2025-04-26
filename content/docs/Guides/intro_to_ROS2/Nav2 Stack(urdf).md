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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNZCLCO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGTV1yhqANVA1L5cuT9jmJ%2Frteawddr8C7dQEfz9u2nAiEAvA%2Fs3lGiTnmO2GxZ2THJu7dern%2F5mkP7RGl8Enk%2Fj0Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPftZOSIHfK3ICU3fyrcA5dgWcUWQ1M5u89rxWqRO88QVWKELkdgIlV9Ota3pnqCbxjyqFDs9MxXBaaWhiRys1V%2FGCAw8h%2BkcA1mHlQgYGT8K%2BPaYl6sTZKOwt9fApHBwtNsNeOopF%2BdPH0unphAZnm%2F%2FbstM%2BTMDEjDp9n%2Fiv7YLzXCvNT44mlQUgWYXG9HRP%2BYH0aBk5S1dOT666fEaC5JD0o3qwQ%2FsR0DHfyHjk6Z8Phi5MRYKxsUj0rL3pK62blXG5iN%2BZ9ikE8e71pA%2FWUNZj4vVWb3040ifJP5SP94btTaVb5iwm4GEC7bF6jmXaV45PxOXYDiMKNASeAfBFditYuOyQDqfpGrBhpQrIV%2BOv7sTJw5une4JD5VSmdNo58Wn4HnCgDUFdDxQe6MyokMb3JJCZ5CAU7nwePQ%2FJRks21WWtWRhqOUmcshhmPq1qDHtqURc%2FwccRsoVBIMmnJArglEEMJHqoGjGsfR%2B5n91w3y7X31RllF69tW1bfCmNicT8bkGEdJlGubdCtXj4EkgcCmFUJSEBAPM7ShjeqT4j%2BtKI17ADAlJT1afNdG7EIrUnVNjbj8CD0q3bcfYBXN6A%2BxRE62PpkSC5N82mWnWB5%2BmV54VYk49xTtZs%2B%2BtYZ5CAXnFrkSzFxVMO%2FIscAGOqUBfOOgXNsg1yWrk2yx8V0lKKNtRnfiEbrW%2FqFENf8qA8eint3GAPQhRzvzE8iXj4a3dMQJ8iEL6ii%2FmYONxmu6EgXH2dxd8oj7Jl1uZlwWDGwy9Do1e0yBXrrUdnxu0ngoyHenrqLimF2Yw43wGa7P6mgucl4%2BnOweTN1olEkmd6TY6b5naycJpCSOoWUOiQ4pIwFPcNEWPSbzrGmkVFaLycFS3Xlv&X-Amz-Signature=5e5ccb121000ce8f240c0b1951f4940e18a3533a9db2e88fb1695ffe0c44c365&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNZCLCO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGTV1yhqANVA1L5cuT9jmJ%2Frteawddr8C7dQEfz9u2nAiEAvA%2Fs3lGiTnmO2GxZ2THJu7dern%2F5mkP7RGl8Enk%2Fj0Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPftZOSIHfK3ICU3fyrcA5dgWcUWQ1M5u89rxWqRO88QVWKELkdgIlV9Ota3pnqCbxjyqFDs9MxXBaaWhiRys1V%2FGCAw8h%2BkcA1mHlQgYGT8K%2BPaYl6sTZKOwt9fApHBwtNsNeOopF%2BdPH0unphAZnm%2F%2FbstM%2BTMDEjDp9n%2Fiv7YLzXCvNT44mlQUgWYXG9HRP%2BYH0aBk5S1dOT666fEaC5JD0o3qwQ%2FsR0DHfyHjk6Z8Phi5MRYKxsUj0rL3pK62blXG5iN%2BZ9ikE8e71pA%2FWUNZj4vVWb3040ifJP5SP94btTaVb5iwm4GEC7bF6jmXaV45PxOXYDiMKNASeAfBFditYuOyQDqfpGrBhpQrIV%2BOv7sTJw5une4JD5VSmdNo58Wn4HnCgDUFdDxQe6MyokMb3JJCZ5CAU7nwePQ%2FJRks21WWtWRhqOUmcshhmPq1qDHtqURc%2FwccRsoVBIMmnJArglEEMJHqoGjGsfR%2B5n91w3y7X31RllF69tW1bfCmNicT8bkGEdJlGubdCtXj4EkgcCmFUJSEBAPM7ShjeqT4j%2BtKI17ADAlJT1afNdG7EIrUnVNjbj8CD0q3bcfYBXN6A%2BxRE62PpkSC5N82mWnWB5%2BmV54VYk49xTtZs%2B%2BtYZ5CAXnFrkSzFxVMO%2FIscAGOqUBfOOgXNsg1yWrk2yx8V0lKKNtRnfiEbrW%2FqFENf8qA8eint3GAPQhRzvzE8iXj4a3dMQJ8iEL6ii%2FmYONxmu6EgXH2dxd8oj7Jl1uZlwWDGwy9Do1e0yBXrrUdnxu0ngoyHenrqLimF2Yw43wGa7P6mgucl4%2BnOweTN1olEkmd6TY6b5naycJpCSOoWUOiQ4pIwFPcNEWPSbzrGmkVFaLycFS3Xlv&X-Amz-Signature=825264931299a9553441c478544b85e07737343c60cc8e25a00604eb181f16fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNZCLCO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGTV1yhqANVA1L5cuT9jmJ%2Frteawddr8C7dQEfz9u2nAiEAvA%2Fs3lGiTnmO2GxZ2THJu7dern%2F5mkP7RGl8Enk%2Fj0Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPftZOSIHfK3ICU3fyrcA5dgWcUWQ1M5u89rxWqRO88QVWKELkdgIlV9Ota3pnqCbxjyqFDs9MxXBaaWhiRys1V%2FGCAw8h%2BkcA1mHlQgYGT8K%2BPaYl6sTZKOwt9fApHBwtNsNeOopF%2BdPH0unphAZnm%2F%2FbstM%2BTMDEjDp9n%2Fiv7YLzXCvNT44mlQUgWYXG9HRP%2BYH0aBk5S1dOT666fEaC5JD0o3qwQ%2FsR0DHfyHjk6Z8Phi5MRYKxsUj0rL3pK62blXG5iN%2BZ9ikE8e71pA%2FWUNZj4vVWb3040ifJP5SP94btTaVb5iwm4GEC7bF6jmXaV45PxOXYDiMKNASeAfBFditYuOyQDqfpGrBhpQrIV%2BOv7sTJw5une4JD5VSmdNo58Wn4HnCgDUFdDxQe6MyokMb3JJCZ5CAU7nwePQ%2FJRks21WWtWRhqOUmcshhmPq1qDHtqURc%2FwccRsoVBIMmnJArglEEMJHqoGjGsfR%2B5n91w3y7X31RllF69tW1bfCmNicT8bkGEdJlGubdCtXj4EkgcCmFUJSEBAPM7ShjeqT4j%2BtKI17ADAlJT1afNdG7EIrUnVNjbj8CD0q3bcfYBXN6A%2BxRE62PpkSC5N82mWnWB5%2BmV54VYk49xTtZs%2B%2BtYZ5CAXnFrkSzFxVMO%2FIscAGOqUBfOOgXNsg1yWrk2yx8V0lKKNtRnfiEbrW%2FqFENf8qA8eint3GAPQhRzvzE8iXj4a3dMQJ8iEL6ii%2FmYONxmu6EgXH2dxd8oj7Jl1uZlwWDGwy9Do1e0yBXrrUdnxu0ngoyHenrqLimF2Yw43wGa7P6mgucl4%2BnOweTN1olEkmd6TY6b5naycJpCSOoWUOiQ4pIwFPcNEWPSbzrGmkVFaLycFS3Xlv&X-Amz-Signature=2982168219a0580dc8ca268c7b51d1b0798d68485343a790efdc361aea7e8274&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNZCLCO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGTV1yhqANVA1L5cuT9jmJ%2Frteawddr8C7dQEfz9u2nAiEAvA%2Fs3lGiTnmO2GxZ2THJu7dern%2F5mkP7RGl8Enk%2Fj0Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPftZOSIHfK3ICU3fyrcA5dgWcUWQ1M5u89rxWqRO88QVWKELkdgIlV9Ota3pnqCbxjyqFDs9MxXBaaWhiRys1V%2FGCAw8h%2BkcA1mHlQgYGT8K%2BPaYl6sTZKOwt9fApHBwtNsNeOopF%2BdPH0unphAZnm%2F%2FbstM%2BTMDEjDp9n%2Fiv7YLzXCvNT44mlQUgWYXG9HRP%2BYH0aBk5S1dOT666fEaC5JD0o3qwQ%2FsR0DHfyHjk6Z8Phi5MRYKxsUj0rL3pK62blXG5iN%2BZ9ikE8e71pA%2FWUNZj4vVWb3040ifJP5SP94btTaVb5iwm4GEC7bF6jmXaV45PxOXYDiMKNASeAfBFditYuOyQDqfpGrBhpQrIV%2BOv7sTJw5une4JD5VSmdNo58Wn4HnCgDUFdDxQe6MyokMb3JJCZ5CAU7nwePQ%2FJRks21WWtWRhqOUmcshhmPq1qDHtqURc%2FwccRsoVBIMmnJArglEEMJHqoGjGsfR%2B5n91w3y7X31RllF69tW1bfCmNicT8bkGEdJlGubdCtXj4EkgcCmFUJSEBAPM7ShjeqT4j%2BtKI17ADAlJT1afNdG7EIrUnVNjbj8CD0q3bcfYBXN6A%2BxRE62PpkSC5N82mWnWB5%2BmV54VYk49xTtZs%2B%2BtYZ5CAXnFrkSzFxVMO%2FIscAGOqUBfOOgXNsg1yWrk2yx8V0lKKNtRnfiEbrW%2FqFENf8qA8eint3GAPQhRzvzE8iXj4a3dMQJ8iEL6ii%2FmYONxmu6EgXH2dxd8oj7Jl1uZlwWDGwy9Do1e0yBXrrUdnxu0ngoyHenrqLimF2Yw43wGa7P6mgucl4%2BnOweTN1olEkmd6TY6b5naycJpCSOoWUOiQ4pIwFPcNEWPSbzrGmkVFaLycFS3Xlv&X-Amz-Signature=2c114f86ceb731b48406b4be604765c0b49bc7abff805fea6a1b4ba8b84be279&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNZCLCO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGTV1yhqANVA1L5cuT9jmJ%2Frteawddr8C7dQEfz9u2nAiEAvA%2Fs3lGiTnmO2GxZ2THJu7dern%2F5mkP7RGl8Enk%2Fj0Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPftZOSIHfK3ICU3fyrcA5dgWcUWQ1M5u89rxWqRO88QVWKELkdgIlV9Ota3pnqCbxjyqFDs9MxXBaaWhiRys1V%2FGCAw8h%2BkcA1mHlQgYGT8K%2BPaYl6sTZKOwt9fApHBwtNsNeOopF%2BdPH0unphAZnm%2F%2FbstM%2BTMDEjDp9n%2Fiv7YLzXCvNT44mlQUgWYXG9HRP%2BYH0aBk5S1dOT666fEaC5JD0o3qwQ%2FsR0DHfyHjk6Z8Phi5MRYKxsUj0rL3pK62blXG5iN%2BZ9ikE8e71pA%2FWUNZj4vVWb3040ifJP5SP94btTaVb5iwm4GEC7bF6jmXaV45PxOXYDiMKNASeAfBFditYuOyQDqfpGrBhpQrIV%2BOv7sTJw5une4JD5VSmdNo58Wn4HnCgDUFdDxQe6MyokMb3JJCZ5CAU7nwePQ%2FJRks21WWtWRhqOUmcshhmPq1qDHtqURc%2FwccRsoVBIMmnJArglEEMJHqoGjGsfR%2B5n91w3y7X31RllF69tW1bfCmNicT8bkGEdJlGubdCtXj4EkgcCmFUJSEBAPM7ShjeqT4j%2BtKI17ADAlJT1afNdG7EIrUnVNjbj8CD0q3bcfYBXN6A%2BxRE62PpkSC5N82mWnWB5%2BmV54VYk49xTtZs%2B%2BtYZ5CAXnFrkSzFxVMO%2FIscAGOqUBfOOgXNsg1yWrk2yx8V0lKKNtRnfiEbrW%2FqFENf8qA8eint3GAPQhRzvzE8iXj4a3dMQJ8iEL6ii%2FmYONxmu6EgXH2dxd8oj7Jl1uZlwWDGwy9Do1e0yBXrrUdnxu0ngoyHenrqLimF2Yw43wGa7P6mgucl4%2BnOweTN1olEkmd6TY6b5naycJpCSOoWUOiQ4pIwFPcNEWPSbzrGmkVFaLycFS3Xlv&X-Amz-Signature=40e7d3da3f89b086e9890cfcb9f0d571cbb2aac7e8dd70130da41a292bf5cfc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNZCLCO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGTV1yhqANVA1L5cuT9jmJ%2Frteawddr8C7dQEfz9u2nAiEAvA%2Fs3lGiTnmO2GxZ2THJu7dern%2F5mkP7RGl8Enk%2Fj0Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPftZOSIHfK3ICU3fyrcA5dgWcUWQ1M5u89rxWqRO88QVWKELkdgIlV9Ota3pnqCbxjyqFDs9MxXBaaWhiRys1V%2FGCAw8h%2BkcA1mHlQgYGT8K%2BPaYl6sTZKOwt9fApHBwtNsNeOopF%2BdPH0unphAZnm%2F%2FbstM%2BTMDEjDp9n%2Fiv7YLzXCvNT44mlQUgWYXG9HRP%2BYH0aBk5S1dOT666fEaC5JD0o3qwQ%2FsR0DHfyHjk6Z8Phi5MRYKxsUj0rL3pK62blXG5iN%2BZ9ikE8e71pA%2FWUNZj4vVWb3040ifJP5SP94btTaVb5iwm4GEC7bF6jmXaV45PxOXYDiMKNASeAfBFditYuOyQDqfpGrBhpQrIV%2BOv7sTJw5une4JD5VSmdNo58Wn4HnCgDUFdDxQe6MyokMb3JJCZ5CAU7nwePQ%2FJRks21WWtWRhqOUmcshhmPq1qDHtqURc%2FwccRsoVBIMmnJArglEEMJHqoGjGsfR%2B5n91w3y7X31RllF69tW1bfCmNicT8bkGEdJlGubdCtXj4EkgcCmFUJSEBAPM7ShjeqT4j%2BtKI17ADAlJT1afNdG7EIrUnVNjbj8CD0q3bcfYBXN6A%2BxRE62PpkSC5N82mWnWB5%2BmV54VYk49xTtZs%2B%2BtYZ5CAXnFrkSzFxVMO%2FIscAGOqUBfOOgXNsg1yWrk2yx8V0lKKNtRnfiEbrW%2FqFENf8qA8eint3GAPQhRzvzE8iXj4a3dMQJ8iEL6ii%2FmYONxmu6EgXH2dxd8oj7Jl1uZlwWDGwy9Do1e0yBXrrUdnxu0ngoyHenrqLimF2Yw43wGa7P6mgucl4%2BnOweTN1olEkmd6TY6b5naycJpCSOoWUOiQ4pIwFPcNEWPSbzrGmkVFaLycFS3Xlv&X-Amz-Signature=5d90c1e325fba9aa2453b848bbf1325512bc5f81ec615032ce509df52e186fbb&X-Amz-SignedHeaders=host&x-id=GetObject)
