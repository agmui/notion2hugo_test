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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=e71f1881388ec2be66935e78cc14423d998a8d286207a084b22d2a3940ba2bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=91e17ea54f49cee783fe8c138b6f74ad67cd35e26e4fcfe3c7813b76b2309d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=1e7132fbacfed2aa956ce18f08447573557618b77aec7335d979350af8e93778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=07cc12b4f49338e1d5ff51aa79656bf71d9fb05dbd92ac3854382367324492fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=3dd31e367bdc3152b2dc6b92b3cf14bd7b658a088677af7372b508e6bb0c56f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=7318b0e8c12bbd0c42a0eba9372452a9fac8d75c4c756d06319ad3fa07d48417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=c73eff935077ad8562aa1a8f10ebc1c2ca0bf077791fc4bcca98b991d8d1f15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WYXSHB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICq9arIq7PoYPR3n6FZKQMNC2yquJeCDQKMT%2F%2FGMc9VFAiEA9Z27IBDSfzLqUjduiv1y56gxhgxcUalNnMscyrEer8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK3tWXQJc55l%2FsvYCSrcA4A0pBdD%2Fl9T4Pc%2B8LIZC1IYB7wVftI1pseM8zzG5%2BkKqImKMkkvu46iW8VoV1T0V%2BJCO%2FuTXW2WrnS%2BF%2BSVecNiFfUoCsMFjbeKaMBUcHAq%2Bv0Z6MXTOqT%2BNOYOzqNr6g5IbfixXUEtcW4Ay0ZEniUVpBgQBYZzGQ6L1%2FkJP8inpPwaM5%2BlDgm3gGc81s0v8tsA5HfywflDWAeQskAlaiVlgxZWNXAp2ZIFrZltr08ZNWQdbauDA2zXhlJ4ZwT5gnIe2ezqqQabF74UtWRK0RCIlECnr3Uz4Dry%2BqN4bZRjfe7uw%2BdTHvX0PvGBZWIAVQd9Ab9Buc1lhWzbwn5GtuQFKd%2Bg12Xi2OMsbHyRn4omX7Mk1hq2o8LX%2F%2BdKt4XXkghsKkyU6P1HyJWj5hv6QzXqAd8dszGpzu4OCYAC4%2BwGIFAkBKBvDpkmJsjVW1rJy0VUK9tWHoznJpayZeC4BSSuV4eeslMfEnewk%2FewRgg4K%2ByoAty8xjoNcsz7MvK61MP%2BUBsL5%2FOEhr%2FvihaNeACKHn%2F%2BINWwj2EsbjyoJPmabrwd%2BDN4WdWd%2F0Spv0I2NFckNIbCtdeDsu8%2B4HRMgTyHNM1XJrKqxqcUVINxABQ4Ywn4zPgJPpGl3zWOMPrTicQGOqUBkCbv0DhbD%2BRe%2FvTCBGZK0oBw%2F%2B7GVAlGs9GD3dImj%2FvBRAF4eDUixsAmxC6B87PfcgsuP31FgLcEVF1ov2ht2Zcwo3kQbv8ve47LBzGqtyAdw6T8Bi62dnId39xv%2BV5zzccZDC7UzFjF26nHE878KhNFO%2Fh%2FBt1XLi%2FNP3nrbQzYtfUibMtJYoLwUAJx7gQJBPnfZ3rJGlRDH3ZSRjREJ8Wie3l0&X-Amz-Signature=90994b03bf38ac203bd89990c968475da860bebc11ddb6b16dc9b26e394b9036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
