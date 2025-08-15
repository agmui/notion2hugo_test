---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NGWALW2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDtaTnbCjEd%2Bqp%2FOyg%2BNKKi0mEKTJLQOYUm8lFvePCYuAIhALbZN9DGQp3Y3GfVpObVC2vGDsSJZEi5YpsN%2BafT1EvnKv8DCFMQABoMNjM3NDIzMTgzODA1IgxyegGl3CZnXjGdjGgq3APG2ZWj45Vx4PypLqawB6s1hgRjpzZCCo4DIIhnlM0%2BxjweXvd6tsivtr%2FqnA5RiKvM1EkPWoE68ml19p9HYy2QFJrkQExcHBlayGSDYyzRNCdsVktPDTF6DVbctMn%2BbN%2BcHfvt1dQpvpdQLiHSa2uGqkC5UGx2%2BJGPuQ36GMZNQoWK0qMkDKrRO161sdWAEOb%2FabTSNaLHH%2Bihn1xruagApghfIU%2FrUengbqg5SaciEWwf5A7V9m4MsHf3Jm2yjFMibfIsK8%2FGN%2F7p9xAN%2FTxaWSHV2LLq9DtPXeQ6iWg0OceLBO8uyBHRVGMGXmzX5ZjlSapEkNbmRCwVex5Zi59aF5u3hxcnv00INEoWKKHowEd%2B1Qf%2Bh0HRf9tql2tCQ1d8M36CHr6y%2FMCm44h57iICBrcMcimhTyZJD%2BQgqZ4doSe0hG0uOSjK7ZC5cKpDnquAYokVNMjxquo%2FHW4JhIkA0%2Bbwv0Swrgcu%2FT%2BI2INmxi4b5ZwJ9L%2FdUXw5%2B2jFpAYcSZBJu5bP5U9e9sLnjt1e4u5h2wtBtrK6zq11HzrjyigpdpFPdtLdnKhexeLLDv4sIH8z1nMQqCCpuy2f1GM8WUXAXaS2K9xJN7ofQuR%2BkzCe8q%2FfBxpc%2BhvKsDCqo%2FrEBjqkAQqWbFsNtsZ5cU8OCg0XE7aJmWMYaemlna7N7U8V8xg0TTIp0ap%2BrmRVbJEsoYho7qWM802sHsb8yZv1Tp%2BdTYIEuboHem7a4%2BFgonsvS8myTCmkfyCFDuufStjiK8U9SoZMeFU1Kufa28NOJXYKjT0Bt%2B8DH8ahUubmIuSMVisj6jXX9uNJMtcqF5u6uO4nvchgEsz1MPGzja5mtsoKpNQRjtf6&X-Amz-Signature=d0297c8390fc9cf3dd02973e3d0b160eefd51a94ea1980232d1305dbce78bf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NGWALW2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDtaTnbCjEd%2Bqp%2FOyg%2BNKKi0mEKTJLQOYUm8lFvePCYuAIhALbZN9DGQp3Y3GfVpObVC2vGDsSJZEi5YpsN%2BafT1EvnKv8DCFMQABoMNjM3NDIzMTgzODA1IgxyegGl3CZnXjGdjGgq3APG2ZWj45Vx4PypLqawB6s1hgRjpzZCCo4DIIhnlM0%2BxjweXvd6tsivtr%2FqnA5RiKvM1EkPWoE68ml19p9HYy2QFJrkQExcHBlayGSDYyzRNCdsVktPDTF6DVbctMn%2BbN%2BcHfvt1dQpvpdQLiHSa2uGqkC5UGx2%2BJGPuQ36GMZNQoWK0qMkDKrRO161sdWAEOb%2FabTSNaLHH%2Bihn1xruagApghfIU%2FrUengbqg5SaciEWwf5A7V9m4MsHf3Jm2yjFMibfIsK8%2FGN%2F7p9xAN%2FTxaWSHV2LLq9DtPXeQ6iWg0OceLBO8uyBHRVGMGXmzX5ZjlSapEkNbmRCwVex5Zi59aF5u3hxcnv00INEoWKKHowEd%2B1Qf%2Bh0HRf9tql2tCQ1d8M36CHr6y%2FMCm44h57iICBrcMcimhTyZJD%2BQgqZ4doSe0hG0uOSjK7ZC5cKpDnquAYokVNMjxquo%2FHW4JhIkA0%2Bbwv0Swrgcu%2FT%2BI2INmxi4b5ZwJ9L%2FdUXw5%2B2jFpAYcSZBJu5bP5U9e9sLnjt1e4u5h2wtBtrK6zq11HzrjyigpdpFPdtLdnKhexeLLDv4sIH8z1nMQqCCpuy2f1GM8WUXAXaS2K9xJN7ofQuR%2BkzCe8q%2FfBxpc%2BhvKsDCqo%2FrEBjqkAQqWbFsNtsZ5cU8OCg0XE7aJmWMYaemlna7N7U8V8xg0TTIp0ap%2BrmRVbJEsoYho7qWM802sHsb8yZv1Tp%2BdTYIEuboHem7a4%2BFgonsvS8myTCmkfyCFDuufStjiK8U9SoZMeFU1Kufa28NOJXYKjT0Bt%2B8DH8ahUubmIuSMVisj6jXX9uNJMtcqF5u6uO4nvchgEsz1MPGzja5mtsoKpNQRjtf6&X-Amz-Signature=bf5aa9776547c2cb098f343592c39069221c4fc6bad97c8b5b5bcd8b301c57e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NGWALW2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDtaTnbCjEd%2Bqp%2FOyg%2BNKKi0mEKTJLQOYUm8lFvePCYuAIhALbZN9DGQp3Y3GfVpObVC2vGDsSJZEi5YpsN%2BafT1EvnKv8DCFMQABoMNjM3NDIzMTgzODA1IgxyegGl3CZnXjGdjGgq3APG2ZWj45Vx4PypLqawB6s1hgRjpzZCCo4DIIhnlM0%2BxjweXvd6tsivtr%2FqnA5RiKvM1EkPWoE68ml19p9HYy2QFJrkQExcHBlayGSDYyzRNCdsVktPDTF6DVbctMn%2BbN%2BcHfvt1dQpvpdQLiHSa2uGqkC5UGx2%2BJGPuQ36GMZNQoWK0qMkDKrRO161sdWAEOb%2FabTSNaLHH%2Bihn1xruagApghfIU%2FrUengbqg5SaciEWwf5A7V9m4MsHf3Jm2yjFMibfIsK8%2FGN%2F7p9xAN%2FTxaWSHV2LLq9DtPXeQ6iWg0OceLBO8uyBHRVGMGXmzX5ZjlSapEkNbmRCwVex5Zi59aF5u3hxcnv00INEoWKKHowEd%2B1Qf%2Bh0HRf9tql2tCQ1d8M36CHr6y%2FMCm44h57iICBrcMcimhTyZJD%2BQgqZ4doSe0hG0uOSjK7ZC5cKpDnquAYokVNMjxquo%2FHW4JhIkA0%2Bbwv0Swrgcu%2FT%2BI2INmxi4b5ZwJ9L%2FdUXw5%2B2jFpAYcSZBJu5bP5U9e9sLnjt1e4u5h2wtBtrK6zq11HzrjyigpdpFPdtLdnKhexeLLDv4sIH8z1nMQqCCpuy2f1GM8WUXAXaS2K9xJN7ofQuR%2BkzCe8q%2FfBxpc%2BhvKsDCqo%2FrEBjqkAQqWbFsNtsZ5cU8OCg0XE7aJmWMYaemlna7N7U8V8xg0TTIp0ap%2BrmRVbJEsoYho7qWM802sHsb8yZv1Tp%2BdTYIEuboHem7a4%2BFgonsvS8myTCmkfyCFDuufStjiK8U9SoZMeFU1Kufa28NOJXYKjT0Bt%2B8DH8ahUubmIuSMVisj6jXX9uNJMtcqF5u6uO4nvchgEsz1MPGzja5mtsoKpNQRjtf6&X-Amz-Signature=13a7b423637b8634c1ede0e9429bddb5b045520226f386486aa0ddddc056cb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7UJNIF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGXDbY%2Fv9jqgu0ezP%2BIHwAcOIrssbxC2gQ29bdENvriGAiABduXJLv9eSacaTzYZL0gonXu1Vi8p4eNFQ2fJfFQYpir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQIOFUR8DvnD2kzqtKtwD8fzEbJtNLOdqj8FeDZpVaJaIa%2B6%2FLZHuWIFzvPNBhe86oa4IDjiHNz3qXEVUMPDrmTAY5yrnXS6HgHWGsEKexSlrxRQcquE2V0Mgibrf3njnFd7%2BIddJ27LeNbVITWg2v77ymgRUcvjE7Gsk7M1mvW%2F6O5%2B%2FKMEn5MRr9UYVFbQ2UQVFW%2FEtEe9y7zPrXEfimB1iAIXFPQKua4fV7o8AZb4lQ%2Fpiz%2FGyn7kFQ5C9nl7BEjyEJfBHpVNhweXrGmPe4%2FzaWiyAiL3JOUU706ZjNHJnnOjVU4TLE1Ir2utD1lkA61GAvpSgXtPZICEsfuo8crTOireMNBfpLWgXdu0ThRpUZCmjfFlLzYe9TQOnakkLjwT02Cy%2BZVki%2BvOIFHopImeZ%2FxZKDFZy2WjhVEDNKK4GWR%2BK8LOcT4ALtYacju0xi84m9QlU0OxXoEPSD%2BiRrTcU920QpTuuZ4oy3SJwn5xTbJIZjuIOJnHNmlUpLBNmY8TUhwdqEbQDnA2o6JvtpSJK4lk8Z6F26OshOt8wxpeXuSVDaRG05RSeJ3JRw92tuOaJKU8UxeSbWtBQqLt5I0ruPehTcE7FRJyatdGY74TCKXWXvLVNM9sD7sCmYjm2fmqWOununpgkzuUw2qP6xAY6pgFxDElyhWPHlKrt0BQOlXVP6Z3e3PB%2BaHWCD%2F59Mwl6enuhT4ZB4DhrxAdsSEG6bqP6ivEM0eZXBQRlQTZqgwy2OWepJmNdl8iu4nrfr%2FuC0JmB2dV4zfdvv1b%2Bz0X8gLGoz4DEfittxbUeWMpAu%2BNtRwTJuQvJ%2FEhPZDLLPpHGyrYU0eQbDVpDQQBETeI2YnOuz8Z4X8cqs00cW9HPyzD3IiOJ3%2BIR&X-Amz-Signature=5daea398b186cda37d436f5ab7171f106918ed5989e73ed12e9f0cb22dbabb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNBC5BG3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFFHs%2BBBLczr50vTR7u76h87Vf6fvV8GrtIsP5kiWnStAiAGg7JYxja33eVHNF2kcOb79rYiIJu6wNmGy%2F2t0obcKCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM98RSz9O5Ai4zXui9KtwDoIcXqi2Vr5Ri9Avi2A1Oj8lWusmnmhTzHNjWf8d0SEaCjDRx5BlSVDxqiXvZDifM9hrFdeI580zaa6RNO7uCj28HMRGyjNYY9ePlLX2aDDLonojhOZhEdFGfBkA0jYiv%2BfxNTbeppQV7Ua3ZlaS3kE259ufNsBOVX%2B8yvXjLnRIHR0kmAfnO3KgCi7beSi25g%2BTFBDAbTsSanv8JHEFwrAYt6qTGUELxSnoD9TTEadtxu%2BRRMu%2BGIn%2F3UuHgh0k33MR0sGiHh2Yupq7tE4BKNYZE%2FPggMQgOsBVfGZe2i63dR0HKJXaGy62FF2LdDuHbQDptKeDM1plvWF5VOs%2FNHODDSVUsramwzMLXXPvN0VoRsFUH6oEq1vhpHu6ZODmh2izbYkV9zBypcHpowde42zc4vvoNrqmiDZTZ5ng9Tt3BOng3%2B7fuRYGaXvl43moAnKvwM23WxVAdgDpTsUfNkY8vyryWM9VaNrm5mSUc7188zYHDk82VZVxchEDz3mLuwRD9M%2FHBIyGARFj6gABLKNMNjamBkKDa1eszotaUbcfaw3G%2BEBhlmuMdTmKYY8ssZ2Y24lGzUO4sFKWwgI%2FR%2BleyTyYEYWEbLdFlxncOjD6%2Frb4O4CjrvzNN7eow9KP6xAY6pgE2FEkDeliV5cNRMzGlTmugg4GvFj84OvXvpZut53VvfsvyEivfFb3zHCgoEiBMmWbuaQAGR05%2FUdrYTp8F7KQeKaZp4fHr9LJW9WfFzoMCOZJ15wXsvV8bptUjx4RLoorcoSG%2F108Ck8FUcf%2FQKEwftkdJzL4YvwWL9dyls5jqYUOScVuf4G9XTZrHQmYW%2F7ghgJjw2bIzMqhY%2F21My40HF9qZrli9&X-Amz-Signature=7a88619ae4ed5bb7e01569c2f1bc956f0dfb2c770007a938478a824ef8a84a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NGWALW2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDtaTnbCjEd%2Bqp%2FOyg%2BNKKi0mEKTJLQOYUm8lFvePCYuAIhALbZN9DGQp3Y3GfVpObVC2vGDsSJZEi5YpsN%2BafT1EvnKv8DCFMQABoMNjM3NDIzMTgzODA1IgxyegGl3CZnXjGdjGgq3APG2ZWj45Vx4PypLqawB6s1hgRjpzZCCo4DIIhnlM0%2BxjweXvd6tsivtr%2FqnA5RiKvM1EkPWoE68ml19p9HYy2QFJrkQExcHBlayGSDYyzRNCdsVktPDTF6DVbctMn%2BbN%2BcHfvt1dQpvpdQLiHSa2uGqkC5UGx2%2BJGPuQ36GMZNQoWK0qMkDKrRO161sdWAEOb%2FabTSNaLHH%2Bihn1xruagApghfIU%2FrUengbqg5SaciEWwf5A7V9m4MsHf3Jm2yjFMibfIsK8%2FGN%2F7p9xAN%2FTxaWSHV2LLq9DtPXeQ6iWg0OceLBO8uyBHRVGMGXmzX5ZjlSapEkNbmRCwVex5Zi59aF5u3hxcnv00INEoWKKHowEd%2B1Qf%2Bh0HRf9tql2tCQ1d8M36CHr6y%2FMCm44h57iICBrcMcimhTyZJD%2BQgqZ4doSe0hG0uOSjK7ZC5cKpDnquAYokVNMjxquo%2FHW4JhIkA0%2Bbwv0Swrgcu%2FT%2BI2INmxi4b5ZwJ9L%2FdUXw5%2B2jFpAYcSZBJu5bP5U9e9sLnjt1e4u5h2wtBtrK6zq11HzrjyigpdpFPdtLdnKhexeLLDv4sIH8z1nMQqCCpuy2f1GM8WUXAXaS2K9xJN7ofQuR%2BkzCe8q%2FfBxpc%2BhvKsDCqo%2FrEBjqkAQqWbFsNtsZ5cU8OCg0XE7aJmWMYaemlna7N7U8V8xg0TTIp0ap%2BrmRVbJEsoYho7qWM802sHsb8yZv1Tp%2BdTYIEuboHem7a4%2BFgonsvS8myTCmkfyCFDuufStjiK8U9SoZMeFU1Kufa28NOJXYKjT0Bt%2B8DH8ahUubmIuSMVisj6jXX9uNJMtcqF5u6uO4nvchgEsz1MPGzja5mtsoKpNQRjtf6&X-Amz-Signature=405680d3e4e55d52799dfc8399b6f9cfbc2ef4bd9033d3564cca28b948e88053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
