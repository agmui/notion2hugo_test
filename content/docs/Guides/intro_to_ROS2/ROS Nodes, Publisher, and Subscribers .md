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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=20fcce93dd6082f150f1b559e97e100f84befb089fa8f040c75cb63d0b122b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=3d40fd22844321a9c5f67f33396fc50b7ca71de6c2e77b0b5207ef254c6f63de&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=c8197f6364059f70da3fe15b8766bbf12e3265b69a2213d59dab3214e62718a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=1020081635881ad75fdf85baa61f35af1380254a119d1fa1909d6f9a6d2419ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=7de414b045c57e90c09f73e0c1afc241455dd1cc182f389e08f248d33ef09fd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=53e6c28b760648c36a0583f53355d038d70b65b4fc77faf95ac4e8179d7a7100&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=a55b553986c2424a6fdb4441286f5c8ffa09fbbf3cf9c1c2e385b414a5c3b849&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAK566X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUEmx%2F2ba0GBURXHPVx9Y82pHKBmZg9TfyhKQcUtt1%2FwIhAP4JNeceYX8%2BFT1t%2BCYMiBWdcK67wsMeMzYlFa0%2BJsXoKv8DCCYQABoMNjM3NDIzMTgzODA1Igz%2B3AmwCMF5t44V0tQq3AOuL5wY3wgQ1076UOT2zTeR9ontdN4JZ0q8jFIxVf8XziWMvb2e8P3zxrkaAn3MND0R%2Fj7%2FKsu8FkCFltSk8PegsvWLqgxHfSTLfudOZ74T7ecjko4mkIz6%2BIId6gn%2BjjByPC1%2BdVhboIjfducNQ5LZIyd9SmCEAp3hCRaI1PB4eFihJIedC4R%2BRTQIwPg60ujs2%2BOaC186xukMsb7cJcsHIr9c2OrDmAlepLC0GV0cmQT9sakpQwSpZnyc7%2BYPyXYHOjGVmdXPA1Z13zhY6A%2FhGLC1hvO3ApzgigsuuebdL5sliBLuE%2F5GPln%2BcsKqsKPSUxDDtmoVcY76%2FcUW6WMvtwBPhYD9QPk9dKclxiku4bVKJ%2F2wW9%2BPsePFtaegtQms9dINpfBsGNwSi5USa7U9qT%2FTIDR7Uu1kKVbuw%2FIE9jkwaw26Z4m4BRe9b09VSFDoIaI8Iq2O2Fi1uDi5wdXNojXcl7tmKlSePLBW0guuIwrv5EKjPrbx3p%2FOssiKv5qvXubXxtK4xYbIdaQljO3DexZ5gi6A1G2UmGsDA4lDtZR9BuUJEgZ7ARqYh7a6rrmMLqLX8wvXUvuW1efj9gCqt1w%2BAz63Kp1RlJFXzREqukXceqOjjHqr7cFAaDDNr6zABjqkAVcXHoF9eYToWpMc7p6m1VzD5CWMIqlqhmaOMfrkvIDY4a%2BgxUyybOnKumt2%2Ff7SxtVqpUlAhn6F6Zp4qSJRyryXSArmjs7QREcgxCTD2MqkcL0%2FyaOzsrhUAvT9pJXy1dIHomx1pSxD32qemO0ZpyCd6KaUE1q%2B1jup5vn4k2n1Ch7ufQzWKrIrBPsB2pOsuu1bm51XP8ZsU8JSi00schixYwA0&X-Amz-Signature=762b596e65cb88c6ee3aedea254594fccd8e6601fc74f787394f095f9047d8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
