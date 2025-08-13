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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DQ75BFO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeriqMOUBErdrfhg4UnupfqbNhCnX5YlDJIdpvS8t7KwIhAMUd6x7SmPebZOLEojLd5Iyh27LKc0Av9cTT4q6KQxE%2FKv8DCDcQABoMNjM3NDIzMTgzODA1Igzybbqjek429cCLx5Mq3AN5Fpswzv%2FZwHQOCfnFXIGiCeXH6JOjCPh4Sn7D5%2BszaMode1uiNszmrY%2BSarTCOLWl9o%2Fodi%2FueYEEFlOhIiisFqlPtL1vBCIWE3xCPlYUKF81YXXdGygUc7Aq2WkMDATzFXfw5lic%2FdWSdcMGi5plt%2BxCojBbJ6LL2IY2EISgjU2NiRBMVO4XJXuIb4EfKJfLVdWqAYLSZ10F3cEERMGU9bnDBguE1RJB4%2Bm%2BpZzHk6wqvj152rYlEHWDp85cK2IYyyzMV970fz5SJ7rloSDBC%2B7PT2VyJR8quPMiR09nHO4Sumcs9ue6aY6oyXG2Xfc%2Bobyr2ENXV0BW9rM5YjRGVkm23piXN5fg2bRHwm7oMWrY5x7k%2BHOULDbz7AXIXrIYsdy65jOr3UgqsZJtRXEg26vfklGEy6bzfCHR%2FcfP0HffRPLqG9lwbkgptrwPe9OxLHK%2FdFOz%2FrFCfch6ypTyK0UakCD86Sv4OrQycb5OuHLSz08eXYQ%2FexPeljB4btyA37Wfa2oJQFOOi1ncb488F0uI5ylFcrhrXpwUPomFrHtPBayTWCGCJRU5GBxXbNtxGw6nYOuSh8bx0EBT28J3k7PmKs1KpIBhgxJ1eRnJr1e%2B%2BUIKv2F5D%2FngxzDpj%2FTEBjqkAUu38qYRWGsZMau9BaqCD5co86P4%2BFf27sl%2BQLuRyIhX5%2FJxSXMfuEliNf6ZqQMnxHRae0qeGtt2nuz9sX1mVrvfTQ%2FCxLz8E4ZuH6TbkUN277O81zycUYjCTIw%2BCj1ERvmQRMjLVt24F9VkN5x0oa1O51wJ4ZbhVc69Jn%2BSOUoStU%2FhvaIy3IaB5qLzxVgXnCJSScywYtZzViWTNmOrWFIvNZKn&X-Amz-Signature=70adc390b4b80143c67d4d88251bb64b4563a3d758167cb17aaa0370e511480e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=7984ad0d652fe3856c1a3798806d26bfdafc6cbf4e2bebd5f7570e2ca678d7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=a4e8c6051f734a092a5ae81d2b7c4f73bb636d7182cbd930d54515b52a09381b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=2618721f9b832992f6b5d0121314e134e634ac59debf053114ec6096b3d4dfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=03f8e55b7155bc42e98716f610d4a57de9d83328bfe6c1aef03b2b8f2276e1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=6c714b1f39edc91593551ba8057813cbef730f85ee8265b789841eda1e31bc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=ecb69f631cf26b785536563ca8f98c460ed6404e3f4aba002b8871f82fe21b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=fb289693b710f7e8962728383c1f6cd51a34b59f8203ae2fca4f3e6b079d5678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=8e03dff76d6c988dcd1f1242640dc66cca9f65fa98d5f22b108e8c84d6e9c877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=2272a3a6b207e0fa78b49b767f7116433f810335297240940a44a278ff6a705e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETKHLU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtwyQUtdjPAIhdYIcbV0Qezvt%2FMWQP7v4eVSdJH2RBOwIhAL0PyoIDdh%2BLYlWNdBTpkK4FsiR5JziQ%2FXAczew2wu4IKv8DCDcQABoMNjM3NDIzMTgzODA1IgxYntxBIQgrKJMdNVkq3AOQRbZezGysJVJhpRbuMpFNMM8gevI%2FPIx6GsmT7kKINvGpa4GrVNvmH%2Fc4SgZK59Eikrkdz6TQ%2Feg609selneNLJ%2BUJYCnZSt%2FiCXrixmiG3UfzNeTUpwKPzhk2pAjo7O8o%2BAA7NATKJ8prBP0jIC%2Fj9oM%2FXjUchPapJ%2B5Z%2BksaZ6N6L6Pk4aSWS7I71CkGemmG9QfcCn9UHBpfWLIrabx1QfkGBlgLHErfxa3jUxARK5zt5HbJJ3OvM4OFauDD03GSzFPrT%2F%2FcPS7ZVSpZxFwi6f%2FF0XZVc0BZQ7vXmF7Uk8cakTvtalimzzVLwz2jBBIm2g3%2BmjRnd%2BwBdfxa3ne5lJXtDrXzkOHcXnmFH9rvsm4jOSfBpsW00iVaUyH0%2BokYBc%2Fs%2Bu96Nx%2B6uucIX%2FmIhDg3pkRoa4FSVJmZ0TAd%2BSBQf9EoyMXUdFGCfLTA8CkdEGqlsZI80yHWVDiMVQP9TdKjbTeJxdC3KqIrIKVzJpk182z5Utn5fnDAWq%2FB6OxaAtPYFEQ1QILJjMUiFxghSZnLt5swQiuzh8zNpbX9YOAIcsOymCKbJ69DAOC07OZnCOathc4lLK5E8za4q0BjSrQ1dMVBT0%2BTvHaydEW9hQsA5Z0qZ35yQAjAjDIj%2FTEBjqkAcZjs3DYW3lHgTGSrukrBK7cSvZju6Ea4UfpuoJL8dULuFSMlJnTN1MeDFzAcs8ep7jL%2F3BvTVNBWrKWaLUbTB1PMyQ0TnNYiO3ElwTS2BbSgho0Rrto0Hi%2Fe%2B1U8HHiyI7GyL0ukpnz%2B65HqJxyxTnaROVTNJWA6i0WTa2Zwa0JUze5lbqNEMjWrurly%2BEGjya2DP9Ng3fuh3Nh7suXuuuP7ta9&X-Amz-Signature=03f8e55b7155bc42e98716f610d4a57de9d83328bfe6c1aef03b2b8f2276e1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
