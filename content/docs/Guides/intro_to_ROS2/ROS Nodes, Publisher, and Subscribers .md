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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=25372c7dbab631927a59ffa45d73d024c431bec6b3e7d59afa87dd9d8abbf7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=d2fda6ce0afea6bf412b2e24b9df5373af966704235820b5309907dd5eb8e775&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=911038c9ca752c22a9c0192e12befdb26c0e3718504f53e64ce3acaf3b3ca398&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=f030a4251248eb728dad031dd5b8e717843f01d3fa5b32c36b54d09af3ecc88f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=e1fa78813ae8324425194ea50517e9ad7d2264533f74f684167419787a7f9bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=edbb27fc307d1278b8b9aa1601947e9806f0f9e95ef31b143b390ab37dd06ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=98e6aac9057700f98115931328385c20db59bcadb07fb84c3d9babfda6c22806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTAHZF3W%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtW5TieN5LHJHAJiYdoQ9pDhEWcQilthar3HGTyDXBLAiEAmMvcI2Zt2HjN154%2FTVDeSz3IQezJ9ns5DpiM3zCWY%2FIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGUPTLB5h9t8VAKhsSrcA0rIJF8XZLWgxwyMpddj7cEoykEJ36jQZ%2FnbA9sSJ%2BI8XObYFvEhwGYnSArBStDoVV21sBGoVtfc%2FRrGJrNAR4U6HjagNqbrgdJAA%2BAcsJd5cAYBrh3WFiGBFn2ekSYAdMyCft3DkKS%2F4nzed8Vqg9IxsE1h5iudsG4yVnebjvxsftGx%2FbKS0o%2B9ejZ%2B5Bzocjl2KbOhPp%2BLMURmqhxAwLbQyEZUntl4uJPYeFJ%2BcFmkXan4JxjVMujsYnTBfsS%2Fb4NLtQlojvfrLvmcytG2KEe%2BgmAUALriQkHxuOT68OiXcZvn1Rtlig8nDoSWjcLucCeyGF6b3WKAbU9a8xOlVnv3R9Eig7pAMjezHwTzIoz5TPRKRDeQQyzr4USTEGjFguua27sEfAX9bQ131%2FV6Ue%2BMnOWLK6dcPYTI2bOPYs3yLvYoASkfMK6fFxd4TSItjA5aS27r7iodqdBObNr8CFtvmf2T%2Fe%2FWL5qKmI%2BENQ20g%2FiV1B%2Faa%2FfZDuF%2Bo9JJZVyQ707y5EuCMcP9UbpkTzyg8NXPAdhXTfs1HDNM%2F27ajZJyzMCkWzpg0KJ8puOodF3RQhAW4P6%2BbmPCcvE9OEh5%2BR5TUnt8dCZHWt9v5E0OxFfL7P25J3b58MXnMO6eyr8GOqUBx%2B9kg8Gee0gMU2d4HrjIXCUaIioj2B8AZ0QGTpo6diiSbWWiTvCPRF862NuCNPV4aec6TTmOtAbI99prf7HM91PiXFCxxxW34GFR%2Fg6LnvpAy3PY2U7PiDFFZe65LTP2D0%2B6C9lBctfliLcp9FRQ9GZ5GWsHEPG4mxbvxGXLv5neUSD9Qf9vF%2BmOQrnAxwiPyo5I2a%2Bu9BhREtCxRV3%2BFZ%2BOAlM5&X-Amz-Signature=cc0224f56092fdbe6a272c30b25a9e5f73af35d7893a5471ded33c58fa407d94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
