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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=002066e8c3c268aa6ef3304c3df37b5eb82a6227fff9f4cf1a466dbd45e818c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=623d91ed7b1cf86cd50c4a246e0279f939b1bc7e9da0f556f2ed2319b3aa68ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=4d71e21bbcd6e482e378fef49b353fbb2b2fb1bfc170fea23decfb21000922ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=387d32ea69b09c6842ce31217325cc139657b9fe477d123ec579738e2cebc178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=0be9442a04aeb48b4cf3123a4ae9664aa18e326ff3440ead14df64b9a57a525a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=25e503d44bb566f6d381d65f9ed071d5298b13ccb4230c6360d391ef93d15886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=281226a0c76bca438d8c4ba5c11c9bed77b917efcf6001712df3bbac2f22181a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6JN3KW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlFB83watbL%2BXbyJqJWKjHytZJ7AKOSK%2BHTMtEcP1aKAIgMMS7JLZO64NUJC7gcU3hy9XkvkwmvrR7%2FaxmhQSGXXUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbSYcFJzlFaDNk5ZSrcA0ePBbG%2BqWwJOGkbRRHYkP7y3cwe%2BamaCgs3wt%2FRBD7xQvQ69FnOmKWBeM6LUBo6jDZX6vKBLzeWoSpp05Rn3lMwND%2BiRmQ4pT0cUQkfoh1EaRDfkbFilBqF3bKX9lDORnI1TY9An3cPwlcLoBkWiErK3KtnDA9GhZLJUV7TSFFbGc67%2B5v6Iil%2Bx06ayK7yxbcPDdUDdFFb5HVuPhbF3BF0S06X24M8QoWSix7XSTxXX%2FOkN138%2Fe%2FEeZErD7QYU6awRQdkOPSXPZrlCneUOdBDG029k5TeifEztxSHrpA3GbbcHyJJt5PpIWhNR4DieRek85%2FJKs8KvyP1lL8SDiryu1%2B74rUTVEq1UUCQUWzjDDA4RrGaVFqNhaUfNNmCn8%2FBUmXMQVdtI9emtZNeUwdGAUhWE1to3gqOWbaBr2qyx1TAX36kt%2FpYl1kwgUBVnMwO4jptyj1M7%2FtGq9sNa98dVUWDNLkIoGR5xkFt7D9BKTI7M6CU%2BTlspEOez3nhykKhu2TaLpv9rjXkuecb46HJhMeUUiawXBfsaOL3WTxUMHSD7OoCoPdjP0z5%2FL42mzQVy19aG300NC0FpuqfcyPRM0J0eVJMU2U2A97oWGQjY7A1K6C7SkrMnDSmMPiapsQGOqUB650zryPLJMoYEm1OMVlVY0Khkzacwy%2BxctnY9gTtTLyNiGNstaX1JlsMmgwDuO9oeD%2BY9ufu%2F1ZO%2BHYQfEhGy3zq2PT2l4Y6hqrRrWCH9fE76w5mIe24cMcYtGUTM3CgCZmOmcop8vGvWAMUXyOcG2RmwiCwhmXdzxi%2FR%2FIbjZzamLweJEO2fJTYHPoU3S9cwPOwVwW8HjZntMDJn%2F%2B46gUzB9Nl&X-Amz-Signature=1af3a5c88ab403d6a7d6d22a4d33ccda4208130bc85a2db5f5452c7b7f62d5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
