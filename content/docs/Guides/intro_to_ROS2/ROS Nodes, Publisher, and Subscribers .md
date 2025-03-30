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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=221194418e5cad64e463ba51bf602afb29e3ac1214bb25dba32bb4b5b5b825ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=c826c4119aa51bb188fdc8b3d26e3ab18da3c29d6b9244f2429fc9a08914c949&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=0bb1cd6fe34ebc6837594d516f76028f845dd17893deb4c2a235cc6c2d95cb71&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=89a24f47daf7bab0ca09589f3401d53e247a9c57394518e447c92d06535d72e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=5e31d64697054093d4bdf6123d7d87d20201ad78ad431b5c2d185e3bcdc65c14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=649f5b930fd574bae133031756da17b1c2e95689e5576923e042133de6710ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=493c0b9b70ba89a98ed861726ad1b74a8775ceaef4a0255f6b4c4dffc77e3ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3UV2JO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlbisBWKu6eWS%2FPparAGIo3MxtEPEih1niDSqg91E%2FtwIhAL8sFXT7WYBbqsOCwYm5xsXMlHnNcA%2BBUO5VVA66pMEJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUk%2Fni%2FWLm2RduAwwq3ANxG8S%2BweeuQbgnUZLaAZn5eKnYw6zaybMO4JdSOlJkAOMHS2Se4GEazLv3z1QWz%2Fieh0j5998nwPMitXjN0lqIHZExc0oSbutQfzqInEJI9CuuGdZ%2BZiB3CUid5cTmOETYy9Qc3hIznkBYumPhk7nyjgihizpoOyT1%2B53Cj2FHw%2FS%2B%2BiAXBtQzgcOCuxgXIz2RrnZocon5X6LWos%2FJFWVEtDkovh1Y%2FRXy5WwepVnM%2BfBp9O%2FagaABvm6U6wvi1CDbj5g9hP9N0OVBHIoxbyPKuWFU18DDnJe0HlF4wUkaoxLRAE3g%2FeLUy2F%2FUBn4H3fMQ0bI%2BuGuPSAvtp%2BGjIOc4A7LUsG8dQc5T86dBpHjKBLjUXHXfX0niiMZ%2B6L4nmyG%2BUBMz0iWnMgW5brr0mganUNuEm5mTdLeY%2Fo2Fy0JdIe%2FSzxFQSfpeP7iuClLo%2FvDDrkVblnBIYVxyUqTO4DgmIeqiqjRYPO%2BnLvZN4PFnTuVpOJxWrSU1Ew1nsDBoycf8Abse31vrOpVowKMnc3bGztblc1XWH7K6kMk7UpmQUlCTVXoGaTQQ%2Bo0UYLRBAfU0QLCAV7w5Ptu8CUgeTxQg1y9HeMwBcxzaAjxj%2FmawFV4M0e%2BqoLpGNdYDTDC6qK%2FBjqkAZu2zvE%2FMioPNPPMOatLw4tRknxERS9aEN1%2BSgUPuGzCDCFtgv5J60ywPO16Tge0ptStqUqhF6vkZAD12Ho32WTW1rnMzwHMSH%2BnwG7Cw9AU%2BuuyINihLlWeGFQ7KfvKrIqs2R%2FUBe4VdXdE4HtpPZy1bvUsu%2F6La%2B0NrXeOnDUGojGaBev%2Bwamjb1Uug0%2B8PI523H0mYQiB8R4tnbYHhOV%2BBGX6&X-Amz-Signature=537271e18eb539710ada606728247d47ce944fc2069407f9d0cc8020d8557f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
