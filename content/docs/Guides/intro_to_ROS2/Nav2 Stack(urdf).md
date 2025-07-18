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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRXJFKL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGT7A36U0Dd7SRFUm3cAyiltCC0hEEorladJq%2BVk%2BIH3AiEA%2FP%2FHPssBjPzs6uD05V039RySi8TUAqeIpLIH0eeZ4ucqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6NECRplmI5yCJTGircA3nZGUvvtNnHQ2KshvOtPUQ8s0fNGmJDV1RGgww5o2O833ZYXconVFyITclv2tQvTyFspmrZMQ0DABjCSSF8vMJtmJBg%2F%2F8ePXJYPIEG599c0cfUMB4ZJ8W9KhVonh6j%2FbhjSK7Jepmj0Fg9o2eYaTQK0Mb5fjrxI8Ltvtochi3VopVMYAV0QRcGr7PpZTkEIucV%2Fhb%2F4WpCTjL%2FSG6h%2F%2Bjxr6Jn0QGpuGmvTnWORBN8aY5qztpjl8sTSrLS7M6Vj0JYb3lE9zm0Nme3T3d6Wk9PyG1yugmjn6zdp4E4c2dd21bZ13c4uJIYVa7nCJvbMzLl1svfldRManJBIlV6yE3L1wEewxAgscbXwkZdttvICd%2FD4YyMyIOXvk7NuCovD38k3kIi6jT6U8Dz9LqpgaPNLSSaDCp%2BcA%2B4E%2B0%2F7hLqCQLigCCIDPyyX30ZEsFHRdbT5BMRwwUZsmxfRyj9dyMFev8jfQOOqbbtZlcZsVlRa%2F0JCOh5cKVSPkHCBeO7QZmitjrucSmuuA03p26CH9MiVJDvr%2BwXS0yzBrIohv0l%2BkyCByPHMp40sq2837Mh17tG9EZYpHH%2BbUlYEH6M9FFQ%2Ft6Me19G1VgwN1uKWcx12TPk6rFURJVoUcn1MLGw58MGOqUBA7pfonFN31Gc4kx6jZA8FHf4XAUxCHjyOMfKfx0sX9JFKrymHA9D6e37jXoLe7dflwfg5rgvgjyjSsnXFbzAeA9CWNp%2FtelfAXJ%2F5kVzFQMTGbI8XBvkp8%2FizSeDOqAF5auSYBQPAZI1YC%2BKFCcpuhq92CCV8N71fW6tkoVYzQwycE5v0E8mrVcA8Jj45WO9ezuzGIX1WPFh8XKijs1PVmZojz9a&X-Amz-Signature=e0920dfa503972ea26257ab9bf49e784c0d26fea83e3fd2d27da0c8bbd955a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRXJFKL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGT7A36U0Dd7SRFUm3cAyiltCC0hEEorladJq%2BVk%2BIH3AiEA%2FP%2FHPssBjPzs6uD05V039RySi8TUAqeIpLIH0eeZ4ucqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6NECRplmI5yCJTGircA3nZGUvvtNnHQ2KshvOtPUQ8s0fNGmJDV1RGgww5o2O833ZYXconVFyITclv2tQvTyFspmrZMQ0DABjCSSF8vMJtmJBg%2F%2F8ePXJYPIEG599c0cfUMB4ZJ8W9KhVonh6j%2FbhjSK7Jepmj0Fg9o2eYaTQK0Mb5fjrxI8Ltvtochi3VopVMYAV0QRcGr7PpZTkEIucV%2Fhb%2F4WpCTjL%2FSG6h%2F%2Bjxr6Jn0QGpuGmvTnWORBN8aY5qztpjl8sTSrLS7M6Vj0JYb3lE9zm0Nme3T3d6Wk9PyG1yugmjn6zdp4E4c2dd21bZ13c4uJIYVa7nCJvbMzLl1svfldRManJBIlV6yE3L1wEewxAgscbXwkZdttvICd%2FD4YyMyIOXvk7NuCovD38k3kIi6jT6U8Dz9LqpgaPNLSSaDCp%2BcA%2B4E%2B0%2F7hLqCQLigCCIDPyyX30ZEsFHRdbT5BMRwwUZsmxfRyj9dyMFev8jfQOOqbbtZlcZsVlRa%2F0JCOh5cKVSPkHCBeO7QZmitjrucSmuuA03p26CH9MiVJDvr%2BwXS0yzBrIohv0l%2BkyCByPHMp40sq2837Mh17tG9EZYpHH%2BbUlYEH6M9FFQ%2Ft6Me19G1VgwN1uKWcx12TPk6rFURJVoUcn1MLGw58MGOqUBA7pfonFN31Gc4kx6jZA8FHf4XAUxCHjyOMfKfx0sX9JFKrymHA9D6e37jXoLe7dflwfg5rgvgjyjSsnXFbzAeA9CWNp%2FtelfAXJ%2F5kVzFQMTGbI8XBvkp8%2FizSeDOqAF5auSYBQPAZI1YC%2BKFCcpuhq92CCV8N71fW6tkoVYzQwycE5v0E8mrVcA8Jj45WO9ezuzGIX1WPFh8XKijs1PVmZojz9a&X-Amz-Signature=f147883dd5bab8aaaa6568b518b8540d989241421e553b827e5973e02108722d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRXJFKL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGT7A36U0Dd7SRFUm3cAyiltCC0hEEorladJq%2BVk%2BIH3AiEA%2FP%2FHPssBjPzs6uD05V039RySi8TUAqeIpLIH0eeZ4ucqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6NECRplmI5yCJTGircA3nZGUvvtNnHQ2KshvOtPUQ8s0fNGmJDV1RGgww5o2O833ZYXconVFyITclv2tQvTyFspmrZMQ0DABjCSSF8vMJtmJBg%2F%2F8ePXJYPIEG599c0cfUMB4ZJ8W9KhVonh6j%2FbhjSK7Jepmj0Fg9o2eYaTQK0Mb5fjrxI8Ltvtochi3VopVMYAV0QRcGr7PpZTkEIucV%2Fhb%2F4WpCTjL%2FSG6h%2F%2Bjxr6Jn0QGpuGmvTnWORBN8aY5qztpjl8sTSrLS7M6Vj0JYb3lE9zm0Nme3T3d6Wk9PyG1yugmjn6zdp4E4c2dd21bZ13c4uJIYVa7nCJvbMzLl1svfldRManJBIlV6yE3L1wEewxAgscbXwkZdttvICd%2FD4YyMyIOXvk7NuCovD38k3kIi6jT6U8Dz9LqpgaPNLSSaDCp%2BcA%2B4E%2B0%2F7hLqCQLigCCIDPyyX30ZEsFHRdbT5BMRwwUZsmxfRyj9dyMFev8jfQOOqbbtZlcZsVlRa%2F0JCOh5cKVSPkHCBeO7QZmitjrucSmuuA03p26CH9MiVJDvr%2BwXS0yzBrIohv0l%2BkyCByPHMp40sq2837Mh17tG9EZYpHH%2BbUlYEH6M9FFQ%2Ft6Me19G1VgwN1uKWcx12TPk6rFURJVoUcn1MLGw58MGOqUBA7pfonFN31Gc4kx6jZA8FHf4XAUxCHjyOMfKfx0sX9JFKrymHA9D6e37jXoLe7dflwfg5rgvgjyjSsnXFbzAeA9CWNp%2FtelfAXJ%2F5kVzFQMTGbI8XBvkp8%2FizSeDOqAF5auSYBQPAZI1YC%2BKFCcpuhq92CCV8N71fW6tkoVYzQwycE5v0E8mrVcA8Jj45WO9ezuzGIX1WPFh8XKijs1PVmZojz9a&X-Amz-Signature=55cfd470c284ddd82b02eefa68469b5d1659e8f9c5f1e70652ec88750a5a042e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRXJFKL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGT7A36U0Dd7SRFUm3cAyiltCC0hEEorladJq%2BVk%2BIH3AiEA%2FP%2FHPssBjPzs6uD05V039RySi8TUAqeIpLIH0eeZ4ucqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6NECRplmI5yCJTGircA3nZGUvvtNnHQ2KshvOtPUQ8s0fNGmJDV1RGgww5o2O833ZYXconVFyITclv2tQvTyFspmrZMQ0DABjCSSF8vMJtmJBg%2F%2F8ePXJYPIEG599c0cfUMB4ZJ8W9KhVonh6j%2FbhjSK7Jepmj0Fg9o2eYaTQK0Mb5fjrxI8Ltvtochi3VopVMYAV0QRcGr7PpZTkEIucV%2Fhb%2F4WpCTjL%2FSG6h%2F%2Bjxr6Jn0QGpuGmvTnWORBN8aY5qztpjl8sTSrLS7M6Vj0JYb3lE9zm0Nme3T3d6Wk9PyG1yugmjn6zdp4E4c2dd21bZ13c4uJIYVa7nCJvbMzLl1svfldRManJBIlV6yE3L1wEewxAgscbXwkZdttvICd%2FD4YyMyIOXvk7NuCovD38k3kIi6jT6U8Dz9LqpgaPNLSSaDCp%2BcA%2B4E%2B0%2F7hLqCQLigCCIDPyyX30ZEsFHRdbT5BMRwwUZsmxfRyj9dyMFev8jfQOOqbbtZlcZsVlRa%2F0JCOh5cKVSPkHCBeO7QZmitjrucSmuuA03p26CH9MiVJDvr%2BwXS0yzBrIohv0l%2BkyCByPHMp40sq2837Mh17tG9EZYpHH%2BbUlYEH6M9FFQ%2Ft6Me19G1VgwN1uKWcx12TPk6rFURJVoUcn1MLGw58MGOqUBA7pfonFN31Gc4kx6jZA8FHf4XAUxCHjyOMfKfx0sX9JFKrymHA9D6e37jXoLe7dflwfg5rgvgjyjSsnXFbzAeA9CWNp%2FtelfAXJ%2F5kVzFQMTGbI8XBvkp8%2FizSeDOqAF5auSYBQPAZI1YC%2BKFCcpuhq92CCV8N71fW6tkoVYzQwycE5v0E8mrVcA8Jj45WO9ezuzGIX1WPFh8XKijs1PVmZojz9a&X-Amz-Signature=e272564848078c062b51d7966b015d28539aca41504b3ad70bb702f6d76ebddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRXJFKL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGT7A36U0Dd7SRFUm3cAyiltCC0hEEorladJq%2BVk%2BIH3AiEA%2FP%2FHPssBjPzs6uD05V039RySi8TUAqeIpLIH0eeZ4ucqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6NECRplmI5yCJTGircA3nZGUvvtNnHQ2KshvOtPUQ8s0fNGmJDV1RGgww5o2O833ZYXconVFyITclv2tQvTyFspmrZMQ0DABjCSSF8vMJtmJBg%2F%2F8ePXJYPIEG599c0cfUMB4ZJ8W9KhVonh6j%2FbhjSK7Jepmj0Fg9o2eYaTQK0Mb5fjrxI8Ltvtochi3VopVMYAV0QRcGr7PpZTkEIucV%2Fhb%2F4WpCTjL%2FSG6h%2F%2Bjxr6Jn0QGpuGmvTnWORBN8aY5qztpjl8sTSrLS7M6Vj0JYb3lE9zm0Nme3T3d6Wk9PyG1yugmjn6zdp4E4c2dd21bZ13c4uJIYVa7nCJvbMzLl1svfldRManJBIlV6yE3L1wEewxAgscbXwkZdttvICd%2FD4YyMyIOXvk7NuCovD38k3kIi6jT6U8Dz9LqpgaPNLSSaDCp%2BcA%2B4E%2B0%2F7hLqCQLigCCIDPyyX30ZEsFHRdbT5BMRwwUZsmxfRyj9dyMFev8jfQOOqbbtZlcZsVlRa%2F0JCOh5cKVSPkHCBeO7QZmitjrucSmuuA03p26CH9MiVJDvr%2BwXS0yzBrIohv0l%2BkyCByPHMp40sq2837Mh17tG9EZYpHH%2BbUlYEH6M9FFQ%2Ft6Me19G1VgwN1uKWcx12TPk6rFURJVoUcn1MLGw58MGOqUBA7pfonFN31Gc4kx6jZA8FHf4XAUxCHjyOMfKfx0sX9JFKrymHA9D6e37jXoLe7dflwfg5rgvgjyjSsnXFbzAeA9CWNp%2FtelfAXJ%2F5kVzFQMTGbI8XBvkp8%2FizSeDOqAF5auSYBQPAZI1YC%2BKFCcpuhq92CCV8N71fW6tkoVYzQwycE5v0E8mrVcA8Jj45WO9ezuzGIX1WPFh8XKijs1PVmZojz9a&X-Amz-Signature=890292865ac7211ba3c6432291ed01560a8b4b623a2ecf889ab549aaebbd1f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRXJFKL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGT7A36U0Dd7SRFUm3cAyiltCC0hEEorladJq%2BVk%2BIH3AiEA%2FP%2FHPssBjPzs6uD05V039RySi8TUAqeIpLIH0eeZ4ucqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6NECRplmI5yCJTGircA3nZGUvvtNnHQ2KshvOtPUQ8s0fNGmJDV1RGgww5o2O833ZYXconVFyITclv2tQvTyFspmrZMQ0DABjCSSF8vMJtmJBg%2F%2F8ePXJYPIEG599c0cfUMB4ZJ8W9KhVonh6j%2FbhjSK7Jepmj0Fg9o2eYaTQK0Mb5fjrxI8Ltvtochi3VopVMYAV0QRcGr7PpZTkEIucV%2Fhb%2F4WpCTjL%2FSG6h%2F%2Bjxr6Jn0QGpuGmvTnWORBN8aY5qztpjl8sTSrLS7M6Vj0JYb3lE9zm0Nme3T3d6Wk9PyG1yugmjn6zdp4E4c2dd21bZ13c4uJIYVa7nCJvbMzLl1svfldRManJBIlV6yE3L1wEewxAgscbXwkZdttvICd%2FD4YyMyIOXvk7NuCovD38k3kIi6jT6U8Dz9LqpgaPNLSSaDCp%2BcA%2B4E%2B0%2F7hLqCQLigCCIDPyyX30ZEsFHRdbT5BMRwwUZsmxfRyj9dyMFev8jfQOOqbbtZlcZsVlRa%2F0JCOh5cKVSPkHCBeO7QZmitjrucSmuuA03p26CH9MiVJDvr%2BwXS0yzBrIohv0l%2BkyCByPHMp40sq2837Mh17tG9EZYpHH%2BbUlYEH6M9FFQ%2Ft6Me19G1VgwN1uKWcx12TPk6rFURJVoUcn1MLGw58MGOqUBA7pfonFN31Gc4kx6jZA8FHf4XAUxCHjyOMfKfx0sX9JFKrymHA9D6e37jXoLe7dflwfg5rgvgjyjSsnXFbzAeA9CWNp%2FtelfAXJ%2F5kVzFQMTGbI8XBvkp8%2FizSeDOqAF5auSYBQPAZI1YC%2BKFCcpuhq92CCV8N71fW6tkoVYzQwycE5v0E8mrVcA8Jj45WO9ezuzGIX1WPFh8XKijs1PVmZojz9a&X-Amz-Signature=f2699f4cfb3405b81debf833887036dccf0efa86fadd507c86a9b5c47fc12ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
