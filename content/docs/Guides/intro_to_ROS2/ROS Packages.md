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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UBXKCS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASR6rLdA6%2FDu6CoIPFEi7wIxkRcXSFSBWVwban5aleyAiBLqPi8VItGtv%2BZUz0lEW6aO5Q%2F80InUSY90ASao3Vg%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdBFWol1uf3P9041qKtwDQAW6YAfIcP5%2F1NrqWjMiD7eETJE8o%2BtRgKrRLVYXgXlxnnklRfXVC5P81snNtMLjuTuk%2FaeCebrHvd7B7E1Zb9V6qCQ0KgQiSNNrlKxlNvMbJKSw%2FHtxIx7cXMh6Dt9CxrUVl6uMyiGv9tXozuIS7f2kqs%2BCqUXNIQfNwRPnQr%2FZTfSKmtgS70Vfmi1X7mjYmG3H1WQd1inKNrHJTNxEmwVmXlXLMbbNMaZpMDpaNhStkHr5BBg7Ftn5ddt12keVeL7fPDqqajfrSa1dXSQYB2ohVLcp2e%2BXsDitCN3BBdAWC%2FARaOfmoMIN9qaRmZqq0qZHECV24fuo1fBKr%2B1f%2FQrgwMSRZLGWnLFsLdapK5n%2BzVvP04kk0TiKZTL2ntGEUunvPi7Z18sY023HwLbpmS2em0Eg3CD%2F8NwBaMV3qQFle%2BZ9Q%2FWg8USnvihv1Oz33A9gwb3qwCwuzwRfxr0CZJyF6AxG7fEGfFAxek84AHnxnFEG%2BUrUUNykhRhcA7SRczsI7SrQdLKbT5CobJ9zhKVbETgnJs5ClHAYwWl9elWc6bboJrhJkBlnyuKjwerjYkVknTJnbS8pJgscswN7XucXwanPIkGfSQO10rj71F5iqPTY4%2FSDrWkdH5owzeWEwgY6pgHh3s5HlkvxAYFZa798Dwt05zG8hwia9onwPg712hcmjiXrtjlZ0ZneuhiV4MBrDXJIz9XNYWBuIIQ0veW%2BISGTtAEP2Y5UhArS6TOuGF3Y2PKFQpHbJkVxRyMJ2TmUZK4cWOWJXR7KQrAJHc9bL0JRh5rQdgossk%2BwEw5RoCr7%2FqXP7hP0L4qZP3x7b1jmcznAKqeLZfsmEymsCbLNZBEWsthRh4XF&X-Amz-Signature=e3986ce11eefc0c557eb7815e21b561d21980e384fba198024047ae7edd20fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UBXKCS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASR6rLdA6%2FDu6CoIPFEi7wIxkRcXSFSBWVwban5aleyAiBLqPi8VItGtv%2BZUz0lEW6aO5Q%2F80InUSY90ASao3Vg%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdBFWol1uf3P9041qKtwDQAW6YAfIcP5%2F1NrqWjMiD7eETJE8o%2BtRgKrRLVYXgXlxnnklRfXVC5P81snNtMLjuTuk%2FaeCebrHvd7B7E1Zb9V6qCQ0KgQiSNNrlKxlNvMbJKSw%2FHtxIx7cXMh6Dt9CxrUVl6uMyiGv9tXozuIS7f2kqs%2BCqUXNIQfNwRPnQr%2FZTfSKmtgS70Vfmi1X7mjYmG3H1WQd1inKNrHJTNxEmwVmXlXLMbbNMaZpMDpaNhStkHr5BBg7Ftn5ddt12keVeL7fPDqqajfrSa1dXSQYB2ohVLcp2e%2BXsDitCN3BBdAWC%2FARaOfmoMIN9qaRmZqq0qZHECV24fuo1fBKr%2B1f%2FQrgwMSRZLGWnLFsLdapK5n%2BzVvP04kk0TiKZTL2ntGEUunvPi7Z18sY023HwLbpmS2em0Eg3CD%2F8NwBaMV3qQFle%2BZ9Q%2FWg8USnvihv1Oz33A9gwb3qwCwuzwRfxr0CZJyF6AxG7fEGfFAxek84AHnxnFEG%2BUrUUNykhRhcA7SRczsI7SrQdLKbT5CobJ9zhKVbETgnJs5ClHAYwWl9elWc6bboJrhJkBlnyuKjwerjYkVknTJnbS8pJgscswN7XucXwanPIkGfSQO10rj71F5iqPTY4%2FSDrWkdH5owzeWEwgY6pgHh3s5HlkvxAYFZa798Dwt05zG8hwia9onwPg712hcmjiXrtjlZ0ZneuhiV4MBrDXJIz9XNYWBuIIQ0veW%2BISGTtAEP2Y5UhArS6TOuGF3Y2PKFQpHbJkVxRyMJ2TmUZK4cWOWJXR7KQrAJHc9bL0JRh5rQdgossk%2BwEw5RoCr7%2FqXP7hP0L4qZP3x7b1jmcznAKqeLZfsmEymsCbLNZBEWsthRh4XF&X-Amz-Signature=2eb4b91b4679ada3436d59473074a9144873fcb487a5e7d9e6b269db35aa398b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UBXKCS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASR6rLdA6%2FDu6CoIPFEi7wIxkRcXSFSBWVwban5aleyAiBLqPi8VItGtv%2BZUz0lEW6aO5Q%2F80InUSY90ASao3Vg%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdBFWol1uf3P9041qKtwDQAW6YAfIcP5%2F1NrqWjMiD7eETJE8o%2BtRgKrRLVYXgXlxnnklRfXVC5P81snNtMLjuTuk%2FaeCebrHvd7B7E1Zb9V6qCQ0KgQiSNNrlKxlNvMbJKSw%2FHtxIx7cXMh6Dt9CxrUVl6uMyiGv9tXozuIS7f2kqs%2BCqUXNIQfNwRPnQr%2FZTfSKmtgS70Vfmi1X7mjYmG3H1WQd1inKNrHJTNxEmwVmXlXLMbbNMaZpMDpaNhStkHr5BBg7Ftn5ddt12keVeL7fPDqqajfrSa1dXSQYB2ohVLcp2e%2BXsDitCN3BBdAWC%2FARaOfmoMIN9qaRmZqq0qZHECV24fuo1fBKr%2B1f%2FQrgwMSRZLGWnLFsLdapK5n%2BzVvP04kk0TiKZTL2ntGEUunvPi7Z18sY023HwLbpmS2em0Eg3CD%2F8NwBaMV3qQFle%2BZ9Q%2FWg8USnvihv1Oz33A9gwb3qwCwuzwRfxr0CZJyF6AxG7fEGfFAxek84AHnxnFEG%2BUrUUNykhRhcA7SRczsI7SrQdLKbT5CobJ9zhKVbETgnJs5ClHAYwWl9elWc6bboJrhJkBlnyuKjwerjYkVknTJnbS8pJgscswN7XucXwanPIkGfSQO10rj71F5iqPTY4%2FSDrWkdH5owzeWEwgY6pgHh3s5HlkvxAYFZa798Dwt05zG8hwia9onwPg712hcmjiXrtjlZ0ZneuhiV4MBrDXJIz9XNYWBuIIQ0veW%2BISGTtAEP2Y5UhArS6TOuGF3Y2PKFQpHbJkVxRyMJ2TmUZK4cWOWJXR7KQrAJHc9bL0JRh5rQdgossk%2BwEw5RoCr7%2FqXP7hP0L4qZP3x7b1jmcznAKqeLZfsmEymsCbLNZBEWsthRh4XF&X-Amz-Signature=43c3864271d141605b5b7174fa5839dd55deafc525afc5e7588256d9a87a663f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UBXKCS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASR6rLdA6%2FDu6CoIPFEi7wIxkRcXSFSBWVwban5aleyAiBLqPi8VItGtv%2BZUz0lEW6aO5Q%2F80InUSY90ASao3Vg%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdBFWol1uf3P9041qKtwDQAW6YAfIcP5%2F1NrqWjMiD7eETJE8o%2BtRgKrRLVYXgXlxnnklRfXVC5P81snNtMLjuTuk%2FaeCebrHvd7B7E1Zb9V6qCQ0KgQiSNNrlKxlNvMbJKSw%2FHtxIx7cXMh6Dt9CxrUVl6uMyiGv9tXozuIS7f2kqs%2BCqUXNIQfNwRPnQr%2FZTfSKmtgS70Vfmi1X7mjYmG3H1WQd1inKNrHJTNxEmwVmXlXLMbbNMaZpMDpaNhStkHr5BBg7Ftn5ddt12keVeL7fPDqqajfrSa1dXSQYB2ohVLcp2e%2BXsDitCN3BBdAWC%2FARaOfmoMIN9qaRmZqq0qZHECV24fuo1fBKr%2B1f%2FQrgwMSRZLGWnLFsLdapK5n%2BzVvP04kk0TiKZTL2ntGEUunvPi7Z18sY023HwLbpmS2em0Eg3CD%2F8NwBaMV3qQFle%2BZ9Q%2FWg8USnvihv1Oz33A9gwb3qwCwuzwRfxr0CZJyF6AxG7fEGfFAxek84AHnxnFEG%2BUrUUNykhRhcA7SRczsI7SrQdLKbT5CobJ9zhKVbETgnJs5ClHAYwWl9elWc6bboJrhJkBlnyuKjwerjYkVknTJnbS8pJgscswN7XucXwanPIkGfSQO10rj71F5iqPTY4%2FSDrWkdH5owzeWEwgY6pgHh3s5HlkvxAYFZa798Dwt05zG8hwia9onwPg712hcmjiXrtjlZ0ZneuhiV4MBrDXJIz9XNYWBuIIQ0veW%2BISGTtAEP2Y5UhArS6TOuGF3Y2PKFQpHbJkVxRyMJ2TmUZK4cWOWJXR7KQrAJHc9bL0JRh5rQdgossk%2BwEw5RoCr7%2FqXP7hP0L4qZP3x7b1jmcznAKqeLZfsmEymsCbLNZBEWsthRh4XF&X-Amz-Signature=b2d829a7fab282ae3e0424d7852d549bdfde10354e2ad966c43ebb0080d6b38a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UBXKCS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASR6rLdA6%2FDu6CoIPFEi7wIxkRcXSFSBWVwban5aleyAiBLqPi8VItGtv%2BZUz0lEW6aO5Q%2F80InUSY90ASao3Vg%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdBFWol1uf3P9041qKtwDQAW6YAfIcP5%2F1NrqWjMiD7eETJE8o%2BtRgKrRLVYXgXlxnnklRfXVC5P81snNtMLjuTuk%2FaeCebrHvd7B7E1Zb9V6qCQ0KgQiSNNrlKxlNvMbJKSw%2FHtxIx7cXMh6Dt9CxrUVl6uMyiGv9tXozuIS7f2kqs%2BCqUXNIQfNwRPnQr%2FZTfSKmtgS70Vfmi1X7mjYmG3H1WQd1inKNrHJTNxEmwVmXlXLMbbNMaZpMDpaNhStkHr5BBg7Ftn5ddt12keVeL7fPDqqajfrSa1dXSQYB2ohVLcp2e%2BXsDitCN3BBdAWC%2FARaOfmoMIN9qaRmZqq0qZHECV24fuo1fBKr%2B1f%2FQrgwMSRZLGWnLFsLdapK5n%2BzVvP04kk0TiKZTL2ntGEUunvPi7Z18sY023HwLbpmS2em0Eg3CD%2F8NwBaMV3qQFle%2BZ9Q%2FWg8USnvihv1Oz33A9gwb3qwCwuzwRfxr0CZJyF6AxG7fEGfFAxek84AHnxnFEG%2BUrUUNykhRhcA7SRczsI7SrQdLKbT5CobJ9zhKVbETgnJs5ClHAYwWl9elWc6bboJrhJkBlnyuKjwerjYkVknTJnbS8pJgscswN7XucXwanPIkGfSQO10rj71F5iqPTY4%2FSDrWkdH5owzeWEwgY6pgHh3s5HlkvxAYFZa798Dwt05zG8hwia9onwPg712hcmjiXrtjlZ0ZneuhiV4MBrDXJIz9XNYWBuIIQ0veW%2BISGTtAEP2Y5UhArS6TOuGF3Y2PKFQpHbJkVxRyMJ2TmUZK4cWOWJXR7KQrAJHc9bL0JRh5rQdgossk%2BwEw5RoCr7%2FqXP7hP0L4qZP3x7b1jmcznAKqeLZfsmEymsCbLNZBEWsthRh4XF&X-Amz-Signature=57da68c30c7ff777df27ee03b07d2023d0edd439e2414b97cdbbeca119ccda44&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UBXKCS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASR6rLdA6%2FDu6CoIPFEi7wIxkRcXSFSBWVwban5aleyAiBLqPi8VItGtv%2BZUz0lEW6aO5Q%2F80InUSY90ASao3Vg%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdBFWol1uf3P9041qKtwDQAW6YAfIcP5%2F1NrqWjMiD7eETJE8o%2BtRgKrRLVYXgXlxnnklRfXVC5P81snNtMLjuTuk%2FaeCebrHvd7B7E1Zb9V6qCQ0KgQiSNNrlKxlNvMbJKSw%2FHtxIx7cXMh6Dt9CxrUVl6uMyiGv9tXozuIS7f2kqs%2BCqUXNIQfNwRPnQr%2FZTfSKmtgS70Vfmi1X7mjYmG3H1WQd1inKNrHJTNxEmwVmXlXLMbbNMaZpMDpaNhStkHr5BBg7Ftn5ddt12keVeL7fPDqqajfrSa1dXSQYB2ohVLcp2e%2BXsDitCN3BBdAWC%2FARaOfmoMIN9qaRmZqq0qZHECV24fuo1fBKr%2B1f%2FQrgwMSRZLGWnLFsLdapK5n%2BzVvP04kk0TiKZTL2ntGEUunvPi7Z18sY023HwLbpmS2em0Eg3CD%2F8NwBaMV3qQFle%2BZ9Q%2FWg8USnvihv1Oz33A9gwb3qwCwuzwRfxr0CZJyF6AxG7fEGfFAxek84AHnxnFEG%2BUrUUNykhRhcA7SRczsI7SrQdLKbT5CobJ9zhKVbETgnJs5ClHAYwWl9elWc6bboJrhJkBlnyuKjwerjYkVknTJnbS8pJgscswN7XucXwanPIkGfSQO10rj71F5iqPTY4%2FSDrWkdH5owzeWEwgY6pgHh3s5HlkvxAYFZa798Dwt05zG8hwia9onwPg712hcmjiXrtjlZ0ZneuhiV4MBrDXJIz9XNYWBuIIQ0veW%2BISGTtAEP2Y5UhArS6TOuGF3Y2PKFQpHbJkVxRyMJ2TmUZK4cWOWJXR7KQrAJHc9bL0JRh5rQdgossk%2BwEw5RoCr7%2FqXP7hP0L4qZP3x7b1jmcznAKqeLZfsmEymsCbLNZBEWsthRh4XF&X-Amz-Signature=54188e880c967e9c4bde8e725e18c96e4d94ee882c6491bed1188eab53c52eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UBXKCS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASR6rLdA6%2FDu6CoIPFEi7wIxkRcXSFSBWVwban5aleyAiBLqPi8VItGtv%2BZUz0lEW6aO5Q%2F80InUSY90ASao3Vg%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdBFWol1uf3P9041qKtwDQAW6YAfIcP5%2F1NrqWjMiD7eETJE8o%2BtRgKrRLVYXgXlxnnklRfXVC5P81snNtMLjuTuk%2FaeCebrHvd7B7E1Zb9V6qCQ0KgQiSNNrlKxlNvMbJKSw%2FHtxIx7cXMh6Dt9CxrUVl6uMyiGv9tXozuIS7f2kqs%2BCqUXNIQfNwRPnQr%2FZTfSKmtgS70Vfmi1X7mjYmG3H1WQd1inKNrHJTNxEmwVmXlXLMbbNMaZpMDpaNhStkHr5BBg7Ftn5ddt12keVeL7fPDqqajfrSa1dXSQYB2ohVLcp2e%2BXsDitCN3BBdAWC%2FARaOfmoMIN9qaRmZqq0qZHECV24fuo1fBKr%2B1f%2FQrgwMSRZLGWnLFsLdapK5n%2BzVvP04kk0TiKZTL2ntGEUunvPi7Z18sY023HwLbpmS2em0Eg3CD%2F8NwBaMV3qQFle%2BZ9Q%2FWg8USnvihv1Oz33A9gwb3qwCwuzwRfxr0CZJyF6AxG7fEGfFAxek84AHnxnFEG%2BUrUUNykhRhcA7SRczsI7SrQdLKbT5CobJ9zhKVbETgnJs5ClHAYwWl9elWc6bboJrhJkBlnyuKjwerjYkVknTJnbS8pJgscswN7XucXwanPIkGfSQO10rj71F5iqPTY4%2FSDrWkdH5owzeWEwgY6pgHh3s5HlkvxAYFZa798Dwt05zG8hwia9onwPg712hcmjiXrtjlZ0ZneuhiV4MBrDXJIz9XNYWBuIIQ0veW%2BISGTtAEP2Y5UhArS6TOuGF3Y2PKFQpHbJkVxRyMJ2TmUZK4cWOWJXR7KQrAJHc9bL0JRh5rQdgossk%2BwEw5RoCr7%2FqXP7hP0L4qZP3x7b1jmcznAKqeLZfsmEymsCbLNZBEWsthRh4XF&X-Amz-Signature=7c171b15fbce72b662ff3c0595d1fdb257cd3c42bdafe54506ef85b1f54ad84d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
