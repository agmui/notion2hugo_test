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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=ff3570bb0ae6d9abd281306530bee5664c5e2f154480e316bd32d7518fce3d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=9855d8ead0a286bbd8106f3ba4b564875051f125cd8f39376dcb3ddea4053e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=6eedc1f8e82b48e084d6d59174ba5cb49a9a22f5edd5bcccc05da5410f7d4386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=3e172407e70771b02a6d1a468d1da7b8a37b31e2de034fc0653fef601e510ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=165314a9cf85fcc18dac8b41e98f767c28a22fc7c2aecd0145f3d3f33e7259b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=0c21f67d901a29fc013fe235a6f0a9ab01664f1f73ca9f10d4e4512663a13a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=7fd0b7705e4ec5c30dd985539e2746e52b4043c47fa3d39d7591ae2aee02bf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BEQI22%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICprwMog67zQQ98RE1AsUtggiwdsPS1zllw7z8K3Q1V%2FAiEA8XqUIMpJnCidbANoo8Yg3zb373w6otxs39ExoTh8aD0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEyTsd8i1FSbzx8IyrcA4wCtjq9WRHU2t%2F4sLsc7IXgleB%2BQM%2BgBLfx7GJdxIMyktGARSUQrDxhcn%2ButxIwAEOze5UHy1jDgrBOcCE9PiTpO5ySoasWhSdmZzH6azyZVIwtxFvzra7NvDbIRKb%2BRailq6v0l0VWJBMkCkKco2UTmjdQBv1GqI%2BNh5Tt%2BMmjLSh3tNNgXmzKwoGuiJ0QZewWk27MRvxUehnhUdQgiLVOgY1D0dPuWO59lbQ9%2BcPgvGgchdBEnBDU6zkbX%2FPtPYhWEOwT6jWaziWY3JEzbasRR%2BNDa%2BJBBMC9j7pLUt8u252qgaYF2r4WP55X6iwRvO%2Fb0qniUJ%2BUdmUR7KTlxxv%2Bu%2BJDsUudQuFLh9RkGRdpyMsvaoS707BpoNrNQH2LZAsjtJjWlqHICBSnHthqnOY1nnt7DBCZjAd2DeU9zoqQK6clBqtfIJZtrBBZioqYbLwkh3hhcsEYECRghU2Km3ERbe4YVY5MRmwkB%2BFlMxngmZQnQ4a6Q49sOHhd7rGk5avQwCYH5FqJCeHzcq3niFPyU1LknzRLjAkZdCC4CEjY8q6VJgL0opZo5IDmXCgxuSAaeKjWg%2FtR5wUhZcO2hUpDLGaGSKHXRMyGmkyTAwdI%2B8QCZMrhNA%2BxonJ0MIefzsUGOqUBC8lyqNgcM4giEtq0yKm74pTXFiMs7T3WR5uk5bHLasWiMZ1gPSTGIIYPFhLiWns4IVQF1P4bGGP19flR5YmZFZX0Rau8IdlSX1KgaVKG%2F%2FL6fSkqL5R1x2j8gVlBIWlSbWz8aVm4x4y2KbtZLYWPuHFOfoY3xQFMcpXwHSf6YlGo2tk3m4PXiUBu1jhWCxL229Yb2%2FPbWD6MAq7QBcpL%2BNdgMW0s&X-Amz-Signature=2398d934e10e15eb5aef6a73675bdf4df7486158a251683304bee33dc7d92cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
