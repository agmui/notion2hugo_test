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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=335ff964505be9839758fbc3f249481c10e5da03eadc17d94399a1f335503497&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=f2c4ea53d6c4c4835472cc640525a5c870d46725aaeeb4904a8ea2064e244bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=5b592436f341697835c04f28a9eab451cdc50537897f900dced61c288ac21480&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=11da04120f3ffc5431720957c1666554f4b114e28432df826c309f07209ead38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=be9c274f44e73f336122ff02275cd953a7433b07c8745f3eba003db2837863cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=fdd0b9692c712e6c0d05a0236607950d289510ab777ec31191dc770641c9db6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=0e00984003ae80766ff96cb982a30cfa9da7f8ee8f0096e1758c5887c512b6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWNB75L%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBDeZF6Z9MpsOaV1aPQGwPZ7roQqGifUZylQyslAPwawIhAN%2F45g74CvlY%2FDW45WFvfuZea3CvdS9a%2FaktRede7HlPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BFi8IagatL5xcQGwq3AOGAYQ8Tui5PGxcnTof5wkHbCgEKhdrZshxa92YEolawTIBHA7%2BDU%2BEACpsdrWQ0RVJH%2BTbU324fBv68JgU%2Be8geeuOVzbGAB7Pt%2BckyrTG3ZwpJmb4QFtvFv3wfQSWCsyTehto63cKydRIaQRFZbT1n946kUFh8dLYfEgVwBKXrc7rxhKKI25bULcvfiIzMv7GF8uOn8b9MUd3NLiGt9DuQcAGo%2Fa50qyaC%2FLbYFuiTEENxiIZKjCRejleWR2tHZmy%2BhsX3P4TyofELnzvpT4O3HxfaSAwMKXlXYvBE9N2UCHYp25yeetqaldz1ZBexw3uqjXcR2%2BwXBmgmCbB1cXR8nbu1ymXnDXIYDTo9aG0e1IOODYnfBiip4rprsEuKbKZy0YP431rvO18qHhP0SLlzF7bkUdnfVgSicRz4RNg4i6pyHTmXTU%2F8R71ZULPuBAM9kVMIJOnvnHbdiIukRIJ4Mivi%2FVWO1%2FFj7i%2B0Obtbi%2BYVRUYnTVUPxVKngepw9%2BuqYqIYRuU0fvbJBrq7JIDmz5Yi5W85UiNNjfUrZqgSmfauTG3O7N9ICayKvL8zja1BmKyCg2gBggepJf4JlRe65dn1p2UNWe3Hnct5aooli%2BfBS5H9Na5vHF4kDClwoHBBjqkAcUjBpSxgcIlwCH936aM4IZocSZAOKyoJBYjIfdMNoV1ZjSifQrCDWO%2FnebA0ZsaxV5HAt354%2FgQ%2FWZtmnFdSD5rJELJWg11GNZqCNVPws1UZKdBPV0RgRiE%2BhV6qy9qJH3CLHV1eWOyj2w59rt6XbsVYwbyAbI7zvkRZb64GF4x8fpl9PCOPWa1s6XZ75%2FwbfeblLSkynM3KMptSPMrMehSaxl0&X-Amz-Signature=7ee4ea90d3b6b33d4f67d075ee3738554d0822ce891e65e4ff9417b82958dd53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
