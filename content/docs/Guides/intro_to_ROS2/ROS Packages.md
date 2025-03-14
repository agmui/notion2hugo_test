---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZRRT7I%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8bCoXjw69LVDSLc3%2FKhlqSwqPBNHys6KnrKNr%2FQ9SbAiEA2ehUnnHYSSRUsnrQotziEWiuMpBtpxH3yISCfJ%2F0S3IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW8A4H2zmNBwt1HIyrcA0qoSrk9ybS%2BDcHfebOGJ4FoBfh%2FoH6gGAbwOAnp7o7CvD1YIGHBDSLH1CRsnzPNQHjGwPJ%2FRc0O%2BXgulKFXw8U4GJICZ%2BP5US6qBb3V2w9hkw5Goqn7BRPl5NACzseneZirre%2FCnd%2FFGABzEuruKFLTTBqmxX4gEiRttYeNrSKRxGAHTeQLfWsM7xmqeyViDxu5BNlWlLUltt%2BAa1O5raIuLYKuGbIPo8Vdl328eRQuHR88zSiYy%2F7Ta5lbOqOZZcSdaKIGBh%2BQP9%2F0QxZzeW3amQkd5IF0VK9X6LxIy1%2FLW30sj0vyQuFolMLYcPenbQTycQ3TXCvhMauOPwVlGFAqLUxboAA%2Fs3EngbRF%2B%2FuAKJbZfdULR7OOBrKmvJfay22ElMchvRd66Uj9pCJlcZHUQT5H01ktOduDGqvzp7g22bLVJjA79u2UaAzuVnJpD686JVt5u836%2Ff2LwPOlNmkfpyqyAi35wfIh8CF5tQ2QL5gNoNHNAMN9hOJQNkMiDKnP8kQTs20pg2Gu7E5%2F03ZFJgXcwr0H%2BhA1V7ZVPQ9NTjN75eh3HDb%2FerzYGGuMpC0J9CF2WsZO93%2BoYBEIK0rANnxvU9taH5Gnwg6yortMCWfjuUUupF1Z1TFRMPiG0L4GOqUBrDcMZVUZOzlCK3cD4xyRnlZ585YkGrBnEsH1BeJzcloLEchLjNywtqXPrdMlHaaj1FrUUfdh9L5KtnT3AfYgOSP8CBzrXpgOV1nj5MyGQbY2TSXbZv09NgNSiYwyy8T6s27U%2Fwk%2BGFWiI5acfmxASD23AWcd1oN2cyJxxi2H1CV0lfqdfhaA2GyWDjD%2FMmPbEaDQODO9DN4XiiGbT4BNme9YSiwD&X-Amz-Signature=2c59811d1d1678563778315053bb70e6afa14b75ddd5b5b3916bc432dd34c4df&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZRRT7I%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8bCoXjw69LVDSLc3%2FKhlqSwqPBNHys6KnrKNr%2FQ9SbAiEA2ehUnnHYSSRUsnrQotziEWiuMpBtpxH3yISCfJ%2F0S3IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW8A4H2zmNBwt1HIyrcA0qoSrk9ybS%2BDcHfebOGJ4FoBfh%2FoH6gGAbwOAnp7o7CvD1YIGHBDSLH1CRsnzPNQHjGwPJ%2FRc0O%2BXgulKFXw8U4GJICZ%2BP5US6qBb3V2w9hkw5Goqn7BRPl5NACzseneZirre%2FCnd%2FFGABzEuruKFLTTBqmxX4gEiRttYeNrSKRxGAHTeQLfWsM7xmqeyViDxu5BNlWlLUltt%2BAa1O5raIuLYKuGbIPo8Vdl328eRQuHR88zSiYy%2F7Ta5lbOqOZZcSdaKIGBh%2BQP9%2F0QxZzeW3amQkd5IF0VK9X6LxIy1%2FLW30sj0vyQuFolMLYcPenbQTycQ3TXCvhMauOPwVlGFAqLUxboAA%2Fs3EngbRF%2B%2FuAKJbZfdULR7OOBrKmvJfay22ElMchvRd66Uj9pCJlcZHUQT5H01ktOduDGqvzp7g22bLVJjA79u2UaAzuVnJpD686JVt5u836%2Ff2LwPOlNmkfpyqyAi35wfIh8CF5tQ2QL5gNoNHNAMN9hOJQNkMiDKnP8kQTs20pg2Gu7E5%2F03ZFJgXcwr0H%2BhA1V7ZVPQ9NTjN75eh3HDb%2FerzYGGuMpC0J9CF2WsZO93%2BoYBEIK0rANnxvU9taH5Gnwg6yortMCWfjuUUupF1Z1TFRMPiG0L4GOqUBrDcMZVUZOzlCK3cD4xyRnlZ585YkGrBnEsH1BeJzcloLEchLjNywtqXPrdMlHaaj1FrUUfdh9L5KtnT3AfYgOSP8CBzrXpgOV1nj5MyGQbY2TSXbZv09NgNSiYwyy8T6s27U%2Fwk%2BGFWiI5acfmxASD23AWcd1oN2cyJxxi2H1CV0lfqdfhaA2GyWDjD%2FMmPbEaDQODO9DN4XiiGbT4BNme9YSiwD&X-Amz-Signature=d48acd9b50df40dddac03ff04dc7648cd91d1c683c95388c423ec63b4b95f58b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZRRT7I%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8bCoXjw69LVDSLc3%2FKhlqSwqPBNHys6KnrKNr%2FQ9SbAiEA2ehUnnHYSSRUsnrQotziEWiuMpBtpxH3yISCfJ%2F0S3IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW8A4H2zmNBwt1HIyrcA0qoSrk9ybS%2BDcHfebOGJ4FoBfh%2FoH6gGAbwOAnp7o7CvD1YIGHBDSLH1CRsnzPNQHjGwPJ%2FRc0O%2BXgulKFXw8U4GJICZ%2BP5US6qBb3V2w9hkw5Goqn7BRPl5NACzseneZirre%2FCnd%2FFGABzEuruKFLTTBqmxX4gEiRttYeNrSKRxGAHTeQLfWsM7xmqeyViDxu5BNlWlLUltt%2BAa1O5raIuLYKuGbIPo8Vdl328eRQuHR88zSiYy%2F7Ta5lbOqOZZcSdaKIGBh%2BQP9%2F0QxZzeW3amQkd5IF0VK9X6LxIy1%2FLW30sj0vyQuFolMLYcPenbQTycQ3TXCvhMauOPwVlGFAqLUxboAA%2Fs3EngbRF%2B%2FuAKJbZfdULR7OOBrKmvJfay22ElMchvRd66Uj9pCJlcZHUQT5H01ktOduDGqvzp7g22bLVJjA79u2UaAzuVnJpD686JVt5u836%2Ff2LwPOlNmkfpyqyAi35wfIh8CF5tQ2QL5gNoNHNAMN9hOJQNkMiDKnP8kQTs20pg2Gu7E5%2F03ZFJgXcwr0H%2BhA1V7ZVPQ9NTjN75eh3HDb%2FerzYGGuMpC0J9CF2WsZO93%2BoYBEIK0rANnxvU9taH5Gnwg6yortMCWfjuUUupF1Z1TFRMPiG0L4GOqUBrDcMZVUZOzlCK3cD4xyRnlZ585YkGrBnEsH1BeJzcloLEchLjNywtqXPrdMlHaaj1FrUUfdh9L5KtnT3AfYgOSP8CBzrXpgOV1nj5MyGQbY2TSXbZv09NgNSiYwyy8T6s27U%2Fwk%2BGFWiI5acfmxASD23AWcd1oN2cyJxxi2H1CV0lfqdfhaA2GyWDjD%2FMmPbEaDQODO9DN4XiiGbT4BNme9YSiwD&X-Amz-Signature=28ad3d89206ee3bd965290bb56a688f46d08eed5d78c4ff9918abf377bfcc2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZRRT7I%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8bCoXjw69LVDSLc3%2FKhlqSwqPBNHys6KnrKNr%2FQ9SbAiEA2ehUnnHYSSRUsnrQotziEWiuMpBtpxH3yISCfJ%2F0S3IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW8A4H2zmNBwt1HIyrcA0qoSrk9ybS%2BDcHfebOGJ4FoBfh%2FoH6gGAbwOAnp7o7CvD1YIGHBDSLH1CRsnzPNQHjGwPJ%2FRc0O%2BXgulKFXw8U4GJICZ%2BP5US6qBb3V2w9hkw5Goqn7BRPl5NACzseneZirre%2FCnd%2FFGABzEuruKFLTTBqmxX4gEiRttYeNrSKRxGAHTeQLfWsM7xmqeyViDxu5BNlWlLUltt%2BAa1O5raIuLYKuGbIPo8Vdl328eRQuHR88zSiYy%2F7Ta5lbOqOZZcSdaKIGBh%2BQP9%2F0QxZzeW3amQkd5IF0VK9X6LxIy1%2FLW30sj0vyQuFolMLYcPenbQTycQ3TXCvhMauOPwVlGFAqLUxboAA%2Fs3EngbRF%2B%2FuAKJbZfdULR7OOBrKmvJfay22ElMchvRd66Uj9pCJlcZHUQT5H01ktOduDGqvzp7g22bLVJjA79u2UaAzuVnJpD686JVt5u836%2Ff2LwPOlNmkfpyqyAi35wfIh8CF5tQ2QL5gNoNHNAMN9hOJQNkMiDKnP8kQTs20pg2Gu7E5%2F03ZFJgXcwr0H%2BhA1V7ZVPQ9NTjN75eh3HDb%2FerzYGGuMpC0J9CF2WsZO93%2BoYBEIK0rANnxvU9taH5Gnwg6yortMCWfjuUUupF1Z1TFRMPiG0L4GOqUBrDcMZVUZOzlCK3cD4xyRnlZ585YkGrBnEsH1BeJzcloLEchLjNywtqXPrdMlHaaj1FrUUfdh9L5KtnT3AfYgOSP8CBzrXpgOV1nj5MyGQbY2TSXbZv09NgNSiYwyy8T6s27U%2Fwk%2BGFWiI5acfmxASD23AWcd1oN2cyJxxi2H1CV0lfqdfhaA2GyWDjD%2FMmPbEaDQODO9DN4XiiGbT4BNme9YSiwD&X-Amz-Signature=1753097b26bf84c7b8e1f95f412a039e8b0b58f8a0d3be91a4b31e1e588891a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZRRT7I%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8bCoXjw69LVDSLc3%2FKhlqSwqPBNHys6KnrKNr%2FQ9SbAiEA2ehUnnHYSSRUsnrQotziEWiuMpBtpxH3yISCfJ%2F0S3IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW8A4H2zmNBwt1HIyrcA0qoSrk9ybS%2BDcHfebOGJ4FoBfh%2FoH6gGAbwOAnp7o7CvD1YIGHBDSLH1CRsnzPNQHjGwPJ%2FRc0O%2BXgulKFXw8U4GJICZ%2BP5US6qBb3V2w9hkw5Goqn7BRPl5NACzseneZirre%2FCnd%2FFGABzEuruKFLTTBqmxX4gEiRttYeNrSKRxGAHTeQLfWsM7xmqeyViDxu5BNlWlLUltt%2BAa1O5raIuLYKuGbIPo8Vdl328eRQuHR88zSiYy%2F7Ta5lbOqOZZcSdaKIGBh%2BQP9%2F0QxZzeW3amQkd5IF0VK9X6LxIy1%2FLW30sj0vyQuFolMLYcPenbQTycQ3TXCvhMauOPwVlGFAqLUxboAA%2Fs3EngbRF%2B%2FuAKJbZfdULR7OOBrKmvJfay22ElMchvRd66Uj9pCJlcZHUQT5H01ktOduDGqvzp7g22bLVJjA79u2UaAzuVnJpD686JVt5u836%2Ff2LwPOlNmkfpyqyAi35wfIh8CF5tQ2QL5gNoNHNAMN9hOJQNkMiDKnP8kQTs20pg2Gu7E5%2F03ZFJgXcwr0H%2BhA1V7ZVPQ9NTjN75eh3HDb%2FerzYGGuMpC0J9CF2WsZO93%2BoYBEIK0rANnxvU9taH5Gnwg6yortMCWfjuUUupF1Z1TFRMPiG0L4GOqUBrDcMZVUZOzlCK3cD4xyRnlZ585YkGrBnEsH1BeJzcloLEchLjNywtqXPrdMlHaaj1FrUUfdh9L5KtnT3AfYgOSP8CBzrXpgOV1nj5MyGQbY2TSXbZv09NgNSiYwyy8T6s27U%2Fwk%2BGFWiI5acfmxASD23AWcd1oN2cyJxxi2H1CV0lfqdfhaA2GyWDjD%2FMmPbEaDQODO9DN4XiiGbT4BNme9YSiwD&X-Amz-Signature=74bff5fb0f678b4f3b20519cabe6cd3f6037bf204ae6c747c0dbbdbcbfa77fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZRRT7I%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8bCoXjw69LVDSLc3%2FKhlqSwqPBNHys6KnrKNr%2FQ9SbAiEA2ehUnnHYSSRUsnrQotziEWiuMpBtpxH3yISCfJ%2F0S3IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW8A4H2zmNBwt1HIyrcA0qoSrk9ybS%2BDcHfebOGJ4FoBfh%2FoH6gGAbwOAnp7o7CvD1YIGHBDSLH1CRsnzPNQHjGwPJ%2FRc0O%2BXgulKFXw8U4GJICZ%2BP5US6qBb3V2w9hkw5Goqn7BRPl5NACzseneZirre%2FCnd%2FFGABzEuruKFLTTBqmxX4gEiRttYeNrSKRxGAHTeQLfWsM7xmqeyViDxu5BNlWlLUltt%2BAa1O5raIuLYKuGbIPo8Vdl328eRQuHR88zSiYy%2F7Ta5lbOqOZZcSdaKIGBh%2BQP9%2F0QxZzeW3amQkd5IF0VK9X6LxIy1%2FLW30sj0vyQuFolMLYcPenbQTycQ3TXCvhMauOPwVlGFAqLUxboAA%2Fs3EngbRF%2B%2FuAKJbZfdULR7OOBrKmvJfay22ElMchvRd66Uj9pCJlcZHUQT5H01ktOduDGqvzp7g22bLVJjA79u2UaAzuVnJpD686JVt5u836%2Ff2LwPOlNmkfpyqyAi35wfIh8CF5tQ2QL5gNoNHNAMN9hOJQNkMiDKnP8kQTs20pg2Gu7E5%2F03ZFJgXcwr0H%2BhA1V7ZVPQ9NTjN75eh3HDb%2FerzYGGuMpC0J9CF2WsZO93%2BoYBEIK0rANnxvU9taH5Gnwg6yortMCWfjuUUupF1Z1TFRMPiG0L4GOqUBrDcMZVUZOzlCK3cD4xyRnlZ585YkGrBnEsH1BeJzcloLEchLjNywtqXPrdMlHaaj1FrUUfdh9L5KtnT3AfYgOSP8CBzrXpgOV1nj5MyGQbY2TSXbZv09NgNSiYwyy8T6s27U%2Fwk%2BGFWiI5acfmxASD23AWcd1oN2cyJxxi2H1CV0lfqdfhaA2GyWDjD%2FMmPbEaDQODO9DN4XiiGbT4BNme9YSiwD&X-Amz-Signature=4fa09cd97d747faab3e826f84cb63f972b74bbdf9ff586ec414220952dfb91e7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZRRT7I%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8bCoXjw69LVDSLc3%2FKhlqSwqPBNHys6KnrKNr%2FQ9SbAiEA2ehUnnHYSSRUsnrQotziEWiuMpBtpxH3yISCfJ%2F0S3IqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW8A4H2zmNBwt1HIyrcA0qoSrk9ybS%2BDcHfebOGJ4FoBfh%2FoH6gGAbwOAnp7o7CvD1YIGHBDSLH1CRsnzPNQHjGwPJ%2FRc0O%2BXgulKFXw8U4GJICZ%2BP5US6qBb3V2w9hkw5Goqn7BRPl5NACzseneZirre%2FCnd%2FFGABzEuruKFLTTBqmxX4gEiRttYeNrSKRxGAHTeQLfWsM7xmqeyViDxu5BNlWlLUltt%2BAa1O5raIuLYKuGbIPo8Vdl328eRQuHR88zSiYy%2F7Ta5lbOqOZZcSdaKIGBh%2BQP9%2F0QxZzeW3amQkd5IF0VK9X6LxIy1%2FLW30sj0vyQuFolMLYcPenbQTycQ3TXCvhMauOPwVlGFAqLUxboAA%2Fs3EngbRF%2B%2FuAKJbZfdULR7OOBrKmvJfay22ElMchvRd66Uj9pCJlcZHUQT5H01ktOduDGqvzp7g22bLVJjA79u2UaAzuVnJpD686JVt5u836%2Ff2LwPOlNmkfpyqyAi35wfIh8CF5tQ2QL5gNoNHNAMN9hOJQNkMiDKnP8kQTs20pg2Gu7E5%2F03ZFJgXcwr0H%2BhA1V7ZVPQ9NTjN75eh3HDb%2FerzYGGuMpC0J9CF2WsZO93%2BoYBEIK0rANnxvU9taH5Gnwg6yortMCWfjuUUupF1Z1TFRMPiG0L4GOqUBrDcMZVUZOzlCK3cD4xyRnlZ585YkGrBnEsH1BeJzcloLEchLjNywtqXPrdMlHaaj1FrUUfdh9L5KtnT3AfYgOSP8CBzrXpgOV1nj5MyGQbY2TSXbZv09NgNSiYwyy8T6s27U%2Fwk%2BGFWiI5acfmxASD23AWcd1oN2cyJxxi2H1CV0lfqdfhaA2GyWDjD%2FMmPbEaDQODO9DN4XiiGbT4BNme9YSiwD&X-Amz-Signature=009d2fd14f33ace7d9a659b9d858f2379082f724bafd525566de609e4a49405e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
