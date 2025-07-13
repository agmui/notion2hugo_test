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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFDFKJB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx%2Biqqy%2FAZWFackQOvs8pJUyp5PfHyIrbdAM%2B6t9ONnAiAES3IrM6ddQPbD%2FCtA1URmsrWxRjhx1avKQBQjovZspSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfT0HFmTB%2FtOm7r9KtwDzRC3nlABdh1l6thCNsTFm3bjwMLBim5%2F0N7w2JZSxyQlLR5wKWOjbKob11dAX6KmO%2FwkxUyL2Nr%2B09qwGDiIOs7%2FaBSlPTv9S2z4FrcdvXd%2BvzNTcRqPh2yr6g6BMYb4UAy4V1U8t59syv5HFYR2dRw9wucOnPz2dN2V1eLct%2FNTpf3XMgwYDMhMTJ698VcZ%2BYOUHAqofWJWk5W6dXeC19RY6BqpJDhli10Vur5OO666VoaIf0WKwcgjM93PlI0B7wYPgUhYPdb5AmN4i%2FXDrBYb%2B3dAZki0sIGJje5Gly%2FaAU6yicRCK3agtKQ%2BRcuzrJnknpb79GGLhH0Z0%2FXu8mlnfHxetcQAoV0J30jo5kJHY8Csg3fC3hMvxHvbT61WIoobl2XviMMcbUqb2nIRRlFmGUdA1%2Fp8HJSy7hDOCya4SiSQvMk8R%2Fx%2BU23nvBJPyCylACAqrzq84pddc3tAwrIw2F3MqjBhCh%2FFkFZ3eL8mlQnozUozxo2z%2BArNNifHlaUgg%2Bo4XdttzJrC2UxFEvRzoOC5OIKYOTM7fQgHnnOZQqF9Jm05pjFu%2BzMMG%2B7iOYR1uInHn8xSwZErAdMWJQ9RLol4KhMBQYvuP12P%2B1uUGJiyl6Q4pFgpQCwwvtnMwwY6pgHBxX%2FERmObsFLabKfZHqlKg83i6mLJ2I58JK2vdZVq0PFsdMPasNUY8snXyt50UAWkRK%2BRoXtDXDADpG%2B%2F%2FL6DLVtnmkbMLvBQDYZ89MqIim1yM8vdTxcaPWKqrGpUAMU4Shw7fTTLug7u%2FLOPbYF3CvtDaCQmj8OVgqMM3mEc%2BGD44sbluPFZIBpHYHDcjsTXsKPpYdIaQTrQ3Xlb1rP0o8gAJbbk&X-Amz-Signature=efc184d2c2f674856d88cbe7b82182849269a5209363d7f166a6f84c06c13f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFDFKJB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx%2Biqqy%2FAZWFackQOvs8pJUyp5PfHyIrbdAM%2B6t9ONnAiAES3IrM6ddQPbD%2FCtA1URmsrWxRjhx1avKQBQjovZspSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfT0HFmTB%2FtOm7r9KtwDzRC3nlABdh1l6thCNsTFm3bjwMLBim5%2F0N7w2JZSxyQlLR5wKWOjbKob11dAX6KmO%2FwkxUyL2Nr%2B09qwGDiIOs7%2FaBSlPTv9S2z4FrcdvXd%2BvzNTcRqPh2yr6g6BMYb4UAy4V1U8t59syv5HFYR2dRw9wucOnPz2dN2V1eLct%2FNTpf3XMgwYDMhMTJ698VcZ%2BYOUHAqofWJWk5W6dXeC19RY6BqpJDhli10Vur5OO666VoaIf0WKwcgjM93PlI0B7wYPgUhYPdb5AmN4i%2FXDrBYb%2B3dAZki0sIGJje5Gly%2FaAU6yicRCK3agtKQ%2BRcuzrJnknpb79GGLhH0Z0%2FXu8mlnfHxetcQAoV0J30jo5kJHY8Csg3fC3hMvxHvbT61WIoobl2XviMMcbUqb2nIRRlFmGUdA1%2Fp8HJSy7hDOCya4SiSQvMk8R%2Fx%2BU23nvBJPyCylACAqrzq84pddc3tAwrIw2F3MqjBhCh%2FFkFZ3eL8mlQnozUozxo2z%2BArNNifHlaUgg%2Bo4XdttzJrC2UxFEvRzoOC5OIKYOTM7fQgHnnOZQqF9Jm05pjFu%2BzMMG%2B7iOYR1uInHn8xSwZErAdMWJQ9RLol4KhMBQYvuP12P%2B1uUGJiyl6Q4pFgpQCwwvtnMwwY6pgHBxX%2FERmObsFLabKfZHqlKg83i6mLJ2I58JK2vdZVq0PFsdMPasNUY8snXyt50UAWkRK%2BRoXtDXDADpG%2B%2F%2FL6DLVtnmkbMLvBQDYZ89MqIim1yM8vdTxcaPWKqrGpUAMU4Shw7fTTLug7u%2FLOPbYF3CvtDaCQmj8OVgqMM3mEc%2BGD44sbluPFZIBpHYHDcjsTXsKPpYdIaQTrQ3Xlb1rP0o8gAJbbk&X-Amz-Signature=2f162b3b3b87b09c553e0ac6bab9860c7d0005a9be9ab6e38fe589622d5a3077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFDFKJB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx%2Biqqy%2FAZWFackQOvs8pJUyp5PfHyIrbdAM%2B6t9ONnAiAES3IrM6ddQPbD%2FCtA1URmsrWxRjhx1avKQBQjovZspSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfT0HFmTB%2FtOm7r9KtwDzRC3nlABdh1l6thCNsTFm3bjwMLBim5%2F0N7w2JZSxyQlLR5wKWOjbKob11dAX6KmO%2FwkxUyL2Nr%2B09qwGDiIOs7%2FaBSlPTv9S2z4FrcdvXd%2BvzNTcRqPh2yr6g6BMYb4UAy4V1U8t59syv5HFYR2dRw9wucOnPz2dN2V1eLct%2FNTpf3XMgwYDMhMTJ698VcZ%2BYOUHAqofWJWk5W6dXeC19RY6BqpJDhli10Vur5OO666VoaIf0WKwcgjM93PlI0B7wYPgUhYPdb5AmN4i%2FXDrBYb%2B3dAZki0sIGJje5Gly%2FaAU6yicRCK3agtKQ%2BRcuzrJnknpb79GGLhH0Z0%2FXu8mlnfHxetcQAoV0J30jo5kJHY8Csg3fC3hMvxHvbT61WIoobl2XviMMcbUqb2nIRRlFmGUdA1%2Fp8HJSy7hDOCya4SiSQvMk8R%2Fx%2BU23nvBJPyCylACAqrzq84pddc3tAwrIw2F3MqjBhCh%2FFkFZ3eL8mlQnozUozxo2z%2BArNNifHlaUgg%2Bo4XdttzJrC2UxFEvRzoOC5OIKYOTM7fQgHnnOZQqF9Jm05pjFu%2BzMMG%2B7iOYR1uInHn8xSwZErAdMWJQ9RLol4KhMBQYvuP12P%2B1uUGJiyl6Q4pFgpQCwwvtnMwwY6pgHBxX%2FERmObsFLabKfZHqlKg83i6mLJ2I58JK2vdZVq0PFsdMPasNUY8snXyt50UAWkRK%2BRoXtDXDADpG%2B%2F%2FL6DLVtnmkbMLvBQDYZ89MqIim1yM8vdTxcaPWKqrGpUAMU4Shw7fTTLug7u%2FLOPbYF3CvtDaCQmj8OVgqMM3mEc%2BGD44sbluPFZIBpHYHDcjsTXsKPpYdIaQTrQ3Xlb1rP0o8gAJbbk&X-Amz-Signature=e1064ad6e3249e09ff7fbb9f262e7d0c2d6a513ee0e70711ccf3316937e6773d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFDFKJB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx%2Biqqy%2FAZWFackQOvs8pJUyp5PfHyIrbdAM%2B6t9ONnAiAES3IrM6ddQPbD%2FCtA1URmsrWxRjhx1avKQBQjovZspSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfT0HFmTB%2FtOm7r9KtwDzRC3nlABdh1l6thCNsTFm3bjwMLBim5%2F0N7w2JZSxyQlLR5wKWOjbKob11dAX6KmO%2FwkxUyL2Nr%2B09qwGDiIOs7%2FaBSlPTv9S2z4FrcdvXd%2BvzNTcRqPh2yr6g6BMYb4UAy4V1U8t59syv5HFYR2dRw9wucOnPz2dN2V1eLct%2FNTpf3XMgwYDMhMTJ698VcZ%2BYOUHAqofWJWk5W6dXeC19RY6BqpJDhli10Vur5OO666VoaIf0WKwcgjM93PlI0B7wYPgUhYPdb5AmN4i%2FXDrBYb%2B3dAZki0sIGJje5Gly%2FaAU6yicRCK3agtKQ%2BRcuzrJnknpb79GGLhH0Z0%2FXu8mlnfHxetcQAoV0J30jo5kJHY8Csg3fC3hMvxHvbT61WIoobl2XviMMcbUqb2nIRRlFmGUdA1%2Fp8HJSy7hDOCya4SiSQvMk8R%2Fx%2BU23nvBJPyCylACAqrzq84pddc3tAwrIw2F3MqjBhCh%2FFkFZ3eL8mlQnozUozxo2z%2BArNNifHlaUgg%2Bo4XdttzJrC2UxFEvRzoOC5OIKYOTM7fQgHnnOZQqF9Jm05pjFu%2BzMMG%2B7iOYR1uInHn8xSwZErAdMWJQ9RLol4KhMBQYvuP12P%2B1uUGJiyl6Q4pFgpQCwwvtnMwwY6pgHBxX%2FERmObsFLabKfZHqlKg83i6mLJ2I58JK2vdZVq0PFsdMPasNUY8snXyt50UAWkRK%2BRoXtDXDADpG%2B%2F%2FL6DLVtnmkbMLvBQDYZ89MqIim1yM8vdTxcaPWKqrGpUAMU4Shw7fTTLug7u%2FLOPbYF3CvtDaCQmj8OVgqMM3mEc%2BGD44sbluPFZIBpHYHDcjsTXsKPpYdIaQTrQ3Xlb1rP0o8gAJbbk&X-Amz-Signature=76365ba97baba6c181a9ea47987fb69506a7ce1b20efabb84dbec1dbf3f46e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFDFKJB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx%2Biqqy%2FAZWFackQOvs8pJUyp5PfHyIrbdAM%2B6t9ONnAiAES3IrM6ddQPbD%2FCtA1URmsrWxRjhx1avKQBQjovZspSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfT0HFmTB%2FtOm7r9KtwDzRC3nlABdh1l6thCNsTFm3bjwMLBim5%2F0N7w2JZSxyQlLR5wKWOjbKob11dAX6KmO%2FwkxUyL2Nr%2B09qwGDiIOs7%2FaBSlPTv9S2z4FrcdvXd%2BvzNTcRqPh2yr6g6BMYb4UAy4V1U8t59syv5HFYR2dRw9wucOnPz2dN2V1eLct%2FNTpf3XMgwYDMhMTJ698VcZ%2BYOUHAqofWJWk5W6dXeC19RY6BqpJDhli10Vur5OO666VoaIf0WKwcgjM93PlI0B7wYPgUhYPdb5AmN4i%2FXDrBYb%2B3dAZki0sIGJje5Gly%2FaAU6yicRCK3agtKQ%2BRcuzrJnknpb79GGLhH0Z0%2FXu8mlnfHxetcQAoV0J30jo5kJHY8Csg3fC3hMvxHvbT61WIoobl2XviMMcbUqb2nIRRlFmGUdA1%2Fp8HJSy7hDOCya4SiSQvMk8R%2Fx%2BU23nvBJPyCylACAqrzq84pddc3tAwrIw2F3MqjBhCh%2FFkFZ3eL8mlQnozUozxo2z%2BArNNifHlaUgg%2Bo4XdttzJrC2UxFEvRzoOC5OIKYOTM7fQgHnnOZQqF9Jm05pjFu%2BzMMG%2B7iOYR1uInHn8xSwZErAdMWJQ9RLol4KhMBQYvuP12P%2B1uUGJiyl6Q4pFgpQCwwvtnMwwY6pgHBxX%2FERmObsFLabKfZHqlKg83i6mLJ2I58JK2vdZVq0PFsdMPasNUY8snXyt50UAWkRK%2BRoXtDXDADpG%2B%2F%2FL6DLVtnmkbMLvBQDYZ89MqIim1yM8vdTxcaPWKqrGpUAMU4Shw7fTTLug7u%2FLOPbYF3CvtDaCQmj8OVgqMM3mEc%2BGD44sbluPFZIBpHYHDcjsTXsKPpYdIaQTrQ3Xlb1rP0o8gAJbbk&X-Amz-Signature=bc22e494704c9617ee72ac5d38e91bebbd58b665cc71ea5461864aa2ded772fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFDFKJB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx%2Biqqy%2FAZWFackQOvs8pJUyp5PfHyIrbdAM%2B6t9ONnAiAES3IrM6ddQPbD%2FCtA1URmsrWxRjhx1avKQBQjovZspSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfT0HFmTB%2FtOm7r9KtwDzRC3nlABdh1l6thCNsTFm3bjwMLBim5%2F0N7w2JZSxyQlLR5wKWOjbKob11dAX6KmO%2FwkxUyL2Nr%2B09qwGDiIOs7%2FaBSlPTv9S2z4FrcdvXd%2BvzNTcRqPh2yr6g6BMYb4UAy4V1U8t59syv5HFYR2dRw9wucOnPz2dN2V1eLct%2FNTpf3XMgwYDMhMTJ698VcZ%2BYOUHAqofWJWk5W6dXeC19RY6BqpJDhli10Vur5OO666VoaIf0WKwcgjM93PlI0B7wYPgUhYPdb5AmN4i%2FXDrBYb%2B3dAZki0sIGJje5Gly%2FaAU6yicRCK3agtKQ%2BRcuzrJnknpb79GGLhH0Z0%2FXu8mlnfHxetcQAoV0J30jo5kJHY8Csg3fC3hMvxHvbT61WIoobl2XviMMcbUqb2nIRRlFmGUdA1%2Fp8HJSy7hDOCya4SiSQvMk8R%2Fx%2BU23nvBJPyCylACAqrzq84pddc3tAwrIw2F3MqjBhCh%2FFkFZ3eL8mlQnozUozxo2z%2BArNNifHlaUgg%2Bo4XdttzJrC2UxFEvRzoOC5OIKYOTM7fQgHnnOZQqF9Jm05pjFu%2BzMMG%2B7iOYR1uInHn8xSwZErAdMWJQ9RLol4KhMBQYvuP12P%2B1uUGJiyl6Q4pFgpQCwwvtnMwwY6pgHBxX%2FERmObsFLabKfZHqlKg83i6mLJ2I58JK2vdZVq0PFsdMPasNUY8snXyt50UAWkRK%2BRoXtDXDADpG%2B%2F%2FL6DLVtnmkbMLvBQDYZ89MqIim1yM8vdTxcaPWKqrGpUAMU4Shw7fTTLug7u%2FLOPbYF3CvtDaCQmj8OVgqMM3mEc%2BGD44sbluPFZIBpHYHDcjsTXsKPpYdIaQTrQ3Xlb1rP0o8gAJbbk&X-Amz-Signature=0316c19d5e3db0d56aefabdda5e029aec920d0e562146f7a925030d849197700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFDFKJB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx%2Biqqy%2FAZWFackQOvs8pJUyp5PfHyIrbdAM%2B6t9ONnAiAES3IrM6ddQPbD%2FCtA1URmsrWxRjhx1avKQBQjovZspSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfT0HFmTB%2FtOm7r9KtwDzRC3nlABdh1l6thCNsTFm3bjwMLBim5%2F0N7w2JZSxyQlLR5wKWOjbKob11dAX6KmO%2FwkxUyL2Nr%2B09qwGDiIOs7%2FaBSlPTv9S2z4FrcdvXd%2BvzNTcRqPh2yr6g6BMYb4UAy4V1U8t59syv5HFYR2dRw9wucOnPz2dN2V1eLct%2FNTpf3XMgwYDMhMTJ698VcZ%2BYOUHAqofWJWk5W6dXeC19RY6BqpJDhli10Vur5OO666VoaIf0WKwcgjM93PlI0B7wYPgUhYPdb5AmN4i%2FXDrBYb%2B3dAZki0sIGJje5Gly%2FaAU6yicRCK3agtKQ%2BRcuzrJnknpb79GGLhH0Z0%2FXu8mlnfHxetcQAoV0J30jo5kJHY8Csg3fC3hMvxHvbT61WIoobl2XviMMcbUqb2nIRRlFmGUdA1%2Fp8HJSy7hDOCya4SiSQvMk8R%2Fx%2BU23nvBJPyCylACAqrzq84pddc3tAwrIw2F3MqjBhCh%2FFkFZ3eL8mlQnozUozxo2z%2BArNNifHlaUgg%2Bo4XdttzJrC2UxFEvRzoOC5OIKYOTM7fQgHnnOZQqF9Jm05pjFu%2BzMMG%2B7iOYR1uInHn8xSwZErAdMWJQ9RLol4KhMBQYvuP12P%2B1uUGJiyl6Q4pFgpQCwwvtnMwwY6pgHBxX%2FERmObsFLabKfZHqlKg83i6mLJ2I58JK2vdZVq0PFsdMPasNUY8snXyt50UAWkRK%2BRoXtDXDADpG%2B%2F%2FL6DLVtnmkbMLvBQDYZ89MqIim1yM8vdTxcaPWKqrGpUAMU4Shw7fTTLug7u%2FLOPbYF3CvtDaCQmj8OVgqMM3mEc%2BGD44sbluPFZIBpHYHDcjsTXsKPpYdIaQTrQ3Xlb1rP0o8gAJbbk&X-Amz-Signature=d2ce22c584d07716663be3213e0b4b34ce21ce85063c3b8006b2167e25c2a35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
