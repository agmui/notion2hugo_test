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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HM6RCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEza8my50%2Fb5HA9oeitzaNaml6bp8C%2BxiPP6Iqtj%2B41%2BAiEA2K2D3qR%2FdEw3RVcL25PbJY8L4k86H5cuHEmqRGQB2mcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEOs1%2B%2B%2BFH%2BbQQKECrcA3bI32Keg5FQXpv%2FxwBLaLqCUM2wWztXJcwkwzpzPuUMftarequ88ELHIMq5jWgfQScZ3H4MdQVnQUoailyV0oGx6Fk9b6TcSnz3uVD99RWNgVWTUjdSQrdfwZkIDNBTxRcpYl73ulu6JSQiqAzdaYwsJiFytmuN69E5aYfSGHtnMLui8X9ivBpx%2B21c77yQ5NIXArTzEEyJ6laP2mGMocnqCK1Z2pYcszPWnC%2BorysuuAtaUc%2F%2BhHGVsslOeYmJvEYjqbTaVnMCmnGhli3Q86da%2Fh%2F5zK084muDzRv21Sye1BwIXVl4yfbL%2BepwbfNpEZ5LypFwMFwpHgd6e%2FFC55y6RIVKhOqDdxhj3CScIDzOtuUAt63faj5Q4zDJ8U9s%2FSMWx5rmA7%2FzwXTJm534HHVPSTQztcSEOS0sZ6%2FFzD6gZ%2FiCd6TP6Ng%2Fe%2B5Nm9aPjNazm5qfNJuR9TXwdqS1dbUuEBTr0CDLSP4DZnvMPcr43si4%2BygRd%2Bd4i8HrvMPI4zzKboMzcx67aqaB8NlAqu%2BGYM44KA6ZcMOBAWgBy2sH5FvpbT9zz9jloL3rvQexTxFyXz77sHpznnud%2FnTlGe9OOhxc0GYdmNKFcueo%2B4ooFOVzP9SN7u0neBkcMP%2Fv%2BMAGOqUBsiACKrOaHphmYgjGkvI%2BYPUFFb9c4Holt08pO7pbFJCfKkC%2FONFvxj4bZ3soiRseK5rQxX5dT%2BbjzISwWVQXVKopUePdLZjwe%2FzllzmpTEXadyu%2BLdlW3dLBEqeyAYjA1fBuSHA22G%2FlrQDv665aYwTGa7skaDaDEEbfjpA9rUoamY3s0b43Kr%2F7t10L9EdR4%2Bwxfr%2FlyRYEsmu3X81%2BAyMYYhYQ&X-Amz-Signature=652fc38ed52feffe4cf18f74a5093f78d62868f7c7cb326d9a93484c265b3d86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HM6RCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEza8my50%2Fb5HA9oeitzaNaml6bp8C%2BxiPP6Iqtj%2B41%2BAiEA2K2D3qR%2FdEw3RVcL25PbJY8L4k86H5cuHEmqRGQB2mcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEOs1%2B%2B%2BFH%2BbQQKECrcA3bI32Keg5FQXpv%2FxwBLaLqCUM2wWztXJcwkwzpzPuUMftarequ88ELHIMq5jWgfQScZ3H4MdQVnQUoailyV0oGx6Fk9b6TcSnz3uVD99RWNgVWTUjdSQrdfwZkIDNBTxRcpYl73ulu6JSQiqAzdaYwsJiFytmuN69E5aYfSGHtnMLui8X9ivBpx%2B21c77yQ5NIXArTzEEyJ6laP2mGMocnqCK1Z2pYcszPWnC%2BorysuuAtaUc%2F%2BhHGVsslOeYmJvEYjqbTaVnMCmnGhli3Q86da%2Fh%2F5zK084muDzRv21Sye1BwIXVl4yfbL%2BepwbfNpEZ5LypFwMFwpHgd6e%2FFC55y6RIVKhOqDdxhj3CScIDzOtuUAt63faj5Q4zDJ8U9s%2FSMWx5rmA7%2FzwXTJm534HHVPSTQztcSEOS0sZ6%2FFzD6gZ%2FiCd6TP6Ng%2Fe%2B5Nm9aPjNazm5qfNJuR9TXwdqS1dbUuEBTr0CDLSP4DZnvMPcr43si4%2BygRd%2Bd4i8HrvMPI4zzKboMzcx67aqaB8NlAqu%2BGYM44KA6ZcMOBAWgBy2sH5FvpbT9zz9jloL3rvQexTxFyXz77sHpznnud%2FnTlGe9OOhxc0GYdmNKFcueo%2B4ooFOVzP9SN7u0neBkcMP%2Fv%2BMAGOqUBsiACKrOaHphmYgjGkvI%2BYPUFFb9c4Holt08pO7pbFJCfKkC%2FONFvxj4bZ3soiRseK5rQxX5dT%2BbjzISwWVQXVKopUePdLZjwe%2FzllzmpTEXadyu%2BLdlW3dLBEqeyAYjA1fBuSHA22G%2FlrQDv665aYwTGa7skaDaDEEbfjpA9rUoamY3s0b43Kr%2F7t10L9EdR4%2Bwxfr%2FlyRYEsmu3X81%2BAyMYYhYQ&X-Amz-Signature=6c810d0ff16ee76bcc382aabe7e726d6c7e34c2e08363251193d274f8881e27b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HM6RCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEza8my50%2Fb5HA9oeitzaNaml6bp8C%2BxiPP6Iqtj%2B41%2BAiEA2K2D3qR%2FdEw3RVcL25PbJY8L4k86H5cuHEmqRGQB2mcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEOs1%2B%2B%2BFH%2BbQQKECrcA3bI32Keg5FQXpv%2FxwBLaLqCUM2wWztXJcwkwzpzPuUMftarequ88ELHIMq5jWgfQScZ3H4MdQVnQUoailyV0oGx6Fk9b6TcSnz3uVD99RWNgVWTUjdSQrdfwZkIDNBTxRcpYl73ulu6JSQiqAzdaYwsJiFytmuN69E5aYfSGHtnMLui8X9ivBpx%2B21c77yQ5NIXArTzEEyJ6laP2mGMocnqCK1Z2pYcszPWnC%2BorysuuAtaUc%2F%2BhHGVsslOeYmJvEYjqbTaVnMCmnGhli3Q86da%2Fh%2F5zK084muDzRv21Sye1BwIXVl4yfbL%2BepwbfNpEZ5LypFwMFwpHgd6e%2FFC55y6RIVKhOqDdxhj3CScIDzOtuUAt63faj5Q4zDJ8U9s%2FSMWx5rmA7%2FzwXTJm534HHVPSTQztcSEOS0sZ6%2FFzD6gZ%2FiCd6TP6Ng%2Fe%2B5Nm9aPjNazm5qfNJuR9TXwdqS1dbUuEBTr0CDLSP4DZnvMPcr43si4%2BygRd%2Bd4i8HrvMPI4zzKboMzcx67aqaB8NlAqu%2BGYM44KA6ZcMOBAWgBy2sH5FvpbT9zz9jloL3rvQexTxFyXz77sHpznnud%2FnTlGe9OOhxc0GYdmNKFcueo%2B4ooFOVzP9SN7u0neBkcMP%2Fv%2BMAGOqUBsiACKrOaHphmYgjGkvI%2BYPUFFb9c4Holt08pO7pbFJCfKkC%2FONFvxj4bZ3soiRseK5rQxX5dT%2BbjzISwWVQXVKopUePdLZjwe%2FzllzmpTEXadyu%2BLdlW3dLBEqeyAYjA1fBuSHA22G%2FlrQDv665aYwTGa7skaDaDEEbfjpA9rUoamY3s0b43Kr%2F7t10L9EdR4%2Bwxfr%2FlyRYEsmu3X81%2BAyMYYhYQ&X-Amz-Signature=8abb514e5b23c0f8c0cce5ab45952525962191b4b9733622806230e49cb3ec8e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HM6RCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEza8my50%2Fb5HA9oeitzaNaml6bp8C%2BxiPP6Iqtj%2B41%2BAiEA2K2D3qR%2FdEw3RVcL25PbJY8L4k86H5cuHEmqRGQB2mcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEOs1%2B%2B%2BFH%2BbQQKECrcA3bI32Keg5FQXpv%2FxwBLaLqCUM2wWztXJcwkwzpzPuUMftarequ88ELHIMq5jWgfQScZ3H4MdQVnQUoailyV0oGx6Fk9b6TcSnz3uVD99RWNgVWTUjdSQrdfwZkIDNBTxRcpYl73ulu6JSQiqAzdaYwsJiFytmuN69E5aYfSGHtnMLui8X9ivBpx%2B21c77yQ5NIXArTzEEyJ6laP2mGMocnqCK1Z2pYcszPWnC%2BorysuuAtaUc%2F%2BhHGVsslOeYmJvEYjqbTaVnMCmnGhli3Q86da%2Fh%2F5zK084muDzRv21Sye1BwIXVl4yfbL%2BepwbfNpEZ5LypFwMFwpHgd6e%2FFC55y6RIVKhOqDdxhj3CScIDzOtuUAt63faj5Q4zDJ8U9s%2FSMWx5rmA7%2FzwXTJm534HHVPSTQztcSEOS0sZ6%2FFzD6gZ%2FiCd6TP6Ng%2Fe%2B5Nm9aPjNazm5qfNJuR9TXwdqS1dbUuEBTr0CDLSP4DZnvMPcr43si4%2BygRd%2Bd4i8HrvMPI4zzKboMzcx67aqaB8NlAqu%2BGYM44KA6ZcMOBAWgBy2sH5FvpbT9zz9jloL3rvQexTxFyXz77sHpznnud%2FnTlGe9OOhxc0GYdmNKFcueo%2B4ooFOVzP9SN7u0neBkcMP%2Fv%2BMAGOqUBsiACKrOaHphmYgjGkvI%2BYPUFFb9c4Holt08pO7pbFJCfKkC%2FONFvxj4bZ3soiRseK5rQxX5dT%2BbjzISwWVQXVKopUePdLZjwe%2FzllzmpTEXadyu%2BLdlW3dLBEqeyAYjA1fBuSHA22G%2FlrQDv665aYwTGa7skaDaDEEbfjpA9rUoamY3s0b43Kr%2F7t10L9EdR4%2Bwxfr%2FlyRYEsmu3X81%2BAyMYYhYQ&X-Amz-Signature=e329f24798f7e4bc8118a2f6472ffeca9aa8c7ccc6531b0293beea0aac4ebfcb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HM6RCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEza8my50%2Fb5HA9oeitzaNaml6bp8C%2BxiPP6Iqtj%2B41%2BAiEA2K2D3qR%2FdEw3RVcL25PbJY8L4k86H5cuHEmqRGQB2mcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEOs1%2B%2B%2BFH%2BbQQKECrcA3bI32Keg5FQXpv%2FxwBLaLqCUM2wWztXJcwkwzpzPuUMftarequ88ELHIMq5jWgfQScZ3H4MdQVnQUoailyV0oGx6Fk9b6TcSnz3uVD99RWNgVWTUjdSQrdfwZkIDNBTxRcpYl73ulu6JSQiqAzdaYwsJiFytmuN69E5aYfSGHtnMLui8X9ivBpx%2B21c77yQ5NIXArTzEEyJ6laP2mGMocnqCK1Z2pYcszPWnC%2BorysuuAtaUc%2F%2BhHGVsslOeYmJvEYjqbTaVnMCmnGhli3Q86da%2Fh%2F5zK084muDzRv21Sye1BwIXVl4yfbL%2BepwbfNpEZ5LypFwMFwpHgd6e%2FFC55y6RIVKhOqDdxhj3CScIDzOtuUAt63faj5Q4zDJ8U9s%2FSMWx5rmA7%2FzwXTJm534HHVPSTQztcSEOS0sZ6%2FFzD6gZ%2FiCd6TP6Ng%2Fe%2B5Nm9aPjNazm5qfNJuR9TXwdqS1dbUuEBTr0CDLSP4DZnvMPcr43si4%2BygRd%2Bd4i8HrvMPI4zzKboMzcx67aqaB8NlAqu%2BGYM44KA6ZcMOBAWgBy2sH5FvpbT9zz9jloL3rvQexTxFyXz77sHpznnud%2FnTlGe9OOhxc0GYdmNKFcueo%2B4ooFOVzP9SN7u0neBkcMP%2Fv%2BMAGOqUBsiACKrOaHphmYgjGkvI%2BYPUFFb9c4Holt08pO7pbFJCfKkC%2FONFvxj4bZ3soiRseK5rQxX5dT%2BbjzISwWVQXVKopUePdLZjwe%2FzllzmpTEXadyu%2BLdlW3dLBEqeyAYjA1fBuSHA22G%2FlrQDv665aYwTGa7skaDaDEEbfjpA9rUoamY3s0b43Kr%2F7t10L9EdR4%2Bwxfr%2FlyRYEsmu3X81%2BAyMYYhYQ&X-Amz-Signature=38fb7dd62f6492c0a47eb94dfd27de3967275f0f40ef33d75f0f9d65d9934b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HM6RCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEza8my50%2Fb5HA9oeitzaNaml6bp8C%2BxiPP6Iqtj%2B41%2BAiEA2K2D3qR%2FdEw3RVcL25PbJY8L4k86H5cuHEmqRGQB2mcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEOs1%2B%2B%2BFH%2BbQQKECrcA3bI32Keg5FQXpv%2FxwBLaLqCUM2wWztXJcwkwzpzPuUMftarequ88ELHIMq5jWgfQScZ3H4MdQVnQUoailyV0oGx6Fk9b6TcSnz3uVD99RWNgVWTUjdSQrdfwZkIDNBTxRcpYl73ulu6JSQiqAzdaYwsJiFytmuN69E5aYfSGHtnMLui8X9ivBpx%2B21c77yQ5NIXArTzEEyJ6laP2mGMocnqCK1Z2pYcszPWnC%2BorysuuAtaUc%2F%2BhHGVsslOeYmJvEYjqbTaVnMCmnGhli3Q86da%2Fh%2F5zK084muDzRv21Sye1BwIXVl4yfbL%2BepwbfNpEZ5LypFwMFwpHgd6e%2FFC55y6RIVKhOqDdxhj3CScIDzOtuUAt63faj5Q4zDJ8U9s%2FSMWx5rmA7%2FzwXTJm534HHVPSTQztcSEOS0sZ6%2FFzD6gZ%2FiCd6TP6Ng%2Fe%2B5Nm9aPjNazm5qfNJuR9TXwdqS1dbUuEBTr0CDLSP4DZnvMPcr43si4%2BygRd%2Bd4i8HrvMPI4zzKboMzcx67aqaB8NlAqu%2BGYM44KA6ZcMOBAWgBy2sH5FvpbT9zz9jloL3rvQexTxFyXz77sHpznnud%2FnTlGe9OOhxc0GYdmNKFcueo%2B4ooFOVzP9SN7u0neBkcMP%2Fv%2BMAGOqUBsiACKrOaHphmYgjGkvI%2BYPUFFb9c4Holt08pO7pbFJCfKkC%2FONFvxj4bZ3soiRseK5rQxX5dT%2BbjzISwWVQXVKopUePdLZjwe%2FzllzmpTEXadyu%2BLdlW3dLBEqeyAYjA1fBuSHA22G%2FlrQDv665aYwTGa7skaDaDEEbfjpA9rUoamY3s0b43Kr%2F7t10L9EdR4%2Bwxfr%2FlyRYEsmu3X81%2BAyMYYhYQ&X-Amz-Signature=bc95439809e884bf299fe81a28c81439ad94efba10adad95d61a8236666bc66f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HM6RCE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEza8my50%2Fb5HA9oeitzaNaml6bp8C%2BxiPP6Iqtj%2B41%2BAiEA2K2D3qR%2FdEw3RVcL25PbJY8L4k86H5cuHEmqRGQB2mcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEOs1%2B%2B%2BFH%2BbQQKECrcA3bI32Keg5FQXpv%2FxwBLaLqCUM2wWztXJcwkwzpzPuUMftarequ88ELHIMq5jWgfQScZ3H4MdQVnQUoailyV0oGx6Fk9b6TcSnz3uVD99RWNgVWTUjdSQrdfwZkIDNBTxRcpYl73ulu6JSQiqAzdaYwsJiFytmuN69E5aYfSGHtnMLui8X9ivBpx%2B21c77yQ5NIXArTzEEyJ6laP2mGMocnqCK1Z2pYcszPWnC%2BorysuuAtaUc%2F%2BhHGVsslOeYmJvEYjqbTaVnMCmnGhli3Q86da%2Fh%2F5zK084muDzRv21Sye1BwIXVl4yfbL%2BepwbfNpEZ5LypFwMFwpHgd6e%2FFC55y6RIVKhOqDdxhj3CScIDzOtuUAt63faj5Q4zDJ8U9s%2FSMWx5rmA7%2FzwXTJm534HHVPSTQztcSEOS0sZ6%2FFzD6gZ%2FiCd6TP6Ng%2Fe%2B5Nm9aPjNazm5qfNJuR9TXwdqS1dbUuEBTr0CDLSP4DZnvMPcr43si4%2BygRd%2Bd4i8HrvMPI4zzKboMzcx67aqaB8NlAqu%2BGYM44KA6ZcMOBAWgBy2sH5FvpbT9zz9jloL3rvQexTxFyXz77sHpznnud%2FnTlGe9OOhxc0GYdmNKFcueo%2B4ooFOVzP9SN7u0neBkcMP%2Fv%2BMAGOqUBsiACKrOaHphmYgjGkvI%2BYPUFFb9c4Holt08pO7pbFJCfKkC%2FONFvxj4bZ3soiRseK5rQxX5dT%2BbjzISwWVQXVKopUePdLZjwe%2FzllzmpTEXadyu%2BLdlW3dLBEqeyAYjA1fBuSHA22G%2FlrQDv665aYwTGa7skaDaDEEbfjpA9rUoamY3s0b43Kr%2F7t10L9EdR4%2Bwxfr%2FlyRYEsmu3X81%2BAyMYYhYQ&X-Amz-Signature=01f1da7f077b0daaab99d1c1d005d3ad84661d1bde03367f8b690db2add54417&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
