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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=6f4f67bebd52420ca95f347dd2da0aab41f57318105911c6be8df5651f9c5f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=96f54a4b6b407924154f417f7c255ea1a11847eb5cf6b6d5bac0ebdb7e1f657e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=9911d34db1730e90de3ae87534fbfa3746e5d11943500475c32b8fd72dbe12c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=29a9cbc9fcae517fbfeff853f02a25dab019d8438270f743e17c9b3f10cf7cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=3cf24698e287c252b62ef4ffa1fdd9eaaa37ad1ea72d47cfcb42549dd5c35c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=685b120ba92b3d32d06f3f60377e4c06dc1085a82c1fb073a39eb67abbc90409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=2ef36ca93660d2aa0523590b5ad8d8ce4da2ad293b199776c10f978359765a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DIF4IEW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbtuUVUYZsZj9M7CPUCCLuYcZjHRKBwW0sc7vUBq5aJAiEAuXt7o3GMsQebp5AIynM%2BIG0ZX%2BA0%2BMIy9U8SA2731F4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4xzxnUZPNaBnEAZCrcAy5mKASD2N2nhE%2FYTVOAtyif6B9uY6AUakIXfu7Rx220xSwxilxg2pr11NaTGf1NTI1cwcashegGumIS%2B4sSW4MA45u5%2BmxXBhqSgpXVqjUGbd7jCRTWCtIlMHPUPn9EECDtcZ24NU2ujoJHslYjxa%2BPuTUfxLcioHHF2rWzlUGxrdnbl%2BvDpS%2Bw9WRCNP6FFgmqKyJ43t2UJYNrSk42b4z1mcnAQDqbu87Stjg24BGJ9i2gYTKtMVRqSRk34%2FXbRxMH7FyoBQycMQehbDUK%2BdEW4FI0X5YBqz2n9b6PJOyOmtvSc11Gpf%2FTKO%2F8PQXIDBuyJIJJzmYPEm7dg38IUavcYTJjR6%2BYnqxIOc8SM03AYfarxKV8rQkOFO254JamRe6XykgDlgQw%2BDq%2BJOu67mkdChujM54V2IGJN9AyhyhCf74lfTlGEXjBLQNbeIGCXbT0zK4%2FDI%2BTITlOL%2Fzw1iYu%2FbhKMOoxjmSKrJVjTRsDVSZ5Xwf5r9Gc%2BM847G1fNK%2BXrRTZCzyMT4JSiu4gM%2FwtB4hEgHc92uy9Sl8HBTKA%2F3OwyiCGTto%2BJLGVSpW8tLcGNod1XUEtO0sxsE2p842ngMPHk8Gda6ySI0J95GYV%2Bt%2FI0Mjz93UFppcGMObcrsQGOqUB2Xaj4UXe2wKlHT3fJCGekHjr30pWR%2B5R6MGJ%2B0Zo0KebfCoTnPN1AIiS0QI0n9odpx7RDJjzakmrcq4%2FoqClWxrtz7LOWPF8OTy94BmXLJeujkMzt%2BDqaTzb%2FAyiX%2B6XiFCvxkVVjqB3fRxUsll4GdEftHnc7h8bscftQ90dKrE%2BSWBMuM3N4DVl4%2Bu%2FppRh9uRFQucGsixz7U8XmxpgdERWjDz6&X-Amz-Signature=3e016309aebd7ccae392cb3049d74a12906fb510eaf07f38ea3d8019d7812a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
