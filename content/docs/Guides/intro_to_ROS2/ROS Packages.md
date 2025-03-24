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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRCALEE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLwdanOYKJs2qN8rdbfmsQlgjaprDH9ORjBglTKCa3TwIhAKTgZJY9p785FHr2FCSAJTW2l540mhNLNgEk5tuKKFD%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4KFEcRrOnxvyzRAq3AMfr95S62gymP3504yENwWYKqN50cnEdaeHyTAIVcHd%2BLMkBsNX7YXDVVGEk8dJnOJhrP81T3vkQeFU5W54LVrxnB4XadbkWiyg0Le4H5BDopsfKdbE7P2swCAzH1qCBtyEVQefNb4OD4iwreEGagipgIPGOrdQJ%2BSOj6KASSQsnARjZTNH8WBvovoAV%2BjMpZu4cUuvKtr7%2BDexzXfCGZw66HqBVjJDErXjBEXtCt%2FN0fwYmPtazBo64O9yM3nvWlhmN%2BVqKNNTjnMruTIWPpYzdRQYBeVzpjiVNnrR9kJUyuO7uhe4EhwWqXgCCpl7MqrGeaDCTgD0IuxTuBCKCiPg%2ByYXbTFcB3hRFMiJbhreb1w245nLYF%2BDd0UVp5FeP4HiRKslwJEW3WN24LRTFKadZlXnFccPXwVf6iRx1VTRjr2LdZrSXzxvKrjI02H84p9jjur78LfhHqcT5f1HXF12aoE6omTO%2FzFyi9JWfDaPfZQYZASQWmnMjabmHeiBAOt07cBKttscMo7hSpQIhNyHF%2FiAyFAKuWw7T4M8AiNyp2kU9kymKjHNP59gpDYZ01NN691a4YEme5iXEkA86yZeO%2BwpO2sibWT%2F1duTBsKZ1x%2BdHr4vTjHp3VotzjDSsIK%2FBjqkAQr3TJew3S32iPWHg7apBxnTA6yYsSB1v7tVb8PIotuXNTCop%2B52YBJ0xM%2FFSSFZC5BWGhZ%2BlJs%2F%2FGEPY7tjIRS5TU7BnPZQVN8%2Ftx9JK5bjqDJ1acubAsHteDASfvV2NRCtBCeMuPGKimhjgqVxizsHp9IgiM2hTsoXjC9JmcLJ0lhRTgUnoLaQGN6ZjS8aE3iZ7DRaCVRp%2B2s7%2BJyp5vRDkcE6&X-Amz-Signature=8edb9e8179257b86b8bf51cd127d8ba8c4a78949d598678b787f58778d14d048&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRCALEE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLwdanOYKJs2qN8rdbfmsQlgjaprDH9ORjBglTKCa3TwIhAKTgZJY9p785FHr2FCSAJTW2l540mhNLNgEk5tuKKFD%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4KFEcRrOnxvyzRAq3AMfr95S62gymP3504yENwWYKqN50cnEdaeHyTAIVcHd%2BLMkBsNX7YXDVVGEk8dJnOJhrP81T3vkQeFU5W54LVrxnB4XadbkWiyg0Le4H5BDopsfKdbE7P2swCAzH1qCBtyEVQefNb4OD4iwreEGagipgIPGOrdQJ%2BSOj6KASSQsnARjZTNH8WBvovoAV%2BjMpZu4cUuvKtr7%2BDexzXfCGZw66HqBVjJDErXjBEXtCt%2FN0fwYmPtazBo64O9yM3nvWlhmN%2BVqKNNTjnMruTIWPpYzdRQYBeVzpjiVNnrR9kJUyuO7uhe4EhwWqXgCCpl7MqrGeaDCTgD0IuxTuBCKCiPg%2ByYXbTFcB3hRFMiJbhreb1w245nLYF%2BDd0UVp5FeP4HiRKslwJEW3WN24LRTFKadZlXnFccPXwVf6iRx1VTRjr2LdZrSXzxvKrjI02H84p9jjur78LfhHqcT5f1HXF12aoE6omTO%2FzFyi9JWfDaPfZQYZASQWmnMjabmHeiBAOt07cBKttscMo7hSpQIhNyHF%2FiAyFAKuWw7T4M8AiNyp2kU9kymKjHNP59gpDYZ01NN691a4YEme5iXEkA86yZeO%2BwpO2sibWT%2F1duTBsKZ1x%2BdHr4vTjHp3VotzjDSsIK%2FBjqkAQr3TJew3S32iPWHg7apBxnTA6yYsSB1v7tVb8PIotuXNTCop%2B52YBJ0xM%2FFSSFZC5BWGhZ%2BlJs%2F%2FGEPY7tjIRS5TU7BnPZQVN8%2Ftx9JK5bjqDJ1acubAsHteDASfvV2NRCtBCeMuPGKimhjgqVxizsHp9IgiM2hTsoXjC9JmcLJ0lhRTgUnoLaQGN6ZjS8aE3iZ7DRaCVRp%2B2s7%2BJyp5vRDkcE6&X-Amz-Signature=b81341e9dbbaa8c820ebc1b6b47653fa61bad4bf6fe18476040288d62c580009&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRCALEE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLwdanOYKJs2qN8rdbfmsQlgjaprDH9ORjBglTKCa3TwIhAKTgZJY9p785FHr2FCSAJTW2l540mhNLNgEk5tuKKFD%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4KFEcRrOnxvyzRAq3AMfr95S62gymP3504yENwWYKqN50cnEdaeHyTAIVcHd%2BLMkBsNX7YXDVVGEk8dJnOJhrP81T3vkQeFU5W54LVrxnB4XadbkWiyg0Le4H5BDopsfKdbE7P2swCAzH1qCBtyEVQefNb4OD4iwreEGagipgIPGOrdQJ%2BSOj6KASSQsnARjZTNH8WBvovoAV%2BjMpZu4cUuvKtr7%2BDexzXfCGZw66HqBVjJDErXjBEXtCt%2FN0fwYmPtazBo64O9yM3nvWlhmN%2BVqKNNTjnMruTIWPpYzdRQYBeVzpjiVNnrR9kJUyuO7uhe4EhwWqXgCCpl7MqrGeaDCTgD0IuxTuBCKCiPg%2ByYXbTFcB3hRFMiJbhreb1w245nLYF%2BDd0UVp5FeP4HiRKslwJEW3WN24LRTFKadZlXnFccPXwVf6iRx1VTRjr2LdZrSXzxvKrjI02H84p9jjur78LfhHqcT5f1HXF12aoE6omTO%2FzFyi9JWfDaPfZQYZASQWmnMjabmHeiBAOt07cBKttscMo7hSpQIhNyHF%2FiAyFAKuWw7T4M8AiNyp2kU9kymKjHNP59gpDYZ01NN691a4YEme5iXEkA86yZeO%2BwpO2sibWT%2F1duTBsKZ1x%2BdHr4vTjHp3VotzjDSsIK%2FBjqkAQr3TJew3S32iPWHg7apBxnTA6yYsSB1v7tVb8PIotuXNTCop%2B52YBJ0xM%2FFSSFZC5BWGhZ%2BlJs%2F%2FGEPY7tjIRS5TU7BnPZQVN8%2Ftx9JK5bjqDJ1acubAsHteDASfvV2NRCtBCeMuPGKimhjgqVxizsHp9IgiM2hTsoXjC9JmcLJ0lhRTgUnoLaQGN6ZjS8aE3iZ7DRaCVRp%2B2s7%2BJyp5vRDkcE6&X-Amz-Signature=4ec563778f5d87c2c31fa64638dd7758488f411e1d5765c15d0bdb69d3ba53cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRCALEE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLwdanOYKJs2qN8rdbfmsQlgjaprDH9ORjBglTKCa3TwIhAKTgZJY9p785FHr2FCSAJTW2l540mhNLNgEk5tuKKFD%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4KFEcRrOnxvyzRAq3AMfr95S62gymP3504yENwWYKqN50cnEdaeHyTAIVcHd%2BLMkBsNX7YXDVVGEk8dJnOJhrP81T3vkQeFU5W54LVrxnB4XadbkWiyg0Le4H5BDopsfKdbE7P2swCAzH1qCBtyEVQefNb4OD4iwreEGagipgIPGOrdQJ%2BSOj6KASSQsnARjZTNH8WBvovoAV%2BjMpZu4cUuvKtr7%2BDexzXfCGZw66HqBVjJDErXjBEXtCt%2FN0fwYmPtazBo64O9yM3nvWlhmN%2BVqKNNTjnMruTIWPpYzdRQYBeVzpjiVNnrR9kJUyuO7uhe4EhwWqXgCCpl7MqrGeaDCTgD0IuxTuBCKCiPg%2ByYXbTFcB3hRFMiJbhreb1w245nLYF%2BDd0UVp5FeP4HiRKslwJEW3WN24LRTFKadZlXnFccPXwVf6iRx1VTRjr2LdZrSXzxvKrjI02H84p9jjur78LfhHqcT5f1HXF12aoE6omTO%2FzFyi9JWfDaPfZQYZASQWmnMjabmHeiBAOt07cBKttscMo7hSpQIhNyHF%2FiAyFAKuWw7T4M8AiNyp2kU9kymKjHNP59gpDYZ01NN691a4YEme5iXEkA86yZeO%2BwpO2sibWT%2F1duTBsKZ1x%2BdHr4vTjHp3VotzjDSsIK%2FBjqkAQr3TJew3S32iPWHg7apBxnTA6yYsSB1v7tVb8PIotuXNTCop%2B52YBJ0xM%2FFSSFZC5BWGhZ%2BlJs%2F%2FGEPY7tjIRS5TU7BnPZQVN8%2Ftx9JK5bjqDJ1acubAsHteDASfvV2NRCtBCeMuPGKimhjgqVxizsHp9IgiM2hTsoXjC9JmcLJ0lhRTgUnoLaQGN6ZjS8aE3iZ7DRaCVRp%2B2s7%2BJyp5vRDkcE6&X-Amz-Signature=3c711c7dcb13df9c19b316e4eca8d9283489e527cce5533574ba68dc96da9930&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRCALEE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLwdanOYKJs2qN8rdbfmsQlgjaprDH9ORjBglTKCa3TwIhAKTgZJY9p785FHr2FCSAJTW2l540mhNLNgEk5tuKKFD%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4KFEcRrOnxvyzRAq3AMfr95S62gymP3504yENwWYKqN50cnEdaeHyTAIVcHd%2BLMkBsNX7YXDVVGEk8dJnOJhrP81T3vkQeFU5W54LVrxnB4XadbkWiyg0Le4H5BDopsfKdbE7P2swCAzH1qCBtyEVQefNb4OD4iwreEGagipgIPGOrdQJ%2BSOj6KASSQsnARjZTNH8WBvovoAV%2BjMpZu4cUuvKtr7%2BDexzXfCGZw66HqBVjJDErXjBEXtCt%2FN0fwYmPtazBo64O9yM3nvWlhmN%2BVqKNNTjnMruTIWPpYzdRQYBeVzpjiVNnrR9kJUyuO7uhe4EhwWqXgCCpl7MqrGeaDCTgD0IuxTuBCKCiPg%2ByYXbTFcB3hRFMiJbhreb1w245nLYF%2BDd0UVp5FeP4HiRKslwJEW3WN24LRTFKadZlXnFccPXwVf6iRx1VTRjr2LdZrSXzxvKrjI02H84p9jjur78LfhHqcT5f1HXF12aoE6omTO%2FzFyi9JWfDaPfZQYZASQWmnMjabmHeiBAOt07cBKttscMo7hSpQIhNyHF%2FiAyFAKuWw7T4M8AiNyp2kU9kymKjHNP59gpDYZ01NN691a4YEme5iXEkA86yZeO%2BwpO2sibWT%2F1duTBsKZ1x%2BdHr4vTjHp3VotzjDSsIK%2FBjqkAQr3TJew3S32iPWHg7apBxnTA6yYsSB1v7tVb8PIotuXNTCop%2B52YBJ0xM%2FFSSFZC5BWGhZ%2BlJs%2F%2FGEPY7tjIRS5TU7BnPZQVN8%2Ftx9JK5bjqDJ1acubAsHteDASfvV2NRCtBCeMuPGKimhjgqVxizsHp9IgiM2hTsoXjC9JmcLJ0lhRTgUnoLaQGN6ZjS8aE3iZ7DRaCVRp%2B2s7%2BJyp5vRDkcE6&X-Amz-Signature=08b5ee1de14bf0bf5638b1bd0df02e7382c7a59463fe16169d06167e20afa1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRCALEE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLwdanOYKJs2qN8rdbfmsQlgjaprDH9ORjBglTKCa3TwIhAKTgZJY9p785FHr2FCSAJTW2l540mhNLNgEk5tuKKFD%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4KFEcRrOnxvyzRAq3AMfr95S62gymP3504yENwWYKqN50cnEdaeHyTAIVcHd%2BLMkBsNX7YXDVVGEk8dJnOJhrP81T3vkQeFU5W54LVrxnB4XadbkWiyg0Le4H5BDopsfKdbE7P2swCAzH1qCBtyEVQefNb4OD4iwreEGagipgIPGOrdQJ%2BSOj6KASSQsnARjZTNH8WBvovoAV%2BjMpZu4cUuvKtr7%2BDexzXfCGZw66HqBVjJDErXjBEXtCt%2FN0fwYmPtazBo64O9yM3nvWlhmN%2BVqKNNTjnMruTIWPpYzdRQYBeVzpjiVNnrR9kJUyuO7uhe4EhwWqXgCCpl7MqrGeaDCTgD0IuxTuBCKCiPg%2ByYXbTFcB3hRFMiJbhreb1w245nLYF%2BDd0UVp5FeP4HiRKslwJEW3WN24LRTFKadZlXnFccPXwVf6iRx1VTRjr2LdZrSXzxvKrjI02H84p9jjur78LfhHqcT5f1HXF12aoE6omTO%2FzFyi9JWfDaPfZQYZASQWmnMjabmHeiBAOt07cBKttscMo7hSpQIhNyHF%2FiAyFAKuWw7T4M8AiNyp2kU9kymKjHNP59gpDYZ01NN691a4YEme5iXEkA86yZeO%2BwpO2sibWT%2F1duTBsKZ1x%2BdHr4vTjHp3VotzjDSsIK%2FBjqkAQr3TJew3S32iPWHg7apBxnTA6yYsSB1v7tVb8PIotuXNTCop%2B52YBJ0xM%2FFSSFZC5BWGhZ%2BlJs%2F%2FGEPY7tjIRS5TU7BnPZQVN8%2Ftx9JK5bjqDJ1acubAsHteDASfvV2NRCtBCeMuPGKimhjgqVxizsHp9IgiM2hTsoXjC9JmcLJ0lhRTgUnoLaQGN6ZjS8aE3iZ7DRaCVRp%2B2s7%2BJyp5vRDkcE6&X-Amz-Signature=94ab880fe61cb86c4efb330f3368f7cdb28d69196d9e3007e33dfb0d508c19a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRCALEE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLwdanOYKJs2qN8rdbfmsQlgjaprDH9ORjBglTKCa3TwIhAKTgZJY9p785FHr2FCSAJTW2l540mhNLNgEk5tuKKFD%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV4KFEcRrOnxvyzRAq3AMfr95S62gymP3504yENwWYKqN50cnEdaeHyTAIVcHd%2BLMkBsNX7YXDVVGEk8dJnOJhrP81T3vkQeFU5W54LVrxnB4XadbkWiyg0Le4H5BDopsfKdbE7P2swCAzH1qCBtyEVQefNb4OD4iwreEGagipgIPGOrdQJ%2BSOj6KASSQsnARjZTNH8WBvovoAV%2BjMpZu4cUuvKtr7%2BDexzXfCGZw66HqBVjJDErXjBEXtCt%2FN0fwYmPtazBo64O9yM3nvWlhmN%2BVqKNNTjnMruTIWPpYzdRQYBeVzpjiVNnrR9kJUyuO7uhe4EhwWqXgCCpl7MqrGeaDCTgD0IuxTuBCKCiPg%2ByYXbTFcB3hRFMiJbhreb1w245nLYF%2BDd0UVp5FeP4HiRKslwJEW3WN24LRTFKadZlXnFccPXwVf6iRx1VTRjr2LdZrSXzxvKrjI02H84p9jjur78LfhHqcT5f1HXF12aoE6omTO%2FzFyi9JWfDaPfZQYZASQWmnMjabmHeiBAOt07cBKttscMo7hSpQIhNyHF%2FiAyFAKuWw7T4M8AiNyp2kU9kymKjHNP59gpDYZ01NN691a4YEme5iXEkA86yZeO%2BwpO2sibWT%2F1duTBsKZ1x%2BdHr4vTjHp3VotzjDSsIK%2FBjqkAQr3TJew3S32iPWHg7apBxnTA6yYsSB1v7tVb8PIotuXNTCop%2B52YBJ0xM%2FFSSFZC5BWGhZ%2BlJs%2F%2FGEPY7tjIRS5TU7BnPZQVN8%2Ftx9JK5bjqDJ1acubAsHteDASfvV2NRCtBCeMuPGKimhjgqVxizsHp9IgiM2hTsoXjC9JmcLJ0lhRTgUnoLaQGN6ZjS8aE3iZ7DRaCVRp%2B2s7%2BJyp5vRDkcE6&X-Amz-Signature=aac056c98e02458f27844d24e0e61f6520b9d777f02e87cb69f4cc86b8f4c3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
