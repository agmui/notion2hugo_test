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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZX2KFB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAW%2FgLvP4YkamU13imho%2BjjNchNwIhAkyCSh5R585D5uAiEArDHsvxavbgBYfZUzHJAfTNLJvf%2FCZp0iqdt6JDJVu4gq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMy%2B1Ew3kn3q%2FSgebircA1pIivqm0Dd%2FUNXdFnQCUWCC9ZX%2FpoGnbo0W6lfmEpbupJqVLVQ0wJs9TpWWjhKg45iPqD5%2FQQpos%2Fvlb33qvNjm2jOQ6OpsAad1LqBEfd6W3Z5gonZ6etWxwiOH0oiPss0JXvCojCa8wtqjn2LoCI5DyR2XxjpKV%2BRHsPBeE4%2BsTqGWdtRe7dJWumfSx5cwe3idaYGL8ISvRxtD1SNmJGZBTSinlI%2BtaYbRLwntV%2FdJwRRpP5tBkpTRBvar8QawnVtyQf9bSJT705q7AWN5YRySw53BS5m0Sp1%2F61YgKySHJABSVUWmA%2F5SN6%2B1rpLXwaaJrAztQIBmGPEmVdHsKEDArFpfCRUrLQwfOAutYKHLvGw6kn0sdVRKwuE8hN4SOwEKoCQgfAy5ownynz%2BJPMT8%2Bej5vsyMX98z6MTitz1gUqkeYGC6h4PbqXOZqPaGWWFpqMt5%2BPeRFoe38CzdzzukG6VvjEPBlGf48UB8rfFWB6gJuJsTw9iBZOwpdjpcVwrYbPR8BWqT94LPokj56yWR78V2tXlncRNhTKJzC%2FKf4uAouZY6AfCqwKH0tI6JaUG3eUpsDj3BN1stKwjMAXBNAvg1Gb97FhHeMQcDhbO%2BmUgXpwpOiknXL49oMM2I3sAGOqUBJ1UD7nRgSq%2B4Jwkf3w335ARbNS3Fbs6xDd9onfQQrtn4sHHLYbo7k%2FvAfgrUbk3EJW30fOYDbuemPjrW3f6IWNgST0csO5m%2BDKrXk4zabYA10C7aGG7ytg5dpaQt4qyZcTbbe9I01YOFcicQLejz%2BOrbekX2eaC9x3CBEl01zDw8dlZjN3tm0c8GAmLVbFl4xtnqwwxQu9OoRnrIAe20zcssuydo&X-Amz-Signature=7176290f160700e9bf0c1702a9dcb75067e152003831966984a0f85ebdfa5999&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZX2KFB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAW%2FgLvP4YkamU13imho%2BjjNchNwIhAkyCSh5R585D5uAiEArDHsvxavbgBYfZUzHJAfTNLJvf%2FCZp0iqdt6JDJVu4gq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMy%2B1Ew3kn3q%2FSgebircA1pIivqm0Dd%2FUNXdFnQCUWCC9ZX%2FpoGnbo0W6lfmEpbupJqVLVQ0wJs9TpWWjhKg45iPqD5%2FQQpos%2Fvlb33qvNjm2jOQ6OpsAad1LqBEfd6W3Z5gonZ6etWxwiOH0oiPss0JXvCojCa8wtqjn2LoCI5DyR2XxjpKV%2BRHsPBeE4%2BsTqGWdtRe7dJWumfSx5cwe3idaYGL8ISvRxtD1SNmJGZBTSinlI%2BtaYbRLwntV%2FdJwRRpP5tBkpTRBvar8QawnVtyQf9bSJT705q7AWN5YRySw53BS5m0Sp1%2F61YgKySHJABSVUWmA%2F5SN6%2B1rpLXwaaJrAztQIBmGPEmVdHsKEDArFpfCRUrLQwfOAutYKHLvGw6kn0sdVRKwuE8hN4SOwEKoCQgfAy5ownynz%2BJPMT8%2Bej5vsyMX98z6MTitz1gUqkeYGC6h4PbqXOZqPaGWWFpqMt5%2BPeRFoe38CzdzzukG6VvjEPBlGf48UB8rfFWB6gJuJsTw9iBZOwpdjpcVwrYbPR8BWqT94LPokj56yWR78V2tXlncRNhTKJzC%2FKf4uAouZY6AfCqwKH0tI6JaUG3eUpsDj3BN1stKwjMAXBNAvg1Gb97FhHeMQcDhbO%2BmUgXpwpOiknXL49oMM2I3sAGOqUBJ1UD7nRgSq%2B4Jwkf3w335ARbNS3Fbs6xDd9onfQQrtn4sHHLYbo7k%2FvAfgrUbk3EJW30fOYDbuemPjrW3f6IWNgST0csO5m%2BDKrXk4zabYA10C7aGG7ytg5dpaQt4qyZcTbbe9I01YOFcicQLejz%2BOrbekX2eaC9x3CBEl01zDw8dlZjN3tm0c8GAmLVbFl4xtnqwwxQu9OoRnrIAe20zcssuydo&X-Amz-Signature=02c7335c8907e182c9af0ba08e8ee155d2657369f6ae4db410884d79b1095452&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZX2KFB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAW%2FgLvP4YkamU13imho%2BjjNchNwIhAkyCSh5R585D5uAiEArDHsvxavbgBYfZUzHJAfTNLJvf%2FCZp0iqdt6JDJVu4gq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMy%2B1Ew3kn3q%2FSgebircA1pIivqm0Dd%2FUNXdFnQCUWCC9ZX%2FpoGnbo0W6lfmEpbupJqVLVQ0wJs9TpWWjhKg45iPqD5%2FQQpos%2Fvlb33qvNjm2jOQ6OpsAad1LqBEfd6W3Z5gonZ6etWxwiOH0oiPss0JXvCojCa8wtqjn2LoCI5DyR2XxjpKV%2BRHsPBeE4%2BsTqGWdtRe7dJWumfSx5cwe3idaYGL8ISvRxtD1SNmJGZBTSinlI%2BtaYbRLwntV%2FdJwRRpP5tBkpTRBvar8QawnVtyQf9bSJT705q7AWN5YRySw53BS5m0Sp1%2F61YgKySHJABSVUWmA%2F5SN6%2B1rpLXwaaJrAztQIBmGPEmVdHsKEDArFpfCRUrLQwfOAutYKHLvGw6kn0sdVRKwuE8hN4SOwEKoCQgfAy5ownynz%2BJPMT8%2Bej5vsyMX98z6MTitz1gUqkeYGC6h4PbqXOZqPaGWWFpqMt5%2BPeRFoe38CzdzzukG6VvjEPBlGf48UB8rfFWB6gJuJsTw9iBZOwpdjpcVwrYbPR8BWqT94LPokj56yWR78V2tXlncRNhTKJzC%2FKf4uAouZY6AfCqwKH0tI6JaUG3eUpsDj3BN1stKwjMAXBNAvg1Gb97FhHeMQcDhbO%2BmUgXpwpOiknXL49oMM2I3sAGOqUBJ1UD7nRgSq%2B4Jwkf3w335ARbNS3Fbs6xDd9onfQQrtn4sHHLYbo7k%2FvAfgrUbk3EJW30fOYDbuemPjrW3f6IWNgST0csO5m%2BDKrXk4zabYA10C7aGG7ytg5dpaQt4qyZcTbbe9I01YOFcicQLejz%2BOrbekX2eaC9x3CBEl01zDw8dlZjN3tm0c8GAmLVbFl4xtnqwwxQu9OoRnrIAe20zcssuydo&X-Amz-Signature=af7aeec155e9fbfc3d5b6cdeda4f5011d04d5c66172dc160a5a941f129ebd16f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZX2KFB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAW%2FgLvP4YkamU13imho%2BjjNchNwIhAkyCSh5R585D5uAiEArDHsvxavbgBYfZUzHJAfTNLJvf%2FCZp0iqdt6JDJVu4gq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMy%2B1Ew3kn3q%2FSgebircA1pIivqm0Dd%2FUNXdFnQCUWCC9ZX%2FpoGnbo0W6lfmEpbupJqVLVQ0wJs9TpWWjhKg45iPqD5%2FQQpos%2Fvlb33qvNjm2jOQ6OpsAad1LqBEfd6W3Z5gonZ6etWxwiOH0oiPss0JXvCojCa8wtqjn2LoCI5DyR2XxjpKV%2BRHsPBeE4%2BsTqGWdtRe7dJWumfSx5cwe3idaYGL8ISvRxtD1SNmJGZBTSinlI%2BtaYbRLwntV%2FdJwRRpP5tBkpTRBvar8QawnVtyQf9bSJT705q7AWN5YRySw53BS5m0Sp1%2F61YgKySHJABSVUWmA%2F5SN6%2B1rpLXwaaJrAztQIBmGPEmVdHsKEDArFpfCRUrLQwfOAutYKHLvGw6kn0sdVRKwuE8hN4SOwEKoCQgfAy5ownynz%2BJPMT8%2Bej5vsyMX98z6MTitz1gUqkeYGC6h4PbqXOZqPaGWWFpqMt5%2BPeRFoe38CzdzzukG6VvjEPBlGf48UB8rfFWB6gJuJsTw9iBZOwpdjpcVwrYbPR8BWqT94LPokj56yWR78V2tXlncRNhTKJzC%2FKf4uAouZY6AfCqwKH0tI6JaUG3eUpsDj3BN1stKwjMAXBNAvg1Gb97FhHeMQcDhbO%2BmUgXpwpOiknXL49oMM2I3sAGOqUBJ1UD7nRgSq%2B4Jwkf3w335ARbNS3Fbs6xDd9onfQQrtn4sHHLYbo7k%2FvAfgrUbk3EJW30fOYDbuemPjrW3f6IWNgST0csO5m%2BDKrXk4zabYA10C7aGG7ytg5dpaQt4qyZcTbbe9I01YOFcicQLejz%2BOrbekX2eaC9x3CBEl01zDw8dlZjN3tm0c8GAmLVbFl4xtnqwwxQu9OoRnrIAe20zcssuydo&X-Amz-Signature=10bad8ba4074297aec669424f38a65388a7a995e228597c163ba7340df9d95f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZX2KFB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAW%2FgLvP4YkamU13imho%2BjjNchNwIhAkyCSh5R585D5uAiEArDHsvxavbgBYfZUzHJAfTNLJvf%2FCZp0iqdt6JDJVu4gq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMy%2B1Ew3kn3q%2FSgebircA1pIivqm0Dd%2FUNXdFnQCUWCC9ZX%2FpoGnbo0W6lfmEpbupJqVLVQ0wJs9TpWWjhKg45iPqD5%2FQQpos%2Fvlb33qvNjm2jOQ6OpsAad1LqBEfd6W3Z5gonZ6etWxwiOH0oiPss0JXvCojCa8wtqjn2LoCI5DyR2XxjpKV%2BRHsPBeE4%2BsTqGWdtRe7dJWumfSx5cwe3idaYGL8ISvRxtD1SNmJGZBTSinlI%2BtaYbRLwntV%2FdJwRRpP5tBkpTRBvar8QawnVtyQf9bSJT705q7AWN5YRySw53BS5m0Sp1%2F61YgKySHJABSVUWmA%2F5SN6%2B1rpLXwaaJrAztQIBmGPEmVdHsKEDArFpfCRUrLQwfOAutYKHLvGw6kn0sdVRKwuE8hN4SOwEKoCQgfAy5ownynz%2BJPMT8%2Bej5vsyMX98z6MTitz1gUqkeYGC6h4PbqXOZqPaGWWFpqMt5%2BPeRFoe38CzdzzukG6VvjEPBlGf48UB8rfFWB6gJuJsTw9iBZOwpdjpcVwrYbPR8BWqT94LPokj56yWR78V2tXlncRNhTKJzC%2FKf4uAouZY6AfCqwKH0tI6JaUG3eUpsDj3BN1stKwjMAXBNAvg1Gb97FhHeMQcDhbO%2BmUgXpwpOiknXL49oMM2I3sAGOqUBJ1UD7nRgSq%2B4Jwkf3w335ARbNS3Fbs6xDd9onfQQrtn4sHHLYbo7k%2FvAfgrUbk3EJW30fOYDbuemPjrW3f6IWNgST0csO5m%2BDKrXk4zabYA10C7aGG7ytg5dpaQt4qyZcTbbe9I01YOFcicQLejz%2BOrbekX2eaC9x3CBEl01zDw8dlZjN3tm0c8GAmLVbFl4xtnqwwxQu9OoRnrIAe20zcssuydo&X-Amz-Signature=6dd2e785512a6c55fc62939046970b2ca01bc5feab1c62e04a8842a3fa2df799&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAZX2KFB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAW%2FgLvP4YkamU13imho%2BjjNchNwIhAkyCSh5R585D5uAiEArDHsvxavbgBYfZUzHJAfTNLJvf%2FCZp0iqdt6JDJVu4gq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMy%2B1Ew3kn3q%2FSgebircA1pIivqm0Dd%2FUNXdFnQCUWCC9ZX%2FpoGnbo0W6lfmEpbupJqVLVQ0wJs9TpWWjhKg45iPqD5%2FQQpos%2Fvlb33qvNjm2jOQ6OpsAad1LqBEfd6W3Z5gonZ6etWxwiOH0oiPss0JXvCojCa8wtqjn2LoCI5DyR2XxjpKV%2BRHsPBeE4%2BsTqGWdtRe7dJWumfSx5cwe3idaYGL8ISvRxtD1SNmJGZBTSinlI%2BtaYbRLwntV%2FdJwRRpP5tBkpTRBvar8QawnVtyQf9bSJT705q7AWN5YRySw53BS5m0Sp1%2F61YgKySHJABSVUWmA%2F5SN6%2B1rpLXwaaJrAztQIBmGPEmVdHsKEDArFpfCRUrLQwfOAutYKHLvGw6kn0sdVRKwuE8hN4SOwEKoCQgfAy5ownynz%2BJPMT8%2Bej5vsyMX98z6MTitz1gUqkeYGC6h4PbqXOZqPaGWWFpqMt5%2BPeRFoe38CzdzzukG6VvjEPBlGf48UB8rfFWB6gJuJsTw9iBZOwpdjpcVwrYbPR8BWqT94LPokj56yWR78V2tXlncRNhTKJzC%2FKf4uAouZY6AfCqwKH0tI6JaUG3eUpsDj3BN1stKwjMAXBNAvg1Gb97FhHeMQcDhbO%2BmUgXpwpOiknXL49oMM2I3sAGOqUBJ1UD7nRgSq%2B4Jwkf3w335ARbNS3Fbs6xDd9onfQQrtn4sHHLYbo7k%2FvAfgrUbk3EJW30fOYDbuemPjrW3f6IWNgST0csO5m%2BDKrXk4zabYA10C7aGG7ytg5dpaQt4qyZcTbbe9I01YOFcicQLejz%2BOrbekX2eaC9x3CBEl01zDw8dlZjN3tm0c8GAmLVbFl4xtnqwwxQu9OoRnrIAe20zcssuydo&X-Amz-Signature=30b294d904f4b439b8fb7a9ac02a062a8de12dec0fbc131013d178ed1d70d52c&X-Amz-SignedHeaders=host&x-id=GetObject)
