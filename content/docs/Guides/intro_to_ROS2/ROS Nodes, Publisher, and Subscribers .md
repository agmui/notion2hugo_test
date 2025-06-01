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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=494e4eaca1b9237814a12c43765c9caef7c33b77bf7153daa966a5145785b768&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=7bfae5b8d7eab27d401cbe94c27313e785fa57c914bc9e6d83c4a9dd6d73ea2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=276a2a017bc8e8b16ec5036a95b13537abb2514c70d5f14d98177c1ad2eb8c52&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=013ef29c9405e5f8c03a387e3f3eb9f4604436369459c04cb2a5e00cae5134bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=3afebe609bb1859ab35dc06bfa41dcb51d4bbd594881c96dea5746fe276da0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=ef90e36fdd536a063417684f9bf4394621b1dd50a1926475975f7de9c38127dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=cb63b2027d0feb1d6cfed4f3a507643490ad4135dc4c90796999c42a7507c68d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2M5753%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC76e4rtmYkeSnHNs7PLJtKx9S%2BIX6VcLvEXEdiO5yodgIgV%2BQd0jVtpfBxL03IOTmmMh7GPt6bBxUwYJZWRd5RgfkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRzZ6U%2B3JnNxtafrCrcAyDHDQwo0facAknkcF0y%2F%2BhoU9F2hsmNhGbxLh%2Bfq7AhQcVvqkcCB9U84z5KUkJcXPrM1qjpHCIzq6jn%2BarCaUcMzdX1Tx3adZ1LUcoWmo2J8YgwVBce445VcPuWbOMsZCerVIRh3N5Vo4kI18%2B9RjZ3D6P5LKztVKjQRJrny6X6LceCNJHaRza3kXkQHOmgvslfDQ2npx%2BhwwqH3bIbvbmj8UDYXw4%2BFby3t32KoiuTqt%2Bnactmullplmv1%2BD6tEcfvWVcNLWi1Ki493Wj%2FFPeUO5Dc7Wc6FORcSvTIUXmn6x%2FD%2F3lMUWhwuL2lBMD81Sy9323RIA1JJ6n9vk8aD1rI0wK4fLatZSQe4m%2B885rSvse%2BvuHMafOa0mAB1JcVpMX50w5920UoUOMFyM3HuuxB%2BjAiunIVfJF0CfDyoq%2F%2FbHkgt0eYtd6cVZcoi9dyADYeVcGQSc9pi%2FWN23ay1rofLyGDZA%2BAkfTTB5j9KElW3%2F4ZvWqWj8xHlvpr485cV2ZA6ZIDgF6qIYbw9qPfVSGgRznZ1uOCgSntFj%2BKVpxVVCtrYY6rYlgK8Nx9t3nAUBMG9r0sq634D6u2AnBT%2F5ZFU2B6j%2BNWl7N%2F4zm0rJYXo0juIgqY0KcWW%2Fj5MIHf8MEGOqUBLM9PCMeG2UyBk5Mhe2GhY%2Bjm1kW67pfUtyQ%2FLr0jJzf%2BPLoU0dJvs1RS918jqzyC44ZulH3377Jmr99p4kurDKHRrwN8yJgUW3m2vzm%2FYPeLntoC%2Fm%2BtehZgwhGAINK8wXzXgnChRzlXL3t81td8pPTWirapDeD6rwzd83jGlYE4yP9SXejBHjtoH%2BLmKt1JKIrspxbkKUgIxF%2FkvvDhppP%2FhLwx&X-Amz-Signature=00810409fc12ec909b4cb7c733ca074901078665d42a18d87a2b0260ca5f463e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
