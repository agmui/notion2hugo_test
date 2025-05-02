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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=306ee6ff64ca7bf5fa830a953769b76e4394bf8ee0ea4d2684fd6137dced75fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=804220a40bbd6b30ab143fd2d4b175b1b3e037b8219b4caffb5c3332d4cb3d98&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=8059ab49cddb12e80a205f4d40ee70a561d11c21571e99cac116e9aa42110973&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=421c27cbe6e00ba075d0c4e73295a3c814139d5b147e9b12db7045f3f3cefb04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=d0596eb685da8b99e936c55507d161502f308f277ef924ce1c177216d5b7aa36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=7f4183aa11dc6388588d72ce5afaf7727bd880ee5674ddc3c33bed54e809332d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=61cb0413feed15cd5a25508bd390f6b5f93dcfd55038fad73906c64c4a41d2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2SZ4LE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD1typxTZ6aBwtKJ92x%2FLSY8ahgwZzJPaP1aB5O22JrywIgGWb0oolSVx6RADFK5DicVDqUxJktlCkJWVBHM766%2FIAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFWH%2Fn0CsTX%2BFU2RCrcA8aDL56qKZQqxA%2BIsAfiFbDRrPlSVe934otgbDENupvNBzbPsAhp3nHjuu7TgyA%2F3cqdXwhNz7wXq7YcqlXO5HBsACE5uEo5XKOUxQ%2BIDVZkiUetWAWtHbSpa6yYbFUOGZ8J4BxuzNQmJmfC6TIx3llQttO5zkTJGYyAGvKz6g0STGopTrSXeMLEr2o0CfckgXgfbNN2YdtSpiunPUsNz%2FLxfiNzq4gXRhLektQk3BO9kLRGM7m2Pemtutv4QMUwnXenrWz%2B%2FA20UZgWs%2Brgbz%2FIrsTldfhJ1FOQDjycEyUOgH44syBNiJf4WgBYhtEkac0uO9zQvWWwyccUUmFwxexHjO8d8SygAuMs%2Fyb491poTtBCxnfwN0SJLFh6bF%2F3Aaf5v9txYacb9Gidl8Be6TFWp1yoQ3Aly4cZYnfcLa%2BYQpqWDgGtPiX6impMIIPhhAcZeeUu40ENaunSO3kcErXam4WPO9MisnwQRUum%2BDKf%2FpUowJkJi8FHeeesOjd5qH2U5lOVIiDfC4d8%2BjM2%2FwBCnvxYHmXAmHCLQzHJc7qcRrtPl0riEaAFd8%2BTWXgN6uZ6LnJlEXTOJ3FACPcRLB3eNUtV2zy3WLgzXZpT9OagLXogdhM9LN2u%2Bi9dMKnk08AGOqUBaQudbclZyjJnP5%2BqOnj%2FSdKTydCxFDdejSMlesLN34AB9Wz1CgeQ2cnPDxNv072szY6BmD%2ByRDVeZlISHRPN0XgdNDAkA1fiNlFbzRdx6yX2Uncn1DemnSlIpnQpd86wPWnqZAdKBppfSoXgP8uqodzVGkVYRxmwZk0HqgSvP1aGCE53vq5%2FO%2B6H4i6F4d1u9ZO0KGBR8MbznI4mzQEPJ5BDleRo&X-Amz-Signature=c12bee104d2b440a54f8d31fab20a921daae71246716658e9a1248b05de53778&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
