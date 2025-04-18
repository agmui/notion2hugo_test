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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT57KIZR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJk%2FgpMcBesAdLQLFEeH2gj1OxXLSUxc34pZVc2SCAwIgZm13v4g%2BKmTbCGopIG5o9cR46Fl9LeTeZWrKph7uQL0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMroJb3z20bcogIxpircA7eSr7JniFjouaGflB3kpY5vekU9xmLcRBUg4VR0OcBikD4Erjra1PJPoK4r4cGbe8rPUlA%2FfoVmf%2BdKOZvVgzdqCHUIANNineDIRk4wOYBdlirAshS4iaQUa%2BCWTTI3WfCnoVEYXzD63XBrQDtDQacLDy%2BXbIJ7IcEBPigx39zL4nISe1z8WizUXZmBrJAQrfSHwBbffAQp8UsAQlYne1jFENiG83q0Zf7KQGGD4TR8O3dCuZYKOWamqOdjZmI6wLMLGhu7yE%2Byj9ovoOSyBAHCHxvlQsn%2Fr0iOiDuCsQyQOXGzg6qOqeD50p%2FApsgy1kf0MOhBIpzAV4i62ArRJhmDccRN9EKTdoETYTi1N%2FeTZxupY36j5XSEc%2BXcFYT91fd0dGB4zshTtEx%2Fk9NEfjyHAubTUIbDWqo%2BltYR6DUhYznw6gkhDyb7rEGK6jm1qP%2BSFaz7aRvEFWrKeHrwLjJi8FxEL0udVdnrNYq6ezZSCbBHGrgMbpW6tpW62AtfIQeonqFO8TN3LRulRyv87U%2F38ppgHskDCvo55BgZYiPYVk84DEmcspNZ52SEQmoCqN6BX6NaLPdUGfMgbL35VidE%2BiFqaAUc7UvH3ES283%2FhGAClWtxmAMRJ8CQrMNyOh8AGOqUB1%2BQZsEbbgxOV%2FyxlTDwt%2FcdENB08sr7%2BaVBrGxJhv9XmWgTBFd950nmmfu36fHMc32AzkJRMEht9nvyuOD6Autk0WdyjriIOUV6tCgFYCFUMbgkog1tn6%2Ftz%2FWFM0C%2FR1dedpyg0XWck5jsWJrTxfM8WNDbqHZzmpKcsUEMZI%2FO%2BdBFvYP1Ie8VITXH2BwOS9iaZ7iX%2FxVLCuAesbd2pl13ZAVwf&X-Amz-Signature=570bc5ec8ff70fc2978b8058183e1809241d54a8abd8a4bcfd3266ad3b63befe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT57KIZR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJk%2FgpMcBesAdLQLFEeH2gj1OxXLSUxc34pZVc2SCAwIgZm13v4g%2BKmTbCGopIG5o9cR46Fl9LeTeZWrKph7uQL0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMroJb3z20bcogIxpircA7eSr7JniFjouaGflB3kpY5vekU9xmLcRBUg4VR0OcBikD4Erjra1PJPoK4r4cGbe8rPUlA%2FfoVmf%2BdKOZvVgzdqCHUIANNineDIRk4wOYBdlirAshS4iaQUa%2BCWTTI3WfCnoVEYXzD63XBrQDtDQacLDy%2BXbIJ7IcEBPigx39zL4nISe1z8WizUXZmBrJAQrfSHwBbffAQp8UsAQlYne1jFENiG83q0Zf7KQGGD4TR8O3dCuZYKOWamqOdjZmI6wLMLGhu7yE%2Byj9ovoOSyBAHCHxvlQsn%2Fr0iOiDuCsQyQOXGzg6qOqeD50p%2FApsgy1kf0MOhBIpzAV4i62ArRJhmDccRN9EKTdoETYTi1N%2FeTZxupY36j5XSEc%2BXcFYT91fd0dGB4zshTtEx%2Fk9NEfjyHAubTUIbDWqo%2BltYR6DUhYznw6gkhDyb7rEGK6jm1qP%2BSFaz7aRvEFWrKeHrwLjJi8FxEL0udVdnrNYq6ezZSCbBHGrgMbpW6tpW62AtfIQeonqFO8TN3LRulRyv87U%2F38ppgHskDCvo55BgZYiPYVk84DEmcspNZ52SEQmoCqN6BX6NaLPdUGfMgbL35VidE%2BiFqaAUc7UvH3ES283%2FhGAClWtxmAMRJ8CQrMNyOh8AGOqUB1%2BQZsEbbgxOV%2FyxlTDwt%2FcdENB08sr7%2BaVBrGxJhv9XmWgTBFd950nmmfu36fHMc32AzkJRMEht9nvyuOD6Autk0WdyjriIOUV6tCgFYCFUMbgkog1tn6%2Ftz%2FWFM0C%2FR1dedpyg0XWck5jsWJrTxfM8WNDbqHZzmpKcsUEMZI%2FO%2BdBFvYP1Ie8VITXH2BwOS9iaZ7iX%2FxVLCuAesbd2pl13ZAVwf&X-Amz-Signature=94abffda553b1f0b024bb385c5cdaf72d86a676e6c7643092d0679df4f00bacd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT57KIZR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJk%2FgpMcBesAdLQLFEeH2gj1OxXLSUxc34pZVc2SCAwIgZm13v4g%2BKmTbCGopIG5o9cR46Fl9LeTeZWrKph7uQL0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMroJb3z20bcogIxpircA7eSr7JniFjouaGflB3kpY5vekU9xmLcRBUg4VR0OcBikD4Erjra1PJPoK4r4cGbe8rPUlA%2FfoVmf%2BdKOZvVgzdqCHUIANNineDIRk4wOYBdlirAshS4iaQUa%2BCWTTI3WfCnoVEYXzD63XBrQDtDQacLDy%2BXbIJ7IcEBPigx39zL4nISe1z8WizUXZmBrJAQrfSHwBbffAQp8UsAQlYne1jFENiG83q0Zf7KQGGD4TR8O3dCuZYKOWamqOdjZmI6wLMLGhu7yE%2Byj9ovoOSyBAHCHxvlQsn%2Fr0iOiDuCsQyQOXGzg6qOqeD50p%2FApsgy1kf0MOhBIpzAV4i62ArRJhmDccRN9EKTdoETYTi1N%2FeTZxupY36j5XSEc%2BXcFYT91fd0dGB4zshTtEx%2Fk9NEfjyHAubTUIbDWqo%2BltYR6DUhYznw6gkhDyb7rEGK6jm1qP%2BSFaz7aRvEFWrKeHrwLjJi8FxEL0udVdnrNYq6ezZSCbBHGrgMbpW6tpW62AtfIQeonqFO8TN3LRulRyv87U%2F38ppgHskDCvo55BgZYiPYVk84DEmcspNZ52SEQmoCqN6BX6NaLPdUGfMgbL35VidE%2BiFqaAUc7UvH3ES283%2FhGAClWtxmAMRJ8CQrMNyOh8AGOqUB1%2BQZsEbbgxOV%2FyxlTDwt%2FcdENB08sr7%2BaVBrGxJhv9XmWgTBFd950nmmfu36fHMc32AzkJRMEht9nvyuOD6Autk0WdyjriIOUV6tCgFYCFUMbgkog1tn6%2Ftz%2FWFM0C%2FR1dedpyg0XWck5jsWJrTxfM8WNDbqHZzmpKcsUEMZI%2FO%2BdBFvYP1Ie8VITXH2BwOS9iaZ7iX%2FxVLCuAesbd2pl13ZAVwf&X-Amz-Signature=b050a7aad35edd5f3dc5fa4fc4d62cfbe08e28c3ad5d8d4d4987a016013032bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT57KIZR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJk%2FgpMcBesAdLQLFEeH2gj1OxXLSUxc34pZVc2SCAwIgZm13v4g%2BKmTbCGopIG5o9cR46Fl9LeTeZWrKph7uQL0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMroJb3z20bcogIxpircA7eSr7JniFjouaGflB3kpY5vekU9xmLcRBUg4VR0OcBikD4Erjra1PJPoK4r4cGbe8rPUlA%2FfoVmf%2BdKOZvVgzdqCHUIANNineDIRk4wOYBdlirAshS4iaQUa%2BCWTTI3WfCnoVEYXzD63XBrQDtDQacLDy%2BXbIJ7IcEBPigx39zL4nISe1z8WizUXZmBrJAQrfSHwBbffAQp8UsAQlYne1jFENiG83q0Zf7KQGGD4TR8O3dCuZYKOWamqOdjZmI6wLMLGhu7yE%2Byj9ovoOSyBAHCHxvlQsn%2Fr0iOiDuCsQyQOXGzg6qOqeD50p%2FApsgy1kf0MOhBIpzAV4i62ArRJhmDccRN9EKTdoETYTi1N%2FeTZxupY36j5XSEc%2BXcFYT91fd0dGB4zshTtEx%2Fk9NEfjyHAubTUIbDWqo%2BltYR6DUhYznw6gkhDyb7rEGK6jm1qP%2BSFaz7aRvEFWrKeHrwLjJi8FxEL0udVdnrNYq6ezZSCbBHGrgMbpW6tpW62AtfIQeonqFO8TN3LRulRyv87U%2F38ppgHskDCvo55BgZYiPYVk84DEmcspNZ52SEQmoCqN6BX6NaLPdUGfMgbL35VidE%2BiFqaAUc7UvH3ES283%2FhGAClWtxmAMRJ8CQrMNyOh8AGOqUB1%2BQZsEbbgxOV%2FyxlTDwt%2FcdENB08sr7%2BaVBrGxJhv9XmWgTBFd950nmmfu36fHMc32AzkJRMEht9nvyuOD6Autk0WdyjriIOUV6tCgFYCFUMbgkog1tn6%2Ftz%2FWFM0C%2FR1dedpyg0XWck5jsWJrTxfM8WNDbqHZzmpKcsUEMZI%2FO%2BdBFvYP1Ie8VITXH2BwOS9iaZ7iX%2FxVLCuAesbd2pl13ZAVwf&X-Amz-Signature=4c3218282bfd7e339651e02296f09639c88e53a7a0c752581f70b647aefbcf9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT57KIZR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJk%2FgpMcBesAdLQLFEeH2gj1OxXLSUxc34pZVc2SCAwIgZm13v4g%2BKmTbCGopIG5o9cR46Fl9LeTeZWrKph7uQL0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMroJb3z20bcogIxpircA7eSr7JniFjouaGflB3kpY5vekU9xmLcRBUg4VR0OcBikD4Erjra1PJPoK4r4cGbe8rPUlA%2FfoVmf%2BdKOZvVgzdqCHUIANNineDIRk4wOYBdlirAshS4iaQUa%2BCWTTI3WfCnoVEYXzD63XBrQDtDQacLDy%2BXbIJ7IcEBPigx39zL4nISe1z8WizUXZmBrJAQrfSHwBbffAQp8UsAQlYne1jFENiG83q0Zf7KQGGD4TR8O3dCuZYKOWamqOdjZmI6wLMLGhu7yE%2Byj9ovoOSyBAHCHxvlQsn%2Fr0iOiDuCsQyQOXGzg6qOqeD50p%2FApsgy1kf0MOhBIpzAV4i62ArRJhmDccRN9EKTdoETYTi1N%2FeTZxupY36j5XSEc%2BXcFYT91fd0dGB4zshTtEx%2Fk9NEfjyHAubTUIbDWqo%2BltYR6DUhYznw6gkhDyb7rEGK6jm1qP%2BSFaz7aRvEFWrKeHrwLjJi8FxEL0udVdnrNYq6ezZSCbBHGrgMbpW6tpW62AtfIQeonqFO8TN3LRulRyv87U%2F38ppgHskDCvo55BgZYiPYVk84DEmcspNZ52SEQmoCqN6BX6NaLPdUGfMgbL35VidE%2BiFqaAUc7UvH3ES283%2FhGAClWtxmAMRJ8CQrMNyOh8AGOqUB1%2BQZsEbbgxOV%2FyxlTDwt%2FcdENB08sr7%2BaVBrGxJhv9XmWgTBFd950nmmfu36fHMc32AzkJRMEht9nvyuOD6Autk0WdyjriIOUV6tCgFYCFUMbgkog1tn6%2Ftz%2FWFM0C%2FR1dedpyg0XWck5jsWJrTxfM8WNDbqHZzmpKcsUEMZI%2FO%2BdBFvYP1Ie8VITXH2BwOS9iaZ7iX%2FxVLCuAesbd2pl13ZAVwf&X-Amz-Signature=dff9f375ba9c2047df0fd7e0d5a43a54b0f73c8e26ac8a4b0764ea0bec895c71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT57KIZR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJk%2FgpMcBesAdLQLFEeH2gj1OxXLSUxc34pZVc2SCAwIgZm13v4g%2BKmTbCGopIG5o9cR46Fl9LeTeZWrKph7uQL0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMroJb3z20bcogIxpircA7eSr7JniFjouaGflB3kpY5vekU9xmLcRBUg4VR0OcBikD4Erjra1PJPoK4r4cGbe8rPUlA%2FfoVmf%2BdKOZvVgzdqCHUIANNineDIRk4wOYBdlirAshS4iaQUa%2BCWTTI3WfCnoVEYXzD63XBrQDtDQacLDy%2BXbIJ7IcEBPigx39zL4nISe1z8WizUXZmBrJAQrfSHwBbffAQp8UsAQlYne1jFENiG83q0Zf7KQGGD4TR8O3dCuZYKOWamqOdjZmI6wLMLGhu7yE%2Byj9ovoOSyBAHCHxvlQsn%2Fr0iOiDuCsQyQOXGzg6qOqeD50p%2FApsgy1kf0MOhBIpzAV4i62ArRJhmDccRN9EKTdoETYTi1N%2FeTZxupY36j5XSEc%2BXcFYT91fd0dGB4zshTtEx%2Fk9NEfjyHAubTUIbDWqo%2BltYR6DUhYznw6gkhDyb7rEGK6jm1qP%2BSFaz7aRvEFWrKeHrwLjJi8FxEL0udVdnrNYq6ezZSCbBHGrgMbpW6tpW62AtfIQeonqFO8TN3LRulRyv87U%2F38ppgHskDCvo55BgZYiPYVk84DEmcspNZ52SEQmoCqN6BX6NaLPdUGfMgbL35VidE%2BiFqaAUc7UvH3ES283%2FhGAClWtxmAMRJ8CQrMNyOh8AGOqUB1%2BQZsEbbgxOV%2FyxlTDwt%2FcdENB08sr7%2BaVBrGxJhv9XmWgTBFd950nmmfu36fHMc32AzkJRMEht9nvyuOD6Autk0WdyjriIOUV6tCgFYCFUMbgkog1tn6%2Ftz%2FWFM0C%2FR1dedpyg0XWck5jsWJrTxfM8WNDbqHZzmpKcsUEMZI%2FO%2BdBFvYP1Ie8VITXH2BwOS9iaZ7iX%2FxVLCuAesbd2pl13ZAVwf&X-Amz-Signature=39664aee203fa3864ccb7c660cd8d1527723efed8f5848e39c137976c8c68c94&X-Amz-SignedHeaders=host&x-id=GetObject)
