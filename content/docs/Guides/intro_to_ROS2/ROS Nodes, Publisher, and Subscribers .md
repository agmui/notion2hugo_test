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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=61205585e74778abb23c4331bef4c499be6177c144e829fdba7411c1f750e810&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=ebdfc255de0b72da28444b797bff171a8b485434c30d9add986c88216f93eca4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=ea7656029d0c2c26e2506982f5ffdd80a46ca1083d2bd9f3056e96de0d7eecfb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=78428dd5d96509ea1db1c1366dc30d5aabed9fdd6040df65cbb15f9801a3ff99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=312483b7e2251e1a0389c68d9af8cd3280851539072127de8d9cce06fdcd0b25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=a8c97e0e3d20c88253bde531b25a7be52aaae4c806aac29ab185f80dbf58f7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=00f6c61b0fbf28e64c904f1e081eddcbc0f1b6278bd357342e63c91a6c62e07c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXAO3MA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVroLJtaDzfeNAwf6RFwSAhTcCNGVS%2FDJNB6ebqwaoGAiArHpFrtYEUhdJ0%2FTpfODohZtztO3LSVrzIwThyZD6OTyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvoaYC%2BBXN6RASBjKtwDu4yPDeXpyToqYoRRGTJBZq2LVwqegrw%2BJoG7OGFEbDt%2FH7RQdn4r1pb5vUr%2F%2FHdw%2BBiZE%2ByB68R8nFqCGItqlP5h6dbg9z5k5dRc9HiLrWpVekrG1hvQ6q8J4vpXPn5RalZqzshc%2BVmLcs8hnPEigWBgzygoCT7%2B%2F3qA5RW0i26jXyZc1RLY2gQJHMXYIGwmNPGdydMIx4xERK77lWiLVse7yhXYTVUT78s5E0QBcJ4GfozF7D39YAaa6%2Fkc4qfnvHSr162frivJdxkCKkUyoIK54dZJ91NN%2BrZC3IAANr04yZNLLOcuML08%2BB1uxE8sgA5wAzCSvPNJCLHrsV%2BONlTKnfberr4fOpa%2BBYDzzUbg%2BEzbmuFGOjxx32QxqZCN0c90qHRqsys%2FQ2NRhHRGp8PUqaJOsnnEB9BifPVuuQNS2UeFD7Rgnhe1kb6HNJXHdcJjcehLA4IKdGd0%2Fkwcya3Ts7vIx9S78C6EN%2BW5JsUCtYsiX1fdLq6YIF6EgAHY9VvWuFanCBpGJFOhn173ZlgEUbyE8SayAmvjgy5WX%2B6wPIcU3E%2ByAP5uvVhCIrhJXDUpsb4e1s%2FgxxD6jbVwwSD7CmEPpvAYz71zMbOBMQk1KgB%2FAF%2F9X4bzvc8wvJ7bvQY6pgFolFzh8O4eN9CF7zoN9JXZIezoiXL6KjWQVtI%2FbBJkHyk6K67Fu%2BNGXwPIDXkT%2B7cbovLeD7%2BM3U%2FzIGST0l6BiTOiw9WIMOEItMiBIPu50aVo32UJRNSBAhJCTiHIt9%2FQGuV0fCgJ2dSlGLLd5ySNTSL68108K8IR8P2ds4Kce%2FCpcwz9GoxHS%2BUk7NxrVV2TANqUsF%2Fiw9%2FF%2BFEgVlYqDN5Vd9Em&X-Amz-Signature=26dbd6f9af4253b7c1e8dfac0c4c985978b9e263fbdaa1556e5dfdd3c6d4412f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
