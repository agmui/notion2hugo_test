---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=e3835803055419147f9185089dd00b3cf995cefe5440f32f09219d76456c817f&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=7f847496743cd50b4f3419802cb1120ce82ed4b424336b4fb6b24545c603c611&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=5f6d9241857a280af36d439888c9284e4b6353c0151e26194a8e205dc8b88592&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=7b38437dba0ac03e277a9d9f9fbdf8ef676924080e5166840b94fedb31353b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=645cb574ed57ef3b024a1221c850e61fa772e27eba99c7e6541533f95ae54511&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=49343c63a1d2bb778d3dadd0fabd963387315e6f6ca3ac4fefa3eb4247ab50dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=0bafbf036fc31f44f51c386dd02c668d977ce06d3a6c4051a694705f0f41c383&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPCMNWW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyudtj8gdkM%2F%2BDht85ST7HvKl0BpOBQ%2BePjp7zCFTCAAiEAodTPqLS71jB9f4kBy81JXR3raRWQjVHxbz53VwQrDiQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzuYIrgMqY9DuV2IyrcA%2FpchqVNwiDl3yEQ7zs%2F69QsC74tQe6FMnPBqdlM5HKCO6jglQ0F0BGGkH0xvpUJn2I2H4UwzNW7uExYfA1QIF68H8fGyHciX1a6W91RLephW6wMAK3WpOObr85x3VKTdS2p1etWGeDKAtPRLbhx9Dqb73%2BzW1Y5vxLzsag6%2Flxc4fKCGvyxuW6ANyzdHBnsPW4yvbX9Jcix0fVxgAcVfZ%2BLCeraSFZmRYlx0Zv38zgDecWX%2FpfnV1AOqlSRR%2B%2B1sF8WJDD8OV8dv4qK4JkDQ2yi9K6Us4sXvKZueCjxKHlmabf3GlN8q02F5cFGO5bsXThoOCh%2BMt5wSm9oec%2BHpNNNH1HtZ78YFboRPmF49H03mkkwQIA%2BTwLx84d5hMhSEMOW%2FKQ%2BLU25QBKlTaI89nW1f6PbKyDXZdtTul1efX3psNkiNE1jWfVZz%2BrT7tVfkJBkRAJCPRWeyv3JllLOGgbHB9XvQ4kzUE9MOn%2BPuJygePJ6zNYYp1YQFIoPtf6v%2B65cNtB5zqZGR8eqrzSst7Vgb1%2BE0YCQjWuBtyAut1l%2B3MZAnhuF7ZcmVnhOkDjgQ1ijiaZ2h5R%2BD69mQ7guUa4wbbnk0o6AuLKN%2Bk8DMLS%2FCakoSeh5ZiGzIx0iMMC5874GOqUBxABFmy6hAOFVXNeLe9qdFiUjYIZSELYOvO2mmBXV%2BUvo1Nori3CCwow9z86WDmW%2BbzXWXdf%2F8lp3DeHsrEifJAVwa33gXvoZmSHtRRVg5A9mcZilHccK%2F%2BK8tknLuh0h8bN2TZ9Bttbnlwm3v0hULaJ%2BJSPY%2Ba5S91WSlXo%2FAf0rrRlId3MX96MgabbhozA91R%2BIEU%2FhUTkGi3KBv2Z4baDykHaR&X-Amz-Signature=fb75d1470b4b28a803d1960b2d140eda3d07e530f86f420656eb9d6cab4f8c05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
