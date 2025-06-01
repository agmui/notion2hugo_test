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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFWY55V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDUfjfeqhUclOxnGA7vDDDrCWL4UsFs7Na3YxtXwjdQrAiEA4175TJO6lCwhfWrftLjyHGG18rX4EBKlUYUhk98ppQoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2mRijV9Y7rtVMpSrcAxiJLtPZhKm3KiDq%2BOsVYUEtjCFFe3CvD1BWCTye5g2IKNiZRRICtCsdBtltBqxhCI2Rn8WFxy0B2wr%2FhJ0SeiD0V3iKc6%2BAWA2i%2FwwbfJc%2BmdEZ4wj0SXCLZU65FzBbGS%2FIqgFycEcocxQFJkNNQOHvLSqDPpZPNqw6EM6aY6vNfHkj%2FXfI48B4y82hgqq9Mtg3ZfMjU2v9xjIC8i7ziEwFWiZV5Tzl%2Bw0lDvRDSvEPF%2BRnqZudHy%2BuCoSedWeWQ0pXtP%2BrG2OmJATzm0YIlkl3qxvKE8%2Bycmx3AoYESj6jVKQGG1gJOKGCP%2FD2h18Dm%2B7rTGWJGuwxinfMrk7o43DUJekfidKB7i1bFYzpB6fdzHU0%2BQAFH%2FEZd9e%2B14FrYBkZwt%2BTb0Jq81ls%2B39n3EauVpp9h%2FmlijsAM5bskecSuRhfsNRcipG6ck3I28SQgOg9xKkwohwBZ4Uta4y0VwGL7m8DFkBEVaJ6J3NnJrBvvgk%2FQKnwOFWanYBX1LvJIzicss7rwnHnT3ic10AwfOyoWmsyZ9VCf3TpQDw18zbEZiyOQQ1OwNBIneqiYvHr88gOoiZ8cRb12QFON9xYcCTTjYeg4i0D94EViiJwuVCAzvwyQDuAkv%2FZqqQVMLHe8MEGOqUBXO2zXl8mxPUa4AmV3%2F0%2FwDgS7vy8clLfmQcP%2FbTgxHBKXG%2FZ9OHFS97wpOhcWEUJ2Naxi9LJlHTuCyWV099CK9cDvwKZUqYdrf007PTuSThJq6N%2FeZ8gIqTZF%2FkOq1SxkBO1TsJcVykDrTFw9aWdGi6b5AkmBjjfLXFf%2BPzVLilDutkOFu%2BVOsyKxqEcZe7vkzPYNwzlhAcfIx0cFj1BKcyWWTVl&X-Amz-Signature=14ef22d095b40631c43856c58bac1b3cb2b94aedbccb2c08c407a4e7bc79e130&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFWY55V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDUfjfeqhUclOxnGA7vDDDrCWL4UsFs7Na3YxtXwjdQrAiEA4175TJO6lCwhfWrftLjyHGG18rX4EBKlUYUhk98ppQoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2mRijV9Y7rtVMpSrcAxiJLtPZhKm3KiDq%2BOsVYUEtjCFFe3CvD1BWCTye5g2IKNiZRRICtCsdBtltBqxhCI2Rn8WFxy0B2wr%2FhJ0SeiD0V3iKc6%2BAWA2i%2FwwbfJc%2BmdEZ4wj0SXCLZU65FzBbGS%2FIqgFycEcocxQFJkNNQOHvLSqDPpZPNqw6EM6aY6vNfHkj%2FXfI48B4y82hgqq9Mtg3ZfMjU2v9xjIC8i7ziEwFWiZV5Tzl%2Bw0lDvRDSvEPF%2BRnqZudHy%2BuCoSedWeWQ0pXtP%2BrG2OmJATzm0YIlkl3qxvKE8%2Bycmx3AoYESj6jVKQGG1gJOKGCP%2FD2h18Dm%2B7rTGWJGuwxinfMrk7o43DUJekfidKB7i1bFYzpB6fdzHU0%2BQAFH%2FEZd9e%2B14FrYBkZwt%2BTb0Jq81ls%2B39n3EauVpp9h%2FmlijsAM5bskecSuRhfsNRcipG6ck3I28SQgOg9xKkwohwBZ4Uta4y0VwGL7m8DFkBEVaJ6J3NnJrBvvgk%2FQKnwOFWanYBX1LvJIzicss7rwnHnT3ic10AwfOyoWmsyZ9VCf3TpQDw18zbEZiyOQQ1OwNBIneqiYvHr88gOoiZ8cRb12QFON9xYcCTTjYeg4i0D94EViiJwuVCAzvwyQDuAkv%2FZqqQVMLHe8MEGOqUBXO2zXl8mxPUa4AmV3%2F0%2FwDgS7vy8clLfmQcP%2FbTgxHBKXG%2FZ9OHFS97wpOhcWEUJ2Naxi9LJlHTuCyWV099CK9cDvwKZUqYdrf007PTuSThJq6N%2FeZ8gIqTZF%2FkOq1SxkBO1TsJcVykDrTFw9aWdGi6b5AkmBjjfLXFf%2BPzVLilDutkOFu%2BVOsyKxqEcZe7vkzPYNwzlhAcfIx0cFj1BKcyWWTVl&X-Amz-Signature=c81e90674a787dff71a8c08981e7f089e7d6361f1edf512a1b656cd010b3b2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFWY55V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDUfjfeqhUclOxnGA7vDDDrCWL4UsFs7Na3YxtXwjdQrAiEA4175TJO6lCwhfWrftLjyHGG18rX4EBKlUYUhk98ppQoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2mRijV9Y7rtVMpSrcAxiJLtPZhKm3KiDq%2BOsVYUEtjCFFe3CvD1BWCTye5g2IKNiZRRICtCsdBtltBqxhCI2Rn8WFxy0B2wr%2FhJ0SeiD0V3iKc6%2BAWA2i%2FwwbfJc%2BmdEZ4wj0SXCLZU65FzBbGS%2FIqgFycEcocxQFJkNNQOHvLSqDPpZPNqw6EM6aY6vNfHkj%2FXfI48B4y82hgqq9Mtg3ZfMjU2v9xjIC8i7ziEwFWiZV5Tzl%2Bw0lDvRDSvEPF%2BRnqZudHy%2BuCoSedWeWQ0pXtP%2BrG2OmJATzm0YIlkl3qxvKE8%2Bycmx3AoYESj6jVKQGG1gJOKGCP%2FD2h18Dm%2B7rTGWJGuwxinfMrk7o43DUJekfidKB7i1bFYzpB6fdzHU0%2BQAFH%2FEZd9e%2B14FrYBkZwt%2BTb0Jq81ls%2B39n3EauVpp9h%2FmlijsAM5bskecSuRhfsNRcipG6ck3I28SQgOg9xKkwohwBZ4Uta4y0VwGL7m8DFkBEVaJ6J3NnJrBvvgk%2FQKnwOFWanYBX1LvJIzicss7rwnHnT3ic10AwfOyoWmsyZ9VCf3TpQDw18zbEZiyOQQ1OwNBIneqiYvHr88gOoiZ8cRb12QFON9xYcCTTjYeg4i0D94EViiJwuVCAzvwyQDuAkv%2FZqqQVMLHe8MEGOqUBXO2zXl8mxPUa4AmV3%2F0%2FwDgS7vy8clLfmQcP%2FbTgxHBKXG%2FZ9OHFS97wpOhcWEUJ2Naxi9LJlHTuCyWV099CK9cDvwKZUqYdrf007PTuSThJq6N%2FeZ8gIqTZF%2FkOq1SxkBO1TsJcVykDrTFw9aWdGi6b5AkmBjjfLXFf%2BPzVLilDutkOFu%2BVOsyKxqEcZe7vkzPYNwzlhAcfIx0cFj1BKcyWWTVl&X-Amz-Signature=d9699b7e8355502df77aeb5e1ff960511bf5bc19d568fffda1c9d17eabe9a7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFWY55V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDUfjfeqhUclOxnGA7vDDDrCWL4UsFs7Na3YxtXwjdQrAiEA4175TJO6lCwhfWrftLjyHGG18rX4EBKlUYUhk98ppQoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2mRijV9Y7rtVMpSrcAxiJLtPZhKm3KiDq%2BOsVYUEtjCFFe3CvD1BWCTye5g2IKNiZRRICtCsdBtltBqxhCI2Rn8WFxy0B2wr%2FhJ0SeiD0V3iKc6%2BAWA2i%2FwwbfJc%2BmdEZ4wj0SXCLZU65FzBbGS%2FIqgFycEcocxQFJkNNQOHvLSqDPpZPNqw6EM6aY6vNfHkj%2FXfI48B4y82hgqq9Mtg3ZfMjU2v9xjIC8i7ziEwFWiZV5Tzl%2Bw0lDvRDSvEPF%2BRnqZudHy%2BuCoSedWeWQ0pXtP%2BrG2OmJATzm0YIlkl3qxvKE8%2Bycmx3AoYESj6jVKQGG1gJOKGCP%2FD2h18Dm%2B7rTGWJGuwxinfMrk7o43DUJekfidKB7i1bFYzpB6fdzHU0%2BQAFH%2FEZd9e%2B14FrYBkZwt%2BTb0Jq81ls%2B39n3EauVpp9h%2FmlijsAM5bskecSuRhfsNRcipG6ck3I28SQgOg9xKkwohwBZ4Uta4y0VwGL7m8DFkBEVaJ6J3NnJrBvvgk%2FQKnwOFWanYBX1LvJIzicss7rwnHnT3ic10AwfOyoWmsyZ9VCf3TpQDw18zbEZiyOQQ1OwNBIneqiYvHr88gOoiZ8cRb12QFON9xYcCTTjYeg4i0D94EViiJwuVCAzvwyQDuAkv%2FZqqQVMLHe8MEGOqUBXO2zXl8mxPUa4AmV3%2F0%2FwDgS7vy8clLfmQcP%2FbTgxHBKXG%2FZ9OHFS97wpOhcWEUJ2Naxi9LJlHTuCyWV099CK9cDvwKZUqYdrf007PTuSThJq6N%2FeZ8gIqTZF%2FkOq1SxkBO1TsJcVykDrTFw9aWdGi6b5AkmBjjfLXFf%2BPzVLilDutkOFu%2BVOsyKxqEcZe7vkzPYNwzlhAcfIx0cFj1BKcyWWTVl&X-Amz-Signature=e1067204e68dc7ceae3256c74f88d4180bfeefe03db7f66f0c2ce5d1886a6086&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFWY55V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDUfjfeqhUclOxnGA7vDDDrCWL4UsFs7Na3YxtXwjdQrAiEA4175TJO6lCwhfWrftLjyHGG18rX4EBKlUYUhk98ppQoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2mRijV9Y7rtVMpSrcAxiJLtPZhKm3KiDq%2BOsVYUEtjCFFe3CvD1BWCTye5g2IKNiZRRICtCsdBtltBqxhCI2Rn8WFxy0B2wr%2FhJ0SeiD0V3iKc6%2BAWA2i%2FwwbfJc%2BmdEZ4wj0SXCLZU65FzBbGS%2FIqgFycEcocxQFJkNNQOHvLSqDPpZPNqw6EM6aY6vNfHkj%2FXfI48B4y82hgqq9Mtg3ZfMjU2v9xjIC8i7ziEwFWiZV5Tzl%2Bw0lDvRDSvEPF%2BRnqZudHy%2BuCoSedWeWQ0pXtP%2BrG2OmJATzm0YIlkl3qxvKE8%2Bycmx3AoYESj6jVKQGG1gJOKGCP%2FD2h18Dm%2B7rTGWJGuwxinfMrk7o43DUJekfidKB7i1bFYzpB6fdzHU0%2BQAFH%2FEZd9e%2B14FrYBkZwt%2BTb0Jq81ls%2B39n3EauVpp9h%2FmlijsAM5bskecSuRhfsNRcipG6ck3I28SQgOg9xKkwohwBZ4Uta4y0VwGL7m8DFkBEVaJ6J3NnJrBvvgk%2FQKnwOFWanYBX1LvJIzicss7rwnHnT3ic10AwfOyoWmsyZ9VCf3TpQDw18zbEZiyOQQ1OwNBIneqiYvHr88gOoiZ8cRb12QFON9xYcCTTjYeg4i0D94EViiJwuVCAzvwyQDuAkv%2FZqqQVMLHe8MEGOqUBXO2zXl8mxPUa4AmV3%2F0%2FwDgS7vy8clLfmQcP%2FbTgxHBKXG%2FZ9OHFS97wpOhcWEUJ2Naxi9LJlHTuCyWV099CK9cDvwKZUqYdrf007PTuSThJq6N%2FeZ8gIqTZF%2FkOq1SxkBO1TsJcVykDrTFw9aWdGi6b5AkmBjjfLXFf%2BPzVLilDutkOFu%2BVOsyKxqEcZe7vkzPYNwzlhAcfIx0cFj1BKcyWWTVl&X-Amz-Signature=dcf7c12dee3d36719e54043392f097a666b4ca295708bebd2e11dc3d3ddec12c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFWY55V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDUfjfeqhUclOxnGA7vDDDrCWL4UsFs7Na3YxtXwjdQrAiEA4175TJO6lCwhfWrftLjyHGG18rX4EBKlUYUhk98ppQoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2mRijV9Y7rtVMpSrcAxiJLtPZhKm3KiDq%2BOsVYUEtjCFFe3CvD1BWCTye5g2IKNiZRRICtCsdBtltBqxhCI2Rn8WFxy0B2wr%2FhJ0SeiD0V3iKc6%2BAWA2i%2FwwbfJc%2BmdEZ4wj0SXCLZU65FzBbGS%2FIqgFycEcocxQFJkNNQOHvLSqDPpZPNqw6EM6aY6vNfHkj%2FXfI48B4y82hgqq9Mtg3ZfMjU2v9xjIC8i7ziEwFWiZV5Tzl%2Bw0lDvRDSvEPF%2BRnqZudHy%2BuCoSedWeWQ0pXtP%2BrG2OmJATzm0YIlkl3qxvKE8%2Bycmx3AoYESj6jVKQGG1gJOKGCP%2FD2h18Dm%2B7rTGWJGuwxinfMrk7o43DUJekfidKB7i1bFYzpB6fdzHU0%2BQAFH%2FEZd9e%2B14FrYBkZwt%2BTb0Jq81ls%2B39n3EauVpp9h%2FmlijsAM5bskecSuRhfsNRcipG6ck3I28SQgOg9xKkwohwBZ4Uta4y0VwGL7m8DFkBEVaJ6J3NnJrBvvgk%2FQKnwOFWanYBX1LvJIzicss7rwnHnT3ic10AwfOyoWmsyZ9VCf3TpQDw18zbEZiyOQQ1OwNBIneqiYvHr88gOoiZ8cRb12QFON9xYcCTTjYeg4i0D94EViiJwuVCAzvwyQDuAkv%2FZqqQVMLHe8MEGOqUBXO2zXl8mxPUa4AmV3%2F0%2FwDgS7vy8clLfmQcP%2FbTgxHBKXG%2FZ9OHFS97wpOhcWEUJ2Naxi9LJlHTuCyWV099CK9cDvwKZUqYdrf007PTuSThJq6N%2FeZ8gIqTZF%2FkOq1SxkBO1TsJcVykDrTFw9aWdGi6b5AkmBjjfLXFf%2BPzVLilDutkOFu%2BVOsyKxqEcZe7vkzPYNwzlhAcfIx0cFj1BKcyWWTVl&X-Amz-Signature=b3d11cdc7a16a9a239f765d51e20ce34537e4d12f8bc9897552b21423cceb339&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFWY55V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDUfjfeqhUclOxnGA7vDDDrCWL4UsFs7Na3YxtXwjdQrAiEA4175TJO6lCwhfWrftLjyHGG18rX4EBKlUYUhk98ppQoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2mRijV9Y7rtVMpSrcAxiJLtPZhKm3KiDq%2BOsVYUEtjCFFe3CvD1BWCTye5g2IKNiZRRICtCsdBtltBqxhCI2Rn8WFxy0B2wr%2FhJ0SeiD0V3iKc6%2BAWA2i%2FwwbfJc%2BmdEZ4wj0SXCLZU65FzBbGS%2FIqgFycEcocxQFJkNNQOHvLSqDPpZPNqw6EM6aY6vNfHkj%2FXfI48B4y82hgqq9Mtg3ZfMjU2v9xjIC8i7ziEwFWiZV5Tzl%2Bw0lDvRDSvEPF%2BRnqZudHy%2BuCoSedWeWQ0pXtP%2BrG2OmJATzm0YIlkl3qxvKE8%2Bycmx3AoYESj6jVKQGG1gJOKGCP%2FD2h18Dm%2B7rTGWJGuwxinfMrk7o43DUJekfidKB7i1bFYzpB6fdzHU0%2BQAFH%2FEZd9e%2B14FrYBkZwt%2BTb0Jq81ls%2B39n3EauVpp9h%2FmlijsAM5bskecSuRhfsNRcipG6ck3I28SQgOg9xKkwohwBZ4Uta4y0VwGL7m8DFkBEVaJ6J3NnJrBvvgk%2FQKnwOFWanYBX1LvJIzicss7rwnHnT3ic10AwfOyoWmsyZ9VCf3TpQDw18zbEZiyOQQ1OwNBIneqiYvHr88gOoiZ8cRb12QFON9xYcCTTjYeg4i0D94EViiJwuVCAzvwyQDuAkv%2FZqqQVMLHe8MEGOqUBXO2zXl8mxPUa4AmV3%2F0%2FwDgS7vy8clLfmQcP%2FbTgxHBKXG%2FZ9OHFS97wpOhcWEUJ2Naxi9LJlHTuCyWV099CK9cDvwKZUqYdrf007PTuSThJq6N%2FeZ8gIqTZF%2FkOq1SxkBO1TsJcVykDrTFw9aWdGi6b5AkmBjjfLXFf%2BPzVLilDutkOFu%2BVOsyKxqEcZe7vkzPYNwzlhAcfIx0cFj1BKcyWWTVl&X-Amz-Signature=fe6cffb71872ffa4c26fcbbca0e16f51b91d9aa537c809429047ce41d597b0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
