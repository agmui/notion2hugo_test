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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=1a41a220a236177836a268f0501f0528e9a2836242e9b3962107324de2f17107&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=f3d1175be55eb50ce89814037493d44a7c134e2043b76b3d19e675bd3e507511&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=aa1ed892ed5320efa9d39910a06708fa90a8b76299408660d5845040100e50bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=31cdf7bd332190941fd1947a68667eed607997a6fb405a1f98e300329167751d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=833da39e99b8ec235d36547b3b4d7cbe9e70d0d0802cdced7f37241e81d72ded&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=3794d061ba20c75bf2ae913b67c9a98d76b38f827084468c3ca677bc3f6a586f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=5bd403b033dbd224acda230a4b58a63d13c3ada86a944b9dc749debaab05e497&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNTFXSA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXFYYWzD%2FOIIlGiHi4wEehstFWqknbLTrvqyiifGgpIAiEAr8dKuZeb0hA58pMY2s9dKrvDdOu7%2BmCCQONsv50m6u8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE8pvHOQuCKl%2BOoAFSrcA8Z4EOD3AMxwYDQau6EYsoauRFWvG8UoVjpDgE7ekRt0WKz5ss1eJGLVeneIKzY8tu%2FS7TNLc5zWbzP8XPhWfpeVCpguewVRS3FM6olPdy%2BroitaCWfsQnrF1zX3YHapGLQfMMyNvIikU5sYtl6gZw18uWlD0jGdJ9KM0iNh5zWwO49o1jI9iGoHqkcvkESRBPTRMcervaSnWNKv%2FcVzMyGoZJk141kyXgsiWFZBc2SmNzqLc6BZ1%2FLtB07KnSOzLldOPW8E4ypHl2PWtzdYig5laMyBIxOualscAtMXs0I8LL69I9eIsxo5CtIIMk4EKNq9XLvg%2BrPbCoZt4GyZhAN%2FCGtCHPcIOFfgLHyk5DsZV17JowfIFmDBg7SilJSr0oOdUhZTZXOa%2FK9cyWasuxv4gSJovre5kkU8EoKR3Td08ajPY69RX4bwvXXTZp2u1A0tsTdMiCRAo%2FufCBzqMgtbShR6dr8SKc2d4xsCTuLscayfKwwe684EdF9ouFNKcL2xohRoSZDfX5%2F9H6vk3WxOlAiwJn1e7dvYBLe2OLqYFGIDCcJ11G880ejI2Z0mzw9Bi%2BYwsBM15Qc2%2B502zjnvCkbxVFx0VkwR1f7UcAKP0H0QRK2%2BY14CWn1nMJeL1L8GOqUB6CQaouf2wwGlKzR4BONx30FydwZCJKkgYnt9wCxGI03dBqp9xgdqT9miu5ODhuLTw6vsgRQ%2F86ThePu3Y6tRyufw0iGp99ZMtj8fGx%2BOyNDakzYYVw2UnQ92GSxv7raoLV7rwae2%2FYU0f39MgSlp00xJmUsHKnqmF%2BrXOk1I2TuR6cljJc1D3g0kPhGrZszxolDmM1SxAXDzMtD3j8p8tvew8fzv&X-Amz-Signature=d81aff08c4e844b82d5ae8b33a4d34315d13548a3f0d713ae6ed8b436e19c2cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
