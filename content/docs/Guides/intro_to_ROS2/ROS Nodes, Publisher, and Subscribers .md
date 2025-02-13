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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=d5008ee7459357da053cffde83e2f4a0f8c3398a2e7452c0d7d2190ac65cc86d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=d76fe2c002dd8ee87bdacc388470c5c203b6ecdbba07af9bb475f12b5fbb17c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=f3c9c45f5d44c9c534076381996fd8a4fea0286c250eebe27f1408d32182a3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=c9f642d40820a53e4cc59da2777b334ca7fbed66ef35aa7844e710b9276639ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=c4483b583bb47e082f72d7d3744a23ad0b87ec249593ebb588528b1a6d5ddfb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=7169ba83c3f92750466aef219a4903073baa81dd8af9acb02fb03a0498b25ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=3c91dbc7722239044fa9b8805f1ccd3c66b60d514877017d0b4c4f00ce40770f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLD2AEH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm102B55cPFEyATiy8l9niougjnvt45VQLvJ2K53bSpAiEA7iu7bampWaKQPFhjrscLsiuULn9G4BhgR9h%2FHVKFdkEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjCkguY7OX%2BfCheircA84kvH644M%2BGAUKWmIliiYzp7eId1sViaZ82N7Mru7wd0D0TkBT3T9OT%2BFQG4tR%2BZfCGDWkIE%2BcX%2BRH%2FKvIWZP5QO%2FWoV1D4jIVum1jM%2BfrhAFEa%2BRL2o59dozFSuxOY7ow8dCSRP1EF1j6nQwINV1GniUd70t7d5WWD9EaOx3XqD9P4x6atkjH6ohdd7u0f%2BdUR%2BMrqH1rkACLN7IIHT%2Fga7Qqns%2BdPkgn9R1yAQdf9qKAF4%2FQU9a5zyWnd1%2BCgcUCh3TSdcY%2FI72QPE8IZffC2H4LZxgDyB712fn%2BTWckt5jA6d0vINR%2B7SANVS%2FNDilTPuhzMId2IZDlXfqroE0q%2F0xHg2FeDBjf0AZ2f1UOzLwhMxAA1iRzSwOp92gqEBuxlBkh0OXOny3TmIkgAFfaJQOfnaaYBuMwdVSrM9mhdFPv2SXv2nPYqxXnU%2FxD7d8DoKW0e9te1QwjIkbidYJILw1gMLJCXpS6rxmBrkgdnkzPvBABZ4IJu%2FIY%2Bp8uicl7lUBNQORHIBw1L4GKAi%2FIabmSoV3%2F1UAN7DBG7hMqfpWann5vqi1zB2aoQswyVAPr2YhyuHJ%2B5oyYJHSSx%2B7n6mI60jXWoM76Dwum4lYuuy%2Bv1WIaKEGiOsttyMMSYtb0GOqUBLbkjUeaVJqQwDOvcTIUmzpHWasZgl3LUDF9Ey6lOe1qJ5uwhG8kOYQXFOKLBhg8HpRGz%2BV2UwFM5gUTBxxCMT5Kc4WoyWhW86W2%2FKkujKot8xmk3k9emZRlAlL7rmh7m%2Bwgi2PjinwyzimAJyRIcj6MbmmQ0eNXdu1TzzGxO8iiLEF50c49BBDnk5XQ4a%2FfROF2uVuka7z5rwxKsDX0z3GFlWnkJ&X-Amz-Signature=3c4306db2b18b039578d562bc4ef2d2386bcd3a9fabf35229accdbb4146bcd5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
