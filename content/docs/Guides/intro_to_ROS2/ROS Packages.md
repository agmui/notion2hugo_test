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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDCMVON%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDlKYt5AKlKOkoCvdT2K1wdKdARei0tD%2FRk0tQi%2BNcwIhAKGms7vCgj6yvOieYV9PUkgbzUH6QAJTq42xtpr%2F%2FNpVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxRgL8%2F6IXIOrRjRt4q3AM37sOyHoxvg3LRe30pdRjub%2F2Jmgx1W1%2Fu3mMVwhJAQSH57GmRf%2Fp41aNJgcMQ6vJqtLmGpZKvnvnee7BRy6Hcf3C9JpvZqOM7u%2B2YVjskcNmU6O6V%2Bc1eLhh2sc9VeWj3EAezaW14hs5kVMHqbVlhnez9V0iOAofdD3sAxGwNFHpqbgYKKA4Sb1KrtybKfD8d0dFSJ%2BJxGfNX8s%2Bal0qJxpqjNgcsJCDqfvRWlR4spPFXaKbNPGPG1rVPHPHu6LrgxBG7odH9tSd8cmugLxLesoAcFoTUbZ%2Bzz%2BIjCAem7TmRiMHWsAmKBI5%2BBKTzGrYAz9vobSwHJngrp%2F0S0%2Bh7JFjnNJqjYDfhidpRAFgoPFjc8JGG2AAhBNttGoD6BfVZBEYOk7dvUzEoK8501Ub3YCid5Le9l13iw1rgwNJDPjypODExXb9%2FV%2F4DQbEhaHMrd5hotLlpgZ9NdN3za%2Bufw239wvwM0I0O2u2VR97tODC0ref6yD8oS8TFdLejtR4fQS8XvESN60MCfODKX7VnrD4It9%2BL3bAsZD1ejoTPKu%2F29BvtcqbjCyEyJIwhwOwmltOa4QnMeJPl%2F9uMuIWlDFVi48JariQWlw3whW8FgDkyNuFPFRJTwVdTwDCg39u%2BBjqkAZW6eWfkaOd5Z1GyZhdbaY8%2FD2NM6WWSGa5jrE4BJysoo1aMuHiFluuSRXEMZWqJcR2Nc%2FHmptfJg4Y308enCdvUE9gA%2FwXjtxvk0dKEmgWm%2BpbNEvfNRi7As1Xt0JJ%2FSfsog6Hj%2FYtoK3CQQ0fMJJTuV1iaC4ols60CEdoJmy8FMMVU6aR7%2B60t3IZDY92RumwM2iTjnBkFO4q7KQT%2FxBEpHnIG&X-Amz-Signature=cad13223330fe8b3654d807b92af2dcd83e68e90b4598b98205f1cdbe96a1d43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDCMVON%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDlKYt5AKlKOkoCvdT2K1wdKdARei0tD%2FRk0tQi%2BNcwIhAKGms7vCgj6yvOieYV9PUkgbzUH6QAJTq42xtpr%2F%2FNpVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxRgL8%2F6IXIOrRjRt4q3AM37sOyHoxvg3LRe30pdRjub%2F2Jmgx1W1%2Fu3mMVwhJAQSH57GmRf%2Fp41aNJgcMQ6vJqtLmGpZKvnvnee7BRy6Hcf3C9JpvZqOM7u%2B2YVjskcNmU6O6V%2Bc1eLhh2sc9VeWj3EAezaW14hs5kVMHqbVlhnez9V0iOAofdD3sAxGwNFHpqbgYKKA4Sb1KrtybKfD8d0dFSJ%2BJxGfNX8s%2Bal0qJxpqjNgcsJCDqfvRWlR4spPFXaKbNPGPG1rVPHPHu6LrgxBG7odH9tSd8cmugLxLesoAcFoTUbZ%2Bzz%2BIjCAem7TmRiMHWsAmKBI5%2BBKTzGrYAz9vobSwHJngrp%2F0S0%2Bh7JFjnNJqjYDfhidpRAFgoPFjc8JGG2AAhBNttGoD6BfVZBEYOk7dvUzEoK8501Ub3YCid5Le9l13iw1rgwNJDPjypODExXb9%2FV%2F4DQbEhaHMrd5hotLlpgZ9NdN3za%2Bufw239wvwM0I0O2u2VR97tODC0ref6yD8oS8TFdLejtR4fQS8XvESN60MCfODKX7VnrD4It9%2BL3bAsZD1ejoTPKu%2F29BvtcqbjCyEyJIwhwOwmltOa4QnMeJPl%2F9uMuIWlDFVi48JariQWlw3whW8FgDkyNuFPFRJTwVdTwDCg39u%2BBjqkAZW6eWfkaOd5Z1GyZhdbaY8%2FD2NM6WWSGa5jrE4BJysoo1aMuHiFluuSRXEMZWqJcR2Nc%2FHmptfJg4Y308enCdvUE9gA%2FwXjtxvk0dKEmgWm%2BpbNEvfNRi7As1Xt0JJ%2FSfsog6Hj%2FYtoK3CQQ0fMJJTuV1iaC4ols60CEdoJmy8FMMVU6aR7%2B60t3IZDY92RumwM2iTjnBkFO4q7KQT%2FxBEpHnIG&X-Amz-Signature=a04f97c9b716d2940c059635412cbddf400bacbd7007428263f38a5630aac31f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDCMVON%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDlKYt5AKlKOkoCvdT2K1wdKdARei0tD%2FRk0tQi%2BNcwIhAKGms7vCgj6yvOieYV9PUkgbzUH6QAJTq42xtpr%2F%2FNpVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxRgL8%2F6IXIOrRjRt4q3AM37sOyHoxvg3LRe30pdRjub%2F2Jmgx1W1%2Fu3mMVwhJAQSH57GmRf%2Fp41aNJgcMQ6vJqtLmGpZKvnvnee7BRy6Hcf3C9JpvZqOM7u%2B2YVjskcNmU6O6V%2Bc1eLhh2sc9VeWj3EAezaW14hs5kVMHqbVlhnez9V0iOAofdD3sAxGwNFHpqbgYKKA4Sb1KrtybKfD8d0dFSJ%2BJxGfNX8s%2Bal0qJxpqjNgcsJCDqfvRWlR4spPFXaKbNPGPG1rVPHPHu6LrgxBG7odH9tSd8cmugLxLesoAcFoTUbZ%2Bzz%2BIjCAem7TmRiMHWsAmKBI5%2BBKTzGrYAz9vobSwHJngrp%2F0S0%2Bh7JFjnNJqjYDfhidpRAFgoPFjc8JGG2AAhBNttGoD6BfVZBEYOk7dvUzEoK8501Ub3YCid5Le9l13iw1rgwNJDPjypODExXb9%2FV%2F4DQbEhaHMrd5hotLlpgZ9NdN3za%2Bufw239wvwM0I0O2u2VR97tODC0ref6yD8oS8TFdLejtR4fQS8XvESN60MCfODKX7VnrD4It9%2BL3bAsZD1ejoTPKu%2F29BvtcqbjCyEyJIwhwOwmltOa4QnMeJPl%2F9uMuIWlDFVi48JariQWlw3whW8FgDkyNuFPFRJTwVdTwDCg39u%2BBjqkAZW6eWfkaOd5Z1GyZhdbaY8%2FD2NM6WWSGa5jrE4BJysoo1aMuHiFluuSRXEMZWqJcR2Nc%2FHmptfJg4Y308enCdvUE9gA%2FwXjtxvk0dKEmgWm%2BpbNEvfNRi7As1Xt0JJ%2FSfsog6Hj%2FYtoK3CQQ0fMJJTuV1iaC4ols60CEdoJmy8FMMVU6aR7%2B60t3IZDY92RumwM2iTjnBkFO4q7KQT%2FxBEpHnIG&X-Amz-Signature=1a34821522e77a03d0d8d79c10a53b9ec744c02e7102c70a4d9aca67316fdda9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDCMVON%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDlKYt5AKlKOkoCvdT2K1wdKdARei0tD%2FRk0tQi%2BNcwIhAKGms7vCgj6yvOieYV9PUkgbzUH6QAJTq42xtpr%2F%2FNpVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxRgL8%2F6IXIOrRjRt4q3AM37sOyHoxvg3LRe30pdRjub%2F2Jmgx1W1%2Fu3mMVwhJAQSH57GmRf%2Fp41aNJgcMQ6vJqtLmGpZKvnvnee7BRy6Hcf3C9JpvZqOM7u%2B2YVjskcNmU6O6V%2Bc1eLhh2sc9VeWj3EAezaW14hs5kVMHqbVlhnez9V0iOAofdD3sAxGwNFHpqbgYKKA4Sb1KrtybKfD8d0dFSJ%2BJxGfNX8s%2Bal0qJxpqjNgcsJCDqfvRWlR4spPFXaKbNPGPG1rVPHPHu6LrgxBG7odH9tSd8cmugLxLesoAcFoTUbZ%2Bzz%2BIjCAem7TmRiMHWsAmKBI5%2BBKTzGrYAz9vobSwHJngrp%2F0S0%2Bh7JFjnNJqjYDfhidpRAFgoPFjc8JGG2AAhBNttGoD6BfVZBEYOk7dvUzEoK8501Ub3YCid5Le9l13iw1rgwNJDPjypODExXb9%2FV%2F4DQbEhaHMrd5hotLlpgZ9NdN3za%2Bufw239wvwM0I0O2u2VR97tODC0ref6yD8oS8TFdLejtR4fQS8XvESN60MCfODKX7VnrD4It9%2BL3bAsZD1ejoTPKu%2F29BvtcqbjCyEyJIwhwOwmltOa4QnMeJPl%2F9uMuIWlDFVi48JariQWlw3whW8FgDkyNuFPFRJTwVdTwDCg39u%2BBjqkAZW6eWfkaOd5Z1GyZhdbaY8%2FD2NM6WWSGa5jrE4BJysoo1aMuHiFluuSRXEMZWqJcR2Nc%2FHmptfJg4Y308enCdvUE9gA%2FwXjtxvk0dKEmgWm%2BpbNEvfNRi7As1Xt0JJ%2FSfsog6Hj%2FYtoK3CQQ0fMJJTuV1iaC4ols60CEdoJmy8FMMVU6aR7%2B60t3IZDY92RumwM2iTjnBkFO4q7KQT%2FxBEpHnIG&X-Amz-Signature=27a9ce3ac97f414eebdf7c068608882a47530b4c7905f06b1da8ee554b8bed38&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDCMVON%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDlKYt5AKlKOkoCvdT2K1wdKdARei0tD%2FRk0tQi%2BNcwIhAKGms7vCgj6yvOieYV9PUkgbzUH6QAJTq42xtpr%2F%2FNpVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxRgL8%2F6IXIOrRjRt4q3AM37sOyHoxvg3LRe30pdRjub%2F2Jmgx1W1%2Fu3mMVwhJAQSH57GmRf%2Fp41aNJgcMQ6vJqtLmGpZKvnvnee7BRy6Hcf3C9JpvZqOM7u%2B2YVjskcNmU6O6V%2Bc1eLhh2sc9VeWj3EAezaW14hs5kVMHqbVlhnez9V0iOAofdD3sAxGwNFHpqbgYKKA4Sb1KrtybKfD8d0dFSJ%2BJxGfNX8s%2Bal0qJxpqjNgcsJCDqfvRWlR4spPFXaKbNPGPG1rVPHPHu6LrgxBG7odH9tSd8cmugLxLesoAcFoTUbZ%2Bzz%2BIjCAem7TmRiMHWsAmKBI5%2BBKTzGrYAz9vobSwHJngrp%2F0S0%2Bh7JFjnNJqjYDfhidpRAFgoPFjc8JGG2AAhBNttGoD6BfVZBEYOk7dvUzEoK8501Ub3YCid5Le9l13iw1rgwNJDPjypODExXb9%2FV%2F4DQbEhaHMrd5hotLlpgZ9NdN3za%2Bufw239wvwM0I0O2u2VR97tODC0ref6yD8oS8TFdLejtR4fQS8XvESN60MCfODKX7VnrD4It9%2BL3bAsZD1ejoTPKu%2F29BvtcqbjCyEyJIwhwOwmltOa4QnMeJPl%2F9uMuIWlDFVi48JariQWlw3whW8FgDkyNuFPFRJTwVdTwDCg39u%2BBjqkAZW6eWfkaOd5Z1GyZhdbaY8%2FD2NM6WWSGa5jrE4BJysoo1aMuHiFluuSRXEMZWqJcR2Nc%2FHmptfJg4Y308enCdvUE9gA%2FwXjtxvk0dKEmgWm%2BpbNEvfNRi7As1Xt0JJ%2FSfsog6Hj%2FYtoK3CQQ0fMJJTuV1iaC4ols60CEdoJmy8FMMVU6aR7%2B60t3IZDY92RumwM2iTjnBkFO4q7KQT%2FxBEpHnIG&X-Amz-Signature=c38153aebdeaff2eb272b3b0bfe0d185c4a0f137ad14a4e5396f0545088e9ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDCMVON%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDlKYt5AKlKOkoCvdT2K1wdKdARei0tD%2FRk0tQi%2BNcwIhAKGms7vCgj6yvOieYV9PUkgbzUH6QAJTq42xtpr%2F%2FNpVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxRgL8%2F6IXIOrRjRt4q3AM37sOyHoxvg3LRe30pdRjub%2F2Jmgx1W1%2Fu3mMVwhJAQSH57GmRf%2Fp41aNJgcMQ6vJqtLmGpZKvnvnee7BRy6Hcf3C9JpvZqOM7u%2B2YVjskcNmU6O6V%2Bc1eLhh2sc9VeWj3EAezaW14hs5kVMHqbVlhnez9V0iOAofdD3sAxGwNFHpqbgYKKA4Sb1KrtybKfD8d0dFSJ%2BJxGfNX8s%2Bal0qJxpqjNgcsJCDqfvRWlR4spPFXaKbNPGPG1rVPHPHu6LrgxBG7odH9tSd8cmugLxLesoAcFoTUbZ%2Bzz%2BIjCAem7TmRiMHWsAmKBI5%2BBKTzGrYAz9vobSwHJngrp%2F0S0%2Bh7JFjnNJqjYDfhidpRAFgoPFjc8JGG2AAhBNttGoD6BfVZBEYOk7dvUzEoK8501Ub3YCid5Le9l13iw1rgwNJDPjypODExXb9%2FV%2F4DQbEhaHMrd5hotLlpgZ9NdN3za%2Bufw239wvwM0I0O2u2VR97tODC0ref6yD8oS8TFdLejtR4fQS8XvESN60MCfODKX7VnrD4It9%2BL3bAsZD1ejoTPKu%2F29BvtcqbjCyEyJIwhwOwmltOa4QnMeJPl%2F9uMuIWlDFVi48JariQWlw3whW8FgDkyNuFPFRJTwVdTwDCg39u%2BBjqkAZW6eWfkaOd5Z1GyZhdbaY8%2FD2NM6WWSGa5jrE4BJysoo1aMuHiFluuSRXEMZWqJcR2Nc%2FHmptfJg4Y308enCdvUE9gA%2FwXjtxvk0dKEmgWm%2BpbNEvfNRi7As1Xt0JJ%2FSfsog6Hj%2FYtoK3CQQ0fMJJTuV1iaC4ols60CEdoJmy8FMMVU6aR7%2B60t3IZDY92RumwM2iTjnBkFO4q7KQT%2FxBEpHnIG&X-Amz-Signature=1950476b84a427c7f22a84d3839c9c2056016d1ccaa5a8d9acf97faafc976287&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSDCMVON%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDlKYt5AKlKOkoCvdT2K1wdKdARei0tD%2FRk0tQi%2BNcwIhAKGms7vCgj6yvOieYV9PUkgbzUH6QAJTq42xtpr%2F%2FNpVKv8DCDEQABoMNjM3NDIzMTgzODA1IgxRgL8%2F6IXIOrRjRt4q3AM37sOyHoxvg3LRe30pdRjub%2F2Jmgx1W1%2Fu3mMVwhJAQSH57GmRf%2Fp41aNJgcMQ6vJqtLmGpZKvnvnee7BRy6Hcf3C9JpvZqOM7u%2B2YVjskcNmU6O6V%2Bc1eLhh2sc9VeWj3EAezaW14hs5kVMHqbVlhnez9V0iOAofdD3sAxGwNFHpqbgYKKA4Sb1KrtybKfD8d0dFSJ%2BJxGfNX8s%2Bal0qJxpqjNgcsJCDqfvRWlR4spPFXaKbNPGPG1rVPHPHu6LrgxBG7odH9tSd8cmugLxLesoAcFoTUbZ%2Bzz%2BIjCAem7TmRiMHWsAmKBI5%2BBKTzGrYAz9vobSwHJngrp%2F0S0%2Bh7JFjnNJqjYDfhidpRAFgoPFjc8JGG2AAhBNttGoD6BfVZBEYOk7dvUzEoK8501Ub3YCid5Le9l13iw1rgwNJDPjypODExXb9%2FV%2F4DQbEhaHMrd5hotLlpgZ9NdN3za%2Bufw239wvwM0I0O2u2VR97tODC0ref6yD8oS8TFdLejtR4fQS8XvESN60MCfODKX7VnrD4It9%2BL3bAsZD1ejoTPKu%2F29BvtcqbjCyEyJIwhwOwmltOa4QnMeJPl%2F9uMuIWlDFVi48JariQWlw3whW8FgDkyNuFPFRJTwVdTwDCg39u%2BBjqkAZW6eWfkaOd5Z1GyZhdbaY8%2FD2NM6WWSGa5jrE4BJysoo1aMuHiFluuSRXEMZWqJcR2Nc%2FHmptfJg4Y308enCdvUE9gA%2FwXjtxvk0dKEmgWm%2BpbNEvfNRi7As1Xt0JJ%2FSfsog6Hj%2FYtoK3CQQ0fMJJTuV1iaC4ols60CEdoJmy8FMMVU6aR7%2B60t3IZDY92RumwM2iTjnBkFO4q7KQT%2FxBEpHnIG&X-Amz-Signature=d6a2491a474cd2d61102ee861ec3f0abaebc1c763adf20448e4693c48619f93a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
