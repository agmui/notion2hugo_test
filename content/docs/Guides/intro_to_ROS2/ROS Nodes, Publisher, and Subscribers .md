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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=3e457c6207d28c00d23a6b66022ef1bc36819520fefcef3897e12f9ea8dafbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=1779d80e2b06fe4bf6f8e6d68d332e36b93a5da01d1111440b6cd649d0289ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=7e0a113f39921954b35891fa933d5fd1a250ae4ce4f6c3858494b5df4a77fc6d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=af6af8087024ecc5e5d740287db51e543946bed54ea62700a57cb7109ad4d065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=842a5afd571f11ce6ac8209d5703b98b158bd61dc4adf2bf64b7491ca442e6c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=8e96dd66e8882857ef3b3d996da5e73da496e4898452a5065f2b3dbf038a202c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=25748151a0e4565c577abe34dbb05175288aec58ea1fd1ac0bd2ede6de2066b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMPB62X%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCA%2BhTGDUldFXQVBkF5MQiMxW9hHBlHYfgcy1m0BGPWSAIgFnYeZDA%2BnjxDGuQhwJY%2FbPbxAXIvN2%2BSJKX64BYpbJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvR9yR%2FVZV4VrmVircA99SMu9qCJpjY4EtJKZf6V5YI17r0M0RpTrhxYtWvhnbBloyz%2BHfRIkYImQlNGh07FOCeoaz84XLf6lwo5OqBmGg7oAhNicwAz%2Fr0rXnObiE1wz4Csmek4T1eCRecAxmpvlfoIY77zgcAB1HQQuu1OYTWXYXfubF76ftHT34GM8BAPKD8zVYOiJg5KZ0sESVH2bWDZkIw0e8xS01mDw7gc2YMV1jfHQMgAudpW31xeFzKzrpW2IaDPQZBWeuqOegmjGh5dWrLRT1NySSgYF46RW2%2Bmu0vy%2BSS%2F%2BbnJpvkvHoyCs%2BFYMr6%2FMpRoYXfKBt6rzl6lfBlWQdpV5%2Bkrnxxd6TUrdkaAPuD1muYsYRGYPfhEBWVBuAFpxj%2BtbXeH0Y%2F8ckkfqLO0ZpZYPk72LDDcfF7jN6b1k%2B%2FAAszYgfXKfwxxBcx6flqnoszwpjH3hYImhet2O8JdD2qx0nPjZ%2BAjrgAyEshiwHsdVll3NdEOTfE0pq9s1awpnEMcWjHXZDwCkjBe6K5tPG3ZreaoBB733200UN12yiTo79MAnb7SJVcs6FytPVltQEypvHDCC7qQzGB%2BVTD%2F7mTfV%2BWxLXPSAxQ6N8ZOfZ8Fj0jCmvo%2BqmoCJpsu8BGQLFS%2BsqMIKkksAGOqUBYHvI0nRrNsTsfXaPzEkF56IcZhC0349CAiVEgyszt1%2Bzbf6q2chR4sfEEgYAfcNMRuZZXOl71%2FaHQVzQSC0ng3TMNzIKZYUiqhDmlRwBcz42Kibs0HpYcpSmWhFsn%2B%2BoyEt7so6yvxxSBMbgRiuq3K%2FBoZoQ3r%2FB%2Bz1G9e5tSVzQFW0iBP1LP6ZVuP3QztxWbFOx2l0hxE14fSmgHAXT%2FSE0rIZ0&X-Amz-Signature=6d62d05b5dfd59a9cc3e4c75dd255039bf11f27ccf08286b62ff20161a6d3bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
