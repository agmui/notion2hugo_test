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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JETKO2S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3BKnsPTqayc1OUAt8TpSPh93MA2H9Vydf%2B2ep7s%2FKgIhAIAJx7QzHJgCIqzSYFkkuEt%2BHRwlkw7l2veTa5oW%2B9enKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9PSy5QvEs8p4nfTcq3AO7Yt5mTbokVJ%2BJAPEA5KX%2F8v5gcupD%2BubqrJhlgHF4ZtcAjsiod1CX%2FC2rzcxxcTwLMhTsq1HVH4GORRmqrIS1mR7XDUBVi9Ojz7pTirzVZZCCZRgHig1F8QcTuqA2iybAJ9ozTynIEibBaD4sHyFaQxutSGlyWdfenTLtf5fhlBn2v90TaDC2P7H6ucOlWCiF4nDldC0a0r0T6M3%2B7EtcazbZkMrJNNDD38jECuCxvnwCGU%2BXFbzpfGMhYNF6JDjjAn%2FGz6xgPD3%2BivHnwgWdkaYXlHCLJqa1KZRieKIxlhKcffSxi4%2F%2FYFQ4Sn9RhTuR1vyiMUUxu0UelbuBuS8C%2BZOyI3jBo9leMhBWaqBQoBK%2FenDnH8iZ8HyG%2FKTnNea0sl93J3NuatIiyzcxCzWfjFJ3iAPywUkL41KsWJq%2BJBs6SPjPTa%2B1gEcz%2FQkB6HrbkPjn%2BkvaSUAW2BWo26Np%2BKJnhYNNo%2Fr0EGxwwef1T0Vs7kGCrS1fGftVekY99Yoj4qOmgKGRS2zdvQKP3pOgG%2BasiyvHVQEr3pkx%2FQOkmOQ6H1cNtjJ%2FeNXQhPO1cI9jrjKviLKLRknHmQzZMr6DVJzOIyjp46YWlLL78LAtqHZXFIcpMN66FLt9%2BzD3pJu%2BBjqkATo1YDFsFBdBDAtKMfGKDvnNf8ngBAQYnfEaTg9RRQ0n0p7EZ5sOvS3k6Axj89Z531R6bQHQTm2YfUuu3%2BzgZBXA4kSUWbjM4nEcortpeTg%2F8r9UegSmd7mLD34VwMNrha6TDL8LT9qotIiw6rNPSOPraoqu03f7BlV%2BB8zmdM0ZnHeHpccYJ0iMr1n89rPTsYQGtE8pCXPTFpgwnp02%2Fkkoi1IO&X-Amz-Signature=082ea29f98093cca711863fca310a8be748b18b740ec7faa214deb31b0b56149&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JETKO2S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3BKnsPTqayc1OUAt8TpSPh93MA2H9Vydf%2B2ep7s%2FKgIhAIAJx7QzHJgCIqzSYFkkuEt%2BHRwlkw7l2veTa5oW%2B9enKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9PSy5QvEs8p4nfTcq3AO7Yt5mTbokVJ%2BJAPEA5KX%2F8v5gcupD%2BubqrJhlgHF4ZtcAjsiod1CX%2FC2rzcxxcTwLMhTsq1HVH4GORRmqrIS1mR7XDUBVi9Ojz7pTirzVZZCCZRgHig1F8QcTuqA2iybAJ9ozTynIEibBaD4sHyFaQxutSGlyWdfenTLtf5fhlBn2v90TaDC2P7H6ucOlWCiF4nDldC0a0r0T6M3%2B7EtcazbZkMrJNNDD38jECuCxvnwCGU%2BXFbzpfGMhYNF6JDjjAn%2FGz6xgPD3%2BivHnwgWdkaYXlHCLJqa1KZRieKIxlhKcffSxi4%2F%2FYFQ4Sn9RhTuR1vyiMUUxu0UelbuBuS8C%2BZOyI3jBo9leMhBWaqBQoBK%2FenDnH8iZ8HyG%2FKTnNea0sl93J3NuatIiyzcxCzWfjFJ3iAPywUkL41KsWJq%2BJBs6SPjPTa%2B1gEcz%2FQkB6HrbkPjn%2BkvaSUAW2BWo26Np%2BKJnhYNNo%2Fr0EGxwwef1T0Vs7kGCrS1fGftVekY99Yoj4qOmgKGRS2zdvQKP3pOgG%2BasiyvHVQEr3pkx%2FQOkmOQ6H1cNtjJ%2FeNXQhPO1cI9jrjKviLKLRknHmQzZMr6DVJzOIyjp46YWlLL78LAtqHZXFIcpMN66FLt9%2BzD3pJu%2BBjqkATo1YDFsFBdBDAtKMfGKDvnNf8ngBAQYnfEaTg9RRQ0n0p7EZ5sOvS3k6Axj89Z531R6bQHQTm2YfUuu3%2BzgZBXA4kSUWbjM4nEcortpeTg%2F8r9UegSmd7mLD34VwMNrha6TDL8LT9qotIiw6rNPSOPraoqu03f7BlV%2BB8zmdM0ZnHeHpccYJ0iMr1n89rPTsYQGtE8pCXPTFpgwnp02%2Fkkoi1IO&X-Amz-Signature=22811ba5afad4c28a816d42080d5d2405326e27dcf391abdc0f36c6eba69cfec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JETKO2S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3BKnsPTqayc1OUAt8TpSPh93MA2H9Vydf%2B2ep7s%2FKgIhAIAJx7QzHJgCIqzSYFkkuEt%2BHRwlkw7l2veTa5oW%2B9enKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9PSy5QvEs8p4nfTcq3AO7Yt5mTbokVJ%2BJAPEA5KX%2F8v5gcupD%2BubqrJhlgHF4ZtcAjsiod1CX%2FC2rzcxxcTwLMhTsq1HVH4GORRmqrIS1mR7XDUBVi9Ojz7pTirzVZZCCZRgHig1F8QcTuqA2iybAJ9ozTynIEibBaD4sHyFaQxutSGlyWdfenTLtf5fhlBn2v90TaDC2P7H6ucOlWCiF4nDldC0a0r0T6M3%2B7EtcazbZkMrJNNDD38jECuCxvnwCGU%2BXFbzpfGMhYNF6JDjjAn%2FGz6xgPD3%2BivHnwgWdkaYXlHCLJqa1KZRieKIxlhKcffSxi4%2F%2FYFQ4Sn9RhTuR1vyiMUUxu0UelbuBuS8C%2BZOyI3jBo9leMhBWaqBQoBK%2FenDnH8iZ8HyG%2FKTnNea0sl93J3NuatIiyzcxCzWfjFJ3iAPywUkL41KsWJq%2BJBs6SPjPTa%2B1gEcz%2FQkB6HrbkPjn%2BkvaSUAW2BWo26Np%2BKJnhYNNo%2Fr0EGxwwef1T0Vs7kGCrS1fGftVekY99Yoj4qOmgKGRS2zdvQKP3pOgG%2BasiyvHVQEr3pkx%2FQOkmOQ6H1cNtjJ%2FeNXQhPO1cI9jrjKviLKLRknHmQzZMr6DVJzOIyjp46YWlLL78LAtqHZXFIcpMN66FLt9%2BzD3pJu%2BBjqkATo1YDFsFBdBDAtKMfGKDvnNf8ngBAQYnfEaTg9RRQ0n0p7EZ5sOvS3k6Axj89Z531R6bQHQTm2YfUuu3%2BzgZBXA4kSUWbjM4nEcortpeTg%2F8r9UegSmd7mLD34VwMNrha6TDL8LT9qotIiw6rNPSOPraoqu03f7BlV%2BB8zmdM0ZnHeHpccYJ0iMr1n89rPTsYQGtE8pCXPTFpgwnp02%2Fkkoi1IO&X-Amz-Signature=cfd6ea77a730295fd44294da207f97ddb58c56f2d6f2e75a561f1b3d9e175edb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JETKO2S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3BKnsPTqayc1OUAt8TpSPh93MA2H9Vydf%2B2ep7s%2FKgIhAIAJx7QzHJgCIqzSYFkkuEt%2BHRwlkw7l2veTa5oW%2B9enKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9PSy5QvEs8p4nfTcq3AO7Yt5mTbokVJ%2BJAPEA5KX%2F8v5gcupD%2BubqrJhlgHF4ZtcAjsiod1CX%2FC2rzcxxcTwLMhTsq1HVH4GORRmqrIS1mR7XDUBVi9Ojz7pTirzVZZCCZRgHig1F8QcTuqA2iybAJ9ozTynIEibBaD4sHyFaQxutSGlyWdfenTLtf5fhlBn2v90TaDC2P7H6ucOlWCiF4nDldC0a0r0T6M3%2B7EtcazbZkMrJNNDD38jECuCxvnwCGU%2BXFbzpfGMhYNF6JDjjAn%2FGz6xgPD3%2BivHnwgWdkaYXlHCLJqa1KZRieKIxlhKcffSxi4%2F%2FYFQ4Sn9RhTuR1vyiMUUxu0UelbuBuS8C%2BZOyI3jBo9leMhBWaqBQoBK%2FenDnH8iZ8HyG%2FKTnNea0sl93J3NuatIiyzcxCzWfjFJ3iAPywUkL41KsWJq%2BJBs6SPjPTa%2B1gEcz%2FQkB6HrbkPjn%2BkvaSUAW2BWo26Np%2BKJnhYNNo%2Fr0EGxwwef1T0Vs7kGCrS1fGftVekY99Yoj4qOmgKGRS2zdvQKP3pOgG%2BasiyvHVQEr3pkx%2FQOkmOQ6H1cNtjJ%2FeNXQhPO1cI9jrjKviLKLRknHmQzZMr6DVJzOIyjp46YWlLL78LAtqHZXFIcpMN66FLt9%2BzD3pJu%2BBjqkATo1YDFsFBdBDAtKMfGKDvnNf8ngBAQYnfEaTg9RRQ0n0p7EZ5sOvS3k6Axj89Z531R6bQHQTm2YfUuu3%2BzgZBXA4kSUWbjM4nEcortpeTg%2F8r9UegSmd7mLD34VwMNrha6TDL8LT9qotIiw6rNPSOPraoqu03f7BlV%2BB8zmdM0ZnHeHpccYJ0iMr1n89rPTsYQGtE8pCXPTFpgwnp02%2Fkkoi1IO&X-Amz-Signature=e63a59c60cbf177ac66d93b1483b949a2f2840336e47c57309b220cb74131a40&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JETKO2S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3BKnsPTqayc1OUAt8TpSPh93MA2H9Vydf%2B2ep7s%2FKgIhAIAJx7QzHJgCIqzSYFkkuEt%2BHRwlkw7l2veTa5oW%2B9enKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9PSy5QvEs8p4nfTcq3AO7Yt5mTbokVJ%2BJAPEA5KX%2F8v5gcupD%2BubqrJhlgHF4ZtcAjsiod1CX%2FC2rzcxxcTwLMhTsq1HVH4GORRmqrIS1mR7XDUBVi9Ojz7pTirzVZZCCZRgHig1F8QcTuqA2iybAJ9ozTynIEibBaD4sHyFaQxutSGlyWdfenTLtf5fhlBn2v90TaDC2P7H6ucOlWCiF4nDldC0a0r0T6M3%2B7EtcazbZkMrJNNDD38jECuCxvnwCGU%2BXFbzpfGMhYNF6JDjjAn%2FGz6xgPD3%2BivHnwgWdkaYXlHCLJqa1KZRieKIxlhKcffSxi4%2F%2FYFQ4Sn9RhTuR1vyiMUUxu0UelbuBuS8C%2BZOyI3jBo9leMhBWaqBQoBK%2FenDnH8iZ8HyG%2FKTnNea0sl93J3NuatIiyzcxCzWfjFJ3iAPywUkL41KsWJq%2BJBs6SPjPTa%2B1gEcz%2FQkB6HrbkPjn%2BkvaSUAW2BWo26Np%2BKJnhYNNo%2Fr0EGxwwef1T0Vs7kGCrS1fGftVekY99Yoj4qOmgKGRS2zdvQKP3pOgG%2BasiyvHVQEr3pkx%2FQOkmOQ6H1cNtjJ%2FeNXQhPO1cI9jrjKviLKLRknHmQzZMr6DVJzOIyjp46YWlLL78LAtqHZXFIcpMN66FLt9%2BzD3pJu%2BBjqkATo1YDFsFBdBDAtKMfGKDvnNf8ngBAQYnfEaTg9RRQ0n0p7EZ5sOvS3k6Axj89Z531R6bQHQTm2YfUuu3%2BzgZBXA4kSUWbjM4nEcortpeTg%2F8r9UegSmd7mLD34VwMNrha6TDL8LT9qotIiw6rNPSOPraoqu03f7BlV%2BB8zmdM0ZnHeHpccYJ0iMr1n89rPTsYQGtE8pCXPTFpgwnp02%2Fkkoi1IO&X-Amz-Signature=8464811f9f30349c30b2bf9310e2c8a9378544fa99e5eec0c219f62f47b55c76&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JETKO2S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3BKnsPTqayc1OUAt8TpSPh93MA2H9Vydf%2B2ep7s%2FKgIhAIAJx7QzHJgCIqzSYFkkuEt%2BHRwlkw7l2veTa5oW%2B9enKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9PSy5QvEs8p4nfTcq3AO7Yt5mTbokVJ%2BJAPEA5KX%2F8v5gcupD%2BubqrJhlgHF4ZtcAjsiod1CX%2FC2rzcxxcTwLMhTsq1HVH4GORRmqrIS1mR7XDUBVi9Ojz7pTirzVZZCCZRgHig1F8QcTuqA2iybAJ9ozTynIEibBaD4sHyFaQxutSGlyWdfenTLtf5fhlBn2v90TaDC2P7H6ucOlWCiF4nDldC0a0r0T6M3%2B7EtcazbZkMrJNNDD38jECuCxvnwCGU%2BXFbzpfGMhYNF6JDjjAn%2FGz6xgPD3%2BivHnwgWdkaYXlHCLJqa1KZRieKIxlhKcffSxi4%2F%2FYFQ4Sn9RhTuR1vyiMUUxu0UelbuBuS8C%2BZOyI3jBo9leMhBWaqBQoBK%2FenDnH8iZ8HyG%2FKTnNea0sl93J3NuatIiyzcxCzWfjFJ3iAPywUkL41KsWJq%2BJBs6SPjPTa%2B1gEcz%2FQkB6HrbkPjn%2BkvaSUAW2BWo26Np%2BKJnhYNNo%2Fr0EGxwwef1T0Vs7kGCrS1fGftVekY99Yoj4qOmgKGRS2zdvQKP3pOgG%2BasiyvHVQEr3pkx%2FQOkmOQ6H1cNtjJ%2FeNXQhPO1cI9jrjKviLKLRknHmQzZMr6DVJzOIyjp46YWlLL78LAtqHZXFIcpMN66FLt9%2BzD3pJu%2BBjqkATo1YDFsFBdBDAtKMfGKDvnNf8ngBAQYnfEaTg9RRQ0n0p7EZ5sOvS3k6Axj89Z531R6bQHQTm2YfUuu3%2BzgZBXA4kSUWbjM4nEcortpeTg%2F8r9UegSmd7mLD34VwMNrha6TDL8LT9qotIiw6rNPSOPraoqu03f7BlV%2BB8zmdM0ZnHeHpccYJ0iMr1n89rPTsYQGtE8pCXPTFpgwnp02%2Fkkoi1IO&X-Amz-Signature=02f8d1b4d97020cbdae9cbd7af016b886b6d65229fef58d147d6a84f490ee994&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JETKO2S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3BKnsPTqayc1OUAt8TpSPh93MA2H9Vydf%2B2ep7s%2FKgIhAIAJx7QzHJgCIqzSYFkkuEt%2BHRwlkw7l2veTa5oW%2B9enKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9PSy5QvEs8p4nfTcq3AO7Yt5mTbokVJ%2BJAPEA5KX%2F8v5gcupD%2BubqrJhlgHF4ZtcAjsiod1CX%2FC2rzcxxcTwLMhTsq1HVH4GORRmqrIS1mR7XDUBVi9Ojz7pTirzVZZCCZRgHig1F8QcTuqA2iybAJ9ozTynIEibBaD4sHyFaQxutSGlyWdfenTLtf5fhlBn2v90TaDC2P7H6ucOlWCiF4nDldC0a0r0T6M3%2B7EtcazbZkMrJNNDD38jECuCxvnwCGU%2BXFbzpfGMhYNF6JDjjAn%2FGz6xgPD3%2BivHnwgWdkaYXlHCLJqa1KZRieKIxlhKcffSxi4%2F%2FYFQ4Sn9RhTuR1vyiMUUxu0UelbuBuS8C%2BZOyI3jBo9leMhBWaqBQoBK%2FenDnH8iZ8HyG%2FKTnNea0sl93J3NuatIiyzcxCzWfjFJ3iAPywUkL41KsWJq%2BJBs6SPjPTa%2B1gEcz%2FQkB6HrbkPjn%2BkvaSUAW2BWo26Np%2BKJnhYNNo%2Fr0EGxwwef1T0Vs7kGCrS1fGftVekY99Yoj4qOmgKGRS2zdvQKP3pOgG%2BasiyvHVQEr3pkx%2FQOkmOQ6H1cNtjJ%2FeNXQhPO1cI9jrjKviLKLRknHmQzZMr6DVJzOIyjp46YWlLL78LAtqHZXFIcpMN66FLt9%2BzD3pJu%2BBjqkATo1YDFsFBdBDAtKMfGKDvnNf8ngBAQYnfEaTg9RRQ0n0p7EZ5sOvS3k6Axj89Z531R6bQHQTm2YfUuu3%2BzgZBXA4kSUWbjM4nEcortpeTg%2F8r9UegSmd7mLD34VwMNrha6TDL8LT9qotIiw6rNPSOPraoqu03f7BlV%2BB8zmdM0ZnHeHpccYJ0iMr1n89rPTsYQGtE8pCXPTFpgwnp02%2Fkkoi1IO&X-Amz-Signature=70debc40b9fb1ad0f054bbce738440ad4b59fe5ffc9c80780b2e37e3115e13eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
