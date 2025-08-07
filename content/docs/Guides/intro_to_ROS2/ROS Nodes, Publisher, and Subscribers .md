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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=352037a2b155b14c05360066f5d3a3a776ffb8de7112e978094875220cf82729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=fbfc2509512f20b127e8d00d4147673cb5e30538b9db9d6da59e1e8da2c93c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=081c4a43a43d7b0fd2412c14291fe994b046d62edc3691a16247aa0085fdcb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=f3da3fc3a2fba0a5773ff435f06a3fefe8eb934ac305e47fca37ae4f7a8c5761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=54f100ee1f0cd2c3a283233b8d93f2ece71fba88abf79c49d4da3f5f9ffc73f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=929e5eb173b88a618209c88c0920ad091fa98925ed501e807e2757c7cb63efd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=41f20545fc2fa8d7b1ceb7966b1466f94d5cc13dc74e40811f6bef225c683c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTFI2H6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCro9jfd5Yws4qpK%2Ff1NFznIF5EXT9Joy4nYare4qxYlwIgLwYVJxR4Ia2y8iE%2B%2BgEUVtripg99kPJqs0z69BBgt%2BkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGDhEuF8EoIotx%2B%2FyrcA%2BLoRvARgUTAFCy0B9UQKGPjCLSYEsC04sVweXVJFUDw1IuNVqix%2BflYb9EbFp4hg8qZQjvBnl6psI6QtLpUYJHF6KFyNJ9nAuyviX9uXbh3wOyLm9io1CoWxPQn6MwDW1Q%2FCK9NTQP7Xx3KpbuyVaJxw0XQFbGLWIGZBkiPl2vHJiMbknKVqtlQZVJLfSDU1mAfGZ2oyRBzH8ZHcnyFwEMAbVWfUKX20VTDRrHCd1cQd7ycWut95zbI12n17oUZuFt7w9PWjvEZeyoCmyTVovjCX%2BWb8YhRcAyKOJJLUzcSnaO0mDxL3aYvuD1bg7Jnuwzaubnvfmwbb6kyz%2BMD5R%2FVlOR1fLBb8n09bNJi356BJBWNiT0fqjOhlsoywVIePqNn7z0YOT3EK5RPc%2FJbU6LyK%2Fn1NN1a9tsK2%2Fm%2FfTtCaYOLCr%2BRsDVXE0vGQLkETFDFqpkR5NMjx0eYlVDSRzpE5VXkauaiSpe%2FWcIOPAGI8ftwrs3JGgWTbRVQxxhf1lc2RQ7hLfB1gb27FMTm%2FSJak79yPJyCix%2FeLVqPYt0EX4qBGBI%2BnWPQP3M3KTFXf3I4Mc%2BRq4DT93UGSMoCOsh5ubT6xCevFRbLr3ZMmyKSY7Emys9nzMDG6BEkMMHj0cQGOqUBIStayJbPRSHwe0Fwxw6D7VTAMUe7%2BEGRof%2FJcWUs53qDTo4FL4JdP2S0T0oiLNAheSro2%2BvKyxDkZDMcgmi6BkGbBsTatxJs1osMFYjExRp07so5lB6mjz%2FIxZkD6uxuflsWfuL%2BhBKINxUNRz9rOvatY01dXfBARg%2Ff%2BjDukG7jwrkyZsxbYvdE6VsoXjlCrC1Y4zrQJZ9V0pbVQg7f6esXSzyh&X-Amz-Signature=0084b07901733fe5dc325ed273e65f87dd40dbb7a660e7eb0168cb3a03f9b9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
