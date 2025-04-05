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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=c85d765516be8a8b14589fd020efa7d79862adbc6bb848d00167b21266ea9876&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=1ce114bc518f2a42583fcd0a7a75af586402b4833931363ad35815fe23651e53&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=db836c53d18b356fee51664817cb35f319108e1aabd60d65d8db87749ab9b4b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=952f13d3e1bac2a9f6d49ce04505a74c4ae1d79f9996daa0c9899cebd8e739f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=c34445517b88750119503f04e35caf33cf5c0aac77b87eea006ee7bf17703717&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=39626cd47889bb238ddc1a257bfe0894ca5496ceaf4abf49c9499fc81c8e3983&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=882eddcd317501e6e6c562a694b32e7420b42689f9365e044f12941c2edaecc3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTAGL4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDWwqW51c2ck1L9NRy2Oc8b8Rg4uw6yDSQ11z%2F2b0QRAiEA%2B1MKfjgBVHjVwAvNSr2wKA7s8z9XTGXhgey%2FD32W14Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEqfjzPWk9dsFuUW9SrcAxDS86PEPIEIYYb27H%2FvVtq%2FYZy9z0uMw6J8p4JagGVqFjMI2KibQFyhXBqzmNvGf8SnhPPeZW0Pl0cO02TKiy3vOMBV2EFIYenKIS5slB9PxWZ5d3mGyjkaEwHaByao9wTaxT%2BSgU%2F73uTNB1MJSocNvypjpJtosl1IgtTwn3G%2Fa5kRBEv3cpyJEaAkGcSniDZUkHyBNb3TG%2B44CDES7XC%2Ba5opVnMsE24hB3DEN7%2F9G%2F0sFW39AkC%2FaECH7Tk1K4vWprFLhd5RwV4VG37oJhKjHG0Bhwqb%2B%2FAG88YxtbE6h3Rq83w1t3ayv8N2V%2FR%2FtTEfSO2PNQ9k1K0og5fPlc57gJwuKwOisQZnDmi8NZvxbGObNDwScAFvBFiG9%2F9t%2F8q2bZRLFaHzlAwr9SPL7%2BMLMVxViUNxEB8ORq78V4I3ERy8McmKW9OzDFvyG56jG2qoZXiCigNwi%2FnbrL3OJ%2FX7zTQjdxsYhPsV2wenXYCk6hekP0ZiOzRwZOqeHoMIl8pHOknKE3M9zgp5KSIVHb4VnrtM%2B%2BmXqhBdi%2Fc%2FC4WbisR9Tp5gUx2Vrp%2FQ6LxZ7rL8kL2eWOLJnI6c8LfHHHp7lkx0RJ3zoHn3hXRyVYyn%2FdkosIXzLXut0w3cMO7Hxb8GOqUB6gw%2ByPG84FQpHQfAWWwmaGJldCdnMWHuyV0TT%2FQ22UupIFpQUR7DaVVYUVZnUW0ehRniv3mSONOxgsX1J5XBtKA63lRUjORhrslIpTTQKYy98SVsJbxmF8MQzpFgiqoGWi65B%2BW%2BBwO2EuDl1Yx%2BacBTRDAcvXtmCEjuiGaztTSEBV9YsR22VyJuhZ%2Bs7U3gt9ob%2BXIIAv8rwEGJPz1V4a72zXuO&X-Amz-Signature=ebc7b297aefd9af50eaf9807a50a6853b92733c5b85ba0316b3000ecf3043065&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
