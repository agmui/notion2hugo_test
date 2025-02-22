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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=9d1ee8e43b5e5e2c18154e7083a8e5500c2514b831bcee716b6825c25d262d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=21b52c2ff645d74ca4d568a6bb3f5978fb0bb65485636dfb5518cdbd4f46cb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=bcb792933c12d44a64453ae6c5a74c99bb017d9520e84d7709f9091d9c2dbc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=ab46eca935bbadd5f4a2bfd0b6b7cfba6f328501015bc576dfa32c118b13c653&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=7535e83a3fee83724abd45b717e7e2c70a27527465b06899b719bf17bc4527dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=e79fddc1a15d6916d5aeb3ab6ce1ec5b880bd9c5c2c2c587158b0ec7fac47ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=bfe75b1e406c4bb0819823815e7f3d2cbb227e110e4178f29e0a893e2fc3c65b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMYR3KC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Wwrn4e%2FMpOQsUWufyGt7gsb4aR1R0FLnnHHIsQz2jwIgYv9EKL0%2FgLgIk4KT8Go%2F8Y%2FUpxJQImsOLA46CGKlCH8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwVNol9tl5RmSMeIyrcA6ndjzQ0vwirpHy%2FbnTIQTZKCkPJwDwYpNQbuCe8JeY0PvWc5V9dogmuXmmx0uBi2DzyN0MdgcdKiRzCPuzaIq4qE6iIAdNZN6htqh4KQZnQiyiUc1bATdc1G8gdk5O%2FHmm%2B%2B1%2BDD76LQQF%2FBmI0XKTAY3UrUiplE%2BfrZGGfUSERVcCry%2FtRLddPVEz6KdBbBmcDNcpUODslVhe16ZeaNyWlrXwmbOYZC4I%2Ft3hy1hXh4wQwgf%2BvJT0KkkzQ2AYkzJ1tuI2tbwzDfP46oifnnKYcPd4Lqpcsy5o%2BVxRs4ItYAx2hRNbv286laeLwUaSFAf9PWsn7OnQ%2Fu2NO0%2BhYWiA8oYU6S0OJJqjpfa1kvZk16apKQVb9%2F01USV8MGHGvsBiW1qCkGstNDBkqsqEX4SThcETqZ1M7TRPuqpikOyqpGMBaTpqn6X2TN2kmrJZxtFmFB71otlcpH2sqrm5rkxB40Xm%2FuWDVHGP%2BuZffUrsGP555B1TboGnkVs8qvizZr%2FSyhaSe89CflHvkY%2BzpTUBYo%2FEZi5AaFTOPuaKQNW9UqQxgFU6IoBW2NzormqLUTSS8COUsKtlPsr%2Fce82SO23uevRUz%2Ba8U%2BITQeRdKmFuX1QtcV82d55s9RSWMLfs5r0GOqUB2CpykdDB9hSKFgMCx88%2Bmb6PHtiDpGe%2B%2BIjFHGok03sAWUVBPm37tYfAs6GvtTomaZXd8wCr%2BuShLk51poXVROHdegf%2FyWaOPMyXX2eSqUMYJsoX3Z82VbN2TcTPRU7uDA3CVJVpQmcO47ITiuOjRFeERbN1wqlzn1b9D%2FdkMjlFXBa6huLNaOZOWHhczlhqz0FdrztM7HDCak9lUtUKf3zf5b9w&X-Amz-Signature=960e7c689ac38057b1664c0918f4d42426657de8e17a3711b3ea6caa5a198353&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
