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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEKB4WC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0GfdkxSv5Nm3AwoGI3Zk4mVVWyBvFPhfsY1HMiAVyRAiAJ3AXq4dOCAgnVqM4f8%2BAS%2Bhi6p%2BbO6P2YOuXB6i9KJyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMHnp9AJ1bX%2BD0S6aCKtwDM5HW93jsMhtjj7gkDO49jeaDN5Xs5wDPP0u7oR1NWdB5Bg8F6RzFAVFLwA3EXkbJD3eTw4Ssp6vSbHbIgP%2B1%2Fmt5KbUeVvCPCg7hs4FoHbD9gtQUCTnYa4WbFT4oJHOBVeyvkarE9d72VhYUl5Ml8uvjDJ77D3Qa%2BmlhFAJ%2FzApz4tjNAYtVhsSSN1rFW%2BW00L51ZIGA1oDUFxy480Po0kOjQlPRyc7ITpodlffg2ffycMF05rv67mWrGde7%2BeFmWz25hU7nx6dyMm%2FwatxIA5S0XagTmFOe4%2FteVDa78%2FD0Bzqu3Zmf0AZh2iPNB8ghGAx5elUof0Oqsx5MmZBYwDnorZ6XhoebcRuJjBkkiwbYZDvICfmo2yac6euKR9tY%2F6xIMxBsoN1bNEMj49hPfCWzIw8x6qmWAGuwRg9P3b%2B9YmYbiYrUI5dmCmHY2KX%2FoXbAoPMT%2B8vS4mcJRTgSgPjXtx84iixapkD%2BfrsWbtpYTkq8AsiYXRXQN3EoSY4S8wpU3ZAXq22G6ne37TNkyEjPgV03FyKX5px6dYN9c5acEsbGl9v%2BMIxFpCDDDfpr8j0UPYnZvS4MOqw%2F7KP%2B3i6khB9jERjCm%2BUEiua%2BJf4P4SKTGR5NhtESo90wtoaWvwY6pgH2TJmKCX4cgxlWCZvxqREoC8LkzkfNySZctZdXg8tQZaI08BTB105yUqzexBVO58WHktt7k%2F%2BmBFe%2FAsrgMaDOSg2VCj%2FJ29SUa%2BgjKp%2Bf3KlwhnE%2BLklHD469FlwBvzFnREs8pigrK0z%2BZkQLOJ72ypDlJJykxZACNhKx44tcEDIjB9GqGy%2BprMe85B74ZuoRM6KO8QOfOZ5aR1voqTAjpHrET8xF&X-Amz-Signature=fee2b86756c32ad98eca8543a9808da3d23178ef432446df5bc8b1e28f1749a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEKB4WC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0GfdkxSv5Nm3AwoGI3Zk4mVVWyBvFPhfsY1HMiAVyRAiAJ3AXq4dOCAgnVqM4f8%2BAS%2Bhi6p%2BbO6P2YOuXB6i9KJyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMHnp9AJ1bX%2BD0S6aCKtwDM5HW93jsMhtjj7gkDO49jeaDN5Xs5wDPP0u7oR1NWdB5Bg8F6RzFAVFLwA3EXkbJD3eTw4Ssp6vSbHbIgP%2B1%2Fmt5KbUeVvCPCg7hs4FoHbD9gtQUCTnYa4WbFT4oJHOBVeyvkarE9d72VhYUl5Ml8uvjDJ77D3Qa%2BmlhFAJ%2FzApz4tjNAYtVhsSSN1rFW%2BW00L51ZIGA1oDUFxy480Po0kOjQlPRyc7ITpodlffg2ffycMF05rv67mWrGde7%2BeFmWz25hU7nx6dyMm%2FwatxIA5S0XagTmFOe4%2FteVDa78%2FD0Bzqu3Zmf0AZh2iPNB8ghGAx5elUof0Oqsx5MmZBYwDnorZ6XhoebcRuJjBkkiwbYZDvICfmo2yac6euKR9tY%2F6xIMxBsoN1bNEMj49hPfCWzIw8x6qmWAGuwRg9P3b%2B9YmYbiYrUI5dmCmHY2KX%2FoXbAoPMT%2B8vS4mcJRTgSgPjXtx84iixapkD%2BfrsWbtpYTkq8AsiYXRXQN3EoSY4S8wpU3ZAXq22G6ne37TNkyEjPgV03FyKX5px6dYN9c5acEsbGl9v%2BMIxFpCDDDfpr8j0UPYnZvS4MOqw%2F7KP%2B3i6khB9jERjCm%2BUEiua%2BJf4P4SKTGR5NhtESo90wtoaWvwY6pgH2TJmKCX4cgxlWCZvxqREoC8LkzkfNySZctZdXg8tQZaI08BTB105yUqzexBVO58WHktt7k%2F%2BmBFe%2FAsrgMaDOSg2VCj%2FJ29SUa%2BgjKp%2Bf3KlwhnE%2BLklHD469FlwBvzFnREs8pigrK0z%2BZkQLOJ72ypDlJJykxZACNhKx44tcEDIjB9GqGy%2BprMe85B74ZuoRM6KO8QOfOZ5aR1voqTAjpHrET8xF&X-Amz-Signature=e5cf1c28dcf0b4ed95fd8f22ab0500912c6cec241506dd42fea4d862a415c5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEKB4WC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0GfdkxSv5Nm3AwoGI3Zk4mVVWyBvFPhfsY1HMiAVyRAiAJ3AXq4dOCAgnVqM4f8%2BAS%2Bhi6p%2BbO6P2YOuXB6i9KJyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMHnp9AJ1bX%2BD0S6aCKtwDM5HW93jsMhtjj7gkDO49jeaDN5Xs5wDPP0u7oR1NWdB5Bg8F6RzFAVFLwA3EXkbJD3eTw4Ssp6vSbHbIgP%2B1%2Fmt5KbUeVvCPCg7hs4FoHbD9gtQUCTnYa4WbFT4oJHOBVeyvkarE9d72VhYUl5Ml8uvjDJ77D3Qa%2BmlhFAJ%2FzApz4tjNAYtVhsSSN1rFW%2BW00L51ZIGA1oDUFxy480Po0kOjQlPRyc7ITpodlffg2ffycMF05rv67mWrGde7%2BeFmWz25hU7nx6dyMm%2FwatxIA5S0XagTmFOe4%2FteVDa78%2FD0Bzqu3Zmf0AZh2iPNB8ghGAx5elUof0Oqsx5MmZBYwDnorZ6XhoebcRuJjBkkiwbYZDvICfmo2yac6euKR9tY%2F6xIMxBsoN1bNEMj49hPfCWzIw8x6qmWAGuwRg9P3b%2B9YmYbiYrUI5dmCmHY2KX%2FoXbAoPMT%2B8vS4mcJRTgSgPjXtx84iixapkD%2BfrsWbtpYTkq8AsiYXRXQN3EoSY4S8wpU3ZAXq22G6ne37TNkyEjPgV03FyKX5px6dYN9c5acEsbGl9v%2BMIxFpCDDDfpr8j0UPYnZvS4MOqw%2F7KP%2B3i6khB9jERjCm%2BUEiua%2BJf4P4SKTGR5NhtESo90wtoaWvwY6pgH2TJmKCX4cgxlWCZvxqREoC8LkzkfNySZctZdXg8tQZaI08BTB105yUqzexBVO58WHktt7k%2F%2BmBFe%2FAsrgMaDOSg2VCj%2FJ29SUa%2BgjKp%2Bf3KlwhnE%2BLklHD469FlwBvzFnREs8pigrK0z%2BZkQLOJ72ypDlJJykxZACNhKx44tcEDIjB9GqGy%2BprMe85B74ZuoRM6KO8QOfOZ5aR1voqTAjpHrET8xF&X-Amz-Signature=478a2cd643ed5ef32c7d04991e6194a249d815b3e09fae11b49782ca3e5dc6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEKB4WC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0GfdkxSv5Nm3AwoGI3Zk4mVVWyBvFPhfsY1HMiAVyRAiAJ3AXq4dOCAgnVqM4f8%2BAS%2Bhi6p%2BbO6P2YOuXB6i9KJyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMHnp9AJ1bX%2BD0S6aCKtwDM5HW93jsMhtjj7gkDO49jeaDN5Xs5wDPP0u7oR1NWdB5Bg8F6RzFAVFLwA3EXkbJD3eTw4Ssp6vSbHbIgP%2B1%2Fmt5KbUeVvCPCg7hs4FoHbD9gtQUCTnYa4WbFT4oJHOBVeyvkarE9d72VhYUl5Ml8uvjDJ77D3Qa%2BmlhFAJ%2FzApz4tjNAYtVhsSSN1rFW%2BW00L51ZIGA1oDUFxy480Po0kOjQlPRyc7ITpodlffg2ffycMF05rv67mWrGde7%2BeFmWz25hU7nx6dyMm%2FwatxIA5S0XagTmFOe4%2FteVDa78%2FD0Bzqu3Zmf0AZh2iPNB8ghGAx5elUof0Oqsx5MmZBYwDnorZ6XhoebcRuJjBkkiwbYZDvICfmo2yac6euKR9tY%2F6xIMxBsoN1bNEMj49hPfCWzIw8x6qmWAGuwRg9P3b%2B9YmYbiYrUI5dmCmHY2KX%2FoXbAoPMT%2B8vS4mcJRTgSgPjXtx84iixapkD%2BfrsWbtpYTkq8AsiYXRXQN3EoSY4S8wpU3ZAXq22G6ne37TNkyEjPgV03FyKX5px6dYN9c5acEsbGl9v%2BMIxFpCDDDfpr8j0UPYnZvS4MOqw%2F7KP%2B3i6khB9jERjCm%2BUEiua%2BJf4P4SKTGR5NhtESo90wtoaWvwY6pgH2TJmKCX4cgxlWCZvxqREoC8LkzkfNySZctZdXg8tQZaI08BTB105yUqzexBVO58WHktt7k%2F%2BmBFe%2FAsrgMaDOSg2VCj%2FJ29SUa%2BgjKp%2Bf3KlwhnE%2BLklHD469FlwBvzFnREs8pigrK0z%2BZkQLOJ72ypDlJJykxZACNhKx44tcEDIjB9GqGy%2BprMe85B74ZuoRM6KO8QOfOZ5aR1voqTAjpHrET8xF&X-Amz-Signature=c88161e7b91c38bf799faf9efdb73c7d7cc6251e9ae949935d4383a94d2b9fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEKB4WC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0GfdkxSv5Nm3AwoGI3Zk4mVVWyBvFPhfsY1HMiAVyRAiAJ3AXq4dOCAgnVqM4f8%2BAS%2Bhi6p%2BbO6P2YOuXB6i9KJyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMHnp9AJ1bX%2BD0S6aCKtwDM5HW93jsMhtjj7gkDO49jeaDN5Xs5wDPP0u7oR1NWdB5Bg8F6RzFAVFLwA3EXkbJD3eTw4Ssp6vSbHbIgP%2B1%2Fmt5KbUeVvCPCg7hs4FoHbD9gtQUCTnYa4WbFT4oJHOBVeyvkarE9d72VhYUl5Ml8uvjDJ77D3Qa%2BmlhFAJ%2FzApz4tjNAYtVhsSSN1rFW%2BW00L51ZIGA1oDUFxy480Po0kOjQlPRyc7ITpodlffg2ffycMF05rv67mWrGde7%2BeFmWz25hU7nx6dyMm%2FwatxIA5S0XagTmFOe4%2FteVDa78%2FD0Bzqu3Zmf0AZh2iPNB8ghGAx5elUof0Oqsx5MmZBYwDnorZ6XhoebcRuJjBkkiwbYZDvICfmo2yac6euKR9tY%2F6xIMxBsoN1bNEMj49hPfCWzIw8x6qmWAGuwRg9P3b%2B9YmYbiYrUI5dmCmHY2KX%2FoXbAoPMT%2B8vS4mcJRTgSgPjXtx84iixapkD%2BfrsWbtpYTkq8AsiYXRXQN3EoSY4S8wpU3ZAXq22G6ne37TNkyEjPgV03FyKX5px6dYN9c5acEsbGl9v%2BMIxFpCDDDfpr8j0UPYnZvS4MOqw%2F7KP%2B3i6khB9jERjCm%2BUEiua%2BJf4P4SKTGR5NhtESo90wtoaWvwY6pgH2TJmKCX4cgxlWCZvxqREoC8LkzkfNySZctZdXg8tQZaI08BTB105yUqzexBVO58WHktt7k%2F%2BmBFe%2FAsrgMaDOSg2VCj%2FJ29SUa%2BgjKp%2Bf3KlwhnE%2BLklHD469FlwBvzFnREs8pigrK0z%2BZkQLOJ72ypDlJJykxZACNhKx44tcEDIjB9GqGy%2BprMe85B74ZuoRM6KO8QOfOZ5aR1voqTAjpHrET8xF&X-Amz-Signature=9a08c3ad8ffc6416a2eafedf7be135e3e656623f7ed7c8eb110354d68d58dfdf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEKB4WC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0GfdkxSv5Nm3AwoGI3Zk4mVVWyBvFPhfsY1HMiAVyRAiAJ3AXq4dOCAgnVqM4f8%2BAS%2Bhi6p%2BbO6P2YOuXB6i9KJyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMHnp9AJ1bX%2BD0S6aCKtwDM5HW93jsMhtjj7gkDO49jeaDN5Xs5wDPP0u7oR1NWdB5Bg8F6RzFAVFLwA3EXkbJD3eTw4Ssp6vSbHbIgP%2B1%2Fmt5KbUeVvCPCg7hs4FoHbD9gtQUCTnYa4WbFT4oJHOBVeyvkarE9d72VhYUl5Ml8uvjDJ77D3Qa%2BmlhFAJ%2FzApz4tjNAYtVhsSSN1rFW%2BW00L51ZIGA1oDUFxy480Po0kOjQlPRyc7ITpodlffg2ffycMF05rv67mWrGde7%2BeFmWz25hU7nx6dyMm%2FwatxIA5S0XagTmFOe4%2FteVDa78%2FD0Bzqu3Zmf0AZh2iPNB8ghGAx5elUof0Oqsx5MmZBYwDnorZ6XhoebcRuJjBkkiwbYZDvICfmo2yac6euKR9tY%2F6xIMxBsoN1bNEMj49hPfCWzIw8x6qmWAGuwRg9P3b%2B9YmYbiYrUI5dmCmHY2KX%2FoXbAoPMT%2B8vS4mcJRTgSgPjXtx84iixapkD%2BfrsWbtpYTkq8AsiYXRXQN3EoSY4S8wpU3ZAXq22G6ne37TNkyEjPgV03FyKX5px6dYN9c5acEsbGl9v%2BMIxFpCDDDfpr8j0UPYnZvS4MOqw%2F7KP%2B3i6khB9jERjCm%2BUEiua%2BJf4P4SKTGR5NhtESo90wtoaWvwY6pgH2TJmKCX4cgxlWCZvxqREoC8LkzkfNySZctZdXg8tQZaI08BTB105yUqzexBVO58WHktt7k%2F%2BmBFe%2FAsrgMaDOSg2VCj%2FJ29SUa%2BgjKp%2Bf3KlwhnE%2BLklHD469FlwBvzFnREs8pigrK0z%2BZkQLOJ72ypDlJJykxZACNhKx44tcEDIjB9GqGy%2BprMe85B74ZuoRM6KO8QOfOZ5aR1voqTAjpHrET8xF&X-Amz-Signature=d70195c6708fdd3ba59ed77223225aba4aca341f91deeb25e7705f8838a6f907&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEKB4WC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0GfdkxSv5Nm3AwoGI3Zk4mVVWyBvFPhfsY1HMiAVyRAiAJ3AXq4dOCAgnVqM4f8%2BAS%2Bhi6p%2BbO6P2YOuXB6i9KJyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMHnp9AJ1bX%2BD0S6aCKtwDM5HW93jsMhtjj7gkDO49jeaDN5Xs5wDPP0u7oR1NWdB5Bg8F6RzFAVFLwA3EXkbJD3eTw4Ssp6vSbHbIgP%2B1%2Fmt5KbUeVvCPCg7hs4FoHbD9gtQUCTnYa4WbFT4oJHOBVeyvkarE9d72VhYUl5Ml8uvjDJ77D3Qa%2BmlhFAJ%2FzApz4tjNAYtVhsSSN1rFW%2BW00L51ZIGA1oDUFxy480Po0kOjQlPRyc7ITpodlffg2ffycMF05rv67mWrGde7%2BeFmWz25hU7nx6dyMm%2FwatxIA5S0XagTmFOe4%2FteVDa78%2FD0Bzqu3Zmf0AZh2iPNB8ghGAx5elUof0Oqsx5MmZBYwDnorZ6XhoebcRuJjBkkiwbYZDvICfmo2yac6euKR9tY%2F6xIMxBsoN1bNEMj49hPfCWzIw8x6qmWAGuwRg9P3b%2B9YmYbiYrUI5dmCmHY2KX%2FoXbAoPMT%2B8vS4mcJRTgSgPjXtx84iixapkD%2BfrsWbtpYTkq8AsiYXRXQN3EoSY4S8wpU3ZAXq22G6ne37TNkyEjPgV03FyKX5px6dYN9c5acEsbGl9v%2BMIxFpCDDDfpr8j0UPYnZvS4MOqw%2F7KP%2B3i6khB9jERjCm%2BUEiua%2BJf4P4SKTGR5NhtESo90wtoaWvwY6pgH2TJmKCX4cgxlWCZvxqREoC8LkzkfNySZctZdXg8tQZaI08BTB105yUqzexBVO58WHktt7k%2F%2BmBFe%2FAsrgMaDOSg2VCj%2FJ29SUa%2BgjKp%2Bf3KlwhnE%2BLklHD469FlwBvzFnREs8pigrK0z%2BZkQLOJ72ypDlJJykxZACNhKx44tcEDIjB9GqGy%2BprMe85B74ZuoRM6KO8QOfOZ5aR1voqTAjpHrET8xF&X-Amz-Signature=d72e013b87cb8ddf5e14d0e441928abf95e8de864dc0f5b741fc768ce9a24e61&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
