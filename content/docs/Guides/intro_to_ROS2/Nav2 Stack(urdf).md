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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEDFKTP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICEHbrFk%2FHGREhNXZWAm%2Bw0HO1e5nKx%2Bt%2FzP569HGJghAiEAunnh1%2Bf%2BWfQURMLot2JVWLWDNGU42BaACiD8OrTDUo0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA9Bsp224qywcvzpHCrcA2hsdugTU2azVicodOlYR64g2tGfyR6hxD8hDalUlC7OH6ORWyvSRAPqevLRQWnDb4mNSRNndkClYFu%2BBe39%2B87uWhg2I14noBDcn5eWSl5Gnj4vaBaDj80t7BtEejsr4sxDhlYCWgQ7ZNELMLUiRy7MEYGLmZpJ5K9PWYT%2B2UD2f18%2F%2BZv4oQsmJFrY1gMR4oUtBlHquc1Q8J5XZQs8KZ7ACwPLq78F9SXkfKJNSrVzLXgqE4MRr0hRBO9QUayRl7rKPQ414n43acogSYKtu1ZM%2FmISF%2Fw7pCFbPmECNxXuo7KQdb442qVRM4r29IrhUtQtEo6o955rm0XJf9mDh9wcS9%2FHyP2zOSUWTXXMTXQAHxYGAoPeNbEyMKLNhHCuJKnckC7CzPBSdylhDQDiHGCLgUu7CJE7wudB7TEuN8xyD4gMn7%2FsDuiY7kmNcxzLuar30YMmo3XOgwyO9EOfWBr2DEY9OsDvWYsxCmJ%2FQWxeYr9VZD7coZTY5xNCVBowFas%2BVEOR34%2BSGAcHJ8bhMu6gox5wYlXhHdoyKaVn89bSrTNyrO%2BZ3RjJUsMbeu28bugXepuA5JK3KZazP%2B7Oii9k4Oijhi%2B2ZWKuaW38YDUMJeQ9QST9kSitwWDWMNz1w70GOqUB2M2%2Bb6IC0xZnMK7n4CrauEjyY9filqFR53UTD%2F%2FTcaV7InGGBFIoTYwAlFjWwK0wU0J5jKhqHJ3oDzWiGVLvUSlPL81kGrOnJp1WIWufGJswikPTP92GSnNe3NbPc%2FcVYRuW6ldb3D3yUf0kqOQL%2BJXK7mZ7sMAfJH6x1PQZwrAXaosDXzQyBa7Xp%2B4tWLB0sZ6Aod0CI%2B%2FQPb0qrInauUV291Fl&X-Amz-Signature=174d6896cc5f0d2fb4e2e30dce42eae91305996230fc0cf98294b57b19acf45a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEDFKTP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICEHbrFk%2FHGREhNXZWAm%2Bw0HO1e5nKx%2Bt%2FzP569HGJghAiEAunnh1%2Bf%2BWfQURMLot2JVWLWDNGU42BaACiD8OrTDUo0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA9Bsp224qywcvzpHCrcA2hsdugTU2azVicodOlYR64g2tGfyR6hxD8hDalUlC7OH6ORWyvSRAPqevLRQWnDb4mNSRNndkClYFu%2BBe39%2B87uWhg2I14noBDcn5eWSl5Gnj4vaBaDj80t7BtEejsr4sxDhlYCWgQ7ZNELMLUiRy7MEYGLmZpJ5K9PWYT%2B2UD2f18%2F%2BZv4oQsmJFrY1gMR4oUtBlHquc1Q8J5XZQs8KZ7ACwPLq78F9SXkfKJNSrVzLXgqE4MRr0hRBO9QUayRl7rKPQ414n43acogSYKtu1ZM%2FmISF%2Fw7pCFbPmECNxXuo7KQdb442qVRM4r29IrhUtQtEo6o955rm0XJf9mDh9wcS9%2FHyP2zOSUWTXXMTXQAHxYGAoPeNbEyMKLNhHCuJKnckC7CzPBSdylhDQDiHGCLgUu7CJE7wudB7TEuN8xyD4gMn7%2FsDuiY7kmNcxzLuar30YMmo3XOgwyO9EOfWBr2DEY9OsDvWYsxCmJ%2FQWxeYr9VZD7coZTY5xNCVBowFas%2BVEOR34%2BSGAcHJ8bhMu6gox5wYlXhHdoyKaVn89bSrTNyrO%2BZ3RjJUsMbeu28bugXepuA5JK3KZazP%2B7Oii9k4Oijhi%2B2ZWKuaW38YDUMJeQ9QST9kSitwWDWMNz1w70GOqUB2M2%2Bb6IC0xZnMK7n4CrauEjyY9filqFR53UTD%2F%2FTcaV7InGGBFIoTYwAlFjWwK0wU0J5jKhqHJ3oDzWiGVLvUSlPL81kGrOnJp1WIWufGJswikPTP92GSnNe3NbPc%2FcVYRuW6ldb3D3yUf0kqOQL%2BJXK7mZ7sMAfJH6x1PQZwrAXaosDXzQyBa7Xp%2B4tWLB0sZ6Aod0CI%2B%2FQPb0qrInauUV291Fl&X-Amz-Signature=0e09e042004e03cd42b66948febbd4b2b1a9b64ed9eb8041ac1c683f9a36207c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEDFKTP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICEHbrFk%2FHGREhNXZWAm%2Bw0HO1e5nKx%2Bt%2FzP569HGJghAiEAunnh1%2Bf%2BWfQURMLot2JVWLWDNGU42BaACiD8OrTDUo0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA9Bsp224qywcvzpHCrcA2hsdugTU2azVicodOlYR64g2tGfyR6hxD8hDalUlC7OH6ORWyvSRAPqevLRQWnDb4mNSRNndkClYFu%2BBe39%2B87uWhg2I14noBDcn5eWSl5Gnj4vaBaDj80t7BtEejsr4sxDhlYCWgQ7ZNELMLUiRy7MEYGLmZpJ5K9PWYT%2B2UD2f18%2F%2BZv4oQsmJFrY1gMR4oUtBlHquc1Q8J5XZQs8KZ7ACwPLq78F9SXkfKJNSrVzLXgqE4MRr0hRBO9QUayRl7rKPQ414n43acogSYKtu1ZM%2FmISF%2Fw7pCFbPmECNxXuo7KQdb442qVRM4r29IrhUtQtEo6o955rm0XJf9mDh9wcS9%2FHyP2zOSUWTXXMTXQAHxYGAoPeNbEyMKLNhHCuJKnckC7CzPBSdylhDQDiHGCLgUu7CJE7wudB7TEuN8xyD4gMn7%2FsDuiY7kmNcxzLuar30YMmo3XOgwyO9EOfWBr2DEY9OsDvWYsxCmJ%2FQWxeYr9VZD7coZTY5xNCVBowFas%2BVEOR34%2BSGAcHJ8bhMu6gox5wYlXhHdoyKaVn89bSrTNyrO%2BZ3RjJUsMbeu28bugXepuA5JK3KZazP%2B7Oii9k4Oijhi%2B2ZWKuaW38YDUMJeQ9QST9kSitwWDWMNz1w70GOqUB2M2%2Bb6IC0xZnMK7n4CrauEjyY9filqFR53UTD%2F%2FTcaV7InGGBFIoTYwAlFjWwK0wU0J5jKhqHJ3oDzWiGVLvUSlPL81kGrOnJp1WIWufGJswikPTP92GSnNe3NbPc%2FcVYRuW6ldb3D3yUf0kqOQL%2BJXK7mZ7sMAfJH6x1PQZwrAXaosDXzQyBa7Xp%2B4tWLB0sZ6Aod0CI%2B%2FQPb0qrInauUV291Fl&X-Amz-Signature=0cec468cd0e3dbacd3200669da43e17c51ce1613577274481cbb1689ff23aa4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEDFKTP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICEHbrFk%2FHGREhNXZWAm%2Bw0HO1e5nKx%2Bt%2FzP569HGJghAiEAunnh1%2Bf%2BWfQURMLot2JVWLWDNGU42BaACiD8OrTDUo0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA9Bsp224qywcvzpHCrcA2hsdugTU2azVicodOlYR64g2tGfyR6hxD8hDalUlC7OH6ORWyvSRAPqevLRQWnDb4mNSRNndkClYFu%2BBe39%2B87uWhg2I14noBDcn5eWSl5Gnj4vaBaDj80t7BtEejsr4sxDhlYCWgQ7ZNELMLUiRy7MEYGLmZpJ5K9PWYT%2B2UD2f18%2F%2BZv4oQsmJFrY1gMR4oUtBlHquc1Q8J5XZQs8KZ7ACwPLq78F9SXkfKJNSrVzLXgqE4MRr0hRBO9QUayRl7rKPQ414n43acogSYKtu1ZM%2FmISF%2Fw7pCFbPmECNxXuo7KQdb442qVRM4r29IrhUtQtEo6o955rm0XJf9mDh9wcS9%2FHyP2zOSUWTXXMTXQAHxYGAoPeNbEyMKLNhHCuJKnckC7CzPBSdylhDQDiHGCLgUu7CJE7wudB7TEuN8xyD4gMn7%2FsDuiY7kmNcxzLuar30YMmo3XOgwyO9EOfWBr2DEY9OsDvWYsxCmJ%2FQWxeYr9VZD7coZTY5xNCVBowFas%2BVEOR34%2BSGAcHJ8bhMu6gox5wYlXhHdoyKaVn89bSrTNyrO%2BZ3RjJUsMbeu28bugXepuA5JK3KZazP%2B7Oii9k4Oijhi%2B2ZWKuaW38YDUMJeQ9QST9kSitwWDWMNz1w70GOqUB2M2%2Bb6IC0xZnMK7n4CrauEjyY9filqFR53UTD%2F%2FTcaV7InGGBFIoTYwAlFjWwK0wU0J5jKhqHJ3oDzWiGVLvUSlPL81kGrOnJp1WIWufGJswikPTP92GSnNe3NbPc%2FcVYRuW6ldb3D3yUf0kqOQL%2BJXK7mZ7sMAfJH6x1PQZwrAXaosDXzQyBa7Xp%2B4tWLB0sZ6Aod0CI%2B%2FQPb0qrInauUV291Fl&X-Amz-Signature=f9a0c2a2f3533bb12eb05e4ce0907924aced03886da2b5b3acb252731bb973cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEDFKTP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICEHbrFk%2FHGREhNXZWAm%2Bw0HO1e5nKx%2Bt%2FzP569HGJghAiEAunnh1%2Bf%2BWfQURMLot2JVWLWDNGU42BaACiD8OrTDUo0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA9Bsp224qywcvzpHCrcA2hsdugTU2azVicodOlYR64g2tGfyR6hxD8hDalUlC7OH6ORWyvSRAPqevLRQWnDb4mNSRNndkClYFu%2BBe39%2B87uWhg2I14noBDcn5eWSl5Gnj4vaBaDj80t7BtEejsr4sxDhlYCWgQ7ZNELMLUiRy7MEYGLmZpJ5K9PWYT%2B2UD2f18%2F%2BZv4oQsmJFrY1gMR4oUtBlHquc1Q8J5XZQs8KZ7ACwPLq78F9SXkfKJNSrVzLXgqE4MRr0hRBO9QUayRl7rKPQ414n43acogSYKtu1ZM%2FmISF%2Fw7pCFbPmECNxXuo7KQdb442qVRM4r29IrhUtQtEo6o955rm0XJf9mDh9wcS9%2FHyP2zOSUWTXXMTXQAHxYGAoPeNbEyMKLNhHCuJKnckC7CzPBSdylhDQDiHGCLgUu7CJE7wudB7TEuN8xyD4gMn7%2FsDuiY7kmNcxzLuar30YMmo3XOgwyO9EOfWBr2DEY9OsDvWYsxCmJ%2FQWxeYr9VZD7coZTY5xNCVBowFas%2BVEOR34%2BSGAcHJ8bhMu6gox5wYlXhHdoyKaVn89bSrTNyrO%2BZ3RjJUsMbeu28bugXepuA5JK3KZazP%2B7Oii9k4Oijhi%2B2ZWKuaW38YDUMJeQ9QST9kSitwWDWMNz1w70GOqUB2M2%2Bb6IC0xZnMK7n4CrauEjyY9filqFR53UTD%2F%2FTcaV7InGGBFIoTYwAlFjWwK0wU0J5jKhqHJ3oDzWiGVLvUSlPL81kGrOnJp1WIWufGJswikPTP92GSnNe3NbPc%2FcVYRuW6ldb3D3yUf0kqOQL%2BJXK7mZ7sMAfJH6x1PQZwrAXaosDXzQyBa7Xp%2B4tWLB0sZ6Aod0CI%2B%2FQPb0qrInauUV291Fl&X-Amz-Signature=793160e8c4d7e0bd31af321f94da2a2b65dfd987d48fe9e3128eee7303f1b425&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEDFKTP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICEHbrFk%2FHGREhNXZWAm%2Bw0HO1e5nKx%2Bt%2FzP569HGJghAiEAunnh1%2Bf%2BWfQURMLot2JVWLWDNGU42BaACiD8OrTDUo0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA9Bsp224qywcvzpHCrcA2hsdugTU2azVicodOlYR64g2tGfyR6hxD8hDalUlC7OH6ORWyvSRAPqevLRQWnDb4mNSRNndkClYFu%2BBe39%2B87uWhg2I14noBDcn5eWSl5Gnj4vaBaDj80t7BtEejsr4sxDhlYCWgQ7ZNELMLUiRy7MEYGLmZpJ5K9PWYT%2B2UD2f18%2F%2BZv4oQsmJFrY1gMR4oUtBlHquc1Q8J5XZQs8KZ7ACwPLq78F9SXkfKJNSrVzLXgqE4MRr0hRBO9QUayRl7rKPQ414n43acogSYKtu1ZM%2FmISF%2Fw7pCFbPmECNxXuo7KQdb442qVRM4r29IrhUtQtEo6o955rm0XJf9mDh9wcS9%2FHyP2zOSUWTXXMTXQAHxYGAoPeNbEyMKLNhHCuJKnckC7CzPBSdylhDQDiHGCLgUu7CJE7wudB7TEuN8xyD4gMn7%2FsDuiY7kmNcxzLuar30YMmo3XOgwyO9EOfWBr2DEY9OsDvWYsxCmJ%2FQWxeYr9VZD7coZTY5xNCVBowFas%2BVEOR34%2BSGAcHJ8bhMu6gox5wYlXhHdoyKaVn89bSrTNyrO%2BZ3RjJUsMbeu28bugXepuA5JK3KZazP%2B7Oii9k4Oijhi%2B2ZWKuaW38YDUMJeQ9QST9kSitwWDWMNz1w70GOqUB2M2%2Bb6IC0xZnMK7n4CrauEjyY9filqFR53UTD%2F%2FTcaV7InGGBFIoTYwAlFjWwK0wU0J5jKhqHJ3oDzWiGVLvUSlPL81kGrOnJp1WIWufGJswikPTP92GSnNe3NbPc%2FcVYRuW6ldb3D3yUf0kqOQL%2BJXK7mZ7sMAfJH6x1PQZwrAXaosDXzQyBa7Xp%2B4tWLB0sZ6Aod0CI%2B%2FQPb0qrInauUV291Fl&X-Amz-Signature=516c68c955a1a9ea2e66193278f6e520629eb7485d2d89b4a00df0ba0367b0c2&X-Amz-SignedHeaders=host&x-id=GetObject)
