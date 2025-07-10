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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRFZTPG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6bkpls16nXcC4aj1NBmaE%2FdmXqf7moqCoAygAUPAktAiEA%2FYabP6kc4Bdi3%2Brgax20JPzGUCEg42gXOMi%2B7IQMvskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktZOAmLh0yBXkzvCrcA1UQTamCkYPd56vwuqxYBYHjv0z0Yub1APYGpW8ouB5UCvd4XnJ%2BzqSmE6CaOw6%2FW19T0w6ox276bjx2263L5XAlU4A7AuqC3wD7%2F%2BsgVCL7xY8yBq53iPKBxaE61v1uI5yBnoVqVJ0sTn4IuBTdkqy%2BYuQx2Rm1ORQjFHYkWtX2IU6UcxNDL09xAeFtbbgXTGVooJVo4WBD9%2FGfsLFvSDejcV26uMc9WD4%2B8HkyaDlhAITRgrqzDZuUHF2JrdTb180zbBCih%2BQyjY%2F6WU7eT8l%2F%2B%2FzegG8Z9JQ3evSm3RrLTXqx5nMkz6Wji0CXBxXeju6I3h%2BUf81I%2FjcTxgO7FSS9mucWGB19WmqjRyVvj%2FwVKtAKHrjVUy0xk9WP%2FQ72Ehkjjm%2FzuSKJPlXB6t5F7i3Gf%2FcttespYwMRCWnTOsuHJIZycwDk0DK5J%2B3CF7EYcqWATwDUqhafVsxFXKqgY7I0PcYw6ga7lZD8qBkfDgel0dLnSvRMBYHCE37oFmmEwly1xU4Dym8u46YRNDa7%2FFkpG19DI%2FVdwZ7fofJpowpKsyZFy2x1%2BA0sbrCybnHNgQ9ehPCxkx2aHKAjb0Qn%2BNA4i5e5YX5P002sSkLsC7WHMpPQRf2n70%2BbzydNMLqBvsMGOqUBi55awt387zHBHjRso6G5MF0uD3BFLWUKCMy3ZXN50A56YwD9wym0%2ByVt%2BSe7mGlY92I%2BmYyONiHd04OXnnwKoD5cmwOnEtBA%2BQiKCcMa1UKwr%2FihS2QOa25fkzMgUE57QbKkZ%2FzXBrqe14tOyTeeoDjS3fwXMf%2Fe3yizuaOASV3TKTqTRBVMg%2FbYeoJ9duzwYLYTQViqYpf%2BJG%2FhXpHlXdRM26W2&X-Amz-Signature=b46bdfc66f0bdce54a68d7cd9466426e17d9e586e5a6b86b2adf737e602b9d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRFZTPG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6bkpls16nXcC4aj1NBmaE%2FdmXqf7moqCoAygAUPAktAiEA%2FYabP6kc4Bdi3%2Brgax20JPzGUCEg42gXOMi%2B7IQMvskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktZOAmLh0yBXkzvCrcA1UQTamCkYPd56vwuqxYBYHjv0z0Yub1APYGpW8ouB5UCvd4XnJ%2BzqSmE6CaOw6%2FW19T0w6ox276bjx2263L5XAlU4A7AuqC3wD7%2F%2BsgVCL7xY8yBq53iPKBxaE61v1uI5yBnoVqVJ0sTn4IuBTdkqy%2BYuQx2Rm1ORQjFHYkWtX2IU6UcxNDL09xAeFtbbgXTGVooJVo4WBD9%2FGfsLFvSDejcV26uMc9WD4%2B8HkyaDlhAITRgrqzDZuUHF2JrdTb180zbBCih%2BQyjY%2F6WU7eT8l%2F%2B%2FzegG8Z9JQ3evSm3RrLTXqx5nMkz6Wji0CXBxXeju6I3h%2BUf81I%2FjcTxgO7FSS9mucWGB19WmqjRyVvj%2FwVKtAKHrjVUy0xk9WP%2FQ72Ehkjjm%2FzuSKJPlXB6t5F7i3Gf%2FcttespYwMRCWnTOsuHJIZycwDk0DK5J%2B3CF7EYcqWATwDUqhafVsxFXKqgY7I0PcYw6ga7lZD8qBkfDgel0dLnSvRMBYHCE37oFmmEwly1xU4Dym8u46YRNDa7%2FFkpG19DI%2FVdwZ7fofJpowpKsyZFy2x1%2BA0sbrCybnHNgQ9ehPCxkx2aHKAjb0Qn%2BNA4i5e5YX5P002sSkLsC7WHMpPQRf2n70%2BbzydNMLqBvsMGOqUBi55awt387zHBHjRso6G5MF0uD3BFLWUKCMy3ZXN50A56YwD9wym0%2ByVt%2BSe7mGlY92I%2BmYyONiHd04OXnnwKoD5cmwOnEtBA%2BQiKCcMa1UKwr%2FihS2QOa25fkzMgUE57QbKkZ%2FzXBrqe14tOyTeeoDjS3fwXMf%2Fe3yizuaOASV3TKTqTRBVMg%2FbYeoJ9duzwYLYTQViqYpf%2BJG%2FhXpHlXdRM26W2&X-Amz-Signature=7fbb0e741f1ee06e5fa7e5d8800719f0d6141b0838fbdd38647b392d5672190e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRFZTPG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6bkpls16nXcC4aj1NBmaE%2FdmXqf7moqCoAygAUPAktAiEA%2FYabP6kc4Bdi3%2Brgax20JPzGUCEg42gXOMi%2B7IQMvskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktZOAmLh0yBXkzvCrcA1UQTamCkYPd56vwuqxYBYHjv0z0Yub1APYGpW8ouB5UCvd4XnJ%2BzqSmE6CaOw6%2FW19T0w6ox276bjx2263L5XAlU4A7AuqC3wD7%2F%2BsgVCL7xY8yBq53iPKBxaE61v1uI5yBnoVqVJ0sTn4IuBTdkqy%2BYuQx2Rm1ORQjFHYkWtX2IU6UcxNDL09xAeFtbbgXTGVooJVo4WBD9%2FGfsLFvSDejcV26uMc9WD4%2B8HkyaDlhAITRgrqzDZuUHF2JrdTb180zbBCih%2BQyjY%2F6WU7eT8l%2F%2B%2FzegG8Z9JQ3evSm3RrLTXqx5nMkz6Wji0CXBxXeju6I3h%2BUf81I%2FjcTxgO7FSS9mucWGB19WmqjRyVvj%2FwVKtAKHrjVUy0xk9WP%2FQ72Ehkjjm%2FzuSKJPlXB6t5F7i3Gf%2FcttespYwMRCWnTOsuHJIZycwDk0DK5J%2B3CF7EYcqWATwDUqhafVsxFXKqgY7I0PcYw6ga7lZD8qBkfDgel0dLnSvRMBYHCE37oFmmEwly1xU4Dym8u46YRNDa7%2FFkpG19DI%2FVdwZ7fofJpowpKsyZFy2x1%2BA0sbrCybnHNgQ9ehPCxkx2aHKAjb0Qn%2BNA4i5e5YX5P002sSkLsC7WHMpPQRf2n70%2BbzydNMLqBvsMGOqUBi55awt387zHBHjRso6G5MF0uD3BFLWUKCMy3ZXN50A56YwD9wym0%2ByVt%2BSe7mGlY92I%2BmYyONiHd04OXnnwKoD5cmwOnEtBA%2BQiKCcMa1UKwr%2FihS2QOa25fkzMgUE57QbKkZ%2FzXBrqe14tOyTeeoDjS3fwXMf%2Fe3yizuaOASV3TKTqTRBVMg%2FbYeoJ9duzwYLYTQViqYpf%2BJG%2FhXpHlXdRM26W2&X-Amz-Signature=778fe8c7cb52f55b310d9dfe3dd513f0144e1cb698fd9dbd28decbda2150a5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRFZTPG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6bkpls16nXcC4aj1NBmaE%2FdmXqf7moqCoAygAUPAktAiEA%2FYabP6kc4Bdi3%2Brgax20JPzGUCEg42gXOMi%2B7IQMvskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktZOAmLh0yBXkzvCrcA1UQTamCkYPd56vwuqxYBYHjv0z0Yub1APYGpW8ouB5UCvd4XnJ%2BzqSmE6CaOw6%2FW19T0w6ox276bjx2263L5XAlU4A7AuqC3wD7%2F%2BsgVCL7xY8yBq53iPKBxaE61v1uI5yBnoVqVJ0sTn4IuBTdkqy%2BYuQx2Rm1ORQjFHYkWtX2IU6UcxNDL09xAeFtbbgXTGVooJVo4WBD9%2FGfsLFvSDejcV26uMc9WD4%2B8HkyaDlhAITRgrqzDZuUHF2JrdTb180zbBCih%2BQyjY%2F6WU7eT8l%2F%2B%2FzegG8Z9JQ3evSm3RrLTXqx5nMkz6Wji0CXBxXeju6I3h%2BUf81I%2FjcTxgO7FSS9mucWGB19WmqjRyVvj%2FwVKtAKHrjVUy0xk9WP%2FQ72Ehkjjm%2FzuSKJPlXB6t5F7i3Gf%2FcttespYwMRCWnTOsuHJIZycwDk0DK5J%2B3CF7EYcqWATwDUqhafVsxFXKqgY7I0PcYw6ga7lZD8qBkfDgel0dLnSvRMBYHCE37oFmmEwly1xU4Dym8u46YRNDa7%2FFkpG19DI%2FVdwZ7fofJpowpKsyZFy2x1%2BA0sbrCybnHNgQ9ehPCxkx2aHKAjb0Qn%2BNA4i5e5YX5P002sSkLsC7WHMpPQRf2n70%2BbzydNMLqBvsMGOqUBi55awt387zHBHjRso6G5MF0uD3BFLWUKCMy3ZXN50A56YwD9wym0%2ByVt%2BSe7mGlY92I%2BmYyONiHd04OXnnwKoD5cmwOnEtBA%2BQiKCcMa1UKwr%2FihS2QOa25fkzMgUE57QbKkZ%2FzXBrqe14tOyTeeoDjS3fwXMf%2Fe3yizuaOASV3TKTqTRBVMg%2FbYeoJ9duzwYLYTQViqYpf%2BJG%2FhXpHlXdRM26W2&X-Amz-Signature=5e54a25350fd45a2f15f485680303f5d7001e1dcb58a6cfab09b94700999f47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRFZTPG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6bkpls16nXcC4aj1NBmaE%2FdmXqf7moqCoAygAUPAktAiEA%2FYabP6kc4Bdi3%2Brgax20JPzGUCEg42gXOMi%2B7IQMvskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktZOAmLh0yBXkzvCrcA1UQTamCkYPd56vwuqxYBYHjv0z0Yub1APYGpW8ouB5UCvd4XnJ%2BzqSmE6CaOw6%2FW19T0w6ox276bjx2263L5XAlU4A7AuqC3wD7%2F%2BsgVCL7xY8yBq53iPKBxaE61v1uI5yBnoVqVJ0sTn4IuBTdkqy%2BYuQx2Rm1ORQjFHYkWtX2IU6UcxNDL09xAeFtbbgXTGVooJVo4WBD9%2FGfsLFvSDejcV26uMc9WD4%2B8HkyaDlhAITRgrqzDZuUHF2JrdTb180zbBCih%2BQyjY%2F6WU7eT8l%2F%2B%2FzegG8Z9JQ3evSm3RrLTXqx5nMkz6Wji0CXBxXeju6I3h%2BUf81I%2FjcTxgO7FSS9mucWGB19WmqjRyVvj%2FwVKtAKHrjVUy0xk9WP%2FQ72Ehkjjm%2FzuSKJPlXB6t5F7i3Gf%2FcttespYwMRCWnTOsuHJIZycwDk0DK5J%2B3CF7EYcqWATwDUqhafVsxFXKqgY7I0PcYw6ga7lZD8qBkfDgel0dLnSvRMBYHCE37oFmmEwly1xU4Dym8u46YRNDa7%2FFkpG19DI%2FVdwZ7fofJpowpKsyZFy2x1%2BA0sbrCybnHNgQ9ehPCxkx2aHKAjb0Qn%2BNA4i5e5YX5P002sSkLsC7WHMpPQRf2n70%2BbzydNMLqBvsMGOqUBi55awt387zHBHjRso6G5MF0uD3BFLWUKCMy3ZXN50A56YwD9wym0%2ByVt%2BSe7mGlY92I%2BmYyONiHd04OXnnwKoD5cmwOnEtBA%2BQiKCcMa1UKwr%2FihS2QOa25fkzMgUE57QbKkZ%2FzXBrqe14tOyTeeoDjS3fwXMf%2Fe3yizuaOASV3TKTqTRBVMg%2FbYeoJ9duzwYLYTQViqYpf%2BJG%2FhXpHlXdRM26W2&X-Amz-Signature=d4a955edba1a71ca9f36369230ab6c87aeaaa0ba8506c6b1d9ecbf1e6a38a64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRFZTPG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6bkpls16nXcC4aj1NBmaE%2FdmXqf7moqCoAygAUPAktAiEA%2FYabP6kc4Bdi3%2Brgax20JPzGUCEg42gXOMi%2B7IQMvskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktZOAmLh0yBXkzvCrcA1UQTamCkYPd56vwuqxYBYHjv0z0Yub1APYGpW8ouB5UCvd4XnJ%2BzqSmE6CaOw6%2FW19T0w6ox276bjx2263L5XAlU4A7AuqC3wD7%2F%2BsgVCL7xY8yBq53iPKBxaE61v1uI5yBnoVqVJ0sTn4IuBTdkqy%2BYuQx2Rm1ORQjFHYkWtX2IU6UcxNDL09xAeFtbbgXTGVooJVo4WBD9%2FGfsLFvSDejcV26uMc9WD4%2B8HkyaDlhAITRgrqzDZuUHF2JrdTb180zbBCih%2BQyjY%2F6WU7eT8l%2F%2B%2FzegG8Z9JQ3evSm3RrLTXqx5nMkz6Wji0CXBxXeju6I3h%2BUf81I%2FjcTxgO7FSS9mucWGB19WmqjRyVvj%2FwVKtAKHrjVUy0xk9WP%2FQ72Ehkjjm%2FzuSKJPlXB6t5F7i3Gf%2FcttespYwMRCWnTOsuHJIZycwDk0DK5J%2B3CF7EYcqWATwDUqhafVsxFXKqgY7I0PcYw6ga7lZD8qBkfDgel0dLnSvRMBYHCE37oFmmEwly1xU4Dym8u46YRNDa7%2FFkpG19DI%2FVdwZ7fofJpowpKsyZFy2x1%2BA0sbrCybnHNgQ9ehPCxkx2aHKAjb0Qn%2BNA4i5e5YX5P002sSkLsC7WHMpPQRf2n70%2BbzydNMLqBvsMGOqUBi55awt387zHBHjRso6G5MF0uD3BFLWUKCMy3ZXN50A56YwD9wym0%2ByVt%2BSe7mGlY92I%2BmYyONiHd04OXnnwKoD5cmwOnEtBA%2BQiKCcMa1UKwr%2FihS2QOa25fkzMgUE57QbKkZ%2FzXBrqe14tOyTeeoDjS3fwXMf%2Fe3yizuaOASV3TKTqTRBVMg%2FbYeoJ9duzwYLYTQViqYpf%2BJG%2FhXpHlXdRM26W2&X-Amz-Signature=df43c3f525597d30569e76946dfd2096588c9610bb37a9f9baab96547d44fc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRFZTPG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6bkpls16nXcC4aj1NBmaE%2FdmXqf7moqCoAygAUPAktAiEA%2FYabP6kc4Bdi3%2Brgax20JPzGUCEg42gXOMi%2B7IQMvskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktZOAmLh0yBXkzvCrcA1UQTamCkYPd56vwuqxYBYHjv0z0Yub1APYGpW8ouB5UCvd4XnJ%2BzqSmE6CaOw6%2FW19T0w6ox276bjx2263L5XAlU4A7AuqC3wD7%2F%2BsgVCL7xY8yBq53iPKBxaE61v1uI5yBnoVqVJ0sTn4IuBTdkqy%2BYuQx2Rm1ORQjFHYkWtX2IU6UcxNDL09xAeFtbbgXTGVooJVo4WBD9%2FGfsLFvSDejcV26uMc9WD4%2B8HkyaDlhAITRgrqzDZuUHF2JrdTb180zbBCih%2BQyjY%2F6WU7eT8l%2F%2B%2FzegG8Z9JQ3evSm3RrLTXqx5nMkz6Wji0CXBxXeju6I3h%2BUf81I%2FjcTxgO7FSS9mucWGB19WmqjRyVvj%2FwVKtAKHrjVUy0xk9WP%2FQ72Ehkjjm%2FzuSKJPlXB6t5F7i3Gf%2FcttespYwMRCWnTOsuHJIZycwDk0DK5J%2B3CF7EYcqWATwDUqhafVsxFXKqgY7I0PcYw6ga7lZD8qBkfDgel0dLnSvRMBYHCE37oFmmEwly1xU4Dym8u46YRNDa7%2FFkpG19DI%2FVdwZ7fofJpowpKsyZFy2x1%2BA0sbrCybnHNgQ9ehPCxkx2aHKAjb0Qn%2BNA4i5e5YX5P002sSkLsC7WHMpPQRf2n70%2BbzydNMLqBvsMGOqUBi55awt387zHBHjRso6G5MF0uD3BFLWUKCMy3ZXN50A56YwD9wym0%2ByVt%2BSe7mGlY92I%2BmYyONiHd04OXnnwKoD5cmwOnEtBA%2BQiKCcMa1UKwr%2FihS2QOa25fkzMgUE57QbKkZ%2FzXBrqe14tOyTeeoDjS3fwXMf%2Fe3yizuaOASV3TKTqTRBVMg%2FbYeoJ9duzwYLYTQViqYpf%2BJG%2FhXpHlXdRM26W2&X-Amz-Signature=e674e237895a7edea0f795d128d7e1e15a16db48e12dfe53fd39fd32b1f7c1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
