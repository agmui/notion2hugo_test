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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=c93ef46293f3d5cd4f7dd08dc0c5bc4a3ba5193b8de7ec5b8d5b553b56f466f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=81f47a1e661ebe744204947e9e286e08b222b622e2d43ed46dab7c49b06e83dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=84b3aca9a61dec194b29efb1078221704c894915bec3e3055bcf39ec71470e85&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=c34cfa3eab88c60f2d75090552379fa70c0ac9d6b6110f923e72b96322debb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=2b5e2263aab7859dd44c63e6462a00eb4b6964de90fb14a2a462d1fd107d6488&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=9034160cb09025143462b588c00196938f8d6b820053d5781ba10f44ec38529b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=c8ee787ee72d09d305892bcac163a061d46d0b092d4d5ab968da27c4f393c850&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRONVTRJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRGvB5jkajCZMWhTqGywk1WOZURf4SqHz9kun%2BhK7QgIhAIhUDKGGoL%2B7rk54lgKa%2BsGOdWG%2F4zeUPUcs3U0xMV0oKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXTD6T4O7UGfeEfeEq3AMnyPFQaXdxN%2BKtdA8qnFMqG6K1jbJ2xoYtW4uXTxbcrlQogVEvZ3NBW%2B60DnWlJJZmrPF2budGo1yGcvMfAbPVfK20Pk3STPj5Zc4MxkHh3mhgHb5Ki4c41lvRn%2FEaxAW1FOnbMcZ3mTHphf6aUtHXFkI6gfyGHRWtQuwuFgdzE9ZhF351oaJGENrXkmWHK2oH854UIj7NZe2JxLuctVw3I1zUnJb6CDMI6GMapXl1Su1gUT8cnY6x%2BjDUg%2FdZHdYZ%2F55gFOPwj4BObTicQa2Dvfv62wxvb4%2F458i4DZBmv9IfDdloq7OrHLa%2BVxI79HWrtXiXoOZYr1NrCRaHy%2B2MHJjCma%2BqQARrXDyb7VNifmFgC%2BtGyH40jXHiKZ8HF%2BpqeEjH2dlFZCpW3wPuhBYhVCXjljtT33qCH7iCB8Lsc2%2FaIHQGQZwbl%2FrYR9aGiDoPB%2BjogYYPivR1ns9mL2XmCgLokEEolcuAMwRHP0WFBdjek60rNWldMa812LMJNayozq8Fx3Wz175Tkgp5aqhb%2BZv%2F2O4k18%2BInTgqb7I0qX6sP3KAO6F7ZBpCyAWNah9wfe60l%2FhuSFlF33roC9P6pDn3H5grdSywRBJB23KiYGZE8CZXmi%2Bzab6UyjD%2FvKi9BjqkAUn00Y4Lwol7ztbwtmk0PJF%2B30NXitXnuiD%2BQz1JYQtFZPqRH9NUm7UNZUze6at%2FJVzyDgLDRc3eol%2FOjOwKmLHDtED4oLeXYaVSjwcK1id%2FVRT9IQWTQEYzQawdQTFX7Jqb4iJX7AMklWhPoSmYlmQCwDOl4YGEiUfuUtOc8km%2FHREpdr1eJ42BLtEgPQRYGqf28zJtm3N7aXTcOazhAH9Yz1g%2F&X-Amz-Signature=6546543429f29b6bd319e2c646f6f713ac0c6c981a68d64a0fe0292da4b46699&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
