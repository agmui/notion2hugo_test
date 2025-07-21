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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJAKOEV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmW2X3LjoW9mDxcBRs4h8Ow3GVS4nEE%2FkmaflTbOLQRQIgEiZ1V4tGNXuvnZLd66Fwad9%2FY2uZ5S65iz%2BckTl6PsAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw12Rf5qBuQVAi6OyrcA1aKmXOA%2F%2BIkYaH8yM9CoqE8DKpjcqPI3fgycpFPV1U3nS3P0q%2BGdz5OQ3pUSzzvMAtmAa%2FRtZ9ZglA%2FPmZ05MaFtfs4FOfQ0fyiC6WE%2FwWBTaobnHwF%2BP96WKbQMu%2BkcLZoIBa7wwkZDfoTJRmZ6bH1X4iTHz1KdSMUJxqbf54AJhizX3wKhcwefovj%2FLAZ5kcbde2xi2f9lteyCnJIvMvXwB5zk9IQrcCBoz2Rwe%2B6zywqiBFb3X1c%2BSZO%2B%2BxKGF%2FJEVg4yEY5q7rD%2BXJxeMVUA8FnPToJ5ge3rq5RYT3auY4bK1rfR%2FXRCSd7eNHk8c%2FhN1eI5Sce%2FuebQcIzlJryQjH7nsos8jA4YgR7%2BQhuX26YAqKIHbwKmpUwCKVaLreTczsXqeyTRgFXxvOo7KBDNJ9%2Bu7Of%2BsWDCmduwO%2FHsSsKvyqJc38j8RJNafvhfiHY9gopv%2B7GNm7gQRsG0FuB8xSuLinElDzvt0pkcfGWc8T3QpfvcMhFIJ0%2B3%2BblLKoC5TeiMJL%2BLibn7NGRHBWmN%2Bp5XZvYmOcEMehvtx3UFslk696b8L4W8R8kdtAZJoNOZDpHL5NmCzKXIEjCekTnognMObv%2FKl7%2F9rpVLIaAi%2FxtEfnxDVD13onsMJ74%2BMMGOqUBEpISA9EjFfAikZGH1a1wyfuYoEcEq5EsJIsCpWct05EfpV7bhH2DVLpBUwonWEsnFQltLRC1FiMNluVljE67%2BNZnopDZe%2B1PQoX3ze8pQ6HPn0wLcjLoNICE%2Be7sI5NfXKEkdLg8yeh%2FcP%2BP1JwQQ2EgPbmLwPpXWBlXthon9ghHzBhwC4PeAXuvMQvHXa6C5QJVaLvi%2FFjwT9rDn2IOuQn5CT93&X-Amz-Signature=d3c459597427a8134b6a4dd1ba9f7ae052062e2e26fa5ab5c0cfdb92c60c474d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJAKOEV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmW2X3LjoW9mDxcBRs4h8Ow3GVS4nEE%2FkmaflTbOLQRQIgEiZ1V4tGNXuvnZLd66Fwad9%2FY2uZ5S65iz%2BckTl6PsAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw12Rf5qBuQVAi6OyrcA1aKmXOA%2F%2BIkYaH8yM9CoqE8DKpjcqPI3fgycpFPV1U3nS3P0q%2BGdz5OQ3pUSzzvMAtmAa%2FRtZ9ZglA%2FPmZ05MaFtfs4FOfQ0fyiC6WE%2FwWBTaobnHwF%2BP96WKbQMu%2BkcLZoIBa7wwkZDfoTJRmZ6bH1X4iTHz1KdSMUJxqbf54AJhizX3wKhcwefovj%2FLAZ5kcbde2xi2f9lteyCnJIvMvXwB5zk9IQrcCBoz2Rwe%2B6zywqiBFb3X1c%2BSZO%2B%2BxKGF%2FJEVg4yEY5q7rD%2BXJxeMVUA8FnPToJ5ge3rq5RYT3auY4bK1rfR%2FXRCSd7eNHk8c%2FhN1eI5Sce%2FuebQcIzlJryQjH7nsos8jA4YgR7%2BQhuX26YAqKIHbwKmpUwCKVaLreTczsXqeyTRgFXxvOo7KBDNJ9%2Bu7Of%2BsWDCmduwO%2FHsSsKvyqJc38j8RJNafvhfiHY9gopv%2B7GNm7gQRsG0FuB8xSuLinElDzvt0pkcfGWc8T3QpfvcMhFIJ0%2B3%2BblLKoC5TeiMJL%2BLibn7NGRHBWmN%2Bp5XZvYmOcEMehvtx3UFslk696b8L4W8R8kdtAZJoNOZDpHL5NmCzKXIEjCekTnognMObv%2FKl7%2F9rpVLIaAi%2FxtEfnxDVD13onsMJ74%2BMMGOqUBEpISA9EjFfAikZGH1a1wyfuYoEcEq5EsJIsCpWct05EfpV7bhH2DVLpBUwonWEsnFQltLRC1FiMNluVljE67%2BNZnopDZe%2B1PQoX3ze8pQ6HPn0wLcjLoNICE%2Be7sI5NfXKEkdLg8yeh%2FcP%2BP1JwQQ2EgPbmLwPpXWBlXthon9ghHzBhwC4PeAXuvMQvHXa6C5QJVaLvi%2FFjwT9rDn2IOuQn5CT93&X-Amz-Signature=057f184ebfc9bb8b9200f9838535a8b1610b6afadf3bf893510a1b466fb4dacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJAKOEV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmW2X3LjoW9mDxcBRs4h8Ow3GVS4nEE%2FkmaflTbOLQRQIgEiZ1V4tGNXuvnZLd66Fwad9%2FY2uZ5S65iz%2BckTl6PsAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw12Rf5qBuQVAi6OyrcA1aKmXOA%2F%2BIkYaH8yM9CoqE8DKpjcqPI3fgycpFPV1U3nS3P0q%2BGdz5OQ3pUSzzvMAtmAa%2FRtZ9ZglA%2FPmZ05MaFtfs4FOfQ0fyiC6WE%2FwWBTaobnHwF%2BP96WKbQMu%2BkcLZoIBa7wwkZDfoTJRmZ6bH1X4iTHz1KdSMUJxqbf54AJhizX3wKhcwefovj%2FLAZ5kcbde2xi2f9lteyCnJIvMvXwB5zk9IQrcCBoz2Rwe%2B6zywqiBFb3X1c%2BSZO%2B%2BxKGF%2FJEVg4yEY5q7rD%2BXJxeMVUA8FnPToJ5ge3rq5RYT3auY4bK1rfR%2FXRCSd7eNHk8c%2FhN1eI5Sce%2FuebQcIzlJryQjH7nsos8jA4YgR7%2BQhuX26YAqKIHbwKmpUwCKVaLreTczsXqeyTRgFXxvOo7KBDNJ9%2Bu7Of%2BsWDCmduwO%2FHsSsKvyqJc38j8RJNafvhfiHY9gopv%2B7GNm7gQRsG0FuB8xSuLinElDzvt0pkcfGWc8T3QpfvcMhFIJ0%2B3%2BblLKoC5TeiMJL%2BLibn7NGRHBWmN%2Bp5XZvYmOcEMehvtx3UFslk696b8L4W8R8kdtAZJoNOZDpHL5NmCzKXIEjCekTnognMObv%2FKl7%2F9rpVLIaAi%2FxtEfnxDVD13onsMJ74%2BMMGOqUBEpISA9EjFfAikZGH1a1wyfuYoEcEq5EsJIsCpWct05EfpV7bhH2DVLpBUwonWEsnFQltLRC1FiMNluVljE67%2BNZnopDZe%2B1PQoX3ze8pQ6HPn0wLcjLoNICE%2Be7sI5NfXKEkdLg8yeh%2FcP%2BP1JwQQ2EgPbmLwPpXWBlXthon9ghHzBhwC4PeAXuvMQvHXa6C5QJVaLvi%2FFjwT9rDn2IOuQn5CT93&X-Amz-Signature=bd061397a0138092eec96f2b14564fd7f26793308be71480f9d3f79674a48398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJAKOEV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmW2X3LjoW9mDxcBRs4h8Ow3GVS4nEE%2FkmaflTbOLQRQIgEiZ1V4tGNXuvnZLd66Fwad9%2FY2uZ5S65iz%2BckTl6PsAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw12Rf5qBuQVAi6OyrcA1aKmXOA%2F%2BIkYaH8yM9CoqE8DKpjcqPI3fgycpFPV1U3nS3P0q%2BGdz5OQ3pUSzzvMAtmAa%2FRtZ9ZglA%2FPmZ05MaFtfs4FOfQ0fyiC6WE%2FwWBTaobnHwF%2BP96WKbQMu%2BkcLZoIBa7wwkZDfoTJRmZ6bH1X4iTHz1KdSMUJxqbf54AJhizX3wKhcwefovj%2FLAZ5kcbde2xi2f9lteyCnJIvMvXwB5zk9IQrcCBoz2Rwe%2B6zywqiBFb3X1c%2BSZO%2B%2BxKGF%2FJEVg4yEY5q7rD%2BXJxeMVUA8FnPToJ5ge3rq5RYT3auY4bK1rfR%2FXRCSd7eNHk8c%2FhN1eI5Sce%2FuebQcIzlJryQjH7nsos8jA4YgR7%2BQhuX26YAqKIHbwKmpUwCKVaLreTczsXqeyTRgFXxvOo7KBDNJ9%2Bu7Of%2BsWDCmduwO%2FHsSsKvyqJc38j8RJNafvhfiHY9gopv%2B7GNm7gQRsG0FuB8xSuLinElDzvt0pkcfGWc8T3QpfvcMhFIJ0%2B3%2BblLKoC5TeiMJL%2BLibn7NGRHBWmN%2Bp5XZvYmOcEMehvtx3UFslk696b8L4W8R8kdtAZJoNOZDpHL5NmCzKXIEjCekTnognMObv%2FKl7%2F9rpVLIaAi%2FxtEfnxDVD13onsMJ74%2BMMGOqUBEpISA9EjFfAikZGH1a1wyfuYoEcEq5EsJIsCpWct05EfpV7bhH2DVLpBUwonWEsnFQltLRC1FiMNluVljE67%2BNZnopDZe%2B1PQoX3ze8pQ6HPn0wLcjLoNICE%2Be7sI5NfXKEkdLg8yeh%2FcP%2BP1JwQQ2EgPbmLwPpXWBlXthon9ghHzBhwC4PeAXuvMQvHXa6C5QJVaLvi%2FFjwT9rDn2IOuQn5CT93&X-Amz-Signature=6a609eef3fb38559562757d27b46e0459cbe28c61846c1f75b0c07651f7996c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJAKOEV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmW2X3LjoW9mDxcBRs4h8Ow3GVS4nEE%2FkmaflTbOLQRQIgEiZ1V4tGNXuvnZLd66Fwad9%2FY2uZ5S65iz%2BckTl6PsAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw12Rf5qBuQVAi6OyrcA1aKmXOA%2F%2BIkYaH8yM9CoqE8DKpjcqPI3fgycpFPV1U3nS3P0q%2BGdz5OQ3pUSzzvMAtmAa%2FRtZ9ZglA%2FPmZ05MaFtfs4FOfQ0fyiC6WE%2FwWBTaobnHwF%2BP96WKbQMu%2BkcLZoIBa7wwkZDfoTJRmZ6bH1X4iTHz1KdSMUJxqbf54AJhizX3wKhcwefovj%2FLAZ5kcbde2xi2f9lteyCnJIvMvXwB5zk9IQrcCBoz2Rwe%2B6zywqiBFb3X1c%2BSZO%2B%2BxKGF%2FJEVg4yEY5q7rD%2BXJxeMVUA8FnPToJ5ge3rq5RYT3auY4bK1rfR%2FXRCSd7eNHk8c%2FhN1eI5Sce%2FuebQcIzlJryQjH7nsos8jA4YgR7%2BQhuX26YAqKIHbwKmpUwCKVaLreTczsXqeyTRgFXxvOo7KBDNJ9%2Bu7Of%2BsWDCmduwO%2FHsSsKvyqJc38j8RJNafvhfiHY9gopv%2B7GNm7gQRsG0FuB8xSuLinElDzvt0pkcfGWc8T3QpfvcMhFIJ0%2B3%2BblLKoC5TeiMJL%2BLibn7NGRHBWmN%2Bp5XZvYmOcEMehvtx3UFslk696b8L4W8R8kdtAZJoNOZDpHL5NmCzKXIEjCekTnognMObv%2FKl7%2F9rpVLIaAi%2FxtEfnxDVD13onsMJ74%2BMMGOqUBEpISA9EjFfAikZGH1a1wyfuYoEcEq5EsJIsCpWct05EfpV7bhH2DVLpBUwonWEsnFQltLRC1FiMNluVljE67%2BNZnopDZe%2B1PQoX3ze8pQ6HPn0wLcjLoNICE%2Be7sI5NfXKEkdLg8yeh%2FcP%2BP1JwQQ2EgPbmLwPpXWBlXthon9ghHzBhwC4PeAXuvMQvHXa6C5QJVaLvi%2FFjwT9rDn2IOuQn5CT93&X-Amz-Signature=64af9c4776768bad71eaa1b735e4b4cb84348e3afac1bb3a5464bd42c38c1b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJAKOEV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmW2X3LjoW9mDxcBRs4h8Ow3GVS4nEE%2FkmaflTbOLQRQIgEiZ1V4tGNXuvnZLd66Fwad9%2FY2uZ5S65iz%2BckTl6PsAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw12Rf5qBuQVAi6OyrcA1aKmXOA%2F%2BIkYaH8yM9CoqE8DKpjcqPI3fgycpFPV1U3nS3P0q%2BGdz5OQ3pUSzzvMAtmAa%2FRtZ9ZglA%2FPmZ05MaFtfs4FOfQ0fyiC6WE%2FwWBTaobnHwF%2BP96WKbQMu%2BkcLZoIBa7wwkZDfoTJRmZ6bH1X4iTHz1KdSMUJxqbf54AJhizX3wKhcwefovj%2FLAZ5kcbde2xi2f9lteyCnJIvMvXwB5zk9IQrcCBoz2Rwe%2B6zywqiBFb3X1c%2BSZO%2B%2BxKGF%2FJEVg4yEY5q7rD%2BXJxeMVUA8FnPToJ5ge3rq5RYT3auY4bK1rfR%2FXRCSd7eNHk8c%2FhN1eI5Sce%2FuebQcIzlJryQjH7nsos8jA4YgR7%2BQhuX26YAqKIHbwKmpUwCKVaLreTczsXqeyTRgFXxvOo7KBDNJ9%2Bu7Of%2BsWDCmduwO%2FHsSsKvyqJc38j8RJNafvhfiHY9gopv%2B7GNm7gQRsG0FuB8xSuLinElDzvt0pkcfGWc8T3QpfvcMhFIJ0%2B3%2BblLKoC5TeiMJL%2BLibn7NGRHBWmN%2Bp5XZvYmOcEMehvtx3UFslk696b8L4W8R8kdtAZJoNOZDpHL5NmCzKXIEjCekTnognMObv%2FKl7%2F9rpVLIaAi%2FxtEfnxDVD13onsMJ74%2BMMGOqUBEpISA9EjFfAikZGH1a1wyfuYoEcEq5EsJIsCpWct05EfpV7bhH2DVLpBUwonWEsnFQltLRC1FiMNluVljE67%2BNZnopDZe%2B1PQoX3ze8pQ6HPn0wLcjLoNICE%2Be7sI5NfXKEkdLg8yeh%2FcP%2BP1JwQQ2EgPbmLwPpXWBlXthon9ghHzBhwC4PeAXuvMQvHXa6C5QJVaLvi%2FFjwT9rDn2IOuQn5CT93&X-Amz-Signature=9227e0302df0f0884bdfa03242f62eaeaeacbd39bc5300a794211038db877038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJAKOEV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmW2X3LjoW9mDxcBRs4h8Ow3GVS4nEE%2FkmaflTbOLQRQIgEiZ1V4tGNXuvnZLd66Fwad9%2FY2uZ5S65iz%2BckTl6PsAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw12Rf5qBuQVAi6OyrcA1aKmXOA%2F%2BIkYaH8yM9CoqE8DKpjcqPI3fgycpFPV1U3nS3P0q%2BGdz5OQ3pUSzzvMAtmAa%2FRtZ9ZglA%2FPmZ05MaFtfs4FOfQ0fyiC6WE%2FwWBTaobnHwF%2BP96WKbQMu%2BkcLZoIBa7wwkZDfoTJRmZ6bH1X4iTHz1KdSMUJxqbf54AJhizX3wKhcwefovj%2FLAZ5kcbde2xi2f9lteyCnJIvMvXwB5zk9IQrcCBoz2Rwe%2B6zywqiBFb3X1c%2BSZO%2B%2BxKGF%2FJEVg4yEY5q7rD%2BXJxeMVUA8FnPToJ5ge3rq5RYT3auY4bK1rfR%2FXRCSd7eNHk8c%2FhN1eI5Sce%2FuebQcIzlJryQjH7nsos8jA4YgR7%2BQhuX26YAqKIHbwKmpUwCKVaLreTczsXqeyTRgFXxvOo7KBDNJ9%2Bu7Of%2BsWDCmduwO%2FHsSsKvyqJc38j8RJNafvhfiHY9gopv%2B7GNm7gQRsG0FuB8xSuLinElDzvt0pkcfGWc8T3QpfvcMhFIJ0%2B3%2BblLKoC5TeiMJL%2BLibn7NGRHBWmN%2Bp5XZvYmOcEMehvtx3UFslk696b8L4W8R8kdtAZJoNOZDpHL5NmCzKXIEjCekTnognMObv%2FKl7%2F9rpVLIaAi%2FxtEfnxDVD13onsMJ74%2BMMGOqUBEpISA9EjFfAikZGH1a1wyfuYoEcEq5EsJIsCpWct05EfpV7bhH2DVLpBUwonWEsnFQltLRC1FiMNluVljE67%2BNZnopDZe%2B1PQoX3ze8pQ6HPn0wLcjLoNICE%2Be7sI5NfXKEkdLg8yeh%2FcP%2BP1JwQQ2EgPbmLwPpXWBlXthon9ghHzBhwC4PeAXuvMQvHXa6C5QJVaLvi%2FFjwT9rDn2IOuQn5CT93&X-Amz-Signature=6d3e5e574af651df6fceb572a510794b90da138fab69a77a59b0b8e63f71d983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
