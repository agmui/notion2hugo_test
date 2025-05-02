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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZBSJCZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7uSVV9HscZrTQk4F1rpER831LnZ0GrJHIZxxkZ0m47AIgPZgzKN90JuNEwtFcI8DJq6vjyWmR2oQx4%2FO1IyjCSV8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsbberi5bbXoQLskircA2Mcoso0M5ZD%2BVkhiLFCdvyPMI2SQHjoCBw3tez%2B3g9WFUkK%2B%2Ftx1LNBtpxwZ1%2F0iUOhmyrEwANS3WsBIGtOoiO%2BuhS7B6QaRUfHirKgiV8MyWArO4dS31bh1ZDnNRsSfJgB5YjvF8fKfzJ3qd%2BW0Evg6WU1Mx5wTIB%2F5z7rDr5r0TnlUVyDDxeKdOQbjC4fX1Y8qxar2tQPnWW%2B5MBOYN5w2gWkV8sz589FeU3gAZ7rMyaN3OwizJlT8LJ07jE2epfH1guSnIm1V1sMWAUj8xeWnaWaxcPt2gafuOTNtSpEneli8Pd%2BP1L%2BDfmCpx%2BdT0cFW73JaBl%2BHmSSTI8SNWgxKHMAywPuA60Q0tKwVPdDy5KGs%2FPNlLc2vIZcQ%2FA1J9YFknfpvJpeXd01P97obDZL9S5yJEWxTTR%2Fn5KkzpNjD5zAblmYCGDojXlil2skl2ldGMk1fKh5CT%2B0pPNuEzIRYCZ7uahr083zGRkM2RytphEUhnnE0ivpFyyyUkvfRpJAeZG9Aee%2BGV7njNoHWaAPtFk4SwKH32TTwpW195NL7HyfX8zr5yXgygHbok5rxdHrKkWsNAEdMTKiMXnmUsLlZU%2BCxFboavlUHGxfgesJJ3k9Kz85yetcvcUZMLDy0sAGOqUB9Np%2B1ROnV4%2FCY7%2B4C5nDB8ed6CyYXm54PWQ3xDJXP%2FuHNtnQENOISQTQHBQ1DPu%2B1l9nOyq0rEq4sYMy1ZpALShTOqQWGRgObyiAzU3hZ%2Fbq6Uxa37IwEyV6RjJUqyy4fyOky7LBAHOvuZyDqCEnMA4Q%2FFjc3Wn1r%2BVtVrZvHSJ43fNzzmQuIgD2jmWDDx1Z0Gr8mCNNhn81mLI0lCe%2F1H25wPkZ&X-Amz-Signature=a034d1e8060e6f6fe77d4ceb5731eec57214ac7ec2eb7d94dd7fde69e770e9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZBSJCZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7uSVV9HscZrTQk4F1rpER831LnZ0GrJHIZxxkZ0m47AIgPZgzKN90JuNEwtFcI8DJq6vjyWmR2oQx4%2FO1IyjCSV8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsbberi5bbXoQLskircA2Mcoso0M5ZD%2BVkhiLFCdvyPMI2SQHjoCBw3tez%2B3g9WFUkK%2B%2Ftx1LNBtpxwZ1%2F0iUOhmyrEwANS3WsBIGtOoiO%2BuhS7B6QaRUfHirKgiV8MyWArO4dS31bh1ZDnNRsSfJgB5YjvF8fKfzJ3qd%2BW0Evg6WU1Mx5wTIB%2F5z7rDr5r0TnlUVyDDxeKdOQbjC4fX1Y8qxar2tQPnWW%2B5MBOYN5w2gWkV8sz589FeU3gAZ7rMyaN3OwizJlT8LJ07jE2epfH1guSnIm1V1sMWAUj8xeWnaWaxcPt2gafuOTNtSpEneli8Pd%2BP1L%2BDfmCpx%2BdT0cFW73JaBl%2BHmSSTI8SNWgxKHMAywPuA60Q0tKwVPdDy5KGs%2FPNlLc2vIZcQ%2FA1J9YFknfpvJpeXd01P97obDZL9S5yJEWxTTR%2Fn5KkzpNjD5zAblmYCGDojXlil2skl2ldGMk1fKh5CT%2B0pPNuEzIRYCZ7uahr083zGRkM2RytphEUhnnE0ivpFyyyUkvfRpJAeZG9Aee%2BGV7njNoHWaAPtFk4SwKH32TTwpW195NL7HyfX8zr5yXgygHbok5rxdHrKkWsNAEdMTKiMXnmUsLlZU%2BCxFboavlUHGxfgesJJ3k9Kz85yetcvcUZMLDy0sAGOqUB9Np%2B1ROnV4%2FCY7%2B4C5nDB8ed6CyYXm54PWQ3xDJXP%2FuHNtnQENOISQTQHBQ1DPu%2B1l9nOyq0rEq4sYMy1ZpALShTOqQWGRgObyiAzU3hZ%2Fbq6Uxa37IwEyV6RjJUqyy4fyOky7LBAHOvuZyDqCEnMA4Q%2FFjc3Wn1r%2BVtVrZvHSJ43fNzzmQuIgD2jmWDDx1Z0Gr8mCNNhn81mLI0lCe%2F1H25wPkZ&X-Amz-Signature=95730ae9b47c77b6fbd02be7a1933b773cfecc52c95fc954dcff50a5a5c4ae95&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZBSJCZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7uSVV9HscZrTQk4F1rpER831LnZ0GrJHIZxxkZ0m47AIgPZgzKN90JuNEwtFcI8DJq6vjyWmR2oQx4%2FO1IyjCSV8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsbberi5bbXoQLskircA2Mcoso0M5ZD%2BVkhiLFCdvyPMI2SQHjoCBw3tez%2B3g9WFUkK%2B%2Ftx1LNBtpxwZ1%2F0iUOhmyrEwANS3WsBIGtOoiO%2BuhS7B6QaRUfHirKgiV8MyWArO4dS31bh1ZDnNRsSfJgB5YjvF8fKfzJ3qd%2BW0Evg6WU1Mx5wTIB%2F5z7rDr5r0TnlUVyDDxeKdOQbjC4fX1Y8qxar2tQPnWW%2B5MBOYN5w2gWkV8sz589FeU3gAZ7rMyaN3OwizJlT8LJ07jE2epfH1guSnIm1V1sMWAUj8xeWnaWaxcPt2gafuOTNtSpEneli8Pd%2BP1L%2BDfmCpx%2BdT0cFW73JaBl%2BHmSSTI8SNWgxKHMAywPuA60Q0tKwVPdDy5KGs%2FPNlLc2vIZcQ%2FA1J9YFknfpvJpeXd01P97obDZL9S5yJEWxTTR%2Fn5KkzpNjD5zAblmYCGDojXlil2skl2ldGMk1fKh5CT%2B0pPNuEzIRYCZ7uahr083zGRkM2RytphEUhnnE0ivpFyyyUkvfRpJAeZG9Aee%2BGV7njNoHWaAPtFk4SwKH32TTwpW195NL7HyfX8zr5yXgygHbok5rxdHrKkWsNAEdMTKiMXnmUsLlZU%2BCxFboavlUHGxfgesJJ3k9Kz85yetcvcUZMLDy0sAGOqUB9Np%2B1ROnV4%2FCY7%2B4C5nDB8ed6CyYXm54PWQ3xDJXP%2FuHNtnQENOISQTQHBQ1DPu%2B1l9nOyq0rEq4sYMy1ZpALShTOqQWGRgObyiAzU3hZ%2Fbq6Uxa37IwEyV6RjJUqyy4fyOky7LBAHOvuZyDqCEnMA4Q%2FFjc3Wn1r%2BVtVrZvHSJ43fNzzmQuIgD2jmWDDx1Z0Gr8mCNNhn81mLI0lCe%2F1H25wPkZ&X-Amz-Signature=91c1da784ee3a95cc8fc496db64805b29e86c6ea5c4744a13dc14a1b65f297a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZBSJCZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7uSVV9HscZrTQk4F1rpER831LnZ0GrJHIZxxkZ0m47AIgPZgzKN90JuNEwtFcI8DJq6vjyWmR2oQx4%2FO1IyjCSV8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsbberi5bbXoQLskircA2Mcoso0M5ZD%2BVkhiLFCdvyPMI2SQHjoCBw3tez%2B3g9WFUkK%2B%2Ftx1LNBtpxwZ1%2F0iUOhmyrEwANS3WsBIGtOoiO%2BuhS7B6QaRUfHirKgiV8MyWArO4dS31bh1ZDnNRsSfJgB5YjvF8fKfzJ3qd%2BW0Evg6WU1Mx5wTIB%2F5z7rDr5r0TnlUVyDDxeKdOQbjC4fX1Y8qxar2tQPnWW%2B5MBOYN5w2gWkV8sz589FeU3gAZ7rMyaN3OwizJlT8LJ07jE2epfH1guSnIm1V1sMWAUj8xeWnaWaxcPt2gafuOTNtSpEneli8Pd%2BP1L%2BDfmCpx%2BdT0cFW73JaBl%2BHmSSTI8SNWgxKHMAywPuA60Q0tKwVPdDy5KGs%2FPNlLc2vIZcQ%2FA1J9YFknfpvJpeXd01P97obDZL9S5yJEWxTTR%2Fn5KkzpNjD5zAblmYCGDojXlil2skl2ldGMk1fKh5CT%2B0pPNuEzIRYCZ7uahr083zGRkM2RytphEUhnnE0ivpFyyyUkvfRpJAeZG9Aee%2BGV7njNoHWaAPtFk4SwKH32TTwpW195NL7HyfX8zr5yXgygHbok5rxdHrKkWsNAEdMTKiMXnmUsLlZU%2BCxFboavlUHGxfgesJJ3k9Kz85yetcvcUZMLDy0sAGOqUB9Np%2B1ROnV4%2FCY7%2B4C5nDB8ed6CyYXm54PWQ3xDJXP%2FuHNtnQENOISQTQHBQ1DPu%2B1l9nOyq0rEq4sYMy1ZpALShTOqQWGRgObyiAzU3hZ%2Fbq6Uxa37IwEyV6RjJUqyy4fyOky7LBAHOvuZyDqCEnMA4Q%2FFjc3Wn1r%2BVtVrZvHSJ43fNzzmQuIgD2jmWDDx1Z0Gr8mCNNhn81mLI0lCe%2F1H25wPkZ&X-Amz-Signature=144ece5777d01a10f6409ff78d5ad4865c03615ca08ecb646ccb52bef22b1a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZBSJCZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7uSVV9HscZrTQk4F1rpER831LnZ0GrJHIZxxkZ0m47AIgPZgzKN90JuNEwtFcI8DJq6vjyWmR2oQx4%2FO1IyjCSV8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsbberi5bbXoQLskircA2Mcoso0M5ZD%2BVkhiLFCdvyPMI2SQHjoCBw3tez%2B3g9WFUkK%2B%2Ftx1LNBtpxwZ1%2F0iUOhmyrEwANS3WsBIGtOoiO%2BuhS7B6QaRUfHirKgiV8MyWArO4dS31bh1ZDnNRsSfJgB5YjvF8fKfzJ3qd%2BW0Evg6WU1Mx5wTIB%2F5z7rDr5r0TnlUVyDDxeKdOQbjC4fX1Y8qxar2tQPnWW%2B5MBOYN5w2gWkV8sz589FeU3gAZ7rMyaN3OwizJlT8LJ07jE2epfH1guSnIm1V1sMWAUj8xeWnaWaxcPt2gafuOTNtSpEneli8Pd%2BP1L%2BDfmCpx%2BdT0cFW73JaBl%2BHmSSTI8SNWgxKHMAywPuA60Q0tKwVPdDy5KGs%2FPNlLc2vIZcQ%2FA1J9YFknfpvJpeXd01P97obDZL9S5yJEWxTTR%2Fn5KkzpNjD5zAblmYCGDojXlil2skl2ldGMk1fKh5CT%2B0pPNuEzIRYCZ7uahr083zGRkM2RytphEUhnnE0ivpFyyyUkvfRpJAeZG9Aee%2BGV7njNoHWaAPtFk4SwKH32TTwpW195NL7HyfX8zr5yXgygHbok5rxdHrKkWsNAEdMTKiMXnmUsLlZU%2BCxFboavlUHGxfgesJJ3k9Kz85yetcvcUZMLDy0sAGOqUB9Np%2B1ROnV4%2FCY7%2B4C5nDB8ed6CyYXm54PWQ3xDJXP%2FuHNtnQENOISQTQHBQ1DPu%2B1l9nOyq0rEq4sYMy1ZpALShTOqQWGRgObyiAzU3hZ%2Fbq6Uxa37IwEyV6RjJUqyy4fyOky7LBAHOvuZyDqCEnMA4Q%2FFjc3Wn1r%2BVtVrZvHSJ43fNzzmQuIgD2jmWDDx1Z0Gr8mCNNhn81mLI0lCe%2F1H25wPkZ&X-Amz-Signature=cab962bc9de2b8789963c928e530953a33159d4547b62dcf61d0a578f1678734&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZBSJCZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD7uSVV9HscZrTQk4F1rpER831LnZ0GrJHIZxxkZ0m47AIgPZgzKN90JuNEwtFcI8DJq6vjyWmR2oQx4%2FO1IyjCSV8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsbberi5bbXoQLskircA2Mcoso0M5ZD%2BVkhiLFCdvyPMI2SQHjoCBw3tez%2B3g9WFUkK%2B%2Ftx1LNBtpxwZ1%2F0iUOhmyrEwANS3WsBIGtOoiO%2BuhS7B6QaRUfHirKgiV8MyWArO4dS31bh1ZDnNRsSfJgB5YjvF8fKfzJ3qd%2BW0Evg6WU1Mx5wTIB%2F5z7rDr5r0TnlUVyDDxeKdOQbjC4fX1Y8qxar2tQPnWW%2B5MBOYN5w2gWkV8sz589FeU3gAZ7rMyaN3OwizJlT8LJ07jE2epfH1guSnIm1V1sMWAUj8xeWnaWaxcPt2gafuOTNtSpEneli8Pd%2BP1L%2BDfmCpx%2BdT0cFW73JaBl%2BHmSSTI8SNWgxKHMAywPuA60Q0tKwVPdDy5KGs%2FPNlLc2vIZcQ%2FA1J9YFknfpvJpeXd01P97obDZL9S5yJEWxTTR%2Fn5KkzpNjD5zAblmYCGDojXlil2skl2ldGMk1fKh5CT%2B0pPNuEzIRYCZ7uahr083zGRkM2RytphEUhnnE0ivpFyyyUkvfRpJAeZG9Aee%2BGV7njNoHWaAPtFk4SwKH32TTwpW195NL7HyfX8zr5yXgygHbok5rxdHrKkWsNAEdMTKiMXnmUsLlZU%2BCxFboavlUHGxfgesJJ3k9Kz85yetcvcUZMLDy0sAGOqUB9Np%2B1ROnV4%2FCY7%2B4C5nDB8ed6CyYXm54PWQ3xDJXP%2FuHNtnQENOISQTQHBQ1DPu%2B1l9nOyq0rEq4sYMy1ZpALShTOqQWGRgObyiAzU3hZ%2Fbq6Uxa37IwEyV6RjJUqyy4fyOky7LBAHOvuZyDqCEnMA4Q%2FFjc3Wn1r%2BVtVrZvHSJ43fNzzmQuIgD2jmWDDx1Z0Gr8mCNNhn81mLI0lCe%2F1H25wPkZ&X-Amz-Signature=d7942eca25063312c60b80d1bf335f04acb4b9021845d878ed44669556f978c4&X-Amz-SignedHeaders=host&x-id=GetObject)
