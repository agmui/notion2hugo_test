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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EADLRXT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmERt5W4jkJYrqS3ogcpRiVTWA6Np7ASXAyeLF2LrmSQIhAPjeHgyR5bj7P5fFWCeRrdycahbfn4o2kShgXAa6iRYnKv8DCG4QABoMNjM3NDIzMTgzODA1IgwTf%2BVUk%2BYN06HYo0Yq3AO7tU0a8F4ySV0JOQV91fb9cKOaLDzv53HdBgYdCQui7XJevn2g38NCz0puWqspbq0CF49%2F3meF65mm2TA9E4r7rmY1LfIYwEun2lsMT8eC2mZBBeDt4fYMX4yj%2FPCTmy8bC96DkY3DmgsVAiGzAPYRKHRyLT%2BMa3ugYc%2BMbtfWqWwHPyl7kEBNVhyddu4cGdQ5cvzvH0yaQnJwnGNqNVrDNY6WjnnHJI0WQd9hebcBEIc1GQ5LIcSjLCmHYh99r33wgaNkdSOChHkZBiUztppHzQGYJexkC1XadhZtQ4njAv8HjDxPPjFA7BWkYFVXjw%2BP2%2FI4Kn8OkaSP7uZbIPYmsws4ayVfDD%2BALraTSM15J%2BF79vnGulp74%2BhNaqIyPevphSwfyhbC5quFL3mYY8wbR1K3wX%2BTi6yq7KddiT8vS88RfcN7poaMeB%2Bi%2FZAsT60GaKun2eUkNSDuKEosoCD%2F%2F7xSSbqW%2BM7hbeVFnJzzBtaN95m4xHJuEiWc5XnAg4gXG642%2FSNd6H1O%2BhpOhwm5Wd3xh%2B0NI1Y4AjNuje7EkPlGxusQoV0Diq5uEVmOhJZY6LYyLecyzF6Kq5ZxMsxJ1L5H%2BEUd%2FTy3eJpZ6Y0rf0qqNHX%2BkiFk%2BOrrJDCnqYfABjqkAexAsz9oSBeYjtIwXtMOwrmxGj85TU53XkOdrn1WUVybqCYg6f%2BEfb6GLiczyrx10WYSts4WooJGz6nJYGmukolsc04QgEPbjTptfAwnhCcJreOAPp6j6QFtPjp2ZfLS7JRlG8b9hg1IVVyDpA0CWsLQ93zJIIfJ1gve8QAL9JmctQUrdOe3CYRbEI3NK89NgiqoiGq8JsqQumkIwxFOEKclrrAN&X-Amz-Signature=22cbf0ba4689a705533f011bb722e38dc2403286623b08963c892a2020b9db4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EADLRXT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmERt5W4jkJYrqS3ogcpRiVTWA6Np7ASXAyeLF2LrmSQIhAPjeHgyR5bj7P5fFWCeRrdycahbfn4o2kShgXAa6iRYnKv8DCG4QABoMNjM3NDIzMTgzODA1IgwTf%2BVUk%2BYN06HYo0Yq3AO7tU0a8F4ySV0JOQV91fb9cKOaLDzv53HdBgYdCQui7XJevn2g38NCz0puWqspbq0CF49%2F3meF65mm2TA9E4r7rmY1LfIYwEun2lsMT8eC2mZBBeDt4fYMX4yj%2FPCTmy8bC96DkY3DmgsVAiGzAPYRKHRyLT%2BMa3ugYc%2BMbtfWqWwHPyl7kEBNVhyddu4cGdQ5cvzvH0yaQnJwnGNqNVrDNY6WjnnHJI0WQd9hebcBEIc1GQ5LIcSjLCmHYh99r33wgaNkdSOChHkZBiUztppHzQGYJexkC1XadhZtQ4njAv8HjDxPPjFA7BWkYFVXjw%2BP2%2FI4Kn8OkaSP7uZbIPYmsws4ayVfDD%2BALraTSM15J%2BF79vnGulp74%2BhNaqIyPevphSwfyhbC5quFL3mYY8wbR1K3wX%2BTi6yq7KddiT8vS88RfcN7poaMeB%2Bi%2FZAsT60GaKun2eUkNSDuKEosoCD%2F%2F7xSSbqW%2BM7hbeVFnJzzBtaN95m4xHJuEiWc5XnAg4gXG642%2FSNd6H1O%2BhpOhwm5Wd3xh%2B0NI1Y4AjNuje7EkPlGxusQoV0Diq5uEVmOhJZY6LYyLecyzF6Kq5ZxMsxJ1L5H%2BEUd%2FTy3eJpZ6Y0rf0qqNHX%2BkiFk%2BOrrJDCnqYfABjqkAexAsz9oSBeYjtIwXtMOwrmxGj85TU53XkOdrn1WUVybqCYg6f%2BEfb6GLiczyrx10WYSts4WooJGz6nJYGmukolsc04QgEPbjTptfAwnhCcJreOAPp6j6QFtPjp2ZfLS7JRlG8b9hg1IVVyDpA0CWsLQ93zJIIfJ1gve8QAL9JmctQUrdOe3CYRbEI3NK89NgiqoiGq8JsqQumkIwxFOEKclrrAN&X-Amz-Signature=6c31f20b8aa9c733f8f93bf43f79d65f732cc4d430c47bb333be9cb2c39f9b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EADLRXT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmERt5W4jkJYrqS3ogcpRiVTWA6Np7ASXAyeLF2LrmSQIhAPjeHgyR5bj7P5fFWCeRrdycahbfn4o2kShgXAa6iRYnKv8DCG4QABoMNjM3NDIzMTgzODA1IgwTf%2BVUk%2BYN06HYo0Yq3AO7tU0a8F4ySV0JOQV91fb9cKOaLDzv53HdBgYdCQui7XJevn2g38NCz0puWqspbq0CF49%2F3meF65mm2TA9E4r7rmY1LfIYwEun2lsMT8eC2mZBBeDt4fYMX4yj%2FPCTmy8bC96DkY3DmgsVAiGzAPYRKHRyLT%2BMa3ugYc%2BMbtfWqWwHPyl7kEBNVhyddu4cGdQ5cvzvH0yaQnJwnGNqNVrDNY6WjnnHJI0WQd9hebcBEIc1GQ5LIcSjLCmHYh99r33wgaNkdSOChHkZBiUztppHzQGYJexkC1XadhZtQ4njAv8HjDxPPjFA7BWkYFVXjw%2BP2%2FI4Kn8OkaSP7uZbIPYmsws4ayVfDD%2BALraTSM15J%2BF79vnGulp74%2BhNaqIyPevphSwfyhbC5quFL3mYY8wbR1K3wX%2BTi6yq7KddiT8vS88RfcN7poaMeB%2Bi%2FZAsT60GaKun2eUkNSDuKEosoCD%2F%2F7xSSbqW%2BM7hbeVFnJzzBtaN95m4xHJuEiWc5XnAg4gXG642%2FSNd6H1O%2BhpOhwm5Wd3xh%2B0NI1Y4AjNuje7EkPlGxusQoV0Diq5uEVmOhJZY6LYyLecyzF6Kq5ZxMsxJ1L5H%2BEUd%2FTy3eJpZ6Y0rf0qqNHX%2BkiFk%2BOrrJDCnqYfABjqkAexAsz9oSBeYjtIwXtMOwrmxGj85TU53XkOdrn1WUVybqCYg6f%2BEfb6GLiczyrx10WYSts4WooJGz6nJYGmukolsc04QgEPbjTptfAwnhCcJreOAPp6j6QFtPjp2ZfLS7JRlG8b9hg1IVVyDpA0CWsLQ93zJIIfJ1gve8QAL9JmctQUrdOe3CYRbEI3NK89NgiqoiGq8JsqQumkIwxFOEKclrrAN&X-Amz-Signature=0a58514befedcdb4c00ecd447cfcae974d339b492cd43dc0dc9bad4b3fcfc56b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EADLRXT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmERt5W4jkJYrqS3ogcpRiVTWA6Np7ASXAyeLF2LrmSQIhAPjeHgyR5bj7P5fFWCeRrdycahbfn4o2kShgXAa6iRYnKv8DCG4QABoMNjM3NDIzMTgzODA1IgwTf%2BVUk%2BYN06HYo0Yq3AO7tU0a8F4ySV0JOQV91fb9cKOaLDzv53HdBgYdCQui7XJevn2g38NCz0puWqspbq0CF49%2F3meF65mm2TA9E4r7rmY1LfIYwEun2lsMT8eC2mZBBeDt4fYMX4yj%2FPCTmy8bC96DkY3DmgsVAiGzAPYRKHRyLT%2BMa3ugYc%2BMbtfWqWwHPyl7kEBNVhyddu4cGdQ5cvzvH0yaQnJwnGNqNVrDNY6WjnnHJI0WQd9hebcBEIc1GQ5LIcSjLCmHYh99r33wgaNkdSOChHkZBiUztppHzQGYJexkC1XadhZtQ4njAv8HjDxPPjFA7BWkYFVXjw%2BP2%2FI4Kn8OkaSP7uZbIPYmsws4ayVfDD%2BALraTSM15J%2BF79vnGulp74%2BhNaqIyPevphSwfyhbC5quFL3mYY8wbR1K3wX%2BTi6yq7KddiT8vS88RfcN7poaMeB%2Bi%2FZAsT60GaKun2eUkNSDuKEosoCD%2F%2F7xSSbqW%2BM7hbeVFnJzzBtaN95m4xHJuEiWc5XnAg4gXG642%2FSNd6H1O%2BhpOhwm5Wd3xh%2B0NI1Y4AjNuje7EkPlGxusQoV0Diq5uEVmOhJZY6LYyLecyzF6Kq5ZxMsxJ1L5H%2BEUd%2FTy3eJpZ6Y0rf0qqNHX%2BkiFk%2BOrrJDCnqYfABjqkAexAsz9oSBeYjtIwXtMOwrmxGj85TU53XkOdrn1WUVybqCYg6f%2BEfb6GLiczyrx10WYSts4WooJGz6nJYGmukolsc04QgEPbjTptfAwnhCcJreOAPp6j6QFtPjp2ZfLS7JRlG8b9hg1IVVyDpA0CWsLQ93zJIIfJ1gve8QAL9JmctQUrdOe3CYRbEI3NK89NgiqoiGq8JsqQumkIwxFOEKclrrAN&X-Amz-Signature=e6fe0b82f4423331974af12759d2b8bc77c6fd77914152a9210b28d096dc8fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EADLRXT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmERt5W4jkJYrqS3ogcpRiVTWA6Np7ASXAyeLF2LrmSQIhAPjeHgyR5bj7P5fFWCeRrdycahbfn4o2kShgXAa6iRYnKv8DCG4QABoMNjM3NDIzMTgzODA1IgwTf%2BVUk%2BYN06HYo0Yq3AO7tU0a8F4ySV0JOQV91fb9cKOaLDzv53HdBgYdCQui7XJevn2g38NCz0puWqspbq0CF49%2F3meF65mm2TA9E4r7rmY1LfIYwEun2lsMT8eC2mZBBeDt4fYMX4yj%2FPCTmy8bC96DkY3DmgsVAiGzAPYRKHRyLT%2BMa3ugYc%2BMbtfWqWwHPyl7kEBNVhyddu4cGdQ5cvzvH0yaQnJwnGNqNVrDNY6WjnnHJI0WQd9hebcBEIc1GQ5LIcSjLCmHYh99r33wgaNkdSOChHkZBiUztppHzQGYJexkC1XadhZtQ4njAv8HjDxPPjFA7BWkYFVXjw%2BP2%2FI4Kn8OkaSP7uZbIPYmsws4ayVfDD%2BALraTSM15J%2BF79vnGulp74%2BhNaqIyPevphSwfyhbC5quFL3mYY8wbR1K3wX%2BTi6yq7KddiT8vS88RfcN7poaMeB%2Bi%2FZAsT60GaKun2eUkNSDuKEosoCD%2F%2F7xSSbqW%2BM7hbeVFnJzzBtaN95m4xHJuEiWc5XnAg4gXG642%2FSNd6H1O%2BhpOhwm5Wd3xh%2B0NI1Y4AjNuje7EkPlGxusQoV0Diq5uEVmOhJZY6LYyLecyzF6Kq5ZxMsxJ1L5H%2BEUd%2FTy3eJpZ6Y0rf0qqNHX%2BkiFk%2BOrrJDCnqYfABjqkAexAsz9oSBeYjtIwXtMOwrmxGj85TU53XkOdrn1WUVybqCYg6f%2BEfb6GLiczyrx10WYSts4WooJGz6nJYGmukolsc04QgEPbjTptfAwnhCcJreOAPp6j6QFtPjp2ZfLS7JRlG8b9hg1IVVyDpA0CWsLQ93zJIIfJ1gve8QAL9JmctQUrdOe3CYRbEI3NK89NgiqoiGq8JsqQumkIwxFOEKclrrAN&X-Amz-Signature=7ed07bd6bdeb0d3b7786272418a3c70f9bfa92810ea3b1a4ffc6a3e62a45e864&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EADLRXT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmERt5W4jkJYrqS3ogcpRiVTWA6Np7ASXAyeLF2LrmSQIhAPjeHgyR5bj7P5fFWCeRrdycahbfn4o2kShgXAa6iRYnKv8DCG4QABoMNjM3NDIzMTgzODA1IgwTf%2BVUk%2BYN06HYo0Yq3AO7tU0a8F4ySV0JOQV91fb9cKOaLDzv53HdBgYdCQui7XJevn2g38NCz0puWqspbq0CF49%2F3meF65mm2TA9E4r7rmY1LfIYwEun2lsMT8eC2mZBBeDt4fYMX4yj%2FPCTmy8bC96DkY3DmgsVAiGzAPYRKHRyLT%2BMa3ugYc%2BMbtfWqWwHPyl7kEBNVhyddu4cGdQ5cvzvH0yaQnJwnGNqNVrDNY6WjnnHJI0WQd9hebcBEIc1GQ5LIcSjLCmHYh99r33wgaNkdSOChHkZBiUztppHzQGYJexkC1XadhZtQ4njAv8HjDxPPjFA7BWkYFVXjw%2BP2%2FI4Kn8OkaSP7uZbIPYmsws4ayVfDD%2BALraTSM15J%2BF79vnGulp74%2BhNaqIyPevphSwfyhbC5quFL3mYY8wbR1K3wX%2BTi6yq7KddiT8vS88RfcN7poaMeB%2Bi%2FZAsT60GaKun2eUkNSDuKEosoCD%2F%2F7xSSbqW%2BM7hbeVFnJzzBtaN95m4xHJuEiWc5XnAg4gXG642%2FSNd6H1O%2BhpOhwm5Wd3xh%2B0NI1Y4AjNuje7EkPlGxusQoV0Diq5uEVmOhJZY6LYyLecyzF6Kq5ZxMsxJ1L5H%2BEUd%2FTy3eJpZ6Y0rf0qqNHX%2BkiFk%2BOrrJDCnqYfABjqkAexAsz9oSBeYjtIwXtMOwrmxGj85TU53XkOdrn1WUVybqCYg6f%2BEfb6GLiczyrx10WYSts4WooJGz6nJYGmukolsc04QgEPbjTptfAwnhCcJreOAPp6j6QFtPjp2ZfLS7JRlG8b9hg1IVVyDpA0CWsLQ93zJIIfJ1gve8QAL9JmctQUrdOe3CYRbEI3NK89NgiqoiGq8JsqQumkIwxFOEKclrrAN&X-Amz-Signature=c92dd80a53d9636e6cda10f9aa9fb6a038a14b6d6295518016e9f572bcde170b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EADLRXT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmERt5W4jkJYrqS3ogcpRiVTWA6Np7ASXAyeLF2LrmSQIhAPjeHgyR5bj7P5fFWCeRrdycahbfn4o2kShgXAa6iRYnKv8DCG4QABoMNjM3NDIzMTgzODA1IgwTf%2BVUk%2BYN06HYo0Yq3AO7tU0a8F4ySV0JOQV91fb9cKOaLDzv53HdBgYdCQui7XJevn2g38NCz0puWqspbq0CF49%2F3meF65mm2TA9E4r7rmY1LfIYwEun2lsMT8eC2mZBBeDt4fYMX4yj%2FPCTmy8bC96DkY3DmgsVAiGzAPYRKHRyLT%2BMa3ugYc%2BMbtfWqWwHPyl7kEBNVhyddu4cGdQ5cvzvH0yaQnJwnGNqNVrDNY6WjnnHJI0WQd9hebcBEIc1GQ5LIcSjLCmHYh99r33wgaNkdSOChHkZBiUztppHzQGYJexkC1XadhZtQ4njAv8HjDxPPjFA7BWkYFVXjw%2BP2%2FI4Kn8OkaSP7uZbIPYmsws4ayVfDD%2BALraTSM15J%2BF79vnGulp74%2BhNaqIyPevphSwfyhbC5quFL3mYY8wbR1K3wX%2BTi6yq7KddiT8vS88RfcN7poaMeB%2Bi%2FZAsT60GaKun2eUkNSDuKEosoCD%2F%2F7xSSbqW%2BM7hbeVFnJzzBtaN95m4xHJuEiWc5XnAg4gXG642%2FSNd6H1O%2BhpOhwm5Wd3xh%2B0NI1Y4AjNuje7EkPlGxusQoV0Diq5uEVmOhJZY6LYyLecyzF6Kq5ZxMsxJ1L5H%2BEUd%2FTy3eJpZ6Y0rf0qqNHX%2BkiFk%2BOrrJDCnqYfABjqkAexAsz9oSBeYjtIwXtMOwrmxGj85TU53XkOdrn1WUVybqCYg6f%2BEfb6GLiczyrx10WYSts4WooJGz6nJYGmukolsc04QgEPbjTptfAwnhCcJreOAPp6j6QFtPjp2ZfLS7JRlG8b9hg1IVVyDpA0CWsLQ93zJIIfJ1gve8QAL9JmctQUrdOe3CYRbEI3NK89NgiqoiGq8JsqQumkIwxFOEKclrrAN&X-Amz-Signature=febde80d8348ed0bf58507868382069ae011f60da852b5370cddb2210eb47788&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
