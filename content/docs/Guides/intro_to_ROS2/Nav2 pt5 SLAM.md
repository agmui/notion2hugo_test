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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=7e56c7ae94be2d5c75b81211b235430268b08de85be6f17d89cc2ec3175f0ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=d5d5ffd7d1da4a3f563e6d8c4204681af3b44f5a1b5c08e868b47f0c2be0369f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=1670b23028a604fcd53087841cb59ac96f57487ec2054a1d6e57c7afd991fa51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=64d17775c06893d0c1c8534099e2341f86fd44aed62be264c6bce934d4598cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=8c8c497993036a95dd705f3782b0c982e52054c08600ea752e990baf74750feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=cffd0cfd67530edbddd705b0dcdcd8e1747692951214f442c99da238eccb6d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=00e39aeb46c9e93d61420820b5b28635aec2293fe2160c6440b0239de183cf16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=c31b843e60de1c8697da1dfbebd42953eb1a1ef04b172340d4295563376a029f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=e31bf5005c1d708d4339df9580f692ba3e3195288a4140ba1664b2e8d94587f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=9867a303931a070775245bc603fadac611755a16e8d8ccbd421cba5a077fe77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=e25ae008a2e5ac5fcd90b40a42a53ecba27bcf57288af764473739aad341dc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=860ec4cdad678f9dd10d4580fdb9b92cf61e78d281ed6078cdc452a1d0848689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=e83547ab8e52b98c9c8304e9c6faa11acdf282b074cb4b7350b7ce9e3c5dc550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEHM6A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3g5OBDlnZROdILdzVAxPFssil5s7flZCDRv6xp2kTGgIgGwyqr1QMDG71ZnBxBr8rWZXjFYBVdY%2FNF6R9QgJmBUUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE7qKaSCBcNlaRa5eyrcA1zY2h3wVKzwZgtkF%2F%2BJLYA47QxgPaHp4JvaH6tMGgUBMCORPOyOAjJPCij6wcKNCmhasBakzjvZ7QjqLdFXFaAZaoemjWhcdOXYbfdMgKs9PlX1zL%2F9mt%2FvsR5%2Fypqyodjd%2FN3Oh2Pcr7rlI%2Fk5lER4YeNQIXdtGgTJizswjTeN7zAgYCLC9wkbsBmilEcbqH6EJ2s6qSemfWRtVn15U%2BQOa6xInxI6jE%2FoP7mOqkC51sQmyPJoBvahI7guDTRoH7fMa4YODMggI8H9NBX1e4mKqMR0Ity2W1TXPxUQiAcGSTG%2BJvENmHrpLn1Ei1G0NsHdJN3rUoZwCTsIOmKiplakOWPDTVylLgXyTI%2FwWQkV35iNgI0%2FwNTvgEABSPC9G8EQ%2Frvp04TcRRrmz03tFkWY6E3owMkNr0aNnPf16A8KJnUgWCjUpodjdzRjSZSlnxTZq%2F%2BqR7A1rX%2BcHAS%2BFsqnhQVHIj%2FeVqYGyn1jpZ0cNoGQ%2FC9he7tC9%2FEnzaTlpiQOrf35rO1wfnjoWK4ySl26psowN9ROnLqPdGiGJTWSGNHFaf2SB0x5YBfVFbfBoqNgAxE9YtoMJ5UQOf9h%2B0c%2FRDznxj7TdSbFLl0hWdy%2BNmV8vrt5JkLEh9kGMO6i%2BsQGOqUBGLthgACvD9gv2SYWBu80sbMC8XWntCxR%2B%2FmXhamqom%2BpCkKzuV0IF6H5%2BT9Xr3t5ib9k49Q6Clt8ca%2Beyx4hqIbjMMQV%2Bu4CCh0tJnJJAcKt%2F1bIFI93LBEhSasn0XIepdfdmtI6C6GOsJjVo8AmuM0JFkGtTmkQwYG9Fn6Evh1asIxMJTHGzGMyphorOGvge%2FHz4FZg0EvKqNcA%2F8SeYBt%2Bu%2FBJ&X-Amz-Signature=0d33151f11e7c72de06d58b21e36d9e45ac61a1ae77f7730a7f64ef2edb802a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
