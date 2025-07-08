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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=c6819d7d1cd03cd0300f7c3cd04b78506f43fda7c7941d89ebdc2e503706cf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=f9da78e1fef2925656cdd8514f144b53878f271f3858cd7630e9f8abfc0dab9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=02c5d4ce8670424786ddae1ec11b1a147ec3dc7916bf69ad55fc7a23f48297d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=2dac50d0bc82754562077beec6f4660963512115a3ef38aefc744508f13fd63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=812818a447fdb7962cdf5f0517f723686860772680f762570170d870f6394a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=7eb47b5bd15d867d31a31348a0edce166f03047db56873664f1909ca72c50983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=f478ed356280474cb51175bfbd8a859c54ceb680767e25c5fcb9991acbc61775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMIT4OR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMywdXIXZnRQ5n7wPH3%2BFH7mvLQ6LvOHO5034jFhDIMAIgBd8nVDapVeqvfJxmW7b4HYTFJxG7Rm%2BTPg3877fjsFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuySL%2Fos3qjJM%2BcPyrcAw29hMLX4xYpQeFi4RXErXrwJFdppXskgY6LsIazVchDpEi51%2BWXYCQ2XkIKKRGrMcGMYQfD4LoiXyXfmlmV0acuK4oBwsgJR752mxmLZgjuidmVaM6yr8x1HGzeQvBJs1hat%2FWbvW3VbV8A4XRd5NmSBpgFXYusCks36VXhx5S9GDCSRtgl%2Bt1rf3%2FmZUmF3EbCPyK2SNqVbkkl7lyTbkv7mmM7U%2FU9SQHdQb9SBsOQk0V3G1I7nx0e9zXiwBHYQOFoFusXhS9DoQ6hfs9mSPh39ZvJTRfx%2B8yYWYNeWHPxbLZg%2BDafUPhczLnD03FslPkPbu4hEWggBN6CkMxpDxVdAlnETfssb2kFEy40kfxX%2BwuUF%2Foow%2FBtZbPAdJ6VaTS14EgfLKizuQHpC5DTeB%2BR8cZOzKzdZl%2Bm2C%2BVvvjkBOWP13J%2FXsl0cvs%2B3fhevY5XUgwOSV%2BIXWagL%2BbWcBT7n1ZFfGB12kqJMeXHExGfMUvFUSFHjXtTVQIyrN%2Bdb302yoR943IfPgdxzG1RPCJxJSYllzRmjkiT%2Fm%2BicGsgayIXgF4PDkvuudfNf3OXx7umEp%2FOiGf95qlFLD6ZrijPTN42YEyQrV6dwQ922HYMAZpasfLlYUwPfNNVMPGAtcMGOqUBevAjUAeXJ3%2FOsJVGh1j4y61Wx1yEkEgBJWLUMA47I8M89K75djHEP03zlNroT6%2ByIcZjRBrIgAO2TGktvKmb92NtNn9NU2IRIt3ZLlhzExH6FM9qx9aqNBxCk%2BsV3hJqwWan%2F2AslSc%2BQepzIwATX%2BW7aPWtONBhc%2B9DmWpdMvgp%2BgUXxmTCth6qPRb9S9gSHoLY5bMdM1%2F6M%2BoHRXuofhZyd8K5&X-Amz-Signature=2dc61e462c981a9233b98e3fb471417699176939b847703c63b3f49bf5fddd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
