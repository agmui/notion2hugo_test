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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=8845aa02e4d8047f2010fd91ec0c126f6d47987017d2b02dcf9b2c884e7a5e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=639f4309c503f646712aff39c63098bfa0f888f744d2f75fc28c15f85e754565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=29ddcc2112b0eb5835fafcf52bb8208db25fb2fdf0fc19bff56d1f91d8e05488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=8ddaf807b8a45805be996ee954d966db3ab23764c59729ef7957c915890cdc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=48726892611e8217bb8c0602b53534ceeb480738e4b88b7b6fa63e92e7bf1725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=bced2f96f8e3557041e53bb8548d1ae875bd25d22b942a8568bfdfde7a1ddff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=d284534bc8cb7434d4298d81c6c1038d52a4d8d4d7fce749ea3d6eec40cb1140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDG5RYP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF2XT7L15xZB0rZcAO1%2FUG4%2BA01D7YQuAEdWKvw0kyxqAiEA9Ig1JGIdiOG2stbk3UMSnbDFuRqrfGZgbMGIoIxvG88q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDyii8I1SQish0waHircA6qbhMDoKoynbJaxwzC8jvvlVLzTvYRboMPIvSuPzc0a7%2Ft65FAdDJEm7sdCLmaLMkJO580NVcXSSdsDMLGL%2BsLSnL45iAXn6UdmwhBs%2FFjgCmHDfCHHj%2FxI6trY56JGz1%2FP2EkL3C8%2FjZ19BQeFi2e7X6hX1ASWWp9GlDOvPz5Q5O3qn2JJu7G1oy7xHxC5dxP3z4%2BNRts6BPdp8rVEqEAzoC9XvwrtihljPndbTA9y81z0RyMSLdiLfBKfo3pfnDnJTsGFQXH3vnUOMZ6FMmTDYttJGM1xEF9NjMotdKbdlkv61kyGBLFKlH%2BYj7HsU447AZddLSLC9lFq0ir9hDpuxFwGP4FE9f%2BzU2gsVsmOlYnmlR06kv6gLswgwCaVUMsUn4iDKdeoolDh4iSLsaqkey%2BFK%2BWtUmMtMFjsw86FPcXcdTq2xWQZQTQjN2lcW6H72qbAZffgnveIwW0hMn9N6glWYFCQUTTX51pbEdh%2FxqZ5TH4Xn3HlNmEYRBW8ikbuVyZqEcY%2FBtxWfBZnvZgScB55qZ8Ol853IWFOZP19WmYPjmNBagPaaYRF2tkODsASFkGMwkiAH9q1Fx1yLOJcQe9bANk7RFO4NJA0j0jihLMsIGrQs%2FblT4sFMNmEusIGOqUBLlffl%2FsBa%2BkoSuvVCQex68qN1aDqlxDMc%2BHeiv8ZCGugG%2FcYHRAvQEGsMh67wXvclQPuruhcHsgB1QIaYAgQ%2BQaDqdxs6Y81M2CALEilC16MWRVWJ%2BZq8E%2BinfiofldfsYYrgMMGM4loEOpxm5NWNhjaEWblvkMQas1IaYVVeJcIV894zBDNful9QkjCiVT3qdQMM%2BmZPoPZ%2FiYtPwub9zs9QJPl&X-Amz-Signature=ed52f43f40c59d15a7b7b241d2e1912fc616ee9625dd585cb2411a1b87052d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
