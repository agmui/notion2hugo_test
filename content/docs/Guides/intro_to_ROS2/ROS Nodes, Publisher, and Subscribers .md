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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=1cc7591b48aded1f64955e0a5527a18462062589ca2eea13a89bc5ac5acac106&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=16e2788b469307018d622c003d82bb3ab977635dd8c176aa6ff2a53dfee82470&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=b6fa8b2c8093647c15a7b4dfdbd3e4ea16a5e2578ea686b9f75b4a519d672786&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=87110bbcb9ce5b2e2c50d03416808a938409a6f9d9c6877eb4cb554ba8f9b8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=7410019d96196ebb4c2be698e803d9696c4b3cc056f963bed5cf9d9ec88b73e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=b249530a5491d41e7f701c743fbafcb9988d0941d515353034a48aaf7d4ba4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=252ab71b26e305c28a513e491f521f66969406b1fe88f1b19e584c8d8eec9eae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSODJRRD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICHpxyoRis%2FUWrrPxSiw9Q%2Fj8IfXSdFdC7bAEz8gDmiNAiEAv6PHUDk9IWvDNzF1BzTt17yD3dg7ms1HFkeUXC%2B8Ts0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGBZ59bxuVbj%2FiRRircA2jIXdrdicozjchS1HZOgkfI8R1ddi2TuZ%2BqCEETPMQP6mQxNeryaZlMLV18ZPtGi%2FF1SB48OQG8XBmTHehwVcQO3CKqHe9%2FUQ2D%2FriJIkOerSe69tRON7dtgLXasxNJymd0%2B1TRG4nT%2FW459%2Fx9Zt4WxyAiwBiGXffx5iT%2F617ne51W%2BNVT%2F5l4V%2F3LzMWDnwr5ZR%2B4gIhxoAcIAce4qIoSxjegFB1xIv9HWrAPegI6i8HuysARQDnlPqIqV4j4X%2F6aES4HA3RWrQg3IQ09Lffm%2BdXN%2Fm%2BmLhdS6WTYJNUNWDico6E4ghmFYRE9WfrkfBvYyVaZtCymPavEfUh%2F5ZyozlKrI5SlrBfeJR7mVNBdLSTB5F6zKMTDhBNl4VJa6I6D8XVoxllnQ6H8gDHCd9FyY2hRNF3OftohQR4NvYiojVE0%2BRAAH8r3mYhCD7uGCB1EDl2C%2FERCxN48DU39WveV6vF1Ebpnj9HkXmMSW6h9mZubjyXtDLZeNdf1G4TmJkkx%2BiUQur5uHSjtr0XKE6cstLSDkcdQUBtTQYABoeeRfturr901iRJtfkTgmYzOgtEp5lKmarVQZwoczZi%2FiadU9rLs%2B1di02uRf5Cj3UfIGUDTBgSTlWxRQVhCMJCr4r8GOqUBqpq8hNCPQZCofeMkG12N51HmIJg6MkwxbmtR0lkVphlxFtUMMT40KTqGNWE6iIAl09bOxw01vpqM54wNyRQ392dsoMN3EJkhsv1%2F1QKkvDyZw%2BWFbkR9xWmQC4xLBzBHmsf%2Fjeq7bp12LXmE75abKrdTlcgjZZg6RU9UDrYcx4UpcpvSuXEojEof1DaDIAKX5YWhOSq1y2je8%2FnjFEg6b24ezoGS&X-Amz-Signature=a6ce229d685bb20ae79d86f467fb0696865db44aa686296a7db935ae054db172&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
