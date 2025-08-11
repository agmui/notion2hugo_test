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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466426EMM7L%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmorsl7uBvZsKMt%2FsJbQO4zTl9qLyw7XCEbMQ%2FeXcZ5wIhAPh10r3qCHmjnCcOiRLH%2Bm8Mq3MwyJU%2BcQ%2BVQPicKguRKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO9KM5rgYyKGwrw8cq3AOSkyIZaE%2Fn80E6yax4K9J%2F5Kw%2FcUwI%2Br%2BoyZWshwInwUVJ6FG0%2FVf6U3FD3cSmP94fPbkq7jGRCdZpWncqpqzHVvhdhcEOs7qxnSFJ%2B9lS3p217vPTeAFqAiUSuwrNsG6eddfEpF01oAdtRaVSw7lt0Q2Qu%2BAO9cm5%2FZMQArTr3LezylqCcP4KBta6qjE6%2BlfRJ8LdY93vsEQUV3Zr6lBxswNIP1P7MLexAlXbM1B47f66fMmS%2Be1vaLBQovtFlENP%2B0z5AGYPKLCV2UctTGFXawGBQsrh4isJtsNdYf6QYb393ORkS3MUIYQvbJ4WPOSLKSosuExia5Gxh3IU0xNBRiywTMCWnpVEQvAZFCdu%2BeNOFTmzuZ6n%2FZUoo6saRp%2B9s%2Bf2gZDuWrj78MYOP8%2FeRu5cHr8w3cc%2BMlncF1LtyGsnl7jjDrXOQlVNOf8ybdeGbLaSGlGaHZK7Uqh00AGZY9TTP%2BqOkecPpkTc48Hb9r6v4rdh3F6Ma57I0l0yWrPsNP7upuo4gE8387Lienn%2BtyMuth8qDVm8a9vIb4OWhTg3EajjBPycCjmtCwkLTMh0HHMlb9BQLtMC1%2FR%2Fe0vnxzYUrhw9mTtw54IUvExgUgOpIkflYLh8pGzfMTCF0ubEBjqkAYfQeiiFny3aN8zvmu5jLL4Kw6BK6KcQhvFZLvCBjekO3i1hf7EYB9EipawqE72KP%2F3VAPCKR8A48gZxgYfZadvjyamtpZhUPPh9c9EsLLEFeFUoEt76LKVjlCElAe9J80sgwDkhF2Sap6z3SODzgEgGnWwSLUKGEi1D8WZa6DdPHnFfVpeUk1waAv6MV1wN1wLF0u%2FPNBco8Da8PUI2TLnN5ugj&X-Amz-Signature=ea4c8eee048ee49d493d8a1ab8e6c10d7c9572fd69fa818ec7bd1c17d3405277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=45900eb8ee3e4a1ae49e878bc0b406dcfc4491d0b2e128513555879c3ffe4038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=8d8d00435d04d570939cbe60408581c21a6f51b2c7ee555c45ee332387de7dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=5aa582b0d4f3b97d74f1d378d6610f6ef0d4abaf8be051d6b053bfbcfabb0f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=d642a1e9d3d183c7a68bba76dcb68fd2a6f2300c3f0eeef78dac53c2fbd6445f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=c461e974161ada8476b481af729a7a65428d10141aa585ec3ac56f84ff19f00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=65a9871e457d95a8b0c9ff9f9c3cecc1d1ddcc441baf4e488ec1c1cb9298b171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=8b972b14b768ea655efa728f628f196e9bc68683f5a25ed4595ca48a732ca5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=bd7fbf4eac6d1a80a11a06b84669c289acb713a5df5a9f5834daab2e8b91ed87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=4169aa7c4a3cb388af1632b7a3ef097a59bcacacf0a8171b76ac7f14130bb9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4EBVVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6e%2BAXfz58y51cFWf5P%2BqFwAFiiyoCqWnlwASaRsDJ0AiB%2FpsXhvgf7ktXhvhLSHahEWjQJ3MD9kz1cXK%2F7YTcMVCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMj0r%2FULQXIsiuko8KtwDo6EfAhZI3SXqnIR7kS4osGcivONEiD%2BAJMwFEbk0715hC24ns%2BKrcqCvPaQ%2F8xflLVjBe68GlDTf55AdLHghOGjvuXyZeeO0T0bSoLhHdcfYsxDx2nP7wcXPJFghSEqr%2FteVKX4kW4%2Bwwrez8WUpFIGPLjRWzhalPaqUlvkH57l8KEDmV1XL%2Bh2nThP2Xow9ZpcFm8vzKxjsTqK6SzNMmPV6p7W3WoCW%2B7K%2BU746LLGvdn2PVdDJANeEf0Zfm98i3sEvIK5mNeeA1hAeBt07k9j07OP0ZEzBJDRgAz%2Fc4cQaBP7H4tjnLPZ3FwrbV%2F86GCd%2FcwhfKa36DwmFygI2VzalYzrTpXeT48yPogJbUzSAtrfM6gJgccOjttz1TEhFEM3fFY%2FA%2FSjWPb0ByUXtFN6UV6%2BHbGW6nJiV%2FvE%2FzvA5rGecwOrm6XUeY%2B195aVj0qp%2FBE9csNBxzf67EP%2B6ASeC7jCOk1X63UWPtW0QJJgqUGBp%2FoPMObeFwoJu14L8Fmzx1sNyU%2F8eX4kkShjmUeSLfZ1iUp4QECso4xLBF2NxXCcEjlx26x22kqeBGjB61jKCz3zBfV6d3OWZIoQTL6FTcCwWbdQd7KuMC4iZ2Se2x6Qjmn%2FT%2FQhY4uYw3NHmxAY6pgG89yXzimdX%2BUJ4h0F5gmQ1KS9Lav1wE%2BEO9iFiAjiuMNPNUS4lYbLPZvSloiRlAXZjMZLgJcEAIxUpl8y8f70fj0amtaxuEY8i9ggu32nzre9UfEIiGZrbeB%2F97iazSDOcQ8Ifq3R58x40%2FA9yjaSrz316mnoy2wKygWb%2BHfdt6AminBDtTJenF1oyK08Y6qiCBwUPu9oZ%2BIbx9xAOIEWk9HnaTUgZ&X-Amz-Signature=d642a1e9d3d183c7a68bba76dcb68fd2a6f2300c3f0eeef78dac53c2fbd6445f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
