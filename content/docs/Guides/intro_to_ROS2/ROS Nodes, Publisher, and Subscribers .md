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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=c1444b7beea166a3af51fa573c6d8dd7aa0622a787ae81365a3c39ee1113f8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=1009ee153e4fb3468987d235012860711c32a010dd5abe4933293d70bee83c70&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=a5f77379baf0a561790d0ade481ce6463020ca5165c47a4500913dede4a63e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=44b3e3de9fed4ad75d663a16b1e97840e55c575b65bb6523f37158db77247c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=982932d7bb5a2f3dbbc2f7fdd189bfa9da1a553a11da9e983a7fa483a8617b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=7357902545d20d012ddb95539931bd1b4bd8e924de0a3a6dbbe96aae9a0a0fce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=b7e96725dbe2d9ad8ef07ca862a4326543db5c99cda3ac25ecedb7ce5cddf4df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YDOQEN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDnOyxdEyOD3FFFnKzJSmO4npbtB3odq91vQTmNaesQcAiBBOBLbRtUWIwGu17Lpxzk%2FVg%2FWrRGCIBVpODCZb1%2Fucyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMH1SEu2YfN1oEBisMKtwDbXA93jLofRH57proMQvPk2I8Di%2Bd8MnSOa4BMnt1ufLKKbXwMX6zaEhxLt6IgbLfBXypIGkjQd80sFxKM5SIfy6uy%2B3oQLVmy%2FVbhq7ZshW0%2F%2FHawQgFKx5BnZIK30AaOAcTYr2Oqlyv3KD%2Bo9CfU6rigSCqI5Qwu9YeZnA%2B1tkIdlvvKRwwRq7mAWvDhKESatIBS45ixaelgBGRoE%2Bs74maZWiWZMwq4HzBmlWaPTEMauNQb49QF3Hc9zpeEeYJlIKiz%2FDeatdMPLQ3coEabY5V%2Bkun5Br8owikywT8BPa17mHdJEhNWqGOKf8oXICRXq3W37OUX%2BtYlupN%2B5N7VJD2d%2FFoJSePT7bipKJA9H%2Fq9LKWjiwkmjPhjpOVB9Gmou2aMwgz%2BbcyI4k61CeoQaMMlC9ZZu%2FImbcVHGSWtIg%2Byycl5GhRWd6%2FtT0cG9JQiUKoJk7nElI2jOV9H8KeiJZkO1YoBYAk8UXDEhejSRTyfrvL%2FcCIWGHtdMbKkCD9dpO7NjnuW1jqE7NJwKe77IKj6f6cT0fogGJmxrbETLFet%2FQmfwPO6EuvnbS8xaJrM8HLnwlumN2yAm6iNkc9umtPkmrdVDtseVhDOEPw9k9nDZEoMIJWYaYym80wq8LNvQY6pgGXS7qo39jqnq08GTFjYtKQje1nCXJgRYZUHqg8m33TF%2BO%2BYz0lkjHQNh%2FlL0t68Kk06DAtN6itDwPAV%2B3zcHXzPvfghnQX9z4o1HB5qsCKL%2Bvncecirp1%2Bdie%2Fn8Xs8eU5S%2FnUQX6S3sU0bAxRmiRyi9Not%2B4dVAP%2ByhpyNU3op2%2B3Hc8ugrgZmMJJN7ZEJqXAWTihRXZRCBP9BNChF2Pi1OJWeuJm&X-Amz-Signature=1199ee7ae4fbb8f0f0fef283feb4cf18b72f737ee913991c2a638aa3c563f57b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
