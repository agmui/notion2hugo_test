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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=0d983f06d702ff91828fc3db04fbd050e275d2ad3fcf07ad303558dd2379ea5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=e1a44db6247c524d3a6498a0b1c8a03bf5e5a3ea3212f2489e62014d4069445d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=790bb3e78f6fa342e6156a0cf947c6bf0f3d8de62ccc4f4f0dc4093dfc34b0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=3cb78579e5b48a3811a2f0e523ce48289e9e6373eead3754ffe9883cced0ca01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=f6abd01e974b173554e75347278527ca82819b28c53061e7d62fc4b30d4dcfe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=963957ecf621950ef1ca9f17b5bcb5add6e0b33faef262a9be591a6e58826295&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=524538a3a7f9dd9115c88e477c89cfb5ba16ac15fa6700a7b17ebc6c2891f783&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDND4XDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcpzXwiS7tiQaVuWFhmmu4rt5SQYtkIZ4VXXHPPpsC5AiEAocVPWitUwu0%2FJ472bM5VeRdr03I9xHtmVfwSvIt%2BexUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd6D29YKbfNz51Q7yrcA3HdXgK4DFEvrVc53SGXdlfVaK8jvbEw9SRoU3mybd5w3hjXneStL1Di9yR7dkUTlssp7QGE3pL7x49oOV8JJcjxQljpDrATdy%2Ft2Zi9uXFBJOWDMQOqBIESCqCZ7uMhuFjDCzpLBH5aEwXCmpgKeKnW1f9UE3iZJo1ExfUHg8md0kgs%2Bsh6C0n4euNHCi6krmLxi88BlVo28RrKn%2Bt89NjidG%2BpKl6FeKrC%2B8mXjsVO9UMbFZVy4Q%2Bk%2BCSAAN0v5PI6yaoa4hnLCwq%2FZxWhFe9oU5Sv1UZ3WVQvPLYR7YT4ENQU%2F5S6P3LZPU0eISHwZEYwrqr32JkpRb1P7%2BwUjMGWV93VhNII6sJNPGPQVtVEFZfj6t4yu1%2BK0ztRqvNwWCyVYf6Li2YfL5dSX2JzTno4CKZUepjZ8vajPJi9xlIBKL6ymZDGSBOtxN%2Bb%2Ft9EK4fN9Tocr3I60%2F5v2vlW%2FAMg3Otp1eO5Cx8uLsOT7aHM0Fx94oX%2BGiwc4Vw%2FzHy3W2mUg8dM2u2e8M6Ip7kkerj6k1k8pGbCN6JVhHucV7YB4EuAmGCeW0gzpXd7ZtKczlzzm1I%2FPbsnmrN4iLqst9khoCLUYQ74PI2zVMFzHOgCC8nIqAnqG0b1T4YPMPWhqr8GOqUBhwcEq%2BIBC7mhDArwm%2B2uWf%2B41tMX19ta9w%2B8EbiuUk%2BJbZI3Zm8L0qrWNjplGfJK%2Fn4mY%2FgRxWv5mMV22OmqZImO2IBD%2BoKqhwSe3O%2FOD7TD3EZw4OWvoZnyUSQNVeGvzOdSMhx5ICZbNFOVtEKABBN8eiQJLhR8ixDLejM058%2FO4LC6vEegV%2BO%2F9O%2Fr7sT3YTiikWVBA0E%2BDrrdPZY8lkCsAEqO&X-Amz-Signature=2e07e886dbaf1eeed129cad306f7354353821465d7c509e7ce79d4b34fb3c777&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
