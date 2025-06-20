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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77WCL5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMVA5zGchoZbeySt6qYjo4Cl%2Fcm6r5ARLkgXm4cmZqgIgDngfsRfVwYmX2DcwA7RKQwssDE1hbiEgIMyiS5A9qKMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQOm6IMtsEe%2FluneSrcA68PcYTU8qi8wVCMyc9msTsG8yxVgsAIJ9QvumcfYrPRF0K3sHbtcRpCB88aDLpN6fNbhZQEOy9l91GA96jsBlafJ3rUgnKcS36tJ5oyIWZKhrr0FFdde%2FXkpSYRiru1AXIhKj%2BpX5raDzQq%2F4ZUS9mb3AHzA7TtwvEQvGFoiTYZ3d3Z2eqZ7e5KSrb3M%2BTe4itwUqzN9DQm0%2F3ARBO9oChwB%2BF%2BBTl9FKDsgNXYS7jSlTwYroojBrMUCERardF5EtMke8H9ZSogRoxHh8sdnZHizS39ZcJUUwXC6DW1mEAK8MjzpB7VV7qN5MS72uJWux0XB%2FCcpqQLE%2FuCE5c4iIpkmDEe%2BR4H3tOpJ0q2sSYTg2dXRI816DJ909cEa4nLKCFom99kGb0GknMLBAnwRzaUm5LbC8qlge4N7zYhSse0p%2F2KcculQ6PK4XAZAUH7pqrqhE%2FO0t6ml74fst3%2B7caAKZPJ3VnIhxIWnmkrtCY2To0QXnwXUuF09BcksoV5eIDi%2BE3maMAP1FbqPGdtrfz9xOjhhq6ng%2Fc6RIpLEjj4NWpt3EgF4qt17ns8EZQpmJfZfQX8Y8ugM2RslPpy8dyN8KUl9VhW4VQE15Sb2UJk3RB0GZEXpECUt10%2FMMyy1sIGOqUB%2BkniwKg8iCosCpUvthVvN4Hjjk6TraYbbCiyofTQ%2F3vWP%2FfC1gpmtzfdUV5oRdlYs6FKDcDIN6C3UJt5tWRGnR%2BNf0oCvRqBj2825Pqv%2F%2FiS%2Bg8mKiS%2FC4bnSV3CCCaojHD4vu1xS5FnXBuMU063Ilx%2FFv2Nhny9EFB0P8cqaqmC5gIcxUjnVdd7XdZ7LESr319mSU8mhcgUAWTpNn8MPPkm4HTs&X-Amz-Signature=75eff52ac88db5f346e732a7e429878e38a2439368e8fbd9317bfa330b596396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77WCL5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMVA5zGchoZbeySt6qYjo4Cl%2Fcm6r5ARLkgXm4cmZqgIgDngfsRfVwYmX2DcwA7RKQwssDE1hbiEgIMyiS5A9qKMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQOm6IMtsEe%2FluneSrcA68PcYTU8qi8wVCMyc9msTsG8yxVgsAIJ9QvumcfYrPRF0K3sHbtcRpCB88aDLpN6fNbhZQEOy9l91GA96jsBlafJ3rUgnKcS36tJ5oyIWZKhrr0FFdde%2FXkpSYRiru1AXIhKj%2BpX5raDzQq%2F4ZUS9mb3AHzA7TtwvEQvGFoiTYZ3d3Z2eqZ7e5KSrb3M%2BTe4itwUqzN9DQm0%2F3ARBO9oChwB%2BF%2BBTl9FKDsgNXYS7jSlTwYroojBrMUCERardF5EtMke8H9ZSogRoxHh8sdnZHizS39ZcJUUwXC6DW1mEAK8MjzpB7VV7qN5MS72uJWux0XB%2FCcpqQLE%2FuCE5c4iIpkmDEe%2BR4H3tOpJ0q2sSYTg2dXRI816DJ909cEa4nLKCFom99kGb0GknMLBAnwRzaUm5LbC8qlge4N7zYhSse0p%2F2KcculQ6PK4XAZAUH7pqrqhE%2FO0t6ml74fst3%2B7caAKZPJ3VnIhxIWnmkrtCY2To0QXnwXUuF09BcksoV5eIDi%2BE3maMAP1FbqPGdtrfz9xOjhhq6ng%2Fc6RIpLEjj4NWpt3EgF4qt17ns8EZQpmJfZfQX8Y8ugM2RslPpy8dyN8KUl9VhW4VQE15Sb2UJk3RB0GZEXpECUt10%2FMMyy1sIGOqUB%2BkniwKg8iCosCpUvthVvN4Hjjk6TraYbbCiyofTQ%2F3vWP%2FfC1gpmtzfdUV5oRdlYs6FKDcDIN6C3UJt5tWRGnR%2BNf0oCvRqBj2825Pqv%2F%2FiS%2Bg8mKiS%2FC4bnSV3CCCaojHD4vu1xS5FnXBuMU063Ilx%2FFv2Nhny9EFB0P8cqaqmC5gIcxUjnVdd7XdZ7LESr319mSU8mhcgUAWTpNn8MPPkm4HTs&X-Amz-Signature=0d6673c993b30582985e7263baf05052daac3f98263910c8b287887278300e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77WCL5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMVA5zGchoZbeySt6qYjo4Cl%2Fcm6r5ARLkgXm4cmZqgIgDngfsRfVwYmX2DcwA7RKQwssDE1hbiEgIMyiS5A9qKMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQOm6IMtsEe%2FluneSrcA68PcYTU8qi8wVCMyc9msTsG8yxVgsAIJ9QvumcfYrPRF0K3sHbtcRpCB88aDLpN6fNbhZQEOy9l91GA96jsBlafJ3rUgnKcS36tJ5oyIWZKhrr0FFdde%2FXkpSYRiru1AXIhKj%2BpX5raDzQq%2F4ZUS9mb3AHzA7TtwvEQvGFoiTYZ3d3Z2eqZ7e5KSrb3M%2BTe4itwUqzN9DQm0%2F3ARBO9oChwB%2BF%2BBTl9FKDsgNXYS7jSlTwYroojBrMUCERardF5EtMke8H9ZSogRoxHh8sdnZHizS39ZcJUUwXC6DW1mEAK8MjzpB7VV7qN5MS72uJWux0XB%2FCcpqQLE%2FuCE5c4iIpkmDEe%2BR4H3tOpJ0q2sSYTg2dXRI816DJ909cEa4nLKCFom99kGb0GknMLBAnwRzaUm5LbC8qlge4N7zYhSse0p%2F2KcculQ6PK4XAZAUH7pqrqhE%2FO0t6ml74fst3%2B7caAKZPJ3VnIhxIWnmkrtCY2To0QXnwXUuF09BcksoV5eIDi%2BE3maMAP1FbqPGdtrfz9xOjhhq6ng%2Fc6RIpLEjj4NWpt3EgF4qt17ns8EZQpmJfZfQX8Y8ugM2RslPpy8dyN8KUl9VhW4VQE15Sb2UJk3RB0GZEXpECUt10%2FMMyy1sIGOqUB%2BkniwKg8iCosCpUvthVvN4Hjjk6TraYbbCiyofTQ%2F3vWP%2FfC1gpmtzfdUV5oRdlYs6FKDcDIN6C3UJt5tWRGnR%2BNf0oCvRqBj2825Pqv%2F%2FiS%2Bg8mKiS%2FC4bnSV3CCCaojHD4vu1xS5FnXBuMU063Ilx%2FFv2Nhny9EFB0P8cqaqmC5gIcxUjnVdd7XdZ7LESr319mSU8mhcgUAWTpNn8MPPkm4HTs&X-Amz-Signature=87a3e8d64c4dd8d6cff396629eb9c3d5fa1c63de3405dc5117375c2ee42ea4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77WCL5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMVA5zGchoZbeySt6qYjo4Cl%2Fcm6r5ARLkgXm4cmZqgIgDngfsRfVwYmX2DcwA7RKQwssDE1hbiEgIMyiS5A9qKMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQOm6IMtsEe%2FluneSrcA68PcYTU8qi8wVCMyc9msTsG8yxVgsAIJ9QvumcfYrPRF0K3sHbtcRpCB88aDLpN6fNbhZQEOy9l91GA96jsBlafJ3rUgnKcS36tJ5oyIWZKhrr0FFdde%2FXkpSYRiru1AXIhKj%2BpX5raDzQq%2F4ZUS9mb3AHzA7TtwvEQvGFoiTYZ3d3Z2eqZ7e5KSrb3M%2BTe4itwUqzN9DQm0%2F3ARBO9oChwB%2BF%2BBTl9FKDsgNXYS7jSlTwYroojBrMUCERardF5EtMke8H9ZSogRoxHh8sdnZHizS39ZcJUUwXC6DW1mEAK8MjzpB7VV7qN5MS72uJWux0XB%2FCcpqQLE%2FuCE5c4iIpkmDEe%2BR4H3tOpJ0q2sSYTg2dXRI816DJ909cEa4nLKCFom99kGb0GknMLBAnwRzaUm5LbC8qlge4N7zYhSse0p%2F2KcculQ6PK4XAZAUH7pqrqhE%2FO0t6ml74fst3%2B7caAKZPJ3VnIhxIWnmkrtCY2To0QXnwXUuF09BcksoV5eIDi%2BE3maMAP1FbqPGdtrfz9xOjhhq6ng%2Fc6RIpLEjj4NWpt3EgF4qt17ns8EZQpmJfZfQX8Y8ugM2RslPpy8dyN8KUl9VhW4VQE15Sb2UJk3RB0GZEXpECUt10%2FMMyy1sIGOqUB%2BkniwKg8iCosCpUvthVvN4Hjjk6TraYbbCiyofTQ%2F3vWP%2FfC1gpmtzfdUV5oRdlYs6FKDcDIN6C3UJt5tWRGnR%2BNf0oCvRqBj2825Pqv%2F%2FiS%2Bg8mKiS%2FC4bnSV3CCCaojHD4vu1xS5FnXBuMU063Ilx%2FFv2Nhny9EFB0P8cqaqmC5gIcxUjnVdd7XdZ7LESr319mSU8mhcgUAWTpNn8MPPkm4HTs&X-Amz-Signature=eb338520bc091ec9dbae48a69e3935d81fc7a27834753bd83378c0d401181299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77WCL5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMVA5zGchoZbeySt6qYjo4Cl%2Fcm6r5ARLkgXm4cmZqgIgDngfsRfVwYmX2DcwA7RKQwssDE1hbiEgIMyiS5A9qKMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQOm6IMtsEe%2FluneSrcA68PcYTU8qi8wVCMyc9msTsG8yxVgsAIJ9QvumcfYrPRF0K3sHbtcRpCB88aDLpN6fNbhZQEOy9l91GA96jsBlafJ3rUgnKcS36tJ5oyIWZKhrr0FFdde%2FXkpSYRiru1AXIhKj%2BpX5raDzQq%2F4ZUS9mb3AHzA7TtwvEQvGFoiTYZ3d3Z2eqZ7e5KSrb3M%2BTe4itwUqzN9DQm0%2F3ARBO9oChwB%2BF%2BBTl9FKDsgNXYS7jSlTwYroojBrMUCERardF5EtMke8H9ZSogRoxHh8sdnZHizS39ZcJUUwXC6DW1mEAK8MjzpB7VV7qN5MS72uJWux0XB%2FCcpqQLE%2FuCE5c4iIpkmDEe%2BR4H3tOpJ0q2sSYTg2dXRI816DJ909cEa4nLKCFom99kGb0GknMLBAnwRzaUm5LbC8qlge4N7zYhSse0p%2F2KcculQ6PK4XAZAUH7pqrqhE%2FO0t6ml74fst3%2B7caAKZPJ3VnIhxIWnmkrtCY2To0QXnwXUuF09BcksoV5eIDi%2BE3maMAP1FbqPGdtrfz9xOjhhq6ng%2Fc6RIpLEjj4NWpt3EgF4qt17ns8EZQpmJfZfQX8Y8ugM2RslPpy8dyN8KUl9VhW4VQE15Sb2UJk3RB0GZEXpECUt10%2FMMyy1sIGOqUB%2BkniwKg8iCosCpUvthVvN4Hjjk6TraYbbCiyofTQ%2F3vWP%2FfC1gpmtzfdUV5oRdlYs6FKDcDIN6C3UJt5tWRGnR%2BNf0oCvRqBj2825Pqv%2F%2FiS%2Bg8mKiS%2FC4bnSV3CCCaojHD4vu1xS5FnXBuMU063Ilx%2FFv2Nhny9EFB0P8cqaqmC5gIcxUjnVdd7XdZ7LESr319mSU8mhcgUAWTpNn8MPPkm4HTs&X-Amz-Signature=b22086afc0adc876585ac420a02e2e80975e5306493711b84cd1fdd5cad4c95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77WCL5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMVA5zGchoZbeySt6qYjo4Cl%2Fcm6r5ARLkgXm4cmZqgIgDngfsRfVwYmX2DcwA7RKQwssDE1hbiEgIMyiS5A9qKMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQOm6IMtsEe%2FluneSrcA68PcYTU8qi8wVCMyc9msTsG8yxVgsAIJ9QvumcfYrPRF0K3sHbtcRpCB88aDLpN6fNbhZQEOy9l91GA96jsBlafJ3rUgnKcS36tJ5oyIWZKhrr0FFdde%2FXkpSYRiru1AXIhKj%2BpX5raDzQq%2F4ZUS9mb3AHzA7TtwvEQvGFoiTYZ3d3Z2eqZ7e5KSrb3M%2BTe4itwUqzN9DQm0%2F3ARBO9oChwB%2BF%2BBTl9FKDsgNXYS7jSlTwYroojBrMUCERardF5EtMke8H9ZSogRoxHh8sdnZHizS39ZcJUUwXC6DW1mEAK8MjzpB7VV7qN5MS72uJWux0XB%2FCcpqQLE%2FuCE5c4iIpkmDEe%2BR4H3tOpJ0q2sSYTg2dXRI816DJ909cEa4nLKCFom99kGb0GknMLBAnwRzaUm5LbC8qlge4N7zYhSse0p%2F2KcculQ6PK4XAZAUH7pqrqhE%2FO0t6ml74fst3%2B7caAKZPJ3VnIhxIWnmkrtCY2To0QXnwXUuF09BcksoV5eIDi%2BE3maMAP1FbqPGdtrfz9xOjhhq6ng%2Fc6RIpLEjj4NWpt3EgF4qt17ns8EZQpmJfZfQX8Y8ugM2RslPpy8dyN8KUl9VhW4VQE15Sb2UJk3RB0GZEXpECUt10%2FMMyy1sIGOqUB%2BkniwKg8iCosCpUvthVvN4Hjjk6TraYbbCiyofTQ%2F3vWP%2FfC1gpmtzfdUV5oRdlYs6FKDcDIN6C3UJt5tWRGnR%2BNf0oCvRqBj2825Pqv%2F%2FiS%2Bg8mKiS%2FC4bnSV3CCCaojHD4vu1xS5FnXBuMU063Ilx%2FFv2Nhny9EFB0P8cqaqmC5gIcxUjnVdd7XdZ7LESr319mSU8mhcgUAWTpNn8MPPkm4HTs&X-Amz-Signature=daf627acce4bc3d393ffa7d04d4ae4d04ee9c21e7aa26600de686c2c5fd8912f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77WCL5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMVA5zGchoZbeySt6qYjo4Cl%2Fcm6r5ARLkgXm4cmZqgIgDngfsRfVwYmX2DcwA7RKQwssDE1hbiEgIMyiS5A9qKMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQOm6IMtsEe%2FluneSrcA68PcYTU8qi8wVCMyc9msTsG8yxVgsAIJ9QvumcfYrPRF0K3sHbtcRpCB88aDLpN6fNbhZQEOy9l91GA96jsBlafJ3rUgnKcS36tJ5oyIWZKhrr0FFdde%2FXkpSYRiru1AXIhKj%2BpX5raDzQq%2F4ZUS9mb3AHzA7TtwvEQvGFoiTYZ3d3Z2eqZ7e5KSrb3M%2BTe4itwUqzN9DQm0%2F3ARBO9oChwB%2BF%2BBTl9FKDsgNXYS7jSlTwYroojBrMUCERardF5EtMke8H9ZSogRoxHh8sdnZHizS39ZcJUUwXC6DW1mEAK8MjzpB7VV7qN5MS72uJWux0XB%2FCcpqQLE%2FuCE5c4iIpkmDEe%2BR4H3tOpJ0q2sSYTg2dXRI816DJ909cEa4nLKCFom99kGb0GknMLBAnwRzaUm5LbC8qlge4N7zYhSse0p%2F2KcculQ6PK4XAZAUH7pqrqhE%2FO0t6ml74fst3%2B7caAKZPJ3VnIhxIWnmkrtCY2To0QXnwXUuF09BcksoV5eIDi%2BE3maMAP1FbqPGdtrfz9xOjhhq6ng%2Fc6RIpLEjj4NWpt3EgF4qt17ns8EZQpmJfZfQX8Y8ugM2RslPpy8dyN8KUl9VhW4VQE15Sb2UJk3RB0GZEXpECUt10%2FMMyy1sIGOqUB%2BkniwKg8iCosCpUvthVvN4Hjjk6TraYbbCiyofTQ%2F3vWP%2FfC1gpmtzfdUV5oRdlYs6FKDcDIN6C3UJt5tWRGnR%2BNf0oCvRqBj2825Pqv%2F%2FiS%2Bg8mKiS%2FC4bnSV3CCCaojHD4vu1xS5FnXBuMU063Ilx%2FFv2Nhny9EFB0P8cqaqmC5gIcxUjnVdd7XdZ7LESr319mSU8mhcgUAWTpNn8MPPkm4HTs&X-Amz-Signature=73923308eefae148b34d15bb7b9c8906c936e19a42cc14ec9f352a1a6c227cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
