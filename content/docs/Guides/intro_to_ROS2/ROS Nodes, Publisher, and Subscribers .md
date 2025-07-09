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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=2bc4666618e3848f9641277a70c94c88befba6a48f62a096f29c36f735744817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=eef274b3b1f017a2fa606d12c2949bb02537905c7c9a30f6c6aba3e35c98f8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=ae8a050dc41de4726c21a2c4eb5422e8473b23ab699e255b4a298bba0d3b9da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=e4af7d37ec7e3d8658b226df89fa67f572dbe383c1a4ca3a22797e2429405642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=c5f3c01693b9b50e2bf73936e80d63b8166b867f8275263911f95a26cab0d1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=6a242820c4c19b86a662b9142e31e2b98c89951e690b621a3ebab26708d7d525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=244179926090e3628e0a067aaec91c323eb2b73f5e637b455c3d6374705e9972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWS5CA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0SaxBpfP%2BcYV30hMJCX%2BXHidYiV338ASYGcvbtKg6AIhALrSJ1P7myfuHiQe7I9VQ4BAG1k4YtuhG4vRX7g3kpsFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igycp2hqOJe9nXjDYOMq3AP5%2FOM0ij4K2QsqY1JwyuH4WT7P6e079Ag75hXnaynn0vdmMnmPQ7WWvMS37mFsfth5kgs5Fq8Rmk1t4BbVlNdmGXpMRZyKRuvscLUxOqfgBbKIKMeNMzyFCsio%2F%2BbRNI8UXQdgyG9h%2FtXO1Pow3VQb%2BVri0Z4aDHfd7Y1bM2b4asVKcNpWNBDuw3vNbE70f5K3ZKQpVSL3u9Ip4v3imM3acEG5U%2FWrwX7AZX%2BsipewooalkKo7gUKqwU16bVLTXVOZNqTk0i%2FtZ%2B88k9ri55EUeOxw1ri16A8N8oMEHtxgBQ9L8U8KCAHTU379DP%2FX40o8GclasNZAlMj1RNaSpBW7Cl0BeAm8boLzT%2BP5pshrjaq%2B%2BPTbkUmW23uCHij42fXEL9p16xNInmD%2BeSm5j1y%2B0%2FUvzEczmctf7ijhQUZEKamn1%2FmGx7fx%2FpY1W%2FPLf%2BeZ9gTJSs6o7W%2FNEgUU%2BPkc3JBnqvC4%2FO%2BWBw4ldAP4rtYP2AcREC%2FZS4lkK0bun4K%2FT2P%2FWAP%2F2liIdeg8TMncKTrmHoRG2krMagR5ROsVFIUWmz1zGF95IttZ60DcSl9zcxvxBv8oGP8x4JdnwbYC1JMghGXlls8sYe%2Fk9%2Fz5UYarJNcLnBzO8QHArjDFxbvDBjqkAWI6ulBHtsXOeb5E9Xa77nCYOzi%2FAEqcmpTxr6Iz0cPY67YdWkEpOJnAUO6xzbM5mlHKHmSWOvshYPrmiJT91FMtS1IlWRuaMryaz%2FvWfzjM4vWgTX9lNFloiYwRWnnnmU6a%2FTt6w21d8ee7T6NC6tDcd3klT52EFgzchSXIiDYuDkH5Ezy%2FNJdDjS90VBJPYXQN0JdFQTKT6uN9oVtGYz22ljUj&X-Amz-Signature=41606f5c02878ff0b53b70e281debbb382f66dedf41fed8197787a24cbf421e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
