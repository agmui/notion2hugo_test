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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQDRLW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2B7WLI40xBmMhBC4y4wK2SLReLDGcV1r5wtQIQ0NtPQIgQTyvB%2Fd6DWnJw76heWHg2ia0czCSaDXGsiM8rjqR72AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK%2BefDgGE%2FT3zs8WyrcA9QYOaYqtexaqmQcu8tofcKZy8xNnAnZRalWUWrM0xnsguGWsZqiI7hCDt2YbAcTvPKUAKl6Uf%2FM5MZzmcjcXRfdUMziReMjh7pDYepRudpS3pyfFahwlRwFXig%2FQmwva0TfBxhoxcAoJGSwmoG0Chx%2BSBlCEG7v74ZeXd8qZwN9hJhspCUhA0uNJl4uKGuM0%2BVtewEr13ClaiZJI2TeJhh5pYEfrikm1lerJ%2Bu33DhbYmdK3N8cYeyCrcoRvg3nXu5wgXHbp1TnWL9a989sryv687DyaBP0SFl560uBSs8jKI402QleUVuTg650eeQOXo7POsvyMeyhrAxl9h77m52t3bSheS%2BZqK65pCVeAndaN1CEoO9hn2pMPwMVaqf%2FwT0RyfZaMLc6PDzm206Bt%2BpZCoU2%2BpoKrhUCDZBgHecI6Cfqqk41RjQfoenXIvUVnHU%2Fuk13%2BCLpO%2FCl%2FBGZVsSbfo%2FMg3QBs2kWmsg66yIlT7GdpEkCizyFGVSmNJwEZ1fjec40I%2B%2BjAyva6CDwnpHuNlugoK2wGbfNH19K96LgKJNfg7k4GAUPTqXK7xENP6ijSuGunOhG1Ja%2B3xdVMZaKqx1ndO68h6uaOQni5Sb5EX17D2KanJpfGZc8MPCnw8MGOqUBx9gzd4iAEWcu6yssA0cf8ylqSmHz0O%2FXxu%2F8vFfQbK7pjEvj3Du%2FOCocfaUoDxDI7qShX5WoUWioDOQj%2BSKFnFXQNOx5l2oNjgQX4sJtUm2e0hler9nWk6ko22z6McWh74WEhtJkTU%2FB1dFc6%2BWW03vqGh5RgN3JEnXqCKf%2FwKFDUC%2FkiFEgqwkNJgK7rCcMyQ5LJk9fF0rctOZSECo%2Bq8I6OH4t&X-Amz-Signature=6d8a2ea6ccd7216d505309cef38379b65615de5296446b5b79b5ef645d2ed42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQDRLW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2B7WLI40xBmMhBC4y4wK2SLReLDGcV1r5wtQIQ0NtPQIgQTyvB%2Fd6DWnJw76heWHg2ia0czCSaDXGsiM8rjqR72AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK%2BefDgGE%2FT3zs8WyrcA9QYOaYqtexaqmQcu8tofcKZy8xNnAnZRalWUWrM0xnsguGWsZqiI7hCDt2YbAcTvPKUAKl6Uf%2FM5MZzmcjcXRfdUMziReMjh7pDYepRudpS3pyfFahwlRwFXig%2FQmwva0TfBxhoxcAoJGSwmoG0Chx%2BSBlCEG7v74ZeXd8qZwN9hJhspCUhA0uNJl4uKGuM0%2BVtewEr13ClaiZJI2TeJhh5pYEfrikm1lerJ%2Bu33DhbYmdK3N8cYeyCrcoRvg3nXu5wgXHbp1TnWL9a989sryv687DyaBP0SFl560uBSs8jKI402QleUVuTg650eeQOXo7POsvyMeyhrAxl9h77m52t3bSheS%2BZqK65pCVeAndaN1CEoO9hn2pMPwMVaqf%2FwT0RyfZaMLc6PDzm206Bt%2BpZCoU2%2BpoKrhUCDZBgHecI6Cfqqk41RjQfoenXIvUVnHU%2Fuk13%2BCLpO%2FCl%2FBGZVsSbfo%2FMg3QBs2kWmsg66yIlT7GdpEkCizyFGVSmNJwEZ1fjec40I%2B%2BjAyva6CDwnpHuNlugoK2wGbfNH19K96LgKJNfg7k4GAUPTqXK7xENP6ijSuGunOhG1Ja%2B3xdVMZaKqx1ndO68h6uaOQni5Sb5EX17D2KanJpfGZc8MPCnw8MGOqUBx9gzd4iAEWcu6yssA0cf8ylqSmHz0O%2FXxu%2F8vFfQbK7pjEvj3Du%2FOCocfaUoDxDI7qShX5WoUWioDOQj%2BSKFnFXQNOx5l2oNjgQX4sJtUm2e0hler9nWk6ko22z6McWh74WEhtJkTU%2FB1dFc6%2BWW03vqGh5RgN3JEnXqCKf%2FwKFDUC%2FkiFEgqwkNJgK7rCcMyQ5LJk9fF0rctOZSECo%2Bq8I6OH4t&X-Amz-Signature=92eed86693dc83e210d50b5a0aa24281a494b9c7ffd69fb5055917ffb0f37c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQDRLW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2B7WLI40xBmMhBC4y4wK2SLReLDGcV1r5wtQIQ0NtPQIgQTyvB%2Fd6DWnJw76heWHg2ia0czCSaDXGsiM8rjqR72AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK%2BefDgGE%2FT3zs8WyrcA9QYOaYqtexaqmQcu8tofcKZy8xNnAnZRalWUWrM0xnsguGWsZqiI7hCDt2YbAcTvPKUAKl6Uf%2FM5MZzmcjcXRfdUMziReMjh7pDYepRudpS3pyfFahwlRwFXig%2FQmwva0TfBxhoxcAoJGSwmoG0Chx%2BSBlCEG7v74ZeXd8qZwN9hJhspCUhA0uNJl4uKGuM0%2BVtewEr13ClaiZJI2TeJhh5pYEfrikm1lerJ%2Bu33DhbYmdK3N8cYeyCrcoRvg3nXu5wgXHbp1TnWL9a989sryv687DyaBP0SFl560uBSs8jKI402QleUVuTg650eeQOXo7POsvyMeyhrAxl9h77m52t3bSheS%2BZqK65pCVeAndaN1CEoO9hn2pMPwMVaqf%2FwT0RyfZaMLc6PDzm206Bt%2BpZCoU2%2BpoKrhUCDZBgHecI6Cfqqk41RjQfoenXIvUVnHU%2Fuk13%2BCLpO%2FCl%2FBGZVsSbfo%2FMg3QBs2kWmsg66yIlT7GdpEkCizyFGVSmNJwEZ1fjec40I%2B%2BjAyva6CDwnpHuNlugoK2wGbfNH19K96LgKJNfg7k4GAUPTqXK7xENP6ijSuGunOhG1Ja%2B3xdVMZaKqx1ndO68h6uaOQni5Sb5EX17D2KanJpfGZc8MPCnw8MGOqUBx9gzd4iAEWcu6yssA0cf8ylqSmHz0O%2FXxu%2F8vFfQbK7pjEvj3Du%2FOCocfaUoDxDI7qShX5WoUWioDOQj%2BSKFnFXQNOx5l2oNjgQX4sJtUm2e0hler9nWk6ko22z6McWh74WEhtJkTU%2FB1dFc6%2BWW03vqGh5RgN3JEnXqCKf%2FwKFDUC%2FkiFEgqwkNJgK7rCcMyQ5LJk9fF0rctOZSECo%2Bq8I6OH4t&X-Amz-Signature=ba981e3ac2948335cb950957170f3b46dd939edd3c03dc19e3c56e5bd5a132bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQDRLW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2B7WLI40xBmMhBC4y4wK2SLReLDGcV1r5wtQIQ0NtPQIgQTyvB%2Fd6DWnJw76heWHg2ia0czCSaDXGsiM8rjqR72AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK%2BefDgGE%2FT3zs8WyrcA9QYOaYqtexaqmQcu8tofcKZy8xNnAnZRalWUWrM0xnsguGWsZqiI7hCDt2YbAcTvPKUAKl6Uf%2FM5MZzmcjcXRfdUMziReMjh7pDYepRudpS3pyfFahwlRwFXig%2FQmwva0TfBxhoxcAoJGSwmoG0Chx%2BSBlCEG7v74ZeXd8qZwN9hJhspCUhA0uNJl4uKGuM0%2BVtewEr13ClaiZJI2TeJhh5pYEfrikm1lerJ%2Bu33DhbYmdK3N8cYeyCrcoRvg3nXu5wgXHbp1TnWL9a989sryv687DyaBP0SFl560uBSs8jKI402QleUVuTg650eeQOXo7POsvyMeyhrAxl9h77m52t3bSheS%2BZqK65pCVeAndaN1CEoO9hn2pMPwMVaqf%2FwT0RyfZaMLc6PDzm206Bt%2BpZCoU2%2BpoKrhUCDZBgHecI6Cfqqk41RjQfoenXIvUVnHU%2Fuk13%2BCLpO%2FCl%2FBGZVsSbfo%2FMg3QBs2kWmsg66yIlT7GdpEkCizyFGVSmNJwEZ1fjec40I%2B%2BjAyva6CDwnpHuNlugoK2wGbfNH19K96LgKJNfg7k4GAUPTqXK7xENP6ijSuGunOhG1Ja%2B3xdVMZaKqx1ndO68h6uaOQni5Sb5EX17D2KanJpfGZc8MPCnw8MGOqUBx9gzd4iAEWcu6yssA0cf8ylqSmHz0O%2FXxu%2F8vFfQbK7pjEvj3Du%2FOCocfaUoDxDI7qShX5WoUWioDOQj%2BSKFnFXQNOx5l2oNjgQX4sJtUm2e0hler9nWk6ko22z6McWh74WEhtJkTU%2FB1dFc6%2BWW03vqGh5RgN3JEnXqCKf%2FwKFDUC%2FkiFEgqwkNJgK7rCcMyQ5LJk9fF0rctOZSECo%2Bq8I6OH4t&X-Amz-Signature=b5e05a719a1e402fbbfb939db81244a44e11192b7ee780d611894caeced49b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQDRLW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2B7WLI40xBmMhBC4y4wK2SLReLDGcV1r5wtQIQ0NtPQIgQTyvB%2Fd6DWnJw76heWHg2ia0czCSaDXGsiM8rjqR72AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK%2BefDgGE%2FT3zs8WyrcA9QYOaYqtexaqmQcu8tofcKZy8xNnAnZRalWUWrM0xnsguGWsZqiI7hCDt2YbAcTvPKUAKl6Uf%2FM5MZzmcjcXRfdUMziReMjh7pDYepRudpS3pyfFahwlRwFXig%2FQmwva0TfBxhoxcAoJGSwmoG0Chx%2BSBlCEG7v74ZeXd8qZwN9hJhspCUhA0uNJl4uKGuM0%2BVtewEr13ClaiZJI2TeJhh5pYEfrikm1lerJ%2Bu33DhbYmdK3N8cYeyCrcoRvg3nXu5wgXHbp1TnWL9a989sryv687DyaBP0SFl560uBSs8jKI402QleUVuTg650eeQOXo7POsvyMeyhrAxl9h77m52t3bSheS%2BZqK65pCVeAndaN1CEoO9hn2pMPwMVaqf%2FwT0RyfZaMLc6PDzm206Bt%2BpZCoU2%2BpoKrhUCDZBgHecI6Cfqqk41RjQfoenXIvUVnHU%2Fuk13%2BCLpO%2FCl%2FBGZVsSbfo%2FMg3QBs2kWmsg66yIlT7GdpEkCizyFGVSmNJwEZ1fjec40I%2B%2BjAyva6CDwnpHuNlugoK2wGbfNH19K96LgKJNfg7k4GAUPTqXK7xENP6ijSuGunOhG1Ja%2B3xdVMZaKqx1ndO68h6uaOQni5Sb5EX17D2KanJpfGZc8MPCnw8MGOqUBx9gzd4iAEWcu6yssA0cf8ylqSmHz0O%2FXxu%2F8vFfQbK7pjEvj3Du%2FOCocfaUoDxDI7qShX5WoUWioDOQj%2BSKFnFXQNOx5l2oNjgQX4sJtUm2e0hler9nWk6ko22z6McWh74WEhtJkTU%2FB1dFc6%2BWW03vqGh5RgN3JEnXqCKf%2FwKFDUC%2FkiFEgqwkNJgK7rCcMyQ5LJk9fF0rctOZSECo%2Bq8I6OH4t&X-Amz-Signature=b0a05ef711506d11c636c6eebd95c0ffbd56656951a4787ffc92dbc8661c13d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNQDRLW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2B7WLI40xBmMhBC4y4wK2SLReLDGcV1r5wtQIQ0NtPQIgQTyvB%2Fd6DWnJw76heWHg2ia0czCSaDXGsiM8rjqR72AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK%2BefDgGE%2FT3zs8WyrcA9QYOaYqtexaqmQcu8tofcKZy8xNnAnZRalWUWrM0xnsguGWsZqiI7hCDt2YbAcTvPKUAKl6Uf%2FM5MZzmcjcXRfdUMziReMjh7pDYepRudpS3pyfFahwlRwFXig%2FQmwva0TfBxhoxcAoJGSwmoG0Chx%2BSBlCEG7v74ZeXd8qZwN9hJhspCUhA0uNJl4uKGuM0%2BVtewEr13ClaiZJI2TeJhh5pYEfrikm1lerJ%2Bu33DhbYmdK3N8cYeyCrcoRvg3nXu5wgXHbp1TnWL9a989sryv687DyaBP0SFl560uBSs8jKI402QleUVuTg650eeQOXo7POsvyMeyhrAxl9h77m52t3bSheS%2BZqK65pCVeAndaN1CEoO9hn2pMPwMVaqf%2FwT0RyfZaMLc6PDzm206Bt%2BpZCoU2%2BpoKrhUCDZBgHecI6Cfqqk41RjQfoenXIvUVnHU%2Fuk13%2BCLpO%2FCl%2FBGZVsSbfo%2FMg3QBs2kWmsg66yIlT7GdpEkCizyFGVSmNJwEZ1fjec40I%2B%2BjAyva6CDwnpHuNlugoK2wGbfNH19K96LgKJNfg7k4GAUPTqXK7xENP6ijSuGunOhG1Ja%2B3xdVMZaKqx1ndO68h6uaOQni5Sb5EX17D2KanJpfGZc8MPCnw8MGOqUBx9gzd4iAEWcu6yssA0cf8ylqSmHz0O%2FXxu%2F8vFfQbK7pjEvj3Du%2FOCocfaUoDxDI7qShX5WoUWioDOQj%2BSKFnFXQNOx5l2oNjgQX4sJtUm2e0hler9nWk6ko22z6McWh74WEhtJkTU%2FB1dFc6%2BWW03vqGh5RgN3JEnXqCKf%2FwKFDUC%2FkiFEgqwkNJgK7rCcMyQ5LJk9fF0rctOZSECo%2Bq8I6OH4t&X-Amz-Signature=8a6f63d7ba92f1a18d378c07cf1444f1ad8c699ca7c2caf0d674e7ec1ec1d76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
