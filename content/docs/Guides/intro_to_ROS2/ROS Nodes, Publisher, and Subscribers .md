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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=318805536e6fb27136f91d4bfb18e453c845c8abf66f945ea26999965621f298&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=bb50cb4ad3f414c74e6b5e904d0e51eddb5a3e775be7e4910cc16384a00bde01&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=7cdbf6ac53158812d07e0b39d466a9386a8a6b642d846a51a91d49ebea84d3d3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=be1034ed0c66d55f28ac6f585c7e0df36ab6d16a3aa525342d69838b7d89ea08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=903756615712602c652f60a863baabf34d3dfb6870dc54f9e8e7d548e673e27a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=20019686834872a9a015156b0ece025d6995d02996dd9054a0dc08dadefa74f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=a6aca22b3480212720a14e896d2d048bd7676227ee80aff93ea456c883995baa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOLCKX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZOzgWBgxE9CP%2F0egA%2BqLEXEPIFr%2BB6GMnVigZ8XBCvAiBQ9HdM7fAckt8AbTP%2F0CyUTbwK8UmoQSZ%2F%2FHBbNoxWTCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5uPXwAZuUl8L1YuKtwDdrBx4cYpGNcGOL87f1yb%2Bf36yovzhMI3QcgDqt5%2FaKMhHaQzbPlxOXh2Ie85R66KOvfUbB1ZFYIUaN4zrGXJspTHQgcRk4Vi6CbMbpme1ds7O3zd1aZ26LDSjrkfwyzMY0SPNX9EenFCRMo3ioF1XfTP0FSwOH0C4M13fB5zsoSBrLvocWQxXI0RzvcToCcr1Og9hQDCZ9C%2BqMPwiA4AZhyYiCpFkoBYd2s%2FC4Un%2FHhJ2OJh6thzlKZO97xp7H64bnlEqSI1dXE898tUhJCMACe3fVSFa3W%2FZokh1xYA%2Foh1C7gNx%2BwoWyo7F5AFWXOAuLTwqVjelTe2k4zoNJZi7BcnecjNucIfiZLru55W4UDdk0Zcykc%2BQPZbsabEFf1btogd659pyw3XHewZ2Mn1cyTt0vITN20wTx3cqW5iPBqS%2F94O%2FB5e339aocYFQcP3rmtuioWmccZkEKhACEKNjw4BB%2FB1zSHTPR5YBxtlufl2EJwJhGisv8dlysQIyc6aw3zJPqaMABjw5PcHoX5Mc6MWTkPj5ABGr22TqAaeiQGTzaxnf4gQ524zocHsYDCaj5LWmKxNqrHbDBsOGw%2BE5Y1PtlzMQDmeRwJmg1a%2B3bQVMo2%2BpwzIqL%2FrW1swjufZvQY6pgFKs341gRjZ831EPXt2HHdscFKh9cqyoLWg2VQ%2FHSxN2i1YZv5nLg0myMXGkLmRrDD3WLg%2FRcBpcqavhtluFJf2g2ZEOTOYex0Zkk2Am8dM1UMqrTyYnoXs5J%2FqKJV5DOrEGexGPUAUu7lJKammDCQsGkbSH1lhcutJIm8gF3Ld%2FoOCfbFHYV3Y5yVJBGz%2BuhBoimrRwvhUabJFm%2Fn6%2BqIDWSNEYWfd&X-Amz-Signature=e298db76de3802cab614e45314d9c5dc471c7292158c4457659472fc6ae0dce4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
