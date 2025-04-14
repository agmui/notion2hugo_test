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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65UUJ42%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHJat5rGm%2FdN8Wg8d64uSnZqH31laUY5L4zLm5MevWgAiAgKwnJDS%2Ffe%2BQtUjpY8tNxJY%2BIgWhlbL%2BUqxpGkjhNLSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM6GGUtYu%2FJioPsZBFKtwDLstICDro1h4TwDN4cI6P7qBkYrRThkeGnYWK1DfbKnF2dOUc172FNjkhNrWgPuMyf9T1fLDxYqACoyDKKj5mC%2F%2FVudI4SbWm4XWw885iyItPSjj5DWOcJ8tD5z9yfty6hlNdYBIp7qwLppZxm2IQy14ozkwzvsiUIiOxk8I89dm18%2B3S9sLt85D8xwyVT4muBCae1KF7LOOm4%2FkrchXGGKj1ti3oAPe0251D5hsKIrfsk%2FtPrFy4XCoKAFzDFQioEiMjGT51n7hGr28CWA6AYYIwEgzMNZIUarbkYByAWsVRLOfQOp65epY6JcG0%2BxXRwCBVxAw6SS%2F%2Bta4E8MK8nmvQWcYNsjpA%2BmIsfs62SCOXmfBJkJHSV789YHY0HqmOfRtiKY%2FylVbkadDmb4r%2BeGLwimsf0ZeqbSGPy39o8fWS57611h44t75TGFpD1xE%2FlKOFSvAzi570friiTtzSl6HA0wfWipy6tuju5T0ZKO9uq%2Fit9JTekmZe5Me6qoMJ4gF12r6sZ3hE3wuiN69DPJmaiIecm57nuRo612J4ebQq2L8WbxKGy2vRv9kW43sCa%2BBi%2BA6RG8f539PTGU4x7BmWe4VJUxc%2BjobVO9HT%2Bheh39x3CXnoPro5IWEwm%2Br1vwY6pgGm%2FG0rhpq3vjjQUaxMiA%2F%2FydQUze6M2GbM%2BVUg9%2Bg9l95N%2BkM%2Bc3jtgjoi7oQdyxbmCLexeB1%2FOFfVVGcN3rszaQ8dSQE2ln1%2BQV0GPVOS2yEv5AapB6mt1JFFYy4llV08Uj%2FOMMAYWO30Mi%2BmpdoiQT%2FW25174JnXiHemKvSYPfj44rkrk5tE8VmhYpCO4RBUn3ISHF8Mm9h182W3WM8Ywzx55gTR&X-Amz-Signature=07aa9817b29163a5d0bb75c8591a75dda77b618cae168c1852f6b9a075b8c7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65UUJ42%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHJat5rGm%2FdN8Wg8d64uSnZqH31laUY5L4zLm5MevWgAiAgKwnJDS%2Ffe%2BQtUjpY8tNxJY%2BIgWhlbL%2BUqxpGkjhNLSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM6GGUtYu%2FJioPsZBFKtwDLstICDro1h4TwDN4cI6P7qBkYrRThkeGnYWK1DfbKnF2dOUc172FNjkhNrWgPuMyf9T1fLDxYqACoyDKKj5mC%2F%2FVudI4SbWm4XWw885iyItPSjj5DWOcJ8tD5z9yfty6hlNdYBIp7qwLppZxm2IQy14ozkwzvsiUIiOxk8I89dm18%2B3S9sLt85D8xwyVT4muBCae1KF7LOOm4%2FkrchXGGKj1ti3oAPe0251D5hsKIrfsk%2FtPrFy4XCoKAFzDFQioEiMjGT51n7hGr28CWA6AYYIwEgzMNZIUarbkYByAWsVRLOfQOp65epY6JcG0%2BxXRwCBVxAw6SS%2F%2Bta4E8MK8nmvQWcYNsjpA%2BmIsfs62SCOXmfBJkJHSV789YHY0HqmOfRtiKY%2FylVbkadDmb4r%2BeGLwimsf0ZeqbSGPy39o8fWS57611h44t75TGFpD1xE%2FlKOFSvAzi570friiTtzSl6HA0wfWipy6tuju5T0ZKO9uq%2Fit9JTekmZe5Me6qoMJ4gF12r6sZ3hE3wuiN69DPJmaiIecm57nuRo612J4ebQq2L8WbxKGy2vRv9kW43sCa%2BBi%2BA6RG8f539PTGU4x7BmWe4VJUxc%2BjobVO9HT%2Bheh39x3CXnoPro5IWEwm%2Br1vwY6pgGm%2FG0rhpq3vjjQUaxMiA%2F%2FydQUze6M2GbM%2BVUg9%2Bg9l95N%2BkM%2Bc3jtgjoi7oQdyxbmCLexeB1%2FOFfVVGcN3rszaQ8dSQE2ln1%2BQV0GPVOS2yEv5AapB6mt1JFFYy4llV08Uj%2FOMMAYWO30Mi%2BmpdoiQT%2FW25174JnXiHemKvSYPfj44rkrk5tE8VmhYpCO4RBUn3ISHF8Mm9h182W3WM8Ywzx55gTR&X-Amz-Signature=2ff338823b130efa54398b4ced0a709960dca8f7f2be3aadc6531c3bac1b6499&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65UUJ42%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHJat5rGm%2FdN8Wg8d64uSnZqH31laUY5L4zLm5MevWgAiAgKwnJDS%2Ffe%2BQtUjpY8tNxJY%2BIgWhlbL%2BUqxpGkjhNLSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM6GGUtYu%2FJioPsZBFKtwDLstICDro1h4TwDN4cI6P7qBkYrRThkeGnYWK1DfbKnF2dOUc172FNjkhNrWgPuMyf9T1fLDxYqACoyDKKj5mC%2F%2FVudI4SbWm4XWw885iyItPSjj5DWOcJ8tD5z9yfty6hlNdYBIp7qwLppZxm2IQy14ozkwzvsiUIiOxk8I89dm18%2B3S9sLt85D8xwyVT4muBCae1KF7LOOm4%2FkrchXGGKj1ti3oAPe0251D5hsKIrfsk%2FtPrFy4XCoKAFzDFQioEiMjGT51n7hGr28CWA6AYYIwEgzMNZIUarbkYByAWsVRLOfQOp65epY6JcG0%2BxXRwCBVxAw6SS%2F%2Bta4E8MK8nmvQWcYNsjpA%2BmIsfs62SCOXmfBJkJHSV789YHY0HqmOfRtiKY%2FylVbkadDmb4r%2BeGLwimsf0ZeqbSGPy39o8fWS57611h44t75TGFpD1xE%2FlKOFSvAzi570friiTtzSl6HA0wfWipy6tuju5T0ZKO9uq%2Fit9JTekmZe5Me6qoMJ4gF12r6sZ3hE3wuiN69DPJmaiIecm57nuRo612J4ebQq2L8WbxKGy2vRv9kW43sCa%2BBi%2BA6RG8f539PTGU4x7BmWe4VJUxc%2BjobVO9HT%2Bheh39x3CXnoPro5IWEwm%2Br1vwY6pgGm%2FG0rhpq3vjjQUaxMiA%2F%2FydQUze6M2GbM%2BVUg9%2Bg9l95N%2BkM%2Bc3jtgjoi7oQdyxbmCLexeB1%2FOFfVVGcN3rszaQ8dSQE2ln1%2BQV0GPVOS2yEv5AapB6mt1JFFYy4llV08Uj%2FOMMAYWO30Mi%2BmpdoiQT%2FW25174JnXiHemKvSYPfj44rkrk5tE8VmhYpCO4RBUn3ISHF8Mm9h182W3WM8Ywzx55gTR&X-Amz-Signature=19f8f23dd8b068d87ca8d71a9b4a75d23449b4e0451b4697e244b234e901eabc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65UUJ42%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHJat5rGm%2FdN8Wg8d64uSnZqH31laUY5L4zLm5MevWgAiAgKwnJDS%2Ffe%2BQtUjpY8tNxJY%2BIgWhlbL%2BUqxpGkjhNLSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM6GGUtYu%2FJioPsZBFKtwDLstICDro1h4TwDN4cI6P7qBkYrRThkeGnYWK1DfbKnF2dOUc172FNjkhNrWgPuMyf9T1fLDxYqACoyDKKj5mC%2F%2FVudI4SbWm4XWw885iyItPSjj5DWOcJ8tD5z9yfty6hlNdYBIp7qwLppZxm2IQy14ozkwzvsiUIiOxk8I89dm18%2B3S9sLt85D8xwyVT4muBCae1KF7LOOm4%2FkrchXGGKj1ti3oAPe0251D5hsKIrfsk%2FtPrFy4XCoKAFzDFQioEiMjGT51n7hGr28CWA6AYYIwEgzMNZIUarbkYByAWsVRLOfQOp65epY6JcG0%2BxXRwCBVxAw6SS%2F%2Bta4E8MK8nmvQWcYNsjpA%2BmIsfs62SCOXmfBJkJHSV789YHY0HqmOfRtiKY%2FylVbkadDmb4r%2BeGLwimsf0ZeqbSGPy39o8fWS57611h44t75TGFpD1xE%2FlKOFSvAzi570friiTtzSl6HA0wfWipy6tuju5T0ZKO9uq%2Fit9JTekmZe5Me6qoMJ4gF12r6sZ3hE3wuiN69DPJmaiIecm57nuRo612J4ebQq2L8WbxKGy2vRv9kW43sCa%2BBi%2BA6RG8f539PTGU4x7BmWe4VJUxc%2BjobVO9HT%2Bheh39x3CXnoPro5IWEwm%2Br1vwY6pgGm%2FG0rhpq3vjjQUaxMiA%2F%2FydQUze6M2GbM%2BVUg9%2Bg9l95N%2BkM%2Bc3jtgjoi7oQdyxbmCLexeB1%2FOFfVVGcN3rszaQ8dSQE2ln1%2BQV0GPVOS2yEv5AapB6mt1JFFYy4llV08Uj%2FOMMAYWO30Mi%2BmpdoiQT%2FW25174JnXiHemKvSYPfj44rkrk5tE8VmhYpCO4RBUn3ISHF8Mm9h182W3WM8Ywzx55gTR&X-Amz-Signature=1b1bd4d197f8a07861a3ce3124c68fe948dc41b26305a2d177e94b7d9f172f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65UUJ42%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHJat5rGm%2FdN8Wg8d64uSnZqH31laUY5L4zLm5MevWgAiAgKwnJDS%2Ffe%2BQtUjpY8tNxJY%2BIgWhlbL%2BUqxpGkjhNLSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM6GGUtYu%2FJioPsZBFKtwDLstICDro1h4TwDN4cI6P7qBkYrRThkeGnYWK1DfbKnF2dOUc172FNjkhNrWgPuMyf9T1fLDxYqACoyDKKj5mC%2F%2FVudI4SbWm4XWw885iyItPSjj5DWOcJ8tD5z9yfty6hlNdYBIp7qwLppZxm2IQy14ozkwzvsiUIiOxk8I89dm18%2B3S9sLt85D8xwyVT4muBCae1KF7LOOm4%2FkrchXGGKj1ti3oAPe0251D5hsKIrfsk%2FtPrFy4XCoKAFzDFQioEiMjGT51n7hGr28CWA6AYYIwEgzMNZIUarbkYByAWsVRLOfQOp65epY6JcG0%2BxXRwCBVxAw6SS%2F%2Bta4E8MK8nmvQWcYNsjpA%2BmIsfs62SCOXmfBJkJHSV789YHY0HqmOfRtiKY%2FylVbkadDmb4r%2BeGLwimsf0ZeqbSGPy39o8fWS57611h44t75TGFpD1xE%2FlKOFSvAzi570friiTtzSl6HA0wfWipy6tuju5T0ZKO9uq%2Fit9JTekmZe5Me6qoMJ4gF12r6sZ3hE3wuiN69DPJmaiIecm57nuRo612J4ebQq2L8WbxKGy2vRv9kW43sCa%2BBi%2BA6RG8f539PTGU4x7BmWe4VJUxc%2BjobVO9HT%2Bheh39x3CXnoPro5IWEwm%2Br1vwY6pgGm%2FG0rhpq3vjjQUaxMiA%2F%2FydQUze6M2GbM%2BVUg9%2Bg9l95N%2BkM%2Bc3jtgjoi7oQdyxbmCLexeB1%2FOFfVVGcN3rszaQ8dSQE2ln1%2BQV0GPVOS2yEv5AapB6mt1JFFYy4llV08Uj%2FOMMAYWO30Mi%2BmpdoiQT%2FW25174JnXiHemKvSYPfj44rkrk5tE8VmhYpCO4RBUn3ISHF8Mm9h182W3WM8Ywzx55gTR&X-Amz-Signature=cbbb0a04f4d2e0e87933681086bfb8dce28aeb2bf51287f169e2379653a8b4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65UUJ42%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHJat5rGm%2FdN8Wg8d64uSnZqH31laUY5L4zLm5MevWgAiAgKwnJDS%2Ffe%2BQtUjpY8tNxJY%2BIgWhlbL%2BUqxpGkjhNLSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM6GGUtYu%2FJioPsZBFKtwDLstICDro1h4TwDN4cI6P7qBkYrRThkeGnYWK1DfbKnF2dOUc172FNjkhNrWgPuMyf9T1fLDxYqACoyDKKj5mC%2F%2FVudI4SbWm4XWw885iyItPSjj5DWOcJ8tD5z9yfty6hlNdYBIp7qwLppZxm2IQy14ozkwzvsiUIiOxk8I89dm18%2B3S9sLt85D8xwyVT4muBCae1KF7LOOm4%2FkrchXGGKj1ti3oAPe0251D5hsKIrfsk%2FtPrFy4XCoKAFzDFQioEiMjGT51n7hGr28CWA6AYYIwEgzMNZIUarbkYByAWsVRLOfQOp65epY6JcG0%2BxXRwCBVxAw6SS%2F%2Bta4E8MK8nmvQWcYNsjpA%2BmIsfs62SCOXmfBJkJHSV789YHY0HqmOfRtiKY%2FylVbkadDmb4r%2BeGLwimsf0ZeqbSGPy39o8fWS57611h44t75TGFpD1xE%2FlKOFSvAzi570friiTtzSl6HA0wfWipy6tuju5T0ZKO9uq%2Fit9JTekmZe5Me6qoMJ4gF12r6sZ3hE3wuiN69DPJmaiIecm57nuRo612J4ebQq2L8WbxKGy2vRv9kW43sCa%2BBi%2BA6RG8f539PTGU4x7BmWe4VJUxc%2BjobVO9HT%2Bheh39x3CXnoPro5IWEwm%2Br1vwY6pgGm%2FG0rhpq3vjjQUaxMiA%2F%2FydQUze6M2GbM%2BVUg9%2Bg9l95N%2BkM%2Bc3jtgjoi7oQdyxbmCLexeB1%2FOFfVVGcN3rszaQ8dSQE2ln1%2BQV0GPVOS2yEv5AapB6mt1JFFYy4llV08Uj%2FOMMAYWO30Mi%2BmpdoiQT%2FW25174JnXiHemKvSYPfj44rkrk5tE8VmhYpCO4RBUn3ISHF8Mm9h182W3WM8Ywzx55gTR&X-Amz-Signature=40f44b2a34205fb282e9d26948187d152a42f2b7e7b9f8d0dc9bba146ba2d65a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65UUJ42%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHJat5rGm%2FdN8Wg8d64uSnZqH31laUY5L4zLm5MevWgAiAgKwnJDS%2Ffe%2BQtUjpY8tNxJY%2BIgWhlbL%2BUqxpGkjhNLSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM6GGUtYu%2FJioPsZBFKtwDLstICDro1h4TwDN4cI6P7qBkYrRThkeGnYWK1DfbKnF2dOUc172FNjkhNrWgPuMyf9T1fLDxYqACoyDKKj5mC%2F%2FVudI4SbWm4XWw885iyItPSjj5DWOcJ8tD5z9yfty6hlNdYBIp7qwLppZxm2IQy14ozkwzvsiUIiOxk8I89dm18%2B3S9sLt85D8xwyVT4muBCae1KF7LOOm4%2FkrchXGGKj1ti3oAPe0251D5hsKIrfsk%2FtPrFy4XCoKAFzDFQioEiMjGT51n7hGr28CWA6AYYIwEgzMNZIUarbkYByAWsVRLOfQOp65epY6JcG0%2BxXRwCBVxAw6SS%2F%2Bta4E8MK8nmvQWcYNsjpA%2BmIsfs62SCOXmfBJkJHSV789YHY0HqmOfRtiKY%2FylVbkadDmb4r%2BeGLwimsf0ZeqbSGPy39o8fWS57611h44t75TGFpD1xE%2FlKOFSvAzi570friiTtzSl6HA0wfWipy6tuju5T0ZKO9uq%2Fit9JTekmZe5Me6qoMJ4gF12r6sZ3hE3wuiN69DPJmaiIecm57nuRo612J4ebQq2L8WbxKGy2vRv9kW43sCa%2BBi%2BA6RG8f539PTGU4x7BmWe4VJUxc%2BjobVO9HT%2Bheh39x3CXnoPro5IWEwm%2Br1vwY6pgGm%2FG0rhpq3vjjQUaxMiA%2F%2FydQUze6M2GbM%2BVUg9%2Bg9l95N%2BkM%2Bc3jtgjoi7oQdyxbmCLexeB1%2FOFfVVGcN3rszaQ8dSQE2ln1%2BQV0GPVOS2yEv5AapB6mt1JFFYy4llV08Uj%2FOMMAYWO30Mi%2BmpdoiQT%2FW25174JnXiHemKvSYPfj44rkrk5tE8VmhYpCO4RBUn3ISHF8Mm9h182W3WM8Ywzx55gTR&X-Amz-Signature=b09105c2e057fa3b03844a9dac5f330838446943b700c303a1d60d3973e1283a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
