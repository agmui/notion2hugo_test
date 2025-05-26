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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=d927dbb6124e56814a9800430baf8c618e935f5f427101f31d3e7dbde1a5b9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=41b426d4935abe4a5b76ada35b1d98a369b9a71b9807bafe258e434a1f047cea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=241c444bbc7c4c62c88c69dd2284eaf8686e2dc27ebd34b1e98c2a09f4442dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=1cb146c9f542cfe0a16e8d8d0bdd4575fbebf4ffac3199af8a6e8ba3b88993bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=6b8c586126f126683802c344451922e862d688ff5c4684e44a99aa1e9c4b9b85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=2bf5272dc9d7a6a8e045532a8a6bc73a8b4d7d2a39baa1c977dc3046681c1bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=2c1c826ef7b36e336c42b679628c8607dd88f183ab5161e8ef9b0b5adcf13c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TAEYFW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIELf5GePm%2FAkLtqJkevDYah44qMYE1m%2FsTHWJzWRqg1jAiEArJLtEPoR2RW5aT3VJDFo01z%2FcFEIDvTzbOJsnUYWFaQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE%2FbaHtyDpeUd%2FjjGircA65MISPLJV%2BfoaSNxBfjT4%2FYEMKwFtJ45UqIM908M3Hshow%2FvNSDgukz0SukLUqAthgvdHSGnHoBeCO1VgpFaeMNhwqwrHi1RWItbIPHUe37Vjt5EjLEug0uEfYorRJ2UUwT%2Bpw%2BgAb2qMb96OjoaovGsx6bgmB%2Fl2EyKAZBymmFzCioLdo6n9s94jfDf64S9J33ALDjhPcEUJMe7G%2FhxzpBjV%2BHQ3%2F%2F5NmdwBaqrms77GiPUGqQWbSN%2FOARM%2BJH3zrT63IhNyI%2BXUfGAG%2BBVHc2EeSox8c3XEucg8P9li64%2FKQxB%2BBjCk3IqVil4wkpgveTOnNwrqtz4AVlO6WDMWh9I01pNAcmZsoDFbasgr9KrUTLqwKsHhdreletoO8lunewaiPEgNCljGY%2FD85H9UeZecVu32nSgc9dwOU%2FlQCM8enVuxRT1Quy%2FSlMGH9oNnf4%2B6nG8tVHW8at6rD7G5eWP7rd51Hok2Z5zsOMK%2BDZ5oE3HZCIn8CY6ehFJn5RwW%2BqozZseSCEPz6BAvJ2PD7owID7U2SUq6ZAKYAkzlrYEFoqk3m1fdZu8XVAtRXBAwRG0gQiKukNvUrgTy7y4CLpIMXmAPw%2BqfndHSZfiqDmEHp3uBOw5VuY%2Bcm6MNqO0MEGOqUBVUIrO4ywc%2FrTUirpTe%2F8LKGq0xdcqvsKHtq0fs%2FSc1%2Ba0ATLqp5MSyJ7EpOyqbcYtyhK7hG7No4vaKrV2gNOdtvTCCZf4%2FJVUWPEzj0BAdl4XZtkpr4CU70vffJatLpfYR92G3Z1fjet8OetXJYBri16m%2B5BLJu3R8Gt4Z1iQgaFgAZSeaevq3jPB1GFSNiYUFjkfYz5fU3eOrQ%2BXPwJSh6uVo3W&X-Amz-Signature=816e3d31d24bbb397761f23cecfd9325a468d7e27a7a00bfef640fd5fc6ec857&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
