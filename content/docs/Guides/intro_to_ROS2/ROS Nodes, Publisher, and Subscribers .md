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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=1a7cf7041d20715cd68dec36fed0d4df3effc758131a6b032764f5a2971df5ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=430e79dcfaacf4312c4b1af48d93c0f7012c64c124e0c4cc7c4408cb3aec761f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=6318deb6cbd866cc0fb14afbed1cb7d8b9aa1d93afb8c5e94d886a4f9e41c311&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=246aecd8ecbfe65c8514989826e02147b571787a2a6d8e1310599fee058c45db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=1e18b079bd7f5c0ddef9d75030252444aaf3ccb3b2e2ebc38ca57578612834ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=bf83d6a00ce2371710a4e442228981b2adfe0cea05a7b34ae1125ff4aac375a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=9aeabb39c20a480bc75427aedc0033d603ecb892d30bdd66414499de17212bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZNGK3W%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMHYTRFvpnbrE%2BinvnnbqznKC%2FK1uRGAPzig%2F0FnKesAiEA2CLlFnAOU8ZXW8uuegnBnJAV2Rc3smCPodHPjOCnKLMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBNkdj8h07qnkhUOCrcA5oYCi3P3ze8sChOBuIeoKiXsurIjBkfGB2BVhab7zCNtfprwgSOPpIwUBWd0nbPrzZ0oP2EKX%2BPS9O0BEiXidlG6bO4Kda6ytTIqXRpYtEd3SeSSM34fCKZVmTbSMTG3kkAMNTSfT8BOfnGUEXGHbLBx3oWP2yMse2Gn2AG94S88q9LRB2%2FLnoD%2B5Law6Rhqn3zuIMI0R4dVRv%2BbX1tglhLH623Od1fj%2BRvJEXJQTt%2BOsyKlRnRpneLVC1rUz9i5RdzucnJUHeiK1VW7BpZlOyiC%2B1uqdIfgXuRWdbcAyKZSNP5tfDK3JRUIa%2FyYfMBL%2BEG5h8VbUyz5g9AEtmEwQShDlV%2BsiyXl%2BqlYH3rBi%2FUcI3wxS7riOJ99feS11bczpMihxx3Hu2Tqi2w67EnA2U6Ya6JW2Lt3QgDJpfNXSSIlm9YtHHZfQb%2BqCbq7ficHUb%2BHA9Cmk%2BiqDp%2BUwEgS7pTqTMKElWfH%2F%2B41qxyU3Vac3wsrqJZBm5%2FSDqltuj6AI0IgiVCMhSWImoMJ4SuSnuChRFehHmCx%2FbLiwcMEKati1EkhqfIJN2CXaPWrl7SHmZsT2u3H7l7WdiU48m7ZRZQxIgi1Z0K2jcrrF42byCIbFMPLh17NBOZxR9lMPaI9LwGOqUBKhjO67gF%2BpDmYEXB13fvJ79ahIHOLOwVevGTKkTH1WJWnBNp7tnAFPLmvs%2By4HqGXlI387aH%2FrEf%2FEYHOwLaym1B6j2nDzKxb2rsfiuE8kZLtEA1BfjJZYRS0bBGWEXjD54k7JaB15VmxIeKRdaaW5FZAA1R7cxJ6oJCYh9cDzGKyDPKmcDTgMtAEhb3lwDS9WAFZ9KMCe5IwU7KM%2B%2B1emNoP7B9&X-Amz-Signature=945ad08fee39f6f60f2a41c156d147974659558cac69018df47d0b6d04fec521&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
