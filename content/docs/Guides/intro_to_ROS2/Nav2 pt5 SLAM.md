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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=f63df770bf561dd30cccbe65e072e2f91200d805e354af90791b9e8f8ddd2f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=b85b2b0263e746560c493a5bc6e6b8e2cc605e489bcc1ba4d46e40769ce42cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=917fdbfe5e7fce7756dd7e574ee94115c8690c48a4fe5b3b82bd4f65a0cdac28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=b99dc43ef7a0dfedb53913d928c322c4e1208e71d360f61f8a7bdcbbab7fa8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=12003af5caa243a023a871dd046b61b8bb61009b3ec451354c7f4dad3bd0d988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=5069af515ea782b819e406a5411fd2b14bce951e9fc13d9f6412939597e4efbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=11b87f46756cd34b94dddfefd2fc1b7666742fa38651430c7fdc9c75b09f8172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=4a5771dc0e973c6861efbab5459ce5ed36eb645bbc0b47599dd3662ded0d1289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=6ec24408e73422c8699bda34e3b5452ced0e8ad47f7269562fe996440d69a13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=bef58076c643e4332e576f303f4b8984a1e13d8a927c85ffe70496aa1efdebbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=8540920729bd851481349d9a8555592cdad6f2c7a4768e6a1ba15714efb9db3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=802e49c912ca08f3c4ab14639d586360585a85ad669efedf388b8ee312aa45fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=2d89b52fb8fedf4d8ca854e4f22f9f7a4b5f3942a6d720d90dacb718c7070c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZU2LGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDiOG36qb1uX3zh%2BLPTEi49t2NEFSkU0GeiWQNlyDPyVQIhALfulB0uwul3gC4BVM8Oh07z95AS8%2FewY1sF%2BGya5TGPKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhExnDdSH6OCYm9Acq3APX1AtNwPS140ZH%2BXbX7PbMFMC0PUSFLVSsdIJQV3D0ttYIimADjCMgklPsqNisnRSibrlGezEJ52DvzQJMMtZdJWV3Mk6ic2tDy4BWwqyFWEdfgCXKNd3nUUAhLMo7RsHuAmRgnmZOxxT%2BW%2Ba%2Brl9daddpFIMTlTFFE%2Fw9H2BS06quS8W4ac%2FxOTenXBjHw4VO2V%2BSmeXuw22JSBmb9dkJwyJqEPMJ%2FVJOUSIrcXXBB6ZsXKUZFI1zmA8Q7lA7kyQTBkosH7W1WcQQNT8soJ96Ay6C2AGooC0uCbNvgN8Ma2AI1NHYHGgP%2BzgYU%2FZnqns9vVkNoYB%2B0vvfyuyijELVfoSM8sLHlF6tKLWouVWJhaYQhn9Y7VMmFP%2FY4bBUjSzQq8zOYXiE5SRyqgLMCHACWhl3Yr9L0fWFZ0VWIkxe1dzYFzSjRnNKVDSiMl5ijgoinbzkCyIrw%2FyMiU3AWBV3WWYo2fUFs3QjcVAstUGi3huf0gy%2BMs0SkSzZ7X6kenWI1gHmeWo5Pz4Xv495%2FpVGXg0MOXQmDQzajSaGnnsrQIHtgf1lbjpTUNJbIgVMzBLUIfNynU0S09KO%2BYLftNEJk9%2BiE79NBz6FoA%2FLbuNvcrdNrWlXbIsovGnTnDCPxs7EBjqkAfOsPg5P0dygteTeEgKQfF38Tykl%2BGTMnuVK%2FU%2BhcS737v1Jcoc8yfkIvO9eqZ2k7SxCOq1dlzneejUbhsTzd%2F0z9zP5RGJ6DwQ1wvdccSYIyfjLJ4hNk0J4%2BnxegzwI4iE%2BJcSXvsbK70%2B24Wds49yX%2FlAj482WKcWnC03zx9WCsxVw6kYlyIZjtIr2qd3fErzlpaj3FVszAM40h4U6bYmUmzki&X-Amz-Signature=afe89c5761bd5429286f08691fb0d12983ef18f4031b734a49cae2eb4f93365d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
