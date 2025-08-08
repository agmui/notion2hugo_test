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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2PEWZ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEDQlfYPfUoPhuqRuOnsh2GAvj47pguUkMuWv0ineTauAiEAxkxa7cKeVu%2F8hAbZilMrEZTU1D8Cxt107KIK8LSbNRkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY0ogOMVz14CyyEJSrcA%2BPyyg00vnKpnEj7V%2BeS4V8ZWvxfOAaOfcoh8h%2FdyapcjlvMVBs4COtxVdlmVLGd2N1zPj5jsluyC1o2Knjegqazv9sMO6NGJRVyz5CJvo%2Fljejb3jAb11o4XI0A9FbXWz%2FsS1feCi1zwE6y%2FoHUn2SoCNRAaWHgS1kHDaUU4xdZ4DCFxfrfDsAKoFxVY6%2B956B%2FDKB8wHjczzLH%2FP8q2jPhL4m%2BcRqFT940Y2pPqDN%2F8qC73L19pgu%2BGS8PFPPssXDo7mwTtMCkQ2eWcb%2F1xVl0t5cnPUSmaGYAPhLepys88uUBiW6%2FuiA0CVE%2BR2JlNZmyljJL9%2Fj1l1ODgbbfqFvAr4V7GMmQhYlcgQCnJNKKRRG95JBtCAFeF94KpCMAeB2fGMvgh9jysqPMoZPbQvDOKCwbH%2BmLpXMJVikzjgskhOAIIH1wGGecOibiX14KY8KdyCiLnxu6T0LKZYQxHqxfOdb3LIDfdAh6EK9AgjRTg%2FSTvu0ZY3YvlMBs3fe6qpDXMDvj14%2FkYIDjvcwTlUKRehBs8X7jzFuTc9ItdlYaAoaAB03woWhJj48ED6QE0LFX0i%2BXuWWzx%2BcWbbfOwTee6IXTuKopgkUSJJRJifX%2F07OnvpMHPb2VjK2UMMiS18QGOqUBpH0Q%2Fb%2BEZXBuokvWyDOs8iYQQ4iS8JaOCDtbZ%2BUxFwYkIpQiUNRoUQOraFG5RqnBULkO5QzGRQ1aq3e1U%2BUBIOUMSd4UENBUEw7Gr1SLvVE5ry4jAOfvMStfOd3Arg%2FbdKbBXpgg2Fa9hsMMqtEfey30WUi5hC1RtL6JKwA9dwj80ASaS1Zsbl72UANOHucvBlUY1ozsFUDjcyAMrgZjhSnmRbvT&X-Amz-Signature=322087c2e8c4a73fa3d66d19583eab00279cadb718f452e856dad016d5d9e2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=b263e0fd9afccf76363f016ed33c1904d7a547e7dc2c4755d0252abf1792e9ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=c5cfbb9e0a548a01fcf5565a0d1c6d1c05c56f06f34e708329d1199de8d58897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=c87f4bab2d787ff9b321affa6b778e0e645b3d2d72b272ee97734a5516eb4122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=2553f88ab10e8cb6387d93371af367cce25f18c629f175244096b5be7cbc6b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=103925ebd50534019316532c11821b1fa63d029b4b63d7005bb5f22164d64791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=080c7b4d2be013c6d88488331b2fdf1f4cad182fc46f6ff257a904c1fd27e611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=1a1ad330af7b4227cf491c5062f7385ff0e48dec7a4bea0dfb393e0a0fdd7bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=9275ca3e620874df094f0679a957731954ed98737e5ab8e864f501986848e4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=1146a7e761513e3979a7865c1c05c037d55bf94400a0cff37c0d1c99fb41303b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YIOKNJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEX6o7Rda0fLuxFdgVRzA81i%2F2Z1ItQK%2FDYWhkU3kIzBAiEAk3%2BBpt4re9wJgqY6L8sR6ckoUBN%2BRIoyHbeGZYxKPH4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtcGcMFBL8%2B4auvtSrcAyW6SKvOdej9rG3StCqhNeT%2FuIjNmX16xlty%2FJ3JlbBiLwqkqhRZxtPzEjHfGnPuWxqZrUvmulQHmXQwP7HwmIavLh5GtqUtApSGUvwnMyFbDXF9bCzMVcXYriDz0VHyhYrk%2Fa%2FCx7qo2Te6qkHWVYCaZBGy0CMugmz%2BeGz3GTHp4n4J29o661e4euEzHWKSAiqHmNjrwBS%2FLm%2BPG4YhJLTG1Bv1YWQ7zvIlttAvyiKfEbUNSMyQDHo7qmdkKlPB0vRKXQKsyn0tX44AbZiGZxRo5TCxWPpEXKCTwnxMYlltA7gAgVUl0QnbOCS28OLBg7WTniii3HXTZql%2F4FADAl9258XUS%2FcEnR%2FWQcIr6%2BdIYXNX92s9O5FDhjqnCmdISDwKRH6hrRnY2ZFm7pDB3mkxNBQtamRMDiBLA0FjzQeovnM8H0pkhVuLPs3TudeKqcz%2FkUZKFKp00ueT%2Bnfl3yUlH4Me%2B2U%2Bfd0sM4sPQZOWWXGM3HBvyyIMNrj%2FX80STfEGs7N7SI9KFojlA%2BgSHhYQw5LzLHLh5K5IgHyw5%2FfliZEFNDXPfyb49nUogJ%2BPehMZVhSKeOZG%2BC2mvwRTvJni5rODTm5BBWu7FQZpwsEA2D9K7hC9Oa%2FRzUKpMP6S18QGOqUBZv%2BAGBu1rNBASNNQSczsws8N9gi2C22JIaCupoHdxwklLqh2cSVw%2Fr2yNGejTwG4yh5y8ayRozAG%2BzTgXWypERhH1aUOdE9sw3gdKIr%2BEYiCqQRM%2BEwFwsWP78Poeu1xMrDcHBZnw6WE599gagjFTB0Y3hSfBvcLstPQGIMkJJsYM2ouvG1AWjRYumcUfTbtYfxiEJiUflkl8C5yCp0kEwB6tn%2Bn&X-Amz-Signature=2553f88ab10e8cb6387d93371af367cce25f18c629f175244096b5be7cbc6b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
