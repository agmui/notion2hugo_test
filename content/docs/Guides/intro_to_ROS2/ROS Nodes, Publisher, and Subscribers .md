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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=9478e8db30ddfceec35788d53e2e861926c076bccce649853ef845fdeda3c453&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=a24ea0a0fc7cdeb9c3d2b13630064059ff94323dcb0236bb168776db3ba483f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=8de7f83582e9d333ade3e77319880216ad30732ad9488c68fa46b07d070457b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=1656254b8298ab7cbe77ca76b176f0daff0eaa1ad3f821f13ff61e0013efe7da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=3b7561ccf0942c4302ed67f1e224c5c81cd01fcb47c4e1bc29ae72d9345b785c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=dacb37f534ab15d6c65f1f9e1dd962fd28d06e858cebbdb5ce0670675b7f833c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=1ed6bcb96ceeeda485c0dd6ef827c442c05ad79f5840aea9945372a361cb7de0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHGMX6J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEiIbWabyFdgyjrN3HzH1Xw%2B297u9q7lpMJaI%2FqYGb23AiA6tbP7M%2F9o9tvjpMHhZC5oeGwjwSu0wcKpY3yEz6h%2BPyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMxUPuW3ZuOJOfslnaKtwDOKCcRAqG42kaxwbaI%2BpDAuU6QlS%2F1No98fKBRbZ6IMvBf2SQNWzoIiEC%2B8q8CUGJJVAH3%2BvP8KssbbVPNUbbaG2GvOeN%2BaAyK34dvzAfOSCN546P%2FIebZNTtGEDMgNuwhvZKOdej2Su2XHLgAPmqjziQ1tD8alaI4rY1FoRTVl3pGtlpWU2n9LmhuAxQQKAt6WwkuitH4WqOWddY4KQ63gFRfhf5tMsWQV%2FJARlhbzn0ewS1KNcT4hSreqw%2FhJkGRhoQdCUuGmr3pjGLncyYt5zIMXpNxprcPGlUn8F6Gaf0vCYIzWnqk23CRqMXcqQE2Dc3RybCPhYZXcKSEITHJbuiJGcuHmv3CGZZCZrxWo6CdJRbIepm2upgnS0A77F7uP1UzStSwaKBiGvS%2BkP8if6%2B0XkL3a7DnxpEnGTG9XPd1Dd1Pb%2BjFcIS0lBRih5FKK26H8%2F5TdUnaPJCvXE0Eq%2BFXbamzz%2BjeM7blYc%2BG23tMXh5MSjknWtigjgor82DjAfivdmMs0t598cobQY6LLUas5smv7u6aBZB0SKAJwP%2FePM7VBS62faJ0m3h4PusF7VcvNzbAOmlN7s%2BP5B%2Ffox7XB%2FhFcix%2BxDljtaA4OVbH%2BRvgea6ldhHUqkwvKD8wQY6pgFrKyVPiFxBeMS4NW%2FvcgW0gD63bDCM5GQwyOHb5y6MmipY0XIavm1TW2nSiYhGtRgC89Cg9rZc1UNUoIT2xbbWnUs%2FkrvBGeo2aZ6x%2BStAL1RP8%2B3AsjG0RRabvwvSQkZISzN3BOGCPe5C34fbWJTh3TnuqqWy3HdnoAiCvrdQ2VXZiHr67k%2BKCi%2F%2FdBJpnK2WjdYUnlkQxq64c6uM2xFSIOA1gu2C&X-Amz-Signature=ec031a023246ab88bf9133c816e376a280bd499bc5615353b924831398759030&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
