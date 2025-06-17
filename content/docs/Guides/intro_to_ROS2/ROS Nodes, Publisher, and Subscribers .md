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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=1de6b398b5c3e14be6c995889f258580395b6ddcd89065d5daf0b2da74838ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=1e2fdcc0991c89c8d71dae0bf9aff60f4ce896892b5f6f3e79ef0f56b2c663dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=09c2574c56d603f8e6fe27f669e10e681f8ecdea6027e79d77f6a0dfa8c42ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=d6b14769e4d940f35b386b41dc304983d7b0dd28a648ad6249486836d4891c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=0cd56abb73398b954a731fe55960bb0bcae4172fbae29cdd9e110a23793b1194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=f8c8f19a2178dbe1718437c53cf4520e443d90413f7d48eb888a45747ea0649b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=f490ae07d184d760c160709719ae88be1485631acde22bb5a5a938e7e3ddd2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3BINC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkIGLbsLJeL5KimUWW2GovD8JpkcOXlUTLx8azOoA5pAiEA%2BiGjmXxQceAboQbiWNwz1plzT4Qnh4bNlTYVRVwGoFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDu9np5cH8Uo5RcGCCrcAwEN8AUMeZeHD8%2BSq05W4jG8YXou7Op8vW1z6ji26gmA68zrz4K2YbJJBPDV3tOCHpZg3%2BLkc4R3VTFPgp1yeluye8tizfwYSPI0vhEouZeMunsdCOHHF%2Fpdfs%2FIH2N%2FlpLI16mqOSdeHwzPCX2ldRmyd649iSDmBaE2vJs3ajMSsBfm0nqbBxFCkmlIqn9D3eMYDvEnFr38VyJr6w3s2MR2vQXWPX4K2jxYb%2BNl0brhZqbOOCpmq4mY52CUBcdaYC8ukla3uJO%2F6PJYAfurMsZ9U2fX%2BZkWuNiNS4qh1F%2BRToy79%2FTY2WzeHnfe5HBtnh7iGkvF2QxkKRFgmmgeiF6wq7WUgquGdztWiD7DY6MUocLyNhjyCx6jrqgI3fi3po9wbTp8E8mbqw7c87op69Wl7TLfeWgWS5a6HmHgzWX9i76o%2FCk%2FljgJCm5ulehVOhOxK0hr0dkZW14ZDq0Kg%2Frjuy4PWPM1DMYBDfsV%2FlaBFE6mj76QoUejngcnPtdxbi8UvTXcqDtjoIwSrN0CXuxQnEB4mdDuND3vwL5taoh%2BYILOABk74AVw84tECaN%2BKH7vxwp%2FtSTW5lMFfSBxAQevMYDSKeRfkDCbH8mQndxA1zhEzFStOesDhbC8MIHuxMIGOqUB6u9rC%2FD91R3RTFtCXSRNZ432reGFA%2FWCtw3UWG8Yy7zcwP37nbZnNtbmFEu2wZ1MltqbeUFdwOKO1zdxYt2JDuXPAjmsI6ifatLz9CzLHF8YOowz%2FURS0R1kNIQNiqZpSTQwrwhnzEo4oIU%2BNLxR%2FMDb9YhTSP3iUjSqYu%2F0PHPveURm13o%2FcOoKAlBfciICJwSlUa4bLNaqLtiPwgwChLAs2W7N&X-Amz-Signature=2a776bd1df3006231b0ed599c7b574bcbf3785e01d93a8c68c08054e30de98ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
