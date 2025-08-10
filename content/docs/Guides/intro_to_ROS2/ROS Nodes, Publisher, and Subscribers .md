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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=f24f5da07b89e1c486a958d99ed3bd208edfd770167c368453c969a006ade934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=36e4070fc0305117bbf54e24b87a2bfb13715fba273fec9c3444c5a80467f956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=6384270cd3167931a1749d2e8dc58c593c6985efedfa78497de7ec1f00dac7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=03fb80199a61b9df3f964725a16a2d1548f237a29c497112c13f0e2e35a59999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=b1add1beb2eefdf51b42929e699a193868c0eec807ecb15a40250d2152a066da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=bb2add503054442b54546649924732505b85b634b450568e8490f029b8c6dba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=b014c377ed47c85eca1b54e46bf88a3e9f1b9acab9ceff75227096c2d5d4f917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMPGWOK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChZtTcMZl7t8WWtNC4mYOe7oJG9OTaVqcirOJwbc1heAIgGl4A8V8k5Whpl%2FKp7N0USsSMWVwwQen3Z9tJtwXiEBAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr8v3FVM63kA9igBSrcA%2FpogXhH9Rkrcv2YWSjUNkPmj7U5A1DalESzIqH0CW7QHb8ckhrTMFSQjmk7H79BDhHHQC%2FjsqQhP4SC6lQlq%2B0bH%2F55uPt4acj4CT2i8Un0NRWBmbUtiU0kBP032JMCS0vrCpMcLbrxmD70v%2FBO7TGvxjsID%2FpZyyafjNExzwLCp09tPciijT70So4AvuuY%2FRp%2B7CEnW5UI9HACFpquxHi4BZX4MWKSb4ZbeVBdB%2Bu0jbkXvr0jAwGDXpGDebOVTrVLiK012ZeWCdGucay8W5NZMLqD6SgiBAd6n6jlxwigEFywjNBIX1%2F3Bqg1gMXoHXOR5eHphyf%2BBgWob9EW5C82gcjb8yb0YzaEhqoDkO6pOxGyDy66QdrpBSME6ohznhZX1vrKmg5yrbiFU3iwiD02tK3O6fanJ0674%2FmEd%2B9KP3BJpdTR3gvIJ8NVKe7BPSYnUYKj7uScbJQB8F70M0TrwJFdKjA4OjoOnFTKGGKprf07xbEV0%2FRQAvzg9OVfqU8%2FfwAbek4ujDjzPKH4Fixp68No2hI%2FGwu3OfIDi%2B1SmSnvFICEJNJz6q5mxt%2BKxqEGKDSgaB6nxQsChML3oN89Xz7eDyaM6CEQVQHELWiAyfcDoeYker0E55AxMOv04MQGOqUBbnCiyPwCPLiZIyjmoog%2F9iGR0Z5RA5RQewf19ebkU2jzaum9zBG4J4mFTro%2BAeDHBiDzGKGBabQcO7HrAPy6%2Bn%2FOSQ30CF7OWlX20eiOabs103sOQgzek4%2F1vflEGWNLmxuoyNd00Xa6Y3kcf%2Bc0uWvHwYVC%2BM0jyTV34L51DMKNVDD0JxeORk8fMHrgrcisErT4SJ8xSg0%2F17gMpSl9tttXRlsv&X-Amz-Signature=84bbec93bef4961ea3fe85128e2cc6feeb9624e5dc80d0f0c309b4b3396b3433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
