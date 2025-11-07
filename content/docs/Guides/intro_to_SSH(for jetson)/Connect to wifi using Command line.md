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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPYFTEX%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQuw10uXTmOk8O18fz6icyYtwPSFubw%2F2S7Cc9r4wjAiAsjiIjLQqpbFBDezjF4XLLBFfbyrl0hDA4SrAoAHBpViqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuIvZJYELX1EpfwdKtwDpMTG4TntZEi5wLisv93IFlrH8n37fW36ytXd2EqwZnIB%2BzVRaGb0%2B628dII5S%2Bsz4vnTr09CNoPQhm71jEacWdeE%2BcdTkqz8AojPM7t21mWRDDisvRY8u4Af4eIYEAyOoKl9pKkDMEqBfomjA316gylqIKonyCuMd%2FULX2EhqX60wNNjPo1X1JECTOJqVL7kSdBM4%2Fi85voK2WTLmga0B%2FnOttONs34Z3%2F0MFHQ73KrKe5mSXbJKK%2BOVeumEg7X5Cs1Hf9siJ9rhOTyZ%2F1tze0yUCzTPxhzyPIQZ0oDZU5JYEeM0FJhmQNSOIdAd96wRj%2BpozFontJSvvn%2Bm5V39ETUHPPEu60KaRAhxHQhrTLnq2Xa3FVAmXn25%2FdZFKilFL6v8iziN3reEpnOSkt%2BcJ1uScKsV4vzJcj12ThSrHXZYD7pkNasg4vAogM1nJpLdHDjweKFmTlmKEzALSe0xiwEpH2dXbFQ8Kt9LePD2WM2%2BeB2%2FWDp%2BSppGBtlByWjhssXvHzPVkqSnURnjGz4LxK962c1SmxTmh%2B%2BoLlkdaZQtvjbqEu8k4gA6kmfe4vPtO5mq8%2FdbPRRtnY2xhcIUuNhvVfMBJbO%2BfTQLP%2FTdT560g29X5GfCHtMozGwwiZe1yAY6pgGPl8ZTG0YPBgq6CCaOy0Xi4JDCqW7q6wJ32ufKWNWn1ZNci7N%2B02sQq8PBt5d8%2B7FqMN%2FioY5FeFgqijoi3F35t85T8FuwIXicP8x796MvXqFwE53iiDkL02EepsJrfx4aCjyz80c2Rg6JwsmVxVdPwkAC3GwpTHCr%2BUOaJ%2FLG%2BOhV8%2BdSh%2B4e%2FlGg9gTOL%2F3hOlml%2BCCVJ9SDQpj64bKEcUjEPI5%2F&X-Amz-Signature=6b28923ae447c3f2f80d6d66fcb1545958d55a119dc63f77ce3b90ed9f9b3afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
