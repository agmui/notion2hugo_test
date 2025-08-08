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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKTEA4Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDDQzQyvdTHfYE5dusbegAWr6uZM4L%2Bl%2FpHeM1es2y7NgIhAKPiN27yMQGLMBj3nAcETtfj30mmJ5LmTyBzFSu2MQicKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMY1CxkAVzwR1niQq3APyOcGIfsQGKerpVmitwfdzn8DIUF8tx2cO%2FBjv9temdQ55mD6tZo4xstxwGhyi7x9UcS0LHlCClwXWUp00Wimr9A8FUB%2F3BXqE3XR7fDFkYJWTz570Jt8lQwACLjQhUn3zixMtLScreFf%2BFW%2FKtykIQDcevfdyCbEFKkROGMCsmBYaWo5z3v5HkQ512C5Il7cHgvELL4nhtpQFA7ToztJ62eFPuyzdt291Xy52msroivgECTLRqybPkWfXPWmXqHqxT8szR7J1DK5XeiKeWrlYDaeKr0sNvbZU24Q2UHebot%2FRoV3Mdbl%2FM8YWrqiP%2FNkbnR08CEuRaVRZhqiPfjJsHbHYncOPQIpMOUJDz0tdTUwfbBIazjH%2Bzc1q%2B48XgQj0F%2F1KV%2Bvbg9VZGSI17Qdk9a5v%2B9iyHuBGNNJaBc69YaQvoVU9Y%2BU%2BmlIh5K%2BAGe%2B%2BbTjWc4K8AM%2Bamebet5wd%2BW06FQQ6bzmGexsR2MvypgMPnAoSa%2Fe88h7dyENbTRR%2B%2Fh6KY1CQm8z7hvfafWg5d497ioGaWBcXUDmp8WgGSRhMDYASSrxD6706evP%2FycJfnB%2Fxq4QXq9Cq9jxWBAIBtRpTgitnFeQaTELbka24YBkcRBwSo8oUOKgdZTC3k9fEBjqkATfkNuKKnquARUixYKzPG3KjsVDb9hRLlJnlswp3i%2FndCKoeOPlwM%2BZpbxMyj%2B%2BNdw32Xrs3piH3ntl9jnnGmeCReyRETm9su8mLUQ3T%2FP7vHh%2F5SYjDbKGrqOy3Jt3jnZNZfW%2BOEkB9ZxgINF1Yypn05KGGJ5%2FmkMAozS0p0AX3Xo0A5l3fgpLUYuGfnmQRvnXzCKWBczlhtVdiBW5Ji7yaF2T5&X-Amz-Signature=fa109af1a662153ef45202f3d9f7922d7d73ade597d4cfaf539d76df20623c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKTEA4Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDDQzQyvdTHfYE5dusbegAWr6uZM4L%2Bl%2FpHeM1es2y7NgIhAKPiN27yMQGLMBj3nAcETtfj30mmJ5LmTyBzFSu2MQicKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMY1CxkAVzwR1niQq3APyOcGIfsQGKerpVmitwfdzn8DIUF8tx2cO%2FBjv9temdQ55mD6tZo4xstxwGhyi7x9UcS0LHlCClwXWUp00Wimr9A8FUB%2F3BXqE3XR7fDFkYJWTz570Jt8lQwACLjQhUn3zixMtLScreFf%2BFW%2FKtykIQDcevfdyCbEFKkROGMCsmBYaWo5z3v5HkQ512C5Il7cHgvELL4nhtpQFA7ToztJ62eFPuyzdt291Xy52msroivgECTLRqybPkWfXPWmXqHqxT8szR7J1DK5XeiKeWrlYDaeKr0sNvbZU24Q2UHebot%2FRoV3Mdbl%2FM8YWrqiP%2FNkbnR08CEuRaVRZhqiPfjJsHbHYncOPQIpMOUJDz0tdTUwfbBIazjH%2Bzc1q%2B48XgQj0F%2F1KV%2Bvbg9VZGSI17Qdk9a5v%2B9iyHuBGNNJaBc69YaQvoVU9Y%2BU%2BmlIh5K%2BAGe%2B%2BbTjWc4K8AM%2Bamebet5wd%2BW06FQQ6bzmGexsR2MvypgMPnAoSa%2Fe88h7dyENbTRR%2B%2Fh6KY1CQm8z7hvfafWg5d497ioGaWBcXUDmp8WgGSRhMDYASSrxD6706evP%2FycJfnB%2Fxq4QXq9Cq9jxWBAIBtRpTgitnFeQaTELbka24YBkcRBwSo8oUOKgdZTC3k9fEBjqkATfkNuKKnquARUixYKzPG3KjsVDb9hRLlJnlswp3i%2FndCKoeOPlwM%2BZpbxMyj%2B%2BNdw32Xrs3piH3ntl9jnnGmeCReyRETm9su8mLUQ3T%2FP7vHh%2F5SYjDbKGrqOy3Jt3jnZNZfW%2BOEkB9ZxgINF1Yypn05KGGJ5%2FmkMAozS0p0AX3Xo0A5l3fgpLUYuGfnmQRvnXzCKWBczlhtVdiBW5Ji7yaF2T5&X-Amz-Signature=3ab3b5fed85366f20e1e809906b190beeeab3ebfcc2a90f7eaa77fad2743a780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKTEA4Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDDQzQyvdTHfYE5dusbegAWr6uZM4L%2Bl%2FpHeM1es2y7NgIhAKPiN27yMQGLMBj3nAcETtfj30mmJ5LmTyBzFSu2MQicKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMY1CxkAVzwR1niQq3APyOcGIfsQGKerpVmitwfdzn8DIUF8tx2cO%2FBjv9temdQ55mD6tZo4xstxwGhyi7x9UcS0LHlCClwXWUp00Wimr9A8FUB%2F3BXqE3XR7fDFkYJWTz570Jt8lQwACLjQhUn3zixMtLScreFf%2BFW%2FKtykIQDcevfdyCbEFKkROGMCsmBYaWo5z3v5HkQ512C5Il7cHgvELL4nhtpQFA7ToztJ62eFPuyzdt291Xy52msroivgECTLRqybPkWfXPWmXqHqxT8szR7J1DK5XeiKeWrlYDaeKr0sNvbZU24Q2UHebot%2FRoV3Mdbl%2FM8YWrqiP%2FNkbnR08CEuRaVRZhqiPfjJsHbHYncOPQIpMOUJDz0tdTUwfbBIazjH%2Bzc1q%2B48XgQj0F%2F1KV%2Bvbg9VZGSI17Qdk9a5v%2B9iyHuBGNNJaBc69YaQvoVU9Y%2BU%2BmlIh5K%2BAGe%2B%2BbTjWc4K8AM%2Bamebet5wd%2BW06FQQ6bzmGexsR2MvypgMPnAoSa%2Fe88h7dyENbTRR%2B%2Fh6KY1CQm8z7hvfafWg5d497ioGaWBcXUDmp8WgGSRhMDYASSrxD6706evP%2FycJfnB%2Fxq4QXq9Cq9jxWBAIBtRpTgitnFeQaTELbka24YBkcRBwSo8oUOKgdZTC3k9fEBjqkATfkNuKKnquARUixYKzPG3KjsVDb9hRLlJnlswp3i%2FndCKoeOPlwM%2BZpbxMyj%2B%2BNdw32Xrs3piH3ntl9jnnGmeCReyRETm9su8mLUQ3T%2FP7vHh%2F5SYjDbKGrqOy3Jt3jnZNZfW%2BOEkB9ZxgINF1Yypn05KGGJ5%2FmkMAozS0p0AX3Xo0A5l3fgpLUYuGfnmQRvnXzCKWBczlhtVdiBW5Ji7yaF2T5&X-Amz-Signature=e75994c50b8b74c83e22d14a643a414009710172c543252599c7ee35902b2db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKTEA4Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDDQzQyvdTHfYE5dusbegAWr6uZM4L%2Bl%2FpHeM1es2y7NgIhAKPiN27yMQGLMBj3nAcETtfj30mmJ5LmTyBzFSu2MQicKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMY1CxkAVzwR1niQq3APyOcGIfsQGKerpVmitwfdzn8DIUF8tx2cO%2FBjv9temdQ55mD6tZo4xstxwGhyi7x9UcS0LHlCClwXWUp00Wimr9A8FUB%2F3BXqE3XR7fDFkYJWTz570Jt8lQwACLjQhUn3zixMtLScreFf%2BFW%2FKtykIQDcevfdyCbEFKkROGMCsmBYaWo5z3v5HkQ512C5Il7cHgvELL4nhtpQFA7ToztJ62eFPuyzdt291Xy52msroivgECTLRqybPkWfXPWmXqHqxT8szR7J1DK5XeiKeWrlYDaeKr0sNvbZU24Q2UHebot%2FRoV3Mdbl%2FM8YWrqiP%2FNkbnR08CEuRaVRZhqiPfjJsHbHYncOPQIpMOUJDz0tdTUwfbBIazjH%2Bzc1q%2B48XgQj0F%2F1KV%2Bvbg9VZGSI17Qdk9a5v%2B9iyHuBGNNJaBc69YaQvoVU9Y%2BU%2BmlIh5K%2BAGe%2B%2BbTjWc4K8AM%2Bamebet5wd%2BW06FQQ6bzmGexsR2MvypgMPnAoSa%2Fe88h7dyENbTRR%2B%2Fh6KY1CQm8z7hvfafWg5d497ioGaWBcXUDmp8WgGSRhMDYASSrxD6706evP%2FycJfnB%2Fxq4QXq9Cq9jxWBAIBtRpTgitnFeQaTELbka24YBkcRBwSo8oUOKgdZTC3k9fEBjqkATfkNuKKnquARUixYKzPG3KjsVDb9hRLlJnlswp3i%2FndCKoeOPlwM%2BZpbxMyj%2B%2BNdw32Xrs3piH3ntl9jnnGmeCReyRETm9su8mLUQ3T%2FP7vHh%2F5SYjDbKGrqOy3Jt3jnZNZfW%2BOEkB9ZxgINF1Yypn05KGGJ5%2FmkMAozS0p0AX3Xo0A5l3fgpLUYuGfnmQRvnXzCKWBczlhtVdiBW5Ji7yaF2T5&X-Amz-Signature=1795528598bfade73accb5d1e6067e6b131992d2e1d15ea93f8c7b94496ac363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKTEA4Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDDQzQyvdTHfYE5dusbegAWr6uZM4L%2Bl%2FpHeM1es2y7NgIhAKPiN27yMQGLMBj3nAcETtfj30mmJ5LmTyBzFSu2MQicKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMY1CxkAVzwR1niQq3APyOcGIfsQGKerpVmitwfdzn8DIUF8tx2cO%2FBjv9temdQ55mD6tZo4xstxwGhyi7x9UcS0LHlCClwXWUp00Wimr9A8FUB%2F3BXqE3XR7fDFkYJWTz570Jt8lQwACLjQhUn3zixMtLScreFf%2BFW%2FKtykIQDcevfdyCbEFKkROGMCsmBYaWo5z3v5HkQ512C5Il7cHgvELL4nhtpQFA7ToztJ62eFPuyzdt291Xy52msroivgECTLRqybPkWfXPWmXqHqxT8szR7J1DK5XeiKeWrlYDaeKr0sNvbZU24Q2UHebot%2FRoV3Mdbl%2FM8YWrqiP%2FNkbnR08CEuRaVRZhqiPfjJsHbHYncOPQIpMOUJDz0tdTUwfbBIazjH%2Bzc1q%2B48XgQj0F%2F1KV%2Bvbg9VZGSI17Qdk9a5v%2B9iyHuBGNNJaBc69YaQvoVU9Y%2BU%2BmlIh5K%2BAGe%2B%2BbTjWc4K8AM%2Bamebet5wd%2BW06FQQ6bzmGexsR2MvypgMPnAoSa%2Fe88h7dyENbTRR%2B%2Fh6KY1CQm8z7hvfafWg5d497ioGaWBcXUDmp8WgGSRhMDYASSrxD6706evP%2FycJfnB%2Fxq4QXq9Cq9jxWBAIBtRpTgitnFeQaTELbka24YBkcRBwSo8oUOKgdZTC3k9fEBjqkATfkNuKKnquARUixYKzPG3KjsVDb9hRLlJnlswp3i%2FndCKoeOPlwM%2BZpbxMyj%2B%2BNdw32Xrs3piH3ntl9jnnGmeCReyRETm9su8mLUQ3T%2FP7vHh%2F5SYjDbKGrqOy3Jt3jnZNZfW%2BOEkB9ZxgINF1Yypn05KGGJ5%2FmkMAozS0p0AX3Xo0A5l3fgpLUYuGfnmQRvnXzCKWBczlhtVdiBW5Ji7yaF2T5&X-Amz-Signature=2575d795388f4dd7c4439c1fe7d92a8a83ae2aed5484102b230d614c4b102e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKTEA4Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDDQzQyvdTHfYE5dusbegAWr6uZM4L%2Bl%2FpHeM1es2y7NgIhAKPiN27yMQGLMBj3nAcETtfj30mmJ5LmTyBzFSu2MQicKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMY1CxkAVzwR1niQq3APyOcGIfsQGKerpVmitwfdzn8DIUF8tx2cO%2FBjv9temdQ55mD6tZo4xstxwGhyi7x9UcS0LHlCClwXWUp00Wimr9A8FUB%2F3BXqE3XR7fDFkYJWTz570Jt8lQwACLjQhUn3zixMtLScreFf%2BFW%2FKtykIQDcevfdyCbEFKkROGMCsmBYaWo5z3v5HkQ512C5Il7cHgvELL4nhtpQFA7ToztJ62eFPuyzdt291Xy52msroivgECTLRqybPkWfXPWmXqHqxT8szR7J1DK5XeiKeWrlYDaeKr0sNvbZU24Q2UHebot%2FRoV3Mdbl%2FM8YWrqiP%2FNkbnR08CEuRaVRZhqiPfjJsHbHYncOPQIpMOUJDz0tdTUwfbBIazjH%2Bzc1q%2B48XgQj0F%2F1KV%2Bvbg9VZGSI17Qdk9a5v%2B9iyHuBGNNJaBc69YaQvoVU9Y%2BU%2BmlIh5K%2BAGe%2B%2BbTjWc4K8AM%2Bamebet5wd%2BW06FQQ6bzmGexsR2MvypgMPnAoSa%2Fe88h7dyENbTRR%2B%2Fh6KY1CQm8z7hvfafWg5d497ioGaWBcXUDmp8WgGSRhMDYASSrxD6706evP%2FycJfnB%2Fxq4QXq9Cq9jxWBAIBtRpTgitnFeQaTELbka24YBkcRBwSo8oUOKgdZTC3k9fEBjqkATfkNuKKnquARUixYKzPG3KjsVDb9hRLlJnlswp3i%2FndCKoeOPlwM%2BZpbxMyj%2B%2BNdw32Xrs3piH3ntl9jnnGmeCReyRETm9su8mLUQ3T%2FP7vHh%2F5SYjDbKGrqOy3Jt3jnZNZfW%2BOEkB9ZxgINF1Yypn05KGGJ5%2FmkMAozS0p0AX3Xo0A5l3fgpLUYuGfnmQRvnXzCKWBczlhtVdiBW5Ji7yaF2T5&X-Amz-Signature=470c1855af256d67f513ba4f57a1697b382e34609c84b488c8a53fa2dc07ad0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RKTEA4Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDDQzQyvdTHfYE5dusbegAWr6uZM4L%2Bl%2FpHeM1es2y7NgIhAKPiN27yMQGLMBj3nAcETtfj30mmJ5LmTyBzFSu2MQicKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMY1CxkAVzwR1niQq3APyOcGIfsQGKerpVmitwfdzn8DIUF8tx2cO%2FBjv9temdQ55mD6tZo4xstxwGhyi7x9UcS0LHlCClwXWUp00Wimr9A8FUB%2F3BXqE3XR7fDFkYJWTz570Jt8lQwACLjQhUn3zixMtLScreFf%2BFW%2FKtykIQDcevfdyCbEFKkROGMCsmBYaWo5z3v5HkQ512C5Il7cHgvELL4nhtpQFA7ToztJ62eFPuyzdt291Xy52msroivgECTLRqybPkWfXPWmXqHqxT8szR7J1DK5XeiKeWrlYDaeKr0sNvbZU24Q2UHebot%2FRoV3Mdbl%2FM8YWrqiP%2FNkbnR08CEuRaVRZhqiPfjJsHbHYncOPQIpMOUJDz0tdTUwfbBIazjH%2Bzc1q%2B48XgQj0F%2F1KV%2Bvbg9VZGSI17Qdk9a5v%2B9iyHuBGNNJaBc69YaQvoVU9Y%2BU%2BmlIh5K%2BAGe%2B%2BbTjWc4K8AM%2Bamebet5wd%2BW06FQQ6bzmGexsR2MvypgMPnAoSa%2Fe88h7dyENbTRR%2B%2Fh6KY1CQm8z7hvfafWg5d497ioGaWBcXUDmp8WgGSRhMDYASSrxD6706evP%2FycJfnB%2Fxq4QXq9Cq9jxWBAIBtRpTgitnFeQaTELbka24YBkcRBwSo8oUOKgdZTC3k9fEBjqkATfkNuKKnquARUixYKzPG3KjsVDb9hRLlJnlswp3i%2FndCKoeOPlwM%2BZpbxMyj%2B%2BNdw32Xrs3piH3ntl9jnnGmeCReyRETm9su8mLUQ3T%2FP7vHh%2F5SYjDbKGrqOy3Jt3jnZNZfW%2BOEkB9ZxgINF1Yypn05KGGJ5%2FmkMAozS0p0AX3Xo0A5l3fgpLUYuGfnmQRvnXzCKWBczlhtVdiBW5Ji7yaF2T5&X-Amz-Signature=533feb5ccc4a0ea5e16faa26d4f7518fdc2b4b43c65672de683da07ae8548b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
