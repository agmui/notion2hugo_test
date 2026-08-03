---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

</details>



TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQP5BFCZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC%2BIdgyVf2M1VyWHBTyPcB5eMjCceBaITf0Y3fst7JEsAIhAP0ZR6mg3FV8ZhofCW%2F3wiUYhEOz5lcfQPwHJcr5G7H3KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypjAnnymG41mql%2Bs4q3ANpoFuxJEtQsllJiw4BPGgCeKGbhqBqeXRk4%2FxKqH1ywgM29yEf21lpsm%2F6fa7F%2FvU00J5u1%2BeGsNAc8jJaH7B6OsF3gsSFlJ%2F0xaUhoSoYOUaEgDX092F%2BD5p%2BsbpehgfHfDJNJDyEr6ybEmuhaei6ckbzL4Wor4HQGy0lPBW6MLqOn0k4V%2FxeS33DAtXgIRbJP%2BIXjCT95J2toz9jk0kkZC5F1jMRocxurXNbuExzEQE5%2FrUx2sb3yQ58lbJcNtc9QnuS5HGsRwqTBtA7bnbo44tGjAIw5imNa%2FPO3sHjrvN7IYtaLDaEIVuxloU%2BGNRS8xuWNQRRlZ%2BB%2Fe5mrhVMskjyDtkGiaKMDh4dIHx2jfyE50UI1FjQjyqM8ovra4vxnicGDZcufRSbh2AtVfiq%2BWcrJNRkZGT33rCMU87%2BkG7OIJvUZEDXrbRsrepRTOapEErASSDdxOau7XjS%2BsXidn%2F0%2B5SXfYyQlYpwPxINEptep4PHZdTtloqVUAxXEDAavqsqCbBKpXC9Jb5E56MsE8nV6rCqyQDPOL0G455FkyFZG2YLZkFyvWyvHRuESbLKVIoylxZeQrvk7qD8E2bVCLe1h5GSFpyFZeuByjqKpu8KIx3BrUSrUc1rYTD15b%2FTBjqkAZvfOFGhlxNOvLfXEt4EHUqqwFmXFNnPgA7ZueYC9h3%2BE%2Br4h%2Bwy%2FvuTIQhSx3kfKMzj6y4DYr1IpqzIgGx7kxO0Zdlnv3uKD5ZWgCnmuT9Qb2ixQtkvM2z7DsJMeUHsn6dyifK0fM0KUI5NLWSETAEIL60dWGGCD5k%2Bu2EogMvZ99sKUxIDy6CdiD5WB7iD5SenQ1XLgmwwJ%2BknR%2BCcLHcACRBJ&X-Amz-Signature=cdde3058dd15973cd5a21a81f874d01202a699ed1e107f75f736fd3385d0dcec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=70aa8944defe35f8ccfef5da78d8c0d3046fff91b5be82437d46d8e313ecaf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=607da7e2eef2c28664a1c33212db61bf548d66d37dfb261d7fc45f3b1eff3827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=20074fa154d4da7a29b00cd63ed8acff240e42056a899ec89bf54c918d1369b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=4766d6a539b2949b5b77495bd3349b9648c5ea92ed06a249964356c24036d211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=f5a70666c0c1801b2d9a0e15496e68350ec5ae7f264fa14d81dfab51514b6d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=eb72165bc9024f6efefc153eeb7a40ea867734c5f62e2ef491c3b5135c7d3ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=c0ad6ba151657e01e5885cea945a77cbcf4120cb9ab19862a90983870293b1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=1efaf12db514672a03feeadb46a0a43e118dcb897761d8b8e1f1de911dee908b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
```bash
ls /dev/ttyUSB*
```

</details>



{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=db5257702cbc023467e7728cfd748a43bc0ffea6c648375118c31436950f7888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLBHNRZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC6JPuva%2F%2FkB52kAzo2zKEc6LrivNviN%2FzSIS9vfDo3dAIgajFB1qI0vFS1r9CWheQ6Z1Z0IZa7TRoui7ail6Ddc6IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6i%2BHXvzpCv2OgziircAyaa%2F%2FXBCnAETvjBNpzL1b54VWBPpig9fWFkIDAwZH%2FViBeFY2uS5P0ygoDE8GT1Zs4aqsdxERCDpGe0Z5%2BqB5Iug%2B9a1KiFilqOSpITcwoR%2FRnbh3t18%2BgNbAYWDUuEAbJQUbec9qNmc65tlT%2B3iu1w6d%2BMP00%2BryQxeeyR7gYn5PD8zIFxCVGxr9ZKyf7zlX3QqwMzz1lCO09Z4QU1TlZmSgkrd2dA7Ympkf69HKAi7X56NUa6JJCj1tPx48pamGHFZ3J8JJui0PttlWoZVR8%2BIxe35KszVUNLv9eXD4Jl%2F%2BhYPpFHM81Y06mSO7epVSD7%2FUC6rXf16yL4Ez378igt2nlbWfszcpjkJ5rkkR3ALXt2oz222a7SWiIjNaWIVaHqiFrfBMG%2Fr%2F2yUW9OSfH8Bwy4uCMUEa375wqKvw4UGqDdsYCf6NCF41cyfrYPF17O%2FeLaLreexmOUwagFNpcfN7Ty6MsSMPQec5gDyj3yMUAwiipc37CkXqCmueN4uRi03ZvujTH59LAWfPkvUTg8Kwjr4zz7pD%2Fv1mvEkLeOVJsVOMWa%2BCtalXn4%2FuHgO2ePSnOnOLAWv5AeMRW4jqnHWxjB%2BDpEyhgToCE3Ls8N3qBknttQie9B%2BJn6MM3nv9MGOqUBFBh45%2FvJzP76HXT87sKQ5z%2FgbbPNC%2B6U0MuWFUaPtfQ3OIg6XPf0FxMdPPMSnUWLPGo3kpq4uUI5dC7iPGuiKisBP31vHJtX5MLkpGEYdSwWuxXLW3I645zrMRx2MmQ0JulNv02Nbqw5NgfCO7FQQxojdamkM54gOEtKlotIkrWNSsOjmlF83yeQvaIMasQVzt3VUzcAOFiBi2U1Uifw2p%2FgAOVp&X-Amz-Signature=4766d6a539b2949b5b77495bd3349b9648c5ea92ed06a249964356c24036d211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
