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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAIVNDQ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQClweH9PsKYWXvFTvBfnEobCRYMJ2RM%2FiYzFce9Ots1ZgIhAKVSrm0qmzIjsYVYXAwPIyxiX1nU4zGN7NYnwUPOGT80Kv8DCD8QABoMNjM3NDIzMTgzODA1IgxLd86wdjcddS2bVesq3AMifwmICzrdovohrpvQRaPlTMIMMx%2BFbqDs4K7ifBOcd2jDZxOTfwaiuwAONpGbFwyMt39THW%2FngI43W4TuYwTuIOZg6yQ4I2AfV1veGfdW%2BedWRnt%2BGK4ClB6guoDq1zXLSPgz8ajjDqvgpdhFaj%2BjNb8JhUkmLr%2B1QxebPIXESKoj9aH6%2FproBu2IiHpaRSFl5yWEOUTW5kFvV2zZ%2BU1z1MJnpQwJKJ1bpE%2BGPd3QCcL2u1H1%2F6v%2BVinCDRE5yY1k5GuJdZlZQxkDosURFAfYHYUI%2B9IR5IBKwofz7VjhBhQ2fkKpdNfIlHi0P6Ha64M5oaBpP8LqEWhoT1f%2FsjGPc3wbR%2BVYDJH1sMTMWQlFc%2BNByW8InQzNy%2BdglJiQAV0LrIaaWzKsK7Rq4McosRf1vqzItOyvph7Pw%2BzeAbLPDt%2BgiS3HS8oLpOKUMYyXg6Kock1d%2FuwezX3IFOQjK63rc7DElVS4y1BcckEL9yGnSxvTWn5btS9qzlQ1h6EwMTZQkIo%2FDQvsLbHiKoHr3gFTMQItZG6U5dc3yF111cuIUtMtqnHfHfIFbDE4Rv9uvpe%2FkJWRhmZrPrFMXIB5mwy5YqNQUbyd5n4ZZzJazyTwvlp7hQPnBJkIcA0cWjD02%2FzJBjqkAS%2BtJ%2F%2BWyLaQ8u1saH2fiLDdUVm%2Bm3Nxlon%2Bnx8nRRTk3uVJA%2FSuGwhHpf5cNdl0eGnCg4IF8N3N5%2BQHz7a3EsK98d4zJwWmP2E3XvOLb%2FqXCVrbWXIGW16QOsIHkqJv40l6G2nSmyWybGSClJWkbZ5vsJzV5cYFxYzElr5ysFHIy%2BADi0zNNZVtZhiaOeGp2aftV%2FlbqJY2TG9qn2I60pCJHSXH&X-Amz-Signature=d934c0069fc78a5da690f03c39d4b6d68e3a5a5104f239dfa730498cf85f6e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=382ee887a5f4832d8c3b2797f8723b7619cdd24b9b84358221669bca7e85acfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=e01df1617867fea7ce0adc6fddc2b73d384f5acb2e70d0651ea4a6cf27ffa24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=15acedcce9519825651be5a1dad8e97ae43b9841599593f63b37818ff4e70fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=3affc17da16d2fe4900b76285e5dce1489321e5a706e19ee7052ec5f8a9c9c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=81e56c27aaf297c4012fa9015af5d6a077d64ad59398664395285753c882bcdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=9efa115938798ab162eab64b66ae979cd7c2df1961ccab6cc37790dabb3abda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=4f6af03907dbd0100abaeb001a504f68c9fe19937310f5c3e89a519b7f115e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=8514ab94136e9990236a293bda1be91864eec99bccc96cfaa13a7e81bc93485c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=f3f9331b1d809168bc63f7e689c4b6426c3fd65c7a07294dd2f024bf9d3d7989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6QEFHG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGXX2gSi%2BdeLX5esEjLo%2FzcsQo39eSBQGrjHYYIcwcvIAiEAzgDZjkghDp9vcHz5Tl5t7jT3kEiuvmHYirsnP0m4tp0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOXypsj0ZYWD07Y5NSrcAy7z%2BC9AQ0%2Bblz1OFVaMcrengqXor%2FOt1ssJdXSghvWn9U2mnW7E5RwJWlv8PZciBaTBnTs8cm7jy8uFKfXA10bB3JVDG8jmpE9P%2BMQbHC%2BeEr6sNJWT9HTcGDzxQ%2B8FcKEeZudqR4REkkCwZ4mZ7RNwM7FJMrNIckJes5DIKbq6RFXYW%2FMX38DppHBBZYegpk%2FYCFqQ9gBez0fOnabrQds864WBTr%2FmlpwZM3PBxFMJexyLzTyOMbYIi6vhdT0elIGLhUDvCC9jPtDAllWMWqdEmXaI12y7qeNcx0TpbVwq%2F6zHVKqKItQMknm%2FGGFCqnC1juAMjzo59b87b1UIFlCkniK7RnAteEPOBzyS6tjhk%2BYtJo9gnZIJnrat0J%2FT2nzt7NHhI%2Bpgc1WRH9ixpzyHoaSnQdHCB4J8B8K1ARIDU7FEsfLmnGm4s8txdZA2M4iZs6aBnWIlRgADVVBV3fqzSiewpcaHkj9o2PJMrkuQpM5Z5l%2FXSIeAP4DVdd6BMSE8jaH%2FquvfTVn65XV5vn7q09vtT6xLSmBURzKvkMYPoalJdkx9bJu1qOK9hyhN515%2FbLQy3MdIQdc99eRNRrs4QfefVIgMHk%2FstzYAJOMphfVXefoOOrTv%2BXY%2BMMnb%2FMkGOqUBH65ZvpXeKxlR7gj176PM0OCDstNtBD6Taqg7ThNy97bnd3AZXc1Cm%2FpBKQYP1aiFKP8PVCJAOHsNioWOEU%2B0IRO240Lfj6GUfT7TI0BbO5f5MV%2FlLBswA%2Be9imIMVpcV3HDanC2ORFd99CSAvicOhVD22M3Jh3TW0WeSt5wwo0cUa7S8%2BfpqHbiFXtI1kk8v71qw24MUKiZzbGvYT3M1jx%2FXNJ6t&X-Amz-Signature=f32b2cee585c7826b747f66882aa6e04570fb6a562bd18984374de58d6634979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
