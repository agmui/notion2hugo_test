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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYVYS7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCnsQhWkdRSVzNp%2Bqh8SCvUq%2Bzv3WvRe%2F0tpJ4V2Me0%2FgIgUt6xDHkG6b1C8JUWGbkunAv12c7cOo%2F68z7llGL2wV8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXU62PaAQuC0Y8tpyrcAz3V7QJJqxD7ko3piuftwn4MPzafVDVjk%2B4LGS67nLhnDCaQQu5pGtbx9DD8Kr8NOB51Dnq7UOTi02C0a1G0I2Bpsqx68SV%2BcRy6a2Z6%2FQmz4E9JVF7KB7fbJK49lJP3hJQnQt6qEBuytjG%2FPy%2F4Kk8rTM0lOiFDajMKs7SdrXgQ8MRDe%2F78Wsm1oR5D5SBSAMq3uS%2BorusXcw%2B%2BsLOPvezcNv6BMXZ4mFOI%2B56e9VO%2Flq9egwG7iRowtou47%2BYJe54JaEAbi7fThDjMJY%2FhnHB8%2FMjL4kea1Nw8JXXc%2FUGQ1gaTQC9JTqkCr2WebrWrk9gdWudKcofJJq3kXu9TM8dX1TRhfH1dRUGeP4Sf9%2FDhgMyTtQz7hbDSfPrB%2F5YPrEy8lH2SbLgexe6iPIdgOrr3GYAdykA39AzUuNttZWLiCl3lNHcCeQL%2B%2BHVmdNqt6Trrmr9RRUAZd5oGlzcITUlGkk5hNC1dOeYmZW71qTMjdALhdNR5ieBnc0n6xorkaGplL26RUUwTqj5f6xNxTb28DXHeKYV3UPV3eRvYFgRIXQjbQdYXtubxKpxsFtjBVR7qWCy7RnDTN3%2Bz0yVI4zeCf7l6QB4dU1foj2L2lPeEQak3g1QyeDcS%2BzwgMKuK778GOqUBpaC5UjKZLRjzUAcJl2MFcWYCqByuZsNJMd8nwhmu%2F3QROdV9nWaBO3InSmqSNt2S1U2Dvv19rc2Lg3Y2JZbMYK7Rs9YPCdlX%2Fvgrm2sybjjijpZ8Rlnzu9PTfzFFoeNg5ajsyoeS7CyZe8gz3RV%2FSQnSWknmiWrfBMHh7%2F2OO07ljClj43YLVJ8P2sW4HOqDrphPZf779wOxE3SjCyBoCjhRkWub&X-Amz-Signature=2dd90a4c5ea6b5080c3bf0583debe4eea2404618f5b42544f766999d0281ae93&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYVYS7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCnsQhWkdRSVzNp%2Bqh8SCvUq%2Bzv3WvRe%2F0tpJ4V2Me0%2FgIgUt6xDHkG6b1C8JUWGbkunAv12c7cOo%2F68z7llGL2wV8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXU62PaAQuC0Y8tpyrcAz3V7QJJqxD7ko3piuftwn4MPzafVDVjk%2B4LGS67nLhnDCaQQu5pGtbx9DD8Kr8NOB51Dnq7UOTi02C0a1G0I2Bpsqx68SV%2BcRy6a2Z6%2FQmz4E9JVF7KB7fbJK49lJP3hJQnQt6qEBuytjG%2FPy%2F4Kk8rTM0lOiFDajMKs7SdrXgQ8MRDe%2F78Wsm1oR5D5SBSAMq3uS%2BorusXcw%2B%2BsLOPvezcNv6BMXZ4mFOI%2B56e9VO%2Flq9egwG7iRowtou47%2BYJe54JaEAbi7fThDjMJY%2FhnHB8%2FMjL4kea1Nw8JXXc%2FUGQ1gaTQC9JTqkCr2WebrWrk9gdWudKcofJJq3kXu9TM8dX1TRhfH1dRUGeP4Sf9%2FDhgMyTtQz7hbDSfPrB%2F5YPrEy8lH2SbLgexe6iPIdgOrr3GYAdykA39AzUuNttZWLiCl3lNHcCeQL%2B%2BHVmdNqt6Trrmr9RRUAZd5oGlzcITUlGkk5hNC1dOeYmZW71qTMjdALhdNR5ieBnc0n6xorkaGplL26RUUwTqj5f6xNxTb28DXHeKYV3UPV3eRvYFgRIXQjbQdYXtubxKpxsFtjBVR7qWCy7RnDTN3%2Bz0yVI4zeCf7l6QB4dU1foj2L2lPeEQak3g1QyeDcS%2BzwgMKuK778GOqUBpaC5UjKZLRjzUAcJl2MFcWYCqByuZsNJMd8nwhmu%2F3QROdV9nWaBO3InSmqSNt2S1U2Dvv19rc2Lg3Y2JZbMYK7Rs9YPCdlX%2Fvgrm2sybjjijpZ8Rlnzu9PTfzFFoeNg5ajsyoeS7CyZe8gz3RV%2FSQnSWknmiWrfBMHh7%2F2OO07ljClj43YLVJ8P2sW4HOqDrphPZf779wOxE3SjCyBoCjhRkWub&X-Amz-Signature=785b7b58bf9c888dee2581198b5b9658c45e4c8868d8da8beeb1ff31c3f4de6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYVYS7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCnsQhWkdRSVzNp%2Bqh8SCvUq%2Bzv3WvRe%2F0tpJ4V2Me0%2FgIgUt6xDHkG6b1C8JUWGbkunAv12c7cOo%2F68z7llGL2wV8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXU62PaAQuC0Y8tpyrcAz3V7QJJqxD7ko3piuftwn4MPzafVDVjk%2B4LGS67nLhnDCaQQu5pGtbx9DD8Kr8NOB51Dnq7UOTi02C0a1G0I2Bpsqx68SV%2BcRy6a2Z6%2FQmz4E9JVF7KB7fbJK49lJP3hJQnQt6qEBuytjG%2FPy%2F4Kk8rTM0lOiFDajMKs7SdrXgQ8MRDe%2F78Wsm1oR5D5SBSAMq3uS%2BorusXcw%2B%2BsLOPvezcNv6BMXZ4mFOI%2B56e9VO%2Flq9egwG7iRowtou47%2BYJe54JaEAbi7fThDjMJY%2FhnHB8%2FMjL4kea1Nw8JXXc%2FUGQ1gaTQC9JTqkCr2WebrWrk9gdWudKcofJJq3kXu9TM8dX1TRhfH1dRUGeP4Sf9%2FDhgMyTtQz7hbDSfPrB%2F5YPrEy8lH2SbLgexe6iPIdgOrr3GYAdykA39AzUuNttZWLiCl3lNHcCeQL%2B%2BHVmdNqt6Trrmr9RRUAZd5oGlzcITUlGkk5hNC1dOeYmZW71qTMjdALhdNR5ieBnc0n6xorkaGplL26RUUwTqj5f6xNxTb28DXHeKYV3UPV3eRvYFgRIXQjbQdYXtubxKpxsFtjBVR7qWCy7RnDTN3%2Bz0yVI4zeCf7l6QB4dU1foj2L2lPeEQak3g1QyeDcS%2BzwgMKuK778GOqUBpaC5UjKZLRjzUAcJl2MFcWYCqByuZsNJMd8nwhmu%2F3QROdV9nWaBO3InSmqSNt2S1U2Dvv19rc2Lg3Y2JZbMYK7Rs9YPCdlX%2Fvgrm2sybjjijpZ8Rlnzu9PTfzFFoeNg5ajsyoeS7CyZe8gz3RV%2FSQnSWknmiWrfBMHh7%2F2OO07ljClj43YLVJ8P2sW4HOqDrphPZf779wOxE3SjCyBoCjhRkWub&X-Amz-Signature=b67fe9b3a95411bf55090bbb3eb8b253d76a237f4db2f459428aeffded6da92c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYVYS7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCnsQhWkdRSVzNp%2Bqh8SCvUq%2Bzv3WvRe%2F0tpJ4V2Me0%2FgIgUt6xDHkG6b1C8JUWGbkunAv12c7cOo%2F68z7llGL2wV8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXU62PaAQuC0Y8tpyrcAz3V7QJJqxD7ko3piuftwn4MPzafVDVjk%2B4LGS67nLhnDCaQQu5pGtbx9DD8Kr8NOB51Dnq7UOTi02C0a1G0I2Bpsqx68SV%2BcRy6a2Z6%2FQmz4E9JVF7KB7fbJK49lJP3hJQnQt6qEBuytjG%2FPy%2F4Kk8rTM0lOiFDajMKs7SdrXgQ8MRDe%2F78Wsm1oR5D5SBSAMq3uS%2BorusXcw%2B%2BsLOPvezcNv6BMXZ4mFOI%2B56e9VO%2Flq9egwG7iRowtou47%2BYJe54JaEAbi7fThDjMJY%2FhnHB8%2FMjL4kea1Nw8JXXc%2FUGQ1gaTQC9JTqkCr2WebrWrk9gdWudKcofJJq3kXu9TM8dX1TRhfH1dRUGeP4Sf9%2FDhgMyTtQz7hbDSfPrB%2F5YPrEy8lH2SbLgexe6iPIdgOrr3GYAdykA39AzUuNttZWLiCl3lNHcCeQL%2B%2BHVmdNqt6Trrmr9RRUAZd5oGlzcITUlGkk5hNC1dOeYmZW71qTMjdALhdNR5ieBnc0n6xorkaGplL26RUUwTqj5f6xNxTb28DXHeKYV3UPV3eRvYFgRIXQjbQdYXtubxKpxsFtjBVR7qWCy7RnDTN3%2Bz0yVI4zeCf7l6QB4dU1foj2L2lPeEQak3g1QyeDcS%2BzwgMKuK778GOqUBpaC5UjKZLRjzUAcJl2MFcWYCqByuZsNJMd8nwhmu%2F3QROdV9nWaBO3InSmqSNt2S1U2Dvv19rc2Lg3Y2JZbMYK7Rs9YPCdlX%2Fvgrm2sybjjijpZ8Rlnzu9PTfzFFoeNg5ajsyoeS7CyZe8gz3RV%2FSQnSWknmiWrfBMHh7%2F2OO07ljClj43YLVJ8P2sW4HOqDrphPZf779wOxE3SjCyBoCjhRkWub&X-Amz-Signature=b1d8273f604e9bc98aca2d9a793cb827d3edf58fcb0cc472356e87fdaa01bd02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYVYS7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCnsQhWkdRSVzNp%2Bqh8SCvUq%2Bzv3WvRe%2F0tpJ4V2Me0%2FgIgUt6xDHkG6b1C8JUWGbkunAv12c7cOo%2F68z7llGL2wV8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXU62PaAQuC0Y8tpyrcAz3V7QJJqxD7ko3piuftwn4MPzafVDVjk%2B4LGS67nLhnDCaQQu5pGtbx9DD8Kr8NOB51Dnq7UOTi02C0a1G0I2Bpsqx68SV%2BcRy6a2Z6%2FQmz4E9JVF7KB7fbJK49lJP3hJQnQt6qEBuytjG%2FPy%2F4Kk8rTM0lOiFDajMKs7SdrXgQ8MRDe%2F78Wsm1oR5D5SBSAMq3uS%2BorusXcw%2B%2BsLOPvezcNv6BMXZ4mFOI%2B56e9VO%2Flq9egwG7iRowtou47%2BYJe54JaEAbi7fThDjMJY%2FhnHB8%2FMjL4kea1Nw8JXXc%2FUGQ1gaTQC9JTqkCr2WebrWrk9gdWudKcofJJq3kXu9TM8dX1TRhfH1dRUGeP4Sf9%2FDhgMyTtQz7hbDSfPrB%2F5YPrEy8lH2SbLgexe6iPIdgOrr3GYAdykA39AzUuNttZWLiCl3lNHcCeQL%2B%2BHVmdNqt6Trrmr9RRUAZd5oGlzcITUlGkk5hNC1dOeYmZW71qTMjdALhdNR5ieBnc0n6xorkaGplL26RUUwTqj5f6xNxTb28DXHeKYV3UPV3eRvYFgRIXQjbQdYXtubxKpxsFtjBVR7qWCy7RnDTN3%2Bz0yVI4zeCf7l6QB4dU1foj2L2lPeEQak3g1QyeDcS%2BzwgMKuK778GOqUBpaC5UjKZLRjzUAcJl2MFcWYCqByuZsNJMd8nwhmu%2F3QROdV9nWaBO3InSmqSNt2S1U2Dvv19rc2Lg3Y2JZbMYK7Rs9YPCdlX%2Fvgrm2sybjjijpZ8Rlnzu9PTfzFFoeNg5ajsyoeS7CyZe8gz3RV%2FSQnSWknmiWrfBMHh7%2F2OO07ljClj43YLVJ8P2sW4HOqDrphPZf779wOxE3SjCyBoCjhRkWub&X-Amz-Signature=3e1995e94cf802d4c3779a58101fe15ae59797aba30232a9a10ab57824a63fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYVYS7P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCnsQhWkdRSVzNp%2Bqh8SCvUq%2Bzv3WvRe%2F0tpJ4V2Me0%2FgIgUt6xDHkG6b1C8JUWGbkunAv12c7cOo%2F68z7llGL2wV8qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXU62PaAQuC0Y8tpyrcAz3V7QJJqxD7ko3piuftwn4MPzafVDVjk%2B4LGS67nLhnDCaQQu5pGtbx9DD8Kr8NOB51Dnq7UOTi02C0a1G0I2Bpsqx68SV%2BcRy6a2Z6%2FQmz4E9JVF7KB7fbJK49lJP3hJQnQt6qEBuytjG%2FPy%2F4Kk8rTM0lOiFDajMKs7SdrXgQ8MRDe%2F78Wsm1oR5D5SBSAMq3uS%2BorusXcw%2B%2BsLOPvezcNv6BMXZ4mFOI%2B56e9VO%2Flq9egwG7iRowtou47%2BYJe54JaEAbi7fThDjMJY%2FhnHB8%2FMjL4kea1Nw8JXXc%2FUGQ1gaTQC9JTqkCr2WebrWrk9gdWudKcofJJq3kXu9TM8dX1TRhfH1dRUGeP4Sf9%2FDhgMyTtQz7hbDSfPrB%2F5YPrEy8lH2SbLgexe6iPIdgOrr3GYAdykA39AzUuNttZWLiCl3lNHcCeQL%2B%2BHVmdNqt6Trrmr9RRUAZd5oGlzcITUlGkk5hNC1dOeYmZW71qTMjdALhdNR5ieBnc0n6xorkaGplL26RUUwTqj5f6xNxTb28DXHeKYV3UPV3eRvYFgRIXQjbQdYXtubxKpxsFtjBVR7qWCy7RnDTN3%2Bz0yVI4zeCf7l6QB4dU1foj2L2lPeEQak3g1QyeDcS%2BzwgMKuK778GOqUBpaC5UjKZLRjzUAcJl2MFcWYCqByuZsNJMd8nwhmu%2F3QROdV9nWaBO3InSmqSNt2S1U2Dvv19rc2Lg3Y2JZbMYK7Rs9YPCdlX%2Fvgrm2sybjjijpZ8Rlnzu9PTfzFFoeNg5ajsyoeS7CyZe8gz3RV%2FSQnSWknmiWrfBMHh7%2F2OO07ljClj43YLVJ8P2sW4HOqDrphPZf779wOxE3SjCyBoCjhRkWub&X-Amz-Signature=fea88405b6077b6e2f0910b066709735353ae41313a79f8b4adb31f6abf035c6&X-Amz-SignedHeaders=host&x-id=GetObject)
