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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=9756ed3f3b2d7f1939d62e8f18848dc420d0b7bced5932e19413d93dacd708a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=951e7aa3d7c97c76fc053ff79a19af16bffef899a9da07a7839f9f2727e56f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=e9633195d004d2181a37e719a93456278a6e89f93c9a803749213fb768d3d7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=46fbda50dd95e8b1ce2b9eda0104a3cb8d72fbd3a072772c225b40f95d59daf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=80d2e1a511c08ed7a311c96f14b8da9f235e50703bf867f219e8ab1791eec7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=c7d85ca648c3e3eafb81cb501861f304cd1abf44efd3fc66a8942786e244da45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=30942bf82a6621b0cffc69a3dcecc8a86422ef918873b0070ca8a0bfb12950a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWRGQOE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSj8%2BMJQpDJK8qwgd1zeLuBQjFR%2FiaVXrxFEpIruvKmAiBT8CafJcWUdtLut4me4M00MbW5teLoMmir52Be4yJA9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnu%2Fs6zlzTeVIdn2xKtwDjTuxV83o4Qb05q6RvAw1gHVtmb5kakggauVv3NSBjsXShJNoeAaJESImX1sZdZ8pDlt1U3CEqKfeJzOVXQXoeyFtzugZUDwpsRrKbKAZH9ORdkDDKQqZ7qgxjMX3%2F16zBpN2nmZ71aRyZ2X17HTWS3Vcq3IQ%2FYgbNXkboeTJ1DrrFH23XHR2JhnoQF77RmbjeofO3TWYlKVVXr3AAuiV1oN1RIy4w6isDQuGDCPnVHz7l1KHMd82xMRHY5RVNZ2x44BYm51RCJuB4zM8MNpoPfqnCT0j3jGbcXGNe0hi2b16E3obaBgW9A60PlQWF3qjGbmHn6vRnPmlu5TXEWqa8pSWWZleeNc4VrApveh6ZMkTCGHzZHZMIFv7xkUNb6T%2FAUkjM5tcWykJi2MysB8fFOkSa%2B8gj%2FDJgzXHdfJS%2F%2F2s82HhOhp%2BSXW6dxoQFdMu%2FOGIWJ7Mk%2Fm28v7CiBfABdwncoO3slaAPaeC24Z0hXsxcYt5Z3HRAVq0soVd7LxGGRJP0iXOihSEX%2Fm7Ig3cTwtNDvbobTj1YnblbZdR5THiE8NV8YksZvPXtaSzWTtetTYVaETDHLvY5TfQYiFgC6GPHVA5IOhWI%2BQuYoTR6AQi9O4PyL3UBJsKAW4wupPMwgY6pgGPd1hJ%2Bu%2FIPGTLqc6bYRMOIdDf3POuK1veTRgPw%2BhAe%2BLdll1uGDvpm%2B7hrL%2BRCKFBOeFWY5tdijg3OrUjYVC77iO5TKLiRhYxFyHdW%2FdF5MWDoMfmR7eslvFA3qhrxZN4g%2BUG3V6BbGeQj2NObUMvML3BGLB5jFz9fsM7bCDRfTajdQeOPIbzGD%2BufkpUEm2Wvk6UJ5TIWemZK1dWrLxYwz6w4b8G&X-Amz-Signature=cae4cd1fb7b28e371d8b04f49056b39d78c33fb23ec1e0c9d7cb07e68141a076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
