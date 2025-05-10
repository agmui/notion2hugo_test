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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=f3959eca7c272996429dd66f58ac7938610a813b19005f31c3b0ad71822d7619&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=02fbe0dbb6780485519c7b539db0986f57952a3f17a9d387bc165e7fd65d85b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=345e6833984e63b2be760c35c7a7c67a5ccfd08041e097660c74d7a278739170&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=e7abd070ce5cdc5399848aa44dc3bdc388067c0e926a6dad72346c5973d6c098&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=6f67de576d8ee8c8837c8ffd4182d9b18658a5a5321e0f9f94a0bc88dd257b48&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=f5315674e3f32b409bcd65d11c99bda0c81a4d4adc605fac49259316e2fe1059&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=2e8ab9780149763ab0cecc5f2603d088c1ac89dbd2c8ce56f3923a9e2b3db93f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
