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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I45SIAW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZWsELUWDkypIPuLHmH9L0Y4j1e%2FSo0DEckQvwPNgkLAiEAyiO1zKIHM%2Bc4FSBo5NfpyCc0IZE443UenPAgnecFcbYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLvW75wn5TTgUZOyrcA9bgcY8fOtGwNfUar9ZcbGXRhGUpuOtmv3caDvTFyCJtZWExkiimv79rTOAWrlU1SvsQ3%2BcBXR0ASkNhVa5Oa5q7NFnfr8eywhLDMJw38FD%2Fqa0JjZb%2F1470BeE35NFI66DiaDli4dGMtZy84cbNPMwwnL2zQhCyu4iVEauNxXVWVXIYwjjAwdFLZ7pfZ2CK1GokCY3C82Vq5oaWemz4TbxiZ4kf0cMoFGnZWfIa7NtJ5nlliHN0i5ode49aatF89Ou%2FbD9UPhCjOq5UUcCVKbFA2pOPdk%2BZ3JNBpqujN4wByIi88z8vku%2FCYUi9jcvMlhig03NelHeC62dCJGPS1XKY2C%2B7yWrVOheXZXzqyZYJL2N4CvgR4JPfkWlvg8TRwnKlsP78IpVZJPUXRH%2B2S2DNBJ3EkuciutMD%2BJFvW5ZxK5%2FNpGSGphx386bepgQauGuQakMqKROSerK5JRiZd%2BbRzoZbQ3WTG53zxr5943PmCFtA1RhQj2bB2IesF9EN7BqABjzJ1b1j2DwTT%2FyR3nh%2BOZ%2FUvKVARbMEd8vwsHhZhnSmM3rgvimTv21HgpFA0afAc3w%2FVoSE%2B9t6pqVJeGsgupPvJ8EMWJHPA%2BYHPMwoNO1Pxj%2FYFOPJ9%2FMBML3R6b0GOqUB27exw02X6G%2FE3h1noBxTV%2FXd7lhwqFNmNUmGbW95efu2f%2B3hSxp4ELDm%2FI3LfTFnq%2BO%2Bjh8nQWCdziPVmJK3ujsv8oQpy7bWYlVKOYCzhPuU9%2BSTqhS0sNX2%2BNqbZVMAZPq4z6xu%2BADwxQbRCxgaxq4vP7U%2BQtRBxszT6YOerICv6R%2BKHkDUmNCAxgxkIGPEv%2BRpVVZ%2Bryrk%2FOPS9myEMu5Jc0%2Fl&X-Amz-Signature=cad56f9c65ec81fa169b7450bbb17ae4a90378bbf4a76b32eddc4d00d2aaf5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I45SIAW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZWsELUWDkypIPuLHmH9L0Y4j1e%2FSo0DEckQvwPNgkLAiEAyiO1zKIHM%2Bc4FSBo5NfpyCc0IZE443UenPAgnecFcbYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLvW75wn5TTgUZOyrcA9bgcY8fOtGwNfUar9ZcbGXRhGUpuOtmv3caDvTFyCJtZWExkiimv79rTOAWrlU1SvsQ3%2BcBXR0ASkNhVa5Oa5q7NFnfr8eywhLDMJw38FD%2Fqa0JjZb%2F1470BeE35NFI66DiaDli4dGMtZy84cbNPMwwnL2zQhCyu4iVEauNxXVWVXIYwjjAwdFLZ7pfZ2CK1GokCY3C82Vq5oaWemz4TbxiZ4kf0cMoFGnZWfIa7NtJ5nlliHN0i5ode49aatF89Ou%2FbD9UPhCjOq5UUcCVKbFA2pOPdk%2BZ3JNBpqujN4wByIi88z8vku%2FCYUi9jcvMlhig03NelHeC62dCJGPS1XKY2C%2B7yWrVOheXZXzqyZYJL2N4CvgR4JPfkWlvg8TRwnKlsP78IpVZJPUXRH%2B2S2DNBJ3EkuciutMD%2BJFvW5ZxK5%2FNpGSGphx386bepgQauGuQakMqKROSerK5JRiZd%2BbRzoZbQ3WTG53zxr5943PmCFtA1RhQj2bB2IesF9EN7BqABjzJ1b1j2DwTT%2FyR3nh%2BOZ%2FUvKVARbMEd8vwsHhZhnSmM3rgvimTv21HgpFA0afAc3w%2FVoSE%2B9t6pqVJeGsgupPvJ8EMWJHPA%2BYHPMwoNO1Pxj%2FYFOPJ9%2FMBML3R6b0GOqUB27exw02X6G%2FE3h1noBxTV%2FXd7lhwqFNmNUmGbW95efu2f%2B3hSxp4ELDm%2FI3LfTFnq%2BO%2Bjh8nQWCdziPVmJK3ujsv8oQpy7bWYlVKOYCzhPuU9%2BSTqhS0sNX2%2BNqbZVMAZPq4z6xu%2BADwxQbRCxgaxq4vP7U%2BQtRBxszT6YOerICv6R%2BKHkDUmNCAxgxkIGPEv%2BRpVVZ%2Bryrk%2FOPS9myEMu5Jc0%2Fl&X-Amz-Signature=54359f2d70fb5b0ed58799b65c9173e5fee2e6f5608d71661d656fb5fc2e0c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I45SIAW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZWsELUWDkypIPuLHmH9L0Y4j1e%2FSo0DEckQvwPNgkLAiEAyiO1zKIHM%2Bc4FSBo5NfpyCc0IZE443UenPAgnecFcbYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLvW75wn5TTgUZOyrcA9bgcY8fOtGwNfUar9ZcbGXRhGUpuOtmv3caDvTFyCJtZWExkiimv79rTOAWrlU1SvsQ3%2BcBXR0ASkNhVa5Oa5q7NFnfr8eywhLDMJw38FD%2Fqa0JjZb%2F1470BeE35NFI66DiaDli4dGMtZy84cbNPMwwnL2zQhCyu4iVEauNxXVWVXIYwjjAwdFLZ7pfZ2CK1GokCY3C82Vq5oaWemz4TbxiZ4kf0cMoFGnZWfIa7NtJ5nlliHN0i5ode49aatF89Ou%2FbD9UPhCjOq5UUcCVKbFA2pOPdk%2BZ3JNBpqujN4wByIi88z8vku%2FCYUi9jcvMlhig03NelHeC62dCJGPS1XKY2C%2B7yWrVOheXZXzqyZYJL2N4CvgR4JPfkWlvg8TRwnKlsP78IpVZJPUXRH%2B2S2DNBJ3EkuciutMD%2BJFvW5ZxK5%2FNpGSGphx386bepgQauGuQakMqKROSerK5JRiZd%2BbRzoZbQ3WTG53zxr5943PmCFtA1RhQj2bB2IesF9EN7BqABjzJ1b1j2DwTT%2FyR3nh%2BOZ%2FUvKVARbMEd8vwsHhZhnSmM3rgvimTv21HgpFA0afAc3w%2FVoSE%2B9t6pqVJeGsgupPvJ8EMWJHPA%2BYHPMwoNO1Pxj%2FYFOPJ9%2FMBML3R6b0GOqUB27exw02X6G%2FE3h1noBxTV%2FXd7lhwqFNmNUmGbW95efu2f%2B3hSxp4ELDm%2FI3LfTFnq%2BO%2Bjh8nQWCdziPVmJK3ujsv8oQpy7bWYlVKOYCzhPuU9%2BSTqhS0sNX2%2BNqbZVMAZPq4z6xu%2BADwxQbRCxgaxq4vP7U%2BQtRBxszT6YOerICv6R%2BKHkDUmNCAxgxkIGPEv%2BRpVVZ%2Bryrk%2FOPS9myEMu5Jc0%2Fl&X-Amz-Signature=91b7291181a583f8b8ececd630c23118f588b0fb9ece71c7c328d1f37e2b4caa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I45SIAW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZWsELUWDkypIPuLHmH9L0Y4j1e%2FSo0DEckQvwPNgkLAiEAyiO1zKIHM%2Bc4FSBo5NfpyCc0IZE443UenPAgnecFcbYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLvW75wn5TTgUZOyrcA9bgcY8fOtGwNfUar9ZcbGXRhGUpuOtmv3caDvTFyCJtZWExkiimv79rTOAWrlU1SvsQ3%2BcBXR0ASkNhVa5Oa5q7NFnfr8eywhLDMJw38FD%2Fqa0JjZb%2F1470BeE35NFI66DiaDli4dGMtZy84cbNPMwwnL2zQhCyu4iVEauNxXVWVXIYwjjAwdFLZ7pfZ2CK1GokCY3C82Vq5oaWemz4TbxiZ4kf0cMoFGnZWfIa7NtJ5nlliHN0i5ode49aatF89Ou%2FbD9UPhCjOq5UUcCVKbFA2pOPdk%2BZ3JNBpqujN4wByIi88z8vku%2FCYUi9jcvMlhig03NelHeC62dCJGPS1XKY2C%2B7yWrVOheXZXzqyZYJL2N4CvgR4JPfkWlvg8TRwnKlsP78IpVZJPUXRH%2B2S2DNBJ3EkuciutMD%2BJFvW5ZxK5%2FNpGSGphx386bepgQauGuQakMqKROSerK5JRiZd%2BbRzoZbQ3WTG53zxr5943PmCFtA1RhQj2bB2IesF9EN7BqABjzJ1b1j2DwTT%2FyR3nh%2BOZ%2FUvKVARbMEd8vwsHhZhnSmM3rgvimTv21HgpFA0afAc3w%2FVoSE%2B9t6pqVJeGsgupPvJ8EMWJHPA%2BYHPMwoNO1Pxj%2FYFOPJ9%2FMBML3R6b0GOqUB27exw02X6G%2FE3h1noBxTV%2FXd7lhwqFNmNUmGbW95efu2f%2B3hSxp4ELDm%2FI3LfTFnq%2BO%2Bjh8nQWCdziPVmJK3ujsv8oQpy7bWYlVKOYCzhPuU9%2BSTqhS0sNX2%2BNqbZVMAZPq4z6xu%2BADwxQbRCxgaxq4vP7U%2BQtRBxszT6YOerICv6R%2BKHkDUmNCAxgxkIGPEv%2BRpVVZ%2Bryrk%2FOPS9myEMu5Jc0%2Fl&X-Amz-Signature=3132d03d67fa9d813f1acc791656797f323be11be1d76a136bd6e1121ee8632c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I45SIAW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZWsELUWDkypIPuLHmH9L0Y4j1e%2FSo0DEckQvwPNgkLAiEAyiO1zKIHM%2Bc4FSBo5NfpyCc0IZE443UenPAgnecFcbYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLvW75wn5TTgUZOyrcA9bgcY8fOtGwNfUar9ZcbGXRhGUpuOtmv3caDvTFyCJtZWExkiimv79rTOAWrlU1SvsQ3%2BcBXR0ASkNhVa5Oa5q7NFnfr8eywhLDMJw38FD%2Fqa0JjZb%2F1470BeE35NFI66DiaDli4dGMtZy84cbNPMwwnL2zQhCyu4iVEauNxXVWVXIYwjjAwdFLZ7pfZ2CK1GokCY3C82Vq5oaWemz4TbxiZ4kf0cMoFGnZWfIa7NtJ5nlliHN0i5ode49aatF89Ou%2FbD9UPhCjOq5UUcCVKbFA2pOPdk%2BZ3JNBpqujN4wByIi88z8vku%2FCYUi9jcvMlhig03NelHeC62dCJGPS1XKY2C%2B7yWrVOheXZXzqyZYJL2N4CvgR4JPfkWlvg8TRwnKlsP78IpVZJPUXRH%2B2S2DNBJ3EkuciutMD%2BJFvW5ZxK5%2FNpGSGphx386bepgQauGuQakMqKROSerK5JRiZd%2BbRzoZbQ3WTG53zxr5943PmCFtA1RhQj2bB2IesF9EN7BqABjzJ1b1j2DwTT%2FyR3nh%2BOZ%2FUvKVARbMEd8vwsHhZhnSmM3rgvimTv21HgpFA0afAc3w%2FVoSE%2B9t6pqVJeGsgupPvJ8EMWJHPA%2BYHPMwoNO1Pxj%2FYFOPJ9%2FMBML3R6b0GOqUB27exw02X6G%2FE3h1noBxTV%2FXd7lhwqFNmNUmGbW95efu2f%2B3hSxp4ELDm%2FI3LfTFnq%2BO%2Bjh8nQWCdziPVmJK3ujsv8oQpy7bWYlVKOYCzhPuU9%2BSTqhS0sNX2%2BNqbZVMAZPq4z6xu%2BADwxQbRCxgaxq4vP7U%2BQtRBxszT6YOerICv6R%2BKHkDUmNCAxgxkIGPEv%2BRpVVZ%2Bryrk%2FOPS9myEMu5Jc0%2Fl&X-Amz-Signature=446d3fc9c187d347287cc44da6bf19961a221c91d3e282cb72c9263621a9100f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I45SIAW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZWsELUWDkypIPuLHmH9L0Y4j1e%2FSo0DEckQvwPNgkLAiEAyiO1zKIHM%2Bc4FSBo5NfpyCc0IZE443UenPAgnecFcbYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLvW75wn5TTgUZOyrcA9bgcY8fOtGwNfUar9ZcbGXRhGUpuOtmv3caDvTFyCJtZWExkiimv79rTOAWrlU1SvsQ3%2BcBXR0ASkNhVa5Oa5q7NFnfr8eywhLDMJw38FD%2Fqa0JjZb%2F1470BeE35NFI66DiaDli4dGMtZy84cbNPMwwnL2zQhCyu4iVEauNxXVWVXIYwjjAwdFLZ7pfZ2CK1GokCY3C82Vq5oaWemz4TbxiZ4kf0cMoFGnZWfIa7NtJ5nlliHN0i5ode49aatF89Ou%2FbD9UPhCjOq5UUcCVKbFA2pOPdk%2BZ3JNBpqujN4wByIi88z8vku%2FCYUi9jcvMlhig03NelHeC62dCJGPS1XKY2C%2B7yWrVOheXZXzqyZYJL2N4CvgR4JPfkWlvg8TRwnKlsP78IpVZJPUXRH%2B2S2DNBJ3EkuciutMD%2BJFvW5ZxK5%2FNpGSGphx386bepgQauGuQakMqKROSerK5JRiZd%2BbRzoZbQ3WTG53zxr5943PmCFtA1RhQj2bB2IesF9EN7BqABjzJ1b1j2DwTT%2FyR3nh%2BOZ%2FUvKVARbMEd8vwsHhZhnSmM3rgvimTv21HgpFA0afAc3w%2FVoSE%2B9t6pqVJeGsgupPvJ8EMWJHPA%2BYHPMwoNO1Pxj%2FYFOPJ9%2FMBML3R6b0GOqUB27exw02X6G%2FE3h1noBxTV%2FXd7lhwqFNmNUmGbW95efu2f%2B3hSxp4ELDm%2FI3LfTFnq%2BO%2Bjh8nQWCdziPVmJK3ujsv8oQpy7bWYlVKOYCzhPuU9%2BSTqhS0sNX2%2BNqbZVMAZPq4z6xu%2BADwxQbRCxgaxq4vP7U%2BQtRBxszT6YOerICv6R%2BKHkDUmNCAxgxkIGPEv%2BRpVVZ%2Bryrk%2FOPS9myEMu5Jc0%2Fl&X-Amz-Signature=91b3f48bdb999816c7b23e75e48d4f59d3c6d6bb4e277b63b120684c26e2b856&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I45SIAW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZWsELUWDkypIPuLHmH9L0Y4j1e%2FSo0DEckQvwPNgkLAiEAyiO1zKIHM%2Bc4FSBo5NfpyCc0IZE443UenPAgnecFcbYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYLvW75wn5TTgUZOyrcA9bgcY8fOtGwNfUar9ZcbGXRhGUpuOtmv3caDvTFyCJtZWExkiimv79rTOAWrlU1SvsQ3%2BcBXR0ASkNhVa5Oa5q7NFnfr8eywhLDMJw38FD%2Fqa0JjZb%2F1470BeE35NFI66DiaDli4dGMtZy84cbNPMwwnL2zQhCyu4iVEauNxXVWVXIYwjjAwdFLZ7pfZ2CK1GokCY3C82Vq5oaWemz4TbxiZ4kf0cMoFGnZWfIa7NtJ5nlliHN0i5ode49aatF89Ou%2FbD9UPhCjOq5UUcCVKbFA2pOPdk%2BZ3JNBpqujN4wByIi88z8vku%2FCYUi9jcvMlhig03NelHeC62dCJGPS1XKY2C%2B7yWrVOheXZXzqyZYJL2N4CvgR4JPfkWlvg8TRwnKlsP78IpVZJPUXRH%2B2S2DNBJ3EkuciutMD%2BJFvW5ZxK5%2FNpGSGphx386bepgQauGuQakMqKROSerK5JRiZd%2BbRzoZbQ3WTG53zxr5943PmCFtA1RhQj2bB2IesF9EN7BqABjzJ1b1j2DwTT%2FyR3nh%2BOZ%2FUvKVARbMEd8vwsHhZhnSmM3rgvimTv21HgpFA0afAc3w%2FVoSE%2B9t6pqVJeGsgupPvJ8EMWJHPA%2BYHPMwoNO1Pxj%2FYFOPJ9%2FMBML3R6b0GOqUB27exw02X6G%2FE3h1noBxTV%2FXd7lhwqFNmNUmGbW95efu2f%2B3hSxp4ELDm%2FI3LfTFnq%2BO%2Bjh8nQWCdziPVmJK3ujsv8oQpy7bWYlVKOYCzhPuU9%2BSTqhS0sNX2%2BNqbZVMAZPq4z6xu%2BADwxQbRCxgaxq4vP7U%2BQtRBxszT6YOerICv6R%2BKHkDUmNCAxgxkIGPEv%2BRpVVZ%2Bryrk%2FOPS9myEMu5Jc0%2Fl&X-Amz-Signature=703959fb13f3eefc2447007ceec3c8a48e24ae3bdb7d2f7e79353fd19334bd52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
