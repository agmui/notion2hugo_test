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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=30c381742eaf94ef3c2a570fe1c387834272d1964934bfd2ca16b2c45fa90c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=ba9602f7dd1b171b5eacbcf17b0cb0c2ce764bf099d68563e2e74f9cbfe71742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=5b5a5254a3fe720627c50bdd3a646118735d1d550a1623d7f6ac6efa76d4280c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=0c1cca64dc8e2604e85ef2328838264d4789af51cdbef1c7227c27474a0a0eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=6d4b778f057f465ba15b5bfcdfc371b01bde2979d3a1943f09dcf80a3aae228c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=3154f73921fbe106f5f5afd666b0ab7bfd68d6ceda8839e4939fba48ce10264a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=d6f89dbb46fb9d40df5fd56a78d775b03f4268314c0d7ab4d2a2024d5050611b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVUSPNV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC4bcLJxqZbWjhbj2KU7CjU%2FGeo%2BE0RFnKHskzk4yTB2gIhAMH%2F7I6j8fIbljeCkmr%2BdNZYyMYHZpGPDVx6JJkcjIsfKv8DCBUQABoMNjM3NDIzMTgzODA1IgydA%2BpICjwckIVUDSoq3APKJTmCHz9GT%2FLS%2B%2Ba2CDPDCMHzdCzyeZrRzGVVaQ134xPg%2FKmwPVnYxgCFnW635vQKITH4YP1ufOPxVG0DO3vnIZrsLy3rytFekLMLA9UMYv97IEl4RgWr9wzAxnyGs2X%2F%2B5QkUQCmNUGAuuxaGexaRna9qgxF7oWI9HfdfDoZduenAr7o8VtBLigg%2BGfV4DZhYpd6GN3EnuK8vPS6bdiTa5mGFb6rSVMnRjawu%2BYkD8FP2oYmbOiE3B%2FdZDH%2BHyF6tRUPoPOuZkBebJz9xWCYJ65Lo5tZFZvnZEPr9BzFturwcSJyk0o%2BvpgF3%2BEoTuhsVAlhV2ixawPwvzEDSxPgiV4svG0neFYVdBqZ2txcTycNUoDh5VPvcM0jlOhBYeViGSRGIU6%2FJwulYWKQhLyJ3eAsskiq6i%2BKlZFlzw73%2B3upme8kEkB3BEUUkOlVdMWFTzDHWIt304q9HbHAFi8%2FNRexlAs8%2F%2B2oZRZNybXCOdgDWSdysL6xPhTUDYVOsEJVZKgT1uiKGL%2B26xctR8%2FhBH78CclwtRQ6UaoxQ76lTZA8Iyo%2BB5u6C0vygpQaJSNtOVxuIj%2FpEIS5zn3Vb92ocEomDy14cTEMuFxhKg8%2FA0ha%2FcYQRAiQm9gPKjDmqbDCBjqkAWbIX%2B1Epf%2BcZ9qRMQmiYIcSgjE%2Be9Ab9J1aLzKxTEljOvnO2hgULWGXeqIjkm1N%2B51sc%2F%2BoCaBOIqU9JOi4RdEaN2VeolWEpe67ckBCpNKFAQ9MMPIoh6YTTnG8vPROfiu0zu5TOp2Ka1kmWPCcs5AnTR%2B8qbdAn%2B7POkRCJzKSxJOtpOOqaHmXDF6pyq45mcDFQ8kAeGzUexYtAFkgpVLHn42J&X-Amz-Signature=fab83d23d1ef7d8d4bf23c58de09b7f64dfad518d4a539f405d9b4509849899f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
