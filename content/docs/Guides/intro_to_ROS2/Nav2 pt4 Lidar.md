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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWY2SEA%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDlIQ6oNYXjtmkmjytLnlaYtQQbowQab0R07OrnbYZC1AIgLR1dAYvUAg2c3jEGSWqpyaHISR529f1p69RyWEzNV3EqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYGqbxiXJhuDCqxFCrcA3il74e%2F1Kplk1tuzW17vD%2FJc0KYa65%2BTvHwq%2Fp6Z%2FtTblPWQREjcPcYZ%2FAVzuGcSipkAzEP8iF8jCj%2Bm8CSGn60Q1nnB%2Ba3JZdVFGLp57SCwX9jpMMC3l4To81iYVOAZ0ollwBsLKOvp49rjemIU85TUcpClgQtZXVNFOcX84EkRXiA4mOxqaNf%2FEiQYo1MbmwfIEXDdaFWRwro1AoOJo4rp7jFyyn5eY65uBNU58KarfHeZ6rHXqkXFECLu58h6yafjaTNm0N4JDeY32kUdcZ%2BqH2KUCXbP%2Frs8LeT7791J0xHGgCxBtCl2GSBt8bBzGN9EbYAodYUkOWjmbcxQXSQ1d8ARN3SKzobTBdiKYxuC2qO7%2BCSR7qn40JhFGxG4%2FsOR9whxmExzVqHVOgRtvjGU5dENy3MbbFtfBUiFwV2T9WCa7QWYb0BXfbv121MI0CXflUOmbmgtDafkWfI4lad8POkNDxqvPOIGO4EEZhnDPy%2FhI4J%2FTwx45oxaJQbdGF8cVLiXoesCNzZ5gQ2dl8DLo33FN1A9ZJkg2sTkKMwaMHEvduMDPYnDv%2Fjxpewze0KybDKbQ%2FnLnCoiHU9S5r3OzAJ3KtMzwjo2ay1rM9CcW9VK%2BfWPdRqXJtiMOH%2Ft8YGOqUBmSH%2B5G%2BC%2FGi6%2BaowzPSOkT6MKI0Vdta4%2BvCZr4iqcT41wYMQUJQNTQnpVIYhZZNPmrWjmc2YICATXxauHeFU01onxS%2B5WYt4Sk%2BfMb1AN6AV4daAloUUuX%2BFKjQeg%2F%2FeBf%2FUkH6cBSaTTRejrQiDCosu3hRcgEDBzU1wU48%2FhQWMd0w8%2FDGiq1yd4ISmEBcTEPFdg2fNCrSleZPOD6ob2djfBa2f&X-Amz-Signature=7eebfd3cf84388935599a281c29cee7aded20e108a41e3b6bde89cb7417939f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=ae99582600219f4003c1ec65e1f229bf838cd44ee8250f31b6f1ac25ed462e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=4928f900da7ca9fceb7dfaaa4106d8eda3487d36a6818d2625022255249e65c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=f7caa7d61ff6052a965d3e7ff721c33d9eb71bc2b329a83ebf5bfa06b8c4546a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=2ae504b6950ef8f6571c445dfae85e21fb1a8d43c35455c382416dce4d4264e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=8afe8445b81aa9b65d3ade9b9164ab58e2a6a2886fcef6d2bfb25d26439f696a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=06cda0e8318181ed12a867da016e9d2fa2361a0a2c33cc07ec31fec3d881ee55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=8cae8fe05b3d4b76b8a93c9d22c396df9a864dc420458dba2facc2ebbe264269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=38c5374059237d8daed636fa9869ff5ca6caccd6f4e5b30ab99213d036e14f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=15c6741f7a4fb8a259793bd2a4f977ecbc90de23639af99ed1a10330ab217f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6UT5IU%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBj6%2BQFYDFhPA357wYQ2gktzsVjZbb0OSkXOQg6ysMNbAiEAgtVl%2FNuf56%2B6ruh4tCm5yOADWdRiiIDLcgNkyYtBr2AqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpt2ZWL%2F1NKDzseeircAyFSbZt8Bp9B2yapSpY0%2F9Xr8tvEs5ul6odQ8TqzYfl6lhmaaQWIdhJulvto%2FFbCeIULbRZirsIqAe5qFCmQQAMmSbE979mQX7YVwJ%2BNA%2FhKNxd0W86feQviPssudXSHrqyScnykEE2xZxaqP54egPJJGMGdeOFlbNSaRV1P89%2FTlnzvz6Qhe%2FJgh6iEFT3yvM7YzQYjBmyymYjF5prbAs2jifC%2BXENDgTdSA0yfK19kRQGwPNrZtr%2B6E7PZGy7zBVCKWA9ZN76gZ9ZjoREC2eJaF7LKQQAIZ5xLBH%2FGV3gJOesPk1rHNwRDlzcuwTkCTYQ9esPu%2FzkX9Lpzt0dOKAFc0r632ojWgfx8nP%2FHzhs1FAzXNDGNo9wmF3zSw%2BLWVwS7DD%2B%2FmxzrrEWppBp3HjQH82x5ZBEEJ4CrGxXd6cb2j3fU2mV1J6eFeo6s%2BrG%2F3lmCXtQz95opAeoi%2F3RPxQJn%2BcnJ9hhxQaYcbzH%2BYq%2BlbDvidmz7dd%2FZQLM40fFMDehprFvye4QM4yLxaUlmQhQaY3jOdl01ARN%2FwYkJVIVEuoKB7SxsxyMb15Hj8brqJcp7EVcZdnsmlh3nzY1CbgsdcS%2F4rUWLfZZhbraXT9bQBGYewZLBlf2yLXdLMJmAuMYGOqUBZoIhBj%2FpJ9cCcFmKvZamMOWri7ZR2OAIvYTa%2F%2F8Jarxuh6owtzM5wJAjGZ%2BMdwVRRdGsQf8Op%2B9pKt6xOUYHgBSMYuXKmCizjJHZb6ZVVomeh2ahYnqYMxw98PfM8kGjgU8I3%2B13wzS4ukNjyhFRp2%2FO%2BECpDg7hImKlTULTbEYZMmIIBxlkDr72G8UamVKnK6C3HOp5UJDIqKXqhU%2BuVVrAt5r9&X-Amz-Signature=63b375974e2cce745610ef9ef402c40be2e0a13dd8d5833b34f6fd4ae4b30faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
