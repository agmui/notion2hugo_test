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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OANBUUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa2qWwkRIN%2Bb52NATdrZnZGDm0HTHUho%2F1yf2xNc1ygwIge5aGOv9k%2BidkR%2Bfxt3UXrSf8%2BUVX29%2BRtMRVK2OOfwkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqpkcTti%2BydSWM8qyrcA4W5sK2FRfPkugSAn1DzFQ%2F4HeHuXKLSNBHv3lFzR%2FdotTxPoGzkdfzjrNMQTcepLPYVy%2BPY%2BepcL28I9bVnxNIKbblcbx6UacaXYIlvoH6KiYksPnRgkoRgzYwKoZU8bxOERTP6N8d4PjVrMUPHGkXtRZZGCv28SgTo5oc12oRheXMGOmMYNCUtN2tAfjsE1hdOpRERCHrK%2BiusIu3AhQBgMliTB%2Bvm24a7%2BO5SzbjvsvkigmGi1GfxEykd0PhCxGPrBzWFmzRx%2F%2BkCz5t3TdVrgWxv6vDYQdwNg%2BvlEfxJw%2BbEWDmp%2F%2FtJF0%2ByDSOZtMs2ccvBRcdwNbb0JZuhqtuyvika7oB32wY%2BSGnO8k5D%2FZ1DpBR0jEpMdG4PZBHiMJxE1OrM6Uvm%2Fg7zr73hhtkjxmeOWfHF31S7ixFz3JWDD6pHl94q2HXgBf0jXARD66pGGFKR3gaRGtkt8U7jBqMem4Zs0vvzw0oL%2BWcZAx8sBwCemRw0E6i%2FjDaenhVoMcgattdINb0qQt%2B%2Fef8Pd65Ix4pqWph0mB7VoJD%2Fe2Gj7DFzik7BDbpzY%2FEAu9cQMeKAuDSh6f9%2BsIpvpfESaxX7unJxv6JWa6Y1tX2iTKF%2FTl4qvpfQyLDiT73lMNTy5sEGOqUBHCPb1t5RENZ05Zm0c0hNRVEt%2FS3MNmfyco7uxwiRfstSosB3tGGeLpbCl0VXKVknRttr7rO39H6jm9sLXp%2B3g38ATMyzRkA%2BQnrVwip%2FOiGteqaBlWqDEHgTJL9kwrX2W%2F1jA%2Bt%2FgiEVI2M%2F3eCCLEbWhM%2B4qPF6ZxvJwqDcDJBB5Z%2B2RYoV%2F7jN1EOB0rLjDfof4wSG3ts97D%2Fn%2BgBkahAqAcsW&X-Amz-Signature=b69e4552b8623892a86bcbfd6829c9686472eae6517ed3897d2d57e8d69f563c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OANBUUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa2qWwkRIN%2Bb52NATdrZnZGDm0HTHUho%2F1yf2xNc1ygwIge5aGOv9k%2BidkR%2Bfxt3UXrSf8%2BUVX29%2BRtMRVK2OOfwkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqpkcTti%2BydSWM8qyrcA4W5sK2FRfPkugSAn1DzFQ%2F4HeHuXKLSNBHv3lFzR%2FdotTxPoGzkdfzjrNMQTcepLPYVy%2BPY%2BepcL28I9bVnxNIKbblcbx6UacaXYIlvoH6KiYksPnRgkoRgzYwKoZU8bxOERTP6N8d4PjVrMUPHGkXtRZZGCv28SgTo5oc12oRheXMGOmMYNCUtN2tAfjsE1hdOpRERCHrK%2BiusIu3AhQBgMliTB%2Bvm24a7%2BO5SzbjvsvkigmGi1GfxEykd0PhCxGPrBzWFmzRx%2F%2BkCz5t3TdVrgWxv6vDYQdwNg%2BvlEfxJw%2BbEWDmp%2F%2FtJF0%2ByDSOZtMs2ccvBRcdwNbb0JZuhqtuyvika7oB32wY%2BSGnO8k5D%2FZ1DpBR0jEpMdG4PZBHiMJxE1OrM6Uvm%2Fg7zr73hhtkjxmeOWfHF31S7ixFz3JWDD6pHl94q2HXgBf0jXARD66pGGFKR3gaRGtkt8U7jBqMem4Zs0vvzw0oL%2BWcZAx8sBwCemRw0E6i%2FjDaenhVoMcgattdINb0qQt%2B%2Fef8Pd65Ix4pqWph0mB7VoJD%2Fe2Gj7DFzik7BDbpzY%2FEAu9cQMeKAuDSh6f9%2BsIpvpfESaxX7unJxv6JWa6Y1tX2iTKF%2FTl4qvpfQyLDiT73lMNTy5sEGOqUBHCPb1t5RENZ05Zm0c0hNRVEt%2FS3MNmfyco7uxwiRfstSosB3tGGeLpbCl0VXKVknRttr7rO39H6jm9sLXp%2B3g38ATMyzRkA%2BQnrVwip%2FOiGteqaBlWqDEHgTJL9kwrX2W%2F1jA%2Bt%2FgiEVI2M%2F3eCCLEbWhM%2B4qPF6ZxvJwqDcDJBB5Z%2B2RYoV%2F7jN1EOB0rLjDfof4wSG3ts97D%2Fn%2BgBkahAqAcsW&X-Amz-Signature=cfcad9f7a10851f286d73ebc72b399fbd7e65900d3bd8f7a566b26101b91a9b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OANBUUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa2qWwkRIN%2Bb52NATdrZnZGDm0HTHUho%2F1yf2xNc1ygwIge5aGOv9k%2BidkR%2Bfxt3UXrSf8%2BUVX29%2BRtMRVK2OOfwkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqpkcTti%2BydSWM8qyrcA4W5sK2FRfPkugSAn1DzFQ%2F4HeHuXKLSNBHv3lFzR%2FdotTxPoGzkdfzjrNMQTcepLPYVy%2BPY%2BepcL28I9bVnxNIKbblcbx6UacaXYIlvoH6KiYksPnRgkoRgzYwKoZU8bxOERTP6N8d4PjVrMUPHGkXtRZZGCv28SgTo5oc12oRheXMGOmMYNCUtN2tAfjsE1hdOpRERCHrK%2BiusIu3AhQBgMliTB%2Bvm24a7%2BO5SzbjvsvkigmGi1GfxEykd0PhCxGPrBzWFmzRx%2F%2BkCz5t3TdVrgWxv6vDYQdwNg%2BvlEfxJw%2BbEWDmp%2F%2FtJF0%2ByDSOZtMs2ccvBRcdwNbb0JZuhqtuyvika7oB32wY%2BSGnO8k5D%2FZ1DpBR0jEpMdG4PZBHiMJxE1OrM6Uvm%2Fg7zr73hhtkjxmeOWfHF31S7ixFz3JWDD6pHl94q2HXgBf0jXARD66pGGFKR3gaRGtkt8U7jBqMem4Zs0vvzw0oL%2BWcZAx8sBwCemRw0E6i%2FjDaenhVoMcgattdINb0qQt%2B%2Fef8Pd65Ix4pqWph0mB7VoJD%2Fe2Gj7DFzik7BDbpzY%2FEAu9cQMeKAuDSh6f9%2BsIpvpfESaxX7unJxv6JWa6Y1tX2iTKF%2FTl4qvpfQyLDiT73lMNTy5sEGOqUBHCPb1t5RENZ05Zm0c0hNRVEt%2FS3MNmfyco7uxwiRfstSosB3tGGeLpbCl0VXKVknRttr7rO39H6jm9sLXp%2B3g38ATMyzRkA%2BQnrVwip%2FOiGteqaBlWqDEHgTJL9kwrX2W%2F1jA%2Bt%2FgiEVI2M%2F3eCCLEbWhM%2B4qPF6ZxvJwqDcDJBB5Z%2B2RYoV%2F7jN1EOB0rLjDfof4wSG3ts97D%2Fn%2BgBkahAqAcsW&X-Amz-Signature=c423b7749e50ecb6191a53622037b7d8a9336b3fa6a1ecca5adb791dddab2957&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OANBUUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa2qWwkRIN%2Bb52NATdrZnZGDm0HTHUho%2F1yf2xNc1ygwIge5aGOv9k%2BidkR%2Bfxt3UXrSf8%2BUVX29%2BRtMRVK2OOfwkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqpkcTti%2BydSWM8qyrcA4W5sK2FRfPkugSAn1DzFQ%2F4HeHuXKLSNBHv3lFzR%2FdotTxPoGzkdfzjrNMQTcepLPYVy%2BPY%2BepcL28I9bVnxNIKbblcbx6UacaXYIlvoH6KiYksPnRgkoRgzYwKoZU8bxOERTP6N8d4PjVrMUPHGkXtRZZGCv28SgTo5oc12oRheXMGOmMYNCUtN2tAfjsE1hdOpRERCHrK%2BiusIu3AhQBgMliTB%2Bvm24a7%2BO5SzbjvsvkigmGi1GfxEykd0PhCxGPrBzWFmzRx%2F%2BkCz5t3TdVrgWxv6vDYQdwNg%2BvlEfxJw%2BbEWDmp%2F%2FtJF0%2ByDSOZtMs2ccvBRcdwNbb0JZuhqtuyvika7oB32wY%2BSGnO8k5D%2FZ1DpBR0jEpMdG4PZBHiMJxE1OrM6Uvm%2Fg7zr73hhtkjxmeOWfHF31S7ixFz3JWDD6pHl94q2HXgBf0jXARD66pGGFKR3gaRGtkt8U7jBqMem4Zs0vvzw0oL%2BWcZAx8sBwCemRw0E6i%2FjDaenhVoMcgattdINb0qQt%2B%2Fef8Pd65Ix4pqWph0mB7VoJD%2Fe2Gj7DFzik7BDbpzY%2FEAu9cQMeKAuDSh6f9%2BsIpvpfESaxX7unJxv6JWa6Y1tX2iTKF%2FTl4qvpfQyLDiT73lMNTy5sEGOqUBHCPb1t5RENZ05Zm0c0hNRVEt%2FS3MNmfyco7uxwiRfstSosB3tGGeLpbCl0VXKVknRttr7rO39H6jm9sLXp%2B3g38ATMyzRkA%2BQnrVwip%2FOiGteqaBlWqDEHgTJL9kwrX2W%2F1jA%2Bt%2FgiEVI2M%2F3eCCLEbWhM%2B4qPF6ZxvJwqDcDJBB5Z%2B2RYoV%2F7jN1EOB0rLjDfof4wSG3ts97D%2Fn%2BgBkahAqAcsW&X-Amz-Signature=4f94016787bc78091a81cd5a4365af2334a9fc4069a67dc3ffaefcb6c04f9fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OANBUUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa2qWwkRIN%2Bb52NATdrZnZGDm0HTHUho%2F1yf2xNc1ygwIge5aGOv9k%2BidkR%2Bfxt3UXrSf8%2BUVX29%2BRtMRVK2OOfwkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqpkcTti%2BydSWM8qyrcA4W5sK2FRfPkugSAn1DzFQ%2F4HeHuXKLSNBHv3lFzR%2FdotTxPoGzkdfzjrNMQTcepLPYVy%2BPY%2BepcL28I9bVnxNIKbblcbx6UacaXYIlvoH6KiYksPnRgkoRgzYwKoZU8bxOERTP6N8d4PjVrMUPHGkXtRZZGCv28SgTo5oc12oRheXMGOmMYNCUtN2tAfjsE1hdOpRERCHrK%2BiusIu3AhQBgMliTB%2Bvm24a7%2BO5SzbjvsvkigmGi1GfxEykd0PhCxGPrBzWFmzRx%2F%2BkCz5t3TdVrgWxv6vDYQdwNg%2BvlEfxJw%2BbEWDmp%2F%2FtJF0%2ByDSOZtMs2ccvBRcdwNbb0JZuhqtuyvika7oB32wY%2BSGnO8k5D%2FZ1DpBR0jEpMdG4PZBHiMJxE1OrM6Uvm%2Fg7zr73hhtkjxmeOWfHF31S7ixFz3JWDD6pHl94q2HXgBf0jXARD66pGGFKR3gaRGtkt8U7jBqMem4Zs0vvzw0oL%2BWcZAx8sBwCemRw0E6i%2FjDaenhVoMcgattdINb0qQt%2B%2Fef8Pd65Ix4pqWph0mB7VoJD%2Fe2Gj7DFzik7BDbpzY%2FEAu9cQMeKAuDSh6f9%2BsIpvpfESaxX7unJxv6JWa6Y1tX2iTKF%2FTl4qvpfQyLDiT73lMNTy5sEGOqUBHCPb1t5RENZ05Zm0c0hNRVEt%2FS3MNmfyco7uxwiRfstSosB3tGGeLpbCl0VXKVknRttr7rO39H6jm9sLXp%2B3g38ATMyzRkA%2BQnrVwip%2FOiGteqaBlWqDEHgTJL9kwrX2W%2F1jA%2Bt%2FgiEVI2M%2F3eCCLEbWhM%2B4qPF6ZxvJwqDcDJBB5Z%2B2RYoV%2F7jN1EOB0rLjDfof4wSG3ts97D%2Fn%2BgBkahAqAcsW&X-Amz-Signature=9123e79e3f25784183b7385e043a2820f94b9946abdeaf399ec8a6fd95a5b722&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OANBUUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa2qWwkRIN%2Bb52NATdrZnZGDm0HTHUho%2F1yf2xNc1ygwIge5aGOv9k%2BidkR%2Bfxt3UXrSf8%2BUVX29%2BRtMRVK2OOfwkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqpkcTti%2BydSWM8qyrcA4W5sK2FRfPkugSAn1DzFQ%2F4HeHuXKLSNBHv3lFzR%2FdotTxPoGzkdfzjrNMQTcepLPYVy%2BPY%2BepcL28I9bVnxNIKbblcbx6UacaXYIlvoH6KiYksPnRgkoRgzYwKoZU8bxOERTP6N8d4PjVrMUPHGkXtRZZGCv28SgTo5oc12oRheXMGOmMYNCUtN2tAfjsE1hdOpRERCHrK%2BiusIu3AhQBgMliTB%2Bvm24a7%2BO5SzbjvsvkigmGi1GfxEykd0PhCxGPrBzWFmzRx%2F%2BkCz5t3TdVrgWxv6vDYQdwNg%2BvlEfxJw%2BbEWDmp%2F%2FtJF0%2ByDSOZtMs2ccvBRcdwNbb0JZuhqtuyvika7oB32wY%2BSGnO8k5D%2FZ1DpBR0jEpMdG4PZBHiMJxE1OrM6Uvm%2Fg7zr73hhtkjxmeOWfHF31S7ixFz3JWDD6pHl94q2HXgBf0jXARD66pGGFKR3gaRGtkt8U7jBqMem4Zs0vvzw0oL%2BWcZAx8sBwCemRw0E6i%2FjDaenhVoMcgattdINb0qQt%2B%2Fef8Pd65Ix4pqWph0mB7VoJD%2Fe2Gj7DFzik7BDbpzY%2FEAu9cQMeKAuDSh6f9%2BsIpvpfESaxX7unJxv6JWa6Y1tX2iTKF%2FTl4qvpfQyLDiT73lMNTy5sEGOqUBHCPb1t5RENZ05Zm0c0hNRVEt%2FS3MNmfyco7uxwiRfstSosB3tGGeLpbCl0VXKVknRttr7rO39H6jm9sLXp%2B3g38ATMyzRkA%2BQnrVwip%2FOiGteqaBlWqDEHgTJL9kwrX2W%2F1jA%2Bt%2FgiEVI2M%2F3eCCLEbWhM%2B4qPF6ZxvJwqDcDJBB5Z%2B2RYoV%2F7jN1EOB0rLjDfof4wSG3ts97D%2Fn%2BgBkahAqAcsW&X-Amz-Signature=8cf43829e43b051da3621dbe34826b033acb64decb71e2d69cc181fe244bb253&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OANBUUK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa2qWwkRIN%2Bb52NATdrZnZGDm0HTHUho%2F1yf2xNc1ygwIge5aGOv9k%2BidkR%2Bfxt3UXrSf8%2BUVX29%2BRtMRVK2OOfwkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqpkcTti%2BydSWM8qyrcA4W5sK2FRfPkugSAn1DzFQ%2F4HeHuXKLSNBHv3lFzR%2FdotTxPoGzkdfzjrNMQTcepLPYVy%2BPY%2BepcL28I9bVnxNIKbblcbx6UacaXYIlvoH6KiYksPnRgkoRgzYwKoZU8bxOERTP6N8d4PjVrMUPHGkXtRZZGCv28SgTo5oc12oRheXMGOmMYNCUtN2tAfjsE1hdOpRERCHrK%2BiusIu3AhQBgMliTB%2Bvm24a7%2BO5SzbjvsvkigmGi1GfxEykd0PhCxGPrBzWFmzRx%2F%2BkCz5t3TdVrgWxv6vDYQdwNg%2BvlEfxJw%2BbEWDmp%2F%2FtJF0%2ByDSOZtMs2ccvBRcdwNbb0JZuhqtuyvika7oB32wY%2BSGnO8k5D%2FZ1DpBR0jEpMdG4PZBHiMJxE1OrM6Uvm%2Fg7zr73hhtkjxmeOWfHF31S7ixFz3JWDD6pHl94q2HXgBf0jXARD66pGGFKR3gaRGtkt8U7jBqMem4Zs0vvzw0oL%2BWcZAx8sBwCemRw0E6i%2FjDaenhVoMcgattdINb0qQt%2B%2Fef8Pd65Ix4pqWph0mB7VoJD%2Fe2Gj7DFzik7BDbpzY%2FEAu9cQMeKAuDSh6f9%2BsIpvpfESaxX7unJxv6JWa6Y1tX2iTKF%2FTl4qvpfQyLDiT73lMNTy5sEGOqUBHCPb1t5RENZ05Zm0c0hNRVEt%2FS3MNmfyco7uxwiRfstSosB3tGGeLpbCl0VXKVknRttr7rO39H6jm9sLXp%2B3g38ATMyzRkA%2BQnrVwip%2FOiGteqaBlWqDEHgTJL9kwrX2W%2F1jA%2Bt%2FgiEVI2M%2F3eCCLEbWhM%2B4qPF6ZxvJwqDcDJBB5Z%2B2RYoV%2F7jN1EOB0rLjDfof4wSG3ts97D%2Fn%2BgBkahAqAcsW&X-Amz-Signature=013268e48a6cfc55085cc46cc2992fc27c983ed8a379fc2f29298f2029b2dc89&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
