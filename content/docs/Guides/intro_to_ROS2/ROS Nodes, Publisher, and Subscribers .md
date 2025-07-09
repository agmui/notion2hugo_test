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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=ffcf82089674636fa22657875033cdbe7c0e625f590dea5fcd978c005b6bf82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=e98eb1182619a99b5f449ca333f6bd4985f7197b1d3a996d05d49baeb7fac05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=aba941483b04013b89fd0ecdd7f278bfbb9db369e832ed1fded1e3598702a692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=3310e4930345c0b9417bee3c20152a543123d079263b4ec1ff641a661be7b1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=175d411388cf285cbd3b8dc7ba570d0fdd76b845cb79fde8ef9f3ed9c161b21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=ec7aaea5bd6b9200f5d76577a3b05e2195ca2da63311cd74b405adafb333debe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=73a94b9ef1dd48901536f0eca8f53c29000e7fd4733f56fd3a10f19287bd2cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGJUM3U%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqgfdBZ1F37UA3ADkQdTFeegVELHFteX6%2BSBFOFhogrAiBxT9qFmUuMIba5NvPuDGX14bI8TxRkY5I2wGuAfCIzCSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTIXVbvk%2FgTAX5yj4KtwD7q9jVrhYR2DgRNold3ut3v7naV0mMhg8mUgqhGDka4pi037pBy44dqjtuh%2FBlO1ZxabecEii5Ncgew9AbP%2FyrxkJNtrrR%2FZ1ocuEKmTe7mnfyHZwClLmfcOoOPiZYZEOgHQVbpYelbnw77gDgXD9BAhqg33HP5ZobWSLSRQlBQQIoYuYLncnUzIHiUlwP8BeMGCc0HzBjzsQxNUL3nv0Yf1INyPB5uO%2FxUTZG4VanRfhTgFrjeEuzJe8pxTp8cajn3WvkbkcQ1fZZ%2B3qkqHuFuLqGWEB7yFPsFq3RuI%2BtinnfXsJolIfOvJs%2F6l86GccDihGpmvyrLcriWWoq%2F5%2Fk5i%2FxQrp94QWGGLYXi71R6N2fsOoSl0Q7XT5MxlBh9O%2B01pVQiVOt2Y2oU4KPdx7Ic%2BAT67yG1EgqU%2BrRliVKvbPsn0JXkQtlU64Qc8iPn1V8E%2FzyAowVTWq1AqGI3LkHbctyiIzW%2F1XcBSfxMPQSp5A5ez8adDNhigYhpEV3VKpr0Mfw7rycR0RLqiRl1YI3Z%2F1NoekWLOfUbWT0lNTh6RrXBU11y%2FQJys4K%2F95sDZget1E8p906ZUuj%2BJ%2FO9D385Zig5DEpvjar4yd8OCPTN7H4Lr0Vg%2BZolEA6lcwzMq3wwY6pgEGok0FEdK59AmJB4hESrpvZGl5VETf7HVoC8w2rbm%2BJSmviM43wathReLKjXMNzWtjI8%2Fp3q50D18Sr0h%2BWsSrjBemwV4eVTnjMXjlFJhLn%2BOVQ1PMD0q6ttUQSn4PWXgAxnMlkpXZgovrYLrY9%2Fe4l%2B03EwKNxewsylXtsmJpkH%2B5g66sj77Uo%2FobrHZlPJL2Sol0R8r439pdR%2FV%2BJPkaH%2B%2B9pzRK&X-Amz-Signature=be510c630b7663af67bb3492c11a765f1dee77c4d7f53bd5dcb20db7d49319df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
