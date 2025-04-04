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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=bffa0b28d2183b3b1d47746662dbe08295bbddeddcca9792930a42a43b44e23d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=33473d04a4d61355f5a982a31dfe9a5807a4dad63229bf995dec5f4d69d8740f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=c4d75721a8b2fe37f0ec1641237cad5f7caf0f9d00faa7096b1df8070dbd6d65&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=4fa34d8b331ed93afcc03183e1f2c3673df6a801a3100dcac391d72478dc2c57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=f0d3ae8370d99d1c510a8682827145c744ec52565fcee268a3e5a13246a0b8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=3ec5fb128bbb00acd8d1a49525dd7b4115981b462ecd3deb3b4dee83307b063d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=612a4e1e7e140adf411dd039869fc8a247067753d82eab810dfb82b6fceb97ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRXGS5N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaVTVry8Te9CvX%2FUnEbcHJzWPopPSnHZO5NLLvOjc%2F0AiAxW33Vc1BXq7p9wM1iidxwXC3HOYLx6FOFyIiDtlE%2FkyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkzDQ8adpfhJVQ6LKtwDfDQrDYyVjkk8Bci8%2BnLEHdzEXE%2Bo71KpO4gJa%2B96FNZVem%2FS8E5zbIDxNIsx%2BYtsJyc3cH83RTaWS59i7Sr1tTHUYI04Z6MOWUdwfKIUyazlvcLTk%2Bybf4kH4hGnVQt3IuV8m3l0ANUhiH2XRGHl8TYbw3Sr4r0Z4%2BDs8GZI3tTuhet%2FsMqRRVtbmE%2ByExiB61MkNc35j9Gh0EJz7UZNvRm6dr27qNXrYnnAIRVIDqjUppcTgfDSpu1YDurYjs1j4%2FUb7IbFjOH5Sr9oPniIGY%2B%2Bwf2tD%2BdHeMkqtQ0oxUbeEgFzR85QstEq7dFCbQbN%2BIxvZDLPM8rsd63U9xULeoRFthdnKkGh9eYw2i%2B%2FGwLPAsHVdjF5%2BnLVr372%2BP%2FvJzi5hDqbFCmJULmjyWNSsQr8BExN3WEL7xTmePPkGdg3apIPdMNNYEKuZejUiiK%2FLoYUweOj6bUfTq79AXZbyL8c7Jx2jZseqbwlebZH1b4iXDRohJCDTUWss0xGwhRHDtb%2B5QVsAVYW73qkqQb0%2FS2dWHbfIY%2FI1rYiT%2BsxOR9bp3PeOcmfi%2BQusBGUXhn1wAOiwQHzQV0aW7mCR%2FRsWMT1LNecJGYQbZlMNhTFhT3CF5iXitLaJ9aCDWow%2FoG9vwY6pgEKgz%2BtVnsQjluXbGOsefiCJHarUS%2FPDU1i09hMY6wUAzw4YLCbqBtqrGqP80ou40vTBBYdn%2FakK%2FNRo8hJN9hwrWfGXunOWGsslqamYrAooGrHbJ8PjaRHfr%2F9uKf01MPD5048cU8Zbp7fpW2lwXhu9dvwOdzzNcgNe2xkOG%2FcAlAHEb%2FnS8r0DPTxsBYxZzyxgIGYtmb%2Be5dcmWF%2FmDoxgXKzn%2FFW&X-Amz-Signature=2e94397a499ec6d8321d191aebee00e476f0b88c4f0fff7bcd6d1114553d894e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
