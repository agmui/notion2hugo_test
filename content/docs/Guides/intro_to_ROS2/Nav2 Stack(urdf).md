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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YXXK7U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3qfanP0kuSGrgfreB%2Frg7CqzzGNxPn0A3hpM8Cv4pAIgM8hrHaXKP%2B%2FhHJnXHO5gXwzEBAd8OnN0DAAitQs%2By7gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFUVuMadSI67n1cRwCrcA1PxRX2B9iZKqPejMO9XriloLnW8e8lqRJaDfKJOSu6tZ95wBfZVtX0hu5LCPe64OwEgV%2BDflN6Z8iWr3rz%2BmS086UO2uQf6I%2F1G0AxEovB1QeolvX878ERCKYLIM1iTxlzVzJvSAxPnXFhxhnAl2wNjRHSSip%2Ft7tRvCdF3KIx35Z0aVlJsgPJCpQt9OCpP5APBf77sIvJsPVQGOFGQPisAW93OFWD0rUIgVuDI6FUZ0Yw4V5ZCNagx%2Fx7nBETmlk5NH0GUWJNWV7hW1q3A0lCB3o209iAWGfzsBYh10yTzfD4kFkCI%2Bg%2B646DVmJTWcNNLA%2FZGG9D6xeFEYdfmWLaXqRF3jJAlTe9MjOaMoKnSZxcWL%2FAWDFeRfuSwbeHtdzDwZGAygAdtRgRyac8SXuVvFXrTcvpPdaZyjYchKVc4cWny9i3uyu%2BRme1h6ofTm2n4ZqD%2BoH9xlo%2Bc955ccwkmj41sqy5733EKrdS7Fj6Z2Ut2AU7qx%2FiXBpqh5j1l5KZAdSjRMzt5MEauPM2n7eN2%2BBzuXsiotGL0NefDCwWpfVJoJmNhl07GoU4dM2z0L1Gz7P%2B359tY0pujYZPbReGwiD%2B%2FjTu7Pv0ukSWcqj8OWUXMVg7rnpf3g6A5MLaL4L4GOqUBxwOH4vy1ajWcB8cTMmIFDc0IsiYo%2Fs5%2F9tMtJiNufOHEwJT4Poon%2FOw%2FeVTmxX0KiyI0ITRJ1ha8dsHmeoHegBXWlYHfR1qJ6JU9n9%2FQkQMyiGOp8gG5zmO73oYYM26gvKEMMi6bag3NPgne6odpTKYUr8pg8ZEsFnyXQ829AMF96zWUd%2FragN08sviIcIrIrTU4Xn8QO7shSDLGGPpL%2Bgb6mA7A&X-Amz-Signature=16f6edaf45643c61c725d4777b683bd110776fddd733a28046f20e4b885213e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YXXK7U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3qfanP0kuSGrgfreB%2Frg7CqzzGNxPn0A3hpM8Cv4pAIgM8hrHaXKP%2B%2FhHJnXHO5gXwzEBAd8OnN0DAAitQs%2By7gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFUVuMadSI67n1cRwCrcA1PxRX2B9iZKqPejMO9XriloLnW8e8lqRJaDfKJOSu6tZ95wBfZVtX0hu5LCPe64OwEgV%2BDflN6Z8iWr3rz%2BmS086UO2uQf6I%2F1G0AxEovB1QeolvX878ERCKYLIM1iTxlzVzJvSAxPnXFhxhnAl2wNjRHSSip%2Ft7tRvCdF3KIx35Z0aVlJsgPJCpQt9OCpP5APBf77sIvJsPVQGOFGQPisAW93OFWD0rUIgVuDI6FUZ0Yw4V5ZCNagx%2Fx7nBETmlk5NH0GUWJNWV7hW1q3A0lCB3o209iAWGfzsBYh10yTzfD4kFkCI%2Bg%2B646DVmJTWcNNLA%2FZGG9D6xeFEYdfmWLaXqRF3jJAlTe9MjOaMoKnSZxcWL%2FAWDFeRfuSwbeHtdzDwZGAygAdtRgRyac8SXuVvFXrTcvpPdaZyjYchKVc4cWny9i3uyu%2BRme1h6ofTm2n4ZqD%2BoH9xlo%2Bc955ccwkmj41sqy5733EKrdS7Fj6Z2Ut2AU7qx%2FiXBpqh5j1l5KZAdSjRMzt5MEauPM2n7eN2%2BBzuXsiotGL0NefDCwWpfVJoJmNhl07GoU4dM2z0L1Gz7P%2B359tY0pujYZPbReGwiD%2B%2FjTu7Pv0ukSWcqj8OWUXMVg7rnpf3g6A5MLaL4L4GOqUBxwOH4vy1ajWcB8cTMmIFDc0IsiYo%2Fs5%2F9tMtJiNufOHEwJT4Poon%2FOw%2FeVTmxX0KiyI0ITRJ1ha8dsHmeoHegBXWlYHfR1qJ6JU9n9%2FQkQMyiGOp8gG5zmO73oYYM26gvKEMMi6bag3NPgne6odpTKYUr8pg8ZEsFnyXQ829AMF96zWUd%2FragN08sviIcIrIrTU4Xn8QO7shSDLGGPpL%2Bgb6mA7A&X-Amz-Signature=3525566ac35e5834b5f6eaec6eea7bf74d247fc4e7589bca9595c4e5de4f59aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YXXK7U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3qfanP0kuSGrgfreB%2Frg7CqzzGNxPn0A3hpM8Cv4pAIgM8hrHaXKP%2B%2FhHJnXHO5gXwzEBAd8OnN0DAAitQs%2By7gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFUVuMadSI67n1cRwCrcA1PxRX2B9iZKqPejMO9XriloLnW8e8lqRJaDfKJOSu6tZ95wBfZVtX0hu5LCPe64OwEgV%2BDflN6Z8iWr3rz%2BmS086UO2uQf6I%2F1G0AxEovB1QeolvX878ERCKYLIM1iTxlzVzJvSAxPnXFhxhnAl2wNjRHSSip%2Ft7tRvCdF3KIx35Z0aVlJsgPJCpQt9OCpP5APBf77sIvJsPVQGOFGQPisAW93OFWD0rUIgVuDI6FUZ0Yw4V5ZCNagx%2Fx7nBETmlk5NH0GUWJNWV7hW1q3A0lCB3o209iAWGfzsBYh10yTzfD4kFkCI%2Bg%2B646DVmJTWcNNLA%2FZGG9D6xeFEYdfmWLaXqRF3jJAlTe9MjOaMoKnSZxcWL%2FAWDFeRfuSwbeHtdzDwZGAygAdtRgRyac8SXuVvFXrTcvpPdaZyjYchKVc4cWny9i3uyu%2BRme1h6ofTm2n4ZqD%2BoH9xlo%2Bc955ccwkmj41sqy5733EKrdS7Fj6Z2Ut2AU7qx%2FiXBpqh5j1l5KZAdSjRMzt5MEauPM2n7eN2%2BBzuXsiotGL0NefDCwWpfVJoJmNhl07GoU4dM2z0L1Gz7P%2B359tY0pujYZPbReGwiD%2B%2FjTu7Pv0ukSWcqj8OWUXMVg7rnpf3g6A5MLaL4L4GOqUBxwOH4vy1ajWcB8cTMmIFDc0IsiYo%2Fs5%2F9tMtJiNufOHEwJT4Poon%2FOw%2FeVTmxX0KiyI0ITRJ1ha8dsHmeoHegBXWlYHfR1qJ6JU9n9%2FQkQMyiGOp8gG5zmO73oYYM26gvKEMMi6bag3NPgne6odpTKYUr8pg8ZEsFnyXQ829AMF96zWUd%2FragN08sviIcIrIrTU4Xn8QO7shSDLGGPpL%2Bgb6mA7A&X-Amz-Signature=411a3a3de2415d0d6929e5da357cec4c3759d034e93ce1517777dfe0fc79c8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YXXK7U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3qfanP0kuSGrgfreB%2Frg7CqzzGNxPn0A3hpM8Cv4pAIgM8hrHaXKP%2B%2FhHJnXHO5gXwzEBAd8OnN0DAAitQs%2By7gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFUVuMadSI67n1cRwCrcA1PxRX2B9iZKqPejMO9XriloLnW8e8lqRJaDfKJOSu6tZ95wBfZVtX0hu5LCPe64OwEgV%2BDflN6Z8iWr3rz%2BmS086UO2uQf6I%2F1G0AxEovB1QeolvX878ERCKYLIM1iTxlzVzJvSAxPnXFhxhnAl2wNjRHSSip%2Ft7tRvCdF3KIx35Z0aVlJsgPJCpQt9OCpP5APBf77sIvJsPVQGOFGQPisAW93OFWD0rUIgVuDI6FUZ0Yw4V5ZCNagx%2Fx7nBETmlk5NH0GUWJNWV7hW1q3A0lCB3o209iAWGfzsBYh10yTzfD4kFkCI%2Bg%2B646DVmJTWcNNLA%2FZGG9D6xeFEYdfmWLaXqRF3jJAlTe9MjOaMoKnSZxcWL%2FAWDFeRfuSwbeHtdzDwZGAygAdtRgRyac8SXuVvFXrTcvpPdaZyjYchKVc4cWny9i3uyu%2BRme1h6ofTm2n4ZqD%2BoH9xlo%2Bc955ccwkmj41sqy5733EKrdS7Fj6Z2Ut2AU7qx%2FiXBpqh5j1l5KZAdSjRMzt5MEauPM2n7eN2%2BBzuXsiotGL0NefDCwWpfVJoJmNhl07GoU4dM2z0L1Gz7P%2B359tY0pujYZPbReGwiD%2B%2FjTu7Pv0ukSWcqj8OWUXMVg7rnpf3g6A5MLaL4L4GOqUBxwOH4vy1ajWcB8cTMmIFDc0IsiYo%2Fs5%2F9tMtJiNufOHEwJT4Poon%2FOw%2FeVTmxX0KiyI0ITRJ1ha8dsHmeoHegBXWlYHfR1qJ6JU9n9%2FQkQMyiGOp8gG5zmO73oYYM26gvKEMMi6bag3NPgne6odpTKYUr8pg8ZEsFnyXQ829AMF96zWUd%2FragN08sviIcIrIrTU4Xn8QO7shSDLGGPpL%2Bgb6mA7A&X-Amz-Signature=ceef159dd7436f186dd43a8166e7b6432c4a52a3cd028d6c8c1157895daefefd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YXXK7U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3qfanP0kuSGrgfreB%2Frg7CqzzGNxPn0A3hpM8Cv4pAIgM8hrHaXKP%2B%2FhHJnXHO5gXwzEBAd8OnN0DAAitQs%2By7gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFUVuMadSI67n1cRwCrcA1PxRX2B9iZKqPejMO9XriloLnW8e8lqRJaDfKJOSu6tZ95wBfZVtX0hu5LCPe64OwEgV%2BDflN6Z8iWr3rz%2BmS086UO2uQf6I%2F1G0AxEovB1QeolvX878ERCKYLIM1iTxlzVzJvSAxPnXFhxhnAl2wNjRHSSip%2Ft7tRvCdF3KIx35Z0aVlJsgPJCpQt9OCpP5APBf77sIvJsPVQGOFGQPisAW93OFWD0rUIgVuDI6FUZ0Yw4V5ZCNagx%2Fx7nBETmlk5NH0GUWJNWV7hW1q3A0lCB3o209iAWGfzsBYh10yTzfD4kFkCI%2Bg%2B646DVmJTWcNNLA%2FZGG9D6xeFEYdfmWLaXqRF3jJAlTe9MjOaMoKnSZxcWL%2FAWDFeRfuSwbeHtdzDwZGAygAdtRgRyac8SXuVvFXrTcvpPdaZyjYchKVc4cWny9i3uyu%2BRme1h6ofTm2n4ZqD%2BoH9xlo%2Bc955ccwkmj41sqy5733EKrdS7Fj6Z2Ut2AU7qx%2FiXBpqh5j1l5KZAdSjRMzt5MEauPM2n7eN2%2BBzuXsiotGL0NefDCwWpfVJoJmNhl07GoU4dM2z0L1Gz7P%2B359tY0pujYZPbReGwiD%2B%2FjTu7Pv0ukSWcqj8OWUXMVg7rnpf3g6A5MLaL4L4GOqUBxwOH4vy1ajWcB8cTMmIFDc0IsiYo%2Fs5%2F9tMtJiNufOHEwJT4Poon%2FOw%2FeVTmxX0KiyI0ITRJ1ha8dsHmeoHegBXWlYHfR1qJ6JU9n9%2FQkQMyiGOp8gG5zmO73oYYM26gvKEMMi6bag3NPgne6odpTKYUr8pg8ZEsFnyXQ829AMF96zWUd%2FragN08sviIcIrIrTU4Xn8QO7shSDLGGPpL%2Bgb6mA7A&X-Amz-Signature=472585cf1e8d155bcbc0b5c0e9c0c0c030f9e6cbdb07f35685827a779cab7051&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YXXK7U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F3qfanP0kuSGrgfreB%2Frg7CqzzGNxPn0A3hpM8Cv4pAIgM8hrHaXKP%2B%2FhHJnXHO5gXwzEBAd8OnN0DAAitQs%2By7gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFUVuMadSI67n1cRwCrcA1PxRX2B9iZKqPejMO9XriloLnW8e8lqRJaDfKJOSu6tZ95wBfZVtX0hu5LCPe64OwEgV%2BDflN6Z8iWr3rz%2BmS086UO2uQf6I%2F1G0AxEovB1QeolvX878ERCKYLIM1iTxlzVzJvSAxPnXFhxhnAl2wNjRHSSip%2Ft7tRvCdF3KIx35Z0aVlJsgPJCpQt9OCpP5APBf77sIvJsPVQGOFGQPisAW93OFWD0rUIgVuDI6FUZ0Yw4V5ZCNagx%2Fx7nBETmlk5NH0GUWJNWV7hW1q3A0lCB3o209iAWGfzsBYh10yTzfD4kFkCI%2Bg%2B646DVmJTWcNNLA%2FZGG9D6xeFEYdfmWLaXqRF3jJAlTe9MjOaMoKnSZxcWL%2FAWDFeRfuSwbeHtdzDwZGAygAdtRgRyac8SXuVvFXrTcvpPdaZyjYchKVc4cWny9i3uyu%2BRme1h6ofTm2n4ZqD%2BoH9xlo%2Bc955ccwkmj41sqy5733EKrdS7Fj6Z2Ut2AU7qx%2FiXBpqh5j1l5KZAdSjRMzt5MEauPM2n7eN2%2BBzuXsiotGL0NefDCwWpfVJoJmNhl07GoU4dM2z0L1Gz7P%2B359tY0pujYZPbReGwiD%2B%2FjTu7Pv0ukSWcqj8OWUXMVg7rnpf3g6A5MLaL4L4GOqUBxwOH4vy1ajWcB8cTMmIFDc0IsiYo%2Fs5%2F9tMtJiNufOHEwJT4Poon%2FOw%2FeVTmxX0KiyI0ITRJ1ha8dsHmeoHegBXWlYHfR1qJ6JU9n9%2FQkQMyiGOp8gG5zmO73oYYM26gvKEMMi6bag3NPgne6odpTKYUr8pg8ZEsFnyXQ829AMF96zWUd%2FragN08sviIcIrIrTU4Xn8QO7shSDLGGPpL%2Bgb6mA7A&X-Amz-Signature=3e2492dc678229bbd6e4d4d7a1165c470b7f56cacbd76a3dcb11ee2033fb949f&X-Amz-SignedHeaders=host&x-id=GetObject)
