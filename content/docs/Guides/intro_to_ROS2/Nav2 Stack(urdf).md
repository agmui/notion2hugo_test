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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3VEPAF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMobEHaHEmtKr7AhGzRYfT75TbZnxv5FXRdc2Sln1DJgIhAPnIxoXSJVGDVYhOjzwD2VIOgqiSvStO05oxr4s%2F6A9ZKv8DCB4QABoMNjM3NDIzMTgzODA1Igypo3CWqfPww2aQPlEq3APuWNQgolmHfzwdcs6yz3a07MxWU83xzh3p22HjZFwUVhY1Va7dHaYdM4Un5HTSS582Mgq039WdOHd%2F2MmOoZcLz3JoNXqX5uvDWp2a4zIDOV1nNJWY623GY9Kcw1vrIMVAMQzOKff%2BfxMNVC5G%2FPpjevminymsybrdocx9i6BO7cwOr0snFe5fbUvZIpMY6DRFnPEGxShCNizxSFpwmNlYQWxaPhpQ8jYeTD9M0o9MBzdA%2BDTiFfRr8lEQuuASWEm28CVUc9gF89HQ0peTRlUUe8nXCKEa5830dn1x19A4eyoSjco%2BZd%2FJid3v1dNFpMh5EDsrv%2B2EPZMwfjnOILX4Iz2qyKG53nx18%2FsyyB3pz%2BVVGsyHFMe%2B8kV2RcBNL1J%2BasLnTKp1uwzPCCL0pubYS8ndDjxypXt828ual8SToKYaqJRU1LVIYrwxEjsgRStis28pL%2FFlEWIddVE1SeomMxZCnTunETg4rdo%2F79Hn227TCQLdVaMuRHrOEJU8Gc95b%2Bh3ynE699aPo1lRMjZX8pAbvWiKWGW6AvbDdWTU7ZFj5T08QRAc7YnXNcKtHMw780b1o22qFIYJXa%2BBdEdZv1UnvGOt46cFf215MDpxFpXh9qXtEWJoBd%2BUCjDRv6rABjqkAUeuS2DOkMcjLiH9wJtbQtDSB84aJkqEgXiYSM8j6RlAgW0Y1yiaI8qN0QknK1qSsT7ZaC2WX2wTqcTu21E%2FEXjbIHAWJDhDznLNTrlsCG2eSKqA4NediR7farqr6OViEMQMpiBvRajZWM%2BNFAIrE1FIxjCaOm9zjK67SkMOGYvtg0aclkYvagrVVUsFVHk042ARnUe71i%2BMjB%2B%2F1prl%2BQifdrvc&X-Amz-Signature=fab426d9b5c13f60616225f960f76295219c4103770517dcd3ab527fac340cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3VEPAF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMobEHaHEmtKr7AhGzRYfT75TbZnxv5FXRdc2Sln1DJgIhAPnIxoXSJVGDVYhOjzwD2VIOgqiSvStO05oxr4s%2F6A9ZKv8DCB4QABoMNjM3NDIzMTgzODA1Igypo3CWqfPww2aQPlEq3APuWNQgolmHfzwdcs6yz3a07MxWU83xzh3p22HjZFwUVhY1Va7dHaYdM4Un5HTSS582Mgq039WdOHd%2F2MmOoZcLz3JoNXqX5uvDWp2a4zIDOV1nNJWY623GY9Kcw1vrIMVAMQzOKff%2BfxMNVC5G%2FPpjevminymsybrdocx9i6BO7cwOr0snFe5fbUvZIpMY6DRFnPEGxShCNizxSFpwmNlYQWxaPhpQ8jYeTD9M0o9MBzdA%2BDTiFfRr8lEQuuASWEm28CVUc9gF89HQ0peTRlUUe8nXCKEa5830dn1x19A4eyoSjco%2BZd%2FJid3v1dNFpMh5EDsrv%2B2EPZMwfjnOILX4Iz2qyKG53nx18%2FsyyB3pz%2BVVGsyHFMe%2B8kV2RcBNL1J%2BasLnTKp1uwzPCCL0pubYS8ndDjxypXt828ual8SToKYaqJRU1LVIYrwxEjsgRStis28pL%2FFlEWIddVE1SeomMxZCnTunETg4rdo%2F79Hn227TCQLdVaMuRHrOEJU8Gc95b%2Bh3ynE699aPo1lRMjZX8pAbvWiKWGW6AvbDdWTU7ZFj5T08QRAc7YnXNcKtHMw780b1o22qFIYJXa%2BBdEdZv1UnvGOt46cFf215MDpxFpXh9qXtEWJoBd%2BUCjDRv6rABjqkAUeuS2DOkMcjLiH9wJtbQtDSB84aJkqEgXiYSM8j6RlAgW0Y1yiaI8qN0QknK1qSsT7ZaC2WX2wTqcTu21E%2FEXjbIHAWJDhDznLNTrlsCG2eSKqA4NediR7farqr6OViEMQMpiBvRajZWM%2BNFAIrE1FIxjCaOm9zjK67SkMOGYvtg0aclkYvagrVVUsFVHk042ARnUe71i%2BMjB%2B%2F1prl%2BQifdrvc&X-Amz-Signature=a418e90623684955cb5c4d0ac45e09207b0006b572425f8ef11ffcc1409faadf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3VEPAF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMobEHaHEmtKr7AhGzRYfT75TbZnxv5FXRdc2Sln1DJgIhAPnIxoXSJVGDVYhOjzwD2VIOgqiSvStO05oxr4s%2F6A9ZKv8DCB4QABoMNjM3NDIzMTgzODA1Igypo3CWqfPww2aQPlEq3APuWNQgolmHfzwdcs6yz3a07MxWU83xzh3p22HjZFwUVhY1Va7dHaYdM4Un5HTSS582Mgq039WdOHd%2F2MmOoZcLz3JoNXqX5uvDWp2a4zIDOV1nNJWY623GY9Kcw1vrIMVAMQzOKff%2BfxMNVC5G%2FPpjevminymsybrdocx9i6BO7cwOr0snFe5fbUvZIpMY6DRFnPEGxShCNizxSFpwmNlYQWxaPhpQ8jYeTD9M0o9MBzdA%2BDTiFfRr8lEQuuASWEm28CVUc9gF89HQ0peTRlUUe8nXCKEa5830dn1x19A4eyoSjco%2BZd%2FJid3v1dNFpMh5EDsrv%2B2EPZMwfjnOILX4Iz2qyKG53nx18%2FsyyB3pz%2BVVGsyHFMe%2B8kV2RcBNL1J%2BasLnTKp1uwzPCCL0pubYS8ndDjxypXt828ual8SToKYaqJRU1LVIYrwxEjsgRStis28pL%2FFlEWIddVE1SeomMxZCnTunETg4rdo%2F79Hn227TCQLdVaMuRHrOEJU8Gc95b%2Bh3ynE699aPo1lRMjZX8pAbvWiKWGW6AvbDdWTU7ZFj5T08QRAc7YnXNcKtHMw780b1o22qFIYJXa%2BBdEdZv1UnvGOt46cFf215MDpxFpXh9qXtEWJoBd%2BUCjDRv6rABjqkAUeuS2DOkMcjLiH9wJtbQtDSB84aJkqEgXiYSM8j6RlAgW0Y1yiaI8qN0QknK1qSsT7ZaC2WX2wTqcTu21E%2FEXjbIHAWJDhDznLNTrlsCG2eSKqA4NediR7farqr6OViEMQMpiBvRajZWM%2BNFAIrE1FIxjCaOm9zjK67SkMOGYvtg0aclkYvagrVVUsFVHk042ARnUe71i%2BMjB%2B%2F1prl%2BQifdrvc&X-Amz-Signature=9845c8e7f4e51ee9104e91aba7fc4572f16f667a1262d05db36ce156aeb1f456&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3VEPAF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMobEHaHEmtKr7AhGzRYfT75TbZnxv5FXRdc2Sln1DJgIhAPnIxoXSJVGDVYhOjzwD2VIOgqiSvStO05oxr4s%2F6A9ZKv8DCB4QABoMNjM3NDIzMTgzODA1Igypo3CWqfPww2aQPlEq3APuWNQgolmHfzwdcs6yz3a07MxWU83xzh3p22HjZFwUVhY1Va7dHaYdM4Un5HTSS582Mgq039WdOHd%2F2MmOoZcLz3JoNXqX5uvDWp2a4zIDOV1nNJWY623GY9Kcw1vrIMVAMQzOKff%2BfxMNVC5G%2FPpjevminymsybrdocx9i6BO7cwOr0snFe5fbUvZIpMY6DRFnPEGxShCNizxSFpwmNlYQWxaPhpQ8jYeTD9M0o9MBzdA%2BDTiFfRr8lEQuuASWEm28CVUc9gF89HQ0peTRlUUe8nXCKEa5830dn1x19A4eyoSjco%2BZd%2FJid3v1dNFpMh5EDsrv%2B2EPZMwfjnOILX4Iz2qyKG53nx18%2FsyyB3pz%2BVVGsyHFMe%2B8kV2RcBNL1J%2BasLnTKp1uwzPCCL0pubYS8ndDjxypXt828ual8SToKYaqJRU1LVIYrwxEjsgRStis28pL%2FFlEWIddVE1SeomMxZCnTunETg4rdo%2F79Hn227TCQLdVaMuRHrOEJU8Gc95b%2Bh3ynE699aPo1lRMjZX8pAbvWiKWGW6AvbDdWTU7ZFj5T08QRAc7YnXNcKtHMw780b1o22qFIYJXa%2BBdEdZv1UnvGOt46cFf215MDpxFpXh9qXtEWJoBd%2BUCjDRv6rABjqkAUeuS2DOkMcjLiH9wJtbQtDSB84aJkqEgXiYSM8j6RlAgW0Y1yiaI8qN0QknK1qSsT7ZaC2WX2wTqcTu21E%2FEXjbIHAWJDhDznLNTrlsCG2eSKqA4NediR7farqr6OViEMQMpiBvRajZWM%2BNFAIrE1FIxjCaOm9zjK67SkMOGYvtg0aclkYvagrVVUsFVHk042ARnUe71i%2BMjB%2B%2F1prl%2BQifdrvc&X-Amz-Signature=1f32d431d333a05758fb4b436b2572ad18f527bb2b08a74574acee0f7b6190b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3VEPAF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMobEHaHEmtKr7AhGzRYfT75TbZnxv5FXRdc2Sln1DJgIhAPnIxoXSJVGDVYhOjzwD2VIOgqiSvStO05oxr4s%2F6A9ZKv8DCB4QABoMNjM3NDIzMTgzODA1Igypo3CWqfPww2aQPlEq3APuWNQgolmHfzwdcs6yz3a07MxWU83xzh3p22HjZFwUVhY1Va7dHaYdM4Un5HTSS582Mgq039WdOHd%2F2MmOoZcLz3JoNXqX5uvDWp2a4zIDOV1nNJWY623GY9Kcw1vrIMVAMQzOKff%2BfxMNVC5G%2FPpjevminymsybrdocx9i6BO7cwOr0snFe5fbUvZIpMY6DRFnPEGxShCNizxSFpwmNlYQWxaPhpQ8jYeTD9M0o9MBzdA%2BDTiFfRr8lEQuuASWEm28CVUc9gF89HQ0peTRlUUe8nXCKEa5830dn1x19A4eyoSjco%2BZd%2FJid3v1dNFpMh5EDsrv%2B2EPZMwfjnOILX4Iz2qyKG53nx18%2FsyyB3pz%2BVVGsyHFMe%2B8kV2RcBNL1J%2BasLnTKp1uwzPCCL0pubYS8ndDjxypXt828ual8SToKYaqJRU1LVIYrwxEjsgRStis28pL%2FFlEWIddVE1SeomMxZCnTunETg4rdo%2F79Hn227TCQLdVaMuRHrOEJU8Gc95b%2Bh3ynE699aPo1lRMjZX8pAbvWiKWGW6AvbDdWTU7ZFj5T08QRAc7YnXNcKtHMw780b1o22qFIYJXa%2BBdEdZv1UnvGOt46cFf215MDpxFpXh9qXtEWJoBd%2BUCjDRv6rABjqkAUeuS2DOkMcjLiH9wJtbQtDSB84aJkqEgXiYSM8j6RlAgW0Y1yiaI8qN0QknK1qSsT7ZaC2WX2wTqcTu21E%2FEXjbIHAWJDhDznLNTrlsCG2eSKqA4NediR7farqr6OViEMQMpiBvRajZWM%2BNFAIrE1FIxjCaOm9zjK67SkMOGYvtg0aclkYvagrVVUsFVHk042ARnUe71i%2BMjB%2B%2F1prl%2BQifdrvc&X-Amz-Signature=1f00f7cc917971cd76019ddc3951113f6cced176b78cea00c730c6b755154f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3VEPAF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMobEHaHEmtKr7AhGzRYfT75TbZnxv5FXRdc2Sln1DJgIhAPnIxoXSJVGDVYhOjzwD2VIOgqiSvStO05oxr4s%2F6A9ZKv8DCB4QABoMNjM3NDIzMTgzODA1Igypo3CWqfPww2aQPlEq3APuWNQgolmHfzwdcs6yz3a07MxWU83xzh3p22HjZFwUVhY1Va7dHaYdM4Un5HTSS582Mgq039WdOHd%2F2MmOoZcLz3JoNXqX5uvDWp2a4zIDOV1nNJWY623GY9Kcw1vrIMVAMQzOKff%2BfxMNVC5G%2FPpjevminymsybrdocx9i6BO7cwOr0snFe5fbUvZIpMY6DRFnPEGxShCNizxSFpwmNlYQWxaPhpQ8jYeTD9M0o9MBzdA%2BDTiFfRr8lEQuuASWEm28CVUc9gF89HQ0peTRlUUe8nXCKEa5830dn1x19A4eyoSjco%2BZd%2FJid3v1dNFpMh5EDsrv%2B2EPZMwfjnOILX4Iz2qyKG53nx18%2FsyyB3pz%2BVVGsyHFMe%2B8kV2RcBNL1J%2BasLnTKp1uwzPCCL0pubYS8ndDjxypXt828ual8SToKYaqJRU1LVIYrwxEjsgRStis28pL%2FFlEWIddVE1SeomMxZCnTunETg4rdo%2F79Hn227TCQLdVaMuRHrOEJU8Gc95b%2Bh3ynE699aPo1lRMjZX8pAbvWiKWGW6AvbDdWTU7ZFj5T08QRAc7YnXNcKtHMw780b1o22qFIYJXa%2BBdEdZv1UnvGOt46cFf215MDpxFpXh9qXtEWJoBd%2BUCjDRv6rABjqkAUeuS2DOkMcjLiH9wJtbQtDSB84aJkqEgXiYSM8j6RlAgW0Y1yiaI8qN0QknK1qSsT7ZaC2WX2wTqcTu21E%2FEXjbIHAWJDhDznLNTrlsCG2eSKqA4NediR7farqr6OViEMQMpiBvRajZWM%2BNFAIrE1FIxjCaOm9zjK67SkMOGYvtg0aclkYvagrVVUsFVHk042ARnUe71i%2BMjB%2B%2F1prl%2BQifdrvc&X-Amz-Signature=f9b1ef97f5de1743c836f2c4f2cedf1138e13df1c32dcb0d6efaab6fdc8e5ae6&X-Amz-SignedHeaders=host&x-id=GetObject)
