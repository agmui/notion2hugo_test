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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=571fe7fb4df5c93fb8027e7470f8d0da34e8665799066761cd640bbeb095c1db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=041b04dae4e143af896e729eea300006476c68806dd5d99c04fa70bc7bd79c83&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=777aae4d3310355b558fd6c4b80c357df5da962190050a922baa6f09abd82ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=78cb149d67cf204749575bf0d33fd878d17077f5accfc4b50f737bdca1370cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=21a09658da023a361a2a551d7ef03958dc829bf850f6666d27c10640906e3a19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=d7be41660b38f796154c9f72a7a7821faee5a2bbacc3b799a0e2ad58dc21162f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=662b035ded383b83f2a67dbff8687ed801cbcc907ac331d00adc8afa71bc5748&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXYO4D6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCH1W%2FHGMI23oSoj4Iwpp102UfrzNfeykaVEzhe27Xar0CIQDeWxcxE4MPXwZ%2FseQQteOOBq%2BwXCLL82Xn3fINKkMaoyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRkmXhldqPzsGpFJhKtwDGleKjmxQPoFFhgCS%2FvujgFb5xitnN%2F8f0hUONggX%2BMz9jkR7ItD6SkXfkXY3IEM4R2gjcXV%2Fb8NUljNzQ0iaJMHTTuvbxQ328CHarAy7lyXQGzKByBdAXQLBNmXDa3XnprxkZuXGn1vjVUZsrmJ%2BT%2BeT9FQ%2BaFX2TfgSlcIwnWeBYtO%2F%2BC3i4MqpJFDJe0Su%2BSOQdSWn8CslEgt%2Bkgiq6x9rWrLy2pN2gsx2mR%2FvcfYkJTzJk3Q%2FFjL5jxjAbJjWj2X3lonexA%2BMKRkhgqp3WuRVNnoFUwUlsgHyF53oc0VjzA3Xz9QxdnMm3H62m4%2BlNYKR%2F2i0AbxQWQIOOYHhAKQwSERFnt8Qha8Nol%2FucmDPHiSZ6HnOP2fC8lKcv16Aoi11cCdbO6FAh1mEBr29cLn2c0ZDdc5ADlGdIQqe3WsNGGaNWakB9eEWyOd0ijzATMLVCKTDA%2BsW3KDC%2FnMPIMJQoUHwEBb8uquWtaZ70woea3aU78Rx%2BbwfHi%2FpuGvMlmPjYJ8yILx0IvgD3rEJvzTmIJ%2F3Gyi5FlK0cibCAUo51U097nwjv7sOvSMvDxlFyp%2FrsBL5Q%2FtdKnPWzd1KO0SLx0EfgBiyNtFF5jE%2FrcaB3%2B0ASuHrpmfoNbowoNTnvwY6pgFesETTzJGE3Vh4NoPWMr7zwDbB87rNyCZeyiN8R0XwoUre4SteXC8iVhJ2lcx44V%2F3UZuIEtfejlnsX2uN%2F4rjPmPXvsXfdagJ9CcmdJJJu%2FsOWO4x64UBE1XOrGJESUar6PLNE9CbzHura5GAFpDEYNidbVNZywRHJ6oxEYkidTVVQRT%2BOT4TMbYregpW4M80C6lC0fkk43Z0y%2FoYxlacLEwq%2BwIw&X-Amz-Signature=8d49d4d9d1740fbbbec8a73e5a1e2ab0a715339bc881a86afddc169e8330e15a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
