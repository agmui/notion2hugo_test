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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NIX3UQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGqkZGF1se36ug8McuWyfvhjxXSzrotQCC4O5CGHpwUZAiEA7eNdhEwnrIAS3Hb%2BeEYptptFFi9guagHhqaxaW2MPGIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBaZN%2FX39Tcvm0f7mCrcA%2Blb7%2BGOOe9EXK1xDEnmtwHRbOkLgJ4sL69rtnSNbJ6AwSVxXDpA17XjRLvrGdqcwU3zCvCDSjvDSd6lKStyiWxzmTVevg8iPNxgukj%2F7kkICldmhdyIJ5lZnN10iQLee9g08jap%2BoK1TJQy86THdQKydhmFXjLzz0cchDdR65e%2FJhMJ1OsdRF8WxLG1f78b2UnOW5MNJZgIjcPWoAsL2Nei7Hi7jgG8%2Bs1Qn5Qewpz8SKq6xz0hxiVkJNxifaxPlpFDSVHvYmvplQaLBSeE9jh49hTfme%2FXdzaC4Y1c%2FUh7Tk09ThAJRjreIxc6NGxKlNwaoeTzGD1hmnSq44A14XMa40D3o8ZLnOnEEMiGb%2FsT59Rpgy7pemP4EacvmoEWFoNwRCr5cSDxFg32JRhVb2Y6z99GhwzAYhL9P%2FjXqdigjfFHRaoq%2BUHLgVmIrXrOhQgix9l0AurbSfVB4Q%2B1f6%2BqwkMIvMWm4WxuE7mwqC24NApmJPNn49U5hH8lg1TuvUb%2Fqj7Zm9r3NjBkNyVR07y%2F%2BOyaG%2BdrxQMWNefQK81DEXKuAswa%2FW3DorpKA29u0hvwOC%2BZ7yklyCS6N95lEQWNK%2BixIwB4bfYlBNac8AKop7jPK69W%2BOagTnRpMP3axsQGOqUBiUCCSxnSDb7%2Fzs4ZjtQXJGn%2BKmtr5Oj1%2FLjOwYeygCoGPRQMY2ZOx7JfMsurJjZqBheLPFv5l9MQ9tBdBHzjnuP5mD8Lj%2BQv1GNjcuALbvo8Ie0ADP%2F6ClE0%2BYmEAEBMtCcV5JfXJidWgzn0rTYKVY4v2rJw5saDmozCc8%2FDCC3%2BeMifPO4JgWva0ToCHEWd1cgw4q2RsXCiLQMj%2BjSeFycS3roF&X-Amz-Signature=2cf8a96a22e890e6c27319911b5345cb1aca5ea291dc9f68d7450b22f46a179f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NIX3UQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGqkZGF1se36ug8McuWyfvhjxXSzrotQCC4O5CGHpwUZAiEA7eNdhEwnrIAS3Hb%2BeEYptptFFi9guagHhqaxaW2MPGIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBaZN%2FX39Tcvm0f7mCrcA%2Blb7%2BGOOe9EXK1xDEnmtwHRbOkLgJ4sL69rtnSNbJ6AwSVxXDpA17XjRLvrGdqcwU3zCvCDSjvDSd6lKStyiWxzmTVevg8iPNxgukj%2F7kkICldmhdyIJ5lZnN10iQLee9g08jap%2BoK1TJQy86THdQKydhmFXjLzz0cchDdR65e%2FJhMJ1OsdRF8WxLG1f78b2UnOW5MNJZgIjcPWoAsL2Nei7Hi7jgG8%2Bs1Qn5Qewpz8SKq6xz0hxiVkJNxifaxPlpFDSVHvYmvplQaLBSeE9jh49hTfme%2FXdzaC4Y1c%2FUh7Tk09ThAJRjreIxc6NGxKlNwaoeTzGD1hmnSq44A14XMa40D3o8ZLnOnEEMiGb%2FsT59Rpgy7pemP4EacvmoEWFoNwRCr5cSDxFg32JRhVb2Y6z99GhwzAYhL9P%2FjXqdigjfFHRaoq%2BUHLgVmIrXrOhQgix9l0AurbSfVB4Q%2B1f6%2BqwkMIvMWm4WxuE7mwqC24NApmJPNn49U5hH8lg1TuvUb%2Fqj7Zm9r3NjBkNyVR07y%2F%2BOyaG%2BdrxQMWNefQK81DEXKuAswa%2FW3DorpKA29u0hvwOC%2BZ7yklyCS6N95lEQWNK%2BixIwB4bfYlBNac8AKop7jPK69W%2BOagTnRpMP3axsQGOqUBiUCCSxnSDb7%2Fzs4ZjtQXJGn%2BKmtr5Oj1%2FLjOwYeygCoGPRQMY2ZOx7JfMsurJjZqBheLPFv5l9MQ9tBdBHzjnuP5mD8Lj%2BQv1GNjcuALbvo8Ie0ADP%2F6ClE0%2BYmEAEBMtCcV5JfXJidWgzn0rTYKVY4v2rJw5saDmozCc8%2FDCC3%2BeMifPO4JgWva0ToCHEWd1cgw4q2RsXCiLQMj%2BjSeFycS3roF&X-Amz-Signature=e2aa6d69d26be505f245571a05f404c0757be6c4eee6fb1be405418981beccf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NIX3UQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGqkZGF1se36ug8McuWyfvhjxXSzrotQCC4O5CGHpwUZAiEA7eNdhEwnrIAS3Hb%2BeEYptptFFi9guagHhqaxaW2MPGIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBaZN%2FX39Tcvm0f7mCrcA%2Blb7%2BGOOe9EXK1xDEnmtwHRbOkLgJ4sL69rtnSNbJ6AwSVxXDpA17XjRLvrGdqcwU3zCvCDSjvDSd6lKStyiWxzmTVevg8iPNxgukj%2F7kkICldmhdyIJ5lZnN10iQLee9g08jap%2BoK1TJQy86THdQKydhmFXjLzz0cchDdR65e%2FJhMJ1OsdRF8WxLG1f78b2UnOW5MNJZgIjcPWoAsL2Nei7Hi7jgG8%2Bs1Qn5Qewpz8SKq6xz0hxiVkJNxifaxPlpFDSVHvYmvplQaLBSeE9jh49hTfme%2FXdzaC4Y1c%2FUh7Tk09ThAJRjreIxc6NGxKlNwaoeTzGD1hmnSq44A14XMa40D3o8ZLnOnEEMiGb%2FsT59Rpgy7pemP4EacvmoEWFoNwRCr5cSDxFg32JRhVb2Y6z99GhwzAYhL9P%2FjXqdigjfFHRaoq%2BUHLgVmIrXrOhQgix9l0AurbSfVB4Q%2B1f6%2BqwkMIvMWm4WxuE7mwqC24NApmJPNn49U5hH8lg1TuvUb%2Fqj7Zm9r3NjBkNyVR07y%2F%2BOyaG%2BdrxQMWNefQK81DEXKuAswa%2FW3DorpKA29u0hvwOC%2BZ7yklyCS6N95lEQWNK%2BixIwB4bfYlBNac8AKop7jPK69W%2BOagTnRpMP3axsQGOqUBiUCCSxnSDb7%2Fzs4ZjtQXJGn%2BKmtr5Oj1%2FLjOwYeygCoGPRQMY2ZOx7JfMsurJjZqBheLPFv5l9MQ9tBdBHzjnuP5mD8Lj%2BQv1GNjcuALbvo8Ie0ADP%2F6ClE0%2BYmEAEBMtCcV5JfXJidWgzn0rTYKVY4v2rJw5saDmozCc8%2FDCC3%2BeMifPO4JgWva0ToCHEWd1cgw4q2RsXCiLQMj%2BjSeFycS3roF&X-Amz-Signature=5b600d1d1ecc3c7727f865509ac6207acef7710e32bd575f436d9bfc5ef7a31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NIX3UQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGqkZGF1se36ug8McuWyfvhjxXSzrotQCC4O5CGHpwUZAiEA7eNdhEwnrIAS3Hb%2BeEYptptFFi9guagHhqaxaW2MPGIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBaZN%2FX39Tcvm0f7mCrcA%2Blb7%2BGOOe9EXK1xDEnmtwHRbOkLgJ4sL69rtnSNbJ6AwSVxXDpA17XjRLvrGdqcwU3zCvCDSjvDSd6lKStyiWxzmTVevg8iPNxgukj%2F7kkICldmhdyIJ5lZnN10iQLee9g08jap%2BoK1TJQy86THdQKydhmFXjLzz0cchDdR65e%2FJhMJ1OsdRF8WxLG1f78b2UnOW5MNJZgIjcPWoAsL2Nei7Hi7jgG8%2Bs1Qn5Qewpz8SKq6xz0hxiVkJNxifaxPlpFDSVHvYmvplQaLBSeE9jh49hTfme%2FXdzaC4Y1c%2FUh7Tk09ThAJRjreIxc6NGxKlNwaoeTzGD1hmnSq44A14XMa40D3o8ZLnOnEEMiGb%2FsT59Rpgy7pemP4EacvmoEWFoNwRCr5cSDxFg32JRhVb2Y6z99GhwzAYhL9P%2FjXqdigjfFHRaoq%2BUHLgVmIrXrOhQgix9l0AurbSfVB4Q%2B1f6%2BqwkMIvMWm4WxuE7mwqC24NApmJPNn49U5hH8lg1TuvUb%2Fqj7Zm9r3NjBkNyVR07y%2F%2BOyaG%2BdrxQMWNefQK81DEXKuAswa%2FW3DorpKA29u0hvwOC%2BZ7yklyCS6N95lEQWNK%2BixIwB4bfYlBNac8AKop7jPK69W%2BOagTnRpMP3axsQGOqUBiUCCSxnSDb7%2Fzs4ZjtQXJGn%2BKmtr5Oj1%2FLjOwYeygCoGPRQMY2ZOx7JfMsurJjZqBheLPFv5l9MQ9tBdBHzjnuP5mD8Lj%2BQv1GNjcuALbvo8Ie0ADP%2F6ClE0%2BYmEAEBMtCcV5JfXJidWgzn0rTYKVY4v2rJw5saDmozCc8%2FDCC3%2BeMifPO4JgWva0ToCHEWd1cgw4q2RsXCiLQMj%2BjSeFycS3roF&X-Amz-Signature=e2d7c10a108d40372c033b8e2de14cb3d2ac0f0b83ef7e6b14ef4a92ff28c0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NIX3UQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGqkZGF1se36ug8McuWyfvhjxXSzrotQCC4O5CGHpwUZAiEA7eNdhEwnrIAS3Hb%2BeEYptptFFi9guagHhqaxaW2MPGIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBaZN%2FX39Tcvm0f7mCrcA%2Blb7%2BGOOe9EXK1xDEnmtwHRbOkLgJ4sL69rtnSNbJ6AwSVxXDpA17XjRLvrGdqcwU3zCvCDSjvDSd6lKStyiWxzmTVevg8iPNxgukj%2F7kkICldmhdyIJ5lZnN10iQLee9g08jap%2BoK1TJQy86THdQKydhmFXjLzz0cchDdR65e%2FJhMJ1OsdRF8WxLG1f78b2UnOW5MNJZgIjcPWoAsL2Nei7Hi7jgG8%2Bs1Qn5Qewpz8SKq6xz0hxiVkJNxifaxPlpFDSVHvYmvplQaLBSeE9jh49hTfme%2FXdzaC4Y1c%2FUh7Tk09ThAJRjreIxc6NGxKlNwaoeTzGD1hmnSq44A14XMa40D3o8ZLnOnEEMiGb%2FsT59Rpgy7pemP4EacvmoEWFoNwRCr5cSDxFg32JRhVb2Y6z99GhwzAYhL9P%2FjXqdigjfFHRaoq%2BUHLgVmIrXrOhQgix9l0AurbSfVB4Q%2B1f6%2BqwkMIvMWm4WxuE7mwqC24NApmJPNn49U5hH8lg1TuvUb%2Fqj7Zm9r3NjBkNyVR07y%2F%2BOyaG%2BdrxQMWNefQK81DEXKuAswa%2FW3DorpKA29u0hvwOC%2BZ7yklyCS6N95lEQWNK%2BixIwB4bfYlBNac8AKop7jPK69W%2BOagTnRpMP3axsQGOqUBiUCCSxnSDb7%2Fzs4ZjtQXJGn%2BKmtr5Oj1%2FLjOwYeygCoGPRQMY2ZOx7JfMsurJjZqBheLPFv5l9MQ9tBdBHzjnuP5mD8Lj%2BQv1GNjcuALbvo8Ie0ADP%2F6ClE0%2BYmEAEBMtCcV5JfXJidWgzn0rTYKVY4v2rJw5saDmozCc8%2FDCC3%2BeMifPO4JgWva0ToCHEWd1cgw4q2RsXCiLQMj%2BjSeFycS3roF&X-Amz-Signature=df22aec6151f1f64224b6dbcb7e8b9ce7d06aadbfe69067d2e38e4e3f0810b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NIX3UQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGqkZGF1se36ug8McuWyfvhjxXSzrotQCC4O5CGHpwUZAiEA7eNdhEwnrIAS3Hb%2BeEYptptFFi9guagHhqaxaW2MPGIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBaZN%2FX39Tcvm0f7mCrcA%2Blb7%2BGOOe9EXK1xDEnmtwHRbOkLgJ4sL69rtnSNbJ6AwSVxXDpA17XjRLvrGdqcwU3zCvCDSjvDSd6lKStyiWxzmTVevg8iPNxgukj%2F7kkICldmhdyIJ5lZnN10iQLee9g08jap%2BoK1TJQy86THdQKydhmFXjLzz0cchDdR65e%2FJhMJ1OsdRF8WxLG1f78b2UnOW5MNJZgIjcPWoAsL2Nei7Hi7jgG8%2Bs1Qn5Qewpz8SKq6xz0hxiVkJNxifaxPlpFDSVHvYmvplQaLBSeE9jh49hTfme%2FXdzaC4Y1c%2FUh7Tk09ThAJRjreIxc6NGxKlNwaoeTzGD1hmnSq44A14XMa40D3o8ZLnOnEEMiGb%2FsT59Rpgy7pemP4EacvmoEWFoNwRCr5cSDxFg32JRhVb2Y6z99GhwzAYhL9P%2FjXqdigjfFHRaoq%2BUHLgVmIrXrOhQgix9l0AurbSfVB4Q%2B1f6%2BqwkMIvMWm4WxuE7mwqC24NApmJPNn49U5hH8lg1TuvUb%2Fqj7Zm9r3NjBkNyVR07y%2F%2BOyaG%2BdrxQMWNefQK81DEXKuAswa%2FW3DorpKA29u0hvwOC%2BZ7yklyCS6N95lEQWNK%2BixIwB4bfYlBNac8AKop7jPK69W%2BOagTnRpMP3axsQGOqUBiUCCSxnSDb7%2Fzs4ZjtQXJGn%2BKmtr5Oj1%2FLjOwYeygCoGPRQMY2ZOx7JfMsurJjZqBheLPFv5l9MQ9tBdBHzjnuP5mD8Lj%2BQv1GNjcuALbvo8Ie0ADP%2F6ClE0%2BYmEAEBMtCcV5JfXJidWgzn0rTYKVY4v2rJw5saDmozCc8%2FDCC3%2BeMifPO4JgWva0ToCHEWd1cgw4q2RsXCiLQMj%2BjSeFycS3roF&X-Amz-Signature=17f7ec0dc3ee4f01ef32c32b247b91438e92ea644ecc7d11278e924d4fa485c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NIX3UQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGqkZGF1se36ug8McuWyfvhjxXSzrotQCC4O5CGHpwUZAiEA7eNdhEwnrIAS3Hb%2BeEYptptFFi9guagHhqaxaW2MPGIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBaZN%2FX39Tcvm0f7mCrcA%2Blb7%2BGOOe9EXK1xDEnmtwHRbOkLgJ4sL69rtnSNbJ6AwSVxXDpA17XjRLvrGdqcwU3zCvCDSjvDSd6lKStyiWxzmTVevg8iPNxgukj%2F7kkICldmhdyIJ5lZnN10iQLee9g08jap%2BoK1TJQy86THdQKydhmFXjLzz0cchDdR65e%2FJhMJ1OsdRF8WxLG1f78b2UnOW5MNJZgIjcPWoAsL2Nei7Hi7jgG8%2Bs1Qn5Qewpz8SKq6xz0hxiVkJNxifaxPlpFDSVHvYmvplQaLBSeE9jh49hTfme%2FXdzaC4Y1c%2FUh7Tk09ThAJRjreIxc6NGxKlNwaoeTzGD1hmnSq44A14XMa40D3o8ZLnOnEEMiGb%2FsT59Rpgy7pemP4EacvmoEWFoNwRCr5cSDxFg32JRhVb2Y6z99GhwzAYhL9P%2FjXqdigjfFHRaoq%2BUHLgVmIrXrOhQgix9l0AurbSfVB4Q%2B1f6%2BqwkMIvMWm4WxuE7mwqC24NApmJPNn49U5hH8lg1TuvUb%2Fqj7Zm9r3NjBkNyVR07y%2F%2BOyaG%2BdrxQMWNefQK81DEXKuAswa%2FW3DorpKA29u0hvwOC%2BZ7yklyCS6N95lEQWNK%2BixIwB4bfYlBNac8AKop7jPK69W%2BOagTnRpMP3axsQGOqUBiUCCSxnSDb7%2Fzs4ZjtQXJGn%2BKmtr5Oj1%2FLjOwYeygCoGPRQMY2ZOx7JfMsurJjZqBheLPFv5l9MQ9tBdBHzjnuP5mD8Lj%2BQv1GNjcuALbvo8Ie0ADP%2F6ClE0%2BYmEAEBMtCcV5JfXJidWgzn0rTYKVY4v2rJw5saDmozCc8%2FDCC3%2BeMifPO4JgWva0ToCHEWd1cgw4q2RsXCiLQMj%2BjSeFycS3roF&X-Amz-Signature=80a78afacec6cda03ce25a9e916a9baf80e8e9ec204fad7d11a979062c9a39fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
