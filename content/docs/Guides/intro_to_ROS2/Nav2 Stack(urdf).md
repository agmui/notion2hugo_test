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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6RM5AL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDql9BATJpPySLNCZo1ID84AwIpyGNY3tjXAIYAQhaWMAIgYD8P3IJSD0R2U1Yhs%2FeOhd1Qnl27VIJctpnAFGyDhbgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPbH%2B2MgkZxMvvAlEyrcA%2BcIf0FV8qzmFcVbBZMLpSywE4gqxDo8UUqkek1UECBHxH%2BfjvFnLJTm7qjKeP1iJ0EWyl3uTijUvVdszBnqMJP%2FPejn9Ix7T7UAn44HBZI9%2BOxbkkLWM85Pv8zelJD%2Buzr5abuJAP6%2F922rfGw2jcA2zHxGg%2BAZKLHwuz02Z85zQVGR7lFxVByZi26FoFtC0xsN8uFK1EoA3ZDgDbosjHyP2V%2BbY57HSsNYKnwlybvXiXP%2FCNFflQASm5AVic%2B4wDkBK6ry0YODfj3CNBkzroPpl6qv5OY9C%2B%2BBpE6FLHH%2BKxoL%2FrSk2t6oNtUrsCZ1Tfdd%2FFBEcPWtgUPkksieu%2FYv83fI1kkAy%2Fnsijp9WJJEFv0k75LkDLV4BSOAL%2BJpYjovfivo8zIMyHASm90ZSZoKLc%2BxBNmmOjatufuxcobiN543AG%2FIBZzsKpbEq8NLSp5Bfjugktr05TOZPOd8EdRn%2B6eqS7fZy7%2FWJhwVRjBH8psrF7BoMU7588zMY89h%2BymMMudCQMVpNoppgqWW6hkpAYyroU5%2Ba%2FAjqHo7aNKD3n28BOkPQL4jVO9WCNCzzntvhE7Zf2Wre2gIkMSoK6cfeK1KFcjRLFdmh7e51eGFeG7rj2CEuIt45729MNvJqL4GOqUBceKZU1w9KbdkwLlm68%2Fnwij4hWm9szEE479Zl%2FnJUCgfu5MhZL240yXUnvpS5Q2Dn2kPCx4tQgwwhjjzPt6umZhl%2BeILTVUAxnAmHo8XIZigqNvM9x0xXTfWarfrII0qSFvkMue9qwgXk1gATVQL9%2Bp4SfAmUfnaGHgyIQg%2BlwVp%2F2ZtsxP1pOEU1fT3C8C4SauJb7S0dC0jSLsvTFjPgFIEjopY&X-Amz-Signature=43fb13038b113ee9f4c9a3717fcde0271b766cc180f8fcd094cb1402af635ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6RM5AL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDql9BATJpPySLNCZo1ID84AwIpyGNY3tjXAIYAQhaWMAIgYD8P3IJSD0R2U1Yhs%2FeOhd1Qnl27VIJctpnAFGyDhbgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPbH%2B2MgkZxMvvAlEyrcA%2BcIf0FV8qzmFcVbBZMLpSywE4gqxDo8UUqkek1UECBHxH%2BfjvFnLJTm7qjKeP1iJ0EWyl3uTijUvVdszBnqMJP%2FPejn9Ix7T7UAn44HBZI9%2BOxbkkLWM85Pv8zelJD%2Buzr5abuJAP6%2F922rfGw2jcA2zHxGg%2BAZKLHwuz02Z85zQVGR7lFxVByZi26FoFtC0xsN8uFK1EoA3ZDgDbosjHyP2V%2BbY57HSsNYKnwlybvXiXP%2FCNFflQASm5AVic%2B4wDkBK6ry0YODfj3CNBkzroPpl6qv5OY9C%2B%2BBpE6FLHH%2BKxoL%2FrSk2t6oNtUrsCZ1Tfdd%2FFBEcPWtgUPkksieu%2FYv83fI1kkAy%2Fnsijp9WJJEFv0k75LkDLV4BSOAL%2BJpYjovfivo8zIMyHASm90ZSZoKLc%2BxBNmmOjatufuxcobiN543AG%2FIBZzsKpbEq8NLSp5Bfjugktr05TOZPOd8EdRn%2B6eqS7fZy7%2FWJhwVRjBH8psrF7BoMU7588zMY89h%2BymMMudCQMVpNoppgqWW6hkpAYyroU5%2Ba%2FAjqHo7aNKD3n28BOkPQL4jVO9WCNCzzntvhE7Zf2Wre2gIkMSoK6cfeK1KFcjRLFdmh7e51eGFeG7rj2CEuIt45729MNvJqL4GOqUBceKZU1w9KbdkwLlm68%2Fnwij4hWm9szEE479Zl%2FnJUCgfu5MhZL240yXUnvpS5Q2Dn2kPCx4tQgwwhjjzPt6umZhl%2BeILTVUAxnAmHo8XIZigqNvM9x0xXTfWarfrII0qSFvkMue9qwgXk1gATVQL9%2Bp4SfAmUfnaGHgyIQg%2BlwVp%2F2ZtsxP1pOEU1fT3C8C4SauJb7S0dC0jSLsvTFjPgFIEjopY&X-Amz-Signature=53082ab5c36bd38a6bcb59389f0ca7b1ec39aced3792fd1b4cfe253ef2de9691&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6RM5AL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDql9BATJpPySLNCZo1ID84AwIpyGNY3tjXAIYAQhaWMAIgYD8P3IJSD0R2U1Yhs%2FeOhd1Qnl27VIJctpnAFGyDhbgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPbH%2B2MgkZxMvvAlEyrcA%2BcIf0FV8qzmFcVbBZMLpSywE4gqxDo8UUqkek1UECBHxH%2BfjvFnLJTm7qjKeP1iJ0EWyl3uTijUvVdszBnqMJP%2FPejn9Ix7T7UAn44HBZI9%2BOxbkkLWM85Pv8zelJD%2Buzr5abuJAP6%2F922rfGw2jcA2zHxGg%2BAZKLHwuz02Z85zQVGR7lFxVByZi26FoFtC0xsN8uFK1EoA3ZDgDbosjHyP2V%2BbY57HSsNYKnwlybvXiXP%2FCNFflQASm5AVic%2B4wDkBK6ry0YODfj3CNBkzroPpl6qv5OY9C%2B%2BBpE6FLHH%2BKxoL%2FrSk2t6oNtUrsCZ1Tfdd%2FFBEcPWtgUPkksieu%2FYv83fI1kkAy%2Fnsijp9WJJEFv0k75LkDLV4BSOAL%2BJpYjovfivo8zIMyHASm90ZSZoKLc%2BxBNmmOjatufuxcobiN543AG%2FIBZzsKpbEq8NLSp5Bfjugktr05TOZPOd8EdRn%2B6eqS7fZy7%2FWJhwVRjBH8psrF7BoMU7588zMY89h%2BymMMudCQMVpNoppgqWW6hkpAYyroU5%2Ba%2FAjqHo7aNKD3n28BOkPQL4jVO9WCNCzzntvhE7Zf2Wre2gIkMSoK6cfeK1KFcjRLFdmh7e51eGFeG7rj2CEuIt45729MNvJqL4GOqUBceKZU1w9KbdkwLlm68%2Fnwij4hWm9szEE479Zl%2FnJUCgfu5MhZL240yXUnvpS5Q2Dn2kPCx4tQgwwhjjzPt6umZhl%2BeILTVUAxnAmHo8XIZigqNvM9x0xXTfWarfrII0qSFvkMue9qwgXk1gATVQL9%2Bp4SfAmUfnaGHgyIQg%2BlwVp%2F2ZtsxP1pOEU1fT3C8C4SauJb7S0dC0jSLsvTFjPgFIEjopY&X-Amz-Signature=7bc6dd8d260e73c0aacaa78216ed30cac881f2141b9e98a543c0ea652c90990a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6RM5AL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDql9BATJpPySLNCZo1ID84AwIpyGNY3tjXAIYAQhaWMAIgYD8P3IJSD0R2U1Yhs%2FeOhd1Qnl27VIJctpnAFGyDhbgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPbH%2B2MgkZxMvvAlEyrcA%2BcIf0FV8qzmFcVbBZMLpSywE4gqxDo8UUqkek1UECBHxH%2BfjvFnLJTm7qjKeP1iJ0EWyl3uTijUvVdszBnqMJP%2FPejn9Ix7T7UAn44HBZI9%2BOxbkkLWM85Pv8zelJD%2Buzr5abuJAP6%2F922rfGw2jcA2zHxGg%2BAZKLHwuz02Z85zQVGR7lFxVByZi26FoFtC0xsN8uFK1EoA3ZDgDbosjHyP2V%2BbY57HSsNYKnwlybvXiXP%2FCNFflQASm5AVic%2B4wDkBK6ry0YODfj3CNBkzroPpl6qv5OY9C%2B%2BBpE6FLHH%2BKxoL%2FrSk2t6oNtUrsCZ1Tfdd%2FFBEcPWtgUPkksieu%2FYv83fI1kkAy%2Fnsijp9WJJEFv0k75LkDLV4BSOAL%2BJpYjovfivo8zIMyHASm90ZSZoKLc%2BxBNmmOjatufuxcobiN543AG%2FIBZzsKpbEq8NLSp5Bfjugktr05TOZPOd8EdRn%2B6eqS7fZy7%2FWJhwVRjBH8psrF7BoMU7588zMY89h%2BymMMudCQMVpNoppgqWW6hkpAYyroU5%2Ba%2FAjqHo7aNKD3n28BOkPQL4jVO9WCNCzzntvhE7Zf2Wre2gIkMSoK6cfeK1KFcjRLFdmh7e51eGFeG7rj2CEuIt45729MNvJqL4GOqUBceKZU1w9KbdkwLlm68%2Fnwij4hWm9szEE479Zl%2FnJUCgfu5MhZL240yXUnvpS5Q2Dn2kPCx4tQgwwhjjzPt6umZhl%2BeILTVUAxnAmHo8XIZigqNvM9x0xXTfWarfrII0qSFvkMue9qwgXk1gATVQL9%2Bp4SfAmUfnaGHgyIQg%2BlwVp%2F2ZtsxP1pOEU1fT3C8C4SauJb7S0dC0jSLsvTFjPgFIEjopY&X-Amz-Signature=910327b7e849a9632980083d20de7b128518dc73ae7a29bc5707e2b0532cadd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6RM5AL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDql9BATJpPySLNCZo1ID84AwIpyGNY3tjXAIYAQhaWMAIgYD8P3IJSD0R2U1Yhs%2FeOhd1Qnl27VIJctpnAFGyDhbgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPbH%2B2MgkZxMvvAlEyrcA%2BcIf0FV8qzmFcVbBZMLpSywE4gqxDo8UUqkek1UECBHxH%2BfjvFnLJTm7qjKeP1iJ0EWyl3uTijUvVdszBnqMJP%2FPejn9Ix7T7UAn44HBZI9%2BOxbkkLWM85Pv8zelJD%2Buzr5abuJAP6%2F922rfGw2jcA2zHxGg%2BAZKLHwuz02Z85zQVGR7lFxVByZi26FoFtC0xsN8uFK1EoA3ZDgDbosjHyP2V%2BbY57HSsNYKnwlybvXiXP%2FCNFflQASm5AVic%2B4wDkBK6ry0YODfj3CNBkzroPpl6qv5OY9C%2B%2BBpE6FLHH%2BKxoL%2FrSk2t6oNtUrsCZ1Tfdd%2FFBEcPWtgUPkksieu%2FYv83fI1kkAy%2Fnsijp9WJJEFv0k75LkDLV4BSOAL%2BJpYjovfivo8zIMyHASm90ZSZoKLc%2BxBNmmOjatufuxcobiN543AG%2FIBZzsKpbEq8NLSp5Bfjugktr05TOZPOd8EdRn%2B6eqS7fZy7%2FWJhwVRjBH8psrF7BoMU7588zMY89h%2BymMMudCQMVpNoppgqWW6hkpAYyroU5%2Ba%2FAjqHo7aNKD3n28BOkPQL4jVO9WCNCzzntvhE7Zf2Wre2gIkMSoK6cfeK1KFcjRLFdmh7e51eGFeG7rj2CEuIt45729MNvJqL4GOqUBceKZU1w9KbdkwLlm68%2Fnwij4hWm9szEE479Zl%2FnJUCgfu5MhZL240yXUnvpS5Q2Dn2kPCx4tQgwwhjjzPt6umZhl%2BeILTVUAxnAmHo8XIZigqNvM9x0xXTfWarfrII0qSFvkMue9qwgXk1gATVQL9%2Bp4SfAmUfnaGHgyIQg%2BlwVp%2F2ZtsxP1pOEU1fT3C8C4SauJb7S0dC0jSLsvTFjPgFIEjopY&X-Amz-Signature=51b74205f61917fc7a22febc5f535584764516750155f8e289b0c355dd4b56c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6RM5AL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDql9BATJpPySLNCZo1ID84AwIpyGNY3tjXAIYAQhaWMAIgYD8P3IJSD0R2U1Yhs%2FeOhd1Qnl27VIJctpnAFGyDhbgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPbH%2B2MgkZxMvvAlEyrcA%2BcIf0FV8qzmFcVbBZMLpSywE4gqxDo8UUqkek1UECBHxH%2BfjvFnLJTm7qjKeP1iJ0EWyl3uTijUvVdszBnqMJP%2FPejn9Ix7T7UAn44HBZI9%2BOxbkkLWM85Pv8zelJD%2Buzr5abuJAP6%2F922rfGw2jcA2zHxGg%2BAZKLHwuz02Z85zQVGR7lFxVByZi26FoFtC0xsN8uFK1EoA3ZDgDbosjHyP2V%2BbY57HSsNYKnwlybvXiXP%2FCNFflQASm5AVic%2B4wDkBK6ry0YODfj3CNBkzroPpl6qv5OY9C%2B%2BBpE6FLHH%2BKxoL%2FrSk2t6oNtUrsCZ1Tfdd%2FFBEcPWtgUPkksieu%2FYv83fI1kkAy%2Fnsijp9WJJEFv0k75LkDLV4BSOAL%2BJpYjovfivo8zIMyHASm90ZSZoKLc%2BxBNmmOjatufuxcobiN543AG%2FIBZzsKpbEq8NLSp5Bfjugktr05TOZPOd8EdRn%2B6eqS7fZy7%2FWJhwVRjBH8psrF7BoMU7588zMY89h%2BymMMudCQMVpNoppgqWW6hkpAYyroU5%2Ba%2FAjqHo7aNKD3n28BOkPQL4jVO9WCNCzzntvhE7Zf2Wre2gIkMSoK6cfeK1KFcjRLFdmh7e51eGFeG7rj2CEuIt45729MNvJqL4GOqUBceKZU1w9KbdkwLlm68%2Fnwij4hWm9szEE479Zl%2FnJUCgfu5MhZL240yXUnvpS5Q2Dn2kPCx4tQgwwhjjzPt6umZhl%2BeILTVUAxnAmHo8XIZigqNvM9x0xXTfWarfrII0qSFvkMue9qwgXk1gATVQL9%2Bp4SfAmUfnaGHgyIQg%2BlwVp%2F2ZtsxP1pOEU1fT3C8C4SauJb7S0dC0jSLsvTFjPgFIEjopY&X-Amz-Signature=0a5cd4730c5a54b82209431ef59c3119d13d8564ccec3e1e79dbf69d55a9ef98&X-Amz-SignedHeaders=host&x-id=GetObject)
