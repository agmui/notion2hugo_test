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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=c4dcd4c6330f2a4499cc8569f2dc9fbfea588852f9c971fd91e3eb8d07b726c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=68aa694931fc4a8a512ee8ba2f6fd0688a8211afab9d2b2339371b3e989c0952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=d8608457c1853e191a9a86e075f0d9d29864c3cfbde52c0749680234b3a7e168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=ae2c5b9098863686a4c24a463f53f7a43a156129d05002c368861f6916c67f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=5a98a757acba2210ec3e253c5408079f2727f6bea79f3e72b01435b0daf8f53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=508125c17ba4e22184dabe99bf362ac1900a87a2ce9712664d1a9b63b6e0ea31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=4dc2ec262328442bc1a845932526e8c20ef157d2955b604c4545b9192cea57ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3ODZTP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0F4aauWnSPBGgkAOQ5MkN7l5yl%2Fzst9lhWvQZ9NYqAiAVMH7edaVXG5PoUteutlSm%2ByrwwBgFI%2BOttwvnyUYsISqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMii4j82fOSEwrhg%2FIKtwDM6nLCb2cSbH207GuqGplpLrJPf9%2FVcxAoD32z8QWckUrameXiWTIR33ANKBEcauv%2FAs1tGx%2BB76e5Ybx5xfVFjOdDh86B9tHe8%2FDdO8741PhPcg0bTsp8D0sz%2FbEG2A74BV1a8rXXBOK5UKRtzb6OhM%2BmeBORkBwsdwhmqOCoK4KJwVW3EZBLGW445XqkJ4QtxqsnOMarue8k%2BTQYqjzzUYhHoGuL5Ou3DUv8KFGQIwzV1g6ZKlqe%2Bbvy905HrbsOj2025a1vd10NsxnJVADF%2FDVoFr4IBJPdsPB%2Fxp7bHBh7Z3CRVdeEgT80U%2FzDBTesgBfpou12SXWFZ8rIDA3Yz3RDDgQAG6pe1izGvWuCePj7%2Br0iYz9XBU9cDBC0PM81CErjc4jfIlBJzENY5JcttpCG2hoNy1DvAlkHMNbhMzDnD3i%2Ffc0YKk2j8KjSDTApTIURx7meTYYOxN4FTAuJ40EolWexjhAjGRz22idtACBBoih5D6HH9dzcAoiVwBBR4%2FIwZyRh59K1QhvJH5oZ6Gm7hbRJAk7rVuzWl8Aui6FqgUWH9J1TwdMOHu3zcLywZWfvAObaIFK3Xm03ebdCD4nFHiC0oiIjVoV7ANBt258I1C4Hd%2FjQf%2FtQoIwnvSAwwY6pgH1TqEaX16JGT6J9%2FCUiYpeNj0fNi45HpkvGuBmRZC293tjtPwdna0ue7q6wcJ22cwe8ex2uEn3Egt8DGuyn047629aWkX63N78OHx3f52NQgn6W4oS15wXq%2BPzTA8znjUSOLMpFxcvfBzvIJahEkkYq6M6vwA6V25TIhHB6G4Steq6ngyEFB0dL42kJt8FIa5q1B4aGWKoz0yoHMI%2FgdfRHGO6UXZk&X-Amz-Signature=88f91f43fac0f3f92363af8cc38ba763e6c9b29b157369809a138699d786e328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
