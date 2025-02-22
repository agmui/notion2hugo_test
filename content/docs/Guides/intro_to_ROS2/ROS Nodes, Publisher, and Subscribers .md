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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=db6cd929dde85db30ff68c70b1d06aa14f7cc76b4ee0b3709a5789642768e9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=0d45a24667d312bb7e83ba049f639c7bd922695b57d2af4e84e51ca058ac4664&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=b358d5a1749aeee14f0c12d2801411a810409bbb2c33c44fe2fd6675c4ec6231&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=2b9558a17164341cab35fc3ca8e8335027e03e381af3061f1beca6bf515a9751&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=6c23d9fc4548170570faa9fd32ac9c5a2ea0142c6919001bff5f4e48926c94f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=1f9a55dde0d1aa295dad1ad818d9827554a774f156e4e40efdc11f32dfe0e3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=576eb9aa904d5c50d5c395cbbb02b22f2d4bc1e650198830382c6dc02c06244a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SKMQ6Z%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2KD%2FKsyZ3PJj9WxajITaQcRXAzPx8gREjq%2FWcHq42AiEAoffXaVipM7k%2F9jZYsyGaEW4sNx996YZpdw1dfgswvEsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5fbyCxjdPpVp7dyrcA8RJ9lVpvsA%2FJYlsRvQAS7ZODjDOLcmKpu2bJfG7yKBtHECt%2FgIT6xLGPyZWijKqVmWJmQ7EXsGo%2FktogjlC2UmJiX7NEY2j7OXaBillOsd7bdi8lqK47JiR8BBHlDYO%2BCf%2BQbceAOcmAbuFa4gr9UdTje6xBYMbCy0hAeUsVvbI3YDwetvYVB1A49vhVPhWHn%2FZoGpM6FL9VX%2FkP9fc1aWv5azVF60%2FpnAw1bbQJSuyC9T6Hx9xdG6Jh5UZbhE6trwoVlmDL%2B1jXvkxVNwjcE2Vr9BSu02fazTdNLdtgn9K4E0Gx7GIMyWMFG9kvF%2FfrvMOt%2BhyU6BmxC67w5zPr0Zz7XlmauBys5jqD%2Fs2UxMzWZAUoq5N6b08vq2iJlMCQihniiV76qTVOdvJRODfP2bU9PAeO0gHgOeCLWOE%2FQxioyJAlinuvfz6QzHvY82aaoRQ8tqq5M%2BvyOcAVvrMX84Cp%2Fvbkkm1qJnqPdhQLX9ZOK0foYL%2F4p96K9cV3nlOrbdHMIjiHsZk6xeEqKW1nEHaT899r7rKyz3mJEO4XsRTlXSGI7PeBdvryyaW3S9VJF5lGlIRxoDjkfR%2FnSZn%2Fd%2B5y9RqD93Q7G9rbTjec9zS%2FwsScAzHo8XnK4vNMIqx5L0GOqUB%2B%2FZGQP6t1tdEIdVDqCxLDT8t%2FNLVMPCntXkZuPCI1DsV%2F7ut9epSKDmWySfypwN1ZnkzB6Aiz1COlxOvnpVlhllptHtypcwpzBrfzqMKRzvTmWiFXQPu95%2FyqhipQv4ekdWrBg6qJikCt0NgsJydwr3jWCFPeB0zkokZb2KLHL5w3OLRD8I0117Z8OB4y42BedssplgntxNoA62t%2BhJ%2FiDJnLaj%2B&X-Amz-Signature=65a752244c6d9480fbf2a8fedf52a62bfc2b5a64f1fd2edfff1903610aff8d09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
