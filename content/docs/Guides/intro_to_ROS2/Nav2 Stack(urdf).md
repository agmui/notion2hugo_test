---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCG2UQW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1TLnQB%2BV2Z0ozVHM%2BftuRqsLRuALJAEIhtJhrX%2F61VAiEAnBo0VqUSJp6hvAiIReXpR7wQM%2F6ygtatv9Svidz5I%2FUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2CwmFMtlsI1pG%2B6SrcA98TYur%2BBn1L4k5IwtQwPSZmRqtIx7D71jaLKpPcsTj4ex0LbvkzcCgmSGdrPgUuSvdXFLH7V5rpd1pvlTQGnJVoPbN0sSn%2Bkt9OL2JHLnygZY0REX8Fgzi4iSVJLwGobe%2BvewcQqvD%2BoleN7MexLWy0bzVmDEiaJ4XDjuGhl%2BKrHyRCXywFFn9YOiDx96OGNhVDsaV2VudVdeBNg8O5xUA0NtpO5mcN5mTtXoFNak8mPvZ9pAJ5n6iINgoGVJKqVzeR8CWpQig2OMYn9dLJc79m0vty0kSdaclFHXEPfBXUIOwPMYIowFw4VJaXPX4zzi7soo6ZM3Vd%2B3k84LeCJdispjbywFk%2FUAn31Roa%2Fh6c2ka5bwm%2BETDhp4oSzT0Q0%2FTFTqKR06ef%2F7KG61Uvqg%2FRlzTiuWtmY4CYlbKNo1opSMn1sIVfTs%2BqTh7Ve8FKHtGzRFuqYouBxtIkuCYC892Jr%2F%2BWu5n1BJT%2FmbmfJCpyc5%2Bw0lhM8mkkcAbIenHQg8kRWCunnJAXtTxCht9oT8X%2FIGd3PX3lGWqOsmghzbSZqhETtpYw%2B00cBpw%2BmIZyV9wLoStnw9XAM%2BqEM%2B8Has%2B5qE8rkuPjJrvMkFuwgSm3yg6i0uyLICbdf%2BTHMPCc%2FLwGOqUBsn21a9Eq3fLHwuW5y8CQem54jC382Y3a%2BjqK3BISdGI084wY9sKhptANSfNfXJSn%2Bhg3L%2FJ5lc%2FCadWfNvgLTd0seKGXC%2BUt6zUCrnKLCM1AyU%2BWybCCIPLBGMGd2MuMeC0Frzh6H8sw2TCoQ2SDj5mv2tFViBgA0GYKfpKRHjN%2FZhZkOY13EW8XxvNHhHZuvlmw%2BdEuNt9bB5jkR3%2BLdZPAhv93&X-Amz-Signature=c4adec6a8648dddcfecd96d66c3cc55ce05ce2cb3672022dd60c79dd5433cf95&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCG2UQW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1TLnQB%2BV2Z0ozVHM%2BftuRqsLRuALJAEIhtJhrX%2F61VAiEAnBo0VqUSJp6hvAiIReXpR7wQM%2F6ygtatv9Svidz5I%2FUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2CwmFMtlsI1pG%2B6SrcA98TYur%2BBn1L4k5IwtQwPSZmRqtIx7D71jaLKpPcsTj4ex0LbvkzcCgmSGdrPgUuSvdXFLH7V5rpd1pvlTQGnJVoPbN0sSn%2Bkt9OL2JHLnygZY0REX8Fgzi4iSVJLwGobe%2BvewcQqvD%2BoleN7MexLWy0bzVmDEiaJ4XDjuGhl%2BKrHyRCXywFFn9YOiDx96OGNhVDsaV2VudVdeBNg8O5xUA0NtpO5mcN5mTtXoFNak8mPvZ9pAJ5n6iINgoGVJKqVzeR8CWpQig2OMYn9dLJc79m0vty0kSdaclFHXEPfBXUIOwPMYIowFw4VJaXPX4zzi7soo6ZM3Vd%2B3k84LeCJdispjbywFk%2FUAn31Roa%2Fh6c2ka5bwm%2BETDhp4oSzT0Q0%2FTFTqKR06ef%2F7KG61Uvqg%2FRlzTiuWtmY4CYlbKNo1opSMn1sIVfTs%2BqTh7Ve8FKHtGzRFuqYouBxtIkuCYC892Jr%2F%2BWu5n1BJT%2FmbmfJCpyc5%2Bw0lhM8mkkcAbIenHQg8kRWCunnJAXtTxCht9oT8X%2FIGd3PX3lGWqOsmghzbSZqhETtpYw%2B00cBpw%2BmIZyV9wLoStnw9XAM%2BqEM%2B8Has%2B5qE8rkuPjJrvMkFuwgSm3yg6i0uyLICbdf%2BTHMPCc%2FLwGOqUBsn21a9Eq3fLHwuW5y8CQem54jC382Y3a%2BjqK3BISdGI084wY9sKhptANSfNfXJSn%2Bhg3L%2FJ5lc%2FCadWfNvgLTd0seKGXC%2BUt6zUCrnKLCM1AyU%2BWybCCIPLBGMGd2MuMeC0Frzh6H8sw2TCoQ2SDj5mv2tFViBgA0GYKfpKRHjN%2FZhZkOY13EW8XxvNHhHZuvlmw%2BdEuNt9bB5jkR3%2BLdZPAhv93&X-Amz-Signature=8ae70e6813c2839046ecc2dbd27ccb8701dbdc75164c5a7f6d6adf7e61bf4d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCG2UQW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1TLnQB%2BV2Z0ozVHM%2BftuRqsLRuALJAEIhtJhrX%2F61VAiEAnBo0VqUSJp6hvAiIReXpR7wQM%2F6ygtatv9Svidz5I%2FUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2CwmFMtlsI1pG%2B6SrcA98TYur%2BBn1L4k5IwtQwPSZmRqtIx7D71jaLKpPcsTj4ex0LbvkzcCgmSGdrPgUuSvdXFLH7V5rpd1pvlTQGnJVoPbN0sSn%2Bkt9OL2JHLnygZY0REX8Fgzi4iSVJLwGobe%2BvewcQqvD%2BoleN7MexLWy0bzVmDEiaJ4XDjuGhl%2BKrHyRCXywFFn9YOiDx96OGNhVDsaV2VudVdeBNg8O5xUA0NtpO5mcN5mTtXoFNak8mPvZ9pAJ5n6iINgoGVJKqVzeR8CWpQig2OMYn9dLJc79m0vty0kSdaclFHXEPfBXUIOwPMYIowFw4VJaXPX4zzi7soo6ZM3Vd%2B3k84LeCJdispjbywFk%2FUAn31Roa%2Fh6c2ka5bwm%2BETDhp4oSzT0Q0%2FTFTqKR06ef%2F7KG61Uvqg%2FRlzTiuWtmY4CYlbKNo1opSMn1sIVfTs%2BqTh7Ve8FKHtGzRFuqYouBxtIkuCYC892Jr%2F%2BWu5n1BJT%2FmbmfJCpyc5%2Bw0lhM8mkkcAbIenHQg8kRWCunnJAXtTxCht9oT8X%2FIGd3PX3lGWqOsmghzbSZqhETtpYw%2B00cBpw%2BmIZyV9wLoStnw9XAM%2BqEM%2B8Has%2B5qE8rkuPjJrvMkFuwgSm3yg6i0uyLICbdf%2BTHMPCc%2FLwGOqUBsn21a9Eq3fLHwuW5y8CQem54jC382Y3a%2BjqK3BISdGI084wY9sKhptANSfNfXJSn%2Bhg3L%2FJ5lc%2FCadWfNvgLTd0seKGXC%2BUt6zUCrnKLCM1AyU%2BWybCCIPLBGMGd2MuMeC0Frzh6H8sw2TCoQ2SDj5mv2tFViBgA0GYKfpKRHjN%2FZhZkOY13EW8XxvNHhHZuvlmw%2BdEuNt9bB5jkR3%2BLdZPAhv93&X-Amz-Signature=10b64494b8e6c2269a940d2b7ceea04f591d2da81a26e4bbdab492cf9b7d1184&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCG2UQW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1TLnQB%2BV2Z0ozVHM%2BftuRqsLRuALJAEIhtJhrX%2F61VAiEAnBo0VqUSJp6hvAiIReXpR7wQM%2F6ygtatv9Svidz5I%2FUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2CwmFMtlsI1pG%2B6SrcA98TYur%2BBn1L4k5IwtQwPSZmRqtIx7D71jaLKpPcsTj4ex0LbvkzcCgmSGdrPgUuSvdXFLH7V5rpd1pvlTQGnJVoPbN0sSn%2Bkt9OL2JHLnygZY0REX8Fgzi4iSVJLwGobe%2BvewcQqvD%2BoleN7MexLWy0bzVmDEiaJ4XDjuGhl%2BKrHyRCXywFFn9YOiDx96OGNhVDsaV2VudVdeBNg8O5xUA0NtpO5mcN5mTtXoFNak8mPvZ9pAJ5n6iINgoGVJKqVzeR8CWpQig2OMYn9dLJc79m0vty0kSdaclFHXEPfBXUIOwPMYIowFw4VJaXPX4zzi7soo6ZM3Vd%2B3k84LeCJdispjbywFk%2FUAn31Roa%2Fh6c2ka5bwm%2BETDhp4oSzT0Q0%2FTFTqKR06ef%2F7KG61Uvqg%2FRlzTiuWtmY4CYlbKNo1opSMn1sIVfTs%2BqTh7Ve8FKHtGzRFuqYouBxtIkuCYC892Jr%2F%2BWu5n1BJT%2FmbmfJCpyc5%2Bw0lhM8mkkcAbIenHQg8kRWCunnJAXtTxCht9oT8X%2FIGd3PX3lGWqOsmghzbSZqhETtpYw%2B00cBpw%2BmIZyV9wLoStnw9XAM%2BqEM%2B8Has%2B5qE8rkuPjJrvMkFuwgSm3yg6i0uyLICbdf%2BTHMPCc%2FLwGOqUBsn21a9Eq3fLHwuW5y8CQem54jC382Y3a%2BjqK3BISdGI084wY9sKhptANSfNfXJSn%2Bhg3L%2FJ5lc%2FCadWfNvgLTd0seKGXC%2BUt6zUCrnKLCM1AyU%2BWybCCIPLBGMGd2MuMeC0Frzh6H8sw2TCoQ2SDj5mv2tFViBgA0GYKfpKRHjN%2FZhZkOY13EW8XxvNHhHZuvlmw%2BdEuNt9bB5jkR3%2BLdZPAhv93&X-Amz-Signature=62abb36cbdc86e55bf21c56d3e75045bef348804bd557ce81cad520a7c20e296&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCG2UQW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1TLnQB%2BV2Z0ozVHM%2BftuRqsLRuALJAEIhtJhrX%2F61VAiEAnBo0VqUSJp6hvAiIReXpR7wQM%2F6ygtatv9Svidz5I%2FUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2CwmFMtlsI1pG%2B6SrcA98TYur%2BBn1L4k5IwtQwPSZmRqtIx7D71jaLKpPcsTj4ex0LbvkzcCgmSGdrPgUuSvdXFLH7V5rpd1pvlTQGnJVoPbN0sSn%2Bkt9OL2JHLnygZY0REX8Fgzi4iSVJLwGobe%2BvewcQqvD%2BoleN7MexLWy0bzVmDEiaJ4XDjuGhl%2BKrHyRCXywFFn9YOiDx96OGNhVDsaV2VudVdeBNg8O5xUA0NtpO5mcN5mTtXoFNak8mPvZ9pAJ5n6iINgoGVJKqVzeR8CWpQig2OMYn9dLJc79m0vty0kSdaclFHXEPfBXUIOwPMYIowFw4VJaXPX4zzi7soo6ZM3Vd%2B3k84LeCJdispjbywFk%2FUAn31Roa%2Fh6c2ka5bwm%2BETDhp4oSzT0Q0%2FTFTqKR06ef%2F7KG61Uvqg%2FRlzTiuWtmY4CYlbKNo1opSMn1sIVfTs%2BqTh7Ve8FKHtGzRFuqYouBxtIkuCYC892Jr%2F%2BWu5n1BJT%2FmbmfJCpyc5%2Bw0lhM8mkkcAbIenHQg8kRWCunnJAXtTxCht9oT8X%2FIGd3PX3lGWqOsmghzbSZqhETtpYw%2B00cBpw%2BmIZyV9wLoStnw9XAM%2BqEM%2B8Has%2B5qE8rkuPjJrvMkFuwgSm3yg6i0uyLICbdf%2BTHMPCc%2FLwGOqUBsn21a9Eq3fLHwuW5y8CQem54jC382Y3a%2BjqK3BISdGI084wY9sKhptANSfNfXJSn%2Bhg3L%2FJ5lc%2FCadWfNvgLTd0seKGXC%2BUt6zUCrnKLCM1AyU%2BWybCCIPLBGMGd2MuMeC0Frzh6H8sw2TCoQ2SDj5mv2tFViBgA0GYKfpKRHjN%2FZhZkOY13EW8XxvNHhHZuvlmw%2BdEuNt9bB5jkR3%2BLdZPAhv93&X-Amz-Signature=6c2ed994947c723c19f5d5e05fd36db834931de3242523b8187d3a1a7513ddc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGCG2UQW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1TLnQB%2BV2Z0ozVHM%2BftuRqsLRuALJAEIhtJhrX%2F61VAiEAnBo0VqUSJp6hvAiIReXpR7wQM%2F6ygtatv9Svidz5I%2FUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2CwmFMtlsI1pG%2B6SrcA98TYur%2BBn1L4k5IwtQwPSZmRqtIx7D71jaLKpPcsTj4ex0LbvkzcCgmSGdrPgUuSvdXFLH7V5rpd1pvlTQGnJVoPbN0sSn%2Bkt9OL2JHLnygZY0REX8Fgzi4iSVJLwGobe%2BvewcQqvD%2BoleN7MexLWy0bzVmDEiaJ4XDjuGhl%2BKrHyRCXywFFn9YOiDx96OGNhVDsaV2VudVdeBNg8O5xUA0NtpO5mcN5mTtXoFNak8mPvZ9pAJ5n6iINgoGVJKqVzeR8CWpQig2OMYn9dLJc79m0vty0kSdaclFHXEPfBXUIOwPMYIowFw4VJaXPX4zzi7soo6ZM3Vd%2B3k84LeCJdispjbywFk%2FUAn31Roa%2Fh6c2ka5bwm%2BETDhp4oSzT0Q0%2FTFTqKR06ef%2F7KG61Uvqg%2FRlzTiuWtmY4CYlbKNo1opSMn1sIVfTs%2BqTh7Ve8FKHtGzRFuqYouBxtIkuCYC892Jr%2F%2BWu5n1BJT%2FmbmfJCpyc5%2Bw0lhM8mkkcAbIenHQg8kRWCunnJAXtTxCht9oT8X%2FIGd3PX3lGWqOsmghzbSZqhETtpYw%2B00cBpw%2BmIZyV9wLoStnw9XAM%2BqEM%2B8Has%2B5qE8rkuPjJrvMkFuwgSm3yg6i0uyLICbdf%2BTHMPCc%2FLwGOqUBsn21a9Eq3fLHwuW5y8CQem54jC382Y3a%2BjqK3BISdGI084wY9sKhptANSfNfXJSn%2Bhg3L%2FJ5lc%2FCadWfNvgLTd0seKGXC%2BUt6zUCrnKLCM1AyU%2BWybCCIPLBGMGd2MuMeC0Frzh6H8sw2TCoQ2SDj5mv2tFViBgA0GYKfpKRHjN%2FZhZkOY13EW8XxvNHhHZuvlmw%2BdEuNt9bB5jkR3%2BLdZPAhv93&X-Amz-Signature=93c2037b32b4b39397e92da8f29f78eea00a82ffc6edede461aeecfadf587b68&X-Amz-SignedHeaders=host&x-id=GetObject)
