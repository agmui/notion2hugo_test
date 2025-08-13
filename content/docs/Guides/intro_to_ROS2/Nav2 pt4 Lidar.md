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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSSC7AB6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpxfC%2FzkptCuwuoB8bCktgC0if0Cij1Fyydyc1GxTAPAiAT5pJ%2F6nGxKplWk%2FExr3qVYNWFQtstiAiF%2FcBGLLgWfSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMrjovJD%2BhImDGdOrXKtwDUALJ%2FN%2BfUveSRRjQfysB%2F99CtjnFBAES%2FiH6TzP7PciqTuIK2hQoOghzt6ubv09ElJMnJFjbyCB2urppalK5V%2Bk9V5gEnH1USPNwM%2BM2JNP3d%2F%2BJ1gqECjLZS1w%2BiHpN5oPwh24xHXyCkScTF%2FpK4uNov9%2BqwMZiXHzWCjbLJF7yVlhPxAO2uYXbVMTmJBjSQ6EeKiKquzJabtjWK0EdurhvWniXv4CjIi0mL1VzbaleBwvZj2ggDLKeVlMsP%2B14ZXmCmvEKnBqJ8lv3K%2B5vZGR%2F99MsyteuheJd9MGKH5E8euRsDghwnZz7JHoQlSGNf7tyF18dE8LUj5VCbks9Fhi3q2e6A%2F67xKAUp5MPWNalEygEH6P7LS%2FHjtaI2b5CKPx1fAIPtBrtnJqw5%2FJSg3%2FklACF%2BYoW0vsgvpVSyN%2FL%2BPs6IprzNgBZo%2B3BztIS3uIHAzDAHSS4Mf%2Fp40LZ3CRjMAdUiHT%2BuM0IGp02K9OAx9RWDJI9ughT9QApZeqGn7%2Fl%2FG7cu8TjjMQaqBtnnY72eO%2FrYdxXqOQ2i3Obrvl1bJXqEkQrvKg27bep9PK19lnC%2F9xfLlOKDqFB%2BlTGc%2BdxRzYDbI6ZLXuK%2BNrOjF5GeTySC8bjOS30Pf8wrurzxAY6pgG7SrGQd5Ko9efZejlkkkmVHFvrCBTMn8TL4ID%2B0%2F4%2FqFWwX1Zcu5pyibVZ%2B0RxKzsRAI8VqCUrdPpXumyCWBECkNgQipSqUvUZ4YF77afGqsuRobOldCfkxfaxbizMvcMSM9tqKwZjreHHbnxJiWvIi1T%2FoWv8gKEX67zPgoJAS0ClQ1uVDZOJn9lnzPXzcEBNBlNHTVb%2F5Pqmpd3RfJSLkgQvqJ8y&X-Amz-Signature=b7c1f726dfb65519cf4d724a371ac94b84b0639ac5b8e1fdda4b83f24afc0e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=d1e2eb5afa4a5bd5e58812446f7e97387564df5ac595b9013a5b0e393302d0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=a7eab24fabc850ed20d712314acf6bdf9277e20d6c1a8cf60612e4ed493983ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=b35385799545187cee6a375a1c60284bd5ee9d6684648447961bb37f6b22e3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=c984daabf7ec15a439ac4d0f275c7430c173fb9be3edf28e551e4a619186f489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=b96f7ad4ce508fed667e1f95b6f08700254bfe543da874cde47842554af10d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=893a23054e45fc459e83de3f3d6195d67e96acbd3c7aafac444eaa9bf838641d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=8c6f13df1688bf966896efff8833bf283d5f6a8d93f7407d5bfe9ee969bfa035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=164e6edff3316a85369600b4d194e8a1ea1b7fc28c0694c0e96f901f79d25f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=d9158c2f71464772cf96b9bebe188a36ee785d0f1ddd12352cf88beca4262b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q6OCLA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4gsLQTWO5GCWV%2BNBGxRSiLVTY1YJ31pk3zjWuxLxwgwIgYv7PLXV1wTgzuJKaTrTJFvWVQURNM%2FmzkHVXq71JGesq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI%2FLy90ZVeBLCdEYiyrcAyxhveJuEnFLQQv9mkiydxtlKRzWxyms6gBlp%2BFqRwX81jNyotTUIsE%2BW7gpSlkAlD9uQn47NQOmiDeqJQ6%2FZri24YUZ0iYQRNovcISGQURZ099YEgjf4T8XJruHPgx0F%2FaCwwvQsH9lQbKsCok7sOoaQLiSfBvz5piMwmaurv0%2BtZj03WJ3eT%2Fwm%2Fr6beaTnSOTR%2FgqC3RujpizIU7xgf81HmjPffyIbXEj%2Fi8S%2FA7sT2eEFJKdjbxOEdm5ONfDFw6i6dTcWuAmrCCJq%2FiTg7kb9hidZFPNbDxhz5FpChpUSIYz%2FdS%2FE9gOw9oUDQwKscvgIrDIw1PloLDkE3uMd65an7bFwsNuQd%2FI6MIkc6MNZ4Rg362za2%2FK1b8mLtr45%2BMHtlDTgAOsBvN8%2FtcH6dH5FKMoTVxNPMS9KCmFJlGRg3wstD3oA8hYxBijS5RI1SozgtT0ToZZaOIA6NnbgcwF%2Fp26hUgf7FFR%2Fyn4N%2BiWKP2UvRovJyTLJh1a7JeOXA8FGDEQirCQQFMquay2z0K%2BGkYd66BCYPaIS79KkK3Fmvawf9UwosY0vT9tyMtH8CQRXn6%2FxA8Nixoh7mzT8l7kpWhIxtXFi5YMSpNU1KCHXdvBzG39%2BlJHCfxoMJDq88QGOqUBKGPOpUFp8w6cyALLl95KmnsHMqomz7a8%2FJdZoXOur4MzfpWWiqM4V%2B4CVgAyWmjDcPKCGGPgaNI9QfOA6BQpdo5dYB4nwem%2B5Ln0g1yPXeT9RoeKTmB9Wz7NsIKylps3D1xC7tLaGlZdVJgtxeh1VgryQCA0Oc6xz%2FU2Al7upHyEFZyyeLf0rxQjUi23TPRGi456sH6C1GmjqpHLhHE02jfLwTE5&X-Amz-Signature=3a96b749285b96231178eb5d3586bdd71a99096b257136413caaae9d01d3bcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
