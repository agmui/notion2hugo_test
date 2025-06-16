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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4BRNV6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDc%2BSOnMfw%2FdB7PUMVmbXtMwYDCA21GRX7B%2F1Sp%2FzH66AiEA4G%2FSeNuIuD%2B4AaUYKFmMALNYQGTeSOgJ3gbqbCzs6mUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJ8qYOgyOYmhzs4VTyrcA8d1B9Z3NM4wRls5JRQqQVLFRxq5JajRnjxTCfrG68zs%2BhJoIbxxcfi1v%2BUc7Qe10i32RsLMrF%2B2G5ALodXYSg%2Bk1mfP1vUGZjTgh5kOxN8oOMQOW1ezzrb%2BHU3ZfV9wAgeMTIhFRyeOqj0RIz94IJjZb4pYfAGfStxNcVfzD0PEYEhsMUR7SKiQDP04Jb33Jncrs54C1KrVMbaZ6zOiGvob66U%2BC%2FIDS7G9fTL1WsIDV%2FLCX5NarNNvAyq8vHrL2Ee2ESELaHhe6Dwd0axGNspNBK0byUzCfw0YPF3ik1iuzi%2B87mvhQfxLMu4tX%2BhQSBMRZPW5%2FrC3%2FY2KCS06NCVcz0eaKfsvuwY5fupceGBIxNrxq9L7HReP5QzMOSSJhmh4cz5WfBjuBq0ESYJUipASGWAvSkCdPXMzpXATjodp5kxDapd8huvBob6aUmMHgFjK4Cn%2FYn6dZdYQNeOgs7I8Fa3fjlY0clXvQ8JN7y6RjyWAvW9EGY3gjAJFqJrpLR%2FbwaYfC2HmL0vOguR8ymUBel5TDC2zsD4nxlaaG5yINPQQ6S4QjQvf7gJxKHXmWwECpJzmkhY7o61MfEnQYtaozM%2FWeSaj0l36xN%2BveniL5W%2FyvKrN2hS%2Ba5ueMOO4wsIGOqUBTsH0UZVAf1Ykob9%2FiTuC46dUB4GqHWV86jMONbKTytPmCRuUKjsor712FihAZAuRkMeqQu%2FKCNhzoaRMtH0I1lngN21THSgjp4U%2FduECI3XjEc%2FcT0BGjdUgt5%2FuJHm0nlyyVSspbCbrb%2FFWkHeBMOauCaZ1CHYOf0hrtGbPNuwqzsMcbZfW74KQjZXTvWgVPE8qkW0MjpwAHaNjIFsIe511FzDu&X-Amz-Signature=e82008a82e0cb8862ef002d753679cd960d1d004f7145f2e8c2034ceb4ac025b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4BRNV6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDc%2BSOnMfw%2FdB7PUMVmbXtMwYDCA21GRX7B%2F1Sp%2FzH66AiEA4G%2FSeNuIuD%2B4AaUYKFmMALNYQGTeSOgJ3gbqbCzs6mUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJ8qYOgyOYmhzs4VTyrcA8d1B9Z3NM4wRls5JRQqQVLFRxq5JajRnjxTCfrG68zs%2BhJoIbxxcfi1v%2BUc7Qe10i32RsLMrF%2B2G5ALodXYSg%2Bk1mfP1vUGZjTgh5kOxN8oOMQOW1ezzrb%2BHU3ZfV9wAgeMTIhFRyeOqj0RIz94IJjZb4pYfAGfStxNcVfzD0PEYEhsMUR7SKiQDP04Jb33Jncrs54C1KrVMbaZ6zOiGvob66U%2BC%2FIDS7G9fTL1WsIDV%2FLCX5NarNNvAyq8vHrL2Ee2ESELaHhe6Dwd0axGNspNBK0byUzCfw0YPF3ik1iuzi%2B87mvhQfxLMu4tX%2BhQSBMRZPW5%2FrC3%2FY2KCS06NCVcz0eaKfsvuwY5fupceGBIxNrxq9L7HReP5QzMOSSJhmh4cz5WfBjuBq0ESYJUipASGWAvSkCdPXMzpXATjodp5kxDapd8huvBob6aUmMHgFjK4Cn%2FYn6dZdYQNeOgs7I8Fa3fjlY0clXvQ8JN7y6RjyWAvW9EGY3gjAJFqJrpLR%2FbwaYfC2HmL0vOguR8ymUBel5TDC2zsD4nxlaaG5yINPQQ6S4QjQvf7gJxKHXmWwECpJzmkhY7o61MfEnQYtaozM%2FWeSaj0l36xN%2BveniL5W%2FyvKrN2hS%2Ba5ueMOO4wsIGOqUBTsH0UZVAf1Ykob9%2FiTuC46dUB4GqHWV86jMONbKTytPmCRuUKjsor712FihAZAuRkMeqQu%2FKCNhzoaRMtH0I1lngN21THSgjp4U%2FduECI3XjEc%2FcT0BGjdUgt5%2FuJHm0nlyyVSspbCbrb%2FFWkHeBMOauCaZ1CHYOf0hrtGbPNuwqzsMcbZfW74KQjZXTvWgVPE8qkW0MjpwAHaNjIFsIe511FzDu&X-Amz-Signature=dbe6e809c80ed6d1bed0b8a31b93ace7e23bad6835c9dc8bafbf0b2a34ece27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4BRNV6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDc%2BSOnMfw%2FdB7PUMVmbXtMwYDCA21GRX7B%2F1Sp%2FzH66AiEA4G%2FSeNuIuD%2B4AaUYKFmMALNYQGTeSOgJ3gbqbCzs6mUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJ8qYOgyOYmhzs4VTyrcA8d1B9Z3NM4wRls5JRQqQVLFRxq5JajRnjxTCfrG68zs%2BhJoIbxxcfi1v%2BUc7Qe10i32RsLMrF%2B2G5ALodXYSg%2Bk1mfP1vUGZjTgh5kOxN8oOMQOW1ezzrb%2BHU3ZfV9wAgeMTIhFRyeOqj0RIz94IJjZb4pYfAGfStxNcVfzD0PEYEhsMUR7SKiQDP04Jb33Jncrs54C1KrVMbaZ6zOiGvob66U%2BC%2FIDS7G9fTL1WsIDV%2FLCX5NarNNvAyq8vHrL2Ee2ESELaHhe6Dwd0axGNspNBK0byUzCfw0YPF3ik1iuzi%2B87mvhQfxLMu4tX%2BhQSBMRZPW5%2FrC3%2FY2KCS06NCVcz0eaKfsvuwY5fupceGBIxNrxq9L7HReP5QzMOSSJhmh4cz5WfBjuBq0ESYJUipASGWAvSkCdPXMzpXATjodp5kxDapd8huvBob6aUmMHgFjK4Cn%2FYn6dZdYQNeOgs7I8Fa3fjlY0clXvQ8JN7y6RjyWAvW9EGY3gjAJFqJrpLR%2FbwaYfC2HmL0vOguR8ymUBel5TDC2zsD4nxlaaG5yINPQQ6S4QjQvf7gJxKHXmWwECpJzmkhY7o61MfEnQYtaozM%2FWeSaj0l36xN%2BveniL5W%2FyvKrN2hS%2Ba5ueMOO4wsIGOqUBTsH0UZVAf1Ykob9%2FiTuC46dUB4GqHWV86jMONbKTytPmCRuUKjsor712FihAZAuRkMeqQu%2FKCNhzoaRMtH0I1lngN21THSgjp4U%2FduECI3XjEc%2FcT0BGjdUgt5%2FuJHm0nlyyVSspbCbrb%2FFWkHeBMOauCaZ1CHYOf0hrtGbPNuwqzsMcbZfW74KQjZXTvWgVPE8qkW0MjpwAHaNjIFsIe511FzDu&X-Amz-Signature=3b9cd879bbfb86e681b23c90d6251d922f2bd65484a8c1b3bb8410a2805d8752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4BRNV6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDc%2BSOnMfw%2FdB7PUMVmbXtMwYDCA21GRX7B%2F1Sp%2FzH66AiEA4G%2FSeNuIuD%2B4AaUYKFmMALNYQGTeSOgJ3gbqbCzs6mUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJ8qYOgyOYmhzs4VTyrcA8d1B9Z3NM4wRls5JRQqQVLFRxq5JajRnjxTCfrG68zs%2BhJoIbxxcfi1v%2BUc7Qe10i32RsLMrF%2B2G5ALodXYSg%2Bk1mfP1vUGZjTgh5kOxN8oOMQOW1ezzrb%2BHU3ZfV9wAgeMTIhFRyeOqj0RIz94IJjZb4pYfAGfStxNcVfzD0PEYEhsMUR7SKiQDP04Jb33Jncrs54C1KrVMbaZ6zOiGvob66U%2BC%2FIDS7G9fTL1WsIDV%2FLCX5NarNNvAyq8vHrL2Ee2ESELaHhe6Dwd0axGNspNBK0byUzCfw0YPF3ik1iuzi%2B87mvhQfxLMu4tX%2BhQSBMRZPW5%2FrC3%2FY2KCS06NCVcz0eaKfsvuwY5fupceGBIxNrxq9L7HReP5QzMOSSJhmh4cz5WfBjuBq0ESYJUipASGWAvSkCdPXMzpXATjodp5kxDapd8huvBob6aUmMHgFjK4Cn%2FYn6dZdYQNeOgs7I8Fa3fjlY0clXvQ8JN7y6RjyWAvW9EGY3gjAJFqJrpLR%2FbwaYfC2HmL0vOguR8ymUBel5TDC2zsD4nxlaaG5yINPQQ6S4QjQvf7gJxKHXmWwECpJzmkhY7o61MfEnQYtaozM%2FWeSaj0l36xN%2BveniL5W%2FyvKrN2hS%2Ba5ueMOO4wsIGOqUBTsH0UZVAf1Ykob9%2FiTuC46dUB4GqHWV86jMONbKTytPmCRuUKjsor712FihAZAuRkMeqQu%2FKCNhzoaRMtH0I1lngN21THSgjp4U%2FduECI3XjEc%2FcT0BGjdUgt5%2FuJHm0nlyyVSspbCbrb%2FFWkHeBMOauCaZ1CHYOf0hrtGbPNuwqzsMcbZfW74KQjZXTvWgVPE8qkW0MjpwAHaNjIFsIe511FzDu&X-Amz-Signature=9bc5f3d094bb7cd41fa34376b094981c3c7dd42e920d15ad2fcdc16b00789037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4BRNV6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDc%2BSOnMfw%2FdB7PUMVmbXtMwYDCA21GRX7B%2F1Sp%2FzH66AiEA4G%2FSeNuIuD%2B4AaUYKFmMALNYQGTeSOgJ3gbqbCzs6mUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJ8qYOgyOYmhzs4VTyrcA8d1B9Z3NM4wRls5JRQqQVLFRxq5JajRnjxTCfrG68zs%2BhJoIbxxcfi1v%2BUc7Qe10i32RsLMrF%2B2G5ALodXYSg%2Bk1mfP1vUGZjTgh5kOxN8oOMQOW1ezzrb%2BHU3ZfV9wAgeMTIhFRyeOqj0RIz94IJjZb4pYfAGfStxNcVfzD0PEYEhsMUR7SKiQDP04Jb33Jncrs54C1KrVMbaZ6zOiGvob66U%2BC%2FIDS7G9fTL1WsIDV%2FLCX5NarNNvAyq8vHrL2Ee2ESELaHhe6Dwd0axGNspNBK0byUzCfw0YPF3ik1iuzi%2B87mvhQfxLMu4tX%2BhQSBMRZPW5%2FrC3%2FY2KCS06NCVcz0eaKfsvuwY5fupceGBIxNrxq9L7HReP5QzMOSSJhmh4cz5WfBjuBq0ESYJUipASGWAvSkCdPXMzpXATjodp5kxDapd8huvBob6aUmMHgFjK4Cn%2FYn6dZdYQNeOgs7I8Fa3fjlY0clXvQ8JN7y6RjyWAvW9EGY3gjAJFqJrpLR%2FbwaYfC2HmL0vOguR8ymUBel5TDC2zsD4nxlaaG5yINPQQ6S4QjQvf7gJxKHXmWwECpJzmkhY7o61MfEnQYtaozM%2FWeSaj0l36xN%2BveniL5W%2FyvKrN2hS%2Ba5ueMOO4wsIGOqUBTsH0UZVAf1Ykob9%2FiTuC46dUB4GqHWV86jMONbKTytPmCRuUKjsor712FihAZAuRkMeqQu%2FKCNhzoaRMtH0I1lngN21THSgjp4U%2FduECI3XjEc%2FcT0BGjdUgt5%2FuJHm0nlyyVSspbCbrb%2FFWkHeBMOauCaZ1CHYOf0hrtGbPNuwqzsMcbZfW74KQjZXTvWgVPE8qkW0MjpwAHaNjIFsIe511FzDu&X-Amz-Signature=b10c656b2e9cdf8e985f7a9abf3dea0bb41616dcb209567e4945f363adaed162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4BRNV6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDc%2BSOnMfw%2FdB7PUMVmbXtMwYDCA21GRX7B%2F1Sp%2FzH66AiEA4G%2FSeNuIuD%2B4AaUYKFmMALNYQGTeSOgJ3gbqbCzs6mUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJ8qYOgyOYmhzs4VTyrcA8d1B9Z3NM4wRls5JRQqQVLFRxq5JajRnjxTCfrG68zs%2BhJoIbxxcfi1v%2BUc7Qe10i32RsLMrF%2B2G5ALodXYSg%2Bk1mfP1vUGZjTgh5kOxN8oOMQOW1ezzrb%2BHU3ZfV9wAgeMTIhFRyeOqj0RIz94IJjZb4pYfAGfStxNcVfzD0PEYEhsMUR7SKiQDP04Jb33Jncrs54C1KrVMbaZ6zOiGvob66U%2BC%2FIDS7G9fTL1WsIDV%2FLCX5NarNNvAyq8vHrL2Ee2ESELaHhe6Dwd0axGNspNBK0byUzCfw0YPF3ik1iuzi%2B87mvhQfxLMu4tX%2BhQSBMRZPW5%2FrC3%2FY2KCS06NCVcz0eaKfsvuwY5fupceGBIxNrxq9L7HReP5QzMOSSJhmh4cz5WfBjuBq0ESYJUipASGWAvSkCdPXMzpXATjodp5kxDapd8huvBob6aUmMHgFjK4Cn%2FYn6dZdYQNeOgs7I8Fa3fjlY0clXvQ8JN7y6RjyWAvW9EGY3gjAJFqJrpLR%2FbwaYfC2HmL0vOguR8ymUBel5TDC2zsD4nxlaaG5yINPQQ6S4QjQvf7gJxKHXmWwECpJzmkhY7o61MfEnQYtaozM%2FWeSaj0l36xN%2BveniL5W%2FyvKrN2hS%2Ba5ueMOO4wsIGOqUBTsH0UZVAf1Ykob9%2FiTuC46dUB4GqHWV86jMONbKTytPmCRuUKjsor712FihAZAuRkMeqQu%2FKCNhzoaRMtH0I1lngN21THSgjp4U%2FduECI3XjEc%2FcT0BGjdUgt5%2FuJHm0nlyyVSspbCbrb%2FFWkHeBMOauCaZ1CHYOf0hrtGbPNuwqzsMcbZfW74KQjZXTvWgVPE8qkW0MjpwAHaNjIFsIe511FzDu&X-Amz-Signature=e54c87a17fab16b2cdffa4402cc21fbc41e6ccbb7782cf66f1c3aa94156168df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T4BRNV6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDc%2BSOnMfw%2FdB7PUMVmbXtMwYDCA21GRX7B%2F1Sp%2FzH66AiEA4G%2FSeNuIuD%2B4AaUYKFmMALNYQGTeSOgJ3gbqbCzs6mUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJ8qYOgyOYmhzs4VTyrcA8d1B9Z3NM4wRls5JRQqQVLFRxq5JajRnjxTCfrG68zs%2BhJoIbxxcfi1v%2BUc7Qe10i32RsLMrF%2B2G5ALodXYSg%2Bk1mfP1vUGZjTgh5kOxN8oOMQOW1ezzrb%2BHU3ZfV9wAgeMTIhFRyeOqj0RIz94IJjZb4pYfAGfStxNcVfzD0PEYEhsMUR7SKiQDP04Jb33Jncrs54C1KrVMbaZ6zOiGvob66U%2BC%2FIDS7G9fTL1WsIDV%2FLCX5NarNNvAyq8vHrL2Ee2ESELaHhe6Dwd0axGNspNBK0byUzCfw0YPF3ik1iuzi%2B87mvhQfxLMu4tX%2BhQSBMRZPW5%2FrC3%2FY2KCS06NCVcz0eaKfsvuwY5fupceGBIxNrxq9L7HReP5QzMOSSJhmh4cz5WfBjuBq0ESYJUipASGWAvSkCdPXMzpXATjodp5kxDapd8huvBob6aUmMHgFjK4Cn%2FYn6dZdYQNeOgs7I8Fa3fjlY0clXvQ8JN7y6RjyWAvW9EGY3gjAJFqJrpLR%2FbwaYfC2HmL0vOguR8ymUBel5TDC2zsD4nxlaaG5yINPQQ6S4QjQvf7gJxKHXmWwECpJzmkhY7o61MfEnQYtaozM%2FWeSaj0l36xN%2BveniL5W%2FyvKrN2hS%2Ba5ueMOO4wsIGOqUBTsH0UZVAf1Ykob9%2FiTuC46dUB4GqHWV86jMONbKTytPmCRuUKjsor712FihAZAuRkMeqQu%2FKCNhzoaRMtH0I1lngN21THSgjp4U%2FduECI3XjEc%2FcT0BGjdUgt5%2FuJHm0nlyyVSspbCbrb%2FFWkHeBMOauCaZ1CHYOf0hrtGbPNuwqzsMcbZfW74KQjZXTvWgVPE8qkW0MjpwAHaNjIFsIe511FzDu&X-Amz-Signature=e2d3847d7c4183344cbd8a1c50559206d670ebab6bf49881ce0173789ed6b278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
