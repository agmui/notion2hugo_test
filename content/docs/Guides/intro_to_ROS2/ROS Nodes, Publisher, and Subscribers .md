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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=8e56e9e8fbfccd651042e720ad98b37d2b185656042fb76ea555ac07fcb836d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=3194d504823620fedde561ef12f6a5c89e72e7113e3246fba15f87f833baf39a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=f665a6113168f9a005e95377ad82d4e7616cd5103c02eceaf8093b0c2dbbbc1f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=80e0e65ee0975e9044f9876ac69837418b09709bd21a93b8a3a0994f1eefb3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=7feca0b0c1e8b62695c16de486fdf506d46c1a518eba96bfe1c9f75019dc187c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=ad922a6dca1321b7e64ae1265f19d3bb5b91badf63a62f6c902aded126235fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=2176fe0088387e11de5fc20ca465665abe02b200bf2a80ac87c667dd0fe2207a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAWHCMA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCwCFfh84kxvVE9UaEcCnbQanBRR47Zf%2Fie5Qkgvaz2LAIhANmap5dFiyFCstKTkYBm5BkXfA%2FbjTxRwLyd1%2Bj2NfLzKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLUG%2BhWuUtjmUZ5wq3APqE3wVA5L5v%2Bj0oY7mySAesx5ME3oSCUgQS%2FjGSys8IVYSXWv0%2FpP%2BZ8TfC8aHIB1CYWQpCxVRIp4P1LYAF6nPqQ2IJz55ltABz49wo%2FCvcFyP1qnR64%2BxLvNVFHCj83rKf6nIJ4fdS0Q20aM5hRIJIlEKs3BPMbBqLXvbB13QrRwlFzPAzfaNFBMUDvXchZ%2F1AtO%2FY8WPJwFQFKKHxjkf5AEokx%2BIHHBUc6n9%2BnNm%2F9WlmE%2FURmbOP%2FYVhBla5g%2FtX0%2BFJq5apHaBa3tDHTWJsNN8r7jW2hbFSXzJajiaiNCoPPUHS2uQf6hljkZx258vouWHOOU3yVMvAYwiIM9h8S4xaPO%2FafvzijtyZIk%2B4OEnBRxniWYIc5qKN6Ndlp7wH1zx9xBRK63cTHRAgOBc8KGziMSdIUYTXoI5M5B6z1uPNZzOI2L3tZQDwRsWEhswkR3PB3JnWaH4PiMFNN69%2Fb7pYTfGBuW%2BFa6OWC8aSQQoOKKdVWQGN4ufEMjJiPdzyusCoweU38qkNq7QEKDKMkPf8vjN52pWf0G%2BFw5T%2FviV%2BnlpPxriFN7IDvLHX7vcEHhQ4t3MWJ%2B%2FNVrIdEuWjPpunGrpIA7ORsp5Wz18JkyiM%2BWL1IYIanj8pTD5qY7BBjqkAUnj58BKPjiRy5tZPA7Q%2FZqIKk5bSIOTZb5bANYGBcfrM85NhwqQ%2BTFgV%2FcO08LZYkW%2FkTIaNIA442rzD%2FHQk74OHSjZiw3Qv374yF5HFHxmrOYB%2FgFHXyD4g0mry9012jdNynG35ar9FFy5Xrfiuvm%2BCs18I1%2BnTCuT5TnpYNNadxxLtb3kTnEDysPT%2B0HI5sA50ihPiD3Emt7rnDjc5TBggB%2Bd&X-Amz-Signature=44803b8a902e88031b0aa93513dcd0677ec79729c7253a634af3af759620dd90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
