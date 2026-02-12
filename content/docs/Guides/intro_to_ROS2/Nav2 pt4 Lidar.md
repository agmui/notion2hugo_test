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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMM3TM5%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBcHbxpXtnH0bzLKY3dDhmTINvwirKfHn4f0WUKEsPFkAiAi7vwCcNoz6gbDIhj7O71oP8UHqKdjX7%2FNVWQOiHN%2BnCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiy8C3fKr0jrgZEbuKtwD8VMB14YT52MLtTrXCiPKknj2Z8nmfAetTnzxgSwgtpWaRuKfDhU9XsrMAd8CxpDb5acRCoka%2BKLJ1U4g6RKcLGqg6k95LeBiWuVDrdAjTIUOgQ3nFvItYsy3cHV7R4cAgIgR4IITA4vFVEl6Obfy4eZbIcImeSQaPccE%2BPz5ntfPRiJwIpBerSpYcfL6cVBL6ItsKRmSpz6%2BwWOL6U%2FvsjESNaQg0pJZhFTXNH9Ph1ZTmPAbbqh%2BvPZ49FluIJjRUh%2FQtzbpEC6pj0kpcty08g0Mb30MjOGQRBUt8yGRAR1c7lom7O3ARkhJqZfFVvsS%2Byu53qow2r0IOu%2BI0z10m0vuF3SiWzO88WkAQoWLEjb%2BKYGmHMl3O%2B6eRpkMbdGf3%2FLs6HDpLqFQZ3H7NfLVaB%2Fc6%2FdjqzWbi3Aba5EuWiKZObM8ARLzsmzBynLtnDXtrDq4XvHePiicuIbdNznFZ2liJZ5fsZf0P0KIfv5xiiuhuCbKiBVU7WsT%2F00RF6PJorN7QtItWJsQ%2BoNi3rt8NXzyfmCc1CEZzOa2dwgwE0WuZ2ASjjIASdEWX1tYFZfZnur3I2ssSyEgKj8BecxZh%2BzP1dFZWUV1CfEWFRmw4GGItb%2FWJK37pC93Lrww5sy0zAY6pgErT9fzt3cyzt2L38l2KbxK4jubwlnLn7Kcgmb6a8gK48EHFOlTGnf80ywaNtevqUVuSaS3dgjxvP6TBM%2B7e%2FQwaGFMETO3q%2FYH9rsYzinKwePHE7FydHyXRooWuIGlrftx%2BhG26e3tmLCc3TYcHMWrARnLw6EL7%2BHaPAJptZga1Tt7cfy%2FKXgk83Eg7VvpXNKkogR8J5w7tUGeLF6eGQBA0qg6VNWO&X-Amz-Signature=36c296f4cd0db597979919ca50c696af693ea4ff4f187f3502d245c7a15e51b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=486b915b5b459b9463f709b5874a6af95028825d8b6dd2eb59175aa660843568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=a9ae62510b43d7701a4f2474f1424259912235da8e2f4a052f46d6a16685d08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=a497eb5d37de26d8d3f160f98c57a833e282d83e0870684f991afb8eec5fcc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=eef2150158834cb1ff1babfde951fafbf4426b82e529b35ad7423d5d19c80eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=7aef4ad6e80d9fb278babb6a2edaebe3f3187efbab664978cd581ecef48c3949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=97937df46e84623b440762d14dcd95d6449d9dd5c49a46a2630539c2583a0b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=94032ba61ac9b305b4396c03a2322d23dd6e03e4d4ed7028f3e13bb05bb1832f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=0f45e2b74077f8f0d715f05befb07e8393695b513b5a587313f9c932bb47efca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=db5cb49353f094ff2de84408b63eb739213c552692060f891452f9201bfe6a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH47HDKU%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDTnNd9pHdonNCIkDdztSiTxlpKdVk%2BvB0Wh3AojmdaiQIhAP337JGWV20Fvaih4Incs3fJs5p47txtF%2Fe2eyKW16WbKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5%2FIBgAaGKQ6f5GAq3APYQGW7fSkGNqroWePBnPibIM80ybsd5XzU44GfCw98oVhHXzN%2B5jLmU2pjr1ZeP32%2FjpCeBeqB%2BiYCJ6DFmAEyMQoWzh%2FpbfPAe9SG3yH1HaTaGAQikPgyUr5VRMRMK%2Fs5uqFYBQz%2BYTyghRcQ42q6TzS5O1tTzPLBY09KyIbmyHq%2ByRjXY%2Fy2UYHF1mL%2FB1GP0t2xjEi7dW0L%2B24N0Y2286jZ3he%2FHhVl1NWWe5ZxNaqEPpwBBhG27e8uWjnFOPBvny%2BQskRXqjSejIjKX469clxlFTNnP2I48CfuQJ0ibnzTtyRyRu9JxhwPPls7CEoZ0OpfPnVFIm0v5bROPgSEf2Cbv6%2FFXDmzAcy22CCOiQYgYW8snoqu0FOvYtxDnMXoNm%2BcW71zt%2FtakmAOA4qFfEcWuQvNgo9BjTN5vYz176v9Vr1d7Ib1ZwlTTyppuu2x2CLaE2si%2BpQheAK8qiDW737FGmCJy%2FLmf6%2B3c22kyTHCM%2BQMdTS25Lo85488%2FqUbC6uHs6Q%2FOdTA%2BR%2BNhsnkSkM%2B%2FLL4U5DKfqE9QrHrPdB7gF4XBXOypnslKvuhRo9m%2BXaFhOUkBFu7UZoj4gZQ5uamHPACJ3sscDbR2Yi%2FZKJI1t8Jo8peKENDvDC40rTMBjqkAcRJVDcuqa2iBBrAB%2BASiX1sA2IJ%2FNJieS9QXD38TNSQZaiXk9CwlNtimeO8y5CHaUtiQ%2F8cYJ90FdW%2F5LbAXBGjYlZELweIigBwzTtGBXfHBaZ%2BAeUSDzLrFITqhHi%2BONu0j0XysnkmFBHCrKvC2s%2BwuHkbb3z8g%2FTqPTpq%2B19xvrD0JPFGphvNpJqnvCXZNREQN%2BIcYnezWx7WNCy2JZRc%2ByZr&X-Amz-Signature=eef2150158834cb1ff1babfde951fafbf4426b82e529b35ad7423d5d19c80eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
