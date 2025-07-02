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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGQ4G2I%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAnZL%2Fjvy%2FQ7B7BMVu4BU5%2ForMdpGDVi7Jzd7Cl03hAiEAgYJE6abcBJ%2BpeuXBE7IQhyMMPGc5iZCCyGCEP4mAG98qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILu448eWeCayQFe8SrcA%2Bc%2BF8%2BUgkA0n1V3MtoDkJ1uBVU74j5J0T6SH1I619PaDWrEuqTxw4b8jDoNgf6ubQJcMd3z2UVyYbnNkzHQ%2FrhvDW6%2BuM9LTQGnDfxs4O9if7B6H3JyDZGbD4q4KSdwHSLrw%2BFtbTQuTPwbcQcGw8nANTWLvFKUc8NcyquDxJqLSsNjtiWloncccwfjNJHdHe2nwhYSGa0dvxd4VaWIXHkwodJHPySlbQMAHxnPkKldV0Gmy9cUAWkljK%2BEn%2FvvAq1F%2BprHwT0TcRfD9WGkyu7ItGoKeX3Ste9K3o2HhIbokdUJQmVIKiv31eC5QX%2B%2Bg4i3KeJ1UZDe1aju%2FxUb9kTKN3RnSjasf66E18fcfwdM8%2Fb35iMppgPFxW0w6oIyG2p7pq%2FPiCwrJMqllBUpN5ymcbyNZhx80AB7hgZaPB5qIiRlnLRZxmcBBZaj1jkw5HESlSCG8S94Ef%2Br4Ng48iGUFqhQsYaDbnSnbL8VBkIjrkJUgDnc85O8ZnL2IF9iTdoI7Oc0JgC9l2w3ZGmDevZrL5%2F0eFPqEX1BdtIlc%2BXKxwgh39FLCL7hDmj5jfLV9wJsdZuwZtTqaOiZd55k9fed0YsvfrTvbvIGFaaX3HLMY5ZQXzdBAstjQXUGMI70kcMGOqUBZprPZfnNg4IGAHX5TBtEjR11KpeNEyVRvnEAuCEpqPEaWd5T4Q8phwIpZHd7JHKlP0A%2FWyeJli5Rei%2B95rMonlFNRVA6XMqVmCsuioJp%2Fm5PRtEvWLp6jWyPPlUoOkUbDZq7xDzlO%2BNPjjdjhDSy4hJQwENmrRSG1YQ%2BkQbHO3HC5NWGTBkH1vu0ftihpSbThv%2Bni9z4glKhJI6djM1in9qFXVhY&X-Amz-Signature=01d80a2f13197fea2126fa9625eb2317d575afb6fb064e0808a070ea8f566f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGQ4G2I%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAnZL%2Fjvy%2FQ7B7BMVu4BU5%2ForMdpGDVi7Jzd7Cl03hAiEAgYJE6abcBJ%2BpeuXBE7IQhyMMPGc5iZCCyGCEP4mAG98qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILu448eWeCayQFe8SrcA%2Bc%2BF8%2BUgkA0n1V3MtoDkJ1uBVU74j5J0T6SH1I619PaDWrEuqTxw4b8jDoNgf6ubQJcMd3z2UVyYbnNkzHQ%2FrhvDW6%2BuM9LTQGnDfxs4O9if7B6H3JyDZGbD4q4KSdwHSLrw%2BFtbTQuTPwbcQcGw8nANTWLvFKUc8NcyquDxJqLSsNjtiWloncccwfjNJHdHe2nwhYSGa0dvxd4VaWIXHkwodJHPySlbQMAHxnPkKldV0Gmy9cUAWkljK%2BEn%2FvvAq1F%2BprHwT0TcRfD9WGkyu7ItGoKeX3Ste9K3o2HhIbokdUJQmVIKiv31eC5QX%2B%2Bg4i3KeJ1UZDe1aju%2FxUb9kTKN3RnSjasf66E18fcfwdM8%2Fb35iMppgPFxW0w6oIyG2p7pq%2FPiCwrJMqllBUpN5ymcbyNZhx80AB7hgZaPB5qIiRlnLRZxmcBBZaj1jkw5HESlSCG8S94Ef%2Br4Ng48iGUFqhQsYaDbnSnbL8VBkIjrkJUgDnc85O8ZnL2IF9iTdoI7Oc0JgC9l2w3ZGmDevZrL5%2F0eFPqEX1BdtIlc%2BXKxwgh39FLCL7hDmj5jfLV9wJsdZuwZtTqaOiZd55k9fed0YsvfrTvbvIGFaaX3HLMY5ZQXzdBAstjQXUGMI70kcMGOqUBZprPZfnNg4IGAHX5TBtEjR11KpeNEyVRvnEAuCEpqPEaWd5T4Q8phwIpZHd7JHKlP0A%2FWyeJli5Rei%2B95rMonlFNRVA6XMqVmCsuioJp%2Fm5PRtEvWLp6jWyPPlUoOkUbDZq7xDzlO%2BNPjjdjhDSy4hJQwENmrRSG1YQ%2BkQbHO3HC5NWGTBkH1vu0ftihpSbThv%2Bni9z4glKhJI6djM1in9qFXVhY&X-Amz-Signature=95a856747554a2b289979961bcaae7de6a695175f5980b54bcf282625278b86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGQ4G2I%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAnZL%2Fjvy%2FQ7B7BMVu4BU5%2ForMdpGDVi7Jzd7Cl03hAiEAgYJE6abcBJ%2BpeuXBE7IQhyMMPGc5iZCCyGCEP4mAG98qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILu448eWeCayQFe8SrcA%2Bc%2BF8%2BUgkA0n1V3MtoDkJ1uBVU74j5J0T6SH1I619PaDWrEuqTxw4b8jDoNgf6ubQJcMd3z2UVyYbnNkzHQ%2FrhvDW6%2BuM9LTQGnDfxs4O9if7B6H3JyDZGbD4q4KSdwHSLrw%2BFtbTQuTPwbcQcGw8nANTWLvFKUc8NcyquDxJqLSsNjtiWloncccwfjNJHdHe2nwhYSGa0dvxd4VaWIXHkwodJHPySlbQMAHxnPkKldV0Gmy9cUAWkljK%2BEn%2FvvAq1F%2BprHwT0TcRfD9WGkyu7ItGoKeX3Ste9K3o2HhIbokdUJQmVIKiv31eC5QX%2B%2Bg4i3KeJ1UZDe1aju%2FxUb9kTKN3RnSjasf66E18fcfwdM8%2Fb35iMppgPFxW0w6oIyG2p7pq%2FPiCwrJMqllBUpN5ymcbyNZhx80AB7hgZaPB5qIiRlnLRZxmcBBZaj1jkw5HESlSCG8S94Ef%2Br4Ng48iGUFqhQsYaDbnSnbL8VBkIjrkJUgDnc85O8ZnL2IF9iTdoI7Oc0JgC9l2w3ZGmDevZrL5%2F0eFPqEX1BdtIlc%2BXKxwgh39FLCL7hDmj5jfLV9wJsdZuwZtTqaOiZd55k9fed0YsvfrTvbvIGFaaX3HLMY5ZQXzdBAstjQXUGMI70kcMGOqUBZprPZfnNg4IGAHX5TBtEjR11KpeNEyVRvnEAuCEpqPEaWd5T4Q8phwIpZHd7JHKlP0A%2FWyeJli5Rei%2B95rMonlFNRVA6XMqVmCsuioJp%2Fm5PRtEvWLp6jWyPPlUoOkUbDZq7xDzlO%2BNPjjdjhDSy4hJQwENmrRSG1YQ%2BkQbHO3HC5NWGTBkH1vu0ftihpSbThv%2Bni9z4glKhJI6djM1in9qFXVhY&X-Amz-Signature=2d23da6a0e7b0583b5611fdf6c0055db83285500fef4ae1f82b7b2e17e6bcceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGQ4G2I%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAnZL%2Fjvy%2FQ7B7BMVu4BU5%2ForMdpGDVi7Jzd7Cl03hAiEAgYJE6abcBJ%2BpeuXBE7IQhyMMPGc5iZCCyGCEP4mAG98qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILu448eWeCayQFe8SrcA%2Bc%2BF8%2BUgkA0n1V3MtoDkJ1uBVU74j5J0T6SH1I619PaDWrEuqTxw4b8jDoNgf6ubQJcMd3z2UVyYbnNkzHQ%2FrhvDW6%2BuM9LTQGnDfxs4O9if7B6H3JyDZGbD4q4KSdwHSLrw%2BFtbTQuTPwbcQcGw8nANTWLvFKUc8NcyquDxJqLSsNjtiWloncccwfjNJHdHe2nwhYSGa0dvxd4VaWIXHkwodJHPySlbQMAHxnPkKldV0Gmy9cUAWkljK%2BEn%2FvvAq1F%2BprHwT0TcRfD9WGkyu7ItGoKeX3Ste9K3o2HhIbokdUJQmVIKiv31eC5QX%2B%2Bg4i3KeJ1UZDe1aju%2FxUb9kTKN3RnSjasf66E18fcfwdM8%2Fb35iMppgPFxW0w6oIyG2p7pq%2FPiCwrJMqllBUpN5ymcbyNZhx80AB7hgZaPB5qIiRlnLRZxmcBBZaj1jkw5HESlSCG8S94Ef%2Br4Ng48iGUFqhQsYaDbnSnbL8VBkIjrkJUgDnc85O8ZnL2IF9iTdoI7Oc0JgC9l2w3ZGmDevZrL5%2F0eFPqEX1BdtIlc%2BXKxwgh39FLCL7hDmj5jfLV9wJsdZuwZtTqaOiZd55k9fed0YsvfrTvbvIGFaaX3HLMY5ZQXzdBAstjQXUGMI70kcMGOqUBZprPZfnNg4IGAHX5TBtEjR11KpeNEyVRvnEAuCEpqPEaWd5T4Q8phwIpZHd7JHKlP0A%2FWyeJli5Rei%2B95rMonlFNRVA6XMqVmCsuioJp%2Fm5PRtEvWLp6jWyPPlUoOkUbDZq7xDzlO%2BNPjjdjhDSy4hJQwENmrRSG1YQ%2BkQbHO3HC5NWGTBkH1vu0ftihpSbThv%2Bni9z4glKhJI6djM1in9qFXVhY&X-Amz-Signature=5bb0b5590932ec3a187fc5802a3c1ed89280bf08373b90d1f731cdf355e9ddf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGQ4G2I%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAnZL%2Fjvy%2FQ7B7BMVu4BU5%2ForMdpGDVi7Jzd7Cl03hAiEAgYJE6abcBJ%2BpeuXBE7IQhyMMPGc5iZCCyGCEP4mAG98qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILu448eWeCayQFe8SrcA%2Bc%2BF8%2BUgkA0n1V3MtoDkJ1uBVU74j5J0T6SH1I619PaDWrEuqTxw4b8jDoNgf6ubQJcMd3z2UVyYbnNkzHQ%2FrhvDW6%2BuM9LTQGnDfxs4O9if7B6H3JyDZGbD4q4KSdwHSLrw%2BFtbTQuTPwbcQcGw8nANTWLvFKUc8NcyquDxJqLSsNjtiWloncccwfjNJHdHe2nwhYSGa0dvxd4VaWIXHkwodJHPySlbQMAHxnPkKldV0Gmy9cUAWkljK%2BEn%2FvvAq1F%2BprHwT0TcRfD9WGkyu7ItGoKeX3Ste9K3o2HhIbokdUJQmVIKiv31eC5QX%2B%2Bg4i3KeJ1UZDe1aju%2FxUb9kTKN3RnSjasf66E18fcfwdM8%2Fb35iMppgPFxW0w6oIyG2p7pq%2FPiCwrJMqllBUpN5ymcbyNZhx80AB7hgZaPB5qIiRlnLRZxmcBBZaj1jkw5HESlSCG8S94Ef%2Br4Ng48iGUFqhQsYaDbnSnbL8VBkIjrkJUgDnc85O8ZnL2IF9iTdoI7Oc0JgC9l2w3ZGmDevZrL5%2F0eFPqEX1BdtIlc%2BXKxwgh39FLCL7hDmj5jfLV9wJsdZuwZtTqaOiZd55k9fed0YsvfrTvbvIGFaaX3HLMY5ZQXzdBAstjQXUGMI70kcMGOqUBZprPZfnNg4IGAHX5TBtEjR11KpeNEyVRvnEAuCEpqPEaWd5T4Q8phwIpZHd7JHKlP0A%2FWyeJli5Rei%2B95rMonlFNRVA6XMqVmCsuioJp%2Fm5PRtEvWLp6jWyPPlUoOkUbDZq7xDzlO%2BNPjjdjhDSy4hJQwENmrRSG1YQ%2BkQbHO3HC5NWGTBkH1vu0ftihpSbThv%2Bni9z4glKhJI6djM1in9qFXVhY&X-Amz-Signature=b21dcc45ccd5eaadd9205059e411c97f47ea2e3677a62125ea5ade1716da4eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGQ4G2I%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsAnZL%2Fjvy%2FQ7B7BMVu4BU5%2ForMdpGDVi7Jzd7Cl03hAiEAgYJE6abcBJ%2BpeuXBE7IQhyMMPGc5iZCCyGCEP4mAG98qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILu448eWeCayQFe8SrcA%2Bc%2BF8%2BUgkA0n1V3MtoDkJ1uBVU74j5J0T6SH1I619PaDWrEuqTxw4b8jDoNgf6ubQJcMd3z2UVyYbnNkzHQ%2FrhvDW6%2BuM9LTQGnDfxs4O9if7B6H3JyDZGbD4q4KSdwHSLrw%2BFtbTQuTPwbcQcGw8nANTWLvFKUc8NcyquDxJqLSsNjtiWloncccwfjNJHdHe2nwhYSGa0dvxd4VaWIXHkwodJHPySlbQMAHxnPkKldV0Gmy9cUAWkljK%2BEn%2FvvAq1F%2BprHwT0TcRfD9WGkyu7ItGoKeX3Ste9K3o2HhIbokdUJQmVIKiv31eC5QX%2B%2Bg4i3KeJ1UZDe1aju%2FxUb9kTKN3RnSjasf66E18fcfwdM8%2Fb35iMppgPFxW0w6oIyG2p7pq%2FPiCwrJMqllBUpN5ymcbyNZhx80AB7hgZaPB5qIiRlnLRZxmcBBZaj1jkw5HESlSCG8S94Ef%2Br4Ng48iGUFqhQsYaDbnSnbL8VBkIjrkJUgDnc85O8ZnL2IF9iTdoI7Oc0JgC9l2w3ZGmDevZrL5%2F0eFPqEX1BdtIlc%2BXKxwgh39FLCL7hDmj5jfLV9wJsdZuwZtTqaOiZd55k9fed0YsvfrTvbvIGFaaX3HLMY5ZQXzdBAstjQXUGMI70kcMGOqUBZprPZfnNg4IGAHX5TBtEjR11KpeNEyVRvnEAuCEpqPEaWd5T4Q8phwIpZHd7JHKlP0A%2FWyeJli5Rei%2B95rMonlFNRVA6XMqVmCsuioJp%2Fm5PRtEvWLp6jWyPPlUoOkUbDZq7xDzlO%2BNPjjdjhDSy4hJQwENmrRSG1YQ%2BkQbHO3HC5NWGTBkH1vu0ftihpSbThv%2Bni9z4glKhJI6djM1in9qFXVhY&X-Amz-Signature=8e8948ec3cc903cb0566f11f158e8d57baa65a268b89e6c9b43f9e181560ca1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
