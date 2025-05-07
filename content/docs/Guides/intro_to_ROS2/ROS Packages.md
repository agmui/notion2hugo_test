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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QS7YR4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXGZtdcX1AzcVM%2Bz2%2BLurBbikw8YlMhXL0j1kwCeN%2BGQIhAJzDvkqPkaGHW0u7nPGLC%2BuByuaNuDZLpckW%2B2Dc1xhNKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCUFQ9gACo9bfNsLQq3APIOrf8N8xonE0r1aM03vFQEcaxv640WNAiQFyPZllqMOvqEwXNfdo68ZDNFCsBu38S%2BEYLxCa%2Fnq7JGOR1wsJwX6wPuz%2FfEvrVTtpsX0NjKIgpUv0RoBg4bpJZX8rMxuLFcxRO5BZOCZccCmfQN%2FK3ySiv47v4ueI0ZZBDhbT1NQSR7gKiSDiKzmcsxNxseR%2BOE4mmaA301whRMhZCBqrTnAmd%2FZXWQNibLg%2Fw4trVUEIZsVh6E3Z5Szhlm1P16EPMRRrshpY64HZOb%2BsvFG5PPmDPo8s759Ttv1eS9T3vWEg1AUD9ip%2FVPUp3X2dvEEEtp5mVj%2FzjoxRxpOxDtyCJaECD7WlXFx2txZdfYLCEsa6T3ZMuThZgx4SYvFS5uGC5xKe2t%2B3FX6X%2F0pOM%2B2qcSxCs1Lt%2BCUanuKvgeWQbxBiJhPxBBz9VJA39d2PGxVJVRl5E2CaZX%2Bl95pBViTFSBVu6DyRlZKPOIycxioE0ivBCZV%2FJQHIun7p32KMQdxkDa2x7OCVUuoOwrmQuBlws9LImssZrvhviALorJZydMDAzU%2F%2BmV%2F6ZxOfxfBisxqOm2QjB7nRWaJHqd3C4tQn06AjAfBV1OtgU4jvTQMzgPUlqBC2DWT2Is6xGizCy6e7ABjqkAUkltxY4quC9pYLWq2yuHcXkurzKgmiOKXKz%2FDTzrVbkH%2F3wayEOLpF737Bxb0MT9DqcggIoDXhfelyhdKxo67cL%2Blux4ODKcOdF8RlZEA77Sfmi0T8XNq%2BbUqqNVEUObM7RojKNViD3Fpwk8sv1%2BkfVD%2FrY31wmRtSH22eLmVOO4k9qFMzKalZsrSUUwbmfR34M8eRXfRsTq0q8VpES98KeoL%2BE&X-Amz-Signature=65c0a8b54bc577be61576c744d5c45fcefac450e1acd6588c095bf97e6ebdbec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QS7YR4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXGZtdcX1AzcVM%2Bz2%2BLurBbikw8YlMhXL0j1kwCeN%2BGQIhAJzDvkqPkaGHW0u7nPGLC%2BuByuaNuDZLpckW%2B2Dc1xhNKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCUFQ9gACo9bfNsLQq3APIOrf8N8xonE0r1aM03vFQEcaxv640WNAiQFyPZllqMOvqEwXNfdo68ZDNFCsBu38S%2BEYLxCa%2Fnq7JGOR1wsJwX6wPuz%2FfEvrVTtpsX0NjKIgpUv0RoBg4bpJZX8rMxuLFcxRO5BZOCZccCmfQN%2FK3ySiv47v4ueI0ZZBDhbT1NQSR7gKiSDiKzmcsxNxseR%2BOE4mmaA301whRMhZCBqrTnAmd%2FZXWQNibLg%2Fw4trVUEIZsVh6E3Z5Szhlm1P16EPMRRrshpY64HZOb%2BsvFG5PPmDPo8s759Ttv1eS9T3vWEg1AUD9ip%2FVPUp3X2dvEEEtp5mVj%2FzjoxRxpOxDtyCJaECD7WlXFx2txZdfYLCEsa6T3ZMuThZgx4SYvFS5uGC5xKe2t%2B3FX6X%2F0pOM%2B2qcSxCs1Lt%2BCUanuKvgeWQbxBiJhPxBBz9VJA39d2PGxVJVRl5E2CaZX%2Bl95pBViTFSBVu6DyRlZKPOIycxioE0ivBCZV%2FJQHIun7p32KMQdxkDa2x7OCVUuoOwrmQuBlws9LImssZrvhviALorJZydMDAzU%2F%2BmV%2F6ZxOfxfBisxqOm2QjB7nRWaJHqd3C4tQn06AjAfBV1OtgU4jvTQMzgPUlqBC2DWT2Is6xGizCy6e7ABjqkAUkltxY4quC9pYLWq2yuHcXkurzKgmiOKXKz%2FDTzrVbkH%2F3wayEOLpF737Bxb0MT9DqcggIoDXhfelyhdKxo67cL%2Blux4ODKcOdF8RlZEA77Sfmi0T8XNq%2BbUqqNVEUObM7RojKNViD3Fpwk8sv1%2BkfVD%2FrY31wmRtSH22eLmVOO4k9qFMzKalZsrSUUwbmfR34M8eRXfRsTq0q8VpES98KeoL%2BE&X-Amz-Signature=a2fd5575f2400f352871f8e0f2883ea215078b747be527410fe14b73f5b6c364&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QS7YR4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXGZtdcX1AzcVM%2Bz2%2BLurBbikw8YlMhXL0j1kwCeN%2BGQIhAJzDvkqPkaGHW0u7nPGLC%2BuByuaNuDZLpckW%2B2Dc1xhNKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCUFQ9gACo9bfNsLQq3APIOrf8N8xonE0r1aM03vFQEcaxv640WNAiQFyPZllqMOvqEwXNfdo68ZDNFCsBu38S%2BEYLxCa%2Fnq7JGOR1wsJwX6wPuz%2FfEvrVTtpsX0NjKIgpUv0RoBg4bpJZX8rMxuLFcxRO5BZOCZccCmfQN%2FK3ySiv47v4ueI0ZZBDhbT1NQSR7gKiSDiKzmcsxNxseR%2BOE4mmaA301whRMhZCBqrTnAmd%2FZXWQNibLg%2Fw4trVUEIZsVh6E3Z5Szhlm1P16EPMRRrshpY64HZOb%2BsvFG5PPmDPo8s759Ttv1eS9T3vWEg1AUD9ip%2FVPUp3X2dvEEEtp5mVj%2FzjoxRxpOxDtyCJaECD7WlXFx2txZdfYLCEsa6T3ZMuThZgx4SYvFS5uGC5xKe2t%2B3FX6X%2F0pOM%2B2qcSxCs1Lt%2BCUanuKvgeWQbxBiJhPxBBz9VJA39d2PGxVJVRl5E2CaZX%2Bl95pBViTFSBVu6DyRlZKPOIycxioE0ivBCZV%2FJQHIun7p32KMQdxkDa2x7OCVUuoOwrmQuBlws9LImssZrvhviALorJZydMDAzU%2F%2BmV%2F6ZxOfxfBisxqOm2QjB7nRWaJHqd3C4tQn06AjAfBV1OtgU4jvTQMzgPUlqBC2DWT2Is6xGizCy6e7ABjqkAUkltxY4quC9pYLWq2yuHcXkurzKgmiOKXKz%2FDTzrVbkH%2F3wayEOLpF737Bxb0MT9DqcggIoDXhfelyhdKxo67cL%2Blux4ODKcOdF8RlZEA77Sfmi0T8XNq%2BbUqqNVEUObM7RojKNViD3Fpwk8sv1%2BkfVD%2FrY31wmRtSH22eLmVOO4k9qFMzKalZsrSUUwbmfR34M8eRXfRsTq0q8VpES98KeoL%2BE&X-Amz-Signature=ab07f8c14730c7e430b4355597fd1a6f8ed036f81bf79bb6b41893324c2f883f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QS7YR4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXGZtdcX1AzcVM%2Bz2%2BLurBbikw8YlMhXL0j1kwCeN%2BGQIhAJzDvkqPkaGHW0u7nPGLC%2BuByuaNuDZLpckW%2B2Dc1xhNKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCUFQ9gACo9bfNsLQq3APIOrf8N8xonE0r1aM03vFQEcaxv640WNAiQFyPZllqMOvqEwXNfdo68ZDNFCsBu38S%2BEYLxCa%2Fnq7JGOR1wsJwX6wPuz%2FfEvrVTtpsX0NjKIgpUv0RoBg4bpJZX8rMxuLFcxRO5BZOCZccCmfQN%2FK3ySiv47v4ueI0ZZBDhbT1NQSR7gKiSDiKzmcsxNxseR%2BOE4mmaA301whRMhZCBqrTnAmd%2FZXWQNibLg%2Fw4trVUEIZsVh6E3Z5Szhlm1P16EPMRRrshpY64HZOb%2BsvFG5PPmDPo8s759Ttv1eS9T3vWEg1AUD9ip%2FVPUp3X2dvEEEtp5mVj%2FzjoxRxpOxDtyCJaECD7WlXFx2txZdfYLCEsa6T3ZMuThZgx4SYvFS5uGC5xKe2t%2B3FX6X%2F0pOM%2B2qcSxCs1Lt%2BCUanuKvgeWQbxBiJhPxBBz9VJA39d2PGxVJVRl5E2CaZX%2Bl95pBViTFSBVu6DyRlZKPOIycxioE0ivBCZV%2FJQHIun7p32KMQdxkDa2x7OCVUuoOwrmQuBlws9LImssZrvhviALorJZydMDAzU%2F%2BmV%2F6ZxOfxfBisxqOm2QjB7nRWaJHqd3C4tQn06AjAfBV1OtgU4jvTQMzgPUlqBC2DWT2Is6xGizCy6e7ABjqkAUkltxY4quC9pYLWq2yuHcXkurzKgmiOKXKz%2FDTzrVbkH%2F3wayEOLpF737Bxb0MT9DqcggIoDXhfelyhdKxo67cL%2Blux4ODKcOdF8RlZEA77Sfmi0T8XNq%2BbUqqNVEUObM7RojKNViD3Fpwk8sv1%2BkfVD%2FrY31wmRtSH22eLmVOO4k9qFMzKalZsrSUUwbmfR34M8eRXfRsTq0q8VpES98KeoL%2BE&X-Amz-Signature=f30d55574a51b592ed011b74c6902a74f8ea1974135102224d3e287712fd04b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QS7YR4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXGZtdcX1AzcVM%2Bz2%2BLurBbikw8YlMhXL0j1kwCeN%2BGQIhAJzDvkqPkaGHW0u7nPGLC%2BuByuaNuDZLpckW%2B2Dc1xhNKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCUFQ9gACo9bfNsLQq3APIOrf8N8xonE0r1aM03vFQEcaxv640WNAiQFyPZllqMOvqEwXNfdo68ZDNFCsBu38S%2BEYLxCa%2Fnq7JGOR1wsJwX6wPuz%2FfEvrVTtpsX0NjKIgpUv0RoBg4bpJZX8rMxuLFcxRO5BZOCZccCmfQN%2FK3ySiv47v4ueI0ZZBDhbT1NQSR7gKiSDiKzmcsxNxseR%2BOE4mmaA301whRMhZCBqrTnAmd%2FZXWQNibLg%2Fw4trVUEIZsVh6E3Z5Szhlm1P16EPMRRrshpY64HZOb%2BsvFG5PPmDPo8s759Ttv1eS9T3vWEg1AUD9ip%2FVPUp3X2dvEEEtp5mVj%2FzjoxRxpOxDtyCJaECD7WlXFx2txZdfYLCEsa6T3ZMuThZgx4SYvFS5uGC5xKe2t%2B3FX6X%2F0pOM%2B2qcSxCs1Lt%2BCUanuKvgeWQbxBiJhPxBBz9VJA39d2PGxVJVRl5E2CaZX%2Bl95pBViTFSBVu6DyRlZKPOIycxioE0ivBCZV%2FJQHIun7p32KMQdxkDa2x7OCVUuoOwrmQuBlws9LImssZrvhviALorJZydMDAzU%2F%2BmV%2F6ZxOfxfBisxqOm2QjB7nRWaJHqd3C4tQn06AjAfBV1OtgU4jvTQMzgPUlqBC2DWT2Is6xGizCy6e7ABjqkAUkltxY4quC9pYLWq2yuHcXkurzKgmiOKXKz%2FDTzrVbkH%2F3wayEOLpF737Bxb0MT9DqcggIoDXhfelyhdKxo67cL%2Blux4ODKcOdF8RlZEA77Sfmi0T8XNq%2BbUqqNVEUObM7RojKNViD3Fpwk8sv1%2BkfVD%2FrY31wmRtSH22eLmVOO4k9qFMzKalZsrSUUwbmfR34M8eRXfRsTq0q8VpES98KeoL%2BE&X-Amz-Signature=e3008cdc5766e33df3ce971ca54d40975d8f5378326092efc2ed2c9f72aafddf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QS7YR4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXGZtdcX1AzcVM%2Bz2%2BLurBbikw8YlMhXL0j1kwCeN%2BGQIhAJzDvkqPkaGHW0u7nPGLC%2BuByuaNuDZLpckW%2B2Dc1xhNKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCUFQ9gACo9bfNsLQq3APIOrf8N8xonE0r1aM03vFQEcaxv640WNAiQFyPZllqMOvqEwXNfdo68ZDNFCsBu38S%2BEYLxCa%2Fnq7JGOR1wsJwX6wPuz%2FfEvrVTtpsX0NjKIgpUv0RoBg4bpJZX8rMxuLFcxRO5BZOCZccCmfQN%2FK3ySiv47v4ueI0ZZBDhbT1NQSR7gKiSDiKzmcsxNxseR%2BOE4mmaA301whRMhZCBqrTnAmd%2FZXWQNibLg%2Fw4trVUEIZsVh6E3Z5Szhlm1P16EPMRRrshpY64HZOb%2BsvFG5PPmDPo8s759Ttv1eS9T3vWEg1AUD9ip%2FVPUp3X2dvEEEtp5mVj%2FzjoxRxpOxDtyCJaECD7WlXFx2txZdfYLCEsa6T3ZMuThZgx4SYvFS5uGC5xKe2t%2B3FX6X%2F0pOM%2B2qcSxCs1Lt%2BCUanuKvgeWQbxBiJhPxBBz9VJA39d2PGxVJVRl5E2CaZX%2Bl95pBViTFSBVu6DyRlZKPOIycxioE0ivBCZV%2FJQHIun7p32KMQdxkDa2x7OCVUuoOwrmQuBlws9LImssZrvhviALorJZydMDAzU%2F%2BmV%2F6ZxOfxfBisxqOm2QjB7nRWaJHqd3C4tQn06AjAfBV1OtgU4jvTQMzgPUlqBC2DWT2Is6xGizCy6e7ABjqkAUkltxY4quC9pYLWq2yuHcXkurzKgmiOKXKz%2FDTzrVbkH%2F3wayEOLpF737Bxb0MT9DqcggIoDXhfelyhdKxo67cL%2Blux4ODKcOdF8RlZEA77Sfmi0T8XNq%2BbUqqNVEUObM7RojKNViD3Fpwk8sv1%2BkfVD%2FrY31wmRtSH22eLmVOO4k9qFMzKalZsrSUUwbmfR34M8eRXfRsTq0q8VpES98KeoL%2BE&X-Amz-Signature=7ba012cdd7aef5e594729f71cee860ad83a706ff0a4f5e4fd1409b4950c6449f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QS7YR4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXGZtdcX1AzcVM%2Bz2%2BLurBbikw8YlMhXL0j1kwCeN%2BGQIhAJzDvkqPkaGHW0u7nPGLC%2BuByuaNuDZLpckW%2B2Dc1xhNKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCUFQ9gACo9bfNsLQq3APIOrf8N8xonE0r1aM03vFQEcaxv640WNAiQFyPZllqMOvqEwXNfdo68ZDNFCsBu38S%2BEYLxCa%2Fnq7JGOR1wsJwX6wPuz%2FfEvrVTtpsX0NjKIgpUv0RoBg4bpJZX8rMxuLFcxRO5BZOCZccCmfQN%2FK3ySiv47v4ueI0ZZBDhbT1NQSR7gKiSDiKzmcsxNxseR%2BOE4mmaA301whRMhZCBqrTnAmd%2FZXWQNibLg%2Fw4trVUEIZsVh6E3Z5Szhlm1P16EPMRRrshpY64HZOb%2BsvFG5PPmDPo8s759Ttv1eS9T3vWEg1AUD9ip%2FVPUp3X2dvEEEtp5mVj%2FzjoxRxpOxDtyCJaECD7WlXFx2txZdfYLCEsa6T3ZMuThZgx4SYvFS5uGC5xKe2t%2B3FX6X%2F0pOM%2B2qcSxCs1Lt%2BCUanuKvgeWQbxBiJhPxBBz9VJA39d2PGxVJVRl5E2CaZX%2Bl95pBViTFSBVu6DyRlZKPOIycxioE0ivBCZV%2FJQHIun7p32KMQdxkDa2x7OCVUuoOwrmQuBlws9LImssZrvhviALorJZydMDAzU%2F%2BmV%2F6ZxOfxfBisxqOm2QjB7nRWaJHqd3C4tQn06AjAfBV1OtgU4jvTQMzgPUlqBC2DWT2Is6xGizCy6e7ABjqkAUkltxY4quC9pYLWq2yuHcXkurzKgmiOKXKz%2FDTzrVbkH%2F3wayEOLpF737Bxb0MT9DqcggIoDXhfelyhdKxo67cL%2Blux4ODKcOdF8RlZEA77Sfmi0T8XNq%2BbUqqNVEUObM7RojKNViD3Fpwk8sv1%2BkfVD%2FrY31wmRtSH22eLmVOO4k9qFMzKalZsrSUUwbmfR34M8eRXfRsTq0q8VpES98KeoL%2BE&X-Amz-Signature=cd2f20f04f1efd2037ee8f83cb8e1e955b81cebaefa1d6c11b506025e0732ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
