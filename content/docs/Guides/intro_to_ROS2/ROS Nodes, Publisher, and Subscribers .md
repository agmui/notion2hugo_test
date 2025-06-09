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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=d4c41b1cc5c864b72e276c3e582679bb98bb173fb1fe5271931f0685de902273&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=b2b75dfd2a3b8ff56f98b7569709e8aa02773ff0f56824cf3dabbead109940ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=f05a5d4717e0e06e293cd2ccecf7ee0b61f2f2b6776be6047ded82cd698f2170&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=af4b753dd5c42f75bd59bc5f89cb43580b35038bf56700585c607b8a41d99f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=312046072b4492f2d9bb54c727b232d505d18acda2000397689f7460998b3f82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=c40374c3d8106d8e59bf0d0e313abbcf44c1266e611e6eae5a528e0773aa0e98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=1c41f6bcd6f8808ce2b176512cb9effa120ea743edc83de6edaddd90c3739c18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQXJNTV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F2%2BVWfR63ZcrwwxYfnbJ2aIUtVv%2B5ktub8WMi%2BZZ5EAiBdJmNprQB7IZ9H1kY48WpeMLd6ywU4vYSJYEKZXbyXfiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi8P5wGZs6EqjLAuKtwDMgBxZ%2BJBSoO7rAtxFrohLTRvV%2B3koOHljx6V9BdRxNcNhDIsdZ39xlNRFAnKEpgIERAuxc3T8J9jC4L7HQV0eYha86o5yiaRuSRxlIGcJRdY%2FAaEXEv2MbWwEmbMNudXHv4bD%2Fan7P2RIJSXoXClMZTFSNGuU%2F8HvFcjAbyMqtPWQVLC85tqNFHyYvIq6smzHthtXPEIs4MRWmRdyfqpxLlDlI8ValAxM67UhbIeDYyyc6TtDJc9Z1Ap4nnewWabIGzvDwjNB%2Fq8JyRises2k%2BrPhkk2w%2FaLEKkTR3eBr7bkeIlPMv7AOV9F2WSxCptu4rDfwLk0GG6SVVfj87%2FcQ2CXy6urHhefzHqL8%2BXLWizJL0ngTHzLgT7sethVR%2B1FR2tsA7ZL6D8jfFPrwnd0T64vRKzWXHwjuJ1S942W5z9pNS3dQgvlDb9vhav9TlmIi%2F%2BcFuHGpiyJMZSzNiXKzb49EkbohY%2BP4uY4W84TRvHR2bmi8f%2BwiHlTKGbf9JG9297MmwsB9DTFBPBt82zMfp4ubcPKJ033q5ti8kbpyZW%2F4LuP6TyBgF%2BERmM9CJQdEL3l9I19cm9aI%2BYgXtotGzkHKWN3mZtcBAcZ7oWztTTN39iSDOSU6Wn7DmAwj5acwgY6pgE5Yao2iybkXtZkt7x3WeWAhuyZsm8PE8C0OgQ48KJeFYP2lsOvxr17MXe4AhwDGddZcTJEsTIQund9NICVcku%2F63FucPqH6vWri2oEAgEgQBll1Bcr3YglpQQiAo6Fszo7olg0cbu%2BuSPLddS1p7Wxr6OthsNR%2FdAKTaVA4PQSBotld73Yh%2B0eWzmJCq%2FbQGqUJPR5dKrDAJzTBaJl5ZqgIlyAFSKX&X-Amz-Signature=3f413b8638139564ce34977df660d8d073c5f2f297e13cb4d7a9dd43bfd15235&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
