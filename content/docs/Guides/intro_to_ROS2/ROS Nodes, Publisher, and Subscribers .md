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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=307ea2e9ca9249fb1640de39b083c97661c45527eed67aead4f76ec08003e61d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=3a317783c56e8ff5d8b85909321580aa369dda6eabc852aa242be56bbdd52563&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=6cd8f9a7ec0fa0d0a0e8bda37753eb42d23902f2e26cee061b93073c25edeeff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=3d8b19a5f49ed3b779fe924b31b2977814128538d30d5ccaeaa4597b1d28733c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=c9482d0f84c5a76f7b7dd344db5e8e6d85f7ea44cc5364a556b83f8284cda1db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=e3f41c5418d93edab13ad9dfeaf340b94110c9328eb457ffe23b3d8a5d413832&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=7658e7667e899f993384fcc710736270efa411fe9bb12798f6d68b1a79a91036&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRT3BYS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFTsarQDa9F9Qujc5OwopBG0rkGOLtCqg09lR0VwT9zcAiAdPQXYQ5d9zJsQiAPICXlkvqO5%2BsIdWhpWm4QlB621%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FX1fBZp%2Ft2oWF8kCKtwDsOtcjndn%2BUuArbKhmzVqwmdy5CxlKg6DFLeGSYt8jTmYkCFfygYc4ibe0ctIhNEENxU9KaJaQ3wkdovbsazYsliZC9B0MhhcFTEuT0FSPU%2FkXMjWzUFriG%2Fj%2BgZ4M8S0DxpH%2BqxqBP0%2Bxvf4xKMoh9WmcO5vyN0mRKNLmTU3%2FKyZOljD1inkcdc5xtOW2PxKHF%2B%2FLbUTVd2cHFFNcb6%2FPRaYYlVIGjcOYYbcSuLLpVN6PRDEWnQTWUPi11tSO0%2FmwMiw1LFPsQl99ppRf1IM38P0JxqzdQEGPoUD6vjuSW%2FisY0biYWq7mIhDWO4aPNbCFmQbJdMxsWm7xwPCM9bo%2FXQzfOcPq1S5WTg4KcGFM%2FlvmZFGN8G0%2BfFDlsPsz7f0yr5Ck7xL9K3RjCQilA04quiXcJH8R7G4AqnvJHO%2FgCmkpTiQaqmEF3TGV4EU%2FlbjvYKiJX7N1eVnlcrEI6nhHNQLvtE7E4EoBhbbWs23jgZqq%2BjwRQHmBkmdDlDv2VnHCAqWryTd0go2xlNaFE7P%2B1VDd5b6qdPtJI9o5BgLmkozuszvddzwVAlwGUSvEoXdG9sguRgA6X3IToovre50uQdf4U4rBQcMdRaUv7eIJ6S5AfCxIdY5S4d43Ewpe2RvQY6pgELcBiLG%2BgzjX%2BLkXfReMFZFkRwCKSidCOcMkYM9mAh70cEWumNlTbA%2BVQtxaxVbWRIeAgGXLwSAuxxEcJ52O%2BCgXg5%2FuGhEL2XiLLDt1fdMyUoYbqed6f6L%2BxY9B8uODz0OSnZcDOsHkaJQZQMu9zuEzE%2Fj45RPHjjcc1WAc3KGByWhSsFsWzEAJt91PDqGuZLGsf%2FvhrnkoJnSpQV0m%2Bp6XA6gmGo&X-Amz-Signature=ae060d710f4dbd437ac54dced0f97a38f32374a772c202e002147fc848e7216a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
