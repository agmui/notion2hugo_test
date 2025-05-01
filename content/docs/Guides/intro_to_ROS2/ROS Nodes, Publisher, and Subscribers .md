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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=71686141a21df865624614b50f729c8c829fc8f3ea44b1c3ed23cbb12bad8e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=fdb749fc9fca3eff19469b06c411efe1f14e2f1bab244f5e5739bcde14e49bef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=128e572021f1cb5ea6af596b769f9398078f2f96ae9ec5fb75c4233b8584096a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=cfdb79dfb178cf489c2203281fdc4b01a92508d651c2881751e6fe0a15db7e15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=af7145074cb8d78711580698b45df8e2b939295c0d04bab345b1676983c45c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=ea8d701d2f70a14942256d9f9064347dc41cc8a0c93453e6410e178ebe500647&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=af00dc03488a099e0f3397762e71da6afc90ea57e0460cb70afde867b529d2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNMTGXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEJw%2ByNgerJnXeLMmo9zp%2FaCVqoLCFrqZK0usDzmXUJVAiABSYNwWX8J3RhfoAzOx7C9J11yMoEKOb%2BTvO6A19Yf2CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTA6Mt6TUrM5Cq9DrKtwDCls9J6NVRPQ0SrEs%2B1RFZyKNX9cP3XpDM2Ih3JDmTWXLTLZaHdLqut9VZujwZz4dBgeRHCQI26VeyoWCZoWexX5UdrwF7zeFm2UDRAcAsog61svTEYy9Yn2FIy%2BK4mIp%2FCmINpHEb%2FCDoXq7tsa49m0r31JVTwsXUuGGRiPf9pZdMOFQbO4o3m0AOuhI0MpCiOgR6CGyXkcPtCsyk4YB5KKYz42hMt5fKOE6CbOLEFfMZbtphxwKAfvT2K6Qfz9akfb2cnuAyxA8Di3oRq%2BWfnLpR6KDROVTDTCDQvU33LQl0z5OsjoIZZjWKIMGzGt93M5469uGt4YAsA5Iq9fD5IC37B94HL599QTNqYeFo5%2BnK9C6OHbw3UI1xErA3Ml1bvvehS2KJIDLNbQVJnHfd%2FhoRYJp34fkKnNeMPOG%2Fpk5moSXEOO2Yboh8tIxfdtqXnJwS7VW8%2Bhu5gQhdXemw8y9ec5KR9DH3nhOrYLFsVDOldMQvRA2YNP9Z6d624wRK22OKDUC5tTVpq%2BAjdLrDjOw5ngh%2FQ3bGy4ibPoqbJtxcHBSpj96kOdrjaZ0Qb2l7wNhFrV13loLClbsVBwJcPM9eYo14xLJzQgdL0mOgXi5DfV366Cu%2BL7u0osw1sjNwAY6pgEQvwSiw9JbZUvW8qofUnIKeEk5zvK5F6NE4H8wgA3b4QgedGG09jvQc8ixIEYT27JhkGBo4eIA8r4q51iTbvWOJR%2B3Ak%2F9Bl10cYjiPxonwt5yF0Y5lpQnqIHRyBg3t3FY3HI3YuaY%2BeykLN86Zvur9M7jmistC6dt2QuNgOVk8ni4sKu6y5EhVoJq8Odk294KuKhyHloyNkhWdbrNIxcYGMcXfTX%2F&X-Amz-Signature=c585629e2428d881050841644111fe6026f4452d9c955038cbf3e38674f44ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
