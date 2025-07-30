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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=bddab2a901e24efa1ffc280938cc740d60dfad17dc257666230c76535e5c03fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=70f0fc74ac324002579485ce6eb82d962536032a3ed16f5302fe75c71574e74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=6029cd55db68286aa2e173a2f15a79b4638b5fd69c69e6c6fcfa86c2f513739d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=a7a153b72d7ad1d54b3fbf0b4d272481fbcac66cbb5f8e1131a9c638e2323947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=f3ca72f82a6ba7dd847c6ed02034dd263e3191603e790fd08a8e19018fcff3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=74fa8c251db381e72cbd6fd83f824c5b4478679b7dcb6cc33fae5d692381842d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=50fdfcdbda58f3d333cb73c7a2834a6bfec05f9cb17ad822c72e9232bb61b90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FLC6GW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP6t9tJ%2Bsp2ntOmNiamOFmn6gCs3eRxLEtOT9UUnlpMQIhAO0VRHdP2P301a%2B2DpKEI6cDgn%2Fu8xccsET8jXRH6TW%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1m0TIL%2FBkWepU7kq3AMnPRmZnyfElyb0Xou5FvI2nDGwmj943H0sTu8ZAmB6T4y7Q57XRZYUCK%2BhNHGYnfzS9sPCONl9Mt4d3NiicQbjTMgimzzmKbpM4ZVg5pOmrUhKvo4ZtAl1SQZPzzoBcX582oJBdPd0%2FKHDcjKe8mBEediTkEZT0OU9WUQVkPuFx6Dw9m49DCtls%2BAygQw7k1pOKBTzyLW8NefWEFDPgrnQd124kDgDdP0070CbeqOPKIu6FvdHkWC9SDz4fWOEy5w1VLCyiOojyj3nlaXFVSYQNu6KLAB8S4Nv1j5ZuvARMBDAGpFbOonW7BMXXYEoY%2BHaOoCrs6ahfQAZTVJnjixTqpWOCD4CkFS8bNnh6m7RUbd3O274OJLOy2dY%2Bp9Ya%2FUUYfSAtXgP%2BtORdDi9p%2F5uoKhnws18DFzle%2FwOZmPcvKZsuvQL3FI2ufP3i79SdgEd3gAu2a8THCb%2FOJjEdo9UVNXA9Kyvb0AnzeEZV90qMlCZW%2F8fwlQlg7T6DyZmKGG%2FtEdR%2Bc2TWWaGSy8gs703f66jGgAJHpW4fFsM6mhx%2BUx3AJrwgdAqAAKQ6YEFUGCegL1wvQSs0P%2FtgZZDFR8KYs7KrD7Gyp0M2%2BxhDthheE3%2FKCU0Z%2FS7D%2BXiHjCFo6jEBjqkAb6V5pzYCWcfSRMOhD3UNx3JalMKdm8UJ4xWzyLr97dNWPsEy4YbjXlh9qM0acYDIhr8qkPMiQYdOS7vTbRjS7NYL%2FzbWWtBS%2Fnh%2BxpFe%2BK3hwgpM7iCrsOcP5hUYOFf5TN5A45LiTBEINemC525yIFnTRPlmPLWyWN5CzaswfaGFpHost5Z3wbRFOewna6hxFvjmTZ3zcuqa7ZjYyGzbEJ3AwOm&X-Amz-Signature=09d7855d111877ac7ba55cb001ccbef541ceeb5506e5b8fa388eb1014ab2cd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
