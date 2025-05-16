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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=aeb2a0070d6e1aae7ad7223f37ba0438010bd13000f42204145aecd8c8cc4143&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=a21507a75794930492aa5cabc0e11b34f6af9d364019ec0f57d3f54cefd8de51&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=7773a937a8c9a01fdb7329105779e140f7b4299ace2f28080ee35ab7f7c750eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=f27982e8cd7b523a1c7811f1f8ddfdb1857582f17c3833520c74267fdd582021&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=2d0a2844a35ea4c190990aa0e7a1e7526247536a600d9048c550a57ebc4a643b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=966b0cff28261af27113249d602ffb578da4b36cc365471f84ccc3046819b425&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=bcc12214948937478c04fa71d68c45e3dd1ae6a54019460a54ee2ce461a0c3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6GAGJI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1tfhDJUCKadqMIJZaf%2BJx6UwewkPUp2XFUu8cUWg64AiBB2w3drbm6STs%2Bzb91NNDAWygkWsSexlK%2BmUzEbhtVzSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMP7RN54M5OFZ3u8baKtwDungG%2FTn3XI%2BvPHXgFo%2FJXbLHi6phd%2FF2sBSX5A9Cruo2VosUiqdAX0cIdNkNDS%2FoXZDVS7KijE%2FzqfMzbHLq6l8nWpSrcKClE9ETWdnWG1DcPO3NGOeasHpz9hJFGJMhG1AIM83KxmvaZz4AAdc4bww4MwYYLq3sNNV5Libfl0MWMt%2F7tJH1pz1JRrJ%2BVF9DvwZsQJQr%2B8MA7utmqCdNF0jADdOZW%2BXyqeJRxcse5%2FQRsobW%2FjtxhikjFkpW49uDf6eeCzwnvlKKuXpLJvpTPppdquYLxD8Z8E6Oj%2F1iA3YYFAXmpwJNN%2FcH5LqQXpT9wqwe85b6qYCEqVAJXcd8xaGsirel5Q0tJJK3xYHPRjQIwx9pkW%2FxsQBUomKViZ4lLIR3ahSNcEHip7bqtO3JMZLau7M%2F31HV8Rx0ZdDRE9gV0Am1DfmDp2Mg%2Fz3%2BZxPWd8aqAlscnrRVE5GFmn6O7od%2BtgMLdk%2BUjErfCD8DKQHdOfUuqUv6OBIxAiOZh%2Fhq6SVADfFJO9aITJ%2FqB4zkGsfmOKvyY%2BBzlUH2OHMNLPK9fRx40wENUS5ZPHUGhyRfSj8PemzwyFsF7t6nW8m%2FVkJZnqJlnQsIO1xoO8txEQ8Ua7aV0chQGSFPxUUwl8SewQY6pgHzZaKcsYoCfl61IwgpuWYNevh7LMU9GjFj1kUAk6%2BlqriweB%2FaYOZa3DtZ51YcKATEsSzEJ2%2Fu%2F7ojLQpSFm%2Fo18c4jvPmad%2FXlHvYEcyymxRNsN%2BhUOm8MUhbJC5CsRUe6L7m0IdlfCI4HF1y4AFKb63IY0gCRgEdYrk0Hy5E4kpQklDHGg9oKTL0lysNPTwuME5nWTQ0VVeH9CT%2BbA8SbXtdL7ZV&X-Amz-Signature=9e2fa16ea51ecbf76be92e5922342bbfcb1e58005df2c62d85a82928d244b289&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
