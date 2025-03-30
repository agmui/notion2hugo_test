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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWZWXCY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCp34tswpgpeNoz3Jm0CWQ7%2FITUxltUj47eB0oanIzo9gIhANUl2iOfu81XcjIWGXsSmOu9mo4QuUUDHy12KJmsn21lKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLPmSP1Ew5KtJbFkIq3APAwpx33afgNEK8ZWuRxiOWve7FplX%2FfYJmOQrI1A6ym3w3AuZ5PrtG7cPw8qqQhueUcYtYaNJNOeSuyUvId3HhCrMyIPhZ%2F1CF8w9rDIaHXM2wVVnVK0qbWglszPw3Am1KIvrWEO7oLloHwcAl0XcfLRKVsKTazmi1jf4O53zTdym2MAzQTr0LPT1Ek5fK7eH39q7jrcy6vhq7toHhovZx%2BvkrWabn99dx3R%2BZw0HTEBbrY%2BTKcOt9gL0wjdxp5lwI7kF4mzh16T3blBwNQW1k3YpxCfGkf2VzAB%2Fn%2F%2FoUUfSUqFzBSjnAsWjejm0ZEfStDeGHg3Y2T76j66hm5kBE0W8oSDK7hf28KFZG5nSy%2Fhq2eHhE3cgFCokfAMc0jbU7CzRczOa6DqtSmZt7%2FoirGHh9wdWoqMeIfhVgYnjHhTXpLLi2oBr3%2Bbfk4ER2VnKszptkLjUDJgF1TOqDrhTWEf74WRDCjnTQ6TcJjchDKWTHYvClDnGNx3dUWEHwMyHpTpiXk%2FHWGALYeC7ePYyuyVFaDffSi%2F1HJC%2Fx%2FcWRJwCZzPO%2BGPjdPyZP90FYVdtvHyA9LL4xYuMKP%2BtqkBwE7iZEcaWFx076TBfba0SxVbbhTVle5IJE%2FeJclDDk6aK%2FBjqkAfirtLaTWxeUQyqGYLjfJOXweQWnSOIkMOHmk741UW2dW9XPRtOyqixrvP3syK83cQlM00395c%2FDrlvYpHuE%2FlQXlxNz0sM60HYF3uMrHslCKP22oHx%2BFmwgMqJ7mDgZfM9MoqTQ4M5JIzIWK99HN%2BVBkaXi4rmrIzfNHVY4Yx1esJvIJwv4s8NEhsqzchapIOx1ZsmqmVjotq4VcJEWcjudsP6a&X-Amz-Signature=30aa16fffab9dffbe384e64675a03058fb143d79550de3bc6bb519dda3cfd872&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWZWXCY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCp34tswpgpeNoz3Jm0CWQ7%2FITUxltUj47eB0oanIzo9gIhANUl2iOfu81XcjIWGXsSmOu9mo4QuUUDHy12KJmsn21lKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLPmSP1Ew5KtJbFkIq3APAwpx33afgNEK8ZWuRxiOWve7FplX%2FfYJmOQrI1A6ym3w3AuZ5PrtG7cPw8qqQhueUcYtYaNJNOeSuyUvId3HhCrMyIPhZ%2F1CF8w9rDIaHXM2wVVnVK0qbWglszPw3Am1KIvrWEO7oLloHwcAl0XcfLRKVsKTazmi1jf4O53zTdym2MAzQTr0LPT1Ek5fK7eH39q7jrcy6vhq7toHhovZx%2BvkrWabn99dx3R%2BZw0HTEBbrY%2BTKcOt9gL0wjdxp5lwI7kF4mzh16T3blBwNQW1k3YpxCfGkf2VzAB%2Fn%2F%2FoUUfSUqFzBSjnAsWjejm0ZEfStDeGHg3Y2T76j66hm5kBE0W8oSDK7hf28KFZG5nSy%2Fhq2eHhE3cgFCokfAMc0jbU7CzRczOa6DqtSmZt7%2FoirGHh9wdWoqMeIfhVgYnjHhTXpLLi2oBr3%2Bbfk4ER2VnKszptkLjUDJgF1TOqDrhTWEf74WRDCjnTQ6TcJjchDKWTHYvClDnGNx3dUWEHwMyHpTpiXk%2FHWGALYeC7ePYyuyVFaDffSi%2F1HJC%2Fx%2FcWRJwCZzPO%2BGPjdPyZP90FYVdtvHyA9LL4xYuMKP%2BtqkBwE7iZEcaWFx076TBfba0SxVbbhTVle5IJE%2FeJclDDk6aK%2FBjqkAfirtLaTWxeUQyqGYLjfJOXweQWnSOIkMOHmk741UW2dW9XPRtOyqixrvP3syK83cQlM00395c%2FDrlvYpHuE%2FlQXlxNz0sM60HYF3uMrHslCKP22oHx%2BFmwgMqJ7mDgZfM9MoqTQ4M5JIzIWK99HN%2BVBkaXi4rmrIzfNHVY4Yx1esJvIJwv4s8NEhsqzchapIOx1ZsmqmVjotq4VcJEWcjudsP6a&X-Amz-Signature=115ad0af76c95cf8524fa94152e5594af619ede1b1e69ce9d4c399ccc9e716fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWZWXCY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCp34tswpgpeNoz3Jm0CWQ7%2FITUxltUj47eB0oanIzo9gIhANUl2iOfu81XcjIWGXsSmOu9mo4QuUUDHy12KJmsn21lKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLPmSP1Ew5KtJbFkIq3APAwpx33afgNEK8ZWuRxiOWve7FplX%2FfYJmOQrI1A6ym3w3AuZ5PrtG7cPw8qqQhueUcYtYaNJNOeSuyUvId3HhCrMyIPhZ%2F1CF8w9rDIaHXM2wVVnVK0qbWglszPw3Am1KIvrWEO7oLloHwcAl0XcfLRKVsKTazmi1jf4O53zTdym2MAzQTr0LPT1Ek5fK7eH39q7jrcy6vhq7toHhovZx%2BvkrWabn99dx3R%2BZw0HTEBbrY%2BTKcOt9gL0wjdxp5lwI7kF4mzh16T3blBwNQW1k3YpxCfGkf2VzAB%2Fn%2F%2FoUUfSUqFzBSjnAsWjejm0ZEfStDeGHg3Y2T76j66hm5kBE0W8oSDK7hf28KFZG5nSy%2Fhq2eHhE3cgFCokfAMc0jbU7CzRczOa6DqtSmZt7%2FoirGHh9wdWoqMeIfhVgYnjHhTXpLLi2oBr3%2Bbfk4ER2VnKszptkLjUDJgF1TOqDrhTWEf74WRDCjnTQ6TcJjchDKWTHYvClDnGNx3dUWEHwMyHpTpiXk%2FHWGALYeC7ePYyuyVFaDffSi%2F1HJC%2Fx%2FcWRJwCZzPO%2BGPjdPyZP90FYVdtvHyA9LL4xYuMKP%2BtqkBwE7iZEcaWFx076TBfba0SxVbbhTVle5IJE%2FeJclDDk6aK%2FBjqkAfirtLaTWxeUQyqGYLjfJOXweQWnSOIkMOHmk741UW2dW9XPRtOyqixrvP3syK83cQlM00395c%2FDrlvYpHuE%2FlQXlxNz0sM60HYF3uMrHslCKP22oHx%2BFmwgMqJ7mDgZfM9MoqTQ4M5JIzIWK99HN%2BVBkaXi4rmrIzfNHVY4Yx1esJvIJwv4s8NEhsqzchapIOx1ZsmqmVjotq4VcJEWcjudsP6a&X-Amz-Signature=5bdc9b8f4511f7c0acd6ebfc22117bf87cc77bbc1f69991a93492bd63a217b69&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWZWXCY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCp34tswpgpeNoz3Jm0CWQ7%2FITUxltUj47eB0oanIzo9gIhANUl2iOfu81XcjIWGXsSmOu9mo4QuUUDHy12KJmsn21lKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLPmSP1Ew5KtJbFkIq3APAwpx33afgNEK8ZWuRxiOWve7FplX%2FfYJmOQrI1A6ym3w3AuZ5PrtG7cPw8qqQhueUcYtYaNJNOeSuyUvId3HhCrMyIPhZ%2F1CF8w9rDIaHXM2wVVnVK0qbWglszPw3Am1KIvrWEO7oLloHwcAl0XcfLRKVsKTazmi1jf4O53zTdym2MAzQTr0LPT1Ek5fK7eH39q7jrcy6vhq7toHhovZx%2BvkrWabn99dx3R%2BZw0HTEBbrY%2BTKcOt9gL0wjdxp5lwI7kF4mzh16T3blBwNQW1k3YpxCfGkf2VzAB%2Fn%2F%2FoUUfSUqFzBSjnAsWjejm0ZEfStDeGHg3Y2T76j66hm5kBE0W8oSDK7hf28KFZG5nSy%2Fhq2eHhE3cgFCokfAMc0jbU7CzRczOa6DqtSmZt7%2FoirGHh9wdWoqMeIfhVgYnjHhTXpLLi2oBr3%2Bbfk4ER2VnKszptkLjUDJgF1TOqDrhTWEf74WRDCjnTQ6TcJjchDKWTHYvClDnGNx3dUWEHwMyHpTpiXk%2FHWGALYeC7ePYyuyVFaDffSi%2F1HJC%2Fx%2FcWRJwCZzPO%2BGPjdPyZP90FYVdtvHyA9LL4xYuMKP%2BtqkBwE7iZEcaWFx076TBfba0SxVbbhTVle5IJE%2FeJclDDk6aK%2FBjqkAfirtLaTWxeUQyqGYLjfJOXweQWnSOIkMOHmk741UW2dW9XPRtOyqixrvP3syK83cQlM00395c%2FDrlvYpHuE%2FlQXlxNz0sM60HYF3uMrHslCKP22oHx%2BFmwgMqJ7mDgZfM9MoqTQ4M5JIzIWK99HN%2BVBkaXi4rmrIzfNHVY4Yx1esJvIJwv4s8NEhsqzchapIOx1ZsmqmVjotq4VcJEWcjudsP6a&X-Amz-Signature=d80a2bbe8ec1171b91381d0d4d715ce6cc76c36966ce7d51c1c02a5c9b59b4db&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWZWXCY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCp34tswpgpeNoz3Jm0CWQ7%2FITUxltUj47eB0oanIzo9gIhANUl2iOfu81XcjIWGXsSmOu9mo4QuUUDHy12KJmsn21lKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLPmSP1Ew5KtJbFkIq3APAwpx33afgNEK8ZWuRxiOWve7FplX%2FfYJmOQrI1A6ym3w3AuZ5PrtG7cPw8qqQhueUcYtYaNJNOeSuyUvId3HhCrMyIPhZ%2F1CF8w9rDIaHXM2wVVnVK0qbWglszPw3Am1KIvrWEO7oLloHwcAl0XcfLRKVsKTazmi1jf4O53zTdym2MAzQTr0LPT1Ek5fK7eH39q7jrcy6vhq7toHhovZx%2BvkrWabn99dx3R%2BZw0HTEBbrY%2BTKcOt9gL0wjdxp5lwI7kF4mzh16T3blBwNQW1k3YpxCfGkf2VzAB%2Fn%2F%2FoUUfSUqFzBSjnAsWjejm0ZEfStDeGHg3Y2T76j66hm5kBE0W8oSDK7hf28KFZG5nSy%2Fhq2eHhE3cgFCokfAMc0jbU7CzRczOa6DqtSmZt7%2FoirGHh9wdWoqMeIfhVgYnjHhTXpLLi2oBr3%2Bbfk4ER2VnKszptkLjUDJgF1TOqDrhTWEf74WRDCjnTQ6TcJjchDKWTHYvClDnGNx3dUWEHwMyHpTpiXk%2FHWGALYeC7ePYyuyVFaDffSi%2F1HJC%2Fx%2FcWRJwCZzPO%2BGPjdPyZP90FYVdtvHyA9LL4xYuMKP%2BtqkBwE7iZEcaWFx076TBfba0SxVbbhTVle5IJE%2FeJclDDk6aK%2FBjqkAfirtLaTWxeUQyqGYLjfJOXweQWnSOIkMOHmk741UW2dW9XPRtOyqixrvP3syK83cQlM00395c%2FDrlvYpHuE%2FlQXlxNz0sM60HYF3uMrHslCKP22oHx%2BFmwgMqJ7mDgZfM9MoqTQ4M5JIzIWK99HN%2BVBkaXi4rmrIzfNHVY4Yx1esJvIJwv4s8NEhsqzchapIOx1ZsmqmVjotq4VcJEWcjudsP6a&X-Amz-Signature=e6e9c10ac012fb96bdd2accdba00be60bf0fd3e0875a8332b360c953d9e9dc2b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWZWXCY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCp34tswpgpeNoz3Jm0CWQ7%2FITUxltUj47eB0oanIzo9gIhANUl2iOfu81XcjIWGXsSmOu9mo4QuUUDHy12KJmsn21lKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLPmSP1Ew5KtJbFkIq3APAwpx33afgNEK8ZWuRxiOWve7FplX%2FfYJmOQrI1A6ym3w3AuZ5PrtG7cPw8qqQhueUcYtYaNJNOeSuyUvId3HhCrMyIPhZ%2F1CF8w9rDIaHXM2wVVnVK0qbWglszPw3Am1KIvrWEO7oLloHwcAl0XcfLRKVsKTazmi1jf4O53zTdym2MAzQTr0LPT1Ek5fK7eH39q7jrcy6vhq7toHhovZx%2BvkrWabn99dx3R%2BZw0HTEBbrY%2BTKcOt9gL0wjdxp5lwI7kF4mzh16T3blBwNQW1k3YpxCfGkf2VzAB%2Fn%2F%2FoUUfSUqFzBSjnAsWjejm0ZEfStDeGHg3Y2T76j66hm5kBE0W8oSDK7hf28KFZG5nSy%2Fhq2eHhE3cgFCokfAMc0jbU7CzRczOa6DqtSmZt7%2FoirGHh9wdWoqMeIfhVgYnjHhTXpLLi2oBr3%2Bbfk4ER2VnKszptkLjUDJgF1TOqDrhTWEf74WRDCjnTQ6TcJjchDKWTHYvClDnGNx3dUWEHwMyHpTpiXk%2FHWGALYeC7ePYyuyVFaDffSi%2F1HJC%2Fx%2FcWRJwCZzPO%2BGPjdPyZP90FYVdtvHyA9LL4xYuMKP%2BtqkBwE7iZEcaWFx076TBfba0SxVbbhTVle5IJE%2FeJclDDk6aK%2FBjqkAfirtLaTWxeUQyqGYLjfJOXweQWnSOIkMOHmk741UW2dW9XPRtOyqixrvP3syK83cQlM00395c%2FDrlvYpHuE%2FlQXlxNz0sM60HYF3uMrHslCKP22oHx%2BFmwgMqJ7mDgZfM9MoqTQ4M5JIzIWK99HN%2BVBkaXi4rmrIzfNHVY4Yx1esJvIJwv4s8NEhsqzchapIOx1ZsmqmVjotq4VcJEWcjudsP6a&X-Amz-Signature=91984ae2db3a71ed3143a2cb332bf4066ad8dffbe6c005fd489a99abfd79ba25&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWZWXCY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCp34tswpgpeNoz3Jm0CWQ7%2FITUxltUj47eB0oanIzo9gIhANUl2iOfu81XcjIWGXsSmOu9mo4QuUUDHy12KJmsn21lKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLPmSP1Ew5KtJbFkIq3APAwpx33afgNEK8ZWuRxiOWve7FplX%2FfYJmOQrI1A6ym3w3AuZ5PrtG7cPw8qqQhueUcYtYaNJNOeSuyUvId3HhCrMyIPhZ%2F1CF8w9rDIaHXM2wVVnVK0qbWglszPw3Am1KIvrWEO7oLloHwcAl0XcfLRKVsKTazmi1jf4O53zTdym2MAzQTr0LPT1Ek5fK7eH39q7jrcy6vhq7toHhovZx%2BvkrWabn99dx3R%2BZw0HTEBbrY%2BTKcOt9gL0wjdxp5lwI7kF4mzh16T3blBwNQW1k3YpxCfGkf2VzAB%2Fn%2F%2FoUUfSUqFzBSjnAsWjejm0ZEfStDeGHg3Y2T76j66hm5kBE0W8oSDK7hf28KFZG5nSy%2Fhq2eHhE3cgFCokfAMc0jbU7CzRczOa6DqtSmZt7%2FoirGHh9wdWoqMeIfhVgYnjHhTXpLLi2oBr3%2Bbfk4ER2VnKszptkLjUDJgF1TOqDrhTWEf74WRDCjnTQ6TcJjchDKWTHYvClDnGNx3dUWEHwMyHpTpiXk%2FHWGALYeC7ePYyuyVFaDffSi%2F1HJC%2Fx%2FcWRJwCZzPO%2BGPjdPyZP90FYVdtvHyA9LL4xYuMKP%2BtqkBwE7iZEcaWFx076TBfba0SxVbbhTVle5IJE%2FeJclDDk6aK%2FBjqkAfirtLaTWxeUQyqGYLjfJOXweQWnSOIkMOHmk741UW2dW9XPRtOyqixrvP3syK83cQlM00395c%2FDrlvYpHuE%2FlQXlxNz0sM60HYF3uMrHslCKP22oHx%2BFmwgMqJ7mDgZfM9MoqTQ4M5JIzIWK99HN%2BVBkaXi4rmrIzfNHVY4Yx1esJvIJwv4s8NEhsqzchapIOx1ZsmqmVjotq4VcJEWcjudsP6a&X-Amz-Signature=aaa1c2ba489ae4a4d7a60c78b94262fe9823a8511dbf080b0c63380f4ee7c0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
