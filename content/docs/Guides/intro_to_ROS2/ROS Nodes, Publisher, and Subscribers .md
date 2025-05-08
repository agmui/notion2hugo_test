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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=1e2c3f62da23b34b3c26eb5daecd0b76fea7ceeb380d563feca588715b9080d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=e9ac7ac8ae64f753ef49090ed8e9a933ef6403489540daef7a8b86e72e6b7f58&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=1aa0750ea421abf567b8b87d1a764500f7c23f8440e05efe58b53c1e9a59bb3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=9b6822e8ee49a18376a36063fbb9d5106b6fbd105af140e242fc29c19632ab88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=9c0af59962810dbd2afad0b5d5339d27e1784d64a28c5ffb29feda63e3e93233&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=600710be884729e09067bd5293592ab222f5d7ebb7441c075ed48a0d2db86185&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=912f2d5eb8c1f28ff2e6592e41c686e554b296cca9d0bbb1b8f2e1e00f8adeb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGYAQEK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBve5UkxAoH9sa0hK9OZ8kzcmlMFDtj0%2FzNHTUgMifxtAiA%2BMn4c7OZm1ypbX8L6qLxsxoh5yFE5lE8AcccZ%2F0uKACr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMdV0og3bjnI%2FY38JzKtwDT9JmNLs4T6dMQx8HDkQBCxahbtLC5kCZ%2F5EcJO0yQWGo3IiXgI8lLI7HxBsBla8sMqSQDnMahcB6SeQ1d4ahePggC3LNT5LGw%2F1Jk4pu8GKBXO6K4QUgQhGcb%2FzyrH3PO861WGUoztbIt7a46VBJN6AI6V%2FfV9Oxy4SdkGk2b%2FSuZdc5rSHkL1LTpKYUDWJ0WegcL1ovgFrOJxUoeD9Vq%2Foy1TzU%2FiB1TP3nZZEmnf5%2Bm%2BE0pp3KHnefwAFZeIf2FVDkGbfrczfyC1ggEUDYJxlUEhgMWgLSyEfTU3z7qj9fAe%2FtpHsedysnkFC0ogQlB3nzqM7cY1WARLJDetFFp8MfaDVXR0hLvu7dtksnLk5TKy046o816DRKi2TBbtbYghRzkokx4VUdrD4zJ%2F0BOfhku1iuBPxy3BAHNCwWfiVhx9rtWBCcRHNgsvphWxOvpoOzLMkxA%2Bg6LI1QDHu5dwemiqC3awnZsZKzu6ail6c19xS9As%2BAo%2B6JLc%2B08TFBzDFligc%2FMsdbtlsDcmYjAeHadnV2JjZhbNGPYaEgx317mWfpYQ%2BeTNJQ%2BjDaAZqB33rgGa2x5zVSCB10Tl0TgsXe86oRZx2NWpngSLTeYdxdObT69W5pJkN7LKAw3KjwwAY6pgEeDvfXMpvYDA8y8%2B9bnWQwgwDvhrcRcMpywdR8f592pI%2FJOfDUX9dl99W389tUD4zijxlg32CiEahEKwzSM%2B0qbY1EWRRrpgHOSAIVE3itNHE5v6JLyMUr4eO4w9WuZ57CmeSsC1WZIYpnlOuWhZRsQu2n5KYpoJTrpve67obBaCYuaVd97eK3G6T72ULegb72k%2FJ34ts8fXo%2F%2BHzoqEmGvGoemRCu&X-Amz-Signature=cceb4649e833ccf22c3d842b803b24f3e25f79a0d3dfac2dafea9851bdd12b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
