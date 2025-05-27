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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=49aad6b9831bb4480f3e5239d0d4a2725cd1c0485431d9bb0b56958d8f431b88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=c760538938cbe4aa64a00bbdb35683098b02fe2b76704bd24b8b8f9242fd5054&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=9b1a8f81349552b5cb9b6a130c6f47aa6dbea82eb1350fd85c2854ebbd817f92&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=50d38ffc53e3b842d0af798a58a7d6f17cb1c6bdd88bd3c99cf6dd8b7d200b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=0c17caaf7495ff7000e96d029859d6a89e3c77ba6c2bf2bd960936ac8a8a2c70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=0aac1a821fcdb13738980dc119292b42d1fd9d808da43dfc929952d7eed7744c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=b29e485fe247d75c1cbc40163b08a03467e770acd9f345fc66a7b9f2fd9d5eed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7GVNCZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP%2BbZw9YWb7kLXu5vI30CGtx9r4ZlPeQEVY62x89gCOgIgWORIyQM5l%2BuNW1hniyaQV5pqnlqHyRxlibTb4fmMmOUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7t%2FPzGTAl2rJTgUircA1%2FrcFfBRhnj0pb0zfyuDhvTT7%2FFyOooifuCNXGmLYy6vQGzuhPpuNDicxWKg424PfFnj75YafarLaOmIvkuIFY%2Fr3Q8%2B76a1lr%2B07Icd%2FhI8nxZoBlnK%2FFSceyIiMI%2FSFhHQfyL8Jd22kBdisDeTjbsV6DzbJ%2B9NymIpFXcXhRh09oqbYL4WMgoQSZ4oG4m%2FOm4EgcHlcj5MVMlIZQmp3%2FAvhIwb2Zw%2BMEQRLf5G%2Bzunlp6LApKb0eXvRdrHN8kTgIXzYRr8fsJk39pT6%2B6fUZJfYe6wf3eREoM9ik%2BkXT%2BwiQBUHU9chqViIOW2zOAtdh1NY%2FJGOBZK8uun67b4cohTZRbRAIxwxDYK885uiY5BUZUgQkBIQkJs7AOdb2A38CnrCb4oBjz025IikbfupIcQKcrPaAl2HVd5rEDnmc9FG%2FXqLiSbcXLJofVfmxf47J9urei7UacJ4JNcIN2u3Ho4Gvz1m%2BjL6hAY3BdU3krtZzH37XkXrqLgBaedN%2B0HDN7W86YlqJ7pQfCHZZv1pk1eqWaeqn%2FtE0PSGIKuqFs7GJg0HEFQaHlBVCBTM4F%2F9wiZmPg22MtGQIFcK2eJeve2eXcLVmwRW236bqkOrivy72doxdjzwWS0AaZMKfT08EGOqUBHiQpFTvwlTbxsHjsiIWMVyRoyuw%2B8T8siIGZMSk3iKFfE1lFXK%2FnyI3429eZH32OUSfyTvR5%2BYrRlUioaw%2Bb00CD6G8uUSsKT9WA3HMRR6zTo3p8Tyfqvl9yonkEly9YuLgWNHiFOQzYidUzKVskJsQkd0QwTIc2UOAWS0Yc9ThZAaJy1iT3RruXp1BTFwggFYCMXr%2BGnoCVIce0DujEaqTEcNR9&X-Amz-Signature=005e3b436355b9721049f112845f1ba2337bffb31e866fec0340c7405f1177c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
