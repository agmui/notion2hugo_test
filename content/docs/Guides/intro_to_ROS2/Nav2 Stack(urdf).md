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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIL7TQDH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHrbIoEcESoApBemPEOA3AEwGWuB%2BMchRJJCcGok8KPEAiBckduW6ndnqtARMoUSrH1KaETlRKlguTsXOkfflRassCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5gUiFxRJPx9cPtyIKtwD00j9Il0gVsp%2FYwNNuDFjeI7XIyt2fEhLo4emOSFYxB2vJt%2FOx%2F6u4rH2t5meq%2FJgQPoRrqvmYmzZ090TwRnO601qZIdVmEIuYHa8HXh0gorDr3whaxf2bh7597JTgnrY%2FClBpVQpFSHPdRhoELj2owh88hIlF5ohDe2x%2Fks93TP6uWQ8Rhg3GIFeN%2Bi5IWs5rk83LkGkA7035t91ieCwba%2FONH5b5dePoKt0KxHwZMubx7kF8TLokPEbZydZOwhHwKu9AG3zlaG6I1p8%2FWMAd%2F6Rw2Qz1cVKbqoEhpw3rrbalqTK5yQCLMYyoVgD4wk7XxmA2%2FKNox18Q8DXT39iuVJpqkxnevCYnew7OhmBvaRDdj0CS0qzgnZjj7supk94Ypi3Uj%2FQbLZpgQlWvXAFdVOyo%2B7enc1aqVll8QwoFlYWhkIZPEpwFx2tDtGou%2FmWNLnLO%2B%2BxQIHZivF4LVpPHeDGYy36hXZFRjO2xKCJrQpxcRtvpp2qlKBkfHU4a%2FTdxHiofJpH5oRSxRhj8ohGXy7od59kOcSe9xQkwVwIXsk5lbh6UtwUbydrXSFB%2F%2FVyd4C23oct5IpOlarP5LJgyVGopE%2BD2SRFGniTht6WfNStj5UTBOBKtF42CLswqIX9wQY6pgHDtTnaRChvRRpFOjr34sT3BpzKRx7mi2uoKPFS8kT7Ib6qaC2bNvyxWMOepoVIAbiCwgVcxzhwLyFWPxgIKWkBbPUYSRWzx0i5eeau2Mhm%2BLeP0%2B5WU32xK4KHHC7M4hNrK9tD9sWkzNFvMwrNGxp29pYdm%2FzjwVCuxsvaJy8SgoOIXZBhsv9eDvINBQaijD2WRG9MGc8lGOI%2BPz0lPfzIxrxZbO9q&X-Amz-Signature=e4fb323a061b1e8ca4bcdd52f7bc302aaa4278944608e6b36e78ad73e801aee1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIL7TQDH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHrbIoEcESoApBemPEOA3AEwGWuB%2BMchRJJCcGok8KPEAiBckduW6ndnqtARMoUSrH1KaETlRKlguTsXOkfflRassCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5gUiFxRJPx9cPtyIKtwD00j9Il0gVsp%2FYwNNuDFjeI7XIyt2fEhLo4emOSFYxB2vJt%2FOx%2F6u4rH2t5meq%2FJgQPoRrqvmYmzZ090TwRnO601qZIdVmEIuYHa8HXh0gorDr3whaxf2bh7597JTgnrY%2FClBpVQpFSHPdRhoELj2owh88hIlF5ohDe2x%2Fks93TP6uWQ8Rhg3GIFeN%2Bi5IWs5rk83LkGkA7035t91ieCwba%2FONH5b5dePoKt0KxHwZMubx7kF8TLokPEbZydZOwhHwKu9AG3zlaG6I1p8%2FWMAd%2F6Rw2Qz1cVKbqoEhpw3rrbalqTK5yQCLMYyoVgD4wk7XxmA2%2FKNox18Q8DXT39iuVJpqkxnevCYnew7OhmBvaRDdj0CS0qzgnZjj7supk94Ypi3Uj%2FQbLZpgQlWvXAFdVOyo%2B7enc1aqVll8QwoFlYWhkIZPEpwFx2tDtGou%2FmWNLnLO%2B%2BxQIHZivF4LVpPHeDGYy36hXZFRjO2xKCJrQpxcRtvpp2qlKBkfHU4a%2FTdxHiofJpH5oRSxRhj8ohGXy7od59kOcSe9xQkwVwIXsk5lbh6UtwUbydrXSFB%2F%2FVyd4C23oct5IpOlarP5LJgyVGopE%2BD2SRFGniTht6WfNStj5UTBOBKtF42CLswqIX9wQY6pgHDtTnaRChvRRpFOjr34sT3BpzKRx7mi2uoKPFS8kT7Ib6qaC2bNvyxWMOepoVIAbiCwgVcxzhwLyFWPxgIKWkBbPUYSRWzx0i5eeau2Mhm%2BLeP0%2B5WU32xK4KHHC7M4hNrK9tD9sWkzNFvMwrNGxp29pYdm%2FzjwVCuxsvaJy8SgoOIXZBhsv9eDvINBQaijD2WRG9MGc8lGOI%2BPz0lPfzIxrxZbO9q&X-Amz-Signature=f546fd180ac158a2b64b4aac1c6355981039f2fac8cb84c14caf66bda109564b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIL7TQDH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHrbIoEcESoApBemPEOA3AEwGWuB%2BMchRJJCcGok8KPEAiBckduW6ndnqtARMoUSrH1KaETlRKlguTsXOkfflRassCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5gUiFxRJPx9cPtyIKtwD00j9Il0gVsp%2FYwNNuDFjeI7XIyt2fEhLo4emOSFYxB2vJt%2FOx%2F6u4rH2t5meq%2FJgQPoRrqvmYmzZ090TwRnO601qZIdVmEIuYHa8HXh0gorDr3whaxf2bh7597JTgnrY%2FClBpVQpFSHPdRhoELj2owh88hIlF5ohDe2x%2Fks93TP6uWQ8Rhg3GIFeN%2Bi5IWs5rk83LkGkA7035t91ieCwba%2FONH5b5dePoKt0KxHwZMubx7kF8TLokPEbZydZOwhHwKu9AG3zlaG6I1p8%2FWMAd%2F6Rw2Qz1cVKbqoEhpw3rrbalqTK5yQCLMYyoVgD4wk7XxmA2%2FKNox18Q8DXT39iuVJpqkxnevCYnew7OhmBvaRDdj0CS0qzgnZjj7supk94Ypi3Uj%2FQbLZpgQlWvXAFdVOyo%2B7enc1aqVll8QwoFlYWhkIZPEpwFx2tDtGou%2FmWNLnLO%2B%2BxQIHZivF4LVpPHeDGYy36hXZFRjO2xKCJrQpxcRtvpp2qlKBkfHU4a%2FTdxHiofJpH5oRSxRhj8ohGXy7od59kOcSe9xQkwVwIXsk5lbh6UtwUbydrXSFB%2F%2FVyd4C23oct5IpOlarP5LJgyVGopE%2BD2SRFGniTht6WfNStj5UTBOBKtF42CLswqIX9wQY6pgHDtTnaRChvRRpFOjr34sT3BpzKRx7mi2uoKPFS8kT7Ib6qaC2bNvyxWMOepoVIAbiCwgVcxzhwLyFWPxgIKWkBbPUYSRWzx0i5eeau2Mhm%2BLeP0%2B5WU32xK4KHHC7M4hNrK9tD9sWkzNFvMwrNGxp29pYdm%2FzjwVCuxsvaJy8SgoOIXZBhsv9eDvINBQaijD2WRG9MGc8lGOI%2BPz0lPfzIxrxZbO9q&X-Amz-Signature=8069d5551f5f49871cd434e8b8ed4d4834b81a703f56290ab13af69f7b9d04db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIL7TQDH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHrbIoEcESoApBemPEOA3AEwGWuB%2BMchRJJCcGok8KPEAiBckduW6ndnqtARMoUSrH1KaETlRKlguTsXOkfflRassCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5gUiFxRJPx9cPtyIKtwD00j9Il0gVsp%2FYwNNuDFjeI7XIyt2fEhLo4emOSFYxB2vJt%2FOx%2F6u4rH2t5meq%2FJgQPoRrqvmYmzZ090TwRnO601qZIdVmEIuYHa8HXh0gorDr3whaxf2bh7597JTgnrY%2FClBpVQpFSHPdRhoELj2owh88hIlF5ohDe2x%2Fks93TP6uWQ8Rhg3GIFeN%2Bi5IWs5rk83LkGkA7035t91ieCwba%2FONH5b5dePoKt0KxHwZMubx7kF8TLokPEbZydZOwhHwKu9AG3zlaG6I1p8%2FWMAd%2F6Rw2Qz1cVKbqoEhpw3rrbalqTK5yQCLMYyoVgD4wk7XxmA2%2FKNox18Q8DXT39iuVJpqkxnevCYnew7OhmBvaRDdj0CS0qzgnZjj7supk94Ypi3Uj%2FQbLZpgQlWvXAFdVOyo%2B7enc1aqVll8QwoFlYWhkIZPEpwFx2tDtGou%2FmWNLnLO%2B%2BxQIHZivF4LVpPHeDGYy36hXZFRjO2xKCJrQpxcRtvpp2qlKBkfHU4a%2FTdxHiofJpH5oRSxRhj8ohGXy7od59kOcSe9xQkwVwIXsk5lbh6UtwUbydrXSFB%2F%2FVyd4C23oct5IpOlarP5LJgyVGopE%2BD2SRFGniTht6WfNStj5UTBOBKtF42CLswqIX9wQY6pgHDtTnaRChvRRpFOjr34sT3BpzKRx7mi2uoKPFS8kT7Ib6qaC2bNvyxWMOepoVIAbiCwgVcxzhwLyFWPxgIKWkBbPUYSRWzx0i5eeau2Mhm%2BLeP0%2B5WU32xK4KHHC7M4hNrK9tD9sWkzNFvMwrNGxp29pYdm%2FzjwVCuxsvaJy8SgoOIXZBhsv9eDvINBQaijD2WRG9MGc8lGOI%2BPz0lPfzIxrxZbO9q&X-Amz-Signature=a60c1d0999c16daec9f85c9d786f6c55a4e066e4387b0937056684442401bdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIL7TQDH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHrbIoEcESoApBemPEOA3AEwGWuB%2BMchRJJCcGok8KPEAiBckduW6ndnqtARMoUSrH1KaETlRKlguTsXOkfflRassCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5gUiFxRJPx9cPtyIKtwD00j9Il0gVsp%2FYwNNuDFjeI7XIyt2fEhLo4emOSFYxB2vJt%2FOx%2F6u4rH2t5meq%2FJgQPoRrqvmYmzZ090TwRnO601qZIdVmEIuYHa8HXh0gorDr3whaxf2bh7597JTgnrY%2FClBpVQpFSHPdRhoELj2owh88hIlF5ohDe2x%2Fks93TP6uWQ8Rhg3GIFeN%2Bi5IWs5rk83LkGkA7035t91ieCwba%2FONH5b5dePoKt0KxHwZMubx7kF8TLokPEbZydZOwhHwKu9AG3zlaG6I1p8%2FWMAd%2F6Rw2Qz1cVKbqoEhpw3rrbalqTK5yQCLMYyoVgD4wk7XxmA2%2FKNox18Q8DXT39iuVJpqkxnevCYnew7OhmBvaRDdj0CS0qzgnZjj7supk94Ypi3Uj%2FQbLZpgQlWvXAFdVOyo%2B7enc1aqVll8QwoFlYWhkIZPEpwFx2tDtGou%2FmWNLnLO%2B%2BxQIHZivF4LVpPHeDGYy36hXZFRjO2xKCJrQpxcRtvpp2qlKBkfHU4a%2FTdxHiofJpH5oRSxRhj8ohGXy7od59kOcSe9xQkwVwIXsk5lbh6UtwUbydrXSFB%2F%2FVyd4C23oct5IpOlarP5LJgyVGopE%2BD2SRFGniTht6WfNStj5UTBOBKtF42CLswqIX9wQY6pgHDtTnaRChvRRpFOjr34sT3BpzKRx7mi2uoKPFS8kT7Ib6qaC2bNvyxWMOepoVIAbiCwgVcxzhwLyFWPxgIKWkBbPUYSRWzx0i5eeau2Mhm%2BLeP0%2B5WU32xK4KHHC7M4hNrK9tD9sWkzNFvMwrNGxp29pYdm%2FzjwVCuxsvaJy8SgoOIXZBhsv9eDvINBQaijD2WRG9MGc8lGOI%2BPz0lPfzIxrxZbO9q&X-Amz-Signature=4738f52ee16e793ea68e10386eb61c821e958d4f557c32cae27323e6e04f2874&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIL7TQDH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHrbIoEcESoApBemPEOA3AEwGWuB%2BMchRJJCcGok8KPEAiBckduW6ndnqtARMoUSrH1KaETlRKlguTsXOkfflRassCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5gUiFxRJPx9cPtyIKtwD00j9Il0gVsp%2FYwNNuDFjeI7XIyt2fEhLo4emOSFYxB2vJt%2FOx%2F6u4rH2t5meq%2FJgQPoRrqvmYmzZ090TwRnO601qZIdVmEIuYHa8HXh0gorDr3whaxf2bh7597JTgnrY%2FClBpVQpFSHPdRhoELj2owh88hIlF5ohDe2x%2Fks93TP6uWQ8Rhg3GIFeN%2Bi5IWs5rk83LkGkA7035t91ieCwba%2FONH5b5dePoKt0KxHwZMubx7kF8TLokPEbZydZOwhHwKu9AG3zlaG6I1p8%2FWMAd%2F6Rw2Qz1cVKbqoEhpw3rrbalqTK5yQCLMYyoVgD4wk7XxmA2%2FKNox18Q8DXT39iuVJpqkxnevCYnew7OhmBvaRDdj0CS0qzgnZjj7supk94Ypi3Uj%2FQbLZpgQlWvXAFdVOyo%2B7enc1aqVll8QwoFlYWhkIZPEpwFx2tDtGou%2FmWNLnLO%2B%2BxQIHZivF4LVpPHeDGYy36hXZFRjO2xKCJrQpxcRtvpp2qlKBkfHU4a%2FTdxHiofJpH5oRSxRhj8ohGXy7od59kOcSe9xQkwVwIXsk5lbh6UtwUbydrXSFB%2F%2FVyd4C23oct5IpOlarP5LJgyVGopE%2BD2SRFGniTht6WfNStj5UTBOBKtF42CLswqIX9wQY6pgHDtTnaRChvRRpFOjr34sT3BpzKRx7mi2uoKPFS8kT7Ib6qaC2bNvyxWMOepoVIAbiCwgVcxzhwLyFWPxgIKWkBbPUYSRWzx0i5eeau2Mhm%2BLeP0%2B5WU32xK4KHHC7M4hNrK9tD9sWkzNFvMwrNGxp29pYdm%2FzjwVCuxsvaJy8SgoOIXZBhsv9eDvINBQaijD2WRG9MGc8lGOI%2BPz0lPfzIxrxZbO9q&X-Amz-Signature=7dff58e73704c0243b555af14479328031de2fafa16fd8e63699ac4d5fd983ef&X-Amz-SignedHeaders=host&x-id=GetObject)
