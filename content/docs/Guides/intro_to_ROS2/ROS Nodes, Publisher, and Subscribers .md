---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=7ed7470e636e75b969513ccc44605233776570a89ba920469f6452224f8d1e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=8c68c060a3c4569fefaf661b8e62d2fe183e08a09a0cecd95520630d18766b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=7b4bb942295915673a48d7a14d568cade9be5e7a88c82aa64f8b99b04eff5015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=7269734e65daf2e25324722668acf03ccd48077464e2f986f259d3112623ba28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=e459ac42f685d2e2009db2bbca66b24682baff15de672a623023dfc7cafaec24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=d444470ee20cde3f6a9d68c25f19dab909f8a90bd7bd9afc790ca618f2157730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=dd1ea59c848a0523642ac8c3c5bb6c4cb24f150f4fd1420c5534bcdbfcf2fce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLIJ5NM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kzwFGDeRoTEhShNX8a0zBefYKNZL8zDqPlaVVUmaNQIhAI7Mz%2F6LbcRY2uaGwvR31x5s3VBThWyqCJupLqC82EhYKv8DCCsQABoMNjM3NDIzMTgzODA1IgwoHD7x839tJXwJ8Doq3AP90XHQmZR%2Fh1MBW6G5thjm%2BkfcssEBKR9S6VLoK%2FnDSFj8Peanf4r2ionP%2BbHHzm8xfe97BLufzuvhuBaKqaI5WeohxWvgaFKKwShu1FUp7jhY8LmEdamvk7baZo4UM6PmaNCODpqzhgt7a4cgu%2BT2vfDZ0pR6pZinNpCu0sYHpcdSAXPD4NjkMbx8R%2BXLzejoBnnsQRPhEe6yCtAvSu4%2B%2FbB9bUrCmw84Gp27gk272z1zykPm0PFmh5p9ZdPvvIxQVJOJMfyygBrjK8iqS%2BLAb93SUmHgP%2FrnWAXs1n5%2FKMuFJTta0WKksfO5DQ5O5dZM1fiFINusIOZnEiw%2F40yUQspAlIfts22J%2FXq8XRZzWtK%2Bc5j7RXDrKiMvqpZ58uD9y5vOV1bz0J8rgmEOlkf7%2BA5noGKpR3IQUoJocYvSxRXlb48pSvo7Nsgt74%2Bamt1XgqO1jFSFGNeiGeM9%2FIvm3gBpgVLgqV35lDaZvtXUypKEXKoCOOkIemWRWDy1QZUtgKtcWcB4zluwVvlrmtsLEYubl4HS5k0jkgTwcd6os64mTLg5at%2BYaIobbds6DfIXEM8csDKflwxHhJ67w6VSQABqEFR1aZk3fuW9RJC1N0YjThhrbI8tpLrcPjD9xfHEBjqkAQn1eOIJ26f8EWtnPeKA1qWkbrl6kAMHWcmmAA38cHklCXUQkFh4WUmTqyCc8Zv5HjryUEhNb1Q6XCZZHPiVuTW5XXIf4T4Wnzc1CjY7nOmQU6AIJLW4SyrBmeLJD%2FYJXMUxyGiVPxSK80kavyPEHtW06x%2BQnc%2BEtMVi5LWI4POIyRCHfKoUU%2FTRcakiw3ZACSmllgBdXa9tjZtdpoZWMOhpPrQl&X-Amz-Signature=09d4dde8bdbe045d19b02bd15793d1393155e9d921088b07293314173e115cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
