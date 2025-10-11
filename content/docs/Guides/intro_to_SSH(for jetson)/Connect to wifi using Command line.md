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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T62KAOTZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH6qB813CIqLTSN5ywx0piqoUrhWovBnQCdTPmbKEbMEAiA0mlMppXaVYj%2FT15f%2FUgVW6iWj%2FEDW64qdSdEF9KR8WiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiFq9UJXUi%2Bx28wPaKtwDc82FzAxNZuFLy%2FeRIdhyEd1v9kxlAQ%2B6cSAJvLjIMypz%2BVNAbAPdWhkyjAqhZp7fFFD4fk6pW7FWn8llErD%2BAcCbEGQK4bIoJHCHI6Af26s96ByWWxAi%2BlOO9MWD7Y9r2%2BBkiyC0QijezFp0yShhDR7z4p4f3dUjrdAfrlQuSYM%2FqNHRvZavNAYsubNQxpfzjp%2FfzwmAWr%2BBr2CvR6R%2FA8DERBJHEYQTk2JKtlx7numJVGV9ro3JyaErO7x4e2qP5SmQjy0ey3WcSOyHJCOhq1raonUWzfPuRaN6uI8ZQvxppOgd9EVqsxsG5nCH%2BfO0UGXIS2M2cZooz6CD9QZePwGzrO4SG6mqZ2IRL%2Bi9PU%2F16xY3pOA0SZyRdnm12MYpaj%2F7q19WUJL%2Fjnk7yM3rlcRsioqypPvH93jjvlcNqbmeIiYbfKEhnoFLQKrdsNVFwT7rXxyFxezbw3oJwm2hYWgwmfY5PCyxfnTEmgZX3woY6lumcVVdmrOPheLwBLWUaup0zbWFjcA3i6fXgAnqFFElqNZyGyOaBRcHXaxjnom7tfayeS%2BVbSZR0OZqrKnoUhLFY9SB%2FmspS7dk6n3DXEoKOaZEdWJs1br29wRErL4duN87eIcXA1jkH2wwtdimxwY6pgFFOS%2BORlAnDQ435kKoIekbwLiaMpwytsezgBxuWN%2F51fYjXk%2FG3eC2cNPs58amX1jELYNUgVh0lneMeyR%2FCnvDIk8%2Bi8CibSGjqax%2B2fzjhvXLQWtl90Gov%2BZ6B9rvbSOT1iJBAQCn8NPnsr5dcRXr1Z3j22mrq40XN98DtqEDrt0jIdqks%2F0b74y6dk%2BQF6pSe0WUCWssF2ZPw5X9eMMikl2Q3ZAG&X-Amz-Signature=73cfeb0a6e677aa5fd0345296ce5dea557025fa900d8c5d9dac059a8b244cd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
