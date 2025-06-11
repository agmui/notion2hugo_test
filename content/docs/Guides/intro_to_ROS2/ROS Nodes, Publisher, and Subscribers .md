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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=7fb8fef5909fedf40139b09d247974c03b331a235bb54facd712b57702556969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=75c24a18c696bb34f8840e1a5adff2c52bf5456932d858bf88e6464dc92c1046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=4458ce75f7130f9760d73b6c063f51c308cdb7b3787355604b2648d7a6832e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=df0cbce52a5110b42e03329c05a557fcf0eed72d828ac99b2c86d902bf6d3bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=8769a2d0ddf1a309460367ee766448cf18a5e7964b951a0a355946b35276b89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=1456208ac61fa08d669694ef58241b96f52f96e7495e6ac7c6a2092d1efd8e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=c6d2155f178ba195d3bf0553f27d979b6b4c627726952dfe8b71af63a299238e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2D3OSM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzGiRcGRiAhsKc8AfJUoneFZEHmjyAzfEW%2Fve4YVMeWAiBnNA3x7v1MJXcqWo83NG%2FVb5ZLx%2BbSvpF2i8JvwEAhBCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH7S7HcEEuYbnK2hKtwD3rGdHDDykcrvtMBzWTwLf3e0TBb61B4B0FSPSXzTPFahcdcte3S259hT92TuWKbJne2Iz7BvFyXDYa93ZHweaLRc24UIhI6ocpobzym8H%2BSLVumRs55DXmmcgtvIOdvje7hsNX9epAsC7WYcR5KY%2FA%2BR1Hp6LgjPsZaimDHE95MLaI9XE97Hb2Q7dNC8kUj01Uq3ucedk1JF4oCOafV%2B8VxXIxRI6WfoR%2F%2F6MpwiC%2Bs2sE%2FZr172c%2BRRuj%2FC43aGy0lY1HUNkY2Wa1EmUIoGv%2B0phMxNgblpkuILxIqwomM00Wl%2BM4i2pbwm0NxPtjlwUK6cWNnUBMobirzWAdvZZ0nk%2Ft6EFNcWklqhUj7wFdbdQZF6T%2F%2B4rOz9F%2FYpQl%2BY2Pd8TqEovbKh0RZAfrpRVx%2F8SY%2BEXffLTVWjafgLAtBF24zh4Q0UlyGhtRJpJw17f7sEenNkwn29RfifcMheqa3tYbxEb%2Fovlac2gY0g0M49E5vT1pHW7OaI5uVSnWnA%2BAnmEqEW0D%2BrzBcwczloumYjfMN%2BNHnnIFUXx1Qe2cQs8DjkSVuVfMil%2FsOhC6nOiHwYlbbhRdrGl47klW0nZzI9FURWpj2vDITjq6ZMYqoce3MqFWLAnnXHzxAwxbelwgY6pgHeFra%2B8mINFhSJFH6kEzvETI07iom8o913pQxpBUsCJEzcWDfzEc9xn3vDi9lZxzoe9pFZXEXrmAU8rW4mzwNiOz0INmWikGRh5g1wCW3rahCUtpVCQOE2Y8Cd5%2B1GOgeeImOCjjN1ZGo%2B13FzkOAG9RRPkHyhxjn4DJXnKXkd2Eez%2Brq5ZkjZE8L8zjU049j1hFuZcZgKLrHzD2wgPgCZlo0kyr7m&X-Amz-Signature=1b51cb5c634c9ebe0432ce34151b9ef4560438d37351905d2325fa2d0a1c6159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
