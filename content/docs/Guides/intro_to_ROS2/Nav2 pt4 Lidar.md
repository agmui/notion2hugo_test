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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMIBKZC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnNgcdIwOhMeOm9puFM%2BC0N483sCCC1KGlJx4fLbsyMAiEAmqcsepahBXuczlJUIZmYZpS0slpQV8EGolp08MJxHdkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDI4PI58Sa4fYyfc6aircA3qv2Ax7%2B%2FrXnZx1ivUbhfBVterczqBlAk3ZUsh9xSuoV4awHF93rvmusy7Bxuoj%2B%2FfvtL%2B0%2B0ZK2onHVWUrWMcnGTj2XbG2bz3n%2FVjTB0HI4ZreNXrxjfm3ZpH9wYQGobxV5wzc7msnMKH%2FNww7sxPIfrwOZEYSjCXfHUjL8X329h3WD1Dllu98hUNsofaeGglA3gRbYDJFUfs%2BSo3OqEdBHHkzmLVf1eAqUZUWnz9Vp60IqKdKRVpRSP8EWXmhV7kF%2F%2B5htOuFK24UsJespsTIxhAO9fSig2SpAHDpzV7cWF1SSO%2BbkUIa7h7XzAivcDBljAPhYgcCxBkaiMTajEZrzj2xun9FHzHkxuZxqfVE0fYNg%2FWYsRfv9LV1Rh7zSStrxNPXWuHEZPnJ4uv2owosuSq5t0ym472aYXm%2FV1kxuIyckEKDESHJspVuV%2BEEqTev0Ehni4MqqqPRqCtzWHGrqsIqDS6SpWQmj4obU49fBJhs83w1L%2B0pj0Pek69iYbBDbLgxeVQnsocDzzd5zzDpYM5yBP381VMIxxz8AMTCGd4MJYB62166%2FNGQ9s49xb22PMEGqpMtRjyDDTHD4v9mdN9j%2Fot3OkweVpxllW7ohT671dpncqjKPQInMKCs8MQGOqUB3b50Ijr6GkFcK7mEQTP468Gn88r%2BtPPwAKBGhTpU2DWMg8muB9aUo%2FpGLD%2Bwo6KMaSzVe%2FvOyvzcTKETQtuf7iA%2B0JTPuHRC9lvbdGIF%2BzbwS8yKpq5Lk90HBHFT6tp5Kz2k%2FedAdNaA6ZjymRBMigUhM4vidl392Pxz7vXbmG0Jw6ocuf%2FQttCK2OQXfyfyc4aHXHWRlWyuhukN2J2%2BKzBIkaoQ&X-Amz-Signature=ddad10c78adab2ebc1aff2d61df309a2202899f16d3f4ed3a7de3fedbff87834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=23d479047cf4af7bdb3532e7424179ca3e556151679c268a78eeff23d5867e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=71b67dda957261fb6174ea345ee6fa7c1d5c43b946c153138a21f69466cc1134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=f7246fd02485c7fe2d2286efceb19159b326d23129b43410ac1e278d0d1634ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=af043c85077ccb21046b635c08a957a05608a72d8b50b7a1e8fb1edc071b2156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=e52aee0e30492a2194cf9b7a22fd4e3bff5a16c71825c9e7746fd90ac6dd1fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=e25ca8dd4ba8cdcffbab90e45f1b3f624670b355570476aa57d3bdc34738d4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=c436fe4402b93e5330776bf3759281f3da4c1527cab2f9ac8e7d293b9eaffbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=5422bf44396d41102a89ef3aa00f93252eafdb67e0662ac6740c9d8cac784c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=36b5c0638af332530dbbe912ea4dd2327f6eea14b61bcee0b2b195d0653b6772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKP2SPG7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvixbIs4AnxY63vBBAoAbFiPd9l7xxS%2BgWqUR4j5PvUAiEAsK9sYY0%2FmZ0ma4ltREyfHV2JaqIbfv7U6dkG7rSEegEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMehK3CQtQtVPP3cKCrcA3KQocAEgtp5GaMj4fZcIi0PUw3O79es4Sf%2Fxj112nyLC9xydcsnSEtPKOPX%2FKnybHeROuT6FYmkrSZ9a7xaa7cYfHTA9boCMxGoWgBg2wA%2BcmZ2mEZwCdP2LvgLhfOob1zyrZACWOOjDTBAxBuuhFQg7i8h4f%2Fr2IxxMsKAkxnGmhEBzyl9JDPBAyhc5MI3B%2F2j0WPgW9Ne3nsY0b5ntFkynsKWokvoy0Mkykzg%2B0drzrSQIae4YNXdv6Nx2TVAjOtZhMTUbGzhCR%2BtCP1zevZJf4OH0AZlj6JaeceEpVCOlSAg6DI4BcutXQEmTdsF%2FvVHqhtCU9pdrgzmEZlgw9Tg5cvkZzn%2B4x8jz3oi5vThnhcIcN6rr%2BszmwRhGTxxCR1cXBvjcpMc3xA5%2B0RzZrIGgZs7xlURx8ZVIwptbi2v1Nefo60f1j0kLcBoZFfCkEWMbdRHNq140iIWqu1LHJoJV%2F%2B0%2F%2ByX0FQsbG7%2FxCf4g7tgIttc6mO2gx8%2Bwe6%2BhRkNEOpHqX7t%2BTc4vnnVZbiuYmUIpwo2PSDD87an4DEUxDYcoq8hdrfit6dx1vCIHx204yOHtJ4ot9McBSVe0QKHpfJTPIE%2F8wgHptRSEBwoyn73L6HiHB%2FgwO1MMKir8MQGOqUBhwiblqk9mPZ8YC8L1WoZ%2FLgGYQQIi5W%2B9N8GLEFDFbR1Ot7FzgD9B8EqzxT25NrlgGFwT4YndirOTecVfxWX4xETBfW2gJgu45NIxnc2BoM5TnE66V%2BKi8%2F9UbcBesxW5VhpVTj%2BwZbvRS1%2BzEdNJEwXLiwIIvHAaohpLZmgchRv2VsAhGb%2BcphT5WxCA%2Fb%2FHtt4VCpIWF8M0UW%2BPPSL%2BnGVpeXn&X-Amz-Signature=af043c85077ccb21046b635c08a957a05608a72d8b50b7a1e8fb1edc071b2156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
