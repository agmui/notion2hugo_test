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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=6ae4da4a8ab322e3cb544e3462e0267ea29e34f0c7b4963bc056bbd23d745450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=4736e7cbf1a13c9972c302d461df05a62eb465525ac5286e82cf68f92408e33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=3c7c19d2914306cbc1496d9eba454cb56e52243caae0569f453e3a476357ff01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=eb1ebc7f2d4a6b41bb6961746c512d465bdfd750bc263eba735d44f8d443d429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=d04f433a9ad6c84b568bbe52a0510d4aed7190cc91ec26126e0038899b0fa86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=121f24fe9554e597a4851c49a4d9045a53d635be7f95acfae154fe1f9c09cf65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=55f3553a9f2dee9a248d91442278a44ae00e65d5693d7c39c0136e4e0b1d02e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KUP6Z4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICC951QaJonsP6L%2F68ojg%2Bfh1MlPDrLpjZa%2B5rrX3C4TAiEA1xiHbWRKiG%2BVTIDunn3CL3rnMQ5ezfhWDEIHecMms48q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNWlBP4AXiwqa1FWoSrcA%2BUN9bRAiBiZk6jQaVCZ1i%2FnQ%2Ff2r7%2BFnqvDxH%2BhSdFqQ9Odg62mCBuxl9iZEYht9Tm%2B4ECUUCRRRymLPp2UxFREHyzRVH%2FfuQ8MfA5ysIzfVtXhLer0D1Dpa7ISZQr18Ib6N9t0Ykg%2BuNi1pKzGqOusxLptPnM%2Ba%2FsW95V4UsDojp6kTZf0tU8V5zlm398ykO9pv1lCEI5n%2BDEur9BYXNaA3X6exfDPUe9%2FOLMg%2B5dlqmstzjYu7UZ5EDCT0NF%2F9irIU9LOG3c6FAn49Dpv037wbYEwv4EGx3x3aAOEug%2BG6Btv%2Bu8nO45S09zeSlR7ySOgVeish2dV01CHXcAmrKaKESY5xYViwRKSpYiG0Dj3ZQsaa8k0obyyayyzz71l8U%2FVQBFNTF7BDBhzkiSiH1laZHDoHDe2%2FTptHf4mIlXz9dAnu3xwMSPTFUN1vMESjjiulv1bf9ud9He8pEWVHJLQ0JC0qOaV1X%2Br0vDYYqThE%2FACAZplDFoLoFaC%2BvnpDdYzGODxDURYQe05tl%2F7g5nvgYqHBwsxVZjTp2mmOyIAiRLJqVl%2FExG%2BNNrW%2B0MxfGSrgTrXGLF23kXetMVSOG5SSVUZXIJk3yFM36pYBGDO56aO%2BLo3luAhxjoyMNKWytMGOqUByO%2BETiwRXhXgnf2kqMK%2F7jk2JZO6kjQz%2FSrxsuUefCz3%2FJN1G3vW1zmP7LFYGVHfD60lWaP6pks92Lb18Soo4G%2BFB4DxJG9uOGJThw4Z%2BdZVxEc5QgdKbuR5LJkqYtW0uAkZvxLebrCjeZJg4L8oGHiE2LiPYp1nC%2BD%2FqH6NTyJrD900lVf1EyZbAY4sEb15qKcT6qfsT23cGFlaT4wpT3LqbtXJ&X-Amz-Signature=29afd10d87c3c404ebb3b3cd5984118331749e2d39d5071ec330ee7fa955c78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
