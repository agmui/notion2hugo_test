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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=2a20bf65ff3cec411ec1d67217225a1050f4d2d124e37e3814bb17de63217064&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=fedc20a1c9b5e8ddae502524b1372f56d2260203cb39896ec714d85e6e9f7778&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=944da2b603ae254fb1b1d94f68f63327af069d9c6f69daa6c8fee928f1d384f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=2f019cbeeb77b46e1fe58c2462c63c99978632ccbc0a93f4d7634303513c53e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=c7aaab37479d87f640a1a6f4302fdca91a6e42a470ace3bf7d25e830bf47216c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=757d24ca3e6c42eb4a3185a6444d69e15c1443f8dc7306f9900afab13b4703c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=f743f8ab50da1ddb8f81c40e53bd98ef950bd8e2af6f3a9903a38a8e42404fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBEDOCK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHneV329FyVUEVNbX%2BejRvOiVyfEWQSlA90jfMF1irwgAiEA1W3fsIe2VrYlI5ReTq%2F5e9PeB3OKWj9hHaiaIi0zpwYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBTdOI7NbImWMXhEjSrcA8d%2F4LOnt4ebGqmDUzcuOGST11fzGw2MZutZsSZ%2BH7z8yc%2FBY23uF1jmU0fcfpDQKPIdu5cxg2zt7Xq4GGEGWRCcv4nQaLmmzS14edpEMQ6LCWLoxRM%2B4Ite6pI3QXkGreEli9%2FTVocIYPvgiV26qfGl%2F7sbfuHC2XO9sfq7hBP9jqCFsbtYXI3UkGlWkuodQWlB4w0CoyifWRDedGU6yvI0O1GUmW0qHaW8L4a4cWL0dDtiYlDvuWUxrn77B8CVwY5Myj4EeRMXsnZo3Z0ndYjrabsAHld1sqdCNbMaqSRpWKimGHcWpIJsHUaUG3yWYv%2BruMxteoHHziGxkakada4DEku9Ac%2BUrujEmgQkpREmfH%2Bz9D7tfMJPWlU7B72%2BjZlKNO2l6w2A4LVfT2TOas7jpo8beOeUZcnXbdmkp5Z8KBoXOQsRbzoXNcYPc4FjDXoKh6NHuzim3iXy0mfXvKqMFdA6bGqjgFlXuU6NYCLVZDM8YLgNPWyJNuEVSu9ZUdu0g7P0qlqteDZUSxUmjngQLukwZ7HYlHQh3iazVk5BEFIdRHdG7m0eBYnTAQoGzrm9xrnLIr71JHPCv6ekV3Gvma328CcZPkaMi1Ddnq%2FG8Pd3UTQNt%2BcZrIdEMKyGt70GOqUBls6%2FTZegIoJmIyNJZThLmwisBzT5IcKivbBUg%2FlDP6rIptgDQ33lMvlyGh56lb1t8J3WclYpmNWBFalyTBL%2BqEkeeTeDb25FDDsnHaMCgV%2BLM27B2ZmEIGZn9J7NcYviwwuYztMCMZyUstTFVp1Xu8ccRzmur8leBMbuDCIZZFkHikheNqQHRjAjOR8my%2FLkuKBlSQReZ2GUYDtWq1AYLmY1BReN&X-Amz-Signature=a60ca301932c1ce5b0befa2e1d8adab9ef6b4016b8086ce12f5a01255aa1caa2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
