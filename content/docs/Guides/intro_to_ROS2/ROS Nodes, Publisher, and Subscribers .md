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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=6bc752d382d9dbcf2a3e7ddcc98b8760a7a25e10e069a88e45736cd13f917bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=8dbb8c00008e7289dbe348e38cca2058c40d78666a905042cb752cebe2bcb224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=a5c93f38af808133e3bcaeed3012955fd7442228aa7a1aedf9634f42b037cac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=7e73f1c13a8ceda7d197e74576567857187d4e3415f67673259fd5b70e0b38c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=6e38294985f48fc659db4c1d71aecabc21eb255baac82f157d24c8486ea49266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=2e5ee9f1eb6866ddfe27e637496270704835379dfad070f0e6fbfff2377e513e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=5fb5a0fc490b8969440fa75cdf94644dd3ee972f28ba09515659344ba22036be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRKCMMX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCHRYl%2FQwJDw2D47HvWmrG3UJRmdIwQnQg9nuHyS6xz4gIhANS%2B%2BZcoOH3jf0%2FHPxixMG4YAujXOefLHWdZqyr%2FIZ9eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwMF0%2Fgjf%2BQNA%2BQU3cq3ANgaxgYl52NDpPtK2QWBJXberXIl7Fb9%2FjcQx5Q7ag5%2BxShKoLRjGF0K%2FZdEMFYuPYLDLQ445mVJVtIbZ21OBlE06Cit%2Bbh3J1Ntw52m0B%2BRMLoqIhUxfc%2Bhg%2FNrYZqdEkZNcstVrT4uoF%2FBCncxGkK4pdC2%2FmaXpEe6tGQ5QKid2THrURhfVYWxcZMXTuK4L1lW9zoRaCThrWYyP9T8oMyy8tEBGLXiCFyhHGhpWk2xVTQ3X31M8lU%2Bjj8FFl7U4Cj0wv9e42r9KOZltTxkWQlgrXW4zekBpJr0RYqiCRvWQ%2Bbt2I%2Bkg8os5%2F0BG8t38vwDVo9Qg9pG%2B%2Bq3cy5BCbt9b6w6KGQdTGzb2ZUVD%2FUsU6PC1Vsq%2Fd2FJNmpOwwnNdG1%2By6NEu8%2FthUgaTVFH62KY%2BzHETCFP54tc4zz1YOcX%2FBjnUjMfJtW95pryle8y0gkhnu4Biw5heJ2RJUNRQhBWzZA8VB6KlhvMMMr3LCKnml3jEeFhyJduPojw3bCbbtFu23S0HncL9IL8Lcyrmk1newhyTkR5nwOvcB%2Ffv97Lh19omssdsounCpvA43Gl1Wh5dvqd3hJ4lZlRLClMow4xaMC3Wzvfjz61ruL34FF2l%2Bgoeb4zwmQmx2UjCwvZ7DBjqkAZIlQRW%2BPA00JfrFB5HBT0GmTrSW9SgTZcr4fuKBOGBswHq1ukMLntoDG6Shiy4WSkSc0fmZyjDYEg2RNsjsKuSYb3UAUsJGrPGTIWyzj%2FMp6TaACjijEqGKfj5G5PPjQ3Ifa%2BeJFh13xbA2pbq5msT3TU83HSWYMAUTNGjOv9pJ2NY79jV%2FP45Rk4UdXitUZOMpOi0XX8J3j9C2WAuBfIrYGFZZ&X-Amz-Signature=c4d66c087b63cc289791a8c3cfcc4099573edfeef75d4553216ac95482b57ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
