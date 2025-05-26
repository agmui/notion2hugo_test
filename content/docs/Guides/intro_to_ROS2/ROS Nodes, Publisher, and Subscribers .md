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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=69b35c6f3dc8b8591760b615b89edc2edf478851b4f427a0242c821ba79b7959&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=28aa3652bf16a106c4e46361393ef7044801e5e163062654b96a530d9ee32e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=e8c11329fd4a5a188ddd8557968325f84448f6b1372ae758da29f47718968202&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=fade6c9b827e0ed6fc5f6eed99e794075b247f1a72eb90b88b090ac62b2abdcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=04e06a5549ba798b3d7bcec74d2dfd45e8d86eabca448d557e3475d4fd1524b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=2ab412c39ea8075634a208dd16fa5aa52a3be5cd47f758c811ca6b0bc1d48aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=40eb7367a7594bc6650cfed41824567685dbd6ca06bae2d216e50b1774c3a08d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMCS7XH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD78AfLMIZlLncs38a4UwPZShc32W932vjMDMEJZX3vUQIgE8sQynjPKsBKbfgLsQbtLQ4pD4PfCc753AdcQwO7k3wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBwByse4uZ19Py58AyrcA8Ghsloas8ZPJonLgFSlcos2ErOmwrdoA49CPsR1EP3WLl%2FjOXLUjIy3qbNkELytiKVRzKNy%2FaJ0gd%2BL40A88hiOQgRvzuxMf5EFw3znIkj7txQBeVuGEnDdxrGBZUMg2TdsuCD6omxZyMSG809rAxeCwfnuwdPM4AisS8OYgj6dEXcCX8%2FjfV2dI6denySUZEZw43voZWKLPh8%2F7vIL7WrT%2BxDFdcvoaxmS%2BwwblijggplH6iP4lC19%2BS%2BKn9mq7Rt3iGTOzL4A9HGBgYPDfQNs3NJSJ179CFxZy2WkOclqmWxM%2Brj9R2%2BE3WMX%2FObRv2Y65puizKxafuLjACw2VPPLWzyVkhuggfgCVr5nyf%2FUE8eJehL%2FCvb9emvJRuizf7x%2Fw4bfrO6ocsN4I88PGbLUqzOCXJvoUC8f657N7y8jskFeij9LvTjCl8mmABPTUGkYuoLZPspWKibFjLSnS0PnyqCS78Vgs8PbRhG0%2BNL8Q6mS452h1%2FV6237lnAh%2FrKgc32yl5mtWpEwzKNR6owvMk4qyghlXjHboiIyZfJgfKUV0pULiHkkZFIvxPt3m%2B79rniRojsUNljc55enEU6p8np4T7o2kI7S76cPzr0Jyzmo0Z1dCLnSBd%2F8JMLHm0cEGOqUBQvzn0QgWO%2BmFpGxNXOIfFYfp26XcQ7PZpy48PKPPWaGWtHS95J1tQukQasWLUs%2Bbs0KQNOa8Z0GjPmyaxZ3OHP42WU%2BYl0FzyxLa3SJNRn7QLT0tPahfMHdIOglgf4gn%2BkNUrSSqvTrGvJkg8NoIddw%2FIpoyM1x1Oc7s%2Bor8ohbXs7VsOpnS2si%2BlaOPY%2BWEYIbcLgaFy8aviuZK4HBYUCg27ofn&X-Amz-Signature=c2519f7a5c162ee3a22ff7d84da8c9151db711a78e4d751e2d2193f97b655a43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
