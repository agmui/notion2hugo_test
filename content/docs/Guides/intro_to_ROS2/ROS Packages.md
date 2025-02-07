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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI35FJ4G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFmP4WCZ21ZhQtKE3dJ%2FMf7i%2BuQUxVqi5Czge6B1%2F9zyAiEAvfDdlJFlv0bHxveb4DoFLxBeXVdbc9WizMsHKOtcW1Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJuGCRZ9hP7tYe6RryrcA%2FZezBjfrgPFZA1zE7RtKkKHX3XUY1lHVfmob4eiJ135s3wCvD2VIx3oUmVcaNxvIXm5f74ENf%2BK7mAGnQoumJeqi8M0lOpJ0awfGnNhbY6LH6m2QHu5nxXOKDPfdhOLOPlAaJuuide0o4nc4E%2FLWV0gcSEDmaRi3V1HHc53t69K2%2BdtkxIPlGEeHwS3TuUddfaz2l8M2ZkOEJPg4kev6y4EHNRRsdV2DYRouee7CnIdcUj6nmwA6SJesWbH8jCAn8im9T%2FQgS6K8y3L7pHRYlP7%2FmtZSn7L3cfPM5xUlDQvpjtL9E5utOS6%2Fll1y7ugRLh3T2XMysTpS0iR31%2BsjsXsI8jxHSInHLEXM8V%2FpUwbAsohVhTiCHhDX6WulqQyFjC7xib36IZzrtTfAipR49OvVL7VmBtPOUUKCAvJ%2BlAvGt1yOotbzwAfBVP8L%2Boz0xxuBWZHeACQ0QhFMtfIasrKqIAqhBxa5GZhg3p8gdrJQm29a3L2A0%2B3CoXZf3Y1OPB5xHHriArvejsg3zdGi1I%2FkC0YopBf4X3NKaz%2F5S%2ByUCW4QMKjkJblrbq8UGjjB9kisXQCslrOHgFXsHtUkA0fMP3aZJDxgMiCuqlhmLyvgYkLfvN0AZbqhrkdMLmAmr0GOqUBNclsfaVUx7XBnMFcYehd3iXwBBxqVIDzcKNgszGk5lBo3Nim0UMWQxbH9rhiJhQWVFQU0dUlY9UPSjM1iKE4TR7RuoT0wX4%2BWXGc7BZAograCHG3FC6niCuH01AfRB214xQH1pS0J4HPoF2Q7iQybgfWA8FwMQMycdIIInU5aeyhYWp69GCjnsCWbIpKe5qD%2Ft0PZl2piia3vwRqwVcrw7bTRzdQ&X-Amz-Signature=d4a57df71c1460cbf08c21294eafceeed4865d5c2acc8ddf034057a8eafd01f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI35FJ4G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFmP4WCZ21ZhQtKE3dJ%2FMf7i%2BuQUxVqi5Czge6B1%2F9zyAiEAvfDdlJFlv0bHxveb4DoFLxBeXVdbc9WizMsHKOtcW1Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJuGCRZ9hP7tYe6RryrcA%2FZezBjfrgPFZA1zE7RtKkKHX3XUY1lHVfmob4eiJ135s3wCvD2VIx3oUmVcaNxvIXm5f74ENf%2BK7mAGnQoumJeqi8M0lOpJ0awfGnNhbY6LH6m2QHu5nxXOKDPfdhOLOPlAaJuuide0o4nc4E%2FLWV0gcSEDmaRi3V1HHc53t69K2%2BdtkxIPlGEeHwS3TuUddfaz2l8M2ZkOEJPg4kev6y4EHNRRsdV2DYRouee7CnIdcUj6nmwA6SJesWbH8jCAn8im9T%2FQgS6K8y3L7pHRYlP7%2FmtZSn7L3cfPM5xUlDQvpjtL9E5utOS6%2Fll1y7ugRLh3T2XMysTpS0iR31%2BsjsXsI8jxHSInHLEXM8V%2FpUwbAsohVhTiCHhDX6WulqQyFjC7xib36IZzrtTfAipR49OvVL7VmBtPOUUKCAvJ%2BlAvGt1yOotbzwAfBVP8L%2Boz0xxuBWZHeACQ0QhFMtfIasrKqIAqhBxa5GZhg3p8gdrJQm29a3L2A0%2B3CoXZf3Y1OPB5xHHriArvejsg3zdGi1I%2FkC0YopBf4X3NKaz%2F5S%2ByUCW4QMKjkJblrbq8UGjjB9kisXQCslrOHgFXsHtUkA0fMP3aZJDxgMiCuqlhmLyvgYkLfvN0AZbqhrkdMLmAmr0GOqUBNclsfaVUx7XBnMFcYehd3iXwBBxqVIDzcKNgszGk5lBo3Nim0UMWQxbH9rhiJhQWVFQU0dUlY9UPSjM1iKE4TR7RuoT0wX4%2BWXGc7BZAograCHG3FC6niCuH01AfRB214xQH1pS0J4HPoF2Q7iQybgfWA8FwMQMycdIIInU5aeyhYWp69GCjnsCWbIpKe5qD%2Ft0PZl2piia3vwRqwVcrw7bTRzdQ&X-Amz-Signature=535e83e4901d0dded16f4637dc696a6a70f28be9e442881a41267c1264fc9964&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI35FJ4G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFmP4WCZ21ZhQtKE3dJ%2FMf7i%2BuQUxVqi5Czge6B1%2F9zyAiEAvfDdlJFlv0bHxveb4DoFLxBeXVdbc9WizMsHKOtcW1Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJuGCRZ9hP7tYe6RryrcA%2FZezBjfrgPFZA1zE7RtKkKHX3XUY1lHVfmob4eiJ135s3wCvD2VIx3oUmVcaNxvIXm5f74ENf%2BK7mAGnQoumJeqi8M0lOpJ0awfGnNhbY6LH6m2QHu5nxXOKDPfdhOLOPlAaJuuide0o4nc4E%2FLWV0gcSEDmaRi3V1HHc53t69K2%2BdtkxIPlGEeHwS3TuUddfaz2l8M2ZkOEJPg4kev6y4EHNRRsdV2DYRouee7CnIdcUj6nmwA6SJesWbH8jCAn8im9T%2FQgS6K8y3L7pHRYlP7%2FmtZSn7L3cfPM5xUlDQvpjtL9E5utOS6%2Fll1y7ugRLh3T2XMysTpS0iR31%2BsjsXsI8jxHSInHLEXM8V%2FpUwbAsohVhTiCHhDX6WulqQyFjC7xib36IZzrtTfAipR49OvVL7VmBtPOUUKCAvJ%2BlAvGt1yOotbzwAfBVP8L%2Boz0xxuBWZHeACQ0QhFMtfIasrKqIAqhBxa5GZhg3p8gdrJQm29a3L2A0%2B3CoXZf3Y1OPB5xHHriArvejsg3zdGi1I%2FkC0YopBf4X3NKaz%2F5S%2ByUCW4QMKjkJblrbq8UGjjB9kisXQCslrOHgFXsHtUkA0fMP3aZJDxgMiCuqlhmLyvgYkLfvN0AZbqhrkdMLmAmr0GOqUBNclsfaVUx7XBnMFcYehd3iXwBBxqVIDzcKNgszGk5lBo3Nim0UMWQxbH9rhiJhQWVFQU0dUlY9UPSjM1iKE4TR7RuoT0wX4%2BWXGc7BZAograCHG3FC6niCuH01AfRB214xQH1pS0J4HPoF2Q7iQybgfWA8FwMQMycdIIInU5aeyhYWp69GCjnsCWbIpKe5qD%2Ft0PZl2piia3vwRqwVcrw7bTRzdQ&X-Amz-Signature=f518d0ba250b18af1f6fb373b53d4567fd33974a7a0ac3b8fc22be8365ea97aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI35FJ4G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFmP4WCZ21ZhQtKE3dJ%2FMf7i%2BuQUxVqi5Czge6B1%2F9zyAiEAvfDdlJFlv0bHxveb4DoFLxBeXVdbc9WizMsHKOtcW1Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJuGCRZ9hP7tYe6RryrcA%2FZezBjfrgPFZA1zE7RtKkKHX3XUY1lHVfmob4eiJ135s3wCvD2VIx3oUmVcaNxvIXm5f74ENf%2BK7mAGnQoumJeqi8M0lOpJ0awfGnNhbY6LH6m2QHu5nxXOKDPfdhOLOPlAaJuuide0o4nc4E%2FLWV0gcSEDmaRi3V1HHc53t69K2%2BdtkxIPlGEeHwS3TuUddfaz2l8M2ZkOEJPg4kev6y4EHNRRsdV2DYRouee7CnIdcUj6nmwA6SJesWbH8jCAn8im9T%2FQgS6K8y3L7pHRYlP7%2FmtZSn7L3cfPM5xUlDQvpjtL9E5utOS6%2Fll1y7ugRLh3T2XMysTpS0iR31%2BsjsXsI8jxHSInHLEXM8V%2FpUwbAsohVhTiCHhDX6WulqQyFjC7xib36IZzrtTfAipR49OvVL7VmBtPOUUKCAvJ%2BlAvGt1yOotbzwAfBVP8L%2Boz0xxuBWZHeACQ0QhFMtfIasrKqIAqhBxa5GZhg3p8gdrJQm29a3L2A0%2B3CoXZf3Y1OPB5xHHriArvejsg3zdGi1I%2FkC0YopBf4X3NKaz%2F5S%2ByUCW4QMKjkJblrbq8UGjjB9kisXQCslrOHgFXsHtUkA0fMP3aZJDxgMiCuqlhmLyvgYkLfvN0AZbqhrkdMLmAmr0GOqUBNclsfaVUx7XBnMFcYehd3iXwBBxqVIDzcKNgszGk5lBo3Nim0UMWQxbH9rhiJhQWVFQU0dUlY9UPSjM1iKE4TR7RuoT0wX4%2BWXGc7BZAograCHG3FC6niCuH01AfRB214xQH1pS0J4HPoF2Q7iQybgfWA8FwMQMycdIIInU5aeyhYWp69GCjnsCWbIpKe5qD%2Ft0PZl2piia3vwRqwVcrw7bTRzdQ&X-Amz-Signature=d6a6c755be595adb40ec2c8b60662c8ab0579cdd60e50d2d691d7a9a6acf24b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI35FJ4G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFmP4WCZ21ZhQtKE3dJ%2FMf7i%2BuQUxVqi5Czge6B1%2F9zyAiEAvfDdlJFlv0bHxveb4DoFLxBeXVdbc9WizMsHKOtcW1Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJuGCRZ9hP7tYe6RryrcA%2FZezBjfrgPFZA1zE7RtKkKHX3XUY1lHVfmob4eiJ135s3wCvD2VIx3oUmVcaNxvIXm5f74ENf%2BK7mAGnQoumJeqi8M0lOpJ0awfGnNhbY6LH6m2QHu5nxXOKDPfdhOLOPlAaJuuide0o4nc4E%2FLWV0gcSEDmaRi3V1HHc53t69K2%2BdtkxIPlGEeHwS3TuUddfaz2l8M2ZkOEJPg4kev6y4EHNRRsdV2DYRouee7CnIdcUj6nmwA6SJesWbH8jCAn8im9T%2FQgS6K8y3L7pHRYlP7%2FmtZSn7L3cfPM5xUlDQvpjtL9E5utOS6%2Fll1y7ugRLh3T2XMysTpS0iR31%2BsjsXsI8jxHSInHLEXM8V%2FpUwbAsohVhTiCHhDX6WulqQyFjC7xib36IZzrtTfAipR49OvVL7VmBtPOUUKCAvJ%2BlAvGt1yOotbzwAfBVP8L%2Boz0xxuBWZHeACQ0QhFMtfIasrKqIAqhBxa5GZhg3p8gdrJQm29a3L2A0%2B3CoXZf3Y1OPB5xHHriArvejsg3zdGi1I%2FkC0YopBf4X3NKaz%2F5S%2ByUCW4QMKjkJblrbq8UGjjB9kisXQCslrOHgFXsHtUkA0fMP3aZJDxgMiCuqlhmLyvgYkLfvN0AZbqhrkdMLmAmr0GOqUBNclsfaVUx7XBnMFcYehd3iXwBBxqVIDzcKNgszGk5lBo3Nim0UMWQxbH9rhiJhQWVFQU0dUlY9UPSjM1iKE4TR7RuoT0wX4%2BWXGc7BZAograCHG3FC6niCuH01AfRB214xQH1pS0J4HPoF2Q7iQybgfWA8FwMQMycdIIInU5aeyhYWp69GCjnsCWbIpKe5qD%2Ft0PZl2piia3vwRqwVcrw7bTRzdQ&X-Amz-Signature=8a34412fead4749c270977cad75d9762e0221a7567289b23e9ee7b277b9366e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI35FJ4G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFmP4WCZ21ZhQtKE3dJ%2FMf7i%2BuQUxVqi5Czge6B1%2F9zyAiEAvfDdlJFlv0bHxveb4DoFLxBeXVdbc9WizMsHKOtcW1Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJuGCRZ9hP7tYe6RryrcA%2FZezBjfrgPFZA1zE7RtKkKHX3XUY1lHVfmob4eiJ135s3wCvD2VIx3oUmVcaNxvIXm5f74ENf%2BK7mAGnQoumJeqi8M0lOpJ0awfGnNhbY6LH6m2QHu5nxXOKDPfdhOLOPlAaJuuide0o4nc4E%2FLWV0gcSEDmaRi3V1HHc53t69K2%2BdtkxIPlGEeHwS3TuUddfaz2l8M2ZkOEJPg4kev6y4EHNRRsdV2DYRouee7CnIdcUj6nmwA6SJesWbH8jCAn8im9T%2FQgS6K8y3L7pHRYlP7%2FmtZSn7L3cfPM5xUlDQvpjtL9E5utOS6%2Fll1y7ugRLh3T2XMysTpS0iR31%2BsjsXsI8jxHSInHLEXM8V%2FpUwbAsohVhTiCHhDX6WulqQyFjC7xib36IZzrtTfAipR49OvVL7VmBtPOUUKCAvJ%2BlAvGt1yOotbzwAfBVP8L%2Boz0xxuBWZHeACQ0QhFMtfIasrKqIAqhBxa5GZhg3p8gdrJQm29a3L2A0%2B3CoXZf3Y1OPB5xHHriArvejsg3zdGi1I%2FkC0YopBf4X3NKaz%2F5S%2ByUCW4QMKjkJblrbq8UGjjB9kisXQCslrOHgFXsHtUkA0fMP3aZJDxgMiCuqlhmLyvgYkLfvN0AZbqhrkdMLmAmr0GOqUBNclsfaVUx7XBnMFcYehd3iXwBBxqVIDzcKNgszGk5lBo3Nim0UMWQxbH9rhiJhQWVFQU0dUlY9UPSjM1iKE4TR7RuoT0wX4%2BWXGc7BZAograCHG3FC6niCuH01AfRB214xQH1pS0J4HPoF2Q7iQybgfWA8FwMQMycdIIInU5aeyhYWp69GCjnsCWbIpKe5qD%2Ft0PZl2piia3vwRqwVcrw7bTRzdQ&X-Amz-Signature=a51805521f1f092e350baf75629da2874df69be2e08bc1b4602455fadf1d44cf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI35FJ4G%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFmP4WCZ21ZhQtKE3dJ%2FMf7i%2BuQUxVqi5Czge6B1%2F9zyAiEAvfDdlJFlv0bHxveb4DoFLxBeXVdbc9WizMsHKOtcW1Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJuGCRZ9hP7tYe6RryrcA%2FZezBjfrgPFZA1zE7RtKkKHX3XUY1lHVfmob4eiJ135s3wCvD2VIx3oUmVcaNxvIXm5f74ENf%2BK7mAGnQoumJeqi8M0lOpJ0awfGnNhbY6LH6m2QHu5nxXOKDPfdhOLOPlAaJuuide0o4nc4E%2FLWV0gcSEDmaRi3V1HHc53t69K2%2BdtkxIPlGEeHwS3TuUddfaz2l8M2ZkOEJPg4kev6y4EHNRRsdV2DYRouee7CnIdcUj6nmwA6SJesWbH8jCAn8im9T%2FQgS6K8y3L7pHRYlP7%2FmtZSn7L3cfPM5xUlDQvpjtL9E5utOS6%2Fll1y7ugRLh3T2XMysTpS0iR31%2BsjsXsI8jxHSInHLEXM8V%2FpUwbAsohVhTiCHhDX6WulqQyFjC7xib36IZzrtTfAipR49OvVL7VmBtPOUUKCAvJ%2BlAvGt1yOotbzwAfBVP8L%2Boz0xxuBWZHeACQ0QhFMtfIasrKqIAqhBxa5GZhg3p8gdrJQm29a3L2A0%2B3CoXZf3Y1OPB5xHHriArvejsg3zdGi1I%2FkC0YopBf4X3NKaz%2F5S%2ByUCW4QMKjkJblrbq8UGjjB9kisXQCslrOHgFXsHtUkA0fMP3aZJDxgMiCuqlhmLyvgYkLfvN0AZbqhrkdMLmAmr0GOqUBNclsfaVUx7XBnMFcYehd3iXwBBxqVIDzcKNgszGk5lBo3Nim0UMWQxbH9rhiJhQWVFQU0dUlY9UPSjM1iKE4TR7RuoT0wX4%2BWXGc7BZAograCHG3FC6niCuH01AfRB214xQH1pS0J4HPoF2Q7iQybgfWA8FwMQMycdIIInU5aeyhYWp69GCjnsCWbIpKe5qD%2Ft0PZl2piia3vwRqwVcrw7bTRzdQ&X-Amz-Signature=91821fb71e03e5c094d3fb68de33acf0a80aea909a59ff61e9d23a41f6bf9125&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
