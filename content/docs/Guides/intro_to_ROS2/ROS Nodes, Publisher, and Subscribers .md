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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=765bf2fef6d69f49a388d026a07cc1c880a601d3581fcea3d274185372df8e94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=a9ba7ffabc579a36546b85f7d64c35c6140ed11ff4500feed74f76f24dde558f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=6fdc0067203f83ad2cc02734d8d68bf4c440173498ed5fc4eb0d5bf89168b5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=3452ecc79939e892575c016c4ef5edb7ba6bc1e5ac8acd688dd56f415c99c72d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=d7a0898ed7c9e528549ed2a1eaa167bed43cbe2f07055479475786e708e51d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=2bde3a86b9e877dcd7259da1c0eae75cb0a49b9a6233f92655ee8d5030664e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=f4303ffec821ac425170c1948a16f47597d69331ea3939cc2ee29f739c33e4fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUG55OS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQkHJk2APGnITP4VslYDW97k8dtCxB0k2oXFIldrVh2AiEAy1bRw18JPGMQF7nTDuTLj8xUjYfVCWNYuc0FwY3UAzQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI9xb9PR5AzDt4clXCrcA5CgBY0umHxWw4SHuGus6RoYQzMheuq7zOmhTCE%2FzEmcKUE0sh8FbMLoqavWVouLtvBwtSKIwBzArVE8eaHHffxJq7Bj4iClxLs3Xbl82C3p8l7PrCul3auRZjiEcScKfIlBS9zoyxXaMEonC4BnCpuxjMMfFCUwyo8%2Bajo7baIhWtnHM7Y%2F91zM8BYAxiCExPnxdISRFKVofY1hNT1BdEggkTzAamKwbyVrHTzKwaTt0BVdMhGLQTyvoGLcQ3kteUMltFz0Y9TwwkHXSJU4r2algAGHA7d7Mr9H4%2FXhNbyW63HuImZs9v%2BbGMj1OtO0LUEAxVtDhmYVnip%2BefLXBWvFFGIvMc6LeUKAKc9RXxNXP9km%2BYzBEMjcObpPOSOaGgCJ%2FRi%2BanDfC9uCMANRD5KJUohNF0350o1FhuvtDJ2s%2F%2BgtjPtQUE7lNhW00GpQcur49HqC81kj5zRvBCTmXZzVCVZEUyKZZMN815fepBed8LHTxyBQpqZUzHBrSKwfftowdAEHvL9nqTjvvroaM3IefZINrRvwTG%2BDMIU12%2FToDiXafjCjIfRgIUbZnC1eUGoEUXEDiz%2BxNPwd%2FWTfb2xS7azbDvPEdcLyIml5hvpNomVP5eHlsLqoFvVoMKS%2BxL8GOqUBmQD6xYGuiH%2FzgaQ2F808PaxCX7sv5E%2FbwTF9Nnu4JLI6jKfvmXqzDMKcE9AWDgUa7GB7ew%2Fw95ZSa6JaCAOGr1gQqS%2F8tlarUHlBrPYLzC8vnyUfwPS6Kl72LkCJ7bzCd4dJ8R9qKO38DdJZ5BrT5blQuhFCv6uhjVvFD%2FToiHXvbLyUJCme3P7uqtaTi5fQixPQ7gSBl63eCqiEqO%2FwMcgjNUNQ&X-Amz-Signature=26f3619171c248582acfd42c0f383af0a9bead0d83e6e784305e2abb474a40f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
