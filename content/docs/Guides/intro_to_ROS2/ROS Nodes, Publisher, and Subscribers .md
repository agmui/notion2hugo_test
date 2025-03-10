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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=de0026877390df82fe8847da960774a50437bba35e05870ab0ef848ce67882c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=31370e79e056aa81f53c896b3b867d773daaec5d4a80d8f618993a13713e47e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=c6aa8017c9897db8da0c31be1fd58e962b4ed55bf774f2775d684ee2f1c6d2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=bd9f8cc1b0a074bc9c6178fb93cf5240dc32fd5fe55212cbfe9c4051096e1769&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=eb537a1c86697797178b6ae0687d52ee39b885676ae7cb1086aad0e87ef56058&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=dc936fbad4ec9ca4d0b1685f61ebd02e6277aef8645425d70cf7cdefbe89acfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=116a8d76a1d65e4cdbe6c7bfc4b752496fb066a060ca5ab15bd4452a7ab0050c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FE2FWX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCO8iEilCATazCkFgyf1gGY5kYCoMvjomRyc8OItDuGBwIhAMljPYr75LL7BNjWY75PX6FPnuDeMP%2Fguj5WzS3J%2B4RxKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcMTEW0ZbAYKe2zrUq3ANXMF83D6kosNbPEfyciLMXd0qY553QMKV9QxzrzlXF6JYF8DNnPeSJlja6P5tLb4YlsigFA%2BAdFiSFbWbycMWP99ATAdSz1ZkpxiphwYJBblqt75wj7SBlzpcWXkxj6y3VdLmRLW5mgLgviAhs1y5tE9SL1gYBrh5G2jPECxA%2B8yE3sxPXiyx1KCTXnskLvw%2Fqf2jBFPgz%2FUaTi5TqOPhQoTHZrTz%2FS5ANhw57AISujia5o7td8IgY0LdHsgGSd3YMqkzNP%2BxntAnHim5CUYUhGdKZvCMlTM1Ia%2BzIr2lyFD8bksAYrXXa%2BfNnNT5BQCL1HVrV74lt4%2FgJN%2BcfnIQzs5rExVogtWuaJkrL7C%2Fo%2FEIfN9%2F9ROuWWN6%2BbQawJcvtkCHmtsLRI2cKEneJlLCYQxCqEZdfEO%2FLTLCQLkGuNtk7w0X4Fyrg8%2BhonYk%2BcywhA%2B%2FqbLgCylVURlH0%2BAbVIDgQBsQd%2FmXx0Ik1QmtifT2prGbXdKiHS5Rt0%2BSWCAatokP5%2BtOihx1V6O6Dc38YYAm5RoNXN%2Fn2LbHsSOHWU7jplgkzLf63YCyny9MZnIQ3vJO3TarzmlcwXvy%2B3Ir2hFxjORxagoOHyQ0a41rh49p0%2Fbdmq%2BT7WcdD0jCpy7y%2BBjqkARUeJ04qOC3c1rzgxlGmL5CvqD4G83uofZOOYkW67Tk9KjmYusqJHPju8GAOT5jCDmgZs27YKRVJr8bgKBZw3oyA%2BuQ%2FJfpQEzwelWAKSVdr3tomFJ%2Fm%2F0Tc4U%2BpzSuw8DHasbFnIYb%2BrwuQgXfXejiMaRrntwA8ze1bIfIjt7%2Bsbz4OgDF6NQk6CWwTgOsVdjbYV64CvMsc0WP8fGpegn3FUJ7d&X-Amz-Signature=16f4152feb984fdf1336b6aa770758905fb92d74429c2b95851870c2f468ce1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
