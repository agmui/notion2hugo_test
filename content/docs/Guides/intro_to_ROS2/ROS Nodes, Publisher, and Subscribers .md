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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=5cfe86704441e4e66adf0085fd8816ab1d96d8d94da60f524e3e9959c35260bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=e1dafcb0b73e41e3387b17cdc02362a6d9f13e4e6ccc40430d8aeb0f05ed0c97&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=d1e24fa38e52ffbc946c223ad4130216ccbb77c9d8f624e33eada23677f97321&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=98796dd0b746a93687b63f5f2ec12705f8d44283e7bbac65d8cd1d5bf308237e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=ae0f9a21bbdff837addd0aa3d75783e4e01eafae9bf6cc7bc408c26867be93e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=450209bdf1cd3c890f432812fcee091fba4b34dc8b4b12696bc3f169dd1592d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=450fb3046ae268d90362e97e9349a8ed46d22a38692f78c185cb0cc02716d1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBBR7N6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE36M56WWTp%2Fvo8bFIy%2BrVkNu3BPYMoIZHjEbYDZlf65AiEAvUqtHX5G6f2TBjsq45nlxRMRIb41CForEpMfGhhOAEkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPztF4k6OPepvyGqrircA2wNjpRIoXZSTeO%2FbWzRHqg591OneYz2j2GKEZ1nak1nScvQbZu7jAUPRT3Kc1hO05JGmPLatoqk8urezTcykMH5hFd3zlze2c8Xpe0GtQ8aU%2F8b0nWKnvBDo3xQ%2BV%2FBBC14ohsblT3lo2eWp%2FH65aRMM8n9VSqvA36pwc7YVAwJkQJl0HusPy3Q9OF%2FWW70rqjkrI5t2gndem%2FMIiQakynIiQz4cVyg3lPgztwrcwlWGh%2FRKR21VB3PR6qFBIzKtNrNW2drHjSJmaJtjeZjbfTvT7Es0Jpy%2FZ%2B9vi5ok2fSYJWNKFDq0AmSQryih8BVdef6PlTzY%2BQpNgUMsM2tOhUX1iL%2BljoCOz9U4pKRXBW1g1Xd1jn3q3vWS%2FdPzBuGzuc8DHNEgbnRbstZXIhl1hHmBatlNeyEsDedfCzZcKBXVjUM9nJUfW1r2YH9t9bNZwFye0HdRMgRBAZ1171Xq4zeVVopPn7APk53uYlB8bModi%2BQiaC2oiBRtDu%2F9SDM9v9xkHpcXR%2Fi%2F7VSoJUo87R1O8y%2BHXk9avI83hS%2BlQ1AUjiTTPf6XdzpRBJGZEYgBuHgk%2FrXpi7qy%2BEjGDR71HYVgH1Mt2bYa3t2fj76A%2Bcu51nyBB5qvvn45BloMOG4sL4GOqUBt9P1LVhUKLg9hAXQ9ENfuL1Q5Rz1%2Fe5zueqx1yGtrZLm3E16LL0vEBpf2X5Wa%2BZMmpbaD%2FF1EtxySh4EyaTa6kP7of6Ev5X3jcPQjx5gPs0z48ryu0J0BymMjjHPBrO63Ip81Nk8bPOe6BJybWUKenDNtW7aGpePJvj3CgS%2FnJMHZoKaXhy0N%2FKrK6YUTRDfn46JnBT8gw8tmh9lrHTsM3T1nkbH&X-Amz-Signature=6bf5a632875f673bd8589505e7115b40174e63e4ce8e02ddb1902873256c782b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
