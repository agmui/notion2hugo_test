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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSR2Y66%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCHJeWqxJL7yS%2Bmk2ubCLQtBUxA1HbQU8LqYCygo2TzAwIgaDz7z4tQJFn3MswajEHBZCcZ%2BbgttWKgTTKGgo57PWgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLyrxsbYfX0HZZllkSrcA308dpkG%2FOeeyvm3TceeeNVYKxfIWvCg%2BGfEsGXvtq0NFN4UCZw7rvFKqAEYvL%2FFE5Wv59Svpo14I5DeoY3K4CVhO%2FkMwhqFaL22Hf%2FSld8rr8EpjVuRW9Pfqa80cey1AazbfwU44FH5%2FJuPAAXGJRhRg%2F9bsuaX24xBrgZRgZl48uydaId9pCXRtgzKUKDJZvrPsc6sDVbib2q55FpiFQXBZk6EC8xbmEkR8FU4atywV0h%2BiXDKT7wcSZvyhEqzwdW%2BJ9dN00umAT6lePeobEgJjyPhuijWgwgO6Wr%2FTfyjlN%2BtTlccNaOfApJqWQYcZTFiJnIqY6hmL83fIEMvhMK48EKoClPfz9chAlZSjrSENDYiGDBzrYR5uBnYwNRKOXXM%2BSKjE9LGvkPz%2FM02gwbXZpkNVRAgunul%2BfI1slYgmjzrtOjSeZ5BQQJ0S1i61bByeR5C6mddWB69%2FwvivpUMPM7xLoKeSL2onWWINPuwHj7cBnpK8In8WUD%2Bd0Um4rZIjDQGSjsVPw65Z8SgEP2jjddw%2FnTbdlt2G2gQ1yhOjE5zyT9W9OZnTkTBMnPwRl8mG4Z9NA0mxgnRy9htj8dqHuUmWScIojNdj1UEaizEkO5mf6oFSdk8M2IlMInAhL0GOqUBLCDzZF0bHvPUhe3YYJq5F4cqxLIPPFEoNKsON1fuC92m2qMN8Q%2BZRcpJwkLVPxMsOl4AepYG6TKXl0AJZkBOSAcwTM%2BCNNvcT2vh3pPN7XOfiy5ff06vToK5WYVGgZb9Z1MFT95d4Uan56RLj0GIKtMSUxoalP85SQJYiTsy18oyx%2FTmdB%2BM1eqE7POYhCjI%2F%2BW2G66aDV6L3hct1akrUy0qeLzp&X-Amz-Signature=ce4e246c11c67726f093b416f32392b86971ba36ba03e6355f771b7cefd5611c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSR2Y66%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCHJeWqxJL7yS%2Bmk2ubCLQtBUxA1HbQU8LqYCygo2TzAwIgaDz7z4tQJFn3MswajEHBZCcZ%2BbgttWKgTTKGgo57PWgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLyrxsbYfX0HZZllkSrcA308dpkG%2FOeeyvm3TceeeNVYKxfIWvCg%2BGfEsGXvtq0NFN4UCZw7rvFKqAEYvL%2FFE5Wv59Svpo14I5DeoY3K4CVhO%2FkMwhqFaL22Hf%2FSld8rr8EpjVuRW9Pfqa80cey1AazbfwU44FH5%2FJuPAAXGJRhRg%2F9bsuaX24xBrgZRgZl48uydaId9pCXRtgzKUKDJZvrPsc6sDVbib2q55FpiFQXBZk6EC8xbmEkR8FU4atywV0h%2BiXDKT7wcSZvyhEqzwdW%2BJ9dN00umAT6lePeobEgJjyPhuijWgwgO6Wr%2FTfyjlN%2BtTlccNaOfApJqWQYcZTFiJnIqY6hmL83fIEMvhMK48EKoClPfz9chAlZSjrSENDYiGDBzrYR5uBnYwNRKOXXM%2BSKjE9LGvkPz%2FM02gwbXZpkNVRAgunul%2BfI1slYgmjzrtOjSeZ5BQQJ0S1i61bByeR5C6mddWB69%2FwvivpUMPM7xLoKeSL2onWWINPuwHj7cBnpK8In8WUD%2Bd0Um4rZIjDQGSjsVPw65Z8SgEP2jjddw%2FnTbdlt2G2gQ1yhOjE5zyT9W9OZnTkTBMnPwRl8mG4Z9NA0mxgnRy9htj8dqHuUmWScIojNdj1UEaizEkO5mf6oFSdk8M2IlMInAhL0GOqUBLCDzZF0bHvPUhe3YYJq5F4cqxLIPPFEoNKsON1fuC92m2qMN8Q%2BZRcpJwkLVPxMsOl4AepYG6TKXl0AJZkBOSAcwTM%2BCNNvcT2vh3pPN7XOfiy5ff06vToK5WYVGgZb9Z1MFT95d4Uan56RLj0GIKtMSUxoalP85SQJYiTsy18oyx%2FTmdB%2BM1eqE7POYhCjI%2F%2BW2G66aDV6L3hct1akrUy0qeLzp&X-Amz-Signature=f7aa1bcc727f3c30dfc845a47dc89f8647cca22cbf0293f1cbdd979bb5eae104&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSR2Y66%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCHJeWqxJL7yS%2Bmk2ubCLQtBUxA1HbQU8LqYCygo2TzAwIgaDz7z4tQJFn3MswajEHBZCcZ%2BbgttWKgTTKGgo57PWgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLyrxsbYfX0HZZllkSrcA308dpkG%2FOeeyvm3TceeeNVYKxfIWvCg%2BGfEsGXvtq0NFN4UCZw7rvFKqAEYvL%2FFE5Wv59Svpo14I5DeoY3K4CVhO%2FkMwhqFaL22Hf%2FSld8rr8EpjVuRW9Pfqa80cey1AazbfwU44FH5%2FJuPAAXGJRhRg%2F9bsuaX24xBrgZRgZl48uydaId9pCXRtgzKUKDJZvrPsc6sDVbib2q55FpiFQXBZk6EC8xbmEkR8FU4atywV0h%2BiXDKT7wcSZvyhEqzwdW%2BJ9dN00umAT6lePeobEgJjyPhuijWgwgO6Wr%2FTfyjlN%2BtTlccNaOfApJqWQYcZTFiJnIqY6hmL83fIEMvhMK48EKoClPfz9chAlZSjrSENDYiGDBzrYR5uBnYwNRKOXXM%2BSKjE9LGvkPz%2FM02gwbXZpkNVRAgunul%2BfI1slYgmjzrtOjSeZ5BQQJ0S1i61bByeR5C6mddWB69%2FwvivpUMPM7xLoKeSL2onWWINPuwHj7cBnpK8In8WUD%2Bd0Um4rZIjDQGSjsVPw65Z8SgEP2jjddw%2FnTbdlt2G2gQ1yhOjE5zyT9W9OZnTkTBMnPwRl8mG4Z9NA0mxgnRy9htj8dqHuUmWScIojNdj1UEaizEkO5mf6oFSdk8M2IlMInAhL0GOqUBLCDzZF0bHvPUhe3YYJq5F4cqxLIPPFEoNKsON1fuC92m2qMN8Q%2BZRcpJwkLVPxMsOl4AepYG6TKXl0AJZkBOSAcwTM%2BCNNvcT2vh3pPN7XOfiy5ff06vToK5WYVGgZb9Z1MFT95d4Uan56RLj0GIKtMSUxoalP85SQJYiTsy18oyx%2FTmdB%2BM1eqE7POYhCjI%2F%2BW2G66aDV6L3hct1akrUy0qeLzp&X-Amz-Signature=f9053f03b81e35df06c22105fa0779a3f1642b19c831210c4bf3f16e70a47cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSR2Y66%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCHJeWqxJL7yS%2Bmk2ubCLQtBUxA1HbQU8LqYCygo2TzAwIgaDz7z4tQJFn3MswajEHBZCcZ%2BbgttWKgTTKGgo57PWgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLyrxsbYfX0HZZllkSrcA308dpkG%2FOeeyvm3TceeeNVYKxfIWvCg%2BGfEsGXvtq0NFN4UCZw7rvFKqAEYvL%2FFE5Wv59Svpo14I5DeoY3K4CVhO%2FkMwhqFaL22Hf%2FSld8rr8EpjVuRW9Pfqa80cey1AazbfwU44FH5%2FJuPAAXGJRhRg%2F9bsuaX24xBrgZRgZl48uydaId9pCXRtgzKUKDJZvrPsc6sDVbib2q55FpiFQXBZk6EC8xbmEkR8FU4atywV0h%2BiXDKT7wcSZvyhEqzwdW%2BJ9dN00umAT6lePeobEgJjyPhuijWgwgO6Wr%2FTfyjlN%2BtTlccNaOfApJqWQYcZTFiJnIqY6hmL83fIEMvhMK48EKoClPfz9chAlZSjrSENDYiGDBzrYR5uBnYwNRKOXXM%2BSKjE9LGvkPz%2FM02gwbXZpkNVRAgunul%2BfI1slYgmjzrtOjSeZ5BQQJ0S1i61bByeR5C6mddWB69%2FwvivpUMPM7xLoKeSL2onWWINPuwHj7cBnpK8In8WUD%2Bd0Um4rZIjDQGSjsVPw65Z8SgEP2jjddw%2FnTbdlt2G2gQ1yhOjE5zyT9W9OZnTkTBMnPwRl8mG4Z9NA0mxgnRy9htj8dqHuUmWScIojNdj1UEaizEkO5mf6oFSdk8M2IlMInAhL0GOqUBLCDzZF0bHvPUhe3YYJq5F4cqxLIPPFEoNKsON1fuC92m2qMN8Q%2BZRcpJwkLVPxMsOl4AepYG6TKXl0AJZkBOSAcwTM%2BCNNvcT2vh3pPN7XOfiy5ff06vToK5WYVGgZb9Z1MFT95d4Uan56RLj0GIKtMSUxoalP85SQJYiTsy18oyx%2FTmdB%2BM1eqE7POYhCjI%2F%2BW2G66aDV6L3hct1akrUy0qeLzp&X-Amz-Signature=20e48fcb8ffa12e3a38ec923decd0ea67807b97e467ee6335d188ffa919d69e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSR2Y66%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCHJeWqxJL7yS%2Bmk2ubCLQtBUxA1HbQU8LqYCygo2TzAwIgaDz7z4tQJFn3MswajEHBZCcZ%2BbgttWKgTTKGgo57PWgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLyrxsbYfX0HZZllkSrcA308dpkG%2FOeeyvm3TceeeNVYKxfIWvCg%2BGfEsGXvtq0NFN4UCZw7rvFKqAEYvL%2FFE5Wv59Svpo14I5DeoY3K4CVhO%2FkMwhqFaL22Hf%2FSld8rr8EpjVuRW9Pfqa80cey1AazbfwU44FH5%2FJuPAAXGJRhRg%2F9bsuaX24xBrgZRgZl48uydaId9pCXRtgzKUKDJZvrPsc6sDVbib2q55FpiFQXBZk6EC8xbmEkR8FU4atywV0h%2BiXDKT7wcSZvyhEqzwdW%2BJ9dN00umAT6lePeobEgJjyPhuijWgwgO6Wr%2FTfyjlN%2BtTlccNaOfApJqWQYcZTFiJnIqY6hmL83fIEMvhMK48EKoClPfz9chAlZSjrSENDYiGDBzrYR5uBnYwNRKOXXM%2BSKjE9LGvkPz%2FM02gwbXZpkNVRAgunul%2BfI1slYgmjzrtOjSeZ5BQQJ0S1i61bByeR5C6mddWB69%2FwvivpUMPM7xLoKeSL2onWWINPuwHj7cBnpK8In8WUD%2Bd0Um4rZIjDQGSjsVPw65Z8SgEP2jjddw%2FnTbdlt2G2gQ1yhOjE5zyT9W9OZnTkTBMnPwRl8mG4Z9NA0mxgnRy9htj8dqHuUmWScIojNdj1UEaizEkO5mf6oFSdk8M2IlMInAhL0GOqUBLCDzZF0bHvPUhe3YYJq5F4cqxLIPPFEoNKsON1fuC92m2qMN8Q%2BZRcpJwkLVPxMsOl4AepYG6TKXl0AJZkBOSAcwTM%2BCNNvcT2vh3pPN7XOfiy5ff06vToK5WYVGgZb9Z1MFT95d4Uan56RLj0GIKtMSUxoalP85SQJYiTsy18oyx%2FTmdB%2BM1eqE7POYhCjI%2F%2BW2G66aDV6L3hct1akrUy0qeLzp&X-Amz-Signature=c2fc83bd8bdcb2675f2db395d4413e23554e09bea839291049a1aab3447cf8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSR2Y66%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCHJeWqxJL7yS%2Bmk2ubCLQtBUxA1HbQU8LqYCygo2TzAwIgaDz7z4tQJFn3MswajEHBZCcZ%2BbgttWKgTTKGgo57PWgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLyrxsbYfX0HZZllkSrcA308dpkG%2FOeeyvm3TceeeNVYKxfIWvCg%2BGfEsGXvtq0NFN4UCZw7rvFKqAEYvL%2FFE5Wv59Svpo14I5DeoY3K4CVhO%2FkMwhqFaL22Hf%2FSld8rr8EpjVuRW9Pfqa80cey1AazbfwU44FH5%2FJuPAAXGJRhRg%2F9bsuaX24xBrgZRgZl48uydaId9pCXRtgzKUKDJZvrPsc6sDVbib2q55FpiFQXBZk6EC8xbmEkR8FU4atywV0h%2BiXDKT7wcSZvyhEqzwdW%2BJ9dN00umAT6lePeobEgJjyPhuijWgwgO6Wr%2FTfyjlN%2BtTlccNaOfApJqWQYcZTFiJnIqY6hmL83fIEMvhMK48EKoClPfz9chAlZSjrSENDYiGDBzrYR5uBnYwNRKOXXM%2BSKjE9LGvkPz%2FM02gwbXZpkNVRAgunul%2BfI1slYgmjzrtOjSeZ5BQQJ0S1i61bByeR5C6mddWB69%2FwvivpUMPM7xLoKeSL2onWWINPuwHj7cBnpK8In8WUD%2Bd0Um4rZIjDQGSjsVPw65Z8SgEP2jjddw%2FnTbdlt2G2gQ1yhOjE5zyT9W9OZnTkTBMnPwRl8mG4Z9NA0mxgnRy9htj8dqHuUmWScIojNdj1UEaizEkO5mf6oFSdk8M2IlMInAhL0GOqUBLCDzZF0bHvPUhe3YYJq5F4cqxLIPPFEoNKsON1fuC92m2qMN8Q%2BZRcpJwkLVPxMsOl4AepYG6TKXl0AJZkBOSAcwTM%2BCNNvcT2vh3pPN7XOfiy5ff06vToK5WYVGgZb9Z1MFT95d4Uan56RLj0GIKtMSUxoalP85SQJYiTsy18oyx%2FTmdB%2BM1eqE7POYhCjI%2F%2BW2G66aDV6L3hct1akrUy0qeLzp&X-Amz-Signature=338b3baeb947013fe921ed4dc4c1060c4e695f088e7e18a207f0891d2f1f1a42&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSR2Y66%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCHJeWqxJL7yS%2Bmk2ubCLQtBUxA1HbQU8LqYCygo2TzAwIgaDz7z4tQJFn3MswajEHBZCcZ%2BbgttWKgTTKGgo57PWgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDLyrxsbYfX0HZZllkSrcA308dpkG%2FOeeyvm3TceeeNVYKxfIWvCg%2BGfEsGXvtq0NFN4UCZw7rvFKqAEYvL%2FFE5Wv59Svpo14I5DeoY3K4CVhO%2FkMwhqFaL22Hf%2FSld8rr8EpjVuRW9Pfqa80cey1AazbfwU44FH5%2FJuPAAXGJRhRg%2F9bsuaX24xBrgZRgZl48uydaId9pCXRtgzKUKDJZvrPsc6sDVbib2q55FpiFQXBZk6EC8xbmEkR8FU4atywV0h%2BiXDKT7wcSZvyhEqzwdW%2BJ9dN00umAT6lePeobEgJjyPhuijWgwgO6Wr%2FTfyjlN%2BtTlccNaOfApJqWQYcZTFiJnIqY6hmL83fIEMvhMK48EKoClPfz9chAlZSjrSENDYiGDBzrYR5uBnYwNRKOXXM%2BSKjE9LGvkPz%2FM02gwbXZpkNVRAgunul%2BfI1slYgmjzrtOjSeZ5BQQJ0S1i61bByeR5C6mddWB69%2FwvivpUMPM7xLoKeSL2onWWINPuwHj7cBnpK8In8WUD%2Bd0Um4rZIjDQGSjsVPw65Z8SgEP2jjddw%2FnTbdlt2G2gQ1yhOjE5zyT9W9OZnTkTBMnPwRl8mG4Z9NA0mxgnRy9htj8dqHuUmWScIojNdj1UEaizEkO5mf6oFSdk8M2IlMInAhL0GOqUBLCDzZF0bHvPUhe3YYJq5F4cqxLIPPFEoNKsON1fuC92m2qMN8Q%2BZRcpJwkLVPxMsOl4AepYG6TKXl0AJZkBOSAcwTM%2BCNNvcT2vh3pPN7XOfiy5ff06vToK5WYVGgZb9Z1MFT95d4Uan56RLj0GIKtMSUxoalP85SQJYiTsy18oyx%2FTmdB%2BM1eqE7POYhCjI%2F%2BW2G66aDV6L3hct1akrUy0qeLzp&X-Amz-Signature=1e6da5ea2aaa26d532f09c4792f0c074fccff3e6c8134fc0056a5a6e881f0bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
