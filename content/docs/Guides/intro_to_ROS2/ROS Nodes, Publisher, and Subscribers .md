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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=7ddeda7127b35b88aa1043cdec3863826c662e3e641018d7d489194ddc1f7e23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=9aff77eaa6fcb6d2c9c36bea19a35e7d84a783d5bb48490c18d77821c40a217a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=5ad469ad28f5ef988e7c4161f2d7f56ff3b4ceab48c19f1e30a0b206a3c64d02&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=dfd998a96663f3d0ed2bf998a1794a0b6a1245b9ece1bc3417c5168ec47c39db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=cb66103b58bb0006d5bcf4f6bcce6a164df78ab8c3a8201e3deb2002d60be0de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=6c555cf339f6ae24a30d8d8f1e5bceeaa1aaa0ae7da759c5a9135e2d0c01e3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=92cd0f8ee6304c77dba6abd3cd4b24ff2b839617edab54f96820d735ebcf85ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPBLX3S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMrbPSfK04AM63aFp9bCcS26btfdJikMrQG754OMAE%2BAIhAOttCkksMdipO1%2FBX6S9%2BnxGRkDdlr55v3kduLIQhCvSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvG4PogeS4283QRzAq3AMhmfk84BhKxlfK5%2B1oh55faS%2BvyTw8gCaliO%2B%2FTw%2BY%2FesRv29ym%2BhuMIQ0AakpERWQ2uBuux9pzBJeCO%2FV2trKPkEslNZtp5PUhebA%2BCu1tALssvXTTEAjZ%2B1KzJLCSIoc9lbepmNLNGWRBELglUa4jL5HBu33hATZIRZVe8r7E17erfvzNzijciyNBep57Yt%2FeiUz1euOoISlmIGs88MmnPLpSeg53OdINYJTE3839mP8OO0l%2BCpsEiItHhhPeep8mKbUxtJD5z3SMgnobux6X8a9wA8lhT39gVuF5He2aCaPb3CixOu5ermEWiIttrhdonpcRi3zvDQ8vO3I8r0e1WyN9W%2B%2FRRUqxSn1X5ryvlvLyinBMvtDlwB%2FNgu4mHyFaAwL920XJ1GZx%2B2vd8WGgobXIrt7sCz88T%2Bw1%2FAVZSQxRokmDDNbW4hltr5%2BA2iggWVNoksNaY%2FbtnlGecb8zWRVo5d6h3ia%2BvpSJ%2BNbA2ePTSNTpgmVwmXhBQK%2Fw%2BbZCTgCM%2FgryhaUN0oMlKlkVKrWsjKwz05LIdjt9vD75jTM4pRzE533N8bWdxFeSBzfNuVf3DRmu%2B28ritDmCuQlO764Wm%2BTXn88mf52FvxwfNqFXmTr61BZWZXKDCi%2B%2Bm%2FBjqkAZWhf%2FbBpmZPWhxgr6jTFWg0MP20QlvvexxTlCEvBjNl4reTbZGqS89FmNNUt3C%2FRNcmrfnROroY25ktQyENFyEbO1oyeBjdVlLcCAEAq%2F2eIP4jGwqSB8sHCcDGP3bO2bHaKS1hbFXfgix0nDTZmuIuYVFFjSH5QSNcZK5XhYKSgiNEwXF%2Fe7qc3D85Y8WXdi7KlTMLb5lfLICs4y4R%2BjbBTMuW&X-Amz-Signature=eba737f85c1c0ba0261cbf2dd68e7287c26e30332fccf7b4b1be2205f4c32ace&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
