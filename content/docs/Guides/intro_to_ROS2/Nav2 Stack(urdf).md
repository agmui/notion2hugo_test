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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFBGXIZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH7Zi9cYz%2BCAywITMXtHUxXjzB0jksAfFib86vGKwRsYAiEA4D3uftpmu%2F7G2PTKSeYGghkCQaAP9uodLQWg2WUvuJUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERMuN5OFEHYW7Pu5ircA%2BOUtwRDFZtAPnb03vn7NEjI1ZpU5JzD0ZMXpwwg%2FEL9Ce4rLMlyshIRvgFDGOFOaYIInVpnJbqvPNY9e7%2BZU%2FZoPFEQrSfRqAdyKRlX84hPbR3D4rI4J5mcNTj6mVx9yS2vhS7Wu0k2sS%2BTDbtKhTkqQgsFaeRHjMirC2KxE3ZwF9Ia8yN6A9ZapntHLR6WN8jRV2S7%2FHKfBWQutzNXMlEOwKJUURm7lWH%2F1hc4ZPWsZ5SDg86kXivXlULhe8mEZK5wq8StWQcHTwvkbcvE5aLpxhz%2BtdO2fwXBDLOeRHZF6mqHeQ%2Fw2lw7iy9EEnIr%2B8%2BCB4PqO9I7vfwFMkfWXvPTCxH5xi%2Fq42l0L4%2BzvcqDu3c6pMfWFaweAAO40rXapPMNWjRTdfk3Tpn3xY8sl7yp46yWobPVHVBnHuNXCLGZKkrQZ0di3h3BxmU75h4XyaoPuqdOEMtP83jMGdFSMSbyWFBaYETb%2F7OJWKzInski75KuDhcrLVbUMBPYTVaqEGmSVR3m%2Bntj0Y68JgM8Dswh7fbv24btMZEeo1XbdfsYZRNDQGPEeeQl4xseXWiO0SpaCCWyF9W%2Bag%2F4TZKAWhiH2UQqR90sgto99QOdYp8WRLDgwJSGs%2BACJX9UMLDr28AGOqUBENCD4Xiu9cb7kPZiABWVADZ6niq%2Bsg84VzYT%2BSTTs5eu8rg6GykbM%2BlOHCrHjRKPB3%2BNA9xhgN%2B37%2BeSV0hk7D8I2y9f5eFEi1HpAGMHkdOkzLIAjXSDOd%2FRMDxVHDlgdRe18rFtTKD3%2Bo%2FLKKQwSmBm0p1LH%2FsuPfX72b7MwtcqXJz%2Fsd3kcdWOThX8LcB6sBpyN%2BfpWkhaM0oLeGPXl6QNIP%2Fb&X-Amz-Signature=a67b0bd8f3f3746eb1f574a42e9326fc4e4f3f6b23b5cc3c6130dcc543645450&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFBGXIZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH7Zi9cYz%2BCAywITMXtHUxXjzB0jksAfFib86vGKwRsYAiEA4D3uftpmu%2F7G2PTKSeYGghkCQaAP9uodLQWg2WUvuJUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERMuN5OFEHYW7Pu5ircA%2BOUtwRDFZtAPnb03vn7NEjI1ZpU5JzD0ZMXpwwg%2FEL9Ce4rLMlyshIRvgFDGOFOaYIInVpnJbqvPNY9e7%2BZU%2FZoPFEQrSfRqAdyKRlX84hPbR3D4rI4J5mcNTj6mVx9yS2vhS7Wu0k2sS%2BTDbtKhTkqQgsFaeRHjMirC2KxE3ZwF9Ia8yN6A9ZapntHLR6WN8jRV2S7%2FHKfBWQutzNXMlEOwKJUURm7lWH%2F1hc4ZPWsZ5SDg86kXivXlULhe8mEZK5wq8StWQcHTwvkbcvE5aLpxhz%2BtdO2fwXBDLOeRHZF6mqHeQ%2Fw2lw7iy9EEnIr%2B8%2BCB4PqO9I7vfwFMkfWXvPTCxH5xi%2Fq42l0L4%2BzvcqDu3c6pMfWFaweAAO40rXapPMNWjRTdfk3Tpn3xY8sl7yp46yWobPVHVBnHuNXCLGZKkrQZ0di3h3BxmU75h4XyaoPuqdOEMtP83jMGdFSMSbyWFBaYETb%2F7OJWKzInski75KuDhcrLVbUMBPYTVaqEGmSVR3m%2Bntj0Y68JgM8Dswh7fbv24btMZEeo1XbdfsYZRNDQGPEeeQl4xseXWiO0SpaCCWyF9W%2Bag%2F4TZKAWhiH2UQqR90sgto99QOdYp8WRLDgwJSGs%2BACJX9UMLDr28AGOqUBENCD4Xiu9cb7kPZiABWVADZ6niq%2Bsg84VzYT%2BSTTs5eu8rg6GykbM%2BlOHCrHjRKPB3%2BNA9xhgN%2B37%2BeSV0hk7D8I2y9f5eFEi1HpAGMHkdOkzLIAjXSDOd%2FRMDxVHDlgdRe18rFtTKD3%2Bo%2FLKKQwSmBm0p1LH%2FsuPfX72b7MwtcqXJz%2Fsd3kcdWOThX8LcB6sBpyN%2BfpWkhaM0oLeGPXl6QNIP%2Fb&X-Amz-Signature=e4f05ca40750b6bcd2cb5d47435a441619c1635362fc3d26f9ce76a5411f6752&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFBGXIZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH7Zi9cYz%2BCAywITMXtHUxXjzB0jksAfFib86vGKwRsYAiEA4D3uftpmu%2F7G2PTKSeYGghkCQaAP9uodLQWg2WUvuJUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERMuN5OFEHYW7Pu5ircA%2BOUtwRDFZtAPnb03vn7NEjI1ZpU5JzD0ZMXpwwg%2FEL9Ce4rLMlyshIRvgFDGOFOaYIInVpnJbqvPNY9e7%2BZU%2FZoPFEQrSfRqAdyKRlX84hPbR3D4rI4J5mcNTj6mVx9yS2vhS7Wu0k2sS%2BTDbtKhTkqQgsFaeRHjMirC2KxE3ZwF9Ia8yN6A9ZapntHLR6WN8jRV2S7%2FHKfBWQutzNXMlEOwKJUURm7lWH%2F1hc4ZPWsZ5SDg86kXivXlULhe8mEZK5wq8StWQcHTwvkbcvE5aLpxhz%2BtdO2fwXBDLOeRHZF6mqHeQ%2Fw2lw7iy9EEnIr%2B8%2BCB4PqO9I7vfwFMkfWXvPTCxH5xi%2Fq42l0L4%2BzvcqDu3c6pMfWFaweAAO40rXapPMNWjRTdfk3Tpn3xY8sl7yp46yWobPVHVBnHuNXCLGZKkrQZ0di3h3BxmU75h4XyaoPuqdOEMtP83jMGdFSMSbyWFBaYETb%2F7OJWKzInski75KuDhcrLVbUMBPYTVaqEGmSVR3m%2Bntj0Y68JgM8Dswh7fbv24btMZEeo1XbdfsYZRNDQGPEeeQl4xseXWiO0SpaCCWyF9W%2Bag%2F4TZKAWhiH2UQqR90sgto99QOdYp8WRLDgwJSGs%2BACJX9UMLDr28AGOqUBENCD4Xiu9cb7kPZiABWVADZ6niq%2Bsg84VzYT%2BSTTs5eu8rg6GykbM%2BlOHCrHjRKPB3%2BNA9xhgN%2B37%2BeSV0hk7D8I2y9f5eFEi1HpAGMHkdOkzLIAjXSDOd%2FRMDxVHDlgdRe18rFtTKD3%2Bo%2FLKKQwSmBm0p1LH%2FsuPfX72b7MwtcqXJz%2Fsd3kcdWOThX8LcB6sBpyN%2BfpWkhaM0oLeGPXl6QNIP%2Fb&X-Amz-Signature=80812e2f90e766be79bba722c3565d14c80f6d34e9773ed3bc881769698fe836&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFBGXIZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH7Zi9cYz%2BCAywITMXtHUxXjzB0jksAfFib86vGKwRsYAiEA4D3uftpmu%2F7G2PTKSeYGghkCQaAP9uodLQWg2WUvuJUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERMuN5OFEHYW7Pu5ircA%2BOUtwRDFZtAPnb03vn7NEjI1ZpU5JzD0ZMXpwwg%2FEL9Ce4rLMlyshIRvgFDGOFOaYIInVpnJbqvPNY9e7%2BZU%2FZoPFEQrSfRqAdyKRlX84hPbR3D4rI4J5mcNTj6mVx9yS2vhS7Wu0k2sS%2BTDbtKhTkqQgsFaeRHjMirC2KxE3ZwF9Ia8yN6A9ZapntHLR6WN8jRV2S7%2FHKfBWQutzNXMlEOwKJUURm7lWH%2F1hc4ZPWsZ5SDg86kXivXlULhe8mEZK5wq8StWQcHTwvkbcvE5aLpxhz%2BtdO2fwXBDLOeRHZF6mqHeQ%2Fw2lw7iy9EEnIr%2B8%2BCB4PqO9I7vfwFMkfWXvPTCxH5xi%2Fq42l0L4%2BzvcqDu3c6pMfWFaweAAO40rXapPMNWjRTdfk3Tpn3xY8sl7yp46yWobPVHVBnHuNXCLGZKkrQZ0di3h3BxmU75h4XyaoPuqdOEMtP83jMGdFSMSbyWFBaYETb%2F7OJWKzInski75KuDhcrLVbUMBPYTVaqEGmSVR3m%2Bntj0Y68JgM8Dswh7fbv24btMZEeo1XbdfsYZRNDQGPEeeQl4xseXWiO0SpaCCWyF9W%2Bag%2F4TZKAWhiH2UQqR90sgto99QOdYp8WRLDgwJSGs%2BACJX9UMLDr28AGOqUBENCD4Xiu9cb7kPZiABWVADZ6niq%2Bsg84VzYT%2BSTTs5eu8rg6GykbM%2BlOHCrHjRKPB3%2BNA9xhgN%2B37%2BeSV0hk7D8I2y9f5eFEi1HpAGMHkdOkzLIAjXSDOd%2FRMDxVHDlgdRe18rFtTKD3%2Bo%2FLKKQwSmBm0p1LH%2FsuPfX72b7MwtcqXJz%2Fsd3kcdWOThX8LcB6sBpyN%2BfpWkhaM0oLeGPXl6QNIP%2Fb&X-Amz-Signature=be45b8f6a4dc9cb7e3352760778ac2d54af77f2e06f405b2031aa05749488a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFBGXIZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH7Zi9cYz%2BCAywITMXtHUxXjzB0jksAfFib86vGKwRsYAiEA4D3uftpmu%2F7G2PTKSeYGghkCQaAP9uodLQWg2WUvuJUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERMuN5OFEHYW7Pu5ircA%2BOUtwRDFZtAPnb03vn7NEjI1ZpU5JzD0ZMXpwwg%2FEL9Ce4rLMlyshIRvgFDGOFOaYIInVpnJbqvPNY9e7%2BZU%2FZoPFEQrSfRqAdyKRlX84hPbR3D4rI4J5mcNTj6mVx9yS2vhS7Wu0k2sS%2BTDbtKhTkqQgsFaeRHjMirC2KxE3ZwF9Ia8yN6A9ZapntHLR6WN8jRV2S7%2FHKfBWQutzNXMlEOwKJUURm7lWH%2F1hc4ZPWsZ5SDg86kXivXlULhe8mEZK5wq8StWQcHTwvkbcvE5aLpxhz%2BtdO2fwXBDLOeRHZF6mqHeQ%2Fw2lw7iy9EEnIr%2B8%2BCB4PqO9I7vfwFMkfWXvPTCxH5xi%2Fq42l0L4%2BzvcqDu3c6pMfWFaweAAO40rXapPMNWjRTdfk3Tpn3xY8sl7yp46yWobPVHVBnHuNXCLGZKkrQZ0di3h3BxmU75h4XyaoPuqdOEMtP83jMGdFSMSbyWFBaYETb%2F7OJWKzInski75KuDhcrLVbUMBPYTVaqEGmSVR3m%2Bntj0Y68JgM8Dswh7fbv24btMZEeo1XbdfsYZRNDQGPEeeQl4xseXWiO0SpaCCWyF9W%2Bag%2F4TZKAWhiH2UQqR90sgto99QOdYp8WRLDgwJSGs%2BACJX9UMLDr28AGOqUBENCD4Xiu9cb7kPZiABWVADZ6niq%2Bsg84VzYT%2BSTTs5eu8rg6GykbM%2BlOHCrHjRKPB3%2BNA9xhgN%2B37%2BeSV0hk7D8I2y9f5eFEi1HpAGMHkdOkzLIAjXSDOd%2FRMDxVHDlgdRe18rFtTKD3%2Bo%2FLKKQwSmBm0p1LH%2FsuPfX72b7MwtcqXJz%2Fsd3kcdWOThX8LcB6sBpyN%2BfpWkhaM0oLeGPXl6QNIP%2Fb&X-Amz-Signature=9bfb00aeec3d2485a8f07dcc03e144af805d7d7d5720702c0a6b664883eae81c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFBGXIZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH7Zi9cYz%2BCAywITMXtHUxXjzB0jksAfFib86vGKwRsYAiEA4D3uftpmu%2F7G2PTKSeYGghkCQaAP9uodLQWg2WUvuJUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERMuN5OFEHYW7Pu5ircA%2BOUtwRDFZtAPnb03vn7NEjI1ZpU5JzD0ZMXpwwg%2FEL9Ce4rLMlyshIRvgFDGOFOaYIInVpnJbqvPNY9e7%2BZU%2FZoPFEQrSfRqAdyKRlX84hPbR3D4rI4J5mcNTj6mVx9yS2vhS7Wu0k2sS%2BTDbtKhTkqQgsFaeRHjMirC2KxE3ZwF9Ia8yN6A9ZapntHLR6WN8jRV2S7%2FHKfBWQutzNXMlEOwKJUURm7lWH%2F1hc4ZPWsZ5SDg86kXivXlULhe8mEZK5wq8StWQcHTwvkbcvE5aLpxhz%2BtdO2fwXBDLOeRHZF6mqHeQ%2Fw2lw7iy9EEnIr%2B8%2BCB4PqO9I7vfwFMkfWXvPTCxH5xi%2Fq42l0L4%2BzvcqDu3c6pMfWFaweAAO40rXapPMNWjRTdfk3Tpn3xY8sl7yp46yWobPVHVBnHuNXCLGZKkrQZ0di3h3BxmU75h4XyaoPuqdOEMtP83jMGdFSMSbyWFBaYETb%2F7OJWKzInski75KuDhcrLVbUMBPYTVaqEGmSVR3m%2Bntj0Y68JgM8Dswh7fbv24btMZEeo1XbdfsYZRNDQGPEeeQl4xseXWiO0SpaCCWyF9W%2Bag%2F4TZKAWhiH2UQqR90sgto99QOdYp8WRLDgwJSGs%2BACJX9UMLDr28AGOqUBENCD4Xiu9cb7kPZiABWVADZ6niq%2Bsg84VzYT%2BSTTs5eu8rg6GykbM%2BlOHCrHjRKPB3%2BNA9xhgN%2B37%2BeSV0hk7D8I2y9f5eFEi1HpAGMHkdOkzLIAjXSDOd%2FRMDxVHDlgdRe18rFtTKD3%2Bo%2FLKKQwSmBm0p1LH%2FsuPfX72b7MwtcqXJz%2Fsd3kcdWOThX8LcB6sBpyN%2BfpWkhaM0oLeGPXl6QNIP%2Fb&X-Amz-Signature=21e900dc14f1cb97de9c32557610f7a5157d7867050650d7b6016f36663cd01a&X-Amz-SignedHeaders=host&x-id=GetObject)
