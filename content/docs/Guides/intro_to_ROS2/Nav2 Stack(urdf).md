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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHEIRMZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr1FrbBQ2Jnn867B6%2BaL1fA0nBd%2FE%2Bzx4Cv5ySxBLZlAiEA48gs1PHTuZxbKChJNs%2F9RV%2BCCO3Paa6c2LHvYHk3cpMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCojCTp9fOTQUDa5bircA2svRqwD2lSf1ms6V73hR34LhYxl9Ye5UJf1BcxY5PVlvgnObol5fDZSMaa%2F098eCJ05gqQmXOWxNCaokLc0QtpY2HcTFyUprfw0DE5%2FYIBqh29GQZLuTu6RUk9ZJ3FVrn2qeIOARoRqr6IVU%2BiuwJ3i0XZNFeCwNLkdRDw23kxNL7L8Zb%2FBcw71dlU5eRWISRmJgOxn2eNfBrAxHraKY9HkLu%2FkB32BBfsHuiemg4IYyHYyvLXJ1vwgSizPqi5leXaLynBCSdqtFdXNrPHfJvxgS1%2BDTlzGFz%2B8Xm4kgHd9I6Fr8K8JjNDW1HYBFZUmGV0og3EZm8G%2BcArjk7zwaeTMJrW5FlVuATbR34OMZRzKLE2YvWpYyyoEFqfI4IAeb6GLqOOubGL4dE9IZLKzcVcHUY385raWWy%2Fy8eKdgeapSRWWWPKb0V8dRJ%2FlSxeC2p24U8htR2NpzxPl3Ftm66PyTdjwdk06VW9AjwZ0%2FzRYilSyuN3x71PZybMoSl4Od2fVjC5CjZRszQr6SQSIglJXnci3a%2BASNv96za8%2F%2FKrZIIaxyelqb5A9duBtjQryAehFCzl13a1%2ByQi2ByqLV8M3vsCWvAoR7r9qHRW7NwHWCfgI0T89qD4rz2fFMI3ooMMGOqUBSBYnFcFjwrVlAzQ9FcQIWasaW3EmzcCycrQ5gXHh5nmGpKvT8oZqT9iIiaCRwtUgpvRxmIb7tegQO59PSPV7sifHv1SFHAdznMcgXsKlW74hWORPNzg2Zi1bj0YzmroOypTSxSju4yy13WHAzGMG0uls0IBn9MTY%2FnyS3evZOcrQofcM9hC6U3%2BqLMZ4ZG0hJp9rQCj0yfVPyxmIBtNJiNSf3pxt&X-Amz-Signature=d79bc21bbcfaf95e15d4ee857cc7e76bfb56ec2e3373edf28b28c3b5e6f07350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHEIRMZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr1FrbBQ2Jnn867B6%2BaL1fA0nBd%2FE%2Bzx4Cv5ySxBLZlAiEA48gs1PHTuZxbKChJNs%2F9RV%2BCCO3Paa6c2LHvYHk3cpMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCojCTp9fOTQUDa5bircA2svRqwD2lSf1ms6V73hR34LhYxl9Ye5UJf1BcxY5PVlvgnObol5fDZSMaa%2F098eCJ05gqQmXOWxNCaokLc0QtpY2HcTFyUprfw0DE5%2FYIBqh29GQZLuTu6RUk9ZJ3FVrn2qeIOARoRqr6IVU%2BiuwJ3i0XZNFeCwNLkdRDw23kxNL7L8Zb%2FBcw71dlU5eRWISRmJgOxn2eNfBrAxHraKY9HkLu%2FkB32BBfsHuiemg4IYyHYyvLXJ1vwgSizPqi5leXaLynBCSdqtFdXNrPHfJvxgS1%2BDTlzGFz%2B8Xm4kgHd9I6Fr8K8JjNDW1HYBFZUmGV0og3EZm8G%2BcArjk7zwaeTMJrW5FlVuATbR34OMZRzKLE2YvWpYyyoEFqfI4IAeb6GLqOOubGL4dE9IZLKzcVcHUY385raWWy%2Fy8eKdgeapSRWWWPKb0V8dRJ%2FlSxeC2p24U8htR2NpzxPl3Ftm66PyTdjwdk06VW9AjwZ0%2FzRYilSyuN3x71PZybMoSl4Od2fVjC5CjZRszQr6SQSIglJXnci3a%2BASNv96za8%2F%2FKrZIIaxyelqb5A9duBtjQryAehFCzl13a1%2ByQi2ByqLV8M3vsCWvAoR7r9qHRW7NwHWCfgI0T89qD4rz2fFMI3ooMMGOqUBSBYnFcFjwrVlAzQ9FcQIWasaW3EmzcCycrQ5gXHh5nmGpKvT8oZqT9iIiaCRwtUgpvRxmIb7tegQO59PSPV7sifHv1SFHAdznMcgXsKlW74hWORPNzg2Zi1bj0YzmroOypTSxSju4yy13WHAzGMG0uls0IBn9MTY%2FnyS3evZOcrQofcM9hC6U3%2BqLMZ4ZG0hJp9rQCj0yfVPyxmIBtNJiNSf3pxt&X-Amz-Signature=fd8ea356426d229682cd7300a6b026a481c5c1e58252c6fb239b62354a5c2e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHEIRMZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr1FrbBQ2Jnn867B6%2BaL1fA0nBd%2FE%2Bzx4Cv5ySxBLZlAiEA48gs1PHTuZxbKChJNs%2F9RV%2BCCO3Paa6c2LHvYHk3cpMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCojCTp9fOTQUDa5bircA2svRqwD2lSf1ms6V73hR34LhYxl9Ye5UJf1BcxY5PVlvgnObol5fDZSMaa%2F098eCJ05gqQmXOWxNCaokLc0QtpY2HcTFyUprfw0DE5%2FYIBqh29GQZLuTu6RUk9ZJ3FVrn2qeIOARoRqr6IVU%2BiuwJ3i0XZNFeCwNLkdRDw23kxNL7L8Zb%2FBcw71dlU5eRWISRmJgOxn2eNfBrAxHraKY9HkLu%2FkB32BBfsHuiemg4IYyHYyvLXJ1vwgSizPqi5leXaLynBCSdqtFdXNrPHfJvxgS1%2BDTlzGFz%2B8Xm4kgHd9I6Fr8K8JjNDW1HYBFZUmGV0og3EZm8G%2BcArjk7zwaeTMJrW5FlVuATbR34OMZRzKLE2YvWpYyyoEFqfI4IAeb6GLqOOubGL4dE9IZLKzcVcHUY385raWWy%2Fy8eKdgeapSRWWWPKb0V8dRJ%2FlSxeC2p24U8htR2NpzxPl3Ftm66PyTdjwdk06VW9AjwZ0%2FzRYilSyuN3x71PZybMoSl4Od2fVjC5CjZRszQr6SQSIglJXnci3a%2BASNv96za8%2F%2FKrZIIaxyelqb5A9duBtjQryAehFCzl13a1%2ByQi2ByqLV8M3vsCWvAoR7r9qHRW7NwHWCfgI0T89qD4rz2fFMI3ooMMGOqUBSBYnFcFjwrVlAzQ9FcQIWasaW3EmzcCycrQ5gXHh5nmGpKvT8oZqT9iIiaCRwtUgpvRxmIb7tegQO59PSPV7sifHv1SFHAdznMcgXsKlW74hWORPNzg2Zi1bj0YzmroOypTSxSju4yy13WHAzGMG0uls0IBn9MTY%2FnyS3evZOcrQofcM9hC6U3%2BqLMZ4ZG0hJp9rQCj0yfVPyxmIBtNJiNSf3pxt&X-Amz-Signature=9e97a7bb966cba88a3890e16a68056d52c83f88ac3c77d606298579ab1cfcb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHEIRMZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr1FrbBQ2Jnn867B6%2BaL1fA0nBd%2FE%2Bzx4Cv5ySxBLZlAiEA48gs1PHTuZxbKChJNs%2F9RV%2BCCO3Paa6c2LHvYHk3cpMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCojCTp9fOTQUDa5bircA2svRqwD2lSf1ms6V73hR34LhYxl9Ye5UJf1BcxY5PVlvgnObol5fDZSMaa%2F098eCJ05gqQmXOWxNCaokLc0QtpY2HcTFyUprfw0DE5%2FYIBqh29GQZLuTu6RUk9ZJ3FVrn2qeIOARoRqr6IVU%2BiuwJ3i0XZNFeCwNLkdRDw23kxNL7L8Zb%2FBcw71dlU5eRWISRmJgOxn2eNfBrAxHraKY9HkLu%2FkB32BBfsHuiemg4IYyHYyvLXJ1vwgSizPqi5leXaLynBCSdqtFdXNrPHfJvxgS1%2BDTlzGFz%2B8Xm4kgHd9I6Fr8K8JjNDW1HYBFZUmGV0og3EZm8G%2BcArjk7zwaeTMJrW5FlVuATbR34OMZRzKLE2YvWpYyyoEFqfI4IAeb6GLqOOubGL4dE9IZLKzcVcHUY385raWWy%2Fy8eKdgeapSRWWWPKb0V8dRJ%2FlSxeC2p24U8htR2NpzxPl3Ftm66PyTdjwdk06VW9AjwZ0%2FzRYilSyuN3x71PZybMoSl4Od2fVjC5CjZRszQr6SQSIglJXnci3a%2BASNv96za8%2F%2FKrZIIaxyelqb5A9duBtjQryAehFCzl13a1%2ByQi2ByqLV8M3vsCWvAoR7r9qHRW7NwHWCfgI0T89qD4rz2fFMI3ooMMGOqUBSBYnFcFjwrVlAzQ9FcQIWasaW3EmzcCycrQ5gXHh5nmGpKvT8oZqT9iIiaCRwtUgpvRxmIb7tegQO59PSPV7sifHv1SFHAdznMcgXsKlW74hWORPNzg2Zi1bj0YzmroOypTSxSju4yy13WHAzGMG0uls0IBn9MTY%2FnyS3evZOcrQofcM9hC6U3%2BqLMZ4ZG0hJp9rQCj0yfVPyxmIBtNJiNSf3pxt&X-Amz-Signature=4f28f8e85f715e2878c24629dd97503896433c55e097cfe2b0b4c64f8ee8e80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHEIRMZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr1FrbBQ2Jnn867B6%2BaL1fA0nBd%2FE%2Bzx4Cv5ySxBLZlAiEA48gs1PHTuZxbKChJNs%2F9RV%2BCCO3Paa6c2LHvYHk3cpMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCojCTp9fOTQUDa5bircA2svRqwD2lSf1ms6V73hR34LhYxl9Ye5UJf1BcxY5PVlvgnObol5fDZSMaa%2F098eCJ05gqQmXOWxNCaokLc0QtpY2HcTFyUprfw0DE5%2FYIBqh29GQZLuTu6RUk9ZJ3FVrn2qeIOARoRqr6IVU%2BiuwJ3i0XZNFeCwNLkdRDw23kxNL7L8Zb%2FBcw71dlU5eRWISRmJgOxn2eNfBrAxHraKY9HkLu%2FkB32BBfsHuiemg4IYyHYyvLXJ1vwgSizPqi5leXaLynBCSdqtFdXNrPHfJvxgS1%2BDTlzGFz%2B8Xm4kgHd9I6Fr8K8JjNDW1HYBFZUmGV0og3EZm8G%2BcArjk7zwaeTMJrW5FlVuATbR34OMZRzKLE2YvWpYyyoEFqfI4IAeb6GLqOOubGL4dE9IZLKzcVcHUY385raWWy%2Fy8eKdgeapSRWWWPKb0V8dRJ%2FlSxeC2p24U8htR2NpzxPl3Ftm66PyTdjwdk06VW9AjwZ0%2FzRYilSyuN3x71PZybMoSl4Od2fVjC5CjZRszQr6SQSIglJXnci3a%2BASNv96za8%2F%2FKrZIIaxyelqb5A9duBtjQryAehFCzl13a1%2ByQi2ByqLV8M3vsCWvAoR7r9qHRW7NwHWCfgI0T89qD4rz2fFMI3ooMMGOqUBSBYnFcFjwrVlAzQ9FcQIWasaW3EmzcCycrQ5gXHh5nmGpKvT8oZqT9iIiaCRwtUgpvRxmIb7tegQO59PSPV7sifHv1SFHAdznMcgXsKlW74hWORPNzg2Zi1bj0YzmroOypTSxSju4yy13WHAzGMG0uls0IBn9MTY%2FnyS3evZOcrQofcM9hC6U3%2BqLMZ4ZG0hJp9rQCj0yfVPyxmIBtNJiNSf3pxt&X-Amz-Signature=3847288e1e725f837baea6f5f62e3306976c5e3c3aa8c5629f60fe38965a8564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHEIRMZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICr1FrbBQ2Jnn867B6%2BaL1fA0nBd%2FE%2Bzx4Cv5ySxBLZlAiEA48gs1PHTuZxbKChJNs%2F9RV%2BCCO3Paa6c2LHvYHk3cpMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCojCTp9fOTQUDa5bircA2svRqwD2lSf1ms6V73hR34LhYxl9Ye5UJf1BcxY5PVlvgnObol5fDZSMaa%2F098eCJ05gqQmXOWxNCaokLc0QtpY2HcTFyUprfw0DE5%2FYIBqh29GQZLuTu6RUk9ZJ3FVrn2qeIOARoRqr6IVU%2BiuwJ3i0XZNFeCwNLkdRDw23kxNL7L8Zb%2FBcw71dlU5eRWISRmJgOxn2eNfBrAxHraKY9HkLu%2FkB32BBfsHuiemg4IYyHYyvLXJ1vwgSizPqi5leXaLynBCSdqtFdXNrPHfJvxgS1%2BDTlzGFz%2B8Xm4kgHd9I6Fr8K8JjNDW1HYBFZUmGV0og3EZm8G%2BcArjk7zwaeTMJrW5FlVuATbR34OMZRzKLE2YvWpYyyoEFqfI4IAeb6GLqOOubGL4dE9IZLKzcVcHUY385raWWy%2Fy8eKdgeapSRWWWPKb0V8dRJ%2FlSxeC2p24U8htR2NpzxPl3Ftm66PyTdjwdk06VW9AjwZ0%2FzRYilSyuN3x71PZybMoSl4Od2fVjC5CjZRszQr6SQSIglJXnci3a%2BASNv96za8%2F%2FKrZIIaxyelqb5A9duBtjQryAehFCzl13a1%2ByQi2ByqLV8M3vsCWvAoR7r9qHRW7NwHWCfgI0T89qD4rz2fFMI3ooMMGOqUBSBYnFcFjwrVlAzQ9FcQIWasaW3EmzcCycrQ5gXHh5nmGpKvT8oZqT9iIiaCRwtUgpvRxmIb7tegQO59PSPV7sifHv1SFHAdznMcgXsKlW74hWORPNzg2Zi1bj0YzmroOypTSxSju4yy13WHAzGMG0uls0IBn9MTY%2FnyS3evZOcrQofcM9hC6U3%2BqLMZ4ZG0hJp9rQCj0yfVPyxmIBtNJiNSf3pxt&X-Amz-Signature=cc80d0651ff730430069ae5072a275b63fe86135a1423efa121608cc56f150ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
