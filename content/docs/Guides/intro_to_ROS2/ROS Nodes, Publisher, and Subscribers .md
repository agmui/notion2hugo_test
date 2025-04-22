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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=2df1c99c91b3b3b1c06fbbd9c85fb3fddbbc920555472e2eac8fb08e5ce7f415&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=9b7ac2673e18daccbf3a0209523771e82d829723c607e7659d9351949b115016&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=8b47dee767f6a32884f8864ffc85ce2df25ee9982a7a609d9922acad6b75f2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=5df223a819255c190cab3a0083ad1d57b7cafe31ee75afbe71bea2197cf58742&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=45b150fe14376d25c0a6ecba03ad48c0b1d007eb8510157288efa60864204de1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=77690e1e457b5a70838922b308bf61cc944044f45f379e7ebe8a9d1d3a78c192&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=6603ff6769346573a012f55fad17b40a4538e862c8c26fd3623eb52f83fdad45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVX73F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFIwlGdSGlNHjaLuCnckTOtMo5ZxxLaThAr4ecA%2FRIdrAiEA7SuocyYnz%2FhP1W1EcUgMkGAwCFIXaDm1PUMWRqReccUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtorEikDk0Nbsa%2B2yrcA%2Fbeto7BPA3buUknWg44uqKW%2BAcWg5nNM0W3HgbclftLDP%2Frjp46tAwZJJEplfxdy4XaygqFH4U8C2bu8iWVVQ6UNyEhhJfNvTPunu3e3jGfHQx4fAQ7XSCbteC4zwlLskeoZC9dRMA5IZbRGd9SPFs9VUwbiWKiAeUEOwy9NphZiCf%2FqWK7Y%2BE%2B2IJNMvMxTPJsuvL1pEOrcF8saf%2FIbFqtx8SGrRYFPlnFG3INTu4QI0BE8kfreEK%2BL8b0BdLJuyyz8qSfEbiKkmgYoh3r4scrpfC48fl1Z6t%2FXQ19bTkw%2FwUQkM4910WQBX8ZXUsmgUIzxGg3EYu6Y8U2lM62GY5G07SBWJbugnNxBzx4MxcGZvW6UP2Uy9goMhg0l2zs2y5uE44KGcwDXf84f6Usp01ic3X6%2F5pC1LVcXa2f0vCwSiKqR921blxfr6hpDB%2BQrdebYFJffQNOSaQjkwIdxhLvSKiAySD86NveTNUzV6UidVfYdUdNsmuPsPkBasfOpQxbFn%2FyzLE3rCI7SkmHpg0XKMddAXaibSzS33eoXjvz%2F1S%2BsbO4s7JpANiajYkBTwXTnjTqICEBpP8nAmt3lo1uRolHkKB3oAEDx6qhwB290%2FEcVN3c6lMquxMNMO7vnMAGOqUB4YpE1N8QL2IcXi3ml9xuY2YNc9ABUDhGjRgxhTwcvqEzPW%2F8RwcQm%2BhWU5%2B324F4iskk4jpdT902o6IwhT2lXuqb7Myh6llrekkPQw2B7DneSSvZQYyzfyHxDbaQaChZHLjhWia7z1C8weFaHhV9W%2FC4aog14c69XvLaaUC5B70fAyz9cLNWP9VjR50HNJ3YgCnDd14dlHr5%2Ba0rk9EOXwtqOhRY&X-Amz-Signature=d8cf772a61a0ad99d5e5905e4f9f59f0590aef787ae1f1fec5795047f814cc3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
