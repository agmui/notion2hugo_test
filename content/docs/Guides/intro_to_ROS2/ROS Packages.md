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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEGTNNI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDK6727%2BhGCuvyztyOqzRtC%2BNKuB7NkJ8Tr3V%2FEqkmYoQIhAJR%2FNoyhQnEH0BSlZpnTrehkcFMys%2B48W%2BPOVqil9xHaKv8DCBEQABoMNjM3NDIzMTgzODA1IgycIVjGSzayN9wQTQcq3AO1ZlI8PzdDIS3JZjbgIJ%2B0OFUhKu6LJYVkCUwZeATxHzSUqQ%2FhfJIs7Z6iK35g9FKFQodEHu6LoVyTbsOHeCVukvwcNseAf3YteArfsj0wylz4aaZ8o9o8bi4OBXJS81Hy8lvDE%2FZMhXhROdtLpoBIIJrMCzhgpS%2Fh5V%2F2hdWbc5xzXtBXgcGXyuJXONhvZl%2FpEvsIJ8jhgTV0KqRa%2F9tGC2H4i42N6kd3BKByfADhwLUwA3ZrmF5RC9VBDUWi4er3%2FNO7%2BZ7azc4lfH%2BujOHuJKRUNoe5NlDSNRSSFAeDk2y4KvbDlTcgjiEaxZNR7rCYnCYZ7pz%2Fz9vr2Jb7Xb%2BZ0G2vwEugHQ8%2F1f%2FbTukEgeV7v9w2mhrA0or34xW2Je%2BMhLLjUH1wuFgqUyFEcpcL6SqfgED8aDae1jm2EC2QpcJMMpZKpFbVJKWCxlDbWk%2FTyJOsWFUNv0VXcZMt3%2FqklbGKo9HUZ8Q8kWuXm6feB0VC8GdLFrzoca141me4x%2F68G2dl854EyHgEeNW4SXYfvwv3xghbZOlnGi4Qj7G02bu4BMWPzJh34Ub3aKZp55P81QZPnwe71E0IkawidJg4PrTEpFaR41J9wiDwmp5oEgAh4pTLoDIGfqIy2DDWgMbBBjqkATPWVQygJBo0qMMjAwItohLUzGoVcvzHhFSyIPHaN8n0PE97MzE2P5uyjPtWDxpIcYiXjtAuD%2BWTjZB4szO0VrySS6ZM9VCQ79oFkExN7gNhCFnChPjPgEFGXfJFOvlWyGPiR4fuACbaP70Eb7bwOkjFE6gEhndvr2MjXfkIo60Wrc7NZi7nQts6xMJpyGIALQEqG15am3%2F7ciH3uPHwhiGhtC7Q&X-Amz-Signature=c47db769522f75185b60d4b3ba194d9e530338854b689d2861d531bd2e35d45b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEGTNNI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDK6727%2BhGCuvyztyOqzRtC%2BNKuB7NkJ8Tr3V%2FEqkmYoQIhAJR%2FNoyhQnEH0BSlZpnTrehkcFMys%2B48W%2BPOVqil9xHaKv8DCBEQABoMNjM3NDIzMTgzODA1IgycIVjGSzayN9wQTQcq3AO1ZlI8PzdDIS3JZjbgIJ%2B0OFUhKu6LJYVkCUwZeATxHzSUqQ%2FhfJIs7Z6iK35g9FKFQodEHu6LoVyTbsOHeCVukvwcNseAf3YteArfsj0wylz4aaZ8o9o8bi4OBXJS81Hy8lvDE%2FZMhXhROdtLpoBIIJrMCzhgpS%2Fh5V%2F2hdWbc5xzXtBXgcGXyuJXONhvZl%2FpEvsIJ8jhgTV0KqRa%2F9tGC2H4i42N6kd3BKByfADhwLUwA3ZrmF5RC9VBDUWi4er3%2FNO7%2BZ7azc4lfH%2BujOHuJKRUNoe5NlDSNRSSFAeDk2y4KvbDlTcgjiEaxZNR7rCYnCYZ7pz%2Fz9vr2Jb7Xb%2BZ0G2vwEugHQ8%2F1f%2FbTukEgeV7v9w2mhrA0or34xW2Je%2BMhLLjUH1wuFgqUyFEcpcL6SqfgED8aDae1jm2EC2QpcJMMpZKpFbVJKWCxlDbWk%2FTyJOsWFUNv0VXcZMt3%2FqklbGKo9HUZ8Q8kWuXm6feB0VC8GdLFrzoca141me4x%2F68G2dl854EyHgEeNW4SXYfvwv3xghbZOlnGi4Qj7G02bu4BMWPzJh34Ub3aKZp55P81QZPnwe71E0IkawidJg4PrTEpFaR41J9wiDwmp5oEgAh4pTLoDIGfqIy2DDWgMbBBjqkATPWVQygJBo0qMMjAwItohLUzGoVcvzHhFSyIPHaN8n0PE97MzE2P5uyjPtWDxpIcYiXjtAuD%2BWTjZB4szO0VrySS6ZM9VCQ79oFkExN7gNhCFnChPjPgEFGXfJFOvlWyGPiR4fuACbaP70Eb7bwOkjFE6gEhndvr2MjXfkIo60Wrc7NZi7nQts6xMJpyGIALQEqG15am3%2F7ciH3uPHwhiGhtC7Q&X-Amz-Signature=97900689791732a416828262736b339ea9bbbc7319b2506d8d6cb1007c063373&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEGTNNI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDK6727%2BhGCuvyztyOqzRtC%2BNKuB7NkJ8Tr3V%2FEqkmYoQIhAJR%2FNoyhQnEH0BSlZpnTrehkcFMys%2B48W%2BPOVqil9xHaKv8DCBEQABoMNjM3NDIzMTgzODA1IgycIVjGSzayN9wQTQcq3AO1ZlI8PzdDIS3JZjbgIJ%2B0OFUhKu6LJYVkCUwZeATxHzSUqQ%2FhfJIs7Z6iK35g9FKFQodEHu6LoVyTbsOHeCVukvwcNseAf3YteArfsj0wylz4aaZ8o9o8bi4OBXJS81Hy8lvDE%2FZMhXhROdtLpoBIIJrMCzhgpS%2Fh5V%2F2hdWbc5xzXtBXgcGXyuJXONhvZl%2FpEvsIJ8jhgTV0KqRa%2F9tGC2H4i42N6kd3BKByfADhwLUwA3ZrmF5RC9VBDUWi4er3%2FNO7%2BZ7azc4lfH%2BujOHuJKRUNoe5NlDSNRSSFAeDk2y4KvbDlTcgjiEaxZNR7rCYnCYZ7pz%2Fz9vr2Jb7Xb%2BZ0G2vwEugHQ8%2F1f%2FbTukEgeV7v9w2mhrA0or34xW2Je%2BMhLLjUH1wuFgqUyFEcpcL6SqfgED8aDae1jm2EC2QpcJMMpZKpFbVJKWCxlDbWk%2FTyJOsWFUNv0VXcZMt3%2FqklbGKo9HUZ8Q8kWuXm6feB0VC8GdLFrzoca141me4x%2F68G2dl854EyHgEeNW4SXYfvwv3xghbZOlnGi4Qj7G02bu4BMWPzJh34Ub3aKZp55P81QZPnwe71E0IkawidJg4PrTEpFaR41J9wiDwmp5oEgAh4pTLoDIGfqIy2DDWgMbBBjqkATPWVQygJBo0qMMjAwItohLUzGoVcvzHhFSyIPHaN8n0PE97MzE2P5uyjPtWDxpIcYiXjtAuD%2BWTjZB4szO0VrySS6ZM9VCQ79oFkExN7gNhCFnChPjPgEFGXfJFOvlWyGPiR4fuACbaP70Eb7bwOkjFE6gEhndvr2MjXfkIo60Wrc7NZi7nQts6xMJpyGIALQEqG15am3%2F7ciH3uPHwhiGhtC7Q&X-Amz-Signature=d7e1d2bdc83a448a57f39dd24b3cc60ae72b4895664298181aada68366205bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEGTNNI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDK6727%2BhGCuvyztyOqzRtC%2BNKuB7NkJ8Tr3V%2FEqkmYoQIhAJR%2FNoyhQnEH0BSlZpnTrehkcFMys%2B48W%2BPOVqil9xHaKv8DCBEQABoMNjM3NDIzMTgzODA1IgycIVjGSzayN9wQTQcq3AO1ZlI8PzdDIS3JZjbgIJ%2B0OFUhKu6LJYVkCUwZeATxHzSUqQ%2FhfJIs7Z6iK35g9FKFQodEHu6LoVyTbsOHeCVukvwcNseAf3YteArfsj0wylz4aaZ8o9o8bi4OBXJS81Hy8lvDE%2FZMhXhROdtLpoBIIJrMCzhgpS%2Fh5V%2F2hdWbc5xzXtBXgcGXyuJXONhvZl%2FpEvsIJ8jhgTV0KqRa%2F9tGC2H4i42N6kd3BKByfADhwLUwA3ZrmF5RC9VBDUWi4er3%2FNO7%2BZ7azc4lfH%2BujOHuJKRUNoe5NlDSNRSSFAeDk2y4KvbDlTcgjiEaxZNR7rCYnCYZ7pz%2Fz9vr2Jb7Xb%2BZ0G2vwEugHQ8%2F1f%2FbTukEgeV7v9w2mhrA0or34xW2Je%2BMhLLjUH1wuFgqUyFEcpcL6SqfgED8aDae1jm2EC2QpcJMMpZKpFbVJKWCxlDbWk%2FTyJOsWFUNv0VXcZMt3%2FqklbGKo9HUZ8Q8kWuXm6feB0VC8GdLFrzoca141me4x%2F68G2dl854EyHgEeNW4SXYfvwv3xghbZOlnGi4Qj7G02bu4BMWPzJh34Ub3aKZp55P81QZPnwe71E0IkawidJg4PrTEpFaR41J9wiDwmp5oEgAh4pTLoDIGfqIy2DDWgMbBBjqkATPWVQygJBo0qMMjAwItohLUzGoVcvzHhFSyIPHaN8n0PE97MzE2P5uyjPtWDxpIcYiXjtAuD%2BWTjZB4szO0VrySS6ZM9VCQ79oFkExN7gNhCFnChPjPgEFGXfJFOvlWyGPiR4fuACbaP70Eb7bwOkjFE6gEhndvr2MjXfkIo60Wrc7NZi7nQts6xMJpyGIALQEqG15am3%2F7ciH3uPHwhiGhtC7Q&X-Amz-Signature=5ee315c8da826fc45d3c78e31e2d5496eb44c4b86eff8f977311efa23e5f7ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEGTNNI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDK6727%2BhGCuvyztyOqzRtC%2BNKuB7NkJ8Tr3V%2FEqkmYoQIhAJR%2FNoyhQnEH0BSlZpnTrehkcFMys%2B48W%2BPOVqil9xHaKv8DCBEQABoMNjM3NDIzMTgzODA1IgycIVjGSzayN9wQTQcq3AO1ZlI8PzdDIS3JZjbgIJ%2B0OFUhKu6LJYVkCUwZeATxHzSUqQ%2FhfJIs7Z6iK35g9FKFQodEHu6LoVyTbsOHeCVukvwcNseAf3YteArfsj0wylz4aaZ8o9o8bi4OBXJS81Hy8lvDE%2FZMhXhROdtLpoBIIJrMCzhgpS%2Fh5V%2F2hdWbc5xzXtBXgcGXyuJXONhvZl%2FpEvsIJ8jhgTV0KqRa%2F9tGC2H4i42N6kd3BKByfADhwLUwA3ZrmF5RC9VBDUWi4er3%2FNO7%2BZ7azc4lfH%2BujOHuJKRUNoe5NlDSNRSSFAeDk2y4KvbDlTcgjiEaxZNR7rCYnCYZ7pz%2Fz9vr2Jb7Xb%2BZ0G2vwEugHQ8%2F1f%2FbTukEgeV7v9w2mhrA0or34xW2Je%2BMhLLjUH1wuFgqUyFEcpcL6SqfgED8aDae1jm2EC2QpcJMMpZKpFbVJKWCxlDbWk%2FTyJOsWFUNv0VXcZMt3%2FqklbGKo9HUZ8Q8kWuXm6feB0VC8GdLFrzoca141me4x%2F68G2dl854EyHgEeNW4SXYfvwv3xghbZOlnGi4Qj7G02bu4BMWPzJh34Ub3aKZp55P81QZPnwe71E0IkawidJg4PrTEpFaR41J9wiDwmp5oEgAh4pTLoDIGfqIy2DDWgMbBBjqkATPWVQygJBo0qMMjAwItohLUzGoVcvzHhFSyIPHaN8n0PE97MzE2P5uyjPtWDxpIcYiXjtAuD%2BWTjZB4szO0VrySS6ZM9VCQ79oFkExN7gNhCFnChPjPgEFGXfJFOvlWyGPiR4fuACbaP70Eb7bwOkjFE6gEhndvr2MjXfkIo60Wrc7NZi7nQts6xMJpyGIALQEqG15am3%2F7ciH3uPHwhiGhtC7Q&X-Amz-Signature=5d14508b32fa3a801bedbf5808f5650b88359a970bb1c563ee3b2084e2f59e46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEGTNNI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDK6727%2BhGCuvyztyOqzRtC%2BNKuB7NkJ8Tr3V%2FEqkmYoQIhAJR%2FNoyhQnEH0BSlZpnTrehkcFMys%2B48W%2BPOVqil9xHaKv8DCBEQABoMNjM3NDIzMTgzODA1IgycIVjGSzayN9wQTQcq3AO1ZlI8PzdDIS3JZjbgIJ%2B0OFUhKu6LJYVkCUwZeATxHzSUqQ%2FhfJIs7Z6iK35g9FKFQodEHu6LoVyTbsOHeCVukvwcNseAf3YteArfsj0wylz4aaZ8o9o8bi4OBXJS81Hy8lvDE%2FZMhXhROdtLpoBIIJrMCzhgpS%2Fh5V%2F2hdWbc5xzXtBXgcGXyuJXONhvZl%2FpEvsIJ8jhgTV0KqRa%2F9tGC2H4i42N6kd3BKByfADhwLUwA3ZrmF5RC9VBDUWi4er3%2FNO7%2BZ7azc4lfH%2BujOHuJKRUNoe5NlDSNRSSFAeDk2y4KvbDlTcgjiEaxZNR7rCYnCYZ7pz%2Fz9vr2Jb7Xb%2BZ0G2vwEugHQ8%2F1f%2FbTukEgeV7v9w2mhrA0or34xW2Je%2BMhLLjUH1wuFgqUyFEcpcL6SqfgED8aDae1jm2EC2QpcJMMpZKpFbVJKWCxlDbWk%2FTyJOsWFUNv0VXcZMt3%2FqklbGKo9HUZ8Q8kWuXm6feB0VC8GdLFrzoca141me4x%2F68G2dl854EyHgEeNW4SXYfvwv3xghbZOlnGi4Qj7G02bu4BMWPzJh34Ub3aKZp55P81QZPnwe71E0IkawidJg4PrTEpFaR41J9wiDwmp5oEgAh4pTLoDIGfqIy2DDWgMbBBjqkATPWVQygJBo0qMMjAwItohLUzGoVcvzHhFSyIPHaN8n0PE97MzE2P5uyjPtWDxpIcYiXjtAuD%2BWTjZB4szO0VrySS6ZM9VCQ79oFkExN7gNhCFnChPjPgEFGXfJFOvlWyGPiR4fuACbaP70Eb7bwOkjFE6gEhndvr2MjXfkIo60Wrc7NZi7nQts6xMJpyGIALQEqG15am3%2F7ciH3uPHwhiGhtC7Q&X-Amz-Signature=6955cb7e19a2b99e04a62f82f269a8e284dec87ceb1255a453e5e32ad3245400&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEGTNNI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDK6727%2BhGCuvyztyOqzRtC%2BNKuB7NkJ8Tr3V%2FEqkmYoQIhAJR%2FNoyhQnEH0BSlZpnTrehkcFMys%2B48W%2BPOVqil9xHaKv8DCBEQABoMNjM3NDIzMTgzODA1IgycIVjGSzayN9wQTQcq3AO1ZlI8PzdDIS3JZjbgIJ%2B0OFUhKu6LJYVkCUwZeATxHzSUqQ%2FhfJIs7Z6iK35g9FKFQodEHu6LoVyTbsOHeCVukvwcNseAf3YteArfsj0wylz4aaZ8o9o8bi4OBXJS81Hy8lvDE%2FZMhXhROdtLpoBIIJrMCzhgpS%2Fh5V%2F2hdWbc5xzXtBXgcGXyuJXONhvZl%2FpEvsIJ8jhgTV0KqRa%2F9tGC2H4i42N6kd3BKByfADhwLUwA3ZrmF5RC9VBDUWi4er3%2FNO7%2BZ7azc4lfH%2BujOHuJKRUNoe5NlDSNRSSFAeDk2y4KvbDlTcgjiEaxZNR7rCYnCYZ7pz%2Fz9vr2Jb7Xb%2BZ0G2vwEugHQ8%2F1f%2FbTukEgeV7v9w2mhrA0or34xW2Je%2BMhLLjUH1wuFgqUyFEcpcL6SqfgED8aDae1jm2EC2QpcJMMpZKpFbVJKWCxlDbWk%2FTyJOsWFUNv0VXcZMt3%2FqklbGKo9HUZ8Q8kWuXm6feB0VC8GdLFrzoca141me4x%2F68G2dl854EyHgEeNW4SXYfvwv3xghbZOlnGi4Qj7G02bu4BMWPzJh34Ub3aKZp55P81QZPnwe71E0IkawidJg4PrTEpFaR41J9wiDwmp5oEgAh4pTLoDIGfqIy2DDWgMbBBjqkATPWVQygJBo0qMMjAwItohLUzGoVcvzHhFSyIPHaN8n0PE97MzE2P5uyjPtWDxpIcYiXjtAuD%2BWTjZB4szO0VrySS6ZM9VCQ79oFkExN7gNhCFnChPjPgEFGXfJFOvlWyGPiR4fuACbaP70Eb7bwOkjFE6gEhndvr2MjXfkIo60Wrc7NZi7nQts6xMJpyGIALQEqG15am3%2F7ciH3uPHwhiGhtC7Q&X-Amz-Signature=452156360c2189c9a7d196690a27bcfcadc1abb66e885f9e9c525ec8116d73d1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
