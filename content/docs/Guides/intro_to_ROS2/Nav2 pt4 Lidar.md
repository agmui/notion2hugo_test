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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THPH7DSQ%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt1HxiKzpsNV7Sn58dDP1NBK%2BMvUvZIFMEmtqX%2BB7vvwIhAMeabX9vi6V%2Fv0xRpuPhlVXWuwW1pTa5le1qUfV3kgOJKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnKJyLAVMD%2FRxkcq4q3AMr12%2B4aPuwFsIwDnGo%2FloujTu1wJPZ8D0rgRKaugiIokgSp6c4%2BJa4VQHPd7xRpoAILgSSyprO8P33mBILFe9gAOJnMMKtNUyac0PAQV5jyNWD%2FhuA56QRWvvh2nOB9qtniLQhf90JPVDz2bi2I5fK3251%2FCG%2B7hwXWYb0MMkO%2BVHkZK2MhzCMre98qLLtUTsDs0x2Qzz%2Fv60kQDbiojtfk7I3waoE8n1r22sBiWX1cTdtzRsIAYXLO3%2FaUlDo4AOW6sZW0%2FLB8okoowooBugvYs8hPWgTVR%2FJlRij5lU4cWtELF2lMBsRBiw02BuLm2v%2BJ2%2F7VXCPctX0jr9FCLyWHF0MviyP7Cwbtco%2FGKajBKpexUmDvfh7kRficAyBXFY1qk%2FAHlZ0t1fytUDku80Dc5zKrHxtHInk0gpv23OfAfSXVau%2Be3VTI6ePnO%2FnT5EsHd%2FwMURLlgnAk6bCOrnKyEFQbnyUxd9R9xdpVZmG11bi6oTn4MxDhup3e%2FW3mTUZeYLwDV2CF1AVPkI7mSvdcw2XOHNSfsm5KnY1AoQq8G5AoIVphrI1TvBAnUc9d510npne90t4nUgS8o9BiNkVgycT3%2BGlGcTjX5%2Fc2oDeiWf0fqZR4QbkmnsnbjCf5u7TBjqkASSekvcTy4tAdyhlAfkQUcSZE9NRdjAT3L0iC%2BoOrdeK64T%2BhmtlU%2FI4dVZ4ZDZNh9WrJywlbSyidUCcoylBCi%2FS3XIbCPqqmEcUj9I6D50H1lGqBjJh4be8yf69u3gmjbSuf%2FPC6YlikYulp3OUfzk7wnRDkNg%2BLjevbHx3m7rIx1qFYxwj%2BL1xx6uB41hIVT5ZtwcqViJYqlHWNBXaanGI9zIb&X-Amz-Signature=bb5fc554a805a53b5dc585b3b7ecdf8204a661d05db2acfa0371bd4646f403b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=0ff1d3fa899545211326afe72c7745f24542568280a26111a3385cbaac9ad6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=bf5c1c87ecb7afa9564ef43f637409dc2b1414810b252cff9a7b71f9b6565154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=b670524c8bd113a85568d305a04b327aeb4d1a39ce5f2e139be5b0568458dc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=1a7f4348038a327a2720a19e0c29c8a29dc87e2d67b9994f6640335b6bd39682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=d9fbbafb4a5a0b4e3415e9420c8d040dc9cf1c748a87001b13d3bcf157a63dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=66710183ca43881335b13896c0e6a658f3f9adfc8000ebd685b364bb2ca1def0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=1c1919683f34d995475f637426130795214aa1d16bb2d4eef3c4f97654c5a606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=8faaaf0430df3d11f4f43bd5b7ce4bc4ef462686e1b7d42c61556cb1cdc4c305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=f63498e7562bf01ba3bf2134e3d0096b408d86aac006067470926e12d26bc9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPXNMHE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrV2SdSnnsFkCM7bpoD1pgN%2BGO8GNlyJyJff6Pr4mLIAIhAMdvOQk8YbiaUXz4PDMKl%2BvhUQqbkIf0dMCslvbrCy2gKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZCvvGgzSEG8mEPuMq3APLNEdcO4YvMCHgqHKy9ToCveYLDVPyOUJgilCjeZ4SbX9eVRSgo%2FxZRyqTGRRd3ZNvA8iGsRPtE%2Bu3Mm%2Bmo560VrPeolUUyOIWJ9OaL4rydhfM5jBYAUDz3iD0rx1dEQ%2BPVs%2BndwM1g59%2BxMVz6H8Jn82dSZRUqL%2BJVqALNRkHZJhDiSxvZI%2B87YYP8HvJRng%2BcC1mPBW%2BKZmnJjlaCwIJpLffC5dDaI7Cuh64hJO6SFZEs6FoF1PqHq6Q2vGrW4JOooqQguzuSlglhawf4jOCh7%2BATRQpd5p9nU%2B3vx1DMHQIHgoFZknPGvP%2B%2BzeCeIhDRt%2FWF6VPRjtvg6LbdrV3Uif5lFOeWTinwzNKrhD0JIntIA3HjHZ986G7ySPCAlW%2FiwoFo%2BcS7QfpCFofsoNTXo6QGAzQJTBvC%2FXaxMoVQq%2FYHOJys1EhIKzGHHBizlFnXfwt0oZCzj4V83%2FYuhTvIpjrIJ%2Fo63VplpUW8C442GE3s6ba%2BMC2Hj0%2Fh%2Fd5W7aXWrzWSnyyy680G%2F4K8AHkfmpTRkMEpwElMmIif3bHF%2BbKB9JvnVyrMNfU9EZTcGoRKHQigfogzdz7snQ0QBfL2DxQTDR2kvV8qHQWxyQAWLHAQYSXItVTpm9Z0TDK5u7TBjqkAej7nXBKRAcgE1utT4gHSRMiUa6BVcepgT9Fq53EPJWwXhKrd%2FbEe8yCkQhU00IYFZReetzMR5xA8ZUb4PmIxLjmtINbgKn%2Bw60vEBORockhC3sk4M7nEd5pZXntaQw3VtlEtLpfDEyT%2FbJLDeKlxJ8YXmQ7%2Bs3VHE9a%2BpStAUZle7kNwf8AZkiDiqY0TfXq6vAiraNzfc8cUNglrtHCFzxiZDyw&X-Amz-Signature=1a7f4348038a327a2720a19e0c29c8a29dc87e2d67b9994f6640335b6bd39682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
