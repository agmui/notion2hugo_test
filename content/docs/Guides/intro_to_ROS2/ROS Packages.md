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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DL42J4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD785qh9nb3iZOnIkHLsmDLFuMRuA%2F8M6MJWqYXLYn1twIhALJsZLD3nSDgH9REcix6oIXU893%2BGu431BAoo80Y5qbGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FQKYdN2KbPYHkfUq3AOW1FHPDB6HcCsfQ8b0JW7VzZ2PASE8J%2FTxFmpLviEbgOZeDil9r31Gi05N%2FYuvnnpOAUH%2BYCHfMgNdZCi5ZUxK2LjmqycSpSgKAIScR9PxPSjxyuvFTD9ZaGs7SFYcq0mNxO3OD2fL6ASh7IIIBk4dy7Oo2op25MM9N4R3mmUXYorHGQd%2FgFjwx5QXa7EnsB93MEZF55wzh7SsVkNnD7IfiqE01Io120qhlIM0h750sqFBj0%2B3RnPTrg5CFYkA%2FcV1K5sNeTWKYK0%2FjEpwNKB1e%2BvYt1DMpnVAUxaqPKCTAj1LnU0fBKMQIRCco%2F7eNjRrczou3By%2F%2B4P3yNIyuD34vk6Zr2wD43VrQ8r2FBFoBifBBGvaenMxjBIP8zCQQoRmKLrnYzW8U2FAvbbvAlb1j7kuBYyCpEGTrQ%2BIVtYCm6ZQ6iDN5mkruPMRTNBXuyGjje5Y43yOzR3b5UavpoKB0jMLmNTFWhhHDUMnPFcByD0R4e3hIqW48OuE7ONbvL%2BL%2BIaZXeB1dWjb40mMcerKKIAoji4q1OL4kjnKrwbdGMmrKQilgfke7LoFq%2FzxiYspOSniKWYpN8uGaUemS7BpVB9bU2bY7K6AmceAGPuacxTYhT0sO%2Fh94cYBdzCFuvK8BjqkAfA8rUK3YizFv%2FE4HM%2FrfAhDbqvRh7PIRxP%2FrozCOz%2Bi5IVm89vTZyVMTPCL3Wwv1J5CMggXqPyyFVJunKhmDm3ydj4uEb5HPOBEbGcAJeYcvv42ybnJQD1qxuxJuEOt43uq3Iy%2FJy9HIZKNhZD7yC%2BBCCvCax7oYo0CApJiAkztr%2FzdLqGwEp%2FMMeCK5nAKvTvREWVw3VMyyToh6Rdd7FteIQ9e&X-Amz-Signature=353fb1a59f391553d9f6e57d74860986da3a121115c84db96879bd85a6a77406&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DL42J4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD785qh9nb3iZOnIkHLsmDLFuMRuA%2F8M6MJWqYXLYn1twIhALJsZLD3nSDgH9REcix6oIXU893%2BGu431BAoo80Y5qbGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FQKYdN2KbPYHkfUq3AOW1FHPDB6HcCsfQ8b0JW7VzZ2PASE8J%2FTxFmpLviEbgOZeDil9r31Gi05N%2FYuvnnpOAUH%2BYCHfMgNdZCi5ZUxK2LjmqycSpSgKAIScR9PxPSjxyuvFTD9ZaGs7SFYcq0mNxO3OD2fL6ASh7IIIBk4dy7Oo2op25MM9N4R3mmUXYorHGQd%2FgFjwx5QXa7EnsB93MEZF55wzh7SsVkNnD7IfiqE01Io120qhlIM0h750sqFBj0%2B3RnPTrg5CFYkA%2FcV1K5sNeTWKYK0%2FjEpwNKB1e%2BvYt1DMpnVAUxaqPKCTAj1LnU0fBKMQIRCco%2F7eNjRrczou3By%2F%2B4P3yNIyuD34vk6Zr2wD43VrQ8r2FBFoBifBBGvaenMxjBIP8zCQQoRmKLrnYzW8U2FAvbbvAlb1j7kuBYyCpEGTrQ%2BIVtYCm6ZQ6iDN5mkruPMRTNBXuyGjje5Y43yOzR3b5UavpoKB0jMLmNTFWhhHDUMnPFcByD0R4e3hIqW48OuE7ONbvL%2BL%2BIaZXeB1dWjb40mMcerKKIAoji4q1OL4kjnKrwbdGMmrKQilgfke7LoFq%2FzxiYspOSniKWYpN8uGaUemS7BpVB9bU2bY7K6AmceAGPuacxTYhT0sO%2Fh94cYBdzCFuvK8BjqkAfA8rUK3YizFv%2FE4HM%2FrfAhDbqvRh7PIRxP%2FrozCOz%2Bi5IVm89vTZyVMTPCL3Wwv1J5CMggXqPyyFVJunKhmDm3ydj4uEb5HPOBEbGcAJeYcvv42ybnJQD1qxuxJuEOt43uq3Iy%2FJy9HIZKNhZD7yC%2BBCCvCax7oYo0CApJiAkztr%2FzdLqGwEp%2FMMeCK5nAKvTvREWVw3VMyyToh6Rdd7FteIQ9e&X-Amz-Signature=49f4630a2a3916938cc923d89901168fb6c6a5074574b397a47fff20178b1bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DL42J4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD785qh9nb3iZOnIkHLsmDLFuMRuA%2F8M6MJWqYXLYn1twIhALJsZLD3nSDgH9REcix6oIXU893%2BGu431BAoo80Y5qbGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FQKYdN2KbPYHkfUq3AOW1FHPDB6HcCsfQ8b0JW7VzZ2PASE8J%2FTxFmpLviEbgOZeDil9r31Gi05N%2FYuvnnpOAUH%2BYCHfMgNdZCi5ZUxK2LjmqycSpSgKAIScR9PxPSjxyuvFTD9ZaGs7SFYcq0mNxO3OD2fL6ASh7IIIBk4dy7Oo2op25MM9N4R3mmUXYorHGQd%2FgFjwx5QXa7EnsB93MEZF55wzh7SsVkNnD7IfiqE01Io120qhlIM0h750sqFBj0%2B3RnPTrg5CFYkA%2FcV1K5sNeTWKYK0%2FjEpwNKB1e%2BvYt1DMpnVAUxaqPKCTAj1LnU0fBKMQIRCco%2F7eNjRrczou3By%2F%2B4P3yNIyuD34vk6Zr2wD43VrQ8r2FBFoBifBBGvaenMxjBIP8zCQQoRmKLrnYzW8U2FAvbbvAlb1j7kuBYyCpEGTrQ%2BIVtYCm6ZQ6iDN5mkruPMRTNBXuyGjje5Y43yOzR3b5UavpoKB0jMLmNTFWhhHDUMnPFcByD0R4e3hIqW48OuE7ONbvL%2BL%2BIaZXeB1dWjb40mMcerKKIAoji4q1OL4kjnKrwbdGMmrKQilgfke7LoFq%2FzxiYspOSniKWYpN8uGaUemS7BpVB9bU2bY7K6AmceAGPuacxTYhT0sO%2Fh94cYBdzCFuvK8BjqkAfA8rUK3YizFv%2FE4HM%2FrfAhDbqvRh7PIRxP%2FrozCOz%2Bi5IVm89vTZyVMTPCL3Wwv1J5CMggXqPyyFVJunKhmDm3ydj4uEb5HPOBEbGcAJeYcvv42ybnJQD1qxuxJuEOt43uq3Iy%2FJy9HIZKNhZD7yC%2BBCCvCax7oYo0CApJiAkztr%2FzdLqGwEp%2FMMeCK5nAKvTvREWVw3VMyyToh6Rdd7FteIQ9e&X-Amz-Signature=39054fc0a0a1bf7557d17dd5969a2c1992f9cc2aa1e1dc7915222e266a15960d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DL42J4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD785qh9nb3iZOnIkHLsmDLFuMRuA%2F8M6MJWqYXLYn1twIhALJsZLD3nSDgH9REcix6oIXU893%2BGu431BAoo80Y5qbGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FQKYdN2KbPYHkfUq3AOW1FHPDB6HcCsfQ8b0JW7VzZ2PASE8J%2FTxFmpLviEbgOZeDil9r31Gi05N%2FYuvnnpOAUH%2BYCHfMgNdZCi5ZUxK2LjmqycSpSgKAIScR9PxPSjxyuvFTD9ZaGs7SFYcq0mNxO3OD2fL6ASh7IIIBk4dy7Oo2op25MM9N4R3mmUXYorHGQd%2FgFjwx5QXa7EnsB93MEZF55wzh7SsVkNnD7IfiqE01Io120qhlIM0h750sqFBj0%2B3RnPTrg5CFYkA%2FcV1K5sNeTWKYK0%2FjEpwNKB1e%2BvYt1DMpnVAUxaqPKCTAj1LnU0fBKMQIRCco%2F7eNjRrczou3By%2F%2B4P3yNIyuD34vk6Zr2wD43VrQ8r2FBFoBifBBGvaenMxjBIP8zCQQoRmKLrnYzW8U2FAvbbvAlb1j7kuBYyCpEGTrQ%2BIVtYCm6ZQ6iDN5mkruPMRTNBXuyGjje5Y43yOzR3b5UavpoKB0jMLmNTFWhhHDUMnPFcByD0R4e3hIqW48OuE7ONbvL%2BL%2BIaZXeB1dWjb40mMcerKKIAoji4q1OL4kjnKrwbdGMmrKQilgfke7LoFq%2FzxiYspOSniKWYpN8uGaUemS7BpVB9bU2bY7K6AmceAGPuacxTYhT0sO%2Fh94cYBdzCFuvK8BjqkAfA8rUK3YizFv%2FE4HM%2FrfAhDbqvRh7PIRxP%2FrozCOz%2Bi5IVm89vTZyVMTPCL3Wwv1J5CMggXqPyyFVJunKhmDm3ydj4uEb5HPOBEbGcAJeYcvv42ybnJQD1qxuxJuEOt43uq3Iy%2FJy9HIZKNhZD7yC%2BBCCvCax7oYo0CApJiAkztr%2FzdLqGwEp%2FMMeCK5nAKvTvREWVw3VMyyToh6Rdd7FteIQ9e&X-Amz-Signature=1cbec05521526e12a4f0f8dc2d0cf5a1f592d33d98473c73a6bad11337d4bc0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DL42J4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD785qh9nb3iZOnIkHLsmDLFuMRuA%2F8M6MJWqYXLYn1twIhALJsZLD3nSDgH9REcix6oIXU893%2BGu431BAoo80Y5qbGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FQKYdN2KbPYHkfUq3AOW1FHPDB6HcCsfQ8b0JW7VzZ2PASE8J%2FTxFmpLviEbgOZeDil9r31Gi05N%2FYuvnnpOAUH%2BYCHfMgNdZCi5ZUxK2LjmqycSpSgKAIScR9PxPSjxyuvFTD9ZaGs7SFYcq0mNxO3OD2fL6ASh7IIIBk4dy7Oo2op25MM9N4R3mmUXYorHGQd%2FgFjwx5QXa7EnsB93MEZF55wzh7SsVkNnD7IfiqE01Io120qhlIM0h750sqFBj0%2B3RnPTrg5CFYkA%2FcV1K5sNeTWKYK0%2FjEpwNKB1e%2BvYt1DMpnVAUxaqPKCTAj1LnU0fBKMQIRCco%2F7eNjRrczou3By%2F%2B4P3yNIyuD34vk6Zr2wD43VrQ8r2FBFoBifBBGvaenMxjBIP8zCQQoRmKLrnYzW8U2FAvbbvAlb1j7kuBYyCpEGTrQ%2BIVtYCm6ZQ6iDN5mkruPMRTNBXuyGjje5Y43yOzR3b5UavpoKB0jMLmNTFWhhHDUMnPFcByD0R4e3hIqW48OuE7ONbvL%2BL%2BIaZXeB1dWjb40mMcerKKIAoji4q1OL4kjnKrwbdGMmrKQilgfke7LoFq%2FzxiYspOSniKWYpN8uGaUemS7BpVB9bU2bY7K6AmceAGPuacxTYhT0sO%2Fh94cYBdzCFuvK8BjqkAfA8rUK3YizFv%2FE4HM%2FrfAhDbqvRh7PIRxP%2FrozCOz%2Bi5IVm89vTZyVMTPCL3Wwv1J5CMggXqPyyFVJunKhmDm3ydj4uEb5HPOBEbGcAJeYcvv42ybnJQD1qxuxJuEOt43uq3Iy%2FJy9HIZKNhZD7yC%2BBCCvCax7oYo0CApJiAkztr%2FzdLqGwEp%2FMMeCK5nAKvTvREWVw3VMyyToh6Rdd7FteIQ9e&X-Amz-Signature=353067b2224d91599339acea6f13c6f64dd7278eb425887b73ed9447e76e06bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DL42J4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD785qh9nb3iZOnIkHLsmDLFuMRuA%2F8M6MJWqYXLYn1twIhALJsZLD3nSDgH9REcix6oIXU893%2BGu431BAoo80Y5qbGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FQKYdN2KbPYHkfUq3AOW1FHPDB6HcCsfQ8b0JW7VzZ2PASE8J%2FTxFmpLviEbgOZeDil9r31Gi05N%2FYuvnnpOAUH%2BYCHfMgNdZCi5ZUxK2LjmqycSpSgKAIScR9PxPSjxyuvFTD9ZaGs7SFYcq0mNxO3OD2fL6ASh7IIIBk4dy7Oo2op25MM9N4R3mmUXYorHGQd%2FgFjwx5QXa7EnsB93MEZF55wzh7SsVkNnD7IfiqE01Io120qhlIM0h750sqFBj0%2B3RnPTrg5CFYkA%2FcV1K5sNeTWKYK0%2FjEpwNKB1e%2BvYt1DMpnVAUxaqPKCTAj1LnU0fBKMQIRCco%2F7eNjRrczou3By%2F%2B4P3yNIyuD34vk6Zr2wD43VrQ8r2FBFoBifBBGvaenMxjBIP8zCQQoRmKLrnYzW8U2FAvbbvAlb1j7kuBYyCpEGTrQ%2BIVtYCm6ZQ6iDN5mkruPMRTNBXuyGjje5Y43yOzR3b5UavpoKB0jMLmNTFWhhHDUMnPFcByD0R4e3hIqW48OuE7ONbvL%2BL%2BIaZXeB1dWjb40mMcerKKIAoji4q1OL4kjnKrwbdGMmrKQilgfke7LoFq%2FzxiYspOSniKWYpN8uGaUemS7BpVB9bU2bY7K6AmceAGPuacxTYhT0sO%2Fh94cYBdzCFuvK8BjqkAfA8rUK3YizFv%2FE4HM%2FrfAhDbqvRh7PIRxP%2FrozCOz%2Bi5IVm89vTZyVMTPCL3Wwv1J5CMggXqPyyFVJunKhmDm3ydj4uEb5HPOBEbGcAJeYcvv42ybnJQD1qxuxJuEOt43uq3Iy%2FJy9HIZKNhZD7yC%2BBCCvCax7oYo0CApJiAkztr%2FzdLqGwEp%2FMMeCK5nAKvTvREWVw3VMyyToh6Rdd7FteIQ9e&X-Amz-Signature=3740c9ec4ccb2368aec7e4d3d02e9df1251d74204cd1d44316a21d3aa160855e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DL42J4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD785qh9nb3iZOnIkHLsmDLFuMRuA%2F8M6MJWqYXLYn1twIhALJsZLD3nSDgH9REcix6oIXU893%2BGu431BAoo80Y5qbGKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FQKYdN2KbPYHkfUq3AOW1FHPDB6HcCsfQ8b0JW7VzZ2PASE8J%2FTxFmpLviEbgOZeDil9r31Gi05N%2FYuvnnpOAUH%2BYCHfMgNdZCi5ZUxK2LjmqycSpSgKAIScR9PxPSjxyuvFTD9ZaGs7SFYcq0mNxO3OD2fL6ASh7IIIBk4dy7Oo2op25MM9N4R3mmUXYorHGQd%2FgFjwx5QXa7EnsB93MEZF55wzh7SsVkNnD7IfiqE01Io120qhlIM0h750sqFBj0%2B3RnPTrg5CFYkA%2FcV1K5sNeTWKYK0%2FjEpwNKB1e%2BvYt1DMpnVAUxaqPKCTAj1LnU0fBKMQIRCco%2F7eNjRrczou3By%2F%2B4P3yNIyuD34vk6Zr2wD43VrQ8r2FBFoBifBBGvaenMxjBIP8zCQQoRmKLrnYzW8U2FAvbbvAlb1j7kuBYyCpEGTrQ%2BIVtYCm6ZQ6iDN5mkruPMRTNBXuyGjje5Y43yOzR3b5UavpoKB0jMLmNTFWhhHDUMnPFcByD0R4e3hIqW48OuE7ONbvL%2BL%2BIaZXeB1dWjb40mMcerKKIAoji4q1OL4kjnKrwbdGMmrKQilgfke7LoFq%2FzxiYspOSniKWYpN8uGaUemS7BpVB9bU2bY7K6AmceAGPuacxTYhT0sO%2Fh94cYBdzCFuvK8BjqkAfA8rUK3YizFv%2FE4HM%2FrfAhDbqvRh7PIRxP%2FrozCOz%2Bi5IVm89vTZyVMTPCL3Wwv1J5CMggXqPyyFVJunKhmDm3ydj4uEb5HPOBEbGcAJeYcvv42ybnJQD1qxuxJuEOt43uq3Iy%2FJy9HIZKNhZD7yC%2BBCCvCax7oYo0CApJiAkztr%2FzdLqGwEp%2FMMeCK5nAKvTvREWVw3VMyyToh6Rdd7FteIQ9e&X-Amz-Signature=7fcba18fd61b63c2a61d7598e6577d79a886d979b5b0058fc536fbe1a8dacea5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
