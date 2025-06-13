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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=c843f3f1bafad3137049d01bc6c7ac7ebc91d456a25b45b709ebc390e3be79d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=3d3140a96c4716c54791b0791de6408792b64e9618c0e601111eefa25095fc95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=5864a8536d44b8a38a9fa36a36f8e86e4a1757813ebc91c842911dd42d98d1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=2bbcf1f5aff4d0e4e7c1d8335b232b4e84b8b7a35dfa0479f3a4dfca11bacda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=052bfde15de0c95beb7f7d0ede2c1d0405e1a8304dc395510bac3b4f3b5e08d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=3395fd01d739b264231a714863d67440f5423134c2d5d7ef12e301b4f3f51a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=67c607f889c95e5b97dfe3c8ae56bae112b0de76bd62baec417fdcd8f164eb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVC3HOND%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDYQSwj0EDNUqz2VeuNVVskfheeM5mD6yeeNzJl3HLEsAiEA6m8UL321ykWZkVyEEinZqqstA%2F2ZPYXObW3hu9UYYZwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHJb%2FynB2BB8SSXuVSrcA6ES413lWPL4IPaNwH%2FR4LkJjr%2BIiHKvCtDMsyyr4%2FDrgDjwkZgN%2FjEfhRFNhaMDOpd5RaYtnEJbOoG9eTsjYcUYSuFeZ9zJBafDqTU%2B8ZFojZIA45DxHkUjGEkEEKJIZtjXPlmKWljpxoWOhTDMcgqQV%2FFIif7rRweHgrg7AxaSdKdXR71ACXsD698igXH36Plj5%2B2ijQQ6u%2BA7k2Qycc3%2Byu%2BSKNhWdUW51bHWImNyYpmkl8PsvQ3y5Dvs8NfWvHIDu6SKNrJMVRfXp5h%2BJ3BYBW%2BmOhq27zk254gcJBweCeOjorMUuASSqkDPlA9hbNZ3oq3O%2BG4UweYGG9yrUWIpzv7M3qghukCnP0P%2Bhr7iziA0s8rppReEl7dDt72IMOyscFGwjF%2BiKPjeAa3GSD6VdTBCsfb09deTTWuhvW7zJibXiiOuNEqD3FdWGMk9tY4h1%2FCv1GnE%2BX9OaJXHkaEueNcgHrcFGnppDe9B3kNDZIfBOREeliDXTGZSNmTOYJrCGS5zo3wLL%2FTizksYAMb3UMTN16AQg3UJqYToMQg4hVeBFknlGcsoqU0j7JTdkGtXRxLjnlJVffnUUZ5J9dIIlhMerJCwjnm%2Bd3kWh3l%2FenAuF99vwN5Q8BQZMOTXr8IGOqUBLYSsD9VNJ9BhB048rGdcoZHIXC05IXZut9%2FLKOQLoFER%2FWQQrAYccUPfD2KzR6U%2BYyitqY%2FRyox303SwXczdImPwTEBK%2FXBHIiTaYfAyCAMRSoLBJxCSOXdWwJwQnuOb52PtQdRWwl1jNtpZD0Tbu%2FXJnRe%2BdhzLK7ljd%2B7XlQ5UUlYAq42JtUxP8xhONzAUKylN1TEBeuO%2FVq%2Fyohl6jFSfEgEN&X-Amz-Signature=32e4437c1326acdc50fc03dbf98f5a14991b0e0df952d5e2c040e02823e66fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
