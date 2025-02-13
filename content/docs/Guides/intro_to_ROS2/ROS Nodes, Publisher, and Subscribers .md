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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=1c4267b9c4c0abefc9a1fdfa3c6f025db490e2838792839cec0bbe581a31607d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=5a4f665e3718473142d92f0aa4d0a1df1b1b246ec95c1cb7a1938bd677536488&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=1cb5eea8efd8cb79c8d4c8d5f3a4e9322fe19d2ea672da6a5a93ee7f0b491e72&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=2e2f55995b11157c7f395a4ce36d433ef80c7f899f50a305090bb3766c63c455&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=972547b6ac4c3326d4752bb4cd061b76ca41099b39f49e8698e2dafd2f5d2922&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=cccb53bb33d7ea79c711f3d4c05f9ce92b51bff75f20141013f703404bc5d526&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=02d4e80d7f97fed97d7e4a625996d43eaeb3e04c84ae9ff7c0aaf0271040e62b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLA3ERR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJOYuwudSBve0lyDuQZX6wK8dWsjvStaFLO%2BEq84R6gIgK4V%2BXchmHKCtCtLjlDY7aydYBOuD5Wzsak5xoM7%2FxcQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMmTQY7qIe%2FkrUeIwCrcAzKGK1v8Qgcnm0iV9cASzJ6xjRAgtRxoTZE3Xn27IJwK%2FX362pWh5PAzVU0iqV6Tk14tp3iKBmG6HkfolTVQ9HnHXKAqoR%2FGFPW4qOSdqEcnMt5MSG1T17mmZZQCSjWXf5zLhrA02JFdoxPZ%2B4ZHk0ILlywN8Yjf%2FPFUbKJhV3NSAqw2cTTbmAHE03LO8dcrcsHJ8aFKx5x7d3LF%2BoYYXBu7W%2BSHtutxsvuZzXP5q5HogXxDC2LGTS9QCXJ3Xc2KV%2BBbwh2w2i%2B5O9OG5aqKI%2BGi%2FnYlX7rY%2FlMLV%2BhqcF0Jggcfq45KkPS1ELHT7Ann4YISyl4N1hpVcKof6uVaZWkEzBl3y1bxJ8Lw5DMVqhbbTZG80wc54O580RNRVJbFgWdd4U3gaYPN6uVzxdJ1os556uOKdMYJmNtTuS4AXOIpO2s3BE%2F1l1JktQ5TZuvNaBE3gTg8BzoRJ3fLMzerL1V1YmxgXGLkSgf0Cj%2Fa5HvfQOVoj6lXnV6Pn%2B31malbFvpzoLdtlXrmgxz%2BDO%2FZ0YiTRFtZRjJl4AsUJsOYq73b9er1EeR8%2BzjFHojget2glK%2Bn3EYLlOWstz1ZyqZO9OieOuu9RUfOGJ0eNZ94ItzTXg01rbe%2B%2BUds%2FhaQMNyptr0GOqUBBZz2DQnEVCf4%2BhA3SkbXIcdLgtoVawDQBXaSHfxcYKcMet9VF06jxwpTafcjT56pXZnA5QKgCDaoIWgoFA7xJl1SaKgQElHZMkHc6K%2BDYimgw6yJz9VrnEMNI3AMTMlz1Xh9pKxyuB%2BPpsszfbDatflu46%2BabLJlHeAU2d7Dp9bccKgjDtLe2zQ0BFXdYUO3lkTYU1zsS3u4phKGRYxbmfQJBZ76&X-Amz-Signature=7351c6e5edc94c002d1737d4365a8c887882f24aa3140c5964a2efbe1d0a3ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
