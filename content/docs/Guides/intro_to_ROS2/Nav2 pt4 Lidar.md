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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CNTOBJY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1V8Kcw8Rtx3rqH9HZpCGLQtuY6TeaDjREOzX2MJ00gIgalg9txWk%2Fq8rAr4ayOsQEhd5xswTo7NhvSVrAYI%2F50sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3wIdSpsCszWvOfkSrcA8C3KBXLmyWovAC2uk2JEeIV5OiAfJXGETM2T7Hml8WsJGtkWizUiHkY6s2NoQVSWORQrdk2ggj591C3oOynr5S9pwKLAr1RkcGiTFp%2B1rifh1E%2FZkzOPd2MbuMr10h6BBvp%2F89b3ckwG0iR%2FSF%2Bw8SSP7Klh2P2bax5NtgJPbUupEL3ZObvPa%2FzMeFN085PK1MP%2BYNs6tr5mIaQDxWZvGzPBM0t%2BdEHkgFtz%2BtdsvNm83VXMYyYtDozjl%2FTnQJXnV508uQmjViN5%2F77SJnulnHmI3PZDGqArrNBBjotK36R92HnNtbUFRfLLvoaGLzuOuEyNSRK9p4q6B4DYRvQfMlT6WsYE4bovKgIVkMa6geILMpkUHOtUrt56B5IvFIbPJViKEyMTXS4LDyit%2FAieYLXoO3clvqH21ZhbuKO13AiC4yOE7BDCijkqVJok1%2B7jFtTsT31tV%2FLI1CKNecyBGQCw6rDd5SuwOMk4%2Fyx1%2FKP3w6nreZPsCkzoFmovVeAcqsqVT%2FuEPyPdArpvHNBfrCatwZvekaM5SPU4gKHVvAwTXgbzLpeyRl%2BL3vjKj%2BgKF2TZifNeWCYknWQahlYEJ1BUFjefP1hkmBSodYYAgVGt1wfeBqpDVrmxeldMMPD4skGOqUB5goUEvXdCKNPgLSjG3n1RwLDxwEYZXZa8ck1pCeMHP0aFz6M4%2FyHJhDdxHW9fgBcpdbeojFnn2pFqyWN2j9hkQenH6hfBNz8yiRHHbVfKYWGnEdpjLjvUtEfaZTWQ2WME7UBmI%2BSMZ6Ljk9jPIrw3xhaeulFJAlwLWLLyUiJsn4jsGZuAKMGRs%2BLNcAymDzkRRUjec8%2F%2FUm8WZp%2FuaiE8lC6mX65&X-Amz-Signature=a816bf135a5a25a3c643058bc97647859baa7d81b698caf155a1bedbc353d530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=f28b01da8b8305eb5d149bdd5f1cdc314829d650eb2e026b6518116f67b88d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=531a8449bab916cd551cea4834c52692fc278d64d69c42d8d4c9b966b9dbb31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=4f4f08a3c9635c8c0bae398a4bcb7dce4b8bfcc4891f6fb3a4b5d7b6891b0eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=ac39096a4119fdec696393b83c69974a4077d198eb2c8c3f493f447f22f78245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=3adf71a5dd9940ae39b9b0d8f75867ed2621cff6a1e8ccbff2b1bd95848196e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=4d1db710b1a0a2fe40f88576617a7e6bbfd5fd11d6be6e45b1ca718552c0a042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=af5856ff4f1aad860c5dfe735bc9f1c2436a1d1e6f7842b0d2397928d67a2b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=938fa3f4a9693c9511b0c61eeddca6d220ec13fd93ae49547c1d49141e1908ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=2d0859d41b3896d2d5a339d45d699a9fb8dc49a007782c784ea1d713669c8f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6ONDVI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzGysCRdeyt3bpOIJwTeoUdZlrJKXvtkwQrfY7GwmgAiEAsnxKw64uEXKi8bB40OZSxt1YjJjiIUJJApeODdsFHQIqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BORrYdvoNz30Q2CircA4fwvbdJmPgQQvXvNsKFHGD1W3joGA%2BwFiqKP%2FslLT2DIexn%2FCNs3GccEMAT2sNBzO0k2mzlvVRODFHkNXnM2AZ77N4QxLipAMMuUUkkjGfAxd4%2BohD%2FcunPit7QFqTYupeIIaOsEMhtGYpH%2FgunXQsg1y29Uf5JwHGfI9MlH3PC4SdlWp1ac1Tk5IWDD8qsbL8O9iMj70IRlFBkcTlyOn2aVhA%2Bp5Vhof60d%2F6p2y5mzO9EeaZ8b0jtBAwLpLer6%2B3%2FeOwpDe4JIyzQ%2FtYRu7JqdOE20dokQxmESXCm80Zmj9E%2BMk%2BQkZrGMfuSb5quLeUqgGLrQYbqUlprghLwepUq9ChM5GETEN5UdglH1g9E2zBxwGKjvp6gtZT3tjSGlRGhvrdUV5XH8IqBTZUcVivd4B7315C1Bvz9t%2FQih0TXr0NKSpWEgux2tpM8T1Ss1eM5Tt3equR%2FKZd5o1JnLB2U5p7aS8nxwNqOYnbxqhsJsjKXOXc6%2Bj7fpjYhWiZyGAFXtMoipvoyCDzmDt02dI28SOgQUULvojat6s%2BDy3%2BqjfYuqhbGrqP%2FnW7V8PYK8xdxmZoNZt%2F0%2B27MULFZol9AWoEuW3qfA28OXL2UXEUwNpTz41g3DIpCQkqPMN%2FD4skGOqUBG7bvF22HxTeEJrdweDF%2FgGSZXeOebfAfywgNlexID6YNqQ9S5%2FV89KlAMQgdEMeHVzbV3AVKdDWCJdUeM0gSO2QLb0XC03zkk7eZJROn5USfEtV4KpO66B%2BzSPpxIHtfapVeXrG0QWaVd7Py3FxgcQYYr%2FlLem6v2C29sAZ33rlwS5YYrbn8EE5WGL%2BtcOfP3vJhr1w4kesyTFszwznCz8CrIAx5&X-Amz-Signature=ac39096a4119fdec696393b83c69974a4077d198eb2c8c3f493f447f22f78245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
