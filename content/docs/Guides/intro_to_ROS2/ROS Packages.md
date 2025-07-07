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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGOHQ2D%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIC6R28oSgILUGw18wAVZ2UJ%2B4DKRUzt%2BVXFSNfEwSQBCAiEAjkHIMQifXZvyQlw0SaNG6k2c%2F4PNNLYq%2FSLM4rMI0Kkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOySqhRevFkFcHzbiircA6aYZh58BccL1FEbz2H%2BuvrH3vHMx%2FcLh%2FbHGCJ%2Fj1XsnWWZtR6NTSDSDD6pqXpOIKUZhPJ3NYiqcJb7xBcbBJQ9bxhVpGjeqfXqEFRgaYAcXjeocr7YL2dVuAbFkWWJ9dxvXtVwJaJkHeqCO1F%2Bl7n4WQKdz8CZUKYQ8%2B0WLKPpk%2B3TgWv3V88ydtAoldBYHG2gHSy3%2FwDYLkGA%2BZ8aSJyR57hKGzLEs1yKdUg5tavGgqdEdCZRtx2uBFly%2FKRLTpOY4Ufbl2GSltBellPYKNQZ8YM1mybxxiZQY%2FyB2nvcunMc93pQH56YcAMnueHFzvoUZ2kURAa6bVwl9%2FMI8e5WPos0saGF6breiGKSLsamePrF5Uan96AE%2BHRv9xLtqitnsM9PNemCIqJMTRd5BksinnUV84%2BvuuCJSFcZp6t8CeuQdOtd5tnt5WZJWdHFP%2BUaELgNSxi%2F2MTGufkoZfIB7v86pqbUgls1Jn5cr45ro4iX9ga6MrJETy%2BdDbbsNmQoSc4S2fneCuRPKkbX3CMOUFns5RTJAoX1Q1pSfoCrcDKS%2BJMyDysg9M%2FTWU8o%2Fj26wMoN%2FClcDQ2s5FLDkCGr4V31KtQfnHfzNMfl6y0vkBm0RvO5gavTs0I9MNLirsMGOqUB5DHGLiZYtzX3b3cEfUVNMPmyeNXv2P4HhpHLCYhBMHy%2B8FlWCFujtY8TMTFKIUGxQpoZV9jnmbRLNvjOIoxEaZqBsLr19omMJ4Nf8TZrW6pnxkjAyfeqnzpfTLva8Qzz7mx1QHf79zymr4ARlevzc4h%2FBh%2BRB%2F9QIB2z1ovNm4%2FvoSp3WPDU4Xlww1FreYAkLYY0qUPKiKP7coGq4VFfuTinyC6p&X-Amz-Signature=106902f02edd5a065faf999bb91588f19b8481012d84f3fa0f6953d62e4c8705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGOHQ2D%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIC6R28oSgILUGw18wAVZ2UJ%2B4DKRUzt%2BVXFSNfEwSQBCAiEAjkHIMQifXZvyQlw0SaNG6k2c%2F4PNNLYq%2FSLM4rMI0Kkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOySqhRevFkFcHzbiircA6aYZh58BccL1FEbz2H%2BuvrH3vHMx%2FcLh%2FbHGCJ%2Fj1XsnWWZtR6NTSDSDD6pqXpOIKUZhPJ3NYiqcJb7xBcbBJQ9bxhVpGjeqfXqEFRgaYAcXjeocr7YL2dVuAbFkWWJ9dxvXtVwJaJkHeqCO1F%2Bl7n4WQKdz8CZUKYQ8%2B0WLKPpk%2B3TgWv3V88ydtAoldBYHG2gHSy3%2FwDYLkGA%2BZ8aSJyR57hKGzLEs1yKdUg5tavGgqdEdCZRtx2uBFly%2FKRLTpOY4Ufbl2GSltBellPYKNQZ8YM1mybxxiZQY%2FyB2nvcunMc93pQH56YcAMnueHFzvoUZ2kURAa6bVwl9%2FMI8e5WPos0saGF6breiGKSLsamePrF5Uan96AE%2BHRv9xLtqitnsM9PNemCIqJMTRd5BksinnUV84%2BvuuCJSFcZp6t8CeuQdOtd5tnt5WZJWdHFP%2BUaELgNSxi%2F2MTGufkoZfIB7v86pqbUgls1Jn5cr45ro4iX9ga6MrJETy%2BdDbbsNmQoSc4S2fneCuRPKkbX3CMOUFns5RTJAoX1Q1pSfoCrcDKS%2BJMyDysg9M%2FTWU8o%2Fj26wMoN%2FClcDQ2s5FLDkCGr4V31KtQfnHfzNMfl6y0vkBm0RvO5gavTs0I9MNLirsMGOqUB5DHGLiZYtzX3b3cEfUVNMPmyeNXv2P4HhpHLCYhBMHy%2B8FlWCFujtY8TMTFKIUGxQpoZV9jnmbRLNvjOIoxEaZqBsLr19omMJ4Nf8TZrW6pnxkjAyfeqnzpfTLva8Qzz7mx1QHf79zymr4ARlevzc4h%2FBh%2BRB%2F9QIB2z1ovNm4%2FvoSp3WPDU4Xlww1FreYAkLYY0qUPKiKP7coGq4VFfuTinyC6p&X-Amz-Signature=3a7503134456bb0180a1080ec6f86cfb01a258351a64d015eabab57e528894b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGOHQ2D%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIC6R28oSgILUGw18wAVZ2UJ%2B4DKRUzt%2BVXFSNfEwSQBCAiEAjkHIMQifXZvyQlw0SaNG6k2c%2F4PNNLYq%2FSLM4rMI0Kkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOySqhRevFkFcHzbiircA6aYZh58BccL1FEbz2H%2BuvrH3vHMx%2FcLh%2FbHGCJ%2Fj1XsnWWZtR6NTSDSDD6pqXpOIKUZhPJ3NYiqcJb7xBcbBJQ9bxhVpGjeqfXqEFRgaYAcXjeocr7YL2dVuAbFkWWJ9dxvXtVwJaJkHeqCO1F%2Bl7n4WQKdz8CZUKYQ8%2B0WLKPpk%2B3TgWv3V88ydtAoldBYHG2gHSy3%2FwDYLkGA%2BZ8aSJyR57hKGzLEs1yKdUg5tavGgqdEdCZRtx2uBFly%2FKRLTpOY4Ufbl2GSltBellPYKNQZ8YM1mybxxiZQY%2FyB2nvcunMc93pQH56YcAMnueHFzvoUZ2kURAa6bVwl9%2FMI8e5WPos0saGF6breiGKSLsamePrF5Uan96AE%2BHRv9xLtqitnsM9PNemCIqJMTRd5BksinnUV84%2BvuuCJSFcZp6t8CeuQdOtd5tnt5WZJWdHFP%2BUaELgNSxi%2F2MTGufkoZfIB7v86pqbUgls1Jn5cr45ro4iX9ga6MrJETy%2BdDbbsNmQoSc4S2fneCuRPKkbX3CMOUFns5RTJAoX1Q1pSfoCrcDKS%2BJMyDysg9M%2FTWU8o%2Fj26wMoN%2FClcDQ2s5FLDkCGr4V31KtQfnHfzNMfl6y0vkBm0RvO5gavTs0I9MNLirsMGOqUB5DHGLiZYtzX3b3cEfUVNMPmyeNXv2P4HhpHLCYhBMHy%2B8FlWCFujtY8TMTFKIUGxQpoZV9jnmbRLNvjOIoxEaZqBsLr19omMJ4Nf8TZrW6pnxkjAyfeqnzpfTLva8Qzz7mx1QHf79zymr4ARlevzc4h%2FBh%2BRB%2F9QIB2z1ovNm4%2FvoSp3WPDU4Xlww1FreYAkLYY0qUPKiKP7coGq4VFfuTinyC6p&X-Amz-Signature=90b23edf3083a846bb5cdce87cc25b39017fed7c817202dc77ccd10db2715452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGOHQ2D%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIC6R28oSgILUGw18wAVZ2UJ%2B4DKRUzt%2BVXFSNfEwSQBCAiEAjkHIMQifXZvyQlw0SaNG6k2c%2F4PNNLYq%2FSLM4rMI0Kkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOySqhRevFkFcHzbiircA6aYZh58BccL1FEbz2H%2BuvrH3vHMx%2FcLh%2FbHGCJ%2Fj1XsnWWZtR6NTSDSDD6pqXpOIKUZhPJ3NYiqcJb7xBcbBJQ9bxhVpGjeqfXqEFRgaYAcXjeocr7YL2dVuAbFkWWJ9dxvXtVwJaJkHeqCO1F%2Bl7n4WQKdz8CZUKYQ8%2B0WLKPpk%2B3TgWv3V88ydtAoldBYHG2gHSy3%2FwDYLkGA%2BZ8aSJyR57hKGzLEs1yKdUg5tavGgqdEdCZRtx2uBFly%2FKRLTpOY4Ufbl2GSltBellPYKNQZ8YM1mybxxiZQY%2FyB2nvcunMc93pQH56YcAMnueHFzvoUZ2kURAa6bVwl9%2FMI8e5WPos0saGF6breiGKSLsamePrF5Uan96AE%2BHRv9xLtqitnsM9PNemCIqJMTRd5BksinnUV84%2BvuuCJSFcZp6t8CeuQdOtd5tnt5WZJWdHFP%2BUaELgNSxi%2F2MTGufkoZfIB7v86pqbUgls1Jn5cr45ro4iX9ga6MrJETy%2BdDbbsNmQoSc4S2fneCuRPKkbX3CMOUFns5RTJAoX1Q1pSfoCrcDKS%2BJMyDysg9M%2FTWU8o%2Fj26wMoN%2FClcDQ2s5FLDkCGr4V31KtQfnHfzNMfl6y0vkBm0RvO5gavTs0I9MNLirsMGOqUB5DHGLiZYtzX3b3cEfUVNMPmyeNXv2P4HhpHLCYhBMHy%2B8FlWCFujtY8TMTFKIUGxQpoZV9jnmbRLNvjOIoxEaZqBsLr19omMJ4Nf8TZrW6pnxkjAyfeqnzpfTLva8Qzz7mx1QHf79zymr4ARlevzc4h%2FBh%2BRB%2F9QIB2z1ovNm4%2FvoSp3WPDU4Xlww1FreYAkLYY0qUPKiKP7coGq4VFfuTinyC6p&X-Amz-Signature=47afe95184e23e15b5586fd4d2ecd376e1609685334401b56e63650d25ef5e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGOHQ2D%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIC6R28oSgILUGw18wAVZ2UJ%2B4DKRUzt%2BVXFSNfEwSQBCAiEAjkHIMQifXZvyQlw0SaNG6k2c%2F4PNNLYq%2FSLM4rMI0Kkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOySqhRevFkFcHzbiircA6aYZh58BccL1FEbz2H%2BuvrH3vHMx%2FcLh%2FbHGCJ%2Fj1XsnWWZtR6NTSDSDD6pqXpOIKUZhPJ3NYiqcJb7xBcbBJQ9bxhVpGjeqfXqEFRgaYAcXjeocr7YL2dVuAbFkWWJ9dxvXtVwJaJkHeqCO1F%2Bl7n4WQKdz8CZUKYQ8%2B0WLKPpk%2B3TgWv3V88ydtAoldBYHG2gHSy3%2FwDYLkGA%2BZ8aSJyR57hKGzLEs1yKdUg5tavGgqdEdCZRtx2uBFly%2FKRLTpOY4Ufbl2GSltBellPYKNQZ8YM1mybxxiZQY%2FyB2nvcunMc93pQH56YcAMnueHFzvoUZ2kURAa6bVwl9%2FMI8e5WPos0saGF6breiGKSLsamePrF5Uan96AE%2BHRv9xLtqitnsM9PNemCIqJMTRd5BksinnUV84%2BvuuCJSFcZp6t8CeuQdOtd5tnt5WZJWdHFP%2BUaELgNSxi%2F2MTGufkoZfIB7v86pqbUgls1Jn5cr45ro4iX9ga6MrJETy%2BdDbbsNmQoSc4S2fneCuRPKkbX3CMOUFns5RTJAoX1Q1pSfoCrcDKS%2BJMyDysg9M%2FTWU8o%2Fj26wMoN%2FClcDQ2s5FLDkCGr4V31KtQfnHfzNMfl6y0vkBm0RvO5gavTs0I9MNLirsMGOqUB5DHGLiZYtzX3b3cEfUVNMPmyeNXv2P4HhpHLCYhBMHy%2B8FlWCFujtY8TMTFKIUGxQpoZV9jnmbRLNvjOIoxEaZqBsLr19omMJ4Nf8TZrW6pnxkjAyfeqnzpfTLva8Qzz7mx1QHf79zymr4ARlevzc4h%2FBh%2BRB%2F9QIB2z1ovNm4%2FvoSp3WPDU4Xlww1FreYAkLYY0qUPKiKP7coGq4VFfuTinyC6p&X-Amz-Signature=14ff8c943dcfea29431876da1a7d64951a89073cc5a78e59be66d431bbf52fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGOHQ2D%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIC6R28oSgILUGw18wAVZ2UJ%2B4DKRUzt%2BVXFSNfEwSQBCAiEAjkHIMQifXZvyQlw0SaNG6k2c%2F4PNNLYq%2FSLM4rMI0Kkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOySqhRevFkFcHzbiircA6aYZh58BccL1FEbz2H%2BuvrH3vHMx%2FcLh%2FbHGCJ%2Fj1XsnWWZtR6NTSDSDD6pqXpOIKUZhPJ3NYiqcJb7xBcbBJQ9bxhVpGjeqfXqEFRgaYAcXjeocr7YL2dVuAbFkWWJ9dxvXtVwJaJkHeqCO1F%2Bl7n4WQKdz8CZUKYQ8%2B0WLKPpk%2B3TgWv3V88ydtAoldBYHG2gHSy3%2FwDYLkGA%2BZ8aSJyR57hKGzLEs1yKdUg5tavGgqdEdCZRtx2uBFly%2FKRLTpOY4Ufbl2GSltBellPYKNQZ8YM1mybxxiZQY%2FyB2nvcunMc93pQH56YcAMnueHFzvoUZ2kURAa6bVwl9%2FMI8e5WPos0saGF6breiGKSLsamePrF5Uan96AE%2BHRv9xLtqitnsM9PNemCIqJMTRd5BksinnUV84%2BvuuCJSFcZp6t8CeuQdOtd5tnt5WZJWdHFP%2BUaELgNSxi%2F2MTGufkoZfIB7v86pqbUgls1Jn5cr45ro4iX9ga6MrJETy%2BdDbbsNmQoSc4S2fneCuRPKkbX3CMOUFns5RTJAoX1Q1pSfoCrcDKS%2BJMyDysg9M%2FTWU8o%2Fj26wMoN%2FClcDQ2s5FLDkCGr4V31KtQfnHfzNMfl6y0vkBm0RvO5gavTs0I9MNLirsMGOqUB5DHGLiZYtzX3b3cEfUVNMPmyeNXv2P4HhpHLCYhBMHy%2B8FlWCFujtY8TMTFKIUGxQpoZV9jnmbRLNvjOIoxEaZqBsLr19omMJ4Nf8TZrW6pnxkjAyfeqnzpfTLva8Qzz7mx1QHf79zymr4ARlevzc4h%2FBh%2BRB%2F9QIB2z1ovNm4%2FvoSp3WPDU4Xlww1FreYAkLYY0qUPKiKP7coGq4VFfuTinyC6p&X-Amz-Signature=4a4ef26ec04a947714a80962e115922baad97b1a5ff226928141352ff62e3840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGOHQ2D%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIC6R28oSgILUGw18wAVZ2UJ%2B4DKRUzt%2BVXFSNfEwSQBCAiEAjkHIMQifXZvyQlw0SaNG6k2c%2F4PNNLYq%2FSLM4rMI0Kkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOySqhRevFkFcHzbiircA6aYZh58BccL1FEbz2H%2BuvrH3vHMx%2FcLh%2FbHGCJ%2Fj1XsnWWZtR6NTSDSDD6pqXpOIKUZhPJ3NYiqcJb7xBcbBJQ9bxhVpGjeqfXqEFRgaYAcXjeocr7YL2dVuAbFkWWJ9dxvXtVwJaJkHeqCO1F%2Bl7n4WQKdz8CZUKYQ8%2B0WLKPpk%2B3TgWv3V88ydtAoldBYHG2gHSy3%2FwDYLkGA%2BZ8aSJyR57hKGzLEs1yKdUg5tavGgqdEdCZRtx2uBFly%2FKRLTpOY4Ufbl2GSltBellPYKNQZ8YM1mybxxiZQY%2FyB2nvcunMc93pQH56YcAMnueHFzvoUZ2kURAa6bVwl9%2FMI8e5WPos0saGF6breiGKSLsamePrF5Uan96AE%2BHRv9xLtqitnsM9PNemCIqJMTRd5BksinnUV84%2BvuuCJSFcZp6t8CeuQdOtd5tnt5WZJWdHFP%2BUaELgNSxi%2F2MTGufkoZfIB7v86pqbUgls1Jn5cr45ro4iX9ga6MrJETy%2BdDbbsNmQoSc4S2fneCuRPKkbX3CMOUFns5RTJAoX1Q1pSfoCrcDKS%2BJMyDysg9M%2FTWU8o%2Fj26wMoN%2FClcDQ2s5FLDkCGr4V31KtQfnHfzNMfl6y0vkBm0RvO5gavTs0I9MNLirsMGOqUB5DHGLiZYtzX3b3cEfUVNMPmyeNXv2P4HhpHLCYhBMHy%2B8FlWCFujtY8TMTFKIUGxQpoZV9jnmbRLNvjOIoxEaZqBsLr19omMJ4Nf8TZrW6pnxkjAyfeqnzpfTLva8Qzz7mx1QHf79zymr4ARlevzc4h%2FBh%2BRB%2F9QIB2z1ovNm4%2FvoSp3WPDU4Xlww1FreYAkLYY0qUPKiKP7coGq4VFfuTinyC6p&X-Amz-Signature=1e5e30473e8d82a4f02a95c4cb308762d4f41dc0a24198d170cff644dcb9325d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
