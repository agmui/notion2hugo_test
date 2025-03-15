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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=7c2c20861919716c11bae9d1ebb738cf1e9cb2425b6776300120ea9f7eeb476e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=d857dd11e28cc3dd8bb186310495353bfab6ded716086d2205ecf6d05d32d010&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=75953b9647ff6498bfab913bffa45f75cf7b81cf3878bfdbad0bb71749031982&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=444e176e744969e6c87b5bfc8a3d2c0095c5632de2a2044aa85b35ff268b8382&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=4dea499082342a646aa4c3b40d2f729e977e92f71db9ce1fc8e21090d5601714&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=7ee04a0de5ce5557fb03be3c730b2023a5215d2028a20703c63dd9af0c27d673&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=6d02948581ae0beb6b9b8b14a1922932537efed227b1f6ca7496e466b64bae5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQ4SR6H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WwyfogIJ6ZgcCd7dsttF1CzFADmcBCVP23aOVoVn2gIgfZfprEcajubSMVbb%2B4UzKT93dYOzPdu5HxMata5oLiMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDP3eh7%2BVCH16TVIncyrcA8JUhD4IBrXWSyzfDvFyoUVS0nRzuohqf%2BCCG1YO7GfUpwcGIWJksVDrb5FjhcNtcjw5OU27%2FVNGQblCIrG%2B1T9gfoBwo%2BDGyejeK%2BkdylvO8hYTCha%2BLHqt6y8utnspWsn7dgOoYrRlCnp%2BrsY%2FcfZYDIxWLCWiL8S3hcSqbyK7zAJWtKG3yUAG5yYkgQiE%2FWsdwTf9%2B25EQMLTkB%2FHdlGUzOSwQ0gc6ERxqFkJiS25HpbJw8w37g8z5sW4w%2B%2BY%2BaZ8Ofy%2Bzj2y%2Fb%2BypmRB7YLhWJQtIP4FMMIOGy1eXnsxu%2Frv%2FUhKaHCQPR0ucDVoA02qyw9fDxFm7GNnsjACp%2FzTkSYjekdn%2BLCPjUD4uHH2tOx7OWvoceu1r514OPucoD8b3dWiocE9WqFScTn7qpNvSFV04aEKhjOIw%2BOqiLgIIiv59BwLlWM5uB3527obgmS4mdRX6HB5JJSznmnT%2BBz6crMHm9RkW9TvWkYbASWAnjiMUzpQ53mxZZIa2A7DK%2FNZ5n%2BJkfV8nHJw9TV6KaTOiu1fSc%2FY1XfKkGmaoVFgm3anK4Nv4XLYdkejGTPIoI9x4OxEjw5LixgCWigufboQzRTxhoJx8rfYFYQS4zPU1ZKfCpQJpD67ceUiMIef1b4GOqUBG7Tp79%2FJkiVE%2FqmofWF7C7xu7HVYFIEFr3o1h%2F8PvEBU%2B%2BvzHN26KHKN5IF0R8IeTbibsh%2FDGtFTIojqikA5wbP%2FUKNt1zuQYHqels3QYBDtv1gpauapIhK4cfH8hn%2BePlKWVgaKN%2FIcVjXUgN1e%2FcLceEU9MfSMUzdvWRq9UtYP8adGPMY0w%2FYh%2F7Rr7HpvnDuk2%2Fl%2FXLk%2FCUKcgH54HRob%2FrbP&X-Amz-Signature=6991dee51d9d7b0f7eb5a8f7634cbb7c09a0e88120e570142de0ed751e1d2c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
