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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652U4JRCI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjhUlcYzWeMWIDYCj6567w7ei2cVWQLMx0MxLMUu49ugIhAKb1j50Lz3OHHQ0Nb2d77pMN3nN6NilxbsFtWlC0Nm1SKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9fA2hO6faycrU%2Brwq3AOF%2F7cW2Lf%2FGeZDyyNH57PQRe6qS5NHjf2n2M81eYXHzoyjMKK600J1rVE%2BhlmxlD1wEFmcCz5dRlnnLkasq2WGDAAyFH%2Fj973mwwVaD2bqB050cO25FwdCqSz0dF7DaO8wJoS24PuwBkY50874nSvCioq%2FdtlULy83jLfzZ3JCIQGGkoJkHK8FX39UQ3S6rcMKrk6d%2FimA0Mah2doA5LGSOs98eBjHf24CxPnGAPUeRoIrVeymqpTLDFUMhtwuiJkGU%2F%2BkfAEN9WChQfNu86%2ByUAWJsI3050J6Qj9%2BQN8MOICDNaaitUO%2FFaT%2Fnc3WrnLqItmbHGPKSlHo4thj60L%2BtZbSl1Yg0oa7VQuJOAr%2BaMQPFtWYZslPt4lR%2B%2FMPCk%2FTy1in1TkzPs89Cbir0CUww81L6jweP%2F9fGqWi6KQZ0x4%2Fa7hs%2BkdfPLx9xMzEVrqEQJiOjjr8rrTZKrmzG9xWiSAH%2FKvRsrcUtyyVbpKm6%2FbVYKuskHXoIhdyJ6NnBUx7N6dDcIn6flN17v90Y9ZXAUOds8%2BHIurh0Ce7V2zsRuqvpTfqxMJ039c2kR2g0yZqkJ9qRrVh89ldVikn9lMyQz5DwN4BC3Kzl%2BfyKRXk0Ulvfbcz%2F3c6cNA5hDDyhOvBBjqkAf39uViv3hms%2Fc2H6bHX7WnygPzHVmzHR1oT0PtWU4p0SoSULxOVz0UwVcdEPT0YoRIJL5ScXm9bs3egw3el0Vqw7I1ylLo67c%2BtjOp1sogxm8LmJzg7zNn6DWB4%2FOG6T6hR9P%2F8n%2ByyurzXTkYi1ijT1Rm6ex%2BuCQZQSF8VSxOFOTcMuz1qFjpIXx%2BS1Y6u1jznSzRLWh0soSnzMNEILWoHhD14&X-Amz-Signature=8501bca7911583b1f5c3adfa83787e253ae80ae958f047411e6d32515ca38125&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652U4JRCI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjhUlcYzWeMWIDYCj6567w7ei2cVWQLMx0MxLMUu49ugIhAKb1j50Lz3OHHQ0Nb2d77pMN3nN6NilxbsFtWlC0Nm1SKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9fA2hO6faycrU%2Brwq3AOF%2F7cW2Lf%2FGeZDyyNH57PQRe6qS5NHjf2n2M81eYXHzoyjMKK600J1rVE%2BhlmxlD1wEFmcCz5dRlnnLkasq2WGDAAyFH%2Fj973mwwVaD2bqB050cO25FwdCqSz0dF7DaO8wJoS24PuwBkY50874nSvCioq%2FdtlULy83jLfzZ3JCIQGGkoJkHK8FX39UQ3S6rcMKrk6d%2FimA0Mah2doA5LGSOs98eBjHf24CxPnGAPUeRoIrVeymqpTLDFUMhtwuiJkGU%2F%2BkfAEN9WChQfNu86%2ByUAWJsI3050J6Qj9%2BQN8MOICDNaaitUO%2FFaT%2Fnc3WrnLqItmbHGPKSlHo4thj60L%2BtZbSl1Yg0oa7VQuJOAr%2BaMQPFtWYZslPt4lR%2B%2FMPCk%2FTy1in1TkzPs89Cbir0CUww81L6jweP%2F9fGqWi6KQZ0x4%2Fa7hs%2BkdfPLx9xMzEVrqEQJiOjjr8rrTZKrmzG9xWiSAH%2FKvRsrcUtyyVbpKm6%2FbVYKuskHXoIhdyJ6NnBUx7N6dDcIn6flN17v90Y9ZXAUOds8%2BHIurh0Ce7V2zsRuqvpTfqxMJ039c2kR2g0yZqkJ9qRrVh89ldVikn9lMyQz5DwN4BC3Kzl%2BfyKRXk0Ulvfbcz%2F3c6cNA5hDDyhOvBBjqkAf39uViv3hms%2Fc2H6bHX7WnygPzHVmzHR1oT0PtWU4p0SoSULxOVz0UwVcdEPT0YoRIJL5ScXm9bs3egw3el0Vqw7I1ylLo67c%2BtjOp1sogxm8LmJzg7zNn6DWB4%2FOG6T6hR9P%2F8n%2ByyurzXTkYi1ijT1Rm6ex%2BuCQZQSF8VSxOFOTcMuz1qFjpIXx%2BS1Y6u1jznSzRLWh0soSnzMNEILWoHhD14&X-Amz-Signature=2e9f4fe9d82a31004ce223be0862405824c1a066e778f38689c319d616f457fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652U4JRCI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjhUlcYzWeMWIDYCj6567w7ei2cVWQLMx0MxLMUu49ugIhAKb1j50Lz3OHHQ0Nb2d77pMN3nN6NilxbsFtWlC0Nm1SKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9fA2hO6faycrU%2Brwq3AOF%2F7cW2Lf%2FGeZDyyNH57PQRe6qS5NHjf2n2M81eYXHzoyjMKK600J1rVE%2BhlmxlD1wEFmcCz5dRlnnLkasq2WGDAAyFH%2Fj973mwwVaD2bqB050cO25FwdCqSz0dF7DaO8wJoS24PuwBkY50874nSvCioq%2FdtlULy83jLfzZ3JCIQGGkoJkHK8FX39UQ3S6rcMKrk6d%2FimA0Mah2doA5LGSOs98eBjHf24CxPnGAPUeRoIrVeymqpTLDFUMhtwuiJkGU%2F%2BkfAEN9WChQfNu86%2ByUAWJsI3050J6Qj9%2BQN8MOICDNaaitUO%2FFaT%2Fnc3WrnLqItmbHGPKSlHo4thj60L%2BtZbSl1Yg0oa7VQuJOAr%2BaMQPFtWYZslPt4lR%2B%2FMPCk%2FTy1in1TkzPs89Cbir0CUww81L6jweP%2F9fGqWi6KQZ0x4%2Fa7hs%2BkdfPLx9xMzEVrqEQJiOjjr8rrTZKrmzG9xWiSAH%2FKvRsrcUtyyVbpKm6%2FbVYKuskHXoIhdyJ6NnBUx7N6dDcIn6flN17v90Y9ZXAUOds8%2BHIurh0Ce7V2zsRuqvpTfqxMJ039c2kR2g0yZqkJ9qRrVh89ldVikn9lMyQz5DwN4BC3Kzl%2BfyKRXk0Ulvfbcz%2F3c6cNA5hDDyhOvBBjqkAf39uViv3hms%2Fc2H6bHX7WnygPzHVmzHR1oT0PtWU4p0SoSULxOVz0UwVcdEPT0YoRIJL5ScXm9bs3egw3el0Vqw7I1ylLo67c%2BtjOp1sogxm8LmJzg7zNn6DWB4%2FOG6T6hR9P%2F8n%2ByyurzXTkYi1ijT1Rm6ex%2BuCQZQSF8VSxOFOTcMuz1qFjpIXx%2BS1Y6u1jznSzRLWh0soSnzMNEILWoHhD14&X-Amz-Signature=3342d19bc89ebbfe08de1efda84c2b37ec1362d6c37629c90c7e1560604caab4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652U4JRCI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjhUlcYzWeMWIDYCj6567w7ei2cVWQLMx0MxLMUu49ugIhAKb1j50Lz3OHHQ0Nb2d77pMN3nN6NilxbsFtWlC0Nm1SKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9fA2hO6faycrU%2Brwq3AOF%2F7cW2Lf%2FGeZDyyNH57PQRe6qS5NHjf2n2M81eYXHzoyjMKK600J1rVE%2BhlmxlD1wEFmcCz5dRlnnLkasq2WGDAAyFH%2Fj973mwwVaD2bqB050cO25FwdCqSz0dF7DaO8wJoS24PuwBkY50874nSvCioq%2FdtlULy83jLfzZ3JCIQGGkoJkHK8FX39UQ3S6rcMKrk6d%2FimA0Mah2doA5LGSOs98eBjHf24CxPnGAPUeRoIrVeymqpTLDFUMhtwuiJkGU%2F%2BkfAEN9WChQfNu86%2ByUAWJsI3050J6Qj9%2BQN8MOICDNaaitUO%2FFaT%2Fnc3WrnLqItmbHGPKSlHo4thj60L%2BtZbSl1Yg0oa7VQuJOAr%2BaMQPFtWYZslPt4lR%2B%2FMPCk%2FTy1in1TkzPs89Cbir0CUww81L6jweP%2F9fGqWi6KQZ0x4%2Fa7hs%2BkdfPLx9xMzEVrqEQJiOjjr8rrTZKrmzG9xWiSAH%2FKvRsrcUtyyVbpKm6%2FbVYKuskHXoIhdyJ6NnBUx7N6dDcIn6flN17v90Y9ZXAUOds8%2BHIurh0Ce7V2zsRuqvpTfqxMJ039c2kR2g0yZqkJ9qRrVh89ldVikn9lMyQz5DwN4BC3Kzl%2BfyKRXk0Ulvfbcz%2F3c6cNA5hDDyhOvBBjqkAf39uViv3hms%2Fc2H6bHX7WnygPzHVmzHR1oT0PtWU4p0SoSULxOVz0UwVcdEPT0YoRIJL5ScXm9bs3egw3el0Vqw7I1ylLo67c%2BtjOp1sogxm8LmJzg7zNn6DWB4%2FOG6T6hR9P%2F8n%2ByyurzXTkYi1ijT1Rm6ex%2BuCQZQSF8VSxOFOTcMuz1qFjpIXx%2BS1Y6u1jznSzRLWh0soSnzMNEILWoHhD14&X-Amz-Signature=595e76470380132dba29d112ac656c781b23ccb0819440b5d3a280f85a35fffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652U4JRCI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjhUlcYzWeMWIDYCj6567w7ei2cVWQLMx0MxLMUu49ugIhAKb1j50Lz3OHHQ0Nb2d77pMN3nN6NilxbsFtWlC0Nm1SKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9fA2hO6faycrU%2Brwq3AOF%2F7cW2Lf%2FGeZDyyNH57PQRe6qS5NHjf2n2M81eYXHzoyjMKK600J1rVE%2BhlmxlD1wEFmcCz5dRlnnLkasq2WGDAAyFH%2Fj973mwwVaD2bqB050cO25FwdCqSz0dF7DaO8wJoS24PuwBkY50874nSvCioq%2FdtlULy83jLfzZ3JCIQGGkoJkHK8FX39UQ3S6rcMKrk6d%2FimA0Mah2doA5LGSOs98eBjHf24CxPnGAPUeRoIrVeymqpTLDFUMhtwuiJkGU%2F%2BkfAEN9WChQfNu86%2ByUAWJsI3050J6Qj9%2BQN8MOICDNaaitUO%2FFaT%2Fnc3WrnLqItmbHGPKSlHo4thj60L%2BtZbSl1Yg0oa7VQuJOAr%2BaMQPFtWYZslPt4lR%2B%2FMPCk%2FTy1in1TkzPs89Cbir0CUww81L6jweP%2F9fGqWi6KQZ0x4%2Fa7hs%2BkdfPLx9xMzEVrqEQJiOjjr8rrTZKrmzG9xWiSAH%2FKvRsrcUtyyVbpKm6%2FbVYKuskHXoIhdyJ6NnBUx7N6dDcIn6flN17v90Y9ZXAUOds8%2BHIurh0Ce7V2zsRuqvpTfqxMJ039c2kR2g0yZqkJ9qRrVh89ldVikn9lMyQz5DwN4BC3Kzl%2BfyKRXk0Ulvfbcz%2F3c6cNA5hDDyhOvBBjqkAf39uViv3hms%2Fc2H6bHX7WnygPzHVmzHR1oT0PtWU4p0SoSULxOVz0UwVcdEPT0YoRIJL5ScXm9bs3egw3el0Vqw7I1ylLo67c%2BtjOp1sogxm8LmJzg7zNn6DWB4%2FOG6T6hR9P%2F8n%2ByyurzXTkYi1ijT1Rm6ex%2BuCQZQSF8VSxOFOTcMuz1qFjpIXx%2BS1Y6u1jznSzRLWh0soSnzMNEILWoHhD14&X-Amz-Signature=c7f91d600aef5f425dbfde317db8d404263cca38af227419ecd06a05ff1eb89f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652U4JRCI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjhUlcYzWeMWIDYCj6567w7ei2cVWQLMx0MxLMUu49ugIhAKb1j50Lz3OHHQ0Nb2d77pMN3nN6NilxbsFtWlC0Nm1SKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9fA2hO6faycrU%2Brwq3AOF%2F7cW2Lf%2FGeZDyyNH57PQRe6qS5NHjf2n2M81eYXHzoyjMKK600J1rVE%2BhlmxlD1wEFmcCz5dRlnnLkasq2WGDAAyFH%2Fj973mwwVaD2bqB050cO25FwdCqSz0dF7DaO8wJoS24PuwBkY50874nSvCioq%2FdtlULy83jLfzZ3JCIQGGkoJkHK8FX39UQ3S6rcMKrk6d%2FimA0Mah2doA5LGSOs98eBjHf24CxPnGAPUeRoIrVeymqpTLDFUMhtwuiJkGU%2F%2BkfAEN9WChQfNu86%2ByUAWJsI3050J6Qj9%2BQN8MOICDNaaitUO%2FFaT%2Fnc3WrnLqItmbHGPKSlHo4thj60L%2BtZbSl1Yg0oa7VQuJOAr%2BaMQPFtWYZslPt4lR%2B%2FMPCk%2FTy1in1TkzPs89Cbir0CUww81L6jweP%2F9fGqWi6KQZ0x4%2Fa7hs%2BkdfPLx9xMzEVrqEQJiOjjr8rrTZKrmzG9xWiSAH%2FKvRsrcUtyyVbpKm6%2FbVYKuskHXoIhdyJ6NnBUx7N6dDcIn6flN17v90Y9ZXAUOds8%2BHIurh0Ce7V2zsRuqvpTfqxMJ039c2kR2g0yZqkJ9qRrVh89ldVikn9lMyQz5DwN4BC3Kzl%2BfyKRXk0Ulvfbcz%2F3c6cNA5hDDyhOvBBjqkAf39uViv3hms%2Fc2H6bHX7WnygPzHVmzHR1oT0PtWU4p0SoSULxOVz0UwVcdEPT0YoRIJL5ScXm9bs3egw3el0Vqw7I1ylLo67c%2BtjOp1sogxm8LmJzg7zNn6DWB4%2FOG6T6hR9P%2F8n%2ByyurzXTkYi1ijT1Rm6ex%2BuCQZQSF8VSxOFOTcMuz1qFjpIXx%2BS1Y6u1jznSzRLWh0soSnzMNEILWoHhD14&X-Amz-Signature=9358264095ba75bf04293528970d4cc0d55ea70e273536fa6baf50b36778b8ce&X-Amz-SignedHeaders=host&x-id=GetObject)
