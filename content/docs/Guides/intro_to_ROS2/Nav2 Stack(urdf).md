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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHRZODK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDR6CxKNUQd0pwQExdYjJ3y0COa1kqJWcho2oxH4%2Bh74AiEA7pvX5plb%2BZjcILe6LtyKevApzQlpFxms4PdV94Np87IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xyLgwGV%2BXVBql2SrcAy39ONLa8%2BUNMUugaFl%2BsE7LJKaeIS7IQYwZzeVt2aEbmMuwwIYyWxDWiMmBvaHlH0LNCSWOpfzSPGnW4UWqlI3ZsYqOtPwZxYOSZ8QvT09PoTSrjKvGO5yuKbRmFhYYem9eLPt%2FVCLnNrJ2KNnSxy%2BfI0WV3gbI0lBpOgEytj5idbm9dESalR7GFydsita4TQizYlWnliMIyJUU2LGnO%2BP6nHB8QPXEL1T%2FCu7SlM3CgFMT8U8hl0U4KxLLPSrgc3VRNx8rOKOFFAzoItLgUzJCztShT13ez3UHCxQYnxI5%2FCoDViufNHBTK2C%2F2AqBvsjMCDEaOnRrCYdA6R7MGN1nfTmHbJf0%2F2fdqg3PVTVHv6dKpsg7pJjr%2FGMIdLYju4lDMp9vW836CYiFtA8N%2Bl4C5HsMh4GQDDEmhtEM88JbLjKlx%2Fnz6yVM%2B1M1E7gt8YKSlK1IsH1wS4Dz2QIsuy1XE%2FV8i6uJ4OTQh7BicA2rgaGtNIeAFZ77CEWL6ZAAmx87sqiZ%2FxmmTeHBpDeFbAwIOdm%2Bh6A%2FgUkC2rOFTNYdvqVMEsfU%2FfR6tYirjHTZgmNt6hK4afyWhK5GSev1ztvJPA3OmXtWag6FA7JVUlRg1NrdRh%2FoTW8AlI32MPLM%2F74GOqUB%2BIvTCcwLKu8pgtt20qAzYTbJI2rAMDi7DcuwH%2FezBoRI5AZbh0Bpc9GiNihwg%2FvtjTmpVOFsFhT57qXHW3HDpzK4uMvkGyoCMx%2FREzuV9D0a%2B3QK2KEuh2bQZtDimFWuyNGlFR0croGL4SbQyngJZ4t%2FAClGgH%2B4CMCkeAR8TuIeZaVbL8HkIQoTRrFL75HgOZgOvchU0lfbPbQL80StRUGMG555&X-Amz-Signature=1dfa26bd748166e0c0152aacbefcac3bacc84b8e5e4ec685276eee8f7469a78d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHRZODK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDR6CxKNUQd0pwQExdYjJ3y0COa1kqJWcho2oxH4%2Bh74AiEA7pvX5plb%2BZjcILe6LtyKevApzQlpFxms4PdV94Np87IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xyLgwGV%2BXVBql2SrcAy39ONLa8%2BUNMUugaFl%2BsE7LJKaeIS7IQYwZzeVt2aEbmMuwwIYyWxDWiMmBvaHlH0LNCSWOpfzSPGnW4UWqlI3ZsYqOtPwZxYOSZ8QvT09PoTSrjKvGO5yuKbRmFhYYem9eLPt%2FVCLnNrJ2KNnSxy%2BfI0WV3gbI0lBpOgEytj5idbm9dESalR7GFydsita4TQizYlWnliMIyJUU2LGnO%2BP6nHB8QPXEL1T%2FCu7SlM3CgFMT8U8hl0U4KxLLPSrgc3VRNx8rOKOFFAzoItLgUzJCztShT13ez3UHCxQYnxI5%2FCoDViufNHBTK2C%2F2AqBvsjMCDEaOnRrCYdA6R7MGN1nfTmHbJf0%2F2fdqg3PVTVHv6dKpsg7pJjr%2FGMIdLYju4lDMp9vW836CYiFtA8N%2Bl4C5HsMh4GQDDEmhtEM88JbLjKlx%2Fnz6yVM%2B1M1E7gt8YKSlK1IsH1wS4Dz2QIsuy1XE%2FV8i6uJ4OTQh7BicA2rgaGtNIeAFZ77CEWL6ZAAmx87sqiZ%2FxmmTeHBpDeFbAwIOdm%2Bh6A%2FgUkC2rOFTNYdvqVMEsfU%2FfR6tYirjHTZgmNt6hK4afyWhK5GSev1ztvJPA3OmXtWag6FA7JVUlRg1NrdRh%2FoTW8AlI32MPLM%2F74GOqUB%2BIvTCcwLKu8pgtt20qAzYTbJI2rAMDi7DcuwH%2FezBoRI5AZbh0Bpc9GiNihwg%2FvtjTmpVOFsFhT57qXHW3HDpzK4uMvkGyoCMx%2FREzuV9D0a%2B3QK2KEuh2bQZtDimFWuyNGlFR0croGL4SbQyngJZ4t%2FAClGgH%2B4CMCkeAR8TuIeZaVbL8HkIQoTRrFL75HgOZgOvchU0lfbPbQL80StRUGMG555&X-Amz-Signature=668e6646cc41215b0a283155cea65fc52b845d09f72d20934f9505cf6aaf8679&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHRZODK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDR6CxKNUQd0pwQExdYjJ3y0COa1kqJWcho2oxH4%2Bh74AiEA7pvX5plb%2BZjcILe6LtyKevApzQlpFxms4PdV94Np87IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xyLgwGV%2BXVBql2SrcAy39ONLa8%2BUNMUugaFl%2BsE7LJKaeIS7IQYwZzeVt2aEbmMuwwIYyWxDWiMmBvaHlH0LNCSWOpfzSPGnW4UWqlI3ZsYqOtPwZxYOSZ8QvT09PoTSrjKvGO5yuKbRmFhYYem9eLPt%2FVCLnNrJ2KNnSxy%2BfI0WV3gbI0lBpOgEytj5idbm9dESalR7GFydsita4TQizYlWnliMIyJUU2LGnO%2BP6nHB8QPXEL1T%2FCu7SlM3CgFMT8U8hl0U4KxLLPSrgc3VRNx8rOKOFFAzoItLgUzJCztShT13ez3UHCxQYnxI5%2FCoDViufNHBTK2C%2F2AqBvsjMCDEaOnRrCYdA6R7MGN1nfTmHbJf0%2F2fdqg3PVTVHv6dKpsg7pJjr%2FGMIdLYju4lDMp9vW836CYiFtA8N%2Bl4C5HsMh4GQDDEmhtEM88JbLjKlx%2Fnz6yVM%2B1M1E7gt8YKSlK1IsH1wS4Dz2QIsuy1XE%2FV8i6uJ4OTQh7BicA2rgaGtNIeAFZ77CEWL6ZAAmx87sqiZ%2FxmmTeHBpDeFbAwIOdm%2Bh6A%2FgUkC2rOFTNYdvqVMEsfU%2FfR6tYirjHTZgmNt6hK4afyWhK5GSev1ztvJPA3OmXtWag6FA7JVUlRg1NrdRh%2FoTW8AlI32MPLM%2F74GOqUB%2BIvTCcwLKu8pgtt20qAzYTbJI2rAMDi7DcuwH%2FezBoRI5AZbh0Bpc9GiNihwg%2FvtjTmpVOFsFhT57qXHW3HDpzK4uMvkGyoCMx%2FREzuV9D0a%2B3QK2KEuh2bQZtDimFWuyNGlFR0croGL4SbQyngJZ4t%2FAClGgH%2B4CMCkeAR8TuIeZaVbL8HkIQoTRrFL75HgOZgOvchU0lfbPbQL80StRUGMG555&X-Amz-Signature=ae4ef98114c154296c34e19372546c70cdacd8b03767a3314cfd426112743133&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHRZODK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDR6CxKNUQd0pwQExdYjJ3y0COa1kqJWcho2oxH4%2Bh74AiEA7pvX5plb%2BZjcILe6LtyKevApzQlpFxms4PdV94Np87IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xyLgwGV%2BXVBql2SrcAy39ONLa8%2BUNMUugaFl%2BsE7LJKaeIS7IQYwZzeVt2aEbmMuwwIYyWxDWiMmBvaHlH0LNCSWOpfzSPGnW4UWqlI3ZsYqOtPwZxYOSZ8QvT09PoTSrjKvGO5yuKbRmFhYYem9eLPt%2FVCLnNrJ2KNnSxy%2BfI0WV3gbI0lBpOgEytj5idbm9dESalR7GFydsita4TQizYlWnliMIyJUU2LGnO%2BP6nHB8QPXEL1T%2FCu7SlM3CgFMT8U8hl0U4KxLLPSrgc3VRNx8rOKOFFAzoItLgUzJCztShT13ez3UHCxQYnxI5%2FCoDViufNHBTK2C%2F2AqBvsjMCDEaOnRrCYdA6R7MGN1nfTmHbJf0%2F2fdqg3PVTVHv6dKpsg7pJjr%2FGMIdLYju4lDMp9vW836CYiFtA8N%2Bl4C5HsMh4GQDDEmhtEM88JbLjKlx%2Fnz6yVM%2B1M1E7gt8YKSlK1IsH1wS4Dz2QIsuy1XE%2FV8i6uJ4OTQh7BicA2rgaGtNIeAFZ77CEWL6ZAAmx87sqiZ%2FxmmTeHBpDeFbAwIOdm%2Bh6A%2FgUkC2rOFTNYdvqVMEsfU%2FfR6tYirjHTZgmNt6hK4afyWhK5GSev1ztvJPA3OmXtWag6FA7JVUlRg1NrdRh%2FoTW8AlI32MPLM%2F74GOqUB%2BIvTCcwLKu8pgtt20qAzYTbJI2rAMDi7DcuwH%2FezBoRI5AZbh0Bpc9GiNihwg%2FvtjTmpVOFsFhT57qXHW3HDpzK4uMvkGyoCMx%2FREzuV9D0a%2B3QK2KEuh2bQZtDimFWuyNGlFR0croGL4SbQyngJZ4t%2FAClGgH%2B4CMCkeAR8TuIeZaVbL8HkIQoTRrFL75HgOZgOvchU0lfbPbQL80StRUGMG555&X-Amz-Signature=db7973ce2e4f403eb4e602d239fe86d4094a629fc8d1b5ce66a75a51991a23d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHRZODK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDR6CxKNUQd0pwQExdYjJ3y0COa1kqJWcho2oxH4%2Bh74AiEA7pvX5plb%2BZjcILe6LtyKevApzQlpFxms4PdV94Np87IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xyLgwGV%2BXVBql2SrcAy39ONLa8%2BUNMUugaFl%2BsE7LJKaeIS7IQYwZzeVt2aEbmMuwwIYyWxDWiMmBvaHlH0LNCSWOpfzSPGnW4UWqlI3ZsYqOtPwZxYOSZ8QvT09PoTSrjKvGO5yuKbRmFhYYem9eLPt%2FVCLnNrJ2KNnSxy%2BfI0WV3gbI0lBpOgEytj5idbm9dESalR7GFydsita4TQizYlWnliMIyJUU2LGnO%2BP6nHB8QPXEL1T%2FCu7SlM3CgFMT8U8hl0U4KxLLPSrgc3VRNx8rOKOFFAzoItLgUzJCztShT13ez3UHCxQYnxI5%2FCoDViufNHBTK2C%2F2AqBvsjMCDEaOnRrCYdA6R7MGN1nfTmHbJf0%2F2fdqg3PVTVHv6dKpsg7pJjr%2FGMIdLYju4lDMp9vW836CYiFtA8N%2Bl4C5HsMh4GQDDEmhtEM88JbLjKlx%2Fnz6yVM%2B1M1E7gt8YKSlK1IsH1wS4Dz2QIsuy1XE%2FV8i6uJ4OTQh7BicA2rgaGtNIeAFZ77CEWL6ZAAmx87sqiZ%2FxmmTeHBpDeFbAwIOdm%2Bh6A%2FgUkC2rOFTNYdvqVMEsfU%2FfR6tYirjHTZgmNt6hK4afyWhK5GSev1ztvJPA3OmXtWag6FA7JVUlRg1NrdRh%2FoTW8AlI32MPLM%2F74GOqUB%2BIvTCcwLKu8pgtt20qAzYTbJI2rAMDi7DcuwH%2FezBoRI5AZbh0Bpc9GiNihwg%2FvtjTmpVOFsFhT57qXHW3HDpzK4uMvkGyoCMx%2FREzuV9D0a%2B3QK2KEuh2bQZtDimFWuyNGlFR0croGL4SbQyngJZ4t%2FAClGgH%2B4CMCkeAR8TuIeZaVbL8HkIQoTRrFL75HgOZgOvchU0lfbPbQL80StRUGMG555&X-Amz-Signature=1f254fafd4ee562e29d63d3d21a7bb4cc6de356531d89188f52d294d53f84d29&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHRZODK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDR6CxKNUQd0pwQExdYjJ3y0COa1kqJWcho2oxH4%2Bh74AiEA7pvX5plb%2BZjcILe6LtyKevApzQlpFxms4PdV94Np87IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4xyLgwGV%2BXVBql2SrcAy39ONLa8%2BUNMUugaFl%2BsE7LJKaeIS7IQYwZzeVt2aEbmMuwwIYyWxDWiMmBvaHlH0LNCSWOpfzSPGnW4UWqlI3ZsYqOtPwZxYOSZ8QvT09PoTSrjKvGO5yuKbRmFhYYem9eLPt%2FVCLnNrJ2KNnSxy%2BfI0WV3gbI0lBpOgEytj5idbm9dESalR7GFydsita4TQizYlWnliMIyJUU2LGnO%2BP6nHB8QPXEL1T%2FCu7SlM3CgFMT8U8hl0U4KxLLPSrgc3VRNx8rOKOFFAzoItLgUzJCztShT13ez3UHCxQYnxI5%2FCoDViufNHBTK2C%2F2AqBvsjMCDEaOnRrCYdA6R7MGN1nfTmHbJf0%2F2fdqg3PVTVHv6dKpsg7pJjr%2FGMIdLYju4lDMp9vW836CYiFtA8N%2Bl4C5HsMh4GQDDEmhtEM88JbLjKlx%2Fnz6yVM%2B1M1E7gt8YKSlK1IsH1wS4Dz2QIsuy1XE%2FV8i6uJ4OTQh7BicA2rgaGtNIeAFZ77CEWL6ZAAmx87sqiZ%2FxmmTeHBpDeFbAwIOdm%2Bh6A%2FgUkC2rOFTNYdvqVMEsfU%2FfR6tYirjHTZgmNt6hK4afyWhK5GSev1ztvJPA3OmXtWag6FA7JVUlRg1NrdRh%2FoTW8AlI32MPLM%2F74GOqUB%2BIvTCcwLKu8pgtt20qAzYTbJI2rAMDi7DcuwH%2FezBoRI5AZbh0Bpc9GiNihwg%2FvtjTmpVOFsFhT57qXHW3HDpzK4uMvkGyoCMx%2FREzuV9D0a%2B3QK2KEuh2bQZtDimFWuyNGlFR0croGL4SbQyngJZ4t%2FAClGgH%2B4CMCkeAR8TuIeZaVbL8HkIQoTRrFL75HgOZgOvchU0lfbPbQL80StRUGMG555&X-Amz-Signature=9c3f0be6c229ccc26598768906a8379c1c0ac8aeea7ea67845d172876b22106d&X-Amz-SignedHeaders=host&x-id=GetObject)
