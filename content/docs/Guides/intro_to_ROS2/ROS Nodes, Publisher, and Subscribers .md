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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=b6d2523df190e4bfa0cc6f0a38736e319e8aa203d213f8a9045eb1b6955bfa4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=a93f3bb479987c0d25256d5717242dad3383d876ed9a52291c6033aab56835ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=416250d1737a15f1765475a18d90e1da5e146dc37123228f96949ae1616d43e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=9085c002d0e044d25c484348a320924d236822e19a60523f82a01067756bbe38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=0225b22ae44aad277d1f5243c8039152b7856db14f0263201710ac5d12200cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=147d2ffd1d25cd0f6cb45270f8b48888c82a1679faff5430959b03dc1fa0dfbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=c7450d828a05cfa6c38abba7c15b43ab885694bac2c9677140bb67db4805c4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WWZFCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEoS8GcBFRdt48MSUek3kazCFSM%2BTSPFaIbifHZgDfTXAiA9rCASksVykqWVEL9rmADSOhbhcZ347PVBwD4GngYQYiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNp1dR5gbbtvUZuNIKtwDPbofseWkM4KtWHWUXbKaF%2FuUgZe3qXZKcDav7lofoZ72vy%2BroIZvVH0qvWYZ736jZeWXLXUFNZ%2F0kKUUAG21D%2B%2F%2FazrsRQ2DT3ll2g%2FU9TBKaoEYC4waxdYavQnF1LYyFlw2Olt15JxkFvuZwDrqukxfhLhFrR2ak%2BzuQk%2BNgMzmbZ9jVS6t0t1PQLKCOlZqgBDjC0nVQ%2B0md3uIm%2Fu%2BpWFXvBe7Jtc3Hvd6nBqqKQZiBQ8zsLwg8dJzrLv%2F6elc1W3v8KQ3vQZtRPI4JFTrI%2BSp200Dn190o3NW38Z0ccghZ2Td57R5I7%2FWZoNdOLj7N3BWheVp25l8TpO%2BStEkXlctbxY2MM%2BNp5Eg9DrYO70%2BIgZ72gqQbez4tciAZ82l7d3U1a5zsGEyPPgaYQ6JqjaX%2F6b77klWBsLcj0lM90K5LkS%2BquYwh19jJ7A0J1XVxxzxQDVmmlwfKRozhqqA0O4XxhAqswWGYnIpiJSOtq8xpzJ0nNj935NIYHTDBoLHHq8W9ejdnmsuhm%2Bq%2Bpk%2FutrN7glo8W5zzSNAFl9U4X533c4fYAd0Yvy5WbGxCATgFRrxF90FDxP7j%2BRSeY7t7ePeV4FfO7kpuUgeFjHzWcf4BVt%2FU1Be%2BnhdC3Iwv4%2B%2FvgY6pgF%2BHRnedn92PN6J%2FVI9MYq%2FxIGPFpZzKHrzZuHtUY%2FEXJhnVboGn5hPiQ5sLiaLCAqh1SLTHVasAiQUx%2BShIY1lf7zOL5dJr%2BoTyl6CK0Rd4cuBuq4%2FeOr8y3xBI5LiXch0aaqByWOU1RzzCfeDElsHmEEE62cxbSPnewUZrviXrlHflZJcwAQoj7ODW%2BD3JlhmoauXtVadrRkkvpZ7w2Xmimjyq3uV&X-Amz-Signature=aa9f080817cac80b3cfc0984b5880359f7fcd6a6d3531b91c9afbac70d16ed7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
