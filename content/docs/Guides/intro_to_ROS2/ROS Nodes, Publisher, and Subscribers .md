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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=75a78246f13374a89288f8e430f0533c61c566d242aa9599672e8233c9680fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=a4c68fca9a7e7ec3f5896055e908e576f74fb649a2b12a41ea3c985e98cc8f00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=0952657e1c39144726a058fe41d327ef2e547d12fe6527c8f9b11c238e8113b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=98f91a27a5ef68f9dca6355a239a95308350674652035c59790fbf99e800197b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=05da60b6b30220b6d88b12076ee5f36570049e54513dcdcb2aac102fad74058f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=87e688983b14c1a0b073ddf4d9b0ea1fee78e52df6a964aff34f46aa1743e2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=951ed362c904c2bdcd9923fa443957b195e098877553be07ba501a06b6179728&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJOS57M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnQ6Yef8O1Z7jyXgfJ7oYzTeoAM1BW036BF7Oz9uYDgIhAMzl1eIa2PDE%2FtMmuKQdxFFexTEsj9V638pojIEqf2ejKv8DCE0QABoMNjM3NDIzMTgzODA1IgwUQ%2FqsHhWf%2Bvadfjgq3AMg6g8B78TqvTjw3bSWePmZsLrN9ucJwVnWpN4cLbR3WfLOGm7PF8AjKffKO%2BmTg5jxte42b3e8lpdsBUqwRR0FnH13w66Yk5qXNfxqabO6yX7NqCvU8tIxdx%2BNnwXbYMEHK%2BdiAJerKLHpq58IMs%2FCbT8h473yuwNSY%2F7BaUJs2b5b%2FumaYPEZAszurstX7c1uUvChjdXw%2BBpdsV6ph9m5%2BLVtYJLw1ybCfOD7ZMxZXcdR3mx3wGNxDM8PObgPhsWoScmK0iGFIkV%2BjxU146VETiIG2belcxIcHVGzF6J2Hu7pkxocm0E%2FyLJ6dIr%2BXhzHTlnPfObOXXjGUH13NOlsiDYLD1o0Aq31%2FNnUsymu%2FpOKYzIwKvvDvwwZPfzayUtNUiwjIoJQeJe3yHY%2FrOatj%2BUrH7QzkG5%2ByZc4f7IDU9eDETOfbJTh%2F%2FoCo8AXi8A3wCjrIbSSG8BrIe776FG58oF1Rttjd1XnRN7xtTeexqWkKO8ZC54X%2F7tP0mvW7k9eY6SQv%2FuTZSYdhDYuitg1xaEcSCjrewDyrxIP38CZRp3ClRuTWp1J5GzPRSh89S2Fq6mQXXffx5KESOgLObsNnZ8ucGkvT17XZqFUWG9Y7Tfvuln9crkt7RKEaTCB3Za%2FBjqkAcWvxe0oMsD8cB5Ox7oBd5OQ2AW9Ln5vsFsGyjCoSjSuVgP5gxiCSVmkgmOexq9JZyep%2Fvzb7SJjq6Sk9WuGfinrBFPNVvKEYgkTh0N37UzNJ1J%2BdwXCv3usZjswRVoY8Qc97Ks7Fb6uiU1jg5kJ%2Fe5nSfvoLpcMd2Exew0VnLCM9vmOyPOkzBcl8%2By5%2FQyAjUBiRaM1TaHOB%2B0SUV3MIqbYnxjN&X-Amz-Signature=2e32f6ea296037dddb59c6023f1938425623fd520250f44ed8c7d7c0fab6a299&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
