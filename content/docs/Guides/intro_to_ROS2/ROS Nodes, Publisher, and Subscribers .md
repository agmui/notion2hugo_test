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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=6059f4e5e56809451f5e4375577de4a9eaea334abf17f8f483ec3f5b760e34db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=f9ac2cd03eec4e1643b0cfb284fbf1caab2e27468cba584ddc6ea4dc229d4689&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=29fe2e4be84be573c34ca0ea2349d6ab08e87deb41eac5a72a6bd9e5c71c582e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=10d3c430b8dad54c85469a2f80cd238d1d15af5484acb7d0eb48b43e1f703206&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=b66d7e4f9d131d62f1279450b055edb392cb8a506ed8b1888f41489d05b30c14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=17f64e9aa15db9bc9c8eab4d43d035e493d8a61799b38da2c25aec593b64a1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=226a045006b896f20893c09755e4a3b0a58f58de21d27b8620f9cf95ace07994&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=b3d081349c2bf6f2ae4cad171fd28057429e854d3b72995aeab7bad455f727f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
