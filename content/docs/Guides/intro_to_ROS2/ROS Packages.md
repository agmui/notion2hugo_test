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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22LPO2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeE89qsSvgpmDQh3NUii0T%2BIcLhKqyooZ7Tl2UhT7MAIhANqVkKpX0kI00gdKqJN8nsN2uC10RGVC8uSyrQZ5l6x9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyIvdl8u4buYrrSF%2BQq3ANFQBnnjE9%2FZ5N2GTx4yBy8JJezPncbajPbpvAmiQqEJuh29UwFxAsyNWgHY3cx2yDol5VR6rdfjlrGf8QWvJ13xQYp7rnjrhln0XT8UK46jgQuxpjY90En%2FZatfvJtGZDmb8zYLP6Qy66o%2FHXwCuEQJ4FGNCpLMI0530dhy1yfkUB4iKTpUSAXjovo15ko5G2%2B4Qbb5OTiZrtTNl7b51zuDzJhLpVadCcRm9XhPPZ7O8GaYgdd7m7k8j9xLTz6jYq560lSGJmu9y%2BH2vD6aEuN1FyCNkWlt%2BPrPTu%2F19cvgNYS11b1bIMNUBmRpQmBtYHNYpv3fNCQURIy%2BrLUZnW2KGxLJqQkacfH8FDh38Ifdc8wIUqE%2FGpZn5qPegVcP3s99rmZB%2BykD4EvnPFJ05c5LSI5STbR9Rb6WPEDnBY96Ofl%2FshBKKNRGo1PjwniJQiBuF2bcnBRvPBjNYdiQptf4IVoFpbOW0iScL43LRH2kuOIxCEFS8w5M9uCsAQ2aUIGDRcmUEI1psjaY0D%2BQUuncZR09xX3jQq1JKe%2FF1W%2FMrMnsGZFU0hTZMAPqqTPoNT3zii5YruC6qeDLJdcY5mUZuF4qHHv4B7%2BjHI8XWf5vmBL8WRc3kIFCgeqizDhjvS%2FBjqkAaYXShmVhF0IThPfGaEXlZ%2FuY2X9d6LWlrogD1wveSuoppjPPoqPkvnSL546xbvRF0e4EU3yn8ZaDikYULn6mvkZazx%2BYyI7r5ATquuLDsP1HBcui6M3rDPOJwRAvKf4dEtNfVNDKNqcZ44LWMQP6Yij6W6420xBJuyDmNnNNm7IkQna1%2B0sO8opUNaepqXvvJ0F5YZ6T6BGOgWuOQJ08J0rpZKn&X-Amz-Signature=3606c4a4bac4d9bebf93abe56b70fb29b0b2a49059b05fc182cf71f4cce03539&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22LPO2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeE89qsSvgpmDQh3NUii0T%2BIcLhKqyooZ7Tl2UhT7MAIhANqVkKpX0kI00gdKqJN8nsN2uC10RGVC8uSyrQZ5l6x9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyIvdl8u4buYrrSF%2BQq3ANFQBnnjE9%2FZ5N2GTx4yBy8JJezPncbajPbpvAmiQqEJuh29UwFxAsyNWgHY3cx2yDol5VR6rdfjlrGf8QWvJ13xQYp7rnjrhln0XT8UK46jgQuxpjY90En%2FZatfvJtGZDmb8zYLP6Qy66o%2FHXwCuEQJ4FGNCpLMI0530dhy1yfkUB4iKTpUSAXjovo15ko5G2%2B4Qbb5OTiZrtTNl7b51zuDzJhLpVadCcRm9XhPPZ7O8GaYgdd7m7k8j9xLTz6jYq560lSGJmu9y%2BH2vD6aEuN1FyCNkWlt%2BPrPTu%2F19cvgNYS11b1bIMNUBmRpQmBtYHNYpv3fNCQURIy%2BrLUZnW2KGxLJqQkacfH8FDh38Ifdc8wIUqE%2FGpZn5qPegVcP3s99rmZB%2BykD4EvnPFJ05c5LSI5STbR9Rb6WPEDnBY96Ofl%2FshBKKNRGo1PjwniJQiBuF2bcnBRvPBjNYdiQptf4IVoFpbOW0iScL43LRH2kuOIxCEFS8w5M9uCsAQ2aUIGDRcmUEI1psjaY0D%2BQUuncZR09xX3jQq1JKe%2FF1W%2FMrMnsGZFU0hTZMAPqqTPoNT3zii5YruC6qeDLJdcY5mUZuF4qHHv4B7%2BjHI8XWf5vmBL8WRc3kIFCgeqizDhjvS%2FBjqkAaYXShmVhF0IThPfGaEXlZ%2FuY2X9d6LWlrogD1wveSuoppjPPoqPkvnSL546xbvRF0e4EU3yn8ZaDikYULn6mvkZazx%2BYyI7r5ATquuLDsP1HBcui6M3rDPOJwRAvKf4dEtNfVNDKNqcZ44LWMQP6Yij6W6420xBJuyDmNnNNm7IkQna1%2B0sO8opUNaepqXvvJ0F5YZ6T6BGOgWuOQJ08J0rpZKn&X-Amz-Signature=e0e618b1d7f0b3e46690c6cecb72419a1b6454ee3da760a99be43b865d215ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22LPO2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeE89qsSvgpmDQh3NUii0T%2BIcLhKqyooZ7Tl2UhT7MAIhANqVkKpX0kI00gdKqJN8nsN2uC10RGVC8uSyrQZ5l6x9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyIvdl8u4buYrrSF%2BQq3ANFQBnnjE9%2FZ5N2GTx4yBy8JJezPncbajPbpvAmiQqEJuh29UwFxAsyNWgHY3cx2yDol5VR6rdfjlrGf8QWvJ13xQYp7rnjrhln0XT8UK46jgQuxpjY90En%2FZatfvJtGZDmb8zYLP6Qy66o%2FHXwCuEQJ4FGNCpLMI0530dhy1yfkUB4iKTpUSAXjovo15ko5G2%2B4Qbb5OTiZrtTNl7b51zuDzJhLpVadCcRm9XhPPZ7O8GaYgdd7m7k8j9xLTz6jYq560lSGJmu9y%2BH2vD6aEuN1FyCNkWlt%2BPrPTu%2F19cvgNYS11b1bIMNUBmRpQmBtYHNYpv3fNCQURIy%2BrLUZnW2KGxLJqQkacfH8FDh38Ifdc8wIUqE%2FGpZn5qPegVcP3s99rmZB%2BykD4EvnPFJ05c5LSI5STbR9Rb6WPEDnBY96Ofl%2FshBKKNRGo1PjwniJQiBuF2bcnBRvPBjNYdiQptf4IVoFpbOW0iScL43LRH2kuOIxCEFS8w5M9uCsAQ2aUIGDRcmUEI1psjaY0D%2BQUuncZR09xX3jQq1JKe%2FF1W%2FMrMnsGZFU0hTZMAPqqTPoNT3zii5YruC6qeDLJdcY5mUZuF4qHHv4B7%2BjHI8XWf5vmBL8WRc3kIFCgeqizDhjvS%2FBjqkAaYXShmVhF0IThPfGaEXlZ%2FuY2X9d6LWlrogD1wveSuoppjPPoqPkvnSL546xbvRF0e4EU3yn8ZaDikYULn6mvkZazx%2BYyI7r5ATquuLDsP1HBcui6M3rDPOJwRAvKf4dEtNfVNDKNqcZ44LWMQP6Yij6W6420xBJuyDmNnNNm7IkQna1%2B0sO8opUNaepqXvvJ0F5YZ6T6BGOgWuOQJ08J0rpZKn&X-Amz-Signature=85ab7b6ae0126a98bb353e5eaffe870bdce9f73b56848557d0c089a5b5ace050&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22LPO2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeE89qsSvgpmDQh3NUii0T%2BIcLhKqyooZ7Tl2UhT7MAIhANqVkKpX0kI00gdKqJN8nsN2uC10RGVC8uSyrQZ5l6x9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyIvdl8u4buYrrSF%2BQq3ANFQBnnjE9%2FZ5N2GTx4yBy8JJezPncbajPbpvAmiQqEJuh29UwFxAsyNWgHY3cx2yDol5VR6rdfjlrGf8QWvJ13xQYp7rnjrhln0XT8UK46jgQuxpjY90En%2FZatfvJtGZDmb8zYLP6Qy66o%2FHXwCuEQJ4FGNCpLMI0530dhy1yfkUB4iKTpUSAXjovo15ko5G2%2B4Qbb5OTiZrtTNl7b51zuDzJhLpVadCcRm9XhPPZ7O8GaYgdd7m7k8j9xLTz6jYq560lSGJmu9y%2BH2vD6aEuN1FyCNkWlt%2BPrPTu%2F19cvgNYS11b1bIMNUBmRpQmBtYHNYpv3fNCQURIy%2BrLUZnW2KGxLJqQkacfH8FDh38Ifdc8wIUqE%2FGpZn5qPegVcP3s99rmZB%2BykD4EvnPFJ05c5LSI5STbR9Rb6WPEDnBY96Ofl%2FshBKKNRGo1PjwniJQiBuF2bcnBRvPBjNYdiQptf4IVoFpbOW0iScL43LRH2kuOIxCEFS8w5M9uCsAQ2aUIGDRcmUEI1psjaY0D%2BQUuncZR09xX3jQq1JKe%2FF1W%2FMrMnsGZFU0hTZMAPqqTPoNT3zii5YruC6qeDLJdcY5mUZuF4qHHv4B7%2BjHI8XWf5vmBL8WRc3kIFCgeqizDhjvS%2FBjqkAaYXShmVhF0IThPfGaEXlZ%2FuY2X9d6LWlrogD1wveSuoppjPPoqPkvnSL546xbvRF0e4EU3yn8ZaDikYULn6mvkZazx%2BYyI7r5ATquuLDsP1HBcui6M3rDPOJwRAvKf4dEtNfVNDKNqcZ44LWMQP6Yij6W6420xBJuyDmNnNNm7IkQna1%2B0sO8opUNaepqXvvJ0F5YZ6T6BGOgWuOQJ08J0rpZKn&X-Amz-Signature=c34a805be50773112325165b37a3b16751483730dfa86fb37fa7b311173b2c03&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22LPO2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeE89qsSvgpmDQh3NUii0T%2BIcLhKqyooZ7Tl2UhT7MAIhANqVkKpX0kI00gdKqJN8nsN2uC10RGVC8uSyrQZ5l6x9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyIvdl8u4buYrrSF%2BQq3ANFQBnnjE9%2FZ5N2GTx4yBy8JJezPncbajPbpvAmiQqEJuh29UwFxAsyNWgHY3cx2yDol5VR6rdfjlrGf8QWvJ13xQYp7rnjrhln0XT8UK46jgQuxpjY90En%2FZatfvJtGZDmb8zYLP6Qy66o%2FHXwCuEQJ4FGNCpLMI0530dhy1yfkUB4iKTpUSAXjovo15ko5G2%2B4Qbb5OTiZrtTNl7b51zuDzJhLpVadCcRm9XhPPZ7O8GaYgdd7m7k8j9xLTz6jYq560lSGJmu9y%2BH2vD6aEuN1FyCNkWlt%2BPrPTu%2F19cvgNYS11b1bIMNUBmRpQmBtYHNYpv3fNCQURIy%2BrLUZnW2KGxLJqQkacfH8FDh38Ifdc8wIUqE%2FGpZn5qPegVcP3s99rmZB%2BykD4EvnPFJ05c5LSI5STbR9Rb6WPEDnBY96Ofl%2FshBKKNRGo1PjwniJQiBuF2bcnBRvPBjNYdiQptf4IVoFpbOW0iScL43LRH2kuOIxCEFS8w5M9uCsAQ2aUIGDRcmUEI1psjaY0D%2BQUuncZR09xX3jQq1JKe%2FF1W%2FMrMnsGZFU0hTZMAPqqTPoNT3zii5YruC6qeDLJdcY5mUZuF4qHHv4B7%2BjHI8XWf5vmBL8WRc3kIFCgeqizDhjvS%2FBjqkAaYXShmVhF0IThPfGaEXlZ%2FuY2X9d6LWlrogD1wveSuoppjPPoqPkvnSL546xbvRF0e4EU3yn8ZaDikYULn6mvkZazx%2BYyI7r5ATquuLDsP1HBcui6M3rDPOJwRAvKf4dEtNfVNDKNqcZ44LWMQP6Yij6W6420xBJuyDmNnNNm7IkQna1%2B0sO8opUNaepqXvvJ0F5YZ6T6BGOgWuOQJ08J0rpZKn&X-Amz-Signature=cdcec10f8037d28bf7c9efa367956b34f3970599010843b72696e855a7538806&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22LPO2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeE89qsSvgpmDQh3NUii0T%2BIcLhKqyooZ7Tl2UhT7MAIhANqVkKpX0kI00gdKqJN8nsN2uC10RGVC8uSyrQZ5l6x9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyIvdl8u4buYrrSF%2BQq3ANFQBnnjE9%2FZ5N2GTx4yBy8JJezPncbajPbpvAmiQqEJuh29UwFxAsyNWgHY3cx2yDol5VR6rdfjlrGf8QWvJ13xQYp7rnjrhln0XT8UK46jgQuxpjY90En%2FZatfvJtGZDmb8zYLP6Qy66o%2FHXwCuEQJ4FGNCpLMI0530dhy1yfkUB4iKTpUSAXjovo15ko5G2%2B4Qbb5OTiZrtTNl7b51zuDzJhLpVadCcRm9XhPPZ7O8GaYgdd7m7k8j9xLTz6jYq560lSGJmu9y%2BH2vD6aEuN1FyCNkWlt%2BPrPTu%2F19cvgNYS11b1bIMNUBmRpQmBtYHNYpv3fNCQURIy%2BrLUZnW2KGxLJqQkacfH8FDh38Ifdc8wIUqE%2FGpZn5qPegVcP3s99rmZB%2BykD4EvnPFJ05c5LSI5STbR9Rb6WPEDnBY96Ofl%2FshBKKNRGo1PjwniJQiBuF2bcnBRvPBjNYdiQptf4IVoFpbOW0iScL43LRH2kuOIxCEFS8w5M9uCsAQ2aUIGDRcmUEI1psjaY0D%2BQUuncZR09xX3jQq1JKe%2FF1W%2FMrMnsGZFU0hTZMAPqqTPoNT3zii5YruC6qeDLJdcY5mUZuF4qHHv4B7%2BjHI8XWf5vmBL8WRc3kIFCgeqizDhjvS%2FBjqkAaYXShmVhF0IThPfGaEXlZ%2FuY2X9d6LWlrogD1wveSuoppjPPoqPkvnSL546xbvRF0e4EU3yn8ZaDikYULn6mvkZazx%2BYyI7r5ATquuLDsP1HBcui6M3rDPOJwRAvKf4dEtNfVNDKNqcZ44LWMQP6Yij6W6420xBJuyDmNnNNm7IkQna1%2B0sO8opUNaepqXvvJ0F5YZ6T6BGOgWuOQJ08J0rpZKn&X-Amz-Signature=fc14bc101623b6bf5d32b24f75e618ecaff45b0479a420fe0d11b8516e1ceebf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22LPO2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyeE89qsSvgpmDQh3NUii0T%2BIcLhKqyooZ7Tl2UhT7MAIhANqVkKpX0kI00gdKqJN8nsN2uC10RGVC8uSyrQZ5l6x9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyIvdl8u4buYrrSF%2BQq3ANFQBnnjE9%2FZ5N2GTx4yBy8JJezPncbajPbpvAmiQqEJuh29UwFxAsyNWgHY3cx2yDol5VR6rdfjlrGf8QWvJ13xQYp7rnjrhln0XT8UK46jgQuxpjY90En%2FZatfvJtGZDmb8zYLP6Qy66o%2FHXwCuEQJ4FGNCpLMI0530dhy1yfkUB4iKTpUSAXjovo15ko5G2%2B4Qbb5OTiZrtTNl7b51zuDzJhLpVadCcRm9XhPPZ7O8GaYgdd7m7k8j9xLTz6jYq560lSGJmu9y%2BH2vD6aEuN1FyCNkWlt%2BPrPTu%2F19cvgNYS11b1bIMNUBmRpQmBtYHNYpv3fNCQURIy%2BrLUZnW2KGxLJqQkacfH8FDh38Ifdc8wIUqE%2FGpZn5qPegVcP3s99rmZB%2BykD4EvnPFJ05c5LSI5STbR9Rb6WPEDnBY96Ofl%2FshBKKNRGo1PjwniJQiBuF2bcnBRvPBjNYdiQptf4IVoFpbOW0iScL43LRH2kuOIxCEFS8w5M9uCsAQ2aUIGDRcmUEI1psjaY0D%2BQUuncZR09xX3jQq1JKe%2FF1W%2FMrMnsGZFU0hTZMAPqqTPoNT3zii5YruC6qeDLJdcY5mUZuF4qHHv4B7%2BjHI8XWf5vmBL8WRc3kIFCgeqizDhjvS%2FBjqkAaYXShmVhF0IThPfGaEXlZ%2FuY2X9d6LWlrogD1wveSuoppjPPoqPkvnSL546xbvRF0e4EU3yn8ZaDikYULn6mvkZazx%2BYyI7r5ATquuLDsP1HBcui6M3rDPOJwRAvKf4dEtNfVNDKNqcZ44LWMQP6Yij6W6420xBJuyDmNnNNm7IkQna1%2B0sO8opUNaepqXvvJ0F5YZ6T6BGOgWuOQJ08J0rpZKn&X-Amz-Signature=258043832f6ff24fe3527ef54384967180e4fde0d5c4dda4d3ec558ae8f8ea65&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
