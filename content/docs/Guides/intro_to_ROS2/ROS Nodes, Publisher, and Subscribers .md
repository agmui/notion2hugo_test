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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=0c89e724de721c0561e65d94d6e82b4ee69a631882eceeddad0c230923f4339a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=ac5ff29b8d311667bfa5dd470aa5f22671fedfbb210dbf228a85e31471a6c0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=1781310208a5907711f41d2db97c2deef54b4c49e28b20a9ba95cccbbefbabbb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=e233b463055076a073bceb4e1ce03a520c7775765dc544362242f4db3118b8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=944d71c41499d31c6f3f902cb3c03f7668b72efcdb17835ce7e549fb5dcf2731&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=30b081e974204f7266611235f777e45aa3fb2a4b4204e9f314311d29a7b59afd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=3380a8683da92e8aa6e205852374d1ea7f248debf580806dcca702790c9dae4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPXZ6E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpC6QvO%2F2lgSo9CZ%2FqAayLCCJY3gBkKdX1L7BRjaI8mAiACP%2FQJKj3btBwPYlDUBre97cq8i7CGd4p4GMC9ZrG95SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRn6VVWekOFmLNzoKtwD7m3w%2BamgsnEcKG%2Bz%2FHMHWCVsvsVtUjaEOx9wSMfGWjedcqP650zqVtmClxAnE9Jnx7jiMexL75fc0HtfGMUW7MWMkisbpeaEi9k09zvQC%2FePKoEz4NPeErd%2BvMLNXSOhZhDj0qgF7jzoNALR%2FfMlu9HN9%2B3dmNDgLhMcPTnv%2Fqq758%2BqWXxQq4b2OImeRPA%2B41JocHIls34mTGBE9xGdQvqh6yAR%2FmBHlA1GAdYuAfIr0sYYT13g7qL%2FYcIiixuOCOEKX81GaZCJiWnBblorvDBmYTGjZ76u2jv%2Bm3gcN6h9%2FCl6TUEeWK1KVkC4sIRgsIB%2BM2eh6BfHPwFU3xPp1C9I%2Fa0QmxrPrQPMVUvyeWV%2Bn7bM6INiLA7oGEkW8rJWr19ha34gmZl1WUVr6l5536YxpEFZMuSdLTNKCPQR8nR0jGC1lroUH5mmfDDyCa9fD%2BVbAevnCm2jz6KVX5GuP8ENYl2wDY6RvoY9WKCwOeYhQcds3hBPixiyNQc1dnbBhMvjo7AtwR74EBp4%2BgBsdUDF%2F1OdjuSylDmvLu7Riy7qFlq%2B6RhCdsVA9axIY0if2YiLgsKp%2FKPnNOUFbL4l0h7g2RDyddrN4wlGyE7whjpvJNgveTluZO319iowmOT%2BvAY6pgHvAYlLY1X%2FewwwrVrKCaoGGYrJO4X%2FKgW6a7seSTZ9A9Z%2BQZyUHIUFJzFFcXeEdoo6PzaOLz%2BD77zpDEJXSQQRC67gJERTk7CRNw9kAAAyJkCYVOgkp%2Bd7RSnEGt%2Bgzlm%2B75Q1a%2FayDOwRb1XYJCGrxUERplD4EylsOQqGBM8xfWUuBOTPg7UdU6JrdM9EU1%2BQTRCdBZ3ujJpEMWL%2F2%2FowgsUyreR%2F&X-Amz-Signature=6f914b360ee1ba74b51577a17bccf637e24e5992c265eb1c72d0af329aee3b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
