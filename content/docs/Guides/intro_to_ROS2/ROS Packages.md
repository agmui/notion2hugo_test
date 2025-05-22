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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LPMVFT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHRm880tAyYCOg2UQHN4T4Bm2c6shOKshpLRAZdOcTFlAiEAm5CBU%2Bb67yNIm%2FHo%2BUAsl7mFgoeBGbtKMSKS4gamhVMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFGFi%2B1xIHKxm%2B3lCrcAxLtK00PSebYH9eDGqJOwocY0l6Lst8KXlXXFlLhuopDE4GzKAuYzAqQCqNNKBqKkA2gW%2Bs6VWo1gKpyA0gvrJ48j3pY9kmpFOn8T%2BlIVyPJInbOeVUqXwoU7YCXo7MUxLPnrJe8LRuN8uAbp4e5vNEA2ykvWBHnUyHsQE7Y8bm7DAXCN4gXIq9JnnJsRKtl4ennehmrIGR92sph6cz07EKmrmL0yV0KdVijypSsXfo%2FHwM9a33P44SJEgs%2F3aSR9m%2FKr%2BYgf1GkqSkMsNmqznZ6rEJlqPdJAEsI%2FKHF4wqoZk1PW7XJNRS%2Fmb%2Fg1FBBNH%2BiFisiEbm3BMI%2BwbdmnXsAarPzKGF8A9rg24mj3jyDGdBf80KmYJ%2BCXsHk96PPGsiSFnJLKiB%2F9cp08W5YwvyRlPSRbdEXyGXCVOaqgpcco4m1DDIQ%2BLQybFJwQHcH9V2IB0uy%2FAexkPpvnJUlKURjNJsNIppldfSgsPhXGDb4TUZ%2FiUF0KKmyZ%2F4mR1AVfTAehDG6x5moBYlGK8GPSlzUMUH9MIgEy7EbRl5HGs20FfDxDfF9%2BheOjbdUs8yC8AlZR4x0cCS8RMsIkt94tW%2BdI82eLuO3ETMn0Q4qJ8hYmCU3tNUeiCN1JAwWMPipvsEGOqUBNtIeVLTI1gaT%2FsWNaWvdI6Lhe8yU0VqU3RM%2Bt%2F%2BeGhjpLxz1gZFsh25E%2BRSvAoiSFmbUcJ34U34H%2BUVZAWbzh4piNj%2FHVXPdFXtX3TOcbQfryaDwQy3c5XBsbsSTtMQaG0AoPzfyEa7eoEjCUK%2BsX2IrSa9rTVvr47ht7eprjefTVA8wfsjybC6%2BqEbxyTVFicmuP4aQZ%2FiWpm0RNnKu55ZW8kjo&X-Amz-Signature=bffbc2ca905210a6178bbde099e719b504447fb6fa86ae10869eb4ef4f34f72a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LPMVFT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHRm880tAyYCOg2UQHN4T4Bm2c6shOKshpLRAZdOcTFlAiEAm5CBU%2Bb67yNIm%2FHo%2BUAsl7mFgoeBGbtKMSKS4gamhVMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFGFi%2B1xIHKxm%2B3lCrcAxLtK00PSebYH9eDGqJOwocY0l6Lst8KXlXXFlLhuopDE4GzKAuYzAqQCqNNKBqKkA2gW%2Bs6VWo1gKpyA0gvrJ48j3pY9kmpFOn8T%2BlIVyPJInbOeVUqXwoU7YCXo7MUxLPnrJe8LRuN8uAbp4e5vNEA2ykvWBHnUyHsQE7Y8bm7DAXCN4gXIq9JnnJsRKtl4ennehmrIGR92sph6cz07EKmrmL0yV0KdVijypSsXfo%2FHwM9a33P44SJEgs%2F3aSR9m%2FKr%2BYgf1GkqSkMsNmqznZ6rEJlqPdJAEsI%2FKHF4wqoZk1PW7XJNRS%2Fmb%2Fg1FBBNH%2BiFisiEbm3BMI%2BwbdmnXsAarPzKGF8A9rg24mj3jyDGdBf80KmYJ%2BCXsHk96PPGsiSFnJLKiB%2F9cp08W5YwvyRlPSRbdEXyGXCVOaqgpcco4m1DDIQ%2BLQybFJwQHcH9V2IB0uy%2FAexkPpvnJUlKURjNJsNIppldfSgsPhXGDb4TUZ%2FiUF0KKmyZ%2F4mR1AVfTAehDG6x5moBYlGK8GPSlzUMUH9MIgEy7EbRl5HGs20FfDxDfF9%2BheOjbdUs8yC8AlZR4x0cCS8RMsIkt94tW%2BdI82eLuO3ETMn0Q4qJ8hYmCU3tNUeiCN1JAwWMPipvsEGOqUBNtIeVLTI1gaT%2FsWNaWvdI6Lhe8yU0VqU3RM%2Bt%2F%2BeGhjpLxz1gZFsh25E%2BRSvAoiSFmbUcJ34U34H%2BUVZAWbzh4piNj%2FHVXPdFXtX3TOcbQfryaDwQy3c5XBsbsSTtMQaG0AoPzfyEa7eoEjCUK%2BsX2IrSa9rTVvr47ht7eprjefTVA8wfsjybC6%2BqEbxyTVFicmuP4aQZ%2FiWpm0RNnKu55ZW8kjo&X-Amz-Signature=0d8d371c82186757026b2e6c77e0ffcfd489a5ccb7fc4b9d331534d610aa6a98&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LPMVFT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHRm880tAyYCOg2UQHN4T4Bm2c6shOKshpLRAZdOcTFlAiEAm5CBU%2Bb67yNIm%2FHo%2BUAsl7mFgoeBGbtKMSKS4gamhVMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFGFi%2B1xIHKxm%2B3lCrcAxLtK00PSebYH9eDGqJOwocY0l6Lst8KXlXXFlLhuopDE4GzKAuYzAqQCqNNKBqKkA2gW%2Bs6VWo1gKpyA0gvrJ48j3pY9kmpFOn8T%2BlIVyPJInbOeVUqXwoU7YCXo7MUxLPnrJe8LRuN8uAbp4e5vNEA2ykvWBHnUyHsQE7Y8bm7DAXCN4gXIq9JnnJsRKtl4ennehmrIGR92sph6cz07EKmrmL0yV0KdVijypSsXfo%2FHwM9a33P44SJEgs%2F3aSR9m%2FKr%2BYgf1GkqSkMsNmqznZ6rEJlqPdJAEsI%2FKHF4wqoZk1PW7XJNRS%2Fmb%2Fg1FBBNH%2BiFisiEbm3BMI%2BwbdmnXsAarPzKGF8A9rg24mj3jyDGdBf80KmYJ%2BCXsHk96PPGsiSFnJLKiB%2F9cp08W5YwvyRlPSRbdEXyGXCVOaqgpcco4m1DDIQ%2BLQybFJwQHcH9V2IB0uy%2FAexkPpvnJUlKURjNJsNIppldfSgsPhXGDb4TUZ%2FiUF0KKmyZ%2F4mR1AVfTAehDG6x5moBYlGK8GPSlzUMUH9MIgEy7EbRl5HGs20FfDxDfF9%2BheOjbdUs8yC8AlZR4x0cCS8RMsIkt94tW%2BdI82eLuO3ETMn0Q4qJ8hYmCU3tNUeiCN1JAwWMPipvsEGOqUBNtIeVLTI1gaT%2FsWNaWvdI6Lhe8yU0VqU3RM%2Bt%2F%2BeGhjpLxz1gZFsh25E%2BRSvAoiSFmbUcJ34U34H%2BUVZAWbzh4piNj%2FHVXPdFXtX3TOcbQfryaDwQy3c5XBsbsSTtMQaG0AoPzfyEa7eoEjCUK%2BsX2IrSa9rTVvr47ht7eprjefTVA8wfsjybC6%2BqEbxyTVFicmuP4aQZ%2FiWpm0RNnKu55ZW8kjo&X-Amz-Signature=e993ff8948ec0d8deb6cb5908755752809b0772da6527804317d2ea1f978e36e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LPMVFT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHRm880tAyYCOg2UQHN4T4Bm2c6shOKshpLRAZdOcTFlAiEAm5CBU%2Bb67yNIm%2FHo%2BUAsl7mFgoeBGbtKMSKS4gamhVMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFGFi%2B1xIHKxm%2B3lCrcAxLtK00PSebYH9eDGqJOwocY0l6Lst8KXlXXFlLhuopDE4GzKAuYzAqQCqNNKBqKkA2gW%2Bs6VWo1gKpyA0gvrJ48j3pY9kmpFOn8T%2BlIVyPJInbOeVUqXwoU7YCXo7MUxLPnrJe8LRuN8uAbp4e5vNEA2ykvWBHnUyHsQE7Y8bm7DAXCN4gXIq9JnnJsRKtl4ennehmrIGR92sph6cz07EKmrmL0yV0KdVijypSsXfo%2FHwM9a33P44SJEgs%2F3aSR9m%2FKr%2BYgf1GkqSkMsNmqznZ6rEJlqPdJAEsI%2FKHF4wqoZk1PW7XJNRS%2Fmb%2Fg1FBBNH%2BiFisiEbm3BMI%2BwbdmnXsAarPzKGF8A9rg24mj3jyDGdBf80KmYJ%2BCXsHk96PPGsiSFnJLKiB%2F9cp08W5YwvyRlPSRbdEXyGXCVOaqgpcco4m1DDIQ%2BLQybFJwQHcH9V2IB0uy%2FAexkPpvnJUlKURjNJsNIppldfSgsPhXGDb4TUZ%2FiUF0KKmyZ%2F4mR1AVfTAehDG6x5moBYlGK8GPSlzUMUH9MIgEy7EbRl5HGs20FfDxDfF9%2BheOjbdUs8yC8AlZR4x0cCS8RMsIkt94tW%2BdI82eLuO3ETMn0Q4qJ8hYmCU3tNUeiCN1JAwWMPipvsEGOqUBNtIeVLTI1gaT%2FsWNaWvdI6Lhe8yU0VqU3RM%2Bt%2F%2BeGhjpLxz1gZFsh25E%2BRSvAoiSFmbUcJ34U34H%2BUVZAWbzh4piNj%2FHVXPdFXtX3TOcbQfryaDwQy3c5XBsbsSTtMQaG0AoPzfyEa7eoEjCUK%2BsX2IrSa9rTVvr47ht7eprjefTVA8wfsjybC6%2BqEbxyTVFicmuP4aQZ%2FiWpm0RNnKu55ZW8kjo&X-Amz-Signature=5df1fb35ca13d8460438f4fe974d78f3e31b07ecf1ad12ad5f91c25324ca7821&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LPMVFT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHRm880tAyYCOg2UQHN4T4Bm2c6shOKshpLRAZdOcTFlAiEAm5CBU%2Bb67yNIm%2FHo%2BUAsl7mFgoeBGbtKMSKS4gamhVMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFGFi%2B1xIHKxm%2B3lCrcAxLtK00PSebYH9eDGqJOwocY0l6Lst8KXlXXFlLhuopDE4GzKAuYzAqQCqNNKBqKkA2gW%2Bs6VWo1gKpyA0gvrJ48j3pY9kmpFOn8T%2BlIVyPJInbOeVUqXwoU7YCXo7MUxLPnrJe8LRuN8uAbp4e5vNEA2ykvWBHnUyHsQE7Y8bm7DAXCN4gXIq9JnnJsRKtl4ennehmrIGR92sph6cz07EKmrmL0yV0KdVijypSsXfo%2FHwM9a33P44SJEgs%2F3aSR9m%2FKr%2BYgf1GkqSkMsNmqznZ6rEJlqPdJAEsI%2FKHF4wqoZk1PW7XJNRS%2Fmb%2Fg1FBBNH%2BiFisiEbm3BMI%2BwbdmnXsAarPzKGF8A9rg24mj3jyDGdBf80KmYJ%2BCXsHk96PPGsiSFnJLKiB%2F9cp08W5YwvyRlPSRbdEXyGXCVOaqgpcco4m1DDIQ%2BLQybFJwQHcH9V2IB0uy%2FAexkPpvnJUlKURjNJsNIppldfSgsPhXGDb4TUZ%2FiUF0KKmyZ%2F4mR1AVfTAehDG6x5moBYlGK8GPSlzUMUH9MIgEy7EbRl5HGs20FfDxDfF9%2BheOjbdUs8yC8AlZR4x0cCS8RMsIkt94tW%2BdI82eLuO3ETMn0Q4qJ8hYmCU3tNUeiCN1JAwWMPipvsEGOqUBNtIeVLTI1gaT%2FsWNaWvdI6Lhe8yU0VqU3RM%2Bt%2F%2BeGhjpLxz1gZFsh25E%2BRSvAoiSFmbUcJ34U34H%2BUVZAWbzh4piNj%2FHVXPdFXtX3TOcbQfryaDwQy3c5XBsbsSTtMQaG0AoPzfyEa7eoEjCUK%2BsX2IrSa9rTVvr47ht7eprjefTVA8wfsjybC6%2BqEbxyTVFicmuP4aQZ%2FiWpm0RNnKu55ZW8kjo&X-Amz-Signature=2a6f6613ea4057b5646c3b133617f352f53d0de4c529d81c46a0871023926c14&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LPMVFT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHRm880tAyYCOg2UQHN4T4Bm2c6shOKshpLRAZdOcTFlAiEAm5CBU%2Bb67yNIm%2FHo%2BUAsl7mFgoeBGbtKMSKS4gamhVMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFGFi%2B1xIHKxm%2B3lCrcAxLtK00PSebYH9eDGqJOwocY0l6Lst8KXlXXFlLhuopDE4GzKAuYzAqQCqNNKBqKkA2gW%2Bs6VWo1gKpyA0gvrJ48j3pY9kmpFOn8T%2BlIVyPJInbOeVUqXwoU7YCXo7MUxLPnrJe8LRuN8uAbp4e5vNEA2ykvWBHnUyHsQE7Y8bm7DAXCN4gXIq9JnnJsRKtl4ennehmrIGR92sph6cz07EKmrmL0yV0KdVijypSsXfo%2FHwM9a33P44SJEgs%2F3aSR9m%2FKr%2BYgf1GkqSkMsNmqznZ6rEJlqPdJAEsI%2FKHF4wqoZk1PW7XJNRS%2Fmb%2Fg1FBBNH%2BiFisiEbm3BMI%2BwbdmnXsAarPzKGF8A9rg24mj3jyDGdBf80KmYJ%2BCXsHk96PPGsiSFnJLKiB%2F9cp08W5YwvyRlPSRbdEXyGXCVOaqgpcco4m1DDIQ%2BLQybFJwQHcH9V2IB0uy%2FAexkPpvnJUlKURjNJsNIppldfSgsPhXGDb4TUZ%2FiUF0KKmyZ%2F4mR1AVfTAehDG6x5moBYlGK8GPSlzUMUH9MIgEy7EbRl5HGs20FfDxDfF9%2BheOjbdUs8yC8AlZR4x0cCS8RMsIkt94tW%2BdI82eLuO3ETMn0Q4qJ8hYmCU3tNUeiCN1JAwWMPipvsEGOqUBNtIeVLTI1gaT%2FsWNaWvdI6Lhe8yU0VqU3RM%2Bt%2F%2BeGhjpLxz1gZFsh25E%2BRSvAoiSFmbUcJ34U34H%2BUVZAWbzh4piNj%2FHVXPdFXtX3TOcbQfryaDwQy3c5XBsbsSTtMQaG0AoPzfyEa7eoEjCUK%2BsX2IrSa9rTVvr47ht7eprjefTVA8wfsjybC6%2BqEbxyTVFicmuP4aQZ%2FiWpm0RNnKu55ZW8kjo&X-Amz-Signature=b28fbe09d283ec001ae37b76b3f48a12f30fba7eae5a07230df98bf8c4c49e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LPMVFT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHRm880tAyYCOg2UQHN4T4Bm2c6shOKshpLRAZdOcTFlAiEAm5CBU%2Bb67yNIm%2FHo%2BUAsl7mFgoeBGbtKMSKS4gamhVMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFGFi%2B1xIHKxm%2B3lCrcAxLtK00PSebYH9eDGqJOwocY0l6Lst8KXlXXFlLhuopDE4GzKAuYzAqQCqNNKBqKkA2gW%2Bs6VWo1gKpyA0gvrJ48j3pY9kmpFOn8T%2BlIVyPJInbOeVUqXwoU7YCXo7MUxLPnrJe8LRuN8uAbp4e5vNEA2ykvWBHnUyHsQE7Y8bm7DAXCN4gXIq9JnnJsRKtl4ennehmrIGR92sph6cz07EKmrmL0yV0KdVijypSsXfo%2FHwM9a33P44SJEgs%2F3aSR9m%2FKr%2BYgf1GkqSkMsNmqznZ6rEJlqPdJAEsI%2FKHF4wqoZk1PW7XJNRS%2Fmb%2Fg1FBBNH%2BiFisiEbm3BMI%2BwbdmnXsAarPzKGF8A9rg24mj3jyDGdBf80KmYJ%2BCXsHk96PPGsiSFnJLKiB%2F9cp08W5YwvyRlPSRbdEXyGXCVOaqgpcco4m1DDIQ%2BLQybFJwQHcH9V2IB0uy%2FAexkPpvnJUlKURjNJsNIppldfSgsPhXGDb4TUZ%2FiUF0KKmyZ%2F4mR1AVfTAehDG6x5moBYlGK8GPSlzUMUH9MIgEy7EbRl5HGs20FfDxDfF9%2BheOjbdUs8yC8AlZR4x0cCS8RMsIkt94tW%2BdI82eLuO3ETMn0Q4qJ8hYmCU3tNUeiCN1JAwWMPipvsEGOqUBNtIeVLTI1gaT%2FsWNaWvdI6Lhe8yU0VqU3RM%2Bt%2F%2BeGhjpLxz1gZFsh25E%2BRSvAoiSFmbUcJ34U34H%2BUVZAWbzh4piNj%2FHVXPdFXtX3TOcbQfryaDwQy3c5XBsbsSTtMQaG0AoPzfyEa7eoEjCUK%2BsX2IrSa9rTVvr47ht7eprjefTVA8wfsjybC6%2BqEbxyTVFicmuP4aQZ%2FiWpm0RNnKu55ZW8kjo&X-Amz-Signature=1ca6c8b7f9cac5848ac6392adc90926ef6b2662b5cff49311ae2a487196efa16&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
