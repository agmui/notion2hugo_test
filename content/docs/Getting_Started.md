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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBJCZLE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVcOApaOxd64yuhhTSYw6fKuh17C87NL3PVSoUEVaAaAIgUNnck44az8fbDyebSQhCquxSFkcDkRhoeYva2mD4OgsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvtxqKmELNIF87fMCrcA2WfseYTAj9M4fhGufrG15JoSQtTbba4LhsT%2BRlsouSbQK%2FnuS3o76R9fCLA3Z5rLvXjDBjgmuQ3s557B6jm0uHCf%2B5RDI2gPDRG07fLYRLexMboo%2FZ8lrNO1EYPTgNNNSehHRZk9UPkBY2mcSEBjm5Q6aq2blwsnoCD8XKrJjDTLml8FH%2B7TtQP%2FUZHRXwEiPDhGI%2BPcE10d4cBNoaZrERUBiBwry3zcAs52mtSM16czjZzD0hH4RyDaBnf8D8PUszZY4l%2F0D%2FtD7IGuk4yZ%2FNai5aKs19adYXz5ptVJd6XNcEs6buqtJipWvLf%2BeOaBq5dbZ8tYTwlFy2R9YF%2FrZFAK19af9i5R%2Bkk3RVhUaen4aDL%2F1ColFaaRQ2QjLPsXiyRu7LuuZF4KVg2w8brmI%2BBYRqGT4h9TEPuzSerDLTUPqcdVL4BQFAYqlJeT9OISVV%2B3gUuTapnFyBPB8llO9H7ECgtT8CJDCGaFDGTzFL7O%2BMWYdlE%2B%2FevVr7g0FCsImBDWMp%2BzCoc14NqhQLzzXBswYfI35u3FddtuSV40foThH2K9M1lqHSaEwOitFepKGE5PvLGLnWxiDT8U1QqZNvjaJUFjfRQEBpNXci3fD2YrxwQhvxhx92dbZt1MLGk%2BMAGOqUB%2Fttgck6DXXh0g9%2B8MKyj4pelASrWLY89UIvctHGlTzupt8lJ933GS1V6zlknvx%2B80UjPKAj9bJeO4SReztQ%2Fz%2BulVJwuV%2FiWGiGxEdHCeLwpYJZabrFCfZw6Y02om3tpt2lIM0lLo2qdYOcuKoJyJhHMB80wbstgEhHm9tAYurNaym%2B0BIFEsp%2F%2BstKVjJrPUOgUVG7gMdZkAHw4Q83z5N4wk%2By0&X-Amz-Signature=6bc86f5b9da125a5899818d2e05d280bcad84201bf66178168b8c036d4f078d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBJCZLE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVcOApaOxd64yuhhTSYw6fKuh17C87NL3PVSoUEVaAaAIgUNnck44az8fbDyebSQhCquxSFkcDkRhoeYva2mD4OgsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvtxqKmELNIF87fMCrcA2WfseYTAj9M4fhGufrG15JoSQtTbba4LhsT%2BRlsouSbQK%2FnuS3o76R9fCLA3Z5rLvXjDBjgmuQ3s557B6jm0uHCf%2B5RDI2gPDRG07fLYRLexMboo%2FZ8lrNO1EYPTgNNNSehHRZk9UPkBY2mcSEBjm5Q6aq2blwsnoCD8XKrJjDTLml8FH%2B7TtQP%2FUZHRXwEiPDhGI%2BPcE10d4cBNoaZrERUBiBwry3zcAs52mtSM16czjZzD0hH4RyDaBnf8D8PUszZY4l%2F0D%2FtD7IGuk4yZ%2FNai5aKs19adYXz5ptVJd6XNcEs6buqtJipWvLf%2BeOaBq5dbZ8tYTwlFy2R9YF%2FrZFAK19af9i5R%2Bkk3RVhUaen4aDL%2F1ColFaaRQ2QjLPsXiyRu7LuuZF4KVg2w8brmI%2BBYRqGT4h9TEPuzSerDLTUPqcdVL4BQFAYqlJeT9OISVV%2B3gUuTapnFyBPB8llO9H7ECgtT8CJDCGaFDGTzFL7O%2BMWYdlE%2B%2FevVr7g0FCsImBDWMp%2BzCoc14NqhQLzzXBswYfI35u3FddtuSV40foThH2K9M1lqHSaEwOitFepKGE5PvLGLnWxiDT8U1QqZNvjaJUFjfRQEBpNXci3fD2YrxwQhvxhx92dbZt1MLGk%2BMAGOqUB%2Fttgck6DXXh0g9%2B8MKyj4pelASrWLY89UIvctHGlTzupt8lJ933GS1V6zlknvx%2B80UjPKAj9bJeO4SReztQ%2Fz%2BulVJwuV%2FiWGiGxEdHCeLwpYJZabrFCfZw6Y02om3tpt2lIM0lLo2qdYOcuKoJyJhHMB80wbstgEhHm9tAYurNaym%2B0BIFEsp%2F%2BstKVjJrPUOgUVG7gMdZkAHw4Q83z5N4wk%2By0&X-Amz-Signature=5fdc2c78a45c62d2db891d7dd1305a6664c19c78254d0d3e13f21f8c92527e58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBJCZLE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVcOApaOxd64yuhhTSYw6fKuh17C87NL3PVSoUEVaAaAIgUNnck44az8fbDyebSQhCquxSFkcDkRhoeYva2mD4OgsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvtxqKmELNIF87fMCrcA2WfseYTAj9M4fhGufrG15JoSQtTbba4LhsT%2BRlsouSbQK%2FnuS3o76R9fCLA3Z5rLvXjDBjgmuQ3s557B6jm0uHCf%2B5RDI2gPDRG07fLYRLexMboo%2FZ8lrNO1EYPTgNNNSehHRZk9UPkBY2mcSEBjm5Q6aq2blwsnoCD8XKrJjDTLml8FH%2B7TtQP%2FUZHRXwEiPDhGI%2BPcE10d4cBNoaZrERUBiBwry3zcAs52mtSM16czjZzD0hH4RyDaBnf8D8PUszZY4l%2F0D%2FtD7IGuk4yZ%2FNai5aKs19adYXz5ptVJd6XNcEs6buqtJipWvLf%2BeOaBq5dbZ8tYTwlFy2R9YF%2FrZFAK19af9i5R%2Bkk3RVhUaen4aDL%2F1ColFaaRQ2QjLPsXiyRu7LuuZF4KVg2w8brmI%2BBYRqGT4h9TEPuzSerDLTUPqcdVL4BQFAYqlJeT9OISVV%2B3gUuTapnFyBPB8llO9H7ECgtT8CJDCGaFDGTzFL7O%2BMWYdlE%2B%2FevVr7g0FCsImBDWMp%2BzCoc14NqhQLzzXBswYfI35u3FddtuSV40foThH2K9M1lqHSaEwOitFepKGE5PvLGLnWxiDT8U1QqZNvjaJUFjfRQEBpNXci3fD2YrxwQhvxhx92dbZt1MLGk%2BMAGOqUB%2Fttgck6DXXh0g9%2B8MKyj4pelASrWLY89UIvctHGlTzupt8lJ933GS1V6zlknvx%2B80UjPKAj9bJeO4SReztQ%2Fz%2BulVJwuV%2FiWGiGxEdHCeLwpYJZabrFCfZw6Y02om3tpt2lIM0lLo2qdYOcuKoJyJhHMB80wbstgEhHm9tAYurNaym%2B0BIFEsp%2F%2BstKVjJrPUOgUVG7gMdZkAHw4Q83z5N4wk%2By0&X-Amz-Signature=89d7bec2b0ed6f170d2ac4cab18b26c9d232807f22e34ffb7c4383d08eb68a10&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSK6U4O%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIbzIwbf9urx59eS%2Fli5TJQ1SoMYXPz3WH9h8h3WTFqAIgAajibCGO3HoQabpo%2B0riBCBVTCz9pkl8WwFQ%2FPIF0CoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTa9T5uouD1%2FqZaFyrcA7%2BbVqK6%2FWKqaSZLDDCzM6%2FBiYTc%2BA6vZIsSsFHiHm4d%2BA3ptWmo0vhZhoT6xK59QlMY6%2FIbb9JxjX4pPINkKKy5NC8ZqNFIj9UHMwdiCIaolF9ONdircD53q55a3Ai50L4DaYZlfbJndJvm3V%2BPJscUfEAxQKLqCFTkMQJQnk8BZcNWJbHipjHNSZYIS4wrHTrD8P%2FVIcPkGO04SicBg8jw5q%2BqdXYpU5WVMEhUt3EdgYueUbx5jZ%2Ba%2FjjgUrB0brj9JgNMII8VTkcmvaxX9inGzldz0GYbVe1t75IAS0cygdzmuMFcF942U3o3QKGzHas2zU5ZraI%2F6%2FWYsDTJ2EmTvMQX2TJjawXke1gR7kYZ6EseJ8%2BkQ03IYCTj3TVsMaYt55v5EXDIANpmEz4s%2BvMHdj1jJ%2BBklWWf93urydTAWk6VdA%2BjI%2BU9Qpmy2T%2BBoTxFQstgn7ALl%2FSsfj%2BVOxrgvnOdwEV81MIE%2Fh7BUdl%2FJGmMkkPafBQAIO0jZ8ZkTqZj9eckk1gg9xY3jHgXYF%2BR9YqicmTAF63KRkU29v8%2Fdg4TJ2F5BH2Bm13gpafsqU5egNdiiu29HEciywI9cpBURZ3Hh6YRuTtBw209H6Ac2jwWxVl5pCuP3nf7MMal%2BMAGOqUBrhYJjgswVIT3AKhuxwSD7gkTJ%2FJuE1RV8yb0PxaFJpc7MGmOolO62J%2FEDEfkRjyW6fnQ9nv6%2FooyQTgq23YVyLM5wEAxPWetKqx%2Fgh4yBpDcyGOkWvtaWoWIItKjJC2H2AUqW8yOl70V6TiThKJvNVqX8D48INhzVC6gxXqAPxgcIsCmuYHFh54t6rZhks2pMyh98zY%2FeAcUjFLMcf93r1XSMQfN&X-Amz-Signature=7515c9e964fc9d69ae0f1e1f9dd9627bd80d3bbeaaab885989ef69aa21b9f8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUDCIC7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKwy8PhM5yQ00jgqy6K0UutA5WkcL8SHCD9ge%2B4oFH6AiEAorVhB5fwD6%2B%2Fg0EI9NbfMWr76bMrVkm%2FZqNRJ7ag5YIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfQisiYrwKKCvMSuircA%2ByxnwHfVl6zHBX7JOgZ8aHPPSr%2BwV%2FPzJ52%2FqGhUjxpfO6HRDnTwiCVTeF48y8uytUL7%2F4dWnfTagWBiJ6AuCgt8SNnrkVdIW%2BD5%2FmFUkaUqE5ME%2FkFtFQhQwsOOGdchm5rsjRC%2FfUTcxijGJTTkzPQ7ms78br1E80HjbTW2xDPh70KiUMYhW4%2FEO2md2FpAZDSURe15WIXX%2BpeKxUQ55FovXcavo6vk7QhlOjK7CKn85oNCrLe0Dn07l6sVqF12voAfADkaW%2FJQ1hWVBEZCrTEIDBZHB28jfgs1PmBCDs0ipWlUhJ4%2BNSgkroqYRsLXfS9YwFDC0LSvT3CDFlBccPWowIbV63jgEIEq5bY4o%2FGR6XUsdaajbDOpcQlZs%2FW99mj5Vk7HUxobOV1RUajzvXCwDUOB4gj15U69Bbau74v8vRV0T1tFkZqiT8IVXUQ2B601bWfynvLsTf61LPQhjbWaSx5AHmducD49XStrKiPqwVKHamMlN8GMSe%2B7M%2BZcOW%2Fhx1q%2Bu3uapFZkDRtb0Bvi%2B85uLb0xW14M3L0DINUuJo92QVB87SL5hajzU2EHhpd1EYPmmMJusP3li8rdlbjUUWL7b4eE138xAETjqVOeSAkYoR5XV5e9MAmMLCk%2BMAGOqUBkg71UaViAKfB0CwiX9H6ek07i3NDWMcORnCa39FtLKTFNGh6lWBKUcCsu1h6ulsXrqXL5iv1rlkMtKSMDMaYErGsB7VJff3Spxi59p5pg6gaooU2NjtyeIoiYsmAVpVYMUnepg5oHpz6%2BIyy%2FdpxJrV8%2F1cyuwj0md00m574FvSdwNAZNoFI7CPdAGh%2FP3QvQ3n00gMiCjAOrxpxRNykDteezg43&X-Amz-Signature=6acaef4ddec15e80c4e7debc2f448de6be3c5062a32faf6a37caf22085f7cfc6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBJCZLE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVcOApaOxd64yuhhTSYw6fKuh17C87NL3PVSoUEVaAaAIgUNnck44az8fbDyebSQhCquxSFkcDkRhoeYva2mD4OgsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvtxqKmELNIF87fMCrcA2WfseYTAj9M4fhGufrG15JoSQtTbba4LhsT%2BRlsouSbQK%2FnuS3o76R9fCLA3Z5rLvXjDBjgmuQ3s557B6jm0uHCf%2B5RDI2gPDRG07fLYRLexMboo%2FZ8lrNO1EYPTgNNNSehHRZk9UPkBY2mcSEBjm5Q6aq2blwsnoCD8XKrJjDTLml8FH%2B7TtQP%2FUZHRXwEiPDhGI%2BPcE10d4cBNoaZrERUBiBwry3zcAs52mtSM16czjZzD0hH4RyDaBnf8D8PUszZY4l%2F0D%2FtD7IGuk4yZ%2FNai5aKs19adYXz5ptVJd6XNcEs6buqtJipWvLf%2BeOaBq5dbZ8tYTwlFy2R9YF%2FrZFAK19af9i5R%2Bkk3RVhUaen4aDL%2F1ColFaaRQ2QjLPsXiyRu7LuuZF4KVg2w8brmI%2BBYRqGT4h9TEPuzSerDLTUPqcdVL4BQFAYqlJeT9OISVV%2B3gUuTapnFyBPB8llO9H7ECgtT8CJDCGaFDGTzFL7O%2BMWYdlE%2B%2FevVr7g0FCsImBDWMp%2BzCoc14NqhQLzzXBswYfI35u3FddtuSV40foThH2K9M1lqHSaEwOitFepKGE5PvLGLnWxiDT8U1QqZNvjaJUFjfRQEBpNXci3fD2YrxwQhvxhx92dbZt1MLGk%2BMAGOqUB%2Fttgck6DXXh0g9%2B8MKyj4pelASrWLY89UIvctHGlTzupt8lJ933GS1V6zlknvx%2B80UjPKAj9bJeO4SReztQ%2Fz%2BulVJwuV%2FiWGiGxEdHCeLwpYJZabrFCfZw6Y02om3tpt2lIM0lLo2qdYOcuKoJyJhHMB80wbstgEhHm9tAYurNaym%2B0BIFEsp%2F%2BstKVjJrPUOgUVG7gMdZkAHw4Q83z5N4wk%2By0&X-Amz-Signature=04fe5a6cfe2a2e6191d12eb54bef7b43003a806794e6144411930cb99d388ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
