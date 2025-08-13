---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIS4RRP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygyBYGqlbI5yNhHgChTFgbQGamGNWCXcPL1F1zNOr9gIgCBIJMd5x5UqqbT0Ct%2B10Me5poWHV8jK4BagqzYaGNBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJva4L2T6juG0w3uaCrcA%2B7DDByLl03y3T64tDgN0n988l6IRt7Ofvk9xFNPpf0%2FoIkewW44XzyBY%2BbLiWxzT5RK4VPHiYRuIPbBYvtcUNqnE9FLOqogS9VnkT7zg6lmhpLqA96oZXi3JnhMoco%2Ffy9SLZ1wHumYOP9H2irm%2BnwKmFBpUFSJtFnz3sc%2F0beDmiBVzCHBZEhkT0nswHNfdQlkL%2FzUiNrbCmAGGqwx9VxP%2FBbCB5z7qBQe9bPwkMebC7Lo9bdDxlYKfMECHLdmoJ0fbu7KlEKDfRKK3XvK8A4oTXHbENZVUvQI3XeHbRdT5KhDQOAl8qk4pa9BuyCIwbTpJpdxvb8jVGX0rdT5Qcn2lsXOtwn8WZ8yMMuQCqXZHJCTBsl0T0SNxQbescphLDqgkVNgZqnPWA8dubqo1tSamSH6B5bw%2BRAfcsFYOm2qG3jFL7BbullSoKxdkOPkfqTMUFRtE5twsiA5Ew7IOAAePR8e7lb2x0A%2BP52lzHSLqxZj%2BUJRjfYC%2BG8u1PSyV17ejYfc%2BWTv8MQj9OO%2Blw5i%2FInltENXu9KJ3bfn%2BCWaPw%2F7MtwDAgtu5hX3O4P%2BOWS2QDqc%2B3EUr%2FZVE5cU3UHbzP4KfFYDS5%2B%2FjPtskHzSB2vza7wchzEN%2FwuNMIfZ78QGOqUBU4iKPXgeL9rvQUcGrLlt7aReUniCBQVwlkqELJMrovWgKl7RhZNd977oRnr5Yv5Evh9Vr3z0pX%2BCvLqU6sVBOuSJRqDEJYo1al0SFiIlbgVSOr08huPFIkvq1YgvNo3JTe%2BgmFG8Po8DxU1bGUiyuYR%2BPh4GdN6CoZt0HAyJ17Ku1yv301M%2FeycTmmiWq%2B6Mw1bUEAfHsYK8KG0elwr4E0R1r%2BV3&X-Amz-Signature=219e48da532ee8d0cdca1f9eee65f023b8c9191ecb378318632d302ff2b7afbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIS4RRP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygyBYGqlbI5yNhHgChTFgbQGamGNWCXcPL1F1zNOr9gIgCBIJMd5x5UqqbT0Ct%2B10Me5poWHV8jK4BagqzYaGNBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJva4L2T6juG0w3uaCrcA%2B7DDByLl03y3T64tDgN0n988l6IRt7Ofvk9xFNPpf0%2FoIkewW44XzyBY%2BbLiWxzT5RK4VPHiYRuIPbBYvtcUNqnE9FLOqogS9VnkT7zg6lmhpLqA96oZXi3JnhMoco%2Ffy9SLZ1wHumYOP9H2irm%2BnwKmFBpUFSJtFnz3sc%2F0beDmiBVzCHBZEhkT0nswHNfdQlkL%2FzUiNrbCmAGGqwx9VxP%2FBbCB5z7qBQe9bPwkMebC7Lo9bdDxlYKfMECHLdmoJ0fbu7KlEKDfRKK3XvK8A4oTXHbENZVUvQI3XeHbRdT5KhDQOAl8qk4pa9BuyCIwbTpJpdxvb8jVGX0rdT5Qcn2lsXOtwn8WZ8yMMuQCqXZHJCTBsl0T0SNxQbescphLDqgkVNgZqnPWA8dubqo1tSamSH6B5bw%2BRAfcsFYOm2qG3jFL7BbullSoKxdkOPkfqTMUFRtE5twsiA5Ew7IOAAePR8e7lb2x0A%2BP52lzHSLqxZj%2BUJRjfYC%2BG8u1PSyV17ejYfc%2BWTv8MQj9OO%2Blw5i%2FInltENXu9KJ3bfn%2BCWaPw%2F7MtwDAgtu5hX3O4P%2BOWS2QDqc%2B3EUr%2FZVE5cU3UHbzP4KfFYDS5%2B%2FjPtskHzSB2vza7wchzEN%2FwuNMIfZ78QGOqUBU4iKPXgeL9rvQUcGrLlt7aReUniCBQVwlkqELJMrovWgKl7RhZNd977oRnr5Yv5Evh9Vr3z0pX%2BCvLqU6sVBOuSJRqDEJYo1al0SFiIlbgVSOr08huPFIkvq1YgvNo3JTe%2BgmFG8Po8DxU1bGUiyuYR%2BPh4GdN6CoZt0HAyJ17Ku1yv301M%2FeycTmmiWq%2B6Mw1bUEAfHsYK8KG0elwr4E0R1r%2BV3&X-Amz-Signature=3093168da25ca9ada73d84b0528eba98e497cf655b9159148411775e346c244a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIS4RRP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygyBYGqlbI5yNhHgChTFgbQGamGNWCXcPL1F1zNOr9gIgCBIJMd5x5UqqbT0Ct%2B10Me5poWHV8jK4BagqzYaGNBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJva4L2T6juG0w3uaCrcA%2B7DDByLl03y3T64tDgN0n988l6IRt7Ofvk9xFNPpf0%2FoIkewW44XzyBY%2BbLiWxzT5RK4VPHiYRuIPbBYvtcUNqnE9FLOqogS9VnkT7zg6lmhpLqA96oZXi3JnhMoco%2Ffy9SLZ1wHumYOP9H2irm%2BnwKmFBpUFSJtFnz3sc%2F0beDmiBVzCHBZEhkT0nswHNfdQlkL%2FzUiNrbCmAGGqwx9VxP%2FBbCB5z7qBQe9bPwkMebC7Lo9bdDxlYKfMECHLdmoJ0fbu7KlEKDfRKK3XvK8A4oTXHbENZVUvQI3XeHbRdT5KhDQOAl8qk4pa9BuyCIwbTpJpdxvb8jVGX0rdT5Qcn2lsXOtwn8WZ8yMMuQCqXZHJCTBsl0T0SNxQbescphLDqgkVNgZqnPWA8dubqo1tSamSH6B5bw%2BRAfcsFYOm2qG3jFL7BbullSoKxdkOPkfqTMUFRtE5twsiA5Ew7IOAAePR8e7lb2x0A%2BP52lzHSLqxZj%2BUJRjfYC%2BG8u1PSyV17ejYfc%2BWTv8MQj9OO%2Blw5i%2FInltENXu9KJ3bfn%2BCWaPw%2F7MtwDAgtu5hX3O4P%2BOWS2QDqc%2B3EUr%2FZVE5cU3UHbzP4KfFYDS5%2B%2FjPtskHzSB2vza7wchzEN%2FwuNMIfZ78QGOqUBU4iKPXgeL9rvQUcGrLlt7aReUniCBQVwlkqELJMrovWgKl7RhZNd977oRnr5Yv5Evh9Vr3z0pX%2BCvLqU6sVBOuSJRqDEJYo1al0SFiIlbgVSOr08huPFIkvq1YgvNo3JTe%2BgmFG8Po8DxU1bGUiyuYR%2BPh4GdN6CoZt0HAyJ17Ku1yv301M%2FeycTmmiWq%2B6Mw1bUEAfHsYK8KG0elwr4E0R1r%2BV3&X-Amz-Signature=131166cf797ddb942b53fe11aa9ee912b8c8f56e0b0edd8e1ba51f33b59a3281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIS4RRP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygyBYGqlbI5yNhHgChTFgbQGamGNWCXcPL1F1zNOr9gIgCBIJMd5x5UqqbT0Ct%2B10Me5poWHV8jK4BagqzYaGNBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJva4L2T6juG0w3uaCrcA%2B7DDByLl03y3T64tDgN0n988l6IRt7Ofvk9xFNPpf0%2FoIkewW44XzyBY%2BbLiWxzT5RK4VPHiYRuIPbBYvtcUNqnE9FLOqogS9VnkT7zg6lmhpLqA96oZXi3JnhMoco%2Ffy9SLZ1wHumYOP9H2irm%2BnwKmFBpUFSJtFnz3sc%2F0beDmiBVzCHBZEhkT0nswHNfdQlkL%2FzUiNrbCmAGGqwx9VxP%2FBbCB5z7qBQe9bPwkMebC7Lo9bdDxlYKfMECHLdmoJ0fbu7KlEKDfRKK3XvK8A4oTXHbENZVUvQI3XeHbRdT5KhDQOAl8qk4pa9BuyCIwbTpJpdxvb8jVGX0rdT5Qcn2lsXOtwn8WZ8yMMuQCqXZHJCTBsl0T0SNxQbescphLDqgkVNgZqnPWA8dubqo1tSamSH6B5bw%2BRAfcsFYOm2qG3jFL7BbullSoKxdkOPkfqTMUFRtE5twsiA5Ew7IOAAePR8e7lb2x0A%2BP52lzHSLqxZj%2BUJRjfYC%2BG8u1PSyV17ejYfc%2BWTv8MQj9OO%2Blw5i%2FInltENXu9KJ3bfn%2BCWaPw%2F7MtwDAgtu5hX3O4P%2BOWS2QDqc%2B3EUr%2FZVE5cU3UHbzP4KfFYDS5%2B%2FjPtskHzSB2vza7wchzEN%2FwuNMIfZ78QGOqUBU4iKPXgeL9rvQUcGrLlt7aReUniCBQVwlkqELJMrovWgKl7RhZNd977oRnr5Yv5Evh9Vr3z0pX%2BCvLqU6sVBOuSJRqDEJYo1al0SFiIlbgVSOr08huPFIkvq1YgvNo3JTe%2BgmFG8Po8DxU1bGUiyuYR%2BPh4GdN6CoZt0HAyJ17Ku1yv301M%2FeycTmmiWq%2B6Mw1bUEAfHsYK8KG0elwr4E0R1r%2BV3&X-Amz-Signature=697215a13a5f68d03a6837ce70f650881f274d8573ef5264a64e0333f4bc9cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIS4RRP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygyBYGqlbI5yNhHgChTFgbQGamGNWCXcPL1F1zNOr9gIgCBIJMd5x5UqqbT0Ct%2B10Me5poWHV8jK4BagqzYaGNBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJva4L2T6juG0w3uaCrcA%2B7DDByLl03y3T64tDgN0n988l6IRt7Ofvk9xFNPpf0%2FoIkewW44XzyBY%2BbLiWxzT5RK4VPHiYRuIPbBYvtcUNqnE9FLOqogS9VnkT7zg6lmhpLqA96oZXi3JnhMoco%2Ffy9SLZ1wHumYOP9H2irm%2BnwKmFBpUFSJtFnz3sc%2F0beDmiBVzCHBZEhkT0nswHNfdQlkL%2FzUiNrbCmAGGqwx9VxP%2FBbCB5z7qBQe9bPwkMebC7Lo9bdDxlYKfMECHLdmoJ0fbu7KlEKDfRKK3XvK8A4oTXHbENZVUvQI3XeHbRdT5KhDQOAl8qk4pa9BuyCIwbTpJpdxvb8jVGX0rdT5Qcn2lsXOtwn8WZ8yMMuQCqXZHJCTBsl0T0SNxQbescphLDqgkVNgZqnPWA8dubqo1tSamSH6B5bw%2BRAfcsFYOm2qG3jFL7BbullSoKxdkOPkfqTMUFRtE5twsiA5Ew7IOAAePR8e7lb2x0A%2BP52lzHSLqxZj%2BUJRjfYC%2BG8u1PSyV17ejYfc%2BWTv8MQj9OO%2Blw5i%2FInltENXu9KJ3bfn%2BCWaPw%2F7MtwDAgtu5hX3O4P%2BOWS2QDqc%2B3EUr%2FZVE5cU3UHbzP4KfFYDS5%2B%2FjPtskHzSB2vza7wchzEN%2FwuNMIfZ78QGOqUBU4iKPXgeL9rvQUcGrLlt7aReUniCBQVwlkqELJMrovWgKl7RhZNd977oRnr5Yv5Evh9Vr3z0pX%2BCvLqU6sVBOuSJRqDEJYo1al0SFiIlbgVSOr08huPFIkvq1YgvNo3JTe%2BgmFG8Po8DxU1bGUiyuYR%2BPh4GdN6CoZt0HAyJ17Ku1yv301M%2FeycTmmiWq%2B6Mw1bUEAfHsYK8KG0elwr4E0R1r%2BV3&X-Amz-Signature=94a2ffaf05c1d6fe69e4dd3794d9ff6c36a49b4e4d3cfa3d56c4801f076ef58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIS4RRP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygyBYGqlbI5yNhHgChTFgbQGamGNWCXcPL1F1zNOr9gIgCBIJMd5x5UqqbT0Ct%2B10Me5poWHV8jK4BagqzYaGNBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJva4L2T6juG0w3uaCrcA%2B7DDByLl03y3T64tDgN0n988l6IRt7Ofvk9xFNPpf0%2FoIkewW44XzyBY%2BbLiWxzT5RK4VPHiYRuIPbBYvtcUNqnE9FLOqogS9VnkT7zg6lmhpLqA96oZXi3JnhMoco%2Ffy9SLZ1wHumYOP9H2irm%2BnwKmFBpUFSJtFnz3sc%2F0beDmiBVzCHBZEhkT0nswHNfdQlkL%2FzUiNrbCmAGGqwx9VxP%2FBbCB5z7qBQe9bPwkMebC7Lo9bdDxlYKfMECHLdmoJ0fbu7KlEKDfRKK3XvK8A4oTXHbENZVUvQI3XeHbRdT5KhDQOAl8qk4pa9BuyCIwbTpJpdxvb8jVGX0rdT5Qcn2lsXOtwn8WZ8yMMuQCqXZHJCTBsl0T0SNxQbescphLDqgkVNgZqnPWA8dubqo1tSamSH6B5bw%2BRAfcsFYOm2qG3jFL7BbullSoKxdkOPkfqTMUFRtE5twsiA5Ew7IOAAePR8e7lb2x0A%2BP52lzHSLqxZj%2BUJRjfYC%2BG8u1PSyV17ejYfc%2BWTv8MQj9OO%2Blw5i%2FInltENXu9KJ3bfn%2BCWaPw%2F7MtwDAgtu5hX3O4P%2BOWS2QDqc%2B3EUr%2FZVE5cU3UHbzP4KfFYDS5%2B%2FjPtskHzSB2vza7wchzEN%2FwuNMIfZ78QGOqUBU4iKPXgeL9rvQUcGrLlt7aReUniCBQVwlkqELJMrovWgKl7RhZNd977oRnr5Yv5Evh9Vr3z0pX%2BCvLqU6sVBOuSJRqDEJYo1al0SFiIlbgVSOr08huPFIkvq1YgvNo3JTe%2BgmFG8Po8DxU1bGUiyuYR%2BPh4GdN6CoZt0HAyJ17Ku1yv301M%2FeycTmmiWq%2B6Mw1bUEAfHsYK8KG0elwr4E0R1r%2BV3&X-Amz-Signature=f0ef65e9a2ff4743a84fec5400ee20fccc940eb4594718248f54fc7ecb41a3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIS4RRP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDygyBYGqlbI5yNhHgChTFgbQGamGNWCXcPL1F1zNOr9gIgCBIJMd5x5UqqbT0Ct%2B10Me5poWHV8jK4BagqzYaGNBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJva4L2T6juG0w3uaCrcA%2B7DDByLl03y3T64tDgN0n988l6IRt7Ofvk9xFNPpf0%2FoIkewW44XzyBY%2BbLiWxzT5RK4VPHiYRuIPbBYvtcUNqnE9FLOqogS9VnkT7zg6lmhpLqA96oZXi3JnhMoco%2Ffy9SLZ1wHumYOP9H2irm%2BnwKmFBpUFSJtFnz3sc%2F0beDmiBVzCHBZEhkT0nswHNfdQlkL%2FzUiNrbCmAGGqwx9VxP%2FBbCB5z7qBQe9bPwkMebC7Lo9bdDxlYKfMECHLdmoJ0fbu7KlEKDfRKK3XvK8A4oTXHbENZVUvQI3XeHbRdT5KhDQOAl8qk4pa9BuyCIwbTpJpdxvb8jVGX0rdT5Qcn2lsXOtwn8WZ8yMMuQCqXZHJCTBsl0T0SNxQbescphLDqgkVNgZqnPWA8dubqo1tSamSH6B5bw%2BRAfcsFYOm2qG3jFL7BbullSoKxdkOPkfqTMUFRtE5twsiA5Ew7IOAAePR8e7lb2x0A%2BP52lzHSLqxZj%2BUJRjfYC%2BG8u1PSyV17ejYfc%2BWTv8MQj9OO%2Blw5i%2FInltENXu9KJ3bfn%2BCWaPw%2F7MtwDAgtu5hX3O4P%2BOWS2QDqc%2B3EUr%2FZVE5cU3UHbzP4KfFYDS5%2B%2FjPtskHzSB2vza7wchzEN%2FwuNMIfZ78QGOqUBU4iKPXgeL9rvQUcGrLlt7aReUniCBQVwlkqELJMrovWgKl7RhZNd977oRnr5Yv5Evh9Vr3z0pX%2BCvLqU6sVBOuSJRqDEJYo1al0SFiIlbgVSOr08huPFIkvq1YgvNo3JTe%2BgmFG8Po8DxU1bGUiyuYR%2BPh4GdN6CoZt0HAyJ17Ku1yv301M%2FeycTmmiWq%2B6Mw1bUEAfHsYK8KG0elwr4E0R1r%2BV3&X-Amz-Signature=4e95abd80b8d9a1a8aca918c2ac162d72a34179aa149eccf7624eccc7571e713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
