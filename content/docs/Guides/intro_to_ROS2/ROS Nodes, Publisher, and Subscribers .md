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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=4d8ae25d872e73fe4d371d8195438dfc2101609f5b6ae2c17d80a3604d00d287&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=e10c40ff9f003e0e64184b4207281b781f7c904a0df4709d534a31d46cc26640&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=e4b9be74501e6f6cef0b17b95b50b174a70c8b330cf94cfa2baa5cb9f6adc7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=e3a5fbbc8e769324eb23c7300b2c5d215ef7a509ea8a942d39b28cdcd91e5ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=9a9b0a9eb41b47cc4e6e2ee5c5b51da560e80945e15db9741da32fc4afff54d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=53d6ea0a588cc35a852d45c0455be16dffa7b03498d0d1872a27ad1b874218bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=8bcbe1f9807ff617457c33adfc9172566b4f040a31471dad42c1ed3ed1437094&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4G2HA7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCuU0qKdJGN09yQUYB2cG33dI65fbXvnt26V33xs4jBKgIgHA9jHeoNU2a9GRqQEdrxVQ%2BPadhF7lb0RqmkmX%2FZyxwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5BlbCkDFouqmKuLCrcA8AyLrD340ezVaSeLTrX6KLsapp0e709qRjsG0R2A%2B57ziqjV8SjW%2FdesQnZfmKAKv%2FXjvHxKqFAim76eZKQIXyqa%2BlRJXVJHfvfh20tLXpc1OVoI9wNVy6Plz%2FLxdERhmGQsIbQ7KbnpyUR7FVKwj7pmrzYFrYcvNDXuLg%2Fu74cLGqyCC90Kh4KOSp89JPdwE0veMieUk%2F8e7sc6Eh6vBzklBJ3J34mRN9BU61RKTVeAs648NXuMBaER0wPNWDoA%2FLA3N7tKovy%2B8XOHiv4p3CCHMWNiQ%2BEhTnR3X4BaucZs8whEATLyLfC5hTifVKMMWPwVkl8fFtB%2FYMImExQ%2B3WkFySh65d4RCeyhfbUdqYAFNqDCa5XKj7PLoDJE%2FSFnNGyHfP5HBbgO%2FNMZMyEIAHlH1Oo2hxt2oGp5tOS5nobAMuP8tUXC5oYheHoQgGIdOji8pDsTfFFhekGqBUZ4WGQAuaqcHDw15SrkMfx%2Bkx%2BJbK47%2BcOV75f17INPZMsoFoBGUKqV4uOXvxz161pbDGQTnp0vxIuW%2B2eXiZsELDGNS%2FDVr9fhNvQWmWRAjBioBDpWpw8lkk6JmPJLFDnBi55jwVkrFKvMMyp%2FWFIztE2fEWLHfxP2ob6e5vYMIzulMAGOqUBRahR%2FTfef9dxLYNihZ95YgrhT0RT2x2w5631tNQve33sKAwu6f4aQR4N8z7DNCPWCMwocLUcx4xlfGJd%2FGXENJH%2BbfW%2FAZA9b%2FIxv8M7AO7dT32CpK2gQNG6916qq1sFS9awtb5%2BHIFFGMtDg%2FUD%2FOK7ff%2FqdA1n%2BJZKZMIp3aBiJGf7h%2FFrR9QaQMBLeWw1JMNs%2B0LPii7v4fQFzTfwpY3JCqLP&X-Amz-Signature=56465d7a5c71f896f29014b7d1609af10b3692b1d4aa7379421f005c22c3be2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
