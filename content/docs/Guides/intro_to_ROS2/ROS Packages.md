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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DGUWV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZeedA4uHFaZJ7tKig7n%2Figc01JfIsAKMWfLpeCuEvAiEApL2s9y93piM8uuBQNHG9kFrUVaSJ%2By812AUHC%2BFLjFYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK8pjgIMhuiiqT%2BtcCrcA%2Fkm2IHckGwh3rxLttYrPOKuc%2Fvj3PYnRYXwF49jiomfMWuB0Z7PfVzRIv9lwjgjXEHuXsE2yW6XJnbtaOmOkQh43N9VDB4JRUSX1nPSMtAAamyMfJwDY75Sd%2B69wJaH7a9Eo89J0xdOhRwY%2BiHnfGeUnpCFzJNy2ykTM3tr4viEzgUxXLEmlAaJ%2BbwUxxg%2BtkATnK3tmK8qLbTCoLnd04BG7cApjMBL5UhkxlNqUjtZTOQ%2BNLvJOoLJ8HfVPaSgi%2BRe%2Fs3fwhO0gzM3e3IIyVkYCfAuNH3FnO4Ix%2F3pTtORrF9K79NN%2B%2F%2FVE98CSKk57bOa7LPooZhmwj0o0zwgxl3l8Nh%2B2KabZN8eSVjJaiyn08G5LHXMTT6UOru2g0%2FWG4Zrk9mImdgW%2BA3TNsY9Isk2Skzr6AmILEravZNucLZQ18BRLzzE6yvknXM3pL3AbWmVGPiqfSu1UnxJweRxWpKyxeqth8PzWKgPVC6T1zgUDCLOKm9EGdLmKro%2BtVqs2sy%2FGoDlhW9wWUh2%2FXQKB5YA9LQgPNxmJgcmxKrKgp0Zxb4nZ5smum2UWhE5TcMQqSyms1NUAjxSHfzYaySLRuPwKPdN3kg8PYKuZf%2Fx6Vdb8iqOCXgQvf7A5dqxMIWU9b8GOqUB4lLtDlK1v0tvjSTPBvoazt61DddCmvbPpE0onGYRu9veimwdCqHBHmJhOzCYhWbFBIQJgYCgK4TLpNaWwSxCfpPqCgz6JbGcuLzx5afyZLnrm%2B%2BEWlyb8XKwu%2F2IQ7yM7%2B2FnnEcgLyWharYdnR0CJNcNCIrUC8WqEB2%2BsxnLkUZHT42xyLzqp9MJTtFv8X94xP6aNE7fzDPOowS4g4O5lW8FnGU&X-Amz-Signature=fd9f6212a839a1855d0a4372dfddfb120317383719c6569f158796c0615df4b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DGUWV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZeedA4uHFaZJ7tKig7n%2Figc01JfIsAKMWfLpeCuEvAiEApL2s9y93piM8uuBQNHG9kFrUVaSJ%2By812AUHC%2BFLjFYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK8pjgIMhuiiqT%2BtcCrcA%2Fkm2IHckGwh3rxLttYrPOKuc%2Fvj3PYnRYXwF49jiomfMWuB0Z7PfVzRIv9lwjgjXEHuXsE2yW6XJnbtaOmOkQh43N9VDB4JRUSX1nPSMtAAamyMfJwDY75Sd%2B69wJaH7a9Eo89J0xdOhRwY%2BiHnfGeUnpCFzJNy2ykTM3tr4viEzgUxXLEmlAaJ%2BbwUxxg%2BtkATnK3tmK8qLbTCoLnd04BG7cApjMBL5UhkxlNqUjtZTOQ%2BNLvJOoLJ8HfVPaSgi%2BRe%2Fs3fwhO0gzM3e3IIyVkYCfAuNH3FnO4Ix%2F3pTtORrF9K79NN%2B%2F%2FVE98CSKk57bOa7LPooZhmwj0o0zwgxl3l8Nh%2B2KabZN8eSVjJaiyn08G5LHXMTT6UOru2g0%2FWG4Zrk9mImdgW%2BA3TNsY9Isk2Skzr6AmILEravZNucLZQ18BRLzzE6yvknXM3pL3AbWmVGPiqfSu1UnxJweRxWpKyxeqth8PzWKgPVC6T1zgUDCLOKm9EGdLmKro%2BtVqs2sy%2FGoDlhW9wWUh2%2FXQKB5YA9LQgPNxmJgcmxKrKgp0Zxb4nZ5smum2UWhE5TcMQqSyms1NUAjxSHfzYaySLRuPwKPdN3kg8PYKuZf%2Fx6Vdb8iqOCXgQvf7A5dqxMIWU9b8GOqUB4lLtDlK1v0tvjSTPBvoazt61DddCmvbPpE0onGYRu9veimwdCqHBHmJhOzCYhWbFBIQJgYCgK4TLpNaWwSxCfpPqCgz6JbGcuLzx5afyZLnrm%2B%2BEWlyb8XKwu%2F2IQ7yM7%2B2FnnEcgLyWharYdnR0CJNcNCIrUC8WqEB2%2BsxnLkUZHT42xyLzqp9MJTtFv8X94xP6aNE7fzDPOowS4g4O5lW8FnGU&X-Amz-Signature=2b28b74dbf22ad3f18d60cb51bef00dd7abe2995b80b87b39c0056d7db6625c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DGUWV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZeedA4uHFaZJ7tKig7n%2Figc01JfIsAKMWfLpeCuEvAiEApL2s9y93piM8uuBQNHG9kFrUVaSJ%2By812AUHC%2BFLjFYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK8pjgIMhuiiqT%2BtcCrcA%2Fkm2IHckGwh3rxLttYrPOKuc%2Fvj3PYnRYXwF49jiomfMWuB0Z7PfVzRIv9lwjgjXEHuXsE2yW6XJnbtaOmOkQh43N9VDB4JRUSX1nPSMtAAamyMfJwDY75Sd%2B69wJaH7a9Eo89J0xdOhRwY%2BiHnfGeUnpCFzJNy2ykTM3tr4viEzgUxXLEmlAaJ%2BbwUxxg%2BtkATnK3tmK8qLbTCoLnd04BG7cApjMBL5UhkxlNqUjtZTOQ%2BNLvJOoLJ8HfVPaSgi%2BRe%2Fs3fwhO0gzM3e3IIyVkYCfAuNH3FnO4Ix%2F3pTtORrF9K79NN%2B%2F%2FVE98CSKk57bOa7LPooZhmwj0o0zwgxl3l8Nh%2B2KabZN8eSVjJaiyn08G5LHXMTT6UOru2g0%2FWG4Zrk9mImdgW%2BA3TNsY9Isk2Skzr6AmILEravZNucLZQ18BRLzzE6yvknXM3pL3AbWmVGPiqfSu1UnxJweRxWpKyxeqth8PzWKgPVC6T1zgUDCLOKm9EGdLmKro%2BtVqs2sy%2FGoDlhW9wWUh2%2FXQKB5YA9LQgPNxmJgcmxKrKgp0Zxb4nZ5smum2UWhE5TcMQqSyms1NUAjxSHfzYaySLRuPwKPdN3kg8PYKuZf%2Fx6Vdb8iqOCXgQvf7A5dqxMIWU9b8GOqUB4lLtDlK1v0tvjSTPBvoazt61DddCmvbPpE0onGYRu9veimwdCqHBHmJhOzCYhWbFBIQJgYCgK4TLpNaWwSxCfpPqCgz6JbGcuLzx5afyZLnrm%2B%2BEWlyb8XKwu%2F2IQ7yM7%2B2FnnEcgLyWharYdnR0CJNcNCIrUC8WqEB2%2BsxnLkUZHT42xyLzqp9MJTtFv8X94xP6aNE7fzDPOowS4g4O5lW8FnGU&X-Amz-Signature=a0bbc8045c80c29385db10ac5b186978ad81be28173e502066c3753394bc0f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DGUWV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZeedA4uHFaZJ7tKig7n%2Figc01JfIsAKMWfLpeCuEvAiEApL2s9y93piM8uuBQNHG9kFrUVaSJ%2By812AUHC%2BFLjFYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK8pjgIMhuiiqT%2BtcCrcA%2Fkm2IHckGwh3rxLttYrPOKuc%2Fvj3PYnRYXwF49jiomfMWuB0Z7PfVzRIv9lwjgjXEHuXsE2yW6XJnbtaOmOkQh43N9VDB4JRUSX1nPSMtAAamyMfJwDY75Sd%2B69wJaH7a9Eo89J0xdOhRwY%2BiHnfGeUnpCFzJNy2ykTM3tr4viEzgUxXLEmlAaJ%2BbwUxxg%2BtkATnK3tmK8qLbTCoLnd04BG7cApjMBL5UhkxlNqUjtZTOQ%2BNLvJOoLJ8HfVPaSgi%2BRe%2Fs3fwhO0gzM3e3IIyVkYCfAuNH3FnO4Ix%2F3pTtORrF9K79NN%2B%2F%2FVE98CSKk57bOa7LPooZhmwj0o0zwgxl3l8Nh%2B2KabZN8eSVjJaiyn08G5LHXMTT6UOru2g0%2FWG4Zrk9mImdgW%2BA3TNsY9Isk2Skzr6AmILEravZNucLZQ18BRLzzE6yvknXM3pL3AbWmVGPiqfSu1UnxJweRxWpKyxeqth8PzWKgPVC6T1zgUDCLOKm9EGdLmKro%2BtVqs2sy%2FGoDlhW9wWUh2%2FXQKB5YA9LQgPNxmJgcmxKrKgp0Zxb4nZ5smum2UWhE5TcMQqSyms1NUAjxSHfzYaySLRuPwKPdN3kg8PYKuZf%2Fx6Vdb8iqOCXgQvf7A5dqxMIWU9b8GOqUB4lLtDlK1v0tvjSTPBvoazt61DddCmvbPpE0onGYRu9veimwdCqHBHmJhOzCYhWbFBIQJgYCgK4TLpNaWwSxCfpPqCgz6JbGcuLzx5afyZLnrm%2B%2BEWlyb8XKwu%2F2IQ7yM7%2B2FnnEcgLyWharYdnR0CJNcNCIrUC8WqEB2%2BsxnLkUZHT42xyLzqp9MJTtFv8X94xP6aNE7fzDPOowS4g4O5lW8FnGU&X-Amz-Signature=e896767ae6d4be58366ed5411a7bc2154e1604b272a036cef22abf63761baa65&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DGUWV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZeedA4uHFaZJ7tKig7n%2Figc01JfIsAKMWfLpeCuEvAiEApL2s9y93piM8uuBQNHG9kFrUVaSJ%2By812AUHC%2BFLjFYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK8pjgIMhuiiqT%2BtcCrcA%2Fkm2IHckGwh3rxLttYrPOKuc%2Fvj3PYnRYXwF49jiomfMWuB0Z7PfVzRIv9lwjgjXEHuXsE2yW6XJnbtaOmOkQh43N9VDB4JRUSX1nPSMtAAamyMfJwDY75Sd%2B69wJaH7a9Eo89J0xdOhRwY%2BiHnfGeUnpCFzJNy2ykTM3tr4viEzgUxXLEmlAaJ%2BbwUxxg%2BtkATnK3tmK8qLbTCoLnd04BG7cApjMBL5UhkxlNqUjtZTOQ%2BNLvJOoLJ8HfVPaSgi%2BRe%2Fs3fwhO0gzM3e3IIyVkYCfAuNH3FnO4Ix%2F3pTtORrF9K79NN%2B%2F%2FVE98CSKk57bOa7LPooZhmwj0o0zwgxl3l8Nh%2B2KabZN8eSVjJaiyn08G5LHXMTT6UOru2g0%2FWG4Zrk9mImdgW%2BA3TNsY9Isk2Skzr6AmILEravZNucLZQ18BRLzzE6yvknXM3pL3AbWmVGPiqfSu1UnxJweRxWpKyxeqth8PzWKgPVC6T1zgUDCLOKm9EGdLmKro%2BtVqs2sy%2FGoDlhW9wWUh2%2FXQKB5YA9LQgPNxmJgcmxKrKgp0Zxb4nZ5smum2UWhE5TcMQqSyms1NUAjxSHfzYaySLRuPwKPdN3kg8PYKuZf%2Fx6Vdb8iqOCXgQvf7A5dqxMIWU9b8GOqUB4lLtDlK1v0tvjSTPBvoazt61DddCmvbPpE0onGYRu9veimwdCqHBHmJhOzCYhWbFBIQJgYCgK4TLpNaWwSxCfpPqCgz6JbGcuLzx5afyZLnrm%2B%2BEWlyb8XKwu%2F2IQ7yM7%2B2FnnEcgLyWharYdnR0CJNcNCIrUC8WqEB2%2BsxnLkUZHT42xyLzqp9MJTtFv8X94xP6aNE7fzDPOowS4g4O5lW8FnGU&X-Amz-Signature=9ff8723d356b547f3bae52cb81ce4459f1ea0dcadacb98dab677f66efb8e4fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DGUWV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZeedA4uHFaZJ7tKig7n%2Figc01JfIsAKMWfLpeCuEvAiEApL2s9y93piM8uuBQNHG9kFrUVaSJ%2By812AUHC%2BFLjFYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK8pjgIMhuiiqT%2BtcCrcA%2Fkm2IHckGwh3rxLttYrPOKuc%2Fvj3PYnRYXwF49jiomfMWuB0Z7PfVzRIv9lwjgjXEHuXsE2yW6XJnbtaOmOkQh43N9VDB4JRUSX1nPSMtAAamyMfJwDY75Sd%2B69wJaH7a9Eo89J0xdOhRwY%2BiHnfGeUnpCFzJNy2ykTM3tr4viEzgUxXLEmlAaJ%2BbwUxxg%2BtkATnK3tmK8qLbTCoLnd04BG7cApjMBL5UhkxlNqUjtZTOQ%2BNLvJOoLJ8HfVPaSgi%2BRe%2Fs3fwhO0gzM3e3IIyVkYCfAuNH3FnO4Ix%2F3pTtORrF9K79NN%2B%2F%2FVE98CSKk57bOa7LPooZhmwj0o0zwgxl3l8Nh%2B2KabZN8eSVjJaiyn08G5LHXMTT6UOru2g0%2FWG4Zrk9mImdgW%2BA3TNsY9Isk2Skzr6AmILEravZNucLZQ18BRLzzE6yvknXM3pL3AbWmVGPiqfSu1UnxJweRxWpKyxeqth8PzWKgPVC6T1zgUDCLOKm9EGdLmKro%2BtVqs2sy%2FGoDlhW9wWUh2%2FXQKB5YA9LQgPNxmJgcmxKrKgp0Zxb4nZ5smum2UWhE5TcMQqSyms1NUAjxSHfzYaySLRuPwKPdN3kg8PYKuZf%2Fx6Vdb8iqOCXgQvf7A5dqxMIWU9b8GOqUB4lLtDlK1v0tvjSTPBvoazt61DddCmvbPpE0onGYRu9veimwdCqHBHmJhOzCYhWbFBIQJgYCgK4TLpNaWwSxCfpPqCgz6JbGcuLzx5afyZLnrm%2B%2BEWlyb8XKwu%2F2IQ7yM7%2B2FnnEcgLyWharYdnR0CJNcNCIrUC8WqEB2%2BsxnLkUZHT42xyLzqp9MJTtFv8X94xP6aNE7fzDPOowS4g4O5lW8FnGU&X-Amz-Signature=9c7db870a38734b40d27a8ffeb5acf80609fa76eaf22cd09b013d05c0f2d43a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DGUWV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZeedA4uHFaZJ7tKig7n%2Figc01JfIsAKMWfLpeCuEvAiEApL2s9y93piM8uuBQNHG9kFrUVaSJ%2By812AUHC%2BFLjFYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK8pjgIMhuiiqT%2BtcCrcA%2Fkm2IHckGwh3rxLttYrPOKuc%2Fvj3PYnRYXwF49jiomfMWuB0Z7PfVzRIv9lwjgjXEHuXsE2yW6XJnbtaOmOkQh43N9VDB4JRUSX1nPSMtAAamyMfJwDY75Sd%2B69wJaH7a9Eo89J0xdOhRwY%2BiHnfGeUnpCFzJNy2ykTM3tr4viEzgUxXLEmlAaJ%2BbwUxxg%2BtkATnK3tmK8qLbTCoLnd04BG7cApjMBL5UhkxlNqUjtZTOQ%2BNLvJOoLJ8HfVPaSgi%2BRe%2Fs3fwhO0gzM3e3IIyVkYCfAuNH3FnO4Ix%2F3pTtORrF9K79NN%2B%2F%2FVE98CSKk57bOa7LPooZhmwj0o0zwgxl3l8Nh%2B2KabZN8eSVjJaiyn08G5LHXMTT6UOru2g0%2FWG4Zrk9mImdgW%2BA3TNsY9Isk2Skzr6AmILEravZNucLZQ18BRLzzE6yvknXM3pL3AbWmVGPiqfSu1UnxJweRxWpKyxeqth8PzWKgPVC6T1zgUDCLOKm9EGdLmKro%2BtVqs2sy%2FGoDlhW9wWUh2%2FXQKB5YA9LQgPNxmJgcmxKrKgp0Zxb4nZ5smum2UWhE5TcMQqSyms1NUAjxSHfzYaySLRuPwKPdN3kg8PYKuZf%2Fx6Vdb8iqOCXgQvf7A5dqxMIWU9b8GOqUB4lLtDlK1v0tvjSTPBvoazt61DddCmvbPpE0onGYRu9veimwdCqHBHmJhOzCYhWbFBIQJgYCgK4TLpNaWwSxCfpPqCgz6JbGcuLzx5afyZLnrm%2B%2BEWlyb8XKwu%2F2IQ7yM7%2B2FnnEcgLyWharYdnR0CJNcNCIrUC8WqEB2%2BsxnLkUZHT42xyLzqp9MJTtFv8X94xP6aNE7fzDPOowS4g4O5lW8FnGU&X-Amz-Signature=d6feb18212c27a91793736f25369598eed016ec5c5e318e349d0776124f413f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
