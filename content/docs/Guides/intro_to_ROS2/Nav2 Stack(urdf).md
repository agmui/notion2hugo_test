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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5PXZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZfVi0%2FNJbfolkhWaT1Ps7NIHYsr6d%2Bn65ljOydizn2AiA63Cm4osHF1uA5QoxiJG%2B92Y%2F4BqJ0PhRNq9bvET25GSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMyCCH9c9hbZodL9HrKtwDjZaEsseDs6g63X%2B5tQT28UjjthktoLCMq1vD1nKjoWfn%2FjPK7mchGh42FhzKujIkf7G2AOKgy8ZvmldCFFvJ6bmZhATd%2BKkNWmNVJJCBelYMsk4xaObOj8dllR%2Bb87j4AJfQQPmha%2Fy7Ovl%2FLZEicr3pnxdX7n4mpe1yP6oRBDKdgdb2HprsGJ6TU8omStAENxyGeHKUkdfVdTT6DlSF83VldBhtIm%2FPl6x%2F6WHwt4io3xYM7ZFzkCqYJvMX8lfK94Z8coRuwcwaCqvH6luPNlN0iYt%2F1LU3pUhiKaonNUOP9aLw2F2KoGfsLSA6c45iU2cjaRi65jxXhUfLCTBsTb6pP8Os09Cb1f1U5boznujFYQaiUD0kR3nKmutK8W4HPj6ykwo58Ez1fJi10pcv4QXXQH2k5jwqBtBp1PJ56e%2FBPoMic4iPEea0s2qsnjVLt3fgzP2GCqFP2WbxRfAyIM8W2ShOrHw7gH0pXnshn%2FrHt9q61b4zVZMA85%2B9Lto3tAx4%2BGd84d9zNw7YmMDCizolP%2F6keVfstPpOPrLRa%2BgYmwkvm9hPH4i75hFEMYe2w6bKx%2FhQcS3W6t%2FxM2I4CUnLyHmr9NSUWswyZdITgVlipQ6V%2FR5Me5Hv1k4wgqK3vQY6pgFkMnd2bYcdVEIFh1pYTXXNb5ZZ8p0ztUeX2ehf1%2FYYsifU%2BxOrAcHbgEAxS%2BZ8JLveSuC3o4ofiOEgA7ndGPI6IKBOASzOik2Lpvl%2BrjqhOA4EvKfZtKSa9Tn5K3wGGrQIVL0QU%2BMS0WwXSKlELdiWFWKGjUd36JqcXFuaJHNj%2FJSERKHngY0ig2IWN0WNHnd3JOUI35WUsGthqEvvO439fY5Tt5P9&X-Amz-Signature=6cff7631c3678814299cff657263e0ff09ea01f832a41568bd3b366837e9078b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5PXZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZfVi0%2FNJbfolkhWaT1Ps7NIHYsr6d%2Bn65ljOydizn2AiA63Cm4osHF1uA5QoxiJG%2B92Y%2F4BqJ0PhRNq9bvET25GSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMyCCH9c9hbZodL9HrKtwDjZaEsseDs6g63X%2B5tQT28UjjthktoLCMq1vD1nKjoWfn%2FjPK7mchGh42FhzKujIkf7G2AOKgy8ZvmldCFFvJ6bmZhATd%2BKkNWmNVJJCBelYMsk4xaObOj8dllR%2Bb87j4AJfQQPmha%2Fy7Ovl%2FLZEicr3pnxdX7n4mpe1yP6oRBDKdgdb2HprsGJ6TU8omStAENxyGeHKUkdfVdTT6DlSF83VldBhtIm%2FPl6x%2F6WHwt4io3xYM7ZFzkCqYJvMX8lfK94Z8coRuwcwaCqvH6luPNlN0iYt%2F1LU3pUhiKaonNUOP9aLw2F2KoGfsLSA6c45iU2cjaRi65jxXhUfLCTBsTb6pP8Os09Cb1f1U5boznujFYQaiUD0kR3nKmutK8W4HPj6ykwo58Ez1fJi10pcv4QXXQH2k5jwqBtBp1PJ56e%2FBPoMic4iPEea0s2qsnjVLt3fgzP2GCqFP2WbxRfAyIM8W2ShOrHw7gH0pXnshn%2FrHt9q61b4zVZMA85%2B9Lto3tAx4%2BGd84d9zNw7YmMDCizolP%2F6keVfstPpOPrLRa%2BgYmwkvm9hPH4i75hFEMYe2w6bKx%2FhQcS3W6t%2FxM2I4CUnLyHmr9NSUWswyZdITgVlipQ6V%2FR5Me5Hv1k4wgqK3vQY6pgFkMnd2bYcdVEIFh1pYTXXNb5ZZ8p0ztUeX2ehf1%2FYYsifU%2BxOrAcHbgEAxS%2BZ8JLveSuC3o4ofiOEgA7ndGPI6IKBOASzOik2Lpvl%2BrjqhOA4EvKfZtKSa9Tn5K3wGGrQIVL0QU%2BMS0WwXSKlELdiWFWKGjUd36JqcXFuaJHNj%2FJSERKHngY0ig2IWN0WNHnd3JOUI35WUsGthqEvvO439fY5Tt5P9&X-Amz-Signature=43ce806c8fa91c67f52c40d85aef002edb61802b4aa2c5871fa8c5caecc86a00&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5PXZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZfVi0%2FNJbfolkhWaT1Ps7NIHYsr6d%2Bn65ljOydizn2AiA63Cm4osHF1uA5QoxiJG%2B92Y%2F4BqJ0PhRNq9bvET25GSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMyCCH9c9hbZodL9HrKtwDjZaEsseDs6g63X%2B5tQT28UjjthktoLCMq1vD1nKjoWfn%2FjPK7mchGh42FhzKujIkf7G2AOKgy8ZvmldCFFvJ6bmZhATd%2BKkNWmNVJJCBelYMsk4xaObOj8dllR%2Bb87j4AJfQQPmha%2Fy7Ovl%2FLZEicr3pnxdX7n4mpe1yP6oRBDKdgdb2HprsGJ6TU8omStAENxyGeHKUkdfVdTT6DlSF83VldBhtIm%2FPl6x%2F6WHwt4io3xYM7ZFzkCqYJvMX8lfK94Z8coRuwcwaCqvH6luPNlN0iYt%2F1LU3pUhiKaonNUOP9aLw2F2KoGfsLSA6c45iU2cjaRi65jxXhUfLCTBsTb6pP8Os09Cb1f1U5boznujFYQaiUD0kR3nKmutK8W4HPj6ykwo58Ez1fJi10pcv4QXXQH2k5jwqBtBp1PJ56e%2FBPoMic4iPEea0s2qsnjVLt3fgzP2GCqFP2WbxRfAyIM8W2ShOrHw7gH0pXnshn%2FrHt9q61b4zVZMA85%2B9Lto3tAx4%2BGd84d9zNw7YmMDCizolP%2F6keVfstPpOPrLRa%2BgYmwkvm9hPH4i75hFEMYe2w6bKx%2FhQcS3W6t%2FxM2I4CUnLyHmr9NSUWswyZdITgVlipQ6V%2FR5Me5Hv1k4wgqK3vQY6pgFkMnd2bYcdVEIFh1pYTXXNb5ZZ8p0ztUeX2ehf1%2FYYsifU%2BxOrAcHbgEAxS%2BZ8JLveSuC3o4ofiOEgA7ndGPI6IKBOASzOik2Lpvl%2BrjqhOA4EvKfZtKSa9Tn5K3wGGrQIVL0QU%2BMS0WwXSKlELdiWFWKGjUd36JqcXFuaJHNj%2FJSERKHngY0ig2IWN0WNHnd3JOUI35WUsGthqEvvO439fY5Tt5P9&X-Amz-Signature=48297348e317bd37565af10c8df8613509a5757bdc9964d1154e33ebdf897c49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5PXZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZfVi0%2FNJbfolkhWaT1Ps7NIHYsr6d%2Bn65ljOydizn2AiA63Cm4osHF1uA5QoxiJG%2B92Y%2F4BqJ0PhRNq9bvET25GSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMyCCH9c9hbZodL9HrKtwDjZaEsseDs6g63X%2B5tQT28UjjthktoLCMq1vD1nKjoWfn%2FjPK7mchGh42FhzKujIkf7G2AOKgy8ZvmldCFFvJ6bmZhATd%2BKkNWmNVJJCBelYMsk4xaObOj8dllR%2Bb87j4AJfQQPmha%2Fy7Ovl%2FLZEicr3pnxdX7n4mpe1yP6oRBDKdgdb2HprsGJ6TU8omStAENxyGeHKUkdfVdTT6DlSF83VldBhtIm%2FPl6x%2F6WHwt4io3xYM7ZFzkCqYJvMX8lfK94Z8coRuwcwaCqvH6luPNlN0iYt%2F1LU3pUhiKaonNUOP9aLw2F2KoGfsLSA6c45iU2cjaRi65jxXhUfLCTBsTb6pP8Os09Cb1f1U5boznujFYQaiUD0kR3nKmutK8W4HPj6ykwo58Ez1fJi10pcv4QXXQH2k5jwqBtBp1PJ56e%2FBPoMic4iPEea0s2qsnjVLt3fgzP2GCqFP2WbxRfAyIM8W2ShOrHw7gH0pXnshn%2FrHt9q61b4zVZMA85%2B9Lto3tAx4%2BGd84d9zNw7YmMDCizolP%2F6keVfstPpOPrLRa%2BgYmwkvm9hPH4i75hFEMYe2w6bKx%2FhQcS3W6t%2FxM2I4CUnLyHmr9NSUWswyZdITgVlipQ6V%2FR5Me5Hv1k4wgqK3vQY6pgFkMnd2bYcdVEIFh1pYTXXNb5ZZ8p0ztUeX2ehf1%2FYYsifU%2BxOrAcHbgEAxS%2BZ8JLveSuC3o4ofiOEgA7ndGPI6IKBOASzOik2Lpvl%2BrjqhOA4EvKfZtKSa9Tn5K3wGGrQIVL0QU%2BMS0WwXSKlELdiWFWKGjUd36JqcXFuaJHNj%2FJSERKHngY0ig2IWN0WNHnd3JOUI35WUsGthqEvvO439fY5Tt5P9&X-Amz-Signature=f563b1c300658eb01dc754be172404e5e666a8371ec90647d3c9e984ee7dc8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5PXZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZfVi0%2FNJbfolkhWaT1Ps7NIHYsr6d%2Bn65ljOydizn2AiA63Cm4osHF1uA5QoxiJG%2B92Y%2F4BqJ0PhRNq9bvET25GSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMyCCH9c9hbZodL9HrKtwDjZaEsseDs6g63X%2B5tQT28UjjthktoLCMq1vD1nKjoWfn%2FjPK7mchGh42FhzKujIkf7G2AOKgy8ZvmldCFFvJ6bmZhATd%2BKkNWmNVJJCBelYMsk4xaObOj8dllR%2Bb87j4AJfQQPmha%2Fy7Ovl%2FLZEicr3pnxdX7n4mpe1yP6oRBDKdgdb2HprsGJ6TU8omStAENxyGeHKUkdfVdTT6DlSF83VldBhtIm%2FPl6x%2F6WHwt4io3xYM7ZFzkCqYJvMX8lfK94Z8coRuwcwaCqvH6luPNlN0iYt%2F1LU3pUhiKaonNUOP9aLw2F2KoGfsLSA6c45iU2cjaRi65jxXhUfLCTBsTb6pP8Os09Cb1f1U5boznujFYQaiUD0kR3nKmutK8W4HPj6ykwo58Ez1fJi10pcv4QXXQH2k5jwqBtBp1PJ56e%2FBPoMic4iPEea0s2qsnjVLt3fgzP2GCqFP2WbxRfAyIM8W2ShOrHw7gH0pXnshn%2FrHt9q61b4zVZMA85%2B9Lto3tAx4%2BGd84d9zNw7YmMDCizolP%2F6keVfstPpOPrLRa%2BgYmwkvm9hPH4i75hFEMYe2w6bKx%2FhQcS3W6t%2FxM2I4CUnLyHmr9NSUWswyZdITgVlipQ6V%2FR5Me5Hv1k4wgqK3vQY6pgFkMnd2bYcdVEIFh1pYTXXNb5ZZ8p0ztUeX2ehf1%2FYYsifU%2BxOrAcHbgEAxS%2BZ8JLveSuC3o4ofiOEgA7ndGPI6IKBOASzOik2Lpvl%2BrjqhOA4EvKfZtKSa9Tn5K3wGGrQIVL0QU%2BMS0WwXSKlELdiWFWKGjUd36JqcXFuaJHNj%2FJSERKHngY0ig2IWN0WNHnd3JOUI35WUsGthqEvvO439fY5Tt5P9&X-Amz-Signature=34d85315b074f343654c3178bbc53984f0e95a67dfa40b0f65d9c4dc44e14473&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL5PXZX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZfVi0%2FNJbfolkhWaT1Ps7NIHYsr6d%2Bn65ljOydizn2AiA63Cm4osHF1uA5QoxiJG%2B92Y%2F4BqJ0PhRNq9bvET25GSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMyCCH9c9hbZodL9HrKtwDjZaEsseDs6g63X%2B5tQT28UjjthktoLCMq1vD1nKjoWfn%2FjPK7mchGh42FhzKujIkf7G2AOKgy8ZvmldCFFvJ6bmZhATd%2BKkNWmNVJJCBelYMsk4xaObOj8dllR%2Bb87j4AJfQQPmha%2Fy7Ovl%2FLZEicr3pnxdX7n4mpe1yP6oRBDKdgdb2HprsGJ6TU8omStAENxyGeHKUkdfVdTT6DlSF83VldBhtIm%2FPl6x%2F6WHwt4io3xYM7ZFzkCqYJvMX8lfK94Z8coRuwcwaCqvH6luPNlN0iYt%2F1LU3pUhiKaonNUOP9aLw2F2KoGfsLSA6c45iU2cjaRi65jxXhUfLCTBsTb6pP8Os09Cb1f1U5boznujFYQaiUD0kR3nKmutK8W4HPj6ykwo58Ez1fJi10pcv4QXXQH2k5jwqBtBp1PJ56e%2FBPoMic4iPEea0s2qsnjVLt3fgzP2GCqFP2WbxRfAyIM8W2ShOrHw7gH0pXnshn%2FrHt9q61b4zVZMA85%2B9Lto3tAx4%2BGd84d9zNw7YmMDCizolP%2F6keVfstPpOPrLRa%2BgYmwkvm9hPH4i75hFEMYe2w6bKx%2FhQcS3W6t%2FxM2I4CUnLyHmr9NSUWswyZdITgVlipQ6V%2FR5Me5Hv1k4wgqK3vQY6pgFkMnd2bYcdVEIFh1pYTXXNb5ZZ8p0ztUeX2ehf1%2FYYsifU%2BxOrAcHbgEAxS%2BZ8JLveSuC3o4ofiOEgA7ndGPI6IKBOASzOik2Lpvl%2BrjqhOA4EvKfZtKSa9Tn5K3wGGrQIVL0QU%2BMS0WwXSKlELdiWFWKGjUd36JqcXFuaJHNj%2FJSERKHngY0ig2IWN0WNHnd3JOUI35WUsGthqEvvO439fY5Tt5P9&X-Amz-Signature=4cd040f8a21e782de204fc46bad3cc00969f18c5201b7aabbfe60d1fbab4b77f&X-Amz-SignedHeaders=host&x-id=GetObject)
