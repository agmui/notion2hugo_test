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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4EQ5D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAM%2BeCkdc0Z2G2m5ID%2B2rKs7726X7WWPNeOBpzmpJuCgIhAN6vMU9SUvjjORCu6K96wH08eeWCqsvfZaU%2FH4UuujePKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAEfJr%2BJ0STuT418q3ANOWv39hFfJc5dL37lJJfK9yXJ1swEqjQtBoOe9nuX7GTa1V6LadtpEaX86Wt1e7gqL9Svfts3NFvl31K0ymV1LfS%2FxzHlfswEHoi7H8mknRh%2FeH%2FeF529mdDRw025vL9xSMWxIiVR9qdtU%2BXBgtLwI3HC8ff%2FPiIO25fn2xgZugl%2FZ%2FjNgkUS%2B6InWi2IHPOrZw2k4N8OSnt5ayrYgyOAt%2BmjMYyxKG17BLZYgAnVKiIoeKxoxZZzU7MvFcAlI38%2FV5TGRcj%2FCQvH1%2FTTMol%2F7zXwU9cq%2FuHlAqtC6fmt8JnacaK6FUTrCEvfnbB1WqWpT2jYofHCzFITfbZ%2Bnoh3l4BQRfIs7v6NzPBtdyX6LB%2BPSvP%2Bi5n0aeXHdqILqhvicoQ6AuTQmEmbgTV%2BBgvUPxLqC00EVNA9ZY%2FAlLzGtXyNZR2pis2eZns%2FIWukTgdFgD%2FP2GoOGaq6M1C8SCWRN0wUA%2BkaExvqGGnu0ygCGTGNVfC0vI2JZR0bsdnQw53d%2FPAo%2FnkBD%2BZRC3mAFWvhbkEFpwNJggATIFW5P40vo7A5PoyTmYQtlwDio%2F3un1f8%2BdzJz16tZSAxdEZKkIdvmll8%2FnqGd8Hue3HbX41SSnBRYTl9LMnDm8zJ2PTCs5%2FnDBjqkAe9wMZ0uWmqsI0QveiOA4bRM4xLaFxZX8jzi2ULWHSSCgBmQ4u3FbbSg6rkoCnKGvYfOF0T8%2BAQKxlceGb4aRlzhw8V6s0kCr%2BXiQAvoGbf4hQs%2BaqNUGxULCzZWTwihonGY5Cfx2299%2FwmpoEJeuOj4lVqhED7E%2BeSVTUqua4qmhkpzHeHlc2%2B7kFltKaKwaW%2FQLFn8i3af5gqrO%2BxXk83lMAI8&X-Amz-Signature=d9670a6e07cd552b67004d612b0aa67ba976a983b07757c9aaaa3e346e7a224a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4EQ5D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAM%2BeCkdc0Z2G2m5ID%2B2rKs7726X7WWPNeOBpzmpJuCgIhAN6vMU9SUvjjORCu6K96wH08eeWCqsvfZaU%2FH4UuujePKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAEfJr%2BJ0STuT418q3ANOWv39hFfJc5dL37lJJfK9yXJ1swEqjQtBoOe9nuX7GTa1V6LadtpEaX86Wt1e7gqL9Svfts3NFvl31K0ymV1LfS%2FxzHlfswEHoi7H8mknRh%2FeH%2FeF529mdDRw025vL9xSMWxIiVR9qdtU%2BXBgtLwI3HC8ff%2FPiIO25fn2xgZugl%2FZ%2FjNgkUS%2B6InWi2IHPOrZw2k4N8OSnt5ayrYgyOAt%2BmjMYyxKG17BLZYgAnVKiIoeKxoxZZzU7MvFcAlI38%2FV5TGRcj%2FCQvH1%2FTTMol%2F7zXwU9cq%2FuHlAqtC6fmt8JnacaK6FUTrCEvfnbB1WqWpT2jYofHCzFITfbZ%2Bnoh3l4BQRfIs7v6NzPBtdyX6LB%2BPSvP%2Bi5n0aeXHdqILqhvicoQ6AuTQmEmbgTV%2BBgvUPxLqC00EVNA9ZY%2FAlLzGtXyNZR2pis2eZns%2FIWukTgdFgD%2FP2GoOGaq6M1C8SCWRN0wUA%2BkaExvqGGnu0ygCGTGNVfC0vI2JZR0bsdnQw53d%2FPAo%2FnkBD%2BZRC3mAFWvhbkEFpwNJggATIFW5P40vo7A5PoyTmYQtlwDio%2F3un1f8%2BdzJz16tZSAxdEZKkIdvmll8%2FnqGd8Hue3HbX41SSnBRYTl9LMnDm8zJ2PTCs5%2FnDBjqkAe9wMZ0uWmqsI0QveiOA4bRM4xLaFxZX8jzi2ULWHSSCgBmQ4u3FbbSg6rkoCnKGvYfOF0T8%2BAQKxlceGb4aRlzhw8V6s0kCr%2BXiQAvoGbf4hQs%2BaqNUGxULCzZWTwihonGY5Cfx2299%2FwmpoEJeuOj4lVqhED7E%2BeSVTUqua4qmhkpzHeHlc2%2B7kFltKaKwaW%2FQLFn8i3af5gqrO%2BxXk83lMAI8&X-Amz-Signature=34792c81adb2ae0801538f0935397ea1459ddae9aa3a00b5a64e6095c0038516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4EQ5D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAM%2BeCkdc0Z2G2m5ID%2B2rKs7726X7WWPNeOBpzmpJuCgIhAN6vMU9SUvjjORCu6K96wH08eeWCqsvfZaU%2FH4UuujePKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAEfJr%2BJ0STuT418q3ANOWv39hFfJc5dL37lJJfK9yXJ1swEqjQtBoOe9nuX7GTa1V6LadtpEaX86Wt1e7gqL9Svfts3NFvl31K0ymV1LfS%2FxzHlfswEHoi7H8mknRh%2FeH%2FeF529mdDRw025vL9xSMWxIiVR9qdtU%2BXBgtLwI3HC8ff%2FPiIO25fn2xgZugl%2FZ%2FjNgkUS%2B6InWi2IHPOrZw2k4N8OSnt5ayrYgyOAt%2BmjMYyxKG17BLZYgAnVKiIoeKxoxZZzU7MvFcAlI38%2FV5TGRcj%2FCQvH1%2FTTMol%2F7zXwU9cq%2FuHlAqtC6fmt8JnacaK6FUTrCEvfnbB1WqWpT2jYofHCzFITfbZ%2Bnoh3l4BQRfIs7v6NzPBtdyX6LB%2BPSvP%2Bi5n0aeXHdqILqhvicoQ6AuTQmEmbgTV%2BBgvUPxLqC00EVNA9ZY%2FAlLzGtXyNZR2pis2eZns%2FIWukTgdFgD%2FP2GoOGaq6M1C8SCWRN0wUA%2BkaExvqGGnu0ygCGTGNVfC0vI2JZR0bsdnQw53d%2FPAo%2FnkBD%2BZRC3mAFWvhbkEFpwNJggATIFW5P40vo7A5PoyTmYQtlwDio%2F3un1f8%2BdzJz16tZSAxdEZKkIdvmll8%2FnqGd8Hue3HbX41SSnBRYTl9LMnDm8zJ2PTCs5%2FnDBjqkAe9wMZ0uWmqsI0QveiOA4bRM4xLaFxZX8jzi2ULWHSSCgBmQ4u3FbbSg6rkoCnKGvYfOF0T8%2BAQKxlceGb4aRlzhw8V6s0kCr%2BXiQAvoGbf4hQs%2BaqNUGxULCzZWTwihonGY5Cfx2299%2FwmpoEJeuOj4lVqhED7E%2BeSVTUqua4qmhkpzHeHlc2%2B7kFltKaKwaW%2FQLFn8i3af5gqrO%2BxXk83lMAI8&X-Amz-Signature=cb968b05af60eb1f771c0b047d5f742152470cf6a04a3af2a7ef5f7164e44797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4EQ5D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAM%2BeCkdc0Z2G2m5ID%2B2rKs7726X7WWPNeOBpzmpJuCgIhAN6vMU9SUvjjORCu6K96wH08eeWCqsvfZaU%2FH4UuujePKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAEfJr%2BJ0STuT418q3ANOWv39hFfJc5dL37lJJfK9yXJ1swEqjQtBoOe9nuX7GTa1V6LadtpEaX86Wt1e7gqL9Svfts3NFvl31K0ymV1LfS%2FxzHlfswEHoi7H8mknRh%2FeH%2FeF529mdDRw025vL9xSMWxIiVR9qdtU%2BXBgtLwI3HC8ff%2FPiIO25fn2xgZugl%2FZ%2FjNgkUS%2B6InWi2IHPOrZw2k4N8OSnt5ayrYgyOAt%2BmjMYyxKG17BLZYgAnVKiIoeKxoxZZzU7MvFcAlI38%2FV5TGRcj%2FCQvH1%2FTTMol%2F7zXwU9cq%2FuHlAqtC6fmt8JnacaK6FUTrCEvfnbB1WqWpT2jYofHCzFITfbZ%2Bnoh3l4BQRfIs7v6NzPBtdyX6LB%2BPSvP%2Bi5n0aeXHdqILqhvicoQ6AuTQmEmbgTV%2BBgvUPxLqC00EVNA9ZY%2FAlLzGtXyNZR2pis2eZns%2FIWukTgdFgD%2FP2GoOGaq6M1C8SCWRN0wUA%2BkaExvqGGnu0ygCGTGNVfC0vI2JZR0bsdnQw53d%2FPAo%2FnkBD%2BZRC3mAFWvhbkEFpwNJggATIFW5P40vo7A5PoyTmYQtlwDio%2F3un1f8%2BdzJz16tZSAxdEZKkIdvmll8%2FnqGd8Hue3HbX41SSnBRYTl9LMnDm8zJ2PTCs5%2FnDBjqkAe9wMZ0uWmqsI0QveiOA4bRM4xLaFxZX8jzi2ULWHSSCgBmQ4u3FbbSg6rkoCnKGvYfOF0T8%2BAQKxlceGb4aRlzhw8V6s0kCr%2BXiQAvoGbf4hQs%2BaqNUGxULCzZWTwihonGY5Cfx2299%2FwmpoEJeuOj4lVqhED7E%2BeSVTUqua4qmhkpzHeHlc2%2B7kFltKaKwaW%2FQLFn8i3af5gqrO%2BxXk83lMAI8&X-Amz-Signature=358b4731c24d7f454fdbf6d2ba2c1fda754480e88d4265c1776b0f8e7e371081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4EQ5D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAM%2BeCkdc0Z2G2m5ID%2B2rKs7726X7WWPNeOBpzmpJuCgIhAN6vMU9SUvjjORCu6K96wH08eeWCqsvfZaU%2FH4UuujePKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAEfJr%2BJ0STuT418q3ANOWv39hFfJc5dL37lJJfK9yXJ1swEqjQtBoOe9nuX7GTa1V6LadtpEaX86Wt1e7gqL9Svfts3NFvl31K0ymV1LfS%2FxzHlfswEHoi7H8mknRh%2FeH%2FeF529mdDRw025vL9xSMWxIiVR9qdtU%2BXBgtLwI3HC8ff%2FPiIO25fn2xgZugl%2FZ%2FjNgkUS%2B6InWi2IHPOrZw2k4N8OSnt5ayrYgyOAt%2BmjMYyxKG17BLZYgAnVKiIoeKxoxZZzU7MvFcAlI38%2FV5TGRcj%2FCQvH1%2FTTMol%2F7zXwU9cq%2FuHlAqtC6fmt8JnacaK6FUTrCEvfnbB1WqWpT2jYofHCzFITfbZ%2Bnoh3l4BQRfIs7v6NzPBtdyX6LB%2BPSvP%2Bi5n0aeXHdqILqhvicoQ6AuTQmEmbgTV%2BBgvUPxLqC00EVNA9ZY%2FAlLzGtXyNZR2pis2eZns%2FIWukTgdFgD%2FP2GoOGaq6M1C8SCWRN0wUA%2BkaExvqGGnu0ygCGTGNVfC0vI2JZR0bsdnQw53d%2FPAo%2FnkBD%2BZRC3mAFWvhbkEFpwNJggATIFW5P40vo7A5PoyTmYQtlwDio%2F3un1f8%2BdzJz16tZSAxdEZKkIdvmll8%2FnqGd8Hue3HbX41SSnBRYTl9LMnDm8zJ2PTCs5%2FnDBjqkAe9wMZ0uWmqsI0QveiOA4bRM4xLaFxZX8jzi2ULWHSSCgBmQ4u3FbbSg6rkoCnKGvYfOF0T8%2BAQKxlceGb4aRlzhw8V6s0kCr%2BXiQAvoGbf4hQs%2BaqNUGxULCzZWTwihonGY5Cfx2299%2FwmpoEJeuOj4lVqhED7E%2BeSVTUqua4qmhkpzHeHlc2%2B7kFltKaKwaW%2FQLFn8i3af5gqrO%2BxXk83lMAI8&X-Amz-Signature=fb1911977b35695763b3096b1ac46ddeab9769e736e92a9db173a46fe54bc61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4EQ5D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAM%2BeCkdc0Z2G2m5ID%2B2rKs7726X7WWPNeOBpzmpJuCgIhAN6vMU9SUvjjORCu6K96wH08eeWCqsvfZaU%2FH4UuujePKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAEfJr%2BJ0STuT418q3ANOWv39hFfJc5dL37lJJfK9yXJ1swEqjQtBoOe9nuX7GTa1V6LadtpEaX86Wt1e7gqL9Svfts3NFvl31K0ymV1LfS%2FxzHlfswEHoi7H8mknRh%2FeH%2FeF529mdDRw025vL9xSMWxIiVR9qdtU%2BXBgtLwI3HC8ff%2FPiIO25fn2xgZugl%2FZ%2FjNgkUS%2B6InWi2IHPOrZw2k4N8OSnt5ayrYgyOAt%2BmjMYyxKG17BLZYgAnVKiIoeKxoxZZzU7MvFcAlI38%2FV5TGRcj%2FCQvH1%2FTTMol%2F7zXwU9cq%2FuHlAqtC6fmt8JnacaK6FUTrCEvfnbB1WqWpT2jYofHCzFITfbZ%2Bnoh3l4BQRfIs7v6NzPBtdyX6LB%2BPSvP%2Bi5n0aeXHdqILqhvicoQ6AuTQmEmbgTV%2BBgvUPxLqC00EVNA9ZY%2FAlLzGtXyNZR2pis2eZns%2FIWukTgdFgD%2FP2GoOGaq6M1C8SCWRN0wUA%2BkaExvqGGnu0ygCGTGNVfC0vI2JZR0bsdnQw53d%2FPAo%2FnkBD%2BZRC3mAFWvhbkEFpwNJggATIFW5P40vo7A5PoyTmYQtlwDio%2F3un1f8%2BdzJz16tZSAxdEZKkIdvmll8%2FnqGd8Hue3HbX41SSnBRYTl9LMnDm8zJ2PTCs5%2FnDBjqkAe9wMZ0uWmqsI0QveiOA4bRM4xLaFxZX8jzi2ULWHSSCgBmQ4u3FbbSg6rkoCnKGvYfOF0T8%2BAQKxlceGb4aRlzhw8V6s0kCr%2BXiQAvoGbf4hQs%2BaqNUGxULCzZWTwihonGY5Cfx2299%2FwmpoEJeuOj4lVqhED7E%2BeSVTUqua4qmhkpzHeHlc2%2B7kFltKaKwaW%2FQLFn8i3af5gqrO%2BxXk83lMAI8&X-Amz-Signature=912a116a8ecc93b8c28f82130d589fc5a083b688af7341afafb99dfea468a633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4EQ5D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAM%2BeCkdc0Z2G2m5ID%2B2rKs7726X7WWPNeOBpzmpJuCgIhAN6vMU9SUvjjORCu6K96wH08eeWCqsvfZaU%2FH4UuujePKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAEfJr%2BJ0STuT418q3ANOWv39hFfJc5dL37lJJfK9yXJ1swEqjQtBoOe9nuX7GTa1V6LadtpEaX86Wt1e7gqL9Svfts3NFvl31K0ymV1LfS%2FxzHlfswEHoi7H8mknRh%2FeH%2FeF529mdDRw025vL9xSMWxIiVR9qdtU%2BXBgtLwI3HC8ff%2FPiIO25fn2xgZugl%2FZ%2FjNgkUS%2B6InWi2IHPOrZw2k4N8OSnt5ayrYgyOAt%2BmjMYyxKG17BLZYgAnVKiIoeKxoxZZzU7MvFcAlI38%2FV5TGRcj%2FCQvH1%2FTTMol%2F7zXwU9cq%2FuHlAqtC6fmt8JnacaK6FUTrCEvfnbB1WqWpT2jYofHCzFITfbZ%2Bnoh3l4BQRfIs7v6NzPBtdyX6LB%2BPSvP%2Bi5n0aeXHdqILqhvicoQ6AuTQmEmbgTV%2BBgvUPxLqC00EVNA9ZY%2FAlLzGtXyNZR2pis2eZns%2FIWukTgdFgD%2FP2GoOGaq6M1C8SCWRN0wUA%2BkaExvqGGnu0ygCGTGNVfC0vI2JZR0bsdnQw53d%2FPAo%2FnkBD%2BZRC3mAFWvhbkEFpwNJggATIFW5P40vo7A5PoyTmYQtlwDio%2F3un1f8%2BdzJz16tZSAxdEZKkIdvmll8%2FnqGd8Hue3HbX41SSnBRYTl9LMnDm8zJ2PTCs5%2FnDBjqkAe9wMZ0uWmqsI0QveiOA4bRM4xLaFxZX8jzi2ULWHSSCgBmQ4u3FbbSg6rkoCnKGvYfOF0T8%2BAQKxlceGb4aRlzhw8V6s0kCr%2BXiQAvoGbf4hQs%2BaqNUGxULCzZWTwihonGY5Cfx2299%2FwmpoEJeuOj4lVqhED7E%2BeSVTUqua4qmhkpzHeHlc2%2B7kFltKaKwaW%2FQLFn8i3af5gqrO%2BxXk83lMAI8&X-Amz-Signature=aeb211700c0c73ad6720d9de25157ec40acac8c5e4b4a47de82ff1b328f72f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
