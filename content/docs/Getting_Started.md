---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJQ7TKLL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRP37Cbtk6gTPYhgikJnTQcYR18sbILvmWWJVfMCGSSgIhAMcxGh1W25hk71SiVYUOgKA1k3KWlyqMZZA4EJRVzYwdKv8DCEQQABoMNjM3NDIzMTgzODA1IgyMCUF9T%2FgQ3KYDEX8q3AMW2NXyGckgzHw2URJ7MEXgr5Vp0GZH8mzOEDwkCF7aMLIe8eyRP2Gef%2BqB3wL2P644IJMVwsuVFZvG5QAd3j4EHnsYQq5TCaj5PHC9S2CM%2FOIgYPNkPNIxs2VaZe6b1qPB%2FYwqVP2YjesjDVNXQjQNpFONnSBh5DMnIgr2aOakoADN9nqnyPRk7WhhvRUJDZuD9JqifsSKpS2Zz1AH%2FsjiGwSGDkmyt0NLEOhNilv8WrD%2FwXQoP44QxiygbhdmvKLhoihybyszNC0Q%2BQuIL6yDXS6UocATZtrSsWJXV9nGoztz1qnwO60KcAqGSpx8tEo0P%2B0wgo2U5Qa61KWiwwisBPfO0lDB8FoPJUWsvX2QN%2ByOqdIWIRLezW1Hwd8UCswKsE%2BcGzbmbD4G991DpPtqQEdkfnURQKS6%2B1ZCcqJKpGp1P9u9vLmzXfw8vQwr0bWBMC41MBHee6b3zLYq4VZHgt1oM%2FpMkvi6toLMVg%2BqY4KgrSBejl4XA9z9Z8d%2FWO0pAF6s6ydk3Qt03L1IuxWJy4Klgn6nGr3RgfYg7%2F1LT8jvcb2s%2F3vcuotZf2PWcsvO49bJaGHnEZ7tpJ3caFj%2B93N9bWWD3LZYmBKR46HM2Z96WByWkK3nmPv7DDCQj%2F6%2FBjqkAfo1pRUz2SuJr1GAMlB3RJZ0HoU4m5Q%2BJuygFUbb%2BYSO%2F%2FDJsJQeu%2BBvzTJBWL2iFzajMaUAqA9fjODbpTDvcGAKa4rNkLrllEYSgIj1VASCzXXmjkze08I4dQvLkiZvf9QNbnbloVpmzXX8yPYIZxU1ZfK3hRkMZDdUqQ5XX0wlF8U43l3XzNLWGkfzs25eF0Jnm9NuzYwy8NLesGwbA7NXvhX3&X-Amz-Signature=87a971501387d5aa9a224e99443cc796a517ecacdd87e9a987687bec188feb84&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJQ7TKLL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRP37Cbtk6gTPYhgikJnTQcYR18sbILvmWWJVfMCGSSgIhAMcxGh1W25hk71SiVYUOgKA1k3KWlyqMZZA4EJRVzYwdKv8DCEQQABoMNjM3NDIzMTgzODA1IgyMCUF9T%2FgQ3KYDEX8q3AMW2NXyGckgzHw2URJ7MEXgr5Vp0GZH8mzOEDwkCF7aMLIe8eyRP2Gef%2BqB3wL2P644IJMVwsuVFZvG5QAd3j4EHnsYQq5TCaj5PHC9S2CM%2FOIgYPNkPNIxs2VaZe6b1qPB%2FYwqVP2YjesjDVNXQjQNpFONnSBh5DMnIgr2aOakoADN9nqnyPRk7WhhvRUJDZuD9JqifsSKpS2Zz1AH%2FsjiGwSGDkmyt0NLEOhNilv8WrD%2FwXQoP44QxiygbhdmvKLhoihybyszNC0Q%2BQuIL6yDXS6UocATZtrSsWJXV9nGoztz1qnwO60KcAqGSpx8tEo0P%2B0wgo2U5Qa61KWiwwisBPfO0lDB8FoPJUWsvX2QN%2ByOqdIWIRLezW1Hwd8UCswKsE%2BcGzbmbD4G991DpPtqQEdkfnURQKS6%2B1ZCcqJKpGp1P9u9vLmzXfw8vQwr0bWBMC41MBHee6b3zLYq4VZHgt1oM%2FpMkvi6toLMVg%2BqY4KgrSBejl4XA9z9Z8d%2FWO0pAF6s6ydk3Qt03L1IuxWJy4Klgn6nGr3RgfYg7%2F1LT8jvcb2s%2F3vcuotZf2PWcsvO49bJaGHnEZ7tpJ3caFj%2B93N9bWWD3LZYmBKR46HM2Z96WByWkK3nmPv7DDCQj%2F6%2FBjqkAfo1pRUz2SuJr1GAMlB3RJZ0HoU4m5Q%2BJuygFUbb%2BYSO%2F%2FDJsJQeu%2BBvzTJBWL2iFzajMaUAqA9fjODbpTDvcGAKa4rNkLrllEYSgIj1VASCzXXmjkze08I4dQvLkiZvf9QNbnbloVpmzXX8yPYIZxU1ZfK3hRkMZDdUqQ5XX0wlF8U43l3XzNLWGkfzs25eF0Jnm9NuzYwy8NLesGwbA7NXvhX3&X-Amz-Signature=612d9c4dca33e6e646b32d475f29743f9514a06a4a03f6d491aa94a0b63cd36b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXC7VSS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErWNxNpzcsp80h%2FwqUuXM5jXzbUSCHONJVnspkq%2BejuAiAPXUgz0F0H9or8e%2FMVgH8Vpk7BghUVXiuJe5IZbWni8Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMBTSZvi2BUjPaNVUYKtwDKUFHkvMY64Mc8P04hJWKXOBjEmXZEdaEoGUNCgOFgxMbDYmfXcI1HoMF1eT5v5qM7LD26522lArOQJzFsjENNTyH4vX1C7k6rm2w2hGln4RfCUYqdnIYLuiLhA5uCNJB3imJzpgw2FmIgYs8i78Q0sFL5vpyUzGd3flNXdcq2gHeorBKfzlSCpdtf1FfABfT6YKJcuEEQkTiHpICYecgeGrRoHhIWnsxORI66G58mwI7RI66VzSPP%2Fmx2ooJqTMuQa12ApxLIKswHeKbc7mrzqmmuasqc3811Avc8FuCzY37fub4IfMVo3WD11DzZCvN3aP%2BGxMnYI9Un6%2FGXOOE0Yi48MRoumbX2FgiseVA4%2FeTPWSSbm6GTHbmpeHarvZYeFVkQSJPRbaCJC3PqUohfc%2BeDcSjnQlqLE5ofWXO0pYD1Ldu7NV9K2K3mI1NweGp8zcwZUQ0dIxr6pkYZhewpNHjk8Ye2yBATVYLv8djSkbhuhZZZ9%2B9FeAipL02CSvq%2FLS85jwkkRQQq0qfwArEGuF9gzSQmdx1PlDgBsfxCLz9g3%2Fjg2Q5czzRjDWN9yPtFDmgDSI47KmfZq0ggg7O6ry6jCaeYpXuOjI5t4y4qXfT0lHj8LIe8Q37%2FYEwsI%2F%2BvwY6pgHM5DUjyjTVf8UbaCphoQOVP1A0uqSNZKlCmfu%2FS11eYriXXkPVE3pR8ZI3%2FBdWG1%2F%2BeCQGffzsag%2BxT%2B6NjtAbNWawbcgLV5m6qN7dJajIDxJpTAnlKaAEgTmeuCT6vKELDby%2BW65afSp7iS1rXMtiEgwR0RzgI4u0tfAwer8duA%2BhClvcHamlEeSS%2BTCsyBn7ps3brxbLx2qGYGm%2BAuFeNhnURM7d&X-Amz-Signature=b209f131031fe41ca14e78c3874c642763cf19c79f05bc845162792833c380ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZFA2R6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPCjlofuy28ZixiijvkCE63jv3E%2BRPgodMUDfDV9kGDwIgXEsvjCZjhbUFILtpdh9Pl2qxMUKPw821KnSGVHMJ1tsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB4uatzQjg0QnhXyZyrcA9rZYNWer36bjNDnlpSwe02dv7r%2F0ONpjzgvb0dQrZNSMnBUY4bSkQwU3FGZe3iLpc5cA9teEqqYz52AwHd4UJIF1KA4Xba1Pm6YwDdzkQu45RA1NQ3NEBViYMlT9wPJfzJs%2FKELaFf9%2B38UyDlKMQFwaCftUZyZ26gu7nkNQnDEBLWSTJGz4%2BWJs5Rj%2BMJneU9Sb47SHTB%2BZCB5RCRV3nxFrbuv6Yal0YBGYnbuRJ7jw1rIxglzGzxKZCHAfrRCf6VNg3N5Vo8RyGhe0FyE6pQEefnmkOlouIzevvExsnyI210rgQ9gLqLBQKcHyW1oe0JgvSWuCldScZS8SN8AkoMq8l0bQfPG1lRnaNl1JWkSSqqp7imXSAhJwsWfIqjd%2Bzl5gStDKi9kH3ELrK0jpLM4QnrJtYzlYlieP7ijkPuaoe272d1B%2BpsAqMQB54x%2B20yqsdQENyibRQ5d5y1ksSPiYzr3grNTiEyI1qJYpsUUFF5oz9tDpU2tXB7UCZbwNNFg%2BbcQ5cAxmEWJrZQl8tX1JRdcY4KbXSADF%2BGgyTqXv6iNd8%2F%2BiRvKRzJ9Z%2BnvskP0iKC6ziFlsBMwpOMzjYZqAQx0Jwf4rL4MyRdp30xS93jshRA%2FXhAnAn2bMKuP%2Fr8GOqUBAucBAJM0xI88QCElmNIA5gj9lfq6IEWrYRkBNgJXHMiUAs8Hy6T2qo3r86zlB4hPOl0ZHIndTt74ewDa0xMlI70GRDep47eGtVIKqDy0907gGhpsGdv5aCa27l7ZeYjpiMwDEzmuyUJi1Dlk8W%2FQPhPLyLTI%2BM5mHItCF6sSCjwyJR%2BQ5yRjXIbRq0Vz5I8w%2FE%2BRjEkeOxsNOfQHBqgn3gSNXJqn&X-Amz-Signature=f112308240056b4536322fd32832c8123c46f6078dbcb2dbdc54112191c7e148&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJQ7TKLL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRP37Cbtk6gTPYhgikJnTQcYR18sbILvmWWJVfMCGSSgIhAMcxGh1W25hk71SiVYUOgKA1k3KWlyqMZZA4EJRVzYwdKv8DCEQQABoMNjM3NDIzMTgzODA1IgyMCUF9T%2FgQ3KYDEX8q3AMW2NXyGckgzHw2URJ7MEXgr5Vp0GZH8mzOEDwkCF7aMLIe8eyRP2Gef%2BqB3wL2P644IJMVwsuVFZvG5QAd3j4EHnsYQq5TCaj5PHC9S2CM%2FOIgYPNkPNIxs2VaZe6b1qPB%2FYwqVP2YjesjDVNXQjQNpFONnSBh5DMnIgr2aOakoADN9nqnyPRk7WhhvRUJDZuD9JqifsSKpS2Zz1AH%2FsjiGwSGDkmyt0NLEOhNilv8WrD%2FwXQoP44QxiygbhdmvKLhoihybyszNC0Q%2BQuIL6yDXS6UocATZtrSsWJXV9nGoztz1qnwO60KcAqGSpx8tEo0P%2B0wgo2U5Qa61KWiwwisBPfO0lDB8FoPJUWsvX2QN%2ByOqdIWIRLezW1Hwd8UCswKsE%2BcGzbmbD4G991DpPtqQEdkfnURQKS6%2B1ZCcqJKpGp1P9u9vLmzXfw8vQwr0bWBMC41MBHee6b3zLYq4VZHgt1oM%2FpMkvi6toLMVg%2BqY4KgrSBejl4XA9z9Z8d%2FWO0pAF6s6ydk3Qt03L1IuxWJy4Klgn6nGr3RgfYg7%2F1LT8jvcb2s%2F3vcuotZf2PWcsvO49bJaGHnEZ7tpJ3caFj%2B93N9bWWD3LZYmBKR46HM2Z96WByWkK3nmPv7DDCQj%2F6%2FBjqkAfo1pRUz2SuJr1GAMlB3RJZ0HoU4m5Q%2BJuygFUbb%2BYSO%2F%2FDJsJQeu%2BBvzTJBWL2iFzajMaUAqA9fjODbpTDvcGAKa4rNkLrllEYSgIj1VASCzXXmjkze08I4dQvLkiZvf9QNbnbloVpmzXX8yPYIZxU1ZfK3hRkMZDdUqQ5XX0wlF8U43l3XzNLWGkfzs25eF0Jnm9NuzYwy8NLesGwbA7NXvhX3&X-Amz-Signature=118fd5b1e06afd52776a71dc188b649b81514c7f17e9045fc5115371a1bc6f62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
