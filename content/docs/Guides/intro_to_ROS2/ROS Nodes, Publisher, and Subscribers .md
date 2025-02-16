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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=a478795ab58a8ab303ba9c4340223b43c62472e20f00f872245c77eca64015dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=a23ca782a3cb9c51d310c07343d453851ecf897bfdea7cbd8f4f3cc6cbbf00d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=dd1df4ae219ddd611815d52692f7ca908be5c674663d3465bfd49db0504428ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=f9cb40a2882e0631a1692240f1e551eb59fc334787a0727eb6739381174eeb48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=23b724e0349d4d441e005f03c4b8e01480007f99e109728ee27be29d4238c394&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=72487ccd9551aa97b24c171e9fdf9d2f6363fd56daef3baf49f210a118aba604&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=c6d9d81e2b6987f8f637f3863c452dd7a8408a20148f9570efca8f07d1e9043b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2A2J7ME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC9ZVcw%2B%2BByGIn66JV6i%2Fe5XV6cg0MVoo53dTnuIOoR2QIhAKnenoksSc9ttzLMdi15KVUdsuruHGvQzge5URYe3%2F4fKv8DCGUQABoMNjM3NDIzMTgzODA1Igxqnwcv%2B9oSGUTjZI0q3AMeMyomUKVtEPGkOcOVFMJzgAilXaqNg9URFzVSV3f0VsJnfoXXSJPLj7lzFOkAqZXieXTnBnGsKI%2BnQjxMmJYYupJN3SrFu6GoW63AQx41VXZG%2BXiXUkhAjh5jyUpCH1FzsK9X7WAM74GqbgnRrqU0QEVkpPHL9fOCK2sQ43SnBvaDIc28%2BYrhrFXQ7xZddjcClYbDdZQDQ4G%2FUzIyzjL8ygCNzvhd3MBGPTSrYff1XwRnP%2BzyBTxc98CoRCe7ux3YDi3%2Bry%2BUfzz9D60jJnzeWwBuE8kqBXZehAz4P0xrNOaWtf0kl7Egs9dVT6JtNOvU44X7fw%2B8SdPxGWIUxIwtV8Z2Pznyt7lYOUFvdqno6X1z8oL7Bv52Omof4M6YGktmokMThlgsLnRHyUANG%2FgBxn7TsLg%2Bud5s48%2FHsS30eBcemXxqjDAaCT%2BiaoZd8M5z5JtaMJQxnzWiAi5%2FNCgnK8GTbE037hMhrl8tDDAk6ancZVq84gxkYAlMPRPrjmCVRoQPByVFrxQy49xFdUquEdbBqPzp%2BDFl%2Bb4F%2Bb%2Fv%2B4GNuj3Fhwi2NRH%2FBQCGcLoc4KpgHH9StdsixFkLImCw80AYDhNTp%2BX5I0ChSSUq5otkxaUNAoIeZAHJhTC0iMm9BjqkAS30RvYrRw8vegxzdnImEvHwxnnscwSpOAV8uubfMsNgSwmmahn9hFlgVRP92S0GQBwk0DPKjrDdHEfqBkYkXSYcGeXiO5HMAH1EEyJVo6VaIPnsru2XwXiA5DLRMVXBJ2SNkiU866Ku%2F%2FERS%2FKdXMpewqEFg%2F5ycxfirQwICD4eoIQIe1zhQgEMcNkZE5LQRquf%2BULSdsPvJ%2FlKqsTxkxGcrpRh&X-Amz-Signature=d4f83d17d7039b037e033b7445d03fe475c9debd37403999cf9c0edd2d904abd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
