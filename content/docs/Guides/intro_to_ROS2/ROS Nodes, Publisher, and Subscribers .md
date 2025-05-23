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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=d4c1829d738d6bae6627a71d138c4b1e2ee90d5f64e0673e219064b990d47003&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=63691fea4fa39a384e0a1cd6a1090707fe2494339cff4a57abf29626e79574fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=aa32a1ab1048854ea6c333c3865ecc34aa7d6151113b3d391360d7d33d129419&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=5ac2bb3dc675f89b9329b18884e20a3d2f4162678e18342b08ad883f38c580cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=9aa7d95c8ab60e1a3a67ef76c5dbee8eeee04982d646d9a244ef855592771085&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=35f61d0cff3899448fb7feb6b45c72c4c18531fe34b03f0b8856e30cd7bcc54b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=c30c64016735f90ffeefb74ba7e54739c5acbf59c5b4506bba311bc282a46d33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFCXUX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCN7bP1ELqxUhR2Ki6JWq3BZgbX%2B2oSCXXyr97S4cNYSAIgVaH%2B74GtRK325Og7gOjmCp7tU3rzzWpx9oM0o6lraswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR%2B5FnW5eClwNByTCrcA4yzsMMy7CATwBr%2F9%2FZ903754tk9yqU4sMWClWhU8TtvjjNce2UwpRIdlmtisFBjDa9%2BoYQbfmYjymHldxBkRjW0E4DxePgydWpgbfunYZQetHwTdU1j4Hj3BN328RP5tm5gt475RfhH4eqF0nG5ynQ03ZWkUTXH7QTPNtTa7lWUGo4dGJxNij%2F96k95%2BMFkM%2B%2FWc%2F1LnOKkZLSYksNYeFBjw86wqYA4PfeIDv3uK%2FH4l8AwNe7gPg0vr8J%2FciT8FJAVReaow2AdkjGpnHq61mu%2FHRwRXQwPBmdF7s7sYSqIbdSPHOhm4dWw%2BxOBU%2FkIeDlCDWWIEMezduhZbuNBAAP%2BA%2BKovlNEKPL0gYRC2bj7%2BSzJbg76Pq0kp5DvlciXkNRxFutpiZNcQzqUIBI2wEaxLMBvtygvclDj0NxrZCjvgx9kPwyPd9DZ9bmPp2hhjcFWafORHNO%2FoB7N1274bYTJRW9erTeNQENcoVNuZ%2FyyJBEyOCUYjc8NTETU7cg11Xz7FxybcMIvxyQOSNxGfvLKepXS1qtD1%2B3dIqWC5IiMOs1y5nl7aygFgUNFeZRKhtutjMJ8uSMBEyEPTOyc9aC%2BYrEzfPQOAd1oyJWh9ZKwL6%2F6Vbek9Yu9E15mMPjBv8EGOqUBw0%2BNGh24%2Bjg1mYd7sZ8lO2FkHgLrqnA082UYmw%2FWETsyn3hJm6xYZ%2FYgN%2F3%2FRNGxotyOaeDi3UVVfl4qqENrdl2uO9ml%2FWljMCGAINQQS7VWrZNCufvOSWc5MpIPB6Imla213I%2FfQSFSgo%2BhAImr7%2BtFFgFAAHcGSaVhyLHRt%2Fj6n50qus1V8MZm%2FZwwgRhfA7W18%2BBuRzCRxlqSxA1OHwi%2BRrVP&X-Amz-Signature=520ef5736e515869f4c21219c9f3b334d75c85dd4aea1b917ec370f033c32c59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
