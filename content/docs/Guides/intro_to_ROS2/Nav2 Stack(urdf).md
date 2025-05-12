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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTTIEMX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDEJearT%2F9kRiI3dhNrMAF7WMaSro9rafmb%2BSSnX61uZwIhAPfun%2FaUbHQh3AEEJ2Ydun4qPoLzg5FynwB8sa6QuZBAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE8sWreNzcI8eiQAkq3AN5R%2BhmIvkCX7z2uqUKxtwmWgLHej2%2BUtaxMv65HnLTLaviRLfopNKFE1ZZ1k32N%2F4g7ouv2JMtZehdHtLU%2F9P9k7Flnz0KbMkTJubU1kU6wc4CaOenuLbxx1brIBpbC152Ln%2FCqLM9ICQYMWffKWq2ZybLHYLCtYQYoRW1MRdMq13ar8NS8VX83GX2fOkwPh5juIxeJe7goen6U8sROjMKxlMlZiDt0VgaC8oVzhP5cmn7yXqUWVno9VIy3S6FfaXMAv9JmuJGhhT3cPrGDObVchzG7JrlVBadjUM5vu4Fk4JtEzmQh%2BD%2FlWSBbl8lL5IRlrnT%2FNOn%2BdnxxwVozZD2BtCbcX3LFDDMfxmsWgRp5CIkeqiSAcx3d60aYisc7LNjQpC4tsh9XZmwRWwCcgtDFvsJmyBmXEE2n1NLJVXJ84vdgCg5oKlfhNOBWO0Zw2%2FPhsBZ2cXoMJTwUR6Ct1xQqbTzd2qPqwCJ3tGSxz0NTYs1II1XjKfd2CH96TLO9qa1mNdgerHjjkgO%2Fe6VT1DqcbnAmJAes0Q6YTMnrgi7inUtTyX5wfzDIELYTtAa4oF2aYDPrX8%2FgkfueTB5OYSnLEIHmGrIPlg9udXhJSeBkI1mxYV%2BjzBrJHSW2zC6hYbBBjqkAasiVN%2B1p84noZc25vQrDznSzSfzIe%2Bc%2FU3G8ui4FnPes4HNHKuYHnuTzfzSCeu3enESsM9uQ%2FHrQgxmA2Rr8gGwPcwwuxxQTJv6fO6qEnT0t1bfLj3rCesOtJqthqbWgqXVZo0TFek4cCA%2FEDhnnphrEgJcCkfJZwUA52XhEbL2x9RNiEAHU8frZQ6fStb%2BxLH01eXPKO7c2Lg9AIOdaLZigT84&X-Amz-Signature=1cf4c12b80480dd52e5f49a0fc34fad9f4f4b09426e34a11aa1e2634d6b7638c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTTIEMX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDEJearT%2F9kRiI3dhNrMAF7WMaSro9rafmb%2BSSnX61uZwIhAPfun%2FaUbHQh3AEEJ2Ydun4qPoLzg5FynwB8sa6QuZBAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE8sWreNzcI8eiQAkq3AN5R%2BhmIvkCX7z2uqUKxtwmWgLHej2%2BUtaxMv65HnLTLaviRLfopNKFE1ZZ1k32N%2F4g7ouv2JMtZehdHtLU%2F9P9k7Flnz0KbMkTJubU1kU6wc4CaOenuLbxx1brIBpbC152Ln%2FCqLM9ICQYMWffKWq2ZybLHYLCtYQYoRW1MRdMq13ar8NS8VX83GX2fOkwPh5juIxeJe7goen6U8sROjMKxlMlZiDt0VgaC8oVzhP5cmn7yXqUWVno9VIy3S6FfaXMAv9JmuJGhhT3cPrGDObVchzG7JrlVBadjUM5vu4Fk4JtEzmQh%2BD%2FlWSBbl8lL5IRlrnT%2FNOn%2BdnxxwVozZD2BtCbcX3LFDDMfxmsWgRp5CIkeqiSAcx3d60aYisc7LNjQpC4tsh9XZmwRWwCcgtDFvsJmyBmXEE2n1NLJVXJ84vdgCg5oKlfhNOBWO0Zw2%2FPhsBZ2cXoMJTwUR6Ct1xQqbTzd2qPqwCJ3tGSxz0NTYs1II1XjKfd2CH96TLO9qa1mNdgerHjjkgO%2Fe6VT1DqcbnAmJAes0Q6YTMnrgi7inUtTyX5wfzDIELYTtAa4oF2aYDPrX8%2FgkfueTB5OYSnLEIHmGrIPlg9udXhJSeBkI1mxYV%2BjzBrJHSW2zC6hYbBBjqkAasiVN%2B1p84noZc25vQrDznSzSfzIe%2Bc%2FU3G8ui4FnPes4HNHKuYHnuTzfzSCeu3enESsM9uQ%2FHrQgxmA2Rr8gGwPcwwuxxQTJv6fO6qEnT0t1bfLj3rCesOtJqthqbWgqXVZo0TFek4cCA%2FEDhnnphrEgJcCkfJZwUA52XhEbL2x9RNiEAHU8frZQ6fStb%2BxLH01eXPKO7c2Lg9AIOdaLZigT84&X-Amz-Signature=d9e33eda9ea2c816dd29b2d15d9439ec2c7af08239041d585436e87855226232&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTTIEMX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDEJearT%2F9kRiI3dhNrMAF7WMaSro9rafmb%2BSSnX61uZwIhAPfun%2FaUbHQh3AEEJ2Ydun4qPoLzg5FynwB8sa6QuZBAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE8sWreNzcI8eiQAkq3AN5R%2BhmIvkCX7z2uqUKxtwmWgLHej2%2BUtaxMv65HnLTLaviRLfopNKFE1ZZ1k32N%2F4g7ouv2JMtZehdHtLU%2F9P9k7Flnz0KbMkTJubU1kU6wc4CaOenuLbxx1brIBpbC152Ln%2FCqLM9ICQYMWffKWq2ZybLHYLCtYQYoRW1MRdMq13ar8NS8VX83GX2fOkwPh5juIxeJe7goen6U8sROjMKxlMlZiDt0VgaC8oVzhP5cmn7yXqUWVno9VIy3S6FfaXMAv9JmuJGhhT3cPrGDObVchzG7JrlVBadjUM5vu4Fk4JtEzmQh%2BD%2FlWSBbl8lL5IRlrnT%2FNOn%2BdnxxwVozZD2BtCbcX3LFDDMfxmsWgRp5CIkeqiSAcx3d60aYisc7LNjQpC4tsh9XZmwRWwCcgtDFvsJmyBmXEE2n1NLJVXJ84vdgCg5oKlfhNOBWO0Zw2%2FPhsBZ2cXoMJTwUR6Ct1xQqbTzd2qPqwCJ3tGSxz0NTYs1II1XjKfd2CH96TLO9qa1mNdgerHjjkgO%2Fe6VT1DqcbnAmJAes0Q6YTMnrgi7inUtTyX5wfzDIELYTtAa4oF2aYDPrX8%2FgkfueTB5OYSnLEIHmGrIPlg9udXhJSeBkI1mxYV%2BjzBrJHSW2zC6hYbBBjqkAasiVN%2B1p84noZc25vQrDznSzSfzIe%2Bc%2FU3G8ui4FnPes4HNHKuYHnuTzfzSCeu3enESsM9uQ%2FHrQgxmA2Rr8gGwPcwwuxxQTJv6fO6qEnT0t1bfLj3rCesOtJqthqbWgqXVZo0TFek4cCA%2FEDhnnphrEgJcCkfJZwUA52XhEbL2x9RNiEAHU8frZQ6fStb%2BxLH01eXPKO7c2Lg9AIOdaLZigT84&X-Amz-Signature=3f0f06e261593fd7e830b9e5659980f6c42c9dc6908c1fa5f4ad864bf7535bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTTIEMX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDEJearT%2F9kRiI3dhNrMAF7WMaSro9rafmb%2BSSnX61uZwIhAPfun%2FaUbHQh3AEEJ2Ydun4qPoLzg5FynwB8sa6QuZBAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE8sWreNzcI8eiQAkq3AN5R%2BhmIvkCX7z2uqUKxtwmWgLHej2%2BUtaxMv65HnLTLaviRLfopNKFE1ZZ1k32N%2F4g7ouv2JMtZehdHtLU%2F9P9k7Flnz0KbMkTJubU1kU6wc4CaOenuLbxx1brIBpbC152Ln%2FCqLM9ICQYMWffKWq2ZybLHYLCtYQYoRW1MRdMq13ar8NS8VX83GX2fOkwPh5juIxeJe7goen6U8sROjMKxlMlZiDt0VgaC8oVzhP5cmn7yXqUWVno9VIy3S6FfaXMAv9JmuJGhhT3cPrGDObVchzG7JrlVBadjUM5vu4Fk4JtEzmQh%2BD%2FlWSBbl8lL5IRlrnT%2FNOn%2BdnxxwVozZD2BtCbcX3LFDDMfxmsWgRp5CIkeqiSAcx3d60aYisc7LNjQpC4tsh9XZmwRWwCcgtDFvsJmyBmXEE2n1NLJVXJ84vdgCg5oKlfhNOBWO0Zw2%2FPhsBZ2cXoMJTwUR6Ct1xQqbTzd2qPqwCJ3tGSxz0NTYs1II1XjKfd2CH96TLO9qa1mNdgerHjjkgO%2Fe6VT1DqcbnAmJAes0Q6YTMnrgi7inUtTyX5wfzDIELYTtAa4oF2aYDPrX8%2FgkfueTB5OYSnLEIHmGrIPlg9udXhJSeBkI1mxYV%2BjzBrJHSW2zC6hYbBBjqkAasiVN%2B1p84noZc25vQrDznSzSfzIe%2Bc%2FU3G8ui4FnPes4HNHKuYHnuTzfzSCeu3enESsM9uQ%2FHrQgxmA2Rr8gGwPcwwuxxQTJv6fO6qEnT0t1bfLj3rCesOtJqthqbWgqXVZo0TFek4cCA%2FEDhnnphrEgJcCkfJZwUA52XhEbL2x9RNiEAHU8frZQ6fStb%2BxLH01eXPKO7c2Lg9AIOdaLZigT84&X-Amz-Signature=a9409a2287e99198eab91c676508752c16a3bd1171889e76804392b8621ef59e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTTIEMX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDEJearT%2F9kRiI3dhNrMAF7WMaSro9rafmb%2BSSnX61uZwIhAPfun%2FaUbHQh3AEEJ2Ydun4qPoLzg5FynwB8sa6QuZBAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE8sWreNzcI8eiQAkq3AN5R%2BhmIvkCX7z2uqUKxtwmWgLHej2%2BUtaxMv65HnLTLaviRLfopNKFE1ZZ1k32N%2F4g7ouv2JMtZehdHtLU%2F9P9k7Flnz0KbMkTJubU1kU6wc4CaOenuLbxx1brIBpbC152Ln%2FCqLM9ICQYMWffKWq2ZybLHYLCtYQYoRW1MRdMq13ar8NS8VX83GX2fOkwPh5juIxeJe7goen6U8sROjMKxlMlZiDt0VgaC8oVzhP5cmn7yXqUWVno9VIy3S6FfaXMAv9JmuJGhhT3cPrGDObVchzG7JrlVBadjUM5vu4Fk4JtEzmQh%2BD%2FlWSBbl8lL5IRlrnT%2FNOn%2BdnxxwVozZD2BtCbcX3LFDDMfxmsWgRp5CIkeqiSAcx3d60aYisc7LNjQpC4tsh9XZmwRWwCcgtDFvsJmyBmXEE2n1NLJVXJ84vdgCg5oKlfhNOBWO0Zw2%2FPhsBZ2cXoMJTwUR6Ct1xQqbTzd2qPqwCJ3tGSxz0NTYs1II1XjKfd2CH96TLO9qa1mNdgerHjjkgO%2Fe6VT1DqcbnAmJAes0Q6YTMnrgi7inUtTyX5wfzDIELYTtAa4oF2aYDPrX8%2FgkfueTB5OYSnLEIHmGrIPlg9udXhJSeBkI1mxYV%2BjzBrJHSW2zC6hYbBBjqkAasiVN%2B1p84noZc25vQrDznSzSfzIe%2Bc%2FU3G8ui4FnPes4HNHKuYHnuTzfzSCeu3enESsM9uQ%2FHrQgxmA2Rr8gGwPcwwuxxQTJv6fO6qEnT0t1bfLj3rCesOtJqthqbWgqXVZo0TFek4cCA%2FEDhnnphrEgJcCkfJZwUA52XhEbL2x9RNiEAHU8frZQ6fStb%2BxLH01eXPKO7c2Lg9AIOdaLZigT84&X-Amz-Signature=4a7e7e81cc9e909164c9fbd63ac8db425368ee85759e522cb38f69f476b00143&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTTIEMX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDEJearT%2F9kRiI3dhNrMAF7WMaSro9rafmb%2BSSnX61uZwIhAPfun%2FaUbHQh3AEEJ2Ydun4qPoLzg5FynwB8sa6QuZBAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE8sWreNzcI8eiQAkq3AN5R%2BhmIvkCX7z2uqUKxtwmWgLHej2%2BUtaxMv65HnLTLaviRLfopNKFE1ZZ1k32N%2F4g7ouv2JMtZehdHtLU%2F9P9k7Flnz0KbMkTJubU1kU6wc4CaOenuLbxx1brIBpbC152Ln%2FCqLM9ICQYMWffKWq2ZybLHYLCtYQYoRW1MRdMq13ar8NS8VX83GX2fOkwPh5juIxeJe7goen6U8sROjMKxlMlZiDt0VgaC8oVzhP5cmn7yXqUWVno9VIy3S6FfaXMAv9JmuJGhhT3cPrGDObVchzG7JrlVBadjUM5vu4Fk4JtEzmQh%2BD%2FlWSBbl8lL5IRlrnT%2FNOn%2BdnxxwVozZD2BtCbcX3LFDDMfxmsWgRp5CIkeqiSAcx3d60aYisc7LNjQpC4tsh9XZmwRWwCcgtDFvsJmyBmXEE2n1NLJVXJ84vdgCg5oKlfhNOBWO0Zw2%2FPhsBZ2cXoMJTwUR6Ct1xQqbTzd2qPqwCJ3tGSxz0NTYs1II1XjKfd2CH96TLO9qa1mNdgerHjjkgO%2Fe6VT1DqcbnAmJAes0Q6YTMnrgi7inUtTyX5wfzDIELYTtAa4oF2aYDPrX8%2FgkfueTB5OYSnLEIHmGrIPlg9udXhJSeBkI1mxYV%2BjzBrJHSW2zC6hYbBBjqkAasiVN%2B1p84noZc25vQrDznSzSfzIe%2Bc%2FU3G8ui4FnPes4HNHKuYHnuTzfzSCeu3enESsM9uQ%2FHrQgxmA2Rr8gGwPcwwuxxQTJv6fO6qEnT0t1bfLj3rCesOtJqthqbWgqXVZo0TFek4cCA%2FEDhnnphrEgJcCkfJZwUA52XhEbL2x9RNiEAHU8frZQ6fStb%2BxLH01eXPKO7c2Lg9AIOdaLZigT84&X-Amz-Signature=1a21bde704473fc46e0e21a95b5915755cf4bd7b329d717462a1c548991d82cc&X-Amz-SignedHeaders=host&x-id=GetObject)
