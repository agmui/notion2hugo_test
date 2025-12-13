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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH7F2QI%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDBUOTcj8EVSOOBQBNsIJwIJanwkvK9tVtuTnbFmL9ARAiEAql1VY9v5jt3gIhjj4PTpiT0q0IvCH9e2cvrBBfmq%2F2cq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCQfRLHHERoYn5pBJircA4F5jo%2F3ryxAL10%2BTfdgKuA1P0UGcZVi9sgiZ64IsyS9gCeoSLM8Tm876R9iSLn9%2F2nmHd%2Bn4IN10HJggYJP1yoErW7QVkGauDZU2lm7J%2FmF30yI1VGIqbNmHHlgRhl4wxCHHrPsgVyaK1jg4S19W8%2BXGuecp1LFm730ltB0UDuWchk0o0NXbf9ZD%2Bzx7iQoxWuMlhyUIQ9v9zPK86y1tGZEXXoIz63U%2BD3kRQTnyuxjNbpsq55ooP8upFgGESqSV2l%2F8baa22uRcqyFlYhz2E8Kk%2F7tsaD4A5X23HI4Cp92JsRysITgtbSVNqKD2hlT8xRqTyQdjMDA%2BcD4vSQm2gv7zCpBDF2tcV4q9WyvUyLmyotzJpvBqpexfEqv053zdF6UwgC0NioenV0wCbHYipwqF8FAlh6SBpaNu95L63%2BFaPBYE1g8hgl5brqWXVKhFnxjy%2BUVf2xshbF2adMM9U5jzIG97LidpSloGaQGVjCAtWp5RyC8oy1zeDdWrpSDsnOX66ifb8JGeQ2jUbAoNTwmefY5r0mTSeZM1M2jEOamCWQsvDPfWQL%2BBHVOr4sdA2RduBCY%2BihGOtxfWhXo3L2mYIYF%2BPxbwzQrsiDYaseqlD3KqFwV1uuVtbkEMMLz8skGOqUB37ugeoYr9vdgGfamrIHpjO1NMj4myoH8UIbOdCQ335EkRGMuMgxDnU1BZ8pjclAIdxceDU6kXNMit0uGf0fCY6BlF59hFPic5%2FY%2Bx9Y2TIxvr0yUnVv2OHphYccqlRA5m8P397qmqxAi83SuX7SzWuCVVdS5ery4I1uJEctNOcmtDsxTkyeQB%2F8WZcHJhnN4KAs7eKPs8ZoAtiEP4sspB8Qrvt9C&X-Amz-Signature=5e1281fed5161b2f306e9abc93cc8b0e7943d7e006afde7a0452303ffa5a07f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=1e36bab00c96cd33546719dead335e3e33cdfa858aedccd9e837b82af2dfc575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=71d394b9008b88c214b77961e02ef7ed6d41aa48e19842a2fb34611aa956c183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=d663e6c5da43e5e3b84a5516232ac654e6b1f1dcce85b9891813b1965b3e9862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=a4801d4e32ee94c0decaf3056b41922449e572b21d393a2423edcc45ed6bbd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=e2ca8539ea9159048dbdc0481bffd9fd118f09d778aac775750989735b13cc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=e53eeee0b3a7faf20e1857526e7a4b080545f886e95e5fa20ffbd6117cdf4169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=95a67213f165aed230e7d05c3a070e3758b2a388161ac2b8a412269781cae172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=dc3793a0f1cc1654fd527e4c33812c6573c58e83eae301872e3e6ac695a02e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=8333fcc2b924780698b23db02f597452ea8d7fb4030be4df62d319bb04cee8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2JTBOL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDlL9rBCJpAdLb%2BRS5zbMhG8Mvqhw%2BSTiA2JK%2FreEhMagIgZmtQTA5XyrOQDwshrFuUiJs5hn%2FdzaibW1urI%2BmUjaMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCALtQRy%2BrrCvBAQLircA%2Byd0BxqMHiMxEEw4YZrO7%2FJZLouSv21ieCvrJd2a0QoCKJqKTtvqoMkaTM9Fencfv7xgSZXqJtbZwj1Bm8%2F74n8YpKN7gc2n3YNQksp0CgV7sObDRPAXDWkyE5wQ5ImMRlE4d3yWgoFKufMLHXa4yp5HjSsC8rF7B275hlil4C0iNwjPkfvL4eXGkfKWv1hw4s9Wa5OmvFFF1JgkOFLRo0nbhCl8q%2BYcdQJDyx7UG%2FK6qU2JCwue%2FJ8HtMQqEdCiuQiSiJEun%2F%2Bdqgca1DTRVxQvfn0J4nvgw7I%2FmPS7x60Ig1CkhXbeRyrmzRK4Uk%2F44XVnMJtBmOIkDOPklCeVZxfZ4vkD%2BULi1WJRpeXlSQKYX52ZFXPB8ijQUG7x8uvYdYIhCVZc2nppXWzxjbfYF4goIJOdtiOUZ17NIT59svcA6alEPcRzNLo7SJ4OkaYozwRgBqj7tkMNZNoFQIbz2mSKh%2BM2LqIbcULqnGSsSSAAFXK8F6k9C3u0TvG7twXsRdiNY7ihvaw6YIw%2BLFfG45rxwels6e%2B5Q8VtgNvINMraKtFuK86HgC4zPQaNAMkGKpUfvz5%2Fs5oPHlz%2FvPDcRI0QUjT3%2FH8TD29ErzkbTxXp6B2uVpY6f5aF%2FjoMN3z8skGOqUBdHbc%2BBglR0eoHuH7WXLDuh10sF8K7g4eGQmLTXFJJf%2FyfTRDhNfS%2Brh9DkEm%2FUtrNoLIHA7hRNW9vIEz5ZXjxW7u21hQyU%2BwtjxxWyrHcZoeZxtR5%2FmJYwoEvysaeSlBcS95adRLx8fPAhnng2iKJUw0iNn9e3Q6cw7goAtQoMKjaDG82biDgcP6Od08nnr%2FVH7ZeMDbH6R455VUo0ZgOzjPeUaZ&X-Amz-Signature=e481d5d259251cf03c1ec2228690a19599112c2b0bd49767f4f93d48039c7fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
