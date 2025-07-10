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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFACZHG5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyD9kLIBUmoSo1GhcQga6Vh5XfhPr8fIFvN2JTdGO5QIgIzOmAaHhYfnwQN3IUsBgxr1TQmU8t73aWgNOVukJoXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcv%2BMP%2BrfV8m4AiFyrcA%2FpRlu7x0EKLoOpAqIwRjxmvWO7izey7rbSsagAe2ZGChveBBmhOy722OhEpKM2KQjcx4PcruhDAikkB3AeE7WJzgPxLkbAD2ahk0qsF9AzcktbXCKeIRbIG1adst3aND12LQ2t8TIyupOs2noUbMkTeXL%2Bn5K%2FQ2v3z3ShxZQoPH85%2B6CihsVP%2FHz5CkcOPDzeI6fBIPF7DvcsrcuJuwX698DY3Vdb5vqaw8Ht9dR8kkfDX5cVIBAdUHqRAU9G5iQlPwEDMilblsM3%2BPmOFbsVGEsx1m%2Fuw1DDtio77JJRN%2FsdK4LFBl5t4sG1WbhL2ntUMm5f1IBiBTY%2BpNLMZytzOrFv7X4VDfEUlLIqCv6CTH5SU7LOB31lx4G2gXBvtf3A4rfkzD%2FyNj%2FNeTphcxkuj12WjfldqwPKEzE5DB1ydi1OeH1%2BEeYjgdp4e1dsU%2F3ojfMriuWUsGim24%2BmY6eHyaNq9VYVwAxrQ6Ie0AvWz4siaRj%2FJpWf9h3EXkHg7LBOhyNg7NnpkxNzfWyJHM6ZbP2uLGcwgTYH65aYYnCywYG760aE%2ByuMOwNOauJw45dfYbSc9loX5ZOFnFWpLhXHjKphPxyabKrAkdecInv9G2heVL7VMVpjNorS6MLurvsMGOqUBu%2BPJRu5WnB7og7UTkHnMUn%2FZoWa3fVFGqPbKr0DVg8224XZe%2FAjxmCRdzvFnfeI0EAahWsGlt1692ncoUl67lRTrYH3hakN0QjGBr9Fw62ljPRFnlH%2FgdZviDSOGMcrZIqCRyjRLUv65uWxRqhUw5sRLZQmle%2Ff8veW6Cl1l6ZLAqgqPjqirxLEB2EycIHG8fWE7izoP3NnpXTChf6NTUNCUfKJe&X-Amz-Signature=a78c1464f7567c11b00d9b80fb392d8368af7b78776ff1b4513edee8b9e12f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFACZHG5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyD9kLIBUmoSo1GhcQga6Vh5XfhPr8fIFvN2JTdGO5QIgIzOmAaHhYfnwQN3IUsBgxr1TQmU8t73aWgNOVukJoXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcv%2BMP%2BrfV8m4AiFyrcA%2FpRlu7x0EKLoOpAqIwRjxmvWO7izey7rbSsagAe2ZGChveBBmhOy722OhEpKM2KQjcx4PcruhDAikkB3AeE7WJzgPxLkbAD2ahk0qsF9AzcktbXCKeIRbIG1adst3aND12LQ2t8TIyupOs2noUbMkTeXL%2Bn5K%2FQ2v3z3ShxZQoPH85%2B6CihsVP%2FHz5CkcOPDzeI6fBIPF7DvcsrcuJuwX698DY3Vdb5vqaw8Ht9dR8kkfDX5cVIBAdUHqRAU9G5iQlPwEDMilblsM3%2BPmOFbsVGEsx1m%2Fuw1DDtio77JJRN%2FsdK4LFBl5t4sG1WbhL2ntUMm5f1IBiBTY%2BpNLMZytzOrFv7X4VDfEUlLIqCv6CTH5SU7LOB31lx4G2gXBvtf3A4rfkzD%2FyNj%2FNeTphcxkuj12WjfldqwPKEzE5DB1ydi1OeH1%2BEeYjgdp4e1dsU%2F3ojfMriuWUsGim24%2BmY6eHyaNq9VYVwAxrQ6Ie0AvWz4siaRj%2FJpWf9h3EXkHg7LBOhyNg7NnpkxNzfWyJHM6ZbP2uLGcwgTYH65aYYnCywYG760aE%2ByuMOwNOauJw45dfYbSc9loX5ZOFnFWpLhXHjKphPxyabKrAkdecInv9G2heVL7VMVpjNorS6MLurvsMGOqUBu%2BPJRu5WnB7og7UTkHnMUn%2FZoWa3fVFGqPbKr0DVg8224XZe%2FAjxmCRdzvFnfeI0EAahWsGlt1692ncoUl67lRTrYH3hakN0QjGBr9Fw62ljPRFnlH%2FgdZviDSOGMcrZIqCRyjRLUv65uWxRqhUw5sRLZQmle%2Ff8veW6Cl1l6ZLAqgqPjqirxLEB2EycIHG8fWE7izoP3NnpXTChf6NTUNCUfKJe&X-Amz-Signature=0b45a700168550392c05e956a450bb05646f238548446046fbe0e60bd63eb13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFACZHG5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyD9kLIBUmoSo1GhcQga6Vh5XfhPr8fIFvN2JTdGO5QIgIzOmAaHhYfnwQN3IUsBgxr1TQmU8t73aWgNOVukJoXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcv%2BMP%2BrfV8m4AiFyrcA%2FpRlu7x0EKLoOpAqIwRjxmvWO7izey7rbSsagAe2ZGChveBBmhOy722OhEpKM2KQjcx4PcruhDAikkB3AeE7WJzgPxLkbAD2ahk0qsF9AzcktbXCKeIRbIG1adst3aND12LQ2t8TIyupOs2noUbMkTeXL%2Bn5K%2FQ2v3z3ShxZQoPH85%2B6CihsVP%2FHz5CkcOPDzeI6fBIPF7DvcsrcuJuwX698DY3Vdb5vqaw8Ht9dR8kkfDX5cVIBAdUHqRAU9G5iQlPwEDMilblsM3%2BPmOFbsVGEsx1m%2Fuw1DDtio77JJRN%2FsdK4LFBl5t4sG1WbhL2ntUMm5f1IBiBTY%2BpNLMZytzOrFv7X4VDfEUlLIqCv6CTH5SU7LOB31lx4G2gXBvtf3A4rfkzD%2FyNj%2FNeTphcxkuj12WjfldqwPKEzE5DB1ydi1OeH1%2BEeYjgdp4e1dsU%2F3ojfMriuWUsGim24%2BmY6eHyaNq9VYVwAxrQ6Ie0AvWz4siaRj%2FJpWf9h3EXkHg7LBOhyNg7NnpkxNzfWyJHM6ZbP2uLGcwgTYH65aYYnCywYG760aE%2ByuMOwNOauJw45dfYbSc9loX5ZOFnFWpLhXHjKphPxyabKrAkdecInv9G2heVL7VMVpjNorS6MLurvsMGOqUBu%2BPJRu5WnB7og7UTkHnMUn%2FZoWa3fVFGqPbKr0DVg8224XZe%2FAjxmCRdzvFnfeI0EAahWsGlt1692ncoUl67lRTrYH3hakN0QjGBr9Fw62ljPRFnlH%2FgdZviDSOGMcrZIqCRyjRLUv65uWxRqhUw5sRLZQmle%2Ff8veW6Cl1l6ZLAqgqPjqirxLEB2EycIHG8fWE7izoP3NnpXTChf6NTUNCUfKJe&X-Amz-Signature=c864dae51cbe1c7f2bf8ee9c863cd396202b60886041ae2a21be8a3b50b9344c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFACZHG5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyD9kLIBUmoSo1GhcQga6Vh5XfhPr8fIFvN2JTdGO5QIgIzOmAaHhYfnwQN3IUsBgxr1TQmU8t73aWgNOVukJoXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcv%2BMP%2BrfV8m4AiFyrcA%2FpRlu7x0EKLoOpAqIwRjxmvWO7izey7rbSsagAe2ZGChveBBmhOy722OhEpKM2KQjcx4PcruhDAikkB3AeE7WJzgPxLkbAD2ahk0qsF9AzcktbXCKeIRbIG1adst3aND12LQ2t8TIyupOs2noUbMkTeXL%2Bn5K%2FQ2v3z3ShxZQoPH85%2B6CihsVP%2FHz5CkcOPDzeI6fBIPF7DvcsrcuJuwX698DY3Vdb5vqaw8Ht9dR8kkfDX5cVIBAdUHqRAU9G5iQlPwEDMilblsM3%2BPmOFbsVGEsx1m%2Fuw1DDtio77JJRN%2FsdK4LFBl5t4sG1WbhL2ntUMm5f1IBiBTY%2BpNLMZytzOrFv7X4VDfEUlLIqCv6CTH5SU7LOB31lx4G2gXBvtf3A4rfkzD%2FyNj%2FNeTphcxkuj12WjfldqwPKEzE5DB1ydi1OeH1%2BEeYjgdp4e1dsU%2F3ojfMriuWUsGim24%2BmY6eHyaNq9VYVwAxrQ6Ie0AvWz4siaRj%2FJpWf9h3EXkHg7LBOhyNg7NnpkxNzfWyJHM6ZbP2uLGcwgTYH65aYYnCywYG760aE%2ByuMOwNOauJw45dfYbSc9loX5ZOFnFWpLhXHjKphPxyabKrAkdecInv9G2heVL7VMVpjNorS6MLurvsMGOqUBu%2BPJRu5WnB7og7UTkHnMUn%2FZoWa3fVFGqPbKr0DVg8224XZe%2FAjxmCRdzvFnfeI0EAahWsGlt1692ncoUl67lRTrYH3hakN0QjGBr9Fw62ljPRFnlH%2FgdZviDSOGMcrZIqCRyjRLUv65uWxRqhUw5sRLZQmle%2Ff8veW6Cl1l6ZLAqgqPjqirxLEB2EycIHG8fWE7izoP3NnpXTChf6NTUNCUfKJe&X-Amz-Signature=21349314768c60087deca21e181e518b455325374f92bf27356b31d5ef97d03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFACZHG5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyD9kLIBUmoSo1GhcQga6Vh5XfhPr8fIFvN2JTdGO5QIgIzOmAaHhYfnwQN3IUsBgxr1TQmU8t73aWgNOVukJoXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcv%2BMP%2BrfV8m4AiFyrcA%2FpRlu7x0EKLoOpAqIwRjxmvWO7izey7rbSsagAe2ZGChveBBmhOy722OhEpKM2KQjcx4PcruhDAikkB3AeE7WJzgPxLkbAD2ahk0qsF9AzcktbXCKeIRbIG1adst3aND12LQ2t8TIyupOs2noUbMkTeXL%2Bn5K%2FQ2v3z3ShxZQoPH85%2B6CihsVP%2FHz5CkcOPDzeI6fBIPF7DvcsrcuJuwX698DY3Vdb5vqaw8Ht9dR8kkfDX5cVIBAdUHqRAU9G5iQlPwEDMilblsM3%2BPmOFbsVGEsx1m%2Fuw1DDtio77JJRN%2FsdK4LFBl5t4sG1WbhL2ntUMm5f1IBiBTY%2BpNLMZytzOrFv7X4VDfEUlLIqCv6CTH5SU7LOB31lx4G2gXBvtf3A4rfkzD%2FyNj%2FNeTphcxkuj12WjfldqwPKEzE5DB1ydi1OeH1%2BEeYjgdp4e1dsU%2F3ojfMriuWUsGim24%2BmY6eHyaNq9VYVwAxrQ6Ie0AvWz4siaRj%2FJpWf9h3EXkHg7LBOhyNg7NnpkxNzfWyJHM6ZbP2uLGcwgTYH65aYYnCywYG760aE%2ByuMOwNOauJw45dfYbSc9loX5ZOFnFWpLhXHjKphPxyabKrAkdecInv9G2heVL7VMVpjNorS6MLurvsMGOqUBu%2BPJRu5WnB7og7UTkHnMUn%2FZoWa3fVFGqPbKr0DVg8224XZe%2FAjxmCRdzvFnfeI0EAahWsGlt1692ncoUl67lRTrYH3hakN0QjGBr9Fw62ljPRFnlH%2FgdZviDSOGMcrZIqCRyjRLUv65uWxRqhUw5sRLZQmle%2Ff8veW6Cl1l6ZLAqgqPjqirxLEB2EycIHG8fWE7izoP3NnpXTChf6NTUNCUfKJe&X-Amz-Signature=bc287d06bbc9e76d6a586b16718f011e9d55cd952819686b875c35787374a3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFACZHG5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyD9kLIBUmoSo1GhcQga6Vh5XfhPr8fIFvN2JTdGO5QIgIzOmAaHhYfnwQN3IUsBgxr1TQmU8t73aWgNOVukJoXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcv%2BMP%2BrfV8m4AiFyrcA%2FpRlu7x0EKLoOpAqIwRjxmvWO7izey7rbSsagAe2ZGChveBBmhOy722OhEpKM2KQjcx4PcruhDAikkB3AeE7WJzgPxLkbAD2ahk0qsF9AzcktbXCKeIRbIG1adst3aND12LQ2t8TIyupOs2noUbMkTeXL%2Bn5K%2FQ2v3z3ShxZQoPH85%2B6CihsVP%2FHz5CkcOPDzeI6fBIPF7DvcsrcuJuwX698DY3Vdb5vqaw8Ht9dR8kkfDX5cVIBAdUHqRAU9G5iQlPwEDMilblsM3%2BPmOFbsVGEsx1m%2Fuw1DDtio77JJRN%2FsdK4LFBl5t4sG1WbhL2ntUMm5f1IBiBTY%2BpNLMZytzOrFv7X4VDfEUlLIqCv6CTH5SU7LOB31lx4G2gXBvtf3A4rfkzD%2FyNj%2FNeTphcxkuj12WjfldqwPKEzE5DB1ydi1OeH1%2BEeYjgdp4e1dsU%2F3ojfMriuWUsGim24%2BmY6eHyaNq9VYVwAxrQ6Ie0AvWz4siaRj%2FJpWf9h3EXkHg7LBOhyNg7NnpkxNzfWyJHM6ZbP2uLGcwgTYH65aYYnCywYG760aE%2ByuMOwNOauJw45dfYbSc9loX5ZOFnFWpLhXHjKphPxyabKrAkdecInv9G2heVL7VMVpjNorS6MLurvsMGOqUBu%2BPJRu5WnB7og7UTkHnMUn%2FZoWa3fVFGqPbKr0DVg8224XZe%2FAjxmCRdzvFnfeI0EAahWsGlt1692ncoUl67lRTrYH3hakN0QjGBr9Fw62ljPRFnlH%2FgdZviDSOGMcrZIqCRyjRLUv65uWxRqhUw5sRLZQmle%2Ff8veW6Cl1l6ZLAqgqPjqirxLEB2EycIHG8fWE7izoP3NnpXTChf6NTUNCUfKJe&X-Amz-Signature=3eaa059a8d78d91d6410950e96e09041e4f284a6f46e8e393b94cb68b99a23ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFACZHG5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyD9kLIBUmoSo1GhcQga6Vh5XfhPr8fIFvN2JTdGO5QIgIzOmAaHhYfnwQN3IUsBgxr1TQmU8t73aWgNOVukJoXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcv%2BMP%2BrfV8m4AiFyrcA%2FpRlu7x0EKLoOpAqIwRjxmvWO7izey7rbSsagAe2ZGChveBBmhOy722OhEpKM2KQjcx4PcruhDAikkB3AeE7WJzgPxLkbAD2ahk0qsF9AzcktbXCKeIRbIG1adst3aND12LQ2t8TIyupOs2noUbMkTeXL%2Bn5K%2FQ2v3z3ShxZQoPH85%2B6CihsVP%2FHz5CkcOPDzeI6fBIPF7DvcsrcuJuwX698DY3Vdb5vqaw8Ht9dR8kkfDX5cVIBAdUHqRAU9G5iQlPwEDMilblsM3%2BPmOFbsVGEsx1m%2Fuw1DDtio77JJRN%2FsdK4LFBl5t4sG1WbhL2ntUMm5f1IBiBTY%2BpNLMZytzOrFv7X4VDfEUlLIqCv6CTH5SU7LOB31lx4G2gXBvtf3A4rfkzD%2FyNj%2FNeTphcxkuj12WjfldqwPKEzE5DB1ydi1OeH1%2BEeYjgdp4e1dsU%2F3ojfMriuWUsGim24%2BmY6eHyaNq9VYVwAxrQ6Ie0AvWz4siaRj%2FJpWf9h3EXkHg7LBOhyNg7NnpkxNzfWyJHM6ZbP2uLGcwgTYH65aYYnCywYG760aE%2ByuMOwNOauJw45dfYbSc9loX5ZOFnFWpLhXHjKphPxyabKrAkdecInv9G2heVL7VMVpjNorS6MLurvsMGOqUBu%2BPJRu5WnB7og7UTkHnMUn%2FZoWa3fVFGqPbKr0DVg8224XZe%2FAjxmCRdzvFnfeI0EAahWsGlt1692ncoUl67lRTrYH3hakN0QjGBr9Fw62ljPRFnlH%2FgdZviDSOGMcrZIqCRyjRLUv65uWxRqhUw5sRLZQmle%2Ff8veW6Cl1l6ZLAqgqPjqirxLEB2EycIHG8fWE7izoP3NnpXTChf6NTUNCUfKJe&X-Amz-Signature=2a5dc4f3252f055acaf18628ea089f3ab2bad8a6cf61220b2fd26e1e9ac0debe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
