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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU7KJZJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7W7A4DjFE5on5pI7p7cdWsJZ%2FBYcwQGz83nj9oq11wIgYZVjswKuLXp9Z%2FCFBgsqlWkEOSQuOQte1fUKSBSGTx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCCKNtVGOzUkWLBZ0yrcA7CequmMIgB5PT5B2aAlpg6CykNthxBGz48dHZxV7t0UFrFp5TbiDoQRA0A7MfYs0Ouuy%2Fa9ids5RRxEAMFeU28TPxsxf1hjU3PUD1upvVYJX1S70tufxpp8WWderprqEwBzJlJmth7JK7mQzQ42Gtvdm7EC7K1oJ76hPSvr36FnYBFzuMu%2F26H95l%2BYyJ5tafqWzn5NF5z4i9wGjSYt5xFc35CMsuHfxk%2F7G8aOKyxMcz4ADbEzMAaOU868CCdBAv3OZgoDkxT0xHxTZzCHJyA2Zd3ZkGo77aZS5HxEdelvaDNFqiCb70g5oKxPlPBy5GtkvNXGCWVBvnXMVkX57UaqDwCdxQU%2Fkk5vR5JhJ1prZS%2BYCdSFGrE%2FzwGtCUT8NPnGoZR7jkGUMhjTX91M4nSmON3rSwz77zgbrQkh5AfTTlP20kmj5HzrDvBOPOPTf2YH7TT%2F%2FfjwIr8R86oKMVtuq0DLlHKYEdIqZFw1csHiYORq3m%2BRimybzjQ%2BgL7FOh8%2F9x8trTonprICzNNTMmcaojFlGLDzb4iBOmSh3QF5msqizxA2lM4z7Pxgh7%2BXSz1rpu5qHuYi%2FjuRW4xNK%2BCJsE048eAEqSHaG1ai2rAMqTZetmYXGvIq22QwMIvgq8AGOqUBZBdSsY2VyD2d1Lb3TbJ8AoiyQF8tZXQ3s4NScRAlXCcyVZOrKLvyX6r9METYKIdyFAJwdcwLNxlhZClzCPuptVGm3PM5HJKdMzGxyxir%2Fz5y9qGD%2BRXsz%2FWss1mMHqYWVVEC1Sg4x0cQIFvoY%2BVnK5gky3k6ZWvQcomVlnPws2aiVivXWq7aALCsT%2Bd%2FGe5EbaxfoVvYvM2UgahSWtZ3UB7jkDL3&X-Amz-Signature=f8a8c1329b9befc697d55789edaa8bb68aea2d4132c511c9ce4448e771fb7724&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU7KJZJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7W7A4DjFE5on5pI7p7cdWsJZ%2FBYcwQGz83nj9oq11wIgYZVjswKuLXp9Z%2FCFBgsqlWkEOSQuOQte1fUKSBSGTx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCCKNtVGOzUkWLBZ0yrcA7CequmMIgB5PT5B2aAlpg6CykNthxBGz48dHZxV7t0UFrFp5TbiDoQRA0A7MfYs0Ouuy%2Fa9ids5RRxEAMFeU28TPxsxf1hjU3PUD1upvVYJX1S70tufxpp8WWderprqEwBzJlJmth7JK7mQzQ42Gtvdm7EC7K1oJ76hPSvr36FnYBFzuMu%2F26H95l%2BYyJ5tafqWzn5NF5z4i9wGjSYt5xFc35CMsuHfxk%2F7G8aOKyxMcz4ADbEzMAaOU868CCdBAv3OZgoDkxT0xHxTZzCHJyA2Zd3ZkGo77aZS5HxEdelvaDNFqiCb70g5oKxPlPBy5GtkvNXGCWVBvnXMVkX57UaqDwCdxQU%2Fkk5vR5JhJ1prZS%2BYCdSFGrE%2FzwGtCUT8NPnGoZR7jkGUMhjTX91M4nSmON3rSwz77zgbrQkh5AfTTlP20kmj5HzrDvBOPOPTf2YH7TT%2F%2FfjwIr8R86oKMVtuq0DLlHKYEdIqZFw1csHiYORq3m%2BRimybzjQ%2BgL7FOh8%2F9x8trTonprICzNNTMmcaojFlGLDzb4iBOmSh3QF5msqizxA2lM4z7Pxgh7%2BXSz1rpu5qHuYi%2FjuRW4xNK%2BCJsE048eAEqSHaG1ai2rAMqTZetmYXGvIq22QwMIvgq8AGOqUBZBdSsY2VyD2d1Lb3TbJ8AoiyQF8tZXQ3s4NScRAlXCcyVZOrKLvyX6r9METYKIdyFAJwdcwLNxlhZClzCPuptVGm3PM5HJKdMzGxyxir%2Fz5y9qGD%2BRXsz%2FWss1mMHqYWVVEC1Sg4x0cQIFvoY%2BVnK5gky3k6ZWvQcomVlnPws2aiVivXWq7aALCsT%2Bd%2FGe5EbaxfoVvYvM2UgahSWtZ3UB7jkDL3&X-Amz-Signature=5db952d198c55066788e7153f51110c973213a8872bce40d915350d1086f1f65&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU7KJZJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7W7A4DjFE5on5pI7p7cdWsJZ%2FBYcwQGz83nj9oq11wIgYZVjswKuLXp9Z%2FCFBgsqlWkEOSQuOQte1fUKSBSGTx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCCKNtVGOzUkWLBZ0yrcA7CequmMIgB5PT5B2aAlpg6CykNthxBGz48dHZxV7t0UFrFp5TbiDoQRA0A7MfYs0Ouuy%2Fa9ids5RRxEAMFeU28TPxsxf1hjU3PUD1upvVYJX1S70tufxpp8WWderprqEwBzJlJmth7JK7mQzQ42Gtvdm7EC7K1oJ76hPSvr36FnYBFzuMu%2F26H95l%2BYyJ5tafqWzn5NF5z4i9wGjSYt5xFc35CMsuHfxk%2F7G8aOKyxMcz4ADbEzMAaOU868CCdBAv3OZgoDkxT0xHxTZzCHJyA2Zd3ZkGo77aZS5HxEdelvaDNFqiCb70g5oKxPlPBy5GtkvNXGCWVBvnXMVkX57UaqDwCdxQU%2Fkk5vR5JhJ1prZS%2BYCdSFGrE%2FzwGtCUT8NPnGoZR7jkGUMhjTX91M4nSmON3rSwz77zgbrQkh5AfTTlP20kmj5HzrDvBOPOPTf2YH7TT%2F%2FfjwIr8R86oKMVtuq0DLlHKYEdIqZFw1csHiYORq3m%2BRimybzjQ%2BgL7FOh8%2F9x8trTonprICzNNTMmcaojFlGLDzb4iBOmSh3QF5msqizxA2lM4z7Pxgh7%2BXSz1rpu5qHuYi%2FjuRW4xNK%2BCJsE048eAEqSHaG1ai2rAMqTZetmYXGvIq22QwMIvgq8AGOqUBZBdSsY2VyD2d1Lb3TbJ8AoiyQF8tZXQ3s4NScRAlXCcyVZOrKLvyX6r9METYKIdyFAJwdcwLNxlhZClzCPuptVGm3PM5HJKdMzGxyxir%2Fz5y9qGD%2BRXsz%2FWss1mMHqYWVVEC1Sg4x0cQIFvoY%2BVnK5gky3k6ZWvQcomVlnPws2aiVivXWq7aALCsT%2Bd%2FGe5EbaxfoVvYvM2UgahSWtZ3UB7jkDL3&X-Amz-Signature=74f5613b07ce066d09db7297c97544ff269f226ecedd72ceee3819b71e61fe4c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU7KJZJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7W7A4DjFE5on5pI7p7cdWsJZ%2FBYcwQGz83nj9oq11wIgYZVjswKuLXp9Z%2FCFBgsqlWkEOSQuOQte1fUKSBSGTx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCCKNtVGOzUkWLBZ0yrcA7CequmMIgB5PT5B2aAlpg6CykNthxBGz48dHZxV7t0UFrFp5TbiDoQRA0A7MfYs0Ouuy%2Fa9ids5RRxEAMFeU28TPxsxf1hjU3PUD1upvVYJX1S70tufxpp8WWderprqEwBzJlJmth7JK7mQzQ42Gtvdm7EC7K1oJ76hPSvr36FnYBFzuMu%2F26H95l%2BYyJ5tafqWzn5NF5z4i9wGjSYt5xFc35CMsuHfxk%2F7G8aOKyxMcz4ADbEzMAaOU868CCdBAv3OZgoDkxT0xHxTZzCHJyA2Zd3ZkGo77aZS5HxEdelvaDNFqiCb70g5oKxPlPBy5GtkvNXGCWVBvnXMVkX57UaqDwCdxQU%2Fkk5vR5JhJ1prZS%2BYCdSFGrE%2FzwGtCUT8NPnGoZR7jkGUMhjTX91M4nSmON3rSwz77zgbrQkh5AfTTlP20kmj5HzrDvBOPOPTf2YH7TT%2F%2FfjwIr8R86oKMVtuq0DLlHKYEdIqZFw1csHiYORq3m%2BRimybzjQ%2BgL7FOh8%2F9x8trTonprICzNNTMmcaojFlGLDzb4iBOmSh3QF5msqizxA2lM4z7Pxgh7%2BXSz1rpu5qHuYi%2FjuRW4xNK%2BCJsE048eAEqSHaG1ai2rAMqTZetmYXGvIq22QwMIvgq8AGOqUBZBdSsY2VyD2d1Lb3TbJ8AoiyQF8tZXQ3s4NScRAlXCcyVZOrKLvyX6r9METYKIdyFAJwdcwLNxlhZClzCPuptVGm3PM5HJKdMzGxyxir%2Fz5y9qGD%2BRXsz%2FWss1mMHqYWVVEC1Sg4x0cQIFvoY%2BVnK5gky3k6ZWvQcomVlnPws2aiVivXWq7aALCsT%2Bd%2FGe5EbaxfoVvYvM2UgahSWtZ3UB7jkDL3&X-Amz-Signature=cf57a3a5e5ab379444ef277d0b8f65a86a733f0645c2fe9438d869e804b62517&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU7KJZJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7W7A4DjFE5on5pI7p7cdWsJZ%2FBYcwQGz83nj9oq11wIgYZVjswKuLXp9Z%2FCFBgsqlWkEOSQuOQte1fUKSBSGTx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCCKNtVGOzUkWLBZ0yrcA7CequmMIgB5PT5B2aAlpg6CykNthxBGz48dHZxV7t0UFrFp5TbiDoQRA0A7MfYs0Ouuy%2Fa9ids5RRxEAMFeU28TPxsxf1hjU3PUD1upvVYJX1S70tufxpp8WWderprqEwBzJlJmth7JK7mQzQ42Gtvdm7EC7K1oJ76hPSvr36FnYBFzuMu%2F26H95l%2BYyJ5tafqWzn5NF5z4i9wGjSYt5xFc35CMsuHfxk%2F7G8aOKyxMcz4ADbEzMAaOU868CCdBAv3OZgoDkxT0xHxTZzCHJyA2Zd3ZkGo77aZS5HxEdelvaDNFqiCb70g5oKxPlPBy5GtkvNXGCWVBvnXMVkX57UaqDwCdxQU%2Fkk5vR5JhJ1prZS%2BYCdSFGrE%2FzwGtCUT8NPnGoZR7jkGUMhjTX91M4nSmON3rSwz77zgbrQkh5AfTTlP20kmj5HzrDvBOPOPTf2YH7TT%2F%2FfjwIr8R86oKMVtuq0DLlHKYEdIqZFw1csHiYORq3m%2BRimybzjQ%2BgL7FOh8%2F9x8trTonprICzNNTMmcaojFlGLDzb4iBOmSh3QF5msqizxA2lM4z7Pxgh7%2BXSz1rpu5qHuYi%2FjuRW4xNK%2BCJsE048eAEqSHaG1ai2rAMqTZetmYXGvIq22QwMIvgq8AGOqUBZBdSsY2VyD2d1Lb3TbJ8AoiyQF8tZXQ3s4NScRAlXCcyVZOrKLvyX6r9METYKIdyFAJwdcwLNxlhZClzCPuptVGm3PM5HJKdMzGxyxir%2Fz5y9qGD%2BRXsz%2FWss1mMHqYWVVEC1Sg4x0cQIFvoY%2BVnK5gky3k6ZWvQcomVlnPws2aiVivXWq7aALCsT%2Bd%2FGe5EbaxfoVvYvM2UgahSWtZ3UB7jkDL3&X-Amz-Signature=022ccfb3856c62726ea06ee8c52d45282dc28a2d64a7943bb4b35df07463edea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU7KJZJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7W7A4DjFE5on5pI7p7cdWsJZ%2FBYcwQGz83nj9oq11wIgYZVjswKuLXp9Z%2FCFBgsqlWkEOSQuOQte1fUKSBSGTx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCCKNtVGOzUkWLBZ0yrcA7CequmMIgB5PT5B2aAlpg6CykNthxBGz48dHZxV7t0UFrFp5TbiDoQRA0A7MfYs0Ouuy%2Fa9ids5RRxEAMFeU28TPxsxf1hjU3PUD1upvVYJX1S70tufxpp8WWderprqEwBzJlJmth7JK7mQzQ42Gtvdm7EC7K1oJ76hPSvr36FnYBFzuMu%2F26H95l%2BYyJ5tafqWzn5NF5z4i9wGjSYt5xFc35CMsuHfxk%2F7G8aOKyxMcz4ADbEzMAaOU868CCdBAv3OZgoDkxT0xHxTZzCHJyA2Zd3ZkGo77aZS5HxEdelvaDNFqiCb70g5oKxPlPBy5GtkvNXGCWVBvnXMVkX57UaqDwCdxQU%2Fkk5vR5JhJ1prZS%2BYCdSFGrE%2FzwGtCUT8NPnGoZR7jkGUMhjTX91M4nSmON3rSwz77zgbrQkh5AfTTlP20kmj5HzrDvBOPOPTf2YH7TT%2F%2FfjwIr8R86oKMVtuq0DLlHKYEdIqZFw1csHiYORq3m%2BRimybzjQ%2BgL7FOh8%2F9x8trTonprICzNNTMmcaojFlGLDzb4iBOmSh3QF5msqizxA2lM4z7Pxgh7%2BXSz1rpu5qHuYi%2FjuRW4xNK%2BCJsE048eAEqSHaG1ai2rAMqTZetmYXGvIq22QwMIvgq8AGOqUBZBdSsY2VyD2d1Lb3TbJ8AoiyQF8tZXQ3s4NScRAlXCcyVZOrKLvyX6r9METYKIdyFAJwdcwLNxlhZClzCPuptVGm3PM5HJKdMzGxyxir%2Fz5y9qGD%2BRXsz%2FWss1mMHqYWVVEC1Sg4x0cQIFvoY%2BVnK5gky3k6ZWvQcomVlnPws2aiVivXWq7aALCsT%2Bd%2FGe5EbaxfoVvYvM2UgahSWtZ3UB7jkDL3&X-Amz-Signature=2f784a971b36f298a82c3a215317c82aa96212814fc720a4187332de474ce97f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BU7KJZJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7W7A4DjFE5on5pI7p7cdWsJZ%2FBYcwQGz83nj9oq11wIgYZVjswKuLXp9Z%2FCFBgsqlWkEOSQuOQte1fUKSBSGTx8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCCKNtVGOzUkWLBZ0yrcA7CequmMIgB5PT5B2aAlpg6CykNthxBGz48dHZxV7t0UFrFp5TbiDoQRA0A7MfYs0Ouuy%2Fa9ids5RRxEAMFeU28TPxsxf1hjU3PUD1upvVYJX1S70tufxpp8WWderprqEwBzJlJmth7JK7mQzQ42Gtvdm7EC7K1oJ76hPSvr36FnYBFzuMu%2F26H95l%2BYyJ5tafqWzn5NF5z4i9wGjSYt5xFc35CMsuHfxk%2F7G8aOKyxMcz4ADbEzMAaOU868CCdBAv3OZgoDkxT0xHxTZzCHJyA2Zd3ZkGo77aZS5HxEdelvaDNFqiCb70g5oKxPlPBy5GtkvNXGCWVBvnXMVkX57UaqDwCdxQU%2Fkk5vR5JhJ1prZS%2BYCdSFGrE%2FzwGtCUT8NPnGoZR7jkGUMhjTX91M4nSmON3rSwz77zgbrQkh5AfTTlP20kmj5HzrDvBOPOPTf2YH7TT%2F%2FfjwIr8R86oKMVtuq0DLlHKYEdIqZFw1csHiYORq3m%2BRimybzjQ%2BgL7FOh8%2F9x8trTonprICzNNTMmcaojFlGLDzb4iBOmSh3QF5msqizxA2lM4z7Pxgh7%2BXSz1rpu5qHuYi%2FjuRW4xNK%2BCJsE048eAEqSHaG1ai2rAMqTZetmYXGvIq22QwMIvgq8AGOqUBZBdSsY2VyD2d1Lb3TbJ8AoiyQF8tZXQ3s4NScRAlXCcyVZOrKLvyX6r9METYKIdyFAJwdcwLNxlhZClzCPuptVGm3PM5HJKdMzGxyxir%2Fz5y9qGD%2BRXsz%2FWss1mMHqYWVVEC1Sg4x0cQIFvoY%2BVnK5gky3k6ZWvQcomVlnPws2aiVivXWq7aALCsT%2Bd%2FGe5EbaxfoVvYvM2UgahSWtZ3UB7jkDL3&X-Amz-Signature=de55ebdc84b04ea80c80db2e6cde9d97b106c09e7cec356ea34d2e66bbc0eb40&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
