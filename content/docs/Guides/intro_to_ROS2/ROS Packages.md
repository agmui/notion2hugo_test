---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHYHA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgIrWxE%2FeSiUSLKCeevZtnIuBb%2BCMTdm5tykqB6kqmYAiA17VwbQGBCBXudei%2FjXiFQex8SsLCN9th3msdMSRbN7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnkuJEvFlvBWbh3zKtwDopZGa50bMJ4EYxQx6xLlaKqFxRxx4wYmnT%2Buyoaxpl6GMPc14TSPH%2BnARffdHkn6hvKd6GZxkN6WPMpFzbvdObZJ2h3No5OGaLs7OYgsDEpX804NeHST8m7Rr%2BwwV8OvR16b2rzjO5gMgKLWFptilWaWTGqXdWSD4coYFajJiU35b556aD5ne7kJ6qCi5JJTi3VN7QG4QeD3xUPE4WPaoQcxC6l39Ge74maPwSKfWmwTnia177XzsGN17yxOInoFavA6ifvC4Ck%2BWk4P5tay7kj51KgMsNeEwW9YGs6gKkw5jfpc%2FekdSG6ZT1AVKubS5LHlMSFOEuPtgT66zEzdHn5Nh6jDhe7NKZ99ARv3Df44CUGIohPKS3%2F1372hsv9n0E1UuKYE9gIWLHyUBqFCwe8Iw6dkmqEB%2FJGYMpUiS7dOr6x8v0dh6gjcTdVdF8H4ZP5YeiA57weuDcpocaoiZG3buKsKddlo8tldwEFZat8g4GPoJsxop%2Fgs7ZEvVznsi683r%2F37kEYB1c9Dli6P4evb%2F%2Fg4tmr3t9ep0p8LGIFcM%2FHsAoNPfjz3FM1Y48XpIjKHsSOaD6RcEAsmU0YGLur4enI0lAlGqzk8wVOFL2xrnY0nMRiv20PNW%2FcwwNWzxAY6pgFiBM82JTF4lNawTUGT85hSipBGkcah2qgtjUFB9LNl6DAmyz%2FSIiiz7A%2FrJPqUirE%2B8L%2BwzCPZJI5sKZGvx6G25hqddoAi%2FCYdbSRwjftxWZsJMOuoUcvws2yYAFrNQV9kMFEpejzXA2G4MutUYra5%2B8L7sUo8xmPWehzRmkf1F0wxSBB3wyPWmI%2BBsjY8rFhirSNpqXNgbGyjtZiMIGXlOBUn8%2B7x&X-Amz-Signature=31739f653ff64716063131170384204a6b21aa564a0af9f83c91b2e29ad30902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHYHA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgIrWxE%2FeSiUSLKCeevZtnIuBb%2BCMTdm5tykqB6kqmYAiA17VwbQGBCBXudei%2FjXiFQex8SsLCN9th3msdMSRbN7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnkuJEvFlvBWbh3zKtwDopZGa50bMJ4EYxQx6xLlaKqFxRxx4wYmnT%2Buyoaxpl6GMPc14TSPH%2BnARffdHkn6hvKd6GZxkN6WPMpFzbvdObZJ2h3No5OGaLs7OYgsDEpX804NeHST8m7Rr%2BwwV8OvR16b2rzjO5gMgKLWFptilWaWTGqXdWSD4coYFajJiU35b556aD5ne7kJ6qCi5JJTi3VN7QG4QeD3xUPE4WPaoQcxC6l39Ge74maPwSKfWmwTnia177XzsGN17yxOInoFavA6ifvC4Ck%2BWk4P5tay7kj51KgMsNeEwW9YGs6gKkw5jfpc%2FekdSG6ZT1AVKubS5LHlMSFOEuPtgT66zEzdHn5Nh6jDhe7NKZ99ARv3Df44CUGIohPKS3%2F1372hsv9n0E1UuKYE9gIWLHyUBqFCwe8Iw6dkmqEB%2FJGYMpUiS7dOr6x8v0dh6gjcTdVdF8H4ZP5YeiA57weuDcpocaoiZG3buKsKddlo8tldwEFZat8g4GPoJsxop%2Fgs7ZEvVznsi683r%2F37kEYB1c9Dli6P4evb%2F%2Fg4tmr3t9ep0p8LGIFcM%2FHsAoNPfjz3FM1Y48XpIjKHsSOaD6RcEAsmU0YGLur4enI0lAlGqzk8wVOFL2xrnY0nMRiv20PNW%2FcwwNWzxAY6pgFiBM82JTF4lNawTUGT85hSipBGkcah2qgtjUFB9LNl6DAmyz%2FSIiiz7A%2FrJPqUirE%2B8L%2BwzCPZJI5sKZGvx6G25hqddoAi%2FCYdbSRwjftxWZsJMOuoUcvws2yYAFrNQV9kMFEpejzXA2G4MutUYra5%2B8L7sUo8xmPWehzRmkf1F0wxSBB3wyPWmI%2BBsjY8rFhirSNpqXNgbGyjtZiMIGXlOBUn8%2B7x&X-Amz-Signature=8148339169a1d619a54adf1b18882764a33e421383c9ab05d597c12431bf2ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHYHA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgIrWxE%2FeSiUSLKCeevZtnIuBb%2BCMTdm5tykqB6kqmYAiA17VwbQGBCBXudei%2FjXiFQex8SsLCN9th3msdMSRbN7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnkuJEvFlvBWbh3zKtwDopZGa50bMJ4EYxQx6xLlaKqFxRxx4wYmnT%2Buyoaxpl6GMPc14TSPH%2BnARffdHkn6hvKd6GZxkN6WPMpFzbvdObZJ2h3No5OGaLs7OYgsDEpX804NeHST8m7Rr%2BwwV8OvR16b2rzjO5gMgKLWFptilWaWTGqXdWSD4coYFajJiU35b556aD5ne7kJ6qCi5JJTi3VN7QG4QeD3xUPE4WPaoQcxC6l39Ge74maPwSKfWmwTnia177XzsGN17yxOInoFavA6ifvC4Ck%2BWk4P5tay7kj51KgMsNeEwW9YGs6gKkw5jfpc%2FekdSG6ZT1AVKubS5LHlMSFOEuPtgT66zEzdHn5Nh6jDhe7NKZ99ARv3Df44CUGIohPKS3%2F1372hsv9n0E1UuKYE9gIWLHyUBqFCwe8Iw6dkmqEB%2FJGYMpUiS7dOr6x8v0dh6gjcTdVdF8H4ZP5YeiA57weuDcpocaoiZG3buKsKddlo8tldwEFZat8g4GPoJsxop%2Fgs7ZEvVznsi683r%2F37kEYB1c9Dli6P4evb%2F%2Fg4tmr3t9ep0p8LGIFcM%2FHsAoNPfjz3FM1Y48XpIjKHsSOaD6RcEAsmU0YGLur4enI0lAlGqzk8wVOFL2xrnY0nMRiv20PNW%2FcwwNWzxAY6pgFiBM82JTF4lNawTUGT85hSipBGkcah2qgtjUFB9LNl6DAmyz%2FSIiiz7A%2FrJPqUirE%2B8L%2BwzCPZJI5sKZGvx6G25hqddoAi%2FCYdbSRwjftxWZsJMOuoUcvws2yYAFrNQV9kMFEpejzXA2G4MutUYra5%2B8L7sUo8xmPWehzRmkf1F0wxSBB3wyPWmI%2BBsjY8rFhirSNpqXNgbGyjtZiMIGXlOBUn8%2B7x&X-Amz-Signature=dda02f5bc90442fdcf2463534e23cf4558edd641533d1becc27b45d861edf5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHYHA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgIrWxE%2FeSiUSLKCeevZtnIuBb%2BCMTdm5tykqB6kqmYAiA17VwbQGBCBXudei%2FjXiFQex8SsLCN9th3msdMSRbN7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnkuJEvFlvBWbh3zKtwDopZGa50bMJ4EYxQx6xLlaKqFxRxx4wYmnT%2Buyoaxpl6GMPc14TSPH%2BnARffdHkn6hvKd6GZxkN6WPMpFzbvdObZJ2h3No5OGaLs7OYgsDEpX804NeHST8m7Rr%2BwwV8OvR16b2rzjO5gMgKLWFptilWaWTGqXdWSD4coYFajJiU35b556aD5ne7kJ6qCi5JJTi3VN7QG4QeD3xUPE4WPaoQcxC6l39Ge74maPwSKfWmwTnia177XzsGN17yxOInoFavA6ifvC4Ck%2BWk4P5tay7kj51KgMsNeEwW9YGs6gKkw5jfpc%2FekdSG6ZT1AVKubS5LHlMSFOEuPtgT66zEzdHn5Nh6jDhe7NKZ99ARv3Df44CUGIohPKS3%2F1372hsv9n0E1UuKYE9gIWLHyUBqFCwe8Iw6dkmqEB%2FJGYMpUiS7dOr6x8v0dh6gjcTdVdF8H4ZP5YeiA57weuDcpocaoiZG3buKsKddlo8tldwEFZat8g4GPoJsxop%2Fgs7ZEvVznsi683r%2F37kEYB1c9Dli6P4evb%2F%2Fg4tmr3t9ep0p8LGIFcM%2FHsAoNPfjz3FM1Y48XpIjKHsSOaD6RcEAsmU0YGLur4enI0lAlGqzk8wVOFL2xrnY0nMRiv20PNW%2FcwwNWzxAY6pgFiBM82JTF4lNawTUGT85hSipBGkcah2qgtjUFB9LNl6DAmyz%2FSIiiz7A%2FrJPqUirE%2B8L%2BwzCPZJI5sKZGvx6G25hqddoAi%2FCYdbSRwjftxWZsJMOuoUcvws2yYAFrNQV9kMFEpejzXA2G4MutUYra5%2B8L7sUo8xmPWehzRmkf1F0wxSBB3wyPWmI%2BBsjY8rFhirSNpqXNgbGyjtZiMIGXlOBUn8%2B7x&X-Amz-Signature=71ce6dbc10f2543067862607b7bb3ab9dbd2a6d8fee9fa8e29bb97c5a5e364db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHYHA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgIrWxE%2FeSiUSLKCeevZtnIuBb%2BCMTdm5tykqB6kqmYAiA17VwbQGBCBXudei%2FjXiFQex8SsLCN9th3msdMSRbN7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnkuJEvFlvBWbh3zKtwDopZGa50bMJ4EYxQx6xLlaKqFxRxx4wYmnT%2Buyoaxpl6GMPc14TSPH%2BnARffdHkn6hvKd6GZxkN6WPMpFzbvdObZJ2h3No5OGaLs7OYgsDEpX804NeHST8m7Rr%2BwwV8OvR16b2rzjO5gMgKLWFptilWaWTGqXdWSD4coYFajJiU35b556aD5ne7kJ6qCi5JJTi3VN7QG4QeD3xUPE4WPaoQcxC6l39Ge74maPwSKfWmwTnia177XzsGN17yxOInoFavA6ifvC4Ck%2BWk4P5tay7kj51KgMsNeEwW9YGs6gKkw5jfpc%2FekdSG6ZT1AVKubS5LHlMSFOEuPtgT66zEzdHn5Nh6jDhe7NKZ99ARv3Df44CUGIohPKS3%2F1372hsv9n0E1UuKYE9gIWLHyUBqFCwe8Iw6dkmqEB%2FJGYMpUiS7dOr6x8v0dh6gjcTdVdF8H4ZP5YeiA57weuDcpocaoiZG3buKsKddlo8tldwEFZat8g4GPoJsxop%2Fgs7ZEvVznsi683r%2F37kEYB1c9Dli6P4evb%2F%2Fg4tmr3t9ep0p8LGIFcM%2FHsAoNPfjz3FM1Y48XpIjKHsSOaD6RcEAsmU0YGLur4enI0lAlGqzk8wVOFL2xrnY0nMRiv20PNW%2FcwwNWzxAY6pgFiBM82JTF4lNawTUGT85hSipBGkcah2qgtjUFB9LNl6DAmyz%2FSIiiz7A%2FrJPqUirE%2B8L%2BwzCPZJI5sKZGvx6G25hqddoAi%2FCYdbSRwjftxWZsJMOuoUcvws2yYAFrNQV9kMFEpejzXA2G4MutUYra5%2B8L7sUo8xmPWehzRmkf1F0wxSBB3wyPWmI%2BBsjY8rFhirSNpqXNgbGyjtZiMIGXlOBUn8%2B7x&X-Amz-Signature=b0991ca35e93f4261feb76ec1d5b8ffac4cbd2bc1b511429bb6e19d957cad2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHYHA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgIrWxE%2FeSiUSLKCeevZtnIuBb%2BCMTdm5tykqB6kqmYAiA17VwbQGBCBXudei%2FjXiFQex8SsLCN9th3msdMSRbN7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnkuJEvFlvBWbh3zKtwDopZGa50bMJ4EYxQx6xLlaKqFxRxx4wYmnT%2Buyoaxpl6GMPc14TSPH%2BnARffdHkn6hvKd6GZxkN6WPMpFzbvdObZJ2h3No5OGaLs7OYgsDEpX804NeHST8m7Rr%2BwwV8OvR16b2rzjO5gMgKLWFptilWaWTGqXdWSD4coYFajJiU35b556aD5ne7kJ6qCi5JJTi3VN7QG4QeD3xUPE4WPaoQcxC6l39Ge74maPwSKfWmwTnia177XzsGN17yxOInoFavA6ifvC4Ck%2BWk4P5tay7kj51KgMsNeEwW9YGs6gKkw5jfpc%2FekdSG6ZT1AVKubS5LHlMSFOEuPtgT66zEzdHn5Nh6jDhe7NKZ99ARv3Df44CUGIohPKS3%2F1372hsv9n0E1UuKYE9gIWLHyUBqFCwe8Iw6dkmqEB%2FJGYMpUiS7dOr6x8v0dh6gjcTdVdF8H4ZP5YeiA57weuDcpocaoiZG3buKsKddlo8tldwEFZat8g4GPoJsxop%2Fgs7ZEvVznsi683r%2F37kEYB1c9Dli6P4evb%2F%2Fg4tmr3t9ep0p8LGIFcM%2FHsAoNPfjz3FM1Y48XpIjKHsSOaD6RcEAsmU0YGLur4enI0lAlGqzk8wVOFL2xrnY0nMRiv20PNW%2FcwwNWzxAY6pgFiBM82JTF4lNawTUGT85hSipBGkcah2qgtjUFB9LNl6DAmyz%2FSIiiz7A%2FrJPqUirE%2B8L%2BwzCPZJI5sKZGvx6G25hqddoAi%2FCYdbSRwjftxWZsJMOuoUcvws2yYAFrNQV9kMFEpejzXA2G4MutUYra5%2B8L7sUo8xmPWehzRmkf1F0wxSBB3wyPWmI%2BBsjY8rFhirSNpqXNgbGyjtZiMIGXlOBUn8%2B7x&X-Amz-Signature=e1d6864bb8c32db76500e48de7c4e280b6dcb6f5991be0fcc9d47fa425064f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAHYHA4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgIrWxE%2FeSiUSLKCeevZtnIuBb%2BCMTdm5tykqB6kqmYAiA17VwbQGBCBXudei%2FjXiFQex8SsLCN9th3msdMSRbN7SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnkuJEvFlvBWbh3zKtwDopZGa50bMJ4EYxQx6xLlaKqFxRxx4wYmnT%2Buyoaxpl6GMPc14TSPH%2BnARffdHkn6hvKd6GZxkN6WPMpFzbvdObZJ2h3No5OGaLs7OYgsDEpX804NeHST8m7Rr%2BwwV8OvR16b2rzjO5gMgKLWFptilWaWTGqXdWSD4coYFajJiU35b556aD5ne7kJ6qCi5JJTi3VN7QG4QeD3xUPE4WPaoQcxC6l39Ge74maPwSKfWmwTnia177XzsGN17yxOInoFavA6ifvC4Ck%2BWk4P5tay7kj51KgMsNeEwW9YGs6gKkw5jfpc%2FekdSG6ZT1AVKubS5LHlMSFOEuPtgT66zEzdHn5Nh6jDhe7NKZ99ARv3Df44CUGIohPKS3%2F1372hsv9n0E1UuKYE9gIWLHyUBqFCwe8Iw6dkmqEB%2FJGYMpUiS7dOr6x8v0dh6gjcTdVdF8H4ZP5YeiA57weuDcpocaoiZG3buKsKddlo8tldwEFZat8g4GPoJsxop%2Fgs7ZEvVznsi683r%2F37kEYB1c9Dli6P4evb%2F%2Fg4tmr3t9ep0p8LGIFcM%2FHsAoNPfjz3FM1Y48XpIjKHsSOaD6RcEAsmU0YGLur4enI0lAlGqzk8wVOFL2xrnY0nMRiv20PNW%2FcwwNWzxAY6pgFiBM82JTF4lNawTUGT85hSipBGkcah2qgtjUFB9LNl6DAmyz%2FSIiiz7A%2FrJPqUirE%2B8L%2BwzCPZJI5sKZGvx6G25hqddoAi%2FCYdbSRwjftxWZsJMOuoUcvws2yYAFrNQV9kMFEpejzXA2G4MutUYra5%2B8L7sUo8xmPWehzRmkf1F0wxSBB3wyPWmI%2BBsjY8rFhirSNpqXNgbGyjtZiMIGXlOBUn8%2B7x&X-Amz-Signature=c10f3be1e5a434b73113b8392938061a6a8bc65b1cda4adef23394c1b82929a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
