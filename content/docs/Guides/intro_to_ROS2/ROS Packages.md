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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSODMU4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGqFvl3Bairm2ZU2Fj2p8ogEkiWRlMT5R3TJAkJcbs6kAiAN%2BuHYBIPY4pSxRJ8nUb9eKuoQeI5nXeYkGNNQpnN9pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8JCku3BTSjHz4Jq9KtwD8YiDzdAFvXV4QBkC4qvc%2F%2FMw%2FDFbnY9GO3I2rMCtij87x5cBu4q0mq6pfqSxqzv9mj9va4yPcKJPbrwJkJHpnijaHCxorHhoI0u7AqLubLgoBWZYNzUJe%2BPYmFyVglBmVUrusmdaX8C2FSnA0jsh8TeFe1%2B%2BZJlf8rOCVG%2BZvvth0w3vhYKEBNOqNEKnBFKcsO4OdtXxbeh5pDBY7n69zEesgX2mUjGiXsCtex4wS%2BO%2BXxHEvJJMBJHP9syaE2SM19%2FIHu8zfkCN25qKzNSEQ2v6DCKNLSIzOSrDGCJ0AHO8xxMroOHLgj%2BEIvCOFpSJoSSQcHtKF7MEAMxU9xBvw%2FbBv2dQwPMhKfw0R4X%2FJek4TJB8WDs5WuVwyHJUyyOE95CjHIH3mlWM5yj0SW%2B%2BY2iCBwQ6i5vJLjBPszM%2BpnhOD2LATMBUCiIUW99uev7KV7LHfmRU68nHE020mT9CWAUyaOMVbHTgRY8C%2F8szfjCYo0rNZ954QIGTeHGZO8f%2FzNDi%2Bwau47Lwn3jzhwRGhnm%2FJAFqB9XOJb8mvCBEQNFvRJZeLwhas8uAM4H4Q31gcxr9xYxrI8zx%2F%2BvEx0mUqg%2B50tDO%2BHvIRGMWZjZGQPZYD5QVV7S%2BLP6f%2FNswvLHnvgY6pgF6ijHkQGdpjXS91HkE2nGn5bcF%2FnkTpuexqcx%2Bz1apU3Miza%2BKKiHBMmgEmgai5TefIcNF%2BNV%2Fxaxjkbzr4uSCiusFWcjYHYdT%2FERnmmBPYZp93BIqq7rYqOom0bXaTdckDys%2F4I%2FhoyInfhsWm5qhYpCC5kdXoi5CCXRhk8FBCvMKAlOvFq756Jfw3diVs%2F1wjTc5ZVoGeui3kvxLpwDyP%2BVKBeEt&X-Amz-Signature=48d3374c7a1c2923eb4c4467c67a749c39868e7dcdb4df3e67887e21b23672e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSODMU4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGqFvl3Bairm2ZU2Fj2p8ogEkiWRlMT5R3TJAkJcbs6kAiAN%2BuHYBIPY4pSxRJ8nUb9eKuoQeI5nXeYkGNNQpnN9pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8JCku3BTSjHz4Jq9KtwD8YiDzdAFvXV4QBkC4qvc%2F%2FMw%2FDFbnY9GO3I2rMCtij87x5cBu4q0mq6pfqSxqzv9mj9va4yPcKJPbrwJkJHpnijaHCxorHhoI0u7AqLubLgoBWZYNzUJe%2BPYmFyVglBmVUrusmdaX8C2FSnA0jsh8TeFe1%2B%2BZJlf8rOCVG%2BZvvth0w3vhYKEBNOqNEKnBFKcsO4OdtXxbeh5pDBY7n69zEesgX2mUjGiXsCtex4wS%2BO%2BXxHEvJJMBJHP9syaE2SM19%2FIHu8zfkCN25qKzNSEQ2v6DCKNLSIzOSrDGCJ0AHO8xxMroOHLgj%2BEIvCOFpSJoSSQcHtKF7MEAMxU9xBvw%2FbBv2dQwPMhKfw0R4X%2FJek4TJB8WDs5WuVwyHJUyyOE95CjHIH3mlWM5yj0SW%2B%2BY2iCBwQ6i5vJLjBPszM%2BpnhOD2LATMBUCiIUW99uev7KV7LHfmRU68nHE020mT9CWAUyaOMVbHTgRY8C%2F8szfjCYo0rNZ954QIGTeHGZO8f%2FzNDi%2Bwau47Lwn3jzhwRGhnm%2FJAFqB9XOJb8mvCBEQNFvRJZeLwhas8uAM4H4Q31gcxr9xYxrI8zx%2F%2BvEx0mUqg%2B50tDO%2BHvIRGMWZjZGQPZYD5QVV7S%2BLP6f%2FNswvLHnvgY6pgF6ijHkQGdpjXS91HkE2nGn5bcF%2FnkTpuexqcx%2Bz1apU3Miza%2BKKiHBMmgEmgai5TefIcNF%2BNV%2Fxaxjkbzr4uSCiusFWcjYHYdT%2FERnmmBPYZp93BIqq7rYqOom0bXaTdckDys%2F4I%2FhoyInfhsWm5qhYpCC5kdXoi5CCXRhk8FBCvMKAlOvFq756Jfw3diVs%2F1wjTc5ZVoGeui3kvxLpwDyP%2BVKBeEt&X-Amz-Signature=96049743d1fc6e8da780c5febf886b1bc87db4377f5887ce738d2e00aecc4919&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSODMU4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGqFvl3Bairm2ZU2Fj2p8ogEkiWRlMT5R3TJAkJcbs6kAiAN%2BuHYBIPY4pSxRJ8nUb9eKuoQeI5nXeYkGNNQpnN9pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8JCku3BTSjHz4Jq9KtwD8YiDzdAFvXV4QBkC4qvc%2F%2FMw%2FDFbnY9GO3I2rMCtij87x5cBu4q0mq6pfqSxqzv9mj9va4yPcKJPbrwJkJHpnijaHCxorHhoI0u7AqLubLgoBWZYNzUJe%2BPYmFyVglBmVUrusmdaX8C2FSnA0jsh8TeFe1%2B%2BZJlf8rOCVG%2BZvvth0w3vhYKEBNOqNEKnBFKcsO4OdtXxbeh5pDBY7n69zEesgX2mUjGiXsCtex4wS%2BO%2BXxHEvJJMBJHP9syaE2SM19%2FIHu8zfkCN25qKzNSEQ2v6DCKNLSIzOSrDGCJ0AHO8xxMroOHLgj%2BEIvCOFpSJoSSQcHtKF7MEAMxU9xBvw%2FbBv2dQwPMhKfw0R4X%2FJek4TJB8WDs5WuVwyHJUyyOE95CjHIH3mlWM5yj0SW%2B%2BY2iCBwQ6i5vJLjBPszM%2BpnhOD2LATMBUCiIUW99uev7KV7LHfmRU68nHE020mT9CWAUyaOMVbHTgRY8C%2F8szfjCYo0rNZ954QIGTeHGZO8f%2FzNDi%2Bwau47Lwn3jzhwRGhnm%2FJAFqB9XOJb8mvCBEQNFvRJZeLwhas8uAM4H4Q31gcxr9xYxrI8zx%2F%2BvEx0mUqg%2B50tDO%2BHvIRGMWZjZGQPZYD5QVV7S%2BLP6f%2FNswvLHnvgY6pgF6ijHkQGdpjXS91HkE2nGn5bcF%2FnkTpuexqcx%2Bz1apU3Miza%2BKKiHBMmgEmgai5TefIcNF%2BNV%2Fxaxjkbzr4uSCiusFWcjYHYdT%2FERnmmBPYZp93BIqq7rYqOom0bXaTdckDys%2F4I%2FhoyInfhsWm5qhYpCC5kdXoi5CCXRhk8FBCvMKAlOvFq756Jfw3diVs%2F1wjTc5ZVoGeui3kvxLpwDyP%2BVKBeEt&X-Amz-Signature=2fe57bd15cafbce67b0914372a483cc11cc1a8dca0f4bb93ab10fd116517e653&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSODMU4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGqFvl3Bairm2ZU2Fj2p8ogEkiWRlMT5R3TJAkJcbs6kAiAN%2BuHYBIPY4pSxRJ8nUb9eKuoQeI5nXeYkGNNQpnN9pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8JCku3BTSjHz4Jq9KtwD8YiDzdAFvXV4QBkC4qvc%2F%2FMw%2FDFbnY9GO3I2rMCtij87x5cBu4q0mq6pfqSxqzv9mj9va4yPcKJPbrwJkJHpnijaHCxorHhoI0u7AqLubLgoBWZYNzUJe%2BPYmFyVglBmVUrusmdaX8C2FSnA0jsh8TeFe1%2B%2BZJlf8rOCVG%2BZvvth0w3vhYKEBNOqNEKnBFKcsO4OdtXxbeh5pDBY7n69zEesgX2mUjGiXsCtex4wS%2BO%2BXxHEvJJMBJHP9syaE2SM19%2FIHu8zfkCN25qKzNSEQ2v6DCKNLSIzOSrDGCJ0AHO8xxMroOHLgj%2BEIvCOFpSJoSSQcHtKF7MEAMxU9xBvw%2FbBv2dQwPMhKfw0R4X%2FJek4TJB8WDs5WuVwyHJUyyOE95CjHIH3mlWM5yj0SW%2B%2BY2iCBwQ6i5vJLjBPszM%2BpnhOD2LATMBUCiIUW99uev7KV7LHfmRU68nHE020mT9CWAUyaOMVbHTgRY8C%2F8szfjCYo0rNZ954QIGTeHGZO8f%2FzNDi%2Bwau47Lwn3jzhwRGhnm%2FJAFqB9XOJb8mvCBEQNFvRJZeLwhas8uAM4H4Q31gcxr9xYxrI8zx%2F%2BvEx0mUqg%2B50tDO%2BHvIRGMWZjZGQPZYD5QVV7S%2BLP6f%2FNswvLHnvgY6pgF6ijHkQGdpjXS91HkE2nGn5bcF%2FnkTpuexqcx%2Bz1apU3Miza%2BKKiHBMmgEmgai5TefIcNF%2BNV%2Fxaxjkbzr4uSCiusFWcjYHYdT%2FERnmmBPYZp93BIqq7rYqOom0bXaTdckDys%2F4I%2FhoyInfhsWm5qhYpCC5kdXoi5CCXRhk8FBCvMKAlOvFq756Jfw3diVs%2F1wjTc5ZVoGeui3kvxLpwDyP%2BVKBeEt&X-Amz-Signature=22f2337d2bfba808ec21bfeb153af783a09b7667809a74c2b356ae84809179e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSODMU4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGqFvl3Bairm2ZU2Fj2p8ogEkiWRlMT5R3TJAkJcbs6kAiAN%2BuHYBIPY4pSxRJ8nUb9eKuoQeI5nXeYkGNNQpnN9pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8JCku3BTSjHz4Jq9KtwD8YiDzdAFvXV4QBkC4qvc%2F%2FMw%2FDFbnY9GO3I2rMCtij87x5cBu4q0mq6pfqSxqzv9mj9va4yPcKJPbrwJkJHpnijaHCxorHhoI0u7AqLubLgoBWZYNzUJe%2BPYmFyVglBmVUrusmdaX8C2FSnA0jsh8TeFe1%2B%2BZJlf8rOCVG%2BZvvth0w3vhYKEBNOqNEKnBFKcsO4OdtXxbeh5pDBY7n69zEesgX2mUjGiXsCtex4wS%2BO%2BXxHEvJJMBJHP9syaE2SM19%2FIHu8zfkCN25qKzNSEQ2v6DCKNLSIzOSrDGCJ0AHO8xxMroOHLgj%2BEIvCOFpSJoSSQcHtKF7MEAMxU9xBvw%2FbBv2dQwPMhKfw0R4X%2FJek4TJB8WDs5WuVwyHJUyyOE95CjHIH3mlWM5yj0SW%2B%2BY2iCBwQ6i5vJLjBPszM%2BpnhOD2LATMBUCiIUW99uev7KV7LHfmRU68nHE020mT9CWAUyaOMVbHTgRY8C%2F8szfjCYo0rNZ954QIGTeHGZO8f%2FzNDi%2Bwau47Lwn3jzhwRGhnm%2FJAFqB9XOJb8mvCBEQNFvRJZeLwhas8uAM4H4Q31gcxr9xYxrI8zx%2F%2BvEx0mUqg%2B50tDO%2BHvIRGMWZjZGQPZYD5QVV7S%2BLP6f%2FNswvLHnvgY6pgF6ijHkQGdpjXS91HkE2nGn5bcF%2FnkTpuexqcx%2Bz1apU3Miza%2BKKiHBMmgEmgai5TefIcNF%2BNV%2Fxaxjkbzr4uSCiusFWcjYHYdT%2FERnmmBPYZp93BIqq7rYqOom0bXaTdckDys%2F4I%2FhoyInfhsWm5qhYpCC5kdXoi5CCXRhk8FBCvMKAlOvFq756Jfw3diVs%2F1wjTc5ZVoGeui3kvxLpwDyP%2BVKBeEt&X-Amz-Signature=a33e2f2b422d6a024a6d0dd1bbc68880014fd99c1132b9361a6ec90e362d3c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSODMU4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGqFvl3Bairm2ZU2Fj2p8ogEkiWRlMT5R3TJAkJcbs6kAiAN%2BuHYBIPY4pSxRJ8nUb9eKuoQeI5nXeYkGNNQpnN9pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8JCku3BTSjHz4Jq9KtwD8YiDzdAFvXV4QBkC4qvc%2F%2FMw%2FDFbnY9GO3I2rMCtij87x5cBu4q0mq6pfqSxqzv9mj9va4yPcKJPbrwJkJHpnijaHCxorHhoI0u7AqLubLgoBWZYNzUJe%2BPYmFyVglBmVUrusmdaX8C2FSnA0jsh8TeFe1%2B%2BZJlf8rOCVG%2BZvvth0w3vhYKEBNOqNEKnBFKcsO4OdtXxbeh5pDBY7n69zEesgX2mUjGiXsCtex4wS%2BO%2BXxHEvJJMBJHP9syaE2SM19%2FIHu8zfkCN25qKzNSEQ2v6DCKNLSIzOSrDGCJ0AHO8xxMroOHLgj%2BEIvCOFpSJoSSQcHtKF7MEAMxU9xBvw%2FbBv2dQwPMhKfw0R4X%2FJek4TJB8WDs5WuVwyHJUyyOE95CjHIH3mlWM5yj0SW%2B%2BY2iCBwQ6i5vJLjBPszM%2BpnhOD2LATMBUCiIUW99uev7KV7LHfmRU68nHE020mT9CWAUyaOMVbHTgRY8C%2F8szfjCYo0rNZ954QIGTeHGZO8f%2FzNDi%2Bwau47Lwn3jzhwRGhnm%2FJAFqB9XOJb8mvCBEQNFvRJZeLwhas8uAM4H4Q31gcxr9xYxrI8zx%2F%2BvEx0mUqg%2B50tDO%2BHvIRGMWZjZGQPZYD5QVV7S%2BLP6f%2FNswvLHnvgY6pgF6ijHkQGdpjXS91HkE2nGn5bcF%2FnkTpuexqcx%2Bz1apU3Miza%2BKKiHBMmgEmgai5TefIcNF%2BNV%2Fxaxjkbzr4uSCiusFWcjYHYdT%2FERnmmBPYZp93BIqq7rYqOom0bXaTdckDys%2F4I%2FhoyInfhsWm5qhYpCC5kdXoi5CCXRhk8FBCvMKAlOvFq756Jfw3diVs%2F1wjTc5ZVoGeui3kvxLpwDyP%2BVKBeEt&X-Amz-Signature=0b9d051bbe5bbd113ac119e8b10e912f21dd1731fa9cd1b13d524b0dfb9a4b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNSODMU4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGqFvl3Bairm2ZU2Fj2p8ogEkiWRlMT5R3TJAkJcbs6kAiAN%2BuHYBIPY4pSxRJ8nUb9eKuoQeI5nXeYkGNNQpnN9pir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM8JCku3BTSjHz4Jq9KtwD8YiDzdAFvXV4QBkC4qvc%2F%2FMw%2FDFbnY9GO3I2rMCtij87x5cBu4q0mq6pfqSxqzv9mj9va4yPcKJPbrwJkJHpnijaHCxorHhoI0u7AqLubLgoBWZYNzUJe%2BPYmFyVglBmVUrusmdaX8C2FSnA0jsh8TeFe1%2B%2BZJlf8rOCVG%2BZvvth0w3vhYKEBNOqNEKnBFKcsO4OdtXxbeh5pDBY7n69zEesgX2mUjGiXsCtex4wS%2BO%2BXxHEvJJMBJHP9syaE2SM19%2FIHu8zfkCN25qKzNSEQ2v6DCKNLSIzOSrDGCJ0AHO8xxMroOHLgj%2BEIvCOFpSJoSSQcHtKF7MEAMxU9xBvw%2FbBv2dQwPMhKfw0R4X%2FJek4TJB8WDs5WuVwyHJUyyOE95CjHIH3mlWM5yj0SW%2B%2BY2iCBwQ6i5vJLjBPszM%2BpnhOD2LATMBUCiIUW99uev7KV7LHfmRU68nHE020mT9CWAUyaOMVbHTgRY8C%2F8szfjCYo0rNZ954QIGTeHGZO8f%2FzNDi%2Bwau47Lwn3jzhwRGhnm%2FJAFqB9XOJb8mvCBEQNFvRJZeLwhas8uAM4H4Q31gcxr9xYxrI8zx%2F%2BvEx0mUqg%2B50tDO%2BHvIRGMWZjZGQPZYD5QVV7S%2BLP6f%2FNswvLHnvgY6pgF6ijHkQGdpjXS91HkE2nGn5bcF%2FnkTpuexqcx%2Bz1apU3Miza%2BKKiHBMmgEmgai5TefIcNF%2BNV%2Fxaxjkbzr4uSCiusFWcjYHYdT%2FERnmmBPYZp93BIqq7rYqOom0bXaTdckDys%2F4I%2FhoyInfhsWm5qhYpCC5kdXoi5CCXRhk8FBCvMKAlOvFq756Jfw3diVs%2F1wjTc5ZVoGeui3kvxLpwDyP%2BVKBeEt&X-Amz-Signature=45ed6348a0f6a6a71354ffeb024d87115bc7e6cb4909f6d1af825e7cbdc6cc89&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
