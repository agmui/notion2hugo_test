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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=ed941003eb8c5de94719b1a544a82c8fe0f25bdc1514bbcae61c0177ee5df93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=2fcbbd7be50d08dcfd4650086d93bea99456843c9ff2f6b2e9fb02b85018358c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=88d7b1a99085059c149e73c3c1536050ab04032f83faa8b65588f69afaef7695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=71b729c7915d933f40adad922dd3db44829787449266249e4f80a5911c81d5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=28834b1ece64ec6b60193bba857c0ba8ba0a02bf9f55c0625ebecc9f82765b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=98754e2d704a0783fd9a5735137a17ca616cecfc77c62803fb0def637302969a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=a7c0005c7b954ef089e5e413d0ab60218f39076e172b068c27a2f3cbc9319404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFLN35Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcX8Gm5vUTyMWz2MpnvDVri70JxxBpQJF2hJoVzS1kzAiEAvMco00TiXRYqlmyZJgyk6CQ1%2F6jVUxaMAQDm1G99fN4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExhCEQG2AVb%2FfZ7vSrcA4PTH03YxyDpdLqjdQKbgI51pDNRlLFq5YPEbOXkDRMeC24F9dEv%2B4pkIEll3QorC%2Fy2iPNH6WOeZvOKkF7e8%2BK3dOkSS3n8%2BnK%2FKdbHzXTkoYFSjEOge%2FjY5cqhc3XhRMA3Nl8%2BjE2fpv66mffYtjeR62tErZVeWK2FqzBPSg9Pax7LZUShl7ftfV2W%2BaS4zdZCG%2Bq2gWAU9Ik3bUNtCd6hZZ%2BUAKkLpDY7AMVKnJ%2BDso%2B%2BJlqzyMThDfTfvU16EnymIO%2Ba3aJT1rJUnMFcceH612i3bBXYkUUK7yojlwy%2B7pNoj8D3ZFUJdHjWZ%2F2xj4uS7GrxffToFcUWTKc0MNRXJ0WrFeXbRtP93FbvuqRr%2FKGCf2swQhB164aGnx7WcntI2l0PYrW9yeprPZCtK7eHZrTR4%2BBdk8mXGIhnW5%2FF4meUAzjKb5GTYpnqyhK28ygtQWG7PEMnlDBqMrmfjhFwf7L6Owgxzb%2BAr7dy0l%2F55%2Fa35nwidSspm07RHqRm0rebmhPTj8Q6yyneefgy4UCTp%2BNkMUoTQ7MVz0C6pGonns9oUQ%2Frb%2BYyhfODDk6QsmBAxo%2BtS%2FICy8jEEpInw34yh25i%2B07v1i2L6a0ZiEXRVp2e8dWf0yeZYGaoMKSjwMMGOqUBETOX3sXJe0WkyaSEC0B9Cky3tsT5xJfq%2FqC7dyXKrTvOCTGo2CKx1oZRdKbvwyB0NN%2FN%2Bww2sr0PkqT2GI36ZxrhclCrwfoc4SdZvuYpEXP0dSAIJ%2BALq85jxmNSbBA4TnfgbRePXeKhEAblt1GfMPsGb9c0Pandfa6qDmOXF3otRk0c%2B1CCos7x2N2w7PYNOMTxE5VSBW7WAxrGTwthOrfrTOj3&X-Amz-Signature=51e40c3b03dc019d506017714dc4046236ea4ba99ceb741b507e1c8d7a6a533e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
