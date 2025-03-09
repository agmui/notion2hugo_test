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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=d68897504155227dd6d099bbe2ea155c5c290ac1653a0746e01d27f8a60edd96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=45aef992b6a81bc7142b9badc2450aa74c07d78abdabef303d6d7c75b0466daf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=e57ac0d2cf56f7e5b7dd3e096c702955f1eb375e3241cccc4d45569e528ffd1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=262e34a10a620144880667b843caeb487c44f22f6c2c5e20b55d8a3836fc9a07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=bf6c834a10409740ea1a19c8b8158e251daf96d8fc6d6daf3bdaf2be550c6b78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=59896b82765b0396dcd357bbf5c1982f1355518a241dbe7d9bcedbe77d879079&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=f51bc1e1070cf64dd7df56dc7d68b56777b6ce69f6d6999b34f4d398b24e288a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG7APJD2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICzqzHcAsZMn1Iz8y%2BsaC3W%2BfKFVYOEaPKKX5hwe%2BVScAiEAwxojNJWH65NNVcbr6w0vy82NxFIlgipCeAkEDExafFYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMSjfx%2FS6FapFE0h%2ByrcAyPVSoDXiXgKfnMyROnSWxhElDTcV6IrGGgwfI0Zo6NwpmQuj%2B48qEAgempLx0TWQRHjBR%2FEHrG1YMbnaxPGopWl%2FEONtCSDASjSdApq8Yos2G4x5QTro%2FGulAJpmmQOm6StbaMHDtlyju3nkloNo3jNEPKQC4Q3kkeZkrw%2BL1T20sHNBEJVSzShsNfID0fpVJoJ0TsXhqgBIxKPnjxxttPz1rsni0be14nmchTgAJxsKhJBbw1Cn1HF5745ALDFTW4rQo3JoBsAk8XqZi9LVrzR%2F4yx9H2f6hc%2Bz8W4dp7vSwNgGL1cw4h6krQ6TnWwfa74H6SrNyiYdyPaE3fCRVz6OHQqlHmwXrymRMU0gJYSxjXD802EAXyJVF0jvVdjvyVvtkvqASdNLt%2FVltHw1ykzVIWXjkcJ6z1%2F%2BDlHDyWpvB7ENuaORruMWFFPgghT2NFCSdeSinE9BvwtsTT%2B%2FVJSojqEQuEbhL75MIlI8oHHoLOIC6pAQbQJQza67oGlnjEldwTyEC2iOXrmoB92wPyK8%2FN8VoLQgqOM93a8IZTSWshLOM3QEyOGF41%2BO1SpCIgVkPbVYFjBN%2FqH81XphDDdgkXYWEswT78wCDKBdhVF8x2DI%2F%2FukMEMBqTuMOfgt74GOqUBjMHPOZkOFsO4ep0zcSoC0nyaTV42v0J0WfMPNsUQlrC5FT%2FnRcvLEvPRnSoANjKStLW0R6U2Ni2tlB0Fb07Gnt43BEndZoA%2B7p86RxgyUCyskZyWQ1WWJ09xYgSSuigzqoIwQHOHsvo6G54H%2F7NTVBIKC8s%2FcjQaWDu4e5NQjRP9XMzm1Ui2jNTIIJ103wHjitEgjp0F%2FS0AMxzXU4ZwABpIKR64&X-Amz-Signature=67800fd933d55eebdfdde8eefb25d0bdab385f4eb25ffc130b5ccc28fc1a9540&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
