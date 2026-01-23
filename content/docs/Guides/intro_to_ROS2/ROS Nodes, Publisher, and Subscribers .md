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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=71f129101bd1fd9611c88823314cfeb76743a528429b0032d679cd0dfa06161f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=d0c5b4ed9d58877d91d228e931f5c8851efa05eb6c966c03da96cf695a2b9480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=44b33fb40a5f689b7c6ea8e7c564813a02e2b4017488cbe08ebf5c1690fe2575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=516b6f41dbdb9fecee4a539d0ec4c6e733cb310a47abd560f13338f674bd1123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=23968802a4dc8d29ffc29bb89f57e8de1c68fe3100cbced43fdc106ca33c074f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=d284851b41fbb462bbe2dd29be283d6874875d82e19c0a84d61d2c45b0fb9b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=20f085308a8ae04a4f9732678f48236322fd7c9d4937ca7755928ec312624289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUS2ADZ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCID%2FMXow4jF%2BBY48fX63yAsBFBJOmEkn%2FtTEk1qdgpOM8AiEA2UJstWDABzWSwwEE5qb%2B80rX64C8jmSFJM4R6G3hK3sqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4WsG%2BMIdsFEQpePyrcA1S5Y5Nv8diOu4BxMrSsXZqc17As4UkmQ2vG0q%2BxZRTDmDgdHA%2F2jMyY%2B8eDNvLcTzx8h9dcpbKD7JymlzTZQO7UfoxNrWDT05aLpsSIa2fnSn6DrUsXG0g0wHJ09aTzeBBxQFGMEaOdqnsVW5MBf2M3n7vwjae3gyfJ9ElHpa956B5xGnNKLDTDMv6IMJ2rh7qAX8Hc7Ty5RvrrtM%2B40Z7fAKbBFkmvFal9X7W7z5E9VbIvZeqWY8JeycqOnsAphcAVS00F7XYAhgJ7oiqgAyZPgsgr5oWSzcNkL2d%2Bl7it6Lce2iI8nB%2FqnvEpH6OImNIRgkrwbMLgVZ5f0M0k%2FBCyXVuOYZuHU4c9GpLrZPy5Ty54FffQyA%2FV%2Btc4wB2pgsbkJsKtrQ3X3NqD5QBYYdNKnbmZtk0xTlKTJt5E6yXj1BsT3V8BYgo4KkuZgmfD%2Fl8lIQrYZqFlNi%2FbyIX923HOHlP64b9WSq9wH6MyH08MpzfLaYLWcelVSVP0X0WG5YqGEN1CFRKqYKsp4EjAQszctZDZ6M5IRZ7lMBokWMyLrAi6%2B0BBx5OZiqV%2BQ8FnNZUqAYrLsdppR%2BujJXrVT5P1dC7ASDEJ5GZIRp8nlDtqtjS2mDc%2FCrkPK5GEMKmLy8sGOqUBZNIjiZ5xeSQB1qtU7z1uF1CL9e55e2z%2Bp8cazn%2BJHGkteJWGBgY9BJ7E0%2FEidMS0b%2Fomg0MKnoSVs3D6pZLBQERWBVmMIYjV%2FADjO6zaNgPPlEw7d2zZFkVd4qr8V6AjLV7SGyJ43%2FMtExvyl2JRRhAKwObeLNTq%2BIM1Yg6Mm%2Bv91FTh0STNZJN4TdORFMwaEW2fQx0YkZ%2FlwdN8ttqvtWEw17ep&X-Amz-Signature=9bebd991c9ef0ccb2429bd844479ddbdaf05c1ab29a2f52351f8f086cf64fa77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
