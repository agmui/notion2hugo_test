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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCVKZGN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUHQEvxC5mYIICpqHBKbYqTLt%2BQcFUU8hHT4GXctSQAIgZIS4JAxdrhQb8EdKhhDm3HkiDb%2Fs6ykLVDjWgasFTDEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL5EWX%2ButSzkZui2nCrcA28oWCTzj5IJWWwaCVHgfqQTONo%2BHLbZEjWq7w4S%2ByGri5ejioD%2F7ALFLicEUHzHAvpWFp4%2FkVeTIonGdy7K7jpJDTLvWxR5rc3mvZsgPAqK4XQTLLWBO6Yjgk7EMfay4JfCI2PUqE7e9RQEGytxVKAfbxrysiNIImi%2BoAMg38L5PZxMAtjRod6o1z%2BZi9mRSuUGR8TFrn1T37zbizhd%2BJNvq2r3Uomu4ncaI5hQ8aeLtSiTNkg0zTRnCDZxc7Lh8uC3W8WsGw5G46vBiD8v0VJxoJr8QrIqcpjU%2BDqt0pr4p8UxSThZbdqsUYl%2Bag9Q%2FYCLxK7QMNLUPmQ%2FypINuy0ImLyo%2FshFM7eYsyeO1Z7hgUaVvhLl3vDTKkORV5OEfToaUXxLEDwbD9dFdea9V9eXShacASAFa9Rt81jEg9zqI%2BMfdJxE3b3NvYcUrhtrfHm1jmdzVrlRpLS1CmxweeZgB7sPBG0qJjOBv92b7fLSDeXCN8S2%2BrwRgDVmq6C%2F%2BUyqzsm6x89b3phPnBbXRfTnSzp9tJLOM9o4Qb5HIi1aVDoj5UGgZ95BNqFGGjv91GVZuAA8yEL5vnHJmHgWTAsVzmsFbuVO5eJ7%2FA1Wf2cqs9iKfkzP555AGLTjMOzq88QGOqUByiaCmOejMhiXsK6ItXgnglTgncUalX0nSo71G2emKgEiW%2BqPAJdL8mXapfj7MP4EqmqbnfVnufk%2BR1I64U6wLjXpnMcPkdboTVmPPYA1JX%2B9YFKKZuhjVBDggfoE3A4GWBfl1bhxAM2AUhMt%2BkrFo4K3YKAlDBsPkfMx1LrkiZ5wEyK2I9fWbp2sMuyHYjapAXkt7gTzSU%2BxWKydNT6APUtQjhe9&X-Amz-Signature=fe4a49850bf583c903b595cac1ba0b04c25003e961481ca015d90b27819fe281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCVKZGN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUHQEvxC5mYIICpqHBKbYqTLt%2BQcFUU8hHT4GXctSQAIgZIS4JAxdrhQb8EdKhhDm3HkiDb%2Fs6ykLVDjWgasFTDEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL5EWX%2ButSzkZui2nCrcA28oWCTzj5IJWWwaCVHgfqQTONo%2BHLbZEjWq7w4S%2ByGri5ejioD%2F7ALFLicEUHzHAvpWFp4%2FkVeTIonGdy7K7jpJDTLvWxR5rc3mvZsgPAqK4XQTLLWBO6Yjgk7EMfay4JfCI2PUqE7e9RQEGytxVKAfbxrysiNIImi%2BoAMg38L5PZxMAtjRod6o1z%2BZi9mRSuUGR8TFrn1T37zbizhd%2BJNvq2r3Uomu4ncaI5hQ8aeLtSiTNkg0zTRnCDZxc7Lh8uC3W8WsGw5G46vBiD8v0VJxoJr8QrIqcpjU%2BDqt0pr4p8UxSThZbdqsUYl%2Bag9Q%2FYCLxK7QMNLUPmQ%2FypINuy0ImLyo%2FshFM7eYsyeO1Z7hgUaVvhLl3vDTKkORV5OEfToaUXxLEDwbD9dFdea9V9eXShacASAFa9Rt81jEg9zqI%2BMfdJxE3b3NvYcUrhtrfHm1jmdzVrlRpLS1CmxweeZgB7sPBG0qJjOBv92b7fLSDeXCN8S2%2BrwRgDVmq6C%2F%2BUyqzsm6x89b3phPnBbXRfTnSzp9tJLOM9o4Qb5HIi1aVDoj5UGgZ95BNqFGGjv91GVZuAA8yEL5vnHJmHgWTAsVzmsFbuVO5eJ7%2FA1Wf2cqs9iKfkzP555AGLTjMOzq88QGOqUByiaCmOejMhiXsK6ItXgnglTgncUalX0nSo71G2emKgEiW%2BqPAJdL8mXapfj7MP4EqmqbnfVnufk%2BR1I64U6wLjXpnMcPkdboTVmPPYA1JX%2B9YFKKZuhjVBDggfoE3A4GWBfl1bhxAM2AUhMt%2BkrFo4K3YKAlDBsPkfMx1LrkiZ5wEyK2I9fWbp2sMuyHYjapAXkt7gTzSU%2BxWKydNT6APUtQjhe9&X-Amz-Signature=630e12ec54fcf53e283927b86ec4d18c188ebf121beddf20c6def059a21409b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCVKZGN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUHQEvxC5mYIICpqHBKbYqTLt%2BQcFUU8hHT4GXctSQAIgZIS4JAxdrhQb8EdKhhDm3HkiDb%2Fs6ykLVDjWgasFTDEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL5EWX%2ButSzkZui2nCrcA28oWCTzj5IJWWwaCVHgfqQTONo%2BHLbZEjWq7w4S%2ByGri5ejioD%2F7ALFLicEUHzHAvpWFp4%2FkVeTIonGdy7K7jpJDTLvWxR5rc3mvZsgPAqK4XQTLLWBO6Yjgk7EMfay4JfCI2PUqE7e9RQEGytxVKAfbxrysiNIImi%2BoAMg38L5PZxMAtjRod6o1z%2BZi9mRSuUGR8TFrn1T37zbizhd%2BJNvq2r3Uomu4ncaI5hQ8aeLtSiTNkg0zTRnCDZxc7Lh8uC3W8WsGw5G46vBiD8v0VJxoJr8QrIqcpjU%2BDqt0pr4p8UxSThZbdqsUYl%2Bag9Q%2FYCLxK7QMNLUPmQ%2FypINuy0ImLyo%2FshFM7eYsyeO1Z7hgUaVvhLl3vDTKkORV5OEfToaUXxLEDwbD9dFdea9V9eXShacASAFa9Rt81jEg9zqI%2BMfdJxE3b3NvYcUrhtrfHm1jmdzVrlRpLS1CmxweeZgB7sPBG0qJjOBv92b7fLSDeXCN8S2%2BrwRgDVmq6C%2F%2BUyqzsm6x89b3phPnBbXRfTnSzp9tJLOM9o4Qb5HIi1aVDoj5UGgZ95BNqFGGjv91GVZuAA8yEL5vnHJmHgWTAsVzmsFbuVO5eJ7%2FA1Wf2cqs9iKfkzP555AGLTjMOzq88QGOqUByiaCmOejMhiXsK6ItXgnglTgncUalX0nSo71G2emKgEiW%2BqPAJdL8mXapfj7MP4EqmqbnfVnufk%2BR1I64U6wLjXpnMcPkdboTVmPPYA1JX%2B9YFKKZuhjVBDggfoE3A4GWBfl1bhxAM2AUhMt%2BkrFo4K3YKAlDBsPkfMx1LrkiZ5wEyK2I9fWbp2sMuyHYjapAXkt7gTzSU%2BxWKydNT6APUtQjhe9&X-Amz-Signature=0224501b4d08881f4326cdf9be1430252d10be5746e6fbc129b456112e643fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCVKZGN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUHQEvxC5mYIICpqHBKbYqTLt%2BQcFUU8hHT4GXctSQAIgZIS4JAxdrhQb8EdKhhDm3HkiDb%2Fs6ykLVDjWgasFTDEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL5EWX%2ButSzkZui2nCrcA28oWCTzj5IJWWwaCVHgfqQTONo%2BHLbZEjWq7w4S%2ByGri5ejioD%2F7ALFLicEUHzHAvpWFp4%2FkVeTIonGdy7K7jpJDTLvWxR5rc3mvZsgPAqK4XQTLLWBO6Yjgk7EMfay4JfCI2PUqE7e9RQEGytxVKAfbxrysiNIImi%2BoAMg38L5PZxMAtjRod6o1z%2BZi9mRSuUGR8TFrn1T37zbizhd%2BJNvq2r3Uomu4ncaI5hQ8aeLtSiTNkg0zTRnCDZxc7Lh8uC3W8WsGw5G46vBiD8v0VJxoJr8QrIqcpjU%2BDqt0pr4p8UxSThZbdqsUYl%2Bag9Q%2FYCLxK7QMNLUPmQ%2FypINuy0ImLyo%2FshFM7eYsyeO1Z7hgUaVvhLl3vDTKkORV5OEfToaUXxLEDwbD9dFdea9V9eXShacASAFa9Rt81jEg9zqI%2BMfdJxE3b3NvYcUrhtrfHm1jmdzVrlRpLS1CmxweeZgB7sPBG0qJjOBv92b7fLSDeXCN8S2%2BrwRgDVmq6C%2F%2BUyqzsm6x89b3phPnBbXRfTnSzp9tJLOM9o4Qb5HIi1aVDoj5UGgZ95BNqFGGjv91GVZuAA8yEL5vnHJmHgWTAsVzmsFbuVO5eJ7%2FA1Wf2cqs9iKfkzP555AGLTjMOzq88QGOqUByiaCmOejMhiXsK6ItXgnglTgncUalX0nSo71G2emKgEiW%2BqPAJdL8mXapfj7MP4EqmqbnfVnufk%2BR1I64U6wLjXpnMcPkdboTVmPPYA1JX%2B9YFKKZuhjVBDggfoE3A4GWBfl1bhxAM2AUhMt%2BkrFo4K3YKAlDBsPkfMx1LrkiZ5wEyK2I9fWbp2sMuyHYjapAXkt7gTzSU%2BxWKydNT6APUtQjhe9&X-Amz-Signature=187453ea55f5dbef27cc80d35e62f1b986cf78bd7684e0042d42eb57f49727a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCVKZGN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUHQEvxC5mYIICpqHBKbYqTLt%2BQcFUU8hHT4GXctSQAIgZIS4JAxdrhQb8EdKhhDm3HkiDb%2Fs6ykLVDjWgasFTDEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL5EWX%2ButSzkZui2nCrcA28oWCTzj5IJWWwaCVHgfqQTONo%2BHLbZEjWq7w4S%2ByGri5ejioD%2F7ALFLicEUHzHAvpWFp4%2FkVeTIonGdy7K7jpJDTLvWxR5rc3mvZsgPAqK4XQTLLWBO6Yjgk7EMfay4JfCI2PUqE7e9RQEGytxVKAfbxrysiNIImi%2BoAMg38L5PZxMAtjRod6o1z%2BZi9mRSuUGR8TFrn1T37zbizhd%2BJNvq2r3Uomu4ncaI5hQ8aeLtSiTNkg0zTRnCDZxc7Lh8uC3W8WsGw5G46vBiD8v0VJxoJr8QrIqcpjU%2BDqt0pr4p8UxSThZbdqsUYl%2Bag9Q%2FYCLxK7QMNLUPmQ%2FypINuy0ImLyo%2FshFM7eYsyeO1Z7hgUaVvhLl3vDTKkORV5OEfToaUXxLEDwbD9dFdea9V9eXShacASAFa9Rt81jEg9zqI%2BMfdJxE3b3NvYcUrhtrfHm1jmdzVrlRpLS1CmxweeZgB7sPBG0qJjOBv92b7fLSDeXCN8S2%2BrwRgDVmq6C%2F%2BUyqzsm6x89b3phPnBbXRfTnSzp9tJLOM9o4Qb5HIi1aVDoj5UGgZ95BNqFGGjv91GVZuAA8yEL5vnHJmHgWTAsVzmsFbuVO5eJ7%2FA1Wf2cqs9iKfkzP555AGLTjMOzq88QGOqUByiaCmOejMhiXsK6ItXgnglTgncUalX0nSo71G2emKgEiW%2BqPAJdL8mXapfj7MP4EqmqbnfVnufk%2BR1I64U6wLjXpnMcPkdboTVmPPYA1JX%2B9YFKKZuhjVBDggfoE3A4GWBfl1bhxAM2AUhMt%2BkrFo4K3YKAlDBsPkfMx1LrkiZ5wEyK2I9fWbp2sMuyHYjapAXkt7gTzSU%2BxWKydNT6APUtQjhe9&X-Amz-Signature=ba4ff804814fac12d92827cabec0b29574dab9fe6acab693093190efe3cfff79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCVKZGN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUHQEvxC5mYIICpqHBKbYqTLt%2BQcFUU8hHT4GXctSQAIgZIS4JAxdrhQb8EdKhhDm3HkiDb%2Fs6ykLVDjWgasFTDEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL5EWX%2ButSzkZui2nCrcA28oWCTzj5IJWWwaCVHgfqQTONo%2BHLbZEjWq7w4S%2ByGri5ejioD%2F7ALFLicEUHzHAvpWFp4%2FkVeTIonGdy7K7jpJDTLvWxR5rc3mvZsgPAqK4XQTLLWBO6Yjgk7EMfay4JfCI2PUqE7e9RQEGytxVKAfbxrysiNIImi%2BoAMg38L5PZxMAtjRod6o1z%2BZi9mRSuUGR8TFrn1T37zbizhd%2BJNvq2r3Uomu4ncaI5hQ8aeLtSiTNkg0zTRnCDZxc7Lh8uC3W8WsGw5G46vBiD8v0VJxoJr8QrIqcpjU%2BDqt0pr4p8UxSThZbdqsUYl%2Bag9Q%2FYCLxK7QMNLUPmQ%2FypINuy0ImLyo%2FshFM7eYsyeO1Z7hgUaVvhLl3vDTKkORV5OEfToaUXxLEDwbD9dFdea9V9eXShacASAFa9Rt81jEg9zqI%2BMfdJxE3b3NvYcUrhtrfHm1jmdzVrlRpLS1CmxweeZgB7sPBG0qJjOBv92b7fLSDeXCN8S2%2BrwRgDVmq6C%2F%2BUyqzsm6x89b3phPnBbXRfTnSzp9tJLOM9o4Qb5HIi1aVDoj5UGgZ95BNqFGGjv91GVZuAA8yEL5vnHJmHgWTAsVzmsFbuVO5eJ7%2FA1Wf2cqs9iKfkzP555AGLTjMOzq88QGOqUByiaCmOejMhiXsK6ItXgnglTgncUalX0nSo71G2emKgEiW%2BqPAJdL8mXapfj7MP4EqmqbnfVnufk%2BR1I64U6wLjXpnMcPkdboTVmPPYA1JX%2B9YFKKZuhjVBDggfoE3A4GWBfl1bhxAM2AUhMt%2BkrFo4K3YKAlDBsPkfMx1LrkiZ5wEyK2I9fWbp2sMuyHYjapAXkt7gTzSU%2BxWKydNT6APUtQjhe9&X-Amz-Signature=32be30fbbbb3c470e22b2309e29f0c6e6b592063eb46f754b587366bd2cb600e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCVKZGN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FUHQEvxC5mYIICpqHBKbYqTLt%2BQcFUU8hHT4GXctSQAIgZIS4JAxdrhQb8EdKhhDm3HkiDb%2Fs6ykLVDjWgasFTDEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL5EWX%2ButSzkZui2nCrcA28oWCTzj5IJWWwaCVHgfqQTONo%2BHLbZEjWq7w4S%2ByGri5ejioD%2F7ALFLicEUHzHAvpWFp4%2FkVeTIonGdy7K7jpJDTLvWxR5rc3mvZsgPAqK4XQTLLWBO6Yjgk7EMfay4JfCI2PUqE7e9RQEGytxVKAfbxrysiNIImi%2BoAMg38L5PZxMAtjRod6o1z%2BZi9mRSuUGR8TFrn1T37zbizhd%2BJNvq2r3Uomu4ncaI5hQ8aeLtSiTNkg0zTRnCDZxc7Lh8uC3W8WsGw5G46vBiD8v0VJxoJr8QrIqcpjU%2BDqt0pr4p8UxSThZbdqsUYl%2Bag9Q%2FYCLxK7QMNLUPmQ%2FypINuy0ImLyo%2FshFM7eYsyeO1Z7hgUaVvhLl3vDTKkORV5OEfToaUXxLEDwbD9dFdea9V9eXShacASAFa9Rt81jEg9zqI%2BMfdJxE3b3NvYcUrhtrfHm1jmdzVrlRpLS1CmxweeZgB7sPBG0qJjOBv92b7fLSDeXCN8S2%2BrwRgDVmq6C%2F%2BUyqzsm6x89b3phPnBbXRfTnSzp9tJLOM9o4Qb5HIi1aVDoj5UGgZ95BNqFGGjv91GVZuAA8yEL5vnHJmHgWTAsVzmsFbuVO5eJ7%2FA1Wf2cqs9iKfkzP555AGLTjMOzq88QGOqUByiaCmOejMhiXsK6ItXgnglTgncUalX0nSo71G2emKgEiW%2BqPAJdL8mXapfj7MP4EqmqbnfVnufk%2BR1I64U6wLjXpnMcPkdboTVmPPYA1JX%2B9YFKKZuhjVBDggfoE3A4GWBfl1bhxAM2AUhMt%2BkrFo4K3YKAlDBsPkfMx1LrkiZ5wEyK2I9fWbp2sMuyHYjapAXkt7gTzSU%2BxWKydNT6APUtQjhe9&X-Amz-Signature=0d18ac2394ce83407061274458b7b11e0a85dcfc70ac0c2183cd2b4426fd7ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
