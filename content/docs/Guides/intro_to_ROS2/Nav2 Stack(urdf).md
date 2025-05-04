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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2N337DN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDH9D5M8SgIRBKMhFFwEVSmR%2BhN5oGsnClCsFP6%2FbJVlAiEAku58HGM%2FxJ1UIXu5NkWUN0ki%2B1UV7RBqrbSA74ygQiAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOfwEOY3nO8nkBxqtircA%2B9q6M0iuC2kSxua5wzqX%2BZeInTbU%2B7Z5IgWjsgYjaM7nfns%2FlUHjl%2FnY0tY0mamhp6umxyhkqp64yGMkwGKrGAxevIrM%2B%2FPMLT3D3M3IKkqmBsONWzCW4fUcfVZyydkRUoeunkJaaLpWQB%2FK1nRC8Z55WyiJV34wPmlj0LJqMhbcmTKr1Ft37fKefov%2BoA83OXtOjbHNN6Sn1uywRQhTVHmZanCXMcolMMJsWYctTWgFTTTeYV2YNnkHlO6SP7itf%2BFevC2dIAN4j4FtUFBVa0PO42QwDndy8dSFkQ7RR8dS57CKVAi%2FRb61PNuT6QptWnQiJldlP7o5E3s09LKnV9UdonZEZ%2BzcHjFGjw8W7XjUmD3n4wMncN1OQyQ5HbXQhxWXa2yVST9J%2BPAUL%2F1wI58f9EK6TUngy%2BTkvRooSd272dr6PFyg4p7l4o8pnYCNnHDLeqgE3Gl4P3ni1wVwV66T0FVeoEeazu6I%2FMgZpmCfaSFzfMSoM4s2hIjPTxxp9pFb6k1uclvT6Vcj7U2UMBG4RLvlnBp2m12p9jgQgOHI79mzNAsa2YuShEX9SWKrEfdxDAe84u0smrdnObsKGo%2FqJUEnkdbhynS6Np2IiILu%2BFVKTGwM7THb5W5MKSB3cAGOqUBbZqw5IGoxztUu%2FOdePVev134sJ%2BW2YUBAfoP2pcqAbmVmKFrHBA9pf04v2sRRJ61pXU76T7sG6WJngEDrLr5DUSFuoffcHLpOHru3rbj8sUFT3%2BZJgsU4MVrapERvtvCPNzU%2FOp6A1clgct%2B9DaPGuonB0IBbK8gePffgnzLFuBcFTFeuhlnA2Xz0DymPfqZkf4OwbBc2BWZxoxbcpFBJwoBr2tP&X-Amz-Signature=c5d9d176c037355fd1006dee54a6827032161ad810d540989809c9e0a1a8b024&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2N337DN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDH9D5M8SgIRBKMhFFwEVSmR%2BhN5oGsnClCsFP6%2FbJVlAiEAku58HGM%2FxJ1UIXu5NkWUN0ki%2B1UV7RBqrbSA74ygQiAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOfwEOY3nO8nkBxqtircA%2B9q6M0iuC2kSxua5wzqX%2BZeInTbU%2B7Z5IgWjsgYjaM7nfns%2FlUHjl%2FnY0tY0mamhp6umxyhkqp64yGMkwGKrGAxevIrM%2B%2FPMLT3D3M3IKkqmBsONWzCW4fUcfVZyydkRUoeunkJaaLpWQB%2FK1nRC8Z55WyiJV34wPmlj0LJqMhbcmTKr1Ft37fKefov%2BoA83OXtOjbHNN6Sn1uywRQhTVHmZanCXMcolMMJsWYctTWgFTTTeYV2YNnkHlO6SP7itf%2BFevC2dIAN4j4FtUFBVa0PO42QwDndy8dSFkQ7RR8dS57CKVAi%2FRb61PNuT6QptWnQiJldlP7o5E3s09LKnV9UdonZEZ%2BzcHjFGjw8W7XjUmD3n4wMncN1OQyQ5HbXQhxWXa2yVST9J%2BPAUL%2F1wI58f9EK6TUngy%2BTkvRooSd272dr6PFyg4p7l4o8pnYCNnHDLeqgE3Gl4P3ni1wVwV66T0FVeoEeazu6I%2FMgZpmCfaSFzfMSoM4s2hIjPTxxp9pFb6k1uclvT6Vcj7U2UMBG4RLvlnBp2m12p9jgQgOHI79mzNAsa2YuShEX9SWKrEfdxDAe84u0smrdnObsKGo%2FqJUEnkdbhynS6Np2IiILu%2BFVKTGwM7THb5W5MKSB3cAGOqUBbZqw5IGoxztUu%2FOdePVev134sJ%2BW2YUBAfoP2pcqAbmVmKFrHBA9pf04v2sRRJ61pXU76T7sG6WJngEDrLr5DUSFuoffcHLpOHru3rbj8sUFT3%2BZJgsU4MVrapERvtvCPNzU%2FOp6A1clgct%2B9DaPGuonB0IBbK8gePffgnzLFuBcFTFeuhlnA2Xz0DymPfqZkf4OwbBc2BWZxoxbcpFBJwoBr2tP&X-Amz-Signature=cc538af80da4ce4afe49d6899310b8aa2960a4d1e0bc8c3ef1b78bd728bc7f96&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2N337DN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDH9D5M8SgIRBKMhFFwEVSmR%2BhN5oGsnClCsFP6%2FbJVlAiEAku58HGM%2FxJ1UIXu5NkWUN0ki%2B1UV7RBqrbSA74ygQiAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOfwEOY3nO8nkBxqtircA%2B9q6M0iuC2kSxua5wzqX%2BZeInTbU%2B7Z5IgWjsgYjaM7nfns%2FlUHjl%2FnY0tY0mamhp6umxyhkqp64yGMkwGKrGAxevIrM%2B%2FPMLT3D3M3IKkqmBsONWzCW4fUcfVZyydkRUoeunkJaaLpWQB%2FK1nRC8Z55WyiJV34wPmlj0LJqMhbcmTKr1Ft37fKefov%2BoA83OXtOjbHNN6Sn1uywRQhTVHmZanCXMcolMMJsWYctTWgFTTTeYV2YNnkHlO6SP7itf%2BFevC2dIAN4j4FtUFBVa0PO42QwDndy8dSFkQ7RR8dS57CKVAi%2FRb61PNuT6QptWnQiJldlP7o5E3s09LKnV9UdonZEZ%2BzcHjFGjw8W7XjUmD3n4wMncN1OQyQ5HbXQhxWXa2yVST9J%2BPAUL%2F1wI58f9EK6TUngy%2BTkvRooSd272dr6PFyg4p7l4o8pnYCNnHDLeqgE3Gl4P3ni1wVwV66T0FVeoEeazu6I%2FMgZpmCfaSFzfMSoM4s2hIjPTxxp9pFb6k1uclvT6Vcj7U2UMBG4RLvlnBp2m12p9jgQgOHI79mzNAsa2YuShEX9SWKrEfdxDAe84u0smrdnObsKGo%2FqJUEnkdbhynS6Np2IiILu%2BFVKTGwM7THb5W5MKSB3cAGOqUBbZqw5IGoxztUu%2FOdePVev134sJ%2BW2YUBAfoP2pcqAbmVmKFrHBA9pf04v2sRRJ61pXU76T7sG6WJngEDrLr5DUSFuoffcHLpOHru3rbj8sUFT3%2BZJgsU4MVrapERvtvCPNzU%2FOp6A1clgct%2B9DaPGuonB0IBbK8gePffgnzLFuBcFTFeuhlnA2Xz0DymPfqZkf4OwbBc2BWZxoxbcpFBJwoBr2tP&X-Amz-Signature=67a6d4fa640ecb5e2f0b7026ca1ae1d1455376588f7b5d44018f33575eeb67b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2N337DN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDH9D5M8SgIRBKMhFFwEVSmR%2BhN5oGsnClCsFP6%2FbJVlAiEAku58HGM%2FxJ1UIXu5NkWUN0ki%2B1UV7RBqrbSA74ygQiAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOfwEOY3nO8nkBxqtircA%2B9q6M0iuC2kSxua5wzqX%2BZeInTbU%2B7Z5IgWjsgYjaM7nfns%2FlUHjl%2FnY0tY0mamhp6umxyhkqp64yGMkwGKrGAxevIrM%2B%2FPMLT3D3M3IKkqmBsONWzCW4fUcfVZyydkRUoeunkJaaLpWQB%2FK1nRC8Z55WyiJV34wPmlj0LJqMhbcmTKr1Ft37fKefov%2BoA83OXtOjbHNN6Sn1uywRQhTVHmZanCXMcolMMJsWYctTWgFTTTeYV2YNnkHlO6SP7itf%2BFevC2dIAN4j4FtUFBVa0PO42QwDndy8dSFkQ7RR8dS57CKVAi%2FRb61PNuT6QptWnQiJldlP7o5E3s09LKnV9UdonZEZ%2BzcHjFGjw8W7XjUmD3n4wMncN1OQyQ5HbXQhxWXa2yVST9J%2BPAUL%2F1wI58f9EK6TUngy%2BTkvRooSd272dr6PFyg4p7l4o8pnYCNnHDLeqgE3Gl4P3ni1wVwV66T0FVeoEeazu6I%2FMgZpmCfaSFzfMSoM4s2hIjPTxxp9pFb6k1uclvT6Vcj7U2UMBG4RLvlnBp2m12p9jgQgOHI79mzNAsa2YuShEX9SWKrEfdxDAe84u0smrdnObsKGo%2FqJUEnkdbhynS6Np2IiILu%2BFVKTGwM7THb5W5MKSB3cAGOqUBbZqw5IGoxztUu%2FOdePVev134sJ%2BW2YUBAfoP2pcqAbmVmKFrHBA9pf04v2sRRJ61pXU76T7sG6WJngEDrLr5DUSFuoffcHLpOHru3rbj8sUFT3%2BZJgsU4MVrapERvtvCPNzU%2FOp6A1clgct%2B9DaPGuonB0IBbK8gePffgnzLFuBcFTFeuhlnA2Xz0DymPfqZkf4OwbBc2BWZxoxbcpFBJwoBr2tP&X-Amz-Signature=f6cd69de12dfe8e56566a53d4e1e673732e02ef7766984eab031efe3b2caf7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2N337DN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDH9D5M8SgIRBKMhFFwEVSmR%2BhN5oGsnClCsFP6%2FbJVlAiEAku58HGM%2FxJ1UIXu5NkWUN0ki%2B1UV7RBqrbSA74ygQiAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOfwEOY3nO8nkBxqtircA%2B9q6M0iuC2kSxua5wzqX%2BZeInTbU%2B7Z5IgWjsgYjaM7nfns%2FlUHjl%2FnY0tY0mamhp6umxyhkqp64yGMkwGKrGAxevIrM%2B%2FPMLT3D3M3IKkqmBsONWzCW4fUcfVZyydkRUoeunkJaaLpWQB%2FK1nRC8Z55WyiJV34wPmlj0LJqMhbcmTKr1Ft37fKefov%2BoA83OXtOjbHNN6Sn1uywRQhTVHmZanCXMcolMMJsWYctTWgFTTTeYV2YNnkHlO6SP7itf%2BFevC2dIAN4j4FtUFBVa0PO42QwDndy8dSFkQ7RR8dS57CKVAi%2FRb61PNuT6QptWnQiJldlP7o5E3s09LKnV9UdonZEZ%2BzcHjFGjw8W7XjUmD3n4wMncN1OQyQ5HbXQhxWXa2yVST9J%2BPAUL%2F1wI58f9EK6TUngy%2BTkvRooSd272dr6PFyg4p7l4o8pnYCNnHDLeqgE3Gl4P3ni1wVwV66T0FVeoEeazu6I%2FMgZpmCfaSFzfMSoM4s2hIjPTxxp9pFb6k1uclvT6Vcj7U2UMBG4RLvlnBp2m12p9jgQgOHI79mzNAsa2YuShEX9SWKrEfdxDAe84u0smrdnObsKGo%2FqJUEnkdbhynS6Np2IiILu%2BFVKTGwM7THb5W5MKSB3cAGOqUBbZqw5IGoxztUu%2FOdePVev134sJ%2BW2YUBAfoP2pcqAbmVmKFrHBA9pf04v2sRRJ61pXU76T7sG6WJngEDrLr5DUSFuoffcHLpOHru3rbj8sUFT3%2BZJgsU4MVrapERvtvCPNzU%2FOp6A1clgct%2B9DaPGuonB0IBbK8gePffgnzLFuBcFTFeuhlnA2Xz0DymPfqZkf4OwbBc2BWZxoxbcpFBJwoBr2tP&X-Amz-Signature=0feec424b32486bded6ac2f976e0c27077eebfd13a4b79b063362132e7760281&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2N337DN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDH9D5M8SgIRBKMhFFwEVSmR%2BhN5oGsnClCsFP6%2FbJVlAiEAku58HGM%2FxJ1UIXu5NkWUN0ki%2B1UV7RBqrbSA74ygQiAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOfwEOY3nO8nkBxqtircA%2B9q6M0iuC2kSxua5wzqX%2BZeInTbU%2B7Z5IgWjsgYjaM7nfns%2FlUHjl%2FnY0tY0mamhp6umxyhkqp64yGMkwGKrGAxevIrM%2B%2FPMLT3D3M3IKkqmBsONWzCW4fUcfVZyydkRUoeunkJaaLpWQB%2FK1nRC8Z55WyiJV34wPmlj0LJqMhbcmTKr1Ft37fKefov%2BoA83OXtOjbHNN6Sn1uywRQhTVHmZanCXMcolMMJsWYctTWgFTTTeYV2YNnkHlO6SP7itf%2BFevC2dIAN4j4FtUFBVa0PO42QwDndy8dSFkQ7RR8dS57CKVAi%2FRb61PNuT6QptWnQiJldlP7o5E3s09LKnV9UdonZEZ%2BzcHjFGjw8W7XjUmD3n4wMncN1OQyQ5HbXQhxWXa2yVST9J%2BPAUL%2F1wI58f9EK6TUngy%2BTkvRooSd272dr6PFyg4p7l4o8pnYCNnHDLeqgE3Gl4P3ni1wVwV66T0FVeoEeazu6I%2FMgZpmCfaSFzfMSoM4s2hIjPTxxp9pFb6k1uclvT6Vcj7U2UMBG4RLvlnBp2m12p9jgQgOHI79mzNAsa2YuShEX9SWKrEfdxDAe84u0smrdnObsKGo%2FqJUEnkdbhynS6Np2IiILu%2BFVKTGwM7THb5W5MKSB3cAGOqUBbZqw5IGoxztUu%2FOdePVev134sJ%2BW2YUBAfoP2pcqAbmVmKFrHBA9pf04v2sRRJ61pXU76T7sG6WJngEDrLr5DUSFuoffcHLpOHru3rbj8sUFT3%2BZJgsU4MVrapERvtvCPNzU%2FOp6A1clgct%2B9DaPGuonB0IBbK8gePffgnzLFuBcFTFeuhlnA2Xz0DymPfqZkf4OwbBc2BWZxoxbcpFBJwoBr2tP&X-Amz-Signature=fbe7d5390f12561577827083e6533ff4ec5700c491851e48ff2566e5a504116c&X-Amz-SignedHeaders=host&x-id=GetObject)
