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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=24a8204ccfcca2b60eb12317219fcc5fa2aeeac71fc3039b8ae2034bf0cdb398&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=908d7ede42263c526b778c268b221fb631be1bbed958c10571bd0f4edaca8587&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=6d3678272687be901817b495659ee32026b9ea64dbf2bfe2d882bbddf9b9e16a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=87e901a70cb83f19b52cb5dd9d748f38603e880ded7adc2271cfbfdc2c377f26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=6988420795dacdf0869f8032deedf8ab40f72a831f8ee366ef02b3065c4b63fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=9e6b8d9881d68c9eb88abbe5db0b8303b5cc34a51bdc987ebb9fde767e5874c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=506b406c78d774aab70f2ee25ea17a85026a8703ecd95183ab7ef86b20b55f51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWHLGYF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCFQthzmRER7Vca%2FBI149wNhRWdQiN%2Bur5YkeTTR26qiAIgYdCvfvZzc0GQ7ySLFj0LDSd2OvGXnREdwXhVwRjsDJQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8OPopg2zyNHjQB7SrcA5Hw1%2B1chU9bS949E4YtOMgjOw3i7d4MmJG6pF2nZ5wrVNcjrB3Qpf9z6tAz8u4Y3%2BWT1qLUiEnkjIxZH%2BHHyX08Rgvr056WLQCyPKMz7DnxXNWy0hESdIauJfiHp9H75CaPT9A8igYDAaB2WpYzifczhuWiHwQjcmn448XjSB6QPlEJ4e2Rfhd%2FN5%2BcY2pECR8i9gbbq%2FVHWNLquG2%2Fkqa9upnYzzaH0hOeS2Wek1ReXIcYNzc89qIdUXO%2FJsAbcwcdwrJLqQkBFBZyob%2BUDt7sj4Tku7aZTYgrYJW0kV1YAPYbFEcbMuG53twLOBrYLrpwzR15A4czzM4tclzC86ofcruwcblfo4ptIzRQp7xiPh6xUyfuKOTTfe%2BXjfqCrP6LrxYSIQwHc9OV9ozpTGP4zI5WAc8JppEOI02yUsFkONZjQsbrW06gVHnb1mwnd0iHkYFtz5J5FtZv61097WoJgoF44wOflVDvmZ6ellU7%2BiGAyff4Wo2bulw0Xnm%2FVfG7dLjio0qxwJnytCQBt47gPhiFhTXmmiRKPxD2oMWjXI3thXXybdGF%2FEjPwX55r1bQsRKesOdbknpPry%2B4n6Pr3nySozsq24HoTE4cezyb0KMNqHOUbV%2B78EFYMLi8p78GOqUBq%2FRtJ4npdHK9CKO9xI1gWl2C%2B6AEupy9NNirF015SCLkFikaFd6kveoqDtYp3qYXskWQWl2ok1miCcQfCuXNtjz7qVZdeCpHRb63rXVA%2BNleyuelbWSjRRPKMHg%2FgxylBgm85IASwtXJbOiWx606PQJr%2FKT9b8oyaAO00cDbjVb6a%2FXzeInOoS7uQtY%2F0af8AnNdjnBNEwdmWfR3XTkCqSd%2B0xZA&X-Amz-Signature=2b4836cda22bf0273d0368e0c5e401cf2cd6f41044460c589bf6a36237f82a29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
