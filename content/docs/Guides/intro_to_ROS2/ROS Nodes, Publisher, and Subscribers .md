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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=ffd38de47bf38fbaaf49eb188ad48106c254d6b7626196484244ff202a6573b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=69968c6edfc4399a5ffdc4d0c9326a768e4336479dffadb03cb65b5387e3ed4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=25883f9163e8595dc5c7cded211f5b8f5d5d35f60af12e0d37076acd1d9478a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=8ba967ae199dc42d33740d6959a6a0d6568cbe2083cad9df400df975d5ad75c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=61d0d2eb612b480b267ce04927eff22dc309896d52014e64f545d165b94ba5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=07fb48e683b28ac64b1e6d9a8ef20004e4852ffad43bd7fd0c036b2b78774eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=52710981048c43bbd767cafdafc01ad72858b16b39e9819f0aac6d169d160e14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE2JMGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCOknSgvfppf8CEGnwjvZZOMLFRYisF4aqhMl8cIAj4GQIhAJvo98wo6bfLXXYewqcHYaID%2BfrmRbR%2FRWo1Yjan2kPlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy56MjTUw%2BI0JXO9sIq3AM7Ef0CrX47iiM6ffQqq7vmVtKW8eCi4S9DhU%2B2Kttw5IQY9TD0ADD2AsDDyQL%2FNFipiGVD6RXzODvC%2BKwOqz1nzIQW0L1dzh5GVpF%2FQOcqcxF%2Fr%2FDvNBPunnEt8uz4l%2BR9XxAqCqUBoAVk4tcYxv3neUzEIzZl56%2BhRVfD88dZLASLA%2BbgL8bI61hWt5cU9NCDK5FKBjcVEN1o%2BQ2MZTTymNJOIzw0azSXKfrljXYiOZ0A6pcZsUhQq85k5hqdzQX8jqNCoKjJwrB%2BlV3%2B%2BJP1%2Bc3Tmp%2Fwz6S6lkMTF82IKllAlB5nVjrARBPlyyPOflVmbHo9OFr03ZFtgB0NI%2FQ4ajKNF8JiYgnORZr%2BT%2Bi1vjykenvIR74hzEgqhTjED5DnZEkQkDT%2FqqY%2BH4p76%2FllucSq%2Bel90qIIH1Nv1ChD2rqI0aE0xdVL6%2BEqwfFB2CK3U4UaR%2F5Je1o9RFk9byZTzC1h%2FHEFhLjsO%2Bx3lyHfEf8B249BVz2xFoGEek41k6F6oQxW9RBiX0JSwalLZ1JLDB4f%2BQx0DtzdOvcer5AcD1%2BsU7i2mK6jae4ixhp8xQE57vy0xBm%2BsUHVqB14d5Au19nODMEYOifv%2F3JoxNzPJBy9cC0MLCJn%2B6Q2ejC47rbBBjqkAUXMrxldCmdlYmuyKoZhDbE%2B%2BU39i1bVlLe7VOXyxHR8X8gXzJKAlvn7nMSRRMOmG4VZBvgHaWwHJ6wq1BfbbWaKeeJXy2G7jef4MpOOcOFhiGA9YYTLkyP4%2BdeAyC%2Fh2DMrbHPXzdK4rP37N1C2sIPmt5s%2FHC1tpFH36JA5LGS56bPaxVZfZJiLqB7Z%2FBMbWmSCkv3anaSOHr1BaI3xsIuSGRLd&X-Amz-Signature=71084d315782503c97032fae7fd0ccfaea731ea268663bc331094b9a90b12019&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
