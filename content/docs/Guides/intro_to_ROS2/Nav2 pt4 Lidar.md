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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WLTJHY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZS%2B04H9AltR8SiqFNpE1WnM4fgFrN2tnuGzt1OOc%2BkAiAQfywZ2cyB5H22RAZbjfEVdZxktv5vshhywI6nzEPv7yqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqLtgF86RyQyPvqFYKtwDCayOX3pPg13Z60e7fNpRkSBhqlSeeuD3BakOYd9F6nlznwv3lDbfeLFlfQy83aFw8ipM452LrPojFssdjbZBVADqVQgAi7LcP9iP%2FQN7Zkw9Xe5hZ8gaFz%2Bq7f8YCqKOPGEFFM4aQYjvGdu3I%2FPNiMI9520FLK5HiQed6vS%2Bw75JbVf4f0Pmb7DHE3eDWRJXP6CWihoQ8f9oVG0DaoYbTRCyNXCCZF6U%2FjLJCG9SDH9qNpo0K2RhRENJfAvNoCb%2BhvjK3cVDzVeXH97%2FGVYOTsgE6pYXqh9gA4K1%2BjpwPTEOOfHFVQzcyHjUtRBU%2B%2B50NSKD3M7o%2FYThfEXAtO%2BU9WKBkSpGC0Z71FLLSydkfdzSg3uhpPJhPi%2FxfGIWXU1ODUDQWMAW1zLwY0PpsGAdzNIBOsVy9WbV0KcsOlu1JF4ZBL4umKABjVXXPjKeCJNc8WG2IJ7JPmJAdecswHYTJ1tkEWnN5EVVsRCz1Sn%2BNKtoRNUP%2BHHw9reVjWGwm7MLCuQbZy%2Fj8%2FCYezrZtHqpFFCHwfz1q4Oa2Ei1rXrOnNUlHrg9kUYA9psrOc3Tm5p6nIoFQt2cIMwLOtHwuUTsOobPKAcRsSM6MglienwMdoxWomj6S15HwAvOPLIwlpnixAY6pgHbBcQCccLmiORM4QflQURgWWtua0HMxxtS9UyX%2BRkuQjO5ireM6WrWcy85PMMvD93XQuzFfkRME2eA0xuurcyRcg3lDwxS%2BDx0t7Jsn5i8dKRWaHOPCAh6c8GjbO%2BjHVGvcWOtZPsS1%2BKYZX2zDzYKevu%2Bpe%2BaAxIU3J8mfhclgDbNMTM%2BnWV0yC68fDbhXsk3lLedRfosAtdCCdKozlsKgwpi%2Bi7m&X-Amz-Signature=ee4f6ed4a61c1031679be162f3b4fee0c0cf19ad3b645b8a6a7a763ab1a16faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=cb1a8efb7fedb568a2182022eba59af25ccdde04f8ee7c10b161abba8f0e4fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=f6d86990437684454335b268e735e8ef936048ee5b99c9901bc1248a92c58899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=326b39a965857245285741065c40b8e50fda807a1713336ca3fe75b4983f8b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=56cd15eb99623ad893a1796babb33fe490c6a0bda0e3a2fed824609c2a3816ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=8f70b5a90badf82433f3f34642bc196628720b8fccb6ca729cbc7c07e435bc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=967479396b5a7612ce092f4f699e4346569486a725e8e70f2a3b20e851460748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=aaed711d0436aa3ebdf9ea607b5cc618fafa2947754fe896d250fbfbece94d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=396d0e66bca6b820b40e981d09e387589f0a6cdfea873d69871ae565d68027b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=71b09fae43b7f42e4229af9e9c401c214a591dd9e89c05b45427f4ae839316f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQPE4ZH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu720TjRQ29pGt5ti%2FRK2OUSTEnH3mHjY%2FgRJQkJrseAiAWS5y9YDvHlV0JrClKaocjG1l16m6QrtdAuQ2U7maG2CqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIcBLSu3tBV3wZnKtwD0AtnQwsM9OodCuKuI1j4oM4uWMxtiUmeZwlByxq18zKVF%2B2AFXQ0o9SiiNLHXkd3tmiqY8ApiCcuEfH7aOMMcjnrAm7QqGTHnbANQL%2FQkV7Dvoe00pTMftDXAUEM99PWdOoNgooNkpICQbHj%2B%2FCVhu309d0kYmHCoadsukTxYyx4InQRJPqRAr1ZnXVEVHkj%2BKmkLX%2BbNcadQcYpPOQ1WJQGFZSyIfhGK6356yexM%2BRjNQqm7wE0V60mkzvEcXfCM7fFCq%2B%2F8fpn1VbPiJanfSj3s4jnf5l0Py5WWswK7J14drWmS2S%2BW314JiSTOi9EXWidoYoECW2dFRGB8CavuqLncwzyBxx6C8YL3MuxyDkH1%2BB%2FSy%2BYrWiTWC%2F78uZ678mUVqko1l9BJbTOacKrQFt6zeoD1CZ1nuVk29PO0JYjp%2BYI80cAp74%2BOCUaN8%2FbTSW38w%2FZXuM%2F%2FnYtGfQ7eyF%2FOzJ21AYzQ4wZiUOQVm6vNbsFdeQrEW0EjxBsXRarHhPhMTZrJqZaBCEiG2BHeKEQRNko7VDtV23OfVPR0pS4E0JIiMe9yiIfWLqdEdxnh767BSpMeQSmmFU4nVXZOJWsZ2L1juYmaz8oprLWrKFgjQz3A3P6ToxbKoowkJjixAY6pgHj5%2B6O%2Btftx4Q4zp%2BKhFg1cEjdHw%2Fjl%2BzkKka9vgTH8eKjkglQFSNouyvG%2F6CdbxT85EgtGyWTueMTNYqwxhWhh13aNn7d%2BuqAT25xf3cXplBcM%2BRLKGEnxadCJt7SflMNI1LaLHB3TLSZ3peWzzHlXumq1TOjZnblBRMyqnx%2BZxNXLykuvzGUkefWm2Emq5Ke%2F9BOb4%2B%2Fq9eMCEE%2FJr0sJo6edvgo&X-Amz-Signature=d39e8c13d3418b67a74cc434bef418f0b916d5596ce1e9ced1c855568349000d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
