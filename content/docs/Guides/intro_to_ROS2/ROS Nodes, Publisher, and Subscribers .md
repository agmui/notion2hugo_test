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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=198448f58c788278a2e5d887e3479ef39b1560a6036bf198f96a403b3fe82f54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=c75ec4deea07a33ae0f4644f67e9049e05a103549f08aa283d2f8579aaaab39b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=d8832b8d4f7803f6338d97ac33b5700c82cef548d934585daa487412829a7904&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=b00eb4f10cdc22b685efe53398b979fe1be980e143d9f455093bfe9e8ab4ef34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=d60f47431c86288ddbb63d5f0319c617d23415a87e7ee851fcd1a7216332ac3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=e5612bfea11176b30babb56b24c50b81a1822a641117bc8237e44f123913eb91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=0a08e3dd1fc39cbefefe52fee8fc7aec6ebaa809b1ccdbc4e87667ab384850e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH37W62%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAH5UlRenxOTJxipzs5T4igTA2Rxf6on1IhTq%2BBjevYAiAm9fhdOR0MB1DBOxfwxfiFc%2FIIkETmytoRzOvz7wLikCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUwWvGcmiZzcicZwkKtwDQUVVKAH%2Bpz7nLdxcRUg13j6aWpEkoTwF31QhroKd99NtM86Dfz4biBBPCD%2FM9pfK7tF9FHnG1FuOmJXu3uQsxbTVP5h3TMgc6KgJ2XB6aAk6YF6CrZHO2RmcAFsbfWSkj36la%2BTvcwWOOgyijhO9LV0tjFbi3Ro0jqW6mfsyBhd0zG8MWpsOlE17WrD09lMugcUMSDnaTojPK1ACAWYKf%2FrDiLLQep65XsaMad7Ka8UlGPHmLWkdWfsXXEW7yyMj6yzlZq5aJRCcmJp0mwEWlKstQzPEXxoCIFBgwl1ENf7VyrkYiKE%2BoZ%2FvW7kzHLBblMFX9mtRCHualT89r6wniykV%2B5vv8eLuy%2FH1g3StdGSCxpR6oYYYKSn6%2F0AcX2NWqK%2BypDLe6Ez9WYhQVAQnaJl2EwB7UGqN7Bo6kzkwOrpibsqgrQ3EiJjQftRIlcQJeESN0pnTWVlr%2FxHyCCHcd37hmFI1afooPnbbA7e5HaapupNJoUdxmLcLRjLTtdadtKMRAw04lWnguKWW4hPHb3i21TZ1ZAPL%2FoCUUFn%2Fo0%2F48jXlzPwrKlLb%2BcSx8dCXkQW4oB%2FRFR3wwJ3LGg7Lz%2BzdxjavSciI%2F5cYFKgnTYY%2B5z0TQ5xRm79LcT0ww5HrwAY6pgHGEBWJuAjrG6MxZjhpRwoMWM19qrg6elJiWTruC3MOEG%2F4yUqPtljhD7m8U0%2BaMxjk6QCM3aTJTilpW8cdrA3TiiE74D5l7a6oFertjs0VXAyL0b5GAxm6Lcriyn2WxOr0n8EHnTR6Q7aVWqYIBtQtJf%2BA1%2BY%2B4gHeQs8%2Fz0877Nwu5n8fHLJ6tysxKnOF5Ex80KRy41Zksa7Vs20Mv761owFZjlPg&X-Amz-Signature=8edc4db890823bafc662916647eb0e88b9aff2a819472964f7ca95e20083fee6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
