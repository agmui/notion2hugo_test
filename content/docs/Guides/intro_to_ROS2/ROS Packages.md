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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6REFMI3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgvZx4cSfLUe%2Fcl%2B1SxGgoXl1RwmvF5erjL7QvBbqExAiEAilOi35r3nhDlNRqPgWZ%2BCmZMc0I%2FystgDhM2BcKN314qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPKIrGDVZEFIwyKgyrcA34zayJlhPJFxCQzii9BKESIZ9L5RUQsZrMZItFMA3hCp2W6f6pZJH6taDdw7FnLDoFcnrgogiXdPICe6zrbxqK9AdM7ajMueoUEYZpL%2Fa1%2F%2B7CtGZsAnwlM3Yz%2F8E3gcbkPJw1nCSc0QcLrpd3g3PKPRiwYS%2BOkvKdOYh6etyRPzoDpZgV6bKiDLSXFT2EGBRU6AR7ALO%2Fbu8Zm7hglEkAn2%2BP4431lMQ4tm0WyOIeX5Mjf7nSwFDvX%2FjmZXwHlRshv0KuIrEwsdfM2skXBXHhYdCBJU8PGPgbPFF4nXG%2BCvDmDA9VutNu8cU2a2vh0H75HG7mnO0j1GYZV%2F5CzwOOWxVSPiZM1YYF6V2dopSELRA3ACE8Gmi4BzioNx1NvrmCm7QJ1Hzv1Z5u2kgOj8G26S%2Ft2ie%2FkKlCqe4CH2g2QhoqyAgF%2BJEjbgCKBXyMpbpE%2ByB0TmvKQm2M9Ipw6sVuX%2FoLHBiwlmm1QfINBLrQDHJNpehCHgDlmVnssTpUlpGuXDiOCxFYUjMqUrCZje86TcTTBa8P8P%2BwhpLr0OwuijP4rfAXdJVVqDR9XgueQo2jU0G95%2BCTf8a47dWFKrKSxPQHyA9TKtHYgsdXnRZG%2FC307T2i5XF6oF%2F7AMMqancIGOqUBo6mMZXAuxZoTS4j2EilyzUaoPvhoyXLhqjpnZ2b80pJcAMot5cKaXeOFBrJh77GXV5SPFxN8vTbSqVNYmdBA9sE5vK4R0KUKc9Ix%2BfL%2BTL6K3kK9TyQg%2F%2FzU1nvL7SLl5BzuV4cdBZgXtN1bA1%2F8UCb2exnY%2Fex0EtzFrRo82kMPvuuDltA1%2BsAGrHhSNXYq3zmpWovxyJ%2Bp7tzb1%2BgpYdHNFjjT&X-Amz-Signature=06d260be6f946b53b340cfc02b1039d85626b6bc6757677827dd795d881d523c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6REFMI3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgvZx4cSfLUe%2Fcl%2B1SxGgoXl1RwmvF5erjL7QvBbqExAiEAilOi35r3nhDlNRqPgWZ%2BCmZMc0I%2FystgDhM2BcKN314qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPKIrGDVZEFIwyKgyrcA34zayJlhPJFxCQzii9BKESIZ9L5RUQsZrMZItFMA3hCp2W6f6pZJH6taDdw7FnLDoFcnrgogiXdPICe6zrbxqK9AdM7ajMueoUEYZpL%2Fa1%2F%2B7CtGZsAnwlM3Yz%2F8E3gcbkPJw1nCSc0QcLrpd3g3PKPRiwYS%2BOkvKdOYh6etyRPzoDpZgV6bKiDLSXFT2EGBRU6AR7ALO%2Fbu8Zm7hglEkAn2%2BP4431lMQ4tm0WyOIeX5Mjf7nSwFDvX%2FjmZXwHlRshv0KuIrEwsdfM2skXBXHhYdCBJU8PGPgbPFF4nXG%2BCvDmDA9VutNu8cU2a2vh0H75HG7mnO0j1GYZV%2F5CzwOOWxVSPiZM1YYF6V2dopSELRA3ACE8Gmi4BzioNx1NvrmCm7QJ1Hzv1Z5u2kgOj8G26S%2Ft2ie%2FkKlCqe4CH2g2QhoqyAgF%2BJEjbgCKBXyMpbpE%2ByB0TmvKQm2M9Ipw6sVuX%2FoLHBiwlmm1QfINBLrQDHJNpehCHgDlmVnssTpUlpGuXDiOCxFYUjMqUrCZje86TcTTBa8P8P%2BwhpLr0OwuijP4rfAXdJVVqDR9XgueQo2jU0G95%2BCTf8a47dWFKrKSxPQHyA9TKtHYgsdXnRZG%2FC307T2i5XF6oF%2F7AMMqancIGOqUBo6mMZXAuxZoTS4j2EilyzUaoPvhoyXLhqjpnZ2b80pJcAMot5cKaXeOFBrJh77GXV5SPFxN8vTbSqVNYmdBA9sE5vK4R0KUKc9Ix%2BfL%2BTL6K3kK9TyQg%2F%2FzU1nvL7SLl5BzuV4cdBZgXtN1bA1%2F8UCb2exnY%2Fex0EtzFrRo82kMPvuuDltA1%2BsAGrHhSNXYq3zmpWovxyJ%2Bp7tzb1%2BgpYdHNFjjT&X-Amz-Signature=aa77d279e6f8c0aa84cb22369770f8c8c96ec829a91746a2721f9d14cdb3dedd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6REFMI3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgvZx4cSfLUe%2Fcl%2B1SxGgoXl1RwmvF5erjL7QvBbqExAiEAilOi35r3nhDlNRqPgWZ%2BCmZMc0I%2FystgDhM2BcKN314qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPKIrGDVZEFIwyKgyrcA34zayJlhPJFxCQzii9BKESIZ9L5RUQsZrMZItFMA3hCp2W6f6pZJH6taDdw7FnLDoFcnrgogiXdPICe6zrbxqK9AdM7ajMueoUEYZpL%2Fa1%2F%2B7CtGZsAnwlM3Yz%2F8E3gcbkPJw1nCSc0QcLrpd3g3PKPRiwYS%2BOkvKdOYh6etyRPzoDpZgV6bKiDLSXFT2EGBRU6AR7ALO%2Fbu8Zm7hglEkAn2%2BP4431lMQ4tm0WyOIeX5Mjf7nSwFDvX%2FjmZXwHlRshv0KuIrEwsdfM2skXBXHhYdCBJU8PGPgbPFF4nXG%2BCvDmDA9VutNu8cU2a2vh0H75HG7mnO0j1GYZV%2F5CzwOOWxVSPiZM1YYF6V2dopSELRA3ACE8Gmi4BzioNx1NvrmCm7QJ1Hzv1Z5u2kgOj8G26S%2Ft2ie%2FkKlCqe4CH2g2QhoqyAgF%2BJEjbgCKBXyMpbpE%2ByB0TmvKQm2M9Ipw6sVuX%2FoLHBiwlmm1QfINBLrQDHJNpehCHgDlmVnssTpUlpGuXDiOCxFYUjMqUrCZje86TcTTBa8P8P%2BwhpLr0OwuijP4rfAXdJVVqDR9XgueQo2jU0G95%2BCTf8a47dWFKrKSxPQHyA9TKtHYgsdXnRZG%2FC307T2i5XF6oF%2F7AMMqancIGOqUBo6mMZXAuxZoTS4j2EilyzUaoPvhoyXLhqjpnZ2b80pJcAMot5cKaXeOFBrJh77GXV5SPFxN8vTbSqVNYmdBA9sE5vK4R0KUKc9Ix%2BfL%2BTL6K3kK9TyQg%2F%2FzU1nvL7SLl5BzuV4cdBZgXtN1bA1%2F8UCb2exnY%2Fex0EtzFrRo82kMPvuuDltA1%2BsAGrHhSNXYq3zmpWovxyJ%2Bp7tzb1%2BgpYdHNFjjT&X-Amz-Signature=07bfb61997d74a6e2a304c8a5139a79b94501e1da9b5b800cd17d6f1637d3aee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6REFMI3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgvZx4cSfLUe%2Fcl%2B1SxGgoXl1RwmvF5erjL7QvBbqExAiEAilOi35r3nhDlNRqPgWZ%2BCmZMc0I%2FystgDhM2BcKN314qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPKIrGDVZEFIwyKgyrcA34zayJlhPJFxCQzii9BKESIZ9L5RUQsZrMZItFMA3hCp2W6f6pZJH6taDdw7FnLDoFcnrgogiXdPICe6zrbxqK9AdM7ajMueoUEYZpL%2Fa1%2F%2B7CtGZsAnwlM3Yz%2F8E3gcbkPJw1nCSc0QcLrpd3g3PKPRiwYS%2BOkvKdOYh6etyRPzoDpZgV6bKiDLSXFT2EGBRU6AR7ALO%2Fbu8Zm7hglEkAn2%2BP4431lMQ4tm0WyOIeX5Mjf7nSwFDvX%2FjmZXwHlRshv0KuIrEwsdfM2skXBXHhYdCBJU8PGPgbPFF4nXG%2BCvDmDA9VutNu8cU2a2vh0H75HG7mnO0j1GYZV%2F5CzwOOWxVSPiZM1YYF6V2dopSELRA3ACE8Gmi4BzioNx1NvrmCm7QJ1Hzv1Z5u2kgOj8G26S%2Ft2ie%2FkKlCqe4CH2g2QhoqyAgF%2BJEjbgCKBXyMpbpE%2ByB0TmvKQm2M9Ipw6sVuX%2FoLHBiwlmm1QfINBLrQDHJNpehCHgDlmVnssTpUlpGuXDiOCxFYUjMqUrCZje86TcTTBa8P8P%2BwhpLr0OwuijP4rfAXdJVVqDR9XgueQo2jU0G95%2BCTf8a47dWFKrKSxPQHyA9TKtHYgsdXnRZG%2FC307T2i5XF6oF%2F7AMMqancIGOqUBo6mMZXAuxZoTS4j2EilyzUaoPvhoyXLhqjpnZ2b80pJcAMot5cKaXeOFBrJh77GXV5SPFxN8vTbSqVNYmdBA9sE5vK4R0KUKc9Ix%2BfL%2BTL6K3kK9TyQg%2F%2FzU1nvL7SLl5BzuV4cdBZgXtN1bA1%2F8UCb2exnY%2Fex0EtzFrRo82kMPvuuDltA1%2BsAGrHhSNXYq3zmpWovxyJ%2Bp7tzb1%2BgpYdHNFjjT&X-Amz-Signature=7216afa103345de3d01e49858a28899370426cb5a94cb1f08cbf71b306a0611a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6REFMI3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgvZx4cSfLUe%2Fcl%2B1SxGgoXl1RwmvF5erjL7QvBbqExAiEAilOi35r3nhDlNRqPgWZ%2BCmZMc0I%2FystgDhM2BcKN314qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPKIrGDVZEFIwyKgyrcA34zayJlhPJFxCQzii9BKESIZ9L5RUQsZrMZItFMA3hCp2W6f6pZJH6taDdw7FnLDoFcnrgogiXdPICe6zrbxqK9AdM7ajMueoUEYZpL%2Fa1%2F%2B7CtGZsAnwlM3Yz%2F8E3gcbkPJw1nCSc0QcLrpd3g3PKPRiwYS%2BOkvKdOYh6etyRPzoDpZgV6bKiDLSXFT2EGBRU6AR7ALO%2Fbu8Zm7hglEkAn2%2BP4431lMQ4tm0WyOIeX5Mjf7nSwFDvX%2FjmZXwHlRshv0KuIrEwsdfM2skXBXHhYdCBJU8PGPgbPFF4nXG%2BCvDmDA9VutNu8cU2a2vh0H75HG7mnO0j1GYZV%2F5CzwOOWxVSPiZM1YYF6V2dopSELRA3ACE8Gmi4BzioNx1NvrmCm7QJ1Hzv1Z5u2kgOj8G26S%2Ft2ie%2FkKlCqe4CH2g2QhoqyAgF%2BJEjbgCKBXyMpbpE%2ByB0TmvKQm2M9Ipw6sVuX%2FoLHBiwlmm1QfINBLrQDHJNpehCHgDlmVnssTpUlpGuXDiOCxFYUjMqUrCZje86TcTTBa8P8P%2BwhpLr0OwuijP4rfAXdJVVqDR9XgueQo2jU0G95%2BCTf8a47dWFKrKSxPQHyA9TKtHYgsdXnRZG%2FC307T2i5XF6oF%2F7AMMqancIGOqUBo6mMZXAuxZoTS4j2EilyzUaoPvhoyXLhqjpnZ2b80pJcAMot5cKaXeOFBrJh77GXV5SPFxN8vTbSqVNYmdBA9sE5vK4R0KUKc9Ix%2BfL%2BTL6K3kK9TyQg%2F%2FzU1nvL7SLl5BzuV4cdBZgXtN1bA1%2F8UCb2exnY%2Fex0EtzFrRo82kMPvuuDltA1%2BsAGrHhSNXYq3zmpWovxyJ%2Bp7tzb1%2BgpYdHNFjjT&X-Amz-Signature=28fe8cdfaadf48bcc7e536e97f86360e32897420693fdb4925c1064f9dd23771&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6REFMI3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgvZx4cSfLUe%2Fcl%2B1SxGgoXl1RwmvF5erjL7QvBbqExAiEAilOi35r3nhDlNRqPgWZ%2BCmZMc0I%2FystgDhM2BcKN314qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPKIrGDVZEFIwyKgyrcA34zayJlhPJFxCQzii9BKESIZ9L5RUQsZrMZItFMA3hCp2W6f6pZJH6taDdw7FnLDoFcnrgogiXdPICe6zrbxqK9AdM7ajMueoUEYZpL%2Fa1%2F%2B7CtGZsAnwlM3Yz%2F8E3gcbkPJw1nCSc0QcLrpd3g3PKPRiwYS%2BOkvKdOYh6etyRPzoDpZgV6bKiDLSXFT2EGBRU6AR7ALO%2Fbu8Zm7hglEkAn2%2BP4431lMQ4tm0WyOIeX5Mjf7nSwFDvX%2FjmZXwHlRshv0KuIrEwsdfM2skXBXHhYdCBJU8PGPgbPFF4nXG%2BCvDmDA9VutNu8cU2a2vh0H75HG7mnO0j1GYZV%2F5CzwOOWxVSPiZM1YYF6V2dopSELRA3ACE8Gmi4BzioNx1NvrmCm7QJ1Hzv1Z5u2kgOj8G26S%2Ft2ie%2FkKlCqe4CH2g2QhoqyAgF%2BJEjbgCKBXyMpbpE%2ByB0TmvKQm2M9Ipw6sVuX%2FoLHBiwlmm1QfINBLrQDHJNpehCHgDlmVnssTpUlpGuXDiOCxFYUjMqUrCZje86TcTTBa8P8P%2BwhpLr0OwuijP4rfAXdJVVqDR9XgueQo2jU0G95%2BCTf8a47dWFKrKSxPQHyA9TKtHYgsdXnRZG%2FC307T2i5XF6oF%2F7AMMqancIGOqUBo6mMZXAuxZoTS4j2EilyzUaoPvhoyXLhqjpnZ2b80pJcAMot5cKaXeOFBrJh77GXV5SPFxN8vTbSqVNYmdBA9sE5vK4R0KUKc9Ix%2BfL%2BTL6K3kK9TyQg%2F%2FzU1nvL7SLl5BzuV4cdBZgXtN1bA1%2F8UCb2exnY%2Fex0EtzFrRo82kMPvuuDltA1%2BsAGrHhSNXYq3zmpWovxyJ%2Bp7tzb1%2BgpYdHNFjjT&X-Amz-Signature=05b29c0c1aed03d0e869c9d8eac91c92c22b0f35f725a3d7f0fa22a8428c444a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6REFMI3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgvZx4cSfLUe%2Fcl%2B1SxGgoXl1RwmvF5erjL7QvBbqExAiEAilOi35r3nhDlNRqPgWZ%2BCmZMc0I%2FystgDhM2BcKN314qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPKIrGDVZEFIwyKgyrcA34zayJlhPJFxCQzii9BKESIZ9L5RUQsZrMZItFMA3hCp2W6f6pZJH6taDdw7FnLDoFcnrgogiXdPICe6zrbxqK9AdM7ajMueoUEYZpL%2Fa1%2F%2B7CtGZsAnwlM3Yz%2F8E3gcbkPJw1nCSc0QcLrpd3g3PKPRiwYS%2BOkvKdOYh6etyRPzoDpZgV6bKiDLSXFT2EGBRU6AR7ALO%2Fbu8Zm7hglEkAn2%2BP4431lMQ4tm0WyOIeX5Mjf7nSwFDvX%2FjmZXwHlRshv0KuIrEwsdfM2skXBXHhYdCBJU8PGPgbPFF4nXG%2BCvDmDA9VutNu8cU2a2vh0H75HG7mnO0j1GYZV%2F5CzwOOWxVSPiZM1YYF6V2dopSELRA3ACE8Gmi4BzioNx1NvrmCm7QJ1Hzv1Z5u2kgOj8G26S%2Ft2ie%2FkKlCqe4CH2g2QhoqyAgF%2BJEjbgCKBXyMpbpE%2ByB0TmvKQm2M9Ipw6sVuX%2FoLHBiwlmm1QfINBLrQDHJNpehCHgDlmVnssTpUlpGuXDiOCxFYUjMqUrCZje86TcTTBa8P8P%2BwhpLr0OwuijP4rfAXdJVVqDR9XgueQo2jU0G95%2BCTf8a47dWFKrKSxPQHyA9TKtHYgsdXnRZG%2FC307T2i5XF6oF%2F7AMMqancIGOqUBo6mMZXAuxZoTS4j2EilyzUaoPvhoyXLhqjpnZ2b80pJcAMot5cKaXeOFBrJh77GXV5SPFxN8vTbSqVNYmdBA9sE5vK4R0KUKc9Ix%2BfL%2BTL6K3kK9TyQg%2F%2FzU1nvL7SLl5BzuV4cdBZgXtN1bA1%2F8UCb2exnY%2Fex0EtzFrRo82kMPvuuDltA1%2BsAGrHhSNXYq3zmpWovxyJ%2Bp7tzb1%2BgpYdHNFjjT&X-Amz-Signature=e70cf370a0ec8201fe6db25cc9e113d3091962e8295a11fe6a1d47940c291f21&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
