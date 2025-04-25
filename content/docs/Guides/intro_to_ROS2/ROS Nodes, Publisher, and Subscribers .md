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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=a6d5fade6a3623fc515b5aa3c20ab17d6cb09b15b789e07e4430cbf952bb4e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=281bc4fe837dfe7b15db2f3043b8dfdf858f3665cbfdbaf3da2e2d5e5bb3a835&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=728a12f8bf5c11e5e33bd32b09ba0fd9313182101303a3ed61abb1cd15fb916a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=c8634d98b26fd1ab074043bf4bb66caef283d408e026b0e0c68a67239454a2af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=414f574a451e17970cc09f140093e9ff74aba5a225c05580539f15674f49c03c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=09a6e9a436c497d976cb53f6d46c70defcc7dd4c006d4fe1c0a25723ed3c9b68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=6c87bf09ff8506dbe635685c82e545fd310bf7e25a45c7050261caacf15bdf90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSLWUX5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTi7GGNQ5042%2BUpVvwWnN%2FUO1pUxVQWamYGb7%2BqO%2BM9QIgXxy1eVQXz2Npv0%2FHzF1R2EgGi8Pv4sM2HI4ECnEom9Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDArn%2FuOJDzQLA6aE9SrcAyXhF8QBaxJBtsJVnUJDBL4JrUll0%2BskfQHin%2B7lWExwIF0oA1HhPCM542cBNUyCK7ulkXwoH%2B%2BAM%2BsuqWvlq7Np%2B%2FnHG%2FP1seePvghN6XWyD4G2mLiY18lVNbbAAPNPmFC8hYdK5m2YgKRIg3ufsVvDTB%2FM3kUvR%2BwN9lS0wTBQhZFmgHRqIzpzs6xN4ZKt9bluw0sYH%2Fc8t8ppI3IkffLq9DMsMlMMeoClbRXebjKUf1ERJJ0TugKmA7jQKNGWBW3tX4YNRzLqbgndTSlFoR99SPHMVNM2hWOy7YzcxcAcO4G6fQJMsdK%2BnBW2u3NBdJCHDsdejxgDeQD3LkgRq7xENc%2BNHIDS9cgzIiht2C47Q4W8qY5R8nIT9mIVL1dTqv806O35lDikMCU%2BtzSNqJBuDpBKuPtM%2F3bXyTjGK0WuY9hMVdJsv66trYCPbLq%2BHF9L58Ykab0L1m8YGPcGqcpGlqK01qqGXy1wjlptfLIWrJRDjO0pBz5EfbsmlZ00VLqFecY6Gc%2B8YyPmmuFNm9ONfvqpVavYuEgyFk3M402q2ojxCiv865D5%2BmKQqhAZoBLnSh6Ae1AfXPfngPcb%2FxrPo7ND1ckw%2FjpBZmVqCJ%2B0%2F5LFnUUCl08RsegpMJrKrMAGOqUByxuDvQ1OcmmRyunnqi4hWAxNtVLvxCtELL81fqFt6A2aN7IdAL%2BaZkE%2BkqQ%2BaiCB0sLXaqgLIitstIV4PCai2yh4ie3L0oAQvcmzDFWOyhiCDDYjHhyt8MQRn6rfsu%2BurOsTpNccsdUnhsuBTt%2FqWO4hiBfj12C4qw4qpdN5mtftCrEQ2zmKOxhi1L61B4CRzaJuwz9tEc7sQX0Yk9ay2jdvMJOz&X-Amz-Signature=77a2c73b4a3fb957f2122dba1a8d326c248fe4f8723eecd5c448a69f866c0fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
