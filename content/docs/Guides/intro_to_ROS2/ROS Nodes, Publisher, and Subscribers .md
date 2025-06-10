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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=084d9fa26458254a5f05b3afa05ebee4b210928e3485610245785707103608a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=4e26be13431d8077f358813bd25cd6eeb2305afb33b19c869cf969e2f17080be&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=56a16a7fc4d958e23de8c08435ad5783189926ea84027ffc7e579db9bab0be8a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=030a4b1a9bf8899f357495e71ffdd06f62a02c188de6f2bf342269c3fe4f013d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=93cc597d52801404d2fcc2643ee1099940dc85c840f2d0a730e0b9d61e0bf3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=abf141a996128fe1c0773df775c663248e4421850e7208ee97594c5febe0ed44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=7e8e362651919bc289bf1a4928e8488e3e6ead95e5e95db419798436d1746217&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC365VHX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX17YQrkZUX77Teib9M4mXsMy6gvEUVYhv3KRCmJD5bAIhALji9gkuIOMzfm6Jj7FHwaojkfzHULRyYAxEdCzqWzs0KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIsff8ZgfB29I6TBcq3AOyrPjVx3aY5nGs9cKHJaFerNBQqH9Q9ZsvZC61RtevLopGId8oUomQx1BSTbiW44orP%2BzTIeAt4P2YbdXLNvAApHRukvSIfOTMzn3iy1NErXR4M9ZSXicGx1ef5Mg%2B7b3h5JW9nuCVpcLn%2BMk0rMjsyoiLHfFIkLGCs7etE6pcPq45j2hJScq7az6MP8CX5mUyvPApj5PwOaWGWNspnwMg29ozdojVkIrQOpSOTdc%2BNgYlb7WzJbx2FJ9M7wYKIlrAwcaXkuwj4ylxEiSU2IjPrjkbEsO4846w6svgeJBQ%2FGwO%2FhB5ylPCQ8YmfKBsrxMlxk%2Bxb5CF65mgziXp1VvUVJsRA1akY6QOw%2F6vzkTfzr%2Fcb%2BWWE%2FyCFicg08KG8yAwxbYQaIqjXVA7FLK0XBafPEHAMd%2FPtsCfCw4upk8vwExVBdiiG3yl02Sm8bwNkViGDpOBqtoS8xExrPrKJFsMzBIX3PlNZBcltJ64CQOqo38cjYARoQaGpWPoIOyfrPE6ilpUNrT03P8O%2BElPKLrB8GxPII3xcFjn7YMR5iBA9e0EYi2t4xr7fh9xCw1yjt2cilCD2yl%2BWJnqSKA%2Bc5L%2FwMjCEYfqP5QlCFxzudxQfRSdgLZ7YDeaWlTKszD%2BiKHCBjqkAZVn99%2F6U7m6WHlMF4Eqk7BHcDywaloHCSAg3Uka1iUIHi4S05DkF1xOaGpe9q1GopXkCQtP4vseGNe3p9aJX8T5DeUO20bH8lpKyXjdYh2d1oerHtcd%2FMdIfb4tiB6HTGf4CH7tStg3klKX3vBEhwIxtr3QMb%2BsqaV2g4hrqFGEjanvbUuGWEWPFH0Zz%2BQnOmRhVTTUMEOyX1%2BdeOP1j5fFJPBb&X-Amz-Signature=8f1e26c6b084d8d802a5d77b834a6dc7375f78c5c115c1a63a898993d9cadcb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
