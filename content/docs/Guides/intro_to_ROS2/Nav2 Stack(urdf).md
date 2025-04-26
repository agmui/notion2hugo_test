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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMGOOHX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHv8DmGNOSQlBCtqBujOKeJAw0r3Qc9aXiIqXOlYwjiAiBNxR0OQVMvhaTqBYNQUY%2BoLt4CMqCC9ikZ48OGnhuhtir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMy9avXo13o0DyXqLAKtwDuJMVxReOabpCfRB3YBLGJmoRiUovW9Rp9CuAJZ3TURV5GN3g7bvOcfuMM9fo0Id1AS%2FbH7sR3JmcRuXzl4QDFi0nDC%2B%2BgNeAgyLDN1IAqaYVz%2BFo3e%2F9iM5r0PuT%2F4lgJXr5rOVn7KMRuuJ3yD%2ByypDqBr%2FWYcjKMpAYNHUNvwumdA87QrTPhcqhQZfIz8KnQ5ciNT7HV8I9Mp1PB6A07rB34%2F3zGItaQACBUWlSETceoyohxOfdmGvRMraExMFVzBo9nCqlExlIts0Jqqb0YoVJsLKz%2FVT%2BmMS9dbT6Lx68aQRXyU52zvMnbOoKG5uh0kSdmDnBuQGPtCTJfcFjTknUvhJ1rVyHij%2BydRcwiWCTOgmFQQLjlHCSjZY6RI1DS1r1%2BnE02ObOKDDAEIPtaFijQJtzPDIr3Q7SKoV8HlBT0MuHtGxbQ6eXwl11oBwxoJtp5OIsss71BHevQEqL%2BBWdDxGuPzPzapfWbomlTXwWg9%2BsLyTThBj5ZAlh1jnMiPEF8ZBRy%2Fb%2BNYdFDNftooEcucCR0gPKlkZNtLylk%2BvlSwhGkmWBuP4GZMno8M9U%2BguKIEKtHbSHXAIiLAa39mBwo6Q%2FmeopyjW%2BYMVi6XPnQrnT9DXI07rxi9IwlYSywAY6pgFSo2DgZsYeBL4NjeebD%2B2mqiw%2B%2BWqQIeCF1P3dpDR8TND6aRpZ5YBvA7lwV1HBvYG3lcJIO1FU9S4pj%2Bnsy3EdkrGdwEuJb7RjiXYgVPOKXEfRZvhv1HrzqexF1%2BslhPim%2FrD0iPWCzZA%2FARYVRFBuz%2BlnDLynvbfADTgPDaoSInQIfWqUqTQi%2FJkmRzux3LAM1DLI9dIMr05BuvRE1Oag4STQ2ifu&X-Amz-Signature=2bbd9b3737f52daa88afb1ea18a4208950a929dd00cdbafb06ed81cfd6ee0b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMGOOHX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHv8DmGNOSQlBCtqBujOKeJAw0r3Qc9aXiIqXOlYwjiAiBNxR0OQVMvhaTqBYNQUY%2BoLt4CMqCC9ikZ48OGnhuhtir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMy9avXo13o0DyXqLAKtwDuJMVxReOabpCfRB3YBLGJmoRiUovW9Rp9CuAJZ3TURV5GN3g7bvOcfuMM9fo0Id1AS%2FbH7sR3JmcRuXzl4QDFi0nDC%2B%2BgNeAgyLDN1IAqaYVz%2BFo3e%2F9iM5r0PuT%2F4lgJXr5rOVn7KMRuuJ3yD%2ByypDqBr%2FWYcjKMpAYNHUNvwumdA87QrTPhcqhQZfIz8KnQ5ciNT7HV8I9Mp1PB6A07rB34%2F3zGItaQACBUWlSETceoyohxOfdmGvRMraExMFVzBo9nCqlExlIts0Jqqb0YoVJsLKz%2FVT%2BmMS9dbT6Lx68aQRXyU52zvMnbOoKG5uh0kSdmDnBuQGPtCTJfcFjTknUvhJ1rVyHij%2BydRcwiWCTOgmFQQLjlHCSjZY6RI1DS1r1%2BnE02ObOKDDAEIPtaFijQJtzPDIr3Q7SKoV8HlBT0MuHtGxbQ6eXwl11oBwxoJtp5OIsss71BHevQEqL%2BBWdDxGuPzPzapfWbomlTXwWg9%2BsLyTThBj5ZAlh1jnMiPEF8ZBRy%2Fb%2BNYdFDNftooEcucCR0gPKlkZNtLylk%2BvlSwhGkmWBuP4GZMno8M9U%2BguKIEKtHbSHXAIiLAa39mBwo6Q%2FmeopyjW%2BYMVi6XPnQrnT9DXI07rxi9IwlYSywAY6pgFSo2DgZsYeBL4NjeebD%2B2mqiw%2B%2BWqQIeCF1P3dpDR8TND6aRpZ5YBvA7lwV1HBvYG3lcJIO1FU9S4pj%2Bnsy3EdkrGdwEuJb7RjiXYgVPOKXEfRZvhv1HrzqexF1%2BslhPim%2FrD0iPWCzZA%2FARYVRFBuz%2BlnDLynvbfADTgPDaoSInQIfWqUqTQi%2FJkmRzux3LAM1DLI9dIMr05BuvRE1Oag4STQ2ifu&X-Amz-Signature=e62d91829d54cb463edfd9ad4c84157beba514961ad9897fa8458c3d4b2e0cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMGOOHX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHv8DmGNOSQlBCtqBujOKeJAw0r3Qc9aXiIqXOlYwjiAiBNxR0OQVMvhaTqBYNQUY%2BoLt4CMqCC9ikZ48OGnhuhtir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMy9avXo13o0DyXqLAKtwDuJMVxReOabpCfRB3YBLGJmoRiUovW9Rp9CuAJZ3TURV5GN3g7bvOcfuMM9fo0Id1AS%2FbH7sR3JmcRuXzl4QDFi0nDC%2B%2BgNeAgyLDN1IAqaYVz%2BFo3e%2F9iM5r0PuT%2F4lgJXr5rOVn7KMRuuJ3yD%2ByypDqBr%2FWYcjKMpAYNHUNvwumdA87QrTPhcqhQZfIz8KnQ5ciNT7HV8I9Mp1PB6A07rB34%2F3zGItaQACBUWlSETceoyohxOfdmGvRMraExMFVzBo9nCqlExlIts0Jqqb0YoVJsLKz%2FVT%2BmMS9dbT6Lx68aQRXyU52zvMnbOoKG5uh0kSdmDnBuQGPtCTJfcFjTknUvhJ1rVyHij%2BydRcwiWCTOgmFQQLjlHCSjZY6RI1DS1r1%2BnE02ObOKDDAEIPtaFijQJtzPDIr3Q7SKoV8HlBT0MuHtGxbQ6eXwl11oBwxoJtp5OIsss71BHevQEqL%2BBWdDxGuPzPzapfWbomlTXwWg9%2BsLyTThBj5ZAlh1jnMiPEF8ZBRy%2Fb%2BNYdFDNftooEcucCR0gPKlkZNtLylk%2BvlSwhGkmWBuP4GZMno8M9U%2BguKIEKtHbSHXAIiLAa39mBwo6Q%2FmeopyjW%2BYMVi6XPnQrnT9DXI07rxi9IwlYSywAY6pgFSo2DgZsYeBL4NjeebD%2B2mqiw%2B%2BWqQIeCF1P3dpDR8TND6aRpZ5YBvA7lwV1HBvYG3lcJIO1FU9S4pj%2Bnsy3EdkrGdwEuJb7RjiXYgVPOKXEfRZvhv1HrzqexF1%2BslhPim%2FrD0iPWCzZA%2FARYVRFBuz%2BlnDLynvbfADTgPDaoSInQIfWqUqTQi%2FJkmRzux3LAM1DLI9dIMr05BuvRE1Oag4STQ2ifu&X-Amz-Signature=5b72b90c08b5421147130a99a8938870187b9fbcf5b47a4cdeb32a0c019beca8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMGOOHX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHv8DmGNOSQlBCtqBujOKeJAw0r3Qc9aXiIqXOlYwjiAiBNxR0OQVMvhaTqBYNQUY%2BoLt4CMqCC9ikZ48OGnhuhtir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMy9avXo13o0DyXqLAKtwDuJMVxReOabpCfRB3YBLGJmoRiUovW9Rp9CuAJZ3TURV5GN3g7bvOcfuMM9fo0Id1AS%2FbH7sR3JmcRuXzl4QDFi0nDC%2B%2BgNeAgyLDN1IAqaYVz%2BFo3e%2F9iM5r0PuT%2F4lgJXr5rOVn7KMRuuJ3yD%2ByypDqBr%2FWYcjKMpAYNHUNvwumdA87QrTPhcqhQZfIz8KnQ5ciNT7HV8I9Mp1PB6A07rB34%2F3zGItaQACBUWlSETceoyohxOfdmGvRMraExMFVzBo9nCqlExlIts0Jqqb0YoVJsLKz%2FVT%2BmMS9dbT6Lx68aQRXyU52zvMnbOoKG5uh0kSdmDnBuQGPtCTJfcFjTknUvhJ1rVyHij%2BydRcwiWCTOgmFQQLjlHCSjZY6RI1DS1r1%2BnE02ObOKDDAEIPtaFijQJtzPDIr3Q7SKoV8HlBT0MuHtGxbQ6eXwl11oBwxoJtp5OIsss71BHevQEqL%2BBWdDxGuPzPzapfWbomlTXwWg9%2BsLyTThBj5ZAlh1jnMiPEF8ZBRy%2Fb%2BNYdFDNftooEcucCR0gPKlkZNtLylk%2BvlSwhGkmWBuP4GZMno8M9U%2BguKIEKtHbSHXAIiLAa39mBwo6Q%2FmeopyjW%2BYMVi6XPnQrnT9DXI07rxi9IwlYSywAY6pgFSo2DgZsYeBL4NjeebD%2B2mqiw%2B%2BWqQIeCF1P3dpDR8TND6aRpZ5YBvA7lwV1HBvYG3lcJIO1FU9S4pj%2Bnsy3EdkrGdwEuJb7RjiXYgVPOKXEfRZvhv1HrzqexF1%2BslhPim%2FrD0iPWCzZA%2FARYVRFBuz%2BlnDLynvbfADTgPDaoSInQIfWqUqTQi%2FJkmRzux3LAM1DLI9dIMr05BuvRE1Oag4STQ2ifu&X-Amz-Signature=a2b3c0aaeab6440217d6b39c56fbae6df92224e978429f3d376d11d9fad4fdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMGOOHX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHv8DmGNOSQlBCtqBujOKeJAw0r3Qc9aXiIqXOlYwjiAiBNxR0OQVMvhaTqBYNQUY%2BoLt4CMqCC9ikZ48OGnhuhtir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMy9avXo13o0DyXqLAKtwDuJMVxReOabpCfRB3YBLGJmoRiUovW9Rp9CuAJZ3TURV5GN3g7bvOcfuMM9fo0Id1AS%2FbH7sR3JmcRuXzl4QDFi0nDC%2B%2BgNeAgyLDN1IAqaYVz%2BFo3e%2F9iM5r0PuT%2F4lgJXr5rOVn7KMRuuJ3yD%2ByypDqBr%2FWYcjKMpAYNHUNvwumdA87QrTPhcqhQZfIz8KnQ5ciNT7HV8I9Mp1PB6A07rB34%2F3zGItaQACBUWlSETceoyohxOfdmGvRMraExMFVzBo9nCqlExlIts0Jqqb0YoVJsLKz%2FVT%2BmMS9dbT6Lx68aQRXyU52zvMnbOoKG5uh0kSdmDnBuQGPtCTJfcFjTknUvhJ1rVyHij%2BydRcwiWCTOgmFQQLjlHCSjZY6RI1DS1r1%2BnE02ObOKDDAEIPtaFijQJtzPDIr3Q7SKoV8HlBT0MuHtGxbQ6eXwl11oBwxoJtp5OIsss71BHevQEqL%2BBWdDxGuPzPzapfWbomlTXwWg9%2BsLyTThBj5ZAlh1jnMiPEF8ZBRy%2Fb%2BNYdFDNftooEcucCR0gPKlkZNtLylk%2BvlSwhGkmWBuP4GZMno8M9U%2BguKIEKtHbSHXAIiLAa39mBwo6Q%2FmeopyjW%2BYMVi6XPnQrnT9DXI07rxi9IwlYSywAY6pgFSo2DgZsYeBL4NjeebD%2B2mqiw%2B%2BWqQIeCF1P3dpDR8TND6aRpZ5YBvA7lwV1HBvYG3lcJIO1FU9S4pj%2Bnsy3EdkrGdwEuJb7RjiXYgVPOKXEfRZvhv1HrzqexF1%2BslhPim%2FrD0iPWCzZA%2FARYVRFBuz%2BlnDLynvbfADTgPDaoSInQIfWqUqTQi%2FJkmRzux3LAM1DLI9dIMr05BuvRE1Oag4STQ2ifu&X-Amz-Signature=667392535512846c3a9e08bcbdea99bc6d0b6b3097a0865b8999a74c086991b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMGOOHX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHv8DmGNOSQlBCtqBujOKeJAw0r3Qc9aXiIqXOlYwjiAiBNxR0OQVMvhaTqBYNQUY%2BoLt4CMqCC9ikZ48OGnhuhtir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMy9avXo13o0DyXqLAKtwDuJMVxReOabpCfRB3YBLGJmoRiUovW9Rp9CuAJZ3TURV5GN3g7bvOcfuMM9fo0Id1AS%2FbH7sR3JmcRuXzl4QDFi0nDC%2B%2BgNeAgyLDN1IAqaYVz%2BFo3e%2F9iM5r0PuT%2F4lgJXr5rOVn7KMRuuJ3yD%2ByypDqBr%2FWYcjKMpAYNHUNvwumdA87QrTPhcqhQZfIz8KnQ5ciNT7HV8I9Mp1PB6A07rB34%2F3zGItaQACBUWlSETceoyohxOfdmGvRMraExMFVzBo9nCqlExlIts0Jqqb0YoVJsLKz%2FVT%2BmMS9dbT6Lx68aQRXyU52zvMnbOoKG5uh0kSdmDnBuQGPtCTJfcFjTknUvhJ1rVyHij%2BydRcwiWCTOgmFQQLjlHCSjZY6RI1DS1r1%2BnE02ObOKDDAEIPtaFijQJtzPDIr3Q7SKoV8HlBT0MuHtGxbQ6eXwl11oBwxoJtp5OIsss71BHevQEqL%2BBWdDxGuPzPzapfWbomlTXwWg9%2BsLyTThBj5ZAlh1jnMiPEF8ZBRy%2Fb%2BNYdFDNftooEcucCR0gPKlkZNtLylk%2BvlSwhGkmWBuP4GZMno8M9U%2BguKIEKtHbSHXAIiLAa39mBwo6Q%2FmeopyjW%2BYMVi6XPnQrnT9DXI07rxi9IwlYSywAY6pgFSo2DgZsYeBL4NjeebD%2B2mqiw%2B%2BWqQIeCF1P3dpDR8TND6aRpZ5YBvA7lwV1HBvYG3lcJIO1FU9S4pj%2Bnsy3EdkrGdwEuJb7RjiXYgVPOKXEfRZvhv1HrzqexF1%2BslhPim%2FrD0iPWCzZA%2FARYVRFBuz%2BlnDLynvbfADTgPDaoSInQIfWqUqTQi%2FJkmRzux3LAM1DLI9dIMr05BuvRE1Oag4STQ2ifu&X-Amz-Signature=3591e52e15eaae5404790d6ec2f6a0af40f42a3525594afff81b9b101e761cf8&X-Amz-SignedHeaders=host&x-id=GetObject)
