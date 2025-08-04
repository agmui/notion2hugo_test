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
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCJBJZF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDAO4dRYwz7un4omT%2BH3AtLit9l8uaT6E51oDK8aJhinAiEA%2FwkUB8VQ107ZLolptuJt9W6csPs9YsQc744mNowyVyIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDC65vwLvILaNUFS%2BzSrcA4SSz0IkwrqDBFda22pt4Xc%2FRsv15s0rfihqUoAXmqggqi%2BlqhmwXNpSY1EqCJGSYM2PfH9mmINtSLs%2BhSlCcGNAB3JiaOnq%2FAV7FmjORssYpGb%2BB0tAoIy%2Bb8h8E9s%2FZQf84vPUaEMSNTSHep%2F6qm8CurUOtoLBktf1WyCX8PIQ%2B7gaXxkMz45xACYur%2Fqy5S7hdYaKBf6AKMOpycDlAkueYciz8IHlrAW7nKnqensIawRK8x2lII32wrrIiVM%2BcAoWWc0BNCiSyCRL2jhl65z6h2ZI1EdJFg1WLvEpqEuWfSR5XQsK1nJz69sxx3RIU00zdmB6nlEJzepF99EjLX9wLNRGzsppC6fpidQeZAWFZCZQyUEZ6yZF2tFGh0HbSFN74gNNDoAvYgL2ZKBfHX%2FvRjjXi6Mqvu3an2ypu%2FA%2BMi1h0oIrPwsawcjIZSGJZYZ0F%2B4kHRaPh2mNEy%2B6tsOFc37vwgs9IZFLvAowekWcTYNIkF%2FZoT%2BcZCMdeHU5x9Vszhk00ncqm1W8Ccw5OZvT9kFYetjOZlCTL34RxqGhI%2BMvb7XFCvijZ87eEJmcPAepbXEtxu0%2Bx3LqbU4ed446lDGWuWZsSlAbSrhvmSDPKLSzb8sK3qep0LX4MKu4wcQGOqUB9sjZFvlQnx9nC5nExfd%2BW9LKbkcxAKy0Owb1yPfgWjEG3VPfrj%2BlwJ5vfqbGUUQdF6uO69Op8hqM0bWM2nmWkzmA0EftheQKSKkSjWnFCYIzvU3Yl0s%2FbXJSWVPoyGN86ctRTpsfESCITEtr0ulXoJ50G4lyqmm0pHl8KwmCIIdNJF%2BAJ%2FdqmSA7y3xIVmeSvR%2Ff2zIH%2BRYrIJMpMMVOOGKlTF8E&X-Amz-Signature=4be62e69b1f3d2298e083c17baa363716d3d9d341d4f6e29c0795e9a2f57924a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=cf633c5a6106e882d26188b628960d7bd7d2910fea570a5da7701181e6348f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=f102f07149d57d1530629ac82d0b3bba11ba34abdb5a9304feea57b85c11e922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=74533849aaea3328ab289d1b3ab0f817d489d68a878d1cec13d105ddd368b8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=6f36cd62e499aee77c666b6ee9d8a6fdba9823052673f778f02f06acdb1dffa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=d0961fac6a976cb4dfbe3b4479d502e451c352371884163a59238e86c6e4e2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=b26f769c540e140cff7d3d893a5d872f8088bbb0089de81342c6278dab641d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=c78db6f8cc782c9c67a33c581dcb332dd1da92de7407d6e29d752c86dc743ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=4830fa37ff878a6bcd487e4dd40cc0be912b81e988042fc11a1ee242aeac12e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

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
      <summary>Finding Lidar USB port:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=047896f10c8f31ceec66c2e638d266b2d008018f1b0d239781c5f6a0cf8fdb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYYDPSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB%2Bs9GPAkBATyAFEu9POC4qGlGS%2FxnqJ%2BTkhq6Ac9cVdAiEAoviXvOcP%2FOEv73%2Fs393bQdZghBZD9nXO361L8eLj4rQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNty6E73nOXfsnfpyyrcA%2FUf64dEGVXI6ji3Eq0nRwoNNS4dyGL2KwnrlGeUcCuNHqdMUEcz%2BdIe6en9TLM%2FeTw3CiuO2l9XQ6Bq6xvW7%2BzG7oAwozTO80Ln%2Bciz8zaxZPDUWqW7DFBe2x3HDqCr7KPaRpripaAzK6suiZb%2B6y1YWtQwXG6oxEtnFxdi%2FzFaKirm4qPT6RSYDXw7GmYmI3bMTEgmGLwgLKipveYpz5HOVocVcFhFC9DWs4jqTA2UFxXq24bv0TnYvqer2XT9VuHrmjVtv44aLLhdXImiSIbtHh%2B65hdYHQwwblUE3WvcRGz9JsBfUraB8vPWTl0UIBCS1rc2gTJSEyNrUBh2OHLd%2FJHdWH0IyJFGqcAtTiNkI8payOAhzX7lcYPqd49gsEplavOdPbC%2FylR1IhokdcCdF6LGeDY7UobCTRCOw0nh7xEMBUrHcCRguudGNGHaqO3UpC7Ez2rx86bEIEnwooRVXlS2xtlL7SzRYrDyJq7qiDzjMsPpFEOfaitic98BgknGmKIv33dOP0hB1XRVGVHqQfsP3dNZX3GOHqdx9zkseoOQANu%2FufoaJTymHKnvSZ%2FTF5CY0RGLykL3o0hQARIrm9nfwVW%2BUOWEHeTlkgqBvqZsHSH3Jb11NTi2MKW4wcQGOqUBPRNBAY2FlA6LiJMQ7Ayji28K%2FvHyv6vESo5o4PNqh2ZEw70IK2m%2Ba7AE8KTq3leIJwAq7lUCxZ56Q%2B5KZ8xwa%2BODKDXhCw28zJOijQMXkJfqo4PFOCMYtww%2BXXJ9GO97RNecCwZE47clhwwBQNPyWC85jp%2F7UoXm%2Bf3%2BKlu0Ld9lnQasq%2BrfrEhW4ob8vcwj09VPOP9a%2BWr1zh7v0u%2Fl0qJv6Dnc&X-Amz-Signature=6f36cd62e499aee77c666b6ee9d8a6fdba9823052673f778f02f06acdb1dffa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

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
