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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK7JKYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdMGp5rmV%2FaUArJ54MxDQRsjZ%2BN62xbszYSvhiqf3irwIhAJpBmRBG3xeATeq3CeAN4p6w1MB%2BI5clnsBz%2FZOsSeeUKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn9mVquQt6ez5eqrUq3AO6IczuhDNq9FhksFsmsZLaG%2BwLwHy2AczzdHRaIELfB39ype37awTXim%2BQwZSkOTlKC29Wa7jmwts3jk7LqzO7F4tHFAbT2hQp32js7cwJgHCEkhghi8X2ApdAcav3KpnSDUnzwuPYOh2cDFOcvMCHf%2Be377u7u5%2Fn7z9nWF9LybKh6nWVVrGNXQXnBy3RdRQGqAbBp1nGpEWtzAI4YHmA7x24bCyiIvfz6FoV9dT0QkGdfcQa95BCuwWwurxulzI4aOELjlY%2FhspCPZaLswqOU%2FlT8XrQjSwEuotA3XfBdsKw3QsTjQyqzX8hxW5WlVcr6QSTWfC58ya0SuCuaJYTbzkI4MXP0%2FJC0qUC1sAV4hCq3%2FtyHj%2Bo2aycYyiivmjnnIJ87EcszllFRPCHPbA2pdVGEb2d9tr14u69n2uudSXiAX6WMhxPXF6GJOPIGwPOvWQOtfQ7qAMXRj7ntmnHXl4aII4k8A5YTVvaavlX7Hkp8%2FpwirfVi8Y6A3os5V76sTOxmD1Kgr%2BjosReuYU%2FhlbQDeUr7FVRjtgoIESiZTSSdpqhBzokMz0vSSqICaBbQhR9mBF7WVrgsJMpBOO45EC4IJDc%2FBGwY1yi2Nbd9GmIAkyXSwi8DAWf2zCgr%2FTBBjqkAXn1G9kneFP54POarT4IQW9b%2FESpVzBOXl2xTtb%2BkvVSM%2Flp6WnF1QBGCX3HRDNRK4vw%2FodKNInl0JaKZorwb8wfMLUxudxUoSanTBMtRNCsXIIb8guiSc%2BgkU1LnT1392e4xkYzm%2B%2BbH31HS371sQjDK5cScKIOzww9KZKjcPwwDt5an4Oz3UnGOBwndPATPsRSIKbNAjEx4%2FuCzk2%2FOiZG8xUd&X-Amz-Signature=6b9101c8acd14fa1edad5915620598af408cf3c42c631b990fb847c1923be498&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK7JKYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdMGp5rmV%2FaUArJ54MxDQRsjZ%2BN62xbszYSvhiqf3irwIhAJpBmRBG3xeATeq3CeAN4p6w1MB%2BI5clnsBz%2FZOsSeeUKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn9mVquQt6ez5eqrUq3AO6IczuhDNq9FhksFsmsZLaG%2BwLwHy2AczzdHRaIELfB39ype37awTXim%2BQwZSkOTlKC29Wa7jmwts3jk7LqzO7F4tHFAbT2hQp32js7cwJgHCEkhghi8X2ApdAcav3KpnSDUnzwuPYOh2cDFOcvMCHf%2Be377u7u5%2Fn7z9nWF9LybKh6nWVVrGNXQXnBy3RdRQGqAbBp1nGpEWtzAI4YHmA7x24bCyiIvfz6FoV9dT0QkGdfcQa95BCuwWwurxulzI4aOELjlY%2FhspCPZaLswqOU%2FlT8XrQjSwEuotA3XfBdsKw3QsTjQyqzX8hxW5WlVcr6QSTWfC58ya0SuCuaJYTbzkI4MXP0%2FJC0qUC1sAV4hCq3%2FtyHj%2Bo2aycYyiivmjnnIJ87EcszllFRPCHPbA2pdVGEb2d9tr14u69n2uudSXiAX6WMhxPXF6GJOPIGwPOvWQOtfQ7qAMXRj7ntmnHXl4aII4k8A5YTVvaavlX7Hkp8%2FpwirfVi8Y6A3os5V76sTOxmD1Kgr%2BjosReuYU%2FhlbQDeUr7FVRjtgoIESiZTSSdpqhBzokMz0vSSqICaBbQhR9mBF7WVrgsJMpBOO45EC4IJDc%2FBGwY1yi2Nbd9GmIAkyXSwi8DAWf2zCgr%2FTBBjqkAXn1G9kneFP54POarT4IQW9b%2FESpVzBOXl2xTtb%2BkvVSM%2Flp6WnF1QBGCX3HRDNRK4vw%2FodKNInl0JaKZorwb8wfMLUxudxUoSanTBMtRNCsXIIb8guiSc%2BgkU1LnT1392e4xkYzm%2B%2BbH31HS371sQjDK5cScKIOzww9KZKjcPwwDt5an4Oz3UnGOBwndPATPsRSIKbNAjEx4%2FuCzk2%2FOiZG8xUd&X-Amz-Signature=01c8c25c191ebd9a046704694408945b8c0087d8aab8e59f5ae2a838c87c87ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK7JKYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdMGp5rmV%2FaUArJ54MxDQRsjZ%2BN62xbszYSvhiqf3irwIhAJpBmRBG3xeATeq3CeAN4p6w1MB%2BI5clnsBz%2FZOsSeeUKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn9mVquQt6ez5eqrUq3AO6IczuhDNq9FhksFsmsZLaG%2BwLwHy2AczzdHRaIELfB39ype37awTXim%2BQwZSkOTlKC29Wa7jmwts3jk7LqzO7F4tHFAbT2hQp32js7cwJgHCEkhghi8X2ApdAcav3KpnSDUnzwuPYOh2cDFOcvMCHf%2Be377u7u5%2Fn7z9nWF9LybKh6nWVVrGNXQXnBy3RdRQGqAbBp1nGpEWtzAI4YHmA7x24bCyiIvfz6FoV9dT0QkGdfcQa95BCuwWwurxulzI4aOELjlY%2FhspCPZaLswqOU%2FlT8XrQjSwEuotA3XfBdsKw3QsTjQyqzX8hxW5WlVcr6QSTWfC58ya0SuCuaJYTbzkI4MXP0%2FJC0qUC1sAV4hCq3%2FtyHj%2Bo2aycYyiivmjnnIJ87EcszllFRPCHPbA2pdVGEb2d9tr14u69n2uudSXiAX6WMhxPXF6GJOPIGwPOvWQOtfQ7qAMXRj7ntmnHXl4aII4k8A5YTVvaavlX7Hkp8%2FpwirfVi8Y6A3os5V76sTOxmD1Kgr%2BjosReuYU%2FhlbQDeUr7FVRjtgoIESiZTSSdpqhBzokMz0vSSqICaBbQhR9mBF7WVrgsJMpBOO45EC4IJDc%2FBGwY1yi2Nbd9GmIAkyXSwi8DAWf2zCgr%2FTBBjqkAXn1G9kneFP54POarT4IQW9b%2FESpVzBOXl2xTtb%2BkvVSM%2Flp6WnF1QBGCX3HRDNRK4vw%2FodKNInl0JaKZorwb8wfMLUxudxUoSanTBMtRNCsXIIb8guiSc%2BgkU1LnT1392e4xkYzm%2B%2BbH31HS371sQjDK5cScKIOzww9KZKjcPwwDt5an4Oz3UnGOBwndPATPsRSIKbNAjEx4%2FuCzk2%2FOiZG8xUd&X-Amz-Signature=071f4724409a8c6a1c4033b3cece5bb12f1b15052840e5a91ae7952ecd4e963d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK7JKYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdMGp5rmV%2FaUArJ54MxDQRsjZ%2BN62xbszYSvhiqf3irwIhAJpBmRBG3xeATeq3CeAN4p6w1MB%2BI5clnsBz%2FZOsSeeUKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn9mVquQt6ez5eqrUq3AO6IczuhDNq9FhksFsmsZLaG%2BwLwHy2AczzdHRaIELfB39ype37awTXim%2BQwZSkOTlKC29Wa7jmwts3jk7LqzO7F4tHFAbT2hQp32js7cwJgHCEkhghi8X2ApdAcav3KpnSDUnzwuPYOh2cDFOcvMCHf%2Be377u7u5%2Fn7z9nWF9LybKh6nWVVrGNXQXnBy3RdRQGqAbBp1nGpEWtzAI4YHmA7x24bCyiIvfz6FoV9dT0QkGdfcQa95BCuwWwurxulzI4aOELjlY%2FhspCPZaLswqOU%2FlT8XrQjSwEuotA3XfBdsKw3QsTjQyqzX8hxW5WlVcr6QSTWfC58ya0SuCuaJYTbzkI4MXP0%2FJC0qUC1sAV4hCq3%2FtyHj%2Bo2aycYyiivmjnnIJ87EcszllFRPCHPbA2pdVGEb2d9tr14u69n2uudSXiAX6WMhxPXF6GJOPIGwPOvWQOtfQ7qAMXRj7ntmnHXl4aII4k8A5YTVvaavlX7Hkp8%2FpwirfVi8Y6A3os5V76sTOxmD1Kgr%2BjosReuYU%2FhlbQDeUr7FVRjtgoIESiZTSSdpqhBzokMz0vSSqICaBbQhR9mBF7WVrgsJMpBOO45EC4IJDc%2FBGwY1yi2Nbd9GmIAkyXSwi8DAWf2zCgr%2FTBBjqkAXn1G9kneFP54POarT4IQW9b%2FESpVzBOXl2xTtb%2BkvVSM%2Flp6WnF1QBGCX3HRDNRK4vw%2FodKNInl0JaKZorwb8wfMLUxudxUoSanTBMtRNCsXIIb8guiSc%2BgkU1LnT1392e4xkYzm%2B%2BbH31HS371sQjDK5cScKIOzww9KZKjcPwwDt5an4Oz3UnGOBwndPATPsRSIKbNAjEx4%2FuCzk2%2FOiZG8xUd&X-Amz-Signature=f8cb980d2f3588499c2f6bc0ca29e044feb261ac80d4b07ee583ad8dab579ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK7JKYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdMGp5rmV%2FaUArJ54MxDQRsjZ%2BN62xbszYSvhiqf3irwIhAJpBmRBG3xeATeq3CeAN4p6w1MB%2BI5clnsBz%2FZOsSeeUKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn9mVquQt6ez5eqrUq3AO6IczuhDNq9FhksFsmsZLaG%2BwLwHy2AczzdHRaIELfB39ype37awTXim%2BQwZSkOTlKC29Wa7jmwts3jk7LqzO7F4tHFAbT2hQp32js7cwJgHCEkhghi8X2ApdAcav3KpnSDUnzwuPYOh2cDFOcvMCHf%2Be377u7u5%2Fn7z9nWF9LybKh6nWVVrGNXQXnBy3RdRQGqAbBp1nGpEWtzAI4YHmA7x24bCyiIvfz6FoV9dT0QkGdfcQa95BCuwWwurxulzI4aOELjlY%2FhspCPZaLswqOU%2FlT8XrQjSwEuotA3XfBdsKw3QsTjQyqzX8hxW5WlVcr6QSTWfC58ya0SuCuaJYTbzkI4MXP0%2FJC0qUC1sAV4hCq3%2FtyHj%2Bo2aycYyiivmjnnIJ87EcszllFRPCHPbA2pdVGEb2d9tr14u69n2uudSXiAX6WMhxPXF6GJOPIGwPOvWQOtfQ7qAMXRj7ntmnHXl4aII4k8A5YTVvaavlX7Hkp8%2FpwirfVi8Y6A3os5V76sTOxmD1Kgr%2BjosReuYU%2FhlbQDeUr7FVRjtgoIESiZTSSdpqhBzokMz0vSSqICaBbQhR9mBF7WVrgsJMpBOO45EC4IJDc%2FBGwY1yi2Nbd9GmIAkyXSwi8DAWf2zCgr%2FTBBjqkAXn1G9kneFP54POarT4IQW9b%2FESpVzBOXl2xTtb%2BkvVSM%2Flp6WnF1QBGCX3HRDNRK4vw%2FodKNInl0JaKZorwb8wfMLUxudxUoSanTBMtRNCsXIIb8guiSc%2BgkU1LnT1392e4xkYzm%2B%2BbH31HS371sQjDK5cScKIOzww9KZKjcPwwDt5an4Oz3UnGOBwndPATPsRSIKbNAjEx4%2FuCzk2%2FOiZG8xUd&X-Amz-Signature=1ec4c017a934b4c2ff1af19ccd20fe175771a4e14254ad3b67fb51c4dbe502ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HK7JKYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDdMGp5rmV%2FaUArJ54MxDQRsjZ%2BN62xbszYSvhiqf3irwIhAJpBmRBG3xeATeq3CeAN4p6w1MB%2BI5clnsBz%2FZOsSeeUKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn9mVquQt6ez5eqrUq3AO6IczuhDNq9FhksFsmsZLaG%2BwLwHy2AczzdHRaIELfB39ype37awTXim%2BQwZSkOTlKC29Wa7jmwts3jk7LqzO7F4tHFAbT2hQp32js7cwJgHCEkhghi8X2ApdAcav3KpnSDUnzwuPYOh2cDFOcvMCHf%2Be377u7u5%2Fn7z9nWF9LybKh6nWVVrGNXQXnBy3RdRQGqAbBp1nGpEWtzAI4YHmA7x24bCyiIvfz6FoV9dT0QkGdfcQa95BCuwWwurxulzI4aOELjlY%2FhspCPZaLswqOU%2FlT8XrQjSwEuotA3XfBdsKw3QsTjQyqzX8hxW5WlVcr6QSTWfC58ya0SuCuaJYTbzkI4MXP0%2FJC0qUC1sAV4hCq3%2FtyHj%2Bo2aycYyiivmjnnIJ87EcszllFRPCHPbA2pdVGEb2d9tr14u69n2uudSXiAX6WMhxPXF6GJOPIGwPOvWQOtfQ7qAMXRj7ntmnHXl4aII4k8A5YTVvaavlX7Hkp8%2FpwirfVi8Y6A3os5V76sTOxmD1Kgr%2BjosReuYU%2FhlbQDeUr7FVRjtgoIESiZTSSdpqhBzokMz0vSSqICaBbQhR9mBF7WVrgsJMpBOO45EC4IJDc%2FBGwY1yi2Nbd9GmIAkyXSwi8DAWf2zCgr%2FTBBjqkAXn1G9kneFP54POarT4IQW9b%2FESpVzBOXl2xTtb%2BkvVSM%2Flp6WnF1QBGCX3HRDNRK4vw%2FodKNInl0JaKZorwb8wfMLUxudxUoSanTBMtRNCsXIIb8guiSc%2BgkU1LnT1392e4xkYzm%2B%2BbH31HS371sQjDK5cScKIOzww9KZKjcPwwDt5an4Oz3UnGOBwndPATPsRSIKbNAjEx4%2FuCzk2%2FOiZG8xUd&X-Amz-Signature=8da3fe906611f0be299316e4df00ee6666dc848c2416ea600f5a06f22db6ae77&X-Amz-SignedHeaders=host&x-id=GetObject)
