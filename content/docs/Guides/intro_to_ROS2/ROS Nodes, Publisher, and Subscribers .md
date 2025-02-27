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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=edd28de95c317cc88034ff9b6fc6ec83bab0719007a6af6bee3a6d22517f5b68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=827cb08eac4a951bacbd71bdeb6500c2bbd076eb268265fd1734eef0a2b9c142&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=5f00408017a0f5c82bf9bb2cfbb062e586a45f4778eea837cf0a98264a90cb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=2763b1f58e1005f05ab3132fd7b97fc6052be231b2bbc87f338acb7bf60717c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=ab6204d47a2fc019bc849cfe2dba36b7d927978d54f40edec979d71f3b325f00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=1fc90345f3671987cd610fc995e73d4efd23da990788850c3f04d46326303b35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=e028c6cb86aba0aa9dfc035877ef8ccd14899d2fa08b8424cd78e2f01fda4519&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVFTKF6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCA8qVb4wn9WNILEHwYX8boGlGGWZ7hW%2FERfyBRUzLp9QIhANTnBPWv5eGzoSqKG2jz2%2FYnIi12%2FGHA808hJoxhskCeKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2qFoS2clvtU9pW7sq3AP3I9w1aDe1te8YW0HUUIWMRavE%2B7gVVJLxGwSV0u2MU4uOW5PZrYOyJqi7AyAkWj5BibAv1NKqMciEzTtpvzZtSrk5eI8B8nmSaxHeS2rZR68F1kLZ8E%2FoAmIfTEOMdkGpmczLdwMEnu9d4v4U2RKCjZDqibpP1QZI7vwvOHzCoGvDLkFtJwCYMa09mvXPyTBmRnAPivWeLg6sNfoJWx7nuOZTuwPwE87kz2aqWrw2iCy58UWGRFI6XSoOdu8VrnDosKCFEeVi2TaYaQTZo0NG1%2FIF2QpxdHLZsJmW%2FcL%2FUabjBR9fIVuBn3Zq3EM4xfzINzv9eNyp%2BVPPdkjHxXE5DidnyoQ4WRVasf8WRvMNXO63oFeeyZyxkPrjLtkkqevlNXudDTYUfhWNbwbEoE4a3b1FMvDDKbqGLjIa9c%2BaL5VOK4Dc94BULKocuWpV%2Fn2Lbu0ckF6UkwjYd7rnGih9w9wVRSfQbgqu4xyh9Jjc2NGucq08dai6gxC%2BWw5NGTsB%2B1gbnF4pLPpWH0gghkX9ZV9D85WFyrgiL57zfjO0a2oJDBqzcqbMLffRsblp6OGapnK%2Fm2dCTcBTJxEar%2BMmZbedIgVc3ITnVehS6YXG81bhm10zOo8SSbZojjCd0oK%2BBjqkAfDFtLvkMChycaAPxxqhbrl5baHVOL44qxAXYr4NxAxgOSxIRQ7hZ%2Fl5W1DYxUr4DO8bQgrTrwixWnfmQi8ZHnhDHmKsPtVz0C8st6PBivTps3ayJeQC0KHnLyk70BpxdmOtJ%2F5SmMsjRIioH3eIHEQgoH%2FPlUNPKNrSfVe6txYO3wa3ZVXCzvSU7ZIiD1UoutBaY8SKCAV%2FlB4sjMeZHzrdU50w&X-Amz-Signature=22c9aa3324c08cefa2b96c4881dd38dd680e2b64132d78112f1c21fcbb74ed93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
