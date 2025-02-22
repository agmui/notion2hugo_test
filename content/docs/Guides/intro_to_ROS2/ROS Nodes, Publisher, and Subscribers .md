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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=b8ceda4921d06edbae255b0cfa875c4db185c86945fb5378d54e94c3737ef174&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=23832842514fcfe921e99b6930834190e47fd9d40f9343e5a196d67ec06f355c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=bf42b06e6ad0e6e331bd451891040d144c22d5b0402c1c720bd68835605d225c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=8e21ff655f364193f2491467502c9cc704a0c66f6ab83a3d83294fc2ba5172c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=e0369c2b56fabd1d88bb83fc2ceaf4ee33f2b5e7f0c8df44eb83ca13d49f70fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=316dbb9615131380780524bfbf814a2d4943a45ba33d83435cddab9c51e4e176&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=0803e6ff0f5f230469a165205abbcf9232a77db759e548b24dd12aeed814375d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAUVS6I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICejJkE1E%2BjbRkFEDScWJKrzUKdbBNPYXQ912aKVY%2FAdAiEAl2aTQeHxaSsu5quFY8qL9ff76i77J5TRcWY9FWtYGacqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDn9tvdpj3KMgK5QhSrcAyx4arNao6rEoMxZ1Dn8vAi7fZvfF12cSOcWLtKxU6icLxijRX9%2BT9bY48G8HZNA5fuK5mGzKSV%2FDSAQ5aRuHdA3w3FhKPytSpn6%2B07wTVF6%2BXiSi4urruD4yNy1uF9qaEOPVtPDLqizH6gFhJvL5SL9xCLrmwfOth%2FjE8D0sRePHlo6UPIyZkt6VTyzQ3sdJVSo4XllkXgEwp%2FpQx5I5%2F17aiKNDaLOZ44zKqQBRCmYC7jDooQZakmPGHgx61hep9%2FxyQNIskbGGM0R6htxcmXkqdXF6ZVPtdBiJGgg9LTytkZNpedLrYlSLvoLnuGzYr52zRoRB2yUJ%2FiQ2H9cZqwF7OYC2et0Icy7Q9jDW1U3Gtp7fgxzcJbhLi5y1FNXPJ8I9506nXXcDht3TpvGj3y9bXATo1gGFbpeRYCYwbVBmdtBbhYJIHKNLX3fDCq%2FkEsRrXJ1HByaMCVEyCJvdGuHAc9EeutMEylvjtqF2mrOERiFQ0zPHO7YOg5a0lBDcc5fiFGNsxj%2FjMKg6vQcvvO9Hx8Ux5b6yPEj1dCjPKiyzvQYm6e%2FjCa6DjOV8C0UOFpgj0MlbkAO%2FyC0Tmb3QFAWUNRP13mbGk9tJ9YOt6U4kxdklT%2FtEHMQ9gJ1MLHJ5r0GOqUBpVE5owd%2BXFAowI1D1cphfyzPUek%2FQ60rvUMrEUyISz0N6zhC8DDxwQQFhHST5hNDir8PK5AscPzBeUSMsOIIUqKaDRGGrzq3W1hr4JzPLGNYd2GMlAqh83hPF75Gaxpm6B85LxbbC0wdzKhnqE2TaWZgTbKGbech4f69ZfJQm95XLRBP0T%2B%2Bemm0Q1wW7kj6ccj1kwIwhs%2FrNPD5Q65l94dagkqK&X-Amz-Signature=3a168fad68d85c79ff1c1a0bef23cdb912f08a05537468d88606c0de9eda7efa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
