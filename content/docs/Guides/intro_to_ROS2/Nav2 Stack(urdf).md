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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6SIJOG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPlA03eY6ganBVfSRdhYi1wfldKSc1YeovYJntwYuN4AiEAquB76%2Bvt79xGcPSRN47hszY7ZqKq2gjVaj4ZXF%2FivcUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGYGDi2c%2F6%2F4XFXoCrcA3LYNe3nPvAzAH%2BnGbyjedywGQzGaaiD4Yy4EhBeVlzdI5YQJAERPH4iGrGvZT%2FIXqdXdubqqgapQ5HHQC05q0OZWnwuMZV7ojrdXcjTXs8Bhoh9z11Wfztpji4CYmBBscRCGJ55V%2F8eP5aX6%2FPc03%2BiaurDjmTi0N6oEQoC62o94cBbGt%2FwWn4Zvs3b7fdNgS24J0ca43sQnX5rEoUbTEYshCqsvJ2sSr%2FmTKQq%2FVIBvhS1XS4XzkRThCQhhCXDjw%2BKkXzzNgupH3pvhXnz8mekTD%2B6Icn56qkb%2FUl1CrSZQJsSjW4RJfCo%2B53ExlW7aeE1ncr%2BVtgUw%2BFylacl96UiSl227hsFL34%2BAFXCN%2F5RbY%2BMMvBDsZdSbisvNlNBZih74B3SsK7pnt85kALJ7Q3RF5WRqVQT4OWzo9Fg7mGK81UkngqfGlkowcTHkapuW3n83q3N4q0eWUxsnQ%2FK3IOimRfqk02UuryPDCrSkDhtk1MI1V1jHMXn3bgdJ%2BGIVhWM30Vcds9FHJm58LFNyCik2d73jAwmjgGD41%2BaoxAxTvJ2R5U2e3MUnNdKL1loaujC%2BQR8afVOFiXy4bw%2Bp7vbJvmUFNfbgeZ0xF%2Ff12vx0KPWjliCvRmSk%2Fs7MJuEtsMGOqUBGSvVGj8qGldIq3EJ2V91OW9tSfWdWaTOBcaawQbuKokH1rG%2Bh4cXzXBSpR25VrnMOFTC7zuUlk2rExx3x9Hkh9SJH2qKrs3nuA7QrzOLMqMVg%2BrWjEex1JYV6Rrhc5F4MPm1tRiRDymtkEAMvUNrWL8bppmBkG46u%2FQfnHpuN17KHZm1uFWdCF1u%2FXohj8080Jzm4CBCyCEhE3USSMhoCH422SRu&X-Amz-Signature=5119ad4d82580436c195cd2713f323dbe7634c125c616def1dafc80c5b223717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6SIJOG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPlA03eY6ganBVfSRdhYi1wfldKSc1YeovYJntwYuN4AiEAquB76%2Bvt79xGcPSRN47hszY7ZqKq2gjVaj4ZXF%2FivcUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGYGDi2c%2F6%2F4XFXoCrcA3LYNe3nPvAzAH%2BnGbyjedywGQzGaaiD4Yy4EhBeVlzdI5YQJAERPH4iGrGvZT%2FIXqdXdubqqgapQ5HHQC05q0OZWnwuMZV7ojrdXcjTXs8Bhoh9z11Wfztpji4CYmBBscRCGJ55V%2F8eP5aX6%2FPc03%2BiaurDjmTi0N6oEQoC62o94cBbGt%2FwWn4Zvs3b7fdNgS24J0ca43sQnX5rEoUbTEYshCqsvJ2sSr%2FmTKQq%2FVIBvhS1XS4XzkRThCQhhCXDjw%2BKkXzzNgupH3pvhXnz8mekTD%2B6Icn56qkb%2FUl1CrSZQJsSjW4RJfCo%2B53ExlW7aeE1ncr%2BVtgUw%2BFylacl96UiSl227hsFL34%2BAFXCN%2F5RbY%2BMMvBDsZdSbisvNlNBZih74B3SsK7pnt85kALJ7Q3RF5WRqVQT4OWzo9Fg7mGK81UkngqfGlkowcTHkapuW3n83q3N4q0eWUxsnQ%2FK3IOimRfqk02UuryPDCrSkDhtk1MI1V1jHMXn3bgdJ%2BGIVhWM30Vcds9FHJm58LFNyCik2d73jAwmjgGD41%2BaoxAxTvJ2R5U2e3MUnNdKL1loaujC%2BQR8afVOFiXy4bw%2Bp7vbJvmUFNfbgeZ0xF%2Ff12vx0KPWjliCvRmSk%2Fs7MJuEtsMGOqUBGSvVGj8qGldIq3EJ2V91OW9tSfWdWaTOBcaawQbuKokH1rG%2Bh4cXzXBSpR25VrnMOFTC7zuUlk2rExx3x9Hkh9SJH2qKrs3nuA7QrzOLMqMVg%2BrWjEex1JYV6Rrhc5F4MPm1tRiRDymtkEAMvUNrWL8bppmBkG46u%2FQfnHpuN17KHZm1uFWdCF1u%2FXohj8080Jzm4CBCyCEhE3USSMhoCH422SRu&X-Amz-Signature=f5f0ee00184791707ab689678307619715fe2410f53e8cf34ebb85e2c27345b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6SIJOG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPlA03eY6ganBVfSRdhYi1wfldKSc1YeovYJntwYuN4AiEAquB76%2Bvt79xGcPSRN47hszY7ZqKq2gjVaj4ZXF%2FivcUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGYGDi2c%2F6%2F4XFXoCrcA3LYNe3nPvAzAH%2BnGbyjedywGQzGaaiD4Yy4EhBeVlzdI5YQJAERPH4iGrGvZT%2FIXqdXdubqqgapQ5HHQC05q0OZWnwuMZV7ojrdXcjTXs8Bhoh9z11Wfztpji4CYmBBscRCGJ55V%2F8eP5aX6%2FPc03%2BiaurDjmTi0N6oEQoC62o94cBbGt%2FwWn4Zvs3b7fdNgS24J0ca43sQnX5rEoUbTEYshCqsvJ2sSr%2FmTKQq%2FVIBvhS1XS4XzkRThCQhhCXDjw%2BKkXzzNgupH3pvhXnz8mekTD%2B6Icn56qkb%2FUl1CrSZQJsSjW4RJfCo%2B53ExlW7aeE1ncr%2BVtgUw%2BFylacl96UiSl227hsFL34%2BAFXCN%2F5RbY%2BMMvBDsZdSbisvNlNBZih74B3SsK7pnt85kALJ7Q3RF5WRqVQT4OWzo9Fg7mGK81UkngqfGlkowcTHkapuW3n83q3N4q0eWUxsnQ%2FK3IOimRfqk02UuryPDCrSkDhtk1MI1V1jHMXn3bgdJ%2BGIVhWM30Vcds9FHJm58LFNyCik2d73jAwmjgGD41%2BaoxAxTvJ2R5U2e3MUnNdKL1loaujC%2BQR8afVOFiXy4bw%2Bp7vbJvmUFNfbgeZ0xF%2Ff12vx0KPWjliCvRmSk%2Fs7MJuEtsMGOqUBGSvVGj8qGldIq3EJ2V91OW9tSfWdWaTOBcaawQbuKokH1rG%2Bh4cXzXBSpR25VrnMOFTC7zuUlk2rExx3x9Hkh9SJH2qKrs3nuA7QrzOLMqMVg%2BrWjEex1JYV6Rrhc5F4MPm1tRiRDymtkEAMvUNrWL8bppmBkG46u%2FQfnHpuN17KHZm1uFWdCF1u%2FXohj8080Jzm4CBCyCEhE3USSMhoCH422SRu&X-Amz-Signature=0452fca65c53123927477e51374d53074a62fb57afaba2ac3faa279c86cc52e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6SIJOG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPlA03eY6ganBVfSRdhYi1wfldKSc1YeovYJntwYuN4AiEAquB76%2Bvt79xGcPSRN47hszY7ZqKq2gjVaj4ZXF%2FivcUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGYGDi2c%2F6%2F4XFXoCrcA3LYNe3nPvAzAH%2BnGbyjedywGQzGaaiD4Yy4EhBeVlzdI5YQJAERPH4iGrGvZT%2FIXqdXdubqqgapQ5HHQC05q0OZWnwuMZV7ojrdXcjTXs8Bhoh9z11Wfztpji4CYmBBscRCGJ55V%2F8eP5aX6%2FPc03%2BiaurDjmTi0N6oEQoC62o94cBbGt%2FwWn4Zvs3b7fdNgS24J0ca43sQnX5rEoUbTEYshCqsvJ2sSr%2FmTKQq%2FVIBvhS1XS4XzkRThCQhhCXDjw%2BKkXzzNgupH3pvhXnz8mekTD%2B6Icn56qkb%2FUl1CrSZQJsSjW4RJfCo%2B53ExlW7aeE1ncr%2BVtgUw%2BFylacl96UiSl227hsFL34%2BAFXCN%2F5RbY%2BMMvBDsZdSbisvNlNBZih74B3SsK7pnt85kALJ7Q3RF5WRqVQT4OWzo9Fg7mGK81UkngqfGlkowcTHkapuW3n83q3N4q0eWUxsnQ%2FK3IOimRfqk02UuryPDCrSkDhtk1MI1V1jHMXn3bgdJ%2BGIVhWM30Vcds9FHJm58LFNyCik2d73jAwmjgGD41%2BaoxAxTvJ2R5U2e3MUnNdKL1loaujC%2BQR8afVOFiXy4bw%2Bp7vbJvmUFNfbgeZ0xF%2Ff12vx0KPWjliCvRmSk%2Fs7MJuEtsMGOqUBGSvVGj8qGldIq3EJ2V91OW9tSfWdWaTOBcaawQbuKokH1rG%2Bh4cXzXBSpR25VrnMOFTC7zuUlk2rExx3x9Hkh9SJH2qKrs3nuA7QrzOLMqMVg%2BrWjEex1JYV6Rrhc5F4MPm1tRiRDymtkEAMvUNrWL8bppmBkG46u%2FQfnHpuN17KHZm1uFWdCF1u%2FXohj8080Jzm4CBCyCEhE3USSMhoCH422SRu&X-Amz-Signature=fc8d1947f234e2485547e7de3253f6a2eb12b5cd0756dcbcd7ad5576d04dbce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6SIJOG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPlA03eY6ganBVfSRdhYi1wfldKSc1YeovYJntwYuN4AiEAquB76%2Bvt79xGcPSRN47hszY7ZqKq2gjVaj4ZXF%2FivcUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGYGDi2c%2F6%2F4XFXoCrcA3LYNe3nPvAzAH%2BnGbyjedywGQzGaaiD4Yy4EhBeVlzdI5YQJAERPH4iGrGvZT%2FIXqdXdubqqgapQ5HHQC05q0OZWnwuMZV7ojrdXcjTXs8Bhoh9z11Wfztpji4CYmBBscRCGJ55V%2F8eP5aX6%2FPc03%2BiaurDjmTi0N6oEQoC62o94cBbGt%2FwWn4Zvs3b7fdNgS24J0ca43sQnX5rEoUbTEYshCqsvJ2sSr%2FmTKQq%2FVIBvhS1XS4XzkRThCQhhCXDjw%2BKkXzzNgupH3pvhXnz8mekTD%2B6Icn56qkb%2FUl1CrSZQJsSjW4RJfCo%2B53ExlW7aeE1ncr%2BVtgUw%2BFylacl96UiSl227hsFL34%2BAFXCN%2F5RbY%2BMMvBDsZdSbisvNlNBZih74B3SsK7pnt85kALJ7Q3RF5WRqVQT4OWzo9Fg7mGK81UkngqfGlkowcTHkapuW3n83q3N4q0eWUxsnQ%2FK3IOimRfqk02UuryPDCrSkDhtk1MI1V1jHMXn3bgdJ%2BGIVhWM30Vcds9FHJm58LFNyCik2d73jAwmjgGD41%2BaoxAxTvJ2R5U2e3MUnNdKL1loaujC%2BQR8afVOFiXy4bw%2Bp7vbJvmUFNfbgeZ0xF%2Ff12vx0KPWjliCvRmSk%2Fs7MJuEtsMGOqUBGSvVGj8qGldIq3EJ2V91OW9tSfWdWaTOBcaawQbuKokH1rG%2Bh4cXzXBSpR25VrnMOFTC7zuUlk2rExx3x9Hkh9SJH2qKrs3nuA7QrzOLMqMVg%2BrWjEex1JYV6Rrhc5F4MPm1tRiRDymtkEAMvUNrWL8bppmBkG46u%2FQfnHpuN17KHZm1uFWdCF1u%2FXohj8080Jzm4CBCyCEhE3USSMhoCH422SRu&X-Amz-Signature=06c11eb355b612dac88c39affff13fbcc6705ff21b01c0b0862a7b188b745ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6SIJOG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPlA03eY6ganBVfSRdhYi1wfldKSc1YeovYJntwYuN4AiEAquB76%2Bvt79xGcPSRN47hszY7ZqKq2gjVaj4ZXF%2FivcUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGYGDi2c%2F6%2F4XFXoCrcA3LYNe3nPvAzAH%2BnGbyjedywGQzGaaiD4Yy4EhBeVlzdI5YQJAERPH4iGrGvZT%2FIXqdXdubqqgapQ5HHQC05q0OZWnwuMZV7ojrdXcjTXs8Bhoh9z11Wfztpji4CYmBBscRCGJ55V%2F8eP5aX6%2FPc03%2BiaurDjmTi0N6oEQoC62o94cBbGt%2FwWn4Zvs3b7fdNgS24J0ca43sQnX5rEoUbTEYshCqsvJ2sSr%2FmTKQq%2FVIBvhS1XS4XzkRThCQhhCXDjw%2BKkXzzNgupH3pvhXnz8mekTD%2B6Icn56qkb%2FUl1CrSZQJsSjW4RJfCo%2B53ExlW7aeE1ncr%2BVtgUw%2BFylacl96UiSl227hsFL34%2BAFXCN%2F5RbY%2BMMvBDsZdSbisvNlNBZih74B3SsK7pnt85kALJ7Q3RF5WRqVQT4OWzo9Fg7mGK81UkngqfGlkowcTHkapuW3n83q3N4q0eWUxsnQ%2FK3IOimRfqk02UuryPDCrSkDhtk1MI1V1jHMXn3bgdJ%2BGIVhWM30Vcds9FHJm58LFNyCik2d73jAwmjgGD41%2BaoxAxTvJ2R5U2e3MUnNdKL1loaujC%2BQR8afVOFiXy4bw%2Bp7vbJvmUFNfbgeZ0xF%2Ff12vx0KPWjliCvRmSk%2Fs7MJuEtsMGOqUBGSvVGj8qGldIq3EJ2V91OW9tSfWdWaTOBcaawQbuKokH1rG%2Bh4cXzXBSpR25VrnMOFTC7zuUlk2rExx3x9Hkh9SJH2qKrs3nuA7QrzOLMqMVg%2BrWjEex1JYV6Rrhc5F4MPm1tRiRDymtkEAMvUNrWL8bppmBkG46u%2FQfnHpuN17KHZm1uFWdCF1u%2FXohj8080Jzm4CBCyCEhE3USSMhoCH422SRu&X-Amz-Signature=ec3f74aee7b64ec2d3aa20c5d69ddcb39b84c9874f9d1e634551e45ecb462a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
