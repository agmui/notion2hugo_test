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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=1bb1652d08d4ab74161b63d7a310769dc0177dcab718d4522f220d18f88f20cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=2a80e6401ae6d07b5c91c36578b52af9c491d53de076e8d0d74fe71f25883cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=eb2d662a08fc009d43c07c1b6baac82f0c881fee741a2d8121857658b913a712&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=bd6f8169a92899df1427d7a580f5b29eb0ac5e87a116a80a0fec33c64697da03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=9486ab4dd49823ec2a929de5e93ade50d491648e950bae5eca666e0ef871936b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=07e8690c5bce48db241840623e87a5a41b1edf5cff8291b75b66a539b1f1dd07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=0c2f23566fb1160246c132bef376434a3a538aaefea423051271e06f5d57ea67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6RKK5TH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQLouBQr7XqeKA0UnJmG8ocra4tLG8BAiKzv1nZ7b%2B9AiAiCXBjpxJGmG88ldv5NZfNUPJ5eLwTKS%2F1RZN90dhrMir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM0ED1BYkjYAg%2FddsSKtwDZdafxYVW7d8NOO7Ozkzg1t6tXkffindIE3yAZakD6OUNvgeUSjI%2B4mbh95T7EXqBOfpjkVPpImOhnZ6LUCVZqeN3Cd5bxjARDwEUbu1%2BXlmsUIKSvs2HiC8xMhahzMeOVd00c6GC8ABaDgmfO23%2FU%2Fz9xxkBp8n5IGM8JLxBHNYWkZM00lkAcTBjV%2F9K5fyGYq0IFhxmVoH9wnTuPlS%2FZomnaf3fwJ1zWJ2H3tOu%2BuF6HXbICe39G2f7g1bgGG9OGfYNCmc0wpX9a5EEqyiLcrfg0OfZKCU6Gui9zZl5vGMlODdGHz9JiD7Gzsw4GyB4cDHm%2FSdkjzo0Nvb8Nrwf8r2RW5KwsBsB3lweKS1zHu7Pd5whWaa7F%2FSukxrlkWiYg0ACFA%2FQa%2FrujqkftkHmQzsNWfOHmBch2fqhsJ46wIBCQFgNLnu%2Fz4stnnSTF9HkcSSmgwstQWW62ggwJXDJad8zf%2FDGyfAcP5F5YEljYE4xu3VYCGyfpO3SSWInhretdBZNk3GLAlEJwRni3LiwVzYoT75fOwgk80A%2Brwe%2BuwiT90W2ccFc%2BUQHYDfm4QhRYy%2Bk02ffdTSr0KJYycC7LwS00cDEIJTePIZykc6ZHowSGagksxswbuYVUM0w6qGMwgY6pgG12DLc2Ba%2BGapUWugRQ7k3TV0U8jfbkHDpMzPFIJU8u2i7AiROnVK3pe%2FsM1QbsL6W9A9%2FAFMB0JhuyBpFmAb7Jqy7aNM6FTQmgCcAXM08u2Dtj0%2F5AkNg9kWymipMjvSFG43rXWgXHWNY10Qw%2Fe%2FhxfSPe%2FNVOWdXTS8C4itcW1pd8ypHhEcoe6yZVAQLHfwcl%2FyIE%2B4B%2F0OZa%2BLfG7jRYK65dlHD&X-Amz-Signature=2932233549192b9ea5b4f3f344adf5a94f85ed797ae8c5215d6d117185864212&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
