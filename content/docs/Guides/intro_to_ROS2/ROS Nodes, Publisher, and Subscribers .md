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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=354ebdd79cfd39ac84cc5175c4a9f54d6cf64b1c4eef4987628ba0b89ef4218c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=c10a6b4c3a91bd29f212f31921e34420f01c32279212bac8c28c8aababfe3dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=7dfdeb09d66bb1fece6a541f62d669d675f0a4c28f7a59881992bdefab64acb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=955e8c6b3a500b4c1d48f31d8a6283233cf2df7ec94a2f792d659cb0b5546ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=1991129f5ec8e3da8bc3e367e49cfd1d8d8cc96d4ce4c449183d6ba863a8b00e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=28c78de26b71573debc545df567de0519314e489b9cad503f1c210c374433f61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=271faacf2e288239b66f17ff981ef042b7268a4514c8ff71f77465d31360d987&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK4J6QM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH3XDb8BvCF41XYrrmIr4l2cN%2FoXvkNHwmD%2Brr7vUS9AIgHb8dQWtvQRZ4VCpTwmMLKwIuiRAzXKtrG9KYEjNZBd0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjcRVPH2A0BnQAYYircA9039dczpYBzMMCe1ETqPUzDttTZQSLw%2Fl5VsPabYcQetR%2BkwVPJqBdf0KCdZ8CAVQ60fv97lAbM8Dz85JO1sd0zhQtD3esmfmTt%2FqgQOTyVBzJOpozRBAWIM%2BDd76e%2B44wgneudlHBhB2CpV8OrVzMSLLAFKwNjm4emHCzJVrVxGfkYmELc%2FQ%2Befp%2B95z7jaJQvqZoU3dC3M%2FmkrOCcuiEKtYpysHJ9eEOchpUkS%2B4q1WpSHWZUEQI64Syr0znP5dPVvYTNyApmLOEtJbdfmaIeZgcZdqs6ybg55Rbkrave5LPzR8sdZ1E0M%2BtWFml2VkyhEzxtN8m3TGvsR1n9ARDwA9v6RwhJOZwrBBtyY10%2BcHphOSNLbWVidD0K0zvSjsr4wQ6XHFbFBoQ%2B%2FCxH4DVk2WY3NTGkf06jQQ%2Fv8nHnQBEfqEWOZzSv4p%2Bgkx7AYFCvb7Pyw5o5GE1GrKOFUX436lrWAjfnXuV9ileTPwcjjhZlcP89psK9dVHXQEyZHOdF%2BZ4kxh7kfseUCm3RYALWxh4gqG%2FIAmvUSLa%2B%2FixQlfwehA%2FIyN6iSxOZI515OpoXVwIXHYYIBCTB6cJM44Gm%2BuC0IikE%2FWUcCDNsIQygFsw%2BBtS05YT8NUN3MLyS6L0GOqUBpScZR3Umq84%2FWkGEoqhQdJpUZQalA1PAIleooh2k7jFV8x6jl7a9BzN4erpadp4Q%2BARd5SBRXYmiHX0HkftcQJoCReUETsrt%2FCMFS8LkLS6R0ZWho84Dct38CQ0qUGi9rdEa1Kk3Wi%2Fn9e5FpYVvStMjxha%2F6eytCf0rkZJzul1StV%2FSDUPnswxI5ZFwjPs%2BS3G8ok7HAsjYCgQ3lSKe8800Ylmi&X-Amz-Signature=93f7f065368a10b82270bcbc98f8151fe245eadffd11a18fa96131e9c7a1525a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
