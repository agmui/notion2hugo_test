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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=cb3913c4bb22a281cc099c7f4a51787d6dd5618e97947428d57524cdb225c3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=c8ac8f15abac3e838d389ebcd6aa2d155065057dc4d08d5b93747ea6a9ef6363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=74604c46e7afca5b24bac9e7aa03c12e0e0bc99b7da7fe9820a94c06a28e5221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=65c0a615cc2597dfdffdcaedc97ad8e5e9edb089e4e2d600ca125bea67c00e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=1c281265b462cbe50d5d8853987f865479122b9b194d054120d4bc4855345863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=ff4bb82b887fad4332e03a765a5c61c16c259da67aa71195c2fdda2d6f710d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=1e657c34fc8a7661600cd2389fe895cbc7e995a089b31da936ae2c11c8abeaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5SO6SL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHMv9k5Br4jZJHaF8qU9xT0c7hNSzGx2ZMuAHFr7JGg1AiEAoBuWuomXL7jaDmjLWVwhkwLbbJV58ZXY9hT1AmurHnAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEsD7iuvh6jqz2x2fSrcAyrPpsgjg6FnqV1O3agCrq3NDb%2Fb5FSno8xP9Z2dytKABmodYAJSBMSJJFBubDxFich6dquoHZx7TGNu9ulzyGcozDeajeyeIPKUIzHMKoTX5MyempWwLhi7sDpM89eAhtbvAwMiPULdNUDUYLbs5%2FTa0fN4wmjM3irjiz%2FAYSKAduGB8tdHvqpcV6D2Ei8TieepZ6yQ8owp1lZhkYb0YMZyfB0v5B1qu2APcuo1q0qvCkusaupeNDLrmDuBD5iiWFCwJy7ec4vSbcEhgIUM1%2BWNVHeK%2Fwy6xF7SFR9A%2FR8wUO%2Fqdc60WxWvuGPHHOxlXkf6Ycc1r3TTugbSHJuBOnhCDMqSPR5DZVA7DKvFySP4xSp9YOoftWzHUeuGM2LsedSu1kmc%2FquCpsbvZUdFuwywTRIHZdpYCBshMBxtnydSwyt%2BIg7QU9%2Bkwa0PGBsvGrveKiNEuh8YR0B0HKhYiMcRkQgB07tMZFJh8XESlM9OiK8eVzu%2BcB1j1AaqUUZoPAQhHr7OXbF4oMrKZORIOhcl120%2BZTdtys83IkYbwHUbkkl89JkZmuhstM8n2SGtXtOZC7kCYJ3LnhtIvSvfq0B3qJfzg6k%2BMmxiOXblbCW8cQvMUjsQAmbl01GeMLe8m8MGOqUBd6oN9Fv2uMFF9l5LUX1ZnXuLHTR2AlIs6AL7HSR3mHQObhrn6jaLNFrsnTpIoOTWOJZPETWGhXRaL9Ojq5ll7huvYpTEV3qPQhngoxZsJr4tE%2F2547XnzKP1xmtO46II8cWYudP7z4OIoZcSrsKaZzvUK5F4yiCPi1zjkelxMWuoBN6sNtMeIVfy118koRhNaj%2B81MhYiIaCYEO7kFvdiv7VQkzu&X-Amz-Signature=57fef5fb08a86c1261d7225fd302f54fa528dcba1f1891215eb46099927adaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
