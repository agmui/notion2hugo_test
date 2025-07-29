---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=f25ce4992b1f37e7be62dbd053d49be01a06f5a0412481e83c8aafa013be2b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=2d6ea48566d656c90bf12de68018f1cf9449add8243721f3416c1f105003e1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=60af85fb004b94c3bc18136467354a9eb963a3fa0eae9483b431b3d6ad737a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=216ec1da379e9ceb08b45342a0e9687bfbb751132b699d04eaa97a24342d8c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=dc0880b84f7d00aa2de965306742aa1996c25557eff8518199a26cde0736cf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=b96662c90b102a8a8a998b1dbed5e34232a84fe0c0a24c7c0486529e9a6fe641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=9de6e04559178f171876fac5b3fcc90a2da982c66c1ced0d80910139a769e690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=9235842b9c42163350f7018b4bb8932a726d4fced679f1c76eb6068d065df399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=2a71a7f3b2f517ac9cf6be5c802202f062661f21b81d5878655bd4d698dc81aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTKO5OD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEtzoDsBLyul%2FBvgzK2q9ppmP6XccZrUOuHD4zNnZxQQAiArehtIMchoDcBayMzYtITUVvjS64F1uK6iIDkbE2WFVCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeIjs83mNxwRuryj1KtwDzx%2BAsHCuqZZ90AMlufsIc3R7PRhoyyiYbh7zqAt8YoGC3pszxOdgrX2zZmRSSsAFnWCXBM2jPedrmYw%2FdiB2v%2B%2F48Hnvaa5PdPuIWFFei7MpaR%2F2%2BlstskQvyibZToYhjk7EDw37XDBKQW2BwepjFNzCELguTd4tV2%2FBbPGmF8h1Q8GfGw2bCyFs2l1qo5FRFbzdLzPb9nRVOVNdHvTeFPl2mMOSohF6CQW2cq0byY1M3IQXEzFbTEnU3Zcnn5LGLEAGcGNuhAeVWmT7oqjas2NjjxESBotlZOu71zqjB1OUxnVo0ivHnbVZN0N47oWZ3Nz2Jc2MKHEgEXwL43s%2BvFR%2BMEDSZwA4UaEy6fSCkJWtRhG0TzpV%2FahbJpraRVjEcFq6IUw6ix5XA%2BrnLHgTrvGw%2Fu0n3z5go9Ub1kIGwnVglLKmvO%2FfmrCRM%2Bi2o%2BZEUCf0AaJ7vvSyH45NrzKUpLn4ki5Hv14KBRgVcXHhEaTgPpjQBw6FcOOAToM3IaHENSMhi2g8nCDjqV1lXxIBAeAhfWEjXhLDJfX2Mwh5K43CFNCed2ryKzCnI%2FiiMtnWSJUHBMUr%2FqQunfh3gToEEhBPw5F%2BdzdfD0vJ%2Bg3JCiJUnzQ8v43ERlWk8jowzLGixAY6pgHYMI6K5xJQ3OwVX7PZloRZK%2B03MCY8qo3rs9U0geaiS9BBUNb5Z%2Bs%2BIhMX4iLmSA7WrFDx7XrB8wgEa5bElwsBoRfAWV9FwUXdefaTtoxzBnsH3uz73j4E8ZRl6K4Ff%2B4Nz%2FH0Poz%2BOtiwmf4YChBp1BZeJ6ZoYyJuWdD3xyjfj%2FyXNRnBKz%2BOReZLfduYyVh%2F0U4SjVy421CvpJ0ooGL4T%2FTOHkcu&X-Amz-Signature=2dd60a57bde3168e9e9af012cb47c0ef7282f1618c03d3b7e0abb0f7cb593b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUCL2SI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD5S0aDePZnbqWuAKHQkO7IaxbeNZk%2FxrloAjdl4lA9kwIhALu%2BrwFYIiYcE66qsE71sN2uXiZg2nDdllGgtbiKWCHpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F919qqVo%2FyUYySSUq3AP1zxCMJl4jZiJn65xM97eTejQEzK51FHWia8oYW9TanMGIeBfB1CvYMV%2BheuLkJqju%2BvI%2B5H4dKqE%2BqwBQA8aqKz7ITyEN%2Bq9Q6xqBuh9nXJNjVp9%2ByJFSX5k6w6HU5lHO7GCZSX1wRkIuIo8O%2BVh1muYFzkBRQzpBHWfOGv32fJ4s9k8WdQBtgnHpMNyFWvE4UOinIlmJwAggJVag3Parj5l9LwpRpVgu17cUuaYuFfxEU8NWfVJQCsmZncZWhhN9UPGl7rq0t47uJ7NdlTuqLiO%2BiduSiy1eup%2BLPKCZ%2FRWTUfqMJB%2B3ZhV6LcuPe9GU5qVGMv2gqWjHGLaKwJwdlSthgcOHu8xc%2B3rj%2B9kTU%2FCnAoqU83ZORqSjhwGCXb%2BRTDotJkJoZxwPqKl3H3Kgp%2Bcd91NPd2KCYwKbavlp4sN%2FCL7A9LLYXJHEL%2BCy3ERbUdq7gfoEalCnNv9kRW7po0q4Ban8CsHZMU7FPos0KdAsWycuR3SaBh73SZjBRJdBRpswnSWNXx7P1mMb3PU6lhkM5rXPuXRnqUp3DVk1MpiHlnvaIJaocR3O%2BWnGMMzQrzs5UJKivRdQbsx2Igr%2B%2FMVfPRMbI3B%2Ba2WmHPhcWd1gDBCn3Plw85NC3TDvsaLEBjqkAUOz21ZFt0G%2BElT5WqyKCFC9Jq%2BDc3tTdCi%2FE0qDzxoX%2FDENXnKgBnFAgFCLSriM96NLyMPmDytbWyeR7OB%2Bb99GasCJWybStWpl%2FmBWhCoycpHhb8EIl1epivTPVswTZRFjEHBWEdbjSoJytwmYcOgbcHymQ%2FgjnUCLzrHBEpRcbUxozLBerTV2mOzoDqEacAtyhAS2UwYOlcQnP1kjJZJdxhhS&X-Amz-Signature=4956c75d842d24702ca6af03b673d2dd417e4b766bc78966a9ad551f0544ba26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=714441f670cebaaa56e38aa03f8e32592721e0e44fd76ea5664491f20cb7910f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=511aab91d2b04c6577b89ad3a9621a6dba44f8fc5c5d99de5cccaee5f59002cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=3d33f3e912b843e3201b825ec6bfd2a37cb3cb5926b3b57c63fce0c36e62eebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=e164efbb937d16c77a30422dd871a0884370931e06353529764a03b6818806b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=bf8759b18f8de858248192fc4e9ac679b86a6a16643175de35d749f4fafa5610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=948fa07d729f8bbee91e74fba9abe736c6d2a9654f96bd374c56a81c225c0bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=b39b82b0293774f5006bfaec10e02eacd5a30cdb4286cbccfaf39a4f2909157d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJMZLGQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFHhV0VEy1R9NTq9pcihuL2c3sWhQ8FbKA24LuzlSbqIAiAzMBVNP6Az3tHQujI61i%2FkBVh2hQG0Vlumoatv7QHeviqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMelvyScrdka72qiXhKtwDMSF08urlgvMqQmWP51RgWs4mXSFC6aRND6uG%2BJC%2B90CiLcKy8w%2F1awMCPhSRFhHxp%2B7Hj%2BYSRswDBWVoco6qu1E1Z2VsNURS3HvzCXbL9gkR0WC2xuz%2FFmwijYRd5ino1%2F7O6ExU%2FwNLycspiFWEi%2BaSE9HEK4UtkQ4DquM3PRF8CBwC%2Bs5NFGLu8AW2dovI2PD%2BpgPlcq3rhFM%2FKxxgeHleJW%2BM6HGlbU0Ewco4u%2FAs81xy1W76lFYmTBSi3z%2F1cwAJLvUdDoOn7IWvapOSkr3hYY2PBhP5a9xioagw%2FFVrBICbTjjAG%2BNwlRFokhnfILyjvSfEXD7yPBvZZ9UVrnmcHCHI5YX36B%2B9%2FgHoysQuXcNnrztM04BU0NRkK1enZI4wi3xYH%2BG7GOqHFU6qOTC1%2FCEh%2BdGLXPACG3bmxRmzfIa4%2BjcXtiJ6ErbA%2BJ4feM4pGo9J0eX%2BeygtSO%2BswURLZEyF%2F65oGsz3Sr0YQfM73md4tKLeFQ25dEbd0TVdbbPBgttdFG36VYTx4CV%2B4DJwgvTFP6Xhh0NX8zyMk7ljFGhBy7xXQmAS%2FkbhL18Asi%2Bl5zUzxwZAH7GaTeugPn7mqUAJLL0FOepSAnzxUtVOnXjknAPS4sfiJKMw7rGixAY6pgH5L4hd8%2BhuspKasgftL7hVe4%2BsL4uPR2EU2J%2F3jYlML6D2qwVOIN7VTgyzEGQrP3ISHp90wURG9Iw3WxZ2eLjIetyyl1vjrS%2BZIrT6OM9vuuSrdQRJ%2F71VcwlDad4vlc4TqgQ3FLwVeaMnlxCzS84eenBo9hQsKtP3ayhSwGOrktYqXfIx6ULf6uaz%2FMi8abt2nBYwjKCMCwqsmmSC2qBhE0pst9Fh&X-Amz-Signature=22a0bf3f170e751ac18268cd79fc280bb955bb5f1007547293d47df681295e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node
