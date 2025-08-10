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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHGIKWH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsHrGSlXXaNAawVUVoAIeru8j9H8nB7iC3VeGfd19TgIgbKsSQ5GNPYjB44Ziwg7GrUE%2B8kIOHscqa6fjjIPXhuMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEo2oPhd7S4kU5zgircA086WtWNfd3VwzubRD2VcKpCko8sfB3HxwqtSjSlfyZxOFfRHU7%2BqmiYOMY49BXamjcQykT9QuNEQfRLZt90Q%2F17weaMeqyGjnWcpR1P2TwhbxtZJKFPSet%2BZXlr6EBaWpoMH1UWybwkxzNgt3ullt5Tmj%2B2iYLPViy2dvjhwQ8G2BxZjpW575N%2FGf2KGUwnftMFiApNeVkD5FTzREz2lPOn32V8yaCCd2P0nrF4pUEDptYHucoRvICOf6e9V6%2FekZXU24KObM3xUol8NJAGQ5rLZFw0uiJz0AcmyEC7p72AxPc42YfZppXq%2FAOgjWvf40diseBekC0lT%2B%2BMnF7zNqq1kpGsdmfZMEF5dVXcw8jxUNxPnxLfK301msY8KRb7E3AQOZpKKMZRbra6eDPjDevtDKGqhLGOkmyVcBkodHtkBR%2BKWkg7I1nCf8wVUx3U6TteN3vA7s4tZaQPlLBjz8nng9uIwCsIIM%2Bi4%2FYmUMusWMKzGQTLZyk6SeeLDxLEgwSnO90X31EVhyybFFNKi3lLcra2IkPe2tI50HO%2BLSojk93Ah1EJgCGBodBz8MbC%2FwVoEOKhiltanC0iio1TWA%2FrO88TZ1D1VmwUBqRK62RtBJ%2BTHnCXkVPqLnD2MPr04MQGOqUB%2BbwHVnz1KnFeuDzLKc0G5%2B7UWYKulpaS4Yj5UEx25FdgjelFBUcMI5ABR8IbHreu3PDx45u2aSOLLxjIi4yDVF4%2FSK%2F270MWH5kjO30q2f4vSgeDPflEh5FmW07pd6zHKWtvF796o2fF9BKTd8%2FyPN7C%2BsJv9HIAY8gcurWECX5QdDQCt9TegQ2Fa7Zy3BuafxM3oPkjuLwHH5ONJqMgzspsNEq%2B&X-Amz-Signature=d3609c8d8b5c9c2aae9aa43a3151dd2825b5b50d96264b7c0282bf7646efc6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=c1737c55f293244cc89b44493e048d248647400a4504e3a286712a6b03c6ef88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=68f5d8f66dc275d0fd83b2ba420a0907b54ab07856ef2c8f92c85a599a6abf20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=3e92877efd5a1efacd39c36a4f507d5eccc8a6d6b3c9ffc3727f0eb968214f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=b27c710a650ba9a6ce3a991b02773b818123ef7914b109dde48ff91e0e8993f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=1d2d207e26130f86e41d2479297d386684bb1093a0b43386f44d8848d9fdde33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=f569d339663224b5738537a6117e537397db39770ae8d96a42608fe80a56c785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=ba6ebd385d2bd66fbc4c26bcb6b6a2126fcd7074c000ceef22b2642185cb199b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=f931348b075cf4860e3b0c1c5acc000f3d63c3e5f5df332e2e638179f2080c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=5ebdaee84e63160afc99a16c5aa760d34634d6afa5366692c0f68d1804fb3048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UC5TE7N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuycE1f3U7kA0VfbU9ANrXvFIDgyVgjEfEqydnzz1yAiAOvZz%2BGF4suY13F7OOMU39UYQ4kDb95TRBoUpLOvEc%2FCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAskEo0cXrgYYyKXrKtwD64OJhjFJclsf49yKUM5UJwLd4k7hu%2FacpaGaxLWBeY2K3RPyHJFwhzXWbkD8uFbr%2F6MlfkhD2lx%2FdycXTHcrgROyy%2BMfsLYqNaAuFlBMMAG54mPDmd8E4%2Fn2mkOkt3h35T%2Fa73wozuyOIE%2BF%2Bxfad%2Fp%2BF15xBarwCqfWm2%2FUQG9x%2BQzoW28p3yi%2BOBufXLqC1a3hXOXN9%2FY44zSNwxayW961n2NaDwEt6uqSAK%2FzYfyQmTMtQ1%2FuYuDVPTR1T6EIkRW78vEgJMxlhq9xTOrru4PwJ3OZ1MVCA8gKDbt9N7ArEpYKrd8efGPBx2Ma0xZJ%2FL46X1CE5tg%2FQczkDYstWQdYQ%2Fzh6ZiWoI%2FDiBUHF1ffKBGnRZqUOQG23ZXEvsJhSjpDzSF55cpo683AKL%2B9T53qOxWZt03laeXSZV8Zg3scgmchTw%2FbXJGnZzpiV4zOCelCPfDb4lckUYgDc38w12qfAoEJqPaw%2Fm77gfFyPnZnw7Ma%2BXD945nLqUVfZd%2BxPkCvur2K8h5JTpTIfVAOOhGncOxaHJJFcuMADyVjPRHv0tgaCZWEaI%2FLd%2BD5tYk%2FmYhYwLcwjxcuvb0rwT5QzD5%2BwP7LYQTC3SviQyWq%2BucMUocchpenZfOuNd0w7%2FTgxAY6pgGg3rqaI%2BgIofrZrYT%2F0UJ8CZsTJ7WM%2FTHUDXy8d3j%2BqUBqJarTB970trJHy9iCGPH6xmv64p9xbMX1NmXoaZ2yv8M9m4TA%2Bqo%2FRz0xbRdQD4lWKe%2FvACo8TcCQbUsGTSa7TAKsMFkpHmrLm7m7O69HK4jlNCcg%2Fgw1xlXWszblRpvzJqKFPOjHawM9Av5cq7naPV2ELX5hyzaWvNQ35O29zG6dKuZw&X-Amz-Signature=b27c710a650ba9a6ce3a991b02773b818123ef7914b109dde48ff91e0e8993f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
