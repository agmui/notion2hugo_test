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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTF7OXG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDdYQBz%2BV%2B8ufu%2B9xTkrzOC018leY9inr%2BjegcIcVbspwIhAK4KVTZ1nXKWcWiNeOR1j8sIjpQO9z4FE1IxgUoq%2BGigKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaPgzCRppT%2BYxkAYAq3ANbGk5kvlI859sXOvvEu3M16AgUSmFxHctHOz51QfHxd7oV5fEz7BXCe8W6jlc5yXYKAZhoswzbPGHCQ06w%2B0zP89b45OvaI5qwES1%2BfqyX%2BrR12kPbChOEzDWC2ENYOjrF7o26H%2FxI2L6r%2FoXdU2GcGVHPrDVQ8bOB4H0c6O3WnQ50CngVX5uvCJJdBoIc%2BCQYL1slN9%2BvBiouXlNo0TIIX8A3qwb0bOj6%2BBUQUkfOJUORqTbbmiXe9xHcGrx16mUIskF%2BbXc%2FgVX0o%2BZGQCvLzfMKs%2FWdCq3hAr5QuolkBW0Z1yYOLyhOLtdUx%2BKKPyKZ44LcEEPcPu7Wth0eARkzhizpTgWxHWyaiWzeK%2F6lkkW6IkX0FRjHyO4xiJXCRemme8knwHS43Qe3SuiwTIVcXhESM%2FuKNALEjrxFAHbDBEGzm0H7kexLuQV9lWOAQS5j%2BApgPpNYC29nwFnpfv%2FF6e4yEgHSyuASwQIF2NfySu5o4b1mzHgOFLAmt5xXraimH0Y3QPkHoVGNIfW%2BGYmWzfzwOyWNRRt2V50sA3zyA6zukScJG8gKevdMAv%2BuretUEP0GOyMiVcFwWyXgRqFn4A0wySgSdATkN2QlUfb1r5eSaEP6WxLrA6ycMDCN%2B%2FS%2BBjqkAQ6WXSpfikoMKg%2BNjypQ646uli7%2BmZRSX2Ofv4oBLEuQ6bxvnX1TpDmVa7dp%2FjyFdb0LGr9gsK36wWh1w%2B%2FlokUUfwRswU1IJHpRYCd%2BYxjCP7YsnYW1Lwz%2FpxvmXU5c2HDM1GGoEVI0Ng07FUdzbLgS49yba6ZcrNfD67xbnKFCi3ijk9DYW%2Fv3IscJTgzzRg7SoOOydoBWuV3XDdg3R8qdCtjF&X-Amz-Signature=2c98883496fc2c71b6080b8a258941910821050d14185293eb9e4a6f37741cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTF7OXG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDdYQBz%2BV%2B8ufu%2B9xTkrzOC018leY9inr%2BjegcIcVbspwIhAK4KVTZ1nXKWcWiNeOR1j8sIjpQO9z4FE1IxgUoq%2BGigKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaPgzCRppT%2BYxkAYAq3ANbGk5kvlI859sXOvvEu3M16AgUSmFxHctHOz51QfHxd7oV5fEz7BXCe8W6jlc5yXYKAZhoswzbPGHCQ06w%2B0zP89b45OvaI5qwES1%2BfqyX%2BrR12kPbChOEzDWC2ENYOjrF7o26H%2FxI2L6r%2FoXdU2GcGVHPrDVQ8bOB4H0c6O3WnQ50CngVX5uvCJJdBoIc%2BCQYL1slN9%2BvBiouXlNo0TIIX8A3qwb0bOj6%2BBUQUkfOJUORqTbbmiXe9xHcGrx16mUIskF%2BbXc%2FgVX0o%2BZGQCvLzfMKs%2FWdCq3hAr5QuolkBW0Z1yYOLyhOLtdUx%2BKKPyKZ44LcEEPcPu7Wth0eARkzhizpTgWxHWyaiWzeK%2F6lkkW6IkX0FRjHyO4xiJXCRemme8knwHS43Qe3SuiwTIVcXhESM%2FuKNALEjrxFAHbDBEGzm0H7kexLuQV9lWOAQS5j%2BApgPpNYC29nwFnpfv%2FF6e4yEgHSyuASwQIF2NfySu5o4b1mzHgOFLAmt5xXraimH0Y3QPkHoVGNIfW%2BGYmWzfzwOyWNRRt2V50sA3zyA6zukScJG8gKevdMAv%2BuretUEP0GOyMiVcFwWyXgRqFn4A0wySgSdATkN2QlUfb1r5eSaEP6WxLrA6ycMDCN%2B%2FS%2BBjqkAQ6WXSpfikoMKg%2BNjypQ646uli7%2BmZRSX2Ofv4oBLEuQ6bxvnX1TpDmVa7dp%2FjyFdb0LGr9gsK36wWh1w%2B%2FlokUUfwRswU1IJHpRYCd%2BYxjCP7YsnYW1Lwz%2FpxvmXU5c2HDM1GGoEVI0Ng07FUdzbLgS49yba6ZcrNfD67xbnKFCi3ijk9DYW%2Fv3IscJTgzzRg7SoOOydoBWuV3XDdg3R8qdCtjF&X-Amz-Signature=06f3e2888d1e1a4e511ae29a50cba3b57e544e114ed9f7aba2cf05a7250fb8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTF7OXG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDdYQBz%2BV%2B8ufu%2B9xTkrzOC018leY9inr%2BjegcIcVbspwIhAK4KVTZ1nXKWcWiNeOR1j8sIjpQO9z4FE1IxgUoq%2BGigKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaPgzCRppT%2BYxkAYAq3ANbGk5kvlI859sXOvvEu3M16AgUSmFxHctHOz51QfHxd7oV5fEz7BXCe8W6jlc5yXYKAZhoswzbPGHCQ06w%2B0zP89b45OvaI5qwES1%2BfqyX%2BrR12kPbChOEzDWC2ENYOjrF7o26H%2FxI2L6r%2FoXdU2GcGVHPrDVQ8bOB4H0c6O3WnQ50CngVX5uvCJJdBoIc%2BCQYL1slN9%2BvBiouXlNo0TIIX8A3qwb0bOj6%2BBUQUkfOJUORqTbbmiXe9xHcGrx16mUIskF%2BbXc%2FgVX0o%2BZGQCvLzfMKs%2FWdCq3hAr5QuolkBW0Z1yYOLyhOLtdUx%2BKKPyKZ44LcEEPcPu7Wth0eARkzhizpTgWxHWyaiWzeK%2F6lkkW6IkX0FRjHyO4xiJXCRemme8knwHS43Qe3SuiwTIVcXhESM%2FuKNALEjrxFAHbDBEGzm0H7kexLuQV9lWOAQS5j%2BApgPpNYC29nwFnpfv%2FF6e4yEgHSyuASwQIF2NfySu5o4b1mzHgOFLAmt5xXraimH0Y3QPkHoVGNIfW%2BGYmWzfzwOyWNRRt2V50sA3zyA6zukScJG8gKevdMAv%2BuretUEP0GOyMiVcFwWyXgRqFn4A0wySgSdATkN2QlUfb1r5eSaEP6WxLrA6ycMDCN%2B%2FS%2BBjqkAQ6WXSpfikoMKg%2BNjypQ646uli7%2BmZRSX2Ofv4oBLEuQ6bxvnX1TpDmVa7dp%2FjyFdb0LGr9gsK36wWh1w%2B%2FlokUUfwRswU1IJHpRYCd%2BYxjCP7YsnYW1Lwz%2FpxvmXU5c2HDM1GGoEVI0Ng07FUdzbLgS49yba6ZcrNfD67xbnKFCi3ijk9DYW%2Fv3IscJTgzzRg7SoOOydoBWuV3XDdg3R8qdCtjF&X-Amz-Signature=7f7b6472ed6b92f1557f220b9695c095cda298544b2ede53df957fdbfd128900&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTF7OXG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDdYQBz%2BV%2B8ufu%2B9xTkrzOC018leY9inr%2BjegcIcVbspwIhAK4KVTZ1nXKWcWiNeOR1j8sIjpQO9z4FE1IxgUoq%2BGigKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaPgzCRppT%2BYxkAYAq3ANbGk5kvlI859sXOvvEu3M16AgUSmFxHctHOz51QfHxd7oV5fEz7BXCe8W6jlc5yXYKAZhoswzbPGHCQ06w%2B0zP89b45OvaI5qwES1%2BfqyX%2BrR12kPbChOEzDWC2ENYOjrF7o26H%2FxI2L6r%2FoXdU2GcGVHPrDVQ8bOB4H0c6O3WnQ50CngVX5uvCJJdBoIc%2BCQYL1slN9%2BvBiouXlNo0TIIX8A3qwb0bOj6%2BBUQUkfOJUORqTbbmiXe9xHcGrx16mUIskF%2BbXc%2FgVX0o%2BZGQCvLzfMKs%2FWdCq3hAr5QuolkBW0Z1yYOLyhOLtdUx%2BKKPyKZ44LcEEPcPu7Wth0eARkzhizpTgWxHWyaiWzeK%2F6lkkW6IkX0FRjHyO4xiJXCRemme8knwHS43Qe3SuiwTIVcXhESM%2FuKNALEjrxFAHbDBEGzm0H7kexLuQV9lWOAQS5j%2BApgPpNYC29nwFnpfv%2FF6e4yEgHSyuASwQIF2NfySu5o4b1mzHgOFLAmt5xXraimH0Y3QPkHoVGNIfW%2BGYmWzfzwOyWNRRt2V50sA3zyA6zukScJG8gKevdMAv%2BuretUEP0GOyMiVcFwWyXgRqFn4A0wySgSdATkN2QlUfb1r5eSaEP6WxLrA6ycMDCN%2B%2FS%2BBjqkAQ6WXSpfikoMKg%2BNjypQ646uli7%2BmZRSX2Ofv4oBLEuQ6bxvnX1TpDmVa7dp%2FjyFdb0LGr9gsK36wWh1w%2B%2FlokUUfwRswU1IJHpRYCd%2BYxjCP7YsnYW1Lwz%2FpxvmXU5c2HDM1GGoEVI0Ng07FUdzbLgS49yba6ZcrNfD67xbnKFCi3ijk9DYW%2Fv3IscJTgzzRg7SoOOydoBWuV3XDdg3R8qdCtjF&X-Amz-Signature=1c7853bcdda8162bb313f19e9b2997b1aa0444e33d32792270821757394b9f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTF7OXG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDdYQBz%2BV%2B8ufu%2B9xTkrzOC018leY9inr%2BjegcIcVbspwIhAK4KVTZ1nXKWcWiNeOR1j8sIjpQO9z4FE1IxgUoq%2BGigKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaPgzCRppT%2BYxkAYAq3ANbGk5kvlI859sXOvvEu3M16AgUSmFxHctHOz51QfHxd7oV5fEz7BXCe8W6jlc5yXYKAZhoswzbPGHCQ06w%2B0zP89b45OvaI5qwES1%2BfqyX%2BrR12kPbChOEzDWC2ENYOjrF7o26H%2FxI2L6r%2FoXdU2GcGVHPrDVQ8bOB4H0c6O3WnQ50CngVX5uvCJJdBoIc%2BCQYL1slN9%2BvBiouXlNo0TIIX8A3qwb0bOj6%2BBUQUkfOJUORqTbbmiXe9xHcGrx16mUIskF%2BbXc%2FgVX0o%2BZGQCvLzfMKs%2FWdCq3hAr5QuolkBW0Z1yYOLyhOLtdUx%2BKKPyKZ44LcEEPcPu7Wth0eARkzhizpTgWxHWyaiWzeK%2F6lkkW6IkX0FRjHyO4xiJXCRemme8knwHS43Qe3SuiwTIVcXhESM%2FuKNALEjrxFAHbDBEGzm0H7kexLuQV9lWOAQS5j%2BApgPpNYC29nwFnpfv%2FF6e4yEgHSyuASwQIF2NfySu5o4b1mzHgOFLAmt5xXraimH0Y3QPkHoVGNIfW%2BGYmWzfzwOyWNRRt2V50sA3zyA6zukScJG8gKevdMAv%2BuretUEP0GOyMiVcFwWyXgRqFn4A0wySgSdATkN2QlUfb1r5eSaEP6WxLrA6ycMDCN%2B%2FS%2BBjqkAQ6WXSpfikoMKg%2BNjypQ646uli7%2BmZRSX2Ofv4oBLEuQ6bxvnX1TpDmVa7dp%2FjyFdb0LGr9gsK36wWh1w%2B%2FlokUUfwRswU1IJHpRYCd%2BYxjCP7YsnYW1Lwz%2FpxvmXU5c2HDM1GGoEVI0Ng07FUdzbLgS49yba6ZcrNfD67xbnKFCi3ijk9DYW%2Fv3IscJTgzzRg7SoOOydoBWuV3XDdg3R8qdCtjF&X-Amz-Signature=fe88224efd470c3c24b6306c58ed82cfbe12ccc8d3bfabe4e3b1a7d30c3a510f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTF7OXG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDdYQBz%2BV%2B8ufu%2B9xTkrzOC018leY9inr%2BjegcIcVbspwIhAK4KVTZ1nXKWcWiNeOR1j8sIjpQO9z4FE1IxgUoq%2BGigKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaPgzCRppT%2BYxkAYAq3ANbGk5kvlI859sXOvvEu3M16AgUSmFxHctHOz51QfHxd7oV5fEz7BXCe8W6jlc5yXYKAZhoswzbPGHCQ06w%2B0zP89b45OvaI5qwES1%2BfqyX%2BrR12kPbChOEzDWC2ENYOjrF7o26H%2FxI2L6r%2FoXdU2GcGVHPrDVQ8bOB4H0c6O3WnQ50CngVX5uvCJJdBoIc%2BCQYL1slN9%2BvBiouXlNo0TIIX8A3qwb0bOj6%2BBUQUkfOJUORqTbbmiXe9xHcGrx16mUIskF%2BbXc%2FgVX0o%2BZGQCvLzfMKs%2FWdCq3hAr5QuolkBW0Z1yYOLyhOLtdUx%2BKKPyKZ44LcEEPcPu7Wth0eARkzhizpTgWxHWyaiWzeK%2F6lkkW6IkX0FRjHyO4xiJXCRemme8knwHS43Qe3SuiwTIVcXhESM%2FuKNALEjrxFAHbDBEGzm0H7kexLuQV9lWOAQS5j%2BApgPpNYC29nwFnpfv%2FF6e4yEgHSyuASwQIF2NfySu5o4b1mzHgOFLAmt5xXraimH0Y3QPkHoVGNIfW%2BGYmWzfzwOyWNRRt2V50sA3zyA6zukScJG8gKevdMAv%2BuretUEP0GOyMiVcFwWyXgRqFn4A0wySgSdATkN2QlUfb1r5eSaEP6WxLrA6ycMDCN%2B%2FS%2BBjqkAQ6WXSpfikoMKg%2BNjypQ646uli7%2BmZRSX2Ofv4oBLEuQ6bxvnX1TpDmVa7dp%2FjyFdb0LGr9gsK36wWh1w%2B%2FlokUUfwRswU1IJHpRYCd%2BYxjCP7YsnYW1Lwz%2FpxvmXU5c2HDM1GGoEVI0Ng07FUdzbLgS49yba6ZcrNfD67xbnKFCi3ijk9DYW%2Fv3IscJTgzzRg7SoOOydoBWuV3XDdg3R8qdCtjF&X-Amz-Signature=2d94b480a7e7ebf180d8e35a64b19650fb2ed27dbeae7cf03d8dfc81ec5edc5e&X-Amz-SignedHeaders=host&x-id=GetObject)
