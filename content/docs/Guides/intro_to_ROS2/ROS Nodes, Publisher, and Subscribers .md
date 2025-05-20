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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=f7be2eefed9d1959942b5c0885db6a87fb00c1d95e6661778e18108e0c959ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=048d317c34c2cf6c4cdb8efc214947d3be0e478432c024639a15d30c4a83c1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=4937c1a80b10d9e61454a503724fe6f6b3e50d5c84c185c08450e04b06f70c11&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=97536d56642c88c7e14d704810b3d7c31290add44ad91b99be570be5e450c8ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=177e19235b3fbbe9106c2641c019efbdc84ca425eaedb86074acd12d24a40ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=dcb963639717168e41343110f0b7188806910d57fd9593e84730332ccbb762f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=aa28c17647884cb3d2b54524e495d112a8f4c03b9c7ada565393850f5459bb00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSAQ3N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0PtlKr7Uum2VrB6Eo4X2EjNDgE17i1CXi61nqvX9CGAiEA2scEWl8Gy9Ahsfa0XQlQNxscWTRMKgSAdVlA7J7CKfUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIUgPk201wSp%2B1CiyrcA84jjUsRzXPhikzAL119XsUbH0VJDQEYYPRioE0gPfaMNhdQGArzBcXxgeg4CwoFNvhB4bwGf%2BiWgPCMADN0yXGPztpCsumFDurdEB21Foqz70ui5EzasYuIYIisosOxVSjgphzvclHJ5S90lXPfkxOIEKQ0qshcYWbsuehS6IlLlYFwPEdIutJaX09eZVUZzoAJuWBHNgEKs%2FiWAiohk7dl2vofqsnZ6tMQDBRfTdxSUPDn69gtZC8dioCVwSFmJBKBKuiDlOTusFJWp%2FtDrOQUmJ%2BdfQIpApJnzHn4gIW5euQbnAZ59pXRhEjPGm%2FfitPYyecqxnN%2BtfEm8Pao4wc6Au9XQ%2BwLHSi0HDe80TolK1v2%2Fd1oSl22KjKoyis%2FQAcVzlaTRWZYkKAehgi9Ck3nW6h7NAAnEWdR5ad5gDXMRa%2BG8FsKiXJoLDuwIWlX5tqhddM7xVS91A%2F2UE40Gjx7Ud92oBMVGBicd8vNL7uylW9LJQWUnYlq0wSDATBIs6V1l9OeFx1V4QAPygyU24LWE7O1ohipcVo4VteXRylKkSRUrDZToZeKqEW1m9u8T46qoH3%2FWxNWedGj%2BO9g2KEP2xpu53At0RaoOV5J4Nh%2Flo%2FUGOhaEzlhccd2MKXLs8EGOqUBbDqVEImc9cOfWlj3bWyluw11IGhoBAew0Uz0sadG%2Fybh6zM0PSqRBnDLWU9InZUWq8MnlM%2BUhiQhlOeBIKz8ybSwLum9s6ZMeMVkoK5ji3T%2BqhtYA0QP5l1%2BjPtqtoKAAnufjvoIvWXoKfxqBhgMkFoonOvoF2k4Qc4UwB5UOMrBjumy4am7Xkv89%2FIUrS%2BF5sMPKHSPp3DSVwAp4QIhY%2FHoj9lr&X-Amz-Signature=af60f06ed076f0e39e84a75789cd2b146f38d62aac3dac51457862541bc64c74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
