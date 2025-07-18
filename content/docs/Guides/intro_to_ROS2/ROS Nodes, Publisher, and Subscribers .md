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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=8651caf115ce2aaedd299cf39b8578f7ad652d08ca331429c0f8fae569b2bd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=5734b472e2a9d6fd3e353511a0efea2e99630d441be486e84333b588f7dbab20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=940366e128bd5a7741d64ac75e04e514313915a51e90b5163cc7eff4067a61dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=60a33eb02219fcd6a93bfad0644d336d50260608a76900ee8b24129a07bb2ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=8330f428b1c79d697d495c7e2bcd3198c50a86c800bded062e11f5aff43d43b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=5eff61d23f53c375ab37429b7875c9dbc9519f0c2f60bc50830a6790772ccf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=1b77bb99bd20040a1ea8b9aea7e92a3a3c0e348c471982f5be0e1863a7bbf147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY2ARHZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDfuzi6j3WmYXgjeP9mMw00vjUg7ZHs8vBAb5T5sTmHvwIgHAwCRb3XXvhUJPU8R9H9edSdGoKJQA4ERotIViqEq8MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhV659j5eJ7j%2FLbPircA4Bs9lKHv6TvccJbZ%2B0gbcKgVjyI69kgoEHVKf2vK%2FfLMfM7Vyex6R6DONCBQ7%2BYl1xHEDVo6RbuKAos8jaQuqSueWe%2FuLYkfeKzZWGe3MWfsPybQ107p4U0Vd4%2BWAVmOHGQ%2Fqp5dWCwCvaYzfK3Q2x5DFcKpdZWKIcmEZl1A3DiFdJryyC2mEj9BJU5y32ilITLttgrbbYGZkU6Ab4n0o5kWzw0gKEwJA%2FUQy6qfutFjzhWSfPENoV%2FR5Zn9pVqCbJuYTh8rDFxWCOI9eNZilVMUPFP4gUqmvIBq2VpbGmQ2kXBkgFBTV7TFzIZRs3v71Kuk%2FtiFysTkH1zvZthvV49xpnIpTQOOFji2O55282oOY615HzpOmYNcl3wr8CHK8pdxXCx5aX9uAG2ZeOkRXkQgVh2OoewToFI03fHXA6SYOctCOo6oaiQRachAC4SKv6rxQ8xcqiA7TygI6c6Vn6AJX%2BDbNeCLHZmqoiEfTCzkjAUDNbb7K%2Bpxp%2FeoRZn4QHxJm1HZ4uj%2BEa7JwEPnmVH7CimMA2aVO%2FQUcw01CdyA9WgIE1P0j9MQVObipbb1QrMjeWerY9FJsZy2jL45huuLOY93tXX6Ngww3r6yRq0tKjPqrVXwzvhNMTqMNnq6cMGOqUB51sSySGrR9nyimQFNDuJiCi90t3lN2tJ3hd39RD74%2B1e6tw0arLkCX135yEB1G72StH9jyCr2XAgwoWa17gEcMAhURbD0g%2BWFsACTfJ8ZAKRVi%2BBjSeCLOnta2tW5NRNG7z20AC8JzV885oFeDkIiqZ6zR7XbS62fvYQioZAQxox39NEXrmhheH%2BwBZSSv2lD0BGU6Rai%2FnLTL5HKxqlE6XYTQa9&X-Amz-Signature=e4c7bb990fbdab9157d99fa2910472012103355b6862cee8fdce7e919eb93310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
