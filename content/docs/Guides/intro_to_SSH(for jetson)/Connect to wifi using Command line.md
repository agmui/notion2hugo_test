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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EADHZG%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4XWsWJAwDgummf87fhFQPciEt519Ug1zTAfByh%2BMGgIgXaItkkQ4wE5a5%2FUtQVyG1ZcIoHeipHPjAjZkfmrEpGQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPVMh%2B35T6TFrJiMGyrcA9tUKEgSOreJUj9bXgzjpeJM74ejRdqRpPAyjPFfXxPAu1Gnt13sE3WpTe35ACxaOKxS9Aoz32pGOAB0H%2FCyRZHETtzRT9eZNeUCUBjJMsE65mXGvAGZ%2FEIsjvDMdFTjcj4%2F2TfFXxPcV2xtbe0Nvhobx3cSs3OKtnWpCG1IVMIR4c8CM0bIv6SAy9JxQ4QPUvVLMB9Ah6jJBccOVitrd6s5K%2B7dhbMQkt7xCD0zJnWqJRCGjfaCQFi3JFzQUz6Du86KIg0hokmiG90nav8BtNrxgXlESwb%2BIVJI3z%2FDApz%2FRi6IAdiPe61M7wf38ujZKW0fZMdcUpWmIqfpQdoQ1Ofg%2BrbJyEN4rgC0qsVxxiUIU%2BCSeaKFZOdTAWRbPLLTU6Oc9SdV07auifB2qZXdoZ6JotDDU4Z21OpE%2Fx5gTMXWfyj8QQLkmUuORE9vQzrOhB%2BZ9uOCV5IhSgonfncL4IZguRUkxlKelCE7ann6fP%2Br7TEE%2FeftNOPYR6gHIsh9jrtM%2BXaIsaZzjVIlNF397TqWrHClTtAh4dISwD1nbASOU1vPfhqbiKP8e%2BpdW9GllAe1BZWx%2F%2FgU6n6NAduy%2FIgO9FqlpK9O4qBOhsYxjsn7bjia4q9aqWAx3y7XMJaf68cGOqUBXdUA4aAb3GKgzpIrXnHLLv2arSINjEjGfQbzBU2%2FhHOi1ysIuf7XYogt%2FHJxjrMnUhZjYqEnUuFM%2BCIOwFGV%2FzuyLFRSBLbveMVCILOkGK6rFx4OJ8zyEqit3empiaxTQ3JT6B7JeSrcHNGRke3OnKPkVSD7RtXpoBRqZcvOXJZDO09yFffZafxbrHVP9oehErCi7u9LvasX2qTjHQOF%2BfR4yIWD&X-Amz-Signature=3c4a5ff1306337bb16f5a8ef2072794d073e948ac967bac403c6a2eac837ef08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
