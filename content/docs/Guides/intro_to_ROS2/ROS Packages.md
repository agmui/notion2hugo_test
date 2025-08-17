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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGNUSJD%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8mjyk3QUwZKrhD5cEvd37npK6oIARkpj9zAMv6Wvw7wIhAJG65QURSH%2B%2FsCavjXIlILEiRHHKazxAff3wKpv%2BIJmQKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7bjkG3bRExuwn9cq3ANJcOmBWrGVKbxhAimHQkX6uc4%2BJH5PHYAYQh%2BiOpO9lvtfEnk2cQbwSBvEiHAbCNnbAFuFdRUbrrMjKDYQn%2F2cRQzzfteLS3b6DqP3BIEWT%2F9psQN2zhmdF8ZULM71AZKdvHDaJLB7L%2FA9PMwMPqEJ1cbH84fyQkC5f6wtq9nFCsMXbDb5KXplL3xWemEKwLeXjw64c5TWtw0MPGjD8fRE9w4XILy0v%2BzSgeaN6LK1fvJfyrYHek%2FF0%2Ftpohk8i3zdysYU6pMvn7N7WGZT3wRpMwkxzB6tpVoEpwQUVOoSIrOiMf%2FuRN%2FJJlUO6yOjDUk6RKO3XoM65gdAtCq%2FpdFGGZEKizAJXv59JLqXP0oBA7YrORWHRIhVpGhQl1bxs7xTI1nH7ODlKWkVyewQkEwg4C%2BswwtQkPMBtdW%2BCrzwWhxU6idac4WPlfmvUbFXyzFIY5MA9kYtdJXI9szzm5zmjD2tBvvEsG1PZyQNPq4SIveBc8kw%2BQ%2FFmk9uL4PjPrzG2RLFTmVYvpKSOkvpJ4IvKbRdc1pguzqXdf8hY3ac43vM%2B13CzUpflL9daK%2BpKtUam0GHBhFey7gKjjhol86AvdhLltRCoZw9rT4OB3W65cWpMqKPWxOg%2B%2BObkjDfzYTFBjqkAS7MqzEAM%2Ff8qxoElGpqvzVlBUnxrsdmWH3eYkTFiCf2iEiHG5vVPXldomeGDHGpRBcNVgJPBopgNo9RIxZ4FhVaaTgtxWuyHiBSBOiBNhyUvMdneekOSULfHenyBAJEH9GCzN%2BLUeIzDTSoFuubczC12eLWhMWlhD%2B6JejcvCcns%2BAZ2D%2BmBdJh7o6oBbtZ7ckjolyUg%2Bf59%2BK7p2ceQuFWhMZx&X-Amz-Signature=1a281a26f4a7da3b2c8a4c3e0bccb2fc410740ac0f6027fe31a4cbb3ead24191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGNUSJD%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8mjyk3QUwZKrhD5cEvd37npK6oIARkpj9zAMv6Wvw7wIhAJG65QURSH%2B%2FsCavjXIlILEiRHHKazxAff3wKpv%2BIJmQKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7bjkG3bRExuwn9cq3ANJcOmBWrGVKbxhAimHQkX6uc4%2BJH5PHYAYQh%2BiOpO9lvtfEnk2cQbwSBvEiHAbCNnbAFuFdRUbrrMjKDYQn%2F2cRQzzfteLS3b6DqP3BIEWT%2F9psQN2zhmdF8ZULM71AZKdvHDaJLB7L%2FA9PMwMPqEJ1cbH84fyQkC5f6wtq9nFCsMXbDb5KXplL3xWemEKwLeXjw64c5TWtw0MPGjD8fRE9w4XILy0v%2BzSgeaN6LK1fvJfyrYHek%2FF0%2Ftpohk8i3zdysYU6pMvn7N7WGZT3wRpMwkxzB6tpVoEpwQUVOoSIrOiMf%2FuRN%2FJJlUO6yOjDUk6RKO3XoM65gdAtCq%2FpdFGGZEKizAJXv59JLqXP0oBA7YrORWHRIhVpGhQl1bxs7xTI1nH7ODlKWkVyewQkEwg4C%2BswwtQkPMBtdW%2BCrzwWhxU6idac4WPlfmvUbFXyzFIY5MA9kYtdJXI9szzm5zmjD2tBvvEsG1PZyQNPq4SIveBc8kw%2BQ%2FFmk9uL4PjPrzG2RLFTmVYvpKSOkvpJ4IvKbRdc1pguzqXdf8hY3ac43vM%2B13CzUpflL9daK%2BpKtUam0GHBhFey7gKjjhol86AvdhLltRCoZw9rT4OB3W65cWpMqKPWxOg%2B%2BObkjDfzYTFBjqkAS7MqzEAM%2Ff8qxoElGpqvzVlBUnxrsdmWH3eYkTFiCf2iEiHG5vVPXldomeGDHGpRBcNVgJPBopgNo9RIxZ4FhVaaTgtxWuyHiBSBOiBNhyUvMdneekOSULfHenyBAJEH9GCzN%2BLUeIzDTSoFuubczC12eLWhMWlhD%2B6JejcvCcns%2BAZ2D%2BmBdJh7o6oBbtZ7ckjolyUg%2Bf59%2BK7p2ceQuFWhMZx&X-Amz-Signature=d44aa15244b133e0e34d48b21f37fe772344f41af793a959a68b10f3e2307163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGNUSJD%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8mjyk3QUwZKrhD5cEvd37npK6oIARkpj9zAMv6Wvw7wIhAJG65QURSH%2B%2FsCavjXIlILEiRHHKazxAff3wKpv%2BIJmQKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7bjkG3bRExuwn9cq3ANJcOmBWrGVKbxhAimHQkX6uc4%2BJH5PHYAYQh%2BiOpO9lvtfEnk2cQbwSBvEiHAbCNnbAFuFdRUbrrMjKDYQn%2F2cRQzzfteLS3b6DqP3BIEWT%2F9psQN2zhmdF8ZULM71AZKdvHDaJLB7L%2FA9PMwMPqEJ1cbH84fyQkC5f6wtq9nFCsMXbDb5KXplL3xWemEKwLeXjw64c5TWtw0MPGjD8fRE9w4XILy0v%2BzSgeaN6LK1fvJfyrYHek%2FF0%2Ftpohk8i3zdysYU6pMvn7N7WGZT3wRpMwkxzB6tpVoEpwQUVOoSIrOiMf%2FuRN%2FJJlUO6yOjDUk6RKO3XoM65gdAtCq%2FpdFGGZEKizAJXv59JLqXP0oBA7YrORWHRIhVpGhQl1bxs7xTI1nH7ODlKWkVyewQkEwg4C%2BswwtQkPMBtdW%2BCrzwWhxU6idac4WPlfmvUbFXyzFIY5MA9kYtdJXI9szzm5zmjD2tBvvEsG1PZyQNPq4SIveBc8kw%2BQ%2FFmk9uL4PjPrzG2RLFTmVYvpKSOkvpJ4IvKbRdc1pguzqXdf8hY3ac43vM%2B13CzUpflL9daK%2BpKtUam0GHBhFey7gKjjhol86AvdhLltRCoZw9rT4OB3W65cWpMqKPWxOg%2B%2BObkjDfzYTFBjqkAS7MqzEAM%2Ff8qxoElGpqvzVlBUnxrsdmWH3eYkTFiCf2iEiHG5vVPXldomeGDHGpRBcNVgJPBopgNo9RIxZ4FhVaaTgtxWuyHiBSBOiBNhyUvMdneekOSULfHenyBAJEH9GCzN%2BLUeIzDTSoFuubczC12eLWhMWlhD%2B6JejcvCcns%2BAZ2D%2BmBdJh7o6oBbtZ7ckjolyUg%2Bf59%2BK7p2ceQuFWhMZx&X-Amz-Signature=ded24bae5995e36277f74b57285d3d9e1b1b02a6b926ad527d372dd463b6d238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGNUSJD%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8mjyk3QUwZKrhD5cEvd37npK6oIARkpj9zAMv6Wvw7wIhAJG65QURSH%2B%2FsCavjXIlILEiRHHKazxAff3wKpv%2BIJmQKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7bjkG3bRExuwn9cq3ANJcOmBWrGVKbxhAimHQkX6uc4%2BJH5PHYAYQh%2BiOpO9lvtfEnk2cQbwSBvEiHAbCNnbAFuFdRUbrrMjKDYQn%2F2cRQzzfteLS3b6DqP3BIEWT%2F9psQN2zhmdF8ZULM71AZKdvHDaJLB7L%2FA9PMwMPqEJ1cbH84fyQkC5f6wtq9nFCsMXbDb5KXplL3xWemEKwLeXjw64c5TWtw0MPGjD8fRE9w4XILy0v%2BzSgeaN6LK1fvJfyrYHek%2FF0%2Ftpohk8i3zdysYU6pMvn7N7WGZT3wRpMwkxzB6tpVoEpwQUVOoSIrOiMf%2FuRN%2FJJlUO6yOjDUk6RKO3XoM65gdAtCq%2FpdFGGZEKizAJXv59JLqXP0oBA7YrORWHRIhVpGhQl1bxs7xTI1nH7ODlKWkVyewQkEwg4C%2BswwtQkPMBtdW%2BCrzwWhxU6idac4WPlfmvUbFXyzFIY5MA9kYtdJXI9szzm5zmjD2tBvvEsG1PZyQNPq4SIveBc8kw%2BQ%2FFmk9uL4PjPrzG2RLFTmVYvpKSOkvpJ4IvKbRdc1pguzqXdf8hY3ac43vM%2B13CzUpflL9daK%2BpKtUam0GHBhFey7gKjjhol86AvdhLltRCoZw9rT4OB3W65cWpMqKPWxOg%2B%2BObkjDfzYTFBjqkAS7MqzEAM%2Ff8qxoElGpqvzVlBUnxrsdmWH3eYkTFiCf2iEiHG5vVPXldomeGDHGpRBcNVgJPBopgNo9RIxZ4FhVaaTgtxWuyHiBSBOiBNhyUvMdneekOSULfHenyBAJEH9GCzN%2BLUeIzDTSoFuubczC12eLWhMWlhD%2B6JejcvCcns%2BAZ2D%2BmBdJh7o6oBbtZ7ckjolyUg%2Bf59%2BK7p2ceQuFWhMZx&X-Amz-Signature=d00264d7b4912287de27c616d0748a53884ab04a59bfa1d6b2a72dec6a1b04df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGNUSJD%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8mjyk3QUwZKrhD5cEvd37npK6oIARkpj9zAMv6Wvw7wIhAJG65QURSH%2B%2FsCavjXIlILEiRHHKazxAff3wKpv%2BIJmQKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7bjkG3bRExuwn9cq3ANJcOmBWrGVKbxhAimHQkX6uc4%2BJH5PHYAYQh%2BiOpO9lvtfEnk2cQbwSBvEiHAbCNnbAFuFdRUbrrMjKDYQn%2F2cRQzzfteLS3b6DqP3BIEWT%2F9psQN2zhmdF8ZULM71AZKdvHDaJLB7L%2FA9PMwMPqEJ1cbH84fyQkC5f6wtq9nFCsMXbDb5KXplL3xWemEKwLeXjw64c5TWtw0MPGjD8fRE9w4XILy0v%2BzSgeaN6LK1fvJfyrYHek%2FF0%2Ftpohk8i3zdysYU6pMvn7N7WGZT3wRpMwkxzB6tpVoEpwQUVOoSIrOiMf%2FuRN%2FJJlUO6yOjDUk6RKO3XoM65gdAtCq%2FpdFGGZEKizAJXv59JLqXP0oBA7YrORWHRIhVpGhQl1bxs7xTI1nH7ODlKWkVyewQkEwg4C%2BswwtQkPMBtdW%2BCrzwWhxU6idac4WPlfmvUbFXyzFIY5MA9kYtdJXI9szzm5zmjD2tBvvEsG1PZyQNPq4SIveBc8kw%2BQ%2FFmk9uL4PjPrzG2RLFTmVYvpKSOkvpJ4IvKbRdc1pguzqXdf8hY3ac43vM%2B13CzUpflL9daK%2BpKtUam0GHBhFey7gKjjhol86AvdhLltRCoZw9rT4OB3W65cWpMqKPWxOg%2B%2BObkjDfzYTFBjqkAS7MqzEAM%2Ff8qxoElGpqvzVlBUnxrsdmWH3eYkTFiCf2iEiHG5vVPXldomeGDHGpRBcNVgJPBopgNo9RIxZ4FhVaaTgtxWuyHiBSBOiBNhyUvMdneekOSULfHenyBAJEH9GCzN%2BLUeIzDTSoFuubczC12eLWhMWlhD%2B6JejcvCcns%2BAZ2D%2BmBdJh7o6oBbtZ7ckjolyUg%2Bf59%2BK7p2ceQuFWhMZx&X-Amz-Signature=ca3b59adce0c73614e3b9f17d4e8d33185ea90364b8d01dea467d5e417e56b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGNUSJD%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8mjyk3QUwZKrhD5cEvd37npK6oIARkpj9zAMv6Wvw7wIhAJG65QURSH%2B%2FsCavjXIlILEiRHHKazxAff3wKpv%2BIJmQKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7bjkG3bRExuwn9cq3ANJcOmBWrGVKbxhAimHQkX6uc4%2BJH5PHYAYQh%2BiOpO9lvtfEnk2cQbwSBvEiHAbCNnbAFuFdRUbrrMjKDYQn%2F2cRQzzfteLS3b6DqP3BIEWT%2F9psQN2zhmdF8ZULM71AZKdvHDaJLB7L%2FA9PMwMPqEJ1cbH84fyQkC5f6wtq9nFCsMXbDb5KXplL3xWemEKwLeXjw64c5TWtw0MPGjD8fRE9w4XILy0v%2BzSgeaN6LK1fvJfyrYHek%2FF0%2Ftpohk8i3zdysYU6pMvn7N7WGZT3wRpMwkxzB6tpVoEpwQUVOoSIrOiMf%2FuRN%2FJJlUO6yOjDUk6RKO3XoM65gdAtCq%2FpdFGGZEKizAJXv59JLqXP0oBA7YrORWHRIhVpGhQl1bxs7xTI1nH7ODlKWkVyewQkEwg4C%2BswwtQkPMBtdW%2BCrzwWhxU6idac4WPlfmvUbFXyzFIY5MA9kYtdJXI9szzm5zmjD2tBvvEsG1PZyQNPq4SIveBc8kw%2BQ%2FFmk9uL4PjPrzG2RLFTmVYvpKSOkvpJ4IvKbRdc1pguzqXdf8hY3ac43vM%2B13CzUpflL9daK%2BpKtUam0GHBhFey7gKjjhol86AvdhLltRCoZw9rT4OB3W65cWpMqKPWxOg%2B%2BObkjDfzYTFBjqkAS7MqzEAM%2Ff8qxoElGpqvzVlBUnxrsdmWH3eYkTFiCf2iEiHG5vVPXldomeGDHGpRBcNVgJPBopgNo9RIxZ4FhVaaTgtxWuyHiBSBOiBNhyUvMdneekOSULfHenyBAJEH9GCzN%2BLUeIzDTSoFuubczC12eLWhMWlhD%2B6JejcvCcns%2BAZ2D%2BmBdJh7o6oBbtZ7ckjolyUg%2Bf59%2BK7p2ceQuFWhMZx&X-Amz-Signature=9257a740ca0491367b92890313829f7b94f3cfd56a7fddd5aa3bff8d6ad1c897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGNUSJD%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD8mjyk3QUwZKrhD5cEvd37npK6oIARkpj9zAMv6Wvw7wIhAJG65QURSH%2B%2FsCavjXIlILEiRHHKazxAff3wKpv%2BIJmQKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY7bjkG3bRExuwn9cq3ANJcOmBWrGVKbxhAimHQkX6uc4%2BJH5PHYAYQh%2BiOpO9lvtfEnk2cQbwSBvEiHAbCNnbAFuFdRUbrrMjKDYQn%2F2cRQzzfteLS3b6DqP3BIEWT%2F9psQN2zhmdF8ZULM71AZKdvHDaJLB7L%2FA9PMwMPqEJ1cbH84fyQkC5f6wtq9nFCsMXbDb5KXplL3xWemEKwLeXjw64c5TWtw0MPGjD8fRE9w4XILy0v%2BzSgeaN6LK1fvJfyrYHek%2FF0%2Ftpohk8i3zdysYU6pMvn7N7WGZT3wRpMwkxzB6tpVoEpwQUVOoSIrOiMf%2FuRN%2FJJlUO6yOjDUk6RKO3XoM65gdAtCq%2FpdFGGZEKizAJXv59JLqXP0oBA7YrORWHRIhVpGhQl1bxs7xTI1nH7ODlKWkVyewQkEwg4C%2BswwtQkPMBtdW%2BCrzwWhxU6idac4WPlfmvUbFXyzFIY5MA9kYtdJXI9szzm5zmjD2tBvvEsG1PZyQNPq4SIveBc8kw%2BQ%2FFmk9uL4PjPrzG2RLFTmVYvpKSOkvpJ4IvKbRdc1pguzqXdf8hY3ac43vM%2B13CzUpflL9daK%2BpKtUam0GHBhFey7gKjjhol86AvdhLltRCoZw9rT4OB3W65cWpMqKPWxOg%2B%2BObkjDfzYTFBjqkAS7MqzEAM%2Ff8qxoElGpqvzVlBUnxrsdmWH3eYkTFiCf2iEiHG5vVPXldomeGDHGpRBcNVgJPBopgNo9RIxZ4FhVaaTgtxWuyHiBSBOiBNhyUvMdneekOSULfHenyBAJEH9GCzN%2BLUeIzDTSoFuubczC12eLWhMWlhD%2B6JejcvCcns%2BAZ2D%2BmBdJh7o6oBbtZ7ckjolyUg%2Bf59%2BK7p2ceQuFWhMZx&X-Amz-Signature=1206f434283396e48e5f68e691e959114ecc6330e943f34828093ed5bf885a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
