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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=14c33984e39d71015332d88adf1c18a2ba8df7e1c5377867ea7bea40bafaf83b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=67385402ec412f37fbef5f16004df16d5434786da994e5ecef572f4fca0ffd9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=b252637c33c468da5804e4f1d4d96be5cb826db929ba19592c4eb2990826b49a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=746cc0cbb2ede0af3ec9f402f3813c1c030a179d480c84d1c406a2f852ed11ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=799edfa4a6003c7104a7b0711cb5ae9ef3418d572a734ca21736f6cbac8d8808&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=728dc173edd4bebaea3733b82ababf49cd08770dc452aeec3fd058fc1a540837&X-Amz-SignedHeaders=host&x-id=GetObject)
