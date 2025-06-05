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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTOWLD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaSYaCJv78nWq%2FIlu2cP%2FgG2oa0HrF2DrK1RqMQpzv0AiBul3U%2FaqEWI4jTEKFIEP4hgARb7tTnasQdKBjP3%2BSfnyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdr6uLBzRd8xcTPZ0KtwDw4YO93Uectqb17Bqz7cFl25MPi6JRN5ArAs3V8fYkw9di2DaOvP64jzikGlWMNiMq7knATKLJhElBGAtTMP2gOGm3cRg31GMDh0tJJ0Lv2KB0G3er2%2BM4v6aqwxbVwzEWRzMV94%2Bcpm5AYlat69TqSOe%2FYvp8bGEZzjO3G%2FBLZUHLoiyXVs2rfkJH%2B8fSHMVPYhe32SnekHoudlPoM5GT65WjYy1ygRmvY%2Br8hiiTp9HuKXtisPIbS154WcVm72lMPFlGjQCcwgnXMm8%2F36%2B2VSW2w3qBotWuH0U7lcxY3AIip0LeojA7hmUHJcZe5dblMfTNZE5DZodYoPRBAcyefaJ3pKTWEffSLTxZd3WoUYYOjETh8uJ7gAkK3B1HMRh7XwOGUrzSENFMUSi04MVdd%2FC2lo7DYyxqjVEQn7Nfof%2BhR8TBAN0SZ%2BK0JGQaYRK0O6sQOt%2FmmfS150nEALZ9P%2B6y9Dsvt5Kyv3TFoBCNIvuMhBx2sjFWqgLgEiIVZWGFIqMYOedybRG0NVMNc6dDJY3coGuLz1%2Bbwb6cvFXd8%2Fp%2FIN0gEjwRrNebLM9QjaeLIiGwug7ISurjvZWAwwAShVjgKMolemZOGrXqvZ6qivo2%2F9HRCqESYKAKQMw%2B9eHwgY6pgGYB95USnuLt%2B9U3kDt0q2vKns0ga0mh6ZmPRJaTw5kbViVYOV1%2BUKSdSvlIBCBE3w2cvKnYTs1PmZrlUVZR4PWeIoqZYKY2OoJK3i5ibManradJbqsqfLdwXP%2BGFgnhxgEdgP5PsyUPkICkkkAGfcaTJentNoJGVHy83aIlTnjDusubQRWnvoe13PxxiBbNh312i9v19NHHFy%2BP%2BD64ybX8gCjixTN&X-Amz-Signature=f63a3b436bdbf3ed5a9ff4b6243842975d783ae40d0a010d46cc24e3bcfd4575&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTOWLD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaSYaCJv78nWq%2FIlu2cP%2FgG2oa0HrF2DrK1RqMQpzv0AiBul3U%2FaqEWI4jTEKFIEP4hgARb7tTnasQdKBjP3%2BSfnyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdr6uLBzRd8xcTPZ0KtwDw4YO93Uectqb17Bqz7cFl25MPi6JRN5ArAs3V8fYkw9di2DaOvP64jzikGlWMNiMq7knATKLJhElBGAtTMP2gOGm3cRg31GMDh0tJJ0Lv2KB0G3er2%2BM4v6aqwxbVwzEWRzMV94%2Bcpm5AYlat69TqSOe%2FYvp8bGEZzjO3G%2FBLZUHLoiyXVs2rfkJH%2B8fSHMVPYhe32SnekHoudlPoM5GT65WjYy1ygRmvY%2Br8hiiTp9HuKXtisPIbS154WcVm72lMPFlGjQCcwgnXMm8%2F36%2B2VSW2w3qBotWuH0U7lcxY3AIip0LeojA7hmUHJcZe5dblMfTNZE5DZodYoPRBAcyefaJ3pKTWEffSLTxZd3WoUYYOjETh8uJ7gAkK3B1HMRh7XwOGUrzSENFMUSi04MVdd%2FC2lo7DYyxqjVEQn7Nfof%2BhR8TBAN0SZ%2BK0JGQaYRK0O6sQOt%2FmmfS150nEALZ9P%2B6y9Dsvt5Kyv3TFoBCNIvuMhBx2sjFWqgLgEiIVZWGFIqMYOedybRG0NVMNc6dDJY3coGuLz1%2Bbwb6cvFXd8%2Fp%2FIN0gEjwRrNebLM9QjaeLIiGwug7ISurjvZWAwwAShVjgKMolemZOGrXqvZ6qivo2%2F9HRCqESYKAKQMw%2B9eHwgY6pgGYB95USnuLt%2B9U3kDt0q2vKns0ga0mh6ZmPRJaTw5kbViVYOV1%2BUKSdSvlIBCBE3w2cvKnYTs1PmZrlUVZR4PWeIoqZYKY2OoJK3i5ibManradJbqsqfLdwXP%2BGFgnhxgEdgP5PsyUPkICkkkAGfcaTJentNoJGVHy83aIlTnjDusubQRWnvoe13PxxiBbNh312i9v19NHHFy%2BP%2BD64ybX8gCjixTN&X-Amz-Signature=d6f9b5096fada90cea74f6c5bce7977fb14986506427f5196656153b2ec3afba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTOWLD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaSYaCJv78nWq%2FIlu2cP%2FgG2oa0HrF2DrK1RqMQpzv0AiBul3U%2FaqEWI4jTEKFIEP4hgARb7tTnasQdKBjP3%2BSfnyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdr6uLBzRd8xcTPZ0KtwDw4YO93Uectqb17Bqz7cFl25MPi6JRN5ArAs3V8fYkw9di2DaOvP64jzikGlWMNiMq7knATKLJhElBGAtTMP2gOGm3cRg31GMDh0tJJ0Lv2KB0G3er2%2BM4v6aqwxbVwzEWRzMV94%2Bcpm5AYlat69TqSOe%2FYvp8bGEZzjO3G%2FBLZUHLoiyXVs2rfkJH%2B8fSHMVPYhe32SnekHoudlPoM5GT65WjYy1ygRmvY%2Br8hiiTp9HuKXtisPIbS154WcVm72lMPFlGjQCcwgnXMm8%2F36%2B2VSW2w3qBotWuH0U7lcxY3AIip0LeojA7hmUHJcZe5dblMfTNZE5DZodYoPRBAcyefaJ3pKTWEffSLTxZd3WoUYYOjETh8uJ7gAkK3B1HMRh7XwOGUrzSENFMUSi04MVdd%2FC2lo7DYyxqjVEQn7Nfof%2BhR8TBAN0SZ%2BK0JGQaYRK0O6sQOt%2FmmfS150nEALZ9P%2B6y9Dsvt5Kyv3TFoBCNIvuMhBx2sjFWqgLgEiIVZWGFIqMYOedybRG0NVMNc6dDJY3coGuLz1%2Bbwb6cvFXd8%2Fp%2FIN0gEjwRrNebLM9QjaeLIiGwug7ISurjvZWAwwAShVjgKMolemZOGrXqvZ6qivo2%2F9HRCqESYKAKQMw%2B9eHwgY6pgGYB95USnuLt%2B9U3kDt0q2vKns0ga0mh6ZmPRJaTw5kbViVYOV1%2BUKSdSvlIBCBE3w2cvKnYTs1PmZrlUVZR4PWeIoqZYKY2OoJK3i5ibManradJbqsqfLdwXP%2BGFgnhxgEdgP5PsyUPkICkkkAGfcaTJentNoJGVHy83aIlTnjDusubQRWnvoe13PxxiBbNh312i9v19NHHFy%2BP%2BD64ybX8gCjixTN&X-Amz-Signature=81c8ea6c435ca3ec69ba41ce4b9c8347547388ea2dd59d69873f52f087943be5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTOWLD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaSYaCJv78nWq%2FIlu2cP%2FgG2oa0HrF2DrK1RqMQpzv0AiBul3U%2FaqEWI4jTEKFIEP4hgARb7tTnasQdKBjP3%2BSfnyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdr6uLBzRd8xcTPZ0KtwDw4YO93Uectqb17Bqz7cFl25MPi6JRN5ArAs3V8fYkw9di2DaOvP64jzikGlWMNiMq7knATKLJhElBGAtTMP2gOGm3cRg31GMDh0tJJ0Lv2KB0G3er2%2BM4v6aqwxbVwzEWRzMV94%2Bcpm5AYlat69TqSOe%2FYvp8bGEZzjO3G%2FBLZUHLoiyXVs2rfkJH%2B8fSHMVPYhe32SnekHoudlPoM5GT65WjYy1ygRmvY%2Br8hiiTp9HuKXtisPIbS154WcVm72lMPFlGjQCcwgnXMm8%2F36%2B2VSW2w3qBotWuH0U7lcxY3AIip0LeojA7hmUHJcZe5dblMfTNZE5DZodYoPRBAcyefaJ3pKTWEffSLTxZd3WoUYYOjETh8uJ7gAkK3B1HMRh7XwOGUrzSENFMUSi04MVdd%2FC2lo7DYyxqjVEQn7Nfof%2BhR8TBAN0SZ%2BK0JGQaYRK0O6sQOt%2FmmfS150nEALZ9P%2B6y9Dsvt5Kyv3TFoBCNIvuMhBx2sjFWqgLgEiIVZWGFIqMYOedybRG0NVMNc6dDJY3coGuLz1%2Bbwb6cvFXd8%2Fp%2FIN0gEjwRrNebLM9QjaeLIiGwug7ISurjvZWAwwAShVjgKMolemZOGrXqvZ6qivo2%2F9HRCqESYKAKQMw%2B9eHwgY6pgGYB95USnuLt%2B9U3kDt0q2vKns0ga0mh6ZmPRJaTw5kbViVYOV1%2BUKSdSvlIBCBE3w2cvKnYTs1PmZrlUVZR4PWeIoqZYKY2OoJK3i5ibManradJbqsqfLdwXP%2BGFgnhxgEdgP5PsyUPkICkkkAGfcaTJentNoJGVHy83aIlTnjDusubQRWnvoe13PxxiBbNh312i9v19NHHFy%2BP%2BD64ybX8gCjixTN&X-Amz-Signature=0b5c436f183af55bd957e82165d1b566dec44c2a8960f50fbd807e0259fc951f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTOWLD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaSYaCJv78nWq%2FIlu2cP%2FgG2oa0HrF2DrK1RqMQpzv0AiBul3U%2FaqEWI4jTEKFIEP4hgARb7tTnasQdKBjP3%2BSfnyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdr6uLBzRd8xcTPZ0KtwDw4YO93Uectqb17Bqz7cFl25MPi6JRN5ArAs3V8fYkw9di2DaOvP64jzikGlWMNiMq7knATKLJhElBGAtTMP2gOGm3cRg31GMDh0tJJ0Lv2KB0G3er2%2BM4v6aqwxbVwzEWRzMV94%2Bcpm5AYlat69TqSOe%2FYvp8bGEZzjO3G%2FBLZUHLoiyXVs2rfkJH%2B8fSHMVPYhe32SnekHoudlPoM5GT65WjYy1ygRmvY%2Br8hiiTp9HuKXtisPIbS154WcVm72lMPFlGjQCcwgnXMm8%2F36%2B2VSW2w3qBotWuH0U7lcxY3AIip0LeojA7hmUHJcZe5dblMfTNZE5DZodYoPRBAcyefaJ3pKTWEffSLTxZd3WoUYYOjETh8uJ7gAkK3B1HMRh7XwOGUrzSENFMUSi04MVdd%2FC2lo7DYyxqjVEQn7Nfof%2BhR8TBAN0SZ%2BK0JGQaYRK0O6sQOt%2FmmfS150nEALZ9P%2B6y9Dsvt5Kyv3TFoBCNIvuMhBx2sjFWqgLgEiIVZWGFIqMYOedybRG0NVMNc6dDJY3coGuLz1%2Bbwb6cvFXd8%2Fp%2FIN0gEjwRrNebLM9QjaeLIiGwug7ISurjvZWAwwAShVjgKMolemZOGrXqvZ6qivo2%2F9HRCqESYKAKQMw%2B9eHwgY6pgGYB95USnuLt%2B9U3kDt0q2vKns0ga0mh6ZmPRJaTw5kbViVYOV1%2BUKSdSvlIBCBE3w2cvKnYTs1PmZrlUVZR4PWeIoqZYKY2OoJK3i5ibManradJbqsqfLdwXP%2BGFgnhxgEdgP5PsyUPkICkkkAGfcaTJentNoJGVHy83aIlTnjDusubQRWnvoe13PxxiBbNh312i9v19NHHFy%2BP%2BD64ybX8gCjixTN&X-Amz-Signature=5412d6a8c60aca4b890870a66851db8d02356f2e5248ac5a48b34526138bdc28&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTOWLD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaSYaCJv78nWq%2FIlu2cP%2FgG2oa0HrF2DrK1RqMQpzv0AiBul3U%2FaqEWI4jTEKFIEP4hgARb7tTnasQdKBjP3%2BSfnyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdr6uLBzRd8xcTPZ0KtwDw4YO93Uectqb17Bqz7cFl25MPi6JRN5ArAs3V8fYkw9di2DaOvP64jzikGlWMNiMq7knATKLJhElBGAtTMP2gOGm3cRg31GMDh0tJJ0Lv2KB0G3er2%2BM4v6aqwxbVwzEWRzMV94%2Bcpm5AYlat69TqSOe%2FYvp8bGEZzjO3G%2FBLZUHLoiyXVs2rfkJH%2B8fSHMVPYhe32SnekHoudlPoM5GT65WjYy1ygRmvY%2Br8hiiTp9HuKXtisPIbS154WcVm72lMPFlGjQCcwgnXMm8%2F36%2B2VSW2w3qBotWuH0U7lcxY3AIip0LeojA7hmUHJcZe5dblMfTNZE5DZodYoPRBAcyefaJ3pKTWEffSLTxZd3WoUYYOjETh8uJ7gAkK3B1HMRh7XwOGUrzSENFMUSi04MVdd%2FC2lo7DYyxqjVEQn7Nfof%2BhR8TBAN0SZ%2BK0JGQaYRK0O6sQOt%2FmmfS150nEALZ9P%2B6y9Dsvt5Kyv3TFoBCNIvuMhBx2sjFWqgLgEiIVZWGFIqMYOedybRG0NVMNc6dDJY3coGuLz1%2Bbwb6cvFXd8%2Fp%2FIN0gEjwRrNebLM9QjaeLIiGwug7ISurjvZWAwwAShVjgKMolemZOGrXqvZ6qivo2%2F9HRCqESYKAKQMw%2B9eHwgY6pgGYB95USnuLt%2B9U3kDt0q2vKns0ga0mh6ZmPRJaTw5kbViVYOV1%2BUKSdSvlIBCBE3w2cvKnYTs1PmZrlUVZR4PWeIoqZYKY2OoJK3i5ibManradJbqsqfLdwXP%2BGFgnhxgEdgP5PsyUPkICkkkAGfcaTJentNoJGVHy83aIlTnjDusubQRWnvoe13PxxiBbNh312i9v19NHHFy%2BP%2BD64ybX8gCjixTN&X-Amz-Signature=27687fb861d36a296b106548eff01fb5ab73a64c4fcff114d9d314daaadc48ea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTOWLD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaSYaCJv78nWq%2FIlu2cP%2FgG2oa0HrF2DrK1RqMQpzv0AiBul3U%2FaqEWI4jTEKFIEP4hgARb7tTnasQdKBjP3%2BSfnyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdr6uLBzRd8xcTPZ0KtwDw4YO93Uectqb17Bqz7cFl25MPi6JRN5ArAs3V8fYkw9di2DaOvP64jzikGlWMNiMq7knATKLJhElBGAtTMP2gOGm3cRg31GMDh0tJJ0Lv2KB0G3er2%2BM4v6aqwxbVwzEWRzMV94%2Bcpm5AYlat69TqSOe%2FYvp8bGEZzjO3G%2FBLZUHLoiyXVs2rfkJH%2B8fSHMVPYhe32SnekHoudlPoM5GT65WjYy1ygRmvY%2Br8hiiTp9HuKXtisPIbS154WcVm72lMPFlGjQCcwgnXMm8%2F36%2B2VSW2w3qBotWuH0U7lcxY3AIip0LeojA7hmUHJcZe5dblMfTNZE5DZodYoPRBAcyefaJ3pKTWEffSLTxZd3WoUYYOjETh8uJ7gAkK3B1HMRh7XwOGUrzSENFMUSi04MVdd%2FC2lo7DYyxqjVEQn7Nfof%2BhR8TBAN0SZ%2BK0JGQaYRK0O6sQOt%2FmmfS150nEALZ9P%2B6y9Dsvt5Kyv3TFoBCNIvuMhBx2sjFWqgLgEiIVZWGFIqMYOedybRG0NVMNc6dDJY3coGuLz1%2Bbwb6cvFXd8%2Fp%2FIN0gEjwRrNebLM9QjaeLIiGwug7ISurjvZWAwwAShVjgKMolemZOGrXqvZ6qivo2%2F9HRCqESYKAKQMw%2B9eHwgY6pgGYB95USnuLt%2B9U3kDt0q2vKns0ga0mh6ZmPRJaTw5kbViVYOV1%2BUKSdSvlIBCBE3w2cvKnYTs1PmZrlUVZR4PWeIoqZYKY2OoJK3i5ibManradJbqsqfLdwXP%2BGFgnhxgEdgP5PsyUPkICkkkAGfcaTJentNoJGVHy83aIlTnjDusubQRWnvoe13PxxiBbNh312i9v19NHHFy%2BP%2BD64ybX8gCjixTN&X-Amz-Signature=283a35d41ea11fcb9b12014f3eac31859ea9424107ced287e6cba93197d671ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
