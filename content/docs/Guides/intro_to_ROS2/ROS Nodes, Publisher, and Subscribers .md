---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=6d20f8fe07c8cbd0fc67dc4de8edbef07502edff1979507cc2562084b177ed85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=ebcc2d2e96a420b56648262cf01780fa4791f46b46ff8e3098ee70402a591ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=591178d2e546794645d5d3dcd03e0550bc4aed46d20ae04d7cbd8ca2b1df93bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=fa502ad7f25d2248cb4d51bedb0538fafba56d138dfb98e4642eab75f0d441e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=3c825bea78bb8f341e87aaca78d6ed2457ca00287407ccadce6c0b84cac95d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=b6d06df59bee83b153a0d2fa916ff194a7f9cda4f14dea8de9e21fd378a0480d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=7dede9097e1687e4e0887f4090f77a6792fdc8c62f92bd8c6541cbb5e09f6017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MR5LFN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI7KkqY8QUuT31eB5wFbEzzhi%2FbJBryi7dUSGHhbva7AIgMCUOmREk%2BGHzPpdnlXVIZ%2FUPJ81rmBI8QWu8pK4T4z8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIR%2BraRBJeTMMv%2FcBCrcA6GkSyKjoBuhF3isQCl%2BxABt%2BoNZ8F9tLdTXjjai2kNPus5LtmKY7hztYWZQaoHUf8ITWizA77ev%2FPgMjF511Bs1wlpvIjTKi7AHBWDu7a9zWrYirHMkZJkvh%2F9bmnrVFCQc%2F1231cu%2B8nqPr1kf%2BqzQJ7eO0WoQ%2F4tNvNQsXqryb2WJwb7TDxDIpL9K3ISSe24eB%2BgSRr3nqKLvrP6viWhDieAbfymXMAXen0kwpWtUTWXa5dqB6B135Kh3Y8Qgx32d9V6%2BCgrj7QDyBIJVssbw5qCx8JkAH4smNIHOyRdaT3nr3g0oTW0UfbCABsxTem7bDj6e8vdAXkZlTsOMp%2F2%2FO2oY5s7Z7gQnBjrnspcUyXHO%2FgVirhm00FotVYDGM0U%2Bgq%2Fl2zzjRQr0pjK3%2Fgkfc1fc3Bxb1zrmCxDu4vXuw2KFO%2BTF40AfnbOHVWlGdDHae8l2XCUUo5LeliZIZnMh3wycc3YnUrsVSf%2B8BWYEo5jrHBJBcOJ1WGhI5IppKPtYmBGl%2B%2BYo94RNT7awtWIz%2BklmsDVAQSKr8Y7UFnmcdFc4fbHnJi1pO633rganqUduCV6krii%2B46y4mx0W36NS2WWYwJiMkgpxH%2FLNK6BbILKIqNk8JvTL8yGAMIuy8sQGOqUBlrOS3MEHCtJ3U7fOmqobPkPnB7Kt39RaoVIg3W%2B3tB2li2T1vXNpM%2BAYc%2BUGg4RVdTq5%2BrwnJsE1HYnpV767r0%2BNPRXu8%2F0yFSTazF6Jue0FaNXTHm8AmYex6S4UTQ5G4DfzkmBkF2qDmUFfvo%2FIpCiAwVcjMIoMtJmhTzXgGYvL76UxMiNizOqG11btUmWclglCAD3SePDV1FXYpKzY2SLd%2B6uS&X-Amz-Signature=9bd26d004860e2da58462da30fd88fc45eeefdfd4df5175cf460dd6ed8ec48be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
