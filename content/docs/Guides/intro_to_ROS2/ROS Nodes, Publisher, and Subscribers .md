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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=085ba6a6075280b94877b95046e0ad9a6a2e5e074ac1f259d2c15458904881a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=3c1bb8912b60d3a1dbe135b748f47f97703ed6c6eb760e9de2a4df7d4c01b92b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=13b8575541c807e0ed2a8e14a899cdcd649adc11ff09ecb5f3ef0253dec5d146&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=8a8d644415a47540e78fe5789b40d867da0109e213a9e65164b00b48d770e5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=75d6f16e2a2640b601b19dff77e74c2953858073b0754be454b331b1c4e59a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=9f39e221d0260de495227ec73391c8f94c18bea665c418ba3cf53f3244d518aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=7c113581a0ed40667ea4cca93a6188cb02c13a1ace9b5cfddb57eebe9e7d2758&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI66CJWW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDSe5IXx%2B7XVhNZJnr1Hd6tIhFjv%2Btk%2Ff3N7rGfMNRaCAiEAh9zQuvzTguv7iSLBUZUbJk9ff4kuTo8YrXB%2BX0LsTAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAIuWV4OKEX5UzPaSrcA8JgjgDindYaKHXMk1kh1hUnI5SkGeY6Rly8oi2HbMG%2BP6ZRs2wGlSpZ20txplGDMVE8h6WStORvs7fqeNqGDsNI2n6hKgbTOAYsd1QUoqchIf3%2FoeeyZBp9uF8dNcQJti4zvNrxUUOpc5Ls7X1Yi0CRwNmUJmDG9ppesLP%2FMlOGRT7uXLozgsHmmntlJIQwGLncRGksedH13jkKF4bMBDbQSePGF7FOucoJ8Zvt5E%2BHij8rGHfgckVt7hjDv2BnnyX3EPRnd7ohvTGOAWWScrgW5wT3o5PG%2FmM5Tin3ROJ3ot39465JLcGIp4RavyL%2BqmWvl1gY4w%2FQh1shRmUi0d61XQTlB8ywyVf%2Fx16e41Lbs9yP3JVhhpTfn89GVrGOO5rcGMljzEUJCigsjMmhcjdU4xkYJAhr46B%2FdchpsoKoAVQbU6LsRxmqcY%2FL4p7%2FTeVm%2B%2Flwncb1YRrAhd9AMZbW1UFay6awyJfdCRGk8NN%2F0Rv4sbdsKvNY6%2F70M1S5Ye5xK9P1FV6NVhLt2rSnmjhjZN48gK24d%2BCO07zj6E0mWIh%2FFzthc%2FhhYRJiBNVdet1eCd8iDSudkL12cZGKnPDdef4oZbDeaGLPHeTknJNaqTWK6IidB9ek0vrtMKHh1r8GOqUBDHwXMKPkrrp6hnZ%2BT03bgT%2FBKya7hNGi12xUNtVchLYGIBMX2rWVE2GlMpsrY4mhF0hgcsgJd%2BVBbhbCggZQMQjWsSQJQ7IcBAgIZr%2FsCGLy3lwGW6TFU32rs2xyQZKeFL7EMgfhNNAeCGsSoql3ibBuob4zCIW5XAlHx8OZZiD4JEqTvW3aSx6UZ5uqYpuKCe51ntx1CgTJwi2riX0aFAYCk7C9&X-Amz-Signature=2ca208eaa437402e74b04f43a9040f2767cc47fb6ec37176011855d61edcfaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
