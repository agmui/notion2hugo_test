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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=6fffca449df06a169ec904de001d91075a7ed4072a2f48d8d805a3384d5b036a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=a8cabfcf923a2ae4c8324f8da56b85a0cd49216c63ad6d2ed67785a0a6dfd08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=22bbb479da633e9994cc26303e7dda506cf3fff4823e0fb32c0c7bae376a6ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=4c87079548c584a8e8af677593b75b84d46b3c1e6578b0b12496f83e16e10370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=1cd57ed0889ea2ebddad7b12cefc51b26213fa726372adc64b5db4034e0d1983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=74cc16d94979d3d21d2df60f60366837ed6abc86119f2aa64b7a66a32ad61ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRYUSW3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHbNqpEpBvyR0%2BQBao0Na%2FYlHNzvSKs%2F6FivDum1PRMQAiAv5rgdVAOjeemREWmu6%2BN0eqssP5vdo5dA3eNKqga4fSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlnOoZVggabmXHMXIKtwD7unowXA0O6tYxqKERFBY%2B1%2Fb2Kc30h0kXiHLaRKAq3b763CnPodOkmAkgHSfyNC%2FYkrLf46nAvCZ1%2BFoLBSmeiUzxo7a%2FTuvxCp5VIlqZecpv6c0p%2F4gJAcajoBqQQrCAZHtnZJS3VV2RCGceKpN2%2BMyttFNyi7z0ZviOWzMz5WgM8ShK5%2F9U7a8FgAF3m1YcCjjGjkCp510N9xT0NBI25NFhRSZRQisUXCr%2BbWu53pJjON7lJ1cM8Qii1HLc8ZDvW2tnfacg8HgCKEONJYZDCbKA%2FB0skq5JJ%2BuQK6srVJQpeHESWkQ1Jw9cuv1za6wMIIh%2FaEIpQZlvvJrwVxvaWfVlK8UKvyz2rDyrozo3ILkIMhgMkUvtjEXK%2FvCyXVVbXPKL8mVvVRxy36X3kXpHhUfQgPMIimKcE%2FiP%2F8zIl5IF3HY17uwsqwXVVkM%2Fm89mkpqkEzOdhpjQ%2F5RnhHvr%2F%2Bsyifmumpg67bd8bXXVbffN0XHTi9sDpzYIXU0toDLVnnltnGCYC%2F%2FGeYDQsUZjVxL58iBft3CWoA2pteOgSPXmgEdiiVfryudWL4BlioTKdzcRnS8UlwZlxsL9Qc%2Fs23ZFAzkpOyE23QVwp%2BZ7w%2FNrjB6qkVaO73EJo8wt8vLxAY6pgGtFhWfnr%2Bi8kR7Ix3ewm%2FKSkQiiiebl9tSpKq1euxnIOCLORi8Nqf3YSjTjdg5KU6BL1segwNelgwEA2ydwP1svauCxhw3eL9RYOZcyD4iNu3TEYce6mzgGgtOHmqRcTiNlqicZQA%2BOsmWIL0ZbV2yuY4XkiecyWzR1%2FtypZvSlsEEh5aJIqDcsbebUZSEolztd4Eh3JebD2mZirNnm69rm4ulYhiA&X-Amz-Signature=8cde9df6b8f5666e9142ffe301a74a202613f268f80c665b9c8ad17f9c54cff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
