---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=8e7b78fc1c8266aba569b545774b37720d536a1f826f6505354f606d62e1cf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=547d49cb5da0875973e94440fd16502c6b6ef88e1e550b78bf97581be7b1896b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=a79d82a4b419f55b376c177d6cc2930c691f87ec2f85e72361322989924bb0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=515911b38d537e1da9ab0c4208421dbb6a6fe73c431670995a6ba832e6066a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=758c89cd99232f8a999f3eaf67e8a44bc8a220f9a35c8347deb3bc291d3a6703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=534022f17915efcc93f3f8b6b6b7947136e693ca12daf7126ae4f4228edef449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=0612e4cd3239bf69ac11d5374c2b5f4cb8d9dc4b573f0551386c6c888de0a21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225OUXWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClvSrxpZ9J0yLa5MW2tTUkAiwZ0PvKV6JwoBm2MDHLIgIhAPldIOWkwI%2BpM3mtGP%2BDIXx67ORoEPm3rIPMXiaKiWFbKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAi1BG5urWvP42TEMq3AMnFuQD7FAxbkdIFqX%2Ff7RtZ76IkEmsflrqzLujxdD909rN5fpLjQjZoAZ0zA7maSVOlzN%2FWZxUHoGK4yTu5xqgF%2BPA7ok%2BF3rZxWDFwnUc4utxLCIxrVWgHJ0rocRmCHJA%2FsWhWFk8yGn%2BXUVZf%2FS9BIICJA7czDUEvxbPcPU2ymQfiHabgjqw14gK8RXTFJIQh3EXOcADP7FkImbdlJ6WTXI3SSBwxTPUwTQW1mXt6%2F0GEsKkcaHNMzVa6Wvw1Ma96jSomlwljWRNQTruG8pCAjNuMWSBcBl11Nn%2FpGfSUJom1Yd1ajO8WXu03bn40Bg0IRqrghUkhTlOdroWMKHE3CMlS9qvqR3pZqjEc%2F5IGL0RicS%2Bk6VtqZ%2F4tNl0OP1k5Wa9cp8DJAhgYsW%2FugxucQLC2DfLnOivBxnPVDb9xzgKZTrH888mAJst%2BKWNYZS5sOVBR9iN%2FzgHn5mRInCrJnascO6sjG9TPqs0Us5jC%2FP0pG5PSn9GNzNopsameUC0Ct%2BSkPXOILfFdo306pWAeP%2B9adjdv6%2FSPsqBjaxMUszCoG33V73%2BvUFcMtyMa6970azV%2Bk35r4Xzhr9H7a8mjVZ620vK%2BIb9kgVh2uqtCo4UtyZ2EH2FudnpTTDcktfEBjqkAY2jpQQu1fCJj377QIg4OxTRdwAK67Ac1IMzCTV7YD5416SlDYE2uPwPVRirfznnDU%2FV%2FPyuY2dA%2FRw2F6iAAA%2BZ0hBEQBcW92fgcMZQevZkQ9mXuIql2swv%2F9KVXbs9%2B%2B2bbiGw0CTYjg59NF%2BlBgLC2e0Bq2%2FsPLXZ2yY0rkaYt07kflf0eRtA2M3LQeGgrIuSckNPSOolhTE%2Bb2Uq6YR%2BrppO&X-Amz-Signature=b885047ed970131c5d12bb1438dcbe09292313c55ad2641f51f79c0a490d6af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
