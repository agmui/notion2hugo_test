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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=6a639ab2cbb960c67195d22cf0d2216c04392831c1398f17df78f1dcf7ed0b85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=402d7b51ab4d819eb498f072b3be43e0f3a10cd48039a36580b89fe61807a684&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=8379065ecbac851422550a53c17aa478954deb03561be150fb0cd83c95dc6a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=c394f71cd18caa488d8136d30710bd8c9eaf2c587c76e3a5c54204067ade9db4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=6308da4a6ff94e154e297bc5f32a65a301d866e7423dd1c2a11f46e6d05a8d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=061b5ac5c4888134fbce83b89e73d690fecdb5dbfc02adb45e14068cef862eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=9106e6135ea3db4beffe5d95b595bde5fe1341b1e691e81eb64fd8ea04c55efe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3HPSY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfi%2B3GtDlZOSxXZEvJPl%2FhNRXyEdQdjtTDyf9CU4hNrAiEAwfW4TiEthB3q%2BCgvmiSlOy1L86BaHRUjLkmTBmar9MkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFGi9CsqD%2B7Q094jCrcAwa0pnt2W0zLHCvBf5OZPgLPMVPi0PP5P8r4cCGyqj7ga29BrukDnyakZLVTbNE9r5sAByc2ZEqpcvi5O4BR%2B7nJQ5XAfnoIb87avEQ2ArdG6goINkGyt0HhQhuNQvSYadqQu9qccqpS8%2BuIwDYQPBb%2BxnCw9rS9%2FckHiDttdUo2TebruIwrm7c4qR63EBDoie03nXqUouPu0h2ijQbsQTeDit5pWyvu6s9gRUFyevt1Mm4IYSE1LhY9JTLI6UTSkAwJ51MI7Wu%2FyaNg4wuIq20QaCkPTz7nYgp0tt5FJsLiUGcS6NkC4jNzY0f%2BaXjFT%2BWmQUpCldTsnP2K4ngaXU%2FhX0cXrjsTMYLIkpKvNGCCoBzpkRqBRm0ucmWR5SaE2u13zqwKNO6U2eHtysLM01%2Bd%2BDNNua1IIaqoGK0i%2B5L4bDxrdlZTRz36gKw5aRMvEIsJZjfhln1AHlOMC4k76y3T%2F0BmNVurhv9WWuHAblODhZuxnbD0pgMlZqYHCKbNZMfbq41ioELN1yDkGolxV8piaFXd%2FDMrDEv%2B%2Bv%2BTlkuxPXe9t%2BU55fpuqNlRUUEzw8H%2B2KF6WRrFrVQn%2BoxFc6QojHpBd7Q1NSVUFFpPhtURThMsl%2FTUEY%2FXx2NgMPCmlcIGOqUBDh8djCDJbtr6bT78KJJJ3PFWgU27iYLIuR45JtvOoDZReR8EDDCKgVnPFOhBNLCaBqpd5P3Nso0AhSZBj56EV4jqabTISpM2DRvTWmXcy7IvP0XI9DLmWg2TnQxmQhgypx3Bnn0uiM0FJRKCUx01CdtUOsdv1M%2BWYncHztJppLgd3JLJhISKvS53OGR5JaImsHpJ%2BhGVPqHH0DYsNYf%2BuBiTk8Ad&X-Amz-Signature=db563aa05601d1dd41b1c0ae324798a60b370eac5815632b4250042e413d78e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
