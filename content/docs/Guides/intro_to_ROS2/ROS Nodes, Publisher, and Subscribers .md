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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=f1b1e40bd9ad20f5cc8db8291a79ae1f4bf3a356843d76ee639fefb821e46253&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=df26fd3d1983959b4419cca9bac81a1d0ec957a9ac1deca8cc4a3b5e9b8ef3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=ac2fa41bafef06a3533067b8dc47c0ffabe31a4a90e347976d7eca903ce06cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=2ad03b45547029da4a44c3b90d5add3c81055dcab370bb60cff2f4b1632a6476&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=80ec6d64c24bc3ef3f6f9e2a07f14d6ac6688c1be2f68e87e91352e2c429853a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=56602c9043aa43cc6fe60077b45f80815fd6aea22fa5e24559e80e1ad8a795e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=5b0fd26fd3d467f176cb23e9779d5aa8c5109c840d86608aafdef52ddb86822f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINFBC4D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CrJ1hOs%2Bi8LXW4ctTFN%2FkflSFKFZIgxzJPBMWUmsFgIgATKEy0YCePsg6ryBpIgf3WCxIOys0mUjsmmVCzChMp8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk8DFEmmB2KnAE6zyrcA2jdPZIlfd11RGVE86aFYoolBXwD91KB4rhG4AtyZ6iIR0sm%2FxiX280HU48hTjXD%2FFRii3WRuw3oJHZHr38Ypx6yqJ%2BNo37X7b4c2eaLC2U3kWfXfpdffQtY7IsMuVHiFjQei%2BebJljp0wrxAbLWHYugcan1%2B%2Bs%2BJXL9s3wLOaSdTlOARnulRFw7Ev3GtoPudWKnkhSLMmFaoIJB3MsHcEkXcd0Hk4SSrEbapt%2Fhdie3GJMTy9CN%2BLL5cJRo9UwqhyQfPAqwPOBiUfR73h5i9KWys%2BFTKKnVen0MDqrllCzWcwrccsKKyN4phI4PL4YcIEpuxjIJy3dsjDesU2I1dx7pjo8GmQWjzDc6YlIup%2FM%2F1rB7rQBxPat0y7t5mAR3OFFNuImJBTohfWXolxEe7bJ9mkr5w%2FxKK2M1XC9NdQzr%2FeRXZBbdQt%2Foz6guiKCghvfXni7xHJQUpjS2dwcT%2BPHXEq06yPkbNbj2sXe5U0Zh90oSYtK5RJ65zEVmCu6%2BMkBWGAPYvRZL%2FzezHb6zROaO1hRxtA%2FfbQEdf943WKBjRgzQrgcz8o9xgysbwy75K0iU4ogeUKsRFrFWFgSh%2BdQA3UAUePRXCGwnQD33mQYSIiaNyPJG6um6BoHvMNWurcEGOqUBKEaAl2MLQVg1YKD1hhjv0EDbkENHV45asCwvjeii60zpiZo%2BsdSF6av%2Fvw0b0V9D44VmAL3j%2FzfA4%2FEltS13oSMPFYW3LTnpTLhFGTXdFYtF%2BhOi6Q2L5%2FNtzuNHhXor7%2BW2JCcclvIbJb94inzTRtWDPMRcAzeqXZC0SZxZjOJwD3cOiMl3nqqHHkZdz6noJqSx55IqPB4BwB%2Fw%2Fj2N2G%2BPaiu0&X-Amz-Signature=a9b8c7be95ea137e0133a578f598fd451c6927d3070e9a463c0ffafcaac6f65a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
