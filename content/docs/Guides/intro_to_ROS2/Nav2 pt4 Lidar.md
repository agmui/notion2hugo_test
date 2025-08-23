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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WI7MM55%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt9OYbcfQDA4W87sxVuRBtKRHlQnu9c2WwucqJbnHVmAIhAN8lkVYaXlYas1LVCaitZ8fhAxPgDgn0FJUGOBdtD3AjKv8DCCEQABoMNjM3NDIzMTgzODA1IgzA0b7CH%2B0c7kJ6ld8q3ANmF0am0xoaeOp%2BIWYk2DSmevxFJJ9lcEmtViKQvI5oY7F7L3qatSfzXm4LXbjO09xeRTzQP9wjR4PcwYUFAr9wnNTgfirxYcrhj48reUZ9CsRDoF3Vhj4sCtULS8t2klSP073S%2BRb37MSu3WX%2Fp6jj2pywboNky6YN0VcsCoqHr3ql8S4jg87yi%2FjVe1fd2bybbyGBAUXMzBN8gfVFYuOiLLHBYfOuC3dQtL7Q8JyMEygk5O%2BMz59az2r4aUMLapInkfTSA9kZXd1f11g300bDg9HZZtYMmrxLZQoPlbHus4%2FwK%2FPeRBkeqy%2Fl8UyitkhQPzhcP7NIq9r0xTZDhGMnp3M21UAt7bQ0OKkQqVE9%2F2wTJDqXITddN4BbUxwFxJQQFk2WJ1r4okAkWN22%2BcQ6IKxk8k5TEQzgwbo%2FrlP3N6n2XKT6JmoMt81GlQ%2FRhgvR2r0bC4el3igiMeQQQLajr5QctHdFAfauZ1JAJRV52Lse8bMTzPhWQTXONJyDuGyX5Qb0yuKxAd4z7pjNxqYfwgqMjCDnLzNNSRoQUe0Q76vkjrYHtP38UE%2BcGSqCrxokkUsdl3HUSU6Ef5iBt8nqNhymWPhR6%2BdcFUK%2Bb1DsXpGRg%2BMaxYt4ckwmzzD%2FjqTFBjqkAX8uYMUOu87H%2BUu%2BJm3003QffY9ZzGk7He%2FXkOgGIGCC0fPr8O3JbiRG59kPSSGaA1WwKkGsQ6XICGevpuqEURXXHDefB5DrqqJADrO5So5GsODNRgrewLa8NziS1s6JkDxzBJqEnJAsBYSTa%2FBj0oacDpRqOd%2FUXEJCP09qOC0JgjL5j5qnriYCkEqBrgXn81PaFJUAmtIsMq6ZAxNV4IsMs5IY&X-Amz-Signature=adb652f979bb439a137b7aec55a561255f0a4f71dc9c60341ac43e531d3e4384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=41e29b2c7e487a43155015effd6c12c4d402d4b1eff872bbbb26824cf92c9111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=9c7739821b3e1860c7d9815d0becf9340f1ab5a496617e724aa308487eb15b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=9a3e000ae31aadf5dcc865cf8e3ba4ecae37d162b34d16918713a18f01f624d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=6efd572bf25481d376edb9170b305cf359469483f7552b18dd0955f7270d98d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=61976d98ac198c476ae66d8f4f65d7570b36e0e2856f2e1fc8876794d417791d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=f9f9bdb57504a43fbf217c2d4d0b83cbb119a1633b46acd0e53c1387df59a9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=a16c958404ee6ef51f307be15cfdcab6a4a63c4ae8b3d4b2d2867a92cd437967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=c3be8840aa0a43c928fc3a600eb855cdffedfa872c6718a546e65f826dc3466e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=4213e4c5621d57df46ac3a4290d40b0fad78e8b7622df23271fdf0d42d5fb4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWBBNEU%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmH6CW8sAQvjgV6Rx6PqRVeBIX%2B%2FCt8Sb03UGRBkY%2BLgIhAIQqyX0fzbd34duucHFiaOmtqcZzOH5Q4IeBdeAI%2FNZvKv8DCCEQABoMNjM3NDIzMTgzODA1IgwZjUiPLJAbPKI6%2B8Yq3AP8as5Uda8zl99iakh51KXGHaD3DcQzBE4ufBe4%2FKZDHboHrgQrP7SWRgy%2BdYFE9N3jgX84X30rmpGRTTNLGofKWretzgybdDLVT72NLOyeR4a9o9AYapQZ9npCzHkbI4MZUciuysqwLdowsUGx95a3rG95xGiuqYLe97q1Z6fsozceXeQbrTmgFTl7EFTXA67gH72lmcEzpdN%2BR6QgzN0foSIFFnm5xnDaTxVH46Ks7x3wkkqwN6m6qWQQUoevs215av7hDn7uoRPenUre81JSe2D0SX26nIwCgckWfztVL7rRbzUyMOMipUolI2Z6%2B6jE%2BB6x4SLmBz%2Fs6xsmU7%2FPbByjhvtT9up7Dg2kiSWvDyPYc1YqM8xC6Bdy8d%2Boi3O4GHRMsG0g2LAysWHgu9ykd1Ke8P4dh6vpDCiP%2BCgkLGdIxUg8YDEAgepmcsBwPwtyX88jn0I9b7kCP6BFcVub9cJC3uHlZ6%2B0Bz%2Btr1xCOFcIPY64EgKo5z%2F2ry%2B%2B4zzj8%2BJdzX3p9CusaL1fcsMoHz5yM0Nft2PSnOX2aSyS1ZfoPQpIGHi7BQSnRWNpk5U%2FAVvkV8BXhwNgPwnryTirvbb4IH5tSWRRZ3p25DzbiCOFD3jd7GsFjvRwJTDoj6TFBjqkAaCLE8kwybAq6V%2F5ohns5s3V9S5mYG6zhX%2FS4qHsvDhErJcXbUIbHAzO%2B8Lal0AjjcRmjYNvhdOO1FXzIVxcKh158MSIc5H0qtg9sBzHquaebD208EvEFdMmh2SmA1FGadjSRlnynHajaqXkV58ueC3OBp62NjCsr7wEd%2FzVMLBbL4croeDFUZi8gI4TNxd0yPqtSnfp9Z%2FyqJuIvNIxMy%2F%2FU2oO&X-Amz-Signature=6efd572bf25481d376edb9170b305cf359469483f7552b18dd0955f7270d98d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
