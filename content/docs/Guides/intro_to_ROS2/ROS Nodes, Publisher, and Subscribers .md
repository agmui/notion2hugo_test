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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=60323880542d8c7d6ccf7616b62621f4ed4877d84f1c61efef9f8c1c0c9e9489&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=a5f05832109f5e068a95b226fd99f7bf9ec345114bc8430309114eed0733ac97&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=64b054d996880bda489ef3217d36c37843c43e9fcb5cb5b4be44a1e1f5e1ae16&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=4ec111dc417d9a64d5636a9a98c29d9cac01124b08c25cd464492af81ca50a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=493cc40f32188d5a43269af07080d7371b53ec739d06c2e4929a76639da55fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=bb13e13d339ee30a96d74f5211bbd45573d9aa3c6d9042a2a9c225eec1f27cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=5b963d573d83fa541e537c1373a66e2c9dd7642bb4cc0341f53814802475a5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPVYTYM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUjk0hxaopBP3oKibHSVujHtHmMwy6G10jqpDH1sWQ8wIgYxdzf6dt8BBAEFGy%2ByHEmVaff0x4eG1H%2BjrdtUiUsxUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvlHG3VudRnS9bDoCrcA8slI%2BM9Gg7zyGVTiuRkxwSZppGhfrV1IWZEQW04ZYiZJRV5RSeIiF4baQhaC8KegFx0xgPI8o%2FEkjO9trA3TJ9H49hYzkPsgRW5BO5l4Cur4jVZpD%2BDaG%2FPTkei52OZWlBbCGHCnqq9xi1WfjrXhOjMPGCz2wPwz4EW2gsbITevkG0z0zMPjVYU8oyf2Xz8czonRHBUntC7ZJ8Pja6SUEGrObJi7StFm8OURMoM73Kl1s%2Fk%2BEcMBf4KQAO6BT4KeV3wSAp4iDSPxCzChWB%2FbgRMGaTA36jh%2B3LnxAXmiPDx5BjZP3SutE6%2FBjMi8O1YyasbawrfDxEa77LumVIC5ozudC5cDQvEiCS1VyF%2F5AQqI7cRarVukmLjXUXfD42fyYcmHvV9IC%2FI6CLHX%2FJg7y2U2bSbYX51wCH6TEMB9HDzktQVpdRPo0V9OiemkM8GEb%2B4OHei5Qg3%2BmxCunbNfRzCKuCk4l6xR%2Fx90amF%2FdA1e7yDuaYLOlihGIOyIrDkw8kCuS1JOXpvclWCjKbKv3RzIW0RDIBRksSyuA7LYC89ObrvTLvIRrMVtGhen6XMqyOJG8iLLOL81yEv6AjosIr%2F1Q%2FlnRCQ3sPSBo9P3vN4I%2BWpJHFmZvpzKmyWML6C5MEGOqUB%2B2WkQYmSJBSKMbfP6lqr9r%2BoJteY3Ba1fasuOozqJMTEvXuoEnuSoAvmh23g5gi2QxKgWrgbaBJJ0xAv7spFE04WdC0ao8lDoa%2BZhfSbCnEVt8VjOuhGZOcRNHQMPcRGv43MuL%2Fu8%2B5TsoOSFCFdXv5bE4QapVq7r47a7Ien%2BY7A28SpuJ0qkUZRf%2BJsPCk44qAZG1zLRZycBiG3YL4bc5HLV8ar&X-Amz-Signature=febf8849a07bed6f368b7a6ac0c13dcded97716731c27fd2df116e41928fc60e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
