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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5ML4LL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BABKesDWaOZSEsYyJfytploZgEPFFLqCUtlrfvIBwgIhAMeCFYpbuT0sI3FXe98ODXSSbpnTcmD9P6OsGvKt0KmjKv8DCFQQABoMNjM3NDIzMTgzODA1IgwAg%2BM3e2ULmNuXz3kq3ANQ3bzIe%2FI5j1cfl62IkwSwEu3gLNR4Sd9gJ60i4WCFllBoDs4clKX5JdI0k8yScwQ31YmKyQjheQjGue1GWDKbe9TFDREekpRoJjD6KmFrgfrR1gMq3deVa2hIZ%2B84FAgDNO9ASoA0fpb5Jp3TOSafj7uncPjnToGUA%2BltNCf15QdAZFoNka4GY5UMahBoYcf4a4wFrdowonMOc9R3hQQUhP8yWRSiExI%2B8SkfFiLX8Qkz9F8uSM%2FSf9AGfhI18zdmEPQevhUlZYVXqKBMqCXCkkCRr%2FL%2FANLUCBjrjgP8mj1BTgIPFQM1GvhHygZMsyAi%2F5lmVtvW0yNhrtiXJa%2BuJ%2FV3v3h193gvTB4o5k8yjdF7fgQE64alKCfnBdT2a0GVd7bkxBf8RRUYghNjt%2B%2FAWeOrdKyEF41vwgjlpIAqE%2BHoL2c%2BPn3sb8595o5QkIbULxMmfiGoUTtIUcRfaf6bl6XpG7RsR6x8mtRa%2FpCniSEHnnRlDjuiOnc7%2BF8VVe0ikO0wJdL736adu7xKPD92SoYQdyChbByJH4W36GGIQ9XeFdOSse7xVmZgsRt6TiqA2mZhWmW0D7SyJTHK11wFuT2xZxui%2F%2Bo6GbjHkQYDbNQbS%2BPUEKI2fIca0DDdkevABjqkAf1tdH%2FopBejhlqj9e4Ad%2FvXeEVFKrd6HmUpqjA4gBpw2dHnNt4MMS93HlHAK%2FuCvEgVHyU2r3mfGdOiZOIUvWtUP7oOWV7Ap5H7oVdwNj%2BvfG6Xgl0TtOlQIMaOA2FdiVkUiomGphH7FraSn5Nx%2FBhZvoL%2BbLXlfBavZM%2Bh5W68LkCn%2FzUH%2F7QGQarODqDnJ6rfDaCwFgU52fGfBfkh8PMUSvXs&X-Amz-Signature=8c4a089898e7c796a1d79d9fe7c721d14fc8e369cb7209b78e4206b48162075e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5ML4LL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BABKesDWaOZSEsYyJfytploZgEPFFLqCUtlrfvIBwgIhAMeCFYpbuT0sI3FXe98ODXSSbpnTcmD9P6OsGvKt0KmjKv8DCFQQABoMNjM3NDIzMTgzODA1IgwAg%2BM3e2ULmNuXz3kq3ANQ3bzIe%2FI5j1cfl62IkwSwEu3gLNR4Sd9gJ60i4WCFllBoDs4clKX5JdI0k8yScwQ31YmKyQjheQjGue1GWDKbe9TFDREekpRoJjD6KmFrgfrR1gMq3deVa2hIZ%2B84FAgDNO9ASoA0fpb5Jp3TOSafj7uncPjnToGUA%2BltNCf15QdAZFoNka4GY5UMahBoYcf4a4wFrdowonMOc9R3hQQUhP8yWRSiExI%2B8SkfFiLX8Qkz9F8uSM%2FSf9AGfhI18zdmEPQevhUlZYVXqKBMqCXCkkCRr%2FL%2FANLUCBjrjgP8mj1BTgIPFQM1GvhHygZMsyAi%2F5lmVtvW0yNhrtiXJa%2BuJ%2FV3v3h193gvTB4o5k8yjdF7fgQE64alKCfnBdT2a0GVd7bkxBf8RRUYghNjt%2B%2FAWeOrdKyEF41vwgjlpIAqE%2BHoL2c%2BPn3sb8595o5QkIbULxMmfiGoUTtIUcRfaf6bl6XpG7RsR6x8mtRa%2FpCniSEHnnRlDjuiOnc7%2BF8VVe0ikO0wJdL736adu7xKPD92SoYQdyChbByJH4W36GGIQ9XeFdOSse7xVmZgsRt6TiqA2mZhWmW0D7SyJTHK11wFuT2xZxui%2F%2Bo6GbjHkQYDbNQbS%2BPUEKI2fIca0DDdkevABjqkAf1tdH%2FopBejhlqj9e4Ad%2FvXeEVFKrd6HmUpqjA4gBpw2dHnNt4MMS93HlHAK%2FuCvEgVHyU2r3mfGdOiZOIUvWtUP7oOWV7Ap5H7oVdwNj%2BvfG6Xgl0TtOlQIMaOA2FdiVkUiomGphH7FraSn5Nx%2FBhZvoL%2BbLXlfBavZM%2Bh5W68LkCn%2FzUH%2F7QGQarODqDnJ6rfDaCwFgU52fGfBfkh8PMUSvXs&X-Amz-Signature=2ab0d95ed475c0970a79269422240de148242b7ac79af3f7cbc6a4ffd63cd6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5ML4LL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BABKesDWaOZSEsYyJfytploZgEPFFLqCUtlrfvIBwgIhAMeCFYpbuT0sI3FXe98ODXSSbpnTcmD9P6OsGvKt0KmjKv8DCFQQABoMNjM3NDIzMTgzODA1IgwAg%2BM3e2ULmNuXz3kq3ANQ3bzIe%2FI5j1cfl62IkwSwEu3gLNR4Sd9gJ60i4WCFllBoDs4clKX5JdI0k8yScwQ31YmKyQjheQjGue1GWDKbe9TFDREekpRoJjD6KmFrgfrR1gMq3deVa2hIZ%2B84FAgDNO9ASoA0fpb5Jp3TOSafj7uncPjnToGUA%2BltNCf15QdAZFoNka4GY5UMahBoYcf4a4wFrdowonMOc9R3hQQUhP8yWRSiExI%2B8SkfFiLX8Qkz9F8uSM%2FSf9AGfhI18zdmEPQevhUlZYVXqKBMqCXCkkCRr%2FL%2FANLUCBjrjgP8mj1BTgIPFQM1GvhHygZMsyAi%2F5lmVtvW0yNhrtiXJa%2BuJ%2FV3v3h193gvTB4o5k8yjdF7fgQE64alKCfnBdT2a0GVd7bkxBf8RRUYghNjt%2B%2FAWeOrdKyEF41vwgjlpIAqE%2BHoL2c%2BPn3sb8595o5QkIbULxMmfiGoUTtIUcRfaf6bl6XpG7RsR6x8mtRa%2FpCniSEHnnRlDjuiOnc7%2BF8VVe0ikO0wJdL736adu7xKPD92SoYQdyChbByJH4W36GGIQ9XeFdOSse7xVmZgsRt6TiqA2mZhWmW0D7SyJTHK11wFuT2xZxui%2F%2Bo6GbjHkQYDbNQbS%2BPUEKI2fIca0DDdkevABjqkAf1tdH%2FopBejhlqj9e4Ad%2FvXeEVFKrd6HmUpqjA4gBpw2dHnNt4MMS93HlHAK%2FuCvEgVHyU2r3mfGdOiZOIUvWtUP7oOWV7Ap5H7oVdwNj%2BvfG6Xgl0TtOlQIMaOA2FdiVkUiomGphH7FraSn5Nx%2FBhZvoL%2BbLXlfBavZM%2Bh5W68LkCn%2FzUH%2F7QGQarODqDnJ6rfDaCwFgU52fGfBfkh8PMUSvXs&X-Amz-Signature=d4271eb845c171227c2d9c974d87f5fc47912ea170128faea346a266e0a0137e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5ML4LL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BABKesDWaOZSEsYyJfytploZgEPFFLqCUtlrfvIBwgIhAMeCFYpbuT0sI3FXe98ODXSSbpnTcmD9P6OsGvKt0KmjKv8DCFQQABoMNjM3NDIzMTgzODA1IgwAg%2BM3e2ULmNuXz3kq3ANQ3bzIe%2FI5j1cfl62IkwSwEu3gLNR4Sd9gJ60i4WCFllBoDs4clKX5JdI0k8yScwQ31YmKyQjheQjGue1GWDKbe9TFDREekpRoJjD6KmFrgfrR1gMq3deVa2hIZ%2B84FAgDNO9ASoA0fpb5Jp3TOSafj7uncPjnToGUA%2BltNCf15QdAZFoNka4GY5UMahBoYcf4a4wFrdowonMOc9R3hQQUhP8yWRSiExI%2B8SkfFiLX8Qkz9F8uSM%2FSf9AGfhI18zdmEPQevhUlZYVXqKBMqCXCkkCRr%2FL%2FANLUCBjrjgP8mj1BTgIPFQM1GvhHygZMsyAi%2F5lmVtvW0yNhrtiXJa%2BuJ%2FV3v3h193gvTB4o5k8yjdF7fgQE64alKCfnBdT2a0GVd7bkxBf8RRUYghNjt%2B%2FAWeOrdKyEF41vwgjlpIAqE%2BHoL2c%2BPn3sb8595o5QkIbULxMmfiGoUTtIUcRfaf6bl6XpG7RsR6x8mtRa%2FpCniSEHnnRlDjuiOnc7%2BF8VVe0ikO0wJdL736adu7xKPD92SoYQdyChbByJH4W36GGIQ9XeFdOSse7xVmZgsRt6TiqA2mZhWmW0D7SyJTHK11wFuT2xZxui%2F%2Bo6GbjHkQYDbNQbS%2BPUEKI2fIca0DDdkevABjqkAf1tdH%2FopBejhlqj9e4Ad%2FvXeEVFKrd6HmUpqjA4gBpw2dHnNt4MMS93HlHAK%2FuCvEgVHyU2r3mfGdOiZOIUvWtUP7oOWV7Ap5H7oVdwNj%2BvfG6Xgl0TtOlQIMaOA2FdiVkUiomGphH7FraSn5Nx%2FBhZvoL%2BbLXlfBavZM%2Bh5W68LkCn%2FzUH%2F7QGQarODqDnJ6rfDaCwFgU52fGfBfkh8PMUSvXs&X-Amz-Signature=9ddfd1ff16a92b3e0cbb6cbcc8b471b988e2d21d39a39196b46f7aa18ae753b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5ML4LL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BABKesDWaOZSEsYyJfytploZgEPFFLqCUtlrfvIBwgIhAMeCFYpbuT0sI3FXe98ODXSSbpnTcmD9P6OsGvKt0KmjKv8DCFQQABoMNjM3NDIzMTgzODA1IgwAg%2BM3e2ULmNuXz3kq3ANQ3bzIe%2FI5j1cfl62IkwSwEu3gLNR4Sd9gJ60i4WCFllBoDs4clKX5JdI0k8yScwQ31YmKyQjheQjGue1GWDKbe9TFDREekpRoJjD6KmFrgfrR1gMq3deVa2hIZ%2B84FAgDNO9ASoA0fpb5Jp3TOSafj7uncPjnToGUA%2BltNCf15QdAZFoNka4GY5UMahBoYcf4a4wFrdowonMOc9R3hQQUhP8yWRSiExI%2B8SkfFiLX8Qkz9F8uSM%2FSf9AGfhI18zdmEPQevhUlZYVXqKBMqCXCkkCRr%2FL%2FANLUCBjrjgP8mj1BTgIPFQM1GvhHygZMsyAi%2F5lmVtvW0yNhrtiXJa%2BuJ%2FV3v3h193gvTB4o5k8yjdF7fgQE64alKCfnBdT2a0GVd7bkxBf8RRUYghNjt%2B%2FAWeOrdKyEF41vwgjlpIAqE%2BHoL2c%2BPn3sb8595o5QkIbULxMmfiGoUTtIUcRfaf6bl6XpG7RsR6x8mtRa%2FpCniSEHnnRlDjuiOnc7%2BF8VVe0ikO0wJdL736adu7xKPD92SoYQdyChbByJH4W36GGIQ9XeFdOSse7xVmZgsRt6TiqA2mZhWmW0D7SyJTHK11wFuT2xZxui%2F%2Bo6GbjHkQYDbNQbS%2BPUEKI2fIca0DDdkevABjqkAf1tdH%2FopBejhlqj9e4Ad%2FvXeEVFKrd6HmUpqjA4gBpw2dHnNt4MMS93HlHAK%2FuCvEgVHyU2r3mfGdOiZOIUvWtUP7oOWV7Ap5H7oVdwNj%2BvfG6Xgl0TtOlQIMaOA2FdiVkUiomGphH7FraSn5Nx%2FBhZvoL%2BbLXlfBavZM%2Bh5W68LkCn%2FzUH%2F7QGQarODqDnJ6rfDaCwFgU52fGfBfkh8PMUSvXs&X-Amz-Signature=7ebde731b53d7cacd0285761bc48f2398d51667809430bd615a68da9ecad9d96&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5ML4LL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BABKesDWaOZSEsYyJfytploZgEPFFLqCUtlrfvIBwgIhAMeCFYpbuT0sI3FXe98ODXSSbpnTcmD9P6OsGvKt0KmjKv8DCFQQABoMNjM3NDIzMTgzODA1IgwAg%2BM3e2ULmNuXz3kq3ANQ3bzIe%2FI5j1cfl62IkwSwEu3gLNR4Sd9gJ60i4WCFllBoDs4clKX5JdI0k8yScwQ31YmKyQjheQjGue1GWDKbe9TFDREekpRoJjD6KmFrgfrR1gMq3deVa2hIZ%2B84FAgDNO9ASoA0fpb5Jp3TOSafj7uncPjnToGUA%2BltNCf15QdAZFoNka4GY5UMahBoYcf4a4wFrdowonMOc9R3hQQUhP8yWRSiExI%2B8SkfFiLX8Qkz9F8uSM%2FSf9AGfhI18zdmEPQevhUlZYVXqKBMqCXCkkCRr%2FL%2FANLUCBjrjgP8mj1BTgIPFQM1GvhHygZMsyAi%2F5lmVtvW0yNhrtiXJa%2BuJ%2FV3v3h193gvTB4o5k8yjdF7fgQE64alKCfnBdT2a0GVd7bkxBf8RRUYghNjt%2B%2FAWeOrdKyEF41vwgjlpIAqE%2BHoL2c%2BPn3sb8595o5QkIbULxMmfiGoUTtIUcRfaf6bl6XpG7RsR6x8mtRa%2FpCniSEHnnRlDjuiOnc7%2BF8VVe0ikO0wJdL736adu7xKPD92SoYQdyChbByJH4W36GGIQ9XeFdOSse7xVmZgsRt6TiqA2mZhWmW0D7SyJTHK11wFuT2xZxui%2F%2Bo6GbjHkQYDbNQbS%2BPUEKI2fIca0DDdkevABjqkAf1tdH%2FopBejhlqj9e4Ad%2FvXeEVFKrd6HmUpqjA4gBpw2dHnNt4MMS93HlHAK%2FuCvEgVHyU2r3mfGdOiZOIUvWtUP7oOWV7Ap5H7oVdwNj%2BvfG6Xgl0TtOlQIMaOA2FdiVkUiomGphH7FraSn5Nx%2FBhZvoL%2BbLXlfBavZM%2Bh5W68LkCn%2FzUH%2F7QGQarODqDnJ6rfDaCwFgU52fGfBfkh8PMUSvXs&X-Amz-Signature=666698551920c9b4bcaa433ffef6b58c7f5ef54f816cbb7cc701f9158647bc76&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5ML4LL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BABKesDWaOZSEsYyJfytploZgEPFFLqCUtlrfvIBwgIhAMeCFYpbuT0sI3FXe98ODXSSbpnTcmD9P6OsGvKt0KmjKv8DCFQQABoMNjM3NDIzMTgzODA1IgwAg%2BM3e2ULmNuXz3kq3ANQ3bzIe%2FI5j1cfl62IkwSwEu3gLNR4Sd9gJ60i4WCFllBoDs4clKX5JdI0k8yScwQ31YmKyQjheQjGue1GWDKbe9TFDREekpRoJjD6KmFrgfrR1gMq3deVa2hIZ%2B84FAgDNO9ASoA0fpb5Jp3TOSafj7uncPjnToGUA%2BltNCf15QdAZFoNka4GY5UMahBoYcf4a4wFrdowonMOc9R3hQQUhP8yWRSiExI%2B8SkfFiLX8Qkz9F8uSM%2FSf9AGfhI18zdmEPQevhUlZYVXqKBMqCXCkkCRr%2FL%2FANLUCBjrjgP8mj1BTgIPFQM1GvhHygZMsyAi%2F5lmVtvW0yNhrtiXJa%2BuJ%2FV3v3h193gvTB4o5k8yjdF7fgQE64alKCfnBdT2a0GVd7bkxBf8RRUYghNjt%2B%2FAWeOrdKyEF41vwgjlpIAqE%2BHoL2c%2BPn3sb8595o5QkIbULxMmfiGoUTtIUcRfaf6bl6XpG7RsR6x8mtRa%2FpCniSEHnnRlDjuiOnc7%2BF8VVe0ikO0wJdL736adu7xKPD92SoYQdyChbByJH4W36GGIQ9XeFdOSse7xVmZgsRt6TiqA2mZhWmW0D7SyJTHK11wFuT2xZxui%2F%2Bo6GbjHkQYDbNQbS%2BPUEKI2fIca0DDdkevABjqkAf1tdH%2FopBejhlqj9e4Ad%2FvXeEVFKrd6HmUpqjA4gBpw2dHnNt4MMS93HlHAK%2FuCvEgVHyU2r3mfGdOiZOIUvWtUP7oOWV7Ap5H7oVdwNj%2BvfG6Xgl0TtOlQIMaOA2FdiVkUiomGphH7FraSn5Nx%2FBhZvoL%2BbLXlfBavZM%2Bh5W68LkCn%2FzUH%2F7QGQarODqDnJ6rfDaCwFgU52fGfBfkh8PMUSvXs&X-Amz-Signature=d205141c297e6e2585db328936714211d4cfaaf98f4846a2a480ce5b9a59b9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
