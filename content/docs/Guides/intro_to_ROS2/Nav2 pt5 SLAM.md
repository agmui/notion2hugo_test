---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=e4ffe8dce7ab53f71153e4ad0948ba8e092d674875a11eef5275896d6a166099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=039138c6f16859f4ef5665b59b6742d15602b6a2cc27dd61828f7f97d9508f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=37767641aba5cc465eabfb1094a20fccbe7b7c58749849d8b474b36388181247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=9603635ae28bafb0e7bed0e081339c9dcfff70318b0b8990f4c1410b6b4fe7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=380361acf9567c3a5a38704deeb214014aff4af69764410aebfd2596d12f33fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=7f8461c0b4189680438bad9f62983a1977d0e7108c7eef7c166f54cc1fbe7acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=4cae1a80b5a1210a29aaa6206e22ef8ac5a32752c45e5575350fc0851424dba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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
        
        lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=b255246e28dc0a7a6af25dfd58de6cec743cf8a737e748d16011d236ac735be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=6f9691c9cd323d7523e4a8ff7240cf84121d3f3b785f269eb5992da7911fc981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=37bcbca0680b4411af5bd2b57dcc6eb26883552873a1a67cedd6105e396dff8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=58b7a79c41de290f2de981828d42e624b3da2280e7efe4b54897f96066a6e604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=bd624acb4bc37523859fd6fa9437b8c096be4cf5c588865531c19a48e2f2ebc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=53668dbed3e7bdf34a9044d0fb14b5c5b6374da12f3968254a22d73b11c769a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO6KOFZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD7ER2tVKe2%2FkhZ%2FcfEBRzKF2ALUvytuFu0ho4eQ3m2LQIhAOC9LfbXcfX3ZMvL%2B1nGay7wuHlbfJp%2BnE5SBznTqmFcKv8DCEwQABoMNjM3NDIzMTgzODA1IgyGUgCgiAqVk2L7ERQq3APzDNw3C7Ms9JCA16vRKexUxilZpDDmyJgU6NWijheORf3LbQsFeE0twU799UU3wrdmudCPkgNXmhb6J3lNKsaCEwobnjkneOGP3jRe4I5i6Za%2FE62cVfXOuBgVrkmRH6PcGOE4P0oAiF4rw2KHqqa5YPWKYjBtLInKljOmMoUKdAa%2F3XKB2n8SqLSEJHXd0g%2BxI1mM%2Bq6JWrubCXYLjDJuN%2FADB3VijM5lOW5fow5OhtkySG%2F0r04Llm8qbGqgTMchGA9w%2Bi9VeeZTW0ts2R1JVuyI%2B2pDF40hJL%2FsUhSlZU%2FhOYpjZ1Fe1LwYxZnmzy0clz4ePy4iO5LtO8RAOmDlj03vc81RVud84IWWtRuMpUfr6B5%2B6ASHaDb5i3yop7e1NitAPUoUge94qRZfgfzAsGCjls6YcBncudOCBT8PB8vhx%2FpiFEbJNLVuQyAi5gkajsiw2T5mZt%2B3sYapJau1Qp%2BKuhdqpHybjsfdgNqV9B6KI3uonaN8BC6WegJVQ3EsNqTgzhZF6pehEsWnJF%2BOGKyLB7oAJD7rgFsQuIQr9sy7yv1N83ogETdm0at4%2Fc8OkU9VdHs%2F%2BMzUD88kQJrj71ThPQVeyBPFjOum972g9INxWSUlBYpLq9NZjDDV%2BMPEBjqkAWLOoXC%2B%2FpT0pX8R0qFD93zgWMdU6gAFMUtj1rVD%2BLRNU1ElV0Gk5F2ZoP0JsJTMdqmn6wdV5RaEEr9P1gIzkV1KJgDzqj%2Bupn%2FfVo9VOR6qbEFChpHvrG094ZDXzIP4D%2Fi76E4T21GJg1eWRdk5D12MaDzOuCBlO5QmxAEzSaIzwJJASlNDkb0tphvMHtkWhYWe2qdV7CbZMCYCa2t00dkVbUv2&X-Amz-Signature=41f3235db323993f68570838eb6173e4df89f514044b6dcf85cecc9a869f85a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
