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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFTSJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC0JLpg2XUTbrhnUuMGslAB325SaeLQYE7q20obTWJAggIhAKEI9kq%2B8LYXsagOv3xCp1XyT7u2%2Br1MUSNJAOP9q0LZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRN1ii%2BwWMcLIaIJ0q3ANWe%2F4BVcHvN4hpGpboLydXFY4cV4zIW9IC%2BTLeNC1Q40bhjGcXJkfo8Y7eAHvVZVIEoSxtZ%2BOKgXAf%2FCY2aDmgVY1llZbP1uDcqZE0hUPnAApU6K%2FZXKdNNEWJV8t5bqaNOg9kRHlDIzV9JiqpWNWq7LEBcNpU4zeCIcM87Cm8cZNlm0pYVuU%2FMtHUHC1OCUSaiTHwCOzUtTEFdmXUkBXWHk4x9SLbBr8%2FACHa%2BhNjR5VeRn%2BbJVAedxJCJtmRE5snlVFjwI69mBPpS%2BW1bL76d3ag7DYOauNQBcgq1ciX11SiTjpg9k8vNdfmw5xi7j1GoyWz0YOM1oOFNbtdfcgTH%2BMNRiOYsfzTux1wPekUwSdA1vJf9qz9BpzhL0RunLlkvGHI%2FYoMMNx87p16Yl%2FZKfL3M3%2BUM7j5qZ6ViWeMDBjtO8XCdUDGvnXljrWv7y32Bn0hy4U7Rr7F3mODo15yUbreDZC4QIvLbTBl2ijzMAlS7aD2Q3lKdfKcaOAywAY6VzonSVwCMn6WVlu71qiZvLv%2BpWkEqA6%2FJvbWKaBMybCy3JPZIgxjXzImzAAQRX2AqGzTqONfAhMa5WFwWhKPqaiZ0JwOI4uQflZRHhNycC7LU7qTucH3agn%2BQDDBj7%2B%2BBjqkAaB5T7cAkM2p3Trt5diDhkoJtpBIpGVxjHD7yblQ8E586ZW0Ypvdi1Rhz%2BZpvLJeTFxm9PUPuVvpEtBFky%2Bo2HdjcGyBI8%2BgZC%2Bo2MYv1yAy%2FrQkyRhWDfK93oPTeiJH8pyoSYJGEonDk7qj%2Fh3Tgtq06QaFjIYs1n3IgThWreGxhzboR9bzamwLMXKHD8%2FOi5QPGKmku3ock%2FBJE75H4yUDYzm%2B&X-Amz-Signature=d51344d057eee32178087d829e77eba4db70675e8fc2226dcfa3d36148bcfaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFTSJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC0JLpg2XUTbrhnUuMGslAB325SaeLQYE7q20obTWJAggIhAKEI9kq%2B8LYXsagOv3xCp1XyT7u2%2Br1MUSNJAOP9q0LZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRN1ii%2BwWMcLIaIJ0q3ANWe%2F4BVcHvN4hpGpboLydXFY4cV4zIW9IC%2BTLeNC1Q40bhjGcXJkfo8Y7eAHvVZVIEoSxtZ%2BOKgXAf%2FCY2aDmgVY1llZbP1uDcqZE0hUPnAApU6K%2FZXKdNNEWJV8t5bqaNOg9kRHlDIzV9JiqpWNWq7LEBcNpU4zeCIcM87Cm8cZNlm0pYVuU%2FMtHUHC1OCUSaiTHwCOzUtTEFdmXUkBXWHk4x9SLbBr8%2FACHa%2BhNjR5VeRn%2BbJVAedxJCJtmRE5snlVFjwI69mBPpS%2BW1bL76d3ag7DYOauNQBcgq1ciX11SiTjpg9k8vNdfmw5xi7j1GoyWz0YOM1oOFNbtdfcgTH%2BMNRiOYsfzTux1wPekUwSdA1vJf9qz9BpzhL0RunLlkvGHI%2FYoMMNx87p16Yl%2FZKfL3M3%2BUM7j5qZ6ViWeMDBjtO8XCdUDGvnXljrWv7y32Bn0hy4U7Rr7F3mODo15yUbreDZC4QIvLbTBl2ijzMAlS7aD2Q3lKdfKcaOAywAY6VzonSVwCMn6WVlu71qiZvLv%2BpWkEqA6%2FJvbWKaBMybCy3JPZIgxjXzImzAAQRX2AqGzTqONfAhMa5WFwWhKPqaiZ0JwOI4uQflZRHhNycC7LU7qTucH3agn%2BQDDBj7%2B%2BBjqkAaB5T7cAkM2p3Trt5diDhkoJtpBIpGVxjHD7yblQ8E586ZW0Ypvdi1Rhz%2BZpvLJeTFxm9PUPuVvpEtBFky%2Bo2HdjcGyBI8%2BgZC%2Bo2MYv1yAy%2FrQkyRhWDfK93oPTeiJH8pyoSYJGEonDk7qj%2Fh3Tgtq06QaFjIYs1n3IgThWreGxhzboR9bzamwLMXKHD8%2FOi5QPGKmku3ock%2FBJE75H4yUDYzm%2B&X-Amz-Signature=96e1c6ee59d48cd8938e624955f60ea7c94a02d2dbc84065e2c4cfb9b53604e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFTSJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC0JLpg2XUTbrhnUuMGslAB325SaeLQYE7q20obTWJAggIhAKEI9kq%2B8LYXsagOv3xCp1XyT7u2%2Br1MUSNJAOP9q0LZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRN1ii%2BwWMcLIaIJ0q3ANWe%2F4BVcHvN4hpGpboLydXFY4cV4zIW9IC%2BTLeNC1Q40bhjGcXJkfo8Y7eAHvVZVIEoSxtZ%2BOKgXAf%2FCY2aDmgVY1llZbP1uDcqZE0hUPnAApU6K%2FZXKdNNEWJV8t5bqaNOg9kRHlDIzV9JiqpWNWq7LEBcNpU4zeCIcM87Cm8cZNlm0pYVuU%2FMtHUHC1OCUSaiTHwCOzUtTEFdmXUkBXWHk4x9SLbBr8%2FACHa%2BhNjR5VeRn%2BbJVAedxJCJtmRE5snlVFjwI69mBPpS%2BW1bL76d3ag7DYOauNQBcgq1ciX11SiTjpg9k8vNdfmw5xi7j1GoyWz0YOM1oOFNbtdfcgTH%2BMNRiOYsfzTux1wPekUwSdA1vJf9qz9BpzhL0RunLlkvGHI%2FYoMMNx87p16Yl%2FZKfL3M3%2BUM7j5qZ6ViWeMDBjtO8XCdUDGvnXljrWv7y32Bn0hy4U7Rr7F3mODo15yUbreDZC4QIvLbTBl2ijzMAlS7aD2Q3lKdfKcaOAywAY6VzonSVwCMn6WVlu71qiZvLv%2BpWkEqA6%2FJvbWKaBMybCy3JPZIgxjXzImzAAQRX2AqGzTqONfAhMa5WFwWhKPqaiZ0JwOI4uQflZRHhNycC7LU7qTucH3agn%2BQDDBj7%2B%2BBjqkAaB5T7cAkM2p3Trt5diDhkoJtpBIpGVxjHD7yblQ8E586ZW0Ypvdi1Rhz%2BZpvLJeTFxm9PUPuVvpEtBFky%2Bo2HdjcGyBI8%2BgZC%2Bo2MYv1yAy%2FrQkyRhWDfK93oPTeiJH8pyoSYJGEonDk7qj%2Fh3Tgtq06QaFjIYs1n3IgThWreGxhzboR9bzamwLMXKHD8%2FOi5QPGKmku3ock%2FBJE75H4yUDYzm%2B&X-Amz-Signature=110e2f5f1670bff5abba96f1dfc7838cc7fad66700532252eba59c8272fcda10&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFTSJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC0JLpg2XUTbrhnUuMGslAB325SaeLQYE7q20obTWJAggIhAKEI9kq%2B8LYXsagOv3xCp1XyT7u2%2Br1MUSNJAOP9q0LZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRN1ii%2BwWMcLIaIJ0q3ANWe%2F4BVcHvN4hpGpboLydXFY4cV4zIW9IC%2BTLeNC1Q40bhjGcXJkfo8Y7eAHvVZVIEoSxtZ%2BOKgXAf%2FCY2aDmgVY1llZbP1uDcqZE0hUPnAApU6K%2FZXKdNNEWJV8t5bqaNOg9kRHlDIzV9JiqpWNWq7LEBcNpU4zeCIcM87Cm8cZNlm0pYVuU%2FMtHUHC1OCUSaiTHwCOzUtTEFdmXUkBXWHk4x9SLbBr8%2FACHa%2BhNjR5VeRn%2BbJVAedxJCJtmRE5snlVFjwI69mBPpS%2BW1bL76d3ag7DYOauNQBcgq1ciX11SiTjpg9k8vNdfmw5xi7j1GoyWz0YOM1oOFNbtdfcgTH%2BMNRiOYsfzTux1wPekUwSdA1vJf9qz9BpzhL0RunLlkvGHI%2FYoMMNx87p16Yl%2FZKfL3M3%2BUM7j5qZ6ViWeMDBjtO8XCdUDGvnXljrWv7y32Bn0hy4U7Rr7F3mODo15yUbreDZC4QIvLbTBl2ijzMAlS7aD2Q3lKdfKcaOAywAY6VzonSVwCMn6WVlu71qiZvLv%2BpWkEqA6%2FJvbWKaBMybCy3JPZIgxjXzImzAAQRX2AqGzTqONfAhMa5WFwWhKPqaiZ0JwOI4uQflZRHhNycC7LU7qTucH3agn%2BQDDBj7%2B%2BBjqkAaB5T7cAkM2p3Trt5diDhkoJtpBIpGVxjHD7yblQ8E586ZW0Ypvdi1Rhz%2BZpvLJeTFxm9PUPuVvpEtBFky%2Bo2HdjcGyBI8%2BgZC%2Bo2MYv1yAy%2FrQkyRhWDfK93oPTeiJH8pyoSYJGEonDk7qj%2Fh3Tgtq06QaFjIYs1n3IgThWreGxhzboR9bzamwLMXKHD8%2FOi5QPGKmku3ock%2FBJE75H4yUDYzm%2B&X-Amz-Signature=e1be659d0ddfbec2e0cffa6afd829d6dbe418c54554cd18c577cc4dfddaedf9c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFTSJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC0JLpg2XUTbrhnUuMGslAB325SaeLQYE7q20obTWJAggIhAKEI9kq%2B8LYXsagOv3xCp1XyT7u2%2Br1MUSNJAOP9q0LZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRN1ii%2BwWMcLIaIJ0q3ANWe%2F4BVcHvN4hpGpboLydXFY4cV4zIW9IC%2BTLeNC1Q40bhjGcXJkfo8Y7eAHvVZVIEoSxtZ%2BOKgXAf%2FCY2aDmgVY1llZbP1uDcqZE0hUPnAApU6K%2FZXKdNNEWJV8t5bqaNOg9kRHlDIzV9JiqpWNWq7LEBcNpU4zeCIcM87Cm8cZNlm0pYVuU%2FMtHUHC1OCUSaiTHwCOzUtTEFdmXUkBXWHk4x9SLbBr8%2FACHa%2BhNjR5VeRn%2BbJVAedxJCJtmRE5snlVFjwI69mBPpS%2BW1bL76d3ag7DYOauNQBcgq1ciX11SiTjpg9k8vNdfmw5xi7j1GoyWz0YOM1oOFNbtdfcgTH%2BMNRiOYsfzTux1wPekUwSdA1vJf9qz9BpzhL0RunLlkvGHI%2FYoMMNx87p16Yl%2FZKfL3M3%2BUM7j5qZ6ViWeMDBjtO8XCdUDGvnXljrWv7y32Bn0hy4U7Rr7F3mODo15yUbreDZC4QIvLbTBl2ijzMAlS7aD2Q3lKdfKcaOAywAY6VzonSVwCMn6WVlu71qiZvLv%2BpWkEqA6%2FJvbWKaBMybCy3JPZIgxjXzImzAAQRX2AqGzTqONfAhMa5WFwWhKPqaiZ0JwOI4uQflZRHhNycC7LU7qTucH3agn%2BQDDBj7%2B%2BBjqkAaB5T7cAkM2p3Trt5diDhkoJtpBIpGVxjHD7yblQ8E586ZW0Ypvdi1Rhz%2BZpvLJeTFxm9PUPuVvpEtBFky%2Bo2HdjcGyBI8%2BgZC%2Bo2MYv1yAy%2FrQkyRhWDfK93oPTeiJH8pyoSYJGEonDk7qj%2Fh3Tgtq06QaFjIYs1n3IgThWreGxhzboR9bzamwLMXKHD8%2FOi5QPGKmku3ock%2FBJE75H4yUDYzm%2B&X-Amz-Signature=a850205bbe606ee2da065784c082bdbdbc85a8b7acb79bcdd059608430ce5084&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFTSJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC0JLpg2XUTbrhnUuMGslAB325SaeLQYE7q20obTWJAggIhAKEI9kq%2B8LYXsagOv3xCp1XyT7u2%2Br1MUSNJAOP9q0LZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRN1ii%2BwWMcLIaIJ0q3ANWe%2F4BVcHvN4hpGpboLydXFY4cV4zIW9IC%2BTLeNC1Q40bhjGcXJkfo8Y7eAHvVZVIEoSxtZ%2BOKgXAf%2FCY2aDmgVY1llZbP1uDcqZE0hUPnAApU6K%2FZXKdNNEWJV8t5bqaNOg9kRHlDIzV9JiqpWNWq7LEBcNpU4zeCIcM87Cm8cZNlm0pYVuU%2FMtHUHC1OCUSaiTHwCOzUtTEFdmXUkBXWHk4x9SLbBr8%2FACHa%2BhNjR5VeRn%2BbJVAedxJCJtmRE5snlVFjwI69mBPpS%2BW1bL76d3ag7DYOauNQBcgq1ciX11SiTjpg9k8vNdfmw5xi7j1GoyWz0YOM1oOFNbtdfcgTH%2BMNRiOYsfzTux1wPekUwSdA1vJf9qz9BpzhL0RunLlkvGHI%2FYoMMNx87p16Yl%2FZKfL3M3%2BUM7j5qZ6ViWeMDBjtO8XCdUDGvnXljrWv7y32Bn0hy4U7Rr7F3mODo15yUbreDZC4QIvLbTBl2ijzMAlS7aD2Q3lKdfKcaOAywAY6VzonSVwCMn6WVlu71qiZvLv%2BpWkEqA6%2FJvbWKaBMybCy3JPZIgxjXzImzAAQRX2AqGzTqONfAhMa5WFwWhKPqaiZ0JwOI4uQflZRHhNycC7LU7qTucH3agn%2BQDDBj7%2B%2BBjqkAaB5T7cAkM2p3Trt5diDhkoJtpBIpGVxjHD7yblQ8E586ZW0Ypvdi1Rhz%2BZpvLJeTFxm9PUPuVvpEtBFky%2Bo2HdjcGyBI8%2BgZC%2Bo2MYv1yAy%2FrQkyRhWDfK93oPTeiJH8pyoSYJGEonDk7qj%2Fh3Tgtq06QaFjIYs1n3IgThWreGxhzboR9bzamwLMXKHD8%2FOi5QPGKmku3ock%2FBJE75H4yUDYzm%2B&X-Amz-Signature=940b0d54239a44e04aeb212742a3067812b8573dba54b006e4c5be66cd151e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQFTSJE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC0JLpg2XUTbrhnUuMGslAB325SaeLQYE7q20obTWJAggIhAKEI9kq%2B8LYXsagOv3xCp1XyT7u2%2Br1MUSNJAOP9q0LZKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRN1ii%2BwWMcLIaIJ0q3ANWe%2F4BVcHvN4hpGpboLydXFY4cV4zIW9IC%2BTLeNC1Q40bhjGcXJkfo8Y7eAHvVZVIEoSxtZ%2BOKgXAf%2FCY2aDmgVY1llZbP1uDcqZE0hUPnAApU6K%2FZXKdNNEWJV8t5bqaNOg9kRHlDIzV9JiqpWNWq7LEBcNpU4zeCIcM87Cm8cZNlm0pYVuU%2FMtHUHC1OCUSaiTHwCOzUtTEFdmXUkBXWHk4x9SLbBr8%2FACHa%2BhNjR5VeRn%2BbJVAedxJCJtmRE5snlVFjwI69mBPpS%2BW1bL76d3ag7DYOauNQBcgq1ciX11SiTjpg9k8vNdfmw5xi7j1GoyWz0YOM1oOFNbtdfcgTH%2BMNRiOYsfzTux1wPekUwSdA1vJf9qz9BpzhL0RunLlkvGHI%2FYoMMNx87p16Yl%2FZKfL3M3%2BUM7j5qZ6ViWeMDBjtO8XCdUDGvnXljrWv7y32Bn0hy4U7Rr7F3mODo15yUbreDZC4QIvLbTBl2ijzMAlS7aD2Q3lKdfKcaOAywAY6VzonSVwCMn6WVlu71qiZvLv%2BpWkEqA6%2FJvbWKaBMybCy3JPZIgxjXzImzAAQRX2AqGzTqONfAhMa5WFwWhKPqaiZ0JwOI4uQflZRHhNycC7LU7qTucH3agn%2BQDDBj7%2B%2BBjqkAaB5T7cAkM2p3Trt5diDhkoJtpBIpGVxjHD7yblQ8E586ZW0Ypvdi1Rhz%2BZpvLJeTFxm9PUPuVvpEtBFky%2Bo2HdjcGyBI8%2BgZC%2Bo2MYv1yAy%2FrQkyRhWDfK93oPTeiJH8pyoSYJGEonDk7qj%2Fh3Tgtq06QaFjIYs1n3IgThWreGxhzboR9bzamwLMXKHD8%2FOi5QPGKmku3ock%2FBJE75H4yUDYzm%2B&X-Amz-Signature=3f199df2971e8b1707cb75c19b2726d764f812afe19651ba8c254dc466c9ab0c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
