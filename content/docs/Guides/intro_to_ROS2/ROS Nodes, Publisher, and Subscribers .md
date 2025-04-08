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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=28273c1aea7a21c32324400dd85493df87dcbaccfefb9a47b4ceb1f925b97abd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=ded11b4fc9438a7f1f62fe97bcc05aa965c56069ab97d8999874af422da2fb59&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=8d2e5c156a1fb731159109b7ba60e66a5e74fc15bbe67cbf9803426e18628946&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=c072b00d2cfd196d6b23bd5a1d1e98d4d188f1361fd1829250e1f0d39d667a37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=baf8b4f08aa2bc19ff71d269ce8e46cd63ec4d2059424788c1249827c76fc54c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=f17b73fea4e7281965e0fe650a2071100c71bb1530a233a8d437ad5b432f7918&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=76996e27df9ae9b2ebfbcf33a667b5e4d3670de0f9ccb25bd59d25937a849f14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQVRG2L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dF814RAcM%2FIJOIi9Tq5TW2dX44%2FExPKZR%2BR6l4QsgAIgRUYy6MpzeCoRF2SxexknldXyaW8ghf9mhObqMHdLuIoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJyHpQ7IsHIaVDOdvircAxyP%2BQCj9oS6CZ5sW%2F53hodqrfx2EpejxWbbeK5c5i9VWW8xxUWRBUz7G0R4H%2FiWjfNQ9YV3GaWVC6aHqJQ1sk0B6FYzWy6ZRUt5UnVlMrnP%2BzkJXUMLgaKre24rt7Wqvz6KcAFamOQIiADa7TJgPrqqzlkhpfI7a1%2BiCxEMCVnkj1OXbCaqURe2MWpWlMv5qYNUk4zMD6yDczB%2FnhAeiuivc78lz1s%2B%2F%2FbEkz0grWktD9q2orCaZ%2BPAKktRHbXi1Y%2FYy3jqGQSddyNh5cb7ui61nD1Y8avLsIxKKxPiWYVEZR0ktHek13EK88JU1I4oCSz%2BK%2B6qpsDykLEF5H%2BsMntxy48H2Qjo6BqWRBasS0aN%2Bykj1AJbzUq2L5mRiE2vaRmek0nQPWUOHNxOSg6FXzgb2bETpmy%2BsUAdHT3d%2BGwNv9F2fkBxfP4X9sRfI6oL920%2BgrMqsdWGUSJvAYAMxWUIYo%2F%2BzxucZ%2Fy2F5jMqHmfL%2FQJAtYZ9rSneUOUjX%2FlCdqhHUupLoNc4fk%2B7lXRmG0FaJ2KTxJ%2FNybSh8giSjVfWv3WXcnwMGB8uVdxiePIP1EbcpN7sWePuomQSrjbWV6GEjbf2NeehdIKnFR1yyAfeaIqwB5E%2BlRvn653MOfX1L8GOqUBTy1XV%2F53B2mZfLTniSNONJFHSrc395gDVoWrqGgWtshe9g1vGNV%2Fmg4iotAUZIGhc9KnPZ7xLkfhp1LfQieBWSaAijt6HL7rANY%2BsY1cQVxV3ZlhmAHEULgfX1shj1KWBrqVZBU0n%2FtFfZzcvvf79kgbX5wNHegtr%2F1LjgnnNV4fukMo%2BBDczspbp%2FTpZG5PnRg2Rh%2BV9EoXowm7TBKzKj2qlu42&X-Amz-Signature=763dd8d91ea8e7b269c48f6fa5c855ee482cd68eb7886ec0841df9e8a406f88e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
