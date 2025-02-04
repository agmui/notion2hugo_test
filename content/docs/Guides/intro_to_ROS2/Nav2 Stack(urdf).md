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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR3XMLT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD6BccU%2BJTTKZIooPvUp6sCE5Dgum%2FidvxmAw0rYSKPxQIhANtql%2B6ucInKlq6b1UUEurdrqoeeUd5akw71fO1uWAlVKv8DCC4QABoMNjM3NDIzMTgzODA1Igx66jqhOir2eCC6V1cq3ANeJi5y0KAmFb8O3UWxhQ6dbF4G2qxfbfHzPHz9IM%2Fzj%2BvmTiLUinKp4UucqqPwux8Gm4e5qIhSIozQGBm3OoRIPoVCpkyTQu1Wgbvl2dbRkhEwcJmdwV9MESoQe9g9BrAa1D3OGwjnM%2Fpuy8roCi9KPadByB%2BfaRUw88QLy0VZFsUHTFL0J%2FzWi%2Bdx6BntICC8rNMENQ9nG0UraH4XjrMb9uqvnlNgjO31yocydOpLxY2GV%2B6%2FHn68G2iCCVxIxCAyJ3eq%2B3nmz4WlPKxH7lZBR9dTt77r9tj%2Fjwv%2Bu40UDMKv%2FMsvJfqvaEwY%2Bg5QFsoPbtKhIcGcfjFf4TwmKxLVxhVEye7asGZtRawrNXENNdKHxWm2gUFAkQrPwD8tm88eDq3zlppwrTlTtzTSGG3t6UWcTxrTruSMDJBsr3yeXC5reVF6gPu7lhMfEPqY90NpgDj2rSUYfme%2BbxR9CzAvhJduo%2BZbo6FWEZeF7zd9EW8SakHtcOCIcHtTHTzScUiUy3sloAFMKYHwFoe6lmALji8fveW3DWhDtaB85txI%2FfODELUHnw7vRV6nyPAIcAVdSS%2F1rF2ZRAoYsKBxHojcteSQm%2Fi3pfBq84kPpqAr7iNjURPkKa9qNM7UbzCzn4i9BjqkAVhPc1RbpyXZdLNOkL9tj%2Bzs36NZU382XU1yNnNITvJJWspqFN1Sueb9DsevaIiQkejYR7d8rg%2B8tkdZMBR50RPxBUpKtzpin31FFHyX8xusc0Je6znQEdLIqlvX1%2BvByDE5R4hwSA%2FZ2ouQN6%2BxaElFAUmgsh1yKYIiL8xB2JNMYT4eEd1IUuGqP9G4ZYp2ilpayl9I9SJC3p1gmMtkrDwYbSJo&X-Amz-Signature=6bb5030bd96fd628d0d197df5411dcb6b7bd462bb317d43b0e84e49b81e1cb87&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR3XMLT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD6BccU%2BJTTKZIooPvUp6sCE5Dgum%2FidvxmAw0rYSKPxQIhANtql%2B6ucInKlq6b1UUEurdrqoeeUd5akw71fO1uWAlVKv8DCC4QABoMNjM3NDIzMTgzODA1Igx66jqhOir2eCC6V1cq3ANeJi5y0KAmFb8O3UWxhQ6dbF4G2qxfbfHzPHz9IM%2Fzj%2BvmTiLUinKp4UucqqPwux8Gm4e5qIhSIozQGBm3OoRIPoVCpkyTQu1Wgbvl2dbRkhEwcJmdwV9MESoQe9g9BrAa1D3OGwjnM%2Fpuy8roCi9KPadByB%2BfaRUw88QLy0VZFsUHTFL0J%2FzWi%2Bdx6BntICC8rNMENQ9nG0UraH4XjrMb9uqvnlNgjO31yocydOpLxY2GV%2B6%2FHn68G2iCCVxIxCAyJ3eq%2B3nmz4WlPKxH7lZBR9dTt77r9tj%2Fjwv%2Bu40UDMKv%2FMsvJfqvaEwY%2Bg5QFsoPbtKhIcGcfjFf4TwmKxLVxhVEye7asGZtRawrNXENNdKHxWm2gUFAkQrPwD8tm88eDq3zlppwrTlTtzTSGG3t6UWcTxrTruSMDJBsr3yeXC5reVF6gPu7lhMfEPqY90NpgDj2rSUYfme%2BbxR9CzAvhJduo%2BZbo6FWEZeF7zd9EW8SakHtcOCIcHtTHTzScUiUy3sloAFMKYHwFoe6lmALji8fveW3DWhDtaB85txI%2FfODELUHnw7vRV6nyPAIcAVdSS%2F1rF2ZRAoYsKBxHojcteSQm%2Fi3pfBq84kPpqAr7iNjURPkKa9qNM7UbzCzn4i9BjqkAVhPc1RbpyXZdLNOkL9tj%2Bzs36NZU382XU1yNnNITvJJWspqFN1Sueb9DsevaIiQkejYR7d8rg%2B8tkdZMBR50RPxBUpKtzpin31FFHyX8xusc0Je6znQEdLIqlvX1%2BvByDE5R4hwSA%2FZ2ouQN6%2BxaElFAUmgsh1yKYIiL8xB2JNMYT4eEd1IUuGqP9G4ZYp2ilpayl9I9SJC3p1gmMtkrDwYbSJo&X-Amz-Signature=eaf2c8f9402b5ac0cfb89acdcf15ce69da80d6a425297cb712897d62577379d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR3XMLT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD6BccU%2BJTTKZIooPvUp6sCE5Dgum%2FidvxmAw0rYSKPxQIhANtql%2B6ucInKlq6b1UUEurdrqoeeUd5akw71fO1uWAlVKv8DCC4QABoMNjM3NDIzMTgzODA1Igx66jqhOir2eCC6V1cq3ANeJi5y0KAmFb8O3UWxhQ6dbF4G2qxfbfHzPHz9IM%2Fzj%2BvmTiLUinKp4UucqqPwux8Gm4e5qIhSIozQGBm3OoRIPoVCpkyTQu1Wgbvl2dbRkhEwcJmdwV9MESoQe9g9BrAa1D3OGwjnM%2Fpuy8roCi9KPadByB%2BfaRUw88QLy0VZFsUHTFL0J%2FzWi%2Bdx6BntICC8rNMENQ9nG0UraH4XjrMb9uqvnlNgjO31yocydOpLxY2GV%2B6%2FHn68G2iCCVxIxCAyJ3eq%2B3nmz4WlPKxH7lZBR9dTt77r9tj%2Fjwv%2Bu40UDMKv%2FMsvJfqvaEwY%2Bg5QFsoPbtKhIcGcfjFf4TwmKxLVxhVEye7asGZtRawrNXENNdKHxWm2gUFAkQrPwD8tm88eDq3zlppwrTlTtzTSGG3t6UWcTxrTruSMDJBsr3yeXC5reVF6gPu7lhMfEPqY90NpgDj2rSUYfme%2BbxR9CzAvhJduo%2BZbo6FWEZeF7zd9EW8SakHtcOCIcHtTHTzScUiUy3sloAFMKYHwFoe6lmALji8fveW3DWhDtaB85txI%2FfODELUHnw7vRV6nyPAIcAVdSS%2F1rF2ZRAoYsKBxHojcteSQm%2Fi3pfBq84kPpqAr7iNjURPkKa9qNM7UbzCzn4i9BjqkAVhPc1RbpyXZdLNOkL9tj%2Bzs36NZU382XU1yNnNITvJJWspqFN1Sueb9DsevaIiQkejYR7d8rg%2B8tkdZMBR50RPxBUpKtzpin31FFHyX8xusc0Je6znQEdLIqlvX1%2BvByDE5R4hwSA%2FZ2ouQN6%2BxaElFAUmgsh1yKYIiL8xB2JNMYT4eEd1IUuGqP9G4ZYp2ilpayl9I9SJC3p1gmMtkrDwYbSJo&X-Amz-Signature=e82a22df34fc7afe5b55c0647278ac24ba5f7656f6f07abb8e4b94a6bd461a81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR3XMLT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD6BccU%2BJTTKZIooPvUp6sCE5Dgum%2FidvxmAw0rYSKPxQIhANtql%2B6ucInKlq6b1UUEurdrqoeeUd5akw71fO1uWAlVKv8DCC4QABoMNjM3NDIzMTgzODA1Igx66jqhOir2eCC6V1cq3ANeJi5y0KAmFb8O3UWxhQ6dbF4G2qxfbfHzPHz9IM%2Fzj%2BvmTiLUinKp4UucqqPwux8Gm4e5qIhSIozQGBm3OoRIPoVCpkyTQu1Wgbvl2dbRkhEwcJmdwV9MESoQe9g9BrAa1D3OGwjnM%2Fpuy8roCi9KPadByB%2BfaRUw88QLy0VZFsUHTFL0J%2FzWi%2Bdx6BntICC8rNMENQ9nG0UraH4XjrMb9uqvnlNgjO31yocydOpLxY2GV%2B6%2FHn68G2iCCVxIxCAyJ3eq%2B3nmz4WlPKxH7lZBR9dTt77r9tj%2Fjwv%2Bu40UDMKv%2FMsvJfqvaEwY%2Bg5QFsoPbtKhIcGcfjFf4TwmKxLVxhVEye7asGZtRawrNXENNdKHxWm2gUFAkQrPwD8tm88eDq3zlppwrTlTtzTSGG3t6UWcTxrTruSMDJBsr3yeXC5reVF6gPu7lhMfEPqY90NpgDj2rSUYfme%2BbxR9CzAvhJduo%2BZbo6FWEZeF7zd9EW8SakHtcOCIcHtTHTzScUiUy3sloAFMKYHwFoe6lmALji8fveW3DWhDtaB85txI%2FfODELUHnw7vRV6nyPAIcAVdSS%2F1rF2ZRAoYsKBxHojcteSQm%2Fi3pfBq84kPpqAr7iNjURPkKa9qNM7UbzCzn4i9BjqkAVhPc1RbpyXZdLNOkL9tj%2Bzs36NZU382XU1yNnNITvJJWspqFN1Sueb9DsevaIiQkejYR7d8rg%2B8tkdZMBR50RPxBUpKtzpin31FFHyX8xusc0Je6znQEdLIqlvX1%2BvByDE5R4hwSA%2FZ2ouQN6%2BxaElFAUmgsh1yKYIiL8xB2JNMYT4eEd1IUuGqP9G4ZYp2ilpayl9I9SJC3p1gmMtkrDwYbSJo&X-Amz-Signature=fcaa2d4ebd3d5143a203e880538e44b241a8e49db940db90991a76ac62b1adc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR3XMLT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD6BccU%2BJTTKZIooPvUp6sCE5Dgum%2FidvxmAw0rYSKPxQIhANtql%2B6ucInKlq6b1UUEurdrqoeeUd5akw71fO1uWAlVKv8DCC4QABoMNjM3NDIzMTgzODA1Igx66jqhOir2eCC6V1cq3ANeJi5y0KAmFb8O3UWxhQ6dbF4G2qxfbfHzPHz9IM%2Fzj%2BvmTiLUinKp4UucqqPwux8Gm4e5qIhSIozQGBm3OoRIPoVCpkyTQu1Wgbvl2dbRkhEwcJmdwV9MESoQe9g9BrAa1D3OGwjnM%2Fpuy8roCi9KPadByB%2BfaRUw88QLy0VZFsUHTFL0J%2FzWi%2Bdx6BntICC8rNMENQ9nG0UraH4XjrMb9uqvnlNgjO31yocydOpLxY2GV%2B6%2FHn68G2iCCVxIxCAyJ3eq%2B3nmz4WlPKxH7lZBR9dTt77r9tj%2Fjwv%2Bu40UDMKv%2FMsvJfqvaEwY%2Bg5QFsoPbtKhIcGcfjFf4TwmKxLVxhVEye7asGZtRawrNXENNdKHxWm2gUFAkQrPwD8tm88eDq3zlppwrTlTtzTSGG3t6UWcTxrTruSMDJBsr3yeXC5reVF6gPu7lhMfEPqY90NpgDj2rSUYfme%2BbxR9CzAvhJduo%2BZbo6FWEZeF7zd9EW8SakHtcOCIcHtTHTzScUiUy3sloAFMKYHwFoe6lmALji8fveW3DWhDtaB85txI%2FfODELUHnw7vRV6nyPAIcAVdSS%2F1rF2ZRAoYsKBxHojcteSQm%2Fi3pfBq84kPpqAr7iNjURPkKa9qNM7UbzCzn4i9BjqkAVhPc1RbpyXZdLNOkL9tj%2Bzs36NZU382XU1yNnNITvJJWspqFN1Sueb9DsevaIiQkejYR7d8rg%2B8tkdZMBR50RPxBUpKtzpin31FFHyX8xusc0Je6znQEdLIqlvX1%2BvByDE5R4hwSA%2FZ2ouQN6%2BxaElFAUmgsh1yKYIiL8xB2JNMYT4eEd1IUuGqP9G4ZYp2ilpayl9I9SJC3p1gmMtkrDwYbSJo&X-Amz-Signature=62abb3f5f59713a0ad11769ad5950af0d7528ac744e62f06a46755852a3b6989&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR3XMLT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD6BccU%2BJTTKZIooPvUp6sCE5Dgum%2FidvxmAw0rYSKPxQIhANtql%2B6ucInKlq6b1UUEurdrqoeeUd5akw71fO1uWAlVKv8DCC4QABoMNjM3NDIzMTgzODA1Igx66jqhOir2eCC6V1cq3ANeJi5y0KAmFb8O3UWxhQ6dbF4G2qxfbfHzPHz9IM%2Fzj%2BvmTiLUinKp4UucqqPwux8Gm4e5qIhSIozQGBm3OoRIPoVCpkyTQu1Wgbvl2dbRkhEwcJmdwV9MESoQe9g9BrAa1D3OGwjnM%2Fpuy8roCi9KPadByB%2BfaRUw88QLy0VZFsUHTFL0J%2FzWi%2Bdx6BntICC8rNMENQ9nG0UraH4XjrMb9uqvnlNgjO31yocydOpLxY2GV%2B6%2FHn68G2iCCVxIxCAyJ3eq%2B3nmz4WlPKxH7lZBR9dTt77r9tj%2Fjwv%2Bu40UDMKv%2FMsvJfqvaEwY%2Bg5QFsoPbtKhIcGcfjFf4TwmKxLVxhVEye7asGZtRawrNXENNdKHxWm2gUFAkQrPwD8tm88eDq3zlppwrTlTtzTSGG3t6UWcTxrTruSMDJBsr3yeXC5reVF6gPu7lhMfEPqY90NpgDj2rSUYfme%2BbxR9CzAvhJduo%2BZbo6FWEZeF7zd9EW8SakHtcOCIcHtTHTzScUiUy3sloAFMKYHwFoe6lmALji8fveW3DWhDtaB85txI%2FfODELUHnw7vRV6nyPAIcAVdSS%2F1rF2ZRAoYsKBxHojcteSQm%2Fi3pfBq84kPpqAr7iNjURPkKa9qNM7UbzCzn4i9BjqkAVhPc1RbpyXZdLNOkL9tj%2Bzs36NZU382XU1yNnNITvJJWspqFN1Sueb9DsevaIiQkejYR7d8rg%2B8tkdZMBR50RPxBUpKtzpin31FFHyX8xusc0Je6znQEdLIqlvX1%2BvByDE5R4hwSA%2FZ2ouQN6%2BxaElFAUmgsh1yKYIiL8xB2JNMYT4eEd1IUuGqP9G4ZYp2ilpayl9I9SJC3p1gmMtkrDwYbSJo&X-Amz-Signature=56e28a79c9f8b51cde1e457285c359203a84f80abbda469878dbd6c50508c99f&X-Amz-SignedHeaders=host&x-id=GetObject)
