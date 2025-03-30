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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=4a772fe953dc806e476d1b472df3f65a149d91264810a5f89ca3575662df37e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=448e0c40b39d5b9b0a882976edcc82ee6a981ea1f038ab29401f1b50e0ce6648&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=6a256c27b2a1d6147b7841cfbf593eaff97359271ee78db61c99985e0f23caf2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=5d4a75116d8f9f72cee1339f218a248488f7a7b1839d37acf134d05c7e039e45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=cfdaf178f3237e952b80c833cc98d0bcc302de153a8ceebe2eb892e438962b98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=5fb01f8681e831580ec09d6f21554a636590ed45afcb2aae76db795809a506d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=7c9ad6a6b5e1a10c8c96b228035fc3d45c182099b9be9826d64bfe10663ff217&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V2QWED%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBvA%2BGJjDiVktMKj9fjMSQ1FoBSruZoxIpvno%2FblCbefAiAnSfhoSJ4StwIZFASsYa1xu5UL6ktjNtAu1UN6wPGgECqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq80uA6LtFAJzIRHxKtwD01YGBE7a27r5BF77c38pGwMijovlN%2FO0YZV4TrlWIaB91enEAibv6m3UW1lCzvU6yQe4Jiflj5ioZAIOfstdzBSMFDSIk7GdAU8%2BUUQC%2FwPK2SVJZFi68vFBFDJxKA4pSvnL9YQSmF98WAWO5Iw1w8Os9z2R%2BLVQCT9oVgwbHMyYhD6Tilyit4g5wUhCaiVFBPF1xrJUhtly1edw2D4bgIK9Y5Tl8YXG6ZdF2%2F6R9kJai4R8LCK9Njlww%2BHQxt3%2Fpgx%2BvORRA7j28LuaTCsdv9EGGlVFsCCvspK66O6w1sCqJ437yMT3dqo2XoHj2bnfsxQ9Ep8%2FBCB0uQXMRHcaQMA0R1ykxdZG4CJ%2BLXSQnz612Uq%2FrHUVE9bWQ%2BtaWmgVkF33gQ0q9RlKxRry7vIw0lXKgs1ysoB0H7R9b%2FEz%2B21Um%2BpgkTCbvGeAuDjTFZcrYgs8yXoo4bND7TGQYYdtiUqIfoXGAzIe0NOrlZDWWXBrcHhyxbQm8H7Dod11T6TyK54xTipFN3MgCoFyP3gtHtIHhE%2FrXoYvusy6oubDT%2BZDionrZ1IHjCWiiI7CNDSjtmsT7PoSiueT2mDhspmOO6D%2FNiD9ohGsUZfNBVSRBMc3T%2FSY%2FjVJsUvC1How9KelvwY6pgFeIfeoYFARmChDA%2FIEsrPUbxpkxHun6iuTSVViXliOtKUmtW12s7%2BgjL%2F0eH6NhOpsk6t%2BtekizSUwcfHgD5r65YYG6sMStdB%2FYIvDCRnl7kda1NCsUH6UFA6uLdOvXIQajP5edRs4EspIu27HNtMtkEk9jJP%2B7AnqbVZdCsSqN1mpkTlfmVkrmIfrrqa31Hpi62O8BUvM1PrUKffRNTQuqRCWWVI%2B&X-Amz-Signature=2a46026caab5c7aee4047f6f5ec25a21c94f9e6988bd35091cc84bb15aff3eff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
