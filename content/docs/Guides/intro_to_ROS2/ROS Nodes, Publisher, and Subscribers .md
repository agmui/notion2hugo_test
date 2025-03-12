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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=3dc0727e68be8b25a8b3ee17632a4c944f0564b0134dd0a50dcaaaf4b2d8eaad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=9477098cdd558b6021aaa7419fc19db3aea766bb0c03fa3e842a2dc328ac4099&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=734d75da3fddc6cc446f1f72fa450ac7531d0926a5396d90ef437b75679cb295&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=1872bbeb1405289f241148c0411f2c89665d0a62390965f5f3c8e32c462cfd19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=6e49b2449249c22b357874aeb99ade88135e00d07e1287f8493fe6619eb03c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=7908a9383938952233f3e1b9b236b6669e43bb2d32134166c171f63e23c75241&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=20bdca7b162370fe29b961981fbad1a148301f811d362116c61d6ffa19342a05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXKK3GM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDxaxjuEfhZqrUD3IZbGOOXWhKJhpZF5F%2BPgDX8KgAeKQIgC8rDhu8C1kYPwsGB1lG%2Fe0%2Fy2eEt1HCeCtW6J9lm9jcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6%2FLa3TrikRQROe9yrcA%2FuQhrIoW44pGlqQLKmrGZF41yQwdVk%2B4TpM3NlWsXts6Izi1Qz7bCUyuhAmJTdzgkEwmI8kRUJhhLlNvalxN10hwwZPR1YRIZ687Bk3Qlk1%2BrEeGlsOFr3zMA1h7QsX2d3olkoE4t7m1iPOrt%2Fos9lxpuSK%2BGoOjI17QQ05hbjRbY6BJB9GfrtjACk8WuFUiEC1EVqdzzh%2BallUK5UVk1ke28XelyWAZ3ILtxDY%2BEnzbWBN%2FHTpgC%2BiLj8q%2By6Tc7pWsZrAuLOSAEFXcdiw6513z77CG%2BFXNujpMNQHCGW%2F6IH7nN2MRPrY64bGFpJAYMQ0oCQrsSyJWL6IxTd6KAa6xerUuP7Cc13baNjS%2Fhl6N7fELN19gCCVhDq%2BRGrbcbT8pTYq8fHFknKDWJzQYwjVXF1%2FDWtTzTKcmhHHJSVZqG8RJMoSVvz5KhR%2Fo%2Bfo7NMVtFYn705%2Bo1E3sW0VDpSu0MPoau8AxfeU9Xl%2B3j3BEBVbE73VwdIfWUtjiDYFNg4MvHW0u3gZ%2FpZFn8dYJ0BrVCyqh0ytz9TuLeuRNQhHA5Fw6nf5D8GYhByxu8XRPWN0rZQYR5vPkIgOzHGNrZHHuaaOrl4vCAlibf2zAZQ1CZKfAPsV28uIiLa2MMqcxb4GOqUBQE29dHJD%2B8p7FmFlxMxuS6iWvgEDuUXZl8EjaWcuZGUKX4Fz8%2FV9NJN%2FEt4mQ9hQ6mwZOq%2B%2FbKO9KG9P8wsCEGEu85i7Wauqo75g6KKLUVia4sdM8Ap6XXIpxawO3D15Ud%2FyfnhdNXxlFO80yl87YRvb6xfj3I1CmKB4uvJUXE36oemXlG9o8tefyfoqXHioZxQdQN55W54XlQ50LhvhuAYWOobS&X-Amz-Signature=60074640b5ff3a934d9baa0a15f1ea6a27722f3c2b9291ef01482e4e81e3f21c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
