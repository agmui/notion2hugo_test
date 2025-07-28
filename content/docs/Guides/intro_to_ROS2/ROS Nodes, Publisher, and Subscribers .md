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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=04a540a7cecf8ef3424317cbd1432a869ea4964ed56857fb59caa0c085f51a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=3a1ab792ef93f3980eaef014480925edfceb22d843ecbe3cf55bb246921beb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=b884b56e2c6293bf799fefc18ffed52452da49bd8bd370c606037f097ed7f196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=6dadcc11d7a0df5d9c100ef6300007190d6bdf05662e085f4f37de68475f9d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=bfec8af9dd78bbc9a07209b47f26955bd93d385ecd589640f43b3644ff19655c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=de120f286aab228f76ecdb502041961d5ab02563c6135e91ddbe347424b6b0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=8e4fc3bd05db3d1dba9c730d51c9cafdf297b038bd5a3c372df6f60dcc5dd5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN64VGBZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9SnSN7Ho%2B%2Bo5Q6fP12iXtCddYXPWlTXRR8QlVGuvfDgIhAPWWQgvQzD1IkinhQzS1JFuYZZndWttGHJO7Gt8TBr6vKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEDQkbRpQlYjfvCOAq3ANBtHG4Ma4HHWQvbv3d8CXea44ncp0X3rPszW7oe%2F1JC4BlzLfYy8iohs92%2FEzb6XCz7PdqJ9OTt%2FPIzXqxHcf%2FT%2BuKGIMdUTmEHUMAjz4zYpnlvbIpUBQ9A2Hkm2MqhbwkzurDw5EAcOt6%2Ba%2B%2FVDAdV%2BWIkDjkajOpK1HM3cFGxvV6Lik923TpOomZrGIWXomTYkF%2BOpOZPJvbwFiAYagUMp1ZXBRjhRnNqV6f06jtYT4uOK%2Bn%2BlgMRqzxfLp2qb%2Bf6EDIT3GVwkCtADesCHgK841yRR4qS%2B4qmyg4gULDqccbS0Y%2FjRIcl45I3Pv1id0%2F8ks7kQQ8Ijl6rw45jEvwxmeWLZdmIcjUX0fc5L4BVI5ER9jqAkf86xaxZjlUcHkWGXW2Sjkl5xuwNNyukvWz%2BTOqejriO4pTfgHyVj19IZV43JvyotprBWOcKO%2F2kBeWZ3dkPyMtZs2NqMJ7XgBhOeqbXsHTz4F3yG8BgrvZ2C7wlZAXT%2BcpzPnJP857BDl6IuRSwKu6CH%2FBIi4IxRJk017wQtoCE1cIKN2qJtquVHePWcl4EDHKJohzaVrtQgWAN%2FvU3V4WxY6OpkvVK%2FNQQ71vBoRGT281KrByJtFCmv%2BdxQnTAdQpmZHVQDCuuJ7EBjqkAcwGu5BemRHB3lpLWqqcUTXI%2BUpRfHNCfzPwF0ugfRUnGMNmZ%2Fx5mWAw53zqvrsQedyc28JpV9bWkSp2KqkNKgv3PRH855AXWTsPk33o0MnjdphJ5SJQXsWLsO4lMlK1XJG0ggB3qNGZ3Kdl8l1Gk6k9LPt82KyNYVkvz4exB2fefP3HE0yeGiobvoSKpGhskI1M8f2FFiQWooDn9GRa6eJc1PoB&X-Amz-Signature=343d0333fa02e6e1154bc70478d64bf6ab4c3fbe4e5b9f08b69638f26b305dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
