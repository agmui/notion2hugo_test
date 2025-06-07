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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJMEOI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtFrudSn9W62bWfypZG7aFX9TYHixVu4O7ZtBOhzeTAiEAjh9CMB20I3yO33T5TIzv8jNg7nbbuj8WYRf9oWPeUsUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFOH3mJxyCzgTOFaSrcA59IqyrXfdYwUjcFeTfn37V%2Bapu7g%2BNf%2Fbqg6x2c34EZfi7%2FVN24TJFcNM%2F5tRuJKgI66H1Mta4RzY1L0KTzEpjWpo0W68eQnk4VCp3g3yJhwuByK4VLmlFHq%2FYxSbwfOwTXIzcwfNb699DuXFTYkGcraf5QfKvy%2B0rpaffQC06SSI56mesScMPSM64a8%2BPx3bpd1dKrmL%2BMkEJugvWXKf8UatMZy9s1uZtttklexiVrOAK%2Bx%2FB7%2Fa561gtznAeBNKbaWO3jLp98QwviqhYZI9k6JzJoJBwIGBKDM4CCYML89vkYYrepSqK8DZ0veR64BcjYiSo9UeDjtwX4%2FnCi2HAydiQmpGoJ5LAUzBiHUDy0biTPEPZ0XTtOrEJsP8QHpy5hHtVjpqx9vkhdSE%2B1qcB0AUm%2F8Ug%2FuUp2Y8RuJxYTUFUT5D3ob1Lu%2B1kWOr7w3SHmhHLT%2F4A7C2sXwJ6O7RFRlq%2B%2FrrhRQD2QR%2BWwnh45Nc9bu4evxwMCEfOFbRjA8RGc2dRnn5v2bTnPMP94J9l5PlSU4lfq9xN96YcsL4Gld60nOB44dMJohD05dGY2O0nzFJ%2BuW%2FMdV%2Fj%2FvShFAS%2BCt5c1AMPbEbfIA6rtrMsMLNXZ2C0MT6DJ5hunMPvSksIGOqUB8j6be1ZQpZz7fuQYo5N7UT9rje8L%2FfNQgnqBFSRUX4T5Kgo0EapqVVeZIK0K2YpwMRXjZiAw0YAdwm9r%2FrPCkz9AQSF%2FZ%2BocGG8cllIxfDHyRsE1hlWM0eqYEq9i8cmQaoezi5tmv0JAJNxE9kp4TeiU3u4ZaHA7q4LpfgvTtVCikAlAwCiX7%2FU%2Bokf1jGSp%2FKqKJbAn03uSCUZY9TRlgNYlhj78&X-Amz-Signature=f671190cd535028ece388e2e822eb6bd2cec9d06d271d8c8bbb19365ad18af41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJMEOI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtFrudSn9W62bWfypZG7aFX9TYHixVu4O7ZtBOhzeTAiEAjh9CMB20I3yO33T5TIzv8jNg7nbbuj8WYRf9oWPeUsUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFOH3mJxyCzgTOFaSrcA59IqyrXfdYwUjcFeTfn37V%2Bapu7g%2BNf%2Fbqg6x2c34EZfi7%2FVN24TJFcNM%2F5tRuJKgI66H1Mta4RzY1L0KTzEpjWpo0W68eQnk4VCp3g3yJhwuByK4VLmlFHq%2FYxSbwfOwTXIzcwfNb699DuXFTYkGcraf5QfKvy%2B0rpaffQC06SSI56mesScMPSM64a8%2BPx3bpd1dKrmL%2BMkEJugvWXKf8UatMZy9s1uZtttklexiVrOAK%2Bx%2FB7%2Fa561gtznAeBNKbaWO3jLp98QwviqhYZI9k6JzJoJBwIGBKDM4CCYML89vkYYrepSqK8DZ0veR64BcjYiSo9UeDjtwX4%2FnCi2HAydiQmpGoJ5LAUzBiHUDy0biTPEPZ0XTtOrEJsP8QHpy5hHtVjpqx9vkhdSE%2B1qcB0AUm%2F8Ug%2FuUp2Y8RuJxYTUFUT5D3ob1Lu%2B1kWOr7w3SHmhHLT%2F4A7C2sXwJ6O7RFRlq%2B%2FrrhRQD2QR%2BWwnh45Nc9bu4evxwMCEfOFbRjA8RGc2dRnn5v2bTnPMP94J9l5PlSU4lfq9xN96YcsL4Gld60nOB44dMJohD05dGY2O0nzFJ%2BuW%2FMdV%2Fj%2FvShFAS%2BCt5c1AMPbEbfIA6rtrMsMLNXZ2C0MT6DJ5hunMPvSksIGOqUB8j6be1ZQpZz7fuQYo5N7UT9rje8L%2FfNQgnqBFSRUX4T5Kgo0EapqVVeZIK0K2YpwMRXjZiAw0YAdwm9r%2FrPCkz9AQSF%2FZ%2BocGG8cllIxfDHyRsE1hlWM0eqYEq9i8cmQaoezi5tmv0JAJNxE9kp4TeiU3u4ZaHA7q4LpfgvTtVCikAlAwCiX7%2FU%2Bokf1jGSp%2FKqKJbAn03uSCUZY9TRlgNYlhj78&X-Amz-Signature=9e967ff8c12e4974fe89615c60ef26c57f534c2e4a74b25bae027a500e3eafa7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJMEOI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtFrudSn9W62bWfypZG7aFX9TYHixVu4O7ZtBOhzeTAiEAjh9CMB20I3yO33T5TIzv8jNg7nbbuj8WYRf9oWPeUsUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFOH3mJxyCzgTOFaSrcA59IqyrXfdYwUjcFeTfn37V%2Bapu7g%2BNf%2Fbqg6x2c34EZfi7%2FVN24TJFcNM%2F5tRuJKgI66H1Mta4RzY1L0KTzEpjWpo0W68eQnk4VCp3g3yJhwuByK4VLmlFHq%2FYxSbwfOwTXIzcwfNb699DuXFTYkGcraf5QfKvy%2B0rpaffQC06SSI56mesScMPSM64a8%2BPx3bpd1dKrmL%2BMkEJugvWXKf8UatMZy9s1uZtttklexiVrOAK%2Bx%2FB7%2Fa561gtznAeBNKbaWO3jLp98QwviqhYZI9k6JzJoJBwIGBKDM4CCYML89vkYYrepSqK8DZ0veR64BcjYiSo9UeDjtwX4%2FnCi2HAydiQmpGoJ5LAUzBiHUDy0biTPEPZ0XTtOrEJsP8QHpy5hHtVjpqx9vkhdSE%2B1qcB0AUm%2F8Ug%2FuUp2Y8RuJxYTUFUT5D3ob1Lu%2B1kWOr7w3SHmhHLT%2F4A7C2sXwJ6O7RFRlq%2B%2FrrhRQD2QR%2BWwnh45Nc9bu4evxwMCEfOFbRjA8RGc2dRnn5v2bTnPMP94J9l5PlSU4lfq9xN96YcsL4Gld60nOB44dMJohD05dGY2O0nzFJ%2BuW%2FMdV%2Fj%2FvShFAS%2BCt5c1AMPbEbfIA6rtrMsMLNXZ2C0MT6DJ5hunMPvSksIGOqUB8j6be1ZQpZz7fuQYo5N7UT9rje8L%2FfNQgnqBFSRUX4T5Kgo0EapqVVeZIK0K2YpwMRXjZiAw0YAdwm9r%2FrPCkz9AQSF%2FZ%2BocGG8cllIxfDHyRsE1hlWM0eqYEq9i8cmQaoezi5tmv0JAJNxE9kp4TeiU3u4ZaHA7q4LpfgvTtVCikAlAwCiX7%2FU%2Bokf1jGSp%2FKqKJbAn03uSCUZY9TRlgNYlhj78&X-Amz-Signature=85651bbfe1572f80f1d94621e4983dc82ad6841fa7660cd74ecd60f45a9e5461&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJMEOI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtFrudSn9W62bWfypZG7aFX9TYHixVu4O7ZtBOhzeTAiEAjh9CMB20I3yO33T5TIzv8jNg7nbbuj8WYRf9oWPeUsUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFOH3mJxyCzgTOFaSrcA59IqyrXfdYwUjcFeTfn37V%2Bapu7g%2BNf%2Fbqg6x2c34EZfi7%2FVN24TJFcNM%2F5tRuJKgI66H1Mta4RzY1L0KTzEpjWpo0W68eQnk4VCp3g3yJhwuByK4VLmlFHq%2FYxSbwfOwTXIzcwfNb699DuXFTYkGcraf5QfKvy%2B0rpaffQC06SSI56mesScMPSM64a8%2BPx3bpd1dKrmL%2BMkEJugvWXKf8UatMZy9s1uZtttklexiVrOAK%2Bx%2FB7%2Fa561gtznAeBNKbaWO3jLp98QwviqhYZI9k6JzJoJBwIGBKDM4CCYML89vkYYrepSqK8DZ0veR64BcjYiSo9UeDjtwX4%2FnCi2HAydiQmpGoJ5LAUzBiHUDy0biTPEPZ0XTtOrEJsP8QHpy5hHtVjpqx9vkhdSE%2B1qcB0AUm%2F8Ug%2FuUp2Y8RuJxYTUFUT5D3ob1Lu%2B1kWOr7w3SHmhHLT%2F4A7C2sXwJ6O7RFRlq%2B%2FrrhRQD2QR%2BWwnh45Nc9bu4evxwMCEfOFbRjA8RGc2dRnn5v2bTnPMP94J9l5PlSU4lfq9xN96YcsL4Gld60nOB44dMJohD05dGY2O0nzFJ%2BuW%2FMdV%2Fj%2FvShFAS%2BCt5c1AMPbEbfIA6rtrMsMLNXZ2C0MT6DJ5hunMPvSksIGOqUB8j6be1ZQpZz7fuQYo5N7UT9rje8L%2FfNQgnqBFSRUX4T5Kgo0EapqVVeZIK0K2YpwMRXjZiAw0YAdwm9r%2FrPCkz9AQSF%2FZ%2BocGG8cllIxfDHyRsE1hlWM0eqYEq9i8cmQaoezi5tmv0JAJNxE9kp4TeiU3u4ZaHA7q4LpfgvTtVCikAlAwCiX7%2FU%2Bokf1jGSp%2FKqKJbAn03uSCUZY9TRlgNYlhj78&X-Amz-Signature=c45c404a14ac06533d44249801f88a3c96bf242d6ce102e8787623f7316fe494&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJMEOI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtFrudSn9W62bWfypZG7aFX9TYHixVu4O7ZtBOhzeTAiEAjh9CMB20I3yO33T5TIzv8jNg7nbbuj8WYRf9oWPeUsUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFOH3mJxyCzgTOFaSrcA59IqyrXfdYwUjcFeTfn37V%2Bapu7g%2BNf%2Fbqg6x2c34EZfi7%2FVN24TJFcNM%2F5tRuJKgI66H1Mta4RzY1L0KTzEpjWpo0W68eQnk4VCp3g3yJhwuByK4VLmlFHq%2FYxSbwfOwTXIzcwfNb699DuXFTYkGcraf5QfKvy%2B0rpaffQC06SSI56mesScMPSM64a8%2BPx3bpd1dKrmL%2BMkEJugvWXKf8UatMZy9s1uZtttklexiVrOAK%2Bx%2FB7%2Fa561gtznAeBNKbaWO3jLp98QwviqhYZI9k6JzJoJBwIGBKDM4CCYML89vkYYrepSqK8DZ0veR64BcjYiSo9UeDjtwX4%2FnCi2HAydiQmpGoJ5LAUzBiHUDy0biTPEPZ0XTtOrEJsP8QHpy5hHtVjpqx9vkhdSE%2B1qcB0AUm%2F8Ug%2FuUp2Y8RuJxYTUFUT5D3ob1Lu%2B1kWOr7w3SHmhHLT%2F4A7C2sXwJ6O7RFRlq%2B%2FrrhRQD2QR%2BWwnh45Nc9bu4evxwMCEfOFbRjA8RGc2dRnn5v2bTnPMP94J9l5PlSU4lfq9xN96YcsL4Gld60nOB44dMJohD05dGY2O0nzFJ%2BuW%2FMdV%2Fj%2FvShFAS%2BCt5c1AMPbEbfIA6rtrMsMLNXZ2C0MT6DJ5hunMPvSksIGOqUB8j6be1ZQpZz7fuQYo5N7UT9rje8L%2FfNQgnqBFSRUX4T5Kgo0EapqVVeZIK0K2YpwMRXjZiAw0YAdwm9r%2FrPCkz9AQSF%2FZ%2BocGG8cllIxfDHyRsE1hlWM0eqYEq9i8cmQaoezi5tmv0JAJNxE9kp4TeiU3u4ZaHA7q4LpfgvTtVCikAlAwCiX7%2FU%2Bokf1jGSp%2FKqKJbAn03uSCUZY9TRlgNYlhj78&X-Amz-Signature=7d966765ae87c3475dcbc7367d4b5b13721bed05e57ac0cecfd7a46be26e9a79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJMEOI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtFrudSn9W62bWfypZG7aFX9TYHixVu4O7ZtBOhzeTAiEAjh9CMB20I3yO33T5TIzv8jNg7nbbuj8WYRf9oWPeUsUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFOH3mJxyCzgTOFaSrcA59IqyrXfdYwUjcFeTfn37V%2Bapu7g%2BNf%2Fbqg6x2c34EZfi7%2FVN24TJFcNM%2F5tRuJKgI66H1Mta4RzY1L0KTzEpjWpo0W68eQnk4VCp3g3yJhwuByK4VLmlFHq%2FYxSbwfOwTXIzcwfNb699DuXFTYkGcraf5QfKvy%2B0rpaffQC06SSI56mesScMPSM64a8%2BPx3bpd1dKrmL%2BMkEJugvWXKf8UatMZy9s1uZtttklexiVrOAK%2Bx%2FB7%2Fa561gtznAeBNKbaWO3jLp98QwviqhYZI9k6JzJoJBwIGBKDM4CCYML89vkYYrepSqK8DZ0veR64BcjYiSo9UeDjtwX4%2FnCi2HAydiQmpGoJ5LAUzBiHUDy0biTPEPZ0XTtOrEJsP8QHpy5hHtVjpqx9vkhdSE%2B1qcB0AUm%2F8Ug%2FuUp2Y8RuJxYTUFUT5D3ob1Lu%2B1kWOr7w3SHmhHLT%2F4A7C2sXwJ6O7RFRlq%2B%2FrrhRQD2QR%2BWwnh45Nc9bu4evxwMCEfOFbRjA8RGc2dRnn5v2bTnPMP94J9l5PlSU4lfq9xN96YcsL4Gld60nOB44dMJohD05dGY2O0nzFJ%2BuW%2FMdV%2Fj%2FvShFAS%2BCt5c1AMPbEbfIA6rtrMsMLNXZ2C0MT6DJ5hunMPvSksIGOqUB8j6be1ZQpZz7fuQYo5N7UT9rje8L%2FfNQgnqBFSRUX4T5Kgo0EapqVVeZIK0K2YpwMRXjZiAw0YAdwm9r%2FrPCkz9AQSF%2FZ%2BocGG8cllIxfDHyRsE1hlWM0eqYEq9i8cmQaoezi5tmv0JAJNxE9kp4TeiU3u4ZaHA7q4LpfgvTtVCikAlAwCiX7%2FU%2Bokf1jGSp%2FKqKJbAn03uSCUZY9TRlgNYlhj78&X-Amz-Signature=cf7cfec72731535a896a31d81e6713ec1969d3c228a0c87239f5c476ba034177&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZJMEOI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAtFrudSn9W62bWfypZG7aFX9TYHixVu4O7ZtBOhzeTAiEAjh9CMB20I3yO33T5TIzv8jNg7nbbuj8WYRf9oWPeUsUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDFOH3mJxyCzgTOFaSrcA59IqyrXfdYwUjcFeTfn37V%2Bapu7g%2BNf%2Fbqg6x2c34EZfi7%2FVN24TJFcNM%2F5tRuJKgI66H1Mta4RzY1L0KTzEpjWpo0W68eQnk4VCp3g3yJhwuByK4VLmlFHq%2FYxSbwfOwTXIzcwfNb699DuXFTYkGcraf5QfKvy%2B0rpaffQC06SSI56mesScMPSM64a8%2BPx3bpd1dKrmL%2BMkEJugvWXKf8UatMZy9s1uZtttklexiVrOAK%2Bx%2FB7%2Fa561gtznAeBNKbaWO3jLp98QwviqhYZI9k6JzJoJBwIGBKDM4CCYML89vkYYrepSqK8DZ0veR64BcjYiSo9UeDjtwX4%2FnCi2HAydiQmpGoJ5LAUzBiHUDy0biTPEPZ0XTtOrEJsP8QHpy5hHtVjpqx9vkhdSE%2B1qcB0AUm%2F8Ug%2FuUp2Y8RuJxYTUFUT5D3ob1Lu%2B1kWOr7w3SHmhHLT%2F4A7C2sXwJ6O7RFRlq%2B%2FrrhRQD2QR%2BWwnh45Nc9bu4evxwMCEfOFbRjA8RGc2dRnn5v2bTnPMP94J9l5PlSU4lfq9xN96YcsL4Gld60nOB44dMJohD05dGY2O0nzFJ%2BuW%2FMdV%2Fj%2FvShFAS%2BCt5c1AMPbEbfIA6rtrMsMLNXZ2C0MT6DJ5hunMPvSksIGOqUB8j6be1ZQpZz7fuQYo5N7UT9rje8L%2FfNQgnqBFSRUX4T5Kgo0EapqVVeZIK0K2YpwMRXjZiAw0YAdwm9r%2FrPCkz9AQSF%2FZ%2BocGG8cllIxfDHyRsE1hlWM0eqYEq9i8cmQaoezi5tmv0JAJNxE9kp4TeiU3u4ZaHA7q4LpfgvTtVCikAlAwCiX7%2FU%2Bokf1jGSp%2FKqKJbAn03uSCUZY9TRlgNYlhj78&X-Amz-Signature=d6c96c771e00adf0d250b1d081fc768fb10f15b436fbeb1b680d3e3c0a4b3fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
