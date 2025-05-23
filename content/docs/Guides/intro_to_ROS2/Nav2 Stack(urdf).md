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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNLLFAQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEgX7jqIhrS0crxoZkQ9FA6DKSqSFSP8vI7ajd8RlKmMAiEAgt6Sd9wFz4ix%2BY7k6%2BDpgS78HRFdX%2FlzqwLdTzpAIjwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES2NaAbZZJChlzScyrcA7r7u%2BiIF6AZuNN1XMoLgZlFlfDVT4keP7NOY8jJXoJN4rq0VaUoMlqI1YHRenrUqyqsWmOrOkJpC9QVNaG%2FtQFZrlJbv2uC7QwYQQSZDl8LH2ANKxc0zyaerCrovVtgiZemUbm7ZrB%2F%2BsoYe5ykOFvEni6Y%2FjHR5fCb82va2ybm1WsPqWHbbzf%2BPvLkiesD%2BWVrXw97q7SBA9GA0IEb4ZaUBes74V5niQbdnh8UIZRI%2FsAcsiIHfhiZ3BSzRuZeMGPo3m4l2XNjdpEpHRACuCI0S1%2B4RD3MVD0DOXBxs3%2FHfuPkTqgdUiD1lJLzXLLvbHpsX%2FFnMpR9LTjtwwNmNUY0mR9jzIB3teJm%2FxRqQVz6LwFwWMMHS2GpyCr2VVrR5pXY9FobEo7yyZnQ070ALFko%2BbIQUWXj5bF%2BnYE0nLm14%2B%2BakBkm2Z1DBPBvb1HU63VspmzUv6yh5WW%2BlgxFfgS7jy3ighcTAOOHQZpyvvNfc%2Bu4K1%2FzSy8%2FzYREDCm83tVZkcAkYCEXOSKodUMXYMc6kmsfat70kppk%2ByL52jEB9xV0cw6JJBivLzM154b%2BCKxFqWVSYh3h6vyk3tFpLOE7ATXiHswr58dThPkrGdwSQ2aR%2B6sdDcal0shAMLPCv8EGOqUB%2F77uE9TAuFMj0U3sDOnefwiUSoPMfnvAouQKaajSTxl34Tbbn9ySjaB8cjyNRa1AF5c87VYCBSHw1be8p01PpAifRRNXI6rKDzSe3gmxmxErT1F6wKX7hiXVIGQ8ykfO1jQs4aDL0ziustol%2FDVAop%2F%2Bw1HkjOouGn0crH3ZT97CdUREirAI7KufbGUE%2FuBakBwlPInilaSiq0%2FoI2M3tNNsnYMe&X-Amz-Signature=25b26b48244e24b5986656f72a53cfbcf415bcc6af9bd698f44e3f60ea7345eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNLLFAQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEgX7jqIhrS0crxoZkQ9FA6DKSqSFSP8vI7ajd8RlKmMAiEAgt6Sd9wFz4ix%2BY7k6%2BDpgS78HRFdX%2FlzqwLdTzpAIjwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES2NaAbZZJChlzScyrcA7r7u%2BiIF6AZuNN1XMoLgZlFlfDVT4keP7NOY8jJXoJN4rq0VaUoMlqI1YHRenrUqyqsWmOrOkJpC9QVNaG%2FtQFZrlJbv2uC7QwYQQSZDl8LH2ANKxc0zyaerCrovVtgiZemUbm7ZrB%2F%2BsoYe5ykOFvEni6Y%2FjHR5fCb82va2ybm1WsPqWHbbzf%2BPvLkiesD%2BWVrXw97q7SBA9GA0IEb4ZaUBes74V5niQbdnh8UIZRI%2FsAcsiIHfhiZ3BSzRuZeMGPo3m4l2XNjdpEpHRACuCI0S1%2B4RD3MVD0DOXBxs3%2FHfuPkTqgdUiD1lJLzXLLvbHpsX%2FFnMpR9LTjtwwNmNUY0mR9jzIB3teJm%2FxRqQVz6LwFwWMMHS2GpyCr2VVrR5pXY9FobEo7yyZnQ070ALFko%2BbIQUWXj5bF%2BnYE0nLm14%2B%2BakBkm2Z1DBPBvb1HU63VspmzUv6yh5WW%2BlgxFfgS7jy3ighcTAOOHQZpyvvNfc%2Bu4K1%2FzSy8%2FzYREDCm83tVZkcAkYCEXOSKodUMXYMc6kmsfat70kppk%2ByL52jEB9xV0cw6JJBivLzM154b%2BCKxFqWVSYh3h6vyk3tFpLOE7ATXiHswr58dThPkrGdwSQ2aR%2B6sdDcal0shAMLPCv8EGOqUB%2F77uE9TAuFMj0U3sDOnefwiUSoPMfnvAouQKaajSTxl34Tbbn9ySjaB8cjyNRa1AF5c87VYCBSHw1be8p01PpAifRRNXI6rKDzSe3gmxmxErT1F6wKX7hiXVIGQ8ykfO1jQs4aDL0ziustol%2FDVAop%2F%2Bw1HkjOouGn0crH3ZT97CdUREirAI7KufbGUE%2FuBakBwlPInilaSiq0%2FoI2M3tNNsnYMe&X-Amz-Signature=e2240e83d8953b41dbe12ad35f84e083e8b3ecedabd73ae3415fc52148d239ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNLLFAQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEgX7jqIhrS0crxoZkQ9FA6DKSqSFSP8vI7ajd8RlKmMAiEAgt6Sd9wFz4ix%2BY7k6%2BDpgS78HRFdX%2FlzqwLdTzpAIjwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES2NaAbZZJChlzScyrcA7r7u%2BiIF6AZuNN1XMoLgZlFlfDVT4keP7NOY8jJXoJN4rq0VaUoMlqI1YHRenrUqyqsWmOrOkJpC9QVNaG%2FtQFZrlJbv2uC7QwYQQSZDl8LH2ANKxc0zyaerCrovVtgiZemUbm7ZrB%2F%2BsoYe5ykOFvEni6Y%2FjHR5fCb82va2ybm1WsPqWHbbzf%2BPvLkiesD%2BWVrXw97q7SBA9GA0IEb4ZaUBes74V5niQbdnh8UIZRI%2FsAcsiIHfhiZ3BSzRuZeMGPo3m4l2XNjdpEpHRACuCI0S1%2B4RD3MVD0DOXBxs3%2FHfuPkTqgdUiD1lJLzXLLvbHpsX%2FFnMpR9LTjtwwNmNUY0mR9jzIB3teJm%2FxRqQVz6LwFwWMMHS2GpyCr2VVrR5pXY9FobEo7yyZnQ070ALFko%2BbIQUWXj5bF%2BnYE0nLm14%2B%2BakBkm2Z1DBPBvb1HU63VspmzUv6yh5WW%2BlgxFfgS7jy3ighcTAOOHQZpyvvNfc%2Bu4K1%2FzSy8%2FzYREDCm83tVZkcAkYCEXOSKodUMXYMc6kmsfat70kppk%2ByL52jEB9xV0cw6JJBivLzM154b%2BCKxFqWVSYh3h6vyk3tFpLOE7ATXiHswr58dThPkrGdwSQ2aR%2B6sdDcal0shAMLPCv8EGOqUB%2F77uE9TAuFMj0U3sDOnefwiUSoPMfnvAouQKaajSTxl34Tbbn9ySjaB8cjyNRa1AF5c87VYCBSHw1be8p01PpAifRRNXI6rKDzSe3gmxmxErT1F6wKX7hiXVIGQ8ykfO1jQs4aDL0ziustol%2FDVAop%2F%2Bw1HkjOouGn0crH3ZT97CdUREirAI7KufbGUE%2FuBakBwlPInilaSiq0%2FoI2M3tNNsnYMe&X-Amz-Signature=dfe5dc78a31890815e5658b64bddf59ed93ac655dec943fffed2efee65bb91df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNLLFAQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEgX7jqIhrS0crxoZkQ9FA6DKSqSFSP8vI7ajd8RlKmMAiEAgt6Sd9wFz4ix%2BY7k6%2BDpgS78HRFdX%2FlzqwLdTzpAIjwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES2NaAbZZJChlzScyrcA7r7u%2BiIF6AZuNN1XMoLgZlFlfDVT4keP7NOY8jJXoJN4rq0VaUoMlqI1YHRenrUqyqsWmOrOkJpC9QVNaG%2FtQFZrlJbv2uC7QwYQQSZDl8LH2ANKxc0zyaerCrovVtgiZemUbm7ZrB%2F%2BsoYe5ykOFvEni6Y%2FjHR5fCb82va2ybm1WsPqWHbbzf%2BPvLkiesD%2BWVrXw97q7SBA9GA0IEb4ZaUBes74V5niQbdnh8UIZRI%2FsAcsiIHfhiZ3BSzRuZeMGPo3m4l2XNjdpEpHRACuCI0S1%2B4RD3MVD0DOXBxs3%2FHfuPkTqgdUiD1lJLzXLLvbHpsX%2FFnMpR9LTjtwwNmNUY0mR9jzIB3teJm%2FxRqQVz6LwFwWMMHS2GpyCr2VVrR5pXY9FobEo7yyZnQ070ALFko%2BbIQUWXj5bF%2BnYE0nLm14%2B%2BakBkm2Z1DBPBvb1HU63VspmzUv6yh5WW%2BlgxFfgS7jy3ighcTAOOHQZpyvvNfc%2Bu4K1%2FzSy8%2FzYREDCm83tVZkcAkYCEXOSKodUMXYMc6kmsfat70kppk%2ByL52jEB9xV0cw6JJBivLzM154b%2BCKxFqWVSYh3h6vyk3tFpLOE7ATXiHswr58dThPkrGdwSQ2aR%2B6sdDcal0shAMLPCv8EGOqUB%2F77uE9TAuFMj0U3sDOnefwiUSoPMfnvAouQKaajSTxl34Tbbn9ySjaB8cjyNRa1AF5c87VYCBSHw1be8p01PpAifRRNXI6rKDzSe3gmxmxErT1F6wKX7hiXVIGQ8ykfO1jQs4aDL0ziustol%2FDVAop%2F%2Bw1HkjOouGn0crH3ZT97CdUREirAI7KufbGUE%2FuBakBwlPInilaSiq0%2FoI2M3tNNsnYMe&X-Amz-Signature=1bc7df8e4ee1036618a210b5265b62ac0aa49daa1feeaf7da973d2a1f026ac52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNLLFAQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEgX7jqIhrS0crxoZkQ9FA6DKSqSFSP8vI7ajd8RlKmMAiEAgt6Sd9wFz4ix%2BY7k6%2BDpgS78HRFdX%2FlzqwLdTzpAIjwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES2NaAbZZJChlzScyrcA7r7u%2BiIF6AZuNN1XMoLgZlFlfDVT4keP7NOY8jJXoJN4rq0VaUoMlqI1YHRenrUqyqsWmOrOkJpC9QVNaG%2FtQFZrlJbv2uC7QwYQQSZDl8LH2ANKxc0zyaerCrovVtgiZemUbm7ZrB%2F%2BsoYe5ykOFvEni6Y%2FjHR5fCb82va2ybm1WsPqWHbbzf%2BPvLkiesD%2BWVrXw97q7SBA9GA0IEb4ZaUBes74V5niQbdnh8UIZRI%2FsAcsiIHfhiZ3BSzRuZeMGPo3m4l2XNjdpEpHRACuCI0S1%2B4RD3MVD0DOXBxs3%2FHfuPkTqgdUiD1lJLzXLLvbHpsX%2FFnMpR9LTjtwwNmNUY0mR9jzIB3teJm%2FxRqQVz6LwFwWMMHS2GpyCr2VVrR5pXY9FobEo7yyZnQ070ALFko%2BbIQUWXj5bF%2BnYE0nLm14%2B%2BakBkm2Z1DBPBvb1HU63VspmzUv6yh5WW%2BlgxFfgS7jy3ighcTAOOHQZpyvvNfc%2Bu4K1%2FzSy8%2FzYREDCm83tVZkcAkYCEXOSKodUMXYMc6kmsfat70kppk%2ByL52jEB9xV0cw6JJBivLzM154b%2BCKxFqWVSYh3h6vyk3tFpLOE7ATXiHswr58dThPkrGdwSQ2aR%2B6sdDcal0shAMLPCv8EGOqUB%2F77uE9TAuFMj0U3sDOnefwiUSoPMfnvAouQKaajSTxl34Tbbn9ySjaB8cjyNRa1AF5c87VYCBSHw1be8p01PpAifRRNXI6rKDzSe3gmxmxErT1F6wKX7hiXVIGQ8ykfO1jQs4aDL0ziustol%2FDVAop%2F%2Bw1HkjOouGn0crH3ZT97CdUREirAI7KufbGUE%2FuBakBwlPInilaSiq0%2FoI2M3tNNsnYMe&X-Amz-Signature=98b2e923593027b0e9c7734053f9783e1ad76ef0747b1a24ced82ceb5772802c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNLLFAQ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEgX7jqIhrS0crxoZkQ9FA6DKSqSFSP8vI7ajd8RlKmMAiEAgt6Sd9wFz4ix%2BY7k6%2BDpgS78HRFdX%2FlzqwLdTzpAIjwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES2NaAbZZJChlzScyrcA7r7u%2BiIF6AZuNN1XMoLgZlFlfDVT4keP7NOY8jJXoJN4rq0VaUoMlqI1YHRenrUqyqsWmOrOkJpC9QVNaG%2FtQFZrlJbv2uC7QwYQQSZDl8LH2ANKxc0zyaerCrovVtgiZemUbm7ZrB%2F%2BsoYe5ykOFvEni6Y%2FjHR5fCb82va2ybm1WsPqWHbbzf%2BPvLkiesD%2BWVrXw97q7SBA9GA0IEb4ZaUBes74V5niQbdnh8UIZRI%2FsAcsiIHfhiZ3BSzRuZeMGPo3m4l2XNjdpEpHRACuCI0S1%2B4RD3MVD0DOXBxs3%2FHfuPkTqgdUiD1lJLzXLLvbHpsX%2FFnMpR9LTjtwwNmNUY0mR9jzIB3teJm%2FxRqQVz6LwFwWMMHS2GpyCr2VVrR5pXY9FobEo7yyZnQ070ALFko%2BbIQUWXj5bF%2BnYE0nLm14%2B%2BakBkm2Z1DBPBvb1HU63VspmzUv6yh5WW%2BlgxFfgS7jy3ighcTAOOHQZpyvvNfc%2Bu4K1%2FzSy8%2FzYREDCm83tVZkcAkYCEXOSKodUMXYMc6kmsfat70kppk%2ByL52jEB9xV0cw6JJBivLzM154b%2BCKxFqWVSYh3h6vyk3tFpLOE7ATXiHswr58dThPkrGdwSQ2aR%2B6sdDcal0shAMLPCv8EGOqUB%2F77uE9TAuFMj0U3sDOnefwiUSoPMfnvAouQKaajSTxl34Tbbn9ySjaB8cjyNRa1AF5c87VYCBSHw1be8p01PpAifRRNXI6rKDzSe3gmxmxErT1F6wKX7hiXVIGQ8ykfO1jQs4aDL0ziustol%2FDVAop%2F%2Bw1HkjOouGn0crH3ZT97CdUREirAI7KufbGUE%2FuBakBwlPInilaSiq0%2FoI2M3tNNsnYMe&X-Amz-Signature=7af7759af8f875c0fe4dba31d21090cfaecee7d4cdd789078140d46694ff7f8a&X-Amz-SignedHeaders=host&x-id=GetObject)
