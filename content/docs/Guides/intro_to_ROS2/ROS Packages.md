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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBUOO2H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICwdlYv%2BKr04DfH9FsijsX%2FeYBczo5BEG3kHtOkFvPmSAiEA%2F5zS7f%2F%2BuGM2PTJH7z01jbl3h1ibMi9fMKNZMZbLacAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2O7bN0h%2FfKnliXYCrcA7S5bCXPF%2BHXbfdv7n9vRhJFmGtqmQwqVMPXpjhYbyBEBj6TU9yU0GyDBNzt6nIsP4qrQrWdqA2arcXusHa300Dr2nCCmZ3ZkKHm9TFDVKxHC8%2BcBCriKbhEvpwTS6rZu00lX7roLoRVjXZf7MrDOEEK0%2FNQ8lc%2Fi2PO0m9WW4wj7IFVqaJ5WMFJJSFD06KA9I480djzzW5NqIi04qLX9vp1Exhb1c7Fm2LDlvL9vIWsd3Lp53AnSnR3GWtj7ITmIchlYDeawkvZygY4Og0N90M%2BGJ%2FbGtlOfdGr0bXh7zZ7iNZ6jt9XG5ecH3i0ZcfgyljY4oQkU9SFQVqUO7lOOdYqBruXFX6nDpxn6QhBKE9otPjN%2F4KQn3wSzZcBk2rzwciCcrWqFy28fOh5PG9YuUE7mqo1aa58OcoWFc6C7uy%2BRkI2E7hbVs36mOQSmC9xNoD3qNijc%2BWVGYbwF9DbkqHDo0HDui%2Fo6QKnpYJG%2BsB6CLrqKynCiD6pOSpyZPhIScZgIAKmKEWVIhtOW86c%2F8tKPXLibKZBWoq6oz38nilOFOyLOAlSWBGEeaemy3Kr8M76ZvSHkx03xiL1D8Sevcai1LL9l98Rak%2FM61oTF9r8jWd98Eh7HQLD3xAgMJmO08AGOqUBA41vuTgZ2FH56tAzWOAZVZFE98VdVswGoGfQL5Qjf7s1VBMxHmP8o6kZYNdMoA%2FrHeXicbIgAdy4D9Zl7lvUJuQTRgUHAUmpMJnuVFM6BKjljzPhPK8q1%2FwEDKJweFue%2Fnk42rx6T%2B9jUgAlHijlT%2BX%2F%2FY1Q9kcI7lyplPa%2FSKYp1hCwWJ%2BRdwXI%2BpAZpfgs%2FFVWSfyOTJbpN%2FAk3b2nQimfBgu0&X-Amz-Signature=197a718953a29be4d4b795401b969e12bfca8bbb54bd73096f54a9d00a78ed72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBUOO2H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICwdlYv%2BKr04DfH9FsijsX%2FeYBczo5BEG3kHtOkFvPmSAiEA%2F5zS7f%2F%2BuGM2PTJH7z01jbl3h1ibMi9fMKNZMZbLacAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2O7bN0h%2FfKnliXYCrcA7S5bCXPF%2BHXbfdv7n9vRhJFmGtqmQwqVMPXpjhYbyBEBj6TU9yU0GyDBNzt6nIsP4qrQrWdqA2arcXusHa300Dr2nCCmZ3ZkKHm9TFDVKxHC8%2BcBCriKbhEvpwTS6rZu00lX7roLoRVjXZf7MrDOEEK0%2FNQ8lc%2Fi2PO0m9WW4wj7IFVqaJ5WMFJJSFD06KA9I480djzzW5NqIi04qLX9vp1Exhb1c7Fm2LDlvL9vIWsd3Lp53AnSnR3GWtj7ITmIchlYDeawkvZygY4Og0N90M%2BGJ%2FbGtlOfdGr0bXh7zZ7iNZ6jt9XG5ecH3i0ZcfgyljY4oQkU9SFQVqUO7lOOdYqBruXFX6nDpxn6QhBKE9otPjN%2F4KQn3wSzZcBk2rzwciCcrWqFy28fOh5PG9YuUE7mqo1aa58OcoWFc6C7uy%2BRkI2E7hbVs36mOQSmC9xNoD3qNijc%2BWVGYbwF9DbkqHDo0HDui%2Fo6QKnpYJG%2BsB6CLrqKynCiD6pOSpyZPhIScZgIAKmKEWVIhtOW86c%2F8tKPXLibKZBWoq6oz38nilOFOyLOAlSWBGEeaemy3Kr8M76ZvSHkx03xiL1D8Sevcai1LL9l98Rak%2FM61oTF9r8jWd98Eh7HQLD3xAgMJmO08AGOqUBA41vuTgZ2FH56tAzWOAZVZFE98VdVswGoGfQL5Qjf7s1VBMxHmP8o6kZYNdMoA%2FrHeXicbIgAdy4D9Zl7lvUJuQTRgUHAUmpMJnuVFM6BKjljzPhPK8q1%2FwEDKJweFue%2Fnk42rx6T%2B9jUgAlHijlT%2BX%2F%2FY1Q9kcI7lyplPa%2FSKYp1hCwWJ%2BRdwXI%2BpAZpfgs%2FFVWSfyOTJbpN%2FAk3b2nQimfBgu0&X-Amz-Signature=7d9136e076df87396fd947adb81ec732a6e52c6e1c98eebd7276c941ec7099ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBUOO2H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICwdlYv%2BKr04DfH9FsijsX%2FeYBczo5BEG3kHtOkFvPmSAiEA%2F5zS7f%2F%2BuGM2PTJH7z01jbl3h1ibMi9fMKNZMZbLacAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2O7bN0h%2FfKnliXYCrcA7S5bCXPF%2BHXbfdv7n9vRhJFmGtqmQwqVMPXpjhYbyBEBj6TU9yU0GyDBNzt6nIsP4qrQrWdqA2arcXusHa300Dr2nCCmZ3ZkKHm9TFDVKxHC8%2BcBCriKbhEvpwTS6rZu00lX7roLoRVjXZf7MrDOEEK0%2FNQ8lc%2Fi2PO0m9WW4wj7IFVqaJ5WMFJJSFD06KA9I480djzzW5NqIi04qLX9vp1Exhb1c7Fm2LDlvL9vIWsd3Lp53AnSnR3GWtj7ITmIchlYDeawkvZygY4Og0N90M%2BGJ%2FbGtlOfdGr0bXh7zZ7iNZ6jt9XG5ecH3i0ZcfgyljY4oQkU9SFQVqUO7lOOdYqBruXFX6nDpxn6QhBKE9otPjN%2F4KQn3wSzZcBk2rzwciCcrWqFy28fOh5PG9YuUE7mqo1aa58OcoWFc6C7uy%2BRkI2E7hbVs36mOQSmC9xNoD3qNijc%2BWVGYbwF9DbkqHDo0HDui%2Fo6QKnpYJG%2BsB6CLrqKynCiD6pOSpyZPhIScZgIAKmKEWVIhtOW86c%2F8tKPXLibKZBWoq6oz38nilOFOyLOAlSWBGEeaemy3Kr8M76ZvSHkx03xiL1D8Sevcai1LL9l98Rak%2FM61oTF9r8jWd98Eh7HQLD3xAgMJmO08AGOqUBA41vuTgZ2FH56tAzWOAZVZFE98VdVswGoGfQL5Qjf7s1VBMxHmP8o6kZYNdMoA%2FrHeXicbIgAdy4D9Zl7lvUJuQTRgUHAUmpMJnuVFM6BKjljzPhPK8q1%2FwEDKJweFue%2Fnk42rx6T%2B9jUgAlHijlT%2BX%2F%2FY1Q9kcI7lyplPa%2FSKYp1hCwWJ%2BRdwXI%2BpAZpfgs%2FFVWSfyOTJbpN%2FAk3b2nQimfBgu0&X-Amz-Signature=cebb56f0f7b58a70b628aa1d818186223c200f7a2824620c8708969bb91a92c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBUOO2H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICwdlYv%2BKr04DfH9FsijsX%2FeYBczo5BEG3kHtOkFvPmSAiEA%2F5zS7f%2F%2BuGM2PTJH7z01jbl3h1ibMi9fMKNZMZbLacAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2O7bN0h%2FfKnliXYCrcA7S5bCXPF%2BHXbfdv7n9vRhJFmGtqmQwqVMPXpjhYbyBEBj6TU9yU0GyDBNzt6nIsP4qrQrWdqA2arcXusHa300Dr2nCCmZ3ZkKHm9TFDVKxHC8%2BcBCriKbhEvpwTS6rZu00lX7roLoRVjXZf7MrDOEEK0%2FNQ8lc%2Fi2PO0m9WW4wj7IFVqaJ5WMFJJSFD06KA9I480djzzW5NqIi04qLX9vp1Exhb1c7Fm2LDlvL9vIWsd3Lp53AnSnR3GWtj7ITmIchlYDeawkvZygY4Og0N90M%2BGJ%2FbGtlOfdGr0bXh7zZ7iNZ6jt9XG5ecH3i0ZcfgyljY4oQkU9SFQVqUO7lOOdYqBruXFX6nDpxn6QhBKE9otPjN%2F4KQn3wSzZcBk2rzwciCcrWqFy28fOh5PG9YuUE7mqo1aa58OcoWFc6C7uy%2BRkI2E7hbVs36mOQSmC9xNoD3qNijc%2BWVGYbwF9DbkqHDo0HDui%2Fo6QKnpYJG%2BsB6CLrqKynCiD6pOSpyZPhIScZgIAKmKEWVIhtOW86c%2F8tKPXLibKZBWoq6oz38nilOFOyLOAlSWBGEeaemy3Kr8M76ZvSHkx03xiL1D8Sevcai1LL9l98Rak%2FM61oTF9r8jWd98Eh7HQLD3xAgMJmO08AGOqUBA41vuTgZ2FH56tAzWOAZVZFE98VdVswGoGfQL5Qjf7s1VBMxHmP8o6kZYNdMoA%2FrHeXicbIgAdy4D9Zl7lvUJuQTRgUHAUmpMJnuVFM6BKjljzPhPK8q1%2FwEDKJweFue%2Fnk42rx6T%2B9jUgAlHijlT%2BX%2F%2FY1Q9kcI7lyplPa%2FSKYp1hCwWJ%2BRdwXI%2BpAZpfgs%2FFVWSfyOTJbpN%2FAk3b2nQimfBgu0&X-Amz-Signature=46c7ca59a4b91d9cdedb493d82b3f71d60a7dfc9f6d1229c22647c5f4ab56b63&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBUOO2H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICwdlYv%2BKr04DfH9FsijsX%2FeYBczo5BEG3kHtOkFvPmSAiEA%2F5zS7f%2F%2BuGM2PTJH7z01jbl3h1ibMi9fMKNZMZbLacAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2O7bN0h%2FfKnliXYCrcA7S5bCXPF%2BHXbfdv7n9vRhJFmGtqmQwqVMPXpjhYbyBEBj6TU9yU0GyDBNzt6nIsP4qrQrWdqA2arcXusHa300Dr2nCCmZ3ZkKHm9TFDVKxHC8%2BcBCriKbhEvpwTS6rZu00lX7roLoRVjXZf7MrDOEEK0%2FNQ8lc%2Fi2PO0m9WW4wj7IFVqaJ5WMFJJSFD06KA9I480djzzW5NqIi04qLX9vp1Exhb1c7Fm2LDlvL9vIWsd3Lp53AnSnR3GWtj7ITmIchlYDeawkvZygY4Og0N90M%2BGJ%2FbGtlOfdGr0bXh7zZ7iNZ6jt9XG5ecH3i0ZcfgyljY4oQkU9SFQVqUO7lOOdYqBruXFX6nDpxn6QhBKE9otPjN%2F4KQn3wSzZcBk2rzwciCcrWqFy28fOh5PG9YuUE7mqo1aa58OcoWFc6C7uy%2BRkI2E7hbVs36mOQSmC9xNoD3qNijc%2BWVGYbwF9DbkqHDo0HDui%2Fo6QKnpYJG%2BsB6CLrqKynCiD6pOSpyZPhIScZgIAKmKEWVIhtOW86c%2F8tKPXLibKZBWoq6oz38nilOFOyLOAlSWBGEeaemy3Kr8M76ZvSHkx03xiL1D8Sevcai1LL9l98Rak%2FM61oTF9r8jWd98Eh7HQLD3xAgMJmO08AGOqUBA41vuTgZ2FH56tAzWOAZVZFE98VdVswGoGfQL5Qjf7s1VBMxHmP8o6kZYNdMoA%2FrHeXicbIgAdy4D9Zl7lvUJuQTRgUHAUmpMJnuVFM6BKjljzPhPK8q1%2FwEDKJweFue%2Fnk42rx6T%2B9jUgAlHijlT%2BX%2F%2FY1Q9kcI7lyplPa%2FSKYp1hCwWJ%2BRdwXI%2BpAZpfgs%2FFVWSfyOTJbpN%2FAk3b2nQimfBgu0&X-Amz-Signature=b9d6721fcd47e2b6fb3d1c4e6133a6b799b4a953a173a342717fef9dad925bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBUOO2H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICwdlYv%2BKr04DfH9FsijsX%2FeYBczo5BEG3kHtOkFvPmSAiEA%2F5zS7f%2F%2BuGM2PTJH7z01jbl3h1ibMi9fMKNZMZbLacAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2O7bN0h%2FfKnliXYCrcA7S5bCXPF%2BHXbfdv7n9vRhJFmGtqmQwqVMPXpjhYbyBEBj6TU9yU0GyDBNzt6nIsP4qrQrWdqA2arcXusHa300Dr2nCCmZ3ZkKHm9TFDVKxHC8%2BcBCriKbhEvpwTS6rZu00lX7roLoRVjXZf7MrDOEEK0%2FNQ8lc%2Fi2PO0m9WW4wj7IFVqaJ5WMFJJSFD06KA9I480djzzW5NqIi04qLX9vp1Exhb1c7Fm2LDlvL9vIWsd3Lp53AnSnR3GWtj7ITmIchlYDeawkvZygY4Og0N90M%2BGJ%2FbGtlOfdGr0bXh7zZ7iNZ6jt9XG5ecH3i0ZcfgyljY4oQkU9SFQVqUO7lOOdYqBruXFX6nDpxn6QhBKE9otPjN%2F4KQn3wSzZcBk2rzwciCcrWqFy28fOh5PG9YuUE7mqo1aa58OcoWFc6C7uy%2BRkI2E7hbVs36mOQSmC9xNoD3qNijc%2BWVGYbwF9DbkqHDo0HDui%2Fo6QKnpYJG%2BsB6CLrqKynCiD6pOSpyZPhIScZgIAKmKEWVIhtOW86c%2F8tKPXLibKZBWoq6oz38nilOFOyLOAlSWBGEeaemy3Kr8M76ZvSHkx03xiL1D8Sevcai1LL9l98Rak%2FM61oTF9r8jWd98Eh7HQLD3xAgMJmO08AGOqUBA41vuTgZ2FH56tAzWOAZVZFE98VdVswGoGfQL5Qjf7s1VBMxHmP8o6kZYNdMoA%2FrHeXicbIgAdy4D9Zl7lvUJuQTRgUHAUmpMJnuVFM6BKjljzPhPK8q1%2FwEDKJweFue%2Fnk42rx6T%2B9jUgAlHijlT%2BX%2F%2FY1Q9kcI7lyplPa%2FSKYp1hCwWJ%2BRdwXI%2BpAZpfgs%2FFVWSfyOTJbpN%2FAk3b2nQimfBgu0&X-Amz-Signature=c84f22c954bec5b556a87e88bc9b2c1edf282f0e0eadf9ab8480bc93d21480bc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBUOO2H%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICwdlYv%2BKr04DfH9FsijsX%2FeYBczo5BEG3kHtOkFvPmSAiEA%2F5zS7f%2F%2BuGM2PTJH7z01jbl3h1ibMi9fMKNZMZbLacAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2O7bN0h%2FfKnliXYCrcA7S5bCXPF%2BHXbfdv7n9vRhJFmGtqmQwqVMPXpjhYbyBEBj6TU9yU0GyDBNzt6nIsP4qrQrWdqA2arcXusHa300Dr2nCCmZ3ZkKHm9TFDVKxHC8%2BcBCriKbhEvpwTS6rZu00lX7roLoRVjXZf7MrDOEEK0%2FNQ8lc%2Fi2PO0m9WW4wj7IFVqaJ5WMFJJSFD06KA9I480djzzW5NqIi04qLX9vp1Exhb1c7Fm2LDlvL9vIWsd3Lp53AnSnR3GWtj7ITmIchlYDeawkvZygY4Og0N90M%2BGJ%2FbGtlOfdGr0bXh7zZ7iNZ6jt9XG5ecH3i0ZcfgyljY4oQkU9SFQVqUO7lOOdYqBruXFX6nDpxn6QhBKE9otPjN%2F4KQn3wSzZcBk2rzwciCcrWqFy28fOh5PG9YuUE7mqo1aa58OcoWFc6C7uy%2BRkI2E7hbVs36mOQSmC9xNoD3qNijc%2BWVGYbwF9DbkqHDo0HDui%2Fo6QKnpYJG%2BsB6CLrqKynCiD6pOSpyZPhIScZgIAKmKEWVIhtOW86c%2F8tKPXLibKZBWoq6oz38nilOFOyLOAlSWBGEeaemy3Kr8M76ZvSHkx03xiL1D8Sevcai1LL9l98Rak%2FM61oTF9r8jWd98Eh7HQLD3xAgMJmO08AGOqUBA41vuTgZ2FH56tAzWOAZVZFE98VdVswGoGfQL5Qjf7s1VBMxHmP8o6kZYNdMoA%2FrHeXicbIgAdy4D9Zl7lvUJuQTRgUHAUmpMJnuVFM6BKjljzPhPK8q1%2FwEDKJweFue%2Fnk42rx6T%2B9jUgAlHijlT%2BX%2F%2FY1Q9kcI7lyplPa%2FSKYp1hCwWJ%2BRdwXI%2BpAZpfgs%2FFVWSfyOTJbpN%2FAk3b2nQimfBgu0&X-Amz-Signature=e447b012b04a1c6059899c9dca660ef23ac07596f908bd9bfc28b45e0b157887&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
