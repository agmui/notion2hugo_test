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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=e46cea8e2918d4431ca2a041e72399c2cd22dc3bede4ae1ff7f024eb178d71b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=ec3f87603f7d648cef7fb86dd366eab556c1a02a309f7ba2837d20a4e8265033&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=70ad2f09817a4c9ea26d18ccf681b9a330a84868256e4649ed2518ef59e1b55f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=c1f8ae62db8f8687aa4d59b04e6d74de4079b0414c8c83c99ce3f41862476118&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=231422108ecf4c3d66232c5057777f57f9646014bceae6f4ba9e193dab7c5c67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=d13773adf4b6116a7ab2c8c7c4ded3c4530cefe994519f2d50f8e5d25c430940&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=1a14e00276fa608b84d88efe83b1044b13eda45ef8e190f096f5e018ac2cf7af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG7THHT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCQZXwifi6OXMPfkNF1kG49jJowUz5%2BqOJ1VAOBf3BzgwIgSrjIzJZcK4p9wP4fXgHTh197FY0lRi8P40jMGJPilyEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ZTh0c6mezZLRXDCrcA7Z%2BBqtzvyRXGD3aucpwelIbPvrH3wMWLg9KkqJG2rv0xfTekn5CHrLQAMutdtNxnsNAwmNj61ZGx50GiXPDkZuWztGSiMM8nSd%2FR2PoXQxQAb67En8%2F6EuidKIjgqGnstA2jq%2FkmlFfz6cFHRvyfBxJGJ2vxGvw4%2FJNX5enMY9ENqE7VGgcaJFubbcI7%2BdgifLFrYKlCMeYh5no7YYBpt011G%2FowHH4N40qQa2jveQYlu2dsnVnIuazq1MFM1HznBOqlwpG5k1yV5peV%2FRkqyqvouM2MMAmiGFqnBobIm1iXHaz7CerPqXUhiRhXfYmKYXHvuY8GoQ4su1NCHEDIJdGx%2Bh6QBwprlGR%2BX%2FLO5RcnceYxFvk3l5skgboNwjPdsoGy1nP9R8JPXOTHzTe%2FQHbmFq0VEGgho%2FAaD%2BtGgcndkA6LrNKcVUakRUBuZbd8qHmSItNI9j%2FHoReAI7IrhFNGFp4icTMaLactB88pfhnrCjgHd5M%2BBCIuaeIXH9SX65SZhYM6Jhqoc26Km7MI54ZAaFNtZAljknufHunm15hpefJL2vyDMcsAHfHACaTSNohgsC3mGsT%2BzMeogH2VoX5LjHtAQ7r%2BelNHGwgwkGfDxOHKnjqmoiQmRpDMJz7uL4GOqUBqinX2F%2B3RRABCvL0OYImk6GjmfuzXYbrO49AOBaxK6VEtw81yGyiHXZrdmpKeAVzYMQiUchSKFDc4jcK1iElyWHk%2FpjOh2EKVp3gSEBoFgy0YS221xu5oH0u9wHwfmSMCHe1MwVN6J9WDH4PACJuUH968cC8I%2BZVNn9xYx583sStGcAf7cKpON78ZrSXEFY8a4Gh8Z8%2Br4AFyeOZMNhmmwYQijSG&X-Amz-Signature=2f8aa358c4be7d01aa14c68c653e569c8a47dfdc86933f60454eba65c54657f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
