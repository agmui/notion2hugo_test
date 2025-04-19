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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=f098c96df8ac6a2201315535fccdbaf9b1903d9f709ed3e04f91015de2e01b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=29fe94425f9bb7ef62ab9483fbda4129cca9aa2b0498490b6d73d34665d37e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=80b93f49e14a63882a40ec7fa327b63990585907e1633e32841e958d55b36b95&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=74c38845e3b3a9f527123e80602097ef55cd12cef66540c63974ed7554c6f61c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=63f5bd8c576e937100359b973dcdf3d39ba1eb4fff650112ca80591a877489bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=1a7fcf7b4892fc4dafa18db886c1c2f04783a1a36980b543be346c9160c6b690&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=9390074b7503bf8a7e938706e74f0460bb7da6c65a4946c7e0712b0c2a3f994b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ABY3EY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIARZBrwimmWTzQanX%2FR8%2BXSYswWoa8hYxrSmgwjjZ0HxAiEA57FdgKK8obNOEDBU8RA7B49iq0HyWtrtZHIfRy7AUE8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeKThzHnv6Wbltq1ircAwLbYe2msPngUiM3zkriIjSpJGuBjmEcB7GSJAJ%2B4a1tucF%2FXDJl0dUkf19aOcvZzsTSMizZl0NZSy0H4ZJhVwrgF5eytwKKfmDmzr%2FM06abQx6EwOwhFMtIrkc9vwQTa%2FJcnOAOLPAlomYy%2FqIBDtARpOdNZ%2Fo6MUzIjD8Wr6TKHZ9XCTX0al5vojnKvIRGuJOLuavdKpEVTjQEGnaD%2FIK6%2BPALz5%2BEqR6xsEUBtUywCCNJFvARlHU03mgtt55jHaLe8%2BWB8%2FvxiTzG573KiStItdrS9L%2FzpRUgfCYBQptHqvUl0TTMoGgeYWbLRebcKnNNwuNHUdvWsuSa5II6RlpFXVzL6i32QxHzT9vpff7oZd%2FC%2FrhBGhORtRZLGLNQwKeidOjf5imgkRTMpxdiTE5keK7DBKRJaDibH9uhbzco1GAuPl3169nLFN%2FhSiros5qd3ZdvcjtheoMCEia%2F1reqrANiWqt4eMIlw8QgUoMy3ymEHye1gPHiAAUnAzdKLTKJ3VmvqLMIEUYYKme545M8%2FhHiwGogEF%2B8rfd7E6ieXerFmBwxKFhb8iL%2FVHf6BsiSIwpvfmjiv0O0OE4TLuqti7ptNDm0EX%2BUz0eYiz3zeUfXJDle7SVvLqMwMKjMkMAGOqUByrejFqd2EAg2DiNL7ubwJOzAIUrcG23y%2BT8kM9FRzb7k5vb69XFBpPr1Mys%2F%2BzaD5nCAb8QQ3nvf%2B1tCOekY30eS4aL7ugpMo7Gipxz1d7Hev74Sa7RtrZuum4UYJ0tGHz8JuqJbmznt6aPeYbZ6HqOkC2RWhYdOZBoOWcRRB4SeEQwSVAf7OpgWB9%2BrbvSKo4d%2Bgk3mqqGpAo2kwV04nyhzl2IP&X-Amz-Signature=a85095479ed3408144bb9c636e9d1da5d5b9d11b12262449c2de8f945a858c89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
