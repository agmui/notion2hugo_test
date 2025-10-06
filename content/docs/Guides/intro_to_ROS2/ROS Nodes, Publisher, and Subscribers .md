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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=07f2620c27ec18e5eb9862bf05be6b083bc64fc6710c1501d6c4676b824bc962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=b7ef4f4ab7e10f36a6fe6bb257b65bbd4b25cccfa6d5157e5ef919b2f83db91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=928728d8d5f6fd2eab8d8a54604f19fc0e89bd9aa20bc9d60839d0e80e649679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=20be2db28ce24349dbd966c43d46502da8c4b59b77bacb5ce6cc85ba6296d705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=d0e060d29ce243e8aff41d0ce89e77bd9485fc3314f6797119fd2d8f4b0f1ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=e999f3bcf6782f6d6919d399fe606d86e9d8f6775fdd545b38fbcafaa1a594cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=f96e15f14cc646a936aaa0b8b383f6790346acce8e268b5b95bb85b9e106026d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPJYEFV%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BRMW%2F0HZW%2BGyB3ZmPyEnv7mfVhE3qfrR0s76Tnr0RGAiEA4CEgdNS9Afc6lfm9Bu0%2FZNLjn2eDQ2%2BCUxdaAewjbLgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM5agX4BholgPmSmyrcA6jsnDg%2Fjus4BeyfoJMIomiKI4TKw6kInpbCMUoeoPF%2FBELytBUs5Z4t4e5xS6jiLA1qaBkowIyabmZeQV82s%2FPcUzLz4Dj5PZSpBJr%2FPd6Pf4PkDDsG7SEmgWWRcJRENngSDo4ftgAMl4P%2BMxVrtYRMF2M66POPHpaAu9rNkApn8bbzvN65e%2BVxgNMYXuIlpimGJhXloSU9mvCn6n5VH2eit8G7gSTQk1GN5XSLl5yAdtl7%2FEh0DDB9lXaF5O7hwDvKbiz94OnaNuwj005r8746ZgLxmhrS7zd1qpmGnknqb7ZGxlHXfCgK2Xr5JcSDVG6imuvdki9Otm%2BNcQCKN3fHdHaudgeju0kWvCEKRiWYjiAq%2Bh9W4wWfuXSLtVqmgqgm4jY56ygDBYAJe8XZbR3mdH9vZ07YZ%2B0ykNyRQSYPGf3VWavh%2BAsWMeAYbsB3sD%2BqRvtk48XNQUqnvvE3sJGL7LpY5YKGTj6Yh2o%2FApolKj0yOeN7W6lRkrUCHXw0pmynUQ%2FU0ZfdaW6wjZTLIGOmiGXzhPIaP2dg9H2ymKZCA3Y7e13kwuoi7acSFs%2B%2FBiQdSFqPWJVGPFeRrkmqIO6E4DcJtAz7szK4iGZUgsCa3qFtmAWS5O5WCsWnMNuVjMcGOqUB3wwmIKPZShb8w0MeDB9IzGmLz5veQ5ORBBQp%2FWq67D7G7eoD1EkMMiBMQO7P0EraVFW1cpAACC%2B%2F3XxNq2F3nC%2BBJiddMscjsgbkO8qqo9EOd2LJtKcEShnp0MHO%2FNunHnkNd6K7tMBY7PxuQRWbQrHdhGjixucKFcjJnOH8EDZ7gFwN7aR85amtRz9RUzWqCqgb1R7%2Fmk1QvPv28dPbOT%2BP0jFR&X-Amz-Signature=b478ee7060f3b9ad52131d08e4d47e0996e91b14368215d29d0cc47cec9097f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
