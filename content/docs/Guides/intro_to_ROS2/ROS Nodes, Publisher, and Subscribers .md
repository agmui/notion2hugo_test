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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=4fc1ab7bfa97ea42dfedbb2fa30943a721a383b924758a66cdc01713e79eeb8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=e325ffba4dcc87a2626fd1d8194ac3dc600a7b2143a6d8c48c9286144d92b3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=44c88c0abe8cbfff738c9ea77c61cda6f61cd3a6292d3d368a9f4fa2e3bf9b36&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=018a8037f30c6970dcabe5e62f53cb2c06f040ef06eba00af53c23afb4309a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=2891dac2f087162b45a7f65ff19543d904e75d39710153a729e174d8291465f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=f4d213e563966af230e114dbb680f3f06ff8342eb1c2b91d477f7e7ae6b4ba7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=ef580f7e87df7368f97c676cb9f6a3b3af9c18a7453e14016e250bf9f8be7f23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUGVVPA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFR6%2BDYDMy4g0cD0FXlLsnAGu2SCXLC%2BbiR1qA8zK3W8AiEAlheVLCeCbtFTwESGQSMRg5kPacZlNPBlnH%2FaMpEqKMkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr4A5f8sCksuZQbSrcA0V0tLn5M%2Fl%2B4aRaqM0ntv%2FwvWq0tahfB81lVjmAjUWutvatWEat9tcxdNQ6tKqsydRXOnnAph7haSXXtRwvjf2KS0XRcoRAPzPGzuEupOalDHZ6Jc9QI9%2BFYTeHHqtVjiQX%2FMloRnEZjvCMdc8Eb0ZJ10kqyGKf%2FZSFWpQMEnQmR8L%2F4UkBkESLsS2LYf1OqM80bx4%2Bcm0Tbpna71IIImPGIhT43weAK32vBePLkacRQIdsbEV7yb0o3fAwQhdLAC6tY60xmbK40Xuy67cAJE4ecmy3bELGHRD7vsIDuajSKHqMhOvI4VtEHR%2FaOzRGtIgDQjCn4al2SsKwWOmc%2FppOkCWBJ924pPzrDX40gO4d1iItGC7V3gOytY%2FInA0zF3d6rUdOBicC34m9OcRNf2W7FnPbOOacjeTx%2FArU63lAURlgVB1in7oxdz8ZVr0yqv9WOV8KEa3t%2FjhkUmWj9zwK%2B6wfWqbPeBII1%2FIb3R1sa5dYpTrRby31X6egCyERQfASW709tDgG6%2BiVHltWCmcqbzAxlY41MG3nf4dqcjee2IaUMpEFAvDHdV5HVuc6Wv9zKy6VUfdrrSc%2BTqR4b5hIaMdWqSlSQafrCKMEYln28yXGBgOncDG27QJUMMmix74GOqUBs0iIC0irEjDP6lGG9ODYnk8eXXafyh%2Ffjo09%2BKbxn74zCxMxsNGqhmeYemyDEDbXHgnqalyOqIKJJ5gBzfIxopj7u8stvFaCQDQPVzTDFWi9XpDicGAVtLoooXOwXx%2F9DWenODbDhIMgWQ6g4qQ472s%2FFjqU0OtoyXfp5tZWYowcSp5eiQDKXeWM6JQMGMBS7dCw2UeuiU1NjGIh98beEowVytzv&X-Amz-Signature=922b7f8bfc831a3e52f70c654100dfadc0438d4bd5d6a3814b387d7775dabc57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
