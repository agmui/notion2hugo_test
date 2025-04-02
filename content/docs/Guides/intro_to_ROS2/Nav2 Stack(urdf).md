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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB76P5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDXkLELZZX%2BbTfuPPyszQKXA8iR%2BX%2BI5XbAr3XYVPHowIhAI0pRf9RnbQ4vMH7XVUZpQiWHqSILtNgxeijXy5RFY4iKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdvjzoe%2FqQ86vsMUq3AP3uV26JBx4yee5p9r1Bw0eIvbQ8sioNYAGEgJ9DHNmVFsSQx68C4bxneI62t%2FZnBOGP%2FCeRZ85jvgtZWSV8udGihxOw34U8FKI2QQgmkr2ZIZB21rQK77TTUG4PO5GdlN7CWhcovCBRuYisZsqaEZNQVNFzbzEY2TPIdg4kkZsucPwcdqvdwtGHrbvwrFCgq9swmCO9jo4%2BSWOdPaGaCoDgLom8RrL1Fz6FRt2nKtnZVHEJ6Uzj2falcRfaBKSuTzyX6GsM6zu71Bgc0iqYQKrRTIfVh02gT9mtz%2BLbVpBleWdFpeff2gcK9WhKsI4sod7ClUtY2FM3FQtF3%2FYgNhkvviOY0eCe3MHNsY3CTz4NtPHwL59iwoCH6k2IcLsQl%2FxuXRuWsc8JbmXKhrAU%2FKD3fBI3odk6Sn8A%2FQ1RRHTQkwXyUHs%2FB%2BY%2FmHtZRTIfs9nnOfoFIfdvbuWVDY6%2BAj%2FyEmZbuDAx8nKTmxx7ph6xOwrd72ue9ybPoZ6zD%2B%2BrDx4R2hHP2iDd0L4K8nL%2F1vNdi%2BpZ7jtZg4XkKduNWdIbTR9CArfhEhr5SG3fqW8Zy0EP%2BOGMtf%2B9MRhwCpuZ9nDQlUkCP48WxTkhV2IA8Bvl1niYJltaW1mDQpryDC86bW%2FBjqkAXrtC%2FNa8N%2BP%2BRt4ZD1SXu3ntS%2B77bnuLWWP%2FJGHDLvd2sPBHbsAdU7qHvsxtIBiuxn7i8hmNXb7h0qHLunBwWUf8cdgLNfPHiE8snjloLNwF2ZUiynNud4gIFBp7WofWoMwSaYU%2BPQgJ3P1RJYFHaAE4PfuMrEAGyaJAIoehoaVGwRsjVThI4s%2BGWK1pECZlEQEUgOvmg5ZuYqoahUe5MxmN4Ro&X-Amz-Signature=f0076c7279786968a25ecb7c953c270a1d916ae4f57c0850c2abfe226765cbc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB76P5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDXkLELZZX%2BbTfuPPyszQKXA8iR%2BX%2BI5XbAr3XYVPHowIhAI0pRf9RnbQ4vMH7XVUZpQiWHqSILtNgxeijXy5RFY4iKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdvjzoe%2FqQ86vsMUq3AP3uV26JBx4yee5p9r1Bw0eIvbQ8sioNYAGEgJ9DHNmVFsSQx68C4bxneI62t%2FZnBOGP%2FCeRZ85jvgtZWSV8udGihxOw34U8FKI2QQgmkr2ZIZB21rQK77TTUG4PO5GdlN7CWhcovCBRuYisZsqaEZNQVNFzbzEY2TPIdg4kkZsucPwcdqvdwtGHrbvwrFCgq9swmCO9jo4%2BSWOdPaGaCoDgLom8RrL1Fz6FRt2nKtnZVHEJ6Uzj2falcRfaBKSuTzyX6GsM6zu71Bgc0iqYQKrRTIfVh02gT9mtz%2BLbVpBleWdFpeff2gcK9WhKsI4sod7ClUtY2FM3FQtF3%2FYgNhkvviOY0eCe3MHNsY3CTz4NtPHwL59iwoCH6k2IcLsQl%2FxuXRuWsc8JbmXKhrAU%2FKD3fBI3odk6Sn8A%2FQ1RRHTQkwXyUHs%2FB%2BY%2FmHtZRTIfs9nnOfoFIfdvbuWVDY6%2BAj%2FyEmZbuDAx8nKTmxx7ph6xOwrd72ue9ybPoZ6zD%2B%2BrDx4R2hHP2iDd0L4K8nL%2F1vNdi%2BpZ7jtZg4XkKduNWdIbTR9CArfhEhr5SG3fqW8Zy0EP%2BOGMtf%2B9MRhwCpuZ9nDQlUkCP48WxTkhV2IA8Bvl1niYJltaW1mDQpryDC86bW%2FBjqkAXrtC%2FNa8N%2BP%2BRt4ZD1SXu3ntS%2B77bnuLWWP%2FJGHDLvd2sPBHbsAdU7qHvsxtIBiuxn7i8hmNXb7h0qHLunBwWUf8cdgLNfPHiE8snjloLNwF2ZUiynNud4gIFBp7WofWoMwSaYU%2BPQgJ3P1RJYFHaAE4PfuMrEAGyaJAIoehoaVGwRsjVThI4s%2BGWK1pECZlEQEUgOvmg5ZuYqoahUe5MxmN4Ro&X-Amz-Signature=14a93978e1ea2a46fc3652f728691c74455e736cb6fc1bfacd864c2b5981bcd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB76P5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDXkLELZZX%2BbTfuPPyszQKXA8iR%2BX%2BI5XbAr3XYVPHowIhAI0pRf9RnbQ4vMH7XVUZpQiWHqSILtNgxeijXy5RFY4iKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdvjzoe%2FqQ86vsMUq3AP3uV26JBx4yee5p9r1Bw0eIvbQ8sioNYAGEgJ9DHNmVFsSQx68C4bxneI62t%2FZnBOGP%2FCeRZ85jvgtZWSV8udGihxOw34U8FKI2QQgmkr2ZIZB21rQK77TTUG4PO5GdlN7CWhcovCBRuYisZsqaEZNQVNFzbzEY2TPIdg4kkZsucPwcdqvdwtGHrbvwrFCgq9swmCO9jo4%2BSWOdPaGaCoDgLom8RrL1Fz6FRt2nKtnZVHEJ6Uzj2falcRfaBKSuTzyX6GsM6zu71Bgc0iqYQKrRTIfVh02gT9mtz%2BLbVpBleWdFpeff2gcK9WhKsI4sod7ClUtY2FM3FQtF3%2FYgNhkvviOY0eCe3MHNsY3CTz4NtPHwL59iwoCH6k2IcLsQl%2FxuXRuWsc8JbmXKhrAU%2FKD3fBI3odk6Sn8A%2FQ1RRHTQkwXyUHs%2FB%2BY%2FmHtZRTIfs9nnOfoFIfdvbuWVDY6%2BAj%2FyEmZbuDAx8nKTmxx7ph6xOwrd72ue9ybPoZ6zD%2B%2BrDx4R2hHP2iDd0L4K8nL%2F1vNdi%2BpZ7jtZg4XkKduNWdIbTR9CArfhEhr5SG3fqW8Zy0EP%2BOGMtf%2B9MRhwCpuZ9nDQlUkCP48WxTkhV2IA8Bvl1niYJltaW1mDQpryDC86bW%2FBjqkAXrtC%2FNa8N%2BP%2BRt4ZD1SXu3ntS%2B77bnuLWWP%2FJGHDLvd2sPBHbsAdU7qHvsxtIBiuxn7i8hmNXb7h0qHLunBwWUf8cdgLNfPHiE8snjloLNwF2ZUiynNud4gIFBp7WofWoMwSaYU%2BPQgJ3P1RJYFHaAE4PfuMrEAGyaJAIoehoaVGwRsjVThI4s%2BGWK1pECZlEQEUgOvmg5ZuYqoahUe5MxmN4Ro&X-Amz-Signature=90b4b65cfc2cd64efc7ddf2b2291bcdf0e26ea5367fa979f90d83c3fbc37be9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB76P5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDXkLELZZX%2BbTfuPPyszQKXA8iR%2BX%2BI5XbAr3XYVPHowIhAI0pRf9RnbQ4vMH7XVUZpQiWHqSILtNgxeijXy5RFY4iKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdvjzoe%2FqQ86vsMUq3AP3uV26JBx4yee5p9r1Bw0eIvbQ8sioNYAGEgJ9DHNmVFsSQx68C4bxneI62t%2FZnBOGP%2FCeRZ85jvgtZWSV8udGihxOw34U8FKI2QQgmkr2ZIZB21rQK77TTUG4PO5GdlN7CWhcovCBRuYisZsqaEZNQVNFzbzEY2TPIdg4kkZsucPwcdqvdwtGHrbvwrFCgq9swmCO9jo4%2BSWOdPaGaCoDgLom8RrL1Fz6FRt2nKtnZVHEJ6Uzj2falcRfaBKSuTzyX6GsM6zu71Bgc0iqYQKrRTIfVh02gT9mtz%2BLbVpBleWdFpeff2gcK9WhKsI4sod7ClUtY2FM3FQtF3%2FYgNhkvviOY0eCe3MHNsY3CTz4NtPHwL59iwoCH6k2IcLsQl%2FxuXRuWsc8JbmXKhrAU%2FKD3fBI3odk6Sn8A%2FQ1RRHTQkwXyUHs%2FB%2BY%2FmHtZRTIfs9nnOfoFIfdvbuWVDY6%2BAj%2FyEmZbuDAx8nKTmxx7ph6xOwrd72ue9ybPoZ6zD%2B%2BrDx4R2hHP2iDd0L4K8nL%2F1vNdi%2BpZ7jtZg4XkKduNWdIbTR9CArfhEhr5SG3fqW8Zy0EP%2BOGMtf%2B9MRhwCpuZ9nDQlUkCP48WxTkhV2IA8Bvl1niYJltaW1mDQpryDC86bW%2FBjqkAXrtC%2FNa8N%2BP%2BRt4ZD1SXu3ntS%2B77bnuLWWP%2FJGHDLvd2sPBHbsAdU7qHvsxtIBiuxn7i8hmNXb7h0qHLunBwWUf8cdgLNfPHiE8snjloLNwF2ZUiynNud4gIFBp7WofWoMwSaYU%2BPQgJ3P1RJYFHaAE4PfuMrEAGyaJAIoehoaVGwRsjVThI4s%2BGWK1pECZlEQEUgOvmg5ZuYqoahUe5MxmN4Ro&X-Amz-Signature=db3b036e79b5e308a29393d54aeb7108559f1c12bdcffa7a16d2773965973054&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB76P5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDXkLELZZX%2BbTfuPPyszQKXA8iR%2BX%2BI5XbAr3XYVPHowIhAI0pRf9RnbQ4vMH7XVUZpQiWHqSILtNgxeijXy5RFY4iKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdvjzoe%2FqQ86vsMUq3AP3uV26JBx4yee5p9r1Bw0eIvbQ8sioNYAGEgJ9DHNmVFsSQx68C4bxneI62t%2FZnBOGP%2FCeRZ85jvgtZWSV8udGihxOw34U8FKI2QQgmkr2ZIZB21rQK77TTUG4PO5GdlN7CWhcovCBRuYisZsqaEZNQVNFzbzEY2TPIdg4kkZsucPwcdqvdwtGHrbvwrFCgq9swmCO9jo4%2BSWOdPaGaCoDgLom8RrL1Fz6FRt2nKtnZVHEJ6Uzj2falcRfaBKSuTzyX6GsM6zu71Bgc0iqYQKrRTIfVh02gT9mtz%2BLbVpBleWdFpeff2gcK9WhKsI4sod7ClUtY2FM3FQtF3%2FYgNhkvviOY0eCe3MHNsY3CTz4NtPHwL59iwoCH6k2IcLsQl%2FxuXRuWsc8JbmXKhrAU%2FKD3fBI3odk6Sn8A%2FQ1RRHTQkwXyUHs%2FB%2BY%2FmHtZRTIfs9nnOfoFIfdvbuWVDY6%2BAj%2FyEmZbuDAx8nKTmxx7ph6xOwrd72ue9ybPoZ6zD%2B%2BrDx4R2hHP2iDd0L4K8nL%2F1vNdi%2BpZ7jtZg4XkKduNWdIbTR9CArfhEhr5SG3fqW8Zy0EP%2BOGMtf%2B9MRhwCpuZ9nDQlUkCP48WxTkhV2IA8Bvl1niYJltaW1mDQpryDC86bW%2FBjqkAXrtC%2FNa8N%2BP%2BRt4ZD1SXu3ntS%2B77bnuLWWP%2FJGHDLvd2sPBHbsAdU7qHvsxtIBiuxn7i8hmNXb7h0qHLunBwWUf8cdgLNfPHiE8snjloLNwF2ZUiynNud4gIFBp7WofWoMwSaYU%2BPQgJ3P1RJYFHaAE4PfuMrEAGyaJAIoehoaVGwRsjVThI4s%2BGWK1pECZlEQEUgOvmg5ZuYqoahUe5MxmN4Ro&X-Amz-Signature=b176f720ea15d0987e5016415011eafef1840eba042f6b663e37c0bba76b3b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB76P5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDXkLELZZX%2BbTfuPPyszQKXA8iR%2BX%2BI5XbAr3XYVPHowIhAI0pRf9RnbQ4vMH7XVUZpQiWHqSILtNgxeijXy5RFY4iKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdvjzoe%2FqQ86vsMUq3AP3uV26JBx4yee5p9r1Bw0eIvbQ8sioNYAGEgJ9DHNmVFsSQx68C4bxneI62t%2FZnBOGP%2FCeRZ85jvgtZWSV8udGihxOw34U8FKI2QQgmkr2ZIZB21rQK77TTUG4PO5GdlN7CWhcovCBRuYisZsqaEZNQVNFzbzEY2TPIdg4kkZsucPwcdqvdwtGHrbvwrFCgq9swmCO9jo4%2BSWOdPaGaCoDgLom8RrL1Fz6FRt2nKtnZVHEJ6Uzj2falcRfaBKSuTzyX6GsM6zu71Bgc0iqYQKrRTIfVh02gT9mtz%2BLbVpBleWdFpeff2gcK9WhKsI4sod7ClUtY2FM3FQtF3%2FYgNhkvviOY0eCe3MHNsY3CTz4NtPHwL59iwoCH6k2IcLsQl%2FxuXRuWsc8JbmXKhrAU%2FKD3fBI3odk6Sn8A%2FQ1RRHTQkwXyUHs%2FB%2BY%2FmHtZRTIfs9nnOfoFIfdvbuWVDY6%2BAj%2FyEmZbuDAx8nKTmxx7ph6xOwrd72ue9ybPoZ6zD%2B%2BrDx4R2hHP2iDd0L4K8nL%2F1vNdi%2BpZ7jtZg4XkKduNWdIbTR9CArfhEhr5SG3fqW8Zy0EP%2BOGMtf%2B9MRhwCpuZ9nDQlUkCP48WxTkhV2IA8Bvl1niYJltaW1mDQpryDC86bW%2FBjqkAXrtC%2FNa8N%2BP%2BRt4ZD1SXu3ntS%2B77bnuLWWP%2FJGHDLvd2sPBHbsAdU7qHvsxtIBiuxn7i8hmNXb7h0qHLunBwWUf8cdgLNfPHiE8snjloLNwF2ZUiynNud4gIFBp7WofWoMwSaYU%2BPQgJ3P1RJYFHaAE4PfuMrEAGyaJAIoehoaVGwRsjVThI4s%2BGWK1pECZlEQEUgOvmg5ZuYqoahUe5MxmN4Ro&X-Amz-Signature=87bd1831cf73ba05cfce6c4fba75f6a63017b6d8c4a893b9219b7ec1c6892c1c&X-Amz-SignedHeaders=host&x-id=GetObject)
