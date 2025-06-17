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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=4f1ffecd0bf4f07e7ba01a3021cac6b13130fe951c4e23d9e2e27cb3ba652c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=875b2bebc696eb0c11ea1eda119ac9436e17d8df386b9239290d8f4bdf6e8c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=dd05473a621f28facf4aaabad1340073ec07cb71f9be20a9e7c157e1255dc023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=7f18ad8f24091ecdd7010c81b8505d25bf06f6fd7755246f143c7a5389d364e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=76ea1ba94c139a52e5d12dcb78f5d6a0541ebfecc0076d0a7ac46252e89408b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=7f3e934b143f5997d5cd9f788472e1450f60e0a513b12eba32dc22acd0b48f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=da90435f1f69a5b23cb2c935366cf4c1c3cdfab520c6fa1fc531cb68dce22bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDV6ZCC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDotzF404PNT%2Fxm84bJQanWmmdxnNNKz9NCzbRggJcdzAiBZCky17rYDDoeXD1gCzq2vASIFYIgMSTXlooF3WMxJoCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvL9S7GK5M9sdr%2BKwKtwDRbuit5EEl5y6ZRZ7mEJrh2Vs919Nf6XjOZ%2Br2%2BBiAQaXx84Ur8CSLASABMLWRCy4%2BU3%2BmGIi%2FG25tbFuW6KsXH1aZ1XrQnjCtVWHj3iCDq1D1G%2FEC2j%2FtokLJ7xvzSdU6Bz8o1jbfQwljE6ag8rEhSf6Y%2ByGjVA3zSmXU6tvGlxM0CIQszA4%2F7FjjlpW19cnybNcKblPs4Q1iqr904EMFgitXtGnjiORgqGB5nDtL6QdNHOEIXBIr5zUpVPD7JO2on9El4VelPEkKXC0pxNINHVq4D71L%2FUxDHTQakD7x87blYk4y9186KnS0bcBxZCK1xDtsgcNvY3%2F6bsUTW%2BmqAGTfv8IaCPxRvB%2FUROIzolk3HSSIt%2FmTnqxwVGS%2F657Q1mimlFhiHEAUV2vSLrBNRGPvzNFPoe7IRe%2FqjZ70gfDnDnYuQHCeRexv8nC1iNBTAtzYr1ZnI%2FK9aNLZaMygQcLOSUigHm5D8o3P5PUSU7PN7pJm3xr8tnZNSPuh8rEdq97PJGKhPO%2Fbno6F09aIKXCyLHrW%2Bx3l9kKa0lO5J6k4iL9hBKlFaKPckqjjwxvC90XrVkeJQa4vQQ6bQLBWIP%2FnJy%2B%2F3JY17mDDrDjFyAfDTMjzYgGSmycCiEw8ojHwgY6pgFFiQPddtprHfPzQZK2TWgsD11RqhiltCr0%2FFIyikDEbe2imS6KiZA4LM9bRbLQM3OyQLIcmORTvFqpxGdwdXYmJcLOmVkRZqGmxr7fi3J6%2Fcd3zTfNMrNBmts8qbzIyaEg3kW3Bc9HOD%2BYjOuLZorwpbdTX1QpcPP6lYe7xX62PHYTN%2Bpj2NV811eZeQjyz%2BXciA83Upj6XbsYO0yc%2BhjUJEV3kueG&X-Amz-Signature=7c63de2779d4e63e43d1c6437ea250392bedbbed622a3c5fbcddd3d937ce7b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
