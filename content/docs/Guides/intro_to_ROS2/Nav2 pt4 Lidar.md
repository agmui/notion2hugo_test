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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EMXNS7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCPgQVKcvIt6XN%2B6NPwUhDRhT5btI8FqAbeGk%2Fusu6uowIhAIU3%2F3a7JcrS%2F9Xzeb6agNDL97%2FgeDnJEvADxYy7DqUDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYKuEZMM08J18jhzQq3APPg%2BtsmSUY5DOq5XT%2BaktVKScLZiNrKQzL%2B8WwTZAm5CmKgQ7e1gi1FVR9J8rib9p3QSSU2PtllaatrTSHSAF9y1gm9MeHfX6cX5o1MYl5ifIjsuqFB0M%2BqrLLg0mW8RwcjR1Lds0GkiYMuSEAxC96we026NiFRJ8lXnWwpanTq9bt6LEqbjNHD%2Bg48ukHt%2Bg2QHJg%2FwCH8GCfKEsriyB4Wj6WRtg%2B3woNr0uBQgqUGTV2Cn8YRDXZgyoPeNvIGZXQCExzz5B58uE7lGgJVsPIsakyjPTwLhH2EBdmvKrdpfrIXk8CzMaM5v72f7xWUSvQEhSaIcSEmsjEhMFx2eCGC0dg%2BbuxvjB%2FYOd8Nd%2Bgmq7XuVWtpUqdPWpnTNzFUBgwVr8GE6la5O9n9kPCfbgYTuhILOHtYqxhIWRSaUdKIJPZHCJgK7J8j4sODlyICJOpRLsHuIdDaAfBTUA6Vd6%2BkqVuE8iBTR79BDCobk5zoNW1RoPYdgT31e%2BVhQjwdYXymfWf3Oz6Q9JNLoXqty6huYxp9p8ysDWSiU3LuYDhvPfOKIF9yTbIfwnElcvW0y9sYgr8ETYrRVorb1LJtpYi78aNpVh0ayPCaIB92z6Zyp9iC%2BcA8CjIX%2BPOfTCpxNvEBjqkASU1gWB6Z6Cpgyww6CHwo9Dew%2BioVklgkNZ2%2FYXlTW2TVR5cPYAXlU8C1yvXokiyMxM%2BfuNE7xLxOnhf76gtlcK5%2BrDwCzVttwgHfpbPh2kvv5%2FKXXGITakUklQPNtBNzuAt2GXKFP0n9DAIpHonJBwMH2wvJPP3HhBfg%2BTy3BkOC6E2hZcxvlGXBTAkx5LrZ%2F9kiGFUlQAd0LYOZ0POAVW%2FW3Kp&X-Amz-Signature=48b9fbbcec92b89d58ef3c782ccfae0aa4e85a6aee04c550860b8620366d25dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=010af35b4635f7665b4a12a0550dee1a1f17b50d79e38de0abbb289b21ebd0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=30ec3259d97c0991e14f70c595b958482033bc90c8d17a212a07a1d2554c0869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=83699bc4ad3671929242d43b7d4da6e18e34d693253d201176741d6b5cd4e1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=8917524fa171e7d5d28723794ce75babda6764729cdbf628897deadea3f44841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=a7462c9e4d0751a6b5e9a87635e95a3a2d73c86f960afb5a0188677dbc06c282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=8472bfe58e9e7ebbb56881a2cc3d95c4aaa824ecaa3c37b8581105fc7d74556a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=e4213439a8edc00f8627d9dbda563a091aeefd299628b0e85a290d8a06454098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=ff77beeca03fb1961ff3c7c7ca780b638a6113808aca3267dd5fd30b5d211254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=1969452f2384d28d1f8139eff126e781648e39c38f13a820bbeee81cdb049636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=8917524fa171e7d5d28723794ce75babda6764729cdbf628897deadea3f44841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
