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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=cf5c1122d8988aa9cd382181896ec167418c734462b1c8df780f50bdb09263ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=bcb207a690f2742db156493f678c418b1683ef6e3cfc3289b8ff960477caa6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=07d1ef3aa224734092996bc46d6a537232f31f2b28cd57efcd22ea077b515b48&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=b13aeb2e49ed0f4969c62e57eae3b13fc8038ef04f0d365a84d26bfa6d107813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=7b213b4bc6889a8baf35af67c87a99c7fd71e336b3f7715eb4341947f29ae1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=8e31051b455fbdc2691345eaed48a46b37f92c1024a3f0415958492349b59b27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=d5b0a96c325d1e4badd278fae45998666df901fe2e1807c78975f8da9e4b1516&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONCKZNA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZjc2%2BxFg%2FYHFmeYMbzjgCnEGrCN2MgP8Wc5V8EQZvYAiALnI%2FWVTEWvHiuDXRH5LXHZ2yb9zR71Tv3ijT6qpwr4CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAn17fVViyeSkPGbPKtwDIx4wpfE79AggDetbyClPoaGx3EJ6oVY3qAYYpFlh38xqpxM%2FMYcXM%2Fu8mQkIkVX7hW0a%2BsLUZlCVER06Bb5NC%2BQb2Ab1EPY4S7fVTO%2FRAuzaLjceGIW53z6vEvvOVxxlBAIXhTE20awwF9oDu0R15Mhx4WKE1LVtzgv86GeMFeSnxKgBUTviVGmgyNME%2FDbSJ7copGLtXTDIeXoT4Swuz%2FXmxiFb8BVReKzTzcBb%2FVTAGlarSyNeWBtVO4SxJExOGsaK9BvRbOPNx1huNkXi9JZYlc3hUqFarCd0eHea9t2ZeQAOuzWR%2FhYw8fpOez4TqKcPFAO6lk5Gq8ufQBbmYLDBH4M8d15%2FWwpdH2MTKgWaIpvXEYX0B1f7StyZ%2Fe7cC3C7dzAvK7VOWO91qjRdxq4xGdQtmMUTWwrOqDHyxhcZwBmJOLlYSopYD2CYVGOKAfTf9nQqmAAgOdQfK74DPTkX6QvSkGEKs5%2FXY1CDNFMF16ahGJuLDrwXw0bKjqR835%2FmXAUKrWOexzH%2B0AMf6vD5CxaR7n981fdeZztFf%2FAGrsXS2cTlDRei81KslpNNgV%2FO0X6jMtAUFb1ODhPZRo0sxFHOoYBDRJ7eKPceO9bhQbhJqXptoITrtUEwyYf4wAY6pgGw5rjqb8qg0BtOuOGMk4QIfBOhuXgmQOUlYa%2BBQ0Pg5l7I%2BjGR3jCecfWGMR%2FWkHa5XxAnA9I4ruEQIqUZqmmk1MJ82heknzpmzrbIs851%2BfUkyMHuZvzzCdvpaTxN%2BYDVoECLfNuJWjQNyNHgS4OPn9tniBijGdFN4upcVV3RZAKTkVc9L3tvCgeFSm7PB2UhzC0CE6h%2FlMY8bCjH%2FDeSMDpKjFPW&X-Amz-Signature=6df0b7f97e936ec1256e295acfb705f67f450460d316561477c5ca645dfc41d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
