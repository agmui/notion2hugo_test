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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3J3VHE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACienBy4L3i2ZFmp9h2zW5pHNjAsmqFSwUgcYnppwUsAiBw1bqpLLOLeZYexWZOaHREpLavvQLsR8p1pll93%2Bu4%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeJzhbf%2FtGe5gOYsKtwDhEZGIkAzWJ991LFtQnVlCWp7of3a2um07EAAh6IZyoC8XD3%2BQpg81rlZuQIJRDT8CVGi%2BzNDP4tqGyWGGVwCfodmZhAFSHpv3AYRty%2BV5%2F%2BIf%2BNreyXerIdr93Wcy9bWqIBYJsD5LjMhtfDX8reeYViSDC6DIJaArplDxALYvI%2BuZkZZVhGpBHZPn7ACCPPKihljN3lmQYyogx2CBq%2FTUX6my3OicUlow2WaXDb9H3B81R7DnN8ON6Og6VXfvXbU56ydXz%2BJxQaDjCTWvlm2W1F0pJ1YD2RCZ6MpJTn4tha0LduO6IMBCtzagVbtqteZsFAVPJvf6zABRVWqQULToBRLB71DaTPG4VTYls%2F1ZFL5DNTlKrV2RdSHctyn%2Bty6bSDc3p9WDva5rtwLSoIHkaqtUsLzKUr9v5VZ0i%2B0CS1xwEbRc%2FuxKigxmkuRP4a8tcjsRLeCZMT1L1QJj46Gp7cb0E%2FcE0hyy%2FcR%2FHZomk%2BqI%2FkItSHfFQvUPKk4kZdG%2Fye1O5vuHAVcJpQmvvu8UZVIp2klJhujD5Kzk6rcm%2BPh4pG60%2FAbGBsVMDl2UmG3O1cguFyDF5VleijmxulAkPtXZMq5kzZuMb%2Buc6SOA%2F8xjlnaQC9gSNNXpXUwy53lxAY6pgEWOMExbF2V9bNDkk9L4XvJF34wf%2B98dET829vZQMGirNyfPEdhsc9LVWJb7xC4X9ysoKBYDIIpKtKcMYMCJR0YJcc6kVI00w%2F7FrkQW2cXDqcS8ousywhM4tv5uFu%2FJuR%2BCyUtFRj6GvL%2BViC49ATAhrL0dx5PK3KbtCYVMsf0fSAEzEkjRPWxJfQbLQh3qbeovvkRUbkY1sFg%2Bc3ULefTzaymGQ8j&X-Amz-Signature=a98333b2959b3d2d009369a9f4593f7bf5d218f3dd68d86407f4a9302535eebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3J3VHE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACienBy4L3i2ZFmp9h2zW5pHNjAsmqFSwUgcYnppwUsAiBw1bqpLLOLeZYexWZOaHREpLavvQLsR8p1pll93%2Bu4%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeJzhbf%2FtGe5gOYsKtwDhEZGIkAzWJ991LFtQnVlCWp7of3a2um07EAAh6IZyoC8XD3%2BQpg81rlZuQIJRDT8CVGi%2BzNDP4tqGyWGGVwCfodmZhAFSHpv3AYRty%2BV5%2F%2BIf%2BNreyXerIdr93Wcy9bWqIBYJsD5LjMhtfDX8reeYViSDC6DIJaArplDxALYvI%2BuZkZZVhGpBHZPn7ACCPPKihljN3lmQYyogx2CBq%2FTUX6my3OicUlow2WaXDb9H3B81R7DnN8ON6Og6VXfvXbU56ydXz%2BJxQaDjCTWvlm2W1F0pJ1YD2RCZ6MpJTn4tha0LduO6IMBCtzagVbtqteZsFAVPJvf6zABRVWqQULToBRLB71DaTPG4VTYls%2F1ZFL5DNTlKrV2RdSHctyn%2Bty6bSDc3p9WDva5rtwLSoIHkaqtUsLzKUr9v5VZ0i%2B0CS1xwEbRc%2FuxKigxmkuRP4a8tcjsRLeCZMT1L1QJj46Gp7cb0E%2FcE0hyy%2FcR%2FHZomk%2BqI%2FkItSHfFQvUPKk4kZdG%2Fye1O5vuHAVcJpQmvvu8UZVIp2klJhujD5Kzk6rcm%2BPh4pG60%2FAbGBsVMDl2UmG3O1cguFyDF5VleijmxulAkPtXZMq5kzZuMb%2Buc6SOA%2F8xjlnaQC9gSNNXpXUwy53lxAY6pgEWOMExbF2V9bNDkk9L4XvJF34wf%2B98dET829vZQMGirNyfPEdhsc9LVWJb7xC4X9ysoKBYDIIpKtKcMYMCJR0YJcc6kVI00w%2F7FrkQW2cXDqcS8ousywhM4tv5uFu%2FJuR%2BCyUtFRj6GvL%2BViC49ATAhrL0dx5PK3KbtCYVMsf0fSAEzEkjRPWxJfQbLQh3qbeovvkRUbkY1sFg%2Bc3ULefTzaymGQ8j&X-Amz-Signature=cd80684c183f65e737336bdf199df4460dad679bb7cff8ce2dd2e0ff58f9dd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3J3VHE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACienBy4L3i2ZFmp9h2zW5pHNjAsmqFSwUgcYnppwUsAiBw1bqpLLOLeZYexWZOaHREpLavvQLsR8p1pll93%2Bu4%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeJzhbf%2FtGe5gOYsKtwDhEZGIkAzWJ991LFtQnVlCWp7of3a2um07EAAh6IZyoC8XD3%2BQpg81rlZuQIJRDT8CVGi%2BzNDP4tqGyWGGVwCfodmZhAFSHpv3AYRty%2BV5%2F%2BIf%2BNreyXerIdr93Wcy9bWqIBYJsD5LjMhtfDX8reeYViSDC6DIJaArplDxALYvI%2BuZkZZVhGpBHZPn7ACCPPKihljN3lmQYyogx2CBq%2FTUX6my3OicUlow2WaXDb9H3B81R7DnN8ON6Og6VXfvXbU56ydXz%2BJxQaDjCTWvlm2W1F0pJ1YD2RCZ6MpJTn4tha0LduO6IMBCtzagVbtqteZsFAVPJvf6zABRVWqQULToBRLB71DaTPG4VTYls%2F1ZFL5DNTlKrV2RdSHctyn%2Bty6bSDc3p9WDva5rtwLSoIHkaqtUsLzKUr9v5VZ0i%2B0CS1xwEbRc%2FuxKigxmkuRP4a8tcjsRLeCZMT1L1QJj46Gp7cb0E%2FcE0hyy%2FcR%2FHZomk%2BqI%2FkItSHfFQvUPKk4kZdG%2Fye1O5vuHAVcJpQmvvu8UZVIp2klJhujD5Kzk6rcm%2BPh4pG60%2FAbGBsVMDl2UmG3O1cguFyDF5VleijmxulAkPtXZMq5kzZuMb%2Buc6SOA%2F8xjlnaQC9gSNNXpXUwy53lxAY6pgEWOMExbF2V9bNDkk9L4XvJF34wf%2B98dET829vZQMGirNyfPEdhsc9LVWJb7xC4X9ysoKBYDIIpKtKcMYMCJR0YJcc6kVI00w%2F7FrkQW2cXDqcS8ousywhM4tv5uFu%2FJuR%2BCyUtFRj6GvL%2BViC49ATAhrL0dx5PK3KbtCYVMsf0fSAEzEkjRPWxJfQbLQh3qbeovvkRUbkY1sFg%2Bc3ULefTzaymGQ8j&X-Amz-Signature=e4ce7a0e2e68cf8f80d7c7e8d86df161c4b9beea652c102b3c65511a5851dc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3J3VHE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACienBy4L3i2ZFmp9h2zW5pHNjAsmqFSwUgcYnppwUsAiBw1bqpLLOLeZYexWZOaHREpLavvQLsR8p1pll93%2Bu4%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeJzhbf%2FtGe5gOYsKtwDhEZGIkAzWJ991LFtQnVlCWp7of3a2um07EAAh6IZyoC8XD3%2BQpg81rlZuQIJRDT8CVGi%2BzNDP4tqGyWGGVwCfodmZhAFSHpv3AYRty%2BV5%2F%2BIf%2BNreyXerIdr93Wcy9bWqIBYJsD5LjMhtfDX8reeYViSDC6DIJaArplDxALYvI%2BuZkZZVhGpBHZPn7ACCPPKihljN3lmQYyogx2CBq%2FTUX6my3OicUlow2WaXDb9H3B81R7DnN8ON6Og6VXfvXbU56ydXz%2BJxQaDjCTWvlm2W1F0pJ1YD2RCZ6MpJTn4tha0LduO6IMBCtzagVbtqteZsFAVPJvf6zABRVWqQULToBRLB71DaTPG4VTYls%2F1ZFL5DNTlKrV2RdSHctyn%2Bty6bSDc3p9WDva5rtwLSoIHkaqtUsLzKUr9v5VZ0i%2B0CS1xwEbRc%2FuxKigxmkuRP4a8tcjsRLeCZMT1L1QJj46Gp7cb0E%2FcE0hyy%2FcR%2FHZomk%2BqI%2FkItSHfFQvUPKk4kZdG%2Fye1O5vuHAVcJpQmvvu8UZVIp2klJhujD5Kzk6rcm%2BPh4pG60%2FAbGBsVMDl2UmG3O1cguFyDF5VleijmxulAkPtXZMq5kzZuMb%2Buc6SOA%2F8xjlnaQC9gSNNXpXUwy53lxAY6pgEWOMExbF2V9bNDkk9L4XvJF34wf%2B98dET829vZQMGirNyfPEdhsc9LVWJb7xC4X9ysoKBYDIIpKtKcMYMCJR0YJcc6kVI00w%2F7FrkQW2cXDqcS8ousywhM4tv5uFu%2FJuR%2BCyUtFRj6GvL%2BViC49ATAhrL0dx5PK3KbtCYVMsf0fSAEzEkjRPWxJfQbLQh3qbeovvkRUbkY1sFg%2Bc3ULefTzaymGQ8j&X-Amz-Signature=a22f491964c217139bd73ab11902e9f59572bd88a2ae4427a4fd285d558c4f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3J3VHE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACienBy4L3i2ZFmp9h2zW5pHNjAsmqFSwUgcYnppwUsAiBw1bqpLLOLeZYexWZOaHREpLavvQLsR8p1pll93%2Bu4%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeJzhbf%2FtGe5gOYsKtwDhEZGIkAzWJ991LFtQnVlCWp7of3a2um07EAAh6IZyoC8XD3%2BQpg81rlZuQIJRDT8CVGi%2BzNDP4tqGyWGGVwCfodmZhAFSHpv3AYRty%2BV5%2F%2BIf%2BNreyXerIdr93Wcy9bWqIBYJsD5LjMhtfDX8reeYViSDC6DIJaArplDxALYvI%2BuZkZZVhGpBHZPn7ACCPPKihljN3lmQYyogx2CBq%2FTUX6my3OicUlow2WaXDb9H3B81R7DnN8ON6Og6VXfvXbU56ydXz%2BJxQaDjCTWvlm2W1F0pJ1YD2RCZ6MpJTn4tha0LduO6IMBCtzagVbtqteZsFAVPJvf6zABRVWqQULToBRLB71DaTPG4VTYls%2F1ZFL5DNTlKrV2RdSHctyn%2Bty6bSDc3p9WDva5rtwLSoIHkaqtUsLzKUr9v5VZ0i%2B0CS1xwEbRc%2FuxKigxmkuRP4a8tcjsRLeCZMT1L1QJj46Gp7cb0E%2FcE0hyy%2FcR%2FHZomk%2BqI%2FkItSHfFQvUPKk4kZdG%2Fye1O5vuHAVcJpQmvvu8UZVIp2klJhujD5Kzk6rcm%2BPh4pG60%2FAbGBsVMDl2UmG3O1cguFyDF5VleijmxulAkPtXZMq5kzZuMb%2Buc6SOA%2F8xjlnaQC9gSNNXpXUwy53lxAY6pgEWOMExbF2V9bNDkk9L4XvJF34wf%2B98dET829vZQMGirNyfPEdhsc9LVWJb7xC4X9ysoKBYDIIpKtKcMYMCJR0YJcc6kVI00w%2F7FrkQW2cXDqcS8ousywhM4tv5uFu%2FJuR%2BCyUtFRj6GvL%2BViC49ATAhrL0dx5PK3KbtCYVMsf0fSAEzEkjRPWxJfQbLQh3qbeovvkRUbkY1sFg%2Bc3ULefTzaymGQ8j&X-Amz-Signature=cba75e3c9f17ca2433e4378bf58a0072819894a3f5114b79011f8ed72569a0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3J3VHE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACienBy4L3i2ZFmp9h2zW5pHNjAsmqFSwUgcYnppwUsAiBw1bqpLLOLeZYexWZOaHREpLavvQLsR8p1pll93%2Bu4%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeJzhbf%2FtGe5gOYsKtwDhEZGIkAzWJ991LFtQnVlCWp7of3a2um07EAAh6IZyoC8XD3%2BQpg81rlZuQIJRDT8CVGi%2BzNDP4tqGyWGGVwCfodmZhAFSHpv3AYRty%2BV5%2F%2BIf%2BNreyXerIdr93Wcy9bWqIBYJsD5LjMhtfDX8reeYViSDC6DIJaArplDxALYvI%2BuZkZZVhGpBHZPn7ACCPPKihljN3lmQYyogx2CBq%2FTUX6my3OicUlow2WaXDb9H3B81R7DnN8ON6Og6VXfvXbU56ydXz%2BJxQaDjCTWvlm2W1F0pJ1YD2RCZ6MpJTn4tha0LduO6IMBCtzagVbtqteZsFAVPJvf6zABRVWqQULToBRLB71DaTPG4VTYls%2F1ZFL5DNTlKrV2RdSHctyn%2Bty6bSDc3p9WDva5rtwLSoIHkaqtUsLzKUr9v5VZ0i%2B0CS1xwEbRc%2FuxKigxmkuRP4a8tcjsRLeCZMT1L1QJj46Gp7cb0E%2FcE0hyy%2FcR%2FHZomk%2BqI%2FkItSHfFQvUPKk4kZdG%2Fye1O5vuHAVcJpQmvvu8UZVIp2klJhujD5Kzk6rcm%2BPh4pG60%2FAbGBsVMDl2UmG3O1cguFyDF5VleijmxulAkPtXZMq5kzZuMb%2Buc6SOA%2F8xjlnaQC9gSNNXpXUwy53lxAY6pgEWOMExbF2V9bNDkk9L4XvJF34wf%2B98dET829vZQMGirNyfPEdhsc9LVWJb7xC4X9ysoKBYDIIpKtKcMYMCJR0YJcc6kVI00w%2F7FrkQW2cXDqcS8ousywhM4tv5uFu%2FJuR%2BCyUtFRj6GvL%2BViC49ATAhrL0dx5PK3KbtCYVMsf0fSAEzEkjRPWxJfQbLQh3qbeovvkRUbkY1sFg%2Bc3ULefTzaymGQ8j&X-Amz-Signature=39b9c91758f5fe4cfc51542cfdfc0c78f8f9fea12865d56c184807e261052738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3J3VHE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACienBy4L3i2ZFmp9h2zW5pHNjAsmqFSwUgcYnppwUsAiBw1bqpLLOLeZYexWZOaHREpLavvQLsR8p1pll93%2Bu4%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeJzhbf%2FtGe5gOYsKtwDhEZGIkAzWJ991LFtQnVlCWp7of3a2um07EAAh6IZyoC8XD3%2BQpg81rlZuQIJRDT8CVGi%2BzNDP4tqGyWGGVwCfodmZhAFSHpv3AYRty%2BV5%2F%2BIf%2BNreyXerIdr93Wcy9bWqIBYJsD5LjMhtfDX8reeYViSDC6DIJaArplDxALYvI%2BuZkZZVhGpBHZPn7ACCPPKihljN3lmQYyogx2CBq%2FTUX6my3OicUlow2WaXDb9H3B81R7DnN8ON6Og6VXfvXbU56ydXz%2BJxQaDjCTWvlm2W1F0pJ1YD2RCZ6MpJTn4tha0LduO6IMBCtzagVbtqteZsFAVPJvf6zABRVWqQULToBRLB71DaTPG4VTYls%2F1ZFL5DNTlKrV2RdSHctyn%2Bty6bSDc3p9WDva5rtwLSoIHkaqtUsLzKUr9v5VZ0i%2B0CS1xwEbRc%2FuxKigxmkuRP4a8tcjsRLeCZMT1L1QJj46Gp7cb0E%2FcE0hyy%2FcR%2FHZomk%2BqI%2FkItSHfFQvUPKk4kZdG%2Fye1O5vuHAVcJpQmvvu8UZVIp2klJhujD5Kzk6rcm%2BPh4pG60%2FAbGBsVMDl2UmG3O1cguFyDF5VleijmxulAkPtXZMq5kzZuMb%2Buc6SOA%2F8xjlnaQC9gSNNXpXUwy53lxAY6pgEWOMExbF2V9bNDkk9L4XvJF34wf%2B98dET829vZQMGirNyfPEdhsc9LVWJb7xC4X9ysoKBYDIIpKtKcMYMCJR0YJcc6kVI00w%2F7FrkQW2cXDqcS8ousywhM4tv5uFu%2FJuR%2BCyUtFRj6GvL%2BViC49ATAhrL0dx5PK3KbtCYVMsf0fSAEzEkjRPWxJfQbLQh3qbeovvkRUbkY1sFg%2Bc3ULefTzaymGQ8j&X-Amz-Signature=aae684757a91b88a900afa08953e8ff80c8652baa26903db8a3ef543157488ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
