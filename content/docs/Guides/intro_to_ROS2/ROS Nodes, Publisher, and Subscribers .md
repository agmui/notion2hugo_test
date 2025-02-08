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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=e6488e2066edb08ee8d24e7fa30d1e7a52fc9142c69ffa4f7bdb199b6e78cc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=cd785e1d9530bc310d14637e201968d5f6cde432b845ae9afa12b900498bad04&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=66cc12a05fbca8314eb71db6855a6693788f397966e2b7b1d8fabf85867c8f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=59d601898486db9e68b3cd029a8bab1830c262feefccfd8b6feaf98fe8b0ea8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=5b0b141e6fba39b43ab69e5c440d199c4e2f6835f6ea76b3d9fb003de346240b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=f34ab75490581ca95001f7e0a451c423fd31f716db747eff550fe59665d155ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=9d50f7f6b9b95686ce07591cf6025a9ce4c80082c8343fb546ef788321e6e87a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OTGDYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAFNp4y7rEueIBJpAhWmvcsL7Jos3jjYfUAmC1JHGf8bAiEAkE7QSeKKee9F3dGMgBBCjldQzu43%2B04c9ABbQDfQKmUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXGw36xWZMNjcYxzircA7Kmj2Y05VBRhR4eTyaAqT5pCJonF5Qq%2BqgMEOepw85iJXlqDFQLgQL8trYOkNyTSdQfHlMewfvADv77una%2FATBfNzjPQ%2FFw2dppxSntUkPUSNPQzrBkcg4nWKdA7SU2jOzLZuizbm8kwAj%2FCDkv6y9pCPfq6%2FejJLSpz238XLSzNfndIu5LeR7SUp1JviUOgZtCb11aPDj2IItySED9FgtF0bs5M6y6%2FnmHJb7ISXbv8UKQ%2B68Z1MP8K6t4qbYF0q9fqjzKBhUovM1UH6r72gzFihjKCl0SmxGRTadM7K8Au5QJ%2BhP16nucIWeUA23RHZ7B2Vv4LCzjWtK7q26GYg2zZ2YGo4q4n31%2B%2BceMBRqmrgPzCZjJ0MHSlFEVSiT9%2FtNRTGHVDOZTL9ihm2eNCByTggmOg5%2FV1QQ9axPGJBV7Iyxwo2Qwc%2BTJoZRylmZ2OEA2GbX47qTivED4Qa88TpjmT8OZdHTbSYgVdJ2l9rflpb2plg2QHC%2Fgt7Q%2FFecGY2umymdLnC4cp%2Fy4DJ9XttIbVqVTPEVF3MXZrrCTiVgTiFsKbDWq1CFAG4Y0ZNMy3y3szY7WXtvBnG7t%2BlPuGTdMZdcyfWC8fhyjrf3dzWlCQw03FDN%2B39X688gxMMKYn70GOqUB743ua76RK5GQnQFIdrtQayofqVoce%2FZHFBcHMGpBb4AX55%2BHRDZchSpDjF9vmc%2BPzyMCEglSdjIrBV6V407w5w7GbxBPm%2B1FhyFB5EXwh9J61IugBJ5fv3AhYlmxHkb6d1my6UkPydQ4KMk2ee9Ofr%2FXLGg50mX6uesBB3t%2FdOp3RTcspV%2F7G9iiQMs7kXE%2FtYC9u308xNiOSr3EM%2FS90c97zHaR&X-Amz-Signature=56138195dc0dfd366db6ed4a5f169fc41e488344e35d85b71dd8f8367c8cfe02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
