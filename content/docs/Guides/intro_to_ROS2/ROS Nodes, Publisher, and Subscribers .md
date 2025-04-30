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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=f5e1d5648252528564253f896d81832575a570c96e3011e0d36063e6228fc72e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=6a08445436d43b6582fd6addc2e3ddfea063adf64cc59b4a1577b42bc48604e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=3f934b723611f369a16167661f4bcf22275b3a5637ee968aaa17fc279d28a4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=521c3655591f3d2ccad77beaafb0cf1d837914dc41c1a9b559d810470f985953&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=71ffa6f7e100a6aa5568e7e10489c7740e1245757b26102a8f7adfc40c4082a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=00028b38e26d2f5829b8d01743b5a24d08505c99c26f8bee4b8206cf0dfb75ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=e4d10b58a4baa14eb5b72978f6e72dc85b63e77abe4296fa2b0b15eabcc0046c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMCZXA2T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxTD8jk%2F%2BXF3LlsmMOic0kwQ%2BKzecwnfDBfMAVxdUlAIhANnL9Qhm6dHL6Om1w02EzP6F4CdvekJF5kWuYBYJ9e98KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4NLd%2B%2FPRfykc1O4q3AN1bGbBlmjnrk%2B6PxNtYjh%2BPd%2FLapt4u1GxQ4baRnkGHlhmwf7khqFK1slTB1KHDMYlEEHoUBjHjgFW0ZNhF87wZQXcjacR9zV4hUD5bvXs6XkgqHoTllNJFSsNlJ7xoGU4ehPpN9Wkl80c4q4JboOj4t%2BzqEpglK70rqq9BjhiQ5JPck7p9CZMYB1GTUVFdgkRVkXCA0GelrTqnDEOEv167zK62MfIOHWkUWHNe31aHP1oxj%2BhxAhWqd27v8MjOUJaHENusA4%2Fsw57BLrdevZBmd96CrBWr%2BbL0y%2FqVb7ELNhpv9eYjgTdS2s13VcOg5Xxkecg8Pxc9MOCia8rdwRWCtqAlRU4SpqCoNVuEP0l%2FujWWFXkDgBteWEn1Ij4EON9rqEam34PR%2BE8%2F1x8gMIWV%2Fb6ERGH5sWaKIdAjUY%2FXSbVEsKXNckWQCp0S36GQRCrDwKAOH0EteEi1LeW00VnYvaZq7hH6yMz4s4R4kz%2B0l4%2F563iO0WNzChiH5TBYB7nkjO%2BmI4Qx7o1%2BwXbSpQyI9J7xhM8J5QvxuODS%2BGlKhvAuNvEzZMxe6Xx8WpdRLRvTUU%2Bxvhdn4Tm%2Fgn3euoGz4P0FvU5hOmk7ffl5NW8mvfYhgpclRMaOIRanzC7ocXABjqkAe01ZsJa4hWVt6%2BULTI%2FmEAPYmBQiXAmELxH%2BTBfjpI8TzYT7%2FNjdSYvhDATdV%2BheLaMUNWYgq9auGK6NhaRjC6HyGG2ImUWcOiObxh3y40uCAo4cLax%2BQDhzRi8cLwwEy2adE3UyoW0IyoJYA9vBvY5n8Mc9KQQ%2FLQFnctbMy%2BbAiE%2FVjiEBSWMf52%2FxKDg4%2BzfNvZDpaQJ%2B5vtYmnJ6Gqfn03W&X-Amz-Signature=5bc2a473fd5b907c5228ae51e19fee6bc975af0c266a1d4a7376dc967c1e4a98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
