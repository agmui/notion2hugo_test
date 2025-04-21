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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=1e8e7d576326db37be90e77e01ddbd354c155a63075cf5c9df9b19b5815abcce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=fed670571b35785756f35d1ff64f6f34451f817818ce332a1385421841c6c8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=6d81e78f6ee94880e18259115ce77da0903c0315f40a954cf2c3b2856c23b730&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=8fa0d584a1872e6068e3f4376bfb96239538f298f71fc4c86d0ec82c0172dcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=e1aee8b4aef0304a8a86120402d5ffdb7daf1591fb507bde1ff5bd5d5951c3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=8f0486777ec4f3ec8c241b0279ee5529026d7e49a4b81959e189b6022e54f4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=9f6e62c62477fe6ed03f0feb48932952970f8e9cf2caf17653c7899135060f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPF57RAS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHvZzivuIbeFXfrn%2BwyRFiJngi6iCx1vu5YR%2B6ach0XAAiBUKu6H25%2FZZJ12jDfHjKr4hR3cK8d5K5hlQ3cZqWuFPiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMip39ENZlqdJR7V83KtwDH3g%2Fq01Fc4ixzEVaZlq927TVfrBhSVCtCGP4E0FHQi5o8cbUAzMVV%2BNZTPGYCK7TFHhFcPCpbfuHVBvqy4eFeYTQwTe%2BpW4rF5vzMVa3g5wv7OT8ihaufXblgl2GT2kdio%2FTdDANREc0NWAkARly2tXTrkqeyrOd59ENkkd%2B1VnYJEVq6tpNRp%2FbYivFzVwg4OPyF1debe75ILjnWUJcbu7Gmbmjrk7VGJrr6MqrPxsyAxGriTqEorTGudBFtymnh1kOgmg%2Fl727e945iQ4Eaq4M7su9IZKy5BQ3V1zOBKV6looz9MkeafRnPeHPQY865ajCAPWpya1NXzOR%2BV8ve%2BnemDDXNsQn0KvAELxxgJJtKXZR6e4iDymixsmNxAcDk5m55K9G3aQXimcPOAeKFZw1mLWhX7AI1dVctgHOpW9l0281JP3gqP5MyhDzkjAMEUGRmtiTek6tbnJuQAGrENKr18Tg5ogkTHNhFpp%2FnLVUGTKDkYh8uNAno5pG2ckt3zWvEKltNuaBta%2F%2Fnk2i%2Fm9iFWmJ0Yk31%2BQYsljFjjgy17HlerrOAu9r%2FrgMvvLbsPoL%2Fn7O3P81942TTn6dEto4Vi%2FA%2FsN%2FXNOD7KB1IHv441cBVZ7m%2Flw5TTcw5peWwAY6pgHfcQcMamCOY7NLll1cI%2FJuqb%2BN4O2GoooW72uB5KRmR1l3kywQd2u3RSZtP5wMMunWVIyMeIFYVTFsV9%2BVlBnzI1ry3E49BxHsDLdE0wSqdJYhFxjw81rqd5cdoUaOa9vFjcPe51aBxdZIlWOQiYbNTnOKbndInh0i7WzLesUzwHa%2FyOXdVScknfFdyGW23nGn4beFxu24JEa4PZ6bo7%2FC7tg4FE7g&X-Amz-Signature=99a18881d6281f193aed473b7eb75b9b2d16a964dd7a83f71c83fa5c0e28e449&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
