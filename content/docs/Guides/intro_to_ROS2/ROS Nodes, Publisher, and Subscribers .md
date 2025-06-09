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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=98a23822cc25bf87a389913de9836263c124f158db3d27cbb6ffb5402c2ff74e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=b6e2f91910b620c5c832a6177a7adc72f65ce604c7151d3f485eecd008a0f7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=48bd986c035e57a3f24f96fe785c702368e5740a5e28e71a80c7128ccdc538ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=9e155b5989785d048b444da92f03b2108250f8e61f51a9072ce90ec84be3fb70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=ae9492a365eb2aee32c5008fb7af6d6cf863651638aec92bdccd7dcaea0f3aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=1bd09e03652061f9091b158429feacaa7f44031d9a306097c71e466b32c94400&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=062509fc92d1db55c5ed729bc0ea763c83ef02c8fa75aebcfe6bd307d4be67e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4FAAYD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv8CNs1RuYq9saFgJSRiFl51Yxs1GnjgQ79%2FB7nsKpdAiB5GUmuyrIBmFTlzLJtM5jXTwIZ106Ruftv%2B19hPhSjjCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWeD5zo0GlbKLNJlSKtwDTVEs%2F24LVPU623akPjAE3oQVh6vIXGIBoy4tNXVS%2F3F5FDBz8b%2BReBzEYfMoSqc5AJ2BWF1WtbLsLqLuQ9rcFUaCa6Xi2BRTwg2JtYKwAgsHZESTacX81YE%2BB8nwjn3mdBdafT3ptiGdyLY%2FkD4IkYVmLIy%2BTp8bf461KOfRQkWEcHIN2ZQmnIURCTyagJTdo9y39WuU0Hv03KipwfOJIVUDtMDIpzT1X1dXAh8DdHDHOdo4%2BEnXXTkD%2BS0DcPhwXhDS09paxgOcMoMS%2BZpSJ0%2F7LYK4r1pHrNP8MtC%2FVsPV4sFcgOlKzrgdI%2BFgsRIWE4ISimhJHLbfAMR5zjyGKZP9hNKLb%2FeuImn8q%2BaXCMNwBaCUpdiEGmie30EFCA9QT%2Fn3zoi3sM9hTfwf4IpzV1dAZ4T78f3aPgpx7qBVG4ABsRjVt9CkRPXjpbdhT2xBJxKl6V78Dbjz5AO%2FjUoAxWktP1waql%2BUPrWEbG%2BfoVgZ%2Brf3oRuiVmOxHZi78Y3KKcfEw1l%2FLzOiVa%2FGD3tdNr10XQUr4ZktreEoTryf8%2FTDnH5Bh8vZf0UMNmATpzadRrXy%2FyOVVPIC4VRj%2Br4MdmsMKhHpecGrwDsJrSWGPcllLl2uAU%2Fd%2BzQ6WKwwsdabwgY6pgEdfF0vKZHxlmyHgLBLIgjdIV1SL7JY8GtSyMC1we0ZQ651wyMlaZMRb%2BsRTpWQmFOGLlGNUavGmbIeJwEsjY9iMgeYX%2BeMoSrNP%2BPiYZX3itNV%2BKN05SJ3%2BkgqVA6Q29NOF9UZ0hF7e%2Br8fR5sjOuvZ6653JfTKcK1Ecja3oKbAr5nFaQ5fznHT%2FLhdRJvLaiUp3nChrzOEY5PWBK78DHvNgq1zgvA&X-Amz-Signature=287eaf8c85c004b9865f4d65007c4da5c92fefc74f31e645e14ef883b624d858&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
