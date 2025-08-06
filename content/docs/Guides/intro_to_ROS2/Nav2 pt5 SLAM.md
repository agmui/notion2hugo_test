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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=23ae4b7c611f549c750ce1874a155a24c0522fffecfa1e76a5e0b856248fd8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=30907588a5825273ebb0e9ac972610054985a734298c3756c7224a3cea05b32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=061c2958e773232086e0b151bdfc3213f8fee92c08ab85fdabe30385c3fdd6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=b52a4e2f0f4e96aef33e7fee74cf828e3a3cf831e8891c563383f95f560889ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=8989b5121cf33065b9ee8161603f61ef29a84be4128736c8b7e2b791c37e6264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=476c1f1a1ddccd717344720e7a44ead7fd116befc4cea13bd2e1853917e55c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=b945f13789ed4db2ce251179e337b1094a54fb96df732aca3c403f3e14015c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=410d91af3af5843d3180661bd354537cc5f356224a5e34c2085567e0c89fe749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=d22113ba8b60ce1397353a7df9b62a84f327028a4ce81e581a582b00a986a850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=2627e2c9ddcca622260178c2ebe775cea956e52523e67a160e7283f7d9df1699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=f9ecb0f63a797cad6a735dc133b5cce1625f3b4c23297191d6e4f3a0ac2f43a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=90b5a5d90a27f602ef70c69800f97658a950c1eb78b608d51bff4c908f27a8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=23246acdb4c7c93bd59ebda9a0cfbcd0fd973b6e6c1a685d3d7aaa6e5d05a496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGV7AX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD99nVhhCaXgpfTA%2F56wJTta5j1gtuTPfpkeRuH%2BaY%2FKwIhALZ1%2BKRr2ctSoU5KmzExeCsq9ujugFxI5k74ESNvzr6BKv8DCH0QABoMNjM3NDIzMTgzODA1IgzecEpjIT7DjK97LXAq3AOVIcDb5Wm%2FurniCMMeUYVIDsqnjSi9Z1pDBPzlGH%2FeGTkj7%2F3PhWXo7K4pZYyYazkgqjNjZ3fOIJ%2BBQGvLztWilh07YCWK%2BnSU71yX2KKzlUQa%2FPQHkzUdT3bOfxZyKCCgbl9FKLbZD2W2RUb0b2W%2Fyz6AUELV8P0vBT4zPPfNoHTAo5Lk%2Bh8AnK1LhT1KeTVZQPn8tFDkyNyXF%2FTKUPf0xomuZLuu3x%2FmXjKo6UM3Mw68Aw20tiAlwmN3OyGtEEdP1m9qdb2G%2FOolUhAJrz0SlL7RKlE9S9m3M6tf4HXM94eYu2Pa27KA6y0LmJJ4AGu5DmKaTZQSFp13JYB0%2FlSTUZ72YocXe%2BmxzXAKdBYf48tz4%2F3eqbzzJMpZ7Dh5DNUFf3lPKWSMhDNOb1thN3xJiyLrcoQf%2BEP8zNnZo28TaNZ2MsvXyn2lkE7d3EYkh358lFbGbSyydJxdI6I4%2BfwB5OEYp7u92C39e7CD5LRkxYWorye13r9GFs2K6EG%2BDJ3UlY2%2B26vadTpoog55hKiuIQ9XA7OdEYW2R8V5AHJ3dgskffuRER5moNJXclEq3PnS8CJTsnUPuHBy1nJY9FGFGXk%2Fz5WV4DGB1DOFByIvIIJ86iGLSTwEkpN%2BRzDc6s7EBjqkAQ6ZPqPQpTSwugER8InhWXB4Ezm19bNAxCctIOXxgHKUrAGf1ptJqvq62kHjx%2B3qVthp%2FWyiEuPZqJuXe%2BNO7y%2FapOTBRIKlp9757mKS9WqaGYNI%2Fl8u1V%2BSrlcVbAHp2IlBbVc8TzBSaRa%2FoPqQJo88dVclCn1eNQah7AOSsGM6f3CuLYmsADkdOpl0lCvXlK2SfTbI9uOpYfsxYaSu%2FumIcvYR&X-Amz-Signature=bd7073a044a8a765c1c5aa7a871ac1a072849e59bcd4596e37161d3c4c7d823a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
