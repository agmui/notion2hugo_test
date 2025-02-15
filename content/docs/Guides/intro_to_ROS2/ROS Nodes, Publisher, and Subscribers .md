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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=c34dda4d1e367023dfd9243c3b55863675eb676d631efc5fec588c3f6ea41de9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=d9a1949d961fd004abe4590dc793594bd9157fc2f9d66e775724e2c067d7931c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=691498595f7b1e73a9a7c426eb1c91870d17a6375105e8c22802d2cf90b5ffc1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=4d844fd44fa696bb990b22a6fdfad17835a7efdb549f982d7bfd2bd82a4453ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=36ff6cbf9f4336af89b0dccfddc2cb522329ceb09d6b47e0169286a80196d618&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=c8378e4f42f0170ccfba50b94f0073526b572a6efcf4fd718ca9fe421c2af057&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=07b43ab22634e671668176778df6cebd877245a1e347b893a435c2f222871537&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZQKETT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCRrISGB%2B17qFamj6l76g5VhD%2BKE7husMF%2F72Xx%2Bd3YxgIhAPe6ijmNAsK3rQ%2BO5b%2Fa8p42BeagDQpBC%2FXmO8bYAAfPKv8DCFAQABoMNjM3NDIzMTgzODA1Igwe3%2BMrfRKRz5ipfcsq3AMccZygwS5tlAQTV9zbBVTYLoXuev%2FH6Gq8JzsdPODsx%2F23jjpxeVONrnjpaTrW7S8JVKrbgbcZX1JfWg1QFnCa9ws%2BWMvLn8KlGgNlgWxdLsk8sElOJOjiFdFcx6ErHr0T8tSSB6isfS0tJcBOANR44s95pdvomfR2wcadg2f36g6aJxtIj5xqQau9BdmpuwcgNeV8jf129lzxsV47VmAgqmC23URcR2Kg6GlX3JzY2Owe2LKSFoMfRpYv3lj89ipLbs8USm2kNKMt0M2zOwqwUESijR5pFc7zko1vr%2BwLbzNyReu%2Fiu4WSXgm8vWfkTyXz78nP33vzOMBcFmE%2F%2Fd1Qr6ddBSH9ZHx51PPq2IsC7Xmh6mu98mgf405nJpbVmyqa33jXs0J%2FoGxP0Qpth4JQcAXo%2FwKj1citAZyke6Hue5Aa4I0eXT8PIwf4lWkzQ1tvategWC9BHYz%2F5tLxHMYrOUxAAbgIrI68NZ2OYgota7QVC%2F%2B8auxVrIrHqupr93grrvOXfaiqyyKohD8ZpzcU7ZKLvZcGh2WDMVBJR7wlfuupgi%2BMwu79SSPL1wo2V26OEkQJWCSAekCg6coujrMZf5H%2B3naeDO%2Bu48Dtdbt3C2%2FUlnMNPsV72YxLjCgrsS9BjqkAXg1Fi9EY1HojcU0ExTRbr3o6ma6NUybowXdAF%2BT55oC72dlOtP5z3%2Bqt%2BMBYLPKmRtaT1WJwcWL2s16lra6Pl5blRIu20b0CV4gFv9dHsDEy6VoDoR7hV5HeKcQnL5w1Q2GVKledAGctsoOZHmvDbKhPI8tl9PSVvb1ZgF2jXCRRoICffUOHFdnJwyflg%2FYKrzvh8WELp4RztufHCwt77dTM6v8&X-Amz-Signature=aff8030f72f561d784692b0d9fe35ad836dd46645de2ca44202d6e213213c86b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
