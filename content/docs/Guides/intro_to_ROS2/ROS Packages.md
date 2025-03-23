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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZKSUKV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFsIWhsy2PEiq6oIKQ6GnSc7TfqoGgo4gSSO1q9PU5BAiAlVO5XPgFsay7SdzREtPfXNSKlZIHkfUUM5Ku8TVzotiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwfB4Y%2BgQ6VOovsBKtwDGKuFybuU%2Fm3jvzclGR0zL07%2FSFpDoYQ%2B6sot7DGrss92yX6e99WR1lgr%2Bt%2FnZnpsxxiOhbKbI9T%2FGFkQoj5A1yds19xWOFesTeWbrjhDNkUrbfBzIFUsYFGRL0iCZNBXeOEpNXR1Bfqh%2Fhm7XHw%2B1kz29mUL%2FM4Zh3kIo%2BX9FFPBssLLOBCWfEexrGxjv33BVuEXjEP0NhIv0wRmko8fr4mTDWt%2F8rEZrQkNt8d8ZqYKfHmwcRtW6G2tb4I6a9JPQDlbTeFi2Y5cOTjdt5yz%2Bw1N%2ByvouDPQETw3NRcK0g4GPf7D3xL2b%2BCF8sD23TKsMjnH0vwJSAY7UQ1W7fzaXFrwLmR9DV39%2Fn7X88vrISBnJnpT%2FtYHXMi9jeVY%2F5Yspy9vbJWG138Y3CJNMCNVHc3BlqlHEaMKzU%2BRPQPVNP0aAtkf3cy9yhVFHlc7L5Dv4CEwRMVLX0tRef9QyhwVyknXh7UeTVoZbvMC9ogpCdGpVN57BNVEY314dj5zn8MeYDkHoGLlD06uQtnig4mSxFiigM2h22ZTO6AVnmv5ekQuJHU9BPjyynJr0goEjrYAAiawMAYWamgA8GSl0hD8K8rehWkA9w7C1dDx8Bmk5oX6WWZB9Lq5yq5qyc0w5vL%2BvgY6pgH1%2B1rC6IvBEe0e90zZg2NdCQLfJfxw1H%2Bs1Zp2MESq7NDZ9amEK3WIheDfNSGDrK2eNgAdR8Wo9Jga1Hji0Kx%2BMj38WLjOlRv8K%2BIsf1S2CU0tf42crgVqyEN1%2BMbr1saPuKzfeqwqS15t7iHMgDU%2F%2FIxPaSlJpG1GNo6Hi5DTXnXcU%2BXYjb0Q4zi32IZIRe%2F1Uu9vYRhkfZ6SUJQyZ5OXyqw56fHE&X-Amz-Signature=4dce27e9254b37a0d960d8ed0a632bb751653b47f31b3d8436ebb870d0eb8bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZKSUKV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFsIWhsy2PEiq6oIKQ6GnSc7TfqoGgo4gSSO1q9PU5BAiAlVO5XPgFsay7SdzREtPfXNSKlZIHkfUUM5Ku8TVzotiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwfB4Y%2BgQ6VOovsBKtwDGKuFybuU%2Fm3jvzclGR0zL07%2FSFpDoYQ%2B6sot7DGrss92yX6e99WR1lgr%2Bt%2FnZnpsxxiOhbKbI9T%2FGFkQoj5A1yds19xWOFesTeWbrjhDNkUrbfBzIFUsYFGRL0iCZNBXeOEpNXR1Bfqh%2Fhm7XHw%2B1kz29mUL%2FM4Zh3kIo%2BX9FFPBssLLOBCWfEexrGxjv33BVuEXjEP0NhIv0wRmko8fr4mTDWt%2F8rEZrQkNt8d8ZqYKfHmwcRtW6G2tb4I6a9JPQDlbTeFi2Y5cOTjdt5yz%2Bw1N%2ByvouDPQETw3NRcK0g4GPf7D3xL2b%2BCF8sD23TKsMjnH0vwJSAY7UQ1W7fzaXFrwLmR9DV39%2Fn7X88vrISBnJnpT%2FtYHXMi9jeVY%2F5Yspy9vbJWG138Y3CJNMCNVHc3BlqlHEaMKzU%2BRPQPVNP0aAtkf3cy9yhVFHlc7L5Dv4CEwRMVLX0tRef9QyhwVyknXh7UeTVoZbvMC9ogpCdGpVN57BNVEY314dj5zn8MeYDkHoGLlD06uQtnig4mSxFiigM2h22ZTO6AVnmv5ekQuJHU9BPjyynJr0goEjrYAAiawMAYWamgA8GSl0hD8K8rehWkA9w7C1dDx8Bmk5oX6WWZB9Lq5yq5qyc0w5vL%2BvgY6pgH1%2B1rC6IvBEe0e90zZg2NdCQLfJfxw1H%2Bs1Zp2MESq7NDZ9amEK3WIheDfNSGDrK2eNgAdR8Wo9Jga1Hji0Kx%2BMj38WLjOlRv8K%2BIsf1S2CU0tf42crgVqyEN1%2BMbr1saPuKzfeqwqS15t7iHMgDU%2F%2FIxPaSlJpG1GNo6Hi5DTXnXcU%2BXYjb0Q4zi32IZIRe%2F1Uu9vYRhkfZ6SUJQyZ5OXyqw56fHE&X-Amz-Signature=41d92e24e8f713567687bf0fd2b5201f32c92eafb271fcc37bc2863045843cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZKSUKV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFsIWhsy2PEiq6oIKQ6GnSc7TfqoGgo4gSSO1q9PU5BAiAlVO5XPgFsay7SdzREtPfXNSKlZIHkfUUM5Ku8TVzotiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwfB4Y%2BgQ6VOovsBKtwDGKuFybuU%2Fm3jvzclGR0zL07%2FSFpDoYQ%2B6sot7DGrss92yX6e99WR1lgr%2Bt%2FnZnpsxxiOhbKbI9T%2FGFkQoj5A1yds19xWOFesTeWbrjhDNkUrbfBzIFUsYFGRL0iCZNBXeOEpNXR1Bfqh%2Fhm7XHw%2B1kz29mUL%2FM4Zh3kIo%2BX9FFPBssLLOBCWfEexrGxjv33BVuEXjEP0NhIv0wRmko8fr4mTDWt%2F8rEZrQkNt8d8ZqYKfHmwcRtW6G2tb4I6a9JPQDlbTeFi2Y5cOTjdt5yz%2Bw1N%2ByvouDPQETw3NRcK0g4GPf7D3xL2b%2BCF8sD23TKsMjnH0vwJSAY7UQ1W7fzaXFrwLmR9DV39%2Fn7X88vrISBnJnpT%2FtYHXMi9jeVY%2F5Yspy9vbJWG138Y3CJNMCNVHc3BlqlHEaMKzU%2BRPQPVNP0aAtkf3cy9yhVFHlc7L5Dv4CEwRMVLX0tRef9QyhwVyknXh7UeTVoZbvMC9ogpCdGpVN57BNVEY314dj5zn8MeYDkHoGLlD06uQtnig4mSxFiigM2h22ZTO6AVnmv5ekQuJHU9BPjyynJr0goEjrYAAiawMAYWamgA8GSl0hD8K8rehWkA9w7C1dDx8Bmk5oX6WWZB9Lq5yq5qyc0w5vL%2BvgY6pgH1%2B1rC6IvBEe0e90zZg2NdCQLfJfxw1H%2Bs1Zp2MESq7NDZ9amEK3WIheDfNSGDrK2eNgAdR8Wo9Jga1Hji0Kx%2BMj38WLjOlRv8K%2BIsf1S2CU0tf42crgVqyEN1%2BMbr1saPuKzfeqwqS15t7iHMgDU%2F%2FIxPaSlJpG1GNo6Hi5DTXnXcU%2BXYjb0Q4zi32IZIRe%2F1Uu9vYRhkfZ6SUJQyZ5OXyqw56fHE&X-Amz-Signature=a07fd393882cb17939ee979d114300b10e76a62eb425c276656c4b6c86107b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZKSUKV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFsIWhsy2PEiq6oIKQ6GnSc7TfqoGgo4gSSO1q9PU5BAiAlVO5XPgFsay7SdzREtPfXNSKlZIHkfUUM5Ku8TVzotiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwfB4Y%2BgQ6VOovsBKtwDGKuFybuU%2Fm3jvzclGR0zL07%2FSFpDoYQ%2B6sot7DGrss92yX6e99WR1lgr%2Bt%2FnZnpsxxiOhbKbI9T%2FGFkQoj5A1yds19xWOFesTeWbrjhDNkUrbfBzIFUsYFGRL0iCZNBXeOEpNXR1Bfqh%2Fhm7XHw%2B1kz29mUL%2FM4Zh3kIo%2BX9FFPBssLLOBCWfEexrGxjv33BVuEXjEP0NhIv0wRmko8fr4mTDWt%2F8rEZrQkNt8d8ZqYKfHmwcRtW6G2tb4I6a9JPQDlbTeFi2Y5cOTjdt5yz%2Bw1N%2ByvouDPQETw3NRcK0g4GPf7D3xL2b%2BCF8sD23TKsMjnH0vwJSAY7UQ1W7fzaXFrwLmR9DV39%2Fn7X88vrISBnJnpT%2FtYHXMi9jeVY%2F5Yspy9vbJWG138Y3CJNMCNVHc3BlqlHEaMKzU%2BRPQPVNP0aAtkf3cy9yhVFHlc7L5Dv4CEwRMVLX0tRef9QyhwVyknXh7UeTVoZbvMC9ogpCdGpVN57BNVEY314dj5zn8MeYDkHoGLlD06uQtnig4mSxFiigM2h22ZTO6AVnmv5ekQuJHU9BPjyynJr0goEjrYAAiawMAYWamgA8GSl0hD8K8rehWkA9w7C1dDx8Bmk5oX6WWZB9Lq5yq5qyc0w5vL%2BvgY6pgH1%2B1rC6IvBEe0e90zZg2NdCQLfJfxw1H%2Bs1Zp2MESq7NDZ9amEK3WIheDfNSGDrK2eNgAdR8Wo9Jga1Hji0Kx%2BMj38WLjOlRv8K%2BIsf1S2CU0tf42crgVqyEN1%2BMbr1saPuKzfeqwqS15t7iHMgDU%2F%2FIxPaSlJpG1GNo6Hi5DTXnXcU%2BXYjb0Q4zi32IZIRe%2F1Uu9vYRhkfZ6SUJQyZ5OXyqw56fHE&X-Amz-Signature=10905ea008d862d1f7c1ba65510a32f20a4738240ecd4fe0a83aa1ed1b2ff959&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZKSUKV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFsIWhsy2PEiq6oIKQ6GnSc7TfqoGgo4gSSO1q9PU5BAiAlVO5XPgFsay7SdzREtPfXNSKlZIHkfUUM5Ku8TVzotiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwfB4Y%2BgQ6VOovsBKtwDGKuFybuU%2Fm3jvzclGR0zL07%2FSFpDoYQ%2B6sot7DGrss92yX6e99WR1lgr%2Bt%2FnZnpsxxiOhbKbI9T%2FGFkQoj5A1yds19xWOFesTeWbrjhDNkUrbfBzIFUsYFGRL0iCZNBXeOEpNXR1Bfqh%2Fhm7XHw%2B1kz29mUL%2FM4Zh3kIo%2BX9FFPBssLLOBCWfEexrGxjv33BVuEXjEP0NhIv0wRmko8fr4mTDWt%2F8rEZrQkNt8d8ZqYKfHmwcRtW6G2tb4I6a9JPQDlbTeFi2Y5cOTjdt5yz%2Bw1N%2ByvouDPQETw3NRcK0g4GPf7D3xL2b%2BCF8sD23TKsMjnH0vwJSAY7UQ1W7fzaXFrwLmR9DV39%2Fn7X88vrISBnJnpT%2FtYHXMi9jeVY%2F5Yspy9vbJWG138Y3CJNMCNVHc3BlqlHEaMKzU%2BRPQPVNP0aAtkf3cy9yhVFHlc7L5Dv4CEwRMVLX0tRef9QyhwVyknXh7UeTVoZbvMC9ogpCdGpVN57BNVEY314dj5zn8MeYDkHoGLlD06uQtnig4mSxFiigM2h22ZTO6AVnmv5ekQuJHU9BPjyynJr0goEjrYAAiawMAYWamgA8GSl0hD8K8rehWkA9w7C1dDx8Bmk5oX6WWZB9Lq5yq5qyc0w5vL%2BvgY6pgH1%2B1rC6IvBEe0e90zZg2NdCQLfJfxw1H%2Bs1Zp2MESq7NDZ9amEK3WIheDfNSGDrK2eNgAdR8Wo9Jga1Hji0Kx%2BMj38WLjOlRv8K%2BIsf1S2CU0tf42crgVqyEN1%2BMbr1saPuKzfeqwqS15t7iHMgDU%2F%2FIxPaSlJpG1GNo6Hi5DTXnXcU%2BXYjb0Q4zi32IZIRe%2F1Uu9vYRhkfZ6SUJQyZ5OXyqw56fHE&X-Amz-Signature=a5535b9ff22266a45da282f78a35d39dfe5381255a7bfef08f1cbb4381d4e426&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZKSUKV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFsIWhsy2PEiq6oIKQ6GnSc7TfqoGgo4gSSO1q9PU5BAiAlVO5XPgFsay7SdzREtPfXNSKlZIHkfUUM5Ku8TVzotiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwfB4Y%2BgQ6VOovsBKtwDGKuFybuU%2Fm3jvzclGR0zL07%2FSFpDoYQ%2B6sot7DGrss92yX6e99WR1lgr%2Bt%2FnZnpsxxiOhbKbI9T%2FGFkQoj5A1yds19xWOFesTeWbrjhDNkUrbfBzIFUsYFGRL0iCZNBXeOEpNXR1Bfqh%2Fhm7XHw%2B1kz29mUL%2FM4Zh3kIo%2BX9FFPBssLLOBCWfEexrGxjv33BVuEXjEP0NhIv0wRmko8fr4mTDWt%2F8rEZrQkNt8d8ZqYKfHmwcRtW6G2tb4I6a9JPQDlbTeFi2Y5cOTjdt5yz%2Bw1N%2ByvouDPQETw3NRcK0g4GPf7D3xL2b%2BCF8sD23TKsMjnH0vwJSAY7UQ1W7fzaXFrwLmR9DV39%2Fn7X88vrISBnJnpT%2FtYHXMi9jeVY%2F5Yspy9vbJWG138Y3CJNMCNVHc3BlqlHEaMKzU%2BRPQPVNP0aAtkf3cy9yhVFHlc7L5Dv4CEwRMVLX0tRef9QyhwVyknXh7UeTVoZbvMC9ogpCdGpVN57BNVEY314dj5zn8MeYDkHoGLlD06uQtnig4mSxFiigM2h22ZTO6AVnmv5ekQuJHU9BPjyynJr0goEjrYAAiawMAYWamgA8GSl0hD8K8rehWkA9w7C1dDx8Bmk5oX6WWZB9Lq5yq5qyc0w5vL%2BvgY6pgH1%2B1rC6IvBEe0e90zZg2NdCQLfJfxw1H%2Bs1Zp2MESq7NDZ9amEK3WIheDfNSGDrK2eNgAdR8Wo9Jga1Hji0Kx%2BMj38WLjOlRv8K%2BIsf1S2CU0tf42crgVqyEN1%2BMbr1saPuKzfeqwqS15t7iHMgDU%2F%2FIxPaSlJpG1GNo6Hi5DTXnXcU%2BXYjb0Q4zi32IZIRe%2F1Uu9vYRhkfZ6SUJQyZ5OXyqw56fHE&X-Amz-Signature=9b1340b763317ca971dfb67be2b3940272d272127c650cfdc57384887918e395&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZKSUKV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEFsIWhsy2PEiq6oIKQ6GnSc7TfqoGgo4gSSO1q9PU5BAiAlVO5XPgFsay7SdzREtPfXNSKlZIHkfUUM5Ku8TVzotiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwfB4Y%2BgQ6VOovsBKtwDGKuFybuU%2Fm3jvzclGR0zL07%2FSFpDoYQ%2B6sot7DGrss92yX6e99WR1lgr%2Bt%2FnZnpsxxiOhbKbI9T%2FGFkQoj5A1yds19xWOFesTeWbrjhDNkUrbfBzIFUsYFGRL0iCZNBXeOEpNXR1Bfqh%2Fhm7XHw%2B1kz29mUL%2FM4Zh3kIo%2BX9FFPBssLLOBCWfEexrGxjv33BVuEXjEP0NhIv0wRmko8fr4mTDWt%2F8rEZrQkNt8d8ZqYKfHmwcRtW6G2tb4I6a9JPQDlbTeFi2Y5cOTjdt5yz%2Bw1N%2ByvouDPQETw3NRcK0g4GPf7D3xL2b%2BCF8sD23TKsMjnH0vwJSAY7UQ1W7fzaXFrwLmR9DV39%2Fn7X88vrISBnJnpT%2FtYHXMi9jeVY%2F5Yspy9vbJWG138Y3CJNMCNVHc3BlqlHEaMKzU%2BRPQPVNP0aAtkf3cy9yhVFHlc7L5Dv4CEwRMVLX0tRef9QyhwVyknXh7UeTVoZbvMC9ogpCdGpVN57BNVEY314dj5zn8MeYDkHoGLlD06uQtnig4mSxFiigM2h22ZTO6AVnmv5ekQuJHU9BPjyynJr0goEjrYAAiawMAYWamgA8GSl0hD8K8rehWkA9w7C1dDx8Bmk5oX6WWZB9Lq5yq5qyc0w5vL%2BvgY6pgH1%2B1rC6IvBEe0e90zZg2NdCQLfJfxw1H%2Bs1Zp2MESq7NDZ9amEK3WIheDfNSGDrK2eNgAdR8Wo9Jga1Hji0Kx%2BMj38WLjOlRv8K%2BIsf1S2CU0tf42crgVqyEN1%2BMbr1saPuKzfeqwqS15t7iHMgDU%2F%2FIxPaSlJpG1GNo6Hi5DTXnXcU%2BXYjb0Q4zi32IZIRe%2F1Uu9vYRhkfZ6SUJQyZ5OXyqw56fHE&X-Amz-Signature=7fb9cbe57b14f21acdc26637bbb475477357552aa8b04821d795fd2e464f2c66&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
