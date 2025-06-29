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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC6HMYL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwed3MblC6HeGnoc66xwlnbO25kkjQJi0xASXpOkCigAiBOMr5Fy5%2BghEehxVWaxEM2eM5GjVgsxN6jR512WnXOaiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrLdAFz81EPplbFWKtwDTp8aSxIqwCSlOmJQ0jHi527RAhoxZo%2B7VhVepezj4quN3YBBRNu35dRkGRXe%2B3cm53PgpDpsqsGH5mV9asxBY%2BiWTC0bm7rvnDg4Xza5LxVLX1lxL9zkB3sjSuST9%2F%2BM74KE2rxKiCnsRmS9Fg14bXBXRNkncbOm7lwbdvXqYH3ywkWuPWM7f1VQFUw%2FEkM8i6vBhNqy%2BhdAZLm8dZ6p3O5aynG0Qnx8xvJB7GLCFsN%2B%2B32x8OOnAFOkVTMGQzor9ZT54jN7k%2FXffSQM4k2%2FGi%2FBwla7XCW8wJfs94gjOngi6QpFIqcZMXEGQUNZWnBqUXJwxdxbJm5G96BD7WTWOv6QXixu8OV9pkT2zBI%2B485pdmbzy6Wvzmqq4ae8AP3nP9KYhH7k6hknIphbIW%2B1OB%2FhWH8%2BKKOEgZW9jcLws7auH%2BGr8gMFuoBIiQk%2FZiU8hsCRKYndL2yRyqAj6Pvm4v8pSRBi2BsW4KmXXdm%2FpH6uerED2Lg4ZIKS%2FdttvmaAmukGUHII2QtQLCbuARwGwf%2F7SERzmTgSB0P9VQ%2Fkxg57mA2vOUf1pEtmNJyV8JKLAmy6CGYWEaA0vRQj%2FrNvFYfsgObY%2B%2FcYl8Vu8UGzkXwbUqcvKqmmVrUqO%2BAwmvqFwwY6pgGRI3VUSTku4PMTAUOCxHN3tOpVIoH%2B2YIm4sor2m%2FbQGVyRUiypX%2FAbUBsMJ%2BA%2F8RANdy5jIaFi8uzI5qJ9GmZlaps3OUodgga%2FgitEtC0BnPYYpacSpdimqWo0CUwjafoovMN2DKkt8W%2Boriabdpt6HHruAMfQhdB7upc0NbNRLB4Ed6DAEWmVAAvZwuCPTp3ezPq8n31zOfrKINp4d0Wy%2F5Is8Y3&X-Amz-Signature=e29bad63d12a70173f7630cf701f3c6803f7b04b771fbec1f0f57460c0d41a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC6HMYL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwed3MblC6HeGnoc66xwlnbO25kkjQJi0xASXpOkCigAiBOMr5Fy5%2BghEehxVWaxEM2eM5GjVgsxN6jR512WnXOaiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrLdAFz81EPplbFWKtwDTp8aSxIqwCSlOmJQ0jHi527RAhoxZo%2B7VhVepezj4quN3YBBRNu35dRkGRXe%2B3cm53PgpDpsqsGH5mV9asxBY%2BiWTC0bm7rvnDg4Xza5LxVLX1lxL9zkB3sjSuST9%2F%2BM74KE2rxKiCnsRmS9Fg14bXBXRNkncbOm7lwbdvXqYH3ywkWuPWM7f1VQFUw%2FEkM8i6vBhNqy%2BhdAZLm8dZ6p3O5aynG0Qnx8xvJB7GLCFsN%2B%2B32x8OOnAFOkVTMGQzor9ZT54jN7k%2FXffSQM4k2%2FGi%2FBwla7XCW8wJfs94gjOngi6QpFIqcZMXEGQUNZWnBqUXJwxdxbJm5G96BD7WTWOv6QXixu8OV9pkT2zBI%2B485pdmbzy6Wvzmqq4ae8AP3nP9KYhH7k6hknIphbIW%2B1OB%2FhWH8%2BKKOEgZW9jcLws7auH%2BGr8gMFuoBIiQk%2FZiU8hsCRKYndL2yRyqAj6Pvm4v8pSRBi2BsW4KmXXdm%2FpH6uerED2Lg4ZIKS%2FdttvmaAmukGUHII2QtQLCbuARwGwf%2F7SERzmTgSB0P9VQ%2Fkxg57mA2vOUf1pEtmNJyV8JKLAmy6CGYWEaA0vRQj%2FrNvFYfsgObY%2B%2FcYl8Vu8UGzkXwbUqcvKqmmVrUqO%2BAwmvqFwwY6pgGRI3VUSTku4PMTAUOCxHN3tOpVIoH%2B2YIm4sor2m%2FbQGVyRUiypX%2FAbUBsMJ%2BA%2F8RANdy5jIaFi8uzI5qJ9GmZlaps3OUodgga%2FgitEtC0BnPYYpacSpdimqWo0CUwjafoovMN2DKkt8W%2Boriabdpt6HHruAMfQhdB7upc0NbNRLB4Ed6DAEWmVAAvZwuCPTp3ezPq8n31zOfrKINp4d0Wy%2F5Is8Y3&X-Amz-Signature=beaaddb88644a5fb02b7e594810d537b4d610f0bf61849defe9e599ce8cd88c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC6HMYL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwed3MblC6HeGnoc66xwlnbO25kkjQJi0xASXpOkCigAiBOMr5Fy5%2BghEehxVWaxEM2eM5GjVgsxN6jR512WnXOaiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrLdAFz81EPplbFWKtwDTp8aSxIqwCSlOmJQ0jHi527RAhoxZo%2B7VhVepezj4quN3YBBRNu35dRkGRXe%2B3cm53PgpDpsqsGH5mV9asxBY%2BiWTC0bm7rvnDg4Xza5LxVLX1lxL9zkB3sjSuST9%2F%2BM74KE2rxKiCnsRmS9Fg14bXBXRNkncbOm7lwbdvXqYH3ywkWuPWM7f1VQFUw%2FEkM8i6vBhNqy%2BhdAZLm8dZ6p3O5aynG0Qnx8xvJB7GLCFsN%2B%2B32x8OOnAFOkVTMGQzor9ZT54jN7k%2FXffSQM4k2%2FGi%2FBwla7XCW8wJfs94gjOngi6QpFIqcZMXEGQUNZWnBqUXJwxdxbJm5G96BD7WTWOv6QXixu8OV9pkT2zBI%2B485pdmbzy6Wvzmqq4ae8AP3nP9KYhH7k6hknIphbIW%2B1OB%2FhWH8%2BKKOEgZW9jcLws7auH%2BGr8gMFuoBIiQk%2FZiU8hsCRKYndL2yRyqAj6Pvm4v8pSRBi2BsW4KmXXdm%2FpH6uerED2Lg4ZIKS%2FdttvmaAmukGUHII2QtQLCbuARwGwf%2F7SERzmTgSB0P9VQ%2Fkxg57mA2vOUf1pEtmNJyV8JKLAmy6CGYWEaA0vRQj%2FrNvFYfsgObY%2B%2FcYl8Vu8UGzkXwbUqcvKqmmVrUqO%2BAwmvqFwwY6pgGRI3VUSTku4PMTAUOCxHN3tOpVIoH%2B2YIm4sor2m%2FbQGVyRUiypX%2FAbUBsMJ%2BA%2F8RANdy5jIaFi8uzI5qJ9GmZlaps3OUodgga%2FgitEtC0BnPYYpacSpdimqWo0CUwjafoovMN2DKkt8W%2Boriabdpt6HHruAMfQhdB7upc0NbNRLB4Ed6DAEWmVAAvZwuCPTp3ezPq8n31zOfrKINp4d0Wy%2F5Is8Y3&X-Amz-Signature=59878a11aa68b601e80d7f62804a3353d946fbad8f11c5d7293b3933e9077437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC6HMYL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwed3MblC6HeGnoc66xwlnbO25kkjQJi0xASXpOkCigAiBOMr5Fy5%2BghEehxVWaxEM2eM5GjVgsxN6jR512WnXOaiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrLdAFz81EPplbFWKtwDTp8aSxIqwCSlOmJQ0jHi527RAhoxZo%2B7VhVepezj4quN3YBBRNu35dRkGRXe%2B3cm53PgpDpsqsGH5mV9asxBY%2BiWTC0bm7rvnDg4Xza5LxVLX1lxL9zkB3sjSuST9%2F%2BM74KE2rxKiCnsRmS9Fg14bXBXRNkncbOm7lwbdvXqYH3ywkWuPWM7f1VQFUw%2FEkM8i6vBhNqy%2BhdAZLm8dZ6p3O5aynG0Qnx8xvJB7GLCFsN%2B%2B32x8OOnAFOkVTMGQzor9ZT54jN7k%2FXffSQM4k2%2FGi%2FBwla7XCW8wJfs94gjOngi6QpFIqcZMXEGQUNZWnBqUXJwxdxbJm5G96BD7WTWOv6QXixu8OV9pkT2zBI%2B485pdmbzy6Wvzmqq4ae8AP3nP9KYhH7k6hknIphbIW%2B1OB%2FhWH8%2BKKOEgZW9jcLws7auH%2BGr8gMFuoBIiQk%2FZiU8hsCRKYndL2yRyqAj6Pvm4v8pSRBi2BsW4KmXXdm%2FpH6uerED2Lg4ZIKS%2FdttvmaAmukGUHII2QtQLCbuARwGwf%2F7SERzmTgSB0P9VQ%2Fkxg57mA2vOUf1pEtmNJyV8JKLAmy6CGYWEaA0vRQj%2FrNvFYfsgObY%2B%2FcYl8Vu8UGzkXwbUqcvKqmmVrUqO%2BAwmvqFwwY6pgGRI3VUSTku4PMTAUOCxHN3tOpVIoH%2B2YIm4sor2m%2FbQGVyRUiypX%2FAbUBsMJ%2BA%2F8RANdy5jIaFi8uzI5qJ9GmZlaps3OUodgga%2FgitEtC0BnPYYpacSpdimqWo0CUwjafoovMN2DKkt8W%2Boriabdpt6HHruAMfQhdB7upc0NbNRLB4Ed6DAEWmVAAvZwuCPTp3ezPq8n31zOfrKINp4d0Wy%2F5Is8Y3&X-Amz-Signature=596dbcf3122d44b895b014a48c4a5e3f57e7399da3438f7d4506c9e89cd92518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC6HMYL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwed3MblC6HeGnoc66xwlnbO25kkjQJi0xASXpOkCigAiBOMr5Fy5%2BghEehxVWaxEM2eM5GjVgsxN6jR512WnXOaiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrLdAFz81EPplbFWKtwDTp8aSxIqwCSlOmJQ0jHi527RAhoxZo%2B7VhVepezj4quN3YBBRNu35dRkGRXe%2B3cm53PgpDpsqsGH5mV9asxBY%2BiWTC0bm7rvnDg4Xza5LxVLX1lxL9zkB3sjSuST9%2F%2BM74KE2rxKiCnsRmS9Fg14bXBXRNkncbOm7lwbdvXqYH3ywkWuPWM7f1VQFUw%2FEkM8i6vBhNqy%2BhdAZLm8dZ6p3O5aynG0Qnx8xvJB7GLCFsN%2B%2B32x8OOnAFOkVTMGQzor9ZT54jN7k%2FXffSQM4k2%2FGi%2FBwla7XCW8wJfs94gjOngi6QpFIqcZMXEGQUNZWnBqUXJwxdxbJm5G96BD7WTWOv6QXixu8OV9pkT2zBI%2B485pdmbzy6Wvzmqq4ae8AP3nP9KYhH7k6hknIphbIW%2B1OB%2FhWH8%2BKKOEgZW9jcLws7auH%2BGr8gMFuoBIiQk%2FZiU8hsCRKYndL2yRyqAj6Pvm4v8pSRBi2BsW4KmXXdm%2FpH6uerED2Lg4ZIKS%2FdttvmaAmukGUHII2QtQLCbuARwGwf%2F7SERzmTgSB0P9VQ%2Fkxg57mA2vOUf1pEtmNJyV8JKLAmy6CGYWEaA0vRQj%2FrNvFYfsgObY%2B%2FcYl8Vu8UGzkXwbUqcvKqmmVrUqO%2BAwmvqFwwY6pgGRI3VUSTku4PMTAUOCxHN3tOpVIoH%2B2YIm4sor2m%2FbQGVyRUiypX%2FAbUBsMJ%2BA%2F8RANdy5jIaFi8uzI5qJ9GmZlaps3OUodgga%2FgitEtC0BnPYYpacSpdimqWo0CUwjafoovMN2DKkt8W%2Boriabdpt6HHruAMfQhdB7upc0NbNRLB4Ed6DAEWmVAAvZwuCPTp3ezPq8n31zOfrKINp4d0Wy%2F5Is8Y3&X-Amz-Signature=fe4299c857085652bc371398c7cd9c2631bacb8f937330a8db00b6bda453659c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC6HMYL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwed3MblC6HeGnoc66xwlnbO25kkjQJi0xASXpOkCigAiBOMr5Fy5%2BghEehxVWaxEM2eM5GjVgsxN6jR512WnXOaiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrLdAFz81EPplbFWKtwDTp8aSxIqwCSlOmJQ0jHi527RAhoxZo%2B7VhVepezj4quN3YBBRNu35dRkGRXe%2B3cm53PgpDpsqsGH5mV9asxBY%2BiWTC0bm7rvnDg4Xza5LxVLX1lxL9zkB3sjSuST9%2F%2BM74KE2rxKiCnsRmS9Fg14bXBXRNkncbOm7lwbdvXqYH3ywkWuPWM7f1VQFUw%2FEkM8i6vBhNqy%2BhdAZLm8dZ6p3O5aynG0Qnx8xvJB7GLCFsN%2B%2B32x8OOnAFOkVTMGQzor9ZT54jN7k%2FXffSQM4k2%2FGi%2FBwla7XCW8wJfs94gjOngi6QpFIqcZMXEGQUNZWnBqUXJwxdxbJm5G96BD7WTWOv6QXixu8OV9pkT2zBI%2B485pdmbzy6Wvzmqq4ae8AP3nP9KYhH7k6hknIphbIW%2B1OB%2FhWH8%2BKKOEgZW9jcLws7auH%2BGr8gMFuoBIiQk%2FZiU8hsCRKYndL2yRyqAj6Pvm4v8pSRBi2BsW4KmXXdm%2FpH6uerED2Lg4ZIKS%2FdttvmaAmukGUHII2QtQLCbuARwGwf%2F7SERzmTgSB0P9VQ%2Fkxg57mA2vOUf1pEtmNJyV8JKLAmy6CGYWEaA0vRQj%2FrNvFYfsgObY%2B%2FcYl8Vu8UGzkXwbUqcvKqmmVrUqO%2BAwmvqFwwY6pgGRI3VUSTku4PMTAUOCxHN3tOpVIoH%2B2YIm4sor2m%2FbQGVyRUiypX%2FAbUBsMJ%2BA%2F8RANdy5jIaFi8uzI5qJ9GmZlaps3OUodgga%2FgitEtC0BnPYYpacSpdimqWo0CUwjafoovMN2DKkt8W%2Boriabdpt6HHruAMfQhdB7upc0NbNRLB4Ed6DAEWmVAAvZwuCPTp3ezPq8n31zOfrKINp4d0Wy%2F5Is8Y3&X-Amz-Signature=542718f040b90e18363e80b0885414d1a6fe59a35efa3d899bc1cc3d97f9d424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
