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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXMFNKS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4U%2F%2BFoQl7v3Byx7LJ7yDULx7ynE%2B1yI7I59wE8QtR3AiBLACmJbXW2%2Bq4fC1Q5hNdT%2F23D%2Bk9WYlmhG8%2FHBAEPdCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUODXbfIZ84KF9KWMKtwD8TRcPgII3nTYvwlzbj00Q8KZtlBsAXz8kedbN5%2BWCLZ%2BD09NePIjebopwRK2eKuZCBcVt4BtyTsessuPO%2Fc0UBTbhmJ%2F6Lg6CBXmC6osc1fpd7v78PN6mm2eUjmJmpi4xQdgbuDVzNmZgsK%2BjxQNHwRzvsN5bzIsUW2BH6MazMc6%2FgAuL9JjoaKiaGyma1acSbS3xjVQORtWI7G8%2BEjoGYqsZ6JCKCnucDoWZj1uUamPwf4k8kEXiJThaeujKqeuCONKWRBcVXMYlK5vIma8Y8TXdEtS59TuZ6FMbvNjLTe8g%2FIqYubIIPswyG%2BIqDfvmtRiB5HWx8pKHeAPusfxfFV3c2hc2K%2BgUuENFgNb6kg%2F%2FXsAf1Z8qW6Fo2oTADuaSYPDixO%2BAzdyMfRHczI%2Fk8gTLxLN9beyBF5kE48jVpZjTJ9uGiQMnGT3VibYz7JbQ12bf7Po5NsSdgGc3Ws2id0TCVh0NizEbyTCLf%2BcvEplKTPv0RXnInI0TcNi%2F2%2BSoNlrmDYTqdTD8LsU7UC3w7q1SCPPMf6K55%2FYP5SyQT6NnH3VH4fMNSRHA2CqoPRxE%2BbxBpEPcybK%2Bz2EoNYOhDpABzPFuRffN05sN6ciLrdJsghyfY6NyXz2SuEwqaaTvgY6pgEW3qWo9vcQ%2BCieyiKPQplvPjaHnAqBVHuIi0b%2Bi6BAqu6TuTU9GieOd%2FAcSKUJLXKCGs9dPRJg8eZayTOfbXToLtqVP30a0evrNJEJLGdpGMp%2F0R05py8fGTdbLOXFDuTXaoHL4yVwFSUUDe56yKqaX28OZSPQpej8w4FM%2Bt8PwZ1vO4vc9CKStRm9jxIVcEWELxyltfhRL0O%2Fx8nqkGquxZM4ZZXZ&X-Amz-Signature=463abdef601e13c200c65acb626909afdc1dc185139b1067adac8ccbf1e14b41&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXMFNKS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4U%2F%2BFoQl7v3Byx7LJ7yDULx7ynE%2B1yI7I59wE8QtR3AiBLACmJbXW2%2Bq4fC1Q5hNdT%2F23D%2Bk9WYlmhG8%2FHBAEPdCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUODXbfIZ84KF9KWMKtwD8TRcPgII3nTYvwlzbj00Q8KZtlBsAXz8kedbN5%2BWCLZ%2BD09NePIjebopwRK2eKuZCBcVt4BtyTsessuPO%2Fc0UBTbhmJ%2F6Lg6CBXmC6osc1fpd7v78PN6mm2eUjmJmpi4xQdgbuDVzNmZgsK%2BjxQNHwRzvsN5bzIsUW2BH6MazMc6%2FgAuL9JjoaKiaGyma1acSbS3xjVQORtWI7G8%2BEjoGYqsZ6JCKCnucDoWZj1uUamPwf4k8kEXiJThaeujKqeuCONKWRBcVXMYlK5vIma8Y8TXdEtS59TuZ6FMbvNjLTe8g%2FIqYubIIPswyG%2BIqDfvmtRiB5HWx8pKHeAPusfxfFV3c2hc2K%2BgUuENFgNb6kg%2F%2FXsAf1Z8qW6Fo2oTADuaSYPDixO%2BAzdyMfRHczI%2Fk8gTLxLN9beyBF5kE48jVpZjTJ9uGiQMnGT3VibYz7JbQ12bf7Po5NsSdgGc3Ws2id0TCVh0NizEbyTCLf%2BcvEplKTPv0RXnInI0TcNi%2F2%2BSoNlrmDYTqdTD8LsU7UC3w7q1SCPPMf6K55%2FYP5SyQT6NnH3VH4fMNSRHA2CqoPRxE%2BbxBpEPcybK%2Bz2EoNYOhDpABzPFuRffN05sN6ciLrdJsghyfY6NyXz2SuEwqaaTvgY6pgEW3qWo9vcQ%2BCieyiKPQplvPjaHnAqBVHuIi0b%2Bi6BAqu6TuTU9GieOd%2FAcSKUJLXKCGs9dPRJg8eZayTOfbXToLtqVP30a0evrNJEJLGdpGMp%2F0R05py8fGTdbLOXFDuTXaoHL4yVwFSUUDe56yKqaX28OZSPQpej8w4FM%2Bt8PwZ1vO4vc9CKStRm9jxIVcEWELxyltfhRL0O%2Fx8nqkGquxZM4ZZXZ&X-Amz-Signature=81a5c9fb196e207bbf753b12967b03382b653d3bb0f4b896047f43c39f7caf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXMFNKS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4U%2F%2BFoQl7v3Byx7LJ7yDULx7ynE%2B1yI7I59wE8QtR3AiBLACmJbXW2%2Bq4fC1Q5hNdT%2F23D%2Bk9WYlmhG8%2FHBAEPdCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUODXbfIZ84KF9KWMKtwD8TRcPgII3nTYvwlzbj00Q8KZtlBsAXz8kedbN5%2BWCLZ%2BD09NePIjebopwRK2eKuZCBcVt4BtyTsessuPO%2Fc0UBTbhmJ%2F6Lg6CBXmC6osc1fpd7v78PN6mm2eUjmJmpi4xQdgbuDVzNmZgsK%2BjxQNHwRzvsN5bzIsUW2BH6MazMc6%2FgAuL9JjoaKiaGyma1acSbS3xjVQORtWI7G8%2BEjoGYqsZ6JCKCnucDoWZj1uUamPwf4k8kEXiJThaeujKqeuCONKWRBcVXMYlK5vIma8Y8TXdEtS59TuZ6FMbvNjLTe8g%2FIqYubIIPswyG%2BIqDfvmtRiB5HWx8pKHeAPusfxfFV3c2hc2K%2BgUuENFgNb6kg%2F%2FXsAf1Z8qW6Fo2oTADuaSYPDixO%2BAzdyMfRHczI%2Fk8gTLxLN9beyBF5kE48jVpZjTJ9uGiQMnGT3VibYz7JbQ12bf7Po5NsSdgGc3Ws2id0TCVh0NizEbyTCLf%2BcvEplKTPv0RXnInI0TcNi%2F2%2BSoNlrmDYTqdTD8LsU7UC3w7q1SCPPMf6K55%2FYP5SyQT6NnH3VH4fMNSRHA2CqoPRxE%2BbxBpEPcybK%2Bz2EoNYOhDpABzPFuRffN05sN6ciLrdJsghyfY6NyXz2SuEwqaaTvgY6pgEW3qWo9vcQ%2BCieyiKPQplvPjaHnAqBVHuIi0b%2Bi6BAqu6TuTU9GieOd%2FAcSKUJLXKCGs9dPRJg8eZayTOfbXToLtqVP30a0evrNJEJLGdpGMp%2F0R05py8fGTdbLOXFDuTXaoHL4yVwFSUUDe56yKqaX28OZSPQpej8w4FM%2Bt8PwZ1vO4vc9CKStRm9jxIVcEWELxyltfhRL0O%2Fx8nqkGquxZM4ZZXZ&X-Amz-Signature=1f0a0d883230cc86a2b24cdb626e97241abd1d9821261361e19a6f37f56ace2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXMFNKS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4U%2F%2BFoQl7v3Byx7LJ7yDULx7ynE%2B1yI7I59wE8QtR3AiBLACmJbXW2%2Bq4fC1Q5hNdT%2F23D%2Bk9WYlmhG8%2FHBAEPdCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUODXbfIZ84KF9KWMKtwD8TRcPgII3nTYvwlzbj00Q8KZtlBsAXz8kedbN5%2BWCLZ%2BD09NePIjebopwRK2eKuZCBcVt4BtyTsessuPO%2Fc0UBTbhmJ%2F6Lg6CBXmC6osc1fpd7v78PN6mm2eUjmJmpi4xQdgbuDVzNmZgsK%2BjxQNHwRzvsN5bzIsUW2BH6MazMc6%2FgAuL9JjoaKiaGyma1acSbS3xjVQORtWI7G8%2BEjoGYqsZ6JCKCnucDoWZj1uUamPwf4k8kEXiJThaeujKqeuCONKWRBcVXMYlK5vIma8Y8TXdEtS59TuZ6FMbvNjLTe8g%2FIqYubIIPswyG%2BIqDfvmtRiB5HWx8pKHeAPusfxfFV3c2hc2K%2BgUuENFgNb6kg%2F%2FXsAf1Z8qW6Fo2oTADuaSYPDixO%2BAzdyMfRHczI%2Fk8gTLxLN9beyBF5kE48jVpZjTJ9uGiQMnGT3VibYz7JbQ12bf7Po5NsSdgGc3Ws2id0TCVh0NizEbyTCLf%2BcvEplKTPv0RXnInI0TcNi%2F2%2BSoNlrmDYTqdTD8LsU7UC3w7q1SCPPMf6K55%2FYP5SyQT6NnH3VH4fMNSRHA2CqoPRxE%2BbxBpEPcybK%2Bz2EoNYOhDpABzPFuRffN05sN6ciLrdJsghyfY6NyXz2SuEwqaaTvgY6pgEW3qWo9vcQ%2BCieyiKPQplvPjaHnAqBVHuIi0b%2Bi6BAqu6TuTU9GieOd%2FAcSKUJLXKCGs9dPRJg8eZayTOfbXToLtqVP30a0evrNJEJLGdpGMp%2F0R05py8fGTdbLOXFDuTXaoHL4yVwFSUUDe56yKqaX28OZSPQpej8w4FM%2Bt8PwZ1vO4vc9CKStRm9jxIVcEWELxyltfhRL0O%2Fx8nqkGquxZM4ZZXZ&X-Amz-Signature=f68724cd646d5c7c706eb09cbc29a1ef4881cc51c052aafe5e8d0cdb590c0afd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXMFNKS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4U%2F%2BFoQl7v3Byx7LJ7yDULx7ynE%2B1yI7I59wE8QtR3AiBLACmJbXW2%2Bq4fC1Q5hNdT%2F23D%2Bk9WYlmhG8%2FHBAEPdCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUODXbfIZ84KF9KWMKtwD8TRcPgII3nTYvwlzbj00Q8KZtlBsAXz8kedbN5%2BWCLZ%2BD09NePIjebopwRK2eKuZCBcVt4BtyTsessuPO%2Fc0UBTbhmJ%2F6Lg6CBXmC6osc1fpd7v78PN6mm2eUjmJmpi4xQdgbuDVzNmZgsK%2BjxQNHwRzvsN5bzIsUW2BH6MazMc6%2FgAuL9JjoaKiaGyma1acSbS3xjVQORtWI7G8%2BEjoGYqsZ6JCKCnucDoWZj1uUamPwf4k8kEXiJThaeujKqeuCONKWRBcVXMYlK5vIma8Y8TXdEtS59TuZ6FMbvNjLTe8g%2FIqYubIIPswyG%2BIqDfvmtRiB5HWx8pKHeAPusfxfFV3c2hc2K%2BgUuENFgNb6kg%2F%2FXsAf1Z8qW6Fo2oTADuaSYPDixO%2BAzdyMfRHczI%2Fk8gTLxLN9beyBF5kE48jVpZjTJ9uGiQMnGT3VibYz7JbQ12bf7Po5NsSdgGc3Ws2id0TCVh0NizEbyTCLf%2BcvEplKTPv0RXnInI0TcNi%2F2%2BSoNlrmDYTqdTD8LsU7UC3w7q1SCPPMf6K55%2FYP5SyQT6NnH3VH4fMNSRHA2CqoPRxE%2BbxBpEPcybK%2Bz2EoNYOhDpABzPFuRffN05sN6ciLrdJsghyfY6NyXz2SuEwqaaTvgY6pgEW3qWo9vcQ%2BCieyiKPQplvPjaHnAqBVHuIi0b%2Bi6BAqu6TuTU9GieOd%2FAcSKUJLXKCGs9dPRJg8eZayTOfbXToLtqVP30a0evrNJEJLGdpGMp%2F0R05py8fGTdbLOXFDuTXaoHL4yVwFSUUDe56yKqaX28OZSPQpej8w4FM%2Bt8PwZ1vO4vc9CKStRm9jxIVcEWELxyltfhRL0O%2Fx8nqkGquxZM4ZZXZ&X-Amz-Signature=3d74798244b1c9aab7263f46982b81225b02c1a877d02286eee1c58c31bdf26c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXMFNKS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4U%2F%2BFoQl7v3Byx7LJ7yDULx7ynE%2B1yI7I59wE8QtR3AiBLACmJbXW2%2Bq4fC1Q5hNdT%2F23D%2Bk9WYlmhG8%2FHBAEPdCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUODXbfIZ84KF9KWMKtwD8TRcPgII3nTYvwlzbj00Q8KZtlBsAXz8kedbN5%2BWCLZ%2BD09NePIjebopwRK2eKuZCBcVt4BtyTsessuPO%2Fc0UBTbhmJ%2F6Lg6CBXmC6osc1fpd7v78PN6mm2eUjmJmpi4xQdgbuDVzNmZgsK%2BjxQNHwRzvsN5bzIsUW2BH6MazMc6%2FgAuL9JjoaKiaGyma1acSbS3xjVQORtWI7G8%2BEjoGYqsZ6JCKCnucDoWZj1uUamPwf4k8kEXiJThaeujKqeuCONKWRBcVXMYlK5vIma8Y8TXdEtS59TuZ6FMbvNjLTe8g%2FIqYubIIPswyG%2BIqDfvmtRiB5HWx8pKHeAPusfxfFV3c2hc2K%2BgUuENFgNb6kg%2F%2FXsAf1Z8qW6Fo2oTADuaSYPDixO%2BAzdyMfRHczI%2Fk8gTLxLN9beyBF5kE48jVpZjTJ9uGiQMnGT3VibYz7JbQ12bf7Po5NsSdgGc3Ws2id0TCVh0NizEbyTCLf%2BcvEplKTPv0RXnInI0TcNi%2F2%2BSoNlrmDYTqdTD8LsU7UC3w7q1SCPPMf6K55%2FYP5SyQT6NnH3VH4fMNSRHA2CqoPRxE%2BbxBpEPcybK%2Bz2EoNYOhDpABzPFuRffN05sN6ciLrdJsghyfY6NyXz2SuEwqaaTvgY6pgEW3qWo9vcQ%2BCieyiKPQplvPjaHnAqBVHuIi0b%2Bi6BAqu6TuTU9GieOd%2FAcSKUJLXKCGs9dPRJg8eZayTOfbXToLtqVP30a0evrNJEJLGdpGMp%2F0R05py8fGTdbLOXFDuTXaoHL4yVwFSUUDe56yKqaX28OZSPQpej8w4FM%2Bt8PwZ1vO4vc9CKStRm9jxIVcEWELxyltfhRL0O%2Fx8nqkGquxZM4ZZXZ&X-Amz-Signature=a0394329063ff922002181f8fc92c4cfb2234be362e11a1b8703b3d5bbedb33b&X-Amz-SignedHeaders=host&x-id=GetObject)
