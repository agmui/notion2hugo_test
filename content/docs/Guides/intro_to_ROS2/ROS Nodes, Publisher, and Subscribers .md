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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=366280aff30409c5873da32ffa969d39ef731416add5fd721e63b4fe1cba0acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=ef0987a315c3b12c16ae68fdd06e0109a98ae56ab1c63bd3b3988b1620010a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=9dfef107f6b076c2657e07eb24b58ae9e8b98c71cdf1b00187ca44ca6b72aecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=8cbb64abd590c5724e666c45086dda294b3529205a0fc9ea7f9ae646e9735b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=933a8aa440c9914c5553439baf52bfb4562c947a41828a6809b6777c5c214a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=a6b38e3fc49a470c42b627f5f94a77bc1fb68d0639164f8c6af52e817c8641c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=f31a25533b36fdc43603946bbea3483d44df3bc04758b417d94f37aee8a7572b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3MVHPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC4zEa%2FTaGtukSRhai%2BlC4qkc0%2FEHjHylRLsYLdEq7q0wIhALamInpPfO9oI0o6SLSmPS4OaNUt7CzO6QjY8XKXNnybKv8DCEgQABoMNjM3NDIzMTgzODA1IgxWwk2Q4Kft7ciBaPAq3APlyiDo%2Bb4dWaMCwC36D5DWAZ3PfUubdZ3TNaUqzEI1SfpoA3FO6uysRkpWR5BbAmwHZd5%2BQqgAqWmZFjKJpdJFE8T%2BFjIYdBODpE0RNi0WUZW7Avjpo6ZtJs7cxw5T9ehQJSVd%2B8mdHjynfS1fJ7WOZFaczAp2Qwz5%2FSSzi77IDjzPzUb%2BgyBYGh4tTi0rvjUIPiuhPPqptdWpO2HNvAZjpkYCAeq9YbJNOV62teR7sj1N%2FuJIesRcPyEotIspEiozoB%2FWTEuugl9LJ%2BITpBvaA%2B3yTew3iU6xX4Hrxl2vTjkoDieiTm0%2FQsYI3mHcL1n6Vc7w7lhjqlmbAE5w%2FIyD6GKYdF8TAnB4EGSLM%2BxSvmXt35BdeRTsMAVvugS%2BgL5TH85uqmd3E256Ff80NmIYYhhDh5R6Tb7BtBAaTEk4rIzM2TJEXFcPIfw%2B%2F9yh%2BhiGZ%2BsGvq%2BbnnQUwGj5UeLEQRdmtWwAhdQhE2PDhs3eFH%2FIS%2Fo8ePXXKXsT%2B04QBtF1QQrnuQPPcn81WxbZKOHEkmNHXJgy6KiI0dvQHPWucAvjcqL0EpBkGLEis0Je24vs1VdzctYufWi9%2BmN8zNQ6NPwrAdnXekUJCQMrEiGYS7H1VIKEQIpBXK%2FP8TDY2dnDBjqkAe%2Fd7NfGHsrYWi6ikJ2ZCvmkBtyhMij1IZH9pDZlrAm4daR%2BZYs4eEWe4fOQtl5gMW3CuUg78MaqfjGwOXOLVB4zvo%2FYTZf3TmMjfV1Rf2Et6OUYFKzZp7COzAKQTsaxCBHSmlzrBCLgoDeGghBfFe4ow%2FI%2BDdscAYYB4SQfga%2Fxmx3aanA1egaZ%2B9CYyvRZV4hy56y%2B2ygZ1rno9hkOFwJPNzWI&X-Amz-Signature=c19002af08123922d6ceeac1df5392437c3296fa518716662d2d83a4bed7a7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
