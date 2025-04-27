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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=e5d608eecaedd1b865193d4042ee8a1af5f9fb0561737c1b5fa6bdce58e3c905&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=ebdcc41bd2e817c97d0ac12b961d90307bdb18767d1e7bc7e36b49cfddba91e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=e87adcd3b52c7bec2b2b47f0619adbecef250cd2f2b18dd983c9ccaff7191979&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=df12f142ae996dc3f9463d179c9053eb76467b45273166ea11f44fb51d4063b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=ab4485523b7a1ab655417e5396f62f2e7d0bd1ea0435ecedb67c0739fce0a5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=20d9ad9fd242bf1d26f7dfa10e3b435c2581e9017daaf526871f220a47b84fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=345cd25e2a70db4ddf90eca1ee28c11bdd32951bbba3992fdf9c6ffe01672883&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIC6N7C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVdThSf5VDCEIoD%2BjMJtUGCduuSkod5ASTgAri7XEFqAIgFuc89xPbXxBSxGDbnl2Hdu4BjUv2K797S305guVTUzgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBBUmB%2BjD8afRf83HSrcA9AGtl9sKWu7X2aX6W8rijAhUxTjnrgH3ggPlQXedto0t%2F8o%2BYIQs%2BIwtwUsyaHA5RvYtuwEgWVj%2BmDKcXhQioh1OKNgJRcb3HW7MKV2OivAzNuVWfVvgQ0%2BX4%2F2KrhP9XcDXYvzv5JjtOfQuI%2FmLjMWhny%2BnI1wtulzCH3pkKsJaYzxkexeVeJv%2BmXMndtoHA8BL%2Biz0vhaxmXGJ9B4R%2BGLQPSPSpY4FU4NHVgZd9JUgHPwy9Ir51j%2FooE8ULh%2B%2FyuBwzO%2FfG8l0zrynaewxbrv%2BlokeafiMynHCmH95jqFSoB4m%2FlYb4jG%2FgiqdDz6glBbedGOqeE6uGiPRQiD2%2FKchVj8y2prWVgdMSrpzUsLUpdAMyhiyrDZlQHDB0q9KsoDhMJBnFpCU9E%2BMQlcddSXYdZmd3D9j6OrNEqp9gFZdjYYOf4pj%2FCdFjUPRVOzzQe9Iipft0e%2B7JEE8Vp%2FGdm8tz8zylZIA51iPxF23QNPYQzmYjbibG%2F5zN%2Fj6uEon23f2DYDF%2BwgpKWdLNLmhYEB%2Fw99%2FU7ENv5gNuZuJYHJ1DzWMi1hBguORr0IyWWTuooZi1NmIGCcw0VdJYI53t9hSiItgP7%2F37ELo93xDHMx90strUMOIfRPoyZaMPSKusAGOqUBTU2MNwfio9LgizTSc8yMxl9al9LOa8QST7k0OMRdiHeKSJ4MgGFJ9hWTaRevMo6sMNgNVBYC8eiSdeb9f09qn9H9vYa74JvoaJeQAqpFopg0XCFfWKPUGLcuPg3Qv0K8HvjkDvhBMCU%2BF3BHjiPu%2Bz8wnRvL12GDp8LOKpwzWzposLwQWOW9arZoG%2FEJNjEfQQujUHzDSynAM7UoWyLtLUYBTg1U&X-Amz-Signature=d0f3f0845760e30912e676f61eae90df26bfb8d2857fae1c540425644fcd5d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
