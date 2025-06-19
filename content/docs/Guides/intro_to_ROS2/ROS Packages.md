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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665772VROF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5CUhHLNhR4eWVYLE%2BPb4P86%2FMgWlTAI9jUFjwHSM%2FQIge28VXpZN9j5XfSeJ6sdFOoozTBz%2BohM0O5%2FZfENkgFUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOryBk2hCgO3kthircAxF5MnA0vX%2B2ZvqWsqy7Ez%2FcoygUGrVBW8%2BCI%2FJaiyy%2FvtXjt9wZUYFPxlGTlxwYVGf9%2Bwc2KmBgVxvWk3w6bMnHZICALKKVh2U3dSm5lgnnFtULxjqHghi7jsGlGpzpQqkbl68stzquWUnDhdVSV1jGCzFWRiB5OoNZk89jPTm3SBueoC0vXq9HCTJw58CEPkaHxbDioLAryASUgilVPrFyJgZvkE6755bISdJNf4wdF0p1GHjZdU3LS3oOCqvIskPundnq5h5%2FZH8pfZF9LbR6YddCRnNeV5%2BBpGmAM2NJRuJn2y5ER4X1gx1P%2BBtD2KrtB8wktxTEm8FdVL45ISbsmKrhuSa4c90cDRzfR2NxRo%2FDCOMDa4GzaT7%2BfS1XsgS1zkuqW24GN7aTPAgUJ%2BKjaR%2FszYmqrno4rHBi01Ve9%2Bo6iQBkhP398mDRIij0gHKrizj9bIb%2Fpb6by2NFKH2RnHcK6xJjq7qXWd24wqiI%2ByEVcEEoFZdzPyvJny4p%2BPXc0yu4WXqwKCmu5n9vLh9yEtwJoSzDmoHtwu5e%2B3rQqbCJboactvVi5F298v2MgSs4zYEZ9C7jSa%2BHgGfFHotVgTtzK%2BSg1l0kSdbvq9z52xpVbkb%2F2j2zTazoMJyhzcIGOqUB9qyg70K0%2FQcOfK2e6fN6KXiqzsgzcLjTrPzxHpxU7yDDRG4n7pYvkUB2EYl0irkiqE%2F7WqvjbuZXJYayZMs%2Bjp%2BC5N2itQ%2FWPSwNZygj4NHINZ9L%2BZSmOyj80LOGt%2Bh%2B0fJaTCZOv8e%2FCseplVHgM7Sjlfn1wr%2Feh4%2F2PY5hdW0Rl0pGum0z9FozgwS7pek1Hs1uRfVsIFaPZ0tMgZtI94k1Tn0f&X-Amz-Signature=263ff66886b578b3bb02bf70b32ef6588f1f2c11d585b23421c305c488afbf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665772VROF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5CUhHLNhR4eWVYLE%2BPb4P86%2FMgWlTAI9jUFjwHSM%2FQIge28VXpZN9j5XfSeJ6sdFOoozTBz%2BohM0O5%2FZfENkgFUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOryBk2hCgO3kthircAxF5MnA0vX%2B2ZvqWsqy7Ez%2FcoygUGrVBW8%2BCI%2FJaiyy%2FvtXjt9wZUYFPxlGTlxwYVGf9%2Bwc2KmBgVxvWk3w6bMnHZICALKKVh2U3dSm5lgnnFtULxjqHghi7jsGlGpzpQqkbl68stzquWUnDhdVSV1jGCzFWRiB5OoNZk89jPTm3SBueoC0vXq9HCTJw58CEPkaHxbDioLAryASUgilVPrFyJgZvkE6755bISdJNf4wdF0p1GHjZdU3LS3oOCqvIskPundnq5h5%2FZH8pfZF9LbR6YddCRnNeV5%2BBpGmAM2NJRuJn2y5ER4X1gx1P%2BBtD2KrtB8wktxTEm8FdVL45ISbsmKrhuSa4c90cDRzfR2NxRo%2FDCOMDa4GzaT7%2BfS1XsgS1zkuqW24GN7aTPAgUJ%2BKjaR%2FszYmqrno4rHBi01Ve9%2Bo6iQBkhP398mDRIij0gHKrizj9bIb%2Fpb6by2NFKH2RnHcK6xJjq7qXWd24wqiI%2ByEVcEEoFZdzPyvJny4p%2BPXc0yu4WXqwKCmu5n9vLh9yEtwJoSzDmoHtwu5e%2B3rQqbCJboactvVi5F298v2MgSs4zYEZ9C7jSa%2BHgGfFHotVgTtzK%2BSg1l0kSdbvq9z52xpVbkb%2F2j2zTazoMJyhzcIGOqUB9qyg70K0%2FQcOfK2e6fN6KXiqzsgzcLjTrPzxHpxU7yDDRG4n7pYvkUB2EYl0irkiqE%2F7WqvjbuZXJYayZMs%2Bjp%2BC5N2itQ%2FWPSwNZygj4NHINZ9L%2BZSmOyj80LOGt%2Bh%2B0fJaTCZOv8e%2FCseplVHgM7Sjlfn1wr%2Feh4%2F2PY5hdW0Rl0pGum0z9FozgwS7pek1Hs1uRfVsIFaPZ0tMgZtI94k1Tn0f&X-Amz-Signature=118498294c6594519fa4839d601b4ff3c3f29d40b1079bf1f1d3952e34d85267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665772VROF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5CUhHLNhR4eWVYLE%2BPb4P86%2FMgWlTAI9jUFjwHSM%2FQIge28VXpZN9j5XfSeJ6sdFOoozTBz%2BohM0O5%2FZfENkgFUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOryBk2hCgO3kthircAxF5MnA0vX%2B2ZvqWsqy7Ez%2FcoygUGrVBW8%2BCI%2FJaiyy%2FvtXjt9wZUYFPxlGTlxwYVGf9%2Bwc2KmBgVxvWk3w6bMnHZICALKKVh2U3dSm5lgnnFtULxjqHghi7jsGlGpzpQqkbl68stzquWUnDhdVSV1jGCzFWRiB5OoNZk89jPTm3SBueoC0vXq9HCTJw58CEPkaHxbDioLAryASUgilVPrFyJgZvkE6755bISdJNf4wdF0p1GHjZdU3LS3oOCqvIskPundnq5h5%2FZH8pfZF9LbR6YddCRnNeV5%2BBpGmAM2NJRuJn2y5ER4X1gx1P%2BBtD2KrtB8wktxTEm8FdVL45ISbsmKrhuSa4c90cDRzfR2NxRo%2FDCOMDa4GzaT7%2BfS1XsgS1zkuqW24GN7aTPAgUJ%2BKjaR%2FszYmqrno4rHBi01Ve9%2Bo6iQBkhP398mDRIij0gHKrizj9bIb%2Fpb6by2NFKH2RnHcK6xJjq7qXWd24wqiI%2ByEVcEEoFZdzPyvJny4p%2BPXc0yu4WXqwKCmu5n9vLh9yEtwJoSzDmoHtwu5e%2B3rQqbCJboactvVi5F298v2MgSs4zYEZ9C7jSa%2BHgGfFHotVgTtzK%2BSg1l0kSdbvq9z52xpVbkb%2F2j2zTazoMJyhzcIGOqUB9qyg70K0%2FQcOfK2e6fN6KXiqzsgzcLjTrPzxHpxU7yDDRG4n7pYvkUB2EYl0irkiqE%2F7WqvjbuZXJYayZMs%2Bjp%2BC5N2itQ%2FWPSwNZygj4NHINZ9L%2BZSmOyj80LOGt%2Bh%2B0fJaTCZOv8e%2FCseplVHgM7Sjlfn1wr%2Feh4%2F2PY5hdW0Rl0pGum0z9FozgwS7pek1Hs1uRfVsIFaPZ0tMgZtI94k1Tn0f&X-Amz-Signature=953b64ba0355c1254d4d780dda35a59880bf76344b54eb0c7ed9866365ff8084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665772VROF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5CUhHLNhR4eWVYLE%2BPb4P86%2FMgWlTAI9jUFjwHSM%2FQIge28VXpZN9j5XfSeJ6sdFOoozTBz%2BohM0O5%2FZfENkgFUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOryBk2hCgO3kthircAxF5MnA0vX%2B2ZvqWsqy7Ez%2FcoygUGrVBW8%2BCI%2FJaiyy%2FvtXjt9wZUYFPxlGTlxwYVGf9%2Bwc2KmBgVxvWk3w6bMnHZICALKKVh2U3dSm5lgnnFtULxjqHghi7jsGlGpzpQqkbl68stzquWUnDhdVSV1jGCzFWRiB5OoNZk89jPTm3SBueoC0vXq9HCTJw58CEPkaHxbDioLAryASUgilVPrFyJgZvkE6755bISdJNf4wdF0p1GHjZdU3LS3oOCqvIskPundnq5h5%2FZH8pfZF9LbR6YddCRnNeV5%2BBpGmAM2NJRuJn2y5ER4X1gx1P%2BBtD2KrtB8wktxTEm8FdVL45ISbsmKrhuSa4c90cDRzfR2NxRo%2FDCOMDa4GzaT7%2BfS1XsgS1zkuqW24GN7aTPAgUJ%2BKjaR%2FszYmqrno4rHBi01Ve9%2Bo6iQBkhP398mDRIij0gHKrizj9bIb%2Fpb6by2NFKH2RnHcK6xJjq7qXWd24wqiI%2ByEVcEEoFZdzPyvJny4p%2BPXc0yu4WXqwKCmu5n9vLh9yEtwJoSzDmoHtwu5e%2B3rQqbCJboactvVi5F298v2MgSs4zYEZ9C7jSa%2BHgGfFHotVgTtzK%2BSg1l0kSdbvq9z52xpVbkb%2F2j2zTazoMJyhzcIGOqUB9qyg70K0%2FQcOfK2e6fN6KXiqzsgzcLjTrPzxHpxU7yDDRG4n7pYvkUB2EYl0irkiqE%2F7WqvjbuZXJYayZMs%2Bjp%2BC5N2itQ%2FWPSwNZygj4NHINZ9L%2BZSmOyj80LOGt%2Bh%2B0fJaTCZOv8e%2FCseplVHgM7Sjlfn1wr%2Feh4%2F2PY5hdW0Rl0pGum0z9FozgwS7pek1Hs1uRfVsIFaPZ0tMgZtI94k1Tn0f&X-Amz-Signature=0be3c9220ad55e11c0c5fd4823048e5c2b2c48ece2d9d9f0b98f14658bae079b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665772VROF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5CUhHLNhR4eWVYLE%2BPb4P86%2FMgWlTAI9jUFjwHSM%2FQIge28VXpZN9j5XfSeJ6sdFOoozTBz%2BohM0O5%2FZfENkgFUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOryBk2hCgO3kthircAxF5MnA0vX%2B2ZvqWsqy7Ez%2FcoygUGrVBW8%2BCI%2FJaiyy%2FvtXjt9wZUYFPxlGTlxwYVGf9%2Bwc2KmBgVxvWk3w6bMnHZICALKKVh2U3dSm5lgnnFtULxjqHghi7jsGlGpzpQqkbl68stzquWUnDhdVSV1jGCzFWRiB5OoNZk89jPTm3SBueoC0vXq9HCTJw58CEPkaHxbDioLAryASUgilVPrFyJgZvkE6755bISdJNf4wdF0p1GHjZdU3LS3oOCqvIskPundnq5h5%2FZH8pfZF9LbR6YddCRnNeV5%2BBpGmAM2NJRuJn2y5ER4X1gx1P%2BBtD2KrtB8wktxTEm8FdVL45ISbsmKrhuSa4c90cDRzfR2NxRo%2FDCOMDa4GzaT7%2BfS1XsgS1zkuqW24GN7aTPAgUJ%2BKjaR%2FszYmqrno4rHBi01Ve9%2Bo6iQBkhP398mDRIij0gHKrizj9bIb%2Fpb6by2NFKH2RnHcK6xJjq7qXWd24wqiI%2ByEVcEEoFZdzPyvJny4p%2BPXc0yu4WXqwKCmu5n9vLh9yEtwJoSzDmoHtwu5e%2B3rQqbCJboactvVi5F298v2MgSs4zYEZ9C7jSa%2BHgGfFHotVgTtzK%2BSg1l0kSdbvq9z52xpVbkb%2F2j2zTazoMJyhzcIGOqUB9qyg70K0%2FQcOfK2e6fN6KXiqzsgzcLjTrPzxHpxU7yDDRG4n7pYvkUB2EYl0irkiqE%2F7WqvjbuZXJYayZMs%2Bjp%2BC5N2itQ%2FWPSwNZygj4NHINZ9L%2BZSmOyj80LOGt%2Bh%2B0fJaTCZOv8e%2FCseplVHgM7Sjlfn1wr%2Feh4%2F2PY5hdW0Rl0pGum0z9FozgwS7pek1Hs1uRfVsIFaPZ0tMgZtI94k1Tn0f&X-Amz-Signature=3d54f6a971adf6a704d687f1a6b1e56d77e2bc79fb7b424f0020bea87d3032c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665772VROF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5CUhHLNhR4eWVYLE%2BPb4P86%2FMgWlTAI9jUFjwHSM%2FQIge28VXpZN9j5XfSeJ6sdFOoozTBz%2BohM0O5%2FZfENkgFUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOryBk2hCgO3kthircAxF5MnA0vX%2B2ZvqWsqy7Ez%2FcoygUGrVBW8%2BCI%2FJaiyy%2FvtXjt9wZUYFPxlGTlxwYVGf9%2Bwc2KmBgVxvWk3w6bMnHZICALKKVh2U3dSm5lgnnFtULxjqHghi7jsGlGpzpQqkbl68stzquWUnDhdVSV1jGCzFWRiB5OoNZk89jPTm3SBueoC0vXq9HCTJw58CEPkaHxbDioLAryASUgilVPrFyJgZvkE6755bISdJNf4wdF0p1GHjZdU3LS3oOCqvIskPundnq5h5%2FZH8pfZF9LbR6YddCRnNeV5%2BBpGmAM2NJRuJn2y5ER4X1gx1P%2BBtD2KrtB8wktxTEm8FdVL45ISbsmKrhuSa4c90cDRzfR2NxRo%2FDCOMDa4GzaT7%2BfS1XsgS1zkuqW24GN7aTPAgUJ%2BKjaR%2FszYmqrno4rHBi01Ve9%2Bo6iQBkhP398mDRIij0gHKrizj9bIb%2Fpb6by2NFKH2RnHcK6xJjq7qXWd24wqiI%2ByEVcEEoFZdzPyvJny4p%2BPXc0yu4WXqwKCmu5n9vLh9yEtwJoSzDmoHtwu5e%2B3rQqbCJboactvVi5F298v2MgSs4zYEZ9C7jSa%2BHgGfFHotVgTtzK%2BSg1l0kSdbvq9z52xpVbkb%2F2j2zTazoMJyhzcIGOqUB9qyg70K0%2FQcOfK2e6fN6KXiqzsgzcLjTrPzxHpxU7yDDRG4n7pYvkUB2EYl0irkiqE%2F7WqvjbuZXJYayZMs%2Bjp%2BC5N2itQ%2FWPSwNZygj4NHINZ9L%2BZSmOyj80LOGt%2Bh%2B0fJaTCZOv8e%2FCseplVHgM7Sjlfn1wr%2Feh4%2F2PY5hdW0Rl0pGum0z9FozgwS7pek1Hs1uRfVsIFaPZ0tMgZtI94k1Tn0f&X-Amz-Signature=ae1f1c267a2cfef7cc11cf9d9109d817869e7923423c453ce4170d7f4029f712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665772VROF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ5CUhHLNhR4eWVYLE%2BPb4P86%2FMgWlTAI9jUFjwHSM%2FQIge28VXpZN9j5XfSeJ6sdFOoozTBz%2BohM0O5%2FZfENkgFUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnOryBk2hCgO3kthircAxF5MnA0vX%2B2ZvqWsqy7Ez%2FcoygUGrVBW8%2BCI%2FJaiyy%2FvtXjt9wZUYFPxlGTlxwYVGf9%2Bwc2KmBgVxvWk3w6bMnHZICALKKVh2U3dSm5lgnnFtULxjqHghi7jsGlGpzpQqkbl68stzquWUnDhdVSV1jGCzFWRiB5OoNZk89jPTm3SBueoC0vXq9HCTJw58CEPkaHxbDioLAryASUgilVPrFyJgZvkE6755bISdJNf4wdF0p1GHjZdU3LS3oOCqvIskPundnq5h5%2FZH8pfZF9LbR6YddCRnNeV5%2BBpGmAM2NJRuJn2y5ER4X1gx1P%2BBtD2KrtB8wktxTEm8FdVL45ISbsmKrhuSa4c90cDRzfR2NxRo%2FDCOMDa4GzaT7%2BfS1XsgS1zkuqW24GN7aTPAgUJ%2BKjaR%2FszYmqrno4rHBi01Ve9%2Bo6iQBkhP398mDRIij0gHKrizj9bIb%2Fpb6by2NFKH2RnHcK6xJjq7qXWd24wqiI%2ByEVcEEoFZdzPyvJny4p%2BPXc0yu4WXqwKCmu5n9vLh9yEtwJoSzDmoHtwu5e%2B3rQqbCJboactvVi5F298v2MgSs4zYEZ9C7jSa%2BHgGfFHotVgTtzK%2BSg1l0kSdbvq9z52xpVbkb%2F2j2zTazoMJyhzcIGOqUB9qyg70K0%2FQcOfK2e6fN6KXiqzsgzcLjTrPzxHpxU7yDDRG4n7pYvkUB2EYl0irkiqE%2F7WqvjbuZXJYayZMs%2Bjp%2BC5N2itQ%2FWPSwNZygj4NHINZ9L%2BZSmOyj80LOGt%2Bh%2B0fJaTCZOv8e%2FCseplVHgM7Sjlfn1wr%2Feh4%2F2PY5hdW0Rl0pGum0z9FozgwS7pek1Hs1uRfVsIFaPZ0tMgZtI94k1Tn0f&X-Amz-Signature=2dc8321c07f598431003f46d57b1965f92b1562bdafa2f1567852184f3ee9a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
