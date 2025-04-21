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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=f47c73f4df68181f338c14c6b3325c885ce69f81fe4ba29230a2c57f9938d598&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=bfe2b2cd1394db3fd80697d4be24384648e59bcc996de498eaad54e752b77f98&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=0f09c92c744b1e855cc2933aacf297f1c124086a59dcd4cd85b554d2d0efc3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=5b0649ba88852550988e72e94e87beb981a4537b20e99e241880b7e382dfbccd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=cbf46e2e6e03571f3db312f0d4d85a804b54d5b8446c2fe395aa97549fca79a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=a1539acce8fca4837610573c306b1bc835560762659503d333f2a2578fa94af6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=d32f0f0d38ce5e0b096a284ba9699d437e7c22a7ad8230f6fda178bf822126a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJONOJV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCI0Dvs3oQaXMTbqYsPhq3S3NegZDjOO4zOgJptIhFhQgIhALO%2Bf0h19ya9brKU3gv3p9Z1yfTlH6Y08mtKTpjCpDDpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu0OZF7neNvxQt86Eq3AMni7pPZMciIJqkDZ95s6G2tXsiI3EzGbcIL7mxI2%2FTh%2F3oFBe7HwSxKjXW5yay6nBquz2BOuJReDQQc8qWDBkc%2FXPJUyY3tygBYw4ZTWBufsSmmCo1rdaq80SfZxFGINQjffyilC1W4tFciDd5tOhNloHYJoPsPXNmTeZi1w2msKxm61d3DslJx2PjhCEqCofmKrsTq6ejwzINeeonindWGMlKjo90mfb3%2FApAUFR2e%2BD8UrQ%2B5VsDHY%2FpP8PWAaDU0LMeLELqS27M%2BPuLRSGpKUwMuL%2BSl0PxsnH%2BkJnoKPK5QfCNuZAMFPUTfFVKjn14fCZt8spf8ePRyr2cdLgON8XZOvls7GimhA%2FgPvGAswrYfpPJt1jh65wxrXCgotvnyrHXsutxpj1EBuYsgMIwP5OiIjZKVLjCBkbGcXbEP5Ay3tyfoBEN3ty2XxWR5%2B3SL9lj%2BY%2Fh5f8kX4hapDrA54MvooWBZim9yyV3UpH6LanyV9KWAW%2ByjOzOQSIN7wEuVPLKu%2F3lS4QevLGKrOwfT7%2BvRunxuE869b5%2F8AOm77jE1YYSYi6nzutVsiwN%2Bzj9OZa3qFWPhAt86g8ghWVw%2B6eNF0Ka%2BBDL5bHvkUVi6Uzi1WvqFrWg8oE0RDDciZjABjqkAYJe3GWHtF64GCvdwmuUsMs00if8oPVkxKQ8NF2UJV4vta4EX0BVWL%2FE5t7m%2BZwJAa9djhWJe6PbP1cDZ8wbMEgcmnfLm3VMXbilCkWQ1xa2QFsHn3jPmMDIpjGeDXQO%2BwZ6EvvLABuUM895PetE7R0gmMxi1WKNyY9MkwBm5Lxd8tB%2FsAUkYzDL07WV8%2BTXigIeVyEg7upklRgzUvEttGr0RKGs&X-Amz-Signature=9f6e5e44b9e9410af716b94a12fe9f7c9049504129618bbaf269fae22c1ebeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
