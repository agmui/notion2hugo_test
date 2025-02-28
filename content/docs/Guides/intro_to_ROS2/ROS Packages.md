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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7GCN5G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfw9skqHXsVGbWtB6L4mXhwGnBxJsooo9fMWBsogZ1ugIhAL9RbMI6P%2BRpXbXUc7CrSC63IsPN6WXpqq0wF5Au%2BEmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjtD3YwTXGehXsSvcq3APje3LabaeM5yUGp%2Bh%2Bzv%2BkjvzU%2BDSVtCviP0PxGYJKcGgCRuwbbGudSiCf%2FZDxg0r97l4gFWccdR%2BaJ9RUjsu00IPZfNa8Xk0gpeLqboLlxBk2KBhOhUat6aEm%2FNlg%2Fq5mx%2FmcjX7ESpiUkYT9Zg1P%2Fr6%2FOffxLP7CeprljWf%2BEUaYZAm5TrXTKoGrromLV3sTeCtqfQ%2F0nbaFYHZu3AzX3qfT%2BePfoof3%2Fc7lFgtnufUjIHl9xLfWsRmPo4cbQzQDxdCdSleQYhvjUvekdv3dA2A363AT8pDEE9xCQOE%2BMFoh5ap4DklCcTSQOfwYOWf4NBFAud8UdMBVik%2FoZhbKnyFKOLqqxzK2bM00fjOvDSxqg9L5P2F2%2Fj%2F7FsJ4aO0rveyDpWcs%2Fr7xvRJoLjiv6EEDX4oTxaOE6hrdzbShEMrf49E1nmnxumWWC2uBTliVwmlWTepRoVZyErP6Vi%2FUEYcIO7e6jE7dYpqDTml5s8i9RCgFiUfQAkWHvxhOirbWDXCkkAmHlbFZRBv4b7YGhzAhPAmmK2zJwLJexFhkfm8TEUysVG0LRxmnJobeY03isj3GVYy5b975mgKIF73RXgdNv4nEbvEaAevsVcZtgsW3y3KNv%2Bjy6cmhEDCBsYa%2BBjqkAQn%2FVANPyk0gQtPskswjD9p%2Fb72MjqVBhRpxung2vPQGgvcmlJh0WE7t%2Fx1LjcDlPqdmSF%2B3Zf5TYuavhu%2BeVfNVLyLNn8Is5ARFd7pEch9GEf5YH7Vn4k9Y26N0ONrcQnhbIDGG51Gb8afJ5IQo0kDlNBWNgHaG7kor0rZfq6XfqWzS6PYLK83K8gBPQxNRHpY%2FgwijlyF0jdf89Ko6SEXCK3BD&X-Amz-Signature=6a2f2f90de5674083eaaca00194bc157c275d371ba6196af739c0fe129a65804&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7GCN5G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfw9skqHXsVGbWtB6L4mXhwGnBxJsooo9fMWBsogZ1ugIhAL9RbMI6P%2BRpXbXUc7CrSC63IsPN6WXpqq0wF5Au%2BEmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjtD3YwTXGehXsSvcq3APje3LabaeM5yUGp%2Bh%2Bzv%2BkjvzU%2BDSVtCviP0PxGYJKcGgCRuwbbGudSiCf%2FZDxg0r97l4gFWccdR%2BaJ9RUjsu00IPZfNa8Xk0gpeLqboLlxBk2KBhOhUat6aEm%2FNlg%2Fq5mx%2FmcjX7ESpiUkYT9Zg1P%2Fr6%2FOffxLP7CeprljWf%2BEUaYZAm5TrXTKoGrromLV3sTeCtqfQ%2F0nbaFYHZu3AzX3qfT%2BePfoof3%2Fc7lFgtnufUjIHl9xLfWsRmPo4cbQzQDxdCdSleQYhvjUvekdv3dA2A363AT8pDEE9xCQOE%2BMFoh5ap4DklCcTSQOfwYOWf4NBFAud8UdMBVik%2FoZhbKnyFKOLqqxzK2bM00fjOvDSxqg9L5P2F2%2Fj%2F7FsJ4aO0rveyDpWcs%2Fr7xvRJoLjiv6EEDX4oTxaOE6hrdzbShEMrf49E1nmnxumWWC2uBTliVwmlWTepRoVZyErP6Vi%2FUEYcIO7e6jE7dYpqDTml5s8i9RCgFiUfQAkWHvxhOirbWDXCkkAmHlbFZRBv4b7YGhzAhPAmmK2zJwLJexFhkfm8TEUysVG0LRxmnJobeY03isj3GVYy5b975mgKIF73RXgdNv4nEbvEaAevsVcZtgsW3y3KNv%2Bjy6cmhEDCBsYa%2BBjqkAQn%2FVANPyk0gQtPskswjD9p%2Fb72MjqVBhRpxung2vPQGgvcmlJh0WE7t%2Fx1LjcDlPqdmSF%2B3Zf5TYuavhu%2BeVfNVLyLNn8Is5ARFd7pEch9GEf5YH7Vn4k9Y26N0ONrcQnhbIDGG51Gb8afJ5IQo0kDlNBWNgHaG7kor0rZfq6XfqWzS6PYLK83K8gBPQxNRHpY%2FgwijlyF0jdf89Ko6SEXCK3BD&X-Amz-Signature=9dc19375b74075e9bc3ddc6402d5e1d5cab656fa570ca260bb59698ff5116782&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7GCN5G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfw9skqHXsVGbWtB6L4mXhwGnBxJsooo9fMWBsogZ1ugIhAL9RbMI6P%2BRpXbXUc7CrSC63IsPN6WXpqq0wF5Au%2BEmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjtD3YwTXGehXsSvcq3APje3LabaeM5yUGp%2Bh%2Bzv%2BkjvzU%2BDSVtCviP0PxGYJKcGgCRuwbbGudSiCf%2FZDxg0r97l4gFWccdR%2BaJ9RUjsu00IPZfNa8Xk0gpeLqboLlxBk2KBhOhUat6aEm%2FNlg%2Fq5mx%2FmcjX7ESpiUkYT9Zg1P%2Fr6%2FOffxLP7CeprljWf%2BEUaYZAm5TrXTKoGrromLV3sTeCtqfQ%2F0nbaFYHZu3AzX3qfT%2BePfoof3%2Fc7lFgtnufUjIHl9xLfWsRmPo4cbQzQDxdCdSleQYhvjUvekdv3dA2A363AT8pDEE9xCQOE%2BMFoh5ap4DklCcTSQOfwYOWf4NBFAud8UdMBVik%2FoZhbKnyFKOLqqxzK2bM00fjOvDSxqg9L5P2F2%2Fj%2F7FsJ4aO0rveyDpWcs%2Fr7xvRJoLjiv6EEDX4oTxaOE6hrdzbShEMrf49E1nmnxumWWC2uBTliVwmlWTepRoVZyErP6Vi%2FUEYcIO7e6jE7dYpqDTml5s8i9RCgFiUfQAkWHvxhOirbWDXCkkAmHlbFZRBv4b7YGhzAhPAmmK2zJwLJexFhkfm8TEUysVG0LRxmnJobeY03isj3GVYy5b975mgKIF73RXgdNv4nEbvEaAevsVcZtgsW3y3KNv%2Bjy6cmhEDCBsYa%2BBjqkAQn%2FVANPyk0gQtPskswjD9p%2Fb72MjqVBhRpxung2vPQGgvcmlJh0WE7t%2Fx1LjcDlPqdmSF%2B3Zf5TYuavhu%2BeVfNVLyLNn8Is5ARFd7pEch9GEf5YH7Vn4k9Y26N0ONrcQnhbIDGG51Gb8afJ5IQo0kDlNBWNgHaG7kor0rZfq6XfqWzS6PYLK83K8gBPQxNRHpY%2FgwijlyF0jdf89Ko6SEXCK3BD&X-Amz-Signature=61b3088e64e221bc6aa51b2830b1566a4fe7b58e5e7587586d3c2e4a4b3e00c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7GCN5G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfw9skqHXsVGbWtB6L4mXhwGnBxJsooo9fMWBsogZ1ugIhAL9RbMI6P%2BRpXbXUc7CrSC63IsPN6WXpqq0wF5Au%2BEmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjtD3YwTXGehXsSvcq3APje3LabaeM5yUGp%2Bh%2Bzv%2BkjvzU%2BDSVtCviP0PxGYJKcGgCRuwbbGudSiCf%2FZDxg0r97l4gFWccdR%2BaJ9RUjsu00IPZfNa8Xk0gpeLqboLlxBk2KBhOhUat6aEm%2FNlg%2Fq5mx%2FmcjX7ESpiUkYT9Zg1P%2Fr6%2FOffxLP7CeprljWf%2BEUaYZAm5TrXTKoGrromLV3sTeCtqfQ%2F0nbaFYHZu3AzX3qfT%2BePfoof3%2Fc7lFgtnufUjIHl9xLfWsRmPo4cbQzQDxdCdSleQYhvjUvekdv3dA2A363AT8pDEE9xCQOE%2BMFoh5ap4DklCcTSQOfwYOWf4NBFAud8UdMBVik%2FoZhbKnyFKOLqqxzK2bM00fjOvDSxqg9L5P2F2%2Fj%2F7FsJ4aO0rveyDpWcs%2Fr7xvRJoLjiv6EEDX4oTxaOE6hrdzbShEMrf49E1nmnxumWWC2uBTliVwmlWTepRoVZyErP6Vi%2FUEYcIO7e6jE7dYpqDTml5s8i9RCgFiUfQAkWHvxhOirbWDXCkkAmHlbFZRBv4b7YGhzAhPAmmK2zJwLJexFhkfm8TEUysVG0LRxmnJobeY03isj3GVYy5b975mgKIF73RXgdNv4nEbvEaAevsVcZtgsW3y3KNv%2Bjy6cmhEDCBsYa%2BBjqkAQn%2FVANPyk0gQtPskswjD9p%2Fb72MjqVBhRpxung2vPQGgvcmlJh0WE7t%2Fx1LjcDlPqdmSF%2B3Zf5TYuavhu%2BeVfNVLyLNn8Is5ARFd7pEch9GEf5YH7Vn4k9Y26N0ONrcQnhbIDGG51Gb8afJ5IQo0kDlNBWNgHaG7kor0rZfq6XfqWzS6PYLK83K8gBPQxNRHpY%2FgwijlyF0jdf89Ko6SEXCK3BD&X-Amz-Signature=3839c4ab8ede76de09a8cb06c5dc0024192ca1727cb6c3eaaee2cdb1fd549a1f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7GCN5G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfw9skqHXsVGbWtB6L4mXhwGnBxJsooo9fMWBsogZ1ugIhAL9RbMI6P%2BRpXbXUc7CrSC63IsPN6WXpqq0wF5Au%2BEmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjtD3YwTXGehXsSvcq3APje3LabaeM5yUGp%2Bh%2Bzv%2BkjvzU%2BDSVtCviP0PxGYJKcGgCRuwbbGudSiCf%2FZDxg0r97l4gFWccdR%2BaJ9RUjsu00IPZfNa8Xk0gpeLqboLlxBk2KBhOhUat6aEm%2FNlg%2Fq5mx%2FmcjX7ESpiUkYT9Zg1P%2Fr6%2FOffxLP7CeprljWf%2BEUaYZAm5TrXTKoGrromLV3sTeCtqfQ%2F0nbaFYHZu3AzX3qfT%2BePfoof3%2Fc7lFgtnufUjIHl9xLfWsRmPo4cbQzQDxdCdSleQYhvjUvekdv3dA2A363AT8pDEE9xCQOE%2BMFoh5ap4DklCcTSQOfwYOWf4NBFAud8UdMBVik%2FoZhbKnyFKOLqqxzK2bM00fjOvDSxqg9L5P2F2%2Fj%2F7FsJ4aO0rveyDpWcs%2Fr7xvRJoLjiv6EEDX4oTxaOE6hrdzbShEMrf49E1nmnxumWWC2uBTliVwmlWTepRoVZyErP6Vi%2FUEYcIO7e6jE7dYpqDTml5s8i9RCgFiUfQAkWHvxhOirbWDXCkkAmHlbFZRBv4b7YGhzAhPAmmK2zJwLJexFhkfm8TEUysVG0LRxmnJobeY03isj3GVYy5b975mgKIF73RXgdNv4nEbvEaAevsVcZtgsW3y3KNv%2Bjy6cmhEDCBsYa%2BBjqkAQn%2FVANPyk0gQtPskswjD9p%2Fb72MjqVBhRpxung2vPQGgvcmlJh0WE7t%2Fx1LjcDlPqdmSF%2B3Zf5TYuavhu%2BeVfNVLyLNn8Is5ARFd7pEch9GEf5YH7Vn4k9Y26N0ONrcQnhbIDGG51Gb8afJ5IQo0kDlNBWNgHaG7kor0rZfq6XfqWzS6PYLK83K8gBPQxNRHpY%2FgwijlyF0jdf89Ko6SEXCK3BD&X-Amz-Signature=bef18be1a3b97f4359b7a54af5142ab0784758987743465aa015791e2e493be8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7GCN5G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfw9skqHXsVGbWtB6L4mXhwGnBxJsooo9fMWBsogZ1ugIhAL9RbMI6P%2BRpXbXUc7CrSC63IsPN6WXpqq0wF5Au%2BEmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjtD3YwTXGehXsSvcq3APje3LabaeM5yUGp%2Bh%2Bzv%2BkjvzU%2BDSVtCviP0PxGYJKcGgCRuwbbGudSiCf%2FZDxg0r97l4gFWccdR%2BaJ9RUjsu00IPZfNa8Xk0gpeLqboLlxBk2KBhOhUat6aEm%2FNlg%2Fq5mx%2FmcjX7ESpiUkYT9Zg1P%2Fr6%2FOffxLP7CeprljWf%2BEUaYZAm5TrXTKoGrromLV3sTeCtqfQ%2F0nbaFYHZu3AzX3qfT%2BePfoof3%2Fc7lFgtnufUjIHl9xLfWsRmPo4cbQzQDxdCdSleQYhvjUvekdv3dA2A363AT8pDEE9xCQOE%2BMFoh5ap4DklCcTSQOfwYOWf4NBFAud8UdMBVik%2FoZhbKnyFKOLqqxzK2bM00fjOvDSxqg9L5P2F2%2Fj%2F7FsJ4aO0rveyDpWcs%2Fr7xvRJoLjiv6EEDX4oTxaOE6hrdzbShEMrf49E1nmnxumWWC2uBTliVwmlWTepRoVZyErP6Vi%2FUEYcIO7e6jE7dYpqDTml5s8i9RCgFiUfQAkWHvxhOirbWDXCkkAmHlbFZRBv4b7YGhzAhPAmmK2zJwLJexFhkfm8TEUysVG0LRxmnJobeY03isj3GVYy5b975mgKIF73RXgdNv4nEbvEaAevsVcZtgsW3y3KNv%2Bjy6cmhEDCBsYa%2BBjqkAQn%2FVANPyk0gQtPskswjD9p%2Fb72MjqVBhRpxung2vPQGgvcmlJh0WE7t%2Fx1LjcDlPqdmSF%2B3Zf5TYuavhu%2BeVfNVLyLNn8Is5ARFd7pEch9GEf5YH7Vn4k9Y26N0ONrcQnhbIDGG51Gb8afJ5IQo0kDlNBWNgHaG7kor0rZfq6XfqWzS6PYLK83K8gBPQxNRHpY%2FgwijlyF0jdf89Ko6SEXCK3BD&X-Amz-Signature=667dc8b1413d193468840c173085cea0a61af7279fc19981987ab9923721da0a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7GCN5G%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfw9skqHXsVGbWtB6L4mXhwGnBxJsooo9fMWBsogZ1ugIhAL9RbMI6P%2BRpXbXUc7CrSC63IsPN6WXpqq0wF5Au%2BEmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjtD3YwTXGehXsSvcq3APje3LabaeM5yUGp%2Bh%2Bzv%2BkjvzU%2BDSVtCviP0PxGYJKcGgCRuwbbGudSiCf%2FZDxg0r97l4gFWccdR%2BaJ9RUjsu00IPZfNa8Xk0gpeLqboLlxBk2KBhOhUat6aEm%2FNlg%2Fq5mx%2FmcjX7ESpiUkYT9Zg1P%2Fr6%2FOffxLP7CeprljWf%2BEUaYZAm5TrXTKoGrromLV3sTeCtqfQ%2F0nbaFYHZu3AzX3qfT%2BePfoof3%2Fc7lFgtnufUjIHl9xLfWsRmPo4cbQzQDxdCdSleQYhvjUvekdv3dA2A363AT8pDEE9xCQOE%2BMFoh5ap4DklCcTSQOfwYOWf4NBFAud8UdMBVik%2FoZhbKnyFKOLqqxzK2bM00fjOvDSxqg9L5P2F2%2Fj%2F7FsJ4aO0rveyDpWcs%2Fr7xvRJoLjiv6EEDX4oTxaOE6hrdzbShEMrf49E1nmnxumWWC2uBTliVwmlWTepRoVZyErP6Vi%2FUEYcIO7e6jE7dYpqDTml5s8i9RCgFiUfQAkWHvxhOirbWDXCkkAmHlbFZRBv4b7YGhzAhPAmmK2zJwLJexFhkfm8TEUysVG0LRxmnJobeY03isj3GVYy5b975mgKIF73RXgdNv4nEbvEaAevsVcZtgsW3y3KNv%2Bjy6cmhEDCBsYa%2BBjqkAQn%2FVANPyk0gQtPskswjD9p%2Fb72MjqVBhRpxung2vPQGgvcmlJh0WE7t%2Fx1LjcDlPqdmSF%2B3Zf5TYuavhu%2BeVfNVLyLNn8Is5ARFd7pEch9GEf5YH7Vn4k9Y26N0ONrcQnhbIDGG51Gb8afJ5IQo0kDlNBWNgHaG7kor0rZfq6XfqWzS6PYLK83K8gBPQxNRHpY%2FgwijlyF0jdf89Ko6SEXCK3BD&X-Amz-Signature=75b769f199ce883e304c3d4c67c547cc5d8454968ee590972cc324782ad4b32f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
