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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=5ad78cef4152bf36fe13efea87a755c9b9010621f67b1bbf4191af9bd04c1f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=84088e4795c503f4e6a56b8e5f1063ae83b3ba9a4a2f856b7e3eccd38574ac95&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=b57c461b7760d33ca289396c0edd320f5e1241f0c147deebd5b9512f4e67f28a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=b93f617beb0f20420d3ef937c7f17551b0747feeb4d57704debce90c062d587a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=105912ea61a8d78979ce7334c70fe9753df8a601675404b0d896fbc9ecdaa8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=3f05670770034231d49158d4101a4b22e30a9779a1d503d54ffab76a6d92cb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=a27dc2e99707b55047a7114d8220d5c01e31218eb2106a0b014378ebdffe5e91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNEEOHVD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOACAFzixUwiKp4u4htiXGFPO81TGBNVYiuxrz%2FvSpsQIhALwwU%2BqoHjUzZXSOZTXhKRE8E%2Bcd8d1oD4jKjDPg1cDgKv8DCCAQABoMNjM3NDIzMTgzODA1IgzBsaez3mKHMdrUYIgq3AMfa1eiGLvOK05YAEi5Z7TvEwv5Z14ponrtU3qiu8Xs9%2Bop31F2RVOFLYgM7ogBVSH4dpMfv65jAX1A33n2glldDqze3AN2fatkCtTkTR1RF%2F%2BghW3C6jrGqVhePS4sQ%2Brk2gV%2BBYVET5Fvzc3QJNHLqW4BcWx3DSJpZXf5WfDJpE0YdcVDVqnBAP83gS4rCSY4Dxoa%2B1lfv3SrFabljyBSHdc6kW1JeRDpeEGbemXba9gNLUCB0RcC2fEoRo7G9CoXnhTYCV2Vpo0H40QNDXo36j0VXRhKYDULV8PotIeJs9C6clD54PoT3NdpuVFduVK8wIbAX53CO704SDk6rPh8eWCcvFRpJRcnh%2B3cOVMSlUA4K0lsz4%2FPrYabihNtSzUyIASfYQxNmC4aLxoCEaBkAfzCMRUVSqAYYKKAjwC5RMxy5Hit4L2cUwLhpehl%2FVHn4m2hPzkUrj5ad%2FkhRGe%2BaEBeYCivY0bvIQF0jRfZ%2FxlDcs94ExoNA19gaKv3Up7iP9sZZDsc5wGDr%2FAWR07EOU%2Bf6y7IG7tuUxVzAk452xa%2F1Mwx6xd0y8cGsNBtxgOFNzcrfHsw57WjFGwJzoKJucXTaMUpP2aENKwc1%2BNYXqfwSKgZcjvG66HZ7jCim%2Fa%2FBjqkAUNqFlClszrdNCWqvbVICSJkup3wli64pkSE5dCXr1YJG74jkNunOdaIkiL28djeKnFZXFzTJoDiPQ0lU1%2BK6pb03tqk03JSHmRrMtb7FQPvpilOgQyLrx6jxB7DZIpZ4Y5pmakz1nFrJ%2FkGYe%2F0sDVR4M2iM2TAx9SujTA8Kt7aV2ioNF844ocaICC9L9BeGnBoQHSG7%2BDK9Kh0O7KPbQOQfuWz&X-Amz-Signature=8f1e390a8dba9f0c70df9d477800e59007c2e41e72c019e49315472dc827a8da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
