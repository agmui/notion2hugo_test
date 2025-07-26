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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=0cc1c618a3d77bc997dc2a2cd94c03d5d702b57fa0eee7b3f24b974c3ddbfbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=adde3fd7a1f84565ca242525b00aac7df6d84b066d22f20c9d51b27acedf431b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=44ccfaf550526b62519f95833822ac653cb981f740b6a8913e54caef9e55abd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=7ef92a6bf87780a7890b12e85394b0cae09ad768a5f8de73bfb9a46492be70c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=c79a3915069bc1df5e1f8173c9b755b76a7012f4dd149806217541af2509c51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=ee5bb4798bee60b6911fa51a958ebd993511a2b295706de6cf417efc2442268f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=ef0e65f716bdee35439741dccf0dac6f30f00debefa0183dc98e16256158a4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRWECUP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC653WqVcZFBUSV8MR%2FaZH5SSakK9JPEV7JpqWQU91V0QIgTjQApVhH4HajjliJ7KBeFEt44yGhrW6pitos8%2BGCM1sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMJS1hewsRpuIXSCFSrcA5gj%2FUwnHyoU%2BQ%2Blzq36ZzGLjrQH9mISVMnzbMuXoJ9LovX7elg5cv2QXk012FT5V7LdNazxmZljCTxEv2xHopPCn2WBFAPdmPIoLyimSU%2FYPyKLL5DPcBbTnPEK%2FGfi8Wb%2FwK3mW2LPi8dabubBCW%2FxSfjq5R3SynguLRqTkApIYo29eqoAZWQQ%2BGzT9bPX58n3f1uS5lCmEPE5hWpxHK%2FZZMXXW2XZlQXBcq367PRU%2BDE%2BcXydDNW3ihGTDpLjXJW5j9xUIdlDCzdJYZy1KiQ7kw6JhKwqylc8BzY5ceCObRqyfbo1h29xYzsmeElcgJ%2FyEO9s4j65nhzFs4ofoLrW4NzUAxfvgk27oJa1b6%2FooPo9fyyUKoVghdrCFDu7KOdXW3APaFqF2Ep%2FD3GcZOGoA87W4jeJU7DtwqoaPjhUqhohkM7bh2wUiVBeM0UuUuDr7%2FBC1k7PYTamCOR94%2BerrhOk4OB3P5o5aqLZHkq2brSmaSu0njl1bOgjb5Xw1jHH5G1Npg91b4IJLDzu%2FsE%2B1Oj592WwtDbgXoO7hRM1Q6xbeBbR3RhDaH%2BaFjBuMOm33pG3gf7Ay7%2FKp7MAH4xKPA20nWlCLRc4WmrLLrT4aIQbD67UIXQTwkMYMMyrksQGOqUBToBTyquntZFmYZDhWZIko%2BG7m2OdQjas2ZN2Xsf0U7YCygouGCWtBEvLKQB2DvjFWG4C1IphXCmLU9VTIMCHo47JHyYHle3%2Bx%2BAkMrWEftUC11FVMz%2FA6WMFANdDOQhg9byQN07YtvCBsajxSgWublb5itTq1ExN7iemn8AMsryIIr6Mb%2FJTP2CE0rkOsZv1CgeX6VfrdYon%2BdHb6Z49Hyfj%2FdVb&X-Amz-Signature=756713127165e061e305d0659e47797c7a78688ae46f2975b8cc6923da3b516d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
