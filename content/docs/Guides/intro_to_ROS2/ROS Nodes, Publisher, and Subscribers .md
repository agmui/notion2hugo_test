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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=284bb4bda9208ff622e704604d11746154f93c11b8beb4e428446ba765d20aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=78c2713ff204ea301564d895a5bf3b89d63014723801b842e48fc1dc98bd669a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=8bda68259b29214aa58b18cc1ccf9b9869a92e7c231d97197a3d3843f4b29766&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=1cf452607756df7cee2865714e862b2936eff561a0fbfd8a91b03c1fa776033d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=f80295045c7b4448f83677231daf5cfd5e1135438fe0a9d2aab37ea6efd1e279&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=5bcec928a2ffe5d284555ebbfede79e5e06ccdb737c7abbd5d6ba7ff1f2b2cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=e82f4f2467fa6f9bb5caab3c4fb93a940e47ad02be7805231490bfd9fd44452b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDB52RU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFIwmsQLnxBpXCsF5PrCn0acrTCv5%2FdO4vRBaHx%2FAT9uAiEA7SifUv8%2BzOR8SOoe2BSWFJCE4VYOaVof62i30ww0Y9UqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV9pXqMyia903Ib4ircAxaBFqYJxaPyIPz988MJIVXg0uLgLPyVf6W6t%2FpNHqCfMIJw86obWhgcaiIzIJzRQD4glKghXBWPCV2jWrpci5%2BZ8imJnhLIaFBzHEKeXLw2cGWeu71KlDVIAkBWSATt05ejxXdNKxFwMyiUjgtyhKeGHb2mbcIoJS4gBX4Odkc6L9HCPLeo8B8uZdGzfnK0t0wpHyz2%2FRjze6b0CDnqBJgKKYHkq6DetWL9728C6WrggcFAqZXYEzj42sjLvvW7BGzO0TTqVWvR%2BkRjULIfzL5rNh7BG4SqRWdTBCtX9Sn8RYyzNExQGOKONWrc4X7aIN96pWU8YGRAcTkQv9KJk2yQtVOWqids6Y%2BL%2BBusitxo%2BZucJ2HqqD9UJ7qltUDyaFduWokktNK8XetAfisPRiM0btkoa%2Fq%2BxKw655Mbesczphav%2FXT23NSDjryMyKvCDBgJVNKKCaPQ6y2J7cNjMaXBwOa6z2pQ437rJuYAH42s2DPpn%2BaRtO%2Bwm7C%2Bc54qE30TB3tyyuqfXLeh1qgysIi%2B%2B%2FndtyY1WoifGoUVUSPN8JvTLA1OMT5cFvwUjZAP8h0wjw3Y9zBTAXBx9if8gD2oKG7lZ0hqNfWlEFTrBJJyw%2FXUihUUUpPWiMfTMPiPk8AGOqUBwlYSPdKSQu27syw6tz6PT%2BuoYzygXHgiRO0Er1BoTG2qS77qQVDMDBGdoKKammsBQLINZRHZj4uhRXEsPB%2FCVLPZ5NbKo2Rm8RidMxXWKGktQTkWRnlg4cmev%2F9MtygIevkco8PCUauvxjanCc5un3YkgPKhfyAjJ5NpdskGBdjjP4L3fUrWUNIMcQUml0kPgJNz4ux8yCgMl7ti2H%2FVEU9zkbU3&X-Amz-Signature=b440eb6f194c40ac1312a453790f72d492907b101fa9828b63a2b7caa5e51013&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
