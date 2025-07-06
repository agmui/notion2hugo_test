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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPCDQOV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGuC5XYJ%2FQvTbzI23ShfN7v1pWO9fHP4b6d3nOrPdWyyAiArGu4NbzUIaRhT%2BX2WcWWzV15sQNUjuQvS7XiB7%2BOQSir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaHS5xnAmOrpEDXEtKtwDTuHnEk92W3lPXbsv44bdEF4RpG%2Be1HMJceB3i6WaUUvDPbyFbX9XjzElqNJiyNn4Le0GnuXsUPKCsFR04%2Fie3XGTmwTqX%2BOZUCCVEzh9Khoq0tAkSlWXYfkXsgMc37lRPzK%2BIglNZ3R2hZ0%2F6%2BIRG4VpPpsfGJjLz1ULJxjm4neB%2BgM6YwwJkOs71HPSLNTbqeBoclrKpHA4LEshzX7ldIX2txSnIhq56%2BW7nkVn4yEnvOxQ1TC4g4C1YKIPQfVB1bHxQTHx%2BJtWAIcaHXC6qy%2BzsC6KTZ4VXM2wzKJp6s%2BVyJQpi1J66XEdgMF1s0WwlYldE2%2FGWmll7kHRdKLJLUvvWf1oq%2B578XGv1B%2F5gFDMsdmae9VuMO56b6HhKclq%2BTxvk96rfByVTV2eW2iqY8GfHYTZ6bKHPQnbMzLSDd6o4heLG7oezvUMU4iCABDkkbDlGwKzCU%2FYvK3eNNifYuGKXa7%2Fstz5m%2Booh1DdE2%2FddqdxU%2Blg%2BhnUeiBuJ09sHazSB1zRnLWO%2Fp2yI5WkDtMnrbSuw9Y%2B0xd1aZxLrXASe6FuLIlSltQZl%2BzAc%2F%2FvAt13PBG0j59qyjriECETuq90OqyS%2FVxE0t2WYIesa%2FAVHp9zD6iIGH%2Be5RYw3KuowwY6pgGrsvpC4FwU4yX9XlQ%2FXgSAw6HwI%2BQmXEj%2B%2FvcRpVXWdXqkLAilpj7VkBJrUmMYKb167Yh7dpk0wC0AOxEoEwww1ItMrJhzwdGjz6thq2cQolWLIu4zLx33A8iIN1Amq1xEpzx4gR7ZszyuGs4a2ZqQyyGWbv%2FvHHlpFBy83pwVpcUlwOCy8bi9u1Xn5ZAsmwF45H2HZlDuF%2FKtjJlP5GUU%2F0eXm9zf&X-Amz-Signature=921297fc3f709476291e39c2ec701b6d977f65a8e1cf122a4d03c5a0183bd6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPCDQOV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGuC5XYJ%2FQvTbzI23ShfN7v1pWO9fHP4b6d3nOrPdWyyAiArGu4NbzUIaRhT%2BX2WcWWzV15sQNUjuQvS7XiB7%2BOQSir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaHS5xnAmOrpEDXEtKtwDTuHnEk92W3lPXbsv44bdEF4RpG%2Be1HMJceB3i6WaUUvDPbyFbX9XjzElqNJiyNn4Le0GnuXsUPKCsFR04%2Fie3XGTmwTqX%2BOZUCCVEzh9Khoq0tAkSlWXYfkXsgMc37lRPzK%2BIglNZ3R2hZ0%2F6%2BIRG4VpPpsfGJjLz1ULJxjm4neB%2BgM6YwwJkOs71HPSLNTbqeBoclrKpHA4LEshzX7ldIX2txSnIhq56%2BW7nkVn4yEnvOxQ1TC4g4C1YKIPQfVB1bHxQTHx%2BJtWAIcaHXC6qy%2BzsC6KTZ4VXM2wzKJp6s%2BVyJQpi1J66XEdgMF1s0WwlYldE2%2FGWmll7kHRdKLJLUvvWf1oq%2B578XGv1B%2F5gFDMsdmae9VuMO56b6HhKclq%2BTxvk96rfByVTV2eW2iqY8GfHYTZ6bKHPQnbMzLSDd6o4heLG7oezvUMU4iCABDkkbDlGwKzCU%2FYvK3eNNifYuGKXa7%2Fstz5m%2Booh1DdE2%2FddqdxU%2Blg%2BhnUeiBuJ09sHazSB1zRnLWO%2Fp2yI5WkDtMnrbSuw9Y%2B0xd1aZxLrXASe6FuLIlSltQZl%2BzAc%2F%2FvAt13PBG0j59qyjriECETuq90OqyS%2FVxE0t2WYIesa%2FAVHp9zD6iIGH%2Be5RYw3KuowwY6pgGrsvpC4FwU4yX9XlQ%2FXgSAw6HwI%2BQmXEj%2B%2FvcRpVXWdXqkLAilpj7VkBJrUmMYKb167Yh7dpk0wC0AOxEoEwww1ItMrJhzwdGjz6thq2cQolWLIu4zLx33A8iIN1Amq1xEpzx4gR7ZszyuGs4a2ZqQyyGWbv%2FvHHlpFBy83pwVpcUlwOCy8bi9u1Xn5ZAsmwF45H2HZlDuF%2FKtjJlP5GUU%2F0eXm9zf&X-Amz-Signature=16b879756e171e4289188acc8c309951a72d1183978cd78709b09d58aee700c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPCDQOV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGuC5XYJ%2FQvTbzI23ShfN7v1pWO9fHP4b6d3nOrPdWyyAiArGu4NbzUIaRhT%2BX2WcWWzV15sQNUjuQvS7XiB7%2BOQSir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaHS5xnAmOrpEDXEtKtwDTuHnEk92W3lPXbsv44bdEF4RpG%2Be1HMJceB3i6WaUUvDPbyFbX9XjzElqNJiyNn4Le0GnuXsUPKCsFR04%2Fie3XGTmwTqX%2BOZUCCVEzh9Khoq0tAkSlWXYfkXsgMc37lRPzK%2BIglNZ3R2hZ0%2F6%2BIRG4VpPpsfGJjLz1ULJxjm4neB%2BgM6YwwJkOs71HPSLNTbqeBoclrKpHA4LEshzX7ldIX2txSnIhq56%2BW7nkVn4yEnvOxQ1TC4g4C1YKIPQfVB1bHxQTHx%2BJtWAIcaHXC6qy%2BzsC6KTZ4VXM2wzKJp6s%2BVyJQpi1J66XEdgMF1s0WwlYldE2%2FGWmll7kHRdKLJLUvvWf1oq%2B578XGv1B%2F5gFDMsdmae9VuMO56b6HhKclq%2BTxvk96rfByVTV2eW2iqY8GfHYTZ6bKHPQnbMzLSDd6o4heLG7oezvUMU4iCABDkkbDlGwKzCU%2FYvK3eNNifYuGKXa7%2Fstz5m%2Booh1DdE2%2FddqdxU%2Blg%2BhnUeiBuJ09sHazSB1zRnLWO%2Fp2yI5WkDtMnrbSuw9Y%2B0xd1aZxLrXASe6FuLIlSltQZl%2BzAc%2F%2FvAt13PBG0j59qyjriECETuq90OqyS%2FVxE0t2WYIesa%2FAVHp9zD6iIGH%2Be5RYw3KuowwY6pgGrsvpC4FwU4yX9XlQ%2FXgSAw6HwI%2BQmXEj%2B%2FvcRpVXWdXqkLAilpj7VkBJrUmMYKb167Yh7dpk0wC0AOxEoEwww1ItMrJhzwdGjz6thq2cQolWLIu4zLx33A8iIN1Amq1xEpzx4gR7ZszyuGs4a2ZqQyyGWbv%2FvHHlpFBy83pwVpcUlwOCy8bi9u1Xn5ZAsmwF45H2HZlDuF%2FKtjJlP5GUU%2F0eXm9zf&X-Amz-Signature=5d356207b4da037895743368f428e2db2d73e5785f913fb641ba138ed1c702e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPCDQOV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGuC5XYJ%2FQvTbzI23ShfN7v1pWO9fHP4b6d3nOrPdWyyAiArGu4NbzUIaRhT%2BX2WcWWzV15sQNUjuQvS7XiB7%2BOQSir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaHS5xnAmOrpEDXEtKtwDTuHnEk92W3lPXbsv44bdEF4RpG%2Be1HMJceB3i6WaUUvDPbyFbX9XjzElqNJiyNn4Le0GnuXsUPKCsFR04%2Fie3XGTmwTqX%2BOZUCCVEzh9Khoq0tAkSlWXYfkXsgMc37lRPzK%2BIglNZ3R2hZ0%2F6%2BIRG4VpPpsfGJjLz1ULJxjm4neB%2BgM6YwwJkOs71HPSLNTbqeBoclrKpHA4LEshzX7ldIX2txSnIhq56%2BW7nkVn4yEnvOxQ1TC4g4C1YKIPQfVB1bHxQTHx%2BJtWAIcaHXC6qy%2BzsC6KTZ4VXM2wzKJp6s%2BVyJQpi1J66XEdgMF1s0WwlYldE2%2FGWmll7kHRdKLJLUvvWf1oq%2B578XGv1B%2F5gFDMsdmae9VuMO56b6HhKclq%2BTxvk96rfByVTV2eW2iqY8GfHYTZ6bKHPQnbMzLSDd6o4heLG7oezvUMU4iCABDkkbDlGwKzCU%2FYvK3eNNifYuGKXa7%2Fstz5m%2Booh1DdE2%2FddqdxU%2Blg%2BhnUeiBuJ09sHazSB1zRnLWO%2Fp2yI5WkDtMnrbSuw9Y%2B0xd1aZxLrXASe6FuLIlSltQZl%2BzAc%2F%2FvAt13PBG0j59qyjriECETuq90OqyS%2FVxE0t2WYIesa%2FAVHp9zD6iIGH%2Be5RYw3KuowwY6pgGrsvpC4FwU4yX9XlQ%2FXgSAw6HwI%2BQmXEj%2B%2FvcRpVXWdXqkLAilpj7VkBJrUmMYKb167Yh7dpk0wC0AOxEoEwww1ItMrJhzwdGjz6thq2cQolWLIu4zLx33A8iIN1Amq1xEpzx4gR7ZszyuGs4a2ZqQyyGWbv%2FvHHlpFBy83pwVpcUlwOCy8bi9u1Xn5ZAsmwF45H2HZlDuF%2FKtjJlP5GUU%2F0eXm9zf&X-Amz-Signature=24007c50d52046587067c7bbd4798024ef55b1ac1f1c6d2a80a52d0a9bba9d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPCDQOV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGuC5XYJ%2FQvTbzI23ShfN7v1pWO9fHP4b6d3nOrPdWyyAiArGu4NbzUIaRhT%2BX2WcWWzV15sQNUjuQvS7XiB7%2BOQSir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaHS5xnAmOrpEDXEtKtwDTuHnEk92W3lPXbsv44bdEF4RpG%2Be1HMJceB3i6WaUUvDPbyFbX9XjzElqNJiyNn4Le0GnuXsUPKCsFR04%2Fie3XGTmwTqX%2BOZUCCVEzh9Khoq0tAkSlWXYfkXsgMc37lRPzK%2BIglNZ3R2hZ0%2F6%2BIRG4VpPpsfGJjLz1ULJxjm4neB%2BgM6YwwJkOs71HPSLNTbqeBoclrKpHA4LEshzX7ldIX2txSnIhq56%2BW7nkVn4yEnvOxQ1TC4g4C1YKIPQfVB1bHxQTHx%2BJtWAIcaHXC6qy%2BzsC6KTZ4VXM2wzKJp6s%2BVyJQpi1J66XEdgMF1s0WwlYldE2%2FGWmll7kHRdKLJLUvvWf1oq%2B578XGv1B%2F5gFDMsdmae9VuMO56b6HhKclq%2BTxvk96rfByVTV2eW2iqY8GfHYTZ6bKHPQnbMzLSDd6o4heLG7oezvUMU4iCABDkkbDlGwKzCU%2FYvK3eNNifYuGKXa7%2Fstz5m%2Booh1DdE2%2FddqdxU%2Blg%2BhnUeiBuJ09sHazSB1zRnLWO%2Fp2yI5WkDtMnrbSuw9Y%2B0xd1aZxLrXASe6FuLIlSltQZl%2BzAc%2F%2FvAt13PBG0j59qyjriECETuq90OqyS%2FVxE0t2WYIesa%2FAVHp9zD6iIGH%2Be5RYw3KuowwY6pgGrsvpC4FwU4yX9XlQ%2FXgSAw6HwI%2BQmXEj%2B%2FvcRpVXWdXqkLAilpj7VkBJrUmMYKb167Yh7dpk0wC0AOxEoEwww1ItMrJhzwdGjz6thq2cQolWLIu4zLx33A8iIN1Amq1xEpzx4gR7ZszyuGs4a2ZqQyyGWbv%2FvHHlpFBy83pwVpcUlwOCy8bi9u1Xn5ZAsmwF45H2HZlDuF%2FKtjJlP5GUU%2F0eXm9zf&X-Amz-Signature=adeabb2c034208dd19863d4705feb46f58546a36dda32a18fe44a1525adf6d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPCDQOV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGuC5XYJ%2FQvTbzI23ShfN7v1pWO9fHP4b6d3nOrPdWyyAiArGu4NbzUIaRhT%2BX2WcWWzV15sQNUjuQvS7XiB7%2BOQSir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaHS5xnAmOrpEDXEtKtwDTuHnEk92W3lPXbsv44bdEF4RpG%2Be1HMJceB3i6WaUUvDPbyFbX9XjzElqNJiyNn4Le0GnuXsUPKCsFR04%2Fie3XGTmwTqX%2BOZUCCVEzh9Khoq0tAkSlWXYfkXsgMc37lRPzK%2BIglNZ3R2hZ0%2F6%2BIRG4VpPpsfGJjLz1ULJxjm4neB%2BgM6YwwJkOs71HPSLNTbqeBoclrKpHA4LEshzX7ldIX2txSnIhq56%2BW7nkVn4yEnvOxQ1TC4g4C1YKIPQfVB1bHxQTHx%2BJtWAIcaHXC6qy%2BzsC6KTZ4VXM2wzKJp6s%2BVyJQpi1J66XEdgMF1s0WwlYldE2%2FGWmll7kHRdKLJLUvvWf1oq%2B578XGv1B%2F5gFDMsdmae9VuMO56b6HhKclq%2BTxvk96rfByVTV2eW2iqY8GfHYTZ6bKHPQnbMzLSDd6o4heLG7oezvUMU4iCABDkkbDlGwKzCU%2FYvK3eNNifYuGKXa7%2Fstz5m%2Booh1DdE2%2FddqdxU%2Blg%2BhnUeiBuJ09sHazSB1zRnLWO%2Fp2yI5WkDtMnrbSuw9Y%2B0xd1aZxLrXASe6FuLIlSltQZl%2BzAc%2F%2FvAt13PBG0j59qyjriECETuq90OqyS%2FVxE0t2WYIesa%2FAVHp9zD6iIGH%2Be5RYw3KuowwY6pgGrsvpC4FwU4yX9XlQ%2FXgSAw6HwI%2BQmXEj%2B%2FvcRpVXWdXqkLAilpj7VkBJrUmMYKb167Yh7dpk0wC0AOxEoEwww1ItMrJhzwdGjz6thq2cQolWLIu4zLx33A8iIN1Amq1xEpzx4gR7ZszyuGs4a2ZqQyyGWbv%2FvHHlpFBy83pwVpcUlwOCy8bi9u1Xn5ZAsmwF45H2HZlDuF%2FKtjJlP5GUU%2F0eXm9zf&X-Amz-Signature=fc58f58fb957cb425afd8e1ce29a7931e7521f881f6face2cefd10203780dbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPCDQOV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGuC5XYJ%2FQvTbzI23ShfN7v1pWO9fHP4b6d3nOrPdWyyAiArGu4NbzUIaRhT%2BX2WcWWzV15sQNUjuQvS7XiB7%2BOQSir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMaHS5xnAmOrpEDXEtKtwDTuHnEk92W3lPXbsv44bdEF4RpG%2Be1HMJceB3i6WaUUvDPbyFbX9XjzElqNJiyNn4Le0GnuXsUPKCsFR04%2Fie3XGTmwTqX%2BOZUCCVEzh9Khoq0tAkSlWXYfkXsgMc37lRPzK%2BIglNZ3R2hZ0%2F6%2BIRG4VpPpsfGJjLz1ULJxjm4neB%2BgM6YwwJkOs71HPSLNTbqeBoclrKpHA4LEshzX7ldIX2txSnIhq56%2BW7nkVn4yEnvOxQ1TC4g4C1YKIPQfVB1bHxQTHx%2BJtWAIcaHXC6qy%2BzsC6KTZ4VXM2wzKJp6s%2BVyJQpi1J66XEdgMF1s0WwlYldE2%2FGWmll7kHRdKLJLUvvWf1oq%2B578XGv1B%2F5gFDMsdmae9VuMO56b6HhKclq%2BTxvk96rfByVTV2eW2iqY8GfHYTZ6bKHPQnbMzLSDd6o4heLG7oezvUMU4iCABDkkbDlGwKzCU%2FYvK3eNNifYuGKXa7%2Fstz5m%2Booh1DdE2%2FddqdxU%2Blg%2BhnUeiBuJ09sHazSB1zRnLWO%2Fp2yI5WkDtMnrbSuw9Y%2B0xd1aZxLrXASe6FuLIlSltQZl%2BzAc%2F%2FvAt13PBG0j59qyjriECETuq90OqyS%2FVxE0t2WYIesa%2FAVHp9zD6iIGH%2Be5RYw3KuowwY6pgGrsvpC4FwU4yX9XlQ%2FXgSAw6HwI%2BQmXEj%2B%2FvcRpVXWdXqkLAilpj7VkBJrUmMYKb167Yh7dpk0wC0AOxEoEwww1ItMrJhzwdGjz6thq2cQolWLIu4zLx33A8iIN1Amq1xEpzx4gR7ZszyuGs4a2ZqQyyGWbv%2FvHHlpFBy83pwVpcUlwOCy8bi9u1Xn5ZAsmwF45H2HZlDuF%2FKtjJlP5GUU%2F0eXm9zf&X-Amz-Signature=24c9e325d5aa084319609aae528c38783e8b2dd930c7fc10f6a1f1e5f5f84f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
