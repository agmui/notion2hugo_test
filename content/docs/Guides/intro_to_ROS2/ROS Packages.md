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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTIP7C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvomnrXK9MKY9b5MngB6EPl2h2Wrtl2i7ggLddMEFdVAiAK0iumdW%2BPX8iIOPsUsfMqokBJ1dA%2BDy5n9KRbIJVpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM693XN6ZeRTbJzBUiKtwDTrb134zFXwrhwFglIIj9sszfiOlXLVykNfqQeqYzPjR3HYhcxjMS6EcG%2Fb%2FL631AZHjDePstmu52oIuHlPz4H0ZByAo5D7TDZuhFzDKeSYvO95mdUH6qamBPDbdTmVCIv0zbPw9z9GrkX%2B3AyG%2BCjXgQ%2FWebDeZz8%2FW9Uyo4xPmfiEva38wNMcwYM3sorOYY19ou58yWTAMfskT3PioohNtUk%2BoC1mXz6kgpnh1%2FyZj1AN%2FTF293RlY5oILFZ2ilabRu79TVfdU1kOR9eoJfC802TcTlanSwHJlKoAPMeLiA1F9N9LyMa1XnkE6xgY%2FAnE0YumSLE0wDAZkzHj%2BEgIAuQo7dSggSrJlUM3cqlg%2BSTG5Z10idh3f5GnNuiXmVUrzBcyVw5MVFQGsuKeYO8DzGx9YjrfPNcJ4sVoaVvEobfudTN0qlawkzcKaKXQYzOCCIAlGtELN8orvPCp%2BerdXyYaFa0OfS6OaKmbEmgL0RmhCufRwgFVE8K3A50Lw0nbK2ft7eXZvbVjA2LfPfiunvL7DPhxwOLy88hM%2FgckS2OEba81PVEZIoABlbpkbVQxM%2B90QA2VPafJjZpIGwYnogM5lZ4nXu160pWnoSYm0pkjdsJAtOQM8pBM0wn7LgywY6pgHk%2BTw18T6oBa2g3foaz%2BAGIP3R6LwZOAbz7A4kAxxqKHB%2BNJ68%2BSiFvRtLBadOSBbddy0VeAOPPu3kepEaCW7gO2KfiUZuZLyrzNZwAVAEvb0BhUNxtBeO8TA2hoAeK8sSmkRL1xO5cAdx4Ohvg1L6DLZ99QhHTnkfFysa6gWc26rW8TIfFZufB7xlovQJ1ZI13wyJh7X%2F7vDOPpOc5%2BXXQYhqbkvl&X-Amz-Signature=ab90c496121aaa2850e2579f58da5d2b3667f069e19fc76e3fa474c95130ef34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTIP7C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvomnrXK9MKY9b5MngB6EPl2h2Wrtl2i7ggLddMEFdVAiAK0iumdW%2BPX8iIOPsUsfMqokBJ1dA%2BDy5n9KRbIJVpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM693XN6ZeRTbJzBUiKtwDTrb134zFXwrhwFglIIj9sszfiOlXLVykNfqQeqYzPjR3HYhcxjMS6EcG%2Fb%2FL631AZHjDePstmu52oIuHlPz4H0ZByAo5D7TDZuhFzDKeSYvO95mdUH6qamBPDbdTmVCIv0zbPw9z9GrkX%2B3AyG%2BCjXgQ%2FWebDeZz8%2FW9Uyo4xPmfiEva38wNMcwYM3sorOYY19ou58yWTAMfskT3PioohNtUk%2BoC1mXz6kgpnh1%2FyZj1AN%2FTF293RlY5oILFZ2ilabRu79TVfdU1kOR9eoJfC802TcTlanSwHJlKoAPMeLiA1F9N9LyMa1XnkE6xgY%2FAnE0YumSLE0wDAZkzHj%2BEgIAuQo7dSggSrJlUM3cqlg%2BSTG5Z10idh3f5GnNuiXmVUrzBcyVw5MVFQGsuKeYO8DzGx9YjrfPNcJ4sVoaVvEobfudTN0qlawkzcKaKXQYzOCCIAlGtELN8orvPCp%2BerdXyYaFa0OfS6OaKmbEmgL0RmhCufRwgFVE8K3A50Lw0nbK2ft7eXZvbVjA2LfPfiunvL7DPhxwOLy88hM%2FgckS2OEba81PVEZIoABlbpkbVQxM%2B90QA2VPafJjZpIGwYnogM5lZ4nXu160pWnoSYm0pkjdsJAtOQM8pBM0wn7LgywY6pgHk%2BTw18T6oBa2g3foaz%2BAGIP3R6LwZOAbz7A4kAxxqKHB%2BNJ68%2BSiFvRtLBadOSBbddy0VeAOPPu3kepEaCW7gO2KfiUZuZLyrzNZwAVAEvb0BhUNxtBeO8TA2hoAeK8sSmkRL1xO5cAdx4Ohvg1L6DLZ99QhHTnkfFysa6gWc26rW8TIfFZufB7xlovQJ1ZI13wyJh7X%2F7vDOPpOc5%2BXXQYhqbkvl&X-Amz-Signature=971f729d8c0f30d7e3221a146b13ad16607cb2ad0679c45c7f6122421e344623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTIP7C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvomnrXK9MKY9b5MngB6EPl2h2Wrtl2i7ggLddMEFdVAiAK0iumdW%2BPX8iIOPsUsfMqokBJ1dA%2BDy5n9KRbIJVpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM693XN6ZeRTbJzBUiKtwDTrb134zFXwrhwFglIIj9sszfiOlXLVykNfqQeqYzPjR3HYhcxjMS6EcG%2Fb%2FL631AZHjDePstmu52oIuHlPz4H0ZByAo5D7TDZuhFzDKeSYvO95mdUH6qamBPDbdTmVCIv0zbPw9z9GrkX%2B3AyG%2BCjXgQ%2FWebDeZz8%2FW9Uyo4xPmfiEva38wNMcwYM3sorOYY19ou58yWTAMfskT3PioohNtUk%2BoC1mXz6kgpnh1%2FyZj1AN%2FTF293RlY5oILFZ2ilabRu79TVfdU1kOR9eoJfC802TcTlanSwHJlKoAPMeLiA1F9N9LyMa1XnkE6xgY%2FAnE0YumSLE0wDAZkzHj%2BEgIAuQo7dSggSrJlUM3cqlg%2BSTG5Z10idh3f5GnNuiXmVUrzBcyVw5MVFQGsuKeYO8DzGx9YjrfPNcJ4sVoaVvEobfudTN0qlawkzcKaKXQYzOCCIAlGtELN8orvPCp%2BerdXyYaFa0OfS6OaKmbEmgL0RmhCufRwgFVE8K3A50Lw0nbK2ft7eXZvbVjA2LfPfiunvL7DPhxwOLy88hM%2FgckS2OEba81PVEZIoABlbpkbVQxM%2B90QA2VPafJjZpIGwYnogM5lZ4nXu160pWnoSYm0pkjdsJAtOQM8pBM0wn7LgywY6pgHk%2BTw18T6oBa2g3foaz%2BAGIP3R6LwZOAbz7A4kAxxqKHB%2BNJ68%2BSiFvRtLBadOSBbddy0VeAOPPu3kepEaCW7gO2KfiUZuZLyrzNZwAVAEvb0BhUNxtBeO8TA2hoAeK8sSmkRL1xO5cAdx4Ohvg1L6DLZ99QhHTnkfFysa6gWc26rW8TIfFZufB7xlovQJ1ZI13wyJh7X%2F7vDOPpOc5%2BXXQYhqbkvl&X-Amz-Signature=dc94a9c2a1dbc89acaefc0ba37bd4af6bcff4ac38968515e71e15788e18d6e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTIP7C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvomnrXK9MKY9b5MngB6EPl2h2Wrtl2i7ggLddMEFdVAiAK0iumdW%2BPX8iIOPsUsfMqokBJ1dA%2BDy5n9KRbIJVpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM693XN6ZeRTbJzBUiKtwDTrb134zFXwrhwFglIIj9sszfiOlXLVykNfqQeqYzPjR3HYhcxjMS6EcG%2Fb%2FL631AZHjDePstmu52oIuHlPz4H0ZByAo5D7TDZuhFzDKeSYvO95mdUH6qamBPDbdTmVCIv0zbPw9z9GrkX%2B3AyG%2BCjXgQ%2FWebDeZz8%2FW9Uyo4xPmfiEva38wNMcwYM3sorOYY19ou58yWTAMfskT3PioohNtUk%2BoC1mXz6kgpnh1%2FyZj1AN%2FTF293RlY5oILFZ2ilabRu79TVfdU1kOR9eoJfC802TcTlanSwHJlKoAPMeLiA1F9N9LyMa1XnkE6xgY%2FAnE0YumSLE0wDAZkzHj%2BEgIAuQo7dSggSrJlUM3cqlg%2BSTG5Z10idh3f5GnNuiXmVUrzBcyVw5MVFQGsuKeYO8DzGx9YjrfPNcJ4sVoaVvEobfudTN0qlawkzcKaKXQYzOCCIAlGtELN8orvPCp%2BerdXyYaFa0OfS6OaKmbEmgL0RmhCufRwgFVE8K3A50Lw0nbK2ft7eXZvbVjA2LfPfiunvL7DPhxwOLy88hM%2FgckS2OEba81PVEZIoABlbpkbVQxM%2B90QA2VPafJjZpIGwYnogM5lZ4nXu160pWnoSYm0pkjdsJAtOQM8pBM0wn7LgywY6pgHk%2BTw18T6oBa2g3foaz%2BAGIP3R6LwZOAbz7A4kAxxqKHB%2BNJ68%2BSiFvRtLBadOSBbddy0VeAOPPu3kepEaCW7gO2KfiUZuZLyrzNZwAVAEvb0BhUNxtBeO8TA2hoAeK8sSmkRL1xO5cAdx4Ohvg1L6DLZ99QhHTnkfFysa6gWc26rW8TIfFZufB7xlovQJ1ZI13wyJh7X%2F7vDOPpOc5%2BXXQYhqbkvl&X-Amz-Signature=0aa1052afabda6dc85355cc7a9e6ac4be12c92e02639fd7ce67561d195bfb0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTIP7C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvomnrXK9MKY9b5MngB6EPl2h2Wrtl2i7ggLddMEFdVAiAK0iumdW%2BPX8iIOPsUsfMqokBJ1dA%2BDy5n9KRbIJVpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM693XN6ZeRTbJzBUiKtwDTrb134zFXwrhwFglIIj9sszfiOlXLVykNfqQeqYzPjR3HYhcxjMS6EcG%2Fb%2FL631AZHjDePstmu52oIuHlPz4H0ZByAo5D7TDZuhFzDKeSYvO95mdUH6qamBPDbdTmVCIv0zbPw9z9GrkX%2B3AyG%2BCjXgQ%2FWebDeZz8%2FW9Uyo4xPmfiEva38wNMcwYM3sorOYY19ou58yWTAMfskT3PioohNtUk%2BoC1mXz6kgpnh1%2FyZj1AN%2FTF293RlY5oILFZ2ilabRu79TVfdU1kOR9eoJfC802TcTlanSwHJlKoAPMeLiA1F9N9LyMa1XnkE6xgY%2FAnE0YumSLE0wDAZkzHj%2BEgIAuQo7dSggSrJlUM3cqlg%2BSTG5Z10idh3f5GnNuiXmVUrzBcyVw5MVFQGsuKeYO8DzGx9YjrfPNcJ4sVoaVvEobfudTN0qlawkzcKaKXQYzOCCIAlGtELN8orvPCp%2BerdXyYaFa0OfS6OaKmbEmgL0RmhCufRwgFVE8K3A50Lw0nbK2ft7eXZvbVjA2LfPfiunvL7DPhxwOLy88hM%2FgckS2OEba81PVEZIoABlbpkbVQxM%2B90QA2VPafJjZpIGwYnogM5lZ4nXu160pWnoSYm0pkjdsJAtOQM8pBM0wn7LgywY6pgHk%2BTw18T6oBa2g3foaz%2BAGIP3R6LwZOAbz7A4kAxxqKHB%2BNJ68%2BSiFvRtLBadOSBbddy0VeAOPPu3kepEaCW7gO2KfiUZuZLyrzNZwAVAEvb0BhUNxtBeO8TA2hoAeK8sSmkRL1xO5cAdx4Ohvg1L6DLZ99QhHTnkfFysa6gWc26rW8TIfFZufB7xlovQJ1ZI13wyJh7X%2F7vDOPpOc5%2BXXQYhqbkvl&X-Amz-Signature=58d1bc80fd566c0ca15ba6be5e4115924446968f92af076a5e5409a80baa96e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTIP7C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvomnrXK9MKY9b5MngB6EPl2h2Wrtl2i7ggLddMEFdVAiAK0iumdW%2BPX8iIOPsUsfMqokBJ1dA%2BDy5n9KRbIJVpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM693XN6ZeRTbJzBUiKtwDTrb134zFXwrhwFglIIj9sszfiOlXLVykNfqQeqYzPjR3HYhcxjMS6EcG%2Fb%2FL631AZHjDePstmu52oIuHlPz4H0ZByAo5D7TDZuhFzDKeSYvO95mdUH6qamBPDbdTmVCIv0zbPw9z9GrkX%2B3AyG%2BCjXgQ%2FWebDeZz8%2FW9Uyo4xPmfiEva38wNMcwYM3sorOYY19ou58yWTAMfskT3PioohNtUk%2BoC1mXz6kgpnh1%2FyZj1AN%2FTF293RlY5oILFZ2ilabRu79TVfdU1kOR9eoJfC802TcTlanSwHJlKoAPMeLiA1F9N9LyMa1XnkE6xgY%2FAnE0YumSLE0wDAZkzHj%2BEgIAuQo7dSggSrJlUM3cqlg%2BSTG5Z10idh3f5GnNuiXmVUrzBcyVw5MVFQGsuKeYO8DzGx9YjrfPNcJ4sVoaVvEobfudTN0qlawkzcKaKXQYzOCCIAlGtELN8orvPCp%2BerdXyYaFa0OfS6OaKmbEmgL0RmhCufRwgFVE8K3A50Lw0nbK2ft7eXZvbVjA2LfPfiunvL7DPhxwOLy88hM%2FgckS2OEba81PVEZIoABlbpkbVQxM%2B90QA2VPafJjZpIGwYnogM5lZ4nXu160pWnoSYm0pkjdsJAtOQM8pBM0wn7LgywY6pgHk%2BTw18T6oBa2g3foaz%2BAGIP3R6LwZOAbz7A4kAxxqKHB%2BNJ68%2BSiFvRtLBadOSBbddy0VeAOPPu3kepEaCW7gO2KfiUZuZLyrzNZwAVAEvb0BhUNxtBeO8TA2hoAeK8sSmkRL1xO5cAdx4Ohvg1L6DLZ99QhHTnkfFysa6gWc26rW8TIfFZufB7xlovQJ1ZI13wyJh7X%2F7vDOPpOc5%2BXXQYhqbkvl&X-Amz-Signature=44a0877bace963cbc7fe2d46b1c78bba854050326467bc7c43a9c6b849e70aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASTIP7C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvomnrXK9MKY9b5MngB6EPl2h2Wrtl2i7ggLddMEFdVAiAK0iumdW%2BPX8iIOPsUsfMqokBJ1dA%2BDy5n9KRbIJVpgSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM693XN6ZeRTbJzBUiKtwDTrb134zFXwrhwFglIIj9sszfiOlXLVykNfqQeqYzPjR3HYhcxjMS6EcG%2Fb%2FL631AZHjDePstmu52oIuHlPz4H0ZByAo5D7TDZuhFzDKeSYvO95mdUH6qamBPDbdTmVCIv0zbPw9z9GrkX%2B3AyG%2BCjXgQ%2FWebDeZz8%2FW9Uyo4xPmfiEva38wNMcwYM3sorOYY19ou58yWTAMfskT3PioohNtUk%2BoC1mXz6kgpnh1%2FyZj1AN%2FTF293RlY5oILFZ2ilabRu79TVfdU1kOR9eoJfC802TcTlanSwHJlKoAPMeLiA1F9N9LyMa1XnkE6xgY%2FAnE0YumSLE0wDAZkzHj%2BEgIAuQo7dSggSrJlUM3cqlg%2BSTG5Z10idh3f5GnNuiXmVUrzBcyVw5MVFQGsuKeYO8DzGx9YjrfPNcJ4sVoaVvEobfudTN0qlawkzcKaKXQYzOCCIAlGtELN8orvPCp%2BerdXyYaFa0OfS6OaKmbEmgL0RmhCufRwgFVE8K3A50Lw0nbK2ft7eXZvbVjA2LfPfiunvL7DPhxwOLy88hM%2FgckS2OEba81PVEZIoABlbpkbVQxM%2B90QA2VPafJjZpIGwYnogM5lZ4nXu160pWnoSYm0pkjdsJAtOQM8pBM0wn7LgywY6pgHk%2BTw18T6oBa2g3foaz%2BAGIP3R6LwZOAbz7A4kAxxqKHB%2BNJ68%2BSiFvRtLBadOSBbddy0VeAOPPu3kepEaCW7gO2KfiUZuZLyrzNZwAVAEvb0BhUNxtBeO8TA2hoAeK8sSmkRL1xO5cAdx4Ohvg1L6DLZ99QhHTnkfFysa6gWc26rW8TIfFZufB7xlovQJ1ZI13wyJh7X%2F7vDOPpOc5%2BXXQYhqbkvl&X-Amz-Signature=a109b54106a1c8b1c5625b0115fbc0fa42c10e72d92300f3a16488450b1e40c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
