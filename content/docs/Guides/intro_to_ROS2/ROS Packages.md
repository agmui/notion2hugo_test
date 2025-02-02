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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IP4HVC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbbX2hY%2BJG723NVhM0z6Gseq7UiuFdhGi%2FHShfz4nCVAiEAj5xlWep%2FnE8JaqsNMYLk95z6rZNhl7m5zGBJxIhuG5IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeRPCxxcY9Qq%2BmnhyrcAyNy9%2FL%2FYhOBrToRZ0g2kc65XHa5ozW%2B39kvG%2BIEEFc61%2BFLfOI1m9LelQ9zU97UH0JI9DpHCvn0ZBjJzSXuKVNGz0ZECj2bOo1GTlRJabYCI05iq6xuTvEsGwPhgwYMrsQUFDiD14cOvE4txQbXUp1Iy3LxK2CBB1zsr2jtNdsZDV%2FWOvrbAN30exM%2FwlZ0pEB9D0T1US89ERveglXxKGPAiwJh0A1BbLj3mZ8%2Fpzn4yoJ8xMRcAoK%2FPFKw1bdWBKMfg0NQGyp0%2FJ9WayL9p3Ek3obR9lArx20hjLd746s7L9KQpyV%2BXAKyKFYv%2Fcf2bT0LgpR1zPNDLQ3mosJKq15vaqebsk69mmzgGFMFUQZDygoznvpEtyc26qV7suqGdPk0qfNwjs0Ir7c1BNWQASkUYWKxQ9vLrnL2Su1x%2B47Yt3Qv3U%2FOjzjtellEvl%2BsXikshJPYczkXX9bxS%2F1l3jZN7V1Ko3OZUhHrSxKn9HBr9OYCcce6DZM2Y%2BjdTc2k3U8RUjqEEwcU1rAzx%2FWOz7Ug8Jew8yjJen7aXQg1VgGM3lnNqtFn9cloFPTMxw8Rsc9DcIN4R%2B110b2pqz%2FiaVJ2UUbwDRAwKgfgoDRBBe3BDvVj79Ll7C90CF73MIzf%2FrwGOqUBfiM%2BS7n%2F6sSJhL6yt5uKR6qDRbxmOdnRhAS3EUSoZFJS92L8Rwv4AOOdE8LXS0VPYlCHhwrW83g6p5O6pItflZe5nZ5wSnXCoUecn6W4LHvN6%2B0AOD5I6L8%2BQmV6oL9%2Bgc%2FUR1B7xnTLJ0AhorzsuUKmhsFFZ0XrJix15p6PHcB6d4AvGgN4wMDQC4TTKI8bvYlz0N0AcXf17vYOEluHaDxEmUP9&X-Amz-Signature=7aadd0366fa0d03ea060987cdb3592fa5d7811ae33a95f3673570894ebb9479a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IP4HVC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbbX2hY%2BJG723NVhM0z6Gseq7UiuFdhGi%2FHShfz4nCVAiEAj5xlWep%2FnE8JaqsNMYLk95z6rZNhl7m5zGBJxIhuG5IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeRPCxxcY9Qq%2BmnhyrcAyNy9%2FL%2FYhOBrToRZ0g2kc65XHa5ozW%2B39kvG%2BIEEFc61%2BFLfOI1m9LelQ9zU97UH0JI9DpHCvn0ZBjJzSXuKVNGz0ZECj2bOo1GTlRJabYCI05iq6xuTvEsGwPhgwYMrsQUFDiD14cOvE4txQbXUp1Iy3LxK2CBB1zsr2jtNdsZDV%2FWOvrbAN30exM%2FwlZ0pEB9D0T1US89ERveglXxKGPAiwJh0A1BbLj3mZ8%2Fpzn4yoJ8xMRcAoK%2FPFKw1bdWBKMfg0NQGyp0%2FJ9WayL9p3Ek3obR9lArx20hjLd746s7L9KQpyV%2BXAKyKFYv%2Fcf2bT0LgpR1zPNDLQ3mosJKq15vaqebsk69mmzgGFMFUQZDygoznvpEtyc26qV7suqGdPk0qfNwjs0Ir7c1BNWQASkUYWKxQ9vLrnL2Su1x%2B47Yt3Qv3U%2FOjzjtellEvl%2BsXikshJPYczkXX9bxS%2F1l3jZN7V1Ko3OZUhHrSxKn9HBr9OYCcce6DZM2Y%2BjdTc2k3U8RUjqEEwcU1rAzx%2FWOz7Ug8Jew8yjJen7aXQg1VgGM3lnNqtFn9cloFPTMxw8Rsc9DcIN4R%2B110b2pqz%2FiaVJ2UUbwDRAwKgfgoDRBBe3BDvVj79Ll7C90CF73MIzf%2FrwGOqUBfiM%2BS7n%2F6sSJhL6yt5uKR6qDRbxmOdnRhAS3EUSoZFJS92L8Rwv4AOOdE8LXS0VPYlCHhwrW83g6p5O6pItflZe5nZ5wSnXCoUecn6W4LHvN6%2B0AOD5I6L8%2BQmV6oL9%2Bgc%2FUR1B7xnTLJ0AhorzsuUKmhsFFZ0XrJix15p6PHcB6d4AvGgN4wMDQC4TTKI8bvYlz0N0AcXf17vYOEluHaDxEmUP9&X-Amz-Signature=7b36c908e85fa5f10d0370f85aede2e1692a7a765e3165276e1474588ef6ad64&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IP4HVC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbbX2hY%2BJG723NVhM0z6Gseq7UiuFdhGi%2FHShfz4nCVAiEAj5xlWep%2FnE8JaqsNMYLk95z6rZNhl7m5zGBJxIhuG5IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeRPCxxcY9Qq%2BmnhyrcAyNy9%2FL%2FYhOBrToRZ0g2kc65XHa5ozW%2B39kvG%2BIEEFc61%2BFLfOI1m9LelQ9zU97UH0JI9DpHCvn0ZBjJzSXuKVNGz0ZECj2bOo1GTlRJabYCI05iq6xuTvEsGwPhgwYMrsQUFDiD14cOvE4txQbXUp1Iy3LxK2CBB1zsr2jtNdsZDV%2FWOvrbAN30exM%2FwlZ0pEB9D0T1US89ERveglXxKGPAiwJh0A1BbLj3mZ8%2Fpzn4yoJ8xMRcAoK%2FPFKw1bdWBKMfg0NQGyp0%2FJ9WayL9p3Ek3obR9lArx20hjLd746s7L9KQpyV%2BXAKyKFYv%2Fcf2bT0LgpR1zPNDLQ3mosJKq15vaqebsk69mmzgGFMFUQZDygoznvpEtyc26qV7suqGdPk0qfNwjs0Ir7c1BNWQASkUYWKxQ9vLrnL2Su1x%2B47Yt3Qv3U%2FOjzjtellEvl%2BsXikshJPYczkXX9bxS%2F1l3jZN7V1Ko3OZUhHrSxKn9HBr9OYCcce6DZM2Y%2BjdTc2k3U8RUjqEEwcU1rAzx%2FWOz7Ug8Jew8yjJen7aXQg1VgGM3lnNqtFn9cloFPTMxw8Rsc9DcIN4R%2B110b2pqz%2FiaVJ2UUbwDRAwKgfgoDRBBe3BDvVj79Ll7C90CF73MIzf%2FrwGOqUBfiM%2BS7n%2F6sSJhL6yt5uKR6qDRbxmOdnRhAS3EUSoZFJS92L8Rwv4AOOdE8LXS0VPYlCHhwrW83g6p5O6pItflZe5nZ5wSnXCoUecn6W4LHvN6%2B0AOD5I6L8%2BQmV6oL9%2Bgc%2FUR1B7xnTLJ0AhorzsuUKmhsFFZ0XrJix15p6PHcB6d4AvGgN4wMDQC4TTKI8bvYlz0N0AcXf17vYOEluHaDxEmUP9&X-Amz-Signature=30d8c78dbdfff2e1a92df36f444418850b91258db637ee61ee329c86c8677aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IP4HVC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbbX2hY%2BJG723NVhM0z6Gseq7UiuFdhGi%2FHShfz4nCVAiEAj5xlWep%2FnE8JaqsNMYLk95z6rZNhl7m5zGBJxIhuG5IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeRPCxxcY9Qq%2BmnhyrcAyNy9%2FL%2FYhOBrToRZ0g2kc65XHa5ozW%2B39kvG%2BIEEFc61%2BFLfOI1m9LelQ9zU97UH0JI9DpHCvn0ZBjJzSXuKVNGz0ZECj2bOo1GTlRJabYCI05iq6xuTvEsGwPhgwYMrsQUFDiD14cOvE4txQbXUp1Iy3LxK2CBB1zsr2jtNdsZDV%2FWOvrbAN30exM%2FwlZ0pEB9D0T1US89ERveglXxKGPAiwJh0A1BbLj3mZ8%2Fpzn4yoJ8xMRcAoK%2FPFKw1bdWBKMfg0NQGyp0%2FJ9WayL9p3Ek3obR9lArx20hjLd746s7L9KQpyV%2BXAKyKFYv%2Fcf2bT0LgpR1zPNDLQ3mosJKq15vaqebsk69mmzgGFMFUQZDygoznvpEtyc26qV7suqGdPk0qfNwjs0Ir7c1BNWQASkUYWKxQ9vLrnL2Su1x%2B47Yt3Qv3U%2FOjzjtellEvl%2BsXikshJPYczkXX9bxS%2F1l3jZN7V1Ko3OZUhHrSxKn9HBr9OYCcce6DZM2Y%2BjdTc2k3U8RUjqEEwcU1rAzx%2FWOz7Ug8Jew8yjJen7aXQg1VgGM3lnNqtFn9cloFPTMxw8Rsc9DcIN4R%2B110b2pqz%2FiaVJ2UUbwDRAwKgfgoDRBBe3BDvVj79Ll7C90CF73MIzf%2FrwGOqUBfiM%2BS7n%2F6sSJhL6yt5uKR6qDRbxmOdnRhAS3EUSoZFJS92L8Rwv4AOOdE8LXS0VPYlCHhwrW83g6p5O6pItflZe5nZ5wSnXCoUecn6W4LHvN6%2B0AOD5I6L8%2BQmV6oL9%2Bgc%2FUR1B7xnTLJ0AhorzsuUKmhsFFZ0XrJix15p6PHcB6d4AvGgN4wMDQC4TTKI8bvYlz0N0AcXf17vYOEluHaDxEmUP9&X-Amz-Signature=b1aa6404290d334f3d71a2de9588f13ef4571fc7e27dca6e3cc1db76fc7e67e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IP4HVC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbbX2hY%2BJG723NVhM0z6Gseq7UiuFdhGi%2FHShfz4nCVAiEAj5xlWep%2FnE8JaqsNMYLk95z6rZNhl7m5zGBJxIhuG5IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeRPCxxcY9Qq%2BmnhyrcAyNy9%2FL%2FYhOBrToRZ0g2kc65XHa5ozW%2B39kvG%2BIEEFc61%2BFLfOI1m9LelQ9zU97UH0JI9DpHCvn0ZBjJzSXuKVNGz0ZECj2bOo1GTlRJabYCI05iq6xuTvEsGwPhgwYMrsQUFDiD14cOvE4txQbXUp1Iy3LxK2CBB1zsr2jtNdsZDV%2FWOvrbAN30exM%2FwlZ0pEB9D0T1US89ERveglXxKGPAiwJh0A1BbLj3mZ8%2Fpzn4yoJ8xMRcAoK%2FPFKw1bdWBKMfg0NQGyp0%2FJ9WayL9p3Ek3obR9lArx20hjLd746s7L9KQpyV%2BXAKyKFYv%2Fcf2bT0LgpR1zPNDLQ3mosJKq15vaqebsk69mmzgGFMFUQZDygoznvpEtyc26qV7suqGdPk0qfNwjs0Ir7c1BNWQASkUYWKxQ9vLrnL2Su1x%2B47Yt3Qv3U%2FOjzjtellEvl%2BsXikshJPYczkXX9bxS%2F1l3jZN7V1Ko3OZUhHrSxKn9HBr9OYCcce6DZM2Y%2BjdTc2k3U8RUjqEEwcU1rAzx%2FWOz7Ug8Jew8yjJen7aXQg1VgGM3lnNqtFn9cloFPTMxw8Rsc9DcIN4R%2B110b2pqz%2FiaVJ2UUbwDRAwKgfgoDRBBe3BDvVj79Ll7C90CF73MIzf%2FrwGOqUBfiM%2BS7n%2F6sSJhL6yt5uKR6qDRbxmOdnRhAS3EUSoZFJS92L8Rwv4AOOdE8LXS0VPYlCHhwrW83g6p5O6pItflZe5nZ5wSnXCoUecn6W4LHvN6%2B0AOD5I6L8%2BQmV6oL9%2Bgc%2FUR1B7xnTLJ0AhorzsuUKmhsFFZ0XrJix15p6PHcB6d4AvGgN4wMDQC4TTKI8bvYlz0N0AcXf17vYOEluHaDxEmUP9&X-Amz-Signature=6bd655f1f6b8397557fab11403f31261656850ee8bee419e9ea59c14c539a37e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IP4HVC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbbX2hY%2BJG723NVhM0z6Gseq7UiuFdhGi%2FHShfz4nCVAiEAj5xlWep%2FnE8JaqsNMYLk95z6rZNhl7m5zGBJxIhuG5IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeRPCxxcY9Qq%2BmnhyrcAyNy9%2FL%2FYhOBrToRZ0g2kc65XHa5ozW%2B39kvG%2BIEEFc61%2BFLfOI1m9LelQ9zU97UH0JI9DpHCvn0ZBjJzSXuKVNGz0ZECj2bOo1GTlRJabYCI05iq6xuTvEsGwPhgwYMrsQUFDiD14cOvE4txQbXUp1Iy3LxK2CBB1zsr2jtNdsZDV%2FWOvrbAN30exM%2FwlZ0pEB9D0T1US89ERveglXxKGPAiwJh0A1BbLj3mZ8%2Fpzn4yoJ8xMRcAoK%2FPFKw1bdWBKMfg0NQGyp0%2FJ9WayL9p3Ek3obR9lArx20hjLd746s7L9KQpyV%2BXAKyKFYv%2Fcf2bT0LgpR1zPNDLQ3mosJKq15vaqebsk69mmzgGFMFUQZDygoznvpEtyc26qV7suqGdPk0qfNwjs0Ir7c1BNWQASkUYWKxQ9vLrnL2Su1x%2B47Yt3Qv3U%2FOjzjtellEvl%2BsXikshJPYczkXX9bxS%2F1l3jZN7V1Ko3OZUhHrSxKn9HBr9OYCcce6DZM2Y%2BjdTc2k3U8RUjqEEwcU1rAzx%2FWOz7Ug8Jew8yjJen7aXQg1VgGM3lnNqtFn9cloFPTMxw8Rsc9DcIN4R%2B110b2pqz%2FiaVJ2UUbwDRAwKgfgoDRBBe3BDvVj79Ll7C90CF73MIzf%2FrwGOqUBfiM%2BS7n%2F6sSJhL6yt5uKR6qDRbxmOdnRhAS3EUSoZFJS92L8Rwv4AOOdE8LXS0VPYlCHhwrW83g6p5O6pItflZe5nZ5wSnXCoUecn6W4LHvN6%2B0AOD5I6L8%2BQmV6oL9%2Bgc%2FUR1B7xnTLJ0AhorzsuUKmhsFFZ0XrJix15p6PHcB6d4AvGgN4wMDQC4TTKI8bvYlz0N0AcXf17vYOEluHaDxEmUP9&X-Amz-Signature=86ecbc6bd1d77fd2a5396546760394551141d1b2813a3834475effe79d650775&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IP4HVC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbbX2hY%2BJG723NVhM0z6Gseq7UiuFdhGi%2FHShfz4nCVAiEAj5xlWep%2FnE8JaqsNMYLk95z6rZNhl7m5zGBJxIhuG5IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeRPCxxcY9Qq%2BmnhyrcAyNy9%2FL%2FYhOBrToRZ0g2kc65XHa5ozW%2B39kvG%2BIEEFc61%2BFLfOI1m9LelQ9zU97UH0JI9DpHCvn0ZBjJzSXuKVNGz0ZECj2bOo1GTlRJabYCI05iq6xuTvEsGwPhgwYMrsQUFDiD14cOvE4txQbXUp1Iy3LxK2CBB1zsr2jtNdsZDV%2FWOvrbAN30exM%2FwlZ0pEB9D0T1US89ERveglXxKGPAiwJh0A1BbLj3mZ8%2Fpzn4yoJ8xMRcAoK%2FPFKw1bdWBKMfg0NQGyp0%2FJ9WayL9p3Ek3obR9lArx20hjLd746s7L9KQpyV%2BXAKyKFYv%2Fcf2bT0LgpR1zPNDLQ3mosJKq15vaqebsk69mmzgGFMFUQZDygoznvpEtyc26qV7suqGdPk0qfNwjs0Ir7c1BNWQASkUYWKxQ9vLrnL2Su1x%2B47Yt3Qv3U%2FOjzjtellEvl%2BsXikshJPYczkXX9bxS%2F1l3jZN7V1Ko3OZUhHrSxKn9HBr9OYCcce6DZM2Y%2BjdTc2k3U8RUjqEEwcU1rAzx%2FWOz7Ug8Jew8yjJen7aXQg1VgGM3lnNqtFn9cloFPTMxw8Rsc9DcIN4R%2B110b2pqz%2FiaVJ2UUbwDRAwKgfgoDRBBe3BDvVj79Ll7C90CF73MIzf%2FrwGOqUBfiM%2BS7n%2F6sSJhL6yt5uKR6qDRbxmOdnRhAS3EUSoZFJS92L8Rwv4AOOdE8LXS0VPYlCHhwrW83g6p5O6pItflZe5nZ5wSnXCoUecn6W4LHvN6%2B0AOD5I6L8%2BQmV6oL9%2Bgc%2FUR1B7xnTLJ0AhorzsuUKmhsFFZ0XrJix15p6PHcB6d4AvGgN4wMDQC4TTKI8bvYlz0N0AcXf17vYOEluHaDxEmUP9&X-Amz-Signature=5a3fa34bd6fa173f38fbe654c1e967265aed0e7ff4ec1fe6c4bc1b3bcefff850&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
