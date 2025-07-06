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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWWZZ5E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDh1MDcx3gHud4O%2FKhdaZb%2F0prqKwX%2BkedP5WQJv4h0qAiEAkccQBXSqIgKKn27Tzyx%2FT7vYqwVnt5oz9S3wEtau1Zsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDzFxlSczmuBL0M4qSrcA8ewbP9EHug6G4JLS5tsX6mkbWWFsanrFBqhSzr96VQ86gK25kYpdkcoOhzewyjH7j8Gjd%2BqSJKv36woon8bMJo50YW8gBSE%2BzSkINUgKMArOQvaXQSe5xU0fEBat%2BepPjDVcNIDd1jBLvXKZ1iTnNxeQGpJVF6M%2BJRL%2Fe%2FfJI4yBh7zDrWwvp0J2hHiOy%2BDU583ns%2BZLqbzByRBSObs7p9xY2l3PrkuoNQi%2FTSMpfzfXRb4JMuQxeuPQvyVOkVpTA9tRsw4ifAniwSpwL0AJE%2BWE9Euqv3ARgS%2BRa0ItpjQqiydCfFu5InX8hna3PY8i4QeMT9JPOLXUo8LugXye2M5A%2BeuqcasonSf08ULT4dxPM%2F9v35PVaHq2VZAH7bW8U%2FG3699hBaU8dzuOZiYfU7oYfXsbK6AW6OnvGzPhaCg04I47u3cROkZUSZNi9Co1BW5FWyGmEiwPhoGj7ukPB0%2BY7550zyTDFiAnldHybV5X8UsjFkTFW7Ym1Zt19kiVIYiDiU0CYNTdi85SpVSgyv9mj%2F7299ojsyLptEob4anC%2FCzFDJ8IuqJJiwjLUSGt%2Bxqj3elY%2BMMdW%2BCJ%2BUuua4CabJBltkQD7TnPnt2nMsJCwlm6B4KSodKwAghMOXbqcMGOqUBSkG5Ts0QwtpQFdZ3ohyJtKe%2BndDup0fjGDEBd4CmDuR1e2b6mJAoFn9jYAm4OarhZ4%2FtWgnvyfoIfT%2BBzRsujk5rwJn4SculgQet4PregfZsdc6PFKcrDNlr3O9%2Bm6QtbCafYEW8O3CfRWSjlLC2TAys2MHcNsa8Exf%2FcfcWaNsnM7Pmtba4UnKK5tFpdF7HCKeENIQCHChmVYDeHO0BcuAf95Yh&X-Amz-Signature=5ec1f712c292f8ac752d0a5c67daf1cdd282690dc9b029e358ea9b915d953a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWWZZ5E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDh1MDcx3gHud4O%2FKhdaZb%2F0prqKwX%2BkedP5WQJv4h0qAiEAkccQBXSqIgKKn27Tzyx%2FT7vYqwVnt5oz9S3wEtau1Zsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDzFxlSczmuBL0M4qSrcA8ewbP9EHug6G4JLS5tsX6mkbWWFsanrFBqhSzr96VQ86gK25kYpdkcoOhzewyjH7j8Gjd%2BqSJKv36woon8bMJo50YW8gBSE%2BzSkINUgKMArOQvaXQSe5xU0fEBat%2BepPjDVcNIDd1jBLvXKZ1iTnNxeQGpJVF6M%2BJRL%2Fe%2FfJI4yBh7zDrWwvp0J2hHiOy%2BDU583ns%2BZLqbzByRBSObs7p9xY2l3PrkuoNQi%2FTSMpfzfXRb4JMuQxeuPQvyVOkVpTA9tRsw4ifAniwSpwL0AJE%2BWE9Euqv3ARgS%2BRa0ItpjQqiydCfFu5InX8hna3PY8i4QeMT9JPOLXUo8LugXye2M5A%2BeuqcasonSf08ULT4dxPM%2F9v35PVaHq2VZAH7bW8U%2FG3699hBaU8dzuOZiYfU7oYfXsbK6AW6OnvGzPhaCg04I47u3cROkZUSZNi9Co1BW5FWyGmEiwPhoGj7ukPB0%2BY7550zyTDFiAnldHybV5X8UsjFkTFW7Ym1Zt19kiVIYiDiU0CYNTdi85SpVSgyv9mj%2F7299ojsyLptEob4anC%2FCzFDJ8IuqJJiwjLUSGt%2Bxqj3elY%2BMMdW%2BCJ%2BUuua4CabJBltkQD7TnPnt2nMsJCwlm6B4KSodKwAghMOXbqcMGOqUBSkG5Ts0QwtpQFdZ3ohyJtKe%2BndDup0fjGDEBd4CmDuR1e2b6mJAoFn9jYAm4OarhZ4%2FtWgnvyfoIfT%2BBzRsujk5rwJn4SculgQet4PregfZsdc6PFKcrDNlr3O9%2Bm6QtbCafYEW8O3CfRWSjlLC2TAys2MHcNsa8Exf%2FcfcWaNsnM7Pmtba4UnKK5tFpdF7HCKeENIQCHChmVYDeHO0BcuAf95Yh&X-Amz-Signature=f8e116f443b7830ccbfa4aac19b0172aa0d39bb664f21eaf8c66a0bcbd6c0fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWWZZ5E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDh1MDcx3gHud4O%2FKhdaZb%2F0prqKwX%2BkedP5WQJv4h0qAiEAkccQBXSqIgKKn27Tzyx%2FT7vYqwVnt5oz9S3wEtau1Zsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDzFxlSczmuBL0M4qSrcA8ewbP9EHug6G4JLS5tsX6mkbWWFsanrFBqhSzr96VQ86gK25kYpdkcoOhzewyjH7j8Gjd%2BqSJKv36woon8bMJo50YW8gBSE%2BzSkINUgKMArOQvaXQSe5xU0fEBat%2BepPjDVcNIDd1jBLvXKZ1iTnNxeQGpJVF6M%2BJRL%2Fe%2FfJI4yBh7zDrWwvp0J2hHiOy%2BDU583ns%2BZLqbzByRBSObs7p9xY2l3PrkuoNQi%2FTSMpfzfXRb4JMuQxeuPQvyVOkVpTA9tRsw4ifAniwSpwL0AJE%2BWE9Euqv3ARgS%2BRa0ItpjQqiydCfFu5InX8hna3PY8i4QeMT9JPOLXUo8LugXye2M5A%2BeuqcasonSf08ULT4dxPM%2F9v35PVaHq2VZAH7bW8U%2FG3699hBaU8dzuOZiYfU7oYfXsbK6AW6OnvGzPhaCg04I47u3cROkZUSZNi9Co1BW5FWyGmEiwPhoGj7ukPB0%2BY7550zyTDFiAnldHybV5X8UsjFkTFW7Ym1Zt19kiVIYiDiU0CYNTdi85SpVSgyv9mj%2F7299ojsyLptEob4anC%2FCzFDJ8IuqJJiwjLUSGt%2Bxqj3elY%2BMMdW%2BCJ%2BUuua4CabJBltkQD7TnPnt2nMsJCwlm6B4KSodKwAghMOXbqcMGOqUBSkG5Ts0QwtpQFdZ3ohyJtKe%2BndDup0fjGDEBd4CmDuR1e2b6mJAoFn9jYAm4OarhZ4%2FtWgnvyfoIfT%2BBzRsujk5rwJn4SculgQet4PregfZsdc6PFKcrDNlr3O9%2Bm6QtbCafYEW8O3CfRWSjlLC2TAys2MHcNsa8Exf%2FcfcWaNsnM7Pmtba4UnKK5tFpdF7HCKeENIQCHChmVYDeHO0BcuAf95Yh&X-Amz-Signature=08266d5c56bcd48cb046207735ed39bd28851aaa79f428e78b30f8e4b8a2a259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWWZZ5E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDh1MDcx3gHud4O%2FKhdaZb%2F0prqKwX%2BkedP5WQJv4h0qAiEAkccQBXSqIgKKn27Tzyx%2FT7vYqwVnt5oz9S3wEtau1Zsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDzFxlSczmuBL0M4qSrcA8ewbP9EHug6G4JLS5tsX6mkbWWFsanrFBqhSzr96VQ86gK25kYpdkcoOhzewyjH7j8Gjd%2BqSJKv36woon8bMJo50YW8gBSE%2BzSkINUgKMArOQvaXQSe5xU0fEBat%2BepPjDVcNIDd1jBLvXKZ1iTnNxeQGpJVF6M%2BJRL%2Fe%2FfJI4yBh7zDrWwvp0J2hHiOy%2BDU583ns%2BZLqbzByRBSObs7p9xY2l3PrkuoNQi%2FTSMpfzfXRb4JMuQxeuPQvyVOkVpTA9tRsw4ifAniwSpwL0AJE%2BWE9Euqv3ARgS%2BRa0ItpjQqiydCfFu5InX8hna3PY8i4QeMT9JPOLXUo8LugXye2M5A%2BeuqcasonSf08ULT4dxPM%2F9v35PVaHq2VZAH7bW8U%2FG3699hBaU8dzuOZiYfU7oYfXsbK6AW6OnvGzPhaCg04I47u3cROkZUSZNi9Co1BW5FWyGmEiwPhoGj7ukPB0%2BY7550zyTDFiAnldHybV5X8UsjFkTFW7Ym1Zt19kiVIYiDiU0CYNTdi85SpVSgyv9mj%2F7299ojsyLptEob4anC%2FCzFDJ8IuqJJiwjLUSGt%2Bxqj3elY%2BMMdW%2BCJ%2BUuua4CabJBltkQD7TnPnt2nMsJCwlm6B4KSodKwAghMOXbqcMGOqUBSkG5Ts0QwtpQFdZ3ohyJtKe%2BndDup0fjGDEBd4CmDuR1e2b6mJAoFn9jYAm4OarhZ4%2FtWgnvyfoIfT%2BBzRsujk5rwJn4SculgQet4PregfZsdc6PFKcrDNlr3O9%2Bm6QtbCafYEW8O3CfRWSjlLC2TAys2MHcNsa8Exf%2FcfcWaNsnM7Pmtba4UnKK5tFpdF7HCKeENIQCHChmVYDeHO0BcuAf95Yh&X-Amz-Signature=bcc1afbc69ad0e9be7e128079aa0ee57f9bd14c36b6b8b64099f33a180227fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWWZZ5E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDh1MDcx3gHud4O%2FKhdaZb%2F0prqKwX%2BkedP5WQJv4h0qAiEAkccQBXSqIgKKn27Tzyx%2FT7vYqwVnt5oz9S3wEtau1Zsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDzFxlSczmuBL0M4qSrcA8ewbP9EHug6G4JLS5tsX6mkbWWFsanrFBqhSzr96VQ86gK25kYpdkcoOhzewyjH7j8Gjd%2BqSJKv36woon8bMJo50YW8gBSE%2BzSkINUgKMArOQvaXQSe5xU0fEBat%2BepPjDVcNIDd1jBLvXKZ1iTnNxeQGpJVF6M%2BJRL%2Fe%2FfJI4yBh7zDrWwvp0J2hHiOy%2BDU583ns%2BZLqbzByRBSObs7p9xY2l3PrkuoNQi%2FTSMpfzfXRb4JMuQxeuPQvyVOkVpTA9tRsw4ifAniwSpwL0AJE%2BWE9Euqv3ARgS%2BRa0ItpjQqiydCfFu5InX8hna3PY8i4QeMT9JPOLXUo8LugXye2M5A%2BeuqcasonSf08ULT4dxPM%2F9v35PVaHq2VZAH7bW8U%2FG3699hBaU8dzuOZiYfU7oYfXsbK6AW6OnvGzPhaCg04I47u3cROkZUSZNi9Co1BW5FWyGmEiwPhoGj7ukPB0%2BY7550zyTDFiAnldHybV5X8UsjFkTFW7Ym1Zt19kiVIYiDiU0CYNTdi85SpVSgyv9mj%2F7299ojsyLptEob4anC%2FCzFDJ8IuqJJiwjLUSGt%2Bxqj3elY%2BMMdW%2BCJ%2BUuua4CabJBltkQD7TnPnt2nMsJCwlm6B4KSodKwAghMOXbqcMGOqUBSkG5Ts0QwtpQFdZ3ohyJtKe%2BndDup0fjGDEBd4CmDuR1e2b6mJAoFn9jYAm4OarhZ4%2FtWgnvyfoIfT%2BBzRsujk5rwJn4SculgQet4PregfZsdc6PFKcrDNlr3O9%2Bm6QtbCafYEW8O3CfRWSjlLC2TAys2MHcNsa8Exf%2FcfcWaNsnM7Pmtba4UnKK5tFpdF7HCKeENIQCHChmVYDeHO0BcuAf95Yh&X-Amz-Signature=7f98c2f2306a1ac11b45b7060923e24d964a8465e051bc1f36d579758197d582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWWZZ5E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDh1MDcx3gHud4O%2FKhdaZb%2F0prqKwX%2BkedP5WQJv4h0qAiEAkccQBXSqIgKKn27Tzyx%2FT7vYqwVnt5oz9S3wEtau1Zsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDzFxlSczmuBL0M4qSrcA8ewbP9EHug6G4JLS5tsX6mkbWWFsanrFBqhSzr96VQ86gK25kYpdkcoOhzewyjH7j8Gjd%2BqSJKv36woon8bMJo50YW8gBSE%2BzSkINUgKMArOQvaXQSe5xU0fEBat%2BepPjDVcNIDd1jBLvXKZ1iTnNxeQGpJVF6M%2BJRL%2Fe%2FfJI4yBh7zDrWwvp0J2hHiOy%2BDU583ns%2BZLqbzByRBSObs7p9xY2l3PrkuoNQi%2FTSMpfzfXRb4JMuQxeuPQvyVOkVpTA9tRsw4ifAniwSpwL0AJE%2BWE9Euqv3ARgS%2BRa0ItpjQqiydCfFu5InX8hna3PY8i4QeMT9JPOLXUo8LugXye2M5A%2BeuqcasonSf08ULT4dxPM%2F9v35PVaHq2VZAH7bW8U%2FG3699hBaU8dzuOZiYfU7oYfXsbK6AW6OnvGzPhaCg04I47u3cROkZUSZNi9Co1BW5FWyGmEiwPhoGj7ukPB0%2BY7550zyTDFiAnldHybV5X8UsjFkTFW7Ym1Zt19kiVIYiDiU0CYNTdi85SpVSgyv9mj%2F7299ojsyLptEob4anC%2FCzFDJ8IuqJJiwjLUSGt%2Bxqj3elY%2BMMdW%2BCJ%2BUuua4CabJBltkQD7TnPnt2nMsJCwlm6B4KSodKwAghMOXbqcMGOqUBSkG5Ts0QwtpQFdZ3ohyJtKe%2BndDup0fjGDEBd4CmDuR1e2b6mJAoFn9jYAm4OarhZ4%2FtWgnvyfoIfT%2BBzRsujk5rwJn4SculgQet4PregfZsdc6PFKcrDNlr3O9%2Bm6QtbCafYEW8O3CfRWSjlLC2TAys2MHcNsa8Exf%2FcfcWaNsnM7Pmtba4UnKK5tFpdF7HCKeENIQCHChmVYDeHO0BcuAf95Yh&X-Amz-Signature=7087e47350644e7dfe7a4848fff7ea557f40659eea6039aedbf82ff08513aefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
