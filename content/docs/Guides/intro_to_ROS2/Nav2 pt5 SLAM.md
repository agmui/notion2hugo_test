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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=3d83c1415a0279c880a2ce54a3644413535875431a4e242056d5a59603b37bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=0904643a39c3879c608d75900621c743a13f96a44797d30782abd1c1a696f886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=f3097f55c8ffba2e1ef1c5884703aca86ff9a03bba7270b712583cfb7520eaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=3d600874610ff9221a5782c151d74d55e5209b109972e67e050e8466362f3312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=3eba1588d9a5ecf9dca1f851d4ccc208871890dfbbcdbf5cb572493c2a17b4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=3ab76d494ffc9dfdc869bc37cbea7d50627de485e1c6cd468b39286b393226b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=831d48d0297ef5dfe9eeeb062d2d68d587b4fb07e27771d655d71e42000b3a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=6d4fd584efc9109c6a076a1d39c534cafb58e001fc3c0ae1e189534a5bbe965e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=64094116b6ffa49366e3a2b19ee13e88c8295aa531969f00f2ee338f4c38567a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=14daac8a216894cf6be8ed1dc23bdd6aef1d6df52b7981dc4d602ab8182b3a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=ea1bb41c5133ef86bbedd4ce304ee60d3e5dbb4da705e80535c97f2fda1797ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=c8e3c12299959879151f33bdb110150b039dd9ac1d9ca1e318b26b014943035c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=d2717d4f9a5e4b4f212f24100a3c0c9e7aeb7b50e68de15b0cbd9f998ecdd9ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2URGN4R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEDW9%2FcEha2swJra8%2BtY%2BenXgjiS95gEtypR880ZQmb%2FAiEAoqCkdAXFg25pRGQL8vPQd5o%2FT74InPJ3RQatfUptaYgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BfjUQ%2Fz6Trxz%2FpDSrcA%2FKQRzJWrGX8DPUh8p6TJ7IF8%2F6ZZvz8wFRvLO%2F9OpQitV3qCuNpWn6iKNoLuYpQVbzaTDPrEeoAr%2Blszeq0frpsizlf%2FImnQKwP45RrLd1k6vmYAfo4KKJd%2F3Wdy%2FhAxoLW5p%2BX5ot57XfCaZgESxYxh1RMrPbdLYdw5fNCUTqnWnhD46O0mEjL4fDg%2BdeP9qtG0Qr8VQifCuwqxV%2BW7hOhQ%2Bl%2FhMOgVSbx2KtMf8sm8eqIQ8xWh3%2BxzVoj5W6mzqYcivBzAmnyLfk5zSA6G6E9Z%2FtY4%2FiyaEvmMYgK867HU7cgwPjmXwEXAdb9%2Fehl1Z6OgF7OCCOk3JhZZQcCOI7DC1LdZeem%2FggQL2VlRb%2FWPOfZuC6FmmKFv5kjdLiblpFeVurG1ZPa%2BeuNNis7S0wz%2FXSmeD6cfU0DXB5n4CqZozOfaKJJbt5HvAzEgTY%2FUSwgJS9APrGH53sGKE7GI44ea%2Fv8WSlw0EBHeKbNRyrsnLP1Q6d36eobmeVSf567ldX0xGpt80fRHQrcfb%2B9qqS6M%2FIS6Z29PsFqV4VhBfKjW6mHbtHjlP96q5zUrpxSbZ4tErpBxaswVQRSiWm9IMs42KRuam89A%2FOOLmLn3sI8PqI2dYqN7pa7GwBcML7J08QGOqUBSwj0FITrF2zNlZY8a1hpaSCNRB9ta%2Ff4jHP2ZbeoKPQTRGtHkwxxV8AlUxsUi0alf0h1YrSvCIkL8yavS9yIKRFmaLuZNScGcvFCXrtI61o44BsZv5NYBLTKWD2ucE8avZAKfpoWbDbTez%2FHvLtlR2eAvk%2B61Wi%2BR25TKuCsVNrB6XOJ%2BHlKSA1qUBDHIk67%2BuOO%2FHKYL8ViIX%2BjnFQKOXI4J3D%2B&X-Amz-Signature=87e5dcf4c0bb6c2613b13e33956313be61f5512b1996cc3fb558bdd5283f2a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
