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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJPICHH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWL%2BpbvsQGVlvkK0chLT4k%2BrYl753Z2bjVkBC3Bw36%2FAiApp%2BWLHihWLaI83U9YYkmShIUvR9uz35imqqu7njbZtyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZJqdYdsY89vd5k6KtwDMpJI2zVDJLyELoInKFqLksInyhgxdcdjbF%2FVSKkIxALWzF4NjSQKI5BS4iIOs9NaB7Q2rQf3VH3koPdkaI%2BwkwKNflSgUtp8WUrE44v%2Fon1NZ4Qezp%2FYtmjhl%2BruAH7PnLvwCt0w8gawLR6Nzf2chDgf%2FxhosgjF1AtbLpwQKvTYOujWA3JKCLa8%2FlbGU2Iyir%2FxtKBD0dAuKUUVm9HEv3XjqLk4yhQp%2FRwinh6JAjbGnJVf3mpxLMU4ddSxL4qqv7ZLPKPIF6t4uNFpsfgvYrvwbIXsvCH8Mx9PmZ96JkF56Wemq%2BRDJ8BxRmpPIZXpcOnwC3hk3MlNF6dWc32Db0eog1ePsHI3MWA0wC3B9gKwGGEUYDZf9RkYn%2BeFMuvrfiYwIYbeDIEXvfZkvnmVG5Lg7rNzBW81eJn%2FmQKTrOYc%2Fn9h0JsOs73fblJtbmpkndesm3vGle9lvkmJ2OUWMj0FDqgt8kUXvcGMv4DrUrsNT1sCEtDgEoy9fLPan0xJET72RH73lXLmnOq3C0uLU%2BJAb2pTlto3RD589DcK%2Fa2bnA0Atf8cLFhsOuB%2BLdPahym694IqnTty2CAoW27Yov2yqc8tol%2BsbjzFJLFdRCQdeZp6A0CxN%2B%2FAKhsws43DvgY6pgFKcF1f2bI6Ad8uq%2F%2BGzVQvg1eJJrR3n0RwIbFS1AEHPr0zTgusfMaaL0Q6dimQ0ac2Cbv5AV51vWrB%2Bo%2FBZlsn%2Fpi%2BcZhn59PISDDTYzOL8aNRv%2Bimrmgj7a8thkaJd5zgo2GsqhFDKpYmXEG1sVW%2FkHpy0x0cmYgvUot1XPTtpq5SUmyU1vmpHN1GLT4SanPHAa7Tmm4Mr6Y4DVvIxG2DOEJiyspY&X-Amz-Signature=fdbeb9d27cd5ad9619b26f15170101bf3def777146c16f768480cbd11a5abb0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJPICHH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWL%2BpbvsQGVlvkK0chLT4k%2BrYl753Z2bjVkBC3Bw36%2FAiApp%2BWLHihWLaI83U9YYkmShIUvR9uz35imqqu7njbZtyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZJqdYdsY89vd5k6KtwDMpJI2zVDJLyELoInKFqLksInyhgxdcdjbF%2FVSKkIxALWzF4NjSQKI5BS4iIOs9NaB7Q2rQf3VH3koPdkaI%2BwkwKNflSgUtp8WUrE44v%2Fon1NZ4Qezp%2FYtmjhl%2BruAH7PnLvwCt0w8gawLR6Nzf2chDgf%2FxhosgjF1AtbLpwQKvTYOujWA3JKCLa8%2FlbGU2Iyir%2FxtKBD0dAuKUUVm9HEv3XjqLk4yhQp%2FRwinh6JAjbGnJVf3mpxLMU4ddSxL4qqv7ZLPKPIF6t4uNFpsfgvYrvwbIXsvCH8Mx9PmZ96JkF56Wemq%2BRDJ8BxRmpPIZXpcOnwC3hk3MlNF6dWc32Db0eog1ePsHI3MWA0wC3B9gKwGGEUYDZf9RkYn%2BeFMuvrfiYwIYbeDIEXvfZkvnmVG5Lg7rNzBW81eJn%2FmQKTrOYc%2Fn9h0JsOs73fblJtbmpkndesm3vGle9lvkmJ2OUWMj0FDqgt8kUXvcGMv4DrUrsNT1sCEtDgEoy9fLPan0xJET72RH73lXLmnOq3C0uLU%2BJAb2pTlto3RD589DcK%2Fa2bnA0Atf8cLFhsOuB%2BLdPahym694IqnTty2CAoW27Yov2yqc8tol%2BsbjzFJLFdRCQdeZp6A0CxN%2B%2FAKhsws43DvgY6pgFKcF1f2bI6Ad8uq%2F%2BGzVQvg1eJJrR3n0RwIbFS1AEHPr0zTgusfMaaL0Q6dimQ0ac2Cbv5AV51vWrB%2Bo%2FBZlsn%2Fpi%2BcZhn59PISDDTYzOL8aNRv%2Bimrmgj7a8thkaJd5zgo2GsqhFDKpYmXEG1sVW%2FkHpy0x0cmYgvUot1XPTtpq5SUmyU1vmpHN1GLT4SanPHAa7Tmm4Mr6Y4DVvIxG2DOEJiyspY&X-Amz-Signature=5af118bd75ee384f4927d1f5398576561004802b2ebfb9065cf2ef163894433c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJPICHH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWL%2BpbvsQGVlvkK0chLT4k%2BrYl753Z2bjVkBC3Bw36%2FAiApp%2BWLHihWLaI83U9YYkmShIUvR9uz35imqqu7njbZtyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZJqdYdsY89vd5k6KtwDMpJI2zVDJLyELoInKFqLksInyhgxdcdjbF%2FVSKkIxALWzF4NjSQKI5BS4iIOs9NaB7Q2rQf3VH3koPdkaI%2BwkwKNflSgUtp8WUrE44v%2Fon1NZ4Qezp%2FYtmjhl%2BruAH7PnLvwCt0w8gawLR6Nzf2chDgf%2FxhosgjF1AtbLpwQKvTYOujWA3JKCLa8%2FlbGU2Iyir%2FxtKBD0dAuKUUVm9HEv3XjqLk4yhQp%2FRwinh6JAjbGnJVf3mpxLMU4ddSxL4qqv7ZLPKPIF6t4uNFpsfgvYrvwbIXsvCH8Mx9PmZ96JkF56Wemq%2BRDJ8BxRmpPIZXpcOnwC3hk3MlNF6dWc32Db0eog1ePsHI3MWA0wC3B9gKwGGEUYDZf9RkYn%2BeFMuvrfiYwIYbeDIEXvfZkvnmVG5Lg7rNzBW81eJn%2FmQKTrOYc%2Fn9h0JsOs73fblJtbmpkndesm3vGle9lvkmJ2OUWMj0FDqgt8kUXvcGMv4DrUrsNT1sCEtDgEoy9fLPan0xJET72RH73lXLmnOq3C0uLU%2BJAb2pTlto3RD589DcK%2Fa2bnA0Atf8cLFhsOuB%2BLdPahym694IqnTty2CAoW27Yov2yqc8tol%2BsbjzFJLFdRCQdeZp6A0CxN%2B%2FAKhsws43DvgY6pgFKcF1f2bI6Ad8uq%2F%2BGzVQvg1eJJrR3n0RwIbFS1AEHPr0zTgusfMaaL0Q6dimQ0ac2Cbv5AV51vWrB%2Bo%2FBZlsn%2Fpi%2BcZhn59PISDDTYzOL8aNRv%2Bimrmgj7a8thkaJd5zgo2GsqhFDKpYmXEG1sVW%2FkHpy0x0cmYgvUot1XPTtpq5SUmyU1vmpHN1GLT4SanPHAa7Tmm4Mr6Y4DVvIxG2DOEJiyspY&X-Amz-Signature=a4cd917e487a82308f693344f9da6d630c912c7b85361e5b52e1bd8bb0914f69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJPICHH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWL%2BpbvsQGVlvkK0chLT4k%2BrYl753Z2bjVkBC3Bw36%2FAiApp%2BWLHihWLaI83U9YYkmShIUvR9uz35imqqu7njbZtyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZJqdYdsY89vd5k6KtwDMpJI2zVDJLyELoInKFqLksInyhgxdcdjbF%2FVSKkIxALWzF4NjSQKI5BS4iIOs9NaB7Q2rQf3VH3koPdkaI%2BwkwKNflSgUtp8WUrE44v%2Fon1NZ4Qezp%2FYtmjhl%2BruAH7PnLvwCt0w8gawLR6Nzf2chDgf%2FxhosgjF1AtbLpwQKvTYOujWA3JKCLa8%2FlbGU2Iyir%2FxtKBD0dAuKUUVm9HEv3XjqLk4yhQp%2FRwinh6JAjbGnJVf3mpxLMU4ddSxL4qqv7ZLPKPIF6t4uNFpsfgvYrvwbIXsvCH8Mx9PmZ96JkF56Wemq%2BRDJ8BxRmpPIZXpcOnwC3hk3MlNF6dWc32Db0eog1ePsHI3MWA0wC3B9gKwGGEUYDZf9RkYn%2BeFMuvrfiYwIYbeDIEXvfZkvnmVG5Lg7rNzBW81eJn%2FmQKTrOYc%2Fn9h0JsOs73fblJtbmpkndesm3vGle9lvkmJ2OUWMj0FDqgt8kUXvcGMv4DrUrsNT1sCEtDgEoy9fLPan0xJET72RH73lXLmnOq3C0uLU%2BJAb2pTlto3RD589DcK%2Fa2bnA0Atf8cLFhsOuB%2BLdPahym694IqnTty2CAoW27Yov2yqc8tol%2BsbjzFJLFdRCQdeZp6A0CxN%2B%2FAKhsws43DvgY6pgFKcF1f2bI6Ad8uq%2F%2BGzVQvg1eJJrR3n0RwIbFS1AEHPr0zTgusfMaaL0Q6dimQ0ac2Cbv5AV51vWrB%2Bo%2FBZlsn%2Fpi%2BcZhn59PISDDTYzOL8aNRv%2Bimrmgj7a8thkaJd5zgo2GsqhFDKpYmXEG1sVW%2FkHpy0x0cmYgvUot1XPTtpq5SUmyU1vmpHN1GLT4SanPHAa7Tmm4Mr6Y4DVvIxG2DOEJiyspY&X-Amz-Signature=c54441f50965574c4d83900e5f3b31295ae99ca131d7cbf1dbe55030c624bc99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJPICHH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWL%2BpbvsQGVlvkK0chLT4k%2BrYl753Z2bjVkBC3Bw36%2FAiApp%2BWLHihWLaI83U9YYkmShIUvR9uz35imqqu7njbZtyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZJqdYdsY89vd5k6KtwDMpJI2zVDJLyELoInKFqLksInyhgxdcdjbF%2FVSKkIxALWzF4NjSQKI5BS4iIOs9NaB7Q2rQf3VH3koPdkaI%2BwkwKNflSgUtp8WUrE44v%2Fon1NZ4Qezp%2FYtmjhl%2BruAH7PnLvwCt0w8gawLR6Nzf2chDgf%2FxhosgjF1AtbLpwQKvTYOujWA3JKCLa8%2FlbGU2Iyir%2FxtKBD0dAuKUUVm9HEv3XjqLk4yhQp%2FRwinh6JAjbGnJVf3mpxLMU4ddSxL4qqv7ZLPKPIF6t4uNFpsfgvYrvwbIXsvCH8Mx9PmZ96JkF56Wemq%2BRDJ8BxRmpPIZXpcOnwC3hk3MlNF6dWc32Db0eog1ePsHI3MWA0wC3B9gKwGGEUYDZf9RkYn%2BeFMuvrfiYwIYbeDIEXvfZkvnmVG5Lg7rNzBW81eJn%2FmQKTrOYc%2Fn9h0JsOs73fblJtbmpkndesm3vGle9lvkmJ2OUWMj0FDqgt8kUXvcGMv4DrUrsNT1sCEtDgEoy9fLPan0xJET72RH73lXLmnOq3C0uLU%2BJAb2pTlto3RD589DcK%2Fa2bnA0Atf8cLFhsOuB%2BLdPahym694IqnTty2CAoW27Yov2yqc8tol%2BsbjzFJLFdRCQdeZp6A0CxN%2B%2FAKhsws43DvgY6pgFKcF1f2bI6Ad8uq%2F%2BGzVQvg1eJJrR3n0RwIbFS1AEHPr0zTgusfMaaL0Q6dimQ0ac2Cbv5AV51vWrB%2Bo%2FBZlsn%2Fpi%2BcZhn59PISDDTYzOL8aNRv%2Bimrmgj7a8thkaJd5zgo2GsqhFDKpYmXEG1sVW%2FkHpy0x0cmYgvUot1XPTtpq5SUmyU1vmpHN1GLT4SanPHAa7Tmm4Mr6Y4DVvIxG2DOEJiyspY&X-Amz-Signature=936b47e644744cb212a81d2627df10141051d9823d4eacbc5c9d1353c167d41f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJPICHH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWL%2BpbvsQGVlvkK0chLT4k%2BrYl753Z2bjVkBC3Bw36%2FAiApp%2BWLHihWLaI83U9YYkmShIUvR9uz35imqqu7njbZtyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZJqdYdsY89vd5k6KtwDMpJI2zVDJLyELoInKFqLksInyhgxdcdjbF%2FVSKkIxALWzF4NjSQKI5BS4iIOs9NaB7Q2rQf3VH3koPdkaI%2BwkwKNflSgUtp8WUrE44v%2Fon1NZ4Qezp%2FYtmjhl%2BruAH7PnLvwCt0w8gawLR6Nzf2chDgf%2FxhosgjF1AtbLpwQKvTYOujWA3JKCLa8%2FlbGU2Iyir%2FxtKBD0dAuKUUVm9HEv3XjqLk4yhQp%2FRwinh6JAjbGnJVf3mpxLMU4ddSxL4qqv7ZLPKPIF6t4uNFpsfgvYrvwbIXsvCH8Mx9PmZ96JkF56Wemq%2BRDJ8BxRmpPIZXpcOnwC3hk3MlNF6dWc32Db0eog1ePsHI3MWA0wC3B9gKwGGEUYDZf9RkYn%2BeFMuvrfiYwIYbeDIEXvfZkvnmVG5Lg7rNzBW81eJn%2FmQKTrOYc%2Fn9h0JsOs73fblJtbmpkndesm3vGle9lvkmJ2OUWMj0FDqgt8kUXvcGMv4DrUrsNT1sCEtDgEoy9fLPan0xJET72RH73lXLmnOq3C0uLU%2BJAb2pTlto3RD589DcK%2Fa2bnA0Atf8cLFhsOuB%2BLdPahym694IqnTty2CAoW27Yov2yqc8tol%2BsbjzFJLFdRCQdeZp6A0CxN%2B%2FAKhsws43DvgY6pgFKcF1f2bI6Ad8uq%2F%2BGzVQvg1eJJrR3n0RwIbFS1AEHPr0zTgusfMaaL0Q6dimQ0ac2Cbv5AV51vWrB%2Bo%2FBZlsn%2Fpi%2BcZhn59PISDDTYzOL8aNRv%2Bimrmgj7a8thkaJd5zgo2GsqhFDKpYmXEG1sVW%2FkHpy0x0cmYgvUot1XPTtpq5SUmyU1vmpHN1GLT4SanPHAa7Tmm4Mr6Y4DVvIxG2DOEJiyspY&X-Amz-Signature=adb4e26db2158779f49a23c01152e521e1dca33b5d08fdd689d4abbb08476992&X-Amz-SignedHeaders=host&x-id=GetObject)
