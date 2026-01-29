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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USDIOZA%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxBWfz1svtjWPEjusrxgIC6RsXYSBp1S8ohRIL8jhAKgIgHF%2Bsyo18UgZcO4K%2FipluOqACdFT6GS%2FXFLzlyCX6YeQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA%2FzpflrxZ83h4QbWSrcAwE6oG%2BLJZLFKDvj93pBUHh0wqEsTPqGeKH5tIAYOazS8yGw0uSHaDSNTlXSB1N%2BjoxpFdteg0fKAry9lql4HDUpyKlCC0YWsX%2BGEu%2FQLCkkTnzTqlooCTOpowFjnEKcv40YfKrOzssjsFhvpiiZyaqa%2BIL5t2xTIfr5vCxfMazVhw2mHNUUCChi6DaaiRWqMng2VV%2BA5wyyryvC9Yu15nmxp5ZT3475SApJCU56vluCCaNTuCnY9JiywWHsFb4F3k9v%2FNhyAjNV%2F6Gi%2Fi4TSfitjviE9agBJuY0va%2B1EoWQXJ6WK%2FEMOAGGdrEOx5nRdKreQinaUtat8Xi2b4oJY42thd52xXvJM%2BRuAZA2nqjTeuoZEVCkf67w3yL8wWmsdYR021gtzDE5fehewogcysstYOiBQKCNjGdQPQgu8I2T7NZ5HihdAOkFWPZNh6Td9QpEbjuuv2OnMDDtwBOsxlhvppWpgSSBFjVaKL8pbylSXdE5S6QWf6s3CVgRKOVOhB69OYVQf4BtybKee3BIdI9b2%2FMTZQByJzVRY8lYbGhK1czlbHQRrTIskne6HDA%2FYz5mkVNUzIOJsT2Moo5mrSfC6Z7b5tiNoR76vfg2sZ2u3rR4PzhP3jwxzec9ML316ssGOqUBJ%2BHM6UVhgxwQ3GYSnGadp0Jm3pJzld3MHvNK01BfpNIF9FTm1fSid4klH%2FG3hJX6Y%2FmplQ741JyPa2dHWuq6zqw2BIE3LqgUivuAxit72y5K2uaNJHUcpGFooKwqTH0REOw1nBEgiEYbnGRlzF4BX6ZSFXaYGIW23dQYint0bSCr7DnPbqelmOtmf1xytid2T1dn7V2jTbBTYqpAmojQgcQONjLB&X-Amz-Signature=507227c21153aeab0d4a6824ed8be17f7ace7c6b6627d65d2dd950fff633e37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=f605ae952fc99a202b2adbd1ccc9af882ae03610913dc8701af01657d713645e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=9e463ae4f0377c043df928f8fa83f2ff694c6733f5856bd6dbb3d0873452819d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=6e9879db531b0688e64775635204aaf98660853ae3e47b0b4ef0c7d7dc28a0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=20ac96a83caf7931693af1c0c0b50c70c6dc7e57cfd8b8243edc4ca811597752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=a0a6c32861c301c3b94d7f935f245da5d62cbc5f3c91664776cc3833e45a7408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=4626a8b5cae40b365fa033561f819a8d8ebec42e315116a0859b3ddf775ecf81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=ae617b26a6f954978f0be498d8f6b10d4ddf66397dd287fb45658623bc46b78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=349d550e22c8a48a01efe7e6038520225a5fcf805db97464bfae5458f39a2748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=75fc7ec48396858d5fc71ce905fd4ff173fe8c8f54f40069a4551f3eaaa175ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=2437b49ab49d37a4dfad8be472e9a4473725d185602244f88521722027408f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
