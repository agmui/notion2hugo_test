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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK233DMQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCPDzQsN0n29FmxgdzpKTefi1YfiWmOJq1UHK22Yckl5wIhAJfMVjQFV4GeDNnb2NP9qbhSfVDD6fjrZiEI%2BzEmFbQJKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqx7x5TDtlA%2FYvkmgq3AMyPAt1w4QVMjV5ovQzKxFyk%2Bsy5WJSXZq8SmyULxhtgA6LJqynb%2BhzyCYvcUfM26FPF12z2TQAD%2Fv%2BRXqYvUN965RFkh0xuTiEPBQBIsds2Mjj1T8ZDJ9h1iv2iIZkvbPoqk8rqBdP39KfvXzCIHqUgYkFRtmccg50BSx7En1oguGvWaX3ADUJ%2Fe8LwgPdKuxCVrNLoznL5SAyBTA%2BuHHuyW91QJChtSEBSp2kIAi%2B7BlKK33C%2BiqnazPlMINTMB0tdIyAidmeEU3%2BrlAFXnQM4v09MbIrq6GMjsrRBQ0LcyKKbmugCiyyUpt0FnO5esgtD%2FZRHSWCC7zoUNi21XoMOU2KgSyEUfTOXV6dFQ7R0hdAdMM0hWTZxvHsNH5YH%2F%2Fb1s9BuxN779tahOjl11eSGlJr1iAux5WMP%2Fm1X2wQzLu3IZTZsdvudcitjF9ITJVnXHzxzYUsSG%2BD9GjuAUaKhzDc0mKbFvXwVFcHIUWxBpVCljN6hMBUdlaC9RgL510ly3RTWNsUfaN0mwvkTtKcpES%2Bq%2BPBsZbKGDU9lmKpO1RxSyLB49VgbYIlgu4ybUNO%2FFmQ0bi6VGSOjTNo12H%2BvhsvaVmQNCGbE5At%2BVoWAGvOIJwWkYAvFZn90zCgs8%2FEBjqkAa5uyuQ83pi5uFQCWuKxhnvhC1yIAqORBuneNDikhJBNMRINg02Nh8hKHRltdS7VL069OSQy7AIRFwTb7fH9qJwZCVCmgLJAxJuISWSRWiYYJvqD3MrSvRTqBSFGXFfevL%2FSdtS8trPvvwrI8V3tRINyglb4UGiDLBvT8aDvX4WeCFjAwbMLsWgiv5T1Vx23BvsXm2wZ8%2BgARbEsh4wndRGyutnc&X-Amz-Signature=2c5cd08644e789c93327f4d6dbb7d4b807057e0e939d34a111bc9cbaa8ebe617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=c1ff1bed143a116550b2f62a80d5f6c3a1fa70b72b1ace9f371c990724d81033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=b6ed3518810d9dda1624b59f97220c6e123c2dda2d27fec6d2cf403d9222ad1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=a5ca3026e6ee5fb7faaf24add8cbee90d4cd6bae15834401c9a3748355d55b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=6ff292fbb2d130689fd6f67ffae2372325315c3ab2abf176eaf6360df6fff29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=dadae72e866fa52083de46719187a6793fabcaa7a726fa031318bb995ca4ac69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=4aaef684b2a2fea7316b6ce0447f6ef0d1454d138117c5785d04be4e1052d032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=d670faed96120e01b465a00a773dc4877bed4bd195050a706dd9882eeaf30943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=993529632f9b08d3767519126de064c668d893a6c0d2a8f2812f2abefada125a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=73976a6967e8cd319716b2fdc108a27d79d818a8d9ac3227f358a3182a18906b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQU3JRI2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGKMfeZPcnZk33sAYk%2FZFv4C%2FppYI9NxBkOVVkL%2Ftpo6AiB%2B8%2FRi%2Bm92AcmFvqCkCqEpVfRcxiAUIHwnf1QtPcebSSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf0qmoW6UCbXgV2J2KtwDMib70LT%2BoPTNQyT7A%2Fcsx4bIvuKFcDegBJEnZVgP7F6V4jMYjsXKq6UR3cev%2FXk3bIQn2cCt2b5EFXSSLONdbJd0iIe4uKnxokSSF2iOngUzIposHhxd3FkQp3Mg6KaXAZVZeHzvdLMbqd8XbvuvxpONdq8zY51e%2Bd2kWU%2FSCm1xMIp8C04gvsqHfP4Eo7WDS1Zbd6%2BpRp2nbfqT0acEM47MH4hTF6jNtI4qXr%2Bafcqy2e7jmfI7%2FEMDdrs%2B84AJr%2Bgbt6gzSMKeCKjRIXnWxJZBDOid5s8m3ojfzWJe5JNF2keabySU02UZt1fZtrPBfxpZNJvghgkSe%2B1ep2fBsHuA3upD2RUtq2hDsZzLRLJJ1bodlwAkHaxOULF4qMttIwwCjegeivQawpwhIwdujhiAVDxJCophxiybNVEyBjaEpwRkef5crhdmDdAJFxgJzktZ5kWlzXrgvRJZXfgODJA2JPlZMIGgZJinJMW4%2FADUVuOZcbXCWRGM7qX0WnlHuxWVFt8AlHFn%2Bh0DOG6cZDQhv0v8lYKnc3ykhUWMtYkOdkpy4iWCpwcKmtgIE0y17y04FwsAPYKdEViAWmXUv8WwBImbj1puoi3m27M%2BPVvhqNq%2BTdXs3EIYHtcwlLPPxAY6pgGsJZ%2Fl%2B9tqYpnz912QnjKyQX5uxDi5NPqL%2BggiKJugSK3CMpwEfi01mMS9qklymTWvHqTlP%2FbBmbCFndgpdkcN%2BaV0Zkr0U1rjH1Cx%2BJrzp4TFlLIxrXjNXWTTLGbBtJVEDgkZ%2FxzCmAZNCSvxALHKC0aCAhd5J6DvpAqgwbLp1MBSYmpiax2YTj4RxHgXP1Yg32USNUPuFjya4LF0mYOdU0xlzwx4&X-Amz-Signature=6ff292fbb2d130689fd6f67ffae2372325315c3ab2abf176eaf6360df6fff29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
