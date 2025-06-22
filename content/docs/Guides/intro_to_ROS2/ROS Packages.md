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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5IAWPU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhiTdKLJwZ2cJiw4FKqukapyijajK9oPjUtceLfweuMAiAKj%2BWdpoy7pDUIM4uZ7DM4oEfEskWukNEysWLKNh8z6CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfaOds%2FKhsh9xzk52KtwDvc8o313y1Cn6TlozPpOgUVDHiIjzrTqbBw2s%2FaTU%2FCwbkBTujlFf6%2FffuWuF4dT8Q85bbbww8q%2F9M2qLJRo3OBDh8fz1YIGOXJJcC75Jn4B6f0MAsF9ik5ec0asHb6gVR4WA9Ez31BzCKidqGi0fNW0YznqR%2FFqUcycAuOpqnxJ8SzZ%2FMDqdpgWrv41vfpdPsR8G34QkpWyRVCeIFGTgKkp539C499JDQ%2B0IRke9song2W2u%2B%2FRwd44Jb2e8VlwaWihB%2FyMLi5JCXGlcsiIGcgOeBSqVUIRJRDXdE0dcjoYLKMtaGbEXP%2BPH17VtuPbkDYn7O%2F%2FKxb%2FKP8L2nfbJxOYUX2srTjXfsWbWpx9ATSl0kM7W2gLmKfFZ9nF3TWpV99Y7wL5Hu4wdj6epLfbCdroyVBfO0UEL93%2ByV2qt0rYE9U4JrpoBHouQV2jAaGjcpqzEwaR1Hk5Yy6yvRzmKPvTLundAYVqkn5ZURL%2Fqpl4FAnaZwcv07Er9SYbXU3whScgIiNTDto4tzz21HL9YTagmVyjtf6KS2oSW0cTtY2n7Y6F3YUWIDPsuB581aisvlAOMbGyyQdibLIV6FP%2BU7EiSIOGwWXm69FeDgWMG7G851KieRH6jc53o7mcwtYfdwgY6pgF1q4aZ99SYw0Qnq9Veguszn1kM%2FMU2e07sEbkIwq%2BG7sVU8jcimNjvdUJwcNmh6s5WzVFdvsv5mbS3E8rELQbEKYDDzfZvMKyzyarp8muLO%2B2o6bqNgq92MnG3e63N59MX%2BXUnXeoX805ZlXQ%2FgLIOQaOMb6alIgTRumfSWAR25ZfFt7tV30ZYx6jZNG3Bt26c5nBTz2SHORdtcn9q1KrDo1CpAX26&X-Amz-Signature=e16b29ceaeafb07e80780d5d588b6a02aef1a1f9a2ddbd82139a0e7176764586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5IAWPU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhiTdKLJwZ2cJiw4FKqukapyijajK9oPjUtceLfweuMAiAKj%2BWdpoy7pDUIM4uZ7DM4oEfEskWukNEysWLKNh8z6CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfaOds%2FKhsh9xzk52KtwDvc8o313y1Cn6TlozPpOgUVDHiIjzrTqbBw2s%2FaTU%2FCwbkBTujlFf6%2FffuWuF4dT8Q85bbbww8q%2F9M2qLJRo3OBDh8fz1YIGOXJJcC75Jn4B6f0MAsF9ik5ec0asHb6gVR4WA9Ez31BzCKidqGi0fNW0YznqR%2FFqUcycAuOpqnxJ8SzZ%2FMDqdpgWrv41vfpdPsR8G34QkpWyRVCeIFGTgKkp539C499JDQ%2B0IRke9song2W2u%2B%2FRwd44Jb2e8VlwaWihB%2FyMLi5JCXGlcsiIGcgOeBSqVUIRJRDXdE0dcjoYLKMtaGbEXP%2BPH17VtuPbkDYn7O%2F%2FKxb%2FKP8L2nfbJxOYUX2srTjXfsWbWpx9ATSl0kM7W2gLmKfFZ9nF3TWpV99Y7wL5Hu4wdj6epLfbCdroyVBfO0UEL93%2ByV2qt0rYE9U4JrpoBHouQV2jAaGjcpqzEwaR1Hk5Yy6yvRzmKPvTLundAYVqkn5ZURL%2Fqpl4FAnaZwcv07Er9SYbXU3whScgIiNTDto4tzz21HL9YTagmVyjtf6KS2oSW0cTtY2n7Y6F3YUWIDPsuB581aisvlAOMbGyyQdibLIV6FP%2BU7EiSIOGwWXm69FeDgWMG7G851KieRH6jc53o7mcwtYfdwgY6pgF1q4aZ99SYw0Qnq9Veguszn1kM%2FMU2e07sEbkIwq%2BG7sVU8jcimNjvdUJwcNmh6s5WzVFdvsv5mbS3E8rELQbEKYDDzfZvMKyzyarp8muLO%2B2o6bqNgq92MnG3e63N59MX%2BXUnXeoX805ZlXQ%2FgLIOQaOMb6alIgTRumfSWAR25ZfFt7tV30ZYx6jZNG3Bt26c5nBTz2SHORdtcn9q1KrDo1CpAX26&X-Amz-Signature=794c3b90a5e1251b6a2e0e0837fbb34027ad352d0d29ce65f245905cab124c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5IAWPU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhiTdKLJwZ2cJiw4FKqukapyijajK9oPjUtceLfweuMAiAKj%2BWdpoy7pDUIM4uZ7DM4oEfEskWukNEysWLKNh8z6CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfaOds%2FKhsh9xzk52KtwDvc8o313y1Cn6TlozPpOgUVDHiIjzrTqbBw2s%2FaTU%2FCwbkBTujlFf6%2FffuWuF4dT8Q85bbbww8q%2F9M2qLJRo3OBDh8fz1YIGOXJJcC75Jn4B6f0MAsF9ik5ec0asHb6gVR4WA9Ez31BzCKidqGi0fNW0YznqR%2FFqUcycAuOpqnxJ8SzZ%2FMDqdpgWrv41vfpdPsR8G34QkpWyRVCeIFGTgKkp539C499JDQ%2B0IRke9song2W2u%2B%2FRwd44Jb2e8VlwaWihB%2FyMLi5JCXGlcsiIGcgOeBSqVUIRJRDXdE0dcjoYLKMtaGbEXP%2BPH17VtuPbkDYn7O%2F%2FKxb%2FKP8L2nfbJxOYUX2srTjXfsWbWpx9ATSl0kM7W2gLmKfFZ9nF3TWpV99Y7wL5Hu4wdj6epLfbCdroyVBfO0UEL93%2ByV2qt0rYE9U4JrpoBHouQV2jAaGjcpqzEwaR1Hk5Yy6yvRzmKPvTLundAYVqkn5ZURL%2Fqpl4FAnaZwcv07Er9SYbXU3whScgIiNTDto4tzz21HL9YTagmVyjtf6KS2oSW0cTtY2n7Y6F3YUWIDPsuB581aisvlAOMbGyyQdibLIV6FP%2BU7EiSIOGwWXm69FeDgWMG7G851KieRH6jc53o7mcwtYfdwgY6pgF1q4aZ99SYw0Qnq9Veguszn1kM%2FMU2e07sEbkIwq%2BG7sVU8jcimNjvdUJwcNmh6s5WzVFdvsv5mbS3E8rELQbEKYDDzfZvMKyzyarp8muLO%2B2o6bqNgq92MnG3e63N59MX%2BXUnXeoX805ZlXQ%2FgLIOQaOMb6alIgTRumfSWAR25ZfFt7tV30ZYx6jZNG3Bt26c5nBTz2SHORdtcn9q1KrDo1CpAX26&X-Amz-Signature=8aebb432669c07ea01462422cf1c0aa24ae267930e3fbc3a45bc7d4b46fcea2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5IAWPU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhiTdKLJwZ2cJiw4FKqukapyijajK9oPjUtceLfweuMAiAKj%2BWdpoy7pDUIM4uZ7DM4oEfEskWukNEysWLKNh8z6CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfaOds%2FKhsh9xzk52KtwDvc8o313y1Cn6TlozPpOgUVDHiIjzrTqbBw2s%2FaTU%2FCwbkBTujlFf6%2FffuWuF4dT8Q85bbbww8q%2F9M2qLJRo3OBDh8fz1YIGOXJJcC75Jn4B6f0MAsF9ik5ec0asHb6gVR4WA9Ez31BzCKidqGi0fNW0YznqR%2FFqUcycAuOpqnxJ8SzZ%2FMDqdpgWrv41vfpdPsR8G34QkpWyRVCeIFGTgKkp539C499JDQ%2B0IRke9song2W2u%2B%2FRwd44Jb2e8VlwaWihB%2FyMLi5JCXGlcsiIGcgOeBSqVUIRJRDXdE0dcjoYLKMtaGbEXP%2BPH17VtuPbkDYn7O%2F%2FKxb%2FKP8L2nfbJxOYUX2srTjXfsWbWpx9ATSl0kM7W2gLmKfFZ9nF3TWpV99Y7wL5Hu4wdj6epLfbCdroyVBfO0UEL93%2ByV2qt0rYE9U4JrpoBHouQV2jAaGjcpqzEwaR1Hk5Yy6yvRzmKPvTLundAYVqkn5ZURL%2Fqpl4FAnaZwcv07Er9SYbXU3whScgIiNTDto4tzz21HL9YTagmVyjtf6KS2oSW0cTtY2n7Y6F3YUWIDPsuB581aisvlAOMbGyyQdibLIV6FP%2BU7EiSIOGwWXm69FeDgWMG7G851KieRH6jc53o7mcwtYfdwgY6pgF1q4aZ99SYw0Qnq9Veguszn1kM%2FMU2e07sEbkIwq%2BG7sVU8jcimNjvdUJwcNmh6s5WzVFdvsv5mbS3E8rELQbEKYDDzfZvMKyzyarp8muLO%2B2o6bqNgq92MnG3e63N59MX%2BXUnXeoX805ZlXQ%2FgLIOQaOMb6alIgTRumfSWAR25ZfFt7tV30ZYx6jZNG3Bt26c5nBTz2SHORdtcn9q1KrDo1CpAX26&X-Amz-Signature=9578397bc5dccb459137a29dbd64108242cc3f39ac04313de27706bbd3d0b0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5IAWPU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhiTdKLJwZ2cJiw4FKqukapyijajK9oPjUtceLfweuMAiAKj%2BWdpoy7pDUIM4uZ7DM4oEfEskWukNEysWLKNh8z6CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfaOds%2FKhsh9xzk52KtwDvc8o313y1Cn6TlozPpOgUVDHiIjzrTqbBw2s%2FaTU%2FCwbkBTujlFf6%2FffuWuF4dT8Q85bbbww8q%2F9M2qLJRo3OBDh8fz1YIGOXJJcC75Jn4B6f0MAsF9ik5ec0asHb6gVR4WA9Ez31BzCKidqGi0fNW0YznqR%2FFqUcycAuOpqnxJ8SzZ%2FMDqdpgWrv41vfpdPsR8G34QkpWyRVCeIFGTgKkp539C499JDQ%2B0IRke9song2W2u%2B%2FRwd44Jb2e8VlwaWihB%2FyMLi5JCXGlcsiIGcgOeBSqVUIRJRDXdE0dcjoYLKMtaGbEXP%2BPH17VtuPbkDYn7O%2F%2FKxb%2FKP8L2nfbJxOYUX2srTjXfsWbWpx9ATSl0kM7W2gLmKfFZ9nF3TWpV99Y7wL5Hu4wdj6epLfbCdroyVBfO0UEL93%2ByV2qt0rYE9U4JrpoBHouQV2jAaGjcpqzEwaR1Hk5Yy6yvRzmKPvTLundAYVqkn5ZURL%2Fqpl4FAnaZwcv07Er9SYbXU3whScgIiNTDto4tzz21HL9YTagmVyjtf6KS2oSW0cTtY2n7Y6F3YUWIDPsuB581aisvlAOMbGyyQdibLIV6FP%2BU7EiSIOGwWXm69FeDgWMG7G851KieRH6jc53o7mcwtYfdwgY6pgF1q4aZ99SYw0Qnq9Veguszn1kM%2FMU2e07sEbkIwq%2BG7sVU8jcimNjvdUJwcNmh6s5WzVFdvsv5mbS3E8rELQbEKYDDzfZvMKyzyarp8muLO%2B2o6bqNgq92MnG3e63N59MX%2BXUnXeoX805ZlXQ%2FgLIOQaOMb6alIgTRumfSWAR25ZfFt7tV30ZYx6jZNG3Bt26c5nBTz2SHORdtcn9q1KrDo1CpAX26&X-Amz-Signature=2bdf2f0da128ec7849ca4057c211cc5373c782daa07e2db29d1110f22abd6e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5IAWPU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhiTdKLJwZ2cJiw4FKqukapyijajK9oPjUtceLfweuMAiAKj%2BWdpoy7pDUIM4uZ7DM4oEfEskWukNEysWLKNh8z6CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfaOds%2FKhsh9xzk52KtwDvc8o313y1Cn6TlozPpOgUVDHiIjzrTqbBw2s%2FaTU%2FCwbkBTujlFf6%2FffuWuF4dT8Q85bbbww8q%2F9M2qLJRo3OBDh8fz1YIGOXJJcC75Jn4B6f0MAsF9ik5ec0asHb6gVR4WA9Ez31BzCKidqGi0fNW0YznqR%2FFqUcycAuOpqnxJ8SzZ%2FMDqdpgWrv41vfpdPsR8G34QkpWyRVCeIFGTgKkp539C499JDQ%2B0IRke9song2W2u%2B%2FRwd44Jb2e8VlwaWihB%2FyMLi5JCXGlcsiIGcgOeBSqVUIRJRDXdE0dcjoYLKMtaGbEXP%2BPH17VtuPbkDYn7O%2F%2FKxb%2FKP8L2nfbJxOYUX2srTjXfsWbWpx9ATSl0kM7W2gLmKfFZ9nF3TWpV99Y7wL5Hu4wdj6epLfbCdroyVBfO0UEL93%2ByV2qt0rYE9U4JrpoBHouQV2jAaGjcpqzEwaR1Hk5Yy6yvRzmKPvTLundAYVqkn5ZURL%2Fqpl4FAnaZwcv07Er9SYbXU3whScgIiNTDto4tzz21HL9YTagmVyjtf6KS2oSW0cTtY2n7Y6F3YUWIDPsuB581aisvlAOMbGyyQdibLIV6FP%2BU7EiSIOGwWXm69FeDgWMG7G851KieRH6jc53o7mcwtYfdwgY6pgF1q4aZ99SYw0Qnq9Veguszn1kM%2FMU2e07sEbkIwq%2BG7sVU8jcimNjvdUJwcNmh6s5WzVFdvsv5mbS3E8rELQbEKYDDzfZvMKyzyarp8muLO%2B2o6bqNgq92MnG3e63N59MX%2BXUnXeoX805ZlXQ%2FgLIOQaOMb6alIgTRumfSWAR25ZfFt7tV30ZYx6jZNG3Bt26c5nBTz2SHORdtcn9q1KrDo1CpAX26&X-Amz-Signature=5ca24fdaa66866b9ad984be3d2803d39218c7dd175cee3e0d0cac45e8f8e882a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5IAWPU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhiTdKLJwZ2cJiw4FKqukapyijajK9oPjUtceLfweuMAiAKj%2BWdpoy7pDUIM4uZ7DM4oEfEskWukNEysWLKNh8z6CqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfaOds%2FKhsh9xzk52KtwDvc8o313y1Cn6TlozPpOgUVDHiIjzrTqbBw2s%2FaTU%2FCwbkBTujlFf6%2FffuWuF4dT8Q85bbbww8q%2F9M2qLJRo3OBDh8fz1YIGOXJJcC75Jn4B6f0MAsF9ik5ec0asHb6gVR4WA9Ez31BzCKidqGi0fNW0YznqR%2FFqUcycAuOpqnxJ8SzZ%2FMDqdpgWrv41vfpdPsR8G34QkpWyRVCeIFGTgKkp539C499JDQ%2B0IRke9song2W2u%2B%2FRwd44Jb2e8VlwaWihB%2FyMLi5JCXGlcsiIGcgOeBSqVUIRJRDXdE0dcjoYLKMtaGbEXP%2BPH17VtuPbkDYn7O%2F%2FKxb%2FKP8L2nfbJxOYUX2srTjXfsWbWpx9ATSl0kM7W2gLmKfFZ9nF3TWpV99Y7wL5Hu4wdj6epLfbCdroyVBfO0UEL93%2ByV2qt0rYE9U4JrpoBHouQV2jAaGjcpqzEwaR1Hk5Yy6yvRzmKPvTLundAYVqkn5ZURL%2Fqpl4FAnaZwcv07Er9SYbXU3whScgIiNTDto4tzz21HL9YTagmVyjtf6KS2oSW0cTtY2n7Y6F3YUWIDPsuB581aisvlAOMbGyyQdibLIV6FP%2BU7EiSIOGwWXm69FeDgWMG7G851KieRH6jc53o7mcwtYfdwgY6pgF1q4aZ99SYw0Qnq9Veguszn1kM%2FMU2e07sEbkIwq%2BG7sVU8jcimNjvdUJwcNmh6s5WzVFdvsv5mbS3E8rELQbEKYDDzfZvMKyzyarp8muLO%2B2o6bqNgq92MnG3e63N59MX%2BXUnXeoX805ZlXQ%2FgLIOQaOMb6alIgTRumfSWAR25ZfFt7tV30ZYx6jZNG3Bt26c5nBTz2SHORdtcn9q1KrDo1CpAX26&X-Amz-Signature=46264b5677ee13113236fc807077e3e65a440225bc17e068921da100ccc92e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
