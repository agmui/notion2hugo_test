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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=3c3093f47c1811f300496d85ce51b7e77d3111f29287ace653b58b593ed1e498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=b25c78c74d633fa4c4c1c167c3eb90ffa2e342c3817b8d672e52720cfb2208b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=96d89cf3d0fd9ca895bfece010fce82dfc0773a2bf8ff8b228a536445c1964da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=9989e5d0517d29aeedcba7ac80ac8523f168d24bb315fe26ea3b286a4e4b3b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=e74be8f812f0df6a9d1de24d3672dee98d64a43aa408a987b4fa76edcdc15b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=90a184fd4cbcf992975d9f1f4dc8304832a3ebb44c482769391618fc4e4d9b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=f3972c936dd94b6ca64a453e746ea0c4dbc4d3b93f4759984f3b4e013fd89b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VTJFNA%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTPh32ysAOf8D2b5VISNVxHghE%2FnpUCT8FjtncnGhSAiEAh15fGB91lVBuJ2Ikt2gbnfDW%2BokEo%2BZaa4rqPwB1N64qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLBYFb4EcDl%2FfSIHSrcAy%2FWIhTmy353KBjuZmOsqdRr%2F1QUvUrHcMH1QnqL3VzOY8%2FIj6j8smurzJuzefPe0KZdOazZtGn8lJqP6bTCkokfcrkDe7ofYx5zVRYs2WIFcnBSFhfCP6q0wicJvnNGGMKW3YHYj2Q5eYzi8IqaVOKKD%2F21vp7PPtYSdssMCbFZA5UDN4%2Bnt%2BdzfILtiYbwcIj4dgHcNICTcv8kg7jU5EGUKgy7latFKtAOeOgVCslXqIkzqjS%2B%2Bh3ESY5W0kcdnP%2FuNKjXQpkBqmdTrxF1ANcRom2LmIxkP9V18hnEZTIgziwq%2Bufptk4pphNhxUYlgKlzs20SvG0hpAwTWKEHzE4ybzsEq9QuXafA2907GTvR8mvsJ2Zc1hIhYNKJ6nXTcQ%2B7Fk01HspYthkFkd0hpN04AP%2FHSMeTBWF5bxmBaozdHRRMtjyqbldg2Tbg1LKEJmfk5O%2BpzCpXGxCudFL2A8tt53OlBAS25w7nnqJ5Npno%2BUvFOpuWsuP9UFtWWPSdpKarwIGAVuysUCaqNE8ly1yJlEsh8HywYYBzYpUaaJ787V88ezvN3M%2FHstc3U%2BNSBhx%2B7ID8CPzyrMpwznXQ1xqmt%2Fw4yidcGCbqEFcSJyU2HUXL%2Fzrro0WG%2FS0tMMSo%2FcIGOqUBIxs4NCMHpieGqOpbASgLVrAcuFV5Snh5JZQKjC5vMCjkOREZKz%2FEqG6GtZNG%2F5BcPUpfV91BzKxN56JBti%2FNaK5mVuBl8bMfZ%2FW1GF6dCZqqpZGQYiNhy1z4ST7p74O6M67Boii04til%2B46GCO%2Bz%2FDnPenINGm0LfY6x2f84YX030bSTF4qCJzl1CN90eC5CdBpTmjB0I30MqvHYLuAC6PxJNwl1&X-Amz-Signature=7b0eba3cf4e930942d9e150d156629bb05b3327307e99a5a6ca27076f3baa38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
