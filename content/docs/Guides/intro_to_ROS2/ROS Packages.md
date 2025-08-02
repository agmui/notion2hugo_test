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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZKNJ27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeWtHJ3fCHuuxQY2J%2FbzS%2FK3EVBpoFXhg7hr2WGRp8VAiANpI2fhBKwFNKg6qvpL0xlRwWTbnOxy0aVkJSiu3Kbzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxHyGThF%2F2rUnWr2jKtwDCZ20La6jRZtUC8gMQBjZPDNRF3P9Vm5iINRWSGJ%2FnWNLW7fJ3jg9jMmsdg3G7C7YLvcaN2bpbm2AvefccvBGBbqmfJOFWp4RfUCo4x2ljw073SzkAlAVkWwBm0d9ZAgnJRaxj%2FQ1ktG2KXCCzXLp2HxM9gQmrzmko13a4L8WkRPE7t0tO%2BlULiHOm55d4dSBVseLrMnZaewRcbqpeLshuEW6O3Q2yMefjAn9pAtodjOWWDy4blwcizE1lUrot5jE8I9NM1QFSZdxgxiiP%2Bc0KfDdgmKwQEBgO%2BupsP8VZ8X0ldv34uCxiL%2FFEaDwnW1S9Qwrfyoato5nFswdEwV17RL1LHO0273rxAejMGTzBpqwZd30h0hI1Wiz05Rq4UGn48A7NxCC0Bgpz88O90hRoaK3nDmggXvZE0TZMkXTf4bASy9sFLwEqUAxnqcGa77O7EFsgmN62hx8p64mUEbjNlFskUPtG9WZhkc4rPhaMWEEw5G1bbF%2BTAYCIg9vPdQPriUVqAoyOVCh54bMjF2X9nZ0CZ0tOkYVqyIH3JCKWgQPK6wNbzFwynKqZAPVH%2B9OXJkdHiMIakp%2BAYXysGdhIG8AEeHT5rCBrfCFrDfiKGlsGV0e9LX5nnVrGo8wr8S5xAY6pgHiK8lqxVxEaTcCzsiiwrM%2B%2FrohQVyBcesZz7L5WAGttY1pM8XgtpEMQb1cuul9e1j4pNUm42vJ9MdnuakFLH9dXBB8xXcSNgdkX0cGCc1JgJYCuPlAh%2BDAlFPR4apyd8Q1OkHo7AxKJKNxZ%2FjR46EUW6Fx3qypjz62d3JoMuGsZFfJVk88gZ6n48%2BeDLmmRbU%2FkN8lYoFMDeupApgTcuUY6XCrnKJE&X-Amz-Signature=0c6f581b69b7cd437f88c415b13b0c3f83e25060a79d3b569e99dfc362b59b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZKNJ27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeWtHJ3fCHuuxQY2J%2FbzS%2FK3EVBpoFXhg7hr2WGRp8VAiANpI2fhBKwFNKg6qvpL0xlRwWTbnOxy0aVkJSiu3Kbzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxHyGThF%2F2rUnWr2jKtwDCZ20La6jRZtUC8gMQBjZPDNRF3P9Vm5iINRWSGJ%2FnWNLW7fJ3jg9jMmsdg3G7C7YLvcaN2bpbm2AvefccvBGBbqmfJOFWp4RfUCo4x2ljw073SzkAlAVkWwBm0d9ZAgnJRaxj%2FQ1ktG2KXCCzXLp2HxM9gQmrzmko13a4L8WkRPE7t0tO%2BlULiHOm55d4dSBVseLrMnZaewRcbqpeLshuEW6O3Q2yMefjAn9pAtodjOWWDy4blwcizE1lUrot5jE8I9NM1QFSZdxgxiiP%2Bc0KfDdgmKwQEBgO%2BupsP8VZ8X0ldv34uCxiL%2FFEaDwnW1S9Qwrfyoato5nFswdEwV17RL1LHO0273rxAejMGTzBpqwZd30h0hI1Wiz05Rq4UGn48A7NxCC0Bgpz88O90hRoaK3nDmggXvZE0TZMkXTf4bASy9sFLwEqUAxnqcGa77O7EFsgmN62hx8p64mUEbjNlFskUPtG9WZhkc4rPhaMWEEw5G1bbF%2BTAYCIg9vPdQPriUVqAoyOVCh54bMjF2X9nZ0CZ0tOkYVqyIH3JCKWgQPK6wNbzFwynKqZAPVH%2B9OXJkdHiMIakp%2BAYXysGdhIG8AEeHT5rCBrfCFrDfiKGlsGV0e9LX5nnVrGo8wr8S5xAY6pgHiK8lqxVxEaTcCzsiiwrM%2B%2FrohQVyBcesZz7L5WAGttY1pM8XgtpEMQb1cuul9e1j4pNUm42vJ9MdnuakFLH9dXBB8xXcSNgdkX0cGCc1JgJYCuPlAh%2BDAlFPR4apyd8Q1OkHo7AxKJKNxZ%2FjR46EUW6Fx3qypjz62d3JoMuGsZFfJVk88gZ6n48%2BeDLmmRbU%2FkN8lYoFMDeupApgTcuUY6XCrnKJE&X-Amz-Signature=c3c16679804d6a2047ec1dd292be2f6efd29b64ecbc53cb4f75eacb5a58db43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZKNJ27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeWtHJ3fCHuuxQY2J%2FbzS%2FK3EVBpoFXhg7hr2WGRp8VAiANpI2fhBKwFNKg6qvpL0xlRwWTbnOxy0aVkJSiu3Kbzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxHyGThF%2F2rUnWr2jKtwDCZ20La6jRZtUC8gMQBjZPDNRF3P9Vm5iINRWSGJ%2FnWNLW7fJ3jg9jMmsdg3G7C7YLvcaN2bpbm2AvefccvBGBbqmfJOFWp4RfUCo4x2ljw073SzkAlAVkWwBm0d9ZAgnJRaxj%2FQ1ktG2KXCCzXLp2HxM9gQmrzmko13a4L8WkRPE7t0tO%2BlULiHOm55d4dSBVseLrMnZaewRcbqpeLshuEW6O3Q2yMefjAn9pAtodjOWWDy4blwcizE1lUrot5jE8I9NM1QFSZdxgxiiP%2Bc0KfDdgmKwQEBgO%2BupsP8VZ8X0ldv34uCxiL%2FFEaDwnW1S9Qwrfyoato5nFswdEwV17RL1LHO0273rxAejMGTzBpqwZd30h0hI1Wiz05Rq4UGn48A7NxCC0Bgpz88O90hRoaK3nDmggXvZE0TZMkXTf4bASy9sFLwEqUAxnqcGa77O7EFsgmN62hx8p64mUEbjNlFskUPtG9WZhkc4rPhaMWEEw5G1bbF%2BTAYCIg9vPdQPriUVqAoyOVCh54bMjF2X9nZ0CZ0tOkYVqyIH3JCKWgQPK6wNbzFwynKqZAPVH%2B9OXJkdHiMIakp%2BAYXysGdhIG8AEeHT5rCBrfCFrDfiKGlsGV0e9LX5nnVrGo8wr8S5xAY6pgHiK8lqxVxEaTcCzsiiwrM%2B%2FrohQVyBcesZz7L5WAGttY1pM8XgtpEMQb1cuul9e1j4pNUm42vJ9MdnuakFLH9dXBB8xXcSNgdkX0cGCc1JgJYCuPlAh%2BDAlFPR4apyd8Q1OkHo7AxKJKNxZ%2FjR46EUW6Fx3qypjz62d3JoMuGsZFfJVk88gZ6n48%2BeDLmmRbU%2FkN8lYoFMDeupApgTcuUY6XCrnKJE&X-Amz-Signature=659987a0e12b510028afb35c1532c5f524b7278594c723b12efb8a669a06491f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZKNJ27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeWtHJ3fCHuuxQY2J%2FbzS%2FK3EVBpoFXhg7hr2WGRp8VAiANpI2fhBKwFNKg6qvpL0xlRwWTbnOxy0aVkJSiu3Kbzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxHyGThF%2F2rUnWr2jKtwDCZ20La6jRZtUC8gMQBjZPDNRF3P9Vm5iINRWSGJ%2FnWNLW7fJ3jg9jMmsdg3G7C7YLvcaN2bpbm2AvefccvBGBbqmfJOFWp4RfUCo4x2ljw073SzkAlAVkWwBm0d9ZAgnJRaxj%2FQ1ktG2KXCCzXLp2HxM9gQmrzmko13a4L8WkRPE7t0tO%2BlULiHOm55d4dSBVseLrMnZaewRcbqpeLshuEW6O3Q2yMefjAn9pAtodjOWWDy4blwcizE1lUrot5jE8I9NM1QFSZdxgxiiP%2Bc0KfDdgmKwQEBgO%2BupsP8VZ8X0ldv34uCxiL%2FFEaDwnW1S9Qwrfyoato5nFswdEwV17RL1LHO0273rxAejMGTzBpqwZd30h0hI1Wiz05Rq4UGn48A7NxCC0Bgpz88O90hRoaK3nDmggXvZE0TZMkXTf4bASy9sFLwEqUAxnqcGa77O7EFsgmN62hx8p64mUEbjNlFskUPtG9WZhkc4rPhaMWEEw5G1bbF%2BTAYCIg9vPdQPriUVqAoyOVCh54bMjF2X9nZ0CZ0tOkYVqyIH3JCKWgQPK6wNbzFwynKqZAPVH%2B9OXJkdHiMIakp%2BAYXysGdhIG8AEeHT5rCBrfCFrDfiKGlsGV0e9LX5nnVrGo8wr8S5xAY6pgHiK8lqxVxEaTcCzsiiwrM%2B%2FrohQVyBcesZz7L5WAGttY1pM8XgtpEMQb1cuul9e1j4pNUm42vJ9MdnuakFLH9dXBB8xXcSNgdkX0cGCc1JgJYCuPlAh%2BDAlFPR4apyd8Q1OkHo7AxKJKNxZ%2FjR46EUW6Fx3qypjz62d3JoMuGsZFfJVk88gZ6n48%2BeDLmmRbU%2FkN8lYoFMDeupApgTcuUY6XCrnKJE&X-Amz-Signature=4d10ab4e952bf91e8ce1a3dc55ba37d434505653dd52ddd2032cce1bfab64eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZKNJ27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeWtHJ3fCHuuxQY2J%2FbzS%2FK3EVBpoFXhg7hr2WGRp8VAiANpI2fhBKwFNKg6qvpL0xlRwWTbnOxy0aVkJSiu3Kbzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxHyGThF%2F2rUnWr2jKtwDCZ20La6jRZtUC8gMQBjZPDNRF3P9Vm5iINRWSGJ%2FnWNLW7fJ3jg9jMmsdg3G7C7YLvcaN2bpbm2AvefccvBGBbqmfJOFWp4RfUCo4x2ljw073SzkAlAVkWwBm0d9ZAgnJRaxj%2FQ1ktG2KXCCzXLp2HxM9gQmrzmko13a4L8WkRPE7t0tO%2BlULiHOm55d4dSBVseLrMnZaewRcbqpeLshuEW6O3Q2yMefjAn9pAtodjOWWDy4blwcizE1lUrot5jE8I9NM1QFSZdxgxiiP%2Bc0KfDdgmKwQEBgO%2BupsP8VZ8X0ldv34uCxiL%2FFEaDwnW1S9Qwrfyoato5nFswdEwV17RL1LHO0273rxAejMGTzBpqwZd30h0hI1Wiz05Rq4UGn48A7NxCC0Bgpz88O90hRoaK3nDmggXvZE0TZMkXTf4bASy9sFLwEqUAxnqcGa77O7EFsgmN62hx8p64mUEbjNlFskUPtG9WZhkc4rPhaMWEEw5G1bbF%2BTAYCIg9vPdQPriUVqAoyOVCh54bMjF2X9nZ0CZ0tOkYVqyIH3JCKWgQPK6wNbzFwynKqZAPVH%2B9OXJkdHiMIakp%2BAYXysGdhIG8AEeHT5rCBrfCFrDfiKGlsGV0e9LX5nnVrGo8wr8S5xAY6pgHiK8lqxVxEaTcCzsiiwrM%2B%2FrohQVyBcesZz7L5WAGttY1pM8XgtpEMQb1cuul9e1j4pNUm42vJ9MdnuakFLH9dXBB8xXcSNgdkX0cGCc1JgJYCuPlAh%2BDAlFPR4apyd8Q1OkHo7AxKJKNxZ%2FjR46EUW6Fx3qypjz62d3JoMuGsZFfJVk88gZ6n48%2BeDLmmRbU%2FkN8lYoFMDeupApgTcuUY6XCrnKJE&X-Amz-Signature=7f64b165076d4c7066ca6e76535f067b444a337a81da61bfdc4d202794806616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZKNJ27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeWtHJ3fCHuuxQY2J%2FbzS%2FK3EVBpoFXhg7hr2WGRp8VAiANpI2fhBKwFNKg6qvpL0xlRwWTbnOxy0aVkJSiu3Kbzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxHyGThF%2F2rUnWr2jKtwDCZ20La6jRZtUC8gMQBjZPDNRF3P9Vm5iINRWSGJ%2FnWNLW7fJ3jg9jMmsdg3G7C7YLvcaN2bpbm2AvefccvBGBbqmfJOFWp4RfUCo4x2ljw073SzkAlAVkWwBm0d9ZAgnJRaxj%2FQ1ktG2KXCCzXLp2HxM9gQmrzmko13a4L8WkRPE7t0tO%2BlULiHOm55d4dSBVseLrMnZaewRcbqpeLshuEW6O3Q2yMefjAn9pAtodjOWWDy4blwcizE1lUrot5jE8I9NM1QFSZdxgxiiP%2Bc0KfDdgmKwQEBgO%2BupsP8VZ8X0ldv34uCxiL%2FFEaDwnW1S9Qwrfyoato5nFswdEwV17RL1LHO0273rxAejMGTzBpqwZd30h0hI1Wiz05Rq4UGn48A7NxCC0Bgpz88O90hRoaK3nDmggXvZE0TZMkXTf4bASy9sFLwEqUAxnqcGa77O7EFsgmN62hx8p64mUEbjNlFskUPtG9WZhkc4rPhaMWEEw5G1bbF%2BTAYCIg9vPdQPriUVqAoyOVCh54bMjF2X9nZ0CZ0tOkYVqyIH3JCKWgQPK6wNbzFwynKqZAPVH%2B9OXJkdHiMIakp%2BAYXysGdhIG8AEeHT5rCBrfCFrDfiKGlsGV0e9LX5nnVrGo8wr8S5xAY6pgHiK8lqxVxEaTcCzsiiwrM%2B%2FrohQVyBcesZz7L5WAGttY1pM8XgtpEMQb1cuul9e1j4pNUm42vJ9MdnuakFLH9dXBB8xXcSNgdkX0cGCc1JgJYCuPlAh%2BDAlFPR4apyd8Q1OkHo7AxKJKNxZ%2FjR46EUW6Fx3qypjz62d3JoMuGsZFfJVk88gZ6n48%2BeDLmmRbU%2FkN8lYoFMDeupApgTcuUY6XCrnKJE&X-Amz-Signature=23ea24bcab7ceba1019ddc6f928f995580ada75e907b172eb2b586c0ff30bdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZKNJ27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeWtHJ3fCHuuxQY2J%2FbzS%2FK3EVBpoFXhg7hr2WGRp8VAiANpI2fhBKwFNKg6qvpL0xlRwWTbnOxy0aVkJSiu3Kbzyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxHyGThF%2F2rUnWr2jKtwDCZ20La6jRZtUC8gMQBjZPDNRF3P9Vm5iINRWSGJ%2FnWNLW7fJ3jg9jMmsdg3G7C7YLvcaN2bpbm2AvefccvBGBbqmfJOFWp4RfUCo4x2ljw073SzkAlAVkWwBm0d9ZAgnJRaxj%2FQ1ktG2KXCCzXLp2HxM9gQmrzmko13a4L8WkRPE7t0tO%2BlULiHOm55d4dSBVseLrMnZaewRcbqpeLshuEW6O3Q2yMefjAn9pAtodjOWWDy4blwcizE1lUrot5jE8I9NM1QFSZdxgxiiP%2Bc0KfDdgmKwQEBgO%2BupsP8VZ8X0ldv34uCxiL%2FFEaDwnW1S9Qwrfyoato5nFswdEwV17RL1LHO0273rxAejMGTzBpqwZd30h0hI1Wiz05Rq4UGn48A7NxCC0Bgpz88O90hRoaK3nDmggXvZE0TZMkXTf4bASy9sFLwEqUAxnqcGa77O7EFsgmN62hx8p64mUEbjNlFskUPtG9WZhkc4rPhaMWEEw5G1bbF%2BTAYCIg9vPdQPriUVqAoyOVCh54bMjF2X9nZ0CZ0tOkYVqyIH3JCKWgQPK6wNbzFwynKqZAPVH%2B9OXJkdHiMIakp%2BAYXysGdhIG8AEeHT5rCBrfCFrDfiKGlsGV0e9LX5nnVrGo8wr8S5xAY6pgHiK8lqxVxEaTcCzsiiwrM%2B%2FrohQVyBcesZz7L5WAGttY1pM8XgtpEMQb1cuul9e1j4pNUm42vJ9MdnuakFLH9dXBB8xXcSNgdkX0cGCc1JgJYCuPlAh%2BDAlFPR4apyd8Q1OkHo7AxKJKNxZ%2FjR46EUW6Fx3qypjz62d3JoMuGsZFfJVk88gZ6n48%2BeDLmmRbU%2FkN8lYoFMDeupApgTcuUY6XCrnKJE&X-Amz-Signature=cbbbe15f98f2becfe8c6821fab81ebf19c48fc63a717cbe29a40cca6ff0ba6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
