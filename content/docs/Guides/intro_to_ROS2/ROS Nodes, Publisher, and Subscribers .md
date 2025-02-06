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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=cb150ca0ee271d81a6e4a6bd71b45c7ef5f0407d4eae70686a15232f60489f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=3cf788323c7196b3660f917c5e8c9ff1c995ffdec913b1e4c36418408688210e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=3f60d9500b2ebfb65df5dbb3cc26d0758930150be8b4c7eac979a845a21095e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=21fc0c8489f66a5198561c89d5ac4816d3ff9c7a8f88e5b9d40a25b28fccdaa5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=f3fea33f7d63951718d1268f9454bf00ea5716699ac2c84158be53c3b100b969&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=d82dfbdac336bcbe97868f5fb4c8fda0be63f523050dbf7beedf37145ab0cc62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=e8aa49c0fc8b9a3983c3decd4518486b5d2f65791c619ec345f965402d1a7ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ML35P4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHNjV9XfjbRg7fnw1hyZAW9qZpStH421S6%2BbRHqUSRK2AiAjThT4zlhnJ5yVyD8YWBcOsyKgQ9IIUXznuadu1wTTUyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMCPL6p0uzOHj4HswnKtwDblvwPrdmltLdVTL6AAVqml0DXVp4DGvaB2D8Quv9visfjqnEqMU7npahwNEuDqko1WmkAhbZXukSeQcY7SIdX9lRavRYzzsrj7eg8Z6VfGamVIYikDUJiXVfBSCDJ7HNpGqVtYrHqYvPLmAO3%2B%2FT4ydz56a2%2BEhwGKQVJiZaW2rKs%2FnB0%2F0CgZjhHcKjQ7EIM%2BOhBFIR%2F49ej7lGtPYXBVoVIsariktsLbzUXaooaKLnNeW4VhMCd5TD%2BAndJDe6W8vSuzk6BIpbcsaXfdFmYBHpKDUQL1cWOUSE18u9FteN5u4g8ZeTsUH8Nw9DZoaOr5HW2zx2yWfVO%2BTYfA0wP8gg9uiTJp5ow7aXmkc8t%2B4BChUsn2EIP%2B%2FUwJSwSTQvs6XsfoIe4G6cpvZyRXx2ZRD7q0hcoOvcHcv1eGGxAX9hfuH0YxvX2hr0NOBFS5%2F3gr8Es6%2B5FOSVOlJsuQQukfPBi0UV03t9s0qgTGhU1P9UeJE814LHCSuLGq9hY7e%2FUVkkJhKIeOtFDNwP4zK34svu3LCSqq58bHNHeMSt1W36buPiX2O3rhv5mcZXw27Hl6jTREk8mv7wzMtSWH6DPmOaA%2Fz3%2BZA9j6mR%2F3QWb6cCO4ppKN16IDR7knkwmtOTvQY6pgH3U7qqhM1Fl2oQjhpHEwV6upOu%2Faq0Rt1NlUGsfe5BXvXbKVHdQSPkr%2Fnj8XenAr7CtwDgd65w6NbnF34jsTRQtvvR08WldrOOf9odjbEICQuPkDILBKBHfrZxWQ1U1wPZ8WqsIZ2%2Fha5N80CvStepxsLBLZGPOf%2B5DelqE08vHElY9YrzOialyXmCqCByfTA%2FjnUPmjGJH8dKFFK36RltzeMfztkU&X-Amz-Signature=95635acca4ef3cbfdf186ae60965ca5911b2c5abc3aad7aab8076788eaeacf59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
