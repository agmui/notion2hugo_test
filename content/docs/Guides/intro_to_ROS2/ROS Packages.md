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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663626QXVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDoSiH2VW1Yvh0BpzzXcdHu%2BzoRSnVXJXK7O9JKiAYURAIgS0xn5onxDAjRnO8pDZXTkKB07ohJAoHFwu1xcXqnDwAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMUJ9Wj34BW0hmmznCrcAx06Xn1IJuQJsSElEYyzEijHl9YLwkvSmdn5UGNFMFYct6RTFnFrSj8oShLRK6R9sUjCcJiZF%2BahKSpB%2FUfiYE2TQH4VowekW3u%2FeVM3cbnGY2QTjndNFKJwwAoEdRytFz%2BDP%2BLjgBhk4v7HVBG%2FUGNsaFWx%2F%2FmMNnMeqdpgR54QasoZ9584vUBQ83x9ru761CdKc7zSE28DavCCsSNBV9wClYs%2FKK0OmQ%2BCmv%2BfQ9Ysq1UC6wfM1Upq9KlfAnSKYvq5SoUG36Wct3YIrHaV42yKVL1wPpHhsGHgO3w08Lf5Y9ficnd4EUBrDxeV%2FSshldoqG3REVojJQJdeqkth76Ba9I8NtJVcALahRTwDw8aN4s3otL9BQcqsDh%2FE0KZd2%2BhlgJ0hpSgEK2O%2FpYnirFe2aYSVs25UyxHuDzOkpQsejRO50GOl18RU4%2BAjPGLh3ZGxVjssAZouhGq05GNNIL8I%2B9FhOFRqfZwySG1npOj6%2F4G6WJ3VtpSqKv0QpKFiVz5PxYjVXozfX6CDg0vZyxV%2FkoQIjBbOnFLJRgufCQnGmzWWtsQdLuhDtsJDEXHpZ%2FN3b2phO%2Fxw4kBaeCNX1tBMVW9mYSYzKQLab5VnRJjmtUQ9CxMRg5KhrX5JMNen%2Fb0GOqUBSHl76qa9TFbqR2VA%2FrSA1s4LPzGl6CSgi6j3Bm%2BtmbfnAYSxt6Rjqt%2BpAe282JUydIWd%2BeDMvvwNF12RKnbOq8SfauL0LuQdb4k5lQ8jiyMvNsDUhc5kTxnPS50Ub8Ewo0%2BB6k9d%2ByGrwamNhUBOWTX87tOz2X%2FqOdjBzlukz7qmdBchtP%2FQtxKBdV0VzAXTNf3RZnzHjiFgYRK%2ByKHba30gan31&X-Amz-Signature=81d6962cc151fd69ee56058793c020b4f2588e05eb759b82f26dc687e6ba701b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663626QXVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDoSiH2VW1Yvh0BpzzXcdHu%2BzoRSnVXJXK7O9JKiAYURAIgS0xn5onxDAjRnO8pDZXTkKB07ohJAoHFwu1xcXqnDwAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMUJ9Wj34BW0hmmznCrcAx06Xn1IJuQJsSElEYyzEijHl9YLwkvSmdn5UGNFMFYct6RTFnFrSj8oShLRK6R9sUjCcJiZF%2BahKSpB%2FUfiYE2TQH4VowekW3u%2FeVM3cbnGY2QTjndNFKJwwAoEdRytFz%2BDP%2BLjgBhk4v7HVBG%2FUGNsaFWx%2F%2FmMNnMeqdpgR54QasoZ9584vUBQ83x9ru761CdKc7zSE28DavCCsSNBV9wClYs%2FKK0OmQ%2BCmv%2BfQ9Ysq1UC6wfM1Upq9KlfAnSKYvq5SoUG36Wct3YIrHaV42yKVL1wPpHhsGHgO3w08Lf5Y9ficnd4EUBrDxeV%2FSshldoqG3REVojJQJdeqkth76Ba9I8NtJVcALahRTwDw8aN4s3otL9BQcqsDh%2FE0KZd2%2BhlgJ0hpSgEK2O%2FpYnirFe2aYSVs25UyxHuDzOkpQsejRO50GOl18RU4%2BAjPGLh3ZGxVjssAZouhGq05GNNIL8I%2B9FhOFRqfZwySG1npOj6%2F4G6WJ3VtpSqKv0QpKFiVz5PxYjVXozfX6CDg0vZyxV%2FkoQIjBbOnFLJRgufCQnGmzWWtsQdLuhDtsJDEXHpZ%2FN3b2phO%2Fxw4kBaeCNX1tBMVW9mYSYzKQLab5VnRJjmtUQ9CxMRg5KhrX5JMNen%2Fb0GOqUBSHl76qa9TFbqR2VA%2FrSA1s4LPzGl6CSgi6j3Bm%2BtmbfnAYSxt6Rjqt%2BpAe282JUydIWd%2BeDMvvwNF12RKnbOq8SfauL0LuQdb4k5lQ8jiyMvNsDUhc5kTxnPS50Ub8Ewo0%2BB6k9d%2ByGrwamNhUBOWTX87tOz2X%2FqOdjBzlukz7qmdBchtP%2FQtxKBdV0VzAXTNf3RZnzHjiFgYRK%2ByKHba30gan31&X-Amz-Signature=40fdcf354458e9acefb650364367ba787cc0084b6afefb53e698fbc4c4473831&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663626QXVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDoSiH2VW1Yvh0BpzzXcdHu%2BzoRSnVXJXK7O9JKiAYURAIgS0xn5onxDAjRnO8pDZXTkKB07ohJAoHFwu1xcXqnDwAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMUJ9Wj34BW0hmmznCrcAx06Xn1IJuQJsSElEYyzEijHl9YLwkvSmdn5UGNFMFYct6RTFnFrSj8oShLRK6R9sUjCcJiZF%2BahKSpB%2FUfiYE2TQH4VowekW3u%2FeVM3cbnGY2QTjndNFKJwwAoEdRytFz%2BDP%2BLjgBhk4v7HVBG%2FUGNsaFWx%2F%2FmMNnMeqdpgR54QasoZ9584vUBQ83x9ru761CdKc7zSE28DavCCsSNBV9wClYs%2FKK0OmQ%2BCmv%2BfQ9Ysq1UC6wfM1Upq9KlfAnSKYvq5SoUG36Wct3YIrHaV42yKVL1wPpHhsGHgO3w08Lf5Y9ficnd4EUBrDxeV%2FSshldoqG3REVojJQJdeqkth76Ba9I8NtJVcALahRTwDw8aN4s3otL9BQcqsDh%2FE0KZd2%2BhlgJ0hpSgEK2O%2FpYnirFe2aYSVs25UyxHuDzOkpQsejRO50GOl18RU4%2BAjPGLh3ZGxVjssAZouhGq05GNNIL8I%2B9FhOFRqfZwySG1npOj6%2F4G6WJ3VtpSqKv0QpKFiVz5PxYjVXozfX6CDg0vZyxV%2FkoQIjBbOnFLJRgufCQnGmzWWtsQdLuhDtsJDEXHpZ%2FN3b2phO%2Fxw4kBaeCNX1tBMVW9mYSYzKQLab5VnRJjmtUQ9CxMRg5KhrX5JMNen%2Fb0GOqUBSHl76qa9TFbqR2VA%2FrSA1s4LPzGl6CSgi6j3Bm%2BtmbfnAYSxt6Rjqt%2BpAe282JUydIWd%2BeDMvvwNF12RKnbOq8SfauL0LuQdb4k5lQ8jiyMvNsDUhc5kTxnPS50Ub8Ewo0%2BB6k9d%2ByGrwamNhUBOWTX87tOz2X%2FqOdjBzlukz7qmdBchtP%2FQtxKBdV0VzAXTNf3RZnzHjiFgYRK%2ByKHba30gan31&X-Amz-Signature=156a26b91b867712367ce75fa4f609c836e31645664340d65c92c40ef503cd75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663626QXVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDoSiH2VW1Yvh0BpzzXcdHu%2BzoRSnVXJXK7O9JKiAYURAIgS0xn5onxDAjRnO8pDZXTkKB07ohJAoHFwu1xcXqnDwAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMUJ9Wj34BW0hmmznCrcAx06Xn1IJuQJsSElEYyzEijHl9YLwkvSmdn5UGNFMFYct6RTFnFrSj8oShLRK6R9sUjCcJiZF%2BahKSpB%2FUfiYE2TQH4VowekW3u%2FeVM3cbnGY2QTjndNFKJwwAoEdRytFz%2BDP%2BLjgBhk4v7HVBG%2FUGNsaFWx%2F%2FmMNnMeqdpgR54QasoZ9584vUBQ83x9ru761CdKc7zSE28DavCCsSNBV9wClYs%2FKK0OmQ%2BCmv%2BfQ9Ysq1UC6wfM1Upq9KlfAnSKYvq5SoUG36Wct3YIrHaV42yKVL1wPpHhsGHgO3w08Lf5Y9ficnd4EUBrDxeV%2FSshldoqG3REVojJQJdeqkth76Ba9I8NtJVcALahRTwDw8aN4s3otL9BQcqsDh%2FE0KZd2%2BhlgJ0hpSgEK2O%2FpYnirFe2aYSVs25UyxHuDzOkpQsejRO50GOl18RU4%2BAjPGLh3ZGxVjssAZouhGq05GNNIL8I%2B9FhOFRqfZwySG1npOj6%2F4G6WJ3VtpSqKv0QpKFiVz5PxYjVXozfX6CDg0vZyxV%2FkoQIjBbOnFLJRgufCQnGmzWWtsQdLuhDtsJDEXHpZ%2FN3b2phO%2Fxw4kBaeCNX1tBMVW9mYSYzKQLab5VnRJjmtUQ9CxMRg5KhrX5JMNen%2Fb0GOqUBSHl76qa9TFbqR2VA%2FrSA1s4LPzGl6CSgi6j3Bm%2BtmbfnAYSxt6Rjqt%2BpAe282JUydIWd%2BeDMvvwNF12RKnbOq8SfauL0LuQdb4k5lQ8jiyMvNsDUhc5kTxnPS50Ub8Ewo0%2BB6k9d%2ByGrwamNhUBOWTX87tOz2X%2FqOdjBzlukz7qmdBchtP%2FQtxKBdV0VzAXTNf3RZnzHjiFgYRK%2ByKHba30gan31&X-Amz-Signature=6775b369049b0a28e36acc380df0e055bd666caae6ed30b8afb47fe64034d9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663626QXVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDoSiH2VW1Yvh0BpzzXcdHu%2BzoRSnVXJXK7O9JKiAYURAIgS0xn5onxDAjRnO8pDZXTkKB07ohJAoHFwu1xcXqnDwAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMUJ9Wj34BW0hmmznCrcAx06Xn1IJuQJsSElEYyzEijHl9YLwkvSmdn5UGNFMFYct6RTFnFrSj8oShLRK6R9sUjCcJiZF%2BahKSpB%2FUfiYE2TQH4VowekW3u%2FeVM3cbnGY2QTjndNFKJwwAoEdRytFz%2BDP%2BLjgBhk4v7HVBG%2FUGNsaFWx%2F%2FmMNnMeqdpgR54QasoZ9584vUBQ83x9ru761CdKc7zSE28DavCCsSNBV9wClYs%2FKK0OmQ%2BCmv%2BfQ9Ysq1UC6wfM1Upq9KlfAnSKYvq5SoUG36Wct3YIrHaV42yKVL1wPpHhsGHgO3w08Lf5Y9ficnd4EUBrDxeV%2FSshldoqG3REVojJQJdeqkth76Ba9I8NtJVcALahRTwDw8aN4s3otL9BQcqsDh%2FE0KZd2%2BhlgJ0hpSgEK2O%2FpYnirFe2aYSVs25UyxHuDzOkpQsejRO50GOl18RU4%2BAjPGLh3ZGxVjssAZouhGq05GNNIL8I%2B9FhOFRqfZwySG1npOj6%2F4G6WJ3VtpSqKv0QpKFiVz5PxYjVXozfX6CDg0vZyxV%2FkoQIjBbOnFLJRgufCQnGmzWWtsQdLuhDtsJDEXHpZ%2FN3b2phO%2Fxw4kBaeCNX1tBMVW9mYSYzKQLab5VnRJjmtUQ9CxMRg5KhrX5JMNen%2Fb0GOqUBSHl76qa9TFbqR2VA%2FrSA1s4LPzGl6CSgi6j3Bm%2BtmbfnAYSxt6Rjqt%2BpAe282JUydIWd%2BeDMvvwNF12RKnbOq8SfauL0LuQdb4k5lQ8jiyMvNsDUhc5kTxnPS50Ub8Ewo0%2BB6k9d%2ByGrwamNhUBOWTX87tOz2X%2FqOdjBzlukz7qmdBchtP%2FQtxKBdV0VzAXTNf3RZnzHjiFgYRK%2ByKHba30gan31&X-Amz-Signature=3bd381437c2410c71817adf61f491f1608f609ad6d6b58c9a1a6a2177b322ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663626QXVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDoSiH2VW1Yvh0BpzzXcdHu%2BzoRSnVXJXK7O9JKiAYURAIgS0xn5onxDAjRnO8pDZXTkKB07ohJAoHFwu1xcXqnDwAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMUJ9Wj34BW0hmmznCrcAx06Xn1IJuQJsSElEYyzEijHl9YLwkvSmdn5UGNFMFYct6RTFnFrSj8oShLRK6R9sUjCcJiZF%2BahKSpB%2FUfiYE2TQH4VowekW3u%2FeVM3cbnGY2QTjndNFKJwwAoEdRytFz%2BDP%2BLjgBhk4v7HVBG%2FUGNsaFWx%2F%2FmMNnMeqdpgR54QasoZ9584vUBQ83x9ru761CdKc7zSE28DavCCsSNBV9wClYs%2FKK0OmQ%2BCmv%2BfQ9Ysq1UC6wfM1Upq9KlfAnSKYvq5SoUG36Wct3YIrHaV42yKVL1wPpHhsGHgO3w08Lf5Y9ficnd4EUBrDxeV%2FSshldoqG3REVojJQJdeqkth76Ba9I8NtJVcALahRTwDw8aN4s3otL9BQcqsDh%2FE0KZd2%2BhlgJ0hpSgEK2O%2FpYnirFe2aYSVs25UyxHuDzOkpQsejRO50GOl18RU4%2BAjPGLh3ZGxVjssAZouhGq05GNNIL8I%2B9FhOFRqfZwySG1npOj6%2F4G6WJ3VtpSqKv0QpKFiVz5PxYjVXozfX6CDg0vZyxV%2FkoQIjBbOnFLJRgufCQnGmzWWtsQdLuhDtsJDEXHpZ%2FN3b2phO%2Fxw4kBaeCNX1tBMVW9mYSYzKQLab5VnRJjmtUQ9CxMRg5KhrX5JMNen%2Fb0GOqUBSHl76qa9TFbqR2VA%2FrSA1s4LPzGl6CSgi6j3Bm%2BtmbfnAYSxt6Rjqt%2BpAe282JUydIWd%2BeDMvvwNF12RKnbOq8SfauL0LuQdb4k5lQ8jiyMvNsDUhc5kTxnPS50Ub8Ewo0%2BB6k9d%2ByGrwamNhUBOWTX87tOz2X%2FqOdjBzlukz7qmdBchtP%2FQtxKBdV0VzAXTNf3RZnzHjiFgYRK%2ByKHba30gan31&X-Amz-Signature=9c3b27f8511f68fe6c881bcf9645ccdc5fb329224d87513bbad7fff34e81338c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663626QXVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDoSiH2VW1Yvh0BpzzXcdHu%2BzoRSnVXJXK7O9JKiAYURAIgS0xn5onxDAjRnO8pDZXTkKB07ohJAoHFwu1xcXqnDwAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMUJ9Wj34BW0hmmznCrcAx06Xn1IJuQJsSElEYyzEijHl9YLwkvSmdn5UGNFMFYct6RTFnFrSj8oShLRK6R9sUjCcJiZF%2BahKSpB%2FUfiYE2TQH4VowekW3u%2FeVM3cbnGY2QTjndNFKJwwAoEdRytFz%2BDP%2BLjgBhk4v7HVBG%2FUGNsaFWx%2F%2FmMNnMeqdpgR54QasoZ9584vUBQ83x9ru761CdKc7zSE28DavCCsSNBV9wClYs%2FKK0OmQ%2BCmv%2BfQ9Ysq1UC6wfM1Upq9KlfAnSKYvq5SoUG36Wct3YIrHaV42yKVL1wPpHhsGHgO3w08Lf5Y9ficnd4EUBrDxeV%2FSshldoqG3REVojJQJdeqkth76Ba9I8NtJVcALahRTwDw8aN4s3otL9BQcqsDh%2FE0KZd2%2BhlgJ0hpSgEK2O%2FpYnirFe2aYSVs25UyxHuDzOkpQsejRO50GOl18RU4%2BAjPGLh3ZGxVjssAZouhGq05GNNIL8I%2B9FhOFRqfZwySG1npOj6%2F4G6WJ3VtpSqKv0QpKFiVz5PxYjVXozfX6CDg0vZyxV%2FkoQIjBbOnFLJRgufCQnGmzWWtsQdLuhDtsJDEXHpZ%2FN3b2phO%2Fxw4kBaeCNX1tBMVW9mYSYzKQLab5VnRJjmtUQ9CxMRg5KhrX5JMNen%2Fb0GOqUBSHl76qa9TFbqR2VA%2FrSA1s4LPzGl6CSgi6j3Bm%2BtmbfnAYSxt6Rjqt%2BpAe282JUydIWd%2BeDMvvwNF12RKnbOq8SfauL0LuQdb4k5lQ8jiyMvNsDUhc5kTxnPS50Ub8Ewo0%2BB6k9d%2ByGrwamNhUBOWTX87tOz2X%2FqOdjBzlukz7qmdBchtP%2FQtxKBdV0VzAXTNf3RZnzHjiFgYRK%2ByKHba30gan31&X-Amz-Signature=b6324555afc587a8f0c43536b4d761949ec25b640434a253e961bfc73d848030&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
