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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=b03656ff5c971a9b954913f3367514bba03f046471064a0c1a67db42895a56c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=98fff57f38d6b0cbc216071c85ea9c97641cafec015e9ecaee5ddf0ad1d84753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=37b58ff88371f5b99601499b0e3e30b769416fb745643fee698a08f8f6226810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=8af1c367ea9233d62389f449d6b96d9df9867f5eb07176965fa91c78bd89bb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=53cd18732213f97d371e76b7786de4b714d0ebc2827ae6f9919177f74b26169e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=26e3d2f3d574bde38089fa9a633d2f241734787bcfee6f1ad187dd7f38cf00e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=9368a4c7709830e92949cc554fb6746c1928c00ddd98670ef96afd7928b2e887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IYZSL4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICzUgP67aOOC512%2BxL%2FmIpKzts7r9zQ2wltnhyLBH683AiEAyWp4cyuyDgeSbQFI%2BTLK81e7AlA9xofNRlA58XDNIDQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDrWS4vT5dvcDVeUbyrcA9kZIuN8uHMlE6xn4dLxZyHPm%2FxDogTLaCJkeHSgL8eCvG%2BJEdjtGBfm6y40qjotAYozt8d4AX8HA2IBQxWMeekUxmqC0MoxnaHgo13ayk7W3Kj3P2f4ucEOQzezzYy9Q8MKMQROGT%2BA8GIvq%2Fn90LML1VsCzS5LN48ELCGxsajdzsf8IATRaPLJ%2Fwm2Lj14DzBwa7dswW7d%2F4AulvY1l5B%2FghBqlnPsfNG0Z1MY3KFP2OuKskUT82PzKKogNVmRSAPBCLH03HsOMfaMMp6zaSEJefzr15SHutRwN5IGGyNo6lKu6Cb66%2BR6cwA3PD0PO9XoQQ6j3z2Ex2FPMIoi9mT5MpRlh9yRtDSDsaDzEyqGrmlGqfIWGgNg33s12JcrSN%2F9%2Bkkuc9UkxdMfU3i8WUSmDV8jqsJFUmNDkSvNzOFCS7%2FxubZjqxV%2B24yyANGOKoT8j1V1yHk7%2FYRZ38BkQSgAiEncJCn0iYuNKKgFHpmeI%2BVSJDGuwEmbsVwtpI0%2FEjFeUC%2FQnaeeHgj5ixM1TNnNsihUIDp9t5DFZRG8Ai%2FjaRPpnPMhGpplg6fD2gEM92MSGja5lsstSRD5zTljSIRPkswQlJ1HuOnTi%2BnpNZgbf5KfN%2FMMapstWeRIMNuvwcIGOqUB%2FDN1UA5DRQr5OIiXK8dCr0kAdOASlGp7PghY7T9DIIxT1GYAx6zNNUFk06dyvRKpguF%2B%2BxG6MnDPz5aVPtphfB5fb6gMiqS1aaV8puNrXgEXums0YgGZzMXUtK4RSfyVzBI9bsztCwwv%2F9jBfz%2Fu1gg3Xy4315QgGvZHY%2FoF1Rdp9%2BS24m87Ch5cMDK7UzNyH%2B0gcppvKxh5JwY1Lt4pq%2BBfw8FM&X-Amz-Signature=a238029fdda4d0f50c97e6c3253e9a226cdc347b102dff369c9f45e532fd1302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
