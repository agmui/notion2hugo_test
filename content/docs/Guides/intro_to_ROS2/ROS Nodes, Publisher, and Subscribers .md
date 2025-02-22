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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=4998ce45f2bae8c1a0c7bd10641b97892b6658aebeed9c47e9c4ca7a8b549c53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=802804ec281dd88d28e5b07cb689ecea31ce3c71e3b15f2fa10aadde8a49c95f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=2139d674983378e6d8ab3ac9f8e435de49184115fb026ef43108aa93c0196ced&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=023cb367776ad8515d12afdeaf73f56ce78829f2f1e2dced94fe9108f0b3062a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=ff05b25ab6ba39a0ae38c235e355a7ec42c9397686f17a776e883faa279300d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=3b577ada4d66e290878bcd2422688eeeb84ead73525c12cbca7e4f95496a657b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=5581acf4f1f98f9f57ce264dc6f4d1409c46c6284b4ceaca748826585d937294&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVDREWE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTEg2r4phqJeUeRBEkCHJgkIxRy8s4dl1sJ2%2BuxWXhwIhALCn0kOZ7NM2LCDGalXiu9i3ayZ336f4bPCYth32MX38KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkMcBPurgzFQkaEUq3ANVA8b6sC3l%2Fb2w%2B4U%2Fwzof%2BVZd7fKiy0eRq9Q5Kolj0UigDmQ7tQB%2BRq%2F%2F0p2BvzHStigpIVcvAu%2Fh3QPIopzv%2B1oRkwcoeU8QqYfNV1heyeLMd6ZFUDxJcmdIszo1ixda3l15fVL0FlRg3XyE0l3Knu0gKcjG5aXR0jzEryXyXOhe1kBAqEn2csLcR5boM0MqZ%2F1DNJCBcPMf82gp84r6OxDxhL7jHEcMKXA7fTIkBaY0Ux4ghSXCyFLwIlQrFYc6J%2BJUsYAXplfLK1yyLiMVos06kxX%2FOyNM%2BqY86yCgo4tD4VvOkBKdzpuxdYfN7A4PUONH%2BY%2FyRJO%2FdikvOPd1jbt9%2FPNZuec5YPiaNJJQEjUKwh2Ta6vrPWcJl5MM0XvEpZlIEPfCmTelVdsVRNORMac00EtEpUvT2WzUndcaqMOAsLPhhPJBjGxCBasjDLnLBgF%2FmHt8EQycoUMm1btNdWNzikdwrNvgIjlWlkrNcaSykbp%2BvDmkpVN9AQcybJLqJyX%2BbhL0rFk30b7%2BfpLr1jhcPCLh10EEOYsTJsjZ7v0b9XvVEgbYkDj9KSo8KQPqLhzb0cr6pF7F3uyrhlPPWgO%2BEXN1uXdoMSnQatFWn3tclg08Ln9Oq6vRUjDriuW9BjqkARRr26EYB7Mw8P%2FnVI4nBrRJKr5yKqCcCETx%2F9yKE5DaL7TcK8TxeOhwOO3NvdfvvwY4UxA3aMXps8WVcM%2BO6aSIf7f5Eo4Qaey9M%2FFt1%2BlA2IcjZ8cL68T5cohgMQCXQuc8ajT76%2B2XEOMVM3h9NM96H%2FYqhWKxSRnr237eMkdiv8F0Bh3nWhbordVveFBLfkDoM7pt28186pr98hrOECxqmqCA&X-Amz-Signature=b110b4a5b6825149a4b39e1633449fd7217fcb46318eba65c9781314f6418669&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
