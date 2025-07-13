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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=5b54b1bde681ec493d9ec5574a2c7d566b253658cc66a0e057e81f92832c9a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=5e1ba30df7738d8fffdd9826e78b8d7f957a0c8b0c82a7907de3d7d98c6f589a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=d3a52b9146217f2c9969cd0eb862c073179936c32a507af5171f34a19a71e40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=a2491bdcee0924142521a689e6c1f0b300980ecb27d9b7cc9f1e05b925c4d1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=dc0f37b960d413f60a9d36f1c4d57b9b5a88f3a6c041d38ff00194abee65516a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=5130227b74328d4f6bfba3040414aa6339a10348efd3788494ef06967f2c9711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=b955f091ad94cdb62b9b54cd1286eb38bfa7f0f4a413f1e1e136a4e50322a421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRK7MJM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDoDxPASiuJ3%2BUMraBhSXWZQAIGhjv02t1IbRmsGhTuEQIgPSGQNr0IruHujL4gXrFyk7HXlIxX1q97TemFB57wQrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEmtmmZTPxjNjKXjeSrcAznD%2FOqWrYXUlTGgw9dwbG09rhSRpzOTQeaKfLRo656SwyOmqjaTxFFPZ2CcFRGOEGWFwnBYU%2Fdcgg30p9pOx5jkswK3uZIaQrhmNSduoac2gQr7uj92ykXUvEv%2F8d0f2xAtNARbCxsct%2B1P3tzXULOel6DPBoZDSuIMBILFgcgGIszVde40ro%2FVvHrYm2b3YAD9iLgw74jO8hJp6eAVg%2F3ZK57C%2FxovLhyEw9aJkfiONhyfbFSxCB9m2kahrcz3MnHgI0z35qXFHA2jPz%2FOPhZ97cVD6ocuxhPM%2BSL35WQIyR6zBwRPOEbqlktO2KynUHN3AZwM%2FQxwPM2Hw%2FqF1sMxcEvgMFeuv6hqRnp5ledhMp4oZlvWt%2Bf%2FlA5%2BfZOsmyh0PpvGm5UE4hd3wD%2BLo95GEasha6AhTGG39w5feEf8PP9R3izhEIwYz4pUZn3hco%2Fe0HvOuWxVjkEA9XEEBscpwt3%2FUshnyu07r4MciHmQD%2FNVbge7VXDMvkMPyWJmrm0g4XWlqgoIf0bYVwsvuSkiyaKEHctT1CexW6h58UAZQaQIUeGZ8nfrNbx8NWkt7n%2FkH6sssPATS%2F2wHdgvWE1Rajqg5N6BNQi5VJTI01F%2BCohVi48h7SSl0ia7MOCQ0MMGOqUBHT%2FE%2FRVPHsvT6COoxYnsfHsM%2FIwUJFIM4V4ehCx4SQ%2F86EGpJJCROyafJtOA7M7D7L%2F2IeO5Oak%2B%2FhpivCwurniTar8VZ95Uf1M9OdPhO2TZC7GOMR8RvtNOwJiW%2F%2FB8OTEQH5v7Nx83dP%2FTQJN%2Bbhl1LIo63lXJx8fgkXzAPD%2Bm4NpGIyiaEk1twmM5VFINU8EZwqmqXWUNHYzSymxa%2F359UKQb&X-Amz-Signature=f17be575e5782ea54f8f7c93a7fafc880a1c5b405b653ce2ec891a31260c29cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
