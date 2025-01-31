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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQO2Q3X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfbWGpzYcGv88y%2BMjqe%2FDcriWt59n%2BG0WinfPjuH%2BamAiEAwvV7RhMCq9Z65ia2IxWqbFa2Eft0fDk2U%2FxKZll%2FZkQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY3KiVGoO7l3VAhJSrcA71vvO20PwdlNHakrnx88n1V3EOUEeU6EfKMi2dMM9RlYP8TnVJL4Q8VRnDPAmwkdW726kSHQmVY%2F10LgrXTzG8illWrZGkdNO8Ly6Eo%2BTnNgIV7wAnrVITHqWwsdmDHVV6wxbjrXfSkz8D3koEMdSNOebwp0eNYJH4BMhWwNdJVXmgkupXH5Cq5mukiN2yGhsQxlZJ5MNeF9AbSriUSMWlm0PlDdN5TewRENMkXMIWyXAWArtq8gRXpo%2BEXx8zlmBvBWws6YL2zvUiTtip8Xke1J%2FcTsCYIG%2FUQJcV5FAZpcyXpIMG%2BNlHwauj1w7eygA73%2B0PgMcQxt49oKr00x7jyfn543gMDvXvQWIpBAJPig4BL%2FHEVFtGTmk%2BxWJlSyv8gu4fSNXr2CdtvIJXu3HQsITwgUnTdxUZwG8H0yx8yD%2Ffipa54I4kTnJylRdRAmqT0ghtiUQg4Vu2nFoHGgl3mdWXQW4P7NfBr9LhRifIRgERP5UFWlJiwRAIuYHWqlOwUFqbLtc1J1ZmZvKgcmTwGeasoir8nkrPlqtQHVgEioLFmyHWI3WUoUxx2ba0cmKve0rDSF8cxYn4gdQ%2BJxfxwpdaML16GkXTiQ0WOqWEAZwxHp8IcI3uclUdxMK3J87wGOqUBmS9mgQmyJbajkhfjwOYE5i2H%2FlC3xmf1vK9q0ylCJJWU46eK9AALDUDpcmqNI64GflBRL%2F2o9mhJfLgK48eyQRF6QfkDY6L5jSP6nPCMV7Dq2TNx7Jw8BBKK6fWCNqrzpYp60UsZe0C9Vhx%2Fn83MunRUD22JMprxXAVtF33ErGXXGsb6v%2FAI%2FTIpYEw3V33vTFTTIgwFGyBrmw2%2BywmIY%2BGLcskG&X-Amz-Signature=d250c9fed39d6b52dfd4a668a1a44ba6134e99d5a360becc308280f8a72b2147&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQO2Q3X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfbWGpzYcGv88y%2BMjqe%2FDcriWt59n%2BG0WinfPjuH%2BamAiEAwvV7RhMCq9Z65ia2IxWqbFa2Eft0fDk2U%2FxKZll%2FZkQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY3KiVGoO7l3VAhJSrcA71vvO20PwdlNHakrnx88n1V3EOUEeU6EfKMi2dMM9RlYP8TnVJL4Q8VRnDPAmwkdW726kSHQmVY%2F10LgrXTzG8illWrZGkdNO8Ly6Eo%2BTnNgIV7wAnrVITHqWwsdmDHVV6wxbjrXfSkz8D3koEMdSNOebwp0eNYJH4BMhWwNdJVXmgkupXH5Cq5mukiN2yGhsQxlZJ5MNeF9AbSriUSMWlm0PlDdN5TewRENMkXMIWyXAWArtq8gRXpo%2BEXx8zlmBvBWws6YL2zvUiTtip8Xke1J%2FcTsCYIG%2FUQJcV5FAZpcyXpIMG%2BNlHwauj1w7eygA73%2B0PgMcQxt49oKr00x7jyfn543gMDvXvQWIpBAJPig4BL%2FHEVFtGTmk%2BxWJlSyv8gu4fSNXr2CdtvIJXu3HQsITwgUnTdxUZwG8H0yx8yD%2Ffipa54I4kTnJylRdRAmqT0ghtiUQg4Vu2nFoHGgl3mdWXQW4P7NfBr9LhRifIRgERP5UFWlJiwRAIuYHWqlOwUFqbLtc1J1ZmZvKgcmTwGeasoir8nkrPlqtQHVgEioLFmyHWI3WUoUxx2ba0cmKve0rDSF8cxYn4gdQ%2BJxfxwpdaML16GkXTiQ0WOqWEAZwxHp8IcI3uclUdxMK3J87wGOqUBmS9mgQmyJbajkhfjwOYE5i2H%2FlC3xmf1vK9q0ylCJJWU46eK9AALDUDpcmqNI64GflBRL%2F2o9mhJfLgK48eyQRF6QfkDY6L5jSP6nPCMV7Dq2TNx7Jw8BBKK6fWCNqrzpYp60UsZe0C9Vhx%2Fn83MunRUD22JMprxXAVtF33ErGXXGsb6v%2FAI%2FTIpYEw3V33vTFTTIgwFGyBrmw2%2BywmIY%2BGLcskG&X-Amz-Signature=fbee562692f1cd6a5cedc45d6dc9e08f578d4e636ab2c3de9824054d4372673f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQO2Q3X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfbWGpzYcGv88y%2BMjqe%2FDcriWt59n%2BG0WinfPjuH%2BamAiEAwvV7RhMCq9Z65ia2IxWqbFa2Eft0fDk2U%2FxKZll%2FZkQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY3KiVGoO7l3VAhJSrcA71vvO20PwdlNHakrnx88n1V3EOUEeU6EfKMi2dMM9RlYP8TnVJL4Q8VRnDPAmwkdW726kSHQmVY%2F10LgrXTzG8illWrZGkdNO8Ly6Eo%2BTnNgIV7wAnrVITHqWwsdmDHVV6wxbjrXfSkz8D3koEMdSNOebwp0eNYJH4BMhWwNdJVXmgkupXH5Cq5mukiN2yGhsQxlZJ5MNeF9AbSriUSMWlm0PlDdN5TewRENMkXMIWyXAWArtq8gRXpo%2BEXx8zlmBvBWws6YL2zvUiTtip8Xke1J%2FcTsCYIG%2FUQJcV5FAZpcyXpIMG%2BNlHwauj1w7eygA73%2B0PgMcQxt49oKr00x7jyfn543gMDvXvQWIpBAJPig4BL%2FHEVFtGTmk%2BxWJlSyv8gu4fSNXr2CdtvIJXu3HQsITwgUnTdxUZwG8H0yx8yD%2Ffipa54I4kTnJylRdRAmqT0ghtiUQg4Vu2nFoHGgl3mdWXQW4P7NfBr9LhRifIRgERP5UFWlJiwRAIuYHWqlOwUFqbLtc1J1ZmZvKgcmTwGeasoir8nkrPlqtQHVgEioLFmyHWI3WUoUxx2ba0cmKve0rDSF8cxYn4gdQ%2BJxfxwpdaML16GkXTiQ0WOqWEAZwxHp8IcI3uclUdxMK3J87wGOqUBmS9mgQmyJbajkhfjwOYE5i2H%2FlC3xmf1vK9q0ylCJJWU46eK9AALDUDpcmqNI64GflBRL%2F2o9mhJfLgK48eyQRF6QfkDY6L5jSP6nPCMV7Dq2TNx7Jw8BBKK6fWCNqrzpYp60UsZe0C9Vhx%2Fn83MunRUD22JMprxXAVtF33ErGXXGsb6v%2FAI%2FTIpYEw3V33vTFTTIgwFGyBrmw2%2BywmIY%2BGLcskG&X-Amz-Signature=03bd9b6c1ed90499c89e8c67e57f7eef70f9dc6c8b54ce26c8896c47d1da63a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQO2Q3X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfbWGpzYcGv88y%2BMjqe%2FDcriWt59n%2BG0WinfPjuH%2BamAiEAwvV7RhMCq9Z65ia2IxWqbFa2Eft0fDk2U%2FxKZll%2FZkQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY3KiVGoO7l3VAhJSrcA71vvO20PwdlNHakrnx88n1V3EOUEeU6EfKMi2dMM9RlYP8TnVJL4Q8VRnDPAmwkdW726kSHQmVY%2F10LgrXTzG8illWrZGkdNO8Ly6Eo%2BTnNgIV7wAnrVITHqWwsdmDHVV6wxbjrXfSkz8D3koEMdSNOebwp0eNYJH4BMhWwNdJVXmgkupXH5Cq5mukiN2yGhsQxlZJ5MNeF9AbSriUSMWlm0PlDdN5TewRENMkXMIWyXAWArtq8gRXpo%2BEXx8zlmBvBWws6YL2zvUiTtip8Xke1J%2FcTsCYIG%2FUQJcV5FAZpcyXpIMG%2BNlHwauj1w7eygA73%2B0PgMcQxt49oKr00x7jyfn543gMDvXvQWIpBAJPig4BL%2FHEVFtGTmk%2BxWJlSyv8gu4fSNXr2CdtvIJXu3HQsITwgUnTdxUZwG8H0yx8yD%2Ffipa54I4kTnJylRdRAmqT0ghtiUQg4Vu2nFoHGgl3mdWXQW4P7NfBr9LhRifIRgERP5UFWlJiwRAIuYHWqlOwUFqbLtc1J1ZmZvKgcmTwGeasoir8nkrPlqtQHVgEioLFmyHWI3WUoUxx2ba0cmKve0rDSF8cxYn4gdQ%2BJxfxwpdaML16GkXTiQ0WOqWEAZwxHp8IcI3uclUdxMK3J87wGOqUBmS9mgQmyJbajkhfjwOYE5i2H%2FlC3xmf1vK9q0ylCJJWU46eK9AALDUDpcmqNI64GflBRL%2F2o9mhJfLgK48eyQRF6QfkDY6L5jSP6nPCMV7Dq2TNx7Jw8BBKK6fWCNqrzpYp60UsZe0C9Vhx%2Fn83MunRUD22JMprxXAVtF33ErGXXGsb6v%2FAI%2FTIpYEw3V33vTFTTIgwFGyBrmw2%2BywmIY%2BGLcskG&X-Amz-Signature=6073ef861544f0dab3ab423dc031bd621bd74f624d4c3c8265c565d86b5afbb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQO2Q3X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfbWGpzYcGv88y%2BMjqe%2FDcriWt59n%2BG0WinfPjuH%2BamAiEAwvV7RhMCq9Z65ia2IxWqbFa2Eft0fDk2U%2FxKZll%2FZkQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY3KiVGoO7l3VAhJSrcA71vvO20PwdlNHakrnx88n1V3EOUEeU6EfKMi2dMM9RlYP8TnVJL4Q8VRnDPAmwkdW726kSHQmVY%2F10LgrXTzG8illWrZGkdNO8Ly6Eo%2BTnNgIV7wAnrVITHqWwsdmDHVV6wxbjrXfSkz8D3koEMdSNOebwp0eNYJH4BMhWwNdJVXmgkupXH5Cq5mukiN2yGhsQxlZJ5MNeF9AbSriUSMWlm0PlDdN5TewRENMkXMIWyXAWArtq8gRXpo%2BEXx8zlmBvBWws6YL2zvUiTtip8Xke1J%2FcTsCYIG%2FUQJcV5FAZpcyXpIMG%2BNlHwauj1w7eygA73%2B0PgMcQxt49oKr00x7jyfn543gMDvXvQWIpBAJPig4BL%2FHEVFtGTmk%2BxWJlSyv8gu4fSNXr2CdtvIJXu3HQsITwgUnTdxUZwG8H0yx8yD%2Ffipa54I4kTnJylRdRAmqT0ghtiUQg4Vu2nFoHGgl3mdWXQW4P7NfBr9LhRifIRgERP5UFWlJiwRAIuYHWqlOwUFqbLtc1J1ZmZvKgcmTwGeasoir8nkrPlqtQHVgEioLFmyHWI3WUoUxx2ba0cmKve0rDSF8cxYn4gdQ%2BJxfxwpdaML16GkXTiQ0WOqWEAZwxHp8IcI3uclUdxMK3J87wGOqUBmS9mgQmyJbajkhfjwOYE5i2H%2FlC3xmf1vK9q0ylCJJWU46eK9AALDUDpcmqNI64GflBRL%2F2o9mhJfLgK48eyQRF6QfkDY6L5jSP6nPCMV7Dq2TNx7Jw8BBKK6fWCNqrzpYp60UsZe0C9Vhx%2Fn83MunRUD22JMprxXAVtF33ErGXXGsb6v%2FAI%2FTIpYEw3V33vTFTTIgwFGyBrmw2%2BywmIY%2BGLcskG&X-Amz-Signature=86843a52e049d16af8354777e7bc699930d029f689cce7b7b2d812181e7ceac4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRQO2Q3X%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfbWGpzYcGv88y%2BMjqe%2FDcriWt59n%2BG0WinfPjuH%2BamAiEAwvV7RhMCq9Z65ia2IxWqbFa2Eft0fDk2U%2FxKZll%2FZkQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY3KiVGoO7l3VAhJSrcA71vvO20PwdlNHakrnx88n1V3EOUEeU6EfKMi2dMM9RlYP8TnVJL4Q8VRnDPAmwkdW726kSHQmVY%2F10LgrXTzG8illWrZGkdNO8Ly6Eo%2BTnNgIV7wAnrVITHqWwsdmDHVV6wxbjrXfSkz8D3koEMdSNOebwp0eNYJH4BMhWwNdJVXmgkupXH5Cq5mukiN2yGhsQxlZJ5MNeF9AbSriUSMWlm0PlDdN5TewRENMkXMIWyXAWArtq8gRXpo%2BEXx8zlmBvBWws6YL2zvUiTtip8Xke1J%2FcTsCYIG%2FUQJcV5FAZpcyXpIMG%2BNlHwauj1w7eygA73%2B0PgMcQxt49oKr00x7jyfn543gMDvXvQWIpBAJPig4BL%2FHEVFtGTmk%2BxWJlSyv8gu4fSNXr2CdtvIJXu3HQsITwgUnTdxUZwG8H0yx8yD%2Ffipa54I4kTnJylRdRAmqT0ghtiUQg4Vu2nFoHGgl3mdWXQW4P7NfBr9LhRifIRgERP5UFWlJiwRAIuYHWqlOwUFqbLtc1J1ZmZvKgcmTwGeasoir8nkrPlqtQHVgEioLFmyHWI3WUoUxx2ba0cmKve0rDSF8cxYn4gdQ%2BJxfxwpdaML16GkXTiQ0WOqWEAZwxHp8IcI3uclUdxMK3J87wGOqUBmS9mgQmyJbajkhfjwOYE5i2H%2FlC3xmf1vK9q0ylCJJWU46eK9AALDUDpcmqNI64GflBRL%2F2o9mhJfLgK48eyQRF6QfkDY6L5jSP6nPCMV7Dq2TNx7Jw8BBKK6fWCNqrzpYp60UsZe0C9Vhx%2Fn83MunRUD22JMprxXAVtF33ErGXXGsb6v%2FAI%2FTIpYEw3V33vTFTTIgwFGyBrmw2%2BywmIY%2BGLcskG&X-Amz-Signature=283e9a8bb0d1efbcf5ac1734fd8392d478c7bc0a82cbea022b9bcfccc0344f96&X-Amz-SignedHeaders=host&x-id=GetObject)
