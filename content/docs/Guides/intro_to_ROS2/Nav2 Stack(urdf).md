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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7KMGYP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCNUHNyhIcJhzSgzcLLXre0cllisJw59w4EyOBHYJPhAiEA4sjgfmskZrFnmP3appedqjj73tCk6PRlLOpgncGt7%2BEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ7GPl5rVn3nm%2FsDyrcAyYDDn5AcfMwiqKTO0D6pfK6uKEgy482W3jQjOs67oijSYWiqmk9JtiM8qgQDJRWWAfTz7%2Bz47vs8veJcB6pW4ku2iO98pCKvmPIDDYwYV%2FNHDEUTJQJxRCCIhGk7N01N2ZxtI%2B9dIf4Y1g7G34psHe9jl3mCC19utd%2BE3jg31k6UDmbBsC4azrrUUov0HROXY6n32rHY9FwDm7XOzE8BFGpCwnxtR9%2BKt2wN0w20ijkrKKpHjCZML8O3%2FvR0OfbOUPoXg0I4fdhMATqai2MuL3KLz0bkL3rExlH%2B8x08JMrufleXzOsgxMKsqdI%2FJp%2F%2Fs83sxZlVhIim7aTN4EUC04%2FVNXb6dPYL1kGsRK%2Bz%2FozPUpSvE26CZofGGfpNRYKWmyppf8oEoraaoIdezGmkSKT7mzS9PT0a6YnCsbxJKyIOLIXphpM9h8ruJ3lqaHt7RW3KumcxrrZWjR8On9JfWx1KHkUZlxCmcZ87rd%2BZ2fU7zAiarQBRZRKhz2j0tMwkHYdiU41FrqMXJ71p1c79gd7YFK%2FT7HiW%2BprQUawol7PD0orqB4dMgpSx3BncWogYuTJr6BmMbw3Psr9ftG%2FEzgsPeTj84h110%2FrYyOxyPU%2FnlYuqgAqgeQjisFdMIb9yMMGOqUBak5zA%2FudHDHbB5Ve5E5%2B0RzOpOSVYm572B2pYXMgISpuslRut3maKTKw6YJtm4wfsFifgM7uevc5E9gZEP1Ql5GlkYj5pSqnwueq5tGwFbvM5Yur%2FFX2weTcCIeE%2FApJr6rTl3Ode8v9yyOb4snaDO%2F%2BN1XrX0cyFW%2BlZicW%2BgCcDqgo40Vi04LZX1nqEVGYqvdZhdubkAQ60M3rgOgaGXEosul7&X-Amz-Signature=f42c8d53cf73262a5939804b870914d033444c7031b878b5fe86a9bf32d100c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7KMGYP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCNUHNyhIcJhzSgzcLLXre0cllisJw59w4EyOBHYJPhAiEA4sjgfmskZrFnmP3appedqjj73tCk6PRlLOpgncGt7%2BEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ7GPl5rVn3nm%2FsDyrcAyYDDn5AcfMwiqKTO0D6pfK6uKEgy482W3jQjOs67oijSYWiqmk9JtiM8qgQDJRWWAfTz7%2Bz47vs8veJcB6pW4ku2iO98pCKvmPIDDYwYV%2FNHDEUTJQJxRCCIhGk7N01N2ZxtI%2B9dIf4Y1g7G34psHe9jl3mCC19utd%2BE3jg31k6UDmbBsC4azrrUUov0HROXY6n32rHY9FwDm7XOzE8BFGpCwnxtR9%2BKt2wN0w20ijkrKKpHjCZML8O3%2FvR0OfbOUPoXg0I4fdhMATqai2MuL3KLz0bkL3rExlH%2B8x08JMrufleXzOsgxMKsqdI%2FJp%2F%2Fs83sxZlVhIim7aTN4EUC04%2FVNXb6dPYL1kGsRK%2Bz%2FozPUpSvE26CZofGGfpNRYKWmyppf8oEoraaoIdezGmkSKT7mzS9PT0a6YnCsbxJKyIOLIXphpM9h8ruJ3lqaHt7RW3KumcxrrZWjR8On9JfWx1KHkUZlxCmcZ87rd%2BZ2fU7zAiarQBRZRKhz2j0tMwkHYdiU41FrqMXJ71p1c79gd7YFK%2FT7HiW%2BprQUawol7PD0orqB4dMgpSx3BncWogYuTJr6BmMbw3Psr9ftG%2FEzgsPeTj84h110%2FrYyOxyPU%2FnlYuqgAqgeQjisFdMIb9yMMGOqUBak5zA%2FudHDHbB5Ve5E5%2B0RzOpOSVYm572B2pYXMgISpuslRut3maKTKw6YJtm4wfsFifgM7uevc5E9gZEP1Ql5GlkYj5pSqnwueq5tGwFbvM5Yur%2FFX2weTcCIeE%2FApJr6rTl3Ode8v9yyOb4snaDO%2F%2BN1XrX0cyFW%2BlZicW%2BgCcDqgo40Vi04LZX1nqEVGYqvdZhdubkAQ60M3rgOgaGXEosul7&X-Amz-Signature=4432db6eaf15f31e5c137e17096b61896103e403518d2afd367cf68e028533f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7KMGYP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCNUHNyhIcJhzSgzcLLXre0cllisJw59w4EyOBHYJPhAiEA4sjgfmskZrFnmP3appedqjj73tCk6PRlLOpgncGt7%2BEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ7GPl5rVn3nm%2FsDyrcAyYDDn5AcfMwiqKTO0D6pfK6uKEgy482W3jQjOs67oijSYWiqmk9JtiM8qgQDJRWWAfTz7%2Bz47vs8veJcB6pW4ku2iO98pCKvmPIDDYwYV%2FNHDEUTJQJxRCCIhGk7N01N2ZxtI%2B9dIf4Y1g7G34psHe9jl3mCC19utd%2BE3jg31k6UDmbBsC4azrrUUov0HROXY6n32rHY9FwDm7XOzE8BFGpCwnxtR9%2BKt2wN0w20ijkrKKpHjCZML8O3%2FvR0OfbOUPoXg0I4fdhMATqai2MuL3KLz0bkL3rExlH%2B8x08JMrufleXzOsgxMKsqdI%2FJp%2F%2Fs83sxZlVhIim7aTN4EUC04%2FVNXb6dPYL1kGsRK%2Bz%2FozPUpSvE26CZofGGfpNRYKWmyppf8oEoraaoIdezGmkSKT7mzS9PT0a6YnCsbxJKyIOLIXphpM9h8ruJ3lqaHt7RW3KumcxrrZWjR8On9JfWx1KHkUZlxCmcZ87rd%2BZ2fU7zAiarQBRZRKhz2j0tMwkHYdiU41FrqMXJ71p1c79gd7YFK%2FT7HiW%2BprQUawol7PD0orqB4dMgpSx3BncWogYuTJr6BmMbw3Psr9ftG%2FEzgsPeTj84h110%2FrYyOxyPU%2FnlYuqgAqgeQjisFdMIb9yMMGOqUBak5zA%2FudHDHbB5Ve5E5%2B0RzOpOSVYm572B2pYXMgISpuslRut3maKTKw6YJtm4wfsFifgM7uevc5E9gZEP1Ql5GlkYj5pSqnwueq5tGwFbvM5Yur%2FFX2weTcCIeE%2FApJr6rTl3Ode8v9yyOb4snaDO%2F%2BN1XrX0cyFW%2BlZicW%2BgCcDqgo40Vi04LZX1nqEVGYqvdZhdubkAQ60M3rgOgaGXEosul7&X-Amz-Signature=8cb7f74e4d5bd2b1fa3d0dcfdfcc4fb4477c2fb9df0297421317de1f46fdfa09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7KMGYP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCNUHNyhIcJhzSgzcLLXre0cllisJw59w4EyOBHYJPhAiEA4sjgfmskZrFnmP3appedqjj73tCk6PRlLOpgncGt7%2BEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ7GPl5rVn3nm%2FsDyrcAyYDDn5AcfMwiqKTO0D6pfK6uKEgy482W3jQjOs67oijSYWiqmk9JtiM8qgQDJRWWAfTz7%2Bz47vs8veJcB6pW4ku2iO98pCKvmPIDDYwYV%2FNHDEUTJQJxRCCIhGk7N01N2ZxtI%2B9dIf4Y1g7G34psHe9jl3mCC19utd%2BE3jg31k6UDmbBsC4azrrUUov0HROXY6n32rHY9FwDm7XOzE8BFGpCwnxtR9%2BKt2wN0w20ijkrKKpHjCZML8O3%2FvR0OfbOUPoXg0I4fdhMATqai2MuL3KLz0bkL3rExlH%2B8x08JMrufleXzOsgxMKsqdI%2FJp%2F%2Fs83sxZlVhIim7aTN4EUC04%2FVNXb6dPYL1kGsRK%2Bz%2FozPUpSvE26CZofGGfpNRYKWmyppf8oEoraaoIdezGmkSKT7mzS9PT0a6YnCsbxJKyIOLIXphpM9h8ruJ3lqaHt7RW3KumcxrrZWjR8On9JfWx1KHkUZlxCmcZ87rd%2BZ2fU7zAiarQBRZRKhz2j0tMwkHYdiU41FrqMXJ71p1c79gd7YFK%2FT7HiW%2BprQUawol7PD0orqB4dMgpSx3BncWogYuTJr6BmMbw3Psr9ftG%2FEzgsPeTj84h110%2FrYyOxyPU%2FnlYuqgAqgeQjisFdMIb9yMMGOqUBak5zA%2FudHDHbB5Ve5E5%2B0RzOpOSVYm572B2pYXMgISpuslRut3maKTKw6YJtm4wfsFifgM7uevc5E9gZEP1Ql5GlkYj5pSqnwueq5tGwFbvM5Yur%2FFX2weTcCIeE%2FApJr6rTl3Ode8v9yyOb4snaDO%2F%2BN1XrX0cyFW%2BlZicW%2BgCcDqgo40Vi04LZX1nqEVGYqvdZhdubkAQ60M3rgOgaGXEosul7&X-Amz-Signature=9c2ac7166bb4d8e8a043a53675fead285a0e900b96966bdd91d5fa7286f629ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7KMGYP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCNUHNyhIcJhzSgzcLLXre0cllisJw59w4EyOBHYJPhAiEA4sjgfmskZrFnmP3appedqjj73tCk6PRlLOpgncGt7%2BEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ7GPl5rVn3nm%2FsDyrcAyYDDn5AcfMwiqKTO0D6pfK6uKEgy482W3jQjOs67oijSYWiqmk9JtiM8qgQDJRWWAfTz7%2Bz47vs8veJcB6pW4ku2iO98pCKvmPIDDYwYV%2FNHDEUTJQJxRCCIhGk7N01N2ZxtI%2B9dIf4Y1g7G34psHe9jl3mCC19utd%2BE3jg31k6UDmbBsC4azrrUUov0HROXY6n32rHY9FwDm7XOzE8BFGpCwnxtR9%2BKt2wN0w20ijkrKKpHjCZML8O3%2FvR0OfbOUPoXg0I4fdhMATqai2MuL3KLz0bkL3rExlH%2B8x08JMrufleXzOsgxMKsqdI%2FJp%2F%2Fs83sxZlVhIim7aTN4EUC04%2FVNXb6dPYL1kGsRK%2Bz%2FozPUpSvE26CZofGGfpNRYKWmyppf8oEoraaoIdezGmkSKT7mzS9PT0a6YnCsbxJKyIOLIXphpM9h8ruJ3lqaHt7RW3KumcxrrZWjR8On9JfWx1KHkUZlxCmcZ87rd%2BZ2fU7zAiarQBRZRKhz2j0tMwkHYdiU41FrqMXJ71p1c79gd7YFK%2FT7HiW%2BprQUawol7PD0orqB4dMgpSx3BncWogYuTJr6BmMbw3Psr9ftG%2FEzgsPeTj84h110%2FrYyOxyPU%2FnlYuqgAqgeQjisFdMIb9yMMGOqUBak5zA%2FudHDHbB5Ve5E5%2B0RzOpOSVYm572B2pYXMgISpuslRut3maKTKw6YJtm4wfsFifgM7uevc5E9gZEP1Ql5GlkYj5pSqnwueq5tGwFbvM5Yur%2FFX2weTcCIeE%2FApJr6rTl3Ode8v9yyOb4snaDO%2F%2BN1XrX0cyFW%2BlZicW%2BgCcDqgo40Vi04LZX1nqEVGYqvdZhdubkAQ60M3rgOgaGXEosul7&X-Amz-Signature=21792e3b8e78567eefebea219f304d134deeb69bbc459837b0d65ecca6d44f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7KMGYP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCNUHNyhIcJhzSgzcLLXre0cllisJw59w4EyOBHYJPhAiEA4sjgfmskZrFnmP3appedqjj73tCk6PRlLOpgncGt7%2BEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ7GPl5rVn3nm%2FsDyrcAyYDDn5AcfMwiqKTO0D6pfK6uKEgy482W3jQjOs67oijSYWiqmk9JtiM8qgQDJRWWAfTz7%2Bz47vs8veJcB6pW4ku2iO98pCKvmPIDDYwYV%2FNHDEUTJQJxRCCIhGk7N01N2ZxtI%2B9dIf4Y1g7G34psHe9jl3mCC19utd%2BE3jg31k6UDmbBsC4azrrUUov0HROXY6n32rHY9FwDm7XOzE8BFGpCwnxtR9%2BKt2wN0w20ijkrKKpHjCZML8O3%2FvR0OfbOUPoXg0I4fdhMATqai2MuL3KLz0bkL3rExlH%2B8x08JMrufleXzOsgxMKsqdI%2FJp%2F%2Fs83sxZlVhIim7aTN4EUC04%2FVNXb6dPYL1kGsRK%2Bz%2FozPUpSvE26CZofGGfpNRYKWmyppf8oEoraaoIdezGmkSKT7mzS9PT0a6YnCsbxJKyIOLIXphpM9h8ruJ3lqaHt7RW3KumcxrrZWjR8On9JfWx1KHkUZlxCmcZ87rd%2BZ2fU7zAiarQBRZRKhz2j0tMwkHYdiU41FrqMXJ71p1c79gd7YFK%2FT7HiW%2BprQUawol7PD0orqB4dMgpSx3BncWogYuTJr6BmMbw3Psr9ftG%2FEzgsPeTj84h110%2FrYyOxyPU%2FnlYuqgAqgeQjisFdMIb9yMMGOqUBak5zA%2FudHDHbB5Ve5E5%2B0RzOpOSVYm572B2pYXMgISpuslRut3maKTKw6YJtm4wfsFifgM7uevc5E9gZEP1Ql5GlkYj5pSqnwueq5tGwFbvM5Yur%2FFX2weTcCIeE%2FApJr6rTl3Ode8v9yyOb4snaDO%2F%2BN1XrX0cyFW%2BlZicW%2BgCcDqgo40Vi04LZX1nqEVGYqvdZhdubkAQ60M3rgOgaGXEosul7&X-Amz-Signature=c92ce4970d2f19a9ce02e1b5e1bca6484b9be8ffadac4b0a9ef9970b023d91d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
