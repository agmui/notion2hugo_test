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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=b5f02d30504491c6e52441658caa53027397fa5c69a2cb2d0639578d3be15557&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=3588b28a78211b515b91f8b99903c51493bbe9ac4cf92be1c0dcd7677e5bf89b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=71a368b1d19f87334580b97456f03fd7732bc3f2cc9064267f7e7f3863cb3f87&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=6652b9ad55958b140e05153da56d33efd1ab55c14bbe0a0a500897512f0f5937&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=4849af17769a7290faafc544493e4345911cabca8c392f24a8ecda18e7a1e04a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=ce8444d36b4a9d5a8c76cd6a0f9b056e0b730e701bf9d36c4f949d6e7c88a8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=c6cc44eefdd7b6bcd317f2b24542382eabdc57b093bf397d47cba6183735457b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2Q55HP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC06zNHJehbVSxlbr%2B26%2BLDmoPQ3Mt%2B88RhG7MHG%2BxNDAIhAPd%2F%2FApAinJHVu9KBzQqKlxXoZhd%2Fvu3HRP2EiBl1ug%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgwLYrZylXam2mdYF1Mq3APfVfVmiL3xsnc%2FqM4U%2FYEAn8hiNeN0jzNlzScfeNjV2wys4rWEkqvK5ky3qtlMAGyqMtAN0GdFeUN4O7JUQac1ZpFrKtVdztZEUJ5Bb%2FEV%2BlKQnwRpQebiGsdgQFrsY1wFTFAfYUwMcHyRqkej1WKTUFQX1ZoxTNQg1QsNHFcJXjFiHu4R4OM9yiw%2BuZpQz8TETNdYn6PxjGiKGZx1EGtB8p2CmtjEiBMi3R1tDP2hLek9BoRo7DzDIHddljc50pAu7QSkjsnRzv9C%2F8u56be8%2BpJp3QRn%2F%2F8FoIui30acBb6fT0RVedrFl%2B%2B3R5FqcQAFK%2FAxhMUwXayEwA0vJvCfTDzhZdDJboK8f4%2B2qfr209pfKPgR8j3LyEODWfy7efFm4smiuxFWyeTTOb0dQclaLj0bvzvrKE6J29fVUOdRGZ2AuC%2BdwqXN3%2BBJh5nwb4c2R9NHeWI2aeo9b%2BVNPJXmD77hzn366IaUQLZb4HDhFm%2Fu5vc51b9POYLavKFs2%2B6YSDEs6crAcodsJ%2Fm6y1hTtJWLyWi%2F4OZAUp4%2B3s%2FfFvUc%2Fh16xqhiMFtMYtJ%2FCy96aMCfaF5ACgVXZLkkdlXAVuxnGXsWa%2FMUdKL0dgXJducAUKiD5mItcSaRJzDFtYy9BjqkARG4lyNYv4D2TvWOCP4tJDb5C19fAOuk641CZT32htOoM2op2fDFejTor2ZTo9SFwKIoayXnQiDJsozF9VzyRO9SRvYNyPWjGfcjuoUs%2B1NLIo5QW7bOvM4sNDl9d8moS0TnFc2CUTnwPrhOrneWdcFkm5XX3dG3HEKnT7TouT4kcL6BWX98hEx%2FKn3PVG%2BbKQ70TVy39w6Gbg%2BZcsxeW13CEhiQ&X-Amz-Signature=0a8064df2654a81a2492fa18d89fabf2acc14e9d7b0d110ff0abea7b33cbc486&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
