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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=08a0705396fde36a43f209d77b8c37152a8da6699fc9cc696ce2cce2d07e413a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=4c3b9fa1d7f3701c7b7d89908c5c3783d1209e8033547ce9cefd04cab8863721&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=39a3d46429afa305e258270072d81429da0f6c494ccf64da024aaa2d3aae9349&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=081730c00adbea05fa50d21711b4c992b5bdeb89ae84447adbfd05155ad2c82b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=9f4a98c75ccbc2787063dd94f15f1076ddfcfd40b14504f1a1a5ad8bffb8d6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=6b1c8feec7c447b27ad144fb2097cf8cc5213c8e3b226571ed3f6cf67a324861&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=eff18a0e3120bfc321481f7a3e2753e4f658331e29cab84501d15c443f76bd34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TPMKS5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYbyXjqWdhhEutSU2b8DNkqBjzB7fMx3bXNLuhk1vYSAiEA7H%2BqO%2BFML74axfcmC%2FEZH01A12oF5KcFdUHRX%2BMW4TQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHOEQ%2FkUeYOAvzQENircA%2FIr4acx3lgG9S%2B0LlaTp%2BSMQt8YaaQUA31mJZiJLZYSOHwA32Wn2t6BK8RFUGHP7ZMeL8nO5n0XVWL8U4%2F%2FIWt7qqoXQ8iPMK1JCIX0YWRC0oVxcCjHyDi2vPxJgBhVWuSP02HxC9UnilFL%2FEEUTT4TGarB7C2C07kZWREnN1o7sRgunlaeIRQbIORRr5ap%2FnzcJ9L2CFZgGe0uZEtIZ7yZSQl9PWLy3mPB93LpPdaPLOHTKGN1sKQYC5%2BQYwxIY8BNgzbBKK2cYT5vkiO1gzOmB%2BWaSebgAOXqmm5mxaGUqmSLdpIGxOf6Cvo%2FO52SHaIShR1yyzYoIGxtJHrSMinhL2h%2Bxk54PqP0QOuTxtztM9uoS7NnufcIhWBUnFUDWYC4JAi6KLg%2FBc0AJxSAyBUB82gQPKUXjTeryIcdKkS0G1NLeYiYMFNNeE47CYQ%2BGg9xS6K2fqg6aENRF6ygd%2FLghtO%2FuNqt2wpqlOf6UVJ3dAja%2FFi9FsxtteeizHc1tRShwZLXUAsI%2BY3JCZi7e4jSTEVDjlibvHIUjXdcXfYXSEcHkVZ9LOH9QUZ9WMtXqU6w7%2F6FaeZkHSPyQdK07bsfLVocfgMKflOoapGPKp7U1blR38qDe1a4TOKMMNiht70GOqUB52oj1g1ODPxUPnUKgU%2Fi5Rqop9BdeYlPbPWL19CDLmzT6pZ57KaODIy7gBiniGSmvNeM6FB%2Bd4hwNabKWXETvQs2uDk6Ud%2ByaUa9moOz4FFkkkBpY8y112pIY8h9I6vQCrq4ILgVN5T23CJ34YbcfhT0r9HxEa1uaSmA1rnnMez%2F%2Bx1u8nzMfpxZ5hZsAHzqWzMfSVNrRDG1isG1L8S38A%2BlHGT0&X-Amz-Signature=71dc35404b0c4452523729cbd2fa2cd50446fb977d880d72c468d8dfeb7e4b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
