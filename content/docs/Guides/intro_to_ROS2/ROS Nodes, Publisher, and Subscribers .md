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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=41ca79a00b22afb33fcb3bc5e4824728694a9c2263af258ff94e1d3aef162a24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=cbea8acc4d2a2a851c1ec7d799eee3bf4db98cac9bcc7d738c9187da176d3fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=fc9766075cc18fc7a320ca56a9b94af360c60859092ea8ccf6157d99965eaa62&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=5385d2c7c050d354e04294a54c49816539d5cc9d9609815eaee2bc2d19438df4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=0a2ba2c2af8404bf05d52d2f5d67c643ffa69cd8ca575004feae53356b3314f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=f09307458620474986f0f362aa2fedd75e3f49a52b27f95d325554442aa5323d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=fdc5c09736601feb54a7ae31205294809c9f1600ea3a3095005b057d62b8f155&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWU2NNB7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRIjhtDiogWiGVKxemtholvRLjp8LHobWbSw1QCUfuwIhAKp%2FTuVZXDyG9mJ2grR3Y7dQbuxW9BrjRkwuolcqom38KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhpRSA7E5upeFEhYEq3AO%2BaAXBdDXvRjNfuBcZOXhiVznjuWCV19plMxTJUM6mpx8fYU%2BmUcKArHB%2F1hWSh6l8re7SJ%2FYVX2V%2F4kxO%2BsMQVaZdin1d41G3id%2FyFddyH1ps%2FzfwqYiH0cCwe8RwbI%2BnzD4y5jbf%2FzBuwnI7kFlYzAyR4k8AJ%2BmG1qzTNIzXBqnORCRsfUB%2Fuh33ZLTuPoh4uyMD7HUASn3%2BtUdD00toSIIzQYtNl5P593Sk%2BEk0V7mnosSwtX9Z5owHaydZW6tzXLs0PoeTgz80ccJzAotoA%2BkO6Hi%2FeGAtmjmMHEMgY17DWoY9GHtN9ymUp8U7wL5FF%2BW%2F%2BCGLWG1t5Jlhanl93GfaFt8eoB6%2Fi5xKyiTjwTHYituMRq9aQun98kQQ6DnBe34gWjBYfD20Tvz%2Fs3np3islWa4xvCECNx%2BbYeHVKq37DDt%2Fyrn%2BQeKFkPEqAZ8sUbQRlSo3iixM4jWERW84dLNVnAfxeK2qdsYYPf6RnQpFJzxeO6P6XvQzz5L7lpJsZYQNgV1f3hIAqhbyFICFUsXqpHY7LhymTiQIMvUIpw%2Fkc8VUjTME3TRZmZFUUFiAzEaY%2FsMYcQb5Dn8I374udQKs1L4VS48iIa2p7nA5XxzoDZ894XpK8K%2BlpzCT%2BPm8BjqkAXWNXca7SnyVQ37wG1Y0jkCmDfGEujkFfcdgzofiCnifpWVHRc7aB39cM9GYZEZ3Jff3Ye1X122ftIaMcjuJY0OfWq2WeC0R4fn4FwcdPBJyPKV0D018JyY9PDt18XEiMq%2Bet2N%2BdwX3HW5bEgXgSOEgsYth8JKhJifXADEWiwBwkzJPz56Ri%2FXNiN7ozyfjWW42%2BJBjnA3IeacHN%2FXqPkULXyzX&X-Amz-Signature=b12e83e356d178939f62bd7a06a4329d68d9faa5c0ee8aa0da08e8978c186ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
