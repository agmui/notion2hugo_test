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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=e02b088100181c922c3065f235af283843e0dfdd27960b1bc41c89a37cbf0284&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=f93df75a04cf30b4ddf06eee8c997099fc9a5b9c4043eeaa9518f91c3fc85f50&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=9dfa2fa7c19cacce4f6ea6c0632c28798acf5f5dc4c976ffa2b19f070c069067&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=207cb0100db1ba57b25f51e0b222ce75cd0f1dc2d9eca63821d26752c0bfa770&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=e454497c2e4dbbf2c7c09c5b1430ae31cf2704b8da1e11067b3c6d96ccb84a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=d68bf426d65757b44e4c5deff95f1d6feb6ea7ef2f903b2aa657952c4faa29ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=1e343227cc03c62a08b29e154398aa1a0b8c9c662327e6690f328063096ef1b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FNRWVVR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDnHSgEqGpByG7QyO0Q%2BrY4eQn8jTAa7YSenNgpjbvshwIgSyjuG9Dh6DMhvlVEWBxDRQygw0TZ1ot%2Bnn%2BmQjRAphUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqwbpVK1gUe20EZeSrcA5Smxdxm5zGn2SPzloplY51fSPNBAy21TfW1w8AyAKuWU0NPfNBFul5SSX9d2cqpuPBWYwj2ARU5ASEA7v36XVLAEuyGZGXpaZ5QjeAFWbJBFZblzq7Gykw4ya6rG8WPP34VL2RFhTbuNqytf61AgwmmWUUJRjOXTh4JDdkSO8jvSGUaeu3woUTIP4Na4ahAmCPoA4uicbdtlGMMxp9cbWnTmTxJhJqutUf%2FYvYk1JJTFc9931mApnbsH9ZQXn1PiT0RP4idgf9gUSR4iSfYkD4XaZ%2FsiIXGqEJm0SCnwgXoZS6MxwWeznNNT9YG2CHlT95e97gId1p7QgCzB1InRhhonnhrjlos8P%2FAO38Ubpl8ktd12y3qbwcIlU6AmwawpkY9kSixsUt4EQmrQB7X01j4XPECGMhCZW6IrILpf5PlQR65YHJhK4zPK%2BgHFgEuA%2BbW1WbxmOeWEIwyJtAsg%2BXE12ck0WJsinOb%2F4qWcXNcZsSWbgbp%2BHx6QfYA61JoA8g%2F47hg7j%2FI0tN%2BC68zo6pe%2Fx2on1jTS51ibrP6cKKJO%2B%2BmmpuQiM40AFWs2de8Ok12CIdPBycppNLt88B9OKFE8i77aKq%2BUk5sw8s9V0iPmq7Hde6o7XRQj0zqMJuM0L0GOqUBN1Wpv%2BcwRqgDRLElGMHxckJZlSzRF8PEOOWAMsOPQNj5e0FaDgfj1tCLZvkG4xBdXeVZ%2Bnsu%2BGkUxo%2BSgzqLtb4FSl4TMTUgu5BiFyWXkI5UPy4McYbMo%2FdImug1LdGuL4f9Pc0Ck%2F2sIPfYgnGCtqpdLwLkjLNiodQC1WvEEuCXfpKoYNcp3DvBH8EIbSxtejLmwPSI7pYAEkeV8Xb8UghKP9Wy&X-Amz-Signature=2e0f40bb34dd230828b84e7f56530c0af42296700a4e3906852af66da13cde1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
