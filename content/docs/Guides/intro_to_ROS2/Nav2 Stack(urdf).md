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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6PDFJL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHLX%2FPcjMo2MqIi3PuhxGH06zRFKrPwtY%2FIPdiq%2FJczAiEAvcaZ4Jr%2BJwiLt0OAv3KyFlbcZu7z0d5ykoE9K6Odg7oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPW3mKjZP%2B3%2Ba0AlNSrcAyAdKocJNnHzUXaejfvlL%2BeZWBeHS8UsjhpNzwJdqbkUFokUQUPqKOuIBd5uHcex5MGw0w6l%2BI5rchroLXpYykkP1AtcPdbyOHVlKrGYzrVlOURY27fRlna75sZILY1fXRjkRRkoyWODgZKL4UX2lO%2BV8AiSkfs7nsb2rE8LiJyA6%2BRYfrCGt3QqufmuiAmt9i99gMkf5i%2FFNS48wutSRpA6uo8FtgAjs%2FN2LTIH2DllkPvCg290I96m8FZwEhUbmgzAjA3vYLndWPBMksHgNB2BqXNSWlWn9TunvRjxulYjVp6VFrYa5qDR9ScwnpLHFNc72Uz5G%2FvsFgn%2BA%2FbFeYf%2FAg%2FJu0nRNotUiiMIT%2FkPRk6a85uUeipPXkDrMPlSldJY6X2KENvYnLWixvHVv%2FWzlDxaYw8sN0YAfozub2hs4VsxmYdZJE5CGFT8Mt6rpG1itrZN0S1PFp%2FtlcbHn9wbCBh4%2FGatOkpfB7YG%2BnV%2BHrMo1z1La7LtGMITmSdcry%2FtWo9JfV5mfmdc3HeDte9hOBAMPVabIAmJz3mg3qhIKzmgP0FMuXGaQBMYDhcb2yCOC5S3J09haxxtjamFXXFhOBp6KVjMLuc1pvGdVo2h8u7ajTgGMLTXl6HOMO%2BV6sAGOqUBhFS9stLIcoCNjx4QNogLua41SrTT1SkhkFMzZGKBZltLVc%2FAVnTA7v9H%2BPLj1BvCgUHA18Av2dh7yx6BAYNA9SKuLOmjCWbIURWCXEpFhXFS2X0e2M6OHdm%2FOazCcCCDoUQW8QcaYAqKrrQ1QGX6ui7cJ1P9cOQleXFEgNWUGC5JEF6Xbtrxy45sJ7v758Z5WQzBzfBxvYBkAsOYBeVG86uYviv%2B&X-Amz-Signature=4e743c0f19203100c412df4eac89b7938a3475810058867cb547cd508d17149d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6PDFJL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHLX%2FPcjMo2MqIi3PuhxGH06zRFKrPwtY%2FIPdiq%2FJczAiEAvcaZ4Jr%2BJwiLt0OAv3KyFlbcZu7z0d5ykoE9K6Odg7oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPW3mKjZP%2B3%2Ba0AlNSrcAyAdKocJNnHzUXaejfvlL%2BeZWBeHS8UsjhpNzwJdqbkUFokUQUPqKOuIBd5uHcex5MGw0w6l%2BI5rchroLXpYykkP1AtcPdbyOHVlKrGYzrVlOURY27fRlna75sZILY1fXRjkRRkoyWODgZKL4UX2lO%2BV8AiSkfs7nsb2rE8LiJyA6%2BRYfrCGt3QqufmuiAmt9i99gMkf5i%2FFNS48wutSRpA6uo8FtgAjs%2FN2LTIH2DllkPvCg290I96m8FZwEhUbmgzAjA3vYLndWPBMksHgNB2BqXNSWlWn9TunvRjxulYjVp6VFrYa5qDR9ScwnpLHFNc72Uz5G%2FvsFgn%2BA%2FbFeYf%2FAg%2FJu0nRNotUiiMIT%2FkPRk6a85uUeipPXkDrMPlSldJY6X2KENvYnLWixvHVv%2FWzlDxaYw8sN0YAfozub2hs4VsxmYdZJE5CGFT8Mt6rpG1itrZN0S1PFp%2FtlcbHn9wbCBh4%2FGatOkpfB7YG%2BnV%2BHrMo1z1La7LtGMITmSdcry%2FtWo9JfV5mfmdc3HeDte9hOBAMPVabIAmJz3mg3qhIKzmgP0FMuXGaQBMYDhcb2yCOC5S3J09haxxtjamFXXFhOBp6KVjMLuc1pvGdVo2h8u7ajTgGMLTXl6HOMO%2BV6sAGOqUBhFS9stLIcoCNjx4QNogLua41SrTT1SkhkFMzZGKBZltLVc%2FAVnTA7v9H%2BPLj1BvCgUHA18Av2dh7yx6BAYNA9SKuLOmjCWbIURWCXEpFhXFS2X0e2M6OHdm%2FOazCcCCDoUQW8QcaYAqKrrQ1QGX6ui7cJ1P9cOQleXFEgNWUGC5JEF6Xbtrxy45sJ7v758Z5WQzBzfBxvYBkAsOYBeVG86uYviv%2B&X-Amz-Signature=260928516538cf774c72a5339c097aa663aea431b68a9ea3cf66756777c754da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6PDFJL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHLX%2FPcjMo2MqIi3PuhxGH06zRFKrPwtY%2FIPdiq%2FJczAiEAvcaZ4Jr%2BJwiLt0OAv3KyFlbcZu7z0d5ykoE9K6Odg7oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPW3mKjZP%2B3%2Ba0AlNSrcAyAdKocJNnHzUXaejfvlL%2BeZWBeHS8UsjhpNzwJdqbkUFokUQUPqKOuIBd5uHcex5MGw0w6l%2BI5rchroLXpYykkP1AtcPdbyOHVlKrGYzrVlOURY27fRlna75sZILY1fXRjkRRkoyWODgZKL4UX2lO%2BV8AiSkfs7nsb2rE8LiJyA6%2BRYfrCGt3QqufmuiAmt9i99gMkf5i%2FFNS48wutSRpA6uo8FtgAjs%2FN2LTIH2DllkPvCg290I96m8FZwEhUbmgzAjA3vYLndWPBMksHgNB2BqXNSWlWn9TunvRjxulYjVp6VFrYa5qDR9ScwnpLHFNc72Uz5G%2FvsFgn%2BA%2FbFeYf%2FAg%2FJu0nRNotUiiMIT%2FkPRk6a85uUeipPXkDrMPlSldJY6X2KENvYnLWixvHVv%2FWzlDxaYw8sN0YAfozub2hs4VsxmYdZJE5CGFT8Mt6rpG1itrZN0S1PFp%2FtlcbHn9wbCBh4%2FGatOkpfB7YG%2BnV%2BHrMo1z1La7LtGMITmSdcry%2FtWo9JfV5mfmdc3HeDte9hOBAMPVabIAmJz3mg3qhIKzmgP0FMuXGaQBMYDhcb2yCOC5S3J09haxxtjamFXXFhOBp6KVjMLuc1pvGdVo2h8u7ajTgGMLTXl6HOMO%2BV6sAGOqUBhFS9stLIcoCNjx4QNogLua41SrTT1SkhkFMzZGKBZltLVc%2FAVnTA7v9H%2BPLj1BvCgUHA18Av2dh7yx6BAYNA9SKuLOmjCWbIURWCXEpFhXFS2X0e2M6OHdm%2FOazCcCCDoUQW8QcaYAqKrrQ1QGX6ui7cJ1P9cOQleXFEgNWUGC5JEF6Xbtrxy45sJ7v758Z5WQzBzfBxvYBkAsOYBeVG86uYviv%2B&X-Amz-Signature=a67b1801376978e4ac97b7921f0d57f415cb25fb9d393b6e3f4455b559b644a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6PDFJL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHLX%2FPcjMo2MqIi3PuhxGH06zRFKrPwtY%2FIPdiq%2FJczAiEAvcaZ4Jr%2BJwiLt0OAv3KyFlbcZu7z0d5ykoE9K6Odg7oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPW3mKjZP%2B3%2Ba0AlNSrcAyAdKocJNnHzUXaejfvlL%2BeZWBeHS8UsjhpNzwJdqbkUFokUQUPqKOuIBd5uHcex5MGw0w6l%2BI5rchroLXpYykkP1AtcPdbyOHVlKrGYzrVlOURY27fRlna75sZILY1fXRjkRRkoyWODgZKL4UX2lO%2BV8AiSkfs7nsb2rE8LiJyA6%2BRYfrCGt3QqufmuiAmt9i99gMkf5i%2FFNS48wutSRpA6uo8FtgAjs%2FN2LTIH2DllkPvCg290I96m8FZwEhUbmgzAjA3vYLndWPBMksHgNB2BqXNSWlWn9TunvRjxulYjVp6VFrYa5qDR9ScwnpLHFNc72Uz5G%2FvsFgn%2BA%2FbFeYf%2FAg%2FJu0nRNotUiiMIT%2FkPRk6a85uUeipPXkDrMPlSldJY6X2KENvYnLWixvHVv%2FWzlDxaYw8sN0YAfozub2hs4VsxmYdZJE5CGFT8Mt6rpG1itrZN0S1PFp%2FtlcbHn9wbCBh4%2FGatOkpfB7YG%2BnV%2BHrMo1z1La7LtGMITmSdcry%2FtWo9JfV5mfmdc3HeDte9hOBAMPVabIAmJz3mg3qhIKzmgP0FMuXGaQBMYDhcb2yCOC5S3J09haxxtjamFXXFhOBp6KVjMLuc1pvGdVo2h8u7ajTgGMLTXl6HOMO%2BV6sAGOqUBhFS9stLIcoCNjx4QNogLua41SrTT1SkhkFMzZGKBZltLVc%2FAVnTA7v9H%2BPLj1BvCgUHA18Av2dh7yx6BAYNA9SKuLOmjCWbIURWCXEpFhXFS2X0e2M6OHdm%2FOazCcCCDoUQW8QcaYAqKrrQ1QGX6ui7cJ1P9cOQleXFEgNWUGC5JEF6Xbtrxy45sJ7v758Z5WQzBzfBxvYBkAsOYBeVG86uYviv%2B&X-Amz-Signature=e7621c777dd45b0ead28cdc03ac9ea2a21a8564e4aff1d34e48de6798234f0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6PDFJL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHLX%2FPcjMo2MqIi3PuhxGH06zRFKrPwtY%2FIPdiq%2FJczAiEAvcaZ4Jr%2BJwiLt0OAv3KyFlbcZu7z0d5ykoE9K6Odg7oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPW3mKjZP%2B3%2Ba0AlNSrcAyAdKocJNnHzUXaejfvlL%2BeZWBeHS8UsjhpNzwJdqbkUFokUQUPqKOuIBd5uHcex5MGw0w6l%2BI5rchroLXpYykkP1AtcPdbyOHVlKrGYzrVlOURY27fRlna75sZILY1fXRjkRRkoyWODgZKL4UX2lO%2BV8AiSkfs7nsb2rE8LiJyA6%2BRYfrCGt3QqufmuiAmt9i99gMkf5i%2FFNS48wutSRpA6uo8FtgAjs%2FN2LTIH2DllkPvCg290I96m8FZwEhUbmgzAjA3vYLndWPBMksHgNB2BqXNSWlWn9TunvRjxulYjVp6VFrYa5qDR9ScwnpLHFNc72Uz5G%2FvsFgn%2BA%2FbFeYf%2FAg%2FJu0nRNotUiiMIT%2FkPRk6a85uUeipPXkDrMPlSldJY6X2KENvYnLWixvHVv%2FWzlDxaYw8sN0YAfozub2hs4VsxmYdZJE5CGFT8Mt6rpG1itrZN0S1PFp%2FtlcbHn9wbCBh4%2FGatOkpfB7YG%2BnV%2BHrMo1z1La7LtGMITmSdcry%2FtWo9JfV5mfmdc3HeDte9hOBAMPVabIAmJz3mg3qhIKzmgP0FMuXGaQBMYDhcb2yCOC5S3J09haxxtjamFXXFhOBp6KVjMLuc1pvGdVo2h8u7ajTgGMLTXl6HOMO%2BV6sAGOqUBhFS9stLIcoCNjx4QNogLua41SrTT1SkhkFMzZGKBZltLVc%2FAVnTA7v9H%2BPLj1BvCgUHA18Av2dh7yx6BAYNA9SKuLOmjCWbIURWCXEpFhXFS2X0e2M6OHdm%2FOazCcCCDoUQW8QcaYAqKrrQ1QGX6ui7cJ1P9cOQleXFEgNWUGC5JEF6Xbtrxy45sJ7v758Z5WQzBzfBxvYBkAsOYBeVG86uYviv%2B&X-Amz-Signature=64e1bd36d46594846426e4d1c073536c140bd5900a13c1bd3d9b82c1b3574921&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6PDFJL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHLX%2FPcjMo2MqIi3PuhxGH06zRFKrPwtY%2FIPdiq%2FJczAiEAvcaZ4Jr%2BJwiLt0OAv3KyFlbcZu7z0d5ykoE9K6Odg7oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPW3mKjZP%2B3%2Ba0AlNSrcAyAdKocJNnHzUXaejfvlL%2BeZWBeHS8UsjhpNzwJdqbkUFokUQUPqKOuIBd5uHcex5MGw0w6l%2BI5rchroLXpYykkP1AtcPdbyOHVlKrGYzrVlOURY27fRlna75sZILY1fXRjkRRkoyWODgZKL4UX2lO%2BV8AiSkfs7nsb2rE8LiJyA6%2BRYfrCGt3QqufmuiAmt9i99gMkf5i%2FFNS48wutSRpA6uo8FtgAjs%2FN2LTIH2DllkPvCg290I96m8FZwEhUbmgzAjA3vYLndWPBMksHgNB2BqXNSWlWn9TunvRjxulYjVp6VFrYa5qDR9ScwnpLHFNc72Uz5G%2FvsFgn%2BA%2FbFeYf%2FAg%2FJu0nRNotUiiMIT%2FkPRk6a85uUeipPXkDrMPlSldJY6X2KENvYnLWixvHVv%2FWzlDxaYw8sN0YAfozub2hs4VsxmYdZJE5CGFT8Mt6rpG1itrZN0S1PFp%2FtlcbHn9wbCBh4%2FGatOkpfB7YG%2BnV%2BHrMo1z1La7LtGMITmSdcry%2FtWo9JfV5mfmdc3HeDte9hOBAMPVabIAmJz3mg3qhIKzmgP0FMuXGaQBMYDhcb2yCOC5S3J09haxxtjamFXXFhOBp6KVjMLuc1pvGdVo2h8u7ajTgGMLTXl6HOMO%2BV6sAGOqUBhFS9stLIcoCNjx4QNogLua41SrTT1SkhkFMzZGKBZltLVc%2FAVnTA7v9H%2BPLj1BvCgUHA18Av2dh7yx6BAYNA9SKuLOmjCWbIURWCXEpFhXFS2X0e2M6OHdm%2FOazCcCCDoUQW8QcaYAqKrrQ1QGX6ui7cJ1P9cOQleXFEgNWUGC5JEF6Xbtrxy45sJ7v758Z5WQzBzfBxvYBkAsOYBeVG86uYviv%2B&X-Amz-Signature=6b77c252c9f5cd2f1147cae5872f6911282c632ca3dbdcf1a08c41fdd5b8b8b6&X-Amz-SignedHeaders=host&x-id=GetObject)
