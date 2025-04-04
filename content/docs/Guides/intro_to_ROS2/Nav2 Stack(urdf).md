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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULHLUXV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGulYC%2FFSDms8j5WhfCdxPMOdfFSBH1zxYUsJJWXULfAiEA9UP68NSCpAH1VRmosOpBEiDW4c72O4aW9EaP2w99CIIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUfziM0XAwGocuBCrcAzyoxQatQol1OyFRFvf6fsowF%2Fn6niJ2ckJEW%2B%2FqKgGkGsW6fz2y49vRvkR1ZirZP63KzDr%2B3DKh6UK5M1yNy1kLi%2FcD3vC2%2BGxgX1GRR0ObCSTw6YPwFKWo3KQs%2B16X91aqy3fEZnwNdY1i0kbr5LyWrXGmTA8GMZyKThMYUhBYZofzD7kuB0DZKfw1zOJVJuvq0gcKLN%2BGzCIoIJaGLdH2NmcV0ICmmU2s9IoFp11WVgRCgi1vda%2FdjBaSScCNa2mbrJCwfaANeJw2dRm1l54fupolX2wh1CQjmCxn6Y9TtheSh6Ar8nFkUg9FMegR6bCJRaitl7gAjAOW88N0ozVjUQHrqd318OnE8%2F44BgFV2tIX3U9L8EfIgRs3W9BNYpupf1%2F3r3SgQnh7UlLOmDtxBQcIySjjVUhIAPSZhOWcSHj6HVG2ufixBGDMWZ82CXj2NehV1I8d2TShGK1Y1usU%2FUu1mGFWiCWozSwMBPZ5KeuXvhJPpDxYFh646g6B9mjUdjGChRrQkal6F1rk0ggYRWPb5yxHzgo9NN%2F8mGTp1jHZts%2FXlEn6v2JElp6a6pXkkw%2BQPmDZ6UHLpXB57jzMnSPB6sm7W%2BhR0P6moLKZUsrpiRnLlUdTFXunMO%2BBvb8GOqUBikRJv2flAWlZXTIlfJ%2Fgd7uIoWExB%2FREXvdvCEHhJw1l%2F8oVmDuHHI9JdemRJ7WfNYvN24ouJJtgTNI8yoL9DWaQxmsPUsp01G4TKhx%2B8IWg8vLLpA7y5ykv6DdcsIWBTsJbP5794P7M8W27qGlLYvLMQTiPUqSmaWdvwh35yhammiRPxD8%2BOojEw4axBtb4UhL7UZkZvcjLilAbz%2ByXrs%2FN1Mii&X-Amz-Signature=f2bed1561c8ef4a5554c7a8088ebe74169653d127cb3aec0e21df71c65dc0cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULHLUXV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGulYC%2FFSDms8j5WhfCdxPMOdfFSBH1zxYUsJJWXULfAiEA9UP68NSCpAH1VRmosOpBEiDW4c72O4aW9EaP2w99CIIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUfziM0XAwGocuBCrcAzyoxQatQol1OyFRFvf6fsowF%2Fn6niJ2ckJEW%2B%2FqKgGkGsW6fz2y49vRvkR1ZirZP63KzDr%2B3DKh6UK5M1yNy1kLi%2FcD3vC2%2BGxgX1GRR0ObCSTw6YPwFKWo3KQs%2B16X91aqy3fEZnwNdY1i0kbr5LyWrXGmTA8GMZyKThMYUhBYZofzD7kuB0DZKfw1zOJVJuvq0gcKLN%2BGzCIoIJaGLdH2NmcV0ICmmU2s9IoFp11WVgRCgi1vda%2FdjBaSScCNa2mbrJCwfaANeJw2dRm1l54fupolX2wh1CQjmCxn6Y9TtheSh6Ar8nFkUg9FMegR6bCJRaitl7gAjAOW88N0ozVjUQHrqd318OnE8%2F44BgFV2tIX3U9L8EfIgRs3W9BNYpupf1%2F3r3SgQnh7UlLOmDtxBQcIySjjVUhIAPSZhOWcSHj6HVG2ufixBGDMWZ82CXj2NehV1I8d2TShGK1Y1usU%2FUu1mGFWiCWozSwMBPZ5KeuXvhJPpDxYFh646g6B9mjUdjGChRrQkal6F1rk0ggYRWPb5yxHzgo9NN%2F8mGTp1jHZts%2FXlEn6v2JElp6a6pXkkw%2BQPmDZ6UHLpXB57jzMnSPB6sm7W%2BhR0P6moLKZUsrpiRnLlUdTFXunMO%2BBvb8GOqUBikRJv2flAWlZXTIlfJ%2Fgd7uIoWExB%2FREXvdvCEHhJw1l%2F8oVmDuHHI9JdemRJ7WfNYvN24ouJJtgTNI8yoL9DWaQxmsPUsp01G4TKhx%2B8IWg8vLLpA7y5ykv6DdcsIWBTsJbP5794P7M8W27qGlLYvLMQTiPUqSmaWdvwh35yhammiRPxD8%2BOojEw4axBtb4UhL7UZkZvcjLilAbz%2ByXrs%2FN1Mii&X-Amz-Signature=2e42b10651d8437dc7157a2522010aa38e7df3d4398150ec3822acccd795e430&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULHLUXV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGulYC%2FFSDms8j5WhfCdxPMOdfFSBH1zxYUsJJWXULfAiEA9UP68NSCpAH1VRmosOpBEiDW4c72O4aW9EaP2w99CIIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUfziM0XAwGocuBCrcAzyoxQatQol1OyFRFvf6fsowF%2Fn6niJ2ckJEW%2B%2FqKgGkGsW6fz2y49vRvkR1ZirZP63KzDr%2B3DKh6UK5M1yNy1kLi%2FcD3vC2%2BGxgX1GRR0ObCSTw6YPwFKWo3KQs%2B16X91aqy3fEZnwNdY1i0kbr5LyWrXGmTA8GMZyKThMYUhBYZofzD7kuB0DZKfw1zOJVJuvq0gcKLN%2BGzCIoIJaGLdH2NmcV0ICmmU2s9IoFp11WVgRCgi1vda%2FdjBaSScCNa2mbrJCwfaANeJw2dRm1l54fupolX2wh1CQjmCxn6Y9TtheSh6Ar8nFkUg9FMegR6bCJRaitl7gAjAOW88N0ozVjUQHrqd318OnE8%2F44BgFV2tIX3U9L8EfIgRs3W9BNYpupf1%2F3r3SgQnh7UlLOmDtxBQcIySjjVUhIAPSZhOWcSHj6HVG2ufixBGDMWZ82CXj2NehV1I8d2TShGK1Y1usU%2FUu1mGFWiCWozSwMBPZ5KeuXvhJPpDxYFh646g6B9mjUdjGChRrQkal6F1rk0ggYRWPb5yxHzgo9NN%2F8mGTp1jHZts%2FXlEn6v2JElp6a6pXkkw%2BQPmDZ6UHLpXB57jzMnSPB6sm7W%2BhR0P6moLKZUsrpiRnLlUdTFXunMO%2BBvb8GOqUBikRJv2flAWlZXTIlfJ%2Fgd7uIoWExB%2FREXvdvCEHhJw1l%2F8oVmDuHHI9JdemRJ7WfNYvN24ouJJtgTNI8yoL9DWaQxmsPUsp01G4TKhx%2B8IWg8vLLpA7y5ykv6DdcsIWBTsJbP5794P7M8W27qGlLYvLMQTiPUqSmaWdvwh35yhammiRPxD8%2BOojEw4axBtb4UhL7UZkZvcjLilAbz%2ByXrs%2FN1Mii&X-Amz-Signature=04dbfc5faf775d7f7946bddf10d71424ac4fda34b250d6a13aa99e4fea4f4724&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULHLUXV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGulYC%2FFSDms8j5WhfCdxPMOdfFSBH1zxYUsJJWXULfAiEA9UP68NSCpAH1VRmosOpBEiDW4c72O4aW9EaP2w99CIIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUfziM0XAwGocuBCrcAzyoxQatQol1OyFRFvf6fsowF%2Fn6niJ2ckJEW%2B%2FqKgGkGsW6fz2y49vRvkR1ZirZP63KzDr%2B3DKh6UK5M1yNy1kLi%2FcD3vC2%2BGxgX1GRR0ObCSTw6YPwFKWo3KQs%2B16X91aqy3fEZnwNdY1i0kbr5LyWrXGmTA8GMZyKThMYUhBYZofzD7kuB0DZKfw1zOJVJuvq0gcKLN%2BGzCIoIJaGLdH2NmcV0ICmmU2s9IoFp11WVgRCgi1vda%2FdjBaSScCNa2mbrJCwfaANeJw2dRm1l54fupolX2wh1CQjmCxn6Y9TtheSh6Ar8nFkUg9FMegR6bCJRaitl7gAjAOW88N0ozVjUQHrqd318OnE8%2F44BgFV2tIX3U9L8EfIgRs3W9BNYpupf1%2F3r3SgQnh7UlLOmDtxBQcIySjjVUhIAPSZhOWcSHj6HVG2ufixBGDMWZ82CXj2NehV1I8d2TShGK1Y1usU%2FUu1mGFWiCWozSwMBPZ5KeuXvhJPpDxYFh646g6B9mjUdjGChRrQkal6F1rk0ggYRWPb5yxHzgo9NN%2F8mGTp1jHZts%2FXlEn6v2JElp6a6pXkkw%2BQPmDZ6UHLpXB57jzMnSPB6sm7W%2BhR0P6moLKZUsrpiRnLlUdTFXunMO%2BBvb8GOqUBikRJv2flAWlZXTIlfJ%2Fgd7uIoWExB%2FREXvdvCEHhJw1l%2F8oVmDuHHI9JdemRJ7WfNYvN24ouJJtgTNI8yoL9DWaQxmsPUsp01G4TKhx%2B8IWg8vLLpA7y5ykv6DdcsIWBTsJbP5794P7M8W27qGlLYvLMQTiPUqSmaWdvwh35yhammiRPxD8%2BOojEw4axBtb4UhL7UZkZvcjLilAbz%2ByXrs%2FN1Mii&X-Amz-Signature=482f4098da08eef5ced5e5f6625dcadbd9fba4aaa59eefa660d27ea9df29d6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULHLUXV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGulYC%2FFSDms8j5WhfCdxPMOdfFSBH1zxYUsJJWXULfAiEA9UP68NSCpAH1VRmosOpBEiDW4c72O4aW9EaP2w99CIIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUfziM0XAwGocuBCrcAzyoxQatQol1OyFRFvf6fsowF%2Fn6niJ2ckJEW%2B%2FqKgGkGsW6fz2y49vRvkR1ZirZP63KzDr%2B3DKh6UK5M1yNy1kLi%2FcD3vC2%2BGxgX1GRR0ObCSTw6YPwFKWo3KQs%2B16X91aqy3fEZnwNdY1i0kbr5LyWrXGmTA8GMZyKThMYUhBYZofzD7kuB0DZKfw1zOJVJuvq0gcKLN%2BGzCIoIJaGLdH2NmcV0ICmmU2s9IoFp11WVgRCgi1vda%2FdjBaSScCNa2mbrJCwfaANeJw2dRm1l54fupolX2wh1CQjmCxn6Y9TtheSh6Ar8nFkUg9FMegR6bCJRaitl7gAjAOW88N0ozVjUQHrqd318OnE8%2F44BgFV2tIX3U9L8EfIgRs3W9BNYpupf1%2F3r3SgQnh7UlLOmDtxBQcIySjjVUhIAPSZhOWcSHj6HVG2ufixBGDMWZ82CXj2NehV1I8d2TShGK1Y1usU%2FUu1mGFWiCWozSwMBPZ5KeuXvhJPpDxYFh646g6B9mjUdjGChRrQkal6F1rk0ggYRWPb5yxHzgo9NN%2F8mGTp1jHZts%2FXlEn6v2JElp6a6pXkkw%2BQPmDZ6UHLpXB57jzMnSPB6sm7W%2BhR0P6moLKZUsrpiRnLlUdTFXunMO%2BBvb8GOqUBikRJv2flAWlZXTIlfJ%2Fgd7uIoWExB%2FREXvdvCEHhJw1l%2F8oVmDuHHI9JdemRJ7WfNYvN24ouJJtgTNI8yoL9DWaQxmsPUsp01G4TKhx%2B8IWg8vLLpA7y5ykv6DdcsIWBTsJbP5794P7M8W27qGlLYvLMQTiPUqSmaWdvwh35yhammiRPxD8%2BOojEw4axBtb4UhL7UZkZvcjLilAbz%2ByXrs%2FN1Mii&X-Amz-Signature=c0da00925c9e4e59e5d3f207bc0f1491a5dbf676aa5b48af52531140bb042edb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULHLUXV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGulYC%2FFSDms8j5WhfCdxPMOdfFSBH1zxYUsJJWXULfAiEA9UP68NSCpAH1VRmosOpBEiDW4c72O4aW9EaP2w99CIIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBUfziM0XAwGocuBCrcAzyoxQatQol1OyFRFvf6fsowF%2Fn6niJ2ckJEW%2B%2FqKgGkGsW6fz2y49vRvkR1ZirZP63KzDr%2B3DKh6UK5M1yNy1kLi%2FcD3vC2%2BGxgX1GRR0ObCSTw6YPwFKWo3KQs%2B16X91aqy3fEZnwNdY1i0kbr5LyWrXGmTA8GMZyKThMYUhBYZofzD7kuB0DZKfw1zOJVJuvq0gcKLN%2BGzCIoIJaGLdH2NmcV0ICmmU2s9IoFp11WVgRCgi1vda%2FdjBaSScCNa2mbrJCwfaANeJw2dRm1l54fupolX2wh1CQjmCxn6Y9TtheSh6Ar8nFkUg9FMegR6bCJRaitl7gAjAOW88N0ozVjUQHrqd318OnE8%2F44BgFV2tIX3U9L8EfIgRs3W9BNYpupf1%2F3r3SgQnh7UlLOmDtxBQcIySjjVUhIAPSZhOWcSHj6HVG2ufixBGDMWZ82CXj2NehV1I8d2TShGK1Y1usU%2FUu1mGFWiCWozSwMBPZ5KeuXvhJPpDxYFh646g6B9mjUdjGChRrQkal6F1rk0ggYRWPb5yxHzgo9NN%2F8mGTp1jHZts%2FXlEn6v2JElp6a6pXkkw%2BQPmDZ6UHLpXB57jzMnSPB6sm7W%2BhR0P6moLKZUsrpiRnLlUdTFXunMO%2BBvb8GOqUBikRJv2flAWlZXTIlfJ%2Fgd7uIoWExB%2FREXvdvCEHhJw1l%2F8oVmDuHHI9JdemRJ7WfNYvN24ouJJtgTNI8yoL9DWaQxmsPUsp01G4TKhx%2B8IWg8vLLpA7y5ykv6DdcsIWBTsJbP5794P7M8W27qGlLYvLMQTiPUqSmaWdvwh35yhammiRPxD8%2BOojEw4axBtb4UhL7UZkZvcjLilAbz%2ByXrs%2FN1Mii&X-Amz-Signature=4c80e3b926841af62bb063c68507617ce80b7bed9d67aa7dda52aedc561bfe9c&X-Amz-SignedHeaders=host&x-id=GetObject)
