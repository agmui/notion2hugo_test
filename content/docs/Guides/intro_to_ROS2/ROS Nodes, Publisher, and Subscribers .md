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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=b7e25c8d16e2a0d6fe77857f7aeef2b5128bb3854395fa9062bfa6d9ed70b0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=1b18b21efb46699cb480b40d1fc6d2fbea086f1b25328c07323995d97a6e52e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=2d03a0bdec91a1c6f5eae62793212929d2022f5da00ee74a2cdd1fa505208dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=c15501ceaad16c8e39eed94254097f166230a5ab67f6f18afabb8c4914157157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=29f0f501a80ec02fc03ed65cf6db57f5ffdfcdee82bea9f58a402c3fe1623cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=6db338c81765ef8d1d842e901a0d302a7422982f4cdb0e24f817a896541ae959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=5373d8b00cee51fae3d35af9575e75a5ce8bbccc4e8db64540cebf49beff168a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HX6VDS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVrMEMsQVNirqLLwuyLL7MmDB0iS3LxwcZq4SDQgeaJQIgchO%2FX5tNeCENGomUxMqtZ3dZwxk0XVn0QzLDuL6%2BdwQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9aXDdxWRlvRPvKBircA9goyEE72i%2F%2F9CBWKuNmxeQFeRIcFjcH18OzOMjQdxu9oiJz3nSdsFEYtfomtNEFbO7SxUvCivAtF4gJ6DA6YXqbdnJeGRuXqmf8T2xqd2HcVkkhEU%2BFZDgQssWSlTb4KUK4aIg2him8tD3%2BaXUc8SEQVhVbZ1hotAZI8nNwDbQXfYKWvYeVsevMuKOdugobEhVsDDlnZAI5mFEWhTxD%2B5DGLgdEpiCnAVUl7Ni1j4U46L80mf%2BrkH4Ah%2BIlVWIdHWOeJ05eQZdG%2FD%2BM7Yn7rlFtib0yo2yWbrv0%2BJVf%2F9sJe%2FSybZKGBlVj3nYpUhVuy6tqF4v1Aft0Jm04Wb%2Fu3N9UvMtIQbcRpSbiJrLdrnss8EchB3ijUPQ%2BYWyWGrBT3JzNc3%2BligUpJfVP2bzP55Zf087yrVnotBAw2UDIhojso9AaxcMgUE02pEVLwbKEsvT3IGnqxO%2F4WbOUIlfH0LYxpV%2BFzTmatrQv8GzuqEGNzlPw0K6ODUl3Cl4PLoUZXqeMv8c%2BiT6pdRIAzfhQEtc4Bf2CoU5%2F7EeSg6lN4XzTlr62H4ob%2BELWmWicoArUubLK0OVUkIhkWoOQItQhuxs75S%2FU0boaQXLKUeDMqUB4gMUu5GL%2FxaQRC%2FwoMP2KgMMGOqUB0RC9UNlveQxpdhZ4D7BvSWLUf2Sr1sU%2FgcToGNFttUOY7ILAIZO38sZdsCO6tT76IGYSFY0DrrnHhgvn7aRW2894nPLuR7rAHQeglMSwLZO68maxNUcBdPEw%2FQFAF8QYqJAJFtxQPrO1PIGJV3Q0ZBMw36ge63zpl45ibjfSYpbSU7e8k15oIhEVq%2FECn6MIoQ%2Fmo2W%2Bp5CE%2FsgHw0GBUN2AhIiP&X-Amz-Signature=d60698ce870851746063eb60246d9b9d8b71563643bcb385a1aac698b9924c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
