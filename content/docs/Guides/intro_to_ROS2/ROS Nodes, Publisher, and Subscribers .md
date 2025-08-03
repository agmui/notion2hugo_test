---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=5bc2e60dd68d92f4e87d6313bca0d53931eb69faa885cedd35089382e3537ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=1e73a9e9a43764cb39940e7c097e2b59805581a5949e41340f55ff8821df8a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=20dad49e03cf706936c889153e3e65c3edf102b84ac70de7ee9e970af7073552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=3480f20458e96e7dfa374060fb98a1c2ff3718871bb2497cf908bbde56a32280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=94a0671a142787fe95dd25911879181ae5bb04c28fd9ef03aa5fd26a8897fdcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=3cc29c7269cd763a6f1664921f2996c5b7382d44ff885aaa20f4d30bebddaf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=78f7198bc3db4c3a9fbac9904499ceca1cbadc29688b80f0e39d5c1a13a771bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXBTN6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3fSXJrETJsBV7j%2BecEWV2PdTimkY8bqrD4x6Mco9ZHAiEAhiz4ZG9yybgkhu70W%2FhUOdUVPuxyhLpkcfwVFpRKnIEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGd%2B8dCnOouWclQA%2FSrcA7XEC8dRCp1IkI4ZP%2BPkHBthl8AZqJvX2Ald5%2FwkxDVZG9kk6ZYR8nw9HJPZYtNN%2FyEbgYzeTDiOCpnq%2FzqIyb8AsB%2F86Sx42RXtUHYnx7fQPqQZRbOiwpcTzhkRKOeDHbcXDFaofF9y4UHfUOa37HxLlityEXzK5bRBHS%2FlK3oH8G93Z4ZMW0lZVcPI1Do4pcRD9CL3%2F9gsJspB2MWwCP4zIYeM%2FfjI7fvHJph65aHIdTm1XArux9tRRB0xLwcjffKepwJ3h0u2HctVu7qKtBRhVJygOA7MUpLXfZIFYcMJUiMarHRPT3FqDZmdELdkeQR9uYjoq986CYIHBHFZYekgMN3OIpmPMevQgj%2FnJpIHiVtWweMSPSROk9XnkBFqBEotJeqGOHeVf9UdaSbIFddynHtbgAa3lpf3J2xC1N7LKN1o3BSc2ObFs3Zl3WBlHY%2BpiETkEmXYewfqXwx3Sk7y%2Fhe9enLZlmGeG3pJcGaoYTm9Cyh3dXzPT9FosVqyOCM23Nx%2B12XB627SYoEeEV8hMgSc%2F7YBXrlfbcIiNzk8pjsu3P%2FVwwhRRkePCrx1SWyDyEvoh25kE1EPKtqx5wCR7tSbXKbHVYnDjHm8vP7VPGd4DkqC2T3ipnCpMJ2mu8QGOqUBrpOgnCXa9AbDxIjNS9wOUOMq34OuKCkntqFTxAymF42h%2F5siJO3%2Fy%2FP2KKPeavUWwl4c4AduZgSCV7ncNhqXCU4bcPebNiN8xrYyUfByH4xBKLMovxMlJisyD8lh0QkRjNaE2h7Syqlukv2x1riGW5iKiV6u0SjFYL%2BdMKGCb0YRmMjAVh0YOJHamcir7M94ObIfdauDvNqC0LAHG3AWa5rZ7u24&X-Amz-Signature=2abd0d84c20832e1cfbc0aef2ceb92e29fac35f375707338a3251bc3399b0777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
