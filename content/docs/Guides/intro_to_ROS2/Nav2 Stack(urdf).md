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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCB2KRHL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsNcwjT04ab8nRuN1n29iFVIIoaj1m15SOJ8%2FBobhaKAiEA%2B%2Bbwtqmrv1qNQsWuELtWFKyKlRj0m9AKIfzriHxOKrgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkluX0JOdZxPtfkyrcA%2FofEFQORuWTmBKi2zq%2FSiCt6ifQ0JIkQzhwdxCXS4dB4Wl45ezu3khETsOiRgf2izMboDaloJno5NeUpWC1yOdWppZvnCyuYYNB4RJGmcT1z6mWBcsS0%2FIdSV7LxlG9xalVT3L%2Bvo5uhn%2BOdFoJu1mjmudOIihFy3JLtp7PcqwCT%2FlP7ej9jwcBmm6wgKylCln448B3UdCO6acSWXq5J0OFEvTRtNMw5rIgLQCxiQNb56zZ3LmjmrQAKA0FAp68460jha0lyVqTsm%2BvFWLEZrRnODEoPAmDa93l%2FEdxWVrg6cM9dC7VH6gLTkndyRV8xT3h3lyVp5xY1NjRHHh%2BRVjxdkJB2VWTiSW2rYQjMOnBgsO5AB5VVAD6nGg%2FSFB56VYb3q%2F2mLnUgNRJmC%2FvyXTanSug8t3yGR2Bg0D5HCJGK5mqV%2B7mQ%2FXLK9dnbQGT8kFV1cFHhKrFJAE%2BOuYBqU0N0Kq8N6YlGUdrYIqYtR6JVUm2p2ciWh%2B0HRx%2B8%2BBtFfUruABrkb0ypuMNc7T5NbreKuHPaa8Za%2BE54OnvB5eleXs40qg3dwWyVFYFHh1sUTIpjFN5uK35WwvZxqRqPQBjyiKPlfsickBYMqln7bKFezpbE3naDzaIec%2BUMKLbhcMGOqUBP%2BZVThhrMZdZaOkB1XWOUoytykjDUwJeXG2sOnECKlNiLc%2BBziPrB3M7xCRdeA0pDmFai%2F115Yu9O4R0Io0SgShDjMAiNtjWSrNE4v38ruxaIAJDo94s0Czu8BTfo8SsKEBWKAsJtSayaZvw6MsBFEUCs6oSCmwg5FK7b1AkuLuAi%2B5b287A88AEnLdFrNdQMKJ84JwGFB3tokbk07Ph2hjE4S8s&X-Amz-Signature=72bff18fb582a2cd7806780b27fbb0e7e9fe688c3147bcd93175c690f00edcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCB2KRHL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsNcwjT04ab8nRuN1n29iFVIIoaj1m15SOJ8%2FBobhaKAiEA%2B%2Bbwtqmrv1qNQsWuELtWFKyKlRj0m9AKIfzriHxOKrgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkluX0JOdZxPtfkyrcA%2FofEFQORuWTmBKi2zq%2FSiCt6ifQ0JIkQzhwdxCXS4dB4Wl45ezu3khETsOiRgf2izMboDaloJno5NeUpWC1yOdWppZvnCyuYYNB4RJGmcT1z6mWBcsS0%2FIdSV7LxlG9xalVT3L%2Bvo5uhn%2BOdFoJu1mjmudOIihFy3JLtp7PcqwCT%2FlP7ej9jwcBmm6wgKylCln448B3UdCO6acSWXq5J0OFEvTRtNMw5rIgLQCxiQNb56zZ3LmjmrQAKA0FAp68460jha0lyVqTsm%2BvFWLEZrRnODEoPAmDa93l%2FEdxWVrg6cM9dC7VH6gLTkndyRV8xT3h3lyVp5xY1NjRHHh%2BRVjxdkJB2VWTiSW2rYQjMOnBgsO5AB5VVAD6nGg%2FSFB56VYb3q%2F2mLnUgNRJmC%2FvyXTanSug8t3yGR2Bg0D5HCJGK5mqV%2B7mQ%2FXLK9dnbQGT8kFV1cFHhKrFJAE%2BOuYBqU0N0Kq8N6YlGUdrYIqYtR6JVUm2p2ciWh%2B0HRx%2B8%2BBtFfUruABrkb0ypuMNc7T5NbreKuHPaa8Za%2BE54OnvB5eleXs40qg3dwWyVFYFHh1sUTIpjFN5uK35WwvZxqRqPQBjyiKPlfsickBYMqln7bKFezpbE3naDzaIec%2BUMKLbhcMGOqUBP%2BZVThhrMZdZaOkB1XWOUoytykjDUwJeXG2sOnECKlNiLc%2BBziPrB3M7xCRdeA0pDmFai%2F115Yu9O4R0Io0SgShDjMAiNtjWSrNE4v38ruxaIAJDo94s0Czu8BTfo8SsKEBWKAsJtSayaZvw6MsBFEUCs6oSCmwg5FK7b1AkuLuAi%2B5b287A88AEnLdFrNdQMKJ84JwGFB3tokbk07Ph2hjE4S8s&X-Amz-Signature=f909dd4f6a5121d48de287840d8d51a9a25fb64247ec10a12556752fa1ea5cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCB2KRHL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsNcwjT04ab8nRuN1n29iFVIIoaj1m15SOJ8%2FBobhaKAiEA%2B%2Bbwtqmrv1qNQsWuELtWFKyKlRj0m9AKIfzriHxOKrgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkluX0JOdZxPtfkyrcA%2FofEFQORuWTmBKi2zq%2FSiCt6ifQ0JIkQzhwdxCXS4dB4Wl45ezu3khETsOiRgf2izMboDaloJno5NeUpWC1yOdWppZvnCyuYYNB4RJGmcT1z6mWBcsS0%2FIdSV7LxlG9xalVT3L%2Bvo5uhn%2BOdFoJu1mjmudOIihFy3JLtp7PcqwCT%2FlP7ej9jwcBmm6wgKylCln448B3UdCO6acSWXq5J0OFEvTRtNMw5rIgLQCxiQNb56zZ3LmjmrQAKA0FAp68460jha0lyVqTsm%2BvFWLEZrRnODEoPAmDa93l%2FEdxWVrg6cM9dC7VH6gLTkndyRV8xT3h3lyVp5xY1NjRHHh%2BRVjxdkJB2VWTiSW2rYQjMOnBgsO5AB5VVAD6nGg%2FSFB56VYb3q%2F2mLnUgNRJmC%2FvyXTanSug8t3yGR2Bg0D5HCJGK5mqV%2B7mQ%2FXLK9dnbQGT8kFV1cFHhKrFJAE%2BOuYBqU0N0Kq8N6YlGUdrYIqYtR6JVUm2p2ciWh%2B0HRx%2B8%2BBtFfUruABrkb0ypuMNc7T5NbreKuHPaa8Za%2BE54OnvB5eleXs40qg3dwWyVFYFHh1sUTIpjFN5uK35WwvZxqRqPQBjyiKPlfsickBYMqln7bKFezpbE3naDzaIec%2BUMKLbhcMGOqUBP%2BZVThhrMZdZaOkB1XWOUoytykjDUwJeXG2sOnECKlNiLc%2BBziPrB3M7xCRdeA0pDmFai%2F115Yu9O4R0Io0SgShDjMAiNtjWSrNE4v38ruxaIAJDo94s0Czu8BTfo8SsKEBWKAsJtSayaZvw6MsBFEUCs6oSCmwg5FK7b1AkuLuAi%2B5b287A88AEnLdFrNdQMKJ84JwGFB3tokbk07Ph2hjE4S8s&X-Amz-Signature=5ba03fadfd437ed6bc0e7dbaa0ff4bb8e8f5eeeb17c81ec95599102d6a3c14b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCB2KRHL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsNcwjT04ab8nRuN1n29iFVIIoaj1m15SOJ8%2FBobhaKAiEA%2B%2Bbwtqmrv1qNQsWuELtWFKyKlRj0m9AKIfzriHxOKrgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkluX0JOdZxPtfkyrcA%2FofEFQORuWTmBKi2zq%2FSiCt6ifQ0JIkQzhwdxCXS4dB4Wl45ezu3khETsOiRgf2izMboDaloJno5NeUpWC1yOdWppZvnCyuYYNB4RJGmcT1z6mWBcsS0%2FIdSV7LxlG9xalVT3L%2Bvo5uhn%2BOdFoJu1mjmudOIihFy3JLtp7PcqwCT%2FlP7ej9jwcBmm6wgKylCln448B3UdCO6acSWXq5J0OFEvTRtNMw5rIgLQCxiQNb56zZ3LmjmrQAKA0FAp68460jha0lyVqTsm%2BvFWLEZrRnODEoPAmDa93l%2FEdxWVrg6cM9dC7VH6gLTkndyRV8xT3h3lyVp5xY1NjRHHh%2BRVjxdkJB2VWTiSW2rYQjMOnBgsO5AB5VVAD6nGg%2FSFB56VYb3q%2F2mLnUgNRJmC%2FvyXTanSug8t3yGR2Bg0D5HCJGK5mqV%2B7mQ%2FXLK9dnbQGT8kFV1cFHhKrFJAE%2BOuYBqU0N0Kq8N6YlGUdrYIqYtR6JVUm2p2ciWh%2B0HRx%2B8%2BBtFfUruABrkb0ypuMNc7T5NbreKuHPaa8Za%2BE54OnvB5eleXs40qg3dwWyVFYFHh1sUTIpjFN5uK35WwvZxqRqPQBjyiKPlfsickBYMqln7bKFezpbE3naDzaIec%2BUMKLbhcMGOqUBP%2BZVThhrMZdZaOkB1XWOUoytykjDUwJeXG2sOnECKlNiLc%2BBziPrB3M7xCRdeA0pDmFai%2F115Yu9O4R0Io0SgShDjMAiNtjWSrNE4v38ruxaIAJDo94s0Czu8BTfo8SsKEBWKAsJtSayaZvw6MsBFEUCs6oSCmwg5FK7b1AkuLuAi%2B5b287A88AEnLdFrNdQMKJ84JwGFB3tokbk07Ph2hjE4S8s&X-Amz-Signature=814a4a469246a53b5a5443835bef7dc24ba054c98f1c4a50480f0404f0c09b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCB2KRHL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsNcwjT04ab8nRuN1n29iFVIIoaj1m15SOJ8%2FBobhaKAiEA%2B%2Bbwtqmrv1qNQsWuELtWFKyKlRj0m9AKIfzriHxOKrgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkluX0JOdZxPtfkyrcA%2FofEFQORuWTmBKi2zq%2FSiCt6ifQ0JIkQzhwdxCXS4dB4Wl45ezu3khETsOiRgf2izMboDaloJno5NeUpWC1yOdWppZvnCyuYYNB4RJGmcT1z6mWBcsS0%2FIdSV7LxlG9xalVT3L%2Bvo5uhn%2BOdFoJu1mjmudOIihFy3JLtp7PcqwCT%2FlP7ej9jwcBmm6wgKylCln448B3UdCO6acSWXq5J0OFEvTRtNMw5rIgLQCxiQNb56zZ3LmjmrQAKA0FAp68460jha0lyVqTsm%2BvFWLEZrRnODEoPAmDa93l%2FEdxWVrg6cM9dC7VH6gLTkndyRV8xT3h3lyVp5xY1NjRHHh%2BRVjxdkJB2VWTiSW2rYQjMOnBgsO5AB5VVAD6nGg%2FSFB56VYb3q%2F2mLnUgNRJmC%2FvyXTanSug8t3yGR2Bg0D5HCJGK5mqV%2B7mQ%2FXLK9dnbQGT8kFV1cFHhKrFJAE%2BOuYBqU0N0Kq8N6YlGUdrYIqYtR6JVUm2p2ciWh%2B0HRx%2B8%2BBtFfUruABrkb0ypuMNc7T5NbreKuHPaa8Za%2BE54OnvB5eleXs40qg3dwWyVFYFHh1sUTIpjFN5uK35WwvZxqRqPQBjyiKPlfsickBYMqln7bKFezpbE3naDzaIec%2BUMKLbhcMGOqUBP%2BZVThhrMZdZaOkB1XWOUoytykjDUwJeXG2sOnECKlNiLc%2BBziPrB3M7xCRdeA0pDmFai%2F115Yu9O4R0Io0SgShDjMAiNtjWSrNE4v38ruxaIAJDo94s0Czu8BTfo8SsKEBWKAsJtSayaZvw6MsBFEUCs6oSCmwg5FK7b1AkuLuAi%2B5b287A88AEnLdFrNdQMKJ84JwGFB3tokbk07Ph2hjE4S8s&X-Amz-Signature=260498ed9b31aa39c7d5e7f17ac8a1617fb2d0dcee35691d95c7e40c40a1de77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCB2KRHL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsNcwjT04ab8nRuN1n29iFVIIoaj1m15SOJ8%2FBobhaKAiEA%2B%2Bbwtqmrv1qNQsWuELtWFKyKlRj0m9AKIfzriHxOKrgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQkluX0JOdZxPtfkyrcA%2FofEFQORuWTmBKi2zq%2FSiCt6ifQ0JIkQzhwdxCXS4dB4Wl45ezu3khETsOiRgf2izMboDaloJno5NeUpWC1yOdWppZvnCyuYYNB4RJGmcT1z6mWBcsS0%2FIdSV7LxlG9xalVT3L%2Bvo5uhn%2BOdFoJu1mjmudOIihFy3JLtp7PcqwCT%2FlP7ej9jwcBmm6wgKylCln448B3UdCO6acSWXq5J0OFEvTRtNMw5rIgLQCxiQNb56zZ3LmjmrQAKA0FAp68460jha0lyVqTsm%2BvFWLEZrRnODEoPAmDa93l%2FEdxWVrg6cM9dC7VH6gLTkndyRV8xT3h3lyVp5xY1NjRHHh%2BRVjxdkJB2VWTiSW2rYQjMOnBgsO5AB5VVAD6nGg%2FSFB56VYb3q%2F2mLnUgNRJmC%2FvyXTanSug8t3yGR2Bg0D5HCJGK5mqV%2B7mQ%2FXLK9dnbQGT8kFV1cFHhKrFJAE%2BOuYBqU0N0Kq8N6YlGUdrYIqYtR6JVUm2p2ciWh%2B0HRx%2B8%2BBtFfUruABrkb0ypuMNc7T5NbreKuHPaa8Za%2BE54OnvB5eleXs40qg3dwWyVFYFHh1sUTIpjFN5uK35WwvZxqRqPQBjyiKPlfsickBYMqln7bKFezpbE3naDzaIec%2BUMKLbhcMGOqUBP%2BZVThhrMZdZaOkB1XWOUoytykjDUwJeXG2sOnECKlNiLc%2BBziPrB3M7xCRdeA0pDmFai%2F115Yu9O4R0Io0SgShDjMAiNtjWSrNE4v38ruxaIAJDo94s0Czu8BTfo8SsKEBWKAsJtSayaZvw6MsBFEUCs6oSCmwg5FK7b1AkuLuAi%2B5b287A88AEnLdFrNdQMKJ84JwGFB3tokbk07Ph2hjE4S8s&X-Amz-Signature=5a6869ad867e2a140d8bdaa60b367d59817286749d2066a3a5b8d19baf66b4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
