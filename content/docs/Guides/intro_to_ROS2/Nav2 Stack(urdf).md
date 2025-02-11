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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZP2OP7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSP2d3nHvrahsWgqVKfAO3kiw4PIN3r1gz54ghdxazZgIhAKVF5tRk0eawDobMDvkhKkBqj52qWF8lppOCAx3tdOHKKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZEGtz01wGm%2B53X%2FMq3ANUwCguovNuDQ1aMxDBLljBnfWsovNCGXHO8PkVikXeBGpctLzx%2FY%2B6Ob2KDgyPvNZ7Q5gZ5aDwFDxmADy0sLt%2FgVo%2F%2BjNsCD4fICLw5kkGFrmfDW28NK3ZBWrq5lQLTqalMiOYx24NwbtHuJBqCxoiN3kxCl%2BKalSEDVmEbGcoWB1MfTeTTfDiWDbeeF%2F4Hg6a91tYkGZYjmFGPlBwGX4hX2QooqIRntFlMMFVGjSCHAY%2BeOHtwBnNyLf2VxhaoyHn%2FpTdpR6S1wZZ5PuoeDxdnxyPM4aOoirbRh1c13DFSvHYqQmC%2Bt5Tfy09bxr1i1ZHT9%2FF7Ck2P5i0MIUC1quXkCRt48HFLJ1%2FZ5yrXb7Pxy%2FAFVxc0oRmatBlqtu1SDZh%2BIRUYRx7l61RxLgczIrRVd7DOGBtIN7Z5un0zmWE0TICfTvwkEzi2fGj9D7%2BW5eAphwAfvLCmtmqcv3jtm876YHN%2Fx%2F64j9JrBAnndtGaJkS7pSCxnWcy8pMktvt2xuBkM9yiiqxt1I2XLRuHRSnyzZ8CpMXkKYtxRttLab17ZsOURIob1JEwCp2FyXHw%2BXGIxTaKCwC2dLgsSVjwNCxEITG1zsR%2FgHZlTGUZLP3baf23mKa0W44Y%2BaMMzDsyK69BjqkAY2U15C02yvJYv%2FrzKz0j%2F%2F4vZEtP3GeF0CYldNbaREQfrBFgzPpvCWYrRg69eirkr0hAJ%2F3gZjePlAhER2B7kQHCOUI0F%2BBOz5rjJSxyEo54Hs%2BZuBD68Zwpt0%2BzR9atvjPQE2RP93VCsGL4uUEdLOvtN6DmNAAlPhWvR0maTfAFaydYdvTajFLtkgQB2Wld0uCFJrUaifnmo%2FFe2TmWfHTj80s&X-Amz-Signature=3f64192767ea13bf3837b338d4e5ec2d5ce588b19faeb6382f0c518c618d7cef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZP2OP7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSP2d3nHvrahsWgqVKfAO3kiw4PIN3r1gz54ghdxazZgIhAKVF5tRk0eawDobMDvkhKkBqj52qWF8lppOCAx3tdOHKKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZEGtz01wGm%2B53X%2FMq3ANUwCguovNuDQ1aMxDBLljBnfWsovNCGXHO8PkVikXeBGpctLzx%2FY%2B6Ob2KDgyPvNZ7Q5gZ5aDwFDxmADy0sLt%2FgVo%2F%2BjNsCD4fICLw5kkGFrmfDW28NK3ZBWrq5lQLTqalMiOYx24NwbtHuJBqCxoiN3kxCl%2BKalSEDVmEbGcoWB1MfTeTTfDiWDbeeF%2F4Hg6a91tYkGZYjmFGPlBwGX4hX2QooqIRntFlMMFVGjSCHAY%2BeOHtwBnNyLf2VxhaoyHn%2FpTdpR6S1wZZ5PuoeDxdnxyPM4aOoirbRh1c13DFSvHYqQmC%2Bt5Tfy09bxr1i1ZHT9%2FF7Ck2P5i0MIUC1quXkCRt48HFLJ1%2FZ5yrXb7Pxy%2FAFVxc0oRmatBlqtu1SDZh%2BIRUYRx7l61RxLgczIrRVd7DOGBtIN7Z5un0zmWE0TICfTvwkEzi2fGj9D7%2BW5eAphwAfvLCmtmqcv3jtm876YHN%2Fx%2F64j9JrBAnndtGaJkS7pSCxnWcy8pMktvt2xuBkM9yiiqxt1I2XLRuHRSnyzZ8CpMXkKYtxRttLab17ZsOURIob1JEwCp2FyXHw%2BXGIxTaKCwC2dLgsSVjwNCxEITG1zsR%2FgHZlTGUZLP3baf23mKa0W44Y%2BaMMzDsyK69BjqkAY2U15C02yvJYv%2FrzKz0j%2F%2F4vZEtP3GeF0CYldNbaREQfrBFgzPpvCWYrRg69eirkr0hAJ%2F3gZjePlAhER2B7kQHCOUI0F%2BBOz5rjJSxyEo54Hs%2BZuBD68Zwpt0%2BzR9atvjPQE2RP93VCsGL4uUEdLOvtN6DmNAAlPhWvR0maTfAFaydYdvTajFLtkgQB2Wld0uCFJrUaifnmo%2FFe2TmWfHTj80s&X-Amz-Signature=3a3704c07c76888c6eac438c244efe2c2319446d6712ec5d00c147c274026b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZP2OP7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSP2d3nHvrahsWgqVKfAO3kiw4PIN3r1gz54ghdxazZgIhAKVF5tRk0eawDobMDvkhKkBqj52qWF8lppOCAx3tdOHKKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZEGtz01wGm%2B53X%2FMq3ANUwCguovNuDQ1aMxDBLljBnfWsovNCGXHO8PkVikXeBGpctLzx%2FY%2B6Ob2KDgyPvNZ7Q5gZ5aDwFDxmADy0sLt%2FgVo%2F%2BjNsCD4fICLw5kkGFrmfDW28NK3ZBWrq5lQLTqalMiOYx24NwbtHuJBqCxoiN3kxCl%2BKalSEDVmEbGcoWB1MfTeTTfDiWDbeeF%2F4Hg6a91tYkGZYjmFGPlBwGX4hX2QooqIRntFlMMFVGjSCHAY%2BeOHtwBnNyLf2VxhaoyHn%2FpTdpR6S1wZZ5PuoeDxdnxyPM4aOoirbRh1c13DFSvHYqQmC%2Bt5Tfy09bxr1i1ZHT9%2FF7Ck2P5i0MIUC1quXkCRt48HFLJ1%2FZ5yrXb7Pxy%2FAFVxc0oRmatBlqtu1SDZh%2BIRUYRx7l61RxLgczIrRVd7DOGBtIN7Z5un0zmWE0TICfTvwkEzi2fGj9D7%2BW5eAphwAfvLCmtmqcv3jtm876YHN%2Fx%2F64j9JrBAnndtGaJkS7pSCxnWcy8pMktvt2xuBkM9yiiqxt1I2XLRuHRSnyzZ8CpMXkKYtxRttLab17ZsOURIob1JEwCp2FyXHw%2BXGIxTaKCwC2dLgsSVjwNCxEITG1zsR%2FgHZlTGUZLP3baf23mKa0W44Y%2BaMMzDsyK69BjqkAY2U15C02yvJYv%2FrzKz0j%2F%2F4vZEtP3GeF0CYldNbaREQfrBFgzPpvCWYrRg69eirkr0hAJ%2F3gZjePlAhER2B7kQHCOUI0F%2BBOz5rjJSxyEo54Hs%2BZuBD68Zwpt0%2BzR9atvjPQE2RP93VCsGL4uUEdLOvtN6DmNAAlPhWvR0maTfAFaydYdvTajFLtkgQB2Wld0uCFJrUaifnmo%2FFe2TmWfHTj80s&X-Amz-Signature=4741c24b43d0ae9e5eac902fcf2c635b48ead59198e9645c8992e449eb42931d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZP2OP7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSP2d3nHvrahsWgqVKfAO3kiw4PIN3r1gz54ghdxazZgIhAKVF5tRk0eawDobMDvkhKkBqj52qWF8lppOCAx3tdOHKKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZEGtz01wGm%2B53X%2FMq3ANUwCguovNuDQ1aMxDBLljBnfWsovNCGXHO8PkVikXeBGpctLzx%2FY%2B6Ob2KDgyPvNZ7Q5gZ5aDwFDxmADy0sLt%2FgVo%2F%2BjNsCD4fICLw5kkGFrmfDW28NK3ZBWrq5lQLTqalMiOYx24NwbtHuJBqCxoiN3kxCl%2BKalSEDVmEbGcoWB1MfTeTTfDiWDbeeF%2F4Hg6a91tYkGZYjmFGPlBwGX4hX2QooqIRntFlMMFVGjSCHAY%2BeOHtwBnNyLf2VxhaoyHn%2FpTdpR6S1wZZ5PuoeDxdnxyPM4aOoirbRh1c13DFSvHYqQmC%2Bt5Tfy09bxr1i1ZHT9%2FF7Ck2P5i0MIUC1quXkCRt48HFLJ1%2FZ5yrXb7Pxy%2FAFVxc0oRmatBlqtu1SDZh%2BIRUYRx7l61RxLgczIrRVd7DOGBtIN7Z5un0zmWE0TICfTvwkEzi2fGj9D7%2BW5eAphwAfvLCmtmqcv3jtm876YHN%2Fx%2F64j9JrBAnndtGaJkS7pSCxnWcy8pMktvt2xuBkM9yiiqxt1I2XLRuHRSnyzZ8CpMXkKYtxRttLab17ZsOURIob1JEwCp2FyXHw%2BXGIxTaKCwC2dLgsSVjwNCxEITG1zsR%2FgHZlTGUZLP3baf23mKa0W44Y%2BaMMzDsyK69BjqkAY2U15C02yvJYv%2FrzKz0j%2F%2F4vZEtP3GeF0CYldNbaREQfrBFgzPpvCWYrRg69eirkr0hAJ%2F3gZjePlAhER2B7kQHCOUI0F%2BBOz5rjJSxyEo54Hs%2BZuBD68Zwpt0%2BzR9atvjPQE2RP93VCsGL4uUEdLOvtN6DmNAAlPhWvR0maTfAFaydYdvTajFLtkgQB2Wld0uCFJrUaifnmo%2FFe2TmWfHTj80s&X-Amz-Signature=ed9637b4a26bf0030576f4279de282733f10d0357d1bf3c2e6394bd69309088e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZP2OP7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSP2d3nHvrahsWgqVKfAO3kiw4PIN3r1gz54ghdxazZgIhAKVF5tRk0eawDobMDvkhKkBqj52qWF8lppOCAx3tdOHKKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZEGtz01wGm%2B53X%2FMq3ANUwCguovNuDQ1aMxDBLljBnfWsovNCGXHO8PkVikXeBGpctLzx%2FY%2B6Ob2KDgyPvNZ7Q5gZ5aDwFDxmADy0sLt%2FgVo%2F%2BjNsCD4fICLw5kkGFrmfDW28NK3ZBWrq5lQLTqalMiOYx24NwbtHuJBqCxoiN3kxCl%2BKalSEDVmEbGcoWB1MfTeTTfDiWDbeeF%2F4Hg6a91tYkGZYjmFGPlBwGX4hX2QooqIRntFlMMFVGjSCHAY%2BeOHtwBnNyLf2VxhaoyHn%2FpTdpR6S1wZZ5PuoeDxdnxyPM4aOoirbRh1c13DFSvHYqQmC%2Bt5Tfy09bxr1i1ZHT9%2FF7Ck2P5i0MIUC1quXkCRt48HFLJ1%2FZ5yrXb7Pxy%2FAFVxc0oRmatBlqtu1SDZh%2BIRUYRx7l61RxLgczIrRVd7DOGBtIN7Z5un0zmWE0TICfTvwkEzi2fGj9D7%2BW5eAphwAfvLCmtmqcv3jtm876YHN%2Fx%2F64j9JrBAnndtGaJkS7pSCxnWcy8pMktvt2xuBkM9yiiqxt1I2XLRuHRSnyzZ8CpMXkKYtxRttLab17ZsOURIob1JEwCp2FyXHw%2BXGIxTaKCwC2dLgsSVjwNCxEITG1zsR%2FgHZlTGUZLP3baf23mKa0W44Y%2BaMMzDsyK69BjqkAY2U15C02yvJYv%2FrzKz0j%2F%2F4vZEtP3GeF0CYldNbaREQfrBFgzPpvCWYrRg69eirkr0hAJ%2F3gZjePlAhER2B7kQHCOUI0F%2BBOz5rjJSxyEo54Hs%2BZuBD68Zwpt0%2BzR9atvjPQE2RP93VCsGL4uUEdLOvtN6DmNAAlPhWvR0maTfAFaydYdvTajFLtkgQB2Wld0uCFJrUaifnmo%2FFe2TmWfHTj80s&X-Amz-Signature=c13e2c3664b68a885ebc6ec53c0b77cb632136df4199abf885391851bb5b9d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWZP2OP7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSP2d3nHvrahsWgqVKfAO3kiw4PIN3r1gz54ghdxazZgIhAKVF5tRk0eawDobMDvkhKkBqj52qWF8lppOCAx3tdOHKKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZEGtz01wGm%2B53X%2FMq3ANUwCguovNuDQ1aMxDBLljBnfWsovNCGXHO8PkVikXeBGpctLzx%2FY%2B6Ob2KDgyPvNZ7Q5gZ5aDwFDxmADy0sLt%2FgVo%2F%2BjNsCD4fICLw5kkGFrmfDW28NK3ZBWrq5lQLTqalMiOYx24NwbtHuJBqCxoiN3kxCl%2BKalSEDVmEbGcoWB1MfTeTTfDiWDbeeF%2F4Hg6a91tYkGZYjmFGPlBwGX4hX2QooqIRntFlMMFVGjSCHAY%2BeOHtwBnNyLf2VxhaoyHn%2FpTdpR6S1wZZ5PuoeDxdnxyPM4aOoirbRh1c13DFSvHYqQmC%2Bt5Tfy09bxr1i1ZHT9%2FF7Ck2P5i0MIUC1quXkCRt48HFLJ1%2FZ5yrXb7Pxy%2FAFVxc0oRmatBlqtu1SDZh%2BIRUYRx7l61RxLgczIrRVd7DOGBtIN7Z5un0zmWE0TICfTvwkEzi2fGj9D7%2BW5eAphwAfvLCmtmqcv3jtm876YHN%2Fx%2F64j9JrBAnndtGaJkS7pSCxnWcy8pMktvt2xuBkM9yiiqxt1I2XLRuHRSnyzZ8CpMXkKYtxRttLab17ZsOURIob1JEwCp2FyXHw%2BXGIxTaKCwC2dLgsSVjwNCxEITG1zsR%2FgHZlTGUZLP3baf23mKa0W44Y%2BaMMzDsyK69BjqkAY2U15C02yvJYv%2FrzKz0j%2F%2F4vZEtP3GeF0CYldNbaREQfrBFgzPpvCWYrRg69eirkr0hAJ%2F3gZjePlAhER2B7kQHCOUI0F%2BBOz5rjJSxyEo54Hs%2BZuBD68Zwpt0%2BzR9atvjPQE2RP93VCsGL4uUEdLOvtN6DmNAAlPhWvR0maTfAFaydYdvTajFLtkgQB2Wld0uCFJrUaifnmo%2FFe2TmWfHTj80s&X-Amz-Signature=cf84794673d4df24bb6e765607e52717ae01cb924f351bbda51678b2d3d54f86&X-Amz-SignedHeaders=host&x-id=GetObject)
