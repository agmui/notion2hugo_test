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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=c542ed27b001a932e790817f09bf9f05112f65bac7df263f6c3b1b8061c228e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=f1b5fd5854c15a20bed4afbb316454ddb950fb58b22a14bd92c375fc8899eea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=cc9a1e70b42f07ea87fbc3ff3daf6faf406df26481c2246c06b65f3cae47b656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=b28b0d860ae4db861a47ab1bf93fbbb82ec404dfd0d15ec85dfe53a759cf6017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=36afd8b16da3300b58bd0541bb58aac825aa7c9612a78854ee40644bb98440e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=a17afa96062557f079ee462991e548019f3ffca199b19d2452d13746ef9bec5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=6765c4ff257fef57727d9e218dcc6a5631e4639064b12a5e26046a2cab0823f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX6SLFQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBNCg%2FAuK3jbEqy%2BDpoO8aGrQkB41fLl%2FGDu6LgSx2PwAiBdKbNJa4YsDZtXb1UdBHpUq0loMCLmBpipHx3ECSX%2BESr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMJsXKTh6RxbZ2SolZKtwDyiI4E4IWp0IOWZ1aUKjookXqsqHjO6vASEPR9zvraw5GB6i1HBjGIhFSBatSTgu%2BeZf7vJZg29tYAcsYnCTyMn7ts2f3nWgY%2FPTRaQQyrvKOSiK5i4RbJC35EvhjtqLv3XLVzLUlmDs78%2FPCkyiKelaf9qmfdX4eESuSf8KZs1fF1d5B2IZksBvQEmXfAzIOVxMLd7R3WbALyZcy%2BOWJnh7%2FLVkDLRd6QU2938IAZlNTZdCKcoRXxCfRf%2Fu18qlvz9gSnWAp0MFqlaKSJp7xdO%2FHRJvpjD1nnJFlSEIcs8ChHgusYd4ReBFyey1hyUv9boUrDTp3nLhOtk9P144bVIB0LL7eFUPt3EnFU5vYIlhNe3ekB2ZkgOlRLHDXKvKdX7zKGVJoaFfna0g0aQIesakCOSxncITr8oq7hf8UA1UD6FAkuZlb613dNPQQnTF375bOMXZTuIwxGUOccGWPKyFxTiFXrikGU26vz%2BWpYcH%2B21BeFlptaQ%2BoRToAAJCcBEJIfi7CbFyXWa0DT6VrkAFmp15y5qjISInVvra1E4Dny0wbXaPg6Bl6kZHKk5qX5m1j6xI121ebwxQskB71dpfbZnpDCrlR%2B4NTS8cEHBQsMUCg71V7F5joz64wx6%2FBwgY6pgG1oWosGBq%2FJ%2F%2Fap4A0wuEYRzIshfRFFkvrQAUyVYk8NxCNUK8XWcEWnteMlC5vTSrueChEnv1huuOmGbx3QEwjzUGIViR%2BlkmsW4cq69%2F83%2B%2FSjzaSRg%2BT%2Fo497FvkEHZIZXMcFd1%2BA79SdaCr4L%2FDQ0XyEesbt5XCKo%2FL%2FN7uy5rT%2BxZW07u6dkEgPfE%2Bcj%2BH0OSQH1zt2aiMW1bCvSLRmyhSh9Fs&X-Amz-Signature=5dcdd798977260849f951665f7dea426f4e901f56b1df67a693f2691e782dd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
