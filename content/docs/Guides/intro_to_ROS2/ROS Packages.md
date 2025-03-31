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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTCKJBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBmcOV2w1G5gac4m7BiGZ5HGenlqMXDmLaU5TcEdckWqAiB%2BMvId3q7bD4WPbtTj7vbx%2FVJQQh4DJ744rk9mnrlGlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2kZAa%2BQN7S7yqVMKtwDgQcsnXV5hnO414f1rUyZ9HY6HPkx%2BnLv8UlZYJj5FFKWXg%2BNtO12jM4n0v6NdD3bu5FoPJbyu4Y44%2FQgqLY%2FCtbBnnjmg9inxInCw0PQdTizFiXegincisvsb2N9oB5Ywv2SXDZYr20XyecLjp0WJrJBIXp5t5Hhfy5JC0LZXv8s7WlMysPLCIfS%2BASOxmk%2F%2FhzPfwNJwGMmAkLstd%2BmC1s3dRRjc5L4p7WXEiR7JgQF20nAKFWAD677rszARk0%2F7Y5cf0N2PTBG3wk5o122XMk3CsZWEoTp%2BJ7dhPIKRZ5k3M0ny1SKeX3fFWXo0w4aW%2FibBu9gxqYABDkk7xW7rDoLOdvrktkGK9fmvZyKQJTOgk2UMlfW95XYs7fWlKFZPRSvyXnmdK4n15pqPJO5F%2BKMsTXVXUUp6K9DfIyZwEkdMm3Bs6XlBvd3ibh7o0kjSs8HkcT7YdKFOKWehP%2BJh5vSLhvIqTTL1bvIAJqdA0mV3qcrECBdiV8MA88VIwmZtFiYvjllmoA%2BSD5c3kUCntjoLIQ0TUZwE%2FfZpe94%2BW72plPtLnBJEWYyIXvZcMoZzxCuFT4a0I9NozSiNJAEO56BvDmmauBfZc1hrymk%2FgWA6fqGsgxYSl5tPYIwq8yqvwY6pgFGGyRVB8gexhCh4q3u1flkJjWeJhCtbeO4c1Z1MqCgEU8qTWS3eUVBnpfD1kIjemjPvczJ3s3IGTq1yKG09mUBfJJUIu24tTDHBCPSX9jXtNcyPDzFp9H2OMfHESw8OEDU3cnFzBGiLC3IQ%2F43ELcidJ9OGl80TDVbufJvXW6nclZNYk15ZTVMgIgjTqM1dvK1qMxQl%2BGtlszRtQM4hzllF63W2%2FBj&X-Amz-Signature=d37673f8939c096c82239b5cd9bae02d7510e70e2bd6c7b147c57235f96905ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTCKJBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBmcOV2w1G5gac4m7BiGZ5HGenlqMXDmLaU5TcEdckWqAiB%2BMvId3q7bD4WPbtTj7vbx%2FVJQQh4DJ744rk9mnrlGlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2kZAa%2BQN7S7yqVMKtwDgQcsnXV5hnO414f1rUyZ9HY6HPkx%2BnLv8UlZYJj5FFKWXg%2BNtO12jM4n0v6NdD3bu5FoPJbyu4Y44%2FQgqLY%2FCtbBnnjmg9inxInCw0PQdTizFiXegincisvsb2N9oB5Ywv2SXDZYr20XyecLjp0WJrJBIXp5t5Hhfy5JC0LZXv8s7WlMysPLCIfS%2BASOxmk%2F%2FhzPfwNJwGMmAkLstd%2BmC1s3dRRjc5L4p7WXEiR7JgQF20nAKFWAD677rszARk0%2F7Y5cf0N2PTBG3wk5o122XMk3CsZWEoTp%2BJ7dhPIKRZ5k3M0ny1SKeX3fFWXo0w4aW%2FibBu9gxqYABDkk7xW7rDoLOdvrktkGK9fmvZyKQJTOgk2UMlfW95XYs7fWlKFZPRSvyXnmdK4n15pqPJO5F%2BKMsTXVXUUp6K9DfIyZwEkdMm3Bs6XlBvd3ibh7o0kjSs8HkcT7YdKFOKWehP%2BJh5vSLhvIqTTL1bvIAJqdA0mV3qcrECBdiV8MA88VIwmZtFiYvjllmoA%2BSD5c3kUCntjoLIQ0TUZwE%2FfZpe94%2BW72plPtLnBJEWYyIXvZcMoZzxCuFT4a0I9NozSiNJAEO56BvDmmauBfZc1hrymk%2FgWA6fqGsgxYSl5tPYIwq8yqvwY6pgFGGyRVB8gexhCh4q3u1flkJjWeJhCtbeO4c1Z1MqCgEU8qTWS3eUVBnpfD1kIjemjPvczJ3s3IGTq1yKG09mUBfJJUIu24tTDHBCPSX9jXtNcyPDzFp9H2OMfHESw8OEDU3cnFzBGiLC3IQ%2F43ELcidJ9OGl80TDVbufJvXW6nclZNYk15ZTVMgIgjTqM1dvK1qMxQl%2BGtlszRtQM4hzllF63W2%2FBj&X-Amz-Signature=5ab9979bde64a42fbb0d37748314e2074f2414b1a9564448e1e3ce14b78fa20c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTCKJBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBmcOV2w1G5gac4m7BiGZ5HGenlqMXDmLaU5TcEdckWqAiB%2BMvId3q7bD4WPbtTj7vbx%2FVJQQh4DJ744rk9mnrlGlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2kZAa%2BQN7S7yqVMKtwDgQcsnXV5hnO414f1rUyZ9HY6HPkx%2BnLv8UlZYJj5FFKWXg%2BNtO12jM4n0v6NdD3bu5FoPJbyu4Y44%2FQgqLY%2FCtbBnnjmg9inxInCw0PQdTizFiXegincisvsb2N9oB5Ywv2SXDZYr20XyecLjp0WJrJBIXp5t5Hhfy5JC0LZXv8s7WlMysPLCIfS%2BASOxmk%2F%2FhzPfwNJwGMmAkLstd%2BmC1s3dRRjc5L4p7WXEiR7JgQF20nAKFWAD677rszARk0%2F7Y5cf0N2PTBG3wk5o122XMk3CsZWEoTp%2BJ7dhPIKRZ5k3M0ny1SKeX3fFWXo0w4aW%2FibBu9gxqYABDkk7xW7rDoLOdvrktkGK9fmvZyKQJTOgk2UMlfW95XYs7fWlKFZPRSvyXnmdK4n15pqPJO5F%2BKMsTXVXUUp6K9DfIyZwEkdMm3Bs6XlBvd3ibh7o0kjSs8HkcT7YdKFOKWehP%2BJh5vSLhvIqTTL1bvIAJqdA0mV3qcrECBdiV8MA88VIwmZtFiYvjllmoA%2BSD5c3kUCntjoLIQ0TUZwE%2FfZpe94%2BW72plPtLnBJEWYyIXvZcMoZzxCuFT4a0I9NozSiNJAEO56BvDmmauBfZc1hrymk%2FgWA6fqGsgxYSl5tPYIwq8yqvwY6pgFGGyRVB8gexhCh4q3u1flkJjWeJhCtbeO4c1Z1MqCgEU8qTWS3eUVBnpfD1kIjemjPvczJ3s3IGTq1yKG09mUBfJJUIu24tTDHBCPSX9jXtNcyPDzFp9H2OMfHESw8OEDU3cnFzBGiLC3IQ%2F43ELcidJ9OGl80TDVbufJvXW6nclZNYk15ZTVMgIgjTqM1dvK1qMxQl%2BGtlszRtQM4hzllF63W2%2FBj&X-Amz-Signature=fcf4a5462cad328d32dceb5bc7eb96b15eae85f9d6d3f142e8674917b4454a72&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTCKJBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBmcOV2w1G5gac4m7BiGZ5HGenlqMXDmLaU5TcEdckWqAiB%2BMvId3q7bD4WPbtTj7vbx%2FVJQQh4DJ744rk9mnrlGlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2kZAa%2BQN7S7yqVMKtwDgQcsnXV5hnO414f1rUyZ9HY6HPkx%2BnLv8UlZYJj5FFKWXg%2BNtO12jM4n0v6NdD3bu5FoPJbyu4Y44%2FQgqLY%2FCtbBnnjmg9inxInCw0PQdTizFiXegincisvsb2N9oB5Ywv2SXDZYr20XyecLjp0WJrJBIXp5t5Hhfy5JC0LZXv8s7WlMysPLCIfS%2BASOxmk%2F%2FhzPfwNJwGMmAkLstd%2BmC1s3dRRjc5L4p7WXEiR7JgQF20nAKFWAD677rszARk0%2F7Y5cf0N2PTBG3wk5o122XMk3CsZWEoTp%2BJ7dhPIKRZ5k3M0ny1SKeX3fFWXo0w4aW%2FibBu9gxqYABDkk7xW7rDoLOdvrktkGK9fmvZyKQJTOgk2UMlfW95XYs7fWlKFZPRSvyXnmdK4n15pqPJO5F%2BKMsTXVXUUp6K9DfIyZwEkdMm3Bs6XlBvd3ibh7o0kjSs8HkcT7YdKFOKWehP%2BJh5vSLhvIqTTL1bvIAJqdA0mV3qcrECBdiV8MA88VIwmZtFiYvjllmoA%2BSD5c3kUCntjoLIQ0TUZwE%2FfZpe94%2BW72plPtLnBJEWYyIXvZcMoZzxCuFT4a0I9NozSiNJAEO56BvDmmauBfZc1hrymk%2FgWA6fqGsgxYSl5tPYIwq8yqvwY6pgFGGyRVB8gexhCh4q3u1flkJjWeJhCtbeO4c1Z1MqCgEU8qTWS3eUVBnpfD1kIjemjPvczJ3s3IGTq1yKG09mUBfJJUIu24tTDHBCPSX9jXtNcyPDzFp9H2OMfHESw8OEDU3cnFzBGiLC3IQ%2F43ELcidJ9OGl80TDVbufJvXW6nclZNYk15ZTVMgIgjTqM1dvK1qMxQl%2BGtlszRtQM4hzllF63W2%2FBj&X-Amz-Signature=adc45bfe6db5c3a3e188cc382a773064c4411eca30a1d9b3ca7224c39adcbf76&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTCKJBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBmcOV2w1G5gac4m7BiGZ5HGenlqMXDmLaU5TcEdckWqAiB%2BMvId3q7bD4WPbtTj7vbx%2FVJQQh4DJ744rk9mnrlGlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2kZAa%2BQN7S7yqVMKtwDgQcsnXV5hnO414f1rUyZ9HY6HPkx%2BnLv8UlZYJj5FFKWXg%2BNtO12jM4n0v6NdD3bu5FoPJbyu4Y44%2FQgqLY%2FCtbBnnjmg9inxInCw0PQdTizFiXegincisvsb2N9oB5Ywv2SXDZYr20XyecLjp0WJrJBIXp5t5Hhfy5JC0LZXv8s7WlMysPLCIfS%2BASOxmk%2F%2FhzPfwNJwGMmAkLstd%2BmC1s3dRRjc5L4p7WXEiR7JgQF20nAKFWAD677rszARk0%2F7Y5cf0N2PTBG3wk5o122XMk3CsZWEoTp%2BJ7dhPIKRZ5k3M0ny1SKeX3fFWXo0w4aW%2FibBu9gxqYABDkk7xW7rDoLOdvrktkGK9fmvZyKQJTOgk2UMlfW95XYs7fWlKFZPRSvyXnmdK4n15pqPJO5F%2BKMsTXVXUUp6K9DfIyZwEkdMm3Bs6XlBvd3ibh7o0kjSs8HkcT7YdKFOKWehP%2BJh5vSLhvIqTTL1bvIAJqdA0mV3qcrECBdiV8MA88VIwmZtFiYvjllmoA%2BSD5c3kUCntjoLIQ0TUZwE%2FfZpe94%2BW72plPtLnBJEWYyIXvZcMoZzxCuFT4a0I9NozSiNJAEO56BvDmmauBfZc1hrymk%2FgWA6fqGsgxYSl5tPYIwq8yqvwY6pgFGGyRVB8gexhCh4q3u1flkJjWeJhCtbeO4c1Z1MqCgEU8qTWS3eUVBnpfD1kIjemjPvczJ3s3IGTq1yKG09mUBfJJUIu24tTDHBCPSX9jXtNcyPDzFp9H2OMfHESw8OEDU3cnFzBGiLC3IQ%2F43ELcidJ9OGl80TDVbufJvXW6nclZNYk15ZTVMgIgjTqM1dvK1qMxQl%2BGtlszRtQM4hzllF63W2%2FBj&X-Amz-Signature=022da7e5aab8fc909314c126b97b07089dd2671b3404824e69fa4106f0fed876&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTCKJBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBmcOV2w1G5gac4m7BiGZ5HGenlqMXDmLaU5TcEdckWqAiB%2BMvId3q7bD4WPbtTj7vbx%2FVJQQh4DJ744rk9mnrlGlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2kZAa%2BQN7S7yqVMKtwDgQcsnXV5hnO414f1rUyZ9HY6HPkx%2BnLv8UlZYJj5FFKWXg%2BNtO12jM4n0v6NdD3bu5FoPJbyu4Y44%2FQgqLY%2FCtbBnnjmg9inxInCw0PQdTizFiXegincisvsb2N9oB5Ywv2SXDZYr20XyecLjp0WJrJBIXp5t5Hhfy5JC0LZXv8s7WlMysPLCIfS%2BASOxmk%2F%2FhzPfwNJwGMmAkLstd%2BmC1s3dRRjc5L4p7WXEiR7JgQF20nAKFWAD677rszARk0%2F7Y5cf0N2PTBG3wk5o122XMk3CsZWEoTp%2BJ7dhPIKRZ5k3M0ny1SKeX3fFWXo0w4aW%2FibBu9gxqYABDkk7xW7rDoLOdvrktkGK9fmvZyKQJTOgk2UMlfW95XYs7fWlKFZPRSvyXnmdK4n15pqPJO5F%2BKMsTXVXUUp6K9DfIyZwEkdMm3Bs6XlBvd3ibh7o0kjSs8HkcT7YdKFOKWehP%2BJh5vSLhvIqTTL1bvIAJqdA0mV3qcrECBdiV8MA88VIwmZtFiYvjllmoA%2BSD5c3kUCntjoLIQ0TUZwE%2FfZpe94%2BW72plPtLnBJEWYyIXvZcMoZzxCuFT4a0I9NozSiNJAEO56BvDmmauBfZc1hrymk%2FgWA6fqGsgxYSl5tPYIwq8yqvwY6pgFGGyRVB8gexhCh4q3u1flkJjWeJhCtbeO4c1Z1MqCgEU8qTWS3eUVBnpfD1kIjemjPvczJ3s3IGTq1yKG09mUBfJJUIu24tTDHBCPSX9jXtNcyPDzFp9H2OMfHESw8OEDU3cnFzBGiLC3IQ%2F43ELcidJ9OGl80TDVbufJvXW6nclZNYk15ZTVMgIgjTqM1dvK1qMxQl%2BGtlszRtQM4hzllF63W2%2FBj&X-Amz-Signature=770596f8cc9683627744e110afb512484d7a42f7c952bf9ead0ba345bd386249&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTCKJBC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBmcOV2w1G5gac4m7BiGZ5HGenlqMXDmLaU5TcEdckWqAiB%2BMvId3q7bD4WPbtTj7vbx%2FVJQQh4DJ744rk9mnrlGlyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2kZAa%2BQN7S7yqVMKtwDgQcsnXV5hnO414f1rUyZ9HY6HPkx%2BnLv8UlZYJj5FFKWXg%2BNtO12jM4n0v6NdD3bu5FoPJbyu4Y44%2FQgqLY%2FCtbBnnjmg9inxInCw0PQdTizFiXegincisvsb2N9oB5Ywv2SXDZYr20XyecLjp0WJrJBIXp5t5Hhfy5JC0LZXv8s7WlMysPLCIfS%2BASOxmk%2F%2FhzPfwNJwGMmAkLstd%2BmC1s3dRRjc5L4p7WXEiR7JgQF20nAKFWAD677rszARk0%2F7Y5cf0N2PTBG3wk5o122XMk3CsZWEoTp%2BJ7dhPIKRZ5k3M0ny1SKeX3fFWXo0w4aW%2FibBu9gxqYABDkk7xW7rDoLOdvrktkGK9fmvZyKQJTOgk2UMlfW95XYs7fWlKFZPRSvyXnmdK4n15pqPJO5F%2BKMsTXVXUUp6K9DfIyZwEkdMm3Bs6XlBvd3ibh7o0kjSs8HkcT7YdKFOKWehP%2BJh5vSLhvIqTTL1bvIAJqdA0mV3qcrECBdiV8MA88VIwmZtFiYvjllmoA%2BSD5c3kUCntjoLIQ0TUZwE%2FfZpe94%2BW72plPtLnBJEWYyIXvZcMoZzxCuFT4a0I9NozSiNJAEO56BvDmmauBfZc1hrymk%2FgWA6fqGsgxYSl5tPYIwq8yqvwY6pgFGGyRVB8gexhCh4q3u1flkJjWeJhCtbeO4c1Z1MqCgEU8qTWS3eUVBnpfD1kIjemjPvczJ3s3IGTq1yKG09mUBfJJUIu24tTDHBCPSX9jXtNcyPDzFp9H2OMfHESw8OEDU3cnFzBGiLC3IQ%2F43ELcidJ9OGl80TDVbufJvXW6nclZNYk15ZTVMgIgjTqM1dvK1qMxQl%2BGtlszRtQM4hzllF63W2%2FBj&X-Amz-Signature=a039755d7e4ca76512cd7f1a59760b1c80d4308811e83a738878a1bdb6c65730&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
