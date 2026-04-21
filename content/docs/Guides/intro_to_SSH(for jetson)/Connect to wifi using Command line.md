---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNG27JJ2%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICHZX9u1Zz%2B9HTSOfnv10RHcI8rRyEmgjHduC%2BNigrXEAiEA8mKz3TcqBdToYsQx%2BpWE1jyOHeBYdxJEhl5bSnypE20q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH3IELvd4eMedhg9NCrcA8dDCJcTRPvySS0lUJK9H7RcZR%2FkRPLOwhG5RwbEI4aoqWI%2BAxkpogbZG3PHhRtvdk17RjWdfJnGknGYwFVO1SxCz4KeT3Kw83PhQQvuiLC7cMYmkeCIf8mkqnfX4vun0nYPBmOXaT25oi0x1GMYuVivkp%2BCabFZPqWcbJ5Q7iu4J9e3z0U5H8Rwe9FTT0GdC4h9khB9jtMNRHk9R8OPhuFUQuDHtYIhAw6Y%2Fkx9855aKunI2EzSt6MbgsAFYlOFxgbrEBj5%2Bvt0bmQ%2FlNXEfi41UUO%2BV9GU9VAJTKxcQ8fX8O9qyRZ%2F9w%2Bq%2B6K9A5cDE0OfrurSUJGLLG7Ruh1QDqDr%2F4QRj2KUtG4D97p99V1hlzo9BGnDe3cbATHBg3Mo7tXWM97P2Xw3LKH%2BFdGK8COhqfCI%2BEvfeuJkP8kZJUuP0eXDkoxndG7Ajgt21%2BUf2hQS3kyRIU90keMTSCoeSUNJBiBMjSSCp97sXNtfTEir5h5ZULP%2FbskhN6ngcAfZooTrpayriM%2BJCV6xkCWo7GPvRT3taJhIZ8DDI6IeQOHEOUZp0QjNrRH%2BiDkdYU00%2Bj3VElk%2FNdzfcpQfmYKcZ5j9FqGv433DwxhmqscDm%2F%2BxvGW4zEI5iMvkxBaIMKKtm88GOqUBtTfpdoej%2FJDmlRkX%2F7ha4b4lMYPrw30HwYi46s5TJX15JuxltouVidlWEiz1bBpMJJyYjx3ES5OQPGYWKGaAjhWLyLI%2Bpf2MFdHK33Esc5RIWhi006%2FuMGB8ApCSaDxgV5jjMnkT6rdRlPFmA%2BadBXVy6nmlYJVOqXBQpgPv9HqXaJ2y3y1E6qQlcf5XZKTkzo5O%2BDDLCohBYDvR%2B546TW3PX5YY&X-Amz-Signature=d5116d0327ed4b8c7e6a4d7b62dfb369796f6c10633dadb009c32f97ac5b9c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
