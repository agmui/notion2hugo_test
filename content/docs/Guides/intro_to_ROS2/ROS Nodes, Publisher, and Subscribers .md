---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=d0342e7a85f4d15491f56412ebf13a4322b3774d59d5a74eddccaf279dbbdb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=13b5ad56c58b075b6462a3786a3417286ca920a36169a889494de9191936433b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=90b2b029e82d81b81ac3a263c85f115222b44fcbe86f26d98db049aa959b1ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=374d6d84df918cae20da42196b8336d95f27ed67121c3e7b7a28343a2c310c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=01f892082a30f8142929c41af3ff324c2a8cade54a58b0478c378c38dc0e513d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=224fbcac58de860816334ac984420f5431ca72cd06cc9ad7957fccbc8d081f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=6eb06f193830b94c55b1fcf299e830202411770c5f9a53c71bc16ed68ac94911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74SACTB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAdIf%2FVZgpg8ysGBf%2FuciuN0mOg6GAbo9TRq%2F5bc1ysQIgF9sMmsCiLyK4QDdAsbibu7n8TnmOJkM7o5XHoJZHcvEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPbkhrtC4pqZAY2g6ircA06NTkvX820EgybLd1Tg83fR1%2BFAFz%2FZuI3f%2BAmRojyDG8D2iIFgZyyVVj4uKZruHKDz1md24szJMHl0ZE8FtU0C%2BXbMzB6M%2Bd8kkIf8peo%2FBNRtSi0Mkap9GFWFl8I0dYdocjiSjDuvtnDRQe%2FWl9Amin1V2noio65epzGZRDmD8vAevMnXEc4qUT0BdW2qUogwLZG8pdgmGyYs%2BYzLW9z%2B0RF2md3semsnJcKNGnN0hp9pu%2BVsGgvnl3r%2FmGfv7EO5VsGormrn%2F3fspQLzbMmqGretbgMo6X%2Fn777vtHPnZSG%2BTjNXeYNV17TihcHQPDBrPsXcYVZAFdR9GHIZedAsXkk1IS3O%2F2BSuDvAXxUTjfE3SmJ%2FGvzwjFQei9GiTQlsbRTSs5A%2BYiqpcXtjucnzkOxUgcVPXSt0%2BNsHLeWbIgE5smSDZaekmzwkByHNkCpXOWjFNfCNoXbKUwYpNXm1p65wV%2FztWpKSSozZi5UaXmX4DqDsndcjPZvWNbhL2AwaAhFFovjwXYHa73ssTIIrcGRW%2Fs3KyrWplFEFgCSsqm8q2NW%2BfyYUeNuH%2FP6zJzeHuK1GaoyGhoPbm8tUhbXjQ04cnp%2B9UwDQfvhC%2B2zbKYjmh94teImQCUmcMLLrzsQGOqUBOEvu045Cq1JmW%2F17a9594tBYuoRA%2B2Mq8p1ENtP2E4at7pNEgNEwHo0FD8VOD7h%2FBXGXTdg0qiQPHJT3S6zEpqb7ZXtn5M36bHo%2FCNfRuQrMNT5QfGTQz7nrX4FPf2iMew60k2OX6ZqmnSuJQ9LMiTL4W99QpXhMlM%2BU2lUw1iTVJu8W2THXP6wxX2IKaPhD7Povwc5RSBxXuDKpT51JnMFb0Knp&X-Amz-Signature=2244aaa64efe166834e56c4a5b3ff6637ee8945af8a7e6d61ab63a4ecd20a472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
