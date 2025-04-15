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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=6440e6b2dd23f8b130856524efa7fa1b5e5e8dd5b17a1cd8afbbf09a662fe1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=814b5e777e5c8ad329f44784d20c6ebeab11e5348c70e5d0434f7b98f0db4f51&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=3b1ca60c595bd97f0663f781d76fb41bba606fb7a3cd8ad44cb650190c2914d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=85e184fb37db2ba22d6296d67be0809b0003f3b17e3d4aae89d954ef6f071f22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=c4ba1f25fe15bf65f86ea5473bf06b9f3964dcafec6f433acd011668f21be92f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=83647e7bffa9520a68f2e4a199552b7f0c84333a1d8504429cab1d85fc39d533&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=d26e4c8ea312ad8b961d96c1a4f1db9fd16d406d948d4f43a87e71dee157abeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUUHKC2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BmFeN20cmoeRkd%2FZJ9in%2BmEF47cizDiHn4l1nazkgAIhAO%2B95O2ihctcQ3dHKvShkowetAoX11XJp6s9GBtkQyc8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxbbfYogrwYm0Hddicq3ANCdvYUxvM%2FkP%2BsqLP7ipm09ijsIzTsuK8WuYEmrhcbIA7mxJcnvXyQt3tNnArGHfmXSQBQNG6RBBc1SWXJffa%2BzOd3auW1MerpHGTY5GJnVWQvK8dfAxmvvq05zmqdEIwJEsnOzbkfj20BjSKcBhFvBNbBCkrVEvrUJq4%2B8zWoCbzKapEbkKNsukxe1ADOEbc%2FnUVHtSRuzYdaXcJlufC%2FeeZ5JDfK0xsj7ibr221I1ZWUKxDUanAaf79wmC80RrXJaFOyuxkD3HuDt%2BAZwqCBQmv3cXYo22yRTrP9FvPvrHE1book3L2TpOfIg8mEzVAYTCRTFvUn3EnHe1R5aBPs0Z6%2BQwlQEqi2vRhFqOHy0YHFJAqjLefujErmnnERmWlj8pUUisXHJvALk04Ue8p9ecRy77HPtmtO5KhhdoZoB8sCC10laAM8a0mkCm6F7BehHhpyjZdE0VYO8ZtrqNhrfQivVpm3rlA5RM%2Btc%2FJTMyqo1RyFCo5HzmSPAuRzUHCQtCt%2BlsQoxhXl0B8MchDTYaJ5CVCIroHo04G3MYPEFpHdTOMiLO17aLrxIq8jYRybVLy0ZfPsEB0rO10KMHjhkVPGY%2FldK%2Ba86wlfEK7eMFi%2BOlwlwbUXwwWpLjDdnfe%2FBjqkAVyYP%2FeDlli8m9OJPNuoRlTBYbaBmcU2i%2FqbZAz%2BswnAO3vyYltD8krJTKjAGHadUoRKspI%2Bn2LBejwDrs5nnneg3MpRAl4MmmI23rI5nqe1OmWSRGfTd64OBqvDZmCVVkam7z2D96fbivc5XLLFcsZV2atjwsQ8X9PUT9Q%2FTztbAdLikWhd8by3cCw%2BjOYB6c65Y1NRvDR5H1XR78wv26NOjgXQ&X-Amz-Signature=28c08a1de69186bdd3739a6a24d6741379e388dc65e2e113ba8255d915a10a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
