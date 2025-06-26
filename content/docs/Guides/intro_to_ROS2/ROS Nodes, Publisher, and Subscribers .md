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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=0cdfba16cca7fe5befa1c3ee7a76ef4ff12e61450d43cf3491c21dc1a13063b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=6287554fd37c26627c57dc8a8ad9134301758bcd7e6a944cd3052b111eab9247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=bd157002b9828f8795e949c78d613acd6b418cfde31f61733ef5bc063e1e0fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=4c4e52c24f73a55bdd47cb976744161fdb0d2f9f42c18fe213288f6d34ea59a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=8212ae2b1966ee9b98613c9ff56fb4b7e190aaff9a553701dfa2051fcaa0dd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=683f50dfca93534e79081fc040f3f7987716b65f4e6e55a2a7a312752b1bba46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=a736ff9fdd993cfdf31e07131a238a597dfba4acad2a32e6e389d9a8562bfbfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FTEE2N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC1dBDHC%2FilEQp3rm30WMRXexls4CAMjufrVOcJ1cpTDAIhAJfSB4PJttxrvrstEMrXRYj9HISqp1gDnL6zibhXWPbAKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPiqEXota433FWiBcq3AM1XApK00jRJZz%2BUWiiyXdJ8%2FyxF%2FVqKDAhMr%2FKXwkoytahu2MbksQM9yU0R9zhKsORBAPKYxd9kXwFJAZ1ctxwr1BwTRBJLQmmMTt%2BjK6ajoaRPDkvu7OYW0HzCAYnsLFJ24TYyss85F7u1EbGuSTRxWChHXZSft9Ngse3VkDiXmqBa1ueYcOg2ZM%2F9VDYTAtKHEINRMdBBGjqRG%2FuiHXVuYzhR5Xz1KsP3wj4%2FKKdOpXJRRjSAvg69FVj3RkB85CuvrdFxPaIxg7o19qzxB1Y0A9k86pGufRlLJ8LwtqCjW9JjUdhtvrApV3h8V3iJtI7CO9O8g8n3n4J%2BoU7CvluCyW4PXD%2Bf5o24eDdyEv%2Fk0QIFALvgvnOEgXL%2FeOmz15LVtZ2Leiky20X7YlzPBmxZZbbAsxmlh5JYOy3rwGoz777BDkMkqRB1qUttxG%2F4%2BYmssfr0Dwo70%2Bg76G9AL%2Bmeq2H65Hsq3xL3qhcWBh1JLbRVKcUoXtxHLU1WOSXxtitKpxZg%2BnCwWhA7z7ailpCUA5qAaFLUZEdFQL84dytwUZR5HVxdhuQSEJzR3PYWi0mAMYaVBSD31DO2XwawSO28GlHQ85EF6fry7LpG%2F7XQ%2F8fR872cBRM06zjkzDRyvbCBjqkAa6LxnJ00EzPZ%2BKu8m4MCcJiTmJlas0%2FSfFI8bIr2LYxloj0BB8HoKHKiwJ%2F%2Bou0dmcmA8CH5Yp5Ect5gW%2BwzFa3dfeX1MQv1XIki4K2uUW9J7Hz%2BWJKWs0QKdNum2hnfyeNSNhxOP%2BueX96V6g39U%2BAw7H7YsulmWqlc3c1Hahj3PCWHrP5ZhyvUF9%2F3kgHcw8KVmJZ2U4YBr5Il05lcwkMBqL4&X-Amz-Signature=b0b62abe99662631814f5437c5779c93dbd32576f080ed79db7d31f7a22cd123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
