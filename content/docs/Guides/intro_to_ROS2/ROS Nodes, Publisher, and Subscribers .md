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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=237bb478dadc1ed19d4d28a1b05abaf3844683318256cdecf29436d8693c5968&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=f6002d744b8ad1d6c6f7b665dbd125dc9b125429477cae5f8d951c46c6925998&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=3e655de4bb58964be1aa08fcc4092025deabebec8e68277a137b861288a32929&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=99c3cf7b34d2649302bd26a33897ced2b855908e90ac52b25a6c6e78afe58bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=c6ffa42a0109fd474f277692ddab7b50f969529bc1cba1f90f8a497a4906c672&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=16eb48f61be44e6f4dff0a39556807da8a078f8c049e77e591250495ea73cb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=44b4acae43259e3a0e876676727747764f68a2af7f392124771a4a2b3894cfa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JOO32%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT%2BsNpGdr%2Fl1l97sf1CNAejnhRxzTKbSxf%2BHfVa6SJbAiEA3zfGIEYlm59Lz5PWGUWr93Qh8O0Jcjpr8pKUC1v2zLcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs1AWpr4TvMktRPTCrcA7GUTICc30FIlfBqfxqTTBmz8RuEhy98GxPttj%2BgfnDwLKjNnOfqCNozzRvnZIz%2B2JbljAjmLzafiRwEBYg8jWECOWOYwdyCqhDaksVj1qHd7FpwLPZLo8MHkbu2Ms0d2JYo3rG92Z2LXVnR7WJIk4lCev42kr4a%2BddXgeGTKIHXCtiIFWurrUkr%2BdrAbFLQYzSUn5q5%2FuDu7xXEC9pHyvRFpkKioBCVAMDgaZgxWhsLidjEbzioeDkoa5O3lMDhkGEeWKxjlIGokuZAm02ueud1HicThH6sEuzgyVdMA%2BvvMJe4yIwSII3cFV7wZho12Vs%2BGTvcCuSOWR0wEfI14QEFup5tgC60dSecNccXjtn0qxZ49dkqnKuTpMLCUQSBDLXNwhiitpWUj%2F%2FC7R3ezCQZblsIObBeKMqFYOBPY6ub3n650wCzGGdvKmMQnysyu9XoPhSR%2BJZ%2F%2BUagdSd72oDWFNtu0VPC0L%2FisrYsl6EVGMpE%2Fgt2IJnkvGLUJIO2BntysQd%2BLxL4jymmsSdnSv2ueT%2BrACkzAnmu%2FtBE6R1upUvQ63HtSx%2FN5e5b9t98PX8ALiV4oq9DsVDhviEi0okqKKKNk9OczE1eF3Yk1MUMwHDqgqQvco9yjNUKMNTs87wGOqUB9QJRf%2B%2B9CHw6EXZXGLqj3DCSYRQkWxsDwXiMSACgiZCeb7Zba30H3Dlgnl0Xzubrwxs%2FZaEhZUUxTCiIMCKMemMYBFwunPIrslUbzP8%2FUTz%2FQsBxIWJG34P%2BaS6IudJqkZPk%2FFNUORCUuEIjqn%2FsMsUK5iXS%2BgabQ7TeClxtS7iN8vlx%2B%2FXS1XsRRhgN%2BiMOQVEZcS8PD8dZQbAefXApZMO5rUDs&X-Amz-Signature=cf2d255286c35d679f32c88333840f371b140705917e8ff16cbe6d5e448f44e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
