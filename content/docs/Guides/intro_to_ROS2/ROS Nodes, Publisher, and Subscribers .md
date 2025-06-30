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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=138b06883307c67652bc416f69c41500e89a96c2229bb94baaeeecd30eaac8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=4146a846f95a9bf48dfa9afd0916e4085683c123796b59bca4000486eea43906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=23273d51705aa5b255c882a8b89d050664c6e6b9e30c640fc64cf0190af81217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=802871618aee6998fab9a146f0526b0b430b73d37559f886073f742672603872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=bf7e590f48df6b5aa89e407a12db8781d6355ad8b207c984d921c623d7967dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=c140256c0503fdca1f8f21f4cab389b7c3b91f831c53ab3b25eb88c71cef02e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=6f138480b4a8a6572eb6be4154bd45de51ee1e3c202d3dea35c1a4e991e3f797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPH3WE5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIh%2ByA1%2FGQ%2F667nbEejpFihgpUmlJMN7zn96M%2BA9gt8QIgKpPTR%2BlJQuaz%2FmWxpzfd8sVbzw%2FDNFdvNn1Iv2COTQ4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXjirSIG80UWUtTFCrcA5cnTSZw7pfiYexaefwASyXFnLcLsgGq86fZ1HBZO8zymENTx3T8Clbn%2BKIL1DLVTjjLUgVp%2FXtyEVTPqilxPCqGF3lgWViBmlYb95Vakxn9EUmVFl%2FJdImRnl92j%2BHWFbXyR177n2LkQX8PmoVID36C9hsIVCouJ8VLnnb5Pm7NpsPxZgnB79BSHTF%2BnjuHgjbVSD0ViQqZjc8THVkVCR%2BCV8Ag2BIbU%2BjLtf8Kobs%2Fksni8S4t%2FAYpxbDQPvBObnXagLUAonWEqy90y6iW0Xx1ulFlJg8tbuX0DAo%2B48lxoFDBghqwtpFFjMJ8aSBlSXUB3Nh2T9Sv215VAGwgzDvl4%2FpsIxmOxAmb4A4imc%2FZiz4GeWo2iIB8JbBClzrJcItr4HQrotkfl6TBvhWc1ISR9NzbKxZ%2FeUKhQs7CwaajOIiIgjZ2z%2FuaINdnhnoYFwnKr78p9oRIAsRErCCykwg8SrQX%2FU1LExEMFMBlYIpbe1a5ye6CkEJ9Xj%2F2%2F5H2Wq7tAzIPm5nCs49ScrzjWNwX3lLDlo6SqtzHNMLJfHVE1waB7D8RYNI7YoNKQi7UnWrOJwpYigSvbRCVhsC4zoJow%2FrXm5ChMwn0Xj33hfB%2FVphGrVidCOlSDf0DMJWjicMGOqUB8lt0oiOW0%2B7kf9Cm8MQmyrYeMjKX0nJDyJYbmvU%2BWDmn9kO8WLe%2BY%2Fd5v5S7%2BrfkkI6PmZCsfT57AxRfhYWfWc7ILynXLZpMVu98ACVKTDvEQOcjGf9P8MysnjAT5n9mdiYkGvzqq%2FPHXc4A8aCgf3CUF0vPWDd9HJ6L3kdjMW2mxIbKCjmz1vnJQw%2FPWESPeZs4vQArytU2fSeP61hbtuwycS6u&X-Amz-Signature=782b84f3e0797a8029f386f846076a9065c8e7db1374f8efc4c4a344ecbb2471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
