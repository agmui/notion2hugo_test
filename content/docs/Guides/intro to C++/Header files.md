---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBX4YHNC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0n2UX%2Fa5yxV8%2B%2FvA7mPIy7B%2Fzfgvl6JUOc5kvrQsb%2BAIgHH30lzLIE4E4nCqovrj8t%2BfbRL54YLrEmxYf3r0EZLQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjOO7DGtBG1B1vnZyrcA8Bd4lvQTDyysr835faYteyD%2BapQZ8VnGPnBZDD9ylGoCwhTPE5Mr4Q6iwsJd%2Fig0GoXo8U%2Fr7dFQ%2Fa5PzGXsZpDvCqU9kQE7%2FqoqvmDYozjluY8tbZIgp3oOL8zOuNGSgmWc2epFWRHCD1VxRTwBVn8k97C%2FDrYiFosRbi6vs2OiWa%2Fhv5jqmrYxVHSm1LNG%2BKSsNlsSh2v8ejVPNWsCyeafbfkbQDxbsoZxuWAlQebabth8UW2BF2nfeX108oK6m6G5KNVHTN77%2Bwo6WzFPAs8VyEBSds85MRjuMrVT3Tqac9Db8ckVy2cGcVgj05JpJ6hStxxyBI7wZUQ3TOAcklncgiwnLF7ocOwj76wjVVtkn5YV3Fqn6dZKQ92o1L4S%2FmkaMIVXSXc%2Fnm%2FK4sw8tMhXBqo3%2Blt2fJPJIyRj8KD6BlfJxMwMQ7rxFTW09D8QEXAQE%2BqImH4KGTkBedyhUIQcMLi61exk95H65ZMbfaWmWBAwIjF1uR8t%2FoLblc6ofYNgtHtA4PElv5nfnxjNgmLgPB6jBCfWT8E%2BHM0OvNR0ko1YyyySaNx1rFo1kOg%2FQvGoIZSnwS5fO2je2nQDrtp7N3HlbI6In0rmJO8IWZ0Cs%2FiS0qA%2BjgPlXsKMPKK5b0GOqUBeHjdIp8jDrJVmZqpuMZYSU3YYNG1zi8pNz%2FAwz47Nm7yTBuFT5Hil%2B0UdTQ%2FC1sAVAYorcXNvm%2FYkVkTWyxgmKE5l9z9lPf%2F8fXNgFaAxn1U8ncZ7M5VbuYU33SLxaNih5v7Sw6pT%2BeLPjykA89LnTBjQr6tfNjFhmnkyKOX%2FCHDh0drrraWVJ5jfCRWIcF8iM9e75wWIJ45YOItb1ffjdeLwRs%2F&X-Amz-Signature=e15a2735820b47c46e8858b25b3e25b7b876acbace6c3188b3907ec0e2ba9404&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
