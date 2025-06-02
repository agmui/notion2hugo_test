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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YID6ZMR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGJid1k5kVpJWoKTZXVyMYDlN6mrqnV9Sc8tZo7Mc7x1AiEA85sE6lUs1isfrG1hVp1jMAo026pXmiORBr183GkfChAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaO9m0DgYSMEVCEBSrcA8BkrS%2FGhf8A7JjRrFsxcDUfgwptkP%2FHrXKMf7Px4ot3mfcXvP8DkdCpZayXo0h062jt3uX3vzaVH4EH2w09AFJjGescc7R38CxX8tBRV3x1Y%2FnLiUPEi3i9yjYQwNnna%2Bbkn18KsgO0wD%2FwKCunF0rVDXgep9Da0TKZtymUBT%2Bme0nUOggwrULYZeqRJElGFgkGI%2FssJItRRbDZ8VatpsuNgV41B7xVb4GY3DGyazWCzq8NDXQW3DTbqW3ab%2F53Q3zDV8Etf1cLSMB2LbRR57pgD5yHsuiVszluJbkA%2FFo6bWzTedMhEF9xn8NHAT7Rb4ciJzNBmSV0D55G89MXDsUPc8oNTgy73afl7A%2FdNDeHynu3XkzPMWW1gT11%2Bk0EQq9EE2aac%2FPtATpaP4VDsoSRgUOEQNVFmMwHfDmDPid%2FQs%2FgFIsJH1AM61SEZbrGh2hH%2FiLlzWM0JWIaxGoow6yh901N2Ar6HlYrps1N10Db9JMxCWuIUBytfhHDWLDYaKsmEuUMzOS9P3xpkSPEe61QZdMQt0lAO2gemC%2BGdz2KwZHkYQZ7h%2BC3ehP5XLK8WceNnIl9u5Z81STGpW0iYoso%2B0dXC6Bf8FGsBGpXAd2MbWKnNEehcay3EJWEMLTV9sEGOqUB4ZKcVL9MyphaPvZieLsVUNMQbZamEgd3u3tg06c3GhL12JtuLYfumtRGWNSzApoJ469HJVX4qkUeXGVro3Wg6S6%2B4lZ%2FsW0HTJkwsit0cg6C2%2FGh1XyBBYURwOwlstppb59%2BdLtmC6pRw8NqWz1m7%2FjeHWpFDeojLNta3yIxUg95QBQPH7lovZlrVjfDhrfUSOaxaNYgEnEZv4nQZEQSkcwwpX7I&X-Amz-Signature=ce57625adc6f80bb25691c29d73afe7d21ec649a145719b457ee3e53b9425ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YID6ZMR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGJid1k5kVpJWoKTZXVyMYDlN6mrqnV9Sc8tZo7Mc7x1AiEA85sE6lUs1isfrG1hVp1jMAo026pXmiORBr183GkfChAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaO9m0DgYSMEVCEBSrcA8BkrS%2FGhf8A7JjRrFsxcDUfgwptkP%2FHrXKMf7Px4ot3mfcXvP8DkdCpZayXo0h062jt3uX3vzaVH4EH2w09AFJjGescc7R38CxX8tBRV3x1Y%2FnLiUPEi3i9yjYQwNnna%2Bbkn18KsgO0wD%2FwKCunF0rVDXgep9Da0TKZtymUBT%2Bme0nUOggwrULYZeqRJElGFgkGI%2FssJItRRbDZ8VatpsuNgV41B7xVb4GY3DGyazWCzq8NDXQW3DTbqW3ab%2F53Q3zDV8Etf1cLSMB2LbRR57pgD5yHsuiVszluJbkA%2FFo6bWzTedMhEF9xn8NHAT7Rb4ciJzNBmSV0D55G89MXDsUPc8oNTgy73afl7A%2FdNDeHynu3XkzPMWW1gT11%2Bk0EQq9EE2aac%2FPtATpaP4VDsoSRgUOEQNVFmMwHfDmDPid%2FQs%2FgFIsJH1AM61SEZbrGh2hH%2FiLlzWM0JWIaxGoow6yh901N2Ar6HlYrps1N10Db9JMxCWuIUBytfhHDWLDYaKsmEuUMzOS9P3xpkSPEe61QZdMQt0lAO2gemC%2BGdz2KwZHkYQZ7h%2BC3ehP5XLK8WceNnIl9u5Z81STGpW0iYoso%2B0dXC6Bf8FGsBGpXAd2MbWKnNEehcay3EJWEMLTV9sEGOqUB4ZKcVL9MyphaPvZieLsVUNMQbZamEgd3u3tg06c3GhL12JtuLYfumtRGWNSzApoJ469HJVX4qkUeXGVro3Wg6S6%2B4lZ%2FsW0HTJkwsit0cg6C2%2FGh1XyBBYURwOwlstppb59%2BdLtmC6pRw8NqWz1m7%2FjeHWpFDeojLNta3yIxUg95QBQPH7lovZlrVjfDhrfUSOaxaNYgEnEZv4nQZEQSkcwwpX7I&X-Amz-Signature=daf49e604ef0c327e8990aa39e092c2843a3892ddfe5acb86b3bdf14880ad477&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YID6ZMR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGJid1k5kVpJWoKTZXVyMYDlN6mrqnV9Sc8tZo7Mc7x1AiEA85sE6lUs1isfrG1hVp1jMAo026pXmiORBr183GkfChAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaO9m0DgYSMEVCEBSrcA8BkrS%2FGhf8A7JjRrFsxcDUfgwptkP%2FHrXKMf7Px4ot3mfcXvP8DkdCpZayXo0h062jt3uX3vzaVH4EH2w09AFJjGescc7R38CxX8tBRV3x1Y%2FnLiUPEi3i9yjYQwNnna%2Bbkn18KsgO0wD%2FwKCunF0rVDXgep9Da0TKZtymUBT%2Bme0nUOggwrULYZeqRJElGFgkGI%2FssJItRRbDZ8VatpsuNgV41B7xVb4GY3DGyazWCzq8NDXQW3DTbqW3ab%2F53Q3zDV8Etf1cLSMB2LbRR57pgD5yHsuiVszluJbkA%2FFo6bWzTedMhEF9xn8NHAT7Rb4ciJzNBmSV0D55G89MXDsUPc8oNTgy73afl7A%2FdNDeHynu3XkzPMWW1gT11%2Bk0EQq9EE2aac%2FPtATpaP4VDsoSRgUOEQNVFmMwHfDmDPid%2FQs%2FgFIsJH1AM61SEZbrGh2hH%2FiLlzWM0JWIaxGoow6yh901N2Ar6HlYrps1N10Db9JMxCWuIUBytfhHDWLDYaKsmEuUMzOS9P3xpkSPEe61QZdMQt0lAO2gemC%2BGdz2KwZHkYQZ7h%2BC3ehP5XLK8WceNnIl9u5Z81STGpW0iYoso%2B0dXC6Bf8FGsBGpXAd2MbWKnNEehcay3EJWEMLTV9sEGOqUB4ZKcVL9MyphaPvZieLsVUNMQbZamEgd3u3tg06c3GhL12JtuLYfumtRGWNSzApoJ469HJVX4qkUeXGVro3Wg6S6%2B4lZ%2FsW0HTJkwsit0cg6C2%2FGh1XyBBYURwOwlstppb59%2BdLtmC6pRw8NqWz1m7%2FjeHWpFDeojLNta3yIxUg95QBQPH7lovZlrVjfDhrfUSOaxaNYgEnEZv4nQZEQSkcwwpX7I&X-Amz-Signature=f92c55ecefefe82e9a639cf032ce36720d6f62b2897a47fa7942b544c99c4407&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YID6ZMR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGJid1k5kVpJWoKTZXVyMYDlN6mrqnV9Sc8tZo7Mc7x1AiEA85sE6lUs1isfrG1hVp1jMAo026pXmiORBr183GkfChAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaO9m0DgYSMEVCEBSrcA8BkrS%2FGhf8A7JjRrFsxcDUfgwptkP%2FHrXKMf7Px4ot3mfcXvP8DkdCpZayXo0h062jt3uX3vzaVH4EH2w09AFJjGescc7R38CxX8tBRV3x1Y%2FnLiUPEi3i9yjYQwNnna%2Bbkn18KsgO0wD%2FwKCunF0rVDXgep9Da0TKZtymUBT%2Bme0nUOggwrULYZeqRJElGFgkGI%2FssJItRRbDZ8VatpsuNgV41B7xVb4GY3DGyazWCzq8NDXQW3DTbqW3ab%2F53Q3zDV8Etf1cLSMB2LbRR57pgD5yHsuiVszluJbkA%2FFo6bWzTedMhEF9xn8NHAT7Rb4ciJzNBmSV0D55G89MXDsUPc8oNTgy73afl7A%2FdNDeHynu3XkzPMWW1gT11%2Bk0EQq9EE2aac%2FPtATpaP4VDsoSRgUOEQNVFmMwHfDmDPid%2FQs%2FgFIsJH1AM61SEZbrGh2hH%2FiLlzWM0JWIaxGoow6yh901N2Ar6HlYrps1N10Db9JMxCWuIUBytfhHDWLDYaKsmEuUMzOS9P3xpkSPEe61QZdMQt0lAO2gemC%2BGdz2KwZHkYQZ7h%2BC3ehP5XLK8WceNnIl9u5Z81STGpW0iYoso%2B0dXC6Bf8FGsBGpXAd2MbWKnNEehcay3EJWEMLTV9sEGOqUB4ZKcVL9MyphaPvZieLsVUNMQbZamEgd3u3tg06c3GhL12JtuLYfumtRGWNSzApoJ469HJVX4qkUeXGVro3Wg6S6%2B4lZ%2FsW0HTJkwsit0cg6C2%2FGh1XyBBYURwOwlstppb59%2BdLtmC6pRw8NqWz1m7%2FjeHWpFDeojLNta3yIxUg95QBQPH7lovZlrVjfDhrfUSOaxaNYgEnEZv4nQZEQSkcwwpX7I&X-Amz-Signature=ab46eb37567cb9fc03cb4e497c8e0c7f9ff9e55c7cac69c41457619f2b350985&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YID6ZMR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGJid1k5kVpJWoKTZXVyMYDlN6mrqnV9Sc8tZo7Mc7x1AiEA85sE6lUs1isfrG1hVp1jMAo026pXmiORBr183GkfChAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaO9m0DgYSMEVCEBSrcA8BkrS%2FGhf8A7JjRrFsxcDUfgwptkP%2FHrXKMf7Px4ot3mfcXvP8DkdCpZayXo0h062jt3uX3vzaVH4EH2w09AFJjGescc7R38CxX8tBRV3x1Y%2FnLiUPEi3i9yjYQwNnna%2Bbkn18KsgO0wD%2FwKCunF0rVDXgep9Da0TKZtymUBT%2Bme0nUOggwrULYZeqRJElGFgkGI%2FssJItRRbDZ8VatpsuNgV41B7xVb4GY3DGyazWCzq8NDXQW3DTbqW3ab%2F53Q3zDV8Etf1cLSMB2LbRR57pgD5yHsuiVszluJbkA%2FFo6bWzTedMhEF9xn8NHAT7Rb4ciJzNBmSV0D55G89MXDsUPc8oNTgy73afl7A%2FdNDeHynu3XkzPMWW1gT11%2Bk0EQq9EE2aac%2FPtATpaP4VDsoSRgUOEQNVFmMwHfDmDPid%2FQs%2FgFIsJH1AM61SEZbrGh2hH%2FiLlzWM0JWIaxGoow6yh901N2Ar6HlYrps1N10Db9JMxCWuIUBytfhHDWLDYaKsmEuUMzOS9P3xpkSPEe61QZdMQt0lAO2gemC%2BGdz2KwZHkYQZ7h%2BC3ehP5XLK8WceNnIl9u5Z81STGpW0iYoso%2B0dXC6Bf8FGsBGpXAd2MbWKnNEehcay3EJWEMLTV9sEGOqUB4ZKcVL9MyphaPvZieLsVUNMQbZamEgd3u3tg06c3GhL12JtuLYfumtRGWNSzApoJ469HJVX4qkUeXGVro3Wg6S6%2B4lZ%2FsW0HTJkwsit0cg6C2%2FGh1XyBBYURwOwlstppb59%2BdLtmC6pRw8NqWz1m7%2FjeHWpFDeojLNta3yIxUg95QBQPH7lovZlrVjfDhrfUSOaxaNYgEnEZv4nQZEQSkcwwpX7I&X-Amz-Signature=d61a42c18e1cc759141f0cc9e487d1facf4d38ef562696092e97066f328d906e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YID6ZMR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGJid1k5kVpJWoKTZXVyMYDlN6mrqnV9Sc8tZo7Mc7x1AiEA85sE6lUs1isfrG1hVp1jMAo026pXmiORBr183GkfChAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaO9m0DgYSMEVCEBSrcA8BkrS%2FGhf8A7JjRrFsxcDUfgwptkP%2FHrXKMf7Px4ot3mfcXvP8DkdCpZayXo0h062jt3uX3vzaVH4EH2w09AFJjGescc7R38CxX8tBRV3x1Y%2FnLiUPEi3i9yjYQwNnna%2Bbkn18KsgO0wD%2FwKCunF0rVDXgep9Da0TKZtymUBT%2Bme0nUOggwrULYZeqRJElGFgkGI%2FssJItRRbDZ8VatpsuNgV41B7xVb4GY3DGyazWCzq8NDXQW3DTbqW3ab%2F53Q3zDV8Etf1cLSMB2LbRR57pgD5yHsuiVszluJbkA%2FFo6bWzTedMhEF9xn8NHAT7Rb4ciJzNBmSV0D55G89MXDsUPc8oNTgy73afl7A%2FdNDeHynu3XkzPMWW1gT11%2Bk0EQq9EE2aac%2FPtATpaP4VDsoSRgUOEQNVFmMwHfDmDPid%2FQs%2FgFIsJH1AM61SEZbrGh2hH%2FiLlzWM0JWIaxGoow6yh901N2Ar6HlYrps1N10Db9JMxCWuIUBytfhHDWLDYaKsmEuUMzOS9P3xpkSPEe61QZdMQt0lAO2gemC%2BGdz2KwZHkYQZ7h%2BC3ehP5XLK8WceNnIl9u5Z81STGpW0iYoso%2B0dXC6Bf8FGsBGpXAd2MbWKnNEehcay3EJWEMLTV9sEGOqUB4ZKcVL9MyphaPvZieLsVUNMQbZamEgd3u3tg06c3GhL12JtuLYfumtRGWNSzApoJ469HJVX4qkUeXGVro3Wg6S6%2B4lZ%2FsW0HTJkwsit0cg6C2%2FGh1XyBBYURwOwlstppb59%2BdLtmC6pRw8NqWz1m7%2FjeHWpFDeojLNta3yIxUg95QBQPH7lovZlrVjfDhrfUSOaxaNYgEnEZv4nQZEQSkcwwpX7I&X-Amz-Signature=933837c6cd7f12c2946b8031b1bbd02bc4ea20d77b55693e5b6b440be8c00448&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YID6ZMR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGJid1k5kVpJWoKTZXVyMYDlN6mrqnV9Sc8tZo7Mc7x1AiEA85sE6lUs1isfrG1hVp1jMAo026pXmiORBr183GkfChAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaO9m0DgYSMEVCEBSrcA8BkrS%2FGhf8A7JjRrFsxcDUfgwptkP%2FHrXKMf7Px4ot3mfcXvP8DkdCpZayXo0h062jt3uX3vzaVH4EH2w09AFJjGescc7R38CxX8tBRV3x1Y%2FnLiUPEi3i9yjYQwNnna%2Bbkn18KsgO0wD%2FwKCunF0rVDXgep9Da0TKZtymUBT%2Bme0nUOggwrULYZeqRJElGFgkGI%2FssJItRRbDZ8VatpsuNgV41B7xVb4GY3DGyazWCzq8NDXQW3DTbqW3ab%2F53Q3zDV8Etf1cLSMB2LbRR57pgD5yHsuiVszluJbkA%2FFo6bWzTedMhEF9xn8NHAT7Rb4ciJzNBmSV0D55G89MXDsUPc8oNTgy73afl7A%2FdNDeHynu3XkzPMWW1gT11%2Bk0EQq9EE2aac%2FPtATpaP4VDsoSRgUOEQNVFmMwHfDmDPid%2FQs%2FgFIsJH1AM61SEZbrGh2hH%2FiLlzWM0JWIaxGoow6yh901N2Ar6HlYrps1N10Db9JMxCWuIUBytfhHDWLDYaKsmEuUMzOS9P3xpkSPEe61QZdMQt0lAO2gemC%2BGdz2KwZHkYQZ7h%2BC3ehP5XLK8WceNnIl9u5Z81STGpW0iYoso%2B0dXC6Bf8FGsBGpXAd2MbWKnNEehcay3EJWEMLTV9sEGOqUB4ZKcVL9MyphaPvZieLsVUNMQbZamEgd3u3tg06c3GhL12JtuLYfumtRGWNSzApoJ469HJVX4qkUeXGVro3Wg6S6%2B4lZ%2FsW0HTJkwsit0cg6C2%2FGh1XyBBYURwOwlstppb59%2BdLtmC6pRw8NqWz1m7%2FjeHWpFDeojLNta3yIxUg95QBQPH7lovZlrVjfDhrfUSOaxaNYgEnEZv4nQZEQSkcwwpX7I&X-Amz-Signature=5e4fab88398f445702507156fb5de74431fb37eaa15fe7b5ed8cb18c17b7aa3b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
