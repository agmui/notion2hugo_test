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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=eaf67190fd9f569b632b1eef998d2babf1c6e0470b46e12c2a92541e2b2b7575&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=ef56178ae49752ede96ab38c43014ad478621b498dad01e3a42b69cb0cb166da&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=7b23485cf114269be3e17d589563bb1cbed6f7dc225c783f63e21650381ec88d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=628b2bb33cf7692580c0fdd77626330555fa4cd0a5f756a7b5a67be18d1dd8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=d0f586ce189ad03c3f76a331a9d56051794fc01390228ca8d8e72b6765804417&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=e4bc10b3ff2a5c26dec1921cbecaf53cca7f8ea5f1783afad6581ceab382804c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=6cda6bcd739603fc8f7f30c25f6b7849310849fbd9144812621b6808438af549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEF6DS4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDdsFPz0a2sobjpp61BAiiPsUzEAX%2BKiR1D5D%2Bfm6P8kAiARQZmIwUJuV6WcQVU7kyL0OPGIVFejDhV4Izrli8rgrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMorZSULAa8h2c4zo4KtwDuvEG%2FOoOTLyuNmlSnF9N%2Bxi2ALpS7OPt6W8%2F7F5XBMa%2BLXYxzeyuffDwjE8SPmcL0u0gSOv9bLdNHrZhx8QkQufR6J0FF1S%2B7wnpg%2FQ8aReHEyDex5UHv0beoGwtiLOuwZ9um4vyVUT%2FmRIChhWGbPhWBD40yMilFpo%2Bwlrrt4ehBpTB5iOUyCM1RwLpQwM7jGQURrbhwVF7SBhmdpJYr3upDOLasSNb2WzzGn9OTS%2B1Bcew7K7cJIfrADMOvGpM3CcFjMCpNZVo1aeppjnJYVRhMInLrzy%2BAwmNlTFoELloQsgaPyh4aZEXzPg5wRTg356bnF5RRwky5qgdR07BbdT1CeoXkjPsLJ9L2zhll5Ociv9cmyhtsEEfDMz50p0LbCPoaOeVXkMqQZDNP5SWk7jLrUl5wILHet53I6auapl2IQ6Kq5kanMh2Io%2FzluyMdhPmC%2FpwUgk8lhuXR1woAfeaY23NEifUlv5%2FqMKX8cRuE33W4xFWlxpzzQndOl%2FI0mux0fRSCOjzP1eMDKff2spUrB3GFJKKIveryIv5rwNLCs%2BAXlgd1%2B9z0Gy0ImaqrFq%2B6CKzgBCTnSiUT0oEFag0keGLs9SPhDvF5BLVkR9zTMFl%2B%2FIBW9nB8jQwgvbLwAY6pgGAJ4MkzP4V6Md4FMCsHMEZHfMoHtOTkJsA4jRRN1iFu7d5Q1Pa3gTEx36kb6SAblvZjjGWqxp2TDVvwXl7mjXyJBeA0eKiQwB2iD8rBmhtv0Y0uF5swEowcYnNJVjpUxztYb9wnM2BeFB7fYOkNfD8RL5kSQ1jdkoIW5%2B%2FJgxlt98IrYVaOMV1bHGMGjFqQRMYezBkM0pmt3i5qq6E1MqweDuFHHRb&X-Amz-Signature=4591f3ffe0596361889c180d4ae39b49725d965bd4daff0fe004bd5e8005e105&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
