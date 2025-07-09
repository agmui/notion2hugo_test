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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=a06e7efcf73cc3798dade31cd95d8322579cd33125276cef00aa08faf85201c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=215da8e1d87df8297abb53ed91da66bdfa03907bf6bf48ae10e9607ddbe2a451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=cf20cfeedb77ec4f7a85ef096137b84858e275c6164436ee1669e38b20504161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=96d08c9158afdb54d37a10bb5aaf5323dd785904ced4ad8df98bbb3306576710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=fc92d8eb5f1b1a454ce06082d2bd411273e7e3ce37ec852a4151c1b46f6b39e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=5cb56a2e3620d57284f4c9f4ada7140f04f117ecd24737ccf6612336e25b08ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=d2590dc674d17f715be556bb91b61369c71f8d2c9b6d61d968b3d642e9921bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXLSS3N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECLapTfdGNwIDfRSzbaoKsfG4cC1CIOCb5h%2FHVJ0QQGAiBYfb%2B0Jx%2B2a%2FgT%2FlXrBfs99964Au6z%2FdgrvIvRuevcayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhVO6nxhUaeLuvf7KtwDSv%2FjxhjRLpVL1qCZob8OUdfnX%2Fl1lNekTlizWBHnMoAtrlx2TNbMVukNf9rgMNWC7F8OV%2FMHHM3tHcNhus9LtLZoW9%2FOFfvkAqbUtI9BTGUfe3pce7v%2FmOMMtjJXguhPzRBuRUx%2FUZcIdZb4VLpHSl1FBHmOBsAnhc7UQktgdlimLZF7kJgCrXMN8lWRj%2Btvlu7u1jfzfEjNv%2FQwzq9g1ZxM8f1l7KfvV0mGtRa9wGBW43pFOsf%2BtX3efI7vsqpleum34goxN3L6oFs5%2Bq%2BOZe0kyADCIw24hM3X8YWymNGgrZIfDp2dgSYA1GEd7VSETyCexCI%2BWHr1QXmWsTvOM9ucb2fQsa9ksm3M7FZUVPenNm%2FBXUu22k3XtB7y565DVAb6ucPtzSt%2BsvLBDjqXSvpfY2R3EI89J0RyiRL02rKJElKXld3WGLWTkVb6jC01GNYN%2FA0CwOqRlt9n%2FSPMRBPvWsgValb4lGnt6ILDZ%2FpRqbpvkMuWtcvnGvWcQPqzq70A6hkPrw0XgpOq5xUAmnbw8M87bEfFKIKN%2BXx8C4yxofBDEf6LS927rsYXiBmei7IEEQzdxrX9TOC5xgiV4qGoBCGdSBQN6qQnbcz7%2FoDe0XrZuRJWacjT4FUwxeu5wwY6pgFc0VOzzrpsM2szEn01UAKBx11b2tppPjkXX60LIEICzfRCi3ZHjxjgLoEDKBhh4hHwfALIBbLAColRThtplTRzfb%2BMYHzHJyjvqqRhU8X57wYFPmBVjcQS2JWlbIBEmdz5xBusRiKRac9ygT9e0HFAKYsJhERdKeo6EBvWUSEDtfBWqiyv1qc%2BhARautjIkWNTsxgpGwFenN6ep5OWzuVMAYZnQzRZ&X-Amz-Signature=5edbb185a4fd443f5e061804be3603fa12a1401ef0b2042fd74227d693a15e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
