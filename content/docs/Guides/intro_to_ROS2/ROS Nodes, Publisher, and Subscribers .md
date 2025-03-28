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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=df0e266104fa72fafc3110cfc4aaf64d65124d6a3a4165cc5ba79bf9d820c210&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=0f73dd5b722ca649cc37062a0ea805bda45255e9f97429d2d1ba7a71043dc130&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=7bd895ffbd19ae77d68ef53dc3fc5301b565c5559f6b0ffab383f774e690ee2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=441a451f9902d5e3d0bc8ce4c24acc21e60bcaa5cccb917c719d261e3596f228&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=da95807dac5c8ff59cd53eef29bc29e8e23e9ce106312c6b1375a55fad97c25c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=06112eea54da9a974d8a4170cc6ace14223baa303c764238fe20f2de02f85825&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=76777ecdcf74d1965d878ca11c813e824b666c91c1bcab87bacb403bb88abd81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7GNNRF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUsANTIM8YMSNyqvuj9ISl34V%2B3ZQfTov2GHtewwYFAiEA3bQrZKAaXfUSXbauPhB4OEi3ymjfn9X01MwIcHQwSeoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNpxmosOWf46LtHT3SrcA5mjMxFBW1lFbMCwa%2Feo3zmZRliVc1ghxXw8dmI37noAmZCBm0NYH38fVr5vddYQtLWL12ocKsLDH0Y3H6l0y67MRrLH8E%2BaGdfGrgJ5K3VfpQtWTTFbZUfpFCO5Ut6nfBZ3uWatTgyygJLVoD1fHtZMRx%2B1W6ylig%2FuCQ3roFadNmDqEL7ub8p0J5nSvaXdnHmiQIeIskaEomvrpNNqKAHvOjfyFwqzCo%2FMycA0LLG32AkAVM79cpP7aVMdFQxqc581qPtXfz5wBr38qt2JRXCLzTQelbHdvF38RmVuGjt8V%2BqkxJdQn1%2BKmM5897ISdFtasZ5W3r5Zf7iUMKXQgKAHJkGWIUdMZpNDYlamQ3rVQsqw%2FaLwRveg2cNd7fP%2FfpCqziyFLGMXmmPefAQxBcI3Y29773XkWNy9hMmirPiUyBzUkYhiLIddqWwIFLzJIR1K%2BDX2SSVRIbpuSpT6vmvQdtf7KntXMTvLN5XIjEZJDkTnuAH%2BG74ZB%2FVKjxw2Bh3JoUotG9ZKUASOc22OW6xXJZjU4oMx6gAFgYmOUphXlAleQMrE%2BFHAOyv5ENQUE%2BWlQinmPpiRZ1lwoY075%2Fw4XFLzpRMe5P11266JUsS0MxJeEBhd%2F%2FSFUKDJMNKOnL8GOqUBD0yzzHD62oSRGqhoqQ9BiFvaygSy8YnI%2BXixALcB43t1v4ZuP1akuP5w9a6USjM51nz%2BIQuEQLcHErBtykaz%2BDq8MwkVCQ0Wh%2FWrYe7X4wO6GYAZHA6RPy8Ht7JEP%2BbOF8%2F447h5D8EcgMN1ym5ei8AoxgyIt5sgtew1R6sW23WLNVj2kzGUXBZPQThdIE%2FEb%2BqBWQGq%2Frp40cIJDjRKdtutpJGj&X-Amz-Signature=b53e5b030f83f6cd47b96203f15eac519574e7708ac6fa4d75145757b56d82b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
