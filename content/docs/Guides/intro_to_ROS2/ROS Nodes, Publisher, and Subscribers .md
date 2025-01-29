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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=1250f8ba7e8092243a1d159dba8454dd97f9b099b4951ea770de8a1f3952cd5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=75fd3127f98ec3c889ebc4fb6e5722966b838b0dd58d1fa67af1edc14fc5b2db&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=939b10a4c3ee705ff64ead1f2e40bfef4f8fa1242c9478d2046dfb3c3529fb30&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=9c50eb9d59a51631c9a1d5a19ec0000b2cfdf96f613341561dc6f4a7f68bc640&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=fdf05a1a023d7b2367520d603e1dacec81c581ca364b89832c79c6f6abdd0526&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=446bfdb8bbd76afe9e38872f375274363ccb2741f89ce2fff12b343107bf64ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=d5fd46f50e0dde7529d7685bf1d31741a40142448d790ae1931e82a43a2a05c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR6LPAJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwNQ9CN7K7wuZdFrNWD3dPEvbzTEnRIb%2F%2Fe%2FXTIsmcxAiB5tZY5ub6KHWJ3g7kVrTo4u7xg78yem6AImccOxAZ8xiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHc2y69ICedUgtbYKtwDEYCMPOSXT4Izv%2BqlBZf9LpvO5LWp96YgKY381YwFYNig4AqbUDdZ6a5E7G2tHCOZhrYudCC4etAEZow3gkLogXNGzZydYqQB%2BH4R1BKvfH2EnWPb%2BPiU79rsUPdrko1y3lwB%2FIVxNrRfq3VSNX5sixHqlxG4eJiXPJ1yzoA9AlkRT0ORCm77bzY6fjhmxbSrToa9g%2BXyT3EAczdia0g8NQulkG%2BrdbS1XdHvQmR4LzUE2cbQsrg%2BLtnuHav8K90q%2BQL3bBkII03Ij5%2Bobr%2FWZhPitNQHVKgQL3vN%2B3vUCMSga26mZM5NPGb3FuR1m5R6zVF03%2BG%2B1XC7oud1UKLLfyTfL0dL%2FbsJMOFLdd7eagxMdUG3R4O%2FqH%2B%2B9Wo0nCeYYGcSRUrH1b%2FYB0r1raTOroSEGU2sgGBaViATY5qNxVmrZ404S8zSpcvELKK%2FldTE7DNBJwZfHFSIfMH%2FSD5hKNAWyVwoeQgx6%2BmW8dt5SMYknddASU7FG7PmYvVvhW6O9RlYvsBjxbs%2FLGP%2FwKhA0j3n6VMvQITXTCbXq1%2BiJ2Lkgg7EU%2BpA1bfOY9cPdcw6BaVQcwGGZRv60EJRuwbFquduvz7R1cbHYdyyRb6gIOFAbBl67PqaaI0ASqcwtYXpvAY6pgF7bhxwWTq44Cno89Eirl%2FRWSVFOOzMkQLqHwlLOHw3R99XbHDXNLYN%2FvmpGM8FHo%2FSPti2TLLTrBLKRqgo7ubzAdtUdCs1WvAzoy0%2Buqgn%2FH3lEM7KPA8R9MXPvgA%2F4Ucur0bD4OMjZH4Jzy%2FmU9F7KApQEC4wpvwRK39fowpNLyHIGTBr1wAxzf2%2BzGbJBuJFt8QVzyC3WW3gIwd6bRBQHGnwM2VJ&X-Amz-Signature=e00835ba5aa8c89e8e6be9699fdb513868e7df6fc89b2591530f66e0d77f8d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
