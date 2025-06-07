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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BCODCO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z8oN00JLehBHjAPC8Y%2Bso46gk%2F%2FnHnU2YS8VN93VhAIhAOaV1YbquuH88aQkRInhXBoPszkF9%2FdzS0yDkIMpmrrQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx5bhKDRAj6irHQKRMq3APt0qLo6bD2fAVo6mK6huxdmoXqtDvhLgjfIsmAJyn85d41TXHYXXerQNUzY32syR8j%2FiOH6HBjffauD1zRX9iqp%2FSbVk9BdNfrR33dMIKgCNFe5kcqeC9zA3usyFoNlOahI2%2B2xc4i%2Bj%2F7N2uL0OnEL8FrX15WClp7c52u39G6Vp%2BGYodC2bK%2FSj6sj%2FG4XgB14Fek%2BNGkb61aKh3RmQhoCar275mu4M88jnITdH22Lx4IClaoV9T1jSUEAXOyMzrN%2B%2Bjv1c2m%2FXGJQ%2F8D2%2B%2FZL1EDVRp8154YAobMa18UCadVqznPcnK4%2BrA%2Falf7U%2ByzKsQeZx42bPbta9mYN%2BiGGkZ5PN%2BK2N9DD03eGR80cyC5XbDXRh6VQGwwqFpv6n5fcDL7QFjodQMQwNvPX5T41K6w5gflRU0aQFji5fVYU5AYUsUt4eeiwpMhyLeCUz3y9nE%2F1pTiihHbfniZxfJ%2FbazED2OxO0cuvSuHT55VErNltKjagRQZS65jx38k9dN%2FBke2TTKwSztTWl517ao6htdOtgmqGUoSdM7OExz9Zz2iA2hHS6hEMjHRBGNLEP41NHuBw65YRwT5A0PJ1nIulmL1tGpSjvOK%2Fv6iT1PfImXY2XFbGaBRdVpBjzCQ%2Bo%2FCBjqkAfPYjUtvFByw6erciBggEe9sLRCfv3RhNJxDWDWjHax30jcGxlA97PFM04i5T6%2F2RaISuDNIJVY7XhHEma%2Bnyubstydn8Tmm6ZAVuz2B5xD2P6YsxMagJsYQcajfAiYN%2Bqm0nrXr1OIZmYrmenXVkJYe9wY42rHA9Pk03RzNdoCix3H6d4WtGr%2FXJSQ9R5Ez9aEFL58wlaRDScNZdu857Q4nHRGi&X-Amz-Signature=63e46073d865e1758ca9aa94d884ef39d5f9d8171123fbee29926aa06cc00639&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BCODCO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z8oN00JLehBHjAPC8Y%2Bso46gk%2F%2FnHnU2YS8VN93VhAIhAOaV1YbquuH88aQkRInhXBoPszkF9%2FdzS0yDkIMpmrrQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx5bhKDRAj6irHQKRMq3APt0qLo6bD2fAVo6mK6huxdmoXqtDvhLgjfIsmAJyn85d41TXHYXXerQNUzY32syR8j%2FiOH6HBjffauD1zRX9iqp%2FSbVk9BdNfrR33dMIKgCNFe5kcqeC9zA3usyFoNlOahI2%2B2xc4i%2Bj%2F7N2uL0OnEL8FrX15WClp7c52u39G6Vp%2BGYodC2bK%2FSj6sj%2FG4XgB14Fek%2BNGkb61aKh3RmQhoCar275mu4M88jnITdH22Lx4IClaoV9T1jSUEAXOyMzrN%2B%2Bjv1c2m%2FXGJQ%2F8D2%2B%2FZL1EDVRp8154YAobMa18UCadVqznPcnK4%2BrA%2Falf7U%2ByzKsQeZx42bPbta9mYN%2BiGGkZ5PN%2BK2N9DD03eGR80cyC5XbDXRh6VQGwwqFpv6n5fcDL7QFjodQMQwNvPX5T41K6w5gflRU0aQFji5fVYU5AYUsUt4eeiwpMhyLeCUz3y9nE%2F1pTiihHbfniZxfJ%2FbazED2OxO0cuvSuHT55VErNltKjagRQZS65jx38k9dN%2FBke2TTKwSztTWl517ao6htdOtgmqGUoSdM7OExz9Zz2iA2hHS6hEMjHRBGNLEP41NHuBw65YRwT5A0PJ1nIulmL1tGpSjvOK%2Fv6iT1PfImXY2XFbGaBRdVpBjzCQ%2Bo%2FCBjqkAfPYjUtvFByw6erciBggEe9sLRCfv3RhNJxDWDWjHax30jcGxlA97PFM04i5T6%2F2RaISuDNIJVY7XhHEma%2Bnyubstydn8Tmm6ZAVuz2B5xD2P6YsxMagJsYQcajfAiYN%2Bqm0nrXr1OIZmYrmenXVkJYe9wY42rHA9Pk03RzNdoCix3H6d4WtGr%2FXJSQ9R5Ez9aEFL58wlaRDScNZdu857Q4nHRGi&X-Amz-Signature=7b4a341246189d3748cca9e1f57179b4d68fbb198b64d9aacde3db98ce4e92e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BCODCO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z8oN00JLehBHjAPC8Y%2Bso46gk%2F%2FnHnU2YS8VN93VhAIhAOaV1YbquuH88aQkRInhXBoPszkF9%2FdzS0yDkIMpmrrQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx5bhKDRAj6irHQKRMq3APt0qLo6bD2fAVo6mK6huxdmoXqtDvhLgjfIsmAJyn85d41TXHYXXerQNUzY32syR8j%2FiOH6HBjffauD1zRX9iqp%2FSbVk9BdNfrR33dMIKgCNFe5kcqeC9zA3usyFoNlOahI2%2B2xc4i%2Bj%2F7N2uL0OnEL8FrX15WClp7c52u39G6Vp%2BGYodC2bK%2FSj6sj%2FG4XgB14Fek%2BNGkb61aKh3RmQhoCar275mu4M88jnITdH22Lx4IClaoV9T1jSUEAXOyMzrN%2B%2Bjv1c2m%2FXGJQ%2F8D2%2B%2FZL1EDVRp8154YAobMa18UCadVqznPcnK4%2BrA%2Falf7U%2ByzKsQeZx42bPbta9mYN%2BiGGkZ5PN%2BK2N9DD03eGR80cyC5XbDXRh6VQGwwqFpv6n5fcDL7QFjodQMQwNvPX5T41K6w5gflRU0aQFji5fVYU5AYUsUt4eeiwpMhyLeCUz3y9nE%2F1pTiihHbfniZxfJ%2FbazED2OxO0cuvSuHT55VErNltKjagRQZS65jx38k9dN%2FBke2TTKwSztTWl517ao6htdOtgmqGUoSdM7OExz9Zz2iA2hHS6hEMjHRBGNLEP41NHuBw65YRwT5A0PJ1nIulmL1tGpSjvOK%2Fv6iT1PfImXY2XFbGaBRdVpBjzCQ%2Bo%2FCBjqkAfPYjUtvFByw6erciBggEe9sLRCfv3RhNJxDWDWjHax30jcGxlA97PFM04i5T6%2F2RaISuDNIJVY7XhHEma%2Bnyubstydn8Tmm6ZAVuz2B5xD2P6YsxMagJsYQcajfAiYN%2Bqm0nrXr1OIZmYrmenXVkJYe9wY42rHA9Pk03RzNdoCix3H6d4WtGr%2FXJSQ9R5Ez9aEFL58wlaRDScNZdu857Q4nHRGi&X-Amz-Signature=59d8bdc5558537615094efa903c86af9d4aa8e296bef397a0c518b4b906488b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BCODCO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z8oN00JLehBHjAPC8Y%2Bso46gk%2F%2FnHnU2YS8VN93VhAIhAOaV1YbquuH88aQkRInhXBoPszkF9%2FdzS0yDkIMpmrrQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx5bhKDRAj6irHQKRMq3APt0qLo6bD2fAVo6mK6huxdmoXqtDvhLgjfIsmAJyn85d41TXHYXXerQNUzY32syR8j%2FiOH6HBjffauD1zRX9iqp%2FSbVk9BdNfrR33dMIKgCNFe5kcqeC9zA3usyFoNlOahI2%2B2xc4i%2Bj%2F7N2uL0OnEL8FrX15WClp7c52u39G6Vp%2BGYodC2bK%2FSj6sj%2FG4XgB14Fek%2BNGkb61aKh3RmQhoCar275mu4M88jnITdH22Lx4IClaoV9T1jSUEAXOyMzrN%2B%2Bjv1c2m%2FXGJQ%2F8D2%2B%2FZL1EDVRp8154YAobMa18UCadVqznPcnK4%2BrA%2Falf7U%2ByzKsQeZx42bPbta9mYN%2BiGGkZ5PN%2BK2N9DD03eGR80cyC5XbDXRh6VQGwwqFpv6n5fcDL7QFjodQMQwNvPX5T41K6w5gflRU0aQFji5fVYU5AYUsUt4eeiwpMhyLeCUz3y9nE%2F1pTiihHbfniZxfJ%2FbazED2OxO0cuvSuHT55VErNltKjagRQZS65jx38k9dN%2FBke2TTKwSztTWl517ao6htdOtgmqGUoSdM7OExz9Zz2iA2hHS6hEMjHRBGNLEP41NHuBw65YRwT5A0PJ1nIulmL1tGpSjvOK%2Fv6iT1PfImXY2XFbGaBRdVpBjzCQ%2Bo%2FCBjqkAfPYjUtvFByw6erciBggEe9sLRCfv3RhNJxDWDWjHax30jcGxlA97PFM04i5T6%2F2RaISuDNIJVY7XhHEma%2Bnyubstydn8Tmm6ZAVuz2B5xD2P6YsxMagJsYQcajfAiYN%2Bqm0nrXr1OIZmYrmenXVkJYe9wY42rHA9Pk03RzNdoCix3H6d4WtGr%2FXJSQ9R5Ez9aEFL58wlaRDScNZdu857Q4nHRGi&X-Amz-Signature=4f2301f64c2ca632b8b232bdeac91a89c2696b503f6d6f733c17f1fbdad83f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BCODCO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z8oN00JLehBHjAPC8Y%2Bso46gk%2F%2FnHnU2YS8VN93VhAIhAOaV1YbquuH88aQkRInhXBoPszkF9%2FdzS0yDkIMpmrrQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx5bhKDRAj6irHQKRMq3APt0qLo6bD2fAVo6mK6huxdmoXqtDvhLgjfIsmAJyn85d41TXHYXXerQNUzY32syR8j%2FiOH6HBjffauD1zRX9iqp%2FSbVk9BdNfrR33dMIKgCNFe5kcqeC9zA3usyFoNlOahI2%2B2xc4i%2Bj%2F7N2uL0OnEL8FrX15WClp7c52u39G6Vp%2BGYodC2bK%2FSj6sj%2FG4XgB14Fek%2BNGkb61aKh3RmQhoCar275mu4M88jnITdH22Lx4IClaoV9T1jSUEAXOyMzrN%2B%2Bjv1c2m%2FXGJQ%2F8D2%2B%2FZL1EDVRp8154YAobMa18UCadVqznPcnK4%2BrA%2Falf7U%2ByzKsQeZx42bPbta9mYN%2BiGGkZ5PN%2BK2N9DD03eGR80cyC5XbDXRh6VQGwwqFpv6n5fcDL7QFjodQMQwNvPX5T41K6w5gflRU0aQFji5fVYU5AYUsUt4eeiwpMhyLeCUz3y9nE%2F1pTiihHbfniZxfJ%2FbazED2OxO0cuvSuHT55VErNltKjagRQZS65jx38k9dN%2FBke2TTKwSztTWl517ao6htdOtgmqGUoSdM7OExz9Zz2iA2hHS6hEMjHRBGNLEP41NHuBw65YRwT5A0PJ1nIulmL1tGpSjvOK%2Fv6iT1PfImXY2XFbGaBRdVpBjzCQ%2Bo%2FCBjqkAfPYjUtvFByw6erciBggEe9sLRCfv3RhNJxDWDWjHax30jcGxlA97PFM04i5T6%2F2RaISuDNIJVY7XhHEma%2Bnyubstydn8Tmm6ZAVuz2B5xD2P6YsxMagJsYQcajfAiYN%2Bqm0nrXr1OIZmYrmenXVkJYe9wY42rHA9Pk03RzNdoCix3H6d4WtGr%2FXJSQ9R5Ez9aEFL58wlaRDScNZdu857Q4nHRGi&X-Amz-Signature=9d544caf7bf120c4a7f75cdad7e21d4f389bc23660bd924530764c8d27e971ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BCODCO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z8oN00JLehBHjAPC8Y%2Bso46gk%2F%2FnHnU2YS8VN93VhAIhAOaV1YbquuH88aQkRInhXBoPszkF9%2FdzS0yDkIMpmrrQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx5bhKDRAj6irHQKRMq3APt0qLo6bD2fAVo6mK6huxdmoXqtDvhLgjfIsmAJyn85d41TXHYXXerQNUzY32syR8j%2FiOH6HBjffauD1zRX9iqp%2FSbVk9BdNfrR33dMIKgCNFe5kcqeC9zA3usyFoNlOahI2%2B2xc4i%2Bj%2F7N2uL0OnEL8FrX15WClp7c52u39G6Vp%2BGYodC2bK%2FSj6sj%2FG4XgB14Fek%2BNGkb61aKh3RmQhoCar275mu4M88jnITdH22Lx4IClaoV9T1jSUEAXOyMzrN%2B%2Bjv1c2m%2FXGJQ%2F8D2%2B%2FZL1EDVRp8154YAobMa18UCadVqznPcnK4%2BrA%2Falf7U%2ByzKsQeZx42bPbta9mYN%2BiGGkZ5PN%2BK2N9DD03eGR80cyC5XbDXRh6VQGwwqFpv6n5fcDL7QFjodQMQwNvPX5T41K6w5gflRU0aQFji5fVYU5AYUsUt4eeiwpMhyLeCUz3y9nE%2F1pTiihHbfniZxfJ%2FbazED2OxO0cuvSuHT55VErNltKjagRQZS65jx38k9dN%2FBke2TTKwSztTWl517ao6htdOtgmqGUoSdM7OExz9Zz2iA2hHS6hEMjHRBGNLEP41NHuBw65YRwT5A0PJ1nIulmL1tGpSjvOK%2Fv6iT1PfImXY2XFbGaBRdVpBjzCQ%2Bo%2FCBjqkAfPYjUtvFByw6erciBggEe9sLRCfv3RhNJxDWDWjHax30jcGxlA97PFM04i5T6%2F2RaISuDNIJVY7XhHEma%2Bnyubstydn8Tmm6ZAVuz2B5xD2P6YsxMagJsYQcajfAiYN%2Bqm0nrXr1OIZmYrmenXVkJYe9wY42rHA9Pk03RzNdoCix3H6d4WtGr%2FXJSQ9R5Ez9aEFL58wlaRDScNZdu857Q4nHRGi&X-Amz-Signature=007d6159ca1b6520442bd517f2c5024994de765e84d40ec2652fd7c167b399f9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BCODCO%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z8oN00JLehBHjAPC8Y%2Bso46gk%2F%2FnHnU2YS8VN93VhAIhAOaV1YbquuH88aQkRInhXBoPszkF9%2FdzS0yDkIMpmrrQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx5bhKDRAj6irHQKRMq3APt0qLo6bD2fAVo6mK6huxdmoXqtDvhLgjfIsmAJyn85d41TXHYXXerQNUzY32syR8j%2FiOH6HBjffauD1zRX9iqp%2FSbVk9BdNfrR33dMIKgCNFe5kcqeC9zA3usyFoNlOahI2%2B2xc4i%2Bj%2F7N2uL0OnEL8FrX15WClp7c52u39G6Vp%2BGYodC2bK%2FSj6sj%2FG4XgB14Fek%2BNGkb61aKh3RmQhoCar275mu4M88jnITdH22Lx4IClaoV9T1jSUEAXOyMzrN%2B%2Bjv1c2m%2FXGJQ%2F8D2%2B%2FZL1EDVRp8154YAobMa18UCadVqznPcnK4%2BrA%2Falf7U%2ByzKsQeZx42bPbta9mYN%2BiGGkZ5PN%2BK2N9DD03eGR80cyC5XbDXRh6VQGwwqFpv6n5fcDL7QFjodQMQwNvPX5T41K6w5gflRU0aQFji5fVYU5AYUsUt4eeiwpMhyLeCUz3y9nE%2F1pTiihHbfniZxfJ%2FbazED2OxO0cuvSuHT55VErNltKjagRQZS65jx38k9dN%2FBke2TTKwSztTWl517ao6htdOtgmqGUoSdM7OExz9Zz2iA2hHS6hEMjHRBGNLEP41NHuBw65YRwT5A0PJ1nIulmL1tGpSjvOK%2Fv6iT1PfImXY2XFbGaBRdVpBjzCQ%2Bo%2FCBjqkAfPYjUtvFByw6erciBggEe9sLRCfv3RhNJxDWDWjHax30jcGxlA97PFM04i5T6%2F2RaISuDNIJVY7XhHEma%2Bnyubstydn8Tmm6ZAVuz2B5xD2P6YsxMagJsYQcajfAiYN%2Bqm0nrXr1OIZmYrmenXVkJYe9wY42rHA9Pk03RzNdoCix3H6d4WtGr%2FXJSQ9R5Ez9aEFL58wlaRDScNZdu857Q4nHRGi&X-Amz-Signature=826cdb54d7f08c6bd1bff5d303d320c6e5a25e9e3e10287797ee62d1578859d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
