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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=ec515d3b770635dd59604108e3183171492c030d52fe1169ef4b18c34f09022f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=a93e805b13d8198f07d92a386b20d189f353681848fcac3c0940ebc8a5a27121&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=b64a58927c7ab0ba49c88672f8055e02f2eff2954cf8259d321ae809677bfa95&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=34fbe096e96979c8b89c730de6b3881c4bfa75a03b4c0679c35bc1994c9320bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=da8717ec11adb6be71d8db50462fbd3eb5a0de1c5f91b74113c69a9fcd25ebc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=6b001cd348fb0adcbde5feec82ae5cfe0a0cc6c68eb3ec5b062724bb2c7af923&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=444b20f4ffb97ac697116d31dce87502a54f1d604d72ad91580ab6134a2a07f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2FBKC5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQD8xRLgjNEvkrIADqUH%2BfJsw6ZOuociJJOh3Q06FOA%2B6gIgQyS5U%2Fz3thKgxO80d%2Fjf4AHGuNEfrT3HFK0mvnRhqE4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEHnnF%2FuIY0CVBUBircAzVlUITe0YAoPr5C%2FLKu%2FBENiZbOIbEG8aUUsDgMEsaGCFUWrmWAvjbSTSEL7JDcwqYFm8G1yWUgdUYr8Hq8tXP5mJ0a5oFgw9QdpUWKCyNZ%2FEoySmXRMm11cmKuN%2B1c9%2BhwG9AJAKiq5ay3lwshnK06%2FTYyTdi2AUi20ObIY8PX2Y8QrqFAWi%2BV%2BjLp1kQt%2BiAgdsdGFo4MqR8acwI1I22JVgHKEtkxwZEYQrY5roB4iTVR5s5ZWEgLXMoaCa%2F3MRwhevNp%2FjVyu4cCcYIgGsF%2Fs5rzse1XG9TP72eTMXAbYfFkhQmCvD%2BGzHV17xjNKpNgXHwIoMblmHDD74DGlKyUtouMD9%2BL4u24M5sjZ9RDJUUyPtja3R23WjGljylAbgBnxqYQb96BATU93OdNYJjP5qMRAQLK7dC%2Bvdw4Fv3O%2FekXu%2B392m9ndwrlu%2Bd7%2BBv2hPj5mENPNfPyScGSQkV9GHPyYC1XDDF96hvfpaH%2BSamKPeu08Xj73tbIsG6CjPr8k6SJ4DCBFn9MlUAxXXy%2FgQhLMXOzXPr%2BWGTY8%2FZvWUCnwyiBOvGZda8%2FoWYJbITrfFFLUFMHuHgFlyeY9DZya%2BU2DtryEN6PIVuytxqPGrGYPPVM7NbXxpAkMOmQ4b8GOqUBnfKH9Q1L7U1SUUi8x125bfuGMN5Uwe7lsy33DmC5qBLm%2FR7JQDW0YmlD9476x72fgGQ42%2FOAtgTmaj2suliuNsvqeK82A8IMINTs9vz9fJ%2BU%2BSACgCxhJ79urK0%2Fp2pDFnJWyu61iLe8If7SZXftuSQKxlZMWBf6IrggXuwL2VDv4pklZQfQMMS1m6%2FMwURZp9Waj5slBbcAr6ysVJ%2BLRtMnpsh%2F&X-Amz-Signature=ceec836bb3ab5c86c0850ce520e9ce0c71d6d11d9231dbcc0a3d7431c8b71a07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
