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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=0c6f94b7878aabaca9fde642892858cd3aed2782ba2d9001e8ed8d1597e11315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=a3aa763d3d62c27afaf203d225dc3d25dd946fdd83e8289a889cc03bafdc2ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=04d84c86ebe2bce75e7dde4d50de378cfdacbf7139dd9bf98194c1bae9b59404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=919afcbb397882f032b5293e5cf4f8647221fedf19a0a46fdd8603d129ed66a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=c64fd3fdd9c9bbd341218192b90f0da2994afb110e3905eb999365b45d9787b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=56d0089c58db4f14a9acdd251a9e90d4f68608731a6e36fcefcb39de8a03afa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=50b27cedecb79b6440a7d3c6b7c0a482cf31fa43d6c3b4b7145ce09f20cbdb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6RN6K3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFND5kJJgBHo4E10KWJIaOaZPbnWTJ88fVOlFY5%2FPCRUAiEA2oEkmccOBDJG6K7VhAzfygpS1FopI11P3x4Yua8HBeQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM8RiELc5dCZFwLjHCrcA%2B9kLlr1l9LS%2BoPhBjwgepJJC2pEJoWBzOFPhwcM7tiemUGTzacCkI3BicxQMuxDX1LnRkuMgTAH8TH7rrfwGNfHGJxUUWfYgyfGWxuApL76TiUYFa%2Bp1ncppznxfEIPZlyHwQWLgBjZ39MsmWOS1EzAtkUT1UdmKpYhBZTqZ6ff0MBN6GMReOW8DC%2BLWfCUfGBFzcYUwAQFujmFi11iYyFNABlQFyfy5nfikSrFC%2F%2B3q4IvMnHCmETSXKajB0o7YTdFkLOQRnzBSlWVvh%2FgpFaImjWBGa%2FEjvdFtssNN9staNnYmjhPXtpgtZX2Xvyk1vuXii8rCYTVlUJ8b%2BAVj98pL1YRkRAzneYTA3zR5G%2FRK%2Fz8Ug4ayLoOaaxfirFAZEV1zURlo46m1nXax7uAfXm8AUuSbwVVCYENLz0TV8%2FD3n%2B9vOe7joHucQG9TdQpx2aUboXYSSLQwfZOWk0JTsH0Z5FVq4f2N0FfXwjuT%2BTpdDLrwGZkA%2FtQO0G3dHzv3ILx7rxz5umukkvWmrQY%2BKl4EwTSdyx7BGrvkYmBzRWY9u9XSKtLnsbm%2B306CsIts5Cy2nO%2FrpTVk8WRVzACTZ3Vt3%2FpOV1bgYGR6EWaAtcCkH18g2re8ZtQu1LzMMT22sMGOqUBInxs4hAQccZi%2FXZ3IYfaV9XLJaQNuajDsHJBKKuXfGctR6UzemsfHHJ2mjdnHjCfRZDIfzPTfljJJKO4InAyi2DCuDE4k4v0EoHwXf9HvVxgb4OkWU4GvhYQTgEkuDCgKV%2BPeRvF44RTwHSaITHCeLuEKOm9s2s7bxRxiSyn50xmBgF0u9IG6allpkiMdfmoSCVsiRUsjNOC2C9sUKm5vu%2BCeqF2&X-Amz-Signature=c0f935c0fa1ec97a4e0437245b6b91057f11362cc5d1ee82da76e7bdee636d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
