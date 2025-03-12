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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=b59cdb23725e3edef52277881244868eb9408f42a917292fcbc02aeb65354d51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=c952bc82c2b20cedf4baceb1beda10dec9e34a1ee9b4d4888df2c2d7c2d35337&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=85c9b718720a941d600995caa32eb264a33c98b8c2c80060c0f8a21b7b09a1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=1c7d86a4117c9ee6928043fb1b0cbabd321b4f6e24f2234d9ff6a8a75600f518&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=84e96b0eaff0ac725463a6374bb3896989b16d7570e04536239ff3dcb42509ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=8066233d3a5575708e2677bab61c2e14f4053e44e4731da3983428038071f092&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=6ef8e6d703764614d460b1a206ca7549fb48b60505cb417dc1b41c2917669c45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VA46IYC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGNpzhULJyySy2wcOfpyLSHD%2B8TGIcCGIzginWkM5KnBAiEAu8%2FLVUFUst9rWWMaoHAPsEhDqP5EVp%2BGiiSNkgY0f3gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFvASiN9e0dE21usCrcA3Q0Xeejrl8Wp8SwYZwsmTVDMz4mO4JjSGNuquIhBXFujv7vBgQ7nDmltOwUK4bTjgWb33ZWvZW1FCBcLuYBaOlRi0p%2BGg3lWgBYQk8poOkpzFEX6sZaZBlrZjPLw7WWbxk0dHScs9kh7Cd%2BTiRT5FM0dfMIYnB0hgM761s5gC0kWvsB6pe7kPWRqVmneof16W6OCKGlh%2BdyXWOnb%2BTI6Apa56lLHEtPyGwotGzH4z0HBLV%2BTMC2HHg0WnXHr41Ii6TZ9jtyTf4p0uji658uiojaFyzadDnKUnNtuJRV%2FwPsYszNbP7IRhQy9oCESjx%2FwnEAk9cOgYVhA5FW63jIXDu6tvX%2FK1ajCV%2F2rplrggFxSn36lUESVdozq7qw3Wii9AcYx7VwRLyPuoUAqUzEihJaiC5XHR7UCp2beZMx2Knr54XBZHFZTVsakVZTaQEJV6mRY4v7%2B4eTMxv17L%2BP2IATaq8OkZmyBK5%2FO31QPixm8%2FHcIXHE%2FRddnQRzRb7NiIop6vRwdXzL47OVRMnuR%2FjVqcT928azsLIPsSmIqvSvWs8rVk7XcRe5pNb30hcsyCi9my6EgBwMdn%2BGco29ZCVZPDAoTdDiTeASd7f3abPBkcUTle%2BdOigEyKgZMNLdxb4GOqUBBDOlE%2F5kb9T%2FjCPazpzd5E%2BbJGnCPbRLH7KnREDAhP1BtS6Tg%2BjvIvmJyxciUmRx4YZzi8sZ7komrqVYHaDF3d8xhO5cy9ERM0SssbeUfA35iyubTPnf7IKXpUeL%2B0Hg478aeND0iEMeW8YA3y0P7Cf3R3b8aaCiCHrDXtjlqjjn3ngnVIhShbpQK23w2uZ1Yj%2B%2Facab%2FdXRapsf5J%2F9k0lUzQyP&X-Amz-Signature=c4ee68d39674feff9c1b9b433d6096f7c6250ede01bc7d8381a0da80e0ec6528&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
