---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=22ab7c842c08d874bc12f4fb1bfc3adb87454e091437eacfec941261db85d6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=4f0e4218200c42a117b788c44f1f59a8f81ce67be732bb9fa7ab59340bbf831b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=d41da70c60b8b970fd7bac9da0d31129cb45ecbbdacf9283a3275d5a05189706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=a8dc7c5f21c7129abf266e16b6e7b9890e6ce42856e207be50bf55ee5b130ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=75eb54428d5dbb38714b8b7b2421c3a456ae6abcd44269f5f722aedecf9dc81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=d9f0b8bb835fe1386239a091c4bc9d709152f4524c8b9ee5050e5006a5db3eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=836e3455862e9c708cc26eafdf28cd7c61b757ae30a004feaf8b958451f691ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEECRRMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCUshF3v5t%2Fd2lR%2FunPXeBESR0Z6Ftgg93837JRFynQVwIgZLhb61%2FM5cthh09ntz%2BG99piRryccqs8jA1ETdC34nAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJiO9uo8I3CX%2FECGyCrcA36JSwS7n7nSola66dAaBtbA0%2FFZ%2BocIC1VdXEn1nq9ZkTU9mR%2Fauva9N2CLGFkR%2FCvmRI85Mx6fJheTnIZiFz6V%2Fvf6FIUJAhioK1XMs8VXN76XjHIqVCAXuFMfd7PDwLBCl8tnKJzZJl5S0RyKwNPtmbTvvGBQmNYejqjmKNbbDAV%2FejOar%2F312kwFa3ebVJcz4Aed1RzqMwIMniEdEIvhzVW0EnfyYuPbcyPW9SkuB3D6Fm4a9Mgnc9r%2FND4PNWEWzGAOh21WvxAYJ4jx5pA3ZRrWGWhFbaKmIRC1HnsOTk39RjglsdKXypSlVI7vTpnu%2FO3dXH9j%2Fw61tShifswR1Xjt%2FxHc5DAEP0fMNS%2FbfgjQquEh%2Bo3auxkePU%2BX21AEeuyCq%2B%2FRZtxsftOrrztLXq7hTYWFnx4%2BvGgxHk0jRjRbPBn%2Bn7aH3xZmup2Jk%2Bd7s4Fh2hyGTdD%2F3u44%2FX9KA1KGl1c72jhWGkVazOBvjHr5P6XUP5FU4ZGfTaIEFgacQ8EpDs6EsC1W5Ek010m1Cm%2FZijgua%2BI0GpSMZ%2FzSZ%2BBfqhnpkQWh6OwifQPiuDDDWKBP7Ct5CEDl3R4dfbdS%2Fgr7qgEiyxa02CHs%2BORZ8sUuG96qWzwEHFFAMJSj%2BsQGOqUBHEfOpr6X9ps2mQOcDbMKUPiMJs9VgoVlmcAjOTSrd0Z7bfYBJnqK0J6ofhPHYhoZZ7uJ0Dsl7CKAIwfBB9qBlGm0jN5O1X9aXAqT%2BmUUK7eMHokE4VqtHmhuF2HJPoA6ntdmWYzqW3vL7HSvW5GwJ8YZ6NG1diax61SnD88YxhIQSS%2BFT17o3U24l3wEoOZiUf2hdQ3ryE6wO%2BJskR7rcYGofbFR&X-Amz-Signature=9fab17a538a5180b9f5f8bd0fb7f66548c5646bc79676f2512f9b685d10bd477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
