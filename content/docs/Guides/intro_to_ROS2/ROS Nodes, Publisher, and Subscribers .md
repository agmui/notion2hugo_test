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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=5caf34bd1cd1e80bc16bcd831e5cdce6bd2f383c1b6ff9d08637178627ce5715&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=212c20985552bb6dc16c7ef3b7ad0696d142423964e2cb5a9c3cd5be54058e98&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=959c4fba54d44870a6a1176653d0d36dcda0d8c07c41483b831944daeaecba5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=8818501b2df53451a5cfcab683c7c21b757a9456d752ef4e6fa01df65d6b9d00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=e7415cd678e5db14e4bad95369c1ae2455ccafc385a458ffb664f2d24aa4807b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=d59622c786029e4a261a7653952a5f7c37e6447bbb41c6a47e875b1a3803d0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=921b5c7c640231fda9fff76d43aa44cc1a849ed6d86e8bf539b6c98724de7645&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRZ4AWJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEc1Y%2FaPtvE9QDFGM3nyWOGO3lzZJI19fX2hSCYv4vFAiEAkHVk%2BFfUW4921gdbLZyiKFkx93qlafrsP30rWz7nOYcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDJV7G03F0kThqyRbyrcA8hzRlhaaAcz5GYk0zDHPN7TntgxXOgBFi1yoeE6Y7UVQ6lyk2UDNqDjgjOLT8RD7PokNVklj3NTlRjSYqywHf2Umo6UJ1HXX33mdpFd44ND8zc%2BY3Yfi4SB97qTGMEKR2LfRA18ZuYok5zx5baEK8zzm2S1a2f8WYkc6ldFF8jlmsPWehhCFWXA82tf5TWV69DGRhjbd5GYGH2ruauI4D77vKdXoHW76YOvw4Pe53jW9Ge3P2d1irIU8Yx8f0WW1D%2FtL8M7D37GVZ58Hq%2F%2BCYQ3lhaaMxod%2BozPgry8fWc3oV3wuf7QZew2mpihlXGuvEsMYBW64trMmdYZUjiPdZUlDHk1FkHgjbiSh%2Fa2MViu9%2BMh8P6DWyFIhNR%2FxTAM919%2Bo3JGCy%2B64hG%2F%2BC4qlTAO%2FP6AAOqFVpnL5LwrmBkw9bTmbAnCwhFG7SwibscpJUQl2rQQoP4hdB980sGapyJs0B3tOg4rbq87ex10rDKQmvvJW7N2QyyASPPxnR22Zoj1%2BX%2FW0RmNU8whYYnhgdnaSdHtTaCkXft%2BPtrbwPyLAv8qrxedJ4dkDsqCmIlv7OmQjbdoDhbP%2Fy%2FWnuKbY%2Bab4435iKW2FACsvsQgTBlIvtnh%2BmtuWVNHtU5pMLjSzb8GOqUBdcciaGOwOKhX9WGPKd7uZ%2FSLxBB0NU66HxX4Pkt32Iv%2FnNJuzVV%2FVou3q0MQaafYv393%2Fzlxu%2FeI5UX%2FTNMCZX9AQNqSHYiVuyQjbExj4JhSteE%2FBhupMfVZq9dFB%2FpfMU%2BHWHxEK2ArEGyY3AbrbmxcW3NWSmo6yaLB2tUQgK7y9JA9ClNn5nJ6sp7O6%2F1LklxDNJ2Z0wjtaqKJn%2FgJvRwZ9jqi&X-Amz-Signature=b721fbb52bbb22f6c1e976a512afc3342a1d8aebe7f5b212c3f119b2339b8b79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
