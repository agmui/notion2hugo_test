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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVECO5IY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELM66bd%2BROCPNNBEPqEKmjiuDNORV59OoIIcC8gIRBjAiBpxQdSpLZ2xyMorTq%2Fueh0hTdUzJBBGdtTJgqpFLyTzir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIManXaY4T1Kt4oDoLjKtwDhNZxeVZ5y8t2gN%2BKQsDohnV83R3RtYnVgUJsIH%2B%2BNlV0H%2FBaJijLBXJK7PfyWEeZW%2F1M5LPGrJeBBpKwjsoTE4FKXverHbiBLHNmNQoWKDUWSqeGtFA2MMqn2vlxQH5B%2FANGZN1B6GcxKoDaTkqahzJroB%2FXL7k%2B%2Fpfv%2Fo5yJTkXbfyyixKvac%2Fue5NZc2xkPWruBNl28YZivqAStxyHg677liRk7j%2BpdEeI3WgFi2U%2BCIqF91tiRI46paWyUIcFRUjWmRydp2Fl0%2BqZVs8gbA7d1ups0yTZh%2B6WQ%2Fq47%2BQ3Btv7kcpY64sSGt8l7iDpOPKLTo2Bez9ptttfkc%2F4O%2BNWO4Mz3Jkd9lXL%2FPrVGjD347BB4hfRNd1mysF%2FESvLF7uHUnffJOPLhpHtLPg50mFBjEWPRdImADn%2Bp1mpuMgO6ENCcxn77sf5hzjMfpWqK%2BOEASJo4Pzdg%2BRSr2V6jf%2FJUJSTuCN8Hx6MWstRfZNRcVaOnAjW%2FbED81Rb9v%2Bvwt0Q0kHzQQC78ioJm14G%2BN9ivXO7cwcocrLy8bYSuloL%2Foel%2Fa9e6CAzmYtxJvXFYcXxArdqK3mNg2ltip87kZH0rVUuf3Pu5xur785knK6jnYEKln2SdvB%2FyNcwuMr7wgY6pgHRvV5QdC6EWojIZx3rXgI3YGEAN2soWy3S6KDbLHbnaKDu%2Bz4xzo3wqENBLgl%2Bx2l8aUJZa61ezeuGIjt4mc6o8F8CnbXxQmjiLG4%2BtzLvL6CGPXCaUjdGAXaCkbiyYiDoXDA8r1MpYU0csyTJc%2FI453nV8T4buBM1lk5HZpEfUBYUTR0EhqtBc8r9bsU1OEpYSSB90T%2FWGdEg0iyViZE2r3VXQlLV&X-Amz-Signature=6d35e20a9e5b34f6ea26a5b4d0ce3f050b6d3ae199233c69ad3bf1bb51bce442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVECO5IY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELM66bd%2BROCPNNBEPqEKmjiuDNORV59OoIIcC8gIRBjAiBpxQdSpLZ2xyMorTq%2Fueh0hTdUzJBBGdtTJgqpFLyTzir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIManXaY4T1Kt4oDoLjKtwDhNZxeVZ5y8t2gN%2BKQsDohnV83R3RtYnVgUJsIH%2B%2BNlV0H%2FBaJijLBXJK7PfyWEeZW%2F1M5LPGrJeBBpKwjsoTE4FKXverHbiBLHNmNQoWKDUWSqeGtFA2MMqn2vlxQH5B%2FANGZN1B6GcxKoDaTkqahzJroB%2FXL7k%2B%2Fpfv%2Fo5yJTkXbfyyixKvac%2Fue5NZc2xkPWruBNl28YZivqAStxyHg677liRk7j%2BpdEeI3WgFi2U%2BCIqF91tiRI46paWyUIcFRUjWmRydp2Fl0%2BqZVs8gbA7d1ups0yTZh%2B6WQ%2Fq47%2BQ3Btv7kcpY64sSGt8l7iDpOPKLTo2Bez9ptttfkc%2F4O%2BNWO4Mz3Jkd9lXL%2FPrVGjD347BB4hfRNd1mysF%2FESvLF7uHUnffJOPLhpHtLPg50mFBjEWPRdImADn%2Bp1mpuMgO6ENCcxn77sf5hzjMfpWqK%2BOEASJo4Pzdg%2BRSr2V6jf%2FJUJSTuCN8Hx6MWstRfZNRcVaOnAjW%2FbED81Rb9v%2Bvwt0Q0kHzQQC78ioJm14G%2BN9ivXO7cwcocrLy8bYSuloL%2Foel%2Fa9e6CAzmYtxJvXFYcXxArdqK3mNg2ltip87kZH0rVUuf3Pu5xur785knK6jnYEKln2SdvB%2FyNcwuMr7wgY6pgHRvV5QdC6EWojIZx3rXgI3YGEAN2soWy3S6KDbLHbnaKDu%2Bz4xzo3wqENBLgl%2Bx2l8aUJZa61ezeuGIjt4mc6o8F8CnbXxQmjiLG4%2BtzLvL6CGPXCaUjdGAXaCkbiyYiDoXDA8r1MpYU0csyTJc%2FI453nV8T4buBM1lk5HZpEfUBYUTR0EhqtBc8r9bsU1OEpYSSB90T%2FWGdEg0iyViZE2r3VXQlLV&X-Amz-Signature=09c989fe4d3f001d1257c76aa6dc30ea10002bbc2a90232b45f72d75cf5f1f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVECO5IY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELM66bd%2BROCPNNBEPqEKmjiuDNORV59OoIIcC8gIRBjAiBpxQdSpLZ2xyMorTq%2Fueh0hTdUzJBBGdtTJgqpFLyTzir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIManXaY4T1Kt4oDoLjKtwDhNZxeVZ5y8t2gN%2BKQsDohnV83R3RtYnVgUJsIH%2B%2BNlV0H%2FBaJijLBXJK7PfyWEeZW%2F1M5LPGrJeBBpKwjsoTE4FKXverHbiBLHNmNQoWKDUWSqeGtFA2MMqn2vlxQH5B%2FANGZN1B6GcxKoDaTkqahzJroB%2FXL7k%2B%2Fpfv%2Fo5yJTkXbfyyixKvac%2Fue5NZc2xkPWruBNl28YZivqAStxyHg677liRk7j%2BpdEeI3WgFi2U%2BCIqF91tiRI46paWyUIcFRUjWmRydp2Fl0%2BqZVs8gbA7d1ups0yTZh%2B6WQ%2Fq47%2BQ3Btv7kcpY64sSGt8l7iDpOPKLTo2Bez9ptttfkc%2F4O%2BNWO4Mz3Jkd9lXL%2FPrVGjD347BB4hfRNd1mysF%2FESvLF7uHUnffJOPLhpHtLPg50mFBjEWPRdImADn%2Bp1mpuMgO6ENCcxn77sf5hzjMfpWqK%2BOEASJo4Pzdg%2BRSr2V6jf%2FJUJSTuCN8Hx6MWstRfZNRcVaOnAjW%2FbED81Rb9v%2Bvwt0Q0kHzQQC78ioJm14G%2BN9ivXO7cwcocrLy8bYSuloL%2Foel%2Fa9e6CAzmYtxJvXFYcXxArdqK3mNg2ltip87kZH0rVUuf3Pu5xur785knK6jnYEKln2SdvB%2FyNcwuMr7wgY6pgHRvV5QdC6EWojIZx3rXgI3YGEAN2soWy3S6KDbLHbnaKDu%2Bz4xzo3wqENBLgl%2Bx2l8aUJZa61ezeuGIjt4mc6o8F8CnbXxQmjiLG4%2BtzLvL6CGPXCaUjdGAXaCkbiyYiDoXDA8r1MpYU0csyTJc%2FI453nV8T4buBM1lk5HZpEfUBYUTR0EhqtBc8r9bsU1OEpYSSB90T%2FWGdEg0iyViZE2r3VXQlLV&X-Amz-Signature=905bcf1b6e7e26848dbdfdb78caa991fdc833b1c189e5dd02ffd88eb7da790b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVECO5IY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELM66bd%2BROCPNNBEPqEKmjiuDNORV59OoIIcC8gIRBjAiBpxQdSpLZ2xyMorTq%2Fueh0hTdUzJBBGdtTJgqpFLyTzir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIManXaY4T1Kt4oDoLjKtwDhNZxeVZ5y8t2gN%2BKQsDohnV83R3RtYnVgUJsIH%2B%2BNlV0H%2FBaJijLBXJK7PfyWEeZW%2F1M5LPGrJeBBpKwjsoTE4FKXverHbiBLHNmNQoWKDUWSqeGtFA2MMqn2vlxQH5B%2FANGZN1B6GcxKoDaTkqahzJroB%2FXL7k%2B%2Fpfv%2Fo5yJTkXbfyyixKvac%2Fue5NZc2xkPWruBNl28YZivqAStxyHg677liRk7j%2BpdEeI3WgFi2U%2BCIqF91tiRI46paWyUIcFRUjWmRydp2Fl0%2BqZVs8gbA7d1ups0yTZh%2B6WQ%2Fq47%2BQ3Btv7kcpY64sSGt8l7iDpOPKLTo2Bez9ptttfkc%2F4O%2BNWO4Mz3Jkd9lXL%2FPrVGjD347BB4hfRNd1mysF%2FESvLF7uHUnffJOPLhpHtLPg50mFBjEWPRdImADn%2Bp1mpuMgO6ENCcxn77sf5hzjMfpWqK%2BOEASJo4Pzdg%2BRSr2V6jf%2FJUJSTuCN8Hx6MWstRfZNRcVaOnAjW%2FbED81Rb9v%2Bvwt0Q0kHzQQC78ioJm14G%2BN9ivXO7cwcocrLy8bYSuloL%2Foel%2Fa9e6CAzmYtxJvXFYcXxArdqK3mNg2ltip87kZH0rVUuf3Pu5xur785knK6jnYEKln2SdvB%2FyNcwuMr7wgY6pgHRvV5QdC6EWojIZx3rXgI3YGEAN2soWy3S6KDbLHbnaKDu%2Bz4xzo3wqENBLgl%2Bx2l8aUJZa61ezeuGIjt4mc6o8F8CnbXxQmjiLG4%2BtzLvL6CGPXCaUjdGAXaCkbiyYiDoXDA8r1MpYU0csyTJc%2FI453nV8T4buBM1lk5HZpEfUBYUTR0EhqtBc8r9bsU1OEpYSSB90T%2FWGdEg0iyViZE2r3VXQlLV&X-Amz-Signature=cdeb675aa56bac69b63ef087a20f7d762748226487063debc9c6ad3f9ff5f6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVECO5IY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELM66bd%2BROCPNNBEPqEKmjiuDNORV59OoIIcC8gIRBjAiBpxQdSpLZ2xyMorTq%2Fueh0hTdUzJBBGdtTJgqpFLyTzir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIManXaY4T1Kt4oDoLjKtwDhNZxeVZ5y8t2gN%2BKQsDohnV83R3RtYnVgUJsIH%2B%2BNlV0H%2FBaJijLBXJK7PfyWEeZW%2F1M5LPGrJeBBpKwjsoTE4FKXverHbiBLHNmNQoWKDUWSqeGtFA2MMqn2vlxQH5B%2FANGZN1B6GcxKoDaTkqahzJroB%2FXL7k%2B%2Fpfv%2Fo5yJTkXbfyyixKvac%2Fue5NZc2xkPWruBNl28YZivqAStxyHg677liRk7j%2BpdEeI3WgFi2U%2BCIqF91tiRI46paWyUIcFRUjWmRydp2Fl0%2BqZVs8gbA7d1ups0yTZh%2B6WQ%2Fq47%2BQ3Btv7kcpY64sSGt8l7iDpOPKLTo2Bez9ptttfkc%2F4O%2BNWO4Mz3Jkd9lXL%2FPrVGjD347BB4hfRNd1mysF%2FESvLF7uHUnffJOPLhpHtLPg50mFBjEWPRdImADn%2Bp1mpuMgO6ENCcxn77sf5hzjMfpWqK%2BOEASJo4Pzdg%2BRSr2V6jf%2FJUJSTuCN8Hx6MWstRfZNRcVaOnAjW%2FbED81Rb9v%2Bvwt0Q0kHzQQC78ioJm14G%2BN9ivXO7cwcocrLy8bYSuloL%2Foel%2Fa9e6CAzmYtxJvXFYcXxArdqK3mNg2ltip87kZH0rVUuf3Pu5xur785knK6jnYEKln2SdvB%2FyNcwuMr7wgY6pgHRvV5QdC6EWojIZx3rXgI3YGEAN2soWy3S6KDbLHbnaKDu%2Bz4xzo3wqENBLgl%2Bx2l8aUJZa61ezeuGIjt4mc6o8F8CnbXxQmjiLG4%2BtzLvL6CGPXCaUjdGAXaCkbiyYiDoXDA8r1MpYU0csyTJc%2FI453nV8T4buBM1lk5HZpEfUBYUTR0EhqtBc8r9bsU1OEpYSSB90T%2FWGdEg0iyViZE2r3VXQlLV&X-Amz-Signature=fc0882766d6b48831af1d102d3843470384fdb1f898667a12783bafced9b73ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVECO5IY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELM66bd%2BROCPNNBEPqEKmjiuDNORV59OoIIcC8gIRBjAiBpxQdSpLZ2xyMorTq%2Fueh0hTdUzJBBGdtTJgqpFLyTzir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIManXaY4T1Kt4oDoLjKtwDhNZxeVZ5y8t2gN%2BKQsDohnV83R3RtYnVgUJsIH%2B%2BNlV0H%2FBaJijLBXJK7PfyWEeZW%2F1M5LPGrJeBBpKwjsoTE4FKXverHbiBLHNmNQoWKDUWSqeGtFA2MMqn2vlxQH5B%2FANGZN1B6GcxKoDaTkqahzJroB%2FXL7k%2B%2Fpfv%2Fo5yJTkXbfyyixKvac%2Fue5NZc2xkPWruBNl28YZivqAStxyHg677liRk7j%2BpdEeI3WgFi2U%2BCIqF91tiRI46paWyUIcFRUjWmRydp2Fl0%2BqZVs8gbA7d1ups0yTZh%2B6WQ%2Fq47%2BQ3Btv7kcpY64sSGt8l7iDpOPKLTo2Bez9ptttfkc%2F4O%2BNWO4Mz3Jkd9lXL%2FPrVGjD347BB4hfRNd1mysF%2FESvLF7uHUnffJOPLhpHtLPg50mFBjEWPRdImADn%2Bp1mpuMgO6ENCcxn77sf5hzjMfpWqK%2BOEASJo4Pzdg%2BRSr2V6jf%2FJUJSTuCN8Hx6MWstRfZNRcVaOnAjW%2FbED81Rb9v%2Bvwt0Q0kHzQQC78ioJm14G%2BN9ivXO7cwcocrLy8bYSuloL%2Foel%2Fa9e6CAzmYtxJvXFYcXxArdqK3mNg2ltip87kZH0rVUuf3Pu5xur785knK6jnYEKln2SdvB%2FyNcwuMr7wgY6pgHRvV5QdC6EWojIZx3rXgI3YGEAN2soWy3S6KDbLHbnaKDu%2Bz4xzo3wqENBLgl%2Bx2l8aUJZa61ezeuGIjt4mc6o8F8CnbXxQmjiLG4%2BtzLvL6CGPXCaUjdGAXaCkbiyYiDoXDA8r1MpYU0csyTJc%2FI453nV8T4buBM1lk5HZpEfUBYUTR0EhqtBc8r9bsU1OEpYSSB90T%2FWGdEg0iyViZE2r3VXQlLV&X-Amz-Signature=4cd168170472550bfcab09f99ce8058327bb16442462ace7e894b08402b8e065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
