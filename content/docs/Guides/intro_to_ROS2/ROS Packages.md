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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZWJ7CY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8K12M8VdtXOZRwIOgGXBCkWzwxVOgS%2BoKSJyHTZv%2FwIhAOWXWkXwRJO2tHMYXx6nTHoRI%2FoD%2FINMHkB%2BueafN3NNKv8DCGoQABoMNjM3NDIzMTgzODA1Igx9xmacoiN6FH%2FZvn4q3ANxn8582AvI%2B%2BDP%2BK4fLPf2AqdJuiXGXgQeIxM1UvYycGX4yK09VVosXmfd9C5I4f5eizKqy7mnF3Fg23JXH9VSdX3VhExL2QgJCwwAE8kuQTgtpjWyOHBJN4yFueTjGYtSMtqAaLjUCQAUAHW%2F9MSwgIohf3KWgkpJeNwdvychHzI9kpzd7dqRZp51ndhqf30FczczfWc71lU0oVonfg33evKGit6Y5xXyqKvGeldbQEFGcJiu%2Bb4Z563XWAJvQ3Eg75EhEPIOVs2rhXkn5yYAIpzyMUNf4Pg5%2F1vSkpdtn0pfc0ZpXGOLqYW6GW4J33AamqgwbZzX%2FKD%2BAo6saxS7AqwDEFGV3XGpdW%2Fys4u1z3K3bz%2Fkipsc6%2BvBSE%2Fdv8LqVHN4zwgd9XTH%2FlCClLt7WZMu98tky%2BgdocXsJqaxroE968FmK9DScQRs5QrKuYS5%2BpVyqdlWKlvMTm6vmrA83vkdWZztNhJ5SCcQR3epuJvwAPT8nH7JMedkgsJEott3TgNvkSWOLJrg%2BmAyorvo4JifGCCJ6jAEooeWnGYlCSvHmGf1J6GqEEmvq5Aeu0K9FDfxU3vj1Rx85uj%2BrS%2Fnt55JuN4sU9uh1H7i1c5pihMADpXMEQ8mP5%2FryjDQ16TBBjqkATvnz0olJypsA8p3c7y%2FPOa8gIHpTDR2eIYyKTFk11E5Bhd8P%2BPYcBh2eTS9xmVURWYPfVvR93d4Yii5Upl%2FscD3t07VHS%2FoEobrZpsgki9xB1DD6bHO65fLxCTpPE9lTV9K5uIDff4gERr2ffSyH5GHHF1aM5N3e2DSDkeTDVec%2FnLqqpFFyL%2Bdev%2B%2FIlQ%2F66KnJmtWzJTym0nWdroWWwbjvh4g&X-Amz-Signature=6de48b8467ee4282912d2f94081ce34aa9767233bd0fd35d114452b4c96648c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZWJ7CY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8K12M8VdtXOZRwIOgGXBCkWzwxVOgS%2BoKSJyHTZv%2FwIhAOWXWkXwRJO2tHMYXx6nTHoRI%2FoD%2FINMHkB%2BueafN3NNKv8DCGoQABoMNjM3NDIzMTgzODA1Igx9xmacoiN6FH%2FZvn4q3ANxn8582AvI%2B%2BDP%2BK4fLPf2AqdJuiXGXgQeIxM1UvYycGX4yK09VVosXmfd9C5I4f5eizKqy7mnF3Fg23JXH9VSdX3VhExL2QgJCwwAE8kuQTgtpjWyOHBJN4yFueTjGYtSMtqAaLjUCQAUAHW%2F9MSwgIohf3KWgkpJeNwdvychHzI9kpzd7dqRZp51ndhqf30FczczfWc71lU0oVonfg33evKGit6Y5xXyqKvGeldbQEFGcJiu%2Bb4Z563XWAJvQ3Eg75EhEPIOVs2rhXkn5yYAIpzyMUNf4Pg5%2F1vSkpdtn0pfc0ZpXGOLqYW6GW4J33AamqgwbZzX%2FKD%2BAo6saxS7AqwDEFGV3XGpdW%2Fys4u1z3K3bz%2Fkipsc6%2BvBSE%2Fdv8LqVHN4zwgd9XTH%2FlCClLt7WZMu98tky%2BgdocXsJqaxroE968FmK9DScQRs5QrKuYS5%2BpVyqdlWKlvMTm6vmrA83vkdWZztNhJ5SCcQR3epuJvwAPT8nH7JMedkgsJEott3TgNvkSWOLJrg%2BmAyorvo4JifGCCJ6jAEooeWnGYlCSvHmGf1J6GqEEmvq5Aeu0K9FDfxU3vj1Rx85uj%2BrS%2Fnt55JuN4sU9uh1H7i1c5pihMADpXMEQ8mP5%2FryjDQ16TBBjqkATvnz0olJypsA8p3c7y%2FPOa8gIHpTDR2eIYyKTFk11E5Bhd8P%2BPYcBh2eTS9xmVURWYPfVvR93d4Yii5Upl%2FscD3t07VHS%2FoEobrZpsgki9xB1DD6bHO65fLxCTpPE9lTV9K5uIDff4gERr2ffSyH5GHHF1aM5N3e2DSDkeTDVec%2FnLqqpFFyL%2Bdev%2B%2FIlQ%2F66KnJmtWzJTym0nWdroWWwbjvh4g&X-Amz-Signature=c33a9e2c86ef1c6ac2d070ed37ef3289dbb41638263f5d4ad3f7649b94418235&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZWJ7CY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8K12M8VdtXOZRwIOgGXBCkWzwxVOgS%2BoKSJyHTZv%2FwIhAOWXWkXwRJO2tHMYXx6nTHoRI%2FoD%2FINMHkB%2BueafN3NNKv8DCGoQABoMNjM3NDIzMTgzODA1Igx9xmacoiN6FH%2FZvn4q3ANxn8582AvI%2B%2BDP%2BK4fLPf2AqdJuiXGXgQeIxM1UvYycGX4yK09VVosXmfd9C5I4f5eizKqy7mnF3Fg23JXH9VSdX3VhExL2QgJCwwAE8kuQTgtpjWyOHBJN4yFueTjGYtSMtqAaLjUCQAUAHW%2F9MSwgIohf3KWgkpJeNwdvychHzI9kpzd7dqRZp51ndhqf30FczczfWc71lU0oVonfg33evKGit6Y5xXyqKvGeldbQEFGcJiu%2Bb4Z563XWAJvQ3Eg75EhEPIOVs2rhXkn5yYAIpzyMUNf4Pg5%2F1vSkpdtn0pfc0ZpXGOLqYW6GW4J33AamqgwbZzX%2FKD%2BAo6saxS7AqwDEFGV3XGpdW%2Fys4u1z3K3bz%2Fkipsc6%2BvBSE%2Fdv8LqVHN4zwgd9XTH%2FlCClLt7WZMu98tky%2BgdocXsJqaxroE968FmK9DScQRs5QrKuYS5%2BpVyqdlWKlvMTm6vmrA83vkdWZztNhJ5SCcQR3epuJvwAPT8nH7JMedkgsJEott3TgNvkSWOLJrg%2BmAyorvo4JifGCCJ6jAEooeWnGYlCSvHmGf1J6GqEEmvq5Aeu0K9FDfxU3vj1Rx85uj%2BrS%2Fnt55JuN4sU9uh1H7i1c5pihMADpXMEQ8mP5%2FryjDQ16TBBjqkATvnz0olJypsA8p3c7y%2FPOa8gIHpTDR2eIYyKTFk11E5Bhd8P%2BPYcBh2eTS9xmVURWYPfVvR93d4Yii5Upl%2FscD3t07VHS%2FoEobrZpsgki9xB1DD6bHO65fLxCTpPE9lTV9K5uIDff4gERr2ffSyH5GHHF1aM5N3e2DSDkeTDVec%2FnLqqpFFyL%2Bdev%2B%2FIlQ%2F66KnJmtWzJTym0nWdroWWwbjvh4g&X-Amz-Signature=593d798943be6170b422c4e0d135a71040ef7d8c592ad8da90e0e094426d6d29&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZWJ7CY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8K12M8VdtXOZRwIOgGXBCkWzwxVOgS%2BoKSJyHTZv%2FwIhAOWXWkXwRJO2tHMYXx6nTHoRI%2FoD%2FINMHkB%2BueafN3NNKv8DCGoQABoMNjM3NDIzMTgzODA1Igx9xmacoiN6FH%2FZvn4q3ANxn8582AvI%2B%2BDP%2BK4fLPf2AqdJuiXGXgQeIxM1UvYycGX4yK09VVosXmfd9C5I4f5eizKqy7mnF3Fg23JXH9VSdX3VhExL2QgJCwwAE8kuQTgtpjWyOHBJN4yFueTjGYtSMtqAaLjUCQAUAHW%2F9MSwgIohf3KWgkpJeNwdvychHzI9kpzd7dqRZp51ndhqf30FczczfWc71lU0oVonfg33evKGit6Y5xXyqKvGeldbQEFGcJiu%2Bb4Z563XWAJvQ3Eg75EhEPIOVs2rhXkn5yYAIpzyMUNf4Pg5%2F1vSkpdtn0pfc0ZpXGOLqYW6GW4J33AamqgwbZzX%2FKD%2BAo6saxS7AqwDEFGV3XGpdW%2Fys4u1z3K3bz%2Fkipsc6%2BvBSE%2Fdv8LqVHN4zwgd9XTH%2FlCClLt7WZMu98tky%2BgdocXsJqaxroE968FmK9DScQRs5QrKuYS5%2BpVyqdlWKlvMTm6vmrA83vkdWZztNhJ5SCcQR3epuJvwAPT8nH7JMedkgsJEott3TgNvkSWOLJrg%2BmAyorvo4JifGCCJ6jAEooeWnGYlCSvHmGf1J6GqEEmvq5Aeu0K9FDfxU3vj1Rx85uj%2BrS%2Fnt55JuN4sU9uh1H7i1c5pihMADpXMEQ8mP5%2FryjDQ16TBBjqkATvnz0olJypsA8p3c7y%2FPOa8gIHpTDR2eIYyKTFk11E5Bhd8P%2BPYcBh2eTS9xmVURWYPfVvR93d4Yii5Upl%2FscD3t07VHS%2FoEobrZpsgki9xB1DD6bHO65fLxCTpPE9lTV9K5uIDff4gERr2ffSyH5GHHF1aM5N3e2DSDkeTDVec%2FnLqqpFFyL%2Bdev%2B%2FIlQ%2F66KnJmtWzJTym0nWdroWWwbjvh4g&X-Amz-Signature=c1785af5a7a1fadb7f632372f83c51e85f24899dc626291df97ee16cd54f46fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZWJ7CY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8K12M8VdtXOZRwIOgGXBCkWzwxVOgS%2BoKSJyHTZv%2FwIhAOWXWkXwRJO2tHMYXx6nTHoRI%2FoD%2FINMHkB%2BueafN3NNKv8DCGoQABoMNjM3NDIzMTgzODA1Igx9xmacoiN6FH%2FZvn4q3ANxn8582AvI%2B%2BDP%2BK4fLPf2AqdJuiXGXgQeIxM1UvYycGX4yK09VVosXmfd9C5I4f5eizKqy7mnF3Fg23JXH9VSdX3VhExL2QgJCwwAE8kuQTgtpjWyOHBJN4yFueTjGYtSMtqAaLjUCQAUAHW%2F9MSwgIohf3KWgkpJeNwdvychHzI9kpzd7dqRZp51ndhqf30FczczfWc71lU0oVonfg33evKGit6Y5xXyqKvGeldbQEFGcJiu%2Bb4Z563XWAJvQ3Eg75EhEPIOVs2rhXkn5yYAIpzyMUNf4Pg5%2F1vSkpdtn0pfc0ZpXGOLqYW6GW4J33AamqgwbZzX%2FKD%2BAo6saxS7AqwDEFGV3XGpdW%2Fys4u1z3K3bz%2Fkipsc6%2BvBSE%2Fdv8LqVHN4zwgd9XTH%2FlCClLt7WZMu98tky%2BgdocXsJqaxroE968FmK9DScQRs5QrKuYS5%2BpVyqdlWKlvMTm6vmrA83vkdWZztNhJ5SCcQR3epuJvwAPT8nH7JMedkgsJEott3TgNvkSWOLJrg%2BmAyorvo4JifGCCJ6jAEooeWnGYlCSvHmGf1J6GqEEmvq5Aeu0K9FDfxU3vj1Rx85uj%2BrS%2Fnt55JuN4sU9uh1H7i1c5pihMADpXMEQ8mP5%2FryjDQ16TBBjqkATvnz0olJypsA8p3c7y%2FPOa8gIHpTDR2eIYyKTFk11E5Bhd8P%2BPYcBh2eTS9xmVURWYPfVvR93d4Yii5Upl%2FscD3t07VHS%2FoEobrZpsgki9xB1DD6bHO65fLxCTpPE9lTV9K5uIDff4gERr2ffSyH5GHHF1aM5N3e2DSDkeTDVec%2FnLqqpFFyL%2Bdev%2B%2FIlQ%2F66KnJmtWzJTym0nWdroWWwbjvh4g&X-Amz-Signature=4a35564824457b13bd5df0fab2f9494982c11250a36e77c73424fb544bdf939c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZWJ7CY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8K12M8VdtXOZRwIOgGXBCkWzwxVOgS%2BoKSJyHTZv%2FwIhAOWXWkXwRJO2tHMYXx6nTHoRI%2FoD%2FINMHkB%2BueafN3NNKv8DCGoQABoMNjM3NDIzMTgzODA1Igx9xmacoiN6FH%2FZvn4q3ANxn8582AvI%2B%2BDP%2BK4fLPf2AqdJuiXGXgQeIxM1UvYycGX4yK09VVosXmfd9C5I4f5eizKqy7mnF3Fg23JXH9VSdX3VhExL2QgJCwwAE8kuQTgtpjWyOHBJN4yFueTjGYtSMtqAaLjUCQAUAHW%2F9MSwgIohf3KWgkpJeNwdvychHzI9kpzd7dqRZp51ndhqf30FczczfWc71lU0oVonfg33evKGit6Y5xXyqKvGeldbQEFGcJiu%2Bb4Z563XWAJvQ3Eg75EhEPIOVs2rhXkn5yYAIpzyMUNf4Pg5%2F1vSkpdtn0pfc0ZpXGOLqYW6GW4J33AamqgwbZzX%2FKD%2BAo6saxS7AqwDEFGV3XGpdW%2Fys4u1z3K3bz%2Fkipsc6%2BvBSE%2Fdv8LqVHN4zwgd9XTH%2FlCClLt7WZMu98tky%2BgdocXsJqaxroE968FmK9DScQRs5QrKuYS5%2BpVyqdlWKlvMTm6vmrA83vkdWZztNhJ5SCcQR3epuJvwAPT8nH7JMedkgsJEott3TgNvkSWOLJrg%2BmAyorvo4JifGCCJ6jAEooeWnGYlCSvHmGf1J6GqEEmvq5Aeu0K9FDfxU3vj1Rx85uj%2BrS%2Fnt55JuN4sU9uh1H7i1c5pihMADpXMEQ8mP5%2FryjDQ16TBBjqkATvnz0olJypsA8p3c7y%2FPOa8gIHpTDR2eIYyKTFk11E5Bhd8P%2BPYcBh2eTS9xmVURWYPfVvR93d4Yii5Upl%2FscD3t07VHS%2FoEobrZpsgki9xB1DD6bHO65fLxCTpPE9lTV9K5uIDff4gERr2ffSyH5GHHF1aM5N3e2DSDkeTDVec%2FnLqqpFFyL%2Bdev%2B%2FIlQ%2F66KnJmtWzJTym0nWdroWWwbjvh4g&X-Amz-Signature=c5d66e3fa5b4770455207a461e7bd051f741fe8618c3678ef7d41ffa9c1a3960&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZWJ7CY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8K12M8VdtXOZRwIOgGXBCkWzwxVOgS%2BoKSJyHTZv%2FwIhAOWXWkXwRJO2tHMYXx6nTHoRI%2FoD%2FINMHkB%2BueafN3NNKv8DCGoQABoMNjM3NDIzMTgzODA1Igx9xmacoiN6FH%2FZvn4q3ANxn8582AvI%2B%2BDP%2BK4fLPf2AqdJuiXGXgQeIxM1UvYycGX4yK09VVosXmfd9C5I4f5eizKqy7mnF3Fg23JXH9VSdX3VhExL2QgJCwwAE8kuQTgtpjWyOHBJN4yFueTjGYtSMtqAaLjUCQAUAHW%2F9MSwgIohf3KWgkpJeNwdvychHzI9kpzd7dqRZp51ndhqf30FczczfWc71lU0oVonfg33evKGit6Y5xXyqKvGeldbQEFGcJiu%2Bb4Z563XWAJvQ3Eg75EhEPIOVs2rhXkn5yYAIpzyMUNf4Pg5%2F1vSkpdtn0pfc0ZpXGOLqYW6GW4J33AamqgwbZzX%2FKD%2BAo6saxS7AqwDEFGV3XGpdW%2Fys4u1z3K3bz%2Fkipsc6%2BvBSE%2Fdv8LqVHN4zwgd9XTH%2FlCClLt7WZMu98tky%2BgdocXsJqaxroE968FmK9DScQRs5QrKuYS5%2BpVyqdlWKlvMTm6vmrA83vkdWZztNhJ5SCcQR3epuJvwAPT8nH7JMedkgsJEott3TgNvkSWOLJrg%2BmAyorvo4JifGCCJ6jAEooeWnGYlCSvHmGf1J6GqEEmvq5Aeu0K9FDfxU3vj1Rx85uj%2BrS%2Fnt55JuN4sU9uh1H7i1c5pihMADpXMEQ8mP5%2FryjDQ16TBBjqkATvnz0olJypsA8p3c7y%2FPOa8gIHpTDR2eIYyKTFk11E5Bhd8P%2BPYcBh2eTS9xmVURWYPfVvR93d4Yii5Upl%2FscD3t07VHS%2FoEobrZpsgki9xB1DD6bHO65fLxCTpPE9lTV9K5uIDff4gERr2ffSyH5GHHF1aM5N3e2DSDkeTDVec%2FnLqqpFFyL%2Bdev%2B%2FIlQ%2F66KnJmtWzJTym0nWdroWWwbjvh4g&X-Amz-Signature=e346f4067983b76c92f05f0385d9646d96a717c21e02bbccf1c1301792065943&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
