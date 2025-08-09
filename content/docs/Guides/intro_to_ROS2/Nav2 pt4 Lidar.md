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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVGBFET%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2zMrI0JuxJVQAbk8Bu9Hyz63a3BdExcEZRBFO0do6XAIgfmF2C6D7ul8%2FPgRDhFmV%2B%2B9R%2B%2BIskPjRYYgTUfL13XQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIcVxKumXHvVrNKMSrcA%2BhqPqSAxC582a4I%2BYp09LaF4qLs9xYbmrODh%2BAE2K54gh440bHg39MY8x2aTjlGEUPPrLz4DQiYL%2BrjMSPsi3f%2FIK08d8bvgKjrPeHEKVO4XC1t06Ona4T3oLdN6lKPdzQlQCIuulv7oiLiSC0c22nUZezEvgSAR%2B%2BIQj8KnfK4MxeRSn5XeCS8aiZaWOsdF2GvOs07Kd0v1evFOTS3bLt1g9Uh%2BzFAIWlbeTPwXoSEEZJhOFSFqg4xHVeuRus4B6e7C5o0SkkvwrryJ9IyYEkSJqQZjg4u3AEl3RtZgNVkD3Zky4jeVvdA1cQW%2FyNVGfIykUhGzbjg3NQgnMJPCLSdjIdo5D78pxxBEIbwjWwwokT1BOcrVB6v9lQVOvm%2FSdQWh%2BvDgiYhnJJS6xObVY7xgmt%2FS1hyAPtsSayehJVGrlyJ%2BIxXkWEzMgM%2BCtt7VR%2FFgNu8DdO%2B%2BvjumMdwQO8UW9jfq49gz%2FM4i7MCmlpFJECg1x27YEwFjOQN8tREZ%2FNtuhH%2BLHdAdgcAQkCtXdYSLaIuqrMmZwNtqPfTdfKrcCKyGk0OGCzOfVlxt5adHjhm2RRuw3NR2LK6ry4c7yZRLuNemeuuFwVgRJshJTYuRPgr7j9xgTVDPuKYML3E28QGOqUBD%2BLqDGkKSsgnsT1qcvxTX4EMoNseBRJ9S9%2FZsE%2Bqaa7KKzyMRyfSC9xCcVFkfp1L7hUZWGI9w9TIA0rEfxmXOfEr0v1WjzoZy2qbFh122M8YFCBhjvat1A4L84iUOTvZwfv7UE%2FFZycpj1B0GCEI6proQVWtKQem4C7BKsYysmz2yt3W5YfGYcUnAOmFMRA2K%2FskbdN8NTACM9B9Ev%2BVgJ%2BHI3%2F7&X-Amz-Signature=7b78b0de64ec231a78a65083a883ef06181397584408424e7d3f091b4ac1cdfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=4b42a420ed0f1e71aa5880c40eb94bf38698f136da42fc8d79fee4c5ca1350a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=fe478a3f267c1f5c1e2d652a59d4d49a853ec48efa5d60693d8b62193358bba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=11c4cd9687173f801bf00a6ba50a9b2f9bc8324850ef28f55165ec0e3ed02e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=2aab1e874c234b06c3db8d335364be77ad51a15907fc926c0e565fd3a16199b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=c3b4cf28c5b761f2ee044a47af107c03273c447222c12c30fef75a74a649c1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=92221ad2db12969e011756f87e7197cc8103db795002721be8a78cb010066727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=62427e43b4e439b463c851d7d7db43e2fe4133bc65047d492ec040ade6cb1527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=c6262c00b3084b11e7039aa7a64ce040d8a16bab8982bb3592bc9cdde9d9b747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=f8987582ce6261602c8eadcd236b5c18627b2a71f9190b3380dee3a82c6b7916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3DVUOF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHG1AXUVFllieqs7r1Pr6sqTNyF6QCLyKAIWZh73g27UAiEAsOo53lvfEgDfiRHwW1MdSGsjPtY1dTDaUNI0LJZmLHEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjDqbASwbmbV8w0GircA7sm71k85AvGQc%2FcEZnpRkkXSVdh65EZXFy8IU0pAyO%2BzO5Ix8nG%2F49PtFZ%2Ftd9JqaosAJfCevyNKnatKGzG9wS3jQg0msINRNC5sEzoOKL3Ur6WG9KkXxh0XKCNhQMYRq5ePclRD3F9eVXw1ElE%2FaUfa9N3Mu5Q8%2FJCGgJoZJKE6n05w2ayilOdaQIr7EeyE7xlVW08A%2BWTwC17Kz45lhkLim3fqePQjM4ZcX1orwyfqDD2e1XEKuC7Mr2PwSDCVSwuIMvvcZiwXz9J9BijFgxxHDVahnDcOwvPzw0ivTGkE2eFsHIWlSvb6iDe4no6FofXLmBmxSdzdCiGPiSWJTXWRBevHuNdmhRz8sKc4Iy5lu7A3gVnVYY6VbZdQ%2F4xLUAHShk4iN3GmedPAyZWJBLZebv6WJGq7hq9z%2FP865%2FfjmdWJyQzV7%2FTkLtisHnWWNrCEiTLik4O3bCw8EK4xnBrZ6a68%2BDo%2BFcKLYRutrL0ZLFGnRQdHnDghR9bpYa%2Br4vbeR8CuyToM%2B%2BiQz8BCYf0qs4xID7sC0uGLf%2FYLAUK3gU3O76v%2BM87KX0Y8CwW4T9ratZWtEKJQWWQj9bK7dCmHzjezoNQ7jisATMdR%2FNg71PEkv%2BykdC2MJuDMOjE28QGOqUBuZM29Mwc0lpTbhXhklUdYeTAZOODZkb8mjPhfDxpU8GPehZ9MjSLs0iP92YN9tnaIW0ECo%2FHZ0j4%2FA7nXE%2F%2BwQ%2BvZXvs%2FGl0QUYzJvRSb5CSfOxRIKiTKq3pkZuSd0r2%2BsBnSaVTStawfwg0FejTk9B29Gomhzy%2FCMaTPjKQrm6lqCTXWxizFPXBBFdmMOLP3hxvr6ZJMMlk%2FY7xj0bCgPDifMMf&X-Amz-Signature=2aab1e874c234b06c3db8d335364be77ad51a15907fc926c0e565fd3a16199b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
