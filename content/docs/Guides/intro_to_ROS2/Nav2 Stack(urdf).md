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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWG3WUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FTQDgKRNM5Ba5W79BV2p1e2Ywndf1oQ1i%2BJT6UVIcwIgTbMxMIoQBMXB9gW%2FA7JY9NZ2IVAMWTQzL6sZnle0p88q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKT7%2FqwrycOenehbXyrcAzedR212WpxGSGEscYBtr5o%2FFDltBRdZI1h8qU3GOVGEjlBYn2luqZ56miFM5bY5Q1rd8p2XXzbW10XgTowkYzQ5fFGQ30wvfLLm7g014Em1mGUKecJoa44m5ozL1TW%2BMOnXBExf7TrGydm7svXNGMH0I7KaoK2YYOqP50pbd40BAu2ZVCNYFCdecgaY1pIuLdCRVeSQ9R1u2rg4yWxrLelER1wYjJIorMepxJo%2BNLfKuzHCL4HrlRi2EsCfJwlHDTGI6zub2Ab2JQ584tIY6ibJ0InZbYCYfzbZYICQO%2Fvev2If%2FHDUaTcerIX3fEWWCr6Nm7DbFRi%2BKr%2FwTTChQH%2F%2Fq3azbJhiSNQRLBvZCTxqO7MgT8EVSbJ4XVlQB4bphQod%2BSxb99pmgC2itXON3vsPA9rqBcFAFYieg1mPpdNDoGdsJk%2FmcE6JRs5oeh9RujQ78QH1arxP%2BO6Bem%2BkNfVwJHyATJsVHYwZUeY8%2BoQzPkti147%2B0k7E5Ov7HoO8Mw31Arse%2F0XrByPTGBVJ48n9qB2nvlTiWztg3QqiqigADZs3N7kcf5LZHLFazrqEt4qPIfG%2BXbzeZYvqyJdcPjZZu8wzjwCKv%2BohiVroWTrtPvBJF4HEWiC6dFEXMKWbncEGOqUBDIm%2BlfRFc5ORww6srMH4ZwYr5hNAQruM5cxdaMJXnYP1CQpaRqfmEhU59sse3pP7Fnk0wwjURiUkSB%2FsiLHsix5qkN7ir%2BLi1FHko9%2BWsu%2FFX9wGWJJzWFgbYK7IhazdXJMX0rcz%2Fdk%2FV9LwcSjtJttI7OBJFHo5orFXZjKXElg1mt2edK4wyqaO9qFQos5BBeSZZea6S4a2bM2ZQUcCCkQrsfXj&X-Amz-Signature=8c40d77826c5da54c63d30b46bd70fd9f3ac1554ad0474881d2cd63ed7f3a6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWG3WUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FTQDgKRNM5Ba5W79BV2p1e2Ywndf1oQ1i%2BJT6UVIcwIgTbMxMIoQBMXB9gW%2FA7JY9NZ2IVAMWTQzL6sZnle0p88q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKT7%2FqwrycOenehbXyrcAzedR212WpxGSGEscYBtr5o%2FFDltBRdZI1h8qU3GOVGEjlBYn2luqZ56miFM5bY5Q1rd8p2XXzbW10XgTowkYzQ5fFGQ30wvfLLm7g014Em1mGUKecJoa44m5ozL1TW%2BMOnXBExf7TrGydm7svXNGMH0I7KaoK2YYOqP50pbd40BAu2ZVCNYFCdecgaY1pIuLdCRVeSQ9R1u2rg4yWxrLelER1wYjJIorMepxJo%2BNLfKuzHCL4HrlRi2EsCfJwlHDTGI6zub2Ab2JQ584tIY6ibJ0InZbYCYfzbZYICQO%2Fvev2If%2FHDUaTcerIX3fEWWCr6Nm7DbFRi%2BKr%2FwTTChQH%2F%2Fq3azbJhiSNQRLBvZCTxqO7MgT8EVSbJ4XVlQB4bphQod%2BSxb99pmgC2itXON3vsPA9rqBcFAFYieg1mPpdNDoGdsJk%2FmcE6JRs5oeh9RujQ78QH1arxP%2BO6Bem%2BkNfVwJHyATJsVHYwZUeY8%2BoQzPkti147%2B0k7E5Ov7HoO8Mw31Arse%2F0XrByPTGBVJ48n9qB2nvlTiWztg3QqiqigADZs3N7kcf5LZHLFazrqEt4qPIfG%2BXbzeZYvqyJdcPjZZu8wzjwCKv%2BohiVroWTrtPvBJF4HEWiC6dFEXMKWbncEGOqUBDIm%2BlfRFc5ORww6srMH4ZwYr5hNAQruM5cxdaMJXnYP1CQpaRqfmEhU59sse3pP7Fnk0wwjURiUkSB%2FsiLHsix5qkN7ir%2BLi1FHko9%2BWsu%2FFX9wGWJJzWFgbYK7IhazdXJMX0rcz%2Fdk%2FV9LwcSjtJttI7OBJFHo5orFXZjKXElg1mt2edK4wyqaO9qFQos5BBeSZZea6S4a2bM2ZQUcCCkQrsfXj&X-Amz-Signature=7f924a4e1947097428a4a498b737eee265b60e6cb2002767699b578a7abdc763&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWG3WUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FTQDgKRNM5Ba5W79BV2p1e2Ywndf1oQ1i%2BJT6UVIcwIgTbMxMIoQBMXB9gW%2FA7JY9NZ2IVAMWTQzL6sZnle0p88q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKT7%2FqwrycOenehbXyrcAzedR212WpxGSGEscYBtr5o%2FFDltBRdZI1h8qU3GOVGEjlBYn2luqZ56miFM5bY5Q1rd8p2XXzbW10XgTowkYzQ5fFGQ30wvfLLm7g014Em1mGUKecJoa44m5ozL1TW%2BMOnXBExf7TrGydm7svXNGMH0I7KaoK2YYOqP50pbd40BAu2ZVCNYFCdecgaY1pIuLdCRVeSQ9R1u2rg4yWxrLelER1wYjJIorMepxJo%2BNLfKuzHCL4HrlRi2EsCfJwlHDTGI6zub2Ab2JQ584tIY6ibJ0InZbYCYfzbZYICQO%2Fvev2If%2FHDUaTcerIX3fEWWCr6Nm7DbFRi%2BKr%2FwTTChQH%2F%2Fq3azbJhiSNQRLBvZCTxqO7MgT8EVSbJ4XVlQB4bphQod%2BSxb99pmgC2itXON3vsPA9rqBcFAFYieg1mPpdNDoGdsJk%2FmcE6JRs5oeh9RujQ78QH1arxP%2BO6Bem%2BkNfVwJHyATJsVHYwZUeY8%2BoQzPkti147%2B0k7E5Ov7HoO8Mw31Arse%2F0XrByPTGBVJ48n9qB2nvlTiWztg3QqiqigADZs3N7kcf5LZHLFazrqEt4qPIfG%2BXbzeZYvqyJdcPjZZu8wzjwCKv%2BohiVroWTrtPvBJF4HEWiC6dFEXMKWbncEGOqUBDIm%2BlfRFc5ORww6srMH4ZwYr5hNAQruM5cxdaMJXnYP1CQpaRqfmEhU59sse3pP7Fnk0wwjURiUkSB%2FsiLHsix5qkN7ir%2BLi1FHko9%2BWsu%2FFX9wGWJJzWFgbYK7IhazdXJMX0rcz%2Fdk%2FV9LwcSjtJttI7OBJFHo5orFXZjKXElg1mt2edK4wyqaO9qFQos5BBeSZZea6S4a2bM2ZQUcCCkQrsfXj&X-Amz-Signature=f1eedb90bb4d48c68bea8f279eddf02d90ac649a9d91ace43fd43d832c308c79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWG3WUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FTQDgKRNM5Ba5W79BV2p1e2Ywndf1oQ1i%2BJT6UVIcwIgTbMxMIoQBMXB9gW%2FA7JY9NZ2IVAMWTQzL6sZnle0p88q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKT7%2FqwrycOenehbXyrcAzedR212WpxGSGEscYBtr5o%2FFDltBRdZI1h8qU3GOVGEjlBYn2luqZ56miFM5bY5Q1rd8p2XXzbW10XgTowkYzQ5fFGQ30wvfLLm7g014Em1mGUKecJoa44m5ozL1TW%2BMOnXBExf7TrGydm7svXNGMH0I7KaoK2YYOqP50pbd40BAu2ZVCNYFCdecgaY1pIuLdCRVeSQ9R1u2rg4yWxrLelER1wYjJIorMepxJo%2BNLfKuzHCL4HrlRi2EsCfJwlHDTGI6zub2Ab2JQ584tIY6ibJ0InZbYCYfzbZYICQO%2Fvev2If%2FHDUaTcerIX3fEWWCr6Nm7DbFRi%2BKr%2FwTTChQH%2F%2Fq3azbJhiSNQRLBvZCTxqO7MgT8EVSbJ4XVlQB4bphQod%2BSxb99pmgC2itXON3vsPA9rqBcFAFYieg1mPpdNDoGdsJk%2FmcE6JRs5oeh9RujQ78QH1arxP%2BO6Bem%2BkNfVwJHyATJsVHYwZUeY8%2BoQzPkti147%2B0k7E5Ov7HoO8Mw31Arse%2F0XrByPTGBVJ48n9qB2nvlTiWztg3QqiqigADZs3N7kcf5LZHLFazrqEt4qPIfG%2BXbzeZYvqyJdcPjZZu8wzjwCKv%2BohiVroWTrtPvBJF4HEWiC6dFEXMKWbncEGOqUBDIm%2BlfRFc5ORww6srMH4ZwYr5hNAQruM5cxdaMJXnYP1CQpaRqfmEhU59sse3pP7Fnk0wwjURiUkSB%2FsiLHsix5qkN7ir%2BLi1FHko9%2BWsu%2FFX9wGWJJzWFgbYK7IhazdXJMX0rcz%2Fdk%2FV9LwcSjtJttI7OBJFHo5orFXZjKXElg1mt2edK4wyqaO9qFQos5BBeSZZea6S4a2bM2ZQUcCCkQrsfXj&X-Amz-Signature=e6cacdea6154319d2e17ec8ac7811a59c6e0e0c6226046ae8743e29760c6c4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWG3WUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FTQDgKRNM5Ba5W79BV2p1e2Ywndf1oQ1i%2BJT6UVIcwIgTbMxMIoQBMXB9gW%2FA7JY9NZ2IVAMWTQzL6sZnle0p88q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKT7%2FqwrycOenehbXyrcAzedR212WpxGSGEscYBtr5o%2FFDltBRdZI1h8qU3GOVGEjlBYn2luqZ56miFM5bY5Q1rd8p2XXzbW10XgTowkYzQ5fFGQ30wvfLLm7g014Em1mGUKecJoa44m5ozL1TW%2BMOnXBExf7TrGydm7svXNGMH0I7KaoK2YYOqP50pbd40BAu2ZVCNYFCdecgaY1pIuLdCRVeSQ9R1u2rg4yWxrLelER1wYjJIorMepxJo%2BNLfKuzHCL4HrlRi2EsCfJwlHDTGI6zub2Ab2JQ584tIY6ibJ0InZbYCYfzbZYICQO%2Fvev2If%2FHDUaTcerIX3fEWWCr6Nm7DbFRi%2BKr%2FwTTChQH%2F%2Fq3azbJhiSNQRLBvZCTxqO7MgT8EVSbJ4XVlQB4bphQod%2BSxb99pmgC2itXON3vsPA9rqBcFAFYieg1mPpdNDoGdsJk%2FmcE6JRs5oeh9RujQ78QH1arxP%2BO6Bem%2BkNfVwJHyATJsVHYwZUeY8%2BoQzPkti147%2B0k7E5Ov7HoO8Mw31Arse%2F0XrByPTGBVJ48n9qB2nvlTiWztg3QqiqigADZs3N7kcf5LZHLFazrqEt4qPIfG%2BXbzeZYvqyJdcPjZZu8wzjwCKv%2BohiVroWTrtPvBJF4HEWiC6dFEXMKWbncEGOqUBDIm%2BlfRFc5ORww6srMH4ZwYr5hNAQruM5cxdaMJXnYP1CQpaRqfmEhU59sse3pP7Fnk0wwjURiUkSB%2FsiLHsix5qkN7ir%2BLi1FHko9%2BWsu%2FFX9wGWJJzWFgbYK7IhazdXJMX0rcz%2Fdk%2FV9LwcSjtJttI7OBJFHo5orFXZjKXElg1mt2edK4wyqaO9qFQos5BBeSZZea6S4a2bM2ZQUcCCkQrsfXj&X-Amz-Signature=2df1ec33b3c1f4b3553d9fc77fd0217213f4bc56fcc6a5efb5a9b0f8823486fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFWG3WUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FTQDgKRNM5Ba5W79BV2p1e2Ywndf1oQ1i%2BJT6UVIcwIgTbMxMIoQBMXB9gW%2FA7JY9NZ2IVAMWTQzL6sZnle0p88q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKT7%2FqwrycOenehbXyrcAzedR212WpxGSGEscYBtr5o%2FFDltBRdZI1h8qU3GOVGEjlBYn2luqZ56miFM5bY5Q1rd8p2XXzbW10XgTowkYzQ5fFGQ30wvfLLm7g014Em1mGUKecJoa44m5ozL1TW%2BMOnXBExf7TrGydm7svXNGMH0I7KaoK2YYOqP50pbd40BAu2ZVCNYFCdecgaY1pIuLdCRVeSQ9R1u2rg4yWxrLelER1wYjJIorMepxJo%2BNLfKuzHCL4HrlRi2EsCfJwlHDTGI6zub2Ab2JQ584tIY6ibJ0InZbYCYfzbZYICQO%2Fvev2If%2FHDUaTcerIX3fEWWCr6Nm7DbFRi%2BKr%2FwTTChQH%2F%2Fq3azbJhiSNQRLBvZCTxqO7MgT8EVSbJ4XVlQB4bphQod%2BSxb99pmgC2itXON3vsPA9rqBcFAFYieg1mPpdNDoGdsJk%2FmcE6JRs5oeh9RujQ78QH1arxP%2BO6Bem%2BkNfVwJHyATJsVHYwZUeY8%2BoQzPkti147%2B0k7E5Ov7HoO8Mw31Arse%2F0XrByPTGBVJ48n9qB2nvlTiWztg3QqiqigADZs3N7kcf5LZHLFazrqEt4qPIfG%2BXbzeZYvqyJdcPjZZu8wzjwCKv%2BohiVroWTrtPvBJF4HEWiC6dFEXMKWbncEGOqUBDIm%2BlfRFc5ORww6srMH4ZwYr5hNAQruM5cxdaMJXnYP1CQpaRqfmEhU59sse3pP7Fnk0wwjURiUkSB%2FsiLHsix5qkN7ir%2BLi1FHko9%2BWsu%2FFX9wGWJJzWFgbYK7IhazdXJMX0rcz%2Fdk%2FV9LwcSjtJttI7OBJFHo5orFXZjKXElg1mt2edK4wyqaO9qFQos5BBeSZZea6S4a2bM2ZQUcCCkQrsfXj&X-Amz-Signature=15ad5e3deb6f2adad324f3280e6a72be223b3bc7f9e46ffde03b66d8a6c5c9ed&X-Amz-SignedHeaders=host&x-id=GetObject)
