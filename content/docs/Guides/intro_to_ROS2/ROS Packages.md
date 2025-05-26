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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLHNKTV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH3cOKD7gZmG3manWDWm2vkR4YqL3Pkehmb8pyU4Nr2UCIQCdeVeG62cyUpxaD3OuhDWWWPOvWIdyAN%2F5Tr4Mmp2UEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaZG3hApNMetyIpsxKtwDY6upooAvNsE%2B87HZe7sNk2PqBR3U6s664vd%2FeaeJAxWFvwzbtdREJH2zBOqVD%2F3CsD5S4ad6v0O7LCEaMAI7ph1OXgQDMKlu7hm9AUioShq7p9icSqGdmCWeb682HSk3T7mRCUn8IEQyMlGafCscv9oaE9WnIRxSoZvVFgsBIRrLuSh3OvA3XjQHSZ%2BPWfyE8ZYoVlosyK7HNUrmiVgqIxdKRowuhKWYUG5xLXoaQ2rfCsV1pKknULKBogOkQcRsFFH0yD%2FWFqR4ZsX6M%2FA7joBY9bgHlTDHCputO5zqAvqc%2FiMCZCU%2BnGC8DRC%2FRp1qAS1GI16fohj7L%2FRB6aWZaZQNXMVy9ehE%2BMpei8jkYmfBspWayKlyh2ibrObnWlPds2SHoB7zyhqFzGU3kaVfJUjpq0GYq2qTTJ1GtjBezSPFqbkpNj0gilb%2Fzn7gAi5skFP0mwMFTvR9UwY%2FToFvrGhmmQwu6odUiJmWqF5e3A4uKihy4EvlvcfIeBbfIOdL8wKcjwC1WE1PQgHXiDJDuiLjFX3mcDA9qesEgQa3mkqyyp1khctkjPqvC3i5Y1LdBw8Qoh00c%2BAFDhoOiBtXh54mf2cFvwVFYeiRio7ErcDwg%2BaaFDlhC8VTeRAw5p3PwQY6pgGmjdgwZ3vt6LUIbDI4ylBFifFYmAkxVtD%2F032TkASRp6CYBoUi3kzPwX58uXqvVfu3Lb7DvM2dzcZ6fUXnJ5GvIzQ5aFZJ2r2pgZ5mXxOqM6cIlZsUMUxmlqVhVKfsIsuyfsROJdcdnHLQmd%2F3tLGQYVn39s33FUdBTzCHHqaSAjgXXH2LlQDO6MegJ5CKJTq0vrSUTv3fhm6JNkpSpEC0h5m6ONFN&X-Amz-Signature=33a8b0a6af0521b06427f68dbb8450199c4f02dfe8bead23777f7310081e996d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLHNKTV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH3cOKD7gZmG3manWDWm2vkR4YqL3Pkehmb8pyU4Nr2UCIQCdeVeG62cyUpxaD3OuhDWWWPOvWIdyAN%2F5Tr4Mmp2UEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaZG3hApNMetyIpsxKtwDY6upooAvNsE%2B87HZe7sNk2PqBR3U6s664vd%2FeaeJAxWFvwzbtdREJH2zBOqVD%2F3CsD5S4ad6v0O7LCEaMAI7ph1OXgQDMKlu7hm9AUioShq7p9icSqGdmCWeb682HSk3T7mRCUn8IEQyMlGafCscv9oaE9WnIRxSoZvVFgsBIRrLuSh3OvA3XjQHSZ%2BPWfyE8ZYoVlosyK7HNUrmiVgqIxdKRowuhKWYUG5xLXoaQ2rfCsV1pKknULKBogOkQcRsFFH0yD%2FWFqR4ZsX6M%2FA7joBY9bgHlTDHCputO5zqAvqc%2FiMCZCU%2BnGC8DRC%2FRp1qAS1GI16fohj7L%2FRB6aWZaZQNXMVy9ehE%2BMpei8jkYmfBspWayKlyh2ibrObnWlPds2SHoB7zyhqFzGU3kaVfJUjpq0GYq2qTTJ1GtjBezSPFqbkpNj0gilb%2Fzn7gAi5skFP0mwMFTvR9UwY%2FToFvrGhmmQwu6odUiJmWqF5e3A4uKihy4EvlvcfIeBbfIOdL8wKcjwC1WE1PQgHXiDJDuiLjFX3mcDA9qesEgQa3mkqyyp1khctkjPqvC3i5Y1LdBw8Qoh00c%2BAFDhoOiBtXh54mf2cFvwVFYeiRio7ErcDwg%2BaaFDlhC8VTeRAw5p3PwQY6pgGmjdgwZ3vt6LUIbDI4ylBFifFYmAkxVtD%2F032TkASRp6CYBoUi3kzPwX58uXqvVfu3Lb7DvM2dzcZ6fUXnJ5GvIzQ5aFZJ2r2pgZ5mXxOqM6cIlZsUMUxmlqVhVKfsIsuyfsROJdcdnHLQmd%2F3tLGQYVn39s33FUdBTzCHHqaSAjgXXH2LlQDO6MegJ5CKJTq0vrSUTv3fhm6JNkpSpEC0h5m6ONFN&X-Amz-Signature=3b9bb94e2aadcf8ecc8f95d1ae1b4f2ada82c8b19fa5c7d40e110180e1eb81d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLHNKTV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH3cOKD7gZmG3manWDWm2vkR4YqL3Pkehmb8pyU4Nr2UCIQCdeVeG62cyUpxaD3OuhDWWWPOvWIdyAN%2F5Tr4Mmp2UEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaZG3hApNMetyIpsxKtwDY6upooAvNsE%2B87HZe7sNk2PqBR3U6s664vd%2FeaeJAxWFvwzbtdREJH2zBOqVD%2F3CsD5S4ad6v0O7LCEaMAI7ph1OXgQDMKlu7hm9AUioShq7p9icSqGdmCWeb682HSk3T7mRCUn8IEQyMlGafCscv9oaE9WnIRxSoZvVFgsBIRrLuSh3OvA3XjQHSZ%2BPWfyE8ZYoVlosyK7HNUrmiVgqIxdKRowuhKWYUG5xLXoaQ2rfCsV1pKknULKBogOkQcRsFFH0yD%2FWFqR4ZsX6M%2FA7joBY9bgHlTDHCputO5zqAvqc%2FiMCZCU%2BnGC8DRC%2FRp1qAS1GI16fohj7L%2FRB6aWZaZQNXMVy9ehE%2BMpei8jkYmfBspWayKlyh2ibrObnWlPds2SHoB7zyhqFzGU3kaVfJUjpq0GYq2qTTJ1GtjBezSPFqbkpNj0gilb%2Fzn7gAi5skFP0mwMFTvR9UwY%2FToFvrGhmmQwu6odUiJmWqF5e3A4uKihy4EvlvcfIeBbfIOdL8wKcjwC1WE1PQgHXiDJDuiLjFX3mcDA9qesEgQa3mkqyyp1khctkjPqvC3i5Y1LdBw8Qoh00c%2BAFDhoOiBtXh54mf2cFvwVFYeiRio7ErcDwg%2BaaFDlhC8VTeRAw5p3PwQY6pgGmjdgwZ3vt6LUIbDI4ylBFifFYmAkxVtD%2F032TkASRp6CYBoUi3kzPwX58uXqvVfu3Lb7DvM2dzcZ6fUXnJ5GvIzQ5aFZJ2r2pgZ5mXxOqM6cIlZsUMUxmlqVhVKfsIsuyfsROJdcdnHLQmd%2F3tLGQYVn39s33FUdBTzCHHqaSAjgXXH2LlQDO6MegJ5CKJTq0vrSUTv3fhm6JNkpSpEC0h5m6ONFN&X-Amz-Signature=9a3b954961bc86eebdfecf4f3058f2ce7b61cae8715d00cccd51a7e581b9d99d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLHNKTV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH3cOKD7gZmG3manWDWm2vkR4YqL3Pkehmb8pyU4Nr2UCIQCdeVeG62cyUpxaD3OuhDWWWPOvWIdyAN%2F5Tr4Mmp2UEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaZG3hApNMetyIpsxKtwDY6upooAvNsE%2B87HZe7sNk2PqBR3U6s664vd%2FeaeJAxWFvwzbtdREJH2zBOqVD%2F3CsD5S4ad6v0O7LCEaMAI7ph1OXgQDMKlu7hm9AUioShq7p9icSqGdmCWeb682HSk3T7mRCUn8IEQyMlGafCscv9oaE9WnIRxSoZvVFgsBIRrLuSh3OvA3XjQHSZ%2BPWfyE8ZYoVlosyK7HNUrmiVgqIxdKRowuhKWYUG5xLXoaQ2rfCsV1pKknULKBogOkQcRsFFH0yD%2FWFqR4ZsX6M%2FA7joBY9bgHlTDHCputO5zqAvqc%2FiMCZCU%2BnGC8DRC%2FRp1qAS1GI16fohj7L%2FRB6aWZaZQNXMVy9ehE%2BMpei8jkYmfBspWayKlyh2ibrObnWlPds2SHoB7zyhqFzGU3kaVfJUjpq0GYq2qTTJ1GtjBezSPFqbkpNj0gilb%2Fzn7gAi5skFP0mwMFTvR9UwY%2FToFvrGhmmQwu6odUiJmWqF5e3A4uKihy4EvlvcfIeBbfIOdL8wKcjwC1WE1PQgHXiDJDuiLjFX3mcDA9qesEgQa3mkqyyp1khctkjPqvC3i5Y1LdBw8Qoh00c%2BAFDhoOiBtXh54mf2cFvwVFYeiRio7ErcDwg%2BaaFDlhC8VTeRAw5p3PwQY6pgGmjdgwZ3vt6LUIbDI4ylBFifFYmAkxVtD%2F032TkASRp6CYBoUi3kzPwX58uXqvVfu3Lb7DvM2dzcZ6fUXnJ5GvIzQ5aFZJ2r2pgZ5mXxOqM6cIlZsUMUxmlqVhVKfsIsuyfsROJdcdnHLQmd%2F3tLGQYVn39s33FUdBTzCHHqaSAjgXXH2LlQDO6MegJ5CKJTq0vrSUTv3fhm6JNkpSpEC0h5m6ONFN&X-Amz-Signature=e224207e318d663bffa237e826a9a0b30e8dee34de005921418db170546a0fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLHNKTV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH3cOKD7gZmG3manWDWm2vkR4YqL3Pkehmb8pyU4Nr2UCIQCdeVeG62cyUpxaD3OuhDWWWPOvWIdyAN%2F5Tr4Mmp2UEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaZG3hApNMetyIpsxKtwDY6upooAvNsE%2B87HZe7sNk2PqBR3U6s664vd%2FeaeJAxWFvwzbtdREJH2zBOqVD%2F3CsD5S4ad6v0O7LCEaMAI7ph1OXgQDMKlu7hm9AUioShq7p9icSqGdmCWeb682HSk3T7mRCUn8IEQyMlGafCscv9oaE9WnIRxSoZvVFgsBIRrLuSh3OvA3XjQHSZ%2BPWfyE8ZYoVlosyK7HNUrmiVgqIxdKRowuhKWYUG5xLXoaQ2rfCsV1pKknULKBogOkQcRsFFH0yD%2FWFqR4ZsX6M%2FA7joBY9bgHlTDHCputO5zqAvqc%2FiMCZCU%2BnGC8DRC%2FRp1qAS1GI16fohj7L%2FRB6aWZaZQNXMVy9ehE%2BMpei8jkYmfBspWayKlyh2ibrObnWlPds2SHoB7zyhqFzGU3kaVfJUjpq0GYq2qTTJ1GtjBezSPFqbkpNj0gilb%2Fzn7gAi5skFP0mwMFTvR9UwY%2FToFvrGhmmQwu6odUiJmWqF5e3A4uKihy4EvlvcfIeBbfIOdL8wKcjwC1WE1PQgHXiDJDuiLjFX3mcDA9qesEgQa3mkqyyp1khctkjPqvC3i5Y1LdBw8Qoh00c%2BAFDhoOiBtXh54mf2cFvwVFYeiRio7ErcDwg%2BaaFDlhC8VTeRAw5p3PwQY6pgGmjdgwZ3vt6LUIbDI4ylBFifFYmAkxVtD%2F032TkASRp6CYBoUi3kzPwX58uXqvVfu3Lb7DvM2dzcZ6fUXnJ5GvIzQ5aFZJ2r2pgZ5mXxOqM6cIlZsUMUxmlqVhVKfsIsuyfsROJdcdnHLQmd%2F3tLGQYVn39s33FUdBTzCHHqaSAjgXXH2LlQDO6MegJ5CKJTq0vrSUTv3fhm6JNkpSpEC0h5m6ONFN&X-Amz-Signature=cf0b464971d41c26e9e1ffa67a9eca420f8de5f2db634e686fe87f678e3ec465&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLHNKTV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH3cOKD7gZmG3manWDWm2vkR4YqL3Pkehmb8pyU4Nr2UCIQCdeVeG62cyUpxaD3OuhDWWWPOvWIdyAN%2F5Tr4Mmp2UEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaZG3hApNMetyIpsxKtwDY6upooAvNsE%2B87HZe7sNk2PqBR3U6s664vd%2FeaeJAxWFvwzbtdREJH2zBOqVD%2F3CsD5S4ad6v0O7LCEaMAI7ph1OXgQDMKlu7hm9AUioShq7p9icSqGdmCWeb682HSk3T7mRCUn8IEQyMlGafCscv9oaE9WnIRxSoZvVFgsBIRrLuSh3OvA3XjQHSZ%2BPWfyE8ZYoVlosyK7HNUrmiVgqIxdKRowuhKWYUG5xLXoaQ2rfCsV1pKknULKBogOkQcRsFFH0yD%2FWFqR4ZsX6M%2FA7joBY9bgHlTDHCputO5zqAvqc%2FiMCZCU%2BnGC8DRC%2FRp1qAS1GI16fohj7L%2FRB6aWZaZQNXMVy9ehE%2BMpei8jkYmfBspWayKlyh2ibrObnWlPds2SHoB7zyhqFzGU3kaVfJUjpq0GYq2qTTJ1GtjBezSPFqbkpNj0gilb%2Fzn7gAi5skFP0mwMFTvR9UwY%2FToFvrGhmmQwu6odUiJmWqF5e3A4uKihy4EvlvcfIeBbfIOdL8wKcjwC1WE1PQgHXiDJDuiLjFX3mcDA9qesEgQa3mkqyyp1khctkjPqvC3i5Y1LdBw8Qoh00c%2BAFDhoOiBtXh54mf2cFvwVFYeiRio7ErcDwg%2BaaFDlhC8VTeRAw5p3PwQY6pgGmjdgwZ3vt6LUIbDI4ylBFifFYmAkxVtD%2F032TkASRp6CYBoUi3kzPwX58uXqvVfu3Lb7DvM2dzcZ6fUXnJ5GvIzQ5aFZJ2r2pgZ5mXxOqM6cIlZsUMUxmlqVhVKfsIsuyfsROJdcdnHLQmd%2F3tLGQYVn39s33FUdBTzCHHqaSAjgXXH2LlQDO6MegJ5CKJTq0vrSUTv3fhm6JNkpSpEC0h5m6ONFN&X-Amz-Signature=a3c89929526e226d48a96ca79f4933660b6467500a48dee5de0dd4bcdecc1c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLHNKTV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCH3cOKD7gZmG3manWDWm2vkR4YqL3Pkehmb8pyU4Nr2UCIQCdeVeG62cyUpxaD3OuhDWWWPOvWIdyAN%2F5Tr4Mmp2UEyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaZG3hApNMetyIpsxKtwDY6upooAvNsE%2B87HZe7sNk2PqBR3U6s664vd%2FeaeJAxWFvwzbtdREJH2zBOqVD%2F3CsD5S4ad6v0O7LCEaMAI7ph1OXgQDMKlu7hm9AUioShq7p9icSqGdmCWeb682HSk3T7mRCUn8IEQyMlGafCscv9oaE9WnIRxSoZvVFgsBIRrLuSh3OvA3XjQHSZ%2BPWfyE8ZYoVlosyK7HNUrmiVgqIxdKRowuhKWYUG5xLXoaQ2rfCsV1pKknULKBogOkQcRsFFH0yD%2FWFqR4ZsX6M%2FA7joBY9bgHlTDHCputO5zqAvqc%2FiMCZCU%2BnGC8DRC%2FRp1qAS1GI16fohj7L%2FRB6aWZaZQNXMVy9ehE%2BMpei8jkYmfBspWayKlyh2ibrObnWlPds2SHoB7zyhqFzGU3kaVfJUjpq0GYq2qTTJ1GtjBezSPFqbkpNj0gilb%2Fzn7gAi5skFP0mwMFTvR9UwY%2FToFvrGhmmQwu6odUiJmWqF5e3A4uKihy4EvlvcfIeBbfIOdL8wKcjwC1WE1PQgHXiDJDuiLjFX3mcDA9qesEgQa3mkqyyp1khctkjPqvC3i5Y1LdBw8Qoh00c%2BAFDhoOiBtXh54mf2cFvwVFYeiRio7ErcDwg%2BaaFDlhC8VTeRAw5p3PwQY6pgGmjdgwZ3vt6LUIbDI4ylBFifFYmAkxVtD%2F032TkASRp6CYBoUi3kzPwX58uXqvVfu3Lb7DvM2dzcZ6fUXnJ5GvIzQ5aFZJ2r2pgZ5mXxOqM6cIlZsUMUxmlqVhVKfsIsuyfsROJdcdnHLQmd%2F3tLGQYVn39s33FUdBTzCHHqaSAjgXXH2LlQDO6MegJ5CKJTq0vrSUTv3fhm6JNkpSpEC0h5m6ONFN&X-Amz-Signature=232dee674ba3c4f7589328ef656a05d9d701d51d88040c1107eb4cb821ae5541&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
