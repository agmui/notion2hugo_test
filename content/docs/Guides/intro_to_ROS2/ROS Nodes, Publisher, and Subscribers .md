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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=7619869c4200022cf59ab3be1cab021ec88e50f3bb8e137aedaeadf568ee15c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=226cd81fab897dc785eb987b6f44ccaf8f505f73dad0bed1a76f864f9ce0a1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=88b1bf730c7ded4e7da25d178b05a87bf920bc48e3d542f5128e6b5b8fc25f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=f8f786821ac96dd6eb60d3d48ade4e842bd59dfa91d555f01ab44e17399c4498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=3ebe0cf0d41ec74523bbd136e26ca686b3c389102a769f5027e8e5ba08d066a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=c87345e96af2aa2a52dfa1dc1e0d62b3ce7fb4b8c8b613d96047de9494dced2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=bd969c5447d7b18543d463444c7a84697db19ddc9aa80aefe8f4854d518eb380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AZDK56%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICehStMjmAil20UJ4jzA7y4liHqVHcQ4DxhypStfCIa6AiAR89GkUagww61ZKZfBfDZ5hcvSQrO6bKA5WQqAbuj3USqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPoZuID1e1dKpGkOKtwDivtgU4S7FrkmaLgyKNeuGiePPiNZZR0J9K28IgD6hOVG1nOVtcgUOEDyWzj86SPFEf3C2k5yd7RNGuLi%2FL1ePd3e1A2%2FZo8S9daM9M%2BUrZ3Opq2KKr9VPc4qwBoys39DwnAcTPyrvh7U5Ij5qnGB6DgkZCQzZd%2F13SBm94N46oh5e%2FZlb7X67XWwtqQe1rr9NVR15r5VWBhrXvTi%2BBSqjC1bwPNH1Dx%2BjJu51fa9r3043qiC2AUI6eowqWNO2S8ftjIsrTHYrXJbshBw0nyEbgkGohTtZ1WhnjfDLSWqfQmfYAOQazSIHT3kYMW9KgTY0tjedP%2Bq2mBh%2BXgnMDjKHBriyKawUqLp6CZ4O8zIWw0Z%2FuMhsDhXnymnqwZF4krsVSABxjttTgy5T7TsgMRTbEGevcwYSZ%2B4jlROLKZdnW7FB2MD8O0fXeVoNjPa2s77EpUXcS%2BioII89uA%2BKLBdhAqNMxhXNS1m%2B9ABKDLF7rQ%2F76OGeDH%2FJXw0BBMyA3%2By7SdHeosHYUH5tDKkKkb7MqzPvtFmc7P8mb5ItPkyXcoCYT8Hi820ZIIdF6oYOU5jj9bTHJax8peawdzQNjtOthajd9KSEreFIUblijNo39emTjHssZSDZD2txO8w55%2FWxAY6pgFDaICBMJIh%2Bd925Hq52k8sQP86%2F4sP0DuoOHdweY64hSCk3ARCb1n8CXcZgMQGJMlptKPabW8%2F76Z%2Bqa%2FYKRKwI3L8KcvDvkB8dXHBc4ukOJdo49391CGG9ZW7stYVn3hPQfD9XD%2FWYmCcgg%2BV7qNv%2F4E2HNCHaNsccRPBpe3JwjNu2lnnnR9O5PMof7QiVIBf7pGFUcQOjebnUsq9HJcph2gBEaDb&X-Amz-Signature=7d1fc587a6662bcd49a67d7d9d35319a506427aafb3cb22582fb531e2f580230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
