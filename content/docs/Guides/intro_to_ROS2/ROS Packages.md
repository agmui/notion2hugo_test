---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO742L6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHP%2F3lLmcqEeEMnYcB%2Bei1eEE5zebD5rFIwiJPHveI1hAiAsDYTQV1ZDZrBirXp8GDtkte1JmZqT%2BE42gLsZrAAzTSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJwnQRz%2F3v0%2B7FiYLKtwD%2FqP9lHWZV5yapOW0Qdc4f3zLvo9EK9MCXhH34wCyYqUjgC%2BSTNQ2lfFSm5Y1c0gbnYJCSVpeW0FoBPI1lBOtNMSo8Qy03lwr1%2Fj%2BPzoj9YN6M0gPYb0dEkcHUuvnTl0qGsS6y%2BxVFeCmaqXyeVtJXBCc1litYZ7qGxLEvwY0%2FAyj4MJ1wMc13PuDzRFmjR2QaNA8WmM9xqCsWlCtLikxesJVwJHvLbNgLUs0eegSEaZYWNhNf47YgqNs9GJDr%2BD%2BzJIte9M7Ue%2F%2BCjfMJLkh3enPUQl4Y9v3UOs05%2FWkAJ%2F6%2BTXjmJYn3oqEhgVu5ppNAI60HRhU1Ahp7aZjtd05rWtGFo1wx%2BdHbSHq8ZoABqiTrGmIbZfP5T97tJAr4ECLFhxx4f46GEELI%2BLq3ht4%2FpkNQnx4XLnxZoUkcAKPDqWdzoXQ54XIwA5jY2zELx5HJD%2BSkXdWQxVQI%2BpoqbXX0dqtO85txL0L4EDJaaJ9u2zEdIT0hISFQHZNSlMG%2FG7DUxVj1kuUpe20%2B4MPcyPYOGsrEET8Kjbzowp2XQPbZR38dAPJmfF4knpoG3PDTgRVqxDYa0fyEPQiCMmHlxiQWKxZ%2BD8qzNucPqQwfFKTSF0l9T3g%2BOeoi3%2B81AYwg66J1AY6pgFkztq7CAayUCg9th6ROjxO7yjoRUHDQj%2BlWD%2Bv3IOAJAjLNSydDhIUYb3ysHwVFbva4cGighdwKtqbfvQCIxu%2BQY9K%2BbbGx%2FhBefiPzLlaV0spFy5ny5NcQASH%2FQks8U5ya2PEwFsO0afNi%2BAh06A6KMOtBQveTwqWntRggWB9G4WLLZsOCqIn6E90%2BkbvsQq0Knx4nJ4m4KMsbUawtXLsnHUI0v6Y&X-Amz-Signature=fb81193d0409e8381e5b579d5e7df2b80ddf79abca76c6a0b243dba3741a0061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO742L6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHP%2F3lLmcqEeEMnYcB%2Bei1eEE5zebD5rFIwiJPHveI1hAiAsDYTQV1ZDZrBirXp8GDtkte1JmZqT%2BE42gLsZrAAzTSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJwnQRz%2F3v0%2B7FiYLKtwD%2FqP9lHWZV5yapOW0Qdc4f3zLvo9EK9MCXhH34wCyYqUjgC%2BSTNQ2lfFSm5Y1c0gbnYJCSVpeW0FoBPI1lBOtNMSo8Qy03lwr1%2Fj%2BPzoj9YN6M0gPYb0dEkcHUuvnTl0qGsS6y%2BxVFeCmaqXyeVtJXBCc1litYZ7qGxLEvwY0%2FAyj4MJ1wMc13PuDzRFmjR2QaNA8WmM9xqCsWlCtLikxesJVwJHvLbNgLUs0eegSEaZYWNhNf47YgqNs9GJDr%2BD%2BzJIte9M7Ue%2F%2BCjfMJLkh3enPUQl4Y9v3UOs05%2FWkAJ%2F6%2BTXjmJYn3oqEhgVu5ppNAI60HRhU1Ahp7aZjtd05rWtGFo1wx%2BdHbSHq8ZoABqiTrGmIbZfP5T97tJAr4ECLFhxx4f46GEELI%2BLq3ht4%2FpkNQnx4XLnxZoUkcAKPDqWdzoXQ54XIwA5jY2zELx5HJD%2BSkXdWQxVQI%2BpoqbXX0dqtO85txL0L4EDJaaJ9u2zEdIT0hISFQHZNSlMG%2FG7DUxVj1kuUpe20%2B4MPcyPYOGsrEET8Kjbzowp2XQPbZR38dAPJmfF4knpoG3PDTgRVqxDYa0fyEPQiCMmHlxiQWKxZ%2BD8qzNucPqQwfFKTSF0l9T3g%2BOeoi3%2B81AYwg66J1AY6pgFkztq7CAayUCg9th6ROjxO7yjoRUHDQj%2BlWD%2Bv3IOAJAjLNSydDhIUYb3ysHwVFbva4cGighdwKtqbfvQCIxu%2BQY9K%2BbbGx%2FhBefiPzLlaV0spFy5ny5NcQASH%2FQks8U5ya2PEwFsO0afNi%2BAh06A6KMOtBQveTwqWntRggWB9G4WLLZsOCqIn6E90%2BkbvsQq0Knx4nJ4m4KMsbUawtXLsnHUI0v6Y&X-Amz-Signature=225d7459063202909e3c398678981484241ee9c4309b801bb712c155c87b4472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO742L6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHP%2F3lLmcqEeEMnYcB%2Bei1eEE5zebD5rFIwiJPHveI1hAiAsDYTQV1ZDZrBirXp8GDtkte1JmZqT%2BE42gLsZrAAzTSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJwnQRz%2F3v0%2B7FiYLKtwD%2FqP9lHWZV5yapOW0Qdc4f3zLvo9EK9MCXhH34wCyYqUjgC%2BSTNQ2lfFSm5Y1c0gbnYJCSVpeW0FoBPI1lBOtNMSo8Qy03lwr1%2Fj%2BPzoj9YN6M0gPYb0dEkcHUuvnTl0qGsS6y%2BxVFeCmaqXyeVtJXBCc1litYZ7qGxLEvwY0%2FAyj4MJ1wMc13PuDzRFmjR2QaNA8WmM9xqCsWlCtLikxesJVwJHvLbNgLUs0eegSEaZYWNhNf47YgqNs9GJDr%2BD%2BzJIte9M7Ue%2F%2BCjfMJLkh3enPUQl4Y9v3UOs05%2FWkAJ%2F6%2BTXjmJYn3oqEhgVu5ppNAI60HRhU1Ahp7aZjtd05rWtGFo1wx%2BdHbSHq8ZoABqiTrGmIbZfP5T97tJAr4ECLFhxx4f46GEELI%2BLq3ht4%2FpkNQnx4XLnxZoUkcAKPDqWdzoXQ54XIwA5jY2zELx5HJD%2BSkXdWQxVQI%2BpoqbXX0dqtO85txL0L4EDJaaJ9u2zEdIT0hISFQHZNSlMG%2FG7DUxVj1kuUpe20%2B4MPcyPYOGsrEET8Kjbzowp2XQPbZR38dAPJmfF4knpoG3PDTgRVqxDYa0fyEPQiCMmHlxiQWKxZ%2BD8qzNucPqQwfFKTSF0l9T3g%2BOeoi3%2B81AYwg66J1AY6pgFkztq7CAayUCg9th6ROjxO7yjoRUHDQj%2BlWD%2Bv3IOAJAjLNSydDhIUYb3ysHwVFbva4cGighdwKtqbfvQCIxu%2BQY9K%2BbbGx%2FhBefiPzLlaV0spFy5ny5NcQASH%2FQks8U5ya2PEwFsO0afNi%2BAh06A6KMOtBQveTwqWntRggWB9G4WLLZsOCqIn6E90%2BkbvsQq0Knx4nJ4m4KMsbUawtXLsnHUI0v6Y&X-Amz-Signature=cc159a023bbda77685e2bd003b8ca01c923f9960eb9895821da71fd95b44ae0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO742L6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHP%2F3lLmcqEeEMnYcB%2Bei1eEE5zebD5rFIwiJPHveI1hAiAsDYTQV1ZDZrBirXp8GDtkte1JmZqT%2BE42gLsZrAAzTSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJwnQRz%2F3v0%2B7FiYLKtwD%2FqP9lHWZV5yapOW0Qdc4f3zLvo9EK9MCXhH34wCyYqUjgC%2BSTNQ2lfFSm5Y1c0gbnYJCSVpeW0FoBPI1lBOtNMSo8Qy03lwr1%2Fj%2BPzoj9YN6M0gPYb0dEkcHUuvnTl0qGsS6y%2BxVFeCmaqXyeVtJXBCc1litYZ7qGxLEvwY0%2FAyj4MJ1wMc13PuDzRFmjR2QaNA8WmM9xqCsWlCtLikxesJVwJHvLbNgLUs0eegSEaZYWNhNf47YgqNs9GJDr%2BD%2BzJIte9M7Ue%2F%2BCjfMJLkh3enPUQl4Y9v3UOs05%2FWkAJ%2F6%2BTXjmJYn3oqEhgVu5ppNAI60HRhU1Ahp7aZjtd05rWtGFo1wx%2BdHbSHq8ZoABqiTrGmIbZfP5T97tJAr4ECLFhxx4f46GEELI%2BLq3ht4%2FpkNQnx4XLnxZoUkcAKPDqWdzoXQ54XIwA5jY2zELx5HJD%2BSkXdWQxVQI%2BpoqbXX0dqtO85txL0L4EDJaaJ9u2zEdIT0hISFQHZNSlMG%2FG7DUxVj1kuUpe20%2B4MPcyPYOGsrEET8Kjbzowp2XQPbZR38dAPJmfF4knpoG3PDTgRVqxDYa0fyEPQiCMmHlxiQWKxZ%2BD8qzNucPqQwfFKTSF0l9T3g%2BOeoi3%2B81AYwg66J1AY6pgFkztq7CAayUCg9th6ROjxO7yjoRUHDQj%2BlWD%2Bv3IOAJAjLNSydDhIUYb3ysHwVFbva4cGighdwKtqbfvQCIxu%2BQY9K%2BbbGx%2FhBefiPzLlaV0spFy5ny5NcQASH%2FQks8U5ya2PEwFsO0afNi%2BAh06A6KMOtBQveTwqWntRggWB9G4WLLZsOCqIn6E90%2BkbvsQq0Knx4nJ4m4KMsbUawtXLsnHUI0v6Y&X-Amz-Signature=c1d9197b74474e3965dbec2a546e20ffd3f2fbcfb7a9b4096f62ab9ab9688627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO742L6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHP%2F3lLmcqEeEMnYcB%2Bei1eEE5zebD5rFIwiJPHveI1hAiAsDYTQV1ZDZrBirXp8GDtkte1JmZqT%2BE42gLsZrAAzTSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJwnQRz%2F3v0%2B7FiYLKtwD%2FqP9lHWZV5yapOW0Qdc4f3zLvo9EK9MCXhH34wCyYqUjgC%2BSTNQ2lfFSm5Y1c0gbnYJCSVpeW0FoBPI1lBOtNMSo8Qy03lwr1%2Fj%2BPzoj9YN6M0gPYb0dEkcHUuvnTl0qGsS6y%2BxVFeCmaqXyeVtJXBCc1litYZ7qGxLEvwY0%2FAyj4MJ1wMc13PuDzRFmjR2QaNA8WmM9xqCsWlCtLikxesJVwJHvLbNgLUs0eegSEaZYWNhNf47YgqNs9GJDr%2BD%2BzJIte9M7Ue%2F%2BCjfMJLkh3enPUQl4Y9v3UOs05%2FWkAJ%2F6%2BTXjmJYn3oqEhgVu5ppNAI60HRhU1Ahp7aZjtd05rWtGFo1wx%2BdHbSHq8ZoABqiTrGmIbZfP5T97tJAr4ECLFhxx4f46GEELI%2BLq3ht4%2FpkNQnx4XLnxZoUkcAKPDqWdzoXQ54XIwA5jY2zELx5HJD%2BSkXdWQxVQI%2BpoqbXX0dqtO85txL0L4EDJaaJ9u2zEdIT0hISFQHZNSlMG%2FG7DUxVj1kuUpe20%2B4MPcyPYOGsrEET8Kjbzowp2XQPbZR38dAPJmfF4knpoG3PDTgRVqxDYa0fyEPQiCMmHlxiQWKxZ%2BD8qzNucPqQwfFKTSF0l9T3g%2BOeoi3%2B81AYwg66J1AY6pgFkztq7CAayUCg9th6ROjxO7yjoRUHDQj%2BlWD%2Bv3IOAJAjLNSydDhIUYb3ysHwVFbva4cGighdwKtqbfvQCIxu%2BQY9K%2BbbGx%2FhBefiPzLlaV0spFy5ny5NcQASH%2FQks8U5ya2PEwFsO0afNi%2BAh06A6KMOtBQveTwqWntRggWB9G4WLLZsOCqIn6E90%2BkbvsQq0Knx4nJ4m4KMsbUawtXLsnHUI0v6Y&X-Amz-Signature=dc5f756e13b9fe7e87e0d22e29f35f1e53b6fd1c918c41a8e4db7bcefdbfbcb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO742L6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHP%2F3lLmcqEeEMnYcB%2Bei1eEE5zebD5rFIwiJPHveI1hAiAsDYTQV1ZDZrBirXp8GDtkte1JmZqT%2BE42gLsZrAAzTSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJwnQRz%2F3v0%2B7FiYLKtwD%2FqP9lHWZV5yapOW0Qdc4f3zLvo9EK9MCXhH34wCyYqUjgC%2BSTNQ2lfFSm5Y1c0gbnYJCSVpeW0FoBPI1lBOtNMSo8Qy03lwr1%2Fj%2BPzoj9YN6M0gPYb0dEkcHUuvnTl0qGsS6y%2BxVFeCmaqXyeVtJXBCc1litYZ7qGxLEvwY0%2FAyj4MJ1wMc13PuDzRFmjR2QaNA8WmM9xqCsWlCtLikxesJVwJHvLbNgLUs0eegSEaZYWNhNf47YgqNs9GJDr%2BD%2BzJIte9M7Ue%2F%2BCjfMJLkh3enPUQl4Y9v3UOs05%2FWkAJ%2F6%2BTXjmJYn3oqEhgVu5ppNAI60HRhU1Ahp7aZjtd05rWtGFo1wx%2BdHbSHq8ZoABqiTrGmIbZfP5T97tJAr4ECLFhxx4f46GEELI%2BLq3ht4%2FpkNQnx4XLnxZoUkcAKPDqWdzoXQ54XIwA5jY2zELx5HJD%2BSkXdWQxVQI%2BpoqbXX0dqtO85txL0L4EDJaaJ9u2zEdIT0hISFQHZNSlMG%2FG7DUxVj1kuUpe20%2B4MPcyPYOGsrEET8Kjbzowp2XQPbZR38dAPJmfF4knpoG3PDTgRVqxDYa0fyEPQiCMmHlxiQWKxZ%2BD8qzNucPqQwfFKTSF0l9T3g%2BOeoi3%2B81AYwg66J1AY6pgFkztq7CAayUCg9th6ROjxO7yjoRUHDQj%2BlWD%2Bv3IOAJAjLNSydDhIUYb3ysHwVFbva4cGighdwKtqbfvQCIxu%2BQY9K%2BbbGx%2FhBefiPzLlaV0spFy5ny5NcQASH%2FQks8U5ya2PEwFsO0afNi%2BAh06A6KMOtBQveTwqWntRggWB9G4WLLZsOCqIn6E90%2BkbvsQq0Knx4nJ4m4KMsbUawtXLsnHUI0v6Y&X-Amz-Signature=e66912919b528b83fd61d26efb83927ba99c9c82c584d97a3a6e36333238f87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TO742L6%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHP%2F3lLmcqEeEMnYcB%2Bei1eEE5zebD5rFIwiJPHveI1hAiAsDYTQV1ZDZrBirXp8GDtkte1JmZqT%2BE42gLsZrAAzTSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJwnQRz%2F3v0%2B7FiYLKtwD%2FqP9lHWZV5yapOW0Qdc4f3zLvo9EK9MCXhH34wCyYqUjgC%2BSTNQ2lfFSm5Y1c0gbnYJCSVpeW0FoBPI1lBOtNMSo8Qy03lwr1%2Fj%2BPzoj9YN6M0gPYb0dEkcHUuvnTl0qGsS6y%2BxVFeCmaqXyeVtJXBCc1litYZ7qGxLEvwY0%2FAyj4MJ1wMc13PuDzRFmjR2QaNA8WmM9xqCsWlCtLikxesJVwJHvLbNgLUs0eegSEaZYWNhNf47YgqNs9GJDr%2BD%2BzJIte9M7Ue%2F%2BCjfMJLkh3enPUQl4Y9v3UOs05%2FWkAJ%2F6%2BTXjmJYn3oqEhgVu5ppNAI60HRhU1Ahp7aZjtd05rWtGFo1wx%2BdHbSHq8ZoABqiTrGmIbZfP5T97tJAr4ECLFhxx4f46GEELI%2BLq3ht4%2FpkNQnx4XLnxZoUkcAKPDqWdzoXQ54XIwA5jY2zELx5HJD%2BSkXdWQxVQI%2BpoqbXX0dqtO85txL0L4EDJaaJ9u2zEdIT0hISFQHZNSlMG%2FG7DUxVj1kuUpe20%2B4MPcyPYOGsrEET8Kjbzowp2XQPbZR38dAPJmfF4knpoG3PDTgRVqxDYa0fyEPQiCMmHlxiQWKxZ%2BD8qzNucPqQwfFKTSF0l9T3g%2BOeoi3%2B81AYwg66J1AY6pgFkztq7CAayUCg9th6ROjxO7yjoRUHDQj%2BlWD%2Bv3IOAJAjLNSydDhIUYb3ysHwVFbva4cGighdwKtqbfvQCIxu%2BQY9K%2BbbGx%2FhBefiPzLlaV0spFy5ny5NcQASH%2FQks8U5ya2PEwFsO0afNi%2BAh06A6KMOtBQveTwqWntRggWB9G4WLLZsOCqIn6E90%2BkbvsQq0Knx4nJ4m4KMsbUawtXLsnHUI0v6Y&X-Amz-Signature=87d37c8faf360dcf174b209ed928823556e23187e3632834a931ce98ca8ebc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
