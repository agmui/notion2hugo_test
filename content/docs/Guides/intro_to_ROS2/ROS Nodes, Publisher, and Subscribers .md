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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=48c357486f3deb32595ce18ff13565e66427ad0f73540dee9e9dd8090f6d53de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=1b69714ede6def315c23a55d27aef8c9af5f46765243d4dd60573c6edcf55517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=cc615faa85c760c6e3221a7ae6b3fe3b3984d9b62138068502a9cf38a501c6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=4a07587f6aace9298951ffa44739346f89e747d1f5d4a4970849eef43c1cac71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=e7a5919ec15531be531c1bdd0093e919d2e922e608c513aafa91bdcd08c497b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=8df57f26a929d60495e3f53c5471537ff0f0770a6ab4b40b2f48db60016ac7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=26c492ef124e142e8043c25bf920b37b52882b319dc8511ee405f77477d23ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672R24MI5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHYRSASmTjb6Z2rlyTqVOl3KMzFeM2dnAwY%2F7rHNntj2AiEAp73%2BIqn%2Bt%2BscgbaPan1iurc0onti%2FXXkayIUOXN7RpoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ZElz0CEJUE184QCrcAzHeX2Rdy1DEmxKy1HcNVKtdNPgFaDLljAR4egmeBtxsZM%2F2%2BDq1SE4mcPZNGmWRoEqXyqc%2Bnimlo7AsNs4EU26n6x7paJQhVvJBW3Mo9RLWE3Lu2jee8ROT3MHuBPQBWeaRyZJgunUvvTkqgGAvnJgb%2F2dZxVsf9KOeVnKFVcnA%2BrAHoDysFttdBRhgA0iNBxqFisYzxKqabmqiRzQRfeXdmrAoiF528C3YJYFOojvpe7VabIboN8zj1xmadP7ntwKIeMwUlaulHpvT3Ioq3zGGEFMJK0vA7F%2Fu7goVTan7xoPLRmIZMcG93kfXLkxfzTihqYoChjvZAmDdzzsKSl2oshFxn8nJACFoTm2xzy1KY%2BeGFbGc9KwgEpWHAu%2BiJS3kdjQWhcb6V7oeT4%2FHCz8DPm68acpdqges8PW2kIkzcbz4icwBA1LIRsVFx0Ns%2BTEI0Yqt7XX2t9l0ghO097w%2FbVHMbjmSKrZ0CNsxafnHfCpwU8Ar0jKzJ%2F5ByKXbaZniokeH60%2BflKrXyfGaemGiuz1IFWY0XvIbKlRZ9a22PjY6lLOeU%2BHEtj0v6ex2J2sFgg1jilMc0MwOa01%2FseAds6fdsc%2BX%2FXxJsDLQbO18f9E42lNPZpg%2B7mOeMIGPnMQGOqUB7OGHw37TccsqC0DOSv%2BABOiUU0o8o2yRk3OHPf1Jp4jQb9LtEoIN332Qk3yzZXYaCxSK01ckbgKG%2ByplJXhmVVigHAZIsfKpOV7TpF1gbKcBoM%2FMDdC18PPNNvF%2BC46SZwsMntnYF3W9HlagxRuJcj%2FXZ%2BZ3wI6zqo9TRbbdaqTHv%2B70Hm8kjHVmq7NxSF%2B%2BUDUHxZZm%2FrxZB0%2F39UshC%2FuWWYD4&X-Amz-Signature=8c32f448b752764bc9ca4d4989d497b2e8510b295fec6aad3bca59624205bd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
